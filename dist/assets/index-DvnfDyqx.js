var hd=Object.defineProperty;var ud=(i,t,e)=>t in i?hd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var yt=(i,t,e)=>ud(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const El="180",cs={ROTATE:0,DOLLY:1,PAN:2},as={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dd=0,hc=1,fd=2,Dh=1,kh=2,Vn=3,ui=0,Ye=1,Re=2,ci=0,hs=1,uc=2,dc=3,fc=4,pd=5,bi=100,md=101,gd=102,_d=103,vd=104,xd=200,yd=201,Md=202,Sd=203,ma=204,ga=205,Ed=206,bd=207,wd=208,Td=209,Ad=210,Rd=211,Cd=212,Pd=213,Ld=214,_a=0,va=1,xa=2,gs=3,ya=4,Ma=5,Sa=6,Ea=7,Nh=0,Id=1,Dd=2,hi=0,kd=1,Nd=2,Ud=3,Fd=4,Od=5,Bd=6,zd=7,Uh=300,_s=301,vs=302,ba=303,wa=304,xo=306,js=1e3,Ai=1001,Ta=1002,yn=1003,Hd=1004,vr=1005,An=1006,Po=1007,Ri=1008,Dn=1009,Fh=1010,Oh=1011,Ks=1012,bl=1013,Ii=1014,Jn=1015,Ts=1016,wl=1017,Tl=1018,Qs=1020,Bh=35902,zh=35899,Hh=1021,Vh=1022,_n=1023,tr=1026,er=1027,Gh=1028,Al=1029,Wh=1030,Rl=1031,Cl=1033,jr=33776,Kr=33777,Qr=33778,to=33779,Aa=35840,Ra=35841,Ca=35842,Pa=35843,La=36196,Ia=37492,Da=37496,ka=37808,Na=37809,Ua=37810,Fa=37811,Oa=37812,Ba=37813,za=37814,Ha=37815,Va=37816,Ga=37817,Wa=37818,Xa=37819,Ja=37820,qa=37821,Ya=36492,$a=36494,Za=36495,ja=36283,Ka=36284,Qa=36285,tl=36286,Vd=3200,Gd=3201,Xh=0,Wd=1,oi="",ye="srgb",xs="srgb-linear",so="linear",de="srgb",Hi=7680,pc=519,Xd=512,Jd=513,qd=514,Jh=515,Yd=516,$d=517,Zd=518,jd=519,el=35044,mc="300 es",Rn=2e3,ro=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gc=1234567;const Ws=Math.PI/180,nr=180/Math.PI;function In(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Pl(i,t){return(i%t+t)%t}function Kd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Qd(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function tf(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function ef(i,t=1){return t-Math.abs(Pl(i,t*2)-t)}function nf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function sf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function rf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function of(i,t){return i+Math.random()*(t-i)}function af(i){return i*(.5-Math.random())}function lf(i){i!==void 0&&(gc=i);let t=gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function cf(i){return i*Ws}function hf(i){return i*nr}function uf(i){return(i&i-1)===0&&i!==0}function df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ff(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pf(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),h=r((t-n)/2),d=o((t-n)/2),g=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*_,l*g,a*c);break;case"YXY":i.set(l*g,a*u,l*_,a*c);break;case"ZYZ":i.set(l*_,l*g,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:Ws,RAD2DEG:nr,generateUUID:In,clamp:te,euclideanModulo:Pl,mapLinear:Kd,inverseLerp:Qd,lerp:Xs,damp:tf,pingpong:ef,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:of,randFloatSpread:af,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:he,denormalize:gn};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],g=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=_,t[e+3]=x;return}if(h!==x||l!==d||c!==g||u!==_){let m=1-a;const f=l*d+c*g+u*_+h*x,S=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,f*S);m=Math.sin(m*E)/M,a=Math.sin(a*E)/M}const v=a*S;if(l=l*m+d*v,c=c*m+g*v,u=u*m+_*v,h=h*m+x*v,m===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+u*h+l*g-c*d,t[e+1]=l*_+u*d+c*h-a*g,t[e+2]=c*_+u*g+a*d-l*h,t[e+3]=u*_-a*h-l*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*g*_,this._y=c*g*h-d*u*_,this._z=c*u*_+d*g*h,this._w=c*u*h-d*g*_;break;case"YXZ":this._x=d*u*h+c*g*_,this._y=c*g*h-d*u*_,this._z=c*u*_-d*g*h,this._w=c*u*h+d*g*_;break;case"ZXY":this._x=d*u*h-c*g*_,this._y=c*g*h+d*u*_,this._z=c*u*_+d*g*h,this._w=c*u*h-d*g*_;break;case"ZYX":this._x=d*u*h-c*g*_,this._y=c*g*h+d*u*_,this._z=c*u*_-d*g*h,this._w=c*u*h+d*g*_;break;case"YZX":this._x=d*u*h+c*g*_,this._y=c*g*h+d*u*_,this._z=c*u*_-d*g*h,this._w=c*u*h-d*g*_;break;case"XZY":this._x=d*u*h-c*g*_,this._y=c*g*h-d*u*_,this._z=c*u*_+d*g*h,this._w=c*u*h+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>h){const g=2*Math.sqrt(1+n-a-h);this._w=(u-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-n-h);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+h-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),h=2*(r*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new I,_c=new Di;class Qt{constructor(t,e,n,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],g=n[5],_=n[8],x=s[0],m=s[3],f=s[6],S=s[1],y=s[4],v=s[7],M=s[2],E=s[5],T=s[8];return r[0]=o*x+a*S+l*M,r[3]=o*m+a*y+l*E,r[6]=o*f+a*v+l*T,r[1]=c*x+u*S+h*M,r[4]=c*m+u*y+h*E,r[7]=c*f+u*v+h*T,r[2]=d*x+g*S+_*M,r[5]=d*m+g*y+_*E,r[8]=d*f+g*v+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,g=c*r-o*l,_=e*h+n*d+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=h*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=g*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Qt;function qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mf(){const i=oo("canvas");return i.style.display="block",i}const vc={};function ir(i){i in vc||(vc[i]=!0,console.warn(i))}function gf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const xc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yc=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _f(){const i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?so:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:so,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:n,transfer:de,toXYZ:xc,fromXYZ:yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),i}const le=_f();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class vf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=oo("canvas")),Vi.width=t.width,Vi.height=t.height;const s=Vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Yn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xf=0;class Ll{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=In(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Do(s[o].image)):r.push(Do(s[o]))}else r=Do(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yf=0;const ko=new I;class Ve extends Bi{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=Ai,s=Ai,r=An,o=Ri,a=_n,l=Dn,c=Ve.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=In(),this.name="",this.source=new Ll(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case Ai:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case Ai:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=Uh;Ve.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],g=l[5],_=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(g+1)/2,M=(f+1)/2,E=(u+d)/4,T=(h+x)/4,C=(_+m)/4;return y>v&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=T/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=E/s,r=C/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=T/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-x)/S,this.z=(d-u)/S,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ve(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ll(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class di extends Mf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Yh extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sf extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xr.copy(n.boundingBox)),xr.applyMatrix4(t.matrixWorld),this.union(xr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),yr.subVectors(this.max,Is),Gi.subVectors(t.a,Is),Wi.subVectors(t.b,Is),Xi.subVectors(t.c,Is),Qn.subVectors(Wi,Gi),ti.subVectors(Xi,Wi),gi.subVectors(Gi,Xi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-gi.z,gi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,gi.z,0,-gi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-gi.y,gi.x,0];return!No(e,Gi,Wi,Xi,yr)||(e=[1,0,0,0,1,0,0,0,1],!No(e,Gi,Wi,Xi,yr))?!1:(Mr.crossVectors(Qn,ti),e=[Mr.x,Mr.y,Mr.z],No(e,Gi,Wi,Xi,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Fn=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,xr=new dr,Gi=new I,Wi=new I,Xi=new I,Qn=new I,ti=new I,gi=new I,Is=new I,yr=new I,Mr=new I,_i=new I;function No(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_i.fromArray(i,r);const a=s.x*Math.abs(_i.x)+s.y*Math.abs(_i.y)+s.z*Math.abs(_i.z),l=t.dot(_i),c=e.dot(_i),u=n.dot(_i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ef=new dr,Ds=new I,Uo=new I;class Il{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ef.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Uo)),this.expandByPoint(Ds.copy(t.center).sub(Uo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const On=new I,Fo=new I,Sr=new I,ei=new I,Oo=new I,Er=new I,Bo=new I;class $h{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,On)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=On.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(On.copy(this.origin).addScaledVector(this.direction,e),On.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Fo.copy(t).add(e).multiplyScalar(.5),Sr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Fo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Sr),a=ei.dot(this.direction),l=-ei.dot(Sr),c=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,g,_;if(u>0)if(h=o*l-a,d=o*a-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const x=1/u;h*=x,d*=x,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),g=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),g=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fo).addScaledVector(Sr,d),g}intersectSphere(t,e){On.subVectors(t.center,this.origin);const n=On.dot(this.direction),s=On.dot(On)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,On)!==null}intersectTriangle(t,e,n,s,r){Oo.subVectors(e,t),Er.subVectors(n,t),Bo.crossVectors(Oo,Er);let o=this.direction.dot(Bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const l=a*this.direction.dot(Er.crossVectors(ei,Er));if(l<0)return null;const c=a*this.direction.dot(Oo.cross(ei));if(c<0||l+c>o)return null;const u=-a*ei.dot(Bo);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,o,a,l,c,u,h,d,g,_,x,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,h,d,g,_,x,m)}set(t,e,n,s,r,o,a,l,c,u,h,d,g,_,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=g,f[7]=_,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),o=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,g=o*h,_=a*u,x=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=g+_*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,g=l*h,_=c*u,x=c*h;e[0]=d+x*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=g*a-_,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,g=l*h,_=c*u,x=c*h;e[0]=d-x*a,e[4]=-o*h,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*u,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,g=o*h,_=a*u,x=a*h;e[0]=l*u,e[4]=_*c-g,e[8]=d*c+x,e[1]=l*h,e[5]=x*c+d,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,g=o*c,_=a*l,x=a*c;e[0]=l*u,e[4]=x-d*h,e[8]=_*h+g,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=g*h+_,e[10]=d-x*h}else if(t.order==="XZY"){const d=o*l,g=o*c,_=a*l,x=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+x,e[5]=o*u,e[9]=g*h-_,e[2]=_*h-g,e[6]=a*u,e[10]=x*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,wf)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ni.crossVectors(n,je),ni.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ni.crossVectors(n,je)),ni.normalize(),br.crossVectors(je,ni),s[0]=ni.x,s[4]=br.x,s[8]=je.x,s[1]=ni.y,s[5]=br.y,s[9]=je.y,s[2]=ni.z,s[6]=br.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],g=n[13],_=n[2],x=n[6],m=n[10],f=n[14],S=n[3],y=n[7],v=n[11],M=n[15],E=s[0],T=s[4],C=s[8],b=s[12],w=s[1],D=s[5],O=s[9],H=s[13],Z=s[2],W=s[6],$=s[10],et=s[14],J=s[3],gt=s[7],pt=s[11],Et=s[15];return r[0]=o*E+a*w+l*Z+c*J,r[4]=o*T+a*D+l*W+c*gt,r[8]=o*C+a*O+l*$+c*pt,r[12]=o*b+a*H+l*et+c*Et,r[1]=u*E+h*w+d*Z+g*J,r[5]=u*T+h*D+d*W+g*gt,r[9]=u*C+h*O+d*$+g*pt,r[13]=u*b+h*H+d*et+g*Et,r[2]=_*E+x*w+m*Z+f*J,r[6]=_*T+x*D+m*W+f*gt,r[10]=_*C+x*O+m*$+f*pt,r[14]=_*b+x*H+m*et+f*Et,r[3]=S*E+y*w+v*Z+M*J,r[7]=S*T+y*D+v*W+M*gt,r[11]=S*C+y*O+v*$+M*pt,r[15]=S*b+y*H+v*et+M*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],g=t[14],_=t[3],x=t[7],m=t[11],f=t[15];return _*(+r*l*h-s*c*h-r*a*d+n*c*d+s*a*g-n*l*g)+x*(+e*l*g-e*c*d+r*o*d-s*o*g+s*c*u-r*l*u)+m*(+e*c*h-e*a*g-r*o*h+n*o*g+r*a*u-n*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],g=t[11],_=t[12],x=t[13],m=t[14],f=t[15],S=h*m*c-x*d*c+x*l*g-a*m*g-h*l*f+a*d*f,y=_*d*c-u*m*c-_*l*g+o*m*g+u*l*f-o*d*f,v=u*x*c-_*h*c+_*a*g-o*x*g-u*a*f+o*h*f,M=_*h*l-u*x*l-_*a*d+o*x*d+u*a*m-o*h*m,E=e*S+n*y+s*v+r*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=S*T,t[1]=(x*d*r-h*m*r-x*s*g+n*m*g+h*s*f-n*d*f)*T,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*f+n*l*f)*T,t[3]=(h*l*r-a*d*r-h*s*c+n*d*c+a*s*g-n*l*g)*T,t[4]=y*T,t[5]=(u*m*r-_*d*r+_*s*g-e*m*g-u*s*f+e*d*f)*T,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*f-e*l*f)*T,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*g+e*l*g)*T,t[8]=v*T,t[9]=(_*h*r-u*x*r-_*n*g+e*x*g+u*n*f-e*h*f)*T,t[10]=(o*x*r-_*a*r+_*n*c-e*x*c-o*n*f+e*a*f)*T,t[11]=(u*a*r-o*h*r-u*n*c+e*h*c+o*n*g-e*a*g)*T,t[12]=M*T,t[13]=(u*x*s-_*h*s+_*n*d-e*x*d-u*n*m+e*h*m)*T,t[14]=(_*a*s-o*x*s-_*n*l+e*x*l+o*n*m-e*a*m)*T,t[15]=(o*h*s-u*a*s+u*n*l-e*h*l-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,g=r*u,_=r*h,x=o*u,m=o*h,f=a*h,S=l*c,y=l*u,v=l*h,M=n.x,E=n.y,T=n.z;return s[0]=(1-(x+f))*M,s[1]=(g+v)*M,s[2]=(_-y)*M,s[3]=0,s[4]=(g-v)*E,s[5]=(1-(d+f))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(_+y)*T,s[9]=(m-S)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ji.set(s[0],s[1],s[2]).length();const o=Ji.set(s[4],s[5],s[6]).length(),a=Ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,u=1/o,h=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Rn,l=!1){const c=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s);let _,x;if(l)_=r/(o-r),x=o*r/(o-r);else if(a===Rn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ro)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Rn,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s);let _,x;if(l)_=1/(o-r),x=o/(o-r);else if(a===Rn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===ro)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ji=new I,fn=new ve,bf=new I(0,0,0),wf=new I(1,1,1),ni=new I,br=new I,je=new I,Mc=new ve,Sc=new Di;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tf=0;const Ec=new I,qi=new Di,Bn=new ve,wr=new I,ks=new I,Af=new I,Rf=new Di,bc=new I(1,0,0),wc=new I(0,1,0),Tc=new I(0,0,1),Ac={type:"added"},Cf={type:"removed"},Yi={type:"childadded",child:null},zo={type:"childremoved",child:null};class Ne extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new I,e=new kn,n=new Di,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Qt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(bc,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(Tc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bc,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(Tc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(ks,wr,this.up):Bn.lookAt(wr,ks,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Bn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ac),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Cf),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ac),Yi.child=t,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new I(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,zn=new I,Ho=new I,Hn=new I,$i=new I,Zi=new I,Rc=new I,Vo=new I,Go=new I,Wo=new I,Xo=new ge,Jo=new ge,qo=new ge;class hn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),zn.subVectors(n,e),Ho.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(zn),l=pn.dot(Ho),c=zn.dot(zn),u=zn.dot(Ho),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,g=(c*l-a*u)*d,_=(o*u-a*l)*d;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Xo.setScalar(0),Jo.setScalar(0),qo.setScalar(0),Xo.fromBufferAttribute(t,e),Jo.fromBufferAttribute(t,n),qo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Xo,r.x),o.addScaledVector(Jo,r.y),o.addScaledVector(qo,r.z),o}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),zn.subVectors(t,e),pn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),pn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;$i.subVectors(s,n),Zi.subVectors(r,n),Vo.subVectors(t,n);const l=$i.dot(Vo),c=Zi.dot(Vo);if(l<=0&&c<=0)return e.copy(n);Go.subVectors(t,s);const u=$i.dot(Go),h=Zi.dot(Go);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector($i,o);Wo.subVectors(t,r);const g=$i.dot(Wo),_=Zi.dot(Wo);if(_>=0&&g<=_)return e.copy(r);const x=g*c-l*_;if(x<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Zi,a);const m=u*_-g*h;if(m<=0&&h-u>=0&&g-_>=0)return Rc.subVectors(r,s),a=(h-u)/(h-u+(g-_)),e.copy(s).addScaledVector(Rc,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector($i,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ne{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Pl(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yo(o,r,t+1/3),this.g=Yo(o,r,t),this.b=Yo(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=ye){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){const n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return le.workingToColorSpace(Oe.copy(this),t),Math.round(te(Oe.r*255,0,255))*65536+Math.round(te(Oe.g*255,0,255))*256+Math.round(te(Oe.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Oe.copy(this),e);const n=Oe.r,s=Oe.g,r=Oe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=ye){le.workingToColorSpace(Oe.copy(this),t);const e=Oe.r,n=Oe.g,s=Oe.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Tr);const n=Xs(ii.h,Tr.h,e),s=Xs(ii.s,Tr.s,e),r=Xs(ii.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new ne;ne.NAMES=jh;let Pf=0;class As extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=In(),this.name="",this.type="Material",this.blending=hs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ma&&(n.blendSrc=this.blendSrc),this.blendDst!==ga&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Be extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new I,Ar=new ut;let Lf=0;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ar.fromBufferAttribute(this,e),Ar.applyMatrix3(t),this.setXY(e,Ar.x,Ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),t}}class Kh extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qh extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $t extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let If=0;const rn=new ve,$o=new Ne,ji=new I,Ke=new dr,Ns=new dr,ke=new I;class _e extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qh(t)?Qh:Kh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return $o.lookAt(t),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Il);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(Ke.min,Ns.min),Ke.expandByPoint(ke),ke.addVectors(Ke.max,Ns.max),Ke.expandByPoint(ke)):(Ke.expandByPoint(Ns.min),Ke.expandByPoint(Ns.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ke.fromBufferAttribute(a,c),l&&(ji.fromBufferAttribute(t,c),ke.add(ji)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;const c=new I,u=new I,h=new I,d=new ut,g=new ut,_=new ut,x=new I,m=new I;function f(C,b,w){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,b),_.fromBufferAttribute(r,w),u.sub(c),h.sub(c),g.sub(d),_.sub(d);const D=1/(g.x*_.y-_.x*g.y);isFinite(D)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(h,-g.y).multiplyScalar(D),m.copy(h).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(D),a[C].add(x),a[b].add(x),a[w].add(x),l[C].add(m),l[b].add(m),l[w].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,b=S.length;C<b;++C){const w=S[C],D=w.start,O=w.count;for(let H=D,Z=D+O;H<Z;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new I,v=new I,M=new I,E=new I;function T(C){M.fromBufferAttribute(s,C),E.copy(M);const b=a[C];y.copy(b),y.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(E,b);const D=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=S.length;C<b;++C){const w=S[C],D=w.start,O=w.count;for(let H=D,Z=D+O;H<Z;H+=3)T(t.getX(H+0)),T(t.getX(H+1)),T(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,u=new I,h=new I;if(t)for(let d=0,g=t.count;d<g;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let g=0,_=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?g=l[x]*a.data.stride+a.offset:g=l[x]*u;for(let f=0;f<u;f++)d[_++]=c[g++]}return new Mn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],g=t(d,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];u.push(g.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,g=h.length;d<g;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new ve,vi=new $h,Rr=new Il,Pc=new I,Cr=new I,Pr=new I,Lr=new I,Zo=new I,Ir=new I,Lc=new I,Dr=new I;class ft extends Ne{constructor(t=new _e,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Zo.fromBufferAttribute(h,t),o?Ir.addScaledVector(Zo,u):Ir.addScaledVector(Zo.sub(e),u))}e.add(Ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(Rr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Rr,Pc)===null||vi.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Cc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],S=Math.max(m.start,g.start),y=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let v=S,M=y;v<M;v+=3){const E=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);s=kr(this,f,t,n,c,u,h,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=_,f=x;m<f;m+=3){const S=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=kr(this,o,t,n,c,u,h,S,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],f=o[m.materialIndex],S=Math.max(m.start,g.start),y=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let v=S,M=y;v<M;v+=3){const E=v,T=v+1,C=v+2;s=kr(this,f,t,n,c,u,h,E,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let m=_,f=x;m<f;m+=3){const S=m,y=m+1,v=m+2;s=kr(this,o,t,n,c,u,h,S,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Df(i,t,e,n,s,r,o,a){let l;if(t.side===Ye?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ui,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:i}}function kr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Cr),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Lr);const u=Df(i,t,e,n,Cr,Pr,Lr,Lc);if(u){const h=new I;hn.getBarycoord(Lc,Cr,Pr,Lr,h),s&&(u.uv=hn.getInterpolatedAttribute(s,a,l,c,h,new ut)),r&&(u.uv1=hn.getInterpolatedAttribute(r,a,l,c,h,new ut)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal(Cr,Pr,Lr,d.normal),u.face=d,u.barycoord=h}return u}class Xt extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2));function _(x,m,f,S,y,v,M,E,T,C,b){const w=v/T,D=M/C,O=v/2,H=M/2,Z=E/2,W=T+1,$=C+1;let et=0,J=0;const gt=new I;for(let pt=0;pt<$;pt++){const Et=pt*D-H;for(let Ut=0;Ut<W;Ut++){const Yt=Ut*w-O;gt[x]=Yt*S,gt[m]=Et*y,gt[f]=Z,c.push(gt.x,gt.y,gt.z),gt[x]=0,gt[m]=0,gt[f]=E>0?1:-1,u.push(gt.x,gt.y,gt.z),h.push(Ut/T),h.push(1-pt/C),et+=1}}for(let pt=0;pt<C;pt++)for(let Et=0;Et<T;Et++){const Ut=d+Et+W*pt,Yt=d+Et+W*(pt+1),ie=d+(Et+1)+W*(pt+1),Zt=d+(Et+1)+W*pt;l.push(Ut,Yt,Zt),l.push(Yt,ie,Zt),J+=6}a.addGroup(g,J,b),g+=J,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function kf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const eu={clone:ys,merge:Xe};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=Uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nu extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new I,Ic=new ut,Dc=new ut;class ze extends nu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Dc),e.subVectors(Dc,Ic)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Qi=1;class Ff extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ze(Ki,Qi,t,e);s.layers=this.layers,this.add(s);const r=new ze(Ki,Qi,t,e);r.layers=this.layers,this.add(r);const o=new ze(Ki,Qi,t,e);o.layers=this.layers,this.add(o);const a=new ze(Ki,Qi,t,e);a.layers=this.layers,this.add(a);const l=new ze(Ki,Qi,t,e);l.layers=this.layers,this.add(l);const c=new ze(Ki,Qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class iu extends Ve{constructor(t=[],e=_s,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Of extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new iu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xt(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ye,blending:ci});r.uniforms.tEquirect.value=e;const o=new ft(s,r),a=e.minFilter;return e.minFilter===Ri&&(e.minFilter=An),new Ff(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class jt extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bf={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),g=.02,_=.005;c.inputState.pinching&&d>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Dl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ne(t),this.near=e,this.far=n}clone(){return new Dl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zf extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Hf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new I;class ao{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Mn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ao(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class kl extends As{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ts;const Us=new I,es=new I,ns=new I,is=new ut,Fs=new ut,su=new ve,Nr=new I,Os=new I,Ur=new I,kc=new ut,Ko=new ut,Nc=new ut;class ru extends Ne{constructor(t=new kl){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hf(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new ao(n,3,0,!1)),ts.setAttribute("uv",new ao(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new ut(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),su.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Fr(Nr.set(-.5,-.5,0),ns,o,es,s,r),Fr(Os.set(.5,-.5,0),ns,o,es,s,r),Fr(Ur.set(.5,.5,0),ns,o,es,s,r),kc.set(0,0),Ko.set(1,0),Nc.set(1,1);let a=t.ray.intersectTriangle(Nr,Os,Ur,!1,Us);if(a===null&&(Fr(Os.set(-.5,.5,0),ns,o,es,s,r),Ko.set(0,1),a=t.ray.intersectTriangle(Nr,Ur,Os,!1,Us),a===null))return;const l=t.ray.origin.distanceTo(Us);l<t.near||l>t.far||e.push({distance:l,point:Us.clone(),uv:hn.getInterpolation(Us,Nr,Os,Ur,kc,Ko,Nc,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fr(i,t,e,n,s,r){is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*is.x-s*is.y,Fs.y=s*is.x+r*is.y):Fs.copy(is),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(su)}const Qo=new I,Vf=new I,Gf=new Qt;class Xn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qo.subVectors(n,e).cross(Vf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gf.getNormalMatrix(t),s=this.coplanarPoint(Qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Il,Wf=new ut(.5,.5),Or=new I;class Nl{constructor(t=new Xn,e=new Xn,n=new Xn,s=new Xn,r=new Xn,o=new Xn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],g=r[7],_=r[8],x=r[9],m=r[10],f=r[11],S=r[12],y=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-o,g-u,f-_,M-S).normalize(),s[1].setComponents(c+o,g+u,f+_,M+S).normalize(),s[2].setComponents(c+a,g+h,f+x,M+y).normalize(),s[3].setComponents(c-a,g-h,f-x,M-y).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,g-d,f-m,M-v).normalize();else if(s[4].setComponents(c-l,g-d,f-m,M-v).normalize(),e===Rn)s[5].setComponents(c+l,g+d,f+m,M+v).normalize();else if(e===ro)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);const e=Wf.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Or.x=s.normal.x>0?t.max.x:t.min.x,Or.y=s.normal.y>0?t.max.y:t.min.y,Or.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mn extends Ve{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ou extends Ve{constructor(t,e,n=Ii,s,r,o,a=yn,l=yn,c,u=tr,h=1){if(u!==tr&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ll(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class au extends Ve{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Li extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,u=new ut;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const g=n+h/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Li(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],g=[];let _=0;const x=[],m=n/2;let f=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(g,2));function S(){const v=new I,M=new I;let E=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const b=[],w=C/r,D=w*(e-t)+t;for(let O=0;O<=s;O++){const H=O/s,Z=H*l+a,W=Math.sin(Z),$=Math.cos(Z);M.x=D*W,M.y=-w*n+m,M.z=D*$,h.push(M.x,M.y,M.z),v.set(W,T,$).normalize(),d.push(v.x,v.y,v.z),g.push(H,1-w),b.push(_++)}x.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const w=x[b][C],D=x[b+1][C],O=x[b+1][C+1],H=x[b][C+1];(t>0||b!==0)&&(u.push(w,D,H),E+=3),(e>0||b!==r-1)&&(u.push(D,O,H),E+=3)}c.addGroup(f,E,0),f+=E}function y(v){const M=_,E=new ut,T=new I;let C=0;const b=v===!0?t:e,w=v===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*w,0),d.push(0,w,0),g.push(.5,.5),_++;const D=_;for(let O=0;O<=s;O++){const Z=O/s*l+a,W=Math.cos(Z),$=Math.sin(Z);T.x=b*$,T.y=m*w,T.z=b*W,h.push(T.x,T.y,T.z),d.push(0,w,0),E.x=W*.5+.5,E.y=$*.5*w+.5,g.push(E.x,E.y),_++}for(let O=0;O<s;O++){const H=M+O,Z=D+O;v===!0?u.push(Z,Z+1,H):u.push(Z+1,Z,H),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ul extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),u(),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(r.slice(),3)),this.setAttribute("uv",new $t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new I,v=new I,M=new I;for(let E=0;E<e.length;E+=3)g(e[E+0],y),g(e[E+1],v),g(e[E+2],M),l(y,v,M,S)}function l(S,y,v,M){const E=M+1,T=[];for(let C=0;C<=E;C++){T[C]=[];const b=S.clone().lerp(v,C/E),w=y.clone().lerp(v,C/E),D=E-C;for(let O=0;O<=D;O++)O===0&&C===E?T[C][O]=b:T[C][O]=b.clone().lerp(w,O/D)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const w=Math.floor(b/2);b%2===0?(d(T[C][w+1]),d(T[C+1][w]),d(T[C][w])):(d(T[C][w+1]),d(T[C+1][w+1]),d(T[C+1][w]))}}function c(S){const y=new I;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(S),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function u(){const S=new I;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const v=m(S)/2/Math.PI+.5,M=f(S)/Math.PI+.5;o.push(v,1-M)}_(),h()}function h(){for(let S=0;S<o.length;S+=6){const y=o[S+0],v=o[S+2],M=o[S+4],E=Math.max(y,v,M),T=Math.min(y,v,M);E>.9&&T<.1&&(y<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),M<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function g(S,y){const v=S*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function _(){const S=new I,y=new I,v=new I,M=new I,E=new ut,T=new ut,C=new ut;for(let b=0,w=0;b<r.length;b+=9,w+=6){S.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),E.set(o[w+0],o[w+1]),T.set(o[w+2],o[w+3]),C.set(o[w+4],o[w+5]),M.copy(S).add(y).add(v).divideScalar(3);const D=m(M);x(E,w+0,S,D),x(T,w+2,y,D),x(C,w+4,v,D)}}function x(S,y,v,M){M<0&&S.x===1&&(o[y]=S.x-1),v.x===0&&v.z===0&&(o[y]=M/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ul(t.vertices,t.indices,t.radius,t.details)}}class Fl extends Ul{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fl(t.radius,t.detail)}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,g=(o-u)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ut:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new ve;for(let g=0;g<=t;g++){const _=g/t;s[g]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(te(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(te(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ol extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,g=c-this.aY;l=d*u-g*h+this.aX,c=d*h+g*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xf extends Ol{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Bl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,g=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,g*=u,s(o,a,d,g)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Br=new I,ta=new Bl,ea=new Bl,na=new Bl;class yo extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Br.subVectors(s[0],s[1]).add(s[0]),c=Br);const h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Br.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Br),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),g),x=Math.pow(h.distanceToSquared(d),g),m=Math.pow(d.distanceToSquared(u),g);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),ta.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,x,m),ea.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,x,m),na.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,x,m)}else this.curveType==="catmullrom"&&(ta.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),ea.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),na.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ta.calc(l),ea.calc(l),na.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Jf(i,t){const e=1-i;return e*e*t}function qf(i,t){return 2*(1-i)*i*t}function Yf(i,t){return i*i*t}function Js(i,t,e,n){return Jf(i,t)+qf(i,e)+Yf(i,n)}function $f(i,t){const e=1-i;return e*e*e*t}function Zf(i,t){const e=1-i;return 3*e*e*i*t}function jf(i,t){return 3*(1-i)*i*i*t}function Kf(i,t){return i*i*i*t}function qs(i,t,e,n,s){return $f(i,t)+Zf(i,e)+jf(i,n)+Kf(i,s)}class lu extends Nn{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,s.x,r.x,o.x,a.x),qs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qf extends Nn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qs(t,s.x,r.x,o.x,a.x),qs(t,s.y,r.y,o.y,a.y),qs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cu extends Nn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tp extends Nn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hu extends Nn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uu extends Nn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Js(t,s.x,r.x,o.x),Js(t,s.y,r.y,o.y),Js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class du extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Uc(a,l.x,c.x,u.x,h.x),Uc(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var lo=Object.freeze({__proto__:null,ArcCurve:Xf,CatmullRomCurve3:yo,CubicBezierCurve:lu,CubicBezierCurve3:Qf,EllipseCurve:Ol,LineCurve:cu,LineCurve3:tp,QuadraticBezierCurve:hu,QuadraticBezierCurve3:uu,SplineCurve:du});class ep extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new lo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new lo[s.type]().fromJSON(s))}return this}}class Fc extends ep{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new cu(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new hu(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new lu(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new du(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Ol(t,e,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fs extends Fc{constructor(t){super(t),this.uuid=In(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fc().fromJSON(s))}return this}}function np(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=fu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=ap(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=e;d<s;d+=e){const g=i[d],_=i[d+1];g<a&&(a=g),_<l&&(l=_),g>u&&(u=g),_>h&&(h=_)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return sr(r,o,e,a,l,c,0),o}function fu(i,t,e,n,s){let r;if(s===vp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Oc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Oc(o/n|0,i[o],i[o+1],r);return r&&Ms(r,r.next)&&(or(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ms(e,e.next)||we(e.prev,e,e.next)===0)){if(or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&dp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?sp(i,n,s,r):ip(i)){t.push(l.i,i.i,c.i),or(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=rp(ki(i),t),sr(i,t,e,n,s,r,2)):o===2&&op(i,t,e,n,s,r):sr(ki(i),t,e,n,s,r,1);break}}}function ip(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),h=Math.min(a,l,c),d=Math.max(s,r,o),g=Math.max(a,l,c);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=g&&zs(s,a,r,l,o,c,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function sp(i,t,e,n){const s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,d=o.y,g=Math.min(a,l,c),_=Math.min(u,h,d),x=Math.max(a,l,c),m=Math.max(u,h,d),f=nl(g,_,t,e,n),S=nl(x,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=f&&v&&v.z<=S;){if(y.x>=g&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&zs(a,u,l,h,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=g&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&zs(a,u,l,h,c,d,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=g&&y.x<=x&&y.y>=_&&y.y<=m&&y!==s&&y!==o&&zs(a,u,l,h,c,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=g&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&zs(a,u,l,h,c,d,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function rp(i,t){let e=i;do{const n=e.prev,s=e.next.next;!Ms(n,s)&&mu(n,e,e.next,s)&&rr(n,s)&&rr(s,n)&&(t.push(n.i,e.i,s.i),or(e),or(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function op(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mp(o,a)){let l=gu(o,a);o=ki(o,o.next),l=ki(l,l.next),sr(o,t,e,n,s,r,0),sr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ap(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=fu(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(pp(c))}s.sort(lp);for(let r=0;r<s.length;r++)e=cp(s[r],e);return e}function lp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function cp(i,t){const e=hp(i,t);if(!e)return t;const n=gu(e,i);return ki(n,n.next),ki(e,e.next)}function hp(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(Ms(i,e))return e;do{if(Ms(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const h=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>r&&(r=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&pu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const h=Math.abs(s-e.y)/(n-e.x);rr(e,i)&&(h<u||h===u&&(e.x>o.x||e.x===o.x&&up(o,e)))&&(o=e,u=h)}e=e.next}while(e!==a);return o}function up(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function dp(i,t,e,n){let s=i;do s.z===0&&(s.z=nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,fp(s)}function fp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function pp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function pu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function zs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&pu(i,t,e,n,s,r,o,a)}function mp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!gp(i,t)&&(rr(i,t)&&rr(t,i)&&_p(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||Ms(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ms(i,t){return i.x===t.x&&i.y===t.y}function mu(i,t,e,n){const s=Hr(we(i,t,e)),r=Hr(we(i,t,n)),o=Hr(we(e,n,i)),a=Hr(we(e,n,t));return!!(s!==r&&o!==a||s===0&&zr(i,e,t)||r===0&&zr(i,n,t)||o===0&&zr(e,i,n)||a===0&&zr(e,t,n))}function zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hr(i){return i>0?1:i<0?-1:0}function gp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function rr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function _p(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function gu(i,t){const e=il(i.i,i.x,i.y),n=il(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Oc(i,t,e,n){const s=il(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function il(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function vp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class xp{static triangulate(t,e,n=2){return np(t,e,n)}}class qn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return qn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Bc(t),zc(n,t);let o=t.length;e.forEach(Bc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,zc(n,e[l]);const a=xp.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Bc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ar extends _e{constructor(t=new fs([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new $t(s,3)),this.setAttribute("uv",new $t(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:yp;let y,v=!1,M,E,T,C;f&&(y=f.getSpacedPoints(u),v=!0,d=!1,M=f.computeFrenetFrames(u,!1),E=new I,T=new I,C=new I),d||(m=0,g=0,_=0,x=0);const b=a.extractPoints(c);let w=b.shape;const D=b.holes;if(!qn.isClockWise(w)){w=w.reverse();for(let rt=0,it=D.length;rt<it;rt++){const st=D[rt];qn.isClockWise(st)&&(D[rt]=st.reverse())}}function H(rt){const st=10000000000000001e-36;let N=rt[0];for(let X=1;X<=rt.length;X++){const G=X%rt.length,K=rt[G],nt=K.x-N.x,ct=K.y-N.y,R=nt*nt+ct*ct,p=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(N.x),Math.abs(N.y)),P=st*p*p;if(R<=P){rt.splice(G,1),X--;continue}N=K}}H(w),D.forEach(H);const Z=D.length,W=w;for(let rt=0;rt<Z;rt++){const it=D[rt];w=w.concat(it)}function $(rt,it,st){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(it,st)}const et=w.length;function J(rt,it,st){let N,X,G;const K=rt.x-it.x,nt=rt.y-it.y,ct=st.x-rt.x,R=st.y-rt.y,p=K*K+nt*nt,P=K*R-nt*ct;if(Math.abs(P)>Number.EPSILON){const L=Math.sqrt(p),B=Math.sqrt(ct*ct+R*R),F=it.x-nt/L,at=it.y+K/L,Q=st.x-R/B,St=st.y+ct/B,dt=((Q-F)*R-(St-at)*ct)/(K*R-nt*ct);N=F+K*dt-rt.x,X=at+nt*dt-rt.y;const j=N*N+X*X;if(j<=2)return new ut(N,X);G=Math.sqrt(j/2)}else{let L=!1;K>Number.EPSILON?ct>Number.EPSILON&&(L=!0):K<-Number.EPSILON?ct<-Number.EPSILON&&(L=!0):Math.sign(nt)===Math.sign(R)&&(L=!0),L?(N=-nt,X=K,G=Math.sqrt(p)):(N=K,X=nt,G=Math.sqrt(p/2))}return new ut(N/G,X/G)}const gt=[];for(let rt=0,it=W.length,st=it-1,N=rt+1;rt<it;rt++,st++,N++)st===it&&(st=0),N===it&&(N=0),gt[rt]=J(W[rt],W[st],W[N]);const pt=[];let Et,Ut=gt.concat();for(let rt=0,it=Z;rt<it;rt++){const st=D[rt];Et=[];for(let N=0,X=st.length,G=X-1,K=N+1;N<X;N++,G++,K++)G===X&&(G=0),K===X&&(K=0),Et[N]=J(st[N],st[G],st[K]);pt.push(Et),Ut=Ut.concat(Et)}let Yt;if(m===0)Yt=qn.triangulateShape(W,D);else{const rt=[],it=[];for(let st=0;st<m;st++){const N=st/m,X=g*Math.cos(N*Math.PI/2),G=_*Math.sin(N*Math.PI/2)+x;for(let K=0,nt=W.length;K<nt;K++){const ct=$(W[K],gt[K],G);Lt(ct.x,ct.y,-X),N===0&&rt.push(ct)}for(let K=0,nt=Z;K<nt;K++){const ct=D[K];Et=pt[K];const R=[];for(let p=0,P=ct.length;p<P;p++){const L=$(ct[p],Et[p],G);Lt(L.x,L.y,-X),N===0&&R.push(L)}N===0&&it.push(R)}}Yt=qn.triangulateShape(rt,it)}const ie=Yt.length,Zt=_+x;for(let rt=0;rt<et;rt++){const it=d?$(w[rt],Ut[rt],Zt):w[rt];v?(T.copy(M.normals[0]).multiplyScalar(it.x),E.copy(M.binormals[0]).multiplyScalar(it.y),C.copy(y[0]).add(T).add(E),Lt(C.x,C.y,C.z)):Lt(it.x,it.y,0)}for(let rt=1;rt<=u;rt++)for(let it=0;it<et;it++){const st=d?$(w[it],Ut[it],Zt):w[it];v?(T.copy(M.normals[rt]).multiplyScalar(st.x),E.copy(M.binormals[rt]).multiplyScalar(st.y),C.copy(y[rt]).add(T).add(E),Lt(C.x,C.y,C.z)):Lt(st.x,st.y,h/u*rt)}for(let rt=m-1;rt>=0;rt--){const it=rt/m,st=g*Math.cos(it*Math.PI/2),N=_*Math.sin(it*Math.PI/2)+x;for(let X=0,G=W.length;X<G;X++){const K=$(W[X],gt[X],N);Lt(K.x,K.y,h+st)}for(let X=0,G=D.length;X<G;X++){const K=D[X];Et=pt[X];for(let nt=0,ct=K.length;nt<ct;nt++){const R=$(K[nt],Et[nt],N);v?Lt(R.x,R.y+y[u-1].y,y[u-1].x+st):Lt(R.x,R.y,h+st)}}}tt(),lt();function tt(){const rt=s.length/3;if(d){let it=0,st=et*it;for(let N=0;N<ie;N++){const X=Yt[N];Dt(X[2]+st,X[1]+st,X[0]+st)}it=u+m*2,st=et*it;for(let N=0;N<ie;N++){const X=Yt[N];Dt(X[0]+st,X[1]+st,X[2]+st)}}else{for(let it=0;it<ie;it++){const st=Yt[it];Dt(st[2],st[1],st[0])}for(let it=0;it<ie;it++){const st=Yt[it];Dt(st[0]+et*u,st[1]+et*u,st[2]+et*u)}}n.addGroup(rt,s.length/3-rt,0)}function lt(){const rt=s.length/3;let it=0;_t(W,it),it+=W.length;for(let st=0,N=D.length;st<N;st++){const X=D[st];_t(X,it),it+=X.length}n.addGroup(rt,s.length/3-rt,1)}function _t(rt,it){let st=rt.length;for(;--st>=0;){const N=st;let X=st-1;X<0&&(X=rt.length-1);for(let G=0,K=u+m*2;G<K;G++){const nt=et*G,ct=et*(G+1),R=it+N+nt,p=it+X+nt,P=it+X+ct,L=it+N+ct;Jt(R,p,P,L)}}}function Lt(rt,it,st){l.push(rt),l.push(it),l.push(st)}function Dt(rt,it,st){re(rt),re(it),re(st);const N=s.length/3,X=S.generateTopUV(n,s,N-3,N-2,N-1);k(X[0]),k(X[1]),k(X[2])}function Jt(rt,it,st,N){re(rt),re(it),re(N),re(it),re(st),re(N);const X=s.length/3,G=S.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);k(G[0]),k(G[1]),k(G[3]),k(G[1]),k(G[2]),k(G[3])}function re(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function k(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Mp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new lo[s.type]().fromJSON(s)),new ar(n,t.options)}}const yp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ut(r,o),new ut(a,l),new ut(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],g=t[s*3+1],_=t[s*3+2],x=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ut(o,1-l),new ut(c,1-h),new ut(d,1-_),new ut(x,1-f)]:[new ut(a,1-l),new ut(u,1-h),new ut(g,1-_),new ut(m,1-f)]}};function Mp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class He extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,g=[],_=[],x=[],m=[];for(let f=0;f<u;f++){const S=f*d-o;for(let y=0;y<c;y++){const v=y*h-r;_.push(v,-S,0),x.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const y=S+c*f,v=S+c*(f+1),M=S+1+c*(f+1),E=S+1+c*f;g.push(y,v,E),g.push(v,M,E)}this.setIndex(g),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new He(t.width,t.height,t.widthSegments,t.heightSegments)}}class Cn extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=t;const d=(e-t)/s,g=new I,_=new ut;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const f=r+m/n*o;g.x=h*Math.cos(f),g.y=h*Math.sin(f),l.push(g.x,g.y,g.z),c.push(0,0,1),_.x=(g.x/e+1)/2,_.y=(g.y/e+1)/2,u.push(_.x,_.y)}h+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let f=0;f<n;f++){const S=f+m,y=S,v=S+n+1,M=S+n+2,E=S+1;a.push(y,v,E),a.push(v,M,E)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class zl extends _e{constructor(t=new fs([new ut(0,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new $t(s,3)),this.setAttribute("normal",new $t(r,3)),this.setAttribute("uv",new $t(o,2));function c(u){const h=s.length/3,d=u.extractPoints(e);let g=d.shape;const _=d.holes;qn.isClockWise(g)===!1&&(g=g.reverse());for(let m=0,f=_.length;m<f;m++){const S=_[m];qn.isClockWise(S)===!0&&(_[m]=S.reverse())}const x=qn.triangulateShape(g,_);for(let m=0,f=_.length;m<f;m++){const S=_[m];g=g.concat(S)}for(let m=0,f=g.length;m<f;m++){const S=g[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,f=x.length;m<f;m++){const S=x[m],y=S[0]+h,v=S[1]+h,M=S[2]+h;n.push(y,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Sp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new zl(n,t.curveSegments)}}function Sp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class vn extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new I,d=new I,g=[],_=[],x=[],m=[];for(let f=0;f<=n;f++){const S=[],y=f/n;let v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){const E=M/e;h.x=-t*Math.cos(s+E*r)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(s+E*r)*Math.sin(o+y*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(E+v,1-y),S.push(c++)}u.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const y=u[f][S+1],v=u[f][S],M=u[f+1][S],E=u[f+1][S+1];(f!==0||o>0)&&g.push(y,v,E),(f!==n-1||l<Math.PI)&&g.push(v,M,E)}this.setIndex(g),this.setAttribute("position",new $t(_,3)),this.setAttribute("normal",new $t(x,3)),this.setAttribute("uv",new $t(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pn extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],u=new I,h=new I,d=new I;for(let g=0;g<=n;g++)for(let _=0;_<=s;_++){const x=_/s*r,m=g/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),a.push(h.x,h.y,h.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=s;_++){const x=(s+1)*g+_-1,m=(s+1)*(g-1)+_-1,f=(s+1)*(g-1)+_,S=(s+1)*g+_;o.push(x,m,S),o.push(m,f,S)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class fr extends _e{constructor(t=new uu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new ut;let u=new I;const h=[],d=[],g=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new $t(h,3)),this.setAttribute("normal",new $t(d,3)),this.setAttribute("uv",new $t(g,2));function x(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),S(),f()}function m(y){u=t.getPointAt(y/e,u);const v=o.normals[y],M=o.binormals[y];for(let E=0;E<=s;E++){const T=E/s*Math.PI*2,C=Math.sin(T),b=-Math.cos(T);l.x=b*v.x+C*M.x,l.y=b*v.y+C*M.y,l.z=b*v.z+C*M.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function f(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const M=(s+1)*(y-1)+(v-1),E=(s+1)*y+(v-1),T=(s+1)*y+v,C=(s+1)*(y-1)+v;_.push(M,E,C),_.push(E,T,C)}}function S(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)c.x=y/e,c.y=v/s,g.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new fr(new lo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class At extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sl extends At{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ep extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bp extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class _u extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class wp extends _u{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ia=new ve,Hc=new I,Vc=new I;class Tp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hc),Vc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vc),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Hl extends nu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ap extends Tp{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rp extends _u{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new Ap}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Cp extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Gc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=te(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(te(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Pp extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Wc(i,t,e,n){const s=Lp(n);switch(e){case Hh:return i*t;case Gh:return i*t/s.components*s.byteLength;case Al:return i*t/s.components*s.byteLength;case Wh:return i*t*2/s.components*s.byteLength;case Rl:return i*t*2/s.components*s.byteLength;case Vh:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Cl:return i*t*4/s.components*s.byteLength;case jr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qr:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ra:case Pa:return Math.max(i,16)*Math.max(t,8)/4;case Aa:case Ca:return Math.max(i,8)*Math.max(t,8)/2;case La:case Ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Da:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ua:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case qa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ya:case $a:case Za:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ja:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Qa:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lp(i){switch(i){case Dn:case Fh:return{byteLength:1,components:1};case Ks:case Oh:case Ts:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case Ii:case bl:case Jn:return{byteLength:4,components:1};case Bh:case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:El}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=El);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ip(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((g,_)=>g.start-_.start);let d=0;for(let g=1;g<h.length;g++){const _=h[d],x=h[g];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let g=0,_=h.length;g<_;g++){const x=h[g];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Op=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Am=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Im=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$m=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,a0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,S0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,T0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,A0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,L0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,B0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,H0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Q0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ig=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ag=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:Dp,alphahash_pars_fragment:kp,alphamap_fragment:Np,alphamap_pars_fragment:Up,alphatest_fragment:Fp,alphatest_pars_fragment:Op,aomap_fragment:Bp,aomap_pars_fragment:zp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:Jp,bumpmap_pars_fragment:qp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:$p,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:jp,color_fragment:Kp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:om,emissivemap_fragment:am,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:wm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:vm,fog_pars_fragment:xm,gradientmap_pars_fragment:ym,lightmap_pars_fragment:Mm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:Em,lights_pars_begin:bm,lights_toon_fragment:Tm,lights_toon_pars_fragment:Am,lights_phong_fragment:Rm,lights_phong_pars_fragment:Cm,lights_physical_fragment:Pm,lights_physical_pars_fragment:Lm,lights_fragment_begin:Im,lights_fragment_maps:Dm,lights_fragment_end:km,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Um,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Om,map_fragment:Bm,map_pars_fragment:zm,map_particle_fragment:Hm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Gm,metalnessmap_pars_fragment:Wm,morphinstance_vertex:Xm,morphcolor_vertex:Jm,morphnormal_vertex:qm,morphtarget_pars_vertex:Ym,morphtarget_vertex:$m,normal_fragment_begin:Zm,normal_fragment_maps:jm,normal_pars_fragment:Km,normal_pars_vertex:Qm,normal_vertex:t0,normalmap_pars_fragment:e0,clearcoat_normal_fragment_begin:n0,clearcoat_normal_fragment_maps:i0,clearcoat_pars_fragment:s0,iridescence_pars_fragment:r0,opaque_fragment:o0,packing:a0,premultiplied_alpha_fragment:l0,project_vertex:c0,dithering_fragment:h0,dithering_pars_fragment:u0,roughnessmap_fragment:d0,roughnessmap_pars_fragment:f0,shadowmap_pars_fragment:p0,shadowmap_pars_vertex:m0,shadowmap_vertex:g0,shadowmask_pars_fragment:_0,skinbase_vertex:v0,skinning_pars_vertex:x0,skinning_vertex:y0,skinnormal_vertex:M0,specularmap_fragment:S0,specularmap_pars_fragment:E0,tonemapping_fragment:b0,tonemapping_pars_fragment:w0,transmission_fragment:T0,transmission_pars_fragment:A0,uv_pars_fragment:R0,uv_pars_vertex:C0,uv_vertex:P0,worldpos_vertex:L0,background_vert:I0,background_frag:D0,backgroundCube_vert:k0,backgroundCube_frag:N0,cube_vert:U0,cube_frag:F0,depth_vert:O0,depth_frag:B0,distanceRGBA_vert:z0,distanceRGBA_frag:H0,equirect_vert:V0,equirect_frag:G0,linedashed_vert:W0,linedashed_frag:X0,meshbasic_vert:J0,meshbasic_frag:q0,meshlambert_vert:Y0,meshlambert_frag:$0,meshmatcap_vert:Z0,meshmatcap_frag:j0,meshnormal_vert:K0,meshnormal_frag:Q0,meshphong_vert:tg,meshphong_frag:eg,meshphysical_vert:ng,meshphysical_frag:ig,meshtoon_vert:sg,meshtoon_frag:rg,points_vert:og,points_frag:ag,shadow_vert:lg,shadow_frag:cg,sprite_vert:hg,sprite_frag:ug},Tt={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Tn={basic:{uniforms:Xe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Xe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Xe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Xe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Xe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new ne(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Xe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Xe([Tt.points,Tt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Xe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Xe([Tt.common,Tt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Xe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Xe([Tt.sprite,Tt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Xe([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Xe([Tt.lights,Tt.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Tn.physical={uniforms:Xe([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Vr={r:0,b:0,g:0},yi=new kn,dg=new ve;function fg(i,t,e,n,s,r,o){const a=new ne(0);let l=r===!0?0:1,c,u,h=null,d=0,g=null;function _(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function x(y){let v=!1;const M=_(y);M===null?f(a,l):M&&M.isColor&&(f(M,1),v=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===xo)?(u===void 0&&(u=new ft(new Xt(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:ys(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),yi.copy(v.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dg.makeRotationFromEuler(yi)),u.material.toneMapped=le.getTransfer(M.colorSpace)!==de,(h!==M||d!==M.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=M,d=M.version,g=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ft(new He(2,2),new Zn({name:"BackgroundMaterial",uniforms:ys(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=le.getTransfer(M.colorSpace)!==de,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,g=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,v){y.getRGB(Vr,tu(i)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,v,o)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:x,addToRenderList:m,dispose:S}}function pg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(w,D,O,H,Z){let W=!1;const $=h(H,O,D);r!==$&&(r=$,c(r.object)),W=g(w,H,O,Z),W&&_(w,H,O,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(w,D,O,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(w){return i.bindVertexArray(w)}function u(w){return i.deleteVertexArray(w)}function h(w,D,O){const H=O.wireframe===!0;let Z=n[w.id];Z===void 0&&(Z={},n[w.id]=Z);let W=Z[D.id];W===void 0&&(W={},Z[D.id]=W);let $=W[H];return $===void 0&&($=d(l()),W[H]=$),$}function d(w){const D=[],O=[],H=[];for(let Z=0;Z<e;Z++)D[Z]=0,O[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:H,object:w,attributes:{},index:null}}function g(w,D,O,H){const Z=r.attributes,W=D.attributes;let $=0;const et=O.getAttributes();for(const J in et)if(et[J].location>=0){const pt=Z[J];let Et=W[J];if(Et===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),pt===void 0||pt.attribute!==Et||Et&&pt.data!==Et.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function _(w,D,O,H){const Z={},W=D.attributes;let $=0;const et=O.getAttributes();for(const J in et)if(et[J].location>=0){let pt=W[J];pt===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(pt=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(pt=w.instanceColor));const Et={};Et.attribute=pt,pt&&pt.data&&(Et.data=pt.data),Z[J]=Et,$++}r.attributes=Z,r.attributesNum=$,r.index=H}function x(){const w=r.newAttributes;for(let D=0,O=w.length;D<O;D++)w[D]=0}function m(w){f(w,0)}function f(w,D){const O=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;O[w]=1,H[w]===0&&(i.enableVertexAttribArray(w),H[w]=1),Z[w]!==D&&(i.vertexAttribDivisor(w,D),Z[w]=D)}function S(){const w=r.newAttributes,D=r.enabledAttributes;for(let O=0,H=D.length;O<H;O++)D[O]!==w[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function y(w,D,O,H,Z,W,$){$===!0?i.vertexAttribIPointer(w,D,O,Z,W):i.vertexAttribPointer(w,D,O,H,Z,W)}function v(w,D,O,H){x();const Z=H.attributes,W=O.getAttributes(),$=D.defaultAttributeValues;for(const et in W){const J=W[et];if(J.location>=0){let gt=Z[et];if(gt===void 0&&(et==="instanceMatrix"&&w.instanceMatrix&&(gt=w.instanceMatrix),et==="instanceColor"&&w.instanceColor&&(gt=w.instanceColor)),gt!==void 0){const pt=gt.normalized,Et=gt.itemSize,Ut=t.get(gt);if(Ut===void 0)continue;const Yt=Ut.buffer,ie=Ut.type,Zt=Ut.bytesPerElement,tt=ie===i.INT||ie===i.UNSIGNED_INT||gt.gpuType===bl;if(gt.isInterleavedBufferAttribute){const lt=gt.data,_t=lt.stride,Lt=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<J.locationSize;Dt++)f(J.location+Dt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Dt=0;Dt<J.locationSize;Dt++)m(J.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Dt=0;Dt<J.locationSize;Dt++)y(J.location+Dt,Et/J.locationSize,ie,pt,_t*Zt,(Lt+Et/J.locationSize*Dt)*Zt,tt)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<J.locationSize;lt++)f(J.location+lt,gt.meshPerAttribute);w.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<J.locationSize;lt++)m(J.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let lt=0;lt<J.locationSize;lt++)y(J.location+lt,Et/J.locationSize,ie,pt,Et*Zt,Et/J.locationSize*lt*Zt,tt)}}else if($!==void 0){const pt=$[et];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(J.location,pt);break;case 3:i.vertexAttrib3fv(J.location,pt);break;case 4:i.vertexAttrib4fv(J.location,pt);break;default:i.vertexAttrib1fv(J.location,pt)}}}}S()}function M(){C();for(const w in n){const D=n[w];for(const O in D){const H=D[O];for(const Z in H)u(H[Z].object),delete H[Z];delete D[O]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;const D=n[w.id];for(const O in D){const H=D[O];for(const Z in H)u(H[Z].object),delete H[Z];delete D[O]}delete n[w.id]}function T(w){for(const D in n){const O=n[D];if(O[w.id]===void 0)continue;const H=O[w.id];for(const Z in H)u(H[Z].object),delete H[Z];delete O[w.id]}}function C(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function mg(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];e.update(g,n,1)}function l(c,u,h,d){if(h===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=u[x]*d[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==_n&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Jn&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:M,maxSamples:E}}function _g(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Xn,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||n!==0||s;return s=d,n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,g){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const S=r?0:n,y=S*4;let v=f.clippingState||null;l.value=v,v=u(_,d,y,g);for(let M=0;M!==y;++M)v[M]=e[M];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,g,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,_!==!0||m===null){const f=g+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=g;y!==x;++y,v+=4)o.copy(h[y]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function vg(i){let t=new WeakMap;function e(o,a){return a===ba?o.mapping=_s:a===wa&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===wa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Of(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ls=4,Xc=[.125,.215,.35,.446,.526,.582],wi=20,sa=new Hl,Jc=new ne;let ra=null,oa=0,aa=0,la=!1;const Ei=(1+Math.sqrt(5))/2,ss=1/Ei,qc=[new I(-Ei,ss,0),new I(Ei,ss,0),new I(-ss,0,Ei),new I(ss,0,Ei),new I(0,Ei,-ss),new I(0,Ei,ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],xg=new I;class Yc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=xg}=r;ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=la,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Ts,format:_n,colorSpace:xs,depthBuffer:!1},s=$c(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$c(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yg(r)),this._blurMaterial=Mg(r,t,e)}return s}_compileMaterial(t){const e=new ft(this._lodPlanes[0],t);this._renderer.compile(e,sa)}_sceneToCubeUV(t,e,n,s,r){const l=new ze(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,g=h.toneMapping;h.getClearColor(Jc),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const x=new Be({name:"PMREM.Background",side:Ye,depthWrite:!1,depthTest:!1}),m=new ft(new Xt,x);let f=!1;const S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,f=!0):(x.color.copy(Jc),f=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));const M=this._cubeSize;Gr(s,v*M,y>2?M:0,M,M),h.setRenderTarget(s),f&&h.render(m,l),h.render(t,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=g,h.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ft(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,sa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=qc[(s-r-1)%qc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ft(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*wi-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):wi;m>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${wi}`);const f=[];let S=0;for(let T=0;T<wi;++T){const C=T/x,b=Math.exp(-C*C/2);f.push(b),T===0?S+=b:T<m&&(S+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[s],M=3*v*(s>y-ls?s-y+ls:0),E=4*(this._cubeSize-v);Gr(e,M,E,3*v,2*v),l.setRenderTarget(e),l.render(h,sa)}}function yg(i){const t=[],e=[],n=[];let s=i;const r=i-ls+1+Xc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ls?l=Xc[o-i+ls-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],g=6,_=6,x=3,m=2,f=1,S=new Float32Array(x*_*g),y=new Float32Array(m*_*g),v=new Float32Array(f*_*g);for(let E=0;E<g;E++){const T=E%3*2/3-1,C=E>2?0:-1,b=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(b,x*_*E),y.set(d,m*_*E);const w=[E,E,E,E,E,E];v.set(w,f*_*E)}const M=new _e;M.setAttribute("position",new Mn(S,x)),M.setAttribute("uv",new Mn(y,m)),M.setAttribute("faceIndex",new Mn(v,f)),t.push(M),s>ls&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $c(i,t,e){const n=new di(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mg(i,t,e){const n=new Float32Array(wi),s=new I(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Zc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function jc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ba||l===wa,u=l===_s||l===vs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yc(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&s(g)?(e===null&&(e=new Yc(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Eg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER)}function c(h){const d=[],g=h.index,_=h.attributes.position;let x=0;if(g!==null){const S=g.array;x=g.version;for(let y=0,v=S.length;y<v;y+=3){const M=S[y+0],E=S[y+1],T=S[y+2];d.push(M,E,E,T,T,M)}}else if(_!==void 0){const S=_.array;x=_.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const M=y+0,E=y+1,T=y+2;d.push(M,E,E,T,T,M)}}else return;const m=new(qh(d)?Qh:Kh)(d,1);m.version=x;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function wg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,g){i.drawElements(n,g,r,d*o),e.update(g,n,1)}function c(d,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,d*o,_),e.update(g,n,_))}function u(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=g[f];e.update(m,n,1)}function h(d,g,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,g[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,x,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S]*x[S];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ag(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let w=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",w)};var g=w;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let M=a.attributes.position.count*v,E=1;M>t.maxTextureSize&&(E=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const T=new Float32Array(M*E*4*h),C=new Yh(T,M,E,h);C.type=Jn,C.needsUpdate=!0;const b=v*4;for(let D=0;D<h;D++){const O=f[D],H=S[D],Z=y[D],W=M*E*4*D;for(let $=0;$<O.count;$++){const et=$*b;_===!0&&(s.fromBufferAttribute(O,$),T[W+et+0]=s.x,T[W+et+1]=s.y,T[W+et+2]=s.z,T[W+et+3]=0),x===!0&&(s.fromBufferAttribute(H,$),T[W+et+4]=s.x,T[W+et+5]=s.y,T[W+et+6]=s.z,T[W+et+7]=0),m===!0&&(s.fromBufferAttribute(Z,$),T[W+et+8]=s.x,T[W+et+9]=s.y,T[W+et+10]=s.z,T[W+et+11]=Z.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new ut(M,E)},n.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const x=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Rg(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const xu=new Ve,Kc=new ou(1,1),yu=new Yh,Mu=new Sf,Su=new iu,Qc=[],th=[],eh=new Float32Array(16),nh=new Float32Array(9),ih=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mo(i,t){let e=th[t];e===void 0&&(e=new Int32Array(t),th[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;ih.set(n),i.uniformMatrix2fv(this.addr,!1,ih),De(e,n)}}function kg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;nh.set(n),i.uniformMatrix3fv(this.addr,!1,nh),De(e,n)}}function Ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;eh.set(n),i.uniformMatrix4fv(this.addr,!1,eh),De(e,n)}}function Ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function zg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function Gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kc.compareFunction=Jh,r=Kc):r=xu,e.setTexture2D(t||r,s)}function Xg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function Jg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Su,s)}function qg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yu,s)}function Yg(i){switch(i){case 5126:return Cg;case 35664:return Pg;case 35665:return Lg;case 35666:return Ig;case 35674:return Dg;case 35675:return kg;case 35676:return Ng;case 5124:case 35670:return Ug;case 35667:case 35671:return Fg;case 35668:case 35672:return Og;case 35669:case 35673:return Bg;case 5125:return zg;case 36294:return Hg;case 36295:return Vg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return qg}}function $g(i,t){i.uniform1fv(this.addr,t)}function Zg(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Qg(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function t_(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function e_(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function n_(i,t){i.uniform1iv(this.addr,t)}function i_(i,t){i.uniform2iv(this.addr,t)}function s_(i,t){i.uniform3iv(this.addr,t)}function r_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function a_(i,t){i.uniform2uiv(this.addr,t)}function l_(i,t){i.uniform3uiv(this.addr,t)}function c_(i,t){i.uniform4uiv(this.addr,t)}function h_(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||xu,r[o])}function u_(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Mu,r[o])}function d_(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Su,r[o])}function f_(i,t,e){const n=this.cache,s=t.length,r=Mo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||yu,r[o])}function p_(i){switch(i){case 5126:return $g;case 35664:return Zg;case 35665:return jg;case 35666:return Kg;case 35674:return Qg;case 35675:return t_;case 35676:return e_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}class m_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yg(e.type)}}class g_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=p_(e.type)}}class __{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function sh(i,t){i.seq.push(t),i.map[t.id]=t}function v_(i,t,e){const n=i.name,s=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),o=ca.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){sh(e,c===void 0?new m_(a,i,t):new g_(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new __(a),sh(e,h)),e=h}}}class eo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);v_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function rh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const x_=37297;let y_=0;function M_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const oh=new Qt;function S_(i){le._getMatrix(oh,le.workingColorSpace,i);const t=`mat3( ${oh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case so:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ah(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+M_(i.getShaderSource(t),a)}else return r}function E_(i,t){const e=S_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function b_(i,t){let e;switch(t){case kd:e="Linear";break;case Nd:e="Reinhard";break;case Ud:e="Cineon";break;case Fd:e="ACESFilmic";break;case Bd:e="AgX";break;case zd:e="Neutral";break;case Od:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Wr=new I;function w_(){le.getLuminanceCoefficients(Wr);const i=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function A_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function R_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function lh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ch(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const C_=/^[ \t]*#include +<([\w\d./]+)>/gm;function rl(i){return i.replace(C_,L_)}const P_=new Map;function L_(i,t){let e=ee[t];if(e===void 0){const n=P_.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return rl(e)}const I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hh(i){return i.replace(I_,D_)}function D_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===kh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function N_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function U_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function F_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nh:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function O_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function B_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=k_(e),c=N_(e),u=U_(e),h=F_(e),d=O_(e),g=T_(e),_=A_(r),x=s.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hs).join(`
`),f.length>0&&(f+=`
`)):(m=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),f=[uh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?ee.tonemapping_pars_fragment:"",e.toneMapping!==hi?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,E_("linearToOutputTexel",e.outputColorSpace),w_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=rl(o),o=lh(o,e),o=ch(o,e),a=rl(a),a=lh(a,e),a=ch(a,e),o=hh(o),a=hh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=S+m+o,v=S+f+a,M=rh(s,s.VERTEX_SHADER,y),E=rh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,M),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(D){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(M)||"",Z=s.getShaderInfoLog(E)||"",W=O.trim(),$=H.trim(),et=Z.trim();let J=!0,gt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,E);else{const pt=ah(s,M,"vertex"),Et=ah(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+pt+`
`+Et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):($===""||et==="")&&(gt=!1);gt&&(D.diagnostics={runnable:J,programLog:W,vertexShader:{log:$,prefix:m},fragmentShader:{log:et,prefix:f}})}s.deleteShader(M),s.deleteShader(E),C=new eo(s,x),b=R_(s,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(x,x_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=y_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=E,this}let z_=0;class H_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new V_(t),e.set(t,n)),n}}class V_{constructor(t){this.id=z_++,this.code=t,this.usedTimes=0}}function G_(i,t,e,n,s,r,o){const a=new Zh,l=new H_,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,w,D,O,H){const Z=O.fog,W=H.geometry,$=b.isMeshStandardMaterial?O.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||$),J=et&&et.mapping===xo?et.image.height:null,gt=_[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=pt!==void 0?pt.length:0;let Ut=0;W.morphAttributes.position!==void 0&&(Ut=1),W.morphAttributes.normal!==void 0&&(Ut=2),W.morphAttributes.color!==void 0&&(Ut=3);let Yt,ie,Zt,tt;if(gt){const ce=Tn[gt];Yt=ce.vertexShader,ie=ce.fragmentShader}else Yt=b.vertexShader,ie=b.fragmentShader,l.update(b),Zt=l.getVertexShaderID(b),tt=l.getFragmentShaderID(b);const lt=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Lt=H.isInstancedMesh===!0,Dt=H.isBatchedMesh===!0,Jt=!!b.map,re=!!b.matcap,k=!!et,rt=!!b.aoMap,it=!!b.lightMap,st=!!b.bumpMap,N=!!b.normalMap,X=!!b.displacementMap,G=!!b.emissiveMap,K=!!b.metalnessMap,nt=!!b.roughnessMap,ct=b.anisotropy>0,R=b.clearcoat>0,p=b.dispersion>0,P=b.iridescence>0,L=b.sheen>0,B=b.transmission>0,F=ct&&!!b.anisotropyMap,at=R&&!!b.clearcoatMap,Q=R&&!!b.clearcoatNormalMap,St=R&&!!b.clearcoatRoughnessMap,dt=P&&!!b.iridescenceMap,j=P&&!!b.iridescenceThicknessMap,mt=L&&!!b.sheenColorMap,Bt=L&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,wt=!!b.specularColorMap,Gt=!!b.specularIntensityMap,U=B&&!!b.transmissionMap,xt=B&&!!b.thicknessMap,bt=!!b.gradientMap,kt=!!b.alphaMap,vt=b.alphaTest>0,ot=!!b.alphaHash,It=!!b.extensions;let qt=hi;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(qt=i.toneMapping);const me={shaderID:gt,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:ie,defines:b.defines,customVertexShaderID:Zt,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&H._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&H.instanceColor!==null,instancingMorph:Lt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:xs,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:re,envMap:k,envMapMode:k&&et.mapping,envMapCubeUVHeight:J,aoMap:rt,lightMap:it,bumpMap:st,normalMap:N,displacementMap:d&&X,emissiveMap:G,normalMapObjectSpace:N&&b.normalMapType===Wd,normalMapTangentSpace:N&&b.normalMapType===Xh,metalnessMap:K,roughnessMap:nt,anisotropy:ct,anisotropyMap:F,clearcoat:R,clearcoatMap:at,clearcoatNormalMap:Q,clearcoatRoughnessMap:St,dispersion:p,iridescence:P,iridescenceMap:dt,iridescenceThicknessMap:j,sheen:L,sheenColorMap:mt,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:Gt,transmission:B,transmissionMap:U,thicknessMap:xt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===hs&&b.alphaToCoverage===!1,alphaMap:kt,alphaTest:vt,alphaHash:ot,combine:b.combine,mapUv:Jt&&x(b.map.channel),aoMapUv:rt&&x(b.aoMap.channel),lightMapUv:it&&x(b.lightMap.channel),bumpMapUv:st&&x(b.bumpMap.channel),normalMapUv:N&&x(b.normalMap.channel),displacementMapUv:X&&x(b.displacementMap.channel),emissiveMapUv:G&&x(b.emissiveMap.channel),metalnessMapUv:K&&x(b.metalnessMap.channel),roughnessMapUv:nt&&x(b.roughnessMap.channel),anisotropyMapUv:F&&x(b.anisotropyMap.channel),clearcoatMapUv:at&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Q&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:j&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&x(b.sheenRoughnessMap.channel),specularMapUv:Pt&&x(b.specularMap.channel),specularColorMapUv:wt&&x(b.specularColorMap.channel),specularIntensityMapUv:Gt&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:xt&&x(b.thicknessMap.channel),alphaMapUv:kt&&x(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(N||ct),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(Jt||kt),fog:!!Z,useFog:b.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_t,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:G&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Re,flipSided:b.side===Ye,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:It&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&b.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function f(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)w.push(D),w.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(S(w,b),y(w,b),w.push(i.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function S(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function y(b,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),w.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const w=_[b.type];let D;if(w){const O=Tn[w];D=eu.clone(O.uniforms)}else D=b.uniforms;return D}function M(b,w){let D;for(let O=0,H=u.length;O<H;O++){const Z=u[O];if(Z.cacheKey===w){D=Z,++D.usedTimes;break}}return D===void 0&&(D=new B_(i,w,b,r),u.push(D)),D}function E(b){if(--b.usedTimes===0){const w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),b.destroy()}}function T(b){l.remove(b)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:M,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:C}}function W_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function fh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,g,_,x,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:g,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=g,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function a(h,d,g,_,x,m){const f=o(h,d,g,_,x,m);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):e.push(f)}function l(h,d,g,_,x,m){const f=o(h,d,g,_,x,m);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||X_),n.length>1&&n.sort(d||dh),s.length>1&&s.sort(d||dh)}function u(){for(let h=t,d=i.length;h<d;h++){const g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function J_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new fh,i.set(n,[o])):s>=r.length?(o=new fh,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function q_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new ne};break;case"SpotLight":e={position:new I,direction:new I,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $_=0;function Z_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function j_(i){const t=new q_,e=Y_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new ve,o=new ve;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,_=0,x=0,m=0,f=0,S=0,y=0,v=0,M=0,E=0,T=0;c.sort(Z_);for(let b=0,w=c.length;b<w;b++){const D=c[b],O=D.color,H=D.intensity,Z=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=O.r*H,h+=O.g*H,d+=O.b*H;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],H);T++}else if(D.isDirectionalLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,J=e.get(D);J.shadowIntensity=et.intensity,J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=D.shadow.matrix,S++}n.directional[g]=$,g++}else if(D.isSpotLight){const $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(O).multiplyScalar(H),$.distance=Z,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[x]=$;const et=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,et.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[x]=et.matrix,D.castShadow){const J=e.get(D);J.shadowIntensity=et.intensity,J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=W,v++}x++}else if(D.isRectAreaLight){const $=t.get(D);$.color.copy(O).multiplyScalar(H),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){const $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const et=D.shadow,J=e.get(D);J.shadowIntensity=et.intensity,J.shadowBias=et.bias,J.shadowNormalBias=et.normalBias,J.shadowRadius=et.radius,J.shadowMapSize=et.mapSize,J.shadowCameraNear=et.camera.near,J.shadowCameraFar=et.camera.far,n.pointShadow[_]=J,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=D.shadow.matrix,y++}n.point[_]=$,_++}else if(D.isHemisphereLight){const $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(H),$.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[f]=$,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==g||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==S||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==M||C.numLightProbes!==T)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+M-E,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=g,C.pointLength=_,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=S,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=T,n.version=$_++)}function l(c,u){let h=0,d=0,g=0,_=0,x=0;const m=u.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const y=c[f];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(y.isSpotLight){const v=n.spot[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function ph(i){const t=new j_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function K_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ph(i),t.set(s,[a])):r>=o.length?(a=new ph(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ev(i,t,e){let n=new Nl;const s=new ut,r=new ut,o=new ge,a=new Ep({depthPacking:Gd}),l=new bp,c={},u=e.maxTextureSize,h={[ui]:Ye,[Ye]:ui,[Re]:Re},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Q_,fragmentShader:tv}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new _e;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ft(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dh;let f=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),w=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ci),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=f!==Vn&&this.type===Vn,Z=f===Vn&&this.type!==Vn;for(let W=0,$=E.length;W<$;W++){const et=E[W],J=et.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);const gt=J.getFrameExtents();if(s.multiply(gt),r.copy(J.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/gt.x),s.x=r.x*gt.x,J.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/gt.y),s.y=r.y*gt.y,J.mapSize.y=r.y)),J.map===null||H===!0||Z===!0){const Et=this.type!==Vn?{minFilter:yn,magFilter:yn}:{};J.map!==null&&J.map.dispose(),J.map=new di(s.x,s.y,Et),J.map.texture.name=et.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const pt=J.getViewportCount();for(let Et=0;Et<pt;Et++){const Ut=J.getViewport(Et);o.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),O.viewport(o),J.updateMatrices(et,Et),n=J.getFrustum(),v(T,C,J.camera,et,this.type)}J.isPointLightShadow!==!0&&this.type===Vn&&S(J,C),J.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,w,D)};function S(E,T){const C=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,x,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,g,x,null)}function y(E,T,C,b){let w=null;const D=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)w=D;else if(w=C.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const O=w.uuid,H=T.uuid;let Z=c[O];Z===void 0&&(Z={},c[O]=Z);let W=Z[H];W===void 0&&(W=w.clone(),Z[H]=W,T.addEventListener("dispose",M)),w=W}if(w.visible=T.visible,w.wireframe=T.wireframe,b===Vn?w.side=T.shadowSide!==null?T.shadowSide:T.side:w.side=T.shadowSide!==null?T.shadowSide:h[T.side],w.alphaMap=T.alphaMap,w.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,w.map=T.map,w.clipShadows=T.clipShadows,w.clippingPlanes=T.clippingPlanes,w.clipIntersection=T.clipIntersection,w.displacementMap=T.displacementMap,w.displacementScale=T.displacementScale,w.displacementBias=T.displacementBias,w.wireframeLinewidth=T.wireframeLinewidth,w.linewidth=T.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=i.properties.get(w);O.light=C}return w}function v(E,T,C,b,w){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Vn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const H=t.update(E),Z=E.material;if(Array.isArray(Z)){const W=H.groups;for(let $=0,et=W.length;$<et;$++){const J=W[$],gt=Z[J.materialIndex];if(gt&&gt.visible){const pt=y(E,gt,b,w);E.onBeforeShadow(i,E,T,C,H,pt,J),i.renderBufferDirect(C,null,H,pt,E,J),E.onAfterShadow(i,E,T,C,H,pt,J)}}}else if(Z.visible){const W=y(E,Z,b,w);E.onBeforeShadow(i,E,T,C,H,W,null),i.renderBufferDirect(C,null,H,W,E,null),E.onAfterShadow(i,E,T,C,H,W,null)}}const O=E.children;for(let H=0,Z=O.length;H<Z;H++)v(O[H],T,C,b,w)}function M(E){E.target.removeEventListener("dispose",M);for(const C in c){const b=c[C],w=E.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}const nv={[_a]:va,[xa]:Sa,[ya]:Ea,[gs]:Ma,[va]:_a,[Sa]:xa,[Ea]:ya,[Ma]:gs};function iv(i,t){function e(){let U=!1;const xt=new ge;let bt=null;const kt=new ge(0,0,0,0);return{setMask:function(vt){bt!==vt&&!U&&(i.colorMask(vt,vt,vt,vt),bt=vt)},setLocked:function(vt){U=vt},setClear:function(vt,ot,It,qt,me){me===!0&&(vt*=qt,ot*=qt,It*=qt),xt.set(vt,ot,It,qt),kt.equals(xt)===!1&&(i.clearColor(vt,ot,It,qt),kt.copy(xt))},reset:function(){U=!1,bt=null,kt.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,bt=null,kt=null,vt=null;return{setReversed:function(ot){if(xt!==ot){const It=t.get("EXT_clip_control");ot?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;const qt=vt;vt=null,this.setClear(qt)}},getReversed:function(){return xt},setTest:function(ot){ot?lt(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(ot){bt!==ot&&!U&&(i.depthMask(ot),bt=ot)},setFunc:function(ot){if(xt&&(ot=nv[ot]),kt!==ot){switch(ot){case _a:i.depthFunc(i.NEVER);break;case va:i.depthFunc(i.ALWAYS);break;case xa:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case ya:i.depthFunc(i.EQUAL);break;case Ma:i.depthFunc(i.GEQUAL);break;case Sa:i.depthFunc(i.GREATER);break;case Ea:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}kt=ot}},setLocked:function(ot){U=ot},setClear:function(ot){vt!==ot&&(xt&&(ot=1-ot),i.clearDepth(ot),vt=ot)},reset:function(){U=!1,bt=null,kt=null,vt=null,xt=!1}}}function s(){let U=!1,xt=null,bt=null,kt=null,vt=null,ot=null,It=null,qt=null,me=null;return{setTest:function(ce){U||(ce?lt(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ce){xt!==ce&&!U&&(i.stencilMask(ce),xt=ce)},setFunc:function(ce,Un,bn){(bt!==ce||kt!==Un||vt!==bn)&&(i.stencilFunc(ce,Un,bn),bt=ce,kt=Un,vt=bn)},setOp:function(ce,Un,bn){(ot!==ce||It!==Un||qt!==bn)&&(i.stencilOp(ce,Un,bn),ot=ce,It=Un,qt=bn)},setLocked:function(ce){U=ce},setClear:function(ce){me!==ce&&(i.clearStencil(ce),me=ce)},reset:function(){U=!1,xt=null,bt=null,kt=null,vt=null,ot=null,It=null,qt=null,me=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,g=[],_=null,x=!1,m=null,f=null,S=null,y=null,v=null,M=null,E=null,T=new ne(0,0,0),C=0,b=!1,w=null,D=null,O=null,H=null,Z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,et=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(J)[1]),$=et>=1):J.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),$=et>=2);let gt=null,pt={};const Et=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),Yt=new ge().fromArray(Et),ie=new ge().fromArray(Ut);function Zt(U,xt,bt,kt){const vt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(U,ot),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<bt;It++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,kt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(xt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return ot}const tt={};tt[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(gs),st(!1),N(hc),lt(i.CULL_FACE),rt(ci);function lt(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function _t(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function Lt(U,xt){return h[U]!==xt?(i.bindFramebuffer(U,xt),h[U]=xt,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Dt(U,xt){let bt=g,kt=!1;if(U){bt=d.get(xt),bt===void 0&&(bt=[],d.set(xt,bt));const vt=U.textures;if(bt.length!==vt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,It=vt.length;ot<It;ot++)bt[ot]=i.COLOR_ATTACHMENT0+ot;bt.length=vt.length,kt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,kt=!0);kt&&i.drawBuffers(bt)}function Jt(U){return _!==U?(i.useProgram(U),_=U,!0):!1}const re={[bi]:i.FUNC_ADD,[md]:i.FUNC_SUBTRACT,[gd]:i.FUNC_REVERSE_SUBTRACT};re[_d]=i.MIN,re[vd]=i.MAX;const k={[xd]:i.ZERO,[yd]:i.ONE,[Md]:i.SRC_COLOR,[ma]:i.SRC_ALPHA,[Ad]:i.SRC_ALPHA_SATURATE,[wd]:i.DST_COLOR,[Ed]:i.DST_ALPHA,[Sd]:i.ONE_MINUS_SRC_COLOR,[ga]:i.ONE_MINUS_SRC_ALPHA,[Td]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Cd]:i.ONE_MINUS_CONSTANT_COLOR,[Pd]:i.CONSTANT_ALPHA,[Ld]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(U,xt,bt,kt,vt,ot,It,qt,me,ce){if(U===ci){x===!0&&(_t(i.BLEND),x=!1);return}if(x===!1&&(lt(i.BLEND),x=!0),U!==pd){if(U!==m||ce!==b){if((f!==bi||v!==bi)&&(i.blendEquation(i.FUNC_ADD),f=bi,v=bi),ce)switch(U){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFunc(i.ONE,i.ONE);break;case dc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,y=null,M=null,E=null,T.set(0,0,0),C=0,m=U,b=ce}return}vt=vt||xt,ot=ot||bt,It=It||kt,(xt!==f||vt!==v)&&(i.blendEquationSeparate(re[xt],re[vt]),f=xt,v=vt),(bt!==S||kt!==y||ot!==M||It!==E)&&(i.blendFuncSeparate(k[bt],k[kt],k[ot],k[It]),S=bt,y=kt,M=ot,E=It),(qt.equals(T)===!1||me!==C)&&(i.blendColor(qt.r,qt.g,qt.b,me),T.copy(qt),C=me),m=U,b=!1}function it(U,xt){U.side===Re?_t(i.CULL_FACE):lt(i.CULL_FACE);let bt=U.side===Ye;xt&&(bt=!bt),st(bt),U.blending===hs&&U.transparent===!1?rt(ci):rt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const kt=U.stencilWrite;a.setTest(kt),kt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),G(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(U){w!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),w=U)}function N(U){U!==dd?(lt(i.CULL_FACE),U!==D&&(U===hc?i.cullFace(i.BACK):U===fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),D=U}function X(U){U!==O&&($&&i.lineWidth(U),O=U)}function G(U,xt,bt){U?(lt(i.POLYGON_OFFSET_FILL),(H!==xt||Z!==bt)&&(i.polygonOffset(xt,bt),H=xt,Z=bt)):_t(i.POLYGON_OFFSET_FILL)}function K(U){U?lt(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function nt(U){U===void 0&&(U=i.TEXTURE0+W-1),gt!==U&&(i.activeTexture(U),gt=U)}function ct(U,xt,bt){bt===void 0&&(gt===null?bt=i.TEXTURE0+W-1:bt=gt);let kt=pt[bt];kt===void 0&&(kt={type:void 0,texture:void 0},pt[bt]=kt),(kt.type!==U||kt.texture!==xt)&&(gt!==bt&&(i.activeTexture(bt),gt=bt),i.bindTexture(U,xt||tt[U]),kt.type=U,kt.texture=xt)}function R(){const U=pt[gt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function p(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function L(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function B(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(U){Yt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Yt.copy(U))}function Bt(U){ie.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ie.copy(U))}function Pt(U,xt){let bt=c.get(xt);bt===void 0&&(bt=new WeakMap,c.set(xt,bt));let kt=bt.get(U);kt===void 0&&(kt=i.getUniformBlockIndex(xt,U.name),bt.set(U,kt))}function wt(U,xt){const kt=c.get(xt).get(U);l.get(xt)!==kt&&(i.uniformBlockBinding(xt,kt,U.__bindingPointIndex),l.set(xt,kt))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},gt=null,pt={},h={},d=new WeakMap,g=[],_=null,x=!1,m=null,f=null,S=null,y=null,v=null,M=null,E=null,T=new ne(0,0,0),C=0,b=!1,w=null,D=null,O=null,H=null,Z=null,Yt.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:_t,bindFramebuffer:Lt,drawBuffers:Dt,useProgram:Jt,setBlending:rt,setMaterial:it,setFlipSided:st,setCullFace:N,setLineWidth:X,setPolygonOffset:G,setScissorTest:K,activeTexture:nt,bindTexture:ct,unbindTexture:R,compressedTexImage2D:p,compressedTexImage3D:P,texImage2D:dt,texImage3D:j,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:Q,texStorage3D:St,texSubImage2D:L,texSubImage3D:B,compressedTexSubImage2D:F,compressedTexSubImage3D:at,scissor:mt,viewport:Bt,reset:Gt}}function sv(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,p){return g?new OffscreenCanvas(R,p):oo("canvas")}function x(R,p,P){let L=1;const B=ct(R);if((B.width>P||B.height>P)&&(L=P/Math.max(B.width,B.height)),L<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const F=Math.floor(L*B.width),at=Math.floor(L*B.height);h===void 0&&(h=_(F,at));const Q=p?_(F,at):h;return Q.width=F,Q.height=at,Q.getContext("2d").drawImage(R,0,0,F,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+F+"x"+at+")."),Q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),R;return R}function m(R){return R.generateMipmaps}function f(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,p,P,L,B=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let F=p;if(p===i.RED&&(P===i.FLOAT&&(F=i.R32F),P===i.HALF_FLOAT&&(F=i.R16F),P===i.UNSIGNED_BYTE&&(F=i.R8)),p===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(F=i.R8UI),P===i.UNSIGNED_SHORT&&(F=i.R16UI),P===i.UNSIGNED_INT&&(F=i.R32UI),P===i.BYTE&&(F=i.R8I),P===i.SHORT&&(F=i.R16I),P===i.INT&&(F=i.R32I)),p===i.RG&&(P===i.FLOAT&&(F=i.RG32F),P===i.HALF_FLOAT&&(F=i.RG16F),P===i.UNSIGNED_BYTE&&(F=i.RG8)),p===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(F=i.RG8UI),P===i.UNSIGNED_SHORT&&(F=i.RG16UI),P===i.UNSIGNED_INT&&(F=i.RG32UI),P===i.BYTE&&(F=i.RG8I),P===i.SHORT&&(F=i.RG16I),P===i.INT&&(F=i.RG32I)),p===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(F=i.RGB8UI),P===i.UNSIGNED_SHORT&&(F=i.RGB16UI),P===i.UNSIGNED_INT&&(F=i.RGB32UI),P===i.BYTE&&(F=i.RGB8I),P===i.SHORT&&(F=i.RGB16I),P===i.INT&&(F=i.RGB32I)),p===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),P===i.UNSIGNED_INT&&(F=i.RGBA32UI),P===i.BYTE&&(F=i.RGBA8I),P===i.SHORT&&(F=i.RGBA16I),P===i.INT&&(F=i.RGBA32I)),p===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),p===i.RGBA){const at=B?so:le.getTransfer(L);P===i.FLOAT&&(F=i.RGBA32F),P===i.HALF_FLOAT&&(F=i.RGBA16F),P===i.UNSIGNED_BYTE&&(F=at===de?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function v(R,p){let P;return R?p===null||p===Ii||p===Qs?P=i.DEPTH24_STENCIL8:p===Jn?P=i.DEPTH32F_STENCIL8:p===Ks&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===Ii||p===Qs?P=i.DEPTH_COMPONENT24:p===Jn?P=i.DEPTH_COMPONENT32F:p===Ks&&(P=i.DEPTH_COMPONENT16),P}function M(R,p){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==An?Math.log2(Math.max(p.width,p.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?p.mipmaps.length:1}function E(R){const p=R.target;p.removeEventListener("dispose",E),C(p),p.isVideoTexture&&u.delete(p)}function T(R){const p=R.target;p.removeEventListener("dispose",T),w(p)}function C(R){const p=n.get(R);if(p.__webglInit===void 0)return;const P=R.source,L=d.get(P);if(L){const B=L[p.__cacheKey];B.usedTimes--,B.usedTimes===0&&b(R),Object.keys(L).length===0&&d.delete(P)}n.remove(R)}function b(R){const p=n.get(R);i.deleteTexture(p.__webglTexture);const P=R.source,L=d.get(P);delete L[p.__cacheKey],o.memory.textures--}function w(R){const p=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(p.__webglFramebuffer[L]))for(let B=0;B<p.__webglFramebuffer[L].length;B++)i.deleteFramebuffer(p.__webglFramebuffer[L][B]);else i.deleteFramebuffer(p.__webglFramebuffer[L]);p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer[L])}else{if(Array.isArray(p.__webglFramebuffer))for(let L=0;L<p.__webglFramebuffer.length;L++)i.deleteFramebuffer(p.__webglFramebuffer[L]);else i.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&i.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&i.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let L=0;L<p.__webglColorRenderbuffer.length;L++)p.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(p.__webglColorRenderbuffer[L]);p.__webglDepthRenderbuffer&&i.deleteRenderbuffer(p.__webglDepthRenderbuffer)}const P=R.textures;for(let L=0,B=P.length;L<B;L++){const F=n.get(P[L]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(P[L])}n.remove(R)}let D=0;function O(){D=0}function H(){const R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function Z(R){const p=[];return p.push(R.wrapS),p.push(R.wrapT),p.push(R.wrapR||0),p.push(R.magFilter),p.push(R.minFilter),p.push(R.anisotropy),p.push(R.internalFormat),p.push(R.format),p.push(R.type),p.push(R.generateMipmaps),p.push(R.premultiplyAlpha),p.push(R.flipY),p.push(R.unpackAlignment),p.push(R.colorSpace),p.join()}function W(R,p){const P=n.get(R);if(R.isVideoTexture&&K(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){const L=R.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(P,R,p);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+p)}function $(R,p){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){tt(P,R,p);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+p)}function et(R,p){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){tt(P,R,p);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+p)}function J(R,p){const P=n.get(R);if(R.version>0&&P.__version!==R.version){lt(P,R,p);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+p)}const gt={[js]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},pt={[yn]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[Ri]:i.LINEAR_MIPMAP_LINEAR},Et={[Xd]:i.NEVER,[jd]:i.ALWAYS,[Jd]:i.LESS,[Jh]:i.LEQUAL,[qd]:i.EQUAL,[Zd]:i.GEQUAL,[Yd]:i.GREATER,[$d]:i.NOTEQUAL};function Ut(R,p){if(p.type===Jn&&t.has("OES_texture_float_linear")===!1&&(p.magFilter===An||p.magFilter===Po||p.magFilter===vr||p.magFilter===Ri||p.minFilter===An||p.minFilter===Po||p.minFilter===vr||p.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,gt[p.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,gt[p.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,gt[p.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pt[p.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pt[p.minFilter]),p.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Et[p.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===yn||p.minFilter!==vr&&p.minFilter!==Ri||p.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||n.get(p).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,s.getMaxAnisotropy())),n.get(p).__currentAnisotropy=p.anisotropy}}}function Yt(R,p){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,p.addEventListener("dispose",E));const L=p.source;let B=d.get(L);B===void 0&&(B={},d.set(L,B));const F=Z(p);if(F!==R.__cacheKey){B[F]===void 0&&(B[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),B[F].usedTimes++;const at=B[R.__cacheKey];at!==void 0&&(B[R.__cacheKey].usedTimes--,at.usedTimes===0&&b(p)),R.__cacheKey=F,R.__webglTexture=B[F].texture}return P}function ie(R,p,P){return Math.floor(Math.floor(R/P)/p)}function Zt(R,p,P,L){const F=R.updateRanges;if(F.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,p.width,p.height,P,L,p.data);else{F.sort((j,mt)=>j.start-mt.start);let at=0;for(let j=1;j<F.length;j++){const mt=F[at],Bt=F[j],Pt=mt.start+mt.count,wt=ie(Bt.start,p.width,4),Gt=ie(mt.start,p.width,4);Bt.start<=Pt+1&&wt===Gt&&ie(Bt.start+Bt.count-1,p.width,4)===wt?mt.count=Math.max(mt.count,Bt.start+Bt.count-mt.start):(++at,F[at]=Bt)}F.length=at+1;const Q=i.getParameter(i.UNPACK_ROW_LENGTH),St=i.getParameter(i.UNPACK_SKIP_PIXELS),dt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,p.width);for(let j=0,mt=F.length;j<mt;j++){const Bt=F[j],Pt=Math.floor(Bt.start/4),wt=Math.ceil(Bt.count/4),Gt=Pt%p.width,U=Math.floor(Pt/p.width),xt=wt,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),e.texSubImage2D(i.TEXTURE_2D,0,Gt,U,xt,bt,P,L,p.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,St),i.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function tt(R,p,P){let L=i.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),p.isData3DTexture&&(L=i.TEXTURE_3D);const B=Yt(R,p),F=p.source;e.bindTexture(L,R.__webglTexture,i.TEXTURE0+P);const at=n.get(F);if(F.version!==at.__version||B===!0){e.activeTexture(i.TEXTURE0+P);const Q=le.getPrimaries(le.workingColorSpace),St=p.colorSpace===oi?null:le.getPrimaries(p.colorSpace),dt=p.colorSpace===oi||Q===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let j=x(p.image,!1,s.maxTextureSize);j=nt(p,j);const mt=r.convert(p.format,p.colorSpace),Bt=r.convert(p.type);let Pt=y(p.internalFormat,mt,Bt,p.colorSpace,p.isVideoTexture);Ut(L,p);let wt;const Gt=p.mipmaps,U=p.isVideoTexture!==!0,xt=at.__version===void 0||B===!0,bt=F.dataReady,kt=M(p,j);if(p.isDepthTexture)Pt=v(p.format===er,p.type),xt&&(U?e.texStorage2D(i.TEXTURE_2D,1,Pt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Pt,j.width,j.height,0,mt,Bt,null));else if(p.isDataTexture)if(Gt.length>0){U&&xt&&e.texStorage2D(i.TEXTURE_2D,kt,Pt,Gt[0].width,Gt[0].height);for(let vt=0,ot=Gt.length;vt<ot;vt++)wt=Gt[vt],U?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,mt,Bt,wt.data):e.texImage2D(i.TEXTURE_2D,vt,Pt,wt.width,wt.height,0,mt,Bt,wt.data);p.generateMipmaps=!1}else U?(xt&&e.texStorage2D(i.TEXTURE_2D,kt,Pt,j.width,j.height),bt&&Zt(p,j,mt,Bt)):e.texImage2D(i.TEXTURE_2D,0,Pt,j.width,j.height,0,mt,Bt,j.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){U&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,Pt,Gt[0].width,Gt[0].height,j.depth);for(let vt=0,ot=Gt.length;vt<ot;vt++)if(wt=Gt[vt],p.format!==_n)if(mt!==null)if(U){if(bt)if(p.layerUpdates.size>0){const It=Wc(wt.width,wt.height,p.format,p.type);for(const qt of p.layerUpdates){const me=wt.data.subarray(qt*It/wt.data.BYTES_PER_ELEMENT,(qt+1)*It/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,qt,wt.width,wt.height,1,mt,me)}p.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,wt.width,wt.height,j.depth,mt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Pt,wt.width,wt.height,j.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,wt.width,wt.height,j.depth,mt,Bt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Pt,wt.width,wt.height,j.depth,0,mt,Bt,wt.data)}else{U&&xt&&e.texStorage2D(i.TEXTURE_2D,kt,Pt,Gt[0].width,Gt[0].height);for(let vt=0,ot=Gt.length;vt<ot;vt++)wt=Gt[vt],p.format!==_n?mt!==null?U?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,mt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,mt,Bt,wt.data):e.texImage2D(i.TEXTURE_2D,vt,Pt,wt.width,wt.height,0,mt,Bt,wt.data)}else if(p.isDataArrayTexture)if(U){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,kt,Pt,j.width,j.height,j.depth),bt)if(p.layerUpdates.size>0){const vt=Wc(j.width,j.height,p.format,p.type);for(const ot of p.layerUpdates){const It=j.data.subarray(ot*vt/j.data.BYTES_PER_ELEMENT,(ot+1)*vt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,j.width,j.height,1,mt,Bt,It)}p.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,mt,Bt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,j.width,j.height,j.depth,0,mt,Bt,j.data);else if(p.isData3DTexture)U?(xt&&e.texStorage3D(i.TEXTURE_3D,kt,Pt,j.width,j.height,j.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,mt,Bt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,j.width,j.height,j.depth,0,mt,Bt,j.data);else if(p.isFramebufferTexture){if(xt)if(U)e.texStorage2D(i.TEXTURE_2D,kt,Pt,j.width,j.height);else{let vt=j.width,ot=j.height;for(let It=0;It<kt;It++)e.texImage2D(i.TEXTURE_2D,It,Pt,vt,ot,0,mt,Bt,null),vt>>=1,ot>>=1}}else if(Gt.length>0){if(U&&xt){const vt=ct(Gt[0]);e.texStorage2D(i.TEXTURE_2D,kt,Pt,vt.width,vt.height)}for(let vt=0,ot=Gt.length;vt<ot;vt++)wt=Gt[vt],U?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,mt,Bt,wt):e.texImage2D(i.TEXTURE_2D,vt,Pt,mt,Bt,wt);p.generateMipmaps=!1}else if(U){if(xt){const vt=ct(j);e.texStorage2D(i.TEXTURE_2D,kt,Pt,vt.width,vt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Bt,j)}else e.texImage2D(i.TEXTURE_2D,0,Pt,mt,Bt,j);m(p)&&f(L),at.__version=F.version,p.onUpdate&&p.onUpdate(p)}R.__version=p.version}function lt(R,p,P){if(p.image.length!==6)return;const L=Yt(R,p),B=p.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+P);const F=n.get(B);if(B.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+P);const at=le.getPrimaries(le.workingColorSpace),Q=p.colorSpace===oi?null:le.getPrimaries(p.colorSpace),St=p.colorSpace===oi||at===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,p.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,p.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const dt=p.isCompressedTexture||p.image[0].isCompressedTexture,j=p.image[0]&&p.image[0].isDataTexture,mt=[];for(let ot=0;ot<6;ot++)!dt&&!j?mt[ot]=x(p.image[ot],!0,s.maxCubemapSize):mt[ot]=j?p.image[ot].image:p.image[ot],mt[ot]=nt(p,mt[ot]);const Bt=mt[0],Pt=r.convert(p.format,p.colorSpace),wt=r.convert(p.type),Gt=y(p.internalFormat,Pt,wt,p.colorSpace),U=p.isVideoTexture!==!0,xt=F.__version===void 0||L===!0,bt=B.dataReady;let kt=M(p,Bt);Ut(i.TEXTURE_CUBE_MAP,p);let vt;if(dt){U&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Gt,Bt.width,Bt.height);for(let ot=0;ot<6;ot++){vt=mt[ot].mipmaps;for(let It=0;It<vt.length;It++){const qt=vt[It];p.format!==_n?Pt!==null?U?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It,0,0,qt.width,qt.height,Pt,qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It,Gt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It,0,0,qt.width,qt.height,Pt,wt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It,Gt,qt.width,qt.height,0,Pt,wt,qt.data)}}}else{if(vt=p.mipmaps,U&&xt){vt.length>0&&kt++;const ot=ct(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,kt,Gt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(j){U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,mt[ot].width,mt[ot].height,Pt,wt,mt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Gt,mt[ot].width,mt[ot].height,0,Pt,wt,mt[ot].data);for(let It=0;It<vt.length;It++){const me=vt[It].image[ot].image;U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It+1,0,0,me.width,me.height,Pt,wt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It+1,Gt,me.width,me.height,0,Pt,wt,me.data)}}else{U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Pt,wt,mt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Gt,Pt,wt,mt[ot]);for(let It=0;It<vt.length;It++){const qt=vt[It];U?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It+1,0,0,Pt,wt,qt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,It+1,Gt,Pt,wt,qt.image[ot])}}}m(p)&&f(i.TEXTURE_CUBE_MAP),F.__version=B.version,p.onUpdate&&p.onUpdate(p)}R.__version=p.version}function _t(R,p,P,L,B,F){const at=r.convert(P.format,P.colorSpace),Q=r.convert(P.type),St=y(P.internalFormat,at,Q,P.colorSpace),dt=n.get(p),j=n.get(P);if(j.__renderTarget=p,!dt.__hasExternalTextures){const mt=Math.max(1,p.width>>F),Bt=Math.max(1,p.height>>F);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?e.texImage3D(B,F,St,mt,Bt,p.depth,0,at,Q,null):e.texImage2D(B,F,St,mt,Bt,0,at,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),G(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,B,j.__webglTexture,0,X(p)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,B,j.__webglTexture,F),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,p,P){if(i.bindRenderbuffer(i.RENDERBUFFER,R),p.depthBuffer){const L=p.depthTexture,B=L&&L.isDepthTexture?L.type:null,F=v(p.stencilBuffer,B),at=p.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=X(p);G(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,F,p.width,p.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,F,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,F,p.width,p.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,R)}else{const L=p.textures;for(let B=0;B<L.length;B++){const F=L[B],at=r.convert(F.format,F.colorSpace),Q=r.convert(F.type),St=y(F.internalFormat,at,Q,F.colorSpace),dt=X(p);P&&G(p)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,St,p.width,p.height):G(p)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,St,p.width,p.height):i.renderbufferStorage(i.RENDERBUFFER,St,p.width,p.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(R,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(p.depthTexture);L.__renderTarget=p,(!L.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),W(p.depthTexture,0);const B=L.__webglTexture,F=X(p);if(p.depthTexture.format===tr)G(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(p.depthTexture.format===er)G(p)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Jt(R){const p=n.get(R),P=R.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==R.depthTexture){const L=R.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),L){const B=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,L.removeEventListener("dispose",B)};L.addEventListener("dispose",B),p.__depthDisposeCallback=B}p.__boundDepthTexture=L}if(R.depthTexture&&!p.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const L=R.texture.mipmaps;L&&L.length>0?Dt(p.__webglFramebuffer[0],R):Dt(p.__webglFramebuffer,R)}else if(P){p.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[L]),p.__webglDepthbuffer[L]===void 0)p.__webglDepthbuffer[L]=i.createRenderbuffer(),Lt(p.__webglDepthbuffer[L],R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=p.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,F)}}else{const L=R.texture.mipmaps;if(L&&L.length>0?e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=i.createRenderbuffer(),Lt(p.__webglDepthbuffer,R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=p.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,F)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,p,P){const L=n.get(R);p!==void 0&&_t(L.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Jt(R)}function k(R){const p=R.texture,P=n.get(R),L=n.get(p);R.addEventListener("dispose",T);const B=R.textures,F=R.isWebGLCubeRenderTarget===!0,at=B.length>1;if(at||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=p.version,o.memory.textures++),F){P.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(p.mipmaps&&p.mipmaps.length>0){P.__webglFramebuffer[Q]=[];for(let St=0;St<p.mipmaps.length;St++)P.__webglFramebuffer[Q][St]=i.createFramebuffer()}else P.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){P.__webglFramebuffer=[];for(let Q=0;Q<p.mipmaps.length;Q++)P.__webglFramebuffer[Q]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(at)for(let Q=0,St=B.length;Q<St;Q++){const dt=n.get(B[Q]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Q=0;Q<B.length;Q++){const St=B[Q];P.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[Q]);const dt=r.convert(St.format,St.colorSpace),j=r.convert(St.type),mt=y(St.internalFormat,dt,j,St.colorSpace,R.isXRRenderTarget===!0),Bt=X(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,P.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(P.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,p);for(let Q=0;Q<6;Q++)if(p.mipmaps&&p.mipmaps.length>0)for(let St=0;St<p.mipmaps.length;St++)_t(P.__webglFramebuffer[Q][St],R,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St);else _t(P.__webglFramebuffer[Q],R,p,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(p)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Q=0,St=B.length;Q<St;Q++){const dt=B[Q],j=n.get(dt);let mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),Ut(mt,dt),_t(P.__webglFramebuffer,R,dt,i.COLOR_ATTACHMENT0+Q,mt,0),m(dt)&&f(mt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Ut(Q,p),p.mipmaps&&p.mipmaps.length>0)for(let St=0;St<p.mipmaps.length;St++)_t(P.__webglFramebuffer[St],R,p,i.COLOR_ATTACHMENT0,Q,St);else _t(P.__webglFramebuffer,R,p,i.COLOR_ATTACHMENT0,Q,0);m(p)&&f(Q),e.unbindTexture()}R.depthBuffer&&Jt(R)}function rt(R){const p=R.textures;for(let P=0,L=p.length;P<L;P++){const B=p[P];if(m(B)){const F=S(R),at=n.get(B).__webglTexture;e.bindTexture(F,at),f(F),e.unbindTexture()}}}const it=[],st=[];function N(R){if(R.samples>0){if(G(R)===!1){const p=R.textures,P=R.width,L=R.height;let B=i.COLOR_BUFFER_BIT;const F=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(R),Q=p.length>1;if(Q)for(let dt=0;dt<p.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const St=R.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let dt=0;dt<p.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);const j=n.get(p[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,P,L,0,0,P,L,B,i.NEAREST),l===!0&&(it.length=0,st.length=0,it.push(i.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(F),st.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,st)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let dt=0;dt<p.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,at.__webglColorRenderbuffer[dt]);const j=n.get(p[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const p=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[p])}}}function X(R){return Math.min(s.maxSamples,R.samples)}function G(R){const p=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function K(R){const p=o.render.frame;u.get(R)!==p&&(u.set(R,p),R.update())}function nt(R,p){const P=R.colorSpace,L=R.format,B=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==xs&&P!==oi&&(le.getTransfer(P)===de?(L!==_n||B!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),p}function ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=et,this.setTextureCube=J,this.rebindTextures=re,this.setupRenderTarget=k,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=G}function rv(i,t){function e(n,s=oi){let r;const o=le.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===wl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fh)return i.BYTE;if(n===Oh)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===_n)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Gh)return i.RED;if(n===Al)return i.RED_INTEGER;if(n===Wh)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===jr||n===Kr||n===Qr||n===to)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ra)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===La||n===Ia||n===Da)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La||n===Ia)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Da)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Na||n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===Ja||n===qa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Na)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ua)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ya||n===$a||n===Za)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ya)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ja||n===Ka||n===Qa||n===tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new au(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:ov,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ft(new He(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cv extends Bi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,g=null,_=null;const x=typeof XRWebGLBinding<"u",m=new lv,f={},S=e.getContextAttributes();let y=null,v=null;const M=[],E=[],T=new ut;let C=null;const b=new ze;b.viewport=new ge;const w=new ze;w.viewport=new ge;const D=[b,w],O=new Cp;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=M[tt];return lt===void 0&&(lt=new jo,M[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=M[tt];return lt===void 0&&(lt=new jo,M[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=M[tt];return lt===void 0&&(lt=new jo,M[tt]=lt),lt.getHandSpace()};function W(tt){const lt=E.indexOf(tt.inputSource);if(lt===-1)return;const _t=M[lt];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,c||o),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function $(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",et);for(let tt=0;tt<M.length;tt++){const lt=E[tt];lt!==null&&(E[tt]=null,M[tt].disconnect(lt))}H=null,Z=null,m.reset();for(const tt in f)delete f[tt];t.setRenderTarget(y),g=null,d=null,h=null,s=null,v=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",$),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Lt=null,Dt=null;S.depth&&(Dt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?er:tr,Lt=S.stencil?Qs:Ii);const Jt={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Jt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new di(d.textureWidth,d.textureHeight,{format:_n,type:Dn,depthTexture:new ou(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new di(g.framebufferWidth,g.framebufferHeight,{format:_n,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(tt){for(let lt=0;lt<tt.removed.length;lt++){const _t=tt.removed[lt],Lt=E.indexOf(_t);Lt>=0&&(E[Lt]=null,M[Lt].disconnect(_t))}for(let lt=0;lt<tt.added.length;lt++){const _t=tt.added[lt];let Lt=E.indexOf(_t);if(Lt===-1){for(let Jt=0;Jt<M.length;Jt++)if(Jt>=E.length){E.push(_t),Lt=Jt;break}else if(E[Jt]===null){E[Jt]=_t,Lt=Jt;break}if(Lt===-1)break}const Dt=M[Lt];Dt&&Dt.connect(_t)}}const J=new I,gt=new I;function pt(tt,lt,_t){J.setFromMatrixPosition(lt.matrixWorld),gt.setFromMatrixPosition(_t.matrixWorld);const Lt=J.distanceTo(gt),Dt=lt.projectionMatrix.elements,Jt=_t.projectionMatrix.elements,re=Dt[14]/(Dt[10]-1),k=Dt[14]/(Dt[10]+1),rt=(Dt[9]+1)/Dt[5],it=(Dt[9]-1)/Dt[5],st=(Dt[8]-1)/Dt[0],N=(Jt[8]+1)/Jt[0],X=re*st,G=re*N,K=Lt/(-st+N),nt=K*-st;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(nt),tt.translateZ(K),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Dt[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ct=re+K,R=k+K,p=X-nt,P=G+(Lt-nt),L=rt*k/R*ct,B=it*k/R*ct;tt.projectionMatrix.makePerspective(p,P,L,B,ct,R),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Et(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let lt=tt.near,_t=tt.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),O.near=w.near=b.near=lt,O.far=w.far=b.far=_t,(H!==O.near||Z!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),H=O.near,Z=O.far),O.layers.mask=tt.layers.mask|6,b.layers.mask=O.layers.mask&3,w.layers.mask=O.layers.mask&5;const Lt=tt.parent,Dt=O.cameras;Et(O,Lt);for(let Jt=0;Jt<Dt.length;Jt++)Et(Dt[Jt],Lt);Dt.length===2?pt(O,b,w):O.projectionMatrix.copy(b.projectionMatrix),Ut(tt,O,Lt)};function Ut(tt,lt,_t){_t===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(_t.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=nr*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(tt){return f[tt]};let Yt=null;function ie(tt,lt){if(u=lt.getViewerPose(c||o),_=lt,u!==null){const _t=u.views;g!==null&&(t.setRenderTargetFramebuffer(v,g.framebuffer),t.setRenderTarget(v));let Lt=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,Lt=!0);for(let k=0;k<_t.length;k++){const rt=_t[k];let it=null;if(g!==null)it=g.getViewport(rt);else{const N=h.getViewSubImage(d,rt);it=N.viewport,k===0&&(t.setRenderTargetTextures(v,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(v))}let st=D[k];st===void 0&&(st=new ze,st.layers.enable(k),st.viewport=new ge,D[k]=st),st.matrix.fromArray(rt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(rt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(it.x,it.y,it.width,it.height),k===0&&(O.matrix.copy(st.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Lt===!0&&O.cameras.push(st)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const k=h.getDepthInformation(_t[0]);k&&k.isValid&&k.texture&&m.init(k,s.renderState)}if(Dt&&Dt.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let k=0;k<_t.length;k++){const rt=_t[k].camera;if(rt){let it=f[rt];it||(it=new au,f[rt]=it);const st=h.getCameraImage(rt);it.sourceTexture=st}}}}for(let _t=0;_t<M.length;_t++){const Lt=E[_t],Dt=M[_t];Lt!==null&&Dt!==void 0&&Dt.update(Lt,lt,c||o)}Yt&&Yt(tt,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}const Zt=new vu;Zt.setAnimationLoop(ie),this.setAnimationLoop=function(tt){Yt=tt},this.dispose=function(){}}}const Mi=new kn,hv=new ve;function uv(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,tu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,S,y,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ye&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ye&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),y=S.envMap,v=S.envMapRotation;y&&(m.envMap.value=y,Mi.copy(v),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),m.envMapRotation.value.setFromMatrix4(hv.makeRotationFromEuler(Mi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=y*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ye&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=s[S.id];v===void 0&&(_(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(S,M);const E=t.render.frame;r[S.id]!==E&&(d(S),r[S.id]=E)}function u(S){const y=h();S.__bindingPointIndex=y;const v=i.createBuffer(),M=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],v=S.uniforms,M=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,T=v.length;E<T;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,w=C.length;b<w;b++){const D=C[b];if(g(D,E,b,M)===!0){const O=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let Z=0;for(let W=0;W<H.length;W++){const $=H[W],et=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+Z,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,Z),Z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,y,v,M){const E=S.value,T=y+"_"+v;if(M[T]===void 0)return typeof E=="number"||typeof E=="boolean"?M[T]=E:M[T]=E.clone(),!0;{const C=M[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return M[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(S){const y=S.uniforms;let v=0;const M=16;for(let T=0,C=y.length;T<C;T++){const b=Array.isArray(y[T])?y[T]:[y[T]];for(let w=0,D=b.length;w<D;w++){const O=b[w],H=Array.isArray(O.value)?O.value:[O.value];for(let Z=0,W=H.length;Z<W;Z++){const $=H[Z],et=x($),J=v%M,gt=J%et.boundary,pt=J+gt;v+=gt,pt!==0&&M-pt<et.storage&&(v+=M-pt),O.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=et.storage}}}const E=v%M;return E>0&&(v+=M-E),S.__size=v,S.__cache={},this}function x(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class fv{constructor(t={}){const{canvas:e=mf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let M=!1;this._outputColorSpace=ye;let E=0,T=0,C=null,b=-1,w=null;const D=new ge,O=new ge;let H=null;const Z=new ne(0);let W=0,$=e.width,et=e.height,J=1,gt=null,pt=null;const Et=new ge(0,0,$,et),Ut=new ge(0,0,$,et);let Yt=!1;const ie=new Nl;let Zt=!1,tt=!1;const lt=new ve,_t=new I,Lt=new ge,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function re(){return C===null?J:1}let k=n;function rt(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${El}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),k===null){const z="webgl2";if(k=rt(z,A),k===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let it,st,N,X,G,K,nt,ct,R,p,P,L,B,F,at,Q,St,dt,j,mt,Bt,Pt,wt,Gt;function U(){it=new Eg(k),it.init(),Pt=new rv(k,it),st=new gg(k,it,t,Pt),N=new iv(k,it),st.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),X=new Tg(k),G=new W_,K=new sv(k,it,N,G,st,Pt,X),nt=new vg(v),ct=new Sg(v),R=new Ip(k),wt=new pg(k,R),p=new bg(k,R,X,wt),P=new Rg(k,p,R,X),j=new Ag(k,st,K),Q=new _g(G),L=new G_(v,nt,ct,it,st,wt,Q),B=new uv(v,G),F=new J_,at=new K_(it),dt=new fg(v,nt,ct,N,P,g,l),St=new ev(v,P,st),Gt=new dv(k,X,st,N),mt=new mg(k,it,X),Bt=new wg(k,it,X),X.programs=L.programs,v.capabilities=st,v.extensions=it,v.properties=G,v.renderLists=F,v.shadowMap=St,v.state=N,v.info=X}U();const xt=new cv(v,k);this.xr=xt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize($,et,!1))},this.getSize=function(A){return A.set($,et)},this.setSize=function(A,z,q=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,et=z,e.width=Math.floor(A*J),e.height=Math.floor(z*J),q===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set($*J,et*J).floor()},this.setDrawingBufferSize=function(A,z,q){$=A,et=z,J=q,e.width=Math.floor(A*q),e.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,z,q,Y){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,z,q,Y),N.viewport(D.copy(Et).multiplyScalar(J).round())},this.getScissor=function(A){return A.copy(Ut)},this.setScissor=function(A,z,q,Y){A.isVector4?Ut.set(A.x,A.y,A.z,A.w):Ut.set(A,z,q,Y),N.scissor(O.copy(Ut).multiplyScalar(J).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(A){N.setScissorTest(Yt=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let Y=0;if(A){let V=!1;if(C!==null){const Mt=C.texture.format;V=Mt===Cl||Mt===Rl||Mt===Al}if(V){const Mt=C.texture.type,Ct=Mt===Dn||Mt===Ii||Mt===Ks||Mt===Qs||Mt===wl||Mt===Tl,Ot=dt.getClearColor(),Nt=dt.getClearAlpha(),Vt=Ot.r,Wt=Ot.g,zt=Ot.b;Ct?(_[0]=Vt,_[1]=Wt,_[2]=zt,_[3]=Nt,k.clearBufferuiv(k.COLOR,0,_)):(x[0]=Vt,x[1]=Wt,x[2]=zt,x[3]=Nt,k.clearBufferiv(k.COLOR,0,x))}else Y|=k.COLOR_BUFFER_BIT}z&&(Y|=k.DEPTH_BUFFER_BIT),q&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),dt.dispose(),F.dispose(),at.dispose(),G.dispose(),nt.dispose(),ct.dispose(),P.dispose(),wt.dispose(),Gt.dispose(),L.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",bn),xt.removeEventListener("sessionend",sc),pi.stop()};function bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=X.autoReset,z=St.enabled,q=St.autoUpdate,Y=St.needsUpdate,V=St.type;U(),X.autoReset=A,St.enabled=z,St.autoUpdate=q,St.needsUpdate=Y,St.type=V}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const z=A.target;z.removeEventListener("dispose",ot),It(z)}function It(A){qt(A),G.remove(A)}function qt(A){const z=G.get(A).programs;z!==void 0&&(z.forEach(function(q){L.releaseProgram(q)}),A.isShaderMaterial&&L.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,Y,V,Mt){z===null&&(z=Dt);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Ot=sd(A,z,q,Y,V);N.setMaterial(Y,Ct);let Nt=q.index,Vt=1;if(Y.wireframe===!0){if(Nt=p.getWireframeAttribute(q),Nt===void 0)return;Vt=2}const Wt=q.drawRange,zt=q.attributes.position;let se=Wt.start*Vt,ue=(Wt.start+Wt.count)*Vt;Mt!==null&&(se=Math.max(se,Mt.start*Vt),ue=Math.min(ue,(Mt.start+Mt.count)*Vt)),Nt!==null?(se=Math.max(se,0),ue=Math.min(ue,Nt.count)):zt!=null&&(se=Math.max(se,0),ue=Math.min(ue,zt.count));const Te=ue-se;if(Te<0||Te===1/0)return;wt.setup(V,Y,Ot,q,Nt);let xe,pe=mt;if(Nt!==null&&(xe=R.get(Nt),pe=Bt,pe.setIndex(xe)),V.isMesh)Y.wireframe===!0?(N.setLineWidth(Y.wireframeLinewidth*re()),pe.setMode(k.LINES)):pe.setMode(k.TRIANGLES);else if(V.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),N.setLineWidth(Ht*re()),V.isLineSegments?pe.setMode(k.LINES):V.isLineLoop?pe.setMode(k.LINE_LOOP):pe.setMode(k.LINE_STRIP)}else V.isPoints?pe.setMode(k.POINTS):V.isSprite&&pe.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ht=V._multiDrawStarts,Ee=V._multiDrawCounts,ae=V._multiDrawCount,$e=Nt?R.get(Nt).bytesPerElement:1,zi=G.get(Y).currentProgram.getUniforms();for(let Ze=0;Ze<ae;Ze++)zi.setValue(k,"_gl_DrawID",Ze),pe.render(Ht[Ze]/$e,Ee[Ze])}else if(V.isInstancedMesh)pe.renderInstances(se,Te,V.count);else if(q.isInstancedBufferGeometry){const Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ee=Math.min(q.instanceCount,Ht);pe.renderInstances(se,Te,Ee)}else pe.render(se,Te)};function me(A,z,q){A.transparent===!0&&A.side===Re&&A.forceSinglePass===!1?(A.side=Ye,A.needsUpdate=!0,_r(A,z,q),A.side=ui,A.needsUpdate=!0,_r(A,z,q),A.side=Re):_r(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),f=at.get(q),f.init(z),y.push(f),q.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const Y=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Mt=V.material;if(Mt)if(Array.isArray(Mt))for(let Ct=0;Ct<Mt.length;Ct++){const Ot=Mt[Ct];me(Ot,q,V),Y.add(Ot)}else me(Mt,q,V),Y.add(Mt)}),f=y.pop(),Y},this.compileAsync=function(A,z,q=null){const Y=this.compile(A,z,q);return new Promise(V=>{function Mt(){if(Y.forEach(function(Ct){G.get(Ct).currentProgram.isReady()&&Y.delete(Ct)}),Y.size===0){V(A);return}setTimeout(Mt,10)}it.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ce=null;function Un(A){ce&&ce(A)}function bn(){pi.stop()}function sc(){pi.start()}const pi=new vu;pi.setAnimationLoop(Un),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(A){ce=A,xt.setAnimationLoop(A),A===null?pi.stop():pi.start()},xt.addEventListener("sessionstart",bn),xt.addEventListener("sessionend",sc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(z),z=xt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,C),f=at.get(A,y.length),f.init(z),y.push(f),lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ie.setFromProjectionMatrix(lt,Rn,z.reversedDepth),tt=this.localClippingEnabled,Zt=Q.init(this.clippingPlanes,tt),m=F.get(A,S.length),m.init(),S.push(m),xt.enabled===!0&&xt.isPresenting===!0){const Mt=v.xr.getDepthSensingMesh();Mt!==null&&Ro(Mt,z,-1/0,v.sortObjects)}Ro(A,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(gt,pt),Jt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Jt&&dt.addToRenderList(m,A),this.info.render.frame++,Zt===!0&&Q.beginShadows();const q=f.state.shadowsArray;St.render(q,A,z),Zt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(f.setupLights(),z.isArrayCamera){const Mt=z.cameras;if(V.length>0)for(let Ct=0,Ot=Mt.length;Ct<Ot;Ct++){const Nt=Mt[Ct];oc(Y,V,A,Nt)}Jt&&dt.render(A);for(let Ct=0,Ot=Mt.length;Ct<Ot;Ct++){const Nt=Mt[Ct];rc(m,A,Nt,Nt.viewport)}}else V.length>0&&oc(Y,V,A,z),Jt&&dt.render(A),rc(m,A,z);C!==null&&T===0&&(K.updateMultisampleRenderTarget(C),K.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,z),wt.resetDefaultState(),b=-1,w=null,y.pop(),y.length>0?(f=y[y.length-1],Zt===!0&&Q.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ro(A,z,q,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ie.intersectsSprite(A)){Y&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const Ct=P.update(A),Ot=A.material;Ot.visible&&m.push(A,Ct,Ot,q,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ie.intersectsObject(A))){const Ct=P.update(A),Ot=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Lt.copy(Ct.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(Ot)){const Nt=Ct.groups;for(let Vt=0,Wt=Nt.length;Vt<Wt;Vt++){const zt=Nt[Vt],se=Ot[zt.materialIndex];se&&se.visible&&m.push(A,Ct,se,q,Lt.z,zt)}}else Ot.visible&&m.push(A,Ct,Ot,q,Lt.z,null)}}const Mt=A.children;for(let Ct=0,Ot=Mt.length;Ct<Ot;Ct++)Ro(Mt[Ct],z,q,Y)}function rc(A,z,q,Y){const V=A.opaque,Mt=A.transmissive,Ct=A.transparent;f.setupLightsView(q),Zt===!0&&Q.setGlobalState(v.clippingPlanes,q),Y&&N.viewport(D.copy(Y)),V.length>0&&gr(V,z,q),Mt.length>0&&gr(Mt,z,q),Ct.length>0&&gr(Ct,z,q),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function oc(A,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new di(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?Ts:Dn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const Mt=f.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||D;Mt.setSize(Ct.z*v.transmissionResolutionScale,Ct.w*v.transmissionResolutionScale);const Ot=v.getRenderTarget(),Nt=v.getActiveCubeFace(),Vt=v.getActiveMipmapLevel();v.setRenderTarget(Mt),v.getClearColor(Z),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Jt&&dt.render(q);const Wt=v.toneMapping;v.toneMapping=hi;const zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),Zt===!0&&Q.setGlobalState(v.clippingPlanes,Y),gr(A,q,Y),K.updateMultisampleRenderTarget(Mt),K.updateRenderTargetMipmap(Mt),it.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ue=0,Te=z.length;ue<Te;ue++){const xe=z[ue],pe=xe.object,Ht=xe.geometry,Ee=xe.material,ae=xe.group;if(Ee.side===Re&&pe.layers.test(Y.layers)){const $e=Ee.side;Ee.side=Ye,Ee.needsUpdate=!0,ac(pe,q,Y,Ht,Ee,ae),Ee.side=$e,Ee.needsUpdate=!0,se=!0}}se===!0&&(K.updateMultisampleRenderTarget(Mt),K.updateRenderTargetMipmap(Mt))}v.setRenderTarget(Ot,Nt,Vt),v.setClearColor(Z,W),zt!==void 0&&(Y.viewport=zt),v.toneMapping=Wt}function gr(A,z,q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let V=0,Mt=A.length;V<Mt;V++){const Ct=A[V],Ot=Ct.object,Nt=Ct.geometry,Vt=Ct.group;let Wt=Ct.material;Wt.allowOverride===!0&&Y!==null&&(Wt=Y),Ot.layers.test(q.layers)&&ac(Ot,z,q,Nt,Wt,Vt)}}function ac(A,z,q,Y,V,Mt){A.onBeforeRender(v,z,q,Y,V,Mt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,z,q,Y,A,Mt),V.transparent===!0&&V.side===Re&&V.forceSinglePass===!1?(V.side=Ye,V.needsUpdate=!0,v.renderBufferDirect(q,z,Y,V,A,Mt),V.side=ui,V.needsUpdate=!0,v.renderBufferDirect(q,z,Y,V,A,Mt),V.side=Re):v.renderBufferDirect(q,z,Y,V,A,Mt),A.onAfterRender(v,z,q,Y,V,Mt)}function _r(A,z,q){z.isScene!==!0&&(z=Dt);const Y=G.get(A),V=f.state.lights,Mt=f.state.shadowsArray,Ct=V.state.version,Ot=L.getParameters(A,V.state,Mt,z,q),Nt=L.getProgramCacheKey(Ot);let Vt=Y.programs;Y.environment=A.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(A.isMeshStandardMaterial?ct:nt).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",ot),Vt=new Map,Y.programs=Vt);let Wt=Vt.get(Nt);if(Wt!==void 0){if(Y.currentProgram===Wt&&Y.lightsStateVersion===Ct)return cc(A,Ot),Wt}else Ot.uniforms=L.getUniforms(A),A.onBeforeCompile(Ot,v),Wt=L.acquireProgram(Ot,Nt),Vt.set(Nt,Wt),Y.uniforms=Ot.uniforms;const zt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Q.uniform),cc(A,Ot),Y.needsLights=od(A),Y.lightsStateVersion=Ct,Y.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Wt,Y.uniformsList=null,Wt}function lc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=eo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function cc(A,z){const q=G.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function sd(A,z,q,Y,V){z.isScene!==!0&&(z=Dt),K.resetTextureUnits();const Mt=z.fog,Ct=Y.isMeshStandardMaterial?z.environment:null,Ot=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xs,Nt=(Y.isMeshStandardMaterial?ct:nt).get(Y.envMap||Ct),Vt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!q.morphAttributes.position,se=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color;let Te=hi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Te=v.toneMapping);const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,pe=xe!==void 0?xe.length:0,Ht=G.get(Y),Ee=f.state.lights;if(Zt===!0&&(tt===!0||A!==w)){const Ge=A===w&&Y.id===b;Q.setState(Y,A,Ge)}let ae=!1;Y.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ee.state.version||Ht.outputColorSpace!==Ot||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==Nt||Y.fog===!0&&Ht.fog!==Mt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Q.numPlanes||Ht.numIntersection!==Q.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Wt||Ht.morphTargets!==zt||Ht.morphNormals!==se||Ht.morphColors!==ue||Ht.toneMapping!==Te||Ht.morphTargetsCount!==pe)&&(ae=!0):(ae=!0,Ht.__version=Y.version);let $e=Ht.currentProgram;ae===!0&&($e=_r(Y,z,V));let zi=!1,Ze=!1,Ls=!1;const be=$e.getUniforms(),nn=Ht.uniforms;if(N.useProgram($e.program)&&(zi=!0,Ze=!0,Ls=!0),Y.id!==b&&(b=Y.id,Ze=!0),zi||w!==A){N.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),be.setValue(k,"projectionMatrix",A.projectionMatrix),be.setValue(k,"viewMatrix",A.matrixWorldInverse);const Je=be.map.cameraPosition;Je!==void 0&&Je.setValue(k,_t.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&be.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&be.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Ze=!0,Ls=!0)}if(V.isSkinnedMesh){be.setOptional(k,V,"bindMatrix"),be.setOptional(k,V,"bindMatrixInverse");const Ge=V.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),be.setValue(k,"boneTexture",Ge.boneTexture,K))}V.isBatchedMesh&&(be.setOptional(k,V,"batchingTexture"),be.setValue(k,"batchingTexture",V._matricesTexture,K),be.setOptional(k,V,"batchingIdTexture"),be.setValue(k,"batchingIdTexture",V._indirectTexture,K),be.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&be.setValue(k,"batchingColorTexture",V._colorsTexture,K));const sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&j.update(V,q,$e),(Ze||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,be.setValue(k,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(nn.envMap.value=Nt,nn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),Ze&&(be.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&rd(nn,Ls),Mt&&Y.fog===!0&&B.refreshFogUniforms(nn,Mt),B.refreshMaterialUniforms(nn,Y,J,et,f.state.transmissionRenderTarget[A.id]),eo.upload(k,lc(Ht),nn,K)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(eo.upload(k,lc(Ht),nn,K),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&be.setValue(k,"center",V.center),be.setValue(k,"modelViewMatrix",V.modelViewMatrix),be.setValue(k,"normalMatrix",V.normalMatrix),be.setValue(k,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ge=Y.uniformsGroups;for(let Je=0,Co=Ge.length;Je<Co;Je++){const mi=Ge[Je];Gt.update(mi,$e),Gt.bind(mi,$e)}}return $e}function rd(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function od(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,q){const Y=G.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),G.get(A.texture).__webglTexture=z,G.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=G.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const ad=k.createFramebuffer();this.setRenderTarget=function(A,z=0,q=0){C=A,E=z,T=q;let Y=!0,V=null,Mt=!1,Ct=!1;if(A){const Nt=G.get(A);if(Nt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1;else if(Nt.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(Nt.__hasExternalTextures)K.rebindTextures(A,G.get(A.texture).__webglTexture,G.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const zt=A.depthTexture;if(Nt.__boundDepthTexture!==zt){if(zt!==null&&G.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ct=!0);const Wt=G.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?V=Wt[z][q]:V=Wt[z],Mt=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?V=G.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[q]:V=Wt,D.copy(A.viewport),O.copy(A.scissor),H=A.scissorTest}else D.copy(Et).multiplyScalar(J).floor(),O.copy(Ut).multiplyScalar(J).floor(),H=Yt;if(q!==0&&(V=ad),N.bindFramebuffer(k.FRAMEBUFFER,V)&&Y&&N.drawBuffers(A,V),N.viewport(D),N.scissor(O),N.setScissorTest(H),Mt){const Nt=G.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Nt.__webglTexture,q)}else if(Ct){const Nt=z;for(let Vt=0;Vt<A.textures.length;Vt++){const Wt=G.get(A.textures[Vt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,q,Nt)}}else if(A!==null&&q!==0){const Nt=G.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nt.__webglTexture,q)}b=-1},this.readRenderTargetPixels=function(A,z,q,Y,V,Mt,Ct,Ot=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt){N.bindFramebuffer(k.FRAMEBUFFER,Nt);try{const Vt=A.textures[Ot],Wt=Vt.format,zt=Vt.type;if(!st.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&q>=0&&q<=A.height-V&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),k.readPixels(z,q,Y,V,Pt.convert(Wt),Pt.convert(zt),Mt))}finally{const Vt=C!==null?G.get(C).__webglFramebuffer:null;N.bindFramebuffer(k.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,Y,V,Mt,Ct,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Nt=Nt[Ct]),Nt)if(z>=0&&z<=A.width-Y&&q>=0&&q<=A.height-V){N.bindFramebuffer(k.FRAMEBUFFER,Nt);const Vt=A.textures[Ot],Wt=Vt.format,zt=Vt.type;if(!st.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,se),k.bufferData(k.PIXEL_PACK_BUFFER,Mt.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ot),k.readPixels(z,q,Y,V,Pt.convert(Wt),Pt.convert(zt),0);const ue=C!==null?G.get(C).__webglFramebuffer:null;N.bindFramebuffer(k.FRAMEBUFFER,ue);const Te=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await gf(k,Te,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,se),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Mt),k.deleteBuffer(se),k.deleteSync(Te),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const Y=Math.pow(2,-q),V=Math.floor(A.image.width*Y),Mt=Math.floor(A.image.height*Y),Ct=z!==null?z.x:0,Ot=z!==null?z.y:0;K.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Ct,Ot,V,Mt),N.unbindTexture()};const ld=k.createFramebuffer(),cd=k.createFramebuffer();this.copyTextureToTexture=function(A,z,q=null,Y=null,V=0,Mt=null){Mt===null&&(V!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=V,V=0):Mt=0);let Ct,Ot,Nt,Vt,Wt,zt,se,ue,Te;const xe=A.isCompressedTexture?A.mipmaps[Mt]:A.image;if(q!==null)Ct=q.max.x-q.min.x,Ot=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Vt=q.min.x,Wt=q.min.y,zt=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-V);Ct=Math.floor(xe.width*sn),Ot=Math.floor(xe.height*sn),A.isDataArrayTexture?Nt=xe.depth:A.isData3DTexture?Nt=Math.floor(xe.depth*sn):Nt=1,Vt=0,Wt=0,zt=0}Y!==null?(se=Y.x,ue=Y.y,Te=Y.z):(se=0,ue=0,Te=0);const pe=Pt.convert(z.format),Ht=Pt.convert(z.type);let Ee;z.isData3DTexture?(K.setTexture3D(z,0),Ee=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),Ee=k.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),Ee=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const ae=k.getParameter(k.UNPACK_ROW_LENGTH),$e=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zi=k.getParameter(k.UNPACK_SKIP_PIXELS),Ze=k.getParameter(k.UNPACK_SKIP_ROWS),Ls=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,xe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Vt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,zt);const be=A.isDataArrayTexture||A.isData3DTexture,nn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const sn=G.get(A),Ge=G.get(z),Je=G.get(sn.__renderTarget),Co=G.get(Ge.__renderTarget);N.bindFramebuffer(k.READ_FRAMEBUFFER,Je.__webglFramebuffer),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let mi=0;mi<Nt;mi++)be&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(A).__webglTexture,V,zt+mi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(z).__webglTexture,Mt,Te+mi)),k.blitFramebuffer(Vt,Wt,Ct,Ot,se,ue,Ct,Ot,k.DEPTH_BUFFER_BIT,k.NEAREST);N.bindFramebuffer(k.READ_FRAMEBUFFER,null),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||G.has(A)){const sn=G.get(A),Ge=G.get(z);N.bindFramebuffer(k.READ_FRAMEBUFFER,ld),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,cd);for(let Je=0;Je<Nt;Je++)be?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,V,zt+Je):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,V),nn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ge.__webglTexture,Mt,Te+Je):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ge.__webglTexture,Mt),V!==0?k.blitFramebuffer(Vt,Wt,Ct,Ot,se,ue,Ct,Ot,k.COLOR_BUFFER_BIT,k.NEAREST):nn?k.copyTexSubImage3D(Ee,Mt,se,ue,Te+Je,Vt,Wt,Ct,Ot):k.copyTexSubImage2D(Ee,Mt,se,ue,Vt,Wt,Ct,Ot);N.bindFramebuffer(k.READ_FRAMEBUFFER,null),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ee,Mt,se,ue,Te,Ct,Ot,Nt,pe,Ht,xe.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ee,Mt,se,ue,Te,Ct,Ot,Nt,pe,xe.data):k.texSubImage3D(Ee,Mt,se,ue,Te,Ct,Ot,Nt,pe,Ht,xe):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Mt,se,ue,Ct,Ot,pe,Ht,xe.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Mt,se,ue,xe.width,xe.height,pe,xe.data):k.texSubImage2D(k.TEXTURE_2D,Mt,se,ue,Ct,Ot,pe,Ht,xe);k.pixelStorei(k.UNPACK_ROW_LENGTH,ae),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ze),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ls),Mt===0&&z.generateMipmaps&&k.generateMipmap(Ee),N.unbindTexture()},this.initRenderTarget=function(A){G.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,N.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class pv{constructor(){yt(this,"ctx",null);yt(this,"masterGain",null);yt(this,"engineOscA",null);yt(this,"engineOscB",null);yt(this,"engineFilter",null);yt(this,"engineGain",null);yt(this,"volume",.55);yt(this,"muted",!1);yt(this,"lastBlinkerOn",!1);yt(this,"lastRailBellTime",-999)}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.14,this.engineOscA=this.ctx.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=52,this.engineOscB=this.ctx.createOscillator(),this.engineOscB.type="triangle",this.engineOscB.frequency.value=104,this.engineOscA.connect(this.engineFilter),this.engineOscB.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOscA.start(),this.engineOscB.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t,e){this.volume=t,this.muted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(e?0:t,this.ctx.currentTime,.04)}update(t,e,n){if(!this.ctx||this.ctx.state!=="running")return;const s=this.ctx.currentTime;if(this.engineOscA&&this.engineOscB&&this.engineFilter&&this.engineGain)if(t.stalled||t.rpm<=0)this.engineGain.gain.setTargetAtTime(0,s,.05);else{const r=Math.max(0,Math.min(1,(t.rpm-750)/3600)),o=38+r*96;this.engineOscA.frequency.setTargetAtTime(o,s,.05),this.engineOscB.frequency.setTargetAtTime(o*2,s,.05),this.engineFilter.frequency.setTargetAtTime(190+r*560,s,.06),this.engineGain.gain.setTargetAtTime(.08+r*.11,s,.06)}if(t.blinker!=="off"&&t.blinkerOn!==this.lastBlinkerOn&&this.playClick(t.blinkerOn?920:680,.025,.16),this.lastBlinkerOn=t.blinkerOn,e){const r=Math.hypot(t.x-38,t.z);if(r<58&&n-this.lastRailBellTime>=.45){this.lastRailBellTime=n;const o=Math.max(.03,Math.min(.28,8/Math.max(6,r)));this.playFumikiriBell(o)}}}playClick(t=800,e=.03,n=.15){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const s=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(t,s),o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(o),o.connect(this.masterGain),r.start(s),r.stop(s+e)}playFumikiriBell(t){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime;for(const n of[700,758]){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e),r.gain.setValueAtTime(t*.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.36),s.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+.37)}}playViolationChime(t){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=t?"sawtooth":"triangle",n.frequency.setValueAtTime(t?220:440,e),n.frequency.setValueAtTime(t?165:330,e+.12),s.gain.setValueAtTime(.22,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.35)}playThud(){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.28,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.16)}}function ps(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function So(i){let t=(i+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI}function Vs(i,t,e,n,s){const r=Math.cos(e),o=Math.sin(e);return{x:i+n*r+s*o,z:t-n*o+s*r}}function Ys(i,t,e,n){return Math.hypot(i-e,t-n)}const ai=90,Ci=60,ri=7,mh=ri/2,an=-24,Ti=2.75,Bs=2,$s=18,ol=34,ha=42,al=58;function Gn(i,t){if(t<an-Ti-.6||t>an+Ti+.6||i<=$s||i>=al)return{y:0,slopeX:0,slopeZ:0};if(i<ol){const o=ol-$s,a=(i-$s)/o,l=Bs*.5*(1-Math.cos(Math.PI*a)),c=Bs*.5*Math.PI/o*Math.sin(Math.PI*a);return{y:l,slopeX:c,slopeZ:0}}if(i<=ha)return{y:Bs,slopeX:0,slopeZ:0};const e=al-ha,n=(i-ha)/e,s=Bs*.5*(1+Math.cos(Math.PI*n)),r=-(Bs*.5*Math.PI/e)*Math.sin(Math.PI*n);return{y:s,slopeX:r,slopeZ:0}}function mv(){const e=105*Math.PI/180,n=[],s=[],r=[],o=(m,f,S,y)=>{const v=y,M=-S;n.push({x:m,z:f}),s.push({x:m+v*1.8,z:f+M*1.8}),r.push({x:m-v*1.8,z:f-M*1.8})};o(-46,-3.5,0,-1),o(-46,-8,0,-1);const a=-38.5,l=-12,c=28;for(let m=0;m<=c;m++){const f=Math.PI+e*m/c,S=a+7.5*Math.cos(f),y=l+7.5*Math.sin(f),v=-Math.sin(f),M=Math.cos(f);o(S,y,v,M)}const u=Math.PI+e,h=a+2*7.5*Math.cos(u),d=l+2*7.5*Math.sin(u);for(let m=1;m<=c;m++){const f=e*(1-m/c),S=h+7.5*Math.cos(f),y=d+7.5*Math.sin(f),v=Math.sin(f),M=-Math.cos(f);o(S,y,v,M)}const g=h+7.5;o(g,-34,0,-1),o(g,-42.5,0,-1);const _=[6,15,24,34,43,52],x=[];return _.forEach((m,f)=>{const S=s[m],y=r[m];S&&f%2===0&&x.push({id:`scurve-pole-l-${f}`,x:S.x,z:S.z,radius:.08,height:1.5,zone:"sCurve"}),y&&f%2===1&&x.push({id:`scurve-pole-r-${f}`,x:y.x,z:y.z,radius:.08,height:1.5,zone:"sCurve"})}),{centerline:n,leftCurb:s,rightCurb:r,poles:x}}const co=mv(),gv=co.centerline,_v=2,Eu=[{id:"scurve-left",points:co.leftCurb,height:.14,label:"S-Curve West Curb"},{id:"scurve-right",points:co.rightCurb,height:.14,label:"S-Curve East Curb"},{id:"crank-west-south",height:.14,label:"Crank West-South Curb",points:[{x:-50,z:3.5},{x:-50,z:20},{x:-36,z:20},{x:-36,z:42.5}]},{id:"crank-east-north",height:.14,label:"Crank East-North Curb",points:[{x:-46,z:3.5},{x:-46,z:16},{x:-32,z:16},{x:-32,z:42.5}]},{id:"bay-parking-curb",height:.14,label:"Direction Change Bay Curb",points:[{x:24.15,z:27.5},{x:24.15,z:33.7},{x:27.85,z:33.7},{x:27.85,z:27.5}]},{id:"parallel-parking-curb",height:.14,label:"Parallel Parking Curb",points:[{x:45,z:27.5},{x:45,z:30.2},{x:52.2,z:30.2},{x:52.2,z:27.5}]},{id:"hill-north-curb",height:.16,label:"Hill North Edge",points:[{x:18,z:-26.75},{x:58,z:-26.75}]},{id:"hill-south-curb",height:.16,label:"Hill South Edge",points:[{x:18,z:-21.25},{x:58,z:-21.25}]},{id:"outer-north",height:.14,points:[{x:-62,z:-49.5},{x:62,z:-49.5}]},{id:"outer-south",height:.14,points:[{x:-62,z:49.5},{x:62,z:49.5}]},{id:"outer-west",height:.14,points:[{x:-79.5,z:-32},{x:-79.5,z:32}]},{id:"outer-east",height:.14,points:[{x:79.5,z:-32},{x:79.5,z:32}]}],bu=[...co.poles,{id:"crank-pole-in-1",x:-45.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-1",x:-50.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-in-2",x:-36.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-2",x:-31.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"bay-pole-fl",x:24.05,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-fr",x:27.95,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rl",x:24.05,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rr",x:27.95,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"par-pole-1",x:44.9,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-2",x:52.3,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-3",x:44.9,z:30.3,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-4",x:52.3,z:30.3,radius:.08,height:1.5,zone:"parallelParking"}],ho=[{id:"north-parked-van",x:-10,z:-48.1,halfW:1.9,halfL:.85,height:1.65,kind:"parkedCar"},{id:"clubhouse-building",x:0,z:56.2,halfW:16,halfL:4.5,height:7.2,kind:"building"}],wu=[{id:"signal-northbound",kind:"trafficLight",axis:"NS",x:-1.75,z:8.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"signal-southbound",kind:"trafficLight",axis:"NS",x:1.75,z:-8.5,dirX:0,dirZ:1,halfWidth:1.75},{id:"signal-eastbound",kind:"trafficLight",axis:"EW",x:-8.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75},{id:"signal-westbound",kind:"trafficLight",axis:"EW",x:8.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"railroad-eastbound",kind:"railroad",x:31.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"railroad-westbound",kind:"railroad",x:44.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"stop-west-t",kind:"stopSign",x:-67.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"stop-north-t",kind:"stopSign",x:-1.75,z:-38.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"stop-scurve-exit",kind:"stopSign",x:-27.12,z:-41.5,dirX:0,dirZ:-1,halfWidth:1.8},{id:"stop-crank-exit",kind:"stopSign",x:-34,z:41.5,dirX:0,dirZ:1,halfWidth:2}],ms={startBay:{id:"startBay",x:12,z:48.1,heading:Math.PI/2},sCurve:{id:"sCurve",x:-46,z:.5,heading:0},crank:{id:"crank",x:-48,z:-.5,heading:Math.PI},hillStart:{id:"hillStart",x:10,z:-24,heading:-Math.PI/2},railroad:{id:"railroad",x:20,z:-1.75,heading:-Math.PI/2},stopSign:{id:"stopSign",x:-56,z:1.75,heading:Math.PI/2},trafficLight:{id:"trafficLight",x:-1.75,z:22,heading:0},bayParking:{id:"bayParking",x:20,z:22.25,heading:-Math.PI/2},parallelParking:{id:"parallelParking",x:40,z:25.75,heading:-Math.PI/2},speedStraight:{id:"speedStraight",x:-56,z:-47.75,heading:-Math.PI/2}},vv=["startBay","sCurve","crank","hillStart","railroad","stopSign","trafficLight","bayParking","parallelParking","speedStraight"],gh=.09,xv=.08,yv=.45;function Mv(i,t){const e=t.trackWidth/2,n=-t.wheelbase/2,s=t.wheelbase/2;return{FL:Vs(i.x,i.z,i.heading,-e,n),FR:Vs(i.x,i.z,i.heading,e,n),RL:Vs(i.x,i.z,i.heading,-e,s),RR:Vs(i.x,i.z,i.heading,e,s)}}function Sv(i,t,e,n,s,r){const o=s-e,a=r-n,l=o*o+a*a;let c=0;l>1e-9&&(c=((i-e)*o+(t-n)*a)/l,c<0?c=0:c>1&&(c=1));const u=e+o*c,h=n+a*c;return{cx:u,cz:h,dist:Math.hypot(i-u,t-h)}}function _h(i,t,e=Eu,n=bu,s=ho){const r=Mv(i,t),o=t.kind==="motorcycle"?.07:.11,a=["FL","FR","RL","RR"],l={};let c=!1,u=!1,h=0,d=0;for(const E of a){const T=r[E];let C=1/0,b=T.x,w=T.z;for(const J of e){const gt=J.points;for(let pt=0;pt<gt.length-1;pt++){const Et=Sv(T.x,T.z,gt[pt].x,gt[pt].z,gt[pt+1].x,gt[pt+1].z);Et.dist<C&&(C=Et.dist,b=Et.cx,w=Et.cz)}}const D=Math.max(0,C-gh-o),O=gh+o*.8,H=C<O,Z=!H&&D<xv,W=Math.max(0,Math.min(1,1-D/yv));let $=0,et=0;if(H&&C>1e-5){const J=O-C,gt=(T.x-b)/C,pt=(T.z-w)/C;$=gt*J,et=pt*J,h+=$*.5,d+=et*.5}Z&&(c=!0),H&&(u=!0),l[E]={corner:E,x:T.x,z:T.z,minCurbDist:D,proximity:W,curbTouch:Z,curbMount:H,pushX:$,pushZ:et}}const g=Math.cos(-i.heading),_=Math.sin(-i.heading),x=t.width/2,m=t.length/2,f=(E,T)=>{const C=E-i.x,b=T-i.z;return{x:C*g+b*_,z:-C*_+b*g}};let S=null;for(const E of n){const T=f(E.x,E.z),C=Math.max(-x,Math.min(x,T.x)),b=Math.max(-m,Math.min(m,T.z));if(Math.hypot(T.x-C,T.z-b)<E.radius){S=E;break}}let y=null;const v=[[0,0],[-x,-m],[x,-m],[-x,m],[x,m],[0,-m],[0,m]];for(const E of s){for(const[T,C]of v){const b=Vs(i.x,i.z,i.heading,T,C);if(Math.abs(b.x-E.x)<E.halfW&&Math.abs(b.z-E.z)<E.halfL){y=E;const w=i.x-E.x,D=i.z-E.z,O=E.halfW+x-Math.abs(w),H=E.halfL+m-Math.abs(D);O<H?h+=Math.sign(w||1)*Math.min(.4,O*.5):d+=Math.sign(D||1)*Math.min(.4,H*.5);break}}if(y)break}const M=1.6;return i.x<-ai+M&&(h+=-ai+M-i.x),i.x>ai-M&&(h+=ai-M-i.x),i.z<-Ci+M&&(d+=-Ci+M-i.z),i.z>Ci-M&&(d+=Ci-M-i.z),{wheels:l,anyCurbTouch:c,anyCurbMount:u,poleHit:S,obstacleHit:y,pushX:h,pushZ:d}}const Ev={CURB_TOUCH:{ruleRefJa:"技能試験実施基準「接輪（小）」：縁石へのタイヤ側面接触（減点10点）",ruleRefEn:'NPA Practical Exam Standard "Curb Contact (接輪)": Tire sidewall brushed against the concrete curb (-10 pts).',howToFixJa:"S字やクランクで接触しそうな時は無理に進まず、停止してバックでやり直す「切り返し（1回目は減点なし）」を使いましょう。",howToFixEn:"If your turn feels too tight in the S-Curve or Crank, STOP before touching the curb and reverse to readjust (Kirikaeshi — 1st reversal is 0 pt deduction!).",quiz:{chapterRefJa:"教本 第7章・実技編「狭路（S字・クランク）の通行と内輪差・切り返し」",chapterRefEn:'Study Guide Ch. 7 & Practical Manual: "Narrow Courses (S-Curve & Crank), Inner-Wheel Difference & Kirikaeshi"',studyPointJa:["車が曲がる時、後輪は前輪よりも内側を通る「内輪差（ないりんさ）」が生じる。","縁石に当たりそうな時は、接触する前に停止してバックでやり直す「切り返し（1回目は減点0点）」を行う。"],studyPointEn:["When turning, rear wheels track along a tighter inner radius than front wheels (Inner-Wheel Difference / 内輪差).","If you are about to brush a curb, STOP before contact and reverse to fix your angle (Kirikaeshi — 1st reversal is 0 pt deduction)."],questionJa:"【理解確認クイズ】S字やクランクで縁石に接触しそうになった時の正しい対応はどれですか？",questionEn:"Comprehension Check: What is the proper action if you are about to touch a curb in the S-Curve or Crank?",optionsJa:["A. 接触する前に一時停止し、後方確認をしてバックで「切り返し（1回目は減点なし）」を行う","B. そのままアクセルを踏んで縁石をこすりながら一気に通り抜ける"],optionsEn:["A. Stop BEFORE touching the curb, check behind, and reverse to readjust (1st Kirikaeshi = 0 pt deduction)","B. Keep pressing the throttle and scrape past the curb without stopping"],correctIndex:0}},CURB_MOUNT:{ruleRefJa:"技能試験実施基準「脱輪」：車輪が縁石に乗り上げ、またはコース外へ逸脱（減点20点／戻らず進行・2回目は検定中止）",ruleRefEn:'NPA Practical Exam Standard "Wheel Off-Course / Curb Mount (脱輪)": Wheel climbed over the curb (-20 pts / instant fail if not immediately reversed or on 2nd mount).',howToFixJa:"脱輪した瞬間に必ず完全停止し、縁石に乗り上げる前の位置までバックして体制を立て直してください。内輪差（後輪が前輪より内側を通る特性）を意識し、外側に寄せてから曲がり始めましょう。",howToFixEn:"Stop immediately upon mounting a curb and reverse back onto the pavement. Account for rear-wheel inner tracking (内輪差) by swinging slightly wider before turning.",quiz:{chapterRefJa:"技能試験実施基準「脱輪時の措置（停止・後退による復帰義務）」",chapterRefEn:'NPA Practical Exam Standard: "Mandatory Stop & Reverse Recovery Upon Curb Mount (脱輪)"',studyPointJa:["タイヤが縁石に乗り上げた（脱輪した）まま前進し続けると、その場で一発「検定中止（不合格）」となる。","脱輪した瞬間に直ちに停止し、後方確認をして乗り上げる前の位置までバックで戻れば試験を続行できる。"],studyPointEn:["Continuing forward after a wheel mounts the curb results in immediate exam termination (検定中止).","If you stop immediately upon mounting the curb, check behind, and reverse back onto the road, you can continue the test."],questionJa:"【理解確認クイズ】クランクやS字でタイヤが縁石に乗り上げた（脱輪した）場合、検定中止を防ぐために直ちに行うべき操作は？",questionEn:"Comprehension Check: If a tire mounts the curb (脱輪), what must you do IMMEDIATELY to avoid automatic disqualification?",optionsJa:["A. 直ちに停止し、周囲と後方を目視確認してから乗り上げる前の位置までバックで戻る","B. バックすると減点されるので、そのまま前進してコースへ戻る"],optionsEn:["A. Stop immediately, check mirrors & blind spots, and reverse back to the point before the wheel mounted the curb","B. Keep driving forward over the curb so you do not lose time"],correctIndex:0}},POLE_COLLISION:{ruleRefJa:"技能試験実施基準「接触・危険行為（検定中止）」：ポール・パイロン・駐車車両等への接触（一発不合格・補助ブレーキ介入）",ruleRefEn:'NPA Practical Exam Standard "Obstacle Collision (接触・検定中止)": Struck a marker pole, cone, or parked vehicle (Instant Disqualification / Examiner Auxiliary Brake).',howToFixJa:"方向変換・縦列駐車・クランクではポールとの距離をサイドミラーで確認し、当たりそうな場合は必ず停止して「切り返し」を行ってください。",howToFixEn:"Check both side mirrors in Bay/Parallel Parking and Crank corners. Always stop and perform a corrective reversal (切り返し) before touching any pole.",quiz:{chapterRefJa:"技能試験実施基準「障害物接触（検定中止）と方向変換・縦列駐車の切り返し規則」",chapterRefEn:'NPA Practical Exam Standard: "Obstacle Contact (Instant Fail) & Parking Reversal Rules"',studyPointJa:["コース上の赤白ポール、パイロン、駐車車両に車体やバンパーが軽くでも接触すると一発「検定中止」となる。","方向変換・縦列駐車では1回目の切り返しは減点なし（2〜3回目は各5点減点）なので、当たる前に必ず止まって切り返す。"],studyPointEn:["Even slight bumper or mirror contact with a red/white pole, cone, or parked vehicle causes immediate exam failure.","In Bay or Parallel Parking, your 1st corrective reversal (切り返し) costs 0 points—always stop and readjust before hitting a pole."],questionJa:"【理解確認クイズ】方向変換やクランクでポールにぶつかりそうになった時のルールとして正しいものは？",questionEn:"Comprehension Check: Which rule applies when you are close to hitting a marker pole during parking or crank turns?",optionsJa:["A. ポールに接触すると一発で検定中止になるため、接触する前に停止して切り返し（1回目は減点0）で修正する","B. ゴム製のポールなら軽く接触しても減点されない"],optionsEn:["A. Contacting a pole is an instant fail; stop BEFORE contact and use a corrective reversal (1st reversal = 0 pts)","B. Lightly touching a flexible marker pole does not deduct points"],correctIndex:0}},STOP_SIGN_VIOLATION:{ruleRefJa:"道路交通法第43条「指定場所一時不停止（検定中止）」：『止まれ』標識の停止線手前で車輪が完全停止（0 km/h）していない（一発不合格）",ruleRefEn:'Road Traffic Act Art. 43 "Stop Sign Violation (指定場所一時不停止・検定中止)": Failed to bring wheels to a complete 0.0 km/h stop before the white stop line (Instant Fail).',howToFixJa:"停止線の直前でスピードが0.0 km/hになるまで約2秒間しっかり停止し、その後に左・右（Z/Xキー）を大きく目視確認してから発進してください（徐行・ローリングストップは一発中止です）。",howToFixEn:"Come to a dead 0.0 km/h stop before the stop line for 2 full seconds (rolling stops are an automatic fail in Japan!), then look Left (Z) and Right (X) before proceeding.",quiz:{chapterRefJa:"外免切替教本 第2章・道路交通法第43条「指定場所における一時停止（止まれ）」",chapterRefEn:'Gaimen Kirikae Study Guide Ch. 2 & Road Traffic Act Art. 43: "Mandatory Complete Stop at 止まれ Signs"',studyPointJa:["赤い逆三角形の「止まれ」標識がある交差点では、白の「停止線の直前」で車輪を完全に停止（0.0 km/h・約2秒間）させなければならない。","タイヤが少しでも転がっている「徐行（ローリングストップ）」や、停止線を越えてからの停止は一発で検定中止となる。"],studyPointEn:["At a red inverted-triangle 止まれ (STOP) sign, your wheels must come to a complete 0.0 km/h stop JUST BEFORE the white stop line for ~2 full seconds.","A rolling stop (徐行) or stopping past the white stop line is an automatic exam disqualification."],questionJa:"【理解確認クイズ】日本の「止まれ（一時停止）」標識がある場所での正しい止まり方はどれですか？",questionEn:"Comprehension Check: How must you stop at a Japanese 止まれ (STOP) sign to pass the practical test?",optionsJa:["A. 停止線の直前で車輪が完全に止まる（0.0 km/h）まで約2秒間停止し、左右の安全確認（Z/X）をしてから進む","B. 周囲に車がいないのが見えれば、徐行（2〜3 km/h）のまま通過してよい"],optionsEn:["A. Come to a complete 0.0 km/h dead stop BEFORE the white stop line for ~2 seconds, then look Left & Right (Z/X)","B. If no cross traffic is visible, you may roll through slowly at 2–3 km/h"],correctIndex:0}},RAILROAD_NO_STOP:{ruleRefJa:"道路交通法第33条「踏切不停止等（検定中止）」：踏切停止線手前での完全停止不履行、または警報機作動中の進入（一発不合格）",ruleRefEn:'Road Traffic Act Art. 33 "Railroad Crossing Violation (踏切不停止・検定中止)": Failed to stop before the railroad stop line or entered while alarm/gates were active (Instant Fail).',howToFixJa:"日本の道路交通法では、踏切通過時は信号や遮断機が開いていても必ず停止線手前で完全停止（0 km/h）し、窓を開けて左右の安全確認（Z/X）を行い、踏切内は変速せず一気に通過します。",howToFixEn:"In Japan, every vehicle MUST come to a complete 0 km/h stop before ANY railroad crossing stop line, look Left & Right (Z/X), listen, and cross in one continuous motion without shifting gears.",quiz:{chapterRefJa:"外免切替教本 第12章・道路交通法第33条「踏切の通過方法とエンスト防止」",chapterRefEn:'Gaimen Kirikae Study Guide Ch. 12 & Road Traffic Act Art. 33: "Railway Crossings (踏切)"',studyPointJa:["遮断機が上がっていても、すべての車両は踏切の停止線手前で必ず完全停止（0 km/h）し、窓を開けて目と耳で左右の安全を確認しなければならない。","警報機が鳴り始めた後や遮断機が下り始めた後は絶対に進入禁止。踏切内ではエンスト防止のため変速（ギアチェンジ）をせずに一気に通過する。"],studyPointEn:["Even when the barrier gates are open, EVERY vehicle in Japan must come to a complete 0 km/h stop before the railway stop line and check Left & Right with eyes and ears.","Never enter once the alarm bells or flashing red lights start, and never shift gears while crossing the tracks."],questionJa:"【理解確認クイズ】日本の道路交通法における「踏切の通過方法」として正しいものはどれですか？",questionEn:"Comprehension Check: What does Japanese law require when crossing a railroad track (踏切) when the gates are open?",optionsJa:["A. 遮断機が開いていても必ず停止線手前で完全停止（0 km/h）し、左右の安全確認（Z/X）を行ってから変速せずに通過する","B. 遮断機が上がっていて警報機が鳴っていなければ、一時停止せずに徐行で通過してよい"],optionsEn:["A. Always come to a complete 0 km/h stop before the stop line, look & listen Left/Right (Z/X), and cross without shifting gears","B. If the barrier gates are up and no alarm is ringing, you can cross without stopping"],correctIndex:0}},RED_LIGHT:{ruleRefJa:"道路交通法第7条「信号無視（検定中止）」：赤信号（または停止可能な黄信号）で停止線を越えて交差点へ進入（一発不合格）",ruleRefEn:'Road Traffic Act Art. 7 "Traffic Signal Violation (信号無視・検定中止)": Crossed the stop line into the intersection during a Red signal (Instant Fail).',howToFixJa:"交差点接近時は信号を早めに確認し、黄信号・赤信号では必ず停止線の手前で停止してください。",howToFixEn:"Check the intersection signal early and stop cleanly before the white stop line on Yellow or Red.",quiz:{chapterRefJa:"外免切替教本 第1章・道路交通法第7条「信号機の意味（赤・黄・青）」",chapterRefEn:'Gaimen Kirikae Study Guide Ch. 1 & Road Traffic Act Art. 7: "Traffic Lights (Red, Yellow & Green)"',studyPointJa:["赤信号は「停止位置（停止線）を越えて進行してはならない」。","黄信号も原則「止まれ」であり、「注意して進め」ではない（停止位置に近づきすぎて安全に停止できない場合のみ進行可）。"],studyPointEn:["Red light means you must not proceed beyond the white stop line.",'A solid Yellow light ALSO means STOP (not "proceed with caution"), unless you are already so close to the stop line that you cannot stop safely.'],questionJa:"【理解確認クイズ】日本の信号機において「黄色の灯火（点灯）」と「赤色の灯火」の正しいルールは？",questionEn:"Comprehension Check: What is the official rule for a Yellow or Red traffic signal in Japan?",optionsJa:["A. 赤信号はもちろん、黄信号でも安全に止まれる距離であれば必ず停止線の手前で停止する","B. 黄信号は「急いで交差点を通過せよ」という意味なので加速して通過する"],optionsEn:["A. You must stop before the stop line on Red, and also on Yellow whenever you can safely come to a stop","B. A yellow light means accelerate to clear the intersection before it turns red"],correctIndex:0}},NO_SIGNAL:{ruleRefJa:"道路交通法第53条「合図不履行（減点5点）」：右左折の30m手前、または進路変更の3秒前のウインカー合図漏れ",ruleRefEn:'Road Traffic Act Art. 53 "Failure to Signal (合図不履行 -5 pts)": Missing turn signal (Q/E) 30m before turning or 3 seconds before changing lanes/passing obstacles.',howToFixJa:"左折（Q）・右折（E）の30m手前、および発進・駐車車両回避・進路変更の3秒前に必ずウインカーを出してください。",howToFixEn:"Activate Left (Q) or Right (E) turn signal 30 meters before any intersection turn and 3 seconds before pulling out or passing a parked obstacle.",quiz:{chapterRefJa:"外免切替教本 第6章・道路交通法第53条「合図を行う時期（30m手前と3秒前）」",chapterRefEn:'Gaimen Kirikae Study Guide Ch. 6 & Road Traffic Act Art. 53: "Turn Signal Timing (30 Meters vs 3 Seconds)"',studyPointJa:["交差点での「左折・右折・転回（Uターン）」の合図は、その地点の『30メートル手前』で出す。","「進路変更（車線変更・障害物回避）」および「発進」の合図は、行為を始める『3秒前』に出す。"],studyPointEn:["For Left Turns, Right Turns, and U-Turns at intersections: activate your turn signal 30 METERS before the turn.","For Lane Changes, Obstacle Passing, and Pulling Out: activate your turn signal 3 SECONDS before steering."],questionJa:"【理解確認クイズ】日本の道路交通法で定められた「右左折」と「進路変更（車線変更）」のウインカー合図を出す正しいタイミングは？",questionEn:"Comprehension Check: What is the mandatory turn-signal timing in Japan for intersection turns vs lane changes?",optionsJa:["A. 右左折は交差点の「30m手前」、進路変更や発進は操作の「3秒前」にウインカーを出す","B. ハンドルを切り始めるのと同時にウインカーを出せばよい"],optionsEn:["A. Signal 30 meters before an intersection turn, and 3 seconds before changing lanes or pulling out","B. Turn on the blinker at the exact moment you start turning the steering wheel"],correctIndex:0}},NO_SAFETY_LOOK:{ruleRefJa:"技能試験実施基準「安全確認不履行（減点5〜10点）」：発進・交差点・踏切・右左折時の目視（首振り確認）不足",ruleRefEn:'NPA Practical Exam Standard "Failure to Perform Visual Safety Check (安全確認不履行 -5 to -10 pts)": Proceeded without distinctly turning head Left/Right (Z/X) to check blind spots.',howToFixJa:"日本の技能試験では「目で見ただけ」では認められません。検定員から見えるようにZキー（左目視）・Xキー（右目視）で首をしっかり振って確認してください。",howToFixEn:"Examiners in Japan grade visible head movement! Press Z (Look Left) and X (Look Right) so your driver avatar physically rotates their head to check mirrors and blind spots.",quiz:{chapterRefJa:"技能試験実施基準「直接目視とミラーによる安全確認（巻き込み確認・左右確認）」",chapterRefEn:'NPA Practical Exam Standard: "Visible Head Movement & Blind-Spot Safety Checks (安全確認)"',studyPointJa:["助手席の検定員は「受験者の頭（首）がしっかり動いてミラーと死角を見たか」を目視で採点している。眼球だけ動かしても確認不足（減点）となる。","発進時・一時停止からの進行時・踏切通過時・左折時の巻き込み確認では必ずZキー（左目視）・Xキー（右目視）で首を振る。"],studyPointEn:["Japanese examiners sitting in the passenger seat grade visible head movement. Moving only your eyeballs without turning your head counts as a missed check (-5 pts).","Always turn your head distinctly Left (Z) and Right (X) at stop signs, railroad crossings, pull-outs, and left-turn bicycle blind spots."],questionJa:"【理解確認クイズ】日本の技能試験において、検定員に「安全確認をした」と認められるための正しい動作は？",questionEn:"Comprehension Check: How must you perform safety checks so the Japanese examiner sitting beside you awards full credit?",optionsJa:["A. ミラーを見るだけでなく、検定員から見て分かるように首をしっかり左右に振って死角を直接目視（Z/Xキー）する","B. 顔を正面に向けたまま視線（目の玉）だけを動かして確認する"],optionsEn:["A. Visibly rotate your head Left & Right (Z/X keys) to check mirrors and blind spots so the examiner clearly sees your check","B. Keep your head facing straight ahead and only glance with your eyes"],correctIndex:0}},HILL_ROLLBACK:{ruleRefJa:"技能試験実施基準「坂道後退（逆行）」：上り坂での発進時に車両が後退（0.3m以上で減点10点、1.0m以上で検定中止）",ruleRefEn:'NPA Practical Exam Standard "Hill Start Rollback (坂道逆行)": Vehicle rolled backward on the hill ramp (-10 pts for >0.3m rollback, Instant Fail for >1.0m).',howToFixJa:"坂の途中で停止したらサイドブレーキ（Space）を引き、アクセル（W）を少し踏んで駆動力を感じてからサイドブレーキを解除して発進しましょう。",howToFixEn:"When stopped on the hill upgrade, engage the handbrake (Space), apply gentle throttle (W), then release the handbrake smoothly to pull away with zero rollback.",quiz:{chapterRefJa:"技能試験実施基準「坂道発進（後退防止とサイドブレーキ操作）」",chapterRefEn:'NPA Practical Exam Standard: "Hill Start (坂道発進) & Zero-Rollback Procedure"',studyPointJa:["上り坂での発進時に0.3m〜1.0m後退すると減点10点、1.0m以上後退するとその場で一発「検定中止」となる。","サイドブレーキ（Space）を引いた状態でアクセル（W）を踏み、車が前に進もうとする駆動力を感じてからサイドブレーキを下ろすと逆行しない。"],studyPointEn:["Rolling backward 0.3m–1.0m on an uphill start deducts -10 points; rolling back 1.0m or more is an automatic fail.","Hold the car with the handbrake (Space), apply throttle (W) until forward torque engages, then release the handbrake smoothly."],questionJa:"【理解確認クイズ】坂道発進で車が後ろへ下がらない（逆行しない）ための正しい手順はどれですか？",questionEn:"Comprehension Check: What is the proper technique to prevent backward rollback during a Hill Start?",optionsJa:["A. サイドブレーキを引いて停止し、アクセルを踏んで前進する駆動力を感じてからサイドブレーキを解除する","B. サイドブレーキを使わず、フットブレーキからアクセルへ素早く足を踏み替えるだけで発進する"],optionsEn:["A. Engage the handbrake while stopped, apply throttle until forward pull is felt, then release the handbrake","B. Release all brakes first on the slope and then look for the throttle pedal"],correctIndex:0}},SPEED_LIMIT:{ruleRefJa:"道路交通法第22条「最高速度違反（減点10点）」：教習所場内の指定最高速度（40 km/h）を超過",ruleRefEn:'Road Traffic Act Art. 22 "Speed Limit Violation (速度超過 -10 pts)": Exceeded the 40 km/h maximum speed limit.',howToFixJa:"直線40km/h課題では38〜40km/hに到達したらすぐにアクセルを戻し、コーナー手前でしっかり減速してください。",howToFixEn:"On the 40 km/h straight, accelerate up to 38–40 km/h briefly, then ease off the throttle and brake smoothly before the corner.",quiz:{chapterRefJa:"外免切替教本 第3章・道路交通法第22条「最高速度の遵守と指定速度課題」",chapterRefEn:'Gaimen Kirikae Study Guide Ch. 3 & Road Traffic Act Art. 22: "Maximum Speed Limits"',studyPointJa:["「40」の最高速度標識がある区間では40 km/hを超えてはならない。指示速度（40km/hを出す課題）では38〜40km/hに達したらすぐ減速準備に入る。","標識がない一般道路の法定最高速度は自動車60 km/h、原動機付自転車（50cc）30 km/hである。"],studyPointEn:["Never exceed the posted 40 km/h speed limit. On the 40 km/h target straight, reach ~38–40 km/h briefly and decelerate before the turn.","On ordinary public roads without speed signs, the statutory limit is 60 km/h for cars/motorcycles and 30 km/h for mopeds."],questionJa:"【理解確認クイズ】場内コースの「40 km/h指定速度課題」および最高速度標識に関する正しいルールは？",questionEn:"Comprehension Check: How should you drive the 40 km/h speed section without getting a speeding deduction?",optionsJa:["A. 直線区間で38〜40 km/hに到達したらアクセルを戻し、40 km/hを超えないようカーブ手前で十分に減速する","B. 40 km/h課題では最低45〜50 km/hまで加速した方が高評価になる"],optionsEn:["A. Reach 38–40 km/h on the straight without exceeding the 40 km/h limit, then brake smoothly before the curve","B. Accelerate to 50 km/h so the examiner sees confident driving"],correctIndex:0}},HANDBRAKE_DRAG:{ruleRefJa:"技能試験実施基準「駐停車ブレーキ戻し忘れ（減点5点）」：サイドブレーキを引いたまま発進・走行",ruleRefEn:'NPA Practical Exam Standard "Parking Brake Drag (サイド戻し忘れ -5 pts)": Drove with the handbrake still engaged.',howToFixJa:"発進前の手順（⑥ギアD＋サイドブレーキ解除 [Space]）を徹底してからアクセルを踏んでください。",howToFixEn:"Always release the parking brake (Space) in Pre-Drive Step 6 before pressing the throttle.",quiz:{chapterRefJa:"技能試験実施基準「発進準備手順⑥：ギア選択とパーキングブレーキ完全解除」",chapterRefEn:'NPA Practical Exam Standard: "Pre-Drive Step 6 — Gear Selection & Full Handbrake Release"',studyPointJa:["発進時や坂道発進の後にサイドブレーキを引いたまま走行すると「駐停車ブレーキ戻し忘れ（減点5点）」となる。","エンジン始動後、フットブレーキを踏んだままギアをD（または1速）に入れ、サイドブレーキ（Space）を完全に下ろしてから発進する。"],studyPointEn:["Driving with the parking brake still engaged incurs a -5 point deduction (駐停車ブレーキ戻し忘れ).","Always verify the handbrake is fully released (Space) after shifting into D (or 1st gear) before pressing the throttle."],questionJa:"【理解確認クイズ】発進前にサイドブレーキ（パーキングブレーキ）を解除する正しいタイミングはいつですか？",questionEn:"Comprehension Check: When should you release the handbrake (parking brake) during the pre-drive sequence?",optionsJa:["A. フットブレーキを踏んだままエンジンを始動し、ギアをD（または1速）に入れた直後、発進する前に完全解除する","B. 発進して時速20 km/hくらいに乗ってからサイドブレーキを下ろす"],optionsEn:["A. While holding the foot brake after starting the engine and shifting into D (or 1st), BEFORE moving the car","B. After driving 20 meters down the road"],correctIndex:0}},PRE_DRIVE_ORDER:{ruleRefJa:"技能試験実施基準「乗車・発進手順不備（減点5点）」：乗車後の準備手順（①ドアロック→②座席調整→③ミラー調整→④シートベルト→⑤ブレーキ＋エンジン始動）の順序違反または省略",ruleRefEn:'NPA Practical Exam Standard "Improper Pre-Drive Cockpit Procedure (発進準備手順不備 -5 pts)": Skipped or performed cockpit setup out of official order (1. Door Lock → 2. Seat → 3. Mirrors → 4. Seatbelt → 5. Brake+Start).',howToFixJa:"発進前に画面上部の「乗車〜発進手順チェックバー」を①から⑧まで順番通りに完了させてください。特に「シート調整→ミラー調整→シートベルト」の順序は検定員が助手席から厳しくチェックします。",howToFixEn:"Before pulling out of the Start Bay, complete steps 1 through 8 on the Pre-Drive Checklist Bar in exact sequence: 1. Door Lock → 2. Seat → 3. Mirrors → 4. Seatbelt → 5. Brake+Ignition → 6. Gear D+Handbrake → 7. Right Blinker → 8. 5-Point Mirror & Right Shoulder Look.",quiz:{chapterRefJa:"技能試験実施基準「乗車から発進までの正しい8ステップ順序」",chapterRefEn:'NPA Practical Exam Standard: "Mandatory 8-Step Pre-Drive Cockpit Sequence"',studyPointJa:["乗車後の準備は必ず「①ドアロック → ②座席（シート）調整 → ③ルームミラー・サイドミラー調整 → ④シートベルト着用 → ⑤ブレーキ＋エンジン始動」の順番で行う。","先にシートベルトを着けてからシートやミラーを合わせたり、ミラーに触れずに発進すると助手席の検定員から減点される。"],studyPointEn:["Cockpit setup MUST follow the exact order: 1. Door Lock → 2. Seat Adjustment → 3. Mirror Adjustment → 4. Fasten Seatbelt → 5. Foot Brake + Start Engine.","Why Seat before Mirrors & Seatbelt? Because moving your seat changes your eye angle in the mirrors, and a fastened seatbelt restricts your seat & mirror adjustment!"],questionJa:"【理解確認クイズ】日本の技能試験において、乗車してドアを閉めた直後に行う「座席・ミラー・シートベルト」の正しい順番は？",questionEn:"Comprehension Check: After boarding and locking the door, what is the mandatory Japanese exam order for Seat, Mirrors, and Seatbelt?",optionsJa:["A. ①座席（シート）調整 → ②ルーム・サイドミラー調整 → ③シートベルト着用 → ④エンジン始動","B. ①シートベルト着用 → ②エンジン始動 → ③走りながらミラーと座席を合わせる"],optionsEn:["A. 1st: Seat Adjustment → 2nd: Rearview & Side Mirrors → 3rd: Fasten Seatbelt → 4th: Foot Brake & Start Engine","B. 1st: Fasten Seatbelt → 2nd: Start Engine → 3rd: Adjust Seat & Mirrors while rolling"],correctIndex:0}},NO_SEATBELT:{ruleRefJa:"道路交通法第71条の3「シートベルト着用義務違反（減点10点）」：シートベルトを着用せずに発進",ruleRefEn:'Road Traffic Act Art. 71-3 "Unfastened Seatbelt (シートベルト未着用 -10 pts)": Pulled out without fastening the driver seatbelt.',howToFixJa:"乗車したら座席とミラーを合わせた直後に必ず「④シートベルト着用」をクリック（またはキー4）して3Dシートベルトを装着してから発進してください。",howToFixEn:"Always click Step 4 (or press key 4) to latch your 3D red diagonal seatbelt across the driver avatar after adjusting your seat and mirrors.",quiz:{chapterRefJa:"道路交通法第71条の3「座席ベルト（シートベルト）の装着義務」",chapterRefEn:'Road Traffic Act Art. 71-3: "Mandatory Seatbelt Fastening Before Engine Start & Pull-Out"',studyPointJa:["運転席・助手席だけでなく後部座席を含む全座席でシートベルト着用が法律で義務付けられている。","技能試験では座席（②）とミラー（③）を調整した直後、エンジンをかけて発進する前に必ずシートベルト（④）を装着する。"],studyPointEn:["Japanese law requires seatbelt use for all occupants (front and rear seats).","In the practical exam, you must latch your seatbelt (Step 4) right after adjusting your seat (Step 2) and mirrors (Step 3), before moving the car."],questionJa:"【理解確認クイズ】発進前のシートベルト着用に関する正しい手順はどれですか？",questionEn:"Comprehension Check: When must you fasten your seatbelt during the practical driving exam?",optionsJa:["A. 発進する前（①ドアロック→②座席調整→③ミラー調整の直後）に必ずねじれなく着用する","B. 教習所場内コースは低速なのでシートベルトは着用しなくてよい"],optionsEn:["A. Before moving the car—immediately after 1. Door Lock → 2. Seat Adjust → 3. Mirror Check (Step 4)","B. Seatbelts are optional inside the driving school compound"],correctIndex:0}},PEDESTRIAN_PRIORITY:{ruleRefJa:"道路交通法第38条「横断歩道等における歩行者等の優先（検定中止）」：横断歩道を通行中の歩行者の進行を妨害（一発不合格・補助ブレーキ介入）",ruleRefEn:'Road Traffic Act Art. 38 "Failure to Yield to Pedestrian at Crosswalk (歩行者保護違反・検定中止)": Drove close to a pedestrian crossing on a zebra crosswalk without stopping (Instant Fail).',howToFixJa:"横断歩道（◇マーク手前）に近づいたら減速し、歩行者が渡っている・渡ろうとしている時は必ず停止線（または横断歩道手前）で完全停止して歩行者が渡り切るのを待ってください。",howToFixEn:"Whenever a pedestrian is crossing or waiting at a zebra crosswalk (横断歩道), come to a complete stop before the crosswalk and wait until they finish crossing.",quiz:{chapterRefJa:"外免切替教本 第11章・道路交通法第38条「横断歩道における歩行者最優先と手前30m追い越し・追い抜き禁止」",chapterRefEn:'Gaimen Kirikae Study Guide Ch. 11 & Road Traffic Act Art. 38: "Absolute Pedestrian Priority at Crosswalks"',studyPointJa:["横断歩道の手前30mと15mには白いひし形（◇）の路面標示がある。歩行者が横断中または横断しようとしている時は必ず一時停止して道を譲らなければならない。","横断歩道・自転車横断帯とその手前30m以内では、他の車を「追い越す」ことも「追い抜く」こともすべて法律で禁止されている。"],studyPointEn:["White road diamonds (◇) are painted 30m and 15m before unsignalized crosswalks. If any pedestrian is crossing or waiting to cross, you MUST come to a complete stop.","Within 30m before a crosswalk, BOTH overtaking (changing lanes) and passing (in the same lane) any motor vehicle are strictly prohibited."],questionJa:"【理解確認クイズ】横断歩道を通行中の歩行者がいる場合の運転ルールとして正しいものは？",questionEn:"Comprehension Check: What must you do when a pedestrian is crossing or about to cross a zebra crosswalk (横断歩道)?",optionsJa:["A. 必ず横断歩道の手前（停止線）で完全停止し、歩行者が安全に渡り切るまで待つ（妨害は一発検定中止）","B. 歩行者との距離があれば、クラクションを鳴らして歩行者の前を素早く通過する"],optionsEn:["A. Come to a complete stop before the crosswalk and wait until the pedestrian finishes crossing (failing to yield = Instant Fail)","B. Slow down slightly and steer around the pedestrian while they are on the stripes"],correctIndex:0}},TRAFFIC_COLLISION:{ruleRefJa:"道路交通法第70条「安全運転義務違反・他車接触（検定中止）」：他の教習車・走行車両との接触事故（一発不合格）",ruleRefEn:'Road Traffic Act Art. 70 "Vehicle Collision (他車接触事故・検定中止)": Collided with another vehicle on the course (Instant Fail).',howToFixJa:"交差点や合流では他車（教習車）の動きと優先関係を確認し、十分な車間距離を保って走行してください。",howToFixEn:"Check for other training vehicles at intersections and merges, yield right-of-way, and maintain a safe following distance.",quiz:{chapterRefJa:"外免切替教本 第5章・道路交通法第36条・第70条「交差点の優先関係（左方優先・直進優先）と車間距離」",chapterRefEn:'Gaimen Kirikae Study Guide Ch. 5 & Road Traffic Act Art. 36/70: "Intersection Right-of-Way & Safe Following Distance"',studyPointJa:["道幅が同じ交差点では「左方から来る車」が優先であり、また右折車は「直進車および左折車」の進行を妨げてはならない。","前車に追従する時は、前の車が急停止しても追突しない安全な車間距離を保つ義務がある。"],studyPointEn:["At intersections of equal width, vehicles approaching from the LEFT have priority, and right-turning cars must yield to oncoming straight and left-turning traffic.","Always maintain a safe following distance so you can stop smoothly even if the vehicle ahead brakes suddenly."],questionJa:"【理解確認クイズ】交差点での優先関係および他車との車間距離に関する正しいルールは？",questionEn:"Comprehension Check: Which rule governs intersection priority and following traffic in Japan?",optionsJa:["A. 直進・左折車が右折車より優先であり、前車との間には急ブレーキにも対応できる安全な車間距離を保つ","B. 右折車の方が直進車より常に優先される"],optionsEn:["A. Straight and left-turning vehicles have priority over right-turning vehicles, and you must keep a safe following distance","B. Right-turning vehicles always have right-of-way over oncoming straight traffic"],correctIndex:0}}},Xr=[{id:"wp-pullout",stationHint:"startBay",x:-10,z:47.75,radius:6.5,instructionJa:"発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう",instructionEn:"Bay 1: Signal right (E), glance right (X), and pull into the left lane"},{id:"wp-west-turn",stationHint:"stopSign",x:-77.75,z:10,radius:7,instructionJa:"外周西側を通って北の直線（40km/h区間）へ向かいましょう",instructionEn:"Continue along the West loop toward the North 40 km/h straight"},{id:"wp-north-straight",stationHint:"speedStraight",x:10,z:-47.75,radius:7.5,instructionJa:"北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速",instructionEn:"North straight: Signal past the parked van and reach ~35–40 km/h"},{id:"wp-hill-approach",stationHint:"hillStart",x:24,z:-24,radius:6,instructionJa:"坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう",instructionEn:"Hill Start: Stop on the up-ramp, then pull away cleanly without rollback"},{id:"wp-bay-access",stationHint:"bayParking",x:26,z:30.8,radius:4.5,instructionJa:"方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫",instructionEn:"Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing"},{id:"wp-railroad",stationHint:"railroad",x:22,z:1.75,radius:6.5,instructionJa:"踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう",instructionEn:"Railroad: Stop completely before line, look Left & Right (Z/X), then cross"},{id:"wp-signal",stationHint:"trafficLight",x:-15,z:1.75,radius:6.5,instructionJa:"信号交差点：信号に従って直進し、NWのS字コース入口へ左折",instructionEn:"Signal Intersection: Obey light, cross West, then enter S-Curve (North)"},{id:"wp-scurve",stationHint:"sCurve",x:-27.12,z:-36,radius:5.5,instructionJa:"S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう",instructionEn:"S-Curve: Creep slowly through the bends without touching curbs or poles"},{id:"wp-crank",stationHint:"crank",x:-34,z:36,radius:5.5,instructionJa:"クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう",instructionEn:"Crank: Swing wide around both 90° turns cleanly onto the South road"},{id:"wp-finish-bay",stationHint:"startBay",x:12,z:48.1,radius:3.5,instructionJa:"ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です",instructionEn:"Finish: Pull alongside Start Bay 1 and come to a complete stop"}];class bv{constructor(){yt(this,"mode","practice");yt(this,"score",100);yt(this,"terminated",!1);yt(this,"finished",!1);yt(this,"simTimeSec",0);yt(this,"startOdometerM",0);yt(this,"violations",[]);yt(this,"waypointIndex",0);yt(this,"cooldowns",new Map);yt(this,"zoneTrackers",new Map);yt(this,"recentSignalTime",-999);yt(this,"recentSignalDir",null);yt(this,"headingSample",0);yt(this,"headingAccumTurn",0);yt(this,"hillMaxXOnRamp",-1/0);yt(this,"handbrakeDragDist",0);yt(this,"curbMountCount",0);yt(this,"preDriveChecked",!1);yt(this,"spawnedAtStartBay",!1);yt(this,"lastViolation",null);yt(this,"onViolation");yt(this,"onExamFinish")}reset(t,e){this.mode=t,this.score=100,this.terminated=!1,this.finished=!1,this.simTimeSec=0,this.startOdometerM=e.odometerM,this.violations=[],this.waypointIndex=0,this.cooldowns.clear(),this.zoneTrackers.clear(),this.recentSignalTime=-999,this.recentSignalDir=null,this.headingSample=e.heading,this.headingAccumTurn=0,this.hillMaxXOnRamp=-1/0,this.handbrakeDragDist=0,this.curbMountCount=0,this.lastViolation=null;const n=ms.startBay;this.spawnedAtStartBay=Ys(e.x,e.z,n.x,n.z)<2.2,this.preDriveChecked=!1}getMode(){return this.mode}getScore(){return Math.max(0,this.score)}isTerminated(){return this.terminated}isFinished(){return this.finished}getViolations(){return this.violations}getCurrentWaypoint(){return this.mode!=="exam"?null:Xr[this.waypointIndex]??null}getWaypointProgress(){return{current:this.waypointIndex,total:Xr.length}}getSummary(t){var r;const e=this.getScore(),n=new Map;for(const o of this.violations)n.set(o.code,(n.get(o.code)??0)+1);let s;return n.has("RAILROAD_NO_STOP")?s="railroad":n.has("STOP_SIGN_VIOLATION")?s="stopSign":n.has("RED_LIGHT")?s="trafficLight":n.has("HILL_ROLLBACK")?s="hillStart":(n.has("CURB_MOUNT")||n.has("POLE_COLLISION"))&&(s=((r=this.getCurrentWaypoint())==null?void 0:r.stationHint)??"crank"),{passed:!this.terminated&&e>=70,terminated:this.terminated,score:e,elapsedSec:this.simTimeSec,distanceM:Math.max(0,t.odometerM-this.startOdometerM),violations:[...this.violations],weakArea:s}}recordViolation(t,e,n,s,r,o,a,l=3){var d;if(this.finished)return;const c=this.cooldowns.get(t)??-999;if(this.simTimeSec-c<l)return;this.cooldowns.set(t,this.simTimeSec);const u=Ev[t],h={id:`${t}-${this.violations.length+1}`,code:t,points:e,instantFail:n,timestampSec:this.simTimeSec,labelJa:s,labelEn:r,detailJa:o,detailEn:a,ruleRefJa:u==null?void 0:u.ruleRefJa,ruleRefEn:u==null?void 0:u.ruleRefEn,howToFixJa:u==null?void 0:u.howToFixJa,howToFixEn:u==null?void 0:u.howToFixEn,quiz:u==null?void 0:u.quiz};this.violations.push(h),this.lastViolation=h,this.score=Math.max(0,this.score-e),(d=this.onViolation)==null||d.call(this,h),n&&this.mode==="exam"&&(this.terminated=!0,this.finished=!0)}update(t,e,n,s,r){var c,u;if(this.finished)return;if(this.simTimeSec+=t,r!=null&&r.pedestrianDanger&&this.recordViolation("PEDESTRIAN_PRIORITY",30,!0,"歩行者保護違反（横断歩道）","Pedestrian Crosswalk Violation",r.pedestrianLabelJa??"横断歩道上の歩行者の通行を妨害しました",r.pedestrianLabelEn??"Failed to stop for a pedestrian crossing the zebra crosswalk",4),r!=null&&r.trafficCollision&&this.recordViolation("TRAFFIC_COLLISION",30,!0,"他車接触事故","Traffic Vehicle Collision","コース上の他車（教習車）と接触しました","Collided with another training vehicle on the course",3.5),this.spawnedAtStartBay&&!this.preDriveChecked&&e.odometerM-this.startOdometerM>1.2){this.preDriveChecked=!0;const h=e.preDrive;h&&(h.seatbeltFastened?!h.doorLocked||!h.seatAdjusted||!h.mirrorsAdjusted||h.orderErrorStep?this.recordViolation("PRE_DRIVE_ORDER",5,!1,"乗車・発進準備手順不備","Pre-Drive Checklist Order Error",h.orderErrorStep?"乗車準備（①ドアロック→②座席調整→③ミラー調整→④シートベルト）の順序が正しくありません":"発進前の座席調整またはミラー確認を省略して発進しました",h.orderErrorStep?"Pre-drive cockpit preparation steps were performed out of the official Japanese exam sequence":"Pulled out without completing Door Lock → Seat Adjust → Mirror Check in order",10):!h.fivePointLookDone&&this.simTimeSec-e.lookedRightTimestamp>8&&this.recordViolation("NO_SAFETY_LOOK",5,!1,"発進時5点安全確認不足","Missing Pull-Out Safety Look","発進前の後方・右死角目視確認（Xキーまたは手順⑧）を行わずに発進しました","Pulled out from curb without performing right blind-spot shoulder check (X / Step 8)",8):this.recordViolation("NO_SEATBELT",10,!1,"シートベルト未着用","Seatbelt Not Fastened","乗車手順④「シートベルト着用」を行わずに発進しました","Pulled out of Start Bay without fastening seatbelt (Pre-Drive Step 4)",10))}if((e.blinker==="left"||e.blinker==="right")&&(this.recentSignalTime=this.simTimeSec,this.recentSignalDir=e.blinker),n.anyCurbMount){this.curbMountCount++;const h=this.mode==="exam"&&this.curbMountCount>=2;this.recordViolation("CURB_MOUNT",20,h,"脱輪","Curb Mount","タイヤが縁石に乗り上げました","Wheel mounted over the course curb",3)}else n.anyCurbTouch&&this.recordViolation("CURB_TOUCH",10,!1,"接輪","Curb Scrape","タイヤが縁石に接触しました","Tire brushed against the curb",2.5);if((n.poleHit||n.obstacleHit&&n.obstacleHit.kind==="parkedCar")&&this.recordViolation("POLE_COLLISION",30,!0,"接触事故","Obstacle Contact","ポールまたは障害物に接触しました","Vehicle struck a course marker pole or obstacle",2.5),Math.abs(e.speedMs)*3.6>46&&this.recordViolation("SPEED_LIMIT",10,!1,"速度超過","Speeding","場内制限速度（40km/h）を大幅に超過しました","Exceeded 40 km/h compound speed limit",4),e.handbrake&&Math.abs(e.speedMs)>1.2?(this.handbrakeDragDist+=Math.abs(e.speedMs)*t,this.handbrakeDragDist>3.5&&(this.handbrakeDragDist=0,this.recordViolation("HANDBRAKE_DRAG",5,!1,"サイド戻し忘れ","Handbrake Left On","サイドブレーキを引いたまま走行しています","Driving with the parking brake still engaged",5))):this.handbrakeDragDist=0,e.x>$s+1&&e.x<ol&&Math.abs(e.z-an)<3){e.x>this.hillMaxXOnRamp&&(this.hillMaxXOnRamp=e.x);const h=this.hillMaxXOnRamp-e.x;if(h>.35&&e.speedMs<-.15){const d=h>1;this.recordViolation("HILL_ROLLBACK",d?30:10,d,"坂道逆行","Hill Rollback",d?"坂道で1m以上逆行しました":"坂道で車両が後退しました",d?"Rolled back over 1.0m on hill ramp":"Vehicle rolled backward on hill ramp",4)}}else this.hillMaxXOnRamp=-1/0;this.evaluateStopLines(e,s);const a=So(e.heading-this.headingSample);if(this.headingSample=e.heading,e.speedMs>1.5){if(this.headingAccumTurn+=a,Math.abs(this.headingAccumTurn)>.96){const h=this.headingAccumTurn>0?"left":"right",d=e.x<-24&&e.x>-50&&e.z<-4&&e.z>-42,g=this.simTimeSec-this.recentSignalTime<7&&this.recentSignalDir===h;!d&&!g&&this.recordViolation("NO_SIGNAL",5,!1,"合図不履行","Missing Blinker",`${h==="left"?"左折":"右折"}時のウインカー合図がありません`,`Turned ${h} without activating blinker beforehand`,3.5),this.headingAccumTurn=0}}else this.headingAccumTurn*=Math.max(0,1-t*.5);const l=ho[0];if(l&&Math.abs(e.x-l.x)<2&&e.z>-50&&e.z<-42.5&&e.speedMs>1.5&&this.simTimeSec-this.recentSignalTime>8&&this.recordViolation("NO_SIGNAL",5,!1,"進路変更合図不履行","Missing Lane Signal","障害物回避時の右・左ウインカー合図がありません","Passed parked obstacle without turn signal",6),this.mode==="exam"&&!this.finished){const h=Xr[this.waypointIndex];h&&Ys(e.x,e.z,h.x,h.z)<=h.radius&&(this.waypointIndex===Xr.length-1?Math.abs(e.speedMs)<.15&&(this.finished=!0,(c=this.onExamFinish)==null||c.call(this,this.getSummary(e))):this.waypointIndex++)}this.terminated&&this.finished&&((u=this.onExamFinish)==null||u.call(this,this.getSummary(e)))}evaluateStopLines(t,e){const n=e.getRailroadState();for(const s of wu){let r=this.zoneTrackers.get(s.id);r||(r={approached:!1,stoppedBeforeLine:!1,lookedBothSides:!1,wasClosedOrWarning:!1,crossed:!1,prevSignedDist:999},this.zoneTrackers.set(s.id,r));const o=t.x-s.x,a=t.z-s.z,l=o*s.dirX+a*s.dirZ,c=-s.dirZ,u=s.dirX,h=Math.abs(o*c+a*u),d=-Math.sin(t.heading)*s.dirX-Math.cos(t.heading)*s.dirZ,g=h<=s.halfWidth+.9&&d>.65;if(g&&l>=-9&&l<=-.1){r.approached=!0,Math.abs(t.speedMs)<.15&&(r.stoppedBeforeLine=!0);const _=this.simTimeSec-t.lookedLeftTimestamp<6,x=this.simTimeSec-t.lookedRightTimestamp<6;_&&x&&(r.lookedBothSides=!0),s.kind==="railroad"&&n.isWarningActive&&(r.wasClosedOrWarning=!0)}r.approached&&g&&r.prevSignedDist<0&&l>=0&&l<3&&(this.handleLineCrossed(s,r,e,n.isWarningActive),r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),(Math.abs(l)>14||h>8)&&(r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),r.prevSignedDist=l}}handleLineCrossed(t,e,n,s){t.kind==="stopSign"?e.stoppedBeforeLine?e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"安全確認不履行","Missing L/R Check","発進前の左右安全確認（Z/Xキー）が不足しています","Proceeded from stop line without glancing Left & Right (Z/X)",3):this.recordViolation("STOP_SIGN_VIOLATION",25,!0,"指定場所一時不停止","Stop Sign Violation","「止まれ」停止線手前で完全停止していません","Failed to come to a complete 0 km/h stop at 止まれ line",3):t.kind==="railroad"?!e.stoppedBeforeLine||s||e.wasClosedOrWarning?this.recordViolation("RAILROAD_NO_STOP",30,!0,"踏切不停止・遮断機無視","Railroad Violation",s?"警報機作動中に踏切へ進入しました":"踏切手前で完全停止していません",s?"Entered railroad crossing while warning/barrier active":"Crossed railroad tracks without stopping before stop line",3):e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"踏切安全確認不履行","Railroad Look Check","踏切通過前の左右確認（Z/Xキー）が不足しています","Crossed railroad without checking Left & Right (Z/X)",3):t.kind==="trafficLight"&&t.axis&&n.getLightForAxis(t.axis)==="red"&&this.recordViolation("RED_LIGHT",30,!0,"信号無視","Red Light Violation","赤信号で交差点に進入しました","Crossed intersection stop line on a RED traffic signal",3)}}const Tu="jp_kyoshujo_settings_v1",wv="jp_kyoshujo_db",Ss="custom_maps",Au="active_custom_map",ua={locale:"ja",vehicleKind:"sedan",transmission:"AT",cameraMode:"chase",steeringSensitivity:1,autoCenterSteering:!0,mirrorQuality:"high",masterVolume:.55,muted:!1,minimapHeadingUp:!1,showTouchControls:!1};function Tv(){try{const i=window.localStorage.getItem(Tu);if(!i)return{...ua};const t=JSON.parse(i);return{...ua,...t}}catch{return{...ua}}}function Kn(i){try{window.localStorage.setItem(Tu,JSON.stringify(i))}catch{}}function Ru(){return new Promise((i,t)=>{const e=window.indexedDB.open(wv,1);e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(Ss)||n.createObjectStore(Ss)},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function pr(i){try{const t=await Ru();await new Promise((e,n)=>{const s=t.transaction(Ss,"readwrite");s.objectStore(Ss).put(i,Au),s.oncomplete=()=>e(),s.onerror=()=>n(s.error)}),t.close()}catch{}}async function Av(){try{const i=await Ru(),t=await new Promise((e,n)=>{const r=i.transaction(Ss,"readonly").objectStore(Ss).get(Au);r.onsuccess=()=>e(r.result??null),r.onerror=()=>n(r.error)});return i.close(),t}catch{return null}}const on=class on{constructor(){yt(this,"signalTime",0);yt(this,"railTime",0)}update(t){this.signalTime=(this.signalTime+t)%on.SIGNAL_CYCLE,this.railTime=(this.railTime+t)%on.RAIL_CYCLE}setTimes(t,e){this.signalTime=(t%on.SIGNAL_CYCLE+on.SIGNAL_CYCLE)%on.SIGNAL_CYCLE,this.railTime=(e%on.RAIL_CYCLE+on.RAIL_CYCLE)%on.RAIL_CYCLE}getLightForAxis(t){const e=this.signalTime;return t==="NS"?e<11?"green":e<14?"yellow":"red":e>=15.5&&e<26.5?"green":e>=26.5&&e<29.5?"yellow":"red"}getRailroadState(){const t=this.railTime;let e="open",n=0;t<22?(e="open",n=0):t<26?(e="warning",n=0):t<29?(e="closing",n=(t-26)/3*(Math.PI/2)):t<37?(e="closed",n=Math.PI/2):(e="opening",n=(1-(t-37)/3)*(Math.PI/2));const s=e!=="open",r=Math.floor(t*2.2)%2===0;return{phase:e,barrierAngle:n,isWarningActive:s,flashLeftOn:s&&r,flashRightOn:s&&!r}}};yt(on,"SIGNAL_CYCLE",31),yt(on,"RAIL_CYCLE",40);let ll=on;const Rv={kind:"sedan",length:4.4,width:1.69,wheelbase:2.6,trackWidth:1.48,frontOverhang:.85,rearOverhang:.95,wheelRadius:.31,maxSteerRad:43*Math.PI/180,steeringWheelMaxRad:1.5*Math.PI*2,maxSpeedMs:16.7,maxReverseMs:5.5,maxAccelMs2:3.4,brakeDecelMs2:9.5},Cv={kind:"motorcycle",length:2.1,width:.72,wheelbase:1.41,trackWidth:.16,frontOverhang:.35,rearOverhang:.34,wheelRadius:.3,maxSteerRad:34*Math.PI/180,steeringWheelMaxRad:34*Math.PI/180,maxSpeedMs:18,maxReverseMs:1.8,maxAccelMs2:4.5,brakeDecelMs2:9.8};function Cu(i){return i==="motorcycle"?Cv:Rv}function Pu(i,t,e,n="sedan",s="AT"){const r=Cu(n),o=ps(e),a=Gn(i,t),l=s==="AT"?"D":"1";return{x:i,y:a.y,z:t,rearAxleX:i-o.x*(r.wheelbase*.5),rearAxleZ:t-o.z*(r.wheelbase*.5),heading:So(e),pitch:0,roll:0,speedMs:0,steerAngleRad:0,steeringWheelRad:0,wheelRotationRad:0,transmission:s,gear:l,rpm:800,stalled:!1,handbrake:!1,blinker:"off",blinkerTimer:0,blinkerOn:!1,braking:!1,reversing:!1,lookAngleRad:0,lookedLeftTimestamp:-999,lookedRightTimestamp:-999,odometerM:0,preDrive:{doorLocked:!1,seatAdjusted:!1,mirrorsAdjusted:!1,seatbeltFastened:!1,brakeAndStartDone:!1,handbrakeReleased:!1,rightSignalOn:!1,fivePointLookDone:!1,completedSteps:[]},mirrorTouchTimer:0}}const Pv={1:6,2:10.5,3:14.5,4:18,5:22,R:5.5},Lv={1:1.35,2:1.05,3:.85,4:.7,5:.55,R:1.15};function Lu(i,t){const e=["P","R","N","D"],n=["R","N","1","2","3","4","5"],s=i.transmission==="AT"?e:n,r=s.indexOf(i.gear),o=r===-1?i.transmission==="AT"?3:2:r,a=Math.max(0,Math.min(s.length-1,o+t)),l=s[a];Math.abs(i.speedMs)>1.2&&(l==="P"||l==="R"&&i.speedMs>1.2)||(i.gear=l)}function Iv(i,t,e,n,s,r=Gn){const o=2.5*s.steeringSensitivity;if(t.analogSteerTarget!==null){const Et=Math.max(-1,Math.min(1,t.analogSteerTarget))*e.maxSteerRad-i.steerAngleRad,Ut=o*1.8*n;i.steerAngleRad+=Math.abs(Et)<=Ut?Et:Math.sign(Et)*Ut}else{const pt=t.steerLeft-t.steerRight;if(Math.abs(pt)>.01)i.steerAngleRad+=pt*o*n;else if(s.autoCenterSteering){const Ut=(.65+2.4*Math.min(1,Math.abs(i.speedMs)/4))*n;Math.abs(i.steerAngleRad)<=Ut?i.steerAngleRad=0:i.steerAngleRad-=Math.sign(i.steerAngleRad)*Ut}}i.steerAngleRad=Math.max(-e.maxSteerRad,Math.min(e.maxSteerRad,i.steerAngleRad)),i.steeringWheelRad=i.steerAngleRad/e.maxSteerRad*e.steeringWheelMaxRad,i.blinker!=="off"?(i.blinkerTimer+=n,i.blinkerOn=Math.floor(i.blinkerTimer*2.6)%2===0):(i.blinkerTimer=0,i.blinkerOn=!1);let a=0;t.lookLeft&&!t.lookRight?a=68*Math.PI/180:t.lookRight&&!t.lookLeft&&(a=-68*Math.PI/180);const l=8.5*n,c=a-i.lookAngleRad;i.lookAngleRad+=Math.abs(c)<=l?c:Math.sign(c)*l,i.lookAngleRad>32*Math.PI/180&&(i.lookedLeftTimestamp=s.simTimeSec),i.lookAngleRad<-32*Math.PI/180&&(i.lookedRightTimestamp=s.simTimeSec),i.mirrorTouchTimer>0&&(i.mirrorTouchTimer=Math.max(0,i.mirrorTouchTimer-n));const u=ps(i.heading),h=r(i.x,i.z),d=h.slopeX*u.x+h.slopeZ*u.z,g=Math.atan(d),_=-9.81*Math.sin(g);let x=0;const m=i.transmission==="AT"?1:1-Math.max(0,Math.min(1,t.clutch)),f=!i.stalled;if(i.transmission==="AT")i.gear==="D"?(t.throttle>.02&&i.speedMs<e.maxSpeedMs?x=t.throttle*e.maxAccelMs2:t.brake<.05&&!i.handbrake&&i.speedMs<1.65&&(x=1.25*(1-Math.max(0,i.speedMs)/1.65)),i.rpm=820+Math.abs(i.speedMs)*210+t.throttle*1400):i.gear==="R"?(t.throttle>.02&&i.speedMs>-e.maxReverseMs?x=-t.throttle*(e.maxAccelMs2*.72):t.brake<.05&&!i.handbrake&&i.speedMs>-1.4&&(x=-.82*(1-Math.max(0,-i.speedMs)/1.4)),i.rpm=820+Math.abs(i.speedMs)*260+t.throttle*1200):i.rpm=780+t.throttle*2600;else if(f&&i.gear!=="N"&&i.gear!=="P"){const pt=Pv[i.gear]??10,Et=Lv[i.gear]??1,Yt=i.gear==="R"?-1:1,ie=Math.abs(i.speedMs)/pt*3800,Zt=800+t.throttle*3400;if(i.rpm=ie*m+Zt*(1-m),m>.75&&Math.abs(i.speedMs)<.55&&t.throttle<.14&&(t.brake>.1||i.handbrake||Math.abs(i.speedMs)<.15))i.stalled=!0,i.rpm=0;else if(m>.15&&i.speedMs*Yt<pt){const lt=Math.max(.18,t.throttle);x=Yt*lt*e.maxAccelMs2*Et*m}}else i.rpm=f?780+t.throttle*2800:0;const S=i.transmission==="AT"&&i.gear==="P",y=i.handbrake?6.8:0,v=t.brake*e.brakeDecelMs2,M=v+y+(S?14:0);i.braking=t.brake>.05,i.reversing=i.gear==="R";const E=-i.speedMs*(.14+.015*Math.abs(i.speedMs)),T=x+_+E;let C=i.speedMs+T*n;if(M>.01){const pt=M;if(Math.abs(i.speedMs)<.08&&Math.abs(x+_)<=pt)C=0;else{const Et=Math.sign(C!==0?C:x+_),Ut=C-Et*M*n;Math.sign(Ut)!==Math.sign(C)&&Math.abs(x+_)<=pt?C=0:C=Ut}}else Math.abs(C)<.02&&Math.abs(x)<.1&&Math.abs(_)<.1&&(C=0);C=Math.max(-e.maxReverseMs,Math.min(e.maxSpeedMs,C)),i.speedMs=C;const b=i.speedMs*n,w=b/e.wheelbase*Math.tan(i.steerAngleRad),D=i.heading+w*.5,O=ps(D);i.rearAxleX+=O.x*b,i.rearAxleZ+=O.z*b,i.heading=So(i.heading+w);const H=ps(i.heading);i.x=i.rearAxleX+H.x*(e.wheelbase*.5),i.z=i.rearAxleZ+H.z*(e.wheelbase*.5);const Z=r(i.x,i.z);i.y=Z.y,i.odometerM+=Math.abs(b),i.wheelRotationRad+=b/e.wheelRadius;const W=Z.slopeX*H.x+Z.slopeZ*H.z,$=Math.atan(W)-Math.max(-.04,Math.min(.04,(v-x)*.004));i.pitch+=($-i.pitch)*Math.min(1,12*n);const et=w/n,J=i.speedMs*et,gt=e.kind==="motorcycle"?Math.max(-.48,Math.min(.48,-J*.065)):Math.max(-.06,Math.min(.06,J*.008));i.roll+=(gt-i.roll)*Math.min(1,10*n)}function Dv(i,t){const e=ps(i.heading);i.rearAxleX=i.x-e.x*(t.wheelbase*.5),i.rearAxleZ=i.z-e.z*(t.wheelbase*.5)}const Iu={startBay:{titleJa:"発着点 1番",titleEn:"Start Bay 1",descJa:"安全確認・右合図を出して発進",descEn:"Check mirrors & right signal before pull-out"},sCurve:{titleJa:"S字コース",titleEn:"S-Curve",descJa:"幅3.6m・内輪差を意識して低速走行",descEn:"3.6m wide S-bend — watch inner rear wheel cut"},crank:{titleJa:"クランクコース",titleEn:"Crank (90°)",descJa:"直角連続カーブ・ポール接触で検定中止",descEn:"Tight 90° chicane — pole contact fails exam"},hillStart:{titleJa:"坂道発進",titleEn:"Hill Start",descJa:"坂の途中で一時停止し、逆行せず発進",descEn:"Stop on slope and pull away without rollback"},railroad:{titleJa:"踏切通過",titleEn:"Railroad Crossing",descJa:"停止線手前で完全停止し左右確認（Z/X）",descEn:"Full stop before line, look Left & Right (Z/X)"},stopSign:{titleJa:"一時停止（止まれ）",titleEn:"Stop Sign",descJa:"停止線手前で完全停止・左右の安全確認",descEn:"Come to complete 0 km/h stop and glance L/R"},trafficLight:{titleJa:"信号交差点",titleEn:"Signal Intersection",descJa:"信号灯火に従い左折・右折の通行帯を守る",descEn:"Obey signal phases and proper turn positioning"},bayParking:{titleJa:"方向変換",titleEn:"Bay Parking",descJa:"バックで車庫に進入し、前向きに出庫",descEn:"Reverse into the T-bay and exit forward"},parallelParking:{titleJa:"縦列駐車",titleEn:"Parallel Parking",descJa:"縁石に沿わせて駐車枠内に収める",descEn:"Reverse neatly into the curbside pocket"},speedStraight:{titleJa:"直線40km/h・障害物",titleEn:"40 km/h & Obstacle",descJa:"直線で加速し、駐車車両を合図付きで回避",descEn:"Accelerate smoothly and signal past obstacle"}},kv={ja:{appTitle:"桜ヶ丘自動車教習所 3Dシミュレーター",appSubtitle:"日本の教習所コース・実技検定再現",modePractice:"自由練習",modeExam:"修了検定 (模擬試験)",scoreLabel:"持ち点",stationMenu:"コース・設定",resetBtn:"リセット (O)",cameraBtn:"視点 (V)",camChase:"後方視点",camCockpit:"運転席 (右ハンドル)",camHood:"ボンネット",camOrbit:"自由カメラ",welcomeTitle:"桜ヶ丘自動車教習所 3Dドライビングシミュレーター",welcomeLead:"実際の日本の教習所（180m×120m）を1:1スケールで再現。S字・クランク・坂道発進・踏切・信号・方向変換・縦列駐車・修了検定をブラウザ上で練習できます。",startTraining:"教習を始める",startExam:"修了検定を開始",controlsHeading:"基本操作（右ハンドル・左側通行）",ctrlDrive:"W / S または ↑ / ↓ : アクセル / ブレーキ",ctrlSteer:"A / D または ← / → : ハンドル操作",ctrlSignal:"Q / E : 左・右ウインカー　H : ハザード",ctrlGear:"Shift / Ctrl : ギア変更 (P/R/N/D・1-5)",ctrlLook:"Z / X : 左・右の安全確認（目視）",ctrlBrake:"Space : サイドブレーキ　C : クラッチ(MT)　I : エンジン始動",ctrlView:"V : カメラ切替　O : 現在地点へリセット　M : メニュー",tabStations:"課題ワープ",tabSettings:"車両・設定",tabCustomMap:"カスタム地図",vehicleLabel:"車種",vehicleSedan:"教習車セダン (右ハンドル)",vehicleMoto:"普通二輪 (400cc)",transLabel:"変速機",transAT:"AT (オートマ)",transMT:"MT (マニュアル)",steerSensLabel:"ハンドル感度",autoCenterLabel:"ハンドル自動復元",mirrorQualityLabel:"ミラー描画品質",mirrorHigh:"高画質",mirrorLow:"軽量",mirrorOff:"オフ",volumeLabel:"音量",touchControlsLabel:"タッチ操作パネル表示",customMapHint:"航空写真や教習所コース図(PNG/JPG/WebP)をアップロードし、実際の横幅(m)に合わせて走行できます。",uploadMapLabel:"コース画像をアップロード",mapWidthLabel:"コース横幅 (m)",setSpawnHere:"現在位置を開始地点に設定",useKyoshujo:"3D教習所コースへ戻る",useCustomMap:"カスタム地図で走行",clearCustomMap:"カスタム地図を削除",stalledWarning:"エンスト！ [I] キーまたはボタンで再始動",restartEngine:"エンジン始動 (I)",handbrakeOn:"サイドブレーキ作動中",curbWarning:"縁石接近",examPassStamp:"合格",examFailStamp:"不合格",examResultTitle:"運転技能検定 採点表",examTerminatedSub:"危険行為・重大違反のため検定中止となりました",examPassedSub:"合格基準（70点以上）を達成しました",examFailedSub:"合格点（70点）に届きませんでした",examFinalScore:"最終得点",examElapsed:"所要時間",examDistance:"走行距離",examNoViolations:"減点なし！模範的な運転です。",retryExam:"もう一度検定を受ける",practiceWeak:"苦手課題を練習する",closeModal:"練習を続ける",practiceGuideFree:"左上のコースメニューから各課題へワープ、または「修了検定」を開始できます。",minimapNorth:"北上",minimapFollow:"進行方向"},en:{appTitle:"Sakuragaoka Driving School 3D Simulator",appSubtitle:"Authentic Japanese Kyoshujo Training & Exam",modePractice:"Free Practice",modeExam:"Mock Exam",scoreLabel:"Score",stationMenu:"Menu / Warp",resetBtn:"Reset (O)",cameraBtn:"View (V)",camChase:"Chase",camCockpit:"Cockpit (RHD)",camHood:"Hood",camOrbit:"Orbit",welcomeTitle:"Sakuragaoka Japanese Driving School Simulator",welcomeLead:"Full 1:1 scale 180m × 120m Japanese Kyoshujo compound. Practice S-Curve, 90° Crank, Hill Start, Railroad Crossing, Stop Signs, Signals, Bay & Parallel Parking, or take the 100-point Mock Exam.",startTraining:"Start Practice",startExam:"Start Mock Exam",controlsHeading:"Controls (Right-Hand Drive · Keep Left)",ctrlDrive:"W / S or ↑ / ↓ : Throttle / Foot Brake",ctrlSteer:"A / D or ← / → : Steering Wheel",ctrlSignal:"Q / E : Left / Right Blinker   H : Hazard",ctrlGear:"Shift / Ctrl : Shift Gear (P/R/N/D or 1-5)",ctrlLook:"Z / X : Safety Glance Left / Right",ctrlBrake:"Space : Handbrake   C : Clutch (MT)   I : Ignition",ctrlView:"V : Camera   O : Reset Vehicle   M : Menu",tabStations:"Stations",tabSettings:"Vehicle & Setup",tabCustomMap:"Custom Map",vehicleLabel:"Vehicle",vehicleSedan:"Sedan (RHD Kyoshusha)",vehicleMoto:"Motorcycle (400cc)",transLabel:"Transmission",transAT:"AT (Automatic)",transMT:"MT (Manual)",steerSensLabel:"Steering Sensitivity",autoCenterLabel:"Auto-Center Steering",mirrorQualityLabel:"Mirror Reflections",mirrorHigh:"High",mirrorLow:"Low",mirrorOff:"Off",volumeLabel:"Master Volume",touchControlsLabel:"Show Touch Controls",customMapHint:"Upload any top-down driving center map image (PNG/JPG/WebP), calibrate real width in meters, and drive directly on it.",uploadMapLabel:"Upload Map Image",mapWidthLabel:"Map Width (meters)",setSpawnHere:"Set Current Position as Spawn",useKyoshujo:"Switch to 3D Kyoshujo",useCustomMap:"Drive Custom Map",clearCustomMap:"Clear Saved Map",stalledWarning:"Engine Stalled! Press [I] or tap to restart",restartEngine:"Start Engine (I)",handbrakeOn:"Handbrake Engaged",curbWarning:"Curb Close",examPassStamp:"PASS",examFailStamp:"FAIL",examResultTitle:"Practical Driving Exam Score Sheet",examTerminatedSub:"Exam terminated immediately due to a major safety violation",examPassedSub:"Passed with 70 points or higher",examFailedSub:"Score fell below the 70-point passing threshold",examFinalScore:"Final Score",examElapsed:"Time",examDistance:"Distance",examNoViolations:"Zero deductions — exemplary Japanese driving technique!",retryExam:"Retry Exam",practiceWeak:"Practice Weak Area",closeModal:"Continue Free Practice",practiceGuideFree:"Open Menu (M) to warp to any course obstacle or start a full 100-point Mock Exam.",minimapNorth:"North-Up",minimapFollow:"Heading-Up"}};function Wn(i,t){return kv[i][t]}class Nv{constructor(t){yt(this,"keys",new Set);yt(this,"touchThrottle",0);yt(this,"touchBrake",0);yt(this,"touchLookLeft",!1);yt(this,"touchLookRight",!1);yt(this,"analogSteer",null);yt(this,"actions");yt(this,"handleBlur",()=>{this.keys.clear(),this.touchThrottle=0,this.touchBrake=0,this.touchLookLeft=!1,this.touchLookRight=!1,this.analogSteer=null});yt(this,"handleKeyDown",t=>{const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"))return;this.actions.onAnyInteraction();const n=t.code;(n==="Space"||n==="ArrowUp"||n==="ArrowDown"||n==="ArrowLeft"||n==="ArrowRight")&&t.preventDefault(),t.repeat||(n==="KeyQ"?this.actions.onToggleBlinker("left"):n==="KeyE"?this.actions.onToggleBlinker("right"):n==="KeyH"?this.actions.onToggleBlinker("hazard"):n==="Space"?this.actions.onToggleHandbrake():n==="ShiftLeft"||n==="ShiftRight"||n==="BracketRight"?this.actions.onShiftGear(1):n==="ControlLeft"||n==="ControlRight"||n==="BracketLeft"?this.actions.onShiftGear(-1):n==="KeyV"?this.actions.onCycleCamera():n==="KeyO"?this.actions.onResetVehicle():n==="KeyM"?this.actions.onToggleMenu():n==="KeyI"&&this.actions.onIgnition()),this.keys.add(n)});yt(this,"handleKeyUp",t=>{this.keys.delete(t.code)});this.actions=t,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}bindTouchControls(t){const e=t.querySelector('[data-touch="steer"]'),n=t.querySelector('[data-touch="steer-knob"]'),s=t.querySelector('[data-touch="throttle"]'),r=t.querySelector('[data-touch="brake"]'),o=t.querySelector('[data-touch="look-left"]'),a=t.querySelector('[data-touch="look-right"]');if(e){let c=null,u=0;const h=g=>{const _=g-u,x=54,m=Math.max(-1,Math.min(1,-_/x));this.analogSteer=m,n&&(n.style.transform=`translateX(${Math.max(-x,Math.min(x,_))}px)`)};e.addEventListener("pointerdown",g=>{g.preventDefault(),this.actions.onAnyInteraction(),c=g.pointerId,u=g.clientX,e.setPointerCapture(g.pointerId),h(g.clientX)}),e.addEventListener("pointermove",g=>{g.pointerId===c&&h(g.clientX)});const d=g=>{g.pointerId===c&&(c=null,this.analogSteer=null,n&&(n.style.transform="translateX(0px)"))};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d)}const l=(c,u)=>{if(!c)return;c.addEventListener("pointerdown",d=>{d.preventDefault(),this.actions.onAnyInteraction(),c.setPointerCapture(d.pointerId),c.classList.add("active"),u(!0)});const h=()=>{c.classList.remove("active"),u(!1)};c.addEventListener("pointerup",h),c.addEventListener("pointercancel",h)};l(s,c=>{this.touchThrottle=c?1:0}),l(r,c=>{this.touchBrake=c?1:0}),l(o,c=>{this.touchLookLeft=c}),l(a,c=>{this.touchLookRight=c}),t.querySelectorAll("[data-touch-action]").forEach(c=>{c.addEventListener("click",()=>{this.actions.onAnyInteraction();const u=c.dataset.touchAction;u==="blinker-left"?this.actions.onToggleBlinker("left"):u==="blinker-right"?this.actions.onToggleBlinker("right"):u==="handbrake"?this.actions.onToggleHandbrake():u==="gear-up"?this.actions.onShiftGear(1):u==="gear-down"&&this.actions.onShiftGear(-1)})})}getInputState(){const t=this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0,e=this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0,n=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0,s=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0,r=this.keys.has("KeyC")?1:0;return{throttle:Math.max(t,this.touchThrottle),brake:Math.max(e,this.touchBrake),steerLeft:n,steerRight:s,analogSteerTarget:this.analogSteer,clutch:r,lookLeft:this.keys.has("KeyZ")||this.touchLookLeft,lookRight:this.keys.has("KeyX")||this.touchLookRight}}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}const vh={type:"change"},Gl={type:"start"},Du={type:"end"},Jr=new $h,xh=new Xn,Uv=Math.cos(70*Se.DEG2RAD),Le=new I,qe=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},da=1e-6;class Fv extends Pp{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:as.ROTATE,TWO:as.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Di,this._lastTargetPosition=new I,this._quat=new Di().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Gc,this._sphericalDelta=new Gc,this._scale=1,this._panOffset=new I,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new I,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Bv.bind(this),this._onPointerDown=Ov.bind(this),this._onPointerUp=zv.bind(this),this._onContextMenu=qv.bind(this),this._onMouseWheel=Gv.bind(this),this._onKeyDown=Wv.bind(this),this._onTouchStart=Xv.bind(this),this._onTouchMove=Jv.bind(this),this._onMouseDown=Hv.bind(this),this._onMouseMove=Vv.bind(this),this._interceptControlDown=Yv.bind(this),this._interceptControlUp=$v.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(vh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),s<-Math.PI?s+=qe:s>Math.PI&&(s-=qe),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Le.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Jr.origin.copy(this.object.position),Jr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Jr.direction))<Uv?this.object.lookAt(this.target):(xh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Jr.intersectPlane(xh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>da||8*(1-this._lastQuaternion.dot(this.object.quaternion))>da||this._lastTargetPosition.distanceToSquared(this.target)>da?(this.dispatchEvent(vh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Ov(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Bv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function zv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Du),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Hv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case cs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case cs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Gl)}function Vv(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Gv(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(Gl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Du))}function Wv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case as.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case as.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case as.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case as.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Gl)}function Jv(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function qv(i){this.enabled!==!1&&i.preventDefault()}function Yv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function $v(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class mr extends ft{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new ze;const n=this,s=e.color!==void 0?new ne(e.color):new ne(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||mr.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,u=new Xn,h=new I,d=new I,g=new I,_=new ve,x=new I(0,0,-1),m=new ge,f=new I,S=new I,y=new ge,v=new ve,M=this.camera,E=new di(r,o,{samples:c,type:Ts}),T=new Zn({name:l.name!==void 0?l.name:"unspecified",uniforms:eu.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});T.uniforms.tDiffuse.value=E.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=v,this.material=T,this.onBeforeRender=function(C,b,w){if(d.setFromMatrixPosition(n.matrixWorld),g.setFromMatrixPosition(w.matrixWorld),_.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(_),f.subVectors(d,g),f.dot(h)>0===!0&&this.forceUpdate===!1)return;f.reflect(h).negate(),f.add(d),_.extractRotation(w.matrixWorld),x.set(0,0,-1),x.applyMatrix4(_),x.add(g),S.subVectors(d,x),S.reflect(h).negate(),S.add(d),M.position.copy(f),M.up.set(0,1,0),M.up.applyMatrix4(_),M.up.reflect(h),M.lookAt(S),M.far=w.far,M.updateMatrixWorld(),M.projectionMatrix.copy(w.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(M.projectionMatrix),v.multiply(M.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(M.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const O=M.projectionMatrix;y.x=(Math.sign(m.x)+O.elements[8])/O.elements[0],y.y=(Math.sign(m.y)+O.elements[9])/O.elements[5],y.z=-1,y.w=(1+O.elements[10])/O.elements[14],m.multiplyScalar(2/m.dot(y)),O.elements[2]=m.x,O.elements[6]=m.y,O.elements[10]=m.z+1-a,O.elements[14]=m.w,n.visible=!1;const H=C.getRenderTarget(),Z=C.xr.enabled,W=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(E),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(b,M),C.xr.enabled=Z,C.shadowMap.autoUpdate=W,C.setRenderTarget(H);const $=w.viewport;$!==void 0&&C.state.viewport($),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}mr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function Zv(i,t,e=!0){const n=[],s=(N,X=.5,G=.1)=>new At({color:N,roughness:X,metalness:G}),r=new sl({color:366185,roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.13}),o=new sl({color:3462041,roughness:.3,metalness:.35,clearcoat:1,clearcoatRoughness:.2}),a=s(14014684,.3,.65),l=s(1448221,.65,.3),c=s(1053205,.93,0),u=s(2237482,.96,0),h=s(3882307,.4,.58),d=s(8817554,.32,.7),g=s(14803943,.2,.6);function _(N,X){return N.name=X,N.userData.partName=X,N}function x(N,X){const G=_(new jt,X);return N.add(G),G}function m(N,X,G,K,nt=0,ct=0,R=0){const p=_(new ft(G,K),X);return p.position.set(nt,ct,R),p.castShadow=!0,p.receiveShadow=!0,N.add(p),p}const f=(N,X,G,K,nt,ct,R=0,p=0,P=0)=>m(N,X,new Xt(G,K,nt),ct,R,p,P);function S(N,X,G,K,nt){return m(N,X,new fr(new yo(G.map(ct=>new I(...ct))),40,K,8,!1),nt)}function y(N,X,G,K,nt,ct){const R=new I(...G),p=new I(...K),P=p.clone().sub(R),L=m(N,X,new oe(nt,nt,P.length(),16),ct);return L.position.copy(R.add(p).multiplyScalar(.5)),L.quaternion.setFromUnitVectors(new I(0,1,0),P.normalize()),L}function v(N,X,G,K,nt,ct,R=0,p=0,P=0){const L=m(N,X,new vn(1,36,24),ct,R,p,P);return L.scale.set(G,K,nt),L}function M(N,X,G,K){const nt=[],ct=[];for(const[P,L,B,F]of G)for(let at=0;at<40;at++){const Q=at/40*Math.PI*2;nt.push(Math.cos(Q)*L,(F+B)/2+Math.sin(Q)*((F-B)/2),P)}for(let P=0;P<G.length-1;P++)for(let L=0;L<40;L++){const B=P*40+L,F=P*40+(L+1)%40;ct.push(B,F,F+40,B,F+40,B+40)}for(let P=1;P<39;P++){ct.push(0,P+1,P);const L=(G.length-1)*40;ct.push(L,L+P,L+P+1)}const p=new _e;return p.setAttribute("position",new $t(nt,3)),p.setIndex(ct),p.computeVertexNormals(),m(N,X,p,K)}const E=x(i,"motorcycleRoot"),T=x(i,"bikeCockpitRoot"),C=[[-.28,.065,.77,.86],[-.16,.135,.76,.93],[0,.205,.77,1.02],[.19,.218,.8,1.064],[.34,.184,.83,1.052],[.46,.09,.84,.98],[.49,.025,.87,.93]],b=M(E,"paintedTank",C,r);function w(N,X,G,K){let nt=0;for(;nt<C.length-2&&C[nt+1][0]<N;)nt++;const ct=C[nt],R=C[nt+1],p=(N-ct[0])/(R[0]-ct[0]),P=Se.lerp(ct[1],R[1],p),L=Se.lerp(ct[2],R[2],p),B=Se.lerp(ct[3],R[3],p);return[G*(Math.cos(X)*P+K),(B+L)/2+Math.sin(X)*((B-L)/2),N]}for(const N of[-1,1])for(const[X,G,K,nt]of[["whitePinstripe",0,.004,a],["blackSweep",.025,.005,l],["silverPanel",.064,.006,a]]){const ct=[],R=[],p=[[-.215,-.65,.06],[-.15,-.82,.34],[0,-.75,.65],[.18,-.5,.77],[.29,-.24,.65],[.38,.05,.22]];for(const[B,F,at]of p)for(let Q=0;Q<=12;Q++)ct.push(...w(B,Se.lerp(F+G,at-G,Q/12),N,K));for(let B=0;B<p.length-1;B++)for(let F=0;F<12;F++){const at=B*13+F,Q=at+13;R.push(at,Q,at+1,at+1,Q,Q+1)}const P=new _e;P.setAttribute("position",new $t(ct,3)),P.setIndex(R),P.computeVertexNormals();const L=nt.clone();L.side=Re,m(E,`${X}${N}`,P,L)}const D=m(E,"fuelCap",new oe(.043,.043,.009,32),a,0,1.068,.18);m(D,"lock",new Xt(.018,.004,.008),l,0,.007,0),M(E,"steppedSaddle",[[-.96,.085,.88,.94],[-.85,.145,.855,.966],[-.63,.153,.82,.95],[-.45,.125,.775,.867],[-.27,.108,.775,.837],[-.19,.07,.8,.837]],u),M(E,"paintedTailCowl",[[-1.02,.035,.86,.91],[-.93,.11,.815,.88],[-.73,.151,.76,.849],[-.5,.125,.73,.81],[-.31,.08,.725,.77]],r);for(const N of[-1,1]){S(E,`tailSilverStripe${N}`,[[N*.11,.85,-.94],[N*.153,.82,-.76],[N*.13,.78,-.52],[N*.09,.75,-.35]],.012,a),S(E,`grabRail${N}`,[[N*.14,.87,-.65],[N*.18,.92,-.86],[N*.12,.94,-1]],.014,d);const X=new fs;X.moveTo(-.5,.8),X.quadraticCurveTo(-.34,.82,-.17,.78),X.lineTo(-.25,.6),X.quadraticCurveTo(-.37,.6,-.5,.8);const G=new ar(X,{depth:.015,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008,curveSegments:16}),K=m(E,`sideCover${N}`,G,r,N*.14);K.rotation.y=Math.PI/2,K.scale.x=-1,S(E,`frameCradle${N}`,[[N*.12,.94,.38],[N*.16,.72,.3],[N*.18,.3,.15],[N*.17,.29,-.25],[N*.14,.71,-.48],[N*.12,.87,-.7]],.018,l),y(E,`seatSubframe${N}`,[N*.12,.63,-.35],[N*.12,.88,-.94],.019,l),y(E,`swingarm${N}`,[N*.13,.43,-.2],[N*.135,.315,-.715],.024,d),y(E,`shockShaft${N}`,[N*.168,.36,-.72],[N*.168,.79,-.55],.017,t);const nt=[],ct=new I(N*.168,.39,-.71),R=new I(N*.168,.74,-.57);for(let p=0;p<=96;p++){const P=p/96,L=P*Math.PI*2*10,B=ct.clone().lerp(R,P);nt.push([B.x+Math.cos(L)*.033,B.y+Math.sin(L)*.013,B.z+Math.sin(L)*.031])}S(E,`shockSpring${N}`,nt,.0065,o),y(E,`footpeg${N}`,[N*.15,.44,-.23],[N*.29,.44,-.23],.017,l),f(E,`heelPlate${N}`,.016,.11,.19,a,N*.19,.45,-.32)}v(E,"crankcase",.225,.17,.24,h,0,.48,0);for(const N of[-1,1]){const X=m(E,`engineCover${N}`,new oe(.124,.124,.045,40),h,N*.228,.46,-.05);X.rotation.z=Math.PI/2;const G=m(E,`clutchCover${N}`,new oe(.073,.073,.026,32),d,N*.236,.43,.135);G.rotation.z=Math.PI/2}for(let N=0;N<4;N++){const X=(N-1.5)*.095;f(E,`cylinder${N}`,.084,.21,.18,h,X,.65,.115);for(let G=0;G<7;G++)f(E,`coolingFin${N}:${G}`,.091,.008,.19,d,X,.58+G*.024,.12);S(E,`header${N}`,[[X,.715,.22],[X,.64,.33],[X,.4,.34],[X,.235,.2],[X*.65,.225,-.13],[-.16,.26,-.37]],.022,g)}f(E,"camCover",.43,.065,.235,h,0,.802,.12),f(E,"radiator",.32,.2,.055,l,0,.7,.335),S(E,"collector",[[-.16,.26,-.37],[-.24,.3,-.48],[-.26,.39,-.62]],.041,g),y(E,"chromeSilencer",[-.265,.37,-.49],[-.265,.56,-.98],.063,g),y(E,"exhaustOutlet",[-.265,.56,-.98],[-.265,.57,-1.01],.045,l);function O(N,X,G){const K=x(N,X),nt=m(K,"tire",new Pn(.262,.053,16,48),c);nt.rotation.y=Math.PI/2,nt.scale.z=G/.106;const ct=m(K,"rim",new Pn(.218,.014,10,36),l);ct.rotation.y=Math.PI/2;const R=m(K,"hub",new oe(.048,.048,G+.018,24),d);R.rotation.z=Math.PI/2;for(const p of[-1,1]){for(let L=0;L<6;L++){const B=L/6*Math.PI*2;y(K,`spoke${p}:${L}`,[p*.026,Math.sin(B)*.047,Math.cos(B)*.047],[p*.044,Math.sin(B+.13)*.211,Math.cos(B+.13)*.211],.014,l)}const P=m(K,`brakeDisc${p}`,new Cn(.093,.146,36),a,p*(G/2+.014));P.rotation.y=p*Math.PI/2}return{group:K,tire:nt,rim:ct,hub:R}}const H=x(E,"bikeFrontWheelPivot");H.position.set(0,.315,.72);const Z=O(H,"frontWheel",.12),W=x(E,"bikeRearWheelMount");W.position.set(0,.315,-.715);const $=O(W,"rearWheel",.16);m(W,"rearSprocket",new Cn(.048,.12,32),d,.096,0,0).rotation.y=Math.PI/2,S(E,"driveChain",[[.105,.4,-.71],[.105,.5,-.24],[.105,.42,-.15],[.105,.23,-.69],[.105,.25,-.82],[.105,.35,-.83],[.105,.4,-.71]],.009,d);for(const N of[-1,1])y(H,`forkChrome${N}`,[N*.095,.08,-.03],[N*.095,.63,-.27],.021,t),y(H,`forkSlider${N}`,[N*.095,0,0],[N*.095,.32,-.137],.031,l),f(H,`brakeCaliper${N}`,.048,.1,.056,l,N*.098,.04,-.115);const et=r.clone();et.side=Re;const J=[],gt=[];for(let N=0;N<=24;N++){const X=-1.13+N/24*2.26;for(let G=0;G<=6;G++){const K=(G/6-.5)*.15;J.push(K,Math.cos(X)*(.359-.01*(K/.075)**2),Math.sin(X)*.359)}}for(let N=0;N<24;N++)for(let X=0;X<6;X++){const G=N*7+X;gt.push(G,G+7,G+1,G+1,G+7,G+8)}const pt=new _e;pt.setAttribute("position",new $t(J,3)),pt.setIndex(gt),pt.computeVertexNormals(),m(H,"frontFender",pt,et),f(E,"rearMudguard",.14,.035,.27,l,0,.68,-.94).rotation.x=.5;function Et(N,X,G,K){const nt=x(N,X);nt.position.set(0,G,K),S(nt,"chromeHandlebar",[[-.36,0,-.06],[-.24,.014,-.04],[-.16,.005,-.01],[-.1,-.035,.025],[.1,-.035,.025],[.16,.005,-.01],[.24,.014,-.04],[.36,0,-.06]],.012,t);for(const ct of[-1,1]){y(nt,`grip${ct}`,[ct*.26,.009,-.05],[ct*.37,0,-.065],.022,c),f(nt,`switchBlock${ct}`,.045,.041,.052,l,ct*.235,.013,-.04),S(nt,`lever${ct}`,[[ct*.21,.013,-.006],[ct*.3,.019,.017],[ct*.37,.014,-.005]],.0065,a),y(nt,`mirrorBoot${ct}`,[ct*.235,.02,-.025],[ct*.245,.075,-.02],.012,l),S(nt,`mirrorStem${ct}`,[[ct*.245,.07,-.02],[ct*.26,.115,.008],[ct*.34,.165,.04],[ct*.425,.22,.075]],.0055,g),v(nt,`roundMirror${ct}`,.059,.059,.012,l,ct*.465,.245,.085);const R=new Li(1,32),p=_(e?new mr(R,{color:11974326,textureWidth:256,textureHeight:256,multisample:0,clipBias:.001}):new ft(R,s(10992584,.08,.8)),`mirrorGlass${ct}`);p.position.set(ct*.465,.245,.071),p.scale.set(.055,.055,1),p.rotation.set(0,Math.PI,0),nt.add(p),n.push(p);const P=m(nt,`mirrorBezel${ct}`,new Cn(1,1.07,32),g,ct*.465,.245,.07);P.scale.copy(p.scale),P.rotation.copy(p.rotation)}return f(nt,"upperTripleClamp",.25,.028,.105,l,0,-.1,.055),nt}const Ut=Et(E,"bikeHandlebar",1.035,.4),Yt=m(E,"roundHeadlightBucket",new oe(.095,.092,.105,32),t,0,.947,.585);Yt.rotation.x=Math.PI/2;const ie=new At({color:16053740,emissive:16777185,emissiveIntensity:.5,roughness:.15});m(E,"headlightLens",new Li(.086,32),ie,0,.947,.64),m(E,"headlightRim",new Pn(.09,.006,8,32),t,0,.947,.645);let Zt=0,tt=.22;const lt=[];function _t(N,X,G,K,nt,ct,R){const p=x(N,X);p.position.set(G,K,nt),p.rotation.x=-.42;const P=m(p,"meterBucket",new oe(.068,.068,.065,24),l,0,0,.018);P.rotation.x=Math.PI/2,m(p,"chromeMeterRim",new Pn(.065,.005,8,28),t,0,0,-.019);const L=document.createElement("canvas");L.width=256,L.height=256;const B=L.getContext("2d"),F=new mn(L);F.colorSpace=ye;const at=m(p,"instrumentFace",new Li(.061,28),new Be({map:F,toneMapped:!1}),0,0,-.02);return at.rotation.y=Math.PI,lt.push({ctx:B,texture:F,max:ct,isRpm:R}),p}function Lt(N,X){f(N,`${X}InstrumentBridge`,.245,.034,.067,l,0,-.005,.124),f(N,`${X}CenterPod`,.05,.081,.049,l,0,.051,.137),_t(N,`${X}Speedometer`,.079,.064,.143,180,!1),_t(N,`${X}Tachometer`,-.079,.064,.143,13,!0)}Lt(Ut,"exterior");const Dt=b.clone();Dt.position.set(0,.16,.08),T.add(Dt);const Jt=Et(T,"bikeCockpitBar",1.17,.52);Lt(Jt,"cockpit");let re="";function k(N,X){Zt=Math.round(Math.abs(N)*3.6),tt=Math.round(X*40)/40;const G=`${Zt}/${tt}`;if(G!==re){re=G;for(const K of lt){const nt=K.ctx;nt.fillStyle="#10171d",nt.fillRect(0,0,256,256),nt.textAlign="center";for(let p=0;p<=12;p++){const P=Math.PI*(.75+1.5*p/12);nt.strokeStyle=p>10?"#ee4a50":"#d7e3e9",nt.lineWidth=p%2?2:4,nt.beginPath(),nt.moveTo(128+Math.cos(P)*91,128+Math.sin(P)*91),nt.lineTo(128+Math.cos(P)*109,128+Math.sin(P)*109),nt.stroke(),p%2===0&&(nt.fillStyle="#e3eaef",nt.font="15px sans-serif",nt.fillText(String(Math.round(p/12*K.max)),128+Math.cos(P)*76,133+Math.sin(P)*76))}const ct=K.isRpm?tt*12:Zt,R=Math.PI*(.75+1.5*Math.min(ct/K.max,1));nt.strokeStyle="#ff5147",nt.lineWidth=4,nt.beginPath(),nt.moveTo(128,128),nt.lineTo(128+Math.cos(R)*90,128+Math.sin(R)*90),nt.stroke(),nt.fillStyle="#c5d7df",nt.font="14px sans-serif",nt.fillText(K.isRpm?"×1000":"km/h",128,176),nt.fillStyle="#172c31",nt.fillRect(94,189,68,25),nt.fillStyle="#b6e2d4",nt.font="18px monospace",nt.fillText(K.isRpm?String(Math.round(tt*12e3)):String(Zt),128,208),K.texture.needsUpdate=!0}}}k(0,.22);function rt(N,X,G,K,nt,ct=.056){const R=new At({color:nt,emissive:nt,emissiveIntensity:.02,roughness:.25});return{mesh:f(E,N,ct,.034,.036,R,X,G,K),material:R}}const it={left:[rt("frontLeftSignal",.16,.905,.584,16753962),rt("rearLeftSignal",.16,.78,-.985,16753962)],right:[rt("frontRightSignal",-.16,.905,.584,16753962),rt("rearRightSignal",-.16,.78,-.985,16753962)]},st=rt("tailLamp",0,.849,-1.012,15014699,.16);return{motorcycleRoot:E,bikeCockpitRoot:T,bikeCockpitBar:Jt,bikeHandlebar:Ut,bikeFrontWheelPivot:H,bikeFrontWheelAssembly:Z,bikeRearWheelAssembly:$,bikeRearWheelMount:W,bikeSignalLamps:it,bikeBrakeLamp:st,updateBikeCockpit:k,mirrorSurfaces:n}}function jv(i,t,e,n,s=!0){const r=new jt;r.name="sedanRoot",i.add(r);const o={sedanRoot:r},a=[];o.mirrorSurfaces=a;const l=(p,P=.65,L=0)=>new At({color:p,roughness:P,metalness:L}),c=l(2435116,.88),u=l(4277578,.96),h=l(9213599,.38,.55),d=l(1385262,.16,.4),g=new At({color:15792639,emissive:14282495,emissiveIntensity:.8}),_=new At({color:10097179,emissive:15277353,emissiveIntensity:.28,roughness:.2}),x=new At({color:10929102,roughness:.12,metalness:.12,transparent:!0,opacity:.19,depthWrite:!1,side:Re}),m=(p,P)=>(p.name=P,p.userData.partName=P,p),f=(p,P=r)=>{const L=m(new jt,p);return P.add(L),L},S=p=>o[p]=f(p);function y(p,P,L,B=.025){B=Math.min(B,p/3,P/3,L/3);const F=new fs;F.moveTo(-p/2+B,-P/2+B),F.lineTo(p/2-B,-P/2+B),F.lineTo(p/2-B,P/2-B),F.lineTo(-p/2+B,P/2-B),F.closePath();const at=new ar(F,{depth:L-2*B,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:B,bevelThickness:B});return at.translate(0,0,-L/2+B),at}function v(p,P,L,B,F=0,at=0,Q=0){const St=p.children.filter(j=>j.name===P||j.name.startsWith(`${P}:`)).length,dt=m(new ft(L,B),St?`${P}:${St+1}`:P);return dt.position.set(F,at,Q),dt.castShadow=!B.transparent,dt.receiveShadow=!0,p.add(dt),dt}const M=(p,P,L,B,F,at,Q=0,St=0,dt=0,j=.025)=>v(p,P,y(L,B,F,j),at,Q,St,dt);function E(p,P,L,B){const F=[],at=[];for(const[dt,j,mt,Bt]of L)for(let Pt=0;Pt<32;Pt++){const wt=Pt/32*Math.PI*2,Gt=Math.cos(wt),U=Math.sin(wt);F.push(Math.sign(Gt)*Math.pow(Math.abs(Gt),.42)*j,(Bt+mt)/2+Math.sign(U)*Math.pow(Math.abs(U),.42)*((Bt-mt)/2),dt)}for(let dt=0;dt<L.length-1;dt++)for(let j=0;j<32;j++){const mt=dt*32+j,Bt=dt*32+(j+1)%32;at.push(mt,Bt,Bt+32,mt,Bt+32,mt+32)}for(let dt=1;dt<31;dt++){at.push(0,dt+1,dt);const j=(L.length-1)*32;at.push(j,j+dt,j+dt+1)}const St=new _e;return St.setAttribute("position",new $t(F,3)),St.setIndex(at),St.computeVertexNormals(),v(p,P,St,B)}function T(p,P,L,B,F=.008){const at=new yo(L.map(Q=>new I(...Q)));return v(p,P,new fr(at,Math.max(8,L.length*5),F,5,!1),B)}function C(p,P,L,B){const F=new _e;return F.setAttribute("position",new $t(L.flat(),3)),F.setIndex([0,1,2,0,2,3]),F.computeVertexNormals(),v(p,P,F,B)}const b=new At({color:3462041,roughness:.35,metalness:.2,side:Re});function w(p,P,L,B,F=.06){const at=f("gaimengoEmblem",p);return at.position.set(P,L,B),v(at,"badgeRing",new Pn(F,F*.12,6,32),e),v(at,"badgeDisc",new Li(F*.86,32),b),at}function D(p,P,L,B,F,at){const Q=f(P,p);Q.position.set(...F);const dt=new I(-.36,1.245,-.38).sub(Q.position).normalize().add(new I(...at).normalize()).normalize();Q.quaternion.setFromRotationMatrix(new ve().lookAt(dt,new I,new I(0,1,0))),M(Q,"mirrorFrame",L+.022,B+.022,.024,n,0,0,-.015,.006);const j=new He(L,B),mt=m(s?new mr(j,{color:11974326,textureWidth:256,textureHeight:256,clipBias:.001,multisample:0}):new ft(j,l(10597570,.08,.85)),"reflectiveGlass");if(Q.add(mt),a.push(mt),s&&mt.onBeforeRender){const Bt=mt.onBeforeRender;mt.onBeforeRender=function(Pt,wt,Gt){if(Gt.userData.skipCarMirrors)return;const U=performance.now(),xt=Gt.userData.carMirrorInterval||0;if(xt&&U-(this.userData.reflectedAt||0)<xt)return;this.userData.reflectedAt=U;const bt=a.map(It=>It.visible),kt=Pt.getViewport(new ge),vt=Pt.getScissor(new ge),ot=Pt.getScissorTest();a.forEach(It=>{It!==mt&&(It.visible=!1)}),Pt.setScissorTest(!1);try{Bt.call(this,Pt,wt,Gt)}finally{a.forEach((It,qt)=>{It.visible=bt[qt]}),Pt.setViewport(kt),Pt.setScissor(vt),Pt.setScissorTest(ot)}}}return Q}const O=S("body"),H=new fs;H.moveTo(-2.26,.3),H.lineTo(-2.26,.76),H.quadraticCurveTo(-2.15,.94,-1.6,.97),H.lineTo(.95,.94),H.quadraticCurveTo(1.95,.94,2.24,.78),H.lineTo(2.24,.3),H.lineTo(1.72,.3),H.absarc(1.35,.315,.371,0,Math.PI,!1),H.lineTo(-.979,.3),H.absarc(-1.35,.315,.371,0,Math.PI,!1),H.closePath();const Z=new ar(H,{depth:.055,bevelEnabled:!0,bevelSegments:3,bevelSize:.018,bevelThickness:.018,curveSegments:32}),W=Z.attributes.position;for(let p=0;p<W.count;p++){const P=W.getX(p),L=W.getY(p),B=Math.max(0,L-.77)*.24,F=Math.pow(Math.min(Math.abs(P)/2.3,1),5)*.048;W.setZ(p,W.getZ(p)-B-F)}Z.computeVertexNormals();for(const p of[-1,1]){const P=v(O,`sideSkin${p}`,Z,t,p*.825);P.rotation.y=p*Math.PI/2,p===1&&(P.scale.x=-1);for(const L of[-1.35,1.35]){const B=[];for(let F=0;F<=28;F++){const at=F/28*Math.PI;B.push([p*.885,.315+Math.sin(at)*.382,L+Math.cos(at)*.382])}T(O,"fenderLip",B,t,.018)}T(O,"shoulderCrease",[[p*.86,.81,-2.04],[p*.898,.88,-.9],[p*.898,.87,.7],[p*.855,.8,1.98]],h,.003);for(const L of[-.48,.67])T(O,"doorShutline",[[p*.898,.93,L],[p*.899,.63,L-.02],[p*.88,.36,L-.07]],n,.0035),M(O,"doorHandle",.026,.032,.15,t,p*.912,.84,L-.19,.01);M(O,"rocker",.07,.08,1.9,t,p*.85,.3,0)}M(O,"underbody",1.55,.08,3.65,n,0,.24,0);const $=S("shoulderShell");for(const p of[-1,1])M($,"beltLine",.12,.09,2.5,t,p*.81,.94,-.2);const et=S("hood");E(et,"bonnet",[[.94,.785,.943,1.012],[1.15,.817,.929,1],[1.75,.822,.884,.965],[2.1,.785,.859,.932],[2.23,.71,.85,.912]],t);for(const p of[-1,1])T(et,"bonnetCrease",[[p*.57,1.01,.99],[p*.49,.981,1.6],[p*.38,.945,2.15]],t,.009);const J=S("trunk");E(J,"bootLid",[[-2.275,.74,.902,.958],[-2.16,.835,.905,.99],[-1.85,.85,.916,1.004],[-1.51,.79,.925,1.015]],t),M(J,"bootFace",1.64,.24,.07,t,0,.8,-2.255),w(J,0,.86,-2.299,.039);const gt=S("frontBumper");E(gt,"bumper",[[1.98,.848,.3,.823],[2.15,.875,.295,.846],[2.25,.834,.31,.854],[2.318,.753,.34,.848]],t);const pt=S("rearBumper");E(pt,"bumper",[[-2.323,.746,.345,.636],[-2.28,.836,.32,.655],[-2.16,.873,.31,.665],[-2.02,.846,.32,.66]],t),M(pt,"lowerValance",1.36,.105,.03,n,0,.335,-2.321);for(const p of[-1,1])M(pt,"reflector",.19,.033,.016,_,p*.66,.48,-2.327);const Et=S("grille"),Ut=new fs;Ut.moveTo(-.52,.735),Ut.lineTo(.52,.735),Ut.lineTo(.715,.385),Ut.quadraticCurveTo(0,.315,-.715,.385),Ut.closePath(),v(Et,"trapezoidIntake",new zl(Ut),n,0,0,2.323);for(let p=0;p<7;p++){const P=.39+p*.046,L=.7-p*.026;M(Et,"grilleSlat",L*2,.012,.014,l(3423040,.45,.15),0,P,2.331,.003)}M(Et,"upperIntake",1.26,.063,.035,n,0,.825,2.276),T(Et,"chromeWing",[[-.71,.87,2.273],[-.36,.847,2.308],[0,.848,2.319],[.36,.847,2.308],[.71,.87,2.273]],e,.01),w(Et,0,.862,2.343,.041);const Yt=S("cabin"),ie=S("roofPanel");M(ie,"roof",1.39,.075,1.14,t,0,1.435,-.23,.024),M(ie,"headliner",1.32,.021,1.11,u,0,1.388,-.23,.006);for(const[p,P,L]of[["aPillarL",-1,!1],["aPillarR",1,!1],["cPillarL",-1,!0],["cPillarR",1,!0]]){const B=S(p);T(B,"paintedPillar",[[P*.81,.97,L?-1.57:1],[P*.735,1.2,L?-1.19:.65],[P*.66,1.435,L?-.8:.31]],t,L?.065:.031),T(B,"pillarLining",[[P*.779,.978,L?-1.54:.99],[P*.705,1.2,L?-1.18:.64],[P*.637,1.418,L?-.79:.3]],u,L?.033:.019)}const Zt=S("windshield");C(Zt,"glass",[[-.78,.99,1],[.78,.99,1],[.65,1.413,.32],[-.65,1.413,.32]],x);const tt=S("rearWindow");C(tt,"glass",[[.76,1.005,-1.53],[-.76,1.005,-1.53],[-.64,1.415,-.79],[.64,1.415,-.79]],x);for(const[p,P]of[["sideWindowL",-1],["sideWindowR",1]]){const L=S(p);C(L,"glass",[[P*.816,.986,.97],[P*.816,.986,-1.5],[P*.665,1.412,-.78],[P*.665,1.412,.3]],x),T(Yt,"bPillar",[[P*.814,.97,-.37],[P*.667,1.413,-.37]],n,.033),T(Yt,"windowSurround",[[P*.816,.975,.98],[P*.664,1.422,.3],[P*.666,1.426,-.77],[P*.816,.981,-1.5]],n,.009)}for(const[p,P]of[["roofRailL",-1],["roofRailR",1]]){const L=S(p);T(L,"roofSeam",[[P*.65,1.465,.25],[P*.66,1.475,-.24],[P*.65,1.465,-.74]],n,.003)}const lt=v(ie,"sharkFin",new ds(.042,.09,4),t,0,1.508,-.66);lt.scale.z=1.7;for(const[p,P]of[["headlightL",-1],["headlightR",1]]){const L=S(p);L.position.set(P*.653,.848,2.197),L.rotation.y=P*.16,M(L,"smokedHousing",.43,.108,.13,d,0,0,0,.028);for(const B of[-.1,.025])v(L,"projector",new oe(.027,.027,.012,20),g,B,.01,.072).rotation.x=Math.PI/2;T(L,"ledSignature",[[-.192,.027,.073],[-.13,-.03,.073],[.14,-.03,.073],[.193,.021,.073]],g,.008)}for(const[p,P]of[["taillightL",-1],["taillightR",1]]){const L=S(p);L.position.set(P*.622,.835,-2.278),M(L,"redHousing",.43,.104,.061,_,0,0,0,.02),T(L,"lightSignature",[[-.19,.03,-.04],[.19,.03,-.04],[.13,-.032,-.04],[-.17,-.032,-.04]],_,.012)}for(const[p,P]of[["sideMirrorL",-1],["sideMirrorR",1]]){const L=S(p);M(L,"mirrorStalk",.17,.032,.054,n,P*.866,1.027,.72);const B=D(L,"sideMirrorFace",.15,.061,[P*.97,1.064,.582],[P*.15,-.05,-1]);M(B,"mirrorCap",.19,.1,.19,t,0,0,-.12,.027)}const _t=S("dashboard");M(_t,"cabinFloor",1.58,.08,2.58,c,0,.335,-.28),M(_t,"firewall",1.55,.56,.09,c,0,.615,.9);for(const p of[-1,1])M(_t,"lowerDoorLining",.075,.23,2.15,c,p*.766,.46,-.13),M(_t,"carpetMat",.53,.018,.8,n,p*.39,.383,.1,.004);M(_t,"mirrorStem",.025,.09,.035,n,.03,1.354,.405,.007),D(_t,"centerMirror",.245,.083,[.03,1.287,.39],[0,-.02,-1]),M(_t,"softDashTop",1.56,.13,.56,c,0,.915,.69,.035),M(_t,"lowerDash",1.51,.17,.26,u,0,.797,.6,.034),T(_t,"satinDashAccent",[[-.74,.86,.408],[-.43,.863,.399],[0,.862,.397],[.46,.864,.398],[.74,.885,.414]],h,.007);for(const p of[-.665,-.11,.115,.665]){M(_t,"ventFrame",.16,.062,.021,h,p,.875,.386,.005),M(_t,"ventRecess",.143,.047,.013,n,p,.875,.372,.004);for(let P=-1;P<=1;P++)M(_t,"ventSlat",.13,.003,.009,u,p,.875+P*.013,.362,8e-4)}M(_t,"climatePanel",.38,.073,.038,n,.015,.761,.432,.01);for(const p of[-.135,.16]){const P=v(_t,"climateKnob",new oe(.026,.026,.018,24),h,p,.761,.407);P.rotation.x=Math.PI/2}M(_t,"centerTunnel",.25,.17,.95,c,.015,.5,-.04),M(_t,"shiftSurround",.19,.017,.28,h,.015,.596,.18,.005),M(_t,"shiftBoot",.11,.07,.14,n,.015,.634,.18),M(_t,"gearSelector",.065,.1,.07,c,.015,.704,.18);for(const p of[-.1,-.28])v(_t,"cupWell",new oe(.057,.047,.012,24),n,.015,.59,p),v(_t,"cupRim",new Pn(.057,.004,6,24),h,.015,.597,p).rotation.x=Math.PI/2;M(_t,"armrest",.25,.085,.28,c,.015,.64,-.51);for(const p of[-1,1])M(_t,"doorCard",.047,.42,1.3,c,p*.79,.74,-.03),M(_t,"doorArmrest",.1,.048,.57,u,p*.738,.72,.07),T(_t,"doorTrim",[[p*.757,.875,.5],[p*.757,.857,.1],[p*.757,.8,-.5]],h,.006),M(_t,"doorPull",.014,.029,.12,e,p*.755,.84,.28,.004);const Lt=S("steeringWheel");Lt.position.set(-.36,.971,.16),Lt.rotation.x=-.22,v(Lt,"leatherRim",new Pn(.174,.019,12,64),c),M(Lt,"airbag",.137,.105,.055,c,0,-.005,0,.016);for(const p of[-1,1]){M(Lt,"horizontalSpoke",.11,.046,.028,c,p*.112,-.008,0),M(Lt,"spokeTrim",.081,.009,.014,h,p*.113,-.031,-.018,.002);for(let P=0;P<3;P++)M(Lt,"controlButton",.014,.011,.006,h,p*(.084+P*.025),.002,-.019,.001)}M(Lt,"lowerSpoke",.05,.098,.025,h,0,-.116,0),w(Lt,0,.009,-.035,.021);for(const p of[-1,1])M(_t,"columnStalk",.15,.019,.025,n,-.36+p*.14,.971,.24,.006);function Dt(p,P,L,B,F,at=[768,320]){const Q=document.createElement("canvas");Q.width=at[0],Q.height=at[1];const St=Q.getContext("2d");F(St,Q.width,Q.height);const dt=new mn(Q);dt.colorSpace=ye;const j=v(p,P,new He(L,B),new Be({map:dt,toneMapped:!1}));return j.rotation.y=Math.PI,j.castShadow=!1,{ctx:St,texture:dt,screen:j}}const Jt=S("instrumentCluster");Jt.position.set(-.36,.973,.399),Jt.rotation.x=-.15,M(Jt,"clusterHousing",.47,.17,.066,n,0,0,.027,.02),M(Jt,"clusterHood",.49,.023,.13,c,0,.083,.014,.007);let re=0,k=.18,rt="N",it="off";function st(p,P,L){p.fillStyle="#071017",p.fillRect(0,0,P,L);const B=(F,at,Q,St)=>{p.strokeStyle="#304652",p.lineWidth=8,p.beginPath(),p.arc(F,163,116,.75*Math.PI,2.25*Math.PI),p.stroke();for(let j=0;j<=12;j++){const mt=Math.PI*(.75+1.5*j/12);p.strokeStyle=j>10?"#ff655b":"#d0dee7",p.lineWidth=j%2?2:4,p.beginPath(),p.moveTo(F+Math.cos(mt)*96,163+Math.sin(mt)*96),p.lineTo(F+Math.cos(mt)*110,163+Math.sin(mt)*110),p.stroke(),j%2||(p.fillStyle="#c6d5df",p.font="16px sans-serif",p.textAlign="center",p.fillText(String(Math.round(j/12*Q)),F+Math.cos(mt)*79,169+Math.sin(mt)*79))}const dt=Math.PI*(.75+1.5*Math.min(at/Q,1));p.strokeStyle="#f65b4f",p.lineWidth=4,p.beginPath(),p.moveTo(F,163),p.lineTo(F+Math.cos(dt)*89,163+Math.sin(dt)*89),p.stroke(),p.fillStyle="#c3d4df",p.font="18px sans-serif",p.textAlign="center",p.fillText(St,F,240)};B(151,k*8,8,"×1000"),B(617,re,240,"km/h"),p.textAlign="center",p.fillStyle="#f2f7fa",p.font="64px sans-serif",p.fillText(String(re),384,150),p.font="20px sans-serif",p.fillStyle="#9dafbd",p.fillText("km/h",384,182),p.fillStyle="#f2f7fa",p.font="32px sans-serif",p.fillText(rt,384,246),p.fillStyle="#56da9c",p.font="26px sans-serif",(it==="left"||it==="hazard")&&p.fillText("◀",304,48),(it==="right"||it==="hazard")&&p.fillText("▶",464,48)}const N=Dt(Jt,"liveGauges",.43,.139,st);N.screen.position.z=-.009;let X="";o.updateCockpit=(p,P,L,B)=>{re=Math.round(Math.abs(p)*3.6),k=Math.round(P*40)/40,rt=L,it=B;const F=`${re}/${k}/${rt}/${it}`;F!==X&&(X=F,st(N.ctx,768,320),N.texture.needsUpdate=!0)};const G=S("centerScreen");G.position.set(.055,1.04,.438),G.rotation.x=-.1,M(G,"tabletBezel",.33,.206,.028,n,0,0,.015,.009);const K=Dt(G,"mapDisplay",.305,.177,(p,P,L)=>{p.fillStyle="#172632",p.fillRect(0,0,P,L),p.strokeStyle="#344b58",p.lineWidth=10;for(let B=0;B<7;B++)p.beginPath(),p.moveTo(B*140-90,0),p.lineTo(B*140+20,L),p.stroke();for(let B=0;B<4;B++)p.beginPath(),p.moveTo(0,B*90+15),p.lineTo(P,B*90-50),p.stroke();p.strokeStyle="#52b9ee",p.lineWidth=12,p.beginPath(),p.moveTo(380,310),p.lineTo(360,180),p.lineTo(570,155),p.lineTo(550,40),p.stroke(),p.fillStyle="#e6f5ff",p.beginPath(),p.moveTo(358,181),p.lineTo(339,215),p.lineTo(378,207),p.closePath(),p.fill(),p.fillStyle="#0c151e",p.fillRect(0,0,95,L),p.font="32px sans-serif",p.fillStyle="#a8c9dd",p.fillText("⌂",28,65),p.fillText("♪",29,156),p.fillText("⚙",26,255)});K.screen.position.z=-.001;for(const[p,P]of[["driverSeat",-.37],["passengerSeat",.37]]){const L=S(p);L.position.set(P,.55,-.4),M(L,"cushion",.47,.13,.5,c),M(L,"fabricInsert",.29,.025,.4,u,0,.076,.02,.007),M(L,"seatBack",.46,.5,.13,c,0,.27,-.24).rotation.x=-.14,M(L,"backInsert",.3,.37,.034,u,0,.28,-.158).rotation.x=-.14;for(const B of[-.08,.08])M(L,"headrestPost",.011,.1,.012,e,B,.565,-.27,.002);M(L,"headrest",.25,.15,.1,c,0,.65,-.27)}M(Yt,"rearBench",1.36,.15,.45,c,0,.56,-1.09),M(Yt,"rearSeatBack",1.35,.42,.12,c,0,.8,-1.34),o.wheelAssemblies=[];const nt=l(1448219,.93),ct=l(3225664,.32,.65);for(const[p,P,L,B]of[["wheelFL",-.79,1.35,!0],["wheelFR",.79,1.35,!0],["wheelRL",-.79,-1.35,!1],["wheelRR",.79,-1.35,!1]]){const F=f(p);F.position.set(P,.315,L);const at=f("rollingAssembly",F);v(at,"tire",new oe(.315,.315,.205,48),nt).rotation.z=Math.PI/2;for(const Q of[-1,1]){const St=f(`rimFace${Q}`,at);St.position.x=Q*.108,St.rotation.y=Q*Math.PI/2,v(St,"rimBarrel",new oe(.224,.224,.013,48),ct).rotation.x=Math.PI/2,v(St,"machinedLip",new Pn(.224,.01,8,48),h,0,0,.01),v(St,"brakeDisc",new Li(.171,32),h,0,0,.009);for(let dt=0;dt<5;dt++)for(const j of[-.11,.11]){const mt=dt*Math.PI*2/5+j,Bt=M(St,"splitSpoke",.024,.18,.017,e,Math.sin(mt)*.127,Math.cos(mt)*.127,.025,.004);Bt.rotation.z=-mt}v(St,"hub",new oe(.052,.052,.03,20),h,0,0,.026).rotation.x=Math.PI/2;for(let dt=0;dt<5;dt++){const j=dt*Math.PI*2/5;v(St,"lug",new vn(.007,6,4),n,Math.cos(j)*.038,Math.sin(j)*.038,.045)}}o.wheelAssemblies.push({pivot:F,wheel:at,steerable:B,radius:.315})}function R(p,P,L,B,F,at,Q){const St=new At({color:F,emissive:F,emissiveIntensity:.02,roughness:.25});return{mesh:M(r,p,at,Q,.018,St,P,L,B,.005),material:St}}return o.sedanSignalLamps={left:[R("frontSignalL",.795,.862,2.247,16755249,.073,.024),R("rearSignalL",.754,.813,-2.319,16755249,.13,.022)],right:[R("frontSignalR",-.795,.862,2.247,16755249,.073,.024),R("rearSignalR",-.754,.813,-2.319,16755249,.13,.022)]},o.sedanBrakeLamps=[-1,1].map(p=>R(`brake${p}`,p*.59,.86,-2.32,16721461,.28,.025)),o.reverseLamps=[-1,1].map(p=>R(`reverse${p}`,p*.43,.807,-2.32,15660543,.08,.022)),o}function Kv(i){const t=new jt;t.position.set(-.37,.58,-.38);const e=new At({color:1981066,roughness:.65}),n=new At({color:1976635,roughness:.75}),s=new At({color:15843965,roughness:.55}),r=new At({color:1513239,roughness:.8}),o=new At({color:14427686,emissive:8330525,emissiveIntensity:.35,roughness:.35}),a=new At({color:14870768,metalness:.85,roughness:.2}),l=new ft(new Xt(.32,.42,.2),e);l.position.set(0,.24,.04),l.rotation.x=-.08,l.castShadow=!0,t.add(l);for(const w of[-.085,.085]){const D=new ft(new Xt(.12,.11,.36),n);D.position.set(w,.06,.2),D.rotation.x=-.1,t.add(D)}const c=new jt;c.position.set(0,.54,.03);const u=new ft(new oe(.048,.055,.08,12),s);u.position.y=-.03,c.add(u);const h=new ft(new vn(.115,16,14),s);h.position.y=.06,h.scale.set(.92,1.05,.96),h.castShadow=!0,c.add(h);const d=new ft(new vn(.119,14,10,0,Math.PI*2,0,Math.PI*.62),r);d.position.y=.068,d.rotation.x=-.15,c.add(d);const g=new ft(new Xt(.16,.018,.11),new At({color:366185,roughness:.4}));g.position.set(0,.115,.11),g.rotation.x=.12,c.add(g);const _=new ft(new Xt(.15,.032,.025),new At({color:988970,metalness:.5,roughness:.2}));_.position.set(0,.068,.105),c.add(_),t.add(c);const x=new jt;x.position.set(.18,.39,.05);const m=new ft(new Xt(.075,.075,.44),e);m.position.set(-.02,-.04,.21),m.rotation.x=.15,m.rotation.y=-.12;const f=new ft(new vn(.042,10,8),s);f.position.set(-.05,-.06,.43),x.add(m,f),t.add(x);const S=new jt;S.position.set(-.18,.39,.05);const y=new ft(new Xt(.075,.075,.44),e);y.position.set(.02,-.04,.21),y.rotation.x=.15,y.rotation.y=.12;const v=new ft(new vn(.042,10,8),s);v.position.set(.05,-.06,.43),S.add(y,v),t.add(S);const M=new jt,E=new ft(new Xt(.055,.52,.022),o);E.position.set(-.01,.25,.145),E.rotation.z=-.62,E.rotation.x=-.08,M.add(E);const T=new ft(new Xt(.045,.34,.018),o);T.position.set(-.24,.48,-.02),T.rotation.z=.45,M.add(T);const C=new ft(new Xt(.33,.05,.024),o);C.position.set(0,.09,.16),M.add(C);const b=new ft(new Xt(.045,.065,.035),a);return b.position.set(.17,.08,.15),M.add(b),M.visible=!1,t.add(M),i.add(t),{group:t,headGroup:c,seatbeltGroup:M,leftArmGroup:x,rightArmGroup:S}}function ku(i){const t=new jt,e=new jt,n=new jt;n.rotation.y=Math.PI,e.add(n),t.add(e);const s=new sl({color:366185,metalness:.12,roughness:.24,clearcoat:1,clearcoatRoughness:.17}),r=new At({color:14212835,metalness:.92,roughness:.16}),o=new At({color:1316893,metalness:.38,roughness:.58});if(i==="motorcycle"){const c=Zv(n,r,!0);return c.bikeCockpitRoot.visible=!1,{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:null,cb400Parts:c,driverAvatar:null}}const a=jv(n,s,r,o,!0),l=Kv(n);return{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:a,cb400Parts:null,driverAvatar:l}}function yh(i,t){if(i.kind==="motorcycle"&&i.cb400Parts){const e=i.cb400Parts;e.motorcycleRoot.visible=!t,e.bikeCockpitRoot.visible=t;return}if(i.corollaParts){const e=i.corollaParts,n=!t;e.driverSeat&&(e.driverSeat.visible=n),e.frontBumper&&(e.frontBumper.visible=n),e.rearBumper&&(e.rearBumper.visible=n),e.grille&&(e.grille.visible=n),e.headlightL&&(e.headlightL.visible=n),e.headlightR&&(e.headlightR.visible=n),e.taillightL&&(e.taillightL.visible=n),e.taillightR&&(e.taillightR.visible=n),e.roofRailL&&(e.roofRailL.visible=n),e.roofRailR&&(e.roofRailR.visible=n)}i.driverAvatar&&(i.driverAvatar.group.visible=!t)}function Qv(i,t,e){var a,l,c,u;i.root.position.set(t.x,t.y,t.z),i.root.rotation.y=t.heading,i.leanGroup.rotation.x=t.pitch,i.leanGroup.rotation.z=t.roll;const n=t.blinkerOn&&(t.blinker==="left"||t.blinker==="hazard"),s=t.blinkerOn&&(t.blinker==="right"||t.blinker==="hazard"),r=t.braking||t.handbrake,o=Math.max(.18,Math.min(1,(t.rpm-700)/4200));if(i.corollaParts){const h=i.corollaParts;for(const _ of h.wheelAssemblies)_.steerable&&(_.pivot.rotation.y=t.steerAngleRad),_.wheel.rotation.x=t.wheelRotationRad;h.steeringWheel&&(h.steeringWheel.rotation.z=-t.steeringWheelRad);const d=(a=t.preDrive)!=null&&a.seatAdjusted?.06:0;if(h.driverSeat&&(h.driverSeat.position.z=-.4+d),i.driverAvatar){const _=i.driverAvatar;if(_.group.position.z=-.38+d,_.seatbeltGroup.visible=!!((l=t.preDrive)!=null&&l.seatbeltFastened),t.mirrorTouchTimer>0)_.headGroup.rotation.y=.32,_.headGroup.rotation.x=-.22,_.leftArmGroup.rotation.x=-.75,_.leftArmGroup.rotation.y=.35;else{_.headGroup.rotation.y=t.lookAngleRad*.95,_.headGroup.rotation.x=Math.abs(t.lookAngleRad)>.2?.05:0;const x=Se.clamp(t.steerAngleRad*.45,-.35,.35);_.leftArmGroup.rotation.x=x,_.leftArmGroup.rotation.y=0,_.rightArmGroup.rotation.x=-x}}for(const _ of h.sedanSignalLamps.left)_.material.emissiveIntensity=n?2.4:.02;for(const _ of h.sedanSignalLamps.right)_.material.emissiveIntensity=s?2.4:.02;for(const _ of h.sedanBrakeLamps)_.material.emissiveIntensity=r?2.5:.12;for(const _ of h.reverseLamps)_.material.emissiveIntensity=t.reversing?2:.02;const g=n&&s?"hazard":n?"left":s?"right":"off";(c=h.updateCockpit)==null||c.call(h,t.speedMs,o,t.gear,g)}if(i.cb400Parts){const h=i.cb400Parts;h.bikeFrontWheelPivot.rotation.y=t.steerAngleRad,h.bikeFrontWheelAssembly.group.rotation.x=t.wheelRotationRad,h.bikeRearWheelAssembly.group.rotation.x=t.wheelRotationRad,h.bikeHandlebar.rotation.y=t.steerAngleRad,h.bikeCockpitBar.rotation.y=t.steerAngleRad;for(const d of h.bikeSignalLamps.left)d.material.emissiveIntensity=n?2.4:.02;for(const d of h.bikeSignalLamps.right)d.material.emissiveIntensity=s?2.4:.02;h.bikeBrakeLamp.material.emissiveIntensity=r?2.5:.12,(u=h.updateBikeCockpit)==null||u.call(h,t.speedMs,o)}}class tx{constructor(t,e){yt(this,"camera");yt(this,"orbit");yt(this,"mode","chase");yt(this,"mirrorQuality","high");yt(this,"mirrorCameras",{left:new ze(56,1.65,.1,450),center:new ze(44,2.5,.1,450),right:new ze(56,1.65,.1,450)});yt(this,"miniMapCamera",new Hl(-45,45,45,-45,1,240));yt(this,"miniMapViewport",{centerX:0,centerZ:0,halfWidth:45,halfHeight:45,halfSize:45});yt(this,"insetSurfaces",new WeakMap);yt(this,"smoothPos",new I(12,5.5,56));yt(this,"smoothLook",new I(12,1.6,48));yt(this,"frameCounter",0);this.camera=new ze(60,e,.05,650),this.camera.layers.enable(1),[this.miniMapCamera,...Object.values(this.mirrorCameras)].forEach(n=>{n.userData.skipCarMirrors=!0,n.layers.set(0)}),this.orbit=new Fv(this.camera,t),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.08,this.orbit.maxPolarAngle=Math.PI*.48,this.orbit.minDistance=2.8,this.orbit.maxDistance=65,this.orbit.enabled=!1}setMode(t,e,n){this.mode=t,this.orbit.enabled=t==="orbit",this.camera.userData.carMirrorInterval=t==="cockpit"||t==="instructor"?0:250,n&&yh(n,t==="cockpit"),document.body.dataset.view=t==="chase"?"follow":t,document.body.classList.toggle("sedan-cockpit",(t==="cockpit"||t==="instructor")&&(n==null?void 0:n.kind)!=="motorcycle"),document.body.classList.toggle("bike-cockpit",t==="cockpit"&&(n==null?void 0:n.kind)==="motorcycle"),t==="orbit"?(this.camera.fov=60,this.camera.updateProjectionMatrix(),this.camera.position.set(e.x+16,e.y+18,e.z+16),this.orbit.target.set(e.x,e.y+1.2,e.z),this.orbit.update()):this.snapToState(e,(n==null?void 0:n.kind)??"sedan")}getMode(){return this.mode}setMirrorQuality(t,e){this.mirrorQuality=t}bindMirrorsToVehicle(t){yh(t,this.mode==="cockpit")}snapToState(t,e="sedan"){const n=this.getViewPose(this.mode,t,e);this.smoothPos.copy(n.position),this.smoothLook.copy(n.lookTarget),this.camera.position.copy(n.position),this.camera.lookAt(n.lookTarget)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}getViewPose(t,e,n){const s=new I(-Math.sin(e.heading),0,-Math.cos(e.heading)),r=new I(Math.cos(e.heading),0,-Math.sin(e.heading)),o=e.heading+e.lookAngleRad,a=new I(-Math.sin(o),0,-Math.cos(o)),l=new I(Math.cos(o),0,-Math.sin(o)),c=new I(e.x,e.y,e.z);if(t==="cockpit"){if(n==="motorcycle"){const m=c.clone().add(new I(0,1.42,0)).add(s.clone().multiplyScalar(-.08)),f=m.clone().add(a.clone().multiplyScalar(30)).add(l.clone().multiplyScalar(.04)).add(new I(0,Math.sin(e.pitch)*28-1.3,0));return{position:m,lookTarget:f}}const _=c.clone().add(new I(0,1.245,0)).add(s.clone().multiplyScalar(-.38)).add(r.clone().multiplyScalar(.36)),x=_.clone().add(a.clone().multiplyScalar(28)).add(l.clone().multiplyScalar(.04)).add(new I(0,Math.sin(e.pitch)*26-1.1,0));return{position:_,lookTarget:x}}if(t==="instructor"){const _=c.clone().add(new I(0,1.24,0)).add(s.clone().multiplyScalar(-.34)).add(r.clone().multiplyScalar(-.37)),x=c.clone().add(new I(0,1.02+Math.sin(e.pitch)*1.2,0)).add(s.clone().multiplyScalar(.32)).add(r.clone().multiplyScalar(.24-e.lookAngleRad*.18));return{position:_,lookTarget:x}}if(t==="hood"){const _=c.clone().add(new I(0,1.12,0)).add(s.clone().multiplyScalar(.55)),x=_.clone().add(a.clone().multiplyScalar(22)).add(new I(0,Math.sin(e.pitch)*22-.8,0));return{position:_,lookTarget:x}}const u=n==="motorcycle"?7.2:9,h=n==="motorcycle"?4.6:5.5,d=c.clone().add(new I(0,h,0)).add(a.clone().multiplyScalar(-u)),g=c.clone().add(new I(0,n==="motorcycle"?1.28:1.6,0));return{position:d,lookTarget:g}}update(t,e,n,s,r,o){if(this.mode==="orbit"){const h=e.y+(n==="motorcycle"?1:1.2);this.orbit.target.lerp(new I(e.x,h,e.z),1-Math.pow(.01,t)),this.orbit.update();return}const a=this.mode==="cockpit"?n==="motorcycle"?78:70:this.mode==="instructor"?74:60,l=Se.clamp(Math.abs(e.speedMs)/22,0,1);this.camera.fov=Se.damp(this.camera.fov,a+l*14,5,t),this.camera.updateProjectionMatrix();const c=this.getViewPose(this.mode,e,n);if(this.mode==="cockpit"||this.mode==="instructor"||this.mode==="hood"){this.camera.position.copy(c.position),this.camera.lookAt(c.lookTarget);return}const u=1-Math.pow(.002,t);this.smoothPos.lerp(c.position,u),this.camera.position.copy(this.smoothPos),this.camera.lookAt(c.lookTarget)}renderInset(t,e,n,s){const r=e.clientWidth,o=e.clientHeight;if(r<2||o<2)return;let a=this.insetSurfaces.get(e);if(!a){const h=document.createElement("canvas");h.className="insetCanvas",h.setAttribute("aria-hidden","true"),e.prepend(h);const d=h.getContext("2d",{alpha:!1});a={canvas:h,ctx:d},this.insetSurfaces.set(e,a)}const l=t.getPixelRatio(),c=Math.min(Math.floor(r*l),t.domElement.width),u=Math.min(Math.floor(o*l),t.domElement.height);(a.canvas.width!==c||a.canvas.height!==u)&&(a.canvas.width=c,a.canvas.height=u),t.setScissorTest(!0),t.setViewport(0,0,c/l,u/l),t.setScissor(0,0,c/l,u/l),t.render(n,s),a.ctx.drawImage(t.domElement,0,t.domElement.height-u,c,u,0,0,c,u),t.setScissorTest(!1)}renderPiPMirrors(t,e,n,s,r,o,a){if(a||this.mirrorQuality==="off"||this.mode==="orbit"||(this.frameCounter++,this.mirrorQuality==="low"&&this.frameCounter%2!==0))return;const l=new I(-Math.sin(n.heading),0,-Math.cos(n.heading)),c=new I(Math.cos(n.heading),0,-Math.sin(n.heading)),u=new I(n.x,n.y,n.z),h=(d,g,_)=>{if(!d)return;const x=d.getBoundingClientRect();if(x.width<2||x.height<2)return;g.aspect=x.width/x.height,g.updateProjectionMatrix(),_==="center"&&(g.projectionMatrix.elements[0]*=-1,g.projectionMatrixInverse.copy(g.projectionMatrix).invert());const m=_==="left"?-1:_==="right"?1:0,f=_==="center"?0:.88*m,S=_==="center"?0:8.5*m,y=u.clone().add(new I(0,_==="center"?1.93:1.78,0)).add(l.clone().multiplyScalar(_==="center"?.24:.06)).add(c.clone().multiplyScalar(f)),v=y.clone().add(l.clone().multiplyScalar(-16)).add(c.clone().multiplyScalar(S)).add(new I(0,.12,0));g.position.copy(y),g.lookAt(v),this.renderInset(t,d,e,g)};h(s,this.mirrorCameras.left,"left"),h(r,this.mirrorCameras.center,"center"),h(o,this.mirrorCameras.right,"right")}renderPiPMiniMap(t,e,n,s,r,o,a,l,c){if(!n)return;const u=n.getBoundingClientRect();if(u.width<2||u.height<2)return;const h=u.width/u.height,d=r.width*.5,g=r.height*.5,_=o?Math.max(r.width,r.height)*.56:Math.max(24,Math.max(r.width,r.height)*.28),x=o?_/Math.max(1,a):_,m=h>=1?x*h:x,f=h>=1?x:x/h,S=o?l:Se.clamp(s.x,-d,d),y=o?c:Se.clamp(s.z,-g,g);this.miniMapViewport={centerX:S,centerZ:y,halfWidth:m,halfHeight:f,halfSize:x},this.miniMapCamera.left=-m,this.miniMapCamera.right=m,this.miniMapCamera.top=f,this.miniMapCamera.bottom=-f,this.miniMapCamera.position.set(S,110,y),this.miniMapCamera.up.set(0,0,-1),this.miniMapCamera.lookAt(S,0,y),this.miniMapCamera.updateProjectionMatrix(),this.renderInset(t,n,e,this.miniMapCamera)}}const uo=[{id:"kyoshujo-3d",nameEn:"Sakuragaoka 3D Driving School (Full 3D Kyōshūjo)",nameJa:"桜ヶ丘自動車教習所 (3D立体コース)",mapWidth:180,startX:12,startZ:48.1,startHeading:Math.PI/2,accentColor:"#059669"},{id:"tokyo-fuchu",nameEn:"Fuchu Driver's License Test Center, Tokyo",nameJa:"東京府中運転免許試験場",mapWidth:420,startX:-54,startZ:88,startHeading:0,accentColor:"#2563eb"},{id:"tokyo-samezu",nameEn:"Samezu Driver's License Test Center, Tokyo",nameJa:"東京都鮫洲運転免許試験場",mapWidth:340,startX:-42,startZ:74,startHeading:Math.PI/2,accentColor:"#0891b2"},{id:"kanagawa-futamatagawa-car",nameEn:"Kanagawa License Center (Futamatagawa · Car)",nameJa:"神奈川県運転免許センター（二俣川・四輪）",mapWidth:460,startX:-67.9,startZ:112,startHeading:Math.PI/2,accentColor:"#059669"},{id:"osaka-kadoma",nameEn:"Kadoma Driver's License Test Center, Osaka",nameJa:"大阪門真運転免許試験場",mapWidth:400,startX:-50,startZ:82,startHeading:0,accentColor:"#7c3aed"},{id:"aichi-hirabari",nameEn:"Hirabari Driver's License Test Center, Nagoya",nameJa:"愛知県平針運転免許試験場",mapWidth:380,startX:-48,startZ:76,startHeading:Math.PI/2,accentColor:"#d97706"},{id:"saitama-konosu",nameEn:"Saitama Prefectural Driver's License Center (Konosu)",nameJa:"埼玉県警察運転免許センター（鴻巣）",mapWidth:410,startX:-55,startZ:84,startHeading:0,accentColor:"#0d9488"},{id:"chiba-makuhari-car",nameEn:"Chiba Makuhari License Center (Car)",nameJa:"千葉幕張免許センター（四輪）",mapWidth:390,startX:-46,startZ:80,startHeading:Math.PI/2,accentColor:"#db2777"}];class ex{constructor(t){yt(this,"group",new jt);yt(this,"mesh",null);yt(this,"texture",null);yt(this,"activeSource",null);yt(this,"currentSize",{width:180,height:120});this.group.visible=!1,t.add(this.group)}getActiveSource(){return this.activeSource}async loadFromDataUrl(t,e){const n=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=()=>r(new Error("Failed to decode map image")),o.src=t});this.applyCanvasOrImage(n,n.width,n.height,e)}loadProceduralTestCenter(t){const s=document.createElement("canvas");s.width=2048,s.height=1360;const r=s.getContext("2d");r.fillStyle="#4e753e",r.fillRect(0,0,2048,1360);for(let a=0;a<6e3;a++)r.fillStyle=a%2===0?"rgba(65,98,48,0.28)":"rgba(110,148,80,0.22)",r.fillRect(Math.random()*2048,Math.random()*1360,4,4);const o=(a,l=92)=>{r.save(),r.lineCap="round",r.lineJoin="round",r.strokeStyle="#d1d5db",r.lineWidth=l+10,a(),r.stroke(),r.strokeStyle="#363c44",r.lineWidth=l,a(),r.stroke(),r.strokeStyle="#f8fafc",r.lineWidth=3,r.setLineDash([24,24]),a(),r.stroke(),r.restore()};o(()=>{r.beginPath(),r.roundRect(140,120,1768,1120,160)},106),o(()=>{r.beginPath(),r.moveTo(2048*.35,120),r.lineTo(2048*.35,1240),r.moveTo(2048*.65,120),r.lineTo(2048*.65,1240),r.moveTo(140,1360*.45),r.lineTo(1908,1360*.45),r.moveTo(140,1360*.72),r.lineTo(2048*.65,1360*.72)},88),o(()=>{r.beginPath(),r.moveTo(2048*.35,1360*.25),r.bezierCurveTo(2048*.5,1360*.16,2048*.5,1360*.38,2048*.65,1360*.28)},52),o(()=>{r.beginPath(),r.moveTo(2048*.65,1360*.58),r.lineTo(2048*.78,1360*.58),r.lineTo(2048*.78,1360*.76),r.lineTo(1908,1360*.76)},54),r.fillStyle="rgba(255,255,255,0.85)",r.font='bold 44px "Noto Sans JP", sans-serif',r.fillText(t.nameJa,220,210),r.fillStyle=t.accentColor,r.font="bold 30px sans-serif",r.fillText(t.nameEn,220,255),this.applyCanvasOrImage(s,2048,1360,t.mapWidth)}applyCanvasOrImage(t,e,n,s){this.disposeCurrent(),this.activeSource=t;const r=new Ve(t);r.colorSpace=ye,r.anisotropy=8,r.needsUpdate=!0,this.texture=r;const o=n/Math.max(1,e),a=Math.max(10,s),l=a*o;this.currentSize={width:a,height:l};const c=new He(a,l),u=new At({map:r,roughness:.92,metalness:0}),h=new ft(c,u);h.rotation.x=-Math.PI/2,h.position.y=.005,h.receiveShadow=!0,this.mesh=h,this.group.add(h)}setWidth(t){var o;if(!this.mesh||!((o=this.texture)!=null&&o.image))return;const e=this.texture.image,n=e.height/Math.max(1,e.width),s=Math.max(10,t),r=s*n;this.currentSize={width:s,height:r},this.mesh.geometry.dispose(),this.mesh.geometry=new He(s,r)}setVisible(t){this.group.visible=t}disposeCurrent(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.texture&&(this.texture.dispose(),this.texture=null)}}const Mh="jp_kyoshujo_custom_route_v1";class nx{constructor(t){yt(this,"group",new jt);yt(this,"ribbonGroup",new jt);yt(this,"stampGroup",new jt);yt(this,"activeRing");yt(this,"data",{waypoints:[],stamps:[]});yt(this,"memoryMode","guided");yt(this,"currentWpIndex",0);yt(this,"wrongTurnCount",0);yt(this,"bestDistToCurrentWp",1/0);yt(this,"offRouteAlert",!1);yt(this,"completed",!1);yt(this,"autoStopTimer",0);yt(this,"stoppedAtStampIds",new Set);yt(this,"trafficLightLamps",[]);yt(this,"onRouteCompleted");this.group.add(this.ribbonGroup,this.stampGroup);const e=new Cn(1.4,2,28),n=new Be({color:3462041,side:Re,transparent:!0,opacity:.85});this.activeRing=new ft(e,n),this.activeRing.rotation.x=-Math.PI/2,this.activeRing.position.y=.06,this.activeRing.visible=!1,this.group.add(this.activeRing),t.add(this.group),this.loadSavedRoute()}getData(){return this.data}hasRoute(){return this.data.waypoints.length>=2}getMemoryMode(){return this.memoryMode}setMemoryMode(t){this.memoryMode=t,this.ribbonGroup.visible=t!=="blind",this.activeRing.visible=this.hasRoute()&&(t!=="blind"||this.offRouteAlert)}setRouteData(t,e=!0){if(this.data={waypoints:t.waypoints.map(n=>({...n})),stamps:t.stamps.map(n=>({...n}))},this.recomputeTurnDirections(),this.rebuild3DVisuals(),this.resetProgress(),e)try{window.localStorage.setItem(Mh,JSON.stringify(this.data))}catch{}}clearRoute(){this.setRouteData({waypoints:[],stamps:[]},!0)}loadSavedRoute(){try{const t=window.localStorage.getItem(Mh);if(!t)return;const e=JSON.parse(t);Array.isArray(e==null?void 0:e.waypoints)&&Array.isArray(e==null?void 0:e.stamps)&&this.setRouteData(e,!1)}catch{}}resetProgress(){this.currentWpIndex=this.data.waypoints.length>1?1:0,this.wrongTurnCount=0,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1,this.completed=!1,this.autoStopTimer=0,this.stoppedAtStampIds.clear(),this.setMemoryMode(this.memoryMode)}getStartPose(){if(this.data.waypoints.length<2)return null;const t=this.data.waypoints[0],e=this.data.waypoints[1],n=Math.atan2(-(e.x-t.x),-(e.z-t.z));return{x:t.x,z:t.z,heading:n}}recomputeTurnDirections(){const t=this.data.waypoints;for(let e=0;e<t.length;e++){if(e===0){t[e].turn="start";continue}if(e===t.length-1){t[e].turn="goal";continue}const n=t[e-1],s=t[e],r=t[e+1],o=Math.atan2(-(s.x-n.x),-(s.z-n.z)),a=Math.atan2(-(r.x-s.x),-(r.z-s.z)),c=So(a-o)*180/Math.PI;Math.abs(c)>135?t[e].turn="uturn":c>28?t[e].turn="left":c<-28?t[e].turn="right":t[e].turn="straight"}}autoExtractRouteFromImage(t,e,n,s){const o=t.height/Math.max(1,t.width),a=Math.max(60,Math.round(180*o)),l=e*o,c=document.createElement("canvas");c.width=180,c.height=a;const u=c.getContext("2d");u.drawImage(t,0,0,180,a);const h=u.getImageData(0,0,180,a).data,d=[];for(let v=2;v<a-2;v+=2)for(let M=2;M<178;M+=2){const E=(v*180+M)*4,T=h[E],C=h[E+1],b=h[E+2];if(h[E+3]<128)continue;let D=!1;if(n==="red"?D=T>155&&T-C>55&&T-b>55:n==="blue"?D=b>150&&b-T>45&&b-C>20:n==="green"?D=C>140&&C-T>35&&C-b>25:n==="orange"&&(D=T>180&&C>95&&C<185&&b<85),D){const O=(M/180-.5)*e,H=(v/a-.5)*l;d.push({x:O,z:H})}}if(d.length<4)return[];const g=Math.max(4,e/45),_=new Map;for(const v of d){const M=Math.round(v.x/g),E=Math.round(v.z/g),T=`${M},${E}`,C=_.get(T)??{sumX:0,sumZ:0,count:0};C.sumX+=v.x,C.sumZ+=v.z,C.count++,_.set(T,C)}const x=Array.from(_.values()).map(v=>({x:v.sumX/v.count,z:v.sumZ/v.count,used:!1}));if(x.length<2)return[];let m=0,f=1/0;for(let v=0;v<x.length;v++){const M=s?Math.hypot(x[v].x-s.x,x[v].z-s.z):-x[v].z+x[v].x*.3;M<f&&(f=M,m=v)}const S=[];x[m].used=!0,S.push({x:x[m].x,z:x[m].z,turn:"start"});const y=g*4.5;for(;S.length<45;){const v=S[S.length-1];let M=-1,E=y;for(let T=0;T<x.length;T++){if(x[T].used)continue;const C=Math.hypot(x[T].x-v.x,x[T].z-v.z);C<E&&(E=C,M=T)}if(M===-1)break;x[M].used=!0,E>=g*.85&&S.push({x:x[M].x,z:x[M].z,turn:"straight"})}return S}update(t,e,n,s,r){var v;const o=n.getLightForAxis("NS");for(const M of this.trafficLightLamps)M.green.emissiveIntensity=o==="green"?2.2:.15,M.yellow.emissiveIntensity=o==="yellow"?2.2:.15,M.red.emissiveIntensity=o==="red"?2.2:.15;if(!this.hasRoute())return this.activeRing.visible=!1,{bannerText:null,autoDriveInput:null};const a=s==="ja",l=this.data.waypoints;if(this.completed){this.activeRing.visible=!1;const M=Math.max(0,Math.round((1-this.wrongTurnCount/Math.max(1,l.length))*100));return{bannerText:a?`カスタムルート完走！ 暗記正確度: ${M}% (コース間違い: ${this.wrongTurnCount}回) — [O]キーで最初から復習`:`Custom Route Complete! Memory Accuracy: ${M}% (Wrong turns: ${this.wrongTurnCount}) — Press [O] to practice again`,autoDriveInput:null}}const c=l[this.currentWpIndex];if(!c)return this.completed=!0,{bannerText:null,autoDriveInput:null};const u=Math.hypot(c.x-e.x,c.z-e.z);u<this.bestDistToCurrentWp&&(this.bestDistToCurrentWp=u),u-this.bestDistToCurrentWp>16&&!this.offRouteAlert?(this.offRouteAlert=!0,this.wrongTurnCount++):u<this.bestDistToCurrentWp+4&&(this.offRouteAlert=!1);const h=this.memoryMode!=="blind"||this.offRouteAlert;if(this.activeRing.visible=h,h){this.activeRing.position.set(c.x,.07,c.z);const M=1+Math.sin(r*5)*.12;this.activeRing.scale.set(M,M,1)}const d=this.currentWpIndex===l.length-1?4.2:5.5;u<=d&&(this.currentWpIndex>=l.length-1?(Math.abs(e.speedMs)<.4||this.memoryMode==="autodrive")&&(this.completed=!0,(v=this.onRouteCompleted)==null||v.call(this,this.wrongTurnCount,l.length)):(this.currentWpIndex++,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1));const g={start:"出発",straight:"直進 (Straight)",left:"左折 ◀ (Turn Left)",right:"右折 ▶ (Turn Right)",uturn:"Uターン (U-Turn)",goal:"発着点ゴール・停止 (Goal Stop)"},_={start:"Start",straight:"Continue Straight (直進)",left:"Turn Left ◀ (左折)",right:"Turn Right ▶ (右折)",uturn:"Make U-Turn (Uターン)",goal:"Goal — Come to Full Stop (ゴール停止)"},x=l[this.currentWpIndex]??c,m=Math.round(Math.hypot(x.x-e.x,x.z-e.z)),f=a?g[x.turn]:_[x.turn];let S;this.offRouteAlert?S=a?`⚠️ コース間違い！ ポイント #${this.currentWpIndex} (${m}m先) へ戻ってください`:`⚠️ Wrong Turn! Head back toward Checkpoint #${this.currentWpIndex} (${m}m)`:this.memoryMode==="blind"?S=a?`🧠 暗記テスト中 [#${this.currentWpIndex}/${l.length-1}] ガイド非表示 — 記憶で走行 (ミス: ${this.wrongTurnCount}回)`:`🧠 Memory Test [#${this.currentWpIndex}/${l.length-1}] Guide hidden — drive from memory (Mistakes: ${this.wrongTurnCount})`:S=`${this.memoryMode==="autodrive"?a?"🤖 自動お手本走行":"🤖 Auto-Drive Demo":a?"📍 ルートガイド":"📍 Route Guide"} [#${this.currentWpIndex}/${l.length-1} · ${m}m]: ${f}`;let y=null;return this.memoryMode==="autodrive"&&!this.completed&&(y=this.computeAutoDriveInput(t,e,x)),{bannerText:S,autoDriveInput:y}}computeAutoDriveInput(t,e,n){for(let v=0;v<this.data.stamps.length;v++){const M=this.data.stamps[v];if(M.kind==="stopSign"&&!this.stoppedAtStampIds.has(v)&&Math.hypot(M.x-e.x,M.z-e.z)<4.5){if(this.autoStopTimer+=t,this.autoStopTimer<1.4)return{throttle:0,brake:.9,steerLeft:0,steerRight:0,analogSteerTarget:0,clutch:0,lookLeft:this.autoStopTimer<.7,lookRight:this.autoStopTimer>=.7};this.stoppedAtStampIds.add(v),this.autoStopTimer=0}}const s=n.x-e.x,r=n.z-e.z,o=Math.hypot(s,r)||1,a=ps(e.heading),l=s/o,c=r/o,u=a.z*l-a.x*c,h=a.x*l+a.z*c,d=Math.atan2(u,h),g=2*Math.sin(d)/Math.max(2.5,Math.min(8,o)),_=Math.atan(2.6*g),x=Math.max(-1,Math.min(1,_/.75));o<18&&n.turn==="left"?e.blinker="left":o<18&&n.turn==="right"?e.blinker="right":Math.abs(d)<.12&&(e.blinker="off");const m=n.turn==="left"||n.turn==="right"||n.turn==="goal",f=n.turn==="goal"&&o<6?0:m&&o<12?2.8:Math.abs(d)>.35?2.6:5.5,S=e.speedMs<f?.48:0,y=e.speedMs>f+.8||f===0?.65:0;return{throttle:S,brake:y,steerLeft:0,steerRight:0,analogSteerTarget:x,clutch:0,lookLeft:!1,lookRight:!1}}rebuild3DVisuals(){for(;this.ribbonGroup.children.length>0;)this.ribbonGroup.remove(this.ribbonGroup.children[0]);for(;this.stampGroup.children.length>0;)this.stampGroup.remove(this.stampGroup.children[0]);this.trafficLightLamps=[];const t=this.data.waypoints;if(t.length>=2){const e=t.map(o=>new I(o.x,.08,o.z)),n=new yo(e,!1,"catmullrom",.15),s=new fr(n,Math.max(24,t.length*10),.22,6,!1),r=new Be({color:3462041,transparent:!0,opacity:.72});this.ribbonGroup.add(new ft(s,r)),t.forEach((o,a)=>{const l=this.createCheckpointSign(a===0?"S":a===t.length-1?"G":String(a),o.turn);l.position.set(o.x,0,o.z),this.ribbonGroup.add(l)})}for(const e of this.data.stamps)e.kind==="stopSign"?this.stampGroup.add(this.create3DStopSign(e.x,e.z,e.heading)):e.kind==="trafficLight"?this.stampGroup.add(this.create3DTrafficLight(e.x,e.z,e.heading)):e.kind==="pole"&&this.stampGroup.add(this.create3DPole(e.x,e.z))}createCheckpointSign(t,e){const n=new jt,s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");r.beginPath(),r.arc(64,64,56,0,Math.PI*2),r.fillStyle=e==="goal"?"#d62828":e==="left"||e==="right"?"#005bac":"#059669",r.fill(),r.lineWidth=8,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font="bold 54px sans-serif",r.fillText(t,64,66);const o=new mn(s);o.colorSpace=ye;const a=new ru(new kl({map:o,transparent:!0}));return a.scale.set(1.8,1.8,1),a.position.y=2.1,n.add(a),n}create3DStopSign(t,e,n){const s=new jt;s.position.set(t,0,e),s.rotation.y=n;const r=new ft(new He(3.4,.45),new Be({color:16777215,side:Re}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,0),s.add(r);const o=new ft(new oe(.04,.04,2.5,8),new At({color:9741240}));o.position.set(-1.9,1.25,0),s.add(o);const a=document.createElement("canvas");a.width=256,a.height=256;const l=a.getContext("2d");l.beginPath(),l.moveTo(20,24),l.lineTo(236,24),l.lineTo(128,228),l.closePath(),l.fillStyle="#d62828",l.fill(),l.lineWidth=12,l.strokeStyle="#ffffff",l.stroke(),l.fillStyle="#ffffff",l.textAlign="center",l.font='bold 46px "Noto Sans JP", sans-serif',l.fillText("止まれ",128,95),l.font="bold 26px sans-serif",l.fillText("STOP",128,138);const c=new mn(a);c.colorSpace=ye;const u=new ft(new He(1,1),new Be({map:c,transparent:!0,side:Re}));return u.position.set(-1.9,2.3,.05),s.add(u),s}create3DTrafficLight(t,e,n){const s=new jt;s.position.set(t,0,e),s.rotation.y=n;const r=new At({color:6583435}),o=new ft(new oe(.1,.12,5,10),r);o.position.set(-2.4,2.5,0),s.add(o);const a=new ft(new Xt(1.5,.5,.35),new At({color:1976635}));a.position.set(-.6,4.7,0),s.add(a);const l=new At({color:413243,emissive:1108120,emissiveIntensity:1.5}),c=new At({color:7877903,emissive:16758531,emissiveIntensity:.2}),u=new At({color:8330525,emissive:16722474,emissiveIntensity:.2});this.trafficLightLamps.push({green:l,yellow:c,red:u});const h=new oe(.14,.14,.06,12),d=(g,_)=>{const x=new ft(h,g);x.rotation.x=Math.PI/2,x.position.set(-.6+_,4.7,.18),s.add(x)};return d(l,-.44),d(c,0),d(u,.44),s}create3DPole(t,e){const n=new jt;n.position.set(t,0,e);const s=new At({color:14231078}),r=new At({color:16317180});for(let o=0;o<5;o++){const a=new ft(new oe(.06,.06,.32,10),o%2===0?s:r);a.position.y=.16+o*.32,n.add(a)}return n}}class ix{constructor(t){yt(this,"root",new jt);yt(this,"aiCars",[]);yt(this,"pedestrians",[]);t.add(this.root),this.buildAiCars(),this.buildPedestrians()}buildAiCars(){const t=[2450411,16096779,1013358],e=[[{x:-45,z:-47.75},{x:55,z:-47.75},{x:77.75,z:-28},{x:77.75,z:28},{x:55,z:47.75},{x:-55,z:47.75},{x:-77.75,z:28},{x:-77.75,z:-28}],[{x:45,z:44.25},{x:74.25,z:25},{x:74.25,z:-25},{x:45,z:-44.25},{x:-45,z:-44.25},{x:-74.25,z:-25},{x:-74.25,z:25},{x:-45,z:44.25}],[{x:-1.75,z:-34},{x:-1.75,z:34},{x:-45,z:44.25},{x:-74.25,z:24},{x:-74.25,z:-24},{x:-45,z:-44.25}]];for(let n=0;n<e.length;n++){const s=e[n],r=s[0],o=s[1],{group:a,wheels:l,brakeLamps:c}=this.createTrainingSedanMesh(t[n%t.length],n+2),u=Math.atan2(-(o.x-r.x),-(o.z-r.z));a.position.set(r.x,0,r.z),a.rotation.y=u,this.root.add(a),this.aiCars.push({group:a,wheels:l,brakeLamps:c,waypoints:s,wpIndex:1,x:r.x,z:r.z,heading:u,speedMs:5.5,maxSpeedMs:6.2+n%2*.8})}}createTrainingSedanMesh(t,e){const n=new jt,s=new At({color:t,roughness:.32,metalness:.2}),r=new At({color:1976635,roughness:.15,metalness:.5}),o=new At({color:1120295,roughness:.8}),a=new At({color:16707722,emissive:16707722,emissiveIntensity:.9}),l=new At({color:14427686,emissive:14427686,emissiveIntensity:.25}),c=new ft(new Xt(1.66,.56,4.25),s);c.position.y=.54,c.castShadow=!0,c.receiveShadow=!0,n.add(c);const u=new ft(new Xt(1.42,.48,2.05),s);u.position.set(0,1.02,.15),u.castShadow=!0,n.add(u);const h=new ft(new Xt(1.45,.38,1.88),r);h.position.set(0,1.03,.15),n.add(h);const d=document.createElement("canvas");d.width=256,d.height=128;const g=d.getContext("2d");g.fillStyle="#fef08a",g.fillRect(0,0,256,128),g.strokeStyle="#0f172a",g.lineWidth=8,g.strokeRect(4,4,248,120),g.fillStyle="#0f172a",g.font='bold 46px "Noto Sans JP", sans-serif',g.textAlign="center",g.textBaseline="middle",g.fillText(`教習車 ${e}`,128,66);const _=new mn(d);_.colorSpace=ye;const x=new ft(new Xt(.68,.25,.18),new Be({map:_}));x.position.set(0,1.38,.05),n.add(x);for(const S of[-.56,.56]){const y=new ft(new Xt(.28,.12,.06),a);y.position.set(S,.58,-2.13),n.add(y);const v=new ft(new Xt(.32,.12,.06),l);v.position.set(S,.6,2.13),n.add(v)}const m=[],f=new oe(.3,.3,.2,16);f.rotateZ(Math.PI/2);for(const[S,y]of[[-.78,-1.3],[.78,-1.3],[-.78,1.3],[.78,1.3]]){const v=new ft(f,o);v.position.set(S,.3,y),n.add(v),m.push(v)}return{group:n,wheels:m,brakeLamps:[l]}}buildPedestrians(){const t=[{axis:"NS",startX:-4.5,startZ:-6.2,endX:4.5,endZ:-6.2,shirtColor:15680580,initialProgress:.2},{axis:"NS",startX:4.5,startZ:6.2,endX:-4.5,endZ:6.2,shirtColor:3900150,initialProgress:.65},{axis:"EW",startX:-6.2,startZ:-4.5,endX:-6.2,endZ:4.5,shirtColor:1096065,initialProgress:.35},{axis:"EW",startX:6.2,startZ:4.5,endX:6.2,endZ:-4.5,shirtColor:16096779,initialProgress:.8},{axis:"EW",startX:12,startZ:19.8,endX:12,endZ:28.2,shirtColor:11032055,initialProgress:.15},{axis:"EW",startX:-22,startZ:41.8,endX:-22,endZ:50.2,shirtColor:15485081,initialProgress:.5}];for(const e of t){const{group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a}=this.createPedestrianMesh(e.shirtColor),l=Se.lerp(e.startX,e.endX,e.initialProgress),c=Se.lerp(e.startZ,e.endZ,e.initialProgress);n.position.set(l,0,c),this.root.add(n),this.pedestrians.push({group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a,axis:e.axis,startX:e.startX,startZ:e.startZ,endX:e.endX,endZ:e.endZ,progress:e.initialProgress,direction:1,waitTimer:0,walkPhase:e.initialProgress*10,x:l,z:c,isOnCrosswalk:!0})}}createPedestrianMesh(t){const e=new jt,n=new At({color:15843965,roughness:.6}),s=new At({color:t,roughness:.65}),r=new At({color:1976635,roughness:.8}),o=new At({color:2042167,roughness:.8}),a=new ft(new vn(.13,12,10),n);a.position.y=1.56,a.castShadow=!0,e.add(a);const l=new ft(new vn(.135,12,8,0,Math.PI*2,0,Math.PI*.55),o);l.position.y=1.58,e.add(l);const c=new ft(new Xt(.32,.52,.18),s);c.position.y=1.15,c.castShadow=!0,e.add(c);const u=(x,m,f,S,y,v)=>{const M=new jt;M.position.set(y,v,0);const E=new ft(new Xt(x,m,f),S);return E.position.y=-m*.5,E.castShadow=!0,M.add(E),e.add(M),M},h=u(.12,.78,.13,r,-.09,.86),d=u(.12,.78,.13,r,.09,.86),g=u(.09,.54,.1,s,-.22,1.38),_=u(.09,.54,.1,s,.22,1.38);return{group:e,leftLeg:h,rightLeg:d,leftArm:g,rightArm:_}}update(t,e,n){let s=!1,r,o,a=!1;for(const l of this.pedestrians){if(l.waitTimer>0){l.waitTimer-=t,l.isOnCrosswalk=!1,l.leftLeg.rotation.x=0,l.rightLeg.rotation.x=0,l.leftArm.rotation.x=0,l.rightArm.rotation.x=0;continue}const c=l.progress<=.06||l.progress>=.94,u=Math.hypot(l.startX,l.startZ)<10;if(c&&u){const f=n.getLightForAxis(l.axis);if(f==="green"||f==="yellow"){l.isOnCrosswalk=!1;continue}}const h=Math.hypot(l.endX-l.startX,l.endZ-l.startZ)||8,d=1.35;l.progress+=l.direction*(d*t)/h,l.walkPhase+=t*7.5,l.progress>=1?(l.progress=1,l.direction=-1,l.waitTimer=2.2):l.progress<=0&&(l.progress=0,l.direction=1,l.waitTimer=2.2),l.x=Se.lerp(l.startX,l.endX,l.progress),l.z=Se.lerp(l.startZ,l.endZ,l.progress),l.isOnCrosswalk=l.progress>.07&&l.progress<.93;const g=(l.endX-l.startX)*l.direction,_=(l.endZ-l.startZ)*l.direction;l.group.position.set(l.x,0,l.z),l.group.rotation.y=Math.atan2(-g,-_);const x=Math.sin(l.walkPhase)*.55;l.leftLeg.rotation.x=x,l.rightLeg.rotation.x=-x,l.leftArm.rotation.x=-x*.7,l.rightArm.rotation.x=x*.7;const m=Ys(e.x,e.z,l.x,l.z);if(l.isOnCrosswalk&&m<3.4&&Math.abs(e.speedMs)>.45){const f=l.x-e.x,S=l.z-e.z,y=e.speedMs>=0?1:-1,v=-Math.sin(e.heading)*y,M=-Math.cos(e.heading)*y;((f*v+S*M)/Math.max(.1,m)>.15||m<1.9)&&(s=!0,r="横断歩道上の歩行者の直前を通過しようとしました（道路交通法第38条：歩行者優先義務違反）",o="Failed to stop and yield to a pedestrian crossing the zebra crosswalk (Road Traffic Act Art. 38 violation)")}}for(const l of this.aiCars){const c=l.waypoints[l.wpIndex],u=c.x-l.x,h=c.z-l.z;Math.hypot(u,h)<3.5&&(l.wpIndex=(l.wpIndex+1)%l.waypoints.length);let _=Math.atan2(-u,-h)-l.heading;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;l.heading+=Math.sign(_)*Math.min(Math.abs(_),2.4*t);let x=!1;const m=-Math.sin(l.heading),f=-Math.cos(l.heading),S=Ys(l.x,l.z,e.x,e.z);if(S<8.5&&((e.x-l.x)*m+(e.z-l.z)*f)/Math.max(.1,S)>.55&&(x=!0),S<2.45&&Math.abs(e.speedMs)>.25&&(a=!0),Math.abs(l.x)<12&&Math.abs(l.z)<12){const M=Math.abs(f)>Math.abs(m)?"NS":"EW";n.getLightForAxis(M)!=="green"&&(x=!0)}for(const M of this.pedestrians){if(!M.isOnCrosswalk)continue;const E=Ys(l.x,l.z,M.x,M.z);E<6&&((M.x-l.x)*m+(M.z-l.z)*f)/Math.max(.1,E)>.4&&(x=!0)}const y=x?0:l.maxSpeedMs,v=x?7.5:2.8;l.speedMs<y?l.speedMs=Math.min(y,l.speedMs+v*t):l.speedMs=Math.max(y,l.speedMs-v*t),l.x+=m*l.speedMs*t,l.z+=f*l.speedMs*t,l.group.position.set(l.x,0,l.z),l.group.rotation.y=l.heading;for(const M of l.wheels)M.rotation.x-=l.speedMs*t/.3;for(const M of l.brakeLamps)M.emissiveIntensity=x||l.speedMs<.3?2.4:.25}return{pedestrianDanger:s,pedestrianLabelJa:r,pedestrianLabelEn:o,trafficCollision:a}}}class sx{constructor(t){yt(this,"root",new jt);yt(this,"kyoshujoGroup",new jt);yt(this,"sunLight");yt(this,"sunOffset",new I(45,68,35));yt(this,"railGatePivots",[]);yt(this,"railLeftLampMats",[]);yt(this,"railRightLampMats",[]);yt(this,"trafficLamps",[]);yt(this,"waypointBeacon");yt(this,"skyBrandSprites",[]);t.background=new ne(10473727),t.fog=new Dl(10473727,95,240),this.buildCloudsAndSkyBrand(t);const e=new wp(15660799,6057548,.85);t.add(e),this.sunLight=new Rp(16775920,1.85),this.sunLight.position.copy(this.sunOffset),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048);const n=38;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=170,this.sunLight.shadow.bias=-5e-4,t.add(this.sunLight),t.add(this.sunLight.target),this.root.add(this.kyoshujoGroup),t.add(this.root),this.buildGroundAndRoads(),this.buildSCurveMesh(),this.buildHillRampMesh(),this.buildRoadMarkings(),this.buildCurbsAndPoles(),this.buildRailroadCrossing(),this.buildTrafficLights(),this.buildRoadSigns(),this.buildObstaclesAndBuildings(),this.buildTreesAndFence(),this.waypointBeacon=this.createWaypointBeacon(),this.waypointBeacon.visible=!1,this.kyoshujoGroup.add(this.waypointBeacon)}setKyoshujoVisible(t){this.kyoshujoGroup.visible=t}updateShadowFocus(t,e){const n=.037109375,s=Math.round(t/n)*n,r=Math.round(e/n)*n;this.sunLight.target.position.set(s,0,r),this.sunLight.position.set(s+this.sunOffset.x,this.sunOffset.y,r+this.sunOffset.z),this.sunLight.target.updateMatrixWorld()}updateDynamic(t,e,n){const s=t.getLightForAxis("NS"),r=t.getLightForAxis("EW");for(const a of this.trafficLamps){const l=a.axis==="NS"?s:r;a.greenMat.emissive.setHex(l==="green"?1108120:202768),a.greenMat.emissiveIntensity=l==="green"?2.2:.2,a.yellowMat.emissive.setHex(l==="yellow"?16758531:1708544),a.yellowMat.emissiveIntensity=l==="yellow"?2.2:.2,a.redMat.emissive.setHex(l==="red"?16722474:1836036),a.redMat.emissiveIntensity=l==="red"?2.2:.2}const o=t.getRailroadState();for(let a=0;a<this.railGatePivots.length;a++)this.railGatePivots[a].rotation.z=a===0?-o.barrierAngle:o.barrierAngle;for(const a of this.railLeftLampMats)a.emissive.setHex(o.flashLeftOn?16718362:2229252),a.emissiveIntensity=o.flashLeftOn?2.8:.2;for(const a of this.railRightLampMats)a.emissive.setHex(o.flashRightOn?16718362:2229252),a.emissiveIntensity=o.flashRightOn?2.8:.2;if(e&&this.kyoshujoGroup.visible){this.waypointBeacon.visible=!0;const a=Gn(e.x,e.z).y;this.waypointBeacon.position.set(e.x,a+.05,e.z),this.waypointBeacon.rotation.y=n*1.4;const l=1+Math.sin(n*4)*.08;this.waypointBeacon.scale.set(l,1,l)}else this.waypointBeacon.visible=!1;for(const a of this.skyBrandSprites){const l=a.userData.angle+n*.004,c=a.userData.height+Math.sin(n*.15+l*3)*.8;a.position.set(Math.cos(l)*160,c,Math.sin(l)*160)}}buildCloudsAndSkyBrand(t){const e=new At({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.9}),n=(S,y,v,M)=>{const E=new jt,T=[[0,0,0,5],[-4,-1,0,3.5],[4,-1,0,3.5],[-2,1.5,0,2.8],[2.5,1.5,0,2.8],[-6,-2,0,2],[6,-2,0,2]];for(const[C,b,w,D]of T){const O=new ft(new vn(D,7,5),e);O.position.set(C,b,w),E.add(O)}E.position.set(S,y,v),E.scale.setScalar(M),t.add(E)};n(-80,48,-60,1.2),n(60,42,-90,1),n(-30,52,-110,.85),n(110,46,-70,1.15),n(10,55,-130,.95),n(-120,44,-80,1.3),n(70,50,-150,1.1);const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.font='900 150px "Arial Rounded MT Bold", "Nunito", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText("GaimenGo",s/2,r/2);const l=s/2-a.measureText("GaimenGo").width/2+a.measureText("Gaimen").width,c=a.getImageData(0,0,s,r).data,u=document.createElement("canvas");u.width=s,u.height=r;const h=u.getContext("2d");let d=27166;const g=()=>(d=d*1664525+1013904223>>>0)/4294967296,_=9;for(let S=0;S<r;S+=_)for(let y=0;y<s;y+=_){const v=Math.min(s-1,y+Math.floor(g()*_)),M=Math.min(r-1,S+Math.floor(g()*_));if(c[(M*s+v)*4+3]<128)continue;const E=11+g()*12,T=h.createRadialGradient(v,M,0,v,M,E);T.addColorStop(0,"rgba(255,255,255,0.95)"),T.addColorStop(.6,"rgba(255,255,255,0.55)"),T.addColorStop(1,"rgba(255,255,255,0)"),h.fillStyle=T,h.fillRect(v-E,M-E,E*2,E*2)}h.globalCompositeOperation="source-atop";const x=h.createLinearGradient(0,r*.3,0,r*.8);x.addColorStop(0,"rgba(190,210,230,0)"),x.addColorStop(1,"rgba(170,195,220,0.45)"),h.fillStyle=x,h.fillRect(0,0,s,r),h.fillStyle="rgba(52,211,153,0.22)",h.fillRect(l,0,s-l,r),h.globalCompositeOperation="source-over";const m=new mn(u);m.colorSpace=ye;const f=new kl({map:m,transparent:!0,opacity:.82,depthWrite:!1,fog:!1});this.skyBrandSprites=[0,1,2].map(S=>{const y=new ru(f);return y.scale.set(64,16,1),y.layers.set(1),y.userData.angle=-Math.PI/2+S*(Math.PI*2/3),y.userData.height=40+S*4,y.renderOrder=-1,t.add(y),y})}createGrassTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#5f8449",e.fillRect(0,0,256,256);for(let s=0;s<4e3;s++)e.fillStyle=s%2===0?"rgba(72,108,52,0.35)":"rgba(122,162,88,0.28)",e.fillRect(Math.random()*256,Math.random()*256,2,2);const n=new mn(t);return n.wrapS=n.wrapT=js,n.repeat.set(36,24),n.colorSpace=ye,n}createAsphaltTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#383e45",e.fillRect(0,0,256,256);for(let s=0;s<5500;s++){const r=45+Math.floor(Math.random()*30);e.fillStyle=`rgb(${r},${r+2},${r+6})`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}const n=new mn(t);return n.wrapS=n.wrapT=js,n.repeat.set(22,22),n.colorSpace=ye,n}buildGroundAndRoads(){const t=new At({map:this.createGrassTexture(),roughness:.95,metalness:0}),e=new ft(new He(ai*2+40,Ci*2+40),t);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.kyoshujoGroup.add(e);const n=new At({map:this.createAsphaltTexture(),roughness:.86,metalness:.05}),s=(a,l,c,u,h=.01)=>{const d=new ft(new He(c,u),n);d.rotation.x=-Math.PI/2,d.position.set(a,h,l),d.receiveShadow=!0,this.kyoshujoGroup.add(d)};s(0,-46,124,ri),s(0,46,124,ri),s(-76,0,ri,64),s(76,0,ri,64);const r=[[-62,-32,Math.PI/2],[62,-32,0],[62,32,-Math.PI/2],[-62,32,Math.PI]];for(const[a,l,c]of r){const u=new Cn(14-mh,14+mh,24,1,c,Math.PI/2),h=new ft(u,n);h.rotation.x=-Math.PI/2,h.position.set(a,.01,l),h.receiveShadow=!0,this.kyoshujoGroup.add(h)}s(0,0,ri,92,.012),s(0,0,152,ri,.012);const o=_v*2;s(-48,11.75,o,16.5,.013),s(-41,18,18,o,.013),s(-34,30.25,o,24.5,.013),s(10.75,an,14.5,Ti*2,.013),s(65.25,an,14.5,Ti*2,.013),s(38,24,72.5,ri,.012),s(26,30.6,3.7,6.2,.013),s(48.6,28.85,7.2,2.7,.013),s(0,51,32,3.2,.008)}buildSCurveMesh(){const e=gv,n=[],s=[],r=[];for(let c=0;c<e.length;c++){const u=e[Math.max(0,c-1)],h=e[Math.min(e.length-1,c+1)],d=h.x-u.x,g=h.z-u.z,_=Math.hypot(d,g)||1,x=g/_,m=-d/_;if(n.push(e[c].x+x*1.8,.014,e[c].z+m*1.8),n.push(e[c].x-x*1.8,.014,e[c].z-m*1.8),s.push(0,c*.25,1,c*.25),c<e.length-1){const f=c*2;r.push(f,f+1,f+2,f+1,f+3,f+2)}}const o=new _e;o.setAttribute("position",new $t(n,3)),o.setAttribute("uv",new $t(s,2)),o.setIndex(r),o.computeVertexNormals();const a=new At({color:3883594,roughness:.85,side:Re}),l=new ft(o,a);l.receiveShadow=!0,this.kyoshujoGroup.add(l)}buildHillRampMesh(){const e=$s,n=al,s=an-Ti,r=an+Ti,o=[],a=[];for(let y=0;y<=64;y++){const v=e+(n-e)*y/64,E=Gn(v,an).y+.015;if(o.push(v,0,s),o.push(v,E,s),o.push(v,E,r),o.push(v,0,r),y<64){const T=y*4,C=(y+1)*4;a.push(T+1,T+2,C+1,T+2,C+2,C+1),a.push(T+0,T+1,C+0,T+1,C+1,C+0),a.push(T+2,T+3,C+2,T+3,C+3,C+2)}}const l=new _e;l.setAttribute("position",new $t(o,3)),l.setIndex(a),l.computeVertexNormals();const c=[],u=[],h=[],d=[];for(let y=0;y<=64;y++){const v=e+(n-e)*y/64,M=Gn(v,an).y+.018;if(c.push(v,M,s,v,M,r),h.push(v,0,s,v,M,s,v,0,r,v,M,r),y<64){const E=y*2;u.push(E,E+1,E+2,E+1,E+3,E+2);const T=y*4;d.push(T,T+1,T+4,T+1,T+5,T+4),d.push(T+2,T+6,T+3,T+3,T+6,T+7)}}const g=new _e;g.setAttribute("position",new $t(c,3)),g.setIndex(u),g.computeVertexNormals();const _=new ft(g,new At({color:3883594,roughness:.86,side:Re}));_.receiveShadow=!0,this.kyoshujoGroup.add(_);const x=new _e;x.setAttribute("position",new $t(h,3)),x.setIndex(d),x.computeVertexNormals();const m=new ft(x,new At({color:12239562,roughness:.9,side:Re}));m.receiveShadow=!0,m.castShadow=!0,this.kyoshujoGroup.add(m);const f=Gn(27,an).y,S=new ft(new He(.45,Ti*1.9),new Be({color:16777215}));S.rotation.x=-Math.PI/2,S.rotation.y=-Math.atan(Gn(27,an).slopeX),S.position.set(27,f+.03,an),this.kyoshujoGroup.add(S)}createStencilPlane(t,e,n,s,r,o,a=0){const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d");c.clearRect(0,0,256,256),c.fillStyle=e,c.textAlign="center",c.textBaseline="middle",c.font='bold 120px "Noto Sans JP", sans-serif',c.fillText(t,128,128);const u=new mn(l);u.colorSpace=ye;const h=new ft(new He(n,s),new Be({map:u,transparent:!0,depthWrite:!1}));return h.rotation.x=-Math.PI/2,h.rotation.z=a,h.position.set(r,.025,o),h}buildRoadMarkings(){const t=new Be({color:16054266}),e=new Be({color:15764480}),n=(o,a,l,c,u=t)=>{const h=new ft(new He(l,c),u);h.rotation.x=-Math.PI/2,h.position.set(o,.02,a),this.kyoshujoGroup.add(h)};for(let o=-58;o<=58;o+=6)Math.abs(o)<12||(n(o,-46,2.8,.14),n(o,46,2.8,.14));for(let o=-28;o<=28;o+=6)Math.abs(o)<10||(n(-76,o,.14,2.8),n(76,o,.14,2.8));for(let o=-42;o<=42;o+=6)Math.abs(o)<18||n(0,o,.14,2.8);n(0,13.5,.16,10,e),n(0,-13.5,.16,10,e);for(let o=-70;o<=70;o+=6)Math.abs(o)<18||o>26&&o<50||n(o,0,2.8,.14);n(13.5,0,10,.16,e),n(-13.5,0,10,.16,e),n(38,0,18,.16,e);for(let o=6;o<=68;o+=6)n(o,24,2.8,.14);for(const o of wu){const a=Math.abs(o.dirX)>.5;if(n(o.x,o.z,a?.45:o.halfWidth*1.9,a?o.halfWidth*1.9:.45),o.kind==="stopSign"){const c=Math.atan2(-o.dirX,-o.dirZ);this.kyoshujoGroup.add(this.createStencilPlane("止まれ","#ffffff",2.2,2.2,o.x-o.dirX*2.6,o.z-o.dirZ*2.6,c))}}const s=(o,a,l)=>{for(let c=-3;c<=3;c++)l?n(o,a+c*.9,2.8,.45):n(o+c*.9,a,.45,2.8)};s(0,-6.2,!1),s(0,6.2,!1),s(-6.2,0,!0),s(6.2,0,!0),s(12,24,!0),s(-22,46,!0);for(const[o,a]of[[-10,44.25],[-34,47.75],[24,22.25]]){const l=new ft(new Cn(.75,.96,4),t);l.rotation.x=-Math.PI/2,l.position.set(o,.022,a),this.kyoshujoGroup.add(l)}const r=new ft(new Cn(.9,1.15,4),t);r.rotation.x=-Math.PI/2,r.position.set(0,.022,0),this.kyoshujoGroup.add(r),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,-40,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,20,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("1","#f0a500",1.8,1.8,12,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("2","#f0a500",1.8,1.8,0,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("3","#f0a500",1.8,1.8,-12,48.1,Math.PI/2))}buildCurbsAndPoles(){const t=new At({color:13357786,roughness:.8}),e=new At({color:15857145,roughness:.7});for(const r of Eu){const o=r.points,a=r.id.startsWith("hill-");for(let l=0;l<o.length-1;l++){const c=o[l],u=o[l+1],h=u.x-c.x,d=u.z-c.z,g=Math.hypot(h,d);if(!(g<.01))if(a)for(let x=0;x<24;x++){const m=x/24,f=(x+1)/24,S=c.x+h*m,y=c.x+h*f,v=c.z+d*m,M=c.z+d*f,E=Gn(S,v).y,T=Gn(y,M).y,C=Math.hypot(y-S,T-E),b=new ft(new Xt(C+.04,r.height,.18),x%2===0?t:e);b.position.set((S+y)*.5,(E+T)*.5+r.height*.5,(v+M)*.5),b.rotation.z=Math.atan2(T-E,y-S),b.castShadow=!0,b.receiveShadow=!0,this.kyoshujoGroup.add(b)}else{const _=new ft(new Xt(.18,r.height,g+.14),l%2===0?t:e);_.position.set((c.x+u.x)*.5,r.height*.5,(c.z+u.z)*.5),_.rotation.y=Math.atan2(h,d),_.castShadow=!0,_.receiveShadow=!0,this.kyoshujoGroup.add(_)}}}const n=new At({color:14231078,roughness:.4}),s=new At({color:16317180,roughness:.4});for(const r of bu){const o=new jt;o.position.set(r.x,0,r.z);const a=5,l=r.height/a;for(let c=0;c<a;c++){const u=new ft(new oe(r.radius*.65,r.radius*.65,l,10),c%2===0?n:s);u.position.y=l*(c+.5),u.castShadow=!0,o.add(u)}this.kyoshujoGroup.add(o)}}buildRailroadCrossing(){const e=new At({color:8160657,metalness:.75,roughness:.3}),n=new At({color:4930350,roughness:.9}),s=new At({color:16103424,roughness:.4}),r=new At({color:1711393,roughness:.6});for(const a of[-.7,.7]){const l=new ft(new Xt(.12,.06,30),e);l.position.set(38+a,.03,0),l.receiveShadow=!0,this.kyoshujoGroup.add(l)}for(let a=-14;a<=14;a+=.9){if(Math.abs(a)<3.6)continue;const l=new ft(new Xt(2.3,.05,.25),n);l.position.set(38,.025,a),this.kyoshujoGroup.add(l)}const o=[[38-3.6,-3.9],[38+3.6,3.9]];for(let a=0;a<o.length;a++){const[l,c]=o[a],u=new jt;u.position.set(l,0,c);const h=new ft(new oe(.08,.09,3.4,10),s);h.position.y=1.7,h.castShadow=!0,u.add(h);for(const E of[Math.PI/4,-Math.PI/4]){const T=new ft(new Xt(1.1,.16,.05),s);T.position.y=2.95,T.rotation.y=Math.PI/2,T.rotation.x=E,u.add(T)}const d=new At({color:6293512,emissive:2229252}),g=new At({color:6293512,emissive:2229252});this.railLeftLampMats.push(d),this.railRightLampMats.push(g);const _=new ft(new oe(.11,.11,.14,12),d);_.rotation.z=Math.PI/2,_.position.set(0,2.25,-.22),u.add(_);const x=new ft(new oe(.11,.11,.14,12),g);x.rotation.z=Math.PI/2,x.position.set(0,2.25,.22),u.add(x);const m=new ft(new Xt(.32,.85,.32),r);m.position.set(0,.65,a===0?.35:-.35),u.add(m),new jt().position.set(0,.95,a===0?.35:-.35);const S=new jt;S.rotation.y=a===0?-Math.PI/2:Math.PI/2;const y=new ft(new Xt(3.6,.08,.06),s);y.position.set(1.8,0,0),y.castShadow=!0;const v=new ft(new Xt(.08,3.8,.06),s);v.position.set(0,1.9,0),v.castShadow=!0;for(let E=0;E<6;E++)if(E%2===0){const T=new ft(new Xt(.09,.32,.07),r);T.position.set(0,.45+E*.6,0),v.add(T)}const M=new jt;M.position.set(0,.95,a===0?.35:-.35),M.rotation.y=Math.PI/2,M.add(v),u.add(M),this.railGatePivots.push(M),this.kyoshujoGroup.add(u)}}buildTrafficLights(){const t=new At({color:6583435,metalness:.6,roughness:.35}),e=new At({color:1976635,roughness:.6}),n=[{axis:"NS",x:4.5,z:-5,rotY:0},{axis:"NS",x:-4.5,z:5,rotY:Math.PI},{axis:"EW",x:5,z:4.5,rotY:-Math.PI/2},{axis:"EW",x:-5,z:-4.5,rotY:Math.PI/2}];for(const s of n){const r=new jt;r.position.set(s.x,0,s.z),r.rotation.y=s.rotY;const o=new ft(new oe(.11,.13,5.4,10),t);o.position.y=2.7,o.castShadow=!0,r.add(o);const a=new ft(new oe(.07,.09,4.2,8),t);a.rotation.z=Math.PI/2,a.position.set(-2,5.1,0),r.add(a);const l=new ft(new Xt(1.55,.52,.36),e);l.position.set(-2.5,5.1,0),r.add(l);const c=new At({color:413243,emissive:202768}),u=new At({color:7877903,emissive:1708544}),h=new At({color:8330525,emissive:1836036}),d=new oe(.15,.15,.06,14),g=(_,x)=>{const m=new ft(d,_);m.rotation.x=Math.PI/2,m.position.set(-2.5+x,5.1,.19),r.add(m)};g(c,-.46),g(u,0),g(h,.46),this.trafficLamps.push({axis:s.axis,greenMat:c,yellowMat:u,redMat:h}),this.kyoshujoGroup.add(r)}}createSignTexture(t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");if(s.clearRect(0,0,256,256),t==="tomare")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=14,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(32,34),s.lineTo(224,34),s.lineTo(128,214),s.closePath(),s.fillStyle="#d62828",s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.font='bold 44px "Noto Sans JP", sans-serif',s.fillText("止まれ",128,92),s.font="bold 24px sans-serif",s.fillText("STOP",128,134);else if(t==="joko")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.font='bold 42px "Noto Sans JP", sans-serif',s.fillText("徐 行",128,92),s.font="bold 20px sans-serif",s.fillText("SLOW",128,132);else if(t==="crosswalk"){s.beginPath(),s.moveTo(128,16),s.lineTo(234,92),s.lineTo(216,236),s.lineTo(40,236),s.lineTo(22,92),s.closePath(),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.fillStyle="#ffffff",s.beginPath(),s.arc(128,86,16,0,Math.PI*2),s.fill(),s.fillRect(116,108,24,48);for(let o=-2;o<=2;o++)s.fillRect(118+o*24,186,14,32)}else t==="noparking"?(s.beginPath(),s.arc(128,128,110,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(52,52),s.lineTo(204,204),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke()):t==="direction"?(s.beginPath(),s.arc(128,128,112,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.strokeStyle="#ffffff",s.fillStyle="#ffffff",s.lineWidth=18,s.lineCap="round",s.beginPath(),s.moveTo(128,200),s.lineTo(128,56),s.stroke(),s.beginPath(),s.moveTo(128,38),s.lineTo(100,74),s.lineTo(156,74),s.closePath(),s.fill(),s.beginPath(),s.moveTo(128,134),s.lineTo(64,134),s.stroke(),s.beginPath(),s.moveTo(46,134),s.lineTo(80,108),s.lineTo(80,160),s.closePath(),s.fill()):t==="40"?(s.beginPath(),s.arc(128,128,114,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.textBaseline="middle",s.font="bold 104px sans-serif",s.fillText("40",128,132)):t==="rail"?(s.save(),s.translate(128,128),s.rotate(Math.PI/4),s.fillStyle="#f5b800",s.fillRect(-84,-84,168,168),s.lineWidth=10,s.strokeStyle="#111827",s.strokeRect(-76,-76,152,152),s.restore(),s.fillStyle="#111827",s.textAlign="center",s.font='bold 34px "Noto Sans JP", sans-serif',s.fillText("踏切",128,138)):(s.fillStyle="#005bac",s.fillRect(12,56,232,144),s.lineWidth=6,s.strokeStyle="#ffffff",s.strokeRect(20,64,216,128),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font='bold 38px "Noto Sans JP", sans-serif',s.fillText(e??"",128,128));const r=new mn(n);return r.colorSpace=ye,r}buildRoadSigns(){const t=new At({color:9741240,metalness:.6,roughness:.4}),e=(n,s,r,o,a,l=1,c=1)=>{const u=new jt;u.position.set(s,0,r),u.rotation.y=o;const h=new ft(new oe(.035,.035,2.6,8),t);h.position.y=1.3,h.castShadow=!0,u.add(h);const d=this.createSignTexture(n,a),g=new ft(new He(l,c),new Be({map:d,transparent:!0,side:Re}));g.position.set(0,2.35,.045),u.add(g),this.kyoshujoGroup.add(u)};e("tomare",-67.5,4.1,Math.PI/2),e("tomare",-4.1,-38.5,0),e("tomare",-24.7,-41.5,0),e("tomare",-36.5,41.5,Math.PI),e("40",-55,-50.2,-Math.PI/2),e("40",30,-50.2,-Math.PI/2),e("rail",26,-4.2,-Math.PI/2),e("rail",50,4.2,Math.PI/2),e("guide",-42.5,-4.5,0,"S字コース",1.7,1.05),e("guide",-51,4.5,Math.PI,"クランク",1.7,1.05),e("guide",16.5,-27.5,-Math.PI/2,"坂道発進",1.7,1.05),e("guide",22,28.5,-Math.PI/2,"方向変換",1.7,1.05),e("guide",43,28.5,-Math.PI/2,"縦列駐車",1.7,1.05),e("crosswalk",-21.5,41.8,Math.PI/2),e("crosswalk",12.5,19.8,-Math.PI/2),e("joko",-44.2,-3.5,0),e("joko",52,-27.5,-Math.PI/2),e("noparking",-10,-50.2,-Math.PI/2),e("direction",-4.2,8.5,0)}buildObstaclesAndBuildings(){const t=ho[0];if(t){const a=new jt;a.position.set(t.x,0,t.z);const l=new ft(new Xt(t.halfW*2,1.55,t.halfL*2),new At({color:14870768,roughness:.45}));l.position.y=.92,l.castShadow=!0,a.add(l);const c=new ft(new Xt(t.halfW*1.6,.52,t.halfL*1.92),new At({color:1976635,roughness:.2,metalness:.4}));c.position.y=1.35,a.add(c);const u=new At({color:16347926,roughness:.5});for(const h of[-2.8,2.8]){const d=new ft(new ds(.18,.55,10),u);d.position.set(h,.275,.2),d.castShadow=!0,a.add(d)}this.kyoshujoGroup.add(a)}const e=ho[1];if(e){const a=new jt;a.position.set(e.x,0,e.z);const l=new ft(new Xt(e.halfW*2,e.height,e.halfL*2),new At({color:15855076,roughness:.8}));l.position.y=e.height/2,l.castShadow=!0,l.receiveShadow=!0,a.add(l);const c=new ft(new Xt(e.halfW*2+.6,.5,e.halfL*2+.6),new At({color:3359061,roughness:.7}));c.position.y=e.height+.25,a.add(c);const u=new At({color:1981023,metalness:.5,roughness:.15});for(const x of[2.2,5]){const m=new ft(new Xt(e.halfW*1.8,1.3,.1),u);m.position.set(0,x,-e.halfL-.02),a.add(m)}const h=document.createElement("canvas");h.width=512,h.height=128;const d=h.getContext("2d");d.fillStyle="#005bac",d.fillRect(0,0,512,128),d.strokeStyle="#ffffff",d.lineWidth=8,d.strokeRect(8,8,496,112),d.fillStyle="#ffffff",d.textAlign="center",d.textBaseline="middle",d.font='bold 46px "Noto Sans JP", sans-serif',d.fillText("桜ヶ丘自動車教習所",256,66);const g=new mn(h);g.colorSpace=ye;const _=new ft(new Xt(14,2.4,.4),new Be({map:g}));_.position.set(0,e.height+1.8,-e.halfL+1),a.add(_),this.kyoshujoGroup.add(a)}const n=new jt;n.position.set(-14,0,38);const s=new ft(new oe(1.1,1.4,6.5,8),new At({color:14870768,roughness:.7}));s.position.y=3.25,s.castShadow=!0,n.add(s);const r=new ft(new oe(2.3,1.9,2.2,8),new At({color:1981023,metalness:.6,roughness:.15}));r.position.y=7.4,r.castShadow=!0,n.add(r);const o=new ft(new ds(2.6,1,8),new At({color:3359061,roughness:.6}));o.position.y=9,n.add(o),this.kyoshujoGroup.add(n)}buildTreesAndFence(){const t=new At({color:6045747,roughness:.9}),e=new At({color:4157243,roughness:.85}),n=new At({color:16037570,roughness:.8}),s=[];for(let u=-84;u<=84;u+=14)s.push([u,-55.5,Math.abs(u)%28===0]),Math.abs(u)>22&&s.push([u,55.5,!1]);for(let u=-42;u<=42;u+=14)s.push([-85.5,u,u===0]),s.push([85.5,u,u===-14]);s.push([-16,-24,!0],[14,14,!1],[62,12,!0]);for(const[u,h,d]of s){const g=new jt;g.position.set(u,0,h);const _=new ft(new oe(.18,.25,2.2,7),t);_.position.y=1.1,_.castShadow=!0,g.add(_);const x=new ft(new Fl(1.75,1),d?n:e);x.position.y=3.2,x.castShadow=!0,g.add(x),this.kyoshujoGroup.add(g)}const r=new At({color:14410474,roughness:.55}),o=new ft(new Xt(178,.9,.14),r);o.position.set(0,.45,-59);const a=new ft(new Xt(178,.9,.14),r);a.position.set(0,.45,59);const l=new ft(new Xt(.14,.9,118),r);l.position.set(-89,.45,0);const c=new ft(new Xt(.14,.9,118),r);c.position.set(89,.45,0),this.kyoshujoGroup.add(o,a,l,c)}createWaypointBeacon(){const t=new jt,e=new ft(new Cn(1.6,2.1,28),new Be({color:958318,side:Re,transparent:!0,opacity:.75}));e.rotation.x=-Math.PI/2,t.add(e);const n=new ft(new ds(.55,1.3,4),new At({color:1096065,emissive:366185,emissiveIntensity:.7}));return n.rotation.x=Math.PI,n.position.y=2.8,t.add(n),t}}const rx=[{id:"tomare",titleJa:"一時停止 (止まれ)",titleEn:"Stop (Tomare / 止まれ)",descJa:"停止線の直前で車輪を完全に停止（0 km/h・約2秒）させ、左右の安全確認を行わなければなりません。徐行で通過すると一発検定中止（指定場所一時不停止）となります。",descEn:"Mandatory complete 0.0 km/h stop before the white stop line, followed by distinct Left & Right head checks. Rolling stops cause immediate exam failure.",draw:(i,t,e)=>{i.beginPath(),i.moveTo(12,16),i.lineTo(t-12,16),i.lineTo(t/2,e-14),i.closePath(),i.fillStyle="#d62828",i.fill(),i.lineWidth=6,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.textAlign="center",i.font='bold 22px "Noto Sans JP", sans-serif',i.fillText("止まれ",t/2,48),i.font="bold 13px sans-serif",i.fillText("STOP",t/2,68)}},{id:"joko",titleJa:"徐行 (Slow Down)",titleEn:"Slow Down (Jokō / 徐行)",descJa:"ブレーキ操作から1m以内（時速10km/h以下目安）で直ちに停止できる速度で進行します。見通しの悪い交差点、曲がり角、上り坂の頂上付近、勾配の急な下り坂では徐行義務があります。",descEn:"Drive at a speed where you can stop immediately (within 1 meter / ≤ 10 km/h). Mandatory at blind intersections, road corners, hill crests, and steep descents.",draw:(i,t,e)=>{i.beginPath(),i.moveTo(14,18),i.lineTo(t-14,18),i.lineTo(t/2,e-16),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.font='bold 20px "Noto Sans JP", sans-serif',i.fillText("徐 行",t/2,48),i.font="bold 11px sans-serif",i.fillText("SLOW",t/2,66)}},{id:"speed40",titleJa:"最高速度 (40 km/h)",titleEn:"Maximum Speed Limit (40 km/h)",descJa:"指定された最高速度を超えて運転してはいけません。標識がない一般道路の法定最高速度は自動車60km/h、原付30km/hです。",descEn:"Do not exceed 40 km/h. Where no speed sign is posted on ordinary roads, the statutory limit is 60 km/h for cars/motorcycles and 30 km/h for mopeds.",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=11,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.textBaseline="middle",i.font="bold 42px sans-serif",i.fillText("40",t/2,e/2+2)}},{id:"crosswalk",titleJa:"横断歩道 (歩行者優先)",titleEn:"Pedestrian Crosswalk (横断歩道)",descJa:"前方に横断歩道があることを示します。手前30mと15mには路面ダイヤ（◇）標示があります。歩行者が渡っている・渡ろうとしている時は必ず停止線手前で一時停止します（違反は一発検定中止）。",descEn:"Indicates a pedestrian crosswalk ahead (preceded by ◇ road diamonds at 30m and 15m). You MUST stop whenever a pedestrian is crossing or waiting to cross.",draw:(i,t,e)=>{i.beginPath(),i.moveTo(t/2,10),i.lineTo(t-14,42),i.lineTo(t-20,e-12),i.lineTo(20,e-12),i.lineTo(14,42),i.closePath(),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.beginPath(),i.arc(t/2,38,7,0,Math.PI*2),i.fill(),i.fillRect(t/2-5,47,10,20);for(let n=-2;n<=2;n++)i.fillRect(t/2-3+n*11,74,6,14)}},{id:"railroad",titleJa:"踏切あり (警戒標識)",titleEn:"Railroad Crossing Ahead (踏切あり)",descJa:"前方に踏切があることを警告する黄色ダイヤ標識。踏切手前では必ず完全停止し、窓を開けて目と耳で左右の安全を確認し、踏切内では変速（ギアチェンジ）せずに通過します。",descEn:"Yellow warning diamond indicating a railway crossing ahead. Stop completely before the stop line, open window to listen, look Left & Right, and cross without shifting gears.",draw:(i,t,e)=>{i.save(),i.translate(t/2,e/2),i.rotate(Math.PI/4),i.fillStyle="#f5b800",i.fillRect(-32,-32,64,64),i.lineWidth=4,i.strokeStyle="#111827",i.strokeRect(-28,-28,56,56),i.restore(),i.fillStyle="#111827",i.textAlign="center",i.textBaseline="middle",i.font='bold 17px "Noto Sans JP", sans-serif',i.fillText("踏切",t/2,e/2+2)}},{id:"noEntry",titleJa:"車両進入禁止 (一方通行出口)",titleEn:"No Entry for Vehicles (車両進入禁止)",descJa:"一方通行の出口などに設置され、この標識の方向からの車両の進入を全面禁止します。",descEn:"Prohibits vehicles from entering from this direction (commonly placed at the exit of a one-way street).",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#d62828",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.fillRect(t/2-28,e/2-8,56,16)}},{id:"noParking",titleJa:"駐車禁止 ／ 駐停車禁止",titleEn:"No Parking (駐車禁止) vs No Stopping (駐停車禁止)",descJa:"斜線1本は「駐車禁止」（5分以内の荷物の積み下ろしや人の乗降などの停車は可）。バツ印（×）2本は「駐停車禁止」（駐車も停車も両方禁止）。",descEn:"Single red slash = No Parking (brief stopping for passenger pick-up or <5 min cargo loading is allowed). Double X slash = No Parking AND No Stopping.",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.beginPath(),i.moveTo(22,22),i.lineTo(t-22,e-22),i.stroke()}},{id:"direction",titleJa:"指定方向外進行禁止",titleEn:"Mandatory Direction (指定方向外進行禁止)",descJa:"青丸に白矢印の規制標識。矢印の方向（この例では直進と左折）以外の進行（右折）を禁止します。",descEn:"Blue circular regulatory sign: Vehicles may ONLY proceed in the directions shown by the white arrows (here: Straight or Left only; Right turn prohibited).",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.strokeStyle="#ffffff",i.fillStyle="#ffffff",i.lineWidth=7,i.beginPath(),i.moveTo(t/2,76),i.lineTo(t/2,26),i.stroke(),i.beginPath(),i.moveTo(t/2,18),i.lineTo(t/2-10,32),i.lineTo(t/2+10,32),i.closePath(),i.fill(),i.beginPath(),i.moveTo(t/2,52),i.lineTo(26,52),i.stroke(),i.beginPath(),i.moveTo(18,52),i.lineTo(32,42),i.lineTo(32,62),i.closePath(),i.fill()}}];function Nu(i,t,e){const n=e==="ja";if(t==="predrive"){i.innerHTML=`
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${n?"👨‍✈️ 助手席の検定員（Instructor View）が見ている「乗車〜発進の正しい順序」":"👨‍✈️ Exact Japanese Practical Exam Pre-Drive Sequence (Graded from the Instructor Seat)"}</strong>
          <p>${n?"日本の技能試験（外免切替・仮免修了検定・本免卒業検定）では、運転席に座ってから発進するまでの順序が厳格に定められています。順番を間違えたり（例：先にシートベルトをしてからシートやミラーを合わせる）、安全確認を省略して発進するとその場で減点されます。":"In the Japanese practical driving test (Gaimen Kirikae, Karimen & Honmen), the examiner sits in the left front passenger seat and grades your exact setup order BEFORE the wheels move. Putting on your seatbelt before adjusting your seat/mirrors or skipping the 5-point look causes immediate point deductions."}</p>
        </div>

        <div class="rb-step-grid">
          <div class="rb-step-card">
            <span class="rb-step-num">1</span>
            <div>
              <h4>${n?"乗車前の前後確認・ドア閉め・ドアロック":"1. Check Around Car, Close & Lock Door (ドアロック)"}</h4>
              <p>${n?"車の前後（および車体下）に障害物がないか確認して乗車し、ドアを確実に閉めてロックします。":"Walk around to check front/rear clearance before boarding, close the door firmly, and lock it."}</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">2</span>
            <div>
              <h4>${n?"座席（シート）の前後・背もたれ調整":"2. Seat Adjustment FIRST (座席調整)"}</h4>
              <p>${n?"ブレーキを奥まで踏み込んだ時に膝が軽く曲がる位置にシートを合わせます（※必ずミラーやシートベルトより先に行います！）。":"Adjust seat distance so your knee remains slightly bent when pressing the brake pedal fully. MUST be done BEFORE mirrors and seatbelt!"}</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">3</span>
            <div>
              <h4>${n?"ルームミラー・左右ドアミラーの調整":"3. Rearview & Left/Right Side Mirrors (ミラー調整)"}</h4>
              <p>${n?"姿勢が決まったら、ルームミラーに後部ガラス全体が映るよう手で触れて合わせ、左右ドアミラーを確認します。":"Physically touch and adjust the center rearview mirror and check both left & right side mirrors."}</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">4</span>
            <div>
              <h4>${n?"シートベルトの着用":"4. Fasten Seatbelt (シートベルト着用)"}</h4>
              <p>${n?"ねじれがないか確認してシートベルトを確実に装着します（未着用発進は減点10点）。":"Fasten the seatbelt cleanly without twists. Pulling out without a seatbelt deducts -10 points."}</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">5</span>
            <div>
              <h4>${n?"ブレーキ踏み込み＋ギアP確認＋エンジン始動":"5. Foot Brake + Gear in P/N + Start Engine (エンジン始動)"}</h4>
              <p>${n?"右足でフットブレーキをしっかり踏み、ギアが「P」（MTは「N」＋クラッチ踏み込み）にあることを確認してエンジンを始動します。":"Hold the foot brake firmly, verify gear is in P (or N + clutch for MT), and start the engine."}</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">6</span>
            <div>
              <h4>${n?"ギアをD（1速）へ＋サイドブレーキ解除":"6. Shift to D (or 1st) + Release Handbrake (ギア・サイド解除)"}</h4>
              <p>${n?"ブレーキを踏んだままギアを「D」（MTは1速）に入れ、サイドブレーキを完全に下ろします（戻し忘れ走行は減点5点）。":"While holding the foot brake, shift to D (or 1st gear) and fully release the handbrake."}</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">7</span>
            <div>
              <h4>${n?"右ウインカー合図（発進3秒前）":"7. Activate Right Turn Signal 3 Seconds Before Pulling Out (右合図)"}</h4>
              <p>${n?"右ウインカー（Eキー）を出し、周囲の車に発進の意思を3秒間伝えます。":"Turn on the Right blinker (key E) at least 3 seconds before moving."}</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">8</span>
            <div>
              <h4>${n?"5点安全確認＋右後方死角の目視（首振り）→発進":"8. 5-Point Mirror & Right Blind-Spot Shoulder Check → Pull Out"}</h4>
              <p>${n?"①左ドアミラー → ②ルームミラー → ③前方 → ④右ドアミラー → ⑤右斜め後ろの死角を直接目視（Z/Xキーで首を振る）してから静かに発進します。":"Check Left mirror → Center mirror → Front → Right mirror → Physically turn your head over your right shoulder (Z/X keys) to check the blind spot, then pull out smoothly."}</p>
            </div>
          </div>
        </div>
      </div>
    `;return}if(t==="compound"){i.innerHTML=`
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${n?"🏫 自動車教習所・試験場 場内コース規則（外免切替技能確認・仮免修了検定）":"🏫 Driving Center Compound Rules (場内コース — Gaimen Kirikae & Karimen Exam)"}</strong>
          <p>${n?"場内コースは道路幅が狭く課題が連続するため、「キープレフト」「内輪差の計算」「完全停止と首振り目視」「切り返しの活用」が合否を分けます。":"Inside the driving school compound, examiners strictly grade lane positioning (Keep-Left), inner-wheel tracking (内輪差), complete 2-second stops, and smooth low-speed control."}</p>
        </div>

        <div class="rb-rule-cards">
          <div class="rb-rule-card">
            <h4>1. ${n?"左側通行とキープレフト・進路変更（3秒前合図）":"Keep-Left Principle & 30m / 3-Second Turn Signals"}</h4>
            <ul>
              <li>${n?"車線内の左端から約50〜70cmの位置（キープレフト）を維持して走行します。":"Maintain Keep-Left positioning (~50–70 cm from the left curb) on straightaways."}</li>
              <li>${n?"左折時はあらかじめ車を車線の左端へ寄せ（巻き込み防止）、交差点の30m手前で左ウインカーを出します。":"Before turning left: check left mirror + left blind spot, signal left 3sec before moving close to the left curb (blocking bicycles from squeezing inside), then turn tightly along the curb."}</li>
              <li>${n?"右折時はあらかじめ車線の中央線寄りに寄せ、交差点の中心のすぐ内側を徐行で通過します（ショートカット右折は減点）。":"Before turning right: check right mirror + right blind spot, signal right, move adjacent to the centerline, and pass just inside the center diamond (◇) at slow speed."}</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>2. ${n?"S字コース（狭路・曲線コース）とクランク（直角コース）":"S-Curve (S字コース) & 90° Crank (クランク)"}</h4>
            <ul>
              <li>${n?"コース内部ではウインカーは不要ですが、入口への進入時と出口からの合流時には必ず左右ウインカーと安全確認が必要です。":"Signal when entering and exiting the S-Curve and Crank (no signals needed for the internal bends)."}</li>
              <li>${n?"後輪は前輪よりも内側を通る「内輪差」があるため、クランクではコーナーの外側ギリギリまで進んでからハンドルを素早く切ります。":"Because rear wheels track tighter than front wheels (内輪差), drive deep toward the outer curb of each 90° Crank corner before turning the wheel sharply."}</li>
              <li>${n?"【重要】縁石に乗り上げそうな時は、当たる前に止まってバックする「切り返し（クランク・方向変換で1回目は減点なし、2〜3回目は5点減点、4回目は中止）」を使いましょう！脱輪したまま進むと一発検定中止です。":"CRITICAL PRO TIP — Kirikaeshi (切り返し): If you are about to hit a curb or pole in the Crank or Parking bay, STOP before touching it, shift to Reverse (R), look back, and back up to fix your angle. The 1st reversal costs 0 points! Mounting a curb without reversing back is an instant fail."}</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>3. ${n?"坂道発進（後退・逆行防止）":"Hill Start (坂道発進 — Zero Rollback)"}</h4>
            <ul>
              <li>${n?"上り坂の停止標示で一度完全停止し、サイドブレーキ（Space）を引きます。":"Stop completely at the sign on the uphill gradient and engage the handbrake (Space)."}</li>
              <li>${n?"アクセルを少し強めに踏んでエンジン回転数を上げ（MTは半クラッチ）、車が前に進もうとする力を感じてからサイドブレーキを解除します。0.3m以上の後退は減点10点、1.0m以上の後退は一発検定中止です。":"Apply gentle throttle (and half-clutch in MT) until you feel forward pull, check rear/right safety, then release the handbrake. Rolling backward >0.3m deducts -10 pts; >1.0m is an instant fail."}</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>4. ${n?"踏切通過と一時停止（止まれ）・見通しの悪い交差点":"Railroad Crossing (踏切), Stop Signs (止まれ) & Blind Corners"}</h4>
            <ul>
              <li>${n?"「止まれ」および踏切の停止線では、メーターが完全に0.0 km/hになるまで停止し、「1、2」と2秒数えてから左右を大きく首振り確認（Z/Xキー）します。":"At every 止まれ stop line and railroad crossing, stop at 0.0 km/h for a full 2-second count, then visibly turn your head Left (Z) and Right (X)."}</li>
              <li>${n?"踏切内ではエンスト防止のためギアチェンジ（変速）禁止です。また、前方に自分の車が入る余地がない時は踏切に進入してはいけません。":"Never shift gears while on railroad tracks, and never enter a crossing unless there is clear space for your entire vehicle on the far side."}</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>5. ${n?"方向変換・縦列駐車と駐車車両（障害物）回避":"Bay/Parallel Parking & Parked Obstacle Avoidance"}</h4>
            <ul>
              <li>${n?"バック（後退）する前には必ず後方の直接目視とミラー確認を行います。ポケットに入ったら完全停止し、出庫時はウインカーと左右確認を行います。":"Always look directly rearward and check all mirrors before reversing into the bay. Come to a full stop inside the bay before exiting."}</li>
              <li>${n?"北直線の駐車車両を追い越す時は：①右ミラー・右死角目視 → ②右ウインカー3秒 → ③1m以上の側方間隔を空けて通過 → ④左ミラー・左目視＋左ウインカーで左車線へ戻ります。":"Passing a parked obstacle: 1. Right mirror + right blind-spot look → 2. Right blinker for 3s → 3. Pass with ≥1.0m lateral clearance → 4. Left mirror + left look + Left blinker to return to the left lane."}</li>
            </ul>
          </div>
        </div>
      </div>
    `;return}if(t==="road"){i.innerHTML=`
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${n?"🛣️ 路上教習・本免卒業検定・日本の公道ルール（道路交通法）":"🛣️ Real Public Road Rules vs Compound Rules (路上教習・本免検定・道路交通法)"}</strong>
          <p>${n?"公道（路上試験）では、場内コースのルールに加えて「歩行者・自転車の絶対保護」「制限速度の厳守」「他車との円滑な流れ」「駐停車禁止場所の判断」がリアルタイムに試されます。":"On public roads in Japan, any failure to protect pedestrians/cyclists or obey statutory speed and parking rules triggers the examiner’s auxiliary brake (補助ブレーキ = immediate termination)."}</p>
        </div>

        <div class="rb-rule-cards">
          <div class="rb-rule-card">
            <h4>1. ${n?"横断歩道と歩行者・自転車の保護（最優先事項）":"Pedestrians & Cyclists Priority (Road Traffic Act Art. 38)"}</h4>
            <ul>
              <li>${n?"信号のない横断歩道の手前には30mと15mの位置に「◇（ダイヤマーク）」が路面に描かれています。◇を見たらすぐ減速準備をします。":"White diamond markings (◇) painted on the road warn you 30m and 15m ahead of an unsignalized pedestrian crosswalk."}</li>
              <li>${n?"横断歩道に歩行者・自転車がいる（または渡ろうとしている）時は、必ず停止線手前で一時停止します。横断歩道とその手前30m以内では追い越し・追い抜きともに絶対禁止です！":"If a pedestrian is crossing or waiting to cross, you MUST stop completely. Overtaking or passing any vehicle within 30m before a crosswalk is strictly illegal!"}</li>
              <li>${n?"歩行者や自転車のそばを通過する時は、1.0〜1.5m以上の安全な側方間隔を空けるか、空けられない場合は徐行します。":"Maintain at least 1.0–1.5m of safe lateral clearance when passing pedestrians or cyclists, or slow down to Jokō speed."}</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>2. ${n?"進路変更の3秒ルールと右左折の30mルール":"The 3-Second Lane Change Rule vs 30-Meter Turn Rule"}</h4>
            <ul>
              <li>${n?"【進路変更（車線変更）】①ミラー確認 → ②ウインカー点灯 → ③3秒間待つ → ④死角の直接目視 → ⑤緩やかに車線変更（ウインカーと同時にハンドルを切るのは減点！）。":"Lane Change 5-Step Sequence: 1. Check mirrors → 2. Turn on blinker → 3. Wait 3 full seconds → 4. Shoulder blind-spot check → 5. Steer smoothly. (Turning the wheel simultaneously with the blinker is a deduction!)."}</li>
              <li>${n?"【交差点の右左折】曲がる交差点の「30m手前」でウインカーを出します。":"Intersection Turns: Activate your turn signal 30 meters before the intersection."}</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>3. ${n?"法定最高速度とポンピングブレーキ":"Statutory Speed Limits & Pumping Brakes"}</h4>
            <ul>
              <li>${n?"標識がない一般道路の法定最高速度は「60 km/h」（原動機付自転車は30 km/h）。高速道路の本線車道は原則「100 km/h」（最低速度50 km/h）です。":"Statutory speed limit on ordinary roads without signs: 60 km/h for cars/motorcycles, 30 km/h for 50cc mopeds. Expressways: max 100 km/h, min 50 km/h."}</li>
              <li>${n?"停止する時は2〜3回に分けてブレーキを踏む「ポンピングブレーキ」で後続車にブレーキランプを点滅させて知らせ、停止直前に少し踏力を緩めてカックンブレーキを防ぎます。":'Use "Pumping Brakes" (2–3 gentle brake taps before final braking) to flash your brake lights and warn following traffic.'}</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>4. ${n?"駐停車禁止場所の数字暗記（学科＆路上試験必須）":"Mandatory No-Stopping & No-Parking Distances (Must Memorize!)"}</h4>
            <ul>
              <li>${n?"【駐停車禁止（止まること自体が禁止）】交差点・横断歩道・自転車横断帯とその端から「5m以内」、坂の頂上付近・勾配の急な坂、トンネル、軌道敷内、踏切とその端から「10m以内」、バス停の標示板から「10m以内」。":"NO STOPPING OR PARKING (駐停車禁止): Within 5m of intersections or crosswalks; within 10m of railroad crossings or bus stops; inside tunnels; on steep slopes or hill crests."}</li>
              <li>${n?"【駐車禁止（駐車のみ禁止）】消火栓・火災報知器・消防用防火水槽から「5m以内」、駐車場・車庫の出入口から「3m以内」、道路工事区域の端から「5m以内」、駐車の余地が「3.5m未満」になる場所。":"NO PARKING (駐車禁止): Within 5m of fire hydrants/fire alarms/roadworks; within 3m of garage driveways; or anywhere leaving less than 3.5m of clear road width on the right side."}</li>
            </ul>
          </div>
        </div>
      </div>
    `;return}if(t==="signs"){i.innerHTML=`
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${n?"🪧 日本の道路標識・標示ビジュアル図鑑（試験頻出8選）":"🪧 Visual Encyclopedia of Japanese Road Signs & Markings"}</strong>
          <p>${n?"規制標識（赤・青の丸や逆三角形）、警戒標識（黄色のひし形）、指示標識（青い五角形・四角形）の意味を正確に区別しましょう。":"Master the key Regulatory (Red/Blue circles & inverted triangles), Warning (Yellow diamonds), and Indication (Blue pentagon/square) signs tested in Japan."}</p>
        </div>
        <div id="rbSignsGrid" class="rb-signs-grid"></div>
      </div>
    `;const s=i.querySelector("#rbSignsGrid");for(const r of rx){const o=document.createElement("div");o.className="rb-sign-card";const a=document.createElement("canvas");a.width=104,a.height=104,a.className="rb-sign-canvas",r.draw(a.getContext("2d"),104,104);const l=document.createElement("div");l.innerHTML=`
        <h4>${n?r.titleJa:r.titleEn}</h4>
        <small style="color:#94a3b8;display:block;margin-bottom:4px;">${n?r.titleEn:r.titleJa}</small>
        <p>${n?r.descJa:r.descEn}</p>
      `,o.append(a,l),s.append(o)}return}i.innerHTML=`
    <div class="rb-doc-section">
      <div class="rb-doc-callout" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
        <div style="flex:1;min-width:260px;">
          <strong>${n?"📕 外免切替 学科試験コンプリート教本PDF（2025年10月新制度 50問・90%合格基準対応）":"📕 Gaimen Kirikae Complete Study Guide PDF (Oct 2025 New Format: 50 Questions / 90% Pass Rate)"}</strong>
          <p>${n?"リポジトリ同梱の42ページ完全教本PDF（全23章・模擬試験100問・ひっかけ問題対策）をブラウザ内で直接開くかダウンロードして学習できます。":"Open or download the complete 42-page Gaimen Kirikae Study Guide PDF bundled directly in this repository (23 Chapters, 100 Practice Questions & Cheat Sheet)."}</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <a href="./docs/Gaimen_Kirikae_Study_Guide.pdf" target="_blank" rel="noopener" class="startDriving" style="text-decoration:none;padding:10px 16px;border-radius:10px;display:inline-flex;align-items:center;gap:6px;">
            📖 ${n?"教本PDFを別タブで開く (Open PDF)":"Open Full Study Guide PDF (42p)"}
          </a>
          <a href="./docs/Gaimen_Kirikae_Study_Guide.pdf" download="Gaimen_Kirikae_Study_Guide.pdf" class="action-btn" style="text-decoration:none;padding:10px 14px;border-radius:10px;display:inline-flex;align-items:center;gap:6px;">
            ⬇️ ${n?"PDFダウンロード":"Download PDF"}
          </a>
        </div>
      </div>

      <h3 style="margin:14px 0 8px;font-size:15px;color:#e2e8f0;">
        ${n?"📊 警察庁 技能試験減点基準一覧（100点満点中70点以上で合格）":"📊 Official NPA Practical Exam Point Deduction Table (100 Pts Start → 70 Pts to Pass)"}
      </h3>
      <div class="rb-table-wrap">
        <table class="rb-table">
          <thead>
            <tr>
              <th>${n?"違反項目 (Violation)":"Violation Item"}</th>
              <th>${n?"減点 / 判定":"Deduction"}</th>
              <th>${n?"適用基準・詳細":"Japanese Exam Standard Details"}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="fail-row">
              <td><strong>${n?"指定場所一時不停止 (止まれ無視)":"Stop Sign Violation (止まれ)"}</strong></td>
              <td><span class="rb-badge-fail">${n?"検定中止 (一発不合格)":"INSTANT FAIL"}</span></td>
              <td>${n?"停止線手前で完全停止（0 km/h）せず通過した場合":"Failed to come to a dead 0 km/h stop before the stop line"}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${n?"信号無視 / 踏切不停止":"Red Light / Railroad No-Stop"}</strong></td>
              <td><span class="rb-badge-fail">${n?"検定中止 (一発不合格)":"INSTANT FAIL"}</span></td>
              <td>${n?"赤信号進入、または踏切手前での一時不停止・警報機無視":"Entered intersection on Red or crossed railway without stopping"}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${n?"歩行者保護違反 (横断歩道)":"Pedestrian Crosswalk Priority"}</strong></td>
              <td><span class="rb-badge-fail">${n?"検定中止 (一発不合格)":"INSTANT FAIL"}</span></td>
              <td>${n?"横断歩道上の歩行者の通行を妨害した場合（補助ブレーキ介入）":"Failed to stop and yield to a pedestrian on a crosswalk"}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${n?"ポール・障害物・他車接触":"Pole / Obstacle / Car Collision"}</strong></td>
              <td><span class="rb-badge-fail">${n?"検定中止 (一発不合格)":"INSTANT FAIL"}</span></td>
              <td>${n?"コースポール、パイロン、駐車車両、他の教習車への接触":"Contacted any course marker pole, cone, or vehicle"}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${n?"脱輪 (縁石乗り上げ)":"Curb Mount (脱輪)"}</strong></td>
              <td><span class="rb-badge-warn">-20 pts / FAIL</span></td>
              <td>${n?"すぐ停止して戻れば-20点、そのまま進行または2回目で検定中止":"-20 pts if immediately reversed; Instant Fail if continued or 2nd mount"}</td>
            </tr>
            <tr>
              <td><strong>${n?"坂道逆行 (後退)":"Hill Start Rollback (坂道後退)"}</strong></td>
              <td><span class="rb-badge-warn">-10 pts / FAIL</span></td>
              <td>${n?"0.3m〜1.0mの後退で-10点、1.0m以上の後退で検定中止":"-10 pts for 0.3–1.0m rollback; Instant Fail for >1.0m rollback"}</td>
            </tr>
            <tr>
              <td><strong>${n?"シートベルト未着用 / 接輪 / 速度超過":"No Seatbelt / Curb Scrape / Speeding"}</strong></td>
              <td><span class="rb-badge-pt">-10 pts</span></td>
              <td>${n?"ベルト未装着発進、縁石へのタイヤ接触、40km/h制限超過":"Unfastened seatbelt, tire brushing curb, or exceeding 40 km/h"}</td>
            </tr>
            <tr>
              <td><strong>${n?"乗車手順不備 / 安全確認不履行 / 合図不履行":"Pre-Drive Order / Missing Look / No Blinker"}</strong></td>
              <td><span class="rb-badge-pt">-5 pts</span></td>
              <td>${n?"シート→ミラー→ベルトの順序違反、首振り目視忘れ、ウインカー漏れ":"Out-of-order cockpit setup, skipping Z/X head checks, or missing turn signal"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin:16px 0 8px;font-size:15px;color:#e2e8f0;">
        ${n?"⚠️ 外免切替 学科試験（50問・90%合格）の「超頻出ひっかけ問題」トップ6":"⚠️ Top 6 Tricky Traps on the 50-Question Gaimen Kirikae Written Exam (From the PDF Guide)"}
      </h3>
      <div class="rb-rule-cards">
        <div class="rb-rule-card">
          <h4>Trap 1: ${n?"黄信号の意味は「注意して進め」ではない！":'Yellow Traffic Light ≠ "Proceed with Caution"!'}</h4>
          <p>${n?"×「黄信号は注意して進行できる」→ 誤り（FALSE）！黄信号は原則「止まれ（停止位置に近接していて安全に止まれない場合のみ進行可）」です。なお「黄色の点滅信号」は他の交通に注意して進行できます。":'FALSE: "A solid yellow light means proceed with caution." A solid yellow light means STOP (unless already so close to the stop line that you cannot stop safely). Only a FLASHING yellow light means proceed with caution.'}</p>
        </div>
        <div class="rb-rule-card">
          <h4>Trap 2: ${n?"青矢印信号と「Uターン（転回）」の関係":"Green Right-Turn Arrow & U-Turns"}</h4>
          <p>${n?"赤信号の下に「右向きの青矢印（→）」が出ている時は、右折だけでなく、転回禁止標識がない限り「転回（Uターン）」も可能です！":"TRUE: When a green right-turn arrow (→) is lit below a red light, you may make BOTH a right turn AND a U-turn (unless a No U-Turn sign is posted)."}</p>
        </div>
        <div class="rb-rule-card">
          <h4>Trap 3: ${n?"中央線が黄色の実線 vs 白の実線":"Yellow Centerline vs White Centerline for Overtaking"}</h4>
          <p>${n?"黄色の実線の中央線は「追い越しのための右側部分はみ出し通行禁止」（右側にはみ出さなければ同一車線内での追い越しは可）。白の実線は道幅6m以上の道路の中央線を示します。":"A solid YELLOW centerline prohibits crossing over the centerline into the right side to overtake (you may still overtake if you stay completely within your left side). A solid WHITE line simply marks the center of a road ≥6m wide."}</p>
        </div>
        <div class="rb-rule-card">
          <h4>Trap 4: ${n?"横断歩道の手前30m以内は「追い抜き」も禁止！":"Within 30m Before a Crosswalk: BOTH Overtaking AND Passing are Banned"}</h4>
          <p>${n?"横断歩道・自転車横断帯とその手前30m以内では、車線変更を伴う「追い越し」だけでなく、直進のまま前に出る「追い抜き」もすべて禁止です。":"Within 30m before a pedestrian or bicycle crosswalk, you must NOT pass any moving motor vehicle — neither by changing lanes (追い越し) nor by staying in your lane (追い抜き)."}</p>
        </div>
      </div>
    </div>
  `}const Wl=document.getElementById("simCanvas"),ln=new fv({canvas:Wl,antialias:!0,powerPreference:"high-performance"});ln.setPixelRatio(Math.min(2,window.devicePixelRatio||1));ln.setSize(window.innerWidth,window.innerHeight);ln.shadowMap.enabled=!0;ln.shadowMap.type=kh;ln.outputColorSpace=ye;const Ln=new zf,Ni=new sx(Ln),ox=new ix(Ni.kyoshujoGroup),tn=new ex(Ln),un=new nx(Ln),rs=new ll,Ue=new bv,Kt=new pv,Rt=Tv(),ax=window.matchMedia("(hover: none) and (pointer: coarse)").matches;ax&&(Rt.showTouchControls=!0);const Ce=new tx(Wl,window.innerWidth/window.innerHeight);Ce.setMirrorQuality(Rt.mirrorQuality,null);let Es="startBay",Qe="kyoshujo",Sn="kyoshujo-3d",Me=null,Pi=1.35,fo=17,fi=!1,po=1,Xl=0,Jl=0,mo=!1,ht=Pu(ms.startBay.x,ms.startBay.z,ms.startBay.heading,Rt.vehicleKind,Rt.transmission),xn=ku(Rt.vehicleKind);Ln.add(xn.root);Ce.setMode(Rt.cameraMode,ht,xn);Kt.setVolume(Rt.masterVolume,Rt.muted);const lx=document.getElementById("ui"),Uu=document.getElementById("uiToggle"),ql=Array.from(document.querySelectorAll(".quickViewBtn[data-view-target]")),Sh=document.getElementById("mirrorHud"),cx=document.getElementById("mirrorLeft"),hx=document.getElementById("mirrorCenter"),ux=document.getElementById("mirrorRight"),dx=document.getElementById("cockpitSignalHud"),fx=document.getElementById("cockpitLampLeft"),px=document.getElementById("cockpitLampRight"),en=document.getElementById("miniMap"),Yl=document.getElementById("miniMapClose"),mx=document.getElementById("speedVignette"),gx=document.getElementById("speedBlur"),_x=document.getElementById("wheelHudDial"),vx=document.getElementById("speed"),xx=document.getElementById("gear"),yx=document.getElementById("viewMode"),Mx=document.getElementById("position"),Sx=document.getElementById("heading"),Ex=document.getElementById("steerAngle"),bx=document.getElementById("signalStatusBox"),wx=document.getElementById("signalStatus"),Eh=document.getElementById("hudScore"),Tx=document.getElementById("hudModePill"),qr=document.getElementById("hudDirective"),fa=document.getElementById("violationToasts"),bh=document.getElementById("resetToast"),Ax=document.getElementById("stallBanner"),$l=document.getElementById("mobileControls");$l.hidden=!Rt.showTouchControls;const Rx={FL:document.getElementById("wheelFL"),FR:document.getElementById("wheelFR"),RL:document.getElementById("wheelRL"),RR:document.getElementById("wheelRR")},cl=document.getElementById("accelCurve"),Cx=document.getElementById("accelCurveValue"),Px=document.getElementById("accelCurveLine"),Yr=document.getElementById("accelCurveGuideX"),$r=document.getElementById("accelCurveGuideY"),wh=document.getElementById("accelCurveDot"),Lx=document.getElementById("accelCurveInputValue"),Ix=document.getElementById("accelCurveOutputValue"),cn={left:32,right:188,top:20,bottom:108,samples:32};function Fu(i,t=0){Pi=Se.clamp(i,.8,1.8),cl.value=String(Math.round(Pi*100)),Cx.textContent=Pi.toFixed(2);const e=[];for(let n=0;n<=cn.samples;n++){const s=n/cn.samples,r=Math.pow(s,Pi),o=Se.lerp(cn.left,cn.right,s),a=Se.lerp(cn.bottom,cn.top,r);e.push(`${o.toFixed(1)},${a.toFixed(1)}`)}Px.setAttribute("points",e.join(" ")),Ou(t)}function Ou(i){const t=Se.clamp(i,0,1),e=Math.pow(t,Pi),n=Se.lerp(cn.left,cn.right,t),s=Se.lerp(cn.bottom,cn.top,e);Yr.setAttribute("x1",n.toFixed(1)),Yr.setAttribute("y1",String(cn.bottom)),Yr.setAttribute("x2",n.toFixed(1)),Yr.setAttribute("y2",s.toFixed(1)),$r.setAttribute("x1",String(cn.left)),$r.setAttribute("y1",s.toFixed(1)),$r.setAttribute("x2",n.toFixed(1)),$r.setAttribute("y2",s.toFixed(1)),wh.setAttribute("cx",n.toFixed(1)),wh.setAttribute("cy",s.toFixed(1)),Lx.textContent=`${Math.round(t*100)}%`,Ix.textContent=`${Math.round(e*100)}%`}let bs=!0;function En(i){bs=i,lx.classList.toggle("collapsed",i);const t=Rt.locale==="ja";Uu.textContent=i?t?"メニューを表示":"Show Menu":t?"メニューを隠す":"Hide Menu"}Uu.addEventListener("click",()=>{Kt.unlock(),En(!bs)});document.getElementById("startDrivingBtn").addEventListener("click",()=>{Kt.unlock(),En(!0),Wl.focus({preventScroll:!0})});let Th=0;function Dx(){const i=Rt.locale==="ja";document.getElementById("resetToastText").textContent=i?"スタート地点に戻りました。もう一度！":"Back to the start — try again!",bh.classList.add("visible"),window.clearTimeout(Th),Th=window.setTimeout(()=>bh.classList.remove("visible"),1800)}const pa=["chase","cockpit","instructor","hood","orbit"];function Zl(i){Rt.cameraMode=i,Kn(Rt),Ce.setMode(i,ht,xn),ql.forEach(r=>{r.classList.toggle("is-active",r.dataset.viewTarget===i)});const t=i==="orbit",e=i==="cockpit"||i==="instructor";Sh.style.display=t?"none":e?"block":"flex",Sh.classList.toggle("cockpit-layout",e),dx.classList.toggle("is-visible",e);const n=Rt.locale==="ja",s={chase:n?"後方視点":"Chase View",cockpit:n?"運転席 (右ハンドル)":"Cockpit View",instructor:n?"助手席・検定員視点":"Instructor Seat View",hood:n?"ボンネット":"Hood View",orbit:n?"自由カメラ":"Free Orbit"};yx.textContent=s[i]}function Bu(){const i=pa.indexOf(Ce.getMode());Zl(pa[(i+1)%pa.length])}ql.forEach(i=>{i.addEventListener("click",()=>{Kt.unlock();const t=i.dataset.viewTarget;t&&Zl(t)})});document.getElementById("viewBtn").addEventListener("click",()=>{Kt.unlock(),Bu()});const li=document.getElementById("mapPreset"),ws=document.getElementById("mapWidth"),hl=document.getElementById("mapScale"),kx=document.getElementById("mapScaleValue");function go(i){const t=Math.round(i);ws.value=String(t),hl.value=String(t),kx.textContent=`${t} m`}function Ui(i,t,e,n){ht=Pu(i,t,e,Rt.vehicleKind,Rt.transmission),Ue.reset(n,ht),document.getElementById("examResultModal").hidden=!0,document.getElementById("violationFreezeOverlay").hidden=!0,jn=!1,lr(),Ce.setMode(Ce.getMode(),ht,xn)}function Cs(i,t="practice"){Es=i,Sn="kyoshujo-3d",li.value="kyoshujo-3d",Qe="kyoshujo",Ni.setKyoshujoVisible(!0),tn.setVisible(!1),go(ai*2);const e=ms[i];Ui(e.x,e.z,e.heading,t)}function Eo(i){if(i==="kyoshujo-3d"){Cs(Es,"practice");return}if(i==="custom"&&Me){Sn="custom",Qe="custom",Ni.setKyoshujoVisible(!1),tn.setVisible(!0),go(Me.mapWidth),Ui(Me.startX,Me.startZ,Me.startHeading,"practice");return}const t=uo.find(e=>e.id===i);t&&(Sn=t.id,li.value=t.id,Qe="custom",tn.loadProceduralTestCenter(t),Ni.setKyoshujoVisible(!1),tn.setVisible(!0),go(t.mapWidth),Ui(t.startX,t.startZ,t.startHeading,"practice"))}function bo(){Kt.unlock(),un.resetProgress();const i=un.getStartPose();un.hasRoute()&&i?Ui(i.x,i.z,i.heading,"practice"):Sn==="kyoshujo-3d"?Cs(Es,Ue.getMode()):Eo(Sn),Dx()}document.getElementById("resetBtn").addEventListener("click",bo);document.getElementById("quickResetBtn").addEventListener("click",bo);function wo(){const i=Rt.locale==="ja";li.innerHTML="";for(const n of uo){const s=document.createElement("option");s.value=n.id,s.textContent=i?`${n.nameJa} (${n.nameEn})`:`${n.nameEn} (${n.nameJa})`,li.append(s)}if(Me){const n=document.createElement("option");n.value="custom",n.textContent=i?`カスタム地図 / Custom (${Me.fileName})`:`Custom Map / カスタム (${Me.fileName})`,li.append(n)}li.value=Sn;const t=document.getElementById("stationGrid");t.innerHTML="";for(const n of vv){const s=Iu[n],r=document.createElement("button");r.type="button",r.className="station-chip";const o=i?`${s.titleJa} · ${s.titleEn}`:`${s.titleEn} · ${s.titleJa}`,a=i?s.descJa:s.descEn;r.innerHTML=`<strong>${o}</strong><span>${a}</span>`,r.addEventListener("click",()=>{Kt.unlock(),Cs(n,"practice"),En(!0)}),t.append(r)}const e=document.getElementById("courseQuickList");e.innerHTML="";for(const n of uo){const s=document.createElement("li"),r=document.createElement("button");r.type="button",r.innerHTML=`<strong>${i?n.nameJa:n.nameEn}</strong><small>${i?n.nameEn:n.nameJa}</small>`,r.addEventListener("click",()=>{Kt.unlock(),Eo(n.id),En(!0)}),s.append(r),e.append(s)}}li.addEventListener("change",()=>{Kt.unlock(),Eo(li.value)});document.getElementById("modePracticeBtn").addEventListener("click",()=>{Kt.unlock(),Ue.reset("practice",ht),En(!0)});document.getElementById("modeExamBtn").addEventListener("click",()=>{Kt.unlock(),Cs("startBay","exam"),En(!0)});const ul=document.getElementById("vehicleType"),dl=document.getElementById("transmissionMode"),Ah=document.getElementById("maxSpeed"),Nx=document.getElementById("maxSpeedValue"),fl=document.getElementById("masterVolume"),zu=document.getElementById("masterVolumeValue"),pl=document.getElementById("steeringSensitivity"),Hu=document.getElementById("steeringSensitivityValue"),ml=document.getElementById("autoCenterSteering"),gl=document.getElementById("renderQuality"),_l=document.getElementById("settingTouchControls");ul.value=Rt.vehicleKind;dl.value=Rt.transmission;fl.value=String(Math.round(Rt.masterVolume*100));zu.textContent=`${Math.round(Rt.masterVolume*100)}%`;pl.value=String(Math.round(Rt.steeringSensitivity*100));Hu.textContent=`${Rt.steeringSensitivity.toFixed(2)}x`;ml.checked=Rt.autoCenterSteering;gl.value=Rt.mirrorQuality;_l.checked=Rt.showTouchControls;Fu(Pi,0);function Vu(){Ln.remove(xn.root),xn=ku(Rt.vehicleKind),Ln.add(xn.root),Ce.setMode(Ce.getMode(),ht,xn),ht.transmission=Rt.transmission,ht.gear=Rt.transmission==="AT"?"D":"1",ht.stalled=!1}ul.addEventListener("change",()=>{Rt.vehicleKind=ul.value,Kn(Rt),Vu()});dl.addEventListener("change",()=>{Rt.transmission=dl.value,Kn(Rt),Vu()});Ah.addEventListener("input",()=>{fo=Number(Ah.value),Nx.textContent=`${fo} m/s`});fl.addEventListener("input",()=>{Rt.masterVolume=Number(fl.value)/100,zu.textContent=`${Math.round(Rt.masterVolume*100)}%`,Kt.setVolume(Rt.masterVolume,Rt.muted),Kn(Rt)});pl.addEventListener("input",()=>{Rt.steeringSensitivity=Number(pl.value)/100,Hu.textContent=`${Rt.steeringSensitivity.toFixed(2)}x`,Kn(Rt)});ml.addEventListener("change",()=>{Rt.autoCenterSteering=ml.checked,Kn(Rt)});gl.addEventListener("change",()=>{Rt.mirrorQuality=gl.value,Ce.setMirrorQuality(Rt.mirrorQuality,xn),Kn(Rt)});_l.addEventListener("change",()=>{Rt.showTouchControls=_l.checked,$l.hidden=!Rt.showTouchControls,Kn(Rt)});cl.addEventListener("input",()=>{Fu(Number(cl.value)/100,0)});const Rh=document.getElementById("mapInput");Rh.addEventListener("change",()=>{var e;const i=(e=Rh.files)==null?void 0:e[0];if(!i)return;const t=new FileReader;t.onload=async()=>{const n=String(t.result),s=Math.max(40,Number(ws.value)||350),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Me=r,await tn.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await pr(r),Sn="custom",wo(),Eo("custom"),En(!0)},t.readAsDataURL(i)});const Gu=i=>{const t=Math.max(40,Math.min(1500,i));go(t),Qe==="custom"&&(tn.setWidth(t),Me&&(Me.mapWidth=t,pr(Me)))};ws.addEventListener("input",()=>Gu(Number(ws.value)||180));hl.addEventListener("input",()=>Gu(Number(hl.value)||180));document.getElementById("setSpawnBtn").addEventListener("click",()=>{Me&&Sn==="custom"?(Me.startX=ht.x,Me.startZ=ht.z,Me.startHeading=ht.heading,pr(Me)):ms[Es]={id:Es,x:ht.x,z:ht.z,heading:ht.heading},Kt.playClick(740,.04,.16)});document.getElementById("copyMapJsonBtn").addEventListener("click",async()=>{const i=JSON.stringify({course:Sn,mapWidth:Number(ws.value)||180,maxSpeed:fo,startPose:{x:Number(ht.x.toFixed(1)),z:Number(ht.z.toFixed(1)),heading:Number(ht.heading.toFixed(6))}},null,2);try{await navigator.clipboard.writeText(i)}catch{}});const Wu=document.getElementById("firstRunHint");document.getElementById("firstRunHintClose").addEventListener("click",()=>{Wu.hidden=!0});function _o(i){fi=i,i&&(po=1,Xl=0,Jl=0),en.classList.toggle("expanded",i),en.classList.remove("is-panning"),document.body.classList.toggle("minimap-expanded",i)}let vo=null,Xu=0,Ju=0,vl=0,xl=0;en.addEventListener("pointerdown",i=>{!fi||i.target===Yl||(vo=i.pointerId,Xu=vl=i.clientX,Ju=xl=i.clientY,mo=!1,en.setPointerCapture(i.pointerId))});en.addEventListener("pointermove",i=>{if(!fi||i.pointerId!==vo)return;const t=Math.hypot(i.clientX-Xu,i.clientY-Ju),e=i.clientX-vl,n=i.clientY-xl;if(vl=i.clientX,xl=i.clientY,t>=5){mo=!0,en.classList.add("is-panning");const s=en.getBoundingClientRect();Xl-=e/Math.max(1,s.width)*Ce.miniMapViewport.halfWidth*2,Jl-=n/Math.max(1,s.height)*Ce.miniMapViewport.halfHeight*2}});en.addEventListener("pointerup",i=>{i.pointerId===vo&&(vo=null,en.classList.remove("is-panning"))});en.addEventListener("click",i=>{if(i.target===Yl)return;if(mo){mo=!1;return}if(!fi){_o(!0);return}const t=en.getBoundingClientRect(),e=(i.clientX-t.left)/Math.max(1,t.width),n=(i.clientY-t.top)/Math.max(1,t.height),s=Ce.miniMapViewport.centerX+(e-.5)*Ce.miniMapViewport.halfWidth*2,r=Ce.miniMapViewport.centerZ+(n-.5)*Ce.miniMapViewport.halfHeight*2;Ui(s,r,ht.heading,Ue.getMode()),_o(!1)});en.addEventListener("wheel",i=>{if(!fi)return;i.preventDefault();const t=i.deltaY<0?1.18:1/1.18;po=Se.clamp(po*t,1,6)},{passive:!1});Yl.addEventListener("click",i=>{i.stopPropagation(),_o(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&fi&&_o(!1)});document.getElementById("gearCardBtn").addEventListener("click",()=>{Kt.unlock(),Lu(ht,1)});document.getElementById("stallRestartBtn").addEventListener("click",()=>{Kt.unlock(),ht.stalled=!1,ht.rpm=850});function Ux(i){var o;const t=Rt.locale==="ja",e=document.createElement("div");e.className=`violation-toast ${i.instantFail?"fail":""}`;const n=t?i.labelJa:i.labelEn,s=t?i.detailJa:i.detailEn,r=i.instantFail?t?"検定中止":"FAIL":`-${i.points}`;for(e.innerHTML=`<span class="vt-pts">${r}</span><div><strong>${n}</strong><p>${s}</p></div>`,fa.prepend(e);fa.children.length>3;)(o=fa.lastElementChild)==null||o.remove();window.setTimeout(()=>{e.classList.add("fade-out"),window.setTimeout(()=>e.remove(),320)},4200)}let qu="crank";function Yu(i){const t=Rt.locale,e=document.getElementById("examResultModal");e.hidden=!1,qu=i.weakArea??"crank",document.getElementById("examResultTitle").textContent=Wn(t,"examResultTitle");const n=document.getElementById("examStamp");n.textContent=i.passed?Wn(t,"examPassStamp"):Wn(t,"examFailStamp"),n.className=`exam-stamp ${i.passed?"pass":"fail"}`,document.getElementById("examResultSub").textContent=i.terminated?Wn(t,"examTerminatedSub"):i.passed?Wn(t,"examPassedSub"):Wn(t,"examFailedSub"),document.getElementById("examFinalScore").textContent=`${i.score} / 100`;const s=Math.floor(i.elapsedSec/60),r=Math.floor(i.elapsedSec%60);document.getElementById("examElapsed").textContent=`${s}:${r.toString().padStart(2,"0")}`,document.getElementById("examDistance").textContent=`${Math.round(i.distanceM)} m`;const o=document.getElementById("examViolationList");if(o.innerHTML="",i.violations.length===0){const a=document.createElement("li");a.className="clean-pass",a.textContent=Wn(t,"examNoViolations"),o.append(a)}else for(const a of i.violations){const l=document.createElement("li"),c=t==="ja"?a.labelJa:a.labelEn,u=t==="ja"?a.detailJa:a.detailEn,h=a.instantFail?t==="ja"?"中止":"FAIL":`-${a.points}`;l.innerHTML=`<span class="ev-badge ${a.instantFail?"fail":""}">${h}</span><span><strong>${c}</strong> — ${u}</span>`,o.append(l)}}document.getElementById("examRetryBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Cs("startBay","exam")});document.getElementById("examPracticeWeakBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Cs(qu,"practice")});document.getElementById("examCloseBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Ue.reset("practice",ht)});const Fx=document.getElementById("preDriveBar"),Ch=document.getElementById("pdCollapseBtn"),Ox=document.getElementById("pdAutoCompleteBtn"),$u=Array.from(document.querySelectorAll(".pd-step-chip[data-pd-step]"));function lr(){const i=ht.preDrive;if(!i)return;const t={1:i.doorLocked,2:i.seatAdjusted,3:i.mirrorsAdjusted,4:i.seatbeltFastened,5:i.brakeAndStartDone,6:i.handbrakeReleased,7:i.rightSignalOn,8:i.fivePointLookDone};let e=1;for(;e<=8&&t[e];)e++;for(const n of $u){const s=Number(n.dataset.pdStep),r=!!t[s];n.classList.toggle("done",r),n.classList.toggle("next-expected",!r&&s===e),n.classList.toggle("order-error",i.orderErrorStep===s)}}function jl(i,t=!0){Kt.unlock();const e=ht.preDrive;if(e){if(t){for(let n=1;n<i;n++)if(!e.completedSteps.includes(n)){e.orderErrorStep=i;break}}e.completedSteps.includes(i)||e.completedSteps.push(i),i===1?(e.doorLocked=!0,Kt.playClick(520,.04,.18)):i===2?(e.seatAdjusted=!0,Kt.playClick(380,.06,.18)):i===3?(e.mirrorsAdjusted=!0,ht.mirrorTouchTimer=1.1,Kt.playClick(680,.04,.16)):i===4?(e.seatbeltFastened=!0,Kt.playClick(880,.05,.22)):i===5?(e.brakeAndStartDone=!0,ht.stalled=!1,ht.rpm=860,Kt.playClick(460,.06,.2)):i===6?(e.handbrakeReleased=!0,ht.handbrake=!1,ht.gear=Rt.transmission==="AT"?"D":"1",Kt.playClick(540,.04,.16)):i===7?(e.rightSignalOn=!0,ht.blinker="right",ht.blinkerTimer=0,ht.blinkerOn=!0,Kt.playClick(720,.03,.15)):i===8&&(e.fivePointLookDone=!0,ht.lookAngleRad=55*Math.PI/180,ht.lookedLeftTimestamp=wn,window.setTimeout(()=>{ht.lookAngleRad=-64*Math.PI/180,ht.lookedRightTimestamp=wn},320),window.setTimeout(()=>{ht.lookAngleRad=0},780),Kt.playClick(940,.04,.18)),lr()}}$u.forEach(i=>{i.addEventListener("click",()=>{const t=Number(i.dataset.pdStep);t>=1&&t<=8&&jl(t,!0)})});Ox.addEventListener("click",()=>{ht.preDrive.orderErrorStep=void 0;for(let i=1;i<=8;i++)jl(i,!1)});Ch.addEventListener("click",()=>{const i=Fx.classList.toggle("collapsed");Ch.textContent=i?"+":"−"});window.addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)&&i.code.startsWith("Digit")){const t=Number(i.code.replace("Digit",""));t>=1&&t<=8&&jl(t,!0)}});const Kl=document.getElementById("violationFreezeOverlay"),Bx=document.getElementById("strictRuleFreezeChk"),cr=document.getElementById("vfQuizOpt0"),hr=document.getElementById("vfQuizOpt1"),os=document.getElementById("vfQuizFeedback"),yl=document.getElementById("vfUnderstoodChk"),zx=document.getElementById("vfConfirmRow"),no=document.getElementById("vfResumeBtn"),io=document.getElementById("vfRetryStationBtn");let jn=!1,Zu=0,Fi=!1,Oi=!1;function Ql(){const i=Rt.locale==="ja",t=Fi&&Oi;zx.classList.toggle("unlocked",t),no.disabled=!t,io.disabled=!t,t?(no.textContent=i?"✅ ルール理解確認済み：ロック解除して再開 [Space / Enter]":"✅ Rule Understood — Unfreeze & Resume Driving [Space / Enter]",io.textContent=i?"🔄 この課題を最初からやり直す (Retry Station)":"🔄 Retry This Station From Start"):(no.textContent=i?"🔒 上のクイズ正解＋「理解しました」チェックでロック解除":'🔒 Answer Quiz & Check "I Understand" Above to Unfreeze',io.textContent=i?"🔒 学習・確認後にやり直し可能":"🔒 Study & Confirm Above to Retry")}function ju(i){Kt.unlock();const t=Rt.locale==="ja",e=i===Zu,n=i===0?cr:hr,s=i===0?hr:cr;os.hidden=!1,e?(Fi=!0,n.classList.remove("wrong"),n.classList.add("correct"),s.classList.remove("wrong","correct"),os.className="vf-quiz-feedback pass",os.textContent=t?"⭕ 正解です！この日本の交通ルール・検定基準を正しく理解しました。下の「理解しました」にチェックを入れてロックを解除してください。":"⭕ Correct! You understand the official Japanese driving test rule. Check the confirmation box below to unfreeze.",Kt.playClick(880,.06,.22)):(Fi=!1,n.classList.add("wrong"),os.className="vf-quiz-feedback fail",os.textContent=t?"❌ 不正解です。上の「根拠法令・正しい運転操作・教本ポイント」をもう一度読んで正しい選択肢を選んでください。":"❌ Incorrect. Re-read the Japanese Road Traffic Act rule and textbook points above, then select the correct answer.",Kt.playClick(240,.08,.22)),Ql()}cr.addEventListener("click",()=>ju(0));hr.addEventListener("click",()=>ju(1));yl.addEventListener("change",()=>{Kt.unlock(),Oi=yl.checked,Oi&&Kt.playClick(760,.04,.18),Ql()});function Hx(i){jn=!0,Fi=!1,Oi=!1,yl.checked=!1,os.hidden=!0,cr.classList.remove("correct","wrong"),hr.classList.remove("correct","wrong"),ht.speedMs=0;const t=Rt.locale==="ja";document.getElementById("vfTagText").textContent=i.instantFail?t?"🚨 検定中止（一発不合格・補助ブレーキ作動） · INSTANT DISQUALIFICATION":"🚨 INSTANT DISQUALIFICATION (検定中止・補助ブレーキ作動)":t?`⚠️ 日本の技能試験基準 減点違反（-${i.points}点） · JAPANESE EXAM STANDARD VIOLATION`:`⚠️ JAPANESE DRIVING EXAM RULE VIOLATION (-${i.points} PTS · 技能試験減点)`,document.getElementById("vfTitleText").textContent=`${i.labelJa} · ${i.labelEn}`;const e=document.getElementById("vfBadgeText");e.textContent=i.instantFail?"検定中止 / FAIL":`-${i.points} PTS (減点)`,e.className=`vf-badge ${i.instantFail?"fail":""}`,document.getElementById("vfDetailJa").textContent=i.detailJa,document.getElementById("vfDetailEn").textContent=i.detailEn,document.getElementById("vfRuleRefJa").textContent=i.ruleRefJa??"道路交通法および警察庁「技能試験実施基準」に基づく減点対象行為です。",document.getElementById("vfRuleRefEn").textContent=i.ruleRefEn??"Point deduction enforced under the Japanese Road Traffic Act and NPA Practical Exam Standards.",document.getElementById("vfHowToFixJa").textContent=i.howToFixJa??"安全確認（ミラーと直接目視）および適切な速度・合図を行ってから進行してください。",document.getElementById("vfHowToFixEn").textContent=i.howToFixEn??"Perform full mirror + blind-spot checks, proper signaling, and speed control before proceeding.";const n=i.quiz;document.getElementById("vfChapterRefText").textContent=n?`${n.chapterRefJa} / ${n.chapterRefEn}`:"外免切替・技能試験 公式教本ポイント / Official Japanese Driving School Textbook";const s=document.getElementById("vfStudyPointsList");if(s.innerHTML="",n){for(let o=0;o<n.studyPointJa.length;o++){const a=document.createElement("li");a.innerHTML=`<strong>${n.studyPointJa[o]}</strong><br/><span style="color:#cbd5e1;font-size:11.5px;">${n.studyPointEn[o]??""}</span>`,s.append(a)}Zu=n.correctIndex,document.getElementById("vfQuizQuestionJa").textContent=n.questionJa,document.getElementById("vfQuizQuestionEn").textContent=n.questionEn,cr.innerHTML=`<strong>${n.optionsJa[0]}</strong><br/><span style="color:#cbd5e1;font-size:11.5px;">${n.optionsEn[0]}</span>`,hr.innerHTML=`<strong>${n.optionsJa[1]}</strong><br/><span style="color:#cbd5e1;font-size:11.5px;">${n.optionsEn[1]}</span>`}const r=Ue.getScore();document.getElementById("vfScoreRemainText").textContent=t?`現在の持ち点: ${r} / 100点 （合格基準: 70点以上）`:`Remaining Score: ${r} / 100 pts (Pass Threshold: 70 pts)`,Ql(),Kl.hidden=!1}function Ku(){if(jn){if(!Fi||!Oi){Kt.playClick(220,.07,.22);return}jn=!1,Kl.hidden=!0,Ue.isTerminated()&&Ue.getMode()==="exam"&&Yu(Ue.getSummary(ht))}}no.addEventListener("click",()=>{Kt.unlock(),Ku()});io.addEventListener("click",()=>{!Fi||!Oi||(Kt.unlock(),jn=!1,Kl.hidden=!0,bo())});document.getElementById("vfOpenRulebookBtn").addEventListener("click",()=>{Kt.unlock(),To("written")});window.addEventListener("keydown",i=>{jn&&(i.key==="Enter"||i.key===" ")&&Fi&&Oi&&(i.preventDefault(),Ku())});const tc=document.getElementById("rulebookModal"),Qu=document.getElementById("rulebookContentBody");let Gs="predrive";function To(i=Gs){Kt.unlock(),Gs=i,document.querySelectorAll("[data-rb-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.rbTab===Gs)}),Nu(Qu,Gs,Rt.locale),tc.hidden=!1}document.getElementById("quickRulebookBtn").addEventListener("click",()=>To());document.getElementById("openRulebookBtn").addEventListener("click",()=>To());document.getElementById("rulebookCloseBtn").addEventListener("click",()=>{tc.hidden=!0});document.querySelectorAll("[data-rb-tab]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.rbTab||"predrive";To(t)})});Ue.onViolation=i=>{Ux(i),Kt.playViolationChime(i.instantFail),Bx.checked&&Hx(i)};Ue.onExamFinish=i=>{jn||Yu(i)};const td=new Nv({onToggleBlinker:i=>{ht.blinker=ht.blinker===i?"off":i,ht.blinkerTimer=0,ht.blinkerOn=ht.blinker!=="off",ht.blinker==="right"&&ht.preDrive&&(ht.preDrive.rightSignalOn=!0,ht.preDrive.completedSteps.includes(7)||ht.preDrive.completedSteps.push(7),lr())},onToggleHandbrake:()=>{ht.handbrake=!ht.handbrake,Kt.playClick(420,.04,.16),!ht.handbrake&&ht.preDrive&&(ht.preDrive.handbrakeReleased=!0,ht.preDrive.completedSteps.includes(6)||ht.preDrive.completedSteps.push(6),lr())},onShiftGear:i=>{Lu(ht,i),Kt.playClick(620,.03,.14)},onCycleCamera:Bu,onResetVehicle:bo,onToggleMenu:()=>En(!bs),onIgnition:()=>{ht.stalled=!1,ht.rpm=850},onAnyInteraction:()=>{Kt.unlock(),Wu.hidden=!0}});td.bindTouchControls($l);function ed(){const i=Rt.locale==="ja";document.documentElement.lang=Rt.locale,En(bs),document.getElementById("quickLangEnBtn").classList.toggle("is-active",!i),document.getElementById("quickLangJaBtn").classList.toggle("is-active",i),document.getElementById("panelLangEnBtn").style.borderColor=i?"rgba(255,255,255,0.14)":"#34d399",document.getElementById("panelLangJaBtn").style.borderColor=i?"#34d399":"rgba(255,255,255,0.14)",document.getElementById("setupTitleText").textContent=i?"ドライブの準備 (Ready to drive)":"Ready to drive (ドライブの準備)",document.getElementById("setupLeadText").textContent=i?"車両とコースを選び、各教習課題へのワープや100点満点の修了検定を練習できます。":"Choose your vehicle and map, warp to any driving school obstacle, or start the 100-point exam.",document.getElementById("startDrivingBtn").textContent=i?"運転を始める (Start driving)":"Start driving (運転を始める)",document.getElementById("resetBtn").textContent=i?"車両リセット (Reset)":"Reset Vehicle (リセット)",document.getElementById("quickResetBtn").textContent=i?"リセット (O)":"Reset (O)",document.getElementById("lblVehicle").textContent=i?"車種 (Vehicle)":"Vehicle (車種)",document.getElementById("optSedan").textContent=i?"普通車セダン (右ハンドル) · RHD Sedan":"Sedan (RHD Corolla) · 普通車セダン",document.getElementById("optMoto").textContent=i?"普通二輪 (400cc) · Motorcycle":"Motorcycle (400cc) · 普通二輪",document.getElementById("lblTrans").textContent=i?"変速機 (Transmission)":"Transmission (変速機)",document.getElementById("optAT").textContent=i?"AT (オートマ・クリープあり)":"AT (Automatic · Creep)",document.getElementById("optMT").textContent=i?"MT (マニュアル5速)":"MT (Manual 5-Speed)",document.getElementById("lblMap").textContent=i?"コース / 試験場マップ (Course / Map)":"Course / Map (教習コース・試験場)",document.getElementById("modePracticeBtn").textContent=i?"自由練習 (Free Practice)":"Free Practice (自由練習)",document.getElementById("modeExamBtn").textContent=i?"修了検定 100点採点 (Mock Exam)":"Mock Exam 100-pt (修了検定)",document.getElementById("foldStationsTitle").textContent=i?"教習課題ワープ (Kyōshūjo Training Stations)":"Kyōshūjo Training Stations (教習課題ワープ)",document.getElementById("foldTuningTitle").textContent=i?"操作感とサウンド (Handling & sound)":"Handling & sound (操作感とサウンド)",document.getElementById("lblMaxSpeed").textContent=i?"最高速度 (Max Speed)":"Max Speed (最高速度)",document.getElementById("lblVolume").textContent=i?"音量 (Volume)":"Volume (音量)",document.getElementById("lblSteerSens").textContent=i?"ハンドル感度 (Steering Sensitivity)":"Steering Sensitivity (ハンドル感度)",document.getElementById("lblAutoCenter").textContent=i?"ハンドル自動復元 (Auto-center Steering)":"Auto-center Steering (ハンドル自動復元)",document.getElementById("lblMirrorQuality").textContent=i?"画質・ミラー描画 (Graphics & Mirrors)":"Graphics & Mirrors (画質・ミラー描画)",document.getElementById("optMirrorHigh").textContent=i?"高画質・3面ミラー (High · 3 Mirrors)":"High · Real-time 3 Mirrors (高画質)",document.getElementById("optMirrorLow").textContent=i?"標準・バランス (Medium · Balanced)":"Medium · Balanced (標準)",document.getElementById("optMirrorOff").textContent=i?"軽量・省電力 (Low · Save power)":"Low · Save power (軽量)",document.getElementById("lblTouchControls").textContent=i?"タッチ操作パネル表示 (Show touch controls)":"Show mobile touch controls (タッチ操作表示)",document.getElementById("curveTitle").textContent=i?"アクセル特性カーブ (Acceleration Curve)":"Acceleration Curve (アクセル特性)",document.getElementById("curveDesc").textContent=i?"横軸：アクセル入力 ／ 縦軸：駆動出力 (X: Input, Y: Output)":"X axis is throttle input, Y axis is drive output",document.getElementById("curveSoftLbl").textContent=i?"穏やか (Soft)":"Soft (穏やか)",document.getElementById("curveDirectLbl").textContent=i?"ダイレクト (Direct)":"Direct (直接)",document.getElementById("curveInputLbl").textContent=i?"入力 (Input)":"Current Input",document.getElementById("curveOutputLbl").textContent=i?"出力 (Output)":"Current Output",document.getElementById("foldMapTitle").textContent=i?"マップ編集・開始位置 (Map editor & spawn)":"Map editor & spawn (マップ編集・開始位置)",document.getElementById("uploadMapText").textContent=i?"地図アップロード (Upload)":"Upload Map (地図読込)",document.getElementById("setSpawnBtn").textContent=i?"開始位置に登録 (Set Spawn)":"Set Spawn (開始位置)",document.getElementById("viewBtn").textContent=i?"視点切替 (Change View)":"Change View (視点切替)",document.getElementById("copyMapJsonBtn").textContent=i?"JSONコピー (Copy JSON)":"Copy JSON (JSONコピー)",document.getElementById("lblCustomWidth").textContent=i?"マップ横幅 (Map Width m)":"Map Width m (マップ横幅)",document.getElementById("lblMapScale").textContent=i?"縮尺スケール (Map Scale)":"Map Scale (縮尺)",document.getElementById("foldHelpTitle").textContent=i?"操作ガイド (How to drive)":"How to drive (操作ガイド)";const t=document.getElementById("tipsContainer"),e=i?["W/A/S/D または 矢印キー : 運転 (Drive)","Q / E : 左右ウインカー (Signals) · H : ハザード","Space : サイドブレーキ (Handbrake)","Shift / Ctrl : ギア変更 (Shift Gear)","Z / X : 左右の安全確認 (Look Left/Right)","O : 車両リセット (Reset)","V : カメラ視点切替 (Cycle Views)"]:["W/A/S/D or Arrow Keys : Drive (運転)","Q / E : Turn Signals (ウインカー) · H : Hazard","Space : Handbrake (サイドブレーキ)","Shift / Ctrl : Shift Gear (ギア変更)","Z / X : Look Left & Right (左右安全確認)","O : Reset Vehicle (リセット)","V : Cycle Views (視点切替)"];t.innerHTML=e.map(s=>`<span>${s}</span>`).join(""),document.getElementById("helpMiniMapText").textContent=i?"右下のミニマップをクリックで拡大表示し、コース上の任意の場所をクリックするとそこへ車両がワープします。":"Click the mini map in the bottom-right corner to expand it, drag to pan, scroll to zoom, or click any spot to teleport the vehicle.",document.getElementById("foldDataTitle").textContent=i?"走行データ (Driving details)":"Driving details (走行データ)",document.getElementById("lblTelView").textContent=i?"視点 (View):":"View (視点):",document.getElementById("lblTelPos").textContent=i?"位置 (Position):":"Position (位置):",document.getElementById("lblTelHead").textContent=i?"方位 (Heading):":"Heading (方位):",document.getElementById("lblTelSteer").textContent=i?"舵角 (Steering):":"Steering (舵角):",document.getElementById("foldCoursesTitle").textContent=i?"試験場・教習コース一覧 (Built-in Test Center Courses)":"Built-in Test Center Courses (試験場コース一覧)";const n={chase:i?"後方 (Chase)":"Chase (後方)",cockpit:i?"運転席 (Cockpit)":"Cockpit (運転席)",instructor:i?"👨‍✈️ 検定員席 (Instructor)":"👨‍✈️ Instructor (検定員席)",hood:i?"ボンネット (Hood)":"Hood (ボンネット)",orbit:i?"自由 (Free)":"Free (自由)"};ql.forEach(s=>{const r=s.dataset.viewTarget||"chase";s.textContent=n[r]||r}),document.getElementById("quickRulebookBtn").textContent=i?"📖 教本・標識・PDF (Rules)":"📖 Rules & PDF (教本・標識)",document.getElementById("openRulebookBtn").textContent=i?"📖 教本・標識・減点基準・PDF (Rules & PDF)":"📖 Rules, Signs & Study PDF (教本・標識)",document.getElementById("lblStrictFreeze").textContent=i?"🚨 違反時に赤画面で一時停止＆解説 (Red Freeze on Rule Break)":"🚨 Red Freeze & Explain on Rule Break (違反時赤画面停止)",document.getElementById("pdTitleText").textContent=i?"👨‍✈️ 乗車〜発進手順 (Pre-Drive Order — ①〜⑧を順番にクリックまたはキー1〜8)":"👨‍✈️ Pre-Drive Exam Sequence (Click 1–8 in exact order before pulling out)",document.getElementById("pdAutoCompleteBtn").textContent=i?"⚡ 一括完了 (Auto-Complete)":"⚡ Auto-Complete (一括完了)",tc.hidden||Nu(Qu,Gs,Rt.locale),document.getElementById("lblMirrorL").textContent=i?"左ミラー · Left":"Left Mirror · 左",document.getElementById("lblMirrorC").textContent=i?"ルームミラー · Center":"Center Mirror · 中央",document.getElementById("lblMirrorR").textContent=i?"右ミラー · Right":"Right Mirror · 右",document.getElementById("cockpitLampLeft").textContent=i?"← 左合図 (Left)":"← Left (左)",document.getElementById("cockpitLampRight").textContent=i?"右合図 (Right) →":"Right (右) →",document.getElementById("lblHudSignal").textContent=i?"合図 (Signal):":"Signal (合図):",document.getElementById("lblMiniMap").textContent=i?"ミニマップ · Mini Map":"Mini Map · ミニマップ",document.getElementById("lblMiniMapHint").textContent=i?"ドラッグで移動・ホイールで拡大・地点クリックでワープ (Click any point to teleport)":"Hold and drag to pan. Wheel to zoom. Click any point on the course to teleport there.",document.getElementById("firstRunTitle").textContent=i?"運転をはじめましょう (Start driving)":"Start driving (運転をはじめましょう)",document.getElementById("firstRunText").textContent=i?"WASD/矢印キーで走行、Q/Eでウインカー、Spaceでブレーキ、Z/Xで左右目視、Vで視点切替、Oでリセット。":"WASD or arrow keys drive, Q/E signals, Space brakes, Z/X look left & right, V changes view, O resets.",document.getElementById("lblMobileSteerHint").textContent=i?"← 左右スワイプで操舵 (Swipe) →":"← Swipe to steer (スワイプ操舵) →",document.getElementById("lblMobileSigL").textContent=i?"↑ 左 (L)":"↑ Left",document.getElementById("lblMobileSigR").textContent=i?"右 (R) ↓":"Right ↓",document.getElementById("lblMobileGear").textContent=i?"ギア (Gear)":"Gear",document.getElementById("lblMobileBrake").textContent=i?"ブレーキ":"Brake",document.getElementById("lblMobileThrottle").textContent=i?"アクセル":"Throttle",wo(),Zl(Ce.getMode())}function Ao(i){Kt.unlock(),Rt.locale=i,Kn(Rt),ed()}document.getElementById("quickLangEnBtn").addEventListener("click",()=>Ao("en"));document.getElementById("quickLangJaBtn").addEventListener("click",()=>Ao("ja"));document.getElementById("panelLangEnBtn").addEventListener("click",()=>Ao("en"));document.getElementById("panelLangJaBtn").addEventListener("click",()=>Ao("ja"));const ec=document.getElementById("routeBuilderModal"),ur=document.getElementById("routeBuilderCanvas"),Ft=ur.getContext("2d"),Ml=document.getElementById("rbStatusText"),Ph=document.getElementById("rbUploadInput");let Sl="waypoint",Ae=[],$n=[],Zs=[];function nc(){return Qe==="custom"?tn.currentSize:{width:ai*2,height:Ci*2}}function ic(){Zs.push({waypoints:Ae.map(i=>({...i})),stamps:$n.map(i=>({...i}))}),Zs.length>30&&Zs.shift()}function Ps(){const i=ur.width,t=ur.height;Ft.clearRect(0,0,i,t);const e=nc(),n=Qe==="custom"?tn.getActiveSource():null;if(n)Ft.drawImage(n,0,0,i,t);else{Ft.fillStyle="#1e2f23",Ft.fillRect(0,0,i,t);const r=(_,x)=>[(_/e.width+.5)*i,(x/e.height+.5)*t];Ft.strokeStyle="#475569",Ft.lineWidth=22,Ft.lineCap="round",Ft.strokeRect(i*.08,t*.12,i*.84,t*.76),Ft.beginPath();const[o,a]=r(0,-46),[l,c]=r(0,46),[u,h]=r(-76,0),[d,g]=r(76,0);Ft.moveTo(o,a),Ft.lineTo(l,c),Ft.moveTo(u,h),Ft.lineTo(d,g),Ft.stroke()}const s=(r,o)=>[(r/e.width+.5)*i,(o/e.height+.5)*t];if(Ae.length>=2){Ft.save(),Ft.strokeStyle="#34d399",Ft.lineWidth=5,Ft.lineCap="round",Ft.lineJoin="round",Ft.beginPath(),Ae.forEach((r,o)=>{const[a,l]=s(r.x,r.z);o===0?Ft.moveTo(a,l):Ft.lineTo(a,l)}),Ft.stroke();for(let r=0;r<Ae.length-1;r++){const[o,a]=s(Ae[r].x,Ae[r].z),[l,c]=s(Ae[r+1].x,Ae[r+1].z),u=(o+l)*.5,h=(a+c)*.5,d=Math.atan2(c-a,l-o);Ft.save(),Ft.translate(u,h),Ft.rotate(d),Ft.fillStyle="#fde047",Ft.beginPath(),Ft.moveTo(8,0),Ft.lineTo(-6,-5),Ft.lineTo(-6,5),Ft.closePath(),Ft.fill(),Ft.restore()}Ft.restore()}Ae.forEach((r,o)=>{const[a,l]=s(r.x,r.z);Ft.beginPath(),Ft.arc(a,l,13,0,Math.PI*2),Ft.fillStyle=o===0?"#059669":o===Ae.length-1?"#d62828":"#005bac",Ft.fill(),Ft.lineWidth=2.5,Ft.strokeStyle="#ffffff",Ft.stroke(),Ft.fillStyle="#ffffff",Ft.font="bold 12px sans-serif",Ft.textAlign="center",Ft.textBaseline="middle";const c=o===0?"S":o===Ae.length-1?"G":String(o);Ft.fillText(c,a,l)});for(const r of $n){const[o,a]=s(r.x,r.z);Ft.save(),Ft.translate(o,a),Ft.fillStyle=r.kind==="stopSign"?"#dc2626":r.kind==="trafficLight"?"#f59e0b":"#ec4899",Ft.beginPath(),Ft.arc(0,0,11,0,Math.PI*2),Ft.fill(),Ft.strokeStyle="#fff",Ft.lineWidth=2,Ft.stroke(),Ft.fillStyle="#fff",Ft.font="bold 10px sans-serif",Ft.textAlign="center",Ft.textBaseline="middle",Ft.fillText(r.kind==="stopSign"?"止":r.kind==="trafficLight"?"信":"P",0,0),Ft.restore()}Ml.textContent=Rt.locale==="ja"?`ポイント: ${Ae.length}点 ／ 3D標識: ${$n.length}個`:`Waypoints: ${Ae.length} · 3D Stamps: ${$n.length}`}function nd(){Kt.unlock();const i=un.getData();Ae=i.waypoints.map(t=>({...t})),$n=i.stamps.map(t=>({...t})),Zs=[],ec.hidden=!1,Ps()}document.getElementById("openRouteBuilderBtn").addEventListener("click",nd);document.getElementById("quickRouteBuilderBtn").addEventListener("click",nd);document.getElementById("rbCloseBtn").addEventListener("click",()=>{ec.hidden=!0});document.querySelectorAll("[data-rb-tool]").forEach(i=>{i.addEventListener("click",()=>{Sl=i.dataset.rbTool||"waypoint",document.querySelectorAll("[data-rb-tool]").forEach(t=>{t.classList.toggle("active",t===i)})})});ur.addEventListener("click",i=>{const t=ur.getBoundingClientRect(),e=(i.clientX-t.left)/Math.max(1,t.width),n=(i.clientY-t.top)/Math.max(1,t.height),s=nc(),r=(e-.5)*s.width,o=(n-.5)*s.height;if(ic(),Sl==="waypoint")Ae.push({x:r,z:o,turn:"straight"});else{let a=0;if(Ae.length>=1){const l=Ae[Ae.length-1];a=Math.atan2(-(r-l.x),-(o-l.z))}$n.push({kind:Sl,x:r,z:o,heading:a})}Ps()});document.getElementById("rbUndoBtn").addEventListener("click",()=>{const i=Zs.pop();i&&(Ae=i.waypoints,$n=i.stamps,Ps())});document.getElementById("rbClearBtn").addEventListener("click",()=>{ic(),Ae=[],$n=[],Ps()});Ph.addEventListener("change",()=>{var e;const i=(e=Ph.files)==null?void 0:e[0];if(!i)return;const t=new FileReader;t.onload=async()=>{const n=String(t.result),s=Math.max(80,Number(ws.value)||260),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Me=r,await tn.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await pr(r),Sn="custom",Qe="custom",Ni.setKyoshujoVisible(!1),tn.setVisible(!0),wo(),Ps()},t.readAsDataURL(i)});document.querySelectorAll("[data-trace-color]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.traceColor||"red",e=tn.getActiveSource();if(!e){Ml.textContent=Rt.locale==="ja"?"先にコース図画像をアップロードしてください":"Please upload a route map image first";return}const n=nc(),s=un.autoExtractRouteFromImage(e,n.width,t);if(s.length<2){Ml.textContent=Rt.locale==="ja"?"色線が見つかりませんでした。地図上をクリックしてルート点を追加してください":"No matching colored line found — click directly on the map to trace points";return}ic(),Ae=s,Ps()})});document.getElementById("rbSaveAndDriveBtn").addEventListener("click",()=>{un.setRouteData({waypoints:Ae,stamps:$n},!0),ec.hidden=!0,En(!0);const i=un.getStartPose();i&&(Me&&Qe==="custom"&&(Me.startX=i.x,Me.startZ=i.z,Me.startHeading=i.heading,pr(Me)),Ui(i.x,i.z,i.heading,"practice"))});function Vx(i){if(un.setMemoryMode(i),document.querySelectorAll("[data-memory-mode]").forEach(t=>{t.classList.toggle("active",t.dataset.memoryMode===i)}),i==="autodrive"&&un.hasRoute()){const t=un.getStartPose();t&&(Ui(t.x,t.z,t.heading,"practice"),un.resetProgress())}}document.querySelectorAll("[data-memory-mode]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.memoryMode||"guided";Vx(t)})});Av().then(async i=>{i&&(Me=i,await tn.loadFromDataUrl(i.imageDataUrl,i.mapWidth),wo())});ed();En(!0);window.addEventListener("resize",()=>{ln.setSize(window.innerWidth,window.innerHeight),Ce.resize(window.innerWidth/window.innerHeight)});const Gx=()=>({y:0,slopeX:0,slopeZ:0}),Si=1/120;let Zr=0,Lh=performance.now(),wn=0,Ih=-999;function id(i){requestAnimationFrame(id);const t=Math.min(.05,Math.max(0,(i-Lh)/1e3));Lh=i,Zr+=t;const n={...Cu(Rt.vehicleKind),maxSpeedMs:fo},s=td.getInputState(),r=un.update(t,ht,rs,Rt.locale,wn),o=r.autoDriveInput??s,a={...o,throttle:o.throttle>0?Math.pow(o.throttle,Pi):0};bs||Ou(o.throttle);let l=_h(ht,n);for(jn&&(Zr=0);Zr>=Si&&!jn;){if(wn+=Si,rs.update(Si),Iv(ht,a,n,Si,{steeringSensitivity:Rt.steeringSensitivity,autoCenterSteering:Rt.autoCenterSteering,simTimeSec:wn},Qe==="custom"?Gx:void 0),ht.preDrive&&!ht.preDrive.fivePointLookDone&&wn-ht.lookedRightTimestamp<1.5&&(ht.preDrive.fivePointLookDone=!0,ht.preDrive.completedSteps.includes(8)||ht.preDrive.completedSteps.push(8),lr()),Qe==="kyoshujo"){const T=ox.update(Si,ht,rs);l=_h(ht,n),(l.pushX!==0||l.pushZ!==0)&&(ht.x+=l.pushX,ht.z+=l.pushZ,Dv(ht,n),(l.poleHit||l.obstacleHit)&&(ht.speedMs*=.35,wn-Ih>.6&&(Ih=wn,Kt.playThud()))),Ue.update(Si,ht,l,rs,T)}Zr-=Si}const c=Ue.getCurrentWaypoint(),u=c?{x:c.x,z:c.z}:null;Qv(xn,ht,Rt.vehicleKind),Ni.updateShadowFocus(ht.x,ht.z),Ni.updateDynamic(rs,u,wn);const h=rs.getRailroadState();Kt.update(ht,Qe==="kyoshujo"&&h.isWarningActive,wn);const d=Math.abs(ht.speedMs),g=Math.pow(Se.clamp((d-6)/14,0,1),1.8);mx.style.opacity=(g*.75).toFixed(3),gx.style.opacity=(g*.88).toFixed(3),Ce.update(t,ht,Rt.vehicleKind,xn,ln,Ln);const _=!bs||fi;Ce.renderPiPMirrors(ln,Ln,ht,cx,hx,ux,_);const x=Qe==="kyoshujo"?{width:ai*2,height:Ci*2}:tn.currentSize;Ce.renderPiPMiniMap(ln,Ln,en,ht,x,fi,po,Xl,Jl),ln.setViewport(0,0,window.innerWidth,window.innerHeight),ln.setScissorTest(!1),ln.render(Ln,Ce.camera);const m=Rt.locale==="ja";vx.textContent=(d*3.6).toFixed(1),xx.textContent=ht.gear,Mx.textContent=`${ht.x.toFixed(1)}, ${ht.z.toFixed(1)}`;const f=Se.radToDeg(ht.heading);Sx.textContent=`${f.toFixed(1)}° / ${ht.heading.toFixed(4)} rad`;const S=Math.round(Se.radToDeg(ht.steeringWheelRad));Ex.textContent=String(S),_x.style.transform=`rotate(${-ht.steeringWheelRad}rad)`;const y=ht.blinkerOn&&(ht.blinker==="left"||ht.blinker==="hazard"),v=ht.blinkerOn&&(ht.blinker==="right"||ht.blinker==="hazard");fx.classList.toggle("is-active",y),px.classList.toggle("is-active",v),bx.dataset.signal=ht.blinker,wx.textContent=ht.blinker==="left"?m?"左合図":"Left":ht.blinker==="right"?m?"右合図":"Right":ht.blinker==="hazard"?"Hazard":"Off",Eh.textContent=String(Ue.getScore()),Eh.className=`score-num ${Ue.getScore()<70?"danger":""}`;const M=Ue.getMode()==="exam";Tx.textContent=M?Wn(Rt.locale,"modeExam"):Wn(Rt.locale,"modePractice");const E=Ue.getWaypointProgress();if(r.bannerText)qr.textContent=r.bannerText;else if(Qe==="custom"){const T=uo.find(C=>C.id===Sn);qr.textContent=T?m?`${T.nameJa} コース練習中`:`Practicing: ${T.nameEn}`:m?"カスタム地図コース走行中":"Driving custom course map"}else if(c)qr.textContent=`[${E.current+1}/${E.total}] ${m?c.instructionJa:c.instructionEn}`;else{const T=Iu[Es];qr.textContent=`${m?T.titleJa:T.titleEn}: ${m?T.descJa:T.descEn}`}Ax.hidden=!ht.stalled,["FL","FR","RL","RR"].forEach(T=>{const C=l.wheels[T],b=Rx[T];b.classList.toggle("mount",C.curbMount),b.classList.toggle("touch",!C.curbMount&&C.curbTouch),b.classList.toggle("close",!C.curbMount&&!C.curbTouch&&C.proximity>.35)})}requestAnimationFrame(id);
