var ou=Object.defineProperty;var au=(i,e,t)=>e in i?ou(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var pe=(i,e,t)=>au(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yl="180",cs={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lu=0,lc=1,cu=2,Lh=1,Ih=2,Wn=3,fi=0,$t=1,Rt=2,di=0,hs=1,cc=2,hc=3,dc=4,hu=5,Ti=100,du=101,uu=102,fu=103,pu=104,mu=200,gu=201,_u=202,xu=203,ua=204,fa=205,vu=206,yu=207,Mu=208,Su=209,Eu=210,bu=211,wu=212,Tu=213,Au=214,pa=0,ma=1,ga=2,gs=3,_a=4,xa=5,va=6,ya=7,Dh=0,Ru=1,Cu=2,ui=0,Pu=1,Lu=2,Iu=3,Du=4,ku=5,Uu=6,Nu=7,kh=300,_s=301,xs=302,Ma=303,Sa=304,po=306,Zs=1e3,Ci=1001,Ea=1002,Mn=1003,Fu=1004,mr=1005,Cn=1006,wo=1007,Pi=1008,Un=1009,Uh=1010,Nh=1011,js=1012,Ml=1013,ki=1014,$n=1015,Ts=1016,Sl=1017,El=1018,Ks=1020,Fh=35902,Oh=35899,Bh=1021,zh=1022,xn=1023,Qs=1026,er=1027,Hh=1028,bl=1029,Vh=1030,wl=1031,Tl=1033,$r=33776,Yr=33777,Zr=33778,jr=33779,ba=35840,wa=35841,Ta=35842,Aa=35843,Ra=36196,Ca=37492,Pa=37496,La=37808,Ia=37809,Da=37810,ka=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,Ba=37816,za=37817,Ha=37818,Va=37819,Ga=37820,Wa=37821,Xa=36492,qa=36494,Ja=36495,$a=36283,Ya=36284,Za=36285,ja=36286,Ou=3200,Bu=3201,Gh=0,zu=1,li="",yt="srgb",vs="srgb-linear",Qr="linear",ut="srgb",Hi=7680,uc=519,Hu=512,Vu=513,Gu=514,Wh=515,Wu=516,Xu=517,qu=518,Ju=519,Ka=35044,fc="300 es",Pn=2e3,eo=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pc=1234567;const Ws=Math.PI/180,tr=180/Math.PI;function kn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Al(i,e){return(i%e+e)%e}function $u(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yu(i,e,t){return i!==e?(t-i)/(e-i):0}function Xs(i,e,t){return(1-t)*i+t*e}function Zu(i,e,t,n){return Xs(i,e,1-Math.exp(-t*n))}function ju(i,e=1){return e-Math.abs(Al(i,e*2)-e)}function Ku(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Qu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ef(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tf(i,e){return i+Math.random()*(e-i)}function nf(i){return i*(.5-Math.random())}function sf(i){i!==void 0&&(pc=i);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rf(i){return i*Ws}function of(i){return i*tr}function af(i){return(i&i-1)===0&&i!==0}function lf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hf(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),u=o((e-n)/2),m=r((n-e)/2),_=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*m,a*l);break;case"YXY":i.set(c*m,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*m,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const St={DEG2RAD:Ws,RAD2DEG:tr,generateUUID:kn,clamp:Qe,euclideanModulo:Al,mapLinear:$u,inverseLerp:Yu,lerp:Xs,damp:Zu,pingpong:ju,smoothstep:Ku,smootherstep:Qu,randInt:ef,randFloat:tf,randFloatSpread:nf,seededRandom:sf,degToRad:rf,radToDeg:of,isPowerOfTwo:af,ceilPowerOfTwo:lf,floorPowerOfTwo:cf,setQuaternionFromProperEuler:hf,normalize:ht,denormalize:_n};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3];const u=r[o+0],m=r[o+1],_=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=v;return}if(d!==v||c!==u||l!==m||h!==_){let g=1-a;const p=c*u+l*m+h*_+d*v,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const y=Math.sqrt(M),b=Math.atan2(y,p*S);g=Math.sin(g*b)/y,a=Math.sin(a*b)/y}const x=a*S;if(c=c*g+u*x,l=l*g+m*x,h=h*g+_*x,d=d*g+v*x,g===1-a){const y=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=y,l*=y,h*=y,d*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*d+c*m-l*u,e[t+1]=c*_+h*u+l*d-a*m,e[t+2]=l*_+h*m+a*u-c*d,e[t+3]=h*_-a*d-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),m=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d-u*m*_;break;case"YXZ":this._x=u*h*d+l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d+u*m*_;break;case"ZXY":this._x=u*h*d-l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d-u*m*_;break;case"ZYX":this._x=u*h*d-l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d+u*m*_;break;case"YZX":this._x=u*h*d+l*m*_,this._y=l*m*d+u*h*_,this._z=l*h*_-u*m*d,this._w=l*h*d-u*m*_;break;case"XZY":this._x=u*h*d-l*m*_,this._y=l*m*d-u*h*_,this._z=l*h*_+u*m*d,this._w=l*h*d+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],u=n+a+d;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>d){const m=2*Math.sqrt(1+n-a-d);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>d){const m=2*Math.sqrt(1+a-n-d);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new D,mc=new Ui;class Ke{constructor(e,t,n,s,r,o,a,c,l){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],m=n[5],_=n[8],v=s[0],g=s[3],p=s[6],S=s[1],M=s[4],x=s[7],y=s[2],b=s[5],T=s[8];return r[0]=o*v+a*S+c*y,r[3]=o*g+a*M+c*b,r[6]=o*p+a*x+c*T,r[1]=l*v+h*S+d*y,r[4]=l*g+h*M+d*b,r[7]=l*p+h*x+d*T,r[2]=u*v+m*S+_*y,r[5]=u*g+m*M+_*b,r[8]=u*p+m*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,u=a*c-h*r,m=l*r-o*c,_=t*d+n*u+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(s*l-h*n)*v,e[2]=(a*n-s*o)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-a*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new Ke;function Xh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function to(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){const i=to("canvas");return i.style.display="block",i}const gc={};function nr(i){i in gc||(gc[i]=!0,console.warn(i))}function uf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const _c=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){const i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ut&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:e,whitePoint:n,transfer:Qr,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}const lt=ff();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class pf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vi===void 0&&(Vi=to("canvas")),Vi.width=e.width,Vi.height=e.height;const s=Vi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=to("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Zn(t[n]/255)*255):t[n]=Zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mf=0;class Rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ro(s[o].image)):r.push(Ro(s[o]))}else r=Ro(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gf=0;const Co=new D;class Ht extends Bi{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,n=Ci,s=Ci,r=Cn,o=Pi,a=xn,c=Un,l=Ht.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=kn(),this.name="",this.source=new Rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=kh;Ht.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,n=0,s=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],m=c[5],_=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+g)<.1&&Math.abs(l+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(m+1)/2,y=(p+1)/2,b=(h+u)/4,T=(d+v)/4,C=(_+g)/4;return M>x&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=T/n):x>y?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=b/s,r=C/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=T/r,s=C/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-_)*(g-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(g-_)/S,this.y=(d-v)/S,this.z=(u-h)/S,this.w=Math.acos((l+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ht(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rl(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends _f{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class qh extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xf extends Ht{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(e.matrixWorld),this.expandByPoint(fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(e.matrixWorld),this.union(gr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fn),fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Is),_r.subVectors(this.max,Is),Gi.subVectors(e.a,Is),Wi.subVectors(e.b,Is),Xi.subVectors(e.c,Is),ti.subVectors(Wi,Gi),ni.subVectors(Xi,Wi),xi.subVectors(Gi,Xi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!Po(t,Gi,Wi,Xi,_r)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,Gi,Wi,Xi,_r))?!1:(xr.crossVectors(ti,ni),t=[xr.x,xr.y,xr.z],Po(t,Gi,Wi,Xi,_r))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,gr=new cr,Gi=new D,Wi=new D,Xi=new D,ti=new D,ni=new D,xi=new D,Is=new D,_r=new D,xr=new D,vi=new D;function Po(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){vi.fromArray(i,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=e.dot(vi),l=t.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const vf=new cr,Ds=new D,Lo=new D;class Cl{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ds.subVectors(e,this.center);const t=Ds.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ds.copy(e.center).add(Lo)),this.expandByPoint(Ds.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new D,Io=new D,vr=new D,ii=new D,Do=new D,yr=new D,ko=new D;class Jh{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Io.copy(e).add(t).multiplyScalar(.5),vr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(Io);const r=e.distanceTo(t)*.5,o=-this.direction.dot(vr),a=ii.dot(this.direction),c=-ii.dot(vr),l=ii.lengthSq(),h=Math.abs(1-o*o);let d,u,m,_;if(h>0)if(d=o*c-a,u=o*a-c,_=r*h,d>=0)if(u>=-_)if(u<=_){const v=1/h;d*=v,u*=v,m=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),m=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Io).addScaledVector(vr,u),m}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,n,s,r){Do.subVectors(t,e),yr.subVectors(n,e),ko.crossVectors(Do,yr);let o=this.direction.dot(ko),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,e);const c=a*this.direction.dot(yr.crossVectors(ii,yr));if(c<0)return null;const l=a*this.direction.dot(Do.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(ko);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,t,n,s,r,o,a,c,l,h,d,u,m,_,v,g){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,d,u,m,_,v,g)}set(e,t,n,s,r,o,a,c,l,h,d,u,m,_,v,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=m,p[7]=_,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=o*h,m=o*d,_=a*h,v=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=m+_*l,t[5]=u-v*l,t[9]=-a*c,t[2]=v-u*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const u=c*h,m=c*d,_=l*h,v=l*d;t[0]=u+v*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=v+u*a,t[10]=o*c}else if(e.order==="ZXY"){const u=c*h,m=c*d,_=l*h,v=l*d;t[0]=u-v*a,t[4]=-o*d,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const u=o*h,m=o*d,_=a*h,v=a*d;t[0]=c*h,t[4]=_*l-m,t[8]=u*l+v,t[1]=c*d,t[5]=v*l+u,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const u=o*c,m=o*l,_=a*c,v=a*l;t[0]=c*h,t[4]=v-u*d,t[8]=_*d+m,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*d+_,t[10]=u-v*d}else if(e.order==="XZY"){const u=o*c,m=o*l,_=a*c,v=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=u*d+v,t[5]=o*h,t[9]=m*d-_,t[2]=_*d-m,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,Mf)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),si.crossVectors(n,jt),si.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),si.crossVectors(n,jt)),si.normalize(),Mr.crossVectors(jt,si),s[0]=si.x,s[4]=Mr.x,s[8]=jt.x,s[1]=si.y,s[5]=Mr.y,s[9]=jt.y,s[2]=si.z,s[6]=Mr.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],m=n[13],_=n[2],v=n[6],g=n[10],p=n[14],S=n[3],M=n[7],x=n[11],y=n[15],b=s[0],T=s[4],C=s[8],w=s[12],E=s[1],I=s[5],N=s[9],H=s[13],Z=s[2],X=s[6],Y=s[10],j=s[14],W=s[3],me=s[7],ye=s[11],be=s[15];return r[0]=o*b+a*E+c*Z+l*W,r[4]=o*T+a*I+c*X+l*me,r[8]=o*C+a*N+c*Y+l*ye,r[12]=o*w+a*H+c*j+l*be,r[1]=h*b+d*E+u*Z+m*W,r[5]=h*T+d*I+u*X+m*me,r[9]=h*C+d*N+u*Y+m*ye,r[13]=h*w+d*H+u*j+m*be,r[2]=_*b+v*E+g*Z+p*W,r[6]=_*T+v*I+g*X+p*me,r[10]=_*C+v*N+g*Y+p*ye,r[14]=_*w+v*H+g*j+p*be,r[3]=S*b+M*E+x*Z+y*W,r[7]=S*T+M*I+x*X+y*me,r[11]=S*C+M*N+x*Y+y*ye,r[15]=S*w+M*H+x*j+y*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],m=e[14],_=e[3],v=e[7],g=e[11],p=e[15];return _*(+r*c*d-s*l*d-r*a*u+n*l*u+s*a*m-n*c*m)+v*(+t*c*m-t*l*u+r*o*u-s*o*m+s*l*h-r*c*h)+g*(+t*l*d-t*a*m-r*o*d+n*o*m+r*a*h-n*l*h)+p*(-s*a*h-t*c*d+t*a*u+s*o*d-n*o*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],m=e[11],_=e[12],v=e[13],g=e[14],p=e[15],S=d*g*l-v*u*l+v*c*m-a*g*m-d*c*p+a*u*p,M=_*u*l-h*g*l-_*c*m+o*g*m+h*c*p-o*u*p,x=h*v*l-_*d*l+_*a*m-o*v*m-h*a*p+o*d*p,y=_*d*c-h*v*c-_*a*u+o*v*u+h*a*g-o*d*g,b=t*S+n*M+s*x+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=S*T,e[1]=(v*u*r-d*g*r-v*s*m+n*g*m+d*s*p-n*u*p)*T,e[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*T,e[3]=(d*c*r-a*u*r-d*s*l+n*u*l+a*s*m-n*c*m)*T,e[4]=M*T,e[5]=(h*g*r-_*u*r+_*s*m-t*g*m-h*s*p+t*u*p)*T,e[6]=(_*c*r-o*g*r-_*s*l+t*g*l+o*s*p-t*c*p)*T,e[7]=(o*u*r-h*c*r+h*s*l-t*u*l-o*s*m+t*c*m)*T,e[8]=x*T,e[9]=(_*d*r-h*v*r-_*n*m+t*v*m+h*n*p-t*d*p)*T,e[10]=(o*v*r-_*a*r+_*n*l-t*v*l-o*n*p+t*a*p)*T,e[11]=(h*a*r-o*d*r-h*n*l+t*d*l+o*n*m-t*a*m)*T,e[12]=y*T,e[13]=(h*v*s-_*d*s+_*n*u-t*v*u-h*n*g+t*d*g)*T,e[14]=(_*a*s-o*v*s-_*n*c+t*v*c+o*n*g-t*a*g)*T,e[15]=(o*d*s-h*a*s+h*n*c-t*d*c-o*n*u+t*a*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,d=a+a,u=r*l,m=r*h,_=r*d,v=o*h,g=o*d,p=a*d,S=c*l,M=c*h,x=c*d,y=n.x,b=n.y,T=n.z;return s[0]=(1-(v+p))*y,s[1]=(m+x)*y,s[2]=(_-M)*y,s[3]=0,s[4]=(m-x)*b,s[5]=(1-(u+p))*b,s[6]=(g+S)*b,s[7]=0,s[8]=(_+M)*T,s[9]=(g-S)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],pn.copy(this);const l=1/r,h=1/o,d=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,t.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Pn,c=!1){const l=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),m=(n+s)/(n-s);let _,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===Pn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===eo)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Pn,c=!1){const l=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),m=-(n+s)/(n-s);let _,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===Pn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===eo)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new D,pn=new xt,yf=new D(0,0,0),Mf=new D(1,1,1),si=new D,Mr=new D,jt=new D,vc=new xt,yc=new Ui;class Nn{constructor(e=0,t=0,n=0,s=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const Mc=new D,Ji=new Ui,Hn=new xt,Sr=new D,ks=new D,Ef=new D,bf=new Ui,Sc=new D(1,0,0),Ec=new D(0,1,0),bc=new D(0,0,1),wc={type:"added"},wf={type:"removed"},$i={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Ut extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new D,t=new Nn,n=new Ui,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ke}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(Sc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return Mc.copy(e).applyQuaternion(this.quaternion),this.position.add(Mc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(ks,Sr,this.up):Hn.lookAt(Sr,ks,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Hn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wc),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wf),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wc),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,e,Ef),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ut.DEFAULT_UP=new D(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,Vn=new D,No=new D,Gn=new D,Yi=new D,Zi=new D,Tc=new D,Fo=new D,Oo=new D,Bo=new D,zo=new gt,Ho=new gt,Vo=new gt;class dn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Vn.subVectors(n,t),No.subVectors(e,t);const o=mn.dot(mn),a=mn.dot(Vn),c=mn.dot(No),l=Vn.dot(Vn),h=Vn.dot(No),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,m=(l*c-a*h)*u,_=(o*h-a*c)*u;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return zo.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),zo.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Vo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zo,r.x),o.addScaledVector(Ho,r.y),o.addScaledVector(Vo,r.z),o}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Vn.subVectors(e,t),mn.cross(Vn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),mn.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return dn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Yi.subVectors(s,n),Zi.subVectors(r,n),Fo.subVectors(e,n);const c=Yi.dot(Fo),l=Zi.dot(Fo);if(c<=0&&l<=0)return t.copy(n);Oo.subVectors(e,s);const h=Yi.dot(Oo),d=Zi.dot(Oo);if(h>=0&&d<=h)return t.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Yi,o);Bo.subVectors(e,r);const m=Yi.dot(Bo),_=Zi.dot(Bo);if(_>=0&&m<=_)return t.copy(r);const v=m*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Zi,a);const g=h*_-m*d;if(g<=0&&d-h>=0&&m-_>=0)return Tc.subVectors(r,s),a=(d-h)/(d-h+(m-_)),t.copy(s).addScaledVector(Tc,a);const p=1/(g+v+u);return o=v*p,a=u*p,t.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Al(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Go(o,r,e+1/3),this.g=Go(o,r,e),this.b=Go(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Yh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return lt.workingToColorSpace(Ft.copy(this),e),Math.round(Qe(Ft.r*255,0,255))*65536+Math.round(Qe(Ft.g*255,0,255))*256+Math.round(Qe(Ft.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Ft.copy(this),t);const n=Ft.r,s=Ft.g,r=Ft.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=yt){lt.workingToColorSpace(Ft.copy(this),e);const t=Ft.r,n=Ft.g,s=Ft.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(Er);const n=Xs(ri.h,Er.h,t),s=Xs(ri.s,Er.s,t),r=Xs(ri.l,Er.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new tt;tt.NAMES=Yh;let Tf=0;class As extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=hs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=fa,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==fa&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ot extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new D,br=new ue;let Af=0;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}}class Zh extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jh extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ye extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Rf=0;const rn=new xt,Wo=new Ut,ji=new D,Kt=new cr,Us=new cr,kt=new D;class _t extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xh(e)?jh:Zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return Wo.lookAt(e),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Kt.min,Us.min),Kt.expandByPoint(kt),kt.addVectors(Kt.max,Us.max),Kt.expandByPoint(kt)):(Kt.expandByPoint(Us.min),Kt.expandByPoint(Us.max))}Kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)kt.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(e,l),kt.add(ji)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new D,c[C]=new D;const l=new D,h=new D,d=new D,u=new ue,m=new ue,_=new ue,v=new D,g=new D;function p(C,w,E){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,E),u.fromBufferAttribute(r,C),m.fromBufferAttribute(r,w),_.fromBufferAttribute(r,E),h.sub(l),d.sub(l),m.sub(u),_.sub(u);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(I),g.copy(d).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(I),a[C].add(v),a[w].add(v),a[E].add(v),c[C].add(g),c[w].add(g),c[E].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let C=0,w=S.length;C<w;++C){const E=S[C],I=E.start,N=E.count;for(let H=I,Z=I+N;H<Z;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new D,x=new D,y=new D,b=new D;function T(C){y.fromBufferAttribute(s,C),b.copy(y);const w=a[C];M.copy(w),M.sub(y.multiplyScalar(y.dot(w))).normalize(),x.crossVectors(b,w);const I=x.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,I)}for(let C=0,w=S.length;C<w;++C){const E=S[C],I=E.start,N=E.count;for(let H=I,Z=I+N;H<Z;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,d=new D;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let m=0,_=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*h;for(let p=0;p<h;p++)u[_++]=l[m++]}return new Sn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const m=l[d];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,m=d.length;u<m;u++)h.push(d[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new xt,yi=new Jh,wr=new Cl,Rc=new D,Tr=new D,Ar=new D,Rr=new D,Xo=new D,Cr=new D,Cc=new D,Pr=new D;class de extends Ut{constructor(e=new _t,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Xo.fromBufferAttribute(d,e),o?Cr.addScaledVector(Xo,h):Cr.addScaledVector(Xo.sub(t),h))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),yi.copy(e.ray).recast(e.near),!(wr.containsPoint(yi.origin)===!1&&(yi.intersectSphere(wr,Rc)===null||yi.origin.distanceToSquared(Rc)>(e.far-e.near)**2))&&(Ac.copy(r).invert(),yi.copy(e.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const g=u[_],p=o[g.materialIndex],S=Math.max(g.start,m.start),M=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let x=S,y=M;x<y;x+=3){const b=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);s=Lr(this,p,e,n,l,h,d,b,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const S=a.getX(g),M=a.getX(g+1),x=a.getX(g+2);s=Lr(this,o,e,n,l,h,d,S,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=u.length;_<v;_++){const g=u[_],p=o[g.materialIndex],S=Math.max(g.start,m.start),M=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let x=S,y=M;x<y;x+=3){const b=x,T=x+1,C=x+2;s=Lr(this,p,e,n,l,h,d,b,T,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let g=_,p=v;g<p;g+=3){const S=g,M=g+1,x=g+2;s=Lr(this,o,e,n,l,h,d,S,M,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function Cf(i,e,t,n,s,r,o,a){let c;if(e.side===$t?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===fi,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Pr);return l<t.near||l>t.far?null:{distance:l,point:Pr.clone(),object:i}}function Lr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Tr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,Rr);const h=Cf(i,e,t,n,Tr,Ar,Rr,Cc);if(h){const d=new D;dn.getBarycoord(Cc,Tr,Ar,Rr,d),s&&(h.uv=dn.getInterpolatedAttribute(s,a,c,l,d,new ue)),r&&(h.uv1=dn.getInterpolatedAttribute(r,a,c,l,d,new ue)),o&&(h.normal=dn.getInterpolatedAttribute(o,a,c,l,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new D,materialIndex:0};dn.getNormal(Tr,Ar,Rr,u.normal),h.face=u,h.barycoord=d}return h}class Xe extends _t{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,s,o,2),_("x","z","y",1,-1,e,n,-t,s,o,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function _(v,g,p,S,M,x,y,b,T,C,w){const E=x/T,I=y/C,N=x/2,H=y/2,Z=b/2,X=T+1,Y=C+1;let j=0,W=0;const me=new D;for(let ye=0;ye<Y;ye++){const be=ye*I-H;for(let Be=0;Be<X;Be++){const Je=Be*E-N;me[v]=Je*S,me[g]=be*M,me[p]=Z,l.push(me.x,me.y,me.z),me[v]=0,me[g]=0,me[p]=b>0?1:-1,h.push(me.x,me.y,me.z),d.push(Be/T),d.push(1-ye/C),j+=1}}for(let ye=0;ye<C;ye++)for(let be=0;be<T;be++){const Be=u+be+X*ye,Je=u+be+X*(ye+1),nt=u+(be+1)+X*(ye+1),Ze=u+(be+1)+X*ye;c.push(Be,Je,Ze),c.push(Je,nt,Ze),W+=6}a.addGroup(m,W,w),m+=W,u+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xe(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ys(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=ys(i[t]);for(const s in n)e[s]=n[s]}return e}function Pf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kh(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Qh={clone:ys,merge:Wt};var Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ys(e.uniforms),this.uniformsGroups=Pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ed extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new D,Pc=new ue,Lc=new ue;class Bt extends ed{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,Pc,Lc),t.subVectors(Lc,Pc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ki=-90,Qi=1;class Df extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(Ki,Qi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(Ki,Qi,e,t);r.layers=this.layers,this.add(r);const o=new Bt(Ki,Qi,e,t);o.layers=this.layers,this.add(o);const a=new Bt(Ki,Qi,e,t);a.layers=this.layers,this.add(a);const c=new Bt(Ki,Qi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(Ki,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===eo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,u,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class td extends Ht{constructor(e=[],t=_s,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kf extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new td(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xe(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:di});r.uniforms.tEquirect.value=t;const o=new de(s,r),a=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Cn),new Df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class je extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Uf={type:"move"};class qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Uf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Pl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new tt(e),this.near=t,this.far=n}clone(){return new Pl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Nf extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ff{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ka,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new D;class no{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=_n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new no(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ll extends As{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let es;const Ns=new D,ts=new D,ns=new D,is=new ue,Fs=new ue,nd=new xt,Ir=new D,Os=new D,Dr=new D,Ic=new ue,Jo=new ue,Dc=new ue;class id extends Ut{constructor(e=new Ll){if(super(),this.isSprite=!0,this.type="Sprite",es===void 0){es=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ff(t,5);es.setIndex([0,1,2,0,2,3]),es.setAttribute("position",new no(n,3,0,!1)),es.setAttribute("uv",new no(n,2,3,!1))}this.geometry=es,this.material=e,this.center=new ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),nd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-ns.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;kr(Ir.set(-.5,-.5,0),ns,o,ts,s,r),kr(Os.set(.5,-.5,0),ns,o,ts,s,r),kr(Dr.set(.5,.5,0),ns,o,ts,s,r),Ic.set(0,0),Jo.set(1,0),Dc.set(1,1);let a=e.ray.intersectTriangle(Ir,Os,Dr,!1,Ns);if(a===null&&(kr(Os.set(-.5,.5,0),ns,o,ts,s,r),Jo.set(0,1),a=e.ray.intersectTriangle(Ir,Dr,Os,!1,Ns),a===null))return;const c=e.ray.origin.distanceTo(Ns);c<e.near||c>e.far||t.push({distance:c,point:Ns.clone(),uv:dn.getInterpolation(Ns,Ir,Os,Dr,Ic,Jo,Dc,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kr(i,e,t,n,s,r){is.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*is.x-s*is.y,Fs.y=s*is.x+r*is.y):Fs.copy(is),i.copy(e),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(nd)}const $o=new D,Of=new D,Bf=new Ke;class Jn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=$o.subVectors(n,t).cross(Of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),s=this.coplanarPoint($o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Cl,zf=new ue(.5,.5),Ur=new D;class Il{constructor(e=new Jn,t=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],m=r[7],_=r[8],v=r[9],g=r[10],p=r[11],S=r[12],M=r[13],x=r[14],y=r[15];if(s[0].setComponents(l-o,m-h,p-_,y-S).normalize(),s[1].setComponents(l+o,m+h,p+_,y+S).normalize(),s[2].setComponents(l+a,m+d,p+v,y+M).normalize(),s[3].setComponents(l-a,m-d,p-v,y-M).normalize(),n)s[4].setComponents(c,u,g,x).normalize(),s[5].setComponents(l-c,m-u,p-g,y-x).normalize();else if(s[4].setComponents(l-c,m-u,p-g,y-x).normalize(),t===Pn)s[5].setComponents(l+c,m+u,p+g,y+x).normalize();else if(t===eo)s[5].setComponents(c,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);const t=zf.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Ur.x=s.normal.x>0?e.max.x:e.min.x,Ur.y=s.normal.y>0?e.max.y:e.min.y,Ur.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gn extends Ht{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sd extends Ht{constructor(e,t,n=ki,s,r,o,a=Mn,c=Mn,l,h=Qs,d=1){if(h!==Qs&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rd extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Di extends _t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new ue;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const m=n+d/t*s;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ot extends _t{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],m=[];let _=0;const v=[],g=n/2;let p=0;S(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(m,2));function S(){const x=new D,y=new D;let b=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const w=[],E=C/r,I=E*(t-e)+e;for(let N=0;N<=s;N++){const H=N/s,Z=H*c+a,X=Math.sin(Z),Y=Math.cos(Z);y.x=I*X,y.y=-E*n+g,y.z=I*Y,d.push(y.x,y.y,y.z),x.set(X,T,Y).normalize(),u.push(x.x,x.y,x.z),m.push(H,1-E),w.push(_++)}v.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){const E=v[w][C],I=v[w+1][C],N=v[w+1][C+1],H=v[w][C+1];(e>0||w!==0)&&(h.push(E,I,H),b+=3),(t>0||w!==r-1)&&(h.push(I,N,H),b+=3)}l.addGroup(p,b,0),p+=b}function M(x){const y=_,b=new ue,T=new D;let C=0;const w=x===!0?e:t,E=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,g*E,0),u.push(0,E,0),m.push(.5,.5),_++;const I=_;for(let N=0;N<=s;N++){const Z=N/s*c+a,X=Math.cos(Z),Y=Math.sin(Z);T.x=w*Y,T.y=g*E,T.z=w*X,d.push(T.x,T.y,T.z),u.push(0,E,0),b.x=X*.5+.5,b.y=Y*.5*E+.5,m.push(b.x,b.y),_++}for(let N=0;N<s;N++){const H=y+N,Z=I+N;x===!0?h.push(Z,Z+1,H):h.push(Z+1,Z,H),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ot(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class us extends ot{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dl extends _t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new D,x=new D,y=new D;for(let b=0;b<t.length;b+=3)m(t[b+0],M),m(t[b+1],x),m(t[b+2],y),c(M,x,y,S)}function c(S,M,x,y){const b=y+1,T=[];for(let C=0;C<=b;C++){T[C]=[];const w=S.clone().lerp(x,C/b),E=M.clone().lerp(x,C/b),I=b-C;for(let N=0;N<=I;N++)N===0&&C===b?T[C][N]=w:T[C][N]=w.clone().lerp(E,N/I)}for(let C=0;C<b;C++)for(let w=0;w<2*(b-C)-1;w++){const E=Math.floor(w/2);w%2===0?(u(T[C][E+1]),u(T[C+1][E]),u(T[C][E])):(u(T[C][E+1]),u(T[C+1][E+1]),u(T[C+1][E]))}}function l(S){const M=new D;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(S),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const S=new D;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const x=g(S)/2/Math.PI+.5,y=p(S)/Math.PI+.5;o.push(x,1-y)}_(),d()}function d(){for(let S=0;S<o.length;S+=6){const M=o[S+0],x=o[S+2],y=o[S+4],b=Math.max(M,x,y),T=Math.min(M,x,y);b>.9&&T<.1&&(M<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),y<.2&&(o[S+4]+=1))}}function u(S){r.push(S.x,S.y,S.z)}function m(S,M){const x=S*3;M.x=e[x+0],M.y=e[x+1],M.z=e[x+2]}function _(){const S=new D,M=new D,x=new D,y=new D,b=new ue,T=new ue,C=new ue;for(let w=0,E=0;w<r.length;w+=9,E+=6){S.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),y.copy(S).add(M).add(x).divideScalar(3);const I=g(y);v(b,E+0,S,I),v(T,E+2,M,I),v(C,E+4,x,I)}}function v(S,M,x,y){y<0&&S.x===1&&(o[M]=S.x-1),x.x===0&&x.z===0&&(o[M]=y/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dl(e.vertices,e.indices,e.radius,e.details)}}class kl extends Dl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,m=(o-h)/u;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ue:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new D,s=[],r=[],o=[],a=new D,c=new xt;for(let m=0;m<=e;m++){const _=m/e;s[m]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Qe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(a,_))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Qe(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let _=1;_<=e;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],m*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ul extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ue){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,m=l-this.aY;c=u*h-m*d+this.aX,l=u*d+m*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hf extends Ul{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,m=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,m*=h,s(o,a,u,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Nr=new D,Yo=new Nl,Zo=new Nl,jo=new Nl;class mo extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Nr.subVectors(s[0],s[1]).add(s[0]),l=Nr);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Nr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(u),m),g=Math.pow(u.distanceToSquared(h),m);v<1e-4&&(v=1),_<1e-4&&(_=v),g<1e-4&&(g=v),Yo.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,_,v,g),Zo.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,_,v,g),jo.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,_,v,g)}else this.curveType==="catmullrom"&&(Yo.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Zo.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),jo.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(Yo.calc(c),Zo.calc(c),jo.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function kc(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function Vf(i,e){const t=1-i;return t*t*e}function Gf(i,e){return 2*(1-i)*i*e}function Wf(i,e){return i*i*e}function qs(i,e,t,n){return Vf(i,e)+Gf(i,t)+Wf(i,n)}function Xf(i,e){const t=1-i;return t*t*t*e}function qf(i,e){const t=1-i;return 3*t*t*i*e}function Jf(i,e){return 3*(1-i)*i*i*e}function $f(i,e){return i*i*i*e}function Js(i,e,t,n,s){return Xf(i,e)+qf(i,t)+Jf(i,n)+$f(i,s)}class od extends Fn{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Js(e,s.x,r.x,o.x,a.x),Js(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yf extends Fn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Js(e,s.x,r.x,o.x,a.x),Js(e,s.y,r.y,o.y,a.y),Js(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ad extends Fn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zf extends Fn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ld extends Fn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(e,s.x,r.x,o.x),qs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cd extends Fn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(qs(e,s.x,r.x,o.x),qs(e,s.y,r.y,o.y),qs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hd extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(kc(a,c.x,l.x,h.x,d.x),kc(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var io=Object.freeze({__proto__:null,ArcCurve:Hf,CatmullRomCurve3:mo,CubicBezierCurve:od,CubicBezierCurve3:Yf,EllipseCurve:Ul,LineCurve:ad,LineCurve3:Zf,QuadraticBezierCurve:ld,QuadraticBezierCurve3:cd,SplineCurve:hd});class jf extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new io[s.type]().fromJSON(s))}return this}}class Uc extends jf{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ad(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new ld(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new od(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new hd(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ul(e,t,n,s,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class fs extends Uc{constructor(e){super(e),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Uc().fromJSON(s))}return this}}function Kf(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=dd(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=ip(i,e,r,t)),i.length>80*t){a=1/0,c=1/0;let h=-1/0,d=-1/0;for(let u=t;u<s;u+=t){const m=i[u],_=i[u+1];m<a&&(a=m),_<c&&(c=_),m>h&&(h=m),_>d&&(d=_)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return ir(r,o,t,a,c,l,0),o}function dd(i,e,t,n,s){let r;if(s===pp(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Nc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Nc(o/n|0,i[o],i[o+1],r);return r&&Ms(r,r.next)&&(rr(r),r=r.next),r}function Ni(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ms(t,t.next)||wt(t.prev,t,t.next)===0)){if(rr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ir(i,e,t,n,s,r,o){if(!i)return;!o&&r&&lp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?ep(i,n,s,r):Qf(i)){e.push(c.i,i.i,l.i),rr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=tp(Ni(i),e),ir(i,e,t,n,s,r,2)):o===2&&np(i,e,t,n,s,r):ir(Ni(i),e,t,n,s,r,1);break}}}function Qf(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),m=Math.max(a,c,l);let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=u&&_.y>=d&&_.y<=m&&zs(s,a,r,c,o,l,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ep(i,e,t,n){const s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,m=Math.min(a,c,l),_=Math.min(h,d,u),v=Math.max(a,c,l),g=Math.max(h,d,u),p=Qa(m,_,e,t,n),S=Qa(v,g,e,t,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=p&&x&&x.z<=S;){if(M.x>=m&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&zs(a,h,c,d,l,u,M.x,M.y)&&wt(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=m&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==o&&zs(a,h,c,d,l,u,x.x,x.y)&&wt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=p;){if(M.x>=m&&M.x<=v&&M.y>=_&&M.y<=g&&M!==s&&M!==o&&zs(a,h,c,d,l,u,M.x,M.y)&&wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=S;){if(x.x>=m&&x.x<=v&&x.y>=_&&x.y<=g&&x!==s&&x!==o&&zs(a,h,c,d,l,u,x.x,x.y)&&wt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tp(i,e){let t=i;do{const n=t.prev,s=t.next.next;!Ms(n,s)&&fd(n,t,t.next,s)&&sr(n,s)&&sr(s,n)&&(e.push(n.i,t.i,s.i),rr(t),rr(t.next),t=i=s),t=t.next}while(t!==i);return Ni(t)}function np(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&dp(o,a)){let c=pd(o,a);o=Ni(o,o.next),c=Ni(c,c.next),ir(o,e,t,n,s,r,0),ir(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ip(i,e,t,n){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=dd(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(hp(l))}s.sort(sp);for(let r=0;r<s.length;r++)t=rp(s[r],t);return t}function sp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function rp(i,e){const t=op(i,e);if(!t)return e;const n=pd(t,i);return Ni(n,n.next),Ni(t,t.next)}function op(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,o;if(Ms(i,t))return t;do{if(Ms(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&ud(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const d=Math.abs(s-t.y)/(n-t.x);sr(t,i)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&ap(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function ap(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function lp(i,e,t,n){let s=i;do s.z===0&&(s.z=Qa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,cp(s)}function cp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Qa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function hp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ud(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function zs(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&ud(i,e,t,n,s,r,o,a)}function dp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!up(i,e)&&(sr(i,e)&&sr(e,i)&&fp(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Ms(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ms(i,e){return i.x===e.x&&i.y===e.y}function fd(i,e,t,n){const s=Or(wt(i,e,t)),r=Or(wt(i,e,n)),o=Or(wt(t,n,i)),a=Or(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&Fr(i,t,e)||r===0&&Fr(i,n,e)||o===0&&Fr(t,i,n)||a===0&&Fr(t,e,n))}function Fr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Or(i){return i>0?1:i<0?-1:0}function up(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&fd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function sr(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function fp(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function pd(i,e){const t=el(i.i,i.x,i.y),n=el(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Nc(i,e,t,n){const s=el(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function pp(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class mp{static triangulate(e,t,n=2){return Kf(e,t,n)}}class Yn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Yn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Fc(e),Oc(n,e);let o=e.length;t.forEach(Fc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Oc(n,t[c]);const a=mp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Fc(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Oc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class or extends _t{constructor(e=new fs([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:m-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:gp;let M,x=!1,y,b,T,C;p&&(M=p.getSpacedPoints(h),x=!0,u=!1,y=p.computeFrenetFrames(h,!1),b=new D,T=new D,C=new D),u||(g=0,m=0,_=0,v=0);const w=a.extractPoints(l);let E=w.shape;const I=w.holes;if(!Yn.isClockWise(E)){E=E.reverse();for(let oe=0,re=I.length;oe<re;oe++){const ie=I[oe];Yn.isClockWise(ie)&&(I[oe]=ie.reverse())}}function H(oe){const ie=10000000000000001e-36;let U=oe[0];for(let q=1;q<=oe.length;q++){const G=q%oe.length,ee=oe[G],se=ee.x-U.x,he=ee.y-U.y,R=se*se+he*he,f=Math.max(Math.abs(ee.x),Math.abs(ee.y),Math.abs(U.x),Math.abs(U.y)),P=ie*f*f;if(R<=P){oe.splice(G,1),q--;continue}U=ee}}H(E),I.forEach(H);const Z=I.length,X=E;for(let oe=0;oe<Z;oe++){const re=I[oe];E=E.concat(re)}function Y(oe,re,ie){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(re,ie)}const j=E.length;function W(oe,re,ie){let U,q,G;const ee=oe.x-re.x,se=oe.y-re.y,he=ie.x-oe.x,R=ie.y-oe.y,f=ee*ee+se*se,P=ee*R-se*he;if(Math.abs(P)>Number.EPSILON){const L=Math.sqrt(f),B=Math.sqrt(he*he+R*R),O=re.x-se/L,ce=re.y+ee/L,te=ie.x-R/B,Se=ie.y+he/B,fe=((te-O)*R-(Se-ce)*he)/(ee*R-se*he);U=O+ee*fe-oe.x,q=ce+se*fe-oe.y;const K=U*U+q*q;if(K<=2)return new ue(U,q);G=Math.sqrt(K/2)}else{let L=!1;ee>Number.EPSILON?he>Number.EPSILON&&(L=!0):ee<-Number.EPSILON?he<-Number.EPSILON&&(L=!0):Math.sign(se)===Math.sign(R)&&(L=!0),L?(U=-se,q=ee,G=Math.sqrt(f)):(U=ee,q=se,G=Math.sqrt(f/2))}return new ue(U/G,q/G)}const me=[];for(let oe=0,re=X.length,ie=re-1,U=oe+1;oe<re;oe++,ie++,U++)ie===re&&(ie=0),U===re&&(U=0),me[oe]=W(X[oe],X[ie],X[U]);const ye=[];let be,Be=me.concat();for(let oe=0,re=Z;oe<re;oe++){const ie=I[oe];be=[];for(let U=0,q=ie.length,G=q-1,ee=U+1;U<q;U++,G++,ee++)G===q&&(G=0),ee===q&&(ee=0),be[U]=W(ie[U],ie[G],ie[ee]);ye.push(be),Be=Be.concat(be)}let Je;if(g===0)Je=Yn.triangulateShape(X,I);else{const oe=[],re=[];for(let ie=0;ie<g;ie++){const U=ie/g,q=m*Math.cos(U*Math.PI/2),G=_*Math.sin(U*Math.PI/2)+v;for(let ee=0,se=X.length;ee<se;ee++){const he=Y(X[ee],me[ee],G);we(he.x,he.y,-q),U===0&&oe.push(he)}for(let ee=0,se=Z;ee<se;ee++){const he=I[ee];be=ye[ee];const R=[];for(let f=0,P=he.length;f<P;f++){const L=Y(he[f],be[f],G);we(L.x,L.y,-q),U===0&&R.push(L)}U===0&&re.push(R)}}Je=Yn.triangulateShape(oe,re)}const nt=Je.length,Ze=_+v;for(let oe=0;oe<j;oe++){const re=u?Y(E[oe],Be[oe],Ze):E[oe];x?(T.copy(y.normals[0]).multiplyScalar(re.x),b.copy(y.binormals[0]).multiplyScalar(re.y),C.copy(M[0]).add(T).add(b),we(C.x,C.y,C.z)):we(re.x,re.y,0)}for(let oe=1;oe<=h;oe++)for(let re=0;re<j;re++){const ie=u?Y(E[re],Be[re],Ze):E[re];x?(T.copy(y.normals[oe]).multiplyScalar(ie.x),b.copy(y.binormals[oe]).multiplyScalar(ie.y),C.copy(M[oe]).add(T).add(b),we(C.x,C.y,C.z)):we(ie.x,ie.y,d/h*oe)}for(let oe=g-1;oe>=0;oe--){const re=oe/g,ie=m*Math.cos(re*Math.PI/2),U=_*Math.sin(re*Math.PI/2)+v;for(let q=0,G=X.length;q<G;q++){const ee=Y(X[q],me[q],U);we(ee.x,ee.y,d+ie)}for(let q=0,G=I.length;q<G;q++){const ee=I[q];be=ye[q];for(let se=0,he=ee.length;se<he;se++){const R=Y(ee[se],be[se],U);x?we(R.x,R.y+M[h-1].y,M[h-1].x+ie):we(R.x,R.y,d+ie)}}}ne(),le();function ne(){const oe=s.length/3;if(u){let re=0,ie=j*re;for(let U=0;U<nt;U++){const q=Je[U];Ae(q[2]+ie,q[1]+ie,q[0]+ie)}re=h+g*2,ie=j*re;for(let U=0;U<nt;U++){const q=Je[U];Ae(q[0]+ie,q[1]+ie,q[2]+ie)}}else{for(let re=0;re<nt;re++){const ie=Je[re];Ae(ie[2],ie[1],ie[0])}for(let re=0;re<nt;re++){const ie=Je[re];Ae(ie[0]+j*h,ie[1]+j*h,ie[2]+j*h)}}n.addGroup(oe,s.length/3-oe,0)}function le(){const oe=s.length/3;let re=0;ge(X,re),re+=X.length;for(let ie=0,U=I.length;ie<U;ie++){const q=I[ie];ge(q,re),re+=q.length}n.addGroup(oe,s.length/3-oe,1)}function ge(oe,re){let ie=oe.length;for(;--ie>=0;){const U=ie;let q=ie-1;q<0&&(q=oe.length-1);for(let G=0,ee=h+g*2;G<ee;G++){const se=j*G,he=j*(G+1),R=re+U+se,f=re+q+se,P=re+q+he,L=re+U+he;He(R,f,P,L)}}}function we(oe,re,ie){c.push(oe),c.push(re),c.push(ie)}function Ae(oe,re,ie){it(oe),it(re),it(ie);const U=s.length/3,q=S.generateTopUV(n,s,U-3,U-2,U-1);k(q[0]),k(q[1]),k(q[2])}function He(oe,re,ie,U){it(oe),it(re),it(U),it(re),it(ie),it(U);const q=s.length/3,G=S.generateSideWallUV(n,s,q-6,q-3,q-2,q-1);k(G[0]),k(G[1]),k(G[3]),k(G[1]),k(G[2]),k(G[3])}function it(oe){s.push(c[oe*3+0]),s.push(c[oe*3+1]),s.push(c[oe*3+2])}function k(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _p(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new io[s.type]().fromJSON(s)),new or(n,e.options)}}const gp={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ue(r,o),new ue(a,c),new ue(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],m=e[s*3+1],_=e[s*3+2],v=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ue(o,1-c),new ue(l,1-d),new ue(u,1-_),new ue(v,1-p)]:[new ue(a,1-c),new ue(h,1-d),new ue(m,1-_),new ue(g,1-p)]}};function _p(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class zt extends _t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=e/a,u=t/c,m=[],_=[],v=[],g=[];for(let p=0;p<h;p++){const S=p*u-o;for(let M=0;M<l;M++){const x=M*d-r;_.push(x,-S,0),v.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const M=S+l*p,x=S+l*(p+1),y=S+1+l*(p+1),b=S+1+l*p;m.push(M,x,b),m.push(x,y,b)}this.setIndex(m),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zt(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ln extends _t{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=e;const u=(t-e)/s,m=new D,_=new ue;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*o;m.x=d*Math.cos(p),m.y=d*Math.sin(p),c.push(m.x,m.y,m.z),l.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,h.push(_.x,_.y)}d+=u}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const S=p+g,M=S,x=S+n+1,y=S+n+2,b=S+1;a.push(M,x,b),a.push(x,y,b)}}this.setIndex(a),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Fl extends _t{constructor(e=new fs([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(o,2));function l(h){const d=s.length/3,u=h.extractPoints(t);let m=u.shape;const _=u.holes;Yn.isClockWise(m)===!1&&(m=m.reverse());for(let g=0,p=_.length;g<p;g++){const S=_[g];Yn.isClockWise(S)===!0&&(_[g]=S.reverse())}const v=Yn.triangulateShape(m,_);for(let g=0,p=_.length;g<p;g++){const S=_[g];m=m.concat(S)}for(let g=0,p=m.length;g<p;g++){const S=m[g];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let g=0,p=v.length;g<p;g++){const S=v[g],M=S[0]+d,x=S[1]+d,y=S[2]+d;n.push(M,x,y),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xp(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Fl(n,e.curveSegments)}}function xp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class vn extends _t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new D,u=new D,m=[],_=[],v=[],g=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const b=y/t;d.x=-e*Math.cos(s+b*r)*Math.sin(o+M*a),d.y=e*Math.cos(o+M*a),d.z=e*Math.sin(s+b*r)*Math.sin(o+M*a),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),g.push(b+x,1-M),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){const M=h[p][S+1],x=h[p][S],y=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&m.push(M,x,b),(p!==n-1||c<Math.PI)&&m.push(x,y,b)}this.setIndex(m),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(v,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class In extends _t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,d=new D,u=new D;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){const v=_/s*r,g=m/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(_/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){const v=(s+1)*m+_-1,g=(s+1)*(m-1)+_-1,p=(s+1)*(m-1)+_,S=(s+1)*m+_;o.push(v,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hr extends _t{constructor(e=new cd(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ue;let h=new D;const d=[],u=[],m=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(u,3)),this.setAttribute("uv",new Ye(m,2));function v(){for(let M=0;M<t;M++)g(M);g(r===!1?t:0),S(),p()}function g(M){h=e.getPointAt(M/t,h);const x=o.normals[M],y=o.binormals[M];for(let b=0;b<=s;b++){const T=b/s*Math.PI*2,C=Math.sin(T),w=-Math.cos(T);c.x=w*x.x+C*y.x,c.y=w*x.y+C*y.y,c.z=w*x.z+C*y.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let x=1;x<=s;x++){const y=(s+1)*(M-1)+(x-1),b=(s+1)*M+(x-1),T=(s+1)*M+x,C=(s+1)*(M-1)+x;_.push(y,b,C),_.push(b,T,C)}}function S(){for(let M=0;M<=t;M++)for(let x=0;x<=s;x++)l.x=M/t,l.y=x/s,m.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hr(new io[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Re extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tl extends Re{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class vp extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yp extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class md extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mp extends md{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ko=new xt,Bc=new D,zc=new D;class Sp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),Ko.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ol extends ed{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ep extends Sp{constructor(){super(new Ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bp extends md{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Ep}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wp extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Hc{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tp extends Bi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vc(i,e,t,n){const s=Ap(n);switch(t){case Bh:return i*e;case Hh:return i*e/s.components*s.byteLength;case bl:return i*e/s.components*s.byteLength;case Vh:return i*e*2/s.components*s.byteLength;case wl:return i*e*2/s.components*s.byteLength;case zh:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Tl:return i*e*4/s.components*s.byteLength;case $r:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:case Aa:return Math.max(i,16)*Math.max(e,8)/4;case ba:case Ta:return Math.max(i,8)*Math.max(e,8)/2;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ia:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xa:case qa:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $a:case Ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Za:case ja:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ap(i){switch(i){case Un:case Uh:return{byteLength:1,components:1};case js:case Nh:case Ts:return{byteLength:2,components:1};case Sl:case El:return{byteLength:2,components:4};case ki:case Ml:case $n:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rp(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((m,_)=>m.start-_.start);let u=0;for(let m=1;m<d.length;m++){const _=d[u],v=d[m];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++u,d[u]=v)}d.length=u+1;for(let m=0,_=d.length;m<_;m++){const v=d[m];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pp=`#ifdef USE_ALPHAHASH
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
#endif`,Lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Op=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,im=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rm="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,hm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,_m=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#endif`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jm=`#ifdef USE_NORMALMAP
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
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,t0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`#include <common>
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
}`,U0=`#if DEPTH_PACKING == 3200
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
}`,N0=`#define DISTANCE
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
}`,F0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,q0=`#define MATCAP
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
}`,J0=`#define MATCAP
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
}`,$0=`#define NORMAL
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
}`,Y0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,j0=`#define PHONG
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
}`,K0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,eg=`#define TOON
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
}`,tg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,og=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:Cp,alphahash_pars_fragment:Pp,alphamap_fragment:Lp,alphamap_pars_fragment:Ip,alphatest_fragment:Dp,alphatest_pars_fragment:kp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:Op,begin_vertex:Bp,beginnormal_vertex:zp,bsdfs:Hp,iridescence_fragment:Vp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Jp,color_fragment:$p,color_pars_fragment:Yp,color_pars_vertex:Zp,color_vertex:jp,common:Kp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:em,displacementmap_pars_vertex:tm,displacementmap_vertex:nm,emissivemap_fragment:im,emissivemap_pars_fragment:sm,colorspace_fragment:rm,colorspace_pars_fragment:om,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:hm,envmap_physical_pars_fragment:Mm,envmap_vertex:dm,fog_vertex:um,fog_pars_vertex:fm,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:_m,lights_lambert_fragment:xm,lights_lambert_pars_fragment:vm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:Em,lights_phong_fragment:bm,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Pm,logdepthbuf_fragment:Lm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:km,map_fragment:Um,map_pars_fragment:Nm,map_particle_fragment:Fm,map_particle_pars_fragment:Om,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:zm,morphinstance_vertex:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Jm,normal_pars_fragment:$m,normal_pars_vertex:Ym,normal_vertex:Zm,normalmap_pars_fragment:jm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:e0,iridescence_pars_fragment:t0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:o0,dithering_pars_fragment:a0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:d0,shadowmap_vertex:u0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:_0,specularmap_fragment:x0,specularmap_pars_fragment:v0,tonemapping_fragment:y0,tonemapping_pars_fragment:M0,transmission_fragment:S0,transmission_pars_fragment:E0,uv_pars_fragment:b0,uv_pars_vertex:w0,uv_vertex:T0,worldpos_vertex:A0,background_vert:R0,background_frag:C0,backgroundCube_vert:P0,backgroundCube_frag:L0,cube_vert:I0,cube_frag:D0,depth_vert:k0,depth_frag:U0,distanceRGBA_vert:N0,distanceRGBA_frag:F0,equirect_vert:O0,equirect_frag:B0,linedashed_vert:z0,linedashed_frag:H0,meshbasic_vert:V0,meshbasic_frag:G0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:q0,meshmatcap_frag:J0,meshnormal_vert:$0,meshnormal_frag:Y0,meshphong_vert:Z0,meshphong_frag:j0,meshphysical_vert:K0,meshphysical_frag:Q0,meshtoon_vert:eg,meshtoon_frag:tg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:og,sprite_frag:ag},Ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},An={basic:{uniforms:Wt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Wt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Wt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Wt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Wt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Wt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Wt([Ce.points,Ce.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Wt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Wt([Ce.common,Ce.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Wt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Wt([Ce.sprite,Ce.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Wt([Ce.common,Ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Wt([Ce.lights,Ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};An.physical={uniforms:Wt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Br={r:0,b:0,g:0},Si=new Nn,lg=new xt;function cg(i,e,t,n,s,r,o){const a=new tt(0);let c=r===!0?0:1,l,h,d=null,u=0,m=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const y=_(M);y===null?p(a,c):y&&y.isColor&&(p(y,1),x=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(M,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===po)?(h===void 0&&(h=new de(new Xe(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:ys(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(x.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(Si)),h.material.toneMapped=lt.getTransfer(y.colorSpace)!==ut,(d!==y||u!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new de(new zt(2,2),new Kn({name:"BackgroundMaterial",uniforms:ys(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=lt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,u=y.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(Br,Kh(i)),n.buffers.color.setClear(Br.r,Br.g,Br.b,x,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:v,addToRenderList:g,dispose:S}}function hg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(E,I,N,H,Z){let X=!1;const Y=d(H,N,I);r!==Y&&(r=Y,l(r.object)),X=m(E,H,N,Z),X&&_(E,H,N,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(E,I,N,H),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,I,N){const H=N.wireframe===!0;let Z=n[E.id];Z===void 0&&(Z={},n[E.id]=Z);let X=Z[I.id];X===void 0&&(X={},Z[I.id]=X);let Y=X[H];return Y===void 0&&(Y=u(c()),X[H]=Y),Y}function u(E){const I=[],N=[],H=[];for(let Z=0;Z<t;Z++)I[Z]=0,N[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:H,object:E,attributes:{},index:null}}function m(E,I,N,H){const Z=r.attributes,X=I.attributes;let Y=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){const ye=Z[W];let be=X[W];if(be===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),ye===void 0||ye.attribute!==be||be&&ye.data!==be.data)return!0;Y++}return r.attributesNum!==Y||r.index!==H}function _(E,I,N,H){const Z={},X=I.attributes;let Y=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){let ye=X[W];ye===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor));const be={};be.attribute=ye,ye&&ye.data&&(be.data=ye.data),Z[W]=be,Y++}r.attributes=Z,r.attributesNum=Y,r.index=H}function v(){const E=r.newAttributes;for(let I=0,N=E.length;I<N;I++)E[I]=0}function g(E){p(E,0)}function p(E,I){const N=r.newAttributes,H=r.enabledAttributes,Z=r.attributeDivisors;N[E]=1,H[E]===0&&(i.enableVertexAttribArray(E),H[E]=1),Z[E]!==I&&(i.vertexAttribDivisor(E,I),Z[E]=I)}function S(){const E=r.newAttributes,I=r.enabledAttributes;for(let N=0,H=I.length;N<H;N++)I[N]!==E[N]&&(i.disableVertexAttribArray(N),I[N]=0)}function M(E,I,N,H,Z,X,Y){Y===!0?i.vertexAttribIPointer(E,I,N,Z,X):i.vertexAttribPointer(E,I,N,H,Z,X)}function x(E,I,N,H){v();const Z=H.attributes,X=N.getAttributes(),Y=I.defaultAttributeValues;for(const j in X){const W=X[j];if(W.location>=0){let me=Z[j];if(me===void 0&&(j==="instanceMatrix"&&E.instanceMatrix&&(me=E.instanceMatrix),j==="instanceColor"&&E.instanceColor&&(me=E.instanceColor)),me!==void 0){const ye=me.normalized,be=me.itemSize,Be=e.get(me);if(Be===void 0)continue;const Je=Be.buffer,nt=Be.type,Ze=Be.bytesPerElement,ne=nt===i.INT||nt===i.UNSIGNED_INT||me.gpuType===Ml;if(me.isInterleavedBufferAttribute){const le=me.data,ge=le.stride,we=me.offset;if(le.isInstancedInterleavedBuffer){for(let Ae=0;Ae<W.locationSize;Ae++)p(W.location+Ae,le.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)g(W.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Ae=0;Ae<W.locationSize;Ae++)M(W.location+Ae,be/W.locationSize,nt,ye,ge*Ze,(we+be/W.locationSize*Ae)*Ze,ne)}else{if(me.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)p(W.location+le,me.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let le=0;le<W.locationSize;le++)g(W.location+le);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let le=0;le<W.locationSize;le++)M(W.location+le,be/W.locationSize,nt,ye,be*Ze,be/W.locationSize*le*Ze,ne)}}else if(Y!==void 0){const ye=Y[j];if(ye!==void 0)switch(ye.length){case 2:i.vertexAttrib2fv(W.location,ye);break;case 3:i.vertexAttrib3fv(W.location,ye);break;case 4:i.vertexAttrib4fv(W.location,ye);break;default:i.vertexAttrib1fv(W.location,ye)}}}}S()}function y(){C();for(const E in n){const I=n[E];for(const N in I){const H=I[N];for(const Z in H)h(H[Z].object),delete H[Z];delete I[N]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const N in I){const H=I[N];for(const Z in H)h(H[Z].object),delete H[Z];delete I[N]}delete n[E.id]}function T(E){for(const I in n){const N=n[I];if(N[E.id]===void 0)continue;const H=N[E.id];for(const Z in H)h(H[Z].object),delete H[Z];delete N[E.id]}}function C(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function dg(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function a(l,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_];t.update(m,n,1)}function c(l,h,d,u){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<l.length;_++)o(l[_],h[_],u[_]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,d);let _=0;for(let v=0;v<d;v++)_+=h[v]*u[v];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function ug(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==xn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ts&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$n&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=_>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:y,maxSamples:b}}function fg(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Jn,a=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const m=d.length!==0||u||n!==0||s;return s=u,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,m){const _=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{const S=r?0:n,M=S*4;let x=p.clippingState||null;c.value=x,x=h(_,u,M,m);for(let y=0;y!==M;++y)x[y]=t[y];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,m,_){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,_!==!0||g===null){const p=m+v*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,x=m;M!==v;++M,x+=4)o.copy(d[M]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function pg(i){let e=new WeakMap;function t(o,a){return a===Ma?o.mapping=_s:a===Sa&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ma||a===Sa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new kf(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const as=4,Gc=[.125,.215,.35,.446,.526,.582],Ai=20,Qo=new Ol,Wc=new tt;let ea=null,ta=0,na=0,ia=!1;const wi=(1+Math.sqrt(5))/2,ss=1/wi,Xc=[new D(-wi,ss,0),new D(wi,ss,0),new D(-ss,0,wi),new D(ss,0,wi),new D(0,wi,-ss),new D(0,wi,ss),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],mg=new D;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=mg}=r;ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ea,ta,na),this._renderer.xr.enabled=ia,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ea=this._renderer.getRenderTarget(),ta=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ts,format:xn,colorSpace:vs,depthBuffer:!1},s=Jc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gg(r)),this._blurMaterial=_g(r,e,t)}return s}_compileMaterial(e){const t=new de(this._lodPlanes[0],e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,n,s,r){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,m=d.toneMapping;d.getClearColor(Wc),d.toneMapping=ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const v=new Ot({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),g=new de(new Xe,v);let p=!1;const S=e.background;S?S.isColor&&(v.color.copy(S),e.background=null,p=!0):(v.color.copy(Wc),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const y=this._cubeSize;zr(s,x*y,M>2?y:0,y,y),d.setRenderTarget(s),p&&d.render(g,c),d.render(e,c)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=m,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_s||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;zr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Qo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xc[(s-r-1)%Xc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new de(this._lodPlanes[s],l),u=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),v=r/_,g=isFinite(r)?1+Math.floor(h*v):Ai;g>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const p=[];let S=0;for(let T=0;T<Ai;++T){const C=T/v,w=Math.exp(-C*C/2);p.push(w),T===0?S+=w:T<g&&(S+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:M}=this;u.dTheta.value=_,u.mipInt.value=M-n;const x=this._sizeLods[s],y=3*x*(s>M-as?s-M+as:0),b=4*(this._cubeSize-x);zr(t,y,b,3*x,2*x),c.setRenderTarget(t),c.render(d,Qo)}}function gg(i){const e=[],t=[],n=[];let s=i;const r=i-as+1+Gc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-as?c=Gc[o-i+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,_=6,v=3,g=2,p=1,S=new Float32Array(v*_*m),M=new Float32Array(g*_*m),x=new Float32Array(p*_*m);for(let b=0;b<m;b++){const T=b%3*2/3-1,C=b>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(w,v*_*b),M.set(u,g*_*b);const E=[b,b,b,b,b,b];x.set(E,p*_*b)}const y=new _t;y.setAttribute("position",new Sn(S,v)),y.setAttribute("uv",new Sn(M,g)),y.setAttribute("faceIndex",new Sn(x,p)),e.push(y),s>as&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jc(i,e,t){const n=new pi(i,e,t);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _g(i,e,t){const n=new Float32Array(Ai),s=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function $c(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bl(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function Bl(){return`

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
	`}function xg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ma||c===Sa,h=c===_s||c===xs;if(l||h){let d=e.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new qc(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const m=a.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new qc(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function vg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,e,t,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)e.update(u[m],i.ARRAY_BUFFER)}function l(d){const u=[],m=d.index,_=d.attributes.position;let v=0;if(m!==null){const S=m.array;v=m.version;for(let M=0,x=S.length;M<x;M+=3){const y=S[M+0],b=S[M+1],T=S[M+2];u.push(y,b,b,T,T,y)}}else if(_!==void 0){const S=_.array;v=_.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const y=M+0,b=M+1,T=M+2;u.push(y,b,b,T,T,y)}}else return;const g=new(Xh(u)?jh:Zh)(u,1);g.version=v;const p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){const u=r.get(d);if(u){const m=d.index;m!==null&&u.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Mg(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*o),t.update(m,n,1)}function l(u,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,u*o,_),t.update(m,n,_))}function h(u,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,_);let g=0;for(let p=0;p<_;p++)g+=m[p];t.update(g,n,1)}function d(u,m,_,v){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)l(u[p]/o,m[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,v,0,_);let p=0;for(let S=0;S<_;S++)p+=m[S]*v[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Sg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Eg(i,e,t){const n=new WeakMap,s=new gt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var m=E;u!==void 0&&u.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let y=a.attributes.position.count*x,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*b*4*d),C=new qh(T,y,b,d);C.type=$n,C.needsUpdate=!0;const w=x*4;for(let I=0;I<d;I++){const N=p[I],H=S[I],Z=M[I],X=y*b*4*I;for(let Y=0;Y<N.count;Y++){const j=Y*w;_===!0&&(s.fromBufferAttribute(N,Y),T[X+j+0]=s.x,T[X+j+1]=s.y,T[X+j+2]=s.z,T[X+j+3]=0),v===!0&&(s.fromBufferAttribute(H,Y),T[X+j+4]=s.x,T[X+j+5]=s.y,T[X+j+6]=s.z,T[X+j+7]=0),g===!0&&(s.fromBufferAttribute(Z,Y),T[X+j+8]=s.x,T[X+j+9]=s.y,T[X+j+10]=s.z,T[X+j+11]=Z.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new ue(y,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let g=0;g<l.length;g++)_+=l[g];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function bg(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return d}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}const _d=new Ht,Zc=new sd(1,1),xd=new qh,vd=new xf,yd=new td,jc=[],Kc=[],Qc=new Float32Array(16),eh=new Float32Array(9),th=new Float32Array(4);function Rs(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=jc[s];if(r===void 0&&(r=new Float32Array(s),jc[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function go(i,e){let t=Kc[e];t===void 0&&(t=new Int32Array(e),Kc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Ag(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Rg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Cg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;th.set(n),i.uniformMatrix2fv(this.addr,!1,th),Dt(t,n)}}function Pg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;eh.set(n),i.uniformMatrix3fv(this.addr,!1,eh),Dt(t,n)}}function Lg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Qc.set(n),i.uniformMatrix4fv(this.addr,!1,Qc),Dt(t,n)}}function Ig(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function kg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Ug(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Ng(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Bg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function zg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=Wh,r=Zc):r=_d,t.setTexture2D(e||r,s)}function Hg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||vd,s)}function Vg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yd,s)}function Gg(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||xd,s)}function Wg(i){switch(i){case 5126:return wg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Pg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Dg;case 35668:case 35672:return kg;case 35669:case 35673:return Ug;case 5125:return Ng;case 36294:return Fg;case 36295:return Og;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Vg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Xg(i,e){i.uniform1fv(this.addr,e)}function qg(i,e){const t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Jg(i,e){const t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function $g(i,e){const t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Yg(i,e){const t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zg(i,e){const t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jg(i,e){const t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Kg(i,e){i.uniform1iv(this.addr,e)}function Qg(i,e){i.uniform2iv(this.addr,e)}function e_(i,e){i.uniform3iv(this.addr,e)}function t_(i,e){i.uniform4iv(this.addr,e)}function n_(i,e){i.uniform1uiv(this.addr,e)}function i_(i,e){i.uniform2uiv(this.addr,e)}function s_(i,e){i.uniform3uiv(this.addr,e)}function r_(i,e){i.uniform4uiv(this.addr,e)}function o_(i,e,t){const n=this.cache,s=e.length,r=go(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_d,r[o])}function a_(i,e,t){const n=this.cache,s=e.length,r=go(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||vd,r[o])}function l_(i,e,t){const n=this.cache,s=e.length,r=go(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yd,r[o])}function c_(i,e,t){const n=this.cache,s=e.length,r=go(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||xd,r[o])}function h_(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return Jg;case 35666:return $g;case 35674:return Yg;case 35675:return Zg;case 35676:return jg;case 5124:case 35670:return Kg;case 35667:case 35671:return Qg;case 35668:case 35672:return e_;case 35669:case 35673:return t_;case 5125:return n_;case 36294:return i_;case 36295:return s_;case 36296:return r_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class d_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wg(t.type)}}class u_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h_(t.type)}}class f_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function nh(i,e){i.seq.push(e),i.map[e.id]=e}function p_(i,e,t){const n=i.name,s=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),o=sa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){nh(t,l===void 0?new d_(a,i,e):new u_(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new f_(a),nh(t,d)),t=d}}}class Kr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);p_(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function ih(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m_=37297;let g_=0;function __(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const sh=new Ke;function x_(i){lt._getMatrix(sh,lt.workingColorSpace,i);const e=`mat3( ${sh.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case Qr:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+__(i.getShaderSource(e),a)}else return r}function v_(i,e){const t=x_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y_(i,e){let t;switch(e){case Pu:t="Linear";break;case Lu:t="Reinhard";break;case Iu:t="Cineon";break;case Du:t="ACESFilmic";break;case Uu:t="AgX";break;case Nu:t="Neutral";break;case ku:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hr=new D;function M_(){lt.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),e=Hr.y.toFixed(4),t=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function E_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Hs(i){return i!==""}function oh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ah(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(i){return i.replace(w_,A_)}const T_=new Map;function A_(i,e){let t=et[e];if(t===void 0){const n=T_.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lh(i){return i.replace(R_,C_)}function C_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ch(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function P_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ih?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(e="SHADOWMAP_TYPE_VSM"),e}function L_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case xs:e="ENVMAP_TYPE_CUBE";break;case po:e="ENVMAP_TYPE_CUBE_UV";break}return e}function I_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function D_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dh:e="ENVMAP_BLENDING_MULTIPLY";break;case Ru:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function k_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function U_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=P_(t),l=L_(t),h=I_(t),d=D_(t),u=k_(t),m=S_(t),_=E_(r),v=s.createProgram();let g,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(g=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[ch(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ui?"#define TONE_MAPPING":"",t.toneMapping!==ui?et.tonemapping_pars_fragment:"",t.toneMapping!==ui?y_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,v_("linearToOutputTexel",t.outputColorSpace),M_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=nl(o),o=oh(o,t),o=ah(o,t),a=nl(a),a=oh(a,t),a=ah(a,t),o=lh(o),a=lh(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+g+o,x=S+p+a,y=ih(s,s.VERTEX_SHADER,M),b=ih(s,s.FRAGMENT_SHADER,x);s.attachShader(v,y),s.attachShader(v,b),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(I){if(i.debug.checkShaderErrors){const N=s.getProgramInfoLog(v)||"",H=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(b)||"",X=N.trim(),Y=H.trim(),j=Z.trim();let W=!0,me=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,y,b);else{const ye=rh(s,y,"vertex"),be=rh(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+ye+`
`+be)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||j==="")&&(me=!1);me&&(I.diagnostics={runnable:W,programLog:X,vertexShader:{log:Y,prefix:g},fragmentShader:{log:j,prefix:p}})}s.deleteShader(y),s.deleteShader(b),C=new Kr(s,v),w=b_(s,v)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,m_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=b,this}let N_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O_(e),t.set(e,n)),n}}class O_{constructor(e){this.id=N_++,this.code=e,this.usedTimes=0}}function B_(i,e,t,n,s,r,o){const a=new $h,c=new F_,l=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function g(w,E,I,N,H){const Z=N.fog,X=H.geometry,Y=w.isMeshStandardMaterial?N.environment:null,j=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),W=j&&j.mapping===po?j.image.height:null,me=_[w.type];w.precision!==null&&(m=s.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const ye=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=ye!==void 0?ye.length:0;let Be=0;X.morphAttributes.position!==void 0&&(Be=1),X.morphAttributes.normal!==void 0&&(Be=2),X.morphAttributes.color!==void 0&&(Be=3);let Je,nt,Ze,ne;if(me){const ct=An[me];Je=ct.vertexShader,nt=ct.fragmentShader}else Je=w.vertexShader,nt=w.fragmentShader,c.update(w),Ze=c.getVertexShaderID(w),ne=c.getFragmentShaderID(w);const le=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),we=H.isInstancedMesh===!0,Ae=H.isBatchedMesh===!0,He=!!w.map,it=!!w.matcap,k=!!j,oe=!!w.aoMap,re=!!w.lightMap,ie=!!w.bumpMap,U=!!w.normalMap,q=!!w.displacementMap,G=!!w.emissiveMap,ee=!!w.metalnessMap,se=!!w.roughnessMap,he=w.anisotropy>0,R=w.clearcoat>0,f=w.dispersion>0,P=w.iridescence>0,L=w.sheen>0,B=w.transmission>0,O=he&&!!w.anisotropyMap,ce=R&&!!w.clearcoatMap,te=R&&!!w.clearcoatNormalMap,Se=R&&!!w.clearcoatRoughnessMap,fe=P&&!!w.iridescenceMap,K=P&&!!w.iridescenceThicknessMap,_e=L&&!!w.sheenColorMap,Oe=L&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Te=!!w.specularColorMap,We=!!w.specularIntensityMap,F=B&&!!w.transmissionMap,ve=B&&!!w.thicknessMap,Ee=!!w.gradientMap,ke=!!w.alphaMap,xe=w.alphaTest>0,ae=!!w.alphaHash,De=!!w.extensions;let $e=ui;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&($e=i.toneMapping);const mt={shaderID:me,shaderType:w.type,shaderName:w.name,vertexShader:Je,fragmentShader:nt,defines:w.defines,customVertexShaderID:Ze,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ae,batchingColor:Ae&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:vs,alphaToCoverage:!!w.alphaToCoverage,map:He,matcap:it,envMap:k,envMapMode:k&&j.mapping,envMapCubeUVHeight:W,aoMap:oe,lightMap:re,bumpMap:ie,normalMap:U,displacementMap:u&&q,emissiveMap:G,normalMapObjectSpace:U&&w.normalMapType===zu,normalMapTangentSpace:U&&w.normalMapType===Gh,metalnessMap:ee,roughnessMap:se,anisotropy:he,anisotropyMap:O,clearcoat:R,clearcoatMap:ce,clearcoatNormalMap:te,clearcoatRoughnessMap:Se,dispersion:f,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:K,sheen:L,sheenColorMap:_e,sheenRoughnessMap:Oe,specularMap:Ie,specularColorMap:Te,specularIntensityMap:We,transmission:B,transmissionMap:F,thicknessMap:ve,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:ke,alphaTest:xe,alphaHash:ae,combine:w.combine,mapUv:He&&v(w.map.channel),aoMapUv:oe&&v(w.aoMap.channel),lightMapUv:re&&v(w.lightMap.channel),bumpMapUv:ie&&v(w.bumpMap.channel),normalMapUv:U&&v(w.normalMap.channel),displacementMapUv:q&&v(w.displacementMap.channel),emissiveMapUv:G&&v(w.emissiveMap.channel),metalnessMapUv:ee&&v(w.metalnessMap.channel),roughnessMapUv:se&&v(w.roughnessMap.channel),anisotropyMapUv:O&&v(w.anisotropyMap.channel),clearcoatMapUv:ce&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:K&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&v(w.sheenRoughnessMap.channel),specularMapUv:Ie&&v(w.specularMap.channel),specularColorMapUv:Te&&v(w.specularColorMap.channel),specularIntensityMapUv:We&&v(w.specularIntensityMap.channel),transmissionMapUv:F&&v(w.transmissionMap.channel),thicknessMapUv:ve&&v(w.thicknessMap.channel),alphaMapUv:ke&&v(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(U||he),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(He||ke),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ge,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&lt.getTransfer(w.map.colorSpace)===ut,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&lt.getTransfer(w.emissiveMap.colorSpace)===ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Rt,flipSided:w.side===$t,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function p(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)E.push(I),E.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(S(E,w),M(E,w),E.push(i.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function S(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function M(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const E=_[w.type];let I;if(E){const N=An[E];I=Qh.clone(N.uniforms)}else I=w.uniforms;return I}function y(w,E){let I;for(let N=0,H=h.length;N<H;N++){const Z=h[N];if(Z.cacheKey===E){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new U_(i,E,w,r),h.push(I)),I}function b(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function C(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:y,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:C}}function z_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function H_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dh(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,u,m,_,v,g){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:m,groupOrder:_,renderOrder:d.renderOrder,z:v,group:g},i[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=m,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=g),e++,p}function a(d,u,m,_,v,g){const p=o(d,u,m,_,v,g);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):t.push(p)}function c(d,u,m,_,v,g){const p=o(d,u,m,_,v,g);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||H_),n.length>1&&n.sort(u||hh),s.length>1&&s.sort(u||hh)}function h(){for(let d=e,u=i.length;d<u;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function V_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new dh,i.set(n,[o])):s>=r.length?(o=new dh,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function G_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new tt};break;case"SpotLight":t={position:new D,direction:new D,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function W_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let X_=0;function q_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function J_(i){const e=new G_,t=W_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new xt,o=new xt;function a(l){let h=0,d=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let m=0,_=0,v=0,g=0,p=0,S=0,M=0,x=0,y=0,b=0,T=0;l.sort(q_);for(let w=0,E=l.length;w<E;w++){const I=l[w],N=I.color,H=I.intensity,Z=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=N.r*H,d+=N.g*H,u+=N.b*H;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],H);T++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const j=I.shadow,W=t.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=I.shadow.matrix,S++}n.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(N).multiplyScalar(H),Y.distance=Z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[v]=Y;const j=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[v]=j.matrix,I.castShadow){const W=t.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[v]=W,n.spotShadowMap[v]=X,x++}v++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(N).multiplyScalar(H),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=Y,g++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const j=I.shadow,W=t.get(I);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=X,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=Y,_++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(H),Y.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=Y,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==m||C.pointLength!==_||C.spotLength!==v||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==M||C.numSpotShadows!==x||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.directionalLength=m,C.pointLength=_,C.spotLength=v,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=M,C.numSpotShadows=x,C.numSpotMaps=y,C.numLightProbes=T,n.version=X_++)}function c(l,h){let d=0,u=0,m=0,_=0,v=0;const g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(M.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),m++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=n.point[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(g),u++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function uh(i){const e=new J_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new uh(i),e.set(s,[a])):r>=o.length?(a=new uh(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z_=`uniform sampler2D shadow_pass;
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
}`;function j_(i,e,t){let n=new Il;const s=new ue,r=new ue,o=new gt,a=new vp({depthPacking:Bu}),c=new yp,l={},h=t.maxTextureSize,d={[fi]:$t,[$t]:fi,[Rt]:Rt},u=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Y_,fragmentShader:Z_}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new _t;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new de(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(b,T,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),N=i.state;N.setBlending(di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const H=p!==Wn&&this.type===Wn,Z=p===Wn&&this.type!==Wn;for(let X=0,Y=b.length;X<Y;X++){const j=b[X],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const me=W.getFrameExtents();if(s.multiply(me),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,W.mapSize.y=r.y)),W.map===null||H===!0||Z===!0){const be=this.type!==Wn?{minFilter:Mn,magFilter:Mn}:{};W.map!==null&&W.map.dispose(),W.map=new pi(s.x,s.y,be),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ye=W.getViewportCount();for(let be=0;be<ye;be++){const Be=W.getViewport(be);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),N.viewport(o),W.updateMatrices(j,be),n=W.getFrustum(),x(T,C,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Wn&&S(W,C),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(w,E,I)};function S(b,T){const C=e.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pi(s.x,s.y)),u.uniforms.shadow_pass.value=b.map.texture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,C,u,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,C,m,v,null)}function M(b,T,C,w){let E=null;const I=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)E=I;else if(E=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const N=E.uuid,H=T.uuid;let Z=l[N];Z===void 0&&(Z={},l[N]=Z);let X=Z[H];X===void 0&&(X=E.clone(),Z[H]=X,T.addEventListener("dispose",y)),E=X}if(E.visible=T.visible,E.wireframe=T.wireframe,w===Wn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const N=i.properties.get(E);N.light=C}return E}function x(b,T,C,w,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const H=e.update(b),Z=b.material;if(Array.isArray(Z)){const X=H.groups;for(let Y=0,j=X.length;Y<j;Y++){const W=X[Y],me=Z[W.materialIndex];if(me&&me.visible){const ye=M(b,me,w,E);b.onBeforeShadow(i,b,T,C,H,ye,W),i.renderBufferDirect(C,null,H,ye,b,W),b.onAfterShadow(i,b,T,C,H,ye,W)}}}else if(Z.visible){const X=M(b,Z,w,E);b.onBeforeShadow(i,b,T,C,H,X,null),i.renderBufferDirect(C,null,H,X,b,null),b.onAfterShadow(i,b,T,C,H,X,null)}}const N=b.children;for(let H=0,Z=N.length;H<Z;H++)x(N[H],T,C,w,E)}function y(b){b.target.removeEventListener("dispose",y);for(const C in l){const w=l[C],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const K_={[pa]:ma,[ga]:va,[_a]:ya,[gs]:xa,[ma]:pa,[va]:ga,[ya]:_a,[xa]:gs};function Q_(i,e){function t(){let F=!1;const ve=new gt;let Ee=null;const ke=new gt(0,0,0,0);return{setMask:function(xe){Ee!==xe&&!F&&(i.colorMask(xe,xe,xe,xe),Ee=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ae,De,$e,mt){mt===!0&&(xe*=$e,ae*=$e,De*=$e),ve.set(xe,ae,De,$e),ke.equals(ve)===!1&&(i.clearColor(xe,ae,De,$e),ke.copy(ve))},reset:function(){F=!1,Ee=null,ke.set(-1,0,0,0)}}}function n(){let F=!1,ve=!1,Ee=null,ke=null,xe=null;return{setReversed:function(ae){if(ve!==ae){const De=e.get("EXT_clip_control");ae?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;const $e=xe;xe=null,this.setClear($e)}},getReversed:function(){return ve},setTest:function(ae){ae?le(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ae){Ee!==ae&&!F&&(i.depthMask(ae),Ee=ae)},setFunc:function(ae){if(ve&&(ae=K_[ae]),ke!==ae){switch(ae){case pa:i.depthFunc(i.NEVER);break;case ma:i.depthFunc(i.ALWAYS);break;case ga:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case _a:i.depthFunc(i.EQUAL);break;case xa:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=ae}},setLocked:function(ae){F=ae},setClear:function(ae){xe!==ae&&(ve&&(ae=1-ae),i.clearDepth(ae),xe=ae)},reset:function(){F=!1,Ee=null,ke=null,xe=null,ve=!1}}}function s(){let F=!1,ve=null,Ee=null,ke=null,xe=null,ae=null,De=null,$e=null,mt=null;return{setTest:function(ct){F||(ct?le(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(ct){ve!==ct&&!F&&(i.stencilMask(ct),ve=ct)},setFunc:function(ct,On,wn){(Ee!==ct||ke!==On||xe!==wn)&&(i.stencilFunc(ct,On,wn),Ee=ct,ke=On,xe=wn)},setOp:function(ct,On,wn){(ae!==ct||De!==On||$e!==wn)&&(i.stencilOp(ct,On,wn),ae=ct,De=On,$e=wn)},setLocked:function(ct){F=ct},setClear:function(ct){mt!==ct&&(i.clearStencil(ct),mt=ct)},reset:function(){F=!1,ve=null,Ee=null,ke=null,xe=null,ae=null,De=null,$e=null,mt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u=new WeakMap,m=[],_=null,v=!1,g=null,p=null,S=null,M=null,x=null,y=null,b=null,T=new tt(0,0,0),C=0,w=!1,E=null,I=null,N=null,H=null,Z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=j>=2);let me=null,ye={};const be=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Je=new gt().fromArray(be),nt=new gt().fromArray(Be);function Ze(F,ve,Ee,ke){const xe=new Uint8Array(4),ae=i.createTexture();i.bindTexture(F,ae),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Ee;De++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(ve+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ae}const ne={};ne[i.TEXTURE_2D]=Ze(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=Ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=Ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=Ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(i.DEPTH_TEST),o.setFunc(gs),ie(!1),U(lc),le(i.CULL_FACE),oe(di);function le(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ge(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function we(F,ve){return d[F]!==ve?(i.bindFramebuffer(F,ve),d[F]=ve,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ae(F,ve){let Ee=m,ke=!1;if(F){Ee=u.get(ve),Ee===void 0&&(Ee=[],u.set(ve,Ee));const xe=F.textures;if(Ee.length!==xe.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,De=xe.length;ae<De;ae++)Ee[ae]=i.COLOR_ATTACHMENT0+ae;Ee.length=xe.length,ke=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,ke=!0);ke&&i.drawBuffers(Ee)}function He(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const it={[Ti]:i.FUNC_ADD,[du]:i.FUNC_SUBTRACT,[uu]:i.FUNC_REVERSE_SUBTRACT};it[fu]=i.MIN,it[pu]=i.MAX;const k={[mu]:i.ZERO,[gu]:i.ONE,[_u]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[Eu]:i.SRC_ALPHA_SATURATE,[Mu]:i.DST_COLOR,[vu]:i.DST_ALPHA,[xu]:i.ONE_MINUS_SRC_COLOR,[fa]:i.ONE_MINUS_SRC_ALPHA,[Su]:i.ONE_MINUS_DST_COLOR,[yu]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[wu]:i.ONE_MINUS_CONSTANT_COLOR,[Tu]:i.CONSTANT_ALPHA,[Au]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(F,ve,Ee,ke,xe,ae,De,$e,mt,ct){if(F===di){v===!0&&(ge(i.BLEND),v=!1);return}if(v===!1&&(le(i.BLEND),v=!0),F!==hu){if(F!==g||ct!==w){if((p!==Ti||x!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,x=Ti),ct)switch(F){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFunc(i.ONE,i.ONE);break;case hc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,y=null,b=null,T.set(0,0,0),C=0,g=F,w=ct}return}xe=xe||ve,ae=ae||Ee,De=De||ke,(ve!==p||xe!==x)&&(i.blendEquationSeparate(it[ve],it[xe]),p=ve,x=xe),(Ee!==S||ke!==M||ae!==y||De!==b)&&(i.blendFuncSeparate(k[Ee],k[ke],k[ae],k[De]),S=Ee,M=ke,y=ae,b=De),($e.equals(T)===!1||mt!==C)&&(i.blendColor($e.r,$e.g,$e.b,mt),T.copy($e),C=mt),g=F,w=!1}function re(F,ve){F.side===Rt?ge(i.CULL_FACE):le(i.CULL_FACE);let Ee=F.side===$t;ve&&(Ee=!Ee),ie(Ee),F.blending===hs&&F.transparent===!1?oe(di):oe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const ke=F.stencilWrite;a.setTest(ke),ke&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ie(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function U(F){F!==lu?(le(i.CULL_FACE),F!==I&&(F===lc?i.cullFace(i.BACK):F===cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),I=F}function q(F){F!==N&&(Y&&i.lineWidth(F),N=F)}function G(F,ve,Ee){F?(le(i.POLYGON_OFFSET_FILL),(H!==ve||Z!==Ee)&&(i.polygonOffset(ve,Ee),H=ve,Z=Ee)):ge(i.POLYGON_OFFSET_FILL)}function ee(F){F?le(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function se(F){F===void 0&&(F=i.TEXTURE0+X-1),me!==F&&(i.activeTexture(F),me=F)}function he(F,ve,Ee){Ee===void 0&&(me===null?Ee=i.TEXTURE0+X-1:Ee=me);let ke=ye[Ee];ke===void 0&&(ke={type:void 0,texture:void 0},ye[Ee]=ke),(ke.type!==F||ke.texture!==ve)&&(me!==Ee&&(i.activeTexture(Ee),me=Ee),i.bindTexture(F,ve||ne[F]),ke.type=F,ke.texture=ve)}function R(){const F=ye[me];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function f(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(F){Je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Je.copy(F))}function Oe(F){nt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Ie(F,ve){let Ee=l.get(ve);Ee===void 0&&(Ee=new WeakMap,l.set(ve,Ee));let ke=Ee.get(F);ke===void 0&&(ke=i.getUniformBlockIndex(ve,F.name),Ee.set(F,ke))}function Te(F,ve){const ke=l.get(ve).get(F);c.get(ve)!==ke&&(i.uniformBlockBinding(ve,ke,F.__bindingPointIndex),c.set(ve,ke))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},me=null,ye={},d={},u=new WeakMap,m=[],_=null,v=!1,g=null,p=null,S=null,M=null,x=null,y=null,b=null,T=new tt(0,0,0),C=0,w=!1,E=null,I=null,N=null,H=null,Z=null,Je.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:ge,bindFramebuffer:we,drawBuffers:Ae,useProgram:He,setBlending:oe,setMaterial:re,setFlipSided:ie,setCullFace:U,setLineWidth:q,setPolygonOffset:G,setScissorTest:ee,activeTexture:se,bindTexture:he,unbindTexture:R,compressedTexImage2D:f,compressedTexImage3D:P,texImage2D:fe,texImage3D:K,updateUBOMapping:Ie,uniformBlockBinding:Te,texStorage2D:te,texStorage3D:Se,texSubImage2D:L,texSubImage3D:B,compressedTexSubImage2D:O,compressedTexSubImage3D:ce,scissor:_e,viewport:Oe,reset:We}}function ex(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap;let d;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,f){return m?new OffscreenCanvas(R,f):to("canvas")}function v(R,f,P){let L=1;const B=he(R);if((B.width>P||B.height>P)&&(L=P/Math.max(B.width,B.height)),L<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const O=Math.floor(L*B.width),ce=Math.floor(L*B.height);d===void 0&&(d=_(O,ce));const te=f?_(O,ce):d;return te.width=O,te.height=ce,te.getContext("2d").drawImage(R,0,0,O,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+O+"x"+ce+")."),te}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,f,P,L,B=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let O=f;if(f===i.RED&&(P===i.FLOAT&&(O=i.R32F),P===i.HALF_FLOAT&&(O=i.R16F),P===i.UNSIGNED_BYTE&&(O=i.R8)),f===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.R8UI),P===i.UNSIGNED_SHORT&&(O=i.R16UI),P===i.UNSIGNED_INT&&(O=i.R32UI),P===i.BYTE&&(O=i.R8I),P===i.SHORT&&(O=i.R16I),P===i.INT&&(O=i.R32I)),f===i.RG&&(P===i.FLOAT&&(O=i.RG32F),P===i.HALF_FLOAT&&(O=i.RG16F),P===i.UNSIGNED_BYTE&&(O=i.RG8)),f===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RG8UI),P===i.UNSIGNED_SHORT&&(O=i.RG16UI),P===i.UNSIGNED_INT&&(O=i.RG32UI),P===i.BYTE&&(O=i.RG8I),P===i.SHORT&&(O=i.RG16I),P===i.INT&&(O=i.RG32I)),f===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RGB8UI),P===i.UNSIGNED_SHORT&&(O=i.RGB16UI),P===i.UNSIGNED_INT&&(O=i.RGB32UI),P===i.BYTE&&(O=i.RGB8I),P===i.SHORT&&(O=i.RGB16I),P===i.INT&&(O=i.RGB32I)),f===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),P===i.UNSIGNED_INT&&(O=i.RGBA32UI),P===i.BYTE&&(O=i.RGBA8I),P===i.SHORT&&(O=i.RGBA16I),P===i.INT&&(O=i.RGBA32I)),f===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),f===i.RGBA){const ce=B?Qr:lt.getTransfer(L);P===i.FLOAT&&(O=i.RGBA32F),P===i.HALF_FLOAT&&(O=i.RGBA16F),P===i.UNSIGNED_BYTE&&(O=ce===ut?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function x(R,f){let P;return R?f===null||f===ki||f===Ks?P=i.DEPTH24_STENCIL8:f===$n?P=i.DEPTH32F_STENCIL8:f===js&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===ki||f===Ks?P=i.DEPTH_COMPONENT24:f===$n?P=i.DEPTH_COMPONENT32F:f===js&&(P=i.DEPTH_COMPONENT16),P}function y(R,f){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==Cn?Math.log2(Math.max(f.width,f.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?f.mipmaps.length:1}function b(R){const f=R.target;f.removeEventListener("dispose",b),C(f),f.isVideoTexture&&h.delete(f)}function T(R){const f=R.target;f.removeEventListener("dispose",T),E(f)}function C(R){const f=n.get(R);if(f.__webglInit===void 0)return;const P=R.source,L=u.get(P);if(L){const B=L[f.__cacheKey];B.usedTimes--,B.usedTimes===0&&w(R),Object.keys(L).length===0&&u.delete(P)}n.remove(R)}function w(R){const f=n.get(R);i.deleteTexture(f.__webglTexture);const P=R.source,L=u.get(P);delete L[f.__cacheKey],o.memory.textures--}function E(R){const f=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(f.__webglFramebuffer[L]))for(let B=0;B<f.__webglFramebuffer[L].length;B++)i.deleteFramebuffer(f.__webglFramebuffer[L][B]);else i.deleteFramebuffer(f.__webglFramebuffer[L]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[L])}else{if(Array.isArray(f.__webglFramebuffer))for(let L=0;L<f.__webglFramebuffer.length;L++)i.deleteFramebuffer(f.__webglFramebuffer[L]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let L=0;L<f.__webglColorRenderbuffer.length;L++)f.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[L]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const P=R.textures;for(let L=0,B=P.length;L<B;L++){const O=n.get(P[L]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),o.memory.textures--),n.remove(P[L])}n.remove(R)}let I=0;function N(){I=0}function H(){const R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function Z(R){const f=[];return f.push(R.wrapS),f.push(R.wrapT),f.push(R.wrapR||0),f.push(R.magFilter),f.push(R.minFilter),f.push(R.anisotropy),f.push(R.internalFormat),f.push(R.format),f.push(R.type),f.push(R.generateMipmaps),f.push(R.premultiplyAlpha),f.push(R.flipY),f.push(R.unpackAlignment),f.push(R.colorSpace),f.join()}function X(R,f){const P=n.get(R);if(R.isVideoTexture&&ee(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){const L=R.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(P,R,f);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+f)}function Y(R,f){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){ne(P,R,f);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+f)}function j(R,f){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){ne(P,R,f);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+f)}function W(R,f){const P=n.get(R);if(R.version>0&&P.__version!==R.version){le(P,R,f);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+f)}const me={[Zs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[Ea]:i.MIRRORED_REPEAT},ye={[Mn]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},be={[Hu]:i.NEVER,[Ju]:i.ALWAYS,[Vu]:i.LESS,[Wh]:i.LEQUAL,[Gu]:i.EQUAL,[qu]:i.GEQUAL,[Wu]:i.GREATER,[Xu]:i.NOTEQUAL};function Be(R,f){if(f.type===$n&&e.has("OES_texture_float_linear")===!1&&(f.magFilter===Cn||f.magFilter===wo||f.magFilter===mr||f.magFilter===Pi||f.minFilter===Cn||f.minFilter===wo||f.minFilter===mr||f.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,me[f.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,me[f.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,me[f.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ye[f.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ye[f.minFilter]),f.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[f.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===Mn||f.minFilter!==mr&&f.minFilter!==Pi||f.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function Je(R,f){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,f.addEventListener("dispose",b));const L=f.source;let B=u.get(L);B===void 0&&(B={},u.set(L,B));const O=Z(f);if(O!==R.__cacheKey){B[O]===void 0&&(B[O]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),B[O].usedTimes++;const ce=B[R.__cacheKey];ce!==void 0&&(B[R.__cacheKey].usedTimes--,ce.usedTimes===0&&w(f)),R.__cacheKey=O,R.__webglTexture=B[O].texture}return P}function nt(R,f,P){return Math.floor(Math.floor(R/P)/f)}function Ze(R,f,P,L){const O=R.updateRanges;if(O.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,P,L,f.data);else{O.sort((K,_e)=>K.start-_e.start);let ce=0;for(let K=1;K<O.length;K++){const _e=O[ce],Oe=O[K],Ie=_e.start+_e.count,Te=nt(Oe.start,f.width,4),We=nt(_e.start,f.width,4);Oe.start<=Ie+1&&Te===We&&nt(Oe.start+Oe.count-1,f.width,4)===Te?_e.count=Math.max(_e.count,Oe.start+Oe.count-_e.start):(++ce,O[ce]=Oe)}O.length=ce+1;const te=i.getParameter(i.UNPACK_ROW_LENGTH),Se=i.getParameter(i.UNPACK_SKIP_PIXELS),fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let K=0,_e=O.length;K<_e;K++){const Oe=O[K],Ie=Math.floor(Oe.start/4),Te=Math.ceil(Oe.count/4),We=Ie%f.width,F=Math.floor(Ie/f.width),ve=Te,Ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,We,F,ve,Ee,P,L,f.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,te),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Se),i.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function ne(R,f,P){let L=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(L=i.TEXTURE_3D);const B=Je(R,f),O=f.source;t.bindTexture(L,R.__webglTexture,i.TEXTURE0+P);const ce=n.get(O);if(O.version!==ce.__version||B===!0){t.activeTexture(i.TEXTURE0+P);const te=lt.getPrimaries(lt.workingColorSpace),Se=f.colorSpace===li?null:lt.getPrimaries(f.colorSpace),fe=f.colorSpace===li||te===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let K=v(f.image,!1,s.maxTextureSize);K=se(f,K);const _e=r.convert(f.format,f.colorSpace),Oe=r.convert(f.type);let Ie=M(f.internalFormat,_e,Oe,f.colorSpace,f.isVideoTexture);Be(L,f);let Te;const We=f.mipmaps,F=f.isVideoTexture!==!0,ve=ce.__version===void 0||B===!0,Ee=O.dataReady,ke=y(f,K);if(f.isDepthTexture)Ie=x(f.format===er,f.type),ve&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ie,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ie,K.width,K.height,0,_e,Oe,null));else if(f.isDataTexture)if(We.length>0){F&&ve&&t.texStorage2D(i.TEXTURE_2D,ke,Ie,We[0].width,We[0].height);for(let xe=0,ae=We.length;xe<ae;xe++)Te=We[xe],F?Ee&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Te.width,Te.height,_e,Oe,Te.data):t.texImage2D(i.TEXTURE_2D,xe,Ie,Te.width,Te.height,0,_e,Oe,Te.data);f.generateMipmaps=!1}else F?(ve&&t.texStorage2D(i.TEXTURE_2D,ke,Ie,K.width,K.height),Ee&&Ze(f,K,_e,Oe)):t.texImage2D(i.TEXTURE_2D,0,Ie,K.width,K.height,0,_e,Oe,K.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){F&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ie,We[0].width,We[0].height,K.depth);for(let xe=0,ae=We.length;xe<ae;xe++)if(Te=We[xe],f.format!==xn)if(_e!==null)if(F){if(Ee)if(f.layerUpdates.size>0){const De=Vc(Te.width,Te.height,f.format,f.type);for(const $e of f.layerUpdates){const mt=Te.data.subarray($e*De/Te.data.BYTES_PER_ELEMENT,($e+1)*De/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,$e,Te.width,Te.height,1,_e,mt)}f.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Te.width,Te.height,K.depth,_e,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,Ie,Te.width,Te.height,K.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,Te.width,Te.height,K.depth,_e,Oe,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,Ie,Te.width,Te.height,K.depth,0,_e,Oe,Te.data)}else{F&&ve&&t.texStorage2D(i.TEXTURE_2D,ke,Ie,We[0].width,We[0].height);for(let xe=0,ae=We.length;xe<ae;xe++)Te=We[xe],f.format!==xn?_e!==null?F?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,Te.width,Te.height,_e,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,Ie,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?Ee&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Te.width,Te.height,_e,Oe,Te.data):t.texImage2D(i.TEXTURE_2D,xe,Ie,Te.width,Te.height,0,_e,Oe,Te.data)}else if(f.isDataArrayTexture)if(F){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,Ie,K.width,K.height,K.depth),Ee)if(f.layerUpdates.size>0){const xe=Vc(K.width,K.height,f.format,f.type);for(const ae of f.layerUpdates){const De=K.data.subarray(ae*xe/K.data.BYTES_PER_ELEMENT,(ae+1)*xe/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,K.width,K.height,1,_e,Oe,De)}f.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,_e,Oe,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,K.width,K.height,K.depth,0,_e,Oe,K.data);else if(f.isData3DTexture)F?(ve&&t.texStorage3D(i.TEXTURE_3D,ke,Ie,K.width,K.height,K.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,_e,Oe,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,K.width,K.height,K.depth,0,_e,Oe,K.data);else if(f.isFramebufferTexture){if(ve)if(F)t.texStorage2D(i.TEXTURE_2D,ke,Ie,K.width,K.height);else{let xe=K.width,ae=K.height;for(let De=0;De<ke;De++)t.texImage2D(i.TEXTURE_2D,De,Ie,xe,ae,0,_e,Oe,null),xe>>=1,ae>>=1}}else if(We.length>0){if(F&&ve){const xe=he(We[0]);t.texStorage2D(i.TEXTURE_2D,ke,Ie,xe.width,xe.height)}for(let xe=0,ae=We.length;xe<ae;xe++)Te=We[xe],F?Ee&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,_e,Oe,Te):t.texImage2D(i.TEXTURE_2D,xe,Ie,_e,Oe,Te);f.generateMipmaps=!1}else if(F){if(ve){const xe=he(K);t.texStorage2D(i.TEXTURE_2D,ke,Ie,xe.width,xe.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Oe,K)}else t.texImage2D(i.TEXTURE_2D,0,Ie,_e,Oe,K);g(f)&&p(L),ce.__version=O.version,f.onUpdate&&f.onUpdate(f)}R.__version=f.version}function le(R,f,P){if(f.image.length!==6)return;const L=Je(R,f),B=f.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+P);const O=n.get(B);if(B.version!==O.__version||L===!0){t.activeTexture(i.TEXTURE0+P);const ce=lt.getPrimaries(lt.workingColorSpace),te=f.colorSpace===li?null:lt.getPrimaries(f.colorSpace),Se=f.colorSpace===li||ce===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const fe=f.isCompressedTexture||f.image[0].isCompressedTexture,K=f.image[0]&&f.image[0].isDataTexture,_e=[];for(let ae=0;ae<6;ae++)!fe&&!K?_e[ae]=v(f.image[ae],!0,s.maxCubemapSize):_e[ae]=K?f.image[ae].image:f.image[ae],_e[ae]=se(f,_e[ae]);const Oe=_e[0],Ie=r.convert(f.format,f.colorSpace),Te=r.convert(f.type),We=M(f.internalFormat,Ie,Te,f.colorSpace),F=f.isVideoTexture!==!0,ve=O.__version===void 0||L===!0,Ee=B.dataReady;let ke=y(f,Oe);Be(i.TEXTURE_CUBE_MAP,f);let xe;if(fe){F&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,We,Oe.width,Oe.height);for(let ae=0;ae<6;ae++){xe=_e[ae].mipmaps;for(let De=0;De<xe.length;De++){const $e=xe[De];f.format!==xn?Ie!==null?F?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,$e.width,$e.height,Ie,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,We,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,0,0,$e.width,$e.height,Ie,Te,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De,We,$e.width,$e.height,0,Ie,Te,$e.data)}}}else{if(xe=f.mipmaps,F&&ve){xe.length>0&&ke++;const ae=he(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,We,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(K){F?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,_e[ae].width,_e[ae].height,Ie,Te,_e[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,_e[ae].width,_e[ae].height,0,Ie,Te,_e[ae].data);for(let De=0;De<xe.length;De++){const mt=xe[De].image[ae].image;F?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,mt.width,mt.height,Ie,Te,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,We,mt.width,mt.height,0,Ie,Te,mt.data)}}else{F?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ie,Te,_e[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,We,Ie,Te,_e[ae]);for(let De=0;De<xe.length;De++){const $e=xe[De];F?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,0,0,Ie,Te,$e.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,De+1,We,Ie,Te,$e.image[ae])}}}g(f)&&p(i.TEXTURE_CUBE_MAP),O.__version=B.version,f.onUpdate&&f.onUpdate(f)}R.__version=f.version}function ge(R,f,P,L,B,O){const ce=r.convert(P.format,P.colorSpace),te=r.convert(P.type),Se=M(P.internalFormat,ce,te,P.colorSpace),fe=n.get(f),K=n.get(P);if(K.__renderTarget=f,!fe.__hasExternalTextures){const _e=Math.max(1,f.width>>O),Oe=Math.max(1,f.height>>O);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?t.texImage3D(B,O,Se,_e,Oe,f.depth,0,ce,te,null):t.texImage2D(B,O,Se,_e,Oe,0,ce,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),G(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,B,K.__webglTexture,0,q(f)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,B,K.__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(R,f,P){if(i.bindRenderbuffer(i.RENDERBUFFER,R),f.depthBuffer){const L=f.depthTexture,B=L&&L.isDepthTexture?L.type:null,O=x(f.stencilBuffer,B),ce=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=q(f);G(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,O,f.width,f.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,O,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,O,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,R)}else{const L=f.textures;for(let B=0;B<L.length;B++){const O=L[B],ce=r.convert(O.format,O.colorSpace),te=r.convert(O.type),Se=M(O.internalFormat,ce,te,O.colorSpace),fe=q(f);P&&G(f)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,Se,f.width,f.height):G(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,Se,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,Se,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(R,f){if(f&&f.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(f.depthTexture);L.__renderTarget=f,(!L.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),X(f.depthTexture,0);const B=L.__webglTexture,O=q(f);if(f.depthTexture.format===Qs)G(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(f.depthTexture.format===er)G(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function He(R){const f=n.get(R),P=R.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==R.depthTexture){const L=R.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),L){const B=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,L.removeEventListener("dispose",B)};L.addEventListener("dispose",B),f.__depthDisposeCallback=B}f.__boundDepthTexture=L}if(R.depthTexture&&!f.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const L=R.texture.mipmaps;L&&L.length>0?Ae(f.__webglFramebuffer[0],R):Ae(f.__webglFramebuffer,R)}else if(P){f.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[L]),f.__webglDepthbuffer[L]===void 0)f.__webglDepthbuffer[L]=i.createRenderbuffer(),we(f.__webglDepthbuffer[L],R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=f.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,O)}}else{const L=R.texture.mipmaps;if(L&&L.length>0?t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),we(f.__webglDepthbuffer,R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,O)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,f,P){const L=n.get(R);f!==void 0&&ge(L.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&He(R)}function k(R){const f=R.texture,P=n.get(R),L=n.get(f);R.addEventListener("dispose",T);const B=R.textures,O=R.isWebGLCubeRenderTarget===!0,ce=B.length>1;if(ce||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=f.version,o.memory.textures++),O){P.__webglFramebuffer=[];for(let te=0;te<6;te++)if(f.mipmaps&&f.mipmaps.length>0){P.__webglFramebuffer[te]=[];for(let Se=0;Se<f.mipmaps.length;Se++)P.__webglFramebuffer[te][Se]=i.createFramebuffer()}else P.__webglFramebuffer[te]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){P.__webglFramebuffer=[];for(let te=0;te<f.mipmaps.length;te++)P.__webglFramebuffer[te]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ce)for(let te=0,Se=B.length;te<Se;te++){const fe=n.get(B[te]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let te=0;te<B.length;te++){const Se=B[te];P.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[te]);const fe=r.convert(Se.format,Se.colorSpace),K=r.convert(Se.type),_e=M(Se.internalFormat,fe,K,Se.colorSpace,R.isXRRenderTarget===!0),Oe=q(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,_e,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,P.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),we(P.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Be(i.TEXTURE_CUBE_MAP,f);for(let te=0;te<6;te++)if(f.mipmaps&&f.mipmaps.length>0)for(let Se=0;Se<f.mipmaps.length;Se++)ge(P.__webglFramebuffer[te][Se],R,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Se);else ge(P.__webglFramebuffer[te],R,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);g(f)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let te=0,Se=B.length;te<Se;te++){const fe=B[te],K=n.get(fe);let _e=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,K.__webglTexture),Be(_e,fe),ge(P.__webglFramebuffer,R,fe,i.COLOR_ATTACHMENT0+te,_e,0),g(fe)&&p(_e)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(te=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,L.__webglTexture),Be(te,f),f.mipmaps&&f.mipmaps.length>0)for(let Se=0;Se<f.mipmaps.length;Se++)ge(P.__webglFramebuffer[Se],R,f,i.COLOR_ATTACHMENT0,te,Se);else ge(P.__webglFramebuffer,R,f,i.COLOR_ATTACHMENT0,te,0);g(f)&&p(te),t.unbindTexture()}R.depthBuffer&&He(R)}function oe(R){const f=R.textures;for(let P=0,L=f.length;P<L;P++){const B=f[P];if(g(B)){const O=S(R),ce=n.get(B).__webglTexture;t.bindTexture(O,ce),p(O),t.unbindTexture()}}}const re=[],ie=[];function U(R){if(R.samples>0){if(G(R)===!1){const f=R.textures,P=R.width,L=R.height;let B=i.COLOR_BUFFER_BIT;const O=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(R),te=f.length>1;if(te)for(let fe=0;fe<f.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const Se=R.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let fe=0;fe<f.length;fe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const K=n.get(f[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,P,L,0,0,P,L,B,i.NEAREST),c===!0&&(re.length=0,ie.length=0,re.push(i.COLOR_ATTACHMENT0+fe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(re.push(O),ie.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let fe=0;fe<f.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const K=n.get(f[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const f=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function q(R){return Math.min(s.maxSamples,R.samples)}function G(R){const f=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function ee(R){const f=o.render.frame;h.get(R)!==f&&(h.set(R,f),R.update())}function se(R,f){const P=R.colorSpace,L=R.format,B=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==vs&&P!==li&&(lt.getTransfer(P)===ut?(L!==xn||B!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),f}function he(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=it,this.setupRenderTarget=k,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=G}function tx(i,e){function t(n,s=li){let r;const o=lt.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===El)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Uh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===Ml)return i.INT;if(n===ki)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Bh)return i.ALPHA;if(n===zh)return i.RGB;if(n===xn)return i.RGBA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Hh)return i.RED;if(n===bl)return i.RED_INTEGER;if(n===Vh)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===$r||n===Yr||n===Zr||n===jr)if(o===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ba||n===wa||n===Ta||n===Aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ra||n===Ca||n===Pa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ra||n===Ca)return o===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===La||n===Ia||n===Da||n===ka||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Va||n===Ga||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===La)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ia)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ka)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ba)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===za)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ha)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return o===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===qa||n===Ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return o===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$a||n===Ya||n===Za||n===ja)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const nx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ix=`
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

}`;class sx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new rd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kn({vertexShader:nx,fragmentShader:ix,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new de(new zt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rx extends Bi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,m=null,_=null;const v=typeof XRWebGLBinding<"u",g=new sx,p={},S=t.getContextAttributes();let M=null,x=null;const y=[],b=[],T=new ue;let C=null;const w=new Bt;w.viewport=new gt;const E=new Bt;E.viewport=new gt;const I=[w,E],N=new wp;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=y[ne];return le===void 0&&(le=new qo,y[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=y[ne];return le===void 0&&(le=new qo,y[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=y[ne];return le===void 0&&(le=new qo,y[ne]=le),le.getHandSpace()};function X(ne){const le=b.indexOf(ne.inputSource);if(le===-1)return;const ge=y[le];ge!==void 0&&(ge.update(ne.inputSource,ne.frame,l||o),ge.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",j);for(let ne=0;ne<y.length;ne++){const le=b[ne];le!==null&&(b[ne]=null,y[ne].disconnect(le))}H=null,Z=null,g.reset();for(const ne in p)delete p[ne];e.setRenderTarget(M),m=null,u=null,d=null,s=null,x=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",j),S.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,we=null,Ae=null;S.depth&&(Ae=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=S.stencil?er:Qs,we=S.stencil?Ks:ki);const He={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new pi(u.textureWidth,u.textureHeight,{format:xn,type:Un,depthTexture:new sd(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new pi(m.framebufferWidth,m.framebufferHeight,{format:xn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(ne){for(let le=0;le<ne.removed.length;le++){const ge=ne.removed[le],we=b.indexOf(ge);we>=0&&(b[we]=null,y[we].disconnect(ge))}for(let le=0;le<ne.added.length;le++){const ge=ne.added[le];let we=b.indexOf(ge);if(we===-1){for(let He=0;He<y.length;He++)if(He>=b.length){b.push(ge),we=He;break}else if(b[He]===null){b[He]=ge,we=He;break}if(we===-1)break}const Ae=y[we];Ae&&Ae.connect(ge)}}const W=new D,me=new D;function ye(ne,le,ge){W.setFromMatrixPosition(le.matrixWorld),me.setFromMatrixPosition(ge.matrixWorld);const we=W.distanceTo(me),Ae=le.projectionMatrix.elements,He=ge.projectionMatrix.elements,it=Ae[14]/(Ae[10]-1),k=Ae[14]/(Ae[10]+1),oe=(Ae[9]+1)/Ae[5],re=(Ae[9]-1)/Ae[5],ie=(Ae[8]-1)/Ae[0],U=(He[8]+1)/He[0],q=it*ie,G=it*U,ee=we/(-ie+U),se=ee*-ie;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(se),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ae[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const he=it+ee,R=k+ee,f=q-se,P=G+(we-se),L=oe*k/R*he,B=re*k/R*he;ne.projectionMatrix.makePerspective(f,P,L,B,he,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function be(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let le=ne.near,ge=ne.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),N.near=E.near=w.near=le,N.far=E.far=w.far=ge,(H!==N.near||Z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),H=N.near,Z=N.far),N.layers.mask=ne.layers.mask|6,w.layers.mask=N.layers.mask&3,E.layers.mask=N.layers.mask&5;const we=ne.parent,Ae=N.cameras;be(N,we);for(let He=0;He<Ae.length;He++)be(Ae[He],we);Ae.length===2?ye(N,w,E):N.projectionMatrix.copy(w.projectionMatrix),Be(ne,N,we)};function Be(ne,le,ge){ge===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(ge.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=tr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(ne){c=ne,u!==null&&(u.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(ne){return p[ne]};let Je=null;function nt(ne,le){if(h=le.getViewerPose(l||o),_=le,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let we=!1;ge.length!==N.cameras.length&&(N.cameras.length=0,we=!0);for(let k=0;k<ge.length;k++){const oe=ge[k];let re=null;if(m!==null)re=m.getViewport(oe);else{const U=d.getViewSubImage(u,oe);re=U.viewport,k===0&&(e.setRenderTargetTextures(x,U.colorTexture,U.depthStencilTexture),e.setRenderTarget(x))}let ie=I[k];ie===void 0&&(ie=new Bt,ie.layers.enable(k),ie.viewport=new gt,I[k]=ie),ie.matrix.fromArray(oe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(oe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),k===0&&(N.matrix.copy(ie.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),we===!0&&N.cameras.push(ie)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const k=d.getDepthInformation(ge[0]);k&&k.isValid&&k.texture&&g.init(k,s.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let k=0;k<ge.length;k++){const oe=ge[k].camera;if(oe){let re=p[oe];re||(re=new rd,p[oe]=re);const ie=d.getCameraImage(oe);re.sourceTexture=ie}}}}for(let ge=0;ge<y.length;ge++){const we=b[ge],Ae=y[ge];we!==null&&Ae!==void 0&&Ae.update(we,le,l||o)}Je&&Je(ne,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),_=null}const Ze=new gd;Ze.setAnimationLoop(nt),this.setAnimationLoop=function(ne){Je=ne},this.dispose=function(){}}}const Ei=new Nn,ox=new xt;function ax(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Kh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===$t&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===$t&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,x=S.envMapRotation;M&&(g.envMap.value=M,Ei.copy(x),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),g.envMapRotation.value.setFromMatrix4(ox.makeRotationFromEuler(Ei)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===$t&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const S=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function lx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function l(S,M){let x=s[S.id];x===void 0&&(_(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",g));const y=M.program;n.updateUBOMapping(S,y);const b=e.render.frame;r[S.id]!==b&&(u(S),r[S.id]=b)}function h(S){const M=d();S.__bindingPointIndex=M;const x=i.createBuffer(),y=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){const M=s[S.id],x=S.uniforms,y=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,T=x.length;b<T;b++){const C=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,E=C.length;w<E;w++){const I=C[w];if(m(I,b,w,y)===!0){const N=I.__offset,H=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let X=0;X<H.length;X++){const Y=H[X],j=v(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,N+Z,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,Z),Z+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,M,x,y){const b=S.value,T=M+"_"+x;if(y[T]===void 0)return typeof b=="number"||typeof b=="boolean"?y[T]=b:y[T]=b.clone(),!0;{const C=y[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return y[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(S){const M=S.uniforms;let x=0;const y=16;for(let T=0,C=M.length;T<C;T++){const w=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,I=w.length;E<I;E++){const N=w[E],H=Array.isArray(N.value)?N.value:[N.value];for(let Z=0,X=H.length;Z<X;Z++){const Y=H[Z],j=v(Y),W=x%y,me=W%j.boundary,ye=W+me;x+=me,ye!==0&&y-ye<j.storage&&(x+=y-ye),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=j.storage}}}const b=x%y;return b>0&&(x+=y-b),S.__size=x,S.__cache={},this}function v(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function g(S){const M=S.target;M.removeEventListener("dispose",g);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class cx{constructor(e={}){const{canvas:t=df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const _=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let y=!1;this._outputColorSpace=yt;let b=0,T=0,C=null,w=-1,E=null;const I=new gt,N=new gt;let H=null;const Z=new tt(0);let X=0,Y=t.width,j=t.height,W=1,me=null,ye=null;const be=new gt(0,0,Y,j),Be=new gt(0,0,Y,j);let Je=!1;const nt=new Il;let Ze=!1,ne=!1;const le=new xt,ge=new D,we=new gt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function it(){return C===null?W:1}let k=n;function oe(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yl}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",xe,!1),k===null){const z="webgl2";if(k=oe(z,A),k===null)throw oe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let re,ie,U,q,G,ee,se,he,R,f,P,L,B,O,ce,te,Se,fe,K,_e,Oe,Ie,Te,We;function F(){re=new vg(k),re.init(),Ie=new tx(k,re),ie=new ug(k,re,e,Ie),U=new Q_(k,re),ie.reversedDepthBuffer&&u&&U.buffers.depth.setReversed(!0),q=new Sg(k),G=new z_,ee=new ex(k,re,U,G,ie,Ie,q),se=new pg(x),he=new xg(x),R=new Rp(k),Te=new hg(k,R),f=new yg(k,R,q,Te),P=new bg(k,f,R,q),K=new Eg(k,ie,ee),te=new fg(G),L=new B_(x,se,he,re,ie,Te,te),B=new ax(x,G),O=new V_,ce=new $_(re),fe=new cg(x,se,he,U,P,m,c),Se=new j_(x,P,ie),We=new lx(k,q,ie,U),_e=new dg(k,re,q),Oe=new Mg(k,re,q),q.programs=L.programs,x.capabilities=ie,x.extensions=re,x.properties=G,x.renderLists=O,x.shadowMap=Se,x.state=U,x.info=q}F();const ve=new rx(x,k);this.xr=ve,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(Y,j,!1))},this.getSize=function(A){return A.set(Y,j)},this.setSize=function(A,z,J=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,j=z,t.width=Math.floor(A*W),t.height=Math.floor(z*W),J===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(Y*W,j*W).floor()},this.setDrawingBufferSize=function(A,z,J){Y=A,j=z,W=J,t.width=Math.floor(A*J),t.height=Math.floor(z*J),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(be)},this.setViewport=function(A,z,J,$){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,z,J,$),U.viewport(I.copy(be).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Be)},this.setScissor=function(A,z,J,$){A.isVector4?Be.set(A.x,A.y,A.z,A.w):Be.set(A,z,J,$),U.scissor(N.copy(Be).multiplyScalar(W).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(A){U.setScissorTest(Je=A)},this.setOpaqueSort=function(A){me=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,J=!0){let $=0;if(A){let V=!1;if(C!==null){const Me=C.texture.format;V=Me===Tl||Me===wl||Me===bl}if(V){const Me=C.texture.type,Le=Me===Un||Me===ki||Me===js||Me===Ks||Me===Sl||Me===El,Fe=fe.getClearColor(),Ue=fe.getClearAlpha(),Ge=Fe.r,qe=Fe.g,ze=Fe.b;Le?(_[0]=Ge,_[1]=qe,_[2]=ze,_[3]=Ue,k.clearBufferuiv(k.COLOR,0,_)):(v[0]=Ge,v[1]=qe,v[2]=ze,v[3]=Ue,k.clearBufferiv(k.COLOR,0,v))}else $|=k.COLOR_BUFFER_BIT}z&&($|=k.DEPTH_BUFFER_BIT),J&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),fe.dispose(),O.dispose(),ce.dispose(),G.dispose(),se.dispose(),he.dispose(),P.dispose(),Te.dispose(),We.dispose(),L.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",wn),ve.removeEventListener("sessionend",nc),gi.stop()};function Ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=q.autoReset,z=Se.enabled,J=Se.autoUpdate,$=Se.needsUpdate,V=Se.type;F(),q.autoReset=A,Se.enabled=z,Se.autoUpdate=J,Se.needsUpdate=$,Se.type=V}function xe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ae(A){const z=A.target;z.removeEventListener("dispose",ae),De(z)}function De(A){$e(A),G.remove(A)}function $e(A){const z=G.get(A).programs;z!==void 0&&(z.forEach(function(J){L.releaseProgram(J)}),A.isShaderMaterial&&L.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,J,$,V,Me){z===null&&(z=Ae);const Le=V.isMesh&&V.matrixWorld.determinant()<0,Fe=eu(A,z,J,$,V);U.setMaterial($,Le);let Ue=J.index,Ge=1;if($.wireframe===!0){if(Ue=f.getWireframeAttribute(J),Ue===void 0)return;Ge=2}const qe=J.drawRange,ze=J.attributes.position;let st=qe.start*Ge,dt=(qe.start+qe.count)*Ge;Me!==null&&(st=Math.max(st,Me.start*Ge),dt=Math.min(dt,(Me.start+Me.count)*Ge)),Ue!==null?(st=Math.max(st,0),dt=Math.min(dt,Ue.count)):ze!=null&&(st=Math.max(st,0),dt=Math.min(dt,ze.count));const Tt=dt-st;if(Tt<0||Tt===1/0)return;Te.setup(V,$,Fe,J,Ue);let vt,pt=_e;if(Ue!==null&&(vt=R.get(Ue),pt=Oe,pt.setIndex(vt)),V.isMesh)$.wireframe===!0?(U.setLineWidth($.wireframeLinewidth*it()),pt.setMode(k.LINES)):pt.setMode(k.TRIANGLES);else if(V.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),U.setLineWidth(Ve*it()),V.isLineSegments?pt.setMode(k.LINES):V.isLineLoop?pt.setMode(k.LINE_LOOP):pt.setMode(k.LINE_STRIP)}else V.isPoints?pt.setMode(k.POINTS):V.isSprite&&pt.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ve=V._multiDrawStarts,Et=V._multiDrawCounts,at=V._multiDrawCount,Yt=Ue?R.get(Ue).bytesPerElement:1,zi=G.get($).currentProgram.getUniforms();for(let Zt=0;Zt<at;Zt++)zi.setValue(k,"_gl_DrawID",Zt),pt.render(Ve[Zt]/Yt,Et[Zt])}else if(V.isInstancedMesh)pt.renderInstances(st,Tt,V.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Et=Math.min(J.instanceCount,Ve);pt.renderInstances(st,Tt,Et)}else pt.render(st,Tt)};function mt(A,z,J){A.transparent===!0&&A.side===Rt&&A.forceSinglePass===!1?(A.side=$t,A.needsUpdate=!0,pr(A,z,J),A.side=fi,A.needsUpdate=!0,pr(A,z,J),A.side=Rt):pr(A,z,J)}this.compile=function(A,z,J=null){J===null&&(J=A),p=ce.get(J),p.init(z),M.push(p),J.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==J&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){const Fe=Me[Le];mt(Fe,J,V),$.add(Fe)}else mt(Me,J,V),$.add(Me)}),p=M.pop(),$},this.compileAsync=function(A,z,J=null){const $=this.compile(A,z,J);return new Promise(V=>{function Me(){if($.forEach(function(Le){G.get(Le).currentProgram.isReady()&&$.delete(Le)}),$.size===0){V(A);return}setTimeout(Me,10)}re.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ct=null;function On(A){ct&&ct(A)}function wn(){gi.stop()}function nc(){gi.start()}const gi=new gd;gi.setAnimationLoop(On),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(A){ct=A,ve.setAnimationLoop(A),A===null?gi.stop():gi.start()},ve.addEventListener("sessionstart",wn),ve.addEventListener("sessionend",nc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(z),z=ve.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,C),p=ce.get(A,M.length),p.init(z),M.push(p),le.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),nt.setFromProjectionMatrix(le,Pn,z.reversedDepth),ne=this.localClippingEnabled,Ze=te.init(this.clippingPlanes,ne),g=O.get(A,S.length),g.init(),S.push(g),ve.enabled===!0&&ve.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&Eo(Me,z,-1/0,x.sortObjects)}Eo(A,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(me,ye),He=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,He&&fe.addToRenderList(g,A),this.info.render.frame++,Ze===!0&&te.beginShadows();const J=p.state.shadowsArray;Se.render(J,A,z),Ze===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,V=g.transmissive;if(p.setupLights(),z.isArrayCamera){const Me=z.cameras;if(V.length>0)for(let Le=0,Fe=Me.length;Le<Fe;Le++){const Ue=Me[Le];sc($,V,A,Ue)}He&&fe.render(A);for(let Le=0,Fe=Me.length;Le<Fe;Le++){const Ue=Me[Le];ic(g,A,Ue,Ue.viewport)}}else V.length>0&&sc($,V,A,z),He&&fe.render(A),ic(g,A,z);C!==null&&T===0&&(ee.updateMultisampleRenderTarget(C),ee.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,z),Te.resetDefaultState(),w=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],Ze===!0&&te.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Eo(A,z,J,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||nt.intersectsSprite(A)){$&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const Le=P.update(A),Fe=A.material;Fe.visible&&g.push(A,Le,Fe,J,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||nt.intersectsObject(A))){const Le=P.update(A),Fe=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),we.copy(Le.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Fe)){const Ue=Le.groups;for(let Ge=0,qe=Ue.length;Ge<qe;Ge++){const ze=Ue[Ge],st=Fe[ze.materialIndex];st&&st.visible&&g.push(A,Le,st,J,we.z,ze)}}else Fe.visible&&g.push(A,Le,Fe,J,we.z,null)}}const Me=A.children;for(let Le=0,Fe=Me.length;Le<Fe;Le++)Eo(Me[Le],z,J,$)}function ic(A,z,J,$){const V=A.opaque,Me=A.transmissive,Le=A.transparent;p.setupLightsView(J),Ze===!0&&te.setGlobalState(x.clippingPlanes,J),$&&U.viewport(I.copy($)),V.length>0&&fr(V,z,J),Me.length>0&&fr(Me,z,J),Le.length>0&&fr(Le,z,J),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function sc(A,z,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new pi(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Ts:Un,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const Me=p.state.transmissionRenderTarget[$.id],Le=$.viewport||I;Me.setSize(Le.z*x.transmissionResolutionScale,Le.w*x.transmissionResolutionScale);const Fe=x.getRenderTarget(),Ue=x.getActiveCubeFace(),Ge=x.getActiveMipmapLevel();x.setRenderTarget(Me),x.getClearColor(Z),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),He&&fe.render(J);const qe=x.toneMapping;x.toneMapping=ui;const ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Ze===!0&&te.setGlobalState(x.clippingPlanes,$),fr(A,J,$),ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me),re.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let dt=0,Tt=z.length;dt<Tt;dt++){const vt=z[dt],pt=vt.object,Ve=vt.geometry,Et=vt.material,at=vt.group;if(Et.side===Rt&&pt.layers.test($.layers)){const Yt=Et.side;Et.side=$t,Et.needsUpdate=!0,rc(pt,J,$,Ve,Et,at),Et.side=Yt,Et.needsUpdate=!0,st=!0}}st===!0&&(ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me))}x.setRenderTarget(Fe,Ue,Ge),x.setClearColor(Z,X),ze!==void 0&&($.viewport=ze),x.toneMapping=qe}function fr(A,z,J){const $=z.isScene===!0?z.overrideMaterial:null;for(let V=0,Me=A.length;V<Me;V++){const Le=A[V],Fe=Le.object,Ue=Le.geometry,Ge=Le.group;let qe=Le.material;qe.allowOverride===!0&&$!==null&&(qe=$),Fe.layers.test(J.layers)&&rc(Fe,z,J,Ue,qe,Ge)}}function rc(A,z,J,$,V,Me){A.onBeforeRender(x,z,J,$,V,Me),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(x,z,J,$,A,Me),V.transparent===!0&&V.side===Rt&&V.forceSinglePass===!1?(V.side=$t,V.needsUpdate=!0,x.renderBufferDirect(J,z,$,V,A,Me),V.side=fi,V.needsUpdate=!0,x.renderBufferDirect(J,z,$,V,A,Me),V.side=Rt):x.renderBufferDirect(J,z,$,V,A,Me),A.onAfterRender(x,z,J,$,V,Me)}function pr(A,z,J){z.isScene!==!0&&(z=Ae);const $=G.get(A),V=p.state.lights,Me=p.state.shadowsArray,Le=V.state.version,Fe=L.getParameters(A,V.state,Me,z,J),Ue=L.getProgramCacheKey(Fe);let Ge=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?he:se).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ge===void 0&&(A.addEventListener("dispose",ae),Ge=new Map,$.programs=Ge);let qe=Ge.get(Ue);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===Le)return ac(A,Fe),qe}else Fe.uniforms=L.getUniforms(A),A.onBeforeCompile(Fe,x),qe=L.acquireProgram(Fe,Ue),Ge.set(Ue,qe),$.uniforms=Fe.uniforms;const ze=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=te.uniform),ac(A,Fe),$.needsLights=nu(A),$.lightsStateVersion=Le,$.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=qe,$.uniformsList=null,qe}function oc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Kr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ac(A,z){const J=G.get(A);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function eu(A,z,J,$,V){z.isScene!==!0&&(z=Ae),ee.resetTextureUnits();const Me=z.fog,Le=$.isMeshStandardMaterial?z.environment:null,Fe=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:vs,Ue=($.isMeshStandardMaterial?he:se).get($.envMap||Le),Ge=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qe=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,dt=!!J.morphAttributes.color;let Tt=ui;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Tt=x.toneMapping);const vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,pt=vt!==void 0?vt.length:0,Ve=G.get($),Et=p.state.lights;if(Ze===!0&&(ne===!0||A!==E)){const Vt=A===E&&$.id===w;te.setState($,A,Vt)}let at=!1;$.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Et.state.version||Ve.outputColorSpace!==Fe||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isBatchedMesh&&Ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ve.instancingMorph===!1&&V.morphTexture!==null||Ve.envMap!==Ue||$.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==te.numPlanes||Ve.numIntersection!==te.numIntersection)||Ve.vertexAlphas!==Ge||Ve.vertexTangents!==qe||Ve.morphTargets!==ze||Ve.morphNormals!==st||Ve.morphColors!==dt||Ve.toneMapping!==Tt||Ve.morphTargetsCount!==pt)&&(at=!0):(at=!0,Ve.__version=$.version);let Yt=Ve.currentProgram;at===!0&&(Yt=pr($,z,V));let zi=!1,Zt=!1,Ls=!1;const bt=Yt.getUniforms(),nn=Ve.uniforms;if(U.useProgram(Yt.program)&&(zi=!0,Zt=!0,Ls=!0),$.id!==w&&(w=$.id,Zt=!0),zi||E!==A){U.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(k,"projectionMatrix",A.projectionMatrix),bt.setValue(k,"viewMatrix",A.matrixWorldInverse);const Xt=bt.map.cameraPosition;Xt!==void 0&&Xt.setValue(k,ge.setFromMatrixPosition(A.matrixWorld)),ie.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Zt=!0,Ls=!0)}if(V.isSkinnedMesh){bt.setOptional(k,V,"bindMatrix"),bt.setOptional(k,V,"bindMatrixInverse");const Vt=V.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),bt.setValue(k,"boneTexture",Vt.boneTexture,ee))}V.isBatchedMesh&&(bt.setOptional(k,V,"batchingTexture"),bt.setValue(k,"batchingTexture",V._matricesTexture,ee),bt.setOptional(k,V,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",V._indirectTexture,ee),bt.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",V._colorsTexture,ee));const sn=J.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&K.update(V,J,Yt),(Zt||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,bt.setValue(k,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(nn.envMap.value=Ue,nn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(nn.envMapIntensity.value=z.environmentIntensity),Zt&&(bt.setValue(k,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&tu(nn,Ls),Me&&$.fog===!0&&B.refreshFogUniforms(nn,Me),B.refreshMaterialUniforms(nn,$,W,j,p.state.transmissionRenderTarget[A.id]),Kr.upload(k,oc(Ve),nn,ee)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Kr.upload(k,oc(Ve),nn,ee),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(k,"center",V.center),bt.setValue(k,"modelViewMatrix",V.modelViewMatrix),bt.setValue(k,"normalMatrix",V.normalMatrix),bt.setValue(k,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Vt=$.uniformsGroups;for(let Xt=0,bo=Vt.length;Xt<bo;Xt++){const _i=Vt[Xt];We.update(_i,Yt),We.bind(_i,Yt)}}return Yt}function tu(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function nu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,J){const $=G.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),G.get(A.texture).__webglTexture=z,G.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const J=G.get(A);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const iu=k.createFramebuffer();this.setRenderTarget=function(A,z=0,J=0){C=A,b=z,T=J;let $=!0,V=null,Me=!1,Le=!1;if(A){const Ue=G.get(A);if(Ue.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(k.FRAMEBUFFER,null),$=!1;else if(Ue.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if(Ue.__hasExternalTextures)ee.rebindTextures(A,G.get(A.texture).__webglTexture,G.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ze=A.depthTexture;if(Ue.__boundDepthTexture!==ze){if(ze!==null&&G.has(ze)&&(A.width!==ze.image.width||A.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}const Ge=A.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const qe=G.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[z])?V=qe[z][J]:V=qe[z],Me=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?V=G.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[J]:V=qe,I.copy(A.viewport),N.copy(A.scissor),H=A.scissorTest}else I.copy(be).multiplyScalar(W).floor(),N.copy(Be).multiplyScalar(W).floor(),H=Je;if(J!==0&&(V=iu),U.bindFramebuffer(k.FRAMEBUFFER,V)&&$&&U.drawBuffers(A,V),U.viewport(I),U.scissor(N),U.setScissorTest(H),Me){const Ue=G.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ue.__webglTexture,J)}else if(Le){const Ue=z;for(let Ge=0;Ge<A.textures.length;Ge++){const qe=G.get(A.textures[Ge]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ge,qe.__webglTexture,J,Ue)}}else if(A!==null&&J!==0){const Ue=G.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ue.__webglTexture,J)}w=-1},this.readRenderTargetPixels=function(A,z,J,$,V,Me,Le,Fe=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){U.bindFramebuffer(k.FRAMEBUFFER,Ue);try{const Ge=A.textures[Fe],qe=Ge.format,ze=Ge.type;if(!ie.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&J>=0&&J<=A.height-V&&(A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(z,J,$,V,Ie.convert(qe),Ie.convert(ze),Me))}finally{const Ge=C!==null?G.get(C).__webglFramebuffer:null;U.bindFramebuffer(k.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(A,z,J,$,V,Me,Le,Fe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(z>=0&&z<=A.width-$&&J>=0&&J<=A.height-V){U.bindFramebuffer(k.FRAMEBUFFER,Ue);const Ge=A.textures[Fe],qe=Ge.format,ze=Ge.type;if(!ie.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Fe),k.readPixels(z,J,$,V,Ie.convert(qe),Ie.convert(ze),0);const dt=C!==null?G.get(C).__webglFramebuffer:null;U.bindFramebuffer(k.FRAMEBUFFER,dt);const Tt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await uf(k,Tt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,st),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.deleteBuffer(st),k.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,J=0){const $=Math.pow(2,-J),V=Math.floor(A.image.width*$),Me=Math.floor(A.image.height*$),Le=z!==null?z.x:0,Fe=z!==null?z.y:0;ee.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Le,Fe,V,Me),U.unbindTexture()};const su=k.createFramebuffer(),ru=k.createFramebuffer();this.copyTextureToTexture=function(A,z,J=null,$=null,V=0,Me=null){Me===null&&(V!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=V,V=0):Me=0);let Le,Fe,Ue,Ge,qe,ze,st,dt,Tt;const vt=A.isCompressedTexture?A.mipmaps[Me]:A.image;if(J!==null)Le=J.max.x-J.min.x,Fe=J.max.y-J.min.y,Ue=J.isBox3?J.max.z-J.min.z:1,Ge=J.min.x,qe=J.min.y,ze=J.isBox3?J.min.z:0;else{const sn=Math.pow(2,-V);Le=Math.floor(vt.width*sn),Fe=Math.floor(vt.height*sn),A.isDataArrayTexture?Ue=vt.depth:A.isData3DTexture?Ue=Math.floor(vt.depth*sn):Ue=1,Ge=0,qe=0,ze=0}$!==null?(st=$.x,dt=$.y,Tt=$.z):(st=0,dt=0,Tt=0);const pt=Ie.convert(z.format),Ve=Ie.convert(z.type);let Et;z.isData3DTexture?(ee.setTexture3D(z,0),Et=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ee.setTexture2DArray(z,0),Et=k.TEXTURE_2D_ARRAY):(ee.setTexture2D(z,0),Et=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);const at=k.getParameter(k.UNPACK_ROW_LENGTH),Yt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zi=k.getParameter(k.UNPACK_SKIP_PIXELS),Zt=k.getParameter(k.UNPACK_SKIP_ROWS),Ls=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,vt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ge),k.pixelStorei(k.UNPACK_SKIP_ROWS,qe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ze);const bt=A.isDataArrayTexture||A.isData3DTexture,nn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const sn=G.get(A),Vt=G.get(z),Xt=G.get(sn.__renderTarget),bo=G.get(Vt.__renderTarget);U.bindFramebuffer(k.READ_FRAMEBUFFER,Xt.__webglFramebuffer),U.bindFramebuffer(k.DRAW_FRAMEBUFFER,bo.__webglFramebuffer);for(let _i=0;_i<Ue;_i++)bt&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(A).__webglTexture,V,ze+_i),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,G.get(z).__webglTexture,Me,Tt+_i)),k.blitFramebuffer(Ge,qe,Le,Fe,st,dt,Le,Fe,k.DEPTH_BUFFER_BIT,k.NEAREST);U.bindFramebuffer(k.READ_FRAMEBUFFER,null),U.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||G.has(A)){const sn=G.get(A),Vt=G.get(z);U.bindFramebuffer(k.READ_FRAMEBUFFER,su),U.bindFramebuffer(k.DRAW_FRAMEBUFFER,ru);for(let Xt=0;Xt<Ue;Xt++)bt?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,V,ze+Xt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,V),nn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vt.__webglTexture,Me,Tt+Xt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vt.__webglTexture,Me),V!==0?k.blitFramebuffer(Ge,qe,Le,Fe,st,dt,Le,Fe,k.COLOR_BUFFER_BIT,k.NEAREST):nn?k.copyTexSubImage3D(Et,Me,st,dt,Tt+Xt,Ge,qe,Le,Fe):k.copyTexSubImage2D(Et,Me,st,dt,Ge,qe,Le,Fe);U.bindFramebuffer(k.READ_FRAMEBUFFER,null),U.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Et,Me,st,dt,Tt,Le,Fe,Ue,pt,Ve,vt.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Et,Me,st,dt,Tt,Le,Fe,Ue,pt,vt.data):k.texSubImage3D(Et,Me,st,dt,Tt,Le,Fe,Ue,pt,Ve,vt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,st,dt,Le,Fe,pt,Ve,vt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,st,dt,vt.width,vt.height,pt,vt.data):k.texSubImage2D(k.TEXTURE_2D,Me,st,dt,Le,Fe,pt,Ve,vt);k.pixelStorei(k.UNPACK_ROW_LENGTH,at),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Zt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ls),Me===0&&z.generateMipmaps&&k.generateMipmap(Et),U.unbindTexture()},this.initRenderTarget=function(A){G.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,U.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}class hx{constructor(){pe(this,"ctx",null);pe(this,"masterGain",null);pe(this,"engineOscA",null);pe(this,"engineOscB",null);pe(this,"engineFilter",null);pe(this,"engineGain",null);pe(this,"volume",.55);pe(this,"muted",!1);pe(this,"lastBlinkerOn",!1);pe(this,"lastRailBellTime",-999)}unlock(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.14,this.engineOscA=this.ctx.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=52,this.engineOscB=this.ctx.createOscillator(),this.engineOscB.type="triangle",this.engineOscB.frequency.value=104,this.engineOscA.connect(this.engineFilter),this.engineOscB.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOscA.start(),this.engineOscB.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e,t){this.volume=e,this.muted=t,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(t?0:e,this.ctx.currentTime,.04)}update(e,t,n){if(!this.ctx||this.ctx.state!=="running")return;const s=this.ctx.currentTime;if(this.engineOscA&&this.engineOscB&&this.engineFilter&&this.engineGain)if(e.stalled||e.rpm<=0)this.engineGain.gain.setTargetAtTime(0,s,.05);else{const r=Math.max(0,Math.min(1,(e.rpm-750)/3600)),o=38+r*96;this.engineOscA.frequency.setTargetAtTime(o,s,.05),this.engineOscB.frequency.setTargetAtTime(o*2,s,.05),this.engineFilter.frequency.setTargetAtTime(190+r*560,s,.06),this.engineGain.gain.setTargetAtTime(.08+r*.11,s,.06)}if(e.blinker!=="off"&&e.blinkerOn!==this.lastBlinkerOn&&this.playClick(e.blinkerOn?920:680,.025,.16),this.lastBlinkerOn=e.blinkerOn,t){const r=Math.hypot(e.x-38,e.z);if(r<58&&n-this.lastRailBellTime>=.45){this.lastRailBellTime=n;const o=Math.max(.03,Math.min(.28,8/Math.max(6,r)));this.playFumikiriBell(o)}}}playClick(e=800,t=.03,n=.15){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const s=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(e,s),o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+t),r.connect(o),o.connect(this.masterGain),r.start(s),r.stop(s+t)}playFumikiriBell(e){if(!this.ctx||!this.masterGain||this.muted)return;const t=this.ctx.currentTime;for(const n of[700,758]){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,t),r.gain.setValueAtTime(e*.5,t),r.gain.exponentialRampToValueAtTime(.001,t+.36),s.connect(r),r.connect(this.masterGain),s.start(t),s.stop(t+.37)}}playViolationChime(e){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=e?"sawtooth":"triangle",n.frequency.setValueAtTime(e?220:440,t),n.frequency.setValueAtTime(e?165:330,t+.12),s.gain.setValueAtTime(.22,t),s.gain.exponentialRampToValueAtTime(.001,t+.34),n.connect(s),s.connect(this.masterGain),n.start(t),n.stop(t+.35)}playThud(){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(42,e+.14),n.gain.setValueAtTime(.28,e),n.gain.exponentialRampToValueAtTime(.001,e+.15),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.16)}}class dx{constructor(){pe(this,"enabled",!0);pe(this,"lastSpokenText","");pe(this,"lastSpokenTime",0)}setEnabled(e){this.enabled=e,!e&&typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()}isEnabled(){return this.enabled}speak(e,t,n,s=!1){if(!this.enabled||typeof window>"u"||!("speechSynthesis"in window))return;const r=n==="ja"?e:t,o=performance.now();if(!(!s&&r===this.lastSpokenText&&o-this.lastSpokenTime<5500)){this.lastSpokenText=r,this.lastSpokenTime=o;try{s&&window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(r);a.lang=n==="ja"?"ja-JP":"en-US",a.rate=n==="ja"?1.05:1.02,a.pitch=1,a.volume=.9,window.speechSynthesis.speak(a)}catch{}}}announceViolation(e,t){const n=e.instantFail?`検定中止。${e.labelJa}。補助ブレーキ作動。`:`減点${e.points}点。${e.labelJa}。`,s=e.instantFail?`Exam terminated. ${e.labelEn}. Auxiliary brake applied.`:`Minus ${e.points} points. ${e.labelEn}.`;this.speak(n,s,t,!0)}}function ps(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function _o(i){let e=(i+Math.PI)%(Math.PI*2);return e<0&&(e+=Math.PI*2),e-Math.PI}function Vs(i,e,t,n,s){const r=Math.cos(t),o=Math.sin(t);return{x:i+n*r+s*o,z:e-n*o+s*r}}function ls(i,e,t,n){return Math.hypot(i-t,e-n)}const ci=90,Li=60,ai=7,fh=ai/2,an=-24,Ri=2.75,Bs=2,$s=18,il=34,ra=42,sl=58;function Xn(i,e){if(e<an-Ri-.6||e>an+Ri+.6||i<=$s||i>=sl)return{y:0,slopeX:0,slopeZ:0};if(i<il){const o=il-$s,a=(i-$s)/o,c=Bs*.5*(1-Math.cos(Math.PI*a)),l=Bs*.5*Math.PI/o*Math.sin(Math.PI*a);return{y:c,slopeX:l,slopeZ:0}}if(i<=ra)return{y:Bs,slopeX:0,slopeZ:0};const t=sl-ra,n=(i-ra)/t,s=Bs*.5*(1+Math.cos(Math.PI*n)),r=-(Bs*.5*Math.PI/t)*Math.sin(Math.PI*n);return{y:s,slopeX:r,slopeZ:0}}function ux(){const t=105*Math.PI/180,n=[],s=[],r=[],o=(g,p,S,M)=>{const x=M,y=-S;n.push({x:g,z:p}),s.push({x:g+x*1.8,z:p+y*1.8}),r.push({x:g-x*1.8,z:p-y*1.8})};o(-46,-3.5,0,-1),o(-46,-8,0,-1);const a=-38.5,c=-12,l=28;for(let g=0;g<=l;g++){const p=Math.PI+t*g/l,S=a+7.5*Math.cos(p),M=c+7.5*Math.sin(p),x=-Math.sin(p),y=Math.cos(p);o(S,M,x,y)}const h=Math.PI+t,d=a+2*7.5*Math.cos(h),u=c+2*7.5*Math.sin(h);for(let g=1;g<=l;g++){const p=t*(1-g/l),S=d+7.5*Math.cos(p),M=u+7.5*Math.sin(p),x=Math.sin(p),y=-Math.cos(p);o(S,M,x,y)}const m=d+7.5;o(m,-34,0,-1),o(m,-42.5,0,-1);const _=[6,15,24,34,43,52],v=[];return _.forEach((g,p)=>{const S=s[g],M=r[g];S&&p%2===0&&v.push({id:`scurve-pole-l-${p}`,x:S.x,z:S.z,radius:.08,height:1.5,zone:"sCurve"}),M&&p%2===1&&v.push({id:`scurve-pole-r-${p}`,x:M.x,z:M.z,radius:.08,height:1.5,zone:"sCurve"})}),{centerline:n,leftCurb:s,rightCurb:r,poles:v}}const so=ux(),fx=so.centerline,px=2,Md=[{id:"scurve-left",points:so.leftCurb,height:.14,label:"S-Curve West Curb"},{id:"scurve-right",points:so.rightCurb,height:.14,label:"S-Curve East Curb"},{id:"crank-west-south",height:.14,label:"Crank West-South Curb",points:[{x:-50,z:3.5},{x:-50,z:20},{x:-36,z:20},{x:-36,z:42.5}]},{id:"crank-east-north",height:.14,label:"Crank East-North Curb",points:[{x:-46,z:3.5},{x:-46,z:16},{x:-32,z:16},{x:-32,z:42.5}]},{id:"bay-parking-curb",height:.14,label:"Direction Change Bay Curb",points:[{x:24.15,z:27.5},{x:24.15,z:33.7},{x:27.85,z:33.7},{x:27.85,z:27.5}]},{id:"parallel-parking-curb",height:.14,label:"Parallel Parking Curb",points:[{x:45,z:27.5},{x:45,z:30.2},{x:52.2,z:30.2},{x:52.2,z:27.5}]},{id:"hill-north-curb",height:.16,label:"Hill North Edge",points:[{x:18,z:-26.75},{x:58,z:-26.75}]},{id:"hill-south-curb",height:.16,label:"Hill South Edge",points:[{x:18,z:-21.25},{x:58,z:-21.25}]},{id:"outer-north",height:.14,points:[{x:-62,z:-49.5},{x:62,z:-49.5}]},{id:"outer-south",height:.14,points:[{x:-62,z:49.5},{x:62,z:49.5}]},{id:"outer-west",height:.14,points:[{x:-79.5,z:-32},{x:-79.5,z:32}]},{id:"outer-east",height:.14,points:[{x:79.5,z:-32},{x:79.5,z:32}]}],Sd=[...so.poles,{id:"crank-pole-in-1",x:-45.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-1",x:-50.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-in-2",x:-36.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-2",x:-31.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"bay-pole-fl",x:24.05,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-fr",x:27.95,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rl",x:24.05,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rr",x:27.95,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"par-pole-1",x:44.9,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-2",x:52.3,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-3",x:44.9,z:30.3,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-4",x:52.3,z:30.3,radius:.08,height:1.5,zone:"parallelParking"}],ro=[{id:"north-parked-van",x:-10,z:-48.1,halfW:1.9,halfL:.85,height:1.65,kind:"parkedCar"},{id:"clubhouse-building",x:0,z:56.2,halfW:16,halfL:4.5,height:7.2,kind:"building"}],zl=[{id:"signal-northbound",kind:"trafficLight",axis:"NS",x:-1.75,z:8.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"signal-southbound",kind:"trafficLight",axis:"NS",x:1.75,z:-8.5,dirX:0,dirZ:1,halfWidth:1.75},{id:"signal-eastbound",kind:"trafficLight",axis:"EW",x:-8.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75},{id:"signal-westbound",kind:"trafficLight",axis:"EW",x:8.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"railroad-eastbound",kind:"railroad",x:31.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"railroad-westbound",kind:"railroad",x:44.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"stop-west-t",kind:"stopSign",x:-67.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"stop-north-t",kind:"stopSign",x:-1.75,z:-38.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"stop-scurve-exit",kind:"stopSign",x:-27.12,z:-41.5,dirX:0,dirZ:-1,halfWidth:1.8},{id:"stop-crank-exit",kind:"stopSign",x:-34,z:41.5,dirX:0,dirZ:1,halfWidth:2}],ms={startBay:{id:"startBay",x:12,z:48.1,heading:Math.PI/2},sCurve:{id:"sCurve",x:-46,z:.5,heading:0},crank:{id:"crank",x:-48,z:-.5,heading:Math.PI},hillStart:{id:"hillStart",x:10,z:-24,heading:-Math.PI/2},railroad:{id:"railroad",x:20,z:-1.75,heading:-Math.PI/2},stopSign:{id:"stopSign",x:-56,z:1.75,heading:Math.PI/2},trafficLight:{id:"trafficLight",x:-1.75,z:22,heading:0},bayParking:{id:"bayParking",x:20,z:22.25,heading:-Math.PI/2},parallelParking:{id:"parallelParking",x:40,z:25.75,heading:-Math.PI/2},speedStraight:{id:"speedStraight",x:-56,z:-47.75,heading:-Math.PI/2}},mx=["startBay","sCurve","crank","hillStart","railroad","stopSign","trafficLight","bayParking","parallelParking","speedStraight"],ph=.09,gx=.08,_x=.45;function xx(i,e){const t=e.trackWidth/2,n=-e.wheelbase/2,s=e.wheelbase/2;return{FL:Vs(i.x,i.z,i.heading,-t,n),FR:Vs(i.x,i.z,i.heading,t,n),RL:Vs(i.x,i.z,i.heading,-t,s),RR:Vs(i.x,i.z,i.heading,t,s)}}function vx(i,e,t,n,s,r){const o=s-t,a=r-n,c=o*o+a*a;let l=0;c>1e-9&&(l=((i-t)*o+(e-n)*a)/c,l<0?l=0:l>1&&(l=1));const h=t+o*l,d=n+a*l;return{cx:h,cz:d,dist:Math.hypot(i-h,e-d)}}function rl(i,e,t=Md,n=Sd,s=ro){const r=xx(i,e),o=e.kind==="motorcycle"?.07:.11,a=["FL","FR","RL","RR"],c={};let l=!1,h=!1,d=0,u=0;for(const b of a){const T=r[b];let C=1/0,w=T.x,E=T.z;for(const W of t){const me=W.points;for(let ye=0;ye<me.length-1;ye++){const be=vx(T.x,T.z,me[ye].x,me[ye].z,me[ye+1].x,me[ye+1].z);be.dist<C&&(C=be.dist,w=be.cx,E=be.cz)}}const I=Math.max(0,C-ph-o),N=ph+o*.8,H=C<N,Z=!H&&I<gx,X=Math.max(0,Math.min(1,1-I/_x));let Y=0,j=0;if(H&&C>1e-5){const W=N-C,me=(T.x-w)/C,ye=(T.z-E)/C;Y=me*W,j=ye*W,d+=Y*.5,u+=j*.5}Z&&(l=!0),H&&(h=!0),c[b]={corner:b,x:T.x,z:T.z,minCurbDist:I,proximity:X,curbTouch:Z,curbMount:H,pushX:Y,pushZ:j}}const m=Math.cos(-i.heading),_=Math.sin(-i.heading),v=e.width/2,g=e.length/2,p=(b,T)=>{const C=b-i.x,w=T-i.z;return{x:C*m+w*_,z:-C*_+w*m}};let S=null;for(const b of n){const T=p(b.x,b.z),C=Math.max(-v,Math.min(v,T.x)),w=Math.max(-g,Math.min(g,T.z));if(Math.hypot(T.x-C,T.z-w)<b.radius){S=b;break}}let M=null;const x=[[0,0],[-v,-g],[v,-g],[-v,g],[v,g],[0,-g],[0,g]];for(const b of s){for(const[T,C]of x){const w=Vs(i.x,i.z,i.heading,T,C);if(Math.abs(w.x-b.x)<b.halfW&&Math.abs(w.z-b.z)<b.halfL){M=b;const E=i.x-b.x,I=i.z-b.z,N=b.halfW+v-Math.abs(E),H=b.halfL+g-Math.abs(I);N<H?d+=Math.sign(E||1)*Math.min(.4,N*.5):u+=Math.sign(I||1)*Math.min(.4,H*.5);break}}if(M)break}const y=1.6;return i.x<-ci+y&&(d+=-ci+y-i.x),i.x>ci-y&&(d+=ci-y-i.x),i.z<-Li+y&&(u+=-Li+y-i.z),i.z>Li-y&&(u+=Li-y-i.z),{wheels:c,anyCurbTouch:l,anyCurbMount:h,poleHit:S,obstacleHit:M,pushX:d,pushZ:u}}const yx={CURB_TOUCH:{ruleRefJa:"接輪（小）：縁石へのタイヤ接触（-10点）",ruleRefEn:"Curb Scrape (接輪): Tire brushed the curb (-10 pts).",howToFixJa:"当たる前に止まってバックする「切り返し（1回目は減点0）」で向きを直しましょう。",howToFixEn:"Stop BEFORE touching the curb and reverse to fix your angle (1st reversal = 0 pt deduction)."},CURB_MOUNT:{ruleRefJa:"脱輪：縁石乗り上げ（-20点 ／ 戻らず進行は検定中止）",ruleRefEn:"Curb Mount (脱輪): Wheel climbed over curb (-20 pts / Instant Fail if you keep driving).",howToFixJa:"すぐ停止して乗り上げる前の位置までバックで戻ってください（内輪差に注意）。",howToFixEn:"Stop immediately and reverse back onto the road. Swing wider before turning."},POLE_COLLISION:{ruleRefJa:"障害物接触：ポール・パイロン接触（一発検定中止）",ruleRefEn:"Obstacle Hit (接触): Struck a pole or parked car (Instant Fail).",howToFixJa:"サイドミラーでポールを確認し、当たる前に停止して「切り返し」を行ってください。",howToFixEn:"Check side mirrors and stop to reverse (Kirikaeshi) before touching any pole."},STOP_SIGN_VIOLATION:{ruleRefJa:"一時不停止（道交法第43条）：『止まれ』停止線手前で0 km/h停止なし（一発中止）",ruleRefEn:"Stop Sign Violation (止まれ): Did not stop at 0.0 km/h before stop line (Instant Fail).",howToFixJa:"白線の直前で0.0 km/hで2秒間止まり、左・右（Z/X）を見てから発進してください。",howToFixEn:"Stop at 0.0 km/h before the white line for 2 seconds, then look Left (Z) & Right (X)."},RAILROAD_NO_STOP:{ruleRefJa:"踏切不停止（道交法第33条）：踏切手前での一時不停止または警報機無視（一発中止）",ruleRefEn:"Railroad Violation (踏切): Crossed without stopping or during alarm (Instant Fail).",howToFixJa:"踏切手前で完全停止（0 km/h）し、左右確認（Z/X）をして変速せずに通過します。",howToFixEn:"Stop completely (0 km/h) before the line, look Left & Right (Z/X), then cross without shifting."},RED_LIGHT:{ruleRefJa:"信号無視（道交法第7条）：赤信号での交差点進入（一発検定中止）",ruleRefEn:"Red Light Violation (信号無視): Crossed stop line on Red (Instant Fail).",howToFixJa:"黄・赤信号では必ず停止線の手前で完全停止してください。",howToFixEn:"Always stop before the white stop line on Yellow or Red."},NO_SIGNAL:{ruleRefJa:"合図不履行（道交法第53条）：右左折・進路変更時のウインカー漏れ（-5点）",ruleRefEn:"Missing Blinker (合図不履行): Turned or changed lanes without turn signal (-5 pts).",howToFixJa:"右左折の30m手前、発進・進路変更の3秒前にQ（左）/ E（右）を出してください。",howToFixEn:"Press Q (Left) or E (Right) 30m before turning or 3s before changing lanes."},NO_SAFETY_LOOK:{ruleRefJa:"安全確認不履行：発進・一時停止・踏切での左右首振り目視不足（-5点）",ruleRefEn:"Missing Safety Look (安全確認): Did not turn head Left/Right to check blind spots (-5 pts).",howToFixJa:"発進や交差点進入の前にZ（左目視）・X（右目視）キーで首を振って確認してください。",howToFixEn:"Press Z (Look Left) and X (Look Right) before proceeding from stop lines or pulling out."},HILL_ROLLBACK:{ruleRefJa:"坂道逆行：上り坂発進での後退（0.3m以上で-10点、1.0m以上で検定中止）",ruleRefEn:"Hill Rollback (坂道後退): Rolled backward on uphill start (-10 pts / >1m Instant Fail).",howToFixJa:"サイドブレーキ（Space）を引き、アクセル（W）を踏んでからサイドを解除します。",howToFixEn:"Hold handbrake (Space), press throttle (W), then release handbrake smoothly."},SPEED_LIMIT:{ruleRefJa:"最高速度違反（道交法第22条）：40 km/h制限の超過（-10点）",ruleRefEn:"Speeding (速度超過): Exceeded the 40 km/h speed limit (-10 pts).",howToFixJa:"40km/hに達したらすぐにアクセルを戻し、カーブ手前で減速してください。",howToFixEn:"Ease off the throttle once you reach 38–40 km/h and brake before corners."},HANDBRAKE_DRAG:{ruleRefJa:"駐停車ブレーキ戻し忘れ：サイドブレーキを引いたまま走行（-5点）",ruleRefEn:"Handbrake Left On (サイド戻し忘れ): Drove with parking brake engaged (-5 pts).",howToFixJa:"発進前にSpaceキー（または手順⑥）でサイドブレーキを解除してください。",howToFixEn:"Press Space (or Pre-Drive Step 6) to release the handbrake before moving."},PRE_DRIVE_ORDER:{ruleRefJa:"乗車・発進手順不備：座席→ミラー→ベルトの順序違反または省略（-5点）",ruleRefEn:"Pre-Drive Order Error (発進手順): Skipped or did cockpit steps out of order (-5 pts).",howToFixJa:"発進前に画面上部の①ドア→②座席→③ミラー→④ベルト…を順番に押してください。",howToFixEn:"Click steps 1 → 2 (Seat) → 3 (Mirrors) → 4 (Seatbelt) in order before pulling out."},NO_SEATBELT:{ruleRefJa:"シートベルト未着用（道路交通法第71条の3）：ベルト未装着での発進（-10点）",ruleRefEn:"No Seatbelt (ベルト未着用): Pulled out without fastening seatbelt (-10 pts).",howToFixJa:"発進前に手順④（またはキー4）でシートベルトを着用してください。",howToFixEn:"Click Step 4 (or press key 4) to fasten your 3D seatbelt before driving."},PEDESTRIAN_PRIORITY:{ruleRefJa:"歩行者保護違反（道交法第38条）：横断歩道上の歩行者妨害（一発検定中止）",ruleRefEn:"Pedestrian Priority (歩行者妨害): Failed to stop for pedestrian at crosswalk (Instant Fail).",howToFixJa:"横断歩道に歩行者がいる時は必ず停止線手前で完全停止して待ってください。",howToFixEn:"Always stop completely before the crosswalk until pedestrians finish crossing."},TRAFFIC_COLLISION:{ruleRefJa:"他車接触事故（道交法第70条）：他の教習車との衝突（一発検定中止）",ruleRefEn:"Vehicle Collision (他車接触): Collided with another training car (Instant Fail).",howToFixJa:"周囲の教習車との車間距離を保ち、交差点では優先車に道を譲ってください。",howToFixEn:"Keep a safe following distance and yield to priority traffic at intersections."}},Vr=[{id:"wp-pullout",stationHint:"startBay",x:-10,z:47.75,radius:6.5,instructionJa:"発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう",instructionEn:"Bay 1: Signal right (E), glance right (X), and pull into the left lane"},{id:"wp-west-turn",stationHint:"stopSign",x:-77.75,z:10,radius:7,instructionJa:"外周西側を通って北の直線（40km/h区間）へ向かいましょう",instructionEn:"Continue along the West loop toward the North 40 km/h straight"},{id:"wp-north-straight",stationHint:"speedStraight",x:10,z:-47.75,radius:7.5,instructionJa:"北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速",instructionEn:"North straight: Signal past the parked van and reach ~35–40 km/h"},{id:"wp-hill-approach",stationHint:"hillStart",x:24,z:-24,radius:6,instructionJa:"坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう",instructionEn:"Hill Start: Stop on the up-ramp, then pull away cleanly without rollback"},{id:"wp-bay-access",stationHint:"bayParking",x:26,z:30.8,radius:4.5,instructionJa:"方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫",instructionEn:"Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing"},{id:"wp-railroad",stationHint:"railroad",x:22,z:1.75,radius:6.5,instructionJa:"踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう",instructionEn:"Railroad: Stop completely before line, look Left & Right (Z/X), then cross"},{id:"wp-signal",stationHint:"trafficLight",x:-15,z:1.75,radius:6.5,instructionJa:"信号交差点：信号に従って直進し、NWのS字コース入口へ左折",instructionEn:"Signal Intersection: Obey light, cross West, then enter S-Curve (North)"},{id:"wp-scurve",stationHint:"sCurve",x:-27.12,z:-36,radius:5.5,instructionJa:"S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう",instructionEn:"S-Curve: Creep slowly through the bends without touching curbs or poles"},{id:"wp-crank",stationHint:"crank",x:-34,z:36,radius:5.5,instructionJa:"クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう",instructionEn:"Crank: Swing wide around both 90° turns cleanly onto the South road"},{id:"wp-finish-bay",stationHint:"startBay",x:12,z:48.1,radius:3.5,instructionJa:"ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です",instructionEn:"Finish: Pull alongside Start Bay 1 and come to a complete stop"}];class Mx{constructor(){pe(this,"mode","practice");pe(this,"score",100);pe(this,"terminated",!1);pe(this,"finished",!1);pe(this,"simTimeSec",0);pe(this,"startOdometerM",0);pe(this,"violations",[]);pe(this,"waypointIndex",0);pe(this,"cooldowns",new Map);pe(this,"zoneTrackers",new Map);pe(this,"recentSignalTime",-999);pe(this,"recentSignalDir",null);pe(this,"headingSample",0);pe(this,"headingAccumTurn",0);pe(this,"hillMaxXOnRamp",-1/0);pe(this,"handbrakeDragDist",0);pe(this,"curbMountCount",0);pe(this,"preDriveChecked",!1);pe(this,"spawnedAtStartBay",!1);pe(this,"lastViolation",null);pe(this,"onViolation");pe(this,"onExamFinish")}reset(e,t){this.mode=e,this.score=100,this.terminated=!1,this.finished=!1,this.simTimeSec=0,this.startOdometerM=t.odometerM,this.violations=[],this.waypointIndex=0,this.cooldowns.clear(),this.zoneTrackers.clear(),this.recentSignalTime=-999,this.recentSignalDir=null,this.headingSample=t.heading,this.headingAccumTurn=0,this.hillMaxXOnRamp=-1/0,this.handbrakeDragDist=0,this.curbMountCount=0,this.lastViolation=null;const n=ms.startBay;this.spawnedAtStartBay=ls(t.x,t.z,n.x,n.z)<2.2,this.preDriveChecked=!1}getMode(){return this.mode}getScore(){return Math.max(0,this.score)}isTerminated(){return this.terminated}isFinished(){return this.finished}getViolations(){return this.violations}getCurrentWaypoint(){return this.mode!=="exam"?null:Vr[this.waypointIndex]??null}getWaypointProgress(){return{current:this.waypointIndex,total:Vr.length}}getSummary(e){var r;const t=this.getScore(),n=new Map;for(const o of this.violations)n.set(o.code,(n.get(o.code)??0)+1);let s;return n.has("RAILROAD_NO_STOP")?s="railroad":n.has("STOP_SIGN_VIOLATION")?s="stopSign":n.has("RED_LIGHT")?s="trafficLight":n.has("HILL_ROLLBACK")?s="hillStart":(n.has("CURB_MOUNT")||n.has("POLE_COLLISION"))&&(s=((r=this.getCurrentWaypoint())==null?void 0:r.stationHint)??"crank"),{passed:!this.terminated&&t>=70,terminated:this.terminated,score:t,elapsedSec:this.simTimeSec,distanceM:Math.max(0,e.odometerM-this.startOdometerM),violations:[...this.violations],weakArea:s}}recordViolation(e,t,n,s,r,o,a,c=3){var u;if(this.finished)return;const l=this.cooldowns.get(e)??-999;if(this.simTimeSec-l<c)return;this.cooldowns.set(e,this.simTimeSec);const h=yx[e],d={id:`${e}-${this.violations.length+1}`,code:e,points:t,instantFail:n,timestampSec:this.simTimeSec,labelJa:s,labelEn:r,detailJa:o,detailEn:a,ruleRefJa:h==null?void 0:h.ruleRefJa,ruleRefEn:h==null?void 0:h.ruleRefEn,howToFixJa:h==null?void 0:h.howToFixJa,howToFixEn:h==null?void 0:h.howToFixEn,quiz:h==null?void 0:h.quiz};this.violations.push(d),this.lastViolation=d,this.score=Math.max(0,this.score-t),(u=this.onViolation)==null||u.call(this,d),n&&this.mode==="exam"&&(this.terminated=!0,this.finished=!0)}update(e,t,n,s,r){var l,h;if(this.finished)return;if(this.simTimeSec+=e,r!=null&&r.pedestrianDanger&&this.recordViolation("PEDESTRIAN_PRIORITY",30,!0,"歩行者保護違反（横断歩道）","Pedestrian Crosswalk Violation",r.pedestrianLabelJa??"横断歩道上の歩行者の通行を妨害しました",r.pedestrianLabelEn??"Failed to stop for a pedestrian crossing the zebra crosswalk",4),r!=null&&r.trafficCollision&&this.recordViolation("TRAFFIC_COLLISION",30,!0,"他車接触事故","Traffic Vehicle Collision","コース上の他車（教習車）と接触しました","Collided with another training vehicle on the course",3.5),this.spawnedAtStartBay&&!this.preDriveChecked&&t.odometerM-this.startOdometerM>1.2){this.preDriveChecked=!0;const d=t.preDrive;d&&(d.seatbeltFastened?!d.doorLocked||!d.seatAdjusted||!d.mirrorsAdjusted||d.orderErrorStep?this.recordViolation("PRE_DRIVE_ORDER",5,!1,"乗車・発進準備手順不備","Pre-Drive Checklist Order Error",d.orderErrorStep?"乗車準備（①ドアロック→②座席調整→③ミラー調整→④シートベルト）の順序が正しくありません":"発進前の座席調整またはミラー確認を省略して発進しました",d.orderErrorStep?"Pre-drive cockpit preparation steps were performed out of the official Japanese exam sequence":"Pulled out without completing Door Lock → Seat Adjust → Mirror Check in order",10):!d.fivePointLookDone&&this.simTimeSec-t.lookedRightTimestamp>8&&this.recordViolation("NO_SAFETY_LOOK",5,!1,"発進時5点安全確認不足","Missing Pull-Out Safety Look","発進前の後方・右死角目視確認（Xキーまたは手順⑧）を行わずに発進しました","Pulled out from curb without performing right blind-spot shoulder check (X / Step 8)",8):this.recordViolation("NO_SEATBELT",10,!1,"シートベルト未着用","Seatbelt Not Fastened","乗車手順④「シートベルト着用」を行わずに発進しました","Pulled out of Start Bay without fastening seatbelt (Pre-Drive Step 4)",10))}if((t.blinker==="left"||t.blinker==="right")&&(this.recentSignalTime=this.simTimeSec,this.recentSignalDir=t.blinker),n.anyCurbMount){this.curbMountCount++;const d=this.mode==="exam"&&this.curbMountCount>=2;this.recordViolation("CURB_MOUNT",20,d,"脱輪","Curb Mount","タイヤが縁石に乗り上げました","Wheel mounted over the course curb",3)}else n.anyCurbTouch&&this.recordViolation("CURB_TOUCH",10,!1,"接輪","Curb Scrape","タイヤが縁石に接触しました","Tire brushed against the curb",2.5);if((n.poleHit||n.obstacleHit&&n.obstacleHit.kind==="parkedCar")&&this.recordViolation("POLE_COLLISION",30,!0,"接触事故","Obstacle Contact","ポールまたは障害物に接触しました","Vehicle struck a course marker pole or obstacle",2.5),Math.abs(t.speedMs)*3.6>46&&this.recordViolation("SPEED_LIMIT",10,!1,"速度超過","Speeding","場内制限速度（40km/h）を大幅に超過しました","Exceeded 40 km/h compound speed limit",4),t.handbrake&&Math.abs(t.speedMs)>1.2?(this.handbrakeDragDist+=Math.abs(t.speedMs)*e,this.handbrakeDragDist>3.5&&(this.handbrakeDragDist=0,this.recordViolation("HANDBRAKE_DRAG",5,!1,"サイド戻し忘れ","Handbrake Left On","サイドブレーキを引いたまま走行しています","Driving with the parking brake still engaged",5))):this.handbrakeDragDist=0,t.x>$s+1&&t.x<il&&Math.abs(t.z-an)<3){t.x>this.hillMaxXOnRamp&&(this.hillMaxXOnRamp=t.x);const d=this.hillMaxXOnRamp-t.x;if(d>.35&&t.speedMs<-.15){const u=d>1;this.recordViolation("HILL_ROLLBACK",u?30:10,u,"坂道逆行","Hill Rollback",u?"坂道で1m以上逆行しました":"坂道で車両が後退しました",u?"Rolled back over 1.0m on hill ramp":"Vehicle rolled backward on hill ramp",4)}}else this.hillMaxXOnRamp=-1/0;this.evaluateStopLines(t,s);const a=_o(t.heading-this.headingSample);if(this.headingSample=t.heading,t.speedMs>1.5){if(this.headingAccumTurn+=a,Math.abs(this.headingAccumTurn)>.96){const d=this.headingAccumTurn>0?"left":"right",u=t.x<-24&&t.x>-50&&t.z<-4&&t.z>-42,m=this.simTimeSec-this.recentSignalTime<7&&this.recentSignalDir===d;!u&&!m&&this.recordViolation("NO_SIGNAL",5,!1,"合図不履行","Missing Blinker",`${d==="left"?"左折":"右折"}時のウインカー合図がありません`,`Turned ${d} without activating blinker beforehand`,3.5),this.headingAccumTurn=0}}else this.headingAccumTurn*=Math.max(0,1-e*.5);const c=ro[0];if(c&&Math.abs(t.x-c.x)<2&&t.z>-50&&t.z<-42.5&&t.speedMs>1.5&&this.simTimeSec-this.recentSignalTime>8&&this.recordViolation("NO_SIGNAL",5,!1,"進路変更合図不履行","Missing Lane Signal","障害物回避時の右・左ウインカー合図がありません","Passed parked obstacle without turn signal",6),this.mode==="exam"&&!this.finished){const d=Vr[this.waypointIndex];d&&ls(t.x,t.z,d.x,d.z)<=d.radius&&(this.waypointIndex===Vr.length-1?Math.abs(t.speedMs)<.15&&(this.finished=!0,(l=this.onExamFinish)==null||l.call(this,this.getSummary(t))):this.waypointIndex++)}this.terminated&&this.finished&&((h=this.onExamFinish)==null||h.call(this,this.getSummary(t)))}evaluateStopLines(e,t){const n=t.getRailroadState();for(const s of zl){let r=this.zoneTrackers.get(s.id);r||(r={approached:!1,stoppedBeforeLine:!1,lookedBothSides:!1,wasClosedOrWarning:!1,crossed:!1,prevSignedDist:999},this.zoneTrackers.set(s.id,r));const o=e.x-s.x,a=e.z-s.z,c=o*s.dirX+a*s.dirZ,l=-s.dirZ,h=s.dirX,d=Math.abs(o*l+a*h),u=-Math.sin(e.heading)*s.dirX-Math.cos(e.heading)*s.dirZ,m=d<=s.halfWidth+.9&&u>.65;if(m&&c>=-9&&c<=-.1){r.approached=!0,Math.abs(e.speedMs)<.15&&(r.stoppedBeforeLine=!0);const _=this.simTimeSec-e.lookedLeftTimestamp<6,v=this.simTimeSec-e.lookedRightTimestamp<6;_&&v&&(r.lookedBothSides=!0),s.kind==="railroad"&&n.isWarningActive&&(r.wasClosedOrWarning=!0)}r.approached&&m&&r.prevSignedDist<0&&c>=0&&c<3&&(this.handleLineCrossed(s,r,t,n.isWarningActive),r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),(Math.abs(c)>14||d>8)&&(r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),r.prevSignedDist=c}}handleLineCrossed(e,t,n,s){e.kind==="stopSign"?t.stoppedBeforeLine?t.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"安全確認不履行","Missing L/R Check","発進前の左右安全確認（Z/Xキー）が不足しています","Proceeded from stop line without glancing Left & Right (Z/X)",3):this.recordViolation("STOP_SIGN_VIOLATION",25,!0,"指定場所一時不停止","Stop Sign Violation","「止まれ」停止線手前で完全停止していません","Failed to come to a complete 0 km/h stop at 止まれ line",3):e.kind==="railroad"?!t.stoppedBeforeLine||s||t.wasClosedOrWarning?this.recordViolation("RAILROAD_NO_STOP",30,!0,"踏切不停止・遮断機無視","Railroad Violation",s?"警報機作動中に踏切へ進入しました":"踏切手前で完全停止していません",s?"Entered railroad crossing while warning/barrier active":"Crossed railroad tracks without stopping before stop line",3):t.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"踏切安全確認不履行","Railroad Look Check","踏切通過前の左右確認（Z/Xキー）が不足しています","Crossed railroad without checking Left & Right (Z/X)",3):e.kind==="trafficLight"&&e.axis&&n.getLightForAxis(e.axis)==="red"&&this.recordViolation("RED_LIGHT",30,!0,"信号無視","Red Light Violation","赤信号で交差点に進入しました","Crossed intersection stop line on a RED traffic signal",3)}}const Ed="jp_kyoshujo_settings_v1",Sx="jp_kyoshujo_db",Ss="custom_maps",bd="active_custom_map",oa={locale:"ja",vehicleKind:"sedan",transmission:"AT",cameraMode:"chase",steeringSensitivity:1,autoCenterSteering:!0,mirrorQuality:"high",masterVolume:.55,muted:!1,minimapHeadingUp:!1,showTouchControls:!1};function Ex(){try{const i=window.localStorage.getItem(Ed);if(!i)return{...oa};const e=JSON.parse(i);return{...oa,...e}}catch{return{...oa}}}function ei(i){try{window.localStorage.setItem(Ed,JSON.stringify(i))}catch{}}function wd(){return new Promise((i,e)=>{const t=window.indexedDB.open(Sx,1);t.onupgradeneeded=()=>{const n=t.result;n.objectStoreNames.contains(Ss)||n.createObjectStore(Ss)},t.onsuccess=()=>i(t.result),t.onerror=()=>e(t.error)})}async function dr(i){try{const e=await wd();await new Promise((t,n)=>{const s=e.transaction(Ss,"readwrite");s.objectStore(Ss).put(i,bd),s.oncomplete=()=>t(),s.onerror=()=>n(s.error)}),e.close()}catch{}}async function bx(){try{const i=await wd(),e=await new Promise((t,n)=>{const r=i.transaction(Ss,"readonly").objectStore(Ss).get(bd);r.onsuccess=()=>t(r.result??null),r.onerror=()=>n(r.error)});return i.close(),e}catch{return null}}const on=class on{constructor(){pe(this,"signalTime",0);pe(this,"railTime",0)}update(e){this.signalTime=(this.signalTime+e)%on.SIGNAL_CYCLE,this.railTime=(this.railTime+e)%on.RAIL_CYCLE}setTimes(e,t){this.signalTime=(e%on.SIGNAL_CYCLE+on.SIGNAL_CYCLE)%on.SIGNAL_CYCLE,this.railTime=(t%on.RAIL_CYCLE+on.RAIL_CYCLE)%on.RAIL_CYCLE}getLightForAxis(e){const t=this.signalTime;return e==="NS"?t<11?"green":t<14?"yellow":"red":t>=15.5&&t<26.5?"green":t>=26.5&&t<29.5?"yellow":"red"}getRailroadState(){const e=this.railTime;let t="open",n=0;e<22?(t="open",n=0):e<26?(t="warning",n=0):e<29?(t="closing",n=(e-26)/3*(Math.PI/2)):e<37?(t="closed",n=Math.PI/2):(t="opening",n=(1-(e-37)/3)*(Math.PI/2));const s=t!=="open",r=Math.floor(e*2.2)%2===0;return{phase:t,barrierAngle:n,isWarningActive:s,flashLeftOn:s&&r,flashRightOn:s&&!r}}};pe(on,"SIGNAL_CYCLE",31),pe(on,"RAIL_CYCLE",40);let ol=on;const wx={kind:"sedan",length:4.4,width:1.69,wheelbase:2.6,trackWidth:1.48,frontOverhang:.85,rearOverhang:.95,wheelRadius:.31,maxSteerRad:43*Math.PI/180,steeringWheelMaxRad:1.5*Math.PI*2,maxSpeedMs:16.7,maxReverseMs:5.5,maxAccelMs2:3.4,brakeDecelMs2:9.5},Tx={kind:"motorcycle",length:2.1,width:.72,wheelbase:1.41,trackWidth:.16,frontOverhang:.35,rearOverhang:.34,wheelRadius:.3,maxSteerRad:34*Math.PI/180,steeringWheelMaxRad:34*Math.PI/180,maxSpeedMs:18,maxReverseMs:1.8,maxAccelMs2:4.5,brakeDecelMs2:9.8};function Hl(i){return i==="motorcycle"?Tx:wx}function Td(i,e,t,n="sedan",s="AT"){const r=Hl(n),o=ps(t),a=Xn(i,e),c=s==="AT"?"D":"1";return{x:i,y:a.y,z:e,rearAxleX:i-o.x*(r.wheelbase*.5),rearAxleZ:e-o.z*(r.wheelbase*.5),heading:_o(t),pitch:0,roll:0,speedMs:0,steerAngleRad:0,steeringWheelRad:0,wheelRotationRad:0,transmission:s,gear:c,rpm:800,stalled:!1,handbrake:!1,blinker:"off",blinkerTimer:0,blinkerOn:!1,braking:!1,reversing:!1,lookAngleRad:0,lookedLeftTimestamp:-999,lookedRightTimestamp:-999,odometerM:0,preDrive:{doorLocked:!1,seatAdjusted:!1,mirrorsAdjusted:!1,seatbeltFastened:!1,brakeAndStartDone:!1,handbrakeReleased:!1,rightSignalOn:!1,fivePointLookDone:!1,completedSteps:[]},mirrorTouchTimer:0,steerHoldSec:0,throttleHoldSec:0,brakeHoldSec:0}}const Ax={1:6,2:10.5,3:14.5,4:18,5:22,R:5.5},Rx={1:1.35,2:1.05,3:.85,4:.7,5:.55,R:1.15};function Ad(i,e){const t=["P","R","N","D"],n=["R","N","1","2","3","4","5"],s=i.transmission==="AT"?t:n,r=s.indexOf(i.gear),o=r===-1?i.transmission==="AT"?3:2:r,a=Math.max(0,Math.min(s.length-1,o+e)),c=s[a];Math.abs(i.speedMs)>1.2&&(c==="P"||c==="R"&&i.speedMs>1.2)||(i.gear=c)}function Cx(i,e,t,n,s,r=Xn){const o=e.steerLeft-e.steerRight;Math.abs(o)>.01?(i.steerAngleRad*o<-.05&&i.steerHoldSec>.25&&(i.steerHoldSec=.2),i.steerHoldSec=Math.min(1.2,(i.steerHoldSec||0)+n)):i.steerHoldSec=0,e.throttle>.02?i.throttleHoldSec=Math.min(1.5,(i.throttleHoldSec||0)+n):i.throttleHoldSec=Math.max(0,(i.throttleHoldSec||0)-n*3),e.brake>.02?i.brakeHoldSec=Math.min(1.2,(i.brakeHoldSec||0)+n):i.brakeHoldSec=Math.max(0,(i.brakeHoldSec||0)-n*4);const a=.32+.68*Math.pow(Math.min(1,i.steerHoldSec/.65),1.35),c=Math.abs(i.speedMs),l=1/(1+Math.max(0,c-3.5)*.11),h=1.95*s.steeringSensitivity;if(e.analogSteerTarget!==null){const Ae=Math.max(-1,Math.min(1,e.analogSteerTarget))*t.maxSteerRad-i.steerAngleRad,He=h*1.5*n;i.steerAngleRad+=Math.abs(Ae)<=He?Ae:Math.sign(Ae)*He}else if(Math.abs(o)>.01){const we=h*a*l;i.steerAngleRad+=o*we*n}else if(s.autoCenterSteering){const Ae=(.55+1.85*Math.min(1,c/4))*n;Math.abs(i.steerAngleRad)<=Ae?i.steerAngleRad=0:i.steerAngleRad-=Math.sign(i.steerAngleRad)*Ae}const d=c<=4.5?t.maxSteerRad:t.maxSteerRad/(1+(c-4.5)*.12);i.steerAngleRad=Math.max(-d,Math.min(d,i.steerAngleRad)),i.steeringWheelRad=i.steerAngleRad/t.maxSteerRad*t.steeringWheelMaxRad,i.blinker!=="off"?(i.blinkerTimer+=n,i.blinkerOn=Math.floor(i.blinkerTimer*2.6)%2===0):(i.blinkerTimer=0,i.blinkerOn=!1);let u=0;e.lookLeft&&!e.lookRight?u=68*Math.PI/180:e.lookRight&&!e.lookLeft&&(u=-68*Math.PI/180);const m=8.5*n,_=u-i.lookAngleRad;i.lookAngleRad+=Math.abs(_)<=m?_:Math.sign(_)*m,i.lookAngleRad>32*Math.PI/180&&(i.lookedLeftTimestamp=s.simTimeSec),i.lookAngleRad<-32*Math.PI/180&&(i.lookedRightTimestamp=s.simTimeSec),i.mirrorTouchTimer>0&&(i.mirrorTouchTimer=Math.max(0,i.mirrorTouchTimer-n));const v=ps(i.heading),g=r(i.x,i.z),p=g.slopeX*v.x+g.slopeZ*v.z,S=Math.atan(p),M=-9.81*Math.sin(S),x=.35+.65*Math.min(1,(i.throttleHoldSec||0)/.55),y=e.throttle*x,b=.38+.62*Math.min(1,(i.brakeHoldSec||0)/.45),T=e.brake*b;let C=0;const w=i.transmission==="AT"?1:1-Math.max(0,Math.min(1,e.clutch)),E=!i.stalled;if(i.transmission==="AT")i.gear==="D"?(y>.02&&i.speedMs<t.maxSpeedMs?C=y*t.maxAccelMs2:T<.05&&!i.handbrake&&i.speedMs<1.65&&(C=1.25*(1-Math.max(0,i.speedMs)/1.65)),i.rpm=820+Math.abs(i.speedMs)*210+y*1400):i.gear==="R"?(y>.02&&i.speedMs>-t.maxReverseMs?C=-y*(t.maxAccelMs2*.65):T<.05&&!i.handbrake&&i.speedMs>-1.35&&(C=-.82*(1-Math.max(0,-i.speedMs)/1.35)),i.rpm=820+Math.abs(i.speedMs)*260+y*1200):i.rpm=780+y*2600;else if(E&&i.gear!=="N"&&i.gear!=="P"){const we=Ax[i.gear]??10,Ae=Rx[i.gear]??1,it=i.gear==="R"?-1:1,k=Math.abs(i.speedMs)/we*3800,oe=800+y*3400;if(i.rpm=k*w+oe*(1-w),w>.75&&Math.abs(i.speedMs)<.55&&e.throttle<.14&&(e.brake>.1||i.handbrake||Math.abs(i.speedMs)<.15))i.stalled=!0,i.rpm=0;else if(w>.15&&i.speedMs*it<we){const ie=Math.max(.18,y);C=it*ie*t.maxAccelMs2*Ae*w}}else i.rpm=E?780+y*2800:0;const I=i.transmission==="AT"&&i.gear==="P",N=i.handbrake?6.8:0,H=T*t.brakeDecelMs2,Z=H+N+(I?14:0);i.braking=e.brake>.05,i.reversing=i.gear==="R";const X=-i.speedMs*(.14+.015*Math.abs(i.speedMs)),Y=C+M+X;let j=i.speedMs+Y*n;if(Z>.01){const we=Z;if(Math.abs(i.speedMs)<.08&&Math.abs(C+M)<=we)j=0;else{const Ae=Math.sign(j!==0?j:C+M),He=j-Ae*Z*n;Math.sign(He)!==Math.sign(j)&&Math.abs(C+M)<=we?j=0:j=He}}else Math.abs(j)<.02&&Math.abs(C)<.1&&Math.abs(M)<.1&&(j=0);j=Math.max(-t.maxReverseMs,Math.min(t.maxSpeedMs,j)),i.speedMs=j;const W=i.speedMs*n,me=W/t.wheelbase*Math.tan(i.steerAngleRad),ye=i.heading+me*.5,be=ps(ye);i.rearAxleX+=be.x*W,i.rearAxleZ+=be.z*W,i.heading=_o(i.heading+me);const Be=ps(i.heading);i.x=i.rearAxleX+Be.x*(t.wheelbase*.5),i.z=i.rearAxleZ+Be.z*(t.wheelbase*.5);const Je=r(i.x,i.z);i.y=Je.y,i.odometerM+=Math.abs(W),i.wheelRotationRad+=W/t.wheelRadius;const nt=Je.slopeX*Be.x+Je.slopeZ*Be.z,Ze=Math.atan(nt)-Math.max(-.04,Math.min(.04,(H-C)*.004));i.pitch+=(Ze-i.pitch)*Math.min(1,12*n);const ne=me/n,le=i.speedMs*ne,ge=t.kind==="motorcycle"?Math.max(-.48,Math.min(.48,-le*.065)):Math.max(-.06,Math.min(.06,le*.008));i.roll+=(ge-i.roll)*Math.min(1,10*n)}function Rd(i,e){const t=ps(i.heading);i.rearAxleX=i.x-t.x*(e.wheelbase*.5),i.rearAxleZ=i.z-t.z*(e.wheelbase*.5)}const Cd={startBay:{titleJa:"発着点 1番",titleEn:"Start Bay 1",descJa:"安全確認・右合図を出して発進",descEn:"Check mirrors & right signal before pull-out"},sCurve:{titleJa:"S字コース",titleEn:"S-Curve",descJa:"幅3.6m・内輪差を意識して低速走行",descEn:"3.6m wide S-bend — watch inner rear wheel cut"},crank:{titleJa:"クランクコース",titleEn:"Crank (90°)",descJa:"直角連続カーブ・ポール接触で検定中止",descEn:"Tight 90° chicane — pole contact fails exam"},hillStart:{titleJa:"坂道発進",titleEn:"Hill Start",descJa:"坂の途中で一時停止し、逆行せず発進",descEn:"Stop on slope and pull away without rollback"},railroad:{titleJa:"踏切通過",titleEn:"Railroad Crossing",descJa:"停止線手前で完全停止し左右確認（Z/X）",descEn:"Full stop before line, look Left & Right (Z/X)"},stopSign:{titleJa:"一時停止（止まれ）",titleEn:"Stop Sign",descJa:"停止線手前で完全停止・左右の安全確認",descEn:"Come to complete 0 km/h stop and glance L/R"},trafficLight:{titleJa:"信号交差点",titleEn:"Signal Intersection",descJa:"信号灯火に従い左折・右折の通行帯を守る",descEn:"Obey signal phases and proper turn positioning"},bayParking:{titleJa:"方向変換",titleEn:"Bay Parking",descJa:"バックで車庫に進入し、前向きに出庫",descEn:"Reverse into the T-bay and exit forward"},parallelParking:{titleJa:"縦列駐車",titleEn:"Parallel Parking",descJa:"縁石に沿わせて駐車枠内に収める",descEn:"Reverse neatly into the curbside pocket"},speedStraight:{titleJa:"直線40km/h・障害物",titleEn:"40 km/h & Obstacle",descJa:"直線で加速し、駐車車両を合図付きで回避",descEn:"Accelerate smoothly and signal past obstacle"}},Px={ja:{appTitle:"桜ヶ丘自動車教習所 3Dシミュレーター",appSubtitle:"日本の教習所コース・実技検定再現",modePractice:"自由練習",modeExam:"修了検定 (模擬試験)",scoreLabel:"持ち点",stationMenu:"コース・設定",resetBtn:"リセット (O)",cameraBtn:"視点 (V)",camChase:"後方視点",camCockpit:"運転席 (右ハンドル)",camHood:"ボンネット",camOrbit:"自由カメラ",welcomeTitle:"桜ヶ丘自動車教習所 3Dドライビングシミュレーター",welcomeLead:"実際の日本の教習所（180m×120m）を1:1スケールで再現。S字・クランク・坂道発進・踏切・信号・方向変換・縦列駐車・修了検定をブラウザ上で練習できます。",startTraining:"教習を始める",startExam:"修了検定を開始",controlsHeading:"基本操作（右ハンドル・左側通行）",ctrlDrive:"W / S または ↑ / ↓ : アクセル / ブレーキ",ctrlSteer:"A / D または ← / → : ハンドル操作",ctrlSignal:"Q / E : 左・右ウインカー　H : ハザード",ctrlGear:"Shift / Ctrl : ギア変更 (P/R/N/D・1-5)",ctrlLook:"Z / X : 左・右の安全確認（目視）",ctrlBrake:"Space : サイドブレーキ　C : クラッチ(MT)　I : エンジン始動",ctrlView:"V : カメラ切替　O : 現在地点へリセット　M : メニュー",tabStations:"課題ワープ",tabSettings:"車両・設定",tabCustomMap:"カスタム地図",vehicleLabel:"車種",vehicleSedan:"教習車セダン (右ハンドル)",vehicleMoto:"普通二輪 (400cc)",transLabel:"変速機",transAT:"AT (オートマ)",transMT:"MT (マニュアル)",steerSensLabel:"ハンドル感度",autoCenterLabel:"ハンドル自動復元",mirrorQualityLabel:"ミラー描画品質",mirrorHigh:"高画質",mirrorLow:"軽量",mirrorOff:"オフ",volumeLabel:"音量",touchControlsLabel:"タッチ操作パネル表示",customMapHint:"航空写真や教習所コース図(PNG/JPG/WebP)をアップロードし、実際の横幅(m)に合わせて走行できます。",uploadMapLabel:"コース画像をアップロード",mapWidthLabel:"コース横幅 (m)",setSpawnHere:"現在位置を開始地点に設定",useKyoshujo:"3D教習所コースへ戻る",useCustomMap:"カスタム地図で走行",clearCustomMap:"カスタム地図を削除",stalledWarning:"エンスト！ [I] キーまたはボタンで再始動",restartEngine:"エンジン始動 (I)",handbrakeOn:"サイドブレーキ作動中",curbWarning:"縁石接近",examPassStamp:"合格",examFailStamp:"不合格",examResultTitle:"運転技能検定 採点表",examTerminatedSub:"危険行為・重大違反のため検定中止となりました",examPassedSub:"合格基準（70点以上）を達成しました",examFailedSub:"合格点（70点）に届きませんでした",examFinalScore:"最終得点",examElapsed:"所要時間",examDistance:"走行距離",examNoViolations:"減点なし！模範的な運転です。",retryExam:"もう一度検定を受ける",practiceWeak:"苦手課題を練習する",closeModal:"練習を続ける",practiceGuideFree:"左上のコースメニューから各課題へワープ、または「修了検定」を開始できます。",minimapNorth:"北上",minimapFollow:"進行方向"},en:{appTitle:"Sakuragaoka Driving School 3D Simulator",appSubtitle:"Authentic Japanese Kyoshujo Training & Exam",modePractice:"Free Practice",modeExam:"Mock Exam",scoreLabel:"Score",stationMenu:"Menu / Warp",resetBtn:"Reset (O)",cameraBtn:"View (V)",camChase:"Chase",camCockpit:"Cockpit (RHD)",camHood:"Hood",camOrbit:"Orbit",welcomeTitle:"Sakuragaoka Japanese Driving School Simulator",welcomeLead:"Full 1:1 scale 180m × 120m Japanese Kyoshujo compound. Practice S-Curve, 90° Crank, Hill Start, Railroad Crossing, Stop Signs, Signals, Bay & Parallel Parking, or take the 100-point Mock Exam.",startTraining:"Start Practice",startExam:"Start Mock Exam",controlsHeading:"Controls (Right-Hand Drive · Keep Left)",ctrlDrive:"W / S or ↑ / ↓ : Throttle / Foot Brake",ctrlSteer:"A / D or ← / → : Steering Wheel",ctrlSignal:"Q / E : Left / Right Blinker   H : Hazard",ctrlGear:"Shift / Ctrl : Shift Gear (P/R/N/D or 1-5)",ctrlLook:"Z / X : Safety Glance Left / Right",ctrlBrake:"Space : Handbrake   C : Clutch (MT)   I : Ignition",ctrlView:"V : Camera   O : Reset Vehicle   M : Menu",tabStations:"Stations",tabSettings:"Vehicle & Setup",tabCustomMap:"Custom Map",vehicleLabel:"Vehicle",vehicleSedan:"Sedan (RHD Kyoshusha)",vehicleMoto:"Motorcycle (400cc)",transLabel:"Transmission",transAT:"AT (Automatic)",transMT:"MT (Manual)",steerSensLabel:"Steering Sensitivity",autoCenterLabel:"Auto-Center Steering",mirrorQualityLabel:"Mirror Reflections",mirrorHigh:"High",mirrorLow:"Low",mirrorOff:"Off",volumeLabel:"Master Volume",touchControlsLabel:"Show Touch Controls",customMapHint:"Upload any top-down driving center map image (PNG/JPG/WebP), calibrate real width in meters, and drive directly on it.",uploadMapLabel:"Upload Map Image",mapWidthLabel:"Map Width (meters)",setSpawnHere:"Set Current Position as Spawn",useKyoshujo:"Switch to 3D Kyoshujo",useCustomMap:"Drive Custom Map",clearCustomMap:"Clear Saved Map",stalledWarning:"Engine Stalled! Press [I] or tap to restart",restartEngine:"Start Engine (I)",handbrakeOn:"Handbrake Engaged",curbWarning:"Curb Close",examPassStamp:"PASS",examFailStamp:"FAIL",examResultTitle:"Practical Driving Exam Score Sheet",examTerminatedSub:"Exam terminated immediately due to a major safety violation",examPassedSub:"Passed with 70 points or higher",examFailedSub:"Score fell below the 70-point passing threshold",examFinalScore:"Final Score",examElapsed:"Time",examDistance:"Distance",examNoViolations:"Zero deductions — exemplary Japanese driving technique!",retryExam:"Retry Exam",practiceWeak:"Practice Weak Area",closeModal:"Continue Free Practice",practiceGuideFree:"Open Menu (M) to warp to any course obstacle or start a full 100-point Mock Exam.",minimapNorth:"North-Up",minimapFollow:"Heading-Up"}};function qn(i,e){return Px[i][e]}class Lx{constructor(e){pe(this,"keys",new Set);pe(this,"touchThrottle",0);pe(this,"touchBrake",0);pe(this,"touchLookLeft",!1);pe(this,"touchLookRight",!1);pe(this,"analogSteer",null);pe(this,"prevGamepadBtns",[]);pe(this,"actions");pe(this,"handleBlur",()=>{this.keys.clear(),this.touchThrottle=0,this.touchBrake=0,this.touchLookLeft=!1,this.touchLookRight=!1,this.analogSteer=null});pe(this,"handleKeyDown",e=>{const t=e.target;if(t&&(t.tagName==="INPUT"||t.tagName==="SELECT"||t.tagName==="TEXTAREA"))return;this.actions.onAnyInteraction();const n=e.code;(n==="Space"||n==="ArrowUp"||n==="ArrowDown"||n==="ArrowLeft"||n==="ArrowRight")&&e.preventDefault(),e.repeat||(n==="KeyQ"?this.actions.onToggleBlinker("left"):n==="KeyE"?this.actions.onToggleBlinker("right"):n==="KeyH"?this.actions.onToggleBlinker("hazard"):n==="Space"?this.actions.onToggleHandbrake():n==="ShiftLeft"||n==="ShiftRight"||n==="BracketRight"?this.actions.onShiftGear(1):n==="ControlLeft"||n==="ControlRight"||n==="BracketLeft"?this.actions.onShiftGear(-1):n==="KeyV"?this.actions.onCycleCamera():n==="KeyO"?this.actions.onResetVehicle():n==="KeyM"?this.actions.onToggleMenu():n==="KeyI"&&this.actions.onIgnition()),this.keys.add(n)});pe(this,"handleKeyUp",e=>{this.keys.delete(e.code)});this.actions=e,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}bindTouchControls(e){const t=e.querySelector('[data-touch="steer"]'),n=e.querySelector('[data-touch="steer-knob"]'),s=e.querySelector('[data-touch="throttle"]'),r=e.querySelector('[data-touch="brake"]'),o=e.querySelector('[data-touch="look-left"]'),a=e.querySelector('[data-touch="look-right"]');if(t){let l=null,h=0;const d=m=>{const _=m-h,v=54,g=Math.max(-1,Math.min(1,-_/v));this.analogSteer=g,n&&(n.style.transform=`translateX(${Math.max(-v,Math.min(v,_))}px)`)};t.addEventListener("pointerdown",m=>{m.preventDefault(),this.actions.onAnyInteraction(),l=m.pointerId,h=m.clientX,t.setPointerCapture(m.pointerId),d(m.clientX)}),t.addEventListener("pointermove",m=>{m.pointerId===l&&d(m.clientX)});const u=m=>{m.pointerId===l&&(l=null,this.analogSteer=null,n&&(n.style.transform="translateX(0px)"))};t.addEventListener("pointerup",u),t.addEventListener("pointercancel",u)}const c=(l,h)=>{if(!l)return;l.addEventListener("pointerdown",u=>{u.preventDefault(),this.actions.onAnyInteraction(),l.setPointerCapture(u.pointerId),l.classList.add("active"),h(!0)});const d=()=>{l.classList.remove("active"),h(!1)};l.addEventListener("pointerup",d),l.addEventListener("pointercancel",d)};c(s,l=>{this.touchThrottle=l?1:0}),c(r,l=>{this.touchBrake=l?1:0}),c(o,l=>{this.touchLookLeft=l}),c(a,l=>{this.touchLookRight=l}),e.querySelectorAll("[data-touch-action]").forEach(l=>{l.addEventListener("click",()=>{this.actions.onAnyInteraction();const h=l.dataset.touchAction;h==="blinker-left"?this.actions.onToggleBlinker("left"):h==="blinker-right"?this.actions.onToggleBlinker("right"):h==="handbrake"?this.actions.onToggleHandbrake():h==="gear-up"?this.actions.onShiftGear(1):h==="gear-down"&&this.actions.onShiftGear(-1)})})}getInputState(){var u,m;const e=this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0,t=this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0,n=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0,s=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0,r=this.keys.has("KeyC")?1:0;let o=null,a=0,c=0,l=0,h=!1,d=!1;if(typeof navigator<"u"&&"getGamepads"in navigator){const v=navigator.getGamepads().find(g=>g&&g.connected);if(v){const g=v.axes[0]??0;Math.abs(g)>.04&&(o=-g);const p=((u=v.buttons[7])==null?void 0:u.value)??0,S=((m=v.buttons[6])==null?void 0:m.value)??0;if(a=p,c=S,v.axes.length>=3&&p===0&&S===0){const y=v.axes[2]!==void 0?(1-v.axes[2])*.5:0,b=v.axes[5]!==void 0?(1-v.axes[5])*.5:0;y>.05&&(a=y),b>.05&&(c=b)}const M=y=>{var b;return!!((b=v.buttons[y])!=null&&b.pressed)},x=y=>M(y)&&!this.prevGamepadBtns[y];x(4)&&this.actions.onToggleBlinker("left"),x(5)&&this.actions.onToggleBlinker("right"),x(0)&&this.actions.onToggleHandbrake(),x(3)&&this.actions.onCycleCamera(),x(1)&&this.actions.onShiftGear(1),x(2)&&this.actions.onShiftGear(-1),h=M(14),d=M(15),this.prevGamepadBtns=v.buttons.map(y=>y.pressed)}}return{throttle:Math.max(e,this.touchThrottle,a),brake:Math.max(t,this.touchBrake,c),steerLeft:n,steerRight:s,analogSteerTarget:this.analogSteer??o,clutch:Math.max(r,l),lookLeft:this.keys.has("KeyZ")||this.touchLookLeft||h,lookRight:this.keys.has("KeyX")||this.touchLookRight||d}}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}const mh={type:"change"},Vl={type:"start"},Pd={type:"end"},Gr=new Jh,gh=new Jn,Ix=Math.cos(70*St.DEG2RAD),Lt=new D,qt=2*Math.PI,ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},aa=1e-6;class Dx extends Tp{constructor(e,t=null){super(e,t),this.state=ft.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ui,this._lastTargetPosition=new D,this._quat=new Ui().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Hc,this._sphericalDelta=new Hc,this._scale=1,this._panOffset=new D,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new D,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ux.bind(this),this._onPointerDown=kx.bind(this),this._onPointerUp=Nx.bind(this),this._onContextMenu=Gx.bind(this),this._onMouseWheel=Bx.bind(this),this._onKeyDown=zx.bind(this),this._onTouchStart=Hx.bind(this),this._onTouchMove=Vx.bind(this),this._onMouseDown=Fx.bind(this),this._onMouseMove=Ox.bind(this),this._interceptControlDown=Wx.bind(this),this._interceptControlUp=Xx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mh),this.update(),this.state=ft.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=qt:n>Math.PI&&(n-=qt),s<-Math.PI?s+=qt:s>Math.PI&&(s-=qt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Lt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<Ix?this.object.lookAt(this.target):(gh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(gh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>aa||this._lastTargetPosition.distanceToSquared(this.target)>aa?(this.dispatchEvent(mh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qt/60*this.autoRotateSpeed*e:qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Lt.copy(s).sub(this.target);let r=Lt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Ux(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Nx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pd),this.state=ft.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Fx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ft.DOLLY;break;case cs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}break;case cs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ft.PAN}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Vl)}function Ox(i){switch(this.state){case ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Bx(i){this.enabled===!1||this.enableZoom===!1||this.state!==ft.NONE||(i.preventDefault(),this.dispatchEvent(Vl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Pd))}function zx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Hx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ft.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ft.TOUCH_PAN;break;default:this.state=ft.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ft.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ft.TOUCH_DOLLY_ROTATE;break;default:this.state=ft.NONE}break;default:this.state=ft.NONE}this.state!==ft.NONE&&this.dispatchEvent(Vl)}function Vx(i){switch(this._trackPointer(i),this.state){case ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ft.NONE}}function Gx(i){this.enabled!==!1&&i.preventDefault()}function Wx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Xx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ur extends de{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Bt;const n=this,s=t.color!==void 0?new tt(t.color):new tt(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||ur.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new Jn,d=new D,u=new D,m=new D,_=new xt,v=new D(0,0,-1),g=new gt,p=new D,S=new D,M=new gt,x=new xt,y=this.camera,b=new pi(r,o,{samples:l,type:Ts}),T=new Kn({name:c.name!==void 0?c.name:"unspecified",uniforms:Qh.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=b.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=x,this.material=T,this.onBeforeRender=function(C,w,E){if(u.setFromMatrixPosition(n.matrixWorld),m.setFromMatrixPosition(E.matrixWorld),_.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(_),p.subVectors(u,m),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(u),_.extractRotation(E.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(m),S.subVectors(u,v),S.reflect(d).negate(),S.add(u),y.position.copy(p),y.up.set(0,1,0),y.up.applyMatrix4(_),y.up.reflect(d),y.lookAt(S),y.far=E.far,y.updateMatrixWorld(),y.projectionMatrix.copy(E.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(y.projectionMatrix),x.multiply(y.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(d,u),h.applyMatrix4(y.matrixWorldInverse),g.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const N=y.projectionMatrix;M.x=(Math.sign(g.x)+N.elements[8])/N.elements[0],M.y=(Math.sign(g.y)+N.elements[9])/N.elements[5],M.z=-1,M.w=(1+N.elements[10])/N.elements[14],g.multiplyScalar(2/g.dot(M)),N.elements[2]=g.x,N.elements[6]=g.y,N.elements[10]=g.z+1-a,N.elements[14]=g.w,n.visible=!1;const H=C.getRenderTarget(),Z=C.xr.enabled,X=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(b),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(w,y),C.xr.enabled=Z,C.shadowMap.autoUpdate=X,C.setRenderTarget(H);const Y=E.viewport;Y!==void 0&&C.state.viewport(Y),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}}ur.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function qx(i,e,t=!0){const n=[],s=(U,q=.5,G=.1)=>new Re({color:U,roughness:q,metalness:G}),r=new tl({color:366185,roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.13}),o=new tl({color:3462041,roughness:.3,metalness:.35,clearcoat:1,clearcoatRoughness:.2}),a=s(14014684,.3,.65),c=s(1448221,.65,.3),l=s(1053205,.93,0),h=s(2237482,.96,0),d=s(3882307,.4,.58),u=s(8817554,.32,.7),m=s(14803943,.2,.6);function _(U,q){return U.name=q,U.userData.partName=q,U}function v(U,q){const G=_(new je,q);return U.add(G),G}function g(U,q,G,ee,se=0,he=0,R=0){const f=_(new de(G,ee),q);return f.position.set(se,he,R),f.castShadow=!0,f.receiveShadow=!0,U.add(f),f}const p=(U,q,G,ee,se,he,R=0,f=0,P=0)=>g(U,q,new Xe(G,ee,se),he,R,f,P);function S(U,q,G,ee,se){return g(U,q,new hr(new mo(G.map(he=>new D(...he))),40,ee,8,!1),se)}function M(U,q,G,ee,se,he){const R=new D(...G),f=new D(...ee),P=f.clone().sub(R),L=g(U,q,new ot(se,se,P.length(),16),he);return L.position.copy(R.add(f).multiplyScalar(.5)),L.quaternion.setFromUnitVectors(new D(0,1,0),P.normalize()),L}function x(U,q,G,ee,se,he,R=0,f=0,P=0){const L=g(U,q,new vn(1,36,24),he,R,f,P);return L.scale.set(G,ee,se),L}function y(U,q,G,ee){const se=[],he=[];for(const[P,L,B,O]of G)for(let ce=0;ce<40;ce++){const te=ce/40*Math.PI*2;se.push(Math.cos(te)*L,(O+B)/2+Math.sin(te)*((O-B)/2),P)}for(let P=0;P<G.length-1;P++)for(let L=0;L<40;L++){const B=P*40+L,O=P*40+(L+1)%40;he.push(B,O,O+40,B,O+40,B+40)}for(let P=1;P<39;P++){he.push(0,P+1,P);const L=(G.length-1)*40;he.push(L,L+P,L+P+1)}const f=new _t;return f.setAttribute("position",new Ye(se,3)),f.setIndex(he),f.computeVertexNormals(),g(U,q,f,ee)}const b=v(i,"motorcycleRoot"),T=v(i,"bikeCockpitRoot"),C=[[-.28,.065,.77,.86],[-.16,.135,.76,.93],[0,.205,.77,1.02],[.19,.218,.8,1.064],[.34,.184,.83,1.052],[.46,.09,.84,.98],[.49,.025,.87,.93]],w=y(b,"paintedTank",C,r);function E(U,q,G,ee){let se=0;for(;se<C.length-2&&C[se+1][0]<U;)se++;const he=C[se],R=C[se+1],f=(U-he[0])/(R[0]-he[0]),P=St.lerp(he[1],R[1],f),L=St.lerp(he[2],R[2],f),B=St.lerp(he[3],R[3],f);return[G*(Math.cos(q)*P+ee),(B+L)/2+Math.sin(q)*((B-L)/2),U]}for(const U of[-1,1])for(const[q,G,ee,se]of[["whitePinstripe",0,.004,a],["blackSweep",.025,.005,c],["silverPanel",.064,.006,a]]){const he=[],R=[],f=[[-.215,-.65,.06],[-.15,-.82,.34],[0,-.75,.65],[.18,-.5,.77],[.29,-.24,.65],[.38,.05,.22]];for(const[B,O,ce]of f)for(let te=0;te<=12;te++)he.push(...E(B,St.lerp(O+G,ce-G,te/12),U,ee));for(let B=0;B<f.length-1;B++)for(let O=0;O<12;O++){const ce=B*13+O,te=ce+13;R.push(ce,te,ce+1,ce+1,te,te+1)}const P=new _t;P.setAttribute("position",new Ye(he,3)),P.setIndex(R),P.computeVertexNormals();const L=se.clone();L.side=Rt,g(b,`${q}${U}`,P,L)}const I=g(b,"fuelCap",new ot(.043,.043,.009,32),a,0,1.068,.18);g(I,"lock",new Xe(.018,.004,.008),c,0,.007,0),y(b,"steppedSaddle",[[-.96,.085,.88,.94],[-.85,.145,.855,.966],[-.63,.153,.82,.95],[-.45,.125,.775,.867],[-.27,.108,.775,.837],[-.19,.07,.8,.837]],h),y(b,"paintedTailCowl",[[-1.02,.035,.86,.91],[-.93,.11,.815,.88],[-.73,.151,.76,.849],[-.5,.125,.73,.81],[-.31,.08,.725,.77]],r);for(const U of[-1,1]){S(b,`tailSilverStripe${U}`,[[U*.11,.85,-.94],[U*.153,.82,-.76],[U*.13,.78,-.52],[U*.09,.75,-.35]],.012,a),S(b,`grabRail${U}`,[[U*.14,.87,-.65],[U*.18,.92,-.86],[U*.12,.94,-1]],.014,u);const q=new fs;q.moveTo(-.5,.8),q.quadraticCurveTo(-.34,.82,-.17,.78),q.lineTo(-.25,.6),q.quadraticCurveTo(-.37,.6,-.5,.8);const G=new or(q,{depth:.015,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008,curveSegments:16}),ee=g(b,`sideCover${U}`,G,r,U*.14);ee.rotation.y=Math.PI/2,ee.scale.x=-1,S(b,`frameCradle${U}`,[[U*.12,.94,.38],[U*.16,.72,.3],[U*.18,.3,.15],[U*.17,.29,-.25],[U*.14,.71,-.48],[U*.12,.87,-.7]],.018,c),M(b,`seatSubframe${U}`,[U*.12,.63,-.35],[U*.12,.88,-.94],.019,c),M(b,`swingarm${U}`,[U*.13,.43,-.2],[U*.135,.315,-.715],.024,u),M(b,`shockShaft${U}`,[U*.168,.36,-.72],[U*.168,.79,-.55],.017,e);const se=[],he=new D(U*.168,.39,-.71),R=new D(U*.168,.74,-.57);for(let f=0;f<=96;f++){const P=f/96,L=P*Math.PI*2*10,B=he.clone().lerp(R,P);se.push([B.x+Math.cos(L)*.033,B.y+Math.sin(L)*.013,B.z+Math.sin(L)*.031])}S(b,`shockSpring${U}`,se,.0065,o),M(b,`footpeg${U}`,[U*.15,.44,-.23],[U*.29,.44,-.23],.017,c),p(b,`heelPlate${U}`,.016,.11,.19,a,U*.19,.45,-.32)}x(b,"crankcase",.225,.17,.24,d,0,.48,0);for(const U of[-1,1]){const q=g(b,`engineCover${U}`,new ot(.124,.124,.045,40),d,U*.228,.46,-.05);q.rotation.z=Math.PI/2;const G=g(b,`clutchCover${U}`,new ot(.073,.073,.026,32),u,U*.236,.43,.135);G.rotation.z=Math.PI/2}for(let U=0;U<4;U++){const q=(U-1.5)*.095;p(b,`cylinder${U}`,.084,.21,.18,d,q,.65,.115);for(let G=0;G<7;G++)p(b,`coolingFin${U}:${G}`,.091,.008,.19,u,q,.58+G*.024,.12);S(b,`header${U}`,[[q,.715,.22],[q,.64,.33],[q,.4,.34],[q,.235,.2],[q*.65,.225,-.13],[-.16,.26,-.37]],.022,m)}p(b,"camCover",.43,.065,.235,d,0,.802,.12),p(b,"radiator",.32,.2,.055,c,0,.7,.335),S(b,"collector",[[-.16,.26,-.37],[-.24,.3,-.48],[-.26,.39,-.62]],.041,m),M(b,"chromeSilencer",[-.265,.37,-.49],[-.265,.56,-.98],.063,m),M(b,"exhaustOutlet",[-.265,.56,-.98],[-.265,.57,-1.01],.045,c);function N(U,q,G){const ee=v(U,q),se=g(ee,"tire",new In(.262,.053,16,48),l);se.rotation.y=Math.PI/2,se.scale.z=G/.106;const he=g(ee,"rim",new In(.218,.014,10,36),c);he.rotation.y=Math.PI/2;const R=g(ee,"hub",new ot(.048,.048,G+.018,24),u);R.rotation.z=Math.PI/2;for(const f of[-1,1]){for(let L=0;L<6;L++){const B=L/6*Math.PI*2;M(ee,`spoke${f}:${L}`,[f*.026,Math.sin(B)*.047,Math.cos(B)*.047],[f*.044,Math.sin(B+.13)*.211,Math.cos(B+.13)*.211],.014,c)}const P=g(ee,`brakeDisc${f}`,new Ln(.093,.146,36),a,f*(G/2+.014));P.rotation.y=f*Math.PI/2}return{group:ee,tire:se,rim:he,hub:R}}const H=v(b,"bikeFrontWheelPivot");H.position.set(0,.315,.72);const Z=N(H,"frontWheel",.12),X=v(b,"bikeRearWheelMount");X.position.set(0,.315,-.715);const Y=N(X,"rearWheel",.16);g(X,"rearSprocket",new Ln(.048,.12,32),u,.096,0,0).rotation.y=Math.PI/2,S(b,"driveChain",[[.105,.4,-.71],[.105,.5,-.24],[.105,.42,-.15],[.105,.23,-.69],[.105,.25,-.82],[.105,.35,-.83],[.105,.4,-.71]],.009,u);for(const U of[-1,1])M(H,`forkChrome${U}`,[U*.095,.08,-.03],[U*.095,.63,-.27],.021,e),M(H,`forkSlider${U}`,[U*.095,0,0],[U*.095,.32,-.137],.031,c),p(H,`brakeCaliper${U}`,.048,.1,.056,c,U*.098,.04,-.115);const j=r.clone();j.side=Rt;const W=[],me=[];for(let U=0;U<=24;U++){const q=-1.13+U/24*2.26;for(let G=0;G<=6;G++){const ee=(G/6-.5)*.15;W.push(ee,Math.cos(q)*(.359-.01*(ee/.075)**2),Math.sin(q)*.359)}}for(let U=0;U<24;U++)for(let q=0;q<6;q++){const G=U*7+q;me.push(G,G+7,G+1,G+1,G+7,G+8)}const ye=new _t;ye.setAttribute("position",new Ye(W,3)),ye.setIndex(me),ye.computeVertexNormals(),g(H,"frontFender",ye,j),p(b,"rearMudguard",.14,.035,.27,c,0,.68,-.94).rotation.x=.5;function be(U,q,G,ee){const se=v(U,q);se.position.set(0,G,ee),S(se,"chromeHandlebar",[[-.36,0,-.06],[-.24,.014,-.04],[-.16,.005,-.01],[-.1,-.035,.025],[.1,-.035,.025],[.16,.005,-.01],[.24,.014,-.04],[.36,0,-.06]],.012,e);for(const he of[-1,1]){M(se,`grip${he}`,[he*.26,.009,-.05],[he*.37,0,-.065],.022,l),p(se,`switchBlock${he}`,.045,.041,.052,c,he*.235,.013,-.04),S(se,`lever${he}`,[[he*.21,.013,-.006],[he*.3,.019,.017],[he*.37,.014,-.005]],.0065,a),M(se,`mirrorBoot${he}`,[he*.235,.02,-.025],[he*.245,.075,-.02],.012,c),S(se,`mirrorStem${he}`,[[he*.245,.07,-.02],[he*.26,.115,.008],[he*.34,.165,.04],[he*.425,.22,.075]],.0055,m),x(se,`roundMirror${he}`,.059,.059,.012,c,he*.465,.245,.085);const R=new Di(1,32),f=_(t?new ur(R,{color:11974326,textureWidth:256,textureHeight:256,multisample:0,clipBias:.001}):new de(R,s(10992584,.08,.8)),`mirrorGlass${he}`);f.position.set(he*.465,.245,.071),f.scale.set(.055,.055,1),f.rotation.set(0,Math.PI,0),se.add(f),n.push(f);const P=g(se,`mirrorBezel${he}`,new Ln(1,1.07,32),m,he*.465,.245,.07);P.scale.copy(f.scale),P.rotation.copy(f.rotation)}return p(se,"upperTripleClamp",.25,.028,.105,c,0,-.1,.055),se}const Be=be(b,"bikeHandlebar",1.035,.4),Je=g(b,"roundHeadlightBucket",new ot(.095,.092,.105,32),e,0,.947,.585);Je.rotation.x=Math.PI/2;const nt=new Re({color:16053740,emissive:16777185,emissiveIntensity:.5,roughness:.15});g(b,"headlightLens",new Di(.086,32),nt,0,.947,.64),g(b,"headlightRim",new In(.09,.006,8,32),e,0,.947,.645);let Ze=0,ne=.22;const le=[];function ge(U,q,G,ee,se,he,R){const f=v(U,q);f.position.set(G,ee,se),f.rotation.x=-.42;const P=g(f,"meterBucket",new ot(.068,.068,.065,24),c,0,0,.018);P.rotation.x=Math.PI/2,g(f,"chromeMeterRim",new In(.065,.005,8,28),e,0,0,-.019);const L=document.createElement("canvas");L.width=256,L.height=256;const B=L.getContext("2d"),O=new gn(L);O.colorSpace=yt;const ce=g(f,"instrumentFace",new Di(.061,28),new Ot({map:O,toneMapped:!1}),0,0,-.02);return ce.rotation.y=Math.PI,le.push({ctx:B,texture:O,max:he,isRpm:R}),f}function we(U,q){p(U,`${q}InstrumentBridge`,.245,.034,.067,c,0,-.005,.124),p(U,`${q}CenterPod`,.05,.081,.049,c,0,.051,.137),ge(U,`${q}Speedometer`,.079,.064,.143,180,!1),ge(U,`${q}Tachometer`,-.079,.064,.143,13,!0)}we(Be,"exterior");const Ae=w.clone();Ae.position.set(0,.16,.08),T.add(Ae);const He=be(T,"bikeCockpitBar",1.17,.52);we(He,"cockpit");let it="";function k(U,q){Ze=Math.round(Math.abs(U)*3.6),ne=Math.round(q*40)/40;const G=`${Ze}/${ne}`;if(G!==it){it=G;for(const ee of le){const se=ee.ctx;se.fillStyle="#10171d",se.fillRect(0,0,256,256),se.textAlign="center";for(let f=0;f<=12;f++){const P=Math.PI*(.75+1.5*f/12);se.strokeStyle=f>10?"#ee4a50":"#d7e3e9",se.lineWidth=f%2?2:4,se.beginPath(),se.moveTo(128+Math.cos(P)*91,128+Math.sin(P)*91),se.lineTo(128+Math.cos(P)*109,128+Math.sin(P)*109),se.stroke(),f%2===0&&(se.fillStyle="#e3eaef",se.font="15px sans-serif",se.fillText(String(Math.round(f/12*ee.max)),128+Math.cos(P)*76,133+Math.sin(P)*76))}const he=ee.isRpm?ne*12:Ze,R=Math.PI*(.75+1.5*Math.min(he/ee.max,1));se.strokeStyle="#ff5147",se.lineWidth=4,se.beginPath(),se.moveTo(128,128),se.lineTo(128+Math.cos(R)*90,128+Math.sin(R)*90),se.stroke(),se.fillStyle="#c5d7df",se.font="14px sans-serif",se.fillText(ee.isRpm?"×1000":"km/h",128,176),se.fillStyle="#172c31",se.fillRect(94,189,68,25),se.fillStyle="#b6e2d4",se.font="18px monospace",se.fillText(ee.isRpm?String(Math.round(ne*12e3)):String(Ze),128,208),ee.texture.needsUpdate=!0}}}k(0,.22);function oe(U,q,G,ee,se,he=.056){const R=new Re({color:se,emissive:se,emissiveIntensity:.02,roughness:.25});return{mesh:p(b,U,he,.034,.036,R,q,G,ee),material:R}}const re={left:[oe("frontLeftSignal",.16,.905,.584,16753962),oe("rearLeftSignal",.16,.78,-.985,16753962)],right:[oe("frontRightSignal",-.16,.905,.584,16753962),oe("rearRightSignal",-.16,.78,-.985,16753962)]},ie=oe("tailLamp",0,.849,-1.012,15014699,.16);return{motorcycleRoot:b,bikeCockpitRoot:T,bikeCockpitBar:He,bikeHandlebar:Be,bikeFrontWheelPivot:H,bikeFrontWheelAssembly:Z,bikeRearWheelAssembly:Y,bikeRearWheelMount:X,bikeSignalLamps:re,bikeBrakeLamp:ie,updateBikeCockpit:k,mirrorSurfaces:n}}function Jx(i,e,t,n,s=!0){const r=new je;r.name="sedanRoot",i.add(r);const o={sedanRoot:r},a=[];o.mirrorSurfaces=a;const c=(f,P=.65,L=0)=>new Re({color:f,roughness:P,metalness:L}),l=c(2435116,.88),h=c(4277578,.96),d=c(9213599,.38,.55),u=c(1385262,.16,.4),m=new Re({color:15792639,emissive:14282495,emissiveIntensity:.8}),_=new Re({color:10097179,emissive:15277353,emissiveIntensity:.28,roughness:.2}),v=new Re({color:10929102,roughness:.12,metalness:.12,transparent:!0,opacity:.19,depthWrite:!1,side:Rt}),g=(f,P)=>(f.name=P,f.userData.partName=P,f),p=(f,P=r)=>{const L=g(new je,f);return P.add(L),L},S=f=>o[f]=p(f);function M(f,P,L,B=.025){B=Math.min(B,f/3,P/3,L/3);const O=new fs;O.moveTo(-f/2+B,-P/2+B),O.lineTo(f/2-B,-P/2+B),O.lineTo(f/2-B,P/2-B),O.lineTo(-f/2+B,P/2-B),O.closePath();const ce=new or(O,{depth:L-2*B,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:B,bevelThickness:B});return ce.translate(0,0,-L/2+B),ce}function x(f,P,L,B,O=0,ce=0,te=0){const Se=f.children.filter(K=>K.name===P||K.name.startsWith(`${P}:`)).length,fe=g(new de(L,B),Se?`${P}:${Se+1}`:P);return fe.position.set(O,ce,te),fe.castShadow=!B.transparent,fe.receiveShadow=!0,f.add(fe),fe}const y=(f,P,L,B,O,ce,te=0,Se=0,fe=0,K=.025)=>x(f,P,M(L,B,O,K),ce,te,Se,fe);function b(f,P,L,B){const O=[],ce=[];for(const[fe,K,_e,Oe]of L)for(let Ie=0;Ie<32;Ie++){const Te=Ie/32*Math.PI*2,We=Math.cos(Te),F=Math.sin(Te);O.push(Math.sign(We)*Math.pow(Math.abs(We),.42)*K,(Oe+_e)/2+Math.sign(F)*Math.pow(Math.abs(F),.42)*((Oe-_e)/2),fe)}for(let fe=0;fe<L.length-1;fe++)for(let K=0;K<32;K++){const _e=fe*32+K,Oe=fe*32+(K+1)%32;ce.push(_e,Oe,Oe+32,_e,Oe+32,_e+32)}for(let fe=1;fe<31;fe++){ce.push(0,fe+1,fe);const K=(L.length-1)*32;ce.push(K,K+fe,K+fe+1)}const Se=new _t;return Se.setAttribute("position",new Ye(O,3)),Se.setIndex(ce),Se.computeVertexNormals(),x(f,P,Se,B)}function T(f,P,L,B,O=.008){const ce=new mo(L.map(te=>new D(...te)));return x(f,P,new hr(ce,Math.max(8,L.length*5),O,5,!1),B)}function C(f,P,L,B){const O=new _t;return O.setAttribute("position",new Ye(L.flat(),3)),O.setIndex([0,1,2,0,2,3]),O.computeVertexNormals(),x(f,P,O,B)}const w=new Re({color:3462041,roughness:.35,metalness:.2,side:Rt});function E(f,P,L,B,O=.06){const ce=p("gaimengoEmblem",f);return ce.position.set(P,L,B),x(ce,"badgeRing",new In(O,O*.12,6,32),t),x(ce,"badgeDisc",new Di(O*.86,32),w),ce}function I(f,P,L,B,O,ce){const te=p(P,f);te.position.set(...O);const fe=new D(-.36,1.245,-.38).sub(te.position).normalize().add(new D(...ce).normalize()).normalize();te.quaternion.setFromRotationMatrix(new xt().lookAt(fe,new D,new D(0,1,0))),y(te,"mirrorFrame",L+.022,B+.022,.024,n,0,0,-.015,.006);const K=new zt(L,B),_e=g(s?new ur(K,{color:11974326,textureWidth:256,textureHeight:256,clipBias:.001,multisample:0}):new de(K,c(10597570,.08,.85)),"reflectiveGlass");if(te.add(_e),a.push(_e),s&&_e.onBeforeRender){const Oe=_e.onBeforeRender;_e.onBeforeRender=function(Ie,Te,We){if(We.userData.skipCarMirrors)return;const F=performance.now(),ve=We.userData.carMirrorInterval||0;if(ve&&F-(this.userData.reflectedAt||0)<ve)return;this.userData.reflectedAt=F;const Ee=a.map(De=>De.visible),ke=Ie.getViewport(new gt),xe=Ie.getScissor(new gt),ae=Ie.getScissorTest();a.forEach(De=>{De!==_e&&(De.visible=!1)}),Ie.setScissorTest(!1);try{Oe.call(this,Ie,Te,We)}finally{a.forEach((De,$e)=>{De.visible=Ee[$e]}),Ie.setViewport(ke),Ie.setScissor(xe),Ie.setScissorTest(ae)}}}return te}const N=S("body"),H=new fs;H.moveTo(-2.26,.3),H.lineTo(-2.26,.76),H.quadraticCurveTo(-2.15,.94,-1.6,.97),H.lineTo(.95,.94),H.quadraticCurveTo(1.95,.94,2.24,.78),H.lineTo(2.24,.3),H.lineTo(1.72,.3),H.absarc(1.35,.315,.371,0,Math.PI,!1),H.lineTo(-.979,.3),H.absarc(-1.35,.315,.371,0,Math.PI,!1),H.closePath();const Z=new or(H,{depth:.055,bevelEnabled:!0,bevelSegments:3,bevelSize:.018,bevelThickness:.018,curveSegments:32}),X=Z.attributes.position;for(let f=0;f<X.count;f++){const P=X.getX(f),L=X.getY(f),B=Math.max(0,L-.77)*.24,O=Math.pow(Math.min(Math.abs(P)/2.3,1),5)*.048;X.setZ(f,X.getZ(f)-B-O)}Z.computeVertexNormals();for(const f of[-1,1]){const P=x(N,`sideSkin${f}`,Z,e,f*.825);P.rotation.y=f*Math.PI/2,f===1&&(P.scale.x=-1);for(const L of[-1.35,1.35]){const B=[];for(let O=0;O<=28;O++){const ce=O/28*Math.PI;B.push([f*.885,.315+Math.sin(ce)*.382,L+Math.cos(ce)*.382])}T(N,"fenderLip",B,e,.018)}T(N,"shoulderCrease",[[f*.86,.81,-2.04],[f*.898,.88,-.9],[f*.898,.87,.7],[f*.855,.8,1.98]],d,.003);for(const L of[-.48,.67])T(N,"doorShutline",[[f*.898,.93,L],[f*.899,.63,L-.02],[f*.88,.36,L-.07]],n,.0035),y(N,"doorHandle",.026,.032,.15,e,f*.912,.84,L-.19,.01);y(N,"rocker",.07,.08,1.9,e,f*.85,.3,0)}y(N,"underbody",1.55,.08,3.65,n,0,.24,0);const Y=S("shoulderShell");for(const f of[-1,1])y(Y,"beltLine",.12,.09,2.5,e,f*.81,.94,-.2);const j=S("hood");b(j,"bonnet",[[.94,.785,.943,1.012],[1.15,.817,.929,1],[1.75,.822,.884,.965],[2.1,.785,.859,.932],[2.23,.71,.85,.912]],e);for(const f of[-1,1])T(j,"bonnetCrease",[[f*.57,1.01,.99],[f*.49,.981,1.6],[f*.38,.945,2.15]],e,.009);const W=S("trunk");b(W,"bootLid",[[-2.275,.74,.902,.958],[-2.16,.835,.905,.99],[-1.85,.85,.916,1.004],[-1.51,.79,.925,1.015]],e),y(W,"bootFace",1.64,.24,.07,e,0,.8,-2.255),E(W,0,.86,-2.299,.039);const me=S("frontBumper");b(me,"bumper",[[1.98,.848,.3,.823],[2.15,.875,.295,.846],[2.25,.834,.31,.854],[2.318,.753,.34,.848]],e);const ye=S("rearBumper");b(ye,"bumper",[[-2.323,.746,.345,.636],[-2.28,.836,.32,.655],[-2.16,.873,.31,.665],[-2.02,.846,.32,.66]],e),y(ye,"lowerValance",1.36,.105,.03,n,0,.335,-2.321);for(const f of[-1,1])y(ye,"reflector",.19,.033,.016,_,f*.66,.48,-2.327);const be=S("grille"),Be=new fs;Be.moveTo(-.52,.735),Be.lineTo(.52,.735),Be.lineTo(.715,.385),Be.quadraticCurveTo(0,.315,-.715,.385),Be.closePath(),x(be,"trapezoidIntake",new Fl(Be),n,0,0,2.323);for(let f=0;f<7;f++){const P=.39+f*.046,L=.7-f*.026;y(be,"grilleSlat",L*2,.012,.014,c(3423040,.45,.15),0,P,2.331,.003)}y(be,"upperIntake",1.26,.063,.035,n,0,.825,2.276),T(be,"chromeWing",[[-.71,.87,2.273],[-.36,.847,2.308],[0,.848,2.319],[.36,.847,2.308],[.71,.87,2.273]],t,.01),E(be,0,.862,2.343,.041);const Je=S("cabin"),nt=S("roofPanel");y(nt,"roof",1.39,.075,1.14,e,0,1.435,-.23,.024),y(nt,"headliner",1.32,.021,1.11,h,0,1.388,-.23,.006);for(const[f,P,L]of[["aPillarL",-1,!1],["aPillarR",1,!1],["cPillarL",-1,!0],["cPillarR",1,!0]]){const B=S(f);T(B,"paintedPillar",[[P*.81,.97,L?-1.57:1],[P*.735,1.2,L?-1.19:.65],[P*.66,1.435,L?-.8:.31]],e,L?.065:.031),T(B,"pillarLining",[[P*.779,.978,L?-1.54:.99],[P*.705,1.2,L?-1.18:.64],[P*.637,1.418,L?-.79:.3]],h,L?.033:.019)}const Ze=S("windshield");C(Ze,"glass",[[-.78,.99,1],[.78,.99,1],[.65,1.413,.32],[-.65,1.413,.32]],v);const ne=S("rearWindow");C(ne,"glass",[[.76,1.005,-1.53],[-.76,1.005,-1.53],[-.64,1.415,-.79],[.64,1.415,-.79]],v);for(const[f,P]of[["sideWindowL",-1],["sideWindowR",1]]){const L=S(f);C(L,"glass",[[P*.816,.986,.97],[P*.816,.986,-1.5],[P*.665,1.412,-.78],[P*.665,1.412,.3]],v),T(Je,"bPillar",[[P*.814,.97,-.37],[P*.667,1.413,-.37]],n,.033),T(Je,"windowSurround",[[P*.816,.975,.98],[P*.664,1.422,.3],[P*.666,1.426,-.77],[P*.816,.981,-1.5]],n,.009)}for(const[f,P]of[["roofRailL",-1],["roofRailR",1]]){const L=S(f);T(L,"roofSeam",[[P*.65,1.465,.25],[P*.66,1.475,-.24],[P*.65,1.465,-.74]],n,.003)}const le=x(nt,"sharkFin",new us(.042,.09,4),e,0,1.508,-.66);le.scale.z=1.7;for(const[f,P]of[["headlightL",-1],["headlightR",1]]){const L=S(f);L.position.set(P*.653,.848,2.197),L.rotation.y=P*.16,y(L,"smokedHousing",.43,.108,.13,u,0,0,0,.028);for(const B of[-.1,.025])x(L,"projector",new ot(.027,.027,.012,20),m,B,.01,.072).rotation.x=Math.PI/2;T(L,"ledSignature",[[-.192,.027,.073],[-.13,-.03,.073],[.14,-.03,.073],[.193,.021,.073]],m,.008)}for(const[f,P]of[["taillightL",-1],["taillightR",1]]){const L=S(f);L.position.set(P*.622,.835,-2.278),y(L,"redHousing",.43,.104,.061,_,0,0,0,.02),T(L,"lightSignature",[[-.19,.03,-.04],[.19,.03,-.04],[.13,-.032,-.04],[-.17,-.032,-.04]],_,.012)}for(const[f,P]of[["sideMirrorL",-1],["sideMirrorR",1]]){const L=S(f);y(L,"mirrorStalk",.17,.032,.054,n,P*.866,1.027,.72);const B=I(L,"sideMirrorFace",.15,.061,[P*.97,1.064,.582],[P*.15,-.05,-1]);y(B,"mirrorCap",.19,.1,.19,e,0,0,-.12,.027)}const ge=S("dashboard");y(ge,"cabinFloor",1.58,.08,2.58,l,0,.335,-.28),y(ge,"firewall",1.55,.56,.09,l,0,.615,.9);for(const f of[-1,1])y(ge,"lowerDoorLining",.075,.23,2.15,l,f*.766,.46,-.13),y(ge,"carpetMat",.53,.018,.8,n,f*.39,.383,.1,.004);y(ge,"mirrorStem",.025,.09,.035,n,.03,1.354,.405,.007),I(ge,"centerMirror",.245,.083,[.03,1.287,.39],[0,-.02,-1]),y(ge,"softDashTop",1.56,.13,.56,l,0,.915,.69,.035),y(ge,"lowerDash",1.51,.17,.26,h,0,.797,.6,.034),T(ge,"satinDashAccent",[[-.74,.86,.408],[-.43,.863,.399],[0,.862,.397],[.46,.864,.398],[.74,.885,.414]],d,.007);for(const f of[-.665,-.11,.115,.665]){y(ge,"ventFrame",.16,.062,.021,d,f,.875,.386,.005),y(ge,"ventRecess",.143,.047,.013,n,f,.875,.372,.004);for(let P=-1;P<=1;P++)y(ge,"ventSlat",.13,.003,.009,h,f,.875+P*.013,.362,8e-4)}y(ge,"climatePanel",.38,.073,.038,n,.015,.761,.432,.01);for(const f of[-.135,.16]){const P=x(ge,"climateKnob",new ot(.026,.026,.018,24),d,f,.761,.407);P.rotation.x=Math.PI/2}y(ge,"centerTunnel",.25,.17,.95,l,.015,.5,-.04),y(ge,"shiftSurround",.19,.017,.28,d,.015,.596,.18,.005),y(ge,"shiftBoot",.11,.07,.14,n,.015,.634,.18),y(ge,"gearSelector",.065,.1,.07,l,.015,.704,.18);for(const f of[-.1,-.28])x(ge,"cupWell",new ot(.057,.047,.012,24),n,.015,.59,f),x(ge,"cupRim",new In(.057,.004,6,24),d,.015,.597,f).rotation.x=Math.PI/2;y(ge,"armrest",.25,.085,.28,l,.015,.64,-.51);for(const f of[-1,1])y(ge,"doorCard",.047,.42,1.3,l,f*.79,.74,-.03),y(ge,"doorArmrest",.1,.048,.57,h,f*.738,.72,.07),T(ge,"doorTrim",[[f*.757,.875,.5],[f*.757,.857,.1],[f*.757,.8,-.5]],d,.006),y(ge,"doorPull",.014,.029,.12,t,f*.755,.84,.28,.004);const we=S("steeringWheel");we.position.set(-.36,.971,.16),we.rotation.x=-.22,x(we,"leatherRim",new In(.174,.019,12,64),l),y(we,"airbag",.137,.105,.055,l,0,-.005,0,.016);for(const f of[-1,1]){y(we,"horizontalSpoke",.11,.046,.028,l,f*.112,-.008,0),y(we,"spokeTrim",.081,.009,.014,d,f*.113,-.031,-.018,.002);for(let P=0;P<3;P++)y(we,"controlButton",.014,.011,.006,d,f*(.084+P*.025),.002,-.019,.001)}y(we,"lowerSpoke",.05,.098,.025,d,0,-.116,0),E(we,0,.009,-.035,.021);for(const f of[-1,1])y(ge,"columnStalk",.15,.019,.025,n,-.36+f*.14,.971,.24,.006);function Ae(f,P,L,B,O,ce=[768,320]){const te=document.createElement("canvas");te.width=ce[0],te.height=ce[1];const Se=te.getContext("2d");O(Se,te.width,te.height);const fe=new gn(te);fe.colorSpace=yt;const K=x(f,P,new zt(L,B),new Ot({map:fe,toneMapped:!1}));return K.rotation.y=Math.PI,K.castShadow=!1,{ctx:Se,texture:fe,screen:K}}const He=S("instrumentCluster");He.position.set(-.36,.973,.399),He.rotation.x=-.15,y(He,"clusterHousing",.47,.17,.066,n,0,0,.027,.02),y(He,"clusterHood",.49,.023,.13,l,0,.083,.014,.007);let it=0,k=.18,oe="N",re="off";function ie(f,P,L){f.fillStyle="#071017",f.fillRect(0,0,P,L);const B=(O,ce,te,Se)=>{f.strokeStyle="#304652",f.lineWidth=8,f.beginPath(),f.arc(O,163,116,.75*Math.PI,2.25*Math.PI),f.stroke();for(let K=0;K<=12;K++){const _e=Math.PI*(.75+1.5*K/12);f.strokeStyle=K>10?"#ff655b":"#d0dee7",f.lineWidth=K%2?2:4,f.beginPath(),f.moveTo(O+Math.cos(_e)*96,163+Math.sin(_e)*96),f.lineTo(O+Math.cos(_e)*110,163+Math.sin(_e)*110),f.stroke(),K%2||(f.fillStyle="#c6d5df",f.font="16px sans-serif",f.textAlign="center",f.fillText(String(Math.round(K/12*te)),O+Math.cos(_e)*79,169+Math.sin(_e)*79))}const fe=Math.PI*(.75+1.5*Math.min(ce/te,1));f.strokeStyle="#f65b4f",f.lineWidth=4,f.beginPath(),f.moveTo(O,163),f.lineTo(O+Math.cos(fe)*89,163+Math.sin(fe)*89),f.stroke(),f.fillStyle="#c3d4df",f.font="18px sans-serif",f.textAlign="center",f.fillText(Se,O,240)};B(151,k*8,8,"×1000"),B(617,it,240,"km/h"),f.textAlign="center",f.fillStyle="#f2f7fa",f.font="64px sans-serif",f.fillText(String(it),384,150),f.font="20px sans-serif",f.fillStyle="#9dafbd",f.fillText("km/h",384,182),f.fillStyle="#f2f7fa",f.font="32px sans-serif",f.fillText(oe,384,246),f.fillStyle="#56da9c",f.font="26px sans-serif",(re==="left"||re==="hazard")&&f.fillText("◀",304,48),(re==="right"||re==="hazard")&&f.fillText("▶",464,48)}const U=Ae(He,"liveGauges",.43,.139,ie);U.screen.position.z=-.009;let q="";o.updateCockpit=(f,P,L,B)=>{it=Math.round(Math.abs(f)*3.6),k=Math.round(P*40)/40,oe=L,re=B;const O=`${it}/${k}/${oe}/${re}`;O!==q&&(q=O,ie(U.ctx,768,320),U.texture.needsUpdate=!0)};const G=S("centerScreen");G.position.set(.055,1.04,.438),G.rotation.x=-.1,y(G,"tabletBezel",.33,.206,.028,n,0,0,.015,.009);const ee=Ae(G,"mapDisplay",.305,.177,(f,P,L)=>{f.fillStyle="#172632",f.fillRect(0,0,P,L),f.strokeStyle="#344b58",f.lineWidth=10;for(let B=0;B<7;B++)f.beginPath(),f.moveTo(B*140-90,0),f.lineTo(B*140+20,L),f.stroke();for(let B=0;B<4;B++)f.beginPath(),f.moveTo(0,B*90+15),f.lineTo(P,B*90-50),f.stroke();f.strokeStyle="#52b9ee",f.lineWidth=12,f.beginPath(),f.moveTo(380,310),f.lineTo(360,180),f.lineTo(570,155),f.lineTo(550,40),f.stroke(),f.fillStyle="#e6f5ff",f.beginPath(),f.moveTo(358,181),f.lineTo(339,215),f.lineTo(378,207),f.closePath(),f.fill(),f.fillStyle="#0c151e",f.fillRect(0,0,95,L),f.font="32px sans-serif",f.fillStyle="#a8c9dd",f.fillText("⌂",28,65),f.fillText("♪",29,156),f.fillText("⚙",26,255)});ee.screen.position.z=-.001;for(const[f,P]of[["driverSeat",-.37],["passengerSeat",.37]]){const L=S(f);L.position.set(P,.55,-.4),y(L,"cushion",.47,.13,.5,l),y(L,"fabricInsert",.29,.025,.4,h,0,.076,.02,.007),y(L,"seatBack",.46,.5,.13,l,0,.27,-.24).rotation.x=-.14,y(L,"backInsert",.3,.37,.034,h,0,.28,-.158).rotation.x=-.14;for(const B of[-.08,.08])y(L,"headrestPost",.011,.1,.012,t,B,.565,-.27,.002);y(L,"headrest",.25,.15,.1,l,0,.65,-.27)}y(Je,"rearBench",1.36,.15,.45,l,0,.56,-1.09),y(Je,"rearSeatBack",1.35,.42,.12,l,0,.8,-1.34),o.wheelAssemblies=[];const se=c(1448219,.93),he=c(3225664,.32,.65);for(const[f,P,L,B]of[["wheelFL",-.79,1.35,!0],["wheelFR",.79,1.35,!0],["wheelRL",-.79,-1.35,!1],["wheelRR",.79,-1.35,!1]]){const O=p(f);O.position.set(P,.315,L);const ce=p("rollingAssembly",O);x(ce,"tire",new ot(.315,.315,.205,48),se).rotation.z=Math.PI/2;for(const te of[-1,1]){const Se=p(`rimFace${te}`,ce);Se.position.x=te*.108,Se.rotation.y=te*Math.PI/2,x(Se,"rimBarrel",new ot(.224,.224,.013,48),he).rotation.x=Math.PI/2,x(Se,"machinedLip",new In(.224,.01,8,48),d,0,0,.01),x(Se,"brakeDisc",new Di(.171,32),d,0,0,.009);for(let fe=0;fe<5;fe++)for(const K of[-.11,.11]){const _e=fe*Math.PI*2/5+K,Oe=y(Se,"splitSpoke",.024,.18,.017,t,Math.sin(_e)*.127,Math.cos(_e)*.127,.025,.004);Oe.rotation.z=-_e}x(Se,"hub",new ot(.052,.052,.03,20),d,0,0,.026).rotation.x=Math.PI/2;for(let fe=0;fe<5;fe++){const K=fe*Math.PI*2/5;x(Se,"lug",new vn(.007,6,4),n,Math.cos(K)*.038,Math.sin(K)*.038,.045)}}o.wheelAssemblies.push({pivot:O,wheel:ce,steerable:B,radius:.315})}function R(f,P,L,B,O,ce,te){const Se=new Re({color:O,emissive:O,emissiveIntensity:.02,roughness:.25});return{mesh:y(r,f,ce,te,.018,Se,P,L,B,.005),material:Se}}return o.sedanSignalLamps={left:[R("frontSignalL",.795,.862,2.247,16755249,.073,.024),R("rearSignalL",.754,.813,-2.319,16755249,.13,.022)],right:[R("frontSignalR",-.795,.862,2.247,16755249,.073,.024),R("rearSignalR",-.754,.813,-2.319,16755249,.13,.022)]},o.sedanBrakeLamps=[-1,1].map(f=>R(`brake${f}`,f*.59,.86,-2.32,16721461,.28,.025)),o.reverseLamps=[-1,1].map(f=>R(`reverse${f}`,f*.43,.807,-2.32,15660543,.08,.022)),o}function $x(i){const e=new je;e.position.set(-.37,.58,-.38);const t=new Re({color:1981066,roughness:.65}),n=new Re({color:1976635,roughness:.75}),s=new Re({color:15843965,roughness:.55}),r=new Re({color:1513239,roughness:.8}),o=new Re({color:14427686,emissive:8330525,emissiveIntensity:.35,roughness:.35}),a=new Re({color:14870768,metalness:.85,roughness:.2}),c=new de(new Xe(.32,.42,.2),t);c.position.set(0,.24,.04),c.rotation.x=-.08,c.castShadow=!0,e.add(c);for(const E of[-.085,.085]){const I=new de(new Xe(.12,.11,.36),n);I.position.set(E,.06,.2),I.rotation.x=-.1,e.add(I)}const l=new je;l.position.set(0,.54,.03);const h=new de(new ot(.048,.055,.08,12),s);h.position.y=-.03,l.add(h);const d=new de(new vn(.115,16,14),s);d.position.y=.06,d.scale.set(.92,1.05,.96),d.castShadow=!0,l.add(d);const u=new de(new vn(.119,14,10,0,Math.PI*2,0,Math.PI*.62),r);u.position.y=.068,u.rotation.x=-.15,l.add(u);const m=new de(new Xe(.16,.018,.11),new Re({color:366185,roughness:.4}));m.position.set(0,.115,.11),m.rotation.x=.12,l.add(m);const _=new de(new Xe(.15,.032,.025),new Re({color:988970,metalness:.5,roughness:.2}));_.position.set(0,.068,.105),l.add(_),e.add(l);const v=new je;v.position.set(.18,.39,.05);const g=new de(new Xe(.075,.075,.44),t);g.position.set(-.02,-.04,.21),g.rotation.x=.15,g.rotation.y=-.12;const p=new de(new vn(.042,10,8),s);p.position.set(-.05,-.06,.43),v.add(g,p),e.add(v);const S=new je;S.position.set(-.18,.39,.05);const M=new de(new Xe(.075,.075,.44),t);M.position.set(.02,-.04,.21),M.rotation.x=.15,M.rotation.y=.12;const x=new de(new vn(.042,10,8),s);x.position.set(.05,-.06,.43),S.add(M,x),e.add(S);const y=new je,b=new de(new Xe(.055,.52,.022),o);b.position.set(-.01,.25,.145),b.rotation.z=-.62,b.rotation.x=-.08,y.add(b);const T=new de(new Xe(.045,.34,.018),o);T.position.set(-.24,.48,-.02),T.rotation.z=.45,y.add(T);const C=new de(new Xe(.33,.05,.024),o);C.position.set(0,.09,.16),y.add(C);const w=new de(new Xe(.045,.065,.035),a);return w.position.set(.17,.08,.15),y.add(w),y.visible=!1,e.add(y),i.add(e),{group:e,headGroup:l,seatbeltGroup:y,leftArmGroup:v,rightArmGroup:S}}function Ld(i){const e=new je,t=new je,n=new je;n.rotation.y=Math.PI,t.add(n),e.add(t);const s=new tl({color:366185,metalness:.12,roughness:.24,clearcoat:1,clearcoatRoughness:.17}),r=new Re({color:14212835,metalness:.92,roughness:.16}),o=new Re({color:1316893,metalness:.38,roughness:.58});if(i==="motorcycle"){const l=qx(n,r,!0);return l.bikeCockpitRoot.visible=!1,{root:e,leanGroup:t,flipGroup:n,kind:i,corollaParts:null,cb400Parts:l,driverAvatar:null}}const a=Jx(n,s,r,o,!0),c=$x(n);return{root:e,leanGroup:t,flipGroup:n,kind:i,corollaParts:a,cb400Parts:null,driverAvatar:c}}function _h(i,e){if(i.kind==="motorcycle"&&i.cb400Parts){const t=i.cb400Parts;t.motorcycleRoot.visible=!e,t.bikeCockpitRoot.visible=e;return}if(i.corollaParts){const t=i.corollaParts,n=!e;t.driverSeat&&(t.driverSeat.visible=n),t.frontBumper&&(t.frontBumper.visible=n),t.rearBumper&&(t.rearBumper.visible=n),t.grille&&(t.grille.visible=n),t.headlightL&&(t.headlightL.visible=n),t.headlightR&&(t.headlightR.visible=n),t.taillightL&&(t.taillightL.visible=n),t.taillightR&&(t.taillightR.visible=n),t.roofRailL&&(t.roofRailL.visible=n),t.roofRailR&&(t.roofRailR.visible=n)}i.driverAvatar&&(i.driverAvatar.group.visible=!e)}function Yx(i,e,t){var a,c,l,h;i.root.position.set(e.x,e.y,e.z),i.root.rotation.y=e.heading,i.leanGroup.rotation.x=e.pitch,i.leanGroup.rotation.z=e.roll;const n=e.blinkerOn&&(e.blinker==="left"||e.blinker==="hazard"),s=e.blinkerOn&&(e.blinker==="right"||e.blinker==="hazard"),r=e.braking||e.handbrake,o=Math.max(.18,Math.min(1,(e.rpm-700)/4200));if(i.corollaParts){const d=i.corollaParts;for(const _ of d.wheelAssemblies)_.steerable&&(_.pivot.rotation.y=e.steerAngleRad),_.wheel.rotation.x=e.wheelRotationRad;d.steeringWheel&&(d.steeringWheel.rotation.z=-e.steeringWheelRad);const u=(a=e.preDrive)!=null&&a.seatAdjusted?.06:0;if(d.driverSeat&&(d.driverSeat.position.z=-.4+u),i.driverAvatar){const _=i.driverAvatar;if(_.group.position.z=-.38+u,_.seatbeltGroup.visible=!!((c=e.preDrive)!=null&&c.seatbeltFastened),e.mirrorTouchTimer>0)_.headGroup.rotation.y=.32,_.headGroup.rotation.x=-.22,_.leftArmGroup.rotation.x=-.75,_.leftArmGroup.rotation.y=.35;else{_.headGroup.rotation.y=e.lookAngleRad*.95,_.headGroup.rotation.x=Math.abs(e.lookAngleRad)>.2?.05:0;const v=St.clamp(e.steerAngleRad*.45,-.35,.35);_.leftArmGroup.rotation.x=v,_.leftArmGroup.rotation.y=0,_.rightArmGroup.rotation.x=-v}}for(const _ of d.sedanSignalLamps.left)_.material.emissiveIntensity=n?2.4:.02;for(const _ of d.sedanSignalLamps.right)_.material.emissiveIntensity=s?2.4:.02;for(const _ of d.sedanBrakeLamps)_.material.emissiveIntensity=r?2.5:.12;for(const _ of d.reverseLamps)_.material.emissiveIntensity=e.reversing?2:.02;const m=n&&s?"hazard":n?"left":s?"right":"off";(l=d.updateCockpit)==null||l.call(d,e.speedMs,o,e.gear,m)}if(i.cb400Parts){const d=i.cb400Parts;d.bikeFrontWheelPivot.rotation.y=e.steerAngleRad,d.bikeFrontWheelAssembly.group.rotation.x=e.wheelRotationRad,d.bikeRearWheelAssembly.group.rotation.x=e.wheelRotationRad,d.bikeHandlebar.rotation.y=e.steerAngleRad,d.bikeCockpitBar.rotation.y=e.steerAngleRad;for(const u of d.bikeSignalLamps.left)u.material.emissiveIntensity=n?2.4:.02;for(const u of d.bikeSignalLamps.right)u.material.emissiveIntensity=s?2.4:.02;d.bikeBrakeLamp.material.emissiveIntensity=r?2.5:.12,(h=d.updateBikeCockpit)==null||h.call(d,e.speedMs,o)}}class Zx{constructor(e,t){pe(this,"camera");pe(this,"orbit");pe(this,"mode","chase");pe(this,"mirrorQuality","high");pe(this,"mirrorCameras",{left:new Bt(56,1.65,.1,450),center:new Bt(44,2.5,.1,450),right:new Bt(56,1.65,.1,450)});pe(this,"miniMapCamera",new Ol(-45,45,45,-45,1,240));pe(this,"miniMapViewport",{centerX:0,centerZ:0,halfWidth:45,halfHeight:45,halfSize:45});pe(this,"insetSurfaces",new WeakMap);pe(this,"smoothPos",new D(12,5.5,56));pe(this,"smoothLook",new D(12,1.6,48));pe(this,"frameCounter",0);this.camera=new Bt(60,t,.05,650),this.camera.layers.enable(1),[this.miniMapCamera,...Object.values(this.mirrorCameras)].forEach(n=>{n.userData.skipCarMirrors=!0,n.layers.set(0)}),this.orbit=new Dx(this.camera,e),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.08,this.orbit.maxPolarAngle=Math.PI*.48,this.orbit.minDistance=2.8,this.orbit.maxDistance=65,this.orbit.enabled=!1}setMode(e,t,n){this.mode=e,this.orbit.enabled=e==="orbit",this.camera.userData.carMirrorInterval=e==="cockpit"||e==="instructor"?0:250,n&&_h(n,e==="cockpit"),document.body.dataset.view=e==="chase"?"follow":e,document.body.classList.toggle("sedan-cockpit",(e==="cockpit"||e==="instructor")&&(n==null?void 0:n.kind)!=="motorcycle"),document.body.classList.toggle("bike-cockpit",e==="cockpit"&&(n==null?void 0:n.kind)==="motorcycle"),e==="orbit"?(this.camera.fov=60,this.camera.updateProjectionMatrix(),this.camera.position.set(t.x+16,t.y+18,t.z+16),this.orbit.target.set(t.x,t.y+1.2,t.z),this.orbit.update()):this.snapToState(t,(n==null?void 0:n.kind)??"sedan")}getMode(){return this.mode}setMirrorQuality(e,t){this.mirrorQuality=e}bindMirrorsToVehicle(e){_h(e,this.mode==="cockpit")}snapToState(e,t="sedan"){const n=this.getViewPose(this.mode,e,t);this.smoothPos.copy(n.position),this.smoothLook.copy(n.lookTarget),this.camera.position.copy(n.position),this.camera.lookAt(n.lookTarget)}resize(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}getViewPose(e,t,n){const s=new D(-Math.sin(t.heading),0,-Math.cos(t.heading)),r=new D(Math.cos(t.heading),0,-Math.sin(t.heading)),o=t.heading+t.lookAngleRad,a=new D(-Math.sin(o),0,-Math.cos(o)),c=new D(Math.cos(o),0,-Math.sin(o)),l=new D(t.x,t.y,t.z);if(e==="cockpit"){if(n==="motorcycle"){const g=l.clone().add(new D(0,1.42,0)).add(s.clone().multiplyScalar(-.08)),p=g.clone().add(a.clone().multiplyScalar(30)).add(c.clone().multiplyScalar(.04)).add(new D(0,Math.sin(t.pitch)*28-1.3,0));return{position:g,lookTarget:p}}const _=l.clone().add(new D(0,1.245,0)).add(s.clone().multiplyScalar(-.38)).add(r.clone().multiplyScalar(.36)),v=_.clone().add(a.clone().multiplyScalar(28)).add(c.clone().multiplyScalar(.04)).add(new D(0,Math.sin(t.pitch)*26-1.1,0));return{position:_,lookTarget:v}}if(e==="instructor"){const _=l.clone().add(new D(0,1.24,0)).add(s.clone().multiplyScalar(-.34)).add(r.clone().multiplyScalar(-.37)),v=l.clone().add(new D(0,1.02+Math.sin(t.pitch)*1.2,0)).add(s.clone().multiplyScalar(.32)).add(r.clone().multiplyScalar(.24-t.lookAngleRad*.18));return{position:_,lookTarget:v}}if(e==="hood"){const _=l.clone().add(new D(0,1.12,0)).add(s.clone().multiplyScalar(.55)),v=_.clone().add(a.clone().multiplyScalar(22)).add(new D(0,Math.sin(t.pitch)*22-.8,0));return{position:_,lookTarget:v}}const h=n==="motorcycle"?7.2:9,d=n==="motorcycle"?4.6:5.5,u=l.clone().add(new D(0,d,0)).add(a.clone().multiplyScalar(-h)),m=l.clone().add(new D(0,n==="motorcycle"?1.28:1.6,0));return{position:u,lookTarget:m}}update(e,t,n,s,r,o){if(this.mode==="orbit"){const d=t.y+(n==="motorcycle"?1:1.2);this.orbit.target.lerp(new D(t.x,d,t.z),1-Math.pow(.01,e)),this.orbit.update();return}const a=this.mode==="cockpit"?n==="motorcycle"?78:70:this.mode==="instructor"?74:60,c=St.clamp(Math.abs(t.speedMs)/22,0,1);this.camera.fov=St.damp(this.camera.fov,a+c*14,5,e),this.camera.updateProjectionMatrix();const l=this.getViewPose(this.mode,t,n);if(this.mode==="cockpit"||this.mode==="instructor"||this.mode==="hood"){this.camera.position.copy(l.position),this.camera.lookAt(l.lookTarget);return}const h=1-Math.pow(.002,e);this.smoothPos.lerp(l.position,h),this.camera.position.copy(this.smoothPos),this.camera.lookAt(l.lookTarget)}renderInset(e,t,n,s){const r=t.clientWidth,o=t.clientHeight;if(r<2||o<2)return;let a=this.insetSurfaces.get(t);if(!a){const d=document.createElement("canvas");d.className="insetCanvas",d.setAttribute("aria-hidden","true"),t.prepend(d);const u=d.getContext("2d",{alpha:!1});a={canvas:d,ctx:u},this.insetSurfaces.set(t,a)}const c=e.getPixelRatio(),l=Math.min(Math.floor(r*c),e.domElement.width),h=Math.min(Math.floor(o*c),e.domElement.height);(a.canvas.width!==l||a.canvas.height!==h)&&(a.canvas.width=l,a.canvas.height=h),e.setScissorTest(!0),e.setViewport(0,0,l/c,h/c),e.setScissor(0,0,l/c,h/c),e.render(n,s),a.ctx.drawImage(e.domElement,0,e.domElement.height-h,l,h,0,0,l,h),e.setScissorTest(!1)}renderPiPMirrors(e,t,n,s,r,o,a){if(a||this.mirrorQuality==="off"||this.mode==="orbit"||(this.frameCounter++,this.mirrorQuality==="low"&&this.frameCounter%2!==0))return;const c=new D(-Math.sin(n.heading),0,-Math.cos(n.heading)),l=new D(Math.cos(n.heading),0,-Math.sin(n.heading)),h=new D(n.x,n.y,n.z),d=(u,m,_)=>{if(!u)return;const v=u.getBoundingClientRect();if(v.width<2||v.height<2)return;m.aspect=v.width/v.height,m.updateProjectionMatrix(),_==="center"&&(m.projectionMatrix.elements[0]*=-1,m.projectionMatrixInverse.copy(m.projectionMatrix).invert());const g=_==="left"?-1:_==="right"?1:0,p=_==="center"?0:.88*g,S=_==="center"?0:8.5*g,M=h.clone().add(new D(0,_==="center"?1.93:1.78,0)).add(c.clone().multiplyScalar(_==="center"?.24:.06)).add(l.clone().multiplyScalar(p)),x=M.clone().add(c.clone().multiplyScalar(-16)).add(l.clone().multiplyScalar(S)).add(new D(0,.12,0));m.position.copy(M),m.lookAt(x),this.renderInset(e,u,t,m)};d(s,this.mirrorCameras.left,"left"),d(r,this.mirrorCameras.center,"center"),d(o,this.mirrorCameras.right,"right")}renderPiPMiniMap(e,t,n,s,r,o,a,c,l){if(!n)return;const h=n.getBoundingClientRect();if(h.width<2||h.height<2)return;const d=h.width/h.height,u=r.width*.5,m=r.height*.5,_=o?Math.max(r.width,r.height)*.56:Math.max(24,Math.max(r.width,r.height)*.28),v=o?_/Math.max(1,a):_,g=d>=1?v*d:v,p=d>=1?v:v/d,S=o?c:St.clamp(s.x,-u,u),M=o?l:St.clamp(s.z,-m,m);this.miniMapViewport={centerX:S,centerZ:M,halfWidth:g,halfHeight:p,halfSize:v},this.miniMapCamera.left=-g,this.miniMapCamera.right=g,this.miniMapCamera.top=p,this.miniMapCamera.bottom=-p,this.miniMapCamera.position.set(S,110,M),this.miniMapCamera.up.set(0,0,-1),this.miniMapCamera.lookAt(S,0,M),this.miniMapCamera.updateProjectionMatrix(),this.renderInset(e,n,t,this.miniMapCamera)}}const oo=[{id:"kyoshujo-3d",nameEn:"Sakuragaoka 3D Driving School (Full 3D Kyōshūjo)",nameJa:"桜ヶ丘自動車教習所 (3D立体コース)",mapWidth:180,startX:12,startZ:48.1,startHeading:Math.PI/2,accentColor:"#059669"},{id:"tokyo-fuchu",nameEn:"Fuchu Driver's License Test Center, Tokyo",nameJa:"東京府中運転免許試験場",mapWidth:420,startX:-54,startZ:88,startHeading:0,accentColor:"#2563eb"},{id:"tokyo-samezu",nameEn:"Samezu Driver's License Test Center, Tokyo",nameJa:"東京都鮫洲運転免許試験場",mapWidth:340,startX:-42,startZ:74,startHeading:Math.PI/2,accentColor:"#0891b2"},{id:"kanagawa-futamatagawa-car",nameEn:"Kanagawa License Center (Futamatagawa · Car)",nameJa:"神奈川県運転免許センター（二俣川・四輪）",mapWidth:460,startX:-67.9,startZ:112,startHeading:Math.PI/2,accentColor:"#059669"},{id:"osaka-kadoma",nameEn:"Kadoma Driver's License Test Center, Osaka",nameJa:"大阪門真運転免許試験場",mapWidth:400,startX:-50,startZ:82,startHeading:0,accentColor:"#7c3aed"},{id:"aichi-hirabari",nameEn:"Hirabari Driver's License Test Center, Nagoya",nameJa:"愛知県平針運転免許試験場",mapWidth:380,startX:-48,startZ:76,startHeading:Math.PI/2,accentColor:"#d97706"},{id:"saitama-konosu",nameEn:"Saitama Prefectural Driver's License Center (Konosu)",nameJa:"埼玉県警察運転免許センター（鴻巣）",mapWidth:410,startX:-55,startZ:84,startHeading:0,accentColor:"#0d9488"},{id:"chiba-makuhari-car",nameEn:"Chiba Makuhari License Center (Car)",nameJa:"千葉幕張免許センター（四輪）",mapWidth:390,startX:-46,startZ:80,startHeading:Math.PI/2,accentColor:"#db2777"}];class jx{constructor(e){pe(this,"group",new je);pe(this,"mesh",null);pe(this,"texture",null);pe(this,"activeSource",null);pe(this,"currentSize",{width:180,height:120});this.group.visible=!1,e.add(this.group)}getActiveSource(){return this.activeSource}async loadFromDataUrl(e,t){const n=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=()=>r(new Error("Failed to decode map image")),o.src=e});this.applyCanvasOrImage(n,n.width,n.height,t)}loadProceduralTestCenter(e){const s=document.createElement("canvas");s.width=2048,s.height=1360;const r=s.getContext("2d");r.fillStyle="#4e753e",r.fillRect(0,0,2048,1360);for(let a=0;a<6e3;a++)r.fillStyle=a%2===0?"rgba(65,98,48,0.28)":"rgba(110,148,80,0.22)",r.fillRect(Math.random()*2048,Math.random()*1360,4,4);const o=(a,c=92)=>{r.save(),r.lineCap="round",r.lineJoin="round",r.strokeStyle="#d1d5db",r.lineWidth=c+10,a(),r.stroke(),r.strokeStyle="#363c44",r.lineWidth=c,a(),r.stroke(),r.strokeStyle="#f8fafc",r.lineWidth=3,r.setLineDash([24,24]),a(),r.stroke(),r.restore()};o(()=>{r.beginPath(),r.roundRect(140,120,1768,1120,160)},106),o(()=>{r.beginPath(),r.moveTo(2048*.35,120),r.lineTo(2048*.35,1240),r.moveTo(2048*.65,120),r.lineTo(2048*.65,1240),r.moveTo(140,1360*.45),r.lineTo(1908,1360*.45),r.moveTo(140,1360*.72),r.lineTo(2048*.65,1360*.72)},88),o(()=>{r.beginPath(),r.moveTo(2048*.35,1360*.25),r.bezierCurveTo(2048*.5,1360*.16,2048*.5,1360*.38,2048*.65,1360*.28)},52),o(()=>{r.beginPath(),r.moveTo(2048*.65,1360*.58),r.lineTo(2048*.78,1360*.58),r.lineTo(2048*.78,1360*.76),r.lineTo(1908,1360*.76)},54),r.fillStyle="rgba(255,255,255,0.85)",r.font='bold 44px "Noto Sans JP", sans-serif',r.fillText(e.nameJa,220,210),r.fillStyle=e.accentColor,r.font="bold 30px sans-serif",r.fillText(e.nameEn,220,255),this.applyCanvasOrImage(s,2048,1360,e.mapWidth)}applyCanvasOrImage(e,t,n,s){this.disposeCurrent(),this.activeSource=e;const r=new Ht(e);r.colorSpace=yt,r.anisotropy=8,r.needsUpdate=!0,this.texture=r;const o=n/Math.max(1,t),a=Math.max(10,s),c=a*o;this.currentSize={width:a,height:c};const l=new zt(a,c),h=new Re({map:r,roughness:.92,metalness:0}),d=new de(l,h);d.rotation.x=-Math.PI/2,d.position.y=.005,d.receiveShadow=!0,this.mesh=d,this.group.add(d)}setWidth(e){var o;if(!this.mesh||!((o=this.texture)!=null&&o.image))return;const t=this.texture.image,n=t.height/Math.max(1,t.width),s=Math.max(10,e),r=s*n;this.currentSize={width:s,height:r},this.mesh.geometry.dispose(),this.mesh.geometry=new zt(s,r)}setVisible(e){this.group.visible=e}disposeCurrent(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.texture&&(this.texture.dispose(),this.texture=null)}}const xh="jp_kyoshujo_custom_route_v1";class Kx{constructor(e){pe(this,"group",new je);pe(this,"ribbonGroup",new je);pe(this,"stampGroup",new je);pe(this,"activeRing");pe(this,"data",{waypoints:[],stamps:[]});pe(this,"memoryMode","guided");pe(this,"currentWpIndex",0);pe(this,"wrongTurnCount",0);pe(this,"bestDistToCurrentWp",1/0);pe(this,"offRouteAlert",!1);pe(this,"completed",!1);pe(this,"autoStopTimer",0);pe(this,"stoppedAtStampIds",new Set);pe(this,"trafficLightLamps",[]);pe(this,"onRouteCompleted");this.group.add(this.ribbonGroup,this.stampGroup);const t=new Ln(1.4,2,28),n=new Ot({color:3462041,side:Rt,transparent:!0,opacity:.85});this.activeRing=new de(t,n),this.activeRing.rotation.x=-Math.PI/2,this.activeRing.position.y=.06,this.activeRing.visible=!1,this.group.add(this.activeRing),e.add(this.group),this.loadSavedRoute()}getData(){return this.data}hasRoute(){return this.data.waypoints.length>=2}getMemoryMode(){return this.memoryMode}setMemoryMode(e){this.memoryMode=e,this.ribbonGroup.visible=e!=="blind",this.activeRing.visible=this.hasRoute()&&(e!=="blind"||this.offRouteAlert)}setRouteData(e,t=!0){if(this.data={waypoints:e.waypoints.map(n=>({...n})),stamps:e.stamps.map(n=>({...n}))},this.recomputeTurnDirections(),this.rebuild3DVisuals(),this.resetProgress(),t)try{window.localStorage.setItem(xh,JSON.stringify(this.data))}catch{}}clearRoute(){this.setRouteData({waypoints:[],stamps:[]},!0)}loadSavedRoute(){try{const e=window.localStorage.getItem(xh);if(!e)return;const t=JSON.parse(e);Array.isArray(t==null?void 0:t.waypoints)&&Array.isArray(t==null?void 0:t.stamps)&&this.setRouteData(t,!1)}catch{}}resetProgress(){this.currentWpIndex=this.data.waypoints.length>1?1:0,this.wrongTurnCount=0,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1,this.completed=!1,this.autoStopTimer=0,this.stoppedAtStampIds.clear(),this.setMemoryMode(this.memoryMode)}getStartPose(){if(this.data.waypoints.length<2)return null;const e=this.data.waypoints[0],t=this.data.waypoints[1],n=Math.atan2(-(t.x-e.x),-(t.z-e.z));return{x:e.x,z:e.z,heading:n}}recomputeTurnDirections(){const e=this.data.waypoints;for(let t=0;t<e.length;t++){if(t===0){e[t].turn="start";continue}if(t===e.length-1){e[t].turn="goal";continue}const n=e[t-1],s=e[t],r=e[t+1],o=Math.atan2(-(s.x-n.x),-(s.z-n.z)),a=Math.atan2(-(r.x-s.x),-(r.z-s.z)),l=_o(a-o)*180/Math.PI;Math.abs(l)>135?e[t].turn="uturn":l>28?e[t].turn="left":l<-28?e[t].turn="right":e[t].turn="straight"}}autoExtractRouteFromImage(e,t,n,s){const o=e.height/Math.max(1,e.width),a=Math.max(60,Math.round(180*o)),c=t*o,l=document.createElement("canvas");l.width=180,l.height=a;const h=l.getContext("2d");h.drawImage(e,0,0,180,a);const d=h.getImageData(0,0,180,a).data,u=[];for(let x=2;x<a-2;x+=2)for(let y=2;y<178;y+=2){const b=(x*180+y)*4,T=d[b],C=d[b+1],w=d[b+2];if(d[b+3]<128)continue;let I=!1;if(n==="red"?I=T>155&&T-C>55&&T-w>55:n==="blue"?I=w>150&&w-T>45&&w-C>20:n==="green"?I=C>140&&C-T>35&&C-w>25:n==="orange"&&(I=T>180&&C>95&&C<185&&w<85),I){const N=(y/180-.5)*t,H=(x/a-.5)*c;u.push({x:N,z:H})}}if(u.length<4)return[];const m=Math.max(4,t/45),_=new Map;for(const x of u){const y=Math.round(x.x/m),b=Math.round(x.z/m),T=`${y},${b}`,C=_.get(T)??{sumX:0,sumZ:0,count:0};C.sumX+=x.x,C.sumZ+=x.z,C.count++,_.set(T,C)}const v=Array.from(_.values()).map(x=>({x:x.sumX/x.count,z:x.sumZ/x.count,used:!1}));if(v.length<2)return[];let g=0,p=1/0;for(let x=0;x<v.length;x++){const y=s?Math.hypot(v[x].x-s.x,v[x].z-s.z):-v[x].z+v[x].x*.3;y<p&&(p=y,g=x)}const S=[];v[g].used=!0,S.push({x:v[g].x,z:v[g].z,turn:"start"});const M=m*4.5;for(;S.length<45;){const x=S[S.length-1];let y=-1,b=M;for(let T=0;T<v.length;T++){if(v[T].used)continue;const C=Math.hypot(v[T].x-x.x,v[T].z-x.z);C<b&&(b=C,y=T)}if(y===-1)break;v[y].used=!0,b>=m*.85&&S.push({x:v[y].x,z:v[y].z,turn:"straight"})}return S}update(e,t,n,s,r){var x;const o=n.getLightForAxis("NS");for(const y of this.trafficLightLamps)y.green.emissiveIntensity=o==="green"?2.2:.15,y.yellow.emissiveIntensity=o==="yellow"?2.2:.15,y.red.emissiveIntensity=o==="red"?2.2:.15;if(!this.hasRoute())return this.activeRing.visible=!1,{bannerText:null,autoDriveInput:null};const a=s==="ja",c=this.data.waypoints;if(this.completed){this.activeRing.visible=!1;const y=Math.max(0,Math.round((1-this.wrongTurnCount/Math.max(1,c.length))*100));return{bannerText:a?`カスタムルート完走！ 暗記正確度: ${y}% (コース間違い: ${this.wrongTurnCount}回) — [O]キーで最初から復習`:`Custom Route Complete! Memory Accuracy: ${y}% (Wrong turns: ${this.wrongTurnCount}) — Press [O] to practice again`,autoDriveInput:null}}const l=c[this.currentWpIndex];if(!l)return this.completed=!0,{bannerText:null,autoDriveInput:null};const h=Math.hypot(l.x-t.x,l.z-t.z);h<this.bestDistToCurrentWp&&(this.bestDistToCurrentWp=h),h-this.bestDistToCurrentWp>16&&!this.offRouteAlert?(this.offRouteAlert=!0,this.wrongTurnCount++):h<this.bestDistToCurrentWp+4&&(this.offRouteAlert=!1);const d=this.memoryMode!=="blind"||this.offRouteAlert;if(this.activeRing.visible=d,d){this.activeRing.position.set(l.x,.07,l.z);const y=1+Math.sin(r*5)*.12;this.activeRing.scale.set(y,y,1)}const u=this.currentWpIndex===c.length-1?4.2:5.5;h<=u&&(this.currentWpIndex>=c.length-1?(Math.abs(t.speedMs)<.4||this.memoryMode==="autodrive")&&(this.completed=!0,(x=this.onRouteCompleted)==null||x.call(this,this.wrongTurnCount,c.length)):(this.currentWpIndex++,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1));const m={start:"出発",straight:"直進 (Straight)",left:"左折 ◀ (Turn Left)",right:"右折 ▶ (Turn Right)",uturn:"Uターン (U-Turn)",goal:"発着点ゴール・停止 (Goal Stop)"},_={start:"Start",straight:"Continue Straight (直進)",left:"Turn Left ◀ (左折)",right:"Turn Right ▶ (右折)",uturn:"Make U-Turn (Uターン)",goal:"Goal — Come to Full Stop (ゴール停止)"},v=c[this.currentWpIndex]??l,g=Math.round(Math.hypot(v.x-t.x,v.z-t.z)),p=a?m[v.turn]:_[v.turn];let S;this.offRouteAlert?S=a?`⚠️ コース間違い！ ポイント #${this.currentWpIndex} (${g}m先) へ戻ってください`:`⚠️ Wrong Turn! Head back toward Checkpoint #${this.currentWpIndex} (${g}m)`:this.memoryMode==="blind"?S=a?`🧠 暗記テスト中 [#${this.currentWpIndex}/${c.length-1}] ガイド非表示 — 記憶で走行 (ミス: ${this.wrongTurnCount}回)`:`🧠 Memory Test [#${this.currentWpIndex}/${c.length-1}] Guide hidden — drive from memory (Mistakes: ${this.wrongTurnCount})`:S=`${this.memoryMode==="autodrive"?a?"🤖 自動お手本走行":"🤖 Auto-Drive Demo":a?"📍 ルートガイド":"📍 Route Guide"} [#${this.currentWpIndex}/${c.length-1} · ${g}m]: ${p}`;let M=null;return this.memoryMode==="autodrive"&&!this.completed&&(M=this.computeAutoDriveInput(e,t,v)),{bannerText:S,autoDriveInput:M}}computeAutoDriveInput(e,t,n){for(let x=0;x<this.data.stamps.length;x++){const y=this.data.stamps[x];if(y.kind==="stopSign"&&!this.stoppedAtStampIds.has(x)&&Math.hypot(y.x-t.x,y.z-t.z)<4.5){if(this.autoStopTimer+=e,this.autoStopTimer<1.4)return{throttle:0,brake:.9,steerLeft:0,steerRight:0,analogSteerTarget:0,clutch:0,lookLeft:this.autoStopTimer<.7,lookRight:this.autoStopTimer>=.7};this.stoppedAtStampIds.add(x),this.autoStopTimer=0}}const s=n.x-t.x,r=n.z-t.z,o=Math.hypot(s,r)||1,a=ps(t.heading),c=s/o,l=r/o,h=a.z*c-a.x*l,d=a.x*c+a.z*l,u=Math.atan2(h,d),m=2*Math.sin(u)/Math.max(2.5,Math.min(8,o)),_=Math.atan(2.6*m),v=Math.max(-1,Math.min(1,_/.75));o<18&&n.turn==="left"?t.blinker="left":o<18&&n.turn==="right"?t.blinker="right":Math.abs(u)<.12&&(t.blinker="off");const g=n.turn==="left"||n.turn==="right"||n.turn==="goal",p=n.turn==="goal"&&o<6?0:g&&o<12?2.8:Math.abs(u)>.35?2.6:5.5,S=t.speedMs<p?.48:0,M=t.speedMs>p+.8||p===0?.65:0;return{throttle:S,brake:M,steerLeft:0,steerRight:0,analogSteerTarget:v,clutch:0,lookLeft:!1,lookRight:!1}}rebuild3DVisuals(){for(;this.ribbonGroup.children.length>0;)this.ribbonGroup.remove(this.ribbonGroup.children[0]);for(;this.stampGroup.children.length>0;)this.stampGroup.remove(this.stampGroup.children[0]);this.trafficLightLamps=[];const e=this.data.waypoints;if(e.length>=2){const t=e.map(o=>new D(o.x,.08,o.z)),n=new mo(t,!1,"catmullrom",.15),s=new hr(n,Math.max(24,e.length*10),.22,6,!1),r=new Ot({color:3462041,transparent:!0,opacity:.72});this.ribbonGroup.add(new de(s,r)),e.forEach((o,a)=>{const c=this.createCheckpointSign(a===0?"S":a===e.length-1?"G":String(a),o.turn);c.position.set(o.x,0,o.z),this.ribbonGroup.add(c)})}for(const t of this.data.stamps)t.kind==="stopSign"?this.stampGroup.add(this.create3DStopSign(t.x,t.z,t.heading)):t.kind==="trafficLight"?this.stampGroup.add(this.create3DTrafficLight(t.x,t.z,t.heading)):t.kind==="pole"&&this.stampGroup.add(this.create3DPole(t.x,t.z))}createCheckpointSign(e,t){const n=new je,s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");r.beginPath(),r.arc(64,64,56,0,Math.PI*2),r.fillStyle=t==="goal"?"#d62828":t==="left"||t==="right"?"#005bac":"#059669",r.fill(),r.lineWidth=8,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font="bold 54px sans-serif",r.fillText(e,64,66);const o=new gn(s);o.colorSpace=yt;const a=new id(new Ll({map:o,transparent:!0}));return a.scale.set(1.8,1.8,1),a.position.y=2.1,n.add(a),n}create3DStopSign(e,t,n){const s=new je;s.position.set(e,0,t),s.rotation.y=n;const r=new de(new zt(3.4,.45),new Ot({color:16777215,side:Rt}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,0),s.add(r);const o=new de(new ot(.04,.04,2.5,8),new Re({color:9741240}));o.position.set(-1.9,1.25,0),s.add(o);const a=document.createElement("canvas");a.width=256,a.height=256;const c=a.getContext("2d");c.beginPath(),c.moveTo(20,24),c.lineTo(236,24),c.lineTo(128,228),c.closePath(),c.fillStyle="#d62828",c.fill(),c.lineWidth=12,c.strokeStyle="#ffffff",c.stroke(),c.fillStyle="#ffffff",c.textAlign="center",c.font='bold 46px "Noto Sans JP", sans-serif',c.fillText("止まれ",128,95),c.font="bold 26px sans-serif",c.fillText("STOP",128,138);const l=new gn(a);l.colorSpace=yt;const h=new de(new zt(1,1),new Ot({map:l,transparent:!0,side:Rt}));return h.position.set(-1.9,2.3,.05),s.add(h),s}create3DTrafficLight(e,t,n){const s=new je;s.position.set(e,0,t),s.rotation.y=n;const r=new Re({color:6583435}),o=new de(new ot(.1,.12,5,10),r);o.position.set(-2.4,2.5,0),s.add(o);const a=new de(new Xe(1.5,.5,.35),new Re({color:1976635}));a.position.set(-.6,4.7,0),s.add(a);const c=new Re({color:413243,emissive:1108120,emissiveIntensity:1.5}),l=new Re({color:7877903,emissive:16758531,emissiveIntensity:.2}),h=new Re({color:8330525,emissive:16722474,emissiveIntensity:.2});this.trafficLightLamps.push({green:c,yellow:l,red:h});const d=new ot(.14,.14,.06,12),u=(m,_)=>{const v=new de(d,m);v.rotation.x=Math.PI/2,v.position.set(-.6+_,4.7,.18),s.add(v)};return u(c,-.44),u(l,0),u(h,.44),s}create3DPole(e,t){const n=new je;n.position.set(e,0,t);const s=new Re({color:14231078}),r=new Re({color:16317180});for(let o=0;o<5;o++){const a=new de(new ot(.06,.06,.32,10),o%2===0?s:r);a.position.y=.16+o*.32,n.add(a)}return n}}function Tn(i,e,t,n,s,r,o="off"){const a=[];for(let c=0;c<=r;c++){const l=c/r,h=n+(s-n)*l;a.push({x:i+t*Math.cos(h),z:e-t*Math.sin(h),signal:c<r?o:"off"})}return a}class Qx{constructor(e){pe(this,"root",new je);pe(this,"aiCars",[]);pe(this,"pedestrians",[]);e.add(this.root),this.buildAiCars(),this.buildPedestrians()}buildAiCars(){const e=[2450411,16096779,1013358],t=[{x:-58,z:-47.75},{x:-32,z:-47.75},{x:-25,z:-47.75,signal:"right"},{x:-18,z:-44.25,signal:"right"},{x:-10,z:-44.25},{x:-2,z:-44.25,signal:"left"},{x:6,z:-47.75,signal:"left"},{x:32,z:-47.75},{x:56,z:-47.75},...Tn(62,-32,15.75,Math.PI/2,0,8),{x:77.75,z:-16},{x:77.75,z:16},...Tn(62,32,15.75,0,-Math.PI/2,8),{x:40,z:47.75},{x:22,z:47.75,signal:"right"},{x:15,z:44.25,signal:"right"},{x:4,z:44.25,signal:"left"},{x:-4,z:47.75},{x:-35,z:47.75},...Tn(-62,32,15.75,-Math.PI/2,-Math.PI,8),{x:-77.75,z:16},{x:-77.75,z:-16},...Tn(-62,-32,15.75,Math.PI,Math.PI/2,8)],n=[{x:-45,z:44.25},{x:0,z:44.25},{x:45,z:44.25},...Tn(62,32,12.25,-Math.PI/2,0,8),{x:74.25,z:16},{x:74.25,z:-16},...Tn(62,-32,12.25,0,Math.PI/2,8),{x:45,z:-44.25},{x:0,z:-44.25},{x:-45,z:-44.25},...Tn(-62,-32,12.25,Math.PI/2,Math.PI,8),{x:-74.25,z:-16},{x:-74.25,z:16},...Tn(-62,32,12.25,-Math.PI,-Math.PI/2,8)],s=[{x:-1.75,z:36},{x:-1.75,z:22},{x:-1.75,z:10.5},{x:-1.75,z:0},{x:-1.75,z:-24,signal:"left"},{x:-1.75,z:-36.5,signal:"left"},{x:-1.75,z:-41.5,signal:"left"},{x:-3.2,z:-43.5,signal:"left"},{x:-6,z:-44.25},{x:-32,z:-44.25},{x:-56,z:-44.25},...Tn(-62,-32,12.25,Math.PI/2,Math.PI,8),{x:-74.25,z:-16},{x:-74.25,z:16},...Tn(-62,32,12.25,-Math.PI,-Math.PI/2,8),{x:-45,z:44.25},{x:-18,z:44.25,signal:"left"},{x:-6,z:44.25,signal:"left"},{x:-2.6,z:43,signal:"left"},{x:-1.75,z:40}],r=[t,n,s];for(let o=0;o<r.length;o++){const a=r[o],c=a[0],l=a[1],{group:h,wheels:d,brakeLamps:u,signalLeftLamps:m,signalRightLamps:_}=this.createTrainingSedanMesh(e[o%e.length],o+2),v=Math.atan2(-(l.x-c.x),-(l.z-c.z));h.position.set(c.x,0,c.z),h.rotation.y=v,this.root.add(h),this.aiCars.push({group:h,wheels:d,brakeLamps:u,signalLeftLamps:m,signalRightLamps:_,waypoints:a,wpIndex:1,x:c.x,z:c.z,heading:v,speedMs:5,maxSpeedMs:6+o%2*.6,blinker:"off",blinkerTimer:0,stopHoldTimer:0,lastStoppedZoneId:""})}}createTrainingSedanMesh(e,t){const n=new je,s=new Re({color:e,roughness:.32,metalness:.2}),r=new Re({color:1976635,roughness:.15,metalness:.5}),o=new Re({color:1120295,roughness:.8}),a=new Re({color:16707722,emissive:16707722,emissiveIntensity:.9}),c=new Re({color:14427686,emissive:14427686,emissiveIntensity:.25}),l=new Re({color:16096779,emissive:16096779,emissiveIntensity:.05}),h=new Re({color:16096779,emissive:16096779,emissiveIntensity:.05}),d=new de(new Xe(1.66,.56,4.25),s);d.position.y=.54,d.castShadow=!0,d.receiveShadow=!0,n.add(d);const u=new de(new Xe(1.42,.48,2.05),s);u.position.set(0,1.02,.15),u.castShadow=!0,n.add(u);const m=new de(new Xe(1.45,.38,1.88),r);m.position.set(0,1.03,.15),n.add(m);const _=document.createElement("canvas");_.width=256,_.height=128;const v=_.getContext("2d");v.fillStyle="#fef08a",v.fillRect(0,0,256,128),v.strokeStyle="#0f172a",v.lineWidth=8,v.strokeRect(4,4,248,120),v.fillStyle="#0f172a",v.font='bold 46px "Noto Sans JP", sans-serif',v.textAlign="center",v.textBaseline="middle",v.fillText(`教習車 ${t}`,128,66);const g=new gn(_);g.colorSpace=yt;const p=new de(new Xe(.68,.25,.18),new Ot({map:g}));p.position.set(0,1.38,.05),n.add(p);for(const x of[-.54,.54]){const y=new de(new Xe(.26,.12,.06),a);y.position.set(x,.58,-2.13),n.add(y);const b=new de(new Xe(.28,.12,.06),c);b.position.set(x,.6,2.13),n.add(b)}for(const x of[-2.13,2.13]){const y=new de(new Xe(.12,.11,.07),l);y.position.set(-.75,.58,x),n.add(y);const b=new de(new Xe(.12,.11,.07),h);b.position.set(.75,.58,x),n.add(b)}const S=[],M=new ot(.3,.3,.2,16);M.rotateZ(Math.PI/2);for(const[x,y]of[[-.78,-1.3],[.78,-1.3],[-.78,1.3],[.78,1.3]]){const b=new de(M,o);b.position.set(x,.3,y),n.add(b),S.push(b)}return{group:n,wheels:S,brakeLamps:[c],signalLeftLamps:[l],signalRightLamps:[h]}}buildPedestrians(){const e=[{axis:"NS",startX:-4.5,startZ:-6.2,endX:4.5,endZ:-6.2,shirtColor:15680580,initialProgress:.2},{axis:"NS",startX:4.5,startZ:6.2,endX:-4.5,endZ:6.2,shirtColor:3900150,initialProgress:.65},{axis:"EW",startX:-6.2,startZ:-4.5,endX:-6.2,endZ:4.5,shirtColor:1096065,initialProgress:.35},{axis:"EW",startX:6.2,startZ:4.5,endX:6.2,endZ:-4.5,shirtColor:16096779,initialProgress:.8},{axis:"EW",startX:12,startZ:19.8,endX:12,endZ:28.2,shirtColor:11032055,initialProgress:.15},{axis:"EW",startX:-22,startZ:41.8,endX:-22,endZ:50.2,shirtColor:15485081,initialProgress:.5}];for(const t of e){const{group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a}=this.createPedestrianMesh(t.shirtColor),c=St.lerp(t.startX,t.endX,t.initialProgress),l=St.lerp(t.startZ,t.endZ,t.initialProgress);n.position.set(c,0,l),this.root.add(n),this.pedestrians.push({group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a,axis:t.axis,startX:t.startX,startZ:t.startZ,endX:t.endX,endZ:t.endZ,progress:t.initialProgress,direction:1,waitTimer:0,walkPhase:t.initialProgress*10,x:c,z:l,isOnCrosswalk:!0})}}createPedestrianMesh(e){const t=new je,n=new Re({color:15843965,roughness:.6}),s=new Re({color:e,roughness:.65}),r=new Re({color:1976635,roughness:.8}),o=new Re({color:2042167,roughness:.8}),a=new de(new vn(.13,12,10),n);a.position.y=1.56,a.castShadow=!0,t.add(a);const c=new de(new vn(.135,12,8,0,Math.PI*2,0,Math.PI*.55),o);c.position.y=1.58,t.add(c);const l=new de(new Xe(.32,.52,.18),s);l.position.y=1.15,l.castShadow=!0,t.add(l);const h=(v,g,p,S,M,x)=>{const y=new je;y.position.set(M,x,0);const b=new de(new Xe(v,g,p),S);return b.position.y=-g*.5,b.castShadow=!0,y.add(b),t.add(y),y},d=h(.12,.78,.13,r,-.09,.86),u=h(.12,.78,.13,r,.09,.86),m=h(.09,.54,.1,s,-.22,1.38),_=h(.09,.54,.1,s,.22,1.38);return{group:t,leftLeg:d,rightLeg:u,leftArm:m,rightArm:_}}update(e,t,n){let s=!1,r,o,a=!1;const c=n.getRailroadState();for(const l of this.pedestrians){if(l.waitTimer>0){l.waitTimer-=e,l.isOnCrosswalk=!1,l.leftLeg.rotation.x=0,l.rightLeg.rotation.x=0,l.leftArm.rotation.x=0,l.rightArm.rotation.x=0;continue}const h=l.progress<=.06||l.progress>=.94,d=Math.hypot(l.startX,l.startZ)<10;if(h&&d){const S=n.getLightForAxis(l.axis);if(S==="green"||S==="yellow"){l.isOnCrosswalk=!1;continue}}const u=Math.hypot(l.endX-l.startX,l.endZ-l.startZ)||8,m=1.35;l.progress+=l.direction*(m*e)/u,l.walkPhase+=e*7.5,l.progress>=1?(l.progress=1,l.direction=-1,l.waitTimer=2.2):l.progress<=0&&(l.progress=0,l.direction=1,l.waitTimer=2.2),l.x=St.lerp(l.startX,l.endX,l.progress),l.z=St.lerp(l.startZ,l.endZ,l.progress),l.isOnCrosswalk=l.progress>.07&&l.progress<.93;const _=(l.endX-l.startX)*l.direction,v=(l.endZ-l.startZ)*l.direction;l.group.position.set(l.x,0,l.z),l.group.rotation.y=Math.atan2(-_,-v);const g=Math.sin(l.walkPhase)*.55;l.leftLeg.rotation.x=g,l.rightLeg.rotation.x=-g,l.leftArm.rotation.x=-g*.7,l.rightArm.rotation.x=g*.7;const p=ls(t.x,t.z,l.x,l.z);if(l.isOnCrosswalk&&p<3.4&&Math.abs(t.speedMs)>.45){const S=l.x-t.x,M=l.z-t.z,x=t.speedMs>=0?1:-1,y=-Math.sin(t.heading)*x,b=-Math.cos(t.heading)*x;((S*y+M*b)/Math.max(.1,p)>.15||p<1.9)&&(s=!0,r="横断歩道上の歩行者の直前を通過しようとしました（道路交通法第38条：歩行者優先義務違反）",o="Failed to stop and yield to a pedestrian crossing the zebra crosswalk (Road Traffic Act Art. 38 violation)")}}for(let l=0;l<this.aiCars.length;l++){const h=this.aiCars[l];let d=h.waypoints[h.wpIndex],u=d.x-h.x,m=d.z-h.z,_=Math.hypot(u,m);_<2.1&&(h.wpIndex=(h.wpIndex+1)%h.waypoints.length,d=h.waypoints[h.wpIndex],u=d.x-h.x,m=d.z-h.z,_=Math.hypot(u,m));const v=h.waypoints[(h.wpIndex-1+h.waypoints.length)%h.waypoints.length];h.blinker=d.signal??v.signal??"off",h.blinkerTimer+=e;const g=h.blinker!=="off"&&Math.floor(h.blinkerTimer*2.6)%2===0;let S=Math.atan2(-u,-m)-h.heading;for(;S>Math.PI;)S-=Math.PI*2;for(;S<-Math.PI;)S+=Math.PI*2;h.heading+=Math.sign(S)*Math.min(Math.abs(S),4.6*e);const M=-Math.sin(h.heading),x=-Math.cos(h.heading);let y=!1;if(h.stopHoldTimer>0)h.stopHoldTimer-=e,y=!0;else for(const E of zl){const I=h.x-E.x,N=h.z-E.z,H=I*E.dirX+N*E.dirZ,Z=-E.dirZ,X=E.dirX,Y=Math.abs(I*Z+N*X),j=M*E.dirX+x*E.dirZ;if(Y<=E.halfWidth+.8&&j>.7&&H>=-6.5&&H<=-.2)if(E.kind==="trafficLight"&&E.axis){const W=n.getLightForAxis(E.axis);(W==="red"||W==="yellow")&&(y=!0)}else E.kind==="stopSign"?h.lastStoppedZoneId!==E.id&&(y=!0,h.speedMs<.15&&(h.stopHoldTimer=1.8,h.lastStoppedZoneId=E.id)):E.kind==="railroad"&&(c.isWarningActive?y=!0:h.lastStoppedZoneId!==E.id&&(y=!0,h.speedMs<.15&&(h.stopHoldTimer=1.8,h.lastStoppedZoneId=E.id)));else h.lastStoppedZoneId===E.id&&Math.hypot(I,N)>10&&(h.lastStoppedZoneId="")}const b=ls(h.x,h.z,t.x,t.z);b<10&&((t.x-h.x)*M+(t.z-h.z)*x)/Math.max(.1,b)>.45&&(y=!0);for(let E=0;E<this.aiCars.length;E++){if(E===l)continue;const I=this.aiCars[E],N=ls(h.x,h.z,I.x,I.z);N<8.5&&((I.x-h.x)*M+(I.z-h.z)*x)/Math.max(.1,N)>.5&&(y=!0)}for(const E of this.pedestrians){if(!E.isOnCrosswalk&&E.progress>.08&&E.progress<.92)continue;const I=ls(h.x,h.z,E.x,E.z);I<7.5&&((E.x-h.x)*M+(E.z-h.z)*x)/Math.max(.1,I)>.35&&(y=!0)}b<2.35&&Math.abs(t.speedMs)>.35&&(a=!0);const T=Math.abs(S)>.14,C=y?0:T?3.8:h.maxSpeedMs,w=y?8.5:3.2;h.speedMs<C?h.speedMs=Math.min(C,h.speedMs+w*e):h.speedMs=Math.max(C,h.speedMs-w*e),h.x+=M*h.speedMs*e,h.z+=x*h.speedMs*e,h.group.position.set(h.x,0,h.z),h.group.rotation.y=h.heading;for(const E of h.wheels)E.rotation.x-=h.speedMs*e/.3;for(const E of h.brakeLamps)E.emissiveIntensity=y||h.speedMs<.3?2.4:.25;for(const E of h.signalLeftLamps)E.emissiveIntensity=g&&(h.blinker==="left"||h.blinker==="hazard")?2.6:.05;for(const E of h.signalRightLamps)E.emissiveIntensity=g&&(h.blinker==="right"||h.blinker==="hazard")?2.6:.05}return{pedestrianDanger:s,pedestrianLabelJa:r,pedestrianLabelEn:o,trafficCollision:a}}}class ev{constructor(e){pe(this,"root",new je);pe(this,"kyoshujoGroup",new je);pe(this,"sunLight");pe(this,"sunOffset",new D(45,68,35));pe(this,"railGatePivots",[]);pe(this,"railLeftLampMats",[]);pe(this,"railRightLampMats",[]);pe(this,"trafficLamps",[]);pe(this,"waypointBeacon");pe(this,"skyBrandSprites",[]);e.background=new tt(10473727),e.fog=new Pl(10473727,95,240),this.buildCloudsAndSkyBrand(e);const t=new Mp(15660799,6057548,.85);e.add(t),this.sunLight=new bp(16775920,1.85),this.sunLight.position.copy(this.sunOffset),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048);const n=38;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=170,this.sunLight.shadow.bias=-5e-4,e.add(this.sunLight),e.add(this.sunLight.target),this.root.add(this.kyoshujoGroup),e.add(this.root),this.buildGroundAndRoads(),this.buildSCurveMesh(),this.buildHillRampMesh(),this.buildRoadMarkings(),this.buildCurbsAndPoles(),this.buildRailroadCrossing(),this.buildTrafficLights(),this.buildRoadSigns(),this.buildObstaclesAndBuildings(),this.buildTreesAndFence(),this.waypointBeacon=this.createWaypointBeacon(),this.waypointBeacon.visible=!1,this.kyoshujoGroup.add(this.waypointBeacon)}setKyoshujoVisible(e){this.kyoshujoGroup.visible=e}updateShadowFocus(e,t){const n=.037109375,s=Math.round(e/n)*n,r=Math.round(t/n)*n;this.sunLight.target.position.set(s,0,r),this.sunLight.position.set(s+this.sunOffset.x,this.sunOffset.y,r+this.sunOffset.z),this.sunLight.target.updateMatrixWorld()}updateDynamic(e,t,n){const s=e.getLightForAxis("NS"),r=e.getLightForAxis("EW");for(const a of this.trafficLamps){const c=a.axis==="NS"?s:r;a.greenMat.emissive.setHex(c==="green"?1108120:202768),a.greenMat.emissiveIntensity=c==="green"?2.2:.2,a.yellowMat.emissive.setHex(c==="yellow"?16758531:1708544),a.yellowMat.emissiveIntensity=c==="yellow"?2.2:.2,a.redMat.emissive.setHex(c==="red"?16722474:1836036),a.redMat.emissiveIntensity=c==="red"?2.2:.2}const o=e.getRailroadState();for(let a=0;a<this.railGatePivots.length;a++)this.railGatePivots[a].rotation.z=a===0?-o.barrierAngle:o.barrierAngle;for(const a of this.railLeftLampMats)a.emissive.setHex(o.flashLeftOn?16718362:2229252),a.emissiveIntensity=o.flashLeftOn?2.8:.2;for(const a of this.railRightLampMats)a.emissive.setHex(o.flashRightOn?16718362:2229252),a.emissiveIntensity=o.flashRightOn?2.8:.2;if(t&&this.kyoshujoGroup.visible){this.waypointBeacon.visible=!0;const a=Xn(t.x,t.z).y;this.waypointBeacon.position.set(t.x,a+.05,t.z),this.waypointBeacon.rotation.y=n*1.4;const c=1+Math.sin(n*4)*.08;this.waypointBeacon.scale.set(c,1,c)}else this.waypointBeacon.visible=!1;for(const a of this.skyBrandSprites){const c=a.userData.angle+n*.004,l=a.userData.height+Math.sin(n*.15+c*3)*.8;a.position.set(Math.cos(c)*160,l,Math.sin(c)*160)}}buildCloudsAndSkyBrand(e){const t=new Re({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.9}),n=(S,M,x,y)=>{const b=new je,T=[[0,0,0,5],[-4,-1,0,3.5],[4,-1,0,3.5],[-2,1.5,0,2.8],[2.5,1.5,0,2.8],[-6,-2,0,2],[6,-2,0,2]];for(const[C,w,E,I]of T){const N=new de(new vn(I,7,5),t);N.position.set(C,w,E),b.add(N)}b.position.set(S,M,x),b.scale.setScalar(y),e.add(b)};n(-80,48,-60,1.2),n(60,42,-90,1),n(-30,52,-110,.85),n(110,46,-70,1.15),n(10,55,-130,.95),n(-120,44,-80,1.3),n(70,50,-150,1.1);const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.font='900 150px "Arial Rounded MT Bold", "Nunito", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText("GaimenGo",s/2,r/2);const c=s/2-a.measureText("GaimenGo").width/2+a.measureText("Gaimen").width,l=a.getImageData(0,0,s,r).data,h=document.createElement("canvas");h.width=s,h.height=r;const d=h.getContext("2d");let u=27166;const m=()=>(u=u*1664525+1013904223>>>0)/4294967296,_=9;for(let S=0;S<r;S+=_)for(let M=0;M<s;M+=_){const x=Math.min(s-1,M+Math.floor(m()*_)),y=Math.min(r-1,S+Math.floor(m()*_));if(l[(y*s+x)*4+3]<128)continue;const b=11+m()*12,T=d.createRadialGradient(x,y,0,x,y,b);T.addColorStop(0,"rgba(255,255,255,0.95)"),T.addColorStop(.6,"rgba(255,255,255,0.55)"),T.addColorStop(1,"rgba(255,255,255,0)"),d.fillStyle=T,d.fillRect(x-b,y-b,b*2,b*2)}d.globalCompositeOperation="source-atop";const v=d.createLinearGradient(0,r*.3,0,r*.8);v.addColorStop(0,"rgba(190,210,230,0)"),v.addColorStop(1,"rgba(170,195,220,0.45)"),d.fillStyle=v,d.fillRect(0,0,s,r),d.fillStyle="rgba(52,211,153,0.22)",d.fillRect(c,0,s-c,r),d.globalCompositeOperation="source-over";const g=new gn(h);g.colorSpace=yt;const p=new Ll({map:g,transparent:!0,opacity:.82,depthWrite:!1,fog:!1});this.skyBrandSprites=[0,1,2].map(S=>{const M=new id(p);return M.scale.set(64,16,1),M.layers.set(1),M.userData.angle=-Math.PI/2+S*(Math.PI*2/3),M.userData.height=40+S*4,M.renderOrder=-1,e.add(M),M})}createGrassTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#5f8449",t.fillRect(0,0,256,256);for(let s=0;s<4e3;s++)t.fillStyle=s%2===0?"rgba(72,108,52,0.35)":"rgba(122,162,88,0.28)",t.fillRect(Math.random()*256,Math.random()*256,2,2);const n=new gn(e);return n.wrapS=n.wrapT=Zs,n.repeat.set(36,24),n.colorSpace=yt,n}createAsphaltTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const t=e.getContext("2d");t.fillStyle="#383e45",t.fillRect(0,0,256,256);for(let s=0;s<5500;s++){const r=45+Math.floor(Math.random()*30);t.fillStyle=`rgb(${r},${r+2},${r+6})`,t.fillRect(Math.random()*256,Math.random()*256,2,2)}const n=new gn(e);return n.wrapS=n.wrapT=Zs,n.repeat.set(22,22),n.colorSpace=yt,n}buildGroundAndRoads(){const e=new Re({map:this.createGrassTexture(),roughness:.95,metalness:0}),t=new de(new zt(ci*2+40,Li*2+40),e);t.rotation.x=-Math.PI/2,t.receiveShadow=!0,this.kyoshujoGroup.add(t);const n=new Re({map:this.createAsphaltTexture(),roughness:.86,metalness:.05}),s=(a,c,l,h,d=.01)=>{const u=new de(new zt(l,h),n);u.rotation.x=-Math.PI/2,u.position.set(a,d,c),u.receiveShadow=!0,this.kyoshujoGroup.add(u)};s(0,-46,124,ai),s(0,46,124,ai),s(-76,0,ai,64),s(76,0,ai,64);const r=[[-62,-32,Math.PI/2],[62,-32,0],[62,32,-Math.PI/2],[-62,32,Math.PI]];for(const[a,c,l]of r){const h=new Ln(14-fh,14+fh,24,1,l,Math.PI/2),d=new de(h,n);d.rotation.x=-Math.PI/2,d.position.set(a,.01,c),d.receiveShadow=!0,this.kyoshujoGroup.add(d)}s(0,0,ai,92,.012),s(0,0,152,ai,.012);const o=px*2;s(-48,11.75,o,16.5,.013),s(-41,18,18,o,.013),s(-34,30.25,o,24.5,.013),s(10.75,an,14.5,Ri*2,.013),s(65.25,an,14.5,Ri*2,.013),s(38,24,72.5,ai,.012),s(26,30.6,3.7,6.2,.013),s(48.6,28.85,7.2,2.7,.013),s(0,51,32,3.2,.008)}buildSCurveMesh(){const t=fx,n=[],s=[],r=[];for(let l=0;l<t.length;l++){const h=t[Math.max(0,l-1)],d=t[Math.min(t.length-1,l+1)],u=d.x-h.x,m=d.z-h.z,_=Math.hypot(u,m)||1,v=m/_,g=-u/_;if(n.push(t[l].x+v*1.8,.014,t[l].z+g*1.8),n.push(t[l].x-v*1.8,.014,t[l].z-g*1.8),s.push(0,l*.25,1,l*.25),l<t.length-1){const p=l*2;r.push(p,p+1,p+2,p+1,p+3,p+2)}}const o=new _t;o.setAttribute("position",new Ye(n,3)),o.setAttribute("uv",new Ye(s,2)),o.setIndex(r),o.computeVertexNormals();const a=new Re({color:3883594,roughness:.85,side:Rt}),c=new de(o,a);c.receiveShadow=!0,this.kyoshujoGroup.add(c)}buildHillRampMesh(){const t=$s,n=sl,s=an-Ri,r=an+Ri,o=[],a=[];for(let M=0;M<=64;M++){const x=t+(n-t)*M/64,b=Xn(x,an).y+.015;if(o.push(x,0,s),o.push(x,b,s),o.push(x,b,r),o.push(x,0,r),M<64){const T=M*4,C=(M+1)*4;a.push(T+1,T+2,C+1,T+2,C+2,C+1),a.push(T+0,T+1,C+0,T+1,C+1,C+0),a.push(T+2,T+3,C+2,T+3,C+3,C+2)}}const c=new _t;c.setAttribute("position",new Ye(o,3)),c.setIndex(a),c.computeVertexNormals();const l=[],h=[],d=[],u=[];for(let M=0;M<=64;M++){const x=t+(n-t)*M/64,y=Xn(x,an).y+.018;if(l.push(x,y,s,x,y,r),d.push(x,0,s,x,y,s,x,0,r,x,y,r),M<64){const b=M*2;h.push(b,b+1,b+2,b+1,b+3,b+2);const T=M*4;u.push(T,T+1,T+4,T+1,T+5,T+4),u.push(T+2,T+6,T+3,T+3,T+6,T+7)}}const m=new _t;m.setAttribute("position",new Ye(l,3)),m.setIndex(h),m.computeVertexNormals();const _=new de(m,new Re({color:3883594,roughness:.86,side:Rt}));_.receiveShadow=!0,this.kyoshujoGroup.add(_);const v=new _t;v.setAttribute("position",new Ye(d,3)),v.setIndex(u),v.computeVertexNormals();const g=new de(v,new Re({color:12239562,roughness:.9,side:Rt}));g.receiveShadow=!0,g.castShadow=!0,this.kyoshujoGroup.add(g);const p=Xn(27,an).y,S=new de(new zt(.45,Ri*1.9),new Ot({color:16777215}));S.rotation.x=-Math.PI/2,S.rotation.y=-Math.atan(Xn(27,an).slopeX),S.position.set(27,p+.03,an),this.kyoshujoGroup.add(S)}createStencilPlane(e,t,n,s,r,o,a=0){const c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.clearRect(0,0,256,256),l.fillStyle=t,l.textAlign="center",l.textBaseline="middle",l.font='bold 120px "Noto Sans JP", sans-serif',l.fillText(e,128,128);const h=new gn(c);h.colorSpace=yt;const d=new de(new zt(n,s),new Ot({map:h,transparent:!0,depthWrite:!1}));return d.rotation.x=-Math.PI/2,d.rotation.z=a,d.position.set(r,.025,o),d}buildRoadMarkings(){const e=new Ot({color:16054266}),t=new Ot({color:15764480}),n=(o,a,c,l,h=e)=>{const d=new de(new zt(c,l),h);d.rotation.x=-Math.PI/2,d.position.set(o,.02,a),this.kyoshujoGroup.add(d)};for(let o=-58;o<=58;o+=6)Math.abs(o)<12||(n(o,-46,2.8,.14),n(o,46,2.8,.14));for(let o=-28;o<=28;o+=6)Math.abs(o)<10||(n(-76,o,.14,2.8),n(76,o,.14,2.8));for(let o=-42;o<=42;o+=6)Math.abs(o)<18||n(0,o,.14,2.8);n(0,13.5,.16,10,t),n(0,-13.5,.16,10,t);for(let o=-70;o<=70;o+=6)Math.abs(o)<18||o>26&&o<50||n(o,0,2.8,.14);n(13.5,0,10,.16,t),n(-13.5,0,10,.16,t),n(38,0,18,.16,t);for(let o=6;o<=68;o+=6)n(o,24,2.8,.14);for(const o of zl){const a=Math.abs(o.dirX)>.5;if(n(o.x,o.z,a?.45:o.halfWidth*1.9,a?o.halfWidth*1.9:.45),o.kind==="stopSign"){const l=Math.atan2(-o.dirX,-o.dirZ);this.kyoshujoGroup.add(this.createStencilPlane("止まれ","#ffffff",2.2,2.2,o.x-o.dirX*2.6,o.z-o.dirZ*2.6,l))}}const s=(o,a,c)=>{for(let l=-3;l<=3;l++)c?n(o,a+l*.9,2.8,.45):n(o+l*.9,a,.45,2.8)};s(0,-6.2,!1),s(0,6.2,!1),s(-6.2,0,!0),s(6.2,0,!0),s(12,24,!0),s(-22,46,!0);for(const[o,a]of[[-10,44.25],[-34,47.75],[24,22.25]]){const c=new de(new Ln(.75,.96,4),e);c.rotation.x=-Math.PI/2,c.position.set(o,.022,a),this.kyoshujoGroup.add(c)}const r=new de(new Ln(.9,1.15,4),e);r.rotation.x=-Math.PI/2,r.position.set(0,.022,0),this.kyoshujoGroup.add(r),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,-40,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,20,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("1","#f0a500",1.8,1.8,12,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("2","#f0a500",1.8,1.8,0,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("3","#f0a500",1.8,1.8,-12,48.1,Math.PI/2))}buildCurbsAndPoles(){const e=new Re({color:13357786,roughness:.8}),t=new Re({color:15857145,roughness:.7});for(const r of Md){const o=r.points,a=r.id.startsWith("hill-");for(let c=0;c<o.length-1;c++){const l=o[c],h=o[c+1],d=h.x-l.x,u=h.z-l.z,m=Math.hypot(d,u);if(!(m<.01))if(a)for(let v=0;v<24;v++){const g=v/24,p=(v+1)/24,S=l.x+d*g,M=l.x+d*p,x=l.z+u*g,y=l.z+u*p,b=Xn(S,x).y,T=Xn(M,y).y,C=Math.hypot(M-S,T-b),w=new de(new Xe(C+.04,r.height,.18),v%2===0?e:t);w.position.set((S+M)*.5,(b+T)*.5+r.height*.5,(x+y)*.5),w.rotation.z=Math.atan2(T-b,M-S),w.castShadow=!0,w.receiveShadow=!0,this.kyoshujoGroup.add(w)}else{const _=new de(new Xe(.18,r.height,m+.14),c%2===0?e:t);_.position.set((l.x+h.x)*.5,r.height*.5,(l.z+h.z)*.5),_.rotation.y=Math.atan2(d,u),_.castShadow=!0,_.receiveShadow=!0,this.kyoshujoGroup.add(_)}}}const n=new Re({color:14231078,roughness:.4}),s=new Re({color:16317180,roughness:.4});for(const r of Sd){const o=new je;o.position.set(r.x,0,r.z);const a=5,c=r.height/a;for(let l=0;l<a;l++){const h=new de(new ot(r.radius*.65,r.radius*.65,c,10),l%2===0?n:s);h.position.y=c*(l+.5),h.castShadow=!0,o.add(h)}this.kyoshujoGroup.add(o)}}buildRailroadCrossing(){const t=new Re({color:8160657,metalness:.75,roughness:.3}),n=new Re({color:4930350,roughness:.9}),s=new Re({color:16103424,roughness:.4}),r=new Re({color:1711393,roughness:.6});for(const a of[-.7,.7]){const c=new de(new Xe(.12,.06,30),t);c.position.set(38+a,.03,0),c.receiveShadow=!0,this.kyoshujoGroup.add(c)}for(let a=-14;a<=14;a+=.9){if(Math.abs(a)<3.6)continue;const c=new de(new Xe(2.3,.05,.25),n);c.position.set(38,.025,a),this.kyoshujoGroup.add(c)}const o=[[38-3.6,-3.9],[38+3.6,3.9]];for(let a=0;a<o.length;a++){const[c,l]=o[a],h=new je;h.position.set(c,0,l);const d=new de(new ot(.08,.09,3.4,10),s);d.position.y=1.7,d.castShadow=!0,h.add(d);for(const b of[Math.PI/4,-Math.PI/4]){const T=new de(new Xe(1.1,.16,.05),s);T.position.y=2.95,T.rotation.y=Math.PI/2,T.rotation.x=b,h.add(T)}const u=new Re({color:6293512,emissive:2229252}),m=new Re({color:6293512,emissive:2229252});this.railLeftLampMats.push(u),this.railRightLampMats.push(m);const _=new de(new ot(.11,.11,.14,12),u);_.rotation.z=Math.PI/2,_.position.set(0,2.25,-.22),h.add(_);const v=new de(new ot(.11,.11,.14,12),m);v.rotation.z=Math.PI/2,v.position.set(0,2.25,.22),h.add(v);const g=new de(new Xe(.32,.85,.32),r);g.position.set(0,.65,a===0?.35:-.35),h.add(g),new je().position.set(0,.95,a===0?.35:-.35);const S=new je;S.rotation.y=a===0?-Math.PI/2:Math.PI/2;const M=new de(new Xe(3.6,.08,.06),s);M.position.set(1.8,0,0),M.castShadow=!0;const x=new de(new Xe(.08,3.8,.06),s);x.position.set(0,1.9,0),x.castShadow=!0;for(let b=0;b<6;b++)if(b%2===0){const T=new de(new Xe(.09,.32,.07),r);T.position.set(0,.45+b*.6,0),x.add(T)}const y=new je;y.position.set(0,.95,a===0?.35:-.35),y.rotation.y=Math.PI/2,y.add(x),h.add(y),this.railGatePivots.push(y),this.kyoshujoGroup.add(h)}}buildTrafficLights(){const e=new Re({color:6583435,metalness:.6,roughness:.35}),t=new Re({color:1976635,roughness:.6}),n=[{axis:"NS",x:4.5,z:-5,rotY:0},{axis:"NS",x:-4.5,z:5,rotY:Math.PI},{axis:"EW",x:5,z:4.5,rotY:-Math.PI/2},{axis:"EW",x:-5,z:-4.5,rotY:Math.PI/2}];for(const s of n){const r=new je;r.position.set(s.x,0,s.z),r.rotation.y=s.rotY;const o=new de(new ot(.11,.13,5.4,10),e);o.position.y=2.7,o.castShadow=!0,r.add(o);const a=new de(new ot(.07,.09,4.2,8),e);a.rotation.z=Math.PI/2,a.position.set(-2,5.1,0),r.add(a);const c=new de(new Xe(1.55,.52,.36),t);c.position.set(-2.5,5.1,0),r.add(c);const l=new Re({color:413243,emissive:202768}),h=new Re({color:7877903,emissive:1708544}),d=new Re({color:8330525,emissive:1836036}),u=new ot(.15,.15,.06,14),m=(_,v)=>{const g=new de(u,_);g.rotation.x=Math.PI/2,g.position.set(-2.5+v,5.1,.19),r.add(g)};m(l,-.46),m(h,0),m(d,.46),this.trafficLamps.push({axis:s.axis,greenMat:l,yellowMat:h,redMat:d}),this.kyoshujoGroup.add(r)}}createSignTexture(e,t){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");if(s.clearRect(0,0,256,256),e==="tomare")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=14,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(32,34),s.lineTo(224,34),s.lineTo(128,214),s.closePath(),s.fillStyle="#d62828",s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.font='bold 44px "Noto Sans JP", sans-serif',s.fillText("止まれ",128,92),s.font="bold 24px sans-serif",s.fillText("STOP",128,134);else if(e==="joko")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.font='bold 42px "Noto Sans JP", sans-serif',s.fillText("徐 行",128,92),s.font="bold 20px sans-serif",s.fillText("SLOW",128,132);else if(e==="crosswalk"){s.beginPath(),s.moveTo(128,16),s.lineTo(234,92),s.lineTo(216,236),s.lineTo(40,236),s.lineTo(22,92),s.closePath(),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.fillStyle="#ffffff",s.beginPath(),s.arc(128,86,16,0,Math.PI*2),s.fill(),s.fillRect(116,108,24,48);for(let o=-2;o<=2;o++)s.fillRect(118+o*24,186,14,32)}else e==="noparking"?(s.beginPath(),s.arc(128,128,110,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(52,52),s.lineTo(204,204),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke()):e==="direction"?(s.beginPath(),s.arc(128,128,112,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.strokeStyle="#ffffff",s.fillStyle="#ffffff",s.lineWidth=18,s.lineCap="round",s.beginPath(),s.moveTo(128,200),s.lineTo(128,56),s.stroke(),s.beginPath(),s.moveTo(128,38),s.lineTo(100,74),s.lineTo(156,74),s.closePath(),s.fill(),s.beginPath(),s.moveTo(128,134),s.lineTo(64,134),s.stroke(),s.beginPath(),s.moveTo(46,134),s.lineTo(80,108),s.lineTo(80,160),s.closePath(),s.fill()):e==="40"?(s.beginPath(),s.arc(128,128,114,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.textBaseline="middle",s.font="bold 104px sans-serif",s.fillText("40",128,132)):e==="rail"?(s.save(),s.translate(128,128),s.rotate(Math.PI/4),s.fillStyle="#f5b800",s.fillRect(-84,-84,168,168),s.lineWidth=10,s.strokeStyle="#111827",s.strokeRect(-76,-76,152,152),s.restore(),s.fillStyle="#111827",s.textAlign="center",s.font='bold 34px "Noto Sans JP", sans-serif',s.fillText("踏切",128,138)):(s.fillStyle="#005bac",s.fillRect(12,56,232,144),s.lineWidth=6,s.strokeStyle="#ffffff",s.strokeRect(20,64,216,128),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font='bold 38px "Noto Sans JP", sans-serif',s.fillText(t??"",128,128));const r=new gn(n);return r.colorSpace=yt,r}buildRoadSigns(){const e=new Re({color:9741240,metalness:.6,roughness:.4}),t=(n,s,r,o,a,c=1,l=1)=>{const h=new je;h.position.set(s,0,r),h.rotation.y=o;const d=new de(new ot(.035,.035,2.6,8),e);d.position.y=1.3,d.castShadow=!0,h.add(d);const u=this.createSignTexture(n,a),m=new de(new zt(c,l),new Ot({map:u,transparent:!0,side:Rt}));m.position.set(0,2.35,.045),h.add(m),this.kyoshujoGroup.add(h)};t("tomare",-67.5,4.1,Math.PI/2),t("tomare",-4.1,-38.5,0),t("tomare",-24.7,-41.5,0),t("tomare",-36.5,41.5,Math.PI),t("40",-55,-50.2,-Math.PI/2),t("40",30,-50.2,-Math.PI/2),t("rail",26,-4.2,-Math.PI/2),t("rail",50,4.2,Math.PI/2),t("guide",-42.5,-4.5,0,"S字コース",1.7,1.05),t("guide",-51,4.5,Math.PI,"クランク",1.7,1.05),t("guide",16.5,-27.5,-Math.PI/2,"坂道発進",1.7,1.05),t("guide",22,28.5,-Math.PI/2,"方向変換",1.7,1.05),t("guide",43,28.5,-Math.PI/2,"縦列駐車",1.7,1.05),t("crosswalk",-21.5,41.8,Math.PI/2),t("crosswalk",12.5,19.8,-Math.PI/2),t("joko",-44.2,-3.5,0),t("joko",52,-27.5,-Math.PI/2),t("noparking",-10,-50.2,-Math.PI/2),t("direction",-4.2,8.5,0)}buildObstaclesAndBuildings(){const e=ro[0];if(e){const a=new je;a.position.set(e.x,0,e.z);const c=new de(new Xe(e.halfW*2,1.55,e.halfL*2),new Re({color:14870768,roughness:.45}));c.position.y=.92,c.castShadow=!0,a.add(c);const l=new de(new Xe(e.halfW*1.6,.52,e.halfL*1.92),new Re({color:1976635,roughness:.2,metalness:.4}));l.position.y=1.35,a.add(l);const h=new Re({color:16347926,roughness:.5});for(const d of[-2.8,2.8]){const u=new de(new us(.18,.55,10),h);u.position.set(d,.275,.2),u.castShadow=!0,a.add(u)}this.kyoshujoGroup.add(a)}const t=ro[1];if(t){const a=new je;a.position.set(t.x,0,t.z);const c=new de(new Xe(t.halfW*2,t.height,t.halfL*2),new Re({color:15855076,roughness:.8}));c.position.y=t.height/2,c.castShadow=!0,c.receiveShadow=!0,a.add(c);const l=new de(new Xe(t.halfW*2+.6,.5,t.halfL*2+.6),new Re({color:3359061,roughness:.7}));l.position.y=t.height+.25,a.add(l);const h=new Re({color:1981023,metalness:.5,roughness:.15});for(const v of[2.2,5]){const g=new de(new Xe(t.halfW*1.8,1.3,.1),h);g.position.set(0,v,-t.halfL-.02),a.add(g)}const d=document.createElement("canvas");d.width=512,d.height=128;const u=d.getContext("2d");u.fillStyle="#005bac",u.fillRect(0,0,512,128),u.strokeStyle="#ffffff",u.lineWidth=8,u.strokeRect(8,8,496,112),u.fillStyle="#ffffff",u.textAlign="center",u.textBaseline="middle",u.font='bold 46px "Noto Sans JP", sans-serif',u.fillText("桜ヶ丘自動車教習所",256,66);const m=new gn(d);m.colorSpace=yt;const _=new de(new Xe(14,2.4,.4),new Ot({map:m}));_.position.set(0,t.height+1.8,-t.halfL+1),a.add(_),this.kyoshujoGroup.add(a)}const n=new je;n.position.set(-14,0,38);const s=new de(new ot(1.1,1.4,6.5,8),new Re({color:14870768,roughness:.7}));s.position.y=3.25,s.castShadow=!0,n.add(s);const r=new de(new ot(2.3,1.9,2.2,8),new Re({color:1981023,metalness:.6,roughness:.15}));r.position.y=7.4,r.castShadow=!0,n.add(r);const o=new de(new us(2.6,1,8),new Re({color:3359061,roughness:.6}));o.position.y=9,n.add(o),this.kyoshujoGroup.add(n)}buildTreesAndFence(){const e=new Re({color:6045747,roughness:.9}),t=new Re({color:4157243,roughness:.85}),n=new Re({color:16037570,roughness:.8}),s=[];for(let h=-84;h<=84;h+=14)s.push([h,-55.5,Math.abs(h)%28===0]),Math.abs(h)>22&&s.push([h,55.5,!1]);for(let h=-42;h<=42;h+=14)s.push([-85.5,h,h===0]),s.push([85.5,h,h===-14]);s.push([-16,-24,!0],[14,14,!1],[62,12,!0]);for(const[h,d,u]of s){const m=new je;m.position.set(h,0,d);const _=new de(new ot(.18,.25,2.2,7),e);_.position.y=1.1,_.castShadow=!0,m.add(_);const v=new de(new kl(1.75,1),u?n:t);v.position.y=3.2,v.castShadow=!0,m.add(v),this.kyoshujoGroup.add(m)}const r=new Re({color:14410474,roughness:.55}),o=new de(new Xe(178,.9,.14),r);o.position.set(0,.45,-59);const a=new de(new Xe(178,.9,.14),r);a.position.set(0,.45,59);const c=new de(new Xe(.14,.9,118),r);c.position.set(-89,.45,0);const l=new de(new Xe(.14,.9,118),r);l.position.set(89,.45,0),this.kyoshujoGroup.add(o,a,c,l)}createWaypointBeacon(){const e=new je,t=new de(new Ln(1.6,2.1,28),new Ot({color:958318,side:Rt,transparent:!0,opacity:.75}));t.rotation.x=-Math.PI/2,e.add(t);const n=new de(new us(.55,1.3,4),new Re({color:1096065,emissive:366185,emissiveIntensity:.7}));return n.rotation.x=Math.PI,n.position.y=2.8,e.add(n),e}}const la=[{id:1,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"前方の信号が黄色の灯火に変わったときは、注意しながらそのまま進行することができる。",qEn:"When the traffic light ahead turns solid yellow, you may proceed through the intersection with caution.",answer:!1,expJa:"× 誤り：黄色の灯火は原則「止まれ」です。停止位置に近づきすぎて安全に停止できない場合のみ進行できます。",expEn:"FALSE: A solid yellow light means STOP (unless you are already so close to the stop line that you cannot stop safely)."},{id:2,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"黄色の点滅信号がある交差点では、他の交通に注意して進行することができる。",qEn:"At an intersection with a flashing yellow traffic light, you may proceed while paying attention to other traffic.",answer:!0,expJa:"○ 正しい：黄色の点滅信号は「他の交通に注意して進行できる」という意味です（一時停止の義務はありません）。",expEn:"TRUE: A flashing yellow light means proceed with caution while watching for other traffic."},{id:3,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"赤色の点滅信号では、停止位置で一時停止し、安全を確認した後に進行できる。",qEn:"At a flashing red traffic light, you must come to a complete stop at the stop line, check for safety, and then proceed.",answer:!0,expJa:"○ 正しい：赤色の点滅信号は「一時停止（止まれ）」と同じく、停止線で完全停止して左右の安全確認後に進行できます。",expEn:"TRUE: A flashing red light acts like a STOP sign (止まれ): stop completely at the stop line, check safety, and proceed."},{id:4,chapter:"Ch.1 Traffic Lights (信号機)",qJa:"赤信号の下に右向きの青色矢印（→）が表示されているときは、右折だけでなく転回（Uターン）もできる（転回禁止場所を除く）。",qEn:"When a green right-turn arrow (→) is lit below a red signal, you may make both a right turn and a U-turn (unless U-turns are prohibited).",answer:!0,expJa:"○ 正しい：右向きの青矢印信号では、右折のほか、転回禁止標識がない限り転回（Uターン）も可能です。",expEn:"TRUE: Under Japanese Road Traffic Regulations, a green right-turn arrow permits both right turns and U-turns (unless prohibited by a No U-Turn sign)."},{id:5,chapter:"Ch.2 Road Signs (道路標識)",qJa:"赤い逆三角形の「止まれ」標識がある交差点でも、見通しが良ければ徐行して通過してよい。",qEn:'At an intersection with a red inverted-triangle "止まれ (STOP)" sign, you may roll through slowly if visibility is clear.',answer:!1,expJa:"× 誤り：「止まれ」標識では必ず停止線の直前で車輪を完全停止（0 km/h）させなければなりません。",expEn:"FALSE: You must always bring your vehicle to a complete 0 km/h dead stop before the stop line at any 止まれ sign."},{id:6,chapter:"Ch.2 Road Signs (道路標識)",qJa:"青地に赤枠で斜線1本の標識は「駐車禁止」を表し、人の乗降や5分以内の荷物の積み下ろしのための停車はできる。",qEn:'A blue circular sign with a red border and a single diagonal red slash means "No Parking", allowing brief stops for passenger drop-off or cargo loading under 5 minutes.',answer:!0,expJa:"○ 正しい：斜線1本は「駐車禁止」なので停車は可能です（バツ印2本の「駐停車禁止」では停車も禁止）。",expEn:"TRUE: A single slash is No Parking (駐車禁止), so brief stopping is permitted. A double X slash is No Parking & No Stopping (駐停車禁止)."},{id:7,chapter:"Ch.3 Road Markings (路面標示)",qJa:"中央線が黄色の実線の道路では、いかなる場合も前の車を追い越してはならない。",qEn:"On a road where the centerline is a solid yellow line, overtaking a vehicle ahead is prohibited under all circumstances.",answer:!1,expJa:"× 誤り：黄色実線の中央線は「追い越しのための右側部分はみ出し通行禁止」です。中央線を越えずに左側車線内で追い越すことは可能です。",expEn:'FALSE: A solid yellow centerline means "Do not cross into the right side to overtake." You may still overtake if you stay completely within the left side of the yellow line.'},{id:8,chapter:"Ch.3 Road Markings (路面標示)",qJa:"路面に白いひし形（◇）の標示があるときは、前方に信号機のない横断歩道または自転車横断帯があることを示している。",qEn:"A white diamond (◇) painted on the road surface warns that there is an unsignalized pedestrian or bicycle crosswalk ahead.",answer:!0,expJa:"○ 正しい：白いダイヤマーク（◇）は横断歩道・自転車横断帯の30m手前と15m手前に設置される事前予告標示です。",expEn:"TRUE: White road diamonds (◇) are painted 30m and 15m ahead of unsignalized pedestrian or bicycle crosswalks."},{id:9,chapter:"Ch.4 Lane Discipline (通行区分)",qJa:"片側3車線の道路では、最も右側の通行帯は追い越しなどのために空けておき、通常は左側の2つの車線を通行する。",qEn:"On a road with 3 lanes in your direction, the rightmost lane must be kept clear for overtaking, and ordinary driving should use the left two lanes.",answer:!0,expJa:"○ 正しい：同一方向に3つ以上の車両通行帯がある場合、最も右側の車線は追い越し等のために空けておきます。",expEn:"TRUE: On roads with 3 or more lanes in the same direction, keep the rightmost lane open for overtaking and faster traffic."},{id:10,chapter:"Ch.5 Intersections (交差点)",qJa:"交通整理の行われていない同じ道幅の交差点では、右方から来る車が優先である。",qEn:"At an uncontrolled intersection of two roads of equal width, vehicles approaching from the RIGHT have priority.",answer:!1,expJa:"× 誤り：日本は左側通行のため、同じ道幅の交差点では「左方から来る車（左方優先）」に優先権があります。",expEn:"FALSE: In Japan (left-hand traffic), at uncontrolled intersections of equal width, vehicles approaching from the LEFT have right-of-way (左方優先)."},{id:11,chapter:"Ch.5 Intersections (交差点)",qJa:"交差点で右折するときは、対向車線を直進してくる車や左折しようとする車の進行を妨げてはならない。",qEn:"When turning right at an intersection, you must yield to oncoming vehicles going straight or turning left.",answer:!0,expJa:"○ 正しい：直進車・左折車が優先です。右折車は交差点の中心のすぐ内側で待機し、対向車が通過してから右折します。",expEn:"TRUE: Oncoming straight and left-turning traffic always have priority over right-turning vehicles."},{id:12,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"交差点を左折または右折するときは、その交差点の30メートル手前の地点でウインカー（方向指示器）を出す。",qEn:"When turning left or right at an intersection, you must activate your turn signal 30 meters before the intersection.",answer:!0,expJa:"○ 正しい：右左折・転回（Uターン）の合図は30m手前、進路変更（車線変更）の合図は3秒前に出します。",expEn:"TRUE: Intersection turns and U-turns require signaling 30 meters in advance (lane changes require 3 seconds in advance)."},{id:13,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"進路変更（車線変更）をするときは、ウインカーを出すのと同時にハンドルを切ってよい。",qEn:"When changing lanes, you may begin turning the steering wheel at the exact same moment you activate your turn signal.",answer:!1,expJa:"× 誤り：進路変更は①ミラー確認→②ウインカー合図→③3秒待つ→④死角の目視確認→⑤ハンドル操作の順に行います。",expEn:"FALSE: You must check mirrors, activate your turn signal, wait 3 full seconds, check your blind spot over your shoulder, and only then change lanes."},{id:14,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"左折するときは、あらかじめできるだけ道路の左端に寄り、徐行しながら小回りで曲がる。",qEn:"When turning left, move close to the left edge of the road in advance and turn tightly at slow speed (Jokō).",answer:!0,expJa:"○ 正しい：二輪車や自転車の巻き込みを防ぐため、あらかじめ左端に寄ってから徐行で小さく左折します。",expEn:"TRUE: Moving close to the left curb in advance prevents bicycles or motorcycles from squeezing into your left blind spot (巻き込み防止)."},{id:15,chapter:"Ch.6 Left & Right Turns (右左折・合図)",qJa:"左折しやすくするため、一度右にハンドルを振ってから左折する（あおりハンドル）のが良い。",qEn:"To make a left turn easier, it is good practice to swing the car slightly to the right before turning left.",answer:!1,expJa:"× 誤り：右に振ってから左折する「あおりハンドル」は後続車や二輪車との接触事故を招くため厳禁（減点対象）です。",expEn:"FALSE: Swinging wide to the right before turning left (あおりハンドル) is dangerous and causes immediate point deductions in the practical exam."},{id:16,chapter:"Ch.7 Speed & Slow Down (速度と徐行)",qJa:"標識や標示で最高速度が指定されていない一般道路における普通自動車の法定最高速度は、時速60キロメートルである。",qEn:"On ordinary roads where no speed limit sign is posted, the statutory maximum speed for standard passenger cars is 60 km/h.",answer:!0,expJa:"○ 正しい：一般道路の法定最高速度は自動車60 km/h、原動機付自転車（50cc以下）は30 km/hです。",expEn:"TRUE: The statutory speed limit on ordinary roads is 60 km/h for passenger cars/motorcycles and 30 km/h for 50cc mopeds."},{id:17,chapter:"Ch.7 Speed & Slow Down (速度と徐行)",qJa:"「徐行」とは、ブレーキを操作してからおおむね1メートル以内で直ちに停止できるような速度（時速10km以下目安）で進行することをいう。",qEn:'"Slow Down (徐行 / Jokō)" means driving at a speed where you can stop immediately (within approximately 1 meter, or ≤10 km/h).',answer:!0,expJa:"○ 正しい：徐行とは直ちに停止できる速度（時速10km以下、制動距離1m以内目安）のことです。",expEn:"TRUE: Jokō (徐行) is defined under Japanese law as a speed at which the vehicle can stop immediately upon braking (~10 km/h or less)."},{id:18,chapter:"Ch.7 Speed & Slow Down (速度と徐行)",qJa:"上り坂の頂上付近や、勾配の急な下り坂では徐行しなければならないが、勾配の急な上り坂では徐行の義務はない。",qEn:"You must slow down (徐行) near the top of an uphill slope and on steep downhill slopes, but not on steep uphill slopes.",answer:!0,expJa:"○ 正しい：徐行義務があるのは「上り坂の頂上付近」と「勾配の急な下り坂」です（急な上り坂の途中は徐行場所ではありません）。",expEn:"TRUE: A classic exam trap! Jokō is mandatory near hill crests (上り坂の頂上付近) and on steep descents (勾配の急な下り坂), NOT on steep ascents."},{id:19,chapter:"Ch.8 Stopping Distance (停止距離)",qJa:"車が停止するまでの「停止距離」とは、危険を感じてからブレーキが効き始めるまでの「空走距離」と、ブレーキが効いてから止まるまでの「制動距離」を合わせた距離である。",qEn:"Total stopping distance (停止距離) equals reaction distance (空走距離) plus braking distance (制動距離).",answer:!0,expJa:"○ 正しい：停止距離 ＝ 空走距離（反応時間中に走る距離）＋ 制動距離（ブレーキが効いてから止まる距離）です。",expEn:"TRUE: Stopping Distance = Reaction Distance (空走距離) + Braking Distance (制動距離)."},{id:20,chapter:"Ch.8 Stopping Distance (停止距離)",qJa:"速度が2倍になると、制動距離も2倍になる。",qEn:"When vehicle speed doubles, the braking distance (制動距離) also doubles.",answer:!1,expJa:"× 誤り：速度が2倍になると、空走距離は2倍になりますが、制動距離は速度の2乗に比例するため「4倍」になります！",expEn:"FALSE: Braking distance increases with the SQUARE of speed. Doubling your speed makes your braking distance 4 TIMES longer (and 9 times longer at 3x speed)."},{id:21,chapter:"Ch.9 Overtaking & Passing (追い越し・追い抜き)",qJa:"横断歩道や自転車横断帯とその手前30メートル以内の場所では、他の自動車や原付を追い越すことも追い抜くことも禁止されている。",qEn:"Within 30 meters before a pedestrian or bicycle crosswalk, both overtaking (changing lanes) and passing (without changing lanes) any motor vehicle are prohibited.",answer:!0,expJa:"○ 正しい：横断歩道・自転車横断帯とその手前30m以内は「追い越し」だけでなく「追い抜き」もすべて禁止です。",expEn:"TRUE: Within 30m before a crosswalk, you must not pass any moving motor vehicle—neither by changing lanes (追い越し) nor in an adjacent lane (追い抜き)."},{id:22,chapter:"Ch.9 Overtaking & Passing (追い越し・追い抜き)",qJa:"前の車が右折しようとして道路の中央に寄っているときは、その左側を通って追い越すことができる。",qEn:"When a vehicle ahead has moved toward the center of the road to make a right turn, you may pass it on its left side.",answer:!0,expJa:"○ 正しい：追い越しは原則「右側」からですが、前車が右折のために中央に寄っているときは例外として「左側」から追い越します。",expEn:"TRUE: Normally overtaking is done on the right, EXCEPT when the vehicle ahead is signaling and positioned to turn right—then you must pass on its left."},{id:23,chapter:"Ch.9 Overtaking & Passing (追い越し・追い抜き)",qJa:"前の車が他の自動車を追い越そうとしているときでも、自分の車の方が速ければ二重追い越しをしてよい。",qEn:"Even if the car ahead is already overtaking another motor vehicle, you may overtake it at the same time (double overtaking) if your car is faster.",answer:!1,expJa:"× 誤り：前車が他の自動車やトロリーバスを追い越そうとしているときの「二重追い越し」は法律で禁止されています。",expEn:"FALSE: Double overtaking (二重追い越し) when the car ahead is overtaking another motor vehicle is strictly prohibited."},{id:24,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"交差点や横断歩道の端から5メートル以内の場所は、駐車も停車も禁止（駐停車禁止）されている。",qEn:"Both parking and stopping are prohibited within 5 meters of the edge of an intersection or pedestrian crosswalk.",answer:!0,expJa:"○ 正しい：交差点・横断歩道・自転車横断帯とその端から5m以内は「駐停車禁止」です。",expEn:"TRUE: Within 5 meters of an intersection or crosswalk is a strict No-Stopping and No-Parking zone (駐停車禁止)."},{id:25,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"踏切の端から10メートル以内の場所と、バス停留所の標示板から10メートル以内の場所（運行時間中）は、駐停車禁止である。",qEn:"Within 10 meters of a railroad crossing and within 10 meters of a bus stop sign (during operating hours) are No-Stopping and No-Parking zones.",answer:!0,expJa:"○ 正しい：踏切から10m以内、および運行時間中のバス停から10m以内は「駐停車禁止」です。",expEn:"TRUE: Both parking and stopping are banned within 10m of railroad crossings and within 10m of active bus stops."},{id:26,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"消火栓から5メートル以内の場所や、人の車庫（駐車場）の出入口から3メートル以内の場所は「駐車禁止」であるが、人の乗降のための短時間の「停車」はできる。",qEn:'Within 5 meters of a fire hydrant and within 3 meters of a garage driveway are "No Parking" zones, meaning brief "Stopping" for passenger pick-up is allowed.',answer:!0,expJa:"○ 正しい：消火栓（5m以内）・車庫出入口（3m以内）・工事区域（5m以内）は「駐車禁止」なので、停車は可能です！",expEn:"TRUE: Fire hydrants (5m), garage driveways (3m), and roadworks (5m) are No-Parking (駐車禁止) zones, not No-Stopping zones."},{id:27,chapter:"Ch.10 Parking & Stopping (駐停車禁止)",qJa:"運転者が車に乗っていれば、20分以上継続して止まっていても「駐車」にはならず「停車」とみなされる。",qEn:'As long as the driver remains seated inside the car, waiting continuously for 20 minutes is considered "Stopping (停車)" rather than "Parking (駐車)".',answer:!1,expJa:"× 誤り：運転者が車内にいても、客待ちや荷待ちなどで継続的に停止（または5分を超える荷物の積み下ろし）する場合は「駐車」となります。",expEn:"FALSE: Even if the driver stays in the driver seat, waiting continuously (or cargo loading exceeding 5 minutes) is legally classified as Parking (駐車)."},{id:28,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"信号のない横断歩道を渡ろうとしている歩行者がいるときは、横断歩道の手前（停止線）で一時停止して歩行者に道を譲らなければならない。",qEn:"When a pedestrian is waiting to cross at an unsignalized crosswalk, you must come to a complete stop before the crosswalk and yield.",answer:!0,expJa:"○ 正しい：歩行者が横断中または横断しようとしているときは必ず一時停止します（違反は技能試験で一発検定中止）。",expEn:"TRUE: Failing to stop for a pedestrian crossing or about to cross a zebra crosswalk is an automatic disqualification."},{id:29,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"白い杖を持った人（目の不自由な人）や盲導犬を連れた人が道路を通行しているときは、一時停止するか徐行しなければならない。",qEn:"When passing a person carrying a white cane or accompanied by a guide dog, you must either come to a complete stop or slow down (徐行).",answer:!0,expJa:"○ 正しい：白杖・盲導犬・高齢者・児童・車いす等の通行に支障があるときは一時停止または徐行して保護します。",expEn:"TRUE: Drivers must stop or slow down (徐行) to protect pedestrians with white canes, guide dogs, wheelchairs, or young children flying solo."},{id:30,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"安全地帯に路面電車が止まっていなくても、安全地帯のそばに歩行者がいるときは徐行して通過しなければならない。",qEn:"Even if no streetcar is present at a safety zone (安全地帯), you must slow down (徐行) when passing if pedestrians are standing in the safety zone.",answer:!0,expJa:"○ 正しい：安全地帯に歩行者がいるときは、路面電車の有無にかかわらず徐行義務があります。",expEn:"TRUE: Whenever pedestrians are on a safety island (安全地帯), you must pass at slow speed (徐行), even if no streetcar is stopped there."},{id:31,chapter:"Ch.11 Pedestrians & Cyclists (歩行者保護)",qJa:"停止している通学・通園バスのそばを通過するときは、児童・幼児が飛び出してくるおそれがあるため徐行して安全を確認する。",qEn:"When passing a stopped school or kindergarten bus, you must slow down (徐行) and check for children who might dart out.",answer:!0,expJa:"○ 正しい：乗降中の通学・通園バスの側方を通過するときは必ず徐行して安全を確認します。",expEn:"TRUE: You are legally required to slow down (徐行) when passing a stopped school/kindergarten bus unloading children."},{id:32,chapter:"Ch.12 Railway Crossings (踏切)",qJa:"踏切を通過するとき、前の車に続いて進行すれば一時停止を省略して通過することができる。",qEn:"When crossing a railroad track, if you are following directly behind another car that just stopped, you may cross without stopping yourself.",answer:!1,expJa:"× 誤り：前の車が一時停止していても、自分の車も必ず停止線手前で完全停止し、左右の安全確認を行わなければなりません。",expEn:"FALSE: Every vehicle must stop independently at the railroad stop line—you may never piggyback on the car ahead."},{id:33,chapter:"Ch.12 Railway Crossings (踏切)",qJa:"踏切内でエンストを防ぐため、踏切を通過している途中でギアチェンジ（変速）を行ってはならない。",qEn:"To prevent stalling on the tracks, you must not shift gears while crossing a railroad crossing.",answer:!0,expJa:"○ 正しい：踏切内では変速せず、発進した低いギアのまま一気に通過します。",expEn:"TRUE: Never shift gears while on railway tracks; cross in one continuous motion in your starting gear."},{id:34,chapter:"Ch.12 Railway Crossings (踏切)",qJa:"踏切の向こう側が渋滞していて自分の車が入る余地がないときは、遮断機が開いていても踏切内に進入してはならない。",qEn:"If traffic on the far side of a railroad crossing is backed up with no room for your car, you must not enter the crossing even if the barrier gates are open.",answer:!0,expJa:"○ 正しい：前方の状況により踏切内で立ち往生するおそれがあるときは、踏切の手前で待たなければなりません。",expEn:"TRUE: Never enter a railroad crossing (or intersection) if congestion on the other side could trap you on the tracks."},{id:35,chapter:"Ch.13 Emergency & Buses (緊急自動車・路線バス)",qJa:"交差点付近でサイレンを鳴らし赤色灯をつけた緊急自動車が近づいてきたときは、交差点を避けて道路の左側に寄って一時停止しなければならない。",qEn:"When an emergency vehicle with sirens and red flashing lights approaches near an intersection, you must clear the intersection, pull over to the left, and come to a complete stop.",answer:!0,expJa:"○ 正しい：交差点付近では「交差点を避けて道路の左側に寄って一時停止」、それ以外の場所では「道路の左側に寄って進路を譲る」がルールです。",expEn:"TRUE: Near an intersection, clear the intersection, move left, and STOP completely. Away from intersections, move left to yield."},{id:36,chapter:"Ch.13 Emergency & Buses (緊急自動車・路線バス)",qJa:"停留所で止まっていた路線バスが発進のウインカー合図を出したときは、急ブレーキや急ハンドルにならない限り、その発進を妨げてはならない。",qEn:"When a public transit bus at a bus stop signals to pull out, you must yield and allow it to depart unless doing so requires sudden braking or swerving.",answer:!0,expJa:"○ 正しい：発進合図を出した路線バスには進路を譲る義務があります。",expEn:"TRUE: Drivers must yield to a signaling transit bus pulling out from a bus stop."},{id:37,chapter:"Ch.14 Night & Lights (夜間・灯火・ホーン)",qJa:"夜間、対向車とすれ違うときや前の車のすぐ後ろを走行するときは、ヘッドライトを下向き（ロービーム）に切り替えなければならない。",qEn:"At night, when meeting an oncoming vehicle or following closely behind another vehicle, you must switch your headlights to low beam.",answer:!0,expJa:"○ 正しい：夜間は原則ハイビームですが、対向車とすれ違うときや前車の直後を走るときは眩惑防止のためロービームに切り替えます。",expEn:"TRUE: Switch from high beams (走行用前照灯) to low beams (すれ違い用前照灯) when oncoming traffic approaches or when following another car."},{id:38,chapter:"Ch.14 Night & Lights (夜間・灯火・ホーン)",qJa:"道を譲ってもらったときのお礼として、警音器（クラクション）を軽く鳴らすのは良いマナーであり法律でも推奨されている。",qEn:'Lightly honking the horn to say "thank you" when another driver yields to you is good manners and encouraged by law.',answer:!1,expJa:"× 誤り：警音器（ホーン）は「警音器を鳴らせ」の標識がある場所、または危険を避けるためやむを得ない場合以外は鳴らしてはいけません。",expEn:"FALSE: Under Japanese law, the horn may ONLY be used where required by a horn sign or when strictly necessary to avert immediate danger—never to say thank you."},{id:39,chapter:"Ch.15 Expressways (高速道路)",qJa:"高速自動車国道の本線車道における普通自動車の法定最高速度は時速100km、法定最低速度は時速50kmである。",qEn:"On the main through-lanes of a national expressway (where no speed sign is posted), the statutory maximum speed for a standard passenger car is 100 km/h and the minimum speed is 50 km/h.",answer:!0,expJa:"○ 正しい：高速自動車国道の本線車道では、普通車は最高100 km/h、最低50 km/hです。",expEn:"TRUE: On national expressway main lanes, the default statutory limits for standard cars are 100 km/h maximum and 50 km/h minimum."},{id:40,chapter:"Ch.15 Expressways (高速道路)",qJa:"総排気量125cc以下の普通自動二輪車や原動機付自転車は、高速道路を通行することができない。",qEn:"Motorcycles with an engine displacement of 125cc or less and 50cc mopeds are prohibited from driving on expressways.",answer:!0,expJa:"○ 正しい：高速道路を通行できる二輪車は「125ccを超える自動二輪車」のみです（125cc以下や原付は通行不可）。",expEn:"TRUE: Only motorcycles over 125cc are permitted on Japanese expressways."},{id:41,chapter:"Ch.15 Expressways (高速道路)",qJa:"高速道路で故障などのためやむを得ず路肩に駐車するときは、車の後方に停止表示器材（三角表示板など）を置かなければならない。",qEn:"If your vehicle breaks down on an expressway and you must stop on the shoulder, you must place a warning reflector triangle (停止表示器材) behind your vehicle.",answer:!0,expJa:"○ 正しい：高速道路でやむを得ず駐停車するときは、後方から見やすい位置に停止表示器材（三角表示板等）を設置する義務があります。",expEn:"TRUE: Placing a warning triangle/lamp behind a disabled vehicle on an expressway is mandatory."},{id:42,chapter:"Ch.16 Licenses & Passengers (免許・乗車・積載)",qJa:"普通自動車免許を取得してから1年未満の運転者は、車の前後に「初心運転者標識（若葉マーク）」をつけなければならない。",qEn:"Drivers who have held a standard passenger car license for less than 1 year must display the Beginner Driver Sign (Shoshinsha / Wakaba mark) on the front and rear of the car.",answer:!0,expJa:"○ 正しい：普通免許取得後1年間は初心運転者標識（若葉マーク）の表示義務があります。",expEn:"TRUE: The green-and-yellow Wakaba beginner mark is mandatory for the first year after obtaining a standard license."},{id:43,chapter:"Ch.16 Licenses & Passengers (免許・乗車・積載)",qJa:"後部座席の同乗者は、一般道路を走行するときはシートベルトを着用しなくてもよい。",qEn:"Rear-seat passengers are not required to wear seatbelts when driving on ordinary non-expressway roads.",answer:!1,expJa:"× 誤り：一般道路・高速道路を問わず、運転席・助手席・後部座席のすべての座席でシートベルト着用が義務付けられています。",expEn:"FALSE: Seatbelts are legally mandatory for ALL seats (front and rear) on both ordinary roads and expressways."},{id:44,chapter:"Ch.16 Licenses & Passengers (免許・乗車・積載)",qJa:"6歳未満の幼児を自動車に乗せて運転するときは、チャイルドシートを使用しなければならない。",qEn:"When transporting a child under 6 years of age in a passenger car, you must use a child safety seat.",answer:!0,expJa:"○ 正しい：6歳未満の幼児を乗せるときはチャイルドシートの使用が法律で義務付けられています。",expEn:"TRUE: Child safety seats are legally mandatory for children under 6 years old."},{id:45,chapter:"Ch.17 Pre-Drive & Maintenance (乗車手順・日常点検)",qJa:"運転席に乗車した後の正しい準備順序は、「①ドアロック → ②座席調整 → ③ミラー調整 → ④シートベルト着用 → ⑤エンジン始動」である。",qEn:"The proper pre-drive cockpit sequence after boarding is: 1. Lock door → 2. Adjust seat → 3. Adjust mirrors → 4. Fasten seatbelt → 5. Start engine.",answer:!0,expJa:"○ 正しい：日本の技能試験では必ず「座席（シート）→ ミラー → シートベルト → エンジン始動」の順番で行います。",expEn:"TRUE: You must adjust your seat BEFORE your mirrors and seatbelt so your eye level is fixed and the belt does not restrict seat movement."},{id:46,chapter:"Ch.17 Pre-Drive & Maintenance (乗車手順・日常点検)",qJa:"AT（オートマチック）車のエンジンをかけるときは、ギアが「P」（または「N」）にあることを確認し、右足でフットブレーキをしっかり踏んで始動する。",qEn:'When starting an automatic (AT) car, verify the gear selector is in "P" (or "N") and firmly depress the foot brake with your right foot.',answer:!0,expJa:"○ 正しい：急発進を防ぐため、必ずフットブレーキを踏み、Pレンジを確認してからエンジンを始動します。",expEn:"TRUE: Always hold the foot brake and confirm the gear is in P before starting the engine."},{id:47,chapter:"Ch.18 Physics & Hazards (自然の力と悪天候)",qJa:"カーブを曲がるときに働く「遠心力」は、速度が2倍になると4倍になるため、カーブに入る前に十分減速する必要がある。",qEn:"Because centrifugal force in a curve increases 4-fold when speed doubles, you must decelerate sufficiently before entering the curve.",answer:!0,expJa:"○ 正しい：遠心力は「速度の2乗」に比例し、カーブの半径が小さいほど大きくなります。必ずカーブの手前で減速します。",expEn:"TRUE: Centrifugal force is proportional to the square of speed (2x speed = 4x centrifugal force). Always brake BEFORE entering a curve."},{id:48,chapter:"Ch.18 Physics & Hazards (自然の力と悪天候)",qJa:"長い下り坂でフットブレーキを使いすぎると、ブレーキが過熱して効かなくなる「フェード現象」や「ベーパーロック現象」が起きることがあるため、エンジンブレーキを併用する。",qEn:"Overusing the foot brake on a long downhill slope can overheat the brakes (causing brake fade or vapor lock), so you should use engine braking in combination.",answer:!0,expJa:"○ 正しい：長い下り坂では低速ギア（2やLなど）に落としてエンジンブレーキを活用します。",expEn:"TRUE: Shift to a lower gear and use engine braking on long descents to prevent brake fade (フェード現象) and vapor lock (ベーパーロック現象)."},{id:49,chapter:"Ch.19 Alcohol, Phones & Accidents (飲酒・スマホ・事故対応)",qJa:"少量のアルコール（ビール1杯程度）であれば、顔が赤くならず気分も普段通りなら運転してよい。",qEn:"If you only drank a small amount of alcohol (such as one glass of beer) and feel completely normal, you are allowed to drive.",answer:!1,expJa:"× 誤り：日本では飲酒運転はゼロ・トレランス（絶対禁止）です。わずか一口でも酒気帯び・酒酔い運転として厳罰に処されます。",expEn:"FALSE: Japan enforces strict zero-tolerance for drinking and driving. Even a single sip of alcohol before driving is a serious criminal offense."},{id:50,chapter:"Ch.19 Alcohol, Phones & Accidents (飲酒・スマホ・事故対応)",qJa:"交通事故を起こしたときは、まず負傷者の救護と道路上の危険防止措置を行い、その後に警察官（110番）へ報告しなければならない。",qEn:"If you are involved in a traffic accident, you must first stop, aid any injured persons, take measures to prevent secondary road hazards, and then report the accident to the police (110).",answer:!0,expJa:"○ 正しい：事故発生時の義務は①運転停止 → ②負傷者の救護（119番） → ③危険防止措置 → ④警察への報告（110番）です。",expEn:"TRUE: The mandatory order after an accident is: 1. Stop driving → 2. Aid the injured (call 119) → 3. Prevent further road danger → 4. Report to Police (call 110)."}];class tv{constructor(){pe(this,"answers",new Map);pe(this,"submitted",!1)}reset(){this.answers.clear(),this.submitted=!1}render(e,t){var l,h;const n=t==="ja",s=la.length,r=this.answers.size;let o=0;for(const d of la)this.answers.get(d.id)===d.answer&&o++;const a=o>=45;e.innerHTML=`
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
    `;const c=e.querySelector("#wxQuestionsList");for(const d of la){const u=this.answers.get(d.id),m=u!==void 0,_=m&&u===d.answer,v=document.createElement("div");v.className=`wx-q-card ${m?_?"answered-correct":"answered-wrong":""}`,v.innerHTML=`
        <div class="wx-q-top">
          <span class="wx-q-num">Q${d.id}</span>
          <span class="wx-q-chap">${d.chapter}</span>
          ${m?`<span class="wx-q-badge ${_?"pass":"fail"}">${_?n?"⭕ 正解":"⭕ Correct":n?"❌ 不正解":"❌ Incorrect"}</span>`:""}
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
        <div class="wx-q-exp" ${m||this.submitted?"":"hidden"}>
          <strong>${n?d.expJa:d.expEn}</strong>
          <div style="font-size:11.5px;color:#cbd5e1;margin-top:2px;">${n?d.expEn:d.expJa}</div>
        </div>
      `,c.append(v)}e.querySelectorAll(".wx-ans-btn").forEach(d=>{d.addEventListener("click",()=>{const u=Number(d.dataset.qid),m=d.dataset.ans==="true";this.answers.set(u,m),this.render(e,t)})}),(l=e.querySelector("#wxGradeAllBtn"))==null||l.addEventListener("click",()=>{this.submitted=!0,this.render(e,t)}),(h=e.querySelector("#wxResetBtn"))==null||h.addEventListener("click",()=>{this.reset(),this.render(e,t)})}}const nv=new tv,iv=[{id:"tomare",titleJa:"一時停止 (止まれ)",titleEn:"Stop (Tomare / 止まれ)",descJa:"停止線の直前で車輪を完全に停止（0 km/h・約2秒）させ、左右の安全確認を行わなければなりません。徐行で通過すると一発検定中止（指定場所一時不停止）となります。",descEn:"Mandatory complete 0.0 km/h stop before the white stop line, followed by distinct Left & Right head checks. Rolling stops cause immediate exam failure.",draw:(i,e,t)=>{i.beginPath(),i.moveTo(12,16),i.lineTo(e-12,16),i.lineTo(e/2,t-14),i.closePath(),i.fillStyle="#d62828",i.fill(),i.lineWidth=6,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.textAlign="center",i.font='bold 22px "Noto Sans JP", sans-serif',i.fillText("止まれ",e/2,48),i.font="bold 13px sans-serif",i.fillText("STOP",e/2,68)}},{id:"joko",titleJa:"徐行 (Slow Down)",titleEn:"Slow Down (Jokō / 徐行)",descJa:"ブレーキ操作から1m以内（時速10km/h以下目安）で直ちに停止できる速度で進行します。見通しの悪い交差点、曲がり角、上り坂の頂上付近、勾配の急な下り坂では徐行義務があります。",descEn:"Drive at a speed where you can stop immediately (within 1 meter / ≤ 10 km/h). Mandatory at blind intersections, road corners, hill crests, and steep descents.",draw:(i,e,t)=>{i.beginPath(),i.moveTo(14,18),i.lineTo(e-14,18),i.lineTo(e/2,t-16),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.font='bold 20px "Noto Sans JP", sans-serif',i.fillText("徐 行",e/2,48),i.font="bold 11px sans-serif",i.fillText("SLOW",e/2,66)}},{id:"speed40",titleJa:"最高速度 (40 km/h)",titleEn:"Maximum Speed Limit (40 km/h)",descJa:"指定された最高速度を超えて運転してはいけません。標識がない一般道路の法定最高速度は自動車60km/h、原付30km/hです。",descEn:"Do not exceed 40 km/h. Where no speed sign is posted on ordinary roads, the statutory limit is 60 km/h for cars/motorcycles and 30 km/h for mopeds.",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=11,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.textBaseline="middle",i.font="bold 42px sans-serif",i.fillText("40",e/2,t/2+2)}},{id:"crosswalk",titleJa:"横断歩道 (歩行者優先)",titleEn:"Pedestrian Crosswalk (横断歩道)",descJa:"前方に横断歩道があることを示します。手前30mと15mには路面ダイヤ（◇）標示があります。歩行者が渡っている・渡ろうとしている時は必ず停止線手前で一時停止します（違反は一発検定中止）。",descEn:"Indicates a pedestrian crosswalk ahead (preceded by ◇ road diamonds at 30m and 15m). You MUST stop whenever a pedestrian is crossing or waiting to cross.",draw:(i,e,t)=>{i.beginPath(),i.moveTo(e/2,10),i.lineTo(e-14,42),i.lineTo(e-20,t-12),i.lineTo(20,t-12),i.lineTo(14,42),i.closePath(),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.beginPath(),i.arc(e/2,38,7,0,Math.PI*2),i.fill(),i.fillRect(e/2-5,47,10,20);for(let n=-2;n<=2;n++)i.fillRect(e/2-3+n*11,74,6,14)}},{id:"railroad",titleJa:"踏切あり (警戒標識)",titleEn:"Railroad Crossing Ahead (踏切あり)",descJa:"前方に踏切があることを警告する黄色ダイヤ標識。踏切手前では必ず完全停止し、窓を開けて目と耳で左右の安全を確認し、踏切内では変速（ギアチェンジ）せずに通過します。",descEn:"Yellow warning diamond indicating a railway crossing ahead. Stop completely before the stop line, open window to listen, look Left & Right, and cross without shifting gears.",draw:(i,e,t)=>{i.save(),i.translate(e/2,t/2),i.rotate(Math.PI/4),i.fillStyle="#f5b800",i.fillRect(-32,-32,64,64),i.lineWidth=4,i.strokeStyle="#111827",i.strokeRect(-28,-28,56,56),i.restore(),i.fillStyle="#111827",i.textAlign="center",i.textBaseline="middle",i.font='bold 17px "Noto Sans JP", sans-serif',i.fillText("踏切",e/2,t/2+2)}},{id:"noEntry",titleJa:"車両進入禁止 (一方通行出口)",titleEn:"No Entry for Vehicles (車両進入禁止)",descJa:"一方通行の出口などに設置され、この標識の方向からの車両の進入を全面禁止します。",descEn:"Prohibits vehicles from entering from this direction (commonly placed at the exit of a one-way street).",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#d62828",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.fillRect(e/2-28,t/2-8,56,16)}},{id:"noParking",titleJa:"駐車禁止 ／ 駐停車禁止",titleEn:"No Parking (駐車禁止) vs No Stopping (駐停車禁止)",descJa:"斜線1本は「駐車禁止」（5分以内の荷物の積み下ろしや人の乗降などの停車は可）。バツ印（×）2本は「駐停車禁止」（駐車も停車も両方禁止）。",descEn:"Single red slash = No Parking (brief stopping for passenger pick-up or <5 min cargo loading is allowed). Double X slash = No Parking AND No Stopping.",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.beginPath(),i.moveTo(22,22),i.lineTo(e-22,t-22),i.stroke()}},{id:"direction",titleJa:"指定方向外進行禁止",titleEn:"Mandatory Direction (指定方向外進行禁止)",descJa:"青丸に白矢印の規制標識。矢印の方向（この例では直進と左折）以外の進行（右折）を禁止します。",descEn:"Blue circular regulatory sign: Vehicles may ONLY proceed in the directions shown by the white arrows (here: Straight or Left only; Right turn prohibited).",draw:(i,e,t)=>{i.beginPath(),i.arc(e/2,t/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.strokeStyle="#ffffff",i.fillStyle="#ffffff",i.lineWidth=7,i.beginPath(),i.moveTo(e/2,76),i.lineTo(e/2,26),i.stroke(),i.beginPath(),i.moveTo(e/2,18),i.lineTo(e/2-10,32),i.lineTo(e/2+10,32),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e/2,52),i.lineTo(26,52),i.stroke(),i.beginPath(),i.moveTo(18,52),i.lineTo(32,42),i.lineTo(32,62),i.closePath(),i.fill()}}];function Id(i,e,t){const n=t==="ja";if(e==="predrive"){i.innerHTML=`
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
    `;const s=i.querySelector("#rbSignsGrid");for(const r of iv){const o=document.createElement("div");o.className="rb-sign-card";const a=document.createElement("canvas");a.width=104,a.height=104,a.className="rb-sign-canvas",r.draw(a.getContext("2d"),104,104);const c=document.createElement("div");c.innerHTML=`
        <h4>${n?r.titleJa:r.titleEn}</h4>
        <small style="color:#94a3b8;display:block;margin-bottom:4px;">${n?r.titleEn:r.titleJa}</small>
        <p>${n?r.descJa:r.descEn}</p>
      `,o.append(a,c),s.append(o)}return}if(e==="mock50"){nv.render(i,t);return}i.innerHTML=`
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
  `}const Gl=document.getElementById("simCanvas"),cn=new cx({canvas:Gl,antialias:!0,powerPreference:"high-performance"});cn.setPixelRatio(Math.min(2,window.devicePixelRatio||1));cn.setSize(window.innerWidth,window.innerHeight);cn.shadowMap.enabled=!0;cn.shadowMap.type=Ih;cn.outputColorSpace=yt;const Dn=new Nf,Fi=new ev(Dn),sv=new Qx(Fi.kyoshujoGroup),en=new jx(Dn),un=new Kx(Dn),rs=new ol,Jt=new Mx,rt=new hx,Dd=new dx,Pe=Ex(),rv=window.matchMedia("(hover: none) and (pointer: coarse)").matches;rv&&(Pe.showTouchControls=!0);const Ct=new Zx(Gl,window.innerWidth/window.innerHeight);Ct.setMirrorQuality(Pe.mirrorQuality,null);let Es="startBay",Qt="kyoshujo",En="kyoshujo-3d",Mt=null,Ii=1.35,ao=17,mi=!1,lo=1,Wl=0,Xl=0,co=!1,Q=Td(ms.startBay.x,ms.startBay.z,ms.startBay.heading,Pe.vehicleKind,Pe.transmission),yn=Ld(Pe.vehicleKind);Dn.add(yn.root);Ct.setMode(Pe.cameraMode,Q,yn);rt.setVolume(Pe.masterVolume,Pe.muted);const ov=document.getElementById("ui"),kd=document.getElementById("uiToggle"),ql=Array.from(document.querySelectorAll(".quickViewBtn[data-view-target]")),vh=document.getElementById("mirrorHud"),av=document.getElementById("mirrorLeft"),lv=document.getElementById("mirrorCenter"),cv=document.getElementById("mirrorRight"),hv=document.getElementById("cockpitSignalHud"),dv=document.getElementById("cockpitLampLeft"),uv=document.getElementById("cockpitLampRight"),tn=document.getElementById("miniMap"),Jl=document.getElementById("miniMapClose"),fv=document.getElementById("speedVignette"),pv=document.getElementById("speedBlur"),mv=document.getElementById("wheelHudDial"),gv=document.getElementById("speed"),_v=document.getElementById("gear"),xv=document.getElementById("viewMode"),vv=document.getElementById("position"),yv=document.getElementById("heading"),Mv=document.getElementById("steerAngle"),Sv=document.getElementById("signalStatusBox"),Ev=document.getElementById("signalStatus"),yh=document.getElementById("hudScore"),bv=document.getElementById("hudModePill"),Wr=document.getElementById("hudDirective"),ca=document.getElementById("violationToasts"),Mh=document.getElementById("resetToast"),wv=document.getElementById("stallBanner"),$l=document.getElementById("mobileControls");$l.hidden=!Pe.showTouchControls;const Tv={FL:document.getElementById("wheelFL"),FR:document.getElementById("wheelFR"),RL:document.getElementById("wheelRL"),RR:document.getElementById("wheelRR")},al=document.getElementById("accelCurve"),Av=document.getElementById("accelCurveValue"),Rv=document.getElementById("accelCurveLine"),Xr=document.getElementById("accelCurveGuideX"),qr=document.getElementById("accelCurveGuideY"),Sh=document.getElementById("accelCurveDot"),Cv=document.getElementById("accelCurveInputValue"),Pv=document.getElementById("accelCurveOutputValue"),hn={left:32,right:188,top:20,bottom:108,samples:32};function Ud(i,e=0){Ii=St.clamp(i,.8,1.8),al.value=String(Math.round(Ii*100)),Av.textContent=Ii.toFixed(2);const t=[];for(let n=0;n<=hn.samples;n++){const s=n/hn.samples,r=Math.pow(s,Ii),o=St.lerp(hn.left,hn.right,s),a=St.lerp(hn.bottom,hn.top,r);t.push(`${o.toFixed(1)},${a.toFixed(1)}`)}Rv.setAttribute("points",t.join(" ")),Nd(e)}function Nd(i){const e=St.clamp(i,0,1),t=Math.pow(e,Ii),n=St.lerp(hn.left,hn.right,e),s=St.lerp(hn.bottom,hn.top,t);Xr.setAttribute("x1",n.toFixed(1)),Xr.setAttribute("y1",String(hn.bottom)),Xr.setAttribute("x2",n.toFixed(1)),Xr.setAttribute("y2",s.toFixed(1)),qr.setAttribute("x1",String(hn.left)),qr.setAttribute("y1",s.toFixed(1)),qr.setAttribute("x2",n.toFixed(1)),qr.setAttribute("y2",s.toFixed(1)),Sh.setAttribute("cx",n.toFixed(1)),Sh.setAttribute("cy",s.toFixed(1)),Cv.textContent=`${Math.round(e*100)}%`,Pv.textContent=`${Math.round(t*100)}%`}let bs=!0;function bn(i){bs=i,ov.classList.toggle("collapsed",i);const e=Pe.locale==="ja";kd.textContent=i?e?"メニューを表示":"Show Menu":e?"メニューを隠す":"Hide Menu"}kd.addEventListener("click",()=>{rt.unlock(),bn(!bs)});document.getElementById("startDrivingBtn").addEventListener("click",()=>{rt.unlock(),bn(!0),Gl.focus({preventScroll:!0})});let Eh=0;function Lv(){const i=Pe.locale==="ja";document.getElementById("resetToastText").textContent=i?"スタート地点に戻りました。もう一度！":"Back to the start — try again!",Mh.classList.add("visible"),window.clearTimeout(Eh),Eh=window.setTimeout(()=>Mh.classList.remove("visible"),1800)}const ha=["chase","cockpit","instructor","hood","orbit"];function Yl(i){Pe.cameraMode=i,ei(Pe),Ct.setMode(i,Q,yn),ql.forEach(r=>{r.classList.toggle("is-active",r.dataset.viewTarget===i)});const e=i==="orbit",t=i==="cockpit"||i==="instructor";vh.style.display=e?"none":t?"block":"flex",vh.classList.toggle("cockpit-layout",t),hv.classList.toggle("is-visible",t);const n=Pe.locale==="ja",s={chase:n?"後方視点":"Chase View",cockpit:n?"運転席 (右ハンドル)":"Cockpit View",instructor:n?"助手席・検定員視点":"Instructor Seat View",hood:n?"ボンネット":"Hood View",orbit:n?"自由カメラ":"Free Orbit"};xv.textContent=s[i]}function Fd(){const i=ha.indexOf(Ct.getMode());Yl(ha[(i+1)%ha.length])}ql.forEach(i=>{i.addEventListener("click",()=>{rt.unlock();const e=i.dataset.viewTarget;e&&Yl(e)})});document.getElementById("viewBtn").addEventListener("click",()=>{rt.unlock(),Fd()});const hi=document.getElementById("mapPreset"),ws=document.getElementById("mapWidth"),ll=document.getElementById("mapScale"),Iv=document.getElementById("mapScaleValue");function ho(i){const e=Math.round(i);ws.value=String(e),ll.value=String(e),Iv.textContent=`${e} m`}function Oi(i,e,t,n){Q=Td(i,e,t,Pe.vehicleKind,Pe.transmission),Jt.reset(n,Q),document.getElementById("examResultModal").hidden=!0,document.getElementById("violationFreezeOverlay").hidden=!0,Qn=!1,Rn.length=0,Rn.push({x:i,z:e,heading:t,gear:Q.gear}),ar(),Ct.setMode(Ct.getMode(),Q,yn)}function Cs(i,e="practice"){Es=i,En="kyoshujo-3d",hi.value="kyoshujo-3d",Qt="kyoshujo",Fi.setKyoshujoVisible(!0),en.setVisible(!1),ho(ci*2);const t=ms[i];Oi(t.x,t.z,t.heading,e)}function xo(i){if(i==="kyoshujo-3d"){Cs(Es,"practice");return}if(i==="custom"&&Mt){En="custom",Qt="custom",Fi.setKyoshujoVisible(!1),en.setVisible(!0),ho(Mt.mapWidth),Oi(Mt.startX,Mt.startZ,Mt.startHeading,"practice");return}const e=oo.find(t=>t.id===i);e&&(En=e.id,hi.value=e.id,Qt="custom",en.loadProceduralTestCenter(e),Fi.setKyoshujoVisible(!1),en.setVisible(!0),ho(e.mapWidth),Oi(e.startX,e.startZ,e.startHeading,"practice"))}function vo(){rt.unlock(),un.resetProgress();const i=un.getStartPose();un.hasRoute()&&i?Oi(i.x,i.z,i.heading,"practice"):En==="kyoshujo-3d"?Cs(Es,Jt.getMode()):xo(En),Lv()}document.getElementById("resetBtn").addEventListener("click",vo);document.getElementById("quickResetBtn").addEventListener("click",vo);function yo(){const i=Pe.locale==="ja";hi.innerHTML="";for(const n of oo){const s=document.createElement("option");s.value=n.id,s.textContent=i?`${n.nameJa} (${n.nameEn})`:`${n.nameEn} (${n.nameJa})`,hi.append(s)}if(Mt){const n=document.createElement("option");n.value="custom",n.textContent=i?`カスタム地図 / Custom (${Mt.fileName})`:`Custom Map / カスタム (${Mt.fileName})`,hi.append(n)}hi.value=En;const e=document.getElementById("stationGrid");e.innerHTML="";for(const n of mx){const s=Cd[n],r=document.createElement("button");r.type="button",r.className="station-chip";const o=i?`${s.titleJa} · ${s.titleEn}`:`${s.titleEn} · ${s.titleJa}`,a=i?s.descJa:s.descEn;r.innerHTML=`<strong>${o}</strong><span>${a}</span>`,r.addEventListener("click",()=>{rt.unlock(),Cs(n,"practice"),bn(!0)}),e.append(r)}const t=document.getElementById("courseQuickList");t.innerHTML="";for(const n of oo){const s=document.createElement("li"),r=document.createElement("button");r.type="button",r.innerHTML=`<strong>${i?n.nameJa:n.nameEn}</strong><small>${i?n.nameEn:n.nameJa}</small>`,r.addEventListener("click",()=>{rt.unlock(),xo(n.id),bn(!0)}),s.append(r),t.append(s)}}hi.addEventListener("change",()=>{rt.unlock(),xo(hi.value)});document.getElementById("modePracticeBtn").addEventListener("click",()=>{rt.unlock(),Jt.reset("practice",Q),bn(!0)});document.getElementById("modeExamBtn").addEventListener("click",()=>{rt.unlock(),Cs("startBay","exam"),bn(!0)});const cl=document.getElementById("vehicleType"),hl=document.getElementById("transmissionMode"),bh=document.getElementById("maxSpeed"),Dv=document.getElementById("maxSpeedValue"),dl=document.getElementById("masterVolume"),Od=document.getElementById("masterVolumeValue"),ul=document.getElementById("steeringSensitivity"),Bd=document.getElementById("steeringSensitivityValue"),fl=document.getElementById("autoCenterSteering"),pl=document.getElementById("renderQuality"),ml=document.getElementById("settingTouchControls");cl.value=Pe.vehicleKind;hl.value=Pe.transmission;dl.value=String(Math.round(Pe.masterVolume*100));Od.textContent=`${Math.round(Pe.masterVolume*100)}%`;ul.value=String(Math.round(Pe.steeringSensitivity*100));Bd.textContent=`${Pe.steeringSensitivity.toFixed(2)}x`;fl.checked=Pe.autoCenterSteering;pl.value=Pe.mirrorQuality;ml.checked=Pe.showTouchControls;Ud(Ii,0);function zd(){Dn.remove(yn.root),yn=Ld(Pe.vehicleKind),Dn.add(yn.root),Ct.setMode(Ct.getMode(),Q,yn),Q.transmission=Pe.transmission,Q.gear=Pe.transmission==="AT"?"D":"1",Q.stalled=!1}cl.addEventListener("change",()=>{Pe.vehicleKind=cl.value,ei(Pe),zd()});hl.addEventListener("change",()=>{Pe.transmission=hl.value,ei(Pe),zd()});bh.addEventListener("input",()=>{ao=Number(bh.value),Dv.textContent=`${ao} m/s`});dl.addEventListener("input",()=>{Pe.masterVolume=Number(dl.value)/100,Od.textContent=`${Math.round(Pe.masterVolume*100)}%`,rt.setVolume(Pe.masterVolume,Pe.muted),ei(Pe)});ul.addEventListener("input",()=>{Pe.steeringSensitivity=Number(ul.value)/100,Bd.textContent=`${Pe.steeringSensitivity.toFixed(2)}x`,ei(Pe)});fl.addEventListener("change",()=>{Pe.autoCenterSteering=fl.checked,ei(Pe)});pl.addEventListener("change",()=>{Pe.mirrorQuality=pl.value,Ct.setMirrorQuality(Pe.mirrorQuality,yn),ei(Pe)});ml.addEventListener("change",()=>{Pe.showTouchControls=ml.checked,$l.hidden=!Pe.showTouchControls,ei(Pe)});al.addEventListener("input",()=>{Ud(Number(al.value)/100,0)});const wh=document.getElementById("mapInput");wh.addEventListener("change",()=>{var t;const i=(t=wh.files)==null?void 0:t[0];if(!i)return;const e=new FileReader;e.onload=async()=>{const n=String(e.result),s=Math.max(40,Number(ws.value)||350),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Mt=r,await en.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await dr(r),En="custom",yo(),xo("custom"),bn(!0)},e.readAsDataURL(i)});const Hd=i=>{const e=Math.max(40,Math.min(1500,i));ho(e),Qt==="custom"&&(en.setWidth(e),Mt&&(Mt.mapWidth=e,dr(Mt)))};ws.addEventListener("input",()=>Hd(Number(ws.value)||180));ll.addEventListener("input",()=>Hd(Number(ll.value)||180));document.getElementById("setSpawnBtn").addEventListener("click",()=>{Mt&&En==="custom"?(Mt.startX=Q.x,Mt.startZ=Q.z,Mt.startHeading=Q.heading,dr(Mt)):ms[Es]={id:Es,x:Q.x,z:Q.z,heading:Q.heading},rt.playClick(740,.04,.16)});document.getElementById("copyMapJsonBtn").addEventListener("click",async()=>{const i=JSON.stringify({course:En,mapWidth:Number(ws.value)||180,maxSpeed:ao,startPose:{x:Number(Q.x.toFixed(1)),z:Number(Q.z.toFixed(1)),heading:Number(Q.heading.toFixed(6))}},null,2);try{await navigator.clipboard.writeText(i)}catch{}});const Vd=document.getElementById("firstRunHint");document.getElementById("firstRunHintClose").addEventListener("click",()=>{Vd.hidden=!0});function uo(i){mi=i,i&&(lo=1,Wl=0,Xl=0),tn.classList.toggle("expanded",i),tn.classList.remove("is-panning"),document.body.classList.toggle("minimap-expanded",i)}let fo=null,Gd=0,Wd=0,gl=0,_l=0;tn.addEventListener("pointerdown",i=>{!mi||i.target===Jl||(fo=i.pointerId,Gd=gl=i.clientX,Wd=_l=i.clientY,co=!1,tn.setPointerCapture(i.pointerId))});tn.addEventListener("pointermove",i=>{if(!mi||i.pointerId!==fo)return;const e=Math.hypot(i.clientX-Gd,i.clientY-Wd),t=i.clientX-gl,n=i.clientY-_l;if(gl=i.clientX,_l=i.clientY,e>=5){co=!0,tn.classList.add("is-panning");const s=tn.getBoundingClientRect();Wl-=t/Math.max(1,s.width)*Ct.miniMapViewport.halfWidth*2,Xl-=n/Math.max(1,s.height)*Ct.miniMapViewport.halfHeight*2}});tn.addEventListener("pointerup",i=>{i.pointerId===fo&&(fo=null,tn.classList.remove("is-panning"))});tn.addEventListener("click",i=>{if(i.target===Jl)return;if(co){co=!1;return}if(!mi){uo(!0);return}const e=tn.getBoundingClientRect(),t=(i.clientX-e.left)/Math.max(1,e.width),n=(i.clientY-e.top)/Math.max(1,e.height),s=Ct.miniMapViewport.centerX+(t-.5)*Ct.miniMapViewport.halfWidth*2,r=Ct.miniMapViewport.centerZ+(n-.5)*Ct.miniMapViewport.halfHeight*2;Oi(s,r,Q.heading,Jt.getMode()),uo(!1)});tn.addEventListener("wheel",i=>{if(!mi)return;i.preventDefault();const e=i.deltaY<0?1.18:1/1.18;lo=St.clamp(lo*e,1,6)},{passive:!1});Jl.addEventListener("click",i=>{i.stopPropagation(),uo(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&mi&&uo(!1)});document.getElementById("gearCardBtn").addEventListener("click",()=>{rt.unlock(),Ad(Q,1)});document.getElementById("stallRestartBtn").addEventListener("click",()=>{rt.unlock(),Q.stalled=!1,Q.rpm=850});function kv(i){var o;const e=Pe.locale==="ja",t=document.createElement("div");t.className=`violation-toast ${i.instantFail?"fail":""}`;const n=e?i.labelJa:i.labelEn,s=e?i.detailJa:i.detailEn,r=i.instantFail?e?"検定中止":"FAIL":`-${i.points}`;for(t.innerHTML=`<span class="vt-pts">${r}</span><div><strong>${n}</strong><p>${s}</p></div>`,ca.prepend(t);ca.children.length>3;)(o=ca.lastElementChild)==null||o.remove();window.setTimeout(()=>{t.classList.add("fade-out"),window.setTimeout(()=>t.remove(),320)},4200)}let Xd="crank";function Uv(i){const e=Pe.locale,t=document.getElementById("examResultModal");t.hidden=!1,Xd=i.weakArea??"crank",document.getElementById("examResultTitle").textContent=qn(e,"examResultTitle");const n=document.getElementById("examStamp");n.textContent=i.passed?qn(e,"examPassStamp"):qn(e,"examFailStamp"),n.className=`exam-stamp ${i.passed?"pass":"fail"}`,document.getElementById("examResultSub").textContent=i.terminated?qn(e,"examTerminatedSub"):i.passed?qn(e,"examPassedSub"):qn(e,"examFailedSub"),document.getElementById("examFinalScore").textContent=`${i.score} / 100`;const s=Math.floor(i.elapsedSec/60),r=Math.floor(i.elapsedSec%60);document.getElementById("examElapsed").textContent=`${s}:${r.toString().padStart(2,"0")}`,document.getElementById("examDistance").textContent=`${Math.round(i.distanceM)} m`;const o=document.getElementById("examViolationList");if(o.innerHTML="",i.violations.length===0){const a=document.createElement("li");a.className="clean-pass",a.textContent=qn(e,"examNoViolations"),o.append(a)}else for(const a of i.violations){const c=document.createElement("li"),l=e==="ja"?a.labelJa:a.labelEn,h=e==="ja"?a.detailJa:a.detailEn,d=a.instantFail?e==="ja"?"中止":"FAIL":`-${a.points}`;c.innerHTML=`<span class="ev-badge ${a.instantFail?"fail":""}">${d}</span><span><strong>${l}</strong> — ${h}</span>`,o.append(c)}}document.getElementById("examRetryBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Cs("startBay","exam")});document.getElementById("examPracticeWeakBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Cs(Xd,"practice")});document.getElementById("examCloseBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Jt.reset("practice",Q)});const Nv=document.getElementById("preDriveBar"),Th=document.getElementById("pdCollapseBtn"),Fv=document.getElementById("pdAutoCompleteBtn"),qd=Array.from(document.querySelectorAll(".pd-step-chip[data-pd-step]"));function ar(){const i=Q.preDrive;if(!i)return;const e={1:i.doorLocked,2:i.seatAdjusted,3:i.mirrorsAdjusted,4:i.seatbeltFastened,5:i.brakeAndStartDone,6:i.handbrakeReleased,7:i.rightSignalOn,8:i.fivePointLookDone};let t=1;for(;t<=8&&e[t];)t++;for(const n of qd){const s=Number(n.dataset.pdStep),r=!!e[s];n.classList.toggle("done",r),n.classList.toggle("next-expected",!r&&s===t),n.classList.toggle("order-error",i.orderErrorStep===s)}}function Zl(i,e=!0){rt.unlock();const t=Q.preDrive;if(t){if(e){for(let n=1;n<i;n++)if(!t.completedSteps.includes(n)){t.orderErrorStep=i;break}}t.completedSteps.includes(i)||t.completedSteps.push(i),i===1?(t.doorLocked=!0,rt.playClick(520,.04,.18)):i===2?(t.seatAdjusted=!0,rt.playClick(380,.06,.18)):i===3?(t.mirrorsAdjusted=!0,Q.mirrorTouchTimer=1.1,rt.playClick(680,.04,.16)):i===4?(t.seatbeltFastened=!0,rt.playClick(880,.05,.22)):i===5?(t.brakeAndStartDone=!0,Q.stalled=!1,Q.rpm=860,rt.playClick(460,.06,.2)):i===6?(t.handbrakeReleased=!0,Q.handbrake=!1,Q.gear=Pe.transmission==="AT"?"D":"1",rt.playClick(540,.04,.16)):i===7?(t.rightSignalOn=!0,Q.blinker="right",Q.blinkerTimer=0,Q.blinkerOn=!0,rt.playClick(720,.03,.15)):i===8&&(t.fivePointLookDone=!0,Q.lookAngleRad=55*Math.PI/180,Q.lookedLeftTimestamp=ln,window.setTimeout(()=>{Q.lookAngleRad=-64*Math.PI/180,Q.lookedRightTimestamp=ln},320),window.setTimeout(()=>{Q.lookAngleRad=0},780),rt.playClick(940,.04,.18)),ar()}}qd.forEach(i=>{i.addEventListener("click",()=>{const e=Number(i.dataset.pdStep);e>=1&&e<=8&&Zl(e,!0)})});Fv.addEventListener("click",()=>{Q.preDrive.orderErrorStep=void 0;for(let i=1;i<=8;i++)Zl(i,!1)});Th.addEventListener("click",()=>{const i=Nv.classList.toggle("collapsed");Th.textContent=i?"+":"−"});window.addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)&&i.code.startsWith("Digit")){const e=Number(i.code.replace("Digit",""));e>=1&&e<=8&&Zl(e,!0)}});const jl=document.getElementById("violationFreezeOverlay"),Ov=document.getElementById("strictRuleFreezeChk"),Jd=document.getElementById("vfResumeBtn"),Bv=document.getElementById("vfRetryStationBtn");let Qn=!1;const Rn=[];let Ah=-999;function zv(i,e){if(!i.anyCurbTouch&&!i.anyCurbMount&&!i.poleHit&&!i.obstacleHit&&!(e!=null&&e.pedestrianDanger)&&!(e!=null&&e.trafficCollision)&&ln-Ah>=.25){Ah=ln;const n=Rn[Rn.length-1];(!n||Math.hypot(Q.x-n.x,Q.z-n.z)>.35)&&(Rn.push({x:Q.x,z:Q.z,heading:Q.heading,gear:Q.gear==="R"?Pe.transmission==="AT"?"D":"1":Q.gear}),Rn.length>24&&Rn.shift())}}function Hv(){const i=Hl(Pe.vehicleKind),e=rl(Q,i),t=e.anyCurbMount||e.anyCurbTouch||!!e.poleHit||!!e.obstacleHit;if(t&&Rn.length>0){const n=Math.max(0,Rn.length-5),s=Rn[n];Q.x=s.x,Q.z=s.z,Q.heading=s.heading,Q.gear=s.gear}else t&&(Q.x+=Math.sin(Q.heading)*1.6,Q.z+=Math.cos(Q.heading)*1.6);Q.speedMs=0,Q.steerAngleRad=0,Q.steeringWheelRad=0,Q.stalled=!1,Q.handbrake=!1,Rd(Q,i)}function Vv(i){Qn=!0,Q.speedMs=0;const e=Pe.locale==="ja";document.getElementById("vfTagText").textContent=i.instantFail?e?"🚨 検定中止（一発不合格） · INSTANT FAIL":"🚨 INSTANT FAIL (検定中止)":e?`⚠️ 減点違反 (-${i.points}点) · RULE VIOLATION`:`⚠️ RULE VIOLATION (-${i.points} PTS)`,document.getElementById("vfTitleText").textContent=`${i.labelJa} · ${i.labelEn}`;const t=document.getElementById("vfBadgeText");t.textContent=i.instantFail?"検定中止 / FAIL":`-${i.points} PTS`,t.className=`vf-badge ${i.instantFail?"fail":""}`,document.getElementById("vfDetailJa").textContent=i.detailJa,document.getElementById("vfDetailEn").textContent=i.detailEn,document.getElementById("vfRuleRefJa").textContent=i.ruleRefJa??"",document.getElementById("vfRuleRefEn").textContent=i.ruleRefEn??"",document.getElementById("vfHowToFixJa").textContent=i.howToFixJa??"",document.getElementById("vfHowToFixEn").textContent=i.howToFixEn??"";const n=Jt.getScore();document.getElementById("vfScoreRemainText").textContent=e?`持ち点: ${n} / 100点 (70点以上で合格)`:`Score: ${n} / 100 pts (70 pts to pass)`,Jd.textContent=e?"✅ ルールを理解して車を安全な位置に戻し再開 [Space / Enter]":"✅ I Understand — Unstuck Car & Resume Driving [Space / Enter]",jl.hidden=!1}function $d(){Qn&&(Qn=!1,jl.hidden=!0,Hv())}Jd.addEventListener("click",()=>{rt.unlock(),$d()});Bv.addEventListener("click",()=>{rt.unlock(),Qn=!1,jl.hidden=!0,vo()});document.getElementById("vfOpenRulebookBtn").addEventListener("click",()=>{rt.unlock(),Mo("written")});window.addEventListener("keydown",i=>{Qn&&(i.key==="Enter"||i.key===" "||i.key==="Escape")&&(i.preventDefault(),$d())});const Kl=document.getElementById("rulebookModal"),Yd=document.getElementById("rulebookContentBody");let Gs="predrive";function Mo(i=Gs){rt.unlock(),Gs=i,document.querySelectorAll("[data-rb-tab]").forEach(e=>{e.classList.toggle("active",e.dataset.rbTab===Gs)}),Id(Yd,Gs,Pe.locale),Kl.hidden=!1}document.getElementById("quickRulebookBtn").addEventListener("click",()=>Mo());document.getElementById("openRulebookBtn").addEventListener("click",()=>Mo());document.getElementById("rulebookCloseBtn").addEventListener("click",()=>{Kl.hidden=!0});document.querySelectorAll("[data-rb-tab]").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.rbTab||"predrive";Mo(e)})});Jt.onViolation=i=>{kv(i),rt.playViolationChime(i.instantFail),Dd.announceViolation(i,Pe.locale),Ov.checked&&Vv(i)};Jt.onExamFinish=i=>{Qn||Uv(i)};const Zd=new Lx({onToggleBlinker:i=>{Q.blinker=Q.blinker===i?"off":i,Q.blinkerTimer=0,Q.blinkerOn=Q.blinker!=="off",Q.blinker==="right"&&Q.preDrive&&(Q.preDrive.rightSignalOn=!0,Q.preDrive.completedSteps.includes(7)||Q.preDrive.completedSteps.push(7),ar())},onToggleHandbrake:()=>{Q.handbrake=!Q.handbrake,rt.playClick(420,.04,.16),!Q.handbrake&&Q.preDrive&&(Q.preDrive.handbrakeReleased=!0,Q.preDrive.completedSteps.includes(6)||Q.preDrive.completedSteps.push(6),ar())},onShiftGear:i=>{Ad(Q,i),rt.playClick(620,.03,.14)},onCycleCamera:Fd,onResetVehicle:vo,onToggleMenu:()=>bn(!bs),onIgnition:()=>{Q.stalled=!1,Q.rpm=850},onAnyInteraction:()=>{rt.unlock(),Vd.hidden=!0}});Zd.bindTouchControls($l);function jd(){const i=Pe.locale==="ja";document.documentElement.lang=Pe.locale,bn(bs),document.getElementById("quickLangEnBtn").classList.toggle("is-active",!i),document.getElementById("quickLangJaBtn").classList.toggle("is-active",i),document.getElementById("panelLangEnBtn").style.borderColor=i?"rgba(255,255,255,0.14)":"#34d399",document.getElementById("panelLangJaBtn").style.borderColor=i?"#34d399":"rgba(255,255,255,0.14)",document.getElementById("setupTitleText").textContent=i?"ドライブの準備 (Ready to drive)":"Ready to drive (ドライブの準備)",document.getElementById("setupLeadText").textContent=i?"車両とコースを選び、各教習課題へのワープや100点満点の修了検定を練習できます。":"Choose your vehicle and map, warp to any driving school obstacle, or start the 100-point exam.",document.getElementById("startDrivingBtn").textContent=i?"運転を始める (Start driving)":"Start driving (運転を始める)",document.getElementById("resetBtn").textContent=i?"車両リセット (Reset)":"Reset Vehicle (リセット)",document.getElementById("quickResetBtn").textContent=i?"リセット (O)":"Reset (O)",document.getElementById("lblVehicle").textContent=i?"車種 (Vehicle)":"Vehicle (車種)",document.getElementById("optSedan").textContent=i?"普通車セダン (右ハンドル) · RHD Sedan":"Sedan (RHD Corolla) · 普通車セダン",document.getElementById("optMoto").textContent=i?"普通二輪 (400cc) · Motorcycle":"Motorcycle (400cc) · 普通二輪",document.getElementById("lblTrans").textContent=i?"変速機 (Transmission)":"Transmission (変速機)",document.getElementById("optAT").textContent=i?"AT (オートマ・クリープあり)":"AT (Automatic · Creep)",document.getElementById("optMT").textContent=i?"MT (マニュアル5速)":"MT (Manual 5-Speed)",document.getElementById("lblMap").textContent=i?"コース / 試験場マップ (Course / Map)":"Course / Map (教習コース・試験場)",document.getElementById("modePracticeBtn").textContent=i?"自由練習 (Free Practice)":"Free Practice (自由練習)",document.getElementById("modeExamBtn").textContent=i?"修了検定 100点採点 (Mock Exam)":"Mock Exam 100-pt (修了検定)",document.getElementById("foldStationsTitle").textContent=i?"教習課題ワープ (Kyōshūjo Training Stations)":"Kyōshūjo Training Stations (教習課題ワープ)",document.getElementById("foldTuningTitle").textContent=i?"操作感とサウンド (Handling & sound)":"Handling & sound (操作感とサウンド)",document.getElementById("lblMaxSpeed").textContent=i?"最高速度 (Max Speed)":"Max Speed (最高速度)",document.getElementById("lblVolume").textContent=i?"音量 (Volume)":"Volume (音量)",document.getElementById("lblSteerSens").textContent=i?"ハンドル感度 (Steering Sensitivity)":"Steering Sensitivity (ハンドル感度)",document.getElementById("lblAutoCenter").textContent=i?"ハンドル自動復元 (Auto-center Steering)":"Auto-center Steering (ハンドル自動復元)",document.getElementById("lblMirrorQuality").textContent=i?"画質・ミラー描画 (Graphics & Mirrors)":"Graphics & Mirrors (画質・ミラー描画)",document.getElementById("optMirrorHigh").textContent=i?"高画質・3面ミラー (High · 3 Mirrors)":"High · Real-time 3 Mirrors (高画質)",document.getElementById("optMirrorLow").textContent=i?"標準・バランス (Medium · Balanced)":"Medium · Balanced (標準)",document.getElementById("optMirrorOff").textContent=i?"軽量・省電力 (Low · Save power)":"Low · Save power (軽量)",document.getElementById("lblTouchControls").textContent=i?"タッチ操作パネル表示 (Show touch controls)":"Show mobile touch controls (タッチ操作表示)",document.getElementById("curveTitle").textContent=i?"アクセル特性カーブ (Acceleration Curve)":"Acceleration Curve (アクセル特性)",document.getElementById("curveDesc").textContent=i?"横軸：アクセル入力 ／ 縦軸：駆動出力 (X: Input, Y: Output)":"X axis is throttle input, Y axis is drive output",document.getElementById("curveSoftLbl").textContent=i?"穏やか (Soft)":"Soft (穏やか)",document.getElementById("curveDirectLbl").textContent=i?"ダイレクト (Direct)":"Direct (直接)",document.getElementById("curveInputLbl").textContent=i?"入力 (Input)":"Current Input",document.getElementById("curveOutputLbl").textContent=i?"出力 (Output)":"Current Output",document.getElementById("foldMapTitle").textContent=i?"マップ編集・開始位置 (Map editor & spawn)":"Map editor & spawn (マップ編集・開始位置)",document.getElementById("uploadMapText").textContent=i?"地図アップロード (Upload)":"Upload Map (地図読込)",document.getElementById("setSpawnBtn").textContent=i?"開始位置に登録 (Set Spawn)":"Set Spawn (開始位置)",document.getElementById("viewBtn").textContent=i?"視点切替 (Change View)":"Change View (視点切替)",document.getElementById("copyMapJsonBtn").textContent=i?"JSONコピー (Copy JSON)":"Copy JSON (JSONコピー)",document.getElementById("lblCustomWidth").textContent=i?"マップ横幅 (Map Width m)":"Map Width m (マップ横幅)",document.getElementById("lblMapScale").textContent=i?"縮尺スケール (Map Scale)":"Map Scale (縮尺)",document.getElementById("foldHelpTitle").textContent=i?"操作ガイド (How to drive)":"How to drive (操作ガイド)";const e=document.getElementById("tipsContainer"),t=i?["W/A/S/D または 矢印キー : 運転 (Drive)","Q / E : 左右ウインカー (Signals) · H : ハザード","Space : サイドブレーキ (Handbrake)","Shift / Ctrl : ギア変更 (Shift Gear)","Z / X : 左右の安全確認 (Look Left/Right)","O : 車両リセット (Reset)","V : カメラ視点切替 (Cycle Views)"]:["W/A/S/D or Arrow Keys : Drive (運転)","Q / E : Turn Signals (ウインカー) · H : Hazard","Space : Handbrake (サイドブレーキ)","Shift / Ctrl : Shift Gear (ギア変更)","Z / X : Look Left & Right (左右安全確認)","O : Reset Vehicle (リセット)","V : Cycle Views (視点切替)"];e.innerHTML=t.map(s=>`<span>${s}</span>`).join(""),document.getElementById("helpMiniMapText").textContent=i?"右下のミニマップをクリックで拡大表示し、コース上の任意の場所をクリックするとそこへ車両がワープします。":"Click the mini map in the bottom-right corner to expand it, drag to pan, scroll to zoom, or click any spot to teleport the vehicle.",document.getElementById("foldDataTitle").textContent=i?"走行データ (Driving details)":"Driving details (走行データ)",document.getElementById("lblTelView").textContent=i?"視点 (View):":"View (視点):",document.getElementById("lblTelPos").textContent=i?"位置 (Position):":"Position (位置):",document.getElementById("lblTelHead").textContent=i?"方位 (Heading):":"Heading (方位):",document.getElementById("lblTelSteer").textContent=i?"舵角 (Steering):":"Steering (舵角):",document.getElementById("foldCoursesTitle").textContent=i?"試験場・教習コース一覧 (Built-in Test Center Courses)":"Built-in Test Center Courses (試験場コース一覧)";const n={chase:i?"後方 (Chase)":"Chase (後方)",cockpit:i?"運転席 (Cockpit)":"Cockpit (運転席)",instructor:i?"👨‍✈️ 検定員席 (Instructor)":"👨‍✈️ Instructor (検定員席)",hood:i?"ボンネット (Hood)":"Hood (ボンネット)",orbit:i?"自由 (Free)":"Free (自由)"};ql.forEach(s=>{const r=s.dataset.viewTarget||"chase";s.textContent=n[r]||r}),document.getElementById("quickRulebookBtn").textContent=i?"📖 教本・標識・PDF (Rules)":"📖 Rules & PDF (教本・標識)",document.getElementById("openRulebookBtn").textContent=i?"📖 教本・標識・減点基準・PDF (Rules & PDF)":"📖 Rules, Signs & Study PDF (教本・標識)",document.getElementById("lblStrictFreeze").textContent=i?"🚨 違反時に赤画面で一時停止＆解説 (Red Freeze on Rule Break)":"🚨 Red Freeze & Explain on Rule Break (違反時赤画面停止)",document.getElementById("pdTitleText").textContent=i?"👨‍✈️ 乗車〜発進手順 (Pre-Drive Order — ①〜⑧を順番にクリックまたはキー1〜8)":"👨‍✈️ Pre-Drive Exam Sequence (Click 1–8 in exact order before pulling out)",document.getElementById("pdAutoCompleteBtn").textContent=i?"⚡ 一括完了 (Auto-Complete)":"⚡ Auto-Complete (一括完了)",Kl.hidden||Id(Yd,Gs,Pe.locale),document.getElementById("lblMirrorL").textContent=i?"左ミラー · Left":"Left Mirror · 左",document.getElementById("lblMirrorC").textContent=i?"ルームミラー · Center":"Center Mirror · 中央",document.getElementById("lblMirrorR").textContent=i?"右ミラー · Right":"Right Mirror · 右",document.getElementById("cockpitLampLeft").textContent=i?"← 左合図 (Left)":"← Left (左)",document.getElementById("cockpitLampRight").textContent=i?"右合図 (Right) →":"Right (右) →",document.getElementById("lblHudSignal").textContent=i?"合図 (Signal):":"Signal (合図):",document.getElementById("lblMiniMap").textContent=i?"ミニマップ · Mini Map":"Mini Map · ミニマップ",document.getElementById("lblMiniMapHint").textContent=i?"ドラッグで移動・ホイールで拡大・地点クリックでワープ (Click any point to teleport)":"Hold and drag to pan. Wheel to zoom. Click any point on the course to teleport there.",document.getElementById("firstRunTitle").textContent=i?"運転をはじめましょう (Start driving)":"Start driving (運転をはじめましょう)",document.getElementById("firstRunText").textContent=i?"WASD/矢印キーで走行、Q/Eでウインカー、Spaceでブレーキ、Z/Xで左右目視、Vで視点切替、Oでリセット。":"WASD or arrow keys drive, Q/E signals, Space brakes, Z/X look left & right, V changes view, O resets.",document.getElementById("lblMobileSteerHint").textContent=i?"← 左右スワイプで操舵 (Swipe) →":"← Swipe to steer (スワイプ操舵) →",document.getElementById("lblMobileSigL").textContent=i?"↑ 左 (L)":"↑ Left",document.getElementById("lblMobileSigR").textContent=i?"右 (R) ↓":"Right ↓",document.getElementById("lblMobileGear").textContent=i?"ギア (Gear)":"Gear",document.getElementById("lblMobileBrake").textContent=i?"ブレーキ":"Brake",document.getElementById("lblMobileThrottle").textContent=i?"アクセル":"Throttle",yo(),Yl(Ct.getMode())}function So(i){rt.unlock(),Pe.locale=i,ei(Pe),jd()}document.getElementById("quickLangEnBtn").addEventListener("click",()=>So("en"));document.getElementById("quickLangJaBtn").addEventListener("click",()=>So("ja"));document.getElementById("panelLangEnBtn").addEventListener("click",()=>So("en"));document.getElementById("panelLangJaBtn").addEventListener("click",()=>So("ja"));const Ql=document.getElementById("routeBuilderModal"),lr=document.getElementById("routeBuilderCanvas"),Ne=lr.getContext("2d"),xl=document.getElementById("rbStatusText"),Rh=document.getElementById("rbUploadInput");let vl="waypoint",At=[],jn=[],Ys=[];function ec(){return Qt==="custom"?en.currentSize:{width:ci*2,height:Li*2}}function tc(){Ys.push({waypoints:At.map(i=>({...i})),stamps:jn.map(i=>({...i}))}),Ys.length>30&&Ys.shift()}function Ps(){const i=lr.width,e=lr.height;Ne.clearRect(0,0,i,e);const t=ec(),n=Qt==="custom"?en.getActiveSource():null;if(n)Ne.drawImage(n,0,0,i,e);else{Ne.fillStyle="#1e2f23",Ne.fillRect(0,0,i,e);const r=(_,v)=>[(_/t.width+.5)*i,(v/t.height+.5)*e];Ne.strokeStyle="#475569",Ne.lineWidth=22,Ne.lineCap="round",Ne.strokeRect(i*.08,e*.12,i*.84,e*.76),Ne.beginPath();const[o,a]=r(0,-46),[c,l]=r(0,46),[h,d]=r(-76,0),[u,m]=r(76,0);Ne.moveTo(o,a),Ne.lineTo(c,l),Ne.moveTo(h,d),Ne.lineTo(u,m),Ne.stroke()}const s=(r,o)=>[(r/t.width+.5)*i,(o/t.height+.5)*e];if(At.length>=2){Ne.save(),Ne.strokeStyle="#34d399",Ne.lineWidth=5,Ne.lineCap="round",Ne.lineJoin="round",Ne.beginPath(),At.forEach((r,o)=>{const[a,c]=s(r.x,r.z);o===0?Ne.moveTo(a,c):Ne.lineTo(a,c)}),Ne.stroke();for(let r=0;r<At.length-1;r++){const[o,a]=s(At[r].x,At[r].z),[c,l]=s(At[r+1].x,At[r+1].z),h=(o+c)*.5,d=(a+l)*.5,u=Math.atan2(l-a,c-o);Ne.save(),Ne.translate(h,d),Ne.rotate(u),Ne.fillStyle="#fde047",Ne.beginPath(),Ne.moveTo(8,0),Ne.lineTo(-6,-5),Ne.lineTo(-6,5),Ne.closePath(),Ne.fill(),Ne.restore()}Ne.restore()}At.forEach((r,o)=>{const[a,c]=s(r.x,r.z);Ne.beginPath(),Ne.arc(a,c,13,0,Math.PI*2),Ne.fillStyle=o===0?"#059669":o===At.length-1?"#d62828":"#005bac",Ne.fill(),Ne.lineWidth=2.5,Ne.strokeStyle="#ffffff",Ne.stroke(),Ne.fillStyle="#ffffff",Ne.font="bold 12px sans-serif",Ne.textAlign="center",Ne.textBaseline="middle";const l=o===0?"S":o===At.length-1?"G":String(o);Ne.fillText(l,a,c)});for(const r of jn){const[o,a]=s(r.x,r.z);Ne.save(),Ne.translate(o,a),Ne.fillStyle=r.kind==="stopSign"?"#dc2626":r.kind==="trafficLight"?"#f59e0b":"#ec4899",Ne.beginPath(),Ne.arc(0,0,11,0,Math.PI*2),Ne.fill(),Ne.strokeStyle="#fff",Ne.lineWidth=2,Ne.stroke(),Ne.fillStyle="#fff",Ne.font="bold 10px sans-serif",Ne.textAlign="center",Ne.textBaseline="middle",Ne.fillText(r.kind==="stopSign"?"止":r.kind==="trafficLight"?"信":"P",0,0),Ne.restore()}xl.textContent=Pe.locale==="ja"?`ポイント: ${At.length}点 ／ 3D標識: ${jn.length}個`:`Waypoints: ${At.length} · 3D Stamps: ${jn.length}`}function Kd(){rt.unlock();const i=un.getData();At=i.waypoints.map(e=>({...e})),jn=i.stamps.map(e=>({...e})),Ys=[],Ql.hidden=!1,Ps()}document.getElementById("openRouteBuilderBtn").addEventListener("click",Kd);document.getElementById("quickRouteBuilderBtn").addEventListener("click",Kd);document.getElementById("rbCloseBtn").addEventListener("click",()=>{Ql.hidden=!0});document.querySelectorAll("[data-rb-tool]").forEach(i=>{i.addEventListener("click",()=>{vl=i.dataset.rbTool||"waypoint",document.querySelectorAll("[data-rb-tool]").forEach(e=>{e.classList.toggle("active",e===i)})})});lr.addEventListener("click",i=>{const e=lr.getBoundingClientRect(),t=(i.clientX-e.left)/Math.max(1,e.width),n=(i.clientY-e.top)/Math.max(1,e.height),s=ec(),r=(t-.5)*s.width,o=(n-.5)*s.height;if(tc(),vl==="waypoint")At.push({x:r,z:o,turn:"straight"});else{let a=0;if(At.length>=1){const c=At[At.length-1];a=Math.atan2(-(r-c.x),-(o-c.z))}jn.push({kind:vl,x:r,z:o,heading:a})}Ps()});document.getElementById("rbUndoBtn").addEventListener("click",()=>{const i=Ys.pop();i&&(At=i.waypoints,jn=i.stamps,Ps())});document.getElementById("rbClearBtn").addEventListener("click",()=>{tc(),At=[],jn=[],Ps()});Rh.addEventListener("change",()=>{var t;const i=(t=Rh.files)==null?void 0:t[0];if(!i)return;const e=new FileReader;e.onload=async()=>{const n=String(e.result),s=Math.max(80,Number(ws.value)||260),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Mt=r,await en.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await dr(r),En="custom",Qt="custom",Fi.setKyoshujoVisible(!1),en.setVisible(!0),yo(),Ps()},e.readAsDataURL(i)});document.querySelectorAll("[data-trace-color]").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.traceColor||"red",t=en.getActiveSource();if(!t){xl.textContent=Pe.locale==="ja"?"先にコース図画像をアップロードしてください":"Please upload a route map image first";return}const n=ec(),s=un.autoExtractRouteFromImage(t,n.width,e);if(s.length<2){xl.textContent=Pe.locale==="ja"?"色線が見つかりませんでした。地図上をクリックしてルート点を追加してください":"No matching colored line found — click directly on the map to trace points";return}tc(),At=s,Ps()})});document.getElementById("rbSaveAndDriveBtn").addEventListener("click",()=>{un.setRouteData({waypoints:At,stamps:jn},!0),Ql.hidden=!0,bn(!0);const i=un.getStartPose();i&&(Mt&&Qt==="custom"&&(Mt.startX=i.x,Mt.startZ=i.z,Mt.startHeading=i.heading,dr(Mt)),Oi(i.x,i.z,i.heading,"practice"))});function Gv(i){if(un.setMemoryMode(i),document.querySelectorAll("[data-memory-mode]").forEach(e=>{e.classList.toggle("active",e.dataset.memoryMode===i)}),i==="autodrive"&&un.hasRoute()){const e=un.getStartPose();e&&(Oi(e.x,e.z,e.heading,"practice"),un.resetProgress())}}document.querySelectorAll("[data-memory-mode]").forEach(i=>{i.addEventListener("click",()=>{const e=i.dataset.memoryMode||"guided";Gv(e)})});bx().then(async i=>{i&&(Mt=i,await en.loadFromDataUrl(i.imageDataUrl,i.mapWidth),yo())});jd();bn(!0);window.addEventListener("resize",()=>{cn.setSize(window.innerWidth,window.innerHeight),Ct.resize(window.innerWidth/window.innerHeight)});const Wv=()=>({y:0,slopeX:0,slopeZ:0}),bi=1/120;let Jr=0,Ch=performance.now(),ln=0,Ph=-999,da="";function Qd(i){requestAnimationFrame(Qd);const e=Math.min(.05,Math.max(0,(i-Ch)/1e3));Ch=i,Jr+=e;const n={...Hl(Pe.vehicleKind),maxSpeedMs:ao},s=Zd.getInputState(),r=un.update(e,Q,rs,Pe.locale,ln),o=r.autoDriveInput??s,a={...o,throttle:o.throttle>0?Math.pow(o.throttle,Ii):0};bs||Nd(o.throttle);let c=rl(Q,n);for(Qn&&(Jr=0);Jr>=bi&&!Qn;){if(ln+=bi,rs.update(bi),Cx(Q,a,n,bi,{steeringSensitivity:Pe.steeringSensitivity,autoCenterSteering:Pe.autoCenterSteering,simTimeSec:ln},Qt==="custom"?Wv:void 0),Q.preDrive&&!Q.preDrive.fivePointLookDone&&ln-Q.lookedRightTimestamp<1.5&&(Q.preDrive.fivePointLookDone=!0,Q.preDrive.completedSteps.includes(8)||Q.preDrive.completedSteps.push(8),ar()),Qt==="kyoshujo"){const T=sv.update(bi,Q,rs);c=rl(Q,n),zv(c,T),(c.pushX!==0||c.pushZ!==0)&&(Q.x+=c.pushX,Q.z+=c.pushZ,Rd(Q,n),(c.poleHit||c.obstacleHit)&&(Q.speedMs*=.35,ln-Ph>.6&&(Ph=ln,rt.playThud()))),Jt.update(bi,Q,c,rs,T)}Jr-=bi}const l=Jt.getCurrentWaypoint(),h=l?{x:l.x,z:l.z}:null;l&&l.id!==da?(da=l.id,Dd.speak(l.instructionJa,l.instructionEn,Pe.locale)):l||(da=""),Yx(yn,Q,Pe.vehicleKind),Fi.updateShadowFocus(Q.x,Q.z),Fi.updateDynamic(rs,h,ln);const d=rs.getRailroadState();rt.update(Q,Qt==="kyoshujo"&&d.isWarningActive,ln);const u=Math.abs(Q.speedMs),m=Math.pow(St.clamp((u-6)/14,0,1),1.8);fv.style.opacity=(m*.75).toFixed(3),pv.style.opacity=(m*.88).toFixed(3),Ct.update(e,Q,Pe.vehicleKind,yn,cn,Dn);const _=!bs||mi;Ct.renderPiPMirrors(cn,Dn,Q,av,lv,cv,_);const v=Qt==="kyoshujo"?{width:ci*2,height:Li*2}:en.currentSize;Ct.renderPiPMiniMap(cn,Dn,tn,Q,v,mi,lo,Wl,Xl),cn.setViewport(0,0,window.innerWidth,window.innerHeight),cn.setScissorTest(!1),cn.render(Dn,Ct.camera);const g=Pe.locale==="ja";gv.textContent=(u*3.6).toFixed(1),_v.textContent=Q.gear,vv.textContent=`${Q.x.toFixed(1)}, ${Q.z.toFixed(1)}`;const p=St.radToDeg(Q.heading);yv.textContent=`${p.toFixed(1)}° / ${Q.heading.toFixed(4)} rad`;const S=Math.round(St.radToDeg(Q.steeringWheelRad));Mv.textContent=String(S),mv.style.transform=`rotate(${-Q.steeringWheelRad}rad)`;const M=Q.blinkerOn&&(Q.blinker==="left"||Q.blinker==="hazard"),x=Q.blinkerOn&&(Q.blinker==="right"||Q.blinker==="hazard");dv.classList.toggle("is-active",M),uv.classList.toggle("is-active",x),Sv.dataset.signal=Q.blinker,Ev.textContent=Q.blinker==="left"?g?"左合図":"Left":Q.blinker==="right"?g?"右合図":"Right":Q.blinker==="hazard"?"Hazard":"Off",yh.textContent=String(Jt.getScore()),yh.className=`score-num ${Jt.getScore()<70?"danger":""}`;const y=Jt.getMode()==="exam";bv.textContent=y?qn(Pe.locale,"modeExam"):qn(Pe.locale,"modePractice");const b=Jt.getWaypointProgress();if(r.bannerText)Wr.textContent=r.bannerText;else if(Qt==="custom"){const T=oo.find(C=>C.id===En);Wr.textContent=T?g?`${T.nameJa} コース練習中`:`Practicing: ${T.nameEn}`:g?"カスタム地図コース走行中":"Driving custom course map"}else if(l)Wr.textContent=`[${b.current+1}/${b.total}] ${g?l.instructionJa:l.instructionEn}`;else{const T=Cd[Es];Wr.textContent=`${g?T.titleJa:T.titleEn}: ${g?T.descJa:T.descEn}`}wv.hidden=!Q.stalled,["FL","FR","RL","RR"].forEach(T=>{const C=c.wheels[T],w=Tv[T];w.classList.toggle("mount",C.curbMount),w.classList.toggle("touch",!C.curbMount&&C.curbTouch),w.classList.toggle("close",!C.curbMount&&!C.curbTouch&&C.proximity>.35)})}requestAnimationFrame(Qd);
