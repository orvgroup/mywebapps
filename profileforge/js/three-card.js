import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';
const host=document.querySelector('#three-card-scene');
if(host&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(32,1,.1,50);camera.position.set(0,0,5);
 const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(host.clientWidth,host.clientHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;host.appendChild(renderer.domElement);
 const card=new THREE.Group();scene.add(card);
 const shape=new THREE.Shape();const w=2.55,h=1.55,r=.13;shape.moveTo(-w/2+r,-h/2);shape.lineTo(w/2-r,-h/2);shape.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);shape.lineTo(w/2,h/2-r);shape.quadraticCurveTo(w/2,h/2,w/2-r,h/2);shape.lineTo(-w/2+r,h/2);shape.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);shape.lineTo(-w/2,-h/2+r);shape.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
 const geometry=new THREE.ExtrudeGeometry(shape,{depth:.055,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.025,bevelThickness:.02});
 const canvas=document.createElement('canvas');canvas.width=900;canvas.height=540;const ctx=canvas.getContext('2d');
 function draw(login='YOUR USERNAME',name='Developer',followers='—',stars='—'){
  const g=ctx.createLinearGradient(0,0,900,540);g.addColorStop(0,'#ffffff');g.addColorStop(.65,'#f2efff');g.addColorStop(1,'#ffeef3');ctx.fillStyle=g;ctx.fillRect(0,0,900,540);
  ctx.fillStyle='#796be2';ctx.font='bold 27px Arial';ctx.fillText('✳ PROFILEFORGE',55,65);
  ctx.fillStyle='#aaa6bc';ctx.font='bold 16px Arial';ctx.fillText('DEVELOPER IDENTITY',650,65);
  ctx.fillStyle='#c9c1ff';ctx.beginPath();ctx.roundRect(55,115,125,125,28);ctx.fill();ctx.fillStyle='#fff';ctx.font='bold 64px Arial';ctx.fillText((name[0]||'D').toUpperCase(),94,198);
  ctx.fillStyle='#28263d';ctx.font='bold 47px Arial';ctx.fillText(name.slice(0,23),215,165);
  ctx.fillStyle='#8a879e';ctx.font='26px Arial';ctx.fillText('@'+login.slice(0,30),218,210);
  ctx.fillStyle='#786be1';ctx.font='bold 24px Arial';ctx.fillText('BUILDING IN PUBLIC  ✦',55,310);
  ctx.strokeStyle='#ded9f0';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(55,350);ctx.lineTo(845,350);ctx.stroke();
  ctx.fillStyle='#27253d';ctx.font='bold 45px Arial';ctx.fillText(String(followers),65,425);ctx.fillText(String(stars),355,425);
  ctx.fillStyle='#9691a9';ctx.font='bold 16px Arial';ctx.fillText('FOLLOWERS',65,462);ctx.fillText('STARS EARNED',355,462);
  ctx.fillStyle='#aaa6bc';ctx.font='bold 15px Arial';ctx.fillText('GITHUB.COM / '+login.toUpperCase().slice(0,25),55,510);
  texture.needsUpdate=true;
 }
 const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;draw();
 const front=new THREE.Mesh(geometry,new THREE.MeshPhysicalMaterial({color:0xffffff,metalness:.08,roughness:.3,clearcoat:.8}));card.add(front);
 const face=new THREE.Mesh(new THREE.PlaneGeometry(2.48,1.48),new THREE.MeshBasicMaterial({map:texture}));face.position.z=.086;card.add(face);
 const back=new THREE.Mesh(new THREE.PlaneGeometry(2.48,1.48),new THREE.MeshBasicMaterial({color:0x7467df}));back.position.z=-.03;back.rotation.y=Math.PI;card.add(back);
 const light=new THREE.DirectionalLight(0xffffff,3);light.position.set(2,3,5);scene.add(light,new THREE.AmbientLight(0xffffff,1.6));
 let targetX=0,targetY=0;host.addEventListener('pointermove',e=>{const rect=host.getBoundingClientRect();targetY=((e.clientX-rect.left)/rect.width-.5)*.45;targetX=((e.clientY-rect.top)/rect.height-.5)*-.25});
 host.addEventListener('pointerleave',()=>{targetX=0;targetY=0});
 window.addEventListener('profileforge:profile',e=>{const d=e.detail||{};draw(d.login||'YOUR USERNAME',d.name||'Developer',d.followers??'—',d.stars??'—')});
 const resize=()=>{const width=Math.max(1,host.clientWidth),height=Math.max(1,host.clientHeight);camera.aspect=width/height;camera.updateProjectionMatrix();renderer.setSize(width,height)};new ResizeObserver(resize).observe(host);
 let frame;function animate(){frame=requestAnimationFrame(animate);card.rotation.x+=(targetX-card.rotation.x)*.045;card.rotation.y+=(targetY-card.rotation.y)*.045+.002;renderer.render(scene,camera)}animate();
 document.addEventListener('visibilitychange',()=>{if(document.hidden)cancelAnimationFrame(frame);else animate()});
}