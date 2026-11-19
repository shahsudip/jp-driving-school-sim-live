var Eu=Object.defineProperty;var bu=(i,t,e)=>t in i?Eu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var wt=(i,t,e)=>bu(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ja="180",$i={ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tu=0,Ul=1,wu=2,th=1,eh=2,In=3,ii=0,We=1,Le=2,Qn=0,Ki=1,Nl=2,Ol=3,Fl=4,Au=5,mi=100,Ru=101,Cu=102,Pu=103,Lu=104,Iu=200,Du=201,Uu=202,Nu=203,Xo=204,Yo=205,Ou=206,Fu=207,Bu=208,ku=209,zu=210,Hu=211,Vu=212,Gu=213,Wu=214,qo=0,Zo=1,jo=2,ns=3,Jo=4,$o=5,Ko=6,Qo=7,nh=0,Xu=1,Yu=2,ti=0,qu=1,Zu=2,ju=3,Ju=4,$u=5,Ku=6,Qu=7,ih=300,is=301,ss=302,ta=303,ea=304,Jr=306,Us=1e3,xi=1001,na=1002,fn=1003,td=1004,Ks=1005,_n=1006,io=1007,vi=1008,yn=1009,sh=1010,rh=1011,Ns=1012,$a=1013,Ei=1014,Fn=1015,us=1016,Ka=1017,Qa=1018,Os=1020,oh=35902,ah=35899,lh=1021,ch=1022,un=1023,Fs=1026,Bs=1027,hh=1028,tl=1029,uh=1030,el=1031,nl=1033,Pr=33776,Lr=33777,Ir=33778,Dr=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,la=37492,ca=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,xa=37816,va=37817,Ma=37818,ya=37819,Sa=37820,Ea=37821,ba=36492,Ta=36494,wa=36495,Aa=36283,Ra=36284,Ca=36285,Pa=36286,ed=3200,nd=3201,dh=0,id=1,$n="",Se="srgb",rs="srgb-linear",Nr="linear",ae="srgb",Ri=7680,Bl=519,sd=512,rd=513,od=514,fh=515,ad=516,ld=517,cd=518,hd=519,La=35044,kl="300 es",xn=2e3,Or=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const As=Math.PI/180,ks=180/Math.PI;function Mn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Jt(i,t,e){return Math.max(t,Math.min(e,i))}function il(i,t){return(i%t+t)%t}function ud(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function dd(i,t,e){return i!==t?(e-i)/(t-i):0}function Rs(i,t,e){return(1-e)*i+e*t}function fd(i,t,e,n){return Rs(i,t,1-Math.exp(-e*n))}function pd(i,t=1){return t-Math.abs(il(i,t*2)-t)}function md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _d(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xd(i,t){return i+Math.random()*(t-i)}function vd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(zl=i);let t=zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yd(i){return i*As}function Sd(i){return i*ks}function Ed(i){return(i&i-1)===0&&i!==0}function bd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Td(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),p=o((t-n)/2),g=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*g,a*l);break;case"YXY":i.set(c*g,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ae={DEG2RAD:As,RAD2DEG:ks,generateUUID:Mn,clamp:Jt,euclideanModulo:il,mapLinear:ud,inverseLerp:dd,lerp:Rs,damp:fd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:_d,randFloat:xd,randFloatSpread:vd,seededRandom:Md,degToRad:yd,radToDeg:Sd,isPowerOfTwo:Ed,ceilPowerOfTwo:bd,floorPowerOfTwo:Td,setQuaternionFromProperEuler:wd,normalize:re,denormalize:hn};class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bi{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],g=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=_,t[e+3]=v;return}if(u!==v||c!==p||l!==g||h!==_){let m=1-a;const f=c*p+l*g+h*_+u*v,y=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const S=Math.sqrt(M),E=Math.atan2(S,f*y);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const x=a*y;if(c=c*m+p*x,l=l*m+g*x,h=h*m+_*x,u=u*m+v*x,m===1-a){const S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],p=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*g-l*p,t[e+1]=c*_+h*p+l*u-a*g,t[e+2]=l*_+h*g+a*p-c*u,t[e+3]=h*_-a*u-c*p-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),p=c(n/2),g=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=p*h*u+l*g*_,this._y=l*g*u-p*h*_,this._z=l*h*_+p*g*u,this._w=l*h*u-p*g*_;break;case"YXZ":this._x=p*h*u+l*g*_,this._y=l*g*u-p*h*_,this._z=l*h*_-p*g*u,this._w=l*h*u+p*g*_;break;case"ZXY":this._x=p*h*u-l*g*_,this._y=l*g*u+p*h*_,this._z=l*h*_+p*g*u,this._w=l*h*u-p*g*_;break;case"ZYX":this._x=p*h*u-l*g*_,this._y=l*g*u+p*h*_,this._z=l*h*_-p*g*u,this._w=l*h*u+p*g*_;break;case"YZX":this._x=p*h*u+l*g*_,this._y=l*g*u+p*h*_,this._z=l*h*_-p*g*u,this._w=l*h*u-p*g*_;break;case"XZY":this._x=p*h*u-l*g*_,this._y=l*g*u-p*h*_,this._z=l*h*_+p*g*u,this._w=l*h*u+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>u){const g=2*Math.sqrt(1+n-a-u);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>u){const g=2*Math.sqrt(1+a-n-u);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+u-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Jt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Hl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Hl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const so=new I,Hl=new bi;class jt{constructor(t,e,n,s,r,o,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],g=n[5],_=n[8],v=s[0],m=s[3],f=s[6],y=s[1],M=s[4],x=s[7],S=s[2],E=s[5],R=s[8];return r[0]=o*v+a*y+c*S,r[3]=o*m+a*M+c*E,r[6]=o*f+a*x+c*R,r[1]=l*v+h*y+u*S,r[4]=l*m+h*M+u*E,r[7]=l*f+h*x+u*R,r[2]=p*v+g*y+_*S,r[5]=p*m+g*M+_*E,r[8]=p*f+g*x+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,p=a*c-h*r,g=l*r-o*c,_=e*u+n*p+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=p*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=g*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ro.makeScale(t,e)),this}rotate(t){return this.premultiply(ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ro=new jt;function ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ad(){const i=Fr("canvas");return i.style.display="block",i}const Vl={};function zs(i){i in Vl||(Vl[i]=!0,console.warn(i))}function Rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Gl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wl=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cd(){const i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ae&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$n?Nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:t,whitePoint:n,transfer:Nr,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:Gl,fromXYZ:Wl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),i}const ie=Cd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ci;class Pd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ci===void 0&&(Ci=Fr("canvas")),Ci.width=t.width,Ci.height=t.height;const s=Ci.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ci}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ld=0;class sl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Mn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(oo(s[o].image)):r.push(oo(s[o]))}else r=oo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function oo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Id=0;const ao=new I;class Fe extends wi{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=xi,s=xi,r=_n,o=vi,a=un,c=yn,l=Fe.DEFAULT_ANISOTROPY,h=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=Mn(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ao).x}get height(){return this.source.getSize(ao).y}get depth(){return this.source.getSize(ao).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=ih;Fe.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],g=c[5],_=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,x=(g+1)/2,S=(f+1)/2,E=(h+p)/4,R=(u+v)/4,P=(_+m)/4;return M>x&&M>S?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=E/n,r=R/n):x>S?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=P/s):S<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),n=R/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(u-v)/y,this.z=(p-h)/y,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Jt(this.x,t.x,e.x),this.y=Jt(this.y,t.y,e.y),this.z=Jt(this.z,t.z,e.z),this.w=Jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Jt(this.x,t,e),this.y=Jt(this.y,t,e),this.z=Jt(this.z,t,e),this.w=Jt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dd extends wi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Fe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new sl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends Dd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class mh extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ud extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(on.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(on.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=on.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,on):on.fromBufferAttribute(r,o),on.applyMatrix4(t.matrixWorld),this.expandByPoint(on);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox)),Qs.applyMatrix4(t.matrixWorld),this.union(Qs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,on),on.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),tr.subVectors(this.max,gs),Pi.subVectors(t.a,gs),Li.subVectors(t.b,gs),Ii.subVectors(t.c,gs),Gn.subVectors(Li,Pi),Wn.subVectors(Ii,Li),li.subVectors(Pi,Ii);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-li.z,li.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,li.z,0,-li.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-li.y,li.x,0];return!lo(e,Pi,Li,Ii,tr)||(e=[1,0,0,0,1,0,0,0,1],!lo(e,Pi,Li,Ii,tr))?!1:(er.crossVectors(Gn,Wn),e=[er.x,er.y,er.z],lo(e,Pi,Li,Ii,tr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,on).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(on).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],on=new I,Qs=new qs,Pi=new I,Li=new I,Ii=new I,Gn=new I,Wn=new I,li=new I,gs=new I,tr=new I,er=new I,ci=new I;function lo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ci.fromArray(i,r);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Nd=new qs,_s=new I,co=new I;class rl{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(co)),this.expandByPoint(_s.copy(t.center).sub(co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Rn=new I,ho=new I,nr=new I,Xn=new I,uo=new I,ir=new I,fo=new I;class gh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ho.copy(t).add(e).multiplyScalar(.5),nr.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(ho);const r=t.distanceTo(e)*.5,o=-this.direction.dot(nr),a=Xn.dot(this.direction),c=-Xn.dot(nr),l=Xn.lengthSq(),h=Math.abs(1-o*o);let u,p,g,_;if(h>0)if(u=o*c-a,p=o*a-c,_=r*h,u>=0)if(p>=-_)if(p<=_){const v=1/h;u*=v,p*=v,g=u*(u+o*p+2*a)+p*(o*u+p+2*c)+l}else p=r,u=Math.max(0,-(o*p+a)),g=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(o*p+a)),g=-u*u+p*(p+2*c)+l;else p<=-_?(u=Math.max(0,-(-o*r+a)),p=u>0?-r:Math.min(Math.max(-r,-c),r),g=-u*u+p*(p+2*c)+l):p<=_?(u=0,p=Math.min(Math.max(-r,-c),r),g=p*(p+2*c)+l):(u=Math.max(0,-(o*r+a)),p=u>0?r:Math.min(Math.max(-r,-c),r),g=-u*u+p*(p+2*c)+l);else p=o>0?-r:r,u=Math.max(0,-(o*p+a)),g=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ho).addScaledVector(nr,p),g}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){uo.subVectors(e,t),ir.subVectors(n,t),fo.crossVectors(uo,ir);let o=this.direction.dot(fo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);const c=a*this.direction.dot(ir.crossVectors(Xn,ir));if(c<0)return null;const l=a*this.direction.dot(uo.cross(Xn));if(l<0||c+l>o)return null;const h=-a*Xn.dot(fo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,e,n,s,r,o,a,c,l,h,u,p,g,_,v,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,p,g,_,v,m)}set(t,e,n,s,r,o,a,c,l,h,u,p,g,_,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=g,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=o*h,g=o*u,_=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=g+_*l,e[5]=p-v*l,e[9]=-a*c,e[2]=v-p*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const p=c*h,g=c*u,_=l*h,v=l*u;e[0]=p+v*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=v+p*a,e[10]=o*c}else if(t.order==="ZXY"){const p=c*h,g=c*u,_=l*h,v=l*u;e[0]=p-v*a,e[4]=-o*u,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=v-p*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const p=o*h,g=o*u,_=a*h,v=a*u;e[0]=c*h,e[4]=_*l-g,e[8]=p*l+v,e[1]=c*u,e[5]=v*l+p,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const p=o*c,g=o*l,_=a*c,v=a*l;e[0]=c*h,e[4]=v-p*u,e[8]=_*u+g,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*u+_,e[10]=p-v*u}else if(t.order==="XZY"){const p=o*c,g=o*l,_=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+v,e[5]=o*h,e[9]=g*u-_,e[2]=_*u-g,e[6]=a*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Od,t,Fd)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Yn.crossVectors(n,qe),Yn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Yn.crossVectors(n,qe)),Yn.normalize(),sr.crossVectors(qe,Yn),s[0]=Yn.x,s[4]=sr.x,s[8]=qe.x,s[1]=Yn.y,s[5]=sr.y,s[9]=qe.y,s[2]=Yn.z,s[6]=sr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],g=n[13],_=n[2],v=n[6],m=n[10],f=n[14],y=n[3],M=n[7],x=n[11],S=n[15],E=s[0],R=s[4],P=s[8],T=s[12],b=s[1],U=s[5],k=s[9],V=s[13],J=s[2],W=s[6],j=s[10],et=s[14],Y=s[3],pt=s[7],dt=s[11],Mt=s[15];return r[0]=o*E+a*b+c*J+l*Y,r[4]=o*R+a*U+c*W+l*pt,r[8]=o*P+a*k+c*j+l*dt,r[12]=o*T+a*V+c*et+l*Mt,r[1]=h*E+u*b+p*J+g*Y,r[5]=h*R+u*U+p*W+g*pt,r[9]=h*P+u*k+p*j+g*dt,r[13]=h*T+u*V+p*et+g*Mt,r[2]=_*E+v*b+m*J+f*Y,r[6]=_*R+v*U+m*W+f*pt,r[10]=_*P+v*k+m*j+f*dt,r[14]=_*T+v*V+m*et+f*Mt,r[3]=y*E+M*b+x*J+S*Y,r[7]=y*R+M*U+x*W+S*pt,r[11]=y*P+M*k+x*j+S*dt,r[15]=y*T+M*V+x*et+S*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],g=t[14],_=t[3],v=t[7],m=t[11],f=t[15];return _*(+r*c*u-s*l*u-r*a*p+n*l*p+s*a*g-n*c*g)+v*(+e*c*g-e*l*p+r*o*p-s*o*g+s*l*h-r*c*h)+m*(+e*l*u-e*a*g-r*o*u+n*o*g+r*a*h-n*l*h)+f*(-s*a*h-e*c*u+e*a*p+s*o*u-n*o*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],g=t[11],_=t[12],v=t[13],m=t[14],f=t[15],y=u*m*l-v*p*l+v*c*g-a*m*g-u*c*f+a*p*f,M=_*p*l-h*m*l-_*c*g+o*m*g+h*c*f-o*p*f,x=h*v*l-_*u*l+_*a*g-o*v*g-h*a*f+o*u*f,S=_*u*c-h*v*c-_*a*p+o*v*p+h*a*m-o*u*m,E=e*y+n*M+s*x+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=y*R,t[1]=(v*p*r-u*m*r-v*s*g+n*m*g+u*s*f-n*p*f)*R,t[2]=(a*m*r-v*c*r+v*s*l-n*m*l-a*s*f+n*c*f)*R,t[3]=(u*c*r-a*p*r-u*s*l+n*p*l+a*s*g-n*c*g)*R,t[4]=M*R,t[5]=(h*m*r-_*p*r+_*s*g-e*m*g-h*s*f+e*p*f)*R,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*f-e*c*f)*R,t[7]=(o*p*r-h*c*r+h*s*l-e*p*l-o*s*g+e*c*g)*R,t[8]=x*R,t[9]=(_*u*r-h*v*r-_*n*g+e*v*g+h*n*f-e*u*f)*R,t[10]=(o*v*r-_*a*r+_*n*l-e*v*l-o*n*f+e*a*f)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*g-e*a*g)*R,t[12]=S*R,t[13]=(h*v*s-_*u*s+_*n*p-e*v*p-h*n*m+e*u*m)*R,t[14]=(_*a*s-o*v*s-_*n*c+e*v*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*p+e*a*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,p=r*l,g=r*h,_=r*u,v=o*h,m=o*u,f=a*u,y=c*l,M=c*h,x=c*u,S=n.x,E=n.y,R=n.z;return s[0]=(1-(v+f))*S,s[1]=(g+x)*S,s[2]=(_-M)*S,s[3]=0,s[4]=(g-x)*E,s[5]=(1-(p+f))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(_+M)*R,s[9]=(m-y)*R,s[10]=(1-(p+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const o=Di.set(s[4],s[5],s[6]).length(),a=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],an.copy(this);const l=1/r,h=1/o,u=1/a;return an.elements[0]*=l,an.elements[1]*=l,an.elements[2]*=l,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=u,an.elements[9]*=u,an.elements[10]*=u,e.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=xn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),p=(e+t)/(e-t),g=(n+s)/(n-s);let _,v;if(c)_=r/(o-r),v=o*r/(o-r);else if(a===xn)_=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Or)_=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=xn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),p=-(e+t)/(e-t),g=-(n+s)/(n-s);let _,v;if(c)_=1/(o-r),v=o/(o-r);else if(a===xn)_=-2/(o-r),v=-(o+r)/(o-r);else if(a===Or)_=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new I,an=new ge,Od=new I(0,0,0),Fd=new I(1,1,1),Yn=new I,sr=new I,qe=new I,Xl=new ge,Yl=new bi;class Sn{constructor(t=0,e=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yl.setFromEuler(this),this.setFromQuaternion(Yl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const ql=new I,Ui=new bi,Cn=new ge,rr=new I,xs=new I,kd=new I,zd=new bi,Zl=new I(1,0,0),jl=new I(0,1,0),Jl=new I(0,0,1),$l={type:"added"},Hd={type:"removed"},Ni={type:"childadded",child:null},po={type:"childremoved",child:null};class De extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=De.DEFAULT_UP.clone();const t=new I,e=new Sn,n=new bi,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ge},normalMatrix:{value:new jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=De.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(Zl,t)}rotateY(t){return this.rotateOnAxis(jl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Zl,t)}translateY(t){return this.translateOnAxis(jl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(xs,rr,this.up):Cn.lookAt(rr,xs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($l),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Hd),po.child=t,this.dispatchEvent(po),po.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($l),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}De.DEFAULT_UP=new I(0,1,0);De.DEFAULT_MATRIX_AUTO_UPDATE=!0;De.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new I,Pn=new I,mo=new I,Ln=new I,Oi=new I,Fi=new I,Kl=new I,go=new I,_o=new I,xo=new I,vo=new pe,Mo=new pe,yo=new pe;class rn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ln.subVectors(t,e),s.cross(ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ln.subVectors(s,e),Pn.subVectors(n,e),mo.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Pn),c=ln.dot(mo),l=Pn.dot(Pn),h=Pn.dot(mo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const p=1/u,g=(l*c-a*h)*p,_=(o*h-a*c)*p;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return vo.setScalar(0),Mo.setScalar(0),yo.setScalar(0),vo.fromBufferAttribute(t,e),Mo.fromBufferAttribute(t,n),yo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(vo,r.x),o.addScaledVector(Mo,r.y),o.addScaledVector(yo,r.z),o}static isFrontFacing(t,e,n,s){return ln.subVectors(n,e),Pn.subVectors(t,e),ln.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),ln.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Oi.subVectors(s,n),Fi.subVectors(r,n),go.subVectors(t,n);const c=Oi.dot(go),l=Fi.dot(go);if(c<=0&&l<=0)return e.copy(n);_o.subVectors(t,s);const h=Oi.dot(_o),u=Fi.dot(_o);if(h>=0&&u<=h)return e.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Oi,o);xo.subVectors(t,r);const g=Oi.dot(xo),_=Fi.dot(xo);if(_>=0&&g<=_)return e.copy(r);const v=g*l-c*_;if(v<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Fi,a);const m=h*_-g*u;if(m<=0&&u-h>=0&&g-_>=0)return Kl.subVectors(r,s),a=(u-h)/(u-h+(g-_)),e.copy(s).addScaledVector(Kl,a);const f=1/(m+v+p);return o=v*f,a=p*f,e.copy(n).addScaledVector(Oi,o).addScaledVector(Fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},or={h:0,s:0,l:0};function So(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=il(t,1),e=Jt(e,0,1),n=Jt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=So(o,r,t+1/3),this.g=So(o,r,t),this.b=So(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){const n=xh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return ie.workingToColorSpace(Ne.copy(this),t),Math.round(Jt(Ne.r*255,0,255))*65536+Math.round(Jt(Ne.g*255,0,255))*256+Math.round(Jt(Ne.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,r=Ne.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Se){ie.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(or);const n=Rs(qn.h,or.h,e),s=Rs(qn.s,or.s,e),r=Rs(qn.l,or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Kt;Kt.NAMES=xh;let Vd=0;class ds extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ki,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=Yo,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==Yo&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cn extends ds{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new I,ar=new ht;let Gd=0;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),t}}class vh extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mh extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class qt extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Wd=0;const Qe=new ge,Eo=new De,Bi=new I,Ze=new qs,vs=new qs,Pe=new I;class me extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?Mh:vh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return Eo.lookAt(t),Eo.updateMatrix(),this.applyMatrix4(Eo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(Ze.min,vs.min),Ze.expandByPoint(Pe),Pe.addVectors(Ze.max,vs.max),Ze.expandByPoint(Pe)):(Ze.expandByPoint(vs.min),Ze.expandByPoint(vs.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pe.fromBufferAttribute(a,l),c&&(Bi.fromBufferAttribute(t,l),Pe.add(Bi)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,p=new ht,g=new ht,_=new ht,v=new I,m=new I;function f(P,T,b){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),p.fromBufferAttribute(r,P),g.fromBufferAttribute(r,T),_.fromBufferAttribute(r,b),h.sub(l),u.sub(l),g.sub(p),_.sub(p);const U=1/(g.x*_.y-_.x*g.y);isFinite(U)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(U),m.copy(u).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(U),a[P].add(v),a[T].add(v),a[b].add(v),c[P].add(m),c[T].add(m),c[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,T=y.length;P<T;++P){const b=y[P],U=b.start,k=b.count;for(let V=U,J=U+k;V<J;V+=3)f(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const M=new I,x=new I,S=new I,E=new I;function R(P){S.fromBufferAttribute(s,P),E.copy(S);const T=a[P];M.copy(T),M.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(E,T);const U=x.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,U)}for(let P=0,T=y.length;P<T;++P){const b=y[P],U=b.start,k=b.count;for(let V=U,J=U+k;V<J;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let p=0,g=t.count;p<g;p+=3){const _=t.getX(p+0),v=t.getX(p+1),m=t.getX(p+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,g=e.count;p<g;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,p=new l.constructor(c.length*h);let g=0,_=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?g=c[v]*a.data.stride+a.offset:g=c[v]*h;for(let f=0;f<h;f++)p[_++]=l[g++]}return new pn(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const p=l[h],g=t(p,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const g=l[u];h.push(g.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,g=u.length;p<g;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ql=new ge,hi=new gh,lr=new rl,tc=new I,cr=new I,hr=new I,ur=new I,bo=new I,dr=new I,ec=new I,fr=new I;class Dt extends De{constructor(t=new me,e=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){dr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(bo.fromBufferAttribute(u,t),o?dr.addScaledVector(bo,h):dr.addScaledVector(bo.sub(e),h))}e.add(dr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),hi.copy(t.ray).recast(t.near),!(lr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(lr,tc)===null||hi.origin.distanceToSquared(tc)>(t.far-t.near)**2))&&(Ql.copy(r).invert(),hi.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],f=o[m.materialIndex],y=Math.max(m.start,g.start),M=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let x=y,S=M;x<S;x+=3){const E=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);s=pr(this,f,t,n,l,h,u,E,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=_,f=v;m<f;m+=3){const y=a.getX(m),M=a.getX(m+1),x=a.getX(m+2);s=pr(this,o,t,n,l,h,u,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,v=p.length;_<v;_++){const m=p[_],f=o[m.materialIndex],y=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let x=y,S=M;x<S;x+=3){const E=x,R=x+1,P=x+2;s=pr(this,f,t,n,l,h,u,E,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),v=Math.min(c.count,g.start+g.count);for(let m=_,f=v;m<f;m+=3){const y=m,M=m+1,x=m+2;s=pr(this,o,t,n,l,h,u,y,M,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Xd(i,t,e,n,s,r,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ii,a),c===null)return null;fr.copy(a),fr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fr);return l<e.near||l>e.far?null:{distance:l,point:fr.clone(),object:i}}function pr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,cr),i.getVertexPosition(c,hr),i.getVertexPosition(l,ur);const h=Xd(i,t,e,n,cr,hr,ur,ec);if(h){const u=new I;rn.getBarycoord(ec,cr,hr,ur,u),s&&(h.uv=rn.getInterpolatedAttribute(s,a,c,l,u,new ht)),r&&(h.uv1=rn.getInterpolatedAttribute(r,a,c,l,u,new ht)),o&&(h.normal=rn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a,b:c,c:l,normal:new I,materialIndex:0};rn.getNormal(cr,hr,ur,p.normal),h.face=p,h.barycoord=u}return h}class he extends me{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let p=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function _(v,m,f,y,M,x,S,E,R,P,T){const b=x/R,U=S/P,k=x/2,V=S/2,J=E/2,W=R+1,j=P+1;let et=0,Y=0;const pt=new I;for(let dt=0;dt<j;dt++){const Mt=dt*U-V;for(let Nt=0;Nt<W;Nt++){const Yt=Nt*b-k;pt[v]=Yt*y,pt[m]=Mt*M,pt[f]=J,l.push(pt.x,pt.y,pt.z),pt[v]=0,pt[m]=0,pt[f]=E>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Nt/R),u.push(1-dt/P),et+=1}}for(let dt=0;dt<P;dt++)for(let Mt=0;Mt<R;Mt++){const Nt=p+Mt+W*dt,Yt=p+Mt+W*(dt+1),Qt=p+(Mt+1)+W*(dt+1),Zt=p+(Mt+1)+W*dt;c.push(Nt,Yt,Zt),c.push(Yt,Qt,Zt),Y+=6}a.addGroup(g,Y,T),g+=Y,p+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function Yd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function yh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Sh={clone:os,merge:ze};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends ds{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Eh extends De{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new I,nc=new ht,ic=new ht;class Oe extends Eh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,nc,ic),e.subVectors(ic,nc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,zi=1;class jd extends De{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oe(ki,zi,t,e);s.layers=this.layers,this.add(s);const r=new Oe(ki,zi,t,e);r.layers=this.layers,this.add(r);const o=new Oe(ki,zi,t,e);o.layers=this.layers,this.add(o);const a=new Oe(ki,zi,t,e);a.layers=this.layers,this.add(a);const c=new Oe(ki,zi,t,e);c.layers=this.layers,this.add(c);const l=new Oe(ki,zi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class bh extends Fe{constructor(t=[],e=is,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jd extends si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new he(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Qn});r.uniforms.tEquirect.value=e;const o=new Dt(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=_n),new jd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class fe extends De{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $d={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($d)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ol{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new ol(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kd extends De{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Qd{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new I;class Br{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=hn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),s=re(s,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Th extends ds{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const Ms=new I,Vi=new I,Gi=new I,Wi=new ht,ys=new ht,wh=new ge,mr=new I,Ss=new I,gr=new I,sc=new ht,wo=new ht,rc=new ht;class tf extends De{constructor(t=new Th){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new me;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Qd(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Br(n,3,0,!1)),Hi.setAttribute("uv",new Br(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new ht(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),wh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Gi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;_r(mr.set(-.5,-.5,0),Gi,o,Vi,s,r),_r(Ss.set(.5,-.5,0),Gi,o,Vi,s,r),_r(gr.set(.5,.5,0),Gi,o,Vi,s,r),sc.set(0,0),wo.set(1,0),rc.set(1,1);let a=t.ray.intersectTriangle(mr,Ss,gr,!1,Ms);if(a===null&&(_r(Ss.set(-.5,.5,0),Gi,o,Vi,s,r),wo.set(0,1),a=t.ray.intersectTriangle(mr,gr,Ss,!1,Ms),a===null))return;const c=t.ray.origin.distanceTo(Ms);c<t.near||c>t.far||e.push({distance:c,point:Ms.clone(),uv:rn.getInterpolation(Ms,mr,Ss,gr,sc,wo,rc,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _r(i,t,e,n,s,r){Wi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ys.x=r*Wi.x-s*Wi.y,ys.y=s*Wi.x+r*Wi.y):ys.copy(Wi),i.copy(t),i.x+=ys.x,i.y+=ys.y,i.applyMatrix4(wh)}const Ao=new I,ef=new I,nf=new jt;class Nn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ao.subVectors(n,e).cross(ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ao),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||nf.getNormalMatrix(t),s=this.coplanarPoint(Ao).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new rl,sf=new ht(.5,.5),xr=new I;class al{constructor(t=new Nn,e=new Nn,n=new Nn,s=new Nn,r=new Nn,o=new Nn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],p=r[6],g=r[7],_=r[8],v=r[9],m=r[10],f=r[11],y=r[12],M=r[13],x=r[14],S=r[15];if(s[0].setComponents(l-o,g-h,f-_,S-y).normalize(),s[1].setComponents(l+o,g+h,f+_,S+y).normalize(),s[2].setComponents(l+a,g+u,f+v,S+M).normalize(),s[3].setComponents(l-a,g-u,f-v,S-M).normalize(),n)s[4].setComponents(c,p,m,x).normalize(),s[5].setComponents(l-c,g-p,f-m,S-x).normalize();else if(s[4].setComponents(l-c,g-p,f-m,S-x).normalize(),e===xn)s[5].setComponents(l+c,g+p,f+m,S+x).normalize();else if(e===Or)s[5].setComponents(c,p,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(t){ui.center.set(0,0,0);const e=sf.distanceTo(t.center);return ui.radius=.7071067811865476+e,ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(xr.x=s.normal.x>0?t.max.x:t.min.x,xr.y=s.normal.y>0?t.max.y:t.min.y,xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jn extends Fe{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ah extends Fe{constructor(t,e,n=Ei,s,r,o,a=fn,c=fn,l,h=Fs,u=1){if(h!==Fs&&h!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:u};super(p,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Rh extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Si extends me{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new ht;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const g=n+u/e*s;l.x=t*Math.cos(g),l.y=t*Math.sin(g),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(o,3)),this.setAttribute("normal",new qt(a,3)),this.setAttribute("uv",new qt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ue extends me{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],g=[];let _=0;const v=[],m=n/2;let f=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(g,2));function y(){const x=new I,S=new I;let E=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const T=[],b=P/r,U=b*(e-t)+t;for(let k=0;k<=s;k++){const V=k/s,J=V*c+a,W=Math.sin(J),j=Math.cos(J);S.x=U*W,S.y=-b*n+m,S.z=U*j,u.push(S.x,S.y,S.z),x.set(W,R,j).normalize(),p.push(x.x,x.y,x.z),g.push(V,1-b),T.push(_++)}v.push(T)}for(let P=0;P<s;P++)for(let T=0;T<r;T++){const b=v[T][P],U=v[T+1][P],k=v[T+1][P+1],V=v[T][P+1];(t>0||T!==0)&&(h.push(b,U,V),E+=3),(e>0||T!==r-1)&&(h.push(U,k,V),E+=3)}l.addGroup(f,E,0),f+=E}function M(x){const S=_,E=new ht,R=new I;let P=0;const T=x===!0?t:e,b=x===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*b,0),p.push(0,b,0),g.push(.5,.5),_++;const U=_;for(let k=0;k<=s;k++){const J=k/s*c+a,W=Math.cos(J),j=Math.sin(J);R.x=T*j,R.y=m*b,R.z=T*W,u.push(R.x,R.y,R.z),p.push(0,b,0),E.x=W*.5+.5,E.y=j*.5*b+.5,g.push(E.x,E.y),_++}for(let k=0;k<s;k++){const V=S+k,J=U+k;x===!0?h.push(J,J+1,V):h.push(J+1,J,V),P+=3}l.addGroup(f,P,x===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ue(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ts extends ue{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ts(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ll extends me{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new I,x=new I,S=new I;for(let E=0;E<e.length;E+=3)g(e[E+0],M),g(e[E+1],x),g(e[E+2],S),c(M,x,S,y)}function c(y,M,x,S){const E=S+1,R=[];for(let P=0;P<=E;P++){R[P]=[];const T=y.clone().lerp(x,P/E),b=M.clone().lerp(x,P/E),U=E-P;for(let k=0;k<=U;k++)k===0&&P===E?R[P][k]=T:R[P][k]=T.clone().lerp(b,k/U)}for(let P=0;P<E;P++)for(let T=0;T<2*(E-P)-1;T++){const b=Math.floor(T/2);T%2===0?(p(R[P][b+1]),p(R[P+1][b]),p(R[P][b])):(p(R[P][b+1]),p(R[P+1][b+1]),p(R[P+1][b]))}}function l(y){const M=new I;for(let x=0;x<r.length;x+=3)M.x=r[x+0],M.y=r[x+1],M.z=r[x+2],M.normalize().multiplyScalar(y),r[x+0]=M.x,r[x+1]=M.y,r[x+2]=M.z}function h(){const y=new I;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const x=m(y)/2/Math.PI+.5,S=f(y)/Math.PI+.5;o.push(x,1-S)}_(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],x=o[y+2],S=o[y+4],E=Math.max(M,x,S),R=Math.min(M,x,S);E>.9&&R<.1&&(M<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function p(y){r.push(y.x,y.y,y.z)}function g(y,M){const x=y*3;M.x=t[x+0],M.y=t[x+1],M.z=t[x+2]}function _(){const y=new I,M=new I,x=new I,S=new I,E=new ht,R=new ht,P=new ht;for(let T=0,b=0;T<r.length;T+=9,b+=6){y.set(r[T+0],r[T+1],r[T+2]),M.set(r[T+3],r[T+4],r[T+5]),x.set(r[T+6],r[T+7],r[T+8]),E.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),S.copy(y).add(M).add(x).divideScalar(3);const U=m(S);v(E,b+0,y,U),v(R,b+2,M,U),v(P,b+4,x,U)}}function v(y,M,x,S){S<0&&y.x===1&&(o[M]=y.x-1),x.x===0&&x.z===0&&(o[M]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.vertices,t.indices,t.radius,t.details)}}class cl extends ll{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cl(t.radius,t.detail)}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,g=(o-h)/p;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,s=[],r=[],o=[],a=new I,c=new ge;for(let g=0;g<=t;g++){const _=g/t;s[g]=this.getTangentAt(_,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Jt(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Jt(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hl extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new ht){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,g=l-this.aY;c=p*h-g*u+this.aX,l=p*u+g*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rf extends hl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ul(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,g=(a-o)/h-(c-o)/(h+u)+(c-a)/u;p*=h,g*=h,s(o,a,p,g)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const vr=new I,Ro=new ul,Co=new ul,Po=new ul;class dl extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(vr.subVectors(s[0],s[1]).add(s[0]),l=vr);const u=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(vr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=vr),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),g),v=Math.pow(u.distanceToSquared(p),g),m=Math.pow(p.distanceToSquared(h),g);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Ro.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,_,v,m),Co.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,_,v,m),Po.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),Co.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),Po.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(Ro.calc(c),Co.calc(c),Po.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function oc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function of(i,t){const e=1-i;return e*e*t}function af(i,t){return 2*(1-i)*i*t}function lf(i,t){return i*i*t}function Cs(i,t,e,n){return of(i,t)+af(i,e)+lf(i,n)}function cf(i,t){const e=1-i;return e*e*e*t}function hf(i,t){const e=1-i;return 3*e*e*i*t}function uf(i,t){return 3*(1-i)*i*i*t}function df(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return cf(i,t)+hf(i,e)+uf(i,n)+df(i,s)}class Ch extends Tn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ff extends Tn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ps(t,s.x,r.x,o.x,a.x),Ps(t,s.y,r.y,o.y,a.y),Ps(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ph extends Tn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pf extends Tn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lh extends Tn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ih extends Tn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Cs(t,s.x,r.x,o.x),Cs(t,s.y,r.y,o.y),Cs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Dh extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(oc(a,c.x,l.x,h.x,u.x),oc(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var kr=Object.freeze({__proto__:null,ArcCurve:rf,CatmullRomCurve3:dl,CubicBezierCurve:Ch,CubicBezierCurve3:ff,EllipseCurve:hl,LineCurve:Ph,LineCurve3:pf,QuadraticBezierCurve:Lh,QuadraticBezierCurve3:Ih,SplineCurve:Dh});class mf extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new kr[s.type]().fromJSON(s))}return this}}class ac extends mf{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ph(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Lh(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Ch(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Dh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new hl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class es extends ac{constructor(t){super(t),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new ac().fromJSON(s))}return this}}function gf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Uh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=yf(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let p=e;p<s;p+=e){const g=i[p],_=i[p+1];g<a&&(a=g),_<c&&(c=_),g>h&&(h=g),_>u&&(u=_)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return Hs(r,o,e,a,c,l,0),o}function Uh(i,t,e,n,s){let r;if(s===If(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=lc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=lc(o/n|0,i[o],i[o+1],r);return r&&as(r,r.next)&&(Gs(r),r=r.next),r}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(as(e,e.next)||Me(e.prev,e,e.next)===0)){if(Gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&wf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?xf(i,n,s,r):_f(i)){t.push(c.i,i.i,l.i),Gs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=vf(Ti(i),t),Hs(i,t,e,n,s,r,2)):o===2&&Mf(i,t,e,n,s,r):Hs(Ti(i),t,e,n,s,r,1);break}}}function _f(i){const t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),p=Math.max(s,r,o),g=Math.max(a,c,l);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=p&&_.y>=u&&_.y<=g&&bs(s,a,r,c,o,l,_.x,_.y)&&Me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function xf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Me(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,p=o.y,g=Math.min(a,c,l),_=Math.min(h,u,p),v=Math.max(a,c,l),m=Math.max(h,u,p),f=Ia(g,_,t,e,n),y=Ia(v,m,t,e,n);let M=i.prevZ,x=i.nextZ;for(;M&&M.z>=f&&x&&x.z<=y;){if(M.x>=g&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&bs(a,h,c,u,l,p,M.x,M.y)&&Me(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=g&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&bs(a,h,c,u,l,p,x.x,x.y)&&Me(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=f;){if(M.x>=g&&M.x<=v&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&bs(a,h,c,u,l,p,M.x,M.y)&&Me(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=y;){if(x.x>=g&&x.x<=v&&x.y>=_&&x.y<=m&&x!==s&&x!==o&&bs(a,h,c,u,l,p,x.x,x.y)&&Me(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function vf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!as(n,s)&&Oh(n,e,e.next,s)&&Vs(n,s)&&Vs(s,n)&&(t.push(n.i,e.i,s.i),Gs(e),Gs(e.next),e=i=s),e=e.next}while(e!==i);return Ti(e)}function Mf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cf(o,a)){let c=Fh(o,a);o=Ti(o,o.next),c=Ti(c,c.next),Hs(o,t,e,n,s,r,0),Hs(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function yf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Uh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Rf(l))}s.sort(Sf);for(let r=0;r<s.length;r++)e=Ef(s[r],e);return e}function Sf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Ef(i,t){const e=bf(i,t);if(!e)return t;const n=Fh(e,i);return Ti(n,n.next),Ti(e,e.next)}function bf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(as(i,e))return e;do{if(as(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Nh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);Vs(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Tf(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Tf(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function wf(i,t,e,n){let s=i;do s.z===0&&(s.z=Ia(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Af(s)}function Af(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ia(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Rf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Nh(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function bs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Nh(i,t,e,n,s,r,o,a)}function Cf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Pf(i,t)&&(Vs(i,t)&&Vs(t,i)&&Lf(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||as(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function as(i,t){return i.x===t.x&&i.y===t.y}function Oh(i,t,e,n){const s=yr(Me(i,t,e)),r=yr(Me(i,t,n)),o=yr(Me(e,n,i)),a=yr(Me(e,n,t));return!!(s!==r&&o!==a||s===0&&Mr(i,e,t)||r===0&&Mr(i,n,t)||o===0&&Mr(e,i,n)||a===0&&Mr(e,t,n))}function Mr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function yr(i){return i>0?1:i<0?-1:0}function Pf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Oh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vs(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Lf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fh(i,t){const e=Da(i.i,i.x,i.y),n=Da(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function lc(i,t,e,n){const s=Da(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Da(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function If(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Df{static triangulate(t,e,n=2){return gf(t,e,n)}}class Bn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Bn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];cc(t),hc(n,t);let o=t.length;e.forEach(cc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,hc(n,e[c]);const a=Df.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function cc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function hc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ws extends me{constructor(t=new es([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new qt(s,3)),this.setAttribute("uv",new qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Uf;let M,x=!1,S,E,R,P;f&&(M=f.getSpacedPoints(h),x=!0,p=!1,S=f.computeFrenetFrames(h,!1),E=new I,R=new I,P=new I),p||(m=0,g=0,_=0,v=0);const T=a.extractPoints(l);let b=T.shape;const U=T.holes;if(!Bn.isClockWise(b)){b=b.reverse();for(let rt=0,it=U.length;rt<it;rt++){const st=U[rt];Bn.isClockWise(st)&&(U[rt]=st.reverse())}}function V(rt){const st=10000000000000001e-36;let N=rt[0];for(let X=1;X<=rt.length;X++){const G=X%rt.length,K=rt[G],nt=K.x-N.x,ct=K.y-N.y,A=nt*nt+ct*ct,d=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(N.x),Math.abs(N.y)),C=st*d*d;if(A<=C){rt.splice(G,1),X--;continue}N=K}}V(b),U.forEach(V);const J=U.length,W=b;for(let rt=0;rt<J;rt++){const it=U[rt];b=b.concat(it)}function j(rt,it,st){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(it,st)}const et=b.length;function Y(rt,it,st){let N,X,G;const K=rt.x-it.x,nt=rt.y-it.y,ct=st.x-rt.x,A=st.y-rt.y,d=K*K+nt*nt,C=K*A-nt*ct;if(Math.abs(C)>Number.EPSILON){const L=Math.sqrt(d),B=Math.sqrt(ct*ct+A*A),F=it.x-nt/L,at=it.y+K/L,Q=st.x-A/B,vt=st.y+ct/B,ut=((Q-F)*A-(vt-at)*ct)/(K*A-nt*ct);N=F+K*ut-rt.x,X=at+nt*ut-rt.y;const $=N*N+X*X;if($<=2)return new ht(N,X);G=Math.sqrt($/2)}else{let L=!1;K>Number.EPSILON?ct>Number.EPSILON&&(L=!0):K<-Number.EPSILON?ct<-Number.EPSILON&&(L=!0):Math.sign(nt)===Math.sign(A)&&(L=!0),L?(N=-nt,X=K,G=Math.sqrt(d)):(N=K,X=nt,G=Math.sqrt(d/2))}return new ht(N/G,X/G)}const pt=[];for(let rt=0,it=W.length,st=it-1,N=rt+1;rt<it;rt++,st++,N++)st===it&&(st=0),N===it&&(N=0),pt[rt]=Y(W[rt],W[st],W[N]);const dt=[];let Mt,Nt=pt.concat();for(let rt=0,it=J;rt<it;rt++){const st=U[rt];Mt=[];for(let N=0,X=st.length,G=X-1,K=N+1;N<X;N++,G++,K++)G===X&&(G=0),K===X&&(K=0),Mt[N]=Y(st[N],st[G],st[K]);dt.push(Mt),Nt=Nt.concat(Mt)}let Yt;if(m===0)Yt=Bn.triangulateShape(W,U);else{const rt=[],it=[];for(let st=0;st<m;st++){const N=st/m,X=g*Math.cos(N*Math.PI/2),G=_*Math.sin(N*Math.PI/2)+v;for(let K=0,nt=W.length;K<nt;K++){const ct=j(W[K],pt[K],G);At(ct.x,ct.y,-X),N===0&&rt.push(ct)}for(let K=0,nt=J;K<nt;K++){const ct=U[K];Mt=dt[K];const A=[];for(let d=0,C=ct.length;d<C;d++){const L=j(ct[d],Mt[d],G);At(L.x,L.y,-X),N===0&&A.push(L)}N===0&&it.push(A)}}Yt=Bn.triangulateShape(rt,it)}const Qt=Yt.length,Zt=_+v;for(let rt=0;rt<et;rt++){const it=p?j(b[rt],Nt[rt],Zt):b[rt];x?(R.copy(S.normals[0]).multiplyScalar(it.x),E.copy(S.binormals[0]).multiplyScalar(it.y),P.copy(M[0]).add(R).add(E),At(P.x,P.y,P.z)):At(it.x,it.y,0)}for(let rt=1;rt<=h;rt++)for(let it=0;it<et;it++){const st=p?j(b[it],Nt[it],Zt):b[it];x?(R.copy(S.normals[rt]).multiplyScalar(st.x),E.copy(S.binormals[rt]).multiplyScalar(st.y),P.copy(M[rt]).add(R).add(E),At(P.x,P.y,P.z)):At(st.x,st.y,u/h*rt)}for(let rt=m-1;rt>=0;rt--){const it=rt/m,st=g*Math.cos(it*Math.PI/2),N=_*Math.sin(it*Math.PI/2)+v;for(let X=0,G=W.length;X<G;X++){const K=j(W[X],pt[X],N);At(K.x,K.y,u+st)}for(let X=0,G=U.length;X<G;X++){const K=U[X];Mt=dt[X];for(let nt=0,ct=K.length;nt<ct;nt++){const A=j(K[nt],Mt[nt],N);x?At(A.x,A.y+M[h-1].y,M[h-1].x+st):At(A.x,A.y,u+st)}}}tt(),lt();function tt(){const rt=s.length/3;if(p){let it=0,st=et*it;for(let N=0;N<Qt;N++){const X=Yt[N];Pt(X[2]+st,X[1]+st,X[0]+st)}it=h+m*2,st=et*it;for(let N=0;N<Qt;N++){const X=Yt[N];Pt(X[0]+st,X[1]+st,X[2]+st)}}else{for(let it=0;it<Qt;it++){const st=Yt[it];Pt(st[2],st[1],st[0])}for(let it=0;it<Qt;it++){const st=Yt[it];Pt(st[0]+et*h,st[1]+et*h,st[2]+et*h)}}n.addGroup(rt,s.length/3-rt,0)}function lt(){const rt=s.length/3;let it=0;mt(W,it),it+=W.length;for(let st=0,N=U.length;st<N;st++){const X=U[st];mt(X,it),it+=X.length}n.addGroup(rt,s.length/3-rt,1)}function mt(rt,it){let st=rt.length;for(;--st>=0;){const N=st;let X=st-1;X<0&&(X=rt.length-1);for(let G=0,K=h+m*2;G<K;G++){const nt=et*G,ct=et*(G+1),A=it+N+nt,d=it+X+nt,C=it+X+ct,L=it+N+ct;Wt(A,d,C,L)}}}function At(rt,it,st){c.push(rt),c.push(it),c.push(st)}function Pt(rt,it,st){ee(rt),ee(it),ee(st);const N=s.length/3,X=y.generateTopUV(n,s,N-3,N-2,N-1);D(X[0]),D(X[1]),D(X[2])}function Wt(rt,it,st,N){ee(rt),ee(it),ee(N),ee(it),ee(st),ee(N);const X=s.length/3,G=y.generateSideWallUV(n,s,X-6,X-3,X-2,X-1);D(G[0]),D(G[1]),D(G[3]),D(G[1]),D(G[2]),D(G[3])}function ee(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function D(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Nf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new kr[s.type]().fromJSON(s)),new Ws(n,t.options)}}const Uf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[s*3],g=t[s*3+1],_=t[s*3+2],v=t[r*3],m=t[r*3+1],f=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(p,1-_),new ht(v,1-f)]:[new ht(a,1-c),new ht(h,1-u),new ht(g,1-_),new ht(m,1-f)]}};function Nf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ge extends me{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,p=e/c,g=[],_=[],v=[],m=[];for(let f=0;f<h;f++){const y=f*p-o;for(let M=0;M<l;M++){const x=M*u-r;_.push(x,-y,0),v.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<a;y++){const M=y+l*f,x=y+l*(f+1),S=y+1+l*(f+1),E=y+1+l*f;g.push(M,x,E),g.push(x,S,E)}this.setIndex(g),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ge(t.width,t.height,t.widthSegments,t.heightSegments)}}class ei extends me{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const p=(e-t)/s,g=new I,_=new ht;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){const f=r+m/n*o;g.x=u*Math.cos(f),g.y=u*Math.sin(f),c.push(g.x,g.y,g.z),l.push(0,0,1),_.x=(g.x/e+1)/2,_.y=(g.y/e+1)/2,h.push(_.x,_.y)}u+=p}for(let v=0;v<s;v++){const m=v*(n+1);for(let f=0;f<n;f++){const y=f+m,M=y,x=y+n+1,S=y+n+2,E=y+1;a.push(M,x,E),a.push(x,S,E)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ei(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fl extends me{constructor(t=new es([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(r,3)),this.setAttribute("uv",new qt(o,2));function l(h){const u=s.length/3,p=h.extractPoints(e);let g=p.shape;const _=p.holes;Bn.isClockWise(g)===!1&&(g=g.reverse());for(let m=0,f=_.length;m<f;m++){const y=_[m];Bn.isClockWise(y)===!0&&(_[m]=y.reverse())}const v=Bn.triangulateShape(g,_);for(let m=0,f=_.length;m<f;m++){const y=_[m];g=g.concat(y)}for(let m=0,f=g.length;m<f;m++){const y=g[m];s.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let m=0,f=v.length;m<f;m++){const y=v[m],M=y[0]+u,x=y[1]+u,S=y[2]+u;n.push(M,x,S),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Of(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new fl(n,t.curveSegments)}}function Of(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Zs extends me{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,p=new I,g=[],_=[],v=[],m=[];for(let f=0;f<=n;f++){const y=[],M=f/n;let x=0;f===0&&o===0?x=.5/e:f===n&&c===Math.PI&&(x=-.5/e);for(let S=0;S<=e;S++){const E=S/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),m.push(E+x,1-M),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const M=h[f][y+1],x=h[f][y],S=h[f+1][y],E=h[f+1][y+1];(f!==0||o>0)&&g.push(M,x,E),(f!==n-1||c<Math.PI)&&g.push(x,S,E)}this.setIndex(g),this.setAttribute("position",new qt(_,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vn extends me{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,p=new I;for(let g=0;g<=n;g++)for(let _=0;_<=s;_++){const v=_/s*r,m=g/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/s),l.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=s;_++){const v=(s+1)*g+_-1,m=(s+1)*(g-1)+_-1,f=(s+1)*(g-1)+_,y=(s+1)*g+_;o.push(v,m,y),o.push(m,f,y)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $r extends me{constructor(t=new Ih(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new ht;let h=new I;const u=[],p=[],g=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(p,3)),this.setAttribute("uv",new qt(g,2));function v(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),y(),f()}function m(M){h=t.getPointAt(M/e,h);const x=o.normals[M],S=o.binormals[M];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,P=Math.sin(R),T=-Math.cos(R);c.x=T*x.x+P*S.x,c.y=T*x.y+P*S.y,c.z=T*x.z+P*S.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function f(){for(let M=1;M<=e;M++)for(let x=1;x<=s;x++){const S=(s+1)*(M-1)+(x-1),E=(s+1)*M+(x-1),R=(s+1)*M+x,P=(s+1)*(M-1)+x;_.push(S,E,P),_.push(E,R,P)}}function y(){for(let M=0;M<=e;M++)for(let x=0;x<=s;x++)l.x=M/e,l.y=x/s,g.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new $r(new kr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ht extends ds{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dh,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ua extends Ht{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ht(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ff extends ds{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bf extends ds{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bh extends De{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class kf extends Bh{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Lo=new ge,uc=new I,dc=new I;class zf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=yn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new al,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class pl extends Eh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Hf extends zf{constructor(){super(new pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vf extends Bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(De.DEFAULT_UP),this.updateMatrix(),this.target=new De,this.shadow=new Hf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gf extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Wf extends wi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function pc(i,t,e,n){const s=Xf(n);switch(e){case lh:return i*t;case hh:return i*t/s.components*s.byteLength;case tl:return i*t/s.components*s.byteLength;case uh:return i*t*2/s.components*s.byteLength;case el:return i*t*2/s.components*s.byteLength;case ch:return i*t*3/s.components*s.byteLength;case un:return i*t*4/s.components*s.byteLength;case nl:return i*t*4/s.components*s.byteLength;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case aa:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ba:case Ta:case wa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ca:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xf(i){switch(i){case yn:case sh:return{byteLength:1,components:1};case Ns:case rh:case us:return{byteLength:2,components:1};case Ka:case Qa:return{byteLength:2,components:4};case Ei:case $a:case Fn:return{byteLength:4,components:1};case oh:case ah:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ja);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((g,_)=>g.start-_.start);let p=0;for(let g=1;g<u.length;g++){const _=u[p],v=u[g];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++p,u[p]=v)}u.length=p+1;for(let g=0,_=u.length;g<_;g++){const v=u[g];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zf=`#ifdef USE_ALPHAHASH
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
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qf=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,op=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Up=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,kp=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wp=`PhysicalMaterial material;
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
#endif`,Xp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nm=`#if defined( USE_POINTS_UV )
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
#endif`,im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,om=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_m=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Um=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,t0=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define LAMBERT
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
}`,h0=`#define MATCAP
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
}`,u0=`#define MATCAP
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
}`,d0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,p0=`#define PHONG
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
}`,m0=`#define PHONG
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
}`,g0=`#define STANDARD
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
}`,_0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,v0=`#define TOON
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
}`,M0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,S0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,T0=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:qf,alphahash_pars_fragment:Zf,alphamap_fragment:jf,alphamap_pars_fragment:Jf,alphatest_fragment:$f,alphatest_pars_fragment:Kf,aomap_fragment:Qf,aomap_pars_fragment:tp,batching_pars_vertex:ep,batching_vertex:np,begin_vertex:ip,beginnormal_vertex:sp,bsdfs:rp,iridescence_fragment:op,bumpmap_pars_fragment:ap,clipping_planes_fragment:lp,clipping_planes_pars_fragment:cp,clipping_planes_pars_vertex:hp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:fp,color_pars_vertex:pp,color_vertex:mp,common:gp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:Mp,emissivemap_fragment:yp,emissivemap_pars_fragment:Sp,colorspace_fragment:Ep,colorspace_pars_fragment:bp,envmap_fragment:Tp,envmap_common_pars_fragment:wp,envmap_pars_fragment:Ap,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:kp,envmap_vertex:Cp,fog_vertex:Pp,fog_pars_vertex:Lp,fog_fragment:Ip,fog_pars_fragment:Dp,gradientmap_pars_fragment:Up,lightmap_pars_fragment:Np,lights_lambert_fragment:Op,lights_lambert_pars_fragment:Fp,lights_pars_begin:Bp,lights_toon_fragment:zp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Gp,lights_physical_fragment:Wp,lights_physical_pars_fragment:Xp,lights_fragment_begin:Yp,lights_fragment_maps:qp,lights_fragment_end:Zp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:$p,logdepthbuf_vertex:Kp,map_fragment:Qp,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:nm,metalnessmap_fragment:im,metalnessmap_pars_fragment:sm,morphinstance_vertex:rm,morphcolor_vertex:om,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:cm,normal_fragment_begin:hm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:fm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:_m,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:Mm,packing:ym,premultiplied_alpha_fragment:Sm,project_vertex:Em,dithering_fragment:bm,dithering_pars_fragment:Tm,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Pm,shadowmask_pars_fragment:Lm,skinbase_vertex:Im,skinning_pars_vertex:Dm,skinning_vertex:Um,skinnormal_vertex:Nm,specularmap_fragment:Om,specularmap_pars_fragment:Fm,tonemapping_fragment:Bm,tonemapping_pars_fragment:km,transmission_fragment:zm,transmission_pars_fragment:Hm,uv_pars_fragment:Vm,uv_pars_vertex:Gm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:Ym,background_frag:qm,backgroundCube_vert:Zm,backgroundCube_frag:jm,cube_vert:Jm,cube_frag:$m,depth_vert:Km,depth_frag:Qm,distanceRGBA_vert:t0,distanceRGBA_frag:e0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:h0,meshmatcap_frag:u0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:x0,meshtoon_frag:v0,points_vert:M0,points_frag:y0,shadow_vert:S0,shadow_frag:E0,sprite_vert:b0,sprite_frag:T0},Et={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},gn={basic:{uniforms:ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ze([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ze([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ze([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Kt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ze([Et.points,Et.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ze([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ze([Et.common,Et.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ze([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ze([Et.sprite,Et.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ze([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ze([Et.lights,Et.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};gn.physical={uniforms:ze([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Sr={r:0,b:0,g:0},di=new Sn,w0=new ge;function A0(i,t,e,n,s,r,o){const a=new Kt(0);let c=r===!0?0:1,l,h,u=null,p=0,g=null;function _(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function v(M){let x=!1;const S=_(M);S===null?f(a,c):S&&S.isColor&&(f(S,1),x=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const S=_(x);S&&(S.isCubeTexture||S.mapping===Jr)?(h===void 0&&(h=new Dt(new he(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:os(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),di.copy(x.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(di)),h.material.toneMapped=ie.getTransfer(S.colorSpace)!==ae,(u!==S||p!==S.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,p=S.version,g=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Dt(new Ge(2,2),new Hn({name:"BackgroundMaterial",uniforms:os(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ie.getTransfer(S.colorSpace)!==ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,g=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,x){M.getRGB(Sr,yh(i)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,x,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),c=x,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(a,c)},render:v,addToRenderList:m,dispose:y}}function R0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function a(b,U,k,V,J){let W=!1;const j=u(V,k,U);r!==j&&(r=j,l(r.object)),W=g(b,V,k,J),W&&_(b,V,k,J),J!==null&&t.update(J,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(b,U,k,V),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(J).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,U,k){const V=k.wireframe===!0;let J=n[b.id];J===void 0&&(J={},n[b.id]=J);let W=J[U.id];W===void 0&&(W={},J[U.id]=W);let j=W[V];return j===void 0&&(j=p(c()),W[V]=j),j}function p(b){const U=[],k=[],V=[];for(let J=0;J<e;J++)U[J]=0,k[J]=0,V[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:V,object:b,attributes:{},index:null}}function g(b,U,k,V){const J=r.attributes,W=U.attributes;let j=0;const et=k.getAttributes();for(const Y in et)if(et[Y].location>=0){const dt=J[Y];let Mt=W[Y];if(Mt===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Mt=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Mt=b.instanceColor)),dt===void 0||dt.attribute!==Mt||Mt&&dt.data!==Mt.data)return!0;j++}return r.attributesNum!==j||r.index!==V}function _(b,U,k,V){const J={},W=U.attributes;let j=0;const et=k.getAttributes();for(const Y in et)if(et[Y].location>=0){let dt=W[Y];dt===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor));const Mt={};Mt.attribute=dt,dt&&dt.data&&(Mt.data=dt.data),J[Y]=Mt,j++}r.attributes=J,r.attributesNum=j,r.index=V}function v(){const b=r.newAttributes;for(let U=0,k=b.length;U<k;U++)b[U]=0}function m(b){f(b,0)}function f(b,U){const k=r.newAttributes,V=r.enabledAttributes,J=r.attributeDivisors;k[b]=1,V[b]===0&&(i.enableVertexAttribArray(b),V[b]=1),J[b]!==U&&(i.vertexAttribDivisor(b,U),J[b]=U)}function y(){const b=r.newAttributes,U=r.enabledAttributes;for(let k=0,V=U.length;k<V;k++)U[k]!==b[k]&&(i.disableVertexAttribArray(k),U[k]=0)}function M(b,U,k,V,J,W,j){j===!0?i.vertexAttribIPointer(b,U,k,J,W):i.vertexAttribPointer(b,U,k,V,J,W)}function x(b,U,k,V){v();const J=V.attributes,W=k.getAttributes(),j=U.defaultAttributeValues;for(const et in W){const Y=W[et];if(Y.location>=0){let pt=J[et];if(pt===void 0&&(et==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),et==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor)),pt!==void 0){const dt=pt.normalized,Mt=pt.itemSize,Nt=t.get(pt);if(Nt===void 0)continue;const Yt=Nt.buffer,Qt=Nt.type,Zt=Nt.bytesPerElement,tt=Qt===i.INT||Qt===i.UNSIGNED_INT||pt.gpuType===$a;if(pt.isInterleavedBufferAttribute){const lt=pt.data,mt=lt.stride,At=pt.offset;if(lt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Y.locationSize;Pt++)f(Y.location+Pt,lt.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Pt=0;Pt<Y.locationSize;Pt++)m(Y.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Pt=0;Pt<Y.locationSize;Pt++)M(Y.location+Pt,Mt/Y.locationSize,Qt,dt,mt*Zt,(At+Mt/Y.locationSize*Pt)*Zt,tt)}else{if(pt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)f(Y.location+lt,pt.meshPerAttribute);b.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let lt=0;lt<Y.locationSize;lt++)m(Y.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let lt=0;lt<Y.locationSize;lt++)M(Y.location+lt,Mt/Y.locationSize,Qt,dt,Mt*Zt,Mt/Y.locationSize*lt*Zt,tt)}}else if(j!==void 0){const dt=j[et];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(Y.location,dt);break;case 3:i.vertexAttrib3fv(Y.location,dt);break;case 4:i.vertexAttrib4fv(Y.location,dt);break;default:i.vertexAttrib1fv(Y.location,dt)}}}}y()}function S(){P();for(const b in n){const U=n[b];for(const k in U){const V=U[k];for(const J in V)h(V[J].object),delete V[J];delete U[k]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const k in U){const V=U[k];for(const J in V)h(V[J].object),delete V[J];delete U[k]}delete n[b.id]}function R(b){for(const U in n){const k=n[U];if(k[b.id]===void 0)continue;const V=k[b.id];for(const J in V)h(V[J].object),delete V[J];delete k[b.id]}}function P(){T(),o=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function C0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];e.update(g,n,1)}function c(l,h,u,p){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)o(l[_],h[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*p[v];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function P0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==yn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Fn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=_>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:g,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:S,maxSamples:E}}function L0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Nn,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const g=u.length!==0||p||n!==0||s;return s=p,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,g){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,M=y*4;let x=f.clippingState||null;c.value=x,x=h(_,p,M,g);for(let S=0;S!==M;++S)x[S]=e[S];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,g,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const f=g+v*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,x=g;M!==v;++M,x+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function I0(i){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=is:a===ea&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===ea)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Jd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ji=4,mc=[.125,.215,.35,.446,.526,.582],gi=20,Io=new pl,gc=new Kt;let Do=null,Uo=0,No=0,Oo=!1;const pi=(1+Math.sqrt(5))/2,Xi=1/pi,_c=[new I(-pi,Xi,0),new I(pi,Xi,0),new I(-Xi,0,pi),new I(Xi,0,pi),new I(0,pi,-Xi),new I(0,pi,Xi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],D0=new I;class xc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=D0}=r;Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,No),this._renderer.xr.enabled=Oo,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Oo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:us,format:un,colorSpace:rs,depthBuffer:!1},s=vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U0(r)),this._blurMaterial=N0(r,t,e)}return s}_compileMaterial(t){const e=new Dt(this._lodPlanes[0],t);this._renderer.compile(e,Io)}_sceneToCubeUV(t,e,n,s,r){const c=new Oe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,g=u.toneMapping;u.getClearColor(gc),u.toneMapping=ti,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const v=new cn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),m=new Dt(new he,v);let f=!1;const y=t.background;y?y.isColor&&(v.color.copy(y),t.background=null,f=!0):(v.color.copy(gc),f=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const S=this._cubeSize;Er(s,x*S,M>2?S:0,S,S),u.setRenderTarget(s),f&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=g,u.autoClear=p,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Er(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Io)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=_c[(s-r-1)%_c.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[s],l),p=l.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*gi-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):gi;m>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const f=[];let y=0;for(let R=0;R<gi;++R){const P=R/v,T=Math.exp(-P*P/2);f.push(T),R===0?y+=T:R<m&&(y+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/y;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=_,p.mipInt.value=M-n;const x=this._sizeLods[s],S=3*x*(s>M-ji?s-M+ji:0),E=4*(this._cubeSize-x);Er(e,S,E,3*x,2*x),c.setRenderTarget(e),c.render(u,Io)}}function U0(i){const t=[],e=[],n=[];let s=i;const r=i-ji+1+mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ji?c=mc[o-i+ji-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,_=6,v=3,m=2,f=1,y=new Float32Array(v*_*g),M=new Float32Array(m*_*g),x=new Float32Array(f*_*g);for(let E=0;E<g;E++){const R=E%3*2/3-1,P=E>2?0:-1,T=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];y.set(T,v*_*E),M.set(p,m*_*E);const b=[E,E,E,E,E,E];x.set(b,f*_*E)}const S=new me;S.setAttribute("position",new pn(y,v)),S.setAttribute("uv",new pn(M,m)),S.setAttribute("faceIndex",new pn(x,f)),t.push(S),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vc(i,t,e){const n=new si(i,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Er(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function N0(i,t,e){const n=new Float32Array(gi),s=new I(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Mc(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function yc(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ml(){return`

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
	`}function O0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ta||c===ea,h=c===is||c===ss;if(l||h){let u=t.get(a);const p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new xc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const g=a.image;return l&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new xc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function F0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function B0(i,t,e,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);p.removeEventListener("dispose",o),delete s[p.id];const g=r.get(p);g&&(t.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER)}function l(u){const p=[],g=u.index,_=u.attributes.position;let v=0;if(g!==null){const y=g.array;v=g.version;for(let M=0,x=y.length;M<x;M+=3){const S=y[M+0],E=y[M+1],R=y[M+2];p.push(S,E,E,R,R,S)}}else if(_!==void 0){const y=_.array;v=_.version;for(let M=0,x=y.length/3-1;M<x;M+=3){const S=M+0,E=M+1,R=M+2;p.push(S,E,E,R,R,S)}}else return;const m=new(ph(p)?Mh:vh)(p,1);m.version=v;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const p=r.get(u);if(p){const g=u.index;g!==null&&p.version<g.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function k0(i,t,e){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,g){i.drawElements(n,g,r,p*o),e.update(g,n,1)}function l(p,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,p*o,_),e.update(g,n,_))}function h(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,p,0,_);let m=0;for(let f=0;f<_;f++)m+=g[f];e.update(m,n,1)}function u(p,g,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)l(p[f]/o,g[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,p,0,v,0,_);let f=0;for(let y=0;y<_;y++)f+=g[y]*v[y];e.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function z0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function H0(i,t,e){const n=new WeakMap,s=new pe;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(a);if(p===void 0||p.count!==u){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var g=b;p!==void 0&&p.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let S=a.attributes.position.count*x,E=1;S>t.maxTextureSize&&(E=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const R=new Float32Array(S*E*4*u),P=new mh(R,S,E,u);P.type=Fn,P.needsUpdate=!0;const T=x*4;for(let U=0;U<u;U++){const k=f[U],V=y[U],J=M[U],W=S*E*4*U;for(let j=0;j<k.count;j++){const et=j*T;_===!0&&(s.fromBufferAttribute(k,j),R[W+et+0]=s.x,R[W+et+1]=s.y,R[W+et+2]=s.z,R[W+et+3]=0),v===!0&&(s.fromBufferAttribute(V,j),R[W+et+4]=s.x,R[W+et+5]=s.y,R[W+et+6]=s.z,R[W+et+7]=0),m===!0&&(s.fromBufferAttribute(J,j),R[W+et+8]=s.x,R[W+et+9]=s.y,R[W+et+10]=s.z,R[W+et+11]=J.itemSize===4?s.w:1)}}p={count:u,texture:P,size:new ht(S,E)},n.set(a,p),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function V0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const zh=new Fe,Sc=new Ah(1,1),Hh=new mh,Vh=new Ud,Gh=new bh,Ec=[],bc=[],Tc=new Float32Array(16),wc=new Float32Array(9),Ac=new Float32Array(4);function fs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ec[s];if(r===void 0&&(r=new Float32Array(s),Ec[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Kr(i,t){let e=bc[t];e===void 0&&(e=new Int32Array(t),bc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function W0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function q0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ac.set(n),i.uniformMatrix2fv(this.addr,!1,Ac),Ce(e,n)}}function Z0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;wc.set(n),i.uniformMatrix3fv(this.addr,!1,wc),Ce(e,n)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Tc.set(n),i.uniformMatrix4fv(this.addr,!1,Tc),Ce(e,n)}}function J0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function tg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=fh,r=Sc):r=zh,e.setTexture2D(t||r,s)}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Vh,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Gh,s)}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function lg(i){switch(i){case 5126:return G0;case 35664:return W0;case 35665:return X0;case 35666:return Y0;case 35674:return q0;case 35675:return Z0;case 35676:return j0;case 5124:case 35670:return J0;case 35667:case 35671:return $0;case 35668:case 35672:return K0;case 35669:case 35673:return Q0;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}function cg(i,t){i.uniform1fv(this.addr,t)}function hg(i,t){const e=fs(t,this.size,2);i.uniform2fv(this.addr,e)}function ug(i,t){const e=fs(t,this.size,3);i.uniform3fv(this.addr,e)}function dg(i,t){const e=fs(t,this.size,4);i.uniform4fv(this.addr,e)}function fg(i,t){const e=fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function pg(i,t){const e=fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function mg(i,t){const e=fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function gg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function vg(i,t){i.uniform4iv(this.addr,t)}function Mg(i,t){i.uniform1uiv(this.addr,t)}function yg(i,t){i.uniform2uiv(this.addr,t)}function Sg(i,t){i.uniform3uiv(this.addr,t)}function Eg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zh,r[o])}function Tg(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vh,r[o])}function wg(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gh,r[o])}function Ag(i,t,e){const n=this.cache,s=t.length,r=Kr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hh,r[o])}function Rg(i){switch(i){case 5126:return cg;case 35664:return hg;case 35665:return ug;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return vg;case 5125:return Mg;case 36294:return yg;case 36295:return Sg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lg(e.type)}}class Pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}}class Lg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function Rc(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){const n=i.name,s=n.length;for(Fo.lastIndex=0;;){const r=Fo.exec(n),o=Fo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Rc(e,l===void 0?new Cg(a,i,t):new Pg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Lg(a),Rc(e,u)),e=u}}}class Ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Ig(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Cc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Dg=37297;let Ug=0;function Ng(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Pc=new jt;function Og(i){ie._getMatrix(Pc,ie.workingColorSpace,i);const t=`mat3( ${Pc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case Nr:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Lc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Ng(i.getShaderSource(t),a)}else return r}function Fg(i,t){const e=Og(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bg(i,t){let e;switch(t){case qu:e="Linear";break;case Zu:e="Reinhard";break;case ju:e="Cineon";break;case Ju:e="ACESFilmic";break;case Ku:e="AgX";break;case Qu:e="Neutral";break;case $u:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new I;function kg(){ie.getLuminanceCoefficients(br);const i=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Hg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ts(i){return i!==""}function Ic(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(Gg,Xg)}const Wg=new Map;function Xg(i,t){let e=$t[t];if(e===void 0){const n=Wg.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Na(e)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(Yg,qg)}function qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Nc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Zg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===eh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function $g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case nh:t="ENVMAP_BLENDING_MULTIPLY";break;case Xu:t="ENVMAP_BLENDING_MIX";break;case Yu:t="ENVMAP_BLENDING_ADD";break}return t}function Kg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Zg(e),l=jg(e),h=Jg(e),u=$g(e),p=Kg(e),g=zg(e),_=Hg(r),v=s.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ts).join(`
`),f.length>0&&(f+=`
`)):(m=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),f=[Nc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?$t.tonemapping_pars_fragment:"",e.toneMapping!==ti?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),o=Na(o),o=Ic(o,e),o=Dc(o,e),a=Na(a),a=Ic(a,e),a=Dc(a,e),o=Uc(o),a=Uc(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+m+o,x=y+f+a,S=Cc(s,s.VERTEX_SHADER,M),E=Cc(s,s.FRAGMENT_SHADER,x);s.attachShader(v,S),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(U){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(v)||"",V=s.getShaderInfoLog(S)||"",J=s.getShaderInfoLog(E)||"",W=k.trim(),j=V.trim(),et=J.trim();let Y=!0,pt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,S,E);else{const dt=Lc(s,S,"vertex"),Mt=Lc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+dt+`
`+Mt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||et==="")&&(pt=!1);pt&&(U.diagnostics={runnable:Y,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:et,prefix:f}})}s.deleteShader(S),s.deleteShader(E),P=new Ur(s,v),T=Vg(s,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Dg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ug++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=E,this}let t_=0;class e_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new n_(t),e.set(t,n)),n}}class n_{constructor(t){this.id=t_++,this.code=t,this.usedTimes=0}}function i_(i,t,e,n,s,r,o){const a=new _h,c=new e_,l=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return l.add(T),T===0?"uv":`uv${T}`}function m(T,b,U,k,V){const J=k.fog,W=V.geometry,j=T.isMeshStandardMaterial?k.environment:null,et=(T.isMeshStandardMaterial?e:t).get(T.envMap||j),Y=et&&et.mapping===Jr?et.image.height:null,pt=_[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const dt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Mt=dt!==void 0?dt.length:0;let Nt=0;W.morphAttributes.position!==void 0&&(Nt=1),W.morphAttributes.normal!==void 0&&(Nt=2),W.morphAttributes.color!==void 0&&(Nt=3);let Yt,Qt,Zt,tt;if(pt){const se=gn[pt];Yt=se.vertexShader,Qt=se.fragmentShader}else Yt=T.vertexShader,Qt=T.fragmentShader,c.update(T),Zt=c.getVertexShaderID(T),tt=c.getFragmentShaderID(T);const lt=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),At=V.isInstancedMesh===!0,Pt=V.isBatchedMesh===!0,Wt=!!T.map,ee=!!T.matcap,D=!!et,rt=!!T.aoMap,it=!!T.lightMap,st=!!T.bumpMap,N=!!T.normalMap,X=!!T.displacementMap,G=!!T.emissiveMap,K=!!T.metalnessMap,nt=!!T.roughnessMap,ct=T.anisotropy>0,A=T.clearcoat>0,d=T.dispersion>0,C=T.iridescence>0,L=T.sheen>0,B=T.transmission>0,F=ct&&!!T.anisotropyMap,at=A&&!!T.clearcoatMap,Q=A&&!!T.clearcoatNormalMap,vt=A&&!!T.clearcoatRoughnessMap,ut=C&&!!T.iridescenceMap,$=C&&!!T.iridescenceThicknessMap,ft=L&&!!T.sheenColorMap,Ft=L&&!!T.sheenRoughnessMap,Tt=!!T.specularMap,St=!!T.specularColorMap,Vt=!!T.specularIntensityMap,O=B&&!!T.transmissionMap,_t=B&&!!T.thicknessMap,yt=!!T.gradientMap,Lt=!!T.alphaMap,gt=T.alphaTest>0,ot=!!T.alphaHash,Ct=!!T.extensions;let Xt=ti;T.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const de={shaderID:pt,shaderType:T.type,shaderName:T.name,vertexShader:Yt,fragmentShader:Qt,defines:T.defines,customVertexShaderID:Zt,customFragmentShaderID:tt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Pt,batchingColor:Pt&&V._colorsTexture!==null,instancing:At,instancingColor:At&&V.instanceColor!==null,instancingMorph:At&&V.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:rs,alphaToCoverage:!!T.alphaToCoverage,map:Wt,matcap:ee,envMap:D,envMapMode:D&&et.mapping,envMapCubeUVHeight:Y,aoMap:rt,lightMap:it,bumpMap:st,normalMap:N,displacementMap:p&&X,emissiveMap:G,normalMapObjectSpace:N&&T.normalMapType===id,normalMapTangentSpace:N&&T.normalMapType===dh,metalnessMap:K,roughnessMap:nt,anisotropy:ct,anisotropyMap:F,clearcoat:A,clearcoatMap:at,clearcoatNormalMap:Q,clearcoatRoughnessMap:vt,dispersion:d,iridescence:C,iridescenceMap:ut,iridescenceThicknessMap:$,sheen:L,sheenColorMap:ft,sheenRoughnessMap:Ft,specularMap:Tt,specularColorMap:St,specularIntensityMap:Vt,transmission:B,transmissionMap:O,thicknessMap:_t,gradientMap:yt,opaque:T.transparent===!1&&T.blending===Ki&&T.alphaToCoverage===!1,alphaMap:Lt,alphaTest:gt,alphaHash:ot,combine:T.combine,mapUv:Wt&&v(T.map.channel),aoMapUv:rt&&v(T.aoMap.channel),lightMapUv:it&&v(T.lightMap.channel),bumpMapUv:st&&v(T.bumpMap.channel),normalMapUv:N&&v(T.normalMap.channel),displacementMapUv:X&&v(T.displacementMap.channel),emissiveMapUv:G&&v(T.emissiveMap.channel),metalnessMapUv:K&&v(T.metalnessMap.channel),roughnessMapUv:nt&&v(T.roughnessMap.channel),anisotropyMapUv:F&&v(T.anisotropyMap.channel),clearcoatMapUv:at&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:$&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(T.sheenRoughnessMap.channel),specularMapUv:Tt&&v(T.specularMap.channel),specularColorMapUv:St&&v(T.specularColorMap.channel),specularIntensityMapUv:Vt&&v(T.specularIntensityMap.channel),transmissionMapUv:O&&v(T.transmissionMap.channel),thicknessMapUv:_t&&v(T.thicknessMap.channel),alphaMapUv:Lt&&v(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(N||ct),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Wt||Lt),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:mt,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Wt&&T.map.isVideoTexture===!0&&ie.getTransfer(T.map.colorSpace)===ae,decodeVideoTextureEmissive:G&&T.emissiveMap.isVideoTexture===!0&&ie.getTransfer(T.emissiveMap.colorSpace)===ae,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Le,flipSided:T.side===We,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ct&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&T.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function f(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const U in T.defines)b.push(U),b.push(T.defines[U]);return T.isRawShaderMaterial===!1&&(y(b,T),M(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function y(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function M(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const b=_[T.type];let U;if(b){const k=gn[b];U=Sh.clone(k.uniforms)}else U=T.uniforms;return U}function S(T,b){let U;for(let k=0,V=h.length;k<V;k++){const J=h[k];if(J.cacheKey===b){U=J,++U.usedTimes;break}}return U===void 0&&(U=new Qg(i,b,T,r),h.push(U)),U}function E(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function R(T){c.remove(T)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:S,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:P}}function s_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function r_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Oc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Fc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,g,_,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:g,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=g,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function a(u,p,g,_,v,m){const f=o(u,p,g,_,v,m);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):e.push(f)}function c(u,p,g,_,v,m){const f=o(u,p,g,_,v,m);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||r_),n.length>1&&n.sort(p||Oc),s.length>1&&s.sort(p||Oc)}function h(){for(let u=t,p=i.length;u<p;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function o_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Fc,i.set(n,[o])):s>=r.length?(o=new Fc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function a_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Kt};break;case"SpotLight":e={position:new I,direction:new I,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function l_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let c_=0;function h_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u_(i){const t=new a_,e=l_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ge,o=new ge;function a(l){let h=0,u=0,p=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let g=0,_=0,v=0,m=0,f=0,y=0,M=0,x=0,S=0,E=0,R=0;l.sort(h_);for(let T=0,b=l.length;T<b;T++){const U=l[T],k=U.color,V=U.intensity,J=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=k.r*V,u+=k.g*V,p+=k.b*V;else if(U.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(U.sh.coefficients[j],V);R++}else if(U.isDirectionalLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const et=U.shadow,Y=e.get(U);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=U.shadow.matrix,y++}n.directional[g]=j,g++}else if(U.isSpotLight){const j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(k).multiplyScalar(V),j.distance=J,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,n.spot[v]=j;const et=U.shadow;if(U.map&&(n.spotLightMap[S]=U.map,S++,et.updateMatrices(U),U.castShadow&&E++),n.spotLightMatrix[v]=et.matrix,U.castShadow){const Y=e.get(U);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=W,x++}v++}else if(U.isRectAreaLight){const j=t.get(U);j.color.copy(k).multiplyScalar(V),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=j,m++}else if(U.isPointLight){const j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity),j.distance=U.distance,j.decay=U.decay,U.castShadow){const et=U.shadow,Y=e.get(U);Y.shadowIntensity=et.intensity,Y.shadowBias=et.bias,Y.shadowNormalBias=et.normalBias,Y.shadowRadius=et.radius,Y.shadowMapSize=et.mapSize,Y.shadowCameraNear=et.camera.near,Y.shadowCameraFar=et.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=U.shadow.matrix,M++}n.point[_]=j,_++}else if(U.isHemisphereLight){const j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(V),j.groundColor.copy(U.groundColor).multiplyScalar(V),n.hemi[f]=j,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==g||P.pointLength!==_||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==y||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==S||P.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=g,P.pointLength=_,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=y,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=S,P.numLightProbes=R,n.version=c_++)}function c(l,h){let u=0,p=0,g=0,_=0,v=0;const m=h.matrixWorldInverse;for(let f=0,y=l.length;f<y;f++){const M=l[f];if(M.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(M.isSpotLight){const x=n.spot[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const x=n.point[p];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),p++}else if(M.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Bc(i){const t=new u_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function d_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Bc(i),t.set(s,[a])):r>=o.length?(a=new Bc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`;function m_(i,t,e){let n=new al;const s=new ht,r=new ht,o=new pe,a=new Ff({depthPacking:nd}),c=new Bf,l={},h=e.maxTextureSize,u={[ii]:We,[We]:ii,[Le]:Le},p=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new me;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dt(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let f=this.type;this.render=function(E,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const T=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Qn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=f!==In&&this.type===In,J=f===In&&this.type!==In;for(let W=0,j=E.length;W<j;W++){const et=E[W],Y=et.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const pt=Y.getFrameExtents();if(s.multiply(pt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pt.x),s.x=r.x*pt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pt.y),s.y=r.y*pt.y,Y.mapSize.y=r.y)),Y.map===null||V===!0||J===!0){const Mt=this.type!==In?{minFilter:fn,magFilter:fn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new si(s.x,s.y,Mt),Y.map.texture.name=et.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const dt=Y.getViewportCount();for(let Mt=0;Mt<dt;Mt++){const Nt=Y.getViewport(Mt);o.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),k.viewport(o),Y.updateMatrices(et,Mt),n=Y.getFrustum(),x(R,P,Y.camera,et,this.type)}Y.isPointLightShadow!==!0&&this.type===In&&y(Y,P),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(T,b,U)};function y(E,R){const P=t.update(v);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new si(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,P,p,v,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,P,g,v,null)}function M(E,R,P,T){let b=null;const U=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(U!==void 0)b=U;else if(b=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=b.uuid,V=R.uuid;let J=l[k];J===void 0&&(J={},l[k]=J);let W=J[V];W===void 0&&(W=b.clone(),J[V]=W,R.addEventListener("dispose",S)),b=W}if(b.visible=R.visible,b.wireframe=R.wireframe,T===In?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=i.properties.get(b);k.light=P}return b}function x(E,R,P,T,b){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===In)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const V=t.update(E),J=E.material;if(Array.isArray(J)){const W=V.groups;for(let j=0,et=W.length;j<et;j++){const Y=W[j],pt=J[Y.materialIndex];if(pt&&pt.visible){const dt=M(E,pt,T,b);E.onBeforeShadow(i,E,R,P,V,dt,Y),i.renderBufferDirect(P,null,V,dt,E,Y),E.onAfterShadow(i,E,R,P,V,dt,Y)}}}else if(J.visible){const W=M(E,J,T,b);E.onBeforeShadow(i,E,R,P,V,W,null),i.renderBufferDirect(P,null,V,W,E,null),E.onAfterShadow(i,E,R,P,V,W,null)}}const k=E.children;for(let V=0,J=k.length;V<J;V++)x(k[V],R,P,T,b)}function S(E){E.target.removeEventListener("dispose",S);for(const P in l){const T=l[P],b=E.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const g_={[qo]:Zo,[jo]:Ko,[Jo]:Qo,[ns]:$o,[Zo]:qo,[Ko]:jo,[Qo]:Jo,[$o]:ns};function __(i,t){function e(){let O=!1;const _t=new pe;let yt=null;const Lt=new pe(0,0,0,0);return{setMask:function(gt){yt!==gt&&!O&&(i.colorMask(gt,gt,gt,gt),yt=gt)},setLocked:function(gt){O=gt},setClear:function(gt,ot,Ct,Xt,de){de===!0&&(gt*=Xt,ot*=Xt,Ct*=Xt),_t.set(gt,ot,Ct,Xt),Lt.equals(_t)===!1&&(i.clearColor(gt,ot,Ct,Xt),Lt.copy(_t))},reset:function(){O=!1,yt=null,Lt.set(-1,0,0,0)}}}function n(){let O=!1,_t=!1,yt=null,Lt=null,gt=null;return{setReversed:function(ot){if(_t!==ot){const Ct=t.get("EXT_clip_control");ot?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),_t=ot;const Xt=gt;gt=null,this.setClear(Xt)}},getReversed:function(){return _t},setTest:function(ot){ot?lt(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(ot){yt!==ot&&!O&&(i.depthMask(ot),yt=ot)},setFunc:function(ot){if(_t&&(ot=g_[ot]),Lt!==ot){switch(ot){case qo:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case Ko:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Lt=ot}},setLocked:function(ot){O=ot},setClear:function(ot){gt!==ot&&(_t&&(ot=1-ot),i.clearDepth(ot),gt=ot)},reset:function(){O=!1,yt=null,Lt=null,gt=null,_t=!1}}}function s(){let O=!1,_t=null,yt=null,Lt=null,gt=null,ot=null,Ct=null,Xt=null,de=null;return{setTest:function(se){O||(se?lt(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(se){_t!==se&&!O&&(i.stencilMask(se),_t=se)},setFunc:function(se,wn,mn){(yt!==se||Lt!==wn||gt!==mn)&&(i.stencilFunc(se,wn,mn),yt=se,Lt=wn,gt=mn)},setOp:function(se,wn,mn){(ot!==se||Ct!==wn||Xt!==mn)&&(i.stencilOp(se,wn,mn),ot=se,Ct=wn,Xt=mn)},setLocked:function(se){O=se},setClear:function(se){de!==se&&(i.clearStencil(se),de=se)},reset:function(){O=!1,_t=null,yt=null,Lt=null,gt=null,ot=null,Ct=null,Xt=null,de=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},p=new WeakMap,g=[],_=null,v=!1,m=null,f=null,y=null,M=null,x=null,S=null,E=null,R=new Kt(0,0,0),P=0,T=!1,b=null,U=null,k=null,V=null,J=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,et=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=et>=1):Y.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=et>=2);let pt=null,dt={};const Mt=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),Yt=new pe().fromArray(Mt),Qt=new pe().fromArray(Nt);function Zt(O,_t,yt,Lt){const gt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(O,ot),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<yt;Ct++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,Lt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(_t+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ot}const tt={};tt[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(ns),st(!1),N(Ul),lt(i.CULL_FACE),rt(Qn);function lt(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function At(O,_t){return u[O]!==_t?(i.bindFramebuffer(O,_t),u[O]=_t,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_t),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function Pt(O,_t){let yt=g,Lt=!1;if(O){yt=p.get(_t),yt===void 0&&(yt=[],p.set(_t,yt));const gt=O.textures;if(yt.length!==gt.length||yt[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Ct=gt.length;ot<Ct;ot++)yt[ot]=i.COLOR_ATTACHMENT0+ot;yt.length=gt.length,Lt=!0}}else yt[0]!==i.BACK&&(yt[0]=i.BACK,Lt=!0);Lt&&i.drawBuffers(yt)}function Wt(O){return _!==O?(i.useProgram(O),_=O,!0):!1}const ee={[mi]:i.FUNC_ADD,[Ru]:i.FUNC_SUBTRACT,[Cu]:i.FUNC_REVERSE_SUBTRACT};ee[Pu]=i.MIN,ee[Lu]=i.MAX;const D={[Iu]:i.ZERO,[Du]:i.ONE,[Uu]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[zu]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Ou]:i.DST_ALPHA,[Nu]:i.ONE_MINUS_SRC_COLOR,[Yo]:i.ONE_MINUS_SRC_ALPHA,[ku]:i.ONE_MINUS_DST_COLOR,[Fu]:i.ONE_MINUS_DST_ALPHA,[Hu]:i.CONSTANT_COLOR,[Vu]:i.ONE_MINUS_CONSTANT_COLOR,[Gu]:i.CONSTANT_ALPHA,[Wu]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(O,_t,yt,Lt,gt,ot,Ct,Xt,de,se){if(O===Qn){v===!0&&(mt(i.BLEND),v=!1);return}if(v===!1&&(lt(i.BLEND),v=!0),O!==Au){if(O!==m||se!==T){if((f!==mi||x!==mi)&&(i.blendEquation(i.FUNC_ADD),f=mi,x=mi),se)switch(O){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ol:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,M=null,S=null,E=null,R.set(0,0,0),P=0,m=O,T=se}return}gt=gt||_t,ot=ot||yt,Ct=Ct||Lt,(_t!==f||gt!==x)&&(i.blendEquationSeparate(ee[_t],ee[gt]),f=_t,x=gt),(yt!==y||Lt!==M||ot!==S||Ct!==E)&&(i.blendFuncSeparate(D[yt],D[Lt],D[ot],D[Ct]),y=yt,M=Lt,S=ot,E=Ct),(Xt.equals(R)===!1||de!==P)&&(i.blendColor(Xt.r,Xt.g,Xt.b,de),R.copy(Xt),P=de),m=O,T=!1}function it(O,_t){O.side===Le?mt(i.CULL_FACE):lt(i.CULL_FACE);let yt=O.side===We;_t&&(yt=!yt),st(yt),O.blending===Ki&&O.transparent===!1?rt(Qn):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const Lt=O.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),G(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function st(O){b!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),b=O)}function N(O){O!==Tu?(lt(i.CULL_FACE),O!==U&&(O===Ul?i.cullFace(i.BACK):O===wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),U=O}function X(O){O!==k&&(j&&i.lineWidth(O),k=O)}function G(O,_t,yt){O?(lt(i.POLYGON_OFFSET_FILL),(V!==_t||J!==yt)&&(i.polygonOffset(_t,yt),V=_t,J=yt)):mt(i.POLYGON_OFFSET_FILL)}function K(O){O?lt(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function nt(O){O===void 0&&(O=i.TEXTURE0+W-1),pt!==O&&(i.activeTexture(O),pt=O)}function ct(O,_t,yt){yt===void 0&&(pt===null?yt=i.TEXTURE0+W-1:yt=pt);let Lt=dt[yt];Lt===void 0&&(Lt={type:void 0,texture:void 0},dt[yt]=Lt),(Lt.type!==O||Lt.texture!==_t)&&(pt!==yt&&(i.activeTexture(yt),pt=yt),i.bindTexture(O,_t||tt[O]),Lt.type=O,Lt.texture=_t)}function A(){const O=dt[pt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function d(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function F(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(O){Yt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Yt.copy(O))}function Ft(O){Qt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Qt.copy(O))}function Tt(O,_t){let yt=l.get(_t);yt===void 0&&(yt=new WeakMap,l.set(_t,yt));let Lt=yt.get(O);Lt===void 0&&(Lt=i.getUniformBlockIndex(_t,O.name),yt.set(O,Lt))}function St(O,_t){const Lt=l.get(_t).get(O);c.get(_t)!==Lt&&(i.uniformBlockBinding(_t,Lt,O.__bindingPointIndex),c.set(_t,Lt))}function Vt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,dt={},u={},p=new WeakMap,g=[],_=null,v=!1,m=null,f=null,y=null,M=null,x=null,S=null,E=null,R=new Kt(0,0,0),P=0,T=!1,b=null,U=null,k=null,V=null,J=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:mt,bindFramebuffer:At,drawBuffers:Pt,useProgram:Wt,setBlending:rt,setMaterial:it,setFlipSided:st,setCullFace:N,setLineWidth:X,setPolygonOffset:G,setScissorTest:K,activeTexture:nt,bindTexture:ct,unbindTexture:A,compressedTexImage2D:d,compressedTexImage3D:C,texImage2D:ut,texImage3D:$,updateUBOMapping:Tt,uniformBlockBinding:St,texStorage2D:Q,texStorage3D:vt,texSubImage2D:L,texSubImage3D:B,compressedTexSubImage2D:F,compressedTexSubImage3D:at,scissor:ft,viewport:Ft,reset:Vt}}function x_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap;let u;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,d){return g?new OffscreenCanvas(A,d):Fr("canvas")}function v(A,d,C){let L=1;const B=ct(A);if((B.width>C||B.height>C)&&(L=C/Math.max(B.width,B.height)),L<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const F=Math.floor(L*B.width),at=Math.floor(L*B.height);u===void 0&&(u=_(F,at));const Q=d?_(F,at):u;return Q.width=F,Q.height=at,Q.getContext("2d").drawImage(A,0,0,F,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+F+"x"+at+")."),Q}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,d,C,L,B=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let F=d;if(d===i.RED&&(C===i.FLOAT&&(F=i.R32F),C===i.HALF_FLOAT&&(F=i.R16F),C===i.UNSIGNED_BYTE&&(F=i.R8)),d===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.R8UI),C===i.UNSIGNED_SHORT&&(F=i.R16UI),C===i.UNSIGNED_INT&&(F=i.R32UI),C===i.BYTE&&(F=i.R8I),C===i.SHORT&&(F=i.R16I),C===i.INT&&(F=i.R32I)),d===i.RG&&(C===i.FLOAT&&(F=i.RG32F),C===i.HALF_FLOAT&&(F=i.RG16F),C===i.UNSIGNED_BYTE&&(F=i.RG8)),d===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RG8UI),C===i.UNSIGNED_SHORT&&(F=i.RG16UI),C===i.UNSIGNED_INT&&(F=i.RG32UI),C===i.BYTE&&(F=i.RG8I),C===i.SHORT&&(F=i.RG16I),C===i.INT&&(F=i.RG32I)),d===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RGB8UI),C===i.UNSIGNED_SHORT&&(F=i.RGB16UI),C===i.UNSIGNED_INT&&(F=i.RGB32UI),C===i.BYTE&&(F=i.RGB8I),C===i.SHORT&&(F=i.RGB16I),C===i.INT&&(F=i.RGB32I)),d===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(F=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(F=i.RGBA16UI),C===i.UNSIGNED_INT&&(F=i.RGBA32UI),C===i.BYTE&&(F=i.RGBA8I),C===i.SHORT&&(F=i.RGBA16I),C===i.INT&&(F=i.RGBA32I)),d===i.RGB&&(C===i.UNSIGNED_INT_5_9_9_9_REV&&(F=i.RGB9_E5),C===i.UNSIGNED_INT_10F_11F_11F_REV&&(F=i.R11F_G11F_B10F)),d===i.RGBA){const at=B?Nr:ie.getTransfer(L);C===i.FLOAT&&(F=i.RGBA32F),C===i.HALF_FLOAT&&(F=i.RGBA16F),C===i.UNSIGNED_BYTE&&(F=at===ae?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(F=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(F=i.RGB5_A1)}return(F===i.R16F||F===i.R32F||F===i.RG16F||F===i.RG32F||F===i.RGBA16F||F===i.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function x(A,d){let C;return A?d===null||d===Ei||d===Os?C=i.DEPTH24_STENCIL8:d===Fn?C=i.DEPTH32F_STENCIL8:d===Ns&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):d===null||d===Ei||d===Os?C=i.DEPTH_COMPONENT24:d===Fn?C=i.DEPTH_COMPONENT32F:d===Ns&&(C=i.DEPTH_COMPONENT16),C}function S(A,d){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==_n?Math.log2(Math.max(d.width,d.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?d.mipmaps.length:1}function E(A){const d=A.target;d.removeEventListener("dispose",E),P(d),d.isVideoTexture&&h.delete(d)}function R(A){const d=A.target;d.removeEventListener("dispose",R),b(d)}function P(A){const d=n.get(A);if(d.__webglInit===void 0)return;const C=A.source,L=p.get(C);if(L){const B=L[d.__cacheKey];B.usedTimes--,B.usedTimes===0&&T(A),Object.keys(L).length===0&&p.delete(C)}n.remove(A)}function T(A){const d=n.get(A);i.deleteTexture(d.__webglTexture);const C=A.source,L=p.get(C);delete L[d.__cacheKey],o.memory.textures--}function b(A){const d=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(d.__webglFramebuffer[L]))for(let B=0;B<d.__webglFramebuffer[L].length;B++)i.deleteFramebuffer(d.__webglFramebuffer[L][B]);else i.deleteFramebuffer(d.__webglFramebuffer[L]);d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer[L])}else{if(Array.isArray(d.__webglFramebuffer))for(let L=0;L<d.__webglFramebuffer.length;L++)i.deleteFramebuffer(d.__webglFramebuffer[L]);else i.deleteFramebuffer(d.__webglFramebuffer);if(d.__webglDepthbuffer&&i.deleteRenderbuffer(d.__webglDepthbuffer),d.__webglMultisampledFramebuffer&&i.deleteFramebuffer(d.__webglMultisampledFramebuffer),d.__webglColorRenderbuffer)for(let L=0;L<d.__webglColorRenderbuffer.length;L++)d.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(d.__webglColorRenderbuffer[L]);d.__webglDepthRenderbuffer&&i.deleteRenderbuffer(d.__webglDepthRenderbuffer)}const C=A.textures;for(let L=0,B=C.length;L<B;L++){const F=n.get(C[L]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),o.memory.textures--),n.remove(C[L])}n.remove(A)}let U=0;function k(){U=0}function V(){const A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function J(A){const d=[];return d.push(A.wrapS),d.push(A.wrapT),d.push(A.wrapR||0),d.push(A.magFilter),d.push(A.minFilter),d.push(A.anisotropy),d.push(A.internalFormat),d.push(A.format),d.push(A.type),d.push(A.generateMipmaps),d.push(A.premultiplyAlpha),d.push(A.flipY),d.push(A.unpackAlignment),d.push(A.colorSpace),d.join()}function W(A,d){const C=n.get(A);if(A.isVideoTexture&&K(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&C.__version!==A.version){const L=A.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(C,A,d);return}}else A.isExternalTexture&&(C.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+d)}function j(A,d){const C=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&C.__version!==A.version){tt(C,A,d);return}e.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+d)}function et(A,d){const C=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&C.__version!==A.version){tt(C,A,d);return}e.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+d)}function Y(A,d){const C=n.get(A);if(A.version>0&&C.__version!==A.version){lt(C,A,d);return}e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+d)}const pt={[Us]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},dt={[fn]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[_n]:i.LINEAR,[io]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},Mt={[sd]:i.NEVER,[hd]:i.ALWAYS,[rd]:i.LESS,[fh]:i.LEQUAL,[od]:i.EQUAL,[cd]:i.GEQUAL,[ad]:i.GREATER,[ld]:i.NOTEQUAL};function Nt(A,d){if(d.type===Fn&&t.has("OES_texture_float_linear")===!1&&(d.magFilter===_n||d.magFilter===io||d.magFilter===Ks||d.magFilter===vi||d.minFilter===_n||d.minFilter===io||d.minFilter===Ks||d.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,pt[d.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,pt[d.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,pt[d.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[d.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[d.minFilter]),d.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Mt[d.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(d.magFilter===fn||d.minFilter!==Ks&&d.minFilter!==vi||d.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(d.anisotropy>1||n.get(d).__currentAnisotropy){const C=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(d.anisotropy,s.getMaxAnisotropy())),n.get(d).__currentAnisotropy=d.anisotropy}}}function Yt(A,d){let C=!1;A.__webglInit===void 0&&(A.__webglInit=!0,d.addEventListener("dispose",E));const L=d.source;let B=p.get(L);B===void 0&&(B={},p.set(L,B));const F=J(d);if(F!==A.__cacheKey){B[F]===void 0&&(B[F]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,C=!0),B[F].usedTimes++;const at=B[A.__cacheKey];at!==void 0&&(B[A.__cacheKey].usedTimes--,at.usedTimes===0&&T(d)),A.__cacheKey=F,A.__webglTexture=B[F].texture}return C}function Qt(A,d,C){return Math.floor(Math.floor(A/C)/d)}function Zt(A,d,C,L){const F=A.updateRanges;if(F.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,d.width,d.height,C,L,d.data);else{F.sort(($,ft)=>$.start-ft.start);let at=0;for(let $=1;$<F.length;$++){const ft=F[at],Ft=F[$],Tt=ft.start+ft.count,St=Qt(Ft.start,d.width,4),Vt=Qt(ft.start,d.width,4);Ft.start<=Tt+1&&St===Vt&&Qt(Ft.start+Ft.count-1,d.width,4)===St?ft.count=Math.max(ft.count,Ft.start+Ft.count-ft.start):(++at,F[at]=Ft)}F.length=at+1;const Q=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),ut=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,d.width);for(let $=0,ft=F.length;$<ft;$++){const Ft=F[$],Tt=Math.floor(Ft.start/4),St=Math.ceil(Ft.count/4),Vt=Tt%d.width,O=Math.floor(Tt/d.width),_t=St,yt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Vt,O,_t,yt,C,L,d.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Q),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function tt(A,d,C){let L=i.TEXTURE_2D;(d.isDataArrayTexture||d.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),d.isData3DTexture&&(L=i.TEXTURE_3D);const B=Yt(A,d),F=d.source;e.bindTexture(L,A.__webglTexture,i.TEXTURE0+C);const at=n.get(F);if(F.version!==at.__version||B===!0){e.activeTexture(i.TEXTURE0+C);const Q=ie.getPrimaries(ie.workingColorSpace),vt=d.colorSpace===$n?null:ie.getPrimaries(d.colorSpace),ut=d.colorSpace===$n||Q===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let $=v(d.image,!1,s.maxTextureSize);$=nt(d,$);const ft=r.convert(d.format,d.colorSpace),Ft=r.convert(d.type);let Tt=M(d.internalFormat,ft,Ft,d.colorSpace,d.isVideoTexture);Nt(L,d);let St;const Vt=d.mipmaps,O=d.isVideoTexture!==!0,_t=at.__version===void 0||B===!0,yt=F.dataReady,Lt=S(d,$);if(d.isDepthTexture)Tt=x(d.format===Bs,d.type),_t&&(O?e.texStorage2D(i.TEXTURE_2D,1,Tt,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Tt,$.width,$.height,0,ft,Ft,null));else if(d.isDataTexture)if(Vt.length>0){O&&_t&&e.texStorage2D(i.TEXTURE_2D,Lt,Tt,Vt[0].width,Vt[0].height);for(let gt=0,ot=Vt.length;gt<ot;gt++)St=Vt[gt],O?yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,ft,Ft,St.data):e.texImage2D(i.TEXTURE_2D,gt,Tt,St.width,St.height,0,ft,Ft,St.data);d.generateMipmaps=!1}else O?(_t&&e.texStorage2D(i.TEXTURE_2D,Lt,Tt,$.width,$.height),yt&&Zt(d,$,ft,Ft)):e.texImage2D(i.TEXTURE_2D,0,Tt,$.width,$.height,0,ft,Ft,$.data);else if(d.isCompressedTexture)if(d.isCompressedArrayTexture){O&&_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Tt,Vt[0].width,Vt[0].height,$.depth);for(let gt=0,ot=Vt.length;gt<ot;gt++)if(St=Vt[gt],d.format!==un)if(ft!==null)if(O){if(yt)if(d.layerUpdates.size>0){const Ct=pc(St.width,St.height,d.format,d.type);for(const Xt of d.layerUpdates){const de=St.data.subarray(Xt*Ct/St.data.BYTES_PER_ELEMENT,(Xt+1)*Ct/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Xt,St.width,St.height,1,ft,de)}d.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,St.width,St.height,$.depth,ft,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Tt,St.width,St.height,$.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?yt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,St.width,St.height,$.depth,ft,Ft,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Tt,St.width,St.height,$.depth,0,ft,Ft,St.data)}else{O&&_t&&e.texStorage2D(i.TEXTURE_2D,Lt,Tt,Vt[0].width,Vt[0].height);for(let gt=0,ot=Vt.length;gt<ot;gt++)St=Vt[gt],d.format!==un?ft!==null?O?yt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,ft,St.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Tt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,St.width,St.height,ft,Ft,St.data):e.texImage2D(i.TEXTURE_2D,gt,Tt,St.width,St.height,0,ft,Ft,St.data)}else if(d.isDataArrayTexture)if(O){if(_t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Lt,Tt,$.width,$.height,$.depth),yt)if(d.layerUpdates.size>0){const gt=pc($.width,$.height,d.format,d.type);for(const ot of d.layerUpdates){const Ct=$.data.subarray(ot*gt/$.data.BYTES_PER_ELEMENT,(ot+1)*gt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,$.width,$.height,1,ft,Ft,Ct)}d.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,Ft,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,$.width,$.height,$.depth,0,ft,Ft,$.data);else if(d.isData3DTexture)O?(_t&&e.texStorage3D(i.TEXTURE_3D,Lt,Tt,$.width,$.height,$.depth),yt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,Ft,$.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,$.width,$.height,$.depth,0,ft,Ft,$.data);else if(d.isFramebufferTexture){if(_t)if(O)e.texStorage2D(i.TEXTURE_2D,Lt,Tt,$.width,$.height);else{let gt=$.width,ot=$.height;for(let Ct=0;Ct<Lt;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Tt,gt,ot,0,ft,Ft,null),gt>>=1,ot>>=1}}else if(Vt.length>0){if(O&&_t){const gt=ct(Vt[0]);e.texStorage2D(i.TEXTURE_2D,Lt,Tt,gt.width,gt.height)}for(let gt=0,ot=Vt.length;gt<ot;gt++)St=Vt[gt],O?yt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,ft,Ft,St):e.texImage2D(i.TEXTURE_2D,gt,Tt,ft,Ft,St);d.generateMipmaps=!1}else if(O){if(_t){const gt=ct($);e.texStorage2D(i.TEXTURE_2D,Lt,Tt,gt.width,gt.height)}yt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Ft,$)}else e.texImage2D(i.TEXTURE_2D,0,Tt,ft,Ft,$);m(d)&&f(L),at.__version=F.version,d.onUpdate&&d.onUpdate(d)}A.__version=d.version}function lt(A,d,C){if(d.image.length!==6)return;const L=Yt(A,d),B=d.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+C);const F=n.get(B);if(B.version!==F.__version||L===!0){e.activeTexture(i.TEXTURE0+C);const at=ie.getPrimaries(ie.workingColorSpace),Q=d.colorSpace===$n?null:ie.getPrimaries(d.colorSpace),vt=d.colorSpace===$n||at===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,d.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,d.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,d.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const ut=d.isCompressedTexture||d.image[0].isCompressedTexture,$=d.image[0]&&d.image[0].isDataTexture,ft=[];for(let ot=0;ot<6;ot++)!ut&&!$?ft[ot]=v(d.image[ot],!0,s.maxCubemapSize):ft[ot]=$?d.image[ot].image:d.image[ot],ft[ot]=nt(d,ft[ot]);const Ft=ft[0],Tt=r.convert(d.format,d.colorSpace),St=r.convert(d.type),Vt=M(d.internalFormat,Tt,St,d.colorSpace),O=d.isVideoTexture!==!0,_t=F.__version===void 0||L===!0,yt=B.dataReady;let Lt=S(d,Ft);Nt(i.TEXTURE_CUBE_MAP,d);let gt;if(ut){O&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Vt,Ft.width,Ft.height);for(let ot=0;ot<6;ot++){gt=ft[ot].mipmaps;for(let Ct=0;Ct<gt.length;Ct++){const Xt=gt[Ct];d.format!==un?Tt!==null?O?yt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct,0,0,Xt.width,Xt.height,Tt,Xt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct,Vt,Xt.width,Xt.height,0,Xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct,0,0,Xt.width,Xt.height,Tt,St,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct,Vt,Xt.width,Xt.height,0,Tt,St,Xt.data)}}}else{if(gt=d.mipmaps,O&&_t){gt.length>0&&Lt++;const ot=ct(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Lt,Vt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if($){O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,ft[ot].width,ft[ot].height,Tt,St,ft[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Vt,ft[ot].width,ft[ot].height,0,Tt,St,ft[ot].data);for(let Ct=0;Ct<gt.length;Ct++){const de=gt[Ct].image[ot].image;O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct+1,0,0,de.width,de.height,Tt,St,de.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct+1,Vt,de.width,de.height,0,Tt,St,de.data)}}else{O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Tt,St,ft[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Vt,Tt,St,ft[ot]);for(let Ct=0;Ct<gt.length;Ct++){const Xt=gt[Ct];O?yt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct+1,0,0,Tt,St,Xt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Ct+1,Vt,Tt,St,Xt.image[ot])}}}m(d)&&f(i.TEXTURE_CUBE_MAP),F.__version=B.version,d.onUpdate&&d.onUpdate(d)}A.__version=d.version}function mt(A,d,C,L,B,F){const at=r.convert(C.format,C.colorSpace),Q=r.convert(C.type),vt=M(C.internalFormat,at,Q,C.colorSpace),ut=n.get(d),$=n.get(C);if($.__renderTarget=d,!ut.__hasExternalTextures){const ft=Math.max(1,d.width>>F),Ft=Math.max(1,d.height>>F);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?e.texImage3D(B,F,vt,ft,Ft,d.depth,0,at,Q,null):e.texImage2D(B,F,vt,ft,Ft,0,at,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),G(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,B,$.__webglTexture,0,X(d)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,B,$.__webglTexture,F),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(A,d,C){if(i.bindRenderbuffer(i.RENDERBUFFER,A),d.depthBuffer){const L=d.depthTexture,B=L&&L.isDepthTexture?L.type:null,F=x(d.stencilBuffer,B),at=d.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=X(d);G(d)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,F,d.width,d.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,F,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,F,d.width,d.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,A)}else{const L=d.textures;for(let B=0;B<L.length;B++){const F=L[B],at=r.convert(F.format,F.colorSpace),Q=r.convert(F.type),vt=M(F.internalFormat,at,Q,F.colorSpace),ut=X(d);C&&G(d)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,vt,d.width,d.height):G(d)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,vt,d.width,d.height):i.renderbufferStorage(i.RENDERBUFFER,vt,d.width,d.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(A,d){if(d&&d.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(d.depthTexture&&d.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(d.depthTexture);L.__renderTarget=d,(!L.__webglTexture||d.depthTexture.image.width!==d.width||d.depthTexture.image.height!==d.height)&&(d.depthTexture.image.width=d.width,d.depthTexture.image.height=d.height,d.depthTexture.needsUpdate=!0),W(d.depthTexture,0);const B=L.__webglTexture,F=X(d);if(d.depthTexture.format===Fs)G(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(d.depthTexture.format===Bs)G(d)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,F):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function Wt(A){const d=n.get(A),C=A.isWebGLCubeRenderTarget===!0;if(d.__boundDepthTexture!==A.depthTexture){const L=A.depthTexture;if(d.__depthDisposeCallback&&d.__depthDisposeCallback(),L){const B=()=>{delete d.__boundDepthTexture,delete d.__depthDisposeCallback,L.removeEventListener("dispose",B)};L.addEventListener("dispose",B),d.__depthDisposeCallback=B}d.__boundDepthTexture=L}if(A.depthTexture&&!d.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");const L=A.texture.mipmaps;L&&L.length>0?Pt(d.__webglFramebuffer[0],A):Pt(d.__webglFramebuffer,A)}else if(C){d.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[L]),d.__webglDepthbuffer[L]===void 0)d.__webglDepthbuffer[L]=i.createRenderbuffer(),At(d.__webglDepthbuffer[L],A,!1);else{const B=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=d.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,F)}}else{const L=A.texture.mipmaps;if(L&&L.length>0?e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,d.__webglFramebuffer),d.__webglDepthbuffer===void 0)d.__webglDepthbuffer=i.createRenderbuffer(),At(d.__webglDepthbuffer,A,!1);else{const B=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=d.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,F),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,F)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(A,d,C){const L=n.get(A);d!==void 0&&mt(L.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Wt(A)}function D(A){const d=A.texture,C=n.get(A),L=n.get(d);A.addEventListener("dispose",R);const B=A.textures,F=A.isWebGLCubeRenderTarget===!0,at=B.length>1;if(at||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=d.version,o.memory.textures++),F){C.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(d.mipmaps&&d.mipmaps.length>0){C.__webglFramebuffer[Q]=[];for(let vt=0;vt<d.mipmaps.length;vt++)C.__webglFramebuffer[Q][vt]=i.createFramebuffer()}else C.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(d.mipmaps&&d.mipmaps.length>0){C.__webglFramebuffer=[];for(let Q=0;Q<d.mipmaps.length;Q++)C.__webglFramebuffer[Q]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(at)for(let Q=0,vt=B.length;Q<vt;Q++){const ut=n.get(B[Q]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&G(A)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let Q=0;Q<B.length;Q++){const vt=B[Q];C.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[Q]);const ut=r.convert(vt.format,vt.colorSpace),$=r.convert(vt.type),ft=M(vt.internalFormat,ut,$,vt.colorSpace,A.isXRRenderTarget===!0),Ft=X(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft,ft,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,C.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),At(C.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(F){e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,d);for(let Q=0;Q<6;Q++)if(d.mipmaps&&d.mipmaps.length>0)for(let vt=0;vt<d.mipmaps.length;vt++)mt(C.__webglFramebuffer[Q][vt],A,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt);else mt(C.__webglFramebuffer[Q],A,d,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(d)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Q=0,vt=B.length;Q<vt;Q++){const ut=B[Q],$=n.get(ut);let ft=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,$.__webglTexture),Nt(ft,ut),mt(C.__webglFramebuffer,A,ut,i.COLOR_ATTACHMENT0+Q,ft,0),m(ut)&&f(ft)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,L.__webglTexture),Nt(Q,d),d.mipmaps&&d.mipmaps.length>0)for(let vt=0;vt<d.mipmaps.length;vt++)mt(C.__webglFramebuffer[vt],A,d,i.COLOR_ATTACHMENT0,Q,vt);else mt(C.__webglFramebuffer,A,d,i.COLOR_ATTACHMENT0,Q,0);m(d)&&f(Q),e.unbindTexture()}A.depthBuffer&&Wt(A)}function rt(A){const d=A.textures;for(let C=0,L=d.length;C<L;C++){const B=d[C];if(m(B)){const F=y(A),at=n.get(B).__webglTexture;e.bindTexture(F,at),f(F),e.unbindTexture()}}}const it=[],st=[];function N(A){if(A.samples>0){if(G(A)===!1){const d=A.textures,C=A.width,L=A.height;let B=i.COLOR_BUFFER_BIT;const F=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=n.get(A),Q=d.length>1;if(Q)for(let ut=0;ut<d.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);const vt=A.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let ut=0;ut<d.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);const $=n.get(d[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,C,L,0,0,C,L,B,i.NEAREST),c===!0&&(it.length=0,st.length=0,it.push(i.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(it.push(F),st.push(F),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,st)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ut=0;ut<d.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,at.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,at.__webglColorRenderbuffer[ut]);const $=n.get(d[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,at.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,$,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const d=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[d])}}}function X(A){return Math.min(s.maxSamples,A.samples)}function G(A){const d=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&d.__useRenderToTexture!==!1}function K(A){const d=o.render.frame;h.get(A)!==d&&(h.set(A,d),A.update())}function nt(A,d){const C=A.colorSpace,L=A.format,B=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||C!==rs&&C!==$n&&(ie.getTransfer(C)===ae?(L!==un||B!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),d}function ct(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=et,this.setTextureCube=Y,this.rebindTextures=ee,this.setupRenderTarget=D,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=G}function v_(i,t){function e(n,s=$n){let r;const o=ie.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ah)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===Ns)return i.UNSIGNED_SHORT;if(n===$a)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===us)return i.HALF_FLOAT;if(n===lh)return i.ALPHA;if(n===ch)return i.RGB;if(n===un)return i.RGBA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===hh)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===uh)return i.RG;if(n===el)return i.RG_INTEGER;if(n===nl)return i.RGBA_INTEGER;if(n===Pr||n===Lr||n===Ir||n===Dr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===la||n===ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===la)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ca)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===Ma||n===ya||n===Sa||n===Ea)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===va)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Ta||n===wa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ba)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`;class S_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Rh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Hn({vertexShader:M_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dt(new Ge(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E_ extends wi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,p=null,g=null,_=null;const v=typeof XRWebGLBinding<"u",m=new S_,f={},y=e.getContextAttributes();let M=null,x=null;const S=[],E=[],R=new ht;let P=null;const T=new Oe;T.viewport=new pe;const b=new Oe;b.viewport=new pe;const U=[T,b],k=new Gf;let V=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=S[tt];return lt===void 0&&(lt=new To,S[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=S[tt];return lt===void 0&&(lt=new To,S[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=S[tt];return lt===void 0&&(lt=new To,S[tt]=lt),lt.getHandSpace()};function W(tt){const lt=E.indexOf(tt.inputSource);if(lt===-1)return;const mt=S[lt];mt!==void 0&&(mt.update(tt.inputSource,tt.frame,l||o),mt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function j(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",et);for(let tt=0;tt<S.length;tt++){const lt=E[tt];lt!==null&&(E[tt]=null,S[tt].disconnect(lt))}V=null,J=null,m.reset();for(const tt in f)delete f[tt];t.setRenderTarget(M),g=null,p=null,u=null,s=null,x=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",j),s.addEventListener("inputsourceschange",et),y.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,At=null,Pt=null;y.depth&&(Pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=y.stencil?Bs:Fs,At=y.stencil?Os:Ei);const Wt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};u=this.getBinding(),p=u.createProjectionLayer(Wt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new si(p.textureWidth,p.textureHeight,{format:un,type:yn,depthTexture:new Ah(p.textureWidth,p.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,mt),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new si(g.framebufferWidth,g.framebufferHeight,{format:un,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(tt){for(let lt=0;lt<tt.removed.length;lt++){const mt=tt.removed[lt],At=E.indexOf(mt);At>=0&&(E[At]=null,S[At].disconnect(mt))}for(let lt=0;lt<tt.added.length;lt++){const mt=tt.added[lt];let At=E.indexOf(mt);if(At===-1){for(let Wt=0;Wt<S.length;Wt++)if(Wt>=E.length){E.push(mt),At=Wt;break}else if(E[Wt]===null){E[Wt]=mt,At=Wt;break}if(At===-1)break}const Pt=S[At];Pt&&Pt.connect(mt)}}const Y=new I,pt=new I;function dt(tt,lt,mt){Y.setFromMatrixPosition(lt.matrixWorld),pt.setFromMatrixPosition(mt.matrixWorld);const At=Y.distanceTo(pt),Pt=lt.projectionMatrix.elements,Wt=mt.projectionMatrix.elements,ee=Pt[14]/(Pt[10]-1),D=Pt[14]/(Pt[10]+1),rt=(Pt[9]+1)/Pt[5],it=(Pt[9]-1)/Pt[5],st=(Pt[8]-1)/Pt[0],N=(Wt[8]+1)/Wt[0],X=ee*st,G=ee*N,K=At/(-st+N),nt=K*-st;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(nt),tt.translateZ(K),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Pt[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ct=ee+K,A=D+K,d=X-nt,C=G+(At-nt),L=rt*D/A*ct,B=it*D/A*ct;tt.projectionMatrix.makePerspective(d,C,L,B,ct,A),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Mt(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let lt=tt.near,mt=tt.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),k.near=b.near=T.near=lt,k.far=b.far=T.far=mt,(V!==k.near||J!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),V=k.near,J=k.far),k.layers.mask=tt.layers.mask|6,T.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const At=tt.parent,Pt=k.cameras;Mt(k,At);for(let Wt=0;Wt<Pt.length;Wt++)Mt(Pt[Wt],At);Pt.length===2?dt(k,T,b):k.projectionMatrix.copy(T.projectionMatrix),Nt(tt,k,At)};function Nt(tt,lt,mt){mt===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(mt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=ks*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(tt){c=tt,p!==null&&(p.fixedFoveation=tt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(tt){return f[tt]};let Yt=null;function Qt(tt,lt){if(h=lt.getViewerPose(l||o),_=lt,h!==null){const mt=h.views;g!==null&&(t.setRenderTargetFramebuffer(x,g.framebuffer),t.setRenderTarget(x));let At=!1;mt.length!==k.cameras.length&&(k.cameras.length=0,At=!0);for(let D=0;D<mt.length;D++){const rt=mt[D];let it=null;if(g!==null)it=g.getViewport(rt);else{const N=u.getViewSubImage(p,rt);it=N.viewport,D===0&&(t.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(x))}let st=U[D];st===void 0&&(st=new Oe,st.layers.enable(D),st.viewport=new pe,U[D]=st),st.matrix.fromArray(rt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(rt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(it.x,it.y,it.width,it.height),D===0&&(k.matrix.copy(st.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),At===!0&&k.cameras.push(st)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const D=u.getDepthInformation(mt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Pt&&Pt.includes("camera-access")&&v){t.state.unbindTexture(),u=n.getBinding();for(let D=0;D<mt.length;D++){const rt=mt[D].camera;if(rt){let it=f[rt];it||(it=new Rh,f[rt]=it);const st=u.getCameraImage(rt);it.sourceTexture=st}}}}for(let mt=0;mt<S.length;mt++){const At=E[mt],Pt=S[mt];At!==null&&Pt!==void 0&&Pt.update(At,lt,l||o)}Yt&&Yt(tt,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}const Zt=new kh;Zt.setAnimationLoop(Qt),this.setAnimationLoop=function(tt){Yt=tt},this.dispose=function(){}}}const fi=new Sn,b_=new ge;function T_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,M,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,y,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),M=y.envMap,x=y.envMapRotation;M&&(m.envMap.value=M,fi.copy(x),fi.x*=-1,fi.y*=-1,fi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(fi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function w_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){const x=M.program;n.uniformBlockBinding(y,x)}function l(y,M){let x=s[y.id];x===void 0&&(_(y),x=h(y),s[y.id]=x,y.addEventListener("dispose",m));const S=M.program;n.updateUBOMapping(y,S);const E=t.render.frame;r[y.id]!==E&&(p(y),r[y.id]=E)}function h(y){const M=u();y.__bindingPointIndex=M;const x=i.createBuffer(),S=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,S,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,x),x}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const M=s[y.id],x=y.uniforms,S=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,R=x.length;E<R;E++){const P=Array.isArray(x[E])?x[E]:[x[E]];for(let T=0,b=P.length;T<b;T++){const U=P[T];if(g(U,E,T,S)===!0){const k=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let J=0;for(let W=0;W<V.length;W++){const j=V[W],et=v(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,k+J,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,J),J+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(y,M,x,S){const E=y.value,R=M+"_"+x;if(S[R]===void 0)return typeof E=="number"||typeof E=="boolean"?S[R]=E:S[R]=E.clone(),!0;{const P=S[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return S[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(y){const M=y.uniforms;let x=0;const S=16;for(let R=0,P=M.length;R<P;R++){const T=Array.isArray(M[R])?M[R]:[M[R]];for(let b=0,U=T.length;b<U;b++){const k=T[b],V=Array.isArray(k.value)?k.value:[k.value];for(let J=0,W=V.length;J<W;J++){const j=V[J],et=v(j),Y=x%S,pt=Y%et.boundary,dt=Y+pt;x+=pt,dt!==0&&S-dt<et.storage&&(x+=S-dt),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=et.storage}}}const E=x%S;return E>0&&(x+=S-E),y.__size=x,y.__cache={},this}function v(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:f}}class A_{constructor(t={}){const{canvas:e=Ad(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let S=!1;this._outputColorSpace=Se;let E=0,R=0,P=null,T=-1,b=null;const U=new pe,k=new pe;let V=null;const J=new Kt(0);let W=0,j=e.width,et=e.height,Y=1,pt=null,dt=null;const Mt=new pe(0,0,j,et),Nt=new pe(0,0,j,et);let Yt=!1;const Qt=new al;let Zt=!1,tt=!1;const lt=new ge,mt=new I,At=new pe,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function ee(){return P===null?Y:1}let D=n;function rt(w,z){return e.getContext(w,z)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ja}`),e.addEventListener("webglcontextlost",yt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){const z="webgl2";if(D=rt(z,w),D===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let it,st,N,X,G,K,nt,ct,A,d,C,L,B,F,at,Q,vt,ut,$,ft,Ft,Tt,St,Vt;function O(){it=new F0(D),it.init(),Tt=new v_(D,it),st=new P0(D,it,t,Tt),N=new __(D,it),st.reversedDepthBuffer&&p&&N.buffers.depth.setReversed(!0),X=new z0(D),G=new s_,K=new x_(D,it,N,G,st,Tt,X),nt=new I0(x),ct=new O0(x),A=new Yf(D),St=new R0(D,A),d=new B0(D,A,X,St),C=new V0(D,d,A,X),$=new H0(D,st,K),Q=new L0(G),L=new i_(x,nt,ct,it,st,St,Q),B=new T_(x,G),F=new o_,at=new d_(it),ut=new A0(x,nt,ct,N,C,g,c),vt=new m_(x,C,st),Vt=new w_(D,X,st,N),ft=new C0(D,it,X),Ft=new k0(D,it,X),X.programs=L.programs,x.capabilities=st,x.extensions=it,x.properties=G,x.renderLists=F,x.shadowMap=vt,x.state=N,x.info=X}O();const _t=new E_(x,D);this.xr=_t,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(j,et,!1))},this.getSize=function(w){return w.set(j,et)},this.setSize=function(w,z,q=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=w,et=z,e.width=Math.floor(w*Y),e.height=Math.floor(z*Y),q===!0&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(j*Y,et*Y).floor()},this.setDrawingBufferSize=function(w,z,q){j=w,et=z,Y=q,e.width=Math.floor(w*q),e.height=Math.floor(z*q),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Mt)},this.setViewport=function(w,z,q,Z){w.isVector4?Mt.set(w.x,w.y,w.z,w.w):Mt.set(w,z,q,Z),N.viewport(U.copy(Mt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Nt)},this.setScissor=function(w,z,q,Z){w.isVector4?Nt.set(w.x,w.y,w.z,w.w):Nt.set(w,z,q,Z),N.scissor(k.copy(Nt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){N.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){pt=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,q=!0){let Z=0;if(w){let H=!1;if(P!==null){const xt=P.texture.format;H=xt===nl||xt===el||xt===tl}if(H){const xt=P.texture.type,bt=xt===yn||xt===Ei||xt===Ns||xt===Os||xt===Ka||xt===Qa,Ot=ut.getClearColor(),It=ut.getClearAlpha(),zt=Ot.r,Gt=Ot.g,Bt=Ot.b;bt?(_[0]=zt,_[1]=Gt,_[2]=Bt,_[3]=It,D.clearBufferuiv(D.COLOR,0,_)):(v[0]=zt,v[1]=Gt,v[2]=Bt,v[3]=It,D.clearBufferiv(D.COLOR,0,v))}else Z|=D.COLOR_BUFFER_BIT}z&&(Z|=D.DEPTH_BUFFER_BIT),q&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",yt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),ut.dispose(),F.dispose(),at.dispose(),G.dispose(),nt.dispose(),ct.dispose(),C.dispose(),St.dispose(),Vt.dispose(),L.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",mn),_t.removeEventListener("sessionend",Rl),oi.stop()};function yt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=X.autoReset,z=vt.enabled,q=vt.autoUpdate,Z=vt.needsUpdate,H=vt.type;O(),X.autoReset=w,vt.enabled=z,vt.autoUpdate=q,vt.needsUpdate=Z,vt.type=H}function gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const z=w.target;z.removeEventListener("dispose",ot),Ct(z)}function Ct(w){Xt(w),G.remove(w)}function Xt(w){const z=G.get(w).programs;z!==void 0&&(z.forEach(function(q){L.releaseProgram(q)}),w.isShaderMaterial&&L.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,q,Z,H,xt){z===null&&(z=Pt);const bt=H.isMesh&&H.matrixWorld.determinant()<0,Ot=_u(w,z,q,Z,H);N.setMaterial(Z,bt);let It=q.index,zt=1;if(Z.wireframe===!0){if(It=d.getWireframeAttribute(q),It===void 0)return;zt=2}const Gt=q.drawRange,Bt=q.attributes.position;let te=Gt.start*zt,oe=(Gt.start+Gt.count)*zt;xt!==null&&(te=Math.max(te,xt.start*zt),oe=Math.min(oe,(xt.start+xt.count)*zt)),It!==null?(te=Math.max(te,0),oe=Math.min(oe,It.count)):Bt!=null&&(te=Math.max(te,0),oe=Math.min(oe,Bt.count));const ye=oe-te;if(ye<0||ye===1/0)return;St.setup(H,Z,Ot,q,It);let _e,ce=ft;if(It!==null&&(_e=A.get(It),ce=Ft,ce.setIndex(_e)),H.isMesh)Z.wireframe===!0?(N.setLineWidth(Z.wireframeLinewidth*ee()),ce.setMode(D.LINES)):ce.setMode(D.TRIANGLES);else if(H.isLine){let kt=Z.linewidth;kt===void 0&&(kt=1),N.setLineWidth(kt*ee()),H.isLineSegments?ce.setMode(D.LINES):H.isLineLoop?ce.setMode(D.LINE_LOOP):ce.setMode(D.LINE_STRIP)}else H.isPoints?ce.setMode(D.POINTS):H.isSprite&&ce.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)zs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ce.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ce.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const kt=H._multiDrawStarts,xe=H._multiDrawCounts,ne=H._multiDrawCount,Xe=It?A.get(It).bytesPerElement:1,Ai=G.get(Z).currentProgram.getUniforms();for(let Ye=0;Ye<ne;Ye++)Ai.setValue(D,"_gl_DrawID",Ye),ce.render(kt[Ye]/Xe,xe[Ye])}else if(H.isInstancedMesh)ce.renderInstances(te,ye,H.count);else if(q.isInstancedBufferGeometry){const kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xe=Math.min(q.instanceCount,kt);ce.renderInstances(te,ye,xe)}else ce.render(te,ye)};function de(w,z,q){w.transparent===!0&&w.side===Le&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,$s(w,z,q),w.side=ii,w.needsUpdate=!0,$s(w,z,q),w.side=Le):$s(w,z,q)}this.compile=function(w,z,q=null){q===null&&(q=w),f=at.get(q),f.init(z),M.push(f),q.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(f.pushLight(H),H.castShadow&&f.pushShadow(H))}),f.setupLights();const Z=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xt=H.material;if(xt)if(Array.isArray(xt))for(let bt=0;bt<xt.length;bt++){const Ot=xt[bt];de(Ot,q,H),Z.add(Ot)}else de(xt,q,H),Z.add(xt)}),f=M.pop(),Z},this.compileAsync=function(w,z,q=null){const Z=this.compile(w,z,q);return new Promise(H=>{function xt(){if(Z.forEach(function(bt){G.get(bt).currentProgram.isReady()&&Z.delete(bt)}),Z.size===0){H(w);return}setTimeout(xt,10)}it.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let se=null;function wn(w){se&&se(w)}function mn(){oi.stop()}function Rl(){oi.start()}const oi=new kh;oi.setAnimationLoop(wn),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(w){se=w,_t.setAnimationLoop(w),w===null?oi.stop():oi.start()},_t.addEventListener("sessionstart",mn),_t.addEventListener("sessionend",Rl),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(z),z=_t.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,z,P),f=at.get(w,M.length),f.init(z),M.push(f),lt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qt.setFromProjectionMatrix(lt,xn,z.reversedDepth),tt=this.localClippingEnabled,Zt=Q.init(this.clippingPlanes,tt),m=F.get(w,y.length),m.init(),y.push(m),_t.enabled===!0&&_t.isPresenting===!0){const xt=x.xr.getDepthSensingMesh();xt!==null&&eo(xt,z,-1/0,x.sortObjects)}eo(w,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pt,dt),Wt=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,Wt&&ut.addToRenderList(m,w),this.info.render.frame++,Zt===!0&&Q.beginShadows();const q=f.state.shadowsArray;vt.render(q,w,z),Zt===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(f.setupLights(),z.isArrayCamera){const xt=z.cameras;if(H.length>0)for(let bt=0,Ot=xt.length;bt<Ot;bt++){const It=xt[bt];Pl(Z,H,w,It)}Wt&&ut.render(w);for(let bt=0,Ot=xt.length;bt<Ot;bt++){const It=xt[bt];Cl(m,w,It,It.viewport)}}else H.length>0&&Pl(Z,H,w,z),Wt&&ut.render(w),Cl(m,w,z);P!==null&&R===0&&(K.updateMultisampleRenderTarget(P),K.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(x,w,z),St.resetDefaultState(),T=-1,b=null,M.pop(),M.length>0?(f=M[M.length-1],Zt===!0&&Q.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function eo(w,z,q,Z){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Qt.intersectsSprite(w)){Z&&At.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);const bt=C.update(w),Ot=w.material;Ot.visible&&m.push(w,bt,Ot,q,At.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Qt.intersectsObject(w))){const bt=C.update(w),Ot=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),At.copy(w.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),At.copy(bt.boundingSphere.center)),At.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Ot)){const It=bt.groups;for(let zt=0,Gt=It.length;zt<Gt;zt++){const Bt=It[zt],te=Ot[Bt.materialIndex];te&&te.visible&&m.push(w,bt,te,q,At.z,Bt)}}else Ot.visible&&m.push(w,bt,Ot,q,At.z,null)}}const xt=w.children;for(let bt=0,Ot=xt.length;bt<Ot;bt++)eo(xt[bt],z,q,Z)}function Cl(w,z,q,Z){const H=w.opaque,xt=w.transmissive,bt=w.transparent;f.setupLightsView(q),Zt===!0&&Q.setGlobalState(x.clippingPlanes,q),Z&&N.viewport(U.copy(Z)),H.length>0&&Js(H,z,q),xt.length>0&&Js(xt,z,q),bt.length>0&&Js(bt,z,q),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Pl(w,z,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new si(1,1,{generateMipmaps:!0,type:it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float")?us:yn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const xt=f.state.transmissionRenderTarget[Z.id],bt=Z.viewport||U;xt.setSize(bt.z*x.transmissionResolutionScale,bt.w*x.transmissionResolutionScale);const Ot=x.getRenderTarget(),It=x.getActiveCubeFace(),zt=x.getActiveMipmapLevel();x.setRenderTarget(xt),x.getClearColor(J),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),Wt&&ut.render(q);const Gt=x.toneMapping;x.toneMapping=ti;const Bt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),Zt===!0&&Q.setGlobalState(x.clippingPlanes,Z),Js(w,q,Z),K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt),it.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let oe=0,ye=z.length;oe<ye;oe++){const _e=z[oe],ce=_e.object,kt=_e.geometry,xe=_e.material,ne=_e.group;if(xe.side===Le&&ce.layers.test(Z.layers)){const Xe=xe.side;xe.side=We,xe.needsUpdate=!0,Ll(ce,q,Z,kt,xe,ne),xe.side=Xe,xe.needsUpdate=!0,te=!0}}te===!0&&(K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt))}x.setRenderTarget(Ot,It,zt),x.setClearColor(J,W),Bt!==void 0&&(Z.viewport=Bt),x.toneMapping=Gt}function Js(w,z,q){const Z=z.isScene===!0?z.overrideMaterial:null;for(let H=0,xt=w.length;H<xt;H++){const bt=w[H],Ot=bt.object,It=bt.geometry,zt=bt.group;let Gt=bt.material;Gt.allowOverride===!0&&Z!==null&&(Gt=Z),Ot.layers.test(q.layers)&&Ll(Ot,z,q,It,Gt,zt)}}function Ll(w,z,q,Z,H,xt){w.onBeforeRender(x,z,q,Z,H,xt),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(x,z,q,Z,w,xt),H.transparent===!0&&H.side===Le&&H.forceSinglePass===!1?(H.side=We,H.needsUpdate=!0,x.renderBufferDirect(q,z,Z,H,w,xt),H.side=ii,H.needsUpdate=!0,x.renderBufferDirect(q,z,Z,H,w,xt),H.side=Le):x.renderBufferDirect(q,z,Z,H,w,xt),w.onAfterRender(x,z,q,Z,H,xt)}function $s(w,z,q){z.isScene!==!0&&(z=Pt);const Z=G.get(w),H=f.state.lights,xt=f.state.shadowsArray,bt=H.state.version,Ot=L.getParameters(w,H.state,xt,z,q),It=L.getProgramCacheKey(Ot);let zt=Z.programs;Z.environment=w.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(w.isMeshStandardMaterial?ct:nt).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,zt===void 0&&(w.addEventListener("dispose",ot),zt=new Map,Z.programs=zt);let Gt=zt.get(It);if(Gt!==void 0){if(Z.currentProgram===Gt&&Z.lightsStateVersion===bt)return Dl(w,Ot),Gt}else Ot.uniforms=L.getUniforms(w),w.onBeforeCompile(Ot,x),Gt=L.acquireProgram(Ot,It),zt.set(It,Gt),Z.uniforms=Ot.uniforms;const Bt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=Q.uniform),Dl(w,Ot),Z.needsLights=vu(w),Z.lightsStateVersion=bt,Z.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Gt,Z.uniformsList=null,Gt}function Il(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Ur.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Dl(w,z){const q=G.get(w);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function _u(w,z,q,Z,H){z.isScene!==!0&&(z=Pt),K.resetTextureUnits();const xt=z.fog,bt=Z.isMeshStandardMaterial?z.environment:null,Ot=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:rs,It=(Z.isMeshStandardMaterial?ct:nt).get(Z.envMap||bt),zt=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Gt=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Bt=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,oe=!!q.morphAttributes.color;let ye=ti;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=x.toneMapping);const _e=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=_e!==void 0?_e.length:0,kt=G.get(Z),xe=f.state.lights;if(Zt===!0&&(tt===!0||w!==b)){const Be=w===b&&Z.id===T;Q.setState(Z,w,Be)}let ne=!1;Z.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==xe.state.version||kt.outputColorSpace!==Ot||H.isBatchedMesh&&kt.batching===!1||!H.isBatchedMesh&&kt.batching===!0||H.isBatchedMesh&&kt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&kt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&kt.instancing===!1||!H.isInstancedMesh&&kt.instancing===!0||H.isSkinnedMesh&&kt.skinning===!1||!H.isSkinnedMesh&&kt.skinning===!0||H.isInstancedMesh&&kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&kt.instancingMorph===!1&&H.morphTexture!==null||kt.envMap!==It||Z.fog===!0&&kt.fog!==xt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Q.numPlanes||kt.numIntersection!==Q.numIntersection)||kt.vertexAlphas!==zt||kt.vertexTangents!==Gt||kt.morphTargets!==Bt||kt.morphNormals!==te||kt.morphColors!==oe||kt.toneMapping!==ye||kt.morphTargetsCount!==ce)&&(ne=!0):(ne=!0,kt.__version=Z.version);let Xe=kt.currentProgram;ne===!0&&(Xe=$s(Z,z,H));let Ai=!1,Ye=!1,ms=!1;const ve=Xe.getUniforms(),$e=kt.uniforms;if(N.useProgram(Xe.program)&&(Ai=!0,Ye=!0,ms=!0),Z.id!==T&&(T=Z.id,Ye=!0),Ai||b!==w){N.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ve.setValue(D,"projectionMatrix",w.projectionMatrix),ve.setValue(D,"viewMatrix",w.matrixWorldInverse);const He=ve.map.cameraPosition;He!==void 0&&He.setValue(D,mt.setFromMatrixPosition(w.matrixWorld)),st.logarithmicDepthBuffer&&ve.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ve.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Ye=!0,ms=!0)}if(H.isSkinnedMesh){ve.setOptional(D,H,"bindMatrix"),ve.setOptional(D,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ve.setValue(D,"boneTexture",Be.boneTexture,K))}H.isBatchedMesh&&(ve.setOptional(D,H,"batchingTexture"),ve.setValue(D,"batchingTexture",H._matricesTexture,K),ve.setOptional(D,H,"batchingIdTexture"),ve.setValue(D,"batchingIdTexture",H._indirectTexture,K),ve.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&ve.setValue(D,"batchingColorTexture",H._colorsTexture,K));const Ke=q.morphAttributes;if((Ke.position!==void 0||Ke.normal!==void 0||Ke.color!==void 0)&&$.update(H,q,Xe),(Ye||kt.receiveShadow!==H.receiveShadow)&&(kt.receiveShadow=H.receiveShadow,ve.setValue(D,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&($e.envMap.value=It,$e.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&($e.envMapIntensity.value=z.environmentIntensity),Ye&&(ve.setValue(D,"toneMappingExposure",x.toneMappingExposure),kt.needsLights&&xu($e,ms),xt&&Z.fog===!0&&B.refreshFogUniforms($e,xt),B.refreshMaterialUniforms($e,Z,Y,et,f.state.transmissionRenderTarget[w.id]),Ur.upload(D,Il(kt),$e,K)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ur.upload(D,Il(kt),$e,K),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ve.setValue(D,"center",H.center),ve.setValue(D,"modelViewMatrix",H.modelViewMatrix),ve.setValue(D,"normalMatrix",H.normalMatrix),ve.setValue(D,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Be=Z.uniformsGroups;for(let He=0,no=Be.length;He<no;He++){const ai=Be[He];Vt.update(ai,Xe),Vt.bind(ai,Xe)}}return Xe}function xu(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function vu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,z,q){const Z=G.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=z,G.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const q=G.get(w);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const Mu=D.createFramebuffer();this.setRenderTarget=function(w,z=0,q=0){P=w,E=z,R=q;let Z=!0,H=null,xt=!1,bt=!1;if(w){const It=G.get(w);if(It.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(It.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(It.__hasExternalTextures)K.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Bt=w.depthTexture;if(It.__boundDepthTexture!==Bt){if(Bt!==null&&G.has(Bt)&&(w.width!==Bt.image.width||w.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const zt=w.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(bt=!0);const Gt=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[z])?H=Gt[z][q]:H=Gt[z],xt=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?H=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?H=Gt[q]:H=Gt,U.copy(w.viewport),k.copy(w.scissor),V=w.scissorTest}else U.copy(Mt).multiplyScalar(Y).floor(),k.copy(Nt).multiplyScalar(Y).floor(),V=Yt;if(q!==0&&(H=Mu),N.bindFramebuffer(D.FRAMEBUFFER,H)&&Z&&N.drawBuffers(w,H),N.viewport(U),N.scissor(k),N.setScissorTest(V),xt){const It=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,It.__webglTexture,q)}else if(bt){const It=z;for(let zt=0;zt<w.textures.length;zt++){const Gt=G.get(w.textures[zt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,Gt.__webglTexture,q,It)}}else if(w!==null&&q!==0){const It=G.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,It.__webglTexture,q)}T=-1},this.readRenderTargetPixels=function(w,z,q,Z,H,xt,bt,Ot=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It){N.bindFramebuffer(D.FRAMEBUFFER,It);try{const zt=w.textures[Ot],Gt=zt.format,Bt=zt.type;if(!st.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Z&&q>=0&&q<=w.height-H&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ot),D.readPixels(z,q,Z,H,Tt.convert(Gt),Tt.convert(Bt),xt))}finally{const zt=P!==null?G.get(P).__webglFramebuffer:null;N.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(w,z,q,Z,H,xt,bt,Ot=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&bt!==void 0&&(It=It[bt]),It)if(z>=0&&z<=w.width-Z&&q>=0&&q<=w.height-H){N.bindFramebuffer(D.FRAMEBUFFER,It);const zt=w.textures[Ot],Gt=zt.format,Bt=zt.type;if(!st.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.bufferData(D.PIXEL_PACK_BUFFER,xt.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ot),D.readPixels(z,q,Z,H,Tt.convert(Gt),Tt.convert(Bt),0);const oe=P!==null?G.get(P).__webglFramebuffer:null;N.bindFramebuffer(D.FRAMEBUFFER,oe);const ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Rd(D,ye,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,te),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,xt),D.deleteBuffer(te),D.deleteSync(ye),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,q=0){const Z=Math.pow(2,-q),H=Math.floor(w.image.width*Z),xt=Math.floor(w.image.height*Z),bt=z!==null?z.x:0,Ot=z!==null?z.y:0;K.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,bt,Ot,H,xt),N.unbindTexture()};const yu=D.createFramebuffer(),Su=D.createFramebuffer();this.copyTextureToTexture=function(w,z,q=null,Z=null,H=0,xt=null){xt===null&&(H!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=H,H=0):xt=0);let bt,Ot,It,zt,Gt,Bt,te,oe,ye;const _e=w.isCompressedTexture?w.mipmaps[xt]:w.image;if(q!==null)bt=q.max.x-q.min.x,Ot=q.max.y-q.min.y,It=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,Gt=q.min.y,Bt=q.isBox3?q.min.z:0;else{const Ke=Math.pow(2,-H);bt=Math.floor(_e.width*Ke),Ot=Math.floor(_e.height*Ke),w.isDataArrayTexture?It=_e.depth:w.isData3DTexture?It=Math.floor(_e.depth*Ke):It=1,zt=0,Gt=0,Bt=0}Z!==null?(te=Z.x,oe=Z.y,ye=Z.z):(te=0,oe=0,ye=0);const ce=Tt.convert(z.format),kt=Tt.convert(z.type);let xe;z.isData3DTexture?(K.setTexture3D(z,0),xe=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(K.setTexture2DArray(z,0),xe=D.TEXTURE_2D_ARRAY):(K.setTexture2D(z,0),xe=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),Xe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ai=D.getParameter(D.UNPACK_SKIP_PIXELS),Ye=D.getParameter(D.UNPACK_SKIP_ROWS),ms=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,_e.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt);const ve=w.isDataArrayTexture||w.isData3DTexture,$e=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const Ke=G.get(w),Be=G.get(z),He=G.get(Ke.__renderTarget),no=G.get(Be.__renderTarget);N.bindFramebuffer(D.READ_FRAMEBUFFER,He.__webglFramebuffer),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,no.__webglFramebuffer);for(let ai=0;ai<It;ai++)ve&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(w).__webglTexture,H,Bt+ai),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(z).__webglTexture,xt,ye+ai)),D.blitFramebuffer(zt,Gt,bt,Ot,te,oe,bt,Ot,D.DEPTH_BUFFER_BIT,D.NEAREST);N.bindFramebuffer(D.READ_FRAMEBUFFER,null),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||G.has(w)){const Ke=G.get(w),Be=G.get(z);N.bindFramebuffer(D.READ_FRAMEBUFFER,yu),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,Su);for(let He=0;He<It;He++)ve?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ke.__webglTexture,H,Bt+He):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ke.__webglTexture,H),$e?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Be.__webglTexture,xt,ye+He):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Be.__webglTexture,xt),H!==0?D.blitFramebuffer(zt,Gt,bt,Ot,te,oe,bt,Ot,D.COLOR_BUFFER_BIT,D.NEAREST):$e?D.copyTexSubImage3D(xe,xt,te,oe,ye+He,zt,Gt,bt,Ot):D.copyTexSubImage2D(xe,xt,te,oe,zt,Gt,bt,Ot);N.bindFramebuffer(D.READ_FRAMEBUFFER,null),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else $e?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(xe,xt,te,oe,ye,bt,Ot,It,ce,kt,_e.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(xe,xt,te,oe,ye,bt,Ot,It,ce,_e.data):D.texSubImage3D(xe,xt,te,oe,ye,bt,Ot,It,ce,kt,_e):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,xt,te,oe,bt,Ot,ce,kt,_e.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,xt,te,oe,_e.width,_e.height,ce,_e.data):D.texSubImage2D(D.TEXTURE_2D,xt,te,oe,bt,Ot,ce,kt,_e);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ai),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ye),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ms),xt===0&&z.generateMipmaps&&D.generateMipmap(xe),N.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),N.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,N.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class R_{constructor(){wt(this,"ctx",null);wt(this,"masterGain",null);wt(this,"engineOscA",null);wt(this,"engineOscB",null);wt(this,"engineFilter",null);wt(this,"engineGain",null);wt(this,"volume",.55);wt(this,"muted",!1);wt(this,"lastBlinkerOn",!1);wt(this,"lastRailBellTime",-999)}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.14,this.engineOscA=this.ctx.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=52,this.engineOscB=this.ctx.createOscillator(),this.engineOscB.type="triangle",this.engineOscB.frequency.value=104,this.engineOscA.connect(this.engineFilter),this.engineOscB.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOscA.start(),this.engineOscB.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t,e){this.volume=t,this.muted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(e?0:t,this.ctx.currentTime,.04)}update(t,e,n){if(!this.ctx||this.ctx.state!=="running")return;const s=this.ctx.currentTime;if(this.engineOscA&&this.engineOscB&&this.engineFilter&&this.engineGain)if(t.stalled||t.rpm<=0)this.engineGain.gain.setTargetAtTime(0,s,.05);else{const r=Math.max(0,Math.min(1,(t.rpm-750)/3600)),o=38+r*96;this.engineOscA.frequency.setTargetAtTime(o,s,.05),this.engineOscB.frequency.setTargetAtTime(o*2,s,.05),this.engineFilter.frequency.setTargetAtTime(190+r*560,s,.06),this.engineGain.gain.setTargetAtTime(.08+r*.11,s,.06)}if(t.blinker!=="off"&&t.blinkerOn!==this.lastBlinkerOn&&this.playClick(t.blinkerOn?920:680,.025,.16),this.lastBlinkerOn=t.blinkerOn,e){const r=Math.hypot(t.x-38,t.z);if(r<58&&n-this.lastRailBellTime>=.45){this.lastRailBellTime=n;const o=Math.max(.03,Math.min(.28,8/Math.max(6,r)));this.playFumikiriBell(o)}}}playClick(t=800,e=.03,n=.15){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const s=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(t,s),o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(o),o.connect(this.masterGain),r.start(s),r.stop(s+e)}playFumikiriBell(t){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime;for(const n of[700,758]){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e),r.gain.setValueAtTime(t*.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.36),s.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+.37)}}playViolationChime(t){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=t?"sawtooth":"triangle",n.frequency.setValueAtTime(t?220:440,e),n.frequency.setValueAtTime(t?165:330,e+.12),s.gain.setValueAtTime(.22,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.35)}playThud(){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.28,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.16)}}function Ls(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function gl(i){let t=(i+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI}function ws(i,t,e,n,s){const r=Math.cos(e),o=Math.sin(e);return{x:i+n*r+s*o,z:t-n*o+s*r}}function C_(i,t,e,n){return Math.hypot(i-e,t-n)}const Mi=90,Ji=60,jn=7,kc=jn/2,en=-24,_i=2.75,Es=2,Is=18,Oa=34,Bo=42,Fa=58;function Dn(i,t){if(t<en-_i-.6||t>en+_i+.6||i<=Is||i>=Fa)return{y:0,slopeX:0,slopeZ:0};if(i<Oa){const o=Oa-Is,a=(i-Is)/o,c=Es*.5*(1-Math.cos(Math.PI*a)),l=Es*.5*Math.PI/o*Math.sin(Math.PI*a);return{y:c,slopeX:l,slopeZ:0}}if(i<=Bo)return{y:Es,slopeX:0,slopeZ:0};const e=Fa-Bo,n=(i-Bo)/e,s=Es*.5*(1+Math.cos(Math.PI*n)),r=-(Es*.5*Math.PI/e)*Math.sin(Math.PI*n);return{y:s,slopeX:r,slopeZ:0}}function P_(){const e=105*Math.PI/180,n=[],s=[],r=[],o=(m,f,y,M)=>{const x=M,S=-y;n.push({x:m,z:f}),s.push({x:m+x*1.8,z:f+S*1.8}),r.push({x:m-x*1.8,z:f-S*1.8})};o(-46,-3.5,0,-1),o(-46,-8,0,-1);const a=-38.5,c=-12,l=28;for(let m=0;m<=l;m++){const f=Math.PI+e*m/l,y=a+7.5*Math.cos(f),M=c+7.5*Math.sin(f),x=-Math.sin(f),S=Math.cos(f);o(y,M,x,S)}const h=Math.PI+e,u=a+2*7.5*Math.cos(h),p=c+2*7.5*Math.sin(h);for(let m=1;m<=l;m++){const f=e*(1-m/l),y=u+7.5*Math.cos(f),M=p+7.5*Math.sin(f),x=Math.sin(f),S=-Math.cos(f);o(y,M,x,S)}const g=u+7.5;o(g,-34,0,-1),o(g,-42.5,0,-1);const _=[6,15,24,34,43,52],v=[];return _.forEach((m,f)=>{const y=s[m],M=r[m];y&&f%2===0&&v.push({id:`scurve-pole-l-${f}`,x:y.x,z:y.z,radius:.08,height:1.5,zone:"sCurve"}),M&&f%2===1&&v.push({id:`scurve-pole-r-${f}`,x:M.x,z:M.z,radius:.08,height:1.5,zone:"sCurve"})}),{centerline:n,leftCurb:s,rightCurb:r,poles:v}}const zr=P_(),L_=zr.centerline,I_=2,Wh=[{id:"scurve-left",points:zr.leftCurb,height:.14,label:"S-Curve West Curb"},{id:"scurve-right",points:zr.rightCurb,height:.14,label:"S-Curve East Curb"},{id:"crank-west-south",height:.14,label:"Crank West-South Curb",points:[{x:-50,z:3.5},{x:-50,z:20},{x:-36,z:20},{x:-36,z:42.5}]},{id:"crank-east-north",height:.14,label:"Crank East-North Curb",points:[{x:-46,z:3.5},{x:-46,z:16},{x:-32,z:16},{x:-32,z:42.5}]},{id:"bay-parking-curb",height:.14,label:"Direction Change Bay Curb",points:[{x:24.15,z:27.5},{x:24.15,z:33.7},{x:27.85,z:33.7},{x:27.85,z:27.5}]},{id:"parallel-parking-curb",height:.14,label:"Parallel Parking Curb",points:[{x:45,z:27.5},{x:45,z:30.2},{x:52.2,z:30.2},{x:52.2,z:27.5}]},{id:"hill-north-curb",height:.16,label:"Hill North Edge",points:[{x:18,z:-26.75},{x:58,z:-26.75}]},{id:"hill-south-curb",height:.16,label:"Hill South Edge",points:[{x:18,z:-21.25},{x:58,z:-21.25}]},{id:"outer-north",height:.14,points:[{x:-62,z:-49.5},{x:62,z:-49.5}]},{id:"outer-south",height:.14,points:[{x:-62,z:49.5},{x:62,z:49.5}]},{id:"outer-west",height:.14,points:[{x:-79.5,z:-32},{x:-79.5,z:32}]},{id:"outer-east",height:.14,points:[{x:79.5,z:-32},{x:79.5,z:32}]}],Xh=[...zr.poles,{id:"crank-pole-in-1",x:-45.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-1",x:-50.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-in-2",x:-36.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-2",x:-31.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"bay-pole-fl",x:24.05,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-fr",x:27.95,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rl",x:24.05,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rr",x:27.95,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"par-pole-1",x:44.9,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-2",x:52.3,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-3",x:44.9,z:30.3,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-4",x:52.3,z:30.3,radius:.08,height:1.5,zone:"parallelParking"}],Hr=[{id:"north-parked-van",x:-10,z:-48.1,halfW:1.9,halfL:.85,height:1.65,kind:"parkedCar"},{id:"clubhouse-building",x:0,z:56.2,halfW:16,halfL:4.5,height:7.2,kind:"building"}],Yh=[{id:"signal-northbound",kind:"trafficLight",axis:"NS",x:-1.75,z:8.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"signal-southbound",kind:"trafficLight",axis:"NS",x:1.75,z:-8.5,dirX:0,dirZ:1,halfWidth:1.75},{id:"signal-eastbound",kind:"trafficLight",axis:"EW",x:-8.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75},{id:"signal-westbound",kind:"trafficLight",axis:"EW",x:8.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"railroad-eastbound",kind:"railroad",x:31.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"railroad-westbound",kind:"railroad",x:44.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"stop-west-t",kind:"stopSign",x:-67.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"stop-north-t",kind:"stopSign",x:-1.75,z:-38.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"stop-scurve-exit",kind:"stopSign",x:-27.12,z:-41.5,dirX:0,dirZ:-1,halfWidth:1.8},{id:"stop-crank-exit",kind:"stopSign",x:-34,z:41.5,dirX:0,dirZ:1,halfWidth:2}],Ds={startBay:{id:"startBay",x:12,z:48.1,heading:Math.PI/2},sCurve:{id:"sCurve",x:-46,z:.5,heading:0},crank:{id:"crank",x:-48,z:-.5,heading:Math.PI},hillStart:{id:"hillStart",x:10,z:-24,heading:-Math.PI/2},railroad:{id:"railroad",x:20,z:-1.75,heading:-Math.PI/2},stopSign:{id:"stopSign",x:-56,z:1.75,heading:Math.PI/2},trafficLight:{id:"trafficLight",x:-1.75,z:22,heading:0},bayParking:{id:"bayParking",x:20,z:22.25,heading:-Math.PI/2},parallelParking:{id:"parallelParking",x:40,z:25.75,heading:-Math.PI/2},speedStraight:{id:"speedStraight",x:-56,z:-47.75,heading:-Math.PI/2}},D_=["startBay","sCurve","crank","hillStart","railroad","stopSign","trafficLight","bayParking","parallelParking","speedStraight"],zc=.09,U_=.08,N_=.45;function O_(i,t){const e=t.trackWidth/2,n=-t.wheelbase/2,s=t.wheelbase/2;return{FL:ws(i.x,i.z,i.heading,-e,n),FR:ws(i.x,i.z,i.heading,e,n),RL:ws(i.x,i.z,i.heading,-e,s),RR:ws(i.x,i.z,i.heading,e,s)}}function F_(i,t,e,n,s,r){const o=s-e,a=r-n,c=o*o+a*a;let l=0;c>1e-9&&(l=((i-e)*o+(t-n)*a)/c,l<0?l=0:l>1&&(l=1));const h=e+o*l,u=n+a*l;return{cx:h,cz:u,dist:Math.hypot(i-h,t-u)}}function Hc(i,t,e=Wh,n=Xh,s=Hr){const r=O_(i,t),o=t.kind==="motorcycle"?.07:.11,a=["FL","FR","RL","RR"],c={};let l=!1,h=!1,u=0,p=0;for(const E of a){const R=r[E];let P=1/0,T=R.x,b=R.z;for(const Y of e){const pt=Y.points;for(let dt=0;dt<pt.length-1;dt++){const Mt=F_(R.x,R.z,pt[dt].x,pt[dt].z,pt[dt+1].x,pt[dt+1].z);Mt.dist<P&&(P=Mt.dist,T=Mt.cx,b=Mt.cz)}}const U=Math.max(0,P-zc-o),k=zc+o*.8,V=P<k,J=!V&&U<U_,W=Math.max(0,Math.min(1,1-U/N_));let j=0,et=0;if(V&&P>1e-5){const Y=k-P,pt=(R.x-T)/P,dt=(R.z-b)/P;j=pt*Y,et=dt*Y,u+=j*.5,p+=et*.5}J&&(l=!0),V&&(h=!0),c[E]={corner:E,x:R.x,z:R.z,minCurbDist:U,proximity:W,curbTouch:J,curbMount:V,pushX:j,pushZ:et}}const g=Math.cos(-i.heading),_=Math.sin(-i.heading),v=t.width/2,m=t.length/2,f=(E,R)=>{const P=E-i.x,T=R-i.z;return{x:P*g+T*_,z:-P*_+T*g}};let y=null;for(const E of n){const R=f(E.x,E.z),P=Math.max(-v,Math.min(v,R.x)),T=Math.max(-m,Math.min(m,R.z));if(Math.hypot(R.x-P,R.z-T)<E.radius){y=E;break}}let M=null;const x=[[0,0],[-v,-m],[v,-m],[-v,m],[v,m],[0,-m],[0,m]];for(const E of s){for(const[R,P]of x){const T=ws(i.x,i.z,i.heading,R,P);if(Math.abs(T.x-E.x)<E.halfW&&Math.abs(T.z-E.z)<E.halfL){M=E;const b=i.x-E.x,U=i.z-E.z,k=E.halfW+v-Math.abs(b),V=E.halfL+m-Math.abs(U);k<V?u+=Math.sign(b||1)*Math.min(.4,k*.5):p+=Math.sign(U||1)*Math.min(.4,V*.5);break}}if(M)break}const S=1.6;return i.x<-Mi+S&&(u+=-Mi+S-i.x),i.x>Mi-S&&(u+=Mi-S-i.x),i.z<-Ji+S&&(p+=-Ji+S-i.z),i.z>Ji-S&&(p+=Ji-S-i.z),{wheels:c,anyCurbTouch:l,anyCurbMount:h,poleHit:y,obstacleHit:M,pushX:u,pushZ:p}}const Tr=[{id:"wp-pullout",stationHint:"startBay",x:-10,z:47.75,radius:6.5,instructionJa:"発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう",instructionEn:"Bay 1: Signal right (E), glance right (X), and pull into the left lane"},{id:"wp-west-turn",stationHint:"stopSign",x:-77.75,z:10,radius:7,instructionJa:"外周西側を通って北の直線（40km/h区間）へ向かいましょう",instructionEn:"Continue along the West loop toward the North 40 km/h straight"},{id:"wp-north-straight",stationHint:"speedStraight",x:10,z:-47.75,radius:7.5,instructionJa:"北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速",instructionEn:"North straight: Signal past the parked van and reach ~35–40 km/h"},{id:"wp-hill-approach",stationHint:"hillStart",x:24,z:-24,radius:6,instructionJa:"坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう",instructionEn:"Hill Start: Stop on the up-ramp, then pull away cleanly without rollback"},{id:"wp-bay-access",stationHint:"bayParking",x:26,z:30.8,radius:4.5,instructionJa:"方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫",instructionEn:"Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing"},{id:"wp-railroad",stationHint:"railroad",x:22,z:1.75,radius:6.5,instructionJa:"踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう",instructionEn:"Railroad: Stop completely before line, look Left & Right (Z/X), then cross"},{id:"wp-signal",stationHint:"trafficLight",x:-15,z:1.75,radius:6.5,instructionJa:"信号交差点：信号に従って直進し、NWのS字コース入口へ左折",instructionEn:"Signal Intersection: Obey light, cross West, then enter S-Curve (North)"},{id:"wp-scurve",stationHint:"sCurve",x:-27.12,z:-36,radius:5.5,instructionJa:"S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう",instructionEn:"S-Curve: Creep slowly through the bends without touching curbs or poles"},{id:"wp-crank",stationHint:"crank",x:-34,z:36,radius:5.5,instructionJa:"クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう",instructionEn:"Crank: Swing wide around both 90° turns cleanly onto the South road"},{id:"wp-finish-bay",stationHint:"startBay",x:12,z:48.1,radius:3.5,instructionJa:"ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です",instructionEn:"Finish: Pull alongside Start Bay 1 and come to a complete stop"}];class B_{constructor(){wt(this,"mode","practice");wt(this,"score",100);wt(this,"terminated",!1);wt(this,"finished",!1);wt(this,"simTimeSec",0);wt(this,"startOdometerM",0);wt(this,"violations",[]);wt(this,"waypointIndex",0);wt(this,"cooldowns",new Map);wt(this,"zoneTrackers",new Map);wt(this,"recentSignalTime",-999);wt(this,"recentSignalDir",null);wt(this,"headingSample",0);wt(this,"headingAccumTurn",0);wt(this,"hillMaxXOnRamp",-1/0);wt(this,"handbrakeDragDist",0);wt(this,"curbMountCount",0);wt(this,"lastViolation",null);wt(this,"onViolation");wt(this,"onExamFinish")}reset(t,e){this.mode=t,this.score=100,this.terminated=!1,this.finished=!1,this.simTimeSec=0,this.startOdometerM=e.odometerM,this.violations=[],this.waypointIndex=0,this.cooldowns.clear(),this.zoneTrackers.clear(),this.recentSignalTime=-999,this.recentSignalDir=null,this.headingSample=e.heading,this.headingAccumTurn=0,this.hillMaxXOnRamp=-1/0,this.handbrakeDragDist=0,this.curbMountCount=0,this.lastViolation=null}getMode(){return this.mode}getScore(){return Math.max(0,this.score)}isTerminated(){return this.terminated}isFinished(){return this.finished}getViolations(){return this.violations}getCurrentWaypoint(){return this.mode!=="exam"?null:Tr[this.waypointIndex]??null}getWaypointProgress(){return{current:this.waypointIndex,total:Tr.length}}getSummary(t){var r;const e=this.getScore(),n=new Map;for(const o of this.violations)n.set(o.code,(n.get(o.code)??0)+1);let s;return n.has("RAILROAD_NO_STOP")?s="railroad":n.has("STOP_SIGN_VIOLATION")?s="stopSign":n.has("RED_LIGHT")?s="trafficLight":n.has("HILL_ROLLBACK")?s="hillStart":(n.has("CURB_MOUNT")||n.has("POLE_COLLISION"))&&(s=((r=this.getCurrentWaypoint())==null?void 0:r.stationHint)??"crank"),{passed:!this.terminated&&e>=70,terminated:this.terminated,score:e,elapsedSec:this.simTimeSec,distanceM:Math.max(0,t.odometerM-this.startOdometerM),violations:[...this.violations],weakArea:s}}recordViolation(t,e,n,s,r,o,a,c=3){var u;if(this.finished)return;const l=this.cooldowns.get(t)??-999;if(this.simTimeSec-l<c)return;this.cooldowns.set(t,this.simTimeSec);const h={id:`${t}-${this.violations.length+1}`,code:t,points:e,instantFail:n,timestampSec:this.simTimeSec,labelJa:s,labelEn:r,detailJa:o,detailEn:a};this.violations.push(h),this.lastViolation=h,this.score=Math.max(0,this.score-e),(u=this.onViolation)==null||u.call(this,h),n&&this.mode==="exam"&&(this.terminated=!0,this.finished=!0)}update(t,e,n,s){var c,l;if(this.finished)return;if(this.simTimeSec+=t,(e.blinker==="left"||e.blinker==="right")&&(this.recentSignalTime=this.simTimeSec,this.recentSignalDir=e.blinker),n.anyCurbMount){this.curbMountCount++;const h=this.mode==="exam"&&this.curbMountCount>=2;this.recordViolation("CURB_MOUNT",20,h,"脱輪","Curb Mount","タイヤが縁石に乗り上げました","Wheel mounted over the course curb",3)}else n.anyCurbTouch&&this.recordViolation("CURB_TOUCH",10,!1,"接輪","Curb Scrape","タイヤが縁石に接触しました","Tire brushed against the curb",2.5);if((n.poleHit||n.obstacleHit&&n.obstacleHit.kind==="parkedCar")&&this.recordViolation("POLE_COLLISION",30,!0,"接触事故","Obstacle Contact","ポールまたは障害物に接触しました","Vehicle struck a course marker pole or obstacle",2.5),Math.abs(e.speedMs)*3.6>46&&this.recordViolation("SPEED_LIMIT",10,!1,"速度超過","Speeding","場内制限速度（40km/h）を大幅に超過しました","Exceeded 40 km/h compound speed limit",4),e.handbrake&&Math.abs(e.speedMs)>1.2?(this.handbrakeDragDist+=Math.abs(e.speedMs)*t,this.handbrakeDragDist>3.5&&(this.handbrakeDragDist=0,this.recordViolation("HANDBRAKE_DRAG",5,!1,"サイド戻し忘れ","Handbrake Left On","サイドブレーキを引いたまま走行しています","Driving with the parking brake still engaged",5))):this.handbrakeDragDist=0,e.x>Is+1&&e.x<Oa&&Math.abs(e.z-en)<3){e.x>this.hillMaxXOnRamp&&(this.hillMaxXOnRamp=e.x);const h=this.hillMaxXOnRamp-e.x;if(h>.35&&e.speedMs<-.15){const u=h>1;this.recordViolation("HILL_ROLLBACK",u?30:10,u,"坂道逆行","Hill Rollback",u?"坂道で1m以上逆行しました":"坂道で車両が後退しました",u?"Rolled back over 1.0m on hill ramp":"Vehicle rolled backward on hill ramp",4)}}else this.hillMaxXOnRamp=-1/0;this.evaluateStopLines(e,s);const o=gl(e.heading-this.headingSample);if(this.headingSample=e.heading,e.speedMs>1.5){if(this.headingAccumTurn+=o,Math.abs(this.headingAccumTurn)>.96){const h=this.headingAccumTurn>0?"left":"right",u=e.x<-24&&e.x>-50&&e.z<-4&&e.z>-42,p=this.simTimeSec-this.recentSignalTime<7&&this.recentSignalDir===h;!u&&!p&&this.recordViolation("NO_SIGNAL",5,!1,"合図不履行","Missing Blinker",`${h==="left"?"左折":"右折"}時のウインカー合図がありません`,`Turned ${h} without activating blinker beforehand`,3.5),this.headingAccumTurn=0}}else this.headingAccumTurn*=Math.max(0,1-t*.5);const a=Hr[0];if(a&&Math.abs(e.x-a.x)<2&&e.z>-50&&e.z<-42.5&&e.speedMs>1.5&&this.simTimeSec-this.recentSignalTime>8&&this.recordViolation("NO_SIGNAL",5,!1,"進路変更合図不履行","Missing Lane Signal","障害物回避時の右・左ウインカー合図がありません","Passed parked obstacle without turn signal",6),this.mode==="exam"&&!this.finished){const h=Tr[this.waypointIndex];h&&C_(e.x,e.z,h.x,h.z)<=h.radius&&(this.waypointIndex===Tr.length-1?Math.abs(e.speedMs)<.15&&(this.finished=!0,(c=this.onExamFinish)==null||c.call(this,this.getSummary(e))):this.waypointIndex++)}this.terminated&&this.finished&&((l=this.onExamFinish)==null||l.call(this,this.getSummary(e)))}evaluateStopLines(t,e){const n=e.getRailroadState();for(const s of Yh){let r=this.zoneTrackers.get(s.id);r||(r={approached:!1,stoppedBeforeLine:!1,lookedBothSides:!1,wasClosedOrWarning:!1,crossed:!1,prevSignedDist:999},this.zoneTrackers.set(s.id,r));const o=t.x-s.x,a=t.z-s.z,c=o*s.dirX+a*s.dirZ,l=-s.dirZ,h=s.dirX,u=Math.abs(o*l+a*h),p=-Math.sin(t.heading)*s.dirX-Math.cos(t.heading)*s.dirZ,g=u<=s.halfWidth+.9&&p>.65;if(g&&c>=-9&&c<=-.1){r.approached=!0,Math.abs(t.speedMs)<.15&&(r.stoppedBeforeLine=!0);const _=this.simTimeSec-t.lookedLeftTimestamp<6,v=this.simTimeSec-t.lookedRightTimestamp<6;_&&v&&(r.lookedBothSides=!0),s.kind==="railroad"&&n.isWarningActive&&(r.wasClosedOrWarning=!0)}r.approached&&g&&r.prevSignedDist<0&&c>=0&&c<3&&(this.handleLineCrossed(s,r,e,n.isWarningActive),r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),(Math.abs(c)>14||u>8)&&(r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),r.prevSignedDist=c}}handleLineCrossed(t,e,n,s){t.kind==="stopSign"?e.stoppedBeforeLine?e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"安全確認不履行","Missing L/R Check","発進前の左右安全確認（Z/Xキー）が不足しています","Proceeded from stop line without glancing Left & Right (Z/X)",3):this.recordViolation("STOP_SIGN_VIOLATION",25,!0,"指定場所一時不停止","Stop Sign Violation","「止まれ」停止線手前で完全停止していません","Failed to come to a complete 0 km/h stop at 止まれ line",3):t.kind==="railroad"?!e.stoppedBeforeLine||s||e.wasClosedOrWarning?this.recordViolation("RAILROAD_NO_STOP",30,!0,"踏切不停止・遮断機無視","Railroad Violation",s?"警報機作動中に踏切へ進入しました":"踏切手前で完全停止していません",s?"Entered railroad crossing while warning/barrier active":"Crossed railroad tracks without stopping before stop line",3):e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"踏切安全確認不履行","Railroad Look Check","踏切通過前の左右確認（Z/Xキー）が不足しています","Crossed railroad without checking Left & Right (Z/X)",3):t.kind==="trafficLight"&&t.axis&&n.getLightForAxis(t.axis)==="red"&&this.recordViolation("RED_LIGHT",30,!0,"信号無視","Red Light Violation","赤信号で交差点に進入しました","Crossed intersection stop line on a RED traffic signal",3)}}const qh="jp_kyoshujo_settings_v1",k_="jp_kyoshujo_db",ls="custom_maps",Zh="active_custom_map",ko={locale:"ja",vehicleKind:"sedan",transmission:"AT",cameraMode:"chase",steeringSensitivity:1,autoCenterSteering:!0,mirrorQuality:"high",masterVolume:.55,muted:!1,minimapHeadingUp:!1,showTouchControls:!1};function z_(){try{const i=window.localStorage.getItem(qh);if(!i)return{...ko};const t=JSON.parse(i);return{...ko,...t}}catch{return{...ko}}}function Vn(i){try{window.localStorage.setItem(qh,JSON.stringify(i))}catch{}}function jh(){return new Promise((i,t)=>{const e=window.indexedDB.open(k_,1);e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(ls)||n.createObjectStore(ls)},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function _l(i){try{const t=await jh();await new Promise((e,n)=>{const s=t.transaction(ls,"readwrite");s.objectStore(ls).put(i,Zh),s.oncomplete=()=>e(),s.onerror=()=>n(s.error)}),t.close()}catch{}}async function H_(){try{const i=await jh(),t=await new Promise((e,n)=>{const r=i.transaction(ls,"readonly").objectStore(ls).get(Zh);r.onsuccess=()=>e(r.result??null),r.onerror=()=>n(r.error)});return i.close(),t}catch{return null}}const tn=class tn{constructor(){wt(this,"signalTime",0);wt(this,"railTime",0)}update(t){this.signalTime=(this.signalTime+t)%tn.SIGNAL_CYCLE,this.railTime=(this.railTime+t)%tn.RAIL_CYCLE}setTimes(t,e){this.signalTime=(t%tn.SIGNAL_CYCLE+tn.SIGNAL_CYCLE)%tn.SIGNAL_CYCLE,this.railTime=(e%tn.RAIL_CYCLE+tn.RAIL_CYCLE)%tn.RAIL_CYCLE}getLightForAxis(t){const e=this.signalTime;return t==="NS"?e<11?"green":e<14?"yellow":"red":e>=15.5&&e<26.5?"green":e>=26.5&&e<29.5?"yellow":"red"}getRailroadState(){const t=this.railTime;let e="open",n=0;t<22?(e="open",n=0):t<26?(e="warning",n=0):t<29?(e="closing",n=(t-26)/3*(Math.PI/2)):t<37?(e="closed",n=Math.PI/2):(e="opening",n=(1-(t-37)/3)*(Math.PI/2));const s=e!=="open",r=Math.floor(t*2.2)%2===0;return{phase:e,barrierAngle:n,isWarningActive:s,flashLeftOn:s&&r,flashRightOn:s&&!r}}};wt(tn,"SIGNAL_CYCLE",31),wt(tn,"RAIL_CYCLE",40);let Ba=tn;const V_={kind:"sedan",length:4.4,width:1.69,wheelbase:2.6,trackWidth:1.48,frontOverhang:.85,rearOverhang:.95,wheelRadius:.31,maxSteerRad:43*Math.PI/180,steeringWheelMaxRad:1.5*Math.PI*2,maxSpeedMs:16.7,maxReverseMs:5.5,maxAccelMs2:3.4,brakeDecelMs2:9.5},G_={kind:"motorcycle",length:2.1,width:.72,wheelbase:1.41,trackWidth:.16,frontOverhang:.35,rearOverhang:.34,wheelRadius:.3,maxSteerRad:34*Math.PI/180,steeringWheelMaxRad:34*Math.PI/180,maxSpeedMs:18,maxReverseMs:1.8,maxAccelMs2:4.5,brakeDecelMs2:9.8};function Jh(i){return i==="motorcycle"?G_:V_}function $h(i,t,e,n="sedan",s="AT"){const r=Jh(n),o=Ls(e),a=Dn(i,t),c=s==="AT"?"D":"1";return{x:i,y:a.y,z:t,rearAxleX:i-o.x*(r.wheelbase*.5),rearAxleZ:t-o.z*(r.wheelbase*.5),heading:gl(e),pitch:0,roll:0,speedMs:0,steerAngleRad:0,steeringWheelRad:0,wheelRotationRad:0,transmission:s,gear:c,rpm:800,stalled:!1,handbrake:!1,blinker:"off",blinkerTimer:0,blinkerOn:!1,braking:!1,reversing:!1,lookAngleRad:0,lookedLeftTimestamp:-999,lookedRightTimestamp:-999,odometerM:0}}const W_={1:6,2:10.5,3:14.5,4:18,5:22,R:5.5},X_={1:1.35,2:1.05,3:.85,4:.7,5:.55,R:1.15};function Kh(i,t){const e=["P","R","N","D"],n=["R","N","1","2","3","4","5"],s=i.transmission==="AT"?e:n,r=s.indexOf(i.gear),o=r===-1?i.transmission==="AT"?3:2:r,a=Math.max(0,Math.min(s.length-1,o+t)),c=s[a];Math.abs(i.speedMs)>1.2&&(c==="P"||c==="R"&&i.speedMs>1.2)||(i.gear=c)}function Y_(i,t,e,n,s,r=Dn){const o=2.5*s.steeringSensitivity;if(t.analogSteerTarget!==null){const Mt=Math.max(-1,Math.min(1,t.analogSteerTarget))*e.maxSteerRad-i.steerAngleRad,Nt=o*1.8*n;i.steerAngleRad+=Math.abs(Mt)<=Nt?Mt:Math.sign(Mt)*Nt}else{const dt=t.steerLeft-t.steerRight;if(Math.abs(dt)>.01)i.steerAngleRad+=dt*o*n;else if(s.autoCenterSteering){const Nt=(.65+2.4*Math.min(1,Math.abs(i.speedMs)/4))*n;Math.abs(i.steerAngleRad)<=Nt?i.steerAngleRad=0:i.steerAngleRad-=Math.sign(i.steerAngleRad)*Nt}}i.steerAngleRad=Math.max(-e.maxSteerRad,Math.min(e.maxSteerRad,i.steerAngleRad)),i.steeringWheelRad=i.steerAngleRad/e.maxSteerRad*e.steeringWheelMaxRad,i.blinker!=="off"?(i.blinkerTimer+=n,i.blinkerOn=Math.floor(i.blinkerTimer*2.6)%2===0):(i.blinkerTimer=0,i.blinkerOn=!1);let a=0;t.lookLeft&&!t.lookRight?a=68*Math.PI/180:t.lookRight&&!t.lookLeft&&(a=-68*Math.PI/180);const c=8.5*n,l=a-i.lookAngleRad;i.lookAngleRad+=Math.abs(l)<=c?l:Math.sign(l)*c,i.lookAngleRad>32*Math.PI/180&&(i.lookedLeftTimestamp=s.simTimeSec),i.lookAngleRad<-32*Math.PI/180&&(i.lookedRightTimestamp=s.simTimeSec);const h=Ls(i.heading),u=r(i.x,i.z),p=u.slopeX*h.x+u.slopeZ*h.z,g=Math.atan(p),_=-9.81*Math.sin(g);let v=0;const m=i.transmission==="AT"?1:1-Math.max(0,Math.min(1,t.clutch)),f=!i.stalled;if(i.transmission==="AT")i.gear==="D"?(t.throttle>.02&&i.speedMs<e.maxSpeedMs?v=t.throttle*e.maxAccelMs2:t.brake<.05&&!i.handbrake&&i.speedMs<1.65&&(v=1.25*(1-Math.max(0,i.speedMs)/1.65)),i.rpm=820+Math.abs(i.speedMs)*210+t.throttle*1400):i.gear==="R"?(t.throttle>.02&&i.speedMs>-e.maxReverseMs?v=-t.throttle*(e.maxAccelMs2*.72):t.brake<.05&&!i.handbrake&&i.speedMs>-1.4&&(v=-.82*(1-Math.max(0,-i.speedMs)/1.4)),i.rpm=820+Math.abs(i.speedMs)*260+t.throttle*1200):i.rpm=780+t.throttle*2600;else if(f&&i.gear!=="N"&&i.gear!=="P"){const dt=W_[i.gear]??10,Mt=X_[i.gear]??1,Yt=i.gear==="R"?-1:1,Qt=Math.abs(i.speedMs)/dt*3800,Zt=800+t.throttle*3400;if(i.rpm=Qt*m+Zt*(1-m),m>.75&&Math.abs(i.speedMs)<.55&&t.throttle<.14&&(t.brake>.1||i.handbrake||Math.abs(i.speedMs)<.15))i.stalled=!0,i.rpm=0;else if(m>.15&&i.speedMs*Yt<dt){const lt=Math.max(.18,t.throttle);v=Yt*lt*e.maxAccelMs2*Mt*m}}else i.rpm=f?780+t.throttle*2800:0;const y=i.transmission==="AT"&&i.gear==="P",M=i.handbrake?6.8:0,x=t.brake*e.brakeDecelMs2,S=x+M+(y?14:0);i.braking=t.brake>.05,i.reversing=i.gear==="R";const E=-i.speedMs*(.14+.015*Math.abs(i.speedMs)),R=v+_+E;let P=i.speedMs+R*n;if(S>.01){const dt=S;if(Math.abs(i.speedMs)<.08&&Math.abs(v+_)<=dt)P=0;else{const Mt=Math.sign(P!==0?P:v+_),Nt=P-Mt*S*n;Math.sign(Nt)!==Math.sign(P)&&Math.abs(v+_)<=dt?P=0:P=Nt}}else Math.abs(P)<.02&&Math.abs(v)<.1&&Math.abs(_)<.1&&(P=0);P=Math.max(-e.maxReverseMs,Math.min(e.maxSpeedMs,P)),i.speedMs=P;const T=i.speedMs*n,b=T/e.wheelbase*Math.tan(i.steerAngleRad),U=i.heading+b*.5,k=Ls(U);i.rearAxleX+=k.x*T,i.rearAxleZ+=k.z*T,i.heading=gl(i.heading+b);const V=Ls(i.heading);i.x=i.rearAxleX+V.x*(e.wheelbase*.5),i.z=i.rearAxleZ+V.z*(e.wheelbase*.5);const J=r(i.x,i.z);i.y=J.y,i.odometerM+=Math.abs(T),i.wheelRotationRad+=T/e.wheelRadius;const W=J.slopeX*V.x+J.slopeZ*V.z,j=Math.atan(W)-Math.max(-.04,Math.min(.04,(x-v)*.004));i.pitch+=(j-i.pitch)*Math.min(1,12*n);const et=b/n,Y=i.speedMs*et,pt=e.kind==="motorcycle"?Math.max(-.48,Math.min(.48,-Y*.065)):Math.max(-.06,Math.min(.06,Y*.008));i.roll+=(pt-i.roll)*Math.min(1,10*n)}function q_(i,t){const e=Ls(i.heading);i.rearAxleX=i.x-e.x*(t.wheelbase*.5),i.rearAxleZ=i.z-e.z*(t.wheelbase*.5)}const Qh={startBay:{titleJa:"発着点 1番",titleEn:"Start Bay 1",descJa:"安全確認・右合図を出して発進",descEn:"Check mirrors & right signal before pull-out"},sCurve:{titleJa:"S字コース",titleEn:"S-Curve",descJa:"幅3.6m・内輪差を意識して低速走行",descEn:"3.6m wide S-bend — watch inner rear wheel cut"},crank:{titleJa:"クランクコース",titleEn:"Crank (90°)",descJa:"直角連続カーブ・ポール接触で検定中止",descEn:"Tight 90° chicane — pole contact fails exam"},hillStart:{titleJa:"坂道発進",titleEn:"Hill Start",descJa:"坂の途中で一時停止し、逆行せず発進",descEn:"Stop on slope and pull away without rollback"},railroad:{titleJa:"踏切通過",titleEn:"Railroad Crossing",descJa:"停止線手前で完全停止し左右確認（Z/X）",descEn:"Full stop before line, look Left & Right (Z/X)"},stopSign:{titleJa:"一時停止（止まれ）",titleEn:"Stop Sign",descJa:"停止線手前で完全停止・左右の安全確認",descEn:"Come to complete 0 km/h stop and glance L/R"},trafficLight:{titleJa:"信号交差点",titleEn:"Signal Intersection",descJa:"信号灯火に従い左折・右折の通行帯を守る",descEn:"Obey signal phases and proper turn positioning"},bayParking:{titleJa:"方向変換",titleEn:"Bay Parking",descJa:"バックで車庫に進入し、前向きに出庫",descEn:"Reverse into the T-bay and exit forward"},parallelParking:{titleJa:"縦列駐車",titleEn:"Parallel Parking",descJa:"縁石に沿わせて駐車枠内に収める",descEn:"Reverse neatly into the curbside pocket"},speedStraight:{titleJa:"直線40km/h・障害物",titleEn:"40 km/h & Obstacle",descJa:"直線で加速し、駐車車両を合図付きで回避",descEn:"Accelerate smoothly and signal past obstacle"}},Z_={ja:{appTitle:"桜ヶ丘自動車教習所 3Dシミュレーター",appSubtitle:"日本の教習所コース・実技検定再現",modePractice:"自由練習",modeExam:"修了検定 (模擬試験)",scoreLabel:"持ち点",stationMenu:"コース・設定",resetBtn:"リセット (O)",cameraBtn:"視点 (V)",camChase:"後方視点",camCockpit:"運転席 (右ハンドル)",camHood:"ボンネット",camOrbit:"自由カメラ",welcomeTitle:"桜ヶ丘自動車教習所 3Dドライビングシミュレーター",welcomeLead:"実際の日本の教習所（180m×120m）を1:1スケールで再現。S字・クランク・坂道発進・踏切・信号・方向変換・縦列駐車・修了検定をブラウザ上で練習できます。",startTraining:"教習を始める",startExam:"修了検定を開始",controlsHeading:"基本操作（右ハンドル・左側通行）",ctrlDrive:"W / S または ↑ / ↓ : アクセル / ブレーキ",ctrlSteer:"A / D または ← / → : ハンドル操作",ctrlSignal:"Q / E : 左・右ウインカー　H : ハザード",ctrlGear:"Shift / Ctrl : ギア変更 (P/R/N/D・1-5)",ctrlLook:"Z / X : 左・右の安全確認（目視）",ctrlBrake:"Space : サイドブレーキ　C : クラッチ(MT)　I : エンジン始動",ctrlView:"V : カメラ切替　O : 現在地点へリセット　M : メニュー",tabStations:"課題ワープ",tabSettings:"車両・設定",tabCustomMap:"カスタム地図",vehicleLabel:"車種",vehicleSedan:"教習車セダン (右ハンドル)",vehicleMoto:"普通二輪 (400cc)",transLabel:"変速機",transAT:"AT (オートマ)",transMT:"MT (マニュアル)",steerSensLabel:"ハンドル感度",autoCenterLabel:"ハンドル自動復元",mirrorQualityLabel:"ミラー描画品質",mirrorHigh:"高画質",mirrorLow:"軽量",mirrorOff:"オフ",volumeLabel:"音量",touchControlsLabel:"タッチ操作パネル表示",customMapHint:"航空写真や教習所コース図(PNG/JPG/WebP)をアップロードし、実際の横幅(m)に合わせて走行できます。",uploadMapLabel:"コース画像をアップロード",mapWidthLabel:"コース横幅 (m)",setSpawnHere:"現在位置を開始地点に設定",useKyoshujo:"3D教習所コースへ戻る",useCustomMap:"カスタム地図で走行",clearCustomMap:"カスタム地図を削除",stalledWarning:"エンスト！ [I] キーまたはボタンで再始動",restartEngine:"エンジン始動 (I)",handbrakeOn:"サイドブレーキ作動中",curbWarning:"縁石接近",examPassStamp:"合格",examFailStamp:"不合格",examResultTitle:"運転技能検定 採点表",examTerminatedSub:"危険行為・重大違反のため検定中止となりました",examPassedSub:"合格基準（70点以上）を達成しました",examFailedSub:"合格点（70点）に届きませんでした",examFinalScore:"最終得点",examElapsed:"所要時間",examDistance:"走行距離",examNoViolations:"減点なし！模範的な運転です。",retryExam:"もう一度検定を受ける",practiceWeak:"苦手課題を練習する",closeModal:"練習を続ける",practiceGuideFree:"左上のコースメニューから各課題へワープ、または「修了検定」を開始できます。",minimapNorth:"北上",minimapFollow:"進行方向"},en:{appTitle:"Sakuragaoka Driving School 3D Simulator",appSubtitle:"Authentic Japanese Kyoshujo Training & Exam",modePractice:"Free Practice",modeExam:"Mock Exam",scoreLabel:"Score",stationMenu:"Menu / Warp",resetBtn:"Reset (O)",cameraBtn:"View (V)",camChase:"Chase",camCockpit:"Cockpit (RHD)",camHood:"Hood",camOrbit:"Orbit",welcomeTitle:"Sakuragaoka Japanese Driving School Simulator",welcomeLead:"Full 1:1 scale 180m × 120m Japanese Kyoshujo compound. Practice S-Curve, 90° Crank, Hill Start, Railroad Crossing, Stop Signs, Signals, Bay & Parallel Parking, or take the 100-point Mock Exam.",startTraining:"Start Practice",startExam:"Start Mock Exam",controlsHeading:"Controls (Right-Hand Drive · Keep Left)",ctrlDrive:"W / S or ↑ / ↓ : Throttle / Foot Brake",ctrlSteer:"A / D or ← / → : Steering Wheel",ctrlSignal:"Q / E : Left / Right Blinker   H : Hazard",ctrlGear:"Shift / Ctrl : Shift Gear (P/R/N/D or 1-5)",ctrlLook:"Z / X : Safety Glance Left / Right",ctrlBrake:"Space : Handbrake   C : Clutch (MT)   I : Ignition",ctrlView:"V : Camera   O : Reset Vehicle   M : Menu",tabStations:"Stations",tabSettings:"Vehicle & Setup",tabCustomMap:"Custom Map",vehicleLabel:"Vehicle",vehicleSedan:"Sedan (RHD Kyoshusha)",vehicleMoto:"Motorcycle (400cc)",transLabel:"Transmission",transAT:"AT (Automatic)",transMT:"MT (Manual)",steerSensLabel:"Steering Sensitivity",autoCenterLabel:"Auto-Center Steering",mirrorQualityLabel:"Mirror Reflections",mirrorHigh:"High",mirrorLow:"Low",mirrorOff:"Off",volumeLabel:"Master Volume",touchControlsLabel:"Show Touch Controls",customMapHint:"Upload any top-down driving center map image (PNG/JPG/WebP), calibrate real width in meters, and drive directly on it.",uploadMapLabel:"Upload Map Image",mapWidthLabel:"Map Width (meters)",setSpawnHere:"Set Current Position as Spawn",useKyoshujo:"Switch to 3D Kyoshujo",useCustomMap:"Drive Custom Map",clearCustomMap:"Clear Saved Map",stalledWarning:"Engine Stalled! Press [I] or tap to restart",restartEngine:"Start Engine (I)",handbrakeOn:"Handbrake Engaged",curbWarning:"Curb Close",examPassStamp:"PASS",examFailStamp:"FAIL",examResultTitle:"Practical Driving Exam Score Sheet",examTerminatedSub:"Exam terminated immediately due to a major safety violation",examPassedSub:"Passed with 70 points or higher",examFailedSub:"Score fell below the 70-point passing threshold",examFinalScore:"Final Score",examElapsed:"Time",examDistance:"Distance",examNoViolations:"Zero deductions — exemplary Japanese driving technique!",retryExam:"Retry Exam",practiceWeak:"Practice Weak Area",closeModal:"Continue Free Practice",practiceGuideFree:"Open Menu (M) to warp to any course obstacle or start a full 100-point Mock Exam.",minimapNorth:"North-Up",minimapFollow:"Heading-Up"}};function Un(i,t){return Z_[i][t]}class j_{constructor(t){wt(this,"keys",new Set);wt(this,"touchThrottle",0);wt(this,"touchBrake",0);wt(this,"touchLookLeft",!1);wt(this,"touchLookRight",!1);wt(this,"analogSteer",null);wt(this,"actions");wt(this,"handleBlur",()=>{this.keys.clear(),this.touchThrottle=0,this.touchBrake=0,this.touchLookLeft=!1,this.touchLookRight=!1,this.analogSteer=null});wt(this,"handleKeyDown",t=>{const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"))return;this.actions.onAnyInteraction();const n=t.code;(n==="Space"||n==="ArrowUp"||n==="ArrowDown"||n==="ArrowLeft"||n==="ArrowRight")&&t.preventDefault(),t.repeat||(n==="KeyQ"?this.actions.onToggleBlinker("left"):n==="KeyE"?this.actions.onToggleBlinker("right"):n==="KeyH"?this.actions.onToggleBlinker("hazard"):n==="Space"?this.actions.onToggleHandbrake():n==="ShiftLeft"||n==="ShiftRight"||n==="BracketRight"?this.actions.onShiftGear(1):n==="ControlLeft"||n==="ControlRight"||n==="BracketLeft"?this.actions.onShiftGear(-1):n==="KeyV"?this.actions.onCycleCamera():n==="KeyO"?this.actions.onResetVehicle():n==="KeyM"?this.actions.onToggleMenu():n==="KeyI"&&this.actions.onIgnition()),this.keys.add(n)});wt(this,"handleKeyUp",t=>{this.keys.delete(t.code)});this.actions=t,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}bindTouchControls(t){const e=t.querySelector('[data-touch="steer"]'),n=t.querySelector('[data-touch="steer-knob"]'),s=t.querySelector('[data-touch="throttle"]'),r=t.querySelector('[data-touch="brake"]'),o=t.querySelector('[data-touch="look-left"]'),a=t.querySelector('[data-touch="look-right"]');if(e){let l=null,h=0;const u=g=>{const _=g-h,v=54,m=Math.max(-1,Math.min(1,-_/v));this.analogSteer=m,n&&(n.style.transform=`translateX(${Math.max(-v,Math.min(v,_))}px)`)};e.addEventListener("pointerdown",g=>{g.preventDefault(),this.actions.onAnyInteraction(),l=g.pointerId,h=g.clientX,e.setPointerCapture(g.pointerId),u(g.clientX)}),e.addEventListener("pointermove",g=>{g.pointerId===l&&u(g.clientX)});const p=g=>{g.pointerId===l&&(l=null,this.analogSteer=null,n&&(n.style.transform="translateX(0px)"))};e.addEventListener("pointerup",p),e.addEventListener("pointercancel",p)}const c=(l,h)=>{if(!l)return;l.addEventListener("pointerdown",p=>{p.preventDefault(),this.actions.onAnyInteraction(),l.setPointerCapture(p.pointerId),l.classList.add("active"),h(!0)});const u=()=>{l.classList.remove("active"),h(!1)};l.addEventListener("pointerup",u),l.addEventListener("pointercancel",u)};c(s,l=>{this.touchThrottle=l?1:0}),c(r,l=>{this.touchBrake=l?1:0}),c(o,l=>{this.touchLookLeft=l}),c(a,l=>{this.touchLookRight=l}),t.querySelectorAll("[data-touch-action]").forEach(l=>{l.addEventListener("click",()=>{this.actions.onAnyInteraction();const h=l.dataset.touchAction;h==="blinker-left"?this.actions.onToggleBlinker("left"):h==="blinker-right"?this.actions.onToggleBlinker("right"):h==="handbrake"?this.actions.onToggleHandbrake():h==="gear-up"?this.actions.onShiftGear(1):h==="gear-down"&&this.actions.onShiftGear(-1)})})}getInputState(){const t=this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0,e=this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0,n=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0,s=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0,r=this.keys.has("KeyC")?1:0;return{throttle:Math.max(t,this.touchThrottle),brake:Math.max(e,this.touchBrake),steerLeft:n,steerRight:s,analogSteerTarget:this.analogSteer,clutch:r,lookLeft:this.keys.has("KeyZ")||this.touchLookLeft,lookRight:this.keys.has("KeyX")||this.touchLookRight}}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}const Vc={type:"change"},xl={type:"start"},tu={type:"end"},wr=new gh,Gc=new Nn,J_=Math.cos(70*Ae.DEG2RAD),we=new I,Ve=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zo=1e-6;class $_ extends Wf{constructor(t,e=null){super(t,e),this.state=le.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$i.ROTATE,MIDDLE:$i.DOLLY,RIGHT:$i.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new bi,this._lastTargetPosition=new I,this._quat=new bi().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fc,this._sphericalDelta=new fc,this._scale=1,this._panOffset=new I,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new I,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Q_.bind(this),this._onPointerDown=K_.bind(this),this._onPointerUp=tx.bind(this),this._onContextMenu=ax.bind(this),this._onMouseWheel=ix.bind(this),this._onKeyDown=sx.bind(this),this._onTouchStart=rx.bind(this),this._onTouchMove=ox.bind(this),this._onMouseDown=ex.bind(this),this._onMouseMove=nx.bind(this),this._interceptControlDown=lx.bind(this),this._interceptControlUp=cx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vc),this.update(),this.state=le.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wr.origin.copy(this.object.position),wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wr.direction))<J_?this.object.lookAt(this.target):(Gc.setFromNormalAndCoplanarPoint(this.object.up,this.target),wr.intersectPlane(Gc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zo||this._lastTargetPosition.distanceToSquared(this.target)>zo?(this.dispatchEvent(Vc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function K_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Q_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function tx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(tu),this.state=le.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ex(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case $i.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=le.DOLLY;break;case $i.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}break;case $i.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(xl)}function nx(i){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function ix(i){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(i.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(tu))}function sx(i){this.enabled!==!1&&this._handleKeyDown(i)}function rx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=le.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=le.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(xl)}function ox(i){switch(this._trackPointer(i),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=le.NONE}}function ax(i){this.enabled!==!1&&i.preventDefault()}function lx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class js extends Dt{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Oe;const n=this,s=e.color!==void 0?new Kt(e.color):new Kt(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||js.ReflectorShader,l=e.multisample!==void 0?e.multisample:4,h=new Nn,u=new I,p=new I,g=new I,_=new ge,v=new I(0,0,-1),m=new pe,f=new I,y=new I,M=new pe,x=new ge,S=this.camera,E=new si(r,o,{samples:l,type:us}),R=new Hn({name:c.name!==void 0?c.name:"unspecified",uniforms:Sh.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});R.uniforms.tDiffuse.value=E.texture,R.uniforms.color.value=s,R.uniforms.textureMatrix.value=x,this.material=R,this.onBeforeRender=function(P,T,b){if(p.setFromMatrixPosition(n.matrixWorld),g.setFromMatrixPosition(b.matrixWorld),_.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(_),f.subVectors(p,g),f.dot(u)>0===!0&&this.forceUpdate===!1)return;f.reflect(u).negate(),f.add(p),_.extractRotation(b.matrixWorld),v.set(0,0,-1),v.applyMatrix4(_),v.add(g),y.subVectors(p,v),y.reflect(u).negate(),y.add(p),S.position.copy(f),S.up.set(0,1,0),S.up.applyMatrix4(_),S.up.reflect(u),S.lookAt(y),S.far=b.far,S.updateMatrixWorld(),S.projectionMatrix.copy(b.projectionMatrix),x.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),x.multiply(S.projectionMatrix),x.multiply(S.matrixWorldInverse),x.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,p),h.applyMatrix4(S.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const k=S.projectionMatrix;M.x=(Math.sign(m.x)+k.elements[8])/k.elements[0],M.y=(Math.sign(m.y)+k.elements[9])/k.elements[5],M.z=-1,M.w=(1+k.elements[10])/k.elements[14],m.multiplyScalar(2/m.dot(M)),k.elements[2]=m.x,k.elements[6]=m.y,k.elements[10]=m.z+1-a,k.elements[14]=m.w,n.visible=!1;const V=P.getRenderTarget(),J=P.xr.enabled,W=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(E),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(T,S),P.xr.enabled=J,P.shadowMap.autoUpdate=W,P.setRenderTarget(V);const j=b.viewport;j!==void 0&&P.state.viewport(j),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}js.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function hx(i,t,e=!0){const n=[],s=(N,X=.5,G=.1)=>new Ht({color:N,roughness:X,metalness:G}),r=new Ua({color:366185,roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.13}),o=new Ua({color:3462041,roughness:.3,metalness:.35,clearcoat:1,clearcoatRoughness:.2}),a=s(14014684,.3,.65),c=s(1448221,.65,.3),l=s(1053205,.93,0),h=s(2237482,.96,0),u=s(3882307,.4,.58),p=s(8817554,.32,.7),g=s(14803943,.2,.6);function _(N,X){return N.name=X,N.userData.partName=X,N}function v(N,X){const G=_(new fe,X);return N.add(G),G}function m(N,X,G,K,nt=0,ct=0,A=0){const d=_(new Dt(G,K),X);return d.position.set(nt,ct,A),d.castShadow=!0,d.receiveShadow=!0,N.add(d),d}const f=(N,X,G,K,nt,ct,A=0,d=0,C=0)=>m(N,X,new he(G,K,nt),ct,A,d,C);function y(N,X,G,K,nt){return m(N,X,new $r(new dl(G.map(ct=>new I(...ct))),40,K,8,!1),nt)}function M(N,X,G,K,nt,ct){const A=new I(...G),d=new I(...K),C=d.clone().sub(A),L=m(N,X,new ue(nt,nt,C.length(),16),ct);return L.position.copy(A.add(d).multiplyScalar(.5)),L.quaternion.setFromUnitVectors(new I(0,1,0),C.normalize()),L}function x(N,X,G,K,nt,ct,A=0,d=0,C=0){const L=m(N,X,new Zs(1,36,24),ct,A,d,C);return L.scale.set(G,K,nt),L}function S(N,X,G,K){const nt=[],ct=[];for(const[C,L,B,F]of G)for(let at=0;at<40;at++){const Q=at/40*Math.PI*2;nt.push(Math.cos(Q)*L,(F+B)/2+Math.sin(Q)*((F-B)/2),C)}for(let C=0;C<G.length-1;C++)for(let L=0;L<40;L++){const B=C*40+L,F=C*40+(L+1)%40;ct.push(B,F,F+40,B,F+40,B+40)}for(let C=1;C<39;C++){ct.push(0,C+1,C);const L=(G.length-1)*40;ct.push(L,L+C,L+C+1)}const d=new me;return d.setAttribute("position",new qt(nt,3)),d.setIndex(ct),d.computeVertexNormals(),m(N,X,d,K)}const E=v(i,"motorcycleRoot"),R=v(i,"bikeCockpitRoot"),P=[[-.28,.065,.77,.86],[-.16,.135,.76,.93],[0,.205,.77,1.02],[.19,.218,.8,1.064],[.34,.184,.83,1.052],[.46,.09,.84,.98],[.49,.025,.87,.93]],T=S(E,"paintedTank",P,r);function b(N,X,G,K){let nt=0;for(;nt<P.length-2&&P[nt+1][0]<N;)nt++;const ct=P[nt],A=P[nt+1],d=(N-ct[0])/(A[0]-ct[0]),C=Ae.lerp(ct[1],A[1],d),L=Ae.lerp(ct[2],A[2],d),B=Ae.lerp(ct[3],A[3],d);return[G*(Math.cos(X)*C+K),(B+L)/2+Math.sin(X)*((B-L)/2),N]}for(const N of[-1,1])for(const[X,G,K,nt]of[["whitePinstripe",0,.004,a],["blackSweep",.025,.005,c],["silverPanel",.064,.006,a]]){const ct=[],A=[],d=[[-.215,-.65,.06],[-.15,-.82,.34],[0,-.75,.65],[.18,-.5,.77],[.29,-.24,.65],[.38,.05,.22]];for(const[B,F,at]of d)for(let Q=0;Q<=12;Q++)ct.push(...b(B,Ae.lerp(F+G,at-G,Q/12),N,K));for(let B=0;B<d.length-1;B++)for(let F=0;F<12;F++){const at=B*13+F,Q=at+13;A.push(at,Q,at+1,at+1,Q,Q+1)}const C=new me;C.setAttribute("position",new qt(ct,3)),C.setIndex(A),C.computeVertexNormals();const L=nt.clone();L.side=Le,m(E,`${X}${N}`,C,L)}const U=m(E,"fuelCap",new ue(.043,.043,.009,32),a,0,1.068,.18);m(U,"lock",new he(.018,.004,.008),c,0,.007,0),S(E,"steppedSaddle",[[-.96,.085,.88,.94],[-.85,.145,.855,.966],[-.63,.153,.82,.95],[-.45,.125,.775,.867],[-.27,.108,.775,.837],[-.19,.07,.8,.837]],h),S(E,"paintedTailCowl",[[-1.02,.035,.86,.91],[-.93,.11,.815,.88],[-.73,.151,.76,.849],[-.5,.125,.73,.81],[-.31,.08,.725,.77]],r);for(const N of[-1,1]){y(E,`tailSilverStripe${N}`,[[N*.11,.85,-.94],[N*.153,.82,-.76],[N*.13,.78,-.52],[N*.09,.75,-.35]],.012,a),y(E,`grabRail${N}`,[[N*.14,.87,-.65],[N*.18,.92,-.86],[N*.12,.94,-1]],.014,p);const X=new es;X.moveTo(-.5,.8),X.quadraticCurveTo(-.34,.82,-.17,.78),X.lineTo(-.25,.6),X.quadraticCurveTo(-.37,.6,-.5,.8);const G=new Ws(X,{depth:.015,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008,curveSegments:16}),K=m(E,`sideCover${N}`,G,r,N*.14);K.rotation.y=Math.PI/2,K.scale.x=-1,y(E,`frameCradle${N}`,[[N*.12,.94,.38],[N*.16,.72,.3],[N*.18,.3,.15],[N*.17,.29,-.25],[N*.14,.71,-.48],[N*.12,.87,-.7]],.018,c),M(E,`seatSubframe${N}`,[N*.12,.63,-.35],[N*.12,.88,-.94],.019,c),M(E,`swingarm${N}`,[N*.13,.43,-.2],[N*.135,.315,-.715],.024,p),M(E,`shockShaft${N}`,[N*.168,.36,-.72],[N*.168,.79,-.55],.017,t);const nt=[],ct=new I(N*.168,.39,-.71),A=new I(N*.168,.74,-.57);for(let d=0;d<=96;d++){const C=d/96,L=C*Math.PI*2*10,B=ct.clone().lerp(A,C);nt.push([B.x+Math.cos(L)*.033,B.y+Math.sin(L)*.013,B.z+Math.sin(L)*.031])}y(E,`shockSpring${N}`,nt,.0065,o),M(E,`footpeg${N}`,[N*.15,.44,-.23],[N*.29,.44,-.23],.017,c),f(E,`heelPlate${N}`,.016,.11,.19,a,N*.19,.45,-.32)}x(E,"crankcase",.225,.17,.24,u,0,.48,0);for(const N of[-1,1]){const X=m(E,`engineCover${N}`,new ue(.124,.124,.045,40),u,N*.228,.46,-.05);X.rotation.z=Math.PI/2;const G=m(E,`clutchCover${N}`,new ue(.073,.073,.026,32),p,N*.236,.43,.135);G.rotation.z=Math.PI/2}for(let N=0;N<4;N++){const X=(N-1.5)*.095;f(E,`cylinder${N}`,.084,.21,.18,u,X,.65,.115);for(let G=0;G<7;G++)f(E,`coolingFin${N}:${G}`,.091,.008,.19,p,X,.58+G*.024,.12);y(E,`header${N}`,[[X,.715,.22],[X,.64,.33],[X,.4,.34],[X,.235,.2],[X*.65,.225,-.13],[-.16,.26,-.37]],.022,g)}f(E,"camCover",.43,.065,.235,u,0,.802,.12),f(E,"radiator",.32,.2,.055,c,0,.7,.335),y(E,"collector",[[-.16,.26,-.37],[-.24,.3,-.48],[-.26,.39,-.62]],.041,g),M(E,"chromeSilencer",[-.265,.37,-.49],[-.265,.56,-.98],.063,g),M(E,"exhaustOutlet",[-.265,.56,-.98],[-.265,.57,-1.01],.045,c);function k(N,X,G){const K=v(N,X),nt=m(K,"tire",new vn(.262,.053,16,48),l);nt.rotation.y=Math.PI/2,nt.scale.z=G/.106;const ct=m(K,"rim",new vn(.218,.014,10,36),c);ct.rotation.y=Math.PI/2;const A=m(K,"hub",new ue(.048,.048,G+.018,24),p);A.rotation.z=Math.PI/2;for(const d of[-1,1]){for(let L=0;L<6;L++){const B=L/6*Math.PI*2;M(K,`spoke${d}:${L}`,[d*.026,Math.sin(B)*.047,Math.cos(B)*.047],[d*.044,Math.sin(B+.13)*.211,Math.cos(B+.13)*.211],.014,c)}const C=m(K,`brakeDisc${d}`,new ei(.093,.146,36),a,d*(G/2+.014));C.rotation.y=d*Math.PI/2}return{group:K,tire:nt,rim:ct,hub:A}}const V=v(E,"bikeFrontWheelPivot");V.position.set(0,.315,.72);const J=k(V,"frontWheel",.12),W=v(E,"bikeRearWheelMount");W.position.set(0,.315,-.715);const j=k(W,"rearWheel",.16);m(W,"rearSprocket",new ei(.048,.12,32),p,.096,0,0).rotation.y=Math.PI/2,y(E,"driveChain",[[.105,.4,-.71],[.105,.5,-.24],[.105,.42,-.15],[.105,.23,-.69],[.105,.25,-.82],[.105,.35,-.83],[.105,.4,-.71]],.009,p);for(const N of[-1,1])M(V,`forkChrome${N}`,[N*.095,.08,-.03],[N*.095,.63,-.27],.021,t),M(V,`forkSlider${N}`,[N*.095,0,0],[N*.095,.32,-.137],.031,c),f(V,`brakeCaliper${N}`,.048,.1,.056,c,N*.098,.04,-.115);const et=r.clone();et.side=Le;const Y=[],pt=[];for(let N=0;N<=24;N++){const X=-1.13+N/24*2.26;for(let G=0;G<=6;G++){const K=(G/6-.5)*.15;Y.push(K,Math.cos(X)*(.359-.01*(K/.075)**2),Math.sin(X)*.359)}}for(let N=0;N<24;N++)for(let X=0;X<6;X++){const G=N*7+X;pt.push(G,G+7,G+1,G+1,G+7,G+8)}const dt=new me;dt.setAttribute("position",new qt(Y,3)),dt.setIndex(pt),dt.computeVertexNormals(),m(V,"frontFender",dt,et),f(E,"rearMudguard",.14,.035,.27,c,0,.68,-.94).rotation.x=.5;function Mt(N,X,G,K){const nt=v(N,X);nt.position.set(0,G,K),y(nt,"chromeHandlebar",[[-.36,0,-.06],[-.24,.014,-.04],[-.16,.005,-.01],[-.1,-.035,.025],[.1,-.035,.025],[.16,.005,-.01],[.24,.014,-.04],[.36,0,-.06]],.012,t);for(const ct of[-1,1]){M(nt,`grip${ct}`,[ct*.26,.009,-.05],[ct*.37,0,-.065],.022,l),f(nt,`switchBlock${ct}`,.045,.041,.052,c,ct*.235,.013,-.04),y(nt,`lever${ct}`,[[ct*.21,.013,-.006],[ct*.3,.019,.017],[ct*.37,.014,-.005]],.0065,a),M(nt,`mirrorBoot${ct}`,[ct*.235,.02,-.025],[ct*.245,.075,-.02],.012,c),y(nt,`mirrorStem${ct}`,[[ct*.245,.07,-.02],[ct*.26,.115,.008],[ct*.34,.165,.04],[ct*.425,.22,.075]],.0055,g),x(nt,`roundMirror${ct}`,.059,.059,.012,c,ct*.465,.245,.085);const A=new Si(1,32),d=_(e?new js(A,{color:11974326,textureWidth:256,textureHeight:256,multisample:0,clipBias:.001}):new Dt(A,s(10992584,.08,.8)),`mirrorGlass${ct}`);d.position.set(ct*.465,.245,.071),d.scale.set(.055,.055,1),d.rotation.set(0,Math.PI,0),nt.add(d),n.push(d);const C=m(nt,`mirrorBezel${ct}`,new ei(1,1.07,32),g,ct*.465,.245,.07);C.scale.copy(d.scale),C.rotation.copy(d.rotation)}return f(nt,"upperTripleClamp",.25,.028,.105,c,0,-.1,.055),nt}const Nt=Mt(E,"bikeHandlebar",1.035,.4),Yt=m(E,"roundHeadlightBucket",new ue(.095,.092,.105,32),t,0,.947,.585);Yt.rotation.x=Math.PI/2;const Qt=new Ht({color:16053740,emissive:16777185,emissiveIntensity:.5,roughness:.15});m(E,"headlightLens",new Si(.086,32),Qt,0,.947,.64),m(E,"headlightRim",new vn(.09,.006,8,32),t,0,.947,.645);let Zt=0,tt=.22;const lt=[];function mt(N,X,G,K,nt,ct,A){const d=v(N,X);d.position.set(G,K,nt),d.rotation.x=-.42;const C=m(d,"meterBucket",new ue(.068,.068,.065,24),c,0,0,.018);C.rotation.x=Math.PI/2,m(d,"chromeMeterRim",new vn(.065,.005,8,28),t,0,0,-.019);const L=document.createElement("canvas");L.width=256,L.height=256;const B=L.getContext("2d"),F=new Jn(L);F.colorSpace=Se;const at=m(d,"instrumentFace",new Si(.061,28),new cn({map:F,toneMapped:!1}),0,0,-.02);return at.rotation.y=Math.PI,lt.push({ctx:B,texture:F,max:ct,isRpm:A}),d}function At(N,X){f(N,`${X}InstrumentBridge`,.245,.034,.067,c,0,-.005,.124),f(N,`${X}CenterPod`,.05,.081,.049,c,0,.051,.137),mt(N,`${X}Speedometer`,.079,.064,.143,180,!1),mt(N,`${X}Tachometer`,-.079,.064,.143,13,!0)}At(Nt,"exterior");const Pt=T.clone();Pt.position.set(0,.16,.08),R.add(Pt);const Wt=Mt(R,"bikeCockpitBar",1.17,.52);At(Wt,"cockpit");let ee="";function D(N,X){Zt=Math.round(Math.abs(N)*3.6),tt=Math.round(X*40)/40;const G=`${Zt}/${tt}`;if(G!==ee){ee=G;for(const K of lt){const nt=K.ctx;nt.fillStyle="#10171d",nt.fillRect(0,0,256,256),nt.textAlign="center";for(let d=0;d<=12;d++){const C=Math.PI*(.75+1.5*d/12);nt.strokeStyle=d>10?"#ee4a50":"#d7e3e9",nt.lineWidth=d%2?2:4,nt.beginPath(),nt.moveTo(128+Math.cos(C)*91,128+Math.sin(C)*91),nt.lineTo(128+Math.cos(C)*109,128+Math.sin(C)*109),nt.stroke(),d%2===0&&(nt.fillStyle="#e3eaef",nt.font="15px sans-serif",nt.fillText(String(Math.round(d/12*K.max)),128+Math.cos(C)*76,133+Math.sin(C)*76))}const ct=K.isRpm?tt*12:Zt,A=Math.PI*(.75+1.5*Math.min(ct/K.max,1));nt.strokeStyle="#ff5147",nt.lineWidth=4,nt.beginPath(),nt.moveTo(128,128),nt.lineTo(128+Math.cos(A)*90,128+Math.sin(A)*90),nt.stroke(),nt.fillStyle="#c5d7df",nt.font="14px sans-serif",nt.fillText(K.isRpm?"×1000":"km/h",128,176),nt.fillStyle="#172c31",nt.fillRect(94,189,68,25),nt.fillStyle="#b6e2d4",nt.font="18px monospace",nt.fillText(K.isRpm?String(Math.round(tt*12e3)):String(Zt),128,208),K.texture.needsUpdate=!0}}}D(0,.22);function rt(N,X,G,K,nt,ct=.056){const A=new Ht({color:nt,emissive:nt,emissiveIntensity:.02,roughness:.25});return{mesh:f(E,N,ct,.034,.036,A,X,G,K),material:A}}const it={left:[rt("frontLeftSignal",.16,.905,.584,16753962),rt("rearLeftSignal",.16,.78,-.985,16753962)],right:[rt("frontRightSignal",-.16,.905,.584,16753962),rt("rearRightSignal",-.16,.78,-.985,16753962)]},st=rt("tailLamp",0,.849,-1.012,15014699,.16);return{motorcycleRoot:E,bikeCockpitRoot:R,bikeCockpitBar:Wt,bikeHandlebar:Nt,bikeFrontWheelPivot:V,bikeFrontWheelAssembly:J,bikeRearWheelAssembly:j,bikeRearWheelMount:W,bikeSignalLamps:it,bikeBrakeLamp:st,updateBikeCockpit:D,mirrorSurfaces:n}}function ux(i,t,e,n,s=!0){const r=new fe;r.name="sedanRoot",i.add(r);const o={sedanRoot:r},a=[];o.mirrorSurfaces=a;const c=(d,C=.65,L=0)=>new Ht({color:d,roughness:C,metalness:L}),l=c(2435116,.88),h=c(4277578,.96),u=c(9213599,.38,.55),p=c(1385262,.16,.4),g=new Ht({color:15792639,emissive:14282495,emissiveIntensity:.8}),_=new Ht({color:10097179,emissive:15277353,emissiveIntensity:.28,roughness:.2}),v=new Ht({color:10929102,roughness:.12,metalness:.12,transparent:!0,opacity:.19,depthWrite:!1,side:Le}),m=(d,C)=>(d.name=C,d.userData.partName=C,d),f=(d,C=r)=>{const L=m(new fe,d);return C.add(L),L},y=d=>o[d]=f(d);function M(d,C,L,B=.025){B=Math.min(B,d/3,C/3,L/3);const F=new es;F.moveTo(-d/2+B,-C/2+B),F.lineTo(d/2-B,-C/2+B),F.lineTo(d/2-B,C/2-B),F.lineTo(-d/2+B,C/2-B),F.closePath();const at=new Ws(F,{depth:L-2*B,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:B,bevelThickness:B});return at.translate(0,0,-L/2+B),at}function x(d,C,L,B,F=0,at=0,Q=0){const vt=d.children.filter($=>$.name===C||$.name.startsWith(`${C}:`)).length,ut=m(new Dt(L,B),vt?`${C}:${vt+1}`:C);return ut.position.set(F,at,Q),ut.castShadow=!B.transparent,ut.receiveShadow=!0,d.add(ut),ut}const S=(d,C,L,B,F,at,Q=0,vt=0,ut=0,$=.025)=>x(d,C,M(L,B,F,$),at,Q,vt,ut);function E(d,C,L,B){const F=[],at=[];for(const[ut,$,ft,Ft]of L)for(let Tt=0;Tt<32;Tt++){const St=Tt/32*Math.PI*2,Vt=Math.cos(St),O=Math.sin(St);F.push(Math.sign(Vt)*Math.pow(Math.abs(Vt),.42)*$,(Ft+ft)/2+Math.sign(O)*Math.pow(Math.abs(O),.42)*((Ft-ft)/2),ut)}for(let ut=0;ut<L.length-1;ut++)for(let $=0;$<32;$++){const ft=ut*32+$,Ft=ut*32+($+1)%32;at.push(ft,Ft,Ft+32,ft,Ft+32,ft+32)}for(let ut=1;ut<31;ut++){at.push(0,ut+1,ut);const $=(L.length-1)*32;at.push($,$+ut,$+ut+1)}const vt=new me;return vt.setAttribute("position",new qt(F,3)),vt.setIndex(at),vt.computeVertexNormals(),x(d,C,vt,B)}function R(d,C,L,B,F=.008){const at=new dl(L.map(Q=>new I(...Q)));return x(d,C,new $r(at,Math.max(8,L.length*5),F,5,!1),B)}function P(d,C,L,B){const F=new me;return F.setAttribute("position",new qt(L.flat(),3)),F.setIndex([0,1,2,0,2,3]),F.computeVertexNormals(),x(d,C,F,B)}const T=new Ht({color:3462041,roughness:.35,metalness:.2,side:Le});function b(d,C,L,B,F=.06){const at=f("gaimengoEmblem",d);return at.position.set(C,L,B),x(at,"badgeRing",new vn(F,F*.12,6,32),e),x(at,"badgeDisc",new Si(F*.86,32),T),at}function U(d,C,L,B,F,at){const Q=f(C,d);Q.position.set(...F);const ut=new I(-.36,1.245,-.38).sub(Q.position).normalize().add(new I(...at).normalize()).normalize();Q.quaternion.setFromRotationMatrix(new ge().lookAt(ut,new I,new I(0,1,0))),S(Q,"mirrorFrame",L+.022,B+.022,.024,n,0,0,-.015,.006);const $=new Ge(L,B),ft=m(s?new js($,{color:11974326,textureWidth:256,textureHeight:256,clipBias:.001,multisample:0}):new Dt($,c(10597570,.08,.85)),"reflectiveGlass");if(Q.add(ft),a.push(ft),s&&ft.onBeforeRender){const Ft=ft.onBeforeRender;ft.onBeforeRender=function(Tt,St,Vt){if(Vt.userData.skipCarMirrors)return;const O=performance.now(),_t=Vt.userData.carMirrorInterval||0;if(_t&&O-(this.userData.reflectedAt||0)<_t)return;this.userData.reflectedAt=O;const yt=a.map(Ct=>Ct.visible),Lt=Tt.getViewport(new pe),gt=Tt.getScissor(new pe),ot=Tt.getScissorTest();a.forEach(Ct=>{Ct!==ft&&(Ct.visible=!1)}),Tt.setScissorTest(!1);try{Ft.call(this,Tt,St,Vt)}finally{a.forEach((Ct,Xt)=>{Ct.visible=yt[Xt]}),Tt.setViewport(Lt),Tt.setScissor(gt),Tt.setScissorTest(ot)}}}return Q}const k=y("body"),V=new es;V.moveTo(-2.26,.3),V.lineTo(-2.26,.76),V.quadraticCurveTo(-2.15,.94,-1.6,.97),V.lineTo(.95,.94),V.quadraticCurveTo(1.95,.94,2.24,.78),V.lineTo(2.24,.3),V.lineTo(1.72,.3),V.absarc(1.35,.315,.371,0,Math.PI,!1),V.lineTo(-.979,.3),V.absarc(-1.35,.315,.371,0,Math.PI,!1),V.closePath();const J=new Ws(V,{depth:.055,bevelEnabled:!0,bevelSegments:3,bevelSize:.018,bevelThickness:.018,curveSegments:32}),W=J.attributes.position;for(let d=0;d<W.count;d++){const C=W.getX(d),L=W.getY(d),B=Math.max(0,L-.77)*.24,F=Math.pow(Math.min(Math.abs(C)/2.3,1),5)*.048;W.setZ(d,W.getZ(d)-B-F)}J.computeVertexNormals();for(const d of[-1,1]){const C=x(k,`sideSkin${d}`,J,t,d*.825);C.rotation.y=d*Math.PI/2,d===1&&(C.scale.x=-1);for(const L of[-1.35,1.35]){const B=[];for(let F=0;F<=28;F++){const at=F/28*Math.PI;B.push([d*.885,.315+Math.sin(at)*.382,L+Math.cos(at)*.382])}R(k,"fenderLip",B,t,.018)}R(k,"shoulderCrease",[[d*.86,.81,-2.04],[d*.898,.88,-.9],[d*.898,.87,.7],[d*.855,.8,1.98]],u,.003);for(const L of[-.48,.67])R(k,"doorShutline",[[d*.898,.93,L],[d*.899,.63,L-.02],[d*.88,.36,L-.07]],n,.0035),S(k,"doorHandle",.026,.032,.15,t,d*.912,.84,L-.19,.01);S(k,"rocker",.07,.08,1.9,t,d*.85,.3,0)}S(k,"underbody",1.55,.08,3.65,n,0,.24,0);const j=y("shoulderShell");for(const d of[-1,1])S(j,"beltLine",.12,.09,2.5,t,d*.81,.94,-.2);const et=y("hood");E(et,"bonnet",[[.94,.785,.943,1.012],[1.15,.817,.929,1],[1.75,.822,.884,.965],[2.1,.785,.859,.932],[2.23,.71,.85,.912]],t);for(const d of[-1,1])R(et,"bonnetCrease",[[d*.57,1.01,.99],[d*.49,.981,1.6],[d*.38,.945,2.15]],t,.009);const Y=y("trunk");E(Y,"bootLid",[[-2.275,.74,.902,.958],[-2.16,.835,.905,.99],[-1.85,.85,.916,1.004],[-1.51,.79,.925,1.015]],t),S(Y,"bootFace",1.64,.24,.07,t,0,.8,-2.255),b(Y,0,.86,-2.299,.039);const pt=y("frontBumper");E(pt,"bumper",[[1.98,.848,.3,.823],[2.15,.875,.295,.846],[2.25,.834,.31,.854],[2.318,.753,.34,.848]],t);const dt=y("rearBumper");E(dt,"bumper",[[-2.323,.746,.345,.636],[-2.28,.836,.32,.655],[-2.16,.873,.31,.665],[-2.02,.846,.32,.66]],t),S(dt,"lowerValance",1.36,.105,.03,n,0,.335,-2.321);for(const d of[-1,1])S(dt,"reflector",.19,.033,.016,_,d*.66,.48,-2.327);const Mt=y("grille"),Nt=new es;Nt.moveTo(-.52,.735),Nt.lineTo(.52,.735),Nt.lineTo(.715,.385),Nt.quadraticCurveTo(0,.315,-.715,.385),Nt.closePath(),x(Mt,"trapezoidIntake",new fl(Nt),n,0,0,2.323);for(let d=0;d<7;d++){const C=.39+d*.046,L=.7-d*.026;S(Mt,"grilleSlat",L*2,.012,.014,c(3423040,.45,.15),0,C,2.331,.003)}S(Mt,"upperIntake",1.26,.063,.035,n,0,.825,2.276),R(Mt,"chromeWing",[[-.71,.87,2.273],[-.36,.847,2.308],[0,.848,2.319],[.36,.847,2.308],[.71,.87,2.273]],e,.01),b(Mt,0,.862,2.343,.041);const Yt=y("cabin"),Qt=y("roofPanel");S(Qt,"roof",1.39,.075,1.14,t,0,1.435,-.23,.024),S(Qt,"headliner",1.32,.021,1.11,h,0,1.388,-.23,.006);for(const[d,C,L]of[["aPillarL",-1,!1],["aPillarR",1,!1],["cPillarL",-1,!0],["cPillarR",1,!0]]){const B=y(d);R(B,"paintedPillar",[[C*.81,.97,L?-1.57:1],[C*.735,1.2,L?-1.19:.65],[C*.66,1.435,L?-.8:.31]],t,L?.065:.031),R(B,"pillarLining",[[C*.779,.978,L?-1.54:.99],[C*.705,1.2,L?-1.18:.64],[C*.637,1.418,L?-.79:.3]],h,L?.033:.019)}const Zt=y("windshield");P(Zt,"glass",[[-.78,.99,1],[.78,.99,1],[.65,1.413,.32],[-.65,1.413,.32]],v);const tt=y("rearWindow");P(tt,"glass",[[.76,1.005,-1.53],[-.76,1.005,-1.53],[-.64,1.415,-.79],[.64,1.415,-.79]],v);for(const[d,C]of[["sideWindowL",-1],["sideWindowR",1]]){const L=y(d);P(L,"glass",[[C*.816,.986,.97],[C*.816,.986,-1.5],[C*.665,1.412,-.78],[C*.665,1.412,.3]],v),R(Yt,"bPillar",[[C*.814,.97,-.37],[C*.667,1.413,-.37]],n,.033),R(Yt,"windowSurround",[[C*.816,.975,.98],[C*.664,1.422,.3],[C*.666,1.426,-.77],[C*.816,.981,-1.5]],n,.009)}for(const[d,C]of[["roofRailL",-1],["roofRailR",1]]){const L=y(d);R(L,"roofSeam",[[C*.65,1.465,.25],[C*.66,1.475,-.24],[C*.65,1.465,-.74]],n,.003)}const lt=x(Qt,"sharkFin",new ts(.042,.09,4),t,0,1.508,-.66);lt.scale.z=1.7;for(const[d,C]of[["headlightL",-1],["headlightR",1]]){const L=y(d);L.position.set(C*.653,.848,2.197),L.rotation.y=C*.16,S(L,"smokedHousing",.43,.108,.13,p,0,0,0,.028);for(const B of[-.1,.025])x(L,"projector",new ue(.027,.027,.012,20),g,B,.01,.072).rotation.x=Math.PI/2;R(L,"ledSignature",[[-.192,.027,.073],[-.13,-.03,.073],[.14,-.03,.073],[.193,.021,.073]],g,.008)}for(const[d,C]of[["taillightL",-1],["taillightR",1]]){const L=y(d);L.position.set(C*.622,.835,-2.278),S(L,"redHousing",.43,.104,.061,_,0,0,0,.02),R(L,"lightSignature",[[-.19,.03,-.04],[.19,.03,-.04],[.13,-.032,-.04],[-.17,-.032,-.04]],_,.012)}for(const[d,C]of[["sideMirrorL",-1],["sideMirrorR",1]]){const L=y(d);S(L,"mirrorStalk",.17,.032,.054,n,C*.866,1.027,.72);const B=U(L,"sideMirrorFace",.15,.061,[C*.97,1.064,.582],[C*.15,-.05,-1]);S(B,"mirrorCap",.19,.1,.19,t,0,0,-.12,.027)}const mt=y("dashboard");S(mt,"cabinFloor",1.58,.08,2.58,l,0,.335,-.28),S(mt,"firewall",1.55,.56,.09,l,0,.615,.9);for(const d of[-1,1])S(mt,"lowerDoorLining",.075,.23,2.15,l,d*.766,.46,-.13),S(mt,"carpetMat",.53,.018,.8,n,d*.39,.383,.1,.004);S(mt,"mirrorStem",.025,.09,.035,n,.03,1.354,.405,.007),U(mt,"centerMirror",.245,.083,[.03,1.287,.39],[0,-.02,-1]),S(mt,"softDashTop",1.56,.13,.56,l,0,.915,.69,.035),S(mt,"lowerDash",1.51,.17,.26,h,0,.797,.6,.034),R(mt,"satinDashAccent",[[-.74,.86,.408],[-.43,.863,.399],[0,.862,.397],[.46,.864,.398],[.74,.885,.414]],u,.007);for(const d of[-.665,-.11,.115,.665]){S(mt,"ventFrame",.16,.062,.021,u,d,.875,.386,.005),S(mt,"ventRecess",.143,.047,.013,n,d,.875,.372,.004);for(let C=-1;C<=1;C++)S(mt,"ventSlat",.13,.003,.009,h,d,.875+C*.013,.362,8e-4)}S(mt,"climatePanel",.38,.073,.038,n,.015,.761,.432,.01);for(const d of[-.135,.16]){const C=x(mt,"climateKnob",new ue(.026,.026,.018,24),u,d,.761,.407);C.rotation.x=Math.PI/2}S(mt,"centerTunnel",.25,.17,.95,l,.015,.5,-.04),S(mt,"shiftSurround",.19,.017,.28,u,.015,.596,.18,.005),S(mt,"shiftBoot",.11,.07,.14,n,.015,.634,.18),S(mt,"gearSelector",.065,.1,.07,l,.015,.704,.18);for(const d of[-.1,-.28])x(mt,"cupWell",new ue(.057,.047,.012,24),n,.015,.59,d),x(mt,"cupRim",new vn(.057,.004,6,24),u,.015,.597,d).rotation.x=Math.PI/2;S(mt,"armrest",.25,.085,.28,l,.015,.64,-.51);for(const d of[-1,1])S(mt,"doorCard",.047,.42,1.3,l,d*.79,.74,-.03),S(mt,"doorArmrest",.1,.048,.57,h,d*.738,.72,.07),R(mt,"doorTrim",[[d*.757,.875,.5],[d*.757,.857,.1],[d*.757,.8,-.5]],u,.006),S(mt,"doorPull",.014,.029,.12,e,d*.755,.84,.28,.004);const At=y("steeringWheel");At.position.set(-.36,.971,.16),At.rotation.x=-.22,x(At,"leatherRim",new vn(.174,.019,12,64),l),S(At,"airbag",.137,.105,.055,l,0,-.005,0,.016);for(const d of[-1,1]){S(At,"horizontalSpoke",.11,.046,.028,l,d*.112,-.008,0),S(At,"spokeTrim",.081,.009,.014,u,d*.113,-.031,-.018,.002);for(let C=0;C<3;C++)S(At,"controlButton",.014,.011,.006,u,d*(.084+C*.025),.002,-.019,.001)}S(At,"lowerSpoke",.05,.098,.025,u,0,-.116,0),b(At,0,.009,-.035,.021);for(const d of[-1,1])S(mt,"columnStalk",.15,.019,.025,n,-.36+d*.14,.971,.24,.006);function Pt(d,C,L,B,F,at=[768,320]){const Q=document.createElement("canvas");Q.width=at[0],Q.height=at[1];const vt=Q.getContext("2d");F(vt,Q.width,Q.height);const ut=new Jn(Q);ut.colorSpace=Se;const $=x(d,C,new Ge(L,B),new cn({map:ut,toneMapped:!1}));return $.rotation.y=Math.PI,$.castShadow=!1,{ctx:vt,texture:ut,screen:$}}const Wt=y("instrumentCluster");Wt.position.set(-.36,.973,.399),Wt.rotation.x=-.15,S(Wt,"clusterHousing",.47,.17,.066,n,0,0,.027,.02),S(Wt,"clusterHood",.49,.023,.13,l,0,.083,.014,.007);let ee=0,D=.18,rt="N",it="off";function st(d,C,L){d.fillStyle="#071017",d.fillRect(0,0,C,L);const B=(F,at,Q,vt)=>{d.strokeStyle="#304652",d.lineWidth=8,d.beginPath(),d.arc(F,163,116,.75*Math.PI,2.25*Math.PI),d.stroke();for(let $=0;$<=12;$++){const ft=Math.PI*(.75+1.5*$/12);d.strokeStyle=$>10?"#ff655b":"#d0dee7",d.lineWidth=$%2?2:4,d.beginPath(),d.moveTo(F+Math.cos(ft)*96,163+Math.sin(ft)*96),d.lineTo(F+Math.cos(ft)*110,163+Math.sin(ft)*110),d.stroke(),$%2||(d.fillStyle="#c6d5df",d.font="16px sans-serif",d.textAlign="center",d.fillText(String(Math.round($/12*Q)),F+Math.cos(ft)*79,169+Math.sin(ft)*79))}const ut=Math.PI*(.75+1.5*Math.min(at/Q,1));d.strokeStyle="#f65b4f",d.lineWidth=4,d.beginPath(),d.moveTo(F,163),d.lineTo(F+Math.cos(ut)*89,163+Math.sin(ut)*89),d.stroke(),d.fillStyle="#c3d4df",d.font="18px sans-serif",d.textAlign="center",d.fillText(vt,F,240)};B(151,D*8,8,"×1000"),B(617,ee,240,"km/h"),d.textAlign="center",d.fillStyle="#f2f7fa",d.font="64px sans-serif",d.fillText(String(ee),384,150),d.font="20px sans-serif",d.fillStyle="#9dafbd",d.fillText("km/h",384,182),d.fillStyle="#f2f7fa",d.font="32px sans-serif",d.fillText(rt,384,246),d.fillStyle="#56da9c",d.font="26px sans-serif",(it==="left"||it==="hazard")&&d.fillText("◀",304,48),(it==="right"||it==="hazard")&&d.fillText("▶",464,48)}const N=Pt(Wt,"liveGauges",.43,.139,st);N.screen.position.z=-.009;let X="";o.updateCockpit=(d,C,L,B)=>{ee=Math.round(Math.abs(d)*3.6),D=Math.round(C*40)/40,rt=L,it=B;const F=`${ee}/${D}/${rt}/${it}`;F!==X&&(X=F,st(N.ctx,768,320),N.texture.needsUpdate=!0)};const G=y("centerScreen");G.position.set(.055,1.04,.438),G.rotation.x=-.1,S(G,"tabletBezel",.33,.206,.028,n,0,0,.015,.009);const K=Pt(G,"mapDisplay",.305,.177,(d,C,L)=>{d.fillStyle="#172632",d.fillRect(0,0,C,L),d.strokeStyle="#344b58",d.lineWidth=10;for(let B=0;B<7;B++)d.beginPath(),d.moveTo(B*140-90,0),d.lineTo(B*140+20,L),d.stroke();for(let B=0;B<4;B++)d.beginPath(),d.moveTo(0,B*90+15),d.lineTo(C,B*90-50),d.stroke();d.strokeStyle="#52b9ee",d.lineWidth=12,d.beginPath(),d.moveTo(380,310),d.lineTo(360,180),d.lineTo(570,155),d.lineTo(550,40),d.stroke(),d.fillStyle="#e6f5ff",d.beginPath(),d.moveTo(358,181),d.lineTo(339,215),d.lineTo(378,207),d.closePath(),d.fill(),d.fillStyle="#0c151e",d.fillRect(0,0,95,L),d.font="32px sans-serif",d.fillStyle="#a8c9dd",d.fillText("⌂",28,65),d.fillText("♪",29,156),d.fillText("⚙",26,255)});K.screen.position.z=-.001;for(const[d,C]of[["driverSeat",-.37],["passengerSeat",.37]]){const L=y(d);L.position.set(C,.55,-.4),S(L,"cushion",.47,.13,.5,l),S(L,"fabricInsert",.29,.025,.4,h,0,.076,.02,.007),S(L,"seatBack",.46,.5,.13,l,0,.27,-.24).rotation.x=-.14,S(L,"backInsert",.3,.37,.034,h,0,.28,-.158).rotation.x=-.14;for(const B of[-.08,.08])S(L,"headrestPost",.011,.1,.012,e,B,.565,-.27,.002);S(L,"headrest",.25,.15,.1,l,0,.65,-.27)}S(Yt,"rearBench",1.36,.15,.45,l,0,.56,-1.09),S(Yt,"rearSeatBack",1.35,.42,.12,l,0,.8,-1.34),o.wheelAssemblies=[];const nt=c(1448219,.93),ct=c(3225664,.32,.65);for(const[d,C,L,B]of[["wheelFL",-.79,1.35,!0],["wheelFR",.79,1.35,!0],["wheelRL",-.79,-1.35,!1],["wheelRR",.79,-1.35,!1]]){const F=f(d);F.position.set(C,.315,L);const at=f("rollingAssembly",F);x(at,"tire",new ue(.315,.315,.205,48),nt).rotation.z=Math.PI/2;for(const Q of[-1,1]){const vt=f(`rimFace${Q}`,at);vt.position.x=Q*.108,vt.rotation.y=Q*Math.PI/2,x(vt,"rimBarrel",new ue(.224,.224,.013,48),ct).rotation.x=Math.PI/2,x(vt,"machinedLip",new vn(.224,.01,8,48),u,0,0,.01),x(vt,"brakeDisc",new Si(.171,32),u,0,0,.009);for(let ut=0;ut<5;ut++)for(const $ of[-.11,.11]){const ft=ut*Math.PI*2/5+$,Ft=S(vt,"splitSpoke",.024,.18,.017,e,Math.sin(ft)*.127,Math.cos(ft)*.127,.025,.004);Ft.rotation.z=-ft}x(vt,"hub",new ue(.052,.052,.03,20),u,0,0,.026).rotation.x=Math.PI/2;for(let ut=0;ut<5;ut++){const $=ut*Math.PI*2/5;x(vt,"lug",new Zs(.007,6,4),n,Math.cos($)*.038,Math.sin($)*.038,.045)}}o.wheelAssemblies.push({pivot:F,wheel:at,steerable:B,radius:.315})}function A(d,C,L,B,F,at,Q){const vt=new Ht({color:F,emissive:F,emissiveIntensity:.02,roughness:.25});return{mesh:S(r,d,at,Q,.018,vt,C,L,B,.005),material:vt}}return o.sedanSignalLamps={left:[A("frontSignalL",.795,.862,2.247,16755249,.073,.024),A("rearSignalL",.754,.813,-2.319,16755249,.13,.022)],right:[A("frontSignalR",-.795,.862,2.247,16755249,.073,.024),A("rearSignalR",-.754,.813,-2.319,16755249,.13,.022)]},o.sedanBrakeLamps=[-1,1].map(d=>A(`brake${d}`,d*.59,.86,-2.32,16721461,.28,.025)),o.reverseLamps=[-1,1].map(d=>A(`reverse${d}`,d*.43,.807,-2.32,15660543,.08,.022)),o}function eu(i){const t=new fe,e=new fe,n=new fe;n.rotation.y=Math.PI,e.add(n),t.add(e);const s=new Ua({color:366185,metalness:.12,roughness:.24,clearcoat:1,clearcoatRoughness:.17}),r=new Ht({color:14212835,metalness:.92,roughness:.16}),o=new Ht({color:1316893,metalness:.38,roughness:.58});if(i==="motorcycle"){const c=hx(n,r,!0);return c.bikeCockpitRoot.visible=!1,{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:null,cb400Parts:c}}const a=ux(n,s,r,o,!0);return{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:a,cb400Parts:null}}function Wc(i,t){if(i.kind==="motorcycle"&&i.cb400Parts){const e=i.cb400Parts;e.motorcycleRoot.visible=!t,e.bikeCockpitRoot.visible=t;return}if(i.corollaParts){const e=i.corollaParts,n=!t;e.driverSeat&&(e.driverSeat.visible=n),e.frontBumper&&(e.frontBumper.visible=n),e.rearBumper&&(e.rearBumper.visible=n),e.grille&&(e.grille.visible=n),e.headlightL&&(e.headlightL.visible=n),e.headlightR&&(e.headlightR.visible=n),e.taillightL&&(e.taillightL.visible=n),e.taillightR&&(e.taillightR.visible=n),e.roofRailL&&(e.roofRailL.visible=n),e.roofRailR&&(e.roofRailR.visible=n)}}function dx(i,t,e){var a,c;i.root.position.set(t.x,t.y,t.z),i.root.rotation.y=t.heading,i.leanGroup.rotation.x=t.pitch,i.leanGroup.rotation.z=t.roll;const n=t.blinkerOn&&(t.blinker==="left"||t.blinker==="hazard"),s=t.blinkerOn&&(t.blinker==="right"||t.blinker==="hazard"),r=t.braking||t.handbrake,o=Math.max(.18,Math.min(1,(t.rpm-700)/4200));if(i.corollaParts){const l=i.corollaParts;for(const u of l.wheelAssemblies)u.steerable&&(u.pivot.rotation.y=t.steerAngleRad),u.wheel.rotation.x=t.wheelRotationRad;l.steeringWheel&&(l.steeringWheel.rotation.z=-t.steeringWheelRad);for(const u of l.sedanSignalLamps.left)u.material.emissiveIntensity=n?2.4:.02;for(const u of l.sedanSignalLamps.right)u.material.emissiveIntensity=s?2.4:.02;for(const u of l.sedanBrakeLamps)u.material.emissiveIntensity=r?2.5:.12;for(const u of l.reverseLamps)u.material.emissiveIntensity=t.reversing?2:.02;const h=n&&s?"hazard":n?"left":s?"right":"off";(a=l.updateCockpit)==null||a.call(l,t.speedMs,o,t.gear,h)}if(i.cb400Parts){const l=i.cb400Parts;l.bikeFrontWheelPivot.rotation.y=t.steerAngleRad,l.bikeFrontWheelAssembly.group.rotation.x=t.wheelRotationRad,l.bikeRearWheelAssembly.group.rotation.x=t.wheelRotationRad,l.bikeHandlebar.rotation.y=t.steerAngleRad,l.bikeCockpitBar.rotation.y=t.steerAngleRad;for(const h of l.bikeSignalLamps.left)h.material.emissiveIntensity=n?2.4:.02;for(const h of l.bikeSignalLamps.right)h.material.emissiveIntensity=s?2.4:.02;l.bikeBrakeLamp.material.emissiveIntensity=r?2.5:.12,(c=l.updateBikeCockpit)==null||c.call(l,t.speedMs,o)}}class fx{constructor(t,e){wt(this,"camera");wt(this,"orbit");wt(this,"mode","chase");wt(this,"mirrorQuality","high");wt(this,"mirrorCameras",{left:new Oe(56,1.65,.1,450),center:new Oe(44,2.5,.1,450),right:new Oe(56,1.65,.1,450)});wt(this,"miniMapCamera",new pl(-45,45,45,-45,1,240));wt(this,"miniMapViewport",{centerX:0,centerZ:0,halfWidth:45,halfHeight:45,halfSize:45});wt(this,"insetSurfaces",new WeakMap);wt(this,"smoothPos",new I(12,5.5,56));wt(this,"smoothLook",new I(12,1.6,48));wt(this,"frameCounter",0);this.camera=new Oe(60,e,.05,650),this.camera.layers.enable(1),[this.miniMapCamera,...Object.values(this.mirrorCameras)].forEach(n=>{n.userData.skipCarMirrors=!0,n.layers.set(0)}),this.orbit=new $_(this.camera,t),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.08,this.orbit.maxPolarAngle=Math.PI*.48,this.orbit.minDistance=2.8,this.orbit.maxDistance=65,this.orbit.enabled=!1}setMode(t,e,n){this.mode=t,this.orbit.enabled=t==="orbit",this.camera.userData.carMirrorInterval=t==="cockpit"?0:250,n&&Wc(n,t==="cockpit"),document.body.dataset.view=t==="chase"?"follow":t,document.body.classList.toggle("sedan-cockpit",t==="cockpit"&&(n==null?void 0:n.kind)!=="motorcycle"),document.body.classList.toggle("bike-cockpit",t==="cockpit"&&(n==null?void 0:n.kind)==="motorcycle"),t==="orbit"?(this.camera.fov=60,this.camera.updateProjectionMatrix(),this.camera.position.set(e.x+16,e.y+18,e.z+16),this.orbit.target.set(e.x,e.y+1.2,e.z),this.orbit.update()):this.snapToState(e,(n==null?void 0:n.kind)??"sedan")}getMode(){return this.mode}setMirrorQuality(t,e){this.mirrorQuality=t}bindMirrorsToVehicle(t){Wc(t,this.mode==="cockpit")}snapToState(t,e="sedan"){const n=this.getViewPose(this.mode,t,e);this.smoothPos.copy(n.position),this.smoothLook.copy(n.lookTarget),this.camera.position.copy(n.position),this.camera.lookAt(n.lookTarget)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}getViewPose(t,e,n){const s=new I(-Math.sin(e.heading),0,-Math.cos(e.heading)),r=new I(Math.cos(e.heading),0,-Math.sin(e.heading)),o=e.heading+e.lookAngleRad,a=new I(-Math.sin(o),0,-Math.cos(o)),c=new I(Math.cos(o),0,-Math.sin(o)),l=new I(e.x,e.y,e.z);if(t==="cockpit"){if(n==="motorcycle"){const m=l.clone().add(new I(0,1.42,0)).add(s.clone().multiplyScalar(-.08)),f=m.clone().add(a.clone().multiplyScalar(30)).add(c.clone().multiplyScalar(.04)).add(new I(0,Math.sin(e.pitch)*28-1.3,0));return{position:m,lookTarget:f}}const _=l.clone().add(new I(0,1.245,0)).add(s.clone().multiplyScalar(-.38)).add(r.clone().multiplyScalar(.36)),v=_.clone().add(a.clone().multiplyScalar(28)).add(c.clone().multiplyScalar(.04)).add(new I(0,Math.sin(e.pitch)*26-1.1,0));return{position:_,lookTarget:v}}if(t==="hood"){const _=l.clone().add(new I(0,1.12,0)).add(s.clone().multiplyScalar(.55)),v=_.clone().add(a.clone().multiplyScalar(22)).add(new I(0,Math.sin(e.pitch)*22-.8,0));return{position:_,lookTarget:v}}const h=n==="motorcycle"?7.2:9,u=n==="motorcycle"?4.6:5.5,p=l.clone().add(new I(0,u,0)).add(a.clone().multiplyScalar(-h)),g=l.clone().add(new I(0,n==="motorcycle"?1.28:1.6,0));return{position:p,lookTarget:g}}update(t,e,n,s,r,o){if(this.mode==="orbit"){const u=e.y+(n==="motorcycle"?1:1.2);this.orbit.target.lerp(new I(e.x,u,e.z),1-Math.pow(.01,t)),this.orbit.update();return}const a=this.mode==="cockpit"?n==="motorcycle"?78:70:60,c=Ae.clamp(Math.abs(e.speedMs)/22,0,1);this.camera.fov=Ae.damp(this.camera.fov,a+c*14,5,t),this.camera.updateProjectionMatrix();const l=this.getViewPose(this.mode,e,n);if(this.mode==="cockpit"||this.mode==="hood"){this.camera.position.copy(l.position),this.camera.lookAt(l.lookTarget);return}const h=1-Math.pow(.002,t);this.smoothPos.lerp(l.position,h),this.camera.position.copy(this.smoothPos),this.camera.lookAt(l.lookTarget)}renderInset(t,e,n,s){const r=e.clientWidth,o=e.clientHeight;if(r<2||o<2)return;let a=this.insetSurfaces.get(e);if(!a){const u=document.createElement("canvas");u.className="insetCanvas",u.setAttribute("aria-hidden","true"),e.prepend(u);const p=u.getContext("2d",{alpha:!1});a={canvas:u,ctx:p},this.insetSurfaces.set(e,a)}const c=t.getPixelRatio(),l=Math.min(Math.floor(r*c),t.domElement.width),h=Math.min(Math.floor(o*c),t.domElement.height);(a.canvas.width!==l||a.canvas.height!==h)&&(a.canvas.width=l,a.canvas.height=h),t.setScissorTest(!0),t.setViewport(0,0,l/c,h/c),t.setScissor(0,0,l/c,h/c),t.render(n,s),a.ctx.drawImage(t.domElement,0,t.domElement.height-h,l,h,0,0,l,h),t.setScissorTest(!1)}renderPiPMirrors(t,e,n,s,r,o,a){if(a||this.mirrorQuality==="off"||this.mode==="orbit"||(this.frameCounter++,this.mirrorQuality==="low"&&this.frameCounter%2!==0))return;const c=new I(-Math.sin(n.heading),0,-Math.cos(n.heading)),l=new I(Math.cos(n.heading),0,-Math.sin(n.heading)),h=new I(n.x,n.y,n.z),u=(p,g,_)=>{if(!p)return;const v=p.getBoundingClientRect();if(v.width<2||v.height<2)return;g.aspect=v.width/v.height,g.updateProjectionMatrix(),_==="center"&&(g.projectionMatrix.elements[0]*=-1,g.projectionMatrixInverse.copy(g.projectionMatrix).invert());const m=_==="left"?-1:_==="right"?1:0,f=_==="center"?0:.88*m,y=_==="center"?0:8.5*m,M=h.clone().add(new I(0,_==="center"?1.93:1.78,0)).add(c.clone().multiplyScalar(_==="center"?.24:.06)).add(l.clone().multiplyScalar(f)),x=M.clone().add(c.clone().multiplyScalar(-16)).add(l.clone().multiplyScalar(y)).add(new I(0,.12,0));g.position.copy(M),g.lookAt(x),this.renderInset(t,p,e,g)};u(s,this.mirrorCameras.left,"left"),u(r,this.mirrorCameras.center,"center"),u(o,this.mirrorCameras.right,"right")}renderPiPMiniMap(t,e,n,s,r,o,a,c,l){if(!n)return;const h=n.getBoundingClientRect();if(h.width<2||h.height<2)return;const u=h.width/h.height,p=r.width*.5,g=r.height*.5,_=o?Math.max(r.width,r.height)*.56:Math.max(24,Math.max(r.width,r.height)*.28),v=o?_/Math.max(1,a):_,m=u>=1?v*u:v,f=u>=1?v:v/u,y=o?c:Ae.clamp(s.x,-p,p),M=o?l:Ae.clamp(s.z,-g,g);this.miniMapViewport={centerX:y,centerZ:M,halfWidth:m,halfHeight:f,halfSize:v},this.miniMapCamera.left=-m,this.miniMapCamera.right=m,this.miniMapCamera.top=f,this.miniMapCamera.bottom=-f,this.miniMapCamera.position.set(y,110,M),this.miniMapCamera.up.set(0,0,-1),this.miniMapCamera.lookAt(y,0,M),this.miniMapCamera.updateProjectionMatrix(),this.renderInset(t,n,e,this.miniMapCamera)}}const Vr=[{id:"kyoshujo-3d",nameEn:"Sakuragaoka 3D Driving School (Full 3D Kyōshūjo)",nameJa:"桜ヶ丘自動車教習所 (3D立体コース)",mapWidth:180,startX:12,startZ:48.1,startHeading:Math.PI/2,accentColor:"#059669"},{id:"tokyo-fuchu",nameEn:"Fuchu Driver's License Test Center, Tokyo",nameJa:"東京府中運転免許試験場",mapWidth:420,startX:-54,startZ:88,startHeading:0,accentColor:"#2563eb"},{id:"tokyo-samezu",nameEn:"Samezu Driver's License Test Center, Tokyo",nameJa:"東京都鮫洲運転免許試験場",mapWidth:340,startX:-42,startZ:74,startHeading:Math.PI/2,accentColor:"#0891b2"},{id:"kanagawa-futamatagawa-car",nameEn:"Kanagawa License Center (Futamatagawa · Car)",nameJa:"神奈川県運転免許センター（二俣川・四輪）",mapWidth:460,startX:-67.9,startZ:112,startHeading:Math.PI/2,accentColor:"#059669"},{id:"osaka-kadoma",nameEn:"Kadoma Driver's License Test Center, Osaka",nameJa:"大阪門真運転免許試験場",mapWidth:400,startX:-50,startZ:82,startHeading:0,accentColor:"#7c3aed"},{id:"aichi-hirabari",nameEn:"Hirabari Driver's License Test Center, Nagoya",nameJa:"愛知県平針運転免許試験場",mapWidth:380,startX:-48,startZ:76,startHeading:Math.PI/2,accentColor:"#d97706"},{id:"saitama-konosu",nameEn:"Saitama Prefectural Driver's License Center (Konosu)",nameJa:"埼玉県警察運転免許センター（鴻巣）",mapWidth:410,startX:-55,startZ:84,startHeading:0,accentColor:"#0d9488"},{id:"chiba-makuhari-car",nameEn:"Chiba Makuhari License Center (Car)",nameJa:"千葉幕張免許センター（四輪）",mapWidth:390,startX:-46,startZ:80,startHeading:Math.PI/2,accentColor:"#db2777"}];class px{constructor(t){wt(this,"group",new fe);wt(this,"mesh",null);wt(this,"texture",null);wt(this,"currentSize",{width:180,height:120});this.group.visible=!1,t.add(this.group)}async loadFromDataUrl(t,e){const n=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=()=>r(new Error("Failed to decode map image")),o.src=t});this.applyCanvasOrImage(n,n.width,n.height,e)}loadProceduralTestCenter(t){const s=document.createElement("canvas");s.width=2048,s.height=1360;const r=s.getContext("2d");r.fillStyle="#4e753e",r.fillRect(0,0,2048,1360);for(let a=0;a<6e3;a++)r.fillStyle=a%2===0?"rgba(65,98,48,0.28)":"rgba(110,148,80,0.22)",r.fillRect(Math.random()*2048,Math.random()*1360,4,4);const o=(a,c=92)=>{r.save(),r.lineCap="round",r.lineJoin="round",r.strokeStyle="#d1d5db",r.lineWidth=c+10,a(),r.stroke(),r.strokeStyle="#363c44",r.lineWidth=c,a(),r.stroke(),r.strokeStyle="#f8fafc",r.lineWidth=3,r.setLineDash([24,24]),a(),r.stroke(),r.restore()};o(()=>{r.beginPath(),r.roundRect(140,120,1768,1120,160)},106),o(()=>{r.beginPath(),r.moveTo(2048*.35,120),r.lineTo(2048*.35,1240),r.moveTo(2048*.65,120),r.lineTo(2048*.65,1240),r.moveTo(140,1360*.45),r.lineTo(1908,1360*.45),r.moveTo(140,1360*.72),r.lineTo(2048*.65,1360*.72)},88),o(()=>{r.beginPath(),r.moveTo(2048*.35,1360*.25),r.bezierCurveTo(2048*.5,1360*.16,2048*.5,1360*.38,2048*.65,1360*.28)},52),o(()=>{r.beginPath(),r.moveTo(2048*.65,1360*.58),r.lineTo(2048*.78,1360*.58),r.lineTo(2048*.78,1360*.76),r.lineTo(1908,1360*.76)},54),r.fillStyle="rgba(255,255,255,0.85)",r.font='bold 44px "Noto Sans JP", sans-serif',r.fillText(t.nameJa,220,210),r.fillStyle=t.accentColor,r.font="bold 30px sans-serif",r.fillText(t.nameEn,220,255),this.applyCanvasOrImage(s,2048,1360,t.mapWidth)}applyCanvasOrImage(t,e,n,s){this.disposeCurrent();const r=new Fe(t);r.colorSpace=Se,r.anisotropy=8,r.needsUpdate=!0,this.texture=r;const o=n/Math.max(1,e),a=Math.max(10,s),c=a*o;this.currentSize={width:a,height:c};const l=new Ge(a,c),h=new Ht({map:r,roughness:.92,metalness:0}),u=new Dt(l,h);u.rotation.x=-Math.PI/2,u.position.y=.005,u.receiveShadow=!0,this.mesh=u,this.group.add(u)}setWidth(t){var o;if(!this.mesh||!((o=this.texture)!=null&&o.image))return;const e=this.texture.image,n=e.height/Math.max(1,e.width),s=Math.max(10,t),r=s*n;this.currentSize={width:s,height:r},this.mesh.geometry.dispose(),this.mesh.geometry=new Ge(s,r)}setVisible(t){this.group.visible=t}disposeCurrent(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.texture&&(this.texture.dispose(),this.texture=null)}}class mx{constructor(t){wt(this,"root",new fe);wt(this,"kyoshujoGroup",new fe);wt(this,"sunLight");wt(this,"sunOffset",new I(45,68,35));wt(this,"railGatePivots",[]);wt(this,"railLeftLampMats",[]);wt(this,"railRightLampMats",[]);wt(this,"trafficLamps",[]);wt(this,"waypointBeacon");wt(this,"skyBrandSprites",[]);t.background=new Kt(10473727),t.fog=new ol(10473727,95,240),this.buildCloudsAndSkyBrand(t);const e=new kf(15660799,6057548,.85);t.add(e),this.sunLight=new Vf(16775920,1.85),this.sunLight.position.copy(this.sunOffset),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048);const n=38;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=170,this.sunLight.shadow.bias=-5e-4,t.add(this.sunLight),t.add(this.sunLight.target),this.root.add(this.kyoshujoGroup),t.add(this.root),this.buildGroundAndRoads(),this.buildSCurveMesh(),this.buildHillRampMesh(),this.buildRoadMarkings(),this.buildCurbsAndPoles(),this.buildRailroadCrossing(),this.buildTrafficLights(),this.buildRoadSigns(),this.buildObstaclesAndBuildings(),this.buildTreesAndFence(),this.waypointBeacon=this.createWaypointBeacon(),this.waypointBeacon.visible=!1,this.kyoshujoGroup.add(this.waypointBeacon)}setKyoshujoVisible(t){this.kyoshujoGroup.visible=t}updateShadowFocus(t,e){const n=.037109375,s=Math.round(t/n)*n,r=Math.round(e/n)*n;this.sunLight.target.position.set(s,0,r),this.sunLight.position.set(s+this.sunOffset.x,this.sunOffset.y,r+this.sunOffset.z),this.sunLight.target.updateMatrixWorld()}updateDynamic(t,e,n){const s=t.getLightForAxis("NS"),r=t.getLightForAxis("EW");for(const a of this.trafficLamps){const c=a.axis==="NS"?s:r;a.greenMat.emissive.setHex(c==="green"?1108120:202768),a.greenMat.emissiveIntensity=c==="green"?2.2:.2,a.yellowMat.emissive.setHex(c==="yellow"?16758531:1708544),a.yellowMat.emissiveIntensity=c==="yellow"?2.2:.2,a.redMat.emissive.setHex(c==="red"?16722474:1836036),a.redMat.emissiveIntensity=c==="red"?2.2:.2}const o=t.getRailroadState();for(let a=0;a<this.railGatePivots.length;a++)this.railGatePivots[a].rotation.z=a===0?-o.barrierAngle:o.barrierAngle;for(const a of this.railLeftLampMats)a.emissive.setHex(o.flashLeftOn?16718362:2229252),a.emissiveIntensity=o.flashLeftOn?2.8:.2;for(const a of this.railRightLampMats)a.emissive.setHex(o.flashRightOn?16718362:2229252),a.emissiveIntensity=o.flashRightOn?2.8:.2;if(e&&this.kyoshujoGroup.visible){this.waypointBeacon.visible=!0;const a=Dn(e.x,e.z).y;this.waypointBeacon.position.set(e.x,a+.05,e.z),this.waypointBeacon.rotation.y=n*1.4;const c=1+Math.sin(n*4)*.08;this.waypointBeacon.scale.set(c,1,c)}else this.waypointBeacon.visible=!1;for(const a of this.skyBrandSprites){const c=a.userData.angle+n*.004,l=a.userData.height+Math.sin(n*.15+c*3)*.8;a.position.set(Math.cos(c)*160,l,Math.sin(c)*160)}}buildCloudsAndSkyBrand(t){const e=new Ht({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.9}),n=(y,M,x,S)=>{const E=new fe,R=[[0,0,0,5],[-4,-1,0,3.5],[4,-1,0,3.5],[-2,1.5,0,2.8],[2.5,1.5,0,2.8],[-6,-2,0,2],[6,-2,0,2]];for(const[P,T,b,U]of R){const k=new Dt(new Zs(U,7,5),e);k.position.set(P,T,b),E.add(k)}E.position.set(y,M,x),E.scale.setScalar(S),t.add(E)};n(-80,48,-60,1.2),n(60,42,-90,1),n(-30,52,-110,.85),n(110,46,-70,1.15),n(10,55,-130,.95),n(-120,44,-80,1.3),n(70,50,-150,1.1);const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.font='900 150px "Arial Rounded MT Bold", "Nunito", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText("GaimenGo",s/2,r/2);const c=s/2-a.measureText("GaimenGo").width/2+a.measureText("Gaimen").width,l=a.getImageData(0,0,s,r).data,h=document.createElement("canvas");h.width=s,h.height=r;const u=h.getContext("2d");let p=27166;const g=()=>(p=p*1664525+1013904223>>>0)/4294967296,_=9;for(let y=0;y<r;y+=_)for(let M=0;M<s;M+=_){const x=Math.min(s-1,M+Math.floor(g()*_)),S=Math.min(r-1,y+Math.floor(g()*_));if(l[(S*s+x)*4+3]<128)continue;const E=11+g()*12,R=u.createRadialGradient(x,S,0,x,S,E);R.addColorStop(0,"rgba(255,255,255,0.95)"),R.addColorStop(.6,"rgba(255,255,255,0.55)"),R.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=R,u.fillRect(x-E,S-E,E*2,E*2)}u.globalCompositeOperation="source-atop";const v=u.createLinearGradient(0,r*.3,0,r*.8);v.addColorStop(0,"rgba(190,210,230,0)"),v.addColorStop(1,"rgba(170,195,220,0.45)"),u.fillStyle=v,u.fillRect(0,0,s,r),u.fillStyle="rgba(52,211,153,0.22)",u.fillRect(c,0,s-c,r),u.globalCompositeOperation="source-over";const m=new Jn(h);m.colorSpace=Se;const f=new Th({map:m,transparent:!0,opacity:.82,depthWrite:!1,fog:!1});this.skyBrandSprites=[0,1,2].map(y=>{const M=new tf(f);return M.scale.set(64,16,1),M.layers.set(1),M.userData.angle=-Math.PI/2+y*(Math.PI*2/3),M.userData.height=40+y*4,M.renderOrder=-1,t.add(M),M})}createGrassTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#5f8449",e.fillRect(0,0,256,256);for(let s=0;s<4e3;s++)e.fillStyle=s%2===0?"rgba(72,108,52,0.35)":"rgba(122,162,88,0.28)",e.fillRect(Math.random()*256,Math.random()*256,2,2);const n=new Jn(t);return n.wrapS=n.wrapT=Us,n.repeat.set(36,24),n.colorSpace=Se,n}createAsphaltTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#383e45",e.fillRect(0,0,256,256);for(let s=0;s<5500;s++){const r=45+Math.floor(Math.random()*30);e.fillStyle=`rgb(${r},${r+2},${r+6})`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}const n=new Jn(t);return n.wrapS=n.wrapT=Us,n.repeat.set(22,22),n.colorSpace=Se,n}buildGroundAndRoads(){const t=new Ht({map:this.createGrassTexture(),roughness:.95,metalness:0}),e=new Dt(new Ge(Mi*2+40,Ji*2+40),t);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.kyoshujoGroup.add(e);const n=new Ht({map:this.createAsphaltTexture(),roughness:.86,metalness:.05}),s=(a,c,l,h,u=.01)=>{const p=new Dt(new Ge(l,h),n);p.rotation.x=-Math.PI/2,p.position.set(a,u,c),p.receiveShadow=!0,this.kyoshujoGroup.add(p)};s(0,-46,124,jn),s(0,46,124,jn),s(-76,0,jn,64),s(76,0,jn,64);const r=[[-62,-32,Math.PI/2],[62,-32,0],[62,32,-Math.PI/2],[-62,32,Math.PI]];for(const[a,c,l]of r){const h=new ei(14-kc,14+kc,24,1,l,Math.PI/2),u=new Dt(h,n);u.rotation.x=-Math.PI/2,u.position.set(a,.01,c),u.receiveShadow=!0,this.kyoshujoGroup.add(u)}s(0,0,jn,92,.012),s(0,0,152,jn,.012);const o=I_*2;s(-48,11.75,o,16.5,.013),s(-41,18,18,o,.013),s(-34,30.25,o,24.5,.013),s(10.75,en,14.5,_i*2,.013),s(65.25,en,14.5,_i*2,.013),s(38,24,72.5,jn,.012),s(26,30.6,3.7,6.2,.013),s(48.6,28.85,7.2,2.7,.013),s(0,51,32,3.2,.008)}buildSCurveMesh(){const e=L_,n=[],s=[],r=[];for(let l=0;l<e.length;l++){const h=e[Math.max(0,l-1)],u=e[Math.min(e.length-1,l+1)],p=u.x-h.x,g=u.z-h.z,_=Math.hypot(p,g)||1,v=g/_,m=-p/_;if(n.push(e[l].x+v*1.8,.014,e[l].z+m*1.8),n.push(e[l].x-v*1.8,.014,e[l].z-m*1.8),s.push(0,l*.25,1,l*.25),l<e.length-1){const f=l*2;r.push(f,f+1,f+2,f+1,f+3,f+2)}}const o=new me;o.setAttribute("position",new qt(n,3)),o.setAttribute("uv",new qt(s,2)),o.setIndex(r),o.computeVertexNormals();const a=new Ht({color:3883594,roughness:.85,side:Le}),c=new Dt(o,a);c.receiveShadow=!0,this.kyoshujoGroup.add(c)}buildHillRampMesh(){const e=Is,n=Fa,s=en-_i,r=en+_i,o=[],a=[];for(let M=0;M<=64;M++){const x=e+(n-e)*M/64,E=Dn(x,en).y+.015;if(o.push(x,0,s),o.push(x,E,s),o.push(x,E,r),o.push(x,0,r),M<64){const R=M*4,P=(M+1)*4;a.push(R+1,R+2,P+1,R+2,P+2,P+1),a.push(R+0,R+1,P+0,R+1,P+1,P+0),a.push(R+2,R+3,P+2,R+3,P+3,P+2)}}const c=new me;c.setAttribute("position",new qt(o,3)),c.setIndex(a),c.computeVertexNormals();const l=[],h=[],u=[],p=[];for(let M=0;M<=64;M++){const x=e+(n-e)*M/64,S=Dn(x,en).y+.018;if(l.push(x,S,s,x,S,r),u.push(x,0,s,x,S,s,x,0,r,x,S,r),M<64){const E=M*2;h.push(E,E+1,E+2,E+1,E+3,E+2);const R=M*4;p.push(R,R+1,R+4,R+1,R+5,R+4),p.push(R+2,R+6,R+3,R+3,R+6,R+7)}}const g=new me;g.setAttribute("position",new qt(l,3)),g.setIndex(h),g.computeVertexNormals();const _=new Dt(g,new Ht({color:3883594,roughness:.86,side:Le}));_.receiveShadow=!0,this.kyoshujoGroup.add(_);const v=new me;v.setAttribute("position",new qt(u,3)),v.setIndex(p),v.computeVertexNormals();const m=new Dt(v,new Ht({color:12239562,roughness:.9,side:Le}));m.receiveShadow=!0,m.castShadow=!0,this.kyoshujoGroup.add(m);const f=Dn(27,en).y,y=new Dt(new Ge(.45,_i*1.9),new cn({color:16777215}));y.rotation.x=-Math.PI/2,y.rotation.y=-Math.atan(Dn(27,en).slopeX),y.position.set(27,f+.03,en),this.kyoshujoGroup.add(y)}createStencilPlane(t,e,n,s,r,o,a=0){const c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.clearRect(0,0,256,256),l.fillStyle=e,l.textAlign="center",l.textBaseline="middle",l.font='bold 120px "Noto Sans JP", sans-serif',l.fillText(t,128,128);const h=new Jn(c);h.colorSpace=Se;const u=new Dt(new Ge(n,s),new cn({map:h,transparent:!0,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.rotation.z=a,u.position.set(r,.025,o),u}buildRoadMarkings(){const t=new cn({color:16054266}),e=new cn({color:15764480}),n=(o,a,c,l,h=t)=>{const u=new Dt(new Ge(c,l),h);u.rotation.x=-Math.PI/2,u.position.set(o,.02,a),this.kyoshujoGroup.add(u)};for(let o=-58;o<=58;o+=6)Math.abs(o)<12||(n(o,-46,2.8,.14),n(o,46,2.8,.14));for(let o=-28;o<=28;o+=6)Math.abs(o)<10||(n(-76,o,.14,2.8),n(76,o,.14,2.8));for(let o=-42;o<=42;o+=6)Math.abs(o)<18||n(0,o,.14,2.8);n(0,13.5,.16,10,e),n(0,-13.5,.16,10,e);for(let o=-70;o<=70;o+=6)Math.abs(o)<18||o>26&&o<50||n(o,0,2.8,.14);n(13.5,0,10,.16,e),n(-13.5,0,10,.16,e),n(38,0,18,.16,e);for(let o=6;o<=68;o+=6)n(o,24,2.8,.14);for(const o of Yh){const a=Math.abs(o.dirX)>.5;if(n(o.x,o.z,a?.45:o.halfWidth*1.9,a?o.halfWidth*1.9:.45),o.kind==="stopSign"){const l=Math.atan2(-o.dirX,-o.dirZ);this.kyoshujoGroup.add(this.createStencilPlane("止まれ","#ffffff",2.2,2.2,o.x-o.dirX*2.6,o.z-o.dirZ*2.6,l))}}const s=(o,a,c)=>{for(let l=-3;l<=3;l++)c?n(o,a+l*.9,2.8,.45):n(o+l*.9,a,.45,2.8)};s(0,-6.2,!1),s(0,6.2,!1),s(-6.2,0,!0),s(6.2,0,!0);const r=new Dt(new ei(.9,1.15,4),t);r.rotation.x=-Math.PI/2,r.position.set(0,.022,0),this.kyoshujoGroup.add(r),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,-40,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,20,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("1","#f0a500",1.8,1.8,12,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("2","#f0a500",1.8,1.8,0,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("3","#f0a500",1.8,1.8,-12,48.1,Math.PI/2))}buildCurbsAndPoles(){const t=new Ht({color:13357786,roughness:.8}),e=new Ht({color:15857145,roughness:.7});for(const r of Wh){const o=r.points,a=r.id.startsWith("hill-");for(let c=0;c<o.length-1;c++){const l=o[c],h=o[c+1],u=h.x-l.x,p=h.z-l.z,g=Math.hypot(u,p);if(!(g<.01))if(a)for(let v=0;v<24;v++){const m=v/24,f=(v+1)/24,y=l.x+u*m,M=l.x+u*f,x=l.z+p*m,S=l.z+p*f,E=Dn(y,x).y,R=Dn(M,S).y,P=Math.hypot(M-y,R-E),T=new Dt(new he(P+.04,r.height,.18),v%2===0?t:e);T.position.set((y+M)*.5,(E+R)*.5+r.height*.5,(x+S)*.5),T.rotation.z=Math.atan2(R-E,M-y),T.castShadow=!0,T.receiveShadow=!0,this.kyoshujoGroup.add(T)}else{const _=new Dt(new he(.18,r.height,g+.14),c%2===0?t:e);_.position.set((l.x+h.x)*.5,r.height*.5,(l.z+h.z)*.5),_.rotation.y=Math.atan2(u,p),_.castShadow=!0,_.receiveShadow=!0,this.kyoshujoGroup.add(_)}}}const n=new Ht({color:14231078,roughness:.4}),s=new Ht({color:16317180,roughness:.4});for(const r of Xh){const o=new fe;o.position.set(r.x,0,r.z);const a=5,c=r.height/a;for(let l=0;l<a;l++){const h=new Dt(new ue(r.radius*.65,r.radius*.65,c,10),l%2===0?n:s);h.position.y=c*(l+.5),h.castShadow=!0,o.add(h)}this.kyoshujoGroup.add(o)}}buildRailroadCrossing(){const e=new Ht({color:8160657,metalness:.75,roughness:.3}),n=new Ht({color:4930350,roughness:.9}),s=new Ht({color:16103424,roughness:.4}),r=new Ht({color:1711393,roughness:.6});for(const a of[-.7,.7]){const c=new Dt(new he(.12,.06,30),e);c.position.set(38+a,.03,0),c.receiveShadow=!0,this.kyoshujoGroup.add(c)}for(let a=-14;a<=14;a+=.9){if(Math.abs(a)<3.6)continue;const c=new Dt(new he(2.3,.05,.25),n);c.position.set(38,.025,a),this.kyoshujoGroup.add(c)}const o=[[38-3.6,-3.9],[38+3.6,3.9]];for(let a=0;a<o.length;a++){const[c,l]=o[a],h=new fe;h.position.set(c,0,l);const u=new Dt(new ue(.08,.09,3.4,10),s);u.position.y=1.7,u.castShadow=!0,h.add(u);for(const E of[Math.PI/4,-Math.PI/4]){const R=new Dt(new he(1.1,.16,.05),s);R.position.y=2.95,R.rotation.y=Math.PI/2,R.rotation.x=E,h.add(R)}const p=new Ht({color:6293512,emissive:2229252}),g=new Ht({color:6293512,emissive:2229252});this.railLeftLampMats.push(p),this.railRightLampMats.push(g);const _=new Dt(new ue(.11,.11,.14,12),p);_.rotation.z=Math.PI/2,_.position.set(0,2.25,-.22),h.add(_);const v=new Dt(new ue(.11,.11,.14,12),g);v.rotation.z=Math.PI/2,v.position.set(0,2.25,.22),h.add(v);const m=new Dt(new he(.32,.85,.32),r);m.position.set(0,.65,a===0?.35:-.35),h.add(m),new fe().position.set(0,.95,a===0?.35:-.35);const y=new fe;y.rotation.y=a===0?-Math.PI/2:Math.PI/2;const M=new Dt(new he(3.6,.08,.06),s);M.position.set(1.8,0,0),M.castShadow=!0;const x=new Dt(new he(.08,3.8,.06),s);x.position.set(0,1.9,0),x.castShadow=!0;for(let E=0;E<6;E++)if(E%2===0){const R=new Dt(new he(.09,.32,.07),r);R.position.set(0,.45+E*.6,0),x.add(R)}const S=new fe;S.position.set(0,.95,a===0?.35:-.35),S.rotation.y=Math.PI/2,S.add(x),h.add(S),this.railGatePivots.push(S),this.kyoshujoGroup.add(h)}}buildTrafficLights(){const t=new Ht({color:6583435,metalness:.6,roughness:.35}),e=new Ht({color:1976635,roughness:.6}),n=[{axis:"NS",x:4.5,z:-5,rotY:0},{axis:"NS",x:-4.5,z:5,rotY:Math.PI},{axis:"EW",x:5,z:4.5,rotY:-Math.PI/2},{axis:"EW",x:-5,z:-4.5,rotY:Math.PI/2}];for(const s of n){const r=new fe;r.position.set(s.x,0,s.z),r.rotation.y=s.rotY;const o=new Dt(new ue(.11,.13,5.4,10),t);o.position.y=2.7,o.castShadow=!0,r.add(o);const a=new Dt(new ue(.07,.09,4.2,8),t);a.rotation.z=Math.PI/2,a.position.set(-2,5.1,0),r.add(a);const c=new Dt(new he(1.55,.52,.36),e);c.position.set(-2.5,5.1,0),r.add(c);const l=new Ht({color:413243,emissive:202768}),h=new Ht({color:7877903,emissive:1708544}),u=new Ht({color:8330525,emissive:1836036}),p=new ue(.15,.15,.06,14),g=(_,v)=>{const m=new Dt(p,_);m.rotation.x=Math.PI/2,m.position.set(-2.5+v,5.1,.19),r.add(m)};g(l,-.46),g(h,0),g(u,.46),this.trafficLamps.push({axis:s.axis,greenMat:l,yellowMat:h,redMat:u}),this.kyoshujoGroup.add(r)}}createSignTexture(t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");s.clearRect(0,0,256,256),t==="tomare"?(s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=14,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(32,34),s.lineTo(224,34),s.lineTo(128,214),s.closePath(),s.fillStyle="#d62828",s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.font='bold 44px "Noto Sans JP", sans-serif',s.fillText("止まれ",128,92),s.font="bold 24px sans-serif",s.fillText("STOP",128,134)):t==="40"?(s.beginPath(),s.arc(128,128,114,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.textBaseline="middle",s.font="bold 104px sans-serif",s.fillText("40",128,132)):t==="rail"?(s.save(),s.translate(128,128),s.rotate(Math.PI/4),s.fillStyle="#f5b800",s.fillRect(-84,-84,168,168),s.lineWidth=10,s.strokeStyle="#111827",s.strokeRect(-76,-76,152,152),s.restore(),s.fillStyle="#111827",s.textAlign="center",s.font='bold 34px "Noto Sans JP", sans-serif',s.fillText("踏切",128,138)):(s.fillStyle="#005bac",s.fillRect(12,56,232,144),s.lineWidth=6,s.strokeStyle="#ffffff",s.strokeRect(20,64,216,128),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font='bold 38px "Noto Sans JP", sans-serif',s.fillText(e??"",128,128));const r=new Jn(n);return r.colorSpace=Se,r}buildRoadSigns(){const t=new Ht({color:9741240,metalness:.6,roughness:.4}),e=(n,s,r,o,a,c=1,l=1)=>{const h=new fe;h.position.set(s,0,r),h.rotation.y=o;const u=new Dt(new ue(.035,.035,2.6,8),t);u.position.y=1.3,u.castShadow=!0,h.add(u);const p=this.createSignTexture(n,a),g=new Dt(new Ge(c,l),new cn({map:p,transparent:!0,side:Le}));g.position.set(0,2.35,.045),h.add(g),this.kyoshujoGroup.add(h)};e("tomare",-67.5,4.1,Math.PI/2),e("tomare",-4.1,-38.5,0),e("tomare",-24.7,-41.5,0),e("tomare",-36.5,41.5,Math.PI),e("40",-55,-50.2,-Math.PI/2),e("40",30,-50.2,-Math.PI/2),e("rail",26,-4.2,-Math.PI/2),e("rail",50,4.2,Math.PI/2),e("guide",-42.5,-4.5,0,"S字コース",1.7,1.05),e("guide",-51,4.5,Math.PI,"クランク",1.7,1.05),e("guide",16.5,-27.5,-Math.PI/2,"坂道発進",1.7,1.05),e("guide",22,28.5,-Math.PI/2,"方向変換",1.7,1.05),e("guide",43,28.5,-Math.PI/2,"縦列駐車",1.7,1.05)}buildObstaclesAndBuildings(){const t=Hr[0];if(t){const a=new fe;a.position.set(t.x,0,t.z);const c=new Dt(new he(t.halfW*2,1.55,t.halfL*2),new Ht({color:14870768,roughness:.45}));c.position.y=.92,c.castShadow=!0,a.add(c);const l=new Dt(new he(t.halfW*1.6,.52,t.halfL*1.92),new Ht({color:1976635,roughness:.2,metalness:.4}));l.position.y=1.35,a.add(l);const h=new Ht({color:16347926,roughness:.5});for(const u of[-2.8,2.8]){const p=new Dt(new ts(.18,.55,10),h);p.position.set(u,.275,.2),p.castShadow=!0,a.add(p)}this.kyoshujoGroup.add(a)}const e=Hr[1];if(e){const a=new fe;a.position.set(e.x,0,e.z);const c=new Dt(new he(e.halfW*2,e.height,e.halfL*2),new Ht({color:15855076,roughness:.8}));c.position.y=e.height/2,c.castShadow=!0,c.receiveShadow=!0,a.add(c);const l=new Dt(new he(e.halfW*2+.6,.5,e.halfL*2+.6),new Ht({color:3359061,roughness:.7}));l.position.y=e.height+.25,a.add(l);const h=new Ht({color:1981023,metalness:.5,roughness:.15});for(const v of[2.2,5]){const m=new Dt(new he(e.halfW*1.8,1.3,.1),h);m.position.set(0,v,-e.halfL-.02),a.add(m)}const u=document.createElement("canvas");u.width=512,u.height=128;const p=u.getContext("2d");p.fillStyle="#005bac",p.fillRect(0,0,512,128),p.strokeStyle="#ffffff",p.lineWidth=8,p.strokeRect(8,8,496,112),p.fillStyle="#ffffff",p.textAlign="center",p.textBaseline="middle",p.font='bold 46px "Noto Sans JP", sans-serif',p.fillText("桜ヶ丘自動車教習所",256,66);const g=new Jn(u);g.colorSpace=Se;const _=new Dt(new he(14,2.4,.4),new cn({map:g}));_.position.set(0,e.height+1.8,-e.halfL+1),a.add(_),this.kyoshujoGroup.add(a)}const n=new fe;n.position.set(-14,0,38);const s=new Dt(new ue(1.1,1.4,6.5,8),new Ht({color:14870768,roughness:.7}));s.position.y=3.25,s.castShadow=!0,n.add(s);const r=new Dt(new ue(2.3,1.9,2.2,8),new Ht({color:1981023,metalness:.6,roughness:.15}));r.position.y=7.4,r.castShadow=!0,n.add(r);const o=new Dt(new ts(2.6,1,8),new Ht({color:3359061,roughness:.6}));o.position.y=9,n.add(o),this.kyoshujoGroup.add(n)}buildTreesAndFence(){const t=new Ht({color:6045747,roughness:.9}),e=new Ht({color:4157243,roughness:.85}),n=new Ht({color:16037570,roughness:.8}),s=[];for(let h=-84;h<=84;h+=14)s.push([h,-55.5,Math.abs(h)%28===0]),Math.abs(h)>22&&s.push([h,55.5,!1]);for(let h=-42;h<=42;h+=14)s.push([-85.5,h,h===0]),s.push([85.5,h,h===-14]);s.push([-16,-24,!0],[14,14,!1],[62,12,!0]);for(const[h,u,p]of s){const g=new fe;g.position.set(h,0,u);const _=new Dt(new ue(.18,.25,2.2,7),t);_.position.y=1.1,_.castShadow=!0,g.add(_);const v=new Dt(new cl(1.75,1),p?n:e);v.position.y=3.2,v.castShadow=!0,g.add(v),this.kyoshujoGroup.add(g)}const r=new Ht({color:14410474,roughness:.55}),o=new Dt(new he(178,.9,.14),r);o.position.set(0,.45,-59);const a=new Dt(new he(178,.9,.14),r);a.position.set(0,.45,59);const c=new Dt(new he(.14,.9,118),r);c.position.set(-89,.45,0);const l=new Dt(new he(.14,.9,118),r);l.position.set(89,.45,0),this.kyoshujoGroup.add(o,a,c,l)}createWaypointBeacon(){const t=new fe,e=new Dt(new ei(1.6,2.1,28),new cn({color:958318,side:Le,transparent:!0,opacity:.75}));e.rotation.x=-Math.PI/2,t.add(e);const n=new Dt(new ts(.55,1.3,4),new Ht({color:1096065,emissive:366185,emissiveIntensity:.7}));return n.rotation.x=Math.PI,n.position.y=2.8,t.add(n),t}}const vl=document.getElementById("simCanvas"),nn=new A_({canvas:vl,antialias:!0,powerPreference:"high-performance"});nn.setPixelRatio(Math.min(2,window.devicePixelRatio||1));nn.setSize(window.innerWidth,window.innerHeight);nn.shadowMap.enabled=!0;nn.shadowMap.type=eh;nn.outputColorSpace=Se;const kn=new Kd,Xs=new mx(kn),ni=new px(kn),Ar=new Ba,je=new B_,Ee=new R_,Ut=z_(),gx=window.matchMedia("(hover: none) and (pointer: coarse)").matches;gx&&(Ut.showTouchControls=!0);const be=new fx(vl,window.innerWidth/window.innerHeight);be.setMirrorQuality(Ut.mirrorQuality,null);let cs="startBay",On="kyoshujo",En="kyoshujo-3d",Ie=null,yi=1.35,Gr=17,ri=!1,Wr=1,Ml=0,yl=0,Xr=!1,Rt=$h(Ds.startBay.x,Ds.startBay.z,Ds.startBay.heading,Ut.vehicleKind,Ut.transmission),dn=eu(Ut.vehicleKind);kn.add(dn.root);be.setMode(Ut.cameraMode,Rt,dn);Ee.setVolume(Ut.masterVolume,Ut.muted);const _x=document.getElementById("ui"),nu=document.getElementById("uiToggle"),Sl=Array.from(document.querySelectorAll(".quickViewBtn[data-view-target]")),Xc=document.getElementById("mirrorHud"),xx=document.getElementById("mirrorLeft"),vx=document.getElementById("mirrorCenter"),Mx=document.getElementById("mirrorRight"),yx=document.getElementById("cockpitSignalHud"),Sx=document.getElementById("cockpitLampLeft"),Ex=document.getElementById("cockpitLampRight"),Je=document.getElementById("miniMap"),El=document.getElementById("miniMapClose"),bx=document.getElementById("speedVignette"),Tx=document.getElementById("speedBlur"),wx=document.getElementById("wheelHudDial"),Ax=document.getElementById("speed"),Rx=document.getElementById("gear"),Cx=document.getElementById("viewMode"),Px=document.getElementById("position"),Lx=document.getElementById("heading"),Ix=document.getElementById("steerAngle"),Dx=document.getElementById("signalStatusBox"),Ux=document.getElementById("signalStatus"),Yc=document.getElementById("hudScore"),Nx=document.getElementById("hudModePill"),Ho=document.getElementById("hudDirective"),Vo=document.getElementById("violationToasts"),qc=document.getElementById("resetToast"),Ox=document.getElementById("stallBanner"),bl=document.getElementById("mobileControls");bl.hidden=!Ut.showTouchControls;const Fx={FL:document.getElementById("wheelFL"),FR:document.getElementById("wheelFR"),RL:document.getElementById("wheelRL"),RR:document.getElementById("wheelRR")},ka=document.getElementById("accelCurve"),Bx=document.getElementById("accelCurveValue"),kx=document.getElementById("accelCurveLine"),Rr=document.getElementById("accelCurveGuideX"),Cr=document.getElementById("accelCurveGuideY"),Zc=document.getElementById("accelCurveDot"),zx=document.getElementById("accelCurveInputValue"),Hx=document.getElementById("accelCurveOutputValue"),sn={left:32,right:188,top:20,bottom:108,samples:32};function iu(i,t=0){yi=Ae.clamp(i,.8,1.8),ka.value=String(Math.round(yi*100)),Bx.textContent=yi.toFixed(2);const e=[];for(let n=0;n<=sn.samples;n++){const s=n/sn.samples,r=Math.pow(s,yi),o=Ae.lerp(sn.left,sn.right,s),a=Ae.lerp(sn.bottom,sn.top,r);e.push(`${o.toFixed(1)},${a.toFixed(1)}`)}kx.setAttribute("points",e.join(" ")),su(t)}function su(i){const t=Ae.clamp(i,0,1),e=Math.pow(t,yi),n=Ae.lerp(sn.left,sn.right,t),s=Ae.lerp(sn.bottom,sn.top,e);Rr.setAttribute("x1",n.toFixed(1)),Rr.setAttribute("y1",String(sn.bottom)),Rr.setAttribute("x2",n.toFixed(1)),Rr.setAttribute("y2",s.toFixed(1)),Cr.setAttribute("x1",String(sn.left)),Cr.setAttribute("y1",s.toFixed(1)),Cr.setAttribute("x2",n.toFixed(1)),Cr.setAttribute("y2",s.toFixed(1)),Zc.setAttribute("cx",n.toFixed(1)),Zc.setAttribute("cy",s.toFixed(1)),zx.textContent=`${Math.round(t*100)}%`,Hx.textContent=`${Math.round(e*100)}%`}let hs=!0;function bn(i){hs=i,_x.classList.toggle("collapsed",i);const t=Ut.locale==="ja";nu.textContent=i?t?"メニューを表示":"Show Menu":t?"メニューを隠す":"Hide Menu"}nu.addEventListener("click",()=>{Ee.unlock(),bn(!hs)});document.getElementById("startDrivingBtn").addEventListener("click",()=>{Ee.unlock(),bn(!0),vl.focus({preventScroll:!0})});let jc=0;function Vx(){const i=Ut.locale==="ja";document.getElementById("resetToastText").textContent=i?"スタート地点に戻りました。もう一度！":"Back to the start — try again!",qc.classList.add("visible"),window.clearTimeout(jc),jc=window.setTimeout(()=>qc.classList.remove("visible"),1800)}const Go=["chase","cockpit","hood","orbit"];function Tl(i){Ut.cameraMode=i,Vn(Ut),be.setMode(i,Rt,dn),Sl.forEach(s=>{s.classList.toggle("is-active",s.dataset.viewTarget===i)});const t=i==="orbit";Xc.style.display=t?"none":i==="cockpit"?"block":"flex",Xc.classList.toggle("cockpit-layout",i==="cockpit"),yx.classList.toggle("is-visible",i==="cockpit");const e=Ut.locale==="ja",n={chase:e?"後方視点":"Chase View",cockpit:e?"運転席 (右ハンドル)":"Cockpit View",hood:e?"ボンネット":"Hood View",orbit:e?"自由カメラ":"Free Orbit"};Cx.textContent=n[i]}function ru(){const i=Go.indexOf(be.getMode());Tl(Go[(i+1)%Go.length])}Sl.forEach(i=>{i.addEventListener("click",()=>{Ee.unlock();const t=i.dataset.viewTarget;t&&Tl(t)})});document.getElementById("viewBtn").addEventListener("click",()=>{Ee.unlock(),ru()});const Kn=document.getElementById("mapPreset"),Ys=document.getElementById("mapWidth"),za=document.getElementById("mapScale"),Gx=document.getElementById("mapScaleValue");function Yr(i){const t=Math.round(i);Ys.value=String(t),za.value=String(t),Gx.textContent=`${t} m`}function qr(i,t,e,n){Rt=$h(i,t,e,Ut.vehicleKind,Ut.transmission),je.reset(n,Rt),document.getElementById("examResultModal").hidden=!0,be.setMode(be.getMode(),Rt,dn)}function ps(i,t="practice"){cs=i,En="kyoshujo-3d",Kn.value="kyoshujo-3d",On="kyoshujo",Xs.setKyoshujoVisible(!0),ni.setVisible(!1),Yr(Mi*2);const e=Ds[i];qr(e.x,e.z,e.heading,t)}function Qr(i){if(i==="kyoshujo-3d"){ps(cs,"practice");return}if(i==="custom"&&Ie){En="custom",On="custom",Xs.setKyoshujoVisible(!1),ni.setVisible(!0),Yr(Ie.mapWidth),qr(Ie.startX,Ie.startZ,Ie.startHeading,"practice");return}const t=Vr.find(e=>e.id===i);t&&(En=t.id,Kn.value=t.id,On="custom",ni.loadProceduralTestCenter(t),Xs.setKyoshujoVisible(!1),ni.setVisible(!0),Yr(t.mapWidth),qr(t.startX,t.startZ,t.startHeading,"practice"))}function wl(){Ee.unlock(),En==="kyoshujo-3d"?ps(cs,je.getMode()):Qr(En),Vx()}document.getElementById("resetBtn").addEventListener("click",wl);document.getElementById("quickResetBtn").addEventListener("click",wl);function Al(){const i=Ut.locale==="ja";Kn.innerHTML="";for(const n of Vr){const s=document.createElement("option");s.value=n.id,s.textContent=i?`${n.nameJa} (${n.nameEn})`:`${n.nameEn} (${n.nameJa})`,Kn.append(s)}if(Ie){const n=document.createElement("option");n.value="custom",n.textContent=i?`カスタム地図 / Custom (${Ie.fileName})`:`Custom Map / カスタム (${Ie.fileName})`,Kn.append(n)}Kn.value=En;const t=document.getElementById("stationGrid");t.innerHTML="";for(const n of D_){const s=Qh[n],r=document.createElement("button");r.type="button",r.className="station-chip";const o=i?`${s.titleJa} · ${s.titleEn}`:`${s.titleEn} · ${s.titleJa}`,a=i?s.descJa:s.descEn;r.innerHTML=`<strong>${o}</strong><span>${a}</span>`,r.addEventListener("click",()=>{Ee.unlock(),ps(n,"practice"),bn(!0)}),t.append(r)}const e=document.getElementById("courseQuickList");e.innerHTML="";for(const n of Vr){const s=document.createElement("li"),r=document.createElement("button");r.type="button",r.innerHTML=`<strong>${i?n.nameJa:n.nameEn}</strong><small>${i?n.nameEn:n.nameJa}</small>`,r.addEventListener("click",()=>{Ee.unlock(),Qr(n.id),bn(!0)}),s.append(r),e.append(s)}}Kn.addEventListener("change",()=>{Ee.unlock(),Qr(Kn.value)});document.getElementById("modePracticeBtn").addEventListener("click",()=>{Ee.unlock(),je.reset("practice",Rt),bn(!0)});document.getElementById("modeExamBtn").addEventListener("click",()=>{Ee.unlock(),ps("startBay","exam"),bn(!0)});const Ha=document.getElementById("vehicleType"),Va=document.getElementById("transmissionMode"),Jc=document.getElementById("maxSpeed"),Wx=document.getElementById("maxSpeedValue"),Ga=document.getElementById("masterVolume"),ou=document.getElementById("masterVolumeValue"),Wa=document.getElementById("steeringSensitivity"),au=document.getElementById("steeringSensitivityValue"),Xa=document.getElementById("autoCenterSteering"),Ya=document.getElementById("renderQuality"),qa=document.getElementById("settingTouchControls");Ha.value=Ut.vehicleKind;Va.value=Ut.transmission;Ga.value=String(Math.round(Ut.masterVolume*100));ou.textContent=`${Math.round(Ut.masterVolume*100)}%`;Wa.value=String(Math.round(Ut.steeringSensitivity*100));au.textContent=`${Ut.steeringSensitivity.toFixed(2)}x`;Xa.checked=Ut.autoCenterSteering;Ya.value=Ut.mirrorQuality;qa.checked=Ut.showTouchControls;iu(yi,0);function lu(){kn.remove(dn.root),dn=eu(Ut.vehicleKind),kn.add(dn.root),be.setMode(be.getMode(),Rt,dn),Rt.transmission=Ut.transmission,Rt.gear=Ut.transmission==="AT"?"D":"1",Rt.stalled=!1}Ha.addEventListener("change",()=>{Ut.vehicleKind=Ha.value,Vn(Ut),lu()});Va.addEventListener("change",()=>{Ut.transmission=Va.value,Vn(Ut),lu()});Jc.addEventListener("input",()=>{Gr=Number(Jc.value),Wx.textContent=`${Gr} m/s`});Ga.addEventListener("input",()=>{Ut.masterVolume=Number(Ga.value)/100,ou.textContent=`${Math.round(Ut.masterVolume*100)}%`,Ee.setVolume(Ut.masterVolume,Ut.muted),Vn(Ut)});Wa.addEventListener("input",()=>{Ut.steeringSensitivity=Number(Wa.value)/100,au.textContent=`${Ut.steeringSensitivity.toFixed(2)}x`,Vn(Ut)});Xa.addEventListener("change",()=>{Ut.autoCenterSteering=Xa.checked,Vn(Ut)});Ya.addEventListener("change",()=>{Ut.mirrorQuality=Ya.value,be.setMirrorQuality(Ut.mirrorQuality,dn),Vn(Ut)});qa.addEventListener("change",()=>{Ut.showTouchControls=qa.checked,bl.hidden=!Ut.showTouchControls,Vn(Ut)});ka.addEventListener("input",()=>{iu(Number(ka.value)/100,0)});const $c=document.getElementById("mapInput");$c.addEventListener("change",()=>{var e;const i=(e=$c.files)==null?void 0:e[0];if(!i)return;const t=new FileReader;t.onload=async()=>{const n=String(t.result),s=Math.max(40,Number(Ys.value)||350),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};Ie=r,await ni.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await _l(r),En="custom",Al(),Qr("custom"),bn(!0)},t.readAsDataURL(i)});const cu=i=>{const t=Math.max(40,Math.min(1500,i));Yr(t),On==="custom"&&(ni.setWidth(t),Ie&&(Ie.mapWidth=t,_l(Ie)))};Ys.addEventListener("input",()=>cu(Number(Ys.value)||180));za.addEventListener("input",()=>cu(Number(za.value)||180));document.getElementById("setSpawnBtn").addEventListener("click",()=>{Ie&&En==="custom"?(Ie.startX=Rt.x,Ie.startZ=Rt.z,Ie.startHeading=Rt.heading,_l(Ie)):Ds[cs]={id:cs,x:Rt.x,z:Rt.z,heading:Rt.heading},Ee.playClick(740,.04,.16)});document.getElementById("copyMapJsonBtn").addEventListener("click",async()=>{const i=JSON.stringify({course:En,mapWidth:Number(Ys.value)||180,maxSpeed:Gr,startPose:{x:Number(Rt.x.toFixed(1)),z:Number(Rt.z.toFixed(1)),heading:Number(Rt.heading.toFixed(6))}},null,2);try{await navigator.clipboard.writeText(i)}catch{}});const hu=document.getElementById("firstRunHint");document.getElementById("firstRunHintClose").addEventListener("click",()=>{hu.hidden=!0});function Zr(i){ri=i,i&&(Wr=1,Ml=0,yl=0),Je.classList.toggle("expanded",i),Je.classList.remove("is-panning"),document.body.classList.toggle("minimap-expanded",i)}let jr=null,uu=0,du=0,Za=0,ja=0;Je.addEventListener("pointerdown",i=>{!ri||i.target===El||(jr=i.pointerId,uu=Za=i.clientX,du=ja=i.clientY,Xr=!1,Je.setPointerCapture(i.pointerId))});Je.addEventListener("pointermove",i=>{if(!ri||i.pointerId!==jr)return;const t=Math.hypot(i.clientX-uu,i.clientY-du),e=i.clientX-Za,n=i.clientY-ja;if(Za=i.clientX,ja=i.clientY,t>=5){Xr=!0,Je.classList.add("is-panning");const s=Je.getBoundingClientRect();Ml-=e/Math.max(1,s.width)*be.miniMapViewport.halfWidth*2,yl-=n/Math.max(1,s.height)*be.miniMapViewport.halfHeight*2}});Je.addEventListener("pointerup",i=>{i.pointerId===jr&&(jr=null,Je.classList.remove("is-panning"))});Je.addEventListener("click",i=>{if(i.target===El)return;if(Xr){Xr=!1;return}if(!ri){Zr(!0);return}const t=Je.getBoundingClientRect(),e=(i.clientX-t.left)/Math.max(1,t.width),n=(i.clientY-t.top)/Math.max(1,t.height),s=be.miniMapViewport.centerX+(e-.5)*be.miniMapViewport.halfWidth*2,r=be.miniMapViewport.centerZ+(n-.5)*be.miniMapViewport.halfHeight*2;qr(s,r,Rt.heading,je.getMode()),Zr(!1)});Je.addEventListener("wheel",i=>{if(!ri)return;i.preventDefault();const t=i.deltaY<0?1.18:1/1.18;Wr=Ae.clamp(Wr*t,1,6)},{passive:!1});El.addEventListener("click",i=>{i.stopPropagation(),Zr(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&ri&&Zr(!1)});document.getElementById("gearCardBtn").addEventListener("click",()=>{Ee.unlock(),Kh(Rt,1)});document.getElementById("stallRestartBtn").addEventListener("click",()=>{Ee.unlock(),Rt.stalled=!1,Rt.rpm=850});function Xx(i){var o;const t=Ut.locale==="ja",e=document.createElement("div");e.className=`violation-toast ${i.instantFail?"fail":""}`;const n=t?i.labelJa:i.labelEn,s=t?i.detailJa:i.detailEn,r=i.instantFail?t?"検定中止":"FAIL":`-${i.points}`;for(e.innerHTML=`<span class="vt-pts">${r}</span><div><strong>${n}</strong><p>${s}</p></div>`,Vo.prepend(e);Vo.children.length>3;)(o=Vo.lastElementChild)==null||o.remove();window.setTimeout(()=>{e.classList.add("fade-out"),window.setTimeout(()=>e.remove(),320)},4200)}let fu="crank";function Yx(i){const t=Ut.locale,e=document.getElementById("examResultModal");e.hidden=!1,fu=i.weakArea??"crank",document.getElementById("examResultTitle").textContent=Un(t,"examResultTitle");const n=document.getElementById("examStamp");n.textContent=i.passed?Un(t,"examPassStamp"):Un(t,"examFailStamp"),n.className=`exam-stamp ${i.passed?"pass":"fail"}`,document.getElementById("examResultSub").textContent=i.terminated?Un(t,"examTerminatedSub"):i.passed?Un(t,"examPassedSub"):Un(t,"examFailedSub"),document.getElementById("examFinalScore").textContent=`${i.score} / 100`;const s=Math.floor(i.elapsedSec/60),r=Math.floor(i.elapsedSec%60);document.getElementById("examElapsed").textContent=`${s}:${r.toString().padStart(2,"0")}`,document.getElementById("examDistance").textContent=`${Math.round(i.distanceM)} m`;const o=document.getElementById("examViolationList");if(o.innerHTML="",i.violations.length===0){const a=document.createElement("li");a.className="clean-pass",a.textContent=Un(t,"examNoViolations"),o.append(a)}else for(const a of i.violations){const c=document.createElement("li"),l=t==="ja"?a.labelJa:a.labelEn,h=t==="ja"?a.detailJa:a.detailEn,u=a.instantFail?t==="ja"?"中止":"FAIL":`-${a.points}`;c.innerHTML=`<span class="ev-badge ${a.instantFail?"fail":""}">${u}</span><span><strong>${l}</strong> — ${h}</span>`,o.append(c)}}document.getElementById("examRetryBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,ps("startBay","exam")});document.getElementById("examPracticeWeakBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,ps(fu,"practice")});document.getElementById("examCloseBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,je.reset("practice",Rt)});je.onViolation=i=>{Xx(i),Ee.playViolationChime(i.instantFail)};je.onExamFinish=i=>{Yx(i)};const pu=new j_({onToggleBlinker:i=>{Rt.blinker=Rt.blinker===i?"off":i,Rt.blinkerTimer=0,Rt.blinkerOn=Rt.blinker!=="off"},onToggleHandbrake:()=>{Rt.handbrake=!Rt.handbrake,Ee.playClick(420,.04,.16)},onShiftGear:i=>{Kh(Rt,i),Ee.playClick(620,.03,.14)},onCycleCamera:ru,onResetVehicle:wl,onToggleMenu:()=>bn(!hs),onIgnition:()=>{Rt.stalled=!1,Rt.rpm=850},onAnyInteraction:()=>{Ee.unlock(),hu.hidden=!0}});pu.bindTouchControls(bl);function mu(){const i=Ut.locale==="ja";document.documentElement.lang=Ut.locale,bn(hs),document.getElementById("quickLangEnBtn").classList.toggle("is-active",!i),document.getElementById("quickLangJaBtn").classList.toggle("is-active",i),document.getElementById("panelLangEnBtn").style.borderColor=i?"rgba(255,255,255,0.14)":"#34d399",document.getElementById("panelLangJaBtn").style.borderColor=i?"#34d399":"rgba(255,255,255,0.14)",document.getElementById("setupTitleText").textContent=i?"ドライブの準備 (Ready to drive)":"Ready to drive (ドライブの準備)",document.getElementById("setupLeadText").textContent=i?"車両とコースを選び、各教習課題へのワープや100点満点の修了検定を練習できます。":"Choose your vehicle and map, warp to any driving school obstacle, or start the 100-point exam.",document.getElementById("startDrivingBtn").textContent=i?"運転を始める (Start driving)":"Start driving (運転を始める)",document.getElementById("resetBtn").textContent=i?"車両リセット (Reset)":"Reset Vehicle (リセット)",document.getElementById("quickResetBtn").textContent=i?"リセット (O)":"Reset (O)",document.getElementById("lblVehicle").textContent=i?"車種 (Vehicle)":"Vehicle (車種)",document.getElementById("optSedan").textContent=i?"普通車セダン (右ハンドル) · RHD Sedan":"Sedan (RHD Corolla) · 普通車セダン",document.getElementById("optMoto").textContent=i?"普通二輪 (400cc) · Motorcycle":"Motorcycle (400cc) · 普通二輪",document.getElementById("lblTrans").textContent=i?"変速機 (Transmission)":"Transmission (変速機)",document.getElementById("optAT").textContent=i?"AT (オートマ・クリープあり)":"AT (Automatic · Creep)",document.getElementById("optMT").textContent=i?"MT (マニュアル5速)":"MT (Manual 5-Speed)",document.getElementById("lblMap").textContent=i?"コース / 試験場マップ (Course / Map)":"Course / Map (教習コース・試験場)",document.getElementById("modePracticeBtn").textContent=i?"自由練習 (Free Practice)":"Free Practice (自由練習)",document.getElementById("modeExamBtn").textContent=i?"修了検定 100点採点 (Mock Exam)":"Mock Exam 100-pt (修了検定)",document.getElementById("foldStationsTitle").textContent=i?"教習課題ワープ (Kyōshūjo Training Stations)":"Kyōshūjo Training Stations (教習課題ワープ)",document.getElementById("foldTuningTitle").textContent=i?"操作感とサウンド (Handling & sound)":"Handling & sound (操作感とサウンド)",document.getElementById("lblMaxSpeed").textContent=i?"最高速度 (Max Speed)":"Max Speed (最高速度)",document.getElementById("lblVolume").textContent=i?"音量 (Volume)":"Volume (音量)",document.getElementById("lblSteerSens").textContent=i?"ハンドル感度 (Steering Sensitivity)":"Steering Sensitivity (ハンドル感度)",document.getElementById("lblAutoCenter").textContent=i?"ハンドル自動復元 (Auto-center Steering)":"Auto-center Steering (ハンドル自動復元)",document.getElementById("lblMirrorQuality").textContent=i?"画質・ミラー描画 (Graphics & Mirrors)":"Graphics & Mirrors (画質・ミラー描画)",document.getElementById("optMirrorHigh").textContent=i?"高画質・3面ミラー (High · 3 Mirrors)":"High · Real-time 3 Mirrors (高画質)",document.getElementById("optMirrorLow").textContent=i?"標準・バランス (Medium · Balanced)":"Medium · Balanced (標準)",document.getElementById("optMirrorOff").textContent=i?"軽量・省電力 (Low · Save power)":"Low · Save power (軽量)",document.getElementById("lblTouchControls").textContent=i?"タッチ操作パネル表示 (Show touch controls)":"Show mobile touch controls (タッチ操作表示)",document.getElementById("curveTitle").textContent=i?"アクセル特性カーブ (Acceleration Curve)":"Acceleration Curve (アクセル特性)",document.getElementById("curveDesc").textContent=i?"横軸：アクセル入力 ／ 縦軸：駆動出力 (X: Input, Y: Output)":"X axis is throttle input, Y axis is drive output",document.getElementById("curveSoftLbl").textContent=i?"穏やか (Soft)":"Soft (穏やか)",document.getElementById("curveDirectLbl").textContent=i?"ダイレクト (Direct)":"Direct (直接)",document.getElementById("curveInputLbl").textContent=i?"入力 (Input)":"Current Input",document.getElementById("curveOutputLbl").textContent=i?"出力 (Output)":"Current Output",document.getElementById("foldMapTitle").textContent=i?"マップ編集・開始位置 (Map editor & spawn)":"Map editor & spawn (マップ編集・開始位置)",document.getElementById("uploadMapText").textContent=i?"地図アップロード (Upload)":"Upload Map (地図読込)",document.getElementById("setSpawnBtn").textContent=i?"開始位置に登録 (Set Spawn)":"Set Spawn (開始位置)",document.getElementById("viewBtn").textContent=i?"視点切替 (Change View)":"Change View (視点切替)",document.getElementById("copyMapJsonBtn").textContent=i?"JSONコピー (Copy JSON)":"Copy JSON (JSONコピー)",document.getElementById("lblCustomWidth").textContent=i?"マップ横幅 (Map Width m)":"Map Width m (マップ横幅)",document.getElementById("lblMapScale").textContent=i?"縮尺スケール (Map Scale)":"Map Scale (縮尺)",document.getElementById("foldHelpTitle").textContent=i?"操作ガイド (How to drive)":"How to drive (操作ガイド)";const t=document.getElementById("tipsContainer"),e=i?["W/A/S/D または 矢印キー : 運転 (Drive)","Q / E : 左右ウインカー (Signals) · H : ハザード","Space : サイドブレーキ (Handbrake)","Shift / Ctrl : ギア変更 (Shift Gear)","Z / X : 左右の安全確認 (Look Left/Right)","O : 車両リセット (Reset)","V : カメラ視点切替 (Cycle Views)"]:["W/A/S/D or Arrow Keys : Drive (運転)","Q / E : Turn Signals (ウインカー) · H : Hazard","Space : Handbrake (サイドブレーキ)","Shift / Ctrl : Shift Gear (ギア変更)","Z / X : Look Left & Right (左右安全確認)","O : Reset Vehicle (リセット)","V : Cycle Views (視点切替)"];t.innerHTML=e.map(s=>`<span>${s}</span>`).join(""),document.getElementById("helpMiniMapText").textContent=i?"右下のミニマップをクリックで拡大表示し、コース上の任意の場所をクリックするとそこへ車両がワープします。":"Click the mini map in the bottom-right corner to expand it, drag to pan, scroll to zoom, or click any spot to teleport the vehicle.",document.getElementById("foldDataTitle").textContent=i?"走行データ (Driving details)":"Driving details (走行データ)",document.getElementById("lblTelView").textContent=i?"視点 (View):":"View (視点):",document.getElementById("lblTelPos").textContent=i?"位置 (Position):":"Position (位置):",document.getElementById("lblTelHead").textContent=i?"方位 (Heading):":"Heading (方位):",document.getElementById("lblTelSteer").textContent=i?"舵角 (Steering):":"Steering (舵角):",document.getElementById("foldCoursesTitle").textContent=i?"試験場・教習コース一覧 (Built-in Test Center Courses)":"Built-in Test Center Courses (試験場コース一覧)";const n={chase:i?"後方 (Chase)":"Chase (後方)",cockpit:i?"運転席 (Cockpit)":"Cockpit (運転席)",hood:i?"ボンネット (Hood)":"Hood (ボンネット)",orbit:i?"自由 (Free)":"Free (自由)"};Sl.forEach(s=>{const r=s.dataset.viewTarget||"chase";s.textContent=n[r]||r}),document.getElementById("lblMirrorL").textContent=i?"左ミラー · Left":"Left Mirror · 左",document.getElementById("lblMirrorC").textContent=i?"ルームミラー · Center":"Center Mirror · 中央",document.getElementById("lblMirrorR").textContent=i?"右ミラー · Right":"Right Mirror · 右",document.getElementById("cockpitLampLeft").textContent=i?"← 左合図 (Left)":"← Left (左)",document.getElementById("cockpitLampRight").textContent=i?"右合図 (Right) →":"Right (右) →",document.getElementById("lblHudSignal").textContent=i?"合図 (Signal):":"Signal (合図):",document.getElementById("lblMiniMap").textContent=i?"ミニマップ · Mini Map":"Mini Map · ミニマップ",document.getElementById("lblMiniMapHint").textContent=i?"ドラッグで移動・ホイールで拡大・地点クリックでワープ (Click any point to teleport)":"Hold and drag to pan. Wheel to zoom. Click any point on the course to teleport there.",document.getElementById("firstRunTitle").textContent=i?"運転をはじめましょう (Start driving)":"Start driving (運転をはじめましょう)",document.getElementById("firstRunText").textContent=i?"WASD/矢印キーで走行、Q/Eでウインカー、Spaceでブレーキ、Z/Xで左右目視、Vで視点切替、Oでリセット。":"WASD or arrow keys drive, Q/E signals, Space brakes, Z/X look left & right, V changes view, O resets.",document.getElementById("lblMobileSteerHint").textContent=i?"← 左右スワイプで操舵 (Swipe) →":"← Swipe to steer (スワイプ操舵) →",document.getElementById("lblMobileSigL").textContent=i?"↑ 左 (L)":"↑ Left",document.getElementById("lblMobileSigR").textContent=i?"右 (R) ↓":"Right ↓",document.getElementById("lblMobileGear").textContent=i?"ギア (Gear)":"Gear",document.getElementById("lblMobileBrake").textContent=i?"ブレーキ":"Brake",document.getElementById("lblMobileThrottle").textContent=i?"アクセル":"Throttle",Al(),Tl(be.getMode())}function to(i){Ee.unlock(),Ut.locale=i,Vn(Ut),mu()}document.getElementById("quickLangEnBtn").addEventListener("click",()=>to("en"));document.getElementById("quickLangJaBtn").addEventListener("click",()=>to("ja"));document.getElementById("panelLangEnBtn").addEventListener("click",()=>to("en"));document.getElementById("panelLangJaBtn").addEventListener("click",()=>to("ja"));H_().then(async i=>{i&&(Ie=i,await ni.loadFromDataUrl(i.imageDataUrl,i.mapWidth),Al())});mu();bn(!0);window.addEventListener("resize",()=>{nn.setSize(window.innerWidth,window.innerHeight),be.resize(window.innerWidth/window.innerHeight)});const qx=()=>({y:0,slopeX:0,slopeZ:0}),Yi=1/120;let Wo=0,Kc=performance.now(),qi=0,Qc=-999;function gu(i){requestAnimationFrame(gu);const t=Math.min(.05,Math.max(0,(i-Kc)/1e3));Kc=i,Wo+=t;const n={...Jh(Ut.vehicleKind),maxSpeedMs:Gr},s=pu.getInputState(),r={...s,throttle:s.throttle>0?Math.pow(s.throttle,yi):0};hs||su(s.throttle);let o=Hc(Rt,n);for(;Wo>=Yi;)qi+=Yi,Ar.update(Yi),Y_(Rt,r,n,Yi,{steeringSensitivity:Ut.steeringSensitivity,autoCenterSteering:Ut.autoCenterSteering,simTimeSec:qi},On==="custom"?qx:void 0),On==="kyoshujo"&&(o=Hc(Rt,n),(o.pushX!==0||o.pushZ!==0)&&(Rt.x+=o.pushX,Rt.z+=o.pushZ,q_(Rt,n),(o.poleHit||o.obstacleHit)&&(Rt.speedMs*=.35,qi-Qc>.6&&(Qc=qi,Ee.playThud()))),je.update(Yi,Rt,o,Ar)),Wo-=Yi;const a=je.getCurrentWaypoint(),c=a?{x:a.x,z:a.z}:null;dx(dn,Rt,Ut.vehicleKind),Xs.updateShadowFocus(Rt.x,Rt.z),Xs.updateDynamic(Ar,c,qi);const l=Ar.getRailroadState();Ee.update(Rt,On==="kyoshujo"&&l.isWarningActive,qi);const h=Math.abs(Rt.speedMs),u=Math.pow(Ae.clamp((h-6)/14,0,1),1.8);bx.style.opacity=(u*.75).toFixed(3),Tx.style.opacity=(u*.88).toFixed(3),be.update(t,Rt,Ut.vehicleKind,dn,nn,kn);const p=!hs||ri;be.renderPiPMirrors(nn,kn,Rt,xx,vx,Mx,p);const g=On==="kyoshujo"?{width:Mi*2,height:Ji*2}:ni.currentSize;be.renderPiPMiniMap(nn,kn,Je,Rt,g,ri,Wr,Ml,yl),nn.setViewport(0,0,window.innerWidth,window.innerHeight),nn.setScissorTest(!1),nn.render(kn,be.camera);const _=Ut.locale==="ja";Ax.textContent=(h*3.6).toFixed(1),Rx.textContent=Rt.gear,Px.textContent=`${Rt.x.toFixed(1)}, ${Rt.z.toFixed(1)}`;const v=Ae.radToDeg(Rt.heading);Lx.textContent=`${v.toFixed(1)}° / ${Rt.heading.toFixed(4)} rad`;const m=Math.round(Ae.radToDeg(Rt.steeringWheelRad));Ix.textContent=String(m),wx.style.transform=`rotate(${-Rt.steeringWheelRad}rad)`;const f=Rt.blinkerOn&&(Rt.blinker==="left"||Rt.blinker==="hazard"),y=Rt.blinkerOn&&(Rt.blinker==="right"||Rt.blinker==="hazard");Sx.classList.toggle("is-active",f),Ex.classList.toggle("is-active",y),Dx.dataset.signal=Rt.blinker,Ux.textContent=Rt.blinker==="left"?_?"左合図":"Left":Rt.blinker==="right"?_?"右合図":"Right":Rt.blinker==="hazard"?"Hazard":"Off",Yc.textContent=String(je.getScore()),Yc.className=`score-num ${je.getScore()<70?"danger":""}`;const M=je.getMode()==="exam";Nx.textContent=M?Un(Ut.locale,"modeExam"):Un(Ut.locale,"modePractice");const x=je.getWaypointProgress();if(On==="custom"){const S=Vr.find(E=>E.id===En);Ho.textContent=S?_?`${S.nameJa} コース練習中`:`Practicing: ${S.nameEn}`:_?"カスタム地図コース走行中":"Driving custom course map"}else if(a)Ho.textContent=`[${x.current+1}/${x.total}] ${_?a.instructionJa:a.instructionEn}`;else{const S=Qh[cs];Ho.textContent=`${_?S.titleJa:S.titleEn}: ${_?S.descJa:S.descEn}`}Ox.hidden=!Rt.stalled,["FL","FR","RL","RR"].forEach(S=>{const E=o.wheels[S],R=Fx[S];R.classList.toggle("mount",E.curbMount),R.classList.toggle("touch",!E.curbMount&&E.curbTouch),R.classList.toggle("close",!E.curbMount&&!E.curbTouch&&E.proximity>.35)})}requestAnimationFrame(gu);
