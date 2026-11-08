(function(){
'use strict';
var $=function(s,c){return (c||document).querySelector(s)};
var $$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var NS='http://www.w3.org/2000/svg';
function el(t,a,p){var e=document.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e}

/* ---------- split text into masked words ---------- */
function split(root){
  var i=0;
  (function walk(n){
    Array.prototype.slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){
        var f=document.createDocumentFragment();
        c.textContent.split(/(\s+)/).forEach(function(tok){
          if(!tok)return;
          if(/^\s+$/.test(tok)){f.appendChild(document.createTextNode(' '));return}
          var w=document.createElement('span');w.className='w';
          var s=document.createElement('span');s.textContent=tok;s.style.setProperty('--i',i++);w.appendChild(s);f.appendChild(w);
        });
        n.replaceChild(f,c);
      }else if(c.nodeType===1&&!c.id){walk(c)}
    });
  })(root);
}
$$('[data-split]').forEach(function(e){split(e);e.setAttribute('aria-label',e.textContent.replace(/\s+/g,' ').trim())});
var h1=$('.hero-title');if(h1)h1.style.setProperty('--base','.15s');

/* ---------- header, progress, menu ---------- */
var head=$('.site-head'),prog=$('#progress'),nav=$('#nav'),menuBtn=$('#menuBtn');
var lastY=0;
function onScroll(){
  var y=window.scrollY,h=document.documentElement.scrollHeight-window.innerHeight;
  head.classList.toggle('scrolled',y>30);
  if(!nav.classList.contains('open')){head.classList.toggle('hide',y>lastY+4&&y>260);}
  if(y<lastY-4)head.classList.remove('hide');
  lastY=y;
  prog.style.transform='scaleX('+(h>0?y/h:0)+')';
}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
menuBtn.addEventListener('click',function(){var o=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',o)});
$$('.nav-group',nav).forEach(function(g){
  var c=$('.caret',g);
  c.addEventListener('click',function(e){e.stopPropagation();var o=g.classList.toggle('open');c.setAttribute('aria-expanded',o);$$('.nav-group',nav).forEach(function(x){if(x!==g){x.classList.remove('open');$('.caret',x).setAttribute('aria-expanded','false')}})});
});
document.addEventListener('click',function(e){if(!e.target.closest('.nav-group'))$$('.nav-group.open',nav).forEach(function(g){g.classList.remove('open')})});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){$$('.nav-group.open',nav).forEach(function(g){g.classList.remove('open')});nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}});
$$('a[href^="#"]',nav).forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')})});

/* ---------- one-shot observers ---------- */
function once(sel,fn,thr){
  var els=$$(sel);if(!els.length)return;
  if(!('IntersectionObserver' in window)){els.forEach(fn);return}
  var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){fn(e.target);o.unobserve(e.target)}})},{threshold:thr||.15});
  els.forEach(function(x){o.observe(x)});
}
once('.reveal',function(e){e.classList.add('in')},.12);
once('[data-split]',function(e){e.classList.add('in')},.2);
once('.ring',function(e){e.classList.add('in')});
once('#life',function(e){e.classList.add('run');$('#lifeFill').style.width='100%'},.3);

/* ---------- counters ---------- */
function count(e){
  var to=+e.dataset.count;
  if(reduce){e.textContent=to;return}
  var t0=null,dur=1500;
  (function step(t){if(!t0)t0=t;var p=Math.min((t-t0)/dur,1);e.textContent=Math.round(to*(1-Math.pow(1-p,4)));if(p<1)requestAnimationFrame(step)})(performance.now());
}
once('[data-count]',count,.5);

/* ---------- cycling word ---------- */
var cyc=$('#cycle');
if(cyc&&!reduce){
  var words=['more aircraft','more applications','more OEMs','more organisations','more locations'],wi=0;
  setInterval(function(){
    cyc.classList.add('out');
    setTimeout(function(){wi=(wi+1)%words.length;cyc.textContent=words[wi];cyc.classList.remove('out')},400);
  },2400);
}

/* ---------- hero: multi-OEM route chart converging on one mission context ---------- */
(function(){
  var svg=$('#chart');if(!svg)return;
  var center=svg.dataset.layout==='center';
  var HUB=center?{x:720,y:450}:{x:1110,y:430};
  var gGrid=el('g',{'class':'grid layer'},svg),gCont=el('g',{'class':'layer'},svg),gRoute=el('g',{'class':'layer'},svg);
  var i,x,y;
  for(x=0;x<=1440;x+=80)el('line',{x1:x,y1:0,x2:x,y2:900},gGrid);
  for(y=0;y<=900;y+=80)el('line',{x1:0,y1:y,x2:1440,y2:y},gGrid);
  function blob(cx,cy,r,s,n){
    var d='';
    for(var k=0;k<=n;k++){
      var a=k/n*Math.PI*2,rr=r*(1+.11*Math.sin(2*a+s)+.07*Math.sin(3*a+s*1.7)+.04*Math.sin(5*a+s*.6));
      d+=(k?'L':'M')+(cx+Math.cos(a)*rr*1.25).toFixed(1)+' '+(cy+Math.sin(a)*rr).toFixed(1);
    }
    return d+'Z';
  }
  (center?[[HUB.x,HUB.y,16,34,.4]]:[[HUB.x,HUB.y,15,36,.4],[1330,760,9,34,2.2],[760,780,7,36,4.1]]).forEach(function(c){
    for(var k=0;k<c[2];k++)el('path',{d:blob(c[0],c[1],26+k*c[3],c[4]+k*.12,80),'class':'contour'+(k%4===0?' major':'')},gCont);
  });
  var routes=center?[
    {d:'M110 740 C300 690 520 570 '+HUB.x+' '+HUB.y,l:'OEM 1'},
    {d:'M1330 740 C1140 690 920 570 '+HUB.x+' '+HUB.y,l:'OEM 2'},
    {d:'M110 160 C300 210 520 330 '+HUB.x+' '+HUB.y,l:'OEM 3'},
    {d:'M1330 160 C1140 210 920 330 '+HUB.x+' '+HUB.y,l:'OEM 4'}
  ]:[
    {d:'M560 840 C760 800 940 640 '+HUB.x+' '+HUB.y,l:'OEM 1'},
    {d:'M1440 780 C1340 720 1230 560 '+HUB.x+' '+HUB.y,l:'OEM 2'},
    {d:'M900 40 C980 190 1050 300 '+HUB.x+' '+HUB.y,l:'OEM 3'},
    {d:'M1440 170 C1330 230 1210 330 '+HUB.x+' '+HUB.y,l:'OEM 4'}
  ];
  routes.forEach(function(r,idx){
    var id='rt'+idx;
    var base=el('path',{d:r.d,id:id,'class':'route'},gRoute);
    var L=base.getTotalLength();
    var dr=el('path',{d:r.d,'class':'route-draw'},gRoute);
    dr.style.strokeDasharray=L;dr.style.strokeDashoffset=reduce?0:L;
    if(!reduce)dr.animate([{strokeDashoffset:L},{strokeDashoffset:0}],{duration:2600,delay:500+idx*350,fill:'forwards',easing:'cubic-bezier(.2,.7,.1,1)'});
    [.0,.42].forEach(function(t,ti){
      var p=base.getPointAtLength(L*t);
      el('circle',{cx:p.x,cy:p.y,r:ti?5:6,'class':'wp'},gRoute);
      if(!ti){var tx=el('text',{x:p.x+(p.x>1200?-62:12),y:p.y+(p.y<200?22:-12)},gRoute);tx.textContent=r.l}
    });
    if(!reduce){
      [0,1].forEach(function(k){
        var dn=el('path',{d:'M8 0 L-6 6 L-2.5 0 L-6 -6Z','class':'drone'},gRoute);
        var am=el('animateMotion',{dur:(8+idx*.9)+'s',repeatCount:'indefinite',rotate:'auto',begin:(idx*.7+k*4)+'s'},dn);
        var mp=el('mpath',{},am);mp.setAttribute('href','#'+id);
      });
    }
  });
  el('circle',{cx:HUB.x,cy:HUB.y,r:28,'class':'hub-ring'},gRoute);
  el('circle',{cx:HUB.x,cy:HUB.y,r:28,'class':'hub-ring r3'},gRoute);
  el('circle',{cx:HUB.x,cy:HUB.y,r:9,'class':'hub-core'},gRoute);
  var t1=el('text',{x:HUB.x+22,y:HUB.y+(center?-14:34)},gRoute);t1.textContent='DEROMIC';
  var t2=el('text',{x:HUB.x+22,y:HUB.y+(center?2:50)},gRoute);t2.textContent='ONE MISSION CONTEXT';

  /* parallax + live coordinates */
  var hero=svg.parentNode,co=$('#coords');
  if(!reduce){
    hero.addEventListener('pointermove',function(e){
      var r=hero.getBoundingClientRect(),mx=(e.clientX-r.left)/r.width-.5,my=(e.clientY-r.top)/r.height-.5;
      gCont.style.transform='translate('+(-mx*40)+'px,'+(-my*40)+'px)';
      gRoute.style.transform='translate('+(-mx*16)+'px,'+(-my*16)+'px)';
      gGrid.style.transform='translate('+(mx*10)+'px,'+(my*10)+'px)';
      if(co)co.innerHTML=(12.90-my*.12).toFixed(3)+'&deg;N &nbsp;'+(77.50+mx*.2).toFixed(3)+'&deg;E';
    });
  }
})();

/* ---------- ecosystem infographic ---------- */
(function(){
  var svg=$('#ecoSvg');if(!svg)return;
  var hub={x:450,y:230};
  var orgs=[
    {n:'A',x:10,y:10,o:[[1,1],[2,2],[3,3]]},
    {n:'B',x:640,y:10,o:[[2,4],[4,5],[5,6]]},
    {n:'C',x:10,y:280,o:[[1,7],[3,8],[6,9]]},
    {n:'D',x:640,y:280,o:[[4,10],[5,11],[6,12]]}
  ];
  function tx(p,x,y,s,c){var t=el('text',{x:x,y:y,'class':c||''},p);t.textContent=s;return t}
  var g1=el('g',{},svg),g2=el('g',{},svg),g3=el('g',{},svg);
  orgs.forEach(function(O,oi){
    var g=el('g',{'class':'e-org'},g1);
    el('rect',{x:O.x,y:O.y,width:250,height:170},g);
    tx(g,O.x+18,O.y+28,'Operator Organisation '+O.n,'t');
    tx(g,O.x+18,O.y+46,'3 OEMs · 3 controllers · 3 GCS','s t0');
    tx(g,O.x+18,O.y+46,'3 OEMs · one unified view','s u');
    O.o.forEach(function(m,mi){
      var cx=O.x+45+mi*80,cy=O.y+88,id='gp'+oi+mi;
      var og=el('g',{'class':'e-oem'},g);
      el('circle',{cx:cx,cy:cy,r:19},og);tx(og,cx,cy,'OEM '+m[0]);
      tx(g,cx,cy+34,'Loc '+m[1],'e-loc');
      var gg=el('g',{'class':'e-gcsg'},g);
      el('rect',{x:cx-18,y:cy+44,width:36,height:16,fill:'none','class':'e-link bad'},gg);
      tx(gg,cx,cy+56,'GCS','e-loc');
      var top=O.y<100;
      var d='M'+cx+' '+(top?cy+19:cy-19)+' Q '+((cx+hub.x)/2)+' '+(top?cy+110:cy-110)+' '+(hub.x+(cx<hub.x?-30:30))+' '+(hub.y+(top?-28:28));
      d='M'+cx+' '+(cy-19)+' Q '+((cx+hub.x)/2)+' '+(top?cy-70:cy+80)+' '+(hub.x+(cx<hub.x?-30:30))+' '+(hub.y+(top?-28:28));
      var p=el('path',{d:d,id:id,'class':'e-link good'},g2);
      var L=p.getTotalLength();p.style.setProperty('--len',L);p.style.setProperty('--ld',(oi*.12+mi*.08)+'s');
      var c=el('circle',{r:3,'class':'e-pulse'},g3);
      var am=el('animateMotion',{dur:(2.2+mi*.3)+'s',repeatCount:'indefinite',begin:(oi*.3+mi*.2)+'s'},c);
      el('mpath',{href:'#'+id},am);
    });
  });
  var h=el('g',{'class':'e-hub'},g3);
  el('circle',{cx:hub.x,cy:hub.y,r:42,'class':'ring'},h);
  el('circle',{cx:hub.x,cy:hub.y,r:42,'class':'core'},h);
  tx(h,hub.x,hub.y+2,'DeroMiC');tx(h,hub.x,hub.y+18,'CENTRAL COMMAND','sm');
  tx(svg,hub.x,hub.y+72,'NO SHARED PICTURE','e-q');

  var stage=$('#ecoStage'),b1=$('#swToday'),b2=$('#swUnified'),th=$('.switch-thumb'),cap=$('#ecoCap');
  var txt={today:'<b>No shared picture.</b> Multiple OEMs, multiple controllers, multiple ground stations. Nothing reaches central command.',
           unified:'<b>One unified operating picture.</b> Every organisation, OEM and location is linked into DeroMiC and visible to central command.'};
  function setMode(m){
    stage.dataset.mode=m;cap.innerHTML=txt[m];
    b1.setAttribute('aria-selected',m==='today');b2.setAttribute('aria-selected',m==='unified');
    var b=m==='today'?b1:b2;th.style.width=b.offsetWidth+'px';th.style.transform='translateX('+(b.offsetLeft-4)+'px)';
  }
  b1.addEventListener('click',function(){setMode('today')});b2.addEventListener('click',function(){setMode('unified')});
  setMode('today');window.addEventListener('resize',function(){setMode(stage.dataset.mode)});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){setMode(stage.dataset.mode)});
  var played=false;
  once('#eco',function(){if(!played&&!reduce){played=true;setTimeout(function(){setMode('unified')},1800)}},.5);
})();

/* ---------- compare slider ---------- */
(function(){
  var c=$('#compare'),h=$('#handle');if(!c)return;
  function set(p){p=Math.max(2,Math.min(98,p));c.style.setProperty('--p',p+'%');h.setAttribute('aria-valuenow',Math.round(p))}
  function move(e){var r=c.getBoundingClientRect();set((e.clientX-r.left)/r.width*100)}
  var drag=false;
  c.addEventListener('pointerdown',function(e){drag=true;c.setPointerCapture(e.pointerId);move(e)});
  c.addEventListener('pointermove',function(e){if(drag)move(e)});
  c.addEventListener('pointerup',function(){drag=false});c.addEventListener('pointercancel',function(){drag=false});
  h.addEventListener('keydown',function(e){
    var v=+h.getAttribute('aria-valuenow');
    if(e.key==='ArrowLeft'){set(v-5);e.preventDefault()}if(e.key==='ArrowRight'){set(v+5);e.preventDefault()}
  });
  if(!reduce)once('#compare',function(){var t0=null;(function s(t){if(!t0)t0=t;var p=(t-t0)/1800;if(p<1&&!drag){set(50+Math.sin(p*Math.PI*2)*30*(1-p));requestAnimationFrame(s)}else set(50)})(performance.now())},.6);
})();

/* ---------- programme tabs ---------- */
(function(){
  var tabs=$$('.ptabs [role="tab"]');
  function sel(t){tabs.forEach(function(x){var on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;document.getElementById(x.getAttribute('aria-controls')).hidden=!on})}
  function deep(){
    var id=location.hash.slice(1);if(!id)return;
    var t=document.getElementById(id);if(!t)return;
    var p=t.closest('[role="tabpanel"]');if(!p)return;
    var tab=document.getElementById(p.getAttribute('aria-labelledby'));
    if(tab){sel(tab);setTimeout(function(){var w=$('.tabs-wrap');if(w)window.scrollTo(0,w.getBoundingClientRect().top+scrollY-90)},60)}
  }
  window.addEventListener('hashchange',deep);if(tabs.length)deep();
  tabs.forEach(function(t,i){
    t.addEventListener('click',function(){sel(t)});
    t.addEventListener('keydown',function(e){
      var n=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null;if(n===null)return;
      n=(n+tabs.length)%tabs.length;tabs[n].focus();sel(tabs[n]);e.preventDefault();
    });
  });
})();

/* ---------- contact form (no backend: opens the visitor's email app) ---------- */
(function(){
  var f=$('#form'),m=$('#formMsg');if(!f)return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f),name=(d.get('name')||'').trim(),email=(d.get('email')||'').trim();
    m.className='form-msg';
    if(!name||!/^\S+@\S+\.\S+$/.test(email)){m.className='form-msg err';m.textContent='Please enter your name and a valid email address.';return}
    var body='Name: '+name+'\nOrganisation: '+(d.get('org')||'')+'\nRole: '+(d.get('role')||'')+'\nEnquiry: '+d.get('type')+'\nEmail: '+email+'\nPhone: '+(d.get('phone')||'')+'\n\n'+(d.get('msg')||'');
    location.href='mailto:contact@derospacesystems.com?subject='+encodeURIComponent('Website enquiry: '+d.get('type'))+'&body='+encodeURIComponent(body);
    m.textContent='Opening your email app to send the enquiry…';
  });
})();

/* ---------- tilt + spotlight on cards, magnetic buttons (fine pointers only) ---------- */
if(window.matchMedia('(pointer:fine)').matches&&!reduce){
  $$('.tilt').forEach(function(c){
    c.addEventListener('pointermove',function(e){
      var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
      c.style.setProperty('--mx',(x*100)+'%');c.style.setProperty('--my',(y*100)+'%');
      c.style.transform='perspective(900px) rotateX('+((.5-y)*5)+'deg) rotateY('+((x-.5)*6)+'deg) translateY(-6px)';
    });
    c.addEventListener('pointerleave',function(){c.style.transform=''});
  });
  $$('.btn').forEach(function(b){
    b.addEventListener('pointermove',function(e){
      var r=b.getBoundingClientRect();
      b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.12)+'px,'+((e.clientY-r.top-r.height/2)*.2)+'px)';
    });
    b.addEventListener('pointerleave',function(){b.style.transform=''});
  });
}
})();
