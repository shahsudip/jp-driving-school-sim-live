var id=Object.defineProperty;var sd=(i,t,e)=>t in i?id(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Mt=(i,t,e)=>sd(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vl="180",cs={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rd=0,oc=1,od=2,Ch=1,Ph=2,Wn=3,fi=0,qe=1,Re=2,ui=0,hs=1,ac=2,lc=3,cc=4,ad=5,Ti=100,ld=101,cd=102,hd=103,ud=104,dd=200,fd=201,pd=202,md=203,ha=204,ua=205,gd=206,_d=207,vd=208,xd=209,Md=210,yd=211,Sd=212,Ed=213,bd=214,da=0,fa=1,pa=2,gs=3,ma=4,ga=5,_a=6,va=7,Lh=0,wd=1,Td=2,di=0,Ad=1,Rd=2,Cd=3,Pd=4,Ld=5,Id=6,Dd=7,Ih=300,_s=301,vs=302,xa=303,Ma=304,po=306,Zs=1e3,Ci=1001,ya=1002,yn=1003,Nd=1004,mr=1005,Cn=1006,wo=1007,Pi=1008,Un=1009,Dh=1010,Nh=1011,js=1012,xl=1013,Ni=1014,qn=1015,Ts=1016,Ml=1017,yl=1018,Ks=1020,Uh=35902,kh=35899,Fh=1021,Oh=1022,vn=1023,Qs=1026,tr=1027,Bh=1028,Sl=1029,zh=1030,El=1031,bl=1033,qr=33776,Jr=33777,Zr=33778,jr=33779,Sa=35840,Ea=35841,ba=35842,wa=35843,Ta=36196,Aa=37492,Ra=37496,Ca=37808,Pa=37809,La=37810,Ia=37811,Da=37812,Na=37813,Ua=37814,ka=37815,Fa=37816,Oa=37817,Ba=37818,za=37819,Ha=37820,Va=37821,Ga=36492,Wa=36494,Xa=36495,$a=36283,Ya=36284,qa=36285,Ja=36286,Ud=3200,kd=3201,Hh=0,Fd=1,li="",Me="srgb",xs="srgb-linear",Qr="linear",de="srgb",Hi=7680,hc=519,Od=512,Bd=513,zd=514,Vh=515,Hd=516,Vd=517,Gd=518,Wd=519,Za=35044,uc="300 es",Pn=2e3,to=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dc=1234567;const Ws=Math.PI/180,er=180/Math.PI;function Nn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function Qt(i,t,e){return Math.max(t,Math.min(e,i))}function wl(i,t){return(i%t+t)%t}function Xd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function $d(i,t,e){return i!==t?(e-i)/(t-i):0}function Xs(i,t,e){return(1-e)*i+e*t}function Yd(i,t,e,n){return Xs(i,t,1-Math.exp(-e*n))}function qd(i,t=1){return t-Math.abs(wl(i,t*2)-t)}function Jd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Zd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Kd(i,t){return i+Math.random()*(t-i)}function Qd(i){return i*(.5-Math.random())}function tf(i){i!==void 0&&(dc=i);let t=dc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ef(i){return i*Ws}function nf(i){return i*er}function sf(i){return(i&i-1)===0&&i!==0}function rf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function of(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function af(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),g=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*d,a*l);break;case"YZY":i.set(c*d,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*d,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*g,a*l);break;case"YXY":i.set(c*g,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*g,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Se={DEG2RAD:Ws,RAD2DEG:er,generateUUID:Nn,clamp:Qt,euclideanModulo:wl,mapLinear:Xd,inverseLerp:$d,lerp:Xs,damp:Yd,pingpong:qd,smoothstep:Jd,smootherstep:Zd,randInt:jd,randFloat:Kd,randFloatSpread:Qd,seededRandom:tf,degToRad:ef,radToDeg:nf,isPowerOfTwo:sf,ceilPowerOfTwo:rf,floorPowerOfTwo:of,setQuaternionFromProperEuler:af,normalize:he,denormalize:_n};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ui{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],g=r[o+1],_=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=g,t[e+2]=_,t[e+3]=x;return}if(u!==x||c!==d||l!==g||h!==_){let m=1-a;const p=c*d+l*g+h*_+u*x,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const y=Math.sqrt(M),b=Math.atan2(y,p*S);m=Math.sin(m*b)/y,a=Math.sin(a*b)/y}const v=a*S;if(c=c*m+d*v,l=l*m+g*v,h=h*m+_*v,u=u*m+x*v,m===1-a){const y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],g=r[o+2],_=r[o+3];return t[e]=a*_+h*u+c*g-l*d,t[e+1]=c*_+h*d+l*u-a*g,t[e+2]=l*_+h*g+a*d-c*u,t[e+3]=h*_-a*u-c*d-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),g=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*g*_,this._y=l*g*u-d*h*_,this._z=l*h*_+d*g*u,this._w=l*h*u-d*g*_;break;case"YXZ":this._x=d*h*u+l*g*_,this._y=l*g*u-d*h*_,this._z=l*h*_-d*g*u,this._w=l*h*u+d*g*_;break;case"ZXY":this._x=d*h*u-l*g*_,this._y=l*g*u+d*h*_,this._z=l*h*_+d*g*u,this._w=l*h*u-d*g*_;break;case"ZYX":this._x=d*h*u-l*g*_,this._y=l*g*u+d*h*_,this._z=l*h*_-d*g*u,this._w=l*h*u+d*g*_;break;case"YZX":this._x=d*h*u+l*g*_,this._y=l*g*u+d*h*_,this._z=l*h*_-d*g*u,this._w=l*h*u-d*g*_;break;case"XZY":this._x=d*h*u-l*g*_,this._y=l*g*u-d*h*_,this._z=l*h*_+d*g*u,this._w=l*h*u+d*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(r-l)*g,this._z=(o-s)*g}else if(n>a&&n>u){const g=2*Math.sqrt(1+n-a-u);this._w=(h-c)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+l)/g}else if(a>u){const g=2*Math.sqrt(1+a-n-u);this._w=(r-l)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+u-n-a);this._w=(o-s)/g,this._x=(r+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return To.copy(this).projectOnVector(t),this.sub(To)}reflect(t){return this.sub(To.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const To=new D,fc=new Ui;class Kt{constructor(t,e,n,s,r,o,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],g=n[5],_=n[8],x=s[0],m=s[3],p=s[6],S=s[1],M=s[4],v=s[7],y=s[2],b=s[5],T=s[8];return r[0]=o*x+a*S+c*y,r[3]=o*m+a*M+c*b,r[6]=o*p+a*v+c*T,r[1]=l*x+h*S+u*y,r[4]=l*m+h*M+u*b,r[7]=l*p+h*v+u*T,r[2]=d*x+g*S+_*y,r[5]=d*m+g*M+_*b,r[8]=d*p+g*v+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,g=l*r-o*c,_=e*u+n*d+s*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=d*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=g*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ao.makeScale(t,e)),this}rotate(t){return this.premultiply(Ao.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ao.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new Kt;function Gh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function eo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){const i=eo("canvas");return i.style.display="block",i}const pc={};function nr(i){i in pc||(pc[i]=!0,console.warn(i))}function cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const mc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){const i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:Qr,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:de,toXYZ:mc,fromXYZ:gc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}const le=hf();function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class uf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vi===void 0&&(Vi=eo("canvas")),Vi.width=t.width,Vi.height=t.height;const s=Vi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let df=0;class Tl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:df++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ro(s[o].image)):r.push(Ro(s[o]))}else r=Ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;const Co=new D;class He extends Bi{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Ci,s=Ci,r=Cn,o=Pi,a=vn,c=Un,l=He.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Nn(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case ya:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case ya:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Ih;He.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],g=c[5],_=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(g+1)/2,y=(p+1)/2,b=(h+d)/4,T=(u+x)/4,C=(_+m)/4;return M>v&&M>y?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=b/n,r=T/n):v>y?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=b/s,r=C/s):y<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(y),n=T/r,s=C/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+g+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Qt(this.x,t.x,e.x),this.y=Qt(this.y,t.y,e.y),this.z=Qt(this.z,t.z,e.z),this.w=Qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Qt(this.x,t,e),this.y=Qt(this.y,t,e),this.z=Qt(this.z,t,e),this.w=Qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pf extends Bi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new He(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Tl(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends pf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Wh extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class mf extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=yn,this.minFilter=yn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),_r.subVectors(this.max,Is),Gi.subVectors(t.a,Is),Wi.subVectors(t.b,Is),Xi.subVectors(t.c,Is),ei.subVectors(Wi,Gi),ni.subVectors(Xi,Wi),vi.subVectors(Gi,Xi);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-vi.z,vi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,vi.z,0,-vi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-vi.y,vi.x,0];return!Po(e,Gi,Wi,Xi,_r)||(e=[1,0,0,0,1,0,0,0,1],!Po(e,Gi,Wi,Xi,_r))?!1:(vr.crossVectors(ei,ni),e=[vr.x,vr.y,vr.z],Po(e,Gi,Wi,Xi,_r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Bn=[new D,new D,new D,new D,new D,new D,new D,new D],fn=new D,gr=new cr,Gi=new D,Wi=new D,Xi=new D,ei=new D,ni=new D,vi=new D,Is=new D,_r=new D,vr=new D,xi=new D;function Po(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){xi.fromArray(i,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),c=t.dot(xi),l=e.dot(xi),h=n.dot(xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const gf=new cr,Ds=new D,Lo=new D;class Al{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):gf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Lo)),this.expandByPoint(Ds.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zn=new D,Io=new D,xr=new D,ii=new D,Do=new D,Mr=new D,No=new D;class Xh{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Io.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(Io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=ii.dot(this.direction),c=-ii.dot(xr),l=ii.lengthSq(),h=Math.abs(1-o*o);let u,d,g,_;if(h>0)if(u=o*c-a,d=o*a-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const x=1/h;u*=x,d*=x,g=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),g=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),g=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),g=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),g=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),g=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Io).addScaledVector(xr,d),g}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){Do.subVectors(e,t),Mr.subVectors(n,t),No.crossVectors(Do,Mr);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);const c=a*this.direction.dot(Mr.crossVectors(ii,Mr));if(c<0)return null;const l=a*this.direction.dot(Do.cross(ii));if(l<0||c+l>o)return null;const h=-a*ii.dot(No);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,n,s,r,o,a,c,l,h,u,d,g,_,x,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,g,_,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,g,_,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=g,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/$i.setFromMatrixColumn(t,0).length(),r=1/$i.setFromMatrixColumn(t,1).length(),o=1/$i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,g=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=g+_*l,e[5]=d-x*l,e[9]=-a*c,e[2]=x-d*l,e[6]=_+g*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,g=c*u,_=l*h,x=l*u;e[0]=d+x*a,e[4]=_*a-g,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=g*a-_,e[6]=x+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,g=c*u,_=l*h,x=l*u;e[0]=d-x*a,e[4]=-o*u,e[8]=_+g*a,e[1]=g+_*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,g=o*u,_=a*h,x=a*u;e[0]=c*h,e[4]=_*l-g,e[8]=d*l+x,e[1]=c*u,e[5]=x*l+d,e[9]=g*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=x-d*u,e[8]=_*u+g,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=g*u+_,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*c,g=o*l,_=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+x,e[5]=o*h,e[9]=g*u-_,e[2]=_*u-g,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,vf)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),si.crossVectors(n,je),si.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),si.crossVectors(n,je)),si.normalize(),yr.crossVectors(je,si),s[0]=si.x,s[4]=yr.x,s[8]=je.x,s[1]=si.y,s[5]=yr.y,s[9]=je.y,s[2]=si.z,s[6]=yr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],g=n[13],_=n[2],x=n[6],m=n[10],p=n[14],S=n[3],M=n[7],v=n[11],y=n[15],b=s[0],T=s[4],C=s[8],w=s[12],E=s[1],I=s[5],k=s[9],z=s[13],Z=s[2],W=s[6],J=s[10],et=s[14],X=s[3],gt=s[7],pt=s[11],Et=s[15];return r[0]=o*b+a*E+c*Z+l*X,r[4]=o*T+a*I+c*W+l*gt,r[8]=o*C+a*k+c*J+l*pt,r[12]=o*w+a*z+c*et+l*Et,r[1]=h*b+u*E+d*Z+g*X,r[5]=h*T+u*I+d*W+g*gt,r[9]=h*C+u*k+d*J+g*pt,r[13]=h*w+u*z+d*et+g*Et,r[2]=_*b+x*E+m*Z+p*X,r[6]=_*T+x*I+m*W+p*gt,r[10]=_*C+x*k+m*J+p*pt,r[14]=_*w+x*z+m*et+p*Et,r[3]=S*b+M*E+v*Z+y*X,r[7]=S*T+M*I+v*W+y*gt,r[11]=S*C+M*k+v*J+y*pt,r[15]=S*w+M*z+v*et+y*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],g=t[14],_=t[3],x=t[7],m=t[11],p=t[15];return _*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*g-n*c*g)+x*(+e*c*g-e*l*d+r*o*d-s*o*g+s*l*h-r*c*h)+m*(+e*l*u-e*a*g-r*o*u+n*o*g+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],g=t[11],_=t[12],x=t[13],m=t[14],p=t[15],S=u*m*l-x*d*l+x*c*g-a*m*g-u*c*p+a*d*p,M=_*d*l-h*m*l-_*c*g+o*m*g+h*c*p-o*d*p,v=h*x*l-_*u*l+_*a*g-o*x*g-h*a*p+o*u*p,y=_*u*c-h*x*c-_*a*d+o*x*d+h*a*m-o*u*m,b=e*S+n*M+s*v+r*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=S*T,t[1]=(x*d*r-u*m*r-x*s*g+n*m*g+u*s*p-n*d*p)*T,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*g-n*c*g)*T,t[4]=M*T,t[5]=(h*m*r-_*d*r+_*s*g-e*m*g-h*s*p+e*d*p)*T,t[6]=(_*c*r-o*m*r-_*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*g+e*c*g)*T,t[8]=v*T,t[9]=(_*u*r-h*x*r-_*n*g+e*x*g+h*n*p-e*u*p)*T,t[10]=(o*x*r-_*a*r+_*n*l-e*x*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*g-e*a*g)*T,t[12]=y*T,t[13]=(h*x*s-_*u*s+_*n*d-e*x*d-h*n*m+e*u*m)*T,t[14]=(_*a*s-o*x*s-_*n*c+e*x*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,g=r*h,_=r*u,x=o*h,m=o*u,p=a*u,S=c*l,M=c*h,v=c*u,y=n.x,b=n.y,T=n.z;return s[0]=(1-(x+p))*y,s[1]=(g+v)*y,s[2]=(_-M)*y,s[3]=0,s[4]=(g-v)*b,s[5]=(1-(d+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(_+M)*T,s[9]=(m-S)*T,s[10]=(1-(d+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=$i.set(s[0],s[1],s[2]).length();const o=$i.set(s[4],s[5],s[6]).length(),a=$i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const l=1/r,h=1/o,u=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Pn,c=!1){const l=this.elements,h=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s);let _,x;if(c)_=r/(o-r),x=o*r/(o-r);else if(a===Pn)_=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===to)_=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn,c=!1){const l=this.elements,h=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s);let _,x;if(c)_=1/(o-r),x=o/(o-r);else if(a===Pn)_=-2/(o-r),x=-(o+r)/(o-r);else if(a===to)_=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $i=new D,pn=new ve,_f=new D(0,0,0),vf=new D(1,1,1),si=new D,yr=new D,je=new D,_c=new ve,vc=new Ui;class kn{constructor(t=0,e=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _c.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_c,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xf=0;const xc=new D,Yi=new Ui,Hn=new ve,Sr=new D,Ns=new D,Mf=new D,yf=new Ui,Mc=new D(1,0,0),yc=new D(0,1,0),Sc=new D(0,0,1),Ec={type:"added"},Sf={type:"removed"},qi={type:"childadded",child:null},Uo={type:"childremoved",child:null};class Ue extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ue.DEFAULT_UP.clone();const t=new D,e=new kn,n=new Ui,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(yc,t)}rotateZ(t){return this.rotateOnAxis(Sc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(yc,t)}translateZ(t){return this.translateOnAxis(Sc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Sr.copy(t):Sr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ns,Sr,this.up):Hn.lookAt(Sr,Ns,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),qi.child=t,this.dispatchEvent(qi),qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,Mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,yf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),g=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ue.DEFAULT_UP=new D(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,Vn=new D,ko=new D,Gn=new D,Ji=new D,Zi=new D,bc=new D,Fo=new D,Oo=new D,Bo=new D,zo=new ge,Ho=new ge,Vo=new ge;class un{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Vn.subVectors(n,e),ko.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Vn),c=mn.dot(ko),l=Vn.dot(Vn),h=Vn.dot(ko),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,g=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-g-_,_,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return zo.setScalar(0),Ho.setScalar(0),Vo.setScalar(0),zo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Vo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(zo,r.x),o.addScaledVector(Ho,r.y),o.addScaledVector(Vo,r.z),o}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Vn.subVectors(t,e),mn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),mn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ji.subVectors(s,n),Zi.subVectors(r,n),Fo.subVectors(t,n);const c=Ji.dot(Fo),l=Zi.dot(Fo);if(c<=0&&l<=0)return e.copy(n);Oo.subVectors(t,s);const h=Ji.dot(Oo),u=Zi.dot(Oo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ji,o);Bo.subVectors(t,r);const g=Ji.dot(Bo),_=Zi.dot(Bo);if(_>=0&&g<=_)return e.copy(r);const x=g*l-c*_;if(x<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(Zi,a);const m=h*_-g*u;if(m<=0&&u-h>=0&&g-_>=0)return bc.subVectors(r,s),a=(u-h)/(u-h+(g-_)),e.copy(s).addScaledVector(bc,a);const p=1/(m+x+d);return o=x*p,a=d*p,e.copy(n).addScaledVector(Ji,o).addScaledVector(Zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Go(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=wl(t,1),e=Qt(e,0,1),n=Qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Go(o,r,t+1/3),this.g=Go(o,r,t),this.b=Go(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const n=Yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return le.workingToColorSpace(Fe.copy(this),t),Math.round(Qt(Fe.r*255,0,255))*65536+Math.round(Qt(Fe.g*255,0,255))*256+Math.round(Qt(Fe.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Me){le.workingToColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(Er);const n=Xs(ri.h,Er.h,e),s=Xs(ri.s,Er.s,e),r=Xs(ri.l,Er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new ee;ee.NAMES=Yh;let Ef=0;class As extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=hs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ha,this.blendDst=ua,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ha&&(n.blendSrc=this.blendSrc),this.blendDst!==ua&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Oe extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new D,br=new dt;let bf=0;class Sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Za,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Za&&(t.usage=this.usage),t}}class qh extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Jh extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wf=0;const rn=new ve,Wo=new Ue,ji=new D,Ke=new cr,Us=new cr,Ne=new D;class _e extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Gh(t)?Jh:qh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Wo.lookAt(t),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Al);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Us.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(Ke.min,Us.min),Ke.expandByPoint(Ne),Ne.addVectors(Ke.max,Us.max),Ke.expandByPoint(Ne)):(Ke.expandByPoint(Us.min),Ke.expandByPoint(Us.max))}Ke.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ne.fromBufferAttribute(a,l),c&&(ji.fromBufferAttribute(t,l),Ne.add(ji)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new D,c[C]=new D;const l=new D,h=new D,u=new D,d=new dt,g=new dt,_=new dt,x=new D,m=new D;function p(C,w,E){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,E),d.fromBufferAttribute(r,C),g.fromBufferAttribute(r,w),_.fromBufferAttribute(r,E),h.sub(l),u.sub(l),g.sub(d),_.sub(d);const I=1/(g.x*_.y-_.x*g.y);isFinite(I)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(I),m.copy(u).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(I),a[C].add(x),a[w].add(x),a[E].add(x),c[C].add(m),c[w].add(m),c[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let C=0,w=S.length;C<w;++C){const E=S[C],I=E.start,k=E.count;for(let z=I,Z=I+k;z<Z;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new D,v=new D,y=new D,b=new D;function T(C){y.fromBufferAttribute(s,C),b.copy(y);const w=a[C];M.copy(w),M.sub(y.multiplyScalar(y.dot(w))).normalize(),v.crossVectors(b,w);const I=v.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,I)}for(let C=0,w=S.length;C<w;++C){const E=S[C],I=E.start,k=E.count;for(let z=I,Z=I+k;z<Z;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let d=0,g=t.count;d<g;d+=3){const _=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let g=0,_=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?g=c[x]*a.data.stride+a.offset:g=c[x]*h;for(let p=0;p<h;p++)d[_++]=l[g++]}return new Sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new _e,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],g=t(d,n);c.push(g)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const g=l[u];h.push(g.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,g=u.length;d<g;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wc=new ve,Mi=new Xh,wr=new Al,Tc=new D,Tr=new D,Ar=new D,Rr=new D,Xo=new D,Cr=new D,Ac=new D,Pr=new D;class ut extends Ue{constructor(t=new _e,e=new Oe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Xo.fromBufferAttribute(u,t),o?Cr.addScaledVector(Xo,h):Cr.addScaledVector(Xo.sub(e),h))}e.add(Cr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(wr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(wr,Tc)===null||Mi.origin.distanceToSquared(Tc)>(t.far-t.near)**2))&&(wc.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(wc),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,g.start),M=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let v=S,y=M;v<y;v+=3){const b=a.getX(v),T=a.getX(v+1),C=a.getX(v+2);s=Lr(this,p,t,n,l,h,u,b,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(a.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const S=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Lr(this,o,t,n,l,h,u,S,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,x=d.length;_<x;_++){const m=d[_],p=o[m.materialIndex],S=Math.max(m.start,g.start),M=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let v=S,y=M;v<y;v+=3){const b=v,T=v+1,C=v+2;s=Lr(this,p,t,n,l,h,u,b,T,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,g.start),x=Math.min(c.count,g.start+g.count);for(let m=_,p=x;m<p;m+=3){const S=m,M=m+1,v=m+2;s=Lr(this,o,t,n,l,h,u,S,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Tf(i,t,e,n,s,r,o,a){let c;if(t.side===qe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===fi,a),c===null)return null;Pr.copy(a),Pr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Pr);return l<e.near||l>e.far?null:{distance:l,point:Pr.clone(),object:i}}function Lr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Tr),i.getVertexPosition(c,Ar),i.getVertexPosition(l,Rr);const h=Tf(i,t,e,n,Tr,Ar,Rr,Ac);if(h){const u=new D;un.getBarycoord(Ac,Tr,Ar,Rr,u),s&&(h.uv=un.getInterpolatedAttribute(s,a,c,l,u,new dt)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,c,l,u,new dt)),o&&(h.normal=un.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new D,materialIndex:0};un.getNormal(Tr,Ar,Rr,d.normal),h.face=d,h.barycoord=u}return h}class Wt extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,g=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function _(x,m,p,S,M,v,y,b,T,C,w){const E=v/T,I=y/C,k=v/2,z=y/2,Z=b/2,W=T+1,J=C+1;let et=0,X=0;const gt=new D;for(let pt=0;pt<J;pt++){const Et=pt*I-z;for(let kt=0;kt<W;kt++){const qt=kt*E-k;gt[x]=qt*S,gt[m]=Et*M,gt[p]=Z,l.push(gt.x,gt.y,gt.z),gt[x]=0,gt[m]=0,gt[p]=b>0?1:-1,h.push(gt.x,gt.y,gt.z),u.push(kt/T),u.push(1-pt/C),et+=1}}for(let pt=0;pt<C;pt++)for(let Et=0;Et<T;Et++){const kt=d+Et+W*pt,qt=d+Et+W*(pt+1),ne=d+(Et+1)+W*(pt+1),Zt=d+(Et+1)+W*pt;c.push(kt,qt,Zt),c.push(qt,ne,Zt),X+=6}a.addGroup(g,X,w),g+=X,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=Ms(i[e]);for(const s in n)t[s]=n[s]}return t}function Af(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const jh={clone:Ms,merge:We};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Kh extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new D,Rc=new dt,Cc=new dt;class Be extends Kh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Rc,Cc),e.subVectors(Cc,Rc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ws*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ki=-90,Qi=1;class Pf extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Be(Ki,Qi,t,e);s.layers=this.layers,this.add(s);const r=new Be(Ki,Qi,t,e);r.layers=this.layers,this.add(r);const o=new Be(Ki,Qi,t,e);o.layers=this.layers,this.add(o);const a=new Be(Ki,Qi,t,e);a.layers=this.layers,this.add(a);const c=new Be(Ki,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Be(Ki,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,g),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Qh extends He{constructor(t=[],e=_s,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lf extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Qh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:ui});r.uniforms.tEquirect.value=e;const o=new ut(s,r),a=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Cn),new Pf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class jt extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const If={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),g=.02,_=.005;l.inputState.pinching&&d>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(If)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new Rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Df extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Nf{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Za,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new D;class no{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new no(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cl extends As{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ts;const ks=new D,es=new D,ns=new D,is=new dt,Fs=new dt,tu=new ve,Ir=new D,Os=new D,Dr=new D,Pc=new dt,Yo=new dt,Lc=new dt;class eu extends Ue{constructor(t=new Cl){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new _e;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nf(e,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new no(n,3,0,!1)),ts.setAttribute("uv",new no(n,2,3,!1))}this.geometry=ts,this.material=t,this.center=new dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ns.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ns.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Nr(Ir.set(-.5,-.5,0),ns,o,es,s,r),Nr(Os.set(.5,-.5,0),ns,o,es,s,r),Nr(Dr.set(.5,.5,0),ns,o,es,s,r),Pc.set(0,0),Yo.set(1,0),Lc.set(1,1);let a=t.ray.intersectTriangle(Ir,Os,Dr,!1,ks);if(a===null&&(Nr(Os.set(-.5,.5,0),ns,o,es,s,r),Yo.set(0,1),a=t.ray.intersectTriangle(Ir,Dr,Os,!1,ks),a===null))return;const c=t.ray.origin.distanceTo(ks);c<t.near||c>t.far||e.push({distance:c,point:ks.clone(),uv:un.getInterpolation(ks,Ir,Os,Dr,Pc,Yo,Lc,new dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nr(i,t,e,n,s,r){is.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*is.x-s*is.y,Fs.y=s*is.x+r*is.y):Fs.copy(is),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(tu)}const qo=new D,Uf=new D,kf=new Kt;class Yn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qo.subVectors(n,e).cross(Uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||kf.getNormalMatrix(t),s=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Al,Ff=new dt(.5,.5),Ur=new D;class Pl{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],g=r[7],_=r[8],x=r[9],m=r[10],p=r[11],S=r[12],M=r[13],v=r[14],y=r[15];if(s[0].setComponents(l-o,g-h,p-_,y-S).normalize(),s[1].setComponents(l+o,g+h,p+_,y+S).normalize(),s[2].setComponents(l+a,g+u,p+x,y+M).normalize(),s[3].setComponents(l-a,g-u,p-x,y-M).normalize(),n)s[4].setComponents(c,d,m,v).normalize(),s[5].setComponents(l-c,g-d,p-m,y-v).normalize();else if(s[4].setComponents(l-c,g-d,p-m,y-v).normalize(),e===Pn)s[5].setComponents(l+c,g+d,p+m,y+v).normalize();else if(e===to)s[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){yi.center.set(0,0,0);const e=Ff.distanceTo(t.center);return yi.radius=.7071067811865476+e,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gn extends He{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nu extends He{constructor(t,e,n=Ni,s,r,o,a=yn,c=yn,l,h=Qs,u=1){if(h!==Qs&&h!==tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Tl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class iu extends He{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Di extends _e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new D,h=new dt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const g=n+u/e*s;l.x=t*Math.cos(g),l.y=t*Math.sin(g),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class oe extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],g=[];let _=0;const x=[],m=n/2;let p=0;S(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(g,2));function S(){const v=new D,y=new D;let b=0;const T=(e-t)/n;for(let C=0;C<=r;C++){const w=[],E=C/r,I=E*(e-t)+t;for(let k=0;k<=s;k++){const z=k/s,Z=z*c+a,W=Math.sin(Z),J=Math.cos(Z);y.x=I*W,y.y=-E*n+m,y.z=I*J,u.push(y.x,y.y,y.z),v.set(W,T,J).normalize(),d.push(v.x,v.y,v.z),g.push(z,1-E),w.push(_++)}x.push(w)}for(let C=0;C<s;C++)for(let w=0;w<r;w++){const E=x[w][C],I=x[w+1][C],k=x[w+1][C+1],z=x[w][C+1];(t>0||w!==0)&&(h.push(E,I,z),b+=3),(e>0||w!==r-1)&&(h.push(I,k,z),b+=3)}l.addGroup(p,b,0),p+=b}function M(v){const y=_,b=new dt,T=new D;let C=0;const w=v===!0?t:e,E=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*E,0),d.push(0,E,0),g.push(.5,.5),_++;const I=_;for(let k=0;k<=s;k++){const Z=k/s*c+a,W=Math.cos(Z),J=Math.sin(Z);T.x=w*J,T.y=m*E,T.z=w*W,u.push(T.x,T.y,T.z),d.push(0,E,0),b.x=W*.5+.5,b.y=J*.5*E+.5,g.push(b.x,b.y),_++}for(let k=0;k<s;k++){const z=y+k,Z=I+k;v===!0?h.push(Z,Z+1,z):h.push(Z+1,Z,z),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ds extends oe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ds(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ll extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new D,v=new D,y=new D;for(let b=0;b<e.length;b+=3)g(e[b+0],M),g(e[b+1],v),g(e[b+2],y),c(M,v,y,S)}function c(S,M,v,y){const b=y+1,T=[];for(let C=0;C<=b;C++){T[C]=[];const w=S.clone().lerp(v,C/b),E=M.clone().lerp(v,C/b),I=b-C;for(let k=0;k<=I;k++)k===0&&C===b?T[C][k]=w:T[C][k]=w.clone().lerp(E,k/I)}for(let C=0;C<b;C++)for(let w=0;w<2*(b-C)-1;w++){const E=Math.floor(w/2);w%2===0?(d(T[C][E+1]),d(T[C+1][E]),d(T[C][E])):(d(T[C][E+1]),d(T[C+1][E+1]),d(T[C+1][E]))}}function l(S){const M=new D;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(S),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const S=new D;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];const v=m(S)/2/Math.PI+.5,y=p(S)/Math.PI+.5;o.push(v,1-y)}_(),u()}function u(){for(let S=0;S<o.length;S+=6){const M=o[S+0],v=o[S+2],y=o[S+4],b=Math.max(M,v,y),T=Math.min(M,v,y);b>.9&&T<.1&&(M<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),y<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function g(S,M){const v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function _(){const S=new D,M=new D,v=new D,y=new D,b=new dt,T=new dt,C=new dt;for(let w=0,E=0;w<r.length;w+=9,E+=6){S.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),b.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),y.copy(S).add(M).add(v).divideScalar(3);const I=m(y);x(b,E+0,S,I),x(T,E+2,M,I),x(C,E+4,v,I)}}function x(S,M,v,y){y<0&&S.x===1&&(o[M]=S.x-1),v.x===0&&v.z===0&&(o[M]=y/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.vertices,t.indices,t.radius,t.details)}}class Il extends Ll{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Il(t.radius,t.detail)}}class Fn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,g=(o-h)/d;return(s+g)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new dt:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new D,s=[],r=[],o=[],a=new D,c=new ve;for(let g=0;g<=t;g++){const _=g/t;s[g]=this.getTangentAt(_,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=t;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Qt(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(c.makeRotationAxis(a,_))}o[g].crossVectors(s[g],r[g])}if(e===!0){let g=Math.acos(Qt(r[0].dot(r[t]),-1,1));g/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(g=-g);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],g*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Dl extends Fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new dt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,g=l-this.aY;c=d*h-g*u+this.aX,l=d*u+g*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Of extends Dl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,g=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,g*=h,s(o,a,d,g)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const kr=new D,Jo=new Nl,Zo=new Nl,jo=new Nl;class mo extends Fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(kr.subVectors(s[0],s[1]).add(s[0]),l=kr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(u),g),x=Math.pow(u.distanceToSquared(d),g),m=Math.pow(d.distanceToSquared(h),g);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Jo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,_,x,m),Zo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,_,x,m),jo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Zo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),jo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Jo.calc(c),Zo.calc(c),jo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Ic(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Bf(i,t){const e=1-i;return e*e*t}function zf(i,t){return 2*(1-i)*i*t}function Hf(i,t){return i*i*t}function $s(i,t,e,n){return Bf(i,t)+zf(i,e)+Hf(i,n)}function Vf(i,t){const e=1-i;return e*e*e*t}function Gf(i,t){const e=1-i;return 3*e*e*i*t}function Wf(i,t){return 3*(1-i)*i*i*t}function Xf(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return Vf(i,t)+Gf(i,e)+Wf(i,n)+Xf(i,s)}class su extends Fn{constructor(t=new dt,e=new dt,n=new dt,s=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $f extends Fn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y),Ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ru extends Fn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yf extends Fn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ou extends Fn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class au extends Fn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set($s(t,s.x,r.x,o.x),$s(t,s.y,r.y,o.y),$s(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class lu extends Fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Ic(a,c.x,l.x,h.x,u.x),Ic(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new dt().fromArray(s))}return this}}var io=Object.freeze({__proto__:null,ArcCurve:Of,CatmullRomCurve3:mo,CubicBezierCurve:su,CubicBezierCurve3:$f,EllipseCurve:Dl,LineCurve:ru,LineCurve3:Yf,QuadraticBezierCurve:ou,QuadraticBezierCurve3:au,SplineCurve:lu});class qf extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new io[s.type]().fromJSON(s))}return this}}class Dc extends qf{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ru(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new ou(this.currentPoint.clone(),new dt(t,e),new dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new su(this.currentPoint.clone(),new dt(t,e),new dt(n,s),new dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new lu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Dl(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class fs extends Dc{constructor(t){super(t),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Dc().fromJSON(s))}return this}}function Jf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=cu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tp(i,t,r,e)),i.length>80*e){a=1/0,c=1/0;let h=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const g=i[d],_=i[d+1];g<a&&(a=g),_<c&&(c=_),g>h&&(h=g),_>u&&(u=_)}l=Math.max(h-a,u-c),l=l!==0?32767/l:0}return ir(r,o,e,a,c,l,0),o}function cu(i,t,e,n,s){let r;if(s===up(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Nc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Nc(o/n|0,i[o],i[o+1],r);return r&&ys(r,r.next)&&(rr(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||we(e.prev,e,e.next)===0)){if(rr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ir(i,t,e,n,s,r,o){if(!i)return;!o&&r&&rp(i,n,s,r);let a=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?jf(i,n,s,r):Zf(i)){t.push(c.i,i.i,l.i),rr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Kf(ki(i),t),ir(i,t,e,n,s,r,2)):o===2&&Qf(i,t,e,n,s,r):ir(ki(i),t,e,n,s,r,1);break}}}function Zf(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),u=Math.min(a,c,l),d=Math.max(s,r,o),g=Math.max(a,c,l);let _=n.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=u&&_.y<=g&&zs(s,a,r,c,o,l,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function jf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(we(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,g=Math.min(a,c,l),_=Math.min(h,u,d),x=Math.max(a,c,l),m=Math.max(h,u,d),p=ja(g,_,t,e,n),S=ja(x,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=S;){if(M.x>=g&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&zs(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=g&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&zs(a,h,c,u,l,d,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=g&&M.x<=x&&M.y>=_&&M.y<=m&&M!==s&&M!==o&&zs(a,h,c,u,l,d,M.x,M.y)&&we(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=g&&v.x<=x&&v.y>=_&&v.y<=m&&v!==s&&v!==o&&zs(a,h,c,u,l,d,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Kf(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ys(n,s)&&uu(n,e,e.next,s)&&sr(n,s)&&sr(s,n)&&(t.push(n.i,e.i,s.i),rr(e),rr(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function Qf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lp(o,a)){let c=du(o,a);o=ki(o,o.next),c=ki(c,c.next),ir(o,t,e,n,s,r,0),ir(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function tp(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=cu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ap(l))}s.sort(ep);for(let r=0;r<s.length;r++)e=np(s[r],e);return e}function ep(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function np(i,t){const e=ip(i,t);if(!e)return t;const n=du(e,i);return ki(n,n.next),ki(e,e.next)}function ip(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,c=o.x,l=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&hu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);sr(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&sp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function sp(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function rp(i,t,e,n){let s=i;do s.z===0&&(s.z=ja(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,op(s)}function op(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ja(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ap(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function hu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function zs(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&hu(i,t,e,n,s,r,o,a)}function lp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!cp(i,t)&&(sr(i,t)&&sr(t,i)&&hp(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||ys(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function uu(i,t,e,n){const s=Or(we(i,t,e)),r=Or(we(i,t,n)),o=Or(we(e,n,i)),a=Or(we(e,n,t));return!!(s!==r&&o!==a||s===0&&Fr(i,e,t)||r===0&&Fr(i,n,t)||o===0&&Fr(e,i,n)||a===0&&Fr(e,t,n))}function Fr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Or(i){return i>0?1:i<0?-1:0}function cp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&uu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function sr(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function hp(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function du(i,t){const e=Ka(i.i,i.x,i.y),n=Ka(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nc(i,t,e,n){const s=Ka(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function rr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ka(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function up(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class dp{static triangulate(t,e,n=2){return Jf(t,e,n)}}class Jn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Jn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Uc(t),kc(n,t);let o=t.length;e.forEach(Uc);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,kc(n,e[c]);const a=dp.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Uc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class or extends _e{constructor(t=new fs([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:g-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:fp;let M,v=!1,y,b,T,C;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,y=p.computeFrenetFrames(h,!1),b=new D,T=new D,C=new D),d||(m=0,g=0,_=0,x=0);const w=a.extractPoints(l);let E=w.shape;const I=w.holes;if(!Jn.isClockWise(E)){E=E.reverse();for(let ot=0,st=I.length;ot<st;ot++){const rt=I[ot];Jn.isClockWise(rt)&&(I[ot]=rt.reverse())}}function z(ot){const rt=10000000000000001e-36;let U=ot[0];for(let $=1;$<=ot.length;$++){const G=$%ot.length,Q=ot[G],it=Q.x-U.x,ht=Q.y-U.y,R=it*it+ht*ht,f=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(U.x),Math.abs(U.y)),P=rt*f*f;if(R<=P){ot.splice(G,1),$--;continue}U=Q}}z(E),I.forEach(z);const Z=I.length,W=E;for(let ot=0;ot<Z;ot++){const st=I[ot];E=E.concat(st)}function J(ot,st,rt){return st||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(st,rt)}const et=E.length;function X(ot,st,rt){let U,$,G;const Q=ot.x-st.x,it=ot.y-st.y,ht=rt.x-ot.x,R=rt.y-ot.y,f=Q*Q+it*it,P=Q*R-it*ht;if(Math.abs(P)>Number.EPSILON){const L=Math.sqrt(f),B=Math.sqrt(ht*ht+R*R),O=st.x-it/L,lt=st.y+Q/L,tt=rt.x-R/B,St=rt.y+ht/B,ft=((tt-O)*R-(St-lt)*ht)/(Q*R-it*ht);U=O+Q*ft-ot.x,$=lt+it*ft-ot.y;const j=U*U+$*$;if(j<=2)return new dt(U,$);G=Math.sqrt(j/2)}else{let L=!1;Q>Number.EPSILON?ht>Number.EPSILON&&(L=!0):Q<-Number.EPSILON?ht<-Number.EPSILON&&(L=!0):Math.sign(it)===Math.sign(R)&&(L=!0),L?(U=-it,$=Q,G=Math.sqrt(f)):(U=Q,$=it,G=Math.sqrt(f/2))}return new dt(U/G,$/G)}const gt=[];for(let ot=0,st=W.length,rt=st-1,U=ot+1;ot<st;ot++,rt++,U++)rt===st&&(rt=0),U===st&&(U=0),gt[ot]=X(W[ot],W[rt],W[U]);const pt=[];let Et,kt=gt.concat();for(let ot=0,st=Z;ot<st;ot++){const rt=I[ot];Et=[];for(let U=0,$=rt.length,G=$-1,Q=U+1;U<$;U++,G++,Q++)G===$&&(G=0),Q===$&&(Q=0),Et[U]=X(rt[U],rt[G],rt[Q]);pt.push(Et),kt=kt.concat(Et)}let qt;if(m===0)qt=Jn.triangulateShape(W,I);else{const ot=[],st=[];for(let rt=0;rt<m;rt++){const U=rt/m,$=g*Math.cos(U*Math.PI/2),G=_*Math.sin(U*Math.PI/2)+x;for(let Q=0,it=W.length;Q<it;Q++){const ht=J(W[Q],gt[Q],G);Lt(ht.x,ht.y,-$),U===0&&ot.push(ht)}for(let Q=0,it=Z;Q<it;Q++){const ht=I[Q];Et=pt[Q];const R=[];for(let f=0,P=ht.length;f<P;f++){const L=J(ht[f],Et[f],G);Lt(L.x,L.y,-$),U===0&&R.push(L)}U===0&&st.push(R)}}qt=Jn.triangulateShape(ot,st)}const ne=qt.length,Zt=_+x;for(let ot=0;ot<et;ot++){const st=d?J(E[ot],kt[ot],Zt):E[ot];v?(T.copy(y.normals[0]).multiplyScalar(st.x),b.copy(y.binormals[0]).multiplyScalar(st.y),C.copy(M[0]).add(T).add(b),Lt(C.x,C.y,C.z)):Lt(st.x,st.y,0)}for(let ot=1;ot<=h;ot++)for(let st=0;st<et;st++){const rt=d?J(E[st],kt[st],Zt):E[st];v?(T.copy(y.normals[ot]).multiplyScalar(rt.x),b.copy(y.binormals[ot]).multiplyScalar(rt.y),C.copy(M[ot]).add(T).add(b),Lt(C.x,C.y,C.z)):Lt(rt.x,rt.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){const st=ot/m,rt=g*Math.cos(st*Math.PI/2),U=_*Math.sin(st*Math.PI/2)+x;for(let $=0,G=W.length;$<G;$++){const Q=J(W[$],gt[$],U);Lt(Q.x,Q.y,u+rt)}for(let $=0,G=I.length;$<G;$++){const Q=I[$];Et=pt[$];for(let it=0,ht=Q.length;it<ht;it++){const R=J(Q[it],Et[it],U);v?Lt(R.x,R.y+M[h-1].y,M[h-1].x+rt):Lt(R.x,R.y,u+rt)}}}nt(),ct();function nt(){const ot=s.length/3;if(d){let st=0,rt=et*st;for(let U=0;U<ne;U++){const $=qt[U];Dt($[2]+rt,$[1]+rt,$[0]+rt)}st=h+m*2,rt=et*st;for(let U=0;U<ne;U++){const $=qt[U];Dt($[0]+rt,$[1]+rt,$[2]+rt)}}else{for(let st=0;st<ne;st++){const rt=qt[st];Dt(rt[2],rt[1],rt[0])}for(let st=0;st<ne;st++){const rt=qt[st];Dt(rt[0]+et*h,rt[1]+et*h,rt[2]+et*h)}}n.addGroup(ot,s.length/3-ot,0)}function ct(){const ot=s.length/3;let st=0;_t(W,st),st+=W.length;for(let rt=0,U=I.length;rt<U;rt++){const $=I[rt];_t($,st),st+=$.length}n.addGroup(ot,s.length/3-ot,1)}function _t(ot,st){let rt=ot.length;for(;--rt>=0;){const U=rt;let $=rt-1;$<0&&($=ot.length-1);for(let G=0,Q=h+m*2;G<Q;G++){const it=et*G,ht=et*(G+1),R=st+U+it,f=st+$+it,P=st+$+ht,L=st+U+ht;$t(R,f,P,L)}}}function Lt(ot,st,rt){c.push(ot),c.push(st),c.push(rt)}function Dt(ot,st,rt){re(ot),re(st),re(rt);const U=s.length/3,$=S.generateTopUV(n,s,U-3,U-2,U-1);N($[0]),N($[1]),N($[2])}function $t(ot,st,rt,U){re(ot),re(st),re(U),re(st),re(rt),re(U);const $=s.length/3,G=S.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);N(G[0]),N(G[1]),N(G[3]),N(G[1]),N(G[2]),N(G[3])}function re(ot){s.push(c[ot*3+0]),s.push(c[ot*3+1]),s.push(c[ot*3+2])}function N(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return pp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new io[s.type]().fromJSON(s)),new or(n,t.options)}}const fp={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new dt(r,o),new dt(a,c),new dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],g=t[s*3+1],_=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new dt(o,1-c),new dt(l,1-u),new dt(d,1-_),new dt(x,1-p)]:[new dt(a,1-c),new dt(h,1-u),new dt(g,1-_),new dt(m,1-p)]}};function pp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ze extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,g=[],_=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*d-o;for(let M=0;M<l;M++){const v=M*u-r;_.push(v,-S,0),x.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const M=S+l*p,v=S+l*(p+1),y=S+1+l*(p+1),b=S+1+l*p;g.push(M,v,b),g.push(v,y,b)}this.setIndex(g),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ze(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ln extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,g=new D,_=new dt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){const p=r+m/n*o;g.x=u*Math.cos(p),g.y=u*Math.sin(p),c.push(g.x,g.y,g.z),l.push(0,0,1),_.x=(g.x/e+1)/2,_.y=(g.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let x=0;x<s;x++){const m=x*(n+1);for(let p=0;p<n;p++){const S=p+m,M=S,v=S+n+1,y=S+n+2,b=S+1;a.push(M,v,b),a.push(v,y,b)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ul extends _e{constructor(t=new fs([new dt(0,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new Jt(s,3)),this.setAttribute("normal",new Jt(r,3)),this.setAttribute("uv",new Jt(o,2));function l(h){const u=s.length/3,d=h.extractPoints(e);let g=d.shape;const _=d.holes;Jn.isClockWise(g)===!1&&(g=g.reverse());for(let m=0,p=_.length;m<p;m++){const S=_[m];Jn.isClockWise(S)===!0&&(_[m]=S.reverse())}const x=Jn.triangulateShape(g,_);for(let m=0,p=_.length;m<p;m++){const S=_[m];g=g.concat(S)}for(let m=0,p=g.length;m<p;m++){const S=g[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){const S=x[m],M=S[0]+u,v=S[1]+u,y=S[2]+u;n.push(M,v,y),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return mp(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ul(n,t.curveSegments)}}function mp(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class xn extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,d=new D,g=[],_=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let y=0;y<=e;y++){const b=y/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+v,1-M),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const M=h[p][S+1],v=h[p][S],y=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&g.push(M,v,b),(p!==n-1||c<Math.PI)&&g.push(v,y,b)}this.setIndex(g),this.setAttribute("position",new Jt(_,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class In extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,d=new D;for(let g=0;g<=n;g++)for(let _=0;_<=s;_++){const x=_/s*r,m=g/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/s),l.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=s;_++){const x=(s+1)*g+_-1,m=(s+1)*(g-1)+_-1,p=(s+1)*(g-1)+_,S=(s+1)*g+_;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class hr extends _e{constructor(t=new au(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new dt;let h=new D;const u=[],d=[],g=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(g,2));function x(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),S(),p()}function m(M){h=t.getPointAt(M/e,h);const v=o.normals[M],y=o.binormals[M];for(let b=0;b<=s;b++){const T=b/s*Math.PI*2,C=Math.sin(T),w=-Math.cos(T);c.x=w*v.x+C*y.x,c.y=w*v.y+C*y.y,c.z=w*v.z+C*y.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){const y=(s+1)*(M-1)+(v-1),b=(s+1)*M+(v-1),T=(s+1)*M+v,C=(s+1)*(M-1)+v;_.push(y,b,C),_.push(b,T,C)}}function S(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)l.x=M/e,l.y=v/s,g.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new hr(new io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Tt extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hh,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qa extends Tt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class gp extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _p extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fu extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class vp extends fu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ee(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ko=new ve,Fc=new D,Oc=new D;class xp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pl,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Fc),Oc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oc),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kl extends Kh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Mp extends xp{constructor(){super(new kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yp extends fu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Mp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Sp extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Bc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ep extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function zc(i,t,e,n){const s=bp(n);switch(e){case Fh:return i*t;case Bh:return i*t/s.components*s.byteLength;case Sl:return i*t/s.components*s.byteLength;case zh:return i*t*2/s.components*s.byteLength;case El:return i*t*2/s.components*s.byteLength;case Oh:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case bl:return i*t*4/s.components*s.byteLength;case qr:case Jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ea:case wa:return Math.max(i,16)*Math.max(t,8)/4;case Sa:case ba:return Math.max(i,8)*Math.max(t,8)/2;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Da:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Va:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ga:case Wa:case Xa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $a:case Ya:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qa:case Ja:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bp(i){switch(i){case Un:case Dh:return{byteLength:1,components:1};case js:case Nh:case Ts:return{byteLength:2,components:1};case Ml:case yl:return{byteLength:2,components:4};case Ni:case xl:case qn:return{byteLength:4,components:1};case Uh:case kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function wp(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((g,_)=>g.start-_.start);let d=0;for(let g=1;g<u.length;g++){const _=u[d],x=u[g];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let g=0,_=u.length;g<_;g++){const x=u[g];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ip=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bp=`#ifdef USE_IRIDESCENCE
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
#endif`,zp=`#ifdef USE_BUMPMAP
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,om=`#ifdef USE_ENVMAP
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
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,xm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,bm=`struct PhysicalMaterial {
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
}`,wm=`
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
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Um=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Km=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,e0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,n0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,i0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,a0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,h0=`float getShadowMask() {
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
}`,u0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d0=`#ifdef USE_SKINNING
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
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,p0=`#ifdef USE_SKINNING
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
#endif`,m0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,g0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T0=`uniform sampler2D t2D;
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,I0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`uniform float scale;
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
}`,O0=`uniform vec3 diffuse;
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
}`,B0=`#include <common>
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,G0=`#define MATCAP
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
}`,W0=`#define MATCAP
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
}`,X0=`#define NORMAL
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
}`,$0=`#define NORMAL
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
}`,Y0=`#define PHONG
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
}`,q0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,Z0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,K0=`#define TOON
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
}`,Q0=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,eg=`#include <common>
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
}`,ng=`uniform vec3 color;
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
}`,ig=`uniform float rotation;
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
}`,sg=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:Tp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Lp,aomap_fragment:Ip,aomap_pars_fragment:Dp,batching_pars_vertex:Np,batching_vertex:Up,begin_vertex:kp,beginnormal_vertex:Fp,bsdfs:Op,iridescence_fragment:Bp,bumpmap_pars_fragment:zp,clipping_planes_fragment:Hp,clipping_planes_pars_fragment:Vp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:$p,color_pars_vertex:Yp,color_vertex:qp,common:Jp,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:jp,displacementmap_pars_vertex:Kp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:om,envmap_pars_vertex:am,envmap_physical_pars_fragment:vm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:xm,lights_toon_pars_fragment:Mm,lights_phong_fragment:ym,lights_phong_pars_fragment:Sm,lights_physical_fragment:Em,lights_physical_pars_fragment:bm,lights_fragment_begin:wm,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Cm,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Lm,map_fragment:Im,map_pars_fragment:Dm,map_particle_fragment:Nm,map_particle_pars_fragment:Um,metalnessmap_fragment:km,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Om,morphcolor_vertex:Bm,morphnormal_vertex:zm,morphtarget_pars_vertex:Hm,morphtarget_vertex:Vm,normal_fragment_begin:Gm,normal_fragment_maps:Wm,normal_pars_fragment:Xm,normal_pars_vertex:$m,normal_vertex:Ym,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Km,opaque_fragment:Qm,packing:t0,premultiplied_alpha_fragment:e0,project_vertex:n0,dithering_fragment:i0,dithering_pars_fragment:s0,roughnessmap_fragment:r0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:a0,shadowmap_pars_vertex:l0,shadowmap_vertex:c0,shadowmask_pars_fragment:h0,skinbase_vertex:u0,skinning_pars_vertex:d0,skinning_vertex:f0,skinnormal_vertex:p0,specularmap_fragment:m0,specularmap_pars_fragment:g0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:x0,transmission_pars_fragment:M0,uv_pars_fragment:y0,uv_pars_vertex:S0,uv_vertex:E0,worldpos_vertex:b0,background_vert:w0,background_frag:T0,backgroundCube_vert:A0,backgroundCube_frag:R0,cube_vert:C0,cube_frag:P0,depth_vert:L0,depth_frag:I0,distanceRGBA_vert:D0,distanceRGBA_frag:N0,equirect_vert:U0,equirect_frag:k0,linedashed_vert:F0,linedashed_frag:O0,meshbasic_vert:B0,meshbasic_frag:z0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:G0,meshmatcap_frag:W0,meshnormal_vert:X0,meshnormal_frag:$0,meshphong_vert:Y0,meshphong_frag:q0,meshphysical_vert:J0,meshphysical_frag:Z0,meshtoon_vert:j0,meshtoon_frag:K0,points_vert:Q0,points_frag:tg,shadow_vert:eg,shadow_frag:ng,sprite_vert:ig,sprite_frag:sg},At={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},An={basic:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ee(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:We([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:We([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:We([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new ee(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:We([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:We([At.points,At.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:We([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:We([At.common,At.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:We([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:We([At.sprite,At.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:We([At.common,At.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:We([At.lights,At.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};An.physical={uniforms:We([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Br={r:0,b:0,g:0},Si=new kn,rg=new ve;function og(i,t,e,n,s,r,o){const a=new ee(0);let c=r===!0?0:1,l,h,u=null,d=0,g=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const y=_(M);y===null?p(a,c):y&&y.isColor&&(p(y,1),v=!0);const b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,v){const y=_(v);y&&(y.isCubeTexture||y.mapping===po)?(h===void 0&&(h=new ut(new Wt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ms(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(v.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Si)),h.material.toneMapped=le.getTransfer(y.colorSpace)!==de,(u!==y||d!==y.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,g=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ut(new ze(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ms(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=le.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,g=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,v){M.getRGB(Br,Zh(i)),n.buffers.color.setClear(Br.r,Br.g,Br.b,v,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(a,c)},render:x,addToRenderList:m,dispose:S}}function ag(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(E,I,k,z,Z){let W=!1;const J=u(z,k,I);r!==J&&(r=J,l(r.object)),W=g(E,z,k,Z),W&&_(E,z,k,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(E,I,k,z),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function u(E,I,k){const z=k.wireframe===!0;let Z=n[E.id];Z===void 0&&(Z={},n[E.id]=Z);let W=Z[I.id];W===void 0&&(W={},Z[I.id]=W);let J=W[z];return J===void 0&&(J=d(c()),W[z]=J),J}function d(E){const I=[],k=[],z=[];for(let Z=0;Z<e;Z++)I[Z]=0,k[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:z,object:E,attributes:{},index:null}}function g(E,I,k,z){const Z=r.attributes,W=I.attributes;let J=0;const et=k.getAttributes();for(const X in et)if(et[X].location>=0){const pt=Z[X];let Et=W[X];if(Et===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(Et=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(Et=E.instanceColor)),pt===void 0||pt.attribute!==Et||Et&&pt.data!==Et.data)return!0;J++}return r.attributesNum!==J||r.index!==z}function _(E,I,k,z){const Z={},W=I.attributes;let J=0;const et=k.getAttributes();for(const X in et)if(et[X].location>=0){let pt=W[X];pt===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(pt=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(pt=E.instanceColor));const Et={};Et.attribute=pt,pt&&pt.data&&(Et.data=pt.data),Z[X]=Et,J++}r.attributes=Z,r.attributesNum=J,r.index=z}function x(){const E=r.newAttributes;for(let I=0,k=E.length;I<k;I++)E[I]=0}function m(E){p(E,0)}function p(E,I){const k=r.newAttributes,z=r.enabledAttributes,Z=r.attributeDivisors;k[E]=1,z[E]===0&&(i.enableVertexAttribArray(E),z[E]=1),Z[E]!==I&&(i.vertexAttribDivisor(E,I),Z[E]=I)}function S(){const E=r.newAttributes,I=r.enabledAttributes;for(let k=0,z=I.length;k<z;k++)I[k]!==E[k]&&(i.disableVertexAttribArray(k),I[k]=0)}function M(E,I,k,z,Z,W,J){J===!0?i.vertexAttribIPointer(E,I,k,Z,W):i.vertexAttribPointer(E,I,k,z,Z,W)}function v(E,I,k,z){x();const Z=z.attributes,W=k.getAttributes(),J=I.defaultAttributeValues;for(const et in W){const X=W[et];if(X.location>=0){let gt=Z[et];if(gt===void 0&&(et==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),et==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),gt!==void 0){const pt=gt.normalized,Et=gt.itemSize,kt=t.get(gt);if(kt===void 0)continue;const qt=kt.buffer,ne=kt.type,Zt=kt.bytesPerElement,nt=ne===i.INT||ne===i.UNSIGNED_INT||gt.gpuType===xl;if(gt.isInterleavedBufferAttribute){const ct=gt.data,_t=ct.stride,Lt=gt.offset;if(ct.isInstancedInterleavedBuffer){for(let Dt=0;Dt<X.locationSize;Dt++)p(X.location+Dt,ct.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Dt=0;Dt<X.locationSize;Dt++)m(X.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let Dt=0;Dt<X.locationSize;Dt++)M(X.location+Dt,Et/X.locationSize,ne,pt,_t*Zt,(Lt+Et/X.locationSize*Dt)*Zt,nt)}else{if(gt.isInstancedBufferAttribute){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,gt.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let ct=0;ct<X.locationSize;ct++)m(X.location+ct);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ct=0;ct<X.locationSize;ct++)M(X.location+ct,Et/X.locationSize,ne,pt,Et*Zt,Et/X.locationSize*ct*Zt,nt)}}else if(J!==void 0){const pt=J[et];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(X.location,pt);break;case 3:i.vertexAttrib3fv(X.location,pt);break;case 4:i.vertexAttrib4fv(X.location,pt);break;default:i.vertexAttrib1fv(X.location,pt)}}}}S()}function y(){C();for(const E in n){const I=n[E];for(const k in I){const z=I[k];for(const Z in z)h(z[Z].object),delete z[Z];delete I[k]}delete n[E]}}function b(E){if(n[E.id]===void 0)return;const I=n[E.id];for(const k in I){const z=I[k];for(const Z in z)h(z[Z].object),delete z[Z];delete I[k]}delete n[E.id]}function T(E){for(const I in n){const k=n[I];if(k[E.id]===void 0)continue;const z=k[E.id];for(const Z in z)h(z[Z].object),delete z[Z];delete k[E.id]}}function C(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:w,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function lg(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];e.update(g,n,1)}function c(l,h,u,d){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)o(l[_],h[_],d[_]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*d[x];e.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function cg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==vn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Un&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==qn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=_>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:y,maxSamples:b}}function hg(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yn,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const g=u.length!==0||d||n!==0||s;return s=d,n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,g){const _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{const S=r?0:n,M=S*4;let v=p.clippingState||null;c.value=v,v=h(_,d,M,g);for(let y=0;y!==M;++y)v[y]=e[y];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,g,_){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const p=g+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=g;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function ug(i){let t=new WeakMap;function e(o,a){return a===xa?o.mapping=_s:a===Ma&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===xa||a===Ma)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Lf(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const as=4,Hc=[.125,.215,.35,.446,.526,.582],Ai=20,Qo=new kl,Vc=new ee;let ta=null,ea=0,na=0,ia=!1;const wi=(1+Math.sqrt(5))/2,ss=1/wi,Gc=[new D(-wi,ss,0),new D(wi,ss,0),new D(-ss,0,wi),new D(ss,0,wi),new D(0,wi,-ss),new D(0,wi,ss),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],dg=new D;class Wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=dg}=r;ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$c(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ta,ea,na),this._renderer.xr.enabled=ia,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ta=this._renderer.getRenderTarget(),ea=this._renderer.getActiveCubeFace(),na=this._renderer.getActiveMipmapLevel(),ia=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Ts,format:vn,colorSpace:xs,depthBuffer:!1},s=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fg(r)),this._blurMaterial=pg(r,t,e)}return s}_compileMaterial(t){const e=new ut(this._lodPlanes[0],t);this._renderer.compile(e,Qo)}_sceneToCubeUV(t,e,n,s,r){const c=new Be(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,g=u.toneMapping;u.getClearColor(Vc),u.toneMapping=di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const x=new Oe({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),m=new ut(new Wt,x);let p=!1;const S=t.background;S?S.isColor&&(x.color.copy(S),t.background=null,p=!0):(x.color.copy(Vc),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):v===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));const y=this._cubeSize;zr(s,v*y,M>2?y:0,y,y),u.setRenderTarget(s),p&&u.render(m,c),u.render(t,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=g,u.autoClear=d,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$c());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;zr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gc[(s-r-1)%Gc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[s],l),d=l.uniforms,g=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Ai-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const p=[];let S=0;for(let T=0;T<Ai;++T){const C=T/x,w=Math.exp(-C*C/2);p.push(w),T===0?S+=w:T<m&&(S+=2*w)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const v=this._sizeLods[s],y=3*v*(s>M-as?s-M+as:0),b=4*(this._cubeSize-v);zr(e,y,b,3*v,2*v),c.setRenderTarget(e),c.render(u,Qo)}}function fg(i){const t=[],e=[],n=[];let s=i;const r=i-as+1+Hc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-as?c=Hc[o-i+as-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,_=6,x=3,m=2,p=1,S=new Float32Array(x*_*g),M=new Float32Array(m*_*g),v=new Float32Array(p*_*g);for(let b=0;b<g;b++){const T=b%3*2/3-1,C=b>2?0:-1,w=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];S.set(w,x*_*b),M.set(d,m*_*b);const E=[b,b,b,b,b,b];v.set(E,p*_*b)}const y=new _e;y.setAttribute("position",new Sn(S,x)),y.setAttribute("uv",new Sn(M,m)),y.setAttribute("faceIndex",new Sn(v,p)),t.push(y),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xc(i,t,e){const n=new pi(i,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function pg(i,t,e){const n=new Float32Array(Ai),s=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function $c(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yc(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Fl(){return`

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
	`}function mg(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===xa||c===Ma,h=c===_s||c===vs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Wc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const g=a.image;return l&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new Wc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function gg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _g(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete s[d.id];const g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER)}function l(u){const d=[],g=u.index,_=u.attributes.position;let x=0;if(g!==null){const S=g.array;x=g.version;for(let M=0,v=S.length;M<v;M+=3){const y=S[M+0],b=S[M+1],T=S[M+2];d.push(y,b,b,T,T,y)}}else if(_!==void 0){const S=_.array;x=_.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const y=M+0,b=M+1,T=M+2;d.push(y,b,b,T,T,y)}}else return;const m=new(Gh(d)?Jh:qh)(d,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const g=u.index;g!==null&&d.version<g.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function vg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,g){i.drawElements(n,g,r,d*o),e.update(g,n,1)}function l(d,g,_){_!==0&&(i.drawElementsInstanced(n,g,r,d*o,_),e.update(g,n,_))}function h(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=g[p];e.update(m,n,1)}function u(d,g,_,x){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,g[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,r,d,0,x,0,_);let p=0;for(let S=0;S<_;S++)p+=g[S]*x[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function xg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Mg(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var g=E;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let y=a.attributes.position.count*v,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const T=new Float32Array(y*b*4*u),C=new Wh(T,y,b,u);C.type=qn,C.needsUpdate=!0;const w=v*4;for(let I=0;I<u;I++){const k=p[I],z=S[I],Z=M[I],W=y*b*4*I;for(let J=0;J<k.count;J++){const et=J*w;_===!0&&(s.fromBufferAttribute(k,J),T[W+et+0]=s.x,T[W+et+1]=s.y,T[W+et+2]=s.z,T[W+et+3]=0),x===!0&&(s.fromBufferAttribute(z,J),T[W+et+4]=s.x,T[W+et+5]=s.y,T[W+et+6]=s.z,T[W+et+7]=0),m===!0&&(s.fromBufferAttribute(Z,J),T[W+et+8]=s.x,T[W+et+9]=s.y,T[W+et+10]=s.z,T[W+et+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new dt(y,b)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yg(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const mu=new He,qc=new nu(1,1),gu=new Wh,_u=new mf,vu=new Qh,Jc=[],Zc=[],jc=new Float32Array(16),Kc=new Float32Array(9),Qc=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function De(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function go(i,t){let e=Zc[t];e===void 0&&(e=new Int32Array(t),Zc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Sg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),De(e,t)}}function bg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),De(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),De(e,t)}}function Tg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),De(e,n)}}function Ag(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),De(e,n)}}function Rg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Ie(e,n))return;jc.set(n),i.uniformMatrix4fv(this.addr,!1,jc),De(e,n)}}function Cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),De(e,t)}}function Lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),De(e,t)}}function Ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),De(e,t)}}function Dg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),De(e,t)}}function Ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),De(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),De(e,t)}}function Fg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qc.compareFunction=Vh,r=qc):r=mu,e.setTexture2D(t||r,s)}function Og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_u,s)}function Bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vu,s)}function zg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||gu,s)}function Hg(i){switch(i){case 5126:return Sg;case 35664:return Eg;case 35665:return bg;case 35666:return wg;case 35674:return Tg;case 35675:return Ag;case 35676:return Rg;case 5124:case 35670:return Cg;case 35667:case 35671:return Pg;case 35668:case 35672:return Lg;case 35669:case 35673:return Ig;case 5125:return Dg;case 36294:return Ng;case 36295:return Ug;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Fg;case 35679:case 36299:case 36307:return Og;case 35680:case 36300:case 36308:case 36293:return Bg;case 36289:case 36303:case 36311:case 36292:return zg}}function Vg(i,t){i.uniform1fv(this.addr,t)}function Gg(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Wg(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Xg(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function $g(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yg(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function qg(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jg(i,t){i.uniform1iv(this.addr,t)}function Zg(i,t){i.uniform2iv(this.addr,t)}function jg(i,t){i.uniform3iv(this.addr,t)}function Kg(i,t){i.uniform4iv(this.addr,t)}function Qg(i,t){i.uniform1uiv(this.addr,t)}function t_(i,t){i.uniform2uiv(this.addr,t)}function e_(i,t){i.uniform3uiv(this.addr,t)}function n_(i,t){i.uniform4uiv(this.addr,t)}function i_(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||mu,r[o])}function s_(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_u,r[o])}function r_(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||vu,r[o])}function o_(i,t,e){const n=this.cache,s=t.length,r=go(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),De(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||gu,r[o])}function a_(i){switch(i){case 5126:return Vg;case 35664:return Gg;case 35665:return Wg;case 35666:return Xg;case 35674:return $g;case 35675:return Yg;case 35676:return qg;case 5124:case 35670:return Jg;case 35667:case 35671:return Zg;case 35668:case 35672:return jg;case 35669:case 35673:return Kg;case 5125:return Qg;case 36294:return t_;case 36295:return e_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}class l_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Hg(e.type)}}class c_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=a_(e.type)}}class h_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const sa=/(\w+)(\])?(\[|\.)?/g;function th(i,t){i.seq.push(t),i.map[t.id]=t}function u_(i,t,e){const n=i.name,s=n.length;for(sa.lastIndex=0;;){const r=sa.exec(n),o=sa.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){th(e,l===void 0?new l_(a,i,t):new c_(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new h_(a),th(e,u)),e=u}}}class Kr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);u_(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function eh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const d_=37297;let f_=0;function p_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const nh=new Kt;function m_(i){le._getMatrix(nh,le.workingColorSpace,i);const t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case Qr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ih(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+p_(i.getShaderSource(t),a)}else return r}function g_(i,t){const e=m_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function __(i,t){let e;switch(t){case Ad:e="Linear";break;case Rd:e="Reinhard";break;case Cd:e="Cineon";break;case Pd:e="ACESFilmic";break;case Id:e="AgX";break;case Dd:e="Neutral";break;case Ld:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hr=new D;function v_(){le.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)}function M_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function y_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Hs(i){return i!==""}function sh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function tl(i){return i.replace(S_,b_)}const E_=new Map;function b_(i,t){let e=te[t];if(e===void 0){const n=E_.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tl(e)}const w_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(w_,T_)}function T_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function A_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ph?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function R_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function C_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function P_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Lh:t="ENVMAP_BLENDING_MULTIPLY";break;case wd:t="ENVMAP_BLENDING_MIX";break;case Td:t="ENVMAP_BLENDING_ADD";break}return t}function L_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function I_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=A_(e),l=R_(e),h=C_(e),u=P_(e),d=L_(e),g=x_(e),_=M_(r),x=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Hs).join(`
`),p.length>0&&(p+=`
`)):(m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),p=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?te.tonemapping_pars_fragment:"",e.toneMapping!==di?__("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,g_("linearToOutputTexel",e.outputColorSpace),v_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Hs).join(`
`)),o=tl(o),o=sh(o,e),o=rh(o,e),a=tl(a),a=sh(a,e),a=rh(a,e),o=oh(o),a=oh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+o,v=S+p+a,y=eh(s,s.VERTEX_SHADER,M),b=eh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,y),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(I){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(b)||"",W=k.trim(),J=z.trim(),et=Z.trim();let X=!0,gt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,y,b);else{const pt=ih(s,y,"vertex"),Et=ih(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+W+`
`+pt+`
`+Et)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(J===""||et==="")&&(gt=!1);gt&&(I.diagnostics={runnable:X,programLog:W,vertexShader:{log:J,prefix:m},fragmentShader:{log:et,prefix:p}})}s.deleteShader(y),s.deleteShader(b),C=new Kr(s,x),w=y_(s,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,d_)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=f_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=y,this.fragmentShader=b,this}let D_=0;class N_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U_(t),e.set(t,n)),n}}class U_{constructor(t){this.id=D_++,this.code=t,this.usedTimes=0}}function k_(i,t,e,n,s,r,o){const a=new $h,c=new N_,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,E,I,k,z){const Z=k.fog,W=z.geometry,J=w.isMeshStandardMaterial?k.environment:null,et=(w.isMeshStandardMaterial?e:t).get(w.envMap||J),X=et&&et.mapping===po?et.image.height:null,gt=_[w.type];w.precision!==null&&(g=s.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=pt!==void 0?pt.length:0;let kt=0;W.morphAttributes.position!==void 0&&(kt=1),W.morphAttributes.normal!==void 0&&(kt=2),W.morphAttributes.color!==void 0&&(kt=3);let qt,ne,Zt,nt;if(gt){const ce=An[gt];qt=ce.vertexShader,ne=ce.fragmentShader}else qt=w.vertexShader,ne=w.fragmentShader,c.update(w),Zt=c.getVertexShaderID(w),nt=c.getFragmentShaderID(w);const ct=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,Dt=z.isBatchedMesh===!0,$t=!!w.map,re=!!w.matcap,N=!!et,ot=!!w.aoMap,st=!!w.lightMap,rt=!!w.bumpMap,U=!!w.normalMap,$=!!w.displacementMap,G=!!w.emissiveMap,Q=!!w.metalnessMap,it=!!w.roughnessMap,ht=w.anisotropy>0,R=w.clearcoat>0,f=w.dispersion>0,P=w.iridescence>0,L=w.sheen>0,B=w.transmission>0,O=ht&&!!w.anisotropyMap,lt=R&&!!w.clearcoatMap,tt=R&&!!w.clearcoatNormalMap,St=R&&!!w.clearcoatRoughnessMap,ft=P&&!!w.iridescenceMap,j=P&&!!w.iridescenceThicknessMap,mt=L&&!!w.sheenColorMap,Bt=L&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,wt=!!w.specularColorMap,Gt=!!w.specularIntensityMap,F=B&&!!w.transmissionMap,xt=B&&!!w.thicknessMap,bt=!!w.gradientMap,Nt=!!w.alphaMap,vt=w.alphaTest>0,at=!!w.alphaHash,It=!!w.extensions;let Yt=di;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Yt=i.toneMapping);const me={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:qt,fragmentShader:ne,defines:w.defines,customVertexShaderID:Zt,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Dt,batchingColor:Dt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ct===null?i.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:$t,matcap:re,envMap:N,envMapMode:N&&et.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:st,bumpMap:rt,normalMap:U,displacementMap:d&&$,emissiveMap:G,normalMapObjectSpace:U&&w.normalMapType===Fd,normalMapTangentSpace:U&&w.normalMapType===Hh,metalnessMap:Q,roughnessMap:it,anisotropy:ht,anisotropyMap:O,clearcoat:R,clearcoatMap:lt,clearcoatNormalMap:tt,clearcoatRoughnessMap:St,dispersion:f,iridescence:P,iridescenceMap:ft,iridescenceThicknessMap:j,sheen:L,sheenColorMap:mt,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:Gt,transmission:B,transmissionMap:F,thicknessMap:xt,gradientMap:bt,opaque:w.transparent===!1&&w.blending===hs&&w.alphaToCoverage===!1,alphaMap:Nt,alphaTest:vt,alphaHash:at,combine:w.combine,mapUv:$t&&x(w.map.channel),aoMapUv:ot&&x(w.aoMap.channel),lightMapUv:st&&x(w.lightMap.channel),bumpMapUv:rt&&x(w.bumpMap.channel),normalMapUv:U&&x(w.normalMap.channel),displacementMapUv:$&&x(w.displacementMap.channel),emissiveMapUv:G&&x(w.emissiveMap.channel),metalnessMapUv:Q&&x(w.metalnessMap.channel),roughnessMapUv:it&&x(w.roughnessMap.channel),anisotropyMapUv:O&&x(w.anisotropyMap.channel),clearcoatMapUv:lt&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:tt&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:j&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&x(w.sheenRoughnessMap.channel),specularMapUv:Pt&&x(w.specularMap.channel),specularColorMapUv:wt&&x(w.specularColorMap.channel),specularIntensityMapUv:Gt&&x(w.specularIntensityMap.channel),transmissionMapUv:F&&x(w.transmissionMap.channel),thicknessMapUv:xt&&x(w.thicknessMap.channel),alphaMapUv:Nt&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(U||ht),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&($t||Nt),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:$t&&w.map.isVideoTexture===!0&&le.getTransfer(w.map.colorSpace)===de,decodeVideoTextureEmissive:G&&w.emissiveMap.isVideoTexture===!0&&le.getTransfer(w.emissiveMap.colorSpace)===de,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Re,flipSided:w.side===qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:It&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&w.extensions.multiDraw===!0||Dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return me.vertexUv1s=l.has(1),me.vertexUv2s=l.has(2),me.vertexUv3s=l.has(3),l.clear(),me}function p(w){const E=[];if(w.shaderID?E.push(w.shaderID):(E.push(w.customVertexShaderID),E.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)E.push(I),E.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(S(E,w),M(E,w),E.push(i.outputColorSpace)),E.push(w.customProgramCacheKey),E.join()}function S(w,E){w.push(E.precision),w.push(E.outputColorSpace),w.push(E.envMapMode),w.push(E.envMapCubeUVHeight),w.push(E.mapUv),w.push(E.alphaMapUv),w.push(E.lightMapUv),w.push(E.aoMapUv),w.push(E.bumpMapUv),w.push(E.normalMapUv),w.push(E.displacementMapUv),w.push(E.emissiveMapUv),w.push(E.metalnessMapUv),w.push(E.roughnessMapUv),w.push(E.anisotropyMapUv),w.push(E.clearcoatMapUv),w.push(E.clearcoatNormalMapUv),w.push(E.clearcoatRoughnessMapUv),w.push(E.iridescenceMapUv),w.push(E.iridescenceThicknessMapUv),w.push(E.sheenColorMapUv),w.push(E.sheenRoughnessMapUv),w.push(E.specularMapUv),w.push(E.specularColorMapUv),w.push(E.specularIntensityMapUv),w.push(E.transmissionMapUv),w.push(E.thicknessMapUv),w.push(E.combine),w.push(E.fogExp2),w.push(E.sizeAttenuation),w.push(E.morphTargetsCount),w.push(E.morphAttributeCount),w.push(E.numDirLights),w.push(E.numPointLights),w.push(E.numSpotLights),w.push(E.numSpotLightMaps),w.push(E.numHemiLights),w.push(E.numRectAreaLights),w.push(E.numDirLightShadows),w.push(E.numPointLightShadows),w.push(E.numSpotLightShadows),w.push(E.numSpotLightShadowsWithMaps),w.push(E.numLightProbes),w.push(E.shadowMapType),w.push(E.toneMapping),w.push(E.numClippingPlanes),w.push(E.numClipIntersection),w.push(E.depthPacking)}function M(w,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const E=_[w.type];let I;if(E){const k=An[E];I=jh.clone(k.uniforms)}else I=w.uniforms;return I}function y(w,E){let I;for(let k=0,z=h.length;k<z;k++){const Z=h[k];if(Z.cacheKey===E){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new I_(i,E,w,r),h.push(I)),I}function b(w){if(--w.usedTimes===0){const E=h.indexOf(w);h[E]=h[h.length-1],h.pop(),w.destroy()}}function T(w){c.remove(w)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:T,programs:h,dispose:C}}function F_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function O_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,g,_,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:g,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=g,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,d,g,_,x,m){const p=o(u,d,g,_,x,m);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):e.push(p)}function c(u,d,g,_,x,m){const p=o(u,d,g,_,x,m);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||O_),n.length>1&&n.sort(d||lh),s.length>1&&s.sort(d||lh)}function h(){for(let u=t,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function B_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ch,i.set(n,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function z_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new ee};break;case"SpotLight":e={position:new D,direction:new D,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function H_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let V_=0;function G_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function W_(i){const t=new z_,e=H_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new ve,o=new ve;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,_=0,x=0,m=0,p=0,S=0,M=0,v=0,y=0,b=0,T=0;l.sort(G_);for(let w=0,E=l.length;w<E;w++){const I=l[w],k=I.color,z=I.intensity,Z=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*z,u+=k.g*z,d+=k.b*z;else if(I.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(I.sh.coefficients[J],z);T++}else if(I.isDirectionalLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const et=I.shadow,X=e.get(I);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,n.directionalShadow[g]=X,n.directionalShadowMap[g]=W,n.directionalShadowMatrix[g]=I.shadow.matrix,S++}n.directional[g]=J,g++}else if(I.isSpotLight){const J=t.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy(k).multiplyScalar(z),J.distance=Z,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,n.spot[x]=J;const et=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,et.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[x]=et.matrix,I.castShadow){const X=e.get(I);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=W,v++}x++}else if(I.isRectAreaLight){const J=t.get(I);J.color.copy(k).multiplyScalar(z),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=J,m++}else if(I.isPointLight){const J=t.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity),J.distance=I.distance,J.decay=I.decay,I.castShadow){const et=I.shadow,X=e.get(I);X.shadowIntensity=et.intensity,X.shadowBias=et.bias,X.shadowNormalBias=et.normalBias,X.shadowRadius=et.radius,X.shadowMapSize=et.mapSize,X.shadowCameraNear=et.camera.near,X.shadowCameraFar=et.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=I.shadow.matrix,M++}n.point[_]=J,_++}else if(I.isHemisphereLight){const J=t.get(I);J.skyColor.copy(I.color).multiplyScalar(z),J.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[p]=J,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==g||C.pointLength!==_||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==S||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.directional.length=g,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=T,C.directionalLength=g,C.pointLength=_,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=S,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=y,C.numLightProbes=T,n.version=V_++)}function c(l,h){let u=0,d=0,g=0,_=0,x=0;const m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function hh(i){const t=new W_(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function X_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new hh(i),t.set(s,[a])):r>=o.length?(a=new hh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const $_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y_=`uniform sampler2D shadow_pass;
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
}`;function q_(i,t,e){let n=new Pl;const s=new dt,r=new dt,o=new ge,a=new gp({depthPacking:kd}),c=new _p,l={},h=e.maxTextureSize,u={[fi]:qe,[qe]:fi,[Re]:Re},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:$_,fragmentShader:Y_}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const _=new _e;_.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ut(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(b,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ui),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=p!==Wn&&this.type===Wn,Z=p===Wn&&this.type!==Wn;for(let W=0,J=b.length;W<J;W++){const et=b[W],X=et.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const gt=X.getFrameExtents();if(s.multiply(gt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/gt.x),s.x=r.x*gt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/gt.y),s.y=r.y*gt.y,X.mapSize.y=r.y)),X.map===null||z===!0||Z===!0){const Et=this.type!==Wn?{minFilter:yn,magFilter:yn}:{};X.map!==null&&X.map.dispose(),X.map=new pi(s.x,s.y,Et),X.map.texture.name=et.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const pt=X.getViewportCount();for(let Et=0;Et<pt;Et++){const kt=X.getViewport(Et);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),k.viewport(o),X.updateMatrices(et,Et),n=X.getFrustum(),v(T,C,X.camera,et,this.type)}X.isPointLightShadow!==!0&&this.type===Wn&&S(X,C),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,E,I)};function S(b,T){const C=t.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new pi(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,x,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(T,null,C,g,x,null)}function M(b,T,C,w){let E=null;const I=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)E=I;else if(E=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const k=E.uuid,z=T.uuid;let Z=l[k];Z===void 0&&(Z={},l[k]=Z);let W=Z[z];W===void 0&&(W=E.clone(),Z[z]=W,T.addEventListener("dispose",y)),E=W}if(E.visible=T.visible,E.wireframe=T.wireframe,w===Wn?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:u[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=i.properties.get(E);k.light=C}return E}function v(b,T,C,w,E){if(b.visible===!1)return;if(b.layers.test(T.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Wn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const z=t.update(b),Z=b.material;if(Array.isArray(Z)){const W=z.groups;for(let J=0,et=W.length;J<et;J++){const X=W[J],gt=Z[X.materialIndex];if(gt&&gt.visible){const pt=M(b,gt,w,E);b.onBeforeShadow(i,b,T,C,z,pt,X),i.renderBufferDirect(C,null,z,pt,b,X),b.onAfterShadow(i,b,T,C,z,pt,X)}}}else if(Z.visible){const W=M(b,Z,w,E);b.onBeforeShadow(i,b,T,C,z,W,null),i.renderBufferDirect(C,null,z,W,b,null),b.onAfterShadow(i,b,T,C,z,W,null)}}const k=b.children;for(let z=0,Z=k.length;z<Z;z++)v(k[z],T,C,w,E)}function y(b){b.target.removeEventListener("dispose",y);for(const C in l){const w=l[C],E=b.target.uuid;E in w&&(w[E].dispose(),delete w[E])}}}const J_={[da]:fa,[pa]:_a,[ma]:va,[gs]:ga,[fa]:da,[_a]:pa,[va]:ma,[ga]:gs};function Z_(i,t){function e(){let F=!1;const xt=new ge;let bt=null;const Nt=new ge(0,0,0,0);return{setMask:function(vt){bt!==vt&&!F&&(i.colorMask(vt,vt,vt,vt),bt=vt)},setLocked:function(vt){F=vt},setClear:function(vt,at,It,Yt,me){me===!0&&(vt*=Yt,at*=Yt,It*=Yt),xt.set(vt,at,It,Yt),Nt.equals(xt)===!1&&(i.clearColor(vt,at,It,Yt),Nt.copy(xt))},reset:function(){F=!1,bt=null,Nt.set(-1,0,0,0)}}}function n(){let F=!1,xt=!1,bt=null,Nt=null,vt=null;return{setReversed:function(at){if(xt!==at){const It=t.get("EXT_clip_control");at?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),xt=at;const Yt=vt;vt=null,this.setClear(Yt)}},getReversed:function(){return xt},setTest:function(at){at?ct(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(at){bt!==at&&!F&&(i.depthMask(at),bt=at)},setFunc:function(at){if(xt&&(at=J_[at]),Nt!==at){switch(at){case da:i.depthFunc(i.NEVER);break;case fa:i.depthFunc(i.ALWAYS);break;case pa:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case ma:i.depthFunc(i.EQUAL);break;case ga:i.depthFunc(i.GEQUAL);break;case _a:i.depthFunc(i.GREATER);break;case va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=at}},setLocked:function(at){F=at},setClear:function(at){vt!==at&&(xt&&(at=1-at),i.clearDepth(at),vt=at)},reset:function(){F=!1,bt=null,Nt=null,vt=null,xt=!1}}}function s(){let F=!1,xt=null,bt=null,Nt=null,vt=null,at=null,It=null,Yt=null,me=null;return{setTest:function(ce){F||(ce?ct(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ce){xt!==ce&&!F&&(i.stencilMask(ce),xt=ce)},setFunc:function(ce,On,wn){(bt!==ce||Nt!==On||vt!==wn)&&(i.stencilFunc(ce,On,wn),bt=ce,Nt=On,vt=wn)},setOp:function(ce,On,wn){(at!==ce||It!==On||Yt!==wn)&&(i.stencilOp(ce,On,wn),at=ce,It=On,Yt=wn)},setLocked:function(ce){F=ce},setClear:function(ce){me!==ce&&(i.clearStencil(ce),me=ce)},reset:function(){F=!1,xt=null,bt=null,Nt=null,vt=null,at=null,It=null,Yt=null,me=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,g=[],_=null,x=!1,m=null,p=null,S=null,M=null,v=null,y=null,b=null,T=new ee(0,0,0),C=0,w=!1,E=null,I=null,k=null,z=null,Z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,et=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(X)[1]),J=et>=1):X.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),J=et>=2);let gt=null,pt={};const Et=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),qt=new ge().fromArray(Et),ne=new ge().fromArray(kt);function Zt(F,xt,bt,Nt){const vt=new Uint8Array(4),at=i.createTexture();i.bindTexture(F,at),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<bt;It++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(xt+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return at}const nt={};nt[i.TEXTURE_2D]=Zt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=Zt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=Zt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=Zt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(i.DEPTH_TEST),o.setFunc(gs),rt(!1),U(oc),ct(i.CULL_FACE),ot(ui);function ct(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function _t(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Lt(F,xt){return u[F]!==xt?(i.bindFramebuffer(F,xt),u[F]=xt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Dt(F,xt){let bt=g,Nt=!1;if(F){bt=d.get(xt),bt===void 0&&(bt=[],d.set(xt,bt));const vt=F.textures;if(bt.length!==vt.length||bt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,It=vt.length;at<It;at++)bt[at]=i.COLOR_ATTACHMENT0+at;bt.length=vt.length,Nt=!0}}else bt[0]!==i.BACK&&(bt[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(bt)}function $t(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const re={[Ti]:i.FUNC_ADD,[ld]:i.FUNC_SUBTRACT,[cd]:i.FUNC_REVERSE_SUBTRACT};re[hd]=i.MIN,re[ud]=i.MAX;const N={[dd]:i.ZERO,[fd]:i.ONE,[pd]:i.SRC_COLOR,[ha]:i.SRC_ALPHA,[Md]:i.SRC_ALPHA_SATURATE,[vd]:i.DST_COLOR,[gd]:i.DST_ALPHA,[md]:i.ONE_MINUS_SRC_COLOR,[ua]:i.ONE_MINUS_SRC_ALPHA,[xd]:i.ONE_MINUS_DST_COLOR,[_d]:i.ONE_MINUS_DST_ALPHA,[yd]:i.CONSTANT_COLOR,[Sd]:i.ONE_MINUS_CONSTANT_COLOR,[Ed]:i.CONSTANT_ALPHA,[bd]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(F,xt,bt,Nt,vt,at,It,Yt,me,ce){if(F===ui){x===!0&&(_t(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),F!==ad){if(F!==m||ce!==w){if((p!==Ti||v!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,v=Ti),ce)switch(F){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFunc(i.ONE,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ac:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,y=null,b=null,T.set(0,0,0),C=0,m=F,w=ce}return}vt=vt||xt,at=at||bt,It=It||Nt,(xt!==p||vt!==v)&&(i.blendEquationSeparate(re[xt],re[vt]),p=xt,v=vt),(bt!==S||Nt!==M||at!==y||It!==b)&&(i.blendFuncSeparate(N[bt],N[Nt],N[at],N[It]),S=bt,M=Nt,y=at,b=It),(Yt.equals(T)===!1||me!==C)&&(i.blendColor(Yt.r,Yt.g,Yt.b,me),T.copy(Yt),C=me),m=F,w=!1}function st(F,xt){F.side===Re?_t(i.CULL_FACE):ct(i.CULL_FACE);let bt=F.side===qe;xt&&(bt=!bt),rt(bt),F.blending===hs&&F.transparent===!1?ot(ui):ot(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const Nt=F.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),G(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(F){E!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),E=F)}function U(F){F!==rd?(ct(i.CULL_FACE),F!==I&&(F===oc?i.cullFace(i.BACK):F===od?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),I=F}function $(F){F!==k&&(J&&i.lineWidth(F),k=F)}function G(F,xt,bt){F?(ct(i.POLYGON_OFFSET_FILL),(z!==xt||Z!==bt)&&(i.polygonOffset(xt,bt),z=xt,Z=bt)):_t(i.POLYGON_OFFSET_FILL)}function Q(F){F?ct(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function it(F){F===void 0&&(F=i.TEXTURE0+W-1),gt!==F&&(i.activeTexture(F),gt=F)}function ht(F,xt,bt){bt===void 0&&(gt===null?bt=i.TEXTURE0+W-1:bt=gt);let Nt=pt[bt];Nt===void 0&&(Nt={type:void 0,texture:void 0},pt[bt]=Nt),(Nt.type!==F||Nt.texture!==xt)&&(gt!==bt&&(i.activeTexture(bt),gt=bt),i.bindTexture(F,xt||nt[F]),Nt.type=F,Nt.texture=xt)}function R(){const F=pt[gt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function f(){try{i.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{i.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function O(){try{i.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(F){qt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),qt.copy(F))}function Bt(F){ne.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ne.copy(F))}function Pt(F,xt){let bt=l.get(xt);bt===void 0&&(bt=new WeakMap,l.set(xt,bt));let Nt=bt.get(F);Nt===void 0&&(Nt=i.getUniformBlockIndex(xt,F.name),bt.set(F,Nt))}function wt(F,xt){const Nt=l.get(xt).get(F);c.get(xt)!==Nt&&(i.uniformBlockBinding(xt,Nt,F.__bindingPointIndex),c.set(xt,Nt))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},gt=null,pt={},u={},d=new WeakMap,g=[],_=null,x=!1,m=null,p=null,S=null,M=null,v=null,y=null,b=null,T=new ee(0,0,0),C=0,w=!1,E=null,I=null,k=null,z=null,Z=null,qt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:_t,bindFramebuffer:Lt,drawBuffers:Dt,useProgram:$t,setBlending:ot,setMaterial:st,setFlipSided:rt,setCullFace:U,setLineWidth:$,setPolygonOffset:G,setScissorTest:Q,activeTexture:it,bindTexture:ht,unbindTexture:R,compressedTexImage2D:f,compressedTexImage3D:P,texImage2D:ft,texImage3D:j,updateUBOMapping:Pt,uniformBlockBinding:wt,texStorage2D:tt,texStorage3D:St,texSubImage2D:L,texSubImage3D:B,compressedTexSubImage2D:O,compressedTexSubImage3D:lt,scissor:mt,viewport:Bt,reset:Gt}}function j_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new dt,h=new WeakMap;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,f){return g?new OffscreenCanvas(R,f):eo("canvas")}function x(R,f,P){let L=1;const B=ht(R);if((B.width>P||B.height>P)&&(L=P/Math.max(B.width,B.height)),L<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const O=Math.floor(L*B.width),lt=Math.floor(L*B.height);u===void 0&&(u=_(O,lt));const tt=f?_(O,lt):u;return tt.width=O,tt.height=lt,tt.getContext("2d").drawImage(R,0,0,O,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+O+"x"+lt+")."),tt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(R,f,P,L,B=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let O=f;if(f===i.RED&&(P===i.FLOAT&&(O=i.R32F),P===i.HALF_FLOAT&&(O=i.R16F),P===i.UNSIGNED_BYTE&&(O=i.R8)),f===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.R8UI),P===i.UNSIGNED_SHORT&&(O=i.R16UI),P===i.UNSIGNED_INT&&(O=i.R32UI),P===i.BYTE&&(O=i.R8I),P===i.SHORT&&(O=i.R16I),P===i.INT&&(O=i.R32I)),f===i.RG&&(P===i.FLOAT&&(O=i.RG32F),P===i.HALF_FLOAT&&(O=i.RG16F),P===i.UNSIGNED_BYTE&&(O=i.RG8)),f===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RG8UI),P===i.UNSIGNED_SHORT&&(O=i.RG16UI),P===i.UNSIGNED_INT&&(O=i.RG32UI),P===i.BYTE&&(O=i.RG8I),P===i.SHORT&&(O=i.RG16I),P===i.INT&&(O=i.RG32I)),f===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RGB8UI),P===i.UNSIGNED_SHORT&&(O=i.RGB16UI),P===i.UNSIGNED_INT&&(O=i.RGB32UI),P===i.BYTE&&(O=i.RGB8I),P===i.SHORT&&(O=i.RGB16I),P===i.INT&&(O=i.RGB32I)),f===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(O=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(O=i.RGBA16UI),P===i.UNSIGNED_INT&&(O=i.RGBA32UI),P===i.BYTE&&(O=i.RGBA8I),P===i.SHORT&&(O=i.RGBA16I),P===i.INT&&(O=i.RGBA32I)),f===i.RGB&&(P===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(O=i.R11F_G11F_B10F)),f===i.RGBA){const lt=B?Qr:le.getTransfer(L);P===i.FLOAT&&(O=i.RGBA32F),P===i.HALF_FLOAT&&(O=i.RGBA16F),P===i.UNSIGNED_BYTE&&(O=lt===de?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&t.get("EXT_color_buffer_float"),O}function v(R,f){let P;return R?f===null||f===Ni||f===Ks?P=i.DEPTH24_STENCIL8:f===qn?P=i.DEPTH32F_STENCIL8:f===js&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===Ni||f===Ks?P=i.DEPTH_COMPONENT24:f===qn?P=i.DEPTH_COMPONENT32F:f===js&&(P=i.DEPTH_COMPONENT16),P}function y(R,f){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==Cn?Math.log2(Math.max(f.width,f.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?f.mipmaps.length:1}function b(R){const f=R.target;f.removeEventListener("dispose",b),C(f),f.isVideoTexture&&h.delete(f)}function T(R){const f=R.target;f.removeEventListener("dispose",T),E(f)}function C(R){const f=n.get(R);if(f.__webglInit===void 0)return;const P=R.source,L=d.get(P);if(L){const B=L[f.__cacheKey];B.usedTimes--,B.usedTimes===0&&w(R),Object.keys(L).length===0&&d.delete(P)}n.remove(R)}function w(R){const f=n.get(R);i.deleteTexture(f.__webglTexture);const P=R.source,L=d.get(P);delete L[f.__cacheKey],o.memory.textures--}function E(R){const f=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(f.__webglFramebuffer[L]))for(let B=0;B<f.__webglFramebuffer[L].length;B++)i.deleteFramebuffer(f.__webglFramebuffer[L][B]);else i.deleteFramebuffer(f.__webglFramebuffer[L]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[L])}else{if(Array.isArray(f.__webglFramebuffer))for(let L=0;L<f.__webglFramebuffer.length;L++)i.deleteFramebuffer(f.__webglFramebuffer[L]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let L=0;L<f.__webglColorRenderbuffer.length;L++)f.__webglColorRenderbuffer[L]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[L]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const P=R.textures;for(let L=0,B=P.length;L<B;L++){const O=n.get(P[L]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),o.memory.textures--),n.remove(P[L])}n.remove(R)}let I=0;function k(){I=0}function z(){const R=I;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),I+=1,R}function Z(R){const f=[];return f.push(R.wrapS),f.push(R.wrapT),f.push(R.wrapR||0),f.push(R.magFilter),f.push(R.minFilter),f.push(R.anisotropy),f.push(R.internalFormat),f.push(R.format),f.push(R.type),f.push(R.generateMipmaps),f.push(R.premultiplyAlpha),f.push(R.flipY),f.push(R.unpackAlignment),f.push(R.colorSpace),f.join()}function W(R,f){const P=n.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){const L=R.image;if(L===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(L.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(P,R,f);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+f)}function J(R,f){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){nt(P,R,f);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+f)}function et(R,f){const P=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){nt(P,R,f);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+f)}function X(R,f){const P=n.get(R);if(R.version>0&&P.__version!==R.version){ct(P,R,f);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+f)}const gt={[Zs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[ya]:i.MIRRORED_REPEAT},pt={[yn]:i.NEAREST,[Nd]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},Et={[Od]:i.NEVER,[Wd]:i.ALWAYS,[Bd]:i.LESS,[Vh]:i.LEQUAL,[zd]:i.EQUAL,[Gd]:i.GEQUAL,[Hd]:i.GREATER,[Vd]:i.NOTEQUAL};function kt(R,f){if(f.type===qn&&t.has("OES_texture_float_linear")===!1&&(f.magFilter===Cn||f.magFilter===wo||f.magFilter===mr||f.magFilter===Pi||f.minFilter===Cn||f.minFilter===wo||f.minFilter===mr||f.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,gt[f.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,gt[f.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,gt[f.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pt[f.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pt[f.minFilter]),f.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Et[f.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===yn||f.minFilter!==mr&&f.minFilter!==Pi||f.type===qn&&t.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,s.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function qt(R,f){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,f.addEventListener("dispose",b));const L=f.source;let B=d.get(L);B===void 0&&(B={},d.set(L,B));const O=Z(f);if(O!==R.__cacheKey){B[O]===void 0&&(B[O]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),B[O].usedTimes++;const lt=B[R.__cacheKey];lt!==void 0&&(B[R.__cacheKey].usedTimes--,lt.usedTimes===0&&w(f)),R.__cacheKey=O,R.__webglTexture=B[O].texture}return P}function ne(R,f,P){return Math.floor(Math.floor(R/P)/f)}function Zt(R,f,P,L){const O=R.updateRanges;if(O.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,P,L,f.data);else{O.sort((j,mt)=>j.start-mt.start);let lt=0;for(let j=1;j<O.length;j++){const mt=O[lt],Bt=O[j],Pt=mt.start+mt.count,wt=ne(Bt.start,f.width,4),Gt=ne(mt.start,f.width,4);Bt.start<=Pt+1&&wt===Gt&&ne(Bt.start+Bt.count-1,f.width,4)===wt?mt.count=Math.max(mt.count,Bt.start+Bt.count-mt.start):(++lt,O[lt]=Bt)}O.length=lt+1;const tt=i.getParameter(i.UNPACK_ROW_LENGTH),St=i.getParameter(i.UNPACK_SKIP_PIXELS),ft=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let j=0,mt=O.length;j<mt;j++){const Bt=O[j],Pt=Math.floor(Bt.start/4),wt=Math.ceil(Bt.count/4),Gt=Pt%f.width,F=Math.floor(Pt/f.width),xt=wt,bt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Gt,F,xt,bt,P,L,f.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,tt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,St),i.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function nt(R,f,P){let L=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(L=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(L=i.TEXTURE_3D);const B=qt(R,f),O=f.source;e.bindTexture(L,R.__webglTexture,i.TEXTURE0+P);const lt=n.get(O);if(O.version!==lt.__version||B===!0){e.activeTexture(i.TEXTURE0+P);const tt=le.getPrimaries(le.workingColorSpace),St=f.colorSpace===li?null:le.getPrimaries(f.colorSpace),ft=f.colorSpace===li||tt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let j=x(f.image,!1,s.maxTextureSize);j=it(f,j);const mt=r.convert(f.format,f.colorSpace),Bt=r.convert(f.type);let Pt=M(f.internalFormat,mt,Bt,f.colorSpace,f.isVideoTexture);kt(L,f);let wt;const Gt=f.mipmaps,F=f.isVideoTexture!==!0,xt=lt.__version===void 0||B===!0,bt=O.dataReady,Nt=y(f,j);if(f.isDepthTexture)Pt=v(f.format===tr,f.type),xt&&(F?e.texStorage2D(i.TEXTURE_2D,1,Pt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,Pt,j.width,j.height,0,mt,Bt,null));else if(f.isDataTexture)if(Gt.length>0){F&&xt&&e.texStorage2D(i.TEXTURE_2D,Nt,Pt,Gt[0].width,Gt[0].height);for(let vt=0,at=Gt.length;vt<at;vt++)wt=Gt[vt],F?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,mt,Bt,wt.data):e.texImage2D(i.TEXTURE_2D,vt,Pt,wt.width,wt.height,0,mt,Bt,wt.data);f.generateMipmaps=!1}else F?(xt&&e.texStorage2D(i.TEXTURE_2D,Nt,Pt,j.width,j.height),bt&&Zt(f,j,mt,Bt)):e.texImage2D(i.TEXTURE_2D,0,Pt,j.width,j.height,0,mt,Bt,j.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){F&&xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Pt,Gt[0].width,Gt[0].height,j.depth);for(let vt=0,at=Gt.length;vt<at;vt++)if(wt=Gt[vt],f.format!==vn)if(mt!==null)if(F){if(bt)if(f.layerUpdates.size>0){const It=zc(wt.width,wt.height,f.format,f.type);for(const Yt of f.layerUpdates){const me=wt.data.subarray(Yt*It/wt.data.BYTES_PER_ELEMENT,(Yt+1)*It/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Yt,wt.width,wt.height,1,mt,me)}f.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,wt.width,wt.height,j.depth,mt,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Pt,wt.width,wt.height,j.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?bt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,wt.width,wt.height,j.depth,mt,Bt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Pt,wt.width,wt.height,j.depth,0,mt,Bt,wt.data)}else{F&&xt&&e.texStorage2D(i.TEXTURE_2D,Nt,Pt,Gt[0].width,Gt[0].height);for(let vt=0,at=Gt.length;vt<at;vt++)wt=Gt[vt],f.format!==vn?mt!==null?F?bt&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,mt,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,wt.width,wt.height,mt,Bt,wt.data):e.texImage2D(i.TEXTURE_2D,vt,Pt,wt.width,wt.height,0,mt,Bt,wt.data)}else if(f.isDataArrayTexture)if(F){if(xt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Pt,j.width,j.height,j.depth),bt)if(f.layerUpdates.size>0){const vt=zc(j.width,j.height,f.format,f.type);for(const at of f.layerUpdates){const It=j.data.subarray(at*vt/j.data.BYTES_PER_ELEMENT,(at+1)*vt/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,j.width,j.height,1,mt,Bt,It)}f.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,mt,Bt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Pt,j.width,j.height,j.depth,0,mt,Bt,j.data);else if(f.isData3DTexture)F?(xt&&e.texStorage3D(i.TEXTURE_3D,Nt,Pt,j.width,j.height,j.depth),bt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,mt,Bt,j.data)):e.texImage3D(i.TEXTURE_3D,0,Pt,j.width,j.height,j.depth,0,mt,Bt,j.data);else if(f.isFramebufferTexture){if(xt)if(F)e.texStorage2D(i.TEXTURE_2D,Nt,Pt,j.width,j.height);else{let vt=j.width,at=j.height;for(let It=0;It<Nt;It++)e.texImage2D(i.TEXTURE_2D,It,Pt,vt,at,0,mt,Bt,null),vt>>=1,at>>=1}}else if(Gt.length>0){if(F&&xt){const vt=ht(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Nt,Pt,vt.width,vt.height)}for(let vt=0,at=Gt.length;vt<at;vt++)wt=Gt[vt],F?bt&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,mt,Bt,wt):e.texImage2D(i.TEXTURE_2D,vt,Pt,mt,Bt,wt);f.generateMipmaps=!1}else if(F){if(xt){const vt=ht(j);e.texStorage2D(i.TEXTURE_2D,Nt,Pt,vt.width,vt.height)}bt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Bt,j)}else e.texImage2D(i.TEXTURE_2D,0,Pt,mt,Bt,j);m(f)&&p(L),lt.__version=O.version,f.onUpdate&&f.onUpdate(f)}R.__version=f.version}function ct(R,f,P){if(f.image.length!==6)return;const L=qt(R,f),B=f.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+P);const O=n.get(B);if(B.version!==O.__version||L===!0){e.activeTexture(i.TEXTURE0+P);const lt=le.getPrimaries(le.workingColorSpace),tt=f.colorSpace===li?null:le.getPrimaries(f.colorSpace),St=f.colorSpace===li||lt===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const ft=f.isCompressedTexture||f.image[0].isCompressedTexture,j=f.image[0]&&f.image[0].isDataTexture,mt=[];for(let at=0;at<6;at++)!ft&&!j?mt[at]=x(f.image[at],!0,s.maxCubemapSize):mt[at]=j?f.image[at].image:f.image[at],mt[at]=it(f,mt[at]);const Bt=mt[0],Pt=r.convert(f.format,f.colorSpace),wt=r.convert(f.type),Gt=M(f.internalFormat,Pt,wt,f.colorSpace),F=f.isVideoTexture!==!0,xt=O.__version===void 0||L===!0,bt=B.dataReady;let Nt=y(f,Bt);kt(i.TEXTURE_CUBE_MAP,f);let vt;if(ft){F&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Gt,Bt.width,Bt.height);for(let at=0;at<6;at++){vt=mt[at].mipmaps;for(let It=0;It<vt.length;It++){const Yt=vt[It];f.format!==vn?Pt!==null?F?bt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,Yt.width,Yt.height,Pt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Gt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,0,0,Yt.width,Yt.height,Pt,wt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It,Gt,Yt.width,Yt.height,0,Pt,wt,Yt.data)}}}else{if(vt=f.mipmaps,F&&xt){vt.length>0&&Nt++;const at=ht(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Gt,at.width,at.height)}for(let at=0;at<6;at++)if(j){F?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,mt[at].width,mt[at].height,Pt,wt,mt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Gt,mt[at].width,mt[at].height,0,Pt,wt,mt[at].data);for(let It=0;It<vt.length;It++){const me=vt[It].image[at].image;F?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,me.width,me.height,Pt,wt,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Gt,me.width,me.height,0,Pt,wt,me.data)}}else{F?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Pt,wt,mt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,Gt,Pt,wt,mt[at]);for(let It=0;It<vt.length;It++){const Yt=vt[It];F?bt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,0,0,Pt,wt,Yt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,It+1,Gt,Pt,wt,Yt.image[at])}}}m(f)&&p(i.TEXTURE_CUBE_MAP),O.__version=B.version,f.onUpdate&&f.onUpdate(f)}R.__version=f.version}function _t(R,f,P,L,B,O){const lt=r.convert(P.format,P.colorSpace),tt=r.convert(P.type),St=M(P.internalFormat,lt,tt,P.colorSpace),ft=n.get(f),j=n.get(P);if(j.__renderTarget=f,!ft.__hasExternalTextures){const mt=Math.max(1,f.width>>O),Bt=Math.max(1,f.height>>O);B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?e.texImage3D(B,O,St,mt,Bt,f.depth,0,lt,tt,null):e.texImage2D(B,O,St,mt,Bt,0,lt,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),G(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,B,j.__webglTexture,0,$(f)):(B===i.TEXTURE_2D||B>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,L,B,j.__webglTexture,O),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Lt(R,f,P){if(i.bindRenderbuffer(i.RENDERBUFFER,R),f.depthBuffer){const L=f.depthTexture,B=L&&L.isDepthTexture?L.type:null,O=v(f.stencilBuffer,B),lt=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=$(f);G(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,O,f.width,f.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,O,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,O,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,R)}else{const L=f.textures;for(let B=0;B<L.length;B++){const O=L[B],lt=r.convert(O.format,O.colorSpace),tt=r.convert(O.type),St=M(O.internalFormat,lt,tt,O.colorSpace),ft=$(f);P&&G(f)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,St,f.width,f.height):G(f)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,St,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,St,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Dt(R,f){if(f&&f.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const L=n.get(f.depthTexture);L.__renderTarget=f,(!L.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),W(f.depthTexture,0);const B=L.__webglTexture,O=$(f);if(f.depthTexture.format===Qs)G(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(f.depthTexture.format===tr)G(f)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,O):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function $t(R){const f=n.get(R),P=R.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==R.depthTexture){const L=R.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),L){const B=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,L.removeEventListener("dispose",B)};L.addEventListener("dispose",B),f.__depthDisposeCallback=B}f.__boundDepthTexture=L}if(R.depthTexture&&!f.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const L=R.texture.mipmaps;L&&L.length>0?Dt(f.__webglFramebuffer[0],R):Dt(f.__webglFramebuffer,R)}else if(P){f.__webglDepthbuffer=[];for(let L=0;L<6;L++)if(e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[L]),f.__webglDepthbuffer[L]===void 0)f.__webglDepthbuffer[L]=i.createRenderbuffer(),Lt(f.__webglDepthbuffer[L],R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=f.__webglDepthbuffer[L];i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,O)}}else{const L=R.texture.mipmaps;if(L&&L.length>0?e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),Lt(f.__webglDepthbuffer,R,!1);else{const B=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,O),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,O)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function re(R,f,P){const L=n.get(R);f!==void 0&&_t(L.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&$t(R)}function N(R){const f=R.texture,P=n.get(R),L=n.get(f);R.addEventListener("dispose",T);const B=R.textures,O=R.isWebGLCubeRenderTarget===!0,lt=B.length>1;if(lt||(L.__webglTexture===void 0&&(L.__webglTexture=i.createTexture()),L.__version=f.version,o.memory.textures++),O){P.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(f.mipmaps&&f.mipmaps.length>0){P.__webglFramebuffer[tt]=[];for(let St=0;St<f.mipmaps.length;St++)P.__webglFramebuffer[tt][St]=i.createFramebuffer()}else P.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){P.__webglFramebuffer=[];for(let tt=0;tt<f.mipmaps.length;tt++)P.__webglFramebuffer[tt]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(lt)for(let tt=0,St=B.length;tt<St;tt++){const ft=n.get(B[tt]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&G(R)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let tt=0;tt<B.length;tt++){const St=B[tt];P.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[tt]);const ft=r.convert(St.format,St.colorSpace),j=r.convert(St.type),mt=M(St.internalFormat,ft,j,St.colorSpace,R.isXRRenderTarget===!0),Bt=$(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,mt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,P.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),Lt(P.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture),kt(i.TEXTURE_CUBE_MAP,f);for(let tt=0;tt<6;tt++)if(f.mipmaps&&f.mipmaps.length>0)for(let St=0;St<f.mipmaps.length;St++)_t(P.__webglFramebuffer[tt][St],R,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,St);else _t(P.__webglFramebuffer[tt],R,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(f)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let tt=0,St=B.length;tt<St;tt++){const ft=B[tt],j=n.get(ft);let mt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(mt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,j.__webglTexture),kt(mt,ft),_t(P.__webglFramebuffer,R,ft,i.COLOR_ATTACHMENT0+tt,mt,0),m(ft)&&p(mt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,L.__webglTexture),kt(tt,f),f.mipmaps&&f.mipmaps.length>0)for(let St=0;St<f.mipmaps.length;St++)_t(P.__webglFramebuffer[St],R,f,i.COLOR_ATTACHMENT0,tt,St);else _t(P.__webglFramebuffer,R,f,i.COLOR_ATTACHMENT0,tt,0);m(f)&&p(tt),e.unbindTexture()}R.depthBuffer&&$t(R)}function ot(R){const f=R.textures;for(let P=0,L=f.length;P<L;P++){const B=f[P];if(m(B)){const O=S(R),lt=n.get(B).__webglTexture;e.bindTexture(O,lt),p(O),e.unbindTexture()}}}const st=[],rt=[];function U(R){if(R.samples>0){if(G(R)===!1){const f=R.textures,P=R.width,L=R.height;let B=i.COLOR_BUFFER_BIT;const O=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(R),tt=f.length>1;if(tt)for(let ft=0;ft<f.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);const St=R.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ft=0;ft<f.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(B|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(B|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);const j=n.get(f[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,P,L,0,0,P,L,B,i.NEAREST),c===!0&&(st.length=0,rt.length=0,st.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(st.push(O),rt.push(O),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let ft=0;ft<f.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ft]);const j=n.get(f[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,j,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const f=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function $(R){return Math.min(s.maxSamples,R.samples)}function G(R){const f=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function Q(R){const f=o.render.frame;h.get(R)!==f&&(h.set(R,f),R.update())}function it(R,f){const P=R.colorSpace,L=R.format,B=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==xs&&P!==li&&(le.getTransfer(P)===de?(L!==vn||B!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),f}function ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=W,this.setTexture2DArray=J,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=re,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=G}function K_(i,t){function e(n,s=li){let r;const o=le.getTransfer(s);if(n===Un)return i.UNSIGNED_BYTE;if(n===Ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===yl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dh)return i.BYTE;if(n===Nh)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===xl)return i.INT;if(n===Ni)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===Ts)return i.HALF_FLOAT;if(n===Fh)return i.ALPHA;if(n===Oh)return i.RGB;if(n===vn)return i.RGBA;if(n===Qs)return i.DEPTH_COMPONENT;if(n===tr)return i.DEPTH_STENCIL;if(n===Bh)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===zh)return i.RG;if(n===El)return i.RG_INTEGER;if(n===bl)return i.RGBA_INTEGER;if(n===qr||n===Jr||n===Zr||n===jr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Sa||n===Ea||n===ba||n===wa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Sa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Aa||n===Ra)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ta||n===Aa)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ra)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ca||n===Pa||n===La||n===Ia||n===Da||n===Na||n===Ua||n===ka||n===Fa||n===Oa||n===Ba||n===za||n===Ha||n===Va)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ca)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Da)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ua)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Va)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===Wa||n===Xa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$a||n===Ya||n===qa||n===Ja)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===$a)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ya)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
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

}`;class ev{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new iu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Kn({vertexShader:Q_,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ut(new ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nv extends Bi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,g=null,_=null;const x=typeof XRWebGLBinding<"u",m=new ev,p={},S=e.getContextAttributes();let M=null,v=null;const y=[],b=[],T=new dt;let C=null;const w=new Be;w.viewport=new ge;const E=new Be;E.viewport=new ge;const I=[w,E],k=new Sp;let z=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=y[nt];return ct===void 0&&(ct=new $o,y[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=y[nt];return ct===void 0&&(ct=new $o,y[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=y[nt];return ct===void 0&&(ct=new $o,y[nt]=ct),ct.getHandSpace()};function W(nt){const ct=b.indexOf(nt.inputSource);if(ct===-1)return;const _t=y[ct];_t!==void 0&&(_t.update(nt.inputSource,nt.frame,l||o),_t.dispatchEvent({type:nt.type,data:nt.inputSource}))}function J(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",et);for(let nt=0;nt<y.length;nt++){const ct=b[nt];ct!==null&&(b[nt]=null,y[nt].disconnect(ct))}z=null,Z=null,m.reset();for(const nt in p)delete p[nt];t.setRenderTarget(M),g=null,d=null,u=null,s=null,v=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(nt){l=nt},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",J),s.addEventListener("inputsourceschange",et),S.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Lt=null,Dt=null;S.depth&&(Dt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=S.stencil?tr:Qs,Lt=S.stencil?Ks:Ni);const $t={colorFormat:e.RGBA8,depthFormat:Dt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer($t),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new pi(d.textureWidth,d.textureHeight,{format:vn,type:Un,depthTexture:new nu(d.textureWidth,d.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const _t={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new pi(g.framebufferWidth,g.framebufferHeight,{format:vn,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Zt.setContext(s),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(nt){for(let ct=0;ct<nt.removed.length;ct++){const _t=nt.removed[ct],Lt=b.indexOf(_t);Lt>=0&&(b[Lt]=null,y[Lt].disconnect(_t))}for(let ct=0;ct<nt.added.length;ct++){const _t=nt.added[ct];let Lt=b.indexOf(_t);if(Lt===-1){for(let $t=0;$t<y.length;$t++)if($t>=b.length){b.push(_t),Lt=$t;break}else if(b[$t]===null){b[$t]=_t,Lt=$t;break}if(Lt===-1)break}const Dt=y[Lt];Dt&&Dt.connect(_t)}}const X=new D,gt=new D;function pt(nt,ct,_t){X.setFromMatrixPosition(ct.matrixWorld),gt.setFromMatrixPosition(_t.matrixWorld);const Lt=X.distanceTo(gt),Dt=ct.projectionMatrix.elements,$t=_t.projectionMatrix.elements,re=Dt[14]/(Dt[10]-1),N=Dt[14]/(Dt[10]+1),ot=(Dt[9]+1)/Dt[5],st=(Dt[9]-1)/Dt[5],rt=(Dt[8]-1)/Dt[0],U=($t[8]+1)/$t[0],$=re*rt,G=re*U,Q=Lt/(-rt+U),it=Q*-rt;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(it),nt.translateZ(Q),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Dt[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const ht=re+Q,R=N+Q,f=$-it,P=G+(Lt-it),L=ot*N/R*ht,B=st*N/R*ht;nt.projectionMatrix.makePerspective(f,P,L,B,ht,R),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function Et(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ct=nt.near,_t=nt.far;m.texture!==null&&(m.depthNear>0&&(ct=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),k.near=E.near=w.near=ct,k.far=E.far=w.far=_t,(z!==k.near||Z!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,Z=k.far),k.layers.mask=nt.layers.mask|6,w.layers.mask=k.layers.mask&3,E.layers.mask=k.layers.mask&5;const Lt=nt.parent,Dt=k.cameras;Et(k,Lt);for(let $t=0;$t<Dt.length;$t++)Et(Dt[$t],Lt);Dt.length===2?pt(k,w,E):k.projectionMatrix.copy(w.projectionMatrix),kt(nt,k,Lt)};function kt(nt,ct,_t){_t===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(_t.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=er*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(nt){c=nt,d!==null&&(d.fixedFoveation=nt),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(nt){return p[nt]};let qt=null;function ne(nt,ct){if(h=ct.getViewerPose(l||o),_=ct,h!==null){const _t=h.views;g!==null&&(t.setRenderTargetFramebuffer(v,g.framebuffer),t.setRenderTarget(v));let Lt=!1;_t.length!==k.cameras.length&&(k.cameras.length=0,Lt=!0);for(let N=0;N<_t.length;N++){const ot=_t[N];let st=null;if(g!==null)st=g.getViewport(ot);else{const U=u.getViewSubImage(d,ot);st=U.viewport,N===0&&(t.setRenderTargetTextures(v,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(v))}let rt=I[N];rt===void 0&&(rt=new Be,rt.layers.enable(N),rt.viewport=new ge,I[N]=rt),rt.matrix.fromArray(ot.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(ot.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(st.x,st.y,st.width,st.height),N===0&&(k.matrix.copy(rt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Lt===!0&&k.cameras.push(rt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const N=u.getDepthInformation(_t[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(Dt&&Dt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let N=0;N<_t.length;N++){const ot=_t[N].camera;if(ot){let st=p[ot];st||(st=new iu,p[ot]=st);const rt=u.getCameraImage(ot);st.sourceTexture=rt}}}}for(let _t=0;_t<y.length;_t++){const Lt=b[_t],Dt=y[_t];Lt!==null&&Dt!==void 0&&Dt.update(Lt,ct,l||o)}qt&&qt(nt,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),_=null}const Zt=new pu;Zt.setAnimationLoop(ne),this.setAnimationLoop=function(nt){qt=nt},this.dispose=function(){}}}const Ei=new kn,iv=new ve;function sv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&g(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,v=S.envMapRotation;M&&(m.envMap.value=M,Ei.copy(v),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(Ei)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function rv(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const v=M.program;n.uniformBlockBinding(S,v)}function l(S,M){let v=s[S.id];v===void 0&&(_(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",m));const y=M.program;n.updateUBOMapping(S,y);const b=t.render.frame;r[S.id]!==b&&(d(S),r[S.id]=b)}function h(S){const M=u();S.__bindingPointIndex=M;const v=i.createBuffer(),y=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],v=S.uniforms,y=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,T=v.length;b<T;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let w=0,E=C.length;w<E;w++){const I=C[w];if(g(I,b,w,y)===!0){const k=I.__offset,z=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let W=0;W<z.length;W++){const J=z[W],et=x(J);typeof J=="number"||typeof J=="boolean"?(I.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,k+Z,I.__data)):J.isMatrix3?(I.__data[0]=J.elements[0],I.__data[1]=J.elements[1],I.__data[2]=J.elements[2],I.__data[3]=0,I.__data[4]=J.elements[3],I.__data[5]=J.elements[4],I.__data[6]=J.elements[5],I.__data[7]=0,I.__data[8]=J.elements[6],I.__data[9]=J.elements[7],I.__data[10]=J.elements[8],I.__data[11]=0):(J.toArray(I.__data,Z),Z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,M,v,y){const b=S.value,T=M+"_"+v;if(y[T]===void 0)return typeof b=="number"||typeof b=="boolean"?y[T]=b:y[T]=b.clone(),!0;{const C=y[T];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return y[T]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function _(S){const M=S.uniforms;let v=0;const y=16;for(let T=0,C=M.length;T<C;T++){const w=Array.isArray(M[T])?M[T]:[M[T]];for(let E=0,I=w.length;E<I;E++){const k=w[E],z=Array.isArray(k.value)?k.value:[k.value];for(let Z=0,W=z.length;Z<W;Z++){const J=z[Z],et=x(J),X=v%y,gt=X%et.boundary,pt=X+gt;v+=gt,pt!==0&&y-pt<et.storage&&(v+=y-pt),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=et.storage}}}const b=v%y;return b>0&&(v+=y-b),S.__size=v,S.__cache={},this}function x(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ov{constructor(t={}){const{canvas:e=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let y=!1;this._outputColorSpace=Me;let b=0,T=0,C=null,w=-1,E=null;const I=new ge,k=new ge;let z=null;const Z=new ee(0);let W=0,J=e.width,et=e.height,X=1,gt=null,pt=null;const Et=new ge(0,0,J,et),kt=new ge(0,0,J,et);let qt=!1;const ne=new Pl;let Zt=!1,nt=!1;const ct=new ve,_t=new D,Lt=new ge,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function re(){return C===null?X:1}let N=n;function ot(A,H){return e.getContext(A,H)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${vl}`),e.addEventListener("webglcontextlost",bt,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),N===null){const H="webgl2";if(N=ot(H,A),N===null)throw ot(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let st,rt,U,$,G,Q,it,ht,R,f,P,L,B,O,lt,tt,St,ft,j,mt,Bt,Pt,wt,Gt;function F(){st=new gg(N),st.init(),Pt=new K_(N,st),rt=new cg(N,st,t,Pt),U=new Z_(N,st),rt.reversedDepthBuffer&&d&&U.buffers.depth.setReversed(!0),$=new xg(N),G=new F_,Q=new j_(N,st,U,G,rt,Pt,$),it=new ug(v),ht=new mg(v),R=new wp(N),wt=new ag(N,R),f=new _g(N,R,$,wt),P=new yg(N,f,R,$),j=new Mg(N,rt,Q),tt=new hg(G),L=new k_(v,it,ht,st,rt,wt,tt),B=new sv(v,G),O=new B_,lt=new X_(st),ft=new og(v,it,ht,U,P,g,c),St=new q_(v,P,rt),Gt=new rv(N,$,rt,U),mt=new lg(N,st,$),Bt=new vg(N,st,$),$.programs=L.programs,v.capabilities=rt,v.extensions=st,v.properties=G,v.renderLists=O,v.shadowMap=St,v.state=U,v.info=$}F();const xt=new nv(v,N);this.xr=xt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=st.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=st.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(J,et,!1))},this.getSize=function(A){return A.set(J,et)},this.setSize=function(A,H,Y=!0){if(xt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,et=H,e.width=Math.floor(A*X),e.height=Math.floor(H*X),Y===!0&&(e.style.width=A+"px",e.style.height=H+"px"),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(J*X,et*X).floor()},this.setDrawingBufferSize=function(A,H,Y){J=A,et=H,X=Y,e.width=Math.floor(A*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Et)},this.setViewport=function(A,H,Y,q){A.isVector4?Et.set(A.x,A.y,A.z,A.w):Et.set(A,H,Y,q),U.viewport(I.copy(Et).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(kt)},this.setScissor=function(A,H,Y,q){A.isVector4?kt.set(A.x,A.y,A.z,A.w):kt.set(A,H,Y,q),U.scissor(k.copy(kt).multiplyScalar(X).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(A){U.setScissorTest(qt=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){pt=A},this.getClearColor=function(A){return A.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Y=!0){let q=0;if(A){let V=!1;if(C!==null){const yt=C.texture.format;V=yt===bl||yt===El||yt===Sl}if(V){const yt=C.texture.type,Ct=yt===Un||yt===Ni||yt===js||yt===Ks||yt===Ml||yt===yl,Ot=ft.getClearColor(),Ut=ft.getClearAlpha(),Vt=Ot.r,Xt=Ot.g,zt=Ot.b;Ct?(_[0]=Vt,_[1]=Xt,_[2]=zt,_[3]=Ut,N.clearBufferuiv(N.COLOR,0,_)):(x[0]=Vt,x[1]=Xt,x[2]=zt,x[3]=Ut,N.clearBufferiv(N.COLOR,0,x))}else q|=N.COLOR_BUFFER_BIT}H&&(q|=N.DEPTH_BUFFER_BIT),Y&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",bt,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ft.dispose(),O.dispose(),lt.dispose(),G.dispose(),it.dispose(),ht.dispose(),P.dispose(),wt.dispose(),Gt.dispose(),L.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",wn),xt.removeEventListener("sessionend",tc),gi.stop()};function bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=$.autoReset,H=St.enabled,Y=St.autoUpdate,q=St.needsUpdate,V=St.type;F(),$.autoReset=A,St.enabled=H,St.autoUpdate=Y,St.needsUpdate=q,St.type=V}function vt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const H=A.target;H.removeEventListener("dispose",at),It(H)}function It(A){Yt(A),G.remove(A)}function Yt(A){const H=G.get(A).programs;H!==void 0&&(H.forEach(function(Y){L.releaseProgram(Y)}),A.isShaderMaterial&&L.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Y,q,V,yt){H===null&&(H=Dt);const Ct=V.isMesh&&V.matrixWorld.determinant()<0,Ot=ju(A,H,Y,q,V);U.setMaterial(q,Ct);let Ut=Y.index,Vt=1;if(q.wireframe===!0){if(Ut=f.getWireframeAttribute(Y),Ut===void 0)return;Vt=2}const Xt=Y.drawRange,zt=Y.attributes.position;let ie=Xt.start*Vt,ue=(Xt.start+Xt.count)*Vt;yt!==null&&(ie=Math.max(ie,yt.start*Vt),ue=Math.min(ue,(yt.start+yt.count)*Vt)),Ut!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Ut.count)):zt!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,zt.count));const Te=ue-ie;if(Te<0||Te===1/0)return;wt.setup(V,q,Ot,Y,Ut);let xe,pe=mt;if(Ut!==null&&(xe=R.get(Ut),pe=Bt,pe.setIndex(xe)),V.isMesh)q.wireframe===!0?(U.setLineWidth(q.wireframeLinewidth*re()),pe.setMode(N.LINES)):pe.setMode(N.TRIANGLES);else if(V.isLine){let Ht=q.linewidth;Ht===void 0&&(Ht=1),U.setLineWidth(Ht*re()),V.isLineSegments?pe.setMode(N.LINES):V.isLineLoop?pe.setMode(N.LINE_LOOP):pe.setMode(N.LINE_STRIP)}else V.isPoints?pe.setMode(N.POINTS):V.isSprite&&pe.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ht=V._multiDrawStarts,Ee=V._multiDrawCounts,ae=V._multiDrawCount,Je=Ut?R.get(Ut).bytesPerElement:1,zi=G.get(q).currentProgram.getUniforms();for(let Ze=0;Ze<ae;Ze++)zi.setValue(N,"_gl_DrawID",Ze),pe.render(Ht[Ze]/Je,Ee[Ze])}else if(V.isInstancedMesh)pe.renderInstances(ie,Te,V.count);else if(Y.isInstancedBufferGeometry){const Ht=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ee=Math.min(Y.instanceCount,Ht);pe.renderInstances(ie,Te,Ee)}else pe.render(ie,Te)};function me(A,H,Y){A.transparent===!0&&A.side===Re&&A.forceSinglePass===!1?(A.side=qe,A.needsUpdate=!0,pr(A,H,Y),A.side=fi,A.needsUpdate=!0,pr(A,H,Y),A.side=Re):pr(A,H,Y)}this.compile=function(A,H,Y=null){Y===null&&(Y=A),p=lt.get(Y),p.init(H),M.push(p),Y.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==Y&&A.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const q=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const yt=V.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){const Ot=yt[Ct];me(Ot,Y,V),q.add(Ot)}else me(yt,Y,V),q.add(yt)}),p=M.pop(),q},this.compileAsync=function(A,H,Y=null){const q=this.compile(A,H,Y);return new Promise(V=>{function yt(){if(q.forEach(function(Ct){G.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){V(A);return}setTimeout(yt,10)}st.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ce=null;function On(A){ce&&ce(A)}function wn(){gi.stop()}function tc(){gi.start()}const gi=new pu;gi.setAnimationLoop(On),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(A){ce=A,xt.setAnimationLoop(A),A===null?gi.stop():gi.start()},xt.addEventListener("sessionstart",wn),xt.addEventListener("sessionend",tc),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(H),H=xt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,H,C),p=lt.get(A,M.length),p.init(H),M.push(p),ct.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ne.setFromProjectionMatrix(ct,Pn,H.reversedDepth),nt=this.localClippingEnabled,Zt=tt.init(this.clippingPlanes,nt),m=O.get(A,S.length),m.init(),S.push(m),xt.enabled===!0&&xt.isPresenting===!0){const yt=v.xr.getDepthSensingMesh();yt!==null&&Eo(yt,H,-1/0,v.sortObjects)}Eo(A,H,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(gt,pt),$t=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,$t&&ft.addToRenderList(m,A),this.info.render.frame++,Zt===!0&&tt.beginShadows();const Y=p.state.shadowsArray;St.render(Y,A,H),Zt===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const yt=H.cameras;if(V.length>0)for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const Ut=yt[Ct];nc(q,V,A,Ut)}$t&&ft.render(A);for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++){const Ut=yt[Ct];ec(m,A,Ut,Ut.viewport)}}else V.length>0&&nc(q,V,A,H),$t&&ft.render(A),ec(m,A,H);C!==null&&T===0&&(Q.updateMultisampleRenderTarget(C),Q.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,H),wt.resetDefaultState(),w=-1,E=null,M.pop(),M.length>0?(p=M[M.length-1],Zt===!0&&tt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Eo(A,H,Y,q){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){q&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);const Ct=P.update(A),Ot=A.material;Ot.visible&&m.push(A,Ct,Ot,Y,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){const Ct=P.update(A),Ot=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Lt.copy(Ct.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(Ot)){const Ut=Ct.groups;for(let Vt=0,Xt=Ut.length;Vt<Xt;Vt++){const zt=Ut[Vt],ie=Ot[zt.materialIndex];ie&&ie.visible&&m.push(A,Ct,ie,Y,Lt.z,zt)}}else Ot.visible&&m.push(A,Ct,Ot,Y,Lt.z,null)}}const yt=A.children;for(let Ct=0,Ot=yt.length;Ct<Ot;Ct++)Eo(yt[Ct],H,Y,q)}function ec(A,H,Y,q){const V=A.opaque,yt=A.transmissive,Ct=A.transparent;p.setupLightsView(Y),Zt===!0&&tt.setGlobalState(v.clippingPlanes,Y),q&&U.viewport(I.copy(q)),V.length>0&&fr(V,H,Y),yt.length>0&&fr(yt,H,Y),Ct.length>0&&fr(Ct,H,Y),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function nc(A,H,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new pi(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Ts:Un,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const yt=p.state.transmissionRenderTarget[q.id],Ct=q.viewport||I;yt.setSize(Ct.z*v.transmissionResolutionScale,Ct.w*v.transmissionResolutionScale);const Ot=v.getRenderTarget(),Ut=v.getActiveCubeFace(),Vt=v.getActiveMipmapLevel();v.setRenderTarget(yt),v.getClearColor(Z),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),$t&&ft.render(Y);const Xt=v.toneMapping;v.toneMapping=di;const zt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Zt===!0&&tt.setGlobalState(v.clippingPlanes,q),fr(A,Y,q),Q.updateMultisampleRenderTarget(yt),Q.updateRenderTargetMipmap(yt),st.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let ue=0,Te=H.length;ue<Te;ue++){const xe=H[ue],pe=xe.object,Ht=xe.geometry,Ee=xe.material,ae=xe.group;if(Ee.side===Re&&pe.layers.test(q.layers)){const Je=Ee.side;Ee.side=qe,Ee.needsUpdate=!0,ic(pe,Y,q,Ht,Ee,ae),Ee.side=Je,Ee.needsUpdate=!0,ie=!0}}ie===!0&&(Q.updateMultisampleRenderTarget(yt),Q.updateRenderTargetMipmap(yt))}v.setRenderTarget(Ot,Ut,Vt),v.setClearColor(Z,W),zt!==void 0&&(q.viewport=zt),v.toneMapping=Xt}function fr(A,H,Y){const q=H.isScene===!0?H.overrideMaterial:null;for(let V=0,yt=A.length;V<yt;V++){const Ct=A[V],Ot=Ct.object,Ut=Ct.geometry,Vt=Ct.group;let Xt=Ct.material;Xt.allowOverride===!0&&q!==null&&(Xt=q),Ot.layers.test(Y.layers)&&ic(Ot,H,Y,Ut,Xt,Vt)}}function ic(A,H,Y,q,V,yt){A.onBeforeRender(v,H,Y,q,V,yt),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,H,Y,q,A,yt),V.transparent===!0&&V.side===Re&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,v.renderBufferDirect(Y,H,q,V,A,yt),V.side=fi,V.needsUpdate=!0,v.renderBufferDirect(Y,H,q,V,A,yt),V.side=Re):v.renderBufferDirect(Y,H,q,V,A,yt),A.onAfterRender(v,H,Y,q,V,yt)}function pr(A,H,Y){H.isScene!==!0&&(H=Dt);const q=G.get(A),V=p.state.lights,yt=p.state.shadowsArray,Ct=V.state.version,Ot=L.getParameters(A,V.state,yt,H,Y),Ut=L.getProgramCacheKey(Ot);let Vt=q.programs;q.environment=A.isMeshStandardMaterial?H.environment:null,q.fog=H.fog,q.envMap=(A.isMeshStandardMaterial?ht:it).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Vt===void 0&&(A.addEventListener("dispose",at),Vt=new Map,q.programs=Vt);let Xt=Vt.get(Ut);if(Xt!==void 0){if(q.currentProgram===Xt&&q.lightsStateVersion===Ct)return rc(A,Ot),Xt}else Ot.uniforms=L.getUniforms(A),A.onBeforeCompile(Ot,v),Xt=L.acquireProgram(Ot,Ut),Vt.set(Ut,Xt),q.uniforms=Ot.uniforms;const zt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=tt.uniform),rc(A,Ot),q.needsLights=Qu(A),q.lightsStateVersion=Ct,q.needsLights&&(zt.ambientLightColor.value=V.state.ambient,zt.lightProbe.value=V.state.probe,zt.directionalLights.value=V.state.directional,zt.directionalLightShadows.value=V.state.directionalShadow,zt.spotLights.value=V.state.spot,zt.spotLightShadows.value=V.state.spotShadow,zt.rectAreaLights.value=V.state.rectArea,zt.ltc_1.value=V.state.rectAreaLTC1,zt.ltc_2.value=V.state.rectAreaLTC2,zt.pointLights.value=V.state.point,zt.pointLightShadows.value=V.state.pointShadow,zt.hemisphereLights.value=V.state.hemi,zt.directionalShadowMap.value=V.state.directionalShadowMap,zt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,zt.spotShadowMap.value=V.state.spotShadowMap,zt.spotLightMatrix.value=V.state.spotLightMatrix,zt.spotLightMap.value=V.state.spotLightMap,zt.pointShadowMap.value=V.state.pointShadowMap,zt.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Xt,q.uniformsList=null,Xt}function sc(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Kr.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function rc(A,H){const Y=G.get(A);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function ju(A,H,Y,q,V){H.isScene!==!0&&(H=Dt),Q.resetTextureUnits();const yt=H.fog,Ct=q.isMeshStandardMaterial?H.environment:null,Ot=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:xs,Ut=(q.isMeshStandardMaterial?ht:it).get(q.envMap||Ct),Vt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Xt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),zt=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,ue=!!Y.morphAttributes.color;let Te=di;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Te=v.toneMapping);const xe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=xe!==void 0?xe.length:0,Ht=G.get(q),Ee=p.state.lights;if(Zt===!0&&(nt===!0||A!==E)){const Ve=A===E&&q.id===w;tt.setState(q,A,Ve)}let ae=!1;q.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Ee.state.version||Ht.outputColorSpace!==Ot||V.isBatchedMesh&&Ht.batching===!1||!V.isBatchedMesh&&Ht.batching===!0||V.isBatchedMesh&&Ht.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ht.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ht.instancing===!1||!V.isInstancedMesh&&Ht.instancing===!0||V.isSkinnedMesh&&Ht.skinning===!1||!V.isSkinnedMesh&&Ht.skinning===!0||V.isInstancedMesh&&Ht.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ht.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ht.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ht.instancingMorph===!1&&V.morphTexture!==null||Ht.envMap!==Ut||q.fog===!0&&Ht.fog!==yt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==tt.numPlanes||Ht.numIntersection!==tt.numIntersection)||Ht.vertexAlphas!==Vt||Ht.vertexTangents!==Xt||Ht.morphTargets!==zt||Ht.morphNormals!==ie||Ht.morphColors!==ue||Ht.toneMapping!==Te||Ht.morphTargetsCount!==pe)&&(ae=!0):(ae=!0,Ht.__version=q.version);let Je=Ht.currentProgram;ae===!0&&(Je=pr(q,H,V));let zi=!1,Ze=!1,Ls=!1;const be=Je.getUniforms(),nn=Ht.uniforms;if(U.useProgram(Je.program)&&(zi=!0,Ze=!0,Ls=!0),q.id!==w&&(w=q.id,Ze=!0),zi||E!==A){U.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),be.setValue(N,"projectionMatrix",A.projectionMatrix),be.setValue(N,"viewMatrix",A.matrixWorldInverse);const Xe=be.map.cameraPosition;Xe!==void 0&&Xe.setValue(N,_t.setFromMatrixPosition(A.matrixWorld)),rt.logarithmicDepthBuffer&&be.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&be.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Ze=!0,Ls=!0)}if(V.isSkinnedMesh){be.setOptional(N,V,"bindMatrix"),be.setOptional(N,V,"bindMatrixInverse");const Ve=V.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),be.setValue(N,"boneTexture",Ve.boneTexture,Q))}V.isBatchedMesh&&(be.setOptional(N,V,"batchingTexture"),be.setValue(N,"batchingTexture",V._matricesTexture,Q),be.setOptional(N,V,"batchingIdTexture"),be.setValue(N,"batchingIdTexture",V._indirectTexture,Q),be.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&be.setValue(N,"batchingColorTexture",V._colorsTexture,Q));const sn=Y.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&j.update(V,Y,Je),(Ze||Ht.receiveShadow!==V.receiveShadow)&&(Ht.receiveShadow=V.receiveShadow,be.setValue(N,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(nn.envMap.value=Ut,nn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&H.environment!==null&&(nn.envMapIntensity.value=H.environmentIntensity),Ze&&(be.setValue(N,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Ku(nn,Ls),yt&&q.fog===!0&&B.refreshFogUniforms(nn,yt),B.refreshMaterialUniforms(nn,q,X,et,p.state.transmissionRenderTarget[A.id]),Kr.upload(N,sc(Ht),nn,Q)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Kr.upload(N,sc(Ht),nn,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&be.setValue(N,"center",V.center),be.setValue(N,"modelViewMatrix",V.modelViewMatrix),be.setValue(N,"normalMatrix",V.normalMatrix),be.setValue(N,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ve=q.uniformsGroups;for(let Xe=0,bo=Ve.length;Xe<bo;Xe++){const _i=Ve[Xe];Gt.update(_i,Je),Gt.bind(_i,Je)}}return Je}function Ku(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function Qu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,H,Y){const q=G.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),G.get(A.texture).__webglTexture=H,G.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const Y=G.get(A);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};const td=N.createFramebuffer();this.setRenderTarget=function(A,H=0,Y=0){C=A,b=H,T=Y;let q=!0,V=null,yt=!1,Ct=!1;if(A){const Ut=G.get(A);if(Ut.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(Ut.__webglFramebuffer===void 0)Q.setupRenderTarget(A);else if(Ut.__hasExternalTextures)Q.rebindTextures(A,G.get(A.texture).__webglTexture,G.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const zt=A.depthTexture;if(Ut.__boundDepthTexture!==zt){if(zt!==null&&G.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ct=!0);const Xt=G.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xt[H])?V=Xt[H][Y]:V=Xt[H],yt=!0):A.samples>0&&Q.useMultisampledRTT(A)===!1?V=G.get(A).__webglMultisampledFramebuffer:Array.isArray(Xt)?V=Xt[Y]:V=Xt,I.copy(A.viewport),k.copy(A.scissor),z=A.scissorTest}else I.copy(Et).multiplyScalar(X).floor(),k.copy(kt).multiplyScalar(X).floor(),z=qt;if(Y!==0&&(V=td),U.bindFramebuffer(N.FRAMEBUFFER,V)&&q&&U.drawBuffers(A,V),U.viewport(I),U.scissor(k),U.setScissorTest(z),yt){const Ut=G.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ut.__webglTexture,Y)}else if(Ct){const Ut=H;for(let Vt=0;Vt<A.textures.length;Vt++){const Xt=G.get(A.textures[Vt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Vt,Xt.__webglTexture,Y,Ut)}}else if(A!==null&&Y!==0){const Ut=G.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ut.__webglTexture,Y)}w=-1},this.readRenderTargetPixels=function(A,H,Y,q,V,yt,Ct,Ot=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut){U.bindFramebuffer(N.FRAMEBUFFER,Ut);try{const Vt=A.textures[Ot],Xt=Vt.format,zt=Vt.type;if(!rt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-q&&Y>=0&&Y<=A.height-V&&(A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ot),N.readPixels(H,Y,q,V,Pt.convert(Xt),Pt.convert(zt),yt))}finally{const Vt=C!==null?G.get(C).__webglFramebuffer:null;U.bindFramebuffer(N.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,H,Y,q,V,yt,Ct,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=G.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ut=Ut[Ct]),Ut)if(H>=0&&H<=A.width-q&&Y>=0&&Y<=A.height-V){U.bindFramebuffer(N.FRAMEBUFFER,Ut);const Vt=A.textures[Ot],Xt=Vt.format,zt=Vt.type;if(!rt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.bufferData(N.PIXEL_PACK_BUFFER,yt.byteLength,N.STREAM_READ),A.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ot),N.readPixels(H,Y,q,V,Pt.convert(Xt),Pt.convert(zt),0);const ue=C!==null?G.get(C).__webglFramebuffer:null;U.bindFramebuffer(N.FRAMEBUFFER,ue);const Te=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await cf(N,Te,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ie),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,yt),N.deleteBuffer(ie),N.deleteSync(Te),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Y=0){const q=Math.pow(2,-Y),V=Math.floor(A.image.width*q),yt=Math.floor(A.image.height*q),Ct=H!==null?H.x:0,Ot=H!==null?H.y:0;Q.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Ct,Ot,V,yt),U.unbindTexture()};const ed=N.createFramebuffer(),nd=N.createFramebuffer();this.copyTextureToTexture=function(A,H,Y=null,q=null,V=0,yt=null){yt===null&&(V!==0?(nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=V,V=0):yt=0);let Ct,Ot,Ut,Vt,Xt,zt,ie,ue,Te;const xe=A.isCompressedTexture?A.mipmaps[yt]:A.image;if(Y!==null)Ct=Y.max.x-Y.min.x,Ot=Y.max.y-Y.min.y,Ut=Y.isBox3?Y.max.z-Y.min.z:1,Vt=Y.min.x,Xt=Y.min.y,zt=Y.isBox3?Y.min.z:0;else{const sn=Math.pow(2,-V);Ct=Math.floor(xe.width*sn),Ot=Math.floor(xe.height*sn),A.isDataArrayTexture?Ut=xe.depth:A.isData3DTexture?Ut=Math.floor(xe.depth*sn):Ut=1,Vt=0,Xt=0,zt=0}q!==null?(ie=q.x,ue=q.y,Te=q.z):(ie=0,ue=0,Te=0);const pe=Pt.convert(H.format),Ht=Pt.convert(H.type);let Ee;H.isData3DTexture?(Q.setTexture3D(H,0),Ee=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Q.setTexture2DArray(H,0),Ee=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(H,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const ae=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zi=N.getParameter(N.UNPACK_SKIP_PIXELS),Ze=N.getParameter(N.UNPACK_SKIP_ROWS),Ls=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,zt);const be=A.isDataArrayTexture||A.isData3DTexture,nn=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const sn=G.get(A),Ve=G.get(H),Xe=G.get(sn.__renderTarget),bo=G.get(Ve.__renderTarget);U.bindFramebuffer(N.READ_FRAMEBUFFER,Xe.__webglFramebuffer),U.bindFramebuffer(N.DRAW_FRAMEBUFFER,bo.__webglFramebuffer);for(let _i=0;_i<Ut;_i++)be&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(A).__webglTexture,V,zt+_i),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(H).__webglTexture,yt,Te+_i)),N.blitFramebuffer(Vt,Xt,Ct,Ot,ie,ue,Ct,Ot,N.DEPTH_BUFFER_BIT,N.NEAREST);U.bindFramebuffer(N.READ_FRAMEBUFFER,null),U.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||G.has(A)){const sn=G.get(A),Ve=G.get(H);U.bindFramebuffer(N.READ_FRAMEBUFFER,ed),U.bindFramebuffer(N.DRAW_FRAMEBUFFER,nd);for(let Xe=0;Xe<Ut;Xe++)be?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,sn.__webglTexture,V,zt+Xe):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,sn.__webglTexture,V),nn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ve.__webglTexture,yt,Te+Xe):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ve.__webglTexture,yt),V!==0?N.blitFramebuffer(Vt,Xt,Ct,Ot,ie,ue,Ct,Ot,N.COLOR_BUFFER_BIT,N.NEAREST):nn?N.copyTexSubImage3D(Ee,yt,ie,ue,Te+Xe,Vt,Xt,Ct,Ot):N.copyTexSubImage2D(Ee,yt,ie,ue,Vt,Xt,Ct,Ot);U.bindFramebuffer(N.READ_FRAMEBUFFER,null),U.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else nn?A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Ee,yt,ie,ue,Te,Ct,Ot,Ut,pe,Ht,xe.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,yt,ie,ue,Te,Ct,Ot,Ut,pe,xe.data):N.texSubImage3D(Ee,yt,ie,ue,Te,Ct,Ot,Ut,pe,Ht,xe):A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,yt,ie,ue,Ct,Ot,pe,Ht,xe.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,yt,ie,ue,xe.width,xe.height,pe,xe.data):N.texSubImage2D(N.TEXTURE_2D,yt,ie,ue,Ct,Ot,pe,Ht,xe);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ls),yt===0&&H.generateMipmaps&&N.generateMipmap(Ee),U.unbindTexture()},this.initRenderTarget=function(A){G.get(A).__webglFramebuffer===void 0&&Q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Q.setTextureCube(A,0):A.isData3DTexture?Q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Q.setTexture2DArray(A,0):Q.setTexture2D(A,0),U.unbindTexture()},this.resetState=function(){b=0,T=0,C=null,U.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}class av{constructor(){Mt(this,"ctx",null);Mt(this,"masterGain",null);Mt(this,"engineOscA",null);Mt(this,"engineOscB",null);Mt(this,"engineFilter",null);Mt(this,"engineGain",null);Mt(this,"volume",.55);Mt(this,"muted",!1);Mt(this,"lastBlinkerOn",!1);Mt(this,"lastRailBellTime",-999)}unlock(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=this.muted?0:this.volume,this.masterGain.connect(this.ctx.destination),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.value=260,this.engineGain=this.ctx.createGain(),this.engineGain.gain.value=.14,this.engineOscA=this.ctx.createOscillator(),this.engineOscA.type="sawtooth",this.engineOscA.frequency.value=52,this.engineOscB=this.ctx.createOscillator(),this.engineOscB.type="triangle",this.engineOscB.frequency.value=104,this.engineOscA.connect(this.engineFilter),this.engineOscB.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOscA.start(),this.engineOscB.start()}this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t,e){this.volume=t,this.muted=e,this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(e?0:t,this.ctx.currentTime,.04)}update(t,e,n){if(!this.ctx||this.ctx.state!=="running")return;const s=this.ctx.currentTime;if(this.engineOscA&&this.engineOscB&&this.engineFilter&&this.engineGain)if(t.stalled||t.rpm<=0)this.engineGain.gain.setTargetAtTime(0,s,.05);else{const r=Math.max(0,Math.min(1,(t.rpm-750)/3600)),o=38+r*96;this.engineOscA.frequency.setTargetAtTime(o,s,.05),this.engineOscB.frequency.setTargetAtTime(o*2,s,.05),this.engineFilter.frequency.setTargetAtTime(190+r*560,s,.06),this.engineGain.gain.setTargetAtTime(.08+r*.11,s,.06)}if(t.blinker!=="off"&&t.blinkerOn!==this.lastBlinkerOn&&this.playClick(t.blinkerOn?920:680,.025,.16),this.lastBlinkerOn=t.blinkerOn,e){const r=Math.hypot(t.x-38,t.z);if(r<58&&n-this.lastRailBellTime>=.45){this.lastRailBellTime=n;const o=Math.max(.03,Math.min(.28,8/Math.max(6,r)));this.playFumikiriBell(o)}}}playClick(t=800,e=.03,n=.15){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const s=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="square",r.frequency.setValueAtTime(t,s),o.gain.setValueAtTime(n,s),o.gain.exponentialRampToValueAtTime(.001,s+e),r.connect(o),o.connect(this.masterGain),r.start(s),r.stop(s+e)}playFumikiriBell(t){if(!this.ctx||!this.masterGain||this.muted)return;const e=this.ctx.currentTime;for(const n of[700,758]){const s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(n,e),r.gain.setValueAtTime(t*.5,e),r.gain.exponentialRampToValueAtTime(.001,e+.36),s.connect(r),r.connect(this.masterGain),s.start(e),s.stop(e+.37)}}playViolationChime(t){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const e=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type=t?"sawtooth":"triangle",n.frequency.setValueAtTime(t?220:440,e),n.frequency.setValueAtTime(t?165:330,e+.12),s.gain.setValueAtTime(.22,e),s.gain.exponentialRampToValueAtTime(.001,e+.34),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.35)}playThud(){if(!this.ctx||!this.masterGain||this.muted||this.ctx.state!=="running")return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(120,t),e.frequency.exponentialRampToValueAtTime(42,t+.14),n.gain.setValueAtTime(.28,t),n.gain.exponentialRampToValueAtTime(.001,t+.15),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.16)}}function ps(i){return{x:-Math.sin(i),z:-Math.cos(i)}}function _o(i){let t=(i+Math.PI)%(Math.PI*2);return t<0&&(t+=Math.PI*2),t-Math.PI}function Vs(i,t,e,n,s){const r=Math.cos(e),o=Math.sin(e);return{x:i+n*r+s*o,z:t-n*o+s*r}}function ls(i,t,e,n){return Math.hypot(i-e,t-n)}const ci=90,Li=60,ai=7,uh=ai/2,an=-24,Ri=2.75,Bs=2,qs=18,el=34,ra=42,nl=58;function Xn(i,t){if(t<an-Ri-.6||t>an+Ri+.6||i<=qs||i>=nl)return{y:0,slopeX:0,slopeZ:0};if(i<el){const o=el-qs,a=(i-qs)/o,c=Bs*.5*(1-Math.cos(Math.PI*a)),l=Bs*.5*Math.PI/o*Math.sin(Math.PI*a);return{y:c,slopeX:l,slopeZ:0}}if(i<=ra)return{y:Bs,slopeX:0,slopeZ:0};const e=nl-ra,n=(i-ra)/e,s=Bs*.5*(1+Math.cos(Math.PI*n)),r=-(Bs*.5*Math.PI/e)*Math.sin(Math.PI*n);return{y:s,slopeX:r,slopeZ:0}}function lv(){const e=105*Math.PI/180,n=[],s=[],r=[],o=(m,p,S,M)=>{const v=M,y=-S;n.push({x:m,z:p}),s.push({x:m+v*1.8,z:p+y*1.8}),r.push({x:m-v*1.8,z:p-y*1.8})};o(-46,-3.5,0,-1),o(-46,-8,0,-1);const a=-38.5,c=-12,l=28;for(let m=0;m<=l;m++){const p=Math.PI+e*m/l,S=a+7.5*Math.cos(p),M=c+7.5*Math.sin(p),v=-Math.sin(p),y=Math.cos(p);o(S,M,v,y)}const h=Math.PI+e,u=a+2*7.5*Math.cos(h),d=c+2*7.5*Math.sin(h);for(let m=1;m<=l;m++){const p=e*(1-m/l),S=u+7.5*Math.cos(p),M=d+7.5*Math.sin(p),v=Math.sin(p),y=-Math.cos(p);o(S,M,v,y)}const g=u+7.5;o(g,-34,0,-1),o(g,-42.5,0,-1);const _=[6,15,24,34,43,52],x=[];return _.forEach((m,p)=>{const S=s[m],M=r[m];S&&p%2===0&&x.push({id:`scurve-pole-l-${p}`,x:S.x,z:S.z,radius:.08,height:1.5,zone:"sCurve"}),M&&p%2===1&&x.push({id:`scurve-pole-r-${p}`,x:M.x,z:M.z,radius:.08,height:1.5,zone:"sCurve"})}),{centerline:n,leftCurb:s,rightCurb:r,poles:x}}const so=lv(),cv=so.centerline,hv=2,xu=[{id:"scurve-left",points:so.leftCurb,height:.14,label:"S-Curve West Curb"},{id:"scurve-right",points:so.rightCurb,height:.14,label:"S-Curve East Curb"},{id:"crank-west-south",height:.14,label:"Crank West-South Curb",points:[{x:-50,z:3.5},{x:-50,z:20},{x:-36,z:20},{x:-36,z:42.5}]},{id:"crank-east-north",height:.14,label:"Crank East-North Curb",points:[{x:-46,z:3.5},{x:-46,z:16},{x:-32,z:16},{x:-32,z:42.5}]},{id:"bay-parking-curb",height:.14,label:"Direction Change Bay Curb",points:[{x:24.15,z:27.5},{x:24.15,z:33.7},{x:27.85,z:33.7},{x:27.85,z:27.5}]},{id:"parallel-parking-curb",height:.14,label:"Parallel Parking Curb",points:[{x:45,z:27.5},{x:45,z:30.2},{x:52.2,z:30.2},{x:52.2,z:27.5}]},{id:"hill-north-curb",height:.16,label:"Hill North Edge",points:[{x:18,z:-26.75},{x:58,z:-26.75}]},{id:"hill-south-curb",height:.16,label:"Hill South Edge",points:[{x:18,z:-21.25},{x:58,z:-21.25}]},{id:"outer-north",height:.14,points:[{x:-62,z:-49.5},{x:62,z:-49.5}]},{id:"outer-south",height:.14,points:[{x:-62,z:49.5},{x:62,z:49.5}]},{id:"outer-west",height:.14,points:[{x:-79.5,z:-32},{x:-79.5,z:32}]},{id:"outer-east",height:.14,points:[{x:79.5,z:-32},{x:79.5,z:32}]}],Mu=[...so.poles,{id:"crank-pole-in-1",x:-45.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-1",x:-50.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-in-2",x:-36.15,z:20.15,radius:.08,height:1.65,zone:"crank"},{id:"crank-pole-out-2",x:-31.85,z:15.85,radius:.08,height:1.65,zone:"crank"},{id:"bay-pole-fl",x:24.05,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-fr",x:27.95,z:27.6,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rl",x:24.05,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"bay-pole-rr",x:27.95,z:33.8,radius:.08,height:1.5,zone:"bayParking"},{id:"par-pole-1",x:44.9,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-2",x:52.3,z:27.6,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-3",x:44.9,z:30.3,radius:.08,height:1.5,zone:"parallelParking"},{id:"par-pole-4",x:52.3,z:30.3,radius:.08,height:1.5,zone:"parallelParking"}],ro=[{id:"north-parked-van",x:-10,z:-48.1,halfW:1.9,halfL:.85,height:1.65,kind:"parkedCar"},{id:"clubhouse-building",x:0,z:56.2,halfW:16,halfL:4.5,height:7.2,kind:"building"}],Ol=[{id:"signal-northbound",kind:"trafficLight",axis:"NS",x:-1.75,z:8.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"signal-southbound",kind:"trafficLight",axis:"NS",x:1.75,z:-8.5,dirX:0,dirZ:1,halfWidth:1.75},{id:"signal-eastbound",kind:"trafficLight",axis:"EW",x:-8.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75},{id:"signal-westbound",kind:"trafficLight",axis:"EW",x:8.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"railroad-eastbound",kind:"railroad",x:31.5,z:-1.75,dirX:1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"railroad-westbound",kind:"railroad",x:44.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75,railroadTrackX:38},{id:"stop-west-t",kind:"stopSign",x:-67.5,z:1.75,dirX:-1,dirZ:0,halfWidth:1.75},{id:"stop-north-t",kind:"stopSign",x:-1.75,z:-38.5,dirX:0,dirZ:-1,halfWidth:1.75},{id:"stop-scurve-exit",kind:"stopSign",x:-27.12,z:-41.5,dirX:0,dirZ:-1,halfWidth:1.8},{id:"stop-crank-exit",kind:"stopSign",x:-34,z:41.5,dirX:0,dirZ:1,halfWidth:2}],ms={startBay:{id:"startBay",x:12,z:48.1,heading:Math.PI/2},sCurve:{id:"sCurve",x:-46,z:.5,heading:0},crank:{id:"crank",x:-48,z:-.5,heading:Math.PI},hillStart:{id:"hillStart",x:10,z:-24,heading:-Math.PI/2},railroad:{id:"railroad",x:20,z:-1.75,heading:-Math.PI/2},stopSign:{id:"stopSign",x:-56,z:1.75,heading:Math.PI/2},trafficLight:{id:"trafficLight",x:-1.75,z:22,heading:0},bayParking:{id:"bayParking",x:20,z:22.25,heading:-Math.PI/2},parallelParking:{id:"parallelParking",x:40,z:25.75,heading:-Math.PI/2},speedStraight:{id:"speedStraight",x:-56,z:-47.75,heading:-Math.PI/2}},uv=["startBay","sCurve","crank","hillStart","railroad","stopSign","trafficLight","bayParking","parallelParking","speedStraight"],dh=.09,dv=.08,fv=.45;function pv(i,t){const e=t.trackWidth/2,n=-t.wheelbase/2,s=t.wheelbase/2;return{FL:Vs(i.x,i.z,i.heading,-e,n),FR:Vs(i.x,i.z,i.heading,e,n),RL:Vs(i.x,i.z,i.heading,-e,s),RR:Vs(i.x,i.z,i.heading,e,s)}}function mv(i,t,e,n,s,r){const o=s-e,a=r-n,c=o*o+a*a;let l=0;c>1e-9&&(l=((i-e)*o+(t-n)*a)/c,l<0?l=0:l>1&&(l=1));const h=e+o*l,u=n+a*l;return{cx:h,cz:u,dist:Math.hypot(i-h,t-u)}}function il(i,t,e=xu,n=Mu,s=ro){const r=pv(i,t),o=t.kind==="motorcycle"?.07:.11,a=["FL","FR","RL","RR"],c={};let l=!1,h=!1,u=0,d=0;for(const b of a){const T=r[b];let C=1/0,w=T.x,E=T.z;for(const X of e){const gt=X.points;for(let pt=0;pt<gt.length-1;pt++){const Et=mv(T.x,T.z,gt[pt].x,gt[pt].z,gt[pt+1].x,gt[pt+1].z);Et.dist<C&&(C=Et.dist,w=Et.cx,E=Et.cz)}}const I=Math.max(0,C-dh-o),k=dh+o*.8,z=C<k,Z=!z&&I<dv,W=Math.max(0,Math.min(1,1-I/fv));let J=0,et=0;if(z&&C>1e-5){const X=k-C,gt=(T.x-w)/C,pt=(T.z-E)/C;J=gt*X,et=pt*X,u+=J*.5,d+=et*.5}Z&&(l=!0),z&&(h=!0),c[b]={corner:b,x:T.x,z:T.z,minCurbDist:I,proximity:W,curbTouch:Z,curbMount:z,pushX:J,pushZ:et}}const g=Math.cos(-i.heading),_=Math.sin(-i.heading),x=t.width/2,m=t.length/2,p=(b,T)=>{const C=b-i.x,w=T-i.z;return{x:C*g+w*_,z:-C*_+w*g}};let S=null;for(const b of n){const T=p(b.x,b.z),C=Math.max(-x,Math.min(x,T.x)),w=Math.max(-m,Math.min(m,T.z));if(Math.hypot(T.x-C,T.z-w)<b.radius){S=b;break}}let M=null;const v=[[0,0],[-x,-m],[x,-m],[-x,m],[x,m],[0,-m],[0,m]];for(const b of s){for(const[T,C]of v){const w=Vs(i.x,i.z,i.heading,T,C);if(Math.abs(w.x-b.x)<b.halfW&&Math.abs(w.z-b.z)<b.halfL){M=b;const E=i.x-b.x,I=i.z-b.z,k=b.halfW+x-Math.abs(E),z=b.halfL+m-Math.abs(I);k<z?u+=Math.sign(E||1)*Math.min(.4,k*.5):d+=Math.sign(I||1)*Math.min(.4,z*.5);break}}if(M)break}const y=1.6;return i.x<-ci+y&&(u+=-ci+y-i.x),i.x>ci-y&&(u+=ci-y-i.x),i.z<-Li+y&&(d+=-Li+y-i.z),i.z>Li-y&&(d+=Li-y-i.z),{wheels:c,anyCurbTouch:l,anyCurbMount:h,poleHit:S,obstacleHit:M,pushX:u,pushZ:d}}const gv={CURB_TOUCH:{ruleRefJa:"接輪（小）：縁石へのタイヤ接触（-10点）",ruleRefEn:"Curb Scrape (接輪): Tire brushed the curb (-10 pts).",howToFixJa:"当たる前に止まってバックする「切り返し（1回目は減点0）」で向きを直しましょう。",howToFixEn:"Stop BEFORE touching the curb and reverse to fix your angle (1st reversal = 0 pt deduction)."},CURB_MOUNT:{ruleRefJa:"脱輪：縁石乗り上げ（-20点 ／ 戻らず進行は検定中止）",ruleRefEn:"Curb Mount (脱輪): Wheel climbed over curb (-20 pts / Instant Fail if you keep driving).",howToFixJa:"すぐ停止して乗り上げる前の位置までバックで戻ってください（内輪差に注意）。",howToFixEn:"Stop immediately and reverse back onto the road. Swing wider before turning."},POLE_COLLISION:{ruleRefJa:"障害物接触：ポール・パイロン接触（一発検定中止）",ruleRefEn:"Obstacle Hit (接触): Struck a pole or parked car (Instant Fail).",howToFixJa:"サイドミラーでポールを確認し、当たる前に停止して「切り返し」を行ってください。",howToFixEn:"Check side mirrors and stop to reverse (Kirikaeshi) before touching any pole."},STOP_SIGN_VIOLATION:{ruleRefJa:"一時不停止（道交法第43条）：『止まれ』停止線手前で0 km/h停止なし（一発中止）",ruleRefEn:"Stop Sign Violation (止まれ): Did not stop at 0.0 km/h before stop line (Instant Fail).",howToFixJa:"白線の直前で0.0 km/hで2秒間止まり、左・右（Z/X）を見てから発進してください。",howToFixEn:"Stop at 0.0 km/h before the white line for 2 seconds, then look Left (Z) & Right (X)."},RAILROAD_NO_STOP:{ruleRefJa:"踏切不停止（道交法第33条）：踏切手前での一時不停止または警報機無視（一発中止）",ruleRefEn:"Railroad Violation (踏切): Crossed without stopping or during alarm (Instant Fail).",howToFixJa:"踏切手前で完全停止（0 km/h）し、左右確認（Z/X）をして変速せずに通過します。",howToFixEn:"Stop completely (0 km/h) before the line, look Left & Right (Z/X), then cross without shifting."},RED_LIGHT:{ruleRefJa:"信号無視（道交法第7条）：赤信号での交差点進入（一発検定中止）",ruleRefEn:"Red Light Violation (信号無視): Crossed stop line on Red (Instant Fail).",howToFixJa:"黄・赤信号では必ず停止線の手前で完全停止してください。",howToFixEn:"Always stop before the white stop line on Yellow or Red."},NO_SIGNAL:{ruleRefJa:"合図不履行（道交法第53条）：右左折・進路変更時のウインカー漏れ（-5点）",ruleRefEn:"Missing Blinker (合図不履行): Turned or changed lanes without turn signal (-5 pts).",howToFixJa:"右左折の30m手前、発進・進路変更の3秒前にQ（左）/ E（右）を出してください。",howToFixEn:"Press Q (Left) or E (Right) 30m before turning or 3s before changing lanes."},NO_SAFETY_LOOK:{ruleRefJa:"安全確認不履行：発進・一時停止・踏切での左右首振り目視不足（-5点）",ruleRefEn:"Missing Safety Look (安全確認): Did not turn head Left/Right to check blind spots (-5 pts).",howToFixJa:"発進や交差点進入の前にZ（左目視）・X（右目視）キーで首を振って確認してください。",howToFixEn:"Press Z (Look Left) and X (Look Right) before proceeding from stop lines or pulling out."},HILL_ROLLBACK:{ruleRefJa:"坂道逆行：上り坂発進での後退（0.3m以上で-10点、1.0m以上で検定中止）",ruleRefEn:"Hill Rollback (坂道後退): Rolled backward on uphill start (-10 pts / >1m Instant Fail).",howToFixJa:"サイドブレーキ（Space）を引き、アクセル（W）を踏んでからサイドを解除します。",howToFixEn:"Hold handbrake (Space), press throttle (W), then release handbrake smoothly."},SPEED_LIMIT:{ruleRefJa:"最高速度違反（道交法第22条）：40 km/h制限の超過（-10点）",ruleRefEn:"Speeding (速度超過): Exceeded the 40 km/h speed limit (-10 pts).",howToFixJa:"40km/hに達したらすぐにアクセルを戻し、カーブ手前で減速してください。",howToFixEn:"Ease off the throttle once you reach 38–40 km/h and brake before corners."},HANDBRAKE_DRAG:{ruleRefJa:"駐停車ブレーキ戻し忘れ：サイドブレーキを引いたまま走行（-5点）",ruleRefEn:"Handbrake Left On (サイド戻し忘れ): Drove with parking brake engaged (-5 pts).",howToFixJa:"発進前にSpaceキー（または手順⑥）でサイドブレーキを解除してください。",howToFixEn:"Press Space (or Pre-Drive Step 6) to release the handbrake before moving."},PRE_DRIVE_ORDER:{ruleRefJa:"乗車・発進手順不備：座席→ミラー→ベルトの順序違反または省略（-5点）",ruleRefEn:"Pre-Drive Order Error (発進手順): Skipped or did cockpit steps out of order (-5 pts).",howToFixJa:"発進前に画面上部の①ドア→②座席→③ミラー→④ベルト…を順番に押してください。",howToFixEn:"Click steps 1 → 2 (Seat) → 3 (Mirrors) → 4 (Seatbelt) in order before pulling out."},NO_SEATBELT:{ruleRefJa:"シートベルト未着用（道路交通法第71条の3）：ベルト未装着での発進（-10点）",ruleRefEn:"No Seatbelt (ベルト未着用): Pulled out without fastening seatbelt (-10 pts).",howToFixJa:"発進前に手順④（またはキー4）でシートベルトを着用してください。",howToFixEn:"Click Step 4 (or press key 4) to fasten your 3D seatbelt before driving."},PEDESTRIAN_PRIORITY:{ruleRefJa:"歩行者保護違反（道交法第38条）：横断歩道上の歩行者妨害（一発検定中止）",ruleRefEn:"Pedestrian Priority (歩行者妨害): Failed to stop for pedestrian at crosswalk (Instant Fail).",howToFixJa:"横断歩道に歩行者がいる時は必ず停止線手前で完全停止して待ってください。",howToFixEn:"Always stop completely before the crosswalk until pedestrians finish crossing."},TRAFFIC_COLLISION:{ruleRefJa:"他車接触事故（道交法第70条）：他の教習車との衝突（一発検定中止）",ruleRefEn:"Vehicle Collision (他車接触): Collided with another training car (Instant Fail).",howToFixJa:"周囲の教習車との車間距離を保ち、交差点では優先車に道を譲ってください。",howToFixEn:"Keep a safe following distance and yield to priority traffic at intersections."}},Vr=[{id:"wp-pullout",stationHint:"startBay",x:-10,z:47.75,radius:6.5,instructionJa:"発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう",instructionEn:"Bay 1: Signal right (E), glance right (X), and pull into the left lane"},{id:"wp-west-turn",stationHint:"stopSign",x:-77.75,z:10,radius:7,instructionJa:"外周西側を通って北の直線（40km/h区間）へ向かいましょう",instructionEn:"Continue along the West loop toward the North 40 km/h straight"},{id:"wp-north-straight",stationHint:"speedStraight",x:10,z:-47.75,radius:7.5,instructionJa:"北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速",instructionEn:"North straight: Signal past the parked van and reach ~35–40 km/h"},{id:"wp-hill-approach",stationHint:"hillStart",x:24,z:-24,radius:6,instructionJa:"坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう",instructionEn:"Hill Start: Stop on the up-ramp, then pull away cleanly without rollback"},{id:"wp-bay-access",stationHint:"bayParking",x:26,z:30.8,radius:4.5,instructionJa:"方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫",instructionEn:"Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing"},{id:"wp-railroad",stationHint:"railroad",x:22,z:1.75,radius:6.5,instructionJa:"踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう",instructionEn:"Railroad: Stop completely before line, look Left & Right (Z/X), then cross"},{id:"wp-signal",stationHint:"trafficLight",x:-15,z:1.75,radius:6.5,instructionJa:"信号交差点：信号に従って直進し、NWのS字コース入口へ左折",instructionEn:"Signal Intersection: Obey light, cross West, then enter S-Curve (North)"},{id:"wp-scurve",stationHint:"sCurve",x:-27.12,z:-36,radius:5.5,instructionJa:"S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう",instructionEn:"S-Curve: Creep slowly through the bends without touching curbs or poles"},{id:"wp-crank",stationHint:"crank",x:-34,z:36,radius:5.5,instructionJa:"クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう",instructionEn:"Crank: Swing wide around both 90° turns cleanly onto the South road"},{id:"wp-finish-bay",stationHint:"startBay",x:12,z:48.1,radius:3.5,instructionJa:"ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です",instructionEn:"Finish: Pull alongside Start Bay 1 and come to a complete stop"}];class _v{constructor(){Mt(this,"mode","practice");Mt(this,"score",100);Mt(this,"terminated",!1);Mt(this,"finished",!1);Mt(this,"simTimeSec",0);Mt(this,"startOdometerM",0);Mt(this,"violations",[]);Mt(this,"waypointIndex",0);Mt(this,"cooldowns",new Map);Mt(this,"zoneTrackers",new Map);Mt(this,"recentSignalTime",-999);Mt(this,"recentSignalDir",null);Mt(this,"headingSample",0);Mt(this,"headingAccumTurn",0);Mt(this,"hillMaxXOnRamp",-1/0);Mt(this,"handbrakeDragDist",0);Mt(this,"curbMountCount",0);Mt(this,"preDriveChecked",!1);Mt(this,"spawnedAtStartBay",!1);Mt(this,"lastViolation",null);Mt(this,"onViolation");Mt(this,"onExamFinish")}reset(t,e){this.mode=t,this.score=100,this.terminated=!1,this.finished=!1,this.simTimeSec=0,this.startOdometerM=e.odometerM,this.violations=[],this.waypointIndex=0,this.cooldowns.clear(),this.zoneTrackers.clear(),this.recentSignalTime=-999,this.recentSignalDir=null,this.headingSample=e.heading,this.headingAccumTurn=0,this.hillMaxXOnRamp=-1/0,this.handbrakeDragDist=0,this.curbMountCount=0,this.lastViolation=null;const n=ms.startBay;this.spawnedAtStartBay=ls(e.x,e.z,n.x,n.z)<2.2,this.preDriveChecked=!1}getMode(){return this.mode}getScore(){return Math.max(0,this.score)}isTerminated(){return this.terminated}isFinished(){return this.finished}getViolations(){return this.violations}getCurrentWaypoint(){return this.mode!=="exam"?null:Vr[this.waypointIndex]??null}getWaypointProgress(){return{current:this.waypointIndex,total:Vr.length}}getSummary(t){var r;const e=this.getScore(),n=new Map;for(const o of this.violations)n.set(o.code,(n.get(o.code)??0)+1);let s;return n.has("RAILROAD_NO_STOP")?s="railroad":n.has("STOP_SIGN_VIOLATION")?s="stopSign":n.has("RED_LIGHT")?s="trafficLight":n.has("HILL_ROLLBACK")?s="hillStart":(n.has("CURB_MOUNT")||n.has("POLE_COLLISION"))&&(s=((r=this.getCurrentWaypoint())==null?void 0:r.stationHint)??"crank"),{passed:!this.terminated&&e>=70,terminated:this.terminated,score:e,elapsedSec:this.simTimeSec,distanceM:Math.max(0,t.odometerM-this.startOdometerM),violations:[...this.violations],weakArea:s}}recordViolation(t,e,n,s,r,o,a,c=3){var d;if(this.finished)return;const l=this.cooldowns.get(t)??-999;if(this.simTimeSec-l<c)return;this.cooldowns.set(t,this.simTimeSec);const h=gv[t],u={id:`${t}-${this.violations.length+1}`,code:t,points:e,instantFail:n,timestampSec:this.simTimeSec,labelJa:s,labelEn:r,detailJa:o,detailEn:a,ruleRefJa:h==null?void 0:h.ruleRefJa,ruleRefEn:h==null?void 0:h.ruleRefEn,howToFixJa:h==null?void 0:h.howToFixJa,howToFixEn:h==null?void 0:h.howToFixEn,quiz:h==null?void 0:h.quiz};this.violations.push(u),this.lastViolation=u,this.score=Math.max(0,this.score-e),(d=this.onViolation)==null||d.call(this,u),n&&this.mode==="exam"&&(this.terminated=!0,this.finished=!0)}update(t,e,n,s,r){var l,h;if(this.finished)return;if(this.simTimeSec+=t,r!=null&&r.pedestrianDanger&&this.recordViolation("PEDESTRIAN_PRIORITY",30,!0,"歩行者保護違反（横断歩道）","Pedestrian Crosswalk Violation",r.pedestrianLabelJa??"横断歩道上の歩行者の通行を妨害しました",r.pedestrianLabelEn??"Failed to stop for a pedestrian crossing the zebra crosswalk",4),r!=null&&r.trafficCollision&&this.recordViolation("TRAFFIC_COLLISION",30,!0,"他車接触事故","Traffic Vehicle Collision","コース上の他車（教習車）と接触しました","Collided with another training vehicle on the course",3.5),this.spawnedAtStartBay&&!this.preDriveChecked&&e.odometerM-this.startOdometerM>1.2){this.preDriveChecked=!0;const u=e.preDrive;u&&(u.seatbeltFastened?!u.doorLocked||!u.seatAdjusted||!u.mirrorsAdjusted||u.orderErrorStep?this.recordViolation("PRE_DRIVE_ORDER",5,!1,"乗車・発進準備手順不備","Pre-Drive Checklist Order Error",u.orderErrorStep?"乗車準備（①ドアロック→②座席調整→③ミラー調整→④シートベルト）の順序が正しくありません":"発進前の座席調整またはミラー確認を省略して発進しました",u.orderErrorStep?"Pre-drive cockpit preparation steps were performed out of the official Japanese exam sequence":"Pulled out without completing Door Lock → Seat Adjust → Mirror Check in order",10):!u.fivePointLookDone&&this.simTimeSec-e.lookedRightTimestamp>8&&this.recordViolation("NO_SAFETY_LOOK",5,!1,"発進時5点安全確認不足","Missing Pull-Out Safety Look","発進前の後方・右死角目視確認（Xキーまたは手順⑧）を行わずに発進しました","Pulled out from curb without performing right blind-spot shoulder check (X / Step 8)",8):this.recordViolation("NO_SEATBELT",10,!1,"シートベルト未着用","Seatbelt Not Fastened","乗車手順④「シートベルト着用」を行わずに発進しました","Pulled out of Start Bay without fastening seatbelt (Pre-Drive Step 4)",10))}if((e.blinker==="left"||e.blinker==="right")&&(this.recentSignalTime=this.simTimeSec,this.recentSignalDir=e.blinker),n.anyCurbMount){this.curbMountCount++;const u=this.mode==="exam"&&this.curbMountCount>=2;this.recordViolation("CURB_MOUNT",20,u,"脱輪","Curb Mount","タイヤが縁石に乗り上げました","Wheel mounted over the course curb",3)}else n.anyCurbTouch&&this.recordViolation("CURB_TOUCH",10,!1,"接輪","Curb Scrape","タイヤが縁石に接触しました","Tire brushed against the curb",2.5);if((n.poleHit||n.obstacleHit&&n.obstacleHit.kind==="parkedCar")&&this.recordViolation("POLE_COLLISION",30,!0,"接触事故","Obstacle Contact","ポールまたは障害物に接触しました","Vehicle struck a course marker pole or obstacle",2.5),Math.abs(e.speedMs)*3.6>46&&this.recordViolation("SPEED_LIMIT",10,!1,"速度超過","Speeding","場内制限速度（40km/h）を大幅に超過しました","Exceeded 40 km/h compound speed limit",4),e.handbrake&&Math.abs(e.speedMs)>1.2?(this.handbrakeDragDist+=Math.abs(e.speedMs)*t,this.handbrakeDragDist>3.5&&(this.handbrakeDragDist=0,this.recordViolation("HANDBRAKE_DRAG",5,!1,"サイド戻し忘れ","Handbrake Left On","サイドブレーキを引いたまま走行しています","Driving with the parking brake still engaged",5))):this.handbrakeDragDist=0,e.x>qs+1&&e.x<el&&Math.abs(e.z-an)<3){e.x>this.hillMaxXOnRamp&&(this.hillMaxXOnRamp=e.x);const u=this.hillMaxXOnRamp-e.x;if(u>.35&&e.speedMs<-.15){const d=u>1;this.recordViolation("HILL_ROLLBACK",d?30:10,d,"坂道逆行","Hill Rollback",d?"坂道で1m以上逆行しました":"坂道で車両が後退しました",d?"Rolled back over 1.0m on hill ramp":"Vehicle rolled backward on hill ramp",4)}}else this.hillMaxXOnRamp=-1/0;this.evaluateStopLines(e,s);const a=_o(e.heading-this.headingSample);if(this.headingSample=e.heading,e.speedMs>1.5){if(this.headingAccumTurn+=a,Math.abs(this.headingAccumTurn)>.96){const u=this.headingAccumTurn>0?"left":"right",d=e.x<-24&&e.x>-50&&e.z<-4&&e.z>-42,g=this.simTimeSec-this.recentSignalTime<7&&this.recentSignalDir===u;!d&&!g&&this.recordViolation("NO_SIGNAL",5,!1,"合図不履行","Missing Blinker",`${u==="left"?"左折":"右折"}時のウインカー合図がありません`,`Turned ${u} without activating blinker beforehand`,3.5),this.headingAccumTurn=0}}else this.headingAccumTurn*=Math.max(0,1-t*.5);const c=ro[0];if(c&&Math.abs(e.x-c.x)<2&&e.z>-50&&e.z<-42.5&&e.speedMs>1.5&&this.simTimeSec-this.recentSignalTime>8&&this.recordViolation("NO_SIGNAL",5,!1,"進路変更合図不履行","Missing Lane Signal","障害物回避時の右・左ウインカー合図がありません","Passed parked obstacle without turn signal",6),this.mode==="exam"&&!this.finished){const u=Vr[this.waypointIndex];u&&ls(e.x,e.z,u.x,u.z)<=u.radius&&(this.waypointIndex===Vr.length-1?Math.abs(e.speedMs)<.15&&(this.finished=!0,(l=this.onExamFinish)==null||l.call(this,this.getSummary(e))):this.waypointIndex++)}this.terminated&&this.finished&&((h=this.onExamFinish)==null||h.call(this,this.getSummary(e)))}evaluateStopLines(t,e){const n=e.getRailroadState();for(const s of Ol){let r=this.zoneTrackers.get(s.id);r||(r={approached:!1,stoppedBeforeLine:!1,lookedBothSides:!1,wasClosedOrWarning:!1,crossed:!1,prevSignedDist:999},this.zoneTrackers.set(s.id,r));const o=t.x-s.x,a=t.z-s.z,c=o*s.dirX+a*s.dirZ,l=-s.dirZ,h=s.dirX,u=Math.abs(o*l+a*h),d=-Math.sin(t.heading)*s.dirX-Math.cos(t.heading)*s.dirZ,g=u<=s.halfWidth+.9&&d>.65;if(g&&c>=-9&&c<=-.1){r.approached=!0,Math.abs(t.speedMs)<.15&&(r.stoppedBeforeLine=!0);const _=this.simTimeSec-t.lookedLeftTimestamp<6,x=this.simTimeSec-t.lookedRightTimestamp<6;_&&x&&(r.lookedBothSides=!0),s.kind==="railroad"&&n.isWarningActive&&(r.wasClosedOrWarning=!0)}r.approached&&g&&r.prevSignedDist<0&&c>=0&&c<3&&(this.handleLineCrossed(s,r,e,n.isWarningActive),r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),(Math.abs(c)>14||u>8)&&(r.approached=!1,r.stoppedBeforeLine=!1,r.lookedBothSides=!1,r.wasClosedOrWarning=!1),r.prevSignedDist=c}}handleLineCrossed(t,e,n,s){t.kind==="stopSign"?e.stoppedBeforeLine?e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"安全確認不履行","Missing L/R Check","発進前の左右安全確認（Z/Xキー）が不足しています","Proceeded from stop line without glancing Left & Right (Z/X)",3):this.recordViolation("STOP_SIGN_VIOLATION",25,!0,"指定場所一時不停止","Stop Sign Violation","「止まれ」停止線手前で完全停止していません","Failed to come to a complete 0 km/h stop at 止まれ line",3):t.kind==="railroad"?!e.stoppedBeforeLine||s||e.wasClosedOrWarning?this.recordViolation("RAILROAD_NO_STOP",30,!0,"踏切不停止・遮断機無視","Railroad Violation",s?"警報機作動中に踏切へ進入しました":"踏切手前で完全停止していません",s?"Entered railroad crossing while warning/barrier active":"Crossed railroad tracks without stopping before stop line",3):e.lookedBothSides||this.recordViolation("NO_SAFETY_LOOK",5,!1,"踏切安全確認不履行","Railroad Look Check","踏切通過前の左右確認（Z/Xキー）が不足しています","Crossed railroad without checking Left & Right (Z/X)",3):t.kind==="trafficLight"&&t.axis&&n.getLightForAxis(t.axis)==="red"&&this.recordViolation("RED_LIGHT",30,!0,"信号無視","Red Light Violation","赤信号で交差点に進入しました","Crossed intersection stop line on a RED traffic signal",3)}}const yu="jp_kyoshujo_settings_v1",vv="jp_kyoshujo_db",Ss="custom_maps",Su="active_custom_map",oa={locale:"ja",vehicleKind:"sedan",transmission:"AT",cameraMode:"chase",steeringSensitivity:1,autoCenterSteering:!0,mirrorQuality:"high",masterVolume:.55,muted:!1,minimapHeadingUp:!1,showTouchControls:!1};function xv(){try{const i=window.localStorage.getItem(yu);if(!i)return{...oa};const t=JSON.parse(i);return{...oa,...t}}catch{return{...oa}}}function ti(i){try{window.localStorage.setItem(yu,JSON.stringify(i))}catch{}}function Eu(){return new Promise((i,t)=>{const e=window.indexedDB.open(vv,1);e.onupgradeneeded=()=>{const n=e.result;n.objectStoreNames.contains(Ss)||n.createObjectStore(Ss)},e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)})}async function ur(i){try{const t=await Eu();await new Promise((e,n)=>{const s=t.transaction(Ss,"readwrite");s.objectStore(Ss).put(i,Su),s.oncomplete=()=>e(),s.onerror=()=>n(s.error)}),t.close()}catch{}}async function Mv(){try{const i=await Eu(),t=await new Promise((e,n)=>{const r=i.transaction(Ss,"readonly").objectStore(Ss).get(Su);r.onsuccess=()=>e(r.result??null),r.onerror=()=>n(r.error)});return i.close(),t}catch{return null}}const on=class on{constructor(){Mt(this,"signalTime",0);Mt(this,"railTime",0)}update(t){this.signalTime=(this.signalTime+t)%on.SIGNAL_CYCLE,this.railTime=(this.railTime+t)%on.RAIL_CYCLE}setTimes(t,e){this.signalTime=(t%on.SIGNAL_CYCLE+on.SIGNAL_CYCLE)%on.SIGNAL_CYCLE,this.railTime=(e%on.RAIL_CYCLE+on.RAIL_CYCLE)%on.RAIL_CYCLE}getLightForAxis(t){const e=this.signalTime;return t==="NS"?e<11?"green":e<14?"yellow":"red":e>=15.5&&e<26.5?"green":e>=26.5&&e<29.5?"yellow":"red"}getRailroadState(){const t=this.railTime;let e="open",n=0;t<22?(e="open",n=0):t<26?(e="warning",n=0):t<29?(e="closing",n=(t-26)/3*(Math.PI/2)):t<37?(e="closed",n=Math.PI/2):(e="opening",n=(1-(t-37)/3)*(Math.PI/2));const s=e!=="open",r=Math.floor(t*2.2)%2===0;return{phase:e,barrierAngle:n,isWarningActive:s,flashLeftOn:s&&r,flashRightOn:s&&!r}}};Mt(on,"SIGNAL_CYCLE",31),Mt(on,"RAIL_CYCLE",40);let sl=on;const yv={kind:"sedan",length:4.4,width:1.69,wheelbase:2.6,trackWidth:1.48,frontOverhang:.85,rearOverhang:.95,wheelRadius:.31,maxSteerRad:43*Math.PI/180,steeringWheelMaxRad:1.5*Math.PI*2,maxSpeedMs:16.7,maxReverseMs:5.5,maxAccelMs2:3.4,brakeDecelMs2:9.5},Sv={kind:"motorcycle",length:2.1,width:.72,wheelbase:1.41,trackWidth:.16,frontOverhang:.35,rearOverhang:.34,wheelRadius:.3,maxSteerRad:34*Math.PI/180,steeringWheelMaxRad:34*Math.PI/180,maxSpeedMs:18,maxReverseMs:1.8,maxAccelMs2:4.5,brakeDecelMs2:9.8};function Bl(i){return i==="motorcycle"?Sv:yv}function bu(i,t,e,n="sedan",s="AT"){const r=Bl(n),o=ps(e),a=Xn(i,t),c=s==="AT"?"D":"1";return{x:i,y:a.y,z:t,rearAxleX:i-o.x*(r.wheelbase*.5),rearAxleZ:t-o.z*(r.wheelbase*.5),heading:_o(e),pitch:0,roll:0,speedMs:0,steerAngleRad:0,steeringWheelRad:0,wheelRotationRad:0,transmission:s,gear:c,rpm:800,stalled:!1,handbrake:!1,blinker:"off",blinkerTimer:0,blinkerOn:!1,braking:!1,reversing:!1,lookAngleRad:0,lookedLeftTimestamp:-999,lookedRightTimestamp:-999,odometerM:0,preDrive:{doorLocked:!1,seatAdjusted:!1,mirrorsAdjusted:!1,seatbeltFastened:!1,brakeAndStartDone:!1,handbrakeReleased:!1,rightSignalOn:!1,fivePointLookDone:!1,completedSteps:[]},mirrorTouchTimer:0}}const Ev={1:6,2:10.5,3:14.5,4:18,5:22,R:5.5},bv={1:1.35,2:1.05,3:.85,4:.7,5:.55,R:1.15};function wu(i,t){const e=["P","R","N","D"],n=["R","N","1","2","3","4","5"],s=i.transmission==="AT"?e:n,r=s.indexOf(i.gear),o=r===-1?i.transmission==="AT"?3:2:r,a=Math.max(0,Math.min(s.length-1,o+t)),c=s[a];Math.abs(i.speedMs)>1.2&&(c==="P"||c==="R"&&i.speedMs>1.2)||(i.gear=c)}function wv(i,t,e,n,s,r=Xn){const o=2.5*s.steeringSensitivity;if(t.analogSteerTarget!==null){const Et=Math.max(-1,Math.min(1,t.analogSteerTarget))*e.maxSteerRad-i.steerAngleRad,kt=o*1.8*n;i.steerAngleRad+=Math.abs(Et)<=kt?Et:Math.sign(Et)*kt}else{const pt=t.steerLeft-t.steerRight;if(Math.abs(pt)>.01)i.steerAngleRad+=pt*o*n;else if(s.autoCenterSteering){const kt=(.65+2.4*Math.min(1,Math.abs(i.speedMs)/4))*n;Math.abs(i.steerAngleRad)<=kt?i.steerAngleRad=0:i.steerAngleRad-=Math.sign(i.steerAngleRad)*kt}}i.steerAngleRad=Math.max(-e.maxSteerRad,Math.min(e.maxSteerRad,i.steerAngleRad)),i.steeringWheelRad=i.steerAngleRad/e.maxSteerRad*e.steeringWheelMaxRad,i.blinker!=="off"?(i.blinkerTimer+=n,i.blinkerOn=Math.floor(i.blinkerTimer*2.6)%2===0):(i.blinkerTimer=0,i.blinkerOn=!1);let a=0;t.lookLeft&&!t.lookRight?a=68*Math.PI/180:t.lookRight&&!t.lookLeft&&(a=-68*Math.PI/180);const c=8.5*n,l=a-i.lookAngleRad;i.lookAngleRad+=Math.abs(l)<=c?l:Math.sign(l)*c,i.lookAngleRad>32*Math.PI/180&&(i.lookedLeftTimestamp=s.simTimeSec),i.lookAngleRad<-32*Math.PI/180&&(i.lookedRightTimestamp=s.simTimeSec),i.mirrorTouchTimer>0&&(i.mirrorTouchTimer=Math.max(0,i.mirrorTouchTimer-n));const h=ps(i.heading),u=r(i.x,i.z),d=u.slopeX*h.x+u.slopeZ*h.z,g=Math.atan(d),_=-9.81*Math.sin(g);let x=0;const m=i.transmission==="AT"?1:1-Math.max(0,Math.min(1,t.clutch)),p=!i.stalled;if(i.transmission==="AT")i.gear==="D"?(t.throttle>.02&&i.speedMs<e.maxSpeedMs?x=t.throttle*e.maxAccelMs2:t.brake<.05&&!i.handbrake&&i.speedMs<1.65&&(x=1.25*(1-Math.max(0,i.speedMs)/1.65)),i.rpm=820+Math.abs(i.speedMs)*210+t.throttle*1400):i.gear==="R"?(t.throttle>.02&&i.speedMs>-e.maxReverseMs?x=-t.throttle*(e.maxAccelMs2*.72):t.brake<.05&&!i.handbrake&&i.speedMs>-1.4&&(x=-.82*(1-Math.max(0,-i.speedMs)/1.4)),i.rpm=820+Math.abs(i.speedMs)*260+t.throttle*1200):i.rpm=780+t.throttle*2600;else if(p&&i.gear!=="N"&&i.gear!=="P"){const pt=Ev[i.gear]??10,Et=bv[i.gear]??1,qt=i.gear==="R"?-1:1,ne=Math.abs(i.speedMs)/pt*3800,Zt=800+t.throttle*3400;if(i.rpm=ne*m+Zt*(1-m),m>.75&&Math.abs(i.speedMs)<.55&&t.throttle<.14&&(t.brake>.1||i.handbrake||Math.abs(i.speedMs)<.15))i.stalled=!0,i.rpm=0;else if(m>.15&&i.speedMs*qt<pt){const ct=Math.max(.18,t.throttle);x=qt*ct*e.maxAccelMs2*Et*m}}else i.rpm=p?780+t.throttle*2800:0;const S=i.transmission==="AT"&&i.gear==="P",M=i.handbrake?6.8:0,v=t.brake*e.brakeDecelMs2,y=v+M+(S?14:0);i.braking=t.brake>.05,i.reversing=i.gear==="R";const b=-i.speedMs*(.14+.015*Math.abs(i.speedMs)),T=x+_+b;let C=i.speedMs+T*n;if(y>.01){const pt=y;if(Math.abs(i.speedMs)<.08&&Math.abs(x+_)<=pt)C=0;else{const Et=Math.sign(C!==0?C:x+_),kt=C-Et*y*n;Math.sign(kt)!==Math.sign(C)&&Math.abs(x+_)<=pt?C=0:C=kt}}else Math.abs(C)<.02&&Math.abs(x)<.1&&Math.abs(_)<.1&&(C=0);C=Math.max(-e.maxReverseMs,Math.min(e.maxSpeedMs,C)),i.speedMs=C;const w=i.speedMs*n,E=w/e.wheelbase*Math.tan(i.steerAngleRad),I=i.heading+E*.5,k=ps(I);i.rearAxleX+=k.x*w,i.rearAxleZ+=k.z*w,i.heading=_o(i.heading+E);const z=ps(i.heading);i.x=i.rearAxleX+z.x*(e.wheelbase*.5),i.z=i.rearAxleZ+z.z*(e.wheelbase*.5);const Z=r(i.x,i.z);i.y=Z.y,i.odometerM+=Math.abs(w),i.wheelRotationRad+=w/e.wheelRadius;const W=Z.slopeX*z.x+Z.slopeZ*z.z,J=Math.atan(W)-Math.max(-.04,Math.min(.04,(v-x)*.004));i.pitch+=(J-i.pitch)*Math.min(1,12*n);const et=E/n,X=i.speedMs*et,gt=e.kind==="motorcycle"?Math.max(-.48,Math.min(.48,-X*.065)):Math.max(-.06,Math.min(.06,X*.008));i.roll+=(gt-i.roll)*Math.min(1,10*n)}function Tu(i,t){const e=ps(i.heading);i.rearAxleX=i.x-e.x*(t.wheelbase*.5),i.rearAxleZ=i.z-e.z*(t.wheelbase*.5)}const Au={startBay:{titleJa:"発着点 1番",titleEn:"Start Bay 1",descJa:"安全確認・右合図を出して発進",descEn:"Check mirrors & right signal before pull-out"},sCurve:{titleJa:"S字コース",titleEn:"S-Curve",descJa:"幅3.6m・内輪差を意識して低速走行",descEn:"3.6m wide S-bend — watch inner rear wheel cut"},crank:{titleJa:"クランクコース",titleEn:"Crank (90°)",descJa:"直角連続カーブ・ポール接触で検定中止",descEn:"Tight 90° chicane — pole contact fails exam"},hillStart:{titleJa:"坂道発進",titleEn:"Hill Start",descJa:"坂の途中で一時停止し、逆行せず発進",descEn:"Stop on slope and pull away without rollback"},railroad:{titleJa:"踏切通過",titleEn:"Railroad Crossing",descJa:"停止線手前で完全停止し左右確認（Z/X）",descEn:"Full stop before line, look Left & Right (Z/X)"},stopSign:{titleJa:"一時停止（止まれ）",titleEn:"Stop Sign",descJa:"停止線手前で完全停止・左右の安全確認",descEn:"Come to complete 0 km/h stop and glance L/R"},trafficLight:{titleJa:"信号交差点",titleEn:"Signal Intersection",descJa:"信号灯火に従い左折・右折の通行帯を守る",descEn:"Obey signal phases and proper turn positioning"},bayParking:{titleJa:"方向変換",titleEn:"Bay Parking",descJa:"バックで車庫に進入し、前向きに出庫",descEn:"Reverse into the T-bay and exit forward"},parallelParking:{titleJa:"縦列駐車",titleEn:"Parallel Parking",descJa:"縁石に沿わせて駐車枠内に収める",descEn:"Reverse neatly into the curbside pocket"},speedStraight:{titleJa:"直線40km/h・障害物",titleEn:"40 km/h & Obstacle",descJa:"直線で加速し、駐車車両を合図付きで回避",descEn:"Accelerate smoothly and signal past obstacle"}},Tv={ja:{appTitle:"桜ヶ丘自動車教習所 3Dシミュレーター",appSubtitle:"日本の教習所コース・実技検定再現",modePractice:"自由練習",modeExam:"修了検定 (模擬試験)",scoreLabel:"持ち点",stationMenu:"コース・設定",resetBtn:"リセット (O)",cameraBtn:"視点 (V)",camChase:"後方視点",camCockpit:"運転席 (右ハンドル)",camHood:"ボンネット",camOrbit:"自由カメラ",welcomeTitle:"桜ヶ丘自動車教習所 3Dドライビングシミュレーター",welcomeLead:"実際の日本の教習所（180m×120m）を1:1スケールで再現。S字・クランク・坂道発進・踏切・信号・方向変換・縦列駐車・修了検定をブラウザ上で練習できます。",startTraining:"教習を始める",startExam:"修了検定を開始",controlsHeading:"基本操作（右ハンドル・左側通行）",ctrlDrive:"W / S または ↑ / ↓ : アクセル / ブレーキ",ctrlSteer:"A / D または ← / → : ハンドル操作",ctrlSignal:"Q / E : 左・右ウインカー　H : ハザード",ctrlGear:"Shift / Ctrl : ギア変更 (P/R/N/D・1-5)",ctrlLook:"Z / X : 左・右の安全確認（目視）",ctrlBrake:"Space : サイドブレーキ　C : クラッチ(MT)　I : エンジン始動",ctrlView:"V : カメラ切替　O : 現在地点へリセット　M : メニュー",tabStations:"課題ワープ",tabSettings:"車両・設定",tabCustomMap:"カスタム地図",vehicleLabel:"車種",vehicleSedan:"教習車セダン (右ハンドル)",vehicleMoto:"普通二輪 (400cc)",transLabel:"変速機",transAT:"AT (オートマ)",transMT:"MT (マニュアル)",steerSensLabel:"ハンドル感度",autoCenterLabel:"ハンドル自動復元",mirrorQualityLabel:"ミラー描画品質",mirrorHigh:"高画質",mirrorLow:"軽量",mirrorOff:"オフ",volumeLabel:"音量",touchControlsLabel:"タッチ操作パネル表示",customMapHint:"航空写真や教習所コース図(PNG/JPG/WebP)をアップロードし、実際の横幅(m)に合わせて走行できます。",uploadMapLabel:"コース画像をアップロード",mapWidthLabel:"コース横幅 (m)",setSpawnHere:"現在位置を開始地点に設定",useKyoshujo:"3D教習所コースへ戻る",useCustomMap:"カスタム地図で走行",clearCustomMap:"カスタム地図を削除",stalledWarning:"エンスト！ [I] キーまたはボタンで再始動",restartEngine:"エンジン始動 (I)",handbrakeOn:"サイドブレーキ作動中",curbWarning:"縁石接近",examPassStamp:"合格",examFailStamp:"不合格",examResultTitle:"運転技能検定 採点表",examTerminatedSub:"危険行為・重大違反のため検定中止となりました",examPassedSub:"合格基準（70点以上）を達成しました",examFailedSub:"合格点（70点）に届きませんでした",examFinalScore:"最終得点",examElapsed:"所要時間",examDistance:"走行距離",examNoViolations:"減点なし！模範的な運転です。",retryExam:"もう一度検定を受ける",practiceWeak:"苦手課題を練習する",closeModal:"練習を続ける",practiceGuideFree:"左上のコースメニューから各課題へワープ、または「修了検定」を開始できます。",minimapNorth:"北上",minimapFollow:"進行方向"},en:{appTitle:"Sakuragaoka Driving School 3D Simulator",appSubtitle:"Authentic Japanese Kyoshujo Training & Exam",modePractice:"Free Practice",modeExam:"Mock Exam",scoreLabel:"Score",stationMenu:"Menu / Warp",resetBtn:"Reset (O)",cameraBtn:"View (V)",camChase:"Chase",camCockpit:"Cockpit (RHD)",camHood:"Hood",camOrbit:"Orbit",welcomeTitle:"Sakuragaoka Japanese Driving School Simulator",welcomeLead:"Full 1:1 scale 180m × 120m Japanese Kyoshujo compound. Practice S-Curve, 90° Crank, Hill Start, Railroad Crossing, Stop Signs, Signals, Bay & Parallel Parking, or take the 100-point Mock Exam.",startTraining:"Start Practice",startExam:"Start Mock Exam",controlsHeading:"Controls (Right-Hand Drive · Keep Left)",ctrlDrive:"W / S or ↑ / ↓ : Throttle / Foot Brake",ctrlSteer:"A / D or ← / → : Steering Wheel",ctrlSignal:"Q / E : Left / Right Blinker   H : Hazard",ctrlGear:"Shift / Ctrl : Shift Gear (P/R/N/D or 1-5)",ctrlLook:"Z / X : Safety Glance Left / Right",ctrlBrake:"Space : Handbrake   C : Clutch (MT)   I : Ignition",ctrlView:"V : Camera   O : Reset Vehicle   M : Menu",tabStations:"Stations",tabSettings:"Vehicle & Setup",tabCustomMap:"Custom Map",vehicleLabel:"Vehicle",vehicleSedan:"Sedan (RHD Kyoshusha)",vehicleMoto:"Motorcycle (400cc)",transLabel:"Transmission",transAT:"AT (Automatic)",transMT:"MT (Manual)",steerSensLabel:"Steering Sensitivity",autoCenterLabel:"Auto-Center Steering",mirrorQualityLabel:"Mirror Reflections",mirrorHigh:"High",mirrorLow:"Low",mirrorOff:"Off",volumeLabel:"Master Volume",touchControlsLabel:"Show Touch Controls",customMapHint:"Upload any top-down driving center map image (PNG/JPG/WebP), calibrate real width in meters, and drive directly on it.",uploadMapLabel:"Upload Map Image",mapWidthLabel:"Map Width (meters)",setSpawnHere:"Set Current Position as Spawn",useKyoshujo:"Switch to 3D Kyoshujo",useCustomMap:"Drive Custom Map",clearCustomMap:"Clear Saved Map",stalledWarning:"Engine Stalled! Press [I] or tap to restart",restartEngine:"Start Engine (I)",handbrakeOn:"Handbrake Engaged",curbWarning:"Curb Close",examPassStamp:"PASS",examFailStamp:"FAIL",examResultTitle:"Practical Driving Exam Score Sheet",examTerminatedSub:"Exam terminated immediately due to a major safety violation",examPassedSub:"Passed with 70 points or higher",examFailedSub:"Score fell below the 70-point passing threshold",examFinalScore:"Final Score",examElapsed:"Time",examDistance:"Distance",examNoViolations:"Zero deductions — exemplary Japanese driving technique!",retryExam:"Retry Exam",practiceWeak:"Practice Weak Area",closeModal:"Continue Free Practice",practiceGuideFree:"Open Menu (M) to warp to any course obstacle or start a full 100-point Mock Exam.",minimapNorth:"North-Up",minimapFollow:"Heading-Up"}};function $n(i,t){return Tv[i][t]}class Av{constructor(t){Mt(this,"keys",new Set);Mt(this,"touchThrottle",0);Mt(this,"touchBrake",0);Mt(this,"touchLookLeft",!1);Mt(this,"touchLookRight",!1);Mt(this,"analogSteer",null);Mt(this,"actions");Mt(this,"handleBlur",()=>{this.keys.clear(),this.touchThrottle=0,this.touchBrake=0,this.touchLookLeft=!1,this.touchLookRight=!1,this.analogSteer=null});Mt(this,"handleKeyDown",t=>{const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="SELECT"||e.tagName==="TEXTAREA"))return;this.actions.onAnyInteraction();const n=t.code;(n==="Space"||n==="ArrowUp"||n==="ArrowDown"||n==="ArrowLeft"||n==="ArrowRight")&&t.preventDefault(),t.repeat||(n==="KeyQ"?this.actions.onToggleBlinker("left"):n==="KeyE"?this.actions.onToggleBlinker("right"):n==="KeyH"?this.actions.onToggleBlinker("hazard"):n==="Space"?this.actions.onToggleHandbrake():n==="ShiftLeft"||n==="ShiftRight"||n==="BracketRight"?this.actions.onShiftGear(1):n==="ControlLeft"||n==="ControlRight"||n==="BracketLeft"?this.actions.onShiftGear(-1):n==="KeyV"?this.actions.onCycleCamera():n==="KeyO"?this.actions.onResetVehicle():n==="KeyM"?this.actions.onToggleMenu():n==="KeyI"&&this.actions.onIgnition()),this.keys.add(n)});Mt(this,"handleKeyUp",t=>{this.keys.delete(t.code)});this.actions=t,window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("blur",this.handleBlur)}bindTouchControls(t){const e=t.querySelector('[data-touch="steer"]'),n=t.querySelector('[data-touch="steer-knob"]'),s=t.querySelector('[data-touch="throttle"]'),r=t.querySelector('[data-touch="brake"]'),o=t.querySelector('[data-touch="look-left"]'),a=t.querySelector('[data-touch="look-right"]');if(e){let l=null,h=0;const u=g=>{const _=g-h,x=54,m=Math.max(-1,Math.min(1,-_/x));this.analogSteer=m,n&&(n.style.transform=`translateX(${Math.max(-x,Math.min(x,_))}px)`)};e.addEventListener("pointerdown",g=>{g.preventDefault(),this.actions.onAnyInteraction(),l=g.pointerId,h=g.clientX,e.setPointerCapture(g.pointerId),u(g.clientX)}),e.addEventListener("pointermove",g=>{g.pointerId===l&&u(g.clientX)});const d=g=>{g.pointerId===l&&(l=null,this.analogSteer=null,n&&(n.style.transform="translateX(0px)"))};e.addEventListener("pointerup",d),e.addEventListener("pointercancel",d)}const c=(l,h)=>{if(!l)return;l.addEventListener("pointerdown",d=>{d.preventDefault(),this.actions.onAnyInteraction(),l.setPointerCapture(d.pointerId),l.classList.add("active"),h(!0)});const u=()=>{l.classList.remove("active"),h(!1)};l.addEventListener("pointerup",u),l.addEventListener("pointercancel",u)};c(s,l=>{this.touchThrottle=l?1:0}),c(r,l=>{this.touchBrake=l?1:0}),c(o,l=>{this.touchLookLeft=l}),c(a,l=>{this.touchLookRight=l}),t.querySelectorAll("[data-touch-action]").forEach(l=>{l.addEventListener("click",()=>{this.actions.onAnyInteraction();const h=l.dataset.touchAction;h==="blinker-left"?this.actions.onToggleBlinker("left"):h==="blinker-right"?this.actions.onToggleBlinker("right"):h==="handbrake"?this.actions.onToggleHandbrake():h==="gear-up"?this.actions.onShiftGear(1):h==="gear-down"&&this.actions.onShiftGear(-1)})})}getInputState(){const t=this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0,e=this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0,n=this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0,s=this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0,r=this.keys.has("KeyC")?1:0;return{throttle:Math.max(t,this.touchThrottle),brake:Math.max(e,this.touchBrake),steerLeft:n,steerRight:s,analogSteerTarget:this.analogSteer,clutch:r,lookLeft:this.keys.has("KeyZ")||this.touchLookLeft,lookRight:this.keys.has("KeyX")||this.touchLookRight}}dispose(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("blur",this.handleBlur)}}const fh={type:"change"},zl={type:"start"},Ru={type:"end"},Gr=new Xh,ph=new Yn,Rv=Math.cos(70*Se.DEG2RAD),Le=new D,$e=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},aa=1e-6;class Cv extends Ep{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Ui,this._lastTargetPosition=new D,this._quat=new Ui().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bc,this._sphericalDelta=new Bc,this._scale=1,this._panOffset=new D,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new D,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Lv.bind(this),this._onPointerDown=Pv.bind(this),this._onPointerUp=Iv.bind(this),this._onContextMenu=Bv.bind(this),this._onMouseWheel=Uv.bind(this),this._onKeyDown=kv.bind(this),this._onTouchStart=Fv.bind(this),this._onTouchMove=Ov.bind(this),this._onMouseDown=Dv.bind(this),this._onMouseMove=Nv.bind(this),this._interceptControlDown=zv.bind(this),this._interceptControlUp=Hv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=$e:n>Math.PI&&(n-=$e),s<-Math.PI?s+=$e:s>Math.PI&&(s-=$e),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Le.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<Rv?this.object.lookAt(this.target):(ph.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(ph,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>aa||this._lastTargetPosition.distanceToSquared(this.target)>aa?(this.dispatchEvent(fh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?$e/60*this.autoRotateSpeed*t:$e/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft($e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-$e*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft($e*this._rotateDelta.x/e.clientHeight),this._rotateUp($e*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new dt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Pv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Lv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Iv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ru),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Dv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case cs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case cs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(zl)}function Nv(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Uv(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(zl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ru))}function kv(i){this.enabled!==!1&&this._handleKeyDown(i)}function Fv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(zl)}function Ov(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function Bv(i){this.enabled!==!1&&i.preventDefault()}function zv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Hv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class dr extends ut{constructor(t,e={}){super(t),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Be;const n=this,s=e.color!==void 0?new ee(e.color):new ee(8355711),r=e.textureWidth||512,o=e.textureHeight||512,a=e.clipBias||0,c=e.shader||dr.ReflectorShader,l=e.multisample!==void 0?e.multisample:4,h=new Yn,u=new D,d=new D,g=new D,_=new ve,x=new D(0,0,-1),m=new ge,p=new D,S=new D,M=new ge,v=new ve,y=this.camera,b=new pi(r,o,{samples:l,type:Ts}),T=new Kn({name:c.name!==void 0?c.name:"unspecified",uniforms:jh.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=b.texture,T.uniforms.color.value=s,T.uniforms.textureMatrix.value=v,this.material=T,this.onBeforeRender=function(C,w,E){if(d.setFromMatrixPosition(n.matrixWorld),g.setFromMatrixPosition(E.matrixWorld),_.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(_),p.subVectors(d,g),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(d),_.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(_),x.add(g),S.subVectors(d,x),S.reflect(u).negate(),S.add(d),y.position.copy(p),y.up.set(0,1,0),y.up.applyMatrix4(_),y.up.reflect(u),y.lookAt(S),y.far=E.far,y.updateMatrixWorld(),y.projectionMatrix.copy(E.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(y.projectionMatrix),v.multiply(y.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(y.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const k=y.projectionMatrix;M.x=(Math.sign(m.x)+k.elements[8])/k.elements[0],M.y=(Math.sign(m.y)+k.elements[9])/k.elements[5],M.z=-1,M.w=(1+k.elements[10])/k.elements[14],m.multiplyScalar(2/m.dot(M)),k.elements[2]=m.x,k.elements[6]=m.y,k.elements[10]=m.z+1-a,k.elements[14]=m.w,n.visible=!1;const z=C.getRenderTarget(),Z=C.xr.enabled,W=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(b),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(w,y),C.xr.enabled=Z,C.shadowMap.autoUpdate=W,C.setRenderTarget(z);const J=E.viewport;J!==void 0&&C.state.viewport(J),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return b},this.dispose=function(){b.dispose(),n.material.dispose()}}}dr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function Vv(i,t,e=!0){const n=[],s=(U,$=.5,G=.1)=>new Tt({color:U,roughness:$,metalness:G}),r=new Qa({color:366185,roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.13}),o=new Qa({color:3462041,roughness:.3,metalness:.35,clearcoat:1,clearcoatRoughness:.2}),a=s(14014684,.3,.65),c=s(1448221,.65,.3),l=s(1053205,.93,0),h=s(2237482,.96,0),u=s(3882307,.4,.58),d=s(8817554,.32,.7),g=s(14803943,.2,.6);function _(U,$){return U.name=$,U.userData.partName=$,U}function x(U,$){const G=_(new jt,$);return U.add(G),G}function m(U,$,G,Q,it=0,ht=0,R=0){const f=_(new ut(G,Q),$);return f.position.set(it,ht,R),f.castShadow=!0,f.receiveShadow=!0,U.add(f),f}const p=(U,$,G,Q,it,ht,R=0,f=0,P=0)=>m(U,$,new Wt(G,Q,it),ht,R,f,P);function S(U,$,G,Q,it){return m(U,$,new hr(new mo(G.map(ht=>new D(...ht))),40,Q,8,!1),it)}function M(U,$,G,Q,it,ht){const R=new D(...G),f=new D(...Q),P=f.clone().sub(R),L=m(U,$,new oe(it,it,P.length(),16),ht);return L.position.copy(R.add(f).multiplyScalar(.5)),L.quaternion.setFromUnitVectors(new D(0,1,0),P.normalize()),L}function v(U,$,G,Q,it,ht,R=0,f=0,P=0){const L=m(U,$,new xn(1,36,24),ht,R,f,P);return L.scale.set(G,Q,it),L}function y(U,$,G,Q){const it=[],ht=[];for(const[P,L,B,O]of G)for(let lt=0;lt<40;lt++){const tt=lt/40*Math.PI*2;it.push(Math.cos(tt)*L,(O+B)/2+Math.sin(tt)*((O-B)/2),P)}for(let P=0;P<G.length-1;P++)for(let L=0;L<40;L++){const B=P*40+L,O=P*40+(L+1)%40;ht.push(B,O,O+40,B,O+40,B+40)}for(let P=1;P<39;P++){ht.push(0,P+1,P);const L=(G.length-1)*40;ht.push(L,L+P,L+P+1)}const f=new _e;return f.setAttribute("position",new Jt(it,3)),f.setIndex(ht),f.computeVertexNormals(),m(U,$,f,Q)}const b=x(i,"motorcycleRoot"),T=x(i,"bikeCockpitRoot"),C=[[-.28,.065,.77,.86],[-.16,.135,.76,.93],[0,.205,.77,1.02],[.19,.218,.8,1.064],[.34,.184,.83,1.052],[.46,.09,.84,.98],[.49,.025,.87,.93]],w=y(b,"paintedTank",C,r);function E(U,$,G,Q){let it=0;for(;it<C.length-2&&C[it+1][0]<U;)it++;const ht=C[it],R=C[it+1],f=(U-ht[0])/(R[0]-ht[0]),P=Se.lerp(ht[1],R[1],f),L=Se.lerp(ht[2],R[2],f),B=Se.lerp(ht[3],R[3],f);return[G*(Math.cos($)*P+Q),(B+L)/2+Math.sin($)*((B-L)/2),U]}for(const U of[-1,1])for(const[$,G,Q,it]of[["whitePinstripe",0,.004,a],["blackSweep",.025,.005,c],["silverPanel",.064,.006,a]]){const ht=[],R=[],f=[[-.215,-.65,.06],[-.15,-.82,.34],[0,-.75,.65],[.18,-.5,.77],[.29,-.24,.65],[.38,.05,.22]];for(const[B,O,lt]of f)for(let tt=0;tt<=12;tt++)ht.push(...E(B,Se.lerp(O+G,lt-G,tt/12),U,Q));for(let B=0;B<f.length-1;B++)for(let O=0;O<12;O++){const lt=B*13+O,tt=lt+13;R.push(lt,tt,lt+1,lt+1,tt,tt+1)}const P=new _e;P.setAttribute("position",new Jt(ht,3)),P.setIndex(R),P.computeVertexNormals();const L=it.clone();L.side=Re,m(b,`${$}${U}`,P,L)}const I=m(b,"fuelCap",new oe(.043,.043,.009,32),a,0,1.068,.18);m(I,"lock",new Wt(.018,.004,.008),c,0,.007,0),y(b,"steppedSaddle",[[-.96,.085,.88,.94],[-.85,.145,.855,.966],[-.63,.153,.82,.95],[-.45,.125,.775,.867],[-.27,.108,.775,.837],[-.19,.07,.8,.837]],h),y(b,"paintedTailCowl",[[-1.02,.035,.86,.91],[-.93,.11,.815,.88],[-.73,.151,.76,.849],[-.5,.125,.73,.81],[-.31,.08,.725,.77]],r);for(const U of[-1,1]){S(b,`tailSilverStripe${U}`,[[U*.11,.85,-.94],[U*.153,.82,-.76],[U*.13,.78,-.52],[U*.09,.75,-.35]],.012,a),S(b,`grabRail${U}`,[[U*.14,.87,-.65],[U*.18,.92,-.86],[U*.12,.94,-1]],.014,d);const $=new fs;$.moveTo(-.5,.8),$.quadraticCurveTo(-.34,.82,-.17,.78),$.lineTo(-.25,.6),$.quadraticCurveTo(-.37,.6,-.5,.8);const G=new or($,{depth:.015,bevelEnabled:!0,bevelSegments:3,bevelSize:.008,bevelThickness:.008,curveSegments:16}),Q=m(b,`sideCover${U}`,G,r,U*.14);Q.rotation.y=Math.PI/2,Q.scale.x=-1,S(b,`frameCradle${U}`,[[U*.12,.94,.38],[U*.16,.72,.3],[U*.18,.3,.15],[U*.17,.29,-.25],[U*.14,.71,-.48],[U*.12,.87,-.7]],.018,c),M(b,`seatSubframe${U}`,[U*.12,.63,-.35],[U*.12,.88,-.94],.019,c),M(b,`swingarm${U}`,[U*.13,.43,-.2],[U*.135,.315,-.715],.024,d),M(b,`shockShaft${U}`,[U*.168,.36,-.72],[U*.168,.79,-.55],.017,t);const it=[],ht=new D(U*.168,.39,-.71),R=new D(U*.168,.74,-.57);for(let f=0;f<=96;f++){const P=f/96,L=P*Math.PI*2*10,B=ht.clone().lerp(R,P);it.push([B.x+Math.cos(L)*.033,B.y+Math.sin(L)*.013,B.z+Math.sin(L)*.031])}S(b,`shockSpring${U}`,it,.0065,o),M(b,`footpeg${U}`,[U*.15,.44,-.23],[U*.29,.44,-.23],.017,c),p(b,`heelPlate${U}`,.016,.11,.19,a,U*.19,.45,-.32)}v(b,"crankcase",.225,.17,.24,u,0,.48,0);for(const U of[-1,1]){const $=m(b,`engineCover${U}`,new oe(.124,.124,.045,40),u,U*.228,.46,-.05);$.rotation.z=Math.PI/2;const G=m(b,`clutchCover${U}`,new oe(.073,.073,.026,32),d,U*.236,.43,.135);G.rotation.z=Math.PI/2}for(let U=0;U<4;U++){const $=(U-1.5)*.095;p(b,`cylinder${U}`,.084,.21,.18,u,$,.65,.115);for(let G=0;G<7;G++)p(b,`coolingFin${U}:${G}`,.091,.008,.19,d,$,.58+G*.024,.12);S(b,`header${U}`,[[$,.715,.22],[$,.64,.33],[$,.4,.34],[$,.235,.2],[$*.65,.225,-.13],[-.16,.26,-.37]],.022,g)}p(b,"camCover",.43,.065,.235,u,0,.802,.12),p(b,"radiator",.32,.2,.055,c,0,.7,.335),S(b,"collector",[[-.16,.26,-.37],[-.24,.3,-.48],[-.26,.39,-.62]],.041,g),M(b,"chromeSilencer",[-.265,.37,-.49],[-.265,.56,-.98],.063,g),M(b,"exhaustOutlet",[-.265,.56,-.98],[-.265,.57,-1.01],.045,c);function k(U,$,G){const Q=x(U,$),it=m(Q,"tire",new In(.262,.053,16,48),l);it.rotation.y=Math.PI/2,it.scale.z=G/.106;const ht=m(Q,"rim",new In(.218,.014,10,36),c);ht.rotation.y=Math.PI/2;const R=m(Q,"hub",new oe(.048,.048,G+.018,24),d);R.rotation.z=Math.PI/2;for(const f of[-1,1]){for(let L=0;L<6;L++){const B=L/6*Math.PI*2;M(Q,`spoke${f}:${L}`,[f*.026,Math.sin(B)*.047,Math.cos(B)*.047],[f*.044,Math.sin(B+.13)*.211,Math.cos(B+.13)*.211],.014,c)}const P=m(Q,`brakeDisc${f}`,new Ln(.093,.146,36),a,f*(G/2+.014));P.rotation.y=f*Math.PI/2}return{group:Q,tire:it,rim:ht,hub:R}}const z=x(b,"bikeFrontWheelPivot");z.position.set(0,.315,.72);const Z=k(z,"frontWheel",.12),W=x(b,"bikeRearWheelMount");W.position.set(0,.315,-.715);const J=k(W,"rearWheel",.16);m(W,"rearSprocket",new Ln(.048,.12,32),d,.096,0,0).rotation.y=Math.PI/2,S(b,"driveChain",[[.105,.4,-.71],[.105,.5,-.24],[.105,.42,-.15],[.105,.23,-.69],[.105,.25,-.82],[.105,.35,-.83],[.105,.4,-.71]],.009,d);for(const U of[-1,1])M(z,`forkChrome${U}`,[U*.095,.08,-.03],[U*.095,.63,-.27],.021,t),M(z,`forkSlider${U}`,[U*.095,0,0],[U*.095,.32,-.137],.031,c),p(z,`brakeCaliper${U}`,.048,.1,.056,c,U*.098,.04,-.115);const et=r.clone();et.side=Re;const X=[],gt=[];for(let U=0;U<=24;U++){const $=-1.13+U/24*2.26;for(let G=0;G<=6;G++){const Q=(G/6-.5)*.15;X.push(Q,Math.cos($)*(.359-.01*(Q/.075)**2),Math.sin($)*.359)}}for(let U=0;U<24;U++)for(let $=0;$<6;$++){const G=U*7+$;gt.push(G,G+7,G+1,G+1,G+7,G+8)}const pt=new _e;pt.setAttribute("position",new Jt(X,3)),pt.setIndex(gt),pt.computeVertexNormals(),m(z,"frontFender",pt,et),p(b,"rearMudguard",.14,.035,.27,c,0,.68,-.94).rotation.x=.5;function Et(U,$,G,Q){const it=x(U,$);it.position.set(0,G,Q),S(it,"chromeHandlebar",[[-.36,0,-.06],[-.24,.014,-.04],[-.16,.005,-.01],[-.1,-.035,.025],[.1,-.035,.025],[.16,.005,-.01],[.24,.014,-.04],[.36,0,-.06]],.012,t);for(const ht of[-1,1]){M(it,`grip${ht}`,[ht*.26,.009,-.05],[ht*.37,0,-.065],.022,l),p(it,`switchBlock${ht}`,.045,.041,.052,c,ht*.235,.013,-.04),S(it,`lever${ht}`,[[ht*.21,.013,-.006],[ht*.3,.019,.017],[ht*.37,.014,-.005]],.0065,a),M(it,`mirrorBoot${ht}`,[ht*.235,.02,-.025],[ht*.245,.075,-.02],.012,c),S(it,`mirrorStem${ht}`,[[ht*.245,.07,-.02],[ht*.26,.115,.008],[ht*.34,.165,.04],[ht*.425,.22,.075]],.0055,g),v(it,`roundMirror${ht}`,.059,.059,.012,c,ht*.465,.245,.085);const R=new Di(1,32),f=_(e?new dr(R,{color:11974326,textureWidth:256,textureHeight:256,multisample:0,clipBias:.001}):new ut(R,s(10992584,.08,.8)),`mirrorGlass${ht}`);f.position.set(ht*.465,.245,.071),f.scale.set(.055,.055,1),f.rotation.set(0,Math.PI,0),it.add(f),n.push(f);const P=m(it,`mirrorBezel${ht}`,new Ln(1,1.07,32),g,ht*.465,.245,.07);P.scale.copy(f.scale),P.rotation.copy(f.rotation)}return p(it,"upperTripleClamp",.25,.028,.105,c,0,-.1,.055),it}const kt=Et(b,"bikeHandlebar",1.035,.4),qt=m(b,"roundHeadlightBucket",new oe(.095,.092,.105,32),t,0,.947,.585);qt.rotation.x=Math.PI/2;const ne=new Tt({color:16053740,emissive:16777185,emissiveIntensity:.5,roughness:.15});m(b,"headlightLens",new Di(.086,32),ne,0,.947,.64),m(b,"headlightRim",new In(.09,.006,8,32),t,0,.947,.645);let Zt=0,nt=.22;const ct=[];function _t(U,$,G,Q,it,ht,R){const f=x(U,$);f.position.set(G,Q,it),f.rotation.x=-.42;const P=m(f,"meterBucket",new oe(.068,.068,.065,24),c,0,0,.018);P.rotation.x=Math.PI/2,m(f,"chromeMeterRim",new In(.065,.005,8,28),t,0,0,-.019);const L=document.createElement("canvas");L.width=256,L.height=256;const B=L.getContext("2d"),O=new gn(L);O.colorSpace=Me;const lt=m(f,"instrumentFace",new Di(.061,28),new Oe({map:O,toneMapped:!1}),0,0,-.02);return lt.rotation.y=Math.PI,ct.push({ctx:B,texture:O,max:ht,isRpm:R}),f}function Lt(U,$){p(U,`${$}InstrumentBridge`,.245,.034,.067,c,0,-.005,.124),p(U,`${$}CenterPod`,.05,.081,.049,c,0,.051,.137),_t(U,`${$}Speedometer`,.079,.064,.143,180,!1),_t(U,`${$}Tachometer`,-.079,.064,.143,13,!0)}Lt(kt,"exterior");const Dt=w.clone();Dt.position.set(0,.16,.08),T.add(Dt);const $t=Et(T,"bikeCockpitBar",1.17,.52);Lt($t,"cockpit");let re="";function N(U,$){Zt=Math.round(Math.abs(U)*3.6),nt=Math.round($*40)/40;const G=`${Zt}/${nt}`;if(G!==re){re=G;for(const Q of ct){const it=Q.ctx;it.fillStyle="#10171d",it.fillRect(0,0,256,256),it.textAlign="center";for(let f=0;f<=12;f++){const P=Math.PI*(.75+1.5*f/12);it.strokeStyle=f>10?"#ee4a50":"#d7e3e9",it.lineWidth=f%2?2:4,it.beginPath(),it.moveTo(128+Math.cos(P)*91,128+Math.sin(P)*91),it.lineTo(128+Math.cos(P)*109,128+Math.sin(P)*109),it.stroke(),f%2===0&&(it.fillStyle="#e3eaef",it.font="15px sans-serif",it.fillText(String(Math.round(f/12*Q.max)),128+Math.cos(P)*76,133+Math.sin(P)*76))}const ht=Q.isRpm?nt*12:Zt,R=Math.PI*(.75+1.5*Math.min(ht/Q.max,1));it.strokeStyle="#ff5147",it.lineWidth=4,it.beginPath(),it.moveTo(128,128),it.lineTo(128+Math.cos(R)*90,128+Math.sin(R)*90),it.stroke(),it.fillStyle="#c5d7df",it.font="14px sans-serif",it.fillText(Q.isRpm?"×1000":"km/h",128,176),it.fillStyle="#172c31",it.fillRect(94,189,68,25),it.fillStyle="#b6e2d4",it.font="18px monospace",it.fillText(Q.isRpm?String(Math.round(nt*12e3)):String(Zt),128,208),Q.texture.needsUpdate=!0}}}N(0,.22);function ot(U,$,G,Q,it,ht=.056){const R=new Tt({color:it,emissive:it,emissiveIntensity:.02,roughness:.25});return{mesh:p(b,U,ht,.034,.036,R,$,G,Q),material:R}}const st={left:[ot("frontLeftSignal",.16,.905,.584,16753962),ot("rearLeftSignal",.16,.78,-.985,16753962)],right:[ot("frontRightSignal",-.16,.905,.584,16753962),ot("rearRightSignal",-.16,.78,-.985,16753962)]},rt=ot("tailLamp",0,.849,-1.012,15014699,.16);return{motorcycleRoot:b,bikeCockpitRoot:T,bikeCockpitBar:$t,bikeHandlebar:kt,bikeFrontWheelPivot:z,bikeFrontWheelAssembly:Z,bikeRearWheelAssembly:J,bikeRearWheelMount:W,bikeSignalLamps:st,bikeBrakeLamp:rt,updateBikeCockpit:N,mirrorSurfaces:n}}function Gv(i,t,e,n,s=!0){const r=new jt;r.name="sedanRoot",i.add(r);const o={sedanRoot:r},a=[];o.mirrorSurfaces=a;const c=(f,P=.65,L=0)=>new Tt({color:f,roughness:P,metalness:L}),l=c(2435116,.88),h=c(4277578,.96),u=c(9213599,.38,.55),d=c(1385262,.16,.4),g=new Tt({color:15792639,emissive:14282495,emissiveIntensity:.8}),_=new Tt({color:10097179,emissive:15277353,emissiveIntensity:.28,roughness:.2}),x=new Tt({color:10929102,roughness:.12,metalness:.12,transparent:!0,opacity:.19,depthWrite:!1,side:Re}),m=(f,P)=>(f.name=P,f.userData.partName=P,f),p=(f,P=r)=>{const L=m(new jt,f);return P.add(L),L},S=f=>o[f]=p(f);function M(f,P,L,B=.025){B=Math.min(B,f/3,P/3,L/3);const O=new fs;O.moveTo(-f/2+B,-P/2+B),O.lineTo(f/2-B,-P/2+B),O.lineTo(f/2-B,P/2-B),O.lineTo(-f/2+B,P/2-B),O.closePath();const lt=new or(O,{depth:L-2*B,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:B,bevelThickness:B});return lt.translate(0,0,-L/2+B),lt}function v(f,P,L,B,O=0,lt=0,tt=0){const St=f.children.filter(j=>j.name===P||j.name.startsWith(`${P}:`)).length,ft=m(new ut(L,B),St?`${P}:${St+1}`:P);return ft.position.set(O,lt,tt),ft.castShadow=!B.transparent,ft.receiveShadow=!0,f.add(ft),ft}const y=(f,P,L,B,O,lt,tt=0,St=0,ft=0,j=.025)=>v(f,P,M(L,B,O,j),lt,tt,St,ft);function b(f,P,L,B){const O=[],lt=[];for(const[ft,j,mt,Bt]of L)for(let Pt=0;Pt<32;Pt++){const wt=Pt/32*Math.PI*2,Gt=Math.cos(wt),F=Math.sin(wt);O.push(Math.sign(Gt)*Math.pow(Math.abs(Gt),.42)*j,(Bt+mt)/2+Math.sign(F)*Math.pow(Math.abs(F),.42)*((Bt-mt)/2),ft)}for(let ft=0;ft<L.length-1;ft++)for(let j=0;j<32;j++){const mt=ft*32+j,Bt=ft*32+(j+1)%32;lt.push(mt,Bt,Bt+32,mt,Bt+32,mt+32)}for(let ft=1;ft<31;ft++){lt.push(0,ft+1,ft);const j=(L.length-1)*32;lt.push(j,j+ft,j+ft+1)}const St=new _e;return St.setAttribute("position",new Jt(O,3)),St.setIndex(lt),St.computeVertexNormals(),v(f,P,St,B)}function T(f,P,L,B,O=.008){const lt=new mo(L.map(tt=>new D(...tt)));return v(f,P,new hr(lt,Math.max(8,L.length*5),O,5,!1),B)}function C(f,P,L,B){const O=new _e;return O.setAttribute("position",new Jt(L.flat(),3)),O.setIndex([0,1,2,0,2,3]),O.computeVertexNormals(),v(f,P,O,B)}const w=new Tt({color:3462041,roughness:.35,metalness:.2,side:Re});function E(f,P,L,B,O=.06){const lt=p("gaimengoEmblem",f);return lt.position.set(P,L,B),v(lt,"badgeRing",new In(O,O*.12,6,32),e),v(lt,"badgeDisc",new Di(O*.86,32),w),lt}function I(f,P,L,B,O,lt){const tt=p(P,f);tt.position.set(...O);const ft=new D(-.36,1.245,-.38).sub(tt.position).normalize().add(new D(...lt).normalize()).normalize();tt.quaternion.setFromRotationMatrix(new ve().lookAt(ft,new D,new D(0,1,0))),y(tt,"mirrorFrame",L+.022,B+.022,.024,n,0,0,-.015,.006);const j=new ze(L,B),mt=m(s?new dr(j,{color:11974326,textureWidth:256,textureHeight:256,clipBias:.001,multisample:0}):new ut(j,c(10597570,.08,.85)),"reflectiveGlass");if(tt.add(mt),a.push(mt),s&&mt.onBeforeRender){const Bt=mt.onBeforeRender;mt.onBeforeRender=function(Pt,wt,Gt){if(Gt.userData.skipCarMirrors)return;const F=performance.now(),xt=Gt.userData.carMirrorInterval||0;if(xt&&F-(this.userData.reflectedAt||0)<xt)return;this.userData.reflectedAt=F;const bt=a.map(It=>It.visible),Nt=Pt.getViewport(new ge),vt=Pt.getScissor(new ge),at=Pt.getScissorTest();a.forEach(It=>{It!==mt&&(It.visible=!1)}),Pt.setScissorTest(!1);try{Bt.call(this,Pt,wt,Gt)}finally{a.forEach((It,Yt)=>{It.visible=bt[Yt]}),Pt.setViewport(Nt),Pt.setScissor(vt),Pt.setScissorTest(at)}}}return tt}const k=S("body"),z=new fs;z.moveTo(-2.26,.3),z.lineTo(-2.26,.76),z.quadraticCurveTo(-2.15,.94,-1.6,.97),z.lineTo(.95,.94),z.quadraticCurveTo(1.95,.94,2.24,.78),z.lineTo(2.24,.3),z.lineTo(1.72,.3),z.absarc(1.35,.315,.371,0,Math.PI,!1),z.lineTo(-.979,.3),z.absarc(-1.35,.315,.371,0,Math.PI,!1),z.closePath();const Z=new or(z,{depth:.055,bevelEnabled:!0,bevelSegments:3,bevelSize:.018,bevelThickness:.018,curveSegments:32}),W=Z.attributes.position;for(let f=0;f<W.count;f++){const P=W.getX(f),L=W.getY(f),B=Math.max(0,L-.77)*.24,O=Math.pow(Math.min(Math.abs(P)/2.3,1),5)*.048;W.setZ(f,W.getZ(f)-B-O)}Z.computeVertexNormals();for(const f of[-1,1]){const P=v(k,`sideSkin${f}`,Z,t,f*.825);P.rotation.y=f*Math.PI/2,f===1&&(P.scale.x=-1);for(const L of[-1.35,1.35]){const B=[];for(let O=0;O<=28;O++){const lt=O/28*Math.PI;B.push([f*.885,.315+Math.sin(lt)*.382,L+Math.cos(lt)*.382])}T(k,"fenderLip",B,t,.018)}T(k,"shoulderCrease",[[f*.86,.81,-2.04],[f*.898,.88,-.9],[f*.898,.87,.7],[f*.855,.8,1.98]],u,.003);for(const L of[-.48,.67])T(k,"doorShutline",[[f*.898,.93,L],[f*.899,.63,L-.02],[f*.88,.36,L-.07]],n,.0035),y(k,"doorHandle",.026,.032,.15,t,f*.912,.84,L-.19,.01);y(k,"rocker",.07,.08,1.9,t,f*.85,.3,0)}y(k,"underbody",1.55,.08,3.65,n,0,.24,0);const J=S("shoulderShell");for(const f of[-1,1])y(J,"beltLine",.12,.09,2.5,t,f*.81,.94,-.2);const et=S("hood");b(et,"bonnet",[[.94,.785,.943,1.012],[1.15,.817,.929,1],[1.75,.822,.884,.965],[2.1,.785,.859,.932],[2.23,.71,.85,.912]],t);for(const f of[-1,1])T(et,"bonnetCrease",[[f*.57,1.01,.99],[f*.49,.981,1.6],[f*.38,.945,2.15]],t,.009);const X=S("trunk");b(X,"bootLid",[[-2.275,.74,.902,.958],[-2.16,.835,.905,.99],[-1.85,.85,.916,1.004],[-1.51,.79,.925,1.015]],t),y(X,"bootFace",1.64,.24,.07,t,0,.8,-2.255),E(X,0,.86,-2.299,.039);const gt=S("frontBumper");b(gt,"bumper",[[1.98,.848,.3,.823],[2.15,.875,.295,.846],[2.25,.834,.31,.854],[2.318,.753,.34,.848]],t);const pt=S("rearBumper");b(pt,"bumper",[[-2.323,.746,.345,.636],[-2.28,.836,.32,.655],[-2.16,.873,.31,.665],[-2.02,.846,.32,.66]],t),y(pt,"lowerValance",1.36,.105,.03,n,0,.335,-2.321);for(const f of[-1,1])y(pt,"reflector",.19,.033,.016,_,f*.66,.48,-2.327);const Et=S("grille"),kt=new fs;kt.moveTo(-.52,.735),kt.lineTo(.52,.735),kt.lineTo(.715,.385),kt.quadraticCurveTo(0,.315,-.715,.385),kt.closePath(),v(Et,"trapezoidIntake",new Ul(kt),n,0,0,2.323);for(let f=0;f<7;f++){const P=.39+f*.046,L=.7-f*.026;y(Et,"grilleSlat",L*2,.012,.014,c(3423040,.45,.15),0,P,2.331,.003)}y(Et,"upperIntake",1.26,.063,.035,n,0,.825,2.276),T(Et,"chromeWing",[[-.71,.87,2.273],[-.36,.847,2.308],[0,.848,2.319],[.36,.847,2.308],[.71,.87,2.273]],e,.01),E(Et,0,.862,2.343,.041);const qt=S("cabin"),ne=S("roofPanel");y(ne,"roof",1.39,.075,1.14,t,0,1.435,-.23,.024),y(ne,"headliner",1.32,.021,1.11,h,0,1.388,-.23,.006);for(const[f,P,L]of[["aPillarL",-1,!1],["aPillarR",1,!1],["cPillarL",-1,!0],["cPillarR",1,!0]]){const B=S(f);T(B,"paintedPillar",[[P*.81,.97,L?-1.57:1],[P*.735,1.2,L?-1.19:.65],[P*.66,1.435,L?-.8:.31]],t,L?.065:.031),T(B,"pillarLining",[[P*.779,.978,L?-1.54:.99],[P*.705,1.2,L?-1.18:.64],[P*.637,1.418,L?-.79:.3]],h,L?.033:.019)}const Zt=S("windshield");C(Zt,"glass",[[-.78,.99,1],[.78,.99,1],[.65,1.413,.32],[-.65,1.413,.32]],x);const nt=S("rearWindow");C(nt,"glass",[[.76,1.005,-1.53],[-.76,1.005,-1.53],[-.64,1.415,-.79],[.64,1.415,-.79]],x);for(const[f,P]of[["sideWindowL",-1],["sideWindowR",1]]){const L=S(f);C(L,"glass",[[P*.816,.986,.97],[P*.816,.986,-1.5],[P*.665,1.412,-.78],[P*.665,1.412,.3]],x),T(qt,"bPillar",[[P*.814,.97,-.37],[P*.667,1.413,-.37]],n,.033),T(qt,"windowSurround",[[P*.816,.975,.98],[P*.664,1.422,.3],[P*.666,1.426,-.77],[P*.816,.981,-1.5]],n,.009)}for(const[f,P]of[["roofRailL",-1],["roofRailR",1]]){const L=S(f);T(L,"roofSeam",[[P*.65,1.465,.25],[P*.66,1.475,-.24],[P*.65,1.465,-.74]],n,.003)}const ct=v(ne,"sharkFin",new ds(.042,.09,4),t,0,1.508,-.66);ct.scale.z=1.7;for(const[f,P]of[["headlightL",-1],["headlightR",1]]){const L=S(f);L.position.set(P*.653,.848,2.197),L.rotation.y=P*.16,y(L,"smokedHousing",.43,.108,.13,d,0,0,0,.028);for(const B of[-.1,.025])v(L,"projector",new oe(.027,.027,.012,20),g,B,.01,.072).rotation.x=Math.PI/2;T(L,"ledSignature",[[-.192,.027,.073],[-.13,-.03,.073],[.14,-.03,.073],[.193,.021,.073]],g,.008)}for(const[f,P]of[["taillightL",-1],["taillightR",1]]){const L=S(f);L.position.set(P*.622,.835,-2.278),y(L,"redHousing",.43,.104,.061,_,0,0,0,.02),T(L,"lightSignature",[[-.19,.03,-.04],[.19,.03,-.04],[.13,-.032,-.04],[-.17,-.032,-.04]],_,.012)}for(const[f,P]of[["sideMirrorL",-1],["sideMirrorR",1]]){const L=S(f);y(L,"mirrorStalk",.17,.032,.054,n,P*.866,1.027,.72);const B=I(L,"sideMirrorFace",.15,.061,[P*.97,1.064,.582],[P*.15,-.05,-1]);y(B,"mirrorCap",.19,.1,.19,t,0,0,-.12,.027)}const _t=S("dashboard");y(_t,"cabinFloor",1.58,.08,2.58,l,0,.335,-.28),y(_t,"firewall",1.55,.56,.09,l,0,.615,.9);for(const f of[-1,1])y(_t,"lowerDoorLining",.075,.23,2.15,l,f*.766,.46,-.13),y(_t,"carpetMat",.53,.018,.8,n,f*.39,.383,.1,.004);y(_t,"mirrorStem",.025,.09,.035,n,.03,1.354,.405,.007),I(_t,"centerMirror",.245,.083,[.03,1.287,.39],[0,-.02,-1]),y(_t,"softDashTop",1.56,.13,.56,l,0,.915,.69,.035),y(_t,"lowerDash",1.51,.17,.26,h,0,.797,.6,.034),T(_t,"satinDashAccent",[[-.74,.86,.408],[-.43,.863,.399],[0,.862,.397],[.46,.864,.398],[.74,.885,.414]],u,.007);for(const f of[-.665,-.11,.115,.665]){y(_t,"ventFrame",.16,.062,.021,u,f,.875,.386,.005),y(_t,"ventRecess",.143,.047,.013,n,f,.875,.372,.004);for(let P=-1;P<=1;P++)y(_t,"ventSlat",.13,.003,.009,h,f,.875+P*.013,.362,8e-4)}y(_t,"climatePanel",.38,.073,.038,n,.015,.761,.432,.01);for(const f of[-.135,.16]){const P=v(_t,"climateKnob",new oe(.026,.026,.018,24),u,f,.761,.407);P.rotation.x=Math.PI/2}y(_t,"centerTunnel",.25,.17,.95,l,.015,.5,-.04),y(_t,"shiftSurround",.19,.017,.28,u,.015,.596,.18,.005),y(_t,"shiftBoot",.11,.07,.14,n,.015,.634,.18),y(_t,"gearSelector",.065,.1,.07,l,.015,.704,.18);for(const f of[-.1,-.28])v(_t,"cupWell",new oe(.057,.047,.012,24),n,.015,.59,f),v(_t,"cupRim",new In(.057,.004,6,24),u,.015,.597,f).rotation.x=Math.PI/2;y(_t,"armrest",.25,.085,.28,l,.015,.64,-.51);for(const f of[-1,1])y(_t,"doorCard",.047,.42,1.3,l,f*.79,.74,-.03),y(_t,"doorArmrest",.1,.048,.57,h,f*.738,.72,.07),T(_t,"doorTrim",[[f*.757,.875,.5],[f*.757,.857,.1],[f*.757,.8,-.5]],u,.006),y(_t,"doorPull",.014,.029,.12,e,f*.755,.84,.28,.004);const Lt=S("steeringWheel");Lt.position.set(-.36,.971,.16),Lt.rotation.x=-.22,v(Lt,"leatherRim",new In(.174,.019,12,64),l),y(Lt,"airbag",.137,.105,.055,l,0,-.005,0,.016);for(const f of[-1,1]){y(Lt,"horizontalSpoke",.11,.046,.028,l,f*.112,-.008,0),y(Lt,"spokeTrim",.081,.009,.014,u,f*.113,-.031,-.018,.002);for(let P=0;P<3;P++)y(Lt,"controlButton",.014,.011,.006,u,f*(.084+P*.025),.002,-.019,.001)}y(Lt,"lowerSpoke",.05,.098,.025,u,0,-.116,0),E(Lt,0,.009,-.035,.021);for(const f of[-1,1])y(_t,"columnStalk",.15,.019,.025,n,-.36+f*.14,.971,.24,.006);function Dt(f,P,L,B,O,lt=[768,320]){const tt=document.createElement("canvas");tt.width=lt[0],tt.height=lt[1];const St=tt.getContext("2d");O(St,tt.width,tt.height);const ft=new gn(tt);ft.colorSpace=Me;const j=v(f,P,new ze(L,B),new Oe({map:ft,toneMapped:!1}));return j.rotation.y=Math.PI,j.castShadow=!1,{ctx:St,texture:ft,screen:j}}const $t=S("instrumentCluster");$t.position.set(-.36,.973,.399),$t.rotation.x=-.15,y($t,"clusterHousing",.47,.17,.066,n,0,0,.027,.02),y($t,"clusterHood",.49,.023,.13,l,0,.083,.014,.007);let re=0,N=.18,ot="N",st="off";function rt(f,P,L){f.fillStyle="#071017",f.fillRect(0,0,P,L);const B=(O,lt,tt,St)=>{f.strokeStyle="#304652",f.lineWidth=8,f.beginPath(),f.arc(O,163,116,.75*Math.PI,2.25*Math.PI),f.stroke();for(let j=0;j<=12;j++){const mt=Math.PI*(.75+1.5*j/12);f.strokeStyle=j>10?"#ff655b":"#d0dee7",f.lineWidth=j%2?2:4,f.beginPath(),f.moveTo(O+Math.cos(mt)*96,163+Math.sin(mt)*96),f.lineTo(O+Math.cos(mt)*110,163+Math.sin(mt)*110),f.stroke(),j%2||(f.fillStyle="#c6d5df",f.font="16px sans-serif",f.textAlign="center",f.fillText(String(Math.round(j/12*tt)),O+Math.cos(mt)*79,169+Math.sin(mt)*79))}const ft=Math.PI*(.75+1.5*Math.min(lt/tt,1));f.strokeStyle="#f65b4f",f.lineWidth=4,f.beginPath(),f.moveTo(O,163),f.lineTo(O+Math.cos(ft)*89,163+Math.sin(ft)*89),f.stroke(),f.fillStyle="#c3d4df",f.font="18px sans-serif",f.textAlign="center",f.fillText(St,O,240)};B(151,N*8,8,"×1000"),B(617,re,240,"km/h"),f.textAlign="center",f.fillStyle="#f2f7fa",f.font="64px sans-serif",f.fillText(String(re),384,150),f.font="20px sans-serif",f.fillStyle="#9dafbd",f.fillText("km/h",384,182),f.fillStyle="#f2f7fa",f.font="32px sans-serif",f.fillText(ot,384,246),f.fillStyle="#56da9c",f.font="26px sans-serif",(st==="left"||st==="hazard")&&f.fillText("◀",304,48),(st==="right"||st==="hazard")&&f.fillText("▶",464,48)}const U=Dt($t,"liveGauges",.43,.139,rt);U.screen.position.z=-.009;let $="";o.updateCockpit=(f,P,L,B)=>{re=Math.round(Math.abs(f)*3.6),N=Math.round(P*40)/40,ot=L,st=B;const O=`${re}/${N}/${ot}/${st}`;O!==$&&($=O,rt(U.ctx,768,320),U.texture.needsUpdate=!0)};const G=S("centerScreen");G.position.set(.055,1.04,.438),G.rotation.x=-.1,y(G,"tabletBezel",.33,.206,.028,n,0,0,.015,.009);const Q=Dt(G,"mapDisplay",.305,.177,(f,P,L)=>{f.fillStyle="#172632",f.fillRect(0,0,P,L),f.strokeStyle="#344b58",f.lineWidth=10;for(let B=0;B<7;B++)f.beginPath(),f.moveTo(B*140-90,0),f.lineTo(B*140+20,L),f.stroke();for(let B=0;B<4;B++)f.beginPath(),f.moveTo(0,B*90+15),f.lineTo(P,B*90-50),f.stroke();f.strokeStyle="#52b9ee",f.lineWidth=12,f.beginPath(),f.moveTo(380,310),f.lineTo(360,180),f.lineTo(570,155),f.lineTo(550,40),f.stroke(),f.fillStyle="#e6f5ff",f.beginPath(),f.moveTo(358,181),f.lineTo(339,215),f.lineTo(378,207),f.closePath(),f.fill(),f.fillStyle="#0c151e",f.fillRect(0,0,95,L),f.font="32px sans-serif",f.fillStyle="#a8c9dd",f.fillText("⌂",28,65),f.fillText("♪",29,156),f.fillText("⚙",26,255)});Q.screen.position.z=-.001;for(const[f,P]of[["driverSeat",-.37],["passengerSeat",.37]]){const L=S(f);L.position.set(P,.55,-.4),y(L,"cushion",.47,.13,.5,l),y(L,"fabricInsert",.29,.025,.4,h,0,.076,.02,.007),y(L,"seatBack",.46,.5,.13,l,0,.27,-.24).rotation.x=-.14,y(L,"backInsert",.3,.37,.034,h,0,.28,-.158).rotation.x=-.14;for(const B of[-.08,.08])y(L,"headrestPost",.011,.1,.012,e,B,.565,-.27,.002);y(L,"headrest",.25,.15,.1,l,0,.65,-.27)}y(qt,"rearBench",1.36,.15,.45,l,0,.56,-1.09),y(qt,"rearSeatBack",1.35,.42,.12,l,0,.8,-1.34),o.wheelAssemblies=[];const it=c(1448219,.93),ht=c(3225664,.32,.65);for(const[f,P,L,B]of[["wheelFL",-.79,1.35,!0],["wheelFR",.79,1.35,!0],["wheelRL",-.79,-1.35,!1],["wheelRR",.79,-1.35,!1]]){const O=p(f);O.position.set(P,.315,L);const lt=p("rollingAssembly",O);v(lt,"tire",new oe(.315,.315,.205,48),it).rotation.z=Math.PI/2;for(const tt of[-1,1]){const St=p(`rimFace${tt}`,lt);St.position.x=tt*.108,St.rotation.y=tt*Math.PI/2,v(St,"rimBarrel",new oe(.224,.224,.013,48),ht).rotation.x=Math.PI/2,v(St,"machinedLip",new In(.224,.01,8,48),u,0,0,.01),v(St,"brakeDisc",new Di(.171,32),u,0,0,.009);for(let ft=0;ft<5;ft++)for(const j of[-.11,.11]){const mt=ft*Math.PI*2/5+j,Bt=y(St,"splitSpoke",.024,.18,.017,e,Math.sin(mt)*.127,Math.cos(mt)*.127,.025,.004);Bt.rotation.z=-mt}v(St,"hub",new oe(.052,.052,.03,20),u,0,0,.026).rotation.x=Math.PI/2;for(let ft=0;ft<5;ft++){const j=ft*Math.PI*2/5;v(St,"lug",new xn(.007,6,4),n,Math.cos(j)*.038,Math.sin(j)*.038,.045)}}o.wheelAssemblies.push({pivot:O,wheel:lt,steerable:B,radius:.315})}function R(f,P,L,B,O,lt,tt){const St=new Tt({color:O,emissive:O,emissiveIntensity:.02,roughness:.25});return{mesh:y(r,f,lt,tt,.018,St,P,L,B,.005),material:St}}return o.sedanSignalLamps={left:[R("frontSignalL",.795,.862,2.247,16755249,.073,.024),R("rearSignalL",.754,.813,-2.319,16755249,.13,.022)],right:[R("frontSignalR",-.795,.862,2.247,16755249,.073,.024),R("rearSignalR",-.754,.813,-2.319,16755249,.13,.022)]},o.sedanBrakeLamps=[-1,1].map(f=>R(`brake${f}`,f*.59,.86,-2.32,16721461,.28,.025)),o.reverseLamps=[-1,1].map(f=>R(`reverse${f}`,f*.43,.807,-2.32,15660543,.08,.022)),o}function Wv(i){const t=new jt;t.position.set(-.37,.58,-.38);const e=new Tt({color:1981066,roughness:.65}),n=new Tt({color:1976635,roughness:.75}),s=new Tt({color:15843965,roughness:.55}),r=new Tt({color:1513239,roughness:.8}),o=new Tt({color:14427686,emissive:8330525,emissiveIntensity:.35,roughness:.35}),a=new Tt({color:14870768,metalness:.85,roughness:.2}),c=new ut(new Wt(.32,.42,.2),e);c.position.set(0,.24,.04),c.rotation.x=-.08,c.castShadow=!0,t.add(c);for(const E of[-.085,.085]){const I=new ut(new Wt(.12,.11,.36),n);I.position.set(E,.06,.2),I.rotation.x=-.1,t.add(I)}const l=new jt;l.position.set(0,.54,.03);const h=new ut(new oe(.048,.055,.08,12),s);h.position.y=-.03,l.add(h);const u=new ut(new xn(.115,16,14),s);u.position.y=.06,u.scale.set(.92,1.05,.96),u.castShadow=!0,l.add(u);const d=new ut(new xn(.119,14,10,0,Math.PI*2,0,Math.PI*.62),r);d.position.y=.068,d.rotation.x=-.15,l.add(d);const g=new ut(new Wt(.16,.018,.11),new Tt({color:366185,roughness:.4}));g.position.set(0,.115,.11),g.rotation.x=.12,l.add(g);const _=new ut(new Wt(.15,.032,.025),new Tt({color:988970,metalness:.5,roughness:.2}));_.position.set(0,.068,.105),l.add(_),t.add(l);const x=new jt;x.position.set(.18,.39,.05);const m=new ut(new Wt(.075,.075,.44),e);m.position.set(-.02,-.04,.21),m.rotation.x=.15,m.rotation.y=-.12;const p=new ut(new xn(.042,10,8),s);p.position.set(-.05,-.06,.43),x.add(m,p),t.add(x);const S=new jt;S.position.set(-.18,.39,.05);const M=new ut(new Wt(.075,.075,.44),e);M.position.set(.02,-.04,.21),M.rotation.x=.15,M.rotation.y=.12;const v=new ut(new xn(.042,10,8),s);v.position.set(.05,-.06,.43),S.add(M,v),t.add(S);const y=new jt,b=new ut(new Wt(.055,.52,.022),o);b.position.set(-.01,.25,.145),b.rotation.z=-.62,b.rotation.x=-.08,y.add(b);const T=new ut(new Wt(.045,.34,.018),o);T.position.set(-.24,.48,-.02),T.rotation.z=.45,y.add(T);const C=new ut(new Wt(.33,.05,.024),o);C.position.set(0,.09,.16),y.add(C);const w=new ut(new Wt(.045,.065,.035),a);return w.position.set(.17,.08,.15),y.add(w),y.visible=!1,t.add(y),i.add(t),{group:t,headGroup:l,seatbeltGroup:y,leftArmGroup:x,rightArmGroup:S}}function Cu(i){const t=new jt,e=new jt,n=new jt;n.rotation.y=Math.PI,e.add(n),t.add(e);const s=new Qa({color:366185,metalness:.12,roughness:.24,clearcoat:1,clearcoatRoughness:.17}),r=new Tt({color:14212835,metalness:.92,roughness:.16}),o=new Tt({color:1316893,metalness:.38,roughness:.58});if(i==="motorcycle"){const l=Vv(n,r,!0);return l.bikeCockpitRoot.visible=!1,{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:null,cb400Parts:l,driverAvatar:null}}const a=Gv(n,s,r,o,!0),c=Wv(n);return{root:t,leanGroup:e,flipGroup:n,kind:i,corollaParts:a,cb400Parts:null,driverAvatar:c}}function mh(i,t){if(i.kind==="motorcycle"&&i.cb400Parts){const e=i.cb400Parts;e.motorcycleRoot.visible=!t,e.bikeCockpitRoot.visible=t;return}if(i.corollaParts){const e=i.corollaParts,n=!t;e.driverSeat&&(e.driverSeat.visible=n),e.frontBumper&&(e.frontBumper.visible=n),e.rearBumper&&(e.rearBumper.visible=n),e.grille&&(e.grille.visible=n),e.headlightL&&(e.headlightL.visible=n),e.headlightR&&(e.headlightR.visible=n),e.taillightL&&(e.taillightL.visible=n),e.taillightR&&(e.taillightR.visible=n),e.roofRailL&&(e.roofRailL.visible=n),e.roofRailR&&(e.roofRailR.visible=n)}i.driverAvatar&&(i.driverAvatar.group.visible=!t)}function Xv(i,t,e){var a,c,l,h;i.root.position.set(t.x,t.y,t.z),i.root.rotation.y=t.heading,i.leanGroup.rotation.x=t.pitch,i.leanGroup.rotation.z=t.roll;const n=t.blinkerOn&&(t.blinker==="left"||t.blinker==="hazard"),s=t.blinkerOn&&(t.blinker==="right"||t.blinker==="hazard"),r=t.braking||t.handbrake,o=Math.max(.18,Math.min(1,(t.rpm-700)/4200));if(i.corollaParts){const u=i.corollaParts;for(const _ of u.wheelAssemblies)_.steerable&&(_.pivot.rotation.y=t.steerAngleRad),_.wheel.rotation.x=t.wheelRotationRad;u.steeringWheel&&(u.steeringWheel.rotation.z=-t.steeringWheelRad);const d=(a=t.preDrive)!=null&&a.seatAdjusted?.06:0;if(u.driverSeat&&(u.driverSeat.position.z=-.4+d),i.driverAvatar){const _=i.driverAvatar;if(_.group.position.z=-.38+d,_.seatbeltGroup.visible=!!((c=t.preDrive)!=null&&c.seatbeltFastened),t.mirrorTouchTimer>0)_.headGroup.rotation.y=.32,_.headGroup.rotation.x=-.22,_.leftArmGroup.rotation.x=-.75,_.leftArmGroup.rotation.y=.35;else{_.headGroup.rotation.y=t.lookAngleRad*.95,_.headGroup.rotation.x=Math.abs(t.lookAngleRad)>.2?.05:0;const x=Se.clamp(t.steerAngleRad*.45,-.35,.35);_.leftArmGroup.rotation.x=x,_.leftArmGroup.rotation.y=0,_.rightArmGroup.rotation.x=-x}}for(const _ of u.sedanSignalLamps.left)_.material.emissiveIntensity=n?2.4:.02;for(const _ of u.sedanSignalLamps.right)_.material.emissiveIntensity=s?2.4:.02;for(const _ of u.sedanBrakeLamps)_.material.emissiveIntensity=r?2.5:.12;for(const _ of u.reverseLamps)_.material.emissiveIntensity=t.reversing?2:.02;const g=n&&s?"hazard":n?"left":s?"right":"off";(l=u.updateCockpit)==null||l.call(u,t.speedMs,o,t.gear,g)}if(i.cb400Parts){const u=i.cb400Parts;u.bikeFrontWheelPivot.rotation.y=t.steerAngleRad,u.bikeFrontWheelAssembly.group.rotation.x=t.wheelRotationRad,u.bikeRearWheelAssembly.group.rotation.x=t.wheelRotationRad,u.bikeHandlebar.rotation.y=t.steerAngleRad,u.bikeCockpitBar.rotation.y=t.steerAngleRad;for(const d of u.bikeSignalLamps.left)d.material.emissiveIntensity=n?2.4:.02;for(const d of u.bikeSignalLamps.right)d.material.emissiveIntensity=s?2.4:.02;u.bikeBrakeLamp.material.emissiveIntensity=r?2.5:.12,(h=u.updateBikeCockpit)==null||h.call(u,t.speedMs,o)}}class $v{constructor(t,e){Mt(this,"camera");Mt(this,"orbit");Mt(this,"mode","chase");Mt(this,"mirrorQuality","high");Mt(this,"mirrorCameras",{left:new Be(56,1.65,.1,450),center:new Be(44,2.5,.1,450),right:new Be(56,1.65,.1,450)});Mt(this,"miniMapCamera",new kl(-45,45,45,-45,1,240));Mt(this,"miniMapViewport",{centerX:0,centerZ:0,halfWidth:45,halfHeight:45,halfSize:45});Mt(this,"insetSurfaces",new WeakMap);Mt(this,"smoothPos",new D(12,5.5,56));Mt(this,"smoothLook",new D(12,1.6,48));Mt(this,"frameCounter",0);this.camera=new Be(60,e,.05,650),this.camera.layers.enable(1),[this.miniMapCamera,...Object.values(this.mirrorCameras)].forEach(n=>{n.userData.skipCarMirrors=!0,n.layers.set(0)}),this.orbit=new Cv(this.camera,t),this.orbit.enableDamping=!0,this.orbit.dampingFactor=.08,this.orbit.maxPolarAngle=Math.PI*.48,this.orbit.minDistance=2.8,this.orbit.maxDistance=65,this.orbit.enabled=!1}setMode(t,e,n){this.mode=t,this.orbit.enabled=t==="orbit",this.camera.userData.carMirrorInterval=t==="cockpit"||t==="instructor"?0:250,n&&mh(n,t==="cockpit"),document.body.dataset.view=t==="chase"?"follow":t,document.body.classList.toggle("sedan-cockpit",(t==="cockpit"||t==="instructor")&&(n==null?void 0:n.kind)!=="motorcycle"),document.body.classList.toggle("bike-cockpit",t==="cockpit"&&(n==null?void 0:n.kind)==="motorcycle"),t==="orbit"?(this.camera.fov=60,this.camera.updateProjectionMatrix(),this.camera.position.set(e.x+16,e.y+18,e.z+16),this.orbit.target.set(e.x,e.y+1.2,e.z),this.orbit.update()):this.snapToState(e,(n==null?void 0:n.kind)??"sedan")}getMode(){return this.mode}setMirrorQuality(t,e){this.mirrorQuality=t}bindMirrorsToVehicle(t){mh(t,this.mode==="cockpit")}snapToState(t,e="sedan"){const n=this.getViewPose(this.mode,t,e);this.smoothPos.copy(n.position),this.smoothLook.copy(n.lookTarget),this.camera.position.copy(n.position),this.camera.lookAt(n.lookTarget)}resize(t){this.camera.aspect=t,this.camera.updateProjectionMatrix()}getViewPose(t,e,n){const s=new D(-Math.sin(e.heading),0,-Math.cos(e.heading)),r=new D(Math.cos(e.heading),0,-Math.sin(e.heading)),o=e.heading+e.lookAngleRad,a=new D(-Math.sin(o),0,-Math.cos(o)),c=new D(Math.cos(o),0,-Math.sin(o)),l=new D(e.x,e.y,e.z);if(t==="cockpit"){if(n==="motorcycle"){const m=l.clone().add(new D(0,1.42,0)).add(s.clone().multiplyScalar(-.08)),p=m.clone().add(a.clone().multiplyScalar(30)).add(c.clone().multiplyScalar(.04)).add(new D(0,Math.sin(e.pitch)*28-1.3,0));return{position:m,lookTarget:p}}const _=l.clone().add(new D(0,1.245,0)).add(s.clone().multiplyScalar(-.38)).add(r.clone().multiplyScalar(.36)),x=_.clone().add(a.clone().multiplyScalar(28)).add(c.clone().multiplyScalar(.04)).add(new D(0,Math.sin(e.pitch)*26-1.1,0));return{position:_,lookTarget:x}}if(t==="instructor"){const _=l.clone().add(new D(0,1.24,0)).add(s.clone().multiplyScalar(-.34)).add(r.clone().multiplyScalar(-.37)),x=l.clone().add(new D(0,1.02+Math.sin(e.pitch)*1.2,0)).add(s.clone().multiplyScalar(.32)).add(r.clone().multiplyScalar(.24-e.lookAngleRad*.18));return{position:_,lookTarget:x}}if(t==="hood"){const _=l.clone().add(new D(0,1.12,0)).add(s.clone().multiplyScalar(.55)),x=_.clone().add(a.clone().multiplyScalar(22)).add(new D(0,Math.sin(e.pitch)*22-.8,0));return{position:_,lookTarget:x}}const h=n==="motorcycle"?7.2:9,u=n==="motorcycle"?4.6:5.5,d=l.clone().add(new D(0,u,0)).add(a.clone().multiplyScalar(-h)),g=l.clone().add(new D(0,n==="motorcycle"?1.28:1.6,0));return{position:d,lookTarget:g}}update(t,e,n,s,r,o){if(this.mode==="orbit"){const u=e.y+(n==="motorcycle"?1:1.2);this.orbit.target.lerp(new D(e.x,u,e.z),1-Math.pow(.01,t)),this.orbit.update();return}const a=this.mode==="cockpit"?n==="motorcycle"?78:70:this.mode==="instructor"?74:60,c=Se.clamp(Math.abs(e.speedMs)/22,0,1);this.camera.fov=Se.damp(this.camera.fov,a+c*14,5,t),this.camera.updateProjectionMatrix();const l=this.getViewPose(this.mode,e,n);if(this.mode==="cockpit"||this.mode==="instructor"||this.mode==="hood"){this.camera.position.copy(l.position),this.camera.lookAt(l.lookTarget);return}const h=1-Math.pow(.002,t);this.smoothPos.lerp(l.position,h),this.camera.position.copy(this.smoothPos),this.camera.lookAt(l.lookTarget)}renderInset(t,e,n,s){const r=e.clientWidth,o=e.clientHeight;if(r<2||o<2)return;let a=this.insetSurfaces.get(e);if(!a){const u=document.createElement("canvas");u.className="insetCanvas",u.setAttribute("aria-hidden","true"),e.prepend(u);const d=u.getContext("2d",{alpha:!1});a={canvas:u,ctx:d},this.insetSurfaces.set(e,a)}const c=t.getPixelRatio(),l=Math.min(Math.floor(r*c),t.domElement.width),h=Math.min(Math.floor(o*c),t.domElement.height);(a.canvas.width!==l||a.canvas.height!==h)&&(a.canvas.width=l,a.canvas.height=h),t.setScissorTest(!0),t.setViewport(0,0,l/c,h/c),t.setScissor(0,0,l/c,h/c),t.render(n,s),a.ctx.drawImage(t.domElement,0,t.domElement.height-h,l,h,0,0,l,h),t.setScissorTest(!1)}renderPiPMirrors(t,e,n,s,r,o,a){if(a||this.mirrorQuality==="off"||this.mode==="orbit"||(this.frameCounter++,this.mirrorQuality==="low"&&this.frameCounter%2!==0))return;const c=new D(-Math.sin(n.heading),0,-Math.cos(n.heading)),l=new D(Math.cos(n.heading),0,-Math.sin(n.heading)),h=new D(n.x,n.y,n.z),u=(d,g,_)=>{if(!d)return;const x=d.getBoundingClientRect();if(x.width<2||x.height<2)return;g.aspect=x.width/x.height,g.updateProjectionMatrix(),_==="center"&&(g.projectionMatrix.elements[0]*=-1,g.projectionMatrixInverse.copy(g.projectionMatrix).invert());const m=_==="left"?-1:_==="right"?1:0,p=_==="center"?0:.88*m,S=_==="center"?0:8.5*m,M=h.clone().add(new D(0,_==="center"?1.93:1.78,0)).add(c.clone().multiplyScalar(_==="center"?.24:.06)).add(l.clone().multiplyScalar(p)),v=M.clone().add(c.clone().multiplyScalar(-16)).add(l.clone().multiplyScalar(S)).add(new D(0,.12,0));g.position.copy(M),g.lookAt(v),this.renderInset(t,d,e,g)};u(s,this.mirrorCameras.left,"left"),u(r,this.mirrorCameras.center,"center"),u(o,this.mirrorCameras.right,"right")}renderPiPMiniMap(t,e,n,s,r,o,a,c,l){if(!n)return;const h=n.getBoundingClientRect();if(h.width<2||h.height<2)return;const u=h.width/h.height,d=r.width*.5,g=r.height*.5,_=o?Math.max(r.width,r.height)*.56:Math.max(24,Math.max(r.width,r.height)*.28),x=o?_/Math.max(1,a):_,m=u>=1?x*u:x,p=u>=1?x:x/u,S=o?c:Se.clamp(s.x,-d,d),M=o?l:Se.clamp(s.z,-g,g);this.miniMapViewport={centerX:S,centerZ:M,halfWidth:m,halfHeight:p,halfSize:x},this.miniMapCamera.left=-m,this.miniMapCamera.right=m,this.miniMapCamera.top=p,this.miniMapCamera.bottom=-p,this.miniMapCamera.position.set(S,110,M),this.miniMapCamera.up.set(0,0,-1),this.miniMapCamera.lookAt(S,0,M),this.miniMapCamera.updateProjectionMatrix(),this.renderInset(t,n,e,this.miniMapCamera)}}const oo=[{id:"kyoshujo-3d",nameEn:"Sakuragaoka 3D Driving School (Full 3D Kyōshūjo)",nameJa:"桜ヶ丘自動車教習所 (3D立体コース)",mapWidth:180,startX:12,startZ:48.1,startHeading:Math.PI/2,accentColor:"#059669"},{id:"tokyo-fuchu",nameEn:"Fuchu Driver's License Test Center, Tokyo",nameJa:"東京府中運転免許試験場",mapWidth:420,startX:-54,startZ:88,startHeading:0,accentColor:"#2563eb"},{id:"tokyo-samezu",nameEn:"Samezu Driver's License Test Center, Tokyo",nameJa:"東京都鮫洲運転免許試験場",mapWidth:340,startX:-42,startZ:74,startHeading:Math.PI/2,accentColor:"#0891b2"},{id:"kanagawa-futamatagawa-car",nameEn:"Kanagawa License Center (Futamatagawa · Car)",nameJa:"神奈川県運転免許センター（二俣川・四輪）",mapWidth:460,startX:-67.9,startZ:112,startHeading:Math.PI/2,accentColor:"#059669"},{id:"osaka-kadoma",nameEn:"Kadoma Driver's License Test Center, Osaka",nameJa:"大阪門真運転免許試験場",mapWidth:400,startX:-50,startZ:82,startHeading:0,accentColor:"#7c3aed"},{id:"aichi-hirabari",nameEn:"Hirabari Driver's License Test Center, Nagoya",nameJa:"愛知県平針運転免許試験場",mapWidth:380,startX:-48,startZ:76,startHeading:Math.PI/2,accentColor:"#d97706"},{id:"saitama-konosu",nameEn:"Saitama Prefectural Driver's License Center (Konosu)",nameJa:"埼玉県警察運転免許センター（鴻巣）",mapWidth:410,startX:-55,startZ:84,startHeading:0,accentColor:"#0d9488"},{id:"chiba-makuhari-car",nameEn:"Chiba Makuhari License Center (Car)",nameJa:"千葉幕張免許センター（四輪）",mapWidth:390,startX:-46,startZ:80,startHeading:Math.PI/2,accentColor:"#db2777"}];class Yv{constructor(t){Mt(this,"group",new jt);Mt(this,"mesh",null);Mt(this,"texture",null);Mt(this,"activeSource",null);Mt(this,"currentSize",{width:180,height:120});this.group.visible=!1,t.add(this.group)}getActiveSource(){return this.activeSource}async loadFromDataUrl(t,e){const n=await new Promise((s,r)=>{const o=new Image;o.onload=()=>s(o),o.onerror=()=>r(new Error("Failed to decode map image")),o.src=t});this.applyCanvasOrImage(n,n.width,n.height,e)}loadProceduralTestCenter(t){const s=document.createElement("canvas");s.width=2048,s.height=1360;const r=s.getContext("2d");r.fillStyle="#4e753e",r.fillRect(0,0,2048,1360);for(let a=0;a<6e3;a++)r.fillStyle=a%2===0?"rgba(65,98,48,0.28)":"rgba(110,148,80,0.22)",r.fillRect(Math.random()*2048,Math.random()*1360,4,4);const o=(a,c=92)=>{r.save(),r.lineCap="round",r.lineJoin="round",r.strokeStyle="#d1d5db",r.lineWidth=c+10,a(),r.stroke(),r.strokeStyle="#363c44",r.lineWidth=c,a(),r.stroke(),r.strokeStyle="#f8fafc",r.lineWidth=3,r.setLineDash([24,24]),a(),r.stroke(),r.restore()};o(()=>{r.beginPath(),r.roundRect(140,120,1768,1120,160)},106),o(()=>{r.beginPath(),r.moveTo(2048*.35,120),r.lineTo(2048*.35,1240),r.moveTo(2048*.65,120),r.lineTo(2048*.65,1240),r.moveTo(140,1360*.45),r.lineTo(1908,1360*.45),r.moveTo(140,1360*.72),r.lineTo(2048*.65,1360*.72)},88),o(()=>{r.beginPath(),r.moveTo(2048*.35,1360*.25),r.bezierCurveTo(2048*.5,1360*.16,2048*.5,1360*.38,2048*.65,1360*.28)},52),o(()=>{r.beginPath(),r.moveTo(2048*.65,1360*.58),r.lineTo(2048*.78,1360*.58),r.lineTo(2048*.78,1360*.76),r.lineTo(1908,1360*.76)},54),r.fillStyle="rgba(255,255,255,0.85)",r.font='bold 44px "Noto Sans JP", sans-serif',r.fillText(t.nameJa,220,210),r.fillStyle=t.accentColor,r.font="bold 30px sans-serif",r.fillText(t.nameEn,220,255),this.applyCanvasOrImage(s,2048,1360,t.mapWidth)}applyCanvasOrImage(t,e,n,s){this.disposeCurrent(),this.activeSource=t;const r=new He(t);r.colorSpace=Me,r.anisotropy=8,r.needsUpdate=!0,this.texture=r;const o=n/Math.max(1,e),a=Math.max(10,s),c=a*o;this.currentSize={width:a,height:c};const l=new ze(a,c),h=new Tt({map:r,roughness:.92,metalness:0}),u=new ut(l,h);u.rotation.x=-Math.PI/2,u.position.y=.005,u.receiveShadow=!0,this.mesh=u,this.group.add(u)}setWidth(t){var o;if(!this.mesh||!((o=this.texture)!=null&&o.image))return;const e=this.texture.image,n=e.height/Math.max(1,e.width),s=Math.max(10,t),r=s*n;this.currentSize={width:s,height:r},this.mesh.geometry.dispose(),this.mesh.geometry=new ze(s,r)}setVisible(t){this.group.visible=t}disposeCurrent(){this.mesh&&(this.group.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.mesh=null),this.texture&&(this.texture.dispose(),this.texture=null)}}const gh="jp_kyoshujo_custom_route_v1";class qv{constructor(t){Mt(this,"group",new jt);Mt(this,"ribbonGroup",new jt);Mt(this,"stampGroup",new jt);Mt(this,"activeRing");Mt(this,"data",{waypoints:[],stamps:[]});Mt(this,"memoryMode","guided");Mt(this,"currentWpIndex",0);Mt(this,"wrongTurnCount",0);Mt(this,"bestDistToCurrentWp",1/0);Mt(this,"offRouteAlert",!1);Mt(this,"completed",!1);Mt(this,"autoStopTimer",0);Mt(this,"stoppedAtStampIds",new Set);Mt(this,"trafficLightLamps",[]);Mt(this,"onRouteCompleted");this.group.add(this.ribbonGroup,this.stampGroup);const e=new Ln(1.4,2,28),n=new Oe({color:3462041,side:Re,transparent:!0,opacity:.85});this.activeRing=new ut(e,n),this.activeRing.rotation.x=-Math.PI/2,this.activeRing.position.y=.06,this.activeRing.visible=!1,this.group.add(this.activeRing),t.add(this.group),this.loadSavedRoute()}getData(){return this.data}hasRoute(){return this.data.waypoints.length>=2}getMemoryMode(){return this.memoryMode}setMemoryMode(t){this.memoryMode=t,this.ribbonGroup.visible=t!=="blind",this.activeRing.visible=this.hasRoute()&&(t!=="blind"||this.offRouteAlert)}setRouteData(t,e=!0){if(this.data={waypoints:t.waypoints.map(n=>({...n})),stamps:t.stamps.map(n=>({...n}))},this.recomputeTurnDirections(),this.rebuild3DVisuals(),this.resetProgress(),e)try{window.localStorage.setItem(gh,JSON.stringify(this.data))}catch{}}clearRoute(){this.setRouteData({waypoints:[],stamps:[]},!0)}loadSavedRoute(){try{const t=window.localStorage.getItem(gh);if(!t)return;const e=JSON.parse(t);Array.isArray(e==null?void 0:e.waypoints)&&Array.isArray(e==null?void 0:e.stamps)&&this.setRouteData(e,!1)}catch{}}resetProgress(){this.currentWpIndex=this.data.waypoints.length>1?1:0,this.wrongTurnCount=0,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1,this.completed=!1,this.autoStopTimer=0,this.stoppedAtStampIds.clear(),this.setMemoryMode(this.memoryMode)}getStartPose(){if(this.data.waypoints.length<2)return null;const t=this.data.waypoints[0],e=this.data.waypoints[1],n=Math.atan2(-(e.x-t.x),-(e.z-t.z));return{x:t.x,z:t.z,heading:n}}recomputeTurnDirections(){const t=this.data.waypoints;for(let e=0;e<t.length;e++){if(e===0){t[e].turn="start";continue}if(e===t.length-1){t[e].turn="goal";continue}const n=t[e-1],s=t[e],r=t[e+1],o=Math.atan2(-(s.x-n.x),-(s.z-n.z)),a=Math.atan2(-(r.x-s.x),-(r.z-s.z)),l=_o(a-o)*180/Math.PI;Math.abs(l)>135?t[e].turn="uturn":l>28?t[e].turn="left":l<-28?t[e].turn="right":t[e].turn="straight"}}autoExtractRouteFromImage(t,e,n,s){const o=t.height/Math.max(1,t.width),a=Math.max(60,Math.round(180*o)),c=e*o,l=document.createElement("canvas");l.width=180,l.height=a;const h=l.getContext("2d");h.drawImage(t,0,0,180,a);const u=h.getImageData(0,0,180,a).data,d=[];for(let v=2;v<a-2;v+=2)for(let y=2;y<178;y+=2){const b=(v*180+y)*4,T=u[b],C=u[b+1],w=u[b+2];if(u[b+3]<128)continue;let I=!1;if(n==="red"?I=T>155&&T-C>55&&T-w>55:n==="blue"?I=w>150&&w-T>45&&w-C>20:n==="green"?I=C>140&&C-T>35&&C-w>25:n==="orange"&&(I=T>180&&C>95&&C<185&&w<85),I){const k=(y/180-.5)*e,z=(v/a-.5)*c;d.push({x:k,z})}}if(d.length<4)return[];const g=Math.max(4,e/45),_=new Map;for(const v of d){const y=Math.round(v.x/g),b=Math.round(v.z/g),T=`${y},${b}`,C=_.get(T)??{sumX:0,sumZ:0,count:0};C.sumX+=v.x,C.sumZ+=v.z,C.count++,_.set(T,C)}const x=Array.from(_.values()).map(v=>({x:v.sumX/v.count,z:v.sumZ/v.count,used:!1}));if(x.length<2)return[];let m=0,p=1/0;for(let v=0;v<x.length;v++){const y=s?Math.hypot(x[v].x-s.x,x[v].z-s.z):-x[v].z+x[v].x*.3;y<p&&(p=y,m=v)}const S=[];x[m].used=!0,S.push({x:x[m].x,z:x[m].z,turn:"start"});const M=g*4.5;for(;S.length<45;){const v=S[S.length-1];let y=-1,b=M;for(let T=0;T<x.length;T++){if(x[T].used)continue;const C=Math.hypot(x[T].x-v.x,x[T].z-v.z);C<b&&(b=C,y=T)}if(y===-1)break;x[y].used=!0,b>=g*.85&&S.push({x:x[y].x,z:x[y].z,turn:"straight"})}return S}update(t,e,n,s,r){var v;const o=n.getLightForAxis("NS");for(const y of this.trafficLightLamps)y.green.emissiveIntensity=o==="green"?2.2:.15,y.yellow.emissiveIntensity=o==="yellow"?2.2:.15,y.red.emissiveIntensity=o==="red"?2.2:.15;if(!this.hasRoute())return this.activeRing.visible=!1,{bannerText:null,autoDriveInput:null};const a=s==="ja",c=this.data.waypoints;if(this.completed){this.activeRing.visible=!1;const y=Math.max(0,Math.round((1-this.wrongTurnCount/Math.max(1,c.length))*100));return{bannerText:a?`カスタムルート完走！ 暗記正確度: ${y}% (コース間違い: ${this.wrongTurnCount}回) — [O]キーで最初から復習`:`Custom Route Complete! Memory Accuracy: ${y}% (Wrong turns: ${this.wrongTurnCount}) — Press [O] to practice again`,autoDriveInput:null}}const l=c[this.currentWpIndex];if(!l)return this.completed=!0,{bannerText:null,autoDriveInput:null};const h=Math.hypot(l.x-e.x,l.z-e.z);h<this.bestDistToCurrentWp&&(this.bestDistToCurrentWp=h),h-this.bestDistToCurrentWp>16&&!this.offRouteAlert?(this.offRouteAlert=!0,this.wrongTurnCount++):h<this.bestDistToCurrentWp+4&&(this.offRouteAlert=!1);const u=this.memoryMode!=="blind"||this.offRouteAlert;if(this.activeRing.visible=u,u){this.activeRing.position.set(l.x,.07,l.z);const y=1+Math.sin(r*5)*.12;this.activeRing.scale.set(y,y,1)}const d=this.currentWpIndex===c.length-1?4.2:5.5;h<=d&&(this.currentWpIndex>=c.length-1?(Math.abs(e.speedMs)<.4||this.memoryMode==="autodrive")&&(this.completed=!0,(v=this.onRouteCompleted)==null||v.call(this,this.wrongTurnCount,c.length)):(this.currentWpIndex++,this.bestDistToCurrentWp=1/0,this.offRouteAlert=!1));const g={start:"出発",straight:"直進 (Straight)",left:"左折 ◀ (Turn Left)",right:"右折 ▶ (Turn Right)",uturn:"Uターン (U-Turn)",goal:"発着点ゴール・停止 (Goal Stop)"},_={start:"Start",straight:"Continue Straight (直進)",left:"Turn Left ◀ (左折)",right:"Turn Right ▶ (右折)",uturn:"Make U-Turn (Uターン)",goal:"Goal — Come to Full Stop (ゴール停止)"},x=c[this.currentWpIndex]??l,m=Math.round(Math.hypot(x.x-e.x,x.z-e.z)),p=a?g[x.turn]:_[x.turn];let S;this.offRouteAlert?S=a?`⚠️ コース間違い！ ポイント #${this.currentWpIndex} (${m}m先) へ戻ってください`:`⚠️ Wrong Turn! Head back toward Checkpoint #${this.currentWpIndex} (${m}m)`:this.memoryMode==="blind"?S=a?`🧠 暗記テスト中 [#${this.currentWpIndex}/${c.length-1}] ガイド非表示 — 記憶で走行 (ミス: ${this.wrongTurnCount}回)`:`🧠 Memory Test [#${this.currentWpIndex}/${c.length-1}] Guide hidden — drive from memory (Mistakes: ${this.wrongTurnCount})`:S=`${this.memoryMode==="autodrive"?a?"🤖 自動お手本走行":"🤖 Auto-Drive Demo":a?"📍 ルートガイド":"📍 Route Guide"} [#${this.currentWpIndex}/${c.length-1} · ${m}m]: ${p}`;let M=null;return this.memoryMode==="autodrive"&&!this.completed&&(M=this.computeAutoDriveInput(t,e,x)),{bannerText:S,autoDriveInput:M}}computeAutoDriveInput(t,e,n){for(let v=0;v<this.data.stamps.length;v++){const y=this.data.stamps[v];if(y.kind==="stopSign"&&!this.stoppedAtStampIds.has(v)&&Math.hypot(y.x-e.x,y.z-e.z)<4.5){if(this.autoStopTimer+=t,this.autoStopTimer<1.4)return{throttle:0,brake:.9,steerLeft:0,steerRight:0,analogSteerTarget:0,clutch:0,lookLeft:this.autoStopTimer<.7,lookRight:this.autoStopTimer>=.7};this.stoppedAtStampIds.add(v),this.autoStopTimer=0}}const s=n.x-e.x,r=n.z-e.z,o=Math.hypot(s,r)||1,a=ps(e.heading),c=s/o,l=r/o,h=a.z*c-a.x*l,u=a.x*c+a.z*l,d=Math.atan2(h,u),g=2*Math.sin(d)/Math.max(2.5,Math.min(8,o)),_=Math.atan(2.6*g),x=Math.max(-1,Math.min(1,_/.75));o<18&&n.turn==="left"?e.blinker="left":o<18&&n.turn==="right"?e.blinker="right":Math.abs(d)<.12&&(e.blinker="off");const m=n.turn==="left"||n.turn==="right"||n.turn==="goal",p=n.turn==="goal"&&o<6?0:m&&o<12?2.8:Math.abs(d)>.35?2.6:5.5,S=e.speedMs<p?.48:0,M=e.speedMs>p+.8||p===0?.65:0;return{throttle:S,brake:M,steerLeft:0,steerRight:0,analogSteerTarget:x,clutch:0,lookLeft:!1,lookRight:!1}}rebuild3DVisuals(){for(;this.ribbonGroup.children.length>0;)this.ribbonGroup.remove(this.ribbonGroup.children[0]);for(;this.stampGroup.children.length>0;)this.stampGroup.remove(this.stampGroup.children[0]);this.trafficLightLamps=[];const t=this.data.waypoints;if(t.length>=2){const e=t.map(o=>new D(o.x,.08,o.z)),n=new mo(e,!1,"catmullrom",.15),s=new hr(n,Math.max(24,t.length*10),.22,6,!1),r=new Oe({color:3462041,transparent:!0,opacity:.72});this.ribbonGroup.add(new ut(s,r)),t.forEach((o,a)=>{const c=this.createCheckpointSign(a===0?"S":a===t.length-1?"G":String(a),o.turn);c.position.set(o.x,0,o.z),this.ribbonGroup.add(c)})}for(const e of this.data.stamps)e.kind==="stopSign"?this.stampGroup.add(this.create3DStopSign(e.x,e.z,e.heading)):e.kind==="trafficLight"?this.stampGroup.add(this.create3DTrafficLight(e.x,e.z,e.heading)):e.kind==="pole"&&this.stampGroup.add(this.create3DPole(e.x,e.z))}createCheckpointSign(t,e){const n=new jt,s=document.createElement("canvas");s.width=128,s.height=128;const r=s.getContext("2d");r.beginPath(),r.arc(64,64,56,0,Math.PI*2),r.fillStyle=e==="goal"?"#d62828":e==="left"||e==="right"?"#005bac":"#059669",r.fill(),r.lineWidth=8,r.strokeStyle="#ffffff",r.stroke(),r.fillStyle="#ffffff",r.textAlign="center",r.textBaseline="middle",r.font="bold 54px sans-serif",r.fillText(t,64,66);const o=new gn(s);o.colorSpace=Me;const a=new eu(new Cl({map:o,transparent:!0}));return a.scale.set(1.8,1.8,1),a.position.y=2.1,n.add(a),n}create3DStopSign(t,e,n){const s=new jt;s.position.set(t,0,e),s.rotation.y=n;const r=new ut(new ze(3.4,.45),new Oe({color:16777215,side:Re}));r.rotation.x=-Math.PI/2,r.position.set(0,.03,0),s.add(r);const o=new ut(new oe(.04,.04,2.5,8),new Tt({color:9741240}));o.position.set(-1.9,1.25,0),s.add(o);const a=document.createElement("canvas");a.width=256,a.height=256;const c=a.getContext("2d");c.beginPath(),c.moveTo(20,24),c.lineTo(236,24),c.lineTo(128,228),c.closePath(),c.fillStyle="#d62828",c.fill(),c.lineWidth=12,c.strokeStyle="#ffffff",c.stroke(),c.fillStyle="#ffffff",c.textAlign="center",c.font='bold 46px "Noto Sans JP", sans-serif',c.fillText("止まれ",128,95),c.font="bold 26px sans-serif",c.fillText("STOP",128,138);const l=new gn(a);l.colorSpace=Me;const h=new ut(new ze(1,1),new Oe({map:l,transparent:!0,side:Re}));return h.position.set(-1.9,2.3,.05),s.add(h),s}create3DTrafficLight(t,e,n){const s=new jt;s.position.set(t,0,e),s.rotation.y=n;const r=new Tt({color:6583435}),o=new ut(new oe(.1,.12,5,10),r);o.position.set(-2.4,2.5,0),s.add(o);const a=new ut(new Wt(1.5,.5,.35),new Tt({color:1976635}));a.position.set(-.6,4.7,0),s.add(a);const c=new Tt({color:413243,emissive:1108120,emissiveIntensity:1.5}),l=new Tt({color:7877903,emissive:16758531,emissiveIntensity:.2}),h=new Tt({color:8330525,emissive:16722474,emissiveIntensity:.2});this.trafficLightLamps.push({green:c,yellow:l,red:h});const u=new oe(.14,.14,.06,12),d=(g,_)=>{const x=new ut(u,g);x.rotation.x=Math.PI/2,x.position.set(-.6+_,4.7,.18),s.add(x)};return d(c,-.44),d(l,0),d(h,.44),s}create3DPole(t,e){const n=new jt;n.position.set(t,0,e);const s=new Tt({color:14231078}),r=new Tt({color:16317180});for(let o=0;o<5;o++){const a=new ut(new oe(.06,.06,.32,10),o%2===0?s:r);a.position.y=.16+o*.32,n.add(a)}return n}}function Tn(i,t,e,n,s,r,o="off"){const a=[];for(let c=0;c<=r;c++){const l=c/r,h=n+(s-n)*l;a.push({x:i+e*Math.cos(h),z:t-e*Math.sin(h),signal:c<r?o:"off"})}return a}class Jv{constructor(t){Mt(this,"root",new jt);Mt(this,"aiCars",[]);Mt(this,"pedestrians",[]);t.add(this.root),this.buildAiCars(),this.buildPedestrians()}buildAiCars(){const t=[2450411,16096779,1013358],e=[{x:-58,z:-47.75},{x:-32,z:-47.75},{x:-25,z:-47.75,signal:"right"},{x:-18,z:-44.25,signal:"right"},{x:-10,z:-44.25},{x:-2,z:-44.25,signal:"left"},{x:6,z:-47.75,signal:"left"},{x:32,z:-47.75},{x:56,z:-47.75},...Tn(62,-32,15.75,Math.PI/2,0,8),{x:77.75,z:-16},{x:77.75,z:16},...Tn(62,32,15.75,0,-Math.PI/2,8),{x:40,z:47.75},{x:22,z:47.75,signal:"right"},{x:15,z:44.25,signal:"right"},{x:4,z:44.25,signal:"left"},{x:-4,z:47.75},{x:-35,z:47.75},...Tn(-62,32,15.75,-Math.PI/2,-Math.PI,8),{x:-77.75,z:16},{x:-77.75,z:-16},...Tn(-62,-32,15.75,Math.PI,Math.PI/2,8)],n=[{x:-45,z:44.25},{x:0,z:44.25},{x:45,z:44.25},...Tn(62,32,12.25,-Math.PI/2,0,8),{x:74.25,z:16},{x:74.25,z:-16},...Tn(62,-32,12.25,0,Math.PI/2,8),{x:45,z:-44.25},{x:0,z:-44.25},{x:-45,z:-44.25},...Tn(-62,-32,12.25,Math.PI/2,Math.PI,8),{x:-74.25,z:-16},{x:-74.25,z:16},...Tn(-62,32,12.25,-Math.PI,-Math.PI/2,8)],s=[{x:-1.75,z:36},{x:-1.75,z:22},{x:-1.75,z:10.5},{x:-1.75,z:0},{x:-1.75,z:-24,signal:"left"},{x:-1.75,z:-36.5,signal:"left"},{x:-1.75,z:-41.5,signal:"left"},{x:-3.2,z:-43.5,signal:"left"},{x:-6,z:-44.25},{x:-32,z:-44.25},{x:-56,z:-44.25},...Tn(-62,-32,12.25,Math.PI/2,Math.PI,8),{x:-74.25,z:-16},{x:-74.25,z:16},...Tn(-62,32,12.25,-Math.PI,-Math.PI/2,8),{x:-45,z:44.25},{x:-18,z:44.25,signal:"left"},{x:-6,z:44.25,signal:"left"},{x:-2.6,z:43,signal:"left"},{x:-1.75,z:40}],r=[e,n,s];for(let o=0;o<r.length;o++){const a=r[o],c=a[0],l=a[1],{group:h,wheels:u,brakeLamps:d,signalLeftLamps:g,signalRightLamps:_}=this.createTrainingSedanMesh(t[o%t.length],o+2),x=Math.atan2(-(l.x-c.x),-(l.z-c.z));h.position.set(c.x,0,c.z),h.rotation.y=x,this.root.add(h),this.aiCars.push({group:h,wheels:u,brakeLamps:d,signalLeftLamps:g,signalRightLamps:_,waypoints:a,wpIndex:1,x:c.x,z:c.z,heading:x,speedMs:5,maxSpeedMs:6+o%2*.6,blinker:"off",blinkerTimer:0,stopHoldTimer:0,lastStoppedZoneId:""})}}createTrainingSedanMesh(t,e){const n=new jt,s=new Tt({color:t,roughness:.32,metalness:.2}),r=new Tt({color:1976635,roughness:.15,metalness:.5}),o=new Tt({color:1120295,roughness:.8}),a=new Tt({color:16707722,emissive:16707722,emissiveIntensity:.9}),c=new Tt({color:14427686,emissive:14427686,emissiveIntensity:.25}),l=new Tt({color:16096779,emissive:16096779,emissiveIntensity:.05}),h=new Tt({color:16096779,emissive:16096779,emissiveIntensity:.05}),u=new ut(new Wt(1.66,.56,4.25),s);u.position.y=.54,u.castShadow=!0,u.receiveShadow=!0,n.add(u);const d=new ut(new Wt(1.42,.48,2.05),s);d.position.set(0,1.02,.15),d.castShadow=!0,n.add(d);const g=new ut(new Wt(1.45,.38,1.88),r);g.position.set(0,1.03,.15),n.add(g);const _=document.createElement("canvas");_.width=256,_.height=128;const x=_.getContext("2d");x.fillStyle="#fef08a",x.fillRect(0,0,256,128),x.strokeStyle="#0f172a",x.lineWidth=8,x.strokeRect(4,4,248,120),x.fillStyle="#0f172a",x.font='bold 46px "Noto Sans JP", sans-serif',x.textAlign="center",x.textBaseline="middle",x.fillText(`教習車 ${e}`,128,66);const m=new gn(_);m.colorSpace=Me;const p=new ut(new Wt(.68,.25,.18),new Oe({map:m}));p.position.set(0,1.38,.05),n.add(p);for(const v of[-.54,.54]){const y=new ut(new Wt(.26,.12,.06),a);y.position.set(v,.58,-2.13),n.add(y);const b=new ut(new Wt(.28,.12,.06),c);b.position.set(v,.6,2.13),n.add(b)}for(const v of[-2.13,2.13]){const y=new ut(new Wt(.12,.11,.07),l);y.position.set(-.75,.58,v),n.add(y);const b=new ut(new Wt(.12,.11,.07),h);b.position.set(.75,.58,v),n.add(b)}const S=[],M=new oe(.3,.3,.2,16);M.rotateZ(Math.PI/2);for(const[v,y]of[[-.78,-1.3],[.78,-1.3],[-.78,1.3],[.78,1.3]]){const b=new ut(M,o);b.position.set(v,.3,y),n.add(b),S.push(b)}return{group:n,wheels:S,brakeLamps:[c],signalLeftLamps:[l],signalRightLamps:[h]}}buildPedestrians(){const t=[{axis:"NS",startX:-4.5,startZ:-6.2,endX:4.5,endZ:-6.2,shirtColor:15680580,initialProgress:.2},{axis:"NS",startX:4.5,startZ:6.2,endX:-4.5,endZ:6.2,shirtColor:3900150,initialProgress:.65},{axis:"EW",startX:-6.2,startZ:-4.5,endX:-6.2,endZ:4.5,shirtColor:1096065,initialProgress:.35},{axis:"EW",startX:6.2,startZ:4.5,endX:6.2,endZ:-4.5,shirtColor:16096779,initialProgress:.8},{axis:"EW",startX:12,startZ:19.8,endX:12,endZ:28.2,shirtColor:11032055,initialProgress:.15},{axis:"EW",startX:-22,startZ:41.8,endX:-22,endZ:50.2,shirtColor:15485081,initialProgress:.5}];for(const e of t){const{group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a}=this.createPedestrianMesh(e.shirtColor),c=Se.lerp(e.startX,e.endX,e.initialProgress),l=Se.lerp(e.startZ,e.endZ,e.initialProgress);n.position.set(c,0,l),this.root.add(n),this.pedestrians.push({group:n,leftLeg:s,rightLeg:r,leftArm:o,rightArm:a,axis:e.axis,startX:e.startX,startZ:e.startZ,endX:e.endX,endZ:e.endZ,progress:e.initialProgress,direction:1,waitTimer:0,walkPhase:e.initialProgress*10,x:c,z:l,isOnCrosswalk:!0})}}createPedestrianMesh(t){const e=new jt,n=new Tt({color:15843965,roughness:.6}),s=new Tt({color:t,roughness:.65}),r=new Tt({color:1976635,roughness:.8}),o=new Tt({color:2042167,roughness:.8}),a=new ut(new xn(.13,12,10),n);a.position.y=1.56,a.castShadow=!0,e.add(a);const c=new ut(new xn(.135,12,8,0,Math.PI*2,0,Math.PI*.55),o);c.position.y=1.58,e.add(c);const l=new ut(new Wt(.32,.52,.18),s);l.position.y=1.15,l.castShadow=!0,e.add(l);const h=(x,m,p,S,M,v)=>{const y=new jt;y.position.set(M,v,0);const b=new ut(new Wt(x,m,p),S);return b.position.y=-m*.5,b.castShadow=!0,y.add(b),e.add(y),y},u=h(.12,.78,.13,r,-.09,.86),d=h(.12,.78,.13,r,.09,.86),g=h(.09,.54,.1,s,-.22,1.38),_=h(.09,.54,.1,s,.22,1.38);return{group:e,leftLeg:u,rightLeg:d,leftArm:g,rightArm:_}}update(t,e,n){let s=!1,r,o,a=!1;const c=n.getRailroadState();for(const l of this.pedestrians){if(l.waitTimer>0){l.waitTimer-=t,l.isOnCrosswalk=!1,l.leftLeg.rotation.x=0,l.rightLeg.rotation.x=0,l.leftArm.rotation.x=0,l.rightArm.rotation.x=0;continue}const h=l.progress<=.06||l.progress>=.94,u=Math.hypot(l.startX,l.startZ)<10;if(h&&u){const S=n.getLightForAxis(l.axis);if(S==="green"||S==="yellow"){l.isOnCrosswalk=!1;continue}}const d=Math.hypot(l.endX-l.startX,l.endZ-l.startZ)||8,g=1.35;l.progress+=l.direction*(g*t)/d,l.walkPhase+=t*7.5,l.progress>=1?(l.progress=1,l.direction=-1,l.waitTimer=2.2):l.progress<=0&&(l.progress=0,l.direction=1,l.waitTimer=2.2),l.x=Se.lerp(l.startX,l.endX,l.progress),l.z=Se.lerp(l.startZ,l.endZ,l.progress),l.isOnCrosswalk=l.progress>.07&&l.progress<.93;const _=(l.endX-l.startX)*l.direction,x=(l.endZ-l.startZ)*l.direction;l.group.position.set(l.x,0,l.z),l.group.rotation.y=Math.atan2(-_,-x);const m=Math.sin(l.walkPhase)*.55;l.leftLeg.rotation.x=m,l.rightLeg.rotation.x=-m,l.leftArm.rotation.x=-m*.7,l.rightArm.rotation.x=m*.7;const p=ls(e.x,e.z,l.x,l.z);if(l.isOnCrosswalk&&p<3.4&&Math.abs(e.speedMs)>.45){const S=l.x-e.x,M=l.z-e.z,v=e.speedMs>=0?1:-1,y=-Math.sin(e.heading)*v,b=-Math.cos(e.heading)*v;((S*y+M*b)/Math.max(.1,p)>.15||p<1.9)&&(s=!0,r="横断歩道上の歩行者の直前を通過しようとしました（道路交通法第38条：歩行者優先義務違反）",o="Failed to stop and yield to a pedestrian crossing the zebra crosswalk (Road Traffic Act Art. 38 violation)")}}for(let l=0;l<this.aiCars.length;l++){const h=this.aiCars[l];let u=h.waypoints[h.wpIndex],d=u.x-h.x,g=u.z-h.z,_=Math.hypot(d,g);_<2.1&&(h.wpIndex=(h.wpIndex+1)%h.waypoints.length,u=h.waypoints[h.wpIndex],d=u.x-h.x,g=u.z-h.z,_=Math.hypot(d,g));const x=h.waypoints[(h.wpIndex-1+h.waypoints.length)%h.waypoints.length];h.blinker=u.signal??x.signal??"off",h.blinkerTimer+=t;const m=h.blinker!=="off"&&Math.floor(h.blinkerTimer*2.6)%2===0;let S=Math.atan2(-d,-g)-h.heading;for(;S>Math.PI;)S-=Math.PI*2;for(;S<-Math.PI;)S+=Math.PI*2;h.heading+=Math.sign(S)*Math.min(Math.abs(S),4.6*t);const M=-Math.sin(h.heading),v=-Math.cos(h.heading);let y=!1;if(h.stopHoldTimer>0)h.stopHoldTimer-=t,y=!0;else for(const E of Ol){const I=h.x-E.x,k=h.z-E.z,z=I*E.dirX+k*E.dirZ,Z=-E.dirZ,W=E.dirX,J=Math.abs(I*Z+k*W),et=M*E.dirX+v*E.dirZ;if(J<=E.halfWidth+.8&&et>.7&&z>=-6.5&&z<=-.2)if(E.kind==="trafficLight"&&E.axis){const X=n.getLightForAxis(E.axis);(X==="red"||X==="yellow")&&(y=!0)}else E.kind==="stopSign"?h.lastStoppedZoneId!==E.id&&(y=!0,h.speedMs<.15&&(h.stopHoldTimer=1.8,h.lastStoppedZoneId=E.id)):E.kind==="railroad"&&(c.isWarningActive?y=!0:h.lastStoppedZoneId!==E.id&&(y=!0,h.speedMs<.15&&(h.stopHoldTimer=1.8,h.lastStoppedZoneId=E.id)));else h.lastStoppedZoneId===E.id&&Math.hypot(I,k)>10&&(h.lastStoppedZoneId="")}const b=ls(h.x,h.z,e.x,e.z);b<10&&((e.x-h.x)*M+(e.z-h.z)*v)/Math.max(.1,b)>.45&&(y=!0);for(let E=0;E<this.aiCars.length;E++){if(E===l)continue;const I=this.aiCars[E],k=ls(h.x,h.z,I.x,I.z);k<8.5&&((I.x-h.x)*M+(I.z-h.z)*v)/Math.max(.1,k)>.5&&(y=!0)}for(const E of this.pedestrians){if(!E.isOnCrosswalk&&E.progress>.08&&E.progress<.92)continue;const I=ls(h.x,h.z,E.x,E.z);I<7.5&&((E.x-h.x)*M+(E.z-h.z)*v)/Math.max(.1,I)>.35&&(y=!0)}b<2.35&&Math.abs(e.speedMs)>.35&&(a=!0);const T=Math.abs(S)>.14,C=y?0:T?3.8:h.maxSpeedMs,w=y?8.5:3.2;h.speedMs<C?h.speedMs=Math.min(C,h.speedMs+w*t):h.speedMs=Math.max(C,h.speedMs-w*t),h.x+=M*h.speedMs*t,h.z+=v*h.speedMs*t,h.group.position.set(h.x,0,h.z),h.group.rotation.y=h.heading;for(const E of h.wheels)E.rotation.x-=h.speedMs*t/.3;for(const E of h.brakeLamps)E.emissiveIntensity=y||h.speedMs<.3?2.4:.25;for(const E of h.signalLeftLamps)E.emissiveIntensity=m&&(h.blinker==="left"||h.blinker==="hazard")?2.6:.05;for(const E of h.signalRightLamps)E.emissiveIntensity=m&&(h.blinker==="right"||h.blinker==="hazard")?2.6:.05}return{pedestrianDanger:s,pedestrianLabelJa:r,pedestrianLabelEn:o,trafficCollision:a}}}class Zv{constructor(t){Mt(this,"root",new jt);Mt(this,"kyoshujoGroup",new jt);Mt(this,"sunLight");Mt(this,"sunOffset",new D(45,68,35));Mt(this,"railGatePivots",[]);Mt(this,"railLeftLampMats",[]);Mt(this,"railRightLampMats",[]);Mt(this,"trafficLamps",[]);Mt(this,"waypointBeacon");Mt(this,"skyBrandSprites",[]);t.background=new ee(10473727),t.fog=new Rl(10473727,95,240),this.buildCloudsAndSkyBrand(t);const e=new vp(15660799,6057548,.85);t.add(e),this.sunLight=new yp(16775920,1.85),this.sunLight.position.copy(this.sunOffset),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(2048,2048);const n=38;this.sunLight.shadow.camera.left=-n,this.sunLight.shadow.camera.right=n,this.sunLight.shadow.camera.top=n,this.sunLight.shadow.camera.bottom=-n,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=170,this.sunLight.shadow.bias=-5e-4,t.add(this.sunLight),t.add(this.sunLight.target),this.root.add(this.kyoshujoGroup),t.add(this.root),this.buildGroundAndRoads(),this.buildSCurveMesh(),this.buildHillRampMesh(),this.buildRoadMarkings(),this.buildCurbsAndPoles(),this.buildRailroadCrossing(),this.buildTrafficLights(),this.buildRoadSigns(),this.buildObstaclesAndBuildings(),this.buildTreesAndFence(),this.waypointBeacon=this.createWaypointBeacon(),this.waypointBeacon.visible=!1,this.kyoshujoGroup.add(this.waypointBeacon)}setKyoshujoVisible(t){this.kyoshujoGroup.visible=t}updateShadowFocus(t,e){const n=.037109375,s=Math.round(t/n)*n,r=Math.round(e/n)*n;this.sunLight.target.position.set(s,0,r),this.sunLight.position.set(s+this.sunOffset.x,this.sunOffset.y,r+this.sunOffset.z),this.sunLight.target.updateMatrixWorld()}updateDynamic(t,e,n){const s=t.getLightForAxis("NS"),r=t.getLightForAxis("EW");for(const a of this.trafficLamps){const c=a.axis==="NS"?s:r;a.greenMat.emissive.setHex(c==="green"?1108120:202768),a.greenMat.emissiveIntensity=c==="green"?2.2:.2,a.yellowMat.emissive.setHex(c==="yellow"?16758531:1708544),a.yellowMat.emissiveIntensity=c==="yellow"?2.2:.2,a.redMat.emissive.setHex(c==="red"?16722474:1836036),a.redMat.emissiveIntensity=c==="red"?2.2:.2}const o=t.getRailroadState();for(let a=0;a<this.railGatePivots.length;a++)this.railGatePivots[a].rotation.z=a===0?-o.barrierAngle:o.barrierAngle;for(const a of this.railLeftLampMats)a.emissive.setHex(o.flashLeftOn?16718362:2229252),a.emissiveIntensity=o.flashLeftOn?2.8:.2;for(const a of this.railRightLampMats)a.emissive.setHex(o.flashRightOn?16718362:2229252),a.emissiveIntensity=o.flashRightOn?2.8:.2;if(e&&this.kyoshujoGroup.visible){this.waypointBeacon.visible=!0;const a=Xn(e.x,e.z).y;this.waypointBeacon.position.set(e.x,a+.05,e.z),this.waypointBeacon.rotation.y=n*1.4;const c=1+Math.sin(n*4)*.08;this.waypointBeacon.scale.set(c,1,c)}else this.waypointBeacon.visible=!1;for(const a of this.skyBrandSprites){const c=a.userData.angle+n*.004,l=a.userData.height+Math.sin(n*.15+c*3)*.8;a.position.set(Math.cos(c)*160,l,Math.sin(c)*160)}}buildCloudsAndSkyBrand(t){const e=new Tt({color:16777215,roughness:1,metalness:0,transparent:!0,opacity:.9}),n=(S,M,v,y)=>{const b=new jt,T=[[0,0,0,5],[-4,-1,0,3.5],[4,-1,0,3.5],[-2,1.5,0,2.8],[2.5,1.5,0,2.8],[-6,-2,0,2],[6,-2,0,2]];for(const[C,w,E,I]of T){const k=new ut(new xn(I,7,5),e);k.position.set(C,w,E),b.add(k)}b.position.set(S,M,v),b.scale.setScalar(y),t.add(b)};n(-80,48,-60,1.2),n(60,42,-90,1),n(-30,52,-110,.85),n(110,46,-70,1.15),n(10,55,-130,.95),n(-120,44,-80,1.3),n(70,50,-150,1.1);const s=1024,r=256,o=document.createElement("canvas");o.width=s,o.height=r;const a=o.getContext("2d");a.font='900 150px "Arial Rounded MT Bold", "Nunito", Arial, sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText("GaimenGo",s/2,r/2);const c=s/2-a.measureText("GaimenGo").width/2+a.measureText("Gaimen").width,l=a.getImageData(0,0,s,r).data,h=document.createElement("canvas");h.width=s,h.height=r;const u=h.getContext("2d");let d=27166;const g=()=>(d=d*1664525+1013904223>>>0)/4294967296,_=9;for(let S=0;S<r;S+=_)for(let M=0;M<s;M+=_){const v=Math.min(s-1,M+Math.floor(g()*_)),y=Math.min(r-1,S+Math.floor(g()*_));if(l[(y*s+v)*4+3]<128)continue;const b=11+g()*12,T=u.createRadialGradient(v,y,0,v,y,b);T.addColorStop(0,"rgba(255,255,255,0.95)"),T.addColorStop(.6,"rgba(255,255,255,0.55)"),T.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=T,u.fillRect(v-b,y-b,b*2,b*2)}u.globalCompositeOperation="source-atop";const x=u.createLinearGradient(0,r*.3,0,r*.8);x.addColorStop(0,"rgba(190,210,230,0)"),x.addColorStop(1,"rgba(170,195,220,0.45)"),u.fillStyle=x,u.fillRect(0,0,s,r),u.fillStyle="rgba(52,211,153,0.22)",u.fillRect(c,0,s-c,r),u.globalCompositeOperation="source-over";const m=new gn(h);m.colorSpace=Me;const p=new Cl({map:m,transparent:!0,opacity:.82,depthWrite:!1,fog:!1});this.skyBrandSprites=[0,1,2].map(S=>{const M=new eu(p);return M.scale.set(64,16,1),M.layers.set(1),M.userData.angle=-Math.PI/2+S*(Math.PI*2/3),M.userData.height=40+S*4,M.renderOrder=-1,t.add(M),M})}createGrassTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#5f8449",e.fillRect(0,0,256,256);for(let s=0;s<4e3;s++)e.fillStyle=s%2===0?"rgba(72,108,52,0.35)":"rgba(122,162,88,0.28)",e.fillRect(Math.random()*256,Math.random()*256,2,2);const n=new gn(t);return n.wrapS=n.wrapT=Zs,n.repeat.set(36,24),n.colorSpace=Me,n}createAsphaltTexture(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d");e.fillStyle="#383e45",e.fillRect(0,0,256,256);for(let s=0;s<5500;s++){const r=45+Math.floor(Math.random()*30);e.fillStyle=`rgb(${r},${r+2},${r+6})`,e.fillRect(Math.random()*256,Math.random()*256,2,2)}const n=new gn(t);return n.wrapS=n.wrapT=Zs,n.repeat.set(22,22),n.colorSpace=Me,n}buildGroundAndRoads(){const t=new Tt({map:this.createGrassTexture(),roughness:.95,metalness:0}),e=new ut(new ze(ci*2+40,Li*2+40),t);e.rotation.x=-Math.PI/2,e.receiveShadow=!0,this.kyoshujoGroup.add(e);const n=new Tt({map:this.createAsphaltTexture(),roughness:.86,metalness:.05}),s=(a,c,l,h,u=.01)=>{const d=new ut(new ze(l,h),n);d.rotation.x=-Math.PI/2,d.position.set(a,u,c),d.receiveShadow=!0,this.kyoshujoGroup.add(d)};s(0,-46,124,ai),s(0,46,124,ai),s(-76,0,ai,64),s(76,0,ai,64);const r=[[-62,-32,Math.PI/2],[62,-32,0],[62,32,-Math.PI/2],[-62,32,Math.PI]];for(const[a,c,l]of r){const h=new Ln(14-uh,14+uh,24,1,l,Math.PI/2),u=new ut(h,n);u.rotation.x=-Math.PI/2,u.position.set(a,.01,c),u.receiveShadow=!0,this.kyoshujoGroup.add(u)}s(0,0,ai,92,.012),s(0,0,152,ai,.012);const o=hv*2;s(-48,11.75,o,16.5,.013),s(-41,18,18,o,.013),s(-34,30.25,o,24.5,.013),s(10.75,an,14.5,Ri*2,.013),s(65.25,an,14.5,Ri*2,.013),s(38,24,72.5,ai,.012),s(26,30.6,3.7,6.2,.013),s(48.6,28.85,7.2,2.7,.013),s(0,51,32,3.2,.008)}buildSCurveMesh(){const e=cv,n=[],s=[],r=[];for(let l=0;l<e.length;l++){const h=e[Math.max(0,l-1)],u=e[Math.min(e.length-1,l+1)],d=u.x-h.x,g=u.z-h.z,_=Math.hypot(d,g)||1,x=g/_,m=-d/_;if(n.push(e[l].x+x*1.8,.014,e[l].z+m*1.8),n.push(e[l].x-x*1.8,.014,e[l].z-m*1.8),s.push(0,l*.25,1,l*.25),l<e.length-1){const p=l*2;r.push(p,p+1,p+2,p+1,p+3,p+2)}}const o=new _e;o.setAttribute("position",new Jt(n,3)),o.setAttribute("uv",new Jt(s,2)),o.setIndex(r),o.computeVertexNormals();const a=new Tt({color:3883594,roughness:.85,side:Re}),c=new ut(o,a);c.receiveShadow=!0,this.kyoshujoGroup.add(c)}buildHillRampMesh(){const e=qs,n=nl,s=an-Ri,r=an+Ri,o=[],a=[];for(let M=0;M<=64;M++){const v=e+(n-e)*M/64,b=Xn(v,an).y+.015;if(o.push(v,0,s),o.push(v,b,s),o.push(v,b,r),o.push(v,0,r),M<64){const T=M*4,C=(M+1)*4;a.push(T+1,T+2,C+1,T+2,C+2,C+1),a.push(T+0,T+1,C+0,T+1,C+1,C+0),a.push(T+2,T+3,C+2,T+3,C+3,C+2)}}const c=new _e;c.setAttribute("position",new Jt(o,3)),c.setIndex(a),c.computeVertexNormals();const l=[],h=[],u=[],d=[];for(let M=0;M<=64;M++){const v=e+(n-e)*M/64,y=Xn(v,an).y+.018;if(l.push(v,y,s,v,y,r),u.push(v,0,s,v,y,s,v,0,r,v,y,r),M<64){const b=M*2;h.push(b,b+1,b+2,b+1,b+3,b+2);const T=M*4;d.push(T,T+1,T+4,T+1,T+5,T+4),d.push(T+2,T+6,T+3,T+3,T+6,T+7)}}const g=new _e;g.setAttribute("position",new Jt(l,3)),g.setIndex(h),g.computeVertexNormals();const _=new ut(g,new Tt({color:3883594,roughness:.86,side:Re}));_.receiveShadow=!0,this.kyoshujoGroup.add(_);const x=new _e;x.setAttribute("position",new Jt(u,3)),x.setIndex(d),x.computeVertexNormals();const m=new ut(x,new Tt({color:12239562,roughness:.9,side:Re}));m.receiveShadow=!0,m.castShadow=!0,this.kyoshujoGroup.add(m);const p=Xn(27,an).y,S=new ut(new ze(.45,Ri*1.9),new Oe({color:16777215}));S.rotation.x=-Math.PI/2,S.rotation.y=-Math.atan(Xn(27,an).slopeX),S.position.set(27,p+.03,an),this.kyoshujoGroup.add(S)}createStencilPlane(t,e,n,s,r,o,a=0){const c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.clearRect(0,0,256,256),l.fillStyle=e,l.textAlign="center",l.textBaseline="middle",l.font='bold 120px "Noto Sans JP", sans-serif',l.fillText(t,128,128);const h=new gn(c);h.colorSpace=Me;const u=new ut(new ze(n,s),new Oe({map:h,transparent:!0,depthWrite:!1}));return u.rotation.x=-Math.PI/2,u.rotation.z=a,u.position.set(r,.025,o),u}buildRoadMarkings(){const t=new Oe({color:16054266}),e=new Oe({color:15764480}),n=(o,a,c,l,h=t)=>{const u=new ut(new ze(c,l),h);u.rotation.x=-Math.PI/2,u.position.set(o,.02,a),this.kyoshujoGroup.add(u)};for(let o=-58;o<=58;o+=6)Math.abs(o)<12||(n(o,-46,2.8,.14),n(o,46,2.8,.14));for(let o=-28;o<=28;o+=6)Math.abs(o)<10||(n(-76,o,.14,2.8),n(76,o,.14,2.8));for(let o=-42;o<=42;o+=6)Math.abs(o)<18||n(0,o,.14,2.8);n(0,13.5,.16,10,e),n(0,-13.5,.16,10,e);for(let o=-70;o<=70;o+=6)Math.abs(o)<18||o>26&&o<50||n(o,0,2.8,.14);n(13.5,0,10,.16,e),n(-13.5,0,10,.16,e),n(38,0,18,.16,e);for(let o=6;o<=68;o+=6)n(o,24,2.8,.14);for(const o of Ol){const a=Math.abs(o.dirX)>.5;if(n(o.x,o.z,a?.45:o.halfWidth*1.9,a?o.halfWidth*1.9:.45),o.kind==="stopSign"){const l=Math.atan2(-o.dirX,-o.dirZ);this.kyoshujoGroup.add(this.createStencilPlane("止まれ","#ffffff",2.2,2.2,o.x-o.dirX*2.6,o.z-o.dirZ*2.6,l))}}const s=(o,a,c)=>{for(let l=-3;l<=3;l++)c?n(o,a+l*.9,2.8,.45):n(o+l*.9,a,.45,2.8)};s(0,-6.2,!1),s(0,6.2,!1),s(-6.2,0,!0),s(6.2,0,!0),s(12,24,!0),s(-22,46,!0);for(const[o,a]of[[-10,44.25],[-34,47.75],[24,22.25]]){const c=new ut(new Ln(.75,.96,4),t);c.rotation.x=-Math.PI/2,c.position.set(o,.022,a),this.kyoshujoGroup.add(c)}const r=new ut(new Ln(.9,1.15,4),t);r.rotation.x=-Math.PI/2,r.position.set(0,.022,0),this.kyoshujoGroup.add(r),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,-40,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("40","#ffffff",2.6,2.6,20,-47.75,-Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("1","#f0a500",1.8,1.8,12,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("2","#f0a500",1.8,1.8,0,48.1,Math.PI/2)),this.kyoshujoGroup.add(this.createStencilPlane("3","#f0a500",1.8,1.8,-12,48.1,Math.PI/2))}buildCurbsAndPoles(){const t=new Tt({color:13357786,roughness:.8}),e=new Tt({color:15857145,roughness:.7});for(const r of xu){const o=r.points,a=r.id.startsWith("hill-");for(let c=0;c<o.length-1;c++){const l=o[c],h=o[c+1],u=h.x-l.x,d=h.z-l.z,g=Math.hypot(u,d);if(!(g<.01))if(a)for(let x=0;x<24;x++){const m=x/24,p=(x+1)/24,S=l.x+u*m,M=l.x+u*p,v=l.z+d*m,y=l.z+d*p,b=Xn(S,v).y,T=Xn(M,y).y,C=Math.hypot(M-S,T-b),w=new ut(new Wt(C+.04,r.height,.18),x%2===0?t:e);w.position.set((S+M)*.5,(b+T)*.5+r.height*.5,(v+y)*.5),w.rotation.z=Math.atan2(T-b,M-S),w.castShadow=!0,w.receiveShadow=!0,this.kyoshujoGroup.add(w)}else{const _=new ut(new Wt(.18,r.height,g+.14),c%2===0?t:e);_.position.set((l.x+h.x)*.5,r.height*.5,(l.z+h.z)*.5),_.rotation.y=Math.atan2(u,d),_.castShadow=!0,_.receiveShadow=!0,this.kyoshujoGroup.add(_)}}}const n=new Tt({color:14231078,roughness:.4}),s=new Tt({color:16317180,roughness:.4});for(const r of Mu){const o=new jt;o.position.set(r.x,0,r.z);const a=5,c=r.height/a;for(let l=0;l<a;l++){const h=new ut(new oe(r.radius*.65,r.radius*.65,c,10),l%2===0?n:s);h.position.y=c*(l+.5),h.castShadow=!0,o.add(h)}this.kyoshujoGroup.add(o)}}buildRailroadCrossing(){const e=new Tt({color:8160657,metalness:.75,roughness:.3}),n=new Tt({color:4930350,roughness:.9}),s=new Tt({color:16103424,roughness:.4}),r=new Tt({color:1711393,roughness:.6});for(const a of[-.7,.7]){const c=new ut(new Wt(.12,.06,30),e);c.position.set(38+a,.03,0),c.receiveShadow=!0,this.kyoshujoGroup.add(c)}for(let a=-14;a<=14;a+=.9){if(Math.abs(a)<3.6)continue;const c=new ut(new Wt(2.3,.05,.25),n);c.position.set(38,.025,a),this.kyoshujoGroup.add(c)}const o=[[38-3.6,-3.9],[38+3.6,3.9]];for(let a=0;a<o.length;a++){const[c,l]=o[a],h=new jt;h.position.set(c,0,l);const u=new ut(new oe(.08,.09,3.4,10),s);u.position.y=1.7,u.castShadow=!0,h.add(u);for(const b of[Math.PI/4,-Math.PI/4]){const T=new ut(new Wt(1.1,.16,.05),s);T.position.y=2.95,T.rotation.y=Math.PI/2,T.rotation.x=b,h.add(T)}const d=new Tt({color:6293512,emissive:2229252}),g=new Tt({color:6293512,emissive:2229252});this.railLeftLampMats.push(d),this.railRightLampMats.push(g);const _=new ut(new oe(.11,.11,.14,12),d);_.rotation.z=Math.PI/2,_.position.set(0,2.25,-.22),h.add(_);const x=new ut(new oe(.11,.11,.14,12),g);x.rotation.z=Math.PI/2,x.position.set(0,2.25,.22),h.add(x);const m=new ut(new Wt(.32,.85,.32),r);m.position.set(0,.65,a===0?.35:-.35),h.add(m),new jt().position.set(0,.95,a===0?.35:-.35);const S=new jt;S.rotation.y=a===0?-Math.PI/2:Math.PI/2;const M=new ut(new Wt(3.6,.08,.06),s);M.position.set(1.8,0,0),M.castShadow=!0;const v=new ut(new Wt(.08,3.8,.06),s);v.position.set(0,1.9,0),v.castShadow=!0;for(let b=0;b<6;b++)if(b%2===0){const T=new ut(new Wt(.09,.32,.07),r);T.position.set(0,.45+b*.6,0),v.add(T)}const y=new jt;y.position.set(0,.95,a===0?.35:-.35),y.rotation.y=Math.PI/2,y.add(v),h.add(y),this.railGatePivots.push(y),this.kyoshujoGroup.add(h)}}buildTrafficLights(){const t=new Tt({color:6583435,metalness:.6,roughness:.35}),e=new Tt({color:1976635,roughness:.6}),n=[{axis:"NS",x:4.5,z:-5,rotY:0},{axis:"NS",x:-4.5,z:5,rotY:Math.PI},{axis:"EW",x:5,z:4.5,rotY:-Math.PI/2},{axis:"EW",x:-5,z:-4.5,rotY:Math.PI/2}];for(const s of n){const r=new jt;r.position.set(s.x,0,s.z),r.rotation.y=s.rotY;const o=new ut(new oe(.11,.13,5.4,10),t);o.position.y=2.7,o.castShadow=!0,r.add(o);const a=new ut(new oe(.07,.09,4.2,8),t);a.rotation.z=Math.PI/2,a.position.set(-2,5.1,0),r.add(a);const c=new ut(new Wt(1.55,.52,.36),e);c.position.set(-2.5,5.1,0),r.add(c);const l=new Tt({color:413243,emissive:202768}),h=new Tt({color:7877903,emissive:1708544}),u=new Tt({color:8330525,emissive:1836036}),d=new oe(.15,.15,.06,14),g=(_,x)=>{const m=new ut(d,_);m.rotation.x=Math.PI/2,m.position.set(-2.5+x,5.1,.19),r.add(m)};g(l,-.46),g(h,0),g(u,.46),this.trafficLamps.push({axis:s.axis,greenMat:l,yellowMat:h,redMat:u}),this.kyoshujoGroup.add(r)}}createSignTexture(t,e){const n=document.createElement("canvas");n.width=256,n.height=256;const s=n.getContext("2d");if(s.clearRect(0,0,256,256),t==="tomare")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=14,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(32,34),s.lineTo(224,34),s.lineTo(128,214),s.closePath(),s.fillStyle="#d62828",s.fill(),s.fillStyle="#ffffff",s.textAlign="center",s.font='bold 44px "Noto Sans JP", sans-serif',s.fillText("止まれ",128,92),s.font="bold 24px sans-serif",s.fillText("STOP",128,134);else if(t==="joko")s.beginPath(),s.moveTo(16,24),s.lineTo(240,24),s.lineTo(128,232),s.closePath(),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.font='bold 42px "Noto Sans JP", sans-serif',s.fillText("徐 行",128,92),s.font="bold 20px sans-serif",s.fillText("SLOW",128,132);else if(t==="crosswalk"){s.beginPath(),s.moveTo(128,16),s.lineTo(234,92),s.lineTo(216,236),s.lineTo(40,236),s.lineTo(22,92),s.closePath(),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.fillStyle="#ffffff",s.beginPath(),s.arc(128,86,16,0,Math.PI*2),s.fill(),s.fillRect(116,108,24,48);for(let o=-2;o<=2;o++)s.fillRect(118+o*24,186,14,32)}else t==="noparking"?(s.beginPath(),s.arc(128,128,110,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke(),s.beginPath(),s.moveTo(52,52),s.lineTo(204,204),s.lineWidth=24,s.strokeStyle="#d62828",s.stroke()):t==="direction"?(s.beginPath(),s.arc(128,128,112,0,Math.PI*2),s.fillStyle="#005bac",s.fill(),s.lineWidth=10,s.strokeStyle="#ffffff",s.stroke(),s.strokeStyle="#ffffff",s.fillStyle="#ffffff",s.lineWidth=18,s.lineCap="round",s.beginPath(),s.moveTo(128,200),s.lineTo(128,56),s.stroke(),s.beginPath(),s.moveTo(128,38),s.lineTo(100,74),s.lineTo(156,74),s.closePath(),s.fill(),s.beginPath(),s.moveTo(128,134),s.lineTo(64,134),s.stroke(),s.beginPath(),s.moveTo(46,134),s.lineTo(80,108),s.lineTo(80,160),s.closePath(),s.fill()):t==="40"?(s.beginPath(),s.arc(128,128,114,0,Math.PI*2),s.fillStyle="#ffffff",s.fill(),s.lineWidth=22,s.strokeStyle="#d62828",s.stroke(),s.fillStyle="#0f172a",s.textAlign="center",s.textBaseline="middle",s.font="bold 104px sans-serif",s.fillText("40",128,132)):t==="rail"?(s.save(),s.translate(128,128),s.rotate(Math.PI/4),s.fillStyle="#f5b800",s.fillRect(-84,-84,168,168),s.lineWidth=10,s.strokeStyle="#111827",s.strokeRect(-76,-76,152,152),s.restore(),s.fillStyle="#111827",s.textAlign="center",s.font='bold 34px "Noto Sans JP", sans-serif',s.fillText("踏切",128,138)):(s.fillStyle="#005bac",s.fillRect(12,56,232,144),s.lineWidth=6,s.strokeStyle="#ffffff",s.strokeRect(20,64,216,128),s.fillStyle="#ffffff",s.textAlign="center",s.textBaseline="middle",s.font='bold 38px "Noto Sans JP", sans-serif',s.fillText(e??"",128,128));const r=new gn(n);return r.colorSpace=Me,r}buildRoadSigns(){const t=new Tt({color:9741240,metalness:.6,roughness:.4}),e=(n,s,r,o,a,c=1,l=1)=>{const h=new jt;h.position.set(s,0,r),h.rotation.y=o;const u=new ut(new oe(.035,.035,2.6,8),t);u.position.y=1.3,u.castShadow=!0,h.add(u);const d=this.createSignTexture(n,a),g=new ut(new ze(c,l),new Oe({map:d,transparent:!0,side:Re}));g.position.set(0,2.35,.045),h.add(g),this.kyoshujoGroup.add(h)};e("tomare",-67.5,4.1,Math.PI/2),e("tomare",-4.1,-38.5,0),e("tomare",-24.7,-41.5,0),e("tomare",-36.5,41.5,Math.PI),e("40",-55,-50.2,-Math.PI/2),e("40",30,-50.2,-Math.PI/2),e("rail",26,-4.2,-Math.PI/2),e("rail",50,4.2,Math.PI/2),e("guide",-42.5,-4.5,0,"S字コース",1.7,1.05),e("guide",-51,4.5,Math.PI,"クランク",1.7,1.05),e("guide",16.5,-27.5,-Math.PI/2,"坂道発進",1.7,1.05),e("guide",22,28.5,-Math.PI/2,"方向変換",1.7,1.05),e("guide",43,28.5,-Math.PI/2,"縦列駐車",1.7,1.05),e("crosswalk",-21.5,41.8,Math.PI/2),e("crosswalk",12.5,19.8,-Math.PI/2),e("joko",-44.2,-3.5,0),e("joko",52,-27.5,-Math.PI/2),e("noparking",-10,-50.2,-Math.PI/2),e("direction",-4.2,8.5,0)}buildObstaclesAndBuildings(){const t=ro[0];if(t){const a=new jt;a.position.set(t.x,0,t.z);const c=new ut(new Wt(t.halfW*2,1.55,t.halfL*2),new Tt({color:14870768,roughness:.45}));c.position.y=.92,c.castShadow=!0,a.add(c);const l=new ut(new Wt(t.halfW*1.6,.52,t.halfL*1.92),new Tt({color:1976635,roughness:.2,metalness:.4}));l.position.y=1.35,a.add(l);const h=new Tt({color:16347926,roughness:.5});for(const u of[-2.8,2.8]){const d=new ut(new ds(.18,.55,10),h);d.position.set(u,.275,.2),d.castShadow=!0,a.add(d)}this.kyoshujoGroup.add(a)}const e=ro[1];if(e){const a=new jt;a.position.set(e.x,0,e.z);const c=new ut(new Wt(e.halfW*2,e.height,e.halfL*2),new Tt({color:15855076,roughness:.8}));c.position.y=e.height/2,c.castShadow=!0,c.receiveShadow=!0,a.add(c);const l=new ut(new Wt(e.halfW*2+.6,.5,e.halfL*2+.6),new Tt({color:3359061,roughness:.7}));l.position.y=e.height+.25,a.add(l);const h=new Tt({color:1981023,metalness:.5,roughness:.15});for(const x of[2.2,5]){const m=new ut(new Wt(e.halfW*1.8,1.3,.1),h);m.position.set(0,x,-e.halfL-.02),a.add(m)}const u=document.createElement("canvas");u.width=512,u.height=128;const d=u.getContext("2d");d.fillStyle="#005bac",d.fillRect(0,0,512,128),d.strokeStyle="#ffffff",d.lineWidth=8,d.strokeRect(8,8,496,112),d.fillStyle="#ffffff",d.textAlign="center",d.textBaseline="middle",d.font='bold 46px "Noto Sans JP", sans-serif',d.fillText("桜ヶ丘自動車教習所",256,66);const g=new gn(u);g.colorSpace=Me;const _=new ut(new Wt(14,2.4,.4),new Oe({map:g}));_.position.set(0,e.height+1.8,-e.halfL+1),a.add(_),this.kyoshujoGroup.add(a)}const n=new jt;n.position.set(-14,0,38);const s=new ut(new oe(1.1,1.4,6.5,8),new Tt({color:14870768,roughness:.7}));s.position.y=3.25,s.castShadow=!0,n.add(s);const r=new ut(new oe(2.3,1.9,2.2,8),new Tt({color:1981023,metalness:.6,roughness:.15}));r.position.y=7.4,r.castShadow=!0,n.add(r);const o=new ut(new ds(2.6,1,8),new Tt({color:3359061,roughness:.6}));o.position.y=9,n.add(o),this.kyoshujoGroup.add(n)}buildTreesAndFence(){const t=new Tt({color:6045747,roughness:.9}),e=new Tt({color:4157243,roughness:.85}),n=new Tt({color:16037570,roughness:.8}),s=[];for(let h=-84;h<=84;h+=14)s.push([h,-55.5,Math.abs(h)%28===0]),Math.abs(h)>22&&s.push([h,55.5,!1]);for(let h=-42;h<=42;h+=14)s.push([-85.5,h,h===0]),s.push([85.5,h,h===-14]);s.push([-16,-24,!0],[14,14,!1],[62,12,!0]);for(const[h,u,d]of s){const g=new jt;g.position.set(h,0,u);const _=new ut(new oe(.18,.25,2.2,7),t);_.position.y=1.1,_.castShadow=!0,g.add(_);const x=new ut(new Il(1.75,1),d?n:e);x.position.y=3.2,x.castShadow=!0,g.add(x),this.kyoshujoGroup.add(g)}const r=new Tt({color:14410474,roughness:.55}),o=new ut(new Wt(178,.9,.14),r);o.position.set(0,.45,-59);const a=new ut(new Wt(178,.9,.14),r);a.position.set(0,.45,59);const c=new ut(new Wt(.14,.9,118),r);c.position.set(-89,.45,0);const l=new ut(new Wt(.14,.9,118),r);l.position.set(89,.45,0),this.kyoshujoGroup.add(o,a,c,l)}createWaypointBeacon(){const t=new jt,e=new ut(new Ln(1.6,2.1,28),new Oe({color:958318,side:Re,transparent:!0,opacity:.75}));e.rotation.x=-Math.PI/2,t.add(e);const n=new ut(new ds(.55,1.3,4),new Tt({color:1096065,emissive:366185,emissiveIntensity:.7}));return n.rotation.x=Math.PI,n.position.y=2.8,t.add(n),t}}const jv=[{id:"tomare",titleJa:"一時停止 (止まれ)",titleEn:"Stop (Tomare / 止まれ)",descJa:"停止線の直前で車輪を完全に停止（0 km/h・約2秒）させ、左右の安全確認を行わなければなりません。徐行で通過すると一発検定中止（指定場所一時不停止）となります。",descEn:"Mandatory complete 0.0 km/h stop before the white stop line, followed by distinct Left & Right head checks. Rolling stops cause immediate exam failure.",draw:(i,t,e)=>{i.beginPath(),i.moveTo(12,16),i.lineTo(t-12,16),i.lineTo(t/2,e-14),i.closePath(),i.fillStyle="#d62828",i.fill(),i.lineWidth=6,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.textAlign="center",i.font='bold 22px "Noto Sans JP", sans-serif',i.fillText("止まれ",t/2,48),i.font="bold 13px sans-serif",i.fillText("STOP",t/2,68)}},{id:"joko",titleJa:"徐行 (Slow Down)",titleEn:"Slow Down (Jokō / 徐行)",descJa:"ブレーキ操作から1m以内（時速10km/h以下目安）で直ちに停止できる速度で進行します。見通しの悪い交差点、曲がり角、上り坂の頂上付近、勾配の急な下り坂では徐行義務があります。",descEn:"Drive at a speed where you can stop immediately (within 1 meter / ≤ 10 km/h). Mandatory at blind intersections, road corners, hill crests, and steep descents.",draw:(i,t,e)=>{i.beginPath(),i.moveTo(14,18),i.lineTo(t-14,18),i.lineTo(t/2,e-16),i.closePath(),i.fillStyle="#ffffff",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.font='bold 20px "Noto Sans JP", sans-serif',i.fillText("徐 行",t/2,48),i.font="bold 11px sans-serif",i.fillText("SLOW",t/2,66)}},{id:"speed40",titleJa:"最高速度 (40 km/h)",titleEn:"Maximum Speed Limit (40 km/h)",descJa:"指定された最高速度を超えて運転してはいけません。標識がない一般道路の法定最高速度は自動車60km/h、原付30km/hです。",descEn:"Do not exceed 40 km/h. Where no speed sign is posted on ordinary roads, the statutory limit is 60 km/h for cars/motorcycles and 30 km/h for mopeds.",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=11,i.strokeStyle="#d62828",i.stroke(),i.fillStyle="#0f172a",i.textAlign="center",i.textBaseline="middle",i.font="bold 42px sans-serif",i.fillText("40",t/2,e/2+2)}},{id:"crosswalk",titleJa:"横断歩道 (歩行者優先)",titleEn:"Pedestrian Crosswalk (横断歩道)",descJa:"前方に横断歩道があることを示します。手前30mと15mには路面ダイヤ（◇）標示があります。歩行者が渡っている・渡ろうとしている時は必ず停止線手前で一時停止します（違反は一発検定中止）。",descEn:"Indicates a pedestrian crosswalk ahead (preceded by ◇ road diamonds at 30m and 15m). You MUST stop whenever a pedestrian is crossing or waiting to cross.",draw:(i,t,e)=>{i.beginPath(),i.moveTo(t/2,10),i.lineTo(t-14,42),i.lineTo(t-20,e-12),i.lineTo(20,e-12),i.lineTo(14,42),i.closePath(),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.beginPath(),i.arc(t/2,38,7,0,Math.PI*2),i.fill(),i.fillRect(t/2-5,47,10,20);for(let n=-2;n<=2;n++)i.fillRect(t/2-3+n*11,74,6,14)}},{id:"railroad",titleJa:"踏切あり (警戒標識)",titleEn:"Railroad Crossing Ahead (踏切あり)",descJa:"前方に踏切があることを警告する黄色ダイヤ標識。踏切手前では必ず完全停止し、窓を開けて目と耳で左右の安全を確認し、踏切内では変速（ギアチェンジ）せずに通過します。",descEn:"Yellow warning diamond indicating a railway crossing ahead. Stop completely before the stop line, open window to listen, look Left & Right, and cross without shifting gears.",draw:(i,t,e)=>{i.save(),i.translate(t/2,e/2),i.rotate(Math.PI/4),i.fillStyle="#f5b800",i.fillRect(-32,-32,64,64),i.lineWidth=4,i.strokeStyle="#111827",i.strokeRect(-28,-28,56,56),i.restore(),i.fillStyle="#111827",i.textAlign="center",i.textBaseline="middle",i.font='bold 17px "Noto Sans JP", sans-serif',i.fillText("踏切",t/2,e/2+2)}},{id:"noEntry",titleJa:"車両進入禁止 (一方通行出口)",titleEn:"No Entry for Vehicles (車両進入禁止)",descJa:"一方通行の出口などに設置され、この標識の方向からの車両の進入を全面禁止します。",descEn:"Prohibits vehicles from entering from this direction (commonly placed at the exit of a one-way street).",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#d62828",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.fillStyle="#ffffff",i.fillRect(t/2-28,e/2-8,56,16)}},{id:"noParking",titleJa:"駐車禁止 ／ 駐停車禁止",titleEn:"No Parking (駐車禁止) vs No Stopping (駐停車禁止)",descJa:"斜線1本は「駐車禁止」（5分以内の荷物の積み下ろしや人の乗降などの停車は可）。バツ印（×）2本は「駐停車禁止」（駐車も停車も両方禁止）。",descEn:"Single red slash = No Parking (brief stopping for passenger pick-up or <5 min cargo loading is allowed). Double X slash = No Parking AND No Stopping.",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=10,i.strokeStyle="#d62828",i.stroke(),i.beginPath(),i.moveTo(22,22),i.lineTo(t-22,e-22),i.stroke()}},{id:"direction",titleJa:"指定方向外進行禁止",titleEn:"Mandatory Direction (指定方向外進行禁止)",descJa:"青丸に白矢印の規制標識。矢印の方向（この例では直進と左折）以外の進行（右折）を禁止します。",descEn:"Blue circular regulatory sign: Vehicles may ONLY proceed in the directions shown by the white arrows (here: Straight or Left only; Right turn prohibited).",draw:(i,t,e)=>{i.beginPath(),i.arc(t/2,e/2,42,0,Math.PI*2),i.fillStyle="#005bac",i.fill(),i.lineWidth=4,i.strokeStyle="#ffffff",i.stroke(),i.strokeStyle="#ffffff",i.fillStyle="#ffffff",i.lineWidth=7,i.beginPath(),i.moveTo(t/2,76),i.lineTo(t/2,26),i.stroke(),i.beginPath(),i.moveTo(t/2,18),i.lineTo(t/2-10,32),i.lineTo(t/2+10,32),i.closePath(),i.fill(),i.beginPath(),i.moveTo(t/2,52),i.lineTo(26,52),i.stroke(),i.beginPath(),i.moveTo(18,52),i.lineTo(32,42),i.lineTo(32,62),i.closePath(),i.fill()}}];function Pu(i,t,e){const n=e==="ja";if(t==="predrive"){i.innerHTML=`
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
    `;const s=i.querySelector("#rbSignsGrid");for(const r of jv){const o=document.createElement("div");o.className="rb-sign-card";const a=document.createElement("canvas");a.width=104,a.height=104,a.className="rb-sign-canvas",r.draw(a.getContext("2d"),104,104);const c=document.createElement("div");c.innerHTML=`
        <h4>${n?r.titleJa:r.titleEn}</h4>
        <small style="color:#94a3b8;display:block;margin-bottom:4px;">${n?r.titleEn:r.titleJa}</small>
        <p>${n?r.descJa:r.descEn}</p>
      `,o.append(a,c),s.append(o)}return}i.innerHTML=`
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
  `}const Hl=document.getElementById("simCanvas"),cn=new ov({canvas:Hl,antialias:!0,powerPreference:"high-performance"});cn.setPixelRatio(Math.min(2,window.devicePixelRatio||1));cn.setSize(window.innerWidth,window.innerHeight);cn.shadowMap.enabled=!0;cn.shadowMap.type=Ph;cn.outputColorSpace=Me;const Dn=new Df,Fi=new Zv(Dn),Kv=new Jv(Fi.kyoshujoGroup),tn=new Yv(Dn),dn=new qv(Dn),rs=new sl,Ye=new _v,se=new av,Rt=xv(),Qv=window.matchMedia("(hover: none) and (pointer: coarse)").matches;Qv&&(Rt.showTouchControls=!0);const Ce=new $v(Hl,window.innerWidth/window.innerHeight);Ce.setMirrorQuality(Rt.mirrorQuality,null);let Es="startBay",Qe="kyoshujo",En="kyoshujo-3d",ye=null,Ii=1.35,ao=17,mi=!1,lo=1,Vl=0,Gl=0,co=!1,K=bu(ms.startBay.x,ms.startBay.z,ms.startBay.heading,Rt.vehicleKind,Rt.transmission),Mn=Cu(Rt.vehicleKind);Dn.add(Mn.root);Ce.setMode(Rt.cameraMode,K,Mn);se.setVolume(Rt.masterVolume,Rt.muted);const tx=document.getElementById("ui"),Lu=document.getElementById("uiToggle"),Wl=Array.from(document.querySelectorAll(".quickViewBtn[data-view-target]")),_h=document.getElementById("mirrorHud"),ex=document.getElementById("mirrorLeft"),nx=document.getElementById("mirrorCenter"),ix=document.getElementById("mirrorRight"),sx=document.getElementById("cockpitSignalHud"),rx=document.getElementById("cockpitLampLeft"),ox=document.getElementById("cockpitLampRight"),en=document.getElementById("miniMap"),Xl=document.getElementById("miniMapClose"),ax=document.getElementById("speedVignette"),lx=document.getElementById("speedBlur"),cx=document.getElementById("wheelHudDial"),hx=document.getElementById("speed"),ux=document.getElementById("gear"),dx=document.getElementById("viewMode"),fx=document.getElementById("position"),px=document.getElementById("heading"),mx=document.getElementById("steerAngle"),gx=document.getElementById("signalStatusBox"),_x=document.getElementById("signalStatus"),vh=document.getElementById("hudScore"),vx=document.getElementById("hudModePill"),Wr=document.getElementById("hudDirective"),la=document.getElementById("violationToasts"),xh=document.getElementById("resetToast"),xx=document.getElementById("stallBanner"),$l=document.getElementById("mobileControls");$l.hidden=!Rt.showTouchControls;const Mx={FL:document.getElementById("wheelFL"),FR:document.getElementById("wheelFR"),RL:document.getElementById("wheelRL"),RR:document.getElementById("wheelRR")},rl=document.getElementById("accelCurve"),yx=document.getElementById("accelCurveValue"),Sx=document.getElementById("accelCurveLine"),Xr=document.getElementById("accelCurveGuideX"),$r=document.getElementById("accelCurveGuideY"),Mh=document.getElementById("accelCurveDot"),Ex=document.getElementById("accelCurveInputValue"),bx=document.getElementById("accelCurveOutputValue"),hn={left:32,right:188,top:20,bottom:108,samples:32};function Iu(i,t=0){Ii=Se.clamp(i,.8,1.8),rl.value=String(Math.round(Ii*100)),yx.textContent=Ii.toFixed(2);const e=[];for(let n=0;n<=hn.samples;n++){const s=n/hn.samples,r=Math.pow(s,Ii),o=Se.lerp(hn.left,hn.right,s),a=Se.lerp(hn.bottom,hn.top,r);e.push(`${o.toFixed(1)},${a.toFixed(1)}`)}Sx.setAttribute("points",e.join(" ")),Du(t)}function Du(i){const t=Se.clamp(i,0,1),e=Math.pow(t,Ii),n=Se.lerp(hn.left,hn.right,t),s=Se.lerp(hn.bottom,hn.top,e);Xr.setAttribute("x1",n.toFixed(1)),Xr.setAttribute("y1",String(hn.bottom)),Xr.setAttribute("x2",n.toFixed(1)),Xr.setAttribute("y2",s.toFixed(1)),$r.setAttribute("x1",String(hn.left)),$r.setAttribute("y1",s.toFixed(1)),$r.setAttribute("x2",n.toFixed(1)),$r.setAttribute("y2",s.toFixed(1)),Mh.setAttribute("cx",n.toFixed(1)),Mh.setAttribute("cy",s.toFixed(1)),Ex.textContent=`${Math.round(t*100)}%`,bx.textContent=`${Math.round(e*100)}%`}let bs=!0;function bn(i){bs=i,tx.classList.toggle("collapsed",i);const t=Rt.locale==="ja";Lu.textContent=i?t?"メニューを表示":"Show Menu":t?"メニューを隠す":"Hide Menu"}Lu.addEventListener("click",()=>{se.unlock(),bn(!bs)});document.getElementById("startDrivingBtn").addEventListener("click",()=>{se.unlock(),bn(!0),Hl.focus({preventScroll:!0})});let yh=0;function wx(){const i=Rt.locale==="ja";document.getElementById("resetToastText").textContent=i?"スタート地点に戻りました。もう一度！":"Back to the start — try again!",xh.classList.add("visible"),window.clearTimeout(yh),yh=window.setTimeout(()=>xh.classList.remove("visible"),1800)}const ca=["chase","cockpit","instructor","hood","orbit"];function Yl(i){Rt.cameraMode=i,ti(Rt),Ce.setMode(i,K,Mn),Wl.forEach(r=>{r.classList.toggle("is-active",r.dataset.viewTarget===i)});const t=i==="orbit",e=i==="cockpit"||i==="instructor";_h.style.display=t?"none":e?"block":"flex",_h.classList.toggle("cockpit-layout",e),sx.classList.toggle("is-visible",e);const n=Rt.locale==="ja",s={chase:n?"後方視点":"Chase View",cockpit:n?"運転席 (右ハンドル)":"Cockpit View",instructor:n?"助手席・検定員視点":"Instructor Seat View",hood:n?"ボンネット":"Hood View",orbit:n?"自由カメラ":"Free Orbit"};dx.textContent=s[i]}function Nu(){const i=ca.indexOf(Ce.getMode());Yl(ca[(i+1)%ca.length])}Wl.forEach(i=>{i.addEventListener("click",()=>{se.unlock();const t=i.dataset.viewTarget;t&&Yl(t)})});document.getElementById("viewBtn").addEventListener("click",()=>{se.unlock(),Nu()});const hi=document.getElementById("mapPreset"),ws=document.getElementById("mapWidth"),ol=document.getElementById("mapScale"),Tx=document.getElementById("mapScaleValue");function ho(i){const t=Math.round(i);ws.value=String(t),ol.value=String(t),Tx.textContent=`${t} m`}function Oi(i,t,e,n){K=bu(i,t,e,Rt.vehicleKind,Rt.transmission),Ye.reset(n,K),document.getElementById("examResultModal").hidden=!0,document.getElementById("violationFreezeOverlay").hidden=!0,Qn=!1,Rn.length=0,Rn.push({x:i,z:t,heading:e,gear:K.gear}),ar(),Ce.setMode(Ce.getMode(),K,Mn)}function Cs(i,t="practice"){Es=i,En="kyoshujo-3d",hi.value="kyoshujo-3d",Qe="kyoshujo",Fi.setKyoshujoVisible(!0),tn.setVisible(!1),ho(ci*2);const e=ms[i];Oi(e.x,e.z,e.heading,t)}function vo(i){if(i==="kyoshujo-3d"){Cs(Es,"practice");return}if(i==="custom"&&ye){En="custom",Qe="custom",Fi.setKyoshujoVisible(!1),tn.setVisible(!0),ho(ye.mapWidth),Oi(ye.startX,ye.startZ,ye.startHeading,"practice");return}const t=oo.find(e=>e.id===i);t&&(En=t.id,hi.value=t.id,Qe="custom",tn.loadProceduralTestCenter(t),Fi.setKyoshujoVisible(!1),tn.setVisible(!0),ho(t.mapWidth),Oi(t.startX,t.startZ,t.startHeading,"practice"))}function xo(){se.unlock(),dn.resetProgress();const i=dn.getStartPose();dn.hasRoute()&&i?Oi(i.x,i.z,i.heading,"practice"):En==="kyoshujo-3d"?Cs(Es,Ye.getMode()):vo(En),wx()}document.getElementById("resetBtn").addEventListener("click",xo);document.getElementById("quickResetBtn").addEventListener("click",xo);function Mo(){const i=Rt.locale==="ja";hi.innerHTML="";for(const n of oo){const s=document.createElement("option");s.value=n.id,s.textContent=i?`${n.nameJa} (${n.nameEn})`:`${n.nameEn} (${n.nameJa})`,hi.append(s)}if(ye){const n=document.createElement("option");n.value="custom",n.textContent=i?`カスタム地図 / Custom (${ye.fileName})`:`Custom Map / カスタム (${ye.fileName})`,hi.append(n)}hi.value=En;const t=document.getElementById("stationGrid");t.innerHTML="";for(const n of uv){const s=Au[n],r=document.createElement("button");r.type="button",r.className="station-chip";const o=i?`${s.titleJa} · ${s.titleEn}`:`${s.titleEn} · ${s.titleJa}`,a=i?s.descJa:s.descEn;r.innerHTML=`<strong>${o}</strong><span>${a}</span>`,r.addEventListener("click",()=>{se.unlock(),Cs(n,"practice"),bn(!0)}),t.append(r)}const e=document.getElementById("courseQuickList");e.innerHTML="";for(const n of oo){const s=document.createElement("li"),r=document.createElement("button");r.type="button",r.innerHTML=`<strong>${i?n.nameJa:n.nameEn}</strong><small>${i?n.nameEn:n.nameJa}</small>`,r.addEventListener("click",()=>{se.unlock(),vo(n.id),bn(!0)}),s.append(r),e.append(s)}}hi.addEventListener("change",()=>{se.unlock(),vo(hi.value)});document.getElementById("modePracticeBtn").addEventListener("click",()=>{se.unlock(),Ye.reset("practice",K),bn(!0)});document.getElementById("modeExamBtn").addEventListener("click",()=>{se.unlock(),Cs("startBay","exam"),bn(!0)});const al=document.getElementById("vehicleType"),ll=document.getElementById("transmissionMode"),Sh=document.getElementById("maxSpeed"),Ax=document.getElementById("maxSpeedValue"),cl=document.getElementById("masterVolume"),Uu=document.getElementById("masterVolumeValue"),hl=document.getElementById("steeringSensitivity"),ku=document.getElementById("steeringSensitivityValue"),ul=document.getElementById("autoCenterSteering"),dl=document.getElementById("renderQuality"),fl=document.getElementById("settingTouchControls");al.value=Rt.vehicleKind;ll.value=Rt.transmission;cl.value=String(Math.round(Rt.masterVolume*100));Uu.textContent=`${Math.round(Rt.masterVolume*100)}%`;hl.value=String(Math.round(Rt.steeringSensitivity*100));ku.textContent=`${Rt.steeringSensitivity.toFixed(2)}x`;ul.checked=Rt.autoCenterSteering;dl.value=Rt.mirrorQuality;fl.checked=Rt.showTouchControls;Iu(Ii,0);function Fu(){Dn.remove(Mn.root),Mn=Cu(Rt.vehicleKind),Dn.add(Mn.root),Ce.setMode(Ce.getMode(),K,Mn),K.transmission=Rt.transmission,K.gear=Rt.transmission==="AT"?"D":"1",K.stalled=!1}al.addEventListener("change",()=>{Rt.vehicleKind=al.value,ti(Rt),Fu()});ll.addEventListener("change",()=>{Rt.transmission=ll.value,ti(Rt),Fu()});Sh.addEventListener("input",()=>{ao=Number(Sh.value),Ax.textContent=`${ao} m/s`});cl.addEventListener("input",()=>{Rt.masterVolume=Number(cl.value)/100,Uu.textContent=`${Math.round(Rt.masterVolume*100)}%`,se.setVolume(Rt.masterVolume,Rt.muted),ti(Rt)});hl.addEventListener("input",()=>{Rt.steeringSensitivity=Number(hl.value)/100,ku.textContent=`${Rt.steeringSensitivity.toFixed(2)}x`,ti(Rt)});ul.addEventListener("change",()=>{Rt.autoCenterSteering=ul.checked,ti(Rt)});dl.addEventListener("change",()=>{Rt.mirrorQuality=dl.value,Ce.setMirrorQuality(Rt.mirrorQuality,Mn),ti(Rt)});fl.addEventListener("change",()=>{Rt.showTouchControls=fl.checked,$l.hidden=!Rt.showTouchControls,ti(Rt)});rl.addEventListener("input",()=>{Iu(Number(rl.value)/100,0)});const Eh=document.getElementById("mapInput");Eh.addEventListener("change",()=>{var e;const i=(e=Eh.files)==null?void 0:e[0];if(!i)return;const t=new FileReader;t.onload=async()=>{const n=String(t.result),s=Math.max(40,Number(ws.value)||350),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};ye=r,await tn.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await ur(r),En="custom",Mo(),vo("custom"),bn(!0)},t.readAsDataURL(i)});const Ou=i=>{const t=Math.max(40,Math.min(1500,i));ho(t),Qe==="custom"&&(tn.setWidth(t),ye&&(ye.mapWidth=t,ur(ye)))};ws.addEventListener("input",()=>Ou(Number(ws.value)||180));ol.addEventListener("input",()=>Ou(Number(ol.value)||180));document.getElementById("setSpawnBtn").addEventListener("click",()=>{ye&&En==="custom"?(ye.startX=K.x,ye.startZ=K.z,ye.startHeading=K.heading,ur(ye)):ms[Es]={id:Es,x:K.x,z:K.z,heading:K.heading},se.playClick(740,.04,.16)});document.getElementById("copyMapJsonBtn").addEventListener("click",async()=>{const i=JSON.stringify({course:En,mapWidth:Number(ws.value)||180,maxSpeed:ao,startPose:{x:Number(K.x.toFixed(1)),z:Number(K.z.toFixed(1)),heading:Number(K.heading.toFixed(6))}},null,2);try{await navigator.clipboard.writeText(i)}catch{}});const Bu=document.getElementById("firstRunHint");document.getElementById("firstRunHintClose").addEventListener("click",()=>{Bu.hidden=!0});function uo(i){mi=i,i&&(lo=1,Vl=0,Gl=0),en.classList.toggle("expanded",i),en.classList.remove("is-panning"),document.body.classList.toggle("minimap-expanded",i)}let fo=null,zu=0,Hu=0,pl=0,ml=0;en.addEventListener("pointerdown",i=>{!mi||i.target===Xl||(fo=i.pointerId,zu=pl=i.clientX,Hu=ml=i.clientY,co=!1,en.setPointerCapture(i.pointerId))});en.addEventListener("pointermove",i=>{if(!mi||i.pointerId!==fo)return;const t=Math.hypot(i.clientX-zu,i.clientY-Hu),e=i.clientX-pl,n=i.clientY-ml;if(pl=i.clientX,ml=i.clientY,t>=5){co=!0,en.classList.add("is-panning");const s=en.getBoundingClientRect();Vl-=e/Math.max(1,s.width)*Ce.miniMapViewport.halfWidth*2,Gl-=n/Math.max(1,s.height)*Ce.miniMapViewport.halfHeight*2}});en.addEventListener("pointerup",i=>{i.pointerId===fo&&(fo=null,en.classList.remove("is-panning"))});en.addEventListener("click",i=>{if(i.target===Xl)return;if(co){co=!1;return}if(!mi){uo(!0);return}const t=en.getBoundingClientRect(),e=(i.clientX-t.left)/Math.max(1,t.width),n=(i.clientY-t.top)/Math.max(1,t.height),s=Ce.miniMapViewport.centerX+(e-.5)*Ce.miniMapViewport.halfWidth*2,r=Ce.miniMapViewport.centerZ+(n-.5)*Ce.miniMapViewport.halfHeight*2;Oi(s,r,K.heading,Ye.getMode()),uo(!1)});en.addEventListener("wheel",i=>{if(!mi)return;i.preventDefault();const t=i.deltaY<0?1.18:1/1.18;lo=Se.clamp(lo*t,1,6)},{passive:!1});Xl.addEventListener("click",i=>{i.stopPropagation(),uo(!1)});window.addEventListener("keydown",i=>{i.key==="Escape"&&mi&&uo(!1)});document.getElementById("gearCardBtn").addEventListener("click",()=>{se.unlock(),wu(K,1)});document.getElementById("stallRestartBtn").addEventListener("click",()=>{se.unlock(),K.stalled=!1,K.rpm=850});function Rx(i){var o;const t=Rt.locale==="ja",e=document.createElement("div");e.className=`violation-toast ${i.instantFail?"fail":""}`;const n=t?i.labelJa:i.labelEn,s=t?i.detailJa:i.detailEn,r=i.instantFail?t?"検定中止":"FAIL":`-${i.points}`;for(e.innerHTML=`<span class="vt-pts">${r}</span><div><strong>${n}</strong><p>${s}</p></div>`,la.prepend(e);la.children.length>3;)(o=la.lastElementChild)==null||o.remove();window.setTimeout(()=>{e.classList.add("fade-out"),window.setTimeout(()=>e.remove(),320)},4200)}let Vu="crank";function Cx(i){const t=Rt.locale,e=document.getElementById("examResultModal");e.hidden=!1,Vu=i.weakArea??"crank",document.getElementById("examResultTitle").textContent=$n(t,"examResultTitle");const n=document.getElementById("examStamp");n.textContent=i.passed?$n(t,"examPassStamp"):$n(t,"examFailStamp"),n.className=`exam-stamp ${i.passed?"pass":"fail"}`,document.getElementById("examResultSub").textContent=i.terminated?$n(t,"examTerminatedSub"):i.passed?$n(t,"examPassedSub"):$n(t,"examFailedSub"),document.getElementById("examFinalScore").textContent=`${i.score} / 100`;const s=Math.floor(i.elapsedSec/60),r=Math.floor(i.elapsedSec%60);document.getElementById("examElapsed").textContent=`${s}:${r.toString().padStart(2,"0")}`,document.getElementById("examDistance").textContent=`${Math.round(i.distanceM)} m`;const o=document.getElementById("examViolationList");if(o.innerHTML="",i.violations.length===0){const a=document.createElement("li");a.className="clean-pass",a.textContent=$n(t,"examNoViolations"),o.append(a)}else for(const a of i.violations){const c=document.createElement("li"),l=t==="ja"?a.labelJa:a.labelEn,h=t==="ja"?a.detailJa:a.detailEn,u=a.instantFail?t==="ja"?"中止":"FAIL":`-${a.points}`;c.innerHTML=`<span class="ev-badge ${a.instantFail?"fail":""}">${u}</span><span><strong>${l}</strong> — ${h}</span>`,o.append(c)}}document.getElementById("examRetryBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Cs("startBay","exam")});document.getElementById("examPracticeWeakBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Cs(Vu,"practice")});document.getElementById("examCloseBtn").addEventListener("click",()=>{document.getElementById("examResultModal").hidden=!0,Ye.reset("practice",K)});const Px=document.getElementById("preDriveBar"),bh=document.getElementById("pdCollapseBtn"),Lx=document.getElementById("pdAutoCompleteBtn"),Gu=Array.from(document.querySelectorAll(".pd-step-chip[data-pd-step]"));function ar(){const i=K.preDrive;if(!i)return;const t={1:i.doorLocked,2:i.seatAdjusted,3:i.mirrorsAdjusted,4:i.seatbeltFastened,5:i.brakeAndStartDone,6:i.handbrakeReleased,7:i.rightSignalOn,8:i.fivePointLookDone};let e=1;for(;e<=8&&t[e];)e++;for(const n of Gu){const s=Number(n.dataset.pdStep),r=!!t[s];n.classList.toggle("done",r),n.classList.toggle("next-expected",!r&&s===e),n.classList.toggle("order-error",i.orderErrorStep===s)}}function ql(i,t=!0){se.unlock();const e=K.preDrive;if(e){if(t){for(let n=1;n<i;n++)if(!e.completedSteps.includes(n)){e.orderErrorStep=i;break}}e.completedSteps.includes(i)||e.completedSteps.push(i),i===1?(e.doorLocked=!0,se.playClick(520,.04,.18)):i===2?(e.seatAdjusted=!0,se.playClick(380,.06,.18)):i===3?(e.mirrorsAdjusted=!0,K.mirrorTouchTimer=1.1,se.playClick(680,.04,.16)):i===4?(e.seatbeltFastened=!0,se.playClick(880,.05,.22)):i===5?(e.brakeAndStartDone=!0,K.stalled=!1,K.rpm=860,se.playClick(460,.06,.2)):i===6?(e.handbrakeReleased=!0,K.handbrake=!1,K.gear=Rt.transmission==="AT"?"D":"1",se.playClick(540,.04,.16)):i===7?(e.rightSignalOn=!0,K.blinker="right",K.blinkerTimer=0,K.blinkerOn=!0,se.playClick(720,.03,.15)):i===8&&(e.fivePointLookDone=!0,K.lookAngleRad=55*Math.PI/180,K.lookedLeftTimestamp=ln,window.setTimeout(()=>{K.lookAngleRad=-64*Math.PI/180,K.lookedRightTimestamp=ln},320),window.setTimeout(()=>{K.lookAngleRad=0},780),se.playClick(940,.04,.18)),ar()}}Gu.forEach(i=>{i.addEventListener("click",()=>{const t=Number(i.dataset.pdStep);t>=1&&t<=8&&ql(t,!0)})});Lx.addEventListener("click",()=>{K.preDrive.orderErrorStep=void 0;for(let i=1;i<=8;i++)ql(i,!1)});bh.addEventListener("click",()=>{const i=Px.classList.toggle("collapsed");bh.textContent=i?"+":"−"});window.addEventListener("keydown",i=>{if(!(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement)&&i.code.startsWith("Digit")){const t=Number(i.code.replace("Digit",""));t>=1&&t<=8&&ql(t,!0)}});const Jl=document.getElementById("violationFreezeOverlay"),Ix=document.getElementById("strictRuleFreezeChk"),Wu=document.getElementById("vfResumeBtn"),Dx=document.getElementById("vfRetryStationBtn");let Qn=!1;const Rn=[];let wh=-999;function Nx(i,t){if(!i.anyCurbTouch&&!i.anyCurbMount&&!i.poleHit&&!i.obstacleHit&&!(t!=null&&t.pedestrianDanger)&&!(t!=null&&t.trafficCollision)&&ln-wh>=.25){wh=ln;const n=Rn[Rn.length-1];(!n||Math.hypot(K.x-n.x,K.z-n.z)>.35)&&(Rn.push({x:K.x,z:K.z,heading:K.heading,gear:K.gear==="R"?Rt.transmission==="AT"?"D":"1":K.gear}),Rn.length>24&&Rn.shift())}}function Ux(){const i=Bl(Rt.vehicleKind),t=il(K,i),e=t.anyCurbMount||t.anyCurbTouch||!!t.poleHit||!!t.obstacleHit;if(e&&Rn.length>0){const n=Math.max(0,Rn.length-5),s=Rn[n];K.x=s.x,K.z=s.z,K.heading=s.heading,K.gear=s.gear}else e&&(K.x+=Math.sin(K.heading)*1.6,K.z+=Math.cos(K.heading)*1.6);K.speedMs=0,K.steerAngleRad=0,K.steeringWheelRad=0,K.stalled=!1,K.handbrake=!1,Tu(K,i)}function kx(i){Qn=!0,K.speedMs=0;const t=Rt.locale==="ja";document.getElementById("vfTagText").textContent=i.instantFail?t?"🚨 検定中止（一発不合格） · INSTANT FAIL":"🚨 INSTANT FAIL (検定中止)":t?`⚠️ 減点違反 (-${i.points}点) · RULE VIOLATION`:`⚠️ RULE VIOLATION (-${i.points} PTS)`,document.getElementById("vfTitleText").textContent=`${i.labelJa} · ${i.labelEn}`;const e=document.getElementById("vfBadgeText");e.textContent=i.instantFail?"検定中止 / FAIL":`-${i.points} PTS`,e.className=`vf-badge ${i.instantFail?"fail":""}`,document.getElementById("vfDetailJa").textContent=i.detailJa,document.getElementById("vfDetailEn").textContent=i.detailEn,document.getElementById("vfRuleRefJa").textContent=i.ruleRefJa??"",document.getElementById("vfRuleRefEn").textContent=i.ruleRefEn??"",document.getElementById("vfHowToFixJa").textContent=i.howToFixJa??"",document.getElementById("vfHowToFixEn").textContent=i.howToFixEn??"";const n=Ye.getScore();document.getElementById("vfScoreRemainText").textContent=t?`持ち点: ${n} / 100点 (70点以上で合格)`:`Score: ${n} / 100 pts (70 pts to pass)`,Wu.textContent=t?"✅ ルールを理解して車を安全な位置に戻し再開 [Space / Enter]":"✅ I Understand — Unstuck Car & Resume Driving [Space / Enter]",Jl.hidden=!1}function Xu(){Qn&&(Qn=!1,Jl.hidden=!0,Ux())}Wu.addEventListener("click",()=>{se.unlock(),Xu()});Dx.addEventListener("click",()=>{se.unlock(),Qn=!1,Jl.hidden=!0,xo()});document.getElementById("vfOpenRulebookBtn").addEventListener("click",()=>{se.unlock(),yo("written")});window.addEventListener("keydown",i=>{Qn&&(i.key==="Enter"||i.key===" "||i.key==="Escape")&&(i.preventDefault(),Xu())});const Zl=document.getElementById("rulebookModal"),$u=document.getElementById("rulebookContentBody");let Gs="predrive";function yo(i=Gs){se.unlock(),Gs=i,document.querySelectorAll("[data-rb-tab]").forEach(t=>{t.classList.toggle("active",t.dataset.rbTab===Gs)}),Pu($u,Gs,Rt.locale),Zl.hidden=!1}document.getElementById("quickRulebookBtn").addEventListener("click",()=>yo());document.getElementById("openRulebookBtn").addEventListener("click",()=>yo());document.getElementById("rulebookCloseBtn").addEventListener("click",()=>{Zl.hidden=!0});document.querySelectorAll("[data-rb-tab]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.rbTab||"predrive";yo(t)})});Ye.onViolation=i=>{Rx(i),se.playViolationChime(i.instantFail),Ix.checked&&kx(i)};Ye.onExamFinish=i=>{Qn||Cx(i)};const Yu=new Av({onToggleBlinker:i=>{K.blinker=K.blinker===i?"off":i,K.blinkerTimer=0,K.blinkerOn=K.blinker!=="off",K.blinker==="right"&&K.preDrive&&(K.preDrive.rightSignalOn=!0,K.preDrive.completedSteps.includes(7)||K.preDrive.completedSteps.push(7),ar())},onToggleHandbrake:()=>{K.handbrake=!K.handbrake,se.playClick(420,.04,.16),!K.handbrake&&K.preDrive&&(K.preDrive.handbrakeReleased=!0,K.preDrive.completedSteps.includes(6)||K.preDrive.completedSteps.push(6),ar())},onShiftGear:i=>{wu(K,i),se.playClick(620,.03,.14)},onCycleCamera:Nu,onResetVehicle:xo,onToggleMenu:()=>bn(!bs),onIgnition:()=>{K.stalled=!1,K.rpm=850},onAnyInteraction:()=>{se.unlock(),Bu.hidden=!0}});Yu.bindTouchControls($l);function qu(){const i=Rt.locale==="ja";document.documentElement.lang=Rt.locale,bn(bs),document.getElementById("quickLangEnBtn").classList.toggle("is-active",!i),document.getElementById("quickLangJaBtn").classList.toggle("is-active",i),document.getElementById("panelLangEnBtn").style.borderColor=i?"rgba(255,255,255,0.14)":"#34d399",document.getElementById("panelLangJaBtn").style.borderColor=i?"#34d399":"rgba(255,255,255,0.14)",document.getElementById("setupTitleText").textContent=i?"ドライブの準備 (Ready to drive)":"Ready to drive (ドライブの準備)",document.getElementById("setupLeadText").textContent=i?"車両とコースを選び、各教習課題へのワープや100点満点の修了検定を練習できます。":"Choose your vehicle and map, warp to any driving school obstacle, or start the 100-point exam.",document.getElementById("startDrivingBtn").textContent=i?"運転を始める (Start driving)":"Start driving (運転を始める)",document.getElementById("resetBtn").textContent=i?"車両リセット (Reset)":"Reset Vehicle (リセット)",document.getElementById("quickResetBtn").textContent=i?"リセット (O)":"Reset (O)",document.getElementById("lblVehicle").textContent=i?"車種 (Vehicle)":"Vehicle (車種)",document.getElementById("optSedan").textContent=i?"普通車セダン (右ハンドル) · RHD Sedan":"Sedan (RHD Corolla) · 普通車セダン",document.getElementById("optMoto").textContent=i?"普通二輪 (400cc) · Motorcycle":"Motorcycle (400cc) · 普通二輪",document.getElementById("lblTrans").textContent=i?"変速機 (Transmission)":"Transmission (変速機)",document.getElementById("optAT").textContent=i?"AT (オートマ・クリープあり)":"AT (Automatic · Creep)",document.getElementById("optMT").textContent=i?"MT (マニュアル5速)":"MT (Manual 5-Speed)",document.getElementById("lblMap").textContent=i?"コース / 試験場マップ (Course / Map)":"Course / Map (教習コース・試験場)",document.getElementById("modePracticeBtn").textContent=i?"自由練習 (Free Practice)":"Free Practice (自由練習)",document.getElementById("modeExamBtn").textContent=i?"修了検定 100点採点 (Mock Exam)":"Mock Exam 100-pt (修了検定)",document.getElementById("foldStationsTitle").textContent=i?"教習課題ワープ (Kyōshūjo Training Stations)":"Kyōshūjo Training Stations (教習課題ワープ)",document.getElementById("foldTuningTitle").textContent=i?"操作感とサウンド (Handling & sound)":"Handling & sound (操作感とサウンド)",document.getElementById("lblMaxSpeed").textContent=i?"最高速度 (Max Speed)":"Max Speed (最高速度)",document.getElementById("lblVolume").textContent=i?"音量 (Volume)":"Volume (音量)",document.getElementById("lblSteerSens").textContent=i?"ハンドル感度 (Steering Sensitivity)":"Steering Sensitivity (ハンドル感度)",document.getElementById("lblAutoCenter").textContent=i?"ハンドル自動復元 (Auto-center Steering)":"Auto-center Steering (ハンドル自動復元)",document.getElementById("lblMirrorQuality").textContent=i?"画質・ミラー描画 (Graphics & Mirrors)":"Graphics & Mirrors (画質・ミラー描画)",document.getElementById("optMirrorHigh").textContent=i?"高画質・3面ミラー (High · 3 Mirrors)":"High · Real-time 3 Mirrors (高画質)",document.getElementById("optMirrorLow").textContent=i?"標準・バランス (Medium · Balanced)":"Medium · Balanced (標準)",document.getElementById("optMirrorOff").textContent=i?"軽量・省電力 (Low · Save power)":"Low · Save power (軽量)",document.getElementById("lblTouchControls").textContent=i?"タッチ操作パネル表示 (Show touch controls)":"Show mobile touch controls (タッチ操作表示)",document.getElementById("curveTitle").textContent=i?"アクセル特性カーブ (Acceleration Curve)":"Acceleration Curve (アクセル特性)",document.getElementById("curveDesc").textContent=i?"横軸：アクセル入力 ／ 縦軸：駆動出力 (X: Input, Y: Output)":"X axis is throttle input, Y axis is drive output",document.getElementById("curveSoftLbl").textContent=i?"穏やか (Soft)":"Soft (穏やか)",document.getElementById("curveDirectLbl").textContent=i?"ダイレクト (Direct)":"Direct (直接)",document.getElementById("curveInputLbl").textContent=i?"入力 (Input)":"Current Input",document.getElementById("curveOutputLbl").textContent=i?"出力 (Output)":"Current Output",document.getElementById("foldMapTitle").textContent=i?"マップ編集・開始位置 (Map editor & spawn)":"Map editor & spawn (マップ編集・開始位置)",document.getElementById("uploadMapText").textContent=i?"地図アップロード (Upload)":"Upload Map (地図読込)",document.getElementById("setSpawnBtn").textContent=i?"開始位置に登録 (Set Spawn)":"Set Spawn (開始位置)",document.getElementById("viewBtn").textContent=i?"視点切替 (Change View)":"Change View (視点切替)",document.getElementById("copyMapJsonBtn").textContent=i?"JSONコピー (Copy JSON)":"Copy JSON (JSONコピー)",document.getElementById("lblCustomWidth").textContent=i?"マップ横幅 (Map Width m)":"Map Width m (マップ横幅)",document.getElementById("lblMapScale").textContent=i?"縮尺スケール (Map Scale)":"Map Scale (縮尺)",document.getElementById("foldHelpTitle").textContent=i?"操作ガイド (How to drive)":"How to drive (操作ガイド)";const t=document.getElementById("tipsContainer"),e=i?["W/A/S/D または 矢印キー : 運転 (Drive)","Q / E : 左右ウインカー (Signals) · H : ハザード","Space : サイドブレーキ (Handbrake)","Shift / Ctrl : ギア変更 (Shift Gear)","Z / X : 左右の安全確認 (Look Left/Right)","O : 車両リセット (Reset)","V : カメラ視点切替 (Cycle Views)"]:["W/A/S/D or Arrow Keys : Drive (運転)","Q / E : Turn Signals (ウインカー) · H : Hazard","Space : Handbrake (サイドブレーキ)","Shift / Ctrl : Shift Gear (ギア変更)","Z / X : Look Left & Right (左右安全確認)","O : Reset Vehicle (リセット)","V : Cycle Views (視点切替)"];t.innerHTML=e.map(s=>`<span>${s}</span>`).join(""),document.getElementById("helpMiniMapText").textContent=i?"右下のミニマップをクリックで拡大表示し、コース上の任意の場所をクリックするとそこへ車両がワープします。":"Click the mini map in the bottom-right corner to expand it, drag to pan, scroll to zoom, or click any spot to teleport the vehicle.",document.getElementById("foldDataTitle").textContent=i?"走行データ (Driving details)":"Driving details (走行データ)",document.getElementById("lblTelView").textContent=i?"視点 (View):":"View (視点):",document.getElementById("lblTelPos").textContent=i?"位置 (Position):":"Position (位置):",document.getElementById("lblTelHead").textContent=i?"方位 (Heading):":"Heading (方位):",document.getElementById("lblTelSteer").textContent=i?"舵角 (Steering):":"Steering (舵角):",document.getElementById("foldCoursesTitle").textContent=i?"試験場・教習コース一覧 (Built-in Test Center Courses)":"Built-in Test Center Courses (試験場コース一覧)";const n={chase:i?"後方 (Chase)":"Chase (後方)",cockpit:i?"運転席 (Cockpit)":"Cockpit (運転席)",instructor:i?"👨‍✈️ 検定員席 (Instructor)":"👨‍✈️ Instructor (検定員席)",hood:i?"ボンネット (Hood)":"Hood (ボンネット)",orbit:i?"自由 (Free)":"Free (自由)"};Wl.forEach(s=>{const r=s.dataset.viewTarget||"chase";s.textContent=n[r]||r}),document.getElementById("quickRulebookBtn").textContent=i?"📖 教本・標識・PDF (Rules)":"📖 Rules & PDF (教本・標識)",document.getElementById("openRulebookBtn").textContent=i?"📖 教本・標識・減点基準・PDF (Rules & PDF)":"📖 Rules, Signs & Study PDF (教本・標識)",document.getElementById("lblStrictFreeze").textContent=i?"🚨 違反時に赤画面で一時停止＆解説 (Red Freeze on Rule Break)":"🚨 Red Freeze & Explain on Rule Break (違反時赤画面停止)",document.getElementById("pdTitleText").textContent=i?"👨‍✈️ 乗車〜発進手順 (Pre-Drive Order — ①〜⑧を順番にクリックまたはキー1〜8)":"👨‍✈️ Pre-Drive Exam Sequence (Click 1–8 in exact order before pulling out)",document.getElementById("pdAutoCompleteBtn").textContent=i?"⚡ 一括完了 (Auto-Complete)":"⚡ Auto-Complete (一括完了)",Zl.hidden||Pu($u,Gs,Rt.locale),document.getElementById("lblMirrorL").textContent=i?"左ミラー · Left":"Left Mirror · 左",document.getElementById("lblMirrorC").textContent=i?"ルームミラー · Center":"Center Mirror · 中央",document.getElementById("lblMirrorR").textContent=i?"右ミラー · Right":"Right Mirror · 右",document.getElementById("cockpitLampLeft").textContent=i?"← 左合図 (Left)":"← Left (左)",document.getElementById("cockpitLampRight").textContent=i?"右合図 (Right) →":"Right (右) →",document.getElementById("lblHudSignal").textContent=i?"合図 (Signal):":"Signal (合図):",document.getElementById("lblMiniMap").textContent=i?"ミニマップ · Mini Map":"Mini Map · ミニマップ",document.getElementById("lblMiniMapHint").textContent=i?"ドラッグで移動・ホイールで拡大・地点クリックでワープ (Click any point to teleport)":"Hold and drag to pan. Wheel to zoom. Click any point on the course to teleport there.",document.getElementById("firstRunTitle").textContent=i?"運転をはじめましょう (Start driving)":"Start driving (運転をはじめましょう)",document.getElementById("firstRunText").textContent=i?"WASD/矢印キーで走行、Q/Eでウインカー、Spaceでブレーキ、Z/Xで左右目視、Vで視点切替、Oでリセット。":"WASD or arrow keys drive, Q/E signals, Space brakes, Z/X look left & right, V changes view, O resets.",document.getElementById("lblMobileSteerHint").textContent=i?"← 左右スワイプで操舵 (Swipe) →":"← Swipe to steer (スワイプ操舵) →",document.getElementById("lblMobileSigL").textContent=i?"↑ 左 (L)":"↑ Left",document.getElementById("lblMobileSigR").textContent=i?"右 (R) ↓":"Right ↓",document.getElementById("lblMobileGear").textContent=i?"ギア (Gear)":"Gear",document.getElementById("lblMobileBrake").textContent=i?"ブレーキ":"Brake",document.getElementById("lblMobileThrottle").textContent=i?"アクセル":"Throttle",Mo(),Yl(Ce.getMode())}function So(i){se.unlock(),Rt.locale=i,ti(Rt),qu()}document.getElementById("quickLangEnBtn").addEventListener("click",()=>So("en"));document.getElementById("quickLangJaBtn").addEventListener("click",()=>So("ja"));document.getElementById("panelLangEnBtn").addEventListener("click",()=>So("en"));document.getElementById("panelLangJaBtn").addEventListener("click",()=>So("ja"));const jl=document.getElementById("routeBuilderModal"),lr=document.getElementById("routeBuilderCanvas"),Ft=lr.getContext("2d"),gl=document.getElementById("rbStatusText"),Th=document.getElementById("rbUploadInput");let _l="waypoint",Ae=[],jn=[],Js=[];function Kl(){return Qe==="custom"?tn.currentSize:{width:ci*2,height:Li*2}}function Ql(){Js.push({waypoints:Ae.map(i=>({...i})),stamps:jn.map(i=>({...i}))}),Js.length>30&&Js.shift()}function Ps(){const i=lr.width,t=lr.height;Ft.clearRect(0,0,i,t);const e=Kl(),n=Qe==="custom"?tn.getActiveSource():null;if(n)Ft.drawImage(n,0,0,i,t);else{Ft.fillStyle="#1e2f23",Ft.fillRect(0,0,i,t);const r=(_,x)=>[(_/e.width+.5)*i,(x/e.height+.5)*t];Ft.strokeStyle="#475569",Ft.lineWidth=22,Ft.lineCap="round",Ft.strokeRect(i*.08,t*.12,i*.84,t*.76),Ft.beginPath();const[o,a]=r(0,-46),[c,l]=r(0,46),[h,u]=r(-76,0),[d,g]=r(76,0);Ft.moveTo(o,a),Ft.lineTo(c,l),Ft.moveTo(h,u),Ft.lineTo(d,g),Ft.stroke()}const s=(r,o)=>[(r/e.width+.5)*i,(o/e.height+.5)*t];if(Ae.length>=2){Ft.save(),Ft.strokeStyle="#34d399",Ft.lineWidth=5,Ft.lineCap="round",Ft.lineJoin="round",Ft.beginPath(),Ae.forEach((r,o)=>{const[a,c]=s(r.x,r.z);o===0?Ft.moveTo(a,c):Ft.lineTo(a,c)}),Ft.stroke();for(let r=0;r<Ae.length-1;r++){const[o,a]=s(Ae[r].x,Ae[r].z),[c,l]=s(Ae[r+1].x,Ae[r+1].z),h=(o+c)*.5,u=(a+l)*.5,d=Math.atan2(l-a,c-o);Ft.save(),Ft.translate(h,u),Ft.rotate(d),Ft.fillStyle="#fde047",Ft.beginPath(),Ft.moveTo(8,0),Ft.lineTo(-6,-5),Ft.lineTo(-6,5),Ft.closePath(),Ft.fill(),Ft.restore()}Ft.restore()}Ae.forEach((r,o)=>{const[a,c]=s(r.x,r.z);Ft.beginPath(),Ft.arc(a,c,13,0,Math.PI*2),Ft.fillStyle=o===0?"#059669":o===Ae.length-1?"#d62828":"#005bac",Ft.fill(),Ft.lineWidth=2.5,Ft.strokeStyle="#ffffff",Ft.stroke(),Ft.fillStyle="#ffffff",Ft.font="bold 12px sans-serif",Ft.textAlign="center",Ft.textBaseline="middle";const l=o===0?"S":o===Ae.length-1?"G":String(o);Ft.fillText(l,a,c)});for(const r of jn){const[o,a]=s(r.x,r.z);Ft.save(),Ft.translate(o,a),Ft.fillStyle=r.kind==="stopSign"?"#dc2626":r.kind==="trafficLight"?"#f59e0b":"#ec4899",Ft.beginPath(),Ft.arc(0,0,11,0,Math.PI*2),Ft.fill(),Ft.strokeStyle="#fff",Ft.lineWidth=2,Ft.stroke(),Ft.fillStyle="#fff",Ft.font="bold 10px sans-serif",Ft.textAlign="center",Ft.textBaseline="middle",Ft.fillText(r.kind==="stopSign"?"止":r.kind==="trafficLight"?"信":"P",0,0),Ft.restore()}gl.textContent=Rt.locale==="ja"?`ポイント: ${Ae.length}点 ／ 3D標識: ${jn.length}個`:`Waypoints: ${Ae.length} · 3D Stamps: ${jn.length}`}function Ju(){se.unlock();const i=dn.getData();Ae=i.waypoints.map(t=>({...t})),jn=i.stamps.map(t=>({...t})),Js=[],jl.hidden=!1,Ps()}document.getElementById("openRouteBuilderBtn").addEventListener("click",Ju);document.getElementById("quickRouteBuilderBtn").addEventListener("click",Ju);document.getElementById("rbCloseBtn").addEventListener("click",()=>{jl.hidden=!0});document.querySelectorAll("[data-rb-tool]").forEach(i=>{i.addEventListener("click",()=>{_l=i.dataset.rbTool||"waypoint",document.querySelectorAll("[data-rb-tool]").forEach(t=>{t.classList.toggle("active",t===i)})})});lr.addEventListener("click",i=>{const t=lr.getBoundingClientRect(),e=(i.clientX-t.left)/Math.max(1,t.width),n=(i.clientY-t.top)/Math.max(1,t.height),s=Kl(),r=(e-.5)*s.width,o=(n-.5)*s.height;if(Ql(),_l==="waypoint")Ae.push({x:r,z:o,turn:"straight"});else{let a=0;if(Ae.length>=1){const c=Ae[Ae.length-1];a=Math.atan2(-(r-c.x),-(o-c.z))}jn.push({kind:_l,x:r,z:o,heading:a})}Ps()});document.getElementById("rbUndoBtn").addEventListener("click",()=>{const i=Js.pop();i&&(Ae=i.waypoints,jn=i.stamps,Ps())});document.getElementById("rbClearBtn").addEventListener("click",()=>{Ql(),Ae=[],jn=[],Ps()});Th.addEventListener("change",()=>{var e;const i=(e=Th.files)==null?void 0:e[0];if(!i)return;const t=new FileReader;t.onload=async()=>{const n=String(t.result),s=Math.max(80,Number(ws.value)||260),r={imageDataUrl:n,fileName:i.name,mapWidth:s,startX:0,startZ:0,startHeading:0};ye=r,await tn.loadFromDataUrl(r.imageDataUrl,r.mapWidth),await ur(r),En="custom",Qe="custom",Fi.setKyoshujoVisible(!1),tn.setVisible(!0),Mo(),Ps()},t.readAsDataURL(i)});document.querySelectorAll("[data-trace-color]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.traceColor||"red",e=tn.getActiveSource();if(!e){gl.textContent=Rt.locale==="ja"?"先にコース図画像をアップロードしてください":"Please upload a route map image first";return}const n=Kl(),s=dn.autoExtractRouteFromImage(e,n.width,t);if(s.length<2){gl.textContent=Rt.locale==="ja"?"色線が見つかりませんでした。地図上をクリックしてルート点を追加してください":"No matching colored line found — click directly on the map to trace points";return}Ql(),Ae=s,Ps()})});document.getElementById("rbSaveAndDriveBtn").addEventListener("click",()=>{dn.setRouteData({waypoints:Ae,stamps:jn},!0),jl.hidden=!0,bn(!0);const i=dn.getStartPose();i&&(ye&&Qe==="custom"&&(ye.startX=i.x,ye.startZ=i.z,ye.startHeading=i.heading,ur(ye)),Oi(i.x,i.z,i.heading,"practice"))});function Fx(i){if(dn.setMemoryMode(i),document.querySelectorAll("[data-memory-mode]").forEach(t=>{t.classList.toggle("active",t.dataset.memoryMode===i)}),i==="autodrive"&&dn.hasRoute()){const t=dn.getStartPose();t&&(Oi(t.x,t.z,t.heading,"practice"),dn.resetProgress())}}document.querySelectorAll("[data-memory-mode]").forEach(i=>{i.addEventListener("click",()=>{const t=i.dataset.memoryMode||"guided";Fx(t)})});Mv().then(async i=>{i&&(ye=i,await tn.loadFromDataUrl(i.imageDataUrl,i.mapWidth),Mo())});qu();bn(!0);window.addEventListener("resize",()=>{cn.setSize(window.innerWidth,window.innerHeight),Ce.resize(window.innerWidth/window.innerHeight)});const Ox=()=>({y:0,slopeX:0,slopeZ:0}),bi=1/120;let Yr=0,Ah=performance.now(),ln=0,Rh=-999;function Zu(i){requestAnimationFrame(Zu);const t=Math.min(.05,Math.max(0,(i-Ah)/1e3));Ah=i,Yr+=t;const n={...Bl(Rt.vehicleKind),maxSpeedMs:ao},s=Yu.getInputState(),r=dn.update(t,K,rs,Rt.locale,ln),o=r.autoDriveInput??s,a={...o,throttle:o.throttle>0?Math.pow(o.throttle,Ii):0};bs||Du(o.throttle);let c=il(K,n);for(Qn&&(Yr=0);Yr>=bi&&!Qn;){if(ln+=bi,rs.update(bi),wv(K,a,n,bi,{steeringSensitivity:Rt.steeringSensitivity,autoCenterSteering:Rt.autoCenterSteering,simTimeSec:ln},Qe==="custom"?Ox:void 0),K.preDrive&&!K.preDrive.fivePointLookDone&&ln-K.lookedRightTimestamp<1.5&&(K.preDrive.fivePointLookDone=!0,K.preDrive.completedSteps.includes(8)||K.preDrive.completedSteps.push(8),ar()),Qe==="kyoshujo"){const T=Kv.update(bi,K,rs);c=il(K,n),Nx(c,T),(c.pushX!==0||c.pushZ!==0)&&(K.x+=c.pushX,K.z+=c.pushZ,Tu(K,n),(c.poleHit||c.obstacleHit)&&(K.speedMs*=.35,ln-Rh>.6&&(Rh=ln,se.playThud()))),Ye.update(bi,K,c,rs,T)}Yr-=bi}const l=Ye.getCurrentWaypoint(),h=l?{x:l.x,z:l.z}:null;Xv(Mn,K,Rt.vehicleKind),Fi.updateShadowFocus(K.x,K.z),Fi.updateDynamic(rs,h,ln);const u=rs.getRailroadState();se.update(K,Qe==="kyoshujo"&&u.isWarningActive,ln);const d=Math.abs(K.speedMs),g=Math.pow(Se.clamp((d-6)/14,0,1),1.8);ax.style.opacity=(g*.75).toFixed(3),lx.style.opacity=(g*.88).toFixed(3),Ce.update(t,K,Rt.vehicleKind,Mn,cn,Dn);const _=!bs||mi;Ce.renderPiPMirrors(cn,Dn,K,ex,nx,ix,_);const x=Qe==="kyoshujo"?{width:ci*2,height:Li*2}:tn.currentSize;Ce.renderPiPMiniMap(cn,Dn,en,K,x,mi,lo,Vl,Gl),cn.setViewport(0,0,window.innerWidth,window.innerHeight),cn.setScissorTest(!1),cn.render(Dn,Ce.camera);const m=Rt.locale==="ja";hx.textContent=(d*3.6).toFixed(1),ux.textContent=K.gear,fx.textContent=`${K.x.toFixed(1)}, ${K.z.toFixed(1)}`;const p=Se.radToDeg(K.heading);px.textContent=`${p.toFixed(1)}° / ${K.heading.toFixed(4)} rad`;const S=Math.round(Se.radToDeg(K.steeringWheelRad));mx.textContent=String(S),cx.style.transform=`rotate(${-K.steeringWheelRad}rad)`;const M=K.blinkerOn&&(K.blinker==="left"||K.blinker==="hazard"),v=K.blinkerOn&&(K.blinker==="right"||K.blinker==="hazard");rx.classList.toggle("is-active",M),ox.classList.toggle("is-active",v),gx.dataset.signal=K.blinker,_x.textContent=K.blinker==="left"?m?"左合図":"Left":K.blinker==="right"?m?"右合図":"Right":K.blinker==="hazard"?"Hazard":"Off",vh.textContent=String(Ye.getScore()),vh.className=`score-num ${Ye.getScore()<70?"danger":""}`;const y=Ye.getMode()==="exam";vx.textContent=y?$n(Rt.locale,"modeExam"):$n(Rt.locale,"modePractice");const b=Ye.getWaypointProgress();if(r.bannerText)Wr.textContent=r.bannerText;else if(Qe==="custom"){const T=oo.find(C=>C.id===En);Wr.textContent=T?m?`${T.nameJa} コース練習中`:`Practicing: ${T.nameEn}`:m?"カスタム地図コース走行中":"Driving custom course map"}else if(l)Wr.textContent=`[${b.current+1}/${b.total}] ${m?l.instructionJa:l.instructionEn}`;else{const T=Au[Es];Wr.textContent=`${m?T.titleJa:T.titleEn}: ${m?T.descJa:T.descEn}`}xx.hidden=!K.stalled,["FL","FR","RL","RR"].forEach(T=>{const C=c.wheels[T],w=Mx[T];w.classList.toggle("mount",C.curbMount),w.classList.toggle("touch",!C.curbMount&&C.curbTouch),w.classList.toggle("close",!C.curbMount&&!C.curbTouch&&C.proximity>.35)})}requestAnimationFrame(Zu);
