(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();const ya="181",tc=0,Ja=1,nc=2,rl=1,sl=2,cn=3,An=0,Rt=1,zt=2,hn=0,hi=1,ja=2,Qa=3,eo=4,ic=5,Bn=100,rc=101,sc=102,ac=103,oc=104,lc=200,cc=201,fc=202,uc=203,Ps=204,Ds=205,hc=206,dc=207,pc=208,mc=209,xc=210,gc=211,vc=212,_c=213,Mc=214,Ls=0,Is=1,Us=2,pi=3,Fs=4,Ns=5,Os=6,Bs=7,ba=0,Sc=1,yc=2,En=0,bc=1,Ec=2,Tc=3,al=4,Ac=5,wc=6,Cc=7,ol=300,mi=301,xi=302,zs=303,Vs=304,Vr=306,Gs=1e3,fn=1001,Hs=1002,Ft=1003,Rc=1004,Qi=1005,Gt=1006,Zr=1007,Vn=1008,en=1009,ll=1010,cl=1011,Bi=1012,Ea=1013,Gn=1014,un=1015,Mi=1016,Ta=1017,Aa=1018,zi=1020,fl=35902,ul=35899,hl=1021,dl=1022,Yt=1023,Vi=1026,Gi=1027,pl=1028,wa=1029,Ca=1030,Ra=1031,Pa=1033,Ar=33776,wr=33777,Cr=33778,Rr=33779,ks=35840,Ws=35841,Xs=35842,Ys=35843,qs=36196,$s=37492,Ks=37496,Zs=37808,Js=37809,js=37810,Qs=37811,ea=37812,ta=37813,na=37814,ia=37815,ra=37816,sa=37817,aa=37818,oa=37819,la=37820,ca=37821,fa=36492,ua=36494,ha=36495,da=36283,pa=36284,ma=36285,xa=36286,Pc=3200,Dc=3201,ml=0,Lc=1,yn="",Bt="srgb",gi="srgb-linear",Lr="linear",Qe="srgb",Xn=7680,to=519,Ic=512,Uc=513,Fc=514,xl=515,Nc=516,Oc=517,Bc=518,zc=519,ga=35044,no="300 es",Qt=2e3,Ir=2001;function gl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Vc(){const s=Ur("canvas");return s.style.display="block",s}const io={};function Fr(...s){const e="THREE."+s.shift();console.log(e,...s)}function Fe(...s){const e="THREE."+s.shift();console.warn(e,...s)}function ht(...s){const e="THREE."+s.shift();console.error(e,...s)}function Hi(...s){const e=s.join(" ");e in io||(io[e]=!0,Fe(...s))}function Gc(s,e,t){return new Promise(function(i,r){function n(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:i()}}setTimeout(n,t)})}class Si{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let n=0,o=r.length;n<o;n++)r[n].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,va=180/Math.PI;function Tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]).toLowerCase()}function Ye(s,e,t){return Math.max(e,Math.min(t,s))}function Hc(s,e){return(s%e+e)%e}function jr(s,e,t){return(1-t)*s+t*e}function jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,a){let c=i[r+0],u=i[r+1],f=i[r+2],d=i[r+3],h=n[o+0],l=n[o+1],p=n[o+2],x=n[o+3];if(a<=0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d;return}if(a>=1){e[t+0]=h,e[t+1]=l,e[t+2]=p,e[t+3]=x;return}if(d!==x||c!==h||u!==l||f!==p){let m=c*h+u*l+f*p+d*x;m<0&&(h=-h,l=-l,p=-p,x=-x,m=-m);let g=1-a;if(m<.9995){const y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,c=c*g+h*a,u=u*g+l*a,f=f*g+p*a,d=d*g+x*a}else{c=c*g+h*a,u=u*g+l*a,f=f*g+p*a,d=d*g+x*a;const y=1/Math.sqrt(c*c+u*u+f*f+d*d);c*=y,u*=y,f*=y,d*=y}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,n,o){const a=i[r],c=i[r+1],u=i[r+2],f=i[r+3],d=n[o],h=n[o+1],l=n[o+2],p=n[o+3];return e[t]=a*p+f*d+c*l-u*h,e[t+1]=c*p+f*h+u*d-a*l,e[t+2]=u*p+f*l+a*h-c*d,e[t+3]=f*p-a*d-c*h-u*l,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,n=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(i/2),f=a(r/2),d=a(n/2),h=c(i/2),l=c(r/2),p=c(n/2);switch(o){case"XYZ":this._x=h*f*d+u*l*p,this._y=u*l*d-h*f*p,this._z=u*f*p+h*l*d,this._w=u*f*d-h*l*p;break;case"YXZ":this._x=h*f*d+u*l*p,this._y=u*l*d-h*f*p,this._z=u*f*p-h*l*d,this._w=u*f*d+h*l*p;break;case"ZXY":this._x=h*f*d-u*l*p,this._y=u*l*d+h*f*p,this._z=u*f*p+h*l*d,this._w=u*f*d-h*l*p;break;case"ZYX":this._x=h*f*d-u*l*p,this._y=u*l*d+h*f*p,this._z=u*f*p-h*l*d,this._w=u*f*d+h*l*p;break;case"YZX":this._x=h*f*d+u*l*p,this._y=u*l*d+h*f*p,this._z=u*f*p-h*l*d,this._w=u*f*d-h*l*p;break;case"XZY":this._x=h*f*d-u*l*p,this._y=u*l*d-h*f*p,this._z=u*f*p+h*l*d,this._w=u*f*d+h*l*p;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],d=t[10],h=i+a+d;if(h>0){const l=.5/Math.sqrt(h+1);this._w=.25/l,this._x=(f-c)*l,this._y=(n-u)*l,this._z=(o-r)*l}else if(i>a&&i>d){const l=2*Math.sqrt(1+i-a-d);this._w=(f-c)/l,this._x=.25*l,this._y=(r+o)/l,this._z=(n+u)/l}else if(a>d){const l=2*Math.sqrt(1+a-i-d);this._w=(n-u)/l,this._x=(r+o)/l,this._y=.25*l,this._z=(c+f)/l}else{const l=2*Math.sqrt(1+d-i-a);this._w=(o-r)/l,this._x=(n+u)/l,this._y=(c+f)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-n*c,this._y=r*f+o*c+n*a-i*u,this._z=n*f+o*u+i*c-r*a,this._w=o*f-i*a-r*c-n*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,n=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,n=-n,o=-o,a=-a);let c=1-t;if(a<.9995){const u=Math.acos(a),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+n*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+n*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ro.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ro.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*r-a*i),f=2*(a*t-n*r),d=2*(n*i-o*t);return this.x=t+c*u+o*d-a*f,this.y=i+c*f+a*u-n*d,this.z=r+c*d+n*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-n*a,this.y=n*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new O,ro=new Wi;class Oe{constructor(e,t,i,r,n,o,a,c,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,o,a,c,u)}set(e,t,i,r,n,o,a,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=n,f[5]=c,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],a=i[3],c=i[6],u=i[1],f=i[4],d=i[7],h=i[2],l=i[5],p=i[8],x=r[0],m=r[3],g=r[6],y=r[1],b=r[4],A=r[7],v=r[2],M=r[5],E=r[8];return n[0]=o*x+a*y+c*v,n[3]=o*m+a*b+c*M,n[6]=o*g+a*A+c*E,n[1]=u*x+f*y+d*v,n[4]=u*m+f*b+d*M,n[7]=u*g+f*A+d*E,n[2]=h*x+l*y+p*v,n[5]=h*m+l*b+p*M,n[8]=h*g+l*A+p*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*n*f+i*a*c+r*n*u-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],d=f*o-a*u,h=a*c-f*n,l=u*n-o*c,p=t*d+i*h+r*l;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return e[0]=d*x,e[1]=(r*u-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*t-r*c)*x,e[5]=(r*n-a*t)*x,e[6]=l*x,e[7]=(i*c-u*t)*x,e[8]=(o*t-i*n)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,a){const c=Math.cos(n),u=Math.sin(n);return this.set(i*c,i*u,-i*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(es.makeScale(e,t)),this}rotate(e){return this.premultiply(es.makeRotation(-e)),this}translate(e,t){return this.premultiply(es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const es=new Oe,so=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ao=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kc(){const s={enabled:!0,workingColorSpace:gi,spaces:{},convert:function(r,n,o){return this.enabled===!1||n===o||!n||!o||(this.spaces[n].transfer===Qe&&(r.r=dn(r.r),r.g=dn(r.g),r.b=dn(r.b)),this.spaces[n].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[n].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Qe&&(r.r=di(r.r),r.g=di(r.g),r.b=di(r.b))),r},workingToColorSpace:function(r,n){return this.convert(r,this.workingColorSpace,n)},colorSpaceToWorking:function(r,n){return this.convert(r,n,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yn?Lr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,n=this.workingColorSpace){return r.fromArray(this.spaces[n].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,n,o){return r.copy(this.spaces[n].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,n){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(r,n)},toWorkingColorSpace:function(r,n){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(r,n)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[gi]:{primaries:e,whitePoint:i,transfer:Lr,toXYZ:so,fromXYZ:ao,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:i,transfer:Qe,toXYZ:so,fromXYZ:ao,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),s}const Ke=kc();function dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function di(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Yn;class Wc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Yn===void 0&&(Yn=Ur("canvas")),Yn.width=e.width,Yn.height=e.height;const r=Yn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Yn}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=dn(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(dn(t[i]/255)*255):t[i]=dn(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Xc=0;class Da{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?n.push(ts(r[o].image)):n.push(ts(r[o]))}else n=ts(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function ts(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Wc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let Yc=0;const ns=new O;class yt extends Si{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,i=fn,r=fn,n=Gt,o=Vn,a=Yt,c=en,u=yt.DEFAULT_ANISOTROPY,f=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Tn(),this.name="",this.source=new Da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ns).x}get height(){return this.source.getSize(ns).y}get depth(){return this.source.getSize(ns).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gs:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Hs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gs:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Hs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=ol;yt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,i=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const c=e.elements,u=c[0],f=c[4],d=c[8],h=c[1],l=c[5],p=c[9],x=c[2],m=c[6],g=c[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(u+l+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,A=(l+1)/2,v=(g+1)/2,M=(f+h)/4,E=(d+x)/4,T=(p+m)/4;return b>A&&b>v?b<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(b),r=M/i,n=E/i):A>v?A<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(A),i=M/r,n=T/r):v<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(v),i=E/n,r=T/n),this.set(i,r,n,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-x)/y,this.z=(h-f)/y,this.w=Math.acos((u+l+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qc extends Si{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:i.depth},n=new yt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=n.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Da(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends qc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vl extends yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $c extends yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const n=i.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=n.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kt):kt.fromBufferAttribute(n,o),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),er.copy(i.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),tr.subVectors(this.max,wi),qn.subVectors(e.a,wi),$n.subVectors(e.b,wi),Kn.subVectors(e.c,wi),mn.subVectors($n,qn),xn.subVectors(Kn,$n),Dn.subVectors(qn,Kn);let t=[0,-mn.z,mn.y,0,-xn.z,xn.y,0,-Dn.z,Dn.y,mn.z,0,-mn.x,xn.z,0,-xn.x,Dn.z,0,-Dn.x,-mn.y,mn.x,0,-xn.y,xn.x,0,-Dn.y,Dn.x,0];return!is(t,qn,$n,Kn,tr)||(t=[1,0,0,0,1,0,0,0,1],!is(t,qn,$n,Kn,tr))?!1:(nr.crossVectors(mn,xn),t=[nr.x,nr.y,nr.z],is(t,qn,$n,Kn,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const nn=[new O,new O,new O,new O,new O,new O,new O,new O],kt=new O,er=new Xi,qn=new O,$n=new O,Kn=new O,mn=new O,xn=new O,Dn=new O,wi=new O,tr=new O,nr=new O,Ln=new O;function is(s,e,t,i,r){for(let n=0,o=s.length-3;n<=o;n+=3){Ln.fromArray(s,n);const a=r.x*Math.abs(Ln.x)+r.y*Math.abs(Ln.y)+r.z*Math.abs(Ln.z),c=e.dot(Ln),u=t.dot(Ln),f=i.dot(Ln);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}const Kc=new Xi,Ci=new O,rs=new O;class Yi{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kc.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ci,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(rs)),this.expandByPoint(Ci.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const rn=new O,ss=new O,ir=new O,gn=new O,as=new O,rr=new O,os=new O;class La{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ss.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(ss);const n=e.distanceTo(t)*.5,o=-this.direction.dot(ir),a=gn.dot(this.direction),c=-gn.dot(ir),u=gn.lengthSq(),f=Math.abs(1-o*o);let d,h,l,p;if(f>0)if(d=o*c-a,h=o*a-c,p=n*f,d>=0)if(h>=-p)if(h<=p){const x=1/f;d*=x,h*=x,l=d*(d+o*h+2*a)+h*(o*d+h+2*c)+u}else h=n,d=Math.max(0,-(o*h+a)),l=-d*d+h*(h+2*c)+u;else h=-n,d=Math.max(0,-(o*h+a)),l=-d*d+h*(h+2*c)+u;else h<=-p?(d=Math.max(0,-(-o*n+a)),h=d>0?-n:Math.min(Math.max(-n,-c),n),l=-d*d+h*(h+2*c)+u):h<=p?(d=0,h=Math.min(Math.max(-n,-c),n),l=h*(h+2*c)+u):(d=Math.max(0,-(o*n+a)),h=d>0?n:Math.min(Math.max(-n,-c),n),l=-d*d+h*(h+2*c)+u);else h=o>0?-n:n,d=Math.max(0,-(o*h+a)),l=-d*d+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ss).addScaledVector(ir,h),l}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const i=rn.dot(this.direction),r=rn.dot(rn)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,a,c;const u=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(n=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(n=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||n>r||((n>i||isNaN(i))&&(i=n),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,i,r,n){as.subVectors(t,e),rr.subVectors(i,e),os.crossVectors(as,rr);let o=this.direction.dot(os),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gn.subVectors(this.origin,e);const c=a*this.direction.dot(rr.crossVectors(gn,rr));if(c<0)return null;const u=a*this.direction.dot(as.cross(gn));if(u<0||c+u>o)return null;const f=-a*gn.dot(os);return f<0?null:this.at(f/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class at{constructor(e,t,i,r,n,o,a,c,u,f,d,h,l,p,x,m){at.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,n,o,a,c,u,f,d,h,l,p,x,m)}set(e,t,i,r,n,o,a,c,u,f,d,h,l,p,x,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=n,g[5]=o,g[9]=a,g[13]=c,g[2]=u,g[6]=f,g[10]=d,g[14]=h,g[3]=l,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new at().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zn.setFromMatrixColumn(e,0).length(),n=1/Zn.setFromMatrixColumn(e,1).length(),o=1/Zn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(n),d=Math.sin(n);if(e.order==="XYZ"){const h=o*f,l=o*d,p=a*f,x=a*d;t[0]=c*f,t[4]=-c*d,t[8]=u,t[1]=l+p*u,t[5]=h-x*u,t[9]=-a*c,t[2]=x-h*u,t[6]=p+l*u,t[10]=o*c}else if(e.order==="YXZ"){const h=c*f,l=c*d,p=u*f,x=u*d;t[0]=h+x*a,t[4]=p*a-l,t[8]=o*u,t[1]=o*d,t[5]=o*f,t[9]=-a,t[2]=l*a-p,t[6]=x+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*f,l=c*d,p=u*f,x=u*d;t[0]=h-x*a,t[4]=-o*d,t[8]=p+l*a,t[1]=l+p*a,t[5]=o*f,t[9]=x-h*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*f,l=o*d,p=a*f,x=a*d;t[0]=c*f,t[4]=p*u-l,t[8]=h*u+x,t[1]=c*d,t[5]=x*u+h,t[9]=l*u-p,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,l=o*u,p=a*c,x=a*u;t[0]=c*f,t[4]=x-h*d,t[8]=p*d+l,t[1]=d,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=l*d+p,t[10]=h-x*d}else if(e.order==="XZY"){const h=o*c,l=o*u,p=a*c,x=a*u;t[0]=c*f,t[4]=-d,t[8]=u*f,t[1]=h*d+x,t[5]=o*f,t[9]=l*d-p,t[2]=p*d-l,t[6]=a*f,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zc,e,Jc)}lookAt(e,t,i){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),vn.crossVectors(i,Lt),vn.lengthSq()===0&&(Math.abs(i.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),vn.crossVectors(i,Lt)),vn.normalize(),sr.crossVectors(Lt,vn),r[0]=vn.x,r[4]=sr.x,r[8]=Lt.x,r[1]=vn.y,r[5]=sr.y,r[9]=Lt.y,r[2]=vn.z,r[6]=sr.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],a=i[4],c=i[8],u=i[12],f=i[1],d=i[5],h=i[9],l=i[13],p=i[2],x=i[6],m=i[10],g=i[14],y=i[3],b=i[7],A=i[11],v=i[15],M=r[0],E=r[4],T=r[8],S=r[12],_=r[1],w=r[5],R=r[9],L=r[13],N=r[2],F=r[6],V=r[10],k=r[14],G=r[3],K=r[7],Q=r[11],he=r[15];return n[0]=o*M+a*_+c*N+u*G,n[4]=o*E+a*w+c*F+u*K,n[8]=o*T+a*R+c*V+u*Q,n[12]=o*S+a*L+c*k+u*he,n[1]=f*M+d*_+h*N+l*G,n[5]=f*E+d*w+h*F+l*K,n[9]=f*T+d*R+h*V+l*Q,n[13]=f*S+d*L+h*k+l*he,n[2]=p*M+x*_+m*N+g*G,n[6]=p*E+x*w+m*F+g*K,n[10]=p*T+x*R+m*V+g*Q,n[14]=p*S+x*L+m*k+g*he,n[3]=y*M+b*_+A*N+v*G,n[7]=y*E+b*w+A*F+v*K,n[11]=y*T+b*R+A*V+v*Q,n[15]=y*S+b*L+A*k+v*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],d=e[6],h=e[10],l=e[14],p=e[3],x=e[7],m=e[11],g=e[15];return p*(+n*c*d-r*u*d-n*a*h+i*u*h+r*a*l-i*c*l)+x*(+t*c*l-t*u*h+n*o*h-r*o*l+r*u*f-n*c*f)+m*(+t*u*d-t*a*l-n*o*d+i*o*l+n*a*f-i*u*f)+g*(-r*a*f-t*c*d+t*a*h+r*o*d-i*o*h+i*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],d=e[9],h=e[10],l=e[11],p=e[12],x=e[13],m=e[14],g=e[15],y=d*m*u-x*h*u+x*c*l-a*m*l-d*c*g+a*h*g,b=p*h*u-f*m*u-p*c*l+o*m*l+f*c*g-o*h*g,A=f*x*u-p*d*u+p*a*l-o*x*l-f*a*g+o*d*g,v=p*d*c-f*x*c-p*a*h+o*x*h+f*a*m-o*d*m,M=t*y+i*b+r*A+n*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=y*E,e[1]=(x*h*n-d*m*n-x*r*l+i*m*l+d*r*g-i*h*g)*E,e[2]=(a*m*n-x*c*n+x*r*u-i*m*u-a*r*g+i*c*g)*E,e[3]=(d*c*n-a*h*n-d*r*u+i*h*u+a*r*l-i*c*l)*E,e[4]=b*E,e[5]=(f*m*n-p*h*n+p*r*l-t*m*l-f*r*g+t*h*g)*E,e[6]=(p*c*n-o*m*n-p*r*u+t*m*u+o*r*g-t*c*g)*E,e[7]=(o*h*n-f*c*n+f*r*u-t*h*u-o*r*l+t*c*l)*E,e[8]=A*E,e[9]=(p*d*n-f*x*n-p*i*l+t*x*l+f*i*g-t*d*g)*E,e[10]=(o*x*n-p*a*n+p*i*u-t*x*u-o*i*g+t*a*g)*E,e[11]=(f*a*n-o*d*n-f*i*u+t*d*u+o*i*l-t*a*l)*E,e[12]=v*E,e[13]=(f*x*r-p*d*r+p*i*h-t*x*h-f*i*m+t*d*m)*E,e[14]=(p*a*r-o*x*r-p*i*c+t*x*c+o*i*m-t*a*m)*E,e[15]=(o*d*r-f*a*r+f*i*c-t*d*c-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,a=e.y,c=e.z,u=n*o,f=n*a;return this.set(u*o+i,u*a-r*c,u*c+r*a,0,u*a+r*c,f*a+i,f*c-r*o,0,u*c-r*a,f*c+r*o,n*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,a=t._z,c=t._w,u=n+n,f=o+o,d=a+a,h=n*u,l=n*f,p=n*d,x=o*f,m=o*d,g=a*d,y=c*u,b=c*f,A=c*d,v=i.x,M=i.y,E=i.z;return r[0]=(1-(x+g))*v,r[1]=(l+A)*v,r[2]=(p-b)*v,r[3]=0,r[4]=(l-A)*M,r[5]=(1-(h+g))*M,r[6]=(m+y)*M,r[7]=0,r[8]=(p+b)*E,r[9]=(m-y)*E,r[10]=(1-(h+x))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Zn.set(r[0],r[1],r[2]).length();const o=Zn.set(r[4],r[5],r[6]).length(),a=Zn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Wt.copy(this);const u=1/n,f=1/o,d=1/a;return Wt.elements[0]*=u,Wt.elements[1]*=u,Wt.elements[2]*=u,Wt.elements[4]*=f,Wt.elements[5]*=f,Wt.elements[6]*=f,Wt.elements[8]*=d,Wt.elements[9]*=d,Wt.elements[10]*=d,t.setFromRotationMatrix(Wt),i.x=n,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,o,a=Qt,c=!1){const u=this.elements,f=2*n/(t-e),d=2*n/(i-r),h=(t+e)/(t-e),l=(i+r)/(i-r);let p,x;if(c)p=n/(o-n),x=o*n/(o-n);else if(a===Qt)p=-(o+n)/(o-n),x=-2*o*n/(o-n);else if(a===Ir)p=-o/(o-n),x=-o*n/(o-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=d,u[9]=l,u[13]=0,u[2]=0,u[6]=0,u[10]=p,u[14]=x,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,n,o,a=Qt,c=!1){const u=this.elements,f=2/(t-e),d=2/(i-r),h=-(t+e)/(t-e),l=-(i+r)/(i-r);let p,x;if(c)p=1/(o-n),x=o/(o-n);else if(a===Qt)p=-2/(o-n),x=-(o+n)/(o-n);else if(a===Ir)p=-1/(o-n),x=-n/(o-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=d,u[9]=0,u[13]=l,u[2]=0,u[6]=0,u[10]=p,u[14]=x,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zn=new O,Wt=new at,Zc=new O(0,0,0),Jc=new O(1,1,1),vn=new O,sr=new O,Lt=new O,oo=new at,lo=new Wi;class tn{constructor(e=0,t=0,i=0,r=tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],a=r[8],c=r[1],u=r[5],f=r[9],d=r[2],h=r[6],l=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,l),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,l),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,l),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,n));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,l),this._z=Math.atan2(c,n)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(a,l));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-f,l),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lo.setFromEuler(this),this.setFromQuaternion(lo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tn.DEFAULT_ORDER="XYZ";class _l{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jc=0;const co=new O,Jn=new Wi,sn=new at,ar=new O,Ri=new O,Qc=new O,ef=new Wi,fo=new O(1,0,0),uo=new O(0,1,0),ho=new O(0,0,1),po={type:"added"},tf={type:"removed"},jn={type:"childadded",child:null},ls={type:"childremoved",child:null};class mt extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new O,t=new tn,i=new Wi,r=new O(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new Oe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _l,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(e,t){return Jn.setFromAxisAngle(e,t),this.quaternion.premultiply(Jn),this}rotateX(e){return this.rotateOnAxis(fo,e)}rotateY(e){return this.rotateOnAxis(uo,e)}rotateZ(e){return this.rotateOnAxis(ho,e)}translateOnAxis(e,t){return co.copy(e).applyQuaternion(this.quaternion),this.position.add(co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fo,e)}translateY(e){return this.translateOnAxis(uo,e)}translateZ(e){return this.translateOnAxis(ho,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ar.copy(e):ar.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(Ri,ar,this.up):sn.lookAt(ar,Ri,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),Jn.setFromRotationMatrix(sn),this.quaternion.premultiply(Jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(po),jn.child=e,this.dispatchEvent(jn),jn.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf),ls.child=e,this.dispatchEvent(ls),ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(po),jn.child=e,this.dispatchEvent(jn),jn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let n=0,o=r.length;n<o;n++)r[n].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,Qc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++)r[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function n(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const d=c[u];n(e.shapes,d)}else n(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(n(e.materials,this.material[c]));r.material=a}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(n(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),l=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),l.length>0&&(i.animations=l),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new O(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new O,an=new O,cs=new O,on=new O,Qn=new O,ei=new O,mo=new O,fs=new O,us=new O,hs=new O,ds=new tt,ps=new tt,ms=new tt;class Vt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xt.subVectors(e,t),r.cross(Xt);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Xt.subVectors(r,t),an.subVectors(i,t),cs.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(an),c=Xt.dot(cs),u=an.dot(an),f=an.dot(cs),d=o*u-a*a;if(d===0)return n.set(0,0,0),null;const h=1/d,l=(u*c-a*f)*h,p=(o*f-a*c)*h;return n.set(1-l-p,p,l)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,i,r,n,o,a,c){return this.getBarycoord(e,t,i,r,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(n,on.x),c.addScaledVector(o,on.y),c.addScaledVector(a,on.z),c)}static getInterpolatedAttribute(e,t,i,r,n,o){return ds.setScalar(0),ps.setScalar(0),ms.setScalar(0),ds.fromBufferAttribute(e,t),ps.fromBufferAttribute(e,i),ms.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ds,n.x),o.addScaledVector(ps,n.y),o.addScaledVector(ms,n.z),o}static isFrontFacing(e,t,i,r){return Xt.subVectors(i,t),an.subVectors(e,t),Xt.cross(an).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Xt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,n){return Vt.getInterpolation(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,a;Qn.subVectors(r,i),ei.subVectors(n,i),fs.subVectors(e,i);const c=Qn.dot(fs),u=ei.dot(fs);if(c<=0&&u<=0)return t.copy(i);us.subVectors(e,r);const f=Qn.dot(us),d=ei.dot(us);if(f>=0&&d<=f)return t.copy(r);const h=c*d-f*u;if(h<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Qn,o);hs.subVectors(e,n);const l=Qn.dot(hs),p=ei.dot(hs);if(p>=0&&l<=p)return t.copy(n);const x=l*u-c*p;if(x<=0&&u>=0&&p<=0)return a=u/(u-p),t.copy(i).addScaledVector(ei,a);const m=f*p-l*d;if(m<=0&&d-f>=0&&l-p>=0)return mo.subVectors(n,r),a=(d-f)/(d-f+(l-p)),t.copy(r).addScaledVector(mo,a);const g=1/(m+x+h);return o=x*g,a=h*g,t.copy(i).addScaledVector(Qn,o).addScaledVector(ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},or={h:0,s:0,l:0};function xs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=Hc(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=xs(o,n,e+1/3),this.g=xs(o,n,e),this.b=xs(o,n,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=Bt){function i(n){n!==void 0&&parseFloat(n)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(n,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){const i=Ml[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dn(e.r),this.g=dn(e.g),this.b=dn(e.b),this}copyLinearToSRGB(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return Ke.workingToColorSpace(St.copy(this),e),Math.round(Ye(St.r*255,0,255))*65536+Math.round(Ye(St.g*255,0,255))*256+Math.round(Ye(St.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(St.copy(this),t);const i=St.r,r=St.g,n=St.b,o=Math.max(i,r,n),a=Math.min(i,r,n);let c,u;const f=(a+o)/2;if(a===o)c=0,u=0;else{const d=o-a;switch(u=f<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-n)/d+(r<n?6:0);break;case r:c=(n-i)/d+2;break;case n:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Bt){Ke.workingToColorSpace(St.copy(this),e);const t=St.r,i=St.g,r=St.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_n),this.setHSL(_n.h+e,_n.s+t,_n.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_n),e.getHSL(or);const i=jr(_n.h,or.h,t),r=jr(_n.s,or.s,t),n=jr(_n.l,or.l,t);return this.setHSL(i,r,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,n=e.elements;return this.r=n[0]*t+n[3]*i+n[6]*r,this.g=n[1]*t+n[4]*i+n[7]*r,this.b=n[2]*t+n[5]*i+n[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Ne;Ne.NAMES=Ml;let nf=0;class wn extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=hi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ps,this.blendDst=Ds,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=pi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=to,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(i.blending=this.blending),this.side!==An&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ps&&(i.blendSrc=this.blendSrc),this.blendDst!==Ds&&(i.blendDst=this.blendDst),this.blendEquation!==Bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==to&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const o=[];for(const a in n){const c=n[a];delete c.metadata,o.push(c)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gr extends wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new O,lr=new Be;let rf=0;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ga,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ga&&(e.usage=this.usage),e}}class Sl extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yl extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ct extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let sf=0;const Ot=new at,gs=new mt,ti=new O,It=new Xi,Pi=new Xi,vt=new O;class _t extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gl(e)?yl:Sl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Oe().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,i){return Ot.makeTranslation(e,t,i),this.applyMatrix4(Ot),this}scale(e,t,i){return Ot.makeScale(e,t,i),this.applyMatrix4(Ot),this}lookAt(e){return gs.lookAt(e),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,n=e.length;r<n;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];It.setFromBufferAttribute(n),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(It.min,Pi.min),It.expandByPoint(vt),vt.addVectors(It.max,Pi.max),It.expandByPoint(vt)):(It.expandByPoint(Pi.min),It.expandByPoint(Pi.max))}It.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)vt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(vt));if(t)for(let n=0,o=t.length;n<o;n++){const a=t[n],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)vt.fromBufferAttribute(a,u),c&&(ti.fromBufferAttribute(e,u),vt.add(ti)),r=Math.max(r,i.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let T=0;T<i.count;T++)a[T]=new O,c[T]=new O;const u=new O,f=new O,d=new O,h=new Be,l=new Be,p=new Be,x=new O,m=new O;function g(T,S,_){u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(i,_),h.fromBufferAttribute(n,T),l.fromBufferAttribute(n,S),p.fromBufferAttribute(n,_),f.sub(u),d.sub(u),l.sub(h),p.sub(h);const w=1/(l.x*p.y-p.x*l.y);isFinite(w)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(d,-l.y).multiplyScalar(w),m.copy(d).multiplyScalar(l.x).addScaledVector(f,-p.x).multiplyScalar(w),a[T].add(x),a[S].add(x),a[_].add(x),c[T].add(m),c[S].add(m),c[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let T=0,S=y.length;T<S;++T){const _=y[T],w=_.start,R=_.count;for(let L=w,N=w+R;L<N;L+=3)g(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const b=new O,A=new O,v=new O,M=new O;function E(T){v.fromBufferAttribute(r,T),M.copy(v);const S=a[T];b.copy(S),b.sub(v.multiplyScalar(v.dot(S))).normalize(),A.crossVectors(M,S);const w=A.dot(c[T])<0?-1:1;o.setXYZW(T,b.x,b.y,b.z,w)}for(let T=0,S=y.length;T<S;++T){const _=y[T],w=_.start,R=_.count;for(let L=w,N=w+R;L<N;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,l=i.count;h<l;h++)i.setXYZ(h,0,0,0);const r=new O,n=new O,o=new O,a=new O,c=new O,u=new O,f=new O,d=new O;if(e)for(let h=0,l=e.count;h<l;h+=3){const p=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,p),n.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),f.subVectors(o,n),d.subVectors(r,n),f.cross(d),a.fromBufferAttribute(i,p),c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(f),c.add(f),u.add(f),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,l=t.count;h<l;h+=3)r.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,n),d.subVectors(r,n),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,c){const u=a.array,f=a.itemSize,d=a.normalized,h=new u.constructor(c.length*f);let l=0,p=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?l=c[x]*a.data.stride+a.offset:l=c[x]*f;for(let g=0;g<f;g++)h[p++]=u[l++]}return new $t(h,f,d)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _t,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,i);t.setAttribute(a,u)}const n=this.morphAttributes;for(const a in n){const c=[],u=n[a];for(let f=0,d=u.length;f<d;f++){const h=u[f],l=e(h,i);c.push(l)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let n=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let d=0,h=u.length;d<h;d++){const l=u[d];f.push(l.toJSON(e.data))}f.length>0&&(r[c]=f,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const n=e.morphAttributes;for(const u in n){const f=[],d=n[u];for(let h=0,l=d.length;h<l;h++)f.push(d[h].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xo=new at,In=new La,cr=new Yi,go=new O,fr=new O,ur=new O,hr=new O,vs=new O,dr=new O,vo=new O,pr=new O;class At extends mt{constructor(e=new _t,t=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=r.length;n<o;n++){const a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(n&&a){dr.set(0,0,0);for(let c=0,u=n.length;c<u;c++){const f=a[c],d=n[c];f!==0&&(vs.fromBufferAttribute(d,e),o?dr.addScaledVector(vs,f):dr.addScaledVector(vs.sub(t),f))}t.add(dr)}return t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cr.copy(i.boundingSphere),cr.applyMatrix4(n),In.copy(e.ray).recast(e.near),!(cr.containsPoint(In.origin)===!1&&(In.intersectSphere(cr,go)===null||In.origin.distanceToSquared(go)>(e.far-e.near)**2))&&(xo.copy(n).invert(),In.copy(e.ray).applyMatrix4(xo),!(i.boundingBox!==null&&In.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,i){let r;const n=this.geometry,o=this.material,a=n.index,c=n.attributes.position,u=n.attributes.uv,f=n.attributes.uv1,d=n.attributes.normal,h=n.groups,l=n.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){const m=h[p],g=o[m.materialIndex],y=Math.max(m.start,l.start),b=Math.min(a.count,Math.min(m.start+m.count,l.start+l.count));for(let A=y,v=b;A<v;A+=3){const M=a.getX(A),E=a.getX(A+1),T=a.getX(A+2);r=mr(this,g,e,i,u,f,d,M,E,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,l.start),x=Math.min(a.count,l.start+l.count);for(let m=p,g=x;m<g;m+=3){const y=a.getX(m),b=a.getX(m+1),A=a.getX(m+2);r=mr(this,o,e,i,u,f,d,y,b,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,x=h.length;p<x;p++){const m=h[p],g=o[m.materialIndex],y=Math.max(m.start,l.start),b=Math.min(c.count,Math.min(m.start+m.count,l.start+l.count));for(let A=y,v=b;A<v;A+=3){const M=A,E=A+1,T=A+2;r=mr(this,g,e,i,u,f,d,M,E,T),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const p=Math.max(0,l.start),x=Math.min(c.count,l.start+l.count);for(let m=p,g=x;m<g;m+=3){const y=m,b=m+1,A=m+2;r=mr(this,o,e,i,u,f,d,y,b,A),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function af(s,e,t,i,r,n,o,a){let c;if(e.side===Rt?c=i.intersectTriangle(o,n,r,!0,a):c=i.intersectTriangle(r,n,o,e.side===An,a),c===null)return null;pr.copy(a),pr.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(pr);return u<t.near||u>t.far?null:{distance:u,point:pr.clone(),object:s}}function mr(s,e,t,i,r,n,o,a,c,u){s.getVertexPosition(a,fr),s.getVertexPosition(c,ur),s.getVertexPosition(u,hr);const f=af(s,e,t,i,fr,ur,hr,vo);if(f){const d=new O;Vt.getBarycoord(vo,fr,ur,hr,d),r&&(f.uv=Vt.getInterpolatedAttribute(r,a,c,u,d,new Be)),n&&(f.uv1=Vt.getInterpolatedAttribute(n,a,c,u,d,new Be)),o&&(f.normal=Vt.getInterpolatedAttribute(o,a,c,u,d,new O),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:c,c:u,normal:new O,materialIndex:0};Vt.getNormal(fr,ur,hr,h.normal),f.face=h,f.barycoord=d}return f}class qi extends _t{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const a=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const c=[],u=[],f=[],d=[];let h=0,l=0;p("z","y","x",-1,-1,i,t,e,o,n,0),p("z","y","x",1,-1,i,t,-e,o,n,1),p("x","z","y",1,1,e,i,t,r,o,2),p("x","z","y",1,-1,e,i,-t,r,o,3),p("x","y","z",1,-1,e,t,i,r,n,4),p("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(c),this.setAttribute("position",new ct(u,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function p(x,m,g,y,b,A,v,M,E,T,S){const _=A/E,w=v/T,R=A/2,L=v/2,N=M/2,F=E+1,V=T+1;let k=0,G=0;const K=new O;for(let Q=0;Q<V;Q++){const he=Q*w-L;for(let ye=0;ye<F;ye++){const Ie=ye*_-R;K[x]=Ie*y,K[m]=he*b,K[g]=N,u.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[g]=M>0?1:-1,f.push(K.x,K.y,K.z),d.push(ye/E),d.push(1-Q/T),k+=1}}for(let Q=0;Q<T;Q++)for(let he=0;he<E;he++){const ye=h+he+F*Q,Ie=h+he+F*(Q+1),Xe=h+(he+1)+F*(Q+1),ke=h+(he+1)+F*Q;c.push(ye,Ie,ke),c.push(Ie,Xe,ke),G+=6}a.addGroup(l,G,S),l+=G,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Tt(s){const e={};for(let t=0;t<s.length;t++){const i=vi(s[t]);for(const r in i)e[r]=i[r]}return e}function of(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function bl(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const lf={clone:vi,merge:Tt};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.uniformsGroups=of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class El extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=Qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new O,_o=new Be,Mo=new Be;class Ut extends El{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return va*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,_o,Mo),t.subVectors(Mo,_o)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;n+=o.offsetX*r/c,t-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class uf extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ut(ni,ii,e,t);r.layers=this.layers,this.add(r);const n=new Ut(ni,ii,e,t);n.layers=this.layers,this.add(n);const o=new Ut(ni,ii,e,t);o.layers=this.layers,this.add(o);const a=new Ut(ni,ii,e,t);a.layers=this.layers,this.add(a);const c=new Ut(ni,ii,e,t);c.layers=this.layers,this.add(c);const u=new Ut(ni,ii,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,n,o,a,c]=t;for(const u of t)this.remove(u);if(e===Qt)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,o,a,c,u,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),l=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,n),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(d,h,l),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Tl extends yt{constructor(e=[],t=mi,i,r,n,o,a,c,u,f){super(e,t,i,r,n,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hf extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qi(5,5,5),n=new pn({name:"CubemapFromEquirect",uniforms:vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:hn});n.uniforms.tEquirect.value=t;const o=new At(r,n),a=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Gt),new uf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}class fi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const df={type:"move"};class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),g=this._getHandJoint(u,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const f=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=f.position.distanceTo(d.position),l=.02,p=.005;u.inputState.pinching&&h>l+p?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=l-p&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(c.matrix.fromArray(n.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,n.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(n.linearVelocity)):c.hasLinearVelocity=!1,n.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(n.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(df)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=n!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new fi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ia{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new Ia(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pf extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ga,this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Et=new O;class Nr{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=jt(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=et(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jt(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),i=et(i,this.array),r=et(r,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){Fr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Al extends wn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ri;const Di=new O,si=new O,ai=new O,oi=new Be,Li=new Be,wl=new at,xr=new O,Ii=new O,gr=new O,So=new Be,Ms=new Be,yo=new Be;class xf extends mt{constructor(e=new Al){if(super(),this.isSprite=!0,this.type="Sprite",ri===void 0){ri=new _t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mf(t,5);ri.setIndex([0,1,2,0,2,3]),ri.setAttribute("position",new Nr(i,3,0,!1)),ri.setAttribute("uv",new Nr(i,2,3,!1))}this.geometry=ri,this.material=e,this.center=new Be(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),si.setFromMatrixScale(this.matrixWorld),wl.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ai.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&si.multiplyScalar(-ai.z);const i=this.material.rotation;let r,n;i!==0&&(n=Math.cos(i),r=Math.sin(i));const o=this.center;vr(xr.set(-.5,-.5,0),ai,o,si,r,n),vr(Ii.set(.5,-.5,0),ai,o,si,r,n),vr(gr.set(.5,.5,0),ai,o,si,r,n),So.set(0,0),Ms.set(1,0),yo.set(1,1);let a=e.ray.intersectTriangle(xr,Ii,gr,!1,Di);if(a===null&&(vr(Ii.set(-.5,.5,0),ai,o,si,r,n),Ms.set(0,1),a=e.ray.intersectTriangle(xr,gr,Ii,!1,Di),a===null))return;const c=e.ray.origin.distanceTo(Di);c<e.near||c>e.far||t.push({distance:c,point:Di.clone(),uv:Vt.getInterpolation(Di,xr,Ii,gr,So,Ms,yo,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function vr(s,e,t,i,r,n){oi.subVectors(s,t).addScalar(.5).multiply(i),r!==void 0?(Li.x=n*oi.x-r*oi.y,Li.y=r*oi.x+n*oi.y):Li.copy(oi),s.copy(e),s.x+=Li.x,s.y+=Li.y,s.applyMatrix4(wl)}class gf extends yt{constructor(e=null,t=1,i=1,r,n,o,a,c,u=Ft,f=Ft,d,h){super(null,o,a,c,u,f,r,n,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ss=new O,vf=new O,_f=new Oe;class On{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ss.subVectors(i,t).cross(vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ss),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(e.start).addScaledVector(i,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_f.getNormalMatrix(e),r=this.coplanarPoint(Ss).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Yi,Mf=new Be(.5,.5),_r=new O;class Ua{constructor(e=new On,t=new On,i=new On,r=new On,n=new On,o=new On){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Qt,i=!1){const r=this.planes,n=e.elements,o=n[0],a=n[1],c=n[2],u=n[3],f=n[4],d=n[5],h=n[6],l=n[7],p=n[8],x=n[9],m=n[10],g=n[11],y=n[12],b=n[13],A=n[14],v=n[15];if(r[0].setComponents(u-o,l-f,g-p,v-y).normalize(),r[1].setComponents(u+o,l+f,g+p,v+y).normalize(),r[2].setComponents(u+a,l+d,g+x,v+b).normalize(),r[3].setComponents(u-a,l-d,g-x,v-b).normalize(),i)r[4].setComponents(c,h,m,A).normalize(),r[5].setComponents(u-c,l-h,g-m,v-A).normalize();else if(r[4].setComponents(u-c,l-h,g-m,v-A).normalize(),t===Qt)r[5].setComponents(u+c,l+h,g+m,v+A).normalize();else if(t===Ir)r[5].setComponents(c,h,m,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){Un.center.set(0,0,0);const t=Mf.distanceTo(e.center);return Un.radius=.7071067811865476+t,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(_r.x=r.normal.x>0?e.max.x:e.min.x,_r.y=r.normal.y>0?e.max.y:e.min.y,_r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fa extends wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Or=new O,Br=new O,bo=new at,Ui=new La,Mr=new Yi,ys=new O,Eo=new O;class Sf extends mt{constructor(e=new _t,t=new Fa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)Or.fromBufferAttribute(t,r-1),Br.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Or.distanceTo(Br);e.setAttribute("lineDistance",new ct(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mr.copy(i.boundingSphere),Mr.applyMatrix4(r),Mr.radius+=n,e.ray.intersectsSphere(Mr)===!1)return;bo.copy(r).invert(),Ui.copy(e.ray).applyMatrix4(bo);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const l=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=l,m=p-1;x<m;x+=u){const g=f.getX(x),y=f.getX(x+1),b=Sr(this,e,Ui,c,g,y,x);b&&t.push(b)}if(this.isLineLoop){const x=f.getX(p-1),m=f.getX(l),g=Sr(this,e,Ui,c,x,m,p-1);g&&t.push(g)}}else{const l=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let x=l,m=p-1;x<m;x+=u){const g=Sr(this,e,Ui,c,x,x+1,x);g&&t.push(g)}if(this.isLineLoop){const x=Sr(this,e,Ui,c,p-1,l,p-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=r.length;n<o;n++){const a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Sr(s,e,t,i,r,n,o){const a=s.geometry.attributes.position;if(Or.fromBufferAttribute(a,r),Br.fromBufferAttribute(a,n),t.distanceSqToSegment(Or,Br,ys,Eo)>i)return;ys.applyMatrix4(s.matrixWorld);const u=e.ray.origin.distanceTo(ys);if(!(u<e.near||u>e.far))return{distance:u,point:Eo.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const To=new O,Ao=new O;class Cl extends Sf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)To.fromBufferAttribute(t,r),Ao.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+To.distanceTo(Ao);e.setAttribute("lineDistance",new ct(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rl extends wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wo=new at,_a=new La,yr=new Yi,br=new O;class yf extends mt{constructor(e=new _t,t=new Rl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere),yr.applyMatrix4(r),yr.radius+=n,e.ray.intersectsSphere(yr)===!1)return;wo.copy(r).invert(),_a.copy(e.ray).applyMatrix4(wo);const a=n/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),l=Math.min(u.count,o.start+o.count);for(let p=h,x=l;p<x;p++){const m=u.getX(p);br.fromBufferAttribute(d,m),Co(br,m,c,r,e,t,this)}}else{const h=Math.max(0,o.start),l=Math.min(d.count,o.start+o.count);for(let p=h,x=l;p<x;p++)br.fromBufferAttribute(d,p),Co(br,p,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=r.length;n<o;n++){const a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}}function Co(s,e,t,i,r,n,o){const a=_a.distanceSqToPoint(s);if(a<t){const c=new O;_a.closestPointToPoint(s,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;n.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Pl extends yt{constructor(e,t,i,r,n,o,a,c,u){super(e,t,i,r,n,o,a,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dl extends yt{constructor(e,t,i=Gn,r,n,o,a=Ft,c=Ft,u,f=Vi,d=1){if(f!==Vi&&f!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,n,o,a,c,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Da(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ll extends yt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hr extends _t{constructor(e=1,t=1,i=1,r=32,n=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:n,openEnded:o,thetaStart:a,thetaLength:c};const u=this;r=Math.floor(r),n=Math.floor(n);const f=[],d=[],h=[],l=[];let p=0;const x=[],m=i/2;let g=0;y(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(l,2));function y(){const A=new O,v=new O;let M=0;const E=(t-e)/i;for(let T=0;T<=n;T++){const S=[],_=T/n,w=_*(t-e)+e;for(let R=0;R<=r;R++){const L=R/r,N=L*c+a,F=Math.sin(N),V=Math.cos(N);v.x=w*F,v.y=-_*i+m,v.z=w*V,d.push(v.x,v.y,v.z),A.set(F,E,V).normalize(),h.push(A.x,A.y,A.z),l.push(L,1-_),S.push(p++)}x.push(S)}for(let T=0;T<r;T++)for(let S=0;S<n;S++){const _=x[S][T],w=x[S+1][T],R=x[S+1][T+1],L=x[S][T+1];(e>0||S!==0)&&(f.push(_,w,L),M+=3),(t>0||S!==n-1)&&(f.push(w,R,L),M+=3)}u.addGroup(g,M,0),g+=M}function b(A){const v=p,M=new Be,E=new O;let T=0;const S=A===!0?e:t,_=A===!0?1:-1;for(let R=1;R<=r;R++)d.push(0,m*_,0),h.push(0,_,0),l.push(.5,.5),p++;const w=p;for(let R=0;R<=r;R++){const N=R/r*c+a,F=Math.cos(N),V=Math.sin(N);E.x=S*V,E.y=m*_,E.z=S*F,d.push(E.x,E.y,E.z),h.push(0,_,0),M.x=F*.5+.5,M.y=V*.5*_+.5,l.push(M.x,M.y),p++}for(let R=0;R<r;R++){const L=v+R,N=w+R;A===!0?f.push(N,N+1,L):f.push(N+1,N,L),T+=3}u.addGroup(g,T,A===!0?1:2),g+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kr extends Hr{constructor(e=1,t=1,i=32,r=1,n=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,n,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:n,thetaStart:o,thetaLength:a}}static fromJSON(e){return new kr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yi extends _t{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),u=a+1,f=c+1,d=e/a,h=t/c,l=[],p=[],x=[],m=[];for(let g=0;g<f;g++){const y=g*h-o;for(let b=0;b<u;b++){const A=b*d-n;p.push(A,-y,0),x.push(0,0,1),m.push(b/a),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){const b=y+u*g,A=y+u*(g+1),v=y+1+u*(g+1),M=y+1+u*g;l.push(b,A,M),l.push(A,v,M)}this.setIndex(l),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Na extends _t{constructor(e=.5,t=1,i=32,r=1,n=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:n,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],c=[],u=[],f=[];let d=e;const h=(t-e)/r,l=new O,p=new Be;for(let x=0;x<=r;x++){for(let m=0;m<=i;m++){const g=n+m/i*o;l.x=d*Math.cos(g),l.y=d*Math.sin(g),c.push(l.x,l.y,l.z),u.push(0,0,1),p.x=(l.x/t+1)/2,p.y=(l.y/t+1)/2,f.push(p.x,p.y)}d+=h}for(let x=0;x<r;x++){const m=x*(i+1);for(let g=0;g<i;g++){const y=g+m,b=y,A=y+i+1,v=y+i+2,M=y+1;a.push(b,A,M),a.push(A,v,M)}}this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Oa extends _t{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let u=0;const f=[],d=new O,h=new O,l=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){const y=[],b=g/i;let A=0;g===0&&o===0?A=.5/t:g===i&&c===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const M=v/t;d.x=-e*Math.cos(r+M*n)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+M*n)*Math.sin(o+b*a),p.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(M+A,1-b),y.push(u++)}f.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){const b=f[g][y+1],A=f[g][y],v=f[g+1][y],M=f[g+1][y+1];(g!==0||o>0)&&l.push(b,A,M),(g!==i-1||c<Math.PI)&&l.push(A,v,M)}this.setIndex(l),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $i extends wn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ml,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ba,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bf extends wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ef extends wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ba extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const bs=new at,Ro=new O,Po=new O;class Il{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ro.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ro),Po.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Po),t.updateMatrixWorld(),bs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Do=new at,Fi=new O,Es=new O;class Tf extends Il{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Fi.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fi),Es.copy(i.position),Es.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Es),i.updateMatrixWorld(),r.makeTranslation(-Fi.x,-Fi.y,-Fi.z),Do.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,i.coordinateSystem,i.reversedDepth)}}class za extends Ba{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ul extends El{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=u*this.view.offsetX,o=n+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(n,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Af extends Il{constructor(){super(new Ul(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wf extends Ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Af}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cf extends Ba{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rf extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Pf extends Cl{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ne(i),r=new Ne(r);const n=t/2,o=e/t,a=e/2,c=[],u=[];for(let h=0,l=0,p=-a;h<=t;h++,p+=o){c.push(-a,0,p,a,0,p),c.push(p,0,-a,p,0,a);const x=h===n?i:r;x.toArray(u,l),l+=3,x.toArray(u,l),l+=3,x.toArray(u,l),l+=3,x.toArray(u,l),l+=3}const f=new _t;f.setAttribute("position",new ct(c,3)),f.setAttribute("color",new ct(u,3));const d=new Fa({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Df extends Cl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new _t;r.setAttribute("position",new ct(t,3)),r.setAttribute("color",new ct(i,3));const n=new Fa({vertexColors:!0,toneMapped:!1});super(r,n),this.type="AxesHelper"}setColors(e,t,i){const r=new Ne,n=this.geometry.attributes.color.array;return r.set(e),r.toArray(n,0),r.toArray(n,3),r.set(t),r.toArray(n,6),r.toArray(n,9),r.set(i),r.toArray(n,12),r.toArray(n,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Lo(s,e,t,i){const r=Lf(i);switch(t){case hl:return s*e;case pl:return s*e/r.components*r.byteLength;case wa:return s*e/r.components*r.byteLength;case Ca:return s*e*2/r.components*r.byteLength;case Ra:return s*e*2/r.components*r.byteLength;case dl:return s*e*3/r.components*r.byteLength;case Yt:return s*e*4/r.components*r.byteLength;case Pa:return s*e*4/r.components*r.byteLength;case Ar:case wr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Cr:case Rr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ws:case Ys:return Math.max(s,16)*Math.max(e,8)/4;case ks:case Xs:return Math.max(s,8)*Math.max(e,8)/2;case qs:case $s:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ks:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case js:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ea:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ta:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case na:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ia:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ra:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case aa:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case oa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case la:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ca:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case fa:case ua:case ha:return Math.ceil(s/4)*Math.ceil(e/4)*16;case da:case pa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ma:case xa:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lf(s){switch(s){case en:case ll:return{byteLength:1,components:1};case Bi:case cl:case Mi:return{byteLength:2,components:1};case Ta:case Aa:return{byteLength:2,components:4};case Gn:case Ea:case un:return{byteLength:4,components:1};case fl:case ul:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);function Fl(){let s=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function If(s){const e=new WeakMap;function t(a,c){const u=a.array,f=a.usage,d=u.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,u,f),a.onUploadCallback();let l;if(u instanceof Float32Array)l=s.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)l=s.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?l=s.HALF_FLOAT:l=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)l=s.SHORT;else if(u instanceof Uint32Array)l=s.UNSIGNED_INT;else if(u instanceof Int32Array)l=s.INT;else if(u instanceof Int8Array)l=s.BYTE;else if(u instanceof Uint8Array)l=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)l=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:l,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,u){const f=c.array,d=c.updateRanges;if(s.bindBuffer(u,a),d.length===0)s.bufferSubData(u,0,f);else{d.sort((l,p)=>l.start-p.start);let h=0;for(let l=1;l<d.length;l++){const p=d[h],x=d[l];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++h,d[h]=x)}d.length=h+1;for(let l=0,p=d.length;l<p;l++){const x=d[l];s.bufferSubData(u,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function n(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,c),u.version=a.version}}return{get:r,remove:n,update:o}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
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
#endif`,Nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vf=`#ifdef USE_AOMAP
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
#endif`,Gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hf=`#ifdef USE_BATCHING
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
#endif`,kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iu=`#define PI 3.141592653589793
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
} // validated`,ru=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,su=`vec3 transformedNormal = objectNormal;
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
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fu="gl_FragColor = linearToOutputTexel( gl_FragColor );",uu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
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
#endif`,gu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Su=`#ifdef USE_GRADIENTMAP
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
}`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
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
#endif`,Au=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ru=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Du=`PhysicalMaterial material;
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
#endif`,Lu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Iu=`
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
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ou=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ku=`#if defined( USE_POINTS_UV )
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
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ku=`#ifdef USE_MORPHTARGETS
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
#endif`,Zu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ju=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nh=`#ifdef USE_NORMALMAP
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
#endif`,ih=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ah=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ch=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ph=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vh=`float getShadowMask() {
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
}`,_h=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mh=`#ifdef USE_SKINNING
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
#endif`,Sh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
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
#endif`,bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Th=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ah=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wh=`#ifdef USE_TRANSMISSION
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
#endif`,Ch=`#ifdef USE_TRANSMISSION
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
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ih=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uh=`uniform sampler2D t2D;
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
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zh=`#include <common>
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
}`,Vh=`#if DEPTH_PACKING == 3200
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
}`,Gh=`#define DISTANCE
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
}`,Hh=`#define DISTANCE
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
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`uniform float scale;
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
}`,Yh=`uniform vec3 diffuse;
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
}`,qh=`#include <common>
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
}`,$h=`uniform vec3 diffuse;
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
}`,Kh=`#define LAMBERT
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
}`,Zh=`#define LAMBERT
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
}`,Jh=`#define MATCAP
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
}`,jh=`#define MATCAP
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
}`,Qh=`#define NORMAL
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
}`,ed=`#define NORMAL
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
}`,td=`#define PHONG
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
}`,nd=`#define PHONG
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
}`,id=`#define STANDARD
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
}`,rd=`#define STANDARD
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
}`,sd=`#define TOON
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
}`,ad=`#define TOON
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
}`,od=`uniform float size;
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
}`,ld=`uniform vec3 diffuse;
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
}`,cd=`#include <common>
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
}`,fd=`uniform vec3 color;
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
}`,ud=`uniform float rotation;
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
}`,hd=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Uf,alphahash_pars_fragment:Ff,alphamap_fragment:Nf,alphamap_pars_fragment:Of,alphatest_fragment:Bf,alphatest_pars_fragment:zf,aomap_fragment:Vf,aomap_pars_fragment:Gf,batching_pars_vertex:Hf,batching_vertex:kf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:Yf,iridescence_fragment:qf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:Zf,clipping_planes_pars_vertex:Jf,clipping_planes_vertex:jf,color_fragment:Qf,color_pars_fragment:eu,color_pars_vertex:tu,color_vertex:nu,common:iu,cube_uv_reflection_fragment:ru,defaultnormal_vertex:su,displacementmap_pars_vertex:au,displacementmap_vertex:ou,emissivemap_fragment:lu,emissivemap_pars_fragment:cu,colorspace_fragment:fu,colorspace_pars_fragment:uu,envmap_fragment:hu,envmap_common_pars_fragment:du,envmap_pars_fragment:pu,envmap_pars_vertex:mu,envmap_physical_pars_fragment:Au,envmap_vertex:xu,fog_vertex:gu,fog_pars_vertex:vu,fog_fragment:_u,fog_pars_fragment:Mu,gradientmap_pars_fragment:Su,lightmap_pars_fragment:yu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:Eu,lights_pars_begin:Tu,lights_toon_fragment:wu,lights_toon_pars_fragment:Cu,lights_phong_fragment:Ru,lights_phong_pars_fragment:Pu,lights_physical_fragment:Du,lights_physical_pars_fragment:Lu,lights_fragment_begin:Iu,lights_fragment_maps:Uu,lights_fragment_end:Fu,logdepthbuf_fragment:Nu,logdepthbuf_pars_fragment:Ou,logdepthbuf_pars_vertex:Bu,logdepthbuf_vertex:zu,map_fragment:Vu,map_pars_fragment:Gu,map_particle_fragment:Hu,map_particle_pars_fragment:ku,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphinstance_vertex:Yu,morphcolor_vertex:qu,morphnormal_vertex:$u,morphtarget_pars_vertex:Ku,morphtarget_vertex:Zu,normal_fragment_begin:Ju,normal_fragment_maps:ju,normal_pars_fragment:Qu,normal_pars_vertex:eh,normal_vertex:th,normalmap_pars_fragment:nh,clearcoat_normal_fragment_begin:ih,clearcoat_normal_fragment_maps:rh,clearcoat_pars_fragment:sh,iridescence_pars_fragment:ah,opaque_fragment:oh,packing:lh,premultiplied_alpha_fragment:ch,project_vertex:fh,dithering_fragment:uh,dithering_pars_fragment:hh,roughnessmap_fragment:dh,roughnessmap_pars_fragment:ph,shadowmap_pars_fragment:mh,shadowmap_pars_vertex:xh,shadowmap_vertex:gh,shadowmask_pars_fragment:vh,skinbase_vertex:_h,skinning_pars_vertex:Mh,skinning_vertex:Sh,skinnormal_vertex:yh,specularmap_fragment:bh,specularmap_pars_fragment:Eh,tonemapping_fragment:Th,tonemapping_pars_fragment:Ah,transmission_fragment:wh,transmission_pars_fragment:Ch,uv_pars_fragment:Rh,uv_pars_vertex:Ph,uv_vertex:Dh,worldpos_vertex:Lh,background_vert:Ih,background_frag:Uh,backgroundCube_vert:Fh,backgroundCube_frag:Nh,cube_vert:Oh,cube_frag:Bh,depth_vert:zh,depth_frag:Vh,distanceRGBA_vert:Gh,distanceRGBA_frag:Hh,equirect_vert:kh,equirect_frag:Wh,linedashed_vert:Xh,linedashed_frag:Yh,meshbasic_vert:qh,meshbasic_frag:$h,meshlambert_vert:Kh,meshlambert_frag:Zh,meshmatcap_vert:Jh,meshmatcap_frag:jh,meshnormal_vert:Qh,meshnormal_frag:ed,meshphong_vert:td,meshphong_frag:nd,meshphysical_vert:id,meshphysical_frag:rd,meshtoon_vert:sd,meshtoon_frag:ad,points_vert:od,points_frag:ld,shadow_vert:cd,shadow_frag:fd,sprite_vert:ud,sprite_frag:hd},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Jt={basic:{uniforms:Tt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Tt([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Tt([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Jt.physical={uniforms:Tt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Er={r:0,b:0,g:0},Fn=new tn,dd=new at;function pd(s,e,t,i,r,n,o){const a=new Ne(0);let c=n===!0?0:1,u,f,d=null,h=0,l=null;function p(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function x(b){let A=!1;const v=p(b);v===null?g(a,c):v&&v.isColor&&(g(v,1),A=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,A){const v=p(A);v&&(v.isCubeTexture||v.mapping===Vr)?(f===void 0&&(f=new At(new qi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:vi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Fn.copy(A.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(dd.makeRotationFromEuler(Fn)),f.material.toneMapped=Ke.getTransfer(v.colorSpace)!==Qe,(d!==v||h!==v.version||l!==s.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,l=s.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new At(new yi(2,2),new pn({name:"BackgroundMaterial",uniforms:vi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||l!==s.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,l=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function g(b,A){b.getRGB(Er,bl(s)),i.buffers.color.setClear(Er.r,Er.g,Er.b,A,o)}function y(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),c=A,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,g(a,c)},render:x,addToRenderList:m,dispose:y}}function md(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=h(null);let n=r,o=!1;function a(_,w,R,L,N){let F=!1;const V=d(L,R,w);n!==V&&(n=V,u(n.object)),F=l(_,L,R,N),F&&p(_,L,R,N),N!==null&&e.update(N,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,A(_,w,R,L),N!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return s.createVertexArray()}function u(_){return s.bindVertexArray(_)}function f(_){return s.deleteVertexArray(_)}function d(_,w,R){const L=R.wireframe===!0;let N=i[_.id];N===void 0&&(N={},i[_.id]=N);let F=N[w.id];F===void 0&&(F={},N[w.id]=F);let V=F[L];return V===void 0&&(V=h(c()),F[L]=V),V}function h(_){const w=[],R=[],L=[];for(let N=0;N<t;N++)w[N]=0,R[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:R,attributeDivisors:L,object:_,attributes:{},index:null}}function l(_,w,R,L){const N=n.attributes,F=w.attributes;let V=0;const k=R.getAttributes();for(const G in k)if(k[G].location>=0){const Q=N[G];let he=F[G];if(he===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(he=_.instanceColor)),Q===void 0||Q.attribute!==he||he&&Q.data!==he.data)return!0;V++}return n.attributesNum!==V||n.index!==L}function p(_,w,R,L){const N={},F=w.attributes;let V=0;const k=R.getAttributes();for(const G in k)if(k[G].location>=0){let Q=F[G];Q===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor));const he={};he.attribute=Q,Q&&Q.data&&(he.data=Q.data),N[G]=he,V++}n.attributes=N,n.attributesNum=V,n.index=L}function x(){const _=n.newAttributes;for(let w=0,R=_.length;w<R;w++)_[w]=0}function m(_){g(_,0)}function g(_,w){const R=n.newAttributes,L=n.enabledAttributes,N=n.attributeDivisors;R[_]=1,L[_]===0&&(s.enableVertexAttribArray(_),L[_]=1),N[_]!==w&&(s.vertexAttribDivisor(_,w),N[_]=w)}function y(){const _=n.newAttributes,w=n.enabledAttributes;for(let R=0,L=w.length;R<L;R++)w[R]!==_[R]&&(s.disableVertexAttribArray(R),w[R]=0)}function b(_,w,R,L,N,F,V){V===!0?s.vertexAttribIPointer(_,w,R,N,F):s.vertexAttribPointer(_,w,R,L,N,F)}function A(_,w,R,L){x();const N=L.attributes,F=R.getAttributes(),V=w.defaultAttributeValues;for(const k in F){const G=F[k];if(G.location>=0){let K=N[k];if(K===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){const Q=K.normalized,he=K.itemSize,ye=e.get(K);if(ye===void 0)continue;const Ie=ye.buffer,Xe=ye.type,ke=ye.bytesPerElement,W=Xe===s.INT||Xe===s.UNSIGNED_INT||K.gpuType===Ea;if(K.isInterleavedBufferAttribute){const Z=K.data,re=Z.stride,we=K.offset;if(Z.isInstancedInterleavedBuffer){for(let me=0;me<G.locationSize;me++)g(G.location+me,Z.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<G.locationSize;me++)m(G.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let me=0;me<G.locationSize;me++)b(G.location+me,he/G.locationSize,Xe,Q,re*ke,(we+he/G.locationSize*me)*ke,W)}else{if(K.isInstancedBufferAttribute){for(let Z=0;Z<G.locationSize;Z++)g(G.location+Z,K.meshPerAttribute);_.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Z=0;Z<G.locationSize;Z++)m(G.location+Z);s.bindBuffer(s.ARRAY_BUFFER,Ie);for(let Z=0;Z<G.locationSize;Z++)b(G.location+Z,he/G.locationSize,Xe,Q,he*ke,he/G.locationSize*Z*ke,W)}}else if(V!==void 0){const Q=V[k];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(G.location,Q);break;case 3:s.vertexAttrib3fv(G.location,Q);break;case 4:s.vertexAttrib4fv(G.location,Q);break;default:s.vertexAttrib1fv(G.location,Q)}}}}y()}function v(){T();for(const _ in i){const w=i[_];for(const R in w){const L=w[R];for(const N in L)f(L[N].object),delete L[N];delete w[R]}delete i[_]}}function M(_){if(i[_.id]===void 0)return;const w=i[_.id];for(const R in w){const L=w[R];for(const N in L)f(L[N].object),delete L[N];delete w[R]}delete i[_.id]}function E(_){for(const w in i){const R=i[w];if(R[_.id]===void 0)continue;const L=R[_.id];for(const N in L)f(L[N].object),delete L[N];delete R[_.id]}}function T(){S(),o=!0,n!==r&&(n=r,u(n.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:M,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function xd(s,e,t){let i;function r(u){i=u}function n(u,f){s.drawArrays(i,u,f),t.update(f,i,1)}function o(u,f,d){d!==0&&(s.drawArraysInstanced(i,u,f,d),t.update(f,i,d))}function a(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,d);let l=0;for(let p=0;p<d;p++)l+=f[p];t.update(l,i,1)}function c(u,f,d,h){if(d===0)return;const l=e.get("WEBGL_multi_draw");if(l===null)for(let p=0;p<u.length;p++)o(u[p],f[p],h[p]);else{l.multiDrawArraysInstancedWEBGL(i,u,0,f,0,h,0,d);let p=0;for(let x=0;x<d;x++)p+=f[x]*h[x];t.update(p,i,1)}}this.setMode=r,this.render=n,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function gd(s,e,t,i){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(E){return!(E!==Yt&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==en&&i.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==un&&!T)}function c(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(Fe("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),l=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,M=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:l,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:v,maxSamples:M}}function vd(s){const e=this;let t=null,i=0,r=!1,n=!1;const o=new On,a=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const l=d.length!==0||h||i!==0||r;return r=h,i=d.length,l},this.beginShadows=function(){n=!0,f(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,l){const p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!r||p===null||p.length===0||n&&!m)n?f(null):u();else{const y=n?0:i,b=y*4;let A=g.clippingState||null;c.value=A,A=f(p,h,b,l);for(let v=0;v!==b;++v)A[v]=t[v];g.clippingState=A,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,l,p){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,p!==!0||m===null){const g=l+x*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,A=l;b!==x;++b,A+=4)o.copy(d[b]).applyMatrix4(y,a),o.normal.toArray(m,A),m[A+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _d(s){let e=new WeakMap;function t(o,a){return a===zs?o.mapping=mi:a===Vs&&(o.mapping=xi),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zs||a===Vs)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new hf(c.height);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}const bn=4,Io=[.125,.215,.35,.446,.526,.582],zn=20,Md=256,Ni=new Ul,Uo=new Ne;let Ts=null,As=0,ws=0,Cs=!1;const Sd=new O;class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,n={}){const{size:o=256,position:a=Sd}=n;Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ts,As,ws),this._renderer.xr.enabled=Cs,e.scissorTest=!1,li(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===mi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:Mi,format:Yt,colorSpace:gi,depthBuffer:!1},r=No(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=No(e,t,i);const{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yd(n)),this._blurMaterial=Ed(n,e,t)}return r}_compileMaterial(e){const t=new At(new _t,e);this._renderer.compile(t,Ni)}_sceneToCubeUV(e,t,i,r,n){const c=new Ut(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,l=d.toneMapping;d.getClearColor(Uo),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new qi,new Gr({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let g=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,g=!0):(m.color.copy(Uo),g=!0);for(let b=0;b<6;b++){const A=b%3;A===0?(c.up.set(0,u[b],0),c.position.set(n.x,n.y,n.z),c.lookAt(n.x+f[b],n.y,n.z)):A===1?(c.up.set(0,0,u[b]),c.position.set(n.x,n.y,n.z),c.lookAt(n.x,n.y+f[b],n.z)):(c.up.set(0,u[b],0),c.position.set(n.x,n.y,n.z),c.lookAt(n.x,n.y,n.z+f[b]));const v=this._cubeSize;li(r,A*v,b>2?v:0,v,v),d.setRenderTarget(r),g&&d.render(x,c),d.render(e,c)}d.toneMapping=l,d.autoClear=h,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===mi||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oo());const n=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=n;const a=n.uniforms;a.envMap.value=e;const c=this._cubeSize;li(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,Ni)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let n=1;n<r;n++)this._applyGGXFilter(e,n-1,n);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,n=this._pingPongRenderTarget;if(this._ggxMaterial===null){const y=3*Math.max(this._cubeSize,16),b=4*this._cubeSize;this._ggxMaterial=bd(this._lodMax,y,b)}const o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,u=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(u*u-f*f),h=.05+u*.95,l=d*h,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-bn?i-p+bn:0),g=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=l,c.mipInt.value=p-t,li(n,m,g,3*x,2*x),r.setRenderTarget(n),r.render(a,Ni),c.envMap.value=n.texture,c.roughness.value=0,c.mipInt.value=p-i,li(e,m,g,3*x,2*x),r.setRenderTarget(e),r.render(a,Ni)}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");const f=3,d=this._lodMeshes[r];d.material=u;const h=u.uniforms,l=this._sizeLods[i]-1,p=isFinite(n)?Math.PI/(2*l):2*Math.PI/(2*zn-1),x=n/p,m=isFinite(n)?1+Math.floor(f*x):zn;m>zn&&Fe(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zn}`);const g=[];let y=0;for(let E=0;E<zn;++E){const T=E/x,S=Math.exp(-T*T/2);g.push(S),E===0?y+=S:E<m&&(y+=2*S)}for(let E=0;E<g.length;E++)g[E]=g[E]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:b}=this;h.dTheta.value=p,h.mipInt.value=b-i;const A=this._sizeLods[r],v=3*A*(r>b-bn?r-b+bn:0),M=4*(this._cubeSize-A);li(t,v,M,3*A,2*A),c.setRenderTarget(t),c.render(d,Ni)}}function yd(s){const e=[],t=[],i=[];let r=s;const n=s-bn+1+Io.length;for(let o=0;o<n;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>s-bn?c=Io[o-s+bn-1]:o===0&&(c=0),t.push(c);const u=1/(a-2),f=-u,d=1+u,h=[f,f,d,f,d,d,f,f,d,d,f,d],l=6,p=6,x=3,m=2,g=1,y=new Float32Array(x*p*l),b=new Float32Array(m*p*l),A=new Float32Array(g*p*l);for(let M=0;M<l;M++){const E=M%3*2/3-1,T=M>2?0:-1,S=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];y.set(S,x*p*M),b.set(h,m*p*M);const _=[M,M,M,M,M,M];A.set(_,g*p*M)}const v=new _t;v.setAttribute("position",new $t(y,x)),v.setAttribute("uv",new $t(b,m)),v.setAttribute("faceIndex",new $t(A,g)),i.push(new At(v,null)),r>bn&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function No(s,e,t){const i=new Hn(s,e,t);return i.texture.mapping=Vr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function li(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function bd(s,e,t){return new pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Md,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Ed(s,e,t){const i=new Float32Array(zn),r=new O(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Oo(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wr(),fragmentShader:`

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
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Bo(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hn,depthTest:!1,depthWrite:!1})}function Wr(){return`

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
	`}function Td(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===zs||c===Vs,f=c===mi||c===xi;if(u||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new Fo(s)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const l=a.image;return u&&l&&l.height>0||f&&l&&r(l)?(t===null&&(t=new Fo(s)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",n),d.texture):null}}}return a}function r(a){let c=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&c++;return c===u}function n(a){const c=a.target;c.removeEventListener("dispose",n);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Ad(s){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=s.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hi("WebGLRenderer: "+i+" extension not supported."),r}}}function wd(s,e,t,i){const r={},n=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete r[h.id];const l=n.get(h);l&&(e.remove(l),n.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const l in h)e.update(h[l],s.ARRAY_BUFFER)}function u(d){const h=[],l=d.index,p=d.attributes.position;let x=0;if(l!==null){const y=l.array;x=l.version;for(let b=0,A=y.length;b<A;b+=3){const v=y[b+0],M=y[b+1],E=y[b+2];h.push(v,M,M,E,E,v)}}else if(p!==void 0){const y=p.array;x=p.version;for(let b=0,A=y.length/3-1;b<A;b+=3){const v=b+0,M=b+1,E=b+2;h.push(v,M,M,E,E,v)}}else return;const m=new(gl(h)?yl:Sl)(h,1);m.version=x;const g=n.get(d);g&&e.remove(g),n.set(d,m)}function f(d){const h=n.get(d);if(h){const l=d.index;l!==null&&h.version<l.version&&u(d)}else u(d);return n.get(d)}return{get:a,update:c,getWireframeAttribute:f}}function Cd(s,e,t){let i;function r(h){i=h}let n,o;function a(h){n=h.type,o=h.bytesPerElement}function c(h,l){s.drawElements(i,l,n,h*o),t.update(l,i,1)}function u(h,l,p){p!==0&&(s.drawElementsInstanced(i,l,n,h*o,p),t.update(l,i,p))}function f(h,l,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,l,0,n,h,0,p);let m=0;for(let g=0;g<p;g++)m+=l[g];t.update(m,i,1)}function d(h,l,p,x){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)u(h[g]/o,l[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,l,0,n,h,0,x,0,p);let g=0;for(let y=0;y<p;y++)g+=l[y]*x[y];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Rd(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(n/3);break;case s.LINES:t.lines+=a*(n/2);break;case s.LINE_STRIP:t.lines+=a*(n-1);break;case s.LINE_LOOP:t.lines+=a*n;break;case s.POINTS:t.points+=a*n;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Pd(s,e,t){const i=new WeakMap,r=new tt;function n(o,a,c){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let _=function(){T.dispose(),i.delete(a),a.removeEventListener("dispose",_)};var l=_;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let A=0;p===!0&&(A=1),x===!0&&(A=2),m===!0&&(A=3);let v=a.attributes.position.count*A,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*M*4*d),T=new vl(E,v,M,d);T.type=un,T.needsUpdate=!0;const S=A*4;for(let w=0;w<d;w++){const R=g[w],L=y[w],N=b[w],F=v*M*4*w;for(let V=0;V<R.count;V++){const k=V*S;p===!0&&(r.fromBufferAttribute(R,V),E[F+k+0]=r.x,E[F+k+1]=r.y,E[F+k+2]=r.z,E[F+k+3]=0),x===!0&&(r.fromBufferAttribute(L,V),E[F+k+4]=r.x,E[F+k+5]=r.y,E[F+k+6]=r.z,E[F+k+7]=0),m===!0&&(r.fromBufferAttribute(N,V),E[F+k+8]=r.x,E[F+k+9]=r.y,E[F+k+10]=r.z,E[F+k+11]=N.itemSize===4?r.w:1)}}h={count:d,texture:T,size:new Be(v,M)},i.set(a,h),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let m=0;m<u.length;m++)p+=u[m];const x=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",u)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:n}}function Dd(s,e,t,i){let r=new WeakMap;function n(c){const u=i.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:n,dispose:o}}const Nl=new yt,zo=new Dl(1,1),Ol=new vl,Bl=new $c,zl=new Tl,Vo=[],Go=[],Ho=new Float32Array(16),ko=new Float32Array(9),Wo=new Float32Array(4);function bi(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=Vo[r];if(n===void 0&&(n=new Float32Array(r),Vo[r]=n),e!==0){i.toArray(n,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(n,a)}return n}function xt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function gt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Xr(s,e){let t=Go[e];t===void 0&&(t=new Int32Array(e),Go[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Ld(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Id(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2fv(this.addr,e),gt(t,e)}}function Ud(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;s.uniform3fv(this.addr,e),gt(t,e)}}function Fd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4fv(this.addr,e),gt(t,e)}}function Nd(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,i))return;Wo.set(i),s.uniformMatrix2fv(this.addr,!1,Wo),gt(t,i)}}function Od(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,i))return;ko.set(i),s.uniformMatrix3fv(this.addr,!1,ko),gt(t,i)}}function Bd(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(xt(t,i))return;Ho.set(i),s.uniformMatrix4fv(this.addr,!1,Ho),gt(t,i)}}function zd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Vd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2iv(this.addr,e),gt(t,e)}}function Gd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3iv(this.addr,e),gt(t,e)}}function Hd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4iv(this.addr,e),gt(t,e)}}function kd(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Wd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;s.uniform2uiv(this.addr,e),gt(t,e)}}function Xd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;s.uniform3uiv(this.addr,e),gt(t,e)}}function Yd(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;s.uniform4uiv(this.addr,e),gt(t,e)}}function qd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let n;this.type===s.SAMPLER_2D_SHADOW?(zo.compareFunction=xl,n=zo):n=Nl,t.setTexture2D(e||n,r)}function $d(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bl,r)}function Kd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zl,r)}function Zd(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ol,r)}function Jd(s){switch(s){case 5126:return Ld;case 35664:return Id;case 35665:return Ud;case 35666:return Fd;case 35674:return Nd;case 35675:return Od;case 35676:return Bd;case 5124:case 35670:return zd;case 35667:case 35671:return Vd;case 35668:case 35672:return Gd;case 35669:case 35673:return Hd;case 5125:return kd;case 36294:return Wd;case 36295:return Xd;case 36296:return Yd;case 35678:case 36198:case 36298:case 36306:case 35682:return qd;case 35679:case 36299:case 36307:return $d;case 35680:case 36300:case 36308:case 36293:return Kd;case 36289:case 36303:case 36311:case 36292:return Zd}}function jd(s,e){s.uniform1fv(this.addr,e)}function Qd(s,e){const t=bi(e,this.size,2);s.uniform2fv(this.addr,t)}function ep(s,e){const t=bi(e,this.size,3);s.uniform3fv(this.addr,t)}function tp(s,e){const t=bi(e,this.size,4);s.uniform4fv(this.addr,t)}function np(s,e){const t=bi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ip(s,e){const t=bi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rp(s,e){const t=bi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sp(s,e){s.uniform1iv(this.addr,e)}function ap(s,e){s.uniform2iv(this.addr,e)}function op(s,e){s.uniform3iv(this.addr,e)}function lp(s,e){s.uniform4iv(this.addr,e)}function cp(s,e){s.uniform1uiv(this.addr,e)}function fp(s,e){s.uniform2uiv(this.addr,e)}function up(s,e){s.uniform3uiv(this.addr,e)}function hp(s,e){s.uniform4uiv(this.addr,e)}function dp(s,e,t){const i=this.cache,r=e.length,n=Xr(t,r);xt(i,n)||(s.uniform1iv(this.addr,n),gt(i,n));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Nl,n[o])}function pp(s,e,t){const i=this.cache,r=e.length,n=Xr(t,r);xt(i,n)||(s.uniform1iv(this.addr,n),gt(i,n));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bl,n[o])}function mp(s,e,t){const i=this.cache,r=e.length,n=Xr(t,r);xt(i,n)||(s.uniform1iv(this.addr,n),gt(i,n));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zl,n[o])}function xp(s,e,t){const i=this.cache,r=e.length,n=Xr(t,r);xt(i,n)||(s.uniform1iv(this.addr,n),gt(i,n));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ol,n[o])}function gp(s){switch(s){case 5126:return jd;case 35664:return Qd;case 35665:return ep;case 35666:return tp;case 35674:return np;case 35675:return ip;case 35676:return rp;case 5124:case 35670:return sp;case 35667:case 35671:return ap;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return fp;case 36295:return up;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return xp}}class vp{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jd(t.type)}}class _p{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gp(t.type)}}class Mp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const a=r[n];a.setValue(e,t[a.id],i)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function Xo(s,e){s.seq.push(e),s.map[e.id]=e}function Sp(s,e,t){const i=s.name,r=i.length;for(Rs.lastIndex=0;;){const n=Rs.exec(i),o=Rs.lastIndex;let a=n[1];const c=n[2]==="]",u=n[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){Xo(t,u===void 0?new vp(a,s,e):new _p(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new Mp(a),Xo(t,d)),t=d}}}class Pr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);Sp(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const a=t[n],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Yo(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const yp=37297;let bp=0;function Ep(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const qo=new Oe;function Tp(s){Ke._getMatrix(qo,Ke.workingColorSpace,s);const e=`mat3( ${qo.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(s)){case Lr:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function $o(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=(s.getShaderInfoLog(e)||"").trim();if(i&&n==="")return"";const o=/ERROR: 0:(\d+)/.exec(n);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+n+`

`+Ep(s.getShaderSource(e),a)}else return n}function Ap(s,e){const t=Tp(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wp(s,e){let t;switch(e){case bc:t="Linear";break;case Ec:t="Reinhard";break;case Tc:t="Cineon";break;case al:t="ACESFilmic";break;case wc:t="AgX";break;case Cc:t="Neutral";break;case Ac:t="Custom";break;default:Fe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new O;function Cp(){Ke.getLuminanceCoefficients(Tr);const s=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oi).join(`
`)}function Pp(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Dp(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),o=n.name;let a=1;n.type===s.FLOAT_MAT2&&(a=2),n.type===s.FLOAT_MAT3&&(a=3),n.type===s.FLOAT_MAT4&&(a=4),t[o]={type:n.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Oi(s){return s!==""}function Ko(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zo(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ma(s){return s.replace(Lp,Up)}const Ip=new Map;function Up(s,e){let t=ze[e];if(t===void 0){const i=Ip.get(e);if(i!==void 0)t=ze[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ma(t)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(s){return s.replace(Fp,Np)}function Np(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function jo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Op(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===rl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===sl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case mi:case xi:e="ENVMAP_TYPE_CUBE";break;case Vr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Vp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ba:e="ENVMAP_BLENDING_MULTIPLY";break;case Sc:e="ENVMAP_BLENDING_MIX";break;case yc:e="ENVMAP_BLENDING_ADD";break}return e}function Gp(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Hp(s,e,t,i){const r=s.getContext(),n=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Op(t),u=Bp(t),f=zp(t),d=Vp(t),h=Gp(t),l=Rp(t),p=Pp(n),x=r.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Oi).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Oi).join(`
`),g.length>0&&(g+=`
`)):(m=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oi).join(`
`),g=[jo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?ze.tonemapping_pars_fragment:"",t.toneMapping!==En?wp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ap("linearToOutputTexel",t.outputColorSpace),Cp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oi).join(`
`)),o=Ma(o),o=Ko(o,t),o=Zo(o,t),a=Ma(a),a=Ko(a,t),a=Zo(a,t),o=Jo(o),a=Jo(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const b=y+m+o,A=y+g+a,v=Yo(r,r.VERTEX_SHADER,b),M=Yo(r,r.FRAGMENT_SHADER,A);r.attachShader(x,v),r.attachShader(x,M),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function E(w){if(s.debug.checkShaderErrors){const R=r.getProgramInfoLog(x)||"",L=r.getShaderInfoLog(v)||"",N=r.getShaderInfoLog(M)||"",F=R.trim(),V=L.trim(),k=N.trim();let G=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,x,v,M);else{const Q=$o(r,v,"vertex"),he=$o(r,M,"fragment");ht("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+Q+`
`+he)}else F!==""?Fe("WebGLProgram: Program Info Log:",F):(V===""||k==="")&&(K=!1);K&&(w.diagnostics={runnable:G,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:k,prefix:g}})}r.deleteShader(v),r.deleteShader(M),T=new Pr(r,x),S=Dp(r,x)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(x,yp)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=M,this}let kp=0;class Wp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Xp(e),t.set(e,i)),i}}class Xp{constructor(e){this.id=kp++,this.code=e,this.usedTimes=0}}function Yp(s,e,t,i,r,n,o){const a=new _l,c=new Wp,u=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let l=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return u.add(S),S===0?"uv":`uv${S}`}function m(S,_,w,R,L){const N=R.fog,F=L.geometry,V=S.isMeshStandardMaterial?R.environment:null,k=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),G=k&&k.mapping===Vr?k.image.height:null,K=p[S.type];S.precision!==null&&(l=r.getMaxPrecision(S.precision),l!==S.precision&&Fe("WebGLProgram.getParameters:",S.precision,"not supported, using",l,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,he=Q!==void 0?Q.length:0;let ye=0;F.morphAttributes.position!==void 0&&(ye=1),F.morphAttributes.normal!==void 0&&(ye=2),F.morphAttributes.color!==void 0&&(ye=3);let Ie,Xe,ke,W;if(K){const Je=Jt[K];Ie=Je.vertexShader,Xe=Je.fragmentShader}else Ie=S.vertexShader,Xe=S.fragmentShader,c.update(S),ke=c.getVertexShaderID(S),W=c.getFragmentShaderID(S);const Z=s.getRenderTarget(),re=s.state.buffers.depth.getReversed(),we=L.isInstancedMesh===!0,me=L.isBatchedMesh===!0,Re=!!S.map,qe=!!S.matcap,Ve=!!k,it=!!S.aoMap,I=!!S.lightMap,Ge=!!S.bumpMap,He=!!S.normalMap,Ze=!!S.displacementMap,fe=!!S.emissiveMap,rt=!!S.metalnessMap,Me=!!S.roughnessMap,De=S.anisotropy>0,D=S.clearcoat>0,C=S.dispersion>0,H=S.iridescence>0,$=S.sheen>0,j=S.transmission>0,q=De&&!!S.anisotropyMap,ve=D&&!!S.clearcoatMap,se=D&&!!S.clearcoatNormalMap,be=D&&!!S.clearcoatRoughnessMap,_e=H&&!!S.iridescenceMap,ee=H&&!!S.iridescenceThicknessMap,ie=$&&!!S.sheenColorMap,Ce=$&&!!S.sheenRoughnessMap,Te=!!S.specularMap,de=!!S.specularColorMap,Le=!!S.specularIntensityMap,U=j&&!!S.transmissionMap,ce=j&&!!S.thicknessMap,ae=!!S.gradientMap,oe=!!S.alphaMap,te=S.alphaTest>0,J=!!S.alphaHash,xe=!!S.extensions;let Ue=En;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ue=s.toneMapping);const st={shaderID:K,shaderType:S.type,shaderName:S.name,vertexShader:Ie,fragmentShader:Xe,defines:S.defines,customVertexShaderID:ke,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:l,batching:me,batchingColor:me&&L._colorsTexture!==null,instancing:we,instancingColor:we&&L.instanceColor!==null,instancingMorph:we&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Z===null?s.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:gi,alphaToCoverage:!!S.alphaToCoverage,map:Re,matcap:qe,envMap:Ve,envMapMode:Ve&&k.mapping,envMapCubeUVHeight:G,aoMap:it,lightMap:I,bumpMap:Ge,normalMap:He,displacementMap:h&&Ze,emissiveMap:fe,normalMapObjectSpace:He&&S.normalMapType===Lc,normalMapTangentSpace:He&&S.normalMapType===ml,metalnessMap:rt,roughnessMap:Me,anisotropy:De,anisotropyMap:q,clearcoat:D,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:C,iridescence:H,iridescenceMap:_e,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:ie,sheenRoughnessMap:Ce,specularMap:Te,specularColorMap:de,specularIntensityMap:Le,transmission:j,transmissionMap:U,thicknessMap:ce,gradientMap:ae,opaque:S.transparent===!1&&S.blending===hi&&S.alphaToCoverage===!1,alphaMap:oe,alphaTest:te,alphaHash:J,combine:S.combine,mapUv:Re&&x(S.map.channel),aoMapUv:it&&x(S.aoMap.channel),lightMapUv:I&&x(S.lightMap.channel),bumpMapUv:Ge&&x(S.bumpMap.channel),normalMapUv:He&&x(S.normalMap.channel),displacementMapUv:Ze&&x(S.displacementMap.channel),emissiveMapUv:fe&&x(S.emissiveMap.channel),metalnessMapUv:rt&&x(S.metalnessMap.channel),roughnessMapUv:Me&&x(S.roughnessMap.channel),anisotropyMapUv:q&&x(S.anisotropyMap.channel),clearcoatMapUv:ve&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:de&&x(S.specularColorMap.channel),specularIntensityMapUv:Le&&x(S.specularIntensityMap.channel),transmissionMapUv:U&&x(S.transmissionMap.channel),thicknessMapUv:ce&&x(S.thicknessMap.channel),alphaMapUv:oe&&x(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(He||De),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Re||oe),fog:!!N,useFog:S.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:ye,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Re&&S.map.isVideoTexture===!0&&Ke.getTransfer(S.map.colorSpace)===Qe,decodeVideoTextureEmissive:fe&&S.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(S.emissiveMap.colorSpace)===Qe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zt,flipSided:S.side===Rt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:xe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&S.extensions.multiDraw===!0||me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return st.vertexUv1s=u.has(1),st.vertexUv2s=u.has(2),st.vertexUv3s=u.has(3),u.clear(),st}function g(S){const _=[];if(S.shaderID?_.push(S.shaderID):(_.push(S.customVertexShaderID),_.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)_.push(w),_.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(y(_,S),b(_,S),_.push(s.outputColorSpace)),_.push(S.customProgramCacheKey),_.join()}function y(S,_){S.push(_.precision),S.push(_.outputColorSpace),S.push(_.envMapMode),S.push(_.envMapCubeUVHeight),S.push(_.mapUv),S.push(_.alphaMapUv),S.push(_.lightMapUv),S.push(_.aoMapUv),S.push(_.bumpMapUv),S.push(_.normalMapUv),S.push(_.displacementMapUv),S.push(_.emissiveMapUv),S.push(_.metalnessMapUv),S.push(_.roughnessMapUv),S.push(_.anisotropyMapUv),S.push(_.clearcoatMapUv),S.push(_.clearcoatNormalMapUv),S.push(_.clearcoatRoughnessMapUv),S.push(_.iridescenceMapUv),S.push(_.iridescenceThicknessMapUv),S.push(_.sheenColorMapUv),S.push(_.sheenRoughnessMapUv),S.push(_.specularMapUv),S.push(_.specularColorMapUv),S.push(_.specularIntensityMapUv),S.push(_.transmissionMapUv),S.push(_.thicknessMapUv),S.push(_.combine),S.push(_.fogExp2),S.push(_.sizeAttenuation),S.push(_.morphTargetsCount),S.push(_.morphAttributeCount),S.push(_.numDirLights),S.push(_.numPointLights),S.push(_.numSpotLights),S.push(_.numSpotLightMaps),S.push(_.numHemiLights),S.push(_.numRectAreaLights),S.push(_.numDirLightShadows),S.push(_.numPointLightShadows),S.push(_.numSpotLightShadows),S.push(_.numSpotLightShadowsWithMaps),S.push(_.numLightProbes),S.push(_.shadowMapType),S.push(_.toneMapping),S.push(_.numClippingPlanes),S.push(_.numClipIntersection),S.push(_.depthPacking)}function b(S,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),_.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),S.push(a.mask)}function A(S){const _=p[S.type];let w;if(_){const R=Jt[_];w=lf.clone(R.uniforms)}else w=S.uniforms;return w}function v(S,_){let w;for(let R=0,L=f.length;R<L;R++){const N=f[R];if(N.cacheKey===_){w=N,++w.usedTimes;break}}return w===void 0&&(w=new Hp(s,_,S,n),f.push(w)),w}function M(S){if(--S.usedTimes===0){const _=f.indexOf(S);f[_]=f[f.length-1],f.pop(),S.destroy()}}function E(S){c.remove(S)}function T(){c.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:A,acquireProgram:v,releaseProgram:M,releaseShaderCache:E,programs:f,dispose:T}}function qp(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function r(o,a,c){s.get(o)[a]=c}function n(){s=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:n}}function $p(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Qo(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function el(){const s=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,l,p,x,m){let g=s[e];return g===void 0?(g={id:d.id,object:d,geometry:h,material:l,groupOrder:p,renderOrder:d.renderOrder,z:x,group:m},s[e]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=l,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=x,g.group=m),e++,g}function a(d,h,l,p,x,m){const g=o(d,h,l,p,x,m);l.transmission>0?i.push(g):l.transparent===!0?r.push(g):t.push(g)}function c(d,h,l,p,x,m){const g=o(d,h,l,p,x,m);l.transmission>0?i.unshift(g):l.transparent===!0?r.unshift(g):t.unshift(g)}function u(d,h){t.length>1&&t.sort(d||$p),i.length>1&&i.sort(h||Qo),r.length>1&&r.sort(h||Qo)}function f(){for(let d=e,h=s.length;d<h;d++){const l=s[d];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:a,unshift:c,finish:f,sort:u}}function Kp(){let s=new WeakMap;function e(i,r){const n=s.get(i);let o;return n===void 0?(o=new el,s.set(i,[o])):r>=n.length?(o=new el,n.push(o)):o=n[r],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Zp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ne};break;case"SpotLight":t={position:new O,direction:new O,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function Jp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let jp=0;function Qp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function e0(s){const e=new Zp,t=Jp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,n=new at,o=new at;function a(u){let f=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let l=0,p=0,x=0,m=0,g=0,y=0,b=0,A=0,v=0,M=0,E=0;u.sort(Qp);for(let S=0,_=u.length;S<_;S++){const w=u[S],R=w.color,L=w.intensity,N=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=R.r*L,d+=R.g*L,h+=R.b*L;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],L);E++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const k=w.shadow,G=t.get(w);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,i.directionalShadow[l]=G,i.directionalShadowMap[l]=F,i.directionalShadowMatrix[l]=w.shadow.matrix,y++}i.directional[l]=V,l++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(R).multiplyScalar(L),V.distance=N,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[x]=V;const k=w.shadow;if(w.map&&(i.spotLightMap[v]=w.map,v++,k.updateMatrices(w),w.castShadow&&M++),i.spotLightMatrix[x]=k.matrix,w.castShadow){const G=t.get(w);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=F,A++}x++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(R).multiplyScalar(L),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=V,m++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const k=w.shadow,G=t.get(w);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,G.shadowCameraNear=k.camera.near,G.shadowCameraFar=k.camera.far,i.pointShadow[p]=G,i.pointShadowMap[p]=F,i.pointShadowMatrix[p]=w.shadow.matrix,b++}i.point[p]=V,p++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(L),V.groundColor.copy(w.groundColor).multiplyScalar(L),i.hemi[g]=V,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const T=i.hash;(T.directionalLength!==l||T.pointLength!==p||T.spotLength!==x||T.rectAreaLength!==m||T.hemiLength!==g||T.numDirectionalShadows!==y||T.numPointShadows!==b||T.numSpotShadows!==A||T.numSpotMaps!==v||T.numLightProbes!==E)&&(i.directional.length=l,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=A+v-M,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=E,T.directionalLength=l,T.pointLength=p,T.spotLength=x,T.rectAreaLength=m,T.hemiLength=g,T.numDirectionalShadows=y,T.numPointShadows=b,T.numSpotShadows=A,T.numSpotMaps=v,T.numLightProbes=E,i.version=jp++)}function c(u,f){let d=0,h=0,l=0,p=0,x=0;const m=f.matrixWorldInverse;for(let g=0,y=u.length;g<y;g++){const b=u[g];if(b.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),d++}else if(b.isSpotLight){const A=i.spot[l];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),l++}else if(b.isRectAreaLight){const A=i.rectArea[p];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),o.identity(),n.copy(b.matrixWorld),n.premultiply(m),o.extractRotation(n),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:i}}function tl(s){const e=new e0(s),t=[],i=[];function r(f){u.camera=f,t.length=0,i.length=0}function n(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:n,pushShadow:o}}function t0(s){let e=new WeakMap;function t(r,n=0){const o=e.get(r);let a;return o===void 0?(a=new tl(s),e.set(r,[a])):n>=o.length?(a=new tl(s),o.push(a)):a=o[n],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
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
}`;function r0(s,e,t){let i=new Ua;const r=new Be,n=new Be,o=new tt,a=new bf({depthPacking:Dc}),c=new Ef,u={},f=t.maxTextureSize,d={[An]:Rt,[Rt]:An,[zt]:zt},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),l=h.clone();l.defines.HORIZONTAL_PASS=1;const p=new _t;p.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rl;let g=this.type;this.render=function(M,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const S=s.getRenderTarget(),_=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),R=s.state;R.setBlending(hn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const L=g!==cn&&this.type===cn,N=g===cn&&this.type!==cn;for(let F=0,V=M.length;F<V;F++){const k=M[F],G=k.shadow;if(G===void 0){Fe("WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const K=G.getFrameExtents();if(r.multiply(K),n.copy(G.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(n.x=Math.floor(f/K.x),r.x=n.x*K.x,G.mapSize.x=n.x),r.y>f&&(n.y=Math.floor(f/K.y),r.y=n.y*K.y,G.mapSize.y=n.y)),G.map===null||L===!0||N===!0){const he=this.type!==cn?{minFilter:Ft,magFilter:Ft}:{};G.map!==null&&G.map.dispose(),G.map=new Hn(r.x,r.y,he),G.map.texture.name=k.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const Q=G.getViewportCount();for(let he=0;he<Q;he++){const ye=G.getViewport(he);o.set(n.x*ye.x,n.y*ye.y,n.x*ye.z,n.y*ye.w),R.viewport(o),G.updateMatrices(k,he),i=G.getFrustum(),A(E,T,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===cn&&y(G,T),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(S,_,w)};function y(M,E){const T=e.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,l.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,l.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Hn(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(E,null,T,h,x,null),l.uniforms.shadow_pass.value=M.mapPass.texture,l.uniforms.resolution.value=M.mapSize,l.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(E,null,T,l,x,null)}function b(M,E,T,S){let _=null;const w=T.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(w!==void 0)_=w;else if(_=T.isPointLight===!0?c:a,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const R=_.uuid,L=E.uuid;let N=u[R];N===void 0&&(N={},u[R]=N);let F=N[L];F===void 0&&(F=_.clone(),N[L]=F,E.addEventListener("dispose",v)),_=F}if(_.visible=E.visible,_.wireframe=E.wireframe,S===cn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const R=s.properties.get(_);R.light=T}return _}function A(M,E,T,S,_){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&_===cn)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,M.matrixWorld);const L=e.update(M),N=M.material;if(Array.isArray(N)){const F=L.groups;for(let V=0,k=F.length;V<k;V++){const G=F[V],K=N[G.materialIndex];if(K&&K.visible){const Q=b(M,K,S,_);M.onBeforeShadow(s,M,E,T,L,Q,G),s.renderBufferDirect(T,null,L,Q,M,G),M.onAfterShadow(s,M,E,T,L,Q,G)}}}else if(N.visible){const F=b(M,N,S,_);M.onBeforeShadow(s,M,E,T,L,F,null),s.renderBufferDirect(T,null,L,F,M,null),M.onAfterShadow(s,M,E,T,L,F,null)}}const R=M.children;for(let L=0,N=R.length;L<N;L++)A(R[L],E,T,S,_)}function v(M){M.target.removeEventListener("dispose",v);for(const T in u){const S=u[T],_=M.target.uuid;_ in S&&(S[_].dispose(),delete S[_])}}}const s0={[Ls]:Is,[Us]:Os,[Fs]:Bs,[pi]:Ns,[Is]:Ls,[Os]:Us,[Bs]:Fs,[Ns]:pi};function a0(s,e){function t(){let U=!1;const ce=new tt;let ae=null;const oe=new tt(0,0,0,0);return{setMask:function(te){ae!==te&&!U&&(s.colorMask(te,te,te,te),ae=te)},setLocked:function(te){U=te},setClear:function(te,J,xe,Ue,st){st===!0&&(te*=Ue,J*=Ue,xe*=Ue),ce.set(te,J,xe,Ue),oe.equals(ce)===!1&&(s.clearColor(te,J,xe,Ue),oe.copy(ce))},reset:function(){U=!1,ae=null,oe.set(-1,0,0,0)}}}function i(){let U=!1,ce=!1,ae=null,oe=null,te=null;return{setReversed:function(J){if(ce!==J){const xe=e.get("EXT_clip_control");J?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ce=J;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return ce},setTest:function(J){J?Z(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(J){ae!==J&&!U&&(s.depthMask(J),ae=J)},setFunc:function(J){if(ce&&(J=s0[J]),oe!==J){switch(J){case Ls:s.depthFunc(s.NEVER);break;case Is:s.depthFunc(s.ALWAYS);break;case Us:s.depthFunc(s.LESS);break;case pi:s.depthFunc(s.LEQUAL);break;case Fs:s.depthFunc(s.EQUAL);break;case Ns:s.depthFunc(s.GEQUAL);break;case Os:s.depthFunc(s.GREATER);break;case Bs:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}oe=J}},setLocked:function(J){U=J},setClear:function(J){te!==J&&(ce&&(J=1-J),s.clearDepth(J),te=J)},reset:function(){U=!1,ae=null,oe=null,te=null,ce=!1}}}function r(){let U=!1,ce=null,ae=null,oe=null,te=null,J=null,xe=null,Ue=null,st=null;return{setTest:function(Je){U||(Je?Z(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!U&&(s.stencilMask(Je),ce=Je)},setFunc:function(Je,Zt,Ht){(ae!==Je||oe!==Zt||te!==Ht)&&(s.stencilFunc(Je,Zt,Ht),ae=Je,oe=Zt,te=Ht)},setOp:function(Je,Zt,Ht){(J!==Je||xe!==Zt||Ue!==Ht)&&(s.stencilOp(Je,Zt,Ht),J=Je,xe=Zt,Ue=Ht)},setLocked:function(Je){U=Je},setClear:function(Je){st!==Je&&(s.clearStencil(Je),st=Je)},reset:function(){U=!1,ce=null,ae=null,oe=null,te=null,J=null,xe=null,Ue=null,st=null}}}const n=new t,o=new i,a=new r,c=new WeakMap,u=new WeakMap;let f={},d={},h=new WeakMap,l=[],p=null,x=!1,m=null,g=null,y=null,b=null,A=null,v=null,M=null,E=new Ne(0,0,0),T=0,S=!1,_=null,w=null,R=null,L=null,N=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,k=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),V=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),V=k>=2);let K=null,Q={};const he=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Ie=new tt().fromArray(he),Xe=new tt().fromArray(ye);function ke(U,ce,ae,oe){const te=new Uint8Array(4),J=s.createTexture();s.bindTexture(U,J),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<ae;xe++)U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,oe,0,s.RGBA,s.UNSIGNED_BYTE,te):s.texImage2D(ce+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,te);return J}const W={};W[s.TEXTURE_2D]=ke(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),n.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),o.setFunc(pi),Ge(!1),He(Ja),Z(s.CULL_FACE),it(hn);function Z(U){f[U]!==!0&&(s.enable(U),f[U]=!0)}function re(U){f[U]!==!1&&(s.disable(U),f[U]=!1)}function we(U,ce){return d[U]!==ce?(s.bindFramebuffer(U,ce),d[U]=ce,U===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ce),U===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function me(U,ce){let ae=l,oe=!1;if(U){ae=h.get(ce),ae===void 0&&(ae=[],h.set(ce,ae));const te=U.textures;if(ae.length!==te.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let J=0,xe=te.length;J<xe;J++)ae[J]=s.COLOR_ATTACHMENT0+J;ae.length=te.length,oe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,oe=!0);oe&&s.drawBuffers(ae)}function Re(U){return p!==U?(s.useProgram(U),p=U,!0):!1}const qe={[Bn]:s.FUNC_ADD,[rc]:s.FUNC_SUBTRACT,[sc]:s.FUNC_REVERSE_SUBTRACT};qe[ac]=s.MIN,qe[oc]=s.MAX;const Ve={[lc]:s.ZERO,[cc]:s.ONE,[fc]:s.SRC_COLOR,[Ps]:s.SRC_ALPHA,[xc]:s.SRC_ALPHA_SATURATE,[pc]:s.DST_COLOR,[hc]:s.DST_ALPHA,[uc]:s.ONE_MINUS_SRC_COLOR,[Ds]:s.ONE_MINUS_SRC_ALPHA,[mc]:s.ONE_MINUS_DST_COLOR,[dc]:s.ONE_MINUS_DST_ALPHA,[gc]:s.CONSTANT_COLOR,[vc]:s.ONE_MINUS_CONSTANT_COLOR,[_c]:s.CONSTANT_ALPHA,[Mc]:s.ONE_MINUS_CONSTANT_ALPHA};function it(U,ce,ae,oe,te,J,xe,Ue,st,Je){if(U===hn){x===!0&&(re(s.BLEND),x=!1);return}if(x===!1&&(Z(s.BLEND),x=!0),U!==ic){if(U!==m||Je!==S){if((g!==Bn||A!==Bn)&&(s.blendEquation(s.FUNC_ADD),g=Bn,A=Bn),Je)switch(U){case hi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFunc(s.ONE,s.ONE);break;case Qa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eo:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ht("WebGLState: Invalid blending: ",U);break}else switch(U){case hi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ja:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qa:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eo:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",U);break}y=null,b=null,v=null,M=null,E.set(0,0,0),T=0,m=U,S=Je}return}te=te||ce,J=J||ae,xe=xe||oe,(ce!==g||te!==A)&&(s.blendEquationSeparate(qe[ce],qe[te]),g=ce,A=te),(ae!==y||oe!==b||J!==v||xe!==M)&&(s.blendFuncSeparate(Ve[ae],Ve[oe],Ve[J],Ve[xe]),y=ae,b=oe,v=J,M=xe),(Ue.equals(E)===!1||st!==T)&&(s.blendColor(Ue.r,Ue.g,Ue.b,st),E.copy(Ue),T=st),m=U,S=!1}function I(U,ce){U.side===zt?re(s.CULL_FACE):Z(s.CULL_FACE);let ae=U.side===Rt;ce&&(ae=!ae),Ge(ae),U.blending===hi&&U.transparent===!1?it(hn):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),n.setMask(U.colorWrite);const oe=U.stencilWrite;a.setTest(oe),oe&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),fe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(U){_!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),_=U)}function He(U){U!==tc?(Z(s.CULL_FACE),U!==w&&(U===Ja?s.cullFace(s.BACK):U===nc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),w=U}function Ze(U){U!==R&&(V&&s.lineWidth(U),R=U)}function fe(U,ce,ae){U?(Z(s.POLYGON_OFFSET_FILL),(L!==ce||N!==ae)&&(s.polygonOffset(ce,ae),L=ce,N=ae)):re(s.POLYGON_OFFSET_FILL)}function rt(U){U?Z(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function Me(U){U===void 0&&(U=s.TEXTURE0+F-1),K!==U&&(s.activeTexture(U),K=U)}function De(U,ce,ae){ae===void 0&&(K===null?ae=s.TEXTURE0+F-1:ae=K);let oe=Q[ae];oe===void 0&&(oe={type:void 0,texture:void 0},Q[ae]=oe),(oe.type!==U||oe.texture!==ce)&&(K!==ae&&(s.activeTexture(ae),K=ae),s.bindTexture(U,ce||W[U]),oe.type=U,oe.texture=ce)}function D(){const U=Q[K];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function $(){try{s.texSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function j(){try{s.texSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function q(){try{s.compressedTexSubImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ve(){try{s.compressedTexSubImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function se(){try{s.texStorage2D(...arguments)}catch(U){U("WebGLState:",U)}}function be(){try{s.texStorage3D(...arguments)}catch(U){U("WebGLState:",U)}}function _e(){try{s.texImage2D(...arguments)}catch(U){U("WebGLState:",U)}}function ee(){try{s.texImage3D(...arguments)}catch(U){U("WebGLState:",U)}}function ie(U){Ie.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),Ie.copy(U))}function Ce(U){Xe.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Xe.copy(U))}function Te(U,ce){let ae=u.get(ce);ae===void 0&&(ae=new WeakMap,u.set(ce,ae));let oe=ae.get(U);oe===void 0&&(oe=s.getUniformBlockIndex(ce,U.name),ae.set(U,oe))}function de(U,ce){const oe=u.get(ce).get(U);c.get(ce)!==oe&&(s.uniformBlockBinding(ce,oe,U.__bindingPointIndex),c.set(ce,oe))}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},K=null,Q={},d={},h=new WeakMap,l=[],p=null,x=!1,m=null,g=null,y=null,b=null,A=null,v=null,M=null,E=new Ne(0,0,0),T=0,S=!1,_=null,w=null,R=null,L=null,N=null,Ie.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),n.reset(),o.reset(),a.reset()}return{buffers:{color:n,depth:o,stencil:a},enable:Z,disable:re,bindFramebuffer:we,drawBuffers:me,useProgram:Re,setBlending:it,setMaterial:I,setFlipSided:Ge,setCullFace:He,setLineWidth:Ze,setPolygonOffset:fe,setScissorTest:rt,activeTexture:Me,bindTexture:De,unbindTexture:D,compressedTexImage2D:C,compressedTexImage3D:H,texImage2D:_e,texImage3D:ee,updateUBOMapping:Te,uniformBlockBinding:de,texStorage2D:se,texStorage3D:be,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:ie,viewport:Ce,reset:Le}}function o0(s,e,t,i,r,n,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Be,f=new WeakMap;let d;const h=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(D,C){return l?new OffscreenCanvas(D,C):Ur("canvas")}function x(D,C,H){let $=1;const j=De(D);if((j.width>H||j.height>H)&&($=H/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const q=Math.floor($*j.width),ve=Math.floor($*j.height);d===void 0&&(d=p(q,ve));const se=C?p(q,ve):d;return se.width=q,se.height=ve,se.getContext("2d").drawImage(D,0,0,q,ve),Fe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+ve+")."),se}else return"data"in D&&Fe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),D;return D}function m(D){return D.generateMipmaps}function g(D){s.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,C,H,$,j=!1){if(D!==null){if(s[D]!==void 0)return s[D];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=C;if(C===s.RED&&(H===s.FLOAT&&(q=s.R32F),H===s.HALF_FLOAT&&(q=s.R16F),H===s.UNSIGNED_BYTE&&(q=s.R8)),C===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.R8UI),H===s.UNSIGNED_SHORT&&(q=s.R16UI),H===s.UNSIGNED_INT&&(q=s.R32UI),H===s.BYTE&&(q=s.R8I),H===s.SHORT&&(q=s.R16I),H===s.INT&&(q=s.R32I)),C===s.RG&&(H===s.FLOAT&&(q=s.RG32F),H===s.HALF_FLOAT&&(q=s.RG16F),H===s.UNSIGNED_BYTE&&(q=s.RG8)),C===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RG8UI),H===s.UNSIGNED_SHORT&&(q=s.RG16UI),H===s.UNSIGNED_INT&&(q=s.RG32UI),H===s.BYTE&&(q=s.RG8I),H===s.SHORT&&(q=s.RG16I),H===s.INT&&(q=s.RG32I)),C===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGB8UI),H===s.UNSIGNED_SHORT&&(q=s.RGB16UI),H===s.UNSIGNED_INT&&(q=s.RGB32UI),H===s.BYTE&&(q=s.RGB8I),H===s.SHORT&&(q=s.RGB16I),H===s.INT&&(q=s.RGB32I)),C===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(q=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(q=s.RGBA16UI),H===s.UNSIGNED_INT&&(q=s.RGBA32UI),H===s.BYTE&&(q=s.RGBA8I),H===s.SHORT&&(q=s.RGBA16I),H===s.INT&&(q=s.RGBA32I)),C===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(q=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(q=s.R11F_G11F_B10F)),C===s.RGBA){const ve=j?Lr:Ke.getTransfer($);H===s.FLOAT&&(q=s.RGBA32F),H===s.HALF_FLOAT&&(q=s.RGBA16F),H===s.UNSIGNED_BYTE&&(q=ve===Qe?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(q=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(q=s.RGB5_A1)}return(q===s.R16F||q===s.R32F||q===s.RG16F||q===s.RG32F||q===s.RGBA16F||q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function A(D,C){let H;return D?C===null||C===Gn||C===zi?H=s.DEPTH24_STENCIL8:C===un?H=s.DEPTH32F_STENCIL8:C===Bi&&(H=s.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Gn||C===zi?H=s.DEPTH_COMPONENT24:C===un?H=s.DEPTH_COMPONENT32F:C===Bi&&(H=s.DEPTH_COMPONENT16),H}function v(D,C){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Ft&&D.minFilter!==Gt?Math.log2(Math.max(C.width,C.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?C.mipmaps.length:1}function M(D){const C=D.target;C.removeEventListener("dispose",M),T(C),C.isVideoTexture&&f.delete(C)}function E(D){const C=D.target;C.removeEventListener("dispose",E),_(C)}function T(D){const C=i.get(D);if(C.__webglInit===void 0)return;const H=D.source,$=h.get(H);if($){const j=$[C.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(D),Object.keys($).length===0&&h.delete(H)}i.remove(D)}function S(D){const C=i.get(D);s.deleteTexture(C.__webglTexture);const H=D.source,$=h.get(H);delete $[C.__cacheKey],o.memory.textures--}function _(D){const C=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(C.__webglFramebuffer[$]))for(let j=0;j<C.__webglFramebuffer[$].length;j++)s.deleteFramebuffer(C.__webglFramebuffer[$][j]);else s.deleteFramebuffer(C.__webglFramebuffer[$]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[$])}else{if(Array.isArray(C.__webglFramebuffer))for(let $=0;$<C.__webglFramebuffer.length;$++)s.deleteFramebuffer(C.__webglFramebuffer[$]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let $=0;$<C.__webglColorRenderbuffer.length;$++)C.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[$]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const H=D.textures;for(let $=0,j=H.length;$<j;$++){const q=i.get(H[$]);q.__webglTexture&&(s.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(H[$])}i.remove(D)}let w=0;function R(){w=0}function L(){const D=w;return D>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),w+=1,D}function N(D){const C=[];return C.push(D.wrapS),C.push(D.wrapT),C.push(D.wrapR||0),C.push(D.magFilter),C.push(D.minFilter),C.push(D.anisotropy),C.push(D.internalFormat),C.push(D.format),C.push(D.type),C.push(D.generateMipmaps),C.push(D.premultiplyAlpha),C.push(D.flipY),C.push(D.unpackAlignment),C.push(D.colorSpace),C.join()}function F(D,C){const H=i.get(D);if(D.isVideoTexture&&rt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const $=D.image;if($===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,D,C);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+C)}function V(D,C){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){W(H,D,C);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+C)}function k(D,C){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){W(H,D,C);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+C)}function G(D,C){const H=i.get(D);if(D.version>0&&H.__version!==D.version){Z(H,D,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+C)}const K={[Gs]:s.REPEAT,[fn]:s.CLAMP_TO_EDGE,[Hs]:s.MIRRORED_REPEAT},Q={[Ft]:s.NEAREST,[Rc]:s.NEAREST_MIPMAP_NEAREST,[Qi]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[Zr]:s.LINEAR_MIPMAP_NEAREST,[Vn]:s.LINEAR_MIPMAP_LINEAR},he={[Ic]:s.NEVER,[zc]:s.ALWAYS,[Uc]:s.LESS,[xl]:s.LEQUAL,[Fc]:s.EQUAL,[Bc]:s.GEQUAL,[Nc]:s.GREATER,[Oc]:s.NOTEQUAL};function ye(D,C){if(C.type===un&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Gt||C.magFilter===Zr||C.magFilter===Qi||C.magFilter===Vn||C.minFilter===Gt||C.minFilter===Zr||C.minFilter===Qi||C.minFilter===Vn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,K[C.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,K[C.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,K[C.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Q[C.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Q[C.minFilter]),C.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,he[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Ft||C.minFilter!==Qi&&C.minFilter!==Vn||C.type===un&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Ie(D,C){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,C.addEventListener("dispose",M));const $=C.source;let j=h.get($);j===void 0&&(j={},h.set($,j));const q=N(C);if(q!==D.__cacheKey){j[q]===void 0&&(j[q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),j[q].usedTimes++;const ve=j[D.__cacheKey];ve!==void 0&&(j[D.__cacheKey].usedTimes--,ve.usedTimes===0&&S(C)),D.__cacheKey=q,D.__webglTexture=j[q].texture}return H}function Xe(D,C,H){return Math.floor(Math.floor(D/H)/C)}function ke(D,C,H,$){const q=D.updateRanges;if(q.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,H,$,C.data);else{q.sort((ee,ie)=>ee.start-ie.start);let ve=0;for(let ee=1;ee<q.length;ee++){const ie=q[ve],Ce=q[ee],Te=ie.start+ie.count,de=Xe(Ce.start,C.width,4),Le=Xe(ie.start,C.width,4);Ce.start<=Te+1&&de===Le&&Xe(Ce.start+Ce.count-1,C.width,4)===de?ie.count=Math.max(ie.count,Ce.start+Ce.count-ie.start):(++ve,q[ve]=Ce)}q.length=ve+1;const se=s.getParameter(s.UNPACK_ROW_LENGTH),be=s.getParameter(s.UNPACK_SKIP_PIXELS),_e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let ee=0,ie=q.length;ee<ie;ee++){const Ce=q[ee],Te=Math.floor(Ce.start/4),de=Math.ceil(Ce.count/4),Le=Te%C.width,U=Math.floor(Te/C.width),ce=de,ae=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,U),t.texSubImage2D(s.TEXTURE_2D,0,Le,U,ce,ae,H,$,C.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,se),s.pixelStorei(s.UNPACK_SKIP_PIXELS,be),s.pixelStorei(s.UNPACK_SKIP_ROWS,_e)}}function W(D,C,H){let $=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&($=s.TEXTURE_3D);const j=Ie(D,C),q=C.source;t.bindTexture($,D.__webglTexture,s.TEXTURE0+H);const ve=i.get(q);if(q.version!==ve.__version||j===!0){t.activeTexture(s.TEXTURE0+H);const se=Ke.getPrimaries(Ke.workingColorSpace),be=C.colorSpace===yn?null:Ke.getPrimaries(C.colorSpace),_e=C.colorSpace===yn||se===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let ee=x(C.image,!1,r.maxTextureSize);ee=Me(C,ee);const ie=n.convert(C.format,C.colorSpace),Ce=n.convert(C.type);let Te=b(C.internalFormat,ie,Ce,C.colorSpace,C.isVideoTexture);ye($,C);let de;const Le=C.mipmaps,U=C.isVideoTexture!==!0,ce=ve.__version===void 0||j===!0,ae=q.dataReady,oe=v(C,ee);if(C.isDepthTexture)Te=A(C.format===Gi,C.type),ce&&(U?t.texStorage2D(s.TEXTURE_2D,1,Te,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Te,ee.width,ee.height,0,ie,Ce,null));else if(C.isDataTexture)if(Le.length>0){U&&ce&&t.texStorage2D(s.TEXTURE_2D,oe,Te,Le[0].width,Le[0].height);for(let te=0,J=Le.length;te<J;te++)de=Le[te],U?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ie,Ce,de.data):t.texImage2D(s.TEXTURE_2D,te,Te,de.width,de.height,0,ie,Ce,de.data);C.generateMipmaps=!1}else U?(ce&&t.texStorage2D(s.TEXTURE_2D,oe,Te,ee.width,ee.height),ae&&ke(C,ee,ie,Ce)):t.texImage2D(s.TEXTURE_2D,0,Te,ee.width,ee.height,0,ie,Ce,ee.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){U&&ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Te,Le[0].width,Le[0].height,ee.depth);for(let te=0,J=Le.length;te<J;te++)if(de=Le[te],C.format!==Yt)if(ie!==null)if(U){if(ae)if(C.layerUpdates.size>0){const xe=Lo(de.width,de.height,C.format,C.type);for(const Ue of C.layerUpdates){const st=de.data.subarray(Ue*xe/de.data.BYTES_PER_ELEMENT,(Ue+1)*xe/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,Ue,de.width,de.height,1,ie,st)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ee.depth,ie,de.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,te,Te,de.width,de.height,ee.depth,0,de.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ee.depth,ie,Ce,de.data):t.texImage3D(s.TEXTURE_2D_ARRAY,te,Te,de.width,de.height,ee.depth,0,ie,Ce,de.data)}else{U&&ce&&t.texStorage2D(s.TEXTURE_2D,oe,Te,Le[0].width,Le[0].height);for(let te=0,J=Le.length;te<J;te++)de=Le[te],C.format!==Yt?ie!==null?U?ae&&t.compressedTexSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ie,de.data):t.compressedTexImage2D(s.TEXTURE_2D,te,Te,de.width,de.height,0,de.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,de.width,de.height,ie,Ce,de.data):t.texImage2D(s.TEXTURE_2D,te,Te,de.width,de.height,0,ie,Ce,de.data)}else if(C.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,oe,Te,ee.width,ee.height,ee.depth),ae)if(C.layerUpdates.size>0){const te=Lo(ee.width,ee.height,C.format,C.type);for(const J of C.layerUpdates){const xe=ee.data.subarray(J*te/ee.data.BYTES_PER_ELEMENT,(J+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,ee.width,ee.height,1,ie,Ce,xe)}C.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,Ce,ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,ee.width,ee.height,ee.depth,0,ie,Ce,ee.data);else if(C.isData3DTexture)U?(ce&&t.texStorage3D(s.TEXTURE_3D,oe,Te,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,Ce,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Te,ee.width,ee.height,ee.depth,0,ie,Ce,ee.data);else if(C.isFramebufferTexture){if(ce)if(U)t.texStorage2D(s.TEXTURE_2D,oe,Te,ee.width,ee.height);else{let te=ee.width,J=ee.height;for(let xe=0;xe<oe;xe++)t.texImage2D(s.TEXTURE_2D,xe,Te,te,J,0,ie,Ce,null),te>>=1,J>>=1}}else if(Le.length>0){if(U&&ce){const te=De(Le[0]);t.texStorage2D(s.TEXTURE_2D,oe,Te,te.width,te.height)}for(let te=0,J=Le.length;te<J;te++)de=Le[te],U?ae&&t.texSubImage2D(s.TEXTURE_2D,te,0,0,ie,Ce,de):t.texImage2D(s.TEXTURE_2D,te,Te,ie,Ce,de);C.generateMipmaps=!1}else if(U){if(ce){const te=De(ee);t.texStorage2D(s.TEXTURE_2D,oe,Te,te.width,te.height)}ae&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ie,Ce,ee)}else t.texImage2D(s.TEXTURE_2D,0,Te,ie,Ce,ee);m(C)&&g($),ve.__version=q.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function Z(D,C,H){if(C.image.length!==6)return;const $=Ie(D,C),j=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+H);const q=i.get(j);if(j.version!==q.__version||$===!0){t.activeTexture(s.TEXTURE0+H);const ve=Ke.getPrimaries(Ke.workingColorSpace),se=C.colorSpace===yn?null:Ke.getPrimaries(C.colorSpace),be=C.colorSpace===yn||ve===se?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const _e=C.isCompressedTexture||C.image[0].isCompressedTexture,ee=C.image[0]&&C.image[0].isDataTexture,ie=[];for(let J=0;J<6;J++)!_e&&!ee?ie[J]=x(C.image[J],!0,r.maxCubemapSize):ie[J]=ee?C.image[J].image:C.image[J],ie[J]=Me(C,ie[J]);const Ce=ie[0],Te=n.convert(C.format,C.colorSpace),de=n.convert(C.type),Le=b(C.internalFormat,Te,de,C.colorSpace),U=C.isVideoTexture!==!0,ce=q.__version===void 0||$===!0,ae=j.dataReady;let oe=v(C,Ce);ye(s.TEXTURE_CUBE_MAP,C);let te;if(_e){U&&ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Le,Ce.width,Ce.height);for(let J=0;J<6;J++){te=ie[J].mipmaps;for(let xe=0;xe<te.length;xe++){const Ue=te[xe];C.format!==Yt?Te!==null?U?ae&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,Ue.width,Ue.height,Te,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Le,Ue.width,Ue.height,0,Ue.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,Ue.width,Ue.height,Te,de,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Le,Ue.width,Ue.height,0,Te,de,Ue.data)}}}else{if(te=C.mipmaps,U&&ce){te.length>0&&oe++;const J=De(ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,oe,Le,J.width,J.height)}for(let J=0;J<6;J++)if(ee){U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ie[J].width,ie[J].height,Te,de,ie[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Le,ie[J].width,ie[J].height,0,Te,de,ie[J].data);for(let xe=0;xe<te.length;xe++){const st=te[xe].image[J].image;U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,st.width,st.height,Te,de,st.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Le,st.width,st.height,0,Te,de,st.data)}}else{U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,de,ie[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Le,Te,de,ie[J]);for(let xe=0;xe<te.length;xe++){const Ue=te[xe];U?ae&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,Te,de,Ue.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Le,Te,de,Ue.image[J])}}}m(C)&&g(s.TEXTURE_CUBE_MAP),q.__version=j.version,C.onUpdate&&C.onUpdate(C)}D.__version=C.version}function re(D,C,H,$,j,q){const ve=n.convert(H.format,H.colorSpace),se=n.convert(H.type),be=b(H.internalFormat,ve,se,H.colorSpace),_e=i.get(C),ee=i.get(H);if(ee.__renderTarget=C,!_e.__hasExternalTextures){const ie=Math.max(1,C.width>>q),Ce=Math.max(1,C.height>>q);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?t.texImage3D(j,q,be,ie,Ce,C.depth,0,ve,se,null):t.texImage2D(j,q,be,ie,Ce,0,ve,se,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),fe(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,j,ee.__webglTexture,0,Ze(C)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,j,ee.__webglTexture,q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(D,C,H){if(s.bindRenderbuffer(s.RENDERBUFFER,D),C.depthBuffer){const $=C.depthTexture,j=$&&$.isDepthTexture?$.type:null,q=A(C.stencilBuffer,j),ve=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,se=Ze(C);fe(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,se,q,C.width,C.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,se,q,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,q,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,D)}else{const $=C.textures;for(let j=0;j<$.length;j++){const q=$[j],ve=n.convert(q.format,q.colorSpace),se=n.convert(q.type),be=b(q.internalFormat,ve,se,q.colorSpace),_e=Ze(C);H&&fe(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,be,C.width,C.height):fe(C)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,be,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,be,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function me(D,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(C.depthTexture);$.__renderTarget=C,(!$.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const j=$.__webglTexture,q=Ze(C);if(C.depthTexture.format===Vi)fe(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(C.depthTexture.format===Gi)fe(C)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Re(D){const C=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==D.depthTexture){const $=D.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),$){const j=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),C.__depthDisposeCallback=j}C.__boundDepthTexture=$}if(D.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const $=D.texture.mipmaps;$&&$.length>0?me(C.__webglFramebuffer[0],D):me(C.__webglFramebuffer,D)}else if(H){C.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[$]),C.__webglDepthbuffer[$]===void 0)C.__webglDepthbuffer[$]=s.createRenderbuffer(),we(C.__webglDepthbuffer[$],D,!1);else{const j=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=C.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}else{const $=D.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),we(C.__webglDepthbuffer,D,!1);else{const j=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,q=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,q)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(D,C,H){const $=i.get(D);C!==void 0&&re($.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Re(D)}function Ve(D){const C=D.texture,H=i.get(D),$=i.get(C);D.addEventListener("dispose",E);const j=D.textures,q=D.isWebGLCubeRenderTarget===!0,ve=j.length>1;if(ve||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=C.version,o.memory.textures++),q){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let be=0;be<C.mipmaps.length;be++)H.__webglFramebuffer[se][be]=s.createFramebuffer()}else H.__webglFramebuffer[se]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<C.mipmaps.length;se++)H.__webglFramebuffer[se]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ve)for(let se=0,be=j.length;se<be;se++){const _e=i.get(j[se]);_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&fe(D)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const be=j[se];H.__webglColorRenderbuffer[se]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[se]);const _e=n.convert(be.format,be.colorSpace),ee=n.convert(be.type),ie=b(be.internalFormat,_e,ee,be.colorSpace,D.isXRRenderTarget===!0),Ce=Ze(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,ie,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+se,s.RENDERBUFFER,H.__webglColorRenderbuffer[se])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),we(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),ye(s.TEXTURE_CUBE_MAP,C);for(let se=0;se<6;se++)if(C.mipmaps&&C.mipmaps.length>0)for(let be=0;be<C.mipmaps.length;be++)re(H.__webglFramebuffer[se][be],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,be);else re(H.__webglFramebuffer[se],D,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(C)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,be=j.length;se<be;se++){const _e=j[se],ee=i.get(_e);let ie=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ie=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),ye(ie,_e),re(H.__webglFramebuffer,D,_e,s.COLOR_ATTACHMENT0+se,ie,0),m(_e)&&g(ie)}t.unbindTexture()}else{let se=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),ye(se,C),C.mipmaps&&C.mipmaps.length>0)for(let be=0;be<C.mipmaps.length;be++)re(H.__webglFramebuffer[be],D,C,s.COLOR_ATTACHMENT0,se,be);else re(H.__webglFramebuffer,D,C,s.COLOR_ATTACHMENT0,se,0);m(C)&&g(se),t.unbindTexture()}D.depthBuffer&&Re(D)}function it(D){const C=D.textures;for(let H=0,$=C.length;H<$;H++){const j=C[H];if(m(j)){const q=y(D),ve=i.get(j).__webglTexture;t.bindTexture(q,ve),g(q),t.unbindTexture()}}}const I=[],Ge=[];function He(D){if(D.samples>0){if(fe(D)===!1){const C=D.textures,H=D.width,$=D.height;let j=s.COLOR_BUFFER_BIT;const q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=i.get(D),se=C.length>1;if(se)for(let _e=0;_e<C.length;_e++)t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const be=D.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let _e=0;_e<C.length;_e++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),se){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const ee=i.get(C[_e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,H,$,0,0,H,$,j,s.NEAREST),c===!0&&(I.length=0,Ge.length=0,I.push(s.COLOR_ATTACHMENT0+_e),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(q),Ge.push(q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),se)for(let _e=0;_e<C.length;_e++){t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,ve.__webglColorRenderbuffer[_e]);const ee=i.get(C[_e]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,ee,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const C=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ze(D){return Math.min(r.maxSamples,D.samples)}function fe(D){const C=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function rt(D){const C=o.render.frame;f.get(D)!==C&&(f.set(D,C),D.update())}function Me(D,C){const H=D.colorSpace,$=D.format,j=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==gi&&H!==yn&&(Ke.getTransfer(H)===Qe?($!==Yt||j!==en)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",H)),C}function De(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=k,this.setTextureCube=G,this.rebindTextures=qe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=re,this.useMultisampledRTT=fe}function l0(s,e){function t(i,r=yn){let n;const o=Ke.getTransfer(r);if(i===en)return s.UNSIGNED_BYTE;if(i===Ta)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Aa)return s.UNSIGNED_SHORT_5_5_5_1;if(i===fl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ul)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===ll)return s.BYTE;if(i===cl)return s.SHORT;if(i===Bi)return s.UNSIGNED_SHORT;if(i===Ea)return s.INT;if(i===Gn)return s.UNSIGNED_INT;if(i===un)return s.FLOAT;if(i===Mi)return s.HALF_FLOAT;if(i===hl)return s.ALPHA;if(i===dl)return s.RGB;if(i===Yt)return s.RGBA;if(i===Vi)return s.DEPTH_COMPONENT;if(i===Gi)return s.DEPTH_STENCIL;if(i===pl)return s.RED;if(i===wa)return s.RED_INTEGER;if(i===Ca)return s.RG;if(i===Ra)return s.RG_INTEGER;if(i===Pa)return s.RGBA_INTEGER;if(i===Ar||i===wr||i===Cr||i===Rr)if(o===Qe)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(i===Ar)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rr)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(i===Ar)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wr)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cr)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rr)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ks||i===Ws||i===Xs||i===Ys)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(i===ks)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ws)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xs)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ys)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qs||i===$s||i===Ks)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(i===qs||i===$s)return o===Qe?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(i===Ks)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Zs||i===Js||i===js||i===Qs||i===ea||i===ta||i===na||i===ia||i===ra||i===sa||i===aa||i===oa||i===la||i===ca)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(i===Zs)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Js)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===js)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qs)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ea)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ta)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===na)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ia)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ra)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sa)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===aa)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oa)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===la)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ca)return o===Qe?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fa||i===ua||i===ha)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(i===fa)return o===Qe?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ua)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ha)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===da||i===pa||i===ma||i===xa)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(i===da)return n.COMPRESSED_RED_RGTC1_EXT;if(i===pa)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ma)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xa)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zi?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`;class u0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ll(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new pn({vertexShader:c0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h0 extends Si{constructor(e,t){super();const i=this;let r=null,n=1,o=null,a="local-floor",c=1,u=null,f=null,d=null,h=null,l=null,p=null;const x=typeof XRWebGLBinding<"u",m=new u0,g={},y=t.getContextAttributes();let b=null,A=null;const v=[],M=[],E=new Be;let T=null;const S=new Ut;S.viewport=new tt;const _=new Ut;_.viewport=new tt;const w=[S,_],R=new Rf;let L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=v[W];return Z===void 0&&(Z=new _s,v[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=v[W];return Z===void 0&&(Z=new _s,v[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=v[W];return Z===void 0&&(Z=new _s,v[W]=Z),Z.getHandSpace()};function F(W){const Z=M.indexOf(W.inputSource);if(Z===-1)return;const re=v[Z];re!==void 0&&(re.update(W.inputSource,W.frame,u||o),re.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",k);for(let W=0;W<v.length;W++){const Z=M[W];Z!==null&&(M[W]=null,v[W].disconnect(Z))}L=null,N=null,m.reset();for(const W in g)delete g[W];e.setRenderTarget(b),l=null,h=null,d=null,r=null,A=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){n=W,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:l},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,we=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=y.stencil?Gi:Vi,we=y.stencil?zi:Gn);const Re={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:n};d=this.getBinding(),h=d.createProjectionLayer(Re),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new Hn(h.textureWidth,h.textureHeight,{format:Yt,type:en,depthTexture:new Dl(h.textureWidth,h.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:n};l=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:l}),e.setPixelRatio(1),e.setSize(l.framebufferWidth,l.framebufferHeight,!1),A=new Hn(l.framebufferWidth,l.framebufferHeight,{format:Yt,type:en,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:l.ignoreDepthValues===!1,resolveStencilBuffer:l.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(W){for(let Z=0;Z<W.removed.length;Z++){const re=W.removed[Z],we=M.indexOf(re);we>=0&&(M[we]=null,v[we].disconnect(re))}for(let Z=0;Z<W.added.length;Z++){const re=W.added[Z];let we=M.indexOf(re);if(we===-1){for(let Re=0;Re<v.length;Re++)if(Re>=M.length){M.push(re),we=Re;break}else if(M[Re]===null){M[Re]=re,we=Re;break}if(we===-1)break}const me=v[we];me&&me.connect(re)}}const G=new O,K=new O;function Q(W,Z,re){G.setFromMatrixPosition(Z.matrixWorld),K.setFromMatrixPosition(re.matrixWorld);const we=G.distanceTo(K),me=Z.projectionMatrix.elements,Re=re.projectionMatrix.elements,qe=me[14]/(me[10]-1),Ve=me[14]/(me[10]+1),it=(me[9]+1)/me[5],I=(me[9]-1)/me[5],Ge=(me[8]-1)/me[0],He=(Re[8]+1)/Re[0],Ze=qe*Ge,fe=qe*He,rt=we/(-Ge+He),Me=rt*-Ge;if(Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Me),W.translateZ(rt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),me[10]===-1)W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const De=qe+rt,D=Ve+rt,C=Ze-Me,H=fe+(we-Me),$=it*Ve/D*De,j=I*Ve/D*De;W.projectionMatrix.makePerspective(C,H,$,j,De,D),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function he(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let Z=W.near,re=W.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(re=m.depthFar)),R.near=_.near=S.near=Z,R.far=_.far=S.far=re,(L!==R.near||N!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),L=R.near,N=R.far),R.layers.mask=W.layers.mask|6,S.layers.mask=R.layers.mask&3,_.layers.mask=R.layers.mask&5;const we=W.parent,me=R.cameras;he(R,we);for(let Re=0;Re<me.length;Re++)he(me[Re],we);me.length===2?Q(R,S,_):R.projectionMatrix.copy(S.projectionMatrix),ye(W,R,we)};function ye(W,Z,re){re===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(re.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=va*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(h===null&&l===null))return c},this.setFoveation=function(W){c=W,h!==null&&(h.fixedFoveation=W),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(W){return g[W]};let Ie=null;function Xe(W,Z){if(f=Z.getViewerPose(u||o),p=Z,f!==null){const re=f.views;l!==null&&(e.setRenderTargetFramebuffer(A,l.framebuffer),e.setRenderTarget(A));let we=!1;re.length!==R.cameras.length&&(R.cameras.length=0,we=!0);for(let Ve=0;Ve<re.length;Ve++){const it=re[Ve];let I=null;if(l!==null)I=l.getViewport(it);else{const He=d.getViewSubImage(h,it);I=He.viewport,Ve===0&&(e.setRenderTargetTextures(A,He.colorTexture,He.depthStencilTexture),e.setRenderTarget(A))}let Ge=w[Ve];Ge===void 0&&(Ge=new Ut,Ge.layers.enable(Ve),Ge.viewport=new tt,w[Ve]=Ge),Ge.matrix.fromArray(it.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(it.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(I.x,I.y,I.width,I.height),Ve===0&&(R.matrix.copy(Ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),we===!0&&R.cameras.push(Ge)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const Ve=d.getDepthInformation(re[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,r.renderState)}if(me&&me.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<re.length;Ve++){const it=re[Ve].camera;if(it){let I=g[it];I||(I=new Ll,g[it]=I);const Ge=d.getCameraImage(it);I.sourceTexture=Ge}}}}for(let re=0;re<v.length;re++){const we=M[re],me=v[re];we!==null&&me!==void 0&&me.update(we,Z,u||o)}Ie&&Ie(W,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),p=null}const ke=new Fl;ke.setAnimationLoop(Xe),this.setAnimationLoop=function(W){Ie=W},this.dispose=function(){}}}const Nn=new tn,d0=new at;function p0(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,bl(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,y,b,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?n(m,g):g.isMeshToonMaterial?(n(m,g),d(m,g)):g.isMeshPhongMaterial?(n(m,g),f(m,g)):g.isMeshStandardMaterial?(n(m,g),h(m,g),g.isMeshPhysicalMaterial&&l(m,g,A)):g.isMeshMatcapMaterial?(n(m,g),p(m,g)):g.isMeshDepthMaterial?n(m,g):g.isMeshDistanceMaterial?(n(m,g),x(m,g)):g.isMeshNormalMaterial?n(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?c(m,g,y,b):g.isSpriteMaterial?u(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function n(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Rt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Rt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),b=y.envMap,A=y.envMapRotation;b&&(m.envMap.value=b,Nn.copy(A),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),m.envMapRotation.value.setFromMatrix4(d0.makeRotationFromEuler(Nn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function f(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function l(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Rt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function m0(s,e,t,i){let r={},n={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){const A=b.program;i.uniformBlockBinding(y,A)}function u(y,b){let A=r[y.id];A===void 0&&(p(y),A=f(y),r[y.id]=A,y.addEventListener("dispose",m));const v=b.program;i.updateUBOMapping(y,v);const M=e.render.frame;n[y.id]!==M&&(h(y),n[y.id]=M)}function f(y){const b=d();y.__bindingPointIndex=b;const A=s.createBuffer(),v=y.__size,M=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,v,M),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,A),A}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const b=r[y.id],A=y.uniforms,v=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let M=0,E=A.length;M<E;M++){const T=Array.isArray(A[M])?A[M]:[A[M]];for(let S=0,_=T.length;S<_;S++){const w=T[S];if(l(w,M,S,v)===!0){const R=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let N=0;for(let F=0;F<L.length;F++){const V=L[F],k=x(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,R+N,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,N),N+=k.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,R,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function l(y,b,A,v){const M=y.value,E=b+"_"+A;if(v[E]===void 0)return typeof M=="number"||typeof M=="boolean"?v[E]=M:v[E]=M.clone(),!0;{const T=v[E];if(typeof M=="number"||typeof M=="boolean"){if(T!==M)return v[E]=M,!0}else if(T.equals(M)===!1)return T.copy(M),!0}return!1}function p(y){const b=y.uniforms;let A=0;const v=16;for(let E=0,T=b.length;E<T;E++){const S=Array.isArray(b[E])?b[E]:[b[E]];for(let _=0,w=S.length;_<w;_++){const R=S[_],L=Array.isArray(R.value)?R.value:[R.value];for(let N=0,F=L.length;N<F;N++){const V=L[N],k=x(V),G=A%v,K=G%k.boundary,Q=G+K;A+=K,Q!==0&&v-Q<k.storage&&(A+=v-Q),R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=A,A+=k.storage}}}const M=A%v;return M>0&&(A+=v-M),y.__size=A,y.__cache={},this}function x(y){const b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){const b=y.target;b.removeEventListener("dispose",m);const A=o.indexOf(b.__bindingPointIndex);o.splice(A,1),s.deleteBuffer(r[b.id]),delete r[b.id],delete n[b.id]}function g(){for(const y in r)s.deleteBuffer(r[y]);o=[],r={},n={}}return{bind:c,update:u,dispose:g}}const x0=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ln=null;function g0(){return ln===null&&(ln=new gf(x0,32,32,Ca,Mi),ln.minFilter=Gt,ln.magFilter=Gt,ln.wrapS=fn,ln.wrapT=fn,ln.generateMipmaps=!1,ln.needsUpdate=!0),ln}class v0{constructor(e={}){const{canvas:t=Vc(),context:i=null,depth:r=!0,stencil:n=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let l;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=i.getContextAttributes().alpha}else l=o;const p=new Set([Pa,Ra,wa]),x=new Set([en,Gn,Bi,zi,Ta,Aa]),m=new Uint32Array(4),g=new Int32Array(4);let y=null,b=null;const A=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let E=!1;this._outputColorSpace=Bt;let T=0,S=0,_=null,w=-1,R=null;const L=new tt,N=new tt;let F=null;const V=new Ne(0);let k=0,G=t.width,K=t.height,Q=1,he=null,ye=null;const Ie=new tt(0,0,G,K),Xe=new tt(0,0,G,K);let ke=!1;const W=new Ua;let Z=!1,re=!1;const we=new at,me=new O,Re=new tt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function it(){return _===null?Q:1}let I=i;function Ge(P,B){return t.getContext(P,B)}try{const P={alpha:!0,depth:r,stencil:n,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",J,!1),t.addEventListener("webglcontextcreationerror",xe,!1),I===null){const B="webgl2";if(I=Ge(B,P),I===null)throw Ge(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw P("WebGLRenderer: "+P.message),P}let He,Ze,fe,rt,Me,De,D,C,H,$,j,q,ve,se,be,_e,ee,ie,Ce,Te,de,Le,U,ce;function ae(){He=new Ad(I),He.init(),Le=new l0(I,He),Ze=new gd(I,He,e,Le),fe=new a0(I,He),Ze.reversedDepthBuffer&&h&&fe.buffers.depth.setReversed(!0),rt=new Rd(I),Me=new qp,De=new o0(I,He,fe,Me,Ze,Le,rt),D=new _d(M),C=new Td(M),H=new If(I),U=new md(I,H),$=new wd(I,H,rt,U),j=new Dd(I,$,H,rt),Ce=new Pd(I,Ze,De),_e=new vd(Me),q=new Yp(M,D,C,He,Ze,U,_e),ve=new p0(M,Me),se=new Kp,be=new t0(He),ie=new pd(M,D,C,fe,j,l,c),ee=new r0(M,j,Ze),ce=new m0(I,rt,Ze,fe),Te=new xd(I,He,rt),de=new Cd(I,He,rt),rt.programs=q.programs,M.capabilities=Ze,M.extensions=He,M.properties=Me,M.renderLists=se,M.shadowMap=ee,M.state=fe,M.info=rt}ae();const oe=new h0(M,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const P=He.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=He.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(P){P!==void 0&&(Q=P,this.setSize(G,K,!1))},this.getSize=function(P){return P.set(G,K)},this.setSize=function(P,B,X=!0){if(oe.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}G=P,K=B,t.width=Math.floor(P*Q),t.height=Math.floor(B*Q),X===!0&&(t.style.width=P+"px",t.style.height=B+"px"),this.setViewport(0,0,P,B)},this.getDrawingBufferSize=function(P){return P.set(G*Q,K*Q).floor()},this.setDrawingBufferSize=function(P,B,X){G=P,K=B,Q=X,t.width=Math.floor(P*X),t.height=Math.floor(B*X),this.setViewport(0,0,P,B)},this.getCurrentViewport=function(P){return P.copy(L)},this.getViewport=function(P){return P.copy(Ie)},this.setViewport=function(P,B,X,Y){P.isVector4?Ie.set(P.x,P.y,P.z,P.w):Ie.set(P,B,X,Y),fe.viewport(L.copy(Ie).multiplyScalar(Q).round())},this.getScissor=function(P){return P.copy(Xe)},this.setScissor=function(P,B,X,Y){P.isVector4?Xe.set(P.x,P.y,P.z,P.w):Xe.set(P,B,X,Y),fe.scissor(N.copy(Xe).multiplyScalar(Q).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(P){fe.setScissorTest(ke=P)},this.setOpaqueSort=function(P){he=P},this.setTransparentSort=function(P){ye=P},this.getClearColor=function(P){return P.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(P=!0,B=!0,X=!0){let Y=0;if(P){let z=!1;if(_!==null){const ne=_.texture.format;z=p.has(ne)}if(z){const ne=_.texture.type,ue=x.has(ne),ge=ie.getClearColor(),pe=ie.getClearAlpha(),Ae=ge.r,Pe=ge.g,Se=ge.b;ue?(m[0]=Ae,m[1]=Pe,m[2]=Se,m[3]=pe,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Ae,g[1]=Pe,g[2]=Se,g[3]=pe,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}B&&(Y|=I.DEPTH_BUFFER_BIT),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",J,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),ie.dispose(),se.dispose(),be.dispose(),Me.dispose(),D.dispose(),C.dispose(),j.dispose(),U.dispose(),ce.dispose(),q.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Wa),oe.removeEventListener("sessionend",Xa),Rn.stop()};function te(P){P.preventDefault(),Fr("WebGLRenderer: Context Lost."),E=!0}function J(){Fr("WebGLRenderer: Context Restored."),E=!1;const P=rt.autoReset,B=ee.enabled,X=ee.autoUpdate,Y=ee.needsUpdate,z=ee.type;ae(),rt.autoReset=P,ee.enabled=B,ee.autoUpdate=X,ee.needsUpdate=Y,ee.type=z}function xe(P){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ue(P){const B=P.target;B.removeEventListener("dispose",Ue),st(B)}function st(P){Je(P),Me.remove(P)}function Je(P){const B=Me.get(P).programs;B!==void 0&&(B.forEach(function(X){q.releaseProgram(X)}),P.isShaderMaterial&&q.releaseShaderCache(P))}this.renderBufferDirect=function(P,B,X,Y,z,ne){B===null&&(B=qe);const ue=z.isMesh&&z.matrixWorld.determinant()<0,ge=Kl(P,B,X,Y,z);fe.setMaterial(Y,ue);let pe=X.index,Ae=1;if(Y.wireframe===!0){if(pe=$.getWireframeAttribute(X),pe===void 0)return;Ae=2}const Pe=X.drawRange,Se=X.attributes.position;let We=Pe.start*Ae,je=(Pe.start+Pe.count)*Ae;ne!==null&&(We=Math.max(We,ne.start*Ae),je=Math.min(je,(ne.start+ne.count)*Ae)),pe!==null?(We=Math.max(We,0),je=Math.min(je,pe.count)):Se!=null&&(We=Math.max(We,0),je=Math.min(je,Se.count));const ft=je-We;if(ft<0||ft===1/0)return;U.setup(z,Y,ge,X,pe);let ut,nt=Te;if(pe!==null&&(ut=H.get(pe),nt=de,nt.setIndex(ut)),z.isMesh)Y.wireframe===!0?(fe.setLineWidth(Y.wireframeLinewidth*it()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(z.isLine){let Ee=Y.linewidth;Ee===void 0&&(Ee=1),fe.setLineWidth(Ee*it()),z.isLineSegments?nt.setMode(I.LINES):z.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else z.isPoints?nt.setMode(I.POINTS):z.isSprite&&nt.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Hi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))nt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ee=z._multiDrawStarts,ot=z._multiDrawCounts,$e=z._multiDrawCount,Pt=pe?H.get(pe).bytesPerElement:1,Wn=Me.get(Y).currentProgram.getUniforms();for(let Dt=0;Dt<$e;Dt++)Wn.setValue(I,"_gl_DrawID",Dt),nt.render(Ee[Dt]/Pt,ot[Dt])}else if(z.isInstancedMesh)nt.renderInstances(We,ft,z.count);else if(X.isInstancedBufferGeometry){const Ee=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ot=Math.min(X.instanceCount,Ee);nt.renderInstances(We,ft,ot)}else nt.render(We,ft)};function Zt(P,B,X){P.transparent===!0&&P.side===zt&&P.forceSinglePass===!1?(P.side=Rt,P.needsUpdate=!0,ji(P,B,X),P.side=An,P.needsUpdate=!0,ji(P,B,X),P.side=zt):ji(P,B,X)}this.compile=function(P,B,X=null){X===null&&(X=P),b=be.get(X),b.init(B),v.push(b),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),P!==X&&P.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(b.pushLight(z),z.castShadow&&b.pushShadow(z))}),b.setupLights();const Y=new Set;return P.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ne=z.material;if(ne)if(Array.isArray(ne))for(let ue=0;ue<ne.length;ue++){const ge=ne[ue];Zt(ge,X,z),Y.add(ge)}else Zt(ne,X,z),Y.add(ne)}),b=v.pop(),Y},this.compileAsync=function(P,B,X=null){const Y=this.compile(P,B,X);return new Promise(z=>{function ne(){if(Y.forEach(function(ue){Me.get(ue).currentProgram.isReady()&&Y.delete(ue)}),Y.size===0){z(P);return}setTimeout(ne,10)}He.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let Ht=null;function $l(P){Ht&&Ht(P)}function Wa(){Rn.stop()}function Xa(){Rn.start()}const Rn=new Fl;Rn.setAnimationLoop($l),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(P){Ht=P,oe.setAnimationLoop(P),P===null?Rn.stop():Rn.start()},oe.addEventListener("sessionstart",Wa),oe.addEventListener("sessionend",Xa),this.render=function(P,B){if(B!==void 0&&B.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),P.isScene===!0&&P.onBeforeRender(M,P,B,_),b=be.get(P,v.length),b.init(B),v.push(b),we.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),W.setFromProjectionMatrix(we,Qt,B.reversedDepth),re=this.localClippingEnabled,Z=_e.init(this.clippingPlanes,re),y=se.get(P,A.length),y.init(),A.push(y),oe.enabled===!0&&oe.isPresenting===!0){const ne=M.xr.getDepthSensingMesh();ne!==null&&$r(ne,B,-1/0,M.sortObjects)}$r(P,B,0,M.sortObjects),y.finish(),M.sortObjects===!0&&y.sort(he,ye),Ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ve&&ie.addToRenderList(y,P),this.info.render.frame++,Z===!0&&_e.beginShadows();const X=b.state.shadowsArray;ee.render(X,P,B),Z===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=y.opaque,z=y.transmissive;if(b.setupLights(),B.isArrayCamera){const ne=B.cameras;if(z.length>0)for(let ue=0,ge=ne.length;ue<ge;ue++){const pe=ne[ue];qa(Y,z,P,pe)}Ve&&ie.render(P);for(let ue=0,ge=ne.length;ue<ge;ue++){const pe=ne[ue];Ya(y,P,pe,pe.viewport)}}else z.length>0&&qa(Y,z,P,B),Ve&&ie.render(P),Ya(y,P,B);_!==null&&S===0&&(De.updateMultisampleRenderTarget(_),De.updateRenderTargetMipmap(_)),P.isScene===!0&&P.onAfterRender(M,P,B),U.resetDefaultState(),w=-1,R=null,v.pop(),v.length>0?(b=v[v.length-1],Z===!0&&_e.setGlobalState(M.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function $r(P,B,X,Y){if(P.visible===!1)return;if(P.layers.test(B.layers)){if(P.isGroup)X=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(B);else if(P.isLight)b.pushLight(P),P.castShadow&&b.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||W.intersectsSprite(P)){Y&&Re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(we);const ue=j.update(P),ge=P.material;ge.visible&&y.push(P,ue,ge,X,Re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||W.intersectsObject(P))){const ue=j.update(P),ge=P.material;if(Y&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Re.copy(P.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Re.copy(ue.boundingSphere.center)),Re.applyMatrix4(P.matrixWorld).applyMatrix4(we)),Array.isArray(ge)){const pe=ue.groups;for(let Ae=0,Pe=pe.length;Ae<Pe;Ae++){const Se=pe[Ae],We=ge[Se.materialIndex];We&&We.visible&&y.push(P,ue,We,X,Re.z,Se)}}else ge.visible&&y.push(P,ue,ge,X,Re.z,null)}}const ne=P.children;for(let ue=0,ge=ne.length;ue<ge;ue++)$r(ne[ue],B,X,Y)}function Ya(P,B,X,Y){const{opaque:z,transmissive:ne,transparent:ue}=P;b.setupLightsView(X),Z===!0&&_e.setGlobalState(M.clippingPlanes,X),Y&&fe.viewport(L.copy(Y)),z.length>0&&Ji(z,B,X),ne.length>0&&Ji(ne,B,X),ue.length>0&&Ji(ue,B,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function qa(P,B,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[Y.id]===void 0&&(b.state.transmissionRenderTarget[Y.id]=new Hn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?Mi:en,minFilter:Vn,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ne=b.state.transmissionRenderTarget[Y.id],ue=Y.viewport||L;ne.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);const ge=M.getRenderTarget(),pe=M.getActiveCubeFace(),Ae=M.getActiveMipmapLevel();M.setRenderTarget(ne),M.getClearColor(V),k=M.getClearAlpha(),k<1&&M.setClearColor(16777215,.5),M.clear(),Ve&&ie.render(X);const Pe=M.toneMapping;M.toneMapping=En;const Se=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),Z===!0&&_e.setGlobalState(M.clippingPlanes,Y),Ji(P,X,Y),De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne),He.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let je=0,ft=B.length;je<ft;je++){const ut=B[je],{object:nt,geometry:Ee,material:ot,group:$e}=ut;if(ot.side===zt&&nt.layers.test(Y.layers)){const Pt=ot.side;ot.side=Rt,ot.needsUpdate=!0,$a(nt,X,Y,Ee,ot,$e),ot.side=Pt,ot.needsUpdate=!0,We=!0}}We===!0&&(De.updateMultisampleRenderTarget(ne),De.updateRenderTargetMipmap(ne))}M.setRenderTarget(ge,pe,Ae),M.setClearColor(V,k),Se!==void 0&&(Y.viewport=Se),M.toneMapping=Pe}function Ji(P,B,X){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ne=P.length;z<ne;z++){const ue=P[z],{object:ge,geometry:pe,group:Ae}=ue;let Pe=ue.material;Pe.allowOverride===!0&&Y!==null&&(Pe=Y),ge.layers.test(X.layers)&&$a(ge,B,X,pe,Pe,Ae)}}function $a(P,B,X,Y,z,ne){P.onBeforeRender(M,B,X,Y,z,ne),P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),z.onBeforeRender(M,B,X,Y,P,ne),z.transparent===!0&&z.side===zt&&z.forceSinglePass===!1?(z.side=Rt,z.needsUpdate=!0,M.renderBufferDirect(X,B,Y,z,P,ne),z.side=An,z.needsUpdate=!0,M.renderBufferDirect(X,B,Y,z,P,ne),z.side=zt):M.renderBufferDirect(X,B,Y,z,P,ne),P.onAfterRender(M,B,X,Y,z,ne)}function ji(P,B,X){B.isScene!==!0&&(B=qe);const Y=Me.get(P),z=b.state.lights,ne=b.state.shadowsArray,ue=z.state.version,ge=q.getParameters(P,z.state,ne,B,X),pe=q.getProgramCacheKey(ge);let Ae=Y.programs;Y.environment=P.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(P.isMeshStandardMaterial?C:D).get(P.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&P.envMap===null?B.environmentRotation:P.envMapRotation,Ae===void 0&&(P.addEventListener("dispose",Ue),Ae=new Map,Y.programs=Ae);let Pe=Ae.get(pe);if(Pe!==void 0){if(Y.currentProgram===Pe&&Y.lightsStateVersion===ue)return Za(P,ge),Pe}else ge.uniforms=q.getUniforms(P),P.onBeforeCompile(ge,M),Pe=q.acquireProgram(ge,pe),Ae.set(pe,Pe),Y.uniforms=ge.uniforms;const Se=Y.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Se.clippingPlanes=_e.uniform),Za(P,ge),Y.needsLights=Jl(P),Y.lightsStateVersion=ue,Y.needsLights&&(Se.ambientLightColor.value=z.state.ambient,Se.lightProbe.value=z.state.probe,Se.directionalLights.value=z.state.directional,Se.directionalLightShadows.value=z.state.directionalShadow,Se.spotLights.value=z.state.spot,Se.spotLightShadows.value=z.state.spotShadow,Se.rectAreaLights.value=z.state.rectArea,Se.ltc_1.value=z.state.rectAreaLTC1,Se.ltc_2.value=z.state.rectAreaLTC2,Se.pointLights.value=z.state.point,Se.pointLightShadows.value=z.state.pointShadow,Se.hemisphereLights.value=z.state.hemi,Se.directionalShadowMap.value=z.state.directionalShadowMap,Se.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Se.spotShadowMap.value=z.state.spotShadowMap,Se.spotLightMatrix.value=z.state.spotLightMatrix,Se.spotLightMap.value=z.state.spotLightMap,Se.pointShadowMap.value=z.state.pointShadowMap,Se.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Pe,Y.uniformsList=null,Pe}function Ka(P){if(P.uniformsList===null){const B=P.currentProgram.getUniforms();P.uniformsList=Pr.seqWithValue(B.seq,P.uniforms)}return P.uniformsList}function Za(P,B){const X=Me.get(P);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Kl(P,B,X,Y,z){B.isScene!==!0&&(B=qe),De.resetTextureUnits();const ne=B.fog,ue=Y.isMeshStandardMaterial?B.environment:null,ge=_===null?M.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:gi,pe=(Y.isMeshStandardMaterial?C:D).get(Y.envMap||ue),Ae=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Pe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Se=!!X.morphAttributes.position,We=!!X.morphAttributes.normal,je=!!X.morphAttributes.color;let ft=En;Y.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(ft=M.toneMapping);const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=ut!==void 0?ut.length:0,Ee=Me.get(Y),ot=b.state.lights;if(Z===!0&&(re===!0||P!==R)){const bt=P===R&&Y.id===w;_e.setState(Y,P,bt)}let $e=!1;Y.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ot.state.version||Ee.outputColorSpace!==ge||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==pe||Y.fog===!0&&Ee.fog!==ne||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==_e.numPlanes||Ee.numIntersection!==_e.numIntersection)||Ee.vertexAlphas!==Ae||Ee.vertexTangents!==Pe||Ee.morphTargets!==Se||Ee.morphNormals!==We||Ee.morphColors!==je||Ee.toneMapping!==ft||Ee.morphTargetsCount!==nt)&&($e=!0):($e=!0,Ee.__version=Y.version);let Pt=Ee.currentProgram;$e===!0&&(Pt=ji(Y,B,z));let Wn=!1,Dt=!1,Ai=!1;const lt=Pt.getUniforms(),wt=Ee.uniforms;if(fe.useProgram(Pt.program)&&(Wn=!0,Dt=!0,Ai=!0),Y.id!==w&&(w=Y.id,Dt=!0),Wn||R!==P){fe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),lt.setValue(I,"projectionMatrix",P.projectionMatrix),lt.setValue(I,"viewMatrix",P.matrixWorldInverse);const Ct=lt.map.cameraPosition;Ct!==void 0&&Ct.setValue(I,me.setFromMatrixPosition(P.matrixWorld)),Ze.logarithmicDepthBuffer&&lt.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&lt.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),R!==P&&(R=P,Dt=!0,Ai=!0)}if(z.isSkinnedMesh){lt.setOptional(I,z,"bindMatrix"),lt.setOptional(I,z,"bindMatrixInverse");const bt=z.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),lt.setValue(I,"boneTexture",bt.boneTexture,De))}z.isBatchedMesh&&(lt.setOptional(I,z,"batchingTexture"),lt.setValue(I,"batchingTexture",z._matricesTexture,De),lt.setOptional(I,z,"batchingIdTexture"),lt.setValue(I,"batchingIdTexture",z._indirectTexture,De),lt.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&lt.setValue(I,"batchingColorTexture",z._colorsTexture,De));const Nt=X.morphAttributes;if((Nt.position!==void 0||Nt.normal!==void 0||Nt.color!==void 0)&&Ce.update(z,X,Pt),(Dt||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,lt.setValue(I,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(wt.envMap.value=pe,wt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(wt.envMapIntensity.value=B.environmentIntensity),wt.dfgLUT!==void 0&&(wt.dfgLUT.value=g0()),Dt&&(lt.setValue(I,"toneMappingExposure",M.toneMappingExposure),Ee.needsLights&&Zl(wt,Ai),ne&&Y.fog===!0&&ve.refreshFogUniforms(wt,ne),ve.refreshMaterialUniforms(wt,Y,Q,K,b.state.transmissionRenderTarget[P.id]),Pr.upload(I,Ka(Ee),wt,De)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Pr.upload(I,Ka(Ee),wt,De),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&lt.setValue(I,"center",z.center),lt.setValue(I,"modelViewMatrix",z.modelViewMatrix),lt.setValue(I,"normalMatrix",z.normalMatrix),lt.setValue(I,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const bt=Y.uniformsGroups;for(let Ct=0,Kr=bt.length;Ct<Kr;Ct++){const Pn=bt[Ct];ce.update(Pn,Pt),ce.bind(Pn,Pt)}}return Pt}function Zl(P,B){P.ambientLightColor.needsUpdate=B,P.lightProbe.needsUpdate=B,P.directionalLights.needsUpdate=B,P.directionalLightShadows.needsUpdate=B,P.pointLights.needsUpdate=B,P.pointLightShadows.needsUpdate=B,P.spotLights.needsUpdate=B,P.spotLightShadows.needsUpdate=B,P.rectAreaLights.needsUpdate=B,P.hemisphereLights.needsUpdate=B}function Jl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(P,B,X){const Y=Me.get(P);Y.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Me.get(P.texture).__webglTexture=B,Me.get(P.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,B){const X=Me.get(P);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const jl=I.createFramebuffer();this.setRenderTarget=function(P,B=0,X=0){_=P,T=B,S=X;let Y=!0,z=null,ne=!1,ue=!1;if(P){const pe=Me.get(P);if(pe.__useDefaultFramebuffer!==void 0)fe.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(pe.__webglFramebuffer===void 0)De.setupRenderTarget(P);else if(pe.__hasExternalTextures)De.rebindTextures(P,Me.get(P.texture).__webglTexture,Me.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Se=P.depthTexture;if(pe.__boundDepthTexture!==Se){if(Se!==null&&Me.has(Se)&&(P.width!==Se.image.width||P.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");De.setupDepthRenderbuffer(P)}}const Ae=P.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ue=!0);const Pe=Me.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?z=Pe[B][X]:z=Pe[B],ne=!0):P.samples>0&&De.useMultisampledRTT(P)===!1?z=Me.get(P).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[X]:z=Pe,L.copy(P.viewport),N.copy(P.scissor),F=P.scissorTest}else L.copy(Ie).multiplyScalar(Q).floor(),N.copy(Xe).multiplyScalar(Q).floor(),F=ke;if(X!==0&&(z=jl),fe.bindFramebuffer(I.FRAMEBUFFER,z)&&Y&&fe.drawBuffers(P,z),fe.viewport(L),fe.scissor(N),fe.setScissorTest(F),ne){const pe=Me.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,X)}else if(ue){const pe=B;for(let Ae=0;Ae<P.textures.length;Ae++){const Pe=Me.get(P.textures[Ae]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ae,Pe.__webglTexture,X,pe)}}else if(P!==null&&X!==0){const pe=Me.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,X)}w=-1},this.readRenderTargetPixels=function(P,B,X,Y,z,ne,ue,ge=0){if(!(P&&P.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){fe.bindFramebuffer(I.FRAMEBUFFER,pe);try{const Ae=P.textures[ge],Pe=Ae.format,Se=Ae.type;if(!Ze.textureFormatReadable(Pe)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Se)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=P.width-Y&&X>=0&&X<=P.height-z&&(P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),I.readPixels(B,X,Y,z,Le.convert(Pe),Le.convert(Se),ne))}finally{const Ae=_!==null?Me.get(_).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(P,B,X,Y,z,ne,ue,ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(B>=0&&B<=P.width-Y&&X>=0&&X<=P.height-z){fe.bindFramebuffer(I.FRAMEBUFFER,pe);const Ae=P.textures[ge],Pe=Ae.format,Se=Ae.type;if(!Ze.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,We),I.bufferData(I.PIXEL_PACK_BUFFER,ne.byteLength,I.STREAM_READ),P.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),I.readPixels(B,X,Y,z,Le.convert(Pe),Le.convert(Se),0);const je=_!==null?Me.get(_).__webglFramebuffer:null;fe.bindFramebuffer(I.FRAMEBUFFER,je);const ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Gc(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,We),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ne),I.deleteBuffer(We),I.deleteSync(ft),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,B=null,X=0){const Y=Math.pow(2,-X),z=Math.floor(P.image.width*Y),ne=Math.floor(P.image.height*Y),ue=B!==null?B.x:0,ge=B!==null?B.y:0;De.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ue,ge,z,ne),fe.unbindTexture()};const Ql=I.createFramebuffer(),ec=I.createFramebuffer();this.copyTextureToTexture=function(P,B,X=null,Y=null,z=0,ne=null){ne===null&&(z!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=z,z=0):ne=0);let ue,ge,pe,Ae,Pe,Se,We,je,ft;const ut=P.isCompressedTexture?P.mipmaps[ne]:P.image;if(X!==null)ue=X.max.x-X.min.x,ge=X.max.y-X.min.y,pe=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Pe=X.min.y,Se=X.isBox3?X.min.z:0;else{const Nt=Math.pow(2,-z);ue=Math.floor(ut.width*Nt),ge=Math.floor(ut.height*Nt),P.isDataArrayTexture?pe=ut.depth:P.isData3DTexture?pe=Math.floor(ut.depth*Nt):pe=1,Ae=0,Pe=0,Se=0}Y!==null?(We=Y.x,je=Y.y,ft=Y.z):(We=0,je=0,ft=0);const nt=Le.convert(B.format),Ee=Le.convert(B.type);let ot;B.isData3DTexture?(De.setTexture3D(B,0),ot=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(De.setTexture2DArray(B,0),ot=I.TEXTURE_2D_ARRAY):(De.setTexture2D(B,0),ot=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const $e=I.getParameter(I.UNPACK_ROW_LENGTH),Pt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Wn=I.getParameter(I.UNPACK_SKIP_PIXELS),Dt=I.getParameter(I.UNPACK_SKIP_ROWS),Ai=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Se);const lt=P.isDataArrayTexture||P.isData3DTexture,wt=B.isDataArrayTexture||B.isData3DTexture;if(P.isDepthTexture){const Nt=Me.get(P),bt=Me.get(B),Ct=Me.get(Nt.__renderTarget),Kr=Me.get(bt.__renderTarget);fe.bindFramebuffer(I.READ_FRAMEBUFFER,Ct.__webglFramebuffer),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,Kr.__webglFramebuffer);for(let Pn=0;Pn<pe;Pn++)lt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(P).__webglTexture,z,Se+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Me.get(B).__webglTexture,ne,ft+Pn)),I.blitFramebuffer(Ae,Pe,ue,ge,We,je,ue,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);fe.bindFramebuffer(I.READ_FRAMEBUFFER,null),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||P.isRenderTargetTexture||Me.has(P)){const Nt=Me.get(P),bt=Me.get(B);fe.bindFramebuffer(I.READ_FRAMEBUFFER,Ql),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,ec);for(let Ct=0;Ct<pe;Ct++)lt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,z,Se+Ct):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,z),wt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,bt.__webglTexture,ne,ft+Ct):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,ne),z!==0?I.blitFramebuffer(Ae,Pe,ue,ge,We,je,ue,ge,I.COLOR_BUFFER_BIT,I.NEAREST):wt?I.copyTexSubImage3D(ot,ne,We,je,ft+Ct,Ae,Pe,ue,ge):I.copyTexSubImage2D(ot,ne,We,je,Ae,Pe,ue,ge);fe.bindFramebuffer(I.READ_FRAMEBUFFER,null),fe.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else wt?P.isDataTexture||P.isData3DTexture?I.texSubImage3D(ot,ne,We,je,ft,ue,ge,pe,nt,Ee,ut.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(ot,ne,We,je,ft,ue,ge,pe,nt,ut.data):I.texSubImage3D(ot,ne,We,je,ft,ue,ge,pe,nt,Ee,ut):P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ne,We,je,ue,ge,nt,Ee,ut.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ne,We,je,ut.width,ut.height,nt,ut.data):I.texSubImage2D(I.TEXTURE_2D,ne,We,je,ue,ge,nt,Ee,ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Dt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ai),ne===0&&B.generateMipmaps&&I.generateMipmap(ot),fe.unbindTexture()},this.initRenderTarget=function(P){Me.get(P).__webglFramebuffer===void 0&&De.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?De.setTextureCube(P,0):P.isData3DTexture?De.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?De.setTexture2DArray(P,0):De.setTexture2D(P,0),fe.unbindTexture()},this.resetState=function(){T=0,S=0,_=null,fe.reset(),U.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Dr={exports:{}};var M0=Dr.exports,il;function S0(){return il||(il=1,(function(s,e){(function(i,r){s.exports=r()})(M0,function(){return(function(t){var i={};function r(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=i,r.d=function(n,o,a){r.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:a})},r.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,o){if(o&1&&(n=r(n)),o&8||o&4&&typeof n=="object"&&n&&n.__esModule)return n;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),o&2&&typeof n!="string")for(var c in n)r.d(a,c,(function(u){return n[u]}).bind(null,c));return a},r.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(o,"a",o),o},r.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},r.p="",r(r.s=20)})([(function(t,i){var r={};t.exports=r,(function(){r._baseDelta=1e3/60,r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(o,a){var c,u;typeof a=="boolean"?(c=2,u=a):(c=1,u=!0);for(var f=c;f<arguments.length;f++){var d=arguments[f];if(d)for(var h in d)u&&d[h]&&d[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},r.extend(o[h],u,d[h])):o[h]=d[h]}return o},r.clone=function(o,a){return r.extend({},a,o)},r.keys=function(o){if(Object.keys)return Object.keys(o);var a=[];for(var c in o)a.push(c);return a},r.values=function(o){var a=[];if(Object.keys){for(var c=Object.keys(o),u=0;u<c.length;u++)a.push(o[c[u]]);return a}for(var f in o)a.push(o[f]);return a},r.get=function(o,a,c,u){a=a.split(".").slice(c,u);for(var f=0;f<a.length;f+=1)o=o[a[f]];return o},r.set=function(o,a,c,u,f){var d=a.split(".").slice(u,f);return r.get(o,a,0,-1)[d[d.length-1]]=c,c},r.shuffle=function(o){for(var a=o.length-1;a>0;a--){var c=Math.floor(r.random()*(a+1)),u=o[a];o[a]=o[c],o[c]=u}return o},r.choose=function(o){return o[Math.floor(r.random()*o.length)]},r.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},r.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},r.isFunction=function(o){return typeof o=="function"},r.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},r.isString=function(o){return toString.call(o)==="[object String]"},r.clamp=function(o,a,c){return o<a?a:o>c?c:o},r.sign=function(o){return o<0?-1:1},r.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(o,a){return o=typeof o<"u"?o:0,a=typeof a<"u"?a:1,o+n()*(a-o)};var n=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[o]||(r.warn(o),r._warnedOnce[o]=!0)},r.deprecated=function(o,a,c){o[a]=r.chain(function(){r.warnOnce("🔅 deprecated 🔅",c)},o[a])},r.nextId=function(){return r._nextId++},r.indexOf=function(o,a){if(o.indexOf)return o.indexOf(a);for(var c=0;c<o.length;c++)if(o[c]===a)return c;return-1},r.map=function(o,a){if(o.map)return o.map(a);for(var c=[],u=0;u<o.length;u+=1)c.push(a(o[u]));return c},r.topologicalSort=function(o){var a=[],c=[],u=[];for(var f in o)!c[f]&&!u[f]&&r._topologicalSort(f,c,u,o,a);return a},r._topologicalSort=function(o,a,c,u,f){var d=u[o]||[];c[o]=!0;for(var h=0;h<d.length;h+=1){var l=d[h];c[l]||a[l]||r._topologicalSort(l,a,c,u,f)}c[o]=!1,a[o]=!0,f.push(o)},r.chain=function(){for(var o=[],a=0;a<arguments.length;a+=1){var c=arguments[a];c._chained?o.push.apply(o,c._chained):o.push(c)}var u=function(){for(var f,d=new Array(arguments.length),h=0,l=arguments.length;h<l;h++)d[h]=arguments[h];for(h=0;h<o.length;h+=1){var p=o[h].apply(f,d);typeof p<"u"&&(f=p)}return f};return u._chained=o,u},r.chainPathBefore=function(o,a,c){return r.set(o,a,r.chain(c,r.get(o,a)))},r.chainPathAfter=function(o,a,c){return r.set(o,a,r.chain(r.get(o,a),c))},r.setDecomp=function(o){r._decomp=o},r.getDecomp=function(){var o=r._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof nl<"u"&&(o=nl.decomp)}catch{o=null}return o}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(n){var o={min:{x:0,y:0},max:{x:0,y:0}};return n&&r.update(o,n),o},r.update=function(n,o,a){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var c=0;c<o.length;c++){var u=o[c];u.x>n.max.x&&(n.max.x=u.x),u.x<n.min.x&&(n.min.x=u.x),u.y>n.max.y&&(n.max.y=u.y),u.y<n.min.y&&(n.min.y=u.y)}a&&(a.x>0?n.max.x+=a.x:n.min.x+=a.x,a.y>0?n.max.y+=a.y:n.min.y+=a.y)},r.contains=function(n,o){return o.x>=n.min.x&&o.x<=n.max.x&&o.y>=n.min.y&&o.y<=n.max.y},r.overlaps=function(n,o){return n.min.x<=o.max.x&&n.max.x>=o.min.x&&n.max.y>=o.min.y&&n.min.y<=o.max.y},r.translate=function(n,o){n.min.x+=o.x,n.max.x+=o.x,n.min.y+=o.y,n.max.y+=o.y},r.shift=function(n,o){var a=n.max.x-n.min.x,c=n.max.y-n.min.y;n.min.x=o.x,n.max.x=o.x+a,n.min.y=o.y,n.max.y=o.y+c}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(n,o){return{x:n||0,y:o||0}},r.clone=function(n){return{x:n.x,y:n.y}},r.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},r.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},r.rotate=function(n,o,a){var c=Math.cos(o),u=Math.sin(o);a||(a={});var f=n.x*c-n.y*u;return a.y=n.x*u+n.y*c,a.x=f,a},r.rotateAbout=function(n,o,a,c){var u=Math.cos(o),f=Math.sin(o);c||(c={});var d=a.x+((n.x-a.x)*u-(n.y-a.y)*f);return c.y=a.y+((n.x-a.x)*f+(n.y-a.y)*u),c.x=d,c},r.normalise=function(n){var o=r.magnitude(n);return o===0?{x:0,y:0}:{x:n.x/o,y:n.y/o}},r.dot=function(n,o){return n.x*o.x+n.y*o.y},r.cross=function(n,o){return n.x*o.y-n.y*o.x},r.cross3=function(n,o,a){return(o.x-n.x)*(a.y-n.y)-(o.y-n.y)*(a.x-n.x)},r.add=function(n,o,a){return a||(a={}),a.x=n.x+o.x,a.y=n.y+o.y,a},r.sub=function(n,o,a){return a||(a={}),a.x=n.x-o.x,a.y=n.y-o.y,a},r.mult=function(n,o){return{x:n.x*o,y:n.y*o}},r.div=function(n,o){return{x:n.x/o,y:n.y/o}},r.perp=function(n,o){return o=o===!0?-1:1,{x:o*-n.y,y:o*n.x}},r.neg=function(n){return{x:-n.x,y:-n.y}},r.angle=function(n,o){return Math.atan2(o.y-n.y,o.x-n.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]})()}),(function(t,i,r){var n={};t.exports=n;var o=r(2),a=r(0);(function(){n.create=function(c,u){for(var f=[],d=0;d<c.length;d++){var h=c[d],l={x:h.x,y:h.y,index:d,body:u,isInternal:!1};f.push(l)}return f},n.fromPath=function(c,u){var f=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,d=[];return c.replace(f,function(h,l,p){d.push({x:parseFloat(l),y:parseFloat(p)})}),n.create(d,u)},n.centre=function(c){for(var u=n.area(c,!0),f={x:0,y:0},d,h,l,p=0;p<c.length;p++)l=(p+1)%c.length,d=o.cross(c[p],c[l]),h=o.mult(o.add(c[p],c[l]),d),f=o.add(f,h);return o.div(f,6*u)},n.mean=function(c){for(var u={x:0,y:0},f=0;f<c.length;f++)u.x+=c[f].x,u.y+=c[f].y;return o.div(u,c.length)},n.area=function(c,u){for(var f=0,d=c.length-1,h=0;h<c.length;h++)f+=(c[d].x-c[h].x)*(c[d].y+c[h].y),d=h;return u?f/2:Math.abs(f)/2},n.inertia=function(c,u){for(var f=0,d=0,h=c,l,p,x=0;x<h.length;x++)p=(x+1)%h.length,l=Math.abs(o.cross(h[p],h[x])),f+=l*(o.dot(h[p],h[p])+o.dot(h[p],h[x])+o.dot(h[x],h[x])),d+=l;return u/6*(f/d)},n.translate=function(c,u,f){f=typeof f<"u"?f:1;var d=c.length,h=u.x*f,l=u.y*f,p;for(p=0;p<d;p++)c[p].x+=h,c[p].y+=l;return c},n.rotate=function(c,u,f){if(u!==0){var d=Math.cos(u),h=Math.sin(u),l=f.x,p=f.y,x=c.length,m,g,y,b;for(b=0;b<x;b++)m=c[b],g=m.x-l,y=m.y-p,m.x=l+(g*d-y*h),m.y=p+(g*h+y*d);return c}},n.contains=function(c,u){for(var f=u.x,d=u.y,h=c.length,l=c[h-1],p,x=0;x<h;x++){if(p=c[x],(f-l.x)*(p.y-l.y)+(d-l.y)*(l.x-p.x)>0)return!1;l=p}return!0},n.scale=function(c,u,f,d){if(u===1&&f===1)return c;d=d||n.centre(c);for(var h,l,p=0;p<c.length;p++)h=c[p],l=o.sub(h,d),c[p].x=d.x+l.x*u,c[p].y=d.y+l.y*f;return c},n.chamfer=function(c,u,f,d,h){typeof u=="number"?u=[u]:u=u||[8],f=typeof f<"u"?f:-1,d=d||2,h=h||14;for(var l=[],p=0;p<c.length;p++){var x=c[p-1>=0?p-1:c.length-1],m=c[p],g=c[(p+1)%c.length],y=u[p<u.length?p:u.length-1];if(y===0){l.push(m);continue}var b=o.normalise({x:m.y-x.y,y:x.x-m.x}),A=o.normalise({x:g.y-m.y,y:m.x-g.x}),v=Math.sqrt(2*Math.pow(y,2)),M=o.mult(a.clone(b),y),E=o.normalise(o.mult(o.add(b,A),.5)),T=o.sub(m,o.mult(E,v)),S=f;f===-1&&(S=Math.pow(y,.32)*1.75),S=a.clamp(S,d,h),S%2===1&&(S+=1);for(var _=Math.acos(o.dot(b,A)),w=_/S,R=0;R<S;R++)l.push(o.add(o.rotate(M,w*R),T))}return l},n.clockwiseSort=function(c){var u=n.mean(c);return c.sort(function(f,d){return o.angle(u,f)-o.angle(u,d)}),c},n.isConvex=function(c){var u=0,f=c.length,d,h,l,p;if(f<3)return null;for(d=0;d<f;d++)if(h=(d+1)%f,l=(d+2)%f,p=(c[h].x-c[d].x)*(c[l].y-c[h].y),p-=(c[h].y-c[d].y)*(c[l].x-c[h].x),p<0?u|=1:p>0&&(u|=2),u===3)return!1;return u!==0?!0:null},n.hull=function(c){var u=[],f=[],d,h;for(c=c.slice(0),c.sort(function(l,p){var x=l.x-p.x;return x!==0?x:l.y-p.y}),h=0;h<c.length;h+=1){for(d=c[h];f.length>=2&&o.cross3(f[f.length-2],f[f.length-1],d)<=0;)f.pop();f.push(d)}for(h=c.length-1;h>=0;h-=1){for(d=c[h];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],d)<=0;)u.pop();u.push(d)}return u.pop(),f.pop(),u.concat(f)}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(2),c=r(7),u=r(0),f=r(1),d=r(11);(function(){n._timeCorrection=!0,n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n._baseDelta=1e3/60,n.create=function(l){var p={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},x=u.extend(p,l);return h(x,l),x},n.nextGroup=function(l){return l?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var h=function(l,p){p=p||{},n.set(l,{bounds:l.bounds||f.create(l.vertices),positionPrev:l.positionPrev||a.clone(l.position),anglePrev:l.anglePrev||l.angle,vertices:l.vertices,parts:l.parts||[l],isStatic:l.isStatic,isSleeping:l.isSleeping,parent:l.parent||l}),o.rotate(l.vertices,l.angle,l.position),d.rotate(l.axes,l.angle),f.update(l.bounds,l.vertices,l.velocity),n.set(l,{axes:p.axes||l.axes,area:p.area||l.area,mass:p.mass||l.mass,inertia:p.inertia||l.inertia});var x=l.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=l.isStatic?"#555":"#ccc",g=l.isStatic&&l.render.fillStyle===null?1:0;l.render.fillStyle=l.render.fillStyle||x,l.render.strokeStyle=l.render.strokeStyle||m,l.render.lineWidth=l.render.lineWidth||g,l.render.sprite.xOffset+=-(l.bounds.min.x-l.position.x)/(l.bounds.max.x-l.bounds.min.x),l.render.sprite.yOffset+=-(l.bounds.min.y-l.position.y)/(l.bounds.max.y-l.bounds.min.y)};n.set=function(l,p,x){var m;typeof p=="string"&&(m=p,p={},p[m]=x);for(m in p)if(Object.prototype.hasOwnProperty.call(p,m))switch(x=p[m],m){case"isStatic":n.setStatic(l,x);break;case"isSleeping":c.set(l,x);break;case"mass":n.setMass(l,x);break;case"density":n.setDensity(l,x);break;case"inertia":n.setInertia(l,x);break;case"vertices":n.setVertices(l,x);break;case"position":n.setPosition(l,x);break;case"angle":n.setAngle(l,x);break;case"velocity":n.setVelocity(l,x);break;case"angularVelocity":n.setAngularVelocity(l,x);break;case"speed":n.setSpeed(l,x);break;case"angularSpeed":n.setAngularSpeed(l,x);break;case"parts":n.setParts(l,x);break;case"centre":n.setCentre(l,x);break;default:l[m]=x}},n.setStatic=function(l,p){for(var x=0;x<l.parts.length;x++){var m=l.parts[x];p?(m.isStatic||(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia}),m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null),m.isStatic=p}},n.setMass=function(l,p){var x=l.inertia/(l.mass/6);l.inertia=x*(p/6),l.inverseInertia=1/l.inertia,l.mass=p,l.inverseMass=1/l.mass,l.density=l.mass/l.area},n.setDensity=function(l,p){n.setMass(l,p*l.area),l.density=p},n.setInertia=function(l,p){l.inertia=p,l.inverseInertia=1/l.inertia},n.setVertices=function(l,p){p[0].body===l?l.vertices=p:l.vertices=o.create(p,l),l.axes=d.fromVertices(l.vertices),l.area=o.area(l.vertices),n.setMass(l,l.density*l.area);var x=o.centre(l.vertices);o.translate(l.vertices,x,-1),n.setInertia(l,n._inertiaScale*o.inertia(l.vertices,l.mass)),o.translate(l.vertices,l.position),f.update(l.bounds,l.vertices,l.velocity)},n.setParts=function(l,p,x){var m;for(p=p.slice(0),l.parts.length=0,l.parts.push(l),l.parent=l,m=0;m<p.length;m++){var g=p[m];g!==l&&(g.parent=l,l.parts.push(g))}if(l.parts.length!==1){if(x=typeof x<"u"?x:!0,x){var y=[];for(m=0;m<p.length;m++)y=y.concat(p[m].vertices);o.clockwiseSort(y);var b=o.hull(y),A=o.centre(b);n.setVertices(l,b),o.translate(l.vertices,A)}var v=n._totalProperties(l);l.area=v.area,l.parent=l,l.position.x=v.centre.x,l.position.y=v.centre.y,l.positionPrev.x=v.centre.x,l.positionPrev.y=v.centre.y,n.setMass(l,v.mass),n.setInertia(l,v.inertia),n.setPosition(l,v.centre)}},n.setCentre=function(l,p,x){x?(l.positionPrev.x+=p.x,l.positionPrev.y+=p.y,l.position.x+=p.x,l.position.y+=p.y):(l.positionPrev.x=p.x-(l.position.x-l.positionPrev.x),l.positionPrev.y=p.y-(l.position.y-l.positionPrev.y),l.position.x=p.x,l.position.y=p.y)},n.setPosition=function(l,p,x){var m=a.sub(p,l.position);x?(l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.velocity.x=m.x,l.velocity.y=m.y,l.speed=a.magnitude(m)):(l.positionPrev.x+=m.x,l.positionPrev.y+=m.y);for(var g=0;g<l.parts.length;g++){var y=l.parts[g];y.position.x+=m.x,y.position.y+=m.y,o.translate(y.vertices,m),f.update(y.bounds,y.vertices,l.velocity)}},n.setAngle=function(l,p,x){var m=p-l.angle;x?(l.anglePrev=l.angle,l.angularVelocity=m,l.angularSpeed=Math.abs(m)):l.anglePrev+=m;for(var g=0;g<l.parts.length;g++){var y=l.parts[g];y.angle+=m,o.rotate(y.vertices,m,l.position),d.rotate(y.axes,m),f.update(y.bounds,y.vertices,l.velocity),g>0&&a.rotateAbout(y.position,m,l.position,y.position)}},n.setVelocity=function(l,p){var x=l.deltaTime/n._baseDelta;l.positionPrev.x=l.position.x-p.x*x,l.positionPrev.y=l.position.y-p.y*x,l.velocity.x=(l.position.x-l.positionPrev.x)/x,l.velocity.y=(l.position.y-l.positionPrev.y)/x,l.speed=a.magnitude(l.velocity)},n.getVelocity=function(l){var p=n._baseDelta/l.deltaTime;return{x:(l.position.x-l.positionPrev.x)*p,y:(l.position.y-l.positionPrev.y)*p}},n.getSpeed=function(l){return a.magnitude(n.getVelocity(l))},n.setSpeed=function(l,p){n.setVelocity(l,a.mult(a.normalise(n.getVelocity(l)),p))},n.setAngularVelocity=function(l,p){var x=l.deltaTime/n._baseDelta;l.anglePrev=l.angle-p*x,l.angularVelocity=(l.angle-l.anglePrev)/x,l.angularSpeed=Math.abs(l.angularVelocity)},n.getAngularVelocity=function(l){return(l.angle-l.anglePrev)*n._baseDelta/l.deltaTime},n.getAngularSpeed=function(l){return Math.abs(n.getAngularVelocity(l))},n.setAngularSpeed=function(l,p){n.setAngularVelocity(l,u.sign(n.getAngularVelocity(l))*p)},n.translate=function(l,p,x){n.setPosition(l,a.add(l.position,p),x)},n.rotate=function(l,p,x,m){if(!x)n.setAngle(l,l.angle+p,m);else{var g=Math.cos(p),y=Math.sin(p),b=l.position.x-x.x,A=l.position.y-x.y;n.setPosition(l,{x:x.x+(b*g-A*y),y:x.y+(b*y+A*g)},m),n.setAngle(l,l.angle+p,m)}},n.scale=function(l,p,x,m){var g=0,y=0;m=m||l.position;for(var b=0;b<l.parts.length;b++){var A=l.parts[b];o.scale(A.vertices,p,x,m),A.axes=d.fromVertices(A.vertices),A.area=o.area(A.vertices),n.setMass(A,l.density*A.area),o.translate(A.vertices,{x:-A.position.x,y:-A.position.y}),n.setInertia(A,n._inertiaScale*o.inertia(A.vertices,A.mass)),o.translate(A.vertices,{x:A.position.x,y:A.position.y}),b>0&&(g+=A.area,y+=A.inertia),A.position.x=m.x+(A.position.x-m.x)*p,A.position.y=m.y+(A.position.y-m.y)*x,f.update(A.bounds,A.vertices,l.velocity)}l.parts.length>1&&(l.area=g,l.isStatic||(n.setMass(l,l.density*g),n.setInertia(l,y))),l.circleRadius&&(p===x?l.circleRadius*=p:l.circleRadius=null)},n.update=function(l,p){p=(typeof p<"u"?p:1e3/60)*l.timeScale;var x=p*p,m=n._timeCorrection?p/(l.deltaTime||p):1,g=1-l.frictionAir*(p/u._baseDelta),y=(l.position.x-l.positionPrev.x)*m,b=(l.position.y-l.positionPrev.y)*m;l.velocity.x=y*g+l.force.x/l.mass*x,l.velocity.y=b*g+l.force.y/l.mass*x,l.positionPrev.x=l.position.x,l.positionPrev.y=l.position.y,l.position.x+=l.velocity.x,l.position.y+=l.velocity.y,l.deltaTime=p,l.angularVelocity=(l.angle-l.anglePrev)*g*m+l.torque/l.inertia*x,l.anglePrev=l.angle,l.angle+=l.angularVelocity;for(var A=0;A<l.parts.length;A++){var v=l.parts[A];o.translate(v.vertices,l.velocity),A>0&&(v.position.x+=l.velocity.x,v.position.y+=l.velocity.y),l.angularVelocity!==0&&(o.rotate(v.vertices,l.angularVelocity,l.position),d.rotate(v.axes,l.angularVelocity),A>0&&a.rotateAbout(v.position,l.angularVelocity,l.position,v.position)),f.update(v.bounds,v.vertices,l.velocity)}},n.updateVelocities=function(l){var p=n._baseDelta/l.deltaTime,x=l.velocity;x.x=(l.position.x-l.positionPrev.x)*p,x.y=(l.position.y-l.positionPrev.y)*p,l.speed=Math.sqrt(x.x*x.x+x.y*x.y),l.angularVelocity=(l.angle-l.anglePrev)*p,l.angularSpeed=Math.abs(l.angularVelocity)},n.applyForce=function(l,p,x){var m={x:p.x-l.position.x,y:p.y-l.position.y};l.force.x+=x.x,l.force.y+=x.y,l.torque+=m.x*x.y-m.y*x.x},n._totalProperties=function(l){for(var p={mass:0,area:0,inertia:0,centre:{x:0,y:0}},x=l.parts.length===1?0:1;x<l.parts.length;x++){var m=l.parts[x],g=m.mass!==1/0?m.mass:1;p.mass+=g,p.area+=m.area,p.inertia+=m.inertia,p.centre=a.add(p.centre,a.mult(m.position,g))}return p.centre=a.div(p.centre,p.mass),p}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(0);(function(){n.on=function(a,c,u){for(var f=c.split(" "),d,h=0;h<f.length;h++)d=f[h],a.events=a.events||{},a.events[d]=a.events[d]||[],a.events[d].push(u);return u},n.off=function(a,c,u){if(!c){a.events={};return}typeof c=="function"&&(u=c,c=o.keys(a.events).join(" "));for(var f=c.split(" "),d=0;d<f.length;d++){var h=a.events[f[d]],l=[];if(u&&h)for(var p=0;p<h.length;p++)h[p]!==u&&l.push(h[p]);a.events[f[d]]=l}},n.trigger=function(a,c,u){var f,d,h,l,p=a.events;if(p&&o.keys(p).length>0){u||(u={}),f=c.split(" ");for(var x=0;x<f.length;x++)if(d=f[x],h=p[d],h){l=o.clone(u,!1),l.name=d,l.source=a;for(var m=0;m<h.length;m++)h[m].apply(a,[l])}}}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(5),a=r(0),c=r(1),u=r(4);(function(){n.create=function(f){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},f)},n.setModified=function(f,d,h,l){if(f.isModified=d,d&&f.cache&&(f.cache.allBodies=null,f.cache.allConstraints=null,f.cache.allComposites=null),h&&f.parent&&n.setModified(f.parent,d,h,l),l)for(var p=0;p<f.composites.length;p++){var x=f.composites[p];n.setModified(x,d,h,l)}},n.add=function(f,d){var h=[].concat(d);o.trigger(f,"beforeAdd",{object:d});for(var l=0;l<h.length;l++){var p=h[l];switch(p.type){case"body":if(p.parent!==p){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(f,p);break;case"constraint":n.addConstraint(f,p);break;case"composite":n.addComposite(f,p);break;case"mouseConstraint":n.addConstraint(f,p.constraint);break}}return o.trigger(f,"afterAdd",{object:d}),f},n.remove=function(f,d,h){var l=[].concat(d);o.trigger(f,"beforeRemove",{object:d});for(var p=0;p<l.length;p++){var x=l[p];switch(x.type){case"body":n.removeBody(f,x,h);break;case"constraint":n.removeConstraint(f,x,h);break;case"composite":n.removeComposite(f,x,h);break;case"mouseConstraint":n.removeConstraint(f,x.constraint);break}}return o.trigger(f,"afterRemove",{object:d}),f},n.addComposite=function(f,d){return f.composites.push(d),d.parent=f,n.setModified(f,!0,!0,!1),f},n.removeComposite=function(f,d,h){var l=a.indexOf(f.composites,d);if(l!==-1){var p=n.allBodies(d);n.removeCompositeAt(f,l);for(var x=0;x<p.length;x++)p[x].sleepCounter=0}if(h)for(var x=0;x<f.composites.length;x++)n.removeComposite(f.composites[x],d,!0);return f},n.removeCompositeAt=function(f,d){return f.composites.splice(d,1),n.setModified(f,!0,!0,!1),f},n.addBody=function(f,d){return f.bodies.push(d),n.setModified(f,!0,!0,!1),f},n.removeBody=function(f,d,h){var l=a.indexOf(f.bodies,d);if(l!==-1&&(n.removeBodyAt(f,l),d.sleepCounter=0),h)for(var p=0;p<f.composites.length;p++)n.removeBody(f.composites[p],d,!0);return f},n.removeBodyAt=function(f,d){return f.bodies.splice(d,1),n.setModified(f,!0,!0,!1),f},n.addConstraint=function(f,d){return f.constraints.push(d),n.setModified(f,!0,!0,!1),f},n.removeConstraint=function(f,d,h){var l=a.indexOf(f.constraints,d);if(l!==-1&&n.removeConstraintAt(f,l),h)for(var p=0;p<f.composites.length;p++)n.removeConstraint(f.composites[p],d,!0);return f},n.removeConstraintAt=function(f,d){return f.constraints.splice(d,1),n.setModified(f,!0,!0,!1),f},n.clear=function(f,d,h){if(h)for(var l=0;l<f.composites.length;l++)n.clear(f.composites[l],d,!0);return d?f.bodies=f.bodies.filter(function(p){return p.isStatic}):f.bodies.length=0,f.constraints.length=0,f.composites.length=0,n.setModified(f,!0,!0,!1),f},n.allBodies=function(f){if(f.cache&&f.cache.allBodies)return f.cache.allBodies;for(var d=[].concat(f.bodies),h=0;h<f.composites.length;h++)d=d.concat(n.allBodies(f.composites[h]));return f.cache&&(f.cache.allBodies=d),d},n.allConstraints=function(f){if(f.cache&&f.cache.allConstraints)return f.cache.allConstraints;for(var d=[].concat(f.constraints),h=0;h<f.composites.length;h++)d=d.concat(n.allConstraints(f.composites[h]));return f.cache&&(f.cache.allConstraints=d),d},n.allComposites=function(f){if(f.cache&&f.cache.allComposites)return f.cache.allComposites;for(var d=[].concat(f.composites),h=0;h<f.composites.length;h++)d=d.concat(n.allComposites(f.composites[h]));return f.cache&&(f.cache.allComposites=d),d},n.get=function(f,d,h){var l,p;switch(h){case"body":l=n.allBodies(f);break;case"constraint":l=n.allConstraints(f);break;case"composite":l=n.allComposites(f).concat(f);break}return l?(p=l.filter(function(x){return x.id.toString()===d.toString()}),p.length===0?null:p[0]):null},n.move=function(f,d,h){return n.remove(f,d),n.add(h,d),f},n.rebase=function(f){for(var d=n.allBodies(f).concat(n.allConstraints(f)).concat(n.allComposites(f)),h=0;h<d.length;h++)d[h].id=a.nextId();return f},n.translate=function(f,d,h){for(var l=h?n.allBodies(f):f.bodies,p=0;p<l.length;p++)u.translate(l[p],d);return f},n.rotate=function(f,d,h,l){for(var p=Math.cos(d),x=Math.sin(d),m=l?n.allBodies(f):f.bodies,g=0;g<m.length;g++){var y=m[g],b=y.position.x-h.x,A=y.position.y-h.y;u.setPosition(y,{x:h.x+(b*p-A*x),y:h.y+(b*x+A*p)}),u.rotate(y,d)}return f},n.scale=function(f,d,h,l,p){for(var x=p?n.allBodies(f):f.bodies,m=0;m<x.length;m++){var g=x[m],y=g.position.x-l.x,b=g.position.y-l.y;u.setPosition(g,{x:l.x+y*d,y:l.y+b*h}),u.scale(g,d,h)}return f},n.bounds=function(f){for(var d=n.allBodies(f),h=[],l=0;l<d.length;l+=1){var p=d[l];h.push(p.bounds.min,p.bounds.max)}return c.create(h)}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(4),a=r(5),c=r(0);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(u,f){for(var d=f/c._baseDelta,h=n._motionSleepThreshold,l=0;l<u.length;l++){var p=u[l],x=o.getSpeed(p),m=o.getAngularSpeed(p),g=x*x+m*m;if(p.force.x!==0||p.force.y!==0){n.set(p,!1);continue}var y=Math.min(p.motion,g),b=Math.max(p.motion,g);p.motion=n._minBias*y+(1-n._minBias)*b,p.sleepThreshold>0&&p.motion<h?(p.sleepCounter+=1,p.sleepCounter>=p.sleepThreshold/d&&n.set(p,!0)):p.sleepCounter>0&&(p.sleepCounter-=1)}},n.afterCollisions=function(u){for(var f=n._motionSleepThreshold,d=0;d<u.length;d++){var h=u[d];if(h.isActive){var l=h.collision,p=l.bodyA.parent,x=l.bodyB.parent;if(!(p.isSleeping&&x.isSleeping||p.isStatic||x.isStatic)&&(p.isSleeping||x.isSleeping)){var m=p.isSleeping&&!p.isStatic?p:x,g=m===p?x:p;!m.isStatic&&g.motion>f&&n.set(m,!1)}}}},n.set=function(u,f){var d=u.isSleeping;f?(u.isSleeping=!0,u.sleepCounter=u.sleepThreshold,u.positionImpulse.x=0,u.positionImpulse.y=0,u.positionPrev.x=u.position.x,u.positionPrev.y=u.position.y,u.anglePrev=u.angle,u.speed=0,u.angularSpeed=0,u.motion=0,d||a.trigger(u,"sleepStart")):(u.isSleeping=!1,u.sleepCounter=0,d&&a.trigger(u,"sleepEnd"))}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(9);(function(){var c=[],u={overlap:0,axis:null},f={overlap:0,axis:null};n.create=function(d,h){return{pair:null,collided:!1,bodyA:d,bodyB:h,parentA:d.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},n.collides=function(d,h,l){if(n._overlapAxes(u,d.vertices,h.vertices,d.axes),u.overlap<=0||(n._overlapAxes(f,h.vertices,d.vertices,h.axes),f.overlap<=0))return null;var p=l&&l.table[a.id(d,h)],x;p?x=p.collision:(x=n.create(d,h),x.collided=!0,x.bodyA=d.id<h.id?d:h,x.bodyB=d.id<h.id?h:d,x.parentA=x.bodyA.parent,x.parentB=x.bodyB.parent),d=x.bodyA,h=x.bodyB;var m;u.overlap<f.overlap?m=u:m=f;var g=x.normal,y=x.tangent,b=x.penetration,A=x.supports,v=m.overlap,M=m.axis,E=M.x,T=M.y,S=h.position.x-d.position.x,_=h.position.y-d.position.y;E*S+T*_>=0&&(E=-E,T=-T),g.x=E,g.y=T,y.x=-T,y.y=E,b.x=E*v,b.y=T*v,x.depth=v;var w=n._findSupports(d,h,g,1),R=0;if(o.contains(d.vertices,w[0])&&(A[R++]=w[0]),o.contains(d.vertices,w[1])&&(A[R++]=w[1]),R<2){var L=n._findSupports(h,d,g,-1);o.contains(h.vertices,L[0])&&(A[R++]=L[0]),R<2&&o.contains(h.vertices,L[1])&&(A[R++]=L[1])}return R===0&&(A[R++]=w[0]),x.supportCount=R,x},n._overlapAxes=function(d,h,l,p){var x=h.length,m=l.length,g=h[0].x,y=h[0].y,b=l[0].x,A=l[0].y,v=p.length,M=Number.MAX_VALUE,E=0,T,S,_,w,R,L;for(R=0;R<v;R++){var N=p[R],F=N.x,V=N.y,k=g*F+y*V,G=b*F+A*V,K=k,Q=G;for(L=1;L<x;L+=1)w=h[L].x*F+h[L].y*V,w>K?K=w:w<k&&(k=w);for(L=1;L<m;L+=1)w=l[L].x*F+l[L].y*V,w>Q?Q=w:w<G&&(G=w);if(S=K-G,_=Q-k,T=S<_?S:_,T<M&&(M=T,E=R,T<=0))break}d.axis=p[E],d.overlap=M},n._findSupports=function(d,h,l,p){var x=h.vertices,m=x.length,g=d.position.x,y=d.position.y,b=l.x*p,A=l.y*p,v=x[0],M=v,E=b*(g-M.x)+A*(y-M.y),T,S,_;for(_=1;_<m;_+=1)M=x[_],S=b*(g-M.x)+A*(y-M.y),S<E&&(E=S,v=M);return T=x[(m+v.index-1)%m],E=b*(g-T.x)+A*(y-T.y),M=x[(v.index+1)%m],b*(g-M.x)+A*(y-M.y)<E?(c[0]=v,c[1]=M,c):(c[0]=v,c[1]=T,c)}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(16);(function(){n.create=function(a,c){var u=a.bodyA,f=a.bodyB,d={id:n.id(u,f),bodyA:u,bodyB:f,collision:a,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:u.isSensor||f.isSensor,timeCreated:c,timeUpdated:c,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(d,a,c),d},n.update=function(a,c,u){var f=c.supports,d=c.supportCount,h=a.contacts,l=c.parentA,p=c.parentB;a.isActive=!0,a.timeUpdated=u,a.collision=c,a.separation=c.depth,a.inverseMass=l.inverseMass+p.inverseMass,a.friction=l.friction<p.friction?l.friction:p.friction,a.frictionStatic=l.frictionStatic>p.frictionStatic?l.frictionStatic:p.frictionStatic,a.restitution=l.restitution>p.restitution?l.restitution:p.restitution,a.slop=l.slop>p.slop?l.slop:p.slop,a.contactCount=d,c.pair=a;var x=f[0],m=h[0],g=f[1],y=h[1];(y.vertex===x||m.vertex===g)&&(h[1]=m,h[0]=m=y,y=h[1]),m.vertex=x,y.vertex=g},n.setActive=function(a,c,u){c?(a.isActive=!0,a.timeUpdated=u):(a.isActive=!1,a.contactCount=0)},n.id=function(a,c){return a.id<c.id?a.id.toString(36)+":"+c.id.toString(36):c.id.toString(36)+":"+a.id.toString(36)}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(2),c=r(7),u=r(1),f=r(11),d=r(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(h){var l=h;l.bodyA&&!l.pointA&&(l.pointA={x:0,y:0}),l.bodyB&&!l.pointB&&(l.pointB={x:0,y:0});var p=l.bodyA?a.add(l.bodyA.position,l.pointA):l.pointA,x=l.bodyB?a.add(l.bodyB.position,l.pointB):l.pointB,m=a.magnitude(a.sub(p,x));l.length=typeof l.length<"u"?l.length:m,l.id=l.id||d.nextId(),l.label=l.label||"Constraint",l.type="constraint",l.stiffness=l.stiffness||(l.length>0?1:.7),l.damping=l.damping||0,l.angularStiffness=l.angularStiffness||0,l.angleA=l.bodyA?l.bodyA.angle:l.angleA,l.angleB=l.bodyB?l.bodyB.angle:l.angleB,l.plugin={};var g={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return l.length===0&&l.stiffness>.1?(g.type="pin",g.anchors=!1):l.stiffness<.9&&(g.type="spring"),l.render=d.extend(g,l.render),l},n.preSolveAll=function(h){for(var l=0;l<h.length;l+=1){var p=h[l],x=p.constraintImpulse;p.isStatic||x.x===0&&x.y===0&&x.angle===0||(p.position.x+=x.x,p.position.y+=x.y,p.angle+=x.angle)}},n.solveAll=function(h,l){for(var p=d.clamp(l/d._baseDelta,0,1),x=0;x<h.length;x+=1){var m=h[x],g=!m.bodyA||m.bodyA&&m.bodyA.isStatic,y=!m.bodyB||m.bodyB&&m.bodyB.isStatic;(g||y)&&n.solve(h[x],p)}for(x=0;x<h.length;x+=1)m=h[x],g=!m.bodyA||m.bodyA&&m.bodyA.isStatic,y=!m.bodyB||m.bodyB&&m.bodyB.isStatic,!g&&!y&&n.solve(h[x],p)},n.solve=function(h,l){var p=h.bodyA,x=h.bodyB,m=h.pointA,g=h.pointB;if(!(!p&&!x)){p&&!p.isStatic&&(a.rotate(m,p.angle-h.angleA,m),h.angleA=p.angle),x&&!x.isStatic&&(a.rotate(g,x.angle-h.angleB,g),h.angleB=x.angle);var y=m,b=g;if(p&&(y=a.add(p.position,m)),x&&(b=a.add(x.position,g)),!(!y||!b)){var A=a.sub(y,b),v=a.magnitude(A);v<n._minLength&&(v=n._minLength);var M=(v-h.length)/v,E=h.stiffness>=1||h.length===0,T=E?h.stiffness*l:h.stiffness*l*l,S=h.damping*l,_=a.mult(A,M*T),w=(p?p.inverseMass:0)+(x?x.inverseMass:0),R=(p?p.inverseInertia:0)+(x?x.inverseInertia:0),L=w+R,N,F,V,k,G;if(S>0){var K=a.create();V=a.div(A,v),G=a.sub(x&&a.sub(x.position,x.positionPrev)||K,p&&a.sub(p.position,p.positionPrev)||K),k=a.dot(V,G)}p&&!p.isStatic&&(F=p.inverseMass/w,p.constraintImpulse.x-=_.x*F,p.constraintImpulse.y-=_.y*F,p.position.x-=_.x*F,p.position.y-=_.y*F,S>0&&(p.positionPrev.x-=S*V.x*k*F,p.positionPrev.y-=S*V.y*k*F),N=a.cross(m,_)/L*n._torqueDampen*p.inverseInertia*(1-h.angularStiffness),p.constraintImpulse.angle-=N,p.angle-=N),x&&!x.isStatic&&(F=x.inverseMass/w,x.constraintImpulse.x+=_.x*F,x.constraintImpulse.y+=_.y*F,x.position.x+=_.x*F,x.position.y+=_.y*F,S>0&&(x.positionPrev.x+=S*V.x*k*F,x.positionPrev.y+=S*V.y*k*F),N=a.cross(g,_)/L*n._torqueDampen*x.inverseInertia*(1-h.angularStiffness),x.constraintImpulse.angle+=N,x.angle+=N)}}},n.postSolveAll=function(h){for(var l=0;l<h.length;l++){var p=h[l],x=p.constraintImpulse;if(!(p.isStatic||x.x===0&&x.y===0&&x.angle===0)){c.set(p,!1);for(var m=0;m<p.parts.length;m++){var g=p.parts[m];o.translate(g.vertices,x),m>0&&(g.position.x+=x.x,g.position.y+=x.y),x.angle!==0&&(o.rotate(g.vertices,x.angle,p.position),f.rotate(g.axes,x.angle),m>0&&a.rotateAbout(g.position,x.angle,p.position,g.position)),u.update(g.bounds,g.vertices,p.velocity)}x.angle*=n._warming,x.x*=n._warming,x.y*=n._warming}}},n.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),y:(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0)}},n.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),y:(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0)}},n.currentLength=function(h){var l=(h.bodyA?h.bodyA.position.x:0)+(h.pointA?h.pointA.x:0),p=(h.bodyA?h.bodyA.position.y:0)+(h.pointA?h.pointA.y:0),x=(h.bodyB?h.bodyB.position.x:0)+(h.pointB?h.pointB.x:0),m=(h.bodyB?h.bodyB.position.y:0)+(h.pointB?h.pointB.y:0),g=l-x,y=p-m;return Math.sqrt(g*g+y*y)}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(2),a=r(0);(function(){n.fromVertices=function(c){for(var u={},f=0;f<c.length;f++){var d=(f+1)%c.length,h=o.normalise({x:c[d].y-c[f].y,y:c[f].x-c[d].x}),l=h.y===0?1/0:h.x/h.y;l=l.toFixed(3).toString(),u[l]=h}return a.values(u)},n.rotate=function(c,u){if(u!==0)for(var f=Math.cos(u),d=Math.sin(u),h=0;h<c.length;h++){var l=c[h],p;p=l.x*f-l.y*d,l.y=l.x*d+l.y*f,l.x=p}}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(0),c=r(4),u=r(1),f=r(2);(function(){n.rectangle=function(d,h,l,p,x){x=x||{};var m={label:"Rectangle Body",position:{x:d,y:h},vertices:o.fromPath("L 0 0 L "+l+" 0 L "+l+" "+p+" L 0 "+p)};if(x.chamfer){var g=x.chamfer;m.vertices=o.chamfer(m.vertices,g.radius,g.quality,g.qualityMin,g.qualityMax),delete x.chamfer}return c.create(a.extend({},m,x))},n.trapezoid=function(d,h,l,p,x,m){m=m||{},x>=1&&a.warn("Bodies.trapezoid: slope parameter must be < 1."),x*=.5;var g=(1-x*2)*l,y=l*x,b=y+g,A=b+y,v;x<.5?v="L 0 0 L "+y+" "+-p+" L "+b+" "+-p+" L "+A+" 0":v="L 0 0 L "+b+" "+-p+" L "+A+" 0";var M={label:"Trapezoid Body",position:{x:d,y:h},vertices:o.fromPath(v)};if(m.chamfer){var E=m.chamfer;M.vertices=o.chamfer(M.vertices,E.radius,E.quality,E.qualityMin,E.qualityMax),delete m.chamfer}return c.create(a.extend({},M,m))},n.circle=function(d,h,l,p,x){p=p||{};var m={label:"Circle Body",circleRadius:l};x=x||25;var g=Math.ceil(Math.max(10,Math.min(x,l)));return g%2===1&&(g+=1),n.polygon(d,h,g,l,a.extend({},m,p))},n.polygon=function(d,h,l,p,x){if(x=x||{},l<3)return n.circle(d,h,p,x);for(var m=2*Math.PI/l,g="",y=m*.5,b=0;b<l;b+=1){var A=y+b*m,v=Math.cos(A)*p,M=Math.sin(A)*p;g+="L "+v.toFixed(3)+" "+M.toFixed(3)+" "}var E={label:"Polygon Body",position:{x:d,y:h},vertices:o.fromPath(g)};if(x.chamfer){var T=x.chamfer;E.vertices=o.chamfer(E.vertices,T.radius,T.quality,T.qualityMin,T.qualityMax),delete x.chamfer}return c.create(a.extend({},E,x))},n.fromVertices=function(d,h,l,p,x,m,g,y){var b=a.getDecomp(),A,v,M,E,T,S,_,w,R,L,N;for(A=!!(b&&b.quickDecomp),p=p||{},M=[],x=typeof x<"u"?x:!1,m=typeof m<"u"?m:.01,g=typeof g<"u"?g:10,y=typeof y<"u"?y:.01,a.isArray(l[0])||(l=[l]),L=0;L<l.length;L+=1)if(S=l[L],E=o.isConvex(S),T=!E,T&&!A&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),E||!A)E?S=o.clockwiseSort(S):S=o.hull(S),M.push({position:{x:d,y:h},vertices:S});else{var F=S.map(function(W){return[W.x,W.y]});b.makeCCW(F),m!==!1&&b.removeCollinearPoints(F,m),y!==!1&&b.removeDuplicatePoints&&b.removeDuplicatePoints(F,y);var V=b.quickDecomp(F);for(_=0;_<V.length;_++){var k=V[_],G=k.map(function(W){return{x:W[0],y:W[1]}});g>0&&o.area(G)<g||M.push({position:o.centre(G),vertices:G})}}for(_=0;_<M.length;_++)M[_]=c.create(a.extend(M[_],p));if(x){var K=5;for(_=0;_<M.length;_++){var Q=M[_];for(w=_+1;w<M.length;w++){var he=M[w];if(u.overlaps(Q.bounds,he.bounds)){var ye=Q.vertices,Ie=he.vertices;for(R=0;R<Q.vertices.length;R++)for(N=0;N<he.vertices.length;N++){var Xe=f.magnitudeSquared(f.sub(ye[(R+1)%ye.length],Ie[N])),ke=f.magnitudeSquared(f.sub(ye[R],Ie[(N+1)%Ie.length]));Xe<K&&ke<K&&(ye[R].isInternal=!0,Ie[N].isInternal=!0)}}}}}return M.length>1?(v=c.create(a.extend({parts:M.slice(0)},p)),c.setPosition(v,{x:d,y:h}),v):M[0]}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(0),a=r(8);(function(){n.create=function(c){var u={bodies:[],collisions:[],pairs:null};return o.extend(u,c)},n.setBodies=function(c,u){c.bodies=u.slice(0)},n.clear=function(c){c.bodies=[],c.collisions=[]},n.collisions=function(c){var u=c.pairs,f=c.bodies,d=f.length,h=n.canCollide,l=a.collides,p=c.collisions,x=0,m,g;for(f.sort(n._compareBoundsX),m=0;m<d;m++){var y=f[m],b=y.bounds,A=y.bounds.max.x,v=y.bounds.max.y,M=y.bounds.min.y,E=y.isStatic||y.isSleeping,T=y.parts.length,S=T===1;for(g=m+1;g<d;g++){var _=f[g],w=_.bounds;if(w.min.x>A)break;if(!(v<w.min.y||M>w.max.y)&&!(E&&(_.isStatic||_.isSleeping))&&h(y.collisionFilter,_.collisionFilter)){var R=_.parts.length;if(S&&R===1){var L=l(y,_,u);L&&(p[x++]=L)}else for(var N=T>1?1:0,F=R>1?1:0,V=N;V<T;V++)for(var k=y.parts[V],b=k.bounds,G=F;G<R;G++){var K=_.parts[G],w=K.bounds;if(!(b.min.x>w.max.x||b.max.x<w.min.x||b.max.y<w.min.y||b.min.y>w.max.y)){var L=l(k,K,u);L&&(p[x++]=L)}}}}}return p.length!==x&&(p.length=x),p},n.canCollide=function(c,u){return c.group===u.group&&c.group!==0?c.group>0:(c.mask&u.category)!==0&&(u.mask&c.category)!==0},n._compareBoundsX=function(c,u){return c.bounds.min.x-u.bounds.min.x}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(0);(function(){n.create=function(a){var c={};return a||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),c.element=a||document.body,c.absolute={x:0,y:0},c.position={x:0,y:0},c.mousedownPosition={x:0,y:0},c.mouseupPosition={x:0,y:0},c.offset={x:0,y:0},c.scale={x:1,y:1},c.wheelDelta=0,c.button=-1,c.pixelRatio=parseInt(c.element.getAttribute("data-pixel-ratio"),10)||1,c.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},c.mousemove=function(u){var f=n._getRelativeMousePosition(u,c.element,c.pixelRatio),d=u.changedTouches;d&&(c.button=0,u.preventDefault()),c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.sourceEvents.mousemove=u},c.mousedown=function(u){var f=n._getRelativeMousePosition(u,c.element,c.pixelRatio),d=u.changedTouches;d?(c.button=0,u.preventDefault()):c.button=u.button,c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mousedownPosition.x=c.position.x,c.mousedownPosition.y=c.position.y,c.sourceEvents.mousedown=u},c.mouseup=function(u){var f=n._getRelativeMousePosition(u,c.element,c.pixelRatio),d=u.changedTouches;d&&u.preventDefault(),c.button=-1,c.absolute.x=f.x,c.absolute.y=f.y,c.position.x=c.absolute.x*c.scale.x+c.offset.x,c.position.y=c.absolute.y*c.scale.y+c.offset.y,c.mouseupPosition.x=c.position.x,c.mouseupPosition.y=c.position.y,c.sourceEvents.mouseup=u},c.mousewheel=function(u){c.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault(),c.sourceEvents.mousewheel=u},n.setElement(c,c.element),c},n.setElement=function(a,c){a.element=c,c.addEventListener("mousemove",a.mousemove,{passive:!0}),c.addEventListener("mousedown",a.mousedown,{passive:!0}),c.addEventListener("mouseup",a.mouseup,{passive:!0}),c.addEventListener("wheel",a.mousewheel,{passive:!1}),c.addEventListener("touchmove",a.mousemove,{passive:!1}),c.addEventListener("touchstart",a.mousedown,{passive:!1}),c.addEventListener("touchend",a.mouseup,{passive:!1})},n.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},n.setOffset=function(a,c){a.offset.x=c.x,a.offset.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n.setScale=function(a,c){a.scale.x=c.x,a.scale.y=c.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n._getRelativeMousePosition=function(a,c,u){var f=c.getBoundingClientRect(),d=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:d.scrollLeft,l=window.pageYOffset!==void 0?window.pageYOffset:d.scrollTop,p=a.changedTouches,x,m;return p?(x=p[0].pageX-f.left-h,m=p[0].pageY-f.top-l):(x=a.pageX-f.left-h,m=a.pageY-f.top-l),{x:x/(c.clientWidth/(c.width||c.clientWidth)*u),y:m/(c.clientHeight/(c.height||c.clientHeight)*u)}}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(0);(function(){n._registry={},n.register=function(a){if(n.isPlugin(a)||o.warn("Plugin.register:",n.toString(a),"does not implement all required fields."),a.name in n._registry){var c=n._registry[a.name],u=n.versionParse(a.version).number,f=n.versionParse(c.version).number;u>f?(o.warn("Plugin.register:",n.toString(c),"was upgraded to",n.toString(a)),n._registry[a.name]=a):u<f?o.warn("Plugin.register:",n.toString(c),"can not be downgraded to",n.toString(a)):a!==c&&o.warn("Plugin.register:",n.toString(a),"is already registered to different plugin object")}else n._registry[a.name]=a;return a},n.resolve=function(a){return n._registry[n.dependencyParse(a).name]},n.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},n.isPlugin=function(a){return a&&a.name&&a.version&&a.install},n.isUsed=function(a,c){return a.used.indexOf(c)>-1},n.isFor=function(a,c){var u=a.for&&n.dependencyParse(a.for);return!a.for||c.name===u.name&&n.versionSatisfies(c.version,u.range)},n.use=function(a,c){if(a.uses=(a.uses||[]).concat(c||[]),a.uses.length===0){o.warn("Plugin.use:",n.toString(a),"does not specify any dependencies to install.");return}for(var u=n.dependencies(a),f=o.topologicalSort(u),d=[],h=0;h<f.length;h+=1)if(f[h]!==a.name){var l=n.resolve(f[h]);if(!l){d.push("❌ "+f[h]);continue}n.isUsed(a,l.name)||(n.isFor(l,a)||(o.warn("Plugin.use:",n.toString(l),"is for",l.for,"but installed on",n.toString(a)+"."),l._warned=!0),l.install?l.install(a):(o.warn("Plugin.use:",n.toString(l),"does not specify an install function."),l._warned=!0),l._warned?(d.push("🔶 "+n.toString(l)),delete l._warned):d.push("✅ "+n.toString(l)),a.used.push(l.name))}d.length>0&&o.info(d.join("  "))},n.dependencies=function(a,c){var u=n.dependencyParse(a),f=u.name;if(c=c||{},!(f in c)){a=n.resolve(a)||a,c[f]=o.map(a.uses||[],function(h){n.isPlugin(h)&&n.register(h);var l=n.dependencyParse(h),p=n.resolve(h);return p&&!n.versionSatisfies(p.version,l.range)?(o.warn("Plugin.dependencies:",n.toString(p),"does not satisfy",n.toString(l),"used by",n.toString(u)+"."),p._warned=!0,a._warned=!0):p||(o.warn("Plugin.dependencies:",n.toString(h),"used by",n.toString(u),"could not be resolved."),a._warned=!0),l.name});for(var d=0;d<c[f].length;d+=1)n.dependencies(c[f][d],c);return c}},n.dependencyParse=function(a){if(o.isString(a)){var c=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return c.test(a)||o.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},n.versionParse=function(a){var c=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;c.test(a)||o.warn("Plugin.versionParse:",a,"is not a valid version or range.");var u=c.exec(a),f=Number(u[4]),d=Number(u[5]),h=Number(u[6]);return{isRange:!!(u[1]||u[2]),version:u[3],range:a,operator:u[1]||u[2]||"",major:f,minor:d,patch:h,parts:[f,d,h],prerelease:u[7],number:f*1e8+d*1e4+h}},n.versionSatisfies=function(a,c){c=c||"*";var u=n.versionParse(c),f=n.versionParse(a);if(u.isRange){if(u.operator==="*"||a==="*")return!0;if(u.operator===">")return f.number>u.number;if(u.operator===">=")return f.number>=u.number;if(u.operator==="~")return f.major===u.major&&f.minor===u.minor&&f.patch>=u.patch;if(u.operator==="^")return u.major>0?f.major===u.major&&f.number>=u.number:u.minor>0?f.minor===u.minor&&f.patch>=u.patch:f.patch===u.patch}return a===c||a==="*"}})()}),(function(t,i){var r={};t.exports=r,(function(){r.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(7),a=r(18),c=r(13),u=r(19),f=r(5),d=r(6),h=r(10),l=r(0),p=r(4);(function(){n._deltaMax=1e3/60,n.create=function(x){x=x||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},g=l.extend(m,x);return g.world=x.world||d.create({label:"World"}),g.pairs=x.pairs||u.create(),g.detector=x.detector||c.create(),g.detector.pairs=g.pairs,g.grid={buckets:[]},g.world.gravity=g.gravity,g.broadphase=g.grid,g.metrics={},g},n.update=function(x,m){var g=l.now(),y=x.world,b=x.detector,A=x.pairs,v=x.timing,M=v.timestamp,E;m>n._deltaMax&&l.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",n._deltaMax.toFixed(3),"ms."),m=typeof m<"u"?m:l._baseDelta,m*=v.timeScale,v.timestamp+=m,v.lastDelta=m;var T={timestamp:v.timestamp,delta:m};f.trigger(x,"beforeUpdate",T);var S=d.allBodies(y),_=d.allConstraints(y);for(y.isModified&&(c.setBodies(b,S),d.setModified(y,!1,!1,!0)),x.enableSleeping&&o.update(S,m),n._bodiesApplyGravity(S,x.gravity),m>0&&n._bodiesUpdate(S,m),f.trigger(x,"beforeSolve",T),h.preSolveAll(S),E=0;E<x.constraintIterations;E++)h.solveAll(_,m);h.postSolveAll(S);var w=c.collisions(b);u.update(A,w,M),x.enableSleeping&&o.afterCollisions(A.list),A.collisionStart.length>0&&f.trigger(x,"collisionStart",{pairs:A.collisionStart,timestamp:v.timestamp,delta:m});var R=l.clamp(20/x.positionIterations,0,1);for(a.preSolvePosition(A.list),E=0;E<x.positionIterations;E++)a.solvePosition(A.list,m,R);for(a.postSolvePosition(S),h.preSolveAll(S),E=0;E<x.constraintIterations;E++)h.solveAll(_,m);for(h.postSolveAll(S),a.preSolveVelocity(A.list),E=0;E<x.velocityIterations;E++)a.solveVelocity(A.list,m);return n._bodiesUpdateVelocities(S),A.collisionActive.length>0&&f.trigger(x,"collisionActive",{pairs:A.collisionActive,timestamp:v.timestamp,delta:m}),A.collisionEnd.length>0&&f.trigger(x,"collisionEnd",{pairs:A.collisionEnd,timestamp:v.timestamp,delta:m}),n._bodiesClearForces(S),f.trigger(x,"afterUpdate",T),x.timing.lastElapsed=l.now()-g,x},n.merge=function(x,m){if(l.extend(x,m),m.world){x.world=m.world,n.clear(x);for(var g=d.allBodies(x.world),y=0;y<g.length;y++){var b=g[y];o.set(b,!1),b.id=l.nextId()}}},n.clear=function(x){u.clear(x.pairs),c.clear(x.detector)},n._bodiesClearForces=function(x){for(var m=x.length,g=0;g<m;g++){var y=x[g];y.force.x=0,y.force.y=0,y.torque=0}},n._bodiesApplyGravity=function(x,m){var g=typeof m.scale<"u"?m.scale:.001,y=x.length;if(!(m.x===0&&m.y===0||g===0))for(var b=0;b<y;b++){var A=x[b];A.isStatic||A.isSleeping||(A.force.y+=A.mass*m.y*g,A.force.x+=A.mass*m.x*g)}},n._bodiesUpdate=function(x,m){for(var g=x.length,y=0;y<g;y++){var b=x[y];b.isStatic||b.isSleeping||p.update(b,m)}},n._bodiesUpdateVelocities=function(x){for(var m=x.length,g=0;g<m;g++)p.updateVelocities(x[g])}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(0),c=r(1);(function(){n._restingThresh=2,n._restingThreshTangent=Math.sqrt(6),n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n._frictionMaxStatic=Number.MAX_VALUE,n.preSolvePosition=function(u){var f,d,h,l=u.length;for(f=0;f<l;f++)d=u[f],d.isActive&&(h=d.contactCount,d.collision.parentA.totalContacts+=h,d.collision.parentB.totalContacts+=h)},n.solvePosition=function(u,f,d){var h,l,p,x,m,g,y,b,A=n._positionDampen*(d||1),v=a.clamp(f/a._baseDelta,0,1),M=u.length;for(h=0;h<M;h++)l=u[h],!(!l.isActive||l.isSensor)&&(p=l.collision,x=p.parentA,m=p.parentB,g=p.normal,l.separation=p.depth+g.x*(m.positionImpulse.x-x.positionImpulse.x)+g.y*(m.positionImpulse.y-x.positionImpulse.y));for(h=0;h<M;h++)l=u[h],!(!l.isActive||l.isSensor)&&(p=l.collision,x=p.parentA,m=p.parentB,g=p.normal,b=l.separation-l.slop*v,(x.isStatic||m.isStatic)&&(b*=2),x.isStatic||x.isSleeping||(y=A/x.totalContacts,x.positionImpulse.x+=g.x*b*y,x.positionImpulse.y+=g.y*b*y),m.isStatic||m.isSleeping||(y=A/m.totalContacts,m.positionImpulse.x-=g.x*b*y,m.positionImpulse.y-=g.y*b*y))},n.postSolvePosition=function(u){for(var f=n._positionWarming,d=u.length,h=o.translate,l=c.update,p=0;p<d;p++){var x=u[p],m=x.positionImpulse,g=m.x,y=m.y,b=x.velocity;if(x.totalContacts=0,g!==0||y!==0){for(var A=0;A<x.parts.length;A++){var v=x.parts[A];h(v.vertices,m),l(v.bounds,v.vertices,b),v.position.x+=g,v.position.y+=y}x.positionPrev.x+=g,x.positionPrev.y+=y,g*b.x+y*b.y<0?(m.x=0,m.y=0):(m.x*=f,m.y*=f)}}},n.preSolveVelocity=function(u){var f=u.length,d,h;for(d=0;d<f;d++){var l=u[d];if(!(!l.isActive||l.isSensor)){var p=l.contacts,x=l.contactCount,m=l.collision,g=m.parentA,y=m.parentB,b=m.normal,A=m.tangent;for(h=0;h<x;h++){var v=p[h],M=v.vertex,E=v.normalImpulse,T=v.tangentImpulse;if(E!==0||T!==0){var S=b.x*E+A.x*T,_=b.y*E+A.y*T;g.isStatic||g.isSleeping||(g.positionPrev.x+=S*g.inverseMass,g.positionPrev.y+=_*g.inverseMass,g.anglePrev+=g.inverseInertia*((M.x-g.position.x)*_-(M.y-g.position.y)*S)),y.isStatic||y.isSleeping||(y.positionPrev.x-=S*y.inverseMass,y.positionPrev.y-=_*y.inverseMass,y.anglePrev-=y.inverseInertia*((M.x-y.position.x)*_-(M.y-y.position.y)*S))}}}}},n.solveVelocity=function(u,f){var d=f/a._baseDelta,h=d*d,l=h*d,p=-n._restingThresh*d,x=n._restingThreshTangent,m=n._frictionNormalMultiplier*d,g=n._frictionMaxStatic,y=u.length,b,A,v,M;for(v=0;v<y;v++){var E=u[v];if(!(!E.isActive||E.isSensor)){var T=E.collision,S=T.parentA,_=T.parentB,w=T.normal.x,R=T.normal.y,L=T.tangent.x,N=T.tangent.y,F=E.inverseMass,V=E.friction*E.frictionStatic*m,k=E.contacts,G=E.contactCount,K=1/G,Q=S.position.x-S.positionPrev.x,he=S.position.y-S.positionPrev.y,ye=S.angle-S.anglePrev,Ie=_.position.x-_.positionPrev.x,Xe=_.position.y-_.positionPrev.y,ke=_.angle-_.anglePrev;for(M=0;M<G;M++){var W=k[M],Z=W.vertex,re=Z.x-S.position.x,we=Z.y-S.position.y,me=Z.x-_.position.x,Re=Z.y-_.position.y,qe=Q-we*ye,Ve=he+re*ye,it=Ie-Re*ke,I=Xe+me*ke,Ge=qe-it,He=Ve-I,Ze=w*Ge+R*He,fe=L*Ge+N*He,rt=E.separation+Ze,Me=Math.min(rt,1);Me=rt<0?0:Me;var De=Me*V;fe<-De||fe>De?(A=fe>0?fe:-fe,b=E.friction*(fe>0?1:-1)*l,b<-A?b=-A:b>A&&(b=A)):(b=fe,A=g);var D=re*R-we*w,C=me*R-Re*w,H=K/(F+S.inverseInertia*D*D+_.inverseInertia*C*C),$=(1+E.restitution)*Ze*H;if(b*=H,Ze<p)W.normalImpulse=0;else{var j=W.normalImpulse;W.normalImpulse+=$,W.normalImpulse>0&&(W.normalImpulse=0),$=W.normalImpulse-j}if(fe<-x||fe>x)W.tangentImpulse=0;else{var q=W.tangentImpulse;W.tangentImpulse+=b,W.tangentImpulse<-A&&(W.tangentImpulse=-A),W.tangentImpulse>A&&(W.tangentImpulse=A),b=W.tangentImpulse-q}var ve=w*$+L*b,se=R*$+N*b;S.isStatic||S.isSleeping||(S.positionPrev.x+=ve*S.inverseMass,S.positionPrev.y+=se*S.inverseMass,S.anglePrev+=(re*se-we*ve)*S.inverseInertia),_.isStatic||_.isSleeping||(_.positionPrev.x-=ve*_.inverseMass,_.positionPrev.y-=se*_.inverseMass,_.anglePrev-=(me*se-Re*ve)*_.inverseInertia)}}}}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(9),a=r(0);(function(){n.create=function(c){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},c)},n.update=function(c,u,f){var d=o.update,h=o.create,l=o.setActive,p=c.table,x=c.list,m=x.length,g=m,y=c.collisionStart,b=c.collisionEnd,A=c.collisionActive,v=u.length,M=0,E=0,T=0,S,_,w;for(w=0;w<v;w++)S=u[w],_=S.pair,_?(_.isActive&&(A[T++]=_),d(_,S,f)):(_=h(S,f),p[_.id]=_,y[M++]=_,x[g++]=_);for(g=0,m=x.length,w=0;w<m;w++)_=x[w],_.timeUpdated>=f?x[g++]=_:(l(_,!1,f),_.collision.bodyA.sleepCounter>0&&_.collision.bodyB.sleepCounter>0?x[g++]=_:(b[E++]=_,delete p[_.id]));x.length!==g&&(x.length=g),y.length!==M&&(y.length=M),b.length!==E&&(b.length=E),A.length!==T&&(A.length=T)},n.clear=function(c){return c.table={},c.list.length=0,c.collisionStart.length=0,c.collisionActive.length=0,c.collisionEnd.length=0,c}})()}),(function(t,i,r){var n=t.exports=r(21);n.Axes=r(11),n.Bodies=r(12),n.Body=r(4),n.Bounds=r(1),n.Collision=r(8),n.Common=r(0),n.Composite=r(6),n.Composites=r(22),n.Constraint=r(10),n.Contact=r(16),n.Detector=r(13),n.Engine=r(17),n.Events=r(5),n.Grid=r(23),n.Mouse=r(14),n.MouseConstraint=r(24),n.Pair=r(9),n.Pairs=r(19),n.Plugin=r(15),n.Query=r(25),n.Render=r(26),n.Resolver=r(18),n.Runner=r(27),n.SAT=r(28),n.Sleeping=r(7),n.Svg=r(29),n.Vector=r(2),n.Vertices=r(3),n.World=r(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")}),(function(t,i,r){var n={};t.exports=n;var o=r(15),a=r(0);(function(){n.name="matter-js",n.version="0.20.0",n.uses=[],n.used=[],n.use=function(){o.use(n,Array.prototype.slice.call(arguments))},n.before=function(c,u){return c=c.replace(/^Matter./,""),a.chainPathBefore(n,c,u)},n.after=function(c,u){return c=c.replace(/^Matter./,""),a.chainPathAfter(n,c,u)}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(6),a=r(10),c=r(0),u=r(4),f=r(12),d=c.deprecated;(function(){n.stack=function(h,l,p,x,m,g,y){for(var b=o.create({label:"Stack"}),A=h,v=l,M,E=0,T=0;T<x;T++){for(var S=0,_=0;_<p;_++){var w=y(A,v,_,T,M,E);if(w){var R=w.bounds.max.y-w.bounds.min.y,L=w.bounds.max.x-w.bounds.min.x;R>S&&(S=R),u.translate(w,{x:L*.5,y:R*.5}),A=w.bounds.max.x+m,o.addBody(b,w),M=w,E+=1}else A+=m}v+=S+g,A=h}return b},n.chain=function(h,l,p,x,m,g){for(var y=h.bodies,b=1;b<y.length;b++){var A=y[b-1],v=y[b],M=A.bounds.max.y-A.bounds.min.y,E=A.bounds.max.x-A.bounds.min.x,T=v.bounds.max.y-v.bounds.min.y,S=v.bounds.max.x-v.bounds.min.x,_={bodyA:A,pointA:{x:E*l,y:M*p},bodyB:v,pointB:{x:S*x,y:T*m}},w=c.extend(_,g);o.addConstraint(h,a.create(w))}return h.label+=" Chain",h},n.mesh=function(h,l,p,x,m){var g=h.bodies,y,b,A,v,M;for(y=0;y<p;y++){for(b=1;b<l;b++)A=g[b-1+y*l],v=g[b+y*l],o.addConstraint(h,a.create(c.extend({bodyA:A,bodyB:v},m)));if(y>0)for(b=0;b<l;b++)A=g[b+(y-1)*l],v=g[b+y*l],o.addConstraint(h,a.create(c.extend({bodyA:A,bodyB:v},m))),x&&b>0&&(M=g[b-1+(y-1)*l],o.addConstraint(h,a.create(c.extend({bodyA:M,bodyB:v},m)))),x&&b<l-1&&(M=g[b+1+(y-1)*l],o.addConstraint(h,a.create(c.extend({bodyA:M,bodyB:v},m))))}return h.label+=" Mesh",h},n.pyramid=function(h,l,p,x,m,g,y){return n.stack(h,l,p,x,m,g,function(b,A,v,M,E,T){var S=Math.min(x,Math.ceil(p/2)),_=E?E.bounds.max.x-E.bounds.min.x:0;if(!(M>S)){M=S-M;var w=M,R=p-1-M;if(!(v<w||v>R)){T===1&&u.translate(E,{x:(v+(p%2===1?1:-1))*_,y:0});var L=E?v*_:0;return y(h+L+v*m,A,v,M,E,T)}}})},n.newtonsCradle=function(h,l,p,x,m){for(var g=o.create({label:"Newtons Cradle"}),y=0;y<p;y++){var b=1.9,A=f.circle(h+y*(x*b),l+m,x,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),v=a.create({pointA:{x:h+y*(x*b),y:l},bodyB:A});o.addBody(g,A),o.addConstraint(g,v)}return g},d(n,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),n.car=function(h,l,p,x,m){var g=u.nextGroup(!0),y=20,b=-p*.5+y,A=p*.5-y,v=0,M=o.create({label:"Car"}),E=f.rectangle(h,l,p,x,{collisionFilter:{group:g},chamfer:{radius:x*.5},density:2e-4}),T=f.circle(h+b,l+v,m,{collisionFilter:{group:g},friction:.8}),S=f.circle(h+A,l+v,m,{collisionFilter:{group:g},friction:.8}),_=a.create({bodyB:E,pointB:{x:b,y:v},bodyA:T,stiffness:1,length:0}),w=a.create({bodyB:E,pointB:{x:A,y:v},bodyA:S,stiffness:1,length:0});return o.addBody(M,E),o.addBody(M,T),o.addBody(M,S),o.addConstraint(M,_),o.addConstraint(M,w),M},d(n,"car","Composites.car ➤ moved to car example"),n.softBody=function(h,l,p,x,m,g,y,b,A,v){A=c.extend({inertia:1/0},A),v=c.extend({stiffness:.2,render:{type:"line",anchors:!1}},v);var M=n.stack(h,l,p,x,m,g,function(E,T){return f.circle(E,T,b,A)});return n.mesh(M,p,x,y,v),M.label="Soft Body",M},d(n,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()}),(function(t,i,r){var n={};t.exports=n;var o=r(9),a=r(0),c=a.deprecated;(function(){n.create=function(u){var f={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(f,u)},n.update=function(u,f,d,h){var l,p,x,m=d.world,g=u.buckets,y,b,A=!1;for(l=0;l<f.length;l++){var v=f[l];if(!(v.isSleeping&&!h)&&!(m.bounds&&(v.bounds.max.x<m.bounds.min.x||v.bounds.min.x>m.bounds.max.x||v.bounds.max.y<m.bounds.min.y||v.bounds.min.y>m.bounds.max.y))){var M=n._getRegion(u,v);if(!v.region||M.id!==v.region.id||h){(!v.region||h)&&(v.region=M);var E=n._regionUnion(M,v.region);for(p=E.startCol;p<=E.endCol;p++)for(x=E.startRow;x<=E.endRow;x++){b=n._getBucketId(p,x),y=g[b];var T=p>=M.startCol&&p<=M.endCol&&x>=M.startRow&&x<=M.endRow,S=p>=v.region.startCol&&p<=v.region.endCol&&x>=v.region.startRow&&x<=v.region.endRow;!T&&S&&S&&y&&n._bucketRemoveBody(u,y,v),(v.region===M||T&&!S||h)&&(y||(y=n._createBucket(g,b)),n._bucketAddBody(u,y,v))}v.region=M,A=!0}}}A&&(u.pairsList=n._createActivePairsList(u))},c(n,"update","Grid.update ➤ replaced by Matter.Detector"),n.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},c(n,"clear","Grid.clear ➤ replaced by Matter.Detector"),n._regionUnion=function(u,f){var d=Math.min(u.startCol,f.startCol),h=Math.max(u.endCol,f.endCol),l=Math.min(u.startRow,f.startRow),p=Math.max(u.endRow,f.endRow);return n._createRegion(d,h,l,p)},n._getRegion=function(u,f){var d=f.bounds,h=Math.floor(d.min.x/u.bucketWidth),l=Math.floor(d.max.x/u.bucketWidth),p=Math.floor(d.min.y/u.bucketHeight),x=Math.floor(d.max.y/u.bucketHeight);return n._createRegion(h,l,p,x)},n._createRegion=function(u,f,d,h){return{id:u+","+f+","+d+","+h,startCol:u,endCol:f,startRow:d,endRow:h}},n._getBucketId=function(u,f){return"C"+u+"R"+f},n._createBucket=function(u,f){var d=u[f]=[];return d},n._bucketAddBody=function(u,f,d){var h=u.pairs,l=o.id,p=f.length,x;for(x=0;x<p;x++){var m=f[x];if(!(d.id===m.id||d.isStatic&&m.isStatic)){var g=l(d,m),y=h[g];y?y[2]+=1:h[g]=[d,m,1]}}f.push(d)},n._bucketRemoveBody=function(u,f,d){var h=u.pairs,l=o.id,p;f.splice(a.indexOf(f,d),1);var x=f.length;for(p=0;p<x;p++){var m=h[l(d,f[p])];m&&(m[2]-=1)}},n._createActivePairsList=function(u){var f,d=u.pairs,h=a.keys(d),l=h.length,p=[],x;for(x=0;x<l;x++)f=d[h[x]],f[2]>0?p.push(f):delete d[h[x]];return p}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(7),c=r(14),u=r(5),f=r(13),d=r(10),h=r(6),l=r(0),p=r(1);(function(){n.create=function(x,m){var g=(x?x.mouse:null)||(m?m.mouse:null);g||(x&&x.render&&x.render.canvas?g=c.create(x.render.canvas):m&&m.element?g=c.create(m.element):(g=c.create(),l.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var y=d.create({label:"Mouse Constraint",pointA:g.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),b={type:"mouseConstraint",mouse:g,element:null,body:null,constraint:y,collisionFilter:{category:1,mask:4294967295,group:0}},A=l.extend(b,m);return u.on(x,"beforeUpdate",function(){var v=h.allBodies(x.world);n.update(A,v),n._triggerEvents(A)}),A},n.update=function(x,m){var g=x.mouse,y=x.constraint,b=x.body;if(g.button===0){if(y.bodyB)a.set(y.bodyB,!1),y.pointA=g.position;else for(var A=0;A<m.length;A++)if(b=m[A],p.contains(b.bounds,g.position)&&f.canCollide(b.collisionFilter,x.collisionFilter))for(var v=b.parts.length>1?1:0;v<b.parts.length;v++){var M=b.parts[v];if(o.contains(M.vertices,g.position)){y.pointA=g.position,y.bodyB=x.body=b,y.pointB={x:g.position.x-b.position.x,y:g.position.y-b.position.y},y.angleB=b.angle,a.set(b,!1),u.trigger(x,"startdrag",{mouse:g,body:b});break}}}else y.bodyB=x.body=null,y.pointB=null,b&&u.trigger(x,"enddrag",{mouse:g,body:b})},n._triggerEvents=function(x){var m=x.mouse,g=m.sourceEvents;g.mousemove&&u.trigger(x,"mousemove",{mouse:m}),g.mousedown&&u.trigger(x,"mousedown",{mouse:m}),g.mouseup&&u.trigger(x,"mouseup",{mouse:m}),c.clearSourceEvents(m)}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(2),a=r(8),c=r(1),u=r(12),f=r(3);(function(){n.collides=function(d,h){for(var l=[],p=h.length,x=d.bounds,m=a.collides,g=c.overlaps,y=0;y<p;y++){var b=h[y],A=b.parts.length,v=A===1?0:1;if(g(b.bounds,x))for(var M=v;M<A;M++){var E=b.parts[M];if(g(E.bounds,x)){var T=m(E,d);if(T){l.push(T);break}}}}return l},n.ray=function(d,h,l,p){p=p||1e-100;for(var x=o.angle(h,l),m=o.magnitude(o.sub(h,l)),g=(l.x+h.x)*.5,y=(l.y+h.y)*.5,b=u.rectangle(g,y,m,p,{angle:x}),A=n.collides(b,d),v=0;v<A.length;v+=1){var M=A[v];M.body=M.bodyB=M.bodyA}return A},n.region=function(d,h,l){for(var p=[],x=0;x<d.length;x++){var m=d[x],g=c.overlaps(m.bounds,h);(g&&!l||!g&&l)&&p.push(m)}return p},n.point=function(d,h){for(var l=[],p=0;p<d.length;p++){var x=d[p];if(c.contains(x.bounds,h))for(var m=x.parts.length===1?0:1;m<x.parts.length;m++){var g=x.parts[m];if(c.contains(g.bounds,h)&&f.contains(g.vertices,h)){l.push(x);break}}}return l}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(4),a=r(0),c=r(6),u=r(1),f=r(5),d=r(2),h=r(14);(function(){var l,p;typeof window<"u"&&(l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(v){window.setTimeout(function(){v(a.now())},1e3/60)},p=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(v){var M={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!v.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},E=a.extend(M,v);return E.canvas&&(E.canvas.width=E.options.width||E.canvas.width,E.canvas.height=E.options.height||E.canvas.height),E.mouse=v.mouse,E.engine=v.engine,E.canvas=E.canvas||g(E.options.width,E.options.height),E.context=E.canvas.getContext("2d"),E.textures={},E.bounds=E.bounds||{min:{x:0,y:0},max:{x:E.canvas.width,y:E.canvas.height}},E.controller=n,E.options.showBroadphase=!1,E.options.pixelRatio!==1&&n.setPixelRatio(E,E.options.pixelRatio),a.isElement(E.element)&&E.element.appendChild(E.canvas),E},n.run=function(v){(function M(E){v.frameRequestId=l(M),x(v,E),n.world(v,E),v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0),(v.options.showStats||v.options.showDebug)&&n.stats(v,v.context,E),(v.options.showPerformance||v.options.showDebug)&&n.performance(v,v.context,E),v.context.setTransform(1,0,0,1,0,0)})()},n.stop=function(v){p(v.frameRequestId)},n.setPixelRatio=function(v,M){var E=v.options,T=v.canvas;M==="auto"&&(M=y(T)),E.pixelRatio=M,T.setAttribute("data-pixel-ratio",M),T.width=E.width*M,T.height=E.height*M,T.style.width=E.width+"px",T.style.height=E.height+"px"},n.setSize=function(v,M,E){v.options.width=M,v.options.height=E,v.bounds.max.x=v.bounds.min.x+M,v.bounds.max.y=v.bounds.min.y+E,v.options.pixelRatio!==1?n.setPixelRatio(v,v.options.pixelRatio):(v.canvas.width=M,v.canvas.height=E)},n.lookAt=function(v,M,E,T){T=typeof T<"u"?T:!0,M=a.isArray(M)?M:[M],E=E||{x:0,y:0};for(var S={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},_=0;_<M.length;_+=1){var w=M[_],R=w.bounds?w.bounds.min:w.min||w.position||w,L=w.bounds?w.bounds.max:w.max||w.position||w;R&&L&&(R.x<S.min.x&&(S.min.x=R.x),L.x>S.max.x&&(S.max.x=L.x),R.y<S.min.y&&(S.min.y=R.y),L.y>S.max.y&&(S.max.y=L.y))}var N=S.max.x-S.min.x+2*E.x,F=S.max.y-S.min.y+2*E.y,V=v.canvas.height,k=v.canvas.width,G=k/V,K=N/F,Q=1,he=1;K>G?he=K/G:Q=G/K,v.options.hasBounds=!0,v.bounds.min.x=S.min.x,v.bounds.max.x=S.min.x+N*Q,v.bounds.min.y=S.min.y,v.bounds.max.y=S.min.y+F*he,T&&(v.bounds.min.x+=N*.5-N*Q*.5,v.bounds.max.x+=N*.5-N*Q*.5,v.bounds.min.y+=F*.5-F*he*.5,v.bounds.max.y+=F*.5-F*he*.5),v.bounds.min.x-=E.x,v.bounds.max.x-=E.x,v.bounds.min.y-=E.y,v.bounds.max.y-=E.y,v.mouse&&(h.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.canvas.width,y:(v.bounds.max.y-v.bounds.min.y)/v.canvas.height}),h.setOffset(v.mouse,v.bounds.min))},n.startViewTransform=function(v){var M=v.bounds.max.x-v.bounds.min.x,E=v.bounds.max.y-v.bounds.min.y,T=M/v.options.width,S=E/v.options.height;v.context.setTransform(v.options.pixelRatio/T,0,0,v.options.pixelRatio/S,0,0),v.context.translate(-v.bounds.min.x,-v.bounds.min.y)},n.endViewTransform=function(v){v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0)},n.world=function(v,M){var E=a.now(),T=v.engine,S=T.world,_=v.canvas,w=v.context,R=v.options,L=v.timing,N=c.allBodies(S),F=c.allConstraints(S),V=R.wireframes?R.wireframeBackground:R.background,k=[],G=[],K,Q={timestamp:T.timing.timestamp};if(f.trigger(v,"beforeRender",Q),v.currentBackground!==V&&A(v,V),w.globalCompositeOperation="source-in",w.fillStyle="transparent",w.fillRect(0,0,_.width,_.height),w.globalCompositeOperation="source-over",R.hasBounds){for(K=0;K<N.length;K++){var he=N[K];u.overlaps(he.bounds,v.bounds)&&k.push(he)}for(K=0;K<F.length;K++){var ye=F[K],Ie=ye.bodyA,Xe=ye.bodyB,ke=ye.pointA,W=ye.pointB;Ie&&(ke=d.add(Ie.position,ye.pointA)),Xe&&(W=d.add(Xe.position,ye.pointB)),!(!ke||!W)&&(u.contains(v.bounds,ke)||u.contains(v.bounds,W))&&G.push(ye)}n.startViewTransform(v),v.mouse&&(h.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.options.width,y:(v.bounds.max.y-v.bounds.min.y)/v.options.height}),h.setOffset(v.mouse,v.bounds.min))}else G=F,k=N,v.options.pixelRatio!==1&&v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0);!R.wireframes||T.enableSleeping&&R.showSleeping?n.bodies(v,k,w):(R.showConvexHulls&&n.bodyConvexHulls(v,k,w),n.bodyWireframes(v,k,w)),R.showBounds&&n.bodyBounds(v,k,w),(R.showAxes||R.showAngleIndicator)&&n.bodyAxes(v,k,w),R.showPositions&&n.bodyPositions(v,k,w),R.showVelocity&&n.bodyVelocity(v,k,w),R.showIds&&n.bodyIds(v,k,w),R.showSeparations&&n.separations(v,T.pairs.list,w),R.showCollisions&&n.collisions(v,T.pairs.list,w),R.showVertexNumbers&&n.vertexNumbers(v,k,w),R.showMousePosition&&n.mousePosition(v,v.mouse,w),n.constraints(G,w),R.hasBounds&&n.endViewTransform(v),f.trigger(v,"afterRender",Q),L.lastElapsed=a.now()-E},n.stats=function(v,M,E){for(var T=v.engine,S=T.world,_=c.allBodies(S),w=0,R=55,L=44,N=0,F=0,V=0;V<_.length;V+=1)w+=_[V].parts.length;var k={Part:w,Body:_.length,Cons:c.allConstraints(S).length,Comp:c.allComposites(S).length,Pair:T.pairs.list.length};M.fillStyle="#0e0f19",M.fillRect(N,F,R*5.5,L),M.font="12px Arial",M.textBaseline="top",M.textAlign="right";for(var G in k){var K=k[G];M.fillStyle="#aaa",M.fillText(G,N+R,F+8),M.fillStyle="#eee",M.fillText(K,N+R,F+26),N+=R}},n.performance=function(v,M){var E=v.engine,T=v.timing,S=T.deltaHistory,_=T.elapsedHistory,w=T.timestampElapsedHistory,R=T.engineDeltaHistory,L=T.engineUpdatesHistory,N=T.engineElapsedHistory,F=E.timing.lastUpdatesPerFrame,V=E.timing.lastDelta,k=m(S),G=m(_),K=m(R),Q=m(L),he=m(N),ye=m(w),Ie=ye/k||0,Xe=Math.round(k/V),ke=1e3/k||0,W=4,Z=12,re=60,we=34,me=10,Re=69;M.fillStyle="#0e0f19",M.fillRect(0,50,Z*5+re*6+22,we),n.status(M,me,Re,re,W,S.length,Math.round(ke)+" fps",ke/n._goodFps,function(qe){return S[qe]/k-1}),n.status(M,me+Z+re,Re,re,W,R.length,V.toFixed(2)+" dt",n._goodDelta/V,function(qe){return R[qe]/K-1}),n.status(M,me+(Z+re)*2,Re,re,W,L.length,F+" upf",Math.pow(a.clamp(Q/Xe||1,0,1),4),function(qe){return L[qe]/Q-1}),n.status(M,me+(Z+re)*3,Re,re,W,N.length,he.toFixed(2)+" ut",1-F*he/n._goodFps,function(qe){return N[qe]/he-1}),n.status(M,me+(Z+re)*4,Re,re,W,_.length,G.toFixed(2)+" rt",1-G/n._goodFps,function(qe){return _[qe]/G-1}),n.status(M,me+(Z+re)*5,Re,re,W,w.length,Ie.toFixed(2)+" x",Ie*Ie*Ie,function(qe){return(w[qe]/S[qe]/Ie||0)-1})},n.status=function(v,M,E,T,S,_,w,R,L){v.strokeStyle="#888",v.fillStyle="#444",v.lineWidth=1,v.fillRect(M,E+7,T,1),v.beginPath(),v.moveTo(M,E+7-S*a.clamp(.4*L(0),-2,2));for(var N=0;N<T;N+=1)v.lineTo(M+N,E+7-(N<_?S*a.clamp(.4*L(N),-2,2):0));v.stroke(),v.fillStyle="hsl("+a.clamp(25+95*R,0,120)+",100%,60%)",v.fillRect(M,E-7,4,4),v.font="12px Arial",v.textBaseline="middle",v.textAlign="right",v.fillStyle="#eee",v.fillText(w,M+T,E-5)},n.constraints=function(v,M){for(var E=M,T=0;T<v.length;T++){var S=v[T];if(!(!S.render.visible||!S.pointA||!S.pointB)){var _=S.bodyA,w=S.bodyB,R,L;if(_?R=d.add(_.position,S.pointA):R=S.pointA,S.render.type==="pin")E.beginPath(),E.arc(R.x,R.y,3,0,2*Math.PI),E.closePath();else{if(w?L=d.add(w.position,S.pointB):L=S.pointB,E.beginPath(),E.moveTo(R.x,R.y),S.render.type==="spring")for(var N=d.sub(L,R),F=d.perp(d.normalise(N)),V=Math.ceil(a.clamp(S.length/5,12,20)),k,G=1;G<V;G+=1)k=G%2===0?1:-1,E.lineTo(R.x+N.x*(G/V)+F.x*k*4,R.y+N.y*(G/V)+F.y*k*4);E.lineTo(L.x,L.y)}S.render.lineWidth&&(E.lineWidth=S.render.lineWidth,E.strokeStyle=S.render.strokeStyle,E.stroke()),S.render.anchors&&(E.fillStyle=S.render.strokeStyle,E.beginPath(),E.arc(R.x,R.y,3,0,2*Math.PI),E.arc(L.x,L.y,3,0,2*Math.PI),E.closePath(),E.fill())}}},n.bodies=function(v,M,E){var T=E;v.engine;var S=v.options,_=S.showInternalEdges||!S.wireframes,w,R,L,N;for(L=0;L<M.length;L++)if(w=M[L],!!w.render.visible){for(N=w.parts.length>1?1:0;N<w.parts.length;N++)if(R=w.parts[N],!!R.render.visible){if(S.showSleeping&&w.isSleeping?T.globalAlpha=.5*R.render.opacity:R.render.opacity!==1&&(T.globalAlpha=R.render.opacity),R.render.sprite&&R.render.sprite.texture&&!S.wireframes){var F=R.render.sprite,V=b(v,F.texture);T.translate(R.position.x,R.position.y),T.rotate(R.angle),T.drawImage(V,V.width*-F.xOffset*F.xScale,V.height*-F.yOffset*F.yScale,V.width*F.xScale,V.height*F.yScale),T.rotate(-R.angle),T.translate(-R.position.x,-R.position.y)}else{if(R.circleRadius)T.beginPath(),T.arc(R.position.x,R.position.y,R.circleRadius,0,2*Math.PI);else{T.beginPath(),T.moveTo(R.vertices[0].x,R.vertices[0].y);for(var k=1;k<R.vertices.length;k++)!R.vertices[k-1].isInternal||_?T.lineTo(R.vertices[k].x,R.vertices[k].y):T.moveTo(R.vertices[k].x,R.vertices[k].y),R.vertices[k].isInternal&&!_&&T.moveTo(R.vertices[(k+1)%R.vertices.length].x,R.vertices[(k+1)%R.vertices.length].y);T.lineTo(R.vertices[0].x,R.vertices[0].y),T.closePath()}S.wireframes?(T.lineWidth=1,T.strokeStyle=v.options.wireframeStrokeStyle,T.stroke()):(T.fillStyle=R.render.fillStyle,R.render.lineWidth&&(T.lineWidth=R.render.lineWidth,T.strokeStyle=R.render.strokeStyle,T.stroke()),T.fill())}T.globalAlpha=1}}},n.bodyWireframes=function(v,M,E){var T=E,S=v.options.showInternalEdges,_,w,R,L,N;for(T.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.render.visible)for(N=_.parts.length>1?1:0;N<_.parts.length;N++){for(w=_.parts[N],T.moveTo(w.vertices[0].x,w.vertices[0].y),L=1;L<w.vertices.length;L++)!w.vertices[L-1].isInternal||S?T.lineTo(w.vertices[L].x,w.vertices[L].y):T.moveTo(w.vertices[L].x,w.vertices[L].y),w.vertices[L].isInternal&&!S&&T.moveTo(w.vertices[(L+1)%w.vertices.length].x,w.vertices[(L+1)%w.vertices.length].y);T.lineTo(w.vertices[0].x,w.vertices[0].y)}T.lineWidth=1,T.strokeStyle=v.options.wireframeStrokeStyle,T.stroke()},n.bodyConvexHulls=function(v,M,E){var T=E,S,_,w;for(T.beginPath(),_=0;_<M.length;_++)if(S=M[_],!(!S.render.visible||S.parts.length===1)){for(T.moveTo(S.vertices[0].x,S.vertices[0].y),w=1;w<S.vertices.length;w++)T.lineTo(S.vertices[w].x,S.vertices[w].y);T.lineTo(S.vertices[0].x,S.vertices[0].y)}T.lineWidth=1,T.strokeStyle="rgba(255,255,255,0.2)",T.stroke()},n.vertexNumbers=function(v,M,E){var T=E,S,_,w;for(S=0;S<M.length;S++){var R=M[S].parts;for(w=R.length>1?1:0;w<R.length;w++){var L=R[w];for(_=0;_<L.vertices.length;_++)T.fillStyle="rgba(255,255,255,0.2)",T.fillText(S+"_"+_,L.position.x+(L.vertices[_].x-L.position.x)*.8,L.position.y+(L.vertices[_].y-L.position.y)*.8)}}},n.mousePosition=function(v,M,E){var T=E;T.fillStyle="rgba(255,255,255,0.8)",T.fillText(M.position.x+"  "+M.position.y,M.position.x+5,M.position.y-5)},n.bodyBounds=function(v,M,E){var T=E;v.engine;var S=v.options;T.beginPath();for(var _=0;_<M.length;_++){var w=M[_];if(w.render.visible)for(var R=M[_].parts,L=R.length>1?1:0;L<R.length;L++){var N=R[L];T.rect(N.bounds.min.x,N.bounds.min.y,N.bounds.max.x-N.bounds.min.x,N.bounds.max.y-N.bounds.min.y)}}S.wireframes?T.strokeStyle="rgba(255,255,255,0.08)":T.strokeStyle="rgba(0,0,0,0.1)",T.lineWidth=1,T.stroke()},n.bodyAxes=function(v,M,E){var T=E;v.engine;var S=v.options,_,w,R,L;for(T.beginPath(),w=0;w<M.length;w++){var N=M[w],F=N.parts;if(N.render.visible)if(S.showAxes)for(R=F.length>1?1:0;R<F.length;R++)for(_=F[R],L=0;L<_.axes.length;L++){var V=_.axes[L];T.moveTo(_.position.x,_.position.y),T.lineTo(_.position.x+V.x*20,_.position.y+V.y*20)}else for(R=F.length>1?1:0;R<F.length;R++)for(_=F[R],L=0;L<_.axes.length;L++)T.moveTo(_.position.x,_.position.y),T.lineTo((_.vertices[0].x+_.vertices[_.vertices.length-1].x)/2,(_.vertices[0].y+_.vertices[_.vertices.length-1].y)/2)}S.wireframes?(T.strokeStyle="indianred",T.lineWidth=1):(T.strokeStyle="rgba(255, 255, 255, 0.4)",T.globalCompositeOperation="overlay",T.lineWidth=2),T.stroke(),T.globalCompositeOperation="source-over"},n.bodyPositions=function(v,M,E){var T=E;v.engine;var S=v.options,_,w,R,L;for(T.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.render.visible)for(L=0;L<_.parts.length;L++)w=_.parts[L],T.arc(w.position.x,w.position.y,3,0,2*Math.PI,!1),T.closePath();for(S.wireframes?T.fillStyle="indianred":T.fillStyle="rgba(0,0,0,0.5)",T.fill(),T.beginPath(),R=0;R<M.length;R++)_=M[R],_.render.visible&&(T.arc(_.positionPrev.x,_.positionPrev.y,2,0,2*Math.PI,!1),T.closePath());T.fillStyle="rgba(255,165,0,0.8)",T.fill()},n.bodyVelocity=function(v,M,E){var T=E;T.beginPath();for(var S=0;S<M.length;S++){var _=M[S];if(_.render.visible){var w=o.getVelocity(_);T.moveTo(_.position.x,_.position.y),T.lineTo(_.position.x+w.x,_.position.y+w.y)}}T.lineWidth=3,T.strokeStyle="cornflowerblue",T.stroke()},n.bodyIds=function(v,M,E){var T=E,S,_;for(S=0;S<M.length;S++)if(M[S].render.visible){var w=M[S].parts;for(_=w.length>1?1:0;_<w.length;_++){var R=w[_];T.font="12px Arial",T.fillStyle="rgba(255,255,255,0.5)",T.fillText(R.id,R.position.x+10,R.position.y-10)}}},n.collisions=function(v,M,E){var T=E,S=v.options,_,w,R,L;for(T.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.isActive)for(w=_.collision,L=0;L<_.contactCount;L++){var N=_.contacts[L],F=N.vertex;T.rect(F.x-1.5,F.y-1.5,3.5,3.5)}for(S.wireframes?T.fillStyle="rgba(255,255,255,0.7)":T.fillStyle="orange",T.fill(),T.beginPath(),R=0;R<M.length;R++)if(_=M[R],!!_.isActive&&(w=_.collision,_.contactCount>0)){var V=_.contacts[0].vertex.x,k=_.contacts[0].vertex.y;_.contactCount===2&&(V=(_.contacts[0].vertex.x+_.contacts[1].vertex.x)/2,k=(_.contacts[0].vertex.y+_.contacts[1].vertex.y)/2),w.bodyB===w.supports[0].body||w.bodyA.isStatic===!0?T.moveTo(V-w.normal.x*8,k-w.normal.y*8):T.moveTo(V+w.normal.x*8,k+w.normal.y*8),T.lineTo(V,k)}S.wireframes?T.strokeStyle="rgba(255,165,0,0.7)":T.strokeStyle="orange",T.lineWidth=1,T.stroke()},n.separations=function(v,M,E){var T=E,S=v.options,_,w,R,L,N;for(T.beginPath(),N=0;N<M.length;N++)if(_=M[N],!!_.isActive){w=_.collision,R=w.bodyA,L=w.bodyB;var F=1;!L.isStatic&&!R.isStatic&&(F=.5),L.isStatic&&(F=0),T.moveTo(L.position.x,L.position.y),T.lineTo(L.position.x-w.penetration.x*F,L.position.y-w.penetration.y*F),F=1,!L.isStatic&&!R.isStatic&&(F=.5),R.isStatic&&(F=0),T.moveTo(R.position.x,R.position.y),T.lineTo(R.position.x+w.penetration.x*F,R.position.y+w.penetration.y*F)}S.wireframes?T.strokeStyle="rgba(255,165,0,0.5)":T.strokeStyle="orange",T.stroke()},n.inspector=function(v,M){v.engine;var E=v.selected,T=v.render,S=T.options,_;if(S.hasBounds){var w=T.bounds.max.x-T.bounds.min.x,R=T.bounds.max.y-T.bounds.min.y,L=w/T.options.width,N=R/T.options.height;M.scale(1/L,1/N),M.translate(-T.bounds.min.x,-T.bounds.min.y)}for(var F=0;F<E.length;F++){var V=E[F].data;switch(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.9)",M.setLineDash([1,2]),V.type){case"body":_=V.bounds,M.beginPath(),M.rect(Math.floor(_.min.x-3),Math.floor(_.min.y-3),Math.floor(_.max.x-_.min.x+6),Math.floor(_.max.y-_.min.y+6)),M.closePath(),M.stroke();break;case"constraint":var k=V.pointA;V.bodyA&&(k=V.pointB),M.beginPath(),M.arc(k.x,k.y,10,0,2*Math.PI),M.closePath(),M.stroke();break}M.setLineDash([]),M.translate(-.5,-.5)}v.selectStart!==null&&(M.translate(.5,.5),M.lineWidth=1,M.strokeStyle="rgba(255,165,0,0.6)",M.fillStyle="rgba(255,165,0,0.1)",_=v.selectBounds,M.beginPath(),M.rect(Math.floor(_.min.x),Math.floor(_.min.y),Math.floor(_.max.x-_.min.x),Math.floor(_.max.y-_.min.y)),M.closePath(),M.stroke(),M.fill(),M.translate(-.5,-.5)),S.hasBounds&&M.setTransform(1,0,0,1,0,0)};var x=function(v,M){var E=v.engine,T=v.timing,S=T.historySize,_=E.timing.timestamp;T.delta=M-T.lastTime||n._goodDelta,T.lastTime=M,T.timestampElapsed=_-T.lastTimestamp||0,T.lastTimestamp=_,T.deltaHistory.unshift(T.delta),T.deltaHistory.length=Math.min(T.deltaHistory.length,S),T.engineDeltaHistory.unshift(E.timing.lastDelta),T.engineDeltaHistory.length=Math.min(T.engineDeltaHistory.length,S),T.timestampElapsedHistory.unshift(T.timestampElapsed),T.timestampElapsedHistory.length=Math.min(T.timestampElapsedHistory.length,S),T.engineUpdatesHistory.unshift(E.timing.lastUpdatesPerFrame),T.engineUpdatesHistory.length=Math.min(T.engineUpdatesHistory.length,S),T.engineElapsedHistory.unshift(E.timing.lastElapsed),T.engineElapsedHistory.length=Math.min(T.engineElapsedHistory.length,S),T.elapsedHistory.unshift(T.lastElapsed),T.elapsedHistory.length=Math.min(T.elapsedHistory.length,S)},m=function(v){for(var M=0,E=0;E<v.length;E+=1)M+=v[E];return M/v.length||0},g=function(v,M){var E=document.createElement("canvas");return E.width=v,E.height=M,E.oncontextmenu=function(){return!1},E.onselectstart=function(){return!1},E},y=function(v){var M=v.getContext("2d"),E=window.devicePixelRatio||1,T=M.webkitBackingStorePixelRatio||M.mozBackingStorePixelRatio||M.msBackingStorePixelRatio||M.oBackingStorePixelRatio||M.backingStorePixelRatio||1;return E/T},b=function(v,M){var E=v.textures[M];return E||(E=v.textures[M]=new Image,E.src=M,E)},A=function(v,M){var E=M;/(jpg|gif|png)$/.test(M)&&(E="url("+M+")"),v.canvas.style.background=E,v.canvas.style.backgroundSize="contain",v.currentBackground=M}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(5),a=r(17),c=r(0);(function(){n._maxFrameDelta=1e3/15,n._frameDeltaFallback=1e3/60,n._timeBufferMargin=1.5,n._elapsedNextEstimate=1,n._smoothingLowerBound=.1,n._smoothingUpperBound=.9,n.create=function(f){var d={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},h=c.extend(d,f);return h.fps=0,h},n.run=function(f,d){return f.timeBuffer=n._frameDeltaFallback,(function h(l){f.frameRequestId=n._onNextFrame(f,h),l&&f.enabled&&n.tick(f,d,l)})(),f},n.tick=function(f,d,h){var l=c.now(),p=f.delta,x=0,m=h-f.timeLastTick;if((!m||!f.timeLastTick||m>Math.max(n._maxFrameDelta,f.maxFrameTime))&&(m=f.frameDelta||n._frameDeltaFallback),f.frameDeltaSmoothing){f.frameDeltaHistory.push(m),f.frameDeltaHistory=f.frameDeltaHistory.slice(-f.frameDeltaHistorySize);var g=f.frameDeltaHistory.slice(0).sort(),y=f.frameDeltaHistory.slice(g.length*n._smoothingLowerBound,g.length*n._smoothingUpperBound),b=u(y);m=b||m}f.frameDeltaSnapping&&(m=1e3/Math.round(1e3/m)),f.frameDelta=m,f.timeLastTick=h,f.timeBuffer+=f.frameDelta,f.timeBuffer=c.clamp(f.timeBuffer,0,f.frameDelta+p*n._timeBufferMargin),f.lastUpdatesDeferred=0;var A=f.maxUpdates||Math.ceil(f.maxFrameTime/p),v={timestamp:d.timing.timestamp};o.trigger(f,"beforeTick",v),o.trigger(f,"tick",v);for(var M=c.now();p>0&&f.timeBuffer>=p*n._timeBufferMargin;){o.trigger(f,"beforeUpdate",v),a.update(d,p),o.trigger(f,"afterUpdate",v),f.timeBuffer-=p,x+=1;var E=c.now()-l,T=c.now()-M,S=E+n._elapsedNextEstimate*T/x;if(x>=A||S>f.maxFrameTime){f.lastUpdatesDeferred=Math.round(Math.max(0,f.timeBuffer/p-n._timeBufferMargin));break}}d.timing.lastUpdatesPerFrame=x,o.trigger(f,"afterTick",v),f.frameDeltaHistory.length>=100&&(f.lastUpdatesDeferred&&Math.round(f.frameDelta/p)>A?c.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):f.lastUpdatesDeferred&&c.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof f.isFixed<"u"&&c.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(f.deltaMin||f.deltaMax)&&c.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),f.fps!==0&&c.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},n.stop=function(f){n._cancelNextFrame(f)},n._onNextFrame=function(f,d){if(typeof window<"u"&&window.requestAnimationFrame)f.frameRequestId=window.requestAnimationFrame(d);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return f.frameRequestId},n._cancelNextFrame=function(f){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(f.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var u=function(f){for(var d=0,h=f.length,l=0;l<h;l+=1)d+=f[l];return d/h||0}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(8),a=r(0),c=a.deprecated;(function(){n.collides=function(u,f){return o.collides(u,f)},c(n,"collides","SAT.collides ➤ replaced by Collision.collides")})()}),(function(t,i,r){var n={};t.exports=n,r(1);var o=r(0);(function(){n.pathToVertices=function(a,c){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,f,d,h,l,p,x,m,g,y,b=[],A,v,M=0,E=0,T=0;c=c||15;var S=function(w,R,L){var N=L%2===1&&L>1;if(!g||w!=g.x||R!=g.y){g&&N?(A=g.x,v=g.y):(A=0,v=0);var F={x:A+w,y:v+R};(N||!g)&&(g=F),b.push(F),E=A+w,T=v+R}},_=function(w){var R=w.pathSegTypeAsLetter.toUpperCase();if(R!=="Z"){switch(R){case"M":case"L":case"T":case"C":case"S":case"Q":E=w.x,T=w.y;break;case"H":E=w.x;break;case"V":T=w.y;break}S(E,T,w.pathSegType)}};for(n._svgPathToAbsolute(a),d=a.getTotalLength(),p=[],u=0;u<a.pathSegList.numberOfItems;u+=1)p.push(a.pathSegList.getItem(u));for(x=p.concat();M<d;){if(y=a.getPathSegAtLength(M),l=p[y],l!=m){for(;x.length&&x[0]!=l;)_(x.shift());m=l}switch(l.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=a.getPointAtLength(M),S(h.x,h.y,0);break}M+=c}for(u=0,f=x.length;u<f;++u)_(x[u]);return b},n._svgPathToAbsolute=function(a){for(var c,u,f,d,h,l,p=a.pathSegList,x=0,m=0,g=p.numberOfItems,y=0;y<g;++y){var b=p.getItem(y),A=b.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(A))"x"in b&&(x=b.x),"y"in b&&(m=b.y);else switch("x1"in b&&(f=x+b.x1),"x2"in b&&(h=x+b.x2),"y1"in b&&(d=m+b.y1),"y2"in b&&(l=m+b.y2),"x"in b&&(x+=b.x),"y"in b&&(m+=b.y),A){case"m":p.replaceItem(a.createSVGPathSegMovetoAbs(x,m),y);break;case"l":p.replaceItem(a.createSVGPathSegLinetoAbs(x,m),y);break;case"h":p.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(x),y);break;case"v":p.replaceItem(a.createSVGPathSegLinetoVerticalAbs(m),y);break;case"c":p.replaceItem(a.createSVGPathSegCurvetoCubicAbs(x,m,f,d,h,l),y);break;case"s":p.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(x,m,h,l),y);break;case"q":p.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(x,m,f,d),y);break;case"t":p.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(x,m),y);break;case"a":p.replaceItem(a.createSVGPathSegArcAbs(x,m,b.r1,b.r2,b.angle,b.largeArcFlag,b.sweepFlag),y);break;case"z":case"Z":x=c,m=u;break}(A=="M"||A=="m")&&(c=x,u=m)}}})()}),(function(t,i,r){var n={};t.exports=n;var o=r(6);r(0),(function(){n.create=o.create,n.add=o.add,n.remove=o.remove,n.clear=o.clear,n.addComposite=o.addComposite,n.addBody=o.addBody,n.addConstraint=o.addConstraint})()})])})})(Dr)),Dr.exports}var y0=S0();const qt=_0(y0),pt=new pf;pt.fog=new Ia(51,100,1500);const ki=new Ut(75,window.innerWidth/window.innerHeight,.1,2e3),Cn=new v0({antialias:!0});Cn.setSize(window.innerWidth,window.innerHeight);Cn.shadowMap.enabled=!0;Cn.shadowMap.type=sl;Cn.toneMapping=al;Cn.toneMappingExposure=1.2;document.body.appendChild(Cn.domElement);const Va=qt.Engine.create();Va.gravity.y=0;const Vl=Va.world;ki.position.set(0,100,500);ki.lookAt(0,0,0);const b0=new Cf(1052720,.5);pt.add(b0);const Ga=new wf(16777215,.3);Ga.position.set(200,200,200);Ga.castShadow=!0;pt.add(Ga);const _i=new za(16777198,1.5,2e3);_i.castShadow=!0;_i.shadow.camera.near=1;_i.shadow.camera.far=2e3;pt.add(_i);const Sa=new za(16777164,.5,500);pt.add(Sa);const E0=new yi(2e3,1200),Yr=document.createElement("canvas");Yr.width=512;Yr.height=512;const Ha=Yr.getContext("2d"),Ki=Ha.createLinearGradient(0,0,0,512);Ki.addColorStop(0,"#0a0a2a");Ki.addColorStop(.3,"#4a1a6a");Ki.addColorStop(.7,"#a84a2a");Ki.addColorStop(1,"#FF9557");Ha.fillStyle=Ki;Ha.fillRect(0,0,512,512);const T0=new Pl(Yr),A0=new Gr({map:T0,side:zt}),Gl=new At(E0,A0);Gl.position.z=-600;pt.add(Gl);const ui=new fi,w0=new Oa(1,32,32),C0=new $i({color:16777198,emissive:16777164,emissiveIntensity:.8,shininess:1}),zr=new At(w0,C0),R0=new Na(1.2,2,32),P0=new Gr({color:16777164,transparent:!0,opacity:.3,side:zt}),Hl=new At(R0,P0);zr.add(Hl);ui.add(zr);pt.add(ui);let Sn=0;const D0=700,L0=40,I0=Math.PI*.6,kl=new _t,U0=[-200,150,-400,-180,140,-400,-160,135,-400,-140,145,-400,-120,160,-400,-100,170,-400,-80,165,-400,-60,160,-400,-40,155,-400,-20,150,-400,0,145,-400,20,140,-400,40,135,-400,60,140,-400,80,150,-400,100,165,-400,120,175,-400];kl.setAttribute("position",new ct(U0,3));const F0=new Rl({color:16777215,size:3}),Wl=new yf(kl,F0);pt.add(Wl);const N0=new yi(2e3,2e3,100,100),O0=new $i({color:4251856,transparent:!0,opacity:.7,shininess:200,specular:16777215,reflectivity:1,side:zt}),Zi=new At(N0,O0);Zi.rotation.x=-Math.PI/2;Zi.position.y=-240;Zi.receiveShadow=!0;pt.add(Zi);const Ei=[],Ti=new fi,Xl=[];function qr(s,e,t,i,r){const n=new kr(100,240,4),o=new $i({color:4473958,emissive:17663,emissiveIntensity:.2,wireframe:!0,shininess:100,specular:8947967}),a=new At(n,o);a.position.set(s,e,t),i&&(a.rotation.x=i),r&&(a.rotation.z=r),a.castShadow=!0,a.receiveShadow=!0;const c=new za(4491519,.5,150);return c.position.copy(a.position),Xl.push(c),Ti.add(c),a}Ei.push(qr(100,0,0,0,-Math.PI/2));Ei.push(qr(-100,0,0,0,Math.PI/2));Ei.push(qr(0,0,100,Math.PI/2,0));Ei.push(qr(0,0,-100,-Math.PI/2,0));Ei.forEach(s=>Ti.add(s));pt.add(Ti);const B0=new Df(300);pt.add(B0);function kn(s,e,t){const i=document.createElement("canvas");i.width=256,i.height=64;const r=i.getContext("2d");r.fillStyle=e,r.font="Bold 48px Arial",r.fillText(s,10,50);const n=new Pl(i),o=new Al({map:n}),a=new xf(o);return a.position.copy(t),a.scale.set(80,20,1),a}const z0=kn("X (East-West)","#ff0000",new O(320,0,0)),V0=kn("Y (Up-Down)","#00ff00",new O(0,320,0)),G0=kn("Z (North-South)","#0000ff",new O(0,0,320));pt.add(z0);pt.add(V0);pt.add(G0);const Yl=new Pf(600,30,4473924,2236962);Yl.position.y=-240;pt.add(Yl);const H0=kn("NORTH (-Z)","#00ffff",new O(0,-200,-400)),k0=kn("SOUTH (+Z)","#00ffff",new O(0,-200,400)),W0=kn("EAST (+X)","#ffff00",new O(400,-200,0)),X0=kn("WEST (-X)","#ffff00",new O(-400,-200,0));pt.add(H0);pt.add(k0);pt.add(W0);pt.add(X0);const Kt=document.createElement("div");Kt.style.position="absolute";Kt.style.top="10px";Kt.style.left="10px";Kt.style.color="white";Kt.style.fontFamily="monospace";Kt.style.fontSize="14px";Kt.style.backgroundColor="rgba(0,0,0,0.7)";Kt.style.padding="10px";Kt.style.borderRadius="5px";Kt.id="moonDebug";document.body.appendChild(Kt);const ka=[];for(let s=0;s<50;s++){const e=Math.random()*7+5,t=new kr(e/2,e,3),i=new $i({color:new Ne(Math.random(),Math.random(),Math.random()),transparent:!0,opacity:Math.random()*.5+.5,shininess:100,specular:16777215,emissive:new Ne(Math.random()*.2,Math.random()*.2,Math.random()*.2),emissiveIntensity:.3}),r=new At(t,i),n=Math.random()*Math.PI*2,o=Math.random()*80;r.position.set(Math.cos(n)*o,Math.random()*100-50,Math.sin(n)*o),r.castShadow=!0,r.receiveShadow=!0,Ti.add(r);const a=qt.Bodies.circle(r.position.x,r.position.y,e/2,{restitution:.9,friction:.05});qt.Body.setVelocity(a,{x:(Math.random()-.5)*4,y:(Math.random()-.5)*4}),ka.push({mesh:r,body:a,vz:(Math.random()-.5)*4}),qt.World.add(Vl,a)}for(let s=0;s<3;s++){const e=Math.random()*10+15,t=new Hr(e,e,5,6),i=new $i({color:new Ne(1,Math.random()*.5+.5,Math.random()*.2),transparent:!0,opacity:.8,shininess:150,specular:16776960,emissive:16737792,emissiveIntensity:.2}),r=new At(t,i),n=Math.random()*Math.PI*2,o=Math.random()*80;r.position.set(Math.cos(n)*o,Math.random()*100-50,Math.sin(n)*o),r.castShadow=!0,r.receiveShadow=!0,Ti.add(r);const a=[];for(let u=0;u<6;u++){const f=Math.PI*2/6*u;a.push({x:Math.cos(f)*e,y:Math.sin(f)*e})}const c=qt.Bodies.fromVertices(r.position.x,r.position.y,[a],{restitution:.8,friction:.1});qt.Body.setVelocity(c,{x:(Math.random()-.5)*3,y:(Math.random()-.5)*3}),ka.push({mesh:r,body:c,vz:(Math.random()-.5)*3}),qt.World.add(Vl,c)}window.addEventListener("resize",()=>{ki.aspect=window.innerWidth/window.innerHeight,ki.updateProjectionMatrix(),Cn.setSize(window.innerWidth,window.innerHeight)});let ci=0;function Y0(s){if(Math.abs(s.y)>120)return!1;const r=100*(1-Math.abs(s.y)/120);return Math.sqrt(s.x*s.x+s.z*s.z)<=r}function q0(){Sn+=.002,Sn>Math.PI&&(Sn=0);const s=Math.sin(Sn)*300,e=-Math.cos(Sn+I0)*D0,t=-Math.abs(Math.sin(Sn)*200)-200;ui.position.set(e,s,t);const i=document.getElementById("moonDebug");i&&(i.innerHTML=`
      <strong>Coordinate System:</strong><br>
      X-axis (Red): East(+) / West(-)<br>
      Y-axis (Green): Up(+) / Down(-)<br>
      Z-axis (Blue): South(+) / North(-)<br>
      <br>
      <strong>Moon Position:</strong><br>
      X: ${e.toFixed(1)}<br>
      Y: ${s.toFixed(1)}<br>
      Z: ${t.toFixed(1)}<br>
      Phase: ${(Sn*180/Math.PI).toFixed(1)}°<br>
      Size: ${n.toFixed(1)}
    `);const r=1-Math.sin(Sn)*.4,n=L0*r;ui.scale.setScalar(n),_i.position.copy(ui.position),Sa.position.copy(ui.position);const o=s/300,a=1,c=1-(1-o)*.2,u=.93-(1-o)*.3;zr.material.color.setRGB(a,c,u),zr.material.emissive.setRGB(a*.8,c*.8,u*.6),_i.intensity=1+o*.5,Sa.intensity=.3+o*.2}function ql(){requestAnimationFrame(ql),ci+=.01,qt.Engine.update(Va,1e3/60),q0(),Ti.rotation.y+=.01,Ei.forEach((e,t)=>{const i=Math.sin(ci*3+t*Math.PI*.5)*.3+.7,r=Math.random()>.95?Math.random()*.5:0;e.material.emissiveIntensity=i*.4+r,Xl[t].intensity=i*.8+r}),Hl.rotation.z+=.01;const s=Zi.geometry.attributes.position;for(let e=0;e<s.count;e++){const t=s.getX(e),i=s.getY(e),r=Math.sin(t*.02+ci)*10+Math.cos(i*.015+ci*1.3)*8;s.setZ(e,r)}s.needsUpdate=!0,ka.forEach(e=>{if(e.mesh.position.x=e.body.position.x,e.mesh.position.y=e.body.position.y,e.mesh.position.z+=e.vz,!Y0(e.mesh.position)){new O(e.mesh.position.x,e.mesh.position.y,e.mesh.position.z).normalize();const t=100*(1-Math.abs(e.mesh.position.y)/120),i=Math.sqrt(e.mesh.position.x*e.mesh.position.x+e.mesh.position.z*e.mesh.position.z);if(i>t){const n=t/i;e.mesh.position.x*=n,e.mesh.position.z*=n,qt.Body.setPosition(e.body,{x:e.mesh.position.x,y:e.mesh.position.y})}Math.abs(e.mesh.position.y)>120&&(e.mesh.position.y=Math.sign(e.mesh.position.y)*120,qt.Body.setPosition(e.body,{x:e.mesh.position.x,y:e.mesh.position.y}));const r=e.body.velocity;qt.Body.setVelocity(e.body,{x:-r.x*.8,y:-r.y*.8}),e.vz*=-.8}e.mesh.rotation.x+=.02,e.mesh.rotation.y+=.01,e.mesh.material.emissive&&(e.mesh.material.emissiveIntensity=.3+Math.sin(ci*2+e.mesh.position.x)*.1)}),Wl.material.size=3+Math.sin(ci*3)*.5,Cn.render(pt,ki)}ql();
