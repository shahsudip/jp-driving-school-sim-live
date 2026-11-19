var xu=Object.defineProperty;var vu=(i,e,t)=>e in i?xu(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ue=(i,e,t)=>vu(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wl="180",ms={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_u=0,fc=1,yu=2,Vh=1,Gh=2,Jn=3,xi=0,Zt=1,Tt=2,mi=0,gs=1,pc=2,mc=3,gc=4,Mu=5,Ii=100,Su=101,Eu=102,bu=103,wu=104,Tu=200,Au=201,Ru=202,Cu=203,xa=204,va=205,Pu=206,Lu=207,Iu=208,Du=209,ku=210,Nu=211,Uu=212,Fu=213,Ou=214,_a=0,ya=1,Ma=2,Es=3,Sa=4,Ea=5,ba=6,wa=7,Wh=0,Bu=1,zu=2,gi=0,Hu=1,Vu=2,Gu=3,Wu=4,Xu=5,qu=6,Ju=7,Xh=300,bs=301,ws=302,Ta=303,Aa=304,Mo=306,sr=1e3,Ni=1001,Ra=1002,wn=1003,$u=1004,br=1005,Dn=1006,Po=1007,Ui=1008,Fn=1009,qh=1010,Jh=1011,rr=1012,Tl=1013,Hi=1014,Kn=1015,Ds=1016,Al=1017,Rl=1018,or=1020,$h=35902,Yh=35899,Zh=1021,jh=1022,Mn=1023,ar=1026,lr=1027,Kh=1028,Cl=1029,Qh=1030,Pl=1031,Ll=1033,no=33776,io=33777,so=33778,ro=33779,Ca=35840,Pa=35841,La=35842,Ia=35843,Da=36196,ka=37492,Na=37496,Ua=37808,Fa=37809,Oa=37810,Ba=37811,za=37812,Ha=37813,Va=37814,Ga=37815,Wa=37816,Xa=37817,qa=37818,Ja=37819,$a=37820,Ya=37821,Za=36492,ja=36494,Ka=36495,Qa=36283,el=36284,tl=36285,nl=36286,Yu=3200,Zu=3201,ed=0,ju=1,ui="",gt="srgb",Ts="srgb-linear",ao="linear",ut="srgb",$i=7680,xc=519,Ku=512,Qu=513,ef=514,td=515,tf=516,nf=517,sf=518,rf=519,il=35044,vc="300 es",kn=2e3,lo=2001;class qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const Ks=Math.PI/180,cr=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Il(i,e){return(i%e+e)%e}function of(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function af(i,e,t){return i!==e?(t-i)/(e-i):0}function Qs(i,e,t){return(1-t)*i+t*e}function lf(i,e,t,n){return Qs(i,e,1-Math.exp(-t*n))}function cf(i,e=1){return e-Math.abs(Il(i,e*2)-e)}function hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function uf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ff(i,e){return i+Math.random()*(e-i)}function pf(i){return i*(.5-Math.random())}function mf(i){i!==void 0&&(_c=i);let e=_c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gf(i){return i*Ks}function xf(i){return i*cr}function vf(i){return(i&i-1)===0&&i!==0}function _f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),f=r((n-e)/2),x=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*x,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*x,a*l);break;case"ZYZ":i.set(c*x,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:Ks,RAD2DEG:cr,generateUUID:Un,clamp:Qe,euclideanModulo:Il,mapLinear:of,inverseLerp:af,lerp:Qs,damp:lf,pingpong:cf,smoothstep:hf,smootherstep:df,randInt:uf,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:xf,isPowerOfTwo:vf,ceilPowerOfTwo:_f,floorPowerOfTwo:yf,setQuaternionFromProperEuler:Mf,normalize:ht,denormalize:yn};class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],f=r[o+1],x=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=f,e[t+2]=x,e[t+3]=_;return}if(d!==_||c!==u||l!==f||h!==x){let p=1-a;const m=c*u+l*f+h*x+d*_,S=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const y=Math.sqrt(M),b=Math.atan2(y,m*S);p=Math.sin(p*b)/y,a=Math.sin(a*b)/y}const v=a*S;if(c=c*p+u*v,l=l*p+f*v,h=h*p+x*v,d=d*p+_*v,p===1-a){const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return e[t]=a*x+h*d+c*f-l*u,e[t+1]=c*x+h*u+l*d-a*f,e[t+2]=l*x+h*f+a*u-c*d,e[t+3]=h*x-a*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"YZX":this._x=u*h*d+l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d-u*f*x;break;case"XZY":this._x=u*h*d-l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d+u*f*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lo.copy(this).projectOnVector(e),this.sub(Lo)}reflect(e){return this.sub(Lo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lo=new D,yc=new Vi;class Ke{constructor(e,t,n,s,r,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],x=n[8],_=s[0],p=s[3],m=s[6],S=s[1],M=s[4],v=s[7],y=s[2],b=s[5],T=s[8];return r[0]=o*_+a*S+c*y,r[3]=o*p+a*M+c*b,r[6]=o*m+a*v+c*T,r[1]=l*_+h*S+d*y,r[4]=l*p+h*M+d*b,r[7]=l*m+h*v+d*T,r[2]=u*_+f*S+x*y,r[5]=u*p+f*M+x*b,r[8]=u*m+f*v+x*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,x=t*d+n*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=u*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Ke;function nd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){const i=co("canvas");return i.style.display="block",i}const Mc={};function hr(i){i in Mc||(Mc[i]=!0,console.warn(i))}function Ef(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Sc=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bf(){const i={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ts]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gt},outputColorSpaceConfig:{drawingBufferColorSpace:gt}},[gt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Sc,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gt}}}),i}const lt=bf();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yi;class wf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=co("canvas")),Yi.width=e.width,Yi.height=e.height;const s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=co("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tf=0;class Dl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Un(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Do(s[o].image)):r.push(Do(s[o]))}else r=Do(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Af=0;const ko=new D;class Vt extends qi{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=Ni,s=Ni,r=Dn,o=Ui,a=Mn,c=Fn,l=Vt.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Un(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ko).x}get height(){return this.source.getSize(ko).y}get depth(){return this.source.getSize(ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Xh;Vt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],x=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(x+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,v=(f+1)/2,y=(m+1)/2,b=(h+u)/4,T=(d+_)/4,C=(x+p)/4;return M>v&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=T/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=C/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=T/r,s=C/r),this.set(n,s,r,t),this}let S=Math.sqrt((p-x)*(p-x)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-x)/S,this.y=(d-_)/S,this.z=(u-h)/S,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Rf extends qi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Vt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Dl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vi extends Rf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class id extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cf extends Vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(r,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bs),Tr.subVectors(this.max,Bs),Zi.subVectors(e.a,Bs),ji.subVectors(e.b,Bs),Ki.subVectors(e.c,Bs),ri.subVectors(ji,Zi),oi.subVectors(Ki,ji),wi.subVectors(Zi,Ki);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-wi.z,wi.y,ri.z,0,-ri.x,oi.z,0,-oi.x,wi.z,0,-wi.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-wi.y,wi.x,0];return!No(t,Zi,ji,Ki,Tr)||(t=[1,0,0,0,1,0,0,0,1],!No(t,Zi,ji,Ki,Tr))?!1:(Ar.crossVectors(ri,oi),t=[Ar.x,Ar.y,Ar.z],No(t,Zi,ji,Ki,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hn=[new D,new D,new D,new D,new D,new D,new D,new D],xn=new D,wr=new vr,Zi=new D,ji=new D,Ki=new D,ri=new D,oi=new D,wi=new D,Bs=new D,Tr=new D,Ar=new D,Ti=new D;function No(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ti.fromArray(i,r);const a=s.x*Math.abs(Ti.x)+s.y*Math.abs(Ti.y)+s.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),h=n.dot(Ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Pf=new vr,zs=new D,Uo=new D;class kl{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Pf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zs.subVectors(e,this.center);const t=zs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zs.copy(e.center).add(Uo)),this.expandByPoint(zs.copy(e.center).sub(Uo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Vn=new D,Fo=new D,Rr=new D,ai=new D,Oo=new D,Cr=new D,Bo=new D;class sd{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fo.copy(e).add(t).multiplyScalar(.5),Rr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(Fo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Rr),a=ai.dot(this.direction),c=-ai.dot(Rr),l=ai.lengthSq(),h=Math.abs(1-o*o);let d,u,f,x;if(h>0)if(d=o*c-a,u=o*a-c,x=r*h,d>=0)if(u>=-x)if(u<=x){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fo).addScaledVector(Rr,u),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){Oo.subVectors(t,e),Cr.subVectors(n,e),Bo.crossVectors(Oo,Cr);let o=this.direction.dot(Bo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const c=a*this.direction.dot(Cr.crossVectors(ai,Cr));if(c<0)return null;const l=a*this.direction.dot(Oo.cross(ai));if(l<0||c+l>o)return null;const h=-a*ai.dot(Bo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,r,o,a,c,l,h,d,u,f,x,_,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,f,x,_,p)}set(e,t,n,s,r,o,a,c,l,h,d,u,f,x,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=x,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,f=o*d,x=a*h,_=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=f+x*l,t[5]=u-_*l,t[9]=-a*c,t[2]=_-u*l,t[6]=x+f*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,f=c*d,x=l*h,_=l*d;t[0]=u+_*a,t[4]=x*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-x,t[6]=_+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,f=c*d,x=l*h,_=l*d;t[0]=u-_*a,t[4]=-o*d,t[8]=x+f*a,t[1]=f+x*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,f=o*d,x=a*h,_=a*d;t[0]=c*h,t[4]=x*l-f,t[8]=u*l+_,t[1]=c*d,t[5]=_*l+u,t[9]=f*l-x,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,f=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=_-u*d,t[8]=x*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=f*d+x,t[10]=u-_*d}else if(e.order==="XZY"){const u=o*c,f=o*l,x=a*c,_=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+_,t[5]=o*h,t[9]=f*d-x,t[2]=x*d-f,t[6]=a*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lf,e,If)}lookAt(e,t,n){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),li.crossVectors(n,tn),li.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),li.crossVectors(n,tn)),li.normalize(),Pr.crossVectors(tn,li),s[0]=li.x,s[4]=Pr.x,s[8]=tn.x,s[1]=li.y,s[5]=Pr.y,s[9]=tn.y,s[2]=li.z,s[6]=Pr.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],x=n[2],_=n[6],p=n[10],m=n[14],S=n[3],M=n[7],v=n[11],y=n[15],b=s[0],T=s[4],C=s[8],w=s[12],E=s[1],I=s[5],U=s[9],H=s[13],Z=s[2],X=s[6],Y=s[10],j=s[14],W=s[3],me=s[7],Me=s[11],we=s[15];return r[0]=o*b+a*E+c*Z+l*W,r[4]=o*T+a*I+c*X+l*me,r[8]=o*C+a*U+c*Y+l*Me,r[12]=o*w+a*H+c*j+l*we,r[1]=h*b+d*E+u*Z+f*W,r[5]=h*T+d*I+u*X+f*me,r[9]=h*C+d*U+u*Y+f*Me,r[13]=h*w+d*H+u*j+f*we,r[2]=x*b+_*E+p*Z+m*W,r[6]=x*T+_*I+p*X+m*me,r[10]=x*C+_*U+p*Y+m*Me,r[14]=x*w+_*H+p*j+m*we,r[3]=S*b+M*E+v*Z+y*W,r[7]=S*T+M*I+v*X+y*me,r[11]=S*C+M*U+v*Y+y*Me,r[15]=S*w+M*H+v*j+y*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],x=e[3],_=e[7],p=e[11],m=e[15];return x*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*f-n*c*f)+_*(+t*c*f-t*l*u+r*o*u-s*o*f+s*l*h-r*c*h)+p*(+t*l*d-t*a*f-r*o*d+n*o*f+r*a*h-n*l*h)+m*(-s*a*h-t*c*d+t*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],x=e[12],_=e[13],p=e[14],m=e[15],S=d*p*l-_*u*l+_*c*f-a*p*f-d*c*m+a*u*m,M=x*u*l-h*p*l-x*c*f+o*p*f+h*c*m-o*u*m,v=h*_*l-x*d*l+x*a*f-o*_*f-h*a*m+o*d*m,y=x*d*c-h*_*c-x*a*u+o*_*u+h*a*p-o*d*p,b=t*S+n*M+s*v+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=S*T,e[1]=(_*u*r-d*p*r-_*s*f+n*p*f+d*s*m-n*u*m)*T,e[2]=(a*p*r-_*c*r+_*s*l-n*p*l-a*s*m+n*c*m)*T,e[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*f-n*c*f)*T,e[4]=M*T,e[5]=(h*p*r-x*u*r+x*s*f-t*p*f-h*s*m+t*u*m)*T,e[6]=(x*c*r-o*p*r-x*s*l+t*p*l+o*s*m-t*c*m)*T,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*f+t*c*f)*T,e[8]=v*T,e[9]=(x*d*r-h*_*r-x*n*f+t*_*f+h*n*m-t*d*m)*T,e[10]=(o*_*r-x*a*r+x*n*l-t*_*l-o*n*m+t*a*m)*T,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*f-t*a*f)*T,e[12]=y*T,e[13]=(h*_*s-x*d*s+x*n*u-t*_*u-h*n*p+t*d*p)*T,e[14]=(x*a*s-o*_*s-x*n*c+t*_*c+o*n*p-t*a*p)*T,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*u+t*a*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,x=r*d,_=o*h,p=o*d,m=a*d,S=c*l,M=c*h,v=c*d,y=n.x,b=n.y,T=n.z;return s[0]=(1-(_+m))*y,s[1]=(f+v)*y,s[2]=(x-M)*y,s[3]=0,s[4]=(f-v)*b,s[5]=(1-(u+m))*b,s[6]=(p+S)*b,s[7]=0,s[8]=(x+M)*T,s[9]=(p-S)*T,s[10]=(1-(u+_))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Qi.set(s[0],s[1],s[2]).length();const o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const l=1/r,h=1/o,d=1/a;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=kn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let x,_;if(c)x=r/(o-r),_=o*r/(o-r);else if(a===kn)x=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===lo)x=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s);let x,_;if(c)x=1/(o-r),_=o/(o-r);else if(a===kn)x=-2/(o-r),_=-(o+r)/(o-r);else if(a===lo)x=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new D,vn=new _t,Lf=new D(0,0,0),If=new D(1,1,1),li=new D,Pr=new D,tn=new D,bc=new _t,wc=new Vi;class On{constructor(e=0,t=0,n=0,s=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class rd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Df=0;const Tc=new D,es=new Vi,Gn=new _t,Lr=new D,Hs=new D,kf=new D,Nf=new Vi,Ac=new D(1,0,0),Rc=new D(0,1,0),Cc=new D(0,0,1),Pc={type:"added"},Uf={type:"removed"},ts={type:"childadded",child:null},zo={type:"childremoved",child:null};class Ot extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new D,t=new On,n=new Vi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(Ac,e)}rotateY(e){return this.rotateOnAxis(Rc,e)}rotateZ(e){return this.rotateOnAxis(Cc,e)}translateOnAxis(e,t){return Tc.copy(e).applyQuaternion(this.quaternion),this.position.add(Tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ac,e)}translateY(e){return this.translateOnAxis(Rc,e)}translateZ(e){return this.translateOnAxis(Cc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Lr.copy(e):Lr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Hs,Lr,this.up):Gn.lookAt(Lr,Hs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Gn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pc),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uf),zo.child=e,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pc),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,e,kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Nf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),x.length>0&&(n.nodes=x)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new D(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new D,Wn=new D,Ho=new D,Xn=new D,ns=new D,is=new D,Lc=new D,Vo=new D,Go=new D,Wo=new D,Xo=new xt,qo=new xt,Jo=new xt;class pn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),_n.subVectors(e,t),s.cross(_n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){_n.subVectors(s,t),Wn.subVectors(n,t),Ho.subVectors(e,t);const o=_n.dot(_n),a=_n.dot(Wn),c=_n.dot(Ho),l=Wn.dot(Wn),h=Wn.dot(Ho),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,x=(o*h-a*c)*u;return r.set(1-f-x,x,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Xn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Xn.x),c.addScaledVector(o,Xn.y),c.addScaledVector(a,Xn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Xo.setScalar(0),qo.setScalar(0),Jo.setScalar(0),Xo.fromBufferAttribute(e,t),qo.fromBufferAttribute(e,n),Jo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Xo,r.x),o.addScaledVector(qo,r.y),o.addScaledVector(Jo,r.z),o}static isFrontFacing(e,t,n,s){return _n.subVectors(n,t),Wn.subVectors(e,t),_n.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ns.subVectors(s,n),is.subVectors(r,n),Vo.subVectors(e,n);const c=ns.dot(Vo),l=is.dot(Vo);if(c<=0&&l<=0)return t.copy(n);Go.subVectors(e,s);const h=ns.dot(Go),d=is.dot(Go);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(ns,o);Wo.subVectors(e,r);const f=ns.dot(Wo),x=is.dot(Wo);if(x>=0&&f<=x)return t.copy(r);const _=f*l-c*x;if(_<=0&&l>=0&&x<=0)return a=l/(l-x),t.copy(n).addScaledVector(is,a);const p=h*x-f*d;if(p<=0&&d-h>=0&&f-x>=0)return Lc.subVectors(r,s),a=(d-h)/(d-h+(f-x)),t.copy(s).addScaledVector(Lc,a);const m=1/(p+_+u);return o=_*m,a=u*m,t.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function $o(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Il(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=$o(o,r,e+1/3),this.g=$o(o,r,e),this.b=$o(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return lt.workingToColorSpace(zt.copy(this),e),Math.round(Qe(zt.r*255,0,255))*65536+Math.round(Qe(zt.g*255,0,255))*256+Math.round(Qe(zt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(zt.copy(this),t);const n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=gt){lt.workingToColorSpace(zt.copy(this),e);const t=zt.r,n=zt.g,s=zt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Ir);const n=Qs(ci.h,Ir.h,t),s=Qs(ci.s,Ir.s,t),r=Qs(ci.l,Ir.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new tt;tt.NAMES=od;let Ff=0;class ks extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=gs,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=va,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==va&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pt extends ks{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new D,Dr=new fe;let Of=0;class Tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Of++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Dr.fromBufferAttribute(this,t),Dr.applyMatrix3(e),this.setXY(t,Dr.x,Dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==il&&(e.usage=this.usage),e}}class ad extends Tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ld extends Tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bf=0;const an=new _t,Yo=new Ot,ss=new D,nn=new vr,Vs=new vr,Ft=new D;class vt extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nd(e)?ld:ad)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,n){return an.makeTranslation(e,t,n),this.applyMatrix4(an),this}scale(e,t,n){return an.makeScale(e,t,n),this.applyMatrix4(an),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(nn.min,Vs.min),nn.expandByPoint(Ft),Ft.addVectors(nn.max,Vs.max),nn.expandByPoint(Ft)):(nn.expandByPoint(Vs.min),nn.expandByPoint(Vs.max))}nn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ft.fromBufferAttribute(a,l),c&&(ss.fromBufferAttribute(e,l),Ft.add(ss)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new D,c[C]=new D;const l=new D,h=new D,d=new D,u=new fe,f=new fe,x=new fe,_=new D,p=new D;function m(C,w,E){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,E),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,w),x.fromBufferAttribute(r,E),h.sub(l),d.sub(l),f.sub(u),x.sub(u);const I=1/(f.x*x.y-x.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(I),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(I),a[C].add(_),a[w].add(_),a[E].add(_),c[C].add(p),c[w].add(p),c[E].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,w=S.length;C<w;++C){const E=S[C],I=E.start,U=E.count;for(let H=I,Z=I+U;H<Z;H+=3)m(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new D,v=new D,y=new D,b=new D;function T(C){y.fromBufferAttribute(s,C),b.copy(y);const w=a[C];M.copy(w),M.sub(y.multiplyScalar(y.dot(w))).normalize(),v.crossVectors(b,w);const I=v.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,I)}for(let C=0,w=S.length;C<w;++C){const E=S[C],I=E.start,U=E.count;for(let H=I,Z=I+U;H<Z;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let u=0,f=e.count;u<f;u+=3){const x=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,x),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,x=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let m=0;m<h;m++)u[x++]=l[f++]}return new Tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=e(u,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ic=new _t,Ai=new sd,kr=new kl,Dc=new D,Nr=new D,Ur=new D,Fr=new D,Zo=new D,Or=new D,kc=new D,Br=new D;class ee extends Ot{constructor(e=new vt,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Zo.fromBufferAttribute(d,e),o?Or.addScaledVector(Zo,h):Or.addScaledVector(Zo.sub(t),h))}t.add(Or)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kr.copy(n.boundingSphere),kr.applyMatrix4(r),Ai.copy(e.ray).recast(e.near),!(kr.containsPoint(Ai.origin)===!1&&(Ai.intersectSphere(kr,Dc)===null||Ai.origin.distanceToSquared(Dc)>(e.far-e.near)**2))&&(Ic.copy(r).invert(),Ai.copy(e.ray).applyMatrix4(Ic),!(n.boundingBox!==null&&Ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ai)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=u.length;x<_;x++){const p=u[x],m=o[p.materialIndex],S=Math.max(p.start,f.start),M=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,y=M;v<y;v+=3){const b=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);s=zr(this,m,e,n,l,h,d,b,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=x,m=_;p<m;p+=3){const S=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);s=zr(this,o,e,n,l,h,d,S,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,_=u.length;x<_;x++){const p=u[x],m=o[p.materialIndex],S=Math.max(p.start,f.start),M=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let v=S,y=M;v<y;v+=3){const b=v,T=v+1,C=v+2;s=zr(this,m,e,n,l,h,d,b,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const x=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=x,m=_;p<m;p+=3){const S=p,M=p+1,v=p+2;s=zr(this,o,e,n,l,h,d,S,M,v),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function zf(i,e,t,n,s,r,o,a){let c;if(e.side===Zt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===xi,a),c===null)return null;Br.copy(a),Br.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Br);return l<t.near||l>t.far?null:{distance:l,point:Br.clone(),object:i}}function zr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Nr),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Fr);const h=zf(i,e,t,n,Nr,Ur,Fr,kc);if(h){const d=new D;pn.getBarycoord(kc,Nr,Ur,Fr,d),s&&(h.uv=pn.getInterpolatedAttribute(s,a,c,l,d,new fe)),r&&(h.uv1=pn.getInterpolatedAttribute(r,a,c,l,d,new fe)),o&&(h.normal=pn.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};pn.getNormal(Nr,Ur,Fr,u.normal),h.face=u,h.barycoord=d}return h}class ze extends vt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;x("z","y","x",-1,-1,n,t,e,o,r,0),x("z","y","x",1,-1,n,t,-e,o,r,1),x("x","z","y",1,1,e,n,t,s,o,2),x("x","z","y",1,-1,e,n,-t,s,o,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2));function x(_,p,m,S,M,v,y,b,T,C,w){const E=v/T,I=y/C,U=v/2,H=y/2,Z=b/2,X=T+1,Y=C+1;let j=0,W=0;const me=new D;for(let Me=0;Me<Y;Me++){const we=Me*I-H;for(let Be=0;Be<X;Be++){const $e=Be*E-U;me[_]=$e*S,me[p]=we*M,me[m]=Z,l.push(me.x,me.y,me.z),me[_]=0,me[p]=0,me[m]=b>0?1:-1,h.push(me.x,me.y,me.z),d.push(Be/T),d.push(1-Me/C),j+=1}}for(let Me=0;Me<C;Me++)for(let we=0;we<T;we++){const Be=u+we+X*Me,$e=u+we+X*(Me+1),nt=u+(we+1)+X*(Me+1),je=u+(we+1)+X*Me;c.push(Be,$e,je),c.push($e,nt,je),W+=6}a.addGroup(f,W,w),f+=W,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Xt(i){const e={};for(let t=0;t<i.length;t++){const n=As(i[t]);for(const s in n)e[s]=n[s]}return e}function Hf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const hd={clone:As,merge:Xt};var Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends ks{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=Hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class dd extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new D,Nc=new fe,Uc=new fe;class Ht extends dd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Uc),t.subVectors(Uc,Nc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rs=-90,os=1;class Wf extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ht(rs,os,e,t);s.layers=this.layers,this.add(s);const r=new Ht(rs,os,e,t);r.layers=this.layers,this.add(r);const o=new Ht(rs,os,e,t);o.layers=this.layers,this.add(o);const a=new Ht(rs,os,e,t);a.layers=this.layers,this.add(a);const c=new Ht(rs,os,e,t);c.layers=this.layers,this.add(c);const l=new Ht(rs,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ud extends Vt{constructor(e=[],t=bs,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xf extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ud(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ze(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:mi});r.uniforms.tEquirect.value=t;const o=new ee(s,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=Dn),new Wf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class qe extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qf={type:"move"};class jo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=n}clone(){return new Nl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Jf extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class $f{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=il,this.updateRanges=[],this.version=0,this.uuid=Un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new D;class ho{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ho(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ul extends ks{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let as;const Gs=new D,ls=new D,cs=new D,hs=new fe,Ws=new fe,fd=new _t,Hr=new D,Xs=new D,Vr=new D,Fc=new fe,Ko=new fe,Oc=new fe;class pd extends Ot{constructor(e=new Ul){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new vt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new $f(t,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new ho(n,3,0,!1)),as.setAttribute("uv",new ho(n,2,3,!1))}this.geometry=as,this.material=e,this.center=new fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),fd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Gr(Hr.set(-.5,-.5,0),cs,o,ls,s,r),Gr(Xs.set(.5,-.5,0),cs,o,ls,s,r),Gr(Vr.set(.5,.5,0),cs,o,ls,s,r),Fc.set(0,0),Ko.set(1,0),Oc.set(1,1);let a=e.ray.intersectTriangle(Hr,Xs,Vr,!1,Gs);if(a===null&&(Gr(Xs.set(-.5,.5,0),cs,o,ls,s,r),Ko.set(0,1),a=e.ray.intersectTriangle(Hr,Vr,Xs,!1,Gs),a===null))return;const c=e.ray.origin.distanceTo(Gs);c<e.near||c>e.far||t.push({distance:c,point:Gs.clone(),uv:pn.getInterpolation(Gs,Hr,Xs,Vr,Fc,Ko,Oc,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gr(i,e,t,n,s,r){hs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ws.x=r*hs.x-s*hs.y,Ws.y=s*hs.x+r*hs.y):Ws.copy(hs),i.copy(e),i.x+=Ws.x,i.y+=Ws.y,i.applyMatrix4(fd)}const Qo=new D,Yf=new D,Zf=new Ke;class Zn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Qo.subVectors(n,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zf.getNormalMatrix(e),s=this.coplanarPoint(Qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new kl,jf=new fe(.5,.5),Wr=new D;class Fl{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,o=new Zn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],_=r[9],p=r[10],m=r[11],S=r[12],M=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-o,f-h,m-x,y-S).normalize(),s[1].setComponents(l+o,f+h,m+x,y+S).normalize(),s[2].setComponents(l+a,f+d,m+_,y+M).normalize(),s[3].setComponents(l-a,f-d,m-_,y-M).normalize(),n)s[4].setComponents(c,u,p,v).normalize(),s[5].setComponents(l-c,f-u,m-p,y-v).normalize();else if(s[4].setComponents(l-c,f-u,m-p,y-v).normalize(),t===kn)s[5].setComponents(l+c,f+u,m+p,y+v).normalize();else if(t===lo)s[5].setComponents(c,u,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);const t=jf.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Wr.x=s.normal.x>0?e.max.x:e.min.x,Wr.y=s.normal.y>0?e.max.y:e.min.y,Wr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dn extends Vt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class md extends Vt{constructor(e,t,n=Hi,s,r,o,a=wn,c=wn,l,h=ar,d=1){if(h!==ar&&h!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gd extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class zi extends vt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zi(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class st extends vt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let x=0;const _=[],p=n/2;let m=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function S(){const v=new D,y=new D;let b=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const w=[],E=C/r,I=E*(t-e)+e;for(let U=0;U<=s;U++){const H=U/s,Z=H*c+a,X=Math.sin(Z),Y=Math.cos(Z);y.x=I*X,y.y=-E*n+p,y.z=I*Y,d.push(y.x,y.y,y.z),v.set(X,T,Y).normalize(),u.push(v.x,v.y,v.z),f.push(H,1-E),w.push(x++)}_.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){const E=_[w][C],I=_[w+1][C],U=_[w+1][C+1],H=_[w][C+1];(e>0||w!==0)&&(h.push(E,I,H),b+=3),(t>0||w!==r-1)&&(h.push(I,U,H),b+=3)}l.addGroup(m,b,0),m+=b}function M(v){const y=x,b=new fe,T=new D;let C=0;const w=v===!0?e:t,E=v===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,p*E,0),u.push(0,E,0),f.push(.5,.5),x++;const I=x;for(let U=0;U<=s;U++){const Z=U/s*c+a,X=Math.cos(Z),Y=Math.sin(Z);T.x=w*Y,T.y=p*E,T.z=w*X,d.push(T.x,T.y,T.z),u.push(0,E,0),b.x=X*.5+.5,b.y=Y*.5*E+.5,f.push(b.x,b.y),x++}for(let U=0;U<s;U++){const H=y+U,Z=I+U;v===!0?h.push(Z,Z+1,H):h.push(Z+1,Z,H),C+=3}l.addGroup(m,C,v===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new st(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vs extends st{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new vs(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ol extends vt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new D,v=new D,y=new D;for(let b=0;b<t.length;b+=3)f(t[b+0],M),f(t[b+1],v),f(t[b+2],y),c(M,v,y,S)}function c(S,M,v,y){const b=y+1,T=[];for(let C=0;C<=b;C++){T[C]=[];const w=S.clone().lerp(v,C/b),E=M.clone().lerp(v,C/b),I=b-C;for(let U=0;U<=I;U++)U===0&&C===b?T[C][U]=w:T[C][U]=w.clone().lerp(E,U/I)}for(let C=0;C<b;C++)for(let w=0;w<2*(b-C)-1;w++){const E=Math.floor(w/2);w%2===0?(u(T[C][E+1]),u(T[C+1][E]),u(T[C][E])):(u(T[C][E+1]),u(T[C+1][E+1]),u(T[C+1][E]))}}function l(S){const M=new D;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(S),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const S=new D;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const v=p(S)/2/Math.PI+.5,y=m(S)/Math.PI+.5;o.push(v,1-y)}x(),d()}function d(){for(let S=0;S<o.length;S+=6){const M=o[S+0],v=o[S+2],y=o[S+4],b=Math.max(M,v,y),T=Math.min(M,v,y);b>.9&&T<.1&&(M<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),y<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function f(S,M){const v=S*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function x(){const S=new D,M=new D,v=new D,y=new D,b=new fe,T=new fe,C=new fe;for(let w=0,E=0;w<r.length;w+=9,E+=6){S.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),b.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),y.copy(S).add(M).add(v).divideScalar(3);const I=p(y);_(b,E+0,S,I),_(T,E+2,M,I),_(C,E+4,v,I)}}function _(S,M,v,y){y<0&&S.x===1&&(o[M]=S.x-1),v.x===0&&v.z===0&&(o[M]=y/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function m(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ol(e.vertices,e.indices,e.radius,e.details)}}class Bl extends Ol{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bl(e.radius,e.detail)}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new fe:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],o=[],a=new D,c=new _t;for(let f=0;f<=e;f++){const x=f/e;s[f]=this.getTangentAt(x,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,x))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let x=1;x<=e;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],f*x)),o[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class zl extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new fe){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Kf extends zl{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Hl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Xr=new D,ea=new Hl,ta=new Hl,na=new Hl;class So extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),l=Xr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let x=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),x<1e-4&&(x=_),p<1e-4&&(p=_),ea.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,x,_,p),ta.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,x,_,p),na.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,x,_,p)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),ta.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),na.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(ea.calc(c),ta.calc(c),na.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Bc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Qf(i,e){const t=1-i;return t*t*e}function ep(i,e){return 2*(1-i)*i*e}function tp(i,e){return i*i*e}function er(i,e,t,n){return Qf(i,e)+ep(i,t)+tp(i,n)}function np(i,e){const t=1-i;return t*t*t*e}function ip(i,e){const t=1-i;return 3*t*t*i*e}function sp(i,e){return 3*(1-i)*i*i*e}function rp(i,e){return i*i*i*e}function tr(i,e,t,n,s){return np(i,e)+ip(i,t)+sp(i,n)+rp(i,s)}class xd extends Bn{constructor(e=new fe,t=new fe,n=new fe,s=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,s.x,r.x,o.x,a.x),tr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class op extends Bn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tr(e,s.x,r.x,o.x,a.x),tr(e,s.y,r.y,o.y,a.y),tr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vd extends Bn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ap extends Bn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _d extends Bn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(er(e,s.x,r.x,o.x),er(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yd extends Bn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(er(e,s.x,r.x,o.x),er(e,s.y,r.y,o.y),er(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Md extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Bc(a,c.x,l.x,h.x,d.x),Bc(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new fe().fromArray(s))}return this}}var uo=Object.freeze({__proto__:null,ArcCurve:Kf,CatmullRomCurve3:So,CubicBezierCurve:xd,CubicBezierCurve3:op,EllipseCurve:zl,LineCurve:vd,LineCurve3:ap,QuadraticBezierCurve:_d,QuadraticBezierCurve3:yd,SplineCurve:Md});class lp extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new uo[s.type]().fromJSON(s))}return this}}class zc extends lp{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new vd(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new _d(this.currentPoint.clone(),new fe(e,t),new fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new xd(this.currentPoint.clone(),new fe(e,t),new fe(n,s),new fe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Md(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new zl(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class _s extends zc{constructor(e){super(e),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new zc().fromJSON(s))}return this}}function cp(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Sd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=pp(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,d=-1/0;for(let u=t;u<s;u+=t){const f=i[u],x=i[u+1];f<a&&(a=f),x<c&&(c=x),f>h&&(h=f),x>d&&(d=x)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return dr(r,o,t,a,c,l,0),o}function Sd(i,e,t,n,s){let r;if(s===wp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Hc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Hc(o/n|0,i[o],i[o+1],r);return r&&Rs(r,r.next)&&(fr(r),r=r.next),r}function Gi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rs(t,t.next)||At(t.prev,t,t.next)===0)){if(fr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function dr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&_p(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?dp(i,n,s,r):hp(i)){e.push(c.i,i.i,l.i),fr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=up(Gi(i),e),dr(i,e,t,n,s,r,2)):o===2&&fp(i,e,t,n,s,r):dr(Gi(i),e,t,n,s,r,1);break}}}function hp(i){const e=i.prev,t=i,n=i.next;if(At(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),f=Math.max(a,c,l);let x=n.next;for(;x!==e;){if(x.x>=h&&x.x<=u&&x.y>=d&&x.y<=f&&$s(s,a,r,c,o,l,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function dp(i,e,t,n){const s=i.prev,r=i,o=i.next;if(At(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,c,l),x=Math.min(h,d,u),_=Math.max(a,c,l),p=Math.max(h,d,u),m=sl(f,x,e,t,n),S=sl(_,p,e,t,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=m&&v&&v.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&$s(a,h,c,d,l,u,M.x,M.y)&&At(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&$s(a,h,c,d,l,u,v.x,v.y)&&At(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=_&&M.y>=x&&M.y<=p&&M!==s&&M!==o&&$s(a,h,c,d,l,u,M.x,M.y)&&At(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=x&&v.y<=p&&v!==s&&v!==o&&$s(a,h,c,d,l,u,v.x,v.y)&&At(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function up(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Rs(n,s)&&bd(n,t,t.next,s)&&ur(n,s)&&ur(s,n)&&(e.push(n.i,t.i,s.i),fr(t),fr(t.next),t=i=s),t=t.next}while(t!==i);return Gi(t)}function fp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sp(o,a)){let c=wd(o,a);o=Gi(o,o.next),c=Gi(c,c.next),dr(o,e,t,n,s,r,0),dr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pp(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Sd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Mp(l))}s.sort(mp);for(let r=0;r<s.length;r++)t=gp(s[r],t);return t}function mp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function gp(i,e){const t=xp(i,e);if(!t)return e;const n=wd(t,i);return Gi(n,n.next),Gi(t,t.next)}function xp(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Rs(i,t))return t;do{if(Rs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Ed(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);ur(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&vp(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function vp(i,e){return At(i.prev,i,e.prev)<0&&At(e.next,i,i.next)<0}function _p(i,e,t,n){let s=i;do s.z===0&&(s.z=sl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yp(s)}function yp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function sl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Mp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ed(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function $s(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Ed(i,e,t,n,s,r,o,a)}function Sp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ep(i,e)&&(ur(i,e)&&ur(e,i)&&bp(i,e)&&(At(i.prev,i,e.prev)||At(i,e.prev,e))||Rs(i,e)&&At(i.prev,i,i.next)>0&&At(e.prev,e,e.next)>0)}function At(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rs(i,e){return i.x===e.x&&i.y===e.y}function bd(i,e,t,n){const s=Jr(At(i,e,t)),r=Jr(At(i,e,n)),o=Jr(At(t,n,i)),a=Jr(At(t,n,e));return!!(s!==r&&o!==a||s===0&&qr(i,t,e)||r===0&&qr(i,n,e)||o===0&&qr(t,i,n)||a===0&&qr(t,e,n))}function qr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Jr(i){return i>0?1:i<0?-1:0}function Ep(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ur(i,e){return At(i.prev,i,i.next)<0?At(i,e,i.next)>=0&&At(i,i.prev,e)>=0:At(i,e,i.prev)<0||At(i,i.next,e)<0}function bp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wd(i,e){const t=rl(i.i,i.x,i.y),n=rl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hc(i,e,t,n){const s=rl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Tp{static triangulate(e,t,n=2){return cp(e,t,n)}}class Qn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Vc(e),Gc(n,e);let o=e.length;t.forEach(Vc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Gc(n,t[c]);const a=Tp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Vc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Gc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class pr extends vt{constructor(e=new _s([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:Ap;let M,v=!1,y,b,T,C;m&&(M=m.getSpacedPoints(h),v=!0,u=!1,y=m.computeFrenetFrames(h,!1),b=new D,T=new D,C=new D),u||(p=0,f=0,x=0,_=0);const w=a.extractPoints(l);let E=w.shape;const I=w.holes;if(!Qn.isClockWise(E)){E=E.reverse();for(let ae=0,oe=I.length;ae<oe;ae++){const se=I[ae];Qn.isClockWise(se)&&(I[ae]=se.reverse())}}function H(ae){const se=10000000000000001e-36;let N=ae[0];for(let q=1;q<=ae.length;q++){const G=q%ae.length,te=ae[G],re=te.x-N.x,de=te.y-N.y,R=re*re+de*de,g=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(N.x),Math.abs(N.y)),P=se*g*g;if(R<=P){ae.splice(G,1),q--;continue}N=te}}H(E),I.forEach(H);const Z=I.length,X=E;for(let ae=0;ae<Z;ae++){const oe=I[ae];E=E.concat(oe)}function Y(ae,oe,se){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(oe,se)}const j=E.length;function W(ae,oe,se){let N,q,G;const te=ae.x-oe.x,re=ae.y-oe.y,de=se.x-ae.x,R=se.y-ae.y,g=te*te+re*re,P=te*R-re*de;if(Math.abs(P)>Number.EPSILON){const L=Math.sqrt(g),B=Math.sqrt(de*de+R*R),O=oe.x-re/L,he=oe.y+te/L,ne=se.x-R/B,Ee=se.y+de/B,pe=((ne-O)*R-(Ee-he)*de)/(te*R-re*de);N=O+te*pe-ae.x,q=he+re*pe-ae.y;const Q=N*N+q*q;if(Q<=2)return new fe(N,q);G=Math.sqrt(Q/2)}else{let L=!1;te>Number.EPSILON?de>Number.EPSILON&&(L=!0):te<-Number.EPSILON?de<-Number.EPSILON&&(L=!0):Math.sign(re)===Math.sign(R)&&(L=!0),L?(N=-re,q=te,G=Math.sqrt(g)):(N=te,q=re,G=Math.sqrt(g/2))}return new fe(N/G,q/G)}const me=[];for(let ae=0,oe=X.length,se=oe-1,N=ae+1;ae<oe;ae++,se++,N++)se===oe&&(se=0),N===oe&&(N=0),me[ae]=W(X[ae],X[se],X[N]);const Me=[];let we,Be=me.concat();for(let ae=0,oe=Z;ae<oe;ae++){const se=I[ae];we=[];for(let N=0,q=se.length,G=q-1,te=N+1;N<q;N++,G++,te++)G===q&&(G=0),te===q&&(te=0),we[N]=W(se[N],se[G],se[te]);Me.push(we),Be=Be.concat(we)}let $e;if(p===0)$e=Qn.triangulateShape(X,I);else{const ae=[],oe=[];for(let se=0;se<p;se++){const N=se/p,q=f*Math.cos(N*Math.PI/2),G=x*Math.sin(N*Math.PI/2)+_;for(let te=0,re=X.length;te<re;te++){const de=Y(X[te],me[te],G);Te(de.x,de.y,-q),N===0&&ae.push(de)}for(let te=0,re=Z;te<re;te++){const de=I[te];we=Me[te];const R=[];for(let g=0,P=de.length;g<P;g++){const L=Y(de[g],we[g],G);Te(L.x,L.y,-q),N===0&&R.push(L)}N===0&&oe.push(R)}}$e=Qn.triangulateShape(ae,oe)}const nt=$e.length,je=x+_;for(let ae=0;ae<j;ae++){const oe=u?Y(E[ae],Be[ae],je):E[ae];v?(T.copy(y.normals[0]).multiplyScalar(oe.x),b.copy(y.binormals[0]).multiplyScalar(oe.y),C.copy(M[0]).add(T).add(b),Te(C.x,C.y,C.z)):Te(oe.x,oe.y,0)}for(let ae=1;ae<=h;ae++)for(let oe=0;oe<j;oe++){const se=u?Y(E[oe],Be[oe],je):E[oe];v?(T.copy(y.normals[ae]).multiplyScalar(se.x),b.copy(y.binormals[ae]).multiplyScalar(se.y),C.copy(M[ae]).add(T).add(b),Te(C.x,C.y,C.z)):Te(se.x,se.y,d/h*ae)}for(let ae=p-1;ae>=0;ae--){const oe=ae/p,se=f*Math.cos(oe*Math.PI/2),N=x*Math.sin(oe*Math.PI/2)+_;for(let q=0,G=X.length;q<G;q++){const te=Y(X[q],me[q],N);Te(te.x,te.y,d+se)}for(let q=0,G=I.length;q<G;q++){const te=I[q];we=Me[q];for(let re=0,de=te.length;re<de;re++){const R=Y(te[re],we[re],N);v?Te(R.x,R.y+M[h-1].y,M[h-1].x+se):Te(R.x,R.y,d+se)}}}ie(),ce();function ie(){const ae=s.length/3;if(u){let oe=0,se=j*oe;for(let N=0;N<nt;N++){const q=$e[N];Re(q[2]+se,q[1]+se,q[0]+se)}oe=h+p*2,se=j*oe;for(let N=0;N<nt;N++){const q=$e[N];Re(q[0]+se,q[1]+se,q[2]+se)}}else{for(let oe=0;oe<nt;oe++){const se=$e[oe];Re(se[2],se[1],se[0])}for(let oe=0;oe<nt;oe++){const se=$e[oe];Re(se[0]+j*h,se[1]+j*h,se[2]+j*h)}}n.addGroup(ae,s.length/3-ae,0)}function ce(){const ae=s.length/3;let oe=0;ge(X,oe),oe+=X.length;for(let se=0,N=I.length;se<N;se++){const q=I[se];ge(q,oe),oe+=q.length}n.addGroup(ae,s.length/3-ae,1)}function ge(ae,oe){let se=ae.length;for(;--se>=0;){const N=se;let q=se-1;q<0&&(q=ae.length-1);for(let G=0,te=h+p*2;G<te;G++){const re=j*G,de=j*(G+1),R=oe+N+re,g=oe+q+re,P=oe+q+de,L=oe+N+de;Ve(R,g,P,L)}}}function Te(ae,oe,se){c.push(ae),c.push(oe),c.push(se)}function Re(ae,oe,se){it(ae),it(oe),it(se);const N=s.length/3,q=S.generateTopUV(n,s,N-3,N-2,N-1);k(q[0]),k(q[1]),k(q[2])}function Ve(ae,oe,se,N){it(ae),it(oe),it(N),it(oe),it(se),it(N);const q=s.length/3,G=S.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);k(G[0]),k(G[1]),k(G[3]),k(G[1]),k(G[2]),k(G[3])}function it(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function k(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rp(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new uo[s.type]().fromJSON(s)),new pr(n,e.options)}}const Ap={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new fe(r,o),new fe(a,c),new fe(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],x=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new fe(o,1-c),new fe(l,1-d),new fe(u,1-x),new fe(_,1-m)]:[new fe(a,1-c),new fe(h,1-d),new fe(f,1-x),new fe(p,1-m)]}};function Rp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class wt extends vt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,f=[],x=[],_=[],p=[];for(let m=0;m<h;m++){const S=m*u-o;for(let M=0;M<l;M++){const v=M*d-r;x.push(v,-S,0),_.push(0,0,1),p.push(M/a),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<a;S++){const M=S+l*m,v=S+l*(m+1),y=S+1+l*(m+1),b=S+1+l*m;f.push(M,v,b),f.push(v,y,b)}this.setIndex(f),this.setAttribute("position",new Ze(x,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nn extends vt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=e;const u=(t-e)/s,f=new D,x=new fe;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const m=r+p/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/t+1)/2,x.y=(f.y/t+1)/2,h.push(x.x,x.y)}d+=u}for(let _=0;_<s;_++){const p=_*(n+1);for(let m=0;m<n;m++){const S=m+p,M=S,v=S+n+1,y=S+n+2,b=S+1;a.push(M,v,b),a.push(v,y,b)}}this.setIndex(a),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Vl extends vt{constructor(e=new _s([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(r,3)),this.setAttribute("uv",new Ze(o,2));function l(h){const d=s.length/3,u=h.extractPoints(t);let f=u.shape;const x=u.holes;Qn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=x.length;p<m;p++){const S=x[p];Qn.isClockWise(S)===!0&&(x[p]=S.reverse())}const _=Qn.triangulateShape(f,x);for(let p=0,m=x.length;p<m;p++){const S=x[p];f=f.concat(S)}for(let p=0,m=f.length;p<m;p++){const S=f[p];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let p=0,m=_.length;p<m;p++){const S=_[p],M=S[0]+d,v=S[1]+d,y=S[2]+d;n.push(M,v,y),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Cp(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Vl(n,e.curveSegments)}}function Cp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Yt extends vt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,f=[],x=[],_=[],p=[];for(let m=0;m<=n;m++){const S=[],M=m/n;let v=0;m===0&&o===0?v=.5/t:m===n&&c===Math.PI&&(v=-.5/t);for(let y=0;y<=t;y++){const b=y/t;d.x=-e*Math.cos(s+b*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+b*r)*Math.sin(o+M*a),x.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(b+v,1-M),S.push(l++)}h.push(S)}for(let m=0;m<n;m++)for(let S=0;S<t;S++){const M=h[m][S+1],v=h[m][S],y=h[m+1][S],b=h[m+1][S+1];(m!==0||o>0)&&f.push(M,v,b),(m!==n-1||c<Math.PI)&&f.push(v,y,b)}this.setIndex(f),this.setAttribute("position",new Ze(x,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Sn extends vt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let f=0;f<=n;f++)for(let x=0;x<=s;x++){const _=x/s*r,p=f/n*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(_),d.y=(e+t*Math.cos(p))*Math.sin(_),d.z=t*Math.sin(p),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(x/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let x=1;x<=s;x++){const _=(s+1)*f+x-1,p=(s+1)*(f-1)+x-1,m=(s+1)*(f-1)+x,S=(s+1)*f+x;o.push(_,p,S),o.push(p,m,S)}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class _r extends vt{constructor(e=new yd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new fe;let h=new D;const d=[],u=[],f=[],x=[];_(),this.setIndex(x),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function _(){for(let M=0;M<t;M++)p(M);p(r===!1?t:0),S(),m()}function p(M){h=e.getPointAt(M/t,h);const v=o.normals[M],y=o.binormals[M];for(let b=0;b<=s;b++){const T=b/s*Math.PI*2,C=Math.sin(T),w=-Math.cos(T);c.x=w*v.x+C*y.x,c.y=w*v.y+C*y.y,c.z=w*v.z+C*y.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=t;M++)for(let v=1;v<=s;v++){const y=(s+1)*(M-1)+(v-1),b=(s+1)*M+(v-1),T=(s+1)*M+v,C=(s+1)*(M-1)+v;x.push(y,b,C),x.push(b,T,C)}}function S(){for(let M=0;M<=t;M++)for(let v=0;v<=s;v++)l.x=M/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new _r(new uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class ve extends ks{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ed,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ol extends ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Pp extends ks{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Lp extends ks{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Td extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Ip extends Td{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ia=new _t,Wc=new D,Xc=new D;class Dp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Fn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fl,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gl extends dd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kp extends Dp{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Np extends Td{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new kp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Up extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class qc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Fp extends qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jc(i,e,t,n){const s=Op(n);switch(t){case Zh:return i*e;case Kh:return i*e/s.components*s.byteLength;case Cl:return i*e/s.components*s.byteLength;case Qh:return i*e*2/s.components*s.byteLength;case Pl:return i*e*2/s.components*s.byteLength;case jh:return i*e*3/s.components*s.byteLength;case Mn:return i*e*4/s.components*s.byteLength;case Ll:return i*e*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:case Ia:return Math.max(i,16)*Math.max(e,8)/4;case Ca:case La:return Math.max(i,8)*Math.max(e,8)/2;case Da:case ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $a:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Za:case ja:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Qa:case el:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tl:case nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Op(i){switch(i){case Fn:case qh:return{byteLength:1,components:1};case rr:case Jh:case Ds:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Hi:case Tl:case Kn:return{byteLength:4,components:1};case $h:case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ad(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bp(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){const x=d[u],_=d[f];_.start<=x.start+x.count+1?x.count=Math.max(x.count,_.start+_.count-x.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){const _=d[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hp=`#ifdef USE_ALPHAHASH
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
#endif`,Vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$p=`#ifdef USE_BATCHING
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
#endif`,Yp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
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
#endif`,em=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,am=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cm=`#define PI 3.141592653589793
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
} // validated`,hm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dm=`vec3 transformedNormal = objectNormal;
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
#endif`,um=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vm=`#ifdef USE_ENVMAP
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
#endif`,_m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Am=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lm=`uniform bool receiveShadow;
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
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Om=`struct PhysicalMaterial {
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
}`,Bm=`
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
#endif`,zm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ym=`#if defined( USE_POINTS_UV )
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
#endif`,Zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,e0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
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
#endif`,n0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,l0=`#ifdef USE_NORMALMAP
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
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,h0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,p0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,m0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,g0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,b0=`float getShadowMask() {
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
}`,w0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T0=`#ifdef USE_SKINNING
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
#endif`,A0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R0=`#ifdef USE_SKINNING
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
#endif`,C0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
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
#endif`,k0=`#ifdef USE_TRANSMISSION
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,z0=`uniform sampler2D t2D;
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`#include <common>
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
}`,q0=`#if DEPTH_PACKING == 3200
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
}`,J0=`#define DISTANCE
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
}`,$0=`#define DISTANCE
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
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,K0=`uniform vec3 diffuse;
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
}`,Q0=`#include <common>
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
}`,eg=`uniform vec3 diffuse;
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
}`,tg=`#define LAMBERT
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
}`,ng=`#define LAMBERT
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
}`,ig=`#define MATCAP
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
}`,sg=`#define MATCAP
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
}`,rg=`#define NORMAL
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
}`,og=`#define NORMAL
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
}`,ag=`#define PHONG
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
}`,lg=`#define PHONG
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
}`,cg=`#define STANDARD
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
}`,hg=`#define STANDARD
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
}`,dg=`#define TOON
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
}`,ug=`#define TOON
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
}`,fg=`uniform float size;
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
}`,pg=`uniform vec3 diffuse;
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
}`,mg=`#include <common>
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
}`,gg=`uniform vec3 color;
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
}`,xg=`uniform float rotation;
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
}`,vg=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:zp,alphahash_pars_fragment:Hp,alphamap_fragment:Vp,alphamap_pars_fragment:Gp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Jp,batching_pars_vertex:$p,batching_vertex:Yp,begin_vertex:Zp,beginnormal_vertex:jp,bsdfs:Kp,iridescence_fragment:Qp,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:om,color_pars_vertex:am,color_vertex:lm,common:cm,cube_uv_reflection_fragment:hm,defaultnormal_vertex:dm,displacementmap_pars_vertex:um,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:vm,envmap_common_pars_fragment:_m,envmap_pars_fragment:ym,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Im,envmap_vertex:Sm,fog_vertex:Em,fog_pars_vertex:bm,fog_fragment:wm,fog_pars_fragment:Tm,gradientmap_pars_fragment:Am,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:Pm,lights_pars_begin:Lm,lights_toon_fragment:Dm,lights_toon_pars_fragment:km,lights_phong_fragment:Nm,lights_phong_pars_fragment:Um,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:zm,lights_fragment_end:Hm,logdepthbuf_fragment:Vm,logdepthbuf_pars_fragment:Gm,logdepthbuf_pars_vertex:Wm,logdepthbuf_vertex:Xm,map_fragment:qm,map_pars_fragment:Jm,map_particle_fragment:$m,map_particle_pars_fragment:Ym,metalnessmap_fragment:Zm,metalnessmap_pars_fragment:jm,morphinstance_vertex:Km,morphcolor_vertex:Qm,morphnormal_vertex:e0,morphtarget_pars_vertex:t0,morphtarget_vertex:n0,normal_fragment_begin:i0,normal_fragment_maps:s0,normal_pars_fragment:r0,normal_pars_vertex:o0,normal_vertex:a0,normalmap_pars_fragment:l0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:h0,clearcoat_pars_fragment:d0,iridescence_pars_fragment:u0,opaque_fragment:f0,packing:p0,premultiplied_alpha_fragment:m0,project_vertex:g0,dithering_fragment:x0,dithering_pars_fragment:v0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:y0,shadowmap_pars_fragment:M0,shadowmap_pars_vertex:S0,shadowmap_vertex:E0,shadowmask_pars_fragment:b0,skinbase_vertex:w0,skinning_pars_vertex:T0,skinning_vertex:A0,skinnormal_vertex:R0,specularmap_fragment:C0,specularmap_pars_fragment:P0,tonemapping_fragment:L0,tonemapping_pars_fragment:I0,transmission_fragment:D0,transmission_pars_fragment:k0,uv_pars_fragment:N0,uv_pars_vertex:U0,uv_vertex:F0,worldpos_vertex:O0,background_vert:B0,background_frag:z0,backgroundCube_vert:H0,backgroundCube_frag:V0,cube_vert:G0,cube_frag:W0,depth_vert:X0,depth_frag:q0,distanceRGBA_vert:J0,distanceRGBA_frag:$0,equirect_vert:Y0,equirect_frag:Z0,linedashed_vert:j0,linedashed_frag:K0,meshbasic_vert:Q0,meshbasic_frag:eg,meshlambert_vert:tg,meshlambert_frag:ng,meshmatcap_vert:ig,meshmatcap_frag:sg,meshnormal_vert:rg,meshnormal_frag:og,meshphong_vert:ag,meshphong_frag:lg,meshphysical_vert:cg,meshphysical_frag:hg,meshtoon_vert:dg,meshtoon_frag:ug,points_vert:fg,points_frag:pg,shadow_vert:mg,shadow_frag:gg,sprite_vert:xg,sprite_frag:vg},Ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Pn={basic:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Xt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Xt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Xt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Xt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Xt([Ce.points,Ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Xt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Xt([Ce.common,Ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Xt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Xt([Ce.sprite,Ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Xt([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Xt([Ce.lights,Ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Pn.physical={uniforms:Xt([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const $r={r:0,b:0,g:0},Ci=new On,_g=new _t;function yg(i,e,t,n,s,r,o){const a=new tt(0);let c=r===!0?0:1,l,h,d=null,u=0,f=null;function x(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function _(M){let v=!1;const y=x(M);y===null?m(a,c):y&&y.isColor&&(m(y,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(M,v){const y=x(v);y&&(y.isCubeTexture||y.mapping===Mo)?(h===void 0&&(h=new ee(new ze(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:As(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ci.copy(v.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(Ci)),h.material.toneMapped=lt.getTransfer(y.colorSpace)!==ut,(d!==y||u!==y.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ee(new wt(2,2),new ni({name:"BackgroundMaterial",uniforms:As(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,v){M.getRGB($r,cd(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,v,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,m(a,c)},render:_,addToRenderList:p,dispose:S}}function Mg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(E,I,U,H,Z){let X=!1;const Y=d(H,U,I);r!==Y&&(r=Y,l(r.object)),X=f(E,H,U,Z),X&&x(E,H,U,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(E,I,U,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,I,U){const H=U.wireframe===!0;let Z=n[E.id];Z===void 0&&(Z={},n[E.id]=Z);let X=Z[I.id];X===void 0&&(X={},Z[I.id]=X);let Y=X[H];return Y===void 0&&(Y=u(c()),X[H]=Y),Y}function u(E){const I=[],U=[],H=[];for(let Z=0;Z<t;Z++)I[Z]=0,U[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:H,object:E,attributes:{},index:null}}function f(E,I,U,H){const Z=r.attributes,X=I.attributes;let Y=0;const j=U.getAttributes();for(const W in j)if(j[W].location>=0){const Me=Z[W];let we=X[W];if(we===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(we=E.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function x(E,I,U,H){const Z={},X=I.attributes;let Y=0;const j=U.getAttributes();for(const W in j)if(j[W].location>=0){let Me=X[W];Me===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(Me=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(Me=E.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),Z[W]=we,Y++}r.attributes=Z,r.attributesNum=Y,r.index=H}function _(){const E=r.newAttributes;for(let I=0,U=E.length;I<U;I++)E[I]=0}function p(E){m(E,0)}function m(E,I){const U=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;U[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),Z[E]!==I&&(i.vertexAttribDivisor(E,I),Z[E]=I)}function S(){const E=r.newAttributes,I=r.enabledAttributes;for(let U=0,H=I.length;U<H;U++)I[U]!==E[U]&&(i.disableVertexAttribArray(U),I[U]=0)}function M(E,I,U,H,Z,X,Y){Y===!0?i.vertexAttribIPointer(E,I,U,Z,X):i.vertexAttribPointer(E,I,U,H,Z,X)}function v(E,I,U,H){_();const Z=H.attributes,X=U.getAttributes(),Y=I.defaultAttributeValues;for(const j in X){const W=X[j];if(W.location>=0){let me=Z[j];if(me===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),me!==void 0){const Me=me.normalized,we=me.itemSize,Be=e.get(me);if(Be===void 0)continue;const $e=Be.buffer,nt=Be.type,je=Be.bytesPerElement,ie=nt===i.INT||nt===i.UNSIGNED_INT||me.gpuType===Tl;if(me.isInterleavedBufferAttribute){const ce=me.data,ge=ce.stride,Te=me.offset;if(ce.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)m(W.location+Re,ce.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<W.locationSize;Re++)p(W.location+Re);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Re=0;Re<W.locationSize;Re++)M(W.location+Re,we/W.locationSize,nt,Me,ge*je,(Te+we/W.locationSize*Re)*je,ie)}else{if(me.isInstancedBufferAttribute){for(let ce=0;ce<W.locationSize;ce++)m(W.location+ce,me.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ce=0;ce<W.locationSize;ce++)p(W.location+ce);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ce=0;ce<W.locationSize;ce++)M(W.location+ce,we/W.locationSize,nt,Me,we*je,we/W.locationSize*ce*je,ie)}}else if(Y!==void 0){const Me=Y[j];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(W.location,Me);break;case 3:i.vertexAttrib3fv(W.location,Me);break;case 4:i.vertexAttrib4fv(W.location,Me);break;default:i.vertexAttrib1fv(W.location,Me)}}}}S()}function y(){C();for(const E in n){const I=n[E];for(const U in I){const H=I[U];for(const Z in H)h(H[Z].object),delete H[Z];delete I[U]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const U in I){const H=I[U];for(const Z in H)h(H[Z].object),delete H[Z];delete I[U]}delete n[E.id]}function T(E){for(const I in n){const U=n[I];if(U[E.id]===void 0)continue;const H=U[E.id];for(const Z in H)h(H[Z].object),delete H[Z];delete U[E.id]}}function C(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function Sg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let f=0;for(let x=0;x<d;x++)f+=h[x];t.update(f,n,1)}function c(l,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)o(l[x],h[x],u[x]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let x=0;for(let _=0;_<d;_++)x+=h[_]*u[_];t.update(x,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Eg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Mn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ds&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Kn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=x>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:y,maxSamples:b}}function bg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Zn,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const x=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||x===null||x.length===0||r&&!p)r?h(null):l();else{const S=r?0:n,M=S*4;let v=m.clippingState||null;c.value=v,v=h(x,u,M,f);for(let y=0;y!==M;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,x){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,x!==!0||p===null){const m=f+_*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function wg(i){let e=new WeakMap;function t(o,a){return a===Ta?o.mapping=bs:a===Aa&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ta||a===Aa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const fs=4,$c=[.125,.215,.35,.446,.526,.582],Di=20,sa=new Gl,Yc=new tt;let ra=null,oa=0,aa=0,la=!1;const Li=(1+Math.sqrt(5))/2,ds=1/Li,Zc=[new D(-Li,ds,0),new D(Li,ds,0),new D(-ds,0,Li),new D(ds,0,Li),new D(0,Li,-ds),new D(0,Li,ds),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Tg=new D;class jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=Tg}=r;ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=la,e.scissorTest=!1,Yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),la=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ds,format:Mn,colorSpace:Ts,depthBuffer:!1},s=Kc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ag(r)),this._blurMaterial=Rg(r,e,t)}return s}_compileMaterial(e){const t=new ee(this._lodPlanes[0],e);this._renderer.compile(t,sa)}_sceneToCubeUV(e,t,n,s,r){const c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Yc),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const _=new Pt({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),p=new ee(new ze,_);let m=!1;const S=e.background;S?S.isColor&&(_.color.copy(S),e.background=null,m=!0):(_.color.copy(Yc),m=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const y=this._cubeSize;Yr(s,v*y,M>2?y:0,y,y),d.setRenderTarget(s),m&&d.render(p,c),d.render(e,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===bs||e.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Yr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zc[(s-r-1)%Zc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ee(this._lodPlanes[s],l),u=l.uniforms,f=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/x,p=isFinite(r)?1+Math.floor(h*_):Di;p>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const m=[];let S=0;for(let T=0;T<Di;++T){const C=T/_,w=Math.exp(-C*C/2);m.push(w),T===0?S+=w:T<p&&(S+=2*w)}for(let T=0;T<m.length;T++)m[T]=m[T]/S;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=x,u.mipInt.value=M-n;const v=this._sizeLods[s],y=3*v*(s>M-fs?s-M+fs:0),b=4*(this._cubeSize-v);Yr(t,y,b,3*v,2*v),c.setRenderTarget(t),c.render(d,sa)}}function Ag(i){const e=[],t=[],n=[];let s=i;const r=i-fs+1+$c.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-fs?c=$c[o-i+fs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,_=3,p=2,m=1,S=new Float32Array(_*x*f),M=new Float32Array(p*x*f),v=new Float32Array(m*x*f);for(let b=0;b<f;b++){const T=b%3*2/3-1,C=b>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(w,_*x*b),M.set(u,p*x*b);const E=[b,b,b,b,b,b];v.set(E,m*x*b)}const y=new vt;y.setAttribute("position",new Tn(S,_)),y.setAttribute("uv",new Tn(M,p)),y.setAttribute("faceIndex",new Tn(v,m)),e.push(y),s>fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Kc(i,e,t){const n=new vi(i,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Rg(i,e,t){const n=new Float32Array(Di),s=new D(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Qc(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wl(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function eh(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Wl(){return`

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
	`}function Cg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ta||c===Aa,h=c===bs||c===ws;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new jc(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new jc(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Pg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lg(i,e,t,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(e.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)e.update(u[f],i.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,x=d.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let M=0,v=S.length;M<v;M+=3){const y=S[M+0],b=S[M+1],T=S[M+2];u.push(y,b,b,T,T,y)}}else if(x!==void 0){const S=x.array;_=x.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const y=M+0,b=M+1,T=M+2;u.push(y,b,b,T,T,y)}}else return;const p=new(nd(u)?ld:ad)(u,1);p.version=_;const m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Ig(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,f){i.drawElements(n,f,r,u*o),t.update(f,n,1)}function l(u,f,x){x!==0&&(i.drawElementsInstanced(n,f,r,u*o,x),t.update(f,n,x))}function h(u,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,x);let p=0;for(let m=0;m<x;m++)p+=f[m];t.update(p,n,1)}function d(u,f,x,_){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)l(u[m]/o,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,x);let m=0;for(let S=0;S<x;S++)m+=f[S]*_[S];t.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Dg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function kg(i,e,t){const n=new WeakMap,s=new xt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;u!==void 0&&u.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;x===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*b*4*d),C=new id(T,y,b,d);C.type=Kn,C.needsUpdate=!0;const w=v*4;for(let I=0;I<d;I++){const U=m[I],H=S[I],Z=M[I],X=y*b*4*I;for(let Y=0;Y<U.count;Y++){const j=Y*w;x===!0&&(s.fromBufferAttribute(U,Y),T[X+j+0]=s.x,T[X+j+1]=s.y,T[X+j+2]=s.z,T[X+j+3]=0),_===!0&&(s.fromBufferAttribute(H,Y),T[X+j+4]=s.x,T[X+j+5]=s.y,T[X+j+6]=s.z,T[X+j+7]=0),p===!0&&(s.fromBufferAttribute(Z,Y),T[X+j+8]=s.x,T[X+j+9]=s.y,T[X+j+10]=s.z,T[X+j+11]=Z.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new fe(y,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let p=0;p<l.length;p++)x+=l[p];const _=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ng(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const Rd=new Vt,th=new md(1,1),Cd=new id,Pd=new Cf,Ld=new ud,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nh[s];if(r===void 0&&(r=new Float32Array(s),nh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Eo(i,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function zg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;oh.set(n),i.uniformMatrix2fv(this.addr,!1,oh),Ut(t,n)}}function Hg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;rh.set(n),i.uniformMatrix3fv(this.addr,!1,rh),Ut(t,n)}}function Vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Nt(t,n))return;sh.set(n),i.uniformMatrix4fv(this.addr,!1,sh),Ut(t,n)}}function Gg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Xg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function qg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Jg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $g(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Yg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Zg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function jg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=td,r=th):r=Rd,t.setTexture2D(e||r,s)}function Kg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Pd,s)}function Qg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ld,s)}function ex(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Cd,s)}function tx(i){switch(i){case 5126:return Ug;case 35664:return Fg;case 35665:return Og;case 35666:return Bg;case 35674:return zg;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Jg;case 36294:return $g;case 36295:return Yg;case 36296:return Zg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return ex}}function nx(i,e){i.uniform1fv(this.addr,e)}function ix(i,e){const t=Ns(e,this.size,2);i.uniform2fv(this.addr,t)}function sx(i,e){const t=Ns(e,this.size,3);i.uniform3fv(this.addr,t)}function rx(i,e){const t=Ns(e,this.size,4);i.uniform4fv(this.addr,t)}function ox(i,e){const t=Ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ax(i,e){const t=Ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lx(i,e){const t=Ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cx(i,e){i.uniform1iv(this.addr,e)}function hx(i,e){i.uniform2iv(this.addr,e)}function dx(i,e){i.uniform3iv(this.addr,e)}function ux(i,e){i.uniform4iv(this.addr,e)}function fx(i,e){i.uniform1uiv(this.addr,e)}function px(i,e){i.uniform2uiv(this.addr,e)}function mx(i,e){i.uniform3uiv(this.addr,e)}function gx(i,e){i.uniform4uiv(this.addr,e)}function xx(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Rd,r[o])}function vx(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Pd,r[o])}function _x(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ld,r[o])}function yx(i,e,t){const n=this.cache,s=e.length,r=Eo(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Cd,r[o])}function Mx(i){switch(i){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return dx;case 35669:case 35673:return ux;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return vx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}class Sx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tx(t.type)}}class Ex{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mx(t.type)}}class bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ca=/(\w+)(\])?(\[|\.)?/g;function ah(i,e){i.seq.push(e),i.map[e.id]=e}function wx(i,e,t){const n=i.name,s=n.length;for(ca.lastIndex=0;;){const r=ca.exec(n),o=ca.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ah(t,l===void 0?new Sx(a,i,e):new Ex(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new bx(a),ah(t,d)),t=d}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);wx(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function lh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tx=37297;let Ax=0;function Rx(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ch=new Ke;function Cx(i){lt._getMatrix(ch,lt.workingColorSpace,i);const e=`mat3( ${ch.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case ao:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Rx(i.getShaderSource(e),a)}else return r}function Px(i,e){const t=Cx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lx(i,e){let t;switch(e){case Hu:t="Linear";break;case Vu:t="Reinhard";break;case Gu:t="Cineon";break;case Wu:t="ACESFilmic";break;case qu:t="AgX";break;case Ju:t="Neutral";break;case Xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new D;function Ix(){lt.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function kx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ys(i){return i!==""}function dh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(Ux,Ox)}const Fx=new Map;function Ox(i,e){let t=et[e];if(t===void 0){const n=Fx.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const Bx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fh(i){return i.replace(Bx,zx)}function zx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ph(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bs:case ws:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function Wx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wh:e="ENVMAP_BLENDING_MULTIPLY";break;case Bu:e="ENVMAP_BLENDING_MIX";break;case zu:e="ENVMAP_BLENDING_ADD";break}return e}function Xx(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qx(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Hx(t),l=Vx(t),h=Gx(t),d=Wx(t),u=Xx(t),f=Dx(t),x=kx(r),_=s.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ys).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ys).join(`
`),m.length>0&&(m+=`
`)):(p=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),m=[ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gi?"#define TONE_MAPPING":"",t.toneMapping!==gi?et.tonemapping_pars_fragment:"",t.toneMapping!==gi?Lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Px("linearToOutputTexel",t.outputColorSpace),Ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ys).join(`
`)),o=al(o),o=dh(o,t),o=uh(o,t),a=al(a),a=dh(a,t),a=uh(a,t),o=fh(o),a=fh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=S+p+o,v=S+m+a,y=lh(s,s.VERTEX_SHADER,M),b=lh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(I){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(b)||"",X=U.trim(),Y=H.trim(),j=Z.trim();let W=!0,me=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,y,b);else{const Me=hh(s,y,"vertex"),we=hh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+Me+`
`+we)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||j==="")&&(me=!1);me&&(I.diagnostics={runnable:W,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:j,prefix:m}})}s.deleteShader(y),s.deleteShader(b),C=new oo(s,_),w=Nx(s,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,Tx)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ax++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=b,this}let Jx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yx(e),t.set(e,n)),n}}class Yx{constructor(e){this.id=Jx++,this.code=e,this.usedTimes=0}}function Zx(i,e,t,n,s,r,o){const a=new rd,c=new $x,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function p(w,E,I,U,H){const Z=U.fog,X=H.geometry,Y=w.isMeshStandardMaterial?U.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),W=j&&j.mapping===Mo?j.image.height:null,me=x[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const Me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,we=Me!==void 0?Me.length:0;let Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let $e,nt,je,ie;if(me){const ct=Pn[me];$e=ct.vertexShader,nt=ct.fragmentShader}else $e=w.vertexShader,nt=w.fragmentShader,c.update(w),je=c.getVertexShaderID(w),ie=c.getFragmentShaderID(w);const ce=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Te=H.isInstancedMesh===!0,Re=H.isBatchedMesh===!0,Ve=!!w.map,it=!!w.matcap,k=!!j,ae=!!w.aoMap,oe=!!w.lightMap,se=!!w.bumpMap,N=!!w.normalMap,q=!!w.displacementMap,G=!!w.emissiveMap,te=!!w.metalnessMap,re=!!w.roughnessMap,de=w.anisotropy>0,R=w.clearcoat>0,g=w.dispersion>0,P=w.iridescence>0,L=w.sheen>0,B=w.transmission>0,O=de&&!!w.anisotropyMap,he=R&&!!w.clearcoatMap,ne=R&&!!w.clearcoatNormalMap,Ee=R&&!!w.clearcoatRoughnessMap,pe=P&&!!w.iridescenceMap,Q=P&&!!w.iridescenceThicknessMap,xe=L&&!!w.sheenColorMap,Oe=L&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Ae=!!w.specularColorMap,Xe=!!w.specularIntensityMap,F=B&&!!w.transmissionMap,ye=B&&!!w.thicknessMap,be=!!w.gradientMap,ke=!!w.alphaMap,_e=w.alphaTest>0,le=!!w.alphaHash,De=!!w.extensions;let Ye=gi;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ye=i.toneMapping);const mt={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:$e,fragmentShader:nt,defines:w.defines,customVertexShaderID:je,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Re,batchingColor:Re&&H._colorsTexture!==null,instancing:Te,instancingColor:Te&&H.instanceColor!==null,instancingMorph:Te&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ts,alphaToCoverage:!!w.alphaToCoverage,map:Ve,matcap:it,envMap:k,envMapMode:k&&j.mapping,envMapCubeUVHeight:W,aoMap:ae,lightMap:oe,bumpMap:se,normalMap:N,displacementMap:u&&q,emissiveMap:G,normalMapObjectSpace:N&&w.normalMapType===ju,normalMapTangentSpace:N&&w.normalMapType===ed,metalnessMap:te,roughnessMap:re,anisotropy:de,anisotropyMap:O,clearcoat:R,clearcoatMap:he,clearcoatNormalMap:ne,clearcoatRoughnessMap:Ee,dispersion:g,iridescence:P,iridescenceMap:pe,iridescenceThicknessMap:Q,sheen:L,sheenColorMap:xe,sheenRoughnessMap:Oe,specularMap:Ie,specularColorMap:Ae,specularIntensityMap:Xe,transmission:B,transmissionMap:F,thicknessMap:ye,gradientMap:be,opaque:w.transparent===!1&&w.blending===gs&&w.alphaToCoverage===!1,alphaMap:ke,alphaTest:_e,alphaHash:le,combine:w.combine,mapUv:Ve&&_(w.map.channel),aoMapUv:ae&&_(w.aoMap.channel),lightMapUv:oe&&_(w.lightMap.channel),bumpMapUv:se&&_(w.bumpMap.channel),normalMapUv:N&&_(w.normalMap.channel),displacementMapUv:q&&_(w.displacementMap.channel),emissiveMapUv:G&&_(w.emissiveMap.channel),metalnessMapUv:te&&_(w.metalnessMap.channel),roughnessMapUv:re&&_(w.roughnessMap.channel),anisotropyMapUv:O&&_(w.anisotropyMap.channel),clearcoatMapUv:he&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(w.sheenRoughnessMap.channel),specularMapUv:Ie&&_(w.specularMap.channel),specularColorMapUv:Ae&&_(w.specularColorMap.channel),specularIntensityMapUv:Xe&&_(w.specularIntensityMap.channel),transmissionMapUv:F&&_(w.transmissionMap.channel),thicknessMapUv:ye&&_(w.thicknessMap.channel),alphaMapUv:ke&&_(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(N||de),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(Ve||ke),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ve&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===ut,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&lt.getTransfer(w.emissiveMap.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Tt,flipSided:w.side===Zt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function m(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)E.push(I),E.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(S(E,w),M(E,w),E.push(i.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function S(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function M(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const E=x[w.type];let I;if(E){const U=Pn[E];I=hd.clone(U.uniforms)}else I=w.uniforms;return I}function y(w,E){let I;for(let U=0,H=h.length;U<H;U++){const Z=h[U];if(Z.cacheKey===E){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new qx(i,E,w,r),h.push(I)),I}function b(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function C(){c.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:C}}function jx(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Kx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,f,x,_,p){let m=i[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:x,renderOrder:d.renderOrder,z:_,group:p},i[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=x,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function a(d,u,f,x,_,p){const m=o(d,u,f,x,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):t.push(m)}function c(d,u,f,x,_,p){const m=o(d,u,f,x,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function l(d,u){t.length>1&&t.sort(d||Kx),n.length>1&&n.sort(u||mh),s.length>1&&s.sort(u||mh)}function h(){for(let d=e,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Qx(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new gh,i.set(n,[o])):s>=r.length?(o=new gh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ev(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function tv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let nv=0;function iv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sv(i){const e=new ev,t=tv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new _t,o=new _t;function a(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,x=0,_=0,p=0,m=0,S=0,M=0,v=0,y=0,b=0,T=0;l.sort(iv);for(let w=0,E=l.length;w<E;w++){const I=l[w],U=I.color,H=I.intensity,Z=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=U.r*H,d+=U.g*H,u+=U.b*H;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],H);T++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,W=t.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=I.shadow.matrix,S++}n.directional[f]=Y,f++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(U).multiplyScalar(H),Y.distance=Z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[_]=Y;const j=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[_]=j.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=X,v++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(U).multiplyScalar(H),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[p]=Y,p++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const j=I.shadow,W=t.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[x]=W,n.pointShadowMap[x]=X,n.pointShadowMatrix[x]=I.shadow.matrix,M++}n.point[x]=Y,x++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(H),Y.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[m]=Y,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==x||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==S||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.directionalLength=f,C.pointLength=x,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=S,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=y,C.numLightProbes=T,n.version=nv++)}function c(l,h){let d=0,u=0,f=0,x=0,_=0;const p=h.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const M=l[m];if(M.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),d++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const v=n.rectArea[x];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:c,state:n}}function xh(i){const e=new sv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function rv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new xh(i),e.set(s,[a])):r>=o.length?(a=new xh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,av=`uniform sampler2D shadow_pass;
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
}`;function lv(i,e,t){let n=new Fl;const s=new fe,r=new fe,o=new xt,a=new Pp({depthPacking:Zu}),c=new Lp,l={},h=t.maxTextureSize,d={[xi]:Zt,[Zt]:xi,[Tt]:Tt},u=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:ov,fragmentShader:av}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const x=new vt;x.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ee(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let m=this.type;this.render=function(b,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(mi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=m!==Jn&&this.type===Jn,Z=m===Jn&&this.type!==Jn;for(let X=0,Y=b.length;X<Y;X++){const j=b[X],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const me=W.getFrameExtents();if(s.multiply(me),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,W.mapSize.y=r.y)),W.map===null||H===!0||Z===!0){const we=this.type!==Jn?{minFilter:wn,magFilter:wn}:{};W.map!==null&&W.map.dispose(),W.map=new vi(s.x,s.y,we),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const Me=W.getViewportCount();for(let we=0;we<Me;we++){const Be=W.getViewport(we);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),U.viewport(o),W.updateMatrices(j,we),n=W.getFrustum(),v(T,C,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Jn&&S(W,C),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(w,E,I)};function S(b,T){const C=e.update(_);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vi(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,C,u,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,C,f,_,null)}function M(b,T,C,w){let E=null;const I=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)E=I;else if(E=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const U=E.uuid,H=T.uuid;let Z=l[U];Z===void 0&&(Z={},l[U]=Z);let X=Z[H];X===void 0&&(X=E.clone(),Z[H]=X,T.addEventListener("dispose",y)),E=X}if(E.visible=T.visible,E.wireframe=T.wireframe,w===Jn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=i.properties.get(E);U.light=C}return E}function v(b,T,C,w,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Jn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const H=e.update(b),Z=b.material;if(Array.isArray(Z)){const X=H.groups;for(let Y=0,j=X.length;Y<j;Y++){const W=X[Y],me=Z[W.materialIndex];if(me&&me.visible){const Me=M(b,me,w,E);b.onBeforeShadow(i,b,T,C,H,Me,W),i.renderBufferDirect(C,null,H,Me,b,W),b.onAfterShadow(i,b,T,C,H,Me,W)}}}else if(Z.visible){const X=M(b,Z,w,E);b.onBeforeShadow(i,b,T,C,H,X,null),i.renderBufferDirect(C,null,H,X,b,null),b.onAfterShadow(i,b,T,C,H,X,null)}}const U=b.children;for(let H=0,Z=U.length;H<Z;H++)v(U[H],T,C,w,E)}function y(b){b.target.removeEventListener("dispose",y);for(const C in l){const w=l[C],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const cv={[_a]:ya,[Ma]:ba,[Sa]:wa,[Es]:Ea,[ya]:_a,[ba]:Ma,[wa]:Sa,[Ea]:Es};function hv(i,e){function t(){let F=!1;const ye=new xt;let be=null;const ke=new xt(0,0,0,0);return{setMask:function(_e){be!==_e&&!F&&(i.colorMask(_e,_e,_e,_e),be=_e)},setLocked:function(_e){F=_e},setClear:function(_e,le,De,Ye,mt){mt===!0&&(_e*=Ye,le*=Ye,De*=Ye),ye.set(_e,le,De,Ye),ke.equals(ye)===!1&&(i.clearColor(_e,le,De,Ye),ke.copy(ye))},reset:function(){F=!1,be=null,ke.set(-1,0,0,0)}}}function n(){let F=!1,ye=!1,be=null,ke=null,_e=null;return{setReversed:function(le){if(ye!==le){const De=e.get("EXT_clip_control");le?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ye=le;const Ye=_e;_e=null,this.setClear(Ye)}},getReversed:function(){return ye},setTest:function(le){le?ce(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(le){be!==le&&!F&&(i.depthMask(le),be=le)},setFunc:function(le){if(ye&&(le=cv[le]),ke!==le){switch(le){case _a:i.depthFunc(i.NEVER);break;case ya:i.depthFunc(i.ALWAYS);break;case Ma:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case Sa:i.depthFunc(i.EQUAL);break;case Ea:i.depthFunc(i.GEQUAL);break;case ba:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=le}},setLocked:function(le){F=le},setClear:function(le){_e!==le&&(ye&&(le=1-le),i.clearDepth(le),_e=le)},reset:function(){F=!1,be=null,ke=null,_e=null,ye=!1}}}function s(){let F=!1,ye=null,be=null,ke=null,_e=null,le=null,De=null,Ye=null,mt=null;return{setTest:function(ct){F||(ct?ce(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(ct){ye!==ct&&!F&&(i.stencilMask(ct),ye=ct)},setFunc:function(ct,zn,An){(be!==ct||ke!==zn||_e!==An)&&(i.stencilFunc(ct,zn,An),be=ct,ke=zn,_e=An)},setOp:function(ct,zn,An){(le!==ct||De!==zn||Ye!==An)&&(i.stencilOp(ct,zn,An),le=ct,De=zn,Ye=An)},setLocked:function(ct){F=ct},setClear:function(ct){mt!==ct&&(i.clearStencil(ct),mt=ct)},reset:function(){F=!1,ye=null,be=null,ke=null,_e=null,le=null,De=null,Ye=null,mt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,f=[],x=null,_=!1,p=null,m=null,S=null,M=null,v=null,y=null,b=null,T=new tt(0,0,0),C=0,w=!1,E=null,I=null,U=null,H=null,Z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=j>=2);let me=null,Me={};const we=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),$e=new xt().fromArray(we),nt=new xt().fromArray(Be);function je(F,ye,be,ke){const _e=new Uint8Array(4),le=i.createTexture();i.bindTexture(F,le),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<be;De++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(ye+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return le}const ie={};ie[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(Es),se(!1),N(fc),ce(i.CULL_FACE),ae(mi);function ce(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ge(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Te(F,ye){return d[F]!==ye?(i.bindFramebuffer(F,ye),d[F]=ye,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Re(F,ye){let be=f,ke=!1;if(F){be=u.get(ye),be===void 0&&(be=[],u.set(ye,be));const _e=F.textures;if(be.length!==_e.length||be[0]!==i.COLOR_ATTACHMENT0){for(let le=0,De=_e.length;le<De;le++)be[le]=i.COLOR_ATTACHMENT0+le;be.length=_e.length,ke=!0}}else be[0]!==i.BACK&&(be[0]=i.BACK,ke=!0);ke&&i.drawBuffers(be)}function Ve(F){return x!==F?(i.useProgram(F),x=F,!0):!1}const it={[Ii]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};it[bu]=i.MIN,it[wu]=i.MAX;const k={[Tu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[va]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(F,ye,be,ke,_e,le,De,Ye,mt,ct){if(F===mi){_===!0&&(ge(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),F!==Mu){if(F!==p||ct!==w){if((m!==Ii||v!==Ii)&&(i.blendEquation(i.FUNC_ADD),m=Ii,v=Ii),ct)switch(F){case gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,y=null,b=null,T.set(0,0,0),C=0,p=F,w=ct}return}_e=_e||ye,le=le||be,De=De||ke,(ye!==m||_e!==v)&&(i.blendEquationSeparate(it[ye],it[_e]),m=ye,v=_e),(be!==S||ke!==M||le!==y||De!==b)&&(i.blendFuncSeparate(k[be],k[ke],k[le],k[De]),S=be,M=ke,y=le,b=De),(Ye.equals(T)===!1||mt!==C)&&(i.blendColor(Ye.r,Ye.g,Ye.b,mt),T.copy(Ye),C=mt),p=F,w=!1}function oe(F,ye){F.side===Tt?ge(i.CULL_FACE):ce(i.CULL_FACE);let be=F.side===Zt;ye&&(be=!be),se(be),F.blending===gs&&F.transparent===!1?ae(mi):ae(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const ke=F.stencilWrite;a.setTest(ke),ke&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function N(F){F!==_u?(ce(i.CULL_FACE),F!==I&&(F===fc?i.cullFace(i.BACK):F===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),I=F}function q(F){F!==U&&(Y&&i.lineWidth(F),U=F)}function G(F,ye,be){F?(ce(i.POLYGON_OFFSET_FILL),(H!==ye||Z!==be)&&(i.polygonOffset(ye,be),H=ye,Z=be)):ge(i.POLYGON_OFFSET_FILL)}function te(F){F?ce(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function re(F){F===void 0&&(F=i.TEXTURE0+X-1),me!==F&&(i.activeTexture(F),me=F)}function de(F,ye,be){be===void 0&&(me===null?be=i.TEXTURE0+X-1:be=me);let ke=Me[be];ke===void 0&&(ke={type:void 0,texture:void 0},Me[be]=ke),(ke.type!==F||ke.texture!==ye)&&(me!==be&&(i.activeTexture(be),me=be),i.bindTexture(F,ye||ie[F]),ke.type=F,ke.texture=ye)}function R(){const F=Me[me];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(F){$e.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),$e.copy(F))}function Oe(F){nt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Ie(F,ye){let be=l.get(ye);be===void 0&&(be=new WeakMap,l.set(ye,be));let ke=be.get(F);ke===void 0&&(ke=i.getUniformBlockIndex(ye,F.name),be.set(F,ke))}function Ae(F,ye){const ke=l.get(ye).get(F);c.get(ye)!==ke&&(i.uniformBlockBinding(ye,ke,F.__bindingPointIndex),c.set(ye,ke))}function Xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,Me={},d={},u=new WeakMap,f=[],x=null,_=!1,p=null,m=null,S=null,M=null,v=null,y=null,b=null,T=new tt(0,0,0),C=0,w=!1,E=null,I=null,U=null,H=null,Z=null,$e.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:ge,bindFramebuffer:Te,drawBuffers:Re,useProgram:Ve,setBlending:ae,setMaterial:oe,setFlipSided:se,setCullFace:N,setLineWidth:q,setPolygonOffset:G,setScissorTest:te,activeTexture:re,bindTexture:de,unbindTexture:R,compressedTexImage2D:g,compressedTexImage3D:P,texImage2D:pe,texImage3D:Q,updateUBOMapping:Ie,uniformBlockBinding:Ae,texStorage2D:ne,texStorage3D:Ee,texSubImage2D:L,texSubImage3D:B,compressedTexSubImage2D:O,compressedTexSubImage3D:he,scissor:xe,viewport:Oe,reset:Xe}}function dv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new fe,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,g){return f?new OffscreenCanvas(R,g):co("canvas")}function _(R,g,P){let L=1;const B=de(R);if((B.width>P||B.height>P)&&(L=P/Math.max(B.width,B.height)),L<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const O=Math.floor(L*B.width),he=Math.floor(L*B.height);d===void 0&&(d=x(O,he));const ne=g?x(O,he):d;return ne.width=O,ne.height=he,ne.getContext("2d").drawImage(R,0,0,O,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+O+"x"+he+")."),ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),R;return R}function p(R){return R.generateMipmaps}function m(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,g,P,L,B=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let O=g;if(g===i.RED&&(P===i.FLOAT&&(O=i.R32F),P===i.HALF_FLOAT&&(O=i.R16F),P===i.UNSIGNED_BYTE&&(O=i.R8)),g===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.R8UI),P===i.UNSIGNED_SHORT&&(O=i.R16UI),P===i.UNSIGNED_INT&&(O=i.R32UI),P===i.BYTE&&(O=i.R8I),P===i.SHORT&&(O=i.R16I),P===i.INT&&(O=i.R32I)),g===i.RG&&(P===i.FLOAT&&(O=i.RG32F),P===i.HALF_FLOAT&&(O=i.RG16F),P===i.UNSIGNED_BYTE&&(O=i.RG8)),g===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RG8UI),P===i.UNSIGNED_SHORT&&(O=i.RG16UI),P===i.UNSIGNED_INT&&(O=i.RG32UI),P===i.BYTE&&(O=i.RG8I),P===i.SHORT&&(O=i.RG16I),P===i.INT&&(O=i.RG32I)),g===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RGB8UI),P===i.UNSIGNED_SHORT&&(O=i.RGB16UI),P===i.UNSIGNED_INT&&(O=i.RGB32UI),P===i.BYTE&&(O=i.RGB8I),P===i.SHORT&&(O=i.RGB16I),P===i.INT&&(O=i.RGB32I)),g===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),P===i.UNSIGNED_INT&&(O=i.RGBA32UI),P===i.BYTE&&(O=i.RGBA8I),P===i.SHORT&&(O=i.RGBA16I),P===i.INT&&(O=i.RGBA32I)),g===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),g===i.RGBA){const he=B?ao:lt.getTransfer(L);P===i.FLOAT&&(O=i.RGBA32F),P===i.HALF_FLOAT&&(O=i.RGBA16F),P===i.UNSIGNED_BYTE&&(O=he===ut?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function v(R,g){let P;return R?g===null||g===Hi||g===or?P=i.DEPTH24_STENCIL8:g===Kn?P=i.DEPTH32F_STENCIL8:g===rr&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hi||g===or?P=i.DEPTH_COMPONENT24:g===Kn?P=i.DEPTH_COMPONENT32F:g===rr&&(P=i.DEPTH_COMPONENT16),P}function y(R,g){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==Dn?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function b(R){const g=R.target;g.removeEventListener("dispose",b),C(g),g.isVideoTexture&&h.delete(g)}function T(R){const g=R.target;g.removeEventListener("dispose",T),E(g)}function C(R){const g=n.get(R);if(g.__webglInit===void 0)return;const P=R.source,L=u.get(P);if(L){const B=L[g.__cacheKey];B.usedTimes--,B.usedTimes===0&&w(R),Object.keys(L).length===0&&u.delete(P)}n.remove(R)}function w(R){const g=n.get(R);i.deleteTexture(g.__webglTexture);const P=R.source,L=u.get(P);delete L[g.__cacheKey],o.memory.textures--}function E(R){const g=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(g.__webglFramebuffer[L]))for(let B=0;B<g.__webglFramebuffer[L].length;B++)i.deleteFramebuffer(g.__webglFramebuffer[L][B]);else i.deleteFramebuffer(g.__webglFramebuffer[L]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[L])}else{if(Array.isArray(g.__webglFramebuffer))for(let L=0;L<g.__webglFramebuffer.length;L++)i.deleteFramebuffer(g.__webglFramebuffer[L]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let L=0;L<g.__webglColorRenderbuffer.length;L++)g.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[L]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const P=R.textures;for(let L=0,B=P.length;L<B;L++){const O=n.get(P[L]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),o.memory.textures--),n.remove(P[L])}n.remove(R)}let I=0;function U(){I=0}function H(){const R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function Z(R){const g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function X(R,g){const P=n.get(R);if(R.isVideoTexture&&te(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){const L=R.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(P,R,g);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+g)}function Y(R,g){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){ie(P,R,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+g)}function j(R,g){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){ie(P,R,g);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+g)}function W(R,g){const P=n.get(R);if(R.version>0&&P.__version!==R.version){ce(P,R,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+g)}const me={[sr]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Ra]:i.MIRRORED_REPEAT},Me={[wn]:i.NEAREST,[$u]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},we={[Ku]:i.NEVER,[rf]:i.ALWAYS,[Qu]:i.LESS,[td]:i.LEQUAL,[ef]:i.EQUAL,[sf]:i.GEQUAL,[tf]:i.GREATER,[nf]:i.NOTEQUAL};function Be(R,g){if(g.type===Kn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Dn||g.magFilter===Po||g.magFilter===br||g.magFilter===Ui||g.minFilter===Dn||g.minFilter===Po||g.minFilter===br||g.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,me[g.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,me[g.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,me[g.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Me[g.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===wn||g.minFilter!==br&&g.minFilter!==Ui||g.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function $e(R,g){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",b));const L=g.source;let B=u.get(L);B===void 0&&(B={},u.set(L,B));const O=Z(g);if(O!==R.__cacheKey){B[O]===void 0&&(B[O]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),B[O].usedTimes++;const he=B[R.__cacheKey];he!==void 0&&(B[R.__cacheKey].usedTimes--,he.usedTimes===0&&w(g)),R.__cacheKey=O,R.__webglTexture=B[O].texture}return P}function nt(R,g,P){return Math.floor(Math.floor(R/P)/g)}function je(R,g,P,L){const O=R.updateRanges;if(O.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,P,L,g.data);else{O.sort((Q,xe)=>Q.start-xe.start);let he=0;for(let Q=1;Q<O.length;Q++){const xe=O[he],Oe=O[Q],Ie=xe.start+xe.count,Ae=nt(Oe.start,g.width,4),Xe=nt(xe.start,g.width,4);Oe.start<=Ie+1&&Ae===Xe&&nt(Oe.start+Oe.count-1,g.width,4)===Ae?xe.count=Math.max(xe.count,Oe.start+Oe.count-xe.start):(++he,O[he]=Oe)}O.length=he+1;const ne=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),pe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Q=0,xe=O.length;Q<xe;Q++){const Oe=O[Q],Ie=Math.floor(Oe.start/4),Ae=Math.ceil(Oe.count/4),Xe=Ie%g.width,F=Math.floor(Ie/g.width),ye=Ae,be=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Xe,F,ye,be,P,L,g.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ne),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ie(R,g,P){let L=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(L=i.TEXTURE_3D);const B=$e(R,g),O=g.source;t.bindTexture(L,R.__webglTexture,i.TEXTURE0+P);const he=n.get(O);if(O.version!==he.__version||B===!0){t.activeTexture(i.TEXTURE0+P);const ne=lt.getPrimaries(lt.workingColorSpace),Ee=g.colorSpace===ui?null:lt.getPrimaries(g.colorSpace),pe=g.colorSpace===ui||ne===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let Q=_(g.image,!1,s.maxTextureSize);Q=re(g,Q);const xe=r.convert(g.format,g.colorSpace),Oe=r.convert(g.type);let Ie=M(g.internalFormat,xe,Oe,g.colorSpace,g.isVideoTexture);Be(L,g);let Ae;const Xe=g.mipmaps,F=g.isVideoTexture!==!0,ye=he.__version===void 0||B===!0,be=O.dataReady,ke=y(g,Q);if(g.isDepthTexture)Ie=v(g.format===lr,g.type),ye&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ie,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ie,Q.width,Q.height,0,xe,Oe,null));else if(g.isDataTexture)if(Xe.length>0){F&&ye&&t.texStorage2D(i.TEXTURE_2D,ke,Ie,Xe[0].width,Xe[0].height);for(let _e=0,le=Xe.length;_e<le;_e++)Ae=Xe[_e],F?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,xe,Oe,Ae.data):t.texImage2D(i.TEXTURE_2D,_e,Ie,Ae.width,Ae.height,0,xe,Oe,Ae.data);g.generateMipmaps=!1}else F?(ye&&t.texStorage2D(i.TEXTURE_2D,ke,Ie,Q.width,Q.height),be&&je(g,Q,xe,Oe)):t.texImage2D(i.TEXTURE_2D,0,Ie,Q.width,Q.height,0,xe,Oe,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){F&&ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ie,Xe[0].width,Xe[0].height,Q.depth);for(let _e=0,le=Xe.length;_e<le;_e++)if(Ae=Xe[_e],g.format!==Mn)if(xe!==null)if(F){if(be)if(g.layerUpdates.size>0){const De=Jc(Ae.width,Ae.height,g.format,g.type);for(const Ye of g.layerUpdates){const mt=Ae.data.subarray(Ye*De/Ae.data.BYTES_PER_ELEMENT,(Ye+1)*De/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,Ye,Ae.width,Ae.height,1,xe,mt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,Q.depth,xe,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,Ie,Ae.width,Ae.height,Q.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Ae.width,Ae.height,Q.depth,xe,Oe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,Ie,Ae.width,Ae.height,Q.depth,0,xe,Oe,Ae.data)}else{F&&ye&&t.texStorage2D(i.TEXTURE_2D,ke,Ie,Xe[0].width,Xe[0].height);for(let _e=0,le=Xe.length;_e<le;_e++)Ae=Xe[_e],g.format!==Mn?xe!==null?F?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,xe,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,Ie,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ae.width,Ae.height,xe,Oe,Ae.data):t.texImage2D(i.TEXTURE_2D,_e,Ie,Ae.width,Ae.height,0,xe,Oe,Ae.data)}else if(g.isDataArrayTexture)if(F){if(ye&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ie,Q.width,Q.height,Q.depth),be)if(g.layerUpdates.size>0){const _e=Jc(Q.width,Q.height,g.format,g.type);for(const le of g.layerUpdates){const De=Q.data.subarray(le*_e/Q.data.BYTES_PER_ELEMENT,(le+1)*_e/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,Q.width,Q.height,1,xe,Oe,De)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,xe,Oe,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,Q.width,Q.height,Q.depth,0,xe,Oe,Q.data);else if(g.isData3DTexture)F?(ye&&t.texStorage3D(i.TEXTURE_3D,ke,Ie,Q.width,Q.height,Q.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,xe,Oe,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,Q.width,Q.height,Q.depth,0,xe,Oe,Q.data);else if(g.isFramebufferTexture){if(ye)if(F)t.texStorage2D(i.TEXTURE_2D,ke,Ie,Q.width,Q.height);else{let _e=Q.width,le=Q.height;for(let De=0;De<ke;De++)t.texImage2D(i.TEXTURE_2D,De,Ie,_e,le,0,xe,Oe,null),_e>>=1,le>>=1}}else if(Xe.length>0){if(F&&ye){const _e=de(Xe[0]);t.texStorage2D(i.TEXTURE_2D,ke,Ie,_e.width,_e.height)}for(let _e=0,le=Xe.length;_e<le;_e++)Ae=Xe[_e],F?be&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,xe,Oe,Ae):t.texImage2D(i.TEXTURE_2D,_e,Ie,xe,Oe,Ae);g.generateMipmaps=!1}else if(F){if(ye){const _e=de(Q);t.texStorage2D(i.TEXTURE_2D,ke,Ie,_e.width,_e.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Oe,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ie,xe,Oe,Q);p(g)&&m(L),he.__version=O.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ce(R,g,P){if(g.image.length!==6)return;const L=$e(R,g),B=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+P);const O=n.get(B);if(B.version!==O.__version||L===!0){t.activeTexture(i.TEXTURE0+P);const he=lt.getPrimaries(lt.workingColorSpace),ne=g.colorSpace===ui?null:lt.getPrimaries(g.colorSpace),Ee=g.colorSpace===ui||he===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,xe=[];for(let le=0;le<6;le++)!pe&&!Q?xe[le]=_(g.image[le],!0,s.maxCubemapSize):xe[le]=Q?g.image[le].image:g.image[le],xe[le]=re(g,xe[le]);const Oe=xe[0],Ie=r.convert(g.format,g.colorSpace),Ae=r.convert(g.type),Xe=M(g.internalFormat,Ie,Ae,g.colorSpace),F=g.isVideoTexture!==!0,ye=O.__version===void 0||L===!0,be=B.dataReady;let ke=y(g,Oe);Be(i.TEXTURE_CUBE_MAP,g);let _e;if(pe){F&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,Xe,Oe.width,Oe.height);for(let le=0;le<6;le++){_e=xe[le].mipmaps;for(let De=0;De<_e.length;De++){const Ye=_e[De];g.format!==Mn?Ie!==null?F?be&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Ye.width,Ye.height,Ie,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,Xe,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,0,0,Ye.width,Ye.height,Ie,Ae,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De,Xe,Ye.width,Ye.height,0,Ie,Ae,Ye.data)}}}else{if(_e=g.mipmaps,F&&ye){_e.length>0&&ke++;const le=de(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,Xe,le.width,le.height)}for(let le=0;le<6;le++)if(Q){F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,xe[le].width,xe[le].height,Ie,Ae,xe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,xe[le].width,xe[le].height,0,Ie,Ae,xe[le].data);for(let De=0;De<_e.length;De++){const mt=_e[De].image[le].image;F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,mt.width,mt.height,Ie,Ae,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,Xe,mt.width,mt.height,0,Ie,Ae,mt.data)}}else{F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ie,Ae,xe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Xe,Ie,Ae,xe[le]);for(let De=0;De<_e.length;De++){const Ye=_e[De];F?be&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,0,0,Ie,Ae,Ye.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,De+1,Xe,Ie,Ae,Ye.image[le])}}}p(g)&&m(i.TEXTURE_CUBE_MAP),O.__version=B.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ge(R,g,P,L,B,O){const he=r.convert(P.format,P.colorSpace),ne=r.convert(P.type),Ee=M(P.internalFormat,he,ne,P.colorSpace),pe=n.get(g),Q=n.get(P);if(Q.__renderTarget=g,!pe.__hasExternalTextures){const xe=Math.max(1,g.width>>O),Oe=Math.max(1,g.height>>O);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,O,Ee,xe,Oe,g.depth,0,he,ne,null):t.texImage2D(B,O,Ee,xe,Oe,0,he,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),G(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,B,Q.__webglTexture,0,q(g)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,B,Q.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(R,g,P){if(i.bindRenderbuffer(i.RENDERBUFFER,R),g.depthBuffer){const L=g.depthTexture,B=L&&L.isDepthTexture?L.type:null,O=v(g.stencilBuffer,B),he=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=q(g);G(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,O,g.width,g.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,O,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,O,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,R)}else{const L=g.textures;for(let B=0;B<L.length;B++){const O=L[B],he=r.convert(O.format,O.colorSpace),ne=r.convert(O.type),Ee=M(O.internalFormat,he,ne,O.colorSpace),pe=q(g);P&&G(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Ee,g.width,g.height):G(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Ee,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(R,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(g.depthTexture);L.__renderTarget=g,(!L.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),X(g.depthTexture,0);const B=L.__webglTexture,O=q(g);if(g.depthTexture.format===ar)G(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(g.depthTexture.format===lr)G(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Ve(R){const g=n.get(R),P=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){const L=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),L){const B=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,L.removeEventListener("dispose",B)};L.addEventListener("dispose",B),g.__depthDisposeCallback=B}g.__boundDepthTexture=L}if(R.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const L=R.texture.mipmaps;L&&L.length>0?Re(g.__webglFramebuffer[0],R):Re(g.__webglFramebuffer,R)}else if(P){g.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[L]),g.__webglDepthbuffer[L]===void 0)g.__webglDepthbuffer[L]=i.createRenderbuffer(),Te(g.__webglDepthbuffer[L],R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,O)}}else{const L=R.texture.mipmaps;if(L&&L.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Te(g.__webglDepthbuffer,R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,O)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,g,P){const L=n.get(R);g!==void 0&&ge(L.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Ve(R)}function k(R){const g=R.texture,P=n.get(R),L=n.get(g);R.addEventListener("dispose",T);const B=R.textures,O=R.isWebGLCubeRenderTarget===!0,he=B.length>1;if(he||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=g.version,o.memory.textures++),O){P.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer[ne]=[];for(let Ee=0;Ee<g.mipmaps.length;Ee++)P.__webglFramebuffer[ne][Ee]=i.createFramebuffer()}else P.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){P.__webglFramebuffer=[];for(let ne=0;ne<g.mipmaps.length;ne++)P.__webglFramebuffer[ne]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(he)for(let ne=0,Ee=B.length;ne<Ee;ne++){const pe=n.get(B[ne]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let ne=0;ne<B.length;ne++){const Ee=B[ne];P.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[ne]);const pe=r.convert(Ee.format,Ee.colorSpace),Q=r.convert(Ee.type),xe=M(Ee.internalFormat,pe,Q,Ee.colorSpace,R.isXRRenderTarget===!0),Oe=q(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,xe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,P.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(P.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Be(i.TEXTURE_CUBE_MAP,g);for(let ne=0;ne<6;ne++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)ge(P.__webglFramebuffer[ne][Ee],R,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ee);else ge(P.__webglFramebuffer[ne],R,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(g)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ne=0,Ee=B.length;ne<Ee;ne++){const pe=B[ne],Q=n.get(pe);let xe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(xe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,Q.__webglTexture),Be(xe,pe),ge(P.__webglFramebuffer,R,pe,i.COLOR_ATTACHMENT0+ne,xe,0),p(pe)&&m(xe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,L.__webglTexture),Be(ne,g),g.mipmaps&&g.mipmaps.length>0)for(let Ee=0;Ee<g.mipmaps.length;Ee++)ge(P.__webglFramebuffer[Ee],R,g,i.COLOR_ATTACHMENT0,ne,Ee);else ge(P.__webglFramebuffer,R,g,i.COLOR_ATTACHMENT0,ne,0);p(g)&&m(ne),t.unbindTexture()}R.depthBuffer&&Ve(R)}function ae(R){const g=R.textures;for(let P=0,L=g.length;P<L;P++){const B=g[P];if(p(B)){const O=S(R),he=n.get(B).__webglTexture;t.bindTexture(O,he),m(O),t.unbindTexture()}}}const oe=[],se=[];function N(R){if(R.samples>0){if(G(R)===!1){const g=R.textures,P=R.width,L=R.height;let B=i.COLOR_BUFFER_BIT;const O=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(R),ne=g.length>1;if(ne)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Ee=R.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Q=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,P,L,0,0,P,L,B,i.NEAREST),c===!0&&(oe.length=0,se.length=0,oe.push(i.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push(O),se.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Q=n.get(g[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const g=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function q(R){return Math.min(s.maxSamples,R.samples)}function G(R){const g=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function te(R){const g=o.render.frame;h.get(R)!==g&&(h.set(R,g),R.update())}function re(R,g){const P=R.colorSpace,L=R.format,B=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==Ts&&P!==ui&&(lt.getTransfer(P)===ut?(L!==Mn||B!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),g}function de(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=it,this.setupRenderTarget=k,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=G}function uv(i,e){function t(n,s=ui){let r;const o=lt.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===Al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===qh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===Ds)return i.HALF_FLOAT;if(n===Zh)return i.ALPHA;if(n===jh)return i.RGB;if(n===Mn)return i.RGBA;if(n===ar)return i.DEPTH_COMPONENT;if(n===lr)return i.DEPTH_STENCIL;if(n===Kh)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===Qh)return i.RG;if(n===Pl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ca||n===Pa||n===La||n===Ia)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ca)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===La)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Da||n===ka||n===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Da||n===ka)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ja||n===$a||n===Ya)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ua)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ba)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===za)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Va)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ga)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$a)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ya)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Za||n===ja||n===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Za)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qa||n===el||n===tl||n===nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pv=`
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

}`;class mv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ni({vertexShader:fv,fragmentShader:pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ee(new wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gv extends qi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,x=null;const _=typeof XRWebGLBinding<"u",p=new mv,m={},S=t.getContextAttributes();let M=null,v=null;const y=[],b=[],T=new fe;let C=null;const w=new Ht;w.viewport=new xt;const E=new Ht;E.viewport=new xt;const I=[w,E],U=new Up;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=y[ie];return ce===void 0&&(ce=new jo,y[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=y[ie];return ce===void 0&&(ce=new jo,y[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=y[ie];return ce===void 0&&(ce=new jo,y[ie]=ce),ce.getHandSpace()};function X(ie){const ce=b.indexOf(ie.inputSource);if(ce===-1)return;const ge=y[ce];ge!==void 0&&(ge.update(ie.inputSource,ie.frame,l||o),ge.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",j);for(let ie=0;ie<y.length;ie++){const ce=b[ie];ce!==null&&(b[ie]=null,y[ie].disconnect(ce))}H=null,Z=null,p.reset();for(const ie in m)delete m[ie];e.setRenderTarget(M),f=null,u=null,d=null,s=null,v=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ie){l=ie},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Te=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?lr:ar,Te=S.stencil?or:Hi);const Ve={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new vi(u.textureWidth,u.textureHeight,{format:Mn,type:Fn,depthTexture:new md(u.textureWidth,u.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new vi(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:Fn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(ie){for(let ce=0;ce<ie.removed.length;ce++){const ge=ie.removed[ce],Te=b.indexOf(ge);Te>=0&&(b[Te]=null,y[Te].disconnect(ge))}for(let ce=0;ce<ie.added.length;ce++){const ge=ie.added[ce];let Te=b.indexOf(ge);if(Te===-1){for(let Ve=0;Ve<y.length;Ve++)if(Ve>=b.length){b.push(ge),Te=Ve;break}else if(b[Ve]===null){b[Ve]=ge,Te=Ve;break}if(Te===-1)break}const Re=y[Te];Re&&Re.connect(ge)}}const W=new D,me=new D;function Me(ie,ce,ge){W.setFromMatrixPosition(ce.matrixWorld),me.setFromMatrixPosition(ge.matrixWorld);const Te=W.distanceTo(me),Re=ce.projectionMatrix.elements,Ve=ge.projectionMatrix.elements,it=Re[14]/(Re[10]-1),k=Re[14]/(Re[10]+1),ae=(Re[9]+1)/Re[5],oe=(Re[9]-1)/Re[5],se=(Re[8]-1)/Re[0],N=(Ve[8]+1)/Ve[0],q=it*se,G=it*N,te=Te/(-se+N),re=te*-se;if(ce.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(re),ie.translateZ(te),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Re[10]===-1)ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const de=it+te,R=k+te,g=q-re,P=G+(Te-re),L=ae*k/R*de,B=oe*k/R*de;ie.projectionMatrix.makePerspective(g,P,L,B,de,R),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function we(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let ce=ie.near,ge=ie.far;p.texture!==null&&(p.depthNear>0&&(ce=p.depthNear),p.depthFar>0&&(ge=p.depthFar)),U.near=E.near=w.near=ce,U.far=E.far=w.far=ge,(H!==U.near||Z!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,Z=U.far),U.layers.mask=ie.layers.mask|6,w.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const Te=ie.parent,Re=U.cameras;we(U,Te);for(let Ve=0;Ve<Re.length;Ve++)we(Re[Ve],Te);Re.length===2?Me(U,w,E):U.projectionMatrix.copy(w.projectionMatrix),Be(ie,U,Te)};function Be(ie,ce,ge){ge===null?ie.matrix.copy(ce.matrixWorld):(ie.matrix.copy(ge.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ce.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=cr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(ie){c=ie,u!==null&&(u.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(U)},this.getCameraTexture=function(ie){return m[ie]};let $e=null;function nt(ie,ce){if(h=ce.getViewerPose(l||o),x=ce,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Te=!1;ge.length!==U.cameras.length&&(U.cameras.length=0,Te=!0);for(let k=0;k<ge.length;k++){const ae=ge[k];let oe=null;if(f!==null)oe=f.getViewport(ae);else{const N=d.getViewSubImage(u,ae);oe=N.viewport,k===0&&(e.setRenderTargetTextures(v,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(v))}let se=I[k];se===void 0&&(se=new Ht,se.layers.enable(k),se.viewport=new xt,I[k]=se),se.matrix.fromArray(ae.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ae.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(oe.x,oe.y,oe.width,oe.height),k===0&&(U.matrix.copy(se.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Te===!0&&U.cameras.push(se)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const k=d.getDepthInformation(ge[0]);k&&k.isValid&&k.texture&&p.init(k,s.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let k=0;k<ge.length;k++){const ae=ge[k].camera;if(ae){let oe=m[ae];oe||(oe=new gd,m[ae]=oe);const se=d.getCameraImage(ae);oe.sourceTexture=se}}}}for(let ge=0;ge<y.length;ge++){const Te=b[ge],Re=y[ge];Te!==null&&Re!==void 0&&Re.update(Te,ce,l||o)}$e&&$e(ie,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),x=null}const je=new Ad;je.setAnimationLoop(nt),this.setAnimationLoop=function(ie){$e=ie},this.dispose=function(){}}}const Pi=new On,xv=new _t;function vv(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,cd(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?c(p,m,S,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),M=S.envMap,v=S.envMapRotation;M&&(p.envMap.value=M,Pi.copy(v),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),p.envMapRotation.value.setFromMatrix4(xv.makeRotationFromEuler(Pi)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _v(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const v=M.program;n.uniformBlockBinding(S,v)}function l(S,M){let v=s[S.id];v===void 0&&(x(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",p));const y=M.program;n.updateUBOMapping(S,y);const b=e.render.frame;r[S.id]!==b&&(u(S),r[S.id]=b)}function h(S){const M=d();S.__bindingPointIndex=M;const v=i.createBuffer(),y=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const M=s[S.id],v=S.uniforms,y=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,T=v.length;b<T;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,E=C.length;w<E;w++){const I=C[w];if(f(I,b,w,y)===!0){const U=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let X=0;X<H.length;X++){const Y=H[X],j=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,U+Z,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,Z),Z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,v,y){const b=S.value,T=M+"_"+v;if(y[T]===void 0)return typeof b=="number"||typeof b=="boolean"?y[T]=b:y[T]=b.clone(),!0;{const C=y[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return y[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function x(S){const M=S.uniforms;let v=0;const y=16;for(let T=0,C=M.length;T<C;T++){const w=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,I=w.length;E<I;E++){const U=w[E],H=Array.isArray(U.value)?U.value:[U.value];for(let Z=0,X=H.length;Z<X;Z++){const Y=H[Z],j=_(Y),W=v%y,me=W%j.boundary,Me=W+me;v+=me,Me!==0&&y-Me<j.storage&&(v+=y-Me),U.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=j.storage}}}const b=v%y;return b>0&&(v+=y-b),S.__size=v,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:m}}class yv{constructor(e={}){const{canvas:t=Sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const x=new Uint32Array(4),_=new Int32Array(4);let p=null,m=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=gt;let b=0,T=0,C=null,w=-1,E=null;const I=new xt,U=new xt;let H=null;const Z=new tt(0);let X=0,Y=t.width,j=t.height,W=1,me=null,Me=null;const we=new xt(0,0,Y,j),Be=new xt(0,0,Y,j);let $e=!1;const nt=new Fl;let je=!1,ie=!1;const ce=new _t,ge=new D,Te=new xt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function it(){return C===null?W:1}let k=n;function ae(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wl}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",_e,!1),k===null){const z="webgl2";if(k=ae(z,A),k===null)throw ae(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let oe,se,N,q,G,te,re,de,R,g,P,L,B,O,he,ne,Ee,pe,Q,xe,Oe,Ie,Ae,Xe;function F(){oe=new Pg(k),oe.init(),Ie=new uv(k,oe),se=new Eg(k,oe,e,Ie),N=new hv(k,oe),se.reversedDepthBuffer&&u&&N.buffers.depth.setReversed(!0),q=new Dg(k),G=new jx,te=new dv(k,oe,N,G,se,Ie,q),re=new wg(v),de=new Cg(v),R=new Bp(k),Ae=new Mg(k,R),g=new Lg(k,R,q,Ae),P=new Ng(k,g,R,q),Q=new kg(k,se,te),ne=new bg(G),L=new Zx(v,re,de,oe,se,Ae,ne),B=new vv(v,G),O=new Qx,he=new rv(oe),pe=new yg(v,re,de,N,P,f,c),Ee=new lv(v,P,se),Xe=new _v(k,q,se,N),xe=new Sg(k,oe,q),Oe=new Ig(k,oe,q),q.programs=L.programs,v.capabilities=se,v.extensions=oe,v.properties=G,v.renderLists=O,v.shadowMap=Ee,v.state=N,v.info=q}F();const ye=new gv(v,k);this.xr=ye,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(Y,j,!1))},this.getSize=function(A){return A.set(Y,j)},this.setSize=function(A,z,J=!0){if(ye.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,j=z,t.width=Math.floor(A*W),t.height=Math.floor(z*W),J===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Y*W,j*W).floor()},this.setDrawingBufferSize=function(A,z,J){Y=A,j=z,W=J,t.width=Math.floor(A*J),t.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,z,J,$){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,z,J,$),N.viewport(I.copy(we).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,z,J,$){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,z,J,$),N.scissor(U.copy(Be).multiplyScalar(W).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(A){N.setScissorTest($e=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){Me=A},this.getClearColor=function(A){return A.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor(...arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let $=0;if(A){let V=!1;if(C!==null){const Se=C.texture.format;V=Se===Ll||Se===Pl||Se===Cl}if(V){const Se=C.texture.type,Le=Se===Fn||Se===Hi||Se===rr||Se===or||Se===Al||Se===Rl,Fe=pe.getClearColor(),Ne=pe.getClearAlpha(),We=Fe.r,Je=Fe.g,He=Fe.b;Le?(x[0]=We,x[1]=Je,x[2]=He,x[3]=Ne,k.clearBufferuiv(k.COLOR,0,x)):(_[0]=We,_[1]=Je,_[2]=He,_[3]=Ne,k.clearBufferiv(k.COLOR,0,_))}else $|=k.COLOR_BUFFER_BIT}z&&($|=k.DEPTH_BUFFER_BIT),J&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),pe.dispose(),O.dispose(),he.dispose(),G.dispose(),re.dispose(),de.dispose(),P.dispose(),Ae.dispose(),Xe.dispose(),L.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",An),ye.removeEventListener("sessionend",ac),Ei.stop()};function be(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=q.autoReset,z=Ee.enabled,J=Ee.autoUpdate,$=Ee.needsUpdate,V=Ee.type;F(),q.autoReset=A,Ee.enabled=z,Ee.autoUpdate=J,Ee.needsUpdate=$,Ee.type=V}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function le(A){const z=A.target;z.removeEventListener("dispose",le),De(z)}function De(A){Ye(A),G.remove(A)}function Ye(A){const z=G.get(A).programs;z!==void 0&&(z.forEach(function(J){L.releaseProgram(J)}),A.isShaderMaterial&&L.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,$,V,Se){z===null&&(z=Re);const Le=V.isMesh&&V.matrixWorld.determinant()<0,Fe=du(A,z,J,$,V);N.setMaterial($,Le);let Ne=J.index,We=1;if($.wireframe===!0){if(Ne=g.getWireframeAttribute(J),Ne===void 0)return;We=2}const Je=J.drawRange,He=J.attributes.position;let ot=Je.start*We,dt=(Je.start+Je.count)*We;Se!==null&&(ot=Math.max(ot,Se.start*We),dt=Math.min(dt,(Se.start+Se.count)*We)),Ne!==null?(ot=Math.max(ot,0),dt=Math.min(dt,Ne.count)):He!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,He.count));const Rt=dt-ot;if(Rt<0||Rt===1/0)return;Ae.setup(V,$,Fe,J,Ne);let yt,pt=xe;if(Ne!==null&&(yt=R.get(Ne),pt=Oe,pt.setIndex(yt)),V.isMesh)$.wireframe===!0?(N.setLineWidth($.wireframeLinewidth*it()),pt.setMode(k.LINES)):pt.setMode(k.TRIANGLES);else if(V.isLine){let Ge=$.linewidth;Ge===void 0&&(Ge=1),N.setLineWidth(Ge*it()),V.isLineSegments?pt.setMode(k.LINES):V.isLineLoop?pt.setMode(k.LINE_LOOP):pt.setMode(k.LINE_STRIP)}else V.isPoints?pt.setMode(k.POINTS):V.isSprite&&pt.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ge=V._multiDrawStarts,Et=V._multiDrawCounts,at=V._multiDrawCount,Qt=Ne?R.get(Ne).bytesPerElement:1,Ji=G.get($).currentProgram.getUniforms();for(let en=0;en<at;en++)Ji.setValue(k,"_gl_DrawID",en),pt.render(Ge[en]/Qt,Et[en])}else if(V.isInstancedMesh)pt.renderInstances(ot,Rt,V.count);else if(J.isInstancedBufferGeometry){const Ge=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Et=Math.min(J.instanceCount,Ge);pt.renderInstances(ot,Rt,Et)}else pt.render(ot,Rt)};function mt(A,z,J){A.transparent===!0&&A.side===Tt&&A.forceSinglePass===!1?(A.side=Zt,A.needsUpdate=!0,Er(A,z,J),A.side=xi,A.needsUpdate=!0,Er(A,z,J),A.side=Tt):Er(A,z,J)}this.compile=function(A,z,J=null){J===null&&(J=A),m=he.get(J),m.init(z),M.push(m),J.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),A!==J&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights();const $=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Le=0;Le<Se.length;Le++){const Fe=Se[Le];mt(Fe,J,V),$.add(Fe)}else mt(Se,J,V),$.add(Se)}),m=M.pop(),$},this.compileAsync=function(A,z,J=null){const $=this.compile(A,z,J);return new Promise(V=>{function Se(){if($.forEach(function(Le){G.get(Le).currentProgram.isReady()&&$.delete(Le)}),$.size===0){V(A);return}setTimeout(Se,10)}oe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let ct=null;function zn(A){ct&&ct(A)}function An(){Ei.stop()}function ac(){Ei.start()}const Ei=new Ad;Ei.setAnimationLoop(zn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){ct=A,ye.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},ye.addEventListener("sessionstart",An),ye.addEventListener("sessionend",ac),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(z),z=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,C),m=he.get(A,M.length),m.init(z),M.push(m),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(ce,kn,z.reversedDepth),ie=this.localClippingEnabled,je=ne.init(this.clippingPlanes,ie),p=O.get(A,S.length),p.init(),S.push(p),ye.enabled===!0&&ye.isPresenting===!0){const Se=v.xr.getDepthSensingMesh();Se!==null&&Ro(Se,z,-1/0,v.sortObjects)}Ro(A,z,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(me,Me),Ve=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ve&&pe.addToRenderList(p,A),this.info.render.frame++,je===!0&&ne.beginShadows();const J=m.state.shadowsArray;Ee.render(J,A,z),je===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=p.opaque,V=p.transmissive;if(m.setupLights(),z.isArrayCamera){const Se=z.cameras;if(V.length>0)for(let Le=0,Fe=Se.length;Le<Fe;Le++){const Ne=Se[Le];cc($,V,A,Ne)}Ve&&pe.render(A);for(let Le=0,Fe=Se.length;Le<Fe;Le++){const Ne=Se[Le];lc(p,A,Ne,Ne.viewport)}}else V.length>0&&cc($,V,A,z),Ve&&pe.render(A),lc(p,A,z);C!==null&&T===0&&(te.updateMultisampleRenderTarget(C),te.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,z),Ae.resetDefaultState(),w=-1,E=null,M.pop(),M.length>0?(m=M[M.length-1],je===!0&&ne.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Ro(A,z,J,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){$&&Te.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);const Le=P.update(A),Fe=A.material;Fe.visible&&p.push(A,Le,Fe,J,Te.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){const Le=P.update(A),Fe=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Te.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Te.copy(Le.boundingSphere.center)),Te.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Fe)){const Ne=Le.groups;for(let We=0,Je=Ne.length;We<Je;We++){const He=Ne[We],ot=Fe[He.materialIndex];ot&&ot.visible&&p.push(A,Le,ot,J,Te.z,He)}}else Fe.visible&&p.push(A,Le,Fe,J,Te.z,null)}}const Se=A.children;for(let Le=0,Fe=Se.length;Le<Fe;Le++)Ro(Se[Le],z,J,$)}function lc(A,z,J,$){const V=A.opaque,Se=A.transmissive,Le=A.transparent;m.setupLightsView(J),je===!0&&ne.setGlobalState(v.clippingPlanes,J),$&&N.viewport(I.copy($)),V.length>0&&Sr(V,z,J),Se.length>0&&Sr(Se,z,J),Le.length>0&&Sr(Le,z,J),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function cc(A,z,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[$.id]===void 0&&(m.state.transmissionRenderTarget[$.id]=new vi(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Ds:Fn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const Se=m.state.transmissionRenderTarget[$.id],Le=$.viewport||I;Se.setSize(Le.z*v.transmissionResolutionScale,Le.w*v.transmissionResolutionScale);const Fe=v.getRenderTarget(),Ne=v.getActiveCubeFace(),We=v.getActiveMipmapLevel();v.setRenderTarget(Se),v.getClearColor(Z),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&pe.render(J);const Je=v.toneMapping;v.toneMapping=gi;const He=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),m.setupLightsView($),je===!0&&ne.setGlobalState(v.clippingPlanes,$),Sr(A,J,$),te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let dt=0,Rt=z.length;dt<Rt;dt++){const yt=z[dt],pt=yt.object,Ge=yt.geometry,Et=yt.material,at=yt.group;if(Et.side===Tt&&pt.layers.test($.layers)){const Qt=Et.side;Et.side=Zt,Et.needsUpdate=!0,hc(pt,J,$,Ge,Et,at),Et.side=Qt,Et.needsUpdate=!0,ot=!0}}ot===!0&&(te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se))}v.setRenderTarget(Fe,Ne,We),v.setClearColor(Z,X),He!==void 0&&($.viewport=He),v.toneMapping=Je}function Sr(A,z,J){const $=z.isScene===!0?z.overrideMaterial:null;for(let V=0,Se=A.length;V<Se;V++){const Le=A[V],Fe=Le.object,Ne=Le.geometry,We=Le.group;let Je=Le.material;Je.allowOverride===!0&&$!==null&&(Je=$),Fe.layers.test(J.layers)&&hc(Fe,z,J,Ne,Je,We)}}function hc(A,z,J,$,V,Se){A.onBeforeRender(v,z,J,$,V,Se),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,z,J,$,A,Se),V.transparent===!0&&V.side===Tt&&V.forceSinglePass===!1?(V.side=Zt,V.needsUpdate=!0,v.renderBufferDirect(J,z,$,V,A,Se),V.side=xi,V.needsUpdate=!0,v.renderBufferDirect(J,z,$,V,A,Se),V.side=Tt):v.renderBufferDirect(J,z,$,V,A,Se),A.onAfterRender(v,z,J,$,V,Se)}function Er(A,z,J){z.isScene!==!0&&(z=Re);const $=G.get(A),V=m.state.lights,Se=m.state.shadowsArray,Le=V.state.version,Fe=L.getParameters(A,V.state,Se,z,J),Ne=L.getProgramCacheKey(Fe);let We=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?de:re).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",le),We=new Map,$.programs=We);let Je=We.get(Ne);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Le)return uc(A,Fe),Je}else Fe.uniforms=L.getUniforms(A),A.onBeforeCompile(Fe,v),Je=L.acquireProgram(Fe,Ne),We.set(Ne,Je),$.uniforms=Fe.uniforms;const He=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=ne.uniform),uc(A,Fe),$.needsLights=fu(A),$.lightsStateVersion=Le,$.needsLights&&(He.ambientLightColor.value=V.state.ambient,He.lightProbe.value=V.state.probe,He.directionalLights.value=V.state.directional,He.directionalLightShadows.value=V.state.directionalShadow,He.spotLights.value=V.state.spot,He.spotLightShadows.value=V.state.spotShadow,He.rectAreaLights.value=V.state.rectArea,He.ltc_1.value=V.state.rectAreaLTC1,He.ltc_2.value=V.state.rectAreaLTC2,He.pointLights.value=V.state.point,He.pointLightShadows.value=V.state.pointShadow,He.hemisphereLights.value=V.state.hemi,He.directionalShadowMap.value=V.state.directionalShadowMap,He.directionalShadowMatrix.value=V.state.directionalShadowMatrix,He.spotShadowMap.value=V.state.spotShadowMap,He.spotLightMatrix.value=V.state.spotLightMatrix,He.spotLightMap.value=V.state.spotLightMap,He.pointShadowMap.value=V.state.pointShadowMap,He.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function dc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=oo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function uc(A,z){const J=G.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function du(A,z,J,$,V){z.isScene!==!0&&(z=Re),te.resetTextureUnits();const Se=z.fog,Le=$.isMeshStandardMaterial?z.environment:null,Fe=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ts,Ne=($.isMeshStandardMaterial?de:re).get($.envMap||Le),We=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),He=!!J.morphAttributes.position,ot=!!J.morphAttributes.normal,dt=!!J.morphAttributes.color;let Rt=gi;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Rt=v.toneMapping);const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pt=yt!==void 0?yt.length:0,Ge=G.get($),Et=m.state.lights;if(je===!0&&(ie===!0||A!==E)){const Gt=A===E&&$.id===w;ne.setState($,A,Gt)}let at=!1;$.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Et.state.version||Ge.outputColorSpace!==Fe||V.isBatchedMesh&&Ge.batching===!1||!V.isBatchedMesh&&Ge.batching===!0||V.isBatchedMesh&&Ge.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ge.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ge.instancing===!1||!V.isInstancedMesh&&Ge.instancing===!0||V.isSkinnedMesh&&Ge.skinning===!1||!V.isSkinnedMesh&&Ge.skinning===!0||V.isInstancedMesh&&Ge.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ge.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ge.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ge.instancingMorph===!1&&V.morphTexture!==null||Ge.envMap!==Ne||$.fog===!0&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ne.numPlanes||Ge.numIntersection!==ne.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Je||Ge.morphTargets!==He||Ge.morphNormals!==ot||Ge.morphColors!==dt||Ge.toneMapping!==Rt||Ge.morphTargetsCount!==pt)&&(at=!0):(at=!0,Ge.__version=$.version);let Qt=Ge.currentProgram;at===!0&&(Qt=Er($,z,V));let Ji=!1,en=!1,Os=!1;const bt=Qt.getUniforms(),rn=Ge.uniforms;if(N.useProgram(Qt.program)&&(Ji=!0,en=!0,Os=!0),$.id!==w&&(w=$.id,en=!0),Ji||E!==A){N.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(k,"projectionMatrix",A.projectionMatrix),bt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Jt=bt.map.cameraPosition;Jt!==void 0&&Jt.setValue(k,ge.setFromMatrixPosition(A.matrixWorld)),se.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,en=!0,Os=!0)}if(V.isSkinnedMesh){bt.setOptional(k,V,"bindMatrix"),bt.setOptional(k,V,"bindMatrixInverse");const Gt=V.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),bt.setValue(k,"boneTexture",Gt.boneTexture,te))}V.isBatchedMesh&&(bt.setOptional(k,V,"batchingTexture"),bt.setValue(k,"batchingTexture",V._matricesTexture,te),bt.setOptional(k,V,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",V._indirectTexture,te),bt.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",V._colorsTexture,te));const on=J.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Q.update(V,J,Qt),(en||Ge.receiveShadow!==V.receiveShadow)&&(Ge.receiveShadow=V.receiveShadow,bt.setValue(k,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(rn.envMap.value=Ne,rn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(rn.envMapIntensity.value=z.environmentIntensity),en&&(bt.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ge.needsLights&&uu(rn,Os),Se&&$.fog===!0&&B.refreshFogUniforms(rn,Se),B.refreshMaterialUniforms(rn,$,W,j,m.state.transmissionRenderTarget[A.id]),oo.upload(k,dc(Ge),rn,te)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(oo.upload(k,dc(Ge),rn,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(k,"center",V.center),bt.setValue(k,"modelViewMatrix",V.modelViewMatrix),bt.setValue(k,"normalMatrix",V.normalMatrix),bt.setValue(k,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Gt=$.uniformsGroups;for(let Jt=0,Co=Gt.length;Jt<Co;Jt++){const bi=Gt[Jt];Xe.update(bi,Qt),Xe.bind(bi,Qt)}}return Qt}function uu(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function fu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,J){const $=G.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),G.get(A.texture).__webglTexture=z,G.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const J=G.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const pu=k.createFramebuffer();this.setRenderTarget=function(A,z=0,J=0){C=A,b=z,T=J;let $=!0,V=null,Se=!1,Le=!1;if(A){const Ne=G.get(A);if(Ne.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(k.FRAMEBUFFER,null),$=!1;else if(Ne.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(Ne.__hasExternalTextures)te.rebindTextures(A,G.get(A.texture).__webglTexture,G.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Ne.__boundDepthTexture!==He){if(He!==null&&G.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Le=!0);const Je=G.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Je[z])?V=Je[z][J]:V=Je[z],Se=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?V=G.get(A).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[J]:V=Je,I.copy(A.viewport),U.copy(A.scissor),H=A.scissorTest}else I.copy(we).multiplyScalar(W).floor(),U.copy(Be).multiplyScalar(W).floor(),H=$e;if(J!==0&&(V=pu),N.bindFramebuffer(k.FRAMEBUFFER,V)&&$&&N.drawBuffers(A,V),N.viewport(I),N.scissor(U),N.setScissorTest(H),Se){const Ne=G.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,J)}else if(Le){const Ne=z;for(let We=0;We<A.textures.length;We++){const Je=G.get(A.textures[We]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+We,Je.__webglTexture,J,Ne)}}else if(A!==null&&J!==0){const Ne=G.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ne.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(A,z,J,$,V,Se,Le,Fe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){N.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const We=A.textures[Fe],Je=We.format,He=We.type;if(!se.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&J>=0&&J<=A.height-V&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(z,J,$,V,Ie.convert(Je),Ie.convert(He),Se))}finally{const We=C!==null?G.get(C).__webglFramebuffer:null;N.bindFramebuffer(k.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,$,V,Se,Le,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(z>=0&&z<=A.width-$&&J>=0&&J<=A.height-V){N.bindFramebuffer(k.FRAMEBUFFER,Ne);const We=A.textures[Fe],Je=We.format,He=We.type;if(!se.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.bufferData(k.PIXEL_PACK_BUFFER,Se.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(z,J,$,V,Ie.convert(Je),Ie.convert(He),0);const dt=C!==null?G.get(C).__webglFramebuffer:null;N.bindFramebuffer(k.FRAMEBUFFER,dt);const Rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ef(k,Rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ot),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Se),k.deleteBuffer(ot),k.deleteSync(Rt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){const $=Math.pow(2,-J),V=Math.floor(A.image.width*$),Se=Math.floor(A.image.height*$),Le=z!==null?z.x:0,Fe=z!==null?z.y:0;te.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Le,Fe,V,Se),N.unbindTexture()};const mu=k.createFramebuffer(),gu=k.createFramebuffer();this.copyTextureToTexture=function(A,z,J=null,$=null,V=0,Se=null){Se===null&&(V!==0?(hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=V,V=0):Se=0);let Le,Fe,Ne,We,Je,He,ot,dt,Rt;const yt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(J!==null)Le=J.max.x-J.min.x,Fe=J.max.y-J.min.y,Ne=J.isBox3?J.max.z-J.min.z:1,We=J.min.x,Je=J.min.y,He=J.isBox3?J.min.z:0;else{const on=Math.pow(2,-V);Le=Math.floor(yt.width*on),Fe=Math.floor(yt.height*on),A.isDataArrayTexture?Ne=yt.depth:A.isData3DTexture?Ne=Math.floor(yt.depth*on):Ne=1,We=0,Je=0,He=0}$!==null?(ot=$.x,dt=$.y,Rt=$.z):(ot=0,dt=0,Rt=0);const pt=Ie.convert(z.format),Ge=Ie.convert(z.type);let Et;z.isData3DTexture?(te.setTexture3D(z,0),Et=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),Et=k.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),Et=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const at=k.getParameter(k.UNPACK_ROW_LENGTH),Qt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ji=k.getParameter(k.UNPACK_SKIP_PIXELS),en=k.getParameter(k.UNPACK_SKIP_ROWS),Os=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,We),k.pixelStorei(k.UNPACK_SKIP_ROWS,Je),k.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const bt=A.isDataArrayTexture||A.isData3DTexture,rn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const on=G.get(A),Gt=G.get(z),Jt=G.get(on.__renderTarget),Co=G.get(Gt.__renderTarget);N.bindFramebuffer(k.READ_FRAMEBUFFER,Jt.__webglFramebuffer),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let bi=0;bi<Ne;bi++)bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(A).__webglTexture,V,He+bi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(z).__webglTexture,Se,Rt+bi)),k.blitFramebuffer(We,Je,Le,Fe,ot,dt,Le,Fe,k.DEPTH_BUFFER_BIT,k.NEAREST);N.bindFramebuffer(k.READ_FRAMEBUFFER,null),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||G.has(A)){const on=G.get(A),Gt=G.get(z);N.bindFramebuffer(k.READ_FRAMEBUFFER,mu),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,gu);for(let Jt=0;Jt<Ne;Jt++)bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,V,He+Jt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,V),rn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Gt.__webglTexture,Se,Rt+Jt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Gt.__webglTexture,Se),V!==0?k.blitFramebuffer(We,Je,Le,Fe,ot,dt,Le,Fe,k.COLOR_BUFFER_BIT,k.NEAREST):rn?k.copyTexSubImage3D(Et,Se,ot,dt,Rt+Jt,We,Je,Le,Fe):k.copyTexSubImage2D(Et,Se,ot,dt,We,Je,Le,Fe);N.bindFramebuffer(k.READ_FRAMEBUFFER,null),N.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else rn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Et,Se,ot,dt,Rt,Le,Fe,Ne,pt,Ge,yt.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Et,Se,ot,dt,Rt,Le,Fe,Ne,pt,yt.data):k.texSubImage3D(Et,Se,ot,dt,Rt,Le,Fe,Ne,pt,Ge,yt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Se,ot,dt,Le,Fe,pt,Ge,yt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Se,ot,dt,yt.width,yt.height,pt,yt.data):k.texSubImage2D(k.TEXTURE_2D,Se,ot,dt,Le,Fe,pt,Ge,yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,at),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ji),k.pixelStorei(k.UNPACK_SKIP_ROWS,en),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Os),Se===0&&z.generateMipmaps&&k.generateMipmap(Et),N.unbindTexture()},this.initRenderTarget=function(A){G.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,N.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}class Mv{constructor(){ue(this,"ctx",null);ue(this,"masterGain",null);ue(this,"engineOscA",null);ue(this,"engineOscB",null);ue(this,"engineFilter",null);ue(this,"engineGain",null);ue(this,"volume",.55);ue(this,"muted",!1);ue(this,"lastBlinkerOn",!1);ue(this,"lastRailBellTime",-999)}unlock(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.14,this.engineOscA=this.ctx.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=52,this.engineOscB=this.ctx.createOscillator(),this.engineOscB.type="triangle",this.engineOscB.frequency.value=104,this.engineOscA.connect(this.engineFilter),this.engineOscB.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOscA.start(),this.engineOscB.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e,t){this.volume=e,this.muted=t,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(t?0:e,this.ctx.currentTime,.04)}update(e,t,n){if(!this.ctx||this.ctx.state!=="running")return;const s=this.ctx.currentTime;if(this.engineOscA&&this.engineOscB&&this.engineFilter&&this.engineGain)if(e.stalled||e.rpm<=0)this.engineGain.gain.setTargetAtTime(0,s,.05);else{const r=Math.max(0,Math.min(1,(e.rpm-750)/3600)),o=38+r*96;this.engineOscA.frequency.setTargetAtTime(o,s,.05),this.engineOscB.frequency.setTargetAtTime(o*2,s,.05),this.engineFilter.frequency.setTargetAtTime(190+r*560,s,.06),this.engineGain.gain.setTargetAtTime(.08+r*.11,s,.06)}if(e.blinker!=="off"&&e.blinkerOn!==this.lastBlinkerOn&&this.playClick(e.blinkerOn?920:680,.025,.16),this.lastBlinkerOn=e.blinkerOn,t){const r=Math.hypot(e.x-38,e.z);if(r<58&&n-this.lastRailBellTime>=.45){this.lastRailBellTime=n;const o=Math.max(.03,Math.min(.28,8/Math.max(6,r)));this.playFumikiriBell(o)}}}playClick(e=800,t=.03,n=.15){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const s=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(e,s),o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+t),r.connect(o),o.connect(this.masterGain),r.start(s),r.stop(s+t)}playFumikiriBell(e){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;for(const n of[700,758]){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,t),r.gain.setValueAtTime(e*.5,t),r.gain.exponentialRampToValueAtTime(.001,t+.36),s.connect(r),r.connect(this.masterGain),s.start(t),s.stop(t+.37)}}playViolationChime(e){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=e?"sawtooth":"triangle",n.frequency.setValueAtTime(e?220:440,t),n.frequency.setValueAtTime(e?165:330,t+.12),s.gain.setValueAtTime(.22,t),s.gain.exponentialRampToValueAtTime(.001,t+.34),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.35)}playThud(){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(42,e+.14),n.gain.setValueAtTime(.28,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.16)}}class Sv{constructor(){ue(this,"enabled",!0);ue(this,"lastSpokenText","");ue(this,"lastSpokenTime",0)}setEnabled(e){this.enabled=e,!e&&typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}isEnabled(){return this.enabled}speak(e,t,n,s=!1){if(!this.enabled||typeof window>"u"||!("speechSynthesis"in window))return;const r=n==="ja"?e:t,o=performance.now();if(!(!s&&r===this.lastSpokenText&&o-this.lastSpokenTime<5500)){this.lastSpokenText=r,this.lastSpokenTime=o;try{s&&window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(r);a.lang=n==="ja"?"ja-JP":"en-US",a.rate=n==="ja"?1.05:1.02,a.pitch=1,a.volume=.9,window.speechSynthesis.speak(a)}catch{}}}announceViolation(e,t){const n=e.instantFail?`検定中止。${e.labelJa}。補助ブレーキ作動。`:`減点${e.points}点。${e.labelJa}。`,s=e.instantFail?`Exam terminated. ${e.labelEn}. Auxiliary brake applied.`:`Minus ${e.points} points. ${e.labelEn}.`;this.speak(n,s,t,!0)}}function ys(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function bo(i){let e=(i+Math.PI)%(Math.PI*2);return e<0&&(e+=Math.PI*2),e-Math.PI}function Zs(i,e,t,n,s){const r=Math.cos(t),o=Math.sin(t);return{x:i+n*r+s*o,z:e-n*o+s*r}}function Fi(i,e,t,n){return Math.hypot(i-t,e-n)}const pi=90,Oi=60,di=7,vh=di/2,cn=-24,ki=2.75,qs=2,nr=18,ll=34,ha=42,cl=58;function $n(i,e){if(e<cn-ki-.6||e>cn+ki+.6||i<=nr||i>=cl)return{y:0,slopeX:0,slopeZ:0};if(i<ll){const o=ll-nr,a=(i-nr)/o,c=qs*.5*(1-Math.cos(Math.PI*a)),l=qs*.5*Math.PI/o*Math.sin(Math.PI*a);return{y:c,slopeX:l,slopeZ:0}}if(i<=ha)return{y:qs,slopeX:0,slopeZ:0};const t=cl-ha,n=(i-ha)/t,s=qs*.5*(1+Math.cos(Math.PI*n)),r=-(qs*.5*Math.PI/t)*Math.sin(Math.PI*n);return{y:s,slopeX:r,slopeZ:0}}function Ev(){const t=105*Math.PI/180,n=[],s=[],r=[],o=(p,m,S,M)=>{const v=M,y=-S;n.push({x:p,z:m}),s.push({x:p+v*1.8,z:m+y*1.8}),r.push({x:p-v*1.8,z:m-y*1.8})};o(-46,-3.5,0,-1),o(-46,-8,0,-1);const a=-38.5,c=-12,l=28;for(let p=0;p<=l;p++){const m=Math.PI+t*p/l,S=a+7.5*Math.cos(m),M=c+7.5*Math.sin(m),v=-Math.sin(m),y=Math.cos(m);o(S,M,v,y)}const h=Math.PI+t,d=a+2*7.5*Math.cos(h),u=c+2*7.5*Math.sin(h);for(let p=1;p<=l;p++){const m=t*(1-p/l),S=d+7.5*Math.cos(m),M=u+7.5*Math.sin(m),v=Math.sin(m),y=-Math.cos(m);o(S,M,v,y)}const f=d+7.5;o(f,-34,0,-1),o(f,-42.5,0,-1);const x=[6,15,24,34,43,52],_=[];return x.forEach((p,m)=>{const S=s[p],M=r[p];S&&m%2===0&&_.push({id:`scurve-pole-l-${m}`,x:S.x,z:S.z,radius:.08,height:1.5,zone:"sCurve"}),M&&m%2===1&&_.push({id:`scurve-pole-r-${m}`,x:M.x,z:M.z,radius:.08,height:1.5,zone:"sCurve"})}),{centerline:n,leftCurb:s,rightCurb:r,poles:_}}const fo=Ev(),bv=fo.centerline,wv=2,Id=[{id:"scurve-left",points:fo.leftCurb,height:.14,label:"S-Curve West Curb"},{id:"scurve-right",points:fo.rightCurb,height:.14,label:"S-Curve East Curb"},{id:"crank-west-south",height:.14,label:"Crank West-South Curb",points:[{x:-50,z:3.5},{x:-50,z:20},{x:-36,z:20},{x:-36,z:42.5}]},{id:"crank-east-north",height:.14,label:"Crank East-North Curb",points:[{x:-46,z:3.5},{x:-46,z:16},{x:-32,z:16},{x:-32,z:42.5}]},{id:"bay-parking-curb",height:.14,label:"Direction Change Bay Curb",points:[{x:24.15,z:27.5},{x:24.15,z:33.7},{x:27.85,z:33.7},{x:27.85,z:27.5}]},{id:"parallel-parking-curb",height:.14,label:"Parallel Parking Curb",points:[{x:45,z:27.5},{x:45,z:30.2},{x:52.2,z:30.2},{x:52.2,z:27.5}]},{id:"hill-north-curb",height:.16,label:"Hill North Edge",points:[{x:18,z:-26.75},{x:58,z:-26.75}]},{id:"hill-south-curb",height:.16,label:"Hill South Edge",points:[{x:18,z:-21.25},{x:58,z:-21.25}]},{id:"outer-north",height:.14,points:[{x:-62,z:-49.5},{x:62,z:-49.5}]},{id:"outer-south",height:.14,points:[{x:-62,z:49.5},{x:62,z:49.5}]},{id:"outer-west",height:.14,points:[{x:-79.5,z:-32},{x:-79.5,z:32}]},{id:"outer-east",height:.14,points:[{x:79.5,z:-32},{x:79.5,z:32}]}],Dd=[...fo.poles,{id:"crank-pole-in-1",x:-45.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-1",x:-50.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-in-2",x:-36.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-2",x:-31.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"bay-pole-fl",x:24.05,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-fr",x:27.95,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rl",x:24.05,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rr",x:27.95,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"par-pole-1",x:44.9,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-2",x:52.3,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-3",x:44.9,z:30.3,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-4",x:52.3,z:30.3,radius:.08,height:1.5,zone:"parallelParking"}],po=[{id:"north-parked-van",x:-10,z:-48.1,halfW:1.9,halfL:.85,height:1.65,kind:"parkedCar"},{id:"clubhouse-building",x:0,z:56.2,halfW:16,halfL:4.5,height:7.2,kind:"building"}],Xl=[{id:"signal-northbound",kind:"trafficLight",axis:"NS",x:-1.75,z:8.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"signal-southbound",kind:"trafficLight",axis:"NS",x:1.75,z:-8.5,dirX:0,dirZ:1,halfWidth:1.75},{id:"signal-eastbound",kind:"trafficLight",axis:"EW",x:-8.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75},{id:"signal-westbound",kind:"trafficLight",axis:"EW",x:8.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"railroad-eastbound",kind:"railroad",x:31.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"railroad-westbound",kind:"railroad",x:44.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"stop-west-t",kind:"stopSign",x:-67.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"stop-north-t",kind:"stopSign",x:-1.75,z:-38.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"stop-scurve-exit",kind:"stopSign",x:-27.12,z:-41.5,dirX:0,dirZ:-1,halfWidth:1.8},{id:"stop-crank-exit",kind:"stopSign",x:-34,z:41.5,dirX:0,dirZ:1,halfWidth:2}],Ms={startBay:{id:"startBay",x:12,z:48.1,heading:Math.PI/2},sCurve:{id:"sCurve",x:-46,z:.5,heading:0},crank:{id:"crank",x:-48,z:-.5,heading:Math.PI},hillStart:{id:"hillStart",x:10,z:-24,heading:-Math.PI/2},railroad:{id:"railroad",x:20,z:-1.75,heading:-Math.PI/2},stopSign:{id:"stopSign",x:-56,z:1.75,heading:Math.PI/2},trafficLight:{id:"trafficLight",x:-1.75,z:22,heading:0},bayParking:{id:"bayParking",x:20,z:22.25,heading:-Math.PI/2},parallelParking:{id:"parallelParking",x:40,z:25.75,heading:-Math.PI/2},speedStraight:{id:"speedStraight",x:-56,z:-47.75,heading:-Math.PI/2}},Tv=["startBay","sCurve","crank","hillStart","railroad","stopSign","trafficLight","bayParking","parallelParking","speedStraight"],_h=.09,Av=.08,Rv=.45;function Cv(i,e){const t=e.trackWidth/2,n=-e.wheelbase/2,s=e.wheelbase/2;return{FL:Zs(i.x,i.z,i.heading,-t,n),FR:Zs(i.x,i.z,i.heading,t,n),RL:Zs(i.x,i.z,i.heading,-t,s),RR:Zs(i.x,i.z,i.heading,t,s)}}function Pv(i,e,t,n,s,r){const o=s-t,a=r-n,c=o*o+a*a;let l=0;c>1e-9&&(l=((i-t)*o+(e-n)*a)/c,l<0?l=0:l>1&&(l=1));const h=t+o*l,d=n+a*l;return{cx:h,cz:d,dist:Math.hypot(i-h,e-d)}}function hl(i,e,t=Id,n=Dd,s=po){const r=Cv(i,e),o=e.kind==="motorcycle"?.07:.11,a=["FL","FR","RL","RR"],c={};let l=!1,h=!1,d=0,u=0;for(const b of a){const T=r[b];let C=1/0,w=T.x,E=T.z;for(const W of t){const me=W.points;for(let Me=0;Me<me.length-1;Me++){const we=Pv(T.x,T.z,me[Me].x,me[Me].z,me[Me+1].x,me[Me+1].z);we.dist<C&&(C=we.dist,w=we.cx,E=we.cz)}}const I=Math.max(0,C-_h-o),U=_h+o*.8,H=C<U,Z=!H&&I<Av,X=Math.max(0,Math.min(1,1-I/Rv));let Y=0,j=0;if(H&&C>1e-5){const W=U-C,me=(T.x-w)/C,Me=(T.z-E)/C;Y=me*W,j=Me*W,d+=Y*.5,u+=j*.5}Z&&(l=!0),H&&(h=!0),c[b]={corner:b,x:T.x,z:T.z,minCurbDist:I,proximity:X,curbTouch:Z,curbMount:H,pushX:Y,pushZ:j}}const f=Math.cos(-i.heading),x=Math.sin(-i.heading),_=e.width/2,p=e.length/2,m=(b,T)=>{const C=b-i.x,w=T-i.z;return{x:C*f+w*x,z:-C*x+w*f}};let S=null;for(const b of n){const T=m(b.x,b.z),C=Math.max(-_,Math.min(_,T.x)),w=Math.max(-p,Math.min(p,T.z));if(Math.hypot(T.x-C,T.z-w)<b.radius){S=b;break}}let M=null;const v=[[0,0],[-_,-p],[_,-p],[-_,p],[_,p],[0,-p],[0,p]];for(const b of s){for(const[T,C]of v){const w=Zs(i.x,i.z,i.heading,T,C);if(Math.abs(w.x-b.x)<b.halfW&&Math.abs(w.z-b.z)<b.halfL){M=b;const E=i.x-b.x,I=i.z-b.z,U=b.halfW+_-Math.abs(E),H=b.halfL+p-Math.abs(I);U<H?d+=Math.sign(E||1)*Math.min(.4,U*.5):u+=Math.sign(I||1)*Math.min(.4,H*.5);break}}if(M)break}const y=1.6;return i.x<-pi+y&&(d+=-pi+y-i.x),i.x>pi-y&&(d+=pi-y-i.x),i.z<-Oi+y&&(u+=-Oi+y-i.z),i.z>Oi-y&&(u+=Oi-y-i.z),{wheels:c,anyCurbTouch:l,anyCurbMount:h,poleHit:S,obstacleHit:M,pushX:d,pushZ:u}}const Lv={CURB_TOUCH:{ruleRefJa:"接輪（小）：縁石へのタイヤ接触（-10点）",ruleRefEn:"Curb Scrape (接輪): Tire brushed the curb (-10 pts).",howToFixJa:"当たる前に止まってバックする「切り返し（1回目は減点0）」で向きを直しましょう。",howToFixEn:"Stop BEFORE touching the curb and reverse to fix your angle (1st reversal = 0 pt deduction)."},CURB_MOUNT:{ruleRefJa:"脱輪：縁石乗り上げ（-20点 ／ 戻らず進行は検定中止）",ruleRefEn:"Curb Mount (脱輪): Wheel climbed over curb (-20 pts / Instant Fail if you keep driving).",howToFixJa:"すぐ停止して乗り上げる前の位置までバックで戻ってください（内輪差に注意）。",howToFixEn:"Stop immediately and reverse back onto the road. Swing wider before turning."},POLE_COLLISION:{ruleRefJa:"障害物接触：ポール・パイロン接触（一発検定中止）",ruleRefEn:"Obstacle Hit (接触): Struck a pole or parked car (Instant Fail).",howToFixJa:"サイドミラーでポールを確認し、当たる前に停止して「切り返し」を行ってください。",howToFixEn:"Check side mirrors and stop to reverse (Kirikaeshi) before touching any pole."},STOP_SIGN_VIOLATION:{ruleRefJa:"一時不停止（道交法第43条）：『止まれ』停止線手前で0 km/h停止なし（一発中止）",ruleRefEn:"Stop Sign Violation (止まれ): Did not stop at 0.0 km/h before stop line (Instant Fail).",howToFixJa:"白線の直前で0.0 km/hで2秒間止まり、左・右（Z/X）を見てから発進してください。",howToFixEn:"Stop at 0.0 km/h before the white line for 2 seconds, then look Left (Z) & Right (X)."},RAILROAD_NO_STOP:{ruleRefJa:"踏切不停止（道交法第33条）：踏切手前での一時不停止または警報機無視（一発中止）",ruleRefEn:"Railroad Violation (踏切): Crossed without stopping or during alarm (Instant Fail).",howToFixJa:"踏切手前で完全停止（0 km/h）し、左右確認（Z/X）をして変速せずに通過します。",howToFixEn:"Stop completely (0 km/h) before the line, look Left & Right (Z/X), then cross without shifting."},RED_LIGHT:{ruleRefJa:"信号無視（道交法第7条）：赤信号での交差点進入（一発検定中止）",ruleRefEn:"Red Light Violation (信号無視): Crossed stop line on Red (Instant Fail).",howToFixJa:"黄・赤信号では必ず停止線の手前で完全停止してください。",howToFixEn:"Always stop before the white stop line on Yellow or Red."},NO_SIGNAL:{ruleRefJa:"合図不履行（道交法第53条）：右左折・進路変更時のウインカー漏れ（-5点）",ruleRefEn:"Missing Blinker (合図不履行): Turned or changed lanes without turn signal (-5 pts).",howToFixJa:"右左折の30m手前、発進・進路変更の3秒前にQ（左）/ E（右）を出してください。",howToFixEn:"Press Q (Left) or E (Right) 30m before turning or 3s before changing lanes."},NO_SAFETY_LOOK:{ruleRefJa:"安全確認不履行：発進・一時停止・踏切での左右首振り目視不足（-5点）",ruleRefEn:"Missing Safety Look (安全確認): Did not turn head Left/Right to check blind spots (-5 pts).",howToFixJa:"発進や交差点進入の前にZ（左目視）・X（右目視）キーで首を振って確認してください。",howToFixEn:"Press Z (Look Left) and X (Look Right) before proceeding from stop lines or pulling out."},HILL_ROLLBACK:{ruleRefJa:"坂道逆行：上り坂発進での後退（0.3m以上で-10点、1.0m以上で検定中止）",ruleRefEn:"Hill Rollback (坂道後退): Rolled backward on uphill start (-10 pts / >1m Instant Fail).",howToFixJa:"サイドブレーキ（Space）を引き、アクセル（W）を踏んでからサイドを解除します。",howToFixEn:"Hold handbrake (Space), press throttle (W), then release handbrake smoothly."},SPEED_LIMIT:{ruleRefJa:"最高速度違反（道交法第22条）：40 km/h制限の超過（-10点）",ruleRefEn:"Speeding (速度超過): Exceeded the 40 km/h speed limit (-10 pts).",howToFixJa:"40km/hに達したらすぐにアクセルを戻し、カーブ手前で減速してください。",howToFixEn:"Ease off the throttle once you reach 38–40 km/h and brake before corners."},HANDBRAKE_DRAG:{ruleRefJa:"駐停車ブレーキ戻し忘れ：サイドブレーキを引いたまま走行（-5点）",ruleRefEn:"Handbrake Left On (サイド戻し忘れ): Drove with parking brake engaged (-5 pts).",howToFixJa:"発進前にSpaceキー（または手順⑥）でサイドブレーキを解除してください。",howToFixEn:"Press Space (or Pre-Drive Step 6) to release the handbrake before moving."},PRE_DRIVE_ORDER:{ruleRefJa:"乗車・発進手順不備：座席→ミラー→ベルトの順序違反または省略（-5点）",ruleRefEn:"Pre-Drive Order Error (発進手順): Skipped or did cockpit steps out of order (-5 pts).",howToFixJa:"発進前に画面上部の①ドア→②座席→③ミラー→④ベルト…を順番に押してください。",howToFixEn:"Click steps 1 → 2 (Seat) → 3 (Mirrors) → 4 (Seatbelt) in order before pulling out."},NO_SEATBELT:{ruleRefJa:"シートベルト未着用（道路交通法第71条の3）：ベルト未装着での発進（-10点）",ruleRefEn:"No Seatbelt (ベルト未着用): Pulled out without fastening seatbelt (-10 pts).",howToFixJa:"発進前に手順④（またはキー4）でシートベルトを着用してください。",howToFixEn:"Click Step 4 (or press key 4) to fasten your 3D seatbelt before driving."},PEDESTRIAN_PRIORITY:{ruleRefJa:"歩行者保護違反（道交法第38条）：横断歩道上の歩行者妨害（一発検定中止）",ruleRefEn:"Pedestrian Priority (歩行者妨害): Failed to stop for pedestrian at crosswalk (Instant Fail).",howToFixJa:"横断歩道に歩行者がいる時は必ず停止線手前で完全停止して待ってください。",howToFixEn:"Always stop completely before the crosswalk until pedestrians finish crossing."},TRAFFIC_COLLISION:{ruleRefJa:"他車接触事故（道交法第70条）：他の教習車との衝突（一発検定中止）",ruleRefEn:"Vehicle Collision (他車接触): Collided with another training car (Instant Fail).",howToFixJa:"周囲の教習車との車間距離を保ち、交差点では優先車に道を譲ってください。",howToFixEn:"Keep a safe following distance and yield to priority traffic at intersections."},CYCLIST_CLEARANCE:{ruleRefJa:"歩行者・自転車側方間隔不保持／巻き込み（道路交通法第18条・第34条）：自転車への接近または左折巻き込み（検定中止）",ruleRefEn:"Cyclist Lateral Clearance / Left-Turn Squeeze (自転車巻き込み・側方間隔違反): Drove too close (<1.2m) to a cyclist without slowing down (Instant Fail).",howToFixJa:"自転車を追い抜く時は1.0〜1.5m以上の安全な側方間隔を空け、左折時は左ミラーと左後方目視（Zキー）で自転車を先に通してください。",howToFixEn:"Keep >=1.2m lateral clearance when passing cyclists, and check left mirror + left blind spot (Z) to yield to cyclists before turning left."},NO_PARKING_ZONE:{ruleRefJa:"駐停車禁止・駐車禁止場所違反（道路交通法第44条・第45条）：消火栓5m・バス停10m・交差点5m・車庫出入口3m以内での駐停車（-10点）",ruleRefEn:"Illegal Stopping/Parking Zone (駐停車違反 -10 pts): Stopped or parked inside a prohibited zone (within 5m of Fire Hydrant/Crosswalk, 10m of Bus Stop, or 3m of Garage Exit).",howToFixJa:"路端に停車する時は、赤枠の禁止エリア（消火栓5m・バス停10m・交差点5m）を避け、緑枠の「指定駐停車目標エリア」内に左端30cm以内で停車してください。",howToFixEn:"Avoid red-striped prohibited zones (5m Fire Hydrant, 10m Bus Stop) and pull over parallel within 30cm of the left curb inside the green Legal Pull-Over Bay."}},jr=[{id:"wp-pullout",stationHint:"startBay",x:-10,z:47.75,radius:6.5,instructionJa:"発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう",instructionEn:"Bay 1: Signal right (E), glance right (X), and pull into the left lane"},{id:"wp-west-turn",stationHint:"stopSign",x:-77.75,z:10,radius:7,instructionJa:"外周西側を通って北の直線（40km/h区間）へ向かいましょう",instructionEn:"Continue along the West loop toward the North 40 km/h straight"},{id:"wp-north-straight",stationHint:"speedStraight",x:10,z:-47.75,radius:7.5,instructionJa:"北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速",instructionEn:"North straight: Signal past the parked van and reach ~35–40 km/h"},{id:"wp-hill-approach",stationHint:"hillStart",x:24,z:-24,radius:6,instructionJa:"坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう",instructionEn:"Hill Start: Stop on the up-ramp, then pull away cleanly without rollback"},{id:"wp-bay-access",stationHint:"bayParking",x:26,z:30.8,radius:4.5,instructionJa:"方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫",instructionEn:"Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing"},{id:"wp-railroad",stationHint:"railroad",x:22,z:1.75,radius:6.5,instructionJa:"踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう",instructionEn:"Railroad: Stop completely before line, look Left & Right (Z/X), then cross"},{id:"wp-signal",stationHint:"trafficLight",x:-15,z:1.75,radius:6.5,instructionJa:"信号交差点：信号に従って直進し、NWのS字コース入口へ左折",instructionEn:"Signal Intersection: Obey light, cross West, then enter S-Curve (North)"},{id:"wp-scurve",stationHint:"sCurve",x:-27.12,z:-36,radius:5.5,instructionJa:"S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう",instructionEn:"S-Curve: Creep slowly through the bends without touching curbs or poles"},{id:"wp-crank",stationHint:"crank",x:-34,z:36,radius:5.5,instructionJa:"クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう",instructionEn:"Crank: Swing wide around both 90° turns cleanly onto the South road"},{id:"wp-finish-bay",stationHint:"startBay",x:12,z:48.1,radius:3.5,instructionJa:"ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です",instructionEn:"Finish: Pull alongside Start Bay 1 and come to a complete stop"}];class Iv{constructor(){ue(this,"mode","practice");ue(this,"score",100);ue(this,"terminated",!1);ue(this,"finished",!1);ue(this,"simTimeSec",0);ue(this,"startOdometerM",0);ue(this,"violations",[]);ue(this,"waypointIndex",0);ue(this,"cooldowns",new Map);ue(this,"zoneTrackers",new Map);ue(this,"recentSignalTime",-999);ue(this,"recentSignalDir",null);ue(this,"headingSample",0);ue(this,"headingAccumTurn",0);ue(this,"hillMaxXOnRamp",-1/0);ue(this,"handbrakeDragDist",0);ue(this,"curbMountCount",0);ue(this,"preDriveChecked",!1);ue(this,"spawnedAtStartBay",!1);ue(this,"lastViolation",null);ue(this,"onViolation");ue(this,"onExamFinish")}reset(e,t){this.mode=e,this.score=100,this.terminated=!1,this.finished=!1,this.simTimeSec=0,this.startOdometerM=t.odometerM,this.violations=[],this.waypointIndex=0,this.cooldowns.clear(),this.zoneTrackers.clear(),this.recentSignalTime=-999,this.recentSignalDir=null,this.headingSample=t.heading,this.headingAccumTurn=0,this.hillMaxXOnRamp=-1/0,this.handbrakeDragDist=0,this.curbMountCount=0,this.lastViolation=null;const n=Ms.startBay;this.spawnedAtStartBay=Fi(t.x,t.z,n.x,n.z)<2.2,this.preDriveChecked=!1}getMode(){return this.mode}getScore(){return Math.max(0,this.score)}isTerminated(){return this.terminated}isFinished(){return this.finished}getViolations(){return this.violations}getCurrentWaypoint(){return this.mode!=="exam"?null:jr[this.waypointIndex]??null}getWaypointProgress(){return{current:this.waypointIndex,total:jr.length}}getSummary(e){var r;const t=this.getScore(),n=new Map;for(const o of this.violations)n.set(o.code,(n.get(o.code)??0)+1);let s;return n.has("RAILROAD_NO_STOP")?s="railroad":n.has("STOP_SIGN_VIOLATION")?s="stopSign":n.has("RED_LIGHT")?s="trafficLight":n.has("HILL_ROLLBACK")?s="hillStart":(n.has("CURB_MOUNT")||n.has("POLE_COLLISION"))&&(s=((r=this.getCurrentWaypoint())==null?void 0:r.stationHint)??"crank"),{passed:!this.terminated&&t>=70,terminated:this.terminated,score:t,elapsedSec:this.simTimeSec,distanceM:Math.max(0,e.odometerM-this.startOdometerM),violations:[...this.violations],weakArea:s}}recordViolation(e,t,n,s,r,o,a,c=3){var u;if(this.finished)return;const l=this.cooldowns.get(e)??-999;if(this.simTimeSec-l<c)return;this.cooldowns.set(e,this.simTimeSec);const h=Lv[e],d={id:`${e}-${this.violations.length+1}`,code:e,points:t,instantFail:n,timestampSec:this.simTimeSec,labelJa:s,labelEn:r,detailJa:o,detailEn:a,ruleRefJa:h==null?void 0:h.ruleRefJa,ruleRefEn:h==null?void 0:h.ruleRefEn,howToFixJa:h==null?void 0:h.howToFixJa,howToFixEn:h==null?void 0:h.howToFixEn,quiz:h==null?void 0:h.quiz};this.violations.push(d),this.lastViolation=d,this.score=Math.max(0,this.score-t),(u=this.onViolation)==null||u.call(this,d),n&&this.mode==="exam"&&(this.terminated=!0,this.finished=!0)}update(e,t,n,s,r){var l,h;if(this.finished)return;if(this.simTimeSec+=e,r!=null&&r.pedestrianDanger&&this.recordViolation("PEDESTRIAN_PRIORITY",30,!0,"歩行者保護違反（横断歩道）","Pedestrian Crosswalk Violation",r.pedestrianLabelJa??"横断歩道上の歩行者の通行を妨害しました",r.pedestrianLabelEn??"Failed to stop for a pedestrian crossing the zebra crosswalk",4),r!=null&&r.trafficCollision&&this.recordViolation("TRAFFIC_COLLISION",30,!0,"他車接触事故","Traffic Vehicle Collision","コース上の他車（教習車・駐車トラック）と接触しました","Collided with another vehicle or parked delivery truck on the road",3.5),r!=null&&r.cyclistDanger&&this.recordViolation("CYCLIST_CLEARANCE",30,!0,"自転車保護違反（側方間隔・巻き込み）","Cyclist Safety Violation",r.cyclistLabelJa??"自転車との安全な側方間隔（1.2m以上）を保たずに接近しました",r.cyclistLabelEn??"Passed too close to a cyclist without safe lateral clearance or yielding",4),r!=null&&r.noParkingViolation&&this.recordViolation("NO_PARKING_ZONE",10,!1,"駐停車禁止・駐車禁止場所違反","Prohibited Parking/Stopping Zone",r.noParkingLabelJa??"駐停車禁止区域（消火栓5m・バス停10m・交差点5m以内）で停車しました",r.noParkingLabelEn??"Stopped inside a prohibited zone (within 5m of Fire Hydrant or 10m of Bus Stop)",6),this.spawnedAtStartBay&&!this.preDriveChecked&&t.odometerM-this.startOdometerM>1.2){this.preDriveChecked=!0;const d=t.preDrive;d&&(d.seatbeltFastened?!d.doorLocked||!d.seatAdjusted||!d.mirrorsAdjusted||d.orderErrorStep?this.recordViolation("PRE_DRIVE_ORDER",5,!1,"乗車・発進準備手順不備","Pre-Drive Checklist Order Error",d.orderErrorStep?"乗車準備（①ドアロック→②座席調整→③ミラー調整→④シートベルト）の順序が正しくありません":"発進前の座席調整またはミラー確認を省略して発進しました",d.orderErrorStep?"Pre-drive cockpit preparation steps were performed out of the official Japanese exam sequence":"Pulled out without completing Door Lock → Seat Adjust → Mirror Check in order",10):!d.fivePointLookDone&&this.simTimeSec-t.lookedRightTimestamp>8&&this.recordViolation("NO_SAFETY_LOOK",5,!1,"発進時5点安全確認不足","Missing Pull-Out Safety Look","発進前の後方・右死角目視確認（Xキーまたは手順⑧）を行わずに発進しました","Pulled out from curb without performing right blind-spot shoulder check (X / Step 8)",8):this.recordViolation("NO_SEATBELT",10,!1,"シートベルト未着用","Seatbelt Not Fastened","乗車手順④「シートベルト着用」を行わずに発進しました","Pulled out of Start Bay without fastening seatbelt (Pre-Drive Step 4)",10))}if((t.blinker==="left"||t.blinker==="right")&&(this.recentSignalTime=this.simTimeSec,this.recentSignalDir=t.blinker),n.anyCurbMount){this.curbMountCount++;const d=this.mode==="exam"&&this.curbMountCount>=2;this.recordViolation("CURB_MOUNT",20,d,"脱輪","Curb Mount","タイヤが縁石に乗り上げました","Wheel mounted over the course curb",3)}else n.anyCurbTouch&&this.recordViolation("CURB_TOUCH",10,!1,"接輪","Curb Scrape","タイヤが縁石に接触しました","Tire brushed against the curb",2.5);if((n.poleHit||n.obstacleHit&&n.obstacleHit.kind==="parkedCar")&&this.recordViolation("POLE_COLLISION",30,!0,"接触事故","Obstacle Contact","ポールまたは障害物に接触しました","Vehicle struck a course marker pole or obstacle",2.5),Math.abs(t.speedMs)*3.6>46&&this.recordViolation("SPEED_LIMIT",10,!1,"速度超過","Speeding","場内制限速度（40km/h）を大幅に超過しました","Exceeded 40 km/h compound speed limit",4),t.handbrake&&Math.abs(t.speedMs)>1.2?(this.handbrakeDragDist+=Math.abs(t.speedMs)*e,this.handbrakeDragDist>3.5&&(this.handbrakeDragDist=0,this.recordViolation("HANDBRAKE_DRAG",5,!1,"サイド戻し忘れ","Handbrake Left On","サイドブレーキを引いたまま走行しています","Driving with the parking brake still engaged",5))):this.handbrakeDragDist=0,t.x>nr+1&&t.x<ll&&Math.abs(t.z-cn)<3){t.x>this.hillMaxXOnRamp&&(this.hillMaxXOnRamp=t.x);const d=this.hillMaxXOnRamp-t.x;if(d>.35&&t.speedMs<-.15){const u=d>1;this.recordViolation("HILL_ROLLBACK",u?30:10,u,"坂道逆行","Hill Rollback",u?"坂道で1m以上逆行しました":"坂道で車両が後退しました",u?"Rolled back over 1.0m on hill ramp":"Vehicle rolled backward on hill ramp",4)}}else this.hillMaxXOnRamp=-1/0;this.evaluateStopLines(t,s);const a=bo(t.heading-this.headingSample);if(this.headingSample=t.heading,t.speedMs>1.5){if(this.headingAccumTurn+=a,Math.abs(this.headingAccumTurn)>.96){const d=this.headingAccumTurn>0?"left":"right",u=t.x<-24&&t.x>-50&&t.z<-4&&t.z>-42,f=this.simTimeSec-this.recentSignalTime<7&&this.recentSignalDir===d;!u&&!f&&this.recordViolation("NO_SIGNAL",5,!1,"合図不履行","Missing Blinker",`${d==="left"?"左折":"右折"}時のウインカー合図がありません`,`Turned ${d} without activating blinker beforehand`,3.5),this.headingAccumTurn=0}}else this.headingAccumTurn*=Math.max(0,1-e*.5);const c=po[0];if(c&&Math.abs(t.x-c.x)<2&&t.z>-50&&t.z<-42.5&&t.speedMs>1.5&&this.simTimeSec-this.recentSignalTime>8&&this.recordViolation("NO_SIGNAL",5,!1,"進路変更合図不履行","Missing Lane Signal","障害物回避時の右・左ウインカー合図がありません","Passed parked obstacle without turn signal",6),this.mode==="exam"&&!this.finished){const d=jr[this.waypointIndex];d&&Fi(t.x,t.z,d.x,d.z)<=d.radius&&(this.waypointIndex===jr.length-1?Math.abs(t.speedMs)<.15&&(this.finished=!0,(l=this.onExamFinish)==null||l.call(this,this.getSummary(t))):this.waypointIndex++)}this.terminated&&this.finished&&((h=this.onExamFinish)==null||h.call(this,this.getSummary(t)))}evaluateStopLines(e,t){const n=t.getRailroadState();for(const s of Xl){let r=this.zoneTrackers.get(s.id);r||(r={approached:!1,stoppedBeforeLine:!1,lookedBothSides:!1,wasClosedOrWarning:!1,crossed:!1,prevSignedDist:999},this.zoneTrackers.set(s.id,r));const o=e.x-s.x,a=e.z-s.z,c=o*s.dirX+a*s.dirZ,l=-s.dirZ,h=s.dirX,d=Math.abs(o*l+a*h),u=-Math.sin(e.heading)*s.dirX-Math.cos(e.heading)*s.dirZ,f=d<=s.halfWidth+.9&&u>.65;if(f&&c>=-9&&c<=-.1){r.approached=!0,Math.abs(e.speedMs)<.15&&(r.stoppedBeforeLine=!0);const x=this.simTimeSec-e.lookedLeftTimestamp<6,_=this.simTimeSec-e.lookedRightTimestamp<6;x&&_&&(r.lookedBothSides=!0),s.kind==="railroad"&&n.isWarningActive&&(r.wasClosedOrWarning=!0)}r.approached&&f&&r.prevSignedDist<0&&c>=0&&c<3&&(this.handleLineCrossed(s,r,t,n.isWarningActive),r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),(Math.abs(c)>14||d>8)&&(r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),r.prevSignedDist=c}}handleLineCrossed(e,t,n,s){e.kind==="stopSign"?t.stoppedBeforeLine?t.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"安全確認不履行","Missing L/R Check","発進前の左右安全確認（Z/Xキー）が不足しています","Proceeded from stop line without glancing Left & Right (Z/X)",3):this.recordViolation("STOP_SIGN_VIOLATION",25,!0,"指定場所一時不停止","Stop Sign Violation","「止まれ」停止線手前で完全停止していません","Failed to come to a complete 0 km/h stop at 止まれ line",3):e.kind==="railroad"?!t.stoppedBeforeLine||s||t.wasClosedOrWarning?this.recordViolation("RAILROAD_NO_STOP",30,!0,"踏切不停止・遮断機無視","Railroad Violation",s?"警報機作動中に踏切へ進入しました":"踏切手前で完全停止していません",s?"Entered railroad crossing while warning/barrier active":"Crossed railroad tracks without stopping before stop line",3):t.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"踏切安全確認不履行","Railroad Look Check","踏切通過前の左右確認（Z/Xキー）が不足しています","Crossed railroad without checking Left & Right (Z/X)",3):e.kind==="trafficLight"&&e.axis&&n.getLightForAxis(e.axis)==="red"&&this.recordViolation("RED_LIGHT",30,!0,"信号無視","Red Light Violation","赤信号で交差点に進入しました","Crossed intersection stop line on a RED traffic signal",3)}}const kd="jp_kyoshujo_settings_v1",Dv="jp_kyoshujo_db",Cs="custom_maps",Nd="active_custom_map",da={locale:"ja",vehicleKind:"sedan",transmission:"AT",cameraMode:"chase",steeringSensitivity:1,autoCenterSteering:!0,mirrorQuality:"high",masterVolume:.55,muted:!1,minimapHeadingUp:!1,showTouchControls:!1};function kv(){try{const i=window.localStorage.getItem(kd);if(!i)return{...da};const e=JSON.parse(i);return{...da,...e}}catch{return{...da}}}function si(i){try{window.localStorage.setItem(kd,JSON.stringify(i))}catch{}}function Ud(){return new Promise((i,e)=>{const t=window.indexedDB.open(Dv,1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(Cs)||n.createObjectStore(Cs)},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function yr(i){try{const e=await Ud();await new Promise((t,n)=>{const s=e.transaction(Cs,"readwrite");s.objectStore(Cs).put(i,Nd),s.oncomplete=()=>t(),s.onerror=()=>n(s.error)}),e.close()}catch{}}async function Nv(){try{const i=await Ud(),e=await new Promise((t,n)=>{const r=i.transaction(Cs,"readonly").objectStore(Cs).get(Nd);r.onsuccess=()=>t(r.result??null),r.onerror=()=>n(r.error)});return i.close(),e}catch{return null}}const ln=class ln{constructor(){ue(this,"signalTime",0);ue(this,"railTime",0)}update(e){this.signalTime=(this.signalTime+e)%ln.SIGNAL_CYCLE,this.railTime=(this.railTime+e)%ln.RAIL_CYCLE}setTimes(e,t){this.signalTime=(e%ln.SIGNAL_CYCLE+ln.SIGNAL_CYCLE)%ln.SIGNAL_CYCLE,this.railTime=(t%ln.RAIL_CYCLE+ln.RAIL_CYCLE)%ln.RAIL_CYCLE}getLightForAxis(e){const t=this.signalTime;return e==="NS"?t<11?"green":t<14?"yellow":"red":t>=15.5&&t<26.5?"green":t>=26.5&&t<29.5?"yellow":"red"}getRailroadState(){const e=this.railTime;let t="open",n=0;e<22?(t="open",n=0):e<26?(t="warning",n=0):e<29?(t="closing",n=(e-26)/3*(Math.PI/2)):e<37?(t="closed",n=Math.PI/2):(t="opening",n=(1-(e-37)/3)*(Math.PI/2));const s=t!=="open",r=Math.floor(e*2.2)%2===0;return{phase:t,barrierAngle:n,isWarningActive:s,flashLeftOn:s&&r,flashRightOn:s&&!r}}};ue(ln,"SIGNAL_CYCLE",31),ue(ln,"RAIL_CYCLE",40);let dl=ln;const Uv={kind:"sedan",length:4.4,width:1.69,wheelbase:2.6,trackWidth:1.48,frontOverhang:.85,rearOverhang:.95,wheelRadius:.31,maxSteerRad:43*Math.PI/180,steeringWheelMaxRad:1.5*Math.PI*2,maxSpeedMs:16.7,maxReverseMs:5.5,maxAccelMs2:3.4,brakeDecelMs2:9.5},Fv={kind:"motorcycle",length:2.1,width:.72,wheelbase:1.41,trackWidth:.16,frontOverhang:.35,rearOverhang:.34,wheelRadius:.3,maxSteerRad:34*Math.PI/180,steeringWheelMaxRad:34*Math.PI/180,maxSpeedMs:18,maxReverseMs:1.8,maxAccelMs2:4.5,brakeDecelMs2:9.8};function ql(i){return i==="motorcycle"?Fv:Uv}function Fd(i,e,t,n="sedan",s="AT"){const r=ql(n),o=ys(t),a=$n(i,e),c=s==="AT"?"D":"1";return{x:i,y:a.y,z:e,rearAxleX:i-o.x*(r.wheelbase*.5),rearAxleZ:e-o.z*(r.wheelbase*.5),heading:bo(t),pitch:0,roll:0,speedMs:0,steerAngleRad:0,steeringWheelRad:0,wheelRotationRad:0,transmission:s,gear:c,rpm:800,stalled:!1,handbrake:!1,blinker:"off",blinkerTimer:0,blinkerOn:!1,braking:!1,reversing:!1,lookAngleRad:0,lookedLeftTimestamp:-999,lookedRightTimestamp:-999,odometerM:0,preDrive:{doorLocked:!1,seatAdjusted:!1,mirrorsAdjusted:!1,seatbeltFastened:!1,brakeAndStartDone:!1,handbrakeReleased:!1,rightSignalOn:!1,fivePointLookDone:!1,completedSteps:[]},mirrorTouchTimer:0,steerHoldSec:0,throttleHoldSec:0,brakeHoldSec:0}}const Ov={1:6,2:10.5,3:14.5,4:18,5:22,R:5.5},Bv={1:1.35,2:1.05,3:.85,4:.7,5:.55,R:1.15};function Od(i,e){const t=["P","R","N","D"],n=["R","N","1","2","3","4","5"],s=i.transmission==="AT"?t:n,r=s.indexOf(i.gear),o=r===-1?i.transmission==="AT"?3:2:r,a=Math.max(0,Math.min(s.length-1,o+e)),c=s[a];Math.abs(i.speedMs)>1.2&&(c==="P"||c==="R"&&i.speedMs>1.2)||(i.gear=c)}function zv(i,e,t,n,s,r=$n){const o=e.steerLeft-e.steerRight;Math.abs(o)>.01?(i.steerAngleRad*o<-.05&&i.steerHoldSec>.25&&(i.steerHoldSec=.2),i.steerHoldSec=Math.min(1.2,(i.steerHoldSec||0)+n)):i.steerHoldSec=0,e.throttle>.02?i.throttleHoldSec=Math.min(1.5,(i.throttleHoldSec||0)+n):i.throttleHoldSec=Math.max(0,(i.throttleHoldSec||0)-n*3),e.brake>.02?i.brakeHoldSec=Math.min(1.2,(i.brakeHoldSec||0)+n):i.brakeHoldSec=Math.max(0,(i.brakeHoldSec||0)-n*4);const a=.32+.68*Math.pow(Math.min(1,i.steerHoldSec/.65),1.35),c=Math.abs(i.speedMs),l=1/(1+Math.max(0,c-3.5)*.11),h=1.95*s.steeringSensitivity;if(e.analogSteerTarget!==null){const Re=Math.max(-1,Math.min(1,e.analogSteerTarget))*t.maxSteerRad-i.steerAngleRad,Ve=h*1.5*n;i.steerAngleRad+=Math.abs(Re)<=Ve?Re:Math.sign(Re)*Ve}else if(Math.abs(o)>.01){const Te=h*a*l;i.steerAngleRad+=o*Te*n}else if(s.autoCenterSteering){const Re=(.55+1.85*Math.min(1,c/4))*n;Math.abs(i.steerAngleRad)<=Re?i.steerAngleRad=0:i.steerAngleRad-=Math.sign(i.steerAngleRad)*Re}const d=c<=4.5?t.maxSteerRad:t.maxSteerRad/(1+(c-4.5)*.12);i.steerAngleRad=Math.max(-d,Math.min(d,i.steerAngleRad)),i.steeringWheelRad=i.steerAngleRad/t.maxSteerRad*t.steeringWheelMaxRad,i.blinker!=="off"?(i.blinkerTimer+=n,i.blinkerOn=Math.floor(i.blinkerTimer*2.6)%2===0):(i.blinkerTimer=0,i.blinkerOn=!1);let u=0;e.lookLeft&&!e.lookRight?u=68*Math.PI/180:e.lookRight&&!e.lookLeft&&(u=-68*Math.PI/180);const f=8.5*n,x=u-i.lookAngleRad;i.lookAngleRad+=Math.abs(x)<=f?x:Math.sign(x)*f,i.lookAngleRad>32*Math.PI/180&&(i.lookedLeftTimestamp=s.simTimeSec),i.lookAngleRad<-32*Math.PI/180&&(i.lookedRightTimestamp=s.simTimeSec),i.mirrorTouchTimer>0&&(i.mirrorTouchTimer=Math.max(0,i.mirrorTouchTimer-n));const _=ys(i.heading),p=r(i.x,i.z),m=p.slopeX*_.x+p.slopeZ*_.z,S=Math.atan(m),M=-9.81*Math.sin(S),v=.35+.65*Math.min(1,(i.throttleHoldSec||0)/.55),y=e.throttle*v,b=.38+.62*Math.min(1,(i.brakeHoldSec||0)/.45),T=e.brake*b;let C=0;const w=i.transmission==="AT"?1:1-Math.max(0,Math.min(1,e.clutch)),E=!i.stalled;if(i.transmission==="AT")i.gear==="D"?(y>.02&&i.speedMs<t.maxSpeedMs?C=y*t.maxAccelMs2:T<.05&&!i.handbrake&&i.speedMs<1.65&&(C=1.25*(1-Math.max(0,i.speedMs)/1.65)),i.rpm=820+Math.abs(i.speedMs)*210+y*1400):i.gear==="R"?(y>.02&&i.speedMs>-t.maxReverseMs?C=-y*(t.maxAccelMs2*.65):T<.05&&!i.handbrake&&i.speedMs>-1.35&&(C=-.82*(1-Math.max(0,-i.speedMs)/1.35)),i.rpm=820+Math.abs(i.speedMs)*260+y*1200):i.rpm=780+y*2600;else if(E&&i.gear!=="N"&&i.gear!=="P"){const Te=Ov[i.gear]??10,Re=Bv[i.gear]??1,it=i.gear==="R"?-1:1,k=Math.abs(i.speedMs)/Te*3800,ae=800+y*3400;if(i.rpm=k*w+ae*(1-w),w>.75&&Math.abs(i.speedMs)<.55&&e.throttle<.14&&(e.brake>.1||i.handbrake||Math.abs(i.speedMs)<.15))i.stalled=!0,i.rpm=0;else if(w>.15&&i.speedMs*it<Te){const se=Math.max(.18,y);C=it*se*t.maxAccelMs2*Re*w}}else i.rpm=E?780+y*2800:0;const I=i.transmission==="AT"&&i.gear==="P",U=i.handbrake?6.8:0,H=T*t.brakeDecelMs2,Z=H+U+(I?14:0);i.braking=e.brake>.05,i.reversing=i.gear==="R";const X=-i.speedMs*(.14+.015*Math.abs(i.speedMs)),Y=C+M+X;let j=i.speedMs+Y*n;if(Z>.01){const Te=Z;if(Math.abs(i.speedMs)<.08&&Math.abs(C+M)<=Te)j=0;else{const Re=Math.sign(j!==0?j:C+M),Ve=j-Re*Z*n;Math.sign(Ve)!==Math.sign(j)&&Math.abs(C+M)<=Te?j=0:j=Ve}}else Math.abs(j)<.02&&Math.abs(C)<.1&&Math.abs(M)<.1&&(j=0);j=Math.max(-t.maxReverseMs,Math.min(t.maxSpeedMs,j)),i.speedMs=j;const W=i.speedMs*n,me=W/t.wheelbase*Math.tan(i.steerAngleRad),Me=i.heading+me*.5,we=ys(Me);i.rearAxleX+=we.x*W,i.rearAxleZ+=we.z*W,i.heading=bo(i.heading+me);const Be=ys(i.heading);i.x=i.rearAxleX+Be.x*(t.wheelbase*.5),i.z=i.rearAxleZ+Be.z*(t.wheelbase*.5);const $e=r(i.x,i.z);i.y=$e.y,i.odometerM+=Math.abs(W),i.wheelRotationRad+=W/t.wheelRadius;const nt=$e.slopeX*Be.x+$e.slopeZ*Be.z,je=Math.atan(nt)-Math.max(-.04,Math.min(.04,(H-C)*.004));i.pitch+=(je-i.pitch)*Math.min(1,12*n);const ie=me/n,ce=i.speedMs*ie,ge=t.kind==="motorcycle"?Math.max(-.48,Math.min(.48,-ce*.065)):Math.max(-.06,Math.min(.06,ce*.008));i.roll+=(ge-i.roll)*Math.min(1,10*n)}function Bd(i,e){const t=ys(i.heading);i.rearAxleX=i.x-t.x*(e.wheelbase*.5),i.rearAxleZ=i.z-t.z*(e.wheelbase*.5)}const zd={startBay:{titleJa:"発着点 1番",titleEn:"Start Bay 1",descJa:"安全確認・右合図を出して発進",descEn:"Check mirrors & right signal before pull-out"},sCurve:{titleJa:"S字コース",titleEn:"S-Curve",descJa:"幅3.6m・内輪差を意識して低速走行",descEn:"3.6m wide S-bend — watch inner rear wheel cut"},crank:{titleJa:"クランクコース",titleEn:"Crank (90°)",descJa:"直角連続カーブ・ポール接触で検定中止",descEn:"Tight 90° chicane — pole contact fails exam"},hillStart:{titleJa:"坂道発進",titleEn:"Hill Start",descJa:"坂の途中で一時停止し、逆行せず発進",descEn:"Stop on slope and pull away without rollback"},railroad:{titleJa:"踏切通過",titleEn:"Railroad Crossing",descJa:"停止線手前で完全停止し左右確認（Z/X）",descEn:"Full stop before line, look Left & Right (Z/X)"},stopSign:{titleJa:"一時停止（止まれ）",titleEn:"Stop Sign",descJa:"停止線手前で完全停止・左右の安全確認",descEn:"Come to complete 0 km/h stop and glance L/R"},trafficLight:{titleJa:"信号交差点",titleEn:"Signal Intersection",descJa:"信号灯火に従い左折・右折の通行帯を守る",descEn:"Obey signal phases and proper turn positioning"},bayParking:{titleJa:"方向変換",titleEn:"Bay Parking",descJa:"バックで車庫に進入し、前向きに出庫",descEn:"Reverse into the T-bay and exit forward"},parallelParking:{titleJa:"縦列駐車",titleEn:"Parallel Parking",descJa:"縁石に沿わせて駐車枠内に収める",descEn:"Reverse neatly into the curbside pocket"},speedStraight:{titleJa:"直線40km/h・障害物",titleEn:"40 km/h & Obstacle",descJa:"直線で加速し、駐車車両を合図付きで回避",descEn:"Accelerate smoothly and signal past obstacle"}},Hv={ja:{appTitle:"桜ヶ丘自動車教習所 3Dシミュレーター",appSubtitle:"日本の教習所コース・実技検定再現",modePractice:"自由練習",modeExam:"修了検定 (模擬試験)",scoreLabel:"持ち点",stationMenu:"コース・設定",resetBtn:"リセット (O)",cameraBtn:"視点 (V)",camChase:"後方視点",camCockpit:"運転席 (右ハンドル)",camHood:"ボンネット",camOrbit:"自由カメラ",welcomeTitle:"桜ヶ丘自動車教習所 3Dドライビングシミュレーター",welcomeLead:"実際の日本の教習所（180m×120m）を1:1スケールで再現。S字・クランク・坂道発進・踏切・信号・方向変換・縦列駐車・修了検定をブラウザ上で練習できます。",startTraining:"教習を始める",startExam:"修了検定を開始",controlsHeading:"基本操作（右ハンドル・左側通行）",ctrlDrive:"W / S または ↑ / ↓ : アクセル / ブレーキ",ctrlSteer:"A / D または ← / → : ハンドル操作",ctrlSignal:"Q / E : 左・右ウインカー　H : ハザード",ctrlGear:"Shift / Ctrl : ギア変更 (P/R/N/D・1-5)",ctrlLook:"Z / X : 左・右の安全確認（目視）",ctrlBrake:"Space : サイドブレーキ　C : クラッチ(MT)　I : エンジン始動",ctrlView:"V : カメラ切替　O : 現在地点へリセット　M : メニュー",tabStations:"課題ワープ",tabSettings:"車両・設定",tabCustomMap:"カスタム地図",vehicleLabel:"車種",vehicleSedan:"教習車セダン (右ハンドル)",vehicleMoto:"普通二輪 (400cc)",transLabel:"変速機",transAT:"AT (オートマ)",transMT:"MT (マニュアル)",steerSensLabel:"ハンドル感度",autoCenterLabel:"ハンドル自動復元",mirrorQualityLabel:"ミラー描画品質",mirrorHigh:"高画質",mirrorLow:"軽量",mirrorOff:"オフ",volumeLabel:"音量",touchControlsLabel:"タッチ操作パネル表示",customMapHint:"航空写真や教習所コース図(PNG/JPG/WebP)をアップロードし、実際の横幅(m)に合わせて走行できます。",uploadMapLabel:"コース画像をアップロード",mapWidthLabel:"コース横幅 (m)",setSpawnHere:"現在位置を開始地点に設定",useKyoshujo:"3D教習所コースへ戻る",useCustomMap:"カスタム地図で走行",clearCustomMap:"カスタム地図を削除",stalledWarning:"エンスト！ [I] キーまたはボタンで再始動",restartEngine:"エンジン始動 (I)",handbrakeOn:"サイドブレーキ作動中",curbWarning:"縁石接近",examPassStamp:"合格",examFailStamp:"不合格",examResultTitle:"運転技能検定 採点表",examTerminatedSub:"危険行為・重大違反のため検定中止となりました",examPassedSub:"合格基準（70点以上）を達成しました",examFailedSub:"合格点（70点）に届きませんでした",examFinalScore:"最終得点",examElapsed:"所要時間",examDistance:"走行距離",examNoViolations:"減点なし！模範的な運転です。",retryExam:"もう一度検定を受ける",practiceWeak:"苦手課題を練習する",closeModal:"練習を続ける",practiceGuideFree:"左上のコースメニューから各課題へワープ、または「修了検定」を開始できます。",minimapNorth:"北上",minimapFollow:"進行方向"},en:{appTitle:"Sakuragaoka Driving School 3D Simulator",appSubtitle:"Authentic Japanese Kyoshujo Training & Exam",modePractice:"Free Practice",modeExam:"Mock Exam",scoreLabel:"Score",stationMenu:"Menu / Warp",resetBtn:"Reset (O)",cameraBtn:"View (V)",camChase:"Chase",camCockpit:"Cockpit (RHD)",camHood:"Hood",camOrbit:"Orbit",welcomeTitle:"Sakuragaoka Japanese Driving School Simulator",welcomeLead:"Full 1:1 scale 180m × 120m Japanese Kyoshujo compound. Practice S-Curve, 90° Crank, Hill Start, Railroad Crossing, Stop Signs, Signals, Bay & Parallel Parking, or take the 100-point Mock Exam.",startTraining:"Start Practice",startExam:"Start Mock Exam",controlsHeading:"Controls (Right-Hand Drive · Keep Left)",ctrlDrive:"W / S or ↑ / ↓ : Throttle / Foot Brake",ctrlSteer:"A / D or ← / → : Steering Wheel",ctrlSignal:"Q / E : Left / Right Blinker   H : Hazard",ctrlGear:"Shift / Ctrl : Shift Gear (P/R/N/D or 1-5)",ctrlLook:"Z / X : Safety Glance Left / Right",ctrlBrake:"Space : Handbrake   C : Clutch (MT)   I : Ignition",ctrlView:"V : Camera   O : Reset Vehicle   M : Menu",tabStations:"Stations",tabSettings:"Vehicle & Setup",tabCustomMap:"Custom Map",vehicleLabel:"Vehicle",vehicleSedan:"Sedan (RHD Kyoshusha)",vehicleMoto:"Motorcycle (400cc)",transLabel:"Transmission",transAT:"AT (Automatic)",transMT:"MT (Manual)",steerSensLabel:"Steering Sensitivity",autoCenterLabel:"Auto-Center Steering",mirrorQualityLabel:"Mirror Reflections",mirrorHigh:"High",mirrorLow:"Low",mirrorOff:"Off",volumeLabel:"Master Volume",touchControlsLabel:"Show Touch Controls",customMapHint:"Upload any top-down driving center map image (PNG/JPG/WebP), calibrate real width in meters, and drive directly on it.",uploadMapLabel:"Upload Map Image",mapWidthLabel:"Map Width (meters)",setSpawnHere:"Set Current Position as Spawn",useKyoshujo:"Switch to 3D Kyoshujo",useCustomMap:"Drive Custom Map",clearCustomMap:"Clear Saved Map",stalledWarning:"Engine Stalled! Press [I] or tap to restart",restartEngine:"Start Engine (I)",handbrakeOn:"Handbrake Engaged",curbWarning:"Curb Close",examPassStamp:"PASS",examFailStamp:"FAIL",examResultTitle:"Practical Driving Exam Score Sheet",examTerminatedSub:"Exam terminated immediately due to a major safety violation",examPassedSub:"Passed with 70 points or higher",examFailedSub:"Score fell below the 70-point passing threshold",examFinalScore:"Final Score",examElapsed:"Time",examDistance:"Distance",examNoViolations:"Zero deductions — exemplary Japanese driving technique!",retryExam:"Retry Exam",practiceWeak:"Practice Weak Area",closeModal:"Continue Free Practice",practiceGuideFree:"Open Menu (M) to warp to any course obstacle or start a full 100-point Mock Exam.",minimapNorth:"North-Up",minimapFollow:"Heading-Up"}};function Yn(i,e){return Hv[i][e]}class Vv{constructor(e){ue(this,"keys",new Set);ue(this,"touchThrottle",0);ue(this,"touchBrake",0);ue(this,"touchLookLeft",!1);ue(this,"touchLookRight",!1);ue(this,"analogSteer",null);ue(this,"prevGamepadBtns",[]);ue(this,"actions");ue(this,"handleBlur",()=>{this.keys.clear(),this.touchThrottle=0,this.touchBrake=0,this.touchLookLeft=!1,this.touchLookRight=!1,this.analogSteer=null});ue(this,"handleKeyDown",e=>{const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;this.actions.onAnyInteraction();const n=e.code;(n==="Space"||n==="ArrowUp"||n==="ArrowDown"||n==="ArrowLeft"||n==="ArrowRight")&&e.preventDefault(),e.repeat||(n==="KeyQ"?this.actions.onToggleBlinker("left"):n==="KeyE"?this.actions.onToggleBlinker("right"):n==="KeyH"?this.actions.onToggleBlinker("hazard"):n==="Space"?this.actions.onToggleHandbrake():n==="ShiftLeft"||n==="ShiftRight"||n==="BracketRight"?this.actions.onShiftGear(1):n==="ControlLeft"||n==="ControlRight"||n==="BracketLeft"?this.actions.onShiftGear(-1):n==="KeyV"?this.actions.onCycleCamera():n==="KeyO"?this.actions.onResetVehicle():n==="KeyM"?this.actions.onToggleMenu():n==="KeyI"&&this.actions.onIgnition()),this.keys.add(n)});ue(this,"handleKeyUp",e=>{this.keys.delete(e.code)});this.actions=e,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}bindTouchControls(e){const t=e.querySelector('[data-touch="steer"]'),n=e.querySelector('[data-touch="steer-knob"]'),s=e.querySelector('[data-touch="throttle"]'),r=e.querySelector('[data-touch="brake"]'),o=e.querySelector('[data-touch="look-left"]'),a=e.querySelector('[data-touch="look-right"]');if(t){let l=null,h=0;const d=f=>{const x=f-h,_=54,p=Math.max(-1,Math.min(1,-x/_));this.analogSteer=p,n&&(n.style.transform=`translateX(${Math.max(-_,Math.min(_,x))}px)`)};t.addEventListener("pointerdown",f=>{f.preventDefault(),this.actions.onAnyInteraction(),l=f.pointerId,h=f.clientX,t.setPointerCapture(f.pointerId),d(f.clientX)}),t.addEventListener("pointermove",f=>{f.pointerId===l&&d(f.clientX)});const u=f=>{f.pointerId===l&&(l=null,this.analogSteer=null,n&&(n.style.transform="translateX(0px)"))};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}const c=(l,h)=>{if(!l)return;l.addEventListener("pointerdown",u=>{u.preventDefault(),this.actions.onAnyInteraction(),l.setPointerCapture(u.pointerId),l.classList.add("active"),h(!0)});const d=()=>{l.classList.remove("active"),h(!1)};l.addEventListener("pointerup",d),l.addEventListener("pointercancel",d)};c(s,l=>{this.touchThrottle=l?1:0}),c(r,l=>{this.touchBrake=l?1:0}),c(o,l=>{this.touchLookLeft=l}),c(a,l=>{this.touchLookRight=l}),e.querySelectorAll("[data-touch-action]").forEach(l=>{l.addEventListener("click",()=>{this.actions.onAnyInteraction();const h=l.dataset.touchAction;h==="blinker-left"?this.actions.onToggleBlinker("left"):h==="blinker-right"?this.actions.onToggleBlinker("right"):h==="handbrake"?this.actions.onToggleHandbrake():h==="gear-up"?this.actions.onShiftGear(1):h==="gear-down"&&this.actions.onShiftGear(-1)})})}getInputState(){var u,f;const e=this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0,t=this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0,n=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0,s=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0,r=this.keys.has("KeyC")?1:0;let o=null,a=0,c=0,l=0,h=!1,d=!1;if(typeof navigator<"u"&&"getGamepads"in navigator){const _=navigator.getGamepads().find(p=>p&&p.connected);if(_){const p=_.axes[0]??0;Math.abs(p)>.04&&(o=-p);const m=((u=_.buttons[7])==null?void 0:u.value)??0,S=((f=_.buttons[6])==null?void 0:f.value)??0;if(a=m,c=S,_.axes.length>=3&&m===0&&S===0){const y=_.axes[2]!==void 0?(1-_.axes[2])*.5:0,b=_.axes[5]!==void 0?(1-_.axes[5])*.5:0;y>.05&&(a=y),b>.05&&(c=b)}const M=y=>{var b;return!!((b=_.buttons[y])!=null&&b.pressed)},v=y=>M(y)&&!this.prevGamepadBtns[y];v(4)&&this.actions.onToggleBlinker("left"),v(5)&&this.actions.onToggleBlinker("right"),v(0)&&this.actions.onToggleHandbrake(),v(3)&&this.actions.onCycleCamera(),v(1)&&this.actions.onShiftGear(1),v(2)&&this.actions.onShiftGear(-1),h=M(14),d=M(15),this.prevGamepadBtns=_.buttons.map(y=>y.pressed)}}return{throttle:Math.max(e,this.touchThrottle,a),brake:Math.max(t,this.touchBrake,c),steerLeft:n,steerRight:s,analogSteerTarget:this.analogSteer??o,clutch:Math.max(r,l),lookLeft:this.keys.has("KeyZ")||this.touchLookLeft||h,lookRight:this.keys.has("KeyX")||this.touchLookRight||d}}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}const yh={type:"change"},Jl={type:"start"},Hd={type:"end"},Kr=new sd,Mh=new Zn,Gv=Math.cos(70*St.DEG2RAD),kt=new D,$t=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ua=1e-6;class Wv extends Fp{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Vi,this._lastTargetPosition=new D,this._quat=new Vi().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new qc,this._sphericalDelta=new qc,this._scale=1,this._panOffset=new D,this._rotateStart=new fe,this._rotateEnd=new fe,this._rotateDelta=new fe,this._panStart=new fe,this._panEnd=new fe,this._panDelta=new fe,this._dollyStart=new fe,this._dollyEnd=new fe,this._dollyDelta=new fe,this._dollyDirection=new D,this._mouse=new fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qv.bind(this),this._onPointerDown=Xv.bind(this),this._onPointerUp=Jv.bind(this),this._onContextMenu=e_.bind(this),this._onMouseWheel=Zv.bind(this),this._onKeyDown=jv.bind(this),this._onTouchStart=Kv.bind(this),this._onTouchMove=Qv.bind(this),this._onMouseDown=$v.bind(this),this._onMouseMove=Yv.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=n_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yh),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;kt.copy(t).sub(this.target),kt.applyQuaternion(this._quat),this._spherical.setFromVector3(kt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=$t:n>Math.PI&&(n-=$t),s<-Math.PI?s+=$t:s>Math.PI&&(s-=$t),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(kt.setFromSpherical(this._spherical),kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=kt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Kr.origin.copy(this.object.position),Kr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Kr.direction))<Gv?this.object.lookAt(this.target):(Mh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Kr.intersectPlane(Mh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ua||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ua||this._lastTargetPosition.distanceToSquared(this.target)>ua?(this.dispatchEvent(yh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){kt.setFromMatrixColumn(t,0),kt.multiplyScalar(-e),this._panOffset.add(kt)}_panUp(e,t){this.screenSpacePanning===!0?kt.setFromMatrixColumn(t,1):(kt.setFromMatrixColumn(t,0),kt.crossVectors(this.object.up,kt)),kt.multiplyScalar(e),this._panOffset.add(kt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;kt.copy(s).sub(this.target);let r=kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Xv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Jv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hd),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function $v(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Jl)}function Yv(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zv(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Jl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hd))}function jv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Kv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Jl)}function Qv(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function e_(i){this.enabled!==!1&&i.preventDefault()}function t_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class Mr extends ee{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ht;const n=this,s=t.color!==void 0?new tt(t.color):new tt(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||Mr.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new Zn,d=new D,u=new D,f=new D,x=new _t,_=new D(0,0,-1),p=new xt,m=new D,S=new D,M=new xt,v=new _t,y=this.camera,b=new vi(r,o,{samples:l,type:Ds}),T=new ni({name:c.name!==void 0?c.name:"unspecified",uniforms:hd.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=b.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=v,this.material=T,this.onBeforeRender=function(C,w,E){if(u.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),x.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(x),m.subVectors(u,f),m.dot(d)>0===!0&&this.forceUpdate===!1)return;m.reflect(d).negate(),m.add(u),x.extractRotation(E.matrixWorld),_.set(0,0,-1),_.applyMatrix4(x),_.add(f),S.subVectors(u,_),S.reflect(d).negate(),S.add(u),y.position.copy(m),y.up.set(0,1,0),y.up.applyMatrix4(x),y.up.reflect(d),y.lookAt(S),y.far=E.far,y.updateMatrixWorld(),y.projectionMatrix.copy(E.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(y.projectionMatrix),v.multiply(y.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(y.matrixWorldInverse),p.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const U=y.projectionMatrix;M.x=(Math.sign(p.x)+U.elements[8])/U.elements[0],M.y=(Math.sign(p.y)+U.elements[9])/U.elements[5],M.z=-1,M.w=(1+U.elements[10])/U.elements[14],p.multiplyScalar(2/p.dot(M)),U.elements[2]=p.x,U.elements[6]=p.y,U.elements[10]=p.z+1-a,U.elements[14]=p.w,n.visible=!1;const H=C.getRenderTarget(),Z=C.xr.enabled,X=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(b),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(w,y),C.xr.enabled=Z,C.shadowMap.autoUpdate=X,C.setRenderTarget(H);const Y=E.viewport;Y!==void 0&&C.state.viewport(Y),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}}Mr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function i_(i,e,t=!0){const n=[],s=(N,q=.5,G=.1)=>new ve({color:N,roughness:q,metalness:G}),r=new ol({color:366185,roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.13}),o=new ol({color:3462041,roughness:.3,metalness:.35,clearcoat:1,clearcoatRoughness:.2}),a=s(14014684,.3,.65),c=s(1448221,.65,.3),l=s(1053205,.93,0),h=s(2237482,.96,0),d=s(3882307,.4,.58),u=s(8817554,.32,.7),f=s(14803943,.2,.6);function x(N,q){return N.name=q,N.userData.partName=q,N}function _(N,q){const G=x(new qe,q);return N.add(G),G}function p(N,q,G,te,re=0,de=0,R=0){const g=x(new ee(G,te),q);return g.position.set(re,de,R),g.castShadow=!0,g.receiveShadow=!0,N.add(g),g}const m=(N,q,G,te,re,de,R=0,g=0,P=0)=>p(N,q,new ze(G,te,re),de,R,g,P);function S(N,q,G,te,re){return p(N,q,new _r(new So(G.map(de=>new D(...de))),40,te,8,!1),re)}function M(N,q,G,te,re,de){const R=new D(...G),g=new D(...te),P=g.clone().sub(R),L=p(N,q,new st(re,re,P.length(),16),de);return L.position.copy(R.add(g).multiplyScalar(.5)),L.quaternion.setFromUnitVectors(new D(0,1,0),P.normalize()),L}function v(N,q,G,te,re,de,R=0,g=0,P=0){const L=p(N,q,new Yt(1,36,24),de,R,g,P);return L.scale.set(G,te,re),L}function y(N,q,G,te){const re=[],de=[];for(const[P,L,B,O]of G)for(let he=0;he<40;he++){const ne=he/40*Math.PI*2;re.push(Math.cos(ne)*L,(O+B)/2+Math.sin(ne)*((O-B)/2),P)}for(let P=0;P<G.length-1;P++)for(let L=0;L<40;L++){const B=P*40+L,O=P*40+(L+1)%40;de.push(B,O,O+40,B,O+40,B+40)}for(let P=1;P<39;P++){de.push(0,P+1,P);const L=(G.length-1)*40;de.push(L,L+P,L+P+1)}const g=new vt;return g.setAttribute("position",new Ze(re,3)),g.setIndex(de),g.computeVertexNormals(),p(N,q,g,te)}const b=_(i,"motorcycleRoot"),T=_(i,"bikeCockpitRoot"),C=[[-.28,.065,.77,.86],[-.16,.135,.76,.93],[0,.205,.77,1.02],[.19,.218,.8,1.064],[.34,.184,.83,1.052],[.46,.09,.84,.98],[.49,.025,.87,.93]],w=y(b,"paintedTank",C,r);function E(N,q,G,te){let re=0;for(;re<C.length-2&&C[re+1][0]<N;)re++;const de=C[re],R=C[re+1],g=(N-de[0])/(R[0]-de[0]),P=St.lerp(de[1],R[1],g),L=St.lerp(de[2],R[2],g),B=St.lerp(de[3],R[3],g);return[G*(Math.cos(q)*P+te),(B+L)/2+Math.sin(q)*((B-L)/2),N]}for(const N of[-1,1])for(const[q,G,te,re]of[["whitePinstripe",0,.004,a],["blackSweep",.025,.005,c],["silverPanel",.064,.006,a]]){const de=[],R=[],g=[[-.215,-.65,.06],[-.15,-.82,.34],[0,-.75,.65],[.18,-.5,.77],[.29,-.24,.65],[.38,.05,.22]];for(const[B,O,he]of g)for(let ne=0;ne<=12;ne++)de.push(...E(B,St.lerp(O+G,he-G,ne/12),N,te));for(let B=0;B<g.length-1;B++)for(let O=0;O<12;O++){const he=B*13+O,ne=he+13;R.push(he,ne,he+1,he+1,ne,ne+1)}const P=new vt;P.setAttribute("position",new Ze(de,3)),P.setIndex(R),P.computeVertexNormals();const L=re.clone();L.side=Tt,p(b,`${q}${N}`,P,L)}const I=p(b,"fuelCap",new st(.043,.043,.009,32),a,0,1.068,.18);p(I,"lock",new ze(.018,.004,.008),c,0,.007,0),y(b,"steppedSaddle",[[-.96,.085,.88,.94],[-.85,.145,.855,.966],[-.63,.153,.82,.95],[-.45,.125,.775,.867],[-.27,.108,.775,.837],[-.19,.07,.8,.837]],h),y(b,"paintedTailCowl",[[-1.02,.035,.86,.91],[-.93,.11,.815,.88],[-.73,.151,.76,.849],[-.5,.125,.73,.81],[-.31,.08,.725,.77]],r);for(const N of[-1,1]){S(b,`tailSilverStripe${N}`,[[N*.11,.85,-.94],[N*.153,.82,-.76],[N*.13,.78,-.52],[N*.09,.75,-.35]],.012,a),S(b,`grabRail${N}`,[[N*.14,.87,-.65],[N*.18,.92,-.86],[N*.12,.94,-1]],.014,u);const q=new _s;q.moveTo(-.5,.8),q.quadraticCurveTo(-.34,.82,-.17,.78),q.lineTo(-.25,.6),q.quadraticCurveTo(-.37,.6,-.5,.8);const G=new pr(q,{depth:.015,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008,curveSegments:16}),te=p(b,`sideCover${N}`,G,r,N*.14);te.rotation.y=Math.PI/2,te.scale.x=-1,S(b,`frameCradle${N}`,[[N*.12,.94,.38],[N*.16,.72,.3],[N*.18,.3,.15],[N*.17,.29,-.25],[N*.14,.71,-.48],[N*.12,.87,-.7]],.018,c),M(b,`seatSubframe${N}`,[N*.12,.63,-.35],[N*.12,.88,-.94],.019,c),M(b,`swingarm${N}`,[N*.13,.43,-.2],[N*.135,.315,-.715],.024,u),M(b,`shockShaft${N}`,[N*.168,.36,-.72],[N*.168,.79,-.55],.017,e);const re=[],de=new D(N*.168,.39,-.71),R=new D(N*.168,.74,-.57);for(let g=0;g<=96;g++){const P=g/96,L=P*Math.PI*2*10,B=de.clone().lerp(R,P);re.push([B.x+Math.cos(L)*.033,B.y+Math.sin(L)*.013,B.z+Math.sin(L)*.031])}S(b,`shockSpring${N}`,re,.0065,o),M(b,`footpeg${N}`,[N*.15,.44,-.23],[N*.29,.44,-.23],.017,c),m(b,`heelPlate${N}`,.016,.11,.19,a,N*.19,.45,-.32)}v(b,"crankcase",.225,.17,.24,d,0,.48,0);for(const N of[-1,1]){const q=p(b,`engineCover${N}`,new st(.124,.124,.045,40),d,N*.228,.46,-.05);q.rotation.z=Math.PI/2;const G=p(b,`clutchCover${N}`,new st(.073,.073,.026,32),u,N*.236,.43,.135);G.rotation.z=Math.PI/2}for(let N=0;N<4;N++){const q=(N-1.5)*.095;m(b,`cylinder${N}`,.084,.21,.18,d,q,.65,.115);for(let G=0;G<7;G++)m(b,`coolingFin${N}:${G}`,.091,.008,.19,u,q,.58+G*.024,.12);S(b,`header${N}`,[[q,.715,.22],[q,.64,.33],[q,.4,.34],[q,.235,.2],[q*.65,.225,-.13],[-.16,.26,-.37]],.022,f)}m(b,"camCover",.43,.065,.235,d,0,.802,.12),m(b,"radiator",.32,.2,.055,c,0,.7,.335),S(b,"collector",[[-.16,.26,-.37],[-.24,.3,-.48],[-.26,.39,-.62]],.041,f),M(b,"chromeSilencer",[-.265,.37,-.49],[-.265,.56,-.98],.063,f),M(b,"exhaustOutlet",[-.265,.56,-.98],[-.265,.57,-1.01],.045,c);function U(N,q,G){const te=_(N,q),re=p(te,"tire",new Sn(.262,.053,16,48),l);re.rotation.y=Math.PI/2,re.scale.z=G/.106;const de=p(te,"rim",new Sn(.218,.014,10,36),c);de.rotation.y=Math.PI/2;const R=p(te,"hub",new st(.048,.048,G+.018,24),u);R.rotation.z=Math.PI/2;for(const g of[-1,1]){for(let L=0;L<6;L++){const B=L/6*Math.PI*2;M(te,`spoke${g}:${L}`,[g*.026,Math.sin(B)*.047,Math.cos(B)*.047],[g*.044,Math.sin(B+.13)*.211,Math.cos(B+.13)*.211],.014,c)}const P=p(te,`brakeDisc${g}`,new Nn(.093,.146,36),a,g*(G/2+.014));P.rotation.y=g*Math.PI/2}return{group:te,tire:re,rim:de,hub:R}}const H=_(b,"bikeFrontWheelPivot");H.position.set(0,.315,.72);const Z=U(H,"frontWheel",.12),X=_(b,"bikeRearWheelMount");X.position.set(0,.315,-.715);const Y=U(X,"rearWheel",.16);p(X,"rearSprocket",new Nn(.048,.12,32),u,.096,0,0).rotation.y=Math.PI/2,S(b,"driveChain",[[.105,.4,-.71],[.105,.5,-.24],[.105,.42,-.15],[.105,.23,-.69],[.105,.25,-.82],[.105,.35,-.83],[.105,.4,-.71]],.009,u);for(const N of[-1,1])M(H,`forkChrome${N}`,[N*.095,.08,-.03],[N*.095,.63,-.27],.021,e),M(H,`forkSlider${N}`,[N*.095,0,0],[N*.095,.32,-.137],.031,c),m(H,`brakeCaliper${N}`,.048,.1,.056,c,N*.098,.04,-.115);const j=r.clone();j.side=Tt;const W=[],me=[];for(let N=0;N<=24;N++){const q=-1.13+N/24*2.26;for(let G=0;G<=6;G++){const te=(G/6-.5)*.15;W.push(te,Math.cos(q)*(.359-.01*(te/.075)**2),Math.sin(q)*.359)}}for(let N=0;N<24;N++)for(let q=0;q<6;q++){const G=N*7+q;me.push(G,G+7,G+1,G+1,G+7,G+8)}const Me=new vt;Me.setAttribute("position",new Ze(W,3)),Me.setIndex(me),Me.computeVertexNormals(),p(H,"frontFender",Me,j),m(b,"rearMudguard",.14,.035,.27,c,0,.68,-.94).rotation.x=.5;function we(N,q,G,te){const re=_(N,q);re.position.set(0,G,te),S(re,"chromeHandlebar",[[-.36,0,-.06],[-.24,.014,-.04],[-.16,.005,-.01],[-.1,-.035,.025],[.1,-.035,.025],[.16,.005,-.01],[.24,.014,-.04],[.36,0,-.06]],.012,e);for(const de of[-1,1]){M(re,`grip${de}`,[de*.26,.009,-.05],[de*.37,0,-.065],.022,l),m(re,`switchBlock${de}`,.045,.041,.052,c,de*.235,.013,-.04),S(re,`lever${de}`,[[de*.21,.013,-.006],[de*.3,.019,.017],[de*.37,.014,-.005]],.0065,a),M(re,`mirrorBoot${de}`,[de*.235,.02,-.025],[de*.245,.075,-.02],.012,c),S(re,`mirrorStem${de}`,[[de*.245,.07,-.02],[de*.26,.115,.008],[de*.34,.165,.04],[de*.425,.22,.075]],.0055,f),v(re,`roundMirror${de}`,.059,.059,.012,c,de*.465,.245,.085);const R=new zi(1,32),g=x(t?new Mr(R,{color:11974326,textureWidth:256,textureHeight:256,multisample:0,clipBias:.001}):new ee(R,s(10992584,.08,.8)),`mirrorGlass${de}`);g.position.set(de*.465,.245,.071),g.scale.set(.055,.055,1),g.rotation.set(0,Math.PI,0),re.add(g),n.push(g);const P=p(re,`mirrorBezel${de}`,new Nn(1,1.07,32),f,de*.465,.245,.07);P.scale.copy(g.scale),P.rotation.copy(g.rotation)}return m(re,"upperTripleClamp",.25,.028,.105,c,0,-.1,.055),re}const Be=we(b,"bikeHandlebar",1.035,.4),$e=p(b,"roundHeadlightBucket",new st(.095,.092,.105,32),e,0,.947,.585);$e.rotation.x=Math.PI/2;const nt=new ve({color:16053740,emissive:16777185,emissiveIntensity:.5,roughness:.15});p(b,"headlightLens",new zi(.086,32),nt,0,.947,.64),p(b,"headlightRim",new Sn(.09,.006,8,32),e,0,.947,.645);let je=0,ie=.22;const ce=[];function ge(N,q,G,te,re,de,R){const g=_(N,q);g.position.set(G,te,re),g.rotation.x=-.42;const P=p(g,"meterBucket",new st(.068,.068,.065,24),c,0,0,.018);P.rotation.x=Math.PI/2,p(g,"chromeMeterRim",new Sn(.065,.005,8,28),e,0,0,-.019);const L=document.createElement("canvas");L.width=256,L.height=256;const B=L.getContext("2d"),O=new dn(L);O.colorSpace=gt;const he=p(g,"instrumentFace",new zi(.061,28),new Pt({map:O,toneMapped:!1}),0,0,-.02);return he.rotation.y=Math.PI,ce.push({ctx:B,texture:O,max:de,isRpm:R}),g}function Te(N,q){m(N,`${q}InstrumentBridge`,.245,.034,.067,c,0,-.005,.124),m(N,`${q}CenterPod`,.05,.081,.049,c,0,.051,.137),ge(N,`${q}Speedometer`,.079,.064,.143,180,!1),ge(N,`${q}Tachometer`,-.079,.064,.143,13,!0)}Te(Be,"exterior");const Re=w.clone();Re.position.set(0,.16,.08),T.add(Re);const Ve=we(T,"bikeCockpitBar",1.17,.52);Te(Ve,"cockpit");let it="";function k(N,q){je=Math.round(Math.abs(N)*3.6),ie=Math.round(q*40)/40;const G=`${je}/${ie}`;if(G!==it){it=G;for(const te of ce){const re=te.ctx;re.fillStyle="#10171d",re.fillRect(0,0,256,256),re.textAlign="center";for(let g=0;g<=12;g++){const P=Math.PI*(.75+1.5*g/12);re.strokeStyle=g>10?"#ee4a50":"#d7e3e9",re.lineWidth=g%2?2:4,re.beginPath(),re.moveTo(128+Math.cos(P)*91,128+Math.sin(P)*91),re.lineTo(128+Math.cos(P)*109,128+Math.sin(P)*109),re.stroke(),g%2===0&&(re.fillStyle="#e3eaef",re.font="15px sans-serif",re.fillText(String(Math.round(g/12*te.max)),128+Math.cos(P)*76,133+Math.sin(P)*76))}const de=te.isRpm?ie*12:je,R=Math.PI*(.75+1.5*Math.min(de/te.max,1));re.strokeStyle="#ff5147",re.lineWidth=4,re.beginPath(),re.moveTo(128,128),re.lineTo(128+Math.cos(R)*90,128+Math.sin(R)*90),re.stroke(),re.fillStyle="#c5d7df",re.font="14px sans-serif",re.fillText(te.isRpm?"×1000":"km/h",128,176),re.fillStyle="#172c31",re.fillRect(94,189,68,25),re.fillStyle="#b6e2d4",re.font="18px monospace",re.fillText(te.isRpm?String(Math.round(ie*12e3)):String(je),128,208),te.texture.needsUpdate=!0}}}k(0,.22);function ae(N,q,G,te,re,de=.056){const R=new ve({color:re,emissive:re,emissiveIntensity:.02,roughness:.25});return{mesh:m(b,N,de,.034,.036,R,q,G,te),material:R}}const oe={left:[ae("frontLeftSignal",.16,.905,.584,16753962),ae("rearLeftSignal",.16,.78,-.985,16753962)],right:[ae("frontRightSignal",-.16,.905,.584,16753962),ae("rearRightSignal",-.16,.78,-.985,16753962)]},se=ae("tailLamp",0,.849,-1.012,15014699,.16);return{motorcycleRoot:b,bikeCockpitRoot:T,bikeCockpitBar:Ve,bikeHandlebar:Be,bikeFrontWheelPivot:H,bikeFrontWheelAssembly:Z,bikeRearWheelAssembly:Y,bikeRearWheelMount:X,bikeSignalLamps:oe,bikeBrakeLamp:se,updateBikeCockpit:k,mirrorSurfaces:n}}function s_(i,e,t,n,s=!0){const r=new qe;r.name="sedanRoot",i.add(r);const o={sedanRoot:r},a=[];o.mirrorSurfaces=a;const c=(g,P=.65,L=0)=>new ve({color:g,roughness:P,metalness:L}),l=c(2435116,.88),h=c(4277578,.96),d=c(9213599,.38,.55),u=c(1385262,.16,.4),f=new ve({color:15792639,emissive:14282495,emissiveIntensity:.8}),x=new ve({color:10097179,emissive:15277353,emissiveIntensity:.28,roughness:.2}),_=new ve({color:10929102,roughness:.12,metalness:.12,transparent:!0,opacity:.19,depthWrite:!1,side:Tt}),p=(g,P)=>(g.name=P,g.userData.partName=P,g),m=(g,P=r)=>{const L=p(new qe,g);return P.add(L),L},S=g=>o[g]=m(g);function M(g,P,L,B=.025){B=Math.min(B,g/3,P/3,L/3);const O=new _s;O.moveTo(-g/2+B,-P/2+B),O.lineTo(g/2-B,-P/2+B),O.lineTo(g/2-B,P/2-B),O.lineTo(-g/2+B,P/2-B),O.closePath();const he=new pr(O,{depth:L-2*B,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:B,bevelThickness:B});return he.translate(0,0,-L/2+B),he}function v(g,P,L,B,O=0,he=0,ne=0){const Ee=g.children.filter(Q=>Q.name===P||Q.name.startsWith(`${P}:`)).length,pe=p(new ee(L,B),Ee?`${P}:${Ee+1}`:P);return pe.position.set(O,he,ne),pe.castShadow=!B.transparent,pe.receiveShadow=!0,g.add(pe),pe}const y=(g,P,L,B,O,he,ne=0,Ee=0,pe=0,Q=.025)=>v(g,P,M(L,B,O,Q),he,ne,Ee,pe);function b(g,P,L,B){const O=[],he=[];for(const[pe,Q,xe,Oe]of L)for(let Ie=0;Ie<32;Ie++){const Ae=Ie/32*Math.PI*2,Xe=Math.cos(Ae),F=Math.sin(Ae);O.push(Math.sign(Xe)*Math.pow(Math.abs(Xe),.42)*Q,(Oe+xe)/2+Math.sign(F)*Math.pow(Math.abs(F),.42)*((Oe-xe)/2),pe)}for(let pe=0;pe<L.length-1;pe++)for(let Q=0;Q<32;Q++){const xe=pe*32+Q,Oe=pe*32+(Q+1)%32;he.push(xe,Oe,Oe+32,xe,Oe+32,xe+32)}for(let pe=1;pe<31;pe++){he.push(0,pe+1,pe);const Q=(L.length-1)*32;he.push(Q,Q+pe,Q+pe+1)}const Ee=new vt;return Ee.setAttribute("position",new Ze(O,3)),Ee.setIndex(he),Ee.computeVertexNormals(),v(g,P,Ee,B)}function T(g,P,L,B,O=.008){const he=new So(L.map(ne=>new D(...ne)));return v(g,P,new _r(he,Math.max(8,L.length*5),O,5,!1),B)}function C(g,P,L,B){const O=new vt;return O.setAttribute("position",new Ze(L.flat(),3)),O.setIndex([0,1,2,0,2,3]),O.computeVertexNormals(),v(g,P,O,B)}const w=new ve({color:3462041,roughness:.35,metalness:.2,side:Tt});function E(g,P,L,B,O=.06){const he=m("gaimengoEmblem",g);return he.position.set(P,L,B),v(he,"badgeRing",new Sn(O,O*.12,6,32),t),v(he,"badgeDisc",new zi(O*.86,32),w),he}function I(g,P,L,B,O,he){const ne=m(P,g);ne.position.set(...O);const pe=new D(-.36,1.245,-.38).sub(ne.position).normalize().add(new D(...he).normalize()).normalize();ne.quaternion.setFromRotationMatrix(new _t().lookAt(pe,new D,new D(0,1,0))),y(ne,"mirrorFrame",L+.022,B+.022,.024,n,0,0,-.015,.006);const Q=new wt(L,B),xe=p(s?new Mr(Q,{color:11974326,textureWidth:256,textureHeight:256,clipBias:.001,multisample:0}):new ee(Q,c(10597570,.08,.85)),"reflectiveGlass");if(ne.add(xe),a.push(xe),s&&xe.onBeforeRender){const Oe=xe.onBeforeRender;xe.onBeforeRender=function(Ie,Ae,Xe){if(Xe.userData.skipCarMirrors)return;const F=performance.now(),ye=Xe.userData.carMirrorInterval||0;if(ye&&F-(this.userData.reflectedAt||0)<ye)return;this.userData.reflectedAt=F;const be=a.map(De=>De.visible),ke=Ie.getViewport(new xt),_e=Ie.getScissor(new xt),le=Ie.getScissorTest();a.forEach(De=>{De!==xe&&(De.visible=!1)}),Ie.setScissorTest(!1);try{Oe.call(this,Ie,Ae,Xe)}finally{a.forEach((De,Ye)=>{De.visible=be[Ye]}),Ie.setViewport(ke),Ie.setScissor(_e),Ie.setScissorTest(le)}}}return ne}const U=S("body"),H=new _s;H.moveTo(-2.26,.3),H.lineTo(-2.26,.76),H.quadraticCurveTo(-2.15,.94,-1.6,.97),H.lineTo(.95,.94),H.quadraticCurveTo(1.95,.94,2.24,.78),H.lineTo(2.24,.3),H.lineTo(1.72,.3),H.absarc(1.35,.315,.371,0,Math.PI,!1),H.lineTo(-.979,.3),H.absarc(-1.35,.315,.371,0,Math.PI,!1),H.closePath();const Z=new pr(H,{depth:.055,bevelEnabled:!0,bevelSegments:3,bevelSize:.018,bevelThickness:.018,curveSegments:32}),X=Z.attributes.position;for(let g=0;g<X.count;g++){const P=X.getX(g),L=X.getY(g),B=Math.max(0,L-.77)*.24,O=Math.pow(Math.min(Math.abs(P)/2.3,1),5)*.048;X.setZ(g,X.getZ(g)-B-O)}Z.computeVertexNormals();for(const g of[-1,1]){const P=v(U,`sideSkin${g}`,Z,e,g*.825);P.rotation.y=g*Math.PI/2,g===1&&(P.scale.x=-1);for(const L of[-1.35,1.35]){const B=[];for(let O=0;O<=28;O++){const he=O/28*Math.PI;B.push([g*.885,.315+Math.sin(he)*.382,L+Math.cos(he)*.382])}T(U,"fenderLip",B,e,.018)}T(U,"shoulderCrease",[[g*.86,.81,-2.04],[g*.898,.88,-.9],[g*.898,.87,.7],[g*.855,.8,1.98]],d,.003);for(const L of[-.48,.67])T(U,"doorShutline",[[g*.898,.93,L],[g*.899,.63,L-.02],[g*.88,.36,L-.07]],n,.0035),y(U,"doorHandle",.026,.032,.15,e,g*.912,.84,L-.19,.01);y(U,"rocker",.07,.08,1.9,e,g*.85,.3,0)}y(U,"underbody",1.55,.08,3.65,n,0,.24,0);const Y=S("shoulderShell");for(const g of[-1,1])y(Y,"beltLine",.12,.09,2.5,e,g*.81,.94,-.2);const j=S("hood");b(j,"bonnet",[[.94,.785,.943,1.012],[1.15,.817,.929,1],[1.75,.822,.884,.965],[2.1,.785,.859,.932],[2.23,.71,.85,.912]],e);for(const g of[-1,1])T(j,"bonnetCrease",[[g*.57,1.01,.99],[g*.49,.981,1.6],[g*.38,.945,2.15]],e,.009);const W=S("trunk");b(W,"bootLid",[[-2.275,.74,.902,.958],[-2.16,.835,.905,.99],[-1.85,.85,.916,1.004],[-1.51,.79,.925,1.015]],e),y(W,"bootFace",1.64,.24,.07,e,0,.8,-2.255),E(W,0,.86,-2.299,.039);const me=S("frontBumper");b(me,"bumper",[[1.98,.848,.3,.823],[2.15,.875,.295,.846],[2.25,.834,.31,.854],[2.318,.753,.34,.848]],e);const Me=S("rearBumper");b(Me,"bumper",[[-2.323,.746,.345,.636],[-2.28,.836,.32,.655],[-2.16,.873,.31,.665],[-2.02,.846,.32,.66]],e),y(Me,"lowerValance",1.36,.105,.03,n,0,.335,-2.321);for(const g of[-1,1])y(Me,"reflector",.19,.033,.016,x,g*.66,.48,-2.327);const we=S("grille"),Be=new _s;Be.moveTo(-.52,.735),Be.lineTo(.52,.735),Be.lineTo(.715,.385),Be.quadraticCurveTo(0,.315,-.715,.385),Be.closePath(),v(we,"trapezoidIntake",new Vl(Be),n,0,0,2.323);for(let g=0;g<7;g++){const P=.39+g*.046,L=.7-g*.026;y(we,"grilleSlat",L*2,.012,.014,c(3423040,.45,.15),0,P,2.331,.003)}y(we,"upperIntake",1.26,.063,.035,n,0,.825,2.276),T(we,"chromeWing",[[-.71,.87,2.273],[-.36,.847,2.308],[0,.848,2.319],[.36,.847,2.308],[.71,.87,2.273]],t,.01),E(we,0,.862,2.343,.041);const $e=S("cabin"),nt=S("roofPanel");y(nt,"roof",1.39,.075,1.14,e,0,1.435,-.23,.024),y(nt,"headliner",1.32,.021,1.11,h,0,1.388,-.23,.006);for(const[g,P,L]of[["aPillarL",-1,!1],["aPillarR",1,!1],["cPillarL",-1,!0],["cPillarR",1,!0]]){const B=S(g);T(B,"paintedPillar",[[P*.81,.97,L?-1.57:1],[P*.735,1.2,L?-1.19:.65],[P*.66,1.435,L?-.8:.31]],e,L?.065:.031),T(B,"pillarLining",[[P*.779,.978,L?-1.54:.99],[P*.705,1.2,L?-1.18:.64],[P*.637,1.418,L?-.79:.3]],h,L?.033:.019)}const je=S("windshield");C(je,"glass",[[-.78,.99,1],[.78,.99,1],[.65,1.413,.32],[-.65,1.413,.32]],_);const ie=S("rearWindow");C(ie,"glass",[[.76,1.005,-1.53],[-.76,1.005,-1.53],[-.64,1.415,-.79],[.64,1.415,-.79]],_);for(const[g,P]of[["sideWindowL",-1],["sideWindowR",1]]){const L=S(g);C(L,"glass",[[P*.816,.986,.97],[P*.816,.986,-1.5],[P*.665,1.412,-.78],[P*.665,1.412,.3]],_),T($e,"bPillar",[[P*.814,.97,-.37],[P*.667,1.413,-.37]],n,.033),T($e,"windowSurround",[[P*.816,.975,.98],[P*.664,1.422,.3],[P*.666,1.426,-.77],[P*.816,.981,-1.5]],n,.009)}for(const[g,P]of[["roofRailL",-1],["roofRailR",1]]){const L=S(g);T(L,"roofSeam",[[P*.65,1.465,.25],[P*.66,1.475,-.24],[P*.65,1.465,-.74]],n,.003)}const ce=v(nt,"sharkFin",new vs(.042,.09,4),e,0,1.508,-.66);ce.scale.z=1.7;for(const[g,P]of[["headlightL",-1],["headlightR",1]]){const L=S(g);L.position.set(P*.653,.848,2.197),L.rotation.y=P*.16,y(L,"smokedHousing",.43,.108,.13,u,0,0,0,.028);for(const B of[-.1,.025])v(L,"projector",new st(.027,.027,.012,20),f,B,.01,.072).rotation.x=Math.PI/2;T(L,"ledSignature",[[-.192,.027,.073],[-.13,-.03,.073],[.14,-.03,.073],[.193,.021,.073]],f,.008)}for(const[g,P]of[["taillightL",-1],["taillightR",1]]){const L=S(g);L.position.set(P*.622,.835,-2.278),y(L,"redHousing",.43,.104,.061,x,0,0,0,.02),T(L,"lightSignature",[[-.19,.03,-.04],[.19,.03,-.04],[.13,-.032,-.04],[-.17,-.032,-.04]],x,.012)}for(const[g,P]of[["sideMirrorL",-1],["sideMirrorR",1]]){const L=S(g);y(L,"mirrorStalk",.17,.032,.054,n,P*.866,1.027,.72);const B=I(L,"sideMirrorFace",.15,.061,[P*.97,1.064,.582],[P*.15,-.05,-1]);y(B,"mirrorCap",.19,.1,.19,e,0,0,-.12,.027)}const ge=S("dashboard");y(ge,"cabinFloor",1.58,.08,2.58,l,0,.335,-.28),y(ge,"firewall",1.55,.56,.09,l,0,.615,.9);for(const g of[-1,1])y(ge,"lowerDoorLining",.075,.23,2.15,l,g*.766,.46,-.13),y(ge,"carpetMat",.53,.018,.8,n,g*.39,.383,.1,.004);y(ge,"mirrorStem",.025,.09,.035,n,.03,1.354,.405,.007),I(ge,"centerMirror",.245,.083,[.03,1.287,.39],[0,-.02,-1]),y(ge,"softDashTop",1.56,.13,.56,l,0,.915,.69,.035),y(ge,"lowerDash",1.51,.17,.26,h,0,.797,.6,.034),T(ge,"satinDashAccent",[[-.74,.86,.408],[-.43,.863,.399],[0,.862,.397],[.46,.864,.398],[.74,.885,.414]],d,.007);for(const g of[-.665,-.11,.115,.665]){y(ge,"ventFrame",.16,.062,.021,d,g,.875,.386,.005),y(ge,"ventRecess",.143,.047,.013,n,g,.875,.372,.004);for(let P=-1;P<=1;P++)y(ge,"ventSlat",.13,.003,.009,h,g,.875+P*.013,.362,8e-4)}y(ge,"climatePanel",.38,.073,.038,n,.015,.761,.432,.01);for(const g of[-.135,.16]){const P=v(ge,"climateKnob",new st(.026,.026,.018,24),d,g,.761,.407);P.rotation.x=Math.PI/2}y(ge,"centerTunnel",.25,.17,.95,l,.015,.5,-.04),y(ge,"shiftSurround",.19,.017,.28,d,.015,.596,.18,.005),y(ge,"shiftBoot",.11,.07,.14,n,.015,.634,.18),y(ge,"gearSelector",.065,.1,.07,l,.015,.704,.18);for(const g of[-.1,-.28])v(ge,"cupWell",new st(.057,.047,.012,24),n,.015,.59,g),v(ge,"cupRim",new Sn(.057,.004,6,24),d,.015,.597,g).rotation.x=Math.PI/2;y(ge,"armrest",.25,.085,.28,l,.015,.64,-.51);for(const g of[-1,1])y(ge,"doorCard",.047,.42,1.3,l,g*.79,.74,-.03),y(ge,"doorArmrest",.1,.048,.57,h,g*.738,.72,.07),T(ge,"doorTrim",[[g*.757,.875,.5],[g*.757,.857,.1],[g*.757,.8,-.5]],d,.006),y(ge,"doorPull",.014,.029,.12,t,g*.755,.84,.28,.004);const Te=S("steeringWheel");Te.position.set(-.36,.971,.16),Te.rotation.x=-.22,v(Te,"leatherRim",new Sn(.174,.019,12,64),l),y(Te,"airbag",.137,.105,.055,l,0,-.005,0,.016);for(const g of[-1,1]){y(Te,"horizontalSpoke",.11,.046,.028,l,g*.112,-.008,0),y(Te,"spokeTrim",.081,.009,.014,d,g*.113,-.031,-.018,.002);for(let P=0;P<3;P++)y(Te,"controlButton",.014,.011,.006,d,g*(.084+P*.025),.002,-.019,.001)}y(Te,"lowerSpoke",.05,.098,.025,d,0,-.116,0),E(Te,0,.009,-.035,.021);for(const g of[-1,1])y(ge,"columnStalk",.15,.019,.025,n,-.36+g*.14,.971,.24,.006);function Re(g,P,L,B,O,he=[768,320]){const ne=document.createElement("canvas");ne.width=he[0],ne.height=he[1];const Ee=ne.getContext("2d");O(Ee,ne.width,ne.height);const pe=new dn(ne);pe.colorSpace=gt;const Q=v(g,P,new wt(L,B),new Pt({map:pe,toneMapped:!1}));return Q.rotation.y=Math.PI,Q.castShadow=!1,{ctx:Ee,texture:pe,screen:Q}}const Ve=S("instrumentCluster");Ve.position.set(-.36,.973,.399),Ve.rotation.x=-.15,y(Ve,"clusterHousing",.47,.17,.066,n,0,0,.027,.02),y(Ve,"clusterHood",.49,.023,.13,l,0,.083,.014,.007);let it=0,k=.18,ae="N",oe="off";function se(g,P,L){g.fillStyle="#071017",g.fillRect(0,0,P,L);const B=(O,he,ne,Ee)=>{g.strokeStyle="#304652",g.lineWidth=8,g.beginPath(),g.arc(O,163,116,.75*Math.PI,2.25*Math.PI),g.stroke();for(let Q=0;Q<=12;Q++){const xe=Math.PI*(.75+1.5*Q/12);g.strokeStyle=Q>10?"#ff655b":"#d0dee7",g.lineWidth=Q%2?2:4,g.beginPath(),g.moveTo(O+Math.cos(xe)*96,163+Math.sin(xe)*96),g.lineTo(O+Math.cos(xe)*110,163+Math.sin(xe)*110),g.stroke(),Q%2||(g.fillStyle="#c6d5df",g.font="16px sans-serif",g.textAlign="center",g.fillText(String(Math.round(Q/12*ne)),O+Math.cos(xe)*79,169+Math.sin(xe)*79))}const pe=Math.PI*(.75+1.5*Math.min(he/ne,1));g.strokeStyle="#f65b4f",g.lineWidth=4,g.beginPath(),g.moveTo(O,163),g.lineTo(O+Math.cos(pe)*89,163+Math.sin(pe)*89),g.stroke(),g.fillStyle="#c3d4df",g.font="18px sans-serif",g.textAlign="center",g.fillText(Ee,O,240)};B(151,k*8,8,"×1000"),B(617,it,240,"km/h"),g.textAlign="center",g.fillStyle="#f2f7fa",g.font="64px sans-serif",g.fillText(String(it),384,150),g.font="20px sans-serif",g.fillStyle="#9dafbd",g.fillText("km/h",384,182),g.fillStyle="#f2f7fa",g.font="32px sans-serif",g.fillText(ae,384,246),g.fillStyle="#56da9c",g.font="26px sans-serif",(oe==="left"||oe==="hazard")&&g.fillText("◀",304,48),(oe==="right"||oe==="hazard")&&g.fillText("▶",464,48)}const N=Re(Ve,"liveGauges",.43,.139,se);N.screen.position.z=-.009;let q="";o.updateCockpit=(g,P,L,B)=>{it=Math.round(Math.abs(g)*3.6),k=Math.round(P*40)/40,ae=L,oe=B;const O=`${it}/${k}/${ae}/${oe}`;O!==q&&(q=O,se(N.ctx,768,320),N.texture.needsUpdate=!0)};const G=S("centerScreen");G.position.set(.055,1.04,.438),G.rotation.x=-.1,y(G,"tabletBezel",.33,.206,.028,n,0,0,.015,.009);const te=Re(G,"mapDisplay",.305,.177,(g,P,L)=>{g.fillStyle="#172632",g.fillRect(0,0,P,L),g.strokeStyle="#344b58",g.lineWidth=10;for(let B=0;B<7;B++)g.beginPath(),g.moveTo(B*140-90,0),g.lineTo(B*140+20,L),g.stroke();for(let B=0;B<4;B++)g.beginPath(),g.moveTo(0,B*90+15),g.lineTo(P,B*90-50),g.stroke();g.strokeStyle="#52b9ee",g.lineWidth=12,g.beginPath(),g.moveTo(380,310),g.lineTo(360,180),g.lineTo(570,155),g.lineTo(550,40),g.stroke(),g.fillStyle="#e6f5ff",g.beginPath(),g.moveTo(358,181),g.lineTo(339,215),g.lineTo(378,207),g.closePath(),g.fill(),g.fillStyle="#0c151e",g.fillRect(0,0,95,L),g.font="32px sans-serif",g.fillStyle="#a8c9dd",g.fillText("⌂",28,65),g.fillText("♪",29,156),g.fillText("⚙",26,255)});te.screen.position.z=-.001;for(const[g,P]of[["driverSeat",-.37],["passengerSeat",.37]]){const L=S(g);L.position.set(P,.55,-.4),y(L,"cushion",.47,.13,.5,l),y(L,"fabricInsert",.29,.025,.4,h,0,.076,.02,.007),y(L,"seatBack",.46,.5,.13,l,0,.27,-.24).rotation.x=-.14,y(L,"backInsert",.3,.37,.034,h,0,.28,-.158).rotation.x=-.14;for(const B of[-.08,.08])y(L,"headrestPost",.011,.1,.012,t,B,.565,-.27,.002);y(L,"headrest",.25,.15,.1,l,0,.65,-.27)}y($e,"rearBench",1.36,.15,.45,l,0,.56,-1.09),y($e,"rearSeatBack",1.35,.42,.12,l,0,.8,-1.34),o.wheelAssemblies=[];const re=c(1448219,.93),de=c(3225664,.32,.65);for(const[g,P,L,B]of[["wheelFL",-.79,1.35,!0],["wheelFR",.79,1.35,!0],["wheelRL",-.79,-1.35,!1],["wheelRR",.79,-1.35,!1]]){const O=m(g);O.position.set(P,.315,L);const he=m("rollingAssembly",O);v(he,"tire",new st(.315,.315,.205,48),re).rotation.z=Math.PI/2;for(const ne of[-1,1]){const Ee=m(`rimFace${ne}`,he);Ee.position.x=ne*.108,Ee.rotation.y=ne*Math.PI/2,v(Ee,"rimBarrel",new st(.224,.224,.013,48),de).rotation.x=Math.PI/2,v(Ee,"machinedLip",new Sn(.224,.01,8,48),d,0,0,.01),v(Ee,"brakeDisc",new zi(.171,32),d,0,0,.009);for(let pe=0;pe<5;pe++)for(const Q of[-.11,.11]){const xe=pe*Math.PI*2/5+Q,Oe=y(Ee,"splitSpoke",.024,.18,.017,t,Math.sin(xe)*.127,Math.cos(xe)*.127,.025,.004);Oe.rotation.z=-xe}v(Ee,"hub",new st(.052,.052,.03,20),d,0,0,.026).rotation.x=Math.PI/2;for(let pe=0;pe<5;pe++){const Q=pe*Math.PI*2/5;v(Ee,"lug",new Yt(.007,6,4),n,Math.cos(Q)*.038,Math.sin(Q)*.038,.045)}}o.wheelAssemblies.push({pivot:O,wheel:he,steerable:B,radius:.315})}function R(g,P,L,B,O,he,ne){const Ee=new ve({color:O,emissive:O,emissiveIntensity:.02,roughness:.25});return{mesh:y(r,g,he,ne,.018,Ee,P,L,B,.005),material:Ee}}return o.sedanSignalLamps={left:[R("frontSignalL",.795,.862,2.247,16755249,.073,.024),R("rearSignalL",.754,.813,-2.319,16755249,.13,.022)],right:[R("frontSignalR",-.795,.862,2.247,16755249,.073,.024),R("rearSignalR",-.754,.813,-2.319,16755249,.13,.022)]},o.sedanBrakeLamps=[-1,1].map(g=>R(`brake${g}`,g*.59,.86,-2.32,16721461,.28,.025)),o.reverseLamps=[-1,1].map(g=>R(`reverse${g}`,g*.43,.807,-2.32,15660543,.08,.022)),o}function r_(i){const e=new qe;e.position.set(-.37,.58,-.38);const t=new ve({color:1981066,roughness:.65}),n=new ve({color:1976635,roughness:.75}),s=new ve({color:15843965,roughness:.55}),r=new ve({color:1513239,roughness:.8}),o=new ve({color:14427686,emissive:8330525,emissiveIntensity:.35,roughness:.35}),a=new ve({color:14870768,metalness:.85,roughness:.2}),c=new ee(new ze(.32,.42,.2),t);c.position.set(0,.24,.04),c.rotation.x=-.08,c.castShadow=!0,e.add(c);for(const E of[-.085,.085]){const I=new ee(new ze(.12,.11,.36),n);I.position.set(E,.06,.2),I.rotation.x=-.1,e.add(I)}const l=new qe;l.position.set(0,.54,.03);const h=new ee(new st(.048,.055,.08,12),s);h.position.y=-.03,l.add(h);const d=new ee(new Yt(.115,16,14),s);d.position.y=.06,d.scale.set(.92,1.05,.96),d.castShadow=!0,l.add(d);const u=new ee(new Yt(.119,14,10,0,Math.PI*2,0,Math.PI*.62),r);u.position.y=.068,u.rotation.x=-.15,l.add(u);const f=new ee(new ze(.16,.018,.11),new ve({color:366185,roughness:.4}));f.position.set(0,.115,.11),f.rotation.x=.12,l.add(f);const x=new ee(new ze(.15,.032,.025),new ve({color:988970,metalness:.5,roughness:.2}));x.position.set(0,.068,.105),l.add(x),e.add(l);const _=new qe;_.position.set(.18,.39,.05);const p=new ee(new ze(.075,.075,.44),t);p.position.set(-.02,-.04,.21),p.rotation.x=.15,p.rotation.y=-.12;const m=new ee(new Yt(.042,10,8),s);m.position.set(-.05,-.06,.43),_.add(p,m),e.add(_);const S=new qe;S.position.set(-.18,.39,.05);const M=new ee(new ze(.075,.075,.44),t);M.position.set(.02,-.04,.21),M.rotation.x=.15,M.rotation.y=.12;const v=new ee(new Yt(.042,10,8),s);v.position.set(.05,-.06,.43),S.add(M,v),e.add(S);const y=new qe,b=new ee(new ze(.055,.52,.022),o);b.position.set(-.01,.25,.145),b.rotation.z=-.62,b.rotation.x=-.08,y.add(b);const T=new ee(new ze(.045,.34,.018),o);T.position.set(-.24,.48,-.02),T.rotation.z=.45,y.add(T);const C=new ee(new ze(.33,.05,.024),o);C.position.set(0,.09,.16),y.add(C);const w=new ee(new ze(.045,.065,.035),a);return w.position.set(.17,.08,.15),y.add(w),y.visible=!1,e.add(y),i.add(e),{group:e,headGroup:l,seatbeltGroup:y,leftArmGroup:_,rightArmGroup:S}}function Vd(i){const e=new qe,t=new qe,n=new qe;n.rotation.y=Math.PI,t.add(n),e.add(t);const s=new ol({color:366185,metalness:.12,roughness:.24,clearcoat:1,clearcoatRoughness:.17}),r=new ve({color:14212835,metalness:.92,roughness:.16}),o=new ve({color:1316893,metalness:.38,roughness:.58});if(i==="motorcycle"){const l=i_(n,r,!0);return l.bikeCockpitRoot.visible=!1,{root:e,leanGroup:t,flipGroup:n,kind:i,corollaParts:null,cb400Parts:l,driverAvatar:null}}const a=s_(n,s,r,o,!0),c=r_(n);return{root:e,leanGroup:t,flipGroup:n,kind:i,corollaParts:a,cb400Parts:null,driverAvatar:c}}function Sh(i,e){if(i.kind==="motorcycle"&&i.cb400Parts){const t=i.cb400Parts;t.motorcycleRoot.visible=!e,t.bikeCockpitRoot.visible=e;return}if(i.corollaParts){const t=i.corollaParts,n=!e;t.driverSeat&&(t.driverSeat.visible=n),t.frontBumper&&(t.frontBumper.visible=n),t.rearBumper&&(t.rearBumper.visible=n),t.grille&&(t.grille.visible=n),t.headlightL&&(t.headlightL.visible=n),t.headlightR&&(t.headlightR.visible=n),t.taillightL&&(t.taillightL.visible=n),t.taillightR&&(t.taillightR.visible=n),t.roofRailL&&(t.roofRailL.visible=n),t.roofRailR&&(t.roofRailR.visible=n)}i.driverAvatar&&(i.driverAvatar.group.visible=!e)}function o_(i,e,t){var a,c,l,h;i.root.position.set(e.x,e.y,e.z),i.root.rotation.y=e.heading,i.leanGroup.rotation.x=e.pitch,i.leanGroup.rotation.z=e.roll;const n=e.blinkerOn&&(e.blinker==="left"||e.blinker==="hazard"),s=e.blinkerOn&&(e.blinker==="right"||e.blinker==="hazard"),r=e.braking||e.handbrake,o=Math.max(.18,Math.min(1,(e.rpm-700)/4200));if(i.corollaParts){const d=i.corollaParts;for(const x of d.wheelAssemblies)x.steerable&&(x.pivot.rotation.y=e.steerAngleRad),x.wheel.rotation.x=e.wheelRotationRad;d.steeringWheel&&(d.steeringWheel.rotation.z=-e.steeringWheelRad);const u=(a=e.preDrive)!=null&&a.seatAdjusted?.06:0;if(d.driverSeat&&(d.driverSeat.position.z=-.4+u),i.driverAvatar){const x=i.driverAvatar;if(x.group.position.z=-.38+u,x.seatbeltGroup.visible=!!((c=e.preDrive)!=null&&c.seatbeltFastened),e.mirrorTouchTimer>0)x.headGroup.rotation.y=.32,x.headGroup.rotation.x=-.22,x.leftArmGroup.rotation.x=-.75,x.leftArmGroup.rotation.y=.35;else{x.headGroup.rotation.y=e.lookAngleRad*.95,x.headGroup.rotation.x=Math.abs(e.lookAngleRad)>.2?.05:0;const _=St.clamp(e.steerAngleRad*.45,-.35,.35);x.leftArmGroup.rotation.x=_,x.leftArmGroup.rotation.y=0,x.rightArmGroup.rotation.x=-_}}for(const x of d.sedanSignalLamps.left)x.material.emissiveIntensity=n?2.4:.02;for(const x of d.sedanSignalLamps.right)x.material.emissiveIntensity=s?2.4:.02;for(const x of d.sedanBrakeLamps)x.material.emissiveIntensity=r?2.5:.12;for(const x of d.reverseLamps)x.material.emissiveIntensity=e.reversing?2:.02;const f=n&&s?"hazard":n?"left":s?"right":"off";(l=d.updateCockpit)==null||l.call(d,e.speedMs,o,e.gear,f)}if(i.cb400Parts){const d=i.cb400Parts;d.bikeFrontWheelPivot.rotation.y=e.steerAngleRad,d.bikeFrontWheelAssembly.group.rotation.x=e.wheelRotationRad,d.bikeRearWheelAssembly.group.rotation.x=e.wheelRotationRad,d.bikeHandlebar.rotation.y=e.steerAngleRad,d.bikeCockpitBar.rotation.y=e.steerAngleRad;for(const u of d.bikeSignalLamps.left)u.material.emissiveIntensity=n?2.4:.02;for(const u of d.bikeSignalLamps.right)u.material.emissiveIntensity=s?2.4:.02;d.bikeBrakeLamp.material.emissiveIntensity=r?2.5:.12,(h=d.updateBikeCockpit)==null||h.call(d,e.speedMs,o)}}class a_{constructor(e,t){ue(this,"camera");ue(this,"orbit");ue(this,"mode","chase");ue(this,"mirrorQuality","high");ue(this,"mirrorCameras",{left:new Ht(56,1.65,.1,450),center:new Ht(44,2.5,.1,450),right:new Ht(56,1.65,.1,450)});ue(this,"miniMapCamera",new Gl(-45,45,45,-45,1,240));ue(this,"miniMapViewport",{centerX:0,centerZ:0,halfWidth:45,halfHeight:45,halfSize:45});ue(this,"insetSurfaces",new WeakMap);ue(this,"smoothPos",new D(12,5.5,56));ue(this,"smoothLook",new D(12,1.6,48));ue(this,"frameCounter",0);this.camera=new Ht(60,t,.05,650),this.camera.layers.enable(1),[this.miniMapCamera,...Object.values(this.mirrorCameras)].forEach(n=>{n.userData.skipCarMirrors=!0,n.layers.set(0)}),this.orbit=new Wv(this.camera,e),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.08,this.orbit.maxPolarAngle=Math.PI*.48,this.orbit.minDistance=2.8,this.orbit.maxDistance=65,this.orbit.enabled=!1}setMode(e,t,n){this.mode=e,this.orbit.enabled=e==="orbit",this.camera.userData.carMirrorInterval=e==="cockpit"||e==="instructor"?0:250,n&&Sh(n,e==="cockpit"),document.body.dataset.view=e==="chase"?"follow":e,document.body.classList.toggle("sedan-cockpit",(e==="cockpit"||e==="instructor")&&(n==null?void 0:n.kind)!=="motorcycle"),document.body.classList.toggle("bike-cockpit",e==="cockpit"&&(n==null?void 0:n.kind)==="motorcycle"),e==="orbit"?(this.camera.fov=60,this.camera.updateProjectionMatrix(),this.camera.position.set(t.x+16,t.y+18,t.z+16),this.orbit.target.set(t.x,t.y+1.2,t.z),this.orbit.update()):this.snapToState(t,(n==null?void 0:n.kind)??"sedan")}getMode(){return this.mode}setMirrorQuality(e,t){this.mirrorQuality=e}bindMirrorsToVehicle(e){Sh(e,this.mode==="cockpit")}snapToState(e,t="sedan"){const n=this.getViewPose(this.mode,e,t);this.smoothPos.copy(n.position),this.smoothLook.copy(n.lookTarget),this.camera.position.copy(n.position),this.camera.lookAt(n.lookTarget)}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}getViewPose(e,t,n){const s=new D(-Math.sin(t.heading),0,-Math.cos(t.heading)),r=new D(Math.cos(t.heading),0,-Math.sin(t.heading)),o=t.heading+t.lookAngleRad,a=new D(-Math.sin(o),0,-Math.cos(o)),c=new D(Math.cos(o),0,-Math.sin(o)),l=new D(t.x,t.y,t.z);if(e==="cockpit"){if(n==="motorcycle"){const p=l.clone().add(new D(0,1.42,0)).add(s.clone().multiplyScalar(-.08)),m=p.clone().add(a.clone().multiplyScalar(30)).add(c.clone().multiplyScalar(.04)).add(new D(0,Math.sin(t.pitch)*28-1.3,0));return{position:p,lookTarget:m}}const x=l.clone().add(new D(0,1.245,0)).add(s.clone().multiplyScalar(-.38)).add(r.clone().multiplyScalar(.36)),_=x.clone().add(a.clone().multiplyScalar(28)).add(c.clone().multiplyScalar(.04)).add(new D(0,Math.sin(t.pitch)*26-1.1,0));return{position:x,lookTarget:_}}if(e==="instructor"){const x=l.clone().add(new D(0,1.24,0)).add(s.clone().multiplyScalar(-.34)).add(r.clone().multiplyScalar(-.37)),_=l.clone().add(new D(0,1.02+Math.sin(t.pitch)*1.2,0)).add(s.clone().multiplyScalar(.32)).add(r.clone().multiplyScalar(.24-t.lookAngleRad*.18));return{position:x,lookTarget:_}}if(e==="hood"){const x=l.clone().add(new D(0,1.12,0)).add(s.clone().multiplyScalar(.55)),_=x.clone().add(a.clone().multiplyScalar(22)).add(new D(0,Math.sin(t.pitch)*22-.8,0));return{position:x,lookTarget:_}}const h=n==="motorcycle"?7.2:9,d=n==="motorcycle"?4.6:5.5,u=l.clone().add(new D(0,d,0)).add(a.clone().multiplyScalar(-h)),f=l.clone().add(new D(0,n==="motorcycle"?1.28:1.6,0));return{position:u,lookTarget:f}}update(e,t,n,s,r,o){if(this.mode==="orbit"){const d=t.y+(n==="motorcycle"?1:1.2);this.orbit.target.lerp(new D(t.x,d,t.z),1-Math.pow(.01,e)),this.orbit.update();return}const a=this.mode==="cockpit"?n==="motorcycle"?78:70:this.mode==="instructor"?74:60,c=St.clamp(Math.abs(t.speedMs)/22,0,1);this.camera.fov=St.damp(this.camera.fov,a+c*14,5,e),this.camera.updateProjectionMatrix();const l=this.getViewPose(this.mode,t,n);if(this.mode==="cockpit"||this.mode==="instructor"||this.mode==="hood"){this.camera.position.copy(l.position),this.camera.lookAt(l.lookTarget);return}const h=1-Math.pow(.002,e);this.smoothPos.lerp(l.position,h),this.camera.position.copy(this.smoothPos),this.camera.lookAt(l.lookTarget)}renderInset(e,t,n,s){const r=t.clientWidth,o=t.clientHeight;if(r<2||o<2)return;let a=this.insetSurfaces.get(t);if(!a){const d=document.createElement("canvas");d.className="insetCanvas",d.setAttribute("aria-hidden","true"),t.prepend(d);const u=d.getContext("2d",{alpha:!1});a={canvas:d,ctx:u},this.insetSurfaces.set(t,a)}const c=e.getPixelRatio(),l=Math.min(Math.floor(r*c),e.domElement.width),h=Math.min(Math.floor(o*c),e.domElement.height);(a.canvas.width!==l||a.canvas.height!==h)&&(a.canvas.width=l,a.canvas.height=h),e.setScissorTest(!0),e.setViewport(0,0,l/c,h/c),e.setScissor(0,0,l/c,h/c),e.render(n,s),a.ctx.drawImage(e.domElement,0,e.domElement.height-h,l,h,0,0,l,h),e.setScissorTest(!1)}renderPiPMirrors(e,t,n,s,r,o,a){if(a||this.mirrorQuality==="off"||this.mode==="orbit"||(this.frameCounter++,this.mirrorQuality==="low"&&this.frameCounter%2!==0))return;const c=new D(-Math.sin(n.heading),0,-Math.cos(n.heading)),l=new D(Math.cos(n.heading),0,-Math.sin(n.heading)),h=new D(n.x,n.y,n.z),d=(u,f,x)=>{if(!u)return;const _=u.getBoundingClientRect();if(_.width<2||_.height<2)return;f.aspect=_.width/_.height,f.updateProjectionMatrix(),x==="center"&&(f.projectionMatrix.elements[0]*=-1,f.projectionMatrixInverse.copy(f.projectionMatrix).invert());const p=x==="left"?-1:x==="right"?1:0,m=x==="center"?0:.88*p,S=x==="center"?0:8.5*p,M=h.clone().add(new D(0,x==="center"?1.93:1.78,0)).add(c.clone().multiplyScalar(x==="center"?.24:.06)).add(l.clone().multiplyScalar(m)),v=M.clone().add(c.clone().multiplyScalar(-16)).add(l.clone().multiplyScalar(S)).add(new D(0,.12,0));f.position.copy(M),f.lookAt(v),this.renderInset(e,u,t,f)};d(s,this.mirrorCameras.left,"left"),d(r,this.mirrorCameras.center,"center"),d(o,this.mirrorCameras.right,"right")}renderPiPMiniMap(e,t,n,s,r,o,a,c,l){if(!n)return;const h=n.getBoundingClientRect();if(h.width<2||h.height<2)return;const d=h.width/h.height,u=r.width*.5,f=r.height*.5,x=o?Math.max(r.width,r.height)*.56:Math.max(24,Math.max(r.width,r.height)*.28),_=o?x/Math.max(1,a):x,p=d>=1?_*d:_,m=d>=1?_:_/d,S=o?c:St.clamp(s.x,-u,u),M=o?l:St.clamp(s.z,-f,f);this.miniMapViewport={centerX:S,centerZ:M,halfWidth:p,halfHeight:m,halfSize:_},this.miniMapCamera.left=-p,this.miniMapCamera.right=p,this.miniMapCamera.top=m,this.miniMapCamera.bottom=-m,this.miniMapCamera.position.set(S,110,M),this.miniMapCamera.up.set(0,0,-1),this.miniMapCamera.lookAt(S,0,M),this.miniMapCamera.updateProjectionMatrix(),this.renderInset(e,n,t,this.miniMapCamera)}}const mo=[{id:"kyoshujo-3d",nameEn:"Sakuragaoka 3D Driving School (Full 3D Kyōshūjo)",nameJa:"桜ヶ丘自動車教習所 (3D立体コース)",mapWidth:180,startX:12,startZ:48.1,startHeading:Math.PI/2,accentColor:"#059669"},{id:"tokyo-fuchu",nameEn:"Fuchu Driver's License Test Center, Tokyo",nameJa:"東京府中運転免許試験場",mapWidth:420,startX:-54,startZ:88,startHeading:0,accentColor:"#2563eb"},{id:"tokyo-samezu",nameEn:"Samezu Driver's License Test Center, Tokyo",nameJa:"東京都鮫洲運転免許試験場",mapWidth:340,startX:-42,startZ:74,startHeading:Math.PI/2,accentColor:"#0891b2"},{id:"kanagawa-futamatagawa-car",nameEn:"Kanagawa License Center (Futamatagawa · Car)",nameJa:"神奈川県運転免許センター（二俣川・四輪）",mapWidth:460,startX:-67.9,startZ:112,startHeading:Math.PI/2,accentColor:"#059669"},{id:"osaka-kadoma",nameEn:"Kadoma Driver's License Test Center, Osaka",nameJa:"大阪門真運転免許試験場",mapWidth:400,startX:-50,startZ:82,startHeading:0,accentColor:"#7c3aed"},{id:"aichi-hirabari",nameEn:"Hirabari Driver's License Test Center, Nagoya",nameJa:"愛知県平針運転免許試験場",mapWidth:380,startX:-48,startZ:76,startHeading:Math.PI/2,accentColor:"#d97706"},{id:"saitama-konosu",nameEn:"Saitama Prefectural Driver's License Center (Konosu)",nameJa:"埼玉県警察運転免許センター（鴻巣）",mapWidth:410,startX:-55,startZ:84,startHeading:0,accentColor:"#0d9488"},{id:"chiba-makuhari-car",nameEn:"Chiba Makuhari License Center (Car)",nameJa:"千葉幕張免許センター（四輪）",mapWidth:390,startX:-46,startZ:80,startHeading:Math.PI/2,accentColor:"#db2777"}];class l_{constructor(e){ue(this,"group",new qe);ue(this,"mesh",null);ue(this,"texture",null);ue(this,"activeSource",null);ue(this,"currentSize",{width:180,height:120});this.group.visible=!1,e.add(this.group)}getActiveSource(){return this.activeSource}async loadFromDataUrl(e,t){const n=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=()=>r(new Error("Failed to decode map image")),o.src=e});this.applyCanvasOrImage(n,n.width,n.height,t)}loadProceduralTestCenter(e){const s=document.createElement("canvas");s.width=2048,s.height=1360;const r=s.getContext("2d");r.fillStyle="#4e753e",r.fillRect(0,0,2048,1360);for(let a=0;a<6e3;a++)r.fillStyle=a%2===0?"rgba(65,98,48,0.28)":"rgba(110,148,80,0.22)",r.fillRect(Math.random()*2048,Math.random()*1360,4,4);const o=(a,c=92)=>{r.save(),r.lineCap="round",r.lineJoin="round",r.strokeStyle="#d1d5db",r.lineWidth=c+10,a(),r.stroke(),r.strokeStyle="#363c44",r.lineWidth=c,a(),r.stroke(),r.strokeStyle="#f8fafc",r.lineWidth=3,r.setLineDash([24,24]),a(),r.stroke(),r.restore()};o(()=>{r.beginPath(),r.roundRect(140,120,1768,1120,160)},106),o(()=>{r.beginPath(),r.moveTo(2048*.35,120),r.lineTo(2048*.35,1240),r.moveTo(2048*.65,120),r.lineTo(2048*.65,1240),r.moveTo(140,1360*.45),r.lineTo(1908,1360*.45),r.moveTo(140,1360*.72),r.lineTo(2048*.65,1360*.72)},88),o(()=>{r.beginPath(),r.moveTo(2048*.35,1360*.25),r.bezierCurveTo(2048*.5,1360*.16,2048*.5,1360*.38,2048*.65,1360*.28)},52),o(()=>{r.beginPath(),r.moveTo(2048*.65,1360*.58),r.lineTo(2048*.78,1360*.58),r.lineTo(2048*.78,1360*.76),r.lineTo(1908,1360*.76)},54),r.fillStyle="rgba(255,255,255,0.85)",r.font='bold 44px "Noto Sans JP", sans-serif',r.fillText(e.nameJa,220,210),r.fillStyle=e.accentColor,r.font="bold 30px sans-serif",r.fillText(e.nameEn,220,255),this.applyCanvasOrImage(s,2048,1360,e.mapWidth)}applyCanvasOrImage(e,t,n,s){this.disposeCurrent(),this.activeSource=e;const r=new Vt(e);r.colorSpace=gt,r.anisotropy=8,r.needsUpdate=!0,this.texture=r;const o=n/Math.max(1,t),a=Math.max(10,s),c=a*o;this.currentSize={width:a,height:c};const l=new wt(a,c),h=new ve({map:r,roughness:.92,metalness:0}),d=new ee(l,h);d.rotation.x=-Math.PI/2,d.position.y=.005,d.receiveShadow=!0,this.mesh=d,this.group.add(d)}setWidth(e){var o;if(!this.mesh||!((o=this.texture)!=null&&o.image))return;const t=this.texture.image,n=t.height/Math.max(1,t.width),s=Math.max(10,e),r=s*n;this.currentSize={width:s,height:r},this.mesh.geometry.dispose(),this.mesh.geometry=new wt(s,r)}setVisible(e){this.group.visible=e}disposeCurrent(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.texture&&(this.texture.dispose(),this.texture=null)}}const Eh="jp_kyoshujo_custom_route_v1";class c_{constructor(e){ue(this,"group",new qe);ue(this,"ribbonGroup",new qe);ue(this,"stampGroup",new qe);ue(this,"activeRing");ue(this,"data",{waypoints:[],stamps:[]});ue(this,"memoryMode","guided");ue(this,"currentWpIndex",0);ue(this,"wrongTurnCount",0);ue(this,"bestDistToCurrentWp",1/0);ue(this,"offRouteAlert",!1);ue(this,"completed",!1);ue(this,"autoStopTimer",0);ue(this,"stoppedAtStampIds",new Set);ue(this,"trafficLightLamps",[]);ue(this,"onRouteCompleted");this.group.add(this.ribbonGroup,this.stampGroup);const t=new Nn(1.4,2,28),n=new Pt({color:3462041,side:Tt,transparent:!0,opacity:.85});this.activeRing=new ee(t,n),this.activeRing.rotation.x=-Math.PI/2,this.activeRing.position.y=.06,this.activeRing.visible=!1,this.group.add(this.activeRing),e.add(this.group),this.loadSavedRoute()}getData(){return this.data}hasRoute(){return this.data.waypoints.length>=2}getMemoryMode(){return this.memoryMode}setMemoryMode(e){this.memoryMode=e,this.ribbonGroup.visible=e!=="blind",this.activeRing.visible=this.hasRoute()&&(e!=="blind"||this.offRouteAlert)}setRouteData(e,t=!0){if(this.data={waypoints:e.waypoints.map(n=>({...n})),stamps:e.stamps.map(n=>({...n}))},this.recomputeTurnDirections(),this.rebuild3DVisuals(),this.resetProgress(),t)try{window.localStorage.setItem(Eh,JSON.stringify(this.data))}catch{}}clearRoute(){this.setRouteData({waypoints:[],stamps:[]},!0)}loadSavedRoute(){try{const e=window.localStorage.getItem(Eh);if(!e)return;const t=JSON.parse(e);Array.isArray(t==null?void 0:t.waypoints)&&Array.isArray(t==null?void 0:t.stamps)&&this.setRouteData(t,!1)}catch{}}resetProgress(){this.currentWpIndex=this.data.waypoints.length>1?1:0,this.wrongTurnCount=0,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1,this.completed=!1,this.autoStopTimer=0,this.stoppedAtStampIds.clear(),this.setMemoryMode(this.memoryMode)}getStartPose(){if(this.data.waypoints.length<2)return null;const e=this.data.waypoints[0],t=this.data.waypoints[1],n=Math.atan2(-(t.x-e.x),-(t.z-e.z));return{x:e.x,z:e.z,heading:n}}recomputeTurnDirections(){const e=this.data.waypoints;for(let t=0;t<e.length;t++){if(t===0){e[t].turn="start";continue}if(t===e.length-1){e[t].turn="goal";continue}const n=e[t-1],s=e[t],r=e[t+1],o=Math.atan2(-(s.x-n.x),-(s.z-n.z)),a=Math.atan2(-(r.x-s.x),-(r.z-s.z)),l=bo(a-o)*180/Math.PI;Math.abs(l)>135?e[t].turn="uturn":l>28?e[t].turn="left":l<-28?e[t].turn="right":e[t].turn="straight"}}autoExtractRouteFromImage(e,t,n,s){const o=e.height/Math.max(1,e.width),a=Math.max(60,Math.round(180*o)),c=t*o,l=document.createElement("canvas");l.width=180,l.height=a;const h=l.getContext("2d");h.drawImage(e,0,0,180,a);const d=h.getImageData(0,0,180,a).data,u=[];for(let v=2;v<a-2;v+=2)for(let y=2;y<178;y+=2){const b=(v*180+y)*4,T=d[b],C=d[b+1],w=d[b+2];if(d[b+3]<128)continue;let I=!1;if(n==="red"?I=T>155&&T-C>55&&T-w>55:n==="blue"?I=w>150&&w-T>45&&w-C>20:n==="green"?I=C>140&&C-T>35&&C-w>25:n==="orange"&&(I=T>180&&C>95&&C<185&&w<85),I){const U=(y/180-.5)*t,H=(v/a-.5)*c;u.push({x:U,z:H})}}if(u.length<4)return[];const f=Math.max(4,t/45),x=new Map;for(const v of u){const y=Math.round(v.x/f),b=Math.round(v.z/f),T=`${y},${b}`,C=x.get(T)??{sumX:0,sumZ:0,count:0};C.sumX+=v.x,C.sumZ+=v.z,C.count++,x.set(T,C)}const _=Array.from(x.values()).map(v=>({x:v.sumX/v.count,z:v.sumZ/v.count,used:!1}));if(_.length<2)return[];let p=0,m=1/0;for(let v=0;v<_.length;v++){const y=s?Math.hypot(_[v].x-s.x,_[v].z-s.z):-_[v].z+_[v].x*.3;y<m&&(m=y,p=v)}const S=[];_[p].used=!0,S.push({x:_[p].x,z:_[p].z,turn:"start"});const M=f*4.5;for(;S.length<45;){const v=S[S.length-1];let y=-1,b=M;for(let T=0;T<_.length;T++){if(_[T].used)continue;const C=Math.hypot(_[T].x-v.x,_[T].z-v.z);C<b&&(b=C,y=T)}if(y===-1)break;_[y].used=!0,b>=f*.85&&S.push({x:_[y].x,z:_[y].z,turn:"straight"})}return S}update(e,t,n,s,r){var v;const o=n.getLightForAxis("NS");for(const y of this.trafficLightLamps)y.green.emissiveIntensity=o==="green"?2.2:.15,y.yellow.emissiveIntensity=o==="yellow"?2.2:.15,y.red.emissiveIntensity=o==="red"?2.2:.15;if(!this.hasRoute())return this.activeRing.visible=!1,{bannerText:null,autoDriveInput:null};const a=s==="ja",c=this.data.waypoints;if(this.completed){this.activeRing.visible=!1;const y=Math.max(0,Math.round((1-this.wrongTurnCount/Math.max(1,c.length))*100));return{bannerText:a?`カスタムルート完走！ 暗記正確度: ${y}% (コース間違い: ${this.wrongTurnCount}回) — [O]キーで最初から復習`:`Custom Route Complete! Memory Accuracy: ${y}% (Wrong turns: ${this.wrongTurnCount}) — Press [O] to practice again`,autoDriveInput:null}}const l=c[this.currentWpIndex];if(!l)return this.completed=!0,{bannerText:null,autoDriveInput:null};const h=Math.hypot(l.x-t.x,l.z-t.z);h<this.bestDistToCurrentWp&&(this.bestDistToCurrentWp=h),h-this.bestDistToCurrentWp>16&&!this.offRouteAlert?(this.offRouteAlert=!0,this.wrongTurnCount++):h<this.bestDistToCurrentWp+4&&(this.offRouteAlert=!1);const d=this.memoryMode!=="blind"||this.offRouteAlert;if(this.activeRing.visible=d,d){this.activeRing.position.set(l.x,.07,l.z);const y=1+Math.sin(r*5)*.12;this.activeRing.scale.set(y,y,1)}const u=this.currentWpIndex===c.length-1?4.2:5.5;h<=u&&(this.currentWpIndex>=c.length-1?(Math.abs(t.speedMs)<.4||this.memoryMode==="autodrive")&&(this.completed=!0,(v=this.onRouteCompleted)==null||v.call(this,this.wrongTurnCount,c.length)):(this.currentWpIndex++,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1));const f={start:"出発",straight:"直進 (Straight)",left:"左折 ◀ (Turn Left)",right:"右折 ▶ (Turn Right)",uturn:"Uターン (U-Turn)",goal:"発着点ゴール・停止 (Goal Stop)"},x={start:"Start",straight:"Continue Straight (直進)",left:"Turn Left ◀ (左折)",right:"Turn Right ▶ (右折)",uturn:"Make U-Turn (Uターン)",goal:"Goal — Come to Full Stop (ゴール停止)"},_=c[this.currentWpIndex]??l,p=Math.round(Math.hypot(_.x-t.x,_.z-t.z)),m=a?f[_.turn]:x[_.turn];let S;this.offRouteAlert?S=a?`⚠️ コース間違い！ ポイント #${this.currentWpIndex} (${p}m先) へ戻ってください`:`⚠️ Wrong Turn! Head back toward Checkpoint #${this.currentWpIndex} (${p}m)`:this.memoryMode==="blind"?S=a?`🧠 暗記テスト中 [#${this.currentWpIndex}/${c.length-1}] ガイド非表示 — 記憶で走行 (ミス: ${this.wrongTurnCount}回)`:`🧠 Memory Test [#${this.currentWpIndex}/${c.length-1}] Guide hidden — drive from memory (Mistakes: ${this.wrongTurnCount})`:S=`${this.memoryMode==="autodrive"?a?"🤖 自動お手本走行":"🤖 Auto-Drive Demo":a?"📍 ルートガイド":"📍 Route Guide"} [#${this.currentWpIndex}/${c.length-1} · ${p}m]: ${m}`;let M=null;return this.memoryMode==="autodrive"&&!this.completed&&(M=this.computeAutoDriveInput(e,t,_)),{bannerText:S,autoDriveInput:M}}computeAutoDriveInput(e,t,n){for(let v=0;v<this.data.stamps.length;v++){const y=this.data.stamps[v];if(y.kind==="stopSign"&&!this.stoppedAtStampIds.has(v)&&Math.hypot(y.x-t.x,y.z-t.z)<4.5){if(this.autoStopTimer+=e,this.autoStopTimer<1.4)return{throttle:0,brake:.9,steerLeft:0,steerRight:0,analogSteerTarget:0,clutch:0,lookLeft:this.autoStopTimer<.7,lookRight:this.autoStopTimer>=.7};this.stoppedAtStampIds.add(v),this.autoStopTimer=0}}const s=n.x-t.x,r=n.z-t.z,o=Math.hypot(s,r)||1,a=ys(t.heading),c=s/o,l=r/o,h=a.z*c-a.x*l,d=a.x*c+a.z*l,u=Math.atan2(h,d),f=2*Math.sin(u)/Math.max(2.5,Math.min(8,o)),x=Math.atan(2.6*f),_=Math.max(-1,Math.min(1,x/.75));o<18&&n.turn==="left"?t.blinker="left":o<18&&n.turn==="right"?t.blinker="right":Math.abs(u)<.12&&(t.blinker="off");const p=n.turn==="left"||n.turn==="right"||n.turn==="goal",m=n.turn==="goal"&&o<6?0:p&&o<12?2.8:Math.abs(u)>.35?2.6:5.5,S=t.speedMs<m?.48:0,M=t.speedMs>m+.8||m===0?.65:0;return{throttle:S,brake:M,steerLeft:0,steerRight:0,analogSteerTarget:_,clutch:0,lookLeft:!1,lookRight:!1}}rebuild3DVisuals(){for(;this.ribbonGroup.children.length>0;)this.ribbonGroup.remove(this.ribbonGroup.children[0]);for(;this.stampGroup.children.length>0;)this.stampGroup.remove(this.stampGroup.children[0]);this.trafficLightLamps=[];const e=this.data.waypoints;if(e.length>=2){const t=e.map(o=>new D(o.x,.08,o.z)),n=new So(t,!1,"catmullrom",.15),s=new _r(n,Math.max(24,e.length*10),.22,6,!1),r=new Pt({color:3462041,transparent:!0,opacity:.72});this.ribbonGroup.add(new ee(s,r)),e.forEach((o,a)=>{const c=this.createCheckpointSign(a===0?"S":a===e.length-1?"G":String(a),o.turn);c.position.set(o.x,0,o.z),this.ribbonGroup.add(c)})}for(const t of this.data.stamps)t.kind==="stopSign"?this.stampGroup.add(this.create3DStopSign(t.x,t.z,t.heading)):t.kind==="trafficLight"?this.stampGroup.add(this.create3DTrafficLight(t.x,t.z,t.heading)):t.kind==="pole"&&this.stampGroup.add(this.create3DPole(t.x,t.z))}createCheckpointSign(e,t){const n=new qe,s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");r.beginPath(),r.arc(64,64,56,0,Math.PI*2),r.fillStyle=t==="goal"?"#d62828":t==="left"||t==="right"?"#005bac":"#059669",r.fill(),r.lineWidth=8,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font="bold 54px sans-serif",r.fillText(e,64,66);const o=new dn(s);o.colorSpace=gt;const a=new pd(new Ul({map:o,transparent:!0}));return a.scale.set(1.8,1.8,1),a.position.y=2.1,n.add(a),n}create3DStopSign(e,t,n){const s=new qe;s.position.set(e,0,t),s.rotation.y=n;const r=new ee(new wt(3.4,.45),new Pt({color:16777215,side:Tt}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,0),s.add(r);const o=new ee(new st(.04,.04,2.5,8),new ve({color:9741240}));o.position.set(-1.9,1.25,0),s.add(o);const a=document.createElement("canvas");a.width=256,a.height=256;const c=a.getContext("2d");c.beginPath(),c.moveTo(20,24),c.lineTo(236,24),c.lineTo(128,228),c.closePath(),c.fillStyle="#d62828",c.fill(),c.lineWidth=12,c.strokeStyle="#ffffff",c.stroke(),c.fillStyle="#ffffff",c.textAlign="center",c.font='bold 46px "Noto Sans JP", sans-serif',c.fillText("止まれ",128,95),c.font="bold 26px sans-serif",c.fillText("STOP",128,138);const l=new dn(a);l.colorSpace=gt;const h=new ee(new wt(1,1),new Pt({map:l,transparent:!0,side:Tt}));return h.position.set(-1.9,2.3,.05),s.add(h),s}create3DTrafficLight(e,t,n){const s=new qe;s.position.set(e,0,t),s.rotation.y=n;const r=new ve({color:6583435}),o=new ee(new st(.1,.12,5,10),r);o.position.set(-2.4,2.5,0),s.add(o);const a=new ee(new ze(1.5,.5,.35),new ve({color:1976635}));a.position.set(-.6,4.7,0),s.add(a);const c=new ve({color:413243,emissive:1108120,emissiveIntensity:1.5}),l=new ve({color:7877903,emissive:16758531,emissiveIntensity:.2}),h=new ve({color:8330525,emissive:16722474,emissiveIntensity:.2});this.trafficLightLamps.push({green:c,yellow:l,red:h});const d=new st(.14,.14,.06,12),u=(f,x)=>{const _=new ee(d,f);_.rotation.x=Math.PI/2,_.position.set(-.6+x,4.7,.18),s.add(_)};return u(c,-.44),u(l,0),u(h,.44),s}create3DPole(e,t){const n=new qe;n.position.set(e,0,t);const s=new ve({color:14231078}),r=new ve({color:16317180});for(let o=0;o<5;o++){const a=new ee(new st(.06,.06,.32,10),o%2===0?s:r);a.position.y=.16+o*.32,n.add(a)}return n}}class h_{constructor(e){ue(this,"root",new qe);ue(this,"cyclists",[]);ue(this,"parkedTrucks",[]);ue(this,"noParkingZones",[]);ue(this,"stopZoneHoldTimer",0);ue(this,"hazardTimer",0);ue(this,"legalPullOverBay",{x:95.8,z:-10,halfW:1.9,halfD:5.2});ue(this,"legalPullOverCompleted",!1);this.root.visible=!1,e.add(this.root),this.buildCityGroundAndRoads(),this.buildCityMarkingsAndZones(),this.buildParkedDeliveryTrucks(),this.buildCyclists(),this.buildCityBuildingsAndStreetFurniture()}setVisible(e){this.root.visible=e,e&&(this.legalPullOverCompleted=!1,this.stopZoneHoldTimer=0)}isVisible(){return this.root.visible}getStartPose(){return{x:-65,z:65.25,heading:-Math.PI/2}}buildCityGroundAndRoads(){const e=new ee(new wt(280,200),new ve({color:4674921,roughness:.95}));e.rotation.x=-Math.PI/2,e.position.y=-.01,e.receiveShadow=!0,this.root.add(e);const t=new ee(new wt(166,108),new ve({color:5078083,roughness:.92}));t.rotation.x=-Math.PI/2,t.position.y=.004,t.receiveShadow=!0,this.root.add(t);const n=new ve({color:3028027,roughness:.85}),s=new ve({color:1920728,roughness:.8}),r=(o,a,c,l,h=.01,d=n)=>{const u=new ee(new wt(c,l),d);u.rotation.x=-Math.PI/2,u.position.set(o,h,a),u.receiveShadow=!0,this.root.add(u)};r(0,60,206,14),r(0,-60,206,14),r(-94,0,14,134),r(94,0,14,134),r(0,0,10,120,.011),r(0,66.3,176,1.1,.015,s),r(0,-66.3,176,1.1,.015,s),r(100.3,0,1.1,108,.015,s),r(-100.3,0,1.1,108,.015,s)}createGroundStencil(e,t,n,s,r,o,a=0){const c=document.createElement("canvas");c.width=512,c.height=256;const l=c.getContext("2d");l.clearRect(0,0,512,256),l.fillStyle=t,l.textAlign="center",l.textBaseline="middle",l.font='bold 78px "Noto Sans JP", sans-serif',l.fillText(e,256,128);const h=new dn(c);h.colorSpace=gt;const d=new ee(new wt(n,s),new Pt({map:h,transparent:!0,depthWrite:!1}));return d.rotation.x=-Math.PI/2,d.rotation.z=a,d.position.set(r,.025,o),d}buildCityMarkingsAndZones(){const e=new Pt({color:16317180}),t=new Pt({color:16096779}),n=new Pt({color:15680580,transparent:!0,opacity:.34,side:Tt}),s=new Pt({color:1096065,transparent:!0,opacity:.38,side:Tt}),r=(l,h,d,u,f=e)=>{const x=new ee(new wt(d,u),f);x.rotation.x=-Math.PI/2,x.position.set(l,.02,h),this.root.add(x)};r(0,60,172,.22,t),r(0,-60,172,.22,t),r(-94,0,.22,104,t),r(94,0,.22,104,t);for(let l=-80;l<=80;l+=7)r(l,63.5,3.2,.14),r(l,56.5,3.2,.14),r(l,-63.5,3.2,.14),r(l,-56.5,3.2,.14);for(let l=-48;l<=48;l+=7)r(97.5,l,.14,3.2),r(90.5,l,.14,3.2),r(-97.5,l,.14,3.2),r(-90.5,l,.14,3.2);const o=(l,h,d)=>{for(let u=-4;u<=4;u++)r(l,h+u*1.1,3.2,.5)};o(85,60),o(-85,60),o(85,-60),o(-85,-60),o(0,60),o(0,-60),this.root.add(this.createGroundStencil("50","#ffffff",3.4,2.6,-45,65.25,-Math.PI/2)),this.root.add(this.createGroundStencil("50","#ffffff",3.4,2.6,35,65.25,-Math.PI/2)),this.root.add(this.createGroundStencil("バス優先","#38bdf8",5.2,2.4,20,-65.25,Math.PI/2)),this.root.add(this.createGroundStencil("通学路30","#fde047",5.2,2.4,-99.25,-20,Math.PI));const a=(l,h,d,u,f,x,_,p,m)=>{const S=new ee(new wt(u*2,f*2),n);S.rotation.x=-Math.PI/2,S.position.set(h,.022,d),this.root.add(S),this.root.add(this.createGroundStencil(x,"#fecaca",f*1.7,u*1.5,h,d,_)),this.noParkingZones.push({id:l,x:h,z:d,halfW:u,halfD:f,labelJa:p,labelEn:m})};a("bus-stop-10m",42,65.25,10,1.75,"バス停10m駐停車禁止",-Math.PI/2,"バス停留所の標示板から10m以内は「駐停車禁止」です（道路交通法第44条）","Stopped within 10 meters of a Bus Stop Sign (Strict No-Stopping & No-Parking zone under Art. 44)"),a("fire-hydrant-5m",99.25,22,1.75,5,"消火栓5m駐車禁止",0,"消火栓から5m以内は「駐車禁止」です（道路交通法第45条）","Parked within 5 meters of a Fire Hydrant (Prohibited under Road Traffic Act Art. 45)"),a("crosswalk-5m",99.25,-48,1.75,5,"横断歩道5m駐停車禁止",0,"横断歩道・交差点の端から5m以内は「駐停車禁止」です（道路交通法第44条）","Stopped within 5 meters of a pedestrian crosswalk/intersection (No-Stopping zone under Art. 44)");const c=new ee(new wt(this.legalPullOverBay.halfW*2,this.legalPullOverBay.halfD*2),s);c.rotation.x=-Math.PI/2,c.position.set(this.legalPullOverBay.x,.023,this.legalPullOverBay.z),this.root.add(c),this.root.add(this.createGroundStencil("停車目標(合法エリア)","#a7f3d0",9,2.8,this.legalPullOverBay.x,this.legalPullOverBay.z,0))}buildParkedDeliveryTrucks(){const e=[{id:"truck-south",x:-18,z:65.25,rotY:-Math.PI/2,cabColor:165063,boxLabel:"宅配便 DELIVERY"},{id:"truck-north",x:25,z:-65.25,rotY:Math.PI/2,cabColor:366185,boxLabel:"引越便 EXPRESS"}];for(const t of e){const n=new qe;n.position.set(t.x,0,t.z),n.rotation.y=t.rotY;const s=new ve({color:16317180,roughness:.4}),r=new ee(new ze(2.1,2.2,4.5),s);r.position.set(0,1.5,.65),r.castShadow=!0,r.receiveShadow=!0,n.add(r);const o=new ve({color:t.cabColor,roughness:.35}),a=new ee(new ze(2,1.85,1.55),o);a.position.set(0,1.25,-2.4),a.castShadow=!0,n.add(a);const c=new ee(new ze(1.85,.72,.1),new ve({color:988970,roughness:.15}));c.position.set(0,1.65,-3.16),n.add(c);const l=new ve({color:16096779,emissive:16096779,emissiveIntensity:2.2});for(const u of[-.92,.92])for(const f of[-3.18,2.92]){const x=new ee(new ze(.18,.14,.08),l);x.position.set(u,.72,f),n.add(x)}const h=new st(.38,.38,.26,14);h.rotateZ(Math.PI/2);const d=new ve({color:1120295,roughness:.85});for(const[u,f]of[[-.95,-2.2],[.95,-2.2],[-.95,1.8],[.95,1.8]]){const x=new ee(h,d);x.position.set(u,.38,f),n.add(x)}this.root.add(n),this.parkedTrucks.push({id:t.id,x:t.x,z:t.z,halfW:3.25,halfL:1.15,hazardMats:[l]})}}buildCyclists(){const e=[{x:-75,z:66.2},{x:-26,z:66.2},{x:-22,z:63.4},{x:-14,z:63.4},{x:-10,z:66.2},{x:80,z:66.2},{x:100.2,z:48},{x:100.2,z:-48},{x:80,z:-66.2},{x:33,z:-66.2},{x:29,z:-63.4},{x:21,z:-63.4},{x:17,z:-66.2},{x:-80,z:-66.2},{x:-100.2,z:-48},{x:-100.2,z:48}],t=[2278750,16347926,3718648,15235577],n=[0,5,8,13];for(let s=0;s<4;s++){const r=n[s],o=e[r],a=(r+1)%e.length,c=e[a],l=Math.atan2(-(c.x-o.x),-(c.z-o.z)),{group:h,frontWheel:d,rearWheel:u,leftLeg:f,rightLeg:x}=this.createBicycleAndRiderMesh(t[s]);h.position.set(o.x,0,o.z),h.rotation.y=l,this.root.add(h),this.cyclists.push({group:h,frontWheel:d,rearWheel:u,leftLeg:f,rightLeg:x,waypoints:e,wpIndex:a,x:o.x,z:o.z,heading:l,speedMs:3.6+s%2*.4,pedalPhase:s*1.7})}}createBicycleAndRiderMesh(e){const t=new qe,n=new ve({color:14870768,metalness:.7,roughness:.3}),s=new ve({color:988970,roughness:.85}),r=new ve({color:e,roughness:.6}),o=new ve({color:16707722,roughness:.35}),a=new ve({color:15843965,roughness:.6}),c=new ve({color:1976635,roughness:.8}),l=new Sn(.32,.032,8,20);l.rotateY(Math.PI/2);const h=new ee(l,s);h.position.set(0,.34,-.54),t.add(h);const d=new ee(l,s);d.position.set(0,.34,.54),t.add(d);const u=new ee(new ze(.04,.04,.95),n);u.position.set(0,.68,0),t.add(u);const f=new ee(new ze(.56,.035,.035),n);f.position.set(0,.96,-.45),t.add(f);const x=new ee(new ze(.3,.48,.18),r);x.position.set(0,1.15,.08),x.rotation.x=-.35,x.castShadow=!0,t.add(x);const _=new ee(new Yt(.115,10,10),a);_.position.set(0,1.48,-.05),t.add(_);const p=new ee(new Yt(.13,12,8,0,Math.PI*2,0,Math.PI*.58),o);p.position.set(0,1.51,-.05),t.add(p);const m=v=>{const y=new qe;y.position.set(v,.88,.15);const b=new ee(new ze(.1,.58,.11),c);return b.position.y=-.26,y.add(b),t.add(y),y},S=m(-.11),M=m(.11);return{group:t,frontWheel:h,rearWheel:d,leftLeg:S,rightLeg:M}}buildCityBuildingsAndStreetFurniture(){const e=new qe;e.position.set(102.2,0,22);const t=new ve({color:14427686,roughness:.35,metalness:.3}),n=new ee(new st(.18,.22,.78,12),t);n.position.y=.39,n.castShadow=!0;const s=new ee(new Yt(.19,12,10),t);s.position.y=.78,e.add(n,s),this.root.add(e);const r=new qe;r.position.set(42,0,68.2);const o=new ee(new st(.04,.04,2.3,10),new ve({color:9741240}));o.position.y=1.15;const a=new ee(new st(.34,.34,.06,18),new ve({color:165063}));a.rotation.x=Math.PI/2,a.position.y=2.25,r.add(o,a),this.root.add(r);const c=[13358561,9741240,14870768,14078929];[[-65,78,22,14,16],[-25,78,24,12,22],[15,78,20,14,18],[65,78,26,14,20],[-65,-78,24,14,19],[-20,-78,22,14,24],[25,-78,26,14,17],[68,-78,22,14,21],[114,-25,16,24,20],[114,25,16,24,18],[-114,-25,16,24,17],[-114,25,16,24,22]].forEach(([h,d,u,f,x],_)=>{const p=new ee(new ze(u,x,f),new ve({color:c[_%c.length],roughness:.75}));p.position.set(h,x*.5,d),p.castShadow=!0,p.receiveShadow=!0,this.root.add(p)})}update(e,t,n){if(!this.root.visible)return{pedestrianDanger:!1,trafficCollision:!1};let s=!1,r=!1,o,a,c=!1,l,h;this.hazardTimer+=e;const d=Math.floor(this.hazardTimer*2.4)%2===0;for(const f of this.parkedTrucks){for(const x of f.hazardMats)x.emissiveIntensity=d?2.6:.08;Math.abs(t.x-f.x)<f.halfW+1.15&&Math.abs(t.z-f.z)<f.halfL+.85&&Math.abs(t.speedMs)>.25&&(s=!0)}for(const f of this.cyclists){const x=f.waypoints[f.wpIndex],_=x.x-f.x,p=x.z-f.z;Math.hypot(_,p)<1.8&&(f.wpIndex=(f.wpIndex+1)%f.waypoints.length);let M=Math.atan2(-_,-p)-f.heading;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;f.heading+=Math.sign(M)*Math.min(Math.abs(M),4*e);const v=-Math.sin(f.heading),y=-Math.cos(f.heading);f.x+=v*f.speedMs*e,f.z+=y*f.speedMs*e,f.group.position.set(f.x,0,f.z),f.group.rotation.y=f.heading,f.pedalPhase+=e*7.5,f.frontWheel.rotation.x-=f.speedMs*e/.32,f.rearWheel.rotation.x-=f.speedMs*e/.32,f.leftLeg.rotation.x=Math.sin(f.pedalPhase)*.45,f.rightLeg.rotation.x=-Math.sin(f.pedalPhase)*.45,Fi(t.x,t.z,f.x,f.z)<2.15&&Math.abs(t.speedMs)>1.8&&(r=!0,o="走行中の自転車に1.2m未満の危険な距離で接近・通過しました（道路交通法第18条：安全な側方間隔保持違反／左折巻き込み危険）",a="Passed within 1.2m of a moving cyclist without slowing down or changing lanes safely (Road Traffic Act Art. 18 violation)")}if(Math.abs(t.speedMs)<.15){let f=null;for(const x of this.noParkingZones)if(Math.abs(t.x-x.x)<=x.halfW&&Math.abs(t.z-x.z)<=x.halfD){f=x;break}f?(this.stopZoneHoldTimer+=e,this.stopZoneHoldTimer>1.1&&(this.stopZoneHoldTimer=0,c=!0,l=f.labelJa,h=f.labelEn)):this.stopZoneHoldTimer=0,Math.abs(t.x-this.legalPullOverBay.x)<=this.legalPullOverBay.halfW&&Math.abs(t.z-this.legalPullOverBay.z)<=this.legalPullOverBay.halfD&&(this.legalPullOverCompleted=!0)}else this.stopZoneHoldTimer=0;return{pedestrianDanger:!1,trafficCollision:s,cyclistDanger:r,cyclistLabelJa:o,cyclistLabelEn:a,noParkingViolation:c,noParkingLabelJa:l,noParkingLabelEn:h}}}function Rn(i,e,t,n,s,r,o="off"){const a=[];for(let c=0;c<=r;c++){const l=c/r,h=n+(s-n)*l;a.push({x:i+t*Math.cos(h),z:e-t*Math.sin(h),signal:c<r?o:"off"})}return a}class d_{constructor(e){ue(this,"root",new qe);ue(this,"aiCars",[]);ue(this,"pedestrians",[]);e.add(this.root),this.buildAiCars(),this.buildPedestrians()}buildAiCars(){const e=[2450411,16096779,1013358],t=[{x:-58,z:-47.75},{x:-32,z:-47.75},{x:-25,z:-47.75,signal:"right"},{x:-18,z:-44.25,signal:"right"},{x:-10,z:-44.25},{x:-2,z:-44.25,signal:"left"},{x:6,z:-47.75,signal:"left"},{x:32,z:-47.75},{x:56,z:-47.75},...Rn(62,-32,15.75,Math.PI/2,0,8),{x:77.75,z:-16},{x:77.75,z:16},...Rn(62,32,15.75,0,-Math.PI/2,8),{x:40,z:47.75},{x:22,z:47.75,signal:"right"},{x:15,z:44.25,signal:"right"},{x:4,z:44.25,signal:"left"},{x:-4,z:47.75},{x:-35,z:47.75},...Rn(-62,32,15.75,-Math.PI/2,-Math.PI,8),{x:-77.75,z:16},{x:-77.75,z:-16},...Rn(-62,-32,15.75,Math.PI,Math.PI/2,8)],n=[{x:-45,z:44.25},{x:0,z:44.25},{x:45,z:44.25},...Rn(62,32,12.25,-Math.PI/2,0,8),{x:74.25,z:16},{x:74.25,z:-16},...Rn(62,-32,12.25,0,Math.PI/2,8),{x:45,z:-44.25},{x:0,z:-44.25},{x:-45,z:-44.25},...Rn(-62,-32,12.25,Math.PI/2,Math.PI,8),{x:-74.25,z:-16},{x:-74.25,z:16},...Rn(-62,32,12.25,-Math.PI,-Math.PI/2,8)],s=[{x:-1.75,z:36},{x:-1.75,z:22},{x:-1.75,z:10.5},{x:-1.75,z:0},{x:-1.75,z:-24,signal:"left"},{x:-1.75,z:-36.5,signal:"left"},{x:-1.75,z:-41.5,signal:"left"},{x:-3.2,z:-43.5,signal:"left"},{x:-6,z:-44.25},{x:-32,z:-44.25},{x:-56,z:-44.25},...Rn(-62,-32,12.25,Math.PI/2,Math.PI,8),{x:-74.25,z:-16},{x:-74.25,z:16},...Rn(-62,32,12.25,-Math.PI,-Math.PI/2,8),{x:-45,z:44.25},{x:-18,z:44.25,signal:"left"},{x:-6,z:44.25,signal:"left"},{x:-2.6,z:43,signal:"left"},{x:-1.75,z:40}],r=[t,n,s];for(let o=0;o<r.length;o++){const a=r[o],c=a[0],l=a[1],{group:h,wheels:d,brakeLamps:u,signalLeftLamps:f,signalRightLamps:x}=this.createTrainingSedanMesh(e[o%e.length],o+2),_=Math.atan2(-(l.x-c.x),-(l.z-c.z));h.position.set(c.x,0,c.z),h.rotation.y=_,this.root.add(h),this.aiCars.push({group:h,wheels:d,brakeLamps:u,signalLeftLamps:f,signalRightLamps:x,waypoints:a,wpIndex:1,x:c.x,z:c.z,heading:_,speedMs:5,maxSpeedMs:6+o%2*.6,blinker:"off",blinkerTimer:0,stopHoldTimer:0,lastStoppedZoneId:""})}}createTrainingSedanMesh(e,t){const n=new qe,s=new ve({color:e,roughness:.32,metalness:.2}),r=new ve({color:1976635,roughness:.15,metalness:.5}),o=new ve({color:1120295,roughness:.8}),a=new ve({color:16707722,emissive:16707722,emissiveIntensity:.9}),c=new ve({color:14427686,emissive:14427686,emissiveIntensity:.25}),l=new ve({color:16096779,emissive:16096779,emissiveIntensity:.05}),h=new ve({color:16096779,emissive:16096779,emissiveIntensity:.05}),d=new ee(new ze(1.66,.56,4.25),s);d.position.y=.54,d.castShadow=!0,d.receiveShadow=!0,n.add(d);const u=new ee(new ze(1.42,.48,2.05),s);u.position.set(0,1.02,.15),u.castShadow=!0,n.add(u);const f=new ee(new ze(1.45,.38,1.88),r);f.position.set(0,1.03,.15),n.add(f);const x=document.createElement("canvas");x.width=256,x.height=128;const _=x.getContext("2d");_.fillStyle="#fef08a",_.fillRect(0,0,256,128),_.strokeStyle="#0f172a",_.lineWidth=8,_.strokeRect(4,4,248,120),_.fillStyle="#0f172a",_.font='bold 46px "Noto Sans JP", sans-serif',_.textAlign="center",_.textBaseline="middle",_.fillText(`教習車 ${t}`,128,66);const p=new dn(x);p.colorSpace=gt;const m=new ee(new ze(.68,.25,.18),new Pt({map:p}));m.position.set(0,1.38,.05),n.add(m);for(const v of[-.54,.54]){const y=new ee(new ze(.26,.12,.06),a);y.position.set(v,.58,-2.13),n.add(y);const b=new ee(new ze(.28,.12,.06),c);b.position.set(v,.6,2.13),n.add(b)}for(const v of[-2.13,2.13]){const y=new ee(new ze(.12,.11,.07),l);y.position.set(-.75,.58,v),n.add(y);const b=new ee(new ze(.12,.11,.07),h);b.position.set(.75,.58,v),n.add(b)}const S=[],M=new st(.3,.3,.2,16);M.rotateZ(Math.PI/2);for(const[v,y]of[[-.78,-1.3],[.78,-1.3],[-.78,1.3],[.78,1.3]]){const b=new ee(M,o);b.position.set(v,.3,y),n.add(b),S.push(b)}return{group:n,wheels:S,brakeLamps:[c],signalLeftLamps:[l],signalRightLamps:[h]}}buildPedestrians(){const e=[{axis:"NS",startX:-4.5,startZ:-6.2,endX:4.5,endZ:-6.2,shirtColor:15680580,initialProgress:.2},{axis:"NS",startX:4.5,startZ:6.2,endX:-4.5,endZ:6.2,shirtColor:3900150,initialProgress:.65},{axis:"EW",startX:-6.2,startZ:-4.5,endX:-6.2,endZ:4.5,shirtColor:1096065,initialProgress:.35},{axis:"EW",startX:6.2,startZ:4.5,endX:6.2,endZ:-4.5,shirtColor:16096779,initialProgress:.8},{axis:"EW",startX:12,startZ:19.8,endX:12,endZ:28.2,shirtColor:11032055,initialProgress:.15},{axis:"EW",startX:-22,startZ:41.8,endX:-22,endZ:50.2,shirtColor:15485081,initialProgress:.5}];for(const t of e){const{group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a}=this.createPedestrianMesh(t.shirtColor),c=St.lerp(t.startX,t.endX,t.initialProgress),l=St.lerp(t.startZ,t.endZ,t.initialProgress);n.position.set(c,0,l),this.root.add(n),this.pedestrians.push({group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a,axis:t.axis,startX:t.startX,startZ:t.startZ,endX:t.endX,endZ:t.endZ,progress:t.initialProgress,direction:1,waitTimer:0,walkPhase:t.initialProgress*10,x:c,z:l,isOnCrosswalk:!0})}}createPedestrianMesh(e){const t=new qe,n=new ve({color:15843965,roughness:.6}),s=new ve({color:e,roughness:.65}),r=new ve({color:1976635,roughness:.8}),o=new ve({color:2042167,roughness:.8}),a=new ee(new Yt(.13,12,10),n);a.position.y=1.56,a.castShadow=!0,t.add(a);const c=new ee(new Yt(.135,12,8,0,Math.PI*2,0,Math.PI*.55),o);c.position.y=1.58,t.add(c);const l=new ee(new ze(.32,.52,.18),s);l.position.y=1.15,l.castShadow=!0,t.add(l);const h=(_,p,m,S,M,v)=>{const y=new qe;y.position.set(M,v,0);const b=new ee(new ze(_,p,m),S);return b.position.y=-p*.5,b.castShadow=!0,y.add(b),t.add(y),y},d=h(.12,.78,.13,r,-.09,.86),u=h(.12,.78,.13,r,.09,.86),f=h(.09,.54,.1,s,-.22,1.38),x=h(.09,.54,.1,s,.22,1.38);return{group:t,leftLeg:d,rightLeg:u,leftArm:f,rightArm:x}}update(e,t,n){let s=!1,r,o,a=!1;const c=n.getRailroadState();for(const l of this.pedestrians){if(l.waitTimer>0){l.waitTimer-=e,l.isOnCrosswalk=!1,l.leftLeg.rotation.x=0,l.rightLeg.rotation.x=0,l.leftArm.rotation.x=0,l.rightArm.rotation.x=0;continue}const h=l.progress<=.06||l.progress>=.94,d=Math.hypot(l.startX,l.startZ)<10;if(h&&d){const S=n.getLightForAxis(l.axis);if(S==="green"||S==="yellow"){l.isOnCrosswalk=!1;continue}}const u=Math.hypot(l.endX-l.startX,l.endZ-l.startZ)||8,f=1.35;l.progress+=l.direction*(f*e)/u,l.walkPhase+=e*7.5,l.progress>=1?(l.progress=1,l.direction=-1,l.waitTimer=2.2):l.progress<=0&&(l.progress=0,l.direction=1,l.waitTimer=2.2),l.x=St.lerp(l.startX,l.endX,l.progress),l.z=St.lerp(l.startZ,l.endZ,l.progress),l.isOnCrosswalk=l.progress>.07&&l.progress<.93;const x=(l.endX-l.startX)*l.direction,_=(l.endZ-l.startZ)*l.direction;l.group.position.set(l.x,0,l.z),l.group.rotation.y=Math.atan2(-x,-_);const p=Math.sin(l.walkPhase)*.55;l.leftLeg.rotation.x=p,l.rightLeg.rotation.x=-p,l.leftArm.rotation.x=-p*.7,l.rightArm.rotation.x=p*.7;const m=Fi(t.x,t.z,l.x,l.z);if(l.isOnCrosswalk&&m<3.4&&Math.abs(t.speedMs)>.45){const S=l.x-t.x,M=l.z-t.z,v=t.speedMs>=0?1:-1,y=-Math.sin(t.heading)*v,b=-Math.cos(t.heading)*v;((S*y+M*b)/Math.max(.1,m)>.15||m<1.9)&&(s=!0,r="横断歩道上の歩行者の直前を通過しようとしました（道路交通法第38条：歩行者優先義務違反）",o="Failed to stop and yield to a pedestrian crossing the zebra crosswalk (Road Traffic Act Art. 38 violation)")}}for(let l=0;l<this.aiCars.length;l++){const h=this.aiCars[l];let d=h.waypoints[h.wpIndex],u=d.x-h.x,f=d.z-h.z,x=Math.hypot(u,f);x<2.1&&(h.wpIndex=(h.wpIndex+1)%h.waypoints.length,d=h.waypoints[h.wpIndex],u=d.x-h.x,f=d.z-h.z,x=Math.hypot(u,f));const _=h.waypoints[(h.wpIndex-1+h.waypoints.length)%h.waypoints.length];h.blinker=d.signal??_.signal??"off",h.blinkerTimer+=e;const p=h.blinker!=="off"&&Math.floor(h.blinkerTimer*2.6)%2===0;let S=Math.atan2(-u,-f)-h.heading;for(;S>Math.PI;)S-=Math.PI*2;for(;S<-Math.PI;)S+=Math.PI*2;h.heading+=Math.sign(S)*Math.min(Math.abs(S),4.6*e);const M=-Math.sin(h.heading),v=-Math.cos(h.heading);let y=!1;if(h.stopHoldTimer>0)h.stopHoldTimer-=e,y=!0;else for(const E of Xl){const I=h.x-E.x,U=h.z-E.z,H=I*E.dirX+U*E.dirZ,Z=-E.dirZ,X=E.dirX,Y=Math.abs(I*Z+U*X),j=M*E.dirX+v*E.dirZ;if(Y<=E.halfWidth+.8&&j>.7&&H>=-6.5&&H<=-.2)if(E.kind==="trafficLight"&&E.axis){const W=n.getLightForAxis(E.axis);(W==="red"||W==="yellow")&&(y=!0)}else E.kind==="stopSign"?h.lastStoppedZoneId!==E.id&&(y=!0,h.speedMs<.15&&(h.stopHoldTimer=1.8,h.lastStoppedZoneId=E.id)):E.kind==="railroad"&&(c.isWarningActive?y=!0:h.lastStoppedZoneId!==E.id&&(y=!0,h.speedMs<.15&&(h.stopHoldTimer=1.8,h.lastStoppedZoneId=E.id)));else h.lastStoppedZoneId===E.id&&Math.hypot(I,U)>10&&(h.lastStoppedZoneId="")}const b=Fi(h.x,h.z,t.x,t.z);b<10&&((t.x-h.x)*M+(t.z-h.z)*v)/Math.max(.1,b)>.45&&(y=!0);for(let E=0;E<this.aiCars.length;E++){if(E===l)continue;const I=this.aiCars[E],U=Fi(h.x,h.z,I.x,I.z);U<8.5&&((I.x-h.x)*M+(I.z-h.z)*v)/Math.max(.1,U)>.5&&(y=!0)}for(const E of this.pedestrians){if(!E.isOnCrosswalk&&E.progress>.08&&E.progress<.92)continue;const I=Fi(h.x,h.z,E.x,E.z);I<7.5&&((E.x-h.x)*M+(E.z-h.z)*v)/Math.max(.1,I)>.35&&(y=!0)}b<2.35&&Math.abs(t.speedMs)>.35&&(a=!0);const T=Math.abs(S)>.14,C=y?0:T?3.8:h.maxSpeedMs,w=y?8.5:3.2;h.speedMs<C?h.speedMs=Math.min(C,h.speedMs+w*e):h.speedMs=Math.max(C,h.speedMs-w*e),h.x+=M*h.speedMs*e,h.z+=v*h.speedMs*e,h.group.position.set(h.x,0,h.z),h.group.rotation.y=h.heading;for(const E of h.wheels)E.rotation.x-=h.speedMs*e/.3;for(const E of h.brakeLamps)E.emissiveIntensity=y||h.speedMs<.3?2.4:.25;for(const E of h.signalLeftLamps)E.emissiveIntensity=p&&(h.blinker==="left"||h.blinker==="hazard")?2.6:.05;for(const E of h.signalRightLamps)E.emissiveIntensity=p&&(h.blinker==="right"||h.blinker==="hazard")?2.6:.05}return{pedestrianDanger:s,pedestrianLabelJa:r,pedestrianLabelEn:o,trafficCollision:a}}}class u_{constructor(e){ue(this,"root",new qe);ue(this,"kyoshujoGroup",new qe);ue(this,"sunLight");ue(this,"sunOffset",new D(45,68,35));ue(this,"railGatePivots",[]);ue(this,"railLeftLampMats",[]);ue(this,"railRightLampMats",[]);ue(this,"trafficLamps",[]);ue(this,"waypointBeacon");ue(this,"skyBrandSprites",[]);e.background=new tt(10473727),e.fog=new Nl(10473727,95,240),this.buildCloudsAndSkyBrand(e);const t=new Ip(15660799,6057548,.85);e.add(t),this.sunLight=new Np(16775920,1.85),this.sunLight.position.copy(this.sunOffset),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048);const n=38;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=170,this.sunLight.shadow.bias=-5e-4,e.add(this.sunLight),e.add(this.sunLight.target),this.root.add(this.kyoshujoGroup),e.add(this.root),this.buildGroundAndRoads(),this.buildSCurveMesh(),this.buildHillRampMesh(),this.buildRoadMarkings(),this.buildCurbsAndPoles(),this.buildRailroadCrossing(),this.buildTrafficLights(),this.buildRoadSigns(),this.buildObstaclesAndBuildings(),this.buildTreesAndFence(),this.waypointBeacon=this.createWaypointBeacon(),this.waypointBeacon.visible=!1,this.kyoshujoGroup.add(this.waypointBeacon)}setKyoshujoVisible(e){this.kyoshujoGroup.visible=e}updateShadowFocus(e,t){const n=.037109375,s=Math.round(e/n)*n,r=Math.round(t/n)*n;this.sunLight.target.position.set(s,0,r),this.sunLight.position.set(s+this.sunOffset.x,this.sunOffset.y,r+this.sunOffset.z),this.sunLight.target.updateMatrixWorld()}updateDynamic(e,t,n){const s=e.getLightForAxis("NS"),r=e.getLightForAxis("EW");for(const a of this.trafficLamps){const c=a.axis==="NS"?s:r;a.greenMat.emissive.setHex(c==="green"?1108120:202768),a.greenMat.emissiveIntensity=c==="green"?2.2:.2,a.yellowMat.emissive.setHex(c==="yellow"?16758531:1708544),a.yellowMat.emissiveIntensity=c==="yellow"?2.2:.2,a.redMat.emissive.setHex(c==="red"?16722474:1836036),a.redMat.emissiveIntensity=c==="red"?2.2:.2}const o=e.getRailroadState();for(let a=0;a<this.railGatePivots.length;a++)this.railGatePivots[a].rotation.z=a===0?-o.barrierAngle:o.barrierAngle;for(const a of this.railLeftLampMats)a.emissive.setHex(o.flashLeftOn?16718362:2229252),a.emissiveIntensity=o.flashLeftOn?2.8:.2;for(const a of this.railRightLampMats)a.emissive.setHex(o.flashRightOn?16718362:2229252),a.emissiveIntensity=o.flashRightOn?2.8:.2;if(t&&this.kyoshujoGroup.visible){this.waypointBeacon.visible=!0;const a=$n(t.x,t.z).y;this.waypointBeacon.position.set(t.x,a+.05,t.z),this.waypointBeacon.rotation.y=n*1.4;const c=1+Math.sin(n*4)*.08;this.waypointBeacon.scale.set(c,1,c)}else this.waypointBeacon.visible=!1;for(const a of this.skyBrandSprites){const c=a.userData.angle+n*.004,l=a.userData.height+Math.sin(n*.15+c*3)*.8;a.position.set(Math.cos(c)*160,l,Math.sin(c)*160)}}buildCloudsAndSkyBrand(e){const t=new ve({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.9}),n=(S,M,v,y)=>{const b=new qe,T=[[0,0,0,5],[-4,-1,0,3.5],[4,-1,0,3.5],[-2,1.5,0,2.8],[2.5,1.5,0,2.8],[-6,-2,0,2],[6,-2,0,2]];for(const[C,w,E,I]of T){const U=new ee(new Yt(I,7,5),t);U.position.set(C,w,E),b.add(U)}b.position.set(S,M,v),b.scale.setScalar(y),e.add(b)};n(-80,48,-60,1.2),n(60,42,-90,1),n(-30,52,-110,.85),n(110,46,-70,1.15),n(10,55,-130,.95),n(-120,44,-80,1.3),n(70,50,-150,1.1);const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.font='900 150px "Arial Rounded MT Bold", "Nunito", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText("GaimenGo",s/2,r/2);const c=s/2-a.measureText("GaimenGo").width/2+a.measureText("Gaimen").width,l=a.getImageData(0,0,s,r).data,h=document.createElement("canvas");h.width=s,h.height=r;const d=h.getContext("2d");let u=27166;const f=()=>(u=u*1664525+1013904223>>>0)/4294967296,x=9;for(let S=0;S<r;S+=x)for(let M=0;M<s;M+=x){const v=Math.min(s-1,M+Math.floor(f()*x)),y=Math.min(r-1,S+Math.floor(f()*x));if(l[(y*s+v)*4+3]<128)continue;const b=11+f()*12,T=d.createRadialGradient(v,y,0,v,y,b);T.addColorStop(0,"rgba(255,255,255,0.95)"),T.addColorStop(.6,"rgba(255,255,255,0.55)"),T.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=T,d.fillRect(v-b,y-b,b*2,b*2)}d.globalCompositeOperation="source-atop";const _=d.createLinearGradient(0,r*.3,0,r*.8);_.addColorStop(0,"rgba(190,210,230,0)"),_.addColorStop(1,"rgba(170,195,220,0.45)"),d.fillStyle=_,d.fillRect(0,0,s,r),d.fillStyle="rgba(52,211,153,0.22)",d.fillRect(c,0,s-c,r),d.globalCompositeOperation="source-over";const p=new dn(h);p.colorSpace=gt;const m=new Ul({map:p,transparent:!0,opacity:.82,depthWrite:!1,fog:!1});this.skyBrandSprites=[0,1,2].map(S=>{const M=new pd(m);return M.scale.set(64,16,1),M.layers.set(1),M.userData.angle=-Math.PI/2+S*(Math.PI*2/3),M.userData.height=40+S*4,M.renderOrder=-1,e.add(M),M})}createGrassTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#5f8449",t.fillRect(0,0,256,256);for(let s=0;s<4e3;s++)t.fillStyle=s%2===0?"rgba(72,108,52,0.35)":"rgba(122,162,88,0.28)",t.fillRect(Math.random()*256,Math.random()*256,2,2);const n=new dn(e);return n.wrapS=n.wrapT=sr,n.repeat.set(36,24),n.colorSpace=gt,n}createAsphaltTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#383e45",t.fillRect(0,0,256,256);for(let s=0;s<5500;s++){const r=45+Math.floor(Math.random()*30);t.fillStyle=`rgb(${r},${r+2},${r+6})`,t.fillRect(Math.random()*256,Math.random()*256,2,2)}const n=new dn(e);return n.wrapS=n.wrapT=sr,n.repeat.set(22,22),n.colorSpace=gt,n}buildGroundAndRoads(){const e=new ve({map:this.createGrassTexture(),roughness:.95,metalness:0}),t=new ee(new wt(pi*2+40,Oi*2+40),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.kyoshujoGroup.add(t);const n=new ve({map:this.createAsphaltTexture(),roughness:.86,metalness:.05}),s=(a,c,l,h,d=.01)=>{const u=new ee(new wt(l,h),n);u.rotation.x=-Math.PI/2,u.position.set(a,d,c),u.receiveShadow=!0,this.kyoshujoGroup.add(u)};s(0,-46,124,di),s(0,46,124,di),s(-76,0,di,64),s(76,0,di,64);const r=[[-62,-32,Math.PI/2],[62,-32,0],[62,32,-Math.PI/2],[-62,32,Math.PI]];for(const[a,c,l]of r){const h=new Nn(14-vh,14+vh,24,1,l,Math.PI/2),d=new ee(h,n);d.rotation.x=-Math.PI/2,d.position.set(a,.01,c),d.receiveShadow=!0,this.kyoshujoGroup.add(d)}s(0,0,di,92,.012),s(0,0,152,di,.012);const o=wv*2;s(-48,11.75,o,16.5,.013),s(-41,18,18,o,.013),s(-34,30.25,o,24.5,.013),s(10.75,cn,14.5,ki*2,.013),s(65.25,cn,14.5,ki*2,.013),s(38,24,72.5,di,.012),s(26,30.6,3.7,6.2,.013),s(48.6,28.85,7.2,2.7,.013),s(0,51,32,3.2,.008)}buildSCurveMesh(){const t=bv,n=[],s=[],r=[];for(let l=0;l<t.length;l++){const h=t[Math.max(0,l-1)],d=t[Math.min(t.length-1,l+1)],u=d.x-h.x,f=d.z-h.z,x=Math.hypot(u,f)||1,_=f/x,p=-u/x;if(n.push(t[l].x+_*1.8,.014,t[l].z+p*1.8),n.push(t[l].x-_*1.8,.014,t[l].z-p*1.8),s.push(0,l*.25,1,l*.25),l<t.length-1){const m=l*2;r.push(m,m+1,m+2,m+1,m+3,m+2)}}const o=new vt;o.setAttribute("position",new Ze(n,3)),o.setAttribute("uv",new Ze(s,2)),o.setIndex(r),o.computeVertexNormals();const a=new ve({color:3883594,roughness:.85,side:Tt}),c=new ee(o,a);c.receiveShadow=!0,this.kyoshujoGroup.add(c)}buildHillRampMesh(){const t=nr,n=cl,s=cn-ki,r=cn+ki,o=[],a=[];for(let M=0;M<=64;M++){const v=t+(n-t)*M/64,b=$n(v,cn).y+.015;if(o.push(v,0,s),o.push(v,b,s),o.push(v,b,r),o.push(v,0,r),M<64){const T=M*4,C=(M+1)*4;a.push(T+1,T+2,C+1,T+2,C+2,C+1),a.push(T+0,T+1,C+0,T+1,C+1,C+0),a.push(T+2,T+3,C+2,T+3,C+3,C+2)}}const c=new vt;c.setAttribute("position",new Ze(o,3)),c.setIndex(a),c.computeVertexNormals();const l=[],h=[],d=[],u=[];for(let M=0;M<=64;M++){const v=t+(n-t)*M/64,y=$n(v,cn).y+.018;if(l.push(v,y,s,v,y,r),d.push(v,0,s,v,y,s,v,0,r,v,y,r),M<64){const b=M*2;h.push(b,b+1,b+2,b+1,b+3,b+2);const T=M*4;u.push(T,T+1,T+4,T+1,T+5,T+4),u.push(T+2,T+6,T+3,T+3,T+6,T+7)}}const f=new vt;f.setAttribute("position",new Ze(l,3)),f.setIndex(h),f.computeVertexNormals();const x=new ee(f,new ve({color:3883594,roughness:.86,side:Tt}));x.receiveShadow=!0,this.kyoshujoGroup.add(x);const _=new vt;_.setAttribute("position",new Ze(d,3)),_.setIndex(u),_.computeVertexNormals();const p=new ee(_,new ve({color:12239562,roughness:.9,side:Tt}));p.receiveShadow=!0,p.castShadow=!0,this.kyoshujoGroup.add(p);const m=$n(27,cn).y,S=new ee(new wt(.45,ki*1.9),new Pt({color:16777215}));S.rotation.x=-Math.PI/2,S.rotation.y=-Math.atan($n(27,cn).slopeX),S.position.set(27,m+.03,cn),this.kyoshujoGroup.add(S)}createStencilPlane(e,t,n,s,r,o,a=0){const c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.clearRect(0,0,256,256),l.fillStyle=t,l.textAlign="center",l.textBaseline="middle",l.font='bold 120px "Noto Sans JP", sans-serif',l.fillText(e,128,128);const h=new dn(c);h.colorSpace=gt;const d=new ee(new wt(n,s),new Pt({map:h,transparent:!0,depthWrite:!1}));return d.rotation.x=-Math.PI/2,d.rotation.z=a,d.position.set(r,.025,o),d}buildRoadMarkings(){const e=new Pt({color:16054266}),t=new Pt({color:15764480}),n=(o,a,c,l,h=e)=>{const d=new ee(new wt(c,l),h);d.rotation.x=-Math.PI/2,d.position.set(o,.02,a),this.kyoshujoGroup.add(d)};for(let o=-58;o<=58;o+=6)Math.abs(o)<12||(n(o,-46,2.8,.14),n(o,46,2.8,.14));for(let o=-28;o<=28;o+=6)Math.abs(o)<10||(n(-76,o,.14,2.8),n(76,o,.14,2.8));for(let o=-42;o<=42;o+=6)Math.abs(o)<18||n(0,o,.14,2.8);n(0,13.5,.16,10,t),n(0,-13.5,.16,10,t);for(let o=-70;o<=70;o+=6)Math.abs(o)<18||o>26&&o<50||n(o,0,2.8,.14);n(13.5,0,10,.16,t),n(-13.5,0,10,.16,t),n(38,0,18,.16,t);for(let o=6;o<=68;o+=6)n(o,24,2.8,.14);for(const o of Xl){const a=Math.abs(o.dirX)>.5;if(n(o.x,o.z,a?.45:o.halfWidth*1.9,a?o.halfWidth*1.9:.45),o.kind==="stopSign"){const l=Math.atan2(-o.dirX,-o.dirZ);this.kyoshujoGroup.add(this.createStencilPlane("止まれ","#ffffff",2.2,2.2,o.x-o.dirX*2.6,o.z-o.dirZ*2.6,l))}}const s=(o,a,c)=>{for(let l=-3;l<=3;l++)c?n(o,a+l*.9,2.8,.45):n(o+l*.9,a,.45,2.8)};s(0,-6.2,!1),s(0,6.2,!1),s(-6.2,0,!0),s(6.2,0,!0),s(12,24,!0),s(-22,46,!0);for(const[o,a]of[[-10,44.25],[-34,47.75],[24,22.25]]){const c=new ee(new Nn(.75,.96,4),e);c.rotation.x=-Math.PI/2,c.position.set(o,.022,a),this.kyoshujoGroup.add(c)}const r=new ee(new Nn(.9,1.15,4),e);r.rotation.x=-Math.PI/2,r.position.set(0,.022,0),this.kyoshujoGroup.add(r),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,-40,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,20,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("1","#f0a500",1.8,1.8,12,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("2","#f0a500",1.8,1.8,0,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("3","#f0a500",1.8,1.8,-12,48.1,Math.PI/2))}buildCurbsAndPoles(){const e=new ve({color:13357786,roughness:.8}),t=new ve({color:15857145,roughness:.7});for(const r of Id){const o=r.points,a=r.id.startsWith("hill-");for(let c=0;c<o.length-1;c++){const l=o[c],h=o[c+1],d=h.x-l.x,u=h.z-l.z,f=Math.hypot(d,u);if(!(f<.01))if(a)for(let _=0;_<24;_++){const p=_/24,m=(_+1)/24,S=l.x+d*p,M=l.x+d*m,v=l.z+u*p,y=l.z+u*m,b=$n(S,v).y,T=$n(M,y).y,C=Math.hypot(M-S,T-b),w=new ee(new ze(C+.04,r.height,.18),_%2===0?e:t);w.position.set((S+M)*.5,(b+T)*.5+r.height*.5,(v+y)*.5),w.rotation.z=Math.atan2(T-b,M-S),w.castShadow=!0,w.receiveShadow=!0,this.kyoshujoGroup.add(w)}else{const x=new ee(new ze(.18,r.height,f+.14),c%2===0?e:t);x.position.set((l.x+h.x)*.5,r.height*.5,(l.z+h.z)*.5),x.rotation.y=Math.atan2(d,u),x.castShadow=!0,x.receiveShadow=!0,this.kyoshujoGroup.add(x)}}}const n=new ve({color:14231078,roughness:.4}),s=new ve({color:16317180,roughness:.4});for(const r of Dd){const o=new qe;o.position.set(r.x,0,r.z);const a=5,c=r.height/a;for(let l=0;l<a;l++){const h=new ee(new st(r.radius*.65,r.radius*.65,c,10),l%2===0?n:s);h.position.y=c*(l+.5),h.castShadow=!0,o.add(h)}this.kyoshujoGroup.add(o)}}buildRailroadCrossing(){const t=new ve({color:8160657,metalness:.75,roughness:.3}),n=new ve({color:4930350,roughness:.9}),s=new ve({color:16103424,roughness:.4}),r=new ve({color:1711393,roughness:.6});for(const a of[-.7,.7]){const c=new ee(new ze(.12,.06,30),t);c.position.set(38+a,.03,0),c.receiveShadow=!0,this.kyoshujoGroup.add(c)}for(let a=-14;a<=14;a+=.9){if(Math.abs(a)<3.6)continue;const c=new ee(new ze(2.3,.05,.25),n);c.position.set(38,.025,a),this.kyoshujoGroup.add(c)}const o=[[38-3.6,-3.9],[38+3.6,3.9]];for(let a=0;a<o.length;a++){const[c,l]=o[a],h=new qe;h.position.set(c,0,l);const d=new ee(new st(.08,.09,3.4,10),s);d.position.y=1.7,d.castShadow=!0,h.add(d);for(const b of[Math.PI/4,-Math.PI/4]){const T=new ee(new ze(1.1,.16,.05),s);T.position.y=2.95,T.rotation.y=Math.PI/2,T.rotation.x=b,h.add(T)}const u=new ve({color:6293512,emissive:2229252}),f=new ve({color:6293512,emissive:2229252});this.railLeftLampMats.push(u),this.railRightLampMats.push(f);const x=new ee(new st(.11,.11,.14,12),u);x.rotation.z=Math.PI/2,x.position.set(0,2.25,-.22),h.add(x);const _=new ee(new st(.11,.11,.14,12),f);_.rotation.z=Math.PI/2,_.position.set(0,2.25,.22),h.add(_);const p=new ee(new ze(.32,.85,.32),r);p.position.set(0,.65,a===0?.35:-.35),h.add(p),new qe().position.set(0,.95,a===0?.35:-.35);const S=new qe;S.rotation.y=a===0?-Math.PI/2:Math.PI/2;const M=new ee(new ze(3.6,.08,.06),s);M.position.set(1.8,0,0),M.castShadow=!0;const v=new ee(new ze(.08,3.8,.06),s);v.position.set(0,1.9,0),v.castShadow=!0;for(let b=0;b<6;b++)if(b%2===0){const T=new ee(new ze(.09,.32,.07),r);T.position.set(0,.45+b*.6,0),v.add(T)}const y=new qe;y.position.set(0,.95,a===0?.35:-.35),y.rotation.y=Math.PI/2,y.add(v),h.add(y),this.railGatePivots.push(y),this.kyoshujoGroup.add(h)}}buildTrafficLights(){const e=new ve({color:6583435,metalness:.6,roughness:.35}),t=new ve({color:1976635,roughness:.6}),n=[{axis:"NS",x:4.5,z:-5,rotY:0},{axis:"NS",x:-4.5,z:5,rotY:Math.PI},{axis:"EW",x:5,z:4.5,rotY:-Math.PI/2},{axis:"EW",x:-5,z:-4.5,rotY:Math.PI/2}];for(const s of n){const r=new qe;r.position.set(s.x,0,s.z),r.rotation.y=s.rotY;const o=new ee(new st(.11,.13,5.4,10),e);o.position.y=2.7,o.castShadow=!0,r.add(o);const a=new ee(new st(.07,.09,4.2,8),e);a.rotation.z=Math.PI/2,a.position.set(-2,5.1,0),r.add(a);const c=new ee(new ze(1.55,.52,.36),t);c.position.set(-2.5,5.1,0),r.add(c);const l=new ve({color:413243,emissive:202768}),h=new ve({color:7877903,emissive:1708544}),d=new ve({color:8330525,emissive:1836036}),u=new st(.15,.15,.06,14),f=(x,_)=>{const p=new ee(u,x);p.rotation.x=Math.PI/2,p.position.set(-2.5+_,5.1,.19),r.add(p)};f(l,-.46),f(h,0),f(d,.46),this.trafficLamps.push({axis:s.axis,greenMat:l,yellowMat:h,redMat:d}),this.kyoshujoGroup.add(r)}}createSignTexture(e,t){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");if(s.clearRect(0,0,256,256),e==="tomare")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=14,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(32,34),s.lineTo(224,34),s.lineTo(128,214),s.closePath(),s.fillStyle="#d62828",s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.font='bold 44px "Noto Sans JP", sans-serif',s.fillText("止まれ",128,92),s.font="bold 24px sans-serif",s.fillText("STOP",128,134);else if(e==="joko")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.font='bold 42px "Noto Sans JP", sans-serif',s.fillText("徐 行",128,92),s.font="bold 20px sans-serif",s.fillText("SLOW",128,132);else if(e==="crosswalk"){s.beginPath(),s.moveTo(128,16),s.lineTo(234,92),s.lineTo(216,236),s.lineTo(40,236),s.lineTo(22,92),s.closePath(),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.fillStyle="#ffffff",s.beginPath(),s.arc(128,86,16,0,Math.PI*2),s.fill(),s.fillRect(116,108,24,48);for(let o=-2;o<=2;o++)s.fillRect(118+o*24,186,14,32)}else e==="noparking"?(s.beginPath(),s.arc(128,128,110,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(52,52),s.lineTo(204,204),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke()):e==="direction"?(s.beginPath(),s.arc(128,128,112,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.strokeStyle="#ffffff",s.fillStyle="#ffffff",s.lineWidth=18,s.lineCap="round",s.beginPath(),s.moveTo(128,200),s.lineTo(128,56),s.stroke(),s.beginPath(),s.moveTo(128,38),s.lineTo(100,74),s.lineTo(156,74),s.closePath(),s.fill(),s.beginPath(),s.moveTo(128,134),s.lineTo(64,134),s.stroke(),s.beginPath(),s.moveTo(46,134),s.lineTo(80,108),s.lineTo(80,160),s.closePath(),s.fill()):e==="40"?(s.beginPath(),s.arc(128,128,114,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.textBaseline="middle",s.font="bold 104px sans-serif",s.fillText("40",128,132)):e==="rail"?(s.save(),s.translate(128,128),s.rotate(Math.PI/4),s.fillStyle="#f5b800",s.fillRect(-84,-84,168,168),s.lineWidth=10,s.strokeStyle="#111827",s.strokeRect(-76,-76,152,152),s.restore(),s.fillStyle="#111827",s.textAlign="center",s.font='bold 34px "Noto Sans JP", sans-serif',s.fillText("踏切",128,138)):(s.fillStyle="#005bac",s.fillRect(12,56,232,144),s.lineWidth=6,s.strokeStyle="#ffffff",s.strokeRect(20,64,216,128),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font='bold 38px "Noto Sans JP", sans-serif',s.fillText(t??"",128,128));const r=new dn(n);return r.colorSpace=gt,r}buildRoadSigns(){const e=new ve({color:9741240,metalness:.6,roughness:.4}),t=(n,s,r,o,a,c=1,l=1)=>{const h=new qe;h.position.set(s,0,r),h.rotation.y=o;const d=new ee(new st(.035,.035,2.6,8),e);d.position.y=1.3,d.castShadow=!0,h.add(d);const u=this.createSignTexture(n,a),f=new ee(new wt(c,l),new Pt({map:u,transparent:!0,side:Tt}));f.position.set(0,2.35,.045),h.add(f),this.kyoshujoGroup.add(h)};t("tomare",-67.5,4.1,Math.PI/2),t("tomare",-4.1,-38.5,0),t("tomare",-24.7,-41.5,0),t("tomare",-36.5,41.5,Math.PI),t("40",-55,-50.2,-Math.PI/2),t("40",30,-50.2,-Math.PI/2),t("rail",26,-4.2,-Math.PI/2),t("rail",50,4.2,Math.PI/2),t("guide",-42.5,-4.5,0,"S字コース",1.7,1.05),t("guide",-51,4.5,Math.PI,"クランク",1.7,1.05),t("guide",16.5,-27.5,-Math.PI/2,"坂道発進",1.7,1.05),t("guide",22,28.5,-Math.PI/2,"方向変換",1.7,1.05),t("guide",43,28.5,-Math.PI/2,"縦列駐車",1.7,1.05),t("crosswalk",-21.5,41.8,Math.PI/2),t("crosswalk",12.5,19.8,-Math.PI/2),t("joko",-44.2,-3.5,0),t("joko",52,-27.5,-Math.PI/2),t("noparking",-10,-50.2,-Math.PI/2),t("direction",-4.2,8.5,0)}buildObstaclesAndBuildings(){const e=po[0];if(e){const a=new qe;a.position.set(e.x,0,e.z);const c=new ee(new ze(e.halfW*2,1.55,e.halfL*2),new ve({color:14870768,roughness:.45}));c.position.y=.92,c.castShadow=!0,a.add(c);const l=new ee(new ze(e.halfW*1.6,.52,e.halfL*1.92),new ve({color:1976635,roughness:.2,metalness:.4}));l.position.y=1.35,a.add(l);const h=new ve({color:16347926,roughness:.5});for(const d of[-2.8,2.8]){const u=new ee(new vs(.18,.55,10),h);u.position.set(d,.275,.2),u.castShadow=!0,a.add(u)}this.kyoshujoGroup.add(a)}const t=po[1];if(t){const a=new qe;a.position.set(t.x,0,t.z);const c=new ee(new ze(t.halfW*2,t.height,t.halfL*2),new ve({color:15855076,roughness:.8}));c.position.y=t.height/2,c.castShadow=!0,c.receiveShadow=!0,a.add(c);const l=new ee(new ze(t.halfW*2+.6,.5,t.halfL*2+.6),new ve({color:3359061,roughness:.7}));l.position.y=t.height+.25,a.add(l);const h=new ve({color:1981023,metalness:.5,roughness:.15});for(const _ of[2.2,5]){const p=new ee(new ze(t.halfW*1.8,1.3,.1),h);p.position.set(0,_,-t.halfL-.02),a.add(p)}const d=document.createElement("canvas");d.width=512,d.height=128;const u=d.getContext("2d");u.fillStyle="#005bac",u.fillRect(0,0,512,128),u.strokeStyle="#ffffff",u.lineWidth=8,u.strokeRect(8,8,496,112),u.fillStyle="#ffffff",u.textAlign="center",u.textBaseline="middle",u.font='bold 46px "Noto Sans JP", sans-serif',u.fillText("桜ヶ丘自動車教習所",256,66);const f=new dn(d);f.colorSpace=gt;const x=new ee(new ze(14,2.4,.4),new Pt({map:f}));x.position.set(0,t.height+1.8,-t.halfL+1),a.add(x),this.kyoshujoGroup.add(a)}const n=new qe;n.position.set(-14,0,38);const s=new ee(new st(1.1,1.4,6.5,8),new ve({color:14870768,roughness:.7}));s.position.y=3.25,s.castShadow=!0,n.add(s);const r=new ee(new st(2.3,1.9,2.2,8),new ve({color:1981023,metalness:.6,roughness:.15}));r.position.y=7.4,r.castShadow=!0,n.add(r);const o=new ee(new vs(2.6,1,8),new ve({color:3359061,roughness:.6}));o.position.y=9,n.add(o),this.kyoshujoGroup.add(n)}buildTreesAndFence(){const e=new ve({color:6045747,roughness:.9}),t=new ve({color:4157243,roughness:.85}),n=new ve({color:16037570,roughness:.8}),s=[];for(let h=-84;h<=84;h+=14)s.push([h,-55.5,Math.abs(h)%28===0]),Math.abs(h)>22&&s.push([h,55.5,!1]);for(let h=-42;h<=42;h+=14)s.push([-85.5,h,h===0]),s.push([85.5,h,h===-14]);s.push([-16,-24,!0],[14,14,!1],[62,12,!0]);for(const[h,d,u]of s){const f=new qe;f.position.set(h,0,d);const x=new ee(new st(.18,.25,2.2,7),e);x.position.y=1.1,x.castShadow=!0,f.add(x);const _=new ee(new Bl(1.75,1),u?n:t);_.position.y=3.2,_.castShadow=!0,f.add(_),this.kyoshujoGroup.add(f)}const r=new ve({color:14410474,roughness:.55}),o=new ee(new ze(178,.9,.14),r);o.position.set(0,.45,-59);const a=new ee(new ze(178,.9,.14),r);a.position.set(0,.45,59);const c=new ee(new ze(.14,.9,118),r);c.position.set(-89,.45,0);const l=new ee(new ze(.14,.9,118),r);l.position.set(89,.45,0),this.kyoshujoGroup.add(o,a,c,l)}createWaypointBeacon(){const e=new qe,t=new ee(new Nn(1.6,2.1,28),new Pt({color:958318,side:Tt,transparent:!0,opacity:.75}));t.rotation.x=-Math.PI/2,e.add(t);const n=new ee(new vs(.55,1.3,4),new ve({color:1096065,emissive:366185,emissiveIntensity:.7}));return n.rotation.x=Math.PI,n.position.y=2.8,e.add(n),e}}const fa=[{id:1,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"前方の信号が黄色の灯火に変わったときは、注意しながらそのまま進行することができる。",qEn:"When the traffic light ahead turns solid yellow, you may proceed through the intersection with caution.",answer:!1,expJa:"× 誤り：黄色の灯火は原則「止まれ」です。停止位置に近づきすぎて安全に停止できない場合のみ進行できます。",expEn:"FALSE: A solid yellow light means STOP (unless you are already so close to the stop line that you cannot stop safely)."},{id:2,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"黄色の点滅信号がある交差点では、他の交通に注意して進行することができる。",qEn:"At an intersection with a flashing yellow traffic light, you may proceed while paying attention to other traffic.",answer:!0,expJa:"○ 正しい：黄色の点滅信号は「他の交通に注意して進行できる」という意味です（一時停止の義務はありません）。",expEn:"TRUE: A flashing yellow light means proceed with caution while watching for other traffic."},{id:3,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"赤色の点滅信号では、停止位置で一時停止し、安全を確認した後に進行できる。",qEn:"At a flashing red traffic light, you must come to a complete stop at the stop line, check for safety, and then proceed.",answer:!0,expJa:"○ 正しい：赤色の点滅信号は「一時停止（止まれ）」と同じく、停止線で完全停止して左右の安全確認後に進行できます。",expEn:"TRUE: A flashing red light acts like a STOP sign (止まれ): stop completely at the stop line, check safety, and proceed."},{id:4,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"赤信号の下に右向きの青色矢印（→）が表示されているときは、右折だけでなく転回（Uターン）もできる（転回禁止場所を除く）。",qEn:"When a green right-turn arrow (→) is lit below a red signal, you may make both a right turn and a U-turn (unless U-turns are prohibited).",answer:!0,expJa:"○ 正しい：右向きの青矢印信号では、右折のほか、転回禁止標識がない限り転回（Uターン）も可能です。",expEn:"TRUE: Under Japanese Road Traffic Regulations, a green right-turn arrow permits both right turns and U-turns (unless prohibited by a No U-Turn sign)."},{id:5,chapter:"Ch.2 Road Signs (道路標識)",qJa:"赤い逆三角形の「止まれ」標識がある交差点でも、見通しが良ければ徐行して通過してよい。",qEn:'At an intersection with a red inverted-triangle "止まれ (STOP)" sign, you may roll through slowly if visibility is clear.',answer:!1,expJa:"× 誤り：「止まれ」標識では必ず停止線の直前で車輪を完全停止（0 km/h）させなければなりません。",expEn:"FALSE: You must always bring your vehicle to a complete 0 km/h dead stop before the stop line at any 止まれ sign."},{id:6,chapter:"Ch.2 Road Signs (道路標識)",qJa:"青地に赤枠で斜線1本の標識は「駐車禁止」を表し、人の乗降や5分以内の荷物の積み下ろしのための停車はできる。",qEn:'A blue circular sign with a red border and a single diagonal red slash means "No Parking", allowing brief stops for passenger drop-off or cargo loading under 5 minutes.',answer:!0,expJa:"○ 正しい：斜線1本は「駐車禁止」なので停車は可能です（バツ印2本の「駐停車禁止」では停車も禁止）。",expEn:"TRUE: A single slash is No Parking (駐車禁止), so brief stopping is permitted. A double X slash is No Parking & No Stopping (駐停車禁止)."},{id:7,chapter:"Ch.3 Road Markings (路面標示)",qJa:"中央線が黄色の実線の道路では、いかなる場合も前の車を追い越してはならない。",qEn:"On a road where the centerline is a solid yellow line, overtaking a vehicle ahead is prohibited under all circumstances.",answer:!1,expJa:"× 誤り：黄色実線の中央線は「追い越しのための右側部分はみ出し通行禁止」です。中央線を越えずに左側車線内で追い越すことは可能です。",expEn:'FALSE: A solid yellow centerline means "Do not cross into the right side to overtake." You may still overtake if you stay completely within the left side of the yellow line.'},{id:8,chapter:"Ch.3 Road Markings (路面標示)",qJa:"路面に白いひし形（◇）の標示があるときは、前方に信号機のない横断歩道または自転車横断帯があることを示している。",qEn:"A white diamond (◇) painted on the road surface warns that there is an unsignalized pedestrian or bicycle crosswalk ahead.",answer:!0,expJa:"○ 正しい：白いダイヤマーク（◇）は横断歩道・自転車横断帯の30m手前と15m手前に設置される事前予告標示です。",expEn:"TRUE: White road diamonds (◇) are painted 30m and 15m ahead of unsignalized pedestrian or bicycle crosswalks."},{id:9,chapter:"Ch.4 Lane Discipline (通行区分)",qJa:"片側3車線の道路では、最も右側の通行帯は追い越しなどのために空けておき、通常は左側の2つの車線を通行する。",qEn:"On a road with 3 lanes in your direction, the rightmost lane must be kept clear for overtaking, and ordinary driving should use the left two lanes.",answer:!0,expJa:"○ 正しい：同一方向に3つ以上の車両通行帯がある場合、最も右側の車線は追い越し等のために空けておきます。",expEn:"TRUE: On roads with 3 or more lanes in the same direction, keep the rightmost lane open for overtaking and faster traffic."},{id:10,chapter:"Ch.5 Intersections (交差点)",qJa:"交通整理の行われていない同じ道幅の交差点では、右方から来る車が優先である。",qEn:"At an uncontrolled intersection of two roads of equal width, vehicles approaching from the RIGHT have priority.",answer:!1,expJa:"× 誤り：日本は左側通行のため、同じ道幅の交差点では「左方から来る車（左方優先）」に優先権があります。",expEn:"FALSE: In Japan (left-hand traffic), at uncontrolled intersections of equal width, vehicles approaching from the LEFT have right-of-way (左方優先)."},{id:11,chapter:"Ch.5 Intersections (交差点)",qJa:"交差点で右折するときは、対向車線を直進してくる車や左折しようとする車の進行を妨げてはならない。",qEn:"When turning right at an intersection, you must yield to oncoming vehicles going straight or turning left.",answer:!0,expJa:"○ 正しい：直進車・左折車が優先です。右折車は交差点の中心のすぐ内側で待機し、対向車が通過してから右折します。",expEn:"TRUE: Oncoming straight and left-turning traffic always have priority over right-turning vehicles."},{id:12,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"交差点を左折または右折するときは、その交差点の30メートル手前の地点でウインカー（方向指示器）を出す。",qEn:"When turning left or right at an intersection, you must activate your turn signal 30 meters before the intersection.",answer:!0,expJa:"○ 正しい：右左折・転回（Uターン）の合図は30m手前、進路変更（車線変更）の合図は3秒前に出します。",expEn:"TRUE: Intersection turns and U-turns require signaling 30 meters in advance (lane changes require 3 seconds in advance)."},{id:13,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"進路変更（車線変更）をするときは、ウインカーを出すのと同時にハンドルを切ってよい。",qEn:"When changing lanes, you may begin turning the steering wheel at the exact same moment you activate your turn signal.",answer:!1,expJa:"× 誤り：進路変更は①ミラー確認→②ウインカー合図→③3秒待つ→④死角の目視確認→⑤ハンドル操作の順に行います。",expEn:"FALSE: You must check mirrors, activate your turn signal, wait 3 full seconds, check your blind spot over your shoulder, and only then change lanes."},{id:14,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"左折するときは、あらかじめできるだけ道路の左端に寄り、徐行しながら小回りで曲がる。",qEn:"When turning left, move close to the left edge of the road in advance and turn tightly at slow speed (Jokō).",answer:!0,expJa:"○ 正しい：二輪車や自転車の巻き込みを防ぐため、あらかじめ左端に寄ってから徐行で小さく左折します。",expEn:"TRUE: Moving close to the left curb in advance prevents bicycles or motorcycles from squeezing into your left blind spot (巻き込み防止)."},{id:15,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"左折しやすくするため、一度右にハンドルを振ってから左折する（あおりハンドル）のが良い。",qEn:"To make a left turn easier, it is good practice to swing the car slightly to the right before turning left.",answer:!1,expJa:"× 誤り：右に振ってから左折する「あおりハンドル」は後続車や二輪車との接触事故を招くため厳禁（減点対象）です。",expEn:"FALSE: Swinging wide to the right before turning left (あおりハンドル) is dangerous and causes immediate point deductions in the practical exam."},{id:16,chapter:"Ch.7 Speed & Slow Down (速度と徐行)",qJa:"標識や標示で最高速度が指定されていない一般道路における普通自動車の法定最高速度は、時速60キロメートルである。",qEn:"On ordinary roads where no speed limit sign is posted, the statutory maximum speed for standard passenger cars is 60 km/h.",answer:!0,expJa:"○ 正しい：一般道路の法定最高速度は自動車60 km/h、原動機付自転車（50cc以下）は30 km/hです。",expEn:"TRUE: The statutory speed limit on ordinary roads is 60 km/h for passenger cars/motorcycles and 30 km/h for 50cc mopeds."},{id:17,chapter:"Ch.7 Speed & Slow Down (速度と徐行)",qJa:"「徐行」とは、ブレーキを操作してからおおむね1メートル以内で直ちに停止できるような速度（時速10km以下目安）で進行することをいう。",qEn:'"Slow Down (徐行 / Jokō)" means driving at a speed where you can stop immediately (within approximately 1 meter, or ≤10 km/h).',answer:!0,expJa:"○ 正しい：徐行とは直ちに停止できる速度（時速10km以下、制動距離1m以内目安）のことです。",expEn:"TRUE: Jokō (徐行) is defined under Japanese law as a speed at which the vehicle can stop immediately upon braking (~10 km/h or less)."},{id:18,chapter:"Ch.7 Speed & Slow Down (速度と徐行)",qJa:"上り坂の頂上付近や、勾配の急な下り坂では徐行しなければならないが、勾配の急な上り坂では徐行の義務はない。",qEn:"You must slow down (徐行) near the top of an uphill slope and on steep downhill slopes, but not on steep uphill slopes.",answer:!0,expJa:"○ 正しい：徐行義務があるのは「上り坂の頂上付近」と「勾配の急な下り坂」です（急な上り坂の途中は徐行場所ではありません）。",expEn:"TRUE: A classic exam trap! Jokō is mandatory near hill crests (上り坂の頂上付近) and on steep descents (勾配の急な下り坂), NOT on steep ascents."},{id:19,chapter:"Ch.8 Stopping Distance (停止距離)",qJa:"車が停止するまでの「停止距離」とは、危険を感じてからブレーキが効き始めるまでの「空走距離」と、ブレーキが効いてから止まるまでの「制動距離」を合わせた距離である。",qEn:"Total stopping distance (停止距離) equals reaction distance (空走距離) plus braking distance (制動距離).",answer:!0,expJa:"○ 正しい：停止距離 ＝ 空走距離（反応時間中に走る距離）＋ 制動距離（ブレーキが効いてから止まる距離）です。",expEn:"TRUE: Stopping Distance = Reaction Distance (空走距離) + Braking Distance (制動距離)."},{id:20,chapter:"Ch.8 Stopping Distance (停止距離)",qJa:"速度が2倍になると、制動距離も2倍になる。",qEn:"When vehicle speed doubles, the braking distance (制動距離) also doubles.",answer:!1,expJa:"× 誤り：速度が2倍になると、空走距離は2倍になりますが、制動距離は速度の2乗に比例するため「4倍」になります！",expEn:"FALSE: Braking distance increases with the SQUARE of speed. Doubling your speed makes your braking distance 4 TIMES longer (and 9 times longer at 3x speed)."},{id:21,chapter:"Ch.9 Overtaking & Passing (追い越し・追い抜き)",qJa:"横断歩道や自転車横断帯とその手前30メートル以内の場所では、他の自動車や原付を追い越すことも追い抜くことも禁止されている。",qEn:"Within 30 meters before a pedestrian or bicycle crosswalk, both overtaking (changing lanes) and passing (without changing lanes) any motor vehicle are prohibited.",answer:!0,expJa:"○ 正しい：横断歩道・自転車横断帯とその手前30m以内は「追い越し」だけでなく「追い抜き」もすべて禁止です。",expEn:"TRUE: Within 30m before a crosswalk, you must not pass any moving motor vehicle—neither by changing lanes (追い越し) nor in an adjacent lane (追い抜き)."},{id:22,chapter:"Ch.9 Overtaking & Passing (追い越し・追い抜き)",qJa:"前の車が右折しようとして道路の中央に寄っているときは、その左側を通って追い越すことができる。",qEn:"When a vehicle ahead has moved toward the center of the road to make a right turn, you may pass it on its left side.",answer:!0,expJa:"○ 正しい：追い越しは原則「右側」からですが、前車が右折のために中央に寄っているときは例外として「左側」から追い越します。",expEn:"TRUE: Normally overtaking is done on the right, EXCEPT when the vehicle ahead is signaling and positioned to turn right—then you must pass on its left."},{id:23,chapter:"Ch.9 Overtaking & Passing (追い越し・追い抜き)",qJa:"前の車が他の自動車を追い越そうとしているときでも、自分の車の方が速ければ二重追い越しをしてよい。",qEn:"Even if the car ahead is already overtaking another motor vehicle, you may overtake it at the same time (double overtaking) if your car is faster.",answer:!1,expJa:"× 誤り：前車が他の自動車やトロリーバスを追い越そうとしているときの「二重追い越し」は法律で禁止されています。",expEn:"FALSE: Double overtaking (二重追い越し) when the car ahead is overtaking another motor vehicle is strictly prohibited."},{id:24,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"交差点や横断歩道の端から5メートル以内の場所は、駐車も停車も禁止（駐停車禁止）されている。",qEn:"Both parking and stopping are prohibited within 5 meters of the edge of an intersection or pedestrian crosswalk.",answer:!0,expJa:"○ 正しい：交差点・横断歩道・自転車横断帯とその端から5m以内は「駐停車禁止」です。",expEn:"TRUE: Within 5 meters of an intersection or crosswalk is a strict No-Stopping and No-Parking zone (駐停車禁止)."},{id:25,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"踏切の端から10メートル以内の場所と、バス停留所の標示板から10メートル以内の場所（運行時間中）は、駐停車禁止である。",qEn:"Within 10 meters of a railroad crossing and within 10 meters of a bus stop sign (during operating hours) are No-Stopping and No-Parking zones.",answer:!0,expJa:"○ 正しい：踏切から10m以内、および運行時間中のバス停から10m以内は「駐停車禁止」です。",expEn:"TRUE: Both parking and stopping are banned within 10m of railroad crossings and within 10m of active bus stops."},{id:26,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"消火栓から5メートル以内の場所や、人の車庫（駐車場）の出入口から3メートル以内の場所は「駐車禁止」であるが、人の乗降のための短時間の「停車」はできる。",qEn:'Within 5 meters of a fire hydrant and within 3 meters of a garage driveway are "No Parking" zones, meaning brief "Stopping" for passenger pick-up is allowed.',answer:!0,expJa:"○ 正しい：消火栓（5m以内）・車庫出入口（3m以内）・工事区域（5m以内）は「駐車禁止」なので、停車は可能です！",expEn:"TRUE: Fire hydrants (5m), garage driveways (3m), and roadworks (5m) are No-Parking (駐車禁止) zones, not No-Stopping zones."},{id:27,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"運転者が車に乗っていれば、20分以上継続して止まっていても「駐車」にはならず「停車」とみなされる。",qEn:'As long as the driver remains seated inside the car, waiting continuously for 20 minutes is considered "Stopping (停車)" rather than "Parking (駐車)".',answer:!1,expJa:"× 誤り：運転者が車内にいても、客待ちや荷待ちなどで継続的に停止（または5分を超える荷物の積み下ろし）する場合は「駐車」となります。",expEn:"FALSE: Even if the driver stays in the driver seat, waiting continuously (or cargo loading exceeding 5 minutes) is legally classified as Parking (駐車)."},{id:28,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"信号のない横断歩道を渡ろうとしている歩行者がいるときは、横断歩道の手前（停止線）で一時停止して歩行者に道を譲らなければならない。",qEn:"When a pedestrian is waiting to cross at an unsignalized crosswalk, you must come to a complete stop before the crosswalk and yield.",answer:!0,expJa:"○ 正しい：歩行者が横断中または横断しようとしているときは必ず一時停止します（違反は技能試験で一発検定中止）。",expEn:"TRUE: Failing to stop for a pedestrian crossing or about to cross a zebra crosswalk is an automatic disqualification."},{id:29,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"白い杖を持った人（目の不自由な人）や盲導犬を連れた人が道路を通行しているときは、一時停止するか徐行しなければならない。",qEn:"When passing a person carrying a white cane or accompanied by a guide dog, you must either come to a complete stop or slow down (徐行).",answer:!0,expJa:"○ 正しい：白杖・盲導犬・高齢者・児童・車いす等の通行に支障があるときは一時停止または徐行して保護します。",expEn:"TRUE: Drivers must stop or slow down (徐行) to protect pedestrians with white canes, guide dogs, wheelchairs, or young children flying solo."},{id:30,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"安全地帯に路面電車が止まっていなくても、安全地帯のそばに歩行者がいるときは徐行して通過しなければならない。",qEn:"Even if no streetcar is present at a safety zone (安全地帯), you must slow down (徐行) when passing if pedestrians are standing in the safety zone.",answer:!0,expJa:"○ 正しい：安全地帯に歩行者がいるときは、路面電車の有無にかかわらず徐行義務があります。",expEn:"TRUE: Whenever pedestrians are on a safety island (安全地帯), you must pass at slow speed (徐行), even if no streetcar is stopped there."},{id:31,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"停止している通学・通園バスのそばを通過するときは、児童・幼児が飛び出してくるおそれがあるため徐行して安全を確認する。",qEn:"When passing a stopped school or kindergarten bus, you must slow down (徐行) and check for children who might dart out.",answer:!0,expJa:"○ 正しい：乗降中の通学・通園バスの側方を通過するときは必ず徐行して安全を確認します。",expEn:"TRUE: You are legally required to slow down (徐行) when passing a stopped school/kindergarten bus unloading children."},{id:32,chapter:"Ch.12 Railway Crossings (踏切)",qJa:"踏切を通過するとき、前の車に続いて進行すれば一時停止を省略して通過することができる。",qEn:"When crossing a railroad track, if you are following directly behind another car that just stopped, you may cross without stopping yourself.",answer:!1,expJa:"× 誤り：前の車が一時停止していても、自分の車も必ず停止線手前で完全停止し、左右の安全確認を行わなければなりません。",expEn:"FALSE: Every vehicle must stop independently at the railroad stop line—you may never piggyback on the car ahead."},{id:33,chapter:"Ch.12 Railway Crossings (踏切)",qJa:"踏切内でエンストを防ぐため、踏切を通過している途中でギアチェンジ（変速）を行ってはならない。",qEn:"To prevent stalling on the tracks, you must not shift gears while crossing a railroad crossing.",answer:!0,expJa:"○ 正しい：踏切内では変速せず、発進した低いギアのまま一気に通過します。",expEn:"TRUE: Never shift gears while on railway tracks; cross in one continuous motion in your starting gear."},{id:34,chapter:"Ch.12 Railway Crossings (踏切)",qJa:"踏切の向こう側が渋滞していて自分の車が入る余地がないときは、遮断機が開いていても踏切内に進入してはならない。",qEn:"If traffic on the far side of a railroad crossing is backed up with no room for your car, you must not enter the crossing even if the barrier gates are open.",answer:!0,expJa:"○ 正しい：前方の状況により踏切内で立ち往生するおそれがあるときは、踏切の手前で待たなければなりません。",expEn:"TRUE: Never enter a railroad crossing (or intersection) if congestion on the other side could trap you on the tracks."},{id:35,chapter:"Ch.13 Emergency & Buses (緊急自動車・路線バス)",qJa:"交差点付近でサイレンを鳴らし赤色灯をつけた緊急自動車が近づいてきたときは、交差点を避けて道路の左側に寄って一時停止しなければならない。",qEn:"When an emergency vehicle with sirens and red flashing lights approaches near an intersection, you must clear the intersection, pull over to the left, and come to a complete stop.",answer:!0,expJa:"○ 正しい：交差点付近では「交差点を避けて道路の左側に寄って一時停止」、それ以外の場所では「道路の左側に寄って進路を譲る」がルールです。",expEn:"TRUE: Near an intersection, clear the intersection, move left, and STOP completely. Away from intersections, move left to yield."},{id:36,chapter:"Ch.13 Emergency & Buses (緊急自動車・路線バス)",qJa:"停留所で止まっていた路線バスが発進のウインカー合図を出したときは、急ブレーキや急ハンドルにならない限り、その発進を妨げてはならない。",qEn:"When a public transit bus at a bus stop signals to pull out, you must yield and allow it to depart unless doing so requires sudden braking or swerving.",answer:!0,expJa:"○ 正しい：発進合図を出した路線バスには進路を譲る義務があります。",expEn:"TRUE: Drivers must yield to a signaling transit bus pulling out from a bus stop."},{id:37,chapter:"Ch.14 Night & Lights (夜間・灯火・ホーン)",qJa:"夜間、対向車とすれ違うときや前の車のすぐ後ろを走行するときは、ヘッドライトを下向き（ロービーム）に切り替えなければならない。",qEn:"At night, when meeting an oncoming vehicle or following closely behind another vehicle, you must switch your headlights to low beam.",answer:!0,expJa:"○ 正しい：夜間は原則ハイビームですが、対向車とすれ違うときや前車の直後を走るときは眩惑防止のためロービームに切り替えます。",expEn:"TRUE: Switch from high beams (走行用前照灯) to low beams (すれ違い用前照灯) when oncoming traffic approaches or when following another car."},{id:38,chapter:"Ch.14 Night & Lights (夜間・灯火・ホーン)",qJa:"道を譲ってもらったときのお礼として、警音器（クラクション）を軽く鳴らすのは良いマナーであり法律でも推奨されている。",qEn:'Lightly honking the horn to say "thank you" when another driver yields to you is good manners and encouraged by law.',answer:!1,expJa:"× 誤り：警音器（ホーン）は「警音器を鳴らせ」の標識がある場所、または危険を避けるためやむを得ない場合以外は鳴らしてはいけません。",expEn:"FALSE: Under Japanese law, the horn may ONLY be used where required by a horn sign or when strictly necessary to avert immediate danger—never to say thank you."},{id:39,chapter:"Ch.15 Expressways (高速道路)",qJa:"高速自動車国道の本線車道における普通自動車の法定最高速度は時速100km、法定最低速度は時速50kmである。",qEn:"On the main through-lanes of a national expressway (where no speed sign is posted), the statutory maximum speed for a standard passenger car is 100 km/h and the minimum speed is 50 km/h.",answer:!0,expJa:"○ 正しい：高速自動車国道の本線車道では、普通車は最高100 km/h、最低50 km/hです。",expEn:"TRUE: On national expressway main lanes, the default statutory limits for standard cars are 100 km/h maximum and 50 km/h minimum."},{id:40,chapter:"Ch.15 Expressways (高速道路)",qJa:"総排気量125cc以下の普通自動二輪車や原動機付自転車は、高速道路を通行することができない。",qEn:"Motorcycles with an engine displacement of 125cc or less and 50cc mopeds are prohibited from driving on expressways.",answer:!0,expJa:"○ 正しい：高速道路を通行できる二輪車は「125ccを超える自動二輪車」のみです（125cc以下や原付は通行不可）。",expEn:"TRUE: Only motorcycles over 125cc are permitted on Japanese expressways."},{id:41,chapter:"Ch.15 Expressways (高速道路)",qJa:"高速道路で故障などのためやむを得ず路肩に駐車するときは、車の後方に停止表示器材（三角表示板など）を置かなければならない。",qEn:"If your vehicle breaks down on an expressway and you must stop on the shoulder, you must place a warning reflector triangle (停止表示器材) behind your vehicle.",answer:!0,expJa:"○ 正しい：高速道路でやむを得ず駐停車するときは、後方から見やすい位置に停止表示器材（三角表示板等）を設置する義務があります。",expEn:"TRUE: Placing a warning triangle/lamp behind a disabled vehicle on an expressway is mandatory."},{id:42,chapter:"Ch.16 Licenses & Passengers (免許・乗車・積載)",qJa:"普通自動車免許を取得してから1年未満の運転者は、車の前後に「初心運転者標識（若葉マーク）」をつけなければならない。",qEn:"Drivers who have held a standard passenger car license for less than 1 year must display the Beginner Driver Sign (Shoshinsha / Wakaba mark) on the front and rear of the car.",answer:!0,expJa:"○ 正しい：普通免許取得後1年間は初心運転者標識（若葉マーク）の表示義務があります。",expEn:"TRUE: The green-and-yellow Wakaba beginner mark is mandatory for the first year after obtaining a standard license."},{id:43,chapter:"Ch.16 Licenses & Passengers (免許・乗車・積載)",qJa:"後部座席の同乗者は、一般道路を走行するときはシートベルトを着用しなくてもよい。",qEn:"Rear-seat passengers are not required to wear seatbelts when driving on ordinary non-expressway roads.",answer:!1,expJa:"× 誤り：一般道路・高速道路を問わず、運転席・助手席・後部座席のすべての座席でシートベルト着用が義務付けられています。",expEn:"FALSE: Seatbelts are legally mandatory for ALL seats (front and rear) on both ordinary roads and expressways."},{id:44,chapter:"Ch.16 Licenses & Passengers (免許・乗車・積載)",qJa:"6歳未満の幼児を自動車に乗せて運転するときは、チャイルドシートを使用しなければならない。",qEn:"When transporting a child under 6 years of age in a passenger car, you must use a child safety seat.",answer:!0,expJa:"○ 正しい：6歳未満の幼児を乗せるときはチャイルドシートの使用が法律で義務付けられています。",expEn:"TRUE: Child safety seats are legally mandatory for children under 6 years old."},{id:45,chapter:"Ch.17 Pre-Drive & Maintenance (乗車手順・日常点検)",qJa:"運転席に乗車した後の正しい準備順序は、「①ドアロック → ②座席調整 → ③ミラー調整 → ④シートベルト着用 → ⑤エンジン始動」である。",qEn:"The proper pre-drive cockpit sequence after boarding is: 1. Lock door → 2. Adjust seat → 3. Adjust mirrors → 4. Fasten seatbelt → 5. Start engine.",answer:!0,expJa:"○ 正しい：日本の技能試験では必ず「座席（シート）→ ミラー → シートベルト → エンジン始動」の順番で行います。",expEn:"TRUE: You must adjust your seat BEFORE your mirrors and seatbelt so your eye level is fixed and the belt does not restrict seat movement."},{id:46,chapter:"Ch.17 Pre-Drive & Maintenance (乗車手順・日常点検)",qJa:"AT（オートマチック）車のエンジンをかけるときは、ギアが「P」（または「N」）にあることを確認し、右足でフットブレーキをしっかり踏んで始動する。",qEn:'When starting an automatic (AT) car, verify the gear selector is in "P" (or "N") and firmly depress the foot brake with your right foot.',answer:!0,expJa:"○ 正しい：急発進を防ぐため、必ずフットブレーキを踏み、Pレンジを確認してからエンジンを始動します。",expEn:"TRUE: Always hold the foot brake and confirm the gear is in P before starting the engine."},{id:47,chapter:"Ch.18 Physics & Hazards (自然の力と悪天候)",qJa:"カーブを曲がるときに働く「遠心力」は、速度が2倍になると4倍になるため、カーブに入る前に十分減速する必要がある。",qEn:"Because centrifugal force in a curve increases 4-fold when speed doubles, you must decelerate sufficiently before entering the curve.",answer:!0,expJa:"○ 正しい：遠心力は「速度の2乗」に比例し、カーブの半径が小さいほど大きくなります。必ずカーブの手前で減速します。",expEn:"TRUE: Centrifugal force is proportional to the square of speed (2x speed = 4x centrifugal force). Always brake BEFORE entering a curve."},{id:48,chapter:"Ch.18 Physics & Hazards (自然の力と悪天候)",qJa:"長い下り坂でフットブレーキを使いすぎると、ブレーキが過熱して効かなくなる「フェード現象」や「ベーパーロック現象」が起きることがあるため、エンジンブレーキを併用する。",qEn:"Overusing the foot brake on a long downhill slope can overheat the brakes (causing brake fade or vapor lock), so you should use engine braking in combination.",answer:!0,expJa:"○ 正しい：長い下り坂では低速ギア（2やLなど）に落としてエンジンブレーキを活用します。",expEn:"TRUE: Shift to a lower gear and use engine braking on long descents to prevent brake fade (フェード現象) and vapor lock (ベーパーロック現象)."},{id:49,chapter:"Ch.19 Alcohol, Phones & Accidents (飲酒・スマホ・事故対応)",qJa:"少量のアルコール（ビール1杯程度）であれば、顔が赤くならず気分も普段通りなら運転してよい。",qEn:"If you only drank a small amount of alcohol (such as one glass of beer) and feel completely normal, you are allowed to drive.",answer:!1,expJa:"× 誤り：日本では飲酒運転はゼロ・トレランス（絶対禁止）です。わずか一口でも酒気帯び・酒酔い運転として厳罰に処されます。",expEn:"FALSE: Japan enforces strict zero-tolerance for drinking and driving. Even a single sip of alcohol before driving is a serious criminal offense."},{id:50,chapter:"Ch.19 Alcohol, Phones & Accidents (飲酒・スマホ・事故対応)",qJa:"交通事故を起こしたときは、まず負傷者の救護と道路上の危険防止措置を行い、その後に警察官（110番）へ報告しなければならない。",qEn:"If you are involved in a traffic accident, you must first stop, aid any injured persons, take measures to prevent secondary road hazards, and then report the accident to the police (110).",answer:!0,expJa:"○ 正しい：事故発生時の義務は①運転停止 → ②負傷者の救護（119番） → ③危険防止措置 → ④警察への報告（110番）です。",expEn:"TRUE: The mandatory order after an accident is: 1. Stop driving → 2. Aid the injured (call 119) → 3. Prevent further road danger → 4. Report to Police (call 110)."}];class f_{constructor(){ue(this,"answers",new Map);ue(this,"submitted",!1)}reset(){this.answers.clear(),this.submitted=!1}render(e,t){var l,h;const n=t==="ja",s=fa.length,r=this.answers.size;let o=0;for(const d of fa)this.answers.get(d.id)===d.answer&&o++;const a=o>=45;e.innerHTML=`
      <div class="wx-header-bar">
        <div>
          <strong>${n?"📝 2025年10月新制度 外免切替 学科模擬試験（全50問 ／ 45問以上 [90%] で合格）":"📝 Oct 2025 New Format Gaimen Kirikae Written Mock Exam (50 Questions · 45/50 [90%] to Pass)"}</strong>
          <div style="font-size:12px;color:#93c5fd;margin-top:2px;">
            ${this.submitted?n?`採点結果: ${o} / ${s} 問正解 (${Math.round(o/s*100)}%) — ${a?"🎉 合格 (PASSED!)":"❌ 不合格 (45問以上で合格)"}`:`Final Score: ${o} / ${s} (${Math.round(o/s*100)}%) — ${a?"🎉 PASSED (>= 90%)":"❌ FAILED (Need 45/50)"}`:n?`回答済み: ${r} / ${s} 問 （各問題の ○ または × をクリックすると即座に解説が表示されます）`:`Answered: ${r} / ${s} (Click ○ True or × False on each question for instant feedback)`}
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <button id="wxGradeAllBtn" type="button" class="startDriving" style="padding:8px 14px;border-radius:9px;">
            ${n?"📊 50問採点する (Grade Exam)":"📊 Grade 50 Questions"}
          </button>
          <button id="wxResetBtn" type="button" class="action-btn" style="padding:8px 12px;border-radius:9px;">
            ${n?"🔄 リセット":"🔄 Reset"}
          </button>
        </div>
      </div>
      <div id="wxQuestionsList" class="wx-questions-list"></div>
    `;const c=e.querySelector("#wxQuestionsList");for(const d of fa){const u=this.answers.get(d.id),f=u!==void 0,x=f&&u===d.answer,_=document.createElement("div");_.className=`wx-q-card ${f?x?"answered-correct":"answered-wrong":""}`,_.innerHTML=`
        <div class="wx-q-top">
          <span class="wx-q-num">Q${d.id}</span>
          <span class="wx-q-chap">${d.chapter}</span>
          ${f?`<span class="wx-q-badge ${x?"pass":"fail"}">${x?n?"⭕ 正解":"⭕ Correct":n?"❌ 不正解":"❌ Incorrect"}</span>`:""}
        </div>
        <p class="wx-q-ja">${d.qJa}</p>
        <p class="wx-q-en">${d.qEn}</p>
        <div class="wx-q-btns">
          <button type="button" class="wx-ans-btn ${u===!0?"selected":""}" data-qid="${d.id}" data-ans="true">
            ⭕ True (正しい / ○)
          </button>
          <button type="button" class="wx-ans-btn ${u===!1?"selected":""}" data-qid="${d.id}" data-ans="false">
            ❌ False (誤り / ×)
          </button>
        </div>
        <div class="wx-q-exp" ${f||this.submitted?"":"hidden"}>
          <strong>${n?d.expJa:d.expEn}</strong>
          <div style="font-size:11.5px;color:#cbd5e1;margin-top:2px;">${n?d.expEn:d.expJa}</div>
        </div>
      `,c.append(_)}e.querySelectorAll(".wx-ans-btn").forEach(d=>{d.addEventListener("click",()=>{const u=Number(d.dataset.qid),f=d.dataset.ans==="true";this.answers.set(u,f),this.render(e,t)})}),(l=e.querySelector("#wxGradeAllBtn"))==null||l.addEventListener("click",()=>{this.submitted=!0,this.render(e,t)}),(h=e.querySelector("#wxResetBtn"))==null||h.addEventListener("click",()=>{this.reset(),this.render(e,t)})}}const p_=new f_,m_=[{id:"tomare",titleJa:"一時停止 (止まれ)",titleEn:"Stop (Tomare / 止まれ)",descJa:"停止線の直前で車輪を完全に停止（0 km/h・約2秒）させ、左右の安全確認を行わなければなりません。徐行で通過すると一発検定中止（指定場所一時不停止）となります。",descEn:"Mandatory complete 0.0 km/h stop before the white stop line, followed by distinct Left & Right head checks. Rolling stops cause immediate exam failure.",draw:(i,e,t)=>{i.beginPath(),i.moveTo(12,16),i.lineTo(e-12,16),i.lineTo(e/2,t-14),i.closePath(),i.fillStyle="#d62828",i.fill(),i.lineWidth=6,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.textAlign="center",i.font='bold 22px "Noto Sans JP", sans-serif',i.fillText("止まれ",e/2,48),i.font="bold 13px sans-serif",i.fillText("STOP",e/2,68)}},{id:"joko",titleJa:"徐行 (Slow Down)",titleEn:"Slow Down (Jokō / 徐行)",descJa:"ブレーキ操作から1m以内（時速10km/h以下目安）で直ちに停止できる速度で進行します。見通しの悪い交差点、曲がり角、上り坂の頂上付近、勾配の急な下り坂では徐行義務があります。",descEn:"Drive at a speed where you can stop immediately (within 1 meter / ≤ 10 km/h). Mandatory at blind intersections, road corners, hill crests, and steep descents.",draw:(i,e,t)=>{i.beginPath(),i.moveTo(14,18),i.lineTo(e-14,18),i.lineTo(e/2,t-16),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.font='bold 20px "Noto Sans JP", sans-serif',i.fillText("徐 行",e/2,48),i.font="bold 11px sans-serif",i.fillText("SLOW",e/2,66)}},{id:"speed40",titleJa:"最高速度 (40 km/h)",titleEn:"Maximum Speed Limit (40 km/h)",descJa:"指定された最高速度を超えて運転してはいけません。標識がない一般道路の法定最高速度は自動車60km/h、原付30km/hです。",descEn:"Do not exceed 40 km/h. Where no speed sign is posted on ordinary roads, the statutory limit is 60 km/h for cars/motorcycles and 30 km/h for mopeds.",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=11,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.textBaseline="middle",i.font="bold 42px sans-serif",i.fillText("40",e/2,t/2+2)}},{id:"crosswalk",titleJa:"横断歩道 (歩行者優先)",titleEn:"Pedestrian Crosswalk (横断歩道)",descJa:"前方に横断歩道があることを示します。手前30mと15mには路面ダイヤ（◇）標示があります。歩行者が渡っている・渡ろうとしている時は必ず停止線手前で一時停止します（違反は一発検定中止）。",descEn:"Indicates a pedestrian crosswalk ahead (preceded by ◇ road diamonds at 30m and 15m). You MUST stop whenever a pedestrian is crossing or waiting to cross.",draw:(i,e,t)=>{i.beginPath(),i.moveTo(e/2,10),i.lineTo(e-14,42),i.lineTo(e-20,t-12),i.lineTo(20,t-12),i.lineTo(14,42),i.closePath(),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.beginPath(),i.arc(e/2,38,7,0,Math.PI*2),i.fill(),i.fillRect(e/2-5,47,10,20);for(let n=-2;n<=2;n++)i.fillRect(e/2-3+n*11,74,6,14)}},{id:"railroad",titleJa:"踏切あり (警戒標識)",titleEn:"Railroad Crossing Ahead (踏切あり)",descJa:"前方に踏切があることを警告する黄色ダイヤ標識。踏切手前では必ず完全停止し、窓を開けて目と耳で左右の安全を確認し、踏切内では変速（ギアチェンジ）せずに通過します。",descEn:"Yellow warning diamond indicating a railway crossing ahead. Stop completely before the stop line, open window to listen, look Left & Right, and cross without shifting gears.",draw:(i,e,t)=>{i.save(),i.translate(e/2,t/2),i.rotate(Math.PI/4),i.fillStyle="#f5b800",i.fillRect(-32,-32,64,64),i.lineWidth=4,i.strokeStyle="#111827",i.strokeRect(-28,-28,56,56),i.restore(),i.fillStyle="#111827",i.textAlign="center",i.textBaseline="middle",i.font='bold 17px "Noto Sans JP", sans-serif',i.fillText("踏切",e/2,t/2+2)}},{id:"noEntry",titleJa:"車両進入禁止 (一方通行出口)",titleEn:"No Entry for Vehicles (車両進入禁止)",descJa:"一方通行の出口などに設置され、この標識の方向からの車両の進入を全面禁止します。",descEn:"Prohibits vehicles from entering from this direction (commonly placed at the exit of a one-way street).",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#d62828",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.fillRect(e/2-28,t/2-8,56,16)}},{id:"noParking",titleJa:"駐車禁止 ／ 駐停車禁止",titleEn:"No Parking (駐車禁止) vs No Stopping (駐停車禁止)",descJa:"斜線1本は「駐車禁止」（5分以内の荷物の積み下ろしや人の乗降などの停車は可）。バツ印（×）2本は「駐停車禁止」（駐車も停車も両方禁止）。",descEn:"Single red slash = No Parking (brief stopping for passenger pick-up or <5 min cargo loading is allowed). Double X slash = No Parking AND No Stopping.",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.beginPath(),i.moveTo(22,22),i.lineTo(e-22,t-22),i.stroke()}},{id:"direction",titleJa:"指定方向外進行禁止",titleEn:"Mandatory Direction (指定方向外進行禁止)",descJa:"青丸に白矢印の規制標識。矢印の方向（この例では直進と左折）以外の進行（右折）を禁止します。",descEn:"Blue circular regulatory sign: Vehicles may ONLY proceed in the directions shown by the white arrows (here: Straight or Left only; Right turn prohibited).",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.strokeStyle="#ffffff",i.fillStyle="#ffffff",i.lineWidth=7,i.beginPath(),i.moveTo(e/2,76),i.lineTo(e/2,26),i.stroke(),i.beginPath(),i.moveTo(e/2,18),i.lineTo(e/2-10,32),i.lineTo(e/2+10,32),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e/2,52),i.lineTo(26,52),i.stroke(),i.beginPath(),i.moveTo(18,52),i.lineTo(32,42),i.lineTo(32,62),i.closePath(),i.fill()}}];function Gd(i,e,t){const n=t==="ja";if(e==="predrive"){i.innerHTML=`
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
    `;return}if(e==="compound"){i.innerHTML=`
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
    `;return}if(e==="road"){i.innerHTML=`
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
    `;return}if(e==="signs"){i.innerHTML=`
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${n?"🪧 日本の道路標識・標示ビジュアル図鑑（試験頻出8選）":"🪧 Visual Encyclopedia of Japanese Road Signs & Markings"}</strong>
          <p>${n?"規制標識（赤・青の丸や逆三角形）、警戒標識（黄色のひし形）、指示標識（青い五角形・四角形）の意味を正確に区別しましょう。":"Master the key Regulatory (Red/Blue circles & inverted triangles), Warning (Yellow diamonds), and Indication (Blue pentagon/square) signs tested in Japan."}</p>
        </div>
        <div id="rbSignsGrid" class="rb-signs-grid"></div>
      </div>
    `;const s=i.querySelector("#rbSignsGrid");for(const r of m_){const o=document.createElement("div");o.className="rb-sign-card";const a=document.createElement("canvas");a.width=104,a.height=104,a.className="rb-sign-canvas",r.draw(a.getContext("2d"),104,104);const c=document.createElement("div");c.innerHTML=`
        <h4>${n?r.titleJa:r.titleEn}</h4>
        <small style="color:#94a3b8;display:block;margin-bottom:4px;">${n?r.titleEn:r.titleJa}</small>
        <p>${n?r.descJa:r.descEn}</p>
      `,o.append(a,c),s.append(o)}return}if(e==="mock50"){p_.render(i,t);return}i.innerHTML=`
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
  `}const Ss=document.getElementById("simCanvas"),un=new yv({canvas:Ss,antialias:!0,powerPreference:"high-performance"});un.setPixelRatio(Math.min(2,window.devicePixelRatio||1));un.setSize(window.innerWidth,window.innerHeight);un.shadowMap.enabled=!0;un.shadowMap.type=Gh;un.outputColorSpace=gt;const En=new Jf,_i=new u_(En),bh=new d_(_i.kyoshujoGroup),Wi=new h_(En),jt=new l_(En),mn=new c_(En),qn=new dl,qt=new Iv,rt=new Mv,Wd=new Sv,Pe=kv(),g_=window.matchMedia("(hover: none) and (pointer: coarse)").matches;g_&&(Pe.showTouchControls=!0);const Lt=new a_(Ss,window.innerWidth/window.innerHeight);Lt.setMirrorQuality(Pe.mirrorQuality,null);let Xi="startBay",Dt="kyoshujo",gn="kyoshujo-3d",Mt=null,Bi=1.35,go=17,yi=!1,xo=1,$l=0,Yl=0,vo=!1,K=Fd(Ms.startBay.x,Ms.startBay.z,Ms.startBay.heading,Pe.vehicleKind,Pe.transmission),bn=Vd(Pe.vehicleKind);En.add(bn.root);Lt.setMode(Pe.cameraMode,K,bn);rt.setVolume(Pe.masterVolume,Pe.muted);const x_=document.getElementById("ui"),Xd=document.getElementById("uiToggle"),Zl=Array.from(document.querySelectorAll(".quickViewBtn[data-view-target]")),wh=document.getElementById("mirrorHud"),v_=document.getElementById("mirrorLeft"),__=document.getElementById("mirrorCenter"),y_=document.getElementById("mirrorRight"),M_=document.getElementById("cockpitSignalHud"),S_=document.getElementById("cockpitLampLeft"),E_=document.getElementById("cockpitLampRight"),sn=document.getElementById("miniMap"),jl=document.getElementById("miniMapClose"),b_=document.getElementById("speedVignette"),w_=document.getElementById("speedBlur"),T_=document.getElementById("wheelHudDial"),A_=document.getElementById("speed"),R_=document.getElementById("gear"),C_=document.getElementById("viewMode"),P_=document.getElementById("position"),L_=document.getElementById("heading"),I_=document.getElementById("steerAngle"),D_=document.getElementById("signalStatusBox"),k_=document.getElementById("signalStatus"),Th=document.getElementById("hudScore"),N_=document.getElementById("hudModePill"),Js=document.getElementById("hudDirective"),pa=document.getElementById("violationToasts"),Ah=document.getElementById("resetToast"),U_=document.getElementById("stallBanner"),Kl=document.getElementById("mobileControls");Kl.hidden=!Pe.showTouchControls;const F_={FL:document.getElementById("wheelFL"),FR:document.getElementById("wheelFR"),RL:document.getElementById("wheelRL"),RR:document.getElementById("wheelRR")},ul=document.getElementById("accelCurve"),O_=document.getElementById("accelCurveValue"),B_=document.getElementById("accelCurveLine"),Qr=document.getElementById("accelCurveGuideX"),eo=document.getElementById("accelCurveGuideY"),Rh=document.getElementById("accelCurveDot"),z_=document.getElementById("accelCurveInputValue"),H_=document.getElementById("accelCurveOutputValue"),fn={left:32,right:188,top:20,bottom:108,samples:32};function qd(i,e=0){Bi=St.clamp(i,.8,1.8),ul.value=String(Math.round(Bi*100)),O_.textContent=Bi.toFixed(2);const t=[];for(let n=0;n<=fn.samples;n++){const s=n/fn.samples,r=Math.pow(s,Bi),o=St.lerp(fn.left,fn.right,s),a=St.lerp(fn.bottom,fn.top,r);t.push(`${o.toFixed(1)},${a.toFixed(1)}`)}B_.setAttribute("points",t.join(" ")),Jd(e)}function Jd(i){const e=St.clamp(i,0,1),t=Math.pow(e,Bi),n=St.lerp(fn.left,fn.right,e),s=St.lerp(fn.bottom,fn.top,t);Qr.setAttribute("x1",n.toFixed(1)),Qr.setAttribute("y1",String(fn.bottom)),Qr.setAttribute("x2",n.toFixed(1)),Qr.setAttribute("y2",s.toFixed(1)),eo.setAttribute("x1",String(fn.left)),eo.setAttribute("y1",s.toFixed(1)),eo.setAttribute("x2",n.toFixed(1)),eo.setAttribute("y2",s.toFixed(1)),Rh.setAttribute("cx",n.toFixed(1)),Rh.setAttribute("cy",s.toFixed(1)),z_.textContent=`${Math.round(e*100)}%`,H_.textContent=`${Math.round(t*100)}%`}let Ps=!0;function Kt(i){Ps=i,x_.classList.toggle("collapsed",i);const e=Pe.locale==="ja";Xd.textContent=i?e?"メニューを表示":"Show Menu":e?"メニューを隠す":"Hide Menu"}Xd.addEventListener("click",()=>{rt.unlock(),Kt(!Ps)});document.getElementById("startDrivingBtn").addEventListener("click",()=>{rt.unlock(),Kt(!0),Ss.focus({preventScroll:!0})});let Ch=0;function V_(){const i=Pe.locale==="ja";document.getElementById("resetToastText").textContent=i?"スタート地点に戻りました。もう一度！":"Back to the start — try again!",Ah.classList.add("visible"),window.clearTimeout(Ch),Ch=window.setTimeout(()=>Ah.classList.remove("visible"),1800)}const ma=["chase","cockpit","instructor","hood","orbit"];function Ql(i){Pe.cameraMode=i,si(Pe),Lt.setMode(i,K,bn),Zl.forEach(r=>{r.classList.toggle("is-active",r.dataset.viewTarget===i)});const e=i==="orbit",t=i==="cockpit"||i==="instructor";wh.style.display=e?"none":t?"block":"flex",wh.classList.toggle("cockpit-layout",t),M_.classList.toggle("is-visible",t);const n=Pe.locale==="ja",s={chase:n?"後方視点":"Chase View",cockpit:n?"運転席 (右ハンドル)":"Cockpit View",instructor:n?"助手席・検定員視点":"Instructor Seat View",hood:n?"ボンネット":"Hood View",orbit:n?"自由カメラ":"Free Orbit"};C_.textContent=s[i]}function $d(){const i=ma.indexOf(Lt.getMode());Ql(ma[(i+1)%ma.length])}Zl.forEach(i=>{i.addEventListener("click",()=>{rt.unlock();const e=i.dataset.viewTarget;e&&Ql(e)})});document.getElementById("viewBtn").addEventListener("click",()=>{rt.unlock(),$d()});const Ln=document.getElementById("mapPreset"),Ls=document.getElementById("mapWidth"),fl=document.getElementById("mapScale"),G_=document.getElementById("mapScaleValue");function mr(i){const e=Math.round(i);Ls.value=String(e),fl.value=String(e),G_.textContent=`${e} m`}function Mi(i,e,t,n){K=Fd(i,e,t,Pe.vehicleKind,Pe.transmission),qt.reset(n,K),document.getElementById("examResultModal").hidden=!0,document.getElementById("violationFreezeOverlay").hidden=!0,ii=!1,In.length=0,In.push({x:i,z:e,heading:t,gear:K.gear}),gr(),Lt.setMode(Lt.getMode(),K,bn)}function Si(i,e="practice"){Xi=i,gn="kyoshujo-3d",Ln.value="kyoshujo-3d",Dt="kyoshujo",_i.setKyoshujoVisible(!0),Wi.setVisible(!1),jt.setVisible(!1),mr(pi*2);const t=Ms[i];Mi(t.x,t.z,t.heading,e)}function ec(){gn="public-road-3d",Ln.value="public-road-3d",Dt="publicRoad",_i.setKyoshujoVisible(!1),Wi.setVisible(!0),jt.setVisible(!1),mr(240);const i=Wi.getStartPose();Mi(i.x,i.z,i.heading,"practice")}function wo(i){if(i==="kyoshujo-3d"){Si(Xi,"practice");return}if(i==="public-road-3d"){ec();return}if(i==="custom"&&Mt){gn="custom",Dt="custom",_i.setKyoshujoVisible(!1),Wi.setVisible(!1),jt.setVisible(!0),mr(Mt.mapWidth),Mi(Mt.startX,Mt.startZ,Mt.startHeading,"practice");return}const e=mo.find(t=>t.id===i);e&&(gn=e.id,Ln.value=e.id,Dt="custom",jt.loadProceduralTestCenter(e),_i.setKyoshujoVisible(!1),Wi.setVisible(!1),jt.setVisible(!0),mr(e.mapWidth),Mi(e.startX,e.startZ,e.startHeading,"practice"))}function To(){rt.unlock(),mn.resetProgress();const i=mn.getStartPose();mn.hasRoute()&&i?Mi(i.x,i.z,i.heading,"practice"):Dt==="publicRoad"?ec():gn==="kyoshujo-3d"?Si(Xi,qt.getMode()):wo(gn),V_()}document.getElementById("resetBtn").addEventListener("click",To);document.getElementById("quickResetBtn").addEventListener("click",To);function Ao(){const i=Pe.locale==="ja";Ln.innerHTML="";for(const s of mo){const r=document.createElement("option");r.value=s.id,r.textContent=i?`${s.nameJa} (${s.nameEn})`:`${s.nameEn} (${s.nameJa})`,Ln.append(r)}const e=document.createElement("option");if(e.value="public-road-3d",e.textContent=i?"🛣️ 3D 路上教習・本免コース（自転車・駐車トラック・駐停車禁止テスト）":"🛣️ Stage 2: 3D Public Road (Cyclists, Parked Trucks & No-Parking Zones)",Ln.append(e),Mt){const s=document.createElement("option");s.value="custom",s.textContent=i?`カスタム地図 / Custom (${Mt.fileName})`:`Custom Map / カスタム (${Mt.fileName})`,Ln.append(s)}Ln.value=gn;const t=document.getElementById("stationGrid");t.innerHTML="";for(const s of Tv){const r=zd[s],o=document.createElement("button");o.type="button",o.className="station-chip";const a=i?`${r.titleJa} · ${r.titleEn}`:`${r.titleEn} · ${r.titleJa}`,c=i?r.descJa:r.descEn;o.innerHTML=`<strong>${a}</strong><span>${c}</span>`,o.addEventListener("click",()=>{rt.unlock(),Si(s,"practice"),Kt(!0)}),t.append(o)}const n=document.getElementById("courseQuickList");n.innerHTML="";for(const s of mo){const r=document.createElement("li"),o=document.createElement("button");o.type="button",o.innerHTML=`<strong>${i?s.nameJa:s.nameEn}</strong><small>${i?s.nameEn:s.nameJa}</small>`,o.addEventListener("click",()=>{rt.unlock(),wo(s.id),Kt(!0)}),r.append(o),n.append(r)}}Ln.addEventListener("change",()=>{rt.unlock(),wo(Ln.value)});document.getElementById("modePracticeBtn").addEventListener("click",()=>{rt.unlock(),qt.reset("practice",K),Kt(!0)});document.getElementById("modeExamBtn").addEventListener("click",()=>{rt.unlock(),Si("startBay","exam"),Kt(!0)});const pl=document.getElementById("vehicleType"),ml=document.getElementById("transmissionMode"),Ph=document.getElementById("maxSpeed"),W_=document.getElementById("maxSpeedValue"),gl=document.getElementById("masterVolume"),Yd=document.getElementById("masterVolumeValue"),xl=document.getElementById("steeringSensitivity"),Zd=document.getElementById("steeringSensitivityValue"),vl=document.getElementById("autoCenterSteering"),_l=document.getElementById("renderQuality"),yl=document.getElementById("settingTouchControls");pl.value=Pe.vehicleKind;ml.value=Pe.transmission;gl.value=String(Math.round(Pe.masterVolume*100));Yd.textContent=`${Math.round(Pe.masterVolume*100)}%`;xl.value=String(Math.round(Pe.steeringSensitivity*100));Zd.textContent=`${Pe.steeringSensitivity.toFixed(2)}x`;vl.checked=Pe.autoCenterSteering;_l.value=Pe.mirrorQuality;yl.checked=Pe.showTouchControls;qd(Bi,0);function jd(){En.remove(bn.root),bn=Vd(Pe.vehicleKind),En.add(bn.root),Lt.setMode(Lt.getMode(),K,bn),K.transmission=Pe.transmission,K.gear=Pe.transmission==="AT"?"D":"1",K.stalled=!1}pl.addEventListener("change",()=>{Pe.vehicleKind=pl.value,si(Pe),jd()});ml.addEventListener("change",()=>{Pe.transmission=ml.value,si(Pe),jd()});Ph.addEventListener("input",()=>{go=Number(Ph.value),W_.textContent=`${go} m/s`});gl.addEventListener("input",()=>{Pe.masterVolume=Number(gl.value)/100,Yd.textContent=`${Math.round(Pe.masterVolume*100)}%`,rt.setVolume(Pe.masterVolume,Pe.muted),si(Pe)});xl.addEventListener("input",()=>{Pe.steeringSensitivity=Number(xl.value)/100,Zd.textContent=`${Pe.steeringSensitivity.toFixed(2)}x`,si(Pe)});vl.addEventListener("change",()=>{Pe.autoCenterSteering=vl.checked,si(Pe)});_l.addEventListener("change",()=>{Pe.mirrorQuality=_l.value,Lt.setMirrorQuality(Pe.mirrorQuality,bn),si(Pe)});yl.addEventListener("change",()=>{Pe.showTouchControls=yl.checked,Kl.hidden=!Pe.showTouchControls,si(Pe)});ul.addEventListener("input",()=>{qd(Number(ul.value)/100,0)});const Lh=document.getElementById("mapInput");Lh.addEventListener("change",()=>{var t;const i=(t=Lh.files)==null?void 0:t[0];if(!i)return;const e=new FileReader;e.onload=async()=>{const n=String(e.result),s=Math.max(40,Number(Ls.value)||350),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Mt=r,await jt.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await yr(r),gn="custom",Ao(),wo("custom"),Kt(!0)},e.readAsDataURL(i)});const Kd=i=>{const e=Math.max(40,Math.min(1500,i));mr(e),Dt==="custom"&&(jt.setWidth(e),Mt&&(Mt.mapWidth=e,yr(Mt)))};Ls.addEventListener("input",()=>Kd(Number(Ls.value)||180));fl.addEventListener("input",()=>Kd(Number(fl.value)||180));document.getElementById("setSpawnBtn").addEventListener("click",()=>{Mt&&gn==="custom"?(Mt.startX=K.x,Mt.startZ=K.z,Mt.startHeading=K.heading,yr(Mt)):Ms[Xi]={id:Xi,x:K.x,z:K.z,heading:K.heading},rt.playClick(740,.04,.16)});document.getElementById("copyMapJsonBtn").addEventListener("click",async()=>{const i=JSON.stringify({course:gn,mapWidth:Number(Ls.value)||180,maxSpeed:go,startPose:{x:Number(K.x.toFixed(1)),z:Number(K.z.toFixed(1)),heading:Number(K.heading.toFixed(6))}},null,2);try{await navigator.clipboard.writeText(i)}catch{}});const Qd=document.getElementById("firstRunHint");document.getElementById("firstRunHintClose").addEventListener("click",()=>{Qd.hidden=!0});function _o(i){yi=i,i&&(xo=1,$l=0,Yl=0),sn.classList.toggle("expanded",i),sn.classList.remove("is-panning"),document.body.classList.toggle("minimap-expanded",i)}let yo=null,eu=0,tu=0,Ml=0,Sl=0;sn.addEventListener("pointerdown",i=>{!yi||i.target===jl||(yo=i.pointerId,eu=Ml=i.clientX,tu=Sl=i.clientY,vo=!1,sn.setPointerCapture(i.pointerId))});sn.addEventListener("pointermove",i=>{if(!yi||i.pointerId!==yo)return;const e=Math.hypot(i.clientX-eu,i.clientY-tu),t=i.clientX-Ml,n=i.clientY-Sl;if(Ml=i.clientX,Sl=i.clientY,e>=5){vo=!0,sn.classList.add("is-panning");const s=sn.getBoundingClientRect();$l-=t/Math.max(1,s.width)*Lt.miniMapViewport.halfWidth*2,Yl-=n/Math.max(1,s.height)*Lt.miniMapViewport.halfHeight*2}});sn.addEventListener("pointerup",i=>{i.pointerId===yo&&(yo=null,sn.classList.remove("is-panning"))});sn.addEventListener("click",i=>{if(i.target===jl)return;if(vo){vo=!1;return}if(!yi){_o(!0);return}const e=sn.getBoundingClientRect(),t=(i.clientX-e.left)/Math.max(1,e.width),n=(i.clientY-e.top)/Math.max(1,e.height),s=Lt.miniMapViewport.centerX+(t-.5)*Lt.miniMapViewport.halfWidth*2,r=Lt.miniMapViewport.centerZ+(n-.5)*Lt.miniMapViewport.halfHeight*2;Mi(s,r,K.heading,qt.getMode()),_o(!1)});sn.addEventListener("wheel",i=>{if(!yi)return;i.preventDefault();const e=i.deltaY<0?1.18:1/1.18;xo=St.clamp(xo*e,1,6)},{passive:!1});jl.addEventListener("click",i=>{i.stopPropagation(),_o(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&yi&&_o(!1)});document.getElementById("gearCardBtn").addEventListener("click",()=>{rt.unlock(),Od(K,1)});document.getElementById("stallRestartBtn").addEventListener("click",()=>{rt.unlock(),K.stalled=!1,K.rpm=850});function X_(i){var o;const e=Pe.locale==="ja",t=document.createElement("div");t.className=`violation-toast ${i.instantFail?"fail":""}`;const n=e?i.labelJa:i.labelEn,s=e?i.detailJa:i.detailEn,r=i.instantFail?e?"検定中止":"FAIL":`-${i.points}`;for(t.innerHTML=`<span class="vt-pts">${r}</span><div><strong>${n}</strong><p>${s}</p></div>`,pa.prepend(t);pa.children.length>3;)(o=pa.lastElementChild)==null||o.remove();window.setTimeout(()=>{t.classList.add("fade-out"),window.setTimeout(()=>t.remove(),320)},4200)}let nu="crank";function q_(i){const e=Pe.locale,t=document.getElementById("examResultModal");t.hidden=!1,nu=i.weakArea??"crank",document.getElementById("examResultTitle").textContent=Yn(e,"examResultTitle");const n=document.getElementById("examStamp");n.textContent=i.passed?Yn(e,"examPassStamp"):Yn(e,"examFailStamp"),n.className=`exam-stamp ${i.passed?"pass":"fail"}`,document.getElementById("examResultSub").textContent=i.terminated?Yn(e,"examTerminatedSub"):i.passed?Yn(e,"examPassedSub"):Yn(e,"examFailedSub"),document.getElementById("examFinalScore").textContent=`${i.score} / 100`;const s=Math.floor(i.elapsedSec/60),r=Math.floor(i.elapsedSec%60);document.getElementById("examElapsed").textContent=`${s}:${r.toString().padStart(2,"0")}`,document.getElementById("examDistance").textContent=`${Math.round(i.distanceM)} m`;const o=document.getElementById("examViolationList");if(o.innerHTML="",i.violations.length===0){const a=document.createElement("li");a.className="clean-pass",a.textContent=Yn(e,"examNoViolations"),o.append(a)}else for(const a of i.violations){const c=document.createElement("li"),l=e==="ja"?a.labelJa:a.labelEn,h=e==="ja"?a.detailJa:a.detailEn,d=a.instantFail?e==="ja"?"中止":"FAIL":`-${a.points}`;c.innerHTML=`<span class="ev-badge ${a.instantFail?"fail":""}">${d}</span><span><strong>${l}</strong> — ${h}</span>`,o.append(c)}}document.getElementById("examRetryBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Si("startBay","exam")});document.getElementById("examPracticeWeakBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Si(nu,"practice")});document.getElementById("examCloseBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,qt.reset("practice",K)});const J_=document.getElementById("preDriveBar"),Ih=document.getElementById("pdCollapseBtn"),$_=document.getElementById("pdAutoCompleteBtn"),iu=Array.from(document.querySelectorAll(".pd-step-chip[data-pd-step]"));function gr(){const i=K.preDrive;if(!i)return;const e={1:i.doorLocked,2:i.seatAdjusted,3:i.mirrorsAdjusted,4:i.seatbeltFastened,5:i.brakeAndStartDone,6:i.handbrakeReleased,7:i.rightSignalOn,8:i.fivePointLookDone};let t=1;for(;t<=8&&e[t];)t++;for(const n of iu){const s=Number(n.dataset.pdStep),r=!!e[s];n.classList.toggle("done",r),n.classList.toggle("next-expected",!r&&s===t),n.classList.toggle("order-error",i.orderErrorStep===s)}}function tc(i,e=!0){rt.unlock();const t=K.preDrive;if(t){if(e){for(let n=1;n<i;n++)if(!t.completedSteps.includes(n)){t.orderErrorStep=i;break}}t.completedSteps.includes(i)||t.completedSteps.push(i),i===1?(t.doorLocked=!0,rt.playClick(520,.04,.18)):i===2?(t.seatAdjusted=!0,rt.playClick(380,.06,.18)):i===3?(t.mirrorsAdjusted=!0,K.mirrorTouchTimer=1.1,rt.playClick(680,.04,.16)):i===4?(t.seatbeltFastened=!0,rt.playClick(880,.05,.22)):i===5?(t.brakeAndStartDone=!0,K.stalled=!1,K.rpm=860,rt.playClick(460,.06,.2)):i===6?(t.handbrakeReleased=!0,K.handbrake=!1,K.gear=Pe.transmission==="AT"?"D":"1",rt.playClick(540,.04,.16)):i===7?(t.rightSignalOn=!0,K.blinker="right",K.blinkerTimer=0,K.blinkerOn=!0,rt.playClick(720,.03,.15)):i===8&&(t.fivePointLookDone=!0,K.lookAngleRad=55*Math.PI/180,K.lookedLeftTimestamp=hn,window.setTimeout(()=>{K.lookAngleRad=-64*Math.PI/180,K.lookedRightTimestamp=hn},320),window.setTimeout(()=>{K.lookAngleRad=0},780),rt.playClick(940,.04,.18)),gr()}}iu.forEach(i=>{i.addEventListener("click",()=>{const e=Number(i.dataset.pdStep);e>=1&&e<=8&&tc(e,!0)})});$_.addEventListener("click",()=>{K.preDrive.orderErrorStep=void 0;for(let i=1;i<=8;i++)tc(i,!1)});Ih.addEventListener("click",()=>{const i=J_.classList.toggle("collapsed");Ih.textContent=i?"+":"−"});window.addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)&&i.code.startsWith("Digit")){const e=Number(i.code.replace("Digit",""));e>=1&&e<=8&&tc(e,!0)}});const nc=document.getElementById("violationFreezeOverlay"),Y_=document.getElementById("strictRuleFreezeChk"),su=document.getElementById("vfResumeBtn"),Z_=document.getElementById("vfRetryStationBtn");let ii=!1;const In=[];let Dh=-999;function kh(i,e){if(!i.anyCurbTouch&&!i.anyCurbMount&&!i.poleHit&&!i.obstacleHit&&!(e!=null&&e.pedestrianDanger)&&!(e!=null&&e.trafficCollision)&&hn-Dh>=.25){Dh=hn;const n=In[In.length-1];(!n||Math.hypot(K.x-n.x,K.z-n.z)>.35)&&(In.push({x:K.x,z:K.z,heading:K.heading,gear:K.gear==="R"?Pe.transmission==="AT"?"D":"1":K.gear}),In.length>24&&In.shift())}}function j_(){const i=ql(Pe.vehicleKind),e=hl(K,i),t=e.anyCurbMount||e.anyCurbTouch||!!e.poleHit||!!e.obstacleHit;if(t&&In.length>0){const n=Math.max(0,In.length-5),s=In[n];K.x=s.x,K.z=s.z,K.heading=s.heading,K.gear=s.gear}else t&&(K.x+=Math.sin(K.heading)*1.6,K.z+=Math.cos(K.heading)*1.6);K.speedMs=0,K.steerAngleRad=0,K.steeringWheelRad=0,K.stalled=!1,K.handbrake=!1,Bd(K,i)}function K_(i){ii=!0,K.speedMs=0;const e=Pe.locale==="ja";document.getElementById("vfTagText").textContent=i.instantFail?e?"🚨 検定中止（一発不合格） · INSTANT FAIL":"🚨 INSTANT FAIL (検定中止)":e?`⚠️ 減点違反 (-${i.points}点) · RULE VIOLATION`:`⚠️ RULE VIOLATION (-${i.points} PTS)`,document.getElementById("vfTitleText").textContent=`${i.labelJa} · ${i.labelEn}`;const t=document.getElementById("vfBadgeText");t.textContent=i.instantFail?"検定中止 / FAIL":`-${i.points} PTS`,t.className=`vf-badge ${i.instantFail?"fail":""}`,document.getElementById("vfDetailJa").textContent=i.detailJa,document.getElementById("vfDetailEn").textContent=i.detailEn,document.getElementById("vfRuleRefJa").textContent=i.ruleRefJa??"",document.getElementById("vfRuleRefEn").textContent=i.ruleRefEn??"",document.getElementById("vfHowToFixJa").textContent=i.howToFixJa??"",document.getElementById("vfHowToFixEn").textContent=i.howToFixEn??"";const n=qt.getScore();document.getElementById("vfScoreRemainText").textContent=e?`持ち点: ${n} / 100点 (70点以上で合格)`:`Score: ${n} / 100 pts (70 pts to pass)`,su.textContent=e?"✅ ルールを理解して車を安全な位置に戻し再開 [Space / Enter]":"✅ I Understand — Unstuck Car & Resume Driving [Space / Enter]",nc.hidden=!1}function ru(){ii&&(ii=!1,nc.hidden=!0,j_())}su.addEventListener("click",()=>{rt.unlock(),ru()});Z_.addEventListener("click",()=>{rt.unlock(),ii=!1,nc.hidden=!0,To()});document.getElementById("vfOpenRulebookBtn").addEventListener("click",()=>{rt.unlock(),Is("written")});window.addEventListener("keydown",i=>{ii&&(i.key==="Enter"||i.key===" "||i.key==="Escape")&&(i.preventDefault(),ru())});const fi=document.getElementById("rulebookModal"),ou=document.getElementById("rulebookContentBody");let js="predrive";function Is(i=js){rt.unlock(),js=i,document.querySelectorAll("[data-rb-tab]").forEach(e=>{e.classList.toggle("active",e.dataset.rbTab===js)}),Gd(ou,js,Pe.locale),fi.hidden=!1}document.getElementById("quickRulebookBtn").addEventListener("click",()=>Is());document.getElementById("openRulebookBtn").addEventListener("click",()=>Is());document.getElementById("rulebookCloseBtn").addEventListener("click",()=>{fi.hidden=!0});document.querySelectorAll("[data-rb-tab]").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.rbTab||"predrive";Is(e)})});qt.onViolation=i=>{X_(i),rt.playViolationChime(i.instantFail),Wd.announceViolation(i,Pe.locale),Y_.checked&&K_(i)};qt.onExamFinish=i=>{ii||q_(i)};const au=new Vv({onToggleBlinker:i=>{K.blinker=K.blinker===i?"off":i,K.blinkerTimer=0,K.blinkerOn=K.blinker!=="off",K.blinker==="right"&&K.preDrive&&(K.preDrive.rightSignalOn=!0,K.preDrive.completedSteps.includes(7)||K.preDrive.completedSteps.push(7),gr())},onToggleHandbrake:()=>{K.handbrake=!K.handbrake,rt.playClick(420,.04,.16),!K.handbrake&&K.preDrive&&(K.preDrive.handbrakeReleased=!0,K.preDrive.completedSteps.includes(6)||K.preDrive.completedSteps.push(6),gr())},onShiftGear:i=>{Od(K,i),rt.playClick(620,.03,.14)},onCycleCamera:$d,onResetVehicle:To,onToggleMenu:()=>Kt(!Ps),onIgnition:()=>{K.stalled=!1,K.rpm=850},onAnyInteraction:()=>{rt.unlock(),Qd.hidden=!0}});au.bindTouchControls(Kl);function lu(){var s,r;const i=Pe.locale==="ja";document.documentElement.lang=Pe.locale,Kt(Ps),document.getElementById("quickLangEnBtn").classList.toggle("is-active",!i),document.getElementById("quickLangJaBtn").classList.toggle("is-active",i),document.getElementById("panelLangEnBtn").style.borderColor=i?"rgba(255,255,255,0.14)":"#34d399",document.getElementById("panelLangJaBtn").style.borderColor=i?"#34d399":"rgba(255,255,255,0.14)",document.getElementById("setupTitleText").textContent=i?"ドライブの準備 (Ready to drive)":"Ready to drive (ドライブの準備)",document.getElementById("setupLeadText").textContent=i?"車両とコースを選び、各教習課題へのワープや100点満点の修了検定を練習できます。":"Choose your vehicle and map, warp to any driving school obstacle, or start the 100-point exam.",document.getElementById("startDrivingBtn").textContent=i?"運転を始める (Start driving)":"Start driving (運転を始める)",document.getElementById("resetBtn").textContent=i?"車両リセット (Reset)":"Reset Vehicle (リセット)",document.getElementById("quickResetBtn").textContent=i?"リセット (O)":"Reset (O)",document.getElementById("lblVehicle").textContent=i?"車種 (Vehicle)":"Vehicle (車種)",document.getElementById("optSedan").textContent=i?"普通車セダン (右ハンドル) · RHD Sedan":"Sedan (RHD Corolla) · 普通車セダン",document.getElementById("optMoto").textContent=i?"普通二輪 (400cc) · Motorcycle":"Motorcycle (400cc) · 普通二輪",document.getElementById("lblTrans").textContent=i?"変速機 (Transmission)":"Transmission (変速機)",document.getElementById("optAT").textContent=i?"AT (オートマ・クリープあり)":"AT (Automatic · Creep)",document.getElementById("optMT").textContent=i?"MT (マニュアル5速)":"MT (Manual 5-Speed)",document.getElementById("lblMap").textContent=i?"コース / 試験場マップ (Course / Map)":"Course / Map (教習コース・試験場)",document.getElementById("modePracticeBtn").textContent=i?"自由練習 (Free Practice)":"Free Practice (自由練習)",document.getElementById("modeExamBtn").textContent=i?"修了検定 100点採点 (Mock Exam)":"Mock Exam 100-pt (修了検定)",document.getElementById("foldStationsTitle").textContent=i?"教習課題ワープ (Kyōshūjo Training Stations)":"Kyōshūjo Training Stations (教習課題ワープ)",document.getElementById("foldTuningTitle").textContent=i?"操作感とサウンド (Handling & sound)":"Handling & sound (操作感とサウンド)",document.getElementById("lblMaxSpeed").textContent=i?"最高速度 (Max Speed)":"Max Speed (最高速度)",document.getElementById("lblVolume").textContent=i?"音量 (Volume)":"Volume (音量)",document.getElementById("lblSteerSens").textContent=i?"ハンドル感度 (Steering Sensitivity)":"Steering Sensitivity (ハンドル感度)",document.getElementById("lblAutoCenter").textContent=i?"ハンドル自動復元 (Auto-center Steering)":"Auto-center Steering (ハンドル自動復元)",document.getElementById("lblMirrorQuality").textContent=i?"画質・ミラー描画 (Graphics & Mirrors)":"Graphics & Mirrors (画質・ミラー描画)",document.getElementById("optMirrorHigh").textContent=i?"高画質・3面ミラー (High · 3 Mirrors)":"High · Real-time 3 Mirrors (高画質)",document.getElementById("optMirrorLow").textContent=i?"標準・バランス (Medium · Balanced)":"Medium · Balanced (標準)",document.getElementById("optMirrorOff").textContent=i?"軽量・省電力 (Low · Save power)":"Low · Save power (軽量)",document.getElementById("lblTouchControls").textContent=i?"タッチ操作パネル表示 (Show touch controls)":"Show mobile touch controls (タッチ操作表示)",document.getElementById("curveTitle").textContent=i?"アクセル特性カーブ (Acceleration Curve)":"Acceleration Curve (アクセル特性)",document.getElementById("curveDesc").textContent=i?"横軸：アクセル入力 ／ 縦軸：駆動出力 (X: Input, Y: Output)":"X axis is throttle input, Y axis is drive output",document.getElementById("curveSoftLbl").textContent=i?"穏やか (Soft)":"Soft (穏やか)",document.getElementById("curveDirectLbl").textContent=i?"ダイレクト (Direct)":"Direct (直接)",document.getElementById("curveInputLbl").textContent=i?"入力 (Input)":"Current Input",document.getElementById("curveOutputLbl").textContent=i?"出力 (Output)":"Current Output",document.getElementById("foldMapTitle").textContent=i?"マップ編集・開始位置 (Map editor & spawn)":"Map editor & spawn (マップ編集・開始位置)",document.getElementById("uploadMapText").textContent=i?"地図アップロード (Upload)":"Upload Map (地図読込)",document.getElementById("setSpawnBtn").textContent=i?"開始位置に登録 (Set Spawn)":"Set Spawn (開始位置)",document.getElementById("viewBtn").textContent=i?"視点切替 (Change View)":"Change View (視点切替)",document.getElementById("copyMapJsonBtn").textContent=i?"JSONコピー (Copy JSON)":"Copy JSON (JSONコピー)",document.getElementById("lblCustomWidth").textContent=i?"マップ横幅 (Map Width m)":"Map Width m (マップ横幅)",document.getElementById("lblMapScale").textContent=i?"縮尺スケール (Map Scale)":"Map Scale (縮尺)",document.getElementById("foldHelpTitle").textContent=i?"操作ガイド (How to drive)":"How to drive (操作ガイド)";const e=document.getElementById("tipsContainer"),t=i?["W/A/S/D または 矢印キー : 運転 (Drive)","Q / E : 左右ウインカー (Signals) · H : ハザード","Space : サイドブレーキ (Handbrake)","Shift / Ctrl : ギア変更 (Shift Gear)","Z / X : 左右の安全確認 (Look Left/Right)","O : 車両リセット (Reset)","V : カメラ視点切替 (Cycle Views)"]:["W/A/S/D or Arrow Keys : Drive (運転)","Q / E : Turn Signals (ウインカー) · H : Hazard","Space : Handbrake (サイドブレーキ)","Shift / Ctrl : Shift Gear (ギア変更)","Z / X : Look Left & Right (左右安全確認)","O : Reset Vehicle (リセット)","V : Cycle Views (視点切替)"];e.innerHTML=t.map(o=>`<span>${o}</span>`).join(""),document.getElementById("helpMiniMapText").textContent=i?"右下のミニマップをクリックで拡大表示し、コース上の任意の場所をクリックするとそこへ車両がワープします。":"Click the mini map in the bottom-right corner to expand it, drag to pan, scroll to zoom, or click any spot to teleport the vehicle.",document.getElementById("foldDataTitle").textContent=i?"走行データ (Driving details)":"Driving details (走行データ)",document.getElementById("lblTelView").textContent=i?"視点 (View):":"View (視点):",document.getElementById("lblTelPos").textContent=i?"位置 (Position):":"Position (位置):",document.getElementById("lblTelHead").textContent=i?"方位 (Heading):":"Heading (方位):",document.getElementById("lblTelSteer").textContent=i?"舵角 (Steering):":"Steering (舵角):",document.getElementById("foldCoursesTitle").textContent=i?"試験場・教習コース一覧 (Built-in Test Center Courses)":"Built-in Test Center Courses (試験場コース一覧)";const n={chase:i?"後方 (Chase)":"Chase (後方)",cockpit:i?"運転席 (Cockpit)":"Cockpit (運転席)",instructor:i?"👨‍✈️ 検定員席 (Instructor)":"👨‍✈️ Instructor (検定員席)",hood:i?"ボンネット (Hood)":"Hood (ボンネット)",orbit:i?"自由 (Free)":"Free (自由)"};Zl.forEach(o=>{const a=o.dataset.viewTarget||"chase";o.textContent=n[a]||a}),document.getElementById("quickRulebookBtn").textContent=i?"📖 教本・標識・PDF (Rules)":"📖 Rules & PDF (教本・標識)",document.getElementById("openRulebookBtn").textContent=i?"📖 教本・標識・減点基準・PDF (Rules & PDF)":"📖 Rules, Signs & Study PDF (教本・標識)",document.getElementById("lblStrictFreeze").textContent=i?"🚨 違反時に赤画面で一時停止＆解説 (Red Freeze on Rule Break)":"🚨 Red Freeze & Explain on Rule Break (違反時赤画面停止)",document.getElementById("pdTitleText").textContent=i?"👨‍✈️ 乗車〜発進手順 (Pre-Drive Order — ①〜⑧を順番にクリックまたはキー1〜8)":"👨‍✈️ Pre-Drive Exam Sequence (Click 1–8 in exact order before pulling out)",document.getElementById("pdAutoCompleteBtn").textContent=i?"⚡ 一括完了 (Auto-Complete)":"⚡ Auto-Complete (一括完了)",fi.hidden||Gd(ou,js,Pe.locale),document.getElementById("lblMirrorL").textContent=i?"左ミラー · Left":"Left Mirror · 左",document.getElementById("lblMirrorC").textContent=i?"ルームミラー · Center":"Center Mirror · 中央",document.getElementById("lblMirrorR").textContent=i?"右ミラー · Right":"Right Mirror · 右",document.getElementById("cockpitLampLeft").textContent=i?"← 左合図 (Left)":"← Left (左)",document.getElementById("cockpitLampRight").textContent=i?"右合図 (Right) →":"Right (右) →",document.getElementById("lblHudSignal").textContent=i?"合図 (Signal):":"Signal (合図):",document.getElementById("lblMiniMap").textContent=i?"ミニマップ · Mini Map":"Mini Map · ミニマップ",document.getElementById("lblMiniMapHint").textContent=i?"ドラッグで移動・ホイールで拡大・地点クリックでワープ (Click any point to teleport)":"Hold and drag to pan. Wheel to zoom. Click any point on the course to teleport there.",document.getElementById("firstRunTitle").textContent=i?"運転をはじめましょう (Start driving)":"Start driving (運転をはじめましょう)",document.getElementById("firstRunText").textContent=i?"WASD/矢印キーで走行、Q/Eでウインカー、Spaceでブレーキ、Z/Xで左右目視、Vで視点切替、Oでリセット。":"WASD or arrow keys drive, Q/E signals, Space brakes, Z/X look left & right, V changes view, O resets.",document.getElementById("lblMobileSteerHint").textContent=i?"← 左右スワイプで操舵 (Swipe) →":"← Swipe to steer (スワイプ操舵) →",document.getElementById("lblMobileSigL").textContent=i?"↑ 左 (L)":"↑ Left",document.getElementById("lblMobileSigR").textContent=i?"右 (R) ↓":"Right ↓",document.getElementById("lblMobileGear").textContent=i?"ギア (Gear)":"Gear",document.getElementById("lblMobileBrake").textContent=i?"ブレーキ":"Brake",document.getElementById("lblMobileThrottle").textContent=i?"アクセル":"Throttle",(s=document.getElementById("navLangEnBtn"))==null||s.classList.toggle("active",!i),(r=document.getElementById("navLangJaBtn"))==null||r.classList.toggle("active",i),document.getElementById("navBtnHome").textContent=i?"🏠 ホーム (Home)":"🏠 Home (ホーム)",document.getElementById("navBtnPractice").textContent=i?"🚗 場内練習 (Practice)":"🚗 Practice (場内練習)",document.getElementById("navBtnExam").textContent=i?"🎓 技能検定 (Practical Test)":"🎓 Practical Test (技能検定)",document.getElementById("navBtnPublicRoad").textContent=i?"🛣️ 路上コース (Stage 2 Road)":"🛣️ Stage 2 Road (路上コース)",document.getElementById("navBtnWritten").textContent=i?"📝 学科試験50問 (Written Test)":"📝 Written Test 50-Q (学科試験)",document.getElementById("navBtnRules").textContent=i?"📖 教本・標識・PDF (Rules)":"📖 Rules & PDF (教本・標識)",document.getElementById("navBtnRoute").textContent=i?"📍 ルート作成 (Route Builder)":"📍 Route Builder (ルート作成)",document.getElementById("hhHeroTitle").textContent=i?"日本の自動車教習所・外免切替 3D総合シミュレーター":"Japan Driving School 3D Simulator & Exam Portal",document.getElementById("hhHeroLead").textContent=i?"場内技能試験（S字・クランク・坂道・踏切）、第2段階「路上コース（自転車保護・駐車トラック回避・駐停車禁止区域テスト）」、および2025年10月新制度の学科試験（50問・90%合格基準）をすべて1つの3Dサイトで練習できます。":"Practice Stage 1 Driving Center courses, Stage 2 Public Road (3D cyclists, parked delivery trucks & no-parking zones), the 100-pt Practical Exam with Instructor View, and the Oct 2025 50-Question Written Test.",Ao(),Ql(Lt.getMode())}function Us(i){rt.unlock(),Pe.locale=i,si(Pe),lu()}document.getElementById("quickLangEnBtn").addEventListener("click",()=>Us("en"));document.getElementById("quickLangJaBtn").addEventListener("click",()=>Us("ja"));document.getElementById("panelLangEnBtn").addEventListener("click",()=>Us("en"));document.getElementById("panelLangJaBtn").addEventListener("click",()=>Us("ja"));var Bh;(Bh=document.getElementById("navLangEnBtn"))==null||Bh.addEventListener("click",()=>Us("en"));var zh;(zh=document.getElementById("navLangJaBtn"))==null||zh.addEventListener("click",()=>Us("ja"));const Nh=document.getElementById("homeHubOverlay"),cu=Array.from(document.querySelectorAll("[data-site-nav]"));let ps=!0;document.body.classList.add("home-hub-active");function ic(i){if(rt.unlock(),i==="pdf"){window.open("./docs/Gaimen_Kirikae_Study_Guide.pdf","_blank","noopener");return}if(cu.forEach(e=>{e.classList.toggle("active",e.dataset.siteNav===i)}),i==="home"){ps=!0,Nh.hidden=!1,document.body.classList.add("home-hub-active"),fi.hidden=!0,jn.hidden=!0;return}ps=!1,Nh.hidden=!0,document.body.classList.remove("home-hub-active"),i==="practice"?(fi.hidden=!0,jn.hidden=!0,Si(Xi,"practice"),Kt(!0),Ss.focus({preventScroll:!0})):i==="exam"?(fi.hidden=!0,jn.hidden=!0,Si("startBay","exam"),Kt(!0),Ss.focus({preventScroll:!0})):i==="publicRoad"?(fi.hidden=!0,jn.hidden=!0,ec(),Kt(!0),Ss.focus({preventScroll:!0})):i==="written"?(jn.hidden=!0,Is("mock50")):i==="rules"?(jn.hidden=!0,Is("predrive")):i==="route"&&(fi.hidden=!0,oc())}cu.forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.siteNav||"home";ic(e)})});var Hh;(Hh=document.getElementById("navLogoHomeBtn"))==null||Hh.addEventListener("click",()=>ic("home"));document.querySelectorAll("[data-home-action]").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.homeAction||"practice";ic(e)})});const jn=document.getElementById("routeBuilderModal"),xr=document.getElementById("routeBuilderCanvas"),Ue=xr.getContext("2d"),El=document.getElementById("rbStatusText"),Uh=document.getElementById("rbUploadInput");let bl="waypoint",Ct=[],ti=[],ir=[];function sc(){return Dt==="custom"?jt.currentSize:{width:pi*2,height:Oi*2}}function rc(){ir.push({waypoints:Ct.map(i=>({...i})),stamps:ti.map(i=>({...i}))}),ir.length>30&&ir.shift()}function Fs(){const i=xr.width,e=xr.height;Ue.clearRect(0,0,i,e);const t=sc(),n=Dt==="custom"?jt.getActiveSource():null;if(n)Ue.drawImage(n,0,0,i,e);else{Ue.fillStyle="#1e2f23",Ue.fillRect(0,0,i,e);const r=(x,_)=>[(x/t.width+.5)*i,(_/t.height+.5)*e];Ue.strokeStyle="#475569",Ue.lineWidth=22,Ue.lineCap="round",Ue.strokeRect(i*.08,e*.12,i*.84,e*.76),Ue.beginPath();const[o,a]=r(0,-46),[c,l]=r(0,46),[h,d]=r(-76,0),[u,f]=r(76,0);Ue.moveTo(o,a),Ue.lineTo(c,l),Ue.moveTo(h,d),Ue.lineTo(u,f),Ue.stroke()}const s=(r,o)=>[(r/t.width+.5)*i,(o/t.height+.5)*e];if(Ct.length>=2){Ue.save(),Ue.strokeStyle="#34d399",Ue.lineWidth=5,Ue.lineCap="round",Ue.lineJoin="round",Ue.beginPath(),Ct.forEach((r,o)=>{const[a,c]=s(r.x,r.z);o===0?Ue.moveTo(a,c):Ue.lineTo(a,c)}),Ue.stroke();for(let r=0;r<Ct.length-1;r++){const[o,a]=s(Ct[r].x,Ct[r].z),[c,l]=s(Ct[r+1].x,Ct[r+1].z),h=(o+c)*.5,d=(a+l)*.5,u=Math.atan2(l-a,c-o);Ue.save(),Ue.translate(h,d),Ue.rotate(u),Ue.fillStyle="#fde047",Ue.beginPath(),Ue.moveTo(8,0),Ue.lineTo(-6,-5),Ue.lineTo(-6,5),Ue.closePath(),Ue.fill(),Ue.restore()}Ue.restore()}Ct.forEach((r,o)=>{const[a,c]=s(r.x,r.z);Ue.beginPath(),Ue.arc(a,c,13,0,Math.PI*2),Ue.fillStyle=o===0?"#059669":o===Ct.length-1?"#d62828":"#005bac",Ue.fill(),Ue.lineWidth=2.5,Ue.strokeStyle="#ffffff",Ue.stroke(),Ue.fillStyle="#ffffff",Ue.font="bold 12px sans-serif",Ue.textAlign="center",Ue.textBaseline="middle";const l=o===0?"S":o===Ct.length-1?"G":String(o);Ue.fillText(l,a,c)});for(const r of ti){const[o,a]=s(r.x,r.z);Ue.save(),Ue.translate(o,a),Ue.fillStyle=r.kind==="stopSign"?"#dc2626":r.kind==="trafficLight"?"#f59e0b":"#ec4899",Ue.beginPath(),Ue.arc(0,0,11,0,Math.PI*2),Ue.fill(),Ue.strokeStyle="#fff",Ue.lineWidth=2,Ue.stroke(),Ue.fillStyle="#fff",Ue.font="bold 10px sans-serif",Ue.textAlign="center",Ue.textBaseline="middle",Ue.fillText(r.kind==="stopSign"?"止":r.kind==="trafficLight"?"信":"P",0,0),Ue.restore()}El.textContent=Pe.locale==="ja"?`ポイント: ${Ct.length}点 ／ 3D標識: ${ti.length}個`:`Waypoints: ${Ct.length} · 3D Stamps: ${ti.length}`}function oc(){rt.unlock();const i=mn.getData();Ct=i.waypoints.map(e=>({...e})),ti=i.stamps.map(e=>({...e})),ir=[],jn.hidden=!1,Fs()}document.getElementById("openRouteBuilderBtn").addEventListener("click",oc);document.getElementById("quickRouteBuilderBtn").addEventListener("click",oc);document.getElementById("rbCloseBtn").addEventListener("click",()=>{jn.hidden=!0});document.querySelectorAll("[data-rb-tool]").forEach(i=>{i.addEventListener("click",()=>{bl=i.dataset.rbTool||"waypoint",document.querySelectorAll("[data-rb-tool]").forEach(e=>{e.classList.toggle("active",e===i)})})});xr.addEventListener("click",i=>{const e=xr.getBoundingClientRect(),t=(i.clientX-e.left)/Math.max(1,e.width),n=(i.clientY-e.top)/Math.max(1,e.height),s=sc(),r=(t-.5)*s.width,o=(n-.5)*s.height;if(rc(),bl==="waypoint")Ct.push({x:r,z:o,turn:"straight"});else{let a=0;if(Ct.length>=1){const c=Ct[Ct.length-1];a=Math.atan2(-(r-c.x),-(o-c.z))}ti.push({kind:bl,x:r,z:o,heading:a})}Fs()});document.getElementById("rbUndoBtn").addEventListener("click",()=>{const i=ir.pop();i&&(Ct=i.waypoints,ti=i.stamps,Fs())});document.getElementById("rbClearBtn").addEventListener("click",()=>{rc(),Ct=[],ti=[],Fs()});Uh.addEventListener("change",()=>{var t;const i=(t=Uh.files)==null?void 0:t[0];if(!i)return;const e=new FileReader;e.onload=async()=>{const n=String(e.result),s=Math.max(80,Number(Ls.value)||260),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Mt=r,await jt.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await yr(r),gn="custom",Dt="custom",_i.setKyoshujoVisible(!1),jt.setVisible(!0),Ao(),Fs()},e.readAsDataURL(i)});document.querySelectorAll("[data-trace-color]").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.traceColor||"red",t=jt.getActiveSource();if(!t){El.textContent=Pe.locale==="ja"?"先にコース図画像をアップロードしてください":"Please upload a route map image first";return}const n=sc(),s=mn.autoExtractRouteFromImage(t,n.width,e);if(s.length<2){El.textContent=Pe.locale==="ja"?"色線が見つかりませんでした。地図上をクリックしてルート点を追加してください":"No matching colored line found — click directly on the map to trace points";return}rc(),Ct=s,Fs()})});document.getElementById("rbSaveAndDriveBtn").addEventListener("click",()=>{mn.setRouteData({waypoints:Ct,stamps:ti},!0),jn.hidden=!0,Kt(!0);const i=mn.getStartPose();i&&(Mt&&Dt==="custom"&&(Mt.startX=i.x,Mt.startZ=i.z,Mt.startHeading=i.heading,yr(Mt)),Mi(i.x,i.z,i.heading,"practice"))});function Q_(i){if(mn.setMemoryMode(i),document.querySelectorAll("[data-memory-mode]").forEach(e=>{e.classList.toggle("active",e.dataset.memoryMode===i)}),i==="autodrive"&&mn.hasRoute()){const e=mn.getStartPose();e&&(Mi(e.x,e.z,e.heading,"practice"),mn.resetProgress())}}document.querySelectorAll("[data-memory-mode]").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.memoryMode||"guided";Q_(e)})});Nv().then(async i=>{i&&(Mt=i,await jt.loadFromDataUrl(i.imageDataUrl,i.mapWidth),Ao())});lu();Kt(!0);window.addEventListener("resize",()=>{un.setSize(window.innerWidth,window.innerHeight),Lt.resize(window.innerWidth/window.innerHeight)});const ey=()=>({y:0,slopeX:0,slopeZ:0}),Cn=1/120;let to=0,Fh=performance.now(),hn=0,Oh=-999,ga="";function hu(i){requestAnimationFrame(hu);const e=Math.min(.05,Math.max(0,(i-Fh)/1e3));Fh=i,to+=e;const n={...ql(Pe.vehicleKind),maxSpeedMs:go},s=au.getInputState(),r=mn.update(e,K,qn,Pe.locale,hn),o=r.autoDriveInput??s,a={...o,throttle:o.throttle>0?Math.pow(o.throttle,Bi):0};Ps||Jd(o.throttle);let c=hl(K,n);for(ii&&(to=0);to>=Cn&&!ii;){if(hn+=Cn,qn.update(Cn),zv(K,ps?{throttle:0,brake:1,steerLeft:0,steerRight:0,analogSteerTarget:null,clutch:0,lookLeft:!1,lookRight:!1}:a,n,Cn,{steeringSensitivity:Pe.steeringSensitivity,autoCenterSteering:Pe.autoCenterSteering,simTimeSec:hn},Dt==="custom"||Dt==="publicRoad"?ey:void 0),K.preDrive&&!K.preDrive.fivePointLookDone&&hn-K.lookedRightTimestamp<1.5&&(K.preDrive.fivePointLookDone=!0,K.preDrive.completedSteps.includes(8)||K.preDrive.completedSteps.push(8),gr()),Dt==="kyoshujo"&&!ps){const T=bh.update(Cn,K,qn);c=hl(K,n),kh(c,T),(c.pushX!==0||c.pushZ!==0)&&(K.x+=c.pushX,K.z+=c.pushZ,Bd(K,n),(c.poleHit||c.obstacleHit)&&(K.speedMs*=.35,hn-Oh>.6&&(Oh=hn,rt.playThud()))),qt.update(Cn,K,c,qn,T)}else if(Dt==="publicRoad"&&!ps){const T=Wi.update(Cn,K,qn),C={wheels:{FL:{corner:"FL",x:0,z:0,minCurbDist:99,curbTouch:!1,curbMount:!1,proximity:0,pushX:0,pushZ:0},FR:{corner:"FR",x:0,z:0,minCurbDist:99,curbTouch:!1,curbMount:!1,proximity:0,pushX:0,pushZ:0},RL:{corner:"RL",x:0,z:0,minCurbDist:99,curbTouch:!1,curbMount:!1,proximity:0,pushX:0,pushZ:0},RR:{corner:"RR",x:0,z:0,minCurbDist:99,curbTouch:!1,curbMount:!1,proximity:0,pushX:0,pushZ:0}},anyCurbTouch:!1,anyCurbMount:!1,poleHit:null,obstacleHit:null,pushX:0,pushZ:0};kh(C,T),qt.update(Cn,K,C,qn,T)}else Dt==="kyoshujo"&&ps&&bh.update(Cn,K,qn);to-=Cn}const l=qt.getCurrentWaypoint(),h=l?{x:l.x,z:l.z}:null;l&&l.id!==ga?(ga=l.id,Wd.speak(l.instructionJa,l.instructionEn,Pe.locale)):l||(ga=""),o_(bn,K,Pe.vehicleKind),_i.updateShadowFocus(K.x,K.z),_i.updateDynamic(qn,h,hn);const d=qn.getRailroadState();rt.update(K,Dt==="kyoshujo"&&d.isWarningActive,hn);const u=Math.abs(K.speedMs),f=Math.pow(St.clamp((u-6)/14,0,1),1.8);b_.style.opacity=(f*.75).toFixed(3),w_.style.opacity=(f*.88).toFixed(3),Lt.update(e,K,Pe.vehicleKind,bn,un,En);const x=!Ps||yi;Lt.renderPiPMirrors(un,En,K,v_,__,y_,x);const _=Dt==="kyoshujo"?{width:pi*2,height:Oi*2}:Dt==="publicRoad"?{width:230,height:160}:jt.currentSize;Lt.renderPiPMiniMap(un,En,sn,K,_,yi,xo,$l,Yl),un.setViewport(0,0,window.innerWidth,window.innerHeight),un.setScissorTest(!1),un.render(En,Lt.camera);const p=Pe.locale==="ja";A_.textContent=(u*3.6).toFixed(1),R_.textContent=K.gear,P_.textContent=`${K.x.toFixed(1)}, ${K.z.toFixed(1)}`;const m=St.radToDeg(K.heading);L_.textContent=`${m.toFixed(1)}° / ${K.heading.toFixed(4)} rad`;const S=Math.round(St.radToDeg(K.steeringWheelRad));I_.textContent=String(S),T_.style.transform=`rotate(${-K.steeringWheelRad}rad)`;const M=K.blinkerOn&&(K.blinker==="left"||K.blinker==="hazard"),v=K.blinkerOn&&(K.blinker==="right"||K.blinker==="hazard");S_.classList.toggle("is-active",M),E_.classList.toggle("is-active",v),D_.dataset.signal=K.blinker,k_.textContent=K.blinker==="left"?p?"左合図":"Left":K.blinker==="right"?p?"右合図":"Right":K.blinker==="hazard"?"Hazard":"Off",Th.textContent=String(qt.getScore()),Th.className=`score-num ${qt.getScore()<70?"danger":""}`;const y=qt.getMode()==="exam";N_.textContent=y?Yn(Pe.locale,"modeExam"):Yn(Pe.locale,"modePractice");const b=qt.getWaypointProgress();if(r.bannerText)Js.textContent=r.bannerText;else if(Dt==="publicRoad")Js.textContent=Wi.legalPullOverCompleted?p?"🎉 路上駐停車課題クリア！引き続き自転車との側方間隔（1.2m）と駐車トラック回避を練習できます":"🎉 Public Road Pull-Over Passed! Continue practicing cyclist clearance (1.2m) & truck passing":p?"🛣️ 路上コース：青レーンの自転車から1.2m空け、駐車トラックを右合図で回避し、赤枠（消火栓5m・バス停10m）を避けて緑枠の停車目標へ停車しましょう":"🛣️ Public Road: Keep >=1.2m from cyclists, signal right past parked trucks, avoid red No-Parking zones (5m Hydrant / 10m Bus Stop) & stop in the green Legal Pull-Over Bay";else if(Dt==="custom"){const T=mo.find(C=>C.id===gn);Js.textContent=T?p?`${T.nameJa} コース練習中`:`Practicing: ${T.nameEn}`:p?"カスタム地図コース走行中":"Driving custom course map"}else if(l)Js.textContent=`[${b.current+1}/${b.total}] ${p?l.instructionJa:l.instructionEn}`;else{const T=zd[Xi];Js.textContent=`${p?T.titleJa:T.titleEn}: ${p?T.descJa:T.descEn}`}U_.hidden=!K.stalled,["FL","FR","RL","RR"].forEach(T=>{const C=c.wheels[T],w=F_[T];w.classList.toggle("mount",C.curbMount),w.classList.toggle("touch",!C.curbMount&&C.curbTouch),w.classList.toggle("close",!C.curbMount&&!C.curbTouch&&C.proximity>.35)})}requestAnimationFrame(hu);
