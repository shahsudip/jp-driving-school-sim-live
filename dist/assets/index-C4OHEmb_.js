var ku=Object.defineProperty;var zu=(i,t,e)=>t in i?ku(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var yt=(i,t,e)=>zu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="180",ns={ROTATE:0,DOLLY:1,PAN:2},ts={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hu=0,ql=1,Vu=2,mh=1,gh=2,kn=3,li=0,qe=1,Ae=2,oi=0,is=1,Zl=2,jl=3,Jl=4,Gu=5,yi=100,Wu=101,Xu=102,Yu=103,qu=104,Zu=200,ju=201,Ju=202,$u=203,na=204,ia=205,Ku=206,Qu=207,td=208,ed=209,nd=210,id=211,sd=212,rd=213,od=214,sa=0,ra=1,oa=2,ls=3,aa=4,la=5,ca=6,ha=7,_h=0,ad=1,ld=2,ai=0,cd=1,hd=2,ud=3,dd=4,fd=5,pd=6,md=7,xh=300,cs=301,hs=302,ua=303,da=304,oo=306,Ws=1e3,bi=1001,fa=1002,xn=1003,gd=1004,cr=1005,Tn=1006,go=1007,Ti=1008,Pn=1009,vh=1010,Mh=1011,Xs=1012,hl=1013,Ci=1014,Gn=1015,vs=1016,ul=1017,dl=1018,Ys=1020,yh=35902,Sh=35899,Eh=1021,bh=1022,gn=1023,qs=1026,Zs=1027,Th=1028,fl=1029,wh=1030,pl=1031,ml=1033,Hr=33776,Vr=33777,Gr=33778,Wr=33779,pa=35840,ma=35841,ga=35842,_a=35843,xa=36196,va=37492,Ma=37496,ya=37808,Sa=37809,Ea=37810,ba=37811,Ta=37812,wa=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,La=37818,Ia=37819,Da=37820,Ua=37821,Na=36492,Oa=36494,Fa=36495,Ba=36283,ka=36284,za=36285,Ha=36286,_d=3200,xd=3201,Ah=0,vd=1,ii="",ve="srgb",us="srgb-linear",Yr="linear",ue="srgb",Ni=7680,$l=519,Md=512,yd=513,Sd=514,Rh=515,Ed=516,bd=517,Td=518,wd=519,Va=35044,Kl="300 es",wn=2e3,qr=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const Fs=Math.PI/180,js=180/Math.PI;function Cn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function gl(i,t){return(i%t+t)%t}function Ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rd(i,t,e){return i!==t?(e-i)/(t-i):0}function Bs(i,t,e){return(1-e)*i+e*t}function Cd(i,t,e,n){return Bs(i,t,1-Math.exp(-e*n))}function Pd(i,t=1){return t-Math.abs(gl(i,t*2)-t)}function Ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Id(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ud(i,t){return i+Math.random()*(t-i)}function Nd(i){return i*(.5-Math.random())}function Od(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fd(i){return i*Fs}function Bd(i){return i*js}function kd(i){return(i&i-1)===0&&i!==0}function zd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Hd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),g=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*_,l*g,a*c);break;case"YXY":i.set(l*g,a*h,l*_,a*c);break;case"ZYZ":i.set(l*_,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Le={DEG2RAD:Fs,RAD2DEG:js,generateUUID:Cn,clamp:$t,euclideanModulo:gl,mapLinear:Ad,inverseLerp:Rd,lerp:Bs,damp:Cd,pingpong:Pd,smoothstep:Ld,smootherstep:Id,randInt:Dd,randFloat:Ud,randFloatSpread:Nd,seededRandom:Od,degToRad:Fd,radToDeg:Bd,isPowerOfTwo:kd,ceilPowerOfTwo:zd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Vd,normalize:le,denormalize:mn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],g=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=g,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==f||c!==g||h!==_){let m=1-a;const p=l*f+c*g+h*_+u*v,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const S=Math.sqrt(M),E=Math.atan2(S,p*y);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const x=a*y;if(l=l*m+f*x,c=c*m+g*x,h=h*m+_*x,u=u*m+v*x,m===1-a){const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*u+l*g-c*f,t[e+1]=l*_+h*f+c*u-a*g,t[e+2]=c*_+h*g+a*f-l*u,t[e+3]=h*_-a*u-l*f-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),g=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u-f*g*_;break;case"YXZ":this._x=f*h*u+c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u+f*g*_;break;case"ZXY":this._x=f*h*u-c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u-f*g*_;break;case"ZYX":this._x=f*h*u-c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u+f*g*_;break;case"YZX":this._x=f*h*u+c*g*_,this._y=c*g*u+f*h*_,this._z=c*h*_-f*g*u,this._w=c*h*u-f*g*_;break;case"XZY":this._x=f*h*u-c*g*_,this._y=c*g*u-f*h*_,this._z=c*h*_+f*g*u,this._w=c*h*u+f*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>u){const g=2*Math.sqrt(1+n-a-u);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>u){const g=2*Math.sqrt(1+a-n-u);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+u-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _o=new I,tc=new Pi;class Jt{constructor(t,e,n,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],g=n[5],_=n[8],v=s[0],m=s[3],p=s[6],y=s[1],M=s[4],x=s[7],S=s[2],E=s[5],w=s[8];return r[0]=o*v+a*y+l*S,r[3]=o*m+a*M+l*E,r[6]=o*p+a*x+l*w,r[1]=c*v+h*y+u*S,r[4]=c*m+h*M+u*E,r[7]=c*p+h*x+u*w,r[2]=f*v+g*y+_*S,r[5]=f*m+g*M+_*E,r[8]=f*p+g*x+_*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,g=c*r-o*l,_=e*u+n*f+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=g*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(xo.makeScale(t,e)),this}rotate(t){return this.premultiply(xo.makeRotation(-t)),this}translate(t,e){return this.premultiply(xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const xo=new Jt;function Ch(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gd(){const i=Zr("canvas");return i.style.display="block",i}const ec={};function Js(i){i in ec||(ec[i]=!0,console.warn(i))}function Wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const nc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xd(){const i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ue&&(s.r=Xn(s.r),s.g=Xn(s.g),s.b=Xn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ue&&(s.r=ss(s.r),s.g=ss(s.g),s.b=ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ve},outputColorSpaceConfig:{drawingBufferColorSpace:ve}},[ve]:{primaries:t,whitePoint:n,transfer:ue,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ve}}}),i}const re=Xd();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ss(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Oi;class Yd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=Zr("canvas")),Oi.width=t.width,Oi.height=t.height;const s=Oi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Oi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Xn(e[n]/255)*255):e[n]=Xn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qd=0;class _l{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Cn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vo(s[o].image)):r.push(vo(s[o]))}else r=vo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function vo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zd=0;const Mo=new I;class ze extends Di{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=bi,s=bi,r=Tn,o=Ti,a=gn,l=Pn,c=ze.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Cn(),this.name="",this.source=new _l(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mo).x}get height(){return this.source.getSize(Mo).y}get depth(){return this.source.getSize(Mo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=xh;ze.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],g=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,x=(g+1)/2,S=(p+1)/2,E=(h+f)/4,w=(u+v)/4,P=(_+m)/4;return M>x&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=w/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=P/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=w/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+g+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jd extends Di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new ze(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new _l(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends jd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ph extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=xn,this.minFilter=xn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),ur.subVectors(this.max,Ts),Fi.subVectors(t.a,Ts),Bi.subVectors(t.b,Ts),ki.subVectors(t.c,Ts),Jn.subVectors(Bi,Fi),$n.subVectors(ki,Bi),fi.subVectors(Fi,ki);let e=[0,-Jn.z,Jn.y,0,-$n.z,$n.y,0,-fi.z,fi.y,Jn.z,0,-Jn.x,$n.z,0,-$n.x,fi.z,0,-fi.x,-Jn.y,Jn.x,0,-$n.y,$n.x,0,-fi.y,fi.x,0];return!yo(e,Fi,Bi,ki,ur)||(e=[1,0,0,0,1,0,0,0,1],!yo(e,Fi,Bi,ki,ur))?!1:(dr.crossVectors(Jn,$n),e=[dr.x,dr.y,dr.z],yo(e,Fi,Bi,ki,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Un=[new I,new I,new I,new I,new I,new I,new I,new I],dn=new I,hr=new nr,Fi=new I,Bi=new I,ki=new I,Jn=new I,$n=new I,fi=new I,Ts=new I,ur=new I,dr=new I,pi=new I;function yo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){pi.fromArray(i,r);const a=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $d=new nr,ws=new I,So=new I;class xl{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(So)),this.expandByPoint(ws.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Nn=new I,Eo=new I,fr=new I,Kn=new I,bo=new I,pr=new I,To=new I;class Lh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Eo.copy(t).add(e).multiplyScalar(.5),fr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(fr),a=Kn.dot(this.direction),l=-Kn.dot(fr),c=Kn.lengthSq(),h=Math.abs(1-o*o);let u,f,g,_;if(h>0)if(u=o*l-a,f=o*a-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,g=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),g=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),g=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Eo).addScaledVector(fr,f),g}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){bo.subVectors(e,t),pr.subVectors(n,t),To.crossVectors(bo,pr);let o=this.direction.dot(To),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=a*this.direction.dot(pr.crossVectors(Kn,pr));if(l<0)return null;const c=a*this.direction.dot(bo.cross(Kn));if(c<0||l+c>o)return null;const h=-a*Kn.dot(To);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,l,c,h,u,f,g,_,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,g,_,v,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,g,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=g,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),o=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,g=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=g+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+g*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,g=l*u,_=c*h,v=c*u;e[0]=f+v*a,e[4]=_*a-g,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,g=l*u,_=c*h,v=c*u;e[0]=f-v*a,e[4]=-o*u,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,g=o*u,_=a*h,v=a*u;e[0]=l*h,e[4]=_*c-g,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=g*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,g=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=v-f*u,e[8]=_*u+g,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=g*u+_,e[10]=f-v*u}else if(t.order==="XZY"){const f=o*l,g=o*c,_=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=o*h,e[9]=g*u-_,e[2]=_*u-g,e[6]=a*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Qd)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Qn.crossVectors(n,Je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Qn.crossVectors(n,Je)),Qn.normalize(),mr.crossVectors(Je,Qn),s[0]=Qn.x,s[4]=mr.x,s[8]=Je.x,s[1]=Qn.y,s[5]=mr.y,s[9]=Je.y,s[2]=Qn.z,s[6]=mr.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],g=n[13],_=n[2],v=n[6],m=n[10],p=n[14],y=n[3],M=n[7],x=n[11],S=n[15],E=s[0],w=s[4],P=s[8],b=s[12],T=s[1],D=s[5],B=s[9],H=s[13],J=s[2],W=s[6],j=s[10],et=s[14],Y=s[3],pt=s[7],dt=s[11],Mt=s[15];return r[0]=o*E+a*T+l*J+c*Y,r[4]=o*w+a*D+l*W+c*pt,r[8]=o*P+a*B+l*j+c*dt,r[12]=o*b+a*H+l*et+c*Mt,r[1]=h*E+u*T+f*J+g*Y,r[5]=h*w+u*D+f*W+g*pt,r[9]=h*P+u*B+f*j+g*dt,r[13]=h*b+u*H+f*et+g*Mt,r[2]=_*E+v*T+m*J+p*Y,r[6]=_*w+v*D+m*W+p*pt,r[10]=_*P+v*B+m*j+p*dt,r[14]=_*b+v*H+m*et+p*Mt,r[3]=y*E+M*T+x*J+S*Y,r[7]=y*w+M*D+x*W+S*pt,r[11]=y*P+M*B+x*j+S*dt,r[15]=y*b+M*H+x*et+S*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],g=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*g-n*l*g)+v*(+e*l*g-e*c*f+r*o*f-s*o*g+s*c*h-r*l*h)+m*(+e*c*u-e*a*g-r*o*u+n*o*g+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],g=t[11],_=t[12],v=t[13],m=t[14],p=t[15],y=u*m*c-v*f*c+v*l*g-a*m*g-u*l*p+a*f*p,M=_*f*c-h*m*c-_*l*g+o*m*g+h*l*p-o*f*p,x=h*v*c-_*u*c+_*a*g-o*v*g-h*a*p+o*u*p,S=_*u*l-h*v*l-_*a*f+o*v*f+h*a*m-o*u*m,E=e*y+n*M+s*x+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=y*w,t[1]=(v*f*r-u*m*r-v*s*g+n*m*g+u*s*p-n*f*p)*w,t[2]=(a*m*r-v*l*r+v*s*c-n*m*c-a*s*p+n*l*p)*w,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*g-n*l*g)*w,t[4]=M*w,t[5]=(h*m*r-_*f*r+_*s*g-e*m*g-h*s*p+e*f*p)*w,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*p-e*l*p)*w,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*g+e*l*g)*w,t[8]=x*w,t[9]=(_*u*r-h*v*r-_*n*g+e*v*g+h*n*p-e*u*p)*w,t[10]=(o*v*r-_*a*r+_*n*c-e*v*c-o*n*p+e*a*p)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*g-e*a*g)*w,t[12]=S*w,t[13]=(h*v*s-_*u*s+_*n*f-e*v*f-h*n*m+e*u*m)*w,t[14]=(_*a*s-o*v*s-_*n*l+e*v*l+o*n*m-e*a*m)*w,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,g=r*h,_=r*u,v=o*h,m=o*u,p=a*u,y=l*c,M=l*h,x=l*u,S=n.x,E=n.y,w=n.z;return s[0]=(1-(v+p))*S,s[1]=(g+x)*S,s[2]=(_-M)*S,s[3]=0,s[4]=(g-x)*E,s[5]=(1-(f+p))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+M)*w,s[9]=(m-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=zi.set(s[0],s[1],s[2]).length();const o=zi.set(s[4],s[5],s[6]).length(),a=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],fn.copy(this);const c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,e.setFromRotationMatrix(fn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),g=(n+s)/(n-s);let _,v;if(l)_=r/(o-r),v=o*r/(o-r);else if(a===wn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===qr)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=g,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),g=-(n+s)/(n-s);let _,v;if(l)_=1/(o-r),v=o/(o-r);else if(a===wn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===qr)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=g,c[2]=0,c[6]=0,c[10]=_,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const zi=new I,fn=new _e,Kd=new I(0,0,0),Qd=new I(1,1,1),Qn=new I,mr=new I,Je=new I,sc=new _e,rc=new Pi;class Ln{constructor(t=0,e=0,n=0,s=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Ih{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tf=0;const oc=new I,Hi=new Pi,On=new _e,gr=new I,As=new I,ef=new I,nf=new Pi,ac=new I(1,0,0),lc=new I(0,1,0),cc=new I(0,0,1),hc={type:"added"},sf={type:"removed"},Vi={type:"childadded",child:null},wo={type:"childremoved",child:null};class Ne extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Cn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new I,e=new Ln,n=new Pi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Jt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ih,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return oc.copy(t).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(As,gr,this.up):On.lookAt(gr,As,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(On),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sf),wo.child=t,this.dispatchEvent(wo),wo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,nf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new I(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new I,Fn=new I,Ao=new I,Bn=new I,Gi=new I,Wi=new I,uc=new I,Ro=new I,Co=new I,Po=new I,Lo=new me,Io=new me,Do=new me;class hn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),pn.subVectors(t,e),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){pn.subVectors(s,e),Fn.subVectors(n,e),Ao.subVectors(t,e);const o=pn.dot(pn),a=pn.dot(Fn),l=pn.dot(Ao),c=Fn.dot(Fn),h=Fn.dot(Ao),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,g=(c*l-a*h)*f,_=(o*h-a*l)*f;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Lo.setScalar(0),Io.setScalar(0),Do.setScalar(0),Lo.fromBufferAttribute(t,e),Io.fromBufferAttribute(t,n),Do.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lo,r.x),o.addScaledVector(Io,r.y),o.addScaledVector(Do,r.z),o}static isFrontFacing(t,e,n,s){return pn.subVectors(n,e),Fn.subVectors(t,e),pn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),pn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,n),Wi.subVectors(r,n),Ro.subVectors(t,n);const l=Gi.dot(Ro),c=Wi.dot(Ro);if(l<=0&&c<=0)return e.copy(n);Co.subVectors(t,s);const h=Gi.dot(Co),u=Wi.dot(Co);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Gi,o);Po.subVectors(t,r);const g=Gi.dot(Po),_=Wi.dot(Po);if(_>=0&&g<=_)return e.copy(r);const v=g*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Wi,a);const m=h*_-g*u;if(m<=0&&u-h>=0&&g-_>=0)return uc.subVectors(r,s),a=(u-h)/(u-h+(g-_)),e.copy(s).addScaledVector(uc,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(n).addScaledVector(Gi,o).addScaledVector(Wi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=gl(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Uo(o,r,t+1/3),this.g=Uo(o,r,t),this.b=Uo(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=ve){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ve){const n=Dh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ve){return re.workingToColorSpace(Fe.copy(this),t),Math.round($t(Fe.r*255,0,255))*65536+Math.round($t(Fe.g*255,0,255))*256+Math.round($t(Fe.b*255,0,255))}getHexString(t=ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=ve){re.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(_r);const n=Bs(ti.h,_r.h,e),s=Bs(ti.s,_r.s,e),r=Bs(ti.l,_r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Qt;Qt.NAMES=Dh;let rf=0;class Ms extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Cn(),this.name="",this.type="Material",this.blending=is,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=na,this.blendDst=ia,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==na&&(n.blendSrc=this.blendSrc),this.blendDst!==ia&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class We extends Ms{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new I,xr=new ht;let of=0;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:of++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Va,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xr.fromBufferAttribute(this,e),xr.applyMatrix3(t),this.setXY(e,xr.x,xr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Va&&(t.usage=this.usage),t}}class Uh extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nh extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let af=0;const rn=new _e,No=new Ne,Xi=new I,$e=new nr,Rs=new nr,Ue=new I;class ge extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Cn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?Nh:Uh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return No.lookAt(t),No.updateMatrix(),this.applyMatrix4(No.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Zt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors($e.min,Rs.min),$e.expandByPoint(Ue),Ue.addVectors($e.max,Rs.max),$e.expandByPoint(Ue)):($e.expandByPoint(Rs.min),$e.expandByPoint(Rs.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ue.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(t,c),Ue.add(Xi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new I,l[P]=new I;const c=new I,h=new I,u=new I,f=new ht,g=new ht,_=new ht,v=new I,m=new I;function p(P,b,T){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,T),f.fromBufferAttribute(r,P),g.fromBufferAttribute(r,b),_.fromBufferAttribute(r,T),h.sub(c),u.sub(c),g.sub(f),_.sub(f);const D=1/(g.x*_.y-_.x*g.y);isFinite(D)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(D),m.copy(u).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(D),a[P].add(v),a[b].add(v),a[T].add(v),l[P].add(m),l[b].add(m),l[T].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,b=y.length;P<b;++P){const T=y[P],D=T.start,B=T.count;for(let H=D,J=D+B;H<J;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const M=new I,x=new I,S=new I,E=new I;function w(P){S.fromBufferAttribute(s,P),E.copy(S);const b=a[P];M.copy(b),M.sub(S.multiplyScalar(S.dot(b))).normalize(),x.crossVectors(E,b);const D=x.dot(l[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,D)}for(let P=0,b=y.length;P<b;++P){const T=y[P],D=T.start,B=T.count;for(let H=D,J=D+B;H<J;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,g=t.count;f<g;f+=3){const _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=e.count;f<g;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let g=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*h;for(let p=0;p<h;p++)f[_++]=c[g++]}return new vn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ge,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],g=t(f,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,g=u.length;f<g;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new _e,mi=new Lh,vr=new xl,fc=new I,Mr=new I,yr=new I,Sr=new I,Oo=new I,Er=new I,pc=new I,br=new I;class wt extends Ne{constructor(t=new ge,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Er.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Oo.fromBufferAttribute(u,t),o?Er.addScaledVector(Oo,h):Er.addScaledVector(Oo.sub(e),h))}e.add(Er)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(vr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(vr,fc)===null||mi.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,g.start),M=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let x=y,S=M;x<S;x+=3){const E=a.getX(x),w=a.getX(x+1),P=a.getX(x+2);s=Tr(this,p,t,n,c,h,u,E,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=_,p=v;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=Tr(this,o,t,n,c,h,u,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],y=Math.max(m.start,g.start),M=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let x=y,S=M;x<S;x+=3){const E=x,w=x+1,P=x+2;s=Tr(this,p,t,n,c,h,u,E,w,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=_,p=v;m<p;m+=3){const y=m,M=m+1,x=m+2;s=Tr(this,o,t,n,c,h,u,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lf(i,t,e,n,s,r,o,a){let l;if(t.side===qe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===li,a),l===null)return null;br.copy(a),br.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:i}}function Tr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Mr),i.getVertexPosition(l,yr),i.getVertexPosition(c,Sr);const h=lf(i,t,e,n,Mr,yr,Sr,pc);if(h){const u=new I;hn.getBarycoord(pc,Mr,yr,Sr,u),s&&(h.uv=hn.getInterpolatedAttribute(s,a,l,c,u,new ht)),r&&(h.uv1=hn.getInterpolatedAttribute(r,a,l,c,u,new ht)),o&&(h.normal=hn.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};hn.getNormal(Mr,yr,Sr,f.normal),h.face=f,h.barycoord=u}return h}class he extends ge{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function _(v,m,p,y,M,x,S,E,w,P,b){const T=x/w,D=S/P,B=x/2,H=S/2,J=E/2,W=w+1,j=P+1;let et=0,Y=0;const pt=new I;for(let dt=0;dt<j;dt++){const Mt=dt*D-H;for(let Nt=0;Nt<W;Nt++){const qt=Nt*T-B;pt[v]=qt*y,pt[m]=Mt*M,pt[p]=J,c.push(pt.x,pt.y,pt.z),pt[v]=0,pt[m]=0,pt[p]=E>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Nt/w),u.push(1-dt/P),et+=1}}for(let dt=0;dt<P;dt++)for(let Mt=0;Mt<w;Mt++){const Nt=f+Mt+W*dt,qt=f+Mt+W*(dt+1),te=f+(Mt+1)+W*(dt+1),jt=f+(Mt+1)+W*dt;l.push(Nt,qt,jt),l.push(qt,te,jt),Y+=6}a.addGroup(g,Y,b),g+=Y,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ds(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ge(i){const t={};for(let e=0;e<i.length;e++){const n=ds(i[e]);for(const s in n)t[s]=n[s]}return t}function cf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const Fh={clone:ds,merge:Ge};var hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Ms{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bh extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new I,mc=new ht,gc=new ht;class Be extends Bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,mc,gc),e.subVectors(gc,mc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,qi=1;class df extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(Yi,qi,t,e);s.layers=this.layers,this.add(s);const r=new Be(Yi,qi,t,e);r.layers=this.layers,this.add(r);const o=new Be(Yi,qi,t,e);o.layers=this.layers,this.add(o);const a=new Be(Yi,qi,t,e);a.layers=this.layers,this.add(a);const l=new Be(Yi,qi,t,e);l.layers=this.layers,this.add(l);const c=new Be(Yi,qi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class kh extends ze{constructor(t=[],e=cs,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ff extends ci{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new kh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:oi});r.uniforms.tEquirect.value=e;const o=new wt(s,r),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Tn),new df(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ie extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pf={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),g=.02,_=.005;c.inputState.pinching&&f>g+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=g-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(pf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class vl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new vl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mf extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Va,this.updateRanges=[],this.version=0,this.uuid=Cn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Cn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ve=new I;class jr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new jr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ml extends Ms{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Zi;const Cs=new I,ji=new I,Ji=new I,$i=new ht,Ps=new ht,zh=new _e,wr=new I,Ls=new I,Ar=new I,_c=new ht,Bo=new ht,xc=new ht;class Hh extends Ne{constructor(t=new Ml){if(super(),this.isSprite=!0,this.type="Sprite",Zi===void 0){Zi=new ge;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gf(e,5);Zi.setIndex([0,1,2,0,2,3]),Zi.setAttribute("position",new jr(n,3,0,!1)),Zi.setAttribute("uv",new jr(n,2,3,!1))}this.geometry=Zi,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ji.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Rr(wr.set(-.5,-.5,0),Ji,o,ji,s,r),Rr(Ls.set(.5,-.5,0),Ji,o,ji,s,r),Rr(Ar.set(.5,.5,0),Ji,o,ji,s,r),_c.set(0,0),Bo.set(1,0),xc.set(1,1);let a=t.ray.intersectTriangle(wr,Ls,Ar,!1,Cs);if(a===null&&(Rr(Ls.set(-.5,.5,0),Ji,o,ji,s,r),Bo.set(0,1),a=t.ray.intersectTriangle(wr,Ar,Ls,!1,Cs),a===null))return;const l=t.ray.origin.distanceTo(Cs);l<t.near||l>t.far||e.push({distance:l,point:Cs.clone(),uv:hn.getInterpolation(Cs,wr,Ls,Ar,_c,Bo,xc,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Rr(i,t,e,n,s,r){$i.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ps.x=r*$i.x-s*$i.y,Ps.y=s*$i.x+r*$i.y):Ps.copy($i),i.copy(t),i.x+=Ps.x,i.y+=Ps.y,i.applyMatrix4(zh)}const ko=new I,_f=new I,xf=new Jt;class Vn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ko.subVectors(n,e).cross(_f.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ko),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xf.getNormalMatrix(t),s=this.coplanarPoint(ko).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new xl,vf=new ht(.5,.5),Cr=new I;class yl{constructor(t=new Vn,e=new Vn,n=new Vn,s=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],g=r[7],_=r[8],v=r[9],m=r[10],p=r[11],y=r[12],M=r[13],x=r[14],S=r[15];if(s[0].setComponents(c-o,g-h,p-_,S-y).normalize(),s[1].setComponents(c+o,g+h,p+_,S+y).normalize(),s[2].setComponents(c+a,g+u,p+v,S+M).normalize(),s[3].setComponents(c-a,g-u,p-v,S-M).normalize(),n)s[4].setComponents(l,f,m,x).normalize(),s[5].setComponents(c-l,g-f,p-m,S-x).normalize();else if(s[4].setComponents(c-l,g-f,p-m,S-x).normalize(),e===wn)s[5].setComponents(c+l,g+f,p+m,S+x).normalize();else if(e===qr)s[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);const e=vf.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class En extends ze{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vh extends ze{constructor(t,e,n=Ci,s,r,o,a=xn,l=xn,c,h=qs,u=1){if(h!==qs&&h!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _l(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Gh extends ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ri extends ge{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new ht;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const g=n+u/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends ge{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],g=[];let _=0;const v=[],m=n/2;let p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(g,2));function y(){const x=new I,S=new I;let E=0;const w=(e-t)/n;for(let P=0;P<=r;P++){const b=[],T=P/r,D=T*(e-t)+t;for(let B=0;B<=s;B++){const H=B/s,J=H*l+a,W=Math.sin(J),j=Math.cos(J);S.x=D*W,S.y=-T*n+m,S.z=D*j,u.push(S.x,S.y,S.z),x.set(W,w,j).normalize(),f.push(x.x,x.y,x.z),g.push(H,1-T),b.push(_++)}v.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const T=v[b][P],D=v[b+1][P],B=v[b+1][P+1],H=v[b][P+1];(t>0||b!==0)&&(h.push(T,D,H),E+=3),(e>0||b!==r-1)&&(h.push(D,B,H),E+=3)}c.addGroup(p,E,0),p+=E}function M(x){const S=_,E=new ht,w=new I;let P=0;const b=x===!0?t:e,T=x===!0?1:-1;for(let B=1;B<=s;B++)u.push(0,m*T,0),f.push(0,T,0),g.push(.5,.5),_++;const D=_;for(let B=0;B<=s;B++){const J=B/s*l+a,W=Math.cos(J),j=Math.sin(J);w.x=b*j,w.y=m*T,w.z=b*W,u.push(w.x,w.y,w.z),f.push(0,T,0),E.x=W*.5+.5,E.y=j*.5*T+.5,g.push(E.x,E.y),_++}for(let B=0;B<s;B++){const H=S+B,J=D+B;x===!0?h.push(J,J+1,H):h.push(J+1,J,H),P+=3}c.addGroup(p,P,x===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class rs extends oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new rs(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sl extends ge{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new I,x=new I,S=new I;for(let E=0;E<e.length;E+=3)g(e[E+0],M),g(e[E+1],x),g(e[E+2],S),l(M,x,S,y)}function l(y,M,x,S){const E=S+1,w=[];for(let P=0;P<=E;P++){w[P]=[];const b=y.clone().lerp(x,P/E),T=M.clone().lerp(x,P/E),D=E-P;for(let B=0;B<=D;B++)B===0&&P===E?w[P][B]=b:w[P][B]=b.clone().lerp(T,B/D)}for(let P=0;P<E;P++)for(let b=0;b<2*(E-P)-1;b++){const T=Math.floor(b/2);b%2===0?(f(w[P][T+1]),f(w[P+1][T]),f(w[P][T])):(f(w[P][T+1]),f(w[P+1][T+1]),f(w[P+1][T]))}}function c(y){const M=new I;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const y=new I;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=m(y)/2/Math.PI+.5,S=p(y)/Math.PI+.5;o.push(x,1-S)}_(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],S=o[y+4],E=Math.max(M,x,S),w=Math.min(M,x,S);E>.9&&w<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function g(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function _(){const y=new I,M=new I,x=new I,S=new I,E=new ht,w=new ht,P=new ht;for(let b=0,T=0;b<r.length;b+=9,T+=6){y.set(r[b+0],r[b+1],r[b+2]),M.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),E.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),P.set(o[T+4],o[T+5]),S.copy(y).add(M).add(x).divideScalar(3);const D=m(S);v(E,T+0,y,D),v(w,T+2,M,D),v(P,T+4,x,D)}}function v(y,M,x,S){S<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sl(t.vertices,t.indices,t.radius,t.details)}}class El extends Sl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new El(t.radius,t.detail)}}class In{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,g=(o-h)/f;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ht:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,l=new _e;for(let g=0;g<=t;g++){const _=g/t;s[g]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos($t(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos($t(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bl extends In{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*h-g*u+this.aX,c=f*u+g*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mf extends bl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Tl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,g*=h,s(o,a,f,g)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Pr=new I,zo=new Tl,Ho=new Tl,Vo=new Tl;class ao extends In{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Pr.subVectors(s[0],s[1]).add(s[0]),c=Pr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Pr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pr),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),g),v=Math.pow(u.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(h),g);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),zo.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,_,v,m),Ho.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,_,v,m),Vo.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(zo.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Ho.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Vo.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(zo.calc(l),Ho.calc(l),Vo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function vc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function yf(i,t){const e=1-i;return e*e*t}function Sf(i,t){return 2*(1-i)*i*t}function Ef(i,t){return i*i*t}function ks(i,t,e,n){return yf(i,t)+Sf(i,e)+Ef(i,n)}function bf(i,t){const e=1-i;return e*e*e*t}function Tf(i,t){const e=1-i;return 3*e*e*i*t}function wf(i,t){return 3*(1-i)*i*i*t}function Af(i,t){return i*i*i*t}function zs(i,t,e,n,s){return bf(i,t)+Tf(i,e)+wf(i,n)+Af(i,s)}class Wh extends In{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rf extends In{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,s.x,r.x,o.x,a.x),zs(t,s.y,r.y,o.y,a.y),zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xh extends In{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cf extends In{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends In{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends In{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ks(t,s.x,r.x,o.x),ks(t,s.y,r.y,o.y),ks(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends In{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(vc(a,l.x,c.x,h.x,u.x),vc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var Jr=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:ao,CubicBezierCurve:Wh,CubicBezierCurve3:Rf,EllipseCurve:bl,LineCurve:Xh,LineCurve3:Cf,QuadraticBezierCurve:Yh,QuadraticBezierCurve3:qh,SplineCurve:Zh});class Pf extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Jr[s.type]().fromJSON(s))}return this}}class Mc extends Pf{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Xh(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Yh(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Wh(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new bl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class os extends Mc{constructor(t){super(t),this.uuid=Cn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Mc().fromJSON(s))}return this}}function Lf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=jh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Of(i,t,r,e)),i.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<s;f+=e){const g=i[f],_=i[f+1];g<a&&(a=g),_<l&&(l=_),g>h&&(h=g),_>u&&(u=_)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return $s(r,o,e,a,l,c,0),o}function jh(i,t,e,n,s){let r;if(s===qf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=yc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=yc(o/n|0,i[o],i[o+1],r);return r&&fs(r,r.next)&&(Qs(r),r=r.next),r}function Li(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fs(e,e.next)||Ee(e.prev,e,e.next)===0)){if(Qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function $s(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?Df(i,n,s,r):If(i)){t.push(l.i,i.i,c.i),Qs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Uf(Li(i),t),$s(i,t,e,n,s,r,2)):o===2&&Nf(i,t,e,n,s,r):$s(Li(i),t,e,n,s,r,1);break}}}function If(i){const t=i.prev,e=i,n=i.next;if(Ee(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),g=Math.max(a,l,c);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=f&&_.y>=u&&_.y<=g&&Us(s,a,r,l,o,c,_.x,_.y)&&Ee(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Df(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ee(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,g=Math.min(a,l,c),_=Math.min(h,u,f),v=Math.max(a,l,c),m=Math.max(h,u,f),p=Ga(g,_,t,e,n),y=Ga(v,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=y;){if(M.x>=g&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Us(a,h,l,u,c,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=g&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Us(a,h,l,u,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=g&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&Us(a,h,l,u,c,f,M.x,M.y)&&Ee(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=g&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&Us(a,h,l,u,c,f,x.x,x.y)&&Ee(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Uf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!fs(n,s)&&$h(n,e,e.next,s)&&Ks(n,s)&&Ks(s,n)&&(t.push(n.i,e.i,s.i),Qs(e),Qs(e.next),e=i=s),e=e.next}while(e!==i);return Li(e)}function Nf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wf(o,a)){let l=Kh(o,a);o=Li(o,o.next),l=Li(l,l.next),$s(o,t,e,n,s,r,0),$s(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Of(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=jh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Gf(c))}s.sort(Ff);for(let r=0;r<s.length;r++)e=Bf(s[r],e);return e}function Ff(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Bf(i,t){const e=kf(i,t);if(!e)return t;const n=Kh(e,i);return Li(n,n.next),Li(e,e.next)}function kf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(fs(i,e))return e;do{if(fs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Jh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Ks(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&zf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function zf(i,t){return Ee(i.prev,i,t.prev)<0&&Ee(t.next,i,i.next)<0}function Hf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ga(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vf(s)}function Vf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ga(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Gf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Jh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Us(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Jh(i,t,e,n,s,r,o,a)}function Wf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xf(i,t)&&(Ks(i,t)&&Ks(t,i)&&Yf(i,t)&&(Ee(i.prev,i,t.prev)||Ee(i,t.prev,t))||fs(i,t)&&Ee(i.prev,i,i.next)>0&&Ee(t.prev,t,t.next)>0)}function Ee(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fs(i,t){return i.x===t.x&&i.y===t.y}function $h(i,t,e,n){const s=Ir(Ee(i,t,e)),r=Ir(Ee(i,t,n)),o=Ir(Ee(e,n,i)),a=Ir(Ee(e,n,t));return!!(s!==r&&o!==a||s===0&&Lr(i,e,t)||r===0&&Lr(i,n,t)||o===0&&Lr(e,i,n)||a===0&&Lr(e,t,n))}function Lr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ir(i){return i>0?1:i<0?-1:0}function Xf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&$h(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return Ee(i.prev,i,i.next)<0?Ee(i,t,i.next)>=0&&Ee(i,i.prev,t)>=0:Ee(i,t,i.prev)<0||Ee(i,i.next,t)<0}function Yf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kh(i,t){const e=Wa(i.i,i.x,i.y),n=Wa(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function yc(i,t,e,n){const s=Wa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wa(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Zf{static triangulate(t,e,n=2){return Lf(t,e,n)}}class Wn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Wn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Sc(t),Ec(n,t);let o=t.length;e.forEach(Sc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ec(n,e[l]);const a=Zf.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Sc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ec(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class tr extends ge{constructor(t=new os([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:jf;let M,x=!1,S,E,w,P;p&&(M=p.getSpacedPoints(h),x=!0,f=!1,S=p.computeFrenetFrames(h,!1),E=new I,w=new I,P=new I),f||(m=0,g=0,_=0,v=0);const b=a.extractPoints(c);let T=b.shape;const D=b.holes;if(!Wn.isClockWise(T)){T=T.reverse();for(let rt=0,it=D.length;rt<it;rt++){const st=D[rt];Wn.isClockWise(st)&&(D[rt]=st.reverse())}}function H(rt){const st=10000000000000001e-36;let N=rt[0];for(let X=1;X<=rt.length;X++){const G=X%rt.length,K=rt[G],nt=K.x-N.x,ct=K.y-N.y,R=nt*nt+ct*ct,d=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(N.x),Math.abs(N.y)),C=st*d*d;if(R<=C){rt.splice(G,1),X--;continue}N=K}}H(T),D.forEach(H);const J=D.length,W=T;for(let rt=0;rt<J;rt++){const it=D[rt];T=T.concat(it)}function j(rt,it,st){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(it,st)}const et=T.length;function Y(rt,it,st){let N,X,G;const K=rt.x-it.x,nt=rt.y-it.y,ct=st.x-rt.x,R=st.y-rt.y,d=K*K+nt*nt,C=K*R-nt*ct;if(Math.abs(C)>Number.EPSILON){const L=Math.sqrt(d),k=Math.sqrt(ct*ct+R*R),F=it.x-nt/L,at=it.y+K/L,Q=st.x-R/k,vt=st.y+ct/k,ut=((Q-F)*R-(vt-at)*ct)/(K*R-nt*ct);N=F+K*ut-rt.x,X=at+nt*ut-rt.y;const $=N*N+X*X;if($<=2)return new ht(N,X);G=Math.sqrt($/2)}else{let L=!1;K>Number.EPSILON?ct>Number.EPSILON&&(L=!0):K<-Number.EPSILON?ct<-Number.EPSILON&&(L=!0):Math.sign(nt)===Math.sign(R)&&(L=!0),L?(N=-nt,X=K,G=Math.sqrt(d)):(N=K,X=nt,G=Math.sqrt(d/2))}return new ht(N/G,X/G)}const pt=[];for(let rt=0,it=W.length,st=it-1,N=rt+1;rt<it;rt++,st++,N++)st===it&&(st=0),N===it&&(N=0),pt[rt]=Y(W[rt],W[st],W[N]);const dt=[];let Mt,Nt=pt.concat();for(let rt=0,it=J;rt<it;rt++){const st=D[rt];Mt=[];for(let N=0,X=st.length,G=X-1,K=N+1;N<X;N++,G++,K++)G===X&&(G=0),K===X&&(K=0),Mt[N]=Y(st[N],st[G],st[K]);dt.push(Mt),Nt=Nt.concat(Mt)}let qt;if(m===0)qt=Wn.triangulateShape(W,D);else{const rt=[],it=[];for(let st=0;st<m;st++){const N=st/m,X=g*Math.cos(N*Math.PI/2),G=_*Math.sin(N*Math.PI/2)+v;for(let K=0,nt=W.length;K<nt;K++){const ct=j(W[K],pt[K],G);Ct(ct.x,ct.y,-X),N===0&&rt.push(ct)}for(let K=0,nt=J;K<nt;K++){const ct=D[K];Mt=dt[K];const R=[];for(let d=0,C=ct.length;d<C;d++){const L=j(ct[d],Mt[d],G);Ct(L.x,L.y,-X),N===0&&R.push(L)}N===0&&it.push(R)}}qt=Wn.triangulateShape(rt,it)}const te=qt.length,jt=_+v;for(let rt=0;rt<et;rt++){const it=f?j(T[rt],Nt[rt],jt):T[rt];x?(w.copy(S.normals[0]).multiplyScalar(it.x),E.copy(S.binormals[0]).multiplyScalar(it.y),P.copy(M[0]).add(w).add(E),Ct(P.x,P.y,P.z)):Ct(it.x,it.y,0)}for(let rt=1;rt<=h;rt++)for(let it=0;it<et;it++){const st=f?j(T[it],Nt[it],jt):T[it];x?(w.copy(S.normals[rt]).multiplyScalar(st.x),E.copy(S.binormals[rt]).multiplyScalar(st.y),P.copy(M[rt]).add(w).add(E),Ct(P.x,P.y,P.z)):Ct(st.x,st.y,u/h*rt)}for(let rt=m-1;rt>=0;rt--){const it=rt/m,st=g*Math.cos(it*Math.PI/2),N=_*Math.sin(it*Math.PI/2)+v;for(let X=0,G=W.length;X<G;X++){const K=j(W[X],pt[X],N);Ct(K.x,K.y,u+st)}for(let X=0,G=D.length;X<G;X++){const K=D[X];Mt=dt[X];for(let nt=0,ct=K.length;nt<ct;nt++){const R=j(K[nt],Mt[nt],N);x?Ct(R.x,R.y+M[h-1].y,M[h-1].x+st):Ct(R.x,R.y,u+st)}}}tt(),lt();function tt(){const rt=s.length/3;if(f){let it=0,st=et*it;for(let N=0;N<te;N++){const X=qt[N];It(X[2]+st,X[1]+st,X[0]+st)}it=h+m*2,st=et*it;for(let N=0;N<te;N++){const X=qt[N];It(X[0]+st,X[1]+st,X[2]+st)}}else{for(let it=0;it<te;it++){const st=qt[it];It(st[2],st[1],st[0])}for(let it=0;it<te;it++){const st=qt[it];It(st[0]+et*h,st[1]+et*h,st[2]+et*h)}}n.addGroup(rt,s.length/3-rt,0)}function lt(){const rt=s.length/3;let it=0;mt(W,it),it+=W.length;for(let st=0,N=D.length;st<N;st++){const X=D[st];mt(X,it),it+=X.length}n.addGroup(rt,s.length/3-rt,1)}function mt(rt,it){let st=rt.length;for(;--st>=0;){const N=st;let X=st-1;X<0&&(X=rt.length-1);for(let G=0,K=h+m*2;G<K;G++){const nt=et*G,ct=et*(G+1),R=it+N+nt,d=it+X+nt,C=it+X+ct,L=it+N+ct;Xt(R,d,C,L)}}}function Ct(rt,it,st){l.push(rt),l.push(it),l.push(st)}function It(rt,it,st){ne(rt),ne(it),ne(st);const N=s.length/3,X=y.generateTopUV(n,s,N-3,N-2,N-1);U(X[0]),U(X[1]),U(X[2])}function Xt(rt,it,st,N){ne(rt),ne(it),ne(N),ne(it),ne(st),ne(N);const X=s.length/3,G=y.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);U(G[0]),U(G[1]),U(G[3]),U(G[1]),U(G[2]),U(G[3])}function ne(rt){s.push(l[rt*3+0]),s.push(l[rt*3+1]),s.push(l[rt*3+2])}function U(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Jf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jr[s.type]().fromJSON(s)),new tr(n,t.options)}}const jf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,l),new ht(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],g=t[s*3+1],_=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new ht(o,1-l),new ht(c,1-u),new ht(f,1-_),new ht(v,1-p)]:[new ht(a,1-l),new ht(h,1-u),new ht(g,1-_),new ht(m,1-p)]}};function Jf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ke extends ge{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,g=[],_=[],v=[],m=[];for(let p=0;p<h;p++){const y=p*f-o;for(let M=0;M<c;M++){const x=M*u-r;_.push(x,-y,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,x=y+c*(p+1),S=y+1+c*(p+1),E=y+1+c*p;g.push(M,x,E),g.push(x,S,E)}this.setIndex(g),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yn extends ge{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,g=new I,_=new ht;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const p=r+m/n*o;g.x=u*Math.cos(p),g.y=u*Math.sin(p),l.push(g.x,g.y,g.z),c.push(0,0,1),_.x=(g.x/e+1)/2,_.y=(g.y/e+1)/2,h.push(_.x,_.y)}u+=f}for(let v=0;v<s;v++){const m=v*(n+1);for(let p=0;p<n;p++){const y=p+m,M=y,x=y+n+1,S=y+n+2,E=y+1;a.push(M,x,E),a.push(x,S,E)}}this.setIndex(a),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yn(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class wl extends ge{constructor(t=new os([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let g=f.shape;const _=f.holes;Wn.isClockWise(g)===!1&&(g=g.reverse());for(let m=0,p=_.length;m<p;m++){const y=_[m];Wn.isClockWise(y)===!0&&(_[m]=y.reverse())}const v=Wn.triangulateShape(g,_);for(let m=0,p=_.length;m<p;m++){const y=_[m];g=g.concat(y)}for(let m=0,p=g.length;m<p;m++){const y=g[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,p=v.length;m<p;m++){const y=v[m],M=y[0]+u,x=y[1]+u,S=y[2]+u;n.push(M,x,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return $f(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new wl(n,t.curveSegments)}}function $f(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ir extends ge{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,g=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){const E=S/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(E+x,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=h[p][y+1],x=h[p][y],S=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&g.push(M,x,E),(p!==n-1||l<Math.PI)&&g.push(x,S,E)}this.setIndex(g),this.setAttribute("position",new Zt(_,3)),this.setAttribute("normal",new Zt(v,3)),this.setAttribute("uv",new Zt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class An extends ge{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let g=0;g<=n;g++)for(let _=0;_<=s;_++){const v=_/s*r,m=g/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(_/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=s;_++){const v=(s+1)*g+_-1,m=(s+1)*(g-1)+_-1,p=(s+1)*(g-1)+_,y=(s+1)*g+_;o.push(v,m,y),o.push(m,p,y)}this.setIndex(o),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class sr extends ge{constructor(t=new qh(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,l=new I,c=new ht;let h=new I;const u=[],f=[],g=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(g,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),p()}function m(M){h=t.getPointAt(M/e,h);const x=o.normals[M],S=o.binormals[M];for(let E=0;E<=s;E++){const w=E/s*Math.PI*2,P=Math.sin(w),b=-Math.cos(w);l.x=b*x.x+P*S.x,l.y=b*x.y+P*S.y,l.z=b*x.z+P*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const S=(s+1)*(M-1)+(x-1),E=(s+1)*M+(x-1),w=(s+1)*M+x,P=(s+1)*(M-1)+x;_.push(S,E,P),_.push(E,w,P)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)c.x=M/e,c.y=x/s,g.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new sr(new Jr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class kt extends Ms{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xa extends kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Kf extends Ms{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qf extends Ms{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Qh extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tp extends Qh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Go=new _e,bc=new I,Tc=new I;class ep{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yl,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(bc),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Al extends Bh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class np extends ep{constructor(){super(new Al(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ip extends Qh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new np}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class wc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rp extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ac(i,t,e,n){const s=op(n);switch(e){case Eh:return i*t;case Th:return i*t/s.components*s.byteLength;case fl:return i*t/s.components*s.byteLength;case wh:return i*t*2/s.components*s.byteLength;case pl:return i*t*2/s.components*s.byteLength;case bh:return i*t*3/s.components*s.byteLength;case gn:return i*t*4/s.components*s.byteLength;case ml:return i*t*4/s.components*s.byteLength;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ma:case _a:return Math.max(i,16)*Math.max(t,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(t,8)/2;case xa:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ta:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case La:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Na:case Oa:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ba:case ka:return Math.ceil(i/4)*Math.ceil(t/4)*8;case za:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function op(i){switch(i){case Pn:case vh:return{byteLength:1,components:1};case Xs:case Mh:case vs:return{byteLength:2,components:1};case ul:case dl:return{byteLength:2,components:4};case Ci:case hl:case Gn:return{byteLength:4,components:1};case yh:case Sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function tu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ap(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)g=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,_)=>g.start-_.start);let f=0;for(let g=1;g<u.length;g++){const _=u[f],v=u[g];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,u[f]=v)}u.length=f+1;for(let g=0,_=u.length;g<_;g++){const v=u[g];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var lp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,hp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,_p=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jp=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,om=`struct PhysicalMaterial {
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
}`,am=`
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_m=`#if defined( USE_POINTS_UV )
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
#endif`,xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Om=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,jm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,e0=`#ifdef USE_TRANSMISSION
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
#endif`,n0=`#ifdef USE_TRANSMISSION
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l0=`uniform sampler2D t2D;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`#include <common>
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
}`,p0=`#if DEPTH_PACKING == 3200
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
}`,m0=`#define DISTANCE
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
}`,g0=`#define DISTANCE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`uniform float scale;
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
}`,M0=`uniform vec3 diffuse;
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
}`,y0=`#include <common>
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
}`,S0=`uniform vec3 diffuse;
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
}`,E0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
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
}`,T0=`#define MATCAP
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
}`,w0=`#define MATCAP
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
}`,A0=`#define NORMAL
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
}`,R0=`#define NORMAL
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
}`,C0=`#define PHONG
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
}`,P0=`#define PHONG
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
}`,L0=`#define STANDARD
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
}`,I0=`#define STANDARD
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
}`,D0=`#define TOON
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
}`,U0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,O0=`uniform vec3 diffuse;
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
}`,F0=`#include <common>
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
}`,B0=`uniform vec3 color;
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
}`,k0=`uniform float rotation;
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
}`,z0=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:lp,alphahash_pars_fragment:cp,alphamap_fragment:hp,alphamap_pars_fragment:up,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:_p,begin_vertex:xp,beginnormal_vertex:vp,bsdfs:Mp,iridescence_fragment:yp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:bp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:wp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Up,displacementmap_vertex:Np,emissivemap_fragment:Op,emissivemap_pars_fragment:Fp,colorspace_fragment:Bp,colorspace_pars_fragment:kp,envmap_fragment:zp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Vp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:tm,envmap_vertex:Wp,fog_vertex:Xp,fog_pars_vertex:Yp,fog_fragment:qp,fog_pars_fragment:Zp,gradientmap_pars_fragment:jp,lightmap_pars_fragment:Jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Kp,lights_pars_begin:Qp,lights_toon_fragment:em,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:om,lights_fragment_begin:am,lights_fragment_maps:lm,lights_fragment_end:cm,logdepthbuf_fragment:hm,logdepthbuf_pars_fragment:um,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:_m,metalnessmap_fragment:xm,metalnessmap_pars_fragment:vm,morphinstance_vertex:Mm,morphcolor_vertex:ym,morphnormal_vertex:Sm,morphtarget_pars_vertex:Em,morphtarget_vertex:bm,normal_fragment_begin:Tm,normal_fragment_maps:wm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Um,opaque_fragment:Nm,packing:Om,premultiplied_alpha_fragment:Fm,project_vertex:Bm,dithering_fragment:km,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Wm,shadowmap_vertex:Xm,shadowmask_pars_fragment:Ym,skinbase_vertex:qm,skinning_pars_vertex:Zm,skinning_vertex:jm,skinnormal_vertex:Jm,specularmap_fragment:$m,specularmap_pars_fragment:Km,tonemapping_fragment:Qm,tonemapping_pars_fragment:t0,transmission_fragment:e0,transmission_pars_fragment:n0,uv_pars_fragment:i0,uv_pars_vertex:s0,uv_vertex:r0,worldpos_vertex:o0,background_vert:a0,background_frag:l0,backgroundCube_vert:c0,backgroundCube_frag:h0,cube_vert:u0,cube_frag:d0,depth_vert:f0,depth_frag:p0,distanceRGBA_vert:m0,distanceRGBA_frag:g0,equirect_vert:_0,equirect_frag:x0,linedashed_vert:v0,linedashed_frag:M0,meshbasic_vert:y0,meshbasic_frag:S0,meshlambert_vert:E0,meshlambert_frag:b0,meshmatcap_vert:T0,meshmatcap_frag:w0,meshnormal_vert:A0,meshnormal_frag:R0,meshphong_vert:C0,meshphong_frag:P0,meshphysical_vert:L0,meshphysical_frag:I0,meshtoon_vert:D0,meshtoon_frag:U0,points_vert:N0,points_frag:O0,shadow_vert:F0,shadow_frag:B0,sprite_vert:k0,sprite_frag:z0},bt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},bn={basic:{uniforms:Ge([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ge([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ge([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ge([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ge([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ge([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ge([bt.points,bt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ge([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ge([bt.common,bt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ge([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ge([bt.sprite,bt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:Ge([bt.common,bt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:Ge([bt.lights,bt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};bn.physical={uniforms:Ge([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const Dr={r:0,b:0,g:0},_i=new Ln,H0=new _e;function V0(i,t,e,n,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,u=null,f=0,g=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const S=_(M);S===null?p(a,l):S&&S.isColor&&(p(S,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===oo)?(h===void 0&&(h=new wt(new he(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:ds(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_i.copy(x.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H0.makeRotationFromEuler(_i)),h.material.toneMapped=re.getTransfer(S.colorSpace)!==ue,(u!==S||f!==S.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,f=S.version,g=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new wt(new ke(2,2),new Zn({name:"BackgroundMaterial",uniforms:ds(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=re.getTransfer(S.colorSpace)!==ue,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,g=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(Dr,Oh(i)),n.buffers.color.setClear(Dr.r,Dr.g,Dr.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:v,addToRenderList:m,dispose:y}}function G0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(T,D,B,H,J){let W=!1;const j=u(H,B,D);r!==j&&(r=j,c(r.object)),W=g(T,H,B,J),W&&_(T,H,B,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(T,D,B,H),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function u(T,D,B){const H=B.wireframe===!0;let J=n[T.id];J===void 0&&(J={},n[T.id]=J);let W=J[D.id];W===void 0&&(W={},J[D.id]=W);let j=W[H];return j===void 0&&(j=f(l()),W[H]=j),j}function f(T){const D=[],B=[],H=[];for(let J=0;J<e;J++)D[J]=0,B[J]=0,H[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:H,object:T,attributes:{},index:null}}function g(T,D,B,H){const J=r.attributes,W=D.attributes;let j=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){const dt=J[Y];let Mt=W[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(Mt=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(Mt=T.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;j++}return r.attributesNum!==j||r.index!==H}function _(T,D,B,H){const J={},W=D.attributes;let j=0;const et=B.getAttributes();for(const Y in et)if(et[Y].location>=0){let dt=W[Y];dt===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(dt=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(dt=T.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),J[Y]=Mt,j++}r.attributes=J,r.attributesNum=j,r.index=H}function v(){const T=r.newAttributes;for(let D=0,B=T.length;D<B;D++)T[D]=0}function m(T){p(T,0)}function p(T,D){const B=r.newAttributes,H=r.enabledAttributes,J=r.attributeDivisors;B[T]=1,H[T]===0&&(i.enableVertexAttribArray(T),H[T]=1),J[T]!==D&&(i.vertexAttribDivisor(T,D),J[T]=D)}function y(){const T=r.newAttributes,D=r.enabledAttributes;for(let B=0,H=D.length;B<H;B++)D[B]!==T[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function M(T,D,B,H,J,W,j){j===!0?i.vertexAttribIPointer(T,D,B,J,W):i.vertexAttribPointer(T,D,B,H,J,W)}function x(T,D,B,H){v();const J=H.attributes,W=B.getAttributes(),j=D.defaultAttributeValues;for(const et in W){const Y=W[et];if(Y.location>=0){let pt=J[et];if(pt===void 0&&(et==="instanceMatrix"&&T.instanceMatrix&&(pt=T.instanceMatrix),et==="instanceColor"&&T.instanceColor&&(pt=T.instanceColor)),pt!==void 0){const dt=pt.normalized,Mt=pt.itemSize,Nt=t.get(pt);if(Nt===void 0)continue;const qt=Nt.buffer,te=Nt.type,jt=Nt.bytesPerElement,tt=te===i.INT||te===i.UNSIGNED_INT||pt.gpuType===hl;if(pt.isInterleavedBufferAttribute){const lt=pt.data,mt=lt.stride,Ct=pt.offset;if(lt.isInstancedInterleavedBuffer){for(let It=0;It<Y.locationSize;It++)p(Y.location+It,lt.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let It=0;It<Y.locationSize;It++)m(Y.location+It);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let It=0;It<Y.locationSize;It++)M(Y.location+It,Mt/Y.locationSize,te,dt,mt*jt,(Ct+Mt/Y.locationSize*It)*jt,tt)}else{if(pt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)p(Y.location+lt,pt.meshPerAttribute);T.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let lt=0;lt<Y.locationSize;lt++)m(Y.location+lt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let lt=0;lt<Y.locationSize;lt++)M(Y.location+lt,Mt/Y.locationSize,te,dt,Mt*jt,Mt/Y.locationSize*lt*jt,tt)}}else if(j!==void 0){const dt=j[et];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(Y.location,dt);break;case 3:i.vertexAttrib3fv(Y.location,dt);break;case 4:i.vertexAttrib4fv(Y.location,dt);break;default:i.vertexAttrib1fv(Y.location,dt)}}}}y()}function S(){P();for(const T in n){const D=n[T];for(const B in D){const H=D[B];for(const J in H)h(H[J].object),delete H[J];delete D[B]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const D=n[T.id];for(const B in D){const H=D[B];for(const J in H)h(H[J].object),delete H[J];delete D[B]}delete n[T.id]}function w(T){for(const D in n){const B=n[D];if(B[T.id]===void 0)continue;const H=B[T.id];for(const J in H)h(H[J].object),delete H[J];delete B[T.id]}}function P(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function W0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];e.update(g,n,1)}function l(c,h,u,f){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<c.length;_++)o(c[_],h[_],f[_]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*f[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function X0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==gn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===vs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Pn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Gn&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:g,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:S,maxSamples:E}}function Y0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Vn,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const g=u.length!==0||f||n!==0||s;return s=f,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,g){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,M=y*4;let x=p.clippingState||null;l.value=x,x=h(_,f,M,g);for(let S=0;S!==M;++S)x[S]=e[S];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,g,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=g+v*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=g;M!==v;++M,x+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function q0(i){let t=new WeakMap;function e(o,a){return a===ua?o.mapping=cs:a===da&&(o.mapping=hs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ua||a===da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ff(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const es=4,Rc=[.125,.215,.35,.446,.526,.582],Si=20,Wo=new Al,Cc=new Qt;let Xo=null,Yo=0,qo=0,Zo=!1;const Mi=(1+Math.sqrt(5))/2,Ki=1/Mi,Pc=[new I(-Mi,Ki,0),new I(Mi,Ki,0),new I(-Ki,0,Mi),new I(Ki,0,Mi),new I(0,Mi,-Ki),new I(0,Mi,Ki),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Z0=new I;class Lc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Z0}=r;Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,Yo,qo),this._renderer.xr.enabled=Zo,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),Yo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Zo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:vs,format:gn,colorSpace:us,depthBuffer:!1},s=Ic(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=j0(r)),this._blurMaterial=J0(r,t,e)}return s}_compileMaterial(t){const e=new wt(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s,r){const l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,g=u.toneMapping;u.getClearColor(Cc),u.toneMapping=ai,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new We({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new wt(new he,v);let p=!1;const y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,p=!0):(v.color.copy(Cc),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const S=this._cubeSize;Ur(s,x*S,M>2?S:0,S,S),u.setRenderTarget(s),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=g,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===cs||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new wt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pc[(s-r-1)%Pc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Si-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Si;m>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);const p=[];let y=0;for(let w=0;w<Si;++w){const P=w/v,b=Math.exp(-P*P/2);p.push(b),w===0?y+=b:w<m&&(y+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-n;const x=this._sizeLods[s],S=3*x*(s>M-es?s-M+es:0),E=4*(this._cubeSize-x);Ur(e,S,E,3*x,2*x),l.setRenderTarget(e),l.render(u,Wo)}}function j0(i){const t=[],e=[],n=[];let s=i;const r=i-es+1+Rc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-es?l=Rc[o-i+es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,_=6,v=3,m=2,p=1,y=new Float32Array(v*_*g),M=new Float32Array(m*_*g),x=new Float32Array(p*_*g);for(let E=0;E<g;E++){const w=E%3*2/3-1,P=E>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];y.set(b,v*_*E),M.set(f,m*_*E);const T=[E,E,E,E,E,E];x.set(T,p*_*E)}const S=new ge;S.setAttribute("position",new vn(y,v)),S.setAttribute("uv",new vn(M,m)),S.setAttribute("faceIndex",new vn(x,p)),t.push(S),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ic(i,t,e){const n=new ci(i,t,e);return n.texture.mapping=oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function J0(i,t,e){const n=new Float32Array(Si),s=new I(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Dc(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Uc(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function $0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ua||l===da,h=l===cs||l===hs;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Lc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const g=a.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new Lc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function K0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Js("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Q0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];const g=r.get(f);g&&(t.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER)}function c(u){const f=[],g=u.index,_=u.attributes.position;let v=0;if(g!==null){const y=g.array;v=g.version;for(let M=0,x=y.length;M<x;M+=3){const S=y[M+0],E=y[M+1],w=y[M+2];f.push(S,E,E,w,w,S)}}else if(_!==void 0){const y=_.array;v=_.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const S=M+0,E=M+1,w=M+2;f.push(S,E,E,w,w,S)}}else return;const m=new(Ch(f)?Nh:Uh)(f,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const g=u.index;g!==null&&f.version<g.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function tg(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,g){i.drawElements(n,g,r,f*o),e.update(g,n,1)}function c(f,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,f*o,_),e.update(g,n,_))}function h(f,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=g[p];e.update(m,n,1)}function u(f,g,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,g[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,f,0,v,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y]*v[y];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function eg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ng(i,t,e){const n=new WeakMap,s=new me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let T=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var g=T;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let S=a.attributes.position.count*x,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const w=new Float32Array(S*E*4*u),P=new Ph(w,S,E,u);P.type=Gn,P.needsUpdate=!0;const b=x*4;for(let D=0;D<u;D++){const B=p[D],H=y[D],J=M[D],W=S*E*4*D;for(let j=0;j<B.count;j++){const et=j*b;_===!0&&(s.fromBufferAttribute(B,j),w[W+et+0]=s.x,w[W+et+1]=s.y,w[W+et+2]=s.z,w[W+et+3]=0),v===!0&&(s.fromBufferAttribute(H,j),w[W+et+4]=s.x,w[W+et+5]=s.y,w[W+et+6]=s.z,w[W+et+7]=0),m===!0&&(s.fromBufferAttribute(J,j),w[W+et+8]=s.x,w[W+et+9]=s.y,w[W+et+10]=s.z,w[W+et+11]=J.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ht(S,E)},n.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ig(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const eu=new ze,Nc=new Vh(1,1),nu=new Ph,iu=new Jd,su=new kh,Oc=[],Fc=[],Bc=new Float32Array(16),kc=new Float32Array(9),zc=new Float32Array(4);function ys(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function lo(i,t){let e=Fc[t];e===void 0&&(e=new Int32Array(t),Fc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function rg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function lg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),De(e,n)}}function cg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;kc.set(n),i.uniformMatrix3fv(this.addr,!1,kc),De(e,n)}}function hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Bc.set(n),i.uniformMatrix4fv(this.addr,!1,Bc),De(e,n)}}function ug(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function mg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function vg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nc.compareFunction=Rh,r=Nc):r=eu,e.setTexture2D(t||r,s)}function Mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||iu,s)}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||su,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nu,s)}function Eg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return og;case 35666:return ag;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Sg}}function bg(i,t){i.uniform1fv(this.addr,t)}function Tg(i,t){const e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function wg(i,t){const e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Ag(i,t){const e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Rg(i,t){const e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Cg(i,t){const e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){const e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Lg(i,t){i.uniform1iv(this.addr,t)}function Ig(i,t){i.uniform2iv(this.addr,t)}function Dg(i,t){i.uniform3iv(this.addr,t)}function Ug(i,t){i.uniform4iv(this.addr,t)}function Ng(i,t){i.uniform1uiv(this.addr,t)}function Og(i,t){i.uniform2uiv(this.addr,t)}function Fg(i,t){i.uniform3uiv(this.addr,t)}function Bg(i,t){i.uniform4uiv(this.addr,t)}function kg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||eu,r[o])}function zg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||iu,r[o])}function Hg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||su,r[o])}function Vg(i,t,e){const n=this.cache,s=t.length,r=lo(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||nu,r[o])}function Gg(i){switch(i){case 5126:return bg;case 35664:return Tg;case 35665:return wg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Ig;case 35668:case 35672:return Dg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Og;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return zg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Vg}}class Wg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class Xg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Gg(e.type)}}class Yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function Hc(i,t){i.seq.push(t),i.map[t.id]=t}function qg(i,t,e){const n=i.name,s=n.length;for(jo.lastIndex=0;;){const r=jo.exec(n),o=jo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hc(e,c===void 0?new Wg(a,i,t):new Xg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Yg(a),Hc(e,u)),e=u}}}class Xr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);qg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zg=37297;let jg=0;function Jg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Gc=new Jt;function $g(i){re._getMatrix(Gc,re.workingColorSpace,i);const t=`mat3( ${Gc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Jg(i.getShaderSource(t),a)}else return r}function Kg(i,t){const e=$g(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Qg(i,t){let e;switch(t){case cd:e="Linear";break;case hd:e="Reinhard";break;case ud:e="Cineon";break;case dd:e="ACESFilmic";break;case pd:e="AgX";break;case md:e="Neutral";break;case fd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new I;function t_(){re.getLuminanceCoefficients(Nr);const i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function n_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ns(i){return i!==""}function Xc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(s_,o_)}const r_=new Map;function o_(i,t){let e=Kt[t];if(e===void 0){const n=r_.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qc(i){return i.replace(a_,l_)}function l_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function c_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===gh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function h_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case hs:t="ENVMAP_TYPE_CUBE";break;case oo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hs:t="ENVMAP_MODE_REFRACTION";break}return t}function d_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case ad:t="ENVMAP_BLENDING_MIX";break;case ld:t="ENVMAP_BLENDING_ADD";break}return t}function f_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function p_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=c_(e),c=h_(e),h=u_(e),u=d_(e),f=f_(e),g=e_(e),_=n_(r),v=s.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(m=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[Zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ai?Qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Kg("linearToOutputTexel",e.outputColorSpace),t_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Ya(o),o=Xc(o,e),o=Yc(o,e),a=Ya(a),a=Xc(a,e),a=Yc(a,e),o=qc(o),a=qc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+o,x=y+p+a,S=Vc(s,s.VERTEX_SHADER,M),E=Vc(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(D){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(S)||"",J=s.getShaderInfoLog(E)||"",W=B.trim(),j=H.trim(),et=J.trim();let Y=!0,pt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,E);else{const dt=Wc(s,S,"vertex"),Mt=Wc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+dt+`
`+Mt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||et==="")&&(pt=!1);pt&&(D.diagnostics={runnable:Y,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:et,prefix:p}})}s.deleteShader(S),s.deleteShader(E),P=new Xr(s,v),b=i_(s,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,Zg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new __(t),e.set(t,n)),n}}class __{constructor(t){this.id=m_++,this.code=t,this.usedTimes=0}}function x_(i,t,e,n,s,r,o){const a=new Ih,l=new g_,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,T,D,B,H){const J=B.fog,W=H.geometry,j=b.isMeshStandardMaterial?B.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||j),Y=et&&et.mapping===oo?et.image.height:null,pt=_[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Nt=0;W.morphAttributes.position!==void 0&&(Nt=1),W.morphAttributes.normal!==void 0&&(Nt=2),W.morphAttributes.color!==void 0&&(Nt=3);let qt,te,jt,tt;if(pt){const ae=bn[pt];qt=ae.vertexShader,te=ae.fragmentShader}else qt=b.vertexShader,te=b.fragmentShader,l.update(b),jt=l.getVertexShaderID(b),tt=l.getFragmentShaderID(b);const lt=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Ct=H.isInstancedMesh===!0,It=H.isBatchedMesh===!0,Xt=!!b.map,ne=!!b.matcap,U=!!et,rt=!!b.aoMap,it=!!b.lightMap,st=!!b.bumpMap,N=!!b.normalMap,X=!!b.displacementMap,G=!!b.emissiveMap,K=!!b.metalnessMap,nt=!!b.roughnessMap,ct=b.anisotropy>0,R=b.clearcoat>0,d=b.dispersion>0,C=b.iridescence>0,L=b.sheen>0,k=b.transmission>0,F=ct&&!!b.anisotropyMap,at=R&&!!b.clearcoatMap,Q=R&&!!b.clearcoatNormalMap,vt=R&&!!b.clearcoatRoughnessMap,ut=C&&!!b.iridescenceMap,$=C&&!!b.iridescenceThicknessMap,ft=L&&!!b.sheenColorMap,Bt=L&&!!b.sheenRoughnessMap,At=!!b.specularMap,Et=!!b.specularColorMap,Gt=!!b.specularIntensityMap,O=k&&!!b.transmissionMap,_t=k&&!!b.thicknessMap,St=!!b.gradientMap,Dt=!!b.alphaMap,gt=b.alphaTest>0,ot=!!b.alphaHash,Pt=!!b.extensions;let Yt=ai;b.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const pe={shaderID:pt,shaderType:b.type,shaderName:b.name,vertexShader:qt,fragmentShader:te,defines:b.defines,customVertexShaderID:jt,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:It,batchingColor:It&&H._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&H.instanceColor!==null,instancingMorph:Ct&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:us,alphaToCoverage:!!b.alphaToCoverage,map:Xt,matcap:ne,envMap:U,envMapMode:U&&et.mapping,envMapCubeUVHeight:Y,aoMap:rt,lightMap:it,bumpMap:st,normalMap:N,displacementMap:f&&X,emissiveMap:G,normalMapObjectSpace:N&&b.normalMapType===vd,normalMapTangentSpace:N&&b.normalMapType===Ah,metalnessMap:K,roughnessMap:nt,anisotropy:ct,anisotropyMap:F,clearcoat:R,clearcoatMap:at,clearcoatNormalMap:Q,clearcoatRoughnessMap:vt,dispersion:d,iridescence:C,iridescenceMap:ut,iridescenceThicknessMap:$,sheen:L,sheenColorMap:ft,sheenRoughnessMap:Bt,specularMap:At,specularColorMap:Et,specularIntensityMap:Gt,transmission:k,transmissionMap:O,thicknessMap:_t,gradientMap:St,opaque:b.transparent===!1&&b.blending===is&&b.alphaToCoverage===!1,alphaMap:Dt,alphaTest:gt,alphaHash:ot,combine:b.combine,mapUv:Xt&&v(b.map.channel),aoMapUv:rt&&v(b.aoMap.channel),lightMapUv:it&&v(b.lightMap.channel),bumpMapUv:st&&v(b.bumpMap.channel),normalMapUv:N&&v(b.normalMap.channel),displacementMapUv:X&&v(b.displacementMap.channel),emissiveMapUv:G&&v(b.emissiveMap.channel),metalnessMapUv:K&&v(b.metalnessMap.channel),roughnessMapUv:nt&&v(b.roughnessMap.channel),anisotropyMapUv:F&&v(b.anisotropyMap.channel),clearcoatMapUv:at&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:$&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(b.sheenRoughnessMap.channel),specularMapUv:At&&v(b.specularMap.channel),specularColorMapUv:Et&&v(b.specularColorMap.channel),specularIntensityMapUv:Gt&&v(b.specularIntensityMap.channel),transmissionMapUv:O&&v(b.transmissionMap.channel),thicknessMapUv:_t&&v(b.thicknessMap.channel),alphaMapUv:Dt&&v(b.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(N||ct),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(Xt||Dt),fog:!!J,useFog:b.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Xt&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===ue,decodeVideoTextureEmissive:G&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ae,flipSided:b.side===qe,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&b.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)T.push(D),T.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(y(T,b),M(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function y(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function M(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const T=_[b.type];let D;if(T){const B=bn[T];D=Fh.clone(B.uniforms)}else D=b.uniforms;return D}function S(b,T){let D;for(let B=0,H=h.length;B<H;B++){const J=h[B];if(J.cacheKey===T){D=J,++D.usedTimes;break}}return D===void 0&&(D=new p_(i,T,b,r),h.push(D)),D}function E(b){if(--b.usedTimes===0){const T=h.indexOf(b);h[T]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:P}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function jc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Jc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,g,_,v,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:g,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=g,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,f,g,_,v,m){const p=o(u,f,g,_,v,m);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):e.push(p)}function l(u,f,g,_,v,m){const p=o(u,f,g,_,v,m);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||M_),n.length>1&&n.sort(f||jc),s.length>1&&s.sort(f||jc)}function h(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function y_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Jc,i.set(n,[o])):s>=r.length?(o=new Jc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function S_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function E_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b_=0;function T_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function w_(i){const t=new S_,e=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const s=new I,r=new _e,o=new _e;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let g=0,_=0,v=0,m=0,p=0,y=0,M=0,x=0,S=0,E=0,w=0;c.sort(T_);for(let b=0,T=c.length;b<T;b++){const D=c[b],B=D.color,H=D.intensity,J=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*H,u+=B.g*H,f+=B.b*H;else if(D.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(D.sh.coefficients[j],H);w++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,Y=e.get(D);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=D.shadow.matrix,y++}n.directional[g]=j,g++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(B).multiplyScalar(H),j.distance=J,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,n.spot[v]=j;const et=D.shadow;if(D.map&&(n.spotLightMap[S]=D.map,S++,et.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=et.matrix,D.castShadow){const Y=e.get(D);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=W,x++}v++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(B).multiplyScalar(H),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=j,m++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const et=D.shadow,Y=e.get(D);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,Y.shadowCameraNear=et.camera.near,Y.shadowCameraFar=et.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=D.shadow.matrix,M++}n.point[_]=j,_++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(H),j.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==g||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==S||P.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,P.directionalLength=g,P.pointLength=_,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=S,P.numLightProbes=w,n.version=b_++)}function l(c,h){let u=0,f=0,g=0,_=0,v=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function $c(i){const t=new w_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function A_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new $c(i),t.set(s,[a])):r>=o.length?(a=new $c(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(i,t,e){let n=new yl;const s=new ht,r=new ht,o=new me,a=new Kf({depthPacking:xd}),l=new Qf,c={},h=e.maxTextureSize,u={[li]:qe,[qe]:li,[Ae]:Ae},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const _=new ge;_.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new wt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let p=this.type;this.render=function(E,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),T=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(oi),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==kn&&this.type===kn,J=p===kn&&this.type!==kn;for(let W=0,j=E.length;W<j;W++){const et=E[W],Y=et.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const pt=Y.getFrameExtents();if(s.multiply(pt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,Y.mapSize.y=r.y)),Y.map===null||H===!0||J===!0){const Mt=this.type!==kn?{minFilter:xn,magFilter:xn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ci(s.x,s.y,Mt),Y.map.texture.name=et.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const dt=Y.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Nt=Y.getViewport(Mt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),B.viewport(o),Y.updateMatrices(et,Mt),n=Y.getFrustum(),x(w,P,Y.camera,et,this.type)}Y.isPointLightShadow!==!0&&this.type===kn&&y(Y,P),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,T,D)};function y(E,w){const P=t.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ci(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,P,f,v,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,P,g,v,null)}function M(E,w,P,b){let T=null;const D=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)T=D;else if(T=P.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const B=T.uuid,H=w.uuid;let J=c[B];J===void 0&&(J={},c[B]=J);let W=J[H];W===void 0&&(W=T.clone(),J[H]=W,w.addEventListener("dispose",S)),T=W}if(T.visible=w.visible,T.wireframe=w.wireframe,b===kn?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,P.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const B=i.properties.get(T);B.light=P}return T}function x(E,w,P,b,T){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===kn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const H=t.update(E),J=E.material;if(Array.isArray(J)){const W=H.groups;for(let j=0,et=W.length;j<et;j++){const Y=W[j],pt=J[Y.materialIndex];if(pt&&pt.visible){const dt=M(E,pt,b,T);E.onBeforeShadow(i,E,w,P,H,dt,Y),i.renderBufferDirect(P,null,H,dt,E,Y),E.onAfterShadow(i,E,w,P,H,dt,Y)}}}else if(J.visible){const W=M(E,J,b,T);E.onBeforeShadow(i,E,w,P,H,W,null),i.renderBufferDirect(P,null,H,W,E,null),E.onAfterShadow(i,E,w,P,H,W,null)}}const B=E.children;for(let H=0,J=B.length;H<J;H++)x(B[H],w,P,b,T)}function S(E){E.target.removeEventListener("dispose",S);for(const P in c){const b=c[P],T=E.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const L_={[sa]:ra,[oa]:ca,[aa]:ha,[ls]:la,[ra]:sa,[ca]:oa,[ha]:aa,[la]:ls};function I_(i,t){function e(){let O=!1;const _t=new me;let St=null;const Dt=new me(0,0,0,0);return{setMask:function(gt){St!==gt&&!O&&(i.colorMask(gt,gt,gt,gt),St=gt)},setLocked:function(gt){O=gt},setClear:function(gt,ot,Pt,Yt,pe){pe===!0&&(gt*=Yt,ot*=Yt,Pt*=Yt),_t.set(gt,ot,Pt,Yt),Dt.equals(_t)===!1&&(i.clearColor(gt,ot,Pt,Yt),Dt.copy(_t))},reset:function(){O=!1,St=null,Dt.set(-1,0,0,0)}}}function n(){let O=!1,_t=!1,St=null,Dt=null,gt=null;return{setReversed:function(ot){if(_t!==ot){const Pt=t.get("EXT_clip_control");ot?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),_t=ot;const Yt=gt;gt=null,this.setClear(Yt)}},getReversed:function(){return _t},setTest:function(ot){ot?lt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(ot){St!==ot&&!O&&(i.depthMask(ot),St=ot)},setFunc:function(ot){if(_t&&(ot=L_[ot]),Dt!==ot){switch(ot){case sa:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case oa:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case la:i.depthFunc(i.GEQUAL);break;case ca:i.depthFunc(i.GREATER);break;case ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=ot}},setLocked:function(ot){O=ot},setClear:function(ot){gt!==ot&&(_t&&(ot=1-ot),i.clearDepth(ot),gt=ot)},reset:function(){O=!1,St=null,Dt=null,gt=null,_t=!1}}}function s(){let O=!1,_t=null,St=null,Dt=null,gt=null,ot=null,Pt=null,Yt=null,pe=null;return{setTest:function(ae){O||(ae?lt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ae){_t!==ae&&!O&&(i.stencilMask(ae),_t=ae)},setFunc:function(ae,Dn,Sn){(St!==ae||Dt!==Dn||gt!==Sn)&&(i.stencilFunc(ae,Dn,Sn),St=ae,Dt=Dn,gt=Sn)},setOp:function(ae,Dn,Sn){(ot!==ae||Pt!==Dn||Yt!==Sn)&&(i.stencilOp(ae,Dn,Sn),ot=ae,Pt=Dn,Yt=Sn)},setLocked:function(ae){O=ae},setClear:function(ae){pe!==ae&&(i.clearStencil(ae),pe=ae)},reset:function(){O=!1,_t=null,St=null,Dt=null,gt=null,ot=null,Pt=null,Yt=null,pe=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,g=[],_=null,v=!1,m=null,p=null,y=null,M=null,x=null,S=null,E=null,w=new Qt(0,0,0),P=0,b=!1,T=null,D=null,B=null,H=null,J=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,et=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=et>=2);let pt=null,dt={};const Mt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),qt=new me().fromArray(Mt),te=new me().fromArray(Nt);function jt(O,_t,St,Dt){const gt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(O,ot),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<St;Pt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(_t+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ot}const tt={};tt[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(ls),st(!1),N(ql),lt(i.CULL_FACE),rt(oi);function lt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Ct(O,_t){return u[O]!==_t?(i.bindFramebuffer(O,_t),u[O]=_t,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function It(O,_t){let St=g,Dt=!1;if(O){St=f.get(_t),St===void 0&&(St=[],f.set(_t,St));const gt=O.textures;if(St.length!==gt.length||St[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Pt=gt.length;ot<Pt;ot++)St[ot]=i.COLOR_ATTACHMENT0+ot;St.length=gt.length,Dt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(St)}function Xt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const ne={[yi]:i.FUNC_ADD,[Wu]:i.FUNC_SUBTRACT,[Xu]:i.FUNC_REVERSE_SUBTRACT};ne[Yu]=i.MIN,ne[qu]=i.MAX;const U={[Zu]:i.ZERO,[ju]:i.ONE,[Ju]:i.SRC_COLOR,[na]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Ku]:i.DST_ALPHA,[$u]:i.ONE_MINUS_SRC_COLOR,[ia]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[Qu]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[od]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(O,_t,St,Dt,gt,ot,Pt,Yt,pe,ae){if(O===oi){v===!0&&(mt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),O!==Gu){if(O!==m||ae!==b){if((p!==yi||x!==yi)&&(i.blendEquation(i.FUNC_ADD),p=yi,x=yi),ae)switch(O){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,M=null,S=null,E=null,w.set(0,0,0),P=0,m=O,b=ae}return}gt=gt||_t,ot=ot||St,Pt=Pt||Dt,(_t!==p||gt!==x)&&(i.blendEquationSeparate(ne[_t],ne[gt]),p=_t,x=gt),(St!==y||Dt!==M||ot!==S||Pt!==E)&&(i.blendFuncSeparate(U[St],U[Dt],U[ot],U[Pt]),y=St,M=Dt,S=ot,E=Pt),(Yt.equals(w)===!1||pe!==P)&&(i.blendColor(Yt.r,Yt.g,Yt.b,pe),w.copy(Yt),P=pe),m=O,b=!1}function it(O,_t){O.side===Ae?mt(i.CULL_FACE):lt(i.CULL_FACE);let St=O.side===qe;_t&&(St=!St),st(St),O.blending===is&&O.transparent===!1?rt(oi):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Dt=O.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),G(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){T!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),T=O)}function N(O){O!==Hu?(lt(i.CULL_FACE),O!==D&&(O===ql?i.cullFace(i.BACK):O===Vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),D=O}function X(O){O!==B&&(j&&i.lineWidth(O),B=O)}function G(O,_t,St){O?(lt(i.POLYGON_OFFSET_FILL),(H!==_t||J!==St)&&(i.polygonOffset(_t,St),H=_t,J=St)):mt(i.POLYGON_OFFSET_FILL)}function K(O){O?lt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function nt(O){O===void 0&&(O=i.TEXTURE0+W-1),pt!==O&&(i.activeTexture(O),pt=O)}function ct(O,_t,St){St===void 0&&(pt===null?St=i.TEXTURE0+W-1:St=pt);let Dt=dt[St];Dt===void 0&&(Dt={type:void 0,texture:void 0},dt[St]=Dt),(Dt.type!==O||Dt.texture!==_t)&&(pt!==St&&(i.activeTexture(St),pt=St),i.bindTexture(O,_t||tt[O]),Dt.type=O,Dt.texture=_t)}function R(){const O=dt[pt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function d(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function k(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(O){qt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),qt.copy(O))}function Bt(O){te.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),te.copy(O))}function At(O,_t){let St=c.get(_t);St===void 0&&(St=new WeakMap,c.set(_t,St));let Dt=St.get(O);Dt===void 0&&(Dt=i.getUniformBlockIndex(_t,O.name),St.set(O,Dt))}function Et(O,_t){const Dt=c.get(_t).get(O);l.get(_t)!==Dt&&(i.uniformBlockBinding(_t,Dt,O.__bindingPointIndex),l.set(_t,Dt))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,dt={},u={},f=new WeakMap,g=[],_=null,v=!1,m=null,p=null,y=null,M=null,x=null,S=null,E=null,w=new Qt(0,0,0),P=0,b=!1,T=null,D=null,B=null,H=null,J=null,qt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:mt,bindFramebuffer:Ct,drawBuffers:It,useProgram:Xt,setBlending:rt,setMaterial:it,setFlipSided:st,setCullFace:N,setLineWidth:X,setPolygonOffset:G,setScissorTest:K,activeTexture:nt,bindTexture:ct,unbindTexture:R,compressedTexImage2D:d,compressedTexImage3D:C,texImage2D:ut,texImage3D:$,updateUBOMapping:At,uniformBlockBinding:Et,texStorage2D:Q,texStorage3D:vt,texSubImage2D:L,texSubImage3D:k,compressedTexSubImage2D:F,compressedTexSubImage3D:at,scissor:ft,viewport:Bt,reset:Gt}}function D_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ht,h=new WeakMap;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,d){return g?new OffscreenCanvas(R,d):Zr("canvas")}function v(R,d,C){let L=1;const k=ct(R);if((k.width>C||k.height>C)&&(L=C/Math.max(k.width,k.height)),L<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const F=Math.floor(L*k.width),at=Math.floor(L*k.height);u===void 0&&(u=_(F,at));const Q=d?_(F,at):u;return Q.width=F,Q.height=at,Q.getContext("2d").drawImage(R,0,0,F,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+F+"x"+at+")."),Q}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,d,C,L,k=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let F=d;if(d===i.RED&&(C===i.FLOAT&&(F=i.R32F),C===i.HALF_FLOAT&&(F=i.R16F),C===i.UNSIGNED_BYTE&&(F=i.R8)),d===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.R8UI),C===i.UNSIGNED_SHORT&&(F=i.R16UI),C===i.UNSIGNED_INT&&(F=i.R32UI),C===i.BYTE&&(F=i.R8I),C===i.SHORT&&(F=i.R16I),C===i.INT&&(F=i.R32I)),d===i.RG&&(C===i.FLOAT&&(F=i.RG32F),C===i.HALF_FLOAT&&(F=i.RG16F),C===i.UNSIGNED_BYTE&&(F=i.RG8)),d===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RG8UI),C===i.UNSIGNED_SHORT&&(F=i.RG16UI),C===i.UNSIGNED_INT&&(F=i.RG32UI),C===i.BYTE&&(F=i.RG8I),C===i.SHORT&&(F=i.RG16I),C===i.INT&&(F=i.RG32I)),d===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RGB8UI),C===i.UNSIGNED_SHORT&&(F=i.RGB16UI),C===i.UNSIGNED_INT&&(F=i.RGB32UI),C===i.BYTE&&(F=i.RGB8I),C===i.SHORT&&(F=i.RGB16I),C===i.INT&&(F=i.RGB32I)),d===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),C===i.UNSIGNED_INT&&(F=i.RGBA32UI),C===i.BYTE&&(F=i.RGBA8I),C===i.SHORT&&(F=i.RGBA16I),C===i.INT&&(F=i.RGBA32I)),d===i.RGB&&(C===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),d===i.RGBA){const at=k?Yr:re.getTransfer(L);C===i.FLOAT&&(F=i.RGBA32F),C===i.HALF_FLOAT&&(F=i.RGBA16F),C===i.UNSIGNED_BYTE&&(F=at===ue?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function x(R,d){let C;return R?d===null||d===Ci||d===Ys?C=i.DEPTH24_STENCIL8:d===Gn?C=i.DEPTH32F_STENCIL8:d===Xs&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===Ci||d===Ys?C=i.DEPTH_COMPONENT24:d===Gn?C=i.DEPTH_COMPONENT32F:d===Xs&&(C=i.DEPTH_COMPONENT16),C}function S(R,d){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==Tn?Math.log2(Math.max(d.width,d.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?d.mipmaps.length:1}function E(R){const d=R.target;d.removeEventListener("dispose",E),P(d),d.isVideoTexture&&h.delete(d)}function w(R){const d=R.target;d.removeEventListener("dispose",w),T(d)}function P(R){const d=n.get(R);if(d.__webglInit===void 0)return;const C=R.source,L=f.get(C);if(L){const k=L[d.__cacheKey];k.usedTimes--,k.usedTimes===0&&b(R),Object.keys(L).length===0&&f.delete(C)}n.remove(R)}function b(R){const d=n.get(R);i.deleteTexture(d.__webglTexture);const C=R.source,L=f.get(C);delete L[d.__cacheKey],o.memory.textures--}function T(R){const d=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(d.__webglFramebuffer[L]))for(let k=0;k<d.__webglFramebuffer[L].length;k++)i.deleteFramebuffer(d.__webglFramebuffer[L][k]);else i.deleteFramebuffer(d.__webglFramebuffer[L]);d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer[L])}else{if(Array.isArray(d.__webglFramebuffer))for(let L=0;L<d.__webglFramebuffer.length;L++)i.deleteFramebuffer(d.__webglFramebuffer[L]);else i.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&i.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let L=0;L<d.__webglColorRenderbuffer.length;L++)d.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(d.__webglColorRenderbuffer[L]);d.__webglDepthRenderbuffer&&i.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const C=R.textures;for(let L=0,k=C.length;L<k;L++){const F=n.get(C[L]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(C[L])}n.remove(R)}let D=0;function B(){D=0}function H(){const R=D;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function J(R){const d=[];return d.push(R.wrapS),d.push(R.wrapT),d.push(R.wrapR||0),d.push(R.magFilter),d.push(R.minFilter),d.push(R.anisotropy),d.push(R.internalFormat),d.push(R.format),d.push(R.type),d.push(R.generateMipmaps),d.push(R.premultiplyAlpha),d.push(R.flipY),d.push(R.unpackAlignment),d.push(R.colorSpace),d.join()}function W(R,d){const C=n.get(R);if(R.isVideoTexture&&K(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&C.__version!==R.version){const L=R.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(C,R,d);return}}else R.isExternalTexture&&(C.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+d)}function j(R,d){const C=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version){tt(C,R,d);return}e.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+d)}function et(R,d){const C=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&C.__version!==R.version){tt(C,R,d);return}e.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+d)}function Y(R,d){const C=n.get(R);if(R.version>0&&C.__version!==R.version){lt(C,R,d);return}e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+d)}const pt={[Ws]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},dt={[xn]:i.NEAREST,[gd]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Tn]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Mt={[Md]:i.NEVER,[wd]:i.ALWAYS,[yd]:i.LESS,[Rh]:i.LEQUAL,[Sd]:i.EQUAL,[Td]:i.GEQUAL,[Ed]:i.GREATER,[bd]:i.NOTEQUAL};function Nt(R,d){if(d.type===Gn&&t.has("OES_texture_float_linear")===!1&&(d.magFilter===Tn||d.magFilter===go||d.magFilter===cr||d.magFilter===Ti||d.minFilter===Tn||d.minFilter===go||d.minFilter===cr||d.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,pt[d.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,pt[d.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,pt[d.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,dt[d.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,dt[d.minFilter]),d.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[d.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===xn||d.minFilter!==cr&&d.minFilter!==Ti||d.type===Gn&&t.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||n.get(d).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,s.getMaxAnisotropy())),n.get(d).__currentAnisotropy=d.anisotropy}}}function qt(R,d){let C=!1;R.__webglInit===void 0&&(R.__webglInit=!0,d.addEventListener("dispose",E));const L=d.source;let k=f.get(L);k===void 0&&(k={},f.set(L,k));const F=J(d);if(F!==R.__cacheKey){k[F]===void 0&&(k[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,C=!0),k[F].usedTimes++;const at=k[R.__cacheKey];at!==void 0&&(k[R.__cacheKey].usedTimes--,at.usedTimes===0&&b(d)),R.__cacheKey=F,R.__webglTexture=k[F].texture}return C}function te(R,d,C){return Math.floor(Math.floor(R/C)/d)}function jt(R,d,C,L){const F=R.updateRanges;if(F.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,d.width,d.height,C,L,d.data);else{F.sort(($,ft)=>$.start-ft.start);let at=0;for(let $=1;$<F.length;$++){const ft=F[at],Bt=F[$],At=ft.start+ft.count,Et=te(Bt.start,d.width,4),Gt=te(ft.start,d.width,4);Bt.start<=At+1&&Et===Gt&&te(Bt.start+Bt.count-1,d.width,4)===Et?ft.count=Math.max(ft.count,Bt.start+Bt.count-ft.start):(++at,F[at]=Bt)}F.length=at+1;const Q=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),ut=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,d.width);for(let $=0,ft=F.length;$<ft;$++){const Bt=F[$],At=Math.floor(Bt.start/4),Et=Math.ceil(Bt.count/4),Gt=At%d.width,O=Math.floor(At/d.width),_t=Et,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Gt,O,_t,St,C,L,d.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function tt(R,d,C){let L=i.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),d.isData3DTexture&&(L=i.TEXTURE_3D);const k=qt(R,d),F=d.source;e.bindTexture(L,R.__webglTexture,i.TEXTURE0+C);const at=n.get(F);if(F.version!==at.__version||k===!0){e.activeTexture(i.TEXTURE0+C);const Q=re.getPrimaries(re.workingColorSpace),vt=d.colorSpace===ii?null:re.getPrimaries(d.colorSpace),ut=d.colorSpace===ii||Q===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let $=v(d.image,!1,s.maxTextureSize);$=nt(d,$);const ft=r.convert(d.format,d.colorSpace),Bt=r.convert(d.type);let At=M(d.internalFormat,ft,Bt,d.colorSpace,d.isVideoTexture);Nt(L,d);let Et;const Gt=d.mipmaps,O=d.isVideoTexture!==!0,_t=at.__version===void 0||k===!0,St=F.dataReady,Dt=S(d,$);if(d.isDepthTexture)At=x(d.format===Zs,d.type),_t&&(O?e.texStorage2D(i.TEXTURE_2D,1,At,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,At,$.width,$.height,0,ft,Bt,null));else if(d.isDataTexture)if(Gt.length>0){O&&_t&&e.texStorage2D(i.TEXTURE_2D,Dt,At,Gt[0].width,Gt[0].height);for(let gt=0,ot=Gt.length;gt<ot;gt++)Et=Gt[gt],O?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,ft,Bt,Et.data):e.texImage2D(i.TEXTURE_2D,gt,At,Et.width,Et.height,0,ft,Bt,Et.data);d.generateMipmaps=!1}else O?(_t&&e.texStorage2D(i.TEXTURE_2D,Dt,At,$.width,$.height),St&&jt(d,$,ft,Bt)):e.texImage2D(i.TEXTURE_2D,0,At,$.width,$.height,0,ft,Bt,$.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){O&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,At,Gt[0].width,Gt[0].height,$.depth);for(let gt=0,ot=Gt.length;gt<ot;gt++)if(Et=Gt[gt],d.format!==gn)if(ft!==null)if(O){if(St)if(d.layerUpdates.size>0){const Pt=Ac(Et.width,Et.height,d.format,d.type);for(const Yt of d.layerUpdates){const pe=Et.data.subarray(Yt*Pt/Et.data.BYTES_PER_ELEMENT,(Yt+1)*Pt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Yt,Et.width,Et.height,1,ft,pe)}d.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,$.depth,ft,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,At,Et.width,Et.height,$.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,$.depth,ft,Bt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,At,Et.width,Et.height,$.depth,0,ft,Bt,Et.data)}else{O&&_t&&e.texStorage2D(i.TEXTURE_2D,Dt,At,Gt[0].width,Gt[0].height);for(let gt=0,ot=Gt.length;gt<ot;gt++)Et=Gt[gt],d.format!==gn?ft!==null?O?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,ft,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,At,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,ft,Bt,Et.data):e.texImage2D(i.TEXTURE_2D,gt,At,Et.width,Et.height,0,ft,Bt,Et.data)}else if(d.isDataArrayTexture)if(O){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,At,$.width,$.height,$.depth),St)if(d.layerUpdates.size>0){const gt=Ac($.width,$.height,d.format,d.type);for(const ot of d.layerUpdates){const Pt=$.data.subarray(ot*gt/$.data.BYTES_PER_ELEMENT,(ot+1)*gt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,$.width,$.height,1,ft,Bt,Pt)}d.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,Bt,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,$.width,$.height,$.depth,0,ft,Bt,$.data);else if(d.isData3DTexture)O?(_t&&e.texStorage3D(i.TEXTURE_3D,Dt,At,$.width,$.height,$.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,Bt,$.data)):e.texImage3D(i.TEXTURE_3D,0,At,$.width,$.height,$.depth,0,ft,Bt,$.data);else if(d.isFramebufferTexture){if(_t)if(O)e.texStorage2D(i.TEXTURE_2D,Dt,At,$.width,$.height);else{let gt=$.width,ot=$.height;for(let Pt=0;Pt<Dt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,At,gt,ot,0,ft,Bt,null),gt>>=1,ot>>=1}}else if(Gt.length>0){if(O&&_t){const gt=ct(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,At,gt.width,gt.height)}for(let gt=0,ot=Gt.length;gt<ot;gt++)Et=Gt[gt],O?St&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,ft,Bt,Et):e.texImage2D(i.TEXTURE_2D,gt,At,ft,Bt,Et);d.generateMipmaps=!1}else if(O){if(_t){const gt=ct($);e.texStorage2D(i.TEXTURE_2D,Dt,At,gt.width,gt.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Bt,$)}else e.texImage2D(i.TEXTURE_2D,0,At,ft,Bt,$);m(d)&&p(L),at.__version=F.version,d.onUpdate&&d.onUpdate(d)}R.__version=d.version}function lt(R,d,C){if(d.image.length!==6)return;const L=qt(R,d),k=d.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+C);const F=n.get(k);if(k.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+C);const at=re.getPrimaries(re.workingColorSpace),Q=d.colorSpace===ii?null:re.getPrimaries(d.colorSpace),vt=d.colorSpace===ii||at===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const ut=d.isCompressedTexture||d.image[0].isCompressedTexture,$=d.image[0]&&d.image[0].isDataTexture,ft=[];for(let ot=0;ot<6;ot++)!ut&&!$?ft[ot]=v(d.image[ot],!0,s.maxCubemapSize):ft[ot]=$?d.image[ot].image:d.image[ot],ft[ot]=nt(d,ft[ot]);const Bt=ft[0],At=r.convert(d.format,d.colorSpace),Et=r.convert(d.type),Gt=M(d.internalFormat,At,Et,d.colorSpace),O=d.isVideoTexture!==!0,_t=F.__version===void 0||L===!0,St=k.dataReady;let Dt=S(d,Bt);Nt(i.TEXTURE_CUBE_MAP,d);let gt;if(ut){O&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Gt,Bt.width,Bt.height);for(let ot=0;ot<6;ot++){gt=ft[ot].mipmaps;for(let Pt=0;Pt<gt.length;Pt++){const Yt=gt[Pt];d.format!==gn?At!==null?O?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,0,0,Yt.width,Yt.height,At,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,Gt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,0,0,Yt.width,Yt.height,At,Et,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,Gt,Yt.width,Yt.height,0,At,Et,Yt.data)}}}else{if(gt=d.mipmaps,O&&_t){gt.length>0&&Dt++;const ot=ct(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Gt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if($){O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ft[ot].width,ft[ot].height,At,Et,ft[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Gt,ft[ot].width,ft[ot].height,0,At,Et,ft[ot].data);for(let Pt=0;Pt<gt.length;Pt++){const pe=gt[Pt].image[ot].image;O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,0,0,pe.width,pe.height,At,Et,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,Gt,pe.width,pe.height,0,At,Et,pe.data)}}else{O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,At,Et,ft[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Gt,At,Et,ft[ot]);for(let Pt=0;Pt<gt.length;Pt++){const Yt=gt[Pt];O?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,0,0,At,Et,Yt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,Gt,At,Et,Yt.image[ot])}}}m(d)&&p(i.TEXTURE_CUBE_MAP),F.__version=k.version,d.onUpdate&&d.onUpdate(d)}R.__version=d.version}function mt(R,d,C,L,k,F){const at=r.convert(C.format,C.colorSpace),Q=r.convert(C.type),vt=M(C.internalFormat,at,Q,C.colorSpace),ut=n.get(d),$=n.get(C);if($.__renderTarget=d,!ut.__hasExternalTextures){const ft=Math.max(1,d.width>>F),Bt=Math.max(1,d.height>>F);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?e.texImage3D(k,F,vt,ft,Bt,d.depth,0,at,Q,null):e.texImage2D(k,F,vt,ft,Bt,0,at,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),G(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,k,$.__webglTexture,0,X(d)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,k,$.__webglTexture,F),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(R,d,C){if(i.bindRenderbuffer(i.RENDERBUFFER,R),d.depthBuffer){const L=d.depthTexture,k=L&&L.isDepthTexture?L.type:null,F=x(d.stencilBuffer,k),at=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=X(d);G(d)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,F,d.width,d.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,F,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,F,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,R)}else{const L=d.textures;for(let k=0;k<L.length;k++){const F=L[k],at=r.convert(F.format,F.colorSpace),Q=r.convert(F.type),vt=M(F.internalFormat,at,Q,F.colorSpace),ut=X(d);C&&G(d)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,vt,d.width,d.height):G(d)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,vt,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,vt,d.width,d.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(R,d){if(d&&d.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(d.depthTexture);L.__renderTarget=d,(!L.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),W(d.depthTexture,0);const k=L.__webglTexture,F=X(d);if(d.depthTexture.format===qs)G(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(d.depthTexture.format===Zs)G(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Xt(R){const d=n.get(R),C=R.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==R.depthTexture){const L=R.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),L){const k=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,L.removeEventListener("dispose",k)};L.addEventListener("dispose",k),d.__depthDisposeCallback=k}d.__boundDepthTexture=L}if(R.depthTexture&&!d.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const L=R.texture.mipmaps;L&&L.length>0?It(d.__webglFramebuffer[0],R):It(d.__webglFramebuffer,R)}else if(C){d.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[L]),d.__webglDepthbuffer[L]===void 0)d.__webglDepthbuffer[L]=i.createRenderbuffer(),Ct(d.__webglDepthbuffer[L],R,!1);else{const k=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=d.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,F)}}else{const L=R.texture.mipmaps;if(L&&L.length>0?e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=i.createRenderbuffer(),Ct(d.__webglDepthbuffer,R,!1);else{const k=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=d.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,F)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(R,d,C){const L=n.get(R);d!==void 0&&mt(L.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Xt(R)}function U(R){const d=R.texture,C=n.get(R),L=n.get(d);R.addEventListener("dispose",w);const k=R.textures,F=R.isWebGLCubeRenderTarget===!0,at=k.length>1;if(at||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=d.version,o.memory.textures++),F){C.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(d.mipmaps&&d.mipmaps.length>0){C.__webglFramebuffer[Q]=[];for(let vt=0;vt<d.mipmaps.length;vt++)C.__webglFramebuffer[Q][vt]=i.createFramebuffer()}else C.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){C.__webglFramebuffer=[];for(let Q=0;Q<d.mipmaps.length;Q++)C.__webglFramebuffer[Q]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(at)for(let Q=0,vt=k.length;Q<vt;Q++){const ut=n.get(k[Q]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let Q=0;Q<k.length;Q++){const vt=k[Q];C.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[Q]);const ut=r.convert(vt.format,vt.colorSpace),$=r.convert(vt.type),ft=M(vt.internalFormat,ut,$,vt.colorSpace,R.isXRRenderTarget===!0),Bt=X(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,C.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(C.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,d);for(let Q=0;Q<6;Q++)if(d.mipmaps&&d.mipmaps.length>0)for(let vt=0;vt<d.mipmaps.length;vt++)mt(C.__webglFramebuffer[Q][vt],R,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt);else mt(C.__webglFramebuffer[Q],R,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(d)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Q=0,vt=k.length;Q<vt;Q++){const ut=k[Q],$=n.get(ut);let ft=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ft=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),Nt(ft,ut),mt(C.__webglFramebuffer,R,ut,i.COLOR_ATTACHMENT0+Q,ft,0),m(ut)&&p(ft)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Nt(Q,d),d.mipmaps&&d.mipmaps.length>0)for(let vt=0;vt<d.mipmaps.length;vt++)mt(C.__webglFramebuffer[vt],R,d,i.COLOR_ATTACHMENT0,Q,vt);else mt(C.__webglFramebuffer,R,d,i.COLOR_ATTACHMENT0,Q,0);m(d)&&p(Q),e.unbindTexture()}R.depthBuffer&&Xt(R)}function rt(R){const d=R.textures;for(let C=0,L=d.length;C<L;C++){const k=d[C];if(m(k)){const F=y(R),at=n.get(k).__webglTexture;e.bindTexture(F,at),p(F),e.unbindTexture()}}}const it=[],st=[];function N(R){if(R.samples>0){if(G(R)===!1){const d=R.textures,C=R.width,L=R.height;let k=i.COLOR_BUFFER_BIT;const F=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(R),Q=d.length>1;if(Q)for(let ut=0;ut<d.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const vt=R.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ut=0;ut<d.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(k|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);const $=n.get(d[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,C,L,0,0,C,L,k,i.NEAREST),l===!0&&(it.length=0,st.length=0,it.push(i.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(it.push(F),st.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,st)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ut=0;ut<d.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);const $=n.get(d[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,$,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const d=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[d])}}}function X(R){return Math.min(s.maxSamples,R.samples)}function G(R){const d=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function K(R){const d=o.render.frame;h.get(R)!==d&&(h.set(R,d),R.update())}function nt(R,d){const C=R.colorSpace,L=R.format,k=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||C!==us&&C!==ii&&(re.getTransfer(C)===ue?(L!==gn||k!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),d}function ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=et,this.setTextureCube=Y,this.rebindTextures=ne,this.setupRenderTarget=U,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Xt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=G}function U_(i,t){function e(n,s=ii){let r;const o=re.getTransfer(s);if(n===Pn)return i.UNSIGNED_BYTE;if(n===ul)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===vh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===hl)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===vs)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===bh)return i.RGB;if(n===gn)return i.RGBA;if(n===qs)return i.DEPTH_COMPONENT;if(n===Zs)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===fl)return i.RED_INTEGER;if(n===wh)return i.RG;if(n===pl)return i.RG_INTEGER;if(n===ml)return i.RGBA_INTEGER;if(n===Hr||n===Vr||n===Gr||n===Wr)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===va||n===Ma)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===va)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ya||n===Sa||n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Ua)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ya)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ea)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===La)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Oa||n===Fa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ba||n===ka||n===za||n===Ha)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Gh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Zn({vertexShader:N_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new wt(new ke(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class B_ extends Di{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,g=null,_=null;const v=typeof XRWebGLBinding<"u",m=new F_,p={},y=e.getContextAttributes();let M=null,x=null;const S=[],E=[],w=new ht;let P=null;const b=new Be;b.viewport=new me;const T=new Be;T.viewport=new me;const D=[b,T],B=new sp;let H=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=S[tt];return lt===void 0&&(lt=new Fo,S[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=S[tt];return lt===void 0&&(lt=new Fo,S[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=S[tt];return lt===void 0&&(lt=new Fo,S[tt]=lt),lt.getHandSpace()};function W(tt){const lt=E.indexOf(tt.inputSource);if(lt===-1)return;const mt=S[lt];mt!==void 0&&(mt.update(tt.inputSource,tt.frame,c||o),mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function j(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",et);for(let tt=0;tt<S.length;tt++){const lt=E[tt];lt!==null&&(E[tt]=null,S[tt].disconnect(lt))}H=null,J=null,m.reset();for(const tt in p)delete p[tt];t.setRenderTarget(M),g=null,f=null,u=null,s=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",j),s.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Ct=null,It=null;y.depth&&(It=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=y.stencil?Zs:qs,Ct=y.stencil?Ys:Ci);const Xt={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new ci(f.textureWidth,f.textureHeight,{format:gn,type:Pn,depthTexture:new Vh(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new ci(g.framebufferWidth,g.framebufferHeight,{format:gn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(tt){for(let lt=0;lt<tt.removed.length;lt++){const mt=tt.removed[lt],Ct=E.indexOf(mt);Ct>=0&&(E[Ct]=null,S[Ct].disconnect(mt))}for(let lt=0;lt<tt.added.length;lt++){const mt=tt.added[lt];let Ct=E.indexOf(mt);if(Ct===-1){for(let Xt=0;Xt<S.length;Xt++)if(Xt>=E.length){E.push(mt),Ct=Xt;break}else if(E[Xt]===null){E[Xt]=mt,Ct=Xt;break}if(Ct===-1)break}const It=S[Ct];It&&It.connect(mt)}}const Y=new I,pt=new I;function dt(tt,lt,mt){Y.setFromMatrixPosition(lt.matrixWorld),pt.setFromMatrixPosition(mt.matrixWorld);const Ct=Y.distanceTo(pt),It=lt.projectionMatrix.elements,Xt=mt.projectionMatrix.elements,ne=It[14]/(It[10]-1),U=It[14]/(It[10]+1),rt=(It[9]+1)/It[5],it=(It[9]-1)/It[5],st=(It[8]-1)/It[0],N=(Xt[8]+1)/Xt[0],X=ne*st,G=ne*N,K=Ct/(-st+N),nt=K*-st;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(nt),tt.translateZ(K),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ct=ne+K,R=U+K,d=X-nt,C=G+(Ct-nt),L=rt*U/R*ct,k=it*U/R*ct;tt.projectionMatrix.makePerspective(d,C,L,k,ct,R),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Mt(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let lt=tt.near,mt=tt.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),B.near=T.near=b.near=lt,B.far=T.far=b.far=mt,(H!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,J=B.far),B.layers.mask=tt.layers.mask|6,b.layers.mask=B.layers.mask&3,T.layers.mask=B.layers.mask&5;const Ct=tt.parent,It=B.cameras;Mt(B,Ct);for(let Xt=0;Xt<It.length;Xt++)Mt(It[Xt],Ct);It.length===2?dt(B,b,T):B.projectionMatrix.copy(b.projectionMatrix),Nt(tt,B,Ct)};function Nt(tt,lt,mt){mt===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=js*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(tt){return p[tt]};let qt=null;function te(tt,lt){if(h=lt.getViewerPose(c||o),_=lt,h!==null){const mt=h.views;g!==null&&(t.setRenderTargetFramebuffer(x,g.framebuffer),t.setRenderTarget(x));let Ct=!1;mt.length!==B.cameras.length&&(B.cameras.length=0,Ct=!0);for(let U=0;U<mt.length;U++){const rt=mt[U];let it=null;if(g!==null)it=g.getViewport(rt);else{const N=u.getViewSubImage(f,rt);it=N.viewport,U===0&&(t.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(x))}let st=D[U];st===void 0&&(st=new Be,st.layers.enable(U),st.viewport=new me,D[U]=st),st.matrix.fromArray(rt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(rt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(it.x,it.y,it.width,it.height),U===0&&(B.matrix.copy(st.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ct===!0&&B.cameras.push(st)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const U=u.getDepthInformation(mt[0]);U&&U.isValid&&U.texture&&m.init(U,s.renderState)}if(It&&It.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let U=0;U<mt.length;U++){const rt=mt[U].camera;if(rt){let it=p[rt];it||(it=new Gh,p[rt]=it);const st=u.getCameraImage(rt);it.sourceTexture=st}}}}for(let mt=0;mt<S.length;mt++){const Ct=E[mt],It=S[mt];Ct!==null&&It!==void 0&&It.update(Ct,lt,c||o)}qt&&qt(tt,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}const jt=new tu;jt.setAnimationLoop(te),this.setAnimationLoop=function(tt){qt=tt},this.dispose=function(){}}}const xi=new Ln,k_=new _e;function z_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&g(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,xi.copy(x),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(xi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function c(y,M){let x=s[y.id];x===void 0&&(_(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const S=M.program;n.updateUBOMapping(y,S);const E=t.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function h(y){const M=u();y.__bindingPointIndex=M;const x=i.createBuffer(),S=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],x=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,w=x.length;E<w;E++){const P=Array.isArray(x[E])?x[E]:[x[E]];for(let b=0,T=P.length;b<T;b++){const D=P[b];if(g(D,E,b,S)===!0){const B=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let W=0;W<H.length;W++){const j=H[W],et=v(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,B+J,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,J),J+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,M,x,S){const E=y.value,w=M+"_"+x;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{const P=S[w];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return S[w]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(y){const M=y.uniforms;let x=0;const S=16;for(let w=0,P=M.length;w<P;w++){const b=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,D=b.length;T<D;T++){const B=b[T],H=Array.isArray(B.value)?B.value:[B.value];for(let J=0,W=H.length;J<W;J++){const j=H[J],et=v(j),Y=x%S,pt=Y%et.boundary,dt=Y+pt;x+=pt,dt!==0&&S-dt<et.storage&&(x+=S-dt),B.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=et.storage}}}const E=x%S;return E>0&&(x+=S-E),y.__size=x,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class V_{constructor(t={}){const{canvas:e=Gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=ve;let E=0,w=0,P=null,b=-1,T=null;const D=new me,B=new me;let H=null;const J=new Qt(0);let W=0,j=e.width,et=e.height,Y=1,pt=null,dt=null;const Mt=new me(0,0,j,et),Nt=new me(0,0,j,et);let qt=!1;const te=new yl;let jt=!1,tt=!1;const lt=new _e,mt=new I,Ct=new me,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function ne(){return P===null?Y:1}let U=n;function rt(A,z){return e.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),U===null){const z="webgl2";if(U=rt(z,A),U===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let it,st,N,X,G,K,nt,ct,R,d,C,L,k,F,at,Q,vt,ut,$,ft,Bt,At,Et,Gt;function O(){it=new K0(U),it.init(),At=new U_(U,it),st=new X0(U,it,t,At),N=new I_(U,it),st.reversedDepthBuffer&&f&&N.buffers.depth.setReversed(!0),X=new eg(U),G=new v_,K=new D_(U,it,N,G,st,At,X),nt=new q0(x),ct=new $0(x),R=new ap(U),Et=new G0(U,R),d=new Q0(U,R,X,Et),C=new ig(U,d,R,X),$=new ng(U,st,K),Q=new Y0(G),L=new x_(x,nt,ct,it,st,Et,Q),k=new z_(x,G),F=new y_,at=new A_(it),ut=new V0(x,nt,ct,N,C,g,l),vt=new P_(x,C,st),Gt=new H_(U,X,st,N),ft=new W0(U,it,X),Bt=new tg(U,it,X),X.programs=L.programs,x.capabilities=st,x.extensions=it,x.properties=G,x.renderLists=F,x.shadowMap=vt,x.state=N,x.info=X}O();const _t=new B_(x,U);this.xr=_t,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(j,et,!1))},this.getSize=function(A){return A.set(j,et)},this.setSize=function(A,z,q=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,et=z,e.width=Math.floor(A*Y),e.height=Math.floor(z*Y),q===!0&&(e.style.width=A+"px",e.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(j*Y,et*Y).floor()},this.setDrawingBufferSize=function(A,z,q){j=A,et=z,Y=q,e.width=Math.floor(A*q),e.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Mt)},this.setViewport=function(A,z,q,Z){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,z,q,Z),N.viewport(D.copy(Mt).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(Nt)},this.setScissor=function(A,z,q,Z){A.isVector4?Nt.set(A.x,A.y,A.z,A.w):Nt.set(A,z,q,Z),N.scissor(B.copy(Nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(A){N.setScissorTest(qt=A)},this.setOpaqueSort=function(A){pt=A},this.setTransparentSort=function(A){dt=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let Z=0;if(A){let V=!1;if(P!==null){const xt=P.texture.format;V=xt===ml||xt===pl||xt===fl}if(V){const xt=P.texture.type,Tt=xt===Pn||xt===Ci||xt===Xs||xt===Ys||xt===ul||xt===dl,Ft=ut.getClearColor(),Ut=ut.getClearAlpha(),Vt=Ft.r,Wt=Ft.g,zt=Ft.b;Tt?(_[0]=Vt,_[1]=Wt,_[2]=zt,_[3]=Ut,U.clearBufferuiv(U.COLOR,0,_)):(v[0]=Vt,v[1]=Wt,v[2]=zt,v[3]=Ut,U.clearBufferiv(U.COLOR,0,v))}else Z|=U.COLOR_BUFFER_BIT}z&&(Z|=U.DEPTH_BUFFER_BIT),q&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),ut.dispose(),F.dispose(),at.dispose(),G.dispose(),nt.dispose(),ct.dispose(),C.dispose(),Et.dispose(),Gt.dispose(),L.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",Sn),_t.removeEventListener("sessionend",Hl),ui.stop()};function St(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=X.autoReset,z=vt.enabled,q=vt.autoUpdate,Z=vt.needsUpdate,V=vt.type;O(),X.autoReset=A,vt.enabled=z,vt.autoUpdate=q,vt.needsUpdate=Z,vt.type=V}function gt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const z=A.target;z.removeEventListener("dispose",ot),Pt(z)}function Pt(A){Yt(A),G.remove(A)}function Yt(A){const z=G.get(A).programs;z!==void 0&&(z.forEach(function(q){L.releaseProgram(q)}),A.isShaderMaterial&&L.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,Z,V,xt){z===null&&(z=It);const Tt=V.isMesh&&V.matrixWorld.determinant()<0,Ft=Du(A,z,q,Z,V);N.setMaterial(Z,Tt);let Ut=q.index,Vt=1;if(Z.wireframe===!0){if(Ut=d.getWireframeAttribute(q),Ut===void 0)return;Vt=2}const Wt=q.drawRange,zt=q.attributes.position;let ee=Wt.start*Vt,ce=(Wt.start+Wt.count)*Vt;xt!==null&&(ee=Math.max(ee,xt.start*Vt),ce=Math.min(ce,(xt.start+xt.count)*Vt)),Ut!==null?(ee=Math.max(ee,0),ce=Math.min(ce,Ut.count)):zt!=null&&(ee=Math.max(ee,0),ce=Math.min(ce,zt.count));const Te=ce-ee;if(Te<0||Te===1/0)return;Et.setup(V,Z,Ft,q,Ut);let xe,fe=ft;if(Ut!==null&&(xe=R.get(Ut),fe=Bt,fe.setIndex(xe)),V.isMesh)Z.wireframe===!0?(N.setLineWidth(Z.wireframeLinewidth*ne()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(V.isLine){let Ht=Z.linewidth;Ht===void 0&&(Ht=1),N.setLineWidth(Ht*ne()),V.isLineSegments?fe.setMode(U.LINES):V.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else V.isPoints?fe.setMode(U.POINTS):V.isSprite&&fe.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))fe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ht=V._multiDrawStarts,ye=V._multiDrawCounts,se=V._multiDrawCount,Ze=Ut?R.get(Ut).bytesPerElement:1,Ui=G.get(Z).currentProgram.getUniforms();for(let je=0;je<se;je++)Ui.setValue(U,"_gl_DrawID",je),fe.render(Ht[je]/Ze,ye[je])}else if(V.isInstancedMesh)fe.renderInstances(ee,Te,V.count);else if(q.isInstancedBufferGeometry){const Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ye=Math.min(q.instanceCount,Ht);fe.renderInstances(ee,Te,ye)}else fe.render(ee,Te)};function pe(A,z,q){A.transparent===!0&&A.side===Ae&&A.forceSinglePass===!1?(A.side=qe,A.needsUpdate=!0,lr(A,z,q),A.side=li,A.needsUpdate=!0,lr(A,z,q),A.side=Ae):lr(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),p=at.get(q),p.init(z),M.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Z=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xt=V.material;if(xt)if(Array.isArray(xt))for(let Tt=0;Tt<xt.length;Tt++){const Ft=xt[Tt];pe(Ft,q,V),Z.add(Ft)}else pe(xt,q,V),Z.add(xt)}),p=M.pop(),Z},this.compileAsync=function(A,z,q=null){const Z=this.compile(A,z,q);return new Promise(V=>{function xt(){if(Z.forEach(function(Tt){G.get(Tt).currentProgram.isReady()&&Z.delete(Tt)}),Z.size===0){V(A);return}setTimeout(xt,10)}it.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ae=null;function Dn(A){ae&&ae(A)}function Sn(){ui.stop()}function Hl(){ui.start()}const ui=new tu;ui.setAnimationLoop(Dn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(A){ae=A,_t.setAnimationLoop(A),A===null?ui.stop():ui.start()},_t.addEventListener("sessionstart",Sn),_t.addEventListener("sessionend",Hl),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(z),z=_t.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,P),p=at.get(A,M.length),p.init(z),M.push(p),lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),te.setFromProjectionMatrix(lt,wn,z.reversedDepth),tt=this.localClippingEnabled,jt=Q.init(this.clippingPlanes,tt),m=F.get(A,y.length),m.init(),y.push(m),_t.enabled===!0&&_t.isPresenting===!0){const xt=x.xr.getDepthSensingMesh();xt!==null&&po(xt,z,-1/0,x.sortObjects)}po(A,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pt,dt),Xt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Xt&&ut.addToRenderList(m,A),this.info.render.frame++,jt===!0&&Q.beginShadows();const q=p.state.shadowsArray;vt.render(q,A,z),jt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,V=m.transmissive;if(p.setupLights(),z.isArrayCamera){const xt=z.cameras;if(V.length>0)for(let Tt=0,Ft=xt.length;Tt<Ft;Tt++){const Ut=xt[Tt];Gl(Z,V,A,Ut)}Xt&&ut.render(A);for(let Tt=0,Ft=xt.length;Tt<Ft;Tt++){const Ut=xt[Tt];Vl(m,A,Ut,Ut.viewport)}}else V.length>0&&Gl(Z,V,A,z),Xt&&ut.render(A),Vl(m,A,z);P!==null&&w===0&&(K.updateMultisampleRenderTarget(P),K.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,z),Et.resetDefaultState(),b=-1,T=null,M.pop(),M.length>0?(p=M[M.length-1],jt===!0&&Q.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function po(A,z,q,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||te.intersectsSprite(A)){Z&&Ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const Tt=C.update(A),Ft=A.material;Ft.visible&&m.push(A,Tt,Ft,q,Ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||te.intersectsObject(A))){const Tt=C.update(A),Ft=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ct.copy(A.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ct.copy(Tt.boundingSphere.center)),Ct.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(Ft)){const Ut=Tt.groups;for(let Vt=0,Wt=Ut.length;Vt<Wt;Vt++){const zt=Ut[Vt],ee=Ft[zt.materialIndex];ee&&ee.visible&&m.push(A,Tt,ee,q,Ct.z,zt)}}else Ft.visible&&m.push(A,Tt,Ft,q,Ct.z,null)}}const xt=A.children;for(let Tt=0,Ft=xt.length;Tt<Ft;Tt++)po(xt[Tt],z,q,Z)}function Vl(A,z,q,Z){const V=A.opaque,xt=A.transmissive,Tt=A.transparent;p.setupLightsView(q),jt===!0&&Q.setGlobalState(x.clippingPlanes,q),Z&&N.viewport(D.copy(Z)),V.length>0&&ar(V,z,q),xt.length>0&&ar(xt,z,q),Tt.length>0&&ar(Tt,z,q),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Gl(A,z,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new ci(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?vs:Pn,minFilter:Ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const xt=p.state.transmissionRenderTarget[Z.id],Tt=Z.viewport||D;xt.setSize(Tt.z*x.transmissionResolutionScale,Tt.w*x.transmissionResolutionScale);const Ft=x.getRenderTarget(),Ut=x.getActiveCubeFace(),Vt=x.getActiveMipmapLevel();x.setRenderTarget(xt),x.getClearColor(J),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Xt&&ut.render(q);const Wt=x.toneMapping;x.toneMapping=ai;const zt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),jt===!0&&Q.setGlobalState(x.clippingPlanes,Z),ar(A,q,Z),K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt),it.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let ce=0,Te=z.length;ce<Te;ce++){const xe=z[ce],fe=xe.object,Ht=xe.geometry,ye=xe.material,se=xe.group;if(ye.side===Ae&&fe.layers.test(Z.layers)){const Ze=ye.side;ye.side=qe,ye.needsUpdate=!0,Wl(fe,q,Z,Ht,ye,se),ye.side=Ze,ye.needsUpdate=!0,ee=!0}}ee===!0&&(K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt))}x.setRenderTarget(Ft,Ut,Vt),x.setClearColor(J,W),zt!==void 0&&(Z.viewport=zt),x.toneMapping=Wt}function ar(A,z,q){const Z=z.isScene===!0?z.overrideMaterial:null;for(let V=0,xt=A.length;V<xt;V++){const Tt=A[V],Ft=Tt.object,Ut=Tt.geometry,Vt=Tt.group;let Wt=Tt.material;Wt.allowOverride===!0&&Z!==null&&(Wt=Z),Ft.layers.test(q.layers)&&Wl(Ft,z,q,Ut,Wt,Vt)}}function Wl(A,z,q,Z,V,xt){A.onBeforeRender(x,z,q,Z,V,xt),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,z,q,Z,A,xt),V.transparent===!0&&V.side===Ae&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,x.renderBufferDirect(q,z,Z,V,A,xt),V.side=li,V.needsUpdate=!0,x.renderBufferDirect(q,z,Z,V,A,xt),V.side=Ae):x.renderBufferDirect(q,z,Z,V,A,xt),A.onAfterRender(x,z,q,Z,V,xt)}function lr(A,z,q){z.isScene!==!0&&(z=It);const Z=G.get(A),V=p.state.lights,xt=p.state.shadowsArray,Tt=V.state.version,Ft=L.getParameters(A,V.state,xt,z,q),Ut=L.getProgramCacheKey(Ft);let Vt=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?ct:nt).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",ot),Vt=new Map,Z.programs=Vt);let Wt=Vt.get(Ut);if(Wt!==void 0){if(Z.currentProgram===Wt&&Z.lightsStateVersion===Tt)return Yl(A,Ft),Wt}else Ft.uniforms=L.getUniforms(A),A.onBeforeCompile(Ft,x),Wt=L.acquireProgram(Ft,Ut),Vt.set(Ut,Wt),Z.uniforms=Ft.uniforms;const zt=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=Q.uniform),Yl(A,Ft),Z.needsLights=Nu(A),Z.lightsStateVersion=Tt,Z.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Wt,Z.uniformsList=null,Wt}function Xl(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Xr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Yl(A,z){const q=G.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Du(A,z,q,Z,V){z.isScene!==!0&&(z=It),K.resetTextureUnits();const xt=z.fog,Tt=Z.isMeshStandardMaterial?z.environment:null,Ft=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:us,Ut=(Z.isMeshStandardMaterial?ct:nt).get(Z.envMap||Tt),Vt=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Wt=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),zt=!!q.morphAttributes.position,ee=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color;let Te=ai;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Te=x.toneMapping);const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,fe=xe!==void 0?xe.length:0,Ht=G.get(Z),ye=p.state.lights;if(jt===!0&&(tt===!0||A!==T)){const He=A===T&&Z.id===b;Q.setState(Z,A,He)}let se=!1;Z.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ye.state.version||Ht.outputColorSpace!==Ft||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==Ut||Z.fog===!0&&Ht.fog!==xt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Q.numPlanes||Ht.numIntersection!==Q.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Wt||Ht.morphTargets!==zt||Ht.morphNormals!==ee||Ht.morphColors!==ce||Ht.toneMapping!==Te||Ht.morphTargetsCount!==fe)&&(se=!0):(se=!0,Ht.__version=Z.version);let Ze=Ht.currentProgram;se===!0&&(Ze=lr(Z,z,V));let Ui=!1,je=!1,bs=!1;const Se=Ze.getUniforms(),nn=Ht.uniforms;if(N.useProgram(Ze.program)&&(Ui=!0,je=!0,bs=!0),Z.id!==b&&(b=Z.id,je=!0),Ui||T!==A){N.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Se.setValue(U,"projectionMatrix",A.projectionMatrix),Se.setValue(U,"viewMatrix",A.matrixWorldInverse);const Xe=Se.map.cameraPosition;Xe!==void 0&&Xe.setValue(U,mt.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&Se.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Se.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,je=!0,bs=!0)}if(V.isSkinnedMesh){Se.setOptional(U,V,"bindMatrix"),Se.setOptional(U,V,"bindMatrixInverse");const He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Se.setValue(U,"boneTexture",He.boneTexture,K))}V.isBatchedMesh&&(Se.setOptional(U,V,"batchingTexture"),Se.setValue(U,"batchingTexture",V._matricesTexture,K),Se.setOptional(U,V,"batchingIdTexture"),Se.setValue(U,"batchingIdTexture",V._indirectTexture,K),Se.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&Se.setValue(U,"batchingColorTexture",V._colorsTexture,K));const sn=q.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&$.update(V,q,Ze),(je||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,Se.setValue(U,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(nn.envMap.value=Ut,nn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),je&&(Se.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&Uu(nn,bs),xt&&Z.fog===!0&&k.refreshFogUniforms(nn,xt),k.refreshMaterialUniforms(nn,Z,Y,et,p.state.transmissionRenderTarget[A.id]),Xr.upload(U,Xl(Ht),nn,K)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Xr.upload(U,Xl(Ht),nn,K),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Se.setValue(U,"center",V.center),Se.setValue(U,"modelViewMatrix",V.modelViewMatrix),Se.setValue(U,"normalMatrix",V.normalMatrix),Se.setValue(U,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const He=Z.uniformsGroups;for(let Xe=0,mo=He.length;Xe<mo;Xe++){const di=He[Xe];Gt.update(di,Ze),Gt.bind(di,Ze)}}return Ze}function Uu(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Nu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,z,q){const Z=G.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),G.get(A.texture).__webglTexture=z,G.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=G.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const Ou=U.createFramebuffer();this.setRenderTarget=function(A,z=0,q=0){P=A,E=z,w=q;let Z=!0,V=null,xt=!1,Tt=!1;if(A){const Ut=G.get(A);if(Ut.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(Ut.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(Ut.__hasExternalTextures)K.rebindTextures(A,G.get(A.texture).__webglTexture,G.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const zt=A.depthTexture;if(Ut.__boundDepthTexture!==zt){if(zt!==null&&G.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Tt=!0);const Wt=G.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?V=Wt[z][q]:V=Wt[z],xt=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?V=G.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?V=Wt[q]:V=Wt,D.copy(A.viewport),B.copy(A.scissor),H=A.scissorTest}else D.copy(Mt).multiplyScalar(Y).floor(),B.copy(Nt).multiplyScalar(Y).floor(),H=qt;if(q!==0&&(V=Ou),N.bindFramebuffer(U.FRAMEBUFFER,V)&&Z&&N.drawBuffers(A,V),N.viewport(D),N.scissor(B),N.setScissorTest(H),xt){const Ut=G.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ut.__webglTexture,q)}else if(Tt){const Ut=z;for(let Vt=0;Vt<A.textures.length;Vt++){const Wt=G.get(A.textures[Vt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,q,Ut)}}else if(A!==null&&q!==0){const Ut=G.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ut.__webglTexture,q)}b=-1},this.readRenderTargetPixels=function(A,z,q,Z,V,xt,Tt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut){N.bindFramebuffer(U.FRAMEBUFFER,Ut);try{const Vt=A.textures[Ft],Wt=Vt.format,zt=Vt.type;if(!st.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Z&&q>=0&&q<=A.height-V&&(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ft),U.readPixels(z,q,Z,V,At.convert(Wt),At.convert(zt),xt))}finally{const Vt=P!==null?G.get(P).__webglFramebuffer:null;N.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,Z,V,xt,Tt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Tt!==void 0&&(Ut=Ut[Tt]),Ut)if(z>=0&&z<=A.width-Z&&q>=0&&q<=A.height-V){N.bindFramebuffer(U.FRAMEBUFFER,Ut);const Vt=A.textures[Ft],Wt=Vt.format,zt=Vt.type;if(!st.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ee=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.bufferData(U.PIXEL_PACK_BUFFER,xt.byteLength,U.STREAM_READ),A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ft),U.readPixels(z,q,Z,V,At.convert(Wt),At.convert(zt),0);const ce=P!==null?G.get(P).__webglFramebuffer:null;N.bindFramebuffer(U.FRAMEBUFFER,ce);const Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Wd(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ee),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,xt),U.deleteBuffer(ee),U.deleteSync(Te),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const Z=Math.pow(2,-q),V=Math.floor(A.image.width*Z),xt=Math.floor(A.image.height*Z),Tt=z!==null?z.x:0,Ft=z!==null?z.y:0;K.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,Tt,Ft,V,xt),N.unbindTexture()};const Fu=U.createFramebuffer(),Bu=U.createFramebuffer();this.copyTextureToTexture=function(A,z,q=null,Z=null,V=0,xt=null){xt===null&&(V!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=V,V=0):xt=0);let Tt,Ft,Ut,Vt,Wt,zt,ee,ce,Te;const xe=A.isCompressedTexture?A.mipmaps[xt]:A.image;if(q!==null)Tt=q.max.x-q.min.x,Ft=q.max.y-q.min.y,Ut=q.isBox3?q.max.z-q.min.z:1,Vt=q.min.x,Wt=q.min.y,zt=q.isBox3?q.min.z:0;else{const sn=Math.pow(2,-V);Tt=Math.floor(xe.width*sn),Ft=Math.floor(xe.height*sn),A.isDataArrayTexture?Ut=xe.depth:A.isData3DTexture?Ut=Math.floor(xe.depth*sn):Ut=1,Vt=0,Wt=0,zt=0}Z!==null?(ee=Z.x,ce=Z.y,Te=Z.z):(ee=0,ce=0,Te=0);const fe=At.convert(z.format),Ht=At.convert(z.type);let ye;z.isData3DTexture?(K.setTexture3D(z,0),ye=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),ye=U.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),ye=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const se=U.getParameter(U.UNPACK_ROW_LENGTH),Ze=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ui=U.getParameter(U.UNPACK_SKIP_PIXELS),je=U.getParameter(U.UNPACK_SKIP_ROWS),bs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,zt);const Se=A.isDataArrayTexture||A.isData3DTexture,nn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const sn=G.get(A),He=G.get(z),Xe=G.get(sn.__renderTarget),mo=G.get(He.__renderTarget);N.bindFramebuffer(U.READ_FRAMEBUFFER,Xe.__webglFramebuffer),N.bindFramebuffer(U.DRAW_FRAMEBUFFER,mo.__webglFramebuffer);for(let di=0;di<Ut;di++)Se&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(A).__webglTexture,V,zt+di),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,G.get(z).__webglTexture,xt,Te+di)),U.blitFramebuffer(Vt,Wt,Tt,Ft,ee,ce,Tt,Ft,U.DEPTH_BUFFER_BIT,U.NEAREST);N.bindFramebuffer(U.READ_FRAMEBUFFER,null),N.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||G.has(A)){const sn=G.get(A),He=G.get(z);N.bindFramebuffer(U.READ_FRAMEBUFFER,Fu),N.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bu);for(let Xe=0;Xe<Ut;Xe++)Se?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,sn.__webglTexture,V,zt+Xe):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,sn.__webglTexture,V),nn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,xt,Te+Xe):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,xt),V!==0?U.blitFramebuffer(Vt,Wt,Tt,Ft,ee,ce,Tt,Ft,U.COLOR_BUFFER_BIT,U.NEAREST):nn?U.copyTexSubImage3D(ye,xt,ee,ce,Te+Xe,Vt,Wt,Tt,Ft):U.copyTexSubImage2D(ye,xt,ee,ce,Vt,Wt,Tt,Ft);N.bindFramebuffer(U.READ_FRAMEBUFFER,null),N.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(ye,xt,ee,ce,Te,Tt,Ft,Ut,fe,Ht,xe.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(ye,xt,ee,ce,Te,Tt,Ft,Ut,fe,xe.data):U.texSubImage3D(ye,xt,ee,ce,Te,Tt,Ft,Ut,fe,Ht,xe):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,xt,ee,ce,Tt,Ft,fe,Ht,xe.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,xt,ee,ce,xe.width,xe.height,fe,xe.data):U.texSubImage2D(U.TEXTURE_2D,xt,ee,ce,Tt,Ft,fe,Ht,xe);U.pixelStorei(U.UNPACK_ROW_LENGTH,se),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ze),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ui),U.pixelStorei(U.UNPACK_SKIP_ROWS,je),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bs),xt===0&&z.generateMipmaps&&U.generateMipmap(ye),N.unbindTexture()},this.initRenderTarget=function(A){G.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){E=0,w=0,P=null,N.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}class G_{constructor(){yt(this,"ctx",null);yt(this,"masterGain",null);yt(this,"engineOscA",null);yt(this,"engineOscB",null);yt(this,"engineFilter",null);yt(this,"engineGain",null);yt(this,"volume",.55);yt(this,"muted",!1);yt(this,"lastBlinkerOn",!1);yt(this,"lastRailBellTime",-999)}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.14,this.engineOscA=this.ctx.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=52,this.engineOscB=this.ctx.createOscillator(),this.engineOscB.type="triangle",this.engineOscB.frequency.value=104,this.engineOscA.connect(this.engineFilter),this.engineOscB.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOscA.start(),this.engineOscB.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t,e){this.volume=t,this.muted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(e?0:t,this.ctx.currentTime,.04)}update(t,e,n){if(!this.ctx||this.ctx.state!=="running")return;const s=this.ctx.currentTime;if(this.engineOscA&&this.engineOscB&&this.engineFilter&&this.engineGain)if(t.stalled||t.rpm<=0)this.engineGain.gain.setTargetAtTime(0,s,.05);else{const r=Math.max(0,Math.min(1,(t.rpm-750)/3600)),o=38+r*96;this.engineOscA.frequency.setTargetAtTime(o,s,.05),this.engineOscB.frequency.setTargetAtTime(o*2,s,.05),this.engineFilter.frequency.setTargetAtTime(190+r*560,s,.06),this.engineGain.gain.setTargetAtTime(.08+r*.11,s,.06)}if(t.blinker!=="off"&&t.blinkerOn!==this.lastBlinkerOn&&this.playClick(t.blinkerOn?920:680,.025,.16),this.lastBlinkerOn=t.blinkerOn,e){const r=Math.hypot(t.x-38,t.z);if(r<58&&n-this.lastRailBellTime>=.45){this.lastRailBellTime=n;const o=Math.max(.03,Math.min(.28,8/Math.max(6,r)));this.playFumikiriBell(o)}}}playClick(t=800,e=.03,n=.15){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const s=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(t,s),o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(o),o.connect(this.masterGain),r.start(s),r.stop(s+e)}playFumikiriBell(t){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime;for(const n of[700,758]){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e),r.gain.setValueAtTime(t*.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.36),s.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+.37)}}playViolationChime(t){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=t?"sawtooth":"triangle",n.frequency.setValueAtTime(t?220:440,e),n.frequency.setValueAtTime(t?165:330,e+.12),s.gain.setValueAtTime(.22,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.35)}playThud(){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.28,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.16)}}function as(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function co(i){let t=(i+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI}function Os(i,t,e,n,s){const r=Math.cos(e),o=Math.sin(e);return{x:i+n*r+s*o,z:t-n*o+s*r}}function W_(i,t,e,n){return Math.hypot(i-e,t-n)}const si=90,wi=60,ni=7,Kc=ni/2,an=-24,Ei=2.75,Is=2,Hs=18,qa=34,Jo=42,Za=58;function zn(i,t){if(t<an-Ei-.6||t>an+Ei+.6||i<=Hs||i>=Za)return{y:0,slopeX:0,slopeZ:0};if(i<qa){const o=qa-Hs,a=(i-Hs)/o,l=Is*.5*(1-Math.cos(Math.PI*a)),c=Is*.5*Math.PI/o*Math.sin(Math.PI*a);return{y:l,slopeX:c,slopeZ:0}}if(i<=Jo)return{y:Is,slopeX:0,slopeZ:0};const e=Za-Jo,n=(i-Jo)/e,s=Is*.5*(1+Math.cos(Math.PI*n)),r=-(Is*.5*Math.PI/e)*Math.sin(Math.PI*n);return{y:s,slopeX:r,slopeZ:0}}function X_(){const e=105*Math.PI/180,n=[],s=[],r=[],o=(m,p,y,M)=>{const x=M,S=-y;n.push({x:m,z:p}),s.push({x:m+x*1.8,z:p+S*1.8}),r.push({x:m-x*1.8,z:p-S*1.8})};o(-46,-3.5,0,-1),o(-46,-8,0,-1);const a=-38.5,l=-12,c=28;for(let m=0;m<=c;m++){const p=Math.PI+e*m/c,y=a+7.5*Math.cos(p),M=l+7.5*Math.sin(p),x=-Math.sin(p),S=Math.cos(p);o(y,M,x,S)}const h=Math.PI+e,u=a+2*7.5*Math.cos(h),f=l+2*7.5*Math.sin(h);for(let m=1;m<=c;m++){const p=e*(1-m/c),y=u+7.5*Math.cos(p),M=f+7.5*Math.sin(p),x=Math.sin(p),S=-Math.cos(p);o(y,M,x,S)}const g=u+7.5;o(g,-34,0,-1),o(g,-42.5,0,-1);const _=[6,15,24,34,43,52],v=[];return _.forEach((m,p)=>{const y=s[m],M=r[m];y&&p%2===0&&v.push({id:`scurve-pole-l-${p}`,x:y.x,z:y.z,radius:.08,height:1.5,zone:"sCurve"}),M&&p%2===1&&v.push({id:`scurve-pole-r-${p}`,x:M.x,z:M.z,radius:.08,height:1.5,zone:"sCurve"})}),{centerline:n,leftCurb:s,rightCurb:r,poles:v}}const $r=X_(),Y_=$r.centerline,q_=2,ru=[{id:"scurve-left",points:$r.leftCurb,height:.14,label:"S-Curve West Curb"},{id:"scurve-right",points:$r.rightCurb,height:.14,label:"S-Curve East Curb"},{id:"crank-west-south",height:.14,label:"Crank West-South Curb",points:[{x:-50,z:3.5},{x:-50,z:20},{x:-36,z:20},{x:-36,z:42.5}]},{id:"crank-east-north",height:.14,label:"Crank East-North Curb",points:[{x:-46,z:3.5},{x:-46,z:16},{x:-32,z:16},{x:-32,z:42.5}]},{id:"bay-parking-curb",height:.14,label:"Direction Change Bay Curb",points:[{x:24.15,z:27.5},{x:24.15,z:33.7},{x:27.85,z:33.7},{x:27.85,z:27.5}]},{id:"parallel-parking-curb",height:.14,label:"Parallel Parking Curb",points:[{x:45,z:27.5},{x:45,z:30.2},{x:52.2,z:30.2},{x:52.2,z:27.5}]},{id:"hill-north-curb",height:.16,label:"Hill North Edge",points:[{x:18,z:-26.75},{x:58,z:-26.75}]},{id:"hill-south-curb",height:.16,label:"Hill South Edge",points:[{x:18,z:-21.25},{x:58,z:-21.25}]},{id:"outer-north",height:.14,points:[{x:-62,z:-49.5},{x:62,z:-49.5}]},{id:"outer-south",height:.14,points:[{x:-62,z:49.5},{x:62,z:49.5}]},{id:"outer-west",height:.14,points:[{x:-79.5,z:-32},{x:-79.5,z:32}]},{id:"outer-east",height:.14,points:[{x:79.5,z:-32},{x:79.5,z:32}]}],ou=[...$r.poles,{id:"crank-pole-in-1",x:-45.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-1",x:-50.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-in-2",x:-36.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-2",x:-31.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"bay-pole-fl",x:24.05,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-fr",x:27.95,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rl",x:24.05,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rr",x:27.95,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"par-pole-1",x:44.9,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-2",x:52.3,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-3",x:44.9,z:30.3,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-4",x:52.3,z:30.3,radius:.08,height:1.5,zone:"parallelParking"}],Kr=[{id:"north-parked-van",x:-10,z:-48.1,halfW:1.9,halfL:.85,height:1.65,kind:"parkedCar"},{id:"clubhouse-building",x:0,z:56.2,halfW:16,halfL:4.5,height:7.2,kind:"building"}],au=[{id:"signal-northbound",kind:"trafficLight",axis:"NS",x:-1.75,z:8.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"signal-southbound",kind:"trafficLight",axis:"NS",x:1.75,z:-8.5,dirX:0,dirZ:1,halfWidth:1.75},{id:"signal-eastbound",kind:"trafficLight",axis:"EW",x:-8.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75},{id:"signal-westbound",kind:"trafficLight",axis:"EW",x:8.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"railroad-eastbound",kind:"railroad",x:31.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"railroad-westbound",kind:"railroad",x:44.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"stop-west-t",kind:"stopSign",x:-67.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"stop-north-t",kind:"stopSign",x:-1.75,z:-38.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"stop-scurve-exit",kind:"stopSign",x:-27.12,z:-41.5,dirX:0,dirZ:-1,halfWidth:1.8},{id:"stop-crank-exit",kind:"stopSign",x:-34,z:41.5,dirX:0,dirZ:1,halfWidth:2}],Vs={startBay:{id:"startBay",x:12,z:48.1,heading:Math.PI/2},sCurve:{id:"sCurve",x:-46,z:.5,heading:0},crank:{id:"crank",x:-48,z:-.5,heading:Math.PI},hillStart:{id:"hillStart",x:10,z:-24,heading:-Math.PI/2},railroad:{id:"railroad",x:20,z:-1.75,heading:-Math.PI/2},stopSign:{id:"stopSign",x:-56,z:1.75,heading:Math.PI/2},trafficLight:{id:"trafficLight",x:-1.75,z:22,heading:0},bayParking:{id:"bayParking",x:20,z:22.25,heading:-Math.PI/2},parallelParking:{id:"parallelParking",x:40,z:25.75,heading:-Math.PI/2},speedStraight:{id:"speedStraight",x:-56,z:-47.75,heading:-Math.PI/2}},Z_=["startBay","sCurve","crank","hillStart","railroad","stopSign","trafficLight","bayParking","parallelParking","speedStraight"],Qc=.09,j_=.08,J_=.45;function $_(i,t){const e=t.trackWidth/2,n=-t.wheelbase/2,s=t.wheelbase/2;return{FL:Os(i.x,i.z,i.heading,-e,n),FR:Os(i.x,i.z,i.heading,e,n),RL:Os(i.x,i.z,i.heading,-e,s),RR:Os(i.x,i.z,i.heading,e,s)}}function K_(i,t,e,n,s,r){const o=s-e,a=r-n,l=o*o+a*a;let c=0;l>1e-9&&(c=((i-e)*o+(t-n)*a)/l,c<0?c=0:c>1&&(c=1));const h=e+o*c,u=n+a*c;return{cx:h,cz:u,dist:Math.hypot(i-h,t-u)}}function th(i,t,e=ru,n=ou,s=Kr){const r=$_(i,t),o=t.kind==="motorcycle"?.07:.11,a=["FL","FR","RL","RR"],l={};let c=!1,h=!1,u=0,f=0;for(const E of a){const w=r[E];let P=1/0,b=w.x,T=w.z;for(const Y of e){const pt=Y.points;for(let dt=0;dt<pt.length-1;dt++){const Mt=K_(w.x,w.z,pt[dt].x,pt[dt].z,pt[dt+1].x,pt[dt+1].z);Mt.dist<P&&(P=Mt.dist,b=Mt.cx,T=Mt.cz)}}const D=Math.max(0,P-Qc-o),B=Qc+o*.8,H=P<B,J=!H&&D<j_,W=Math.max(0,Math.min(1,1-D/J_));let j=0,et=0;if(H&&P>1e-5){const Y=B-P,pt=(w.x-b)/P,dt=(w.z-T)/P;j=pt*Y,et=dt*Y,u+=j*.5,f+=et*.5}J&&(c=!0),H&&(h=!0),l[E]={corner:E,x:w.x,z:w.z,minCurbDist:D,proximity:W,curbTouch:J,curbMount:H,pushX:j,pushZ:et}}const g=Math.cos(-i.heading),_=Math.sin(-i.heading),v=t.width/2,m=t.length/2,p=(E,w)=>{const P=E-i.x,b=w-i.z;return{x:P*g+b*_,z:-P*_+b*g}};let y=null;for(const E of n){const w=p(E.x,E.z),P=Math.max(-v,Math.min(v,w.x)),b=Math.max(-m,Math.min(m,w.z));if(Math.hypot(w.x-P,w.z-b)<E.radius){y=E;break}}let M=null;const x=[[0,0],[-v,-m],[v,-m],[-v,m],[v,m],[0,-m],[0,m]];for(const E of s){for(const[w,P]of x){const b=Os(i.x,i.z,i.heading,w,P);if(Math.abs(b.x-E.x)<E.halfW&&Math.abs(b.z-E.z)<E.halfL){M=E;const T=i.x-E.x,D=i.z-E.z,B=E.halfW+v-Math.abs(T),H=E.halfL+m-Math.abs(D);B<H?u+=Math.sign(T||1)*Math.min(.4,B*.5):f+=Math.sign(D||1)*Math.min(.4,H*.5);break}}if(M)break}const S=1.6;return i.x<-si+S&&(u+=-si+S-i.x),i.x>si-S&&(u+=si-S-i.x),i.z<-wi+S&&(f+=-wi+S-i.z),i.z>wi-S&&(f+=wi-S-i.z),{wheels:l,anyCurbTouch:c,anyCurbMount:h,poleHit:y,obstacleHit:M,pushX:u,pushZ:f}}const Or=[{id:"wp-pullout",stationHint:"startBay",x:-10,z:47.75,radius:6.5,instructionJa:"発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう",instructionEn:"Bay 1: Signal right (E), glance right (X), and pull into the left lane"},{id:"wp-west-turn",stationHint:"stopSign",x:-77.75,z:10,radius:7,instructionJa:"外周西側を通って北の直線（40km/h区間）へ向かいましょう",instructionEn:"Continue along the West loop toward the North 40 km/h straight"},{id:"wp-north-straight",stationHint:"speedStraight",x:10,z:-47.75,radius:7.5,instructionJa:"北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速",instructionEn:"North straight: Signal past the parked van and reach ~35–40 km/h"},{id:"wp-hill-approach",stationHint:"hillStart",x:24,z:-24,radius:6,instructionJa:"坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう",instructionEn:"Hill Start: Stop on the up-ramp, then pull away cleanly without rollback"},{id:"wp-bay-access",stationHint:"bayParking",x:26,z:30.8,radius:4.5,instructionJa:"方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫",instructionEn:"Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing"},{id:"wp-railroad",stationHint:"railroad",x:22,z:1.75,radius:6.5,instructionJa:"踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう",instructionEn:"Railroad: Stop completely before line, look Left & Right (Z/X), then cross"},{id:"wp-signal",stationHint:"trafficLight",x:-15,z:1.75,radius:6.5,instructionJa:"信号交差点：信号に従って直進し、NWのS字コース入口へ左折",instructionEn:"Signal Intersection: Obey light, cross West, then enter S-Curve (North)"},{id:"wp-scurve",stationHint:"sCurve",x:-27.12,z:-36,radius:5.5,instructionJa:"S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう",instructionEn:"S-Curve: Creep slowly through the bends without touching curbs or poles"},{id:"wp-crank",stationHint:"crank",x:-34,z:36,radius:5.5,instructionJa:"クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう",instructionEn:"Crank: Swing wide around both 90° turns cleanly onto the South road"},{id:"wp-finish-bay",stationHint:"startBay",x:12,z:48.1,radius:3.5,instructionJa:"ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です",instructionEn:"Finish: Pull alongside Start Bay 1 and come to a complete stop"}];class Q_{constructor(){yt(this,"mode","practice");yt(this,"score",100);yt(this,"terminated",!1);yt(this,"finished",!1);yt(this,"simTimeSec",0);yt(this,"startOdometerM",0);yt(this,"violations",[]);yt(this,"waypointIndex",0);yt(this,"cooldowns",new Map);yt(this,"zoneTrackers",new Map);yt(this,"recentSignalTime",-999);yt(this,"recentSignalDir",null);yt(this,"headingSample",0);yt(this,"headingAccumTurn",0);yt(this,"hillMaxXOnRamp",-1/0);yt(this,"handbrakeDragDist",0);yt(this,"curbMountCount",0);yt(this,"lastViolation",null);yt(this,"onViolation");yt(this,"onExamFinish")}reset(t,e){this.mode=t,this.score=100,this.terminated=!1,this.finished=!1,this.simTimeSec=0,this.startOdometerM=e.odometerM,this.violations=[],this.waypointIndex=0,this.cooldowns.clear(),this.zoneTrackers.clear(),this.recentSignalTime=-999,this.recentSignalDir=null,this.headingSample=e.heading,this.headingAccumTurn=0,this.hillMaxXOnRamp=-1/0,this.handbrakeDragDist=0,this.curbMountCount=0,this.lastViolation=null}getMode(){return this.mode}getScore(){return Math.max(0,this.score)}isTerminated(){return this.terminated}isFinished(){return this.finished}getViolations(){return this.violations}getCurrentWaypoint(){return this.mode!=="exam"?null:Or[this.waypointIndex]??null}getWaypointProgress(){return{current:this.waypointIndex,total:Or.length}}getSummary(t){var r;const e=this.getScore(),n=new Map;for(const o of this.violations)n.set(o.code,(n.get(o.code)??0)+1);let s;return n.has("RAILROAD_NO_STOP")?s="railroad":n.has("STOP_SIGN_VIOLATION")?s="stopSign":n.has("RED_LIGHT")?s="trafficLight":n.has("HILL_ROLLBACK")?s="hillStart":(n.has("CURB_MOUNT")||n.has("POLE_COLLISION"))&&(s=((r=this.getCurrentWaypoint())==null?void 0:r.stationHint)??"crank"),{passed:!this.terminated&&e>=70,terminated:this.terminated,score:e,elapsedSec:this.simTimeSec,distanceM:Math.max(0,t.odometerM-this.startOdometerM),violations:[...this.violations],weakArea:s}}recordViolation(t,e,n,s,r,o,a,l=3){var u;if(this.finished)return;const c=this.cooldowns.get(t)??-999;if(this.simTimeSec-c<l)return;this.cooldowns.set(t,this.simTimeSec);const h={id:`${t}-${this.violations.length+1}`,code:t,points:e,instantFail:n,timestampSec:this.simTimeSec,labelJa:s,labelEn:r,detailJa:o,detailEn:a};this.violations.push(h),this.lastViolation=h,this.score=Math.max(0,this.score-e),(u=this.onViolation)==null||u.call(this,h),n&&this.mode==="exam"&&(this.terminated=!0,this.finished=!0)}update(t,e,n,s){var l,c;if(this.finished)return;if(this.simTimeSec+=t,(e.blinker==="left"||e.blinker==="right")&&(this.recentSignalTime=this.simTimeSec,this.recentSignalDir=e.blinker),n.anyCurbMount){this.curbMountCount++;const h=this.mode==="exam"&&this.curbMountCount>=2;this.recordViolation("CURB_MOUNT",20,h,"脱輪","Curb Mount","タイヤが縁石に乗り上げました","Wheel mounted over the course curb",3)}else n.anyCurbTouch&&this.recordViolation("CURB_TOUCH",10,!1,"接輪","Curb Scrape","タイヤが縁石に接触しました","Tire brushed against the curb",2.5);if((n.poleHit||n.obstacleHit&&n.obstacleHit.kind==="parkedCar")&&this.recordViolation("POLE_COLLISION",30,!0,"接触事故","Obstacle Contact","ポールまたは障害物に接触しました","Vehicle struck a course marker pole or obstacle",2.5),Math.abs(e.speedMs)*3.6>46&&this.recordViolation("SPEED_LIMIT",10,!1,"速度超過","Speeding","場内制限速度（40km/h）を大幅に超過しました","Exceeded 40 km/h compound speed limit",4),e.handbrake&&Math.abs(e.speedMs)>1.2?(this.handbrakeDragDist+=Math.abs(e.speedMs)*t,this.handbrakeDragDist>3.5&&(this.handbrakeDragDist=0,this.recordViolation("HANDBRAKE_DRAG",5,!1,"サイド戻し忘れ","Handbrake Left On","サイドブレーキを引いたまま走行しています","Driving with the parking brake still engaged",5))):this.handbrakeDragDist=0,e.x>Hs+1&&e.x<qa&&Math.abs(e.z-an)<3){e.x>this.hillMaxXOnRamp&&(this.hillMaxXOnRamp=e.x);const h=this.hillMaxXOnRamp-e.x;if(h>.35&&e.speedMs<-.15){const u=h>1;this.recordViolation("HILL_ROLLBACK",u?30:10,u,"坂道逆行","Hill Rollback",u?"坂道で1m以上逆行しました":"坂道で車両が後退しました",u?"Rolled back over 1.0m on hill ramp":"Vehicle rolled backward on hill ramp",4)}}else this.hillMaxXOnRamp=-1/0;this.evaluateStopLines(e,s);const o=co(e.heading-this.headingSample);if(this.headingSample=e.heading,e.speedMs>1.5){if(this.headingAccumTurn+=o,Math.abs(this.headingAccumTurn)>.96){const h=this.headingAccumTurn>0?"left":"right",u=e.x<-24&&e.x>-50&&e.z<-4&&e.z>-42,f=this.simTimeSec-this.recentSignalTime<7&&this.recentSignalDir===h;!u&&!f&&this.recordViolation("NO_SIGNAL",5,!1,"合図不履行","Missing Blinker",`${h==="left"?"左折":"右折"}時のウインカー合図がありません`,`Turned ${h} without activating blinker beforehand`,3.5),this.headingAccumTurn=0}}else this.headingAccumTurn*=Math.max(0,1-t*.5);const a=Kr[0];if(a&&Math.abs(e.x-a.x)<2&&e.z>-50&&e.z<-42.5&&e.speedMs>1.5&&this.simTimeSec-this.recentSignalTime>8&&this.recordViolation("NO_SIGNAL",5,!1,"進路変更合図不履行","Missing Lane Signal","障害物回避時の右・左ウインカー合図がありません","Passed parked obstacle without turn signal",6),this.mode==="exam"&&!this.finished){const h=Or[this.waypointIndex];h&&W_(e.x,e.z,h.x,h.z)<=h.radius&&(this.waypointIndex===Or.length-1?Math.abs(e.speedMs)<.15&&(this.finished=!0,(l=this.onExamFinish)==null||l.call(this,this.getSummary(e))):this.waypointIndex++)}this.terminated&&this.finished&&((c=this.onExamFinish)==null||c.call(this,this.getSummary(e)))}evaluateStopLines(t,e){const n=e.getRailroadState();for(const s of au){let r=this.zoneTrackers.get(s.id);r||(r={approached:!1,stoppedBeforeLine:!1,lookedBothSides:!1,wasClosedOrWarning:!1,crossed:!1,prevSignedDist:999},this.zoneTrackers.set(s.id,r));const o=t.x-s.x,a=t.z-s.z,l=o*s.dirX+a*s.dirZ,c=-s.dirZ,h=s.dirX,u=Math.abs(o*c+a*h),f=-Math.sin(t.heading)*s.dirX-Math.cos(t.heading)*s.dirZ,g=u<=s.halfWidth+.9&&f>.65;if(g&&l>=-9&&l<=-.1){r.approached=!0,Math.abs(t.speedMs)<.15&&(r.stoppedBeforeLine=!0);const _=this.simTimeSec-t.lookedLeftTimestamp<6,v=this.simTimeSec-t.lookedRightTimestamp<6;_&&v&&(r.lookedBothSides=!0),s.kind==="railroad"&&n.isWarningActive&&(r.wasClosedOrWarning=!0)}r.approached&&g&&r.prevSignedDist<0&&l>=0&&l<3&&(this.handleLineCrossed(s,r,e,n.isWarningActive),r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),(Math.abs(l)>14||u>8)&&(r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),r.prevSignedDist=l}}handleLineCrossed(t,e,n,s){t.kind==="stopSign"?e.stoppedBeforeLine?e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"安全確認不履行","Missing L/R Check","発進前の左右安全確認（Z/Xキー）が不足しています","Proceeded from stop line without glancing Left & Right (Z/X)",3):this.recordViolation("STOP_SIGN_VIOLATION",25,!0,"指定場所一時不停止","Stop Sign Violation","「止まれ」停止線手前で完全停止していません","Failed to come to a complete 0 km/h stop at 止まれ line",3):t.kind==="railroad"?!e.stoppedBeforeLine||s||e.wasClosedOrWarning?this.recordViolation("RAILROAD_NO_STOP",30,!0,"踏切不停止・遮断機無視","Railroad Violation",s?"警報機作動中に踏切へ進入しました":"踏切手前で完全停止していません",s?"Entered railroad crossing while warning/barrier active":"Crossed railroad tracks without stopping before stop line",3):e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"踏切安全確認不履行","Railroad Look Check","踏切通過前の左右確認（Z/Xキー）が不足しています","Crossed railroad without checking Left & Right (Z/X)",3):t.kind==="trafficLight"&&t.axis&&n.getLightForAxis(t.axis)==="red"&&this.recordViolation("RED_LIGHT",30,!0,"信号無視","Red Light Violation","赤信号で交差点に進入しました","Crossed intersection stop line on a RED traffic signal",3)}}const lu="jp_kyoshujo_settings_v1",tx="jp_kyoshujo_db",ps="custom_maps",cu="active_custom_map",$o={locale:"ja",vehicleKind:"sedan",transmission:"AT",cameraMode:"chase",steeringSensitivity:1,autoCenterSteering:!0,mirrorQuality:"high",masterVolume:.55,muted:!1,minimapHeadingUp:!1,showTouchControls:!1};function ex(){try{const i=window.localStorage.getItem(lu);if(!i)return{...$o};const t=JSON.parse(i);return{...$o,...t}}catch{return{...$o}}}function jn(i){try{window.localStorage.setItem(lu,JSON.stringify(i))}catch{}}function hu(){return new Promise((i,t)=>{const e=window.indexedDB.open(tx,1);e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(ps)||n.createObjectStore(ps)},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function rr(i){try{const t=await hu();await new Promise((e,n)=>{const s=t.transaction(ps,"readwrite");s.objectStore(ps).put(i,cu),s.oncomplete=()=>e(),s.onerror=()=>n(s.error)}),t.close()}catch{}}async function nx(){try{const i=await hu(),t=await new Promise((e,n)=>{const r=i.transaction(ps,"readonly").objectStore(ps).get(cu);r.onsuccess=()=>e(r.result??null),r.onerror=()=>n(r.error)});return i.close(),t}catch{return null}}const on=class on{constructor(){yt(this,"signalTime",0);yt(this,"railTime",0)}update(t){this.signalTime=(this.signalTime+t)%on.SIGNAL_CYCLE,this.railTime=(this.railTime+t)%on.RAIL_CYCLE}setTimes(t,e){this.signalTime=(t%on.SIGNAL_CYCLE+on.SIGNAL_CYCLE)%on.SIGNAL_CYCLE,this.railTime=(e%on.RAIL_CYCLE+on.RAIL_CYCLE)%on.RAIL_CYCLE}getLightForAxis(t){const e=this.signalTime;return t==="NS"?e<11?"green":e<14?"yellow":"red":e>=15.5&&e<26.5?"green":e>=26.5&&e<29.5?"yellow":"red"}getRailroadState(){const t=this.railTime;let e="open",n=0;t<22?(e="open",n=0):t<26?(e="warning",n=0):t<29?(e="closing",n=(t-26)/3*(Math.PI/2)):t<37?(e="closed",n=Math.PI/2):(e="opening",n=(1-(t-37)/3)*(Math.PI/2));const s=e!=="open",r=Math.floor(t*2.2)%2===0;return{phase:e,barrierAngle:n,isWarningActive:s,flashLeftOn:s&&r,flashRightOn:s&&!r}}};yt(on,"SIGNAL_CYCLE",31),yt(on,"RAIL_CYCLE",40);let ja=on;const ix={kind:"sedan",length:4.4,width:1.69,wheelbase:2.6,trackWidth:1.48,frontOverhang:.85,rearOverhang:.95,wheelRadius:.31,maxSteerRad:43*Math.PI/180,steeringWheelMaxRad:1.5*Math.PI*2,maxSpeedMs:16.7,maxReverseMs:5.5,maxAccelMs2:3.4,brakeDecelMs2:9.5},sx={kind:"motorcycle",length:2.1,width:.72,wheelbase:1.41,trackWidth:.16,frontOverhang:.35,rearOverhang:.34,wheelRadius:.3,maxSteerRad:34*Math.PI/180,steeringWheelMaxRad:34*Math.PI/180,maxSpeedMs:18,maxReverseMs:1.8,maxAccelMs2:4.5,brakeDecelMs2:9.8};function uu(i){return i==="motorcycle"?sx:ix}function du(i,t,e,n="sedan",s="AT"){const r=uu(n),o=as(e),a=zn(i,t),l=s==="AT"?"D":"1";return{x:i,y:a.y,z:t,rearAxleX:i-o.x*(r.wheelbase*.5),rearAxleZ:t-o.z*(r.wheelbase*.5),heading:co(e),pitch:0,roll:0,speedMs:0,steerAngleRad:0,steeringWheelRad:0,wheelRotationRad:0,transmission:s,gear:l,rpm:800,stalled:!1,handbrake:!1,blinker:"off",blinkerTimer:0,blinkerOn:!1,braking:!1,reversing:!1,lookAngleRad:0,lookedLeftTimestamp:-999,lookedRightTimestamp:-999,odometerM:0}}const rx={1:6,2:10.5,3:14.5,4:18,5:22,R:5.5},ox={1:1.35,2:1.05,3:.85,4:.7,5:.55,R:1.15};function fu(i,t){const e=["P","R","N","D"],n=["R","N","1","2","3","4","5"],s=i.transmission==="AT"?e:n,r=s.indexOf(i.gear),o=r===-1?i.transmission==="AT"?3:2:r,a=Math.max(0,Math.min(s.length-1,o+t)),l=s[a];Math.abs(i.speedMs)>1.2&&(l==="P"||l==="R"&&i.speedMs>1.2)||(i.gear=l)}function ax(i,t,e,n,s,r=zn){const o=2.5*s.steeringSensitivity;if(t.analogSteerTarget!==null){const Mt=Math.max(-1,Math.min(1,t.analogSteerTarget))*e.maxSteerRad-i.steerAngleRad,Nt=o*1.8*n;i.steerAngleRad+=Math.abs(Mt)<=Nt?Mt:Math.sign(Mt)*Nt}else{const dt=t.steerLeft-t.steerRight;if(Math.abs(dt)>.01)i.steerAngleRad+=dt*o*n;else if(s.autoCenterSteering){const Nt=(.65+2.4*Math.min(1,Math.abs(i.speedMs)/4))*n;Math.abs(i.steerAngleRad)<=Nt?i.steerAngleRad=0:i.steerAngleRad-=Math.sign(i.steerAngleRad)*Nt}}i.steerAngleRad=Math.max(-e.maxSteerRad,Math.min(e.maxSteerRad,i.steerAngleRad)),i.steeringWheelRad=i.steerAngleRad/e.maxSteerRad*e.steeringWheelMaxRad,i.blinker!=="off"?(i.blinkerTimer+=n,i.blinkerOn=Math.floor(i.blinkerTimer*2.6)%2===0):(i.blinkerTimer=0,i.blinkerOn=!1);let a=0;t.lookLeft&&!t.lookRight?a=68*Math.PI/180:t.lookRight&&!t.lookLeft&&(a=-68*Math.PI/180);const l=8.5*n,c=a-i.lookAngleRad;i.lookAngleRad+=Math.abs(c)<=l?c:Math.sign(c)*l,i.lookAngleRad>32*Math.PI/180&&(i.lookedLeftTimestamp=s.simTimeSec),i.lookAngleRad<-32*Math.PI/180&&(i.lookedRightTimestamp=s.simTimeSec);const h=as(i.heading),u=r(i.x,i.z),f=u.slopeX*h.x+u.slopeZ*h.z,g=Math.atan(f),_=-9.81*Math.sin(g);let v=0;const m=i.transmission==="AT"?1:1-Math.max(0,Math.min(1,t.clutch)),p=!i.stalled;if(i.transmission==="AT")i.gear==="D"?(t.throttle>.02&&i.speedMs<e.maxSpeedMs?v=t.throttle*e.maxAccelMs2:t.brake<.05&&!i.handbrake&&i.speedMs<1.65&&(v=1.25*(1-Math.max(0,i.speedMs)/1.65)),i.rpm=820+Math.abs(i.speedMs)*210+t.throttle*1400):i.gear==="R"?(t.throttle>.02&&i.speedMs>-e.maxReverseMs?v=-t.throttle*(e.maxAccelMs2*.72):t.brake<.05&&!i.handbrake&&i.speedMs>-1.4&&(v=-.82*(1-Math.max(0,-i.speedMs)/1.4)),i.rpm=820+Math.abs(i.speedMs)*260+t.throttle*1200):i.rpm=780+t.throttle*2600;else if(p&&i.gear!=="N"&&i.gear!=="P"){const dt=rx[i.gear]??10,Mt=ox[i.gear]??1,qt=i.gear==="R"?-1:1,te=Math.abs(i.speedMs)/dt*3800,jt=800+t.throttle*3400;if(i.rpm=te*m+jt*(1-m),m>.75&&Math.abs(i.speedMs)<.55&&t.throttle<.14&&(t.brake>.1||i.handbrake||Math.abs(i.speedMs)<.15))i.stalled=!0,i.rpm=0;else if(m>.15&&i.speedMs*qt<dt){const lt=Math.max(.18,t.throttle);v=qt*lt*e.maxAccelMs2*Mt*m}}else i.rpm=p?780+t.throttle*2800:0;const y=i.transmission==="AT"&&i.gear==="P",M=i.handbrake?6.8:0,x=t.brake*e.brakeDecelMs2,S=x+M+(y?14:0);i.braking=t.brake>.05,i.reversing=i.gear==="R";const E=-i.speedMs*(.14+.015*Math.abs(i.speedMs)),w=v+_+E;let P=i.speedMs+w*n;if(S>.01){const dt=S;if(Math.abs(i.speedMs)<.08&&Math.abs(v+_)<=dt)P=0;else{const Mt=Math.sign(P!==0?P:v+_),Nt=P-Mt*S*n;Math.sign(Nt)!==Math.sign(P)&&Math.abs(v+_)<=dt?P=0:P=Nt}}else Math.abs(P)<.02&&Math.abs(v)<.1&&Math.abs(_)<.1&&(P=0);P=Math.max(-e.maxReverseMs,Math.min(e.maxSpeedMs,P)),i.speedMs=P;const b=i.speedMs*n,T=b/e.wheelbase*Math.tan(i.steerAngleRad),D=i.heading+T*.5,B=as(D);i.rearAxleX+=B.x*b,i.rearAxleZ+=B.z*b,i.heading=co(i.heading+T);const H=as(i.heading);i.x=i.rearAxleX+H.x*(e.wheelbase*.5),i.z=i.rearAxleZ+H.z*(e.wheelbase*.5);const J=r(i.x,i.z);i.y=J.y,i.odometerM+=Math.abs(b),i.wheelRotationRad+=b/e.wheelRadius;const W=J.slopeX*H.x+J.slopeZ*H.z,j=Math.atan(W)-Math.max(-.04,Math.min(.04,(x-v)*.004));i.pitch+=(j-i.pitch)*Math.min(1,12*n);const et=T/n,Y=i.speedMs*et,pt=e.kind==="motorcycle"?Math.max(-.48,Math.min(.48,-Y*.065)):Math.max(-.06,Math.min(.06,Y*.008));i.roll+=(pt-i.roll)*Math.min(1,10*n)}function lx(i,t){const e=as(i.heading);i.rearAxleX=i.x-e.x*(t.wheelbase*.5),i.rearAxleZ=i.z-e.z*(t.wheelbase*.5)}const pu={startBay:{titleJa:"発着点 1番",titleEn:"Start Bay 1",descJa:"安全確認・右合図を出して発進",descEn:"Check mirrors & right signal before pull-out"},sCurve:{titleJa:"S字コース",titleEn:"S-Curve",descJa:"幅3.6m・内輪差を意識して低速走行",descEn:"3.6m wide S-bend — watch inner rear wheel cut"},crank:{titleJa:"クランクコース",titleEn:"Crank (90°)",descJa:"直角連続カーブ・ポール接触で検定中止",descEn:"Tight 90° chicane — pole contact fails exam"},hillStart:{titleJa:"坂道発進",titleEn:"Hill Start",descJa:"坂の途中で一時停止し、逆行せず発進",descEn:"Stop on slope and pull away without rollback"},railroad:{titleJa:"踏切通過",titleEn:"Railroad Crossing",descJa:"停止線手前で完全停止し左右確認（Z/X）",descEn:"Full stop before line, look Left & Right (Z/X)"},stopSign:{titleJa:"一時停止（止まれ）",titleEn:"Stop Sign",descJa:"停止線手前で完全停止・左右の安全確認",descEn:"Come to complete 0 km/h stop and glance L/R"},trafficLight:{titleJa:"信号交差点",titleEn:"Signal Intersection",descJa:"信号灯火に従い左折・右折の通行帯を守る",descEn:"Obey signal phases and proper turn positioning"},bayParking:{titleJa:"方向変換",titleEn:"Bay Parking",descJa:"バックで車庫に進入し、前向きに出庫",descEn:"Reverse into the T-bay and exit forward"},parallelParking:{titleJa:"縦列駐車",titleEn:"Parallel Parking",descJa:"縁石に沿わせて駐車枠内に収める",descEn:"Reverse neatly into the curbside pocket"},speedStraight:{titleJa:"直線40km/h・障害物",titleEn:"40 km/h & Obstacle",descJa:"直線で加速し、駐車車両を合図付きで回避",descEn:"Accelerate smoothly and signal past obstacle"}},cx={ja:{appTitle:"桜ヶ丘自動車教習所 3Dシミュレーター",appSubtitle:"日本の教習所コース・実技検定再現",modePractice:"自由練習",modeExam:"修了検定 (模擬試験)",scoreLabel:"持ち点",stationMenu:"コース・設定",resetBtn:"リセット (O)",cameraBtn:"視点 (V)",camChase:"後方視点",camCockpit:"運転席 (右ハンドル)",camHood:"ボンネット",camOrbit:"自由カメラ",welcomeTitle:"桜ヶ丘自動車教習所 3Dドライビングシミュレーター",welcomeLead:"実際の日本の教習所（180m×120m）を1:1スケールで再現。S字・クランク・坂道発進・踏切・信号・方向変換・縦列駐車・修了検定をブラウザ上で練習できます。",startTraining:"教習を始める",startExam:"修了検定を開始",controlsHeading:"基本操作（右ハンドル・左側通行）",ctrlDrive:"W / S または ↑ / ↓ : アクセル / ブレーキ",ctrlSteer:"A / D または ← / → : ハンドル操作",ctrlSignal:"Q / E : 左・右ウインカー　H : ハザード",ctrlGear:"Shift / Ctrl : ギア変更 (P/R/N/D・1-5)",ctrlLook:"Z / X : 左・右の安全確認（目視）",ctrlBrake:"Space : サイドブレーキ　C : クラッチ(MT)　I : エンジン始動",ctrlView:"V : カメラ切替　O : 現在地点へリセット　M : メニュー",tabStations:"課題ワープ",tabSettings:"車両・設定",tabCustomMap:"カスタム地図",vehicleLabel:"車種",vehicleSedan:"教習車セダン (右ハンドル)",vehicleMoto:"普通二輪 (400cc)",transLabel:"変速機",transAT:"AT (オートマ)",transMT:"MT (マニュアル)",steerSensLabel:"ハンドル感度",autoCenterLabel:"ハンドル自動復元",mirrorQualityLabel:"ミラー描画品質",mirrorHigh:"高画質",mirrorLow:"軽量",mirrorOff:"オフ",volumeLabel:"音量",touchControlsLabel:"タッチ操作パネル表示",customMapHint:"航空写真や教習所コース図(PNG/JPG/WebP)をアップロードし、実際の横幅(m)に合わせて走行できます。",uploadMapLabel:"コース画像をアップロード",mapWidthLabel:"コース横幅 (m)",setSpawnHere:"現在位置を開始地点に設定",useKyoshujo:"3D教習所コースへ戻る",useCustomMap:"カスタム地図で走行",clearCustomMap:"カスタム地図を削除",stalledWarning:"エンスト！ [I] キーまたはボタンで再始動",restartEngine:"エンジン始動 (I)",handbrakeOn:"サイドブレーキ作動中",curbWarning:"縁石接近",examPassStamp:"合格",examFailStamp:"不合格",examResultTitle:"運転技能検定 採点表",examTerminatedSub:"危険行為・重大違反のため検定中止となりました",examPassedSub:"合格基準（70点以上）を達成しました",examFailedSub:"合格点（70点）に届きませんでした",examFinalScore:"最終得点",examElapsed:"所要時間",examDistance:"走行距離",examNoViolations:"減点なし！模範的な運転です。",retryExam:"もう一度検定を受ける",practiceWeak:"苦手課題を練習する",closeModal:"練習を続ける",practiceGuideFree:"左上のコースメニューから各課題へワープ、または「修了検定」を開始できます。",minimapNorth:"北上",minimapFollow:"進行方向"},en:{appTitle:"Sakuragaoka Driving School 3D Simulator",appSubtitle:"Authentic Japanese Kyoshujo Training & Exam",modePractice:"Free Practice",modeExam:"Mock Exam",scoreLabel:"Score",stationMenu:"Menu / Warp",resetBtn:"Reset (O)",cameraBtn:"View (V)",camChase:"Chase",camCockpit:"Cockpit (RHD)",camHood:"Hood",camOrbit:"Orbit",welcomeTitle:"Sakuragaoka Japanese Driving School Simulator",welcomeLead:"Full 1:1 scale 180m × 120m Japanese Kyoshujo compound. Practice S-Curve, 90° Crank, Hill Start, Railroad Crossing, Stop Signs, Signals, Bay & Parallel Parking, or take the 100-point Mock Exam.",startTraining:"Start Practice",startExam:"Start Mock Exam",controlsHeading:"Controls (Right-Hand Drive · Keep Left)",ctrlDrive:"W / S or ↑ / ↓ : Throttle / Foot Brake",ctrlSteer:"A / D or ← / → : Steering Wheel",ctrlSignal:"Q / E : Left / Right Blinker   H : Hazard",ctrlGear:"Shift / Ctrl : Shift Gear (P/R/N/D or 1-5)",ctrlLook:"Z / X : Safety Glance Left / Right",ctrlBrake:"Space : Handbrake   C : Clutch (MT)   I : Ignition",ctrlView:"V : Camera   O : Reset Vehicle   M : Menu",tabStations:"Stations",tabSettings:"Vehicle & Setup",tabCustomMap:"Custom Map",vehicleLabel:"Vehicle",vehicleSedan:"Sedan (RHD Kyoshusha)",vehicleMoto:"Motorcycle (400cc)",transLabel:"Transmission",transAT:"AT (Automatic)",transMT:"MT (Manual)",steerSensLabel:"Steering Sensitivity",autoCenterLabel:"Auto-Center Steering",mirrorQualityLabel:"Mirror Reflections",mirrorHigh:"High",mirrorLow:"Low",mirrorOff:"Off",volumeLabel:"Master Volume",touchControlsLabel:"Show Touch Controls",customMapHint:"Upload any top-down driving center map image (PNG/JPG/WebP), calibrate real width in meters, and drive directly on it.",uploadMapLabel:"Upload Map Image",mapWidthLabel:"Map Width (meters)",setSpawnHere:"Set Current Position as Spawn",useKyoshujo:"Switch to 3D Kyoshujo",useCustomMap:"Drive Custom Map",clearCustomMap:"Clear Saved Map",stalledWarning:"Engine Stalled! Press [I] or tap to restart",restartEngine:"Start Engine (I)",handbrakeOn:"Handbrake Engaged",curbWarning:"Curb Close",examPassStamp:"PASS",examFailStamp:"FAIL",examResultTitle:"Practical Driving Exam Score Sheet",examTerminatedSub:"Exam terminated immediately due to a major safety violation",examPassedSub:"Passed with 70 points or higher",examFailedSub:"Score fell below the 70-point passing threshold",examFinalScore:"Final Score",examElapsed:"Time",examDistance:"Distance",examNoViolations:"Zero deductions — exemplary Japanese driving technique!",retryExam:"Retry Exam",practiceWeak:"Practice Weak Area",closeModal:"Continue Free Practice",practiceGuideFree:"Open Menu (M) to warp to any course obstacle or start a full 100-point Mock Exam.",minimapNorth:"North-Up",minimapFollow:"Heading-Up"}};function Hn(i,t){return cx[i][t]}class hx{constructor(t){yt(this,"keys",new Set);yt(this,"touchThrottle",0);yt(this,"touchBrake",0);yt(this,"touchLookLeft",!1);yt(this,"touchLookRight",!1);yt(this,"analogSteer",null);yt(this,"actions");yt(this,"handleBlur",()=>{this.keys.clear(),this.touchThrottle=0,this.touchBrake=0,this.touchLookLeft=!1,this.touchLookRight=!1,this.analogSteer=null});yt(this,"handleKeyDown",t=>{const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"))return;this.actions.onAnyInteraction();const n=t.code;(n==="Space"||n==="ArrowUp"||n==="ArrowDown"||n==="ArrowLeft"||n==="ArrowRight")&&t.preventDefault(),t.repeat||(n==="KeyQ"?this.actions.onToggleBlinker("left"):n==="KeyE"?this.actions.onToggleBlinker("right"):n==="KeyH"?this.actions.onToggleBlinker("hazard"):n==="Space"?this.actions.onToggleHandbrake():n==="ShiftLeft"||n==="ShiftRight"||n==="BracketRight"?this.actions.onShiftGear(1):n==="ControlLeft"||n==="ControlRight"||n==="BracketLeft"?this.actions.onShiftGear(-1):n==="KeyV"?this.actions.onCycleCamera():n==="KeyO"?this.actions.onResetVehicle():n==="KeyM"?this.actions.onToggleMenu():n==="KeyI"&&this.actions.onIgnition()),this.keys.add(n)});yt(this,"handleKeyUp",t=>{this.keys.delete(t.code)});this.actions=t,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}bindTouchControls(t){const e=t.querySelector('[data-touch="steer"]'),n=t.querySelector('[data-touch="steer-knob"]'),s=t.querySelector('[data-touch="throttle"]'),r=t.querySelector('[data-touch="brake"]'),o=t.querySelector('[data-touch="look-left"]'),a=t.querySelector('[data-touch="look-right"]');if(e){let c=null,h=0;const u=g=>{const _=g-h,v=54,m=Math.max(-1,Math.min(1,-_/v));this.analogSteer=m,n&&(n.style.transform=`translateX(${Math.max(-v,Math.min(v,_))}px)`)};e.addEventListener("pointerdown",g=>{g.preventDefault(),this.actions.onAnyInteraction(),c=g.pointerId,h=g.clientX,e.setPointerCapture(g.pointerId),u(g.clientX)}),e.addEventListener("pointermove",g=>{g.pointerId===c&&u(g.clientX)});const f=g=>{g.pointerId===c&&(c=null,this.analogSteer=null,n&&(n.style.transform="translateX(0px)"))};e.addEventListener("pointerup",f),e.addEventListener("pointercancel",f)}const l=(c,h)=>{if(!c)return;c.addEventListener("pointerdown",f=>{f.preventDefault(),this.actions.onAnyInteraction(),c.setPointerCapture(f.pointerId),c.classList.add("active"),h(!0)});const u=()=>{c.classList.remove("active"),h(!1)};c.addEventListener("pointerup",u),c.addEventListener("pointercancel",u)};l(s,c=>{this.touchThrottle=c?1:0}),l(r,c=>{this.touchBrake=c?1:0}),l(o,c=>{this.touchLookLeft=c}),l(a,c=>{this.touchLookRight=c}),t.querySelectorAll("[data-touch-action]").forEach(c=>{c.addEventListener("click",()=>{this.actions.onAnyInteraction();const h=c.dataset.touchAction;h==="blinker-left"?this.actions.onToggleBlinker("left"):h==="blinker-right"?this.actions.onToggleBlinker("right"):h==="handbrake"?this.actions.onToggleHandbrake():h==="gear-up"?this.actions.onShiftGear(1):h==="gear-down"&&this.actions.onShiftGear(-1)})})}getInputState(){const t=this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0,e=this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0,n=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0,s=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0,r=this.keys.has("KeyC")?1:0;return{throttle:Math.max(t,this.touchThrottle),brake:Math.max(e,this.touchBrake),steerLeft:n,steerRight:s,analogSteerTarget:this.analogSteer,clutch:r,lookLeft:this.keys.has("KeyZ")||this.touchLookLeft,lookRight:this.keys.has("KeyX")||this.touchLookRight}}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}const eh={type:"change"},Cl={type:"start"},mu={type:"end"},Fr=new Lh,nh=new Vn,ux=Math.cos(70*Le.DEG2RAD),Pe=new I,Ye=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ko=1e-6;class dx extends rp{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ns.ROTATE,MIDDLE:ns.DOLLY,RIGHT:ns.PAN},this.touches={ONE:ts.ROTATE,TWO:ts.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Pi,this._lastTargetPosition=new I,this._quat=new Pi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new wc,this._sphericalDelta=new wc,this._scale=1,this._panOffset=new I,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new I,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=px.bind(this),this._onPointerDown=fx.bind(this),this._onPointerUp=mx.bind(this),this._onContextMenu=Sx.bind(this),this._onMouseWheel=xx.bind(this),this._onKeyDown=vx.bind(this),this._onTouchStart=Mx.bind(this),this._onTouchMove=yx.bind(this),this._onMouseDown=gx.bind(this),this._onMouseMove=_x.bind(this),this._interceptControlDown=Ex.bind(this),this._interceptControlUp=bx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(eh),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ye:n>Math.PI&&(n-=Ye),s<-Math.PI?s+=Ye:s>Math.PI&&(s-=Ye),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Fr.origin.copy(this.object.position),Fr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fr.direction))<ux?this.object.lookAt(this.target):(nh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fr.intersectPlane(nh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ko||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ko||this._lastTargetPosition.distanceToSquared(this.target)>Ko?(this.dispatchEvent(eh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ye/60*this.autoRotateSpeed*t:Ye/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ye*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ye*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ye*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function fx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function px(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function mx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mu),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function gx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case ns.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case ns.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Cl)}function _x(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function xx(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(Cl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(mu))}function vx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Mx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ts.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case ts.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case ts.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case ts.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(Cl)}function yx(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function Sx(i){this.enabled!==!1&&i.preventDefault()}function Ex(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function bx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class or extends wt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Be;const n=this,s=e.color!==void 0?new Qt(e.color):new Qt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,l=e.shader||or.ReflectorShader,c=e.multisample!==void 0?e.multisample:4,h=new Vn,u=new I,f=new I,g=new I,_=new _e,v=new I(0,0,-1),m=new me,p=new I,y=new I,M=new me,x=new _e,S=this.camera,E=new ci(r,o,{samples:c,type:vs}),w=new Zn({name:l.name!==void 0?l.name:"unspecified",uniforms:Fh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=E.texture,w.uniforms.color.value=s,w.uniforms.textureMatrix.value=x,this.material=w,this.onBeforeRender=function(P,b,T){if(f.setFromMatrixPosition(n.matrixWorld),g.setFromMatrixPosition(T.matrixWorld),_.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(_),p.subVectors(f,g),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),_.extractRotation(T.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(g),y.subVectors(f,v),y.reflect(u).negate(),y.add(f),S.position.copy(p),S.up.set(0,1,0),S.up.applyMatrix4(_),S.up.reflect(u),S.lookAt(y),S.far=T.far,S.updateMatrixWorld(),S.projectionMatrix.copy(T.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(S.projectionMatrix),x.multiply(S.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,f),h.applyMatrix4(S.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const B=S.projectionMatrix;M.x=(Math.sign(m.x)+B.elements[8])/B.elements[0],M.y=(Math.sign(m.y)+B.elements[9])/B.elements[5],M.z=-1,M.w=(1+B.elements[10])/B.elements[14],m.multiplyScalar(2/m.dot(M)),B.elements[2]=m.x,B.elements[6]=m.y,B.elements[10]=m.z+1-a,B.elements[14]=m.w,n.visible=!1;const H=P.getRenderTarget(),J=P.xr.enabled,W=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(E),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(b,S),P.xr.enabled=J,P.shadowMap.autoUpdate=W,P.setRenderTarget(H);const j=T.viewport;j!==void 0&&P.state.viewport(j),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}or.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Tx(i,t,e=!0){const n=[],s=(N,X=.5,G=.1)=>new kt({color:N,roughness:X,metalness:G}),r=new Xa({color:366185,roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.13}),o=new Xa({color:3462041,roughness:.3,metalness:.35,clearcoat:1,clearcoatRoughness:.2}),a=s(14014684,.3,.65),l=s(1448221,.65,.3),c=s(1053205,.93,0),h=s(2237482,.96,0),u=s(3882307,.4,.58),f=s(8817554,.32,.7),g=s(14803943,.2,.6);function _(N,X){return N.name=X,N.userData.partName=X,N}function v(N,X){const G=_(new ie,X);return N.add(G),G}function m(N,X,G,K,nt=0,ct=0,R=0){const d=_(new wt(G,K),X);return d.position.set(nt,ct,R),d.castShadow=!0,d.receiveShadow=!0,N.add(d),d}const p=(N,X,G,K,nt,ct,R=0,d=0,C=0)=>m(N,X,new he(G,K,nt),ct,R,d,C);function y(N,X,G,K,nt){return m(N,X,new sr(new ao(G.map(ct=>new I(...ct))),40,K,8,!1),nt)}function M(N,X,G,K,nt,ct){const R=new I(...G),d=new I(...K),C=d.clone().sub(R),L=m(N,X,new oe(nt,nt,C.length(),16),ct);return L.position.copy(R.add(d).multiplyScalar(.5)),L.quaternion.setFromUnitVectors(new I(0,1,0),C.normalize()),L}function x(N,X,G,K,nt,ct,R=0,d=0,C=0){const L=m(N,X,new ir(1,36,24),ct,R,d,C);return L.scale.set(G,K,nt),L}function S(N,X,G,K){const nt=[],ct=[];for(const[C,L,k,F]of G)for(let at=0;at<40;at++){const Q=at/40*Math.PI*2;nt.push(Math.cos(Q)*L,(F+k)/2+Math.sin(Q)*((F-k)/2),C)}for(let C=0;C<G.length-1;C++)for(let L=0;L<40;L++){const k=C*40+L,F=C*40+(L+1)%40;ct.push(k,F,F+40,k,F+40,k+40)}for(let C=1;C<39;C++){ct.push(0,C+1,C);const L=(G.length-1)*40;ct.push(L,L+C,L+C+1)}const d=new ge;return d.setAttribute("position",new Zt(nt,3)),d.setIndex(ct),d.computeVertexNormals(),m(N,X,d,K)}const E=v(i,"motorcycleRoot"),w=v(i,"bikeCockpitRoot"),P=[[-.28,.065,.77,.86],[-.16,.135,.76,.93],[0,.205,.77,1.02],[.19,.218,.8,1.064],[.34,.184,.83,1.052],[.46,.09,.84,.98],[.49,.025,.87,.93]],b=S(E,"paintedTank",P,r);function T(N,X,G,K){let nt=0;for(;nt<P.length-2&&P[nt+1][0]<N;)nt++;const ct=P[nt],R=P[nt+1],d=(N-ct[0])/(R[0]-ct[0]),C=Le.lerp(ct[1],R[1],d),L=Le.lerp(ct[2],R[2],d),k=Le.lerp(ct[3],R[3],d);return[G*(Math.cos(X)*C+K),(k+L)/2+Math.sin(X)*((k-L)/2),N]}for(const N of[-1,1])for(const[X,G,K,nt]of[["whitePinstripe",0,.004,a],["blackSweep",.025,.005,l],["silverPanel",.064,.006,a]]){const ct=[],R=[],d=[[-.215,-.65,.06],[-.15,-.82,.34],[0,-.75,.65],[.18,-.5,.77],[.29,-.24,.65],[.38,.05,.22]];for(const[k,F,at]of d)for(let Q=0;Q<=12;Q++)ct.push(...T(k,Le.lerp(F+G,at-G,Q/12),N,K));for(let k=0;k<d.length-1;k++)for(let F=0;F<12;F++){const at=k*13+F,Q=at+13;R.push(at,Q,at+1,at+1,Q,Q+1)}const C=new ge;C.setAttribute("position",new Zt(ct,3)),C.setIndex(R),C.computeVertexNormals();const L=nt.clone();L.side=Ae,m(E,`${X}${N}`,C,L)}const D=m(E,"fuelCap",new oe(.043,.043,.009,32),a,0,1.068,.18);m(D,"lock",new he(.018,.004,.008),l,0,.007,0),S(E,"steppedSaddle",[[-.96,.085,.88,.94],[-.85,.145,.855,.966],[-.63,.153,.82,.95],[-.45,.125,.775,.867],[-.27,.108,.775,.837],[-.19,.07,.8,.837]],h),S(E,"paintedTailCowl",[[-1.02,.035,.86,.91],[-.93,.11,.815,.88],[-.73,.151,.76,.849],[-.5,.125,.73,.81],[-.31,.08,.725,.77]],r);for(const N of[-1,1]){y(E,`tailSilverStripe${N}`,[[N*.11,.85,-.94],[N*.153,.82,-.76],[N*.13,.78,-.52],[N*.09,.75,-.35]],.012,a),y(E,`grabRail${N}`,[[N*.14,.87,-.65],[N*.18,.92,-.86],[N*.12,.94,-1]],.014,f);const X=new os;X.moveTo(-.5,.8),X.quadraticCurveTo(-.34,.82,-.17,.78),X.lineTo(-.25,.6),X.quadraticCurveTo(-.37,.6,-.5,.8);const G=new tr(X,{depth:.015,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008,curveSegments:16}),K=m(E,`sideCover${N}`,G,r,N*.14);K.rotation.y=Math.PI/2,K.scale.x=-1,y(E,`frameCradle${N}`,[[N*.12,.94,.38],[N*.16,.72,.3],[N*.18,.3,.15],[N*.17,.29,-.25],[N*.14,.71,-.48],[N*.12,.87,-.7]],.018,l),M(E,`seatSubframe${N}`,[N*.12,.63,-.35],[N*.12,.88,-.94],.019,l),M(E,`swingarm${N}`,[N*.13,.43,-.2],[N*.135,.315,-.715],.024,f),M(E,`shockShaft${N}`,[N*.168,.36,-.72],[N*.168,.79,-.55],.017,t);const nt=[],ct=new I(N*.168,.39,-.71),R=new I(N*.168,.74,-.57);for(let d=0;d<=96;d++){const C=d/96,L=C*Math.PI*2*10,k=ct.clone().lerp(R,C);nt.push([k.x+Math.cos(L)*.033,k.y+Math.sin(L)*.013,k.z+Math.sin(L)*.031])}y(E,`shockSpring${N}`,nt,.0065,o),M(E,`footpeg${N}`,[N*.15,.44,-.23],[N*.29,.44,-.23],.017,l),p(E,`heelPlate${N}`,.016,.11,.19,a,N*.19,.45,-.32)}x(E,"crankcase",.225,.17,.24,u,0,.48,0);for(const N of[-1,1]){const X=m(E,`engineCover${N}`,new oe(.124,.124,.045,40),u,N*.228,.46,-.05);X.rotation.z=Math.PI/2;const G=m(E,`clutchCover${N}`,new oe(.073,.073,.026,32),f,N*.236,.43,.135);G.rotation.z=Math.PI/2}for(let N=0;N<4;N++){const X=(N-1.5)*.095;p(E,`cylinder${N}`,.084,.21,.18,u,X,.65,.115);for(let G=0;G<7;G++)p(E,`coolingFin${N}:${G}`,.091,.008,.19,f,X,.58+G*.024,.12);y(E,`header${N}`,[[X,.715,.22],[X,.64,.33],[X,.4,.34],[X,.235,.2],[X*.65,.225,-.13],[-.16,.26,-.37]],.022,g)}p(E,"camCover",.43,.065,.235,u,0,.802,.12),p(E,"radiator",.32,.2,.055,l,0,.7,.335),y(E,"collector",[[-.16,.26,-.37],[-.24,.3,-.48],[-.26,.39,-.62]],.041,g),M(E,"chromeSilencer",[-.265,.37,-.49],[-.265,.56,-.98],.063,g),M(E,"exhaustOutlet",[-.265,.56,-.98],[-.265,.57,-1.01],.045,l);function B(N,X,G){const K=v(N,X),nt=m(K,"tire",new An(.262,.053,16,48),c);nt.rotation.y=Math.PI/2,nt.scale.z=G/.106;const ct=m(K,"rim",new An(.218,.014,10,36),l);ct.rotation.y=Math.PI/2;const R=m(K,"hub",new oe(.048,.048,G+.018,24),f);R.rotation.z=Math.PI/2;for(const d of[-1,1]){for(let L=0;L<6;L++){const k=L/6*Math.PI*2;M(K,`spoke${d}:${L}`,[d*.026,Math.sin(k)*.047,Math.cos(k)*.047],[d*.044,Math.sin(k+.13)*.211,Math.cos(k+.13)*.211],.014,l)}const C=m(K,`brakeDisc${d}`,new Yn(.093,.146,36),a,d*(G/2+.014));C.rotation.y=d*Math.PI/2}return{group:K,tire:nt,rim:ct,hub:R}}const H=v(E,"bikeFrontWheelPivot");H.position.set(0,.315,.72);const J=B(H,"frontWheel",.12),W=v(E,"bikeRearWheelMount");W.position.set(0,.315,-.715);const j=B(W,"rearWheel",.16);m(W,"rearSprocket",new Yn(.048,.12,32),f,.096,0,0).rotation.y=Math.PI/2,y(E,"driveChain",[[.105,.4,-.71],[.105,.5,-.24],[.105,.42,-.15],[.105,.23,-.69],[.105,.25,-.82],[.105,.35,-.83],[.105,.4,-.71]],.009,f);for(const N of[-1,1])M(H,`forkChrome${N}`,[N*.095,.08,-.03],[N*.095,.63,-.27],.021,t),M(H,`forkSlider${N}`,[N*.095,0,0],[N*.095,.32,-.137],.031,l),p(H,`brakeCaliper${N}`,.048,.1,.056,l,N*.098,.04,-.115);const et=r.clone();et.side=Ae;const Y=[],pt=[];for(let N=0;N<=24;N++){const X=-1.13+N/24*2.26;for(let G=0;G<=6;G++){const K=(G/6-.5)*.15;Y.push(K,Math.cos(X)*(.359-.01*(K/.075)**2),Math.sin(X)*.359)}}for(let N=0;N<24;N++)for(let X=0;X<6;X++){const G=N*7+X;pt.push(G,G+7,G+1,G+1,G+7,G+8)}const dt=new ge;dt.setAttribute("position",new Zt(Y,3)),dt.setIndex(pt),dt.computeVertexNormals(),m(H,"frontFender",dt,et),p(E,"rearMudguard",.14,.035,.27,l,0,.68,-.94).rotation.x=.5;function Mt(N,X,G,K){const nt=v(N,X);nt.position.set(0,G,K),y(nt,"chromeHandlebar",[[-.36,0,-.06],[-.24,.014,-.04],[-.16,.005,-.01],[-.1,-.035,.025],[.1,-.035,.025],[.16,.005,-.01],[.24,.014,-.04],[.36,0,-.06]],.012,t);for(const ct of[-1,1]){M(nt,`grip${ct}`,[ct*.26,.009,-.05],[ct*.37,0,-.065],.022,c),p(nt,`switchBlock${ct}`,.045,.041,.052,l,ct*.235,.013,-.04),y(nt,`lever${ct}`,[[ct*.21,.013,-.006],[ct*.3,.019,.017],[ct*.37,.014,-.005]],.0065,a),M(nt,`mirrorBoot${ct}`,[ct*.235,.02,-.025],[ct*.245,.075,-.02],.012,l),y(nt,`mirrorStem${ct}`,[[ct*.245,.07,-.02],[ct*.26,.115,.008],[ct*.34,.165,.04],[ct*.425,.22,.075]],.0055,g),x(nt,`roundMirror${ct}`,.059,.059,.012,l,ct*.465,.245,.085);const R=new Ri(1,32),d=_(e?new or(R,{color:11974326,textureWidth:256,textureHeight:256,multisample:0,clipBias:.001}):new wt(R,s(10992584,.08,.8)),`mirrorGlass${ct}`);d.position.set(ct*.465,.245,.071),d.scale.set(.055,.055,1),d.rotation.set(0,Math.PI,0),nt.add(d),n.push(d);const C=m(nt,`mirrorBezel${ct}`,new Yn(1,1.07,32),g,ct*.465,.245,.07);C.scale.copy(d.scale),C.rotation.copy(d.rotation)}return p(nt,"upperTripleClamp",.25,.028,.105,l,0,-.1,.055),nt}const Nt=Mt(E,"bikeHandlebar",1.035,.4),qt=m(E,"roundHeadlightBucket",new oe(.095,.092,.105,32),t,0,.947,.585);qt.rotation.x=Math.PI/2;const te=new kt({color:16053740,emissive:16777185,emissiveIntensity:.5,roughness:.15});m(E,"headlightLens",new Ri(.086,32),te,0,.947,.64),m(E,"headlightRim",new An(.09,.006,8,32),t,0,.947,.645);let jt=0,tt=.22;const lt=[];function mt(N,X,G,K,nt,ct,R){const d=v(N,X);d.position.set(G,K,nt),d.rotation.x=-.42;const C=m(d,"meterBucket",new oe(.068,.068,.065,24),l,0,0,.018);C.rotation.x=Math.PI/2,m(d,"chromeMeterRim",new An(.065,.005,8,28),t,0,0,-.019);const L=document.createElement("canvas");L.width=256,L.height=256;const k=L.getContext("2d"),F=new En(L);F.colorSpace=ve;const at=m(d,"instrumentFace",new Ri(.061,28),new We({map:F,toneMapped:!1}),0,0,-.02);return at.rotation.y=Math.PI,lt.push({ctx:k,texture:F,max:ct,isRpm:R}),d}function Ct(N,X){p(N,`${X}InstrumentBridge`,.245,.034,.067,l,0,-.005,.124),p(N,`${X}CenterPod`,.05,.081,.049,l,0,.051,.137),mt(N,`${X}Speedometer`,.079,.064,.143,180,!1),mt(N,`${X}Tachometer`,-.079,.064,.143,13,!0)}Ct(Nt,"exterior");const It=b.clone();It.position.set(0,.16,.08),w.add(It);const Xt=Mt(w,"bikeCockpitBar",1.17,.52);Ct(Xt,"cockpit");let ne="";function U(N,X){jt=Math.round(Math.abs(N)*3.6),tt=Math.round(X*40)/40;const G=`${jt}/${tt}`;if(G!==ne){ne=G;for(const K of lt){const nt=K.ctx;nt.fillStyle="#10171d",nt.fillRect(0,0,256,256),nt.textAlign="center";for(let d=0;d<=12;d++){const C=Math.PI*(.75+1.5*d/12);nt.strokeStyle=d>10?"#ee4a50":"#d7e3e9",nt.lineWidth=d%2?2:4,nt.beginPath(),nt.moveTo(128+Math.cos(C)*91,128+Math.sin(C)*91),nt.lineTo(128+Math.cos(C)*109,128+Math.sin(C)*109),nt.stroke(),d%2===0&&(nt.fillStyle="#e3eaef",nt.font="15px sans-serif",nt.fillText(String(Math.round(d/12*K.max)),128+Math.cos(C)*76,133+Math.sin(C)*76))}const ct=K.isRpm?tt*12:jt,R=Math.PI*(.75+1.5*Math.min(ct/K.max,1));nt.strokeStyle="#ff5147",nt.lineWidth=4,nt.beginPath(),nt.moveTo(128,128),nt.lineTo(128+Math.cos(R)*90,128+Math.sin(R)*90),nt.stroke(),nt.fillStyle="#c5d7df",nt.font="14px sans-serif",nt.fillText(K.isRpm?"×1000":"km/h",128,176),nt.fillStyle="#172c31",nt.fillRect(94,189,68,25),nt.fillStyle="#b6e2d4",nt.font="18px monospace",nt.fillText(K.isRpm?String(Math.round(tt*12e3)):String(jt),128,208),K.texture.needsUpdate=!0}}}U(0,.22);function rt(N,X,G,K,nt,ct=.056){const R=new kt({color:nt,emissive:nt,emissiveIntensity:.02,roughness:.25});return{mesh:p(E,N,ct,.034,.036,R,X,G,K),material:R}}const it={left:[rt("frontLeftSignal",.16,.905,.584,16753962),rt("rearLeftSignal",.16,.78,-.985,16753962)],right:[rt("frontRightSignal",-.16,.905,.584,16753962),rt("rearRightSignal",-.16,.78,-.985,16753962)]},st=rt("tailLamp",0,.849,-1.012,15014699,.16);return{motorcycleRoot:E,bikeCockpitRoot:w,bikeCockpitBar:Xt,bikeHandlebar:Nt,bikeFrontWheelPivot:H,bikeFrontWheelAssembly:J,bikeRearWheelAssembly:j,bikeRearWheelMount:W,bikeSignalLamps:it,bikeBrakeLamp:st,updateBikeCockpit:U,mirrorSurfaces:n}}function wx(i,t,e,n,s=!0){const r=new ie;r.name="sedanRoot",i.add(r);const o={sedanRoot:r},a=[];o.mirrorSurfaces=a;const l=(d,C=.65,L=0)=>new kt({color:d,roughness:C,metalness:L}),c=l(2435116,.88),h=l(4277578,.96),u=l(9213599,.38,.55),f=l(1385262,.16,.4),g=new kt({color:15792639,emissive:14282495,emissiveIntensity:.8}),_=new kt({color:10097179,emissive:15277353,emissiveIntensity:.28,roughness:.2}),v=new kt({color:10929102,roughness:.12,metalness:.12,transparent:!0,opacity:.19,depthWrite:!1,side:Ae}),m=(d,C)=>(d.name=C,d.userData.partName=C,d),p=(d,C=r)=>{const L=m(new ie,d);return C.add(L),L},y=d=>o[d]=p(d);function M(d,C,L,k=.025){k=Math.min(k,d/3,C/3,L/3);const F=new os;F.moveTo(-d/2+k,-C/2+k),F.lineTo(d/2-k,-C/2+k),F.lineTo(d/2-k,C/2-k),F.lineTo(-d/2+k,C/2-k),F.closePath();const at=new tr(F,{depth:L-2*k,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:k,bevelThickness:k});return at.translate(0,0,-L/2+k),at}function x(d,C,L,k,F=0,at=0,Q=0){const vt=d.children.filter($=>$.name===C||$.name.startsWith(`${C}:`)).length,ut=m(new wt(L,k),vt?`${C}:${vt+1}`:C);return ut.position.set(F,at,Q),ut.castShadow=!k.transparent,ut.receiveShadow=!0,d.add(ut),ut}const S=(d,C,L,k,F,at,Q=0,vt=0,ut=0,$=.025)=>x(d,C,M(L,k,F,$),at,Q,vt,ut);function E(d,C,L,k){const F=[],at=[];for(const[ut,$,ft,Bt]of L)for(let At=0;At<32;At++){const Et=At/32*Math.PI*2,Gt=Math.cos(Et),O=Math.sin(Et);F.push(Math.sign(Gt)*Math.pow(Math.abs(Gt),.42)*$,(Bt+ft)/2+Math.sign(O)*Math.pow(Math.abs(O),.42)*((Bt-ft)/2),ut)}for(let ut=0;ut<L.length-1;ut++)for(let $=0;$<32;$++){const ft=ut*32+$,Bt=ut*32+($+1)%32;at.push(ft,Bt,Bt+32,ft,Bt+32,ft+32)}for(let ut=1;ut<31;ut++){at.push(0,ut+1,ut);const $=(L.length-1)*32;at.push($,$+ut,$+ut+1)}const vt=new ge;return vt.setAttribute("position",new Zt(F,3)),vt.setIndex(at),vt.computeVertexNormals(),x(d,C,vt,k)}function w(d,C,L,k,F=.008){const at=new ao(L.map(Q=>new I(...Q)));return x(d,C,new sr(at,Math.max(8,L.length*5),F,5,!1),k)}function P(d,C,L,k){const F=new ge;return F.setAttribute("position",new Zt(L.flat(),3)),F.setIndex([0,1,2,0,2,3]),F.computeVertexNormals(),x(d,C,F,k)}const b=new kt({color:3462041,roughness:.35,metalness:.2,side:Ae});function T(d,C,L,k,F=.06){const at=p("gaimengoEmblem",d);return at.position.set(C,L,k),x(at,"badgeRing",new An(F,F*.12,6,32),e),x(at,"badgeDisc",new Ri(F*.86,32),b),at}function D(d,C,L,k,F,at){const Q=p(C,d);Q.position.set(...F);const ut=new I(-.36,1.245,-.38).sub(Q.position).normalize().add(new I(...at).normalize()).normalize();Q.quaternion.setFromRotationMatrix(new _e().lookAt(ut,new I,new I(0,1,0))),S(Q,"mirrorFrame",L+.022,k+.022,.024,n,0,0,-.015,.006);const $=new ke(L,k),ft=m(s?new or($,{color:11974326,textureWidth:256,textureHeight:256,clipBias:.001,multisample:0}):new wt($,l(10597570,.08,.85)),"reflectiveGlass");if(Q.add(ft),a.push(ft),s&&ft.onBeforeRender){const Bt=ft.onBeforeRender;ft.onBeforeRender=function(At,Et,Gt){if(Gt.userData.skipCarMirrors)return;const O=performance.now(),_t=Gt.userData.carMirrorInterval||0;if(_t&&O-(this.userData.reflectedAt||0)<_t)return;this.userData.reflectedAt=O;const St=a.map(Pt=>Pt.visible),Dt=At.getViewport(new me),gt=At.getScissor(new me),ot=At.getScissorTest();a.forEach(Pt=>{Pt!==ft&&(Pt.visible=!1)}),At.setScissorTest(!1);try{Bt.call(this,At,Et,Gt)}finally{a.forEach((Pt,Yt)=>{Pt.visible=St[Yt]}),At.setViewport(Dt),At.setScissor(gt),At.setScissorTest(ot)}}}return Q}const B=y("body"),H=new os;H.moveTo(-2.26,.3),H.lineTo(-2.26,.76),H.quadraticCurveTo(-2.15,.94,-1.6,.97),H.lineTo(.95,.94),H.quadraticCurveTo(1.95,.94,2.24,.78),H.lineTo(2.24,.3),H.lineTo(1.72,.3),H.absarc(1.35,.315,.371,0,Math.PI,!1),H.lineTo(-.979,.3),H.absarc(-1.35,.315,.371,0,Math.PI,!1),H.closePath();const J=new tr(H,{depth:.055,bevelEnabled:!0,bevelSegments:3,bevelSize:.018,bevelThickness:.018,curveSegments:32}),W=J.attributes.position;for(let d=0;d<W.count;d++){const C=W.getX(d),L=W.getY(d),k=Math.max(0,L-.77)*.24,F=Math.pow(Math.min(Math.abs(C)/2.3,1),5)*.048;W.setZ(d,W.getZ(d)-k-F)}J.computeVertexNormals();for(const d of[-1,1]){const C=x(B,`sideSkin${d}`,J,t,d*.825);C.rotation.y=d*Math.PI/2,d===1&&(C.scale.x=-1);for(const L of[-1.35,1.35]){const k=[];for(let F=0;F<=28;F++){const at=F/28*Math.PI;k.push([d*.885,.315+Math.sin(at)*.382,L+Math.cos(at)*.382])}w(B,"fenderLip",k,t,.018)}w(B,"shoulderCrease",[[d*.86,.81,-2.04],[d*.898,.88,-.9],[d*.898,.87,.7],[d*.855,.8,1.98]],u,.003);for(const L of[-.48,.67])w(B,"doorShutline",[[d*.898,.93,L],[d*.899,.63,L-.02],[d*.88,.36,L-.07]],n,.0035),S(B,"doorHandle",.026,.032,.15,t,d*.912,.84,L-.19,.01);S(B,"rocker",.07,.08,1.9,t,d*.85,.3,0)}S(B,"underbody",1.55,.08,3.65,n,0,.24,0);const j=y("shoulderShell");for(const d of[-1,1])S(j,"beltLine",.12,.09,2.5,t,d*.81,.94,-.2);const et=y("hood");E(et,"bonnet",[[.94,.785,.943,1.012],[1.15,.817,.929,1],[1.75,.822,.884,.965],[2.1,.785,.859,.932],[2.23,.71,.85,.912]],t);for(const d of[-1,1])w(et,"bonnetCrease",[[d*.57,1.01,.99],[d*.49,.981,1.6],[d*.38,.945,2.15]],t,.009);const Y=y("trunk");E(Y,"bootLid",[[-2.275,.74,.902,.958],[-2.16,.835,.905,.99],[-1.85,.85,.916,1.004],[-1.51,.79,.925,1.015]],t),S(Y,"bootFace",1.64,.24,.07,t,0,.8,-2.255),T(Y,0,.86,-2.299,.039);const pt=y("frontBumper");E(pt,"bumper",[[1.98,.848,.3,.823],[2.15,.875,.295,.846],[2.25,.834,.31,.854],[2.318,.753,.34,.848]],t);const dt=y("rearBumper");E(dt,"bumper",[[-2.323,.746,.345,.636],[-2.28,.836,.32,.655],[-2.16,.873,.31,.665],[-2.02,.846,.32,.66]],t),S(dt,"lowerValance",1.36,.105,.03,n,0,.335,-2.321);for(const d of[-1,1])S(dt,"reflector",.19,.033,.016,_,d*.66,.48,-2.327);const Mt=y("grille"),Nt=new os;Nt.moveTo(-.52,.735),Nt.lineTo(.52,.735),Nt.lineTo(.715,.385),Nt.quadraticCurveTo(0,.315,-.715,.385),Nt.closePath(),x(Mt,"trapezoidIntake",new wl(Nt),n,0,0,2.323);for(let d=0;d<7;d++){const C=.39+d*.046,L=.7-d*.026;S(Mt,"grilleSlat",L*2,.012,.014,l(3423040,.45,.15),0,C,2.331,.003)}S(Mt,"upperIntake",1.26,.063,.035,n,0,.825,2.276),w(Mt,"chromeWing",[[-.71,.87,2.273],[-.36,.847,2.308],[0,.848,2.319],[.36,.847,2.308],[.71,.87,2.273]],e,.01),T(Mt,0,.862,2.343,.041);const qt=y("cabin"),te=y("roofPanel");S(te,"roof",1.39,.075,1.14,t,0,1.435,-.23,.024),S(te,"headliner",1.32,.021,1.11,h,0,1.388,-.23,.006);for(const[d,C,L]of[["aPillarL",-1,!1],["aPillarR",1,!1],["cPillarL",-1,!0],["cPillarR",1,!0]]){const k=y(d);w(k,"paintedPillar",[[C*.81,.97,L?-1.57:1],[C*.735,1.2,L?-1.19:.65],[C*.66,1.435,L?-.8:.31]],t,L?.065:.031),w(k,"pillarLining",[[C*.779,.978,L?-1.54:.99],[C*.705,1.2,L?-1.18:.64],[C*.637,1.418,L?-.79:.3]],h,L?.033:.019)}const jt=y("windshield");P(jt,"glass",[[-.78,.99,1],[.78,.99,1],[.65,1.413,.32],[-.65,1.413,.32]],v);const tt=y("rearWindow");P(tt,"glass",[[.76,1.005,-1.53],[-.76,1.005,-1.53],[-.64,1.415,-.79],[.64,1.415,-.79]],v);for(const[d,C]of[["sideWindowL",-1],["sideWindowR",1]]){const L=y(d);P(L,"glass",[[C*.816,.986,.97],[C*.816,.986,-1.5],[C*.665,1.412,-.78],[C*.665,1.412,.3]],v),w(qt,"bPillar",[[C*.814,.97,-.37],[C*.667,1.413,-.37]],n,.033),w(qt,"windowSurround",[[C*.816,.975,.98],[C*.664,1.422,.3],[C*.666,1.426,-.77],[C*.816,.981,-1.5]],n,.009)}for(const[d,C]of[["roofRailL",-1],["roofRailR",1]]){const L=y(d);w(L,"roofSeam",[[C*.65,1.465,.25],[C*.66,1.475,-.24],[C*.65,1.465,-.74]],n,.003)}const lt=x(te,"sharkFin",new rs(.042,.09,4),t,0,1.508,-.66);lt.scale.z=1.7;for(const[d,C]of[["headlightL",-1],["headlightR",1]]){const L=y(d);L.position.set(C*.653,.848,2.197),L.rotation.y=C*.16,S(L,"smokedHousing",.43,.108,.13,f,0,0,0,.028);for(const k of[-.1,.025])x(L,"projector",new oe(.027,.027,.012,20),g,k,.01,.072).rotation.x=Math.PI/2;w(L,"ledSignature",[[-.192,.027,.073],[-.13,-.03,.073],[.14,-.03,.073],[.193,.021,.073]],g,.008)}for(const[d,C]of[["taillightL",-1],["taillightR",1]]){const L=y(d);L.position.set(C*.622,.835,-2.278),S(L,"redHousing",.43,.104,.061,_,0,0,0,.02),w(L,"lightSignature",[[-.19,.03,-.04],[.19,.03,-.04],[.13,-.032,-.04],[-.17,-.032,-.04]],_,.012)}for(const[d,C]of[["sideMirrorL",-1],["sideMirrorR",1]]){const L=y(d);S(L,"mirrorStalk",.17,.032,.054,n,C*.866,1.027,.72);const k=D(L,"sideMirrorFace",.15,.061,[C*.97,1.064,.582],[C*.15,-.05,-1]);S(k,"mirrorCap",.19,.1,.19,t,0,0,-.12,.027)}const mt=y("dashboard");S(mt,"cabinFloor",1.58,.08,2.58,c,0,.335,-.28),S(mt,"firewall",1.55,.56,.09,c,0,.615,.9);for(const d of[-1,1])S(mt,"lowerDoorLining",.075,.23,2.15,c,d*.766,.46,-.13),S(mt,"carpetMat",.53,.018,.8,n,d*.39,.383,.1,.004);S(mt,"mirrorStem",.025,.09,.035,n,.03,1.354,.405,.007),D(mt,"centerMirror",.245,.083,[.03,1.287,.39],[0,-.02,-1]),S(mt,"softDashTop",1.56,.13,.56,c,0,.915,.69,.035),S(mt,"lowerDash",1.51,.17,.26,h,0,.797,.6,.034),w(mt,"satinDashAccent",[[-.74,.86,.408],[-.43,.863,.399],[0,.862,.397],[.46,.864,.398],[.74,.885,.414]],u,.007);for(const d of[-.665,-.11,.115,.665]){S(mt,"ventFrame",.16,.062,.021,u,d,.875,.386,.005),S(mt,"ventRecess",.143,.047,.013,n,d,.875,.372,.004);for(let C=-1;C<=1;C++)S(mt,"ventSlat",.13,.003,.009,h,d,.875+C*.013,.362,8e-4)}S(mt,"climatePanel",.38,.073,.038,n,.015,.761,.432,.01);for(const d of[-.135,.16]){const C=x(mt,"climateKnob",new oe(.026,.026,.018,24),u,d,.761,.407);C.rotation.x=Math.PI/2}S(mt,"centerTunnel",.25,.17,.95,c,.015,.5,-.04),S(mt,"shiftSurround",.19,.017,.28,u,.015,.596,.18,.005),S(mt,"shiftBoot",.11,.07,.14,n,.015,.634,.18),S(mt,"gearSelector",.065,.1,.07,c,.015,.704,.18);for(const d of[-.1,-.28])x(mt,"cupWell",new oe(.057,.047,.012,24),n,.015,.59,d),x(mt,"cupRim",new An(.057,.004,6,24),u,.015,.597,d).rotation.x=Math.PI/2;S(mt,"armrest",.25,.085,.28,c,.015,.64,-.51);for(const d of[-1,1])S(mt,"doorCard",.047,.42,1.3,c,d*.79,.74,-.03),S(mt,"doorArmrest",.1,.048,.57,h,d*.738,.72,.07),w(mt,"doorTrim",[[d*.757,.875,.5],[d*.757,.857,.1],[d*.757,.8,-.5]],u,.006),S(mt,"doorPull",.014,.029,.12,e,d*.755,.84,.28,.004);const Ct=y("steeringWheel");Ct.position.set(-.36,.971,.16),Ct.rotation.x=-.22,x(Ct,"leatherRim",new An(.174,.019,12,64),c),S(Ct,"airbag",.137,.105,.055,c,0,-.005,0,.016);for(const d of[-1,1]){S(Ct,"horizontalSpoke",.11,.046,.028,c,d*.112,-.008,0),S(Ct,"spokeTrim",.081,.009,.014,u,d*.113,-.031,-.018,.002);for(let C=0;C<3;C++)S(Ct,"controlButton",.014,.011,.006,u,d*(.084+C*.025),.002,-.019,.001)}S(Ct,"lowerSpoke",.05,.098,.025,u,0,-.116,0),T(Ct,0,.009,-.035,.021);for(const d of[-1,1])S(mt,"columnStalk",.15,.019,.025,n,-.36+d*.14,.971,.24,.006);function It(d,C,L,k,F,at=[768,320]){const Q=document.createElement("canvas");Q.width=at[0],Q.height=at[1];const vt=Q.getContext("2d");F(vt,Q.width,Q.height);const ut=new En(Q);ut.colorSpace=ve;const $=x(d,C,new ke(L,k),new We({map:ut,toneMapped:!1}));return $.rotation.y=Math.PI,$.castShadow=!1,{ctx:vt,texture:ut,screen:$}}const Xt=y("instrumentCluster");Xt.position.set(-.36,.973,.399),Xt.rotation.x=-.15,S(Xt,"clusterHousing",.47,.17,.066,n,0,0,.027,.02),S(Xt,"clusterHood",.49,.023,.13,c,0,.083,.014,.007);let ne=0,U=.18,rt="N",it="off";function st(d,C,L){d.fillStyle="#071017",d.fillRect(0,0,C,L);const k=(F,at,Q,vt)=>{d.strokeStyle="#304652",d.lineWidth=8,d.beginPath(),d.arc(F,163,116,.75*Math.PI,2.25*Math.PI),d.stroke();for(let $=0;$<=12;$++){const ft=Math.PI*(.75+1.5*$/12);d.strokeStyle=$>10?"#ff655b":"#d0dee7",d.lineWidth=$%2?2:4,d.beginPath(),d.moveTo(F+Math.cos(ft)*96,163+Math.sin(ft)*96),d.lineTo(F+Math.cos(ft)*110,163+Math.sin(ft)*110),d.stroke(),$%2||(d.fillStyle="#c6d5df",d.font="16px sans-serif",d.textAlign="center",d.fillText(String(Math.round($/12*Q)),F+Math.cos(ft)*79,169+Math.sin(ft)*79))}const ut=Math.PI*(.75+1.5*Math.min(at/Q,1));d.strokeStyle="#f65b4f",d.lineWidth=4,d.beginPath(),d.moveTo(F,163),d.lineTo(F+Math.cos(ut)*89,163+Math.sin(ut)*89),d.stroke(),d.fillStyle="#c3d4df",d.font="18px sans-serif",d.textAlign="center",d.fillText(vt,F,240)};k(151,U*8,8,"×1000"),k(617,ne,240,"km/h"),d.textAlign="center",d.fillStyle="#f2f7fa",d.font="64px sans-serif",d.fillText(String(ne),384,150),d.font="20px sans-serif",d.fillStyle="#9dafbd",d.fillText("km/h",384,182),d.fillStyle="#f2f7fa",d.font="32px sans-serif",d.fillText(rt,384,246),d.fillStyle="#56da9c",d.font="26px sans-serif",(it==="left"||it==="hazard")&&d.fillText("◀",304,48),(it==="right"||it==="hazard")&&d.fillText("▶",464,48)}const N=It(Xt,"liveGauges",.43,.139,st);N.screen.position.z=-.009;let X="";o.updateCockpit=(d,C,L,k)=>{ne=Math.round(Math.abs(d)*3.6),U=Math.round(C*40)/40,rt=L,it=k;const F=`${ne}/${U}/${rt}/${it}`;F!==X&&(X=F,st(N.ctx,768,320),N.texture.needsUpdate=!0)};const G=y("centerScreen");G.position.set(.055,1.04,.438),G.rotation.x=-.1,S(G,"tabletBezel",.33,.206,.028,n,0,0,.015,.009);const K=It(G,"mapDisplay",.305,.177,(d,C,L)=>{d.fillStyle="#172632",d.fillRect(0,0,C,L),d.strokeStyle="#344b58",d.lineWidth=10;for(let k=0;k<7;k++)d.beginPath(),d.moveTo(k*140-90,0),d.lineTo(k*140+20,L),d.stroke();for(let k=0;k<4;k++)d.beginPath(),d.moveTo(0,k*90+15),d.lineTo(C,k*90-50),d.stroke();d.strokeStyle="#52b9ee",d.lineWidth=12,d.beginPath(),d.moveTo(380,310),d.lineTo(360,180),d.lineTo(570,155),d.lineTo(550,40),d.stroke(),d.fillStyle="#e6f5ff",d.beginPath(),d.moveTo(358,181),d.lineTo(339,215),d.lineTo(378,207),d.closePath(),d.fill(),d.fillStyle="#0c151e",d.fillRect(0,0,95,L),d.font="32px sans-serif",d.fillStyle="#a8c9dd",d.fillText("⌂",28,65),d.fillText("♪",29,156),d.fillText("⚙",26,255)});K.screen.position.z=-.001;for(const[d,C]of[["driverSeat",-.37],["passengerSeat",.37]]){const L=y(d);L.position.set(C,.55,-.4),S(L,"cushion",.47,.13,.5,c),S(L,"fabricInsert",.29,.025,.4,h,0,.076,.02,.007),S(L,"seatBack",.46,.5,.13,c,0,.27,-.24).rotation.x=-.14,S(L,"backInsert",.3,.37,.034,h,0,.28,-.158).rotation.x=-.14;for(const k of[-.08,.08])S(L,"headrestPost",.011,.1,.012,e,k,.565,-.27,.002);S(L,"headrest",.25,.15,.1,c,0,.65,-.27)}S(qt,"rearBench",1.36,.15,.45,c,0,.56,-1.09),S(qt,"rearSeatBack",1.35,.42,.12,c,0,.8,-1.34),o.wheelAssemblies=[];const nt=l(1448219,.93),ct=l(3225664,.32,.65);for(const[d,C,L,k]of[["wheelFL",-.79,1.35,!0],["wheelFR",.79,1.35,!0],["wheelRL",-.79,-1.35,!1],["wheelRR",.79,-1.35,!1]]){const F=p(d);F.position.set(C,.315,L);const at=p("rollingAssembly",F);x(at,"tire",new oe(.315,.315,.205,48),nt).rotation.z=Math.PI/2;for(const Q of[-1,1]){const vt=p(`rimFace${Q}`,at);vt.position.x=Q*.108,vt.rotation.y=Q*Math.PI/2,x(vt,"rimBarrel",new oe(.224,.224,.013,48),ct).rotation.x=Math.PI/2,x(vt,"machinedLip",new An(.224,.01,8,48),u,0,0,.01),x(vt,"brakeDisc",new Ri(.171,32),u,0,0,.009);for(let ut=0;ut<5;ut++)for(const $ of[-.11,.11]){const ft=ut*Math.PI*2/5+$,Bt=S(vt,"splitSpoke",.024,.18,.017,e,Math.sin(ft)*.127,Math.cos(ft)*.127,.025,.004);Bt.rotation.z=-ft}x(vt,"hub",new oe(.052,.052,.03,20),u,0,0,.026).rotation.x=Math.PI/2;for(let ut=0;ut<5;ut++){const $=ut*Math.PI*2/5;x(vt,"lug",new ir(.007,6,4),n,Math.cos($)*.038,Math.sin($)*.038,.045)}}o.wheelAssemblies.push({pivot:F,wheel:at,steerable:k,radius:.315})}function R(d,C,L,k,F,at,Q){const vt=new kt({color:F,emissive:F,emissiveIntensity:.02,roughness:.25});return{mesh:S(r,d,at,Q,.018,vt,C,L,k,.005),material:vt}}return o.sedanSignalLamps={left:[R("frontSignalL",.795,.862,2.247,16755249,.073,.024),R("rearSignalL",.754,.813,-2.319,16755249,.13,.022)],right:[R("frontSignalR",-.795,.862,2.247,16755249,.073,.024),R("rearSignalR",-.754,.813,-2.319,16755249,.13,.022)]},o.sedanBrakeLamps=[-1,1].map(d=>R(`brake${d}`,d*.59,.86,-2.32,16721461,.28,.025)),o.reverseLamps=[-1,1].map(d=>R(`reverse${d}`,d*.43,.807,-2.32,15660543,.08,.022)),o}function gu(i){const t=new ie,e=new ie,n=new ie;n.rotation.y=Math.PI,e.add(n),t.add(e);const s=new Xa({color:366185,metalness:.12,roughness:.24,clearcoat:1,clearcoatRoughness:.17}),r=new kt({color:14212835,metalness:.92,roughness:.16}),o=new kt({color:1316893,metalness:.38,roughness:.58});if(i==="motorcycle"){const l=Tx(n,r,!0);return l.bikeCockpitRoot.visible=!1,{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:null,cb400Parts:l}}const a=wx(n,s,r,o,!0);return{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:a,cb400Parts:null}}function ih(i,t){if(i.kind==="motorcycle"&&i.cb400Parts){const e=i.cb400Parts;e.motorcycleRoot.visible=!t,e.bikeCockpitRoot.visible=t;return}if(i.corollaParts){const e=i.corollaParts,n=!t;e.driverSeat&&(e.driverSeat.visible=n),e.frontBumper&&(e.frontBumper.visible=n),e.rearBumper&&(e.rearBumper.visible=n),e.grille&&(e.grille.visible=n),e.headlightL&&(e.headlightL.visible=n),e.headlightR&&(e.headlightR.visible=n),e.taillightL&&(e.taillightL.visible=n),e.taillightR&&(e.taillightR.visible=n),e.roofRailL&&(e.roofRailL.visible=n),e.roofRailR&&(e.roofRailR.visible=n)}}function Ax(i,t,e){var a,l;i.root.position.set(t.x,t.y,t.z),i.root.rotation.y=t.heading,i.leanGroup.rotation.x=t.pitch,i.leanGroup.rotation.z=t.roll;const n=t.blinkerOn&&(t.blinker==="left"||t.blinker==="hazard"),s=t.blinkerOn&&(t.blinker==="right"||t.blinker==="hazard"),r=t.braking||t.handbrake,o=Math.max(.18,Math.min(1,(t.rpm-700)/4200));if(i.corollaParts){const c=i.corollaParts;for(const u of c.wheelAssemblies)u.steerable&&(u.pivot.rotation.y=t.steerAngleRad),u.wheel.rotation.x=t.wheelRotationRad;c.steeringWheel&&(c.steeringWheel.rotation.z=-t.steeringWheelRad);for(const u of c.sedanSignalLamps.left)u.material.emissiveIntensity=n?2.4:.02;for(const u of c.sedanSignalLamps.right)u.material.emissiveIntensity=s?2.4:.02;for(const u of c.sedanBrakeLamps)u.material.emissiveIntensity=r?2.5:.12;for(const u of c.reverseLamps)u.material.emissiveIntensity=t.reversing?2:.02;const h=n&&s?"hazard":n?"left":s?"right":"off";(a=c.updateCockpit)==null||a.call(c,t.speedMs,o,t.gear,h)}if(i.cb400Parts){const c=i.cb400Parts;c.bikeFrontWheelPivot.rotation.y=t.steerAngleRad,c.bikeFrontWheelAssembly.group.rotation.x=t.wheelRotationRad,c.bikeRearWheelAssembly.group.rotation.x=t.wheelRotationRad,c.bikeHandlebar.rotation.y=t.steerAngleRad,c.bikeCockpitBar.rotation.y=t.steerAngleRad;for(const h of c.bikeSignalLamps.left)h.material.emissiveIntensity=n?2.4:.02;for(const h of c.bikeSignalLamps.right)h.material.emissiveIntensity=s?2.4:.02;c.bikeBrakeLamp.material.emissiveIntensity=r?2.5:.12,(l=c.updateBikeCockpit)==null||l.call(c,t.speedMs,o)}}class Rx{constructor(t,e){yt(this,"camera");yt(this,"orbit");yt(this,"mode","chase");yt(this,"mirrorQuality","high");yt(this,"mirrorCameras",{left:new Be(56,1.65,.1,450),center:new Be(44,2.5,.1,450),right:new Be(56,1.65,.1,450)});yt(this,"miniMapCamera",new Al(-45,45,45,-45,1,240));yt(this,"miniMapViewport",{centerX:0,centerZ:0,halfWidth:45,halfHeight:45,halfSize:45});yt(this,"insetSurfaces",new WeakMap);yt(this,"smoothPos",new I(12,5.5,56));yt(this,"smoothLook",new I(12,1.6,48));yt(this,"frameCounter",0);this.camera=new Be(60,e,.05,650),this.camera.layers.enable(1),[this.miniMapCamera,...Object.values(this.mirrorCameras)].forEach(n=>{n.userData.skipCarMirrors=!0,n.layers.set(0)}),this.orbit=new dx(this.camera,t),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.08,this.orbit.maxPolarAngle=Math.PI*.48,this.orbit.minDistance=2.8,this.orbit.maxDistance=65,this.orbit.enabled=!1}setMode(t,e,n){this.mode=t,this.orbit.enabled=t==="orbit",this.camera.userData.carMirrorInterval=t==="cockpit"?0:250,n&&ih(n,t==="cockpit"),document.body.dataset.view=t==="chase"?"follow":t,document.body.classList.toggle("sedan-cockpit",t==="cockpit"&&(n==null?void 0:n.kind)!=="motorcycle"),document.body.classList.toggle("bike-cockpit",t==="cockpit"&&(n==null?void 0:n.kind)==="motorcycle"),t==="orbit"?(this.camera.fov=60,this.camera.updateProjectionMatrix(),this.camera.position.set(e.x+16,e.y+18,e.z+16),this.orbit.target.set(e.x,e.y+1.2,e.z),this.orbit.update()):this.snapToState(e,(n==null?void 0:n.kind)??"sedan")}getMode(){return this.mode}setMirrorQuality(t,e){this.mirrorQuality=t}bindMirrorsToVehicle(t){ih(t,this.mode==="cockpit")}snapToState(t,e="sedan"){const n=this.getViewPose(this.mode,t,e);this.smoothPos.copy(n.position),this.smoothLook.copy(n.lookTarget),this.camera.position.copy(n.position),this.camera.lookAt(n.lookTarget)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}getViewPose(t,e,n){const s=new I(-Math.sin(e.heading),0,-Math.cos(e.heading)),r=new I(Math.cos(e.heading),0,-Math.sin(e.heading)),o=e.heading+e.lookAngleRad,a=new I(-Math.sin(o),0,-Math.cos(o)),l=new I(Math.cos(o),0,-Math.sin(o)),c=new I(e.x,e.y,e.z);if(t==="cockpit"){if(n==="motorcycle"){const m=c.clone().add(new I(0,1.42,0)).add(s.clone().multiplyScalar(-.08)),p=m.clone().add(a.clone().multiplyScalar(30)).add(l.clone().multiplyScalar(.04)).add(new I(0,Math.sin(e.pitch)*28-1.3,0));return{position:m,lookTarget:p}}const _=c.clone().add(new I(0,1.245,0)).add(s.clone().multiplyScalar(-.38)).add(r.clone().multiplyScalar(.36)),v=_.clone().add(a.clone().multiplyScalar(28)).add(l.clone().multiplyScalar(.04)).add(new I(0,Math.sin(e.pitch)*26-1.1,0));return{position:_,lookTarget:v}}if(t==="hood"){const _=c.clone().add(new I(0,1.12,0)).add(s.clone().multiplyScalar(.55)),v=_.clone().add(a.clone().multiplyScalar(22)).add(new I(0,Math.sin(e.pitch)*22-.8,0));return{position:_,lookTarget:v}}const h=n==="motorcycle"?7.2:9,u=n==="motorcycle"?4.6:5.5,f=c.clone().add(new I(0,u,0)).add(a.clone().multiplyScalar(-h)),g=c.clone().add(new I(0,n==="motorcycle"?1.28:1.6,0));return{position:f,lookTarget:g}}update(t,e,n,s,r,o){if(this.mode==="orbit"){const u=e.y+(n==="motorcycle"?1:1.2);this.orbit.target.lerp(new I(e.x,u,e.z),1-Math.pow(.01,t)),this.orbit.update();return}const a=this.mode==="cockpit"?n==="motorcycle"?78:70:60,l=Le.clamp(Math.abs(e.speedMs)/22,0,1);this.camera.fov=Le.damp(this.camera.fov,a+l*14,5,t),this.camera.updateProjectionMatrix();const c=this.getViewPose(this.mode,e,n);if(this.mode==="cockpit"||this.mode==="hood"){this.camera.position.copy(c.position),this.camera.lookAt(c.lookTarget);return}const h=1-Math.pow(.002,t);this.smoothPos.lerp(c.position,h),this.camera.position.copy(this.smoothPos),this.camera.lookAt(c.lookTarget)}renderInset(t,e,n,s){const r=e.clientWidth,o=e.clientHeight;if(r<2||o<2)return;let a=this.insetSurfaces.get(e);if(!a){const u=document.createElement("canvas");u.className="insetCanvas",u.setAttribute("aria-hidden","true"),e.prepend(u);const f=u.getContext("2d",{alpha:!1});a={canvas:u,ctx:f},this.insetSurfaces.set(e,a)}const l=t.getPixelRatio(),c=Math.min(Math.floor(r*l),t.domElement.width),h=Math.min(Math.floor(o*l),t.domElement.height);(a.canvas.width!==c||a.canvas.height!==h)&&(a.canvas.width=c,a.canvas.height=h),t.setScissorTest(!0),t.setViewport(0,0,c/l,h/l),t.setScissor(0,0,c/l,h/l),t.render(n,s),a.ctx.drawImage(t.domElement,0,t.domElement.height-h,c,h,0,0,c,h),t.setScissorTest(!1)}renderPiPMirrors(t,e,n,s,r,o,a){if(a||this.mirrorQuality==="off"||this.mode==="orbit"||(this.frameCounter++,this.mirrorQuality==="low"&&this.frameCounter%2!==0))return;const l=new I(-Math.sin(n.heading),0,-Math.cos(n.heading)),c=new I(Math.cos(n.heading),0,-Math.sin(n.heading)),h=new I(n.x,n.y,n.z),u=(f,g,_)=>{if(!f)return;const v=f.getBoundingClientRect();if(v.width<2||v.height<2)return;g.aspect=v.width/v.height,g.updateProjectionMatrix(),_==="center"&&(g.projectionMatrix.elements[0]*=-1,g.projectionMatrixInverse.copy(g.projectionMatrix).invert());const m=_==="left"?-1:_==="right"?1:0,p=_==="center"?0:.88*m,y=_==="center"?0:8.5*m,M=h.clone().add(new I(0,_==="center"?1.93:1.78,0)).add(l.clone().multiplyScalar(_==="center"?.24:.06)).add(c.clone().multiplyScalar(p)),x=M.clone().add(l.clone().multiplyScalar(-16)).add(c.clone().multiplyScalar(y)).add(new I(0,.12,0));g.position.copy(M),g.lookAt(x),this.renderInset(t,f,e,g)};u(s,this.mirrorCameras.left,"left"),u(r,this.mirrorCameras.center,"center"),u(o,this.mirrorCameras.right,"right")}renderPiPMiniMap(t,e,n,s,r,o,a,l,c){if(!n)return;const h=n.getBoundingClientRect();if(h.width<2||h.height<2)return;const u=h.width/h.height,f=r.width*.5,g=r.height*.5,_=o?Math.max(r.width,r.height)*.56:Math.max(24,Math.max(r.width,r.height)*.28),v=o?_/Math.max(1,a):_,m=u>=1?v*u:v,p=u>=1?v:v/u,y=o?l:Le.clamp(s.x,-f,f),M=o?c:Le.clamp(s.z,-g,g);this.miniMapViewport={centerX:y,centerZ:M,halfWidth:m,halfHeight:p,halfSize:v},this.miniMapCamera.left=-m,this.miniMapCamera.right=m,this.miniMapCamera.top=p,this.miniMapCamera.bottom=-p,this.miniMapCamera.position.set(y,110,M),this.miniMapCamera.up.set(0,0,-1),this.miniMapCamera.lookAt(y,0,M),this.miniMapCamera.updateProjectionMatrix(),this.renderInset(t,n,e,this.miniMapCamera)}}const Qr=[{id:"kyoshujo-3d",nameEn:"Sakuragaoka 3D Driving School (Full 3D Kyōshūjo)",nameJa:"桜ヶ丘自動車教習所 (3D立体コース)",mapWidth:180,startX:12,startZ:48.1,startHeading:Math.PI/2,accentColor:"#059669"},{id:"tokyo-fuchu",nameEn:"Fuchu Driver's License Test Center, Tokyo",nameJa:"東京府中運転免許試験場",mapWidth:420,startX:-54,startZ:88,startHeading:0,accentColor:"#2563eb"},{id:"tokyo-samezu",nameEn:"Samezu Driver's License Test Center, Tokyo",nameJa:"東京都鮫洲運転免許試験場",mapWidth:340,startX:-42,startZ:74,startHeading:Math.PI/2,accentColor:"#0891b2"},{id:"kanagawa-futamatagawa-car",nameEn:"Kanagawa License Center (Futamatagawa · Car)",nameJa:"神奈川県運転免許センター（二俣川・四輪）",mapWidth:460,startX:-67.9,startZ:112,startHeading:Math.PI/2,accentColor:"#059669"},{id:"osaka-kadoma",nameEn:"Kadoma Driver's License Test Center, Osaka",nameJa:"大阪門真運転免許試験場",mapWidth:400,startX:-50,startZ:82,startHeading:0,accentColor:"#7c3aed"},{id:"aichi-hirabari",nameEn:"Hirabari Driver's License Test Center, Nagoya",nameJa:"愛知県平針運転免許試験場",mapWidth:380,startX:-48,startZ:76,startHeading:Math.PI/2,accentColor:"#d97706"},{id:"saitama-konosu",nameEn:"Saitama Prefectural Driver's License Center (Konosu)",nameJa:"埼玉県警察運転免許センター（鴻巣）",mapWidth:410,startX:-55,startZ:84,startHeading:0,accentColor:"#0d9488"},{id:"chiba-makuhari-car",nameEn:"Chiba Makuhari License Center (Car)",nameJa:"千葉幕張免許センター（四輪）",mapWidth:390,startX:-46,startZ:80,startHeading:Math.PI/2,accentColor:"#db2777"}];class Cx{constructor(t){yt(this,"group",new ie);yt(this,"mesh",null);yt(this,"texture",null);yt(this,"activeSource",null);yt(this,"currentSize",{width:180,height:120});this.group.visible=!1,t.add(this.group)}getActiveSource(){return this.activeSource}async loadFromDataUrl(t,e){const n=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=()=>r(new Error("Failed to decode map image")),o.src=t});this.applyCanvasOrImage(n,n.width,n.height,e)}loadProceduralTestCenter(t){const s=document.createElement("canvas");s.width=2048,s.height=1360;const r=s.getContext("2d");r.fillStyle="#4e753e",r.fillRect(0,0,2048,1360);for(let a=0;a<6e3;a++)r.fillStyle=a%2===0?"rgba(65,98,48,0.28)":"rgba(110,148,80,0.22)",r.fillRect(Math.random()*2048,Math.random()*1360,4,4);const o=(a,l=92)=>{r.save(),r.lineCap="round",r.lineJoin="round",r.strokeStyle="#d1d5db",r.lineWidth=l+10,a(),r.stroke(),r.strokeStyle="#363c44",r.lineWidth=l,a(),r.stroke(),r.strokeStyle="#f8fafc",r.lineWidth=3,r.setLineDash([24,24]),a(),r.stroke(),r.restore()};o(()=>{r.beginPath(),r.roundRect(140,120,1768,1120,160)},106),o(()=>{r.beginPath(),r.moveTo(2048*.35,120),r.lineTo(2048*.35,1240),r.moveTo(2048*.65,120),r.lineTo(2048*.65,1240),r.moveTo(140,1360*.45),r.lineTo(1908,1360*.45),r.moveTo(140,1360*.72),r.lineTo(2048*.65,1360*.72)},88),o(()=>{r.beginPath(),r.moveTo(2048*.35,1360*.25),r.bezierCurveTo(2048*.5,1360*.16,2048*.5,1360*.38,2048*.65,1360*.28)},52),o(()=>{r.beginPath(),r.moveTo(2048*.65,1360*.58),r.lineTo(2048*.78,1360*.58),r.lineTo(2048*.78,1360*.76),r.lineTo(1908,1360*.76)},54),r.fillStyle="rgba(255,255,255,0.85)",r.font='bold 44px "Noto Sans JP", sans-serif',r.fillText(t.nameJa,220,210),r.fillStyle=t.accentColor,r.font="bold 30px sans-serif",r.fillText(t.nameEn,220,255),this.applyCanvasOrImage(s,2048,1360,t.mapWidth)}applyCanvasOrImage(t,e,n,s){this.disposeCurrent(),this.activeSource=t;const r=new ze(t);r.colorSpace=ve,r.anisotropy=8,r.needsUpdate=!0,this.texture=r;const o=n/Math.max(1,e),a=Math.max(10,s),l=a*o;this.currentSize={width:a,height:l};const c=new ke(a,l),h=new kt({map:r,roughness:.92,metalness:0}),u=new wt(c,h);u.rotation.x=-Math.PI/2,u.position.y=.005,u.receiveShadow=!0,this.mesh=u,this.group.add(u)}setWidth(t){var o;if(!this.mesh||!((o=this.texture)!=null&&o.image))return;const e=this.texture.image,n=e.height/Math.max(1,e.width),s=Math.max(10,t),r=s*n;this.currentSize={width:s,height:r},this.mesh.geometry.dispose(),this.mesh.geometry=new ke(s,r)}setVisible(t){this.group.visible=t}disposeCurrent(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.texture&&(this.texture.dispose(),this.texture=null)}}const sh="jp_kyoshujo_custom_route_v1";class Px{constructor(t){yt(this,"group",new ie);yt(this,"ribbonGroup",new ie);yt(this,"stampGroup",new ie);yt(this,"activeRing");yt(this,"data",{waypoints:[],stamps:[]});yt(this,"memoryMode","guided");yt(this,"currentWpIndex",0);yt(this,"wrongTurnCount",0);yt(this,"bestDistToCurrentWp",1/0);yt(this,"offRouteAlert",!1);yt(this,"completed",!1);yt(this,"autoStopTimer",0);yt(this,"stoppedAtStampIds",new Set);yt(this,"trafficLightLamps",[]);yt(this,"onRouteCompleted");this.group.add(this.ribbonGroup,this.stampGroup);const e=new Yn(1.4,2,28),n=new We({color:3462041,side:Ae,transparent:!0,opacity:.85});this.activeRing=new wt(e,n),this.activeRing.rotation.x=-Math.PI/2,this.activeRing.position.y=.06,this.activeRing.visible=!1,this.group.add(this.activeRing),t.add(this.group),this.loadSavedRoute()}getData(){return this.data}hasRoute(){return this.data.waypoints.length>=2}getMemoryMode(){return this.memoryMode}setMemoryMode(t){this.memoryMode=t,this.ribbonGroup.visible=t!=="blind",this.activeRing.visible=this.hasRoute()&&(t!=="blind"||this.offRouteAlert)}setRouteData(t,e=!0){if(this.data={waypoints:t.waypoints.map(n=>({...n})),stamps:t.stamps.map(n=>({...n}))},this.recomputeTurnDirections(),this.rebuild3DVisuals(),this.resetProgress(),e)try{window.localStorage.setItem(sh,JSON.stringify(this.data))}catch{}}clearRoute(){this.setRouteData({waypoints:[],stamps:[]},!0)}loadSavedRoute(){try{const t=window.localStorage.getItem(sh);if(!t)return;const e=JSON.parse(t);Array.isArray(e==null?void 0:e.waypoints)&&Array.isArray(e==null?void 0:e.stamps)&&this.setRouteData(e,!1)}catch{}}resetProgress(){this.currentWpIndex=this.data.waypoints.length>1?1:0,this.wrongTurnCount=0,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1,this.completed=!1,this.autoStopTimer=0,this.stoppedAtStampIds.clear(),this.setMemoryMode(this.memoryMode)}getStartPose(){if(this.data.waypoints.length<2)return null;const t=this.data.waypoints[0],e=this.data.waypoints[1],n=Math.atan2(-(e.x-t.x),-(e.z-t.z));return{x:t.x,z:t.z,heading:n}}recomputeTurnDirections(){const t=this.data.waypoints;for(let e=0;e<t.length;e++){if(e===0){t[e].turn="start";continue}if(e===t.length-1){t[e].turn="goal";continue}const n=t[e-1],s=t[e],r=t[e+1],o=Math.atan2(-(s.x-n.x),-(s.z-n.z)),a=Math.atan2(-(r.x-s.x),-(r.z-s.z)),c=co(a-o)*180/Math.PI;Math.abs(c)>135?t[e].turn="uturn":c>28?t[e].turn="left":c<-28?t[e].turn="right":t[e].turn="straight"}}autoExtractRouteFromImage(t,e,n,s){const o=t.height/Math.max(1,t.width),a=Math.max(60,Math.round(180*o)),l=e*o,c=document.createElement("canvas");c.width=180,c.height=a;const h=c.getContext("2d");h.drawImage(t,0,0,180,a);const u=h.getImageData(0,0,180,a).data,f=[];for(let x=2;x<a-2;x+=2)for(let S=2;S<178;S+=2){const E=(x*180+S)*4,w=u[E],P=u[E+1],b=u[E+2];if(u[E+3]<128)continue;let D=!1;if(n==="red"?D=w>155&&w-P>55&&w-b>55:n==="blue"?D=b>150&&b-w>45&&b-P>20:n==="green"?D=P>140&&P-w>35&&P-b>25:n==="orange"&&(D=w>180&&P>95&&P<185&&b<85),D){const B=(S/180-.5)*e,H=(x/a-.5)*l;f.push({x:B,z:H})}}if(f.length<4)return[];const g=Math.max(4,e/45),_=new Map;for(const x of f){const S=Math.round(x.x/g),E=Math.round(x.z/g),w=`${S},${E}`,P=_.get(w)??{sumX:0,sumZ:0,count:0};P.sumX+=x.x,P.sumZ+=x.z,P.count++,_.set(w,P)}const v=Array.from(_.values()).map(x=>({x:x.sumX/x.count,z:x.sumZ/x.count,used:!1}));if(v.length<2)return[];let m=0,p=1/0;for(let x=0;x<v.length;x++){const S=s?Math.hypot(v[x].x-s.x,v[x].z-s.z):-v[x].z+v[x].x*.3;S<p&&(p=S,m=x)}const y=[];v[m].used=!0,y.push({x:v[m].x,z:v[m].z,turn:"start"});const M=g*4.5;for(;y.length<45;){const x=y[y.length-1];let S=-1,E=M;for(let w=0;w<v.length;w++){if(v[w].used)continue;const P=Math.hypot(v[w].x-x.x,v[w].z-x.z);P<E&&(E=P,S=w)}if(S===-1)break;v[S].used=!0,E>=g*.85&&y.push({x:v[S].x,z:v[S].z,turn:"straight"})}return y}update(t,e,n,s,r){var x;const o=n.getLightForAxis("NS");for(const S of this.trafficLightLamps)S.green.emissiveIntensity=o==="green"?2.2:.15,S.yellow.emissiveIntensity=o==="yellow"?2.2:.15,S.red.emissiveIntensity=o==="red"?2.2:.15;if(!this.hasRoute())return this.activeRing.visible=!1,{bannerText:null,autoDriveInput:null};const a=s==="ja",l=this.data.waypoints;if(this.completed){this.activeRing.visible=!1;const S=Math.max(0,Math.round((1-this.wrongTurnCount/Math.max(1,l.length))*100));return{bannerText:a?`カスタムルート完走！ 暗記正確度: ${S}% (コース間違い: ${this.wrongTurnCount}回) — [O]キーで最初から復習`:`Custom Route Complete! Memory Accuracy: ${S}% (Wrong turns: ${this.wrongTurnCount}) — Press [O] to practice again`,autoDriveInput:null}}const c=l[this.currentWpIndex];if(!c)return this.completed=!0,{bannerText:null,autoDriveInput:null};const h=Math.hypot(c.x-e.x,c.z-e.z);h<this.bestDistToCurrentWp&&(this.bestDistToCurrentWp=h),h-this.bestDistToCurrentWp>16&&!this.offRouteAlert?(this.offRouteAlert=!0,this.wrongTurnCount++):h<this.bestDistToCurrentWp+4&&(this.offRouteAlert=!1);const u=this.memoryMode!=="blind"||this.offRouteAlert;if(this.activeRing.visible=u,u){this.activeRing.position.set(c.x,.07,c.z);const S=1+Math.sin(r*5)*.12;this.activeRing.scale.set(S,S,1)}const f=this.currentWpIndex===l.length-1?4.2:5.5;h<=f&&(this.currentWpIndex>=l.length-1?(Math.abs(e.speedMs)<.4||this.memoryMode==="autodrive")&&(this.completed=!0,(x=this.onRouteCompleted)==null||x.call(this,this.wrongTurnCount,l.length)):(this.currentWpIndex++,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1));const g={start:"出発",straight:"直進 (Straight)",left:"左折 ◀ (Turn Left)",right:"右折 ▶ (Turn Right)",uturn:"Uターン (U-Turn)",goal:"発着点ゴール・停止 (Goal Stop)"},_={start:"Start",straight:"Continue Straight (直進)",left:"Turn Left ◀ (左折)",right:"Turn Right ▶ (右折)",uturn:"Make U-Turn (Uターン)",goal:"Goal — Come to Full Stop (ゴール停止)"},v=l[this.currentWpIndex]??c,m=Math.round(Math.hypot(v.x-e.x,v.z-e.z)),p=a?g[v.turn]:_[v.turn];let y;this.offRouteAlert?y=a?`⚠️ コース間違い！ ポイント #${this.currentWpIndex} (${m}m先) へ戻ってください`:`⚠️ Wrong Turn! Head back toward Checkpoint #${this.currentWpIndex} (${m}m)`:this.memoryMode==="blind"?y=a?`🧠 暗記テスト中 [#${this.currentWpIndex}/${l.length-1}] ガイド非表示 — 記憶で走行 (ミス: ${this.wrongTurnCount}回)`:`🧠 Memory Test [#${this.currentWpIndex}/${l.length-1}] Guide hidden — drive from memory (Mistakes: ${this.wrongTurnCount})`:y=`${this.memoryMode==="autodrive"?a?"🤖 自動お手本走行":"🤖 Auto-Drive Demo":a?"📍 ルートガイド":"📍 Route Guide"} [#${this.currentWpIndex}/${l.length-1} · ${m}m]: ${p}`;let M=null;return this.memoryMode==="autodrive"&&!this.completed&&(M=this.computeAutoDriveInput(t,e,v)),{bannerText:y,autoDriveInput:M}}computeAutoDriveInput(t,e,n){for(let x=0;x<this.data.stamps.length;x++){const S=this.data.stamps[x];if(S.kind==="stopSign"&&!this.stoppedAtStampIds.has(x)&&Math.hypot(S.x-e.x,S.z-e.z)<4.5){if(this.autoStopTimer+=t,this.autoStopTimer<1.4)return{throttle:0,brake:.9,steerLeft:0,steerRight:0,analogSteerTarget:0,clutch:0,lookLeft:this.autoStopTimer<.7,lookRight:this.autoStopTimer>=.7};this.stoppedAtStampIds.add(x),this.autoStopTimer=0}}const s=n.x-e.x,r=n.z-e.z,o=Math.hypot(s,r)||1,a=as(e.heading),l=s/o,c=r/o,h=a.z*l-a.x*c,u=a.x*l+a.z*c,f=Math.atan2(h,u),g=2*Math.sin(f)/Math.max(2.5,Math.min(8,o)),_=Math.atan(2.6*g),v=Math.max(-1,Math.min(1,_/.75));o<18&&n.turn==="left"?e.blinker="left":o<18&&n.turn==="right"?e.blinker="right":Math.abs(f)<.12&&(e.blinker="off");const m=n.turn==="left"||n.turn==="right"||n.turn==="goal",p=n.turn==="goal"&&o<6?0:m&&o<12?2.8:Math.abs(f)>.35?2.6:5.5,y=e.speedMs<p?.48:0,M=e.speedMs>p+.8||p===0?.65:0;return{throttle:y,brake:M,steerLeft:0,steerRight:0,analogSteerTarget:v,clutch:0,lookLeft:!1,lookRight:!1}}rebuild3DVisuals(){for(;this.ribbonGroup.children.length>0;)this.ribbonGroup.remove(this.ribbonGroup.children[0]);for(;this.stampGroup.children.length>0;)this.stampGroup.remove(this.stampGroup.children[0]);this.trafficLightLamps=[];const t=this.data.waypoints;if(t.length>=2){const e=t.map(o=>new I(o.x,.08,o.z)),n=new ao(e,!1,"catmullrom",.15),s=new sr(n,Math.max(24,t.length*10),.22,6,!1),r=new We({color:3462041,transparent:!0,opacity:.72});this.ribbonGroup.add(new wt(s,r)),t.forEach((o,a)=>{const l=this.createCheckpointSign(a===0?"S":a===t.length-1?"G":String(a),o.turn);l.position.set(o.x,0,o.z),this.ribbonGroup.add(l)})}for(const e of this.data.stamps)e.kind==="stopSign"?this.stampGroup.add(this.create3DStopSign(e.x,e.z,e.heading)):e.kind==="trafficLight"?this.stampGroup.add(this.create3DTrafficLight(e.x,e.z,e.heading)):e.kind==="pole"&&this.stampGroup.add(this.create3DPole(e.x,e.z))}createCheckpointSign(t,e){const n=new ie,s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");r.beginPath(),r.arc(64,64,56,0,Math.PI*2),r.fillStyle=e==="goal"?"#d62828":e==="left"||e==="right"?"#005bac":"#059669",r.fill(),r.lineWidth=8,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font="bold 54px sans-serif",r.fillText(t,64,66);const o=new En(s);o.colorSpace=ve;const a=new Hh(new Ml({map:o,transparent:!0}));return a.scale.set(1.8,1.8,1),a.position.y=2.1,n.add(a),n}create3DStopSign(t,e,n){const s=new ie;s.position.set(t,0,e),s.rotation.y=n;const r=new wt(new ke(3.4,.45),new We({color:16777215,side:Ae}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,0),s.add(r);const o=new wt(new oe(.04,.04,2.5,8),new kt({color:9741240}));o.position.set(-1.9,1.25,0),s.add(o);const a=document.createElement("canvas");a.width=256,a.height=256;const l=a.getContext("2d");l.beginPath(),l.moveTo(20,24),l.lineTo(236,24),l.lineTo(128,228),l.closePath(),l.fillStyle="#d62828",l.fill(),l.lineWidth=12,l.strokeStyle="#ffffff",l.stroke(),l.fillStyle="#ffffff",l.textAlign="center",l.font='bold 46px "Noto Sans JP", sans-serif',l.fillText("止まれ",128,95),l.font="bold 26px sans-serif",l.fillText("STOP",128,138);const c=new En(a);c.colorSpace=ve;const h=new wt(new ke(1,1),new We({map:c,transparent:!0,side:Ae}));return h.position.set(-1.9,2.3,.05),s.add(h),s}create3DTrafficLight(t,e,n){const s=new ie;s.position.set(t,0,e),s.rotation.y=n;const r=new kt({color:6583435}),o=new wt(new oe(.1,.12,5,10),r);o.position.set(-2.4,2.5,0),s.add(o);const a=new wt(new he(1.5,.5,.35),new kt({color:1976635}));a.position.set(-.6,4.7,0),s.add(a);const l=new kt({color:413243,emissive:1108120,emissiveIntensity:1.5}),c=new kt({color:7877903,emissive:16758531,emissiveIntensity:.2}),h=new kt({color:8330525,emissive:16722474,emissiveIntensity:.2});this.trafficLightLamps.push({green:l,yellow:c,red:h});const u=new oe(.14,.14,.06,12),f=(g,_)=>{const v=new wt(u,g);v.rotation.x=Math.PI/2,v.position.set(-.6+_,4.7,.18),s.add(v)};return f(l,-.44),f(c,0),f(h,.44),s}create3DPole(t,e){const n=new ie;n.position.set(t,0,e);const s=new kt({color:14231078}),r=new kt({color:16317180});for(let o=0;o<5;o++){const a=new wt(new oe(.06,.06,.32,10),o%2===0?s:r);a.position.y=.16+o*.32,n.add(a)}return n}}class Lx{constructor(t){yt(this,"root",new ie);yt(this,"kyoshujoGroup",new ie);yt(this,"sunLight");yt(this,"sunOffset",new I(45,68,35));yt(this,"railGatePivots",[]);yt(this,"railLeftLampMats",[]);yt(this,"railRightLampMats",[]);yt(this,"trafficLamps",[]);yt(this,"waypointBeacon");yt(this,"skyBrandSprites",[]);t.background=new Qt(10473727),t.fog=new vl(10473727,95,240),this.buildCloudsAndSkyBrand(t);const e=new tp(15660799,6057548,.85);t.add(e),this.sunLight=new ip(16775920,1.85),this.sunLight.position.copy(this.sunOffset),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048);const n=38;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=170,this.sunLight.shadow.bias=-5e-4,t.add(this.sunLight),t.add(this.sunLight.target),this.root.add(this.kyoshujoGroup),t.add(this.root),this.buildGroundAndRoads(),this.buildSCurveMesh(),this.buildHillRampMesh(),this.buildRoadMarkings(),this.buildCurbsAndPoles(),this.buildRailroadCrossing(),this.buildTrafficLights(),this.buildRoadSigns(),this.buildObstaclesAndBuildings(),this.buildTreesAndFence(),this.waypointBeacon=this.createWaypointBeacon(),this.waypointBeacon.visible=!1,this.kyoshujoGroup.add(this.waypointBeacon)}setKyoshujoVisible(t){this.kyoshujoGroup.visible=t}updateShadowFocus(t,e){const n=.037109375,s=Math.round(t/n)*n,r=Math.round(e/n)*n;this.sunLight.target.position.set(s,0,r),this.sunLight.position.set(s+this.sunOffset.x,this.sunOffset.y,r+this.sunOffset.z),this.sunLight.target.updateMatrixWorld()}updateDynamic(t,e,n){const s=t.getLightForAxis("NS"),r=t.getLightForAxis("EW");for(const a of this.trafficLamps){const l=a.axis==="NS"?s:r;a.greenMat.emissive.setHex(l==="green"?1108120:202768),a.greenMat.emissiveIntensity=l==="green"?2.2:.2,a.yellowMat.emissive.setHex(l==="yellow"?16758531:1708544),a.yellowMat.emissiveIntensity=l==="yellow"?2.2:.2,a.redMat.emissive.setHex(l==="red"?16722474:1836036),a.redMat.emissiveIntensity=l==="red"?2.2:.2}const o=t.getRailroadState();for(let a=0;a<this.railGatePivots.length;a++)this.railGatePivots[a].rotation.z=a===0?-o.barrierAngle:o.barrierAngle;for(const a of this.railLeftLampMats)a.emissive.setHex(o.flashLeftOn?16718362:2229252),a.emissiveIntensity=o.flashLeftOn?2.8:.2;for(const a of this.railRightLampMats)a.emissive.setHex(o.flashRightOn?16718362:2229252),a.emissiveIntensity=o.flashRightOn?2.8:.2;if(e&&this.kyoshujoGroup.visible){this.waypointBeacon.visible=!0;const a=zn(e.x,e.z).y;this.waypointBeacon.position.set(e.x,a+.05,e.z),this.waypointBeacon.rotation.y=n*1.4;const l=1+Math.sin(n*4)*.08;this.waypointBeacon.scale.set(l,1,l)}else this.waypointBeacon.visible=!1;for(const a of this.skyBrandSprites){const l=a.userData.angle+n*.004,c=a.userData.height+Math.sin(n*.15+l*3)*.8;a.position.set(Math.cos(l)*160,c,Math.sin(l)*160)}}buildCloudsAndSkyBrand(t){const e=new kt({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.9}),n=(y,M,x,S)=>{const E=new ie,w=[[0,0,0,5],[-4,-1,0,3.5],[4,-1,0,3.5],[-2,1.5,0,2.8],[2.5,1.5,0,2.8],[-6,-2,0,2],[6,-2,0,2]];for(const[P,b,T,D]of w){const B=new wt(new ir(D,7,5),e);B.position.set(P,b,T),E.add(B)}E.position.set(y,M,x),E.scale.setScalar(S),t.add(E)};n(-80,48,-60,1.2),n(60,42,-90,1),n(-30,52,-110,.85),n(110,46,-70,1.15),n(10,55,-130,.95),n(-120,44,-80,1.3),n(70,50,-150,1.1);const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.font='900 150px "Arial Rounded MT Bold", "Nunito", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText("GaimenGo",s/2,r/2);const l=s/2-a.measureText("GaimenGo").width/2+a.measureText("Gaimen").width,c=a.getImageData(0,0,s,r).data,h=document.createElement("canvas");h.width=s,h.height=r;const u=h.getContext("2d");let f=27166;const g=()=>(f=f*1664525+1013904223>>>0)/4294967296,_=9;for(let y=0;y<r;y+=_)for(let M=0;M<s;M+=_){const x=Math.min(s-1,M+Math.floor(g()*_)),S=Math.min(r-1,y+Math.floor(g()*_));if(c[(S*s+x)*4+3]<128)continue;const E=11+g()*12,w=u.createRadialGradient(x,S,0,x,S,E);w.addColorStop(0,"rgba(255,255,255,0.95)"),w.addColorStop(.6,"rgba(255,255,255,0.55)"),w.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=w,u.fillRect(x-E,S-E,E*2,E*2)}u.globalCompositeOperation="source-atop";const v=u.createLinearGradient(0,r*.3,0,r*.8);v.addColorStop(0,"rgba(190,210,230,0)"),v.addColorStop(1,"rgba(170,195,220,0.45)"),u.fillStyle=v,u.fillRect(0,0,s,r),u.fillStyle="rgba(52,211,153,0.22)",u.fillRect(l,0,s-l,r),u.globalCompositeOperation="source-over";const m=new En(h);m.colorSpace=ve;const p=new Ml({map:m,transparent:!0,opacity:.82,depthWrite:!1,fog:!1});this.skyBrandSprites=[0,1,2].map(y=>{const M=new Hh(p);return M.scale.set(64,16,1),M.layers.set(1),M.userData.angle=-Math.PI/2+y*(Math.PI*2/3),M.userData.height=40+y*4,M.renderOrder=-1,t.add(M),M})}createGrassTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#5f8449",e.fillRect(0,0,256,256);for(let s=0;s<4e3;s++)e.fillStyle=s%2===0?"rgba(72,108,52,0.35)":"rgba(122,162,88,0.28)",e.fillRect(Math.random()*256,Math.random()*256,2,2);const n=new En(t);return n.wrapS=n.wrapT=Ws,n.repeat.set(36,24),n.colorSpace=ve,n}createAsphaltTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#383e45",e.fillRect(0,0,256,256);for(let s=0;s<5500;s++){const r=45+Math.floor(Math.random()*30);e.fillStyle=`rgb(${r},${r+2},${r+6})`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}const n=new En(t);return n.wrapS=n.wrapT=Ws,n.repeat.set(22,22),n.colorSpace=ve,n}buildGroundAndRoads(){const t=new kt({map:this.createGrassTexture(),roughness:.95,metalness:0}),e=new wt(new ke(si*2+40,wi*2+40),t);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.kyoshujoGroup.add(e);const n=new kt({map:this.createAsphaltTexture(),roughness:.86,metalness:.05}),s=(a,l,c,h,u=.01)=>{const f=new wt(new ke(c,h),n);f.rotation.x=-Math.PI/2,f.position.set(a,u,l),f.receiveShadow=!0,this.kyoshujoGroup.add(f)};s(0,-46,124,ni),s(0,46,124,ni),s(-76,0,ni,64),s(76,0,ni,64);const r=[[-62,-32,Math.PI/2],[62,-32,0],[62,32,-Math.PI/2],[-62,32,Math.PI]];for(const[a,l,c]of r){const h=new Yn(14-Kc,14+Kc,24,1,c,Math.PI/2),u=new wt(h,n);u.rotation.x=-Math.PI/2,u.position.set(a,.01,l),u.receiveShadow=!0,this.kyoshujoGroup.add(u)}s(0,0,ni,92,.012),s(0,0,152,ni,.012);const o=q_*2;s(-48,11.75,o,16.5,.013),s(-41,18,18,o,.013),s(-34,30.25,o,24.5,.013),s(10.75,an,14.5,Ei*2,.013),s(65.25,an,14.5,Ei*2,.013),s(38,24,72.5,ni,.012),s(26,30.6,3.7,6.2,.013),s(48.6,28.85,7.2,2.7,.013),s(0,51,32,3.2,.008)}buildSCurveMesh(){const e=Y_,n=[],s=[],r=[];for(let c=0;c<e.length;c++){const h=e[Math.max(0,c-1)],u=e[Math.min(e.length-1,c+1)],f=u.x-h.x,g=u.z-h.z,_=Math.hypot(f,g)||1,v=g/_,m=-f/_;if(n.push(e[c].x+v*1.8,.014,e[c].z+m*1.8),n.push(e[c].x-v*1.8,.014,e[c].z-m*1.8),s.push(0,c*.25,1,c*.25),c<e.length-1){const p=c*2;r.push(p,p+1,p+2,p+1,p+3,p+2)}}const o=new ge;o.setAttribute("position",new Zt(n,3)),o.setAttribute("uv",new Zt(s,2)),o.setIndex(r),o.computeVertexNormals();const a=new kt({color:3883594,roughness:.85,side:Ae}),l=new wt(o,a);l.receiveShadow=!0,this.kyoshujoGroup.add(l)}buildHillRampMesh(){const e=Hs,n=Za,s=an-Ei,r=an+Ei,o=[],a=[];for(let M=0;M<=64;M++){const x=e+(n-e)*M/64,E=zn(x,an).y+.015;if(o.push(x,0,s),o.push(x,E,s),o.push(x,E,r),o.push(x,0,r),M<64){const w=M*4,P=(M+1)*4;a.push(w+1,w+2,P+1,w+2,P+2,P+1),a.push(w+0,w+1,P+0,w+1,P+1,P+0),a.push(w+2,w+3,P+2,w+3,P+3,P+2)}}const l=new ge;l.setAttribute("position",new Zt(o,3)),l.setIndex(a),l.computeVertexNormals();const c=[],h=[],u=[],f=[];for(let M=0;M<=64;M++){const x=e+(n-e)*M/64,S=zn(x,an).y+.018;if(c.push(x,S,s,x,S,r),u.push(x,0,s,x,S,s,x,0,r,x,S,r),M<64){const E=M*2;h.push(E,E+1,E+2,E+1,E+3,E+2);const w=M*4;f.push(w,w+1,w+4,w+1,w+5,w+4),f.push(w+2,w+6,w+3,w+3,w+6,w+7)}}const g=new ge;g.setAttribute("position",new Zt(c,3)),g.setIndex(h),g.computeVertexNormals();const _=new wt(g,new kt({color:3883594,roughness:.86,side:Ae}));_.receiveShadow=!0,this.kyoshujoGroup.add(_);const v=new ge;v.setAttribute("position",new Zt(u,3)),v.setIndex(f),v.computeVertexNormals();const m=new wt(v,new kt({color:12239562,roughness:.9,side:Ae}));m.receiveShadow=!0,m.castShadow=!0,this.kyoshujoGroup.add(m);const p=zn(27,an).y,y=new wt(new ke(.45,Ei*1.9),new We({color:16777215}));y.rotation.x=-Math.PI/2,y.rotation.y=-Math.atan(zn(27,an).slopeX),y.position.set(27,p+.03,an),this.kyoshujoGroup.add(y)}createStencilPlane(t,e,n,s,r,o,a=0){const l=document.createElement("canvas");l.width=256,l.height=256;const c=l.getContext("2d");c.clearRect(0,0,256,256),c.fillStyle=e,c.textAlign="center",c.textBaseline="middle",c.font='bold 120px "Noto Sans JP", sans-serif',c.fillText(t,128,128);const h=new En(l);h.colorSpace=ve;const u=new wt(new ke(n,s),new We({map:h,transparent:!0,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.rotation.z=a,u.position.set(r,.025,o),u}buildRoadMarkings(){const t=new We({color:16054266}),e=new We({color:15764480}),n=(o,a,l,c,h=t)=>{const u=new wt(new ke(l,c),h);u.rotation.x=-Math.PI/2,u.position.set(o,.02,a),this.kyoshujoGroup.add(u)};for(let o=-58;o<=58;o+=6)Math.abs(o)<12||(n(o,-46,2.8,.14),n(o,46,2.8,.14));for(let o=-28;o<=28;o+=6)Math.abs(o)<10||(n(-76,o,.14,2.8),n(76,o,.14,2.8));for(let o=-42;o<=42;o+=6)Math.abs(o)<18||n(0,o,.14,2.8);n(0,13.5,.16,10,e),n(0,-13.5,.16,10,e);for(let o=-70;o<=70;o+=6)Math.abs(o)<18||o>26&&o<50||n(o,0,2.8,.14);n(13.5,0,10,.16,e),n(-13.5,0,10,.16,e),n(38,0,18,.16,e);for(let o=6;o<=68;o+=6)n(o,24,2.8,.14);for(const o of au){const a=Math.abs(o.dirX)>.5;if(n(o.x,o.z,a?.45:o.halfWidth*1.9,a?o.halfWidth*1.9:.45),o.kind==="stopSign"){const c=Math.atan2(-o.dirX,-o.dirZ);this.kyoshujoGroup.add(this.createStencilPlane("止まれ","#ffffff",2.2,2.2,o.x-o.dirX*2.6,o.z-o.dirZ*2.6,c))}}const s=(o,a,l)=>{for(let c=-3;c<=3;c++)l?n(o,a+c*.9,2.8,.45):n(o+c*.9,a,.45,2.8)};s(0,-6.2,!1),s(0,6.2,!1),s(-6.2,0,!0),s(6.2,0,!0);const r=new wt(new Yn(.9,1.15,4),t);r.rotation.x=-Math.PI/2,r.position.set(0,.022,0),this.kyoshujoGroup.add(r),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,-40,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,20,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("1","#f0a500",1.8,1.8,12,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("2","#f0a500",1.8,1.8,0,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("3","#f0a500",1.8,1.8,-12,48.1,Math.PI/2))}buildCurbsAndPoles(){const t=new kt({color:13357786,roughness:.8}),e=new kt({color:15857145,roughness:.7});for(const r of ru){const o=r.points,a=r.id.startsWith("hill-");for(let l=0;l<o.length-1;l++){const c=o[l],h=o[l+1],u=h.x-c.x,f=h.z-c.z,g=Math.hypot(u,f);if(!(g<.01))if(a)for(let v=0;v<24;v++){const m=v/24,p=(v+1)/24,y=c.x+u*m,M=c.x+u*p,x=c.z+f*m,S=c.z+f*p,E=zn(y,x).y,w=zn(M,S).y,P=Math.hypot(M-y,w-E),b=new wt(new he(P+.04,r.height,.18),v%2===0?t:e);b.position.set((y+M)*.5,(E+w)*.5+r.height*.5,(x+S)*.5),b.rotation.z=Math.atan2(w-E,M-y),b.castShadow=!0,b.receiveShadow=!0,this.kyoshujoGroup.add(b)}else{const _=new wt(new he(.18,r.height,g+.14),l%2===0?t:e);_.position.set((c.x+h.x)*.5,r.height*.5,(c.z+h.z)*.5),_.rotation.y=Math.atan2(u,f),_.castShadow=!0,_.receiveShadow=!0,this.kyoshujoGroup.add(_)}}}const n=new kt({color:14231078,roughness:.4}),s=new kt({color:16317180,roughness:.4});for(const r of ou){const o=new ie;o.position.set(r.x,0,r.z);const a=5,l=r.height/a;for(let c=0;c<a;c++){const h=new wt(new oe(r.radius*.65,r.radius*.65,l,10),c%2===0?n:s);h.position.y=l*(c+.5),h.castShadow=!0,o.add(h)}this.kyoshujoGroup.add(o)}}buildRailroadCrossing(){const e=new kt({color:8160657,metalness:.75,roughness:.3}),n=new kt({color:4930350,roughness:.9}),s=new kt({color:16103424,roughness:.4}),r=new kt({color:1711393,roughness:.6});for(const a of[-.7,.7]){const l=new wt(new he(.12,.06,30),e);l.position.set(38+a,.03,0),l.receiveShadow=!0,this.kyoshujoGroup.add(l)}for(let a=-14;a<=14;a+=.9){if(Math.abs(a)<3.6)continue;const l=new wt(new he(2.3,.05,.25),n);l.position.set(38,.025,a),this.kyoshujoGroup.add(l)}const o=[[38-3.6,-3.9],[38+3.6,3.9]];for(let a=0;a<o.length;a++){const[l,c]=o[a],h=new ie;h.position.set(l,0,c);const u=new wt(new oe(.08,.09,3.4,10),s);u.position.y=1.7,u.castShadow=!0,h.add(u);for(const E of[Math.PI/4,-Math.PI/4]){const w=new wt(new he(1.1,.16,.05),s);w.position.y=2.95,w.rotation.y=Math.PI/2,w.rotation.x=E,h.add(w)}const f=new kt({color:6293512,emissive:2229252}),g=new kt({color:6293512,emissive:2229252});this.railLeftLampMats.push(f),this.railRightLampMats.push(g);const _=new wt(new oe(.11,.11,.14,12),f);_.rotation.z=Math.PI/2,_.position.set(0,2.25,-.22),h.add(_);const v=new wt(new oe(.11,.11,.14,12),g);v.rotation.z=Math.PI/2,v.position.set(0,2.25,.22),h.add(v);const m=new wt(new he(.32,.85,.32),r);m.position.set(0,.65,a===0?.35:-.35),h.add(m),new ie().position.set(0,.95,a===0?.35:-.35);const y=new ie;y.rotation.y=a===0?-Math.PI/2:Math.PI/2;const M=new wt(new he(3.6,.08,.06),s);M.position.set(1.8,0,0),M.castShadow=!0;const x=new wt(new he(.08,3.8,.06),s);x.position.set(0,1.9,0),x.castShadow=!0;for(let E=0;E<6;E++)if(E%2===0){const w=new wt(new he(.09,.32,.07),r);w.position.set(0,.45+E*.6,0),x.add(w)}const S=new ie;S.position.set(0,.95,a===0?.35:-.35),S.rotation.y=Math.PI/2,S.add(x),h.add(S),this.railGatePivots.push(S),this.kyoshujoGroup.add(h)}}buildTrafficLights(){const t=new kt({color:6583435,metalness:.6,roughness:.35}),e=new kt({color:1976635,roughness:.6}),n=[{axis:"NS",x:4.5,z:-5,rotY:0},{axis:"NS",x:-4.5,z:5,rotY:Math.PI},{axis:"EW",x:5,z:4.5,rotY:-Math.PI/2},{axis:"EW",x:-5,z:-4.5,rotY:Math.PI/2}];for(const s of n){const r=new ie;r.position.set(s.x,0,s.z),r.rotation.y=s.rotY;const o=new wt(new oe(.11,.13,5.4,10),t);o.position.y=2.7,o.castShadow=!0,r.add(o);const a=new wt(new oe(.07,.09,4.2,8),t);a.rotation.z=Math.PI/2,a.position.set(-2,5.1,0),r.add(a);const l=new wt(new he(1.55,.52,.36),e);l.position.set(-2.5,5.1,0),r.add(l);const c=new kt({color:413243,emissive:202768}),h=new kt({color:7877903,emissive:1708544}),u=new kt({color:8330525,emissive:1836036}),f=new oe(.15,.15,.06,14),g=(_,v)=>{const m=new wt(f,_);m.rotation.x=Math.PI/2,m.position.set(-2.5+v,5.1,.19),r.add(m)};g(c,-.46),g(h,0),g(u,.46),this.trafficLamps.push({axis:s.axis,greenMat:c,yellowMat:h,redMat:u}),this.kyoshujoGroup.add(r)}}createSignTexture(t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.clearRect(0,0,256,256),t==="tomare"?(s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=14,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(32,34),s.lineTo(224,34),s.lineTo(128,214),s.closePath(),s.fillStyle="#d62828",s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.font='bold 44px "Noto Sans JP", sans-serif',s.fillText("止まれ",128,92),s.font="bold 24px sans-serif",s.fillText("STOP",128,134)):t==="40"?(s.beginPath(),s.arc(128,128,114,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.textBaseline="middle",s.font="bold 104px sans-serif",s.fillText("40",128,132)):t==="rail"?(s.save(),s.translate(128,128),s.rotate(Math.PI/4),s.fillStyle="#f5b800",s.fillRect(-84,-84,168,168),s.lineWidth=10,s.strokeStyle="#111827",s.strokeRect(-76,-76,152,152),s.restore(),s.fillStyle="#111827",s.textAlign="center",s.font='bold 34px "Noto Sans JP", sans-serif',s.fillText("踏切",128,138)):(s.fillStyle="#005bac",s.fillRect(12,56,232,144),s.lineWidth=6,s.strokeStyle="#ffffff",s.strokeRect(20,64,216,128),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font='bold 38px "Noto Sans JP", sans-serif',s.fillText(e??"",128,128));const r=new En(n);return r.colorSpace=ve,r}buildRoadSigns(){const t=new kt({color:9741240,metalness:.6,roughness:.4}),e=(n,s,r,o,a,l=1,c=1)=>{const h=new ie;h.position.set(s,0,r),h.rotation.y=o;const u=new wt(new oe(.035,.035,2.6,8),t);u.position.y=1.3,u.castShadow=!0,h.add(u);const f=this.createSignTexture(n,a),g=new wt(new ke(l,c),new We({map:f,transparent:!0,side:Ae}));g.position.set(0,2.35,.045),h.add(g),this.kyoshujoGroup.add(h)};e("tomare",-67.5,4.1,Math.PI/2),e("tomare",-4.1,-38.5,0),e("tomare",-24.7,-41.5,0),e("tomare",-36.5,41.5,Math.PI),e("40",-55,-50.2,-Math.PI/2),e("40",30,-50.2,-Math.PI/2),e("rail",26,-4.2,-Math.PI/2),e("rail",50,4.2,Math.PI/2),e("guide",-42.5,-4.5,0,"S字コース",1.7,1.05),e("guide",-51,4.5,Math.PI,"クランク",1.7,1.05),e("guide",16.5,-27.5,-Math.PI/2,"坂道発進",1.7,1.05),e("guide",22,28.5,-Math.PI/2,"方向変換",1.7,1.05),e("guide",43,28.5,-Math.PI/2,"縦列駐車",1.7,1.05)}buildObstaclesAndBuildings(){const t=Kr[0];if(t){const a=new ie;a.position.set(t.x,0,t.z);const l=new wt(new he(t.halfW*2,1.55,t.halfL*2),new kt({color:14870768,roughness:.45}));l.position.y=.92,l.castShadow=!0,a.add(l);const c=new wt(new he(t.halfW*1.6,.52,t.halfL*1.92),new kt({color:1976635,roughness:.2,metalness:.4}));c.position.y=1.35,a.add(c);const h=new kt({color:16347926,roughness:.5});for(const u of[-2.8,2.8]){const f=new wt(new rs(.18,.55,10),h);f.position.set(u,.275,.2),f.castShadow=!0,a.add(f)}this.kyoshujoGroup.add(a)}const e=Kr[1];if(e){const a=new ie;a.position.set(e.x,0,e.z);const l=new wt(new he(e.halfW*2,e.height,e.halfL*2),new kt({color:15855076,roughness:.8}));l.position.y=e.height/2,l.castShadow=!0,l.receiveShadow=!0,a.add(l);const c=new wt(new he(e.halfW*2+.6,.5,e.halfL*2+.6),new kt({color:3359061,roughness:.7}));c.position.y=e.height+.25,a.add(c);const h=new kt({color:1981023,metalness:.5,roughness:.15});for(const v of[2.2,5]){const m=new wt(new he(e.halfW*1.8,1.3,.1),h);m.position.set(0,v,-e.halfL-.02),a.add(m)}const u=document.createElement("canvas");u.width=512,u.height=128;const f=u.getContext("2d");f.fillStyle="#005bac",f.fillRect(0,0,512,128),f.strokeStyle="#ffffff",f.lineWidth=8,f.strokeRect(8,8,496,112),f.fillStyle="#ffffff",f.textAlign="center",f.textBaseline="middle",f.font='bold 46px "Noto Sans JP", sans-serif',f.fillText("桜ヶ丘自動車教習所",256,66);const g=new En(u);g.colorSpace=ve;const _=new wt(new he(14,2.4,.4),new We({map:g}));_.position.set(0,e.height+1.8,-e.halfL+1),a.add(_),this.kyoshujoGroup.add(a)}const n=new ie;n.position.set(-14,0,38);const s=new wt(new oe(1.1,1.4,6.5,8),new kt({color:14870768,roughness:.7}));s.position.y=3.25,s.castShadow=!0,n.add(s);const r=new wt(new oe(2.3,1.9,2.2,8),new kt({color:1981023,metalness:.6,roughness:.15}));r.position.y=7.4,r.castShadow=!0,n.add(r);const o=new wt(new rs(2.6,1,8),new kt({color:3359061,roughness:.6}));o.position.y=9,n.add(o),this.kyoshujoGroup.add(n)}buildTreesAndFence(){const t=new kt({color:6045747,roughness:.9}),e=new kt({color:4157243,roughness:.85}),n=new kt({color:16037570,roughness:.8}),s=[];for(let h=-84;h<=84;h+=14)s.push([h,-55.5,Math.abs(h)%28===0]),Math.abs(h)>22&&s.push([h,55.5,!1]);for(let h=-42;h<=42;h+=14)s.push([-85.5,h,h===0]),s.push([85.5,h,h===-14]);s.push([-16,-24,!0],[14,14,!1],[62,12,!0]);for(const[h,u,f]of s){const g=new ie;g.position.set(h,0,u);const _=new wt(new oe(.18,.25,2.2,7),t);_.position.y=1.1,_.castShadow=!0,g.add(_);const v=new wt(new El(1.75,1),f?n:e);v.position.y=3.2,v.castShadow=!0,g.add(v),this.kyoshujoGroup.add(g)}const r=new kt({color:14410474,roughness:.55}),o=new wt(new he(178,.9,.14),r);o.position.set(0,.45,-59);const a=new wt(new he(178,.9,.14),r);a.position.set(0,.45,59);const l=new wt(new he(.14,.9,118),r);l.position.set(-89,.45,0);const c=new wt(new he(.14,.9,118),r);c.position.set(89,.45,0),this.kyoshujoGroup.add(o,a,l,c)}createWaypointBeacon(){const t=new ie,e=new wt(new Yn(1.6,2.1,28),new We({color:958318,side:Ae,transparent:!0,opacity:.75}));e.rotation.x=-Math.PI/2,t.add(e);const n=new wt(new rs(.55,1.3,4),new kt({color:1096065,emissive:366185,emissiveIntensity:.7}));return n.rotation.x=Math.PI,n.position.y=2.8,t.add(n),t}}const Pl=document.getElementById("simCanvas"),ln=new V_({canvas:Pl,antialias:!0,powerPreference:"high-performance"});ln.setPixelRatio(Math.min(2,window.devicePixelRatio||1));ln.setSize(window.innerWidth,window.innerHeight);ln.shadowMap.enabled=!0;ln.shadowMap.type=gh;ln.outputColorSpace=ve;const Rn=new mf,ms=new Lx(Rn),tn=new Cx(Rn),un=new Px(Rn),Ds=new ja,Ke=new Q_,be=new G_,Lt=ex(),Ix=window.matchMedia("(hover: none) and (pointer: coarse)").matches;Ix&&(Lt.showTouchControls=!0);const Re=new Rx(Pl,window.innerWidth/window.innerHeight);Re.setMirrorQuality(Lt.mirrorQuality,null);let gs="startBay",Qe="kyoshujo",Mn="kyoshujo-3d",Me=null,Ai=1.35,to=17,hi=!1,eo=1,Ll=0,Il=0,no=!1,Rt=du(Vs.startBay.x,Vs.startBay.z,Vs.startBay.heading,Lt.vehicleKind,Lt.transmission),_n=gu(Lt.vehicleKind);Rn.add(_n.root);Re.setMode(Lt.cameraMode,Rt,_n);be.setVolume(Lt.masterVolume,Lt.muted);const Dx=document.getElementById("ui"),_u=document.getElementById("uiToggle"),Dl=Array.from(document.querySelectorAll(".quickViewBtn[data-view-target]")),rh=document.getElementById("mirrorHud"),Ux=document.getElementById("mirrorLeft"),Nx=document.getElementById("mirrorCenter"),Ox=document.getElementById("mirrorRight"),Fx=document.getElementById("cockpitSignalHud"),Bx=document.getElementById("cockpitLampLeft"),kx=document.getElementById("cockpitLampRight"),en=document.getElementById("miniMap"),Ul=document.getElementById("miniMapClose"),zx=document.getElementById("speedVignette"),Hx=document.getElementById("speedBlur"),Vx=document.getElementById("wheelHudDial"),Gx=document.getElementById("speed"),Wx=document.getElementById("gear"),Xx=document.getElementById("viewMode"),Yx=document.getElementById("position"),qx=document.getElementById("heading"),Zx=document.getElementById("steerAngle"),jx=document.getElementById("signalStatusBox"),Jx=document.getElementById("signalStatus"),oh=document.getElementById("hudScore"),$x=document.getElementById("hudModePill"),Br=document.getElementById("hudDirective"),Qo=document.getElementById("violationToasts"),ah=document.getElementById("resetToast"),Kx=document.getElementById("stallBanner"),Nl=document.getElementById("mobileControls");Nl.hidden=!Lt.showTouchControls;const Qx={FL:document.getElementById("wheelFL"),FR:document.getElementById("wheelFR"),RL:document.getElementById("wheelRL"),RR:document.getElementById("wheelRR")},Ja=document.getElementById("accelCurve"),tv=document.getElementById("accelCurveValue"),ev=document.getElementById("accelCurveLine"),kr=document.getElementById("accelCurveGuideX"),zr=document.getElementById("accelCurveGuideY"),lh=document.getElementById("accelCurveDot"),nv=document.getElementById("accelCurveInputValue"),iv=document.getElementById("accelCurveOutputValue"),cn={left:32,right:188,top:20,bottom:108,samples:32};function xu(i,t=0){Ai=Le.clamp(i,.8,1.8),Ja.value=String(Math.round(Ai*100)),tv.textContent=Ai.toFixed(2);const e=[];for(let n=0;n<=cn.samples;n++){const s=n/cn.samples,r=Math.pow(s,Ai),o=Le.lerp(cn.left,cn.right,s),a=Le.lerp(cn.bottom,cn.top,r);e.push(`${o.toFixed(1)},${a.toFixed(1)}`)}ev.setAttribute("points",e.join(" ")),vu(t)}function vu(i){const t=Le.clamp(i,0,1),e=Math.pow(t,Ai),n=Le.lerp(cn.left,cn.right,t),s=Le.lerp(cn.bottom,cn.top,e);kr.setAttribute("x1",n.toFixed(1)),kr.setAttribute("y1",String(cn.bottom)),kr.setAttribute("x2",n.toFixed(1)),kr.setAttribute("y2",s.toFixed(1)),zr.setAttribute("x1",String(cn.left)),zr.setAttribute("y1",s.toFixed(1)),zr.setAttribute("x2",n.toFixed(1)),zr.setAttribute("y2",s.toFixed(1)),lh.setAttribute("cx",n.toFixed(1)),lh.setAttribute("cy",s.toFixed(1)),nv.textContent=`${Math.round(t*100)}%`,iv.textContent=`${Math.round(e*100)}%`}let _s=!0;function yn(i){_s=i,Dx.classList.toggle("collapsed",i);const t=Lt.locale==="ja";_u.textContent=i?t?"メニューを表示":"Show Menu":t?"メニューを隠す":"Hide Menu"}_u.addEventListener("click",()=>{be.unlock(),yn(!_s)});document.getElementById("startDrivingBtn").addEventListener("click",()=>{be.unlock(),yn(!0),Pl.focus({preventScroll:!0})});let ch=0;function sv(){const i=Lt.locale==="ja";document.getElementById("resetToastText").textContent=i?"スタート地点に戻りました。もう一度！":"Back to the start — try again!",ah.classList.add("visible"),window.clearTimeout(ch),ch=window.setTimeout(()=>ah.classList.remove("visible"),1800)}const ta=["chase","cockpit","hood","orbit"];function Ol(i){Lt.cameraMode=i,jn(Lt),Re.setMode(i,Rt,_n),Dl.forEach(s=>{s.classList.toggle("is-active",s.dataset.viewTarget===i)});const t=i==="orbit";rh.style.display=t?"none":i==="cockpit"?"block":"flex",rh.classList.toggle("cockpit-layout",i==="cockpit"),Fx.classList.toggle("is-visible",i==="cockpit");const e=Lt.locale==="ja",n={chase:e?"後方視点":"Chase View",cockpit:e?"運転席 (右ハンドル)":"Cockpit View",hood:e?"ボンネット":"Hood View",orbit:e?"自由カメラ":"Free Orbit"};Xx.textContent=n[i]}function Mu(){const i=ta.indexOf(Re.getMode());Ol(ta[(i+1)%ta.length])}Dl.forEach(i=>{i.addEventListener("click",()=>{be.unlock();const t=i.dataset.viewTarget;t&&Ol(t)})});document.getElementById("viewBtn").addEventListener("click",()=>{be.unlock(),Mu()});const ri=document.getElementById("mapPreset"),xs=document.getElementById("mapWidth"),$a=document.getElementById("mapScale"),rv=document.getElementById("mapScaleValue");function io(i){const t=Math.round(i);xs.value=String(t),$a.value=String(t),rv.textContent=`${t} m`}function Ii(i,t,e,n){Rt=du(i,t,e,Lt.vehicleKind,Lt.transmission),Ke.reset(n,Rt),document.getElementById("examResultModal").hidden=!0,Re.setMode(Re.getMode(),Rt,_n)}function Ss(i,t="practice"){gs=i,Mn="kyoshujo-3d",ri.value="kyoshujo-3d",Qe="kyoshujo",ms.setKyoshujoVisible(!0),tn.setVisible(!1),io(si*2);const e=Vs[i];Ii(e.x,e.z,e.heading,t)}function ho(i){if(i==="kyoshujo-3d"){Ss(gs,"practice");return}if(i==="custom"&&Me){Mn="custom",Qe="custom",ms.setKyoshujoVisible(!1),tn.setVisible(!0),io(Me.mapWidth),Ii(Me.startX,Me.startZ,Me.startHeading,"practice");return}const t=Qr.find(e=>e.id===i);t&&(Mn=t.id,ri.value=t.id,Qe="custom",tn.loadProceduralTestCenter(t),ms.setKyoshujoVisible(!1),tn.setVisible(!0),io(t.mapWidth),Ii(t.startX,t.startZ,t.startHeading,"practice"))}function Fl(){be.unlock(),un.resetProgress();const i=un.getStartPose();un.hasRoute()&&i?Ii(i.x,i.z,i.heading,"practice"):Mn==="kyoshujo-3d"?Ss(gs,Ke.getMode()):ho(Mn),sv()}document.getElementById("resetBtn").addEventListener("click",Fl);document.getElementById("quickResetBtn").addEventListener("click",Fl);function uo(){const i=Lt.locale==="ja";ri.innerHTML="";for(const n of Qr){const s=document.createElement("option");s.value=n.id,s.textContent=i?`${n.nameJa} (${n.nameEn})`:`${n.nameEn} (${n.nameJa})`,ri.append(s)}if(Me){const n=document.createElement("option");n.value="custom",n.textContent=i?`カスタム地図 / Custom (${Me.fileName})`:`Custom Map / カスタム (${Me.fileName})`,ri.append(n)}ri.value=Mn;const t=document.getElementById("stationGrid");t.innerHTML="";for(const n of Z_){const s=pu[n],r=document.createElement("button");r.type="button",r.className="station-chip";const o=i?`${s.titleJa} · ${s.titleEn}`:`${s.titleEn} · ${s.titleJa}`,a=i?s.descJa:s.descEn;r.innerHTML=`<strong>${o}</strong><span>${a}</span>`,r.addEventListener("click",()=>{be.unlock(),Ss(n,"practice"),yn(!0)}),t.append(r)}const e=document.getElementById("courseQuickList");e.innerHTML="";for(const n of Qr){const s=document.createElement("li"),r=document.createElement("button");r.type="button",r.innerHTML=`<strong>${i?n.nameJa:n.nameEn}</strong><small>${i?n.nameEn:n.nameJa}</small>`,r.addEventListener("click",()=>{be.unlock(),ho(n.id),yn(!0)}),s.append(r),e.append(s)}}ri.addEventListener("change",()=>{be.unlock(),ho(ri.value)});document.getElementById("modePracticeBtn").addEventListener("click",()=>{be.unlock(),Ke.reset("practice",Rt),yn(!0)});document.getElementById("modeExamBtn").addEventListener("click",()=>{be.unlock(),Ss("startBay","exam"),yn(!0)});const Ka=document.getElementById("vehicleType"),Qa=document.getElementById("transmissionMode"),hh=document.getElementById("maxSpeed"),ov=document.getElementById("maxSpeedValue"),tl=document.getElementById("masterVolume"),yu=document.getElementById("masterVolumeValue"),el=document.getElementById("steeringSensitivity"),Su=document.getElementById("steeringSensitivityValue"),nl=document.getElementById("autoCenterSteering"),il=document.getElementById("renderQuality"),sl=document.getElementById("settingTouchControls");Ka.value=Lt.vehicleKind;Qa.value=Lt.transmission;tl.value=String(Math.round(Lt.masterVolume*100));yu.textContent=`${Math.round(Lt.masterVolume*100)}%`;el.value=String(Math.round(Lt.steeringSensitivity*100));Su.textContent=`${Lt.steeringSensitivity.toFixed(2)}x`;nl.checked=Lt.autoCenterSteering;il.value=Lt.mirrorQuality;sl.checked=Lt.showTouchControls;xu(Ai,0);function Eu(){Rn.remove(_n.root),_n=gu(Lt.vehicleKind),Rn.add(_n.root),Re.setMode(Re.getMode(),Rt,_n),Rt.transmission=Lt.transmission,Rt.gear=Lt.transmission==="AT"?"D":"1",Rt.stalled=!1}Ka.addEventListener("change",()=>{Lt.vehicleKind=Ka.value,jn(Lt),Eu()});Qa.addEventListener("change",()=>{Lt.transmission=Qa.value,jn(Lt),Eu()});hh.addEventListener("input",()=>{to=Number(hh.value),ov.textContent=`${to} m/s`});tl.addEventListener("input",()=>{Lt.masterVolume=Number(tl.value)/100,yu.textContent=`${Math.round(Lt.masterVolume*100)}%`,be.setVolume(Lt.masterVolume,Lt.muted),jn(Lt)});el.addEventListener("input",()=>{Lt.steeringSensitivity=Number(el.value)/100,Su.textContent=`${Lt.steeringSensitivity.toFixed(2)}x`,jn(Lt)});nl.addEventListener("change",()=>{Lt.autoCenterSteering=nl.checked,jn(Lt)});il.addEventListener("change",()=>{Lt.mirrorQuality=il.value,Re.setMirrorQuality(Lt.mirrorQuality,_n),jn(Lt)});sl.addEventListener("change",()=>{Lt.showTouchControls=sl.checked,Nl.hidden=!Lt.showTouchControls,jn(Lt)});Ja.addEventListener("input",()=>{xu(Number(Ja.value)/100,0)});const uh=document.getElementById("mapInput");uh.addEventListener("change",()=>{var e;const i=(e=uh.files)==null?void 0:e[0];if(!i)return;const t=new FileReader;t.onload=async()=>{const n=String(t.result),s=Math.max(40,Number(xs.value)||350),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Me=r,await tn.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await rr(r),Mn="custom",uo(),ho("custom"),yn(!0)},t.readAsDataURL(i)});const bu=i=>{const t=Math.max(40,Math.min(1500,i));io(t),Qe==="custom"&&(tn.setWidth(t),Me&&(Me.mapWidth=t,rr(Me)))};xs.addEventListener("input",()=>bu(Number(xs.value)||180));$a.addEventListener("input",()=>bu(Number($a.value)||180));document.getElementById("setSpawnBtn").addEventListener("click",()=>{Me&&Mn==="custom"?(Me.startX=Rt.x,Me.startZ=Rt.z,Me.startHeading=Rt.heading,rr(Me)):Vs[gs]={id:gs,x:Rt.x,z:Rt.z,heading:Rt.heading},be.playClick(740,.04,.16)});document.getElementById("copyMapJsonBtn").addEventListener("click",async()=>{const i=JSON.stringify({course:Mn,mapWidth:Number(xs.value)||180,maxSpeed:to,startPose:{x:Number(Rt.x.toFixed(1)),z:Number(Rt.z.toFixed(1)),heading:Number(Rt.heading.toFixed(6))}},null,2);try{await navigator.clipboard.writeText(i)}catch{}});const Tu=document.getElementById("firstRunHint");document.getElementById("firstRunHintClose").addEventListener("click",()=>{Tu.hidden=!0});function so(i){hi=i,i&&(eo=1,Ll=0,Il=0),en.classList.toggle("expanded",i),en.classList.remove("is-panning"),document.body.classList.toggle("minimap-expanded",i)}let ro=null,wu=0,Au=0,rl=0,ol=0;en.addEventListener("pointerdown",i=>{!hi||i.target===Ul||(ro=i.pointerId,wu=rl=i.clientX,Au=ol=i.clientY,no=!1,en.setPointerCapture(i.pointerId))});en.addEventListener("pointermove",i=>{if(!hi||i.pointerId!==ro)return;const t=Math.hypot(i.clientX-wu,i.clientY-Au),e=i.clientX-rl,n=i.clientY-ol;if(rl=i.clientX,ol=i.clientY,t>=5){no=!0,en.classList.add("is-panning");const s=en.getBoundingClientRect();Ll-=e/Math.max(1,s.width)*Re.miniMapViewport.halfWidth*2,Il-=n/Math.max(1,s.height)*Re.miniMapViewport.halfHeight*2}});en.addEventListener("pointerup",i=>{i.pointerId===ro&&(ro=null,en.classList.remove("is-panning"))});en.addEventListener("click",i=>{if(i.target===Ul)return;if(no){no=!1;return}if(!hi){so(!0);return}const t=en.getBoundingClientRect(),e=(i.clientX-t.left)/Math.max(1,t.width),n=(i.clientY-t.top)/Math.max(1,t.height),s=Re.miniMapViewport.centerX+(e-.5)*Re.miniMapViewport.halfWidth*2,r=Re.miniMapViewport.centerZ+(n-.5)*Re.miniMapViewport.halfHeight*2;Ii(s,r,Rt.heading,Ke.getMode()),so(!1)});en.addEventListener("wheel",i=>{if(!hi)return;i.preventDefault();const t=i.deltaY<0?1.18:1/1.18;eo=Le.clamp(eo*t,1,6)},{passive:!1});Ul.addEventListener("click",i=>{i.stopPropagation(),so(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&hi&&so(!1)});document.getElementById("gearCardBtn").addEventListener("click",()=>{be.unlock(),fu(Rt,1)});document.getElementById("stallRestartBtn").addEventListener("click",()=>{be.unlock(),Rt.stalled=!1,Rt.rpm=850});function av(i){var o;const t=Lt.locale==="ja",e=document.createElement("div");e.className=`violation-toast ${i.instantFail?"fail":""}`;const n=t?i.labelJa:i.labelEn,s=t?i.detailJa:i.detailEn,r=i.instantFail?t?"検定中止":"FAIL":`-${i.points}`;for(e.innerHTML=`<span class="vt-pts">${r}</span><div><strong>${n}</strong><p>${s}</p></div>`,Qo.prepend(e);Qo.children.length>3;)(o=Qo.lastElementChild)==null||o.remove();window.setTimeout(()=>{e.classList.add("fade-out"),window.setTimeout(()=>e.remove(),320)},4200)}let Ru="crank";function lv(i){const t=Lt.locale,e=document.getElementById("examResultModal");e.hidden=!1,Ru=i.weakArea??"crank",document.getElementById("examResultTitle").textContent=Hn(t,"examResultTitle");const n=document.getElementById("examStamp");n.textContent=i.passed?Hn(t,"examPassStamp"):Hn(t,"examFailStamp"),n.className=`exam-stamp ${i.passed?"pass":"fail"}`,document.getElementById("examResultSub").textContent=i.terminated?Hn(t,"examTerminatedSub"):i.passed?Hn(t,"examPassedSub"):Hn(t,"examFailedSub"),document.getElementById("examFinalScore").textContent=`${i.score} / 100`;const s=Math.floor(i.elapsedSec/60),r=Math.floor(i.elapsedSec%60);document.getElementById("examElapsed").textContent=`${s}:${r.toString().padStart(2,"0")}`,document.getElementById("examDistance").textContent=`${Math.round(i.distanceM)} m`;const o=document.getElementById("examViolationList");if(o.innerHTML="",i.violations.length===0){const a=document.createElement("li");a.className="clean-pass",a.textContent=Hn(t,"examNoViolations"),o.append(a)}else for(const a of i.violations){const l=document.createElement("li"),c=t==="ja"?a.labelJa:a.labelEn,h=t==="ja"?a.detailJa:a.detailEn,u=a.instantFail?t==="ja"?"中止":"FAIL":`-${a.points}`;l.innerHTML=`<span class="ev-badge ${a.instantFail?"fail":""}">${u}</span><span><strong>${c}</strong> — ${h}</span>`,o.append(l)}}document.getElementById("examRetryBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Ss("startBay","exam")});document.getElementById("examPracticeWeakBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Ss(Ru,"practice")});document.getElementById("examCloseBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Ke.reset("practice",Rt)});Ke.onViolation=i=>{av(i),be.playViolationChime(i.instantFail)};Ke.onExamFinish=i=>{lv(i)};const Cu=new hx({onToggleBlinker:i=>{Rt.blinker=Rt.blinker===i?"off":i,Rt.blinkerTimer=0,Rt.blinkerOn=Rt.blinker!=="off"},onToggleHandbrake:()=>{Rt.handbrake=!Rt.handbrake,be.playClick(420,.04,.16)},onShiftGear:i=>{fu(Rt,i),be.playClick(620,.03,.14)},onCycleCamera:Mu,onResetVehicle:Fl,onToggleMenu:()=>yn(!_s),onIgnition:()=>{Rt.stalled=!1,Rt.rpm=850},onAnyInteraction:()=>{be.unlock(),Tu.hidden=!0}});Cu.bindTouchControls(Nl);function Pu(){const i=Lt.locale==="ja";document.documentElement.lang=Lt.locale,yn(_s),document.getElementById("quickLangEnBtn").classList.toggle("is-active",!i),document.getElementById("quickLangJaBtn").classList.toggle("is-active",i),document.getElementById("panelLangEnBtn").style.borderColor=i?"rgba(255,255,255,0.14)":"#34d399",document.getElementById("panelLangJaBtn").style.borderColor=i?"#34d399":"rgba(255,255,255,0.14)",document.getElementById("setupTitleText").textContent=i?"ドライブの準備 (Ready to drive)":"Ready to drive (ドライブの準備)",document.getElementById("setupLeadText").textContent=i?"車両とコースを選び、各教習課題へのワープや100点満点の修了検定を練習できます。":"Choose your vehicle and map, warp to any driving school obstacle, or start the 100-point exam.",document.getElementById("startDrivingBtn").textContent=i?"運転を始める (Start driving)":"Start driving (運転を始める)",document.getElementById("resetBtn").textContent=i?"車両リセット (Reset)":"Reset Vehicle (リセット)",document.getElementById("quickResetBtn").textContent=i?"リセット (O)":"Reset (O)",document.getElementById("lblVehicle").textContent=i?"車種 (Vehicle)":"Vehicle (車種)",document.getElementById("optSedan").textContent=i?"普通車セダン (右ハンドル) · RHD Sedan":"Sedan (RHD Corolla) · 普通車セダン",document.getElementById("optMoto").textContent=i?"普通二輪 (400cc) · Motorcycle":"Motorcycle (400cc) · 普通二輪",document.getElementById("lblTrans").textContent=i?"変速機 (Transmission)":"Transmission (変速機)",document.getElementById("optAT").textContent=i?"AT (オートマ・クリープあり)":"AT (Automatic · Creep)",document.getElementById("optMT").textContent=i?"MT (マニュアル5速)":"MT (Manual 5-Speed)",document.getElementById("lblMap").textContent=i?"コース / 試験場マップ (Course / Map)":"Course / Map (教習コース・試験場)",document.getElementById("modePracticeBtn").textContent=i?"自由練習 (Free Practice)":"Free Practice (自由練習)",document.getElementById("modeExamBtn").textContent=i?"修了検定 100点採点 (Mock Exam)":"Mock Exam 100-pt (修了検定)",document.getElementById("foldStationsTitle").textContent=i?"教習課題ワープ (Kyōshūjo Training Stations)":"Kyōshūjo Training Stations (教習課題ワープ)",document.getElementById("foldTuningTitle").textContent=i?"操作感とサウンド (Handling & sound)":"Handling & sound (操作感とサウンド)",document.getElementById("lblMaxSpeed").textContent=i?"最高速度 (Max Speed)":"Max Speed (最高速度)",document.getElementById("lblVolume").textContent=i?"音量 (Volume)":"Volume (音量)",document.getElementById("lblSteerSens").textContent=i?"ハンドル感度 (Steering Sensitivity)":"Steering Sensitivity (ハンドル感度)",document.getElementById("lblAutoCenter").textContent=i?"ハンドル自動復元 (Auto-center Steering)":"Auto-center Steering (ハンドル自動復元)",document.getElementById("lblMirrorQuality").textContent=i?"画質・ミラー描画 (Graphics & Mirrors)":"Graphics & Mirrors (画質・ミラー描画)",document.getElementById("optMirrorHigh").textContent=i?"高画質・3面ミラー (High · 3 Mirrors)":"High · Real-time 3 Mirrors (高画質)",document.getElementById("optMirrorLow").textContent=i?"標準・バランス (Medium · Balanced)":"Medium · Balanced (標準)",document.getElementById("optMirrorOff").textContent=i?"軽量・省電力 (Low · Save power)":"Low · Save power (軽量)",document.getElementById("lblTouchControls").textContent=i?"タッチ操作パネル表示 (Show touch controls)":"Show mobile touch controls (タッチ操作表示)",document.getElementById("curveTitle").textContent=i?"アクセル特性カーブ (Acceleration Curve)":"Acceleration Curve (アクセル特性)",document.getElementById("curveDesc").textContent=i?"横軸：アクセル入力 ／ 縦軸：駆動出力 (X: Input, Y: Output)":"X axis is throttle input, Y axis is drive output",document.getElementById("curveSoftLbl").textContent=i?"穏やか (Soft)":"Soft (穏やか)",document.getElementById("curveDirectLbl").textContent=i?"ダイレクト (Direct)":"Direct (直接)",document.getElementById("curveInputLbl").textContent=i?"入力 (Input)":"Current Input",document.getElementById("curveOutputLbl").textContent=i?"出力 (Output)":"Current Output",document.getElementById("foldMapTitle").textContent=i?"マップ編集・開始位置 (Map editor & spawn)":"Map editor & spawn (マップ編集・開始位置)",document.getElementById("uploadMapText").textContent=i?"地図アップロード (Upload)":"Upload Map (地図読込)",document.getElementById("setSpawnBtn").textContent=i?"開始位置に登録 (Set Spawn)":"Set Spawn (開始位置)",document.getElementById("viewBtn").textContent=i?"視点切替 (Change View)":"Change View (視点切替)",document.getElementById("copyMapJsonBtn").textContent=i?"JSONコピー (Copy JSON)":"Copy JSON (JSONコピー)",document.getElementById("lblCustomWidth").textContent=i?"マップ横幅 (Map Width m)":"Map Width m (マップ横幅)",document.getElementById("lblMapScale").textContent=i?"縮尺スケール (Map Scale)":"Map Scale (縮尺)",document.getElementById("foldHelpTitle").textContent=i?"操作ガイド (How to drive)":"How to drive (操作ガイド)";const t=document.getElementById("tipsContainer"),e=i?["W/A/S/D または 矢印キー : 運転 (Drive)","Q / E : 左右ウインカー (Signals) · H : ハザード","Space : サイドブレーキ (Handbrake)","Shift / Ctrl : ギア変更 (Shift Gear)","Z / X : 左右の安全確認 (Look Left/Right)","O : 車両リセット (Reset)","V : カメラ視点切替 (Cycle Views)"]:["W/A/S/D or Arrow Keys : Drive (運転)","Q / E : Turn Signals (ウインカー) · H : Hazard","Space : Handbrake (サイドブレーキ)","Shift / Ctrl : Shift Gear (ギア変更)","Z / X : Look Left & Right (左右安全確認)","O : Reset Vehicle (リセット)","V : Cycle Views (視点切替)"];t.innerHTML=e.map(s=>`<span>${s}</span>`).join(""),document.getElementById("helpMiniMapText").textContent=i?"右下のミニマップをクリックで拡大表示し、コース上の任意の場所をクリックするとそこへ車両がワープします。":"Click the mini map in the bottom-right corner to expand it, drag to pan, scroll to zoom, or click any spot to teleport the vehicle.",document.getElementById("foldDataTitle").textContent=i?"走行データ (Driving details)":"Driving details (走行データ)",document.getElementById("lblTelView").textContent=i?"視点 (View):":"View (視点):",document.getElementById("lblTelPos").textContent=i?"位置 (Position):":"Position (位置):",document.getElementById("lblTelHead").textContent=i?"方位 (Heading):":"Heading (方位):",document.getElementById("lblTelSteer").textContent=i?"舵角 (Steering):":"Steering (舵角):",document.getElementById("foldCoursesTitle").textContent=i?"試験場・教習コース一覧 (Built-in Test Center Courses)":"Built-in Test Center Courses (試験場コース一覧)";const n={chase:i?"後方 (Chase)":"Chase (後方)",cockpit:i?"運転席 (Cockpit)":"Cockpit (運転席)",hood:i?"ボンネット (Hood)":"Hood (ボンネット)",orbit:i?"自由 (Free)":"Free (自由)"};Dl.forEach(s=>{const r=s.dataset.viewTarget||"chase";s.textContent=n[r]||r}),document.getElementById("lblMirrorL").textContent=i?"左ミラー · Left":"Left Mirror · 左",document.getElementById("lblMirrorC").textContent=i?"ルームミラー · Center":"Center Mirror · 中央",document.getElementById("lblMirrorR").textContent=i?"右ミラー · Right":"Right Mirror · 右",document.getElementById("cockpitLampLeft").textContent=i?"← 左合図 (Left)":"← Left (左)",document.getElementById("cockpitLampRight").textContent=i?"右合図 (Right) →":"Right (右) →",document.getElementById("lblHudSignal").textContent=i?"合図 (Signal):":"Signal (合図):",document.getElementById("lblMiniMap").textContent=i?"ミニマップ · Mini Map":"Mini Map · ミニマップ",document.getElementById("lblMiniMapHint").textContent=i?"ドラッグで移動・ホイールで拡大・地点クリックでワープ (Click any point to teleport)":"Hold and drag to pan. Wheel to zoom. Click any point on the course to teleport there.",document.getElementById("firstRunTitle").textContent=i?"運転をはじめましょう (Start driving)":"Start driving (運転をはじめましょう)",document.getElementById("firstRunText").textContent=i?"WASD/矢印キーで走行、Q/Eでウインカー、Spaceでブレーキ、Z/Xで左右目視、Vで視点切替、Oでリセット。":"WASD or arrow keys drive, Q/E signals, Space brakes, Z/X look left & right, V changes view, O resets.",document.getElementById("lblMobileSteerHint").textContent=i?"← 左右スワイプで操舵 (Swipe) →":"← Swipe to steer (スワイプ操舵) →",document.getElementById("lblMobileSigL").textContent=i?"↑ 左 (L)":"↑ Left",document.getElementById("lblMobileSigR").textContent=i?"右 (R) ↓":"Right ↓",document.getElementById("lblMobileGear").textContent=i?"ギア (Gear)":"Gear",document.getElementById("lblMobileBrake").textContent=i?"ブレーキ":"Brake",document.getElementById("lblMobileThrottle").textContent=i?"アクセル":"Throttle",uo(),Ol(Re.getMode())}function fo(i){be.unlock(),Lt.locale=i,jn(Lt),Pu()}document.getElementById("quickLangEnBtn").addEventListener("click",()=>fo("en"));document.getElementById("quickLangJaBtn").addEventListener("click",()=>fo("ja"));document.getElementById("panelLangEnBtn").addEventListener("click",()=>fo("en"));document.getElementById("panelLangJaBtn").addEventListener("click",()=>fo("ja"));const Bl=document.getElementById("routeBuilderModal"),er=document.getElementById("routeBuilderCanvas"),Ot=er.getContext("2d"),al=document.getElementById("rbStatusText"),dh=document.getElementById("rbUploadInput");let ll="waypoint",we=[],qn=[],Gs=[];function kl(){return Qe==="custom"?tn.currentSize:{width:si*2,height:wi*2}}function zl(){Gs.push({waypoints:we.map(i=>({...i})),stamps:qn.map(i=>({...i}))}),Gs.length>30&&Gs.shift()}function Es(){const i=er.width,t=er.height;Ot.clearRect(0,0,i,t);const e=kl(),n=Qe==="custom"?tn.getActiveSource():null;if(n)Ot.drawImage(n,0,0,i,t);else{Ot.fillStyle="#1e2f23",Ot.fillRect(0,0,i,t);const r=(_,v)=>[(_/e.width+.5)*i,(v/e.height+.5)*t];Ot.strokeStyle="#475569",Ot.lineWidth=22,Ot.lineCap="round",Ot.strokeRect(i*.08,t*.12,i*.84,t*.76),Ot.beginPath();const[o,a]=r(0,-46),[l,c]=r(0,46),[h,u]=r(-76,0),[f,g]=r(76,0);Ot.moveTo(o,a),Ot.lineTo(l,c),Ot.moveTo(h,u),Ot.lineTo(f,g),Ot.stroke()}const s=(r,o)=>[(r/e.width+.5)*i,(o/e.height+.5)*t];if(we.length>=2){Ot.save(),Ot.strokeStyle="#34d399",Ot.lineWidth=5,Ot.lineCap="round",Ot.lineJoin="round",Ot.beginPath(),we.forEach((r,o)=>{const[a,l]=s(r.x,r.z);o===0?Ot.moveTo(a,l):Ot.lineTo(a,l)}),Ot.stroke();for(let r=0;r<we.length-1;r++){const[o,a]=s(we[r].x,we[r].z),[l,c]=s(we[r+1].x,we[r+1].z),h=(o+l)*.5,u=(a+c)*.5,f=Math.atan2(c-a,l-o);Ot.save(),Ot.translate(h,u),Ot.rotate(f),Ot.fillStyle="#fde047",Ot.beginPath(),Ot.moveTo(8,0),Ot.lineTo(-6,-5),Ot.lineTo(-6,5),Ot.closePath(),Ot.fill(),Ot.restore()}Ot.restore()}we.forEach((r,o)=>{const[a,l]=s(r.x,r.z);Ot.beginPath(),Ot.arc(a,l,13,0,Math.PI*2),Ot.fillStyle=o===0?"#059669":o===we.length-1?"#d62828":"#005bac",Ot.fill(),Ot.lineWidth=2.5,Ot.strokeStyle="#ffffff",Ot.stroke(),Ot.fillStyle="#ffffff",Ot.font="bold 12px sans-serif",Ot.textAlign="center",Ot.textBaseline="middle";const c=o===0?"S":o===we.length-1?"G":String(o);Ot.fillText(c,a,l)});for(const r of qn){const[o,a]=s(r.x,r.z);Ot.save(),Ot.translate(o,a),Ot.fillStyle=r.kind==="stopSign"?"#dc2626":r.kind==="trafficLight"?"#f59e0b":"#ec4899",Ot.beginPath(),Ot.arc(0,0,11,0,Math.PI*2),Ot.fill(),Ot.strokeStyle="#fff",Ot.lineWidth=2,Ot.stroke(),Ot.fillStyle="#fff",Ot.font="bold 10px sans-serif",Ot.textAlign="center",Ot.textBaseline="middle",Ot.fillText(r.kind==="stopSign"?"止":r.kind==="trafficLight"?"信":"P",0,0),Ot.restore()}al.textContent=Lt.locale==="ja"?`ポイント: ${we.length}点 ／ 3D標識: ${qn.length}個`:`Waypoints: ${we.length} · 3D Stamps: ${qn.length}`}function Lu(){be.unlock();const i=un.getData();we=i.waypoints.map(t=>({...t})),qn=i.stamps.map(t=>({...t})),Gs=[],Bl.hidden=!1,Es()}document.getElementById("openRouteBuilderBtn").addEventListener("click",Lu);document.getElementById("quickRouteBuilderBtn").addEventListener("click",Lu);document.getElementById("rbCloseBtn").addEventListener("click",()=>{Bl.hidden=!0});document.querySelectorAll("[data-rb-tool]").forEach(i=>{i.addEventListener("click",()=>{ll=i.dataset.rbTool||"waypoint",document.querySelectorAll("[data-rb-tool]").forEach(t=>{t.classList.toggle("active",t===i)})})});er.addEventListener("click",i=>{const t=er.getBoundingClientRect(),e=(i.clientX-t.left)/Math.max(1,t.width),n=(i.clientY-t.top)/Math.max(1,t.height),s=kl(),r=(e-.5)*s.width,o=(n-.5)*s.height;if(zl(),ll==="waypoint")we.push({x:r,z:o,turn:"straight"});else{let a=0;if(we.length>=1){const l=we[we.length-1];a=Math.atan2(-(r-l.x),-(o-l.z))}qn.push({kind:ll,x:r,z:o,heading:a})}Es()});document.getElementById("rbUndoBtn").addEventListener("click",()=>{const i=Gs.pop();i&&(we=i.waypoints,qn=i.stamps,Es())});document.getElementById("rbClearBtn").addEventListener("click",()=>{zl(),we=[],qn=[],Es()});dh.addEventListener("change",()=>{var e;const i=(e=dh.files)==null?void 0:e[0];if(!i)return;const t=new FileReader;t.onload=async()=>{const n=String(t.result),s=Math.max(80,Number(xs.value)||260),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Me=r,await tn.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await rr(r),Mn="custom",Qe="custom",ms.setKyoshujoVisible(!1),tn.setVisible(!0),uo(),Es()},t.readAsDataURL(i)});document.querySelectorAll("[data-trace-color]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.traceColor||"red",e=tn.getActiveSource();if(!e){al.textContent=Lt.locale==="ja"?"先にコース図画像をアップロードしてください":"Please upload a route map image first";return}const n=kl(),s=un.autoExtractRouteFromImage(e,n.width,t);if(s.length<2){al.textContent=Lt.locale==="ja"?"色線が見つかりませんでした。地図上をクリックしてルート点を追加してください":"No matching colored line found — click directly on the map to trace points";return}zl(),we=s,Es()})});document.getElementById("rbSaveAndDriveBtn").addEventListener("click",()=>{un.setRouteData({waypoints:we,stamps:qn},!0),Bl.hidden=!0,yn(!0);const i=un.getStartPose();i&&(Me&&Qe==="custom"&&(Me.startX=i.x,Me.startZ=i.z,Me.startHeading=i.heading,rr(Me)),Ii(i.x,i.z,i.heading,"practice"))});function cv(i){if(un.setMemoryMode(i),document.querySelectorAll("[data-memory-mode]").forEach(t=>{t.classList.toggle("active",t.dataset.memoryMode===i)}),i==="autodrive"&&un.hasRoute()){const t=un.getStartPose();t&&(Ii(t.x,t.z,t.heading,"practice"),un.resetProgress())}}document.querySelectorAll("[data-memory-mode]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.memoryMode||"guided";cv(t)})});nx().then(async i=>{i&&(Me=i,await tn.loadFromDataUrl(i.imageDataUrl,i.mapWidth),uo())});Pu();yn(!0);window.addEventListener("resize",()=>{ln.setSize(window.innerWidth,window.innerHeight),Re.resize(window.innerWidth/window.innerHeight)});const hv=()=>({y:0,slopeX:0,slopeZ:0}),Qi=1/120;let ea=0,fh=performance.now(),vi=0,ph=-999;function Iu(i){requestAnimationFrame(Iu);const t=Math.min(.05,Math.max(0,(i-fh)/1e3));fh=i,ea+=t;const n={...uu(Lt.vehicleKind),maxSpeedMs:to},s=Cu.getInputState(),r=un.update(t,Rt,Ds,Lt.locale,vi),o=r.autoDriveInput??s,a={...o,throttle:o.throttle>0?Math.pow(o.throttle,Ai):0};_s||vu(o.throttle);let l=th(Rt,n);for(;ea>=Qi;)vi+=Qi,Ds.update(Qi),ax(Rt,a,n,Qi,{steeringSensitivity:Lt.steeringSensitivity,autoCenterSteering:Lt.autoCenterSteering,simTimeSec:vi},Qe==="custom"?hv:void 0),Qe==="kyoshujo"&&(l=th(Rt,n),(l.pushX!==0||l.pushZ!==0)&&(Rt.x+=l.pushX,Rt.z+=l.pushZ,lx(Rt,n),(l.poleHit||l.obstacleHit)&&(Rt.speedMs*=.35,vi-ph>.6&&(ph=vi,be.playThud()))),Ke.update(Qi,Rt,l,Ds)),ea-=Qi;const c=Ke.getCurrentWaypoint(),h=c?{x:c.x,z:c.z}:null;Ax(_n,Rt,Lt.vehicleKind),ms.updateShadowFocus(Rt.x,Rt.z),ms.updateDynamic(Ds,h,vi);const u=Ds.getRailroadState();be.update(Rt,Qe==="kyoshujo"&&u.isWarningActive,vi);const f=Math.abs(Rt.speedMs),g=Math.pow(Le.clamp((f-6)/14,0,1),1.8);zx.style.opacity=(g*.75).toFixed(3),Hx.style.opacity=(g*.88).toFixed(3),Re.update(t,Rt,Lt.vehicleKind,_n,ln,Rn);const _=!_s||hi;Re.renderPiPMirrors(ln,Rn,Rt,Ux,Nx,Ox,_);const v=Qe==="kyoshujo"?{width:si*2,height:wi*2}:tn.currentSize;Re.renderPiPMiniMap(ln,Rn,en,Rt,v,hi,eo,Ll,Il),ln.setViewport(0,0,window.innerWidth,window.innerHeight),ln.setScissorTest(!1),ln.render(Rn,Re.camera);const m=Lt.locale==="ja";Gx.textContent=(f*3.6).toFixed(1),Wx.textContent=Rt.gear,Yx.textContent=`${Rt.x.toFixed(1)}, ${Rt.z.toFixed(1)}`;const p=Le.radToDeg(Rt.heading);qx.textContent=`${p.toFixed(1)}° / ${Rt.heading.toFixed(4)} rad`;const y=Math.round(Le.radToDeg(Rt.steeringWheelRad));Zx.textContent=String(y),Vx.style.transform=`rotate(${-Rt.steeringWheelRad}rad)`;const M=Rt.blinkerOn&&(Rt.blinker==="left"||Rt.blinker==="hazard"),x=Rt.blinkerOn&&(Rt.blinker==="right"||Rt.blinker==="hazard");Bx.classList.toggle("is-active",M),kx.classList.toggle("is-active",x),jx.dataset.signal=Rt.blinker,Jx.textContent=Rt.blinker==="left"?m?"左合図":"Left":Rt.blinker==="right"?m?"右合図":"Right":Rt.blinker==="hazard"?"Hazard":"Off",oh.textContent=String(Ke.getScore()),oh.className=`score-num ${Ke.getScore()<70?"danger":""}`;const S=Ke.getMode()==="exam";$x.textContent=S?Hn(Lt.locale,"modeExam"):Hn(Lt.locale,"modePractice");const E=Ke.getWaypointProgress();if(r.bannerText)Br.textContent=r.bannerText;else if(Qe==="custom"){const w=Qr.find(P=>P.id===Mn);Br.textContent=w?m?`${w.nameJa} コース練習中`:`Practicing: ${w.nameEn}`:m?"カスタム地図コース走行中":"Driving custom course map"}else if(c)Br.textContent=`[${E.current+1}/${E.total}] ${m?c.instructionJa:c.instructionEn}`;else{const w=pu[gs];Br.textContent=`${m?w.titleJa:w.titleEn}: ${m?w.descJa:w.descEn}`}Kx.hidden=!Rt.stalled,["FL","FR","RL","RR"].forEach(w=>{const P=l.wheels[w],b=Qx[w];b.classList.toggle("mount",P.curbMount),b.classList.toggle("touch",!P.curbMount&&P.curbTouch),b.classList.toggle("close",!P.curbMount&&!P.curbTouch&&P.proximity>.35)})}requestAnimationFrame(Iu);
