(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wo="150",ni={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ii={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,Qo=1,Lu=2,Zl=1,Du=2,tr=3,Sn=0,Se=1,xn=2,yn=0,wi=1,ta=2,ea=3,na=4,Pu=5,xi=100,Ru=101,Iu=102,ia=103,ra=104,Nu=200,Ou=201,Fu=202,Uu=203,Jl=204,Ql=205,zu=206,Bu=207,ku=208,Vu=209,Gu=210,Hu=0,Wu=1,$u=2,co=3,qu=4,Xu=5,ju=6,Yu=7,tc=0,Ku=1,Zu=2,ln=0,Ju=1,Qu=2,th=3,eh=4,nh=5,ec=300,Ci=301,Li=302,uo=303,ho=304,ts=306,fo=1e3,Ue=1001,po=1002,he=1003,sa=1004,_s=1005,Ce=1006,ih=1007,rr=1008,$n=1009,rh=1010,sh=1011,nc=1012,oh=1013,Bn=1014,kn=1015,sr=1016,ah=1017,lh=1018,Ti=1020,ch=1021,ze=1023,uh=1024,hh=1025,Hn=1026,Di=1027,dh=1028,fh=1029,ph=1030,mh=1031,gh=1033,vs=33776,xs=33777,bs=33778,ys=33779,oa=35840,aa=35841,la=35842,ca=35843,_h=36196,ua=37492,ha=37496,da=37808,fa=37809,pa=37810,ma=37811,ga=37812,_a=37813,va=37814,xa=37815,ba=37816,ya=37817,Sa=37818,Ma=37819,Ea=37820,wa=37821,Ss=36492,vh=36283,Ta=36284,Aa=36285,Ca=36286,qn=3e3,Vt=3001,xh=3200,bh=3201,yh=0,Sh=1,We="srgb",or="srgb-linear",ic="display-p3",Ms=7680,Mh=519,La=35044,Da="300 es",mo=1035;class Qn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Es=Math.PI/180,Pa=180/Math.PI;function lr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(se[r&255]+se[r>>8&255]+se[r>>16&255]+se[r>>24&255]+"-"+se[t&255]+se[t>>8&255]+"-"+se[t>>16&15|64]+se[t>>24&255]+"-"+se[e&63|128]+se[e>>8&255]+"-"+se[e>>16&255]+se[e>>24&255]+se[n&255]+se[n>>8&255]+se[n>>16&255]+se[n>>24&255]).toLowerCase()}function me(r,t,e){return Math.max(t,Math.min(e,r))}function Eh(r,t){return(r%t+t)%t}function ws(r,t,e){return(1-e)*r+e*t}function Ra(r){return(r&r-1)===0&&r!==0}function wh(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vr(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function xe(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],p=n[7],h=n[2],m=n[5],b=n[8],f=i[0],d=i[3],y=i[6],S=i[1],v=i[4],_=i[7],M=i[2],C=i[5],D=i[8];return s[0]=a*f+o*S+l*M,s[3]=a*d+o*v+l*C,s[6]=a*y+o*_+l*D,s[1]=c*f+u*S+p*M,s[4]=c*d+u*v+p*C,s[7]=c*y+u*_+p*D,s[2]=h*f+m*S+b*M,s[5]=h*d+m*v+b*C,s[8]=h*y+m*_+b*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=u*a-o*c,h=o*l-u*s,m=c*s-a*l,b=e*p+n*h+i*m;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/b;return t[0]=p*f,t[1]=(i*c-u*n)*f,t[2]=(o*n-i*a)*f,t[3]=h*f,t[4]=(u*e-i*l)*f,t[5]=(i*s-o*e)*f,t[6]=m*f,t[7]=(n*l-c*e)*f,t[8]=(a*e-n*s)*f,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ts.makeScale(t,e)),this}rotate(t){return this.premultiply(Ts.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ts.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ts=new de;function rc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class Xn{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],p=n[i+3];const h=s[a+0],m=s[a+1],b=s[a+2],f=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=b,t[e+3]=f;return}if(p!==f||l!==h||c!==m||u!==b){let d=1-o;const y=l*h+c*m+u*b+p*f,S=y>=0?1:-1,v=1-y*y;if(v>Number.EPSILON){const M=Math.sqrt(v),C=Math.atan2(M,y*S);d=Math.sin(d*C)/M,o=Math.sin(o*C)/M}const _=o*S;if(l=l*d+h*_,c=c*d+m*_,u=u*d+b*_,p=p*d+f*_,d===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+p*p);l*=M,c*=M,u*=M,p*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],p=s[a],h=s[a+1],m=s[a+2],b=s[a+3];return t[e]=o*b+u*p+l*m-c*h,t[e+1]=l*b+u*h+c*p-o*m,t[e+2]=c*b+u*m+o*h-l*p,t[e+3]=u*b-o*p-l*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),p=o(s/2),h=l(n/2),m=l(i/2),b=l(s/2);switch(a){case"XYZ":this._x=h*u*p+c*m*b,this._y=c*m*p-h*u*b,this._z=c*u*b+h*m*p,this._w=c*u*p-h*m*b;break;case"YXZ":this._x=h*u*p+c*m*b,this._y=c*m*p-h*u*b,this._z=c*u*b-h*m*p,this._w=c*u*p+h*m*b;break;case"ZXY":this._x=h*u*p-c*m*b,this._y=c*m*p+h*u*b,this._z=c*u*b+h*m*p,this._w=c*u*p-h*m*b;break;case"ZYX":this._x=h*u*p-c*m*b,this._y=c*m*p+h*u*b,this._z=c*u*b-h*m*p,this._w=c*u*p+h*m*b;break;case"YZX":this._x=h*u*p+c*m*b,this._y=c*m*p+h*u*b,this._z=c*u*b-h*m*p,this._w=c*u*p-h*m*b;break;case"XZY":this._x=h*u*p-c*m*b,this._y=c*m*p-h*u*b,this._z=c*u*b+h*m*p,this._w=c*u*p+h*m*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],p=e[10],h=n+o+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(u-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),p=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*p+this._w*h,this._x=n*p+this._x*h,this._y=i*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ia.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ia.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-s*i,p=l*i+s*n-a*e,h=-s*e-a*n-o*i;return this.x=c*l+h*-s+u*-o-p*-a,this.y=u*l+h*-a+p*-s-c*-o,this.z=p*l+h*-o+c*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return As.copy(this).projectOnVector(t),this.sub(As)}reflect(t){return this.sub(As.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new U,Ia=new Xn;function Ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Cs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Th=new de().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ah=new de().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),bn=new U;function Ch(r){return r.convertSRGBToLinear(),bn.set(r.r,r.g,r.b).applyMatrix3(Ah),r.setRGB(bn.x,bn.y,bn.z)}function Lh(r){return bn.set(r.r,r.g,r.b).applyMatrix3(Th),r.setRGB(bn.x,bn.y,bn.z).convertLinearToSRGB()}const Dh={[or]:r=>r,[We]:r=>r.convertSRGBToLinear(),[ic]:Ch},Ph={[or]:r=>r,[We]:r=>r.convertLinearToSRGB(),[ic]:Lh},ce={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return or},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Dh[t],i=Ph[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let ri;class sc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=Yr("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class oc{constructor(t=null){this.isSource=!0,this.uuid=lr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Ls(i[a].image)):s.push(Ls(i[a]))}else s=Ls(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ls(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?sc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rh=0;class Me extends Qn{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Ue,i=Ue,s=Ce,a=rr,o=ze,l=$n,c=Me.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=lr(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fo:t.x=t.x-Math.floor(t.x);break;case Ue:t.x=t.x<0?0:1;break;case po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fo:t.y=t.y-Math.floor(t.y);break;case Ue:t.y=t.y<0?0:1;break;case po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=ec;Me.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],p=l[8],h=l[1],m=l[5],b=l[9],f=l[2],d=l[6],y=l[10];if(Math.abs(u-h)<.01&&Math.abs(p-f)<.01&&Math.abs(b-d)<.01){if(Math.abs(u+h)<.1&&Math.abs(p+f)<.1&&Math.abs(b+d)<.1&&Math.abs(c+m+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,_=(m+1)/2,M=(y+1)/2,C=(u+h)/4,D=(p+f)/4,g=(b+d)/4;return v>_&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=C/n,s=D/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=C/i,s=g/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=D/s,i=g/s),this.set(n,i,s,e),this}let S=Math.sqrt((d-b)*(d-b)+(p-f)*(p-f)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(d-b)/S,this.y=(p-f)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jn extends Qn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Me(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ce,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ac extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ih extends Me{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=Ue,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],p=t[l+1],h=t[l+2];u<e&&(e=u),p<n&&(n=p),h<i&&(i=h),u>s&&(s=u),p>a&&(a=p),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),p=t.getY(l),h=t.getZ(l);u<e&&(e=u),p<n&&(n=p),h<i&&(i=h),u>s&&(s=u),p>a&&(a=p),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(s,a,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)In.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(In)}else n.boundingBox===null&&n.computeBoundingBox(),Ds.copy(n.boundingBox),Ds.applyMatrix4(t.matrixWorld),this.union(Ds);const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),xr.subVectors(this.max,$i),si.subVectors(t.a,$i),oi.subVectors(t.b,$i),ai.subVectors(t.c,$i),pn.subVectors(oi,si),mn.subVectors(ai,oi),Nn.subVectors(si,ai);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Nn.z,Nn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Nn.z,0,-Nn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Nn.y,Nn.x,0];return!Ps(e,si,oi,ai,xr)||(e=[1,0,0,0,1,0,0,0,1],!Ps(e,si,oi,ai,xr))?!1:(br.crossVectors(pn,mn),e=[br.x,br.y,br.z],Ps(e,si,oi,ai,xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new U,new U,new U,new U,new U,new U,new U,new U],In=new U,Ds=new cr,si=new U,oi=new U,ai=new U,pn=new U,mn=new U,Nn=new U,$i=new U,xr=new U,br=new U,On=new U;function Ps(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){On.fromArray(r,s);const o=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),u=n.dot(On);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Nh=new cr,qi=new U,Rs=new U;class To{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Nh.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Rs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(Rs)),this.expandByPoint(qi.copy(t.center).sub(Rs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new U,Is=new U,yr=new U,gn=new U,Ns=new U,Sr=new U,Os=new U;class Oh{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Is.copy(t).add(e).multiplyScalar(.5),yr.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(Is);const s=t.distanceTo(e)*.5,a=-this.direction.dot(yr),o=gn.dot(this.direction),l=-gn.dot(yr),c=gn.lengthSq(),u=Math.abs(1-a*a);let p,h,m,b;if(u>0)if(p=a*l-o,h=a*o-l,b=s*u,p>=0)if(h>=-b)if(h<=b){const f=1/u;p*=f,h*=f,m=p*(p+a*h+2*o)+h*(a*p+h+2*l)+c}else h=s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;else h<=-b?(p=Math.max(0,-(-a*s+o)),h=p>0?-s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c):h<=b?(p=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(p=Math.max(0,-(a*s+o)),h=p>0?s:Math.min(Math.max(-s,-l),s),m=-p*p+h*(h+2*l)+c);else h=a>0?-s:s,p=Math.max(0,-(a*h+o)),m=-p*p+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),i&&i.copy(Is).addScaledVector(yr,h),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),i=tn.dot(tn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),p>=0?(o=(t.min.z-h.z)*p,l=(t.max.z-h.z)*p):(o=(t.max.z-h.z)*p,l=(t.min.z-h.z)*p),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,i,s){Ns.subVectors(e,t),Sr.subVectors(n,t),Os.crossVectors(Ns,Sr);let a=this.direction.dot(Os),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,t);const l=o*this.direction.dot(Sr.crossVectors(gn,Sr));if(l<0)return null;const c=o*this.direction.dot(Ns.cross(gn));if(c<0||l+c>a)return null;const u=-o*gn.dot(Os);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,o,l,c,u,p,h,m,b,f,d){const y=this.elements;return y[0]=t,y[4]=e,y[8]=n,y[12]=i,y[1]=s,y[5]=a,y[9]=o,y[13]=l,y[2]=c,y[6]=u,y[10]=p,y[14]=h,y[3]=m,y[7]=b,y[11]=f,y[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),s=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){const h=a*u,m=a*p,b=o*u,f=o*p;e[0]=l*u,e[4]=-l*p,e[8]=c,e[1]=m+b*c,e[5]=h-f*c,e[9]=-o*l,e[2]=f-h*c,e[6]=b+m*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,m=l*p,b=c*u,f=c*p;e[0]=h+f*o,e[4]=b*o-m,e[8]=a*c,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=m*o-b,e[6]=f+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,m=l*p,b=c*u,f=c*p;e[0]=h-f*o,e[4]=-a*p,e[8]=b+m*o,e[1]=m+b*o,e[5]=a*u,e[9]=f-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,m=a*p,b=o*u,f=o*p;e[0]=l*u,e[4]=b*c-m,e[8]=h*c+f,e[1]=l*p,e[5]=f*c+h,e[9]=m*c-b,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,m=a*c,b=o*l,f=o*c;e[0]=l*u,e[4]=f-h*p,e[8]=b*p+m,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=m*p+b,e[10]=h-f*p}else if(t.order==="XZY"){const h=a*l,m=a*c,b=o*l,f=o*c;e[0]=l*u,e[4]=-p,e[8]=c*u,e[1]=h*p+f,e[5]=a*u,e[9]=m*p-b,e[2]=b*p-m,e[6]=o*u,e[10]=f*p+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fh,t,Uh)}lookAt(t,e,n){const i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),_n.crossVectors(n,be),_n.lengthSq()===0&&(Math.abs(n.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),_n.crossVectors(n,be)),_n.normalize(),Mr.crossVectors(be,_n),i[0]=_n.x,i[4]=Mr.x,i[8]=be.x,i[1]=_n.y,i[5]=Mr.y,i[9]=be.y,i[2]=_n.z,i[6]=Mr.z,i[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],p=n[5],h=n[9],m=n[13],b=n[2],f=n[6],d=n[10],y=n[14],S=n[3],v=n[7],_=n[11],M=n[15],C=i[0],D=i[4],g=i[8],w=i[12],L=i[1],V=i[5],X=i[9],F=i[13],R=i[2],G=i[6],j=i[10],Z=i[14],$=i[3],Q=i[7],K=i[11],gt=i[15];return s[0]=a*C+o*L+l*R+c*$,s[4]=a*D+o*V+l*G+c*Q,s[8]=a*g+o*X+l*j+c*K,s[12]=a*w+o*F+l*Z+c*gt,s[1]=u*C+p*L+h*R+m*$,s[5]=u*D+p*V+h*G+m*Q,s[9]=u*g+p*X+h*j+m*K,s[13]=u*w+p*F+h*Z+m*gt,s[2]=b*C+f*L+d*R+y*$,s[6]=b*D+f*V+d*G+y*Q,s[10]=b*g+f*X+d*j+y*K,s[14]=b*w+f*F+d*Z+y*gt,s[3]=S*C+v*L+_*R+M*$,s[7]=S*D+v*V+_*G+M*Q,s[11]=S*g+v*X+_*j+M*K,s[15]=S*w+v*F+_*Z+M*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],p=t[6],h=t[10],m=t[14],b=t[3],f=t[7],d=t[11],y=t[15];return b*(+s*l*p-i*c*p-s*o*h+n*c*h+i*o*m-n*l*m)+f*(+e*l*m-e*c*h+s*a*h-i*a*m+i*c*u-s*l*u)+d*(+e*c*p-e*o*m-s*a*p+n*a*m+s*o*u-n*c*u)+y*(-i*o*u-e*l*p+e*o*h+i*a*p-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],p=t[9],h=t[10],m=t[11],b=t[12],f=t[13],d=t[14],y=t[15],S=p*d*c-f*h*c+f*l*m-o*d*m-p*l*y+o*h*y,v=b*h*c-u*d*c-b*l*m+a*d*m+u*l*y-a*h*y,_=u*f*c-b*p*c+b*o*m-a*f*m-u*o*y+a*p*y,M=b*p*l-u*f*l-b*o*h+a*f*h+u*o*d-a*p*d,C=e*S+n*v+i*_+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return t[0]=S*D,t[1]=(f*h*s-p*d*s-f*i*m+n*d*m+p*i*y-n*h*y)*D,t[2]=(o*d*s-f*l*s+f*i*c-n*d*c-o*i*y+n*l*y)*D,t[3]=(p*l*s-o*h*s-p*i*c+n*h*c+o*i*m-n*l*m)*D,t[4]=v*D,t[5]=(u*d*s-b*h*s+b*i*m-e*d*m-u*i*y+e*h*y)*D,t[6]=(b*l*s-a*d*s-b*i*c+e*d*c+a*i*y-e*l*y)*D,t[7]=(a*h*s-u*l*s+u*i*c-e*h*c-a*i*m+e*l*m)*D,t[8]=_*D,t[9]=(b*p*s-u*f*s-b*n*m+e*f*m+u*n*y-e*p*y)*D,t[10]=(a*f*s-b*o*s+b*n*c-e*f*c-a*n*y+e*o*y)*D,t[11]=(u*o*s-a*p*s-u*n*c+e*p*c+a*n*m-e*o*m)*D,t[12]=M*D,t[13]=(u*f*i-b*p*i+b*n*h-e*f*h-u*n*d+e*p*d)*D,t[14]=(b*o*i-a*f*i-b*n*l+e*f*l+a*n*d-e*o*d)*D,t[15]=(a*p*i-u*o*i+u*n*l-e*p*l-a*n*h+e*o*h)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,p=o+o,h=s*c,m=s*u,b=s*p,f=a*u,d=a*p,y=o*p,S=l*c,v=l*u,_=l*p,M=n.x,C=n.y,D=n.z;return i[0]=(1-(f+y))*M,i[1]=(m+_)*M,i[2]=(b-v)*M,i[3]=0,i[4]=(m-_)*C,i[5]=(1-(h+y))*C,i[6]=(d+S)*C,i[7]=0,i[8]=(b+v)*D,i[9]=(d-S)*D,i[10]=(1-(h+f))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=li.set(i[0],i[1],i[2]).length();const a=li.set(i[4],i[5],i[6]).length(),o=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ne.copy(this);const c=1/s,u=1/a,p=1/o;return Ne.elements[0]*=c,Ne.elements[1]*=c,Ne.elements[2]*=c,Ne.elements[4]*=u,Ne.elements[5]*=u,Ne.elements[6]*=u,Ne.elements[8]*=p,Ne.elements[9]*=p,Ne.elements[10]*=p,e.setFromRotationMatrix(Ne),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),p=(n+i)/(n-i),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,a){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-s),p=(e+t)*l,h=(n+i)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-p,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new U,Ne=new re,Fh=new U(0,0,0),Uh=new U(1,1,1),_n=new U,Mr=new U,be=new U,Na=new re,Oa=new Xn;class es{constructor(t=0,e=0,n=0,i=es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],p=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Na.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Na,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oa.setFromEuler(this),this.setFromQuaternion(Oa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}es.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zh=0;const Fa=new U,ci=new Xn,en=new re,Er=new U,Xi=new U,Bh=new U,kh=new Xn,Ua=new U(1,0,0),za=new U(0,1,0),Ba=new U(0,0,1),Vh={type:"added"},ka={type:"removed"};class ge extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new U,e=new es,n=new Xn,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new de}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Ua,t)}rotateY(t){return this.rotateOnAxis(za,t)}rotateZ(t){return this.rotateOnAxis(Ba,t)}translateOnAxis(t,e){return Fa.copy(t).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ua,t)}translateY(t){return this.translateOnAxis(za,t)}translateZ(t){return this.translateOnAxis(Ba,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Xi,Er,this.up):en.lookAt(Er,Xi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(en),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ka)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(ka)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,t,Bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,kh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const p=l[c];s(t.shapes,p)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),p=a(t.shapes),h=a(t.skeletons),m=a(t.animations),b=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),b.length>0&&(n.nodes=b)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new U(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Oe=new U,nn=new U,Fs=new U,rn=new U,ui=new U,hi=new U,Va=new U,Us=new U,zs=new U,Bs=new U;class sn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Oe.subVectors(t,e),i.cross(Oe);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Oe.subVectors(i,e),nn.subVectors(n,e),Fs.subVectors(t,e);const a=Oe.dot(Oe),o=Oe.dot(nn),l=Oe.dot(Fs),c=nn.dot(nn),u=nn.dot(Fs),p=a*c-o*o;if(p===0)return s.set(-2,-1,-1);const h=1/p,m=(c*l-o*u)*h,b=(a*u-o*l)*h;return s.set(1-m-b,b,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,rn),l.set(0,0),l.addScaledVector(s,rn.x),l.addScaledVector(a,rn.y),l.addScaledVector(o,rn.z),l}static isFrontFacing(t,e,n,i){return Oe.subVectors(n,e),nn.subVectors(t,e),Oe.cross(nn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oe.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Oe.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return sn.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ui.subVectors(i,n),hi.subVectors(s,n),Us.subVectors(t,n);const l=ui.dot(Us),c=hi.dot(Us);if(l<=0&&c<=0)return e.copy(n);zs.subVectors(t,i);const u=ui.dot(zs),p=hi.dot(zs);if(u>=0&&p<=u)return e.copy(i);const h=l*p-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ui,a);Bs.subVectors(t,s);const m=ui.dot(Bs),b=hi.dot(Bs);if(b>=0&&m<=b)return e.copy(s);const f=m*c-l*b;if(f<=0&&c>=0&&b<=0)return o=c/(c-b),e.copy(n).addScaledVector(hi,o);const d=u*b-m*p;if(d<=0&&p-u>=0&&m-b>=0)return Va.subVectors(s,i),o=(p-u)/(p-u+(m-b)),e.copy(i).addScaledVector(Va,o);const y=1/(d+f+h);return a=f*y,o=h*y,e.copy(n).addScaledVector(ui,a).addScaledVector(hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Gh=0;class ns extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=wi,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fe={h:0,s:0,l:0},wr={h:0,s:0,l:0};function ks(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Eh(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ks(a,s,t+1/3),this.g=ks(a,s,t),this.b=ks(a,s,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=We){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ce.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ce.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ce.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ce.toWorkingColorSpace(this,e),this;console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return ce.fromWorkingColorSpace(oe.copy(this),t),me(oe.r*255,0,255)<<16^me(oe.g*255,0,255)<<8^me(oe.b*255,0,255)<<0}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(oe.copy(this),e);const n=oe.r,i=oe.g,s=oe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const p=a-o;switch(c=u<=.5?p/(a+o):p/(2-a-o),a){case n:l=(i-s)/p+(i<s?6:0);break;case i:l=(s-n)/p+2;break;case s:l=(n-i)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(oe.copy(this),e),t.r=oe.r,t.g=oe.g,t.b=oe.b,t}getStyle(t=We){ce.fromWorkingColorSpace(oe.copy(this),t);const e=oe.r,n=oe.g,i=oe.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Fe),Fe.h+=t,Fe.s+=e,Fe.l+=n,this.setHSL(Fe.h,Fe.s,Fe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fe),t.getHSL(wr);const n=ws(Fe.h,wr.h,e),i=ws(Fe.s,wr.s,e),s=ws(Fe.l,wr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const oe=new Bt;Bt.NAMES=cc;class Ao extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Kt=new U,Tr=new At;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=La,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tr.fromBufferAttribute(this,e),Tr.applyMatrix3(t),this.setXY(e,Tr.x,Tr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix3(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyMatrix4(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.applyNormalMatrix(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Kt.fromBufferAttribute(this,e),Kt.transformDirection(t),this.setXYZ(e,Kt.x,Kt.y,Kt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),i=xe(i,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==La&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class uc extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hc extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class je extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hh=0;const Ae=new re,Vs=new ge,di=new U,ye=new cr,ji=new cr,ee=new U;class Tn extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rc(t)?hc:uc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new de().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ae.makeRotationFromQuaternion(t),this.applyMatrix4(Ae),this}rotateX(t){return Ae.makeRotationX(t),this.applyMatrix4(Ae),this}rotateY(t){return Ae.makeRotationY(t),this.applyMatrix4(Ae),this}rotateZ(t){return Ae.makeRotationZ(t),this.applyMatrix4(Ae),this}translate(t,e,n){return Ae.makeTranslation(t,e,n),this.applyMatrix4(Ae),this}scale(t,e,n){return Ae.makeScale(t,e,n),this.applyMatrix4(Ae),this}lookAt(t){return Vs.lookAt(t),Vs.updateMatrix(),this.applyMatrix4(Vs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new je(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];ye.setFromBufferAttribute(s),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new To);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];ji.setFromBufferAttribute(o),this.morphTargetsRelative?(ee.addVectors(ye.min,ji.min),ye.expandByPoint(ee),ee.addVectors(ye.max,ji.max),ye.expandByPoint(ee)):(ye.expandByPoint(ji.min),ye.expandByPoint(ji.max))}ye.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ee.fromBufferAttribute(o,c),l&&(di.fromBufferAttribute(t,c),ee.add(di)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<o;L++)c[L]=new U,u[L]=new U;const p=new U,h=new U,m=new U,b=new At,f=new At,d=new At,y=new U,S=new U;function v(L,V,X){p.fromArray(i,L*3),h.fromArray(i,V*3),m.fromArray(i,X*3),b.fromArray(a,L*2),f.fromArray(a,V*2),d.fromArray(a,X*2),h.sub(p),m.sub(p),f.sub(b),d.sub(b);const F=1/(f.x*d.y-d.x*f.y);isFinite(F)&&(y.copy(h).multiplyScalar(d.y).addScaledVector(m,-f.y).multiplyScalar(F),S.copy(m).multiplyScalar(f.x).addScaledVector(h,-d.x).multiplyScalar(F),c[L].add(y),c[V].add(y),c[X].add(y),u[L].add(S),u[V].add(S),u[X].add(S))}let _=this.groups;_.length===0&&(_=[{start:0,count:n.length}]);for(let L=0,V=_.length;L<V;++L){const X=_[L],F=X.start,R=X.count;for(let G=F,j=F+R;G<j;G+=3)v(n[G+0],n[G+1],n[G+2])}const M=new U,C=new U,D=new U,g=new U;function w(L){D.fromArray(s,L*3),g.copy(D);const V=c[L];M.copy(V),M.sub(D.multiplyScalar(D.dot(V))).normalize(),C.crossVectors(g,V);const F=C.dot(u[L])<0?-1:1;l[L*4]=M.x,l[L*4+1]=M.y,l[L*4+2]=M.z,l[L*4+3]=F}for(let L=0,V=_.length;L<V;++L){const X=_[L],F=X.start,R=X.count;for(let G=F,j=F+R;G<j;G+=3)w(n[G+0]),w(n[G+1]),w(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,p=new U;if(t)for(let h=0,m=t.count;h<m;h+=3){const b=t.getX(h+0),f=t.getX(h+1),d=t.getX(h+2);i.fromBufferAttribute(e,b),s.fromBufferAttribute(e,f),a.fromBufferAttribute(e,d),u.subVectors(a,s),p.subVectors(i,s),u.cross(p),o.fromBufferAttribute(n,b),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,d),o.add(u),l.add(u),c.add(u),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),p.subVectors(i,s),u.cross(p),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,p=o.normalized,h=new c.constructor(l.length*u);let m=0,b=0;for(let f=0,d=l.length;f<d;f++){o.isInterleavedBufferAttribute?m=l[f]*o.data.stride+o.offset:m=l[f]*u;for(let y=0;y<u;y++)h[b++]=c[m++]}return new Xe(h,u,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,p=c.length;u<p;u++){const h=c[u],m=t(h,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],p=s[c];for(let h=0,m=p.length;h<m;h++)u.push(p[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ga=new re,He=new Oh,Ar=new To,Ha=new U,Yi=new U,Ki=new U,Zi=new U,Gs=new U,Cr=new U,Lr=new At,Dr=new At,Pr=new At,Hs=new U,Rr=new U;class an extends ge{constructor(t=new Tn,e=new Ao){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Cr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],p=s[l];u!==0&&(Gs.fromBufferAttribute(p,t),a?Cr.addScaledVector(Gs,u):Cr.addScaledVector(Gs.sub(e),u))}e.add(Cr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),He.copy(t.ray).recast(t.near),Ar.containsPoint(He.origin)===!1&&(He.intersectSphere(Ar,Ha)===null||He.origin.distanceToSquared(Ha)>(t.far-t.near)**2))||(Ga.copy(s).invert(),He.copy(t.ray).applyMatrix4(Ga),n.boundingBox!==null&&He.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,p=n.groups,h=n.drawRange;if(o!==null)if(Array.isArray(i))for(let m=0,b=p.length;m<b;m++){const f=p[m],d=i[f.materialIndex],y=Math.max(f.start,h.start),S=Math.min(o.count,Math.min(f.start+f.count,h.start+h.count));for(let v=y,_=S;v<_;v+=3){const M=o.getX(v),C=o.getX(v+1),D=o.getX(v+2);a=Ir(this,d,t,He,c,u,M,C,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let f=m,d=b;f<d;f+=3){const y=o.getX(f),S=o.getX(f+1),v=o.getX(f+2);a=Ir(this,i,t,He,c,u,y,S,v),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,b=p.length;m<b;m++){const f=p[m],d=i[f.materialIndex],y=Math.max(f.start,h.start),S=Math.min(l.count,Math.min(f.start+f.count,h.start+h.count));for(let v=y,_=S;v<_;v+=3){const M=v,C=v+1,D=v+2;a=Ir(this,d,t,He,c,u,M,C,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=f.materialIndex,e.push(a))}}else{const m=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let f=m,d=b;f<d;f+=3){const y=f,S=f+1,v=f+2;a=Ir(this,i,t,He,c,u,y,S,v),a&&(a.faceIndex=Math.floor(f/3),e.push(a))}}}}function Wh(r,t,e,n,i,s,a,o){let l;if(t.side===Se?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Sn,o),l===null)return null;Rr.copy(o),Rr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:r}}function Ir(r,t,e,n,i,s,a,o,l){r.getVertexPosition(a,Yi),r.getVertexPosition(o,Ki),r.getVertexPosition(l,Zi);const c=Wh(r,t,e,n,Yi,Ki,Zi,Hs);if(c){i&&(Lr.fromBufferAttribute(i,a),Dr.fromBufferAttribute(i,o),Pr.fromBufferAttribute(i,l),c.uv=sn.getUV(Hs,Yi,Ki,Zi,Lr,Dr,Pr,new At)),s&&(Lr.fromBufferAttribute(s,a),Dr.fromBufferAttribute(s,o),Pr.fromBufferAttribute(s,l),c.uv2=sn.getUV(Hs,Yi,Ki,Zi,Lr,Dr,Pr,new At));const u={a,b:o,c:l,normal:new U,materialIndex:0};sn.getNormal(Yi,Ki,Zi,u.normal),c.face=u}return c}class ur extends Tn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],p=[];let h=0,m=0;b("z","y","x",-1,-1,n,e,t,a,s,0),b("z","y","x",1,-1,n,e,-t,a,s,1),b("x","z","y",1,1,t,n,e,i,a,2),b("x","z","y",1,-1,t,n,-e,i,a,3),b("x","y","z",1,-1,t,e,n,i,s,4),b("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new je(c,3)),this.setAttribute("normal",new je(u,3)),this.setAttribute("uv",new je(p,2));function b(f,d,y,S,v,_,M,C,D,g,w){const L=_/D,V=M/g,X=_/2,F=M/2,R=C/2,G=D+1,j=g+1;let Z=0,$=0;const Q=new U;for(let K=0;K<j;K++){const gt=K*V-F;for(let B=0;B<G;B++){const J=B*L-X;Q[f]=J*S,Q[d]=gt*v,Q[y]=R,c.push(Q.x,Q.y,Q.z),Q[f]=0,Q[d]=0,Q[y]=C>0?1:-1,u.push(Q.x,Q.y,Q.z),p.push(B/D),p.push(1-K/g),Z+=1}}for(let K=0;K<g;K++)for(let gt=0;gt<D;gt++){const B=h+gt+G*K,J=h+gt+G*(K+1),it=h+(gt+1)+G*(K+1),I=h+(gt+1)+G*K;l.push(B,J,I),l.push(J,it,I),$+=6}o.addGroup(m,$,w),m+=$,h+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pi(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ue(r){const t={};for(let e=0;e<r.length;e++){const n=Pi(r[e]);for(const i in n)t[i]=n[i]}return t}function $h(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function dc(r){return r.getRenderTarget()===null&&r.outputEncoding===Vt?We:or}const qh={clone:Pi,merge:ue};var Xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=$h(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fc extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Le extends fc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Es*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,pi=1;class Yh extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Le(fi,pi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Le(fi,pi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Le(fi,pi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Le(fi,pi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Le(fi,pi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Le(fi,pi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=t.getRenderTarget(),p=t.toneMapping,h=t.xr.enabled;t.toneMapping=ln,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=p,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class pc extends Me{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Ci,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Kh extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new pc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ur(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:yn});s.uniforms.tEquirect.value=e;const a=new an(i,s),o=e.minFilter;return e.minFilter===rr&&(e.minFilter=Ce),new Yh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Ws=new U,Zh=new U,Jh=new de;class Fn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ws.subVectors(n,e).cross(Zh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ws),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jh.getNormalMatrix(t),i=this.coplanarPoint(Ws).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new To,Nr=new U;class mc{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,s=new Fn,a=new Fn){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],p=n[7],h=n[8],m=n[9],b=n[10],f=n[11],d=n[12],y=n[13],S=n[14],v=n[15];return e[0].setComponents(o-i,p-l,f-h,v-d).normalize(),e[1].setComponents(o+i,p+l,f+h,v+d).normalize(),e[2].setComponents(o+s,p+c,f+m,v+y).normalize(),e[3].setComponents(o-s,p-c,f-m,v-y).normalize(),e[4].setComponents(o-a,p-u,f-b,v-S).normalize(),e[5].setComponents(o+a,p+u,f+b,v+S).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Nr.x=i.normal.x>0?t.max.x:t.min.x,Nr.y=i.normal.y>0?t.max.y:t.min.y,Nr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gc(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Qh(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const p=c.array,h=c.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,p,h),c.onUploadCallback();let b;if(p instanceof Float32Array)b=5126;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)b=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=5123;else if(p instanceof Int16Array)b=5122;else if(p instanceof Uint32Array)b=5125;else if(p instanceof Int32Array)b=5124;else if(p instanceof Int8Array)b=5120;else if(p instanceof Uint8Array)b=5121;else if(p instanceof Uint8ClampedArray)b=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,p){const h=u.array,m=u.updateRange;r.bindBuffer(p,c),m.count===-1?r.bufferSubData(p,0,h):(e?r.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):r.bufferSubData(p,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=n.get(c);p===void 0?n.set(c,i(c,u)):p.version<c.version&&(s(p.buffer,c,u),p.version=c.version)}return{get:a,remove:o,update:l}}class Co extends Tn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,p=t/o,h=e/l,m=[],b=[],f=[],d=[];for(let y=0;y<u;y++){const S=y*h-a;for(let v=0;v<c;v++){const _=v*p-s;b.push(_,-S,0),f.push(0,0,1),d.push(v/o),d.push(1-y/l)}}for(let y=0;y<l;y++)for(let S=0;S<o;S++){const v=S+c*y,_=S+c*(y+1),M=S+1+c*(y+1),C=S+1+c*y;m.push(v,_,C),m.push(_,M,C)}this.setIndex(m),this.setAttribute("position",new je(b,3)),this.setAttribute("normal",new je(f,3)),this.setAttribute("uv",new je(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Co(t.width,t.height,t.widthSegments,t.heightSegments)}}var td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od="vec3 transformed = vec3( position );",ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,cd=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,bd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,yd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Td="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ud=`#ifdef USE_GRADIENTMAP
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
}`,zd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Hd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Yd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Kd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,df=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ff=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,mf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Af=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Df=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Of=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$f=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Xf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,jf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Yf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Kf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,lp=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,vp=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Sp=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ep=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Tp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Cp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Dp=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,wt={alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,begin_vertex:od,beginnormal_vertex:ad,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:ud,clipping_planes_fragment:hd,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:vd,common:xd,cube_uv_reflection_fragment:bd,defaultnormal_vertex:yd,displacementmap_pars_vertex:Sd,displacementmap_vertex:Md,emissivemap_fragment:Ed,emissivemap_pars_fragment:wd,encodings_fragment:Td,encodings_pars_fragment:Ad,envmap_fragment:Cd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Hd,envmap_vertex:Rd,fog_vertex:Id,fog_pars_vertex:Nd,fog_fragment:Od,fog_pars_fragment:Fd,gradientmap_pars_fragment:Ud,lightmap_fragment:zd,lightmap_pars_fragment:Bd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Gd,lights_toon_fragment:Wd,lights_toon_pars_fragment:$d,lights_phong_fragment:qd,lights_phong_pars_fragment:Xd,lights_physical_fragment:jd,lights_physical_pars_fragment:Yd,lights_fragment_begin:Kd,lights_fragment_maps:Zd,lights_fragment_end:Jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:of,map_particle_pars_fragment:af,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphcolor_vertex:uf,morphnormal_vertex:hf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:vf,normalmap_pars_fragment:xf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Mf,output_fragment:Ef,packing:wf,premultiplied_alpha_fragment:Tf,project_vertex:Af,dithering_fragment:Cf,dithering_pars_fragment:Lf,roughnessmap_fragment:Df,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:Rf,shadowmap_pars_vertex:If,shadowmap_vertex:Nf,shadowmask_pars_fragment:Of,skinbase_vertex:Ff,skinning_pars_vertex:Uf,skinning_vertex:zf,skinnormal_vertex:Bf,specularmap_fragment:kf,specularmap_pars_fragment:Vf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Hf,transmission_fragment:Wf,transmission_pars_fragment:$f,uv_pars_fragment:qf,uv_pars_vertex:Xf,uv_vertex:jf,uv2_pars_fragment:Yf,uv2_pars_vertex:Kf,uv2_vertex:Zf,worldpos_vertex:Jf,background_vert:Qf,background_frag:tp,backgroundCube_vert:ep,backgroundCube_frag:np,cube_vert:ip,cube_frag:rp,depth_vert:sp,depth_frag:op,distanceRGBA_vert:ap,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:up,linedashed_vert:hp,linedashed_frag:dp,meshbasic_vert:fp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:gp,meshmatcap_vert:_p,meshmatcap_frag:vp,meshnormal_vert:xp,meshnormal_frag:bp,meshphong_vert:yp,meshphong_frag:Sp,meshphysical_vert:Mp,meshphysical_frag:Ep,meshtoon_vert:wp,meshtoon_frag:Tp,points_vert:Ap,points_frag:Cp,shadow_vert:Lp,shadow_frag:Dp,sprite_vert:Pp,sprite_frag:Rp},rt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new de},uv2Transform:{value:new de},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new de}}},$e={basic:{uniforms:ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:ue([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:ue([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:ue([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:ue([rt.points,rt.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:ue([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:ue([rt.common,rt.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:ue([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:ue([rt.sprite,rt.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:ue([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:ue([rt.lights,rt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};$e.physical={uniforms:ue([$e.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new At(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const Or={r:0,b:0,g:0};function Ip(r,t,e,n,i,s,a){const o=new Bt(0);let l=s===!0?0:1,c,u,p=null,h=0,m=null;function b(d,y){let S=!1,v=y.isScene===!0?y.background:null;v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v));const _=r.xr,M=_.getSession&&_.getSession();M&&M.environmentBlendMode==="additive"&&(v=null),v===null?f(o,l):v&&v.isColor&&(f(v,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ts)?(u===void 0&&(u=new an(new ur(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Pi($e.backgroundCube.uniforms),vertexShader:$e.backgroundCube.vertexShader,fragmentShader:$e.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,D,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=v.encoding!==Vt,(p!==v||h!==v.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,p=v,h=v.version,m=r.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new an(new Co(2,2),new Yn({name:"BackgroundMaterial",uniforms:Pi($e.background.uniforms),vertexShader:$e.background.vertexShader,fragmentShader:$e.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=v.encoding!==Vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||h!==v.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,p=v,h=v.version,m=r.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function f(d,y){d.getRGB(Or,dc(r)),n.buffers.color.setClear(Or.r,Or.g,Or.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(d,y=1){o.set(d),l=y,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,f(o,l)},render:b}}function Np(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=d(null);let c=l,u=!1;function p(R,G,j,Z,$){let Q=!1;if(a){const K=f(Z,j,G);c!==K&&(c=K,m(c.object)),Q=y(R,Z,j,$),Q&&S(R,Z,j,$)}else{const K=G.wireframe===!0;(c.geometry!==Z.id||c.program!==j.id||c.wireframe!==K)&&(c.geometry=Z.id,c.program=j.id,c.wireframe=K,Q=!0)}$!==null&&e.update($,34963),(Q||u)&&(u=!1,g(R,G,j,Z),$!==null&&r.bindBuffer(34963,e.get($).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function b(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function f(R,G,j){const Z=j.wireframe===!0;let $=o[R.id];$===void 0&&($={},o[R.id]=$);let Q=$[G.id];Q===void 0&&(Q={},$[G.id]=Q);let K=Q[Z];return K===void 0&&(K=d(h()),Q[Z]=K),K}function d(R){const G=[],j=[],Z=[];for(let $=0;$<i;$++)G[$]=0,j[$]=0,Z[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:Z,object:R,attributes:{},index:null}}function y(R,G,j,Z){const $=c.attributes,Q=G.attributes;let K=0;const gt=j.getAttributes();for(const B in gt)if(gt[B].location>=0){const it=$[B];let I=Q[B];if(I===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),it===void 0||it.attribute!==I||I&&it.data!==I.data)return!0;K++}return c.attributesNum!==K||c.index!==Z}function S(R,G,j,Z){const $={},Q=G.attributes;let K=0;const gt=j.getAttributes();for(const B in gt)if(gt[B].location>=0){let it=Q[B];it===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(it=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(it=R.instanceColor));const I={};I.attribute=it,it&&it.data&&(I.data=it.data),$[B]=I,K++}c.attributes=$,c.attributesNum=K,c.index=Z}function v(){const R=c.newAttributes;for(let G=0,j=R.length;G<j;G++)R[G]=0}function _(R){M(R,0)}function M(R,G){const j=c.newAttributes,Z=c.enabledAttributes,$=c.attributeDivisors;j[R]=1,Z[R]===0&&(r.enableVertexAttribArray(R),Z[R]=1),$[R]!==G&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,G),$[R]=G)}function C(){const R=c.newAttributes,G=c.enabledAttributes;for(let j=0,Z=G.length;j<Z;j++)G[j]!==R[j]&&(r.disableVertexAttribArray(j),G[j]=0)}function D(R,G,j,Z,$,Q){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(R,G,j,$,Q):r.vertexAttribPointer(R,G,j,Z,$,Q)}function g(R,G,j,Z){if(n.isWebGL2===!1&&(R.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const $=Z.attributes,Q=j.getAttributes(),K=G.defaultAttributeValues;for(const gt in Q){const B=Q[gt];if(B.location>=0){let J=$[gt];if(J===void 0&&(gt==="instanceMatrix"&&R.instanceMatrix&&(J=R.instanceMatrix),gt==="instanceColor"&&R.instanceColor&&(J=R.instanceColor)),J!==void 0){const it=J.normalized,I=J.itemSize,at=e.get(J);if(at===void 0)continue;const ct=at.buffer,lt=at.type,dt=at.bytesPerElement;if(J.isInterleavedBufferAttribute){const xt=J.data,yt=xt.stride,Mt=J.offset;if(xt.isInstancedInterleavedBuffer){for(let Lt=0;Lt<B.locationSize;Lt++)M(B.location+Lt,xt.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Lt=0;Lt<B.locationSize;Lt++)_(B.location+Lt);r.bindBuffer(34962,ct);for(let Lt=0;Lt<B.locationSize;Lt++)D(B.location+Lt,I/B.locationSize,lt,it,yt*dt,(Mt+I/B.locationSize*Lt)*dt)}else{if(J.isInstancedBufferAttribute){for(let xt=0;xt<B.locationSize;xt++)M(B.location+xt,J.meshPerAttribute);R.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xt=0;xt<B.locationSize;xt++)_(B.location+xt);r.bindBuffer(34962,ct);for(let xt=0;xt<B.locationSize;xt++)D(B.location+xt,I/B.locationSize,lt,it,I*dt,I/B.locationSize*xt*dt)}}else if(K!==void 0){const it=K[gt];if(it!==void 0)switch(it.length){case 2:r.vertexAttrib2fv(B.location,it);break;case 3:r.vertexAttrib3fv(B.location,it);break;case 4:r.vertexAttrib4fv(B.location,it);break;default:r.vertexAttrib1fv(B.location,it)}}}}C()}function w(){X();for(const R in o){const G=o[R];for(const j in G){const Z=G[j];for(const $ in Z)b(Z[$].object),delete Z[$];delete G[j]}delete o[R]}}function L(R){if(o[R.id]===void 0)return;const G=o[R.id];for(const j in G){const Z=G[j];for(const $ in Z)b(Z[$].object),delete Z[$];delete G[j]}delete o[R.id]}function V(R){for(const G in o){const j=o[G];if(j[R.id]===void 0)continue;const Z=j[R.id];for(const $ in Z)b(Z[$].object),delete Z[$];delete j[R.id]}}function X(){F(),u=!0,c!==l&&(c=l,m(c.object))}function F(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:X,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:V,initAttributes:v,enableAttribute:_,disableUnusedAttributes:C}}function Op(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,p){if(p===0)return;let h,m;if(i)h=r,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,p),e.update(u,s,p)}this.setMode=a,this.render=o,this.renderInstances=l}function Fp(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,p=r.getParameter(34930),h=r.getParameter(35660),m=r.getParameter(3379),b=r.getParameter(34076),f=r.getParameter(34921),d=r.getParameter(36347),y=r.getParameter(36348),S=r.getParameter(36349),v=h>0,_=a||t.has("OES_texture_float"),M=v&&_,C=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:p,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:b,maxAttributes:f,maxVertexUniforms:d,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:M,maxSamples:C}}function Up(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Fn,o=new de,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||n!==0||i;return i=h,n=p.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){e=u(p,h,0)},this.setState=function(p,h,m){const b=p.clippingPlanes,f=p.clipIntersection,d=p.clipShadows,y=r.get(p);if(!i||b===null||b.length===0||s&&!d)s?u(null):c();else{const S=s?0:n,v=S*4;let _=y.clippingState||null;l.value=_,_=u(b,h,v,m);for(let M=0;M!==v;++M)_[M]=e[M];y.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,h,m,b){const f=p!==null?p.length:0;let d=null;if(f!==0){if(d=l.value,b!==!0||d===null){const y=m+f*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<y)&&(d=new Float32Array(y));for(let v=0,_=m;v!==f;++v,_+=4)a.copy(p[v]).applyMatrix4(S,o),a.normal.toArray(d,_),d[_+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,d}}function zp(r){let t=new WeakMap;function e(a,o){return o===uo?a.mapping=Ci:o===ho&&(a.mapping=Li),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===uo||o===ho)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Kh(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Bp extends fc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Mi=4,Wa=[.125,.215,.35,.446,.526,.582],zn=20,$s=new Bp,$a=new Bt;let qs=null;const Un=(1+Math.sqrt(5))/2,gi=1/Un,qa=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Un,gi),new U(0,Un,-gi),new U(gi,0,Un),new U(-gi,0,Un),new U(Un,gi,0),new U(-Un,gi,0)];class Xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){qs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qs),t.scissorTest=!1,Fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ci||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qs=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:sr,format:ze,encoding:qn,depthBuffer:!1},i=ja(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kp(s)),this._blurMaterial=Vp(s,t,e)}return i}_compileMaterial(t){const e=new an(this._lodPlanes[0],t);this._renderer.compile(e,$s)}_sceneToCubeUV(t,e,n,i){const o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,h=u.toneMapping;u.getClearColor($a),u.toneMapping=ln,u.autoClear=!1;const m=new Ao({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),b=new an(new ur,m);let f=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,f=!0):(m.color.copy($a),f=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(o.up.set(0,l[y],0),o.lookAt(c[y],0,0)):S===1?(o.up.set(0,0,l[y]),o.lookAt(0,c[y],0)):(o.up.set(0,l[y],0),o.lookAt(0,0,c[y]));const v=this._cubeSize;Fr(i,S*v,y>2?v:0,v,v),u.setRenderTarget(i),f&&u.render(b,o),u.render(t,o)}b.geometry.dispose(),b.material.dispose(),u.toneMapping=h,u.autoClear=p,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ci||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new an(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=qa[(i-1)%qa.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,p=new an(this._lodPlanes[i],c),h=c.uniforms,m=this._sizeLods[n]-1,b=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*zn-1),f=s/b,d=isFinite(s)?1+Math.floor(u*f):zn;d>zn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${zn}`);const y=[];let S=0;for(let D=0;D<zn;++D){const g=D/f,w=Math.exp(-g*g/2);y.push(w),D===0?S+=w:D<d&&(S+=2*w)}for(let D=0;D<y.length;D++)y[D]=y[D]/S;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=y,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=b,h.mipInt.value=v-n;const _=this._sizeLods[i],M=3*_*(i>v-Mi?i-v+Mi:0),C=4*(this._cubeSize-_);Fr(e,M,C,3*_,2*_),l.setRenderTarget(e),l.render(p,$s)}}function kp(r){const t=[],e=[],n=[];let i=r;const s=r-Mi+1+Wa.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Mi?l=Wa[a-r+Mi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,p=1+c,h=[u,u,p,u,p,p,u,u,p,p,u,p],m=6,b=6,f=3,d=2,y=1,S=new Float32Array(f*b*m),v=new Float32Array(d*b*m),_=new Float32Array(y*b*m);for(let C=0;C<m;C++){const D=C%3*2/3-1,g=C>2?0:-1,w=[D,g,0,D+2/3,g,0,D+2/3,g+1,0,D,g,0,D+2/3,g+1,0,D,g+1,0];S.set(w,f*b*C),v.set(h,d*b*C);const L=[C,C,C,C,C,C];_.set(L,y*b*C)}const M=new Tn;M.setAttribute("position",new Xe(S,f)),M.setAttribute("uv",new Xe(v,d)),M.setAttribute("faceIndex",new Xe(_,y)),t.push(M),i>Mi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ja(r,t,e){const n=new jn(r,t,e);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Vp(r,t,e){const n=new Float32Array(zn),i=new U(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ya(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ka(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Lo(){return`

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
	`}function Gp(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===uo||l===ho,u=l===Ci||l===Li;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let p=t.get(o);return e===null&&(e=new Xa(r)),p=c?e.fromEquirectangular(o,p):e.fromCubemap(o,p),t.set(o,p),p.texture}else{if(t.has(o))return t.get(o).texture;{const p=o.image;if(c&&p&&p.height>0||u&&p&&i(p)){e===null&&(e=new Xa(r));const h=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Hp(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Wp(r,t,e,n){const i={},s=new WeakMap;function a(p){const h=p.target;h.index!==null&&t.remove(h.index);for(const b in h.attributes)t.remove(h.attributes[b]);h.removeEventListener("dispose",a),delete i[h.id];const m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(p,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(p){const h=p.attributes;for(const b in h)t.update(h[b],34962);const m=p.morphAttributes;for(const b in m){const f=m[b];for(let d=0,y=f.length;d<y;d++)t.update(f[d],34962)}}function c(p){const h=[],m=p.index,b=p.attributes.position;let f=0;if(m!==null){const S=m.array;f=m.version;for(let v=0,_=S.length;v<_;v+=3){const M=S[v+0],C=S[v+1],D=S[v+2];h.push(M,C,C,D,D,M)}}else{const S=b.array;f=b.version;for(let v=0,_=S.length/3-1;v<_;v+=3){const M=v+0,C=v+1,D=v+2;h.push(M,C,C,D,D,M)}}const d=new(rc(h)?hc:uc)(h,1);d.version=f;const y=s.get(p);y&&t.remove(y),s.set(p,d)}function u(p){const h=s.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return s.get(p)}return{get:o,update:l,getWireframeAttribute:u}}function $p(r,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){r.drawElements(s,m,o,h*l),e.update(m,s,1)}function p(h,m,b){if(b===0)return;let f,d;if(i)f=r,d="drawElementsInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,m,o,h*l,b),e.update(m,s,b)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=p}function qp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xp(r,t){return r[0]-t[0]}function jp(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Yp(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new ie,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,p){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const b=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,f=b!==void 0?b.length:0;let d=s.get(u);if(d===void 0||d.count!==f){let G=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var m=G;d!==void 0&&d.texture.dispose();const v=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],g=u.morphAttributes.color||[];let w=0;v===!0&&(w=1),_===!0&&(w=2),M===!0&&(w=3);let L=u.attributes.position.count*w,V=1;L>t.maxTextureSize&&(V=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const X=new Float32Array(L*V*4*f),F=new ac(X,L,V,f);F.type=kn,F.needsUpdate=!0;const R=w*4;for(let j=0;j<f;j++){const Z=C[j],$=D[j],Q=g[j],K=L*V*4*j;for(let gt=0;gt<Z.count;gt++){const B=gt*R;v===!0&&(a.fromBufferAttribute(Z,gt),X[K+B+0]=a.x,X[K+B+1]=a.y,X[K+B+2]=a.z,X[K+B+3]=0),_===!0&&(a.fromBufferAttribute($,gt),X[K+B+4]=a.x,X[K+B+5]=a.y,X[K+B+6]=a.z,X[K+B+7]=0),M===!0&&(a.fromBufferAttribute(Q,gt),X[K+B+8]=a.x,X[K+B+9]=a.y,X[K+B+10]=a.z,X[K+B+11]=Q.itemSize===4?a.w:1)}}d={count:f,texture:F,size:new At(L,V)},s.set(u,d),u.addEventListener("dispose",G)}let y=0;for(let v=0;v<h.length;v++)y+=h[v];const S=u.morphTargetsRelative?1:1-y;p.getUniforms().setValue(r,"morphTargetBaseInfluence",S),p.getUniforms().setValue(r,"morphTargetInfluences",h),p.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),p.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}else{const b=h===void 0?0:h.length;let f=n[u.id];if(f===void 0||f.length!==b){f=[];for(let _=0;_<b;_++)f[_]=[_,0];n[u.id]=f}for(let _=0;_<b;_++){const M=f[_];M[0]=_,M[1]=h[_]}f.sort(jp);for(let _=0;_<8;_++)_<b&&f[_][1]?(o[_][0]=f[_][0],o[_][1]=f[_][1]):(o[_][0]=Number.MAX_SAFE_INTEGER,o[_][1]=0);o.sort(Xp);const d=u.morphAttributes.position,y=u.morphAttributes.normal;let S=0;for(let _=0;_<8;_++){const M=o[_],C=M[0],D=M[1];C!==Number.MAX_SAFE_INTEGER&&D?(d&&u.getAttribute("morphTarget"+_)!==d[C]&&u.setAttribute("morphTarget"+_,d[C]),y&&u.getAttribute("morphNormal"+_)!==y[C]&&u.setAttribute("morphNormal"+_,y[C]),i[_]=D,S+=D):(d&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),y&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),i[_]=0)}const v=u.morphTargetsRelative?1:1-S;p.getUniforms().setValue(r,"morphTargetBaseInfluence",v),p.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Kp(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,p=t.get(l,u);return i.get(p)!==c&&(t.update(p),i.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),p}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const _c=new Me,vc=new ac,xc=new Ih,bc=new pc,Za=[],Ja=[],Qa=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function Bi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Za[i];if(s===void 0&&(s=new Float32Array(i),Za[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Zt(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Jt(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function is(r,t){let e=Ja[t];e===void 0&&(e=new Int32Array(t),Ja[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Zp(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Jp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;r.uniform2fv(this.addr,t),Jt(e,t)}}function Qp(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Zt(e,t))return;r.uniform3fv(this.addr,t),Jt(e,t)}}function tm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;r.uniform4fv(this.addr,t),Jt(e,t)}}function em(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Jt(e,t)}else{if(Zt(e,n))return;el.set(n),r.uniformMatrix2fv(this.addr,!1,el),Jt(e,n)}}function nm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Jt(e,t)}else{if(Zt(e,n))return;tl.set(n),r.uniformMatrix3fv(this.addr,!1,tl),Jt(e,n)}}function im(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Zt(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Jt(e,t)}else{if(Zt(e,n))return;Qa.set(n),r.uniformMatrix4fv(this.addr,!1,Qa),Jt(e,n)}}function rm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function sm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;r.uniform2iv(this.addr,t),Jt(e,t)}}function om(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Zt(e,t))return;r.uniform3iv(this.addr,t),Jt(e,t)}}function am(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;r.uniform4iv(this.addr,t),Jt(e,t)}}function lm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function cm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Zt(e,t))return;r.uniform2uiv(this.addr,t),Jt(e,t)}}function um(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Zt(e,t))return;r.uniform3uiv(this.addr,t),Jt(e,t)}}function hm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Zt(e,t))return;r.uniform4uiv(this.addr,t),Jt(e,t)}}function dm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||_c,i)}function fm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xc,i)}function pm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bc,i)}function mm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||vc,i)}function gm(r){switch(r){case 5126:return Zp;case 35664:return Jp;case 35665:return Qp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return rm;case 35667:case 35671:return sm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return lm;case 36294:return cm;case 36295:return um;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(r,t){r.uniform1fv(this.addr,t)}function vm(r,t){const e=Bi(t,this.size,2);r.uniform2fv(this.addr,e)}function xm(r,t){const e=Bi(t,this.size,3);r.uniform3fv(this.addr,e)}function bm(r,t){const e=Bi(t,this.size,4);r.uniform4fv(this.addr,e)}function ym(r,t){const e=Bi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Sm(r,t){const e=Bi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Mm(r,t){const e=Bi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Em(r,t){r.uniform1iv(this.addr,t)}function wm(r,t){r.uniform2iv(this.addr,t)}function Tm(r,t){r.uniform3iv(this.addr,t)}function Am(r,t){r.uniform4iv(this.addr,t)}function Cm(r,t){r.uniform1uiv(this.addr,t)}function Lm(r,t){r.uniform2uiv(this.addr,t)}function Dm(r,t){r.uniform3uiv(this.addr,t)}function Pm(r,t){r.uniform4uiv(this.addr,t)}function Rm(r,t,e){const n=this.cache,i=t.length,s=is(e,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||_c,s[a])}function Im(r,t,e){const n=this.cache,i=t.length,s=is(e,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||xc,s[a])}function Nm(r,t,e){const n=this.cache,i=t.length,s=is(e,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||bc,s[a])}function Om(r,t,e){const n=this.cache,i=t.length,s=is(e,i);Zt(n,s)||(r.uniform1iv(this.addr,s),Jt(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||vc,s[a])}function Fm(r){switch(r){case 5126:return _m;case 35664:return vm;case 35665:return xm;case 35666:return bm;case 35674:return ym;case 35675:return Sm;case 35676:return Mm;case 5124:case 35670:return Em;case 35667:case 35671:return wm;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return Cm;case 36294:return Lm;case 36295:return Dm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Om}}class Um{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=gm(e.type)}}class zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Fm(e.type)}}class Bm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Xs=/(\w+)(\])?(\[|\.)?/g;function nl(r,t){r.seq.push(t),r.map[t.id]=t}function km(r,t,e){const n=r.name,i=n.length;for(Xs.lastIndex=0;;){const s=Xs.exec(n),a=Xs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){nl(e,c===void 0?new Um(o,r,t):new zm(o,r,t));break}else{let p=e.map[o];p===void 0&&(p=new Bm(o),nl(e,p)),e=p}}}class $r{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);km(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function il(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Vm=0;function Gm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Hm(r){switch(r){case qn:return["Linear","( value )"];case Vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function rl(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Gm(r.getShaderSource(t),a)}else return i}function Wm(r,t){const e=Hm(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function $m(r,t){let e;switch(t){case Ju:e="Linear";break;case Qu:e="Reinhard";break;case th:e="OptimizedCineon";break;case eh:e="ACESFilmic";break;case nh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function Xm(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function er(r){return r!==""}function sl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(r){return r.replace(Ym,Km)}function Km(r,t){const e=wt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return go(e)}const Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function al(r){return r.replace(Zm,Jm)}function Jm(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ll(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qm(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Zl?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Du?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===tr&&(t="SHADOWMAP_TYPE_VSM"),t}function tg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ci:case Li:t="ENVMAP_TYPE_CUBE";break;case ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function eg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function ng(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ku:t="ENVMAP_BLENDING_MIX";break;case Zu:t="ENVMAP_BLENDING_ADD";break}return t}function ig(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rg(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Qm(e),c=tg(e),u=eg(e),p=ng(e),h=ig(e),m=e.isWebGL2?"":qm(e),b=Xm(s),f=i.createProgram();let d,y,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=[b].filter(er).join(`
`),d.length>0&&(d+=`
`),y=[m,b].filter(er).join(`
`),y.length>0&&(y+=`
`)):(d=[ll(e),"#define SHADER_NAME "+e.shaderName,b,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),y=[m,ll(e),"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ln?"#define TONE_MAPPING":"",e.toneMapping!==ln?wt.tonemapping_pars_fragment:"",e.toneMapping!==ln?$m("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",wt.encodings_pars_fragment,Wm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=go(a),a=sl(a,e),a=ol(a,e),o=go(o),o=sl(o,e),o=ol(o,e),a=al(a),o=al(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["#define varying in",e.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const v=S+d+a,_=S+y+o,M=il(i,35633,v),C=il(i,35632,_);if(i.attachShader(f,M),i.attachShader(f,C),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(f).trim(),L=i.getShaderInfoLog(M).trim(),V=i.getShaderInfoLog(C).trim();let X=!0,F=!0;if(i.getProgramParameter(f,35714)===!1){X=!1;const R=rl(i,M,"vertex"),G=rl(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+w+`
`+R+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||V==="")&&(F=!1);F&&(this.diagnostics={runnable:X,programLog:w,vertexShader:{log:L,prefix:d},fragmentShader:{log:V,prefix:y}})}i.deleteShader(M),i.deleteShader(C);let D;this.getUniforms=function(){return D===void 0&&(D=new $r(i,f)),D};let g;return this.getAttributes=function(){return g===void 0&&(g=jm(i,f)),g},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=e.shaderName,this.id=Vm++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=M,this.fragmentShader=C,this}let sg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ag(t),e.set(t,n)),n}}class ag{constructor(t){this.id=sg++,this.code=t,this.usedTimes=0}}function lg(r,t,e,n,i,s,a){const o=new lc,l=new og,c=[],u=i.isWebGL2,p=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g,w,L,V,X){const F=V.fog,R=X.geometry,G=g.isMeshStandardMaterial?V.environment:null,j=(g.isMeshStandardMaterial?e:t).get(g.envMap||G),Z=j&&j.mapping===ts?j.image.height:null,$=b[g.type];g.precision!==null&&(m=i.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,K=Q!==void 0?Q.length:0;let gt=0;R.morphAttributes.position!==void 0&&(gt=1),R.morphAttributes.normal!==void 0&&(gt=2),R.morphAttributes.color!==void 0&&(gt=3);let B,J,it,I;if($){const yt=$e[$];B=yt.vertexShader,J=yt.fragmentShader}else B=g.vertexShader,J=g.fragmentShader,l.update(g),it=l.getVertexShaderID(g),I=l.getFragmentShaderID(g);const at=r.getRenderTarget(),ct=g.alphaTest>0,lt=g.clearcoat>0,dt=g.iridescence>0;return{isWebGL2:u,shaderID:$,shaderName:g.type,vertexShader:B,fragmentShader:J,defines:g.defines,customVertexShaderID:it,customFragmentShaderID:I,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:h,outputEncoding:at===null?r.outputEncoding:at.isXRRenderTarget===!0?at.texture.encoding:qn,map:!!g.map,matcap:!!g.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Z,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Sh,tangentSpaceNormalMap:g.normalMapType===yh,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===Vt,clearcoat:lt,clearcoatMap:lt&&!!g.clearcoatMap,clearcoatRoughnessMap:lt&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:lt&&!!g.clearcoatNormalMap,iridescence:dt,iridescenceMap:dt&&!!g.iridescenceMap,iridescenceThicknessMap:dt&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===wi,alphaMap:!!g.alphaMap,alphaTest:ct,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!R.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!F,useFog:g.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:p,skinning:X.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:gt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:g.toneMapped?r.toneMapping:ln,useLegacyLights:r.useLegacyLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===xn,flipSided:g.side===Se,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(const L in g.defines)w.push(L),w.push(g.defines[L]);return g.isRawShaderMaterial===!1&&(y(w,g),S(w,g),w.push(r.outputEncoding)),w.push(g.customProgramCacheKey),w.join()}function y(g,w){g.push(w.precision),g.push(w.outputEncoding),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.combine),g.push(w.vertexUvs),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function S(g,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.map&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.lightMap&&o.enable(7),w.aoMap&&o.enable(8),w.emissiveMap&&o.enable(9),w.bumpMap&&o.enable(10),w.normalMap&&o.enable(11),w.objectSpaceNormalMap&&o.enable(12),w.tangentSpaceNormalMap&&o.enable(13),w.clearcoat&&o.enable(14),w.clearcoatMap&&o.enable(15),w.clearcoatRoughnessMap&&o.enable(16),w.clearcoatNormalMap&&o.enable(17),w.iridescence&&o.enable(18),w.iridescenceMap&&o.enable(19),w.iridescenceThicknessMap&&o.enable(20),w.displacementMap&&o.enable(21),w.specularMap&&o.enable(22),w.roughnessMap&&o.enable(23),w.metalnessMap&&o.enable(24),w.gradientMap&&o.enable(25),w.alphaMap&&o.enable(26),w.alphaTest&&o.enable(27),w.vertexColors&&o.enable(28),w.vertexAlphas&&o.enable(29),w.vertexUvs&&o.enable(30),w.vertexTangents&&o.enable(31),w.uvsVertexOnly&&o.enable(32),g.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.specularIntensityMap&&o.enable(15),w.specularColorMap&&o.enable(16),w.transmission&&o.enable(17),w.transmissionMap&&o.enable(18),w.thicknessMap&&o.enable(19),w.sheen&&o.enable(20),w.sheenColorMap&&o.enable(21),w.sheenRoughnessMap&&o.enable(22),w.decodeVideoTexture&&o.enable(23),w.opaque&&o.enable(24),g.push(o.mask)}function v(g){const w=b[g.type];let L;if(w){const V=$e[w];L=qh.clone(V.uniforms)}else L=g.uniforms;return L}function _(g,w){let L;for(let V=0,X=c.length;V<X;V++){const F=c[V];if(F.cacheKey===w){L=F,++L.usedTimes;break}}return L===void 0&&(L=new rg(r,w,g,s),c.push(L)),L}function M(g){if(--g.usedTimes===0){const w=c.indexOf(g);c[w]=c[c.length-1],c.pop(),g.destroy()}}function C(g){l.remove(g)}function D(){l.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:v,acquireProgram:_,releaseProgram:M,releaseShaderCache:C,programs:c,dispose:D}}function cg(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ug(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function cl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ul(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(p,h,m,b,f,d){let y=r[t];return y===void 0?(y={id:p.id,object:p,geometry:h,material:m,groupOrder:b,renderOrder:p.renderOrder,z:f,group:d},r[t]=y):(y.id=p.id,y.object=p,y.geometry=h,y.material=m,y.groupOrder=b,y.renderOrder=p.renderOrder,y.z=f,y.group=d),t++,y}function o(p,h,m,b,f,d){const y=a(p,h,m,b,f,d);m.transmission>0?n.push(y):m.transparent===!0?i.push(y):e.push(y)}function l(p,h,m,b,f,d){const y=a(p,h,m,b,f,d);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):e.unshift(y)}function c(p,h){e.length>1&&e.sort(p||ug),n.length>1&&n.sort(h||cl),i.length>1&&i.sort(h||cl)}function u(){for(let p=t,h=r.length;p<h;p++){const m=r[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function hg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new ul,r.set(n,[a])):i>=s.length?(a=new ul,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function dg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Bt};break;case"SpotLight":e={position:new U,direction:new U,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function fg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let pg=0;function mg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function gg(r,t){const e=new dg,n=fg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,a=new re,o=new re;function l(u,p){let h=0,m=0,b=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let f=0,d=0,y=0,S=0,v=0,_=0,M=0,C=0,D=0,g=0;u.sort(mg);const w=p===!0?Math.PI:1;for(let V=0,X=u.length;V<X;V++){const F=u[V],R=F.color,G=F.intensity,j=F.distance,Z=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)h+=R.r*G*w,m+=R.g*G*w,b+=R.b*G*w;else if(F.isLightProbe)for(let $=0;$<9;$++)i.probe[$].addScaledVector(F.sh.coefficients[$],G);else if(F.isDirectionalLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const Q=F.shadow,K=n.get(F);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.directionalShadow[f]=K,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=F.shadow.matrix,_++}i.directional[f]=$,f++}else if(F.isSpotLight){const $=e.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(R).multiplyScalar(G*w),$.distance=j,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,i.spot[y]=$;const Q=F.shadow;if(F.map&&(i.spotLightMap[D]=F.map,D++,Q.updateMatrices(F),F.castShadow&&g++),i.spotLightMatrix[y]=Q.matrix,F.castShadow){const K=n.get(F);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,i.spotShadow[y]=K,i.spotShadowMap[y]=Z,C++}y++}else if(F.isRectAreaLight){const $=e.get(F);$.color.copy(R).multiplyScalar(G),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),i.rectArea[S]=$,S++}else if(F.isPointLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity*w),$.distance=F.distance,$.decay=F.decay,F.castShadow){const Q=F.shadow,K=n.get(F);K.shadowBias=Q.bias,K.shadowNormalBias=Q.normalBias,K.shadowRadius=Q.radius,K.shadowMapSize=Q.mapSize,K.shadowCameraNear=Q.camera.near,K.shadowCameraFar=Q.camera.far,i.pointShadow[d]=K,i.pointShadowMap[d]=Z,i.pointShadowMatrix[d]=F.shadow.matrix,M++}i.point[d]=$,d++}else if(F.isHemisphereLight){const $=e.get(F);$.skyColor.copy(F.color).multiplyScalar(G*w),$.groundColor.copy(F.groundColor).multiplyScalar(G*w),i.hemi[v]=$,v++}}S>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=b;const L=i.hash;(L.directionalLength!==f||L.pointLength!==d||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==v||L.numDirectionalShadows!==_||L.numPointShadows!==M||L.numSpotShadows!==C||L.numSpotMaps!==D)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=S,i.point.length=d,i.hemi.length=v,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=C+D-g,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=g,L.directionalLength=f,L.pointLength=d,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=v,L.numDirectionalShadows=_,L.numPointShadows=M,L.numSpotShadows=C,L.numSpotMaps=D,i.version=pg++)}function c(u,p){let h=0,m=0,b=0,f=0,d=0;const y=p.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const _=u[S];if(_.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),h++}else if(_.isSpotLight){const M=i.spot[b];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(y),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(y),b++}else if(_.isRectAreaLight){const M=i.rectArea[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(y),o.identity(),a.copy(_.matrixWorld),a.premultiply(y),o.extractRotation(a),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),f++}else if(_.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(y),m++}else if(_.isHemisphereLight){const M=i.hemi[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(y),d++}}}return{setup:l,setupView:c,state:i}}function hl(r,t){const e=new gg(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(p){n.push(p)}function o(p){i.push(p)}function l(p){e.setup(n,p)}function c(p){e.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _g(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new hl(r,t),e.set(s,[l])):a>=o.length?(l=new hl(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class vg extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class xg extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`;function Sg(r,t,e){let n=new mc;const i=new At,s=new At,a=new ie,o=new vg({depthPacking:bh}),l=new xg,c={},u=e.maxTextureSize,p={[Sn]:Se,[Se]:Sn,[xn]:xn},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:bg,fragmentShader:yg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const b=new Tn;b.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new an(b,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl,this.render=function(_,M,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||_.length===0)return;const D=r.getRenderTarget(),g=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),L=r.state;L.setBlending(yn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let V=0,X=_.length;V<X;V++){const F=_[V],R=F.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const G=R.getFrameExtents();if(i.multiply(G),s.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,R.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,R.mapSize.y=s.y)),R.map===null){const Z=this.type!==tr?{minFilter:he,magFilter:he}:{};R.map=new jn(i.x,i.y,Z),R.map.texture.name=F.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const j=R.getViewportCount();for(let Z=0;Z<j;Z++){const $=R.getViewport(Z);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),L.viewport(a),R.updateMatrices(F,Z),n=R.getFrustum(),v(M,C,R.camera,F,this.type)}R.isPointLightShadow!==!0&&this.type===tr&&y(R,C),R.needsUpdate=!1}d.needsUpdate=!1,r.setRenderTarget(D,g,w)};function y(_,M){const C=t.update(f);h.defines.VSM_SAMPLES!==_.blurSamples&&(h.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new jn(i.x,i.y)),h.uniforms.shadow_pass.value=_.map.texture,h.uniforms.resolution.value=_.mapSize,h.uniforms.radius.value=_.radius,r.setRenderTarget(_.mapPass),r.clear(),r.renderBufferDirect(M,null,C,h,f,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,r.setRenderTarget(_.map),r.clear(),r.renderBufferDirect(M,null,C,m,f,null)}function S(_,M,C,D,g,w){let L=null;const V=C.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(V!==void 0)L=V;else if(L=C.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const X=L.uuid,F=M.uuid;let R=c[X];R===void 0&&(R={},c[X]=R);let G=R[F];G===void 0&&(G=L.clone(),R[F]=G),L=G}return L.visible=M.visible,L.wireframe=M.wireframe,w===tr?L.side=M.shadowSide!==null?M.shadowSide:M.side:L.side=M.shadowSide!==null?M.shadowSide:p[M.side],L.alphaMap=M.alphaMap,L.alphaTest=M.alphaTest,L.map=M.map,L.clipShadows=M.clipShadows,L.clippingPlanes=M.clippingPlanes,L.clipIntersection=M.clipIntersection,L.displacementMap=M.displacementMap,L.displacementScale=M.displacementScale,L.displacementBias=M.displacementBias,L.wireframeLinewidth=M.wireframeLinewidth,L.linewidth=M.linewidth,C.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(C.matrixWorld),L.nearDistance=D,L.farDistance=g),L}function v(_,M,C,D,g){if(_.visible===!1)return;if(_.layers.test(M.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&g===tr)&&(!_.frustumCulled||n.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,_.matrixWorld);const V=t.update(_),X=_.material;if(Array.isArray(X)){const F=V.groups;for(let R=0,G=F.length;R<G;R++){const j=F[R],Z=X[j.materialIndex];if(Z&&Z.visible){const $=S(_,Z,D,C.near,C.far,g);r.renderBufferDirect(C,null,V,$,_,j)}}}else if(X.visible){const F=S(_,X,D,C.near,C.far,g);r.renderBufferDirect(C,null,V,F,_,null)}}const L=_.children;for(let V=0,X=L.length;V<X;V++)v(L[V],M,C,D,g)}}function Mg(r,t,e){const n=e.isWebGL2;function i(){let P=!1;const W=new ie;let tt=null;const ht=new ie(0,0,0,0);return{setMask:function(ft){tt!==ft&&!P&&(r.colorMask(ft,ft,ft,ft),tt=ft)},setLocked:function(ft){P=ft},setClear:function(ft,kt,Qt,ae,Ve){Ve===!0&&(ft*=ae,kt*=ae,Qt*=ae),W.set(ft,kt,Qt,ae),ht.equals(W)===!1&&(r.clearColor(ft,kt,Qt,ae),ht.copy(W))},reset:function(){P=!1,tt=null,ht.set(-1,0,0,0)}}}function s(){let P=!1,W=null,tt=null,ht=null;return{setTest:function(ft){ft?ct(2929):lt(2929)},setMask:function(ft){W!==ft&&!P&&(r.depthMask(ft),W=ft)},setFunc:function(ft){if(tt!==ft){switch(ft){case Hu:r.depthFunc(512);break;case Wu:r.depthFunc(519);break;case $u:r.depthFunc(513);break;case co:r.depthFunc(515);break;case qu:r.depthFunc(514);break;case Xu:r.depthFunc(518);break;case ju:r.depthFunc(516);break;case Yu:r.depthFunc(517);break;default:r.depthFunc(515)}tt=ft}},setLocked:function(ft){P=ft},setClear:function(ft){ht!==ft&&(r.clearDepth(ft),ht=ft)},reset:function(){P=!1,W=null,tt=null,ht=null}}}function a(){let P=!1,W=null,tt=null,ht=null,ft=null,kt=null,Qt=null,ae=null,Ve=null;return{setTest:function($t){P||($t?ct(2960):lt(2960))},setMask:function($t){W!==$t&&!P&&(r.stencilMask($t),W=$t)},setFunc:function($t,Te,Ge){(tt!==$t||ht!==Te||ft!==Ge)&&(r.stencilFunc($t,Te,Ge),tt=$t,ht=Te,ft=Ge)},setOp:function($t,Te,Ge){(kt!==$t||Qt!==Te||ae!==Ge)&&(r.stencilOp($t,Te,Ge),kt=$t,Qt=Te,ae=Ge)},setLocked:function($t){P=$t},setClear:function($t){Ve!==$t&&(r.clearStencil($t),Ve=$t)},reset:function(){P=!1,W=null,tt=null,ht=null,ft=null,kt=null,Qt=null,ae=null,Ve=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,p=new WeakMap;let h={},m={},b=new WeakMap,f=[],d=null,y=!1,S=null,v=null,_=null,M=null,C=null,D=null,g=null,w=!1,L=null,V=null,X=null,F=null,R=null;const G=r.getParameter(35661);let j=!1,Z=0;const $=r.getParameter(7938);$.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec($)[1]),j=Z>=1):$.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=Z>=2);let Q=null,K={};const gt=r.getParameter(3088),B=r.getParameter(2978),J=new ie().fromArray(gt),it=new ie().fromArray(B);function I(P,W,tt){const ht=new Uint8Array(4),ft=r.createTexture();r.bindTexture(P,ft),r.texParameteri(P,10241,9728),r.texParameteri(P,10240,9728);for(let kt=0;kt<tt;kt++)r.texImage2D(W+kt,0,6408,1,1,0,6408,5121,ht);return ft}const at={};at[3553]=I(3553,3553,1),at[34067]=I(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ct(2929),l.setFunc(co),Gt(!1),Ht(Qo),ct(2884),qt(yn);function ct(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function lt(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function dt(P,W){return m[P]!==W?(r.bindFramebuffer(P,W),m[P]=W,n&&(P===36009&&(m[36160]=W),P===36160&&(m[36009]=W)),!0):!1}function xt(P,W){let tt=f,ht=!1;if(P)if(tt=b.get(W),tt===void 0&&(tt=[],b.set(W,tt)),P.isWebGLMultipleRenderTargets){const ft=P.texture;if(tt.length!==ft.length||tt[0]!==36064){for(let kt=0,Qt=ft.length;kt<Qt;kt++)tt[kt]=36064+kt;tt.length=ft.length,ht=!0}}else tt[0]!==36064&&(tt[0]=36064,ht=!0);else tt[0]!==1029&&(tt[0]=1029,ht=!0);ht&&(e.isWebGL2?r.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function yt(P){return d!==P?(r.useProgram(P),d=P,!0):!1}const Mt={[xi]:32774,[Ru]:32778,[Iu]:32779};if(n)Mt[ia]=32775,Mt[ra]=32776;else{const P=t.get("EXT_blend_minmax");P!==null&&(Mt[ia]=P.MIN_EXT,Mt[ra]=P.MAX_EXT)}const Lt={[Nu]:0,[Ou]:1,[Fu]:768,[Jl]:770,[Gu]:776,[ku]:774,[zu]:772,[Uu]:769,[Ql]:771,[Vu]:775,[Bu]:773};function qt(P,W,tt,ht,ft,kt,Qt,ae){if(P===yn){y===!0&&(lt(3042),y=!1);return}if(y===!1&&(ct(3042),y=!0),P!==Pu){if(P!==S||ae!==w){if((v!==xi||C!==xi)&&(r.blendEquation(32774),v=xi,C=xi),ae)switch(P){case wi:r.blendFuncSeparate(1,771,1,771);break;case ta:r.blendFunc(1,1);break;case ea:r.blendFuncSeparate(0,769,0,1);break;case na:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case wi:r.blendFuncSeparate(770,771,1,771);break;case ta:r.blendFunc(770,1);break;case ea:r.blendFuncSeparate(0,769,0,1);break;case na:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}_=null,M=null,D=null,g=null,S=P,w=ae}return}ft=ft||W,kt=kt||tt,Qt=Qt||ht,(W!==v||ft!==C)&&(r.blendEquationSeparate(Mt[W],Mt[ft]),v=W,C=ft),(tt!==_||ht!==M||kt!==D||Qt!==g)&&(r.blendFuncSeparate(Lt[tt],Lt[ht],Lt[kt],Lt[Qt]),_=tt,M=ht,D=kt,g=Qt),S=P,w=!1}function ne(P,W){P.side===xn?lt(2884):ct(2884);let tt=P.side===Se;W&&(tt=!tt),Gt(tt),P.blending===wi&&P.transparent===!1?qt(yn):qt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ht=P.stencilWrite;c.setTest(ht),ht&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ct(32926):lt(32926)}function Gt(P){L!==P&&(P?r.frontFace(2304):r.frontFace(2305),L=P)}function Ht(P){P!==Cu?(ct(2884),P!==V&&(P===Qo?r.cullFace(1029):P===Lu?r.cullFace(1028):r.cullFace(1032))):lt(2884),V=P}function zt(P){P!==X&&(j&&r.lineWidth(P),X=P)}function Ut(P,W,tt){P?(ct(32823),(F!==W||R!==tt)&&(r.polygonOffset(W,tt),F=W,R=tt)):lt(32823)}function Wt(P){P?ct(3089):lt(3089)}function Xt(P){P===void 0&&(P=33984+G-1),Q!==P&&(r.activeTexture(P),Q=P)}function T(P,W,tt){tt===void 0&&(Q===null?tt=33984+G-1:tt=Q);let ht=K[tt];ht===void 0&&(ht={type:void 0,texture:void 0},K[tt]=ht),(ht.type!==P||ht.texture!==W)&&(Q!==tt&&(r.activeTexture(tt),Q=tt),r.bindTexture(P,W||at[P]),ht.type=P,ht.texture=W)}function x(){const P=K[Q];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function k(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function A(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function N(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function mt(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(P){J.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),J.copy(P))}function _t(P){it.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),it.copy(P))}function Dt(P,W){let tt=p.get(W);tt===void 0&&(tt=new WeakMap,p.set(W,tt));let ht=tt.get(P);ht===void 0&&(ht=r.getUniformBlockIndex(W,P.name),tt.set(P,ht))}function Nt(P,W){const ht=p.get(W).get(P);u.get(W)!==ht&&(r.uniformBlockBinding(W,ht,P.__bindingPointIndex),u.set(W,ht))}function Ft(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},Q=null,K={},m={},b=new WeakMap,f=[],d=null,y=!1,S=null,v=null,_=null,M=null,C=null,D=null,g=null,w=!1,L=null,V=null,X=null,F=null,R=null,J.set(0,0,r.canvas.width,r.canvas.height),it.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ct,disable:lt,bindFramebuffer:dt,drawBuffers:xt,useProgram:yt,setBlending:qt,setMaterial:ne,setFlipSided:Gt,setCullFace:Ht,setLineWidth:zt,setPolygonOffset:Ut,setScissorTest:Wt,activeTexture:Xt,bindTexture:T,unbindTexture:x,compressedTexImage2D:k,compressedTexImage3D:et,texImage2D:st,texImage3D:mt,updateUBOMapping:Dt,uniformBlockBinding:Nt,texStorage2D:N,texStorage3D:ut,texSubImage2D:nt,texSubImage3D:ot,compressedTexSubImage2D:pt,compressedTexSubImage3D:A,scissor:vt,viewport:_t,reset:Ft}}function Eg(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,p=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),b=new WeakMap;let f;const d=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,x){return y?new OffscreenCanvas(T,x):Yr("canvas")}function v(T,x,k,et){let nt=1;if((T.width>et||T.height>et)&&(nt=et/Math.max(T.width,T.height)),nt<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ot=x?wh:Math.floor,pt=ot(nt*T.width),A=ot(nt*T.height);f===void 0&&(f=S(pt,A));const N=k?S(pt,A):f;return N.width=pt,N.height=A,N.getContext("2d").drawImage(T,0,0,pt,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+pt+"x"+A+")."),N}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function _(T){return Ra(T.width)&&Ra(T.height)}function M(T){return o?!1:T.wrapS!==Ue||T.wrapT!==Ue||T.minFilter!==he&&T.minFilter!==Ce}function C(T,x){return T.generateMipmaps&&x&&T.minFilter!==he&&T.minFilter!==Ce}function D(T){r.generateMipmap(T)}function g(T,x,k,et,nt=!1){if(o===!1)return x;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ot=x;return x===6403&&(k===5126&&(ot=33326),k===5131&&(ot=33325),k===5121&&(ot=33321)),x===33319&&(k===5126&&(ot=33328),k===5131&&(ot=33327),k===5121&&(ot=33323)),x===6408&&(k===5126&&(ot=34836),k===5131&&(ot=34842),k===5121&&(ot=et===Vt&&nt===!1?35907:32856),k===32819&&(ot=32854),k===32820&&(ot=32855)),(ot===33325||ot===33326||ot===33327||ot===33328||ot===34842||ot===34836)&&t.get("EXT_color_buffer_float"),ot}function w(T,x,k){return C(T,k)===!0||T.isFramebufferTexture&&T.minFilter!==he&&T.minFilter!==Ce?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function L(T){return T===he||T===sa||T===_s?9728:9729}function V(T){const x=T.target;x.removeEventListener("dispose",V),F(x),x.isVideoTexture&&b.delete(x)}function X(T){const x=T.target;x.removeEventListener("dispose",X),G(x)}function F(T){const x=n.get(T);if(x.__webglInit===void 0)return;const k=T.source,et=d.get(k);if(et){const nt=et[x.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&R(T),Object.keys(et).length===0&&d.delete(k)}n.remove(T)}function R(T){const x=n.get(T);r.deleteTexture(x.__webglTexture);const k=T.source,et=d.get(k);delete et[x.__cacheKey],a.memory.textures--}function G(T){const x=T.texture,k=n.get(T),et=n.get(x);if(et.__webglTexture!==void 0&&(r.deleteTexture(et.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)r.deleteFramebuffer(k.__webglFramebuffer[nt]),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[nt]);else{if(r.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let nt=0;nt<k.__webglColorRenderbuffer.length;nt++)k.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[nt]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let nt=0,ot=x.length;nt<ot;nt++){const pt=n.get(x[nt]);pt.__webglTexture&&(r.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(x[nt])}n.remove(x),n.remove(T)}let j=0;function Z(){j=0}function $(){const T=j;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),j+=1,T}function Q(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.encoding),x.join()}function K(T,x){const k=n.get(T);if(T.isVideoTexture&&Wt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const et=T.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(k,T,x);return}}e.bindTexture(3553,k.__webglTexture,33984+x)}function gt(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){lt(k,T,x);return}e.bindTexture(35866,k.__webglTexture,33984+x)}function B(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){lt(k,T,x);return}e.bindTexture(32879,k.__webglTexture,33984+x)}function J(T,x){const k=n.get(T);if(T.version>0&&k.__version!==T.version){dt(k,T,x);return}e.bindTexture(34067,k.__webglTexture,33984+x)}const it={[fo]:10497,[Ue]:33071,[po]:33648},I={[he]:9728,[sa]:9984,[_s]:9986,[Ce]:9729,[ih]:9985,[rr]:9987};function at(T,x,k){if(k?(r.texParameteri(T,10242,it[x.wrapS]),r.texParameteri(T,10243,it[x.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,it[x.wrapR]),r.texParameteri(T,10240,I[x.magFilter]),r.texParameteri(T,10241,I[x.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(x.wrapS!==Ue||x.wrapT!==Ue)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,L(x.magFilter)),r.texParameteri(T,10241,L(x.minFilter)),x.minFilter!==he&&x.minFilter!==Ce&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===he||x.minFilter!==_s&&x.minFilter!==rr||x.type===kn&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===sr&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(T,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function ct(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",V));const et=x.source;let nt=d.get(et);nt===void 0&&(nt={},d.set(et,nt));const ot=Q(x);if(ot!==T.__cacheKey){nt[ot]===void 0&&(nt[ot]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),nt[ot].usedTimes++;const pt=nt[T.__cacheKey];pt!==void 0&&(nt[T.__cacheKey].usedTimes--,pt.usedTimes===0&&R(x)),T.__cacheKey=ot,T.__webglTexture=nt[ot].texture}return k}function lt(T,x,k){let et=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(et=35866),x.isData3DTexture&&(et=32879);const nt=ct(T,x),ot=x.source;e.bindTexture(et,T.__webglTexture,33984+k);const pt=n.get(ot);if(ot.version!==pt.__version||nt===!0){e.activeTexture(33984+k),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const A=M(x)&&_(x.image)===!1;let N=v(x.image,A,!1,u);N=Xt(x,N);const ut=_(N)||o,st=s.convert(x.format,x.encoding);let mt=s.convert(x.type),vt=g(x.internalFormat,st,mt,x.encoding,x.isVideoTexture);at(et,x,ut);let _t;const Dt=x.mipmaps,Nt=o&&x.isVideoTexture!==!0,Ft=pt.__version===void 0||nt===!0,P=w(x,N,ut);if(x.isDepthTexture)vt=6402,o?x.type===kn?vt=36012:x.type===Bn?vt=33190:x.type===Ti?vt=35056:vt=33189:x.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Hn&&vt===6402&&x.type!==nc&&x.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Bn,mt=s.convert(x.type)),x.format===Di&&vt===6402&&(vt=34041,x.type!==Ti&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ti,mt=s.convert(x.type))),Ft&&(Nt?e.texStorage2D(3553,1,vt,N.width,N.height):e.texImage2D(3553,0,vt,N.width,N.height,0,st,mt,null));else if(x.isDataTexture)if(Dt.length>0&&ut){Nt&&Ft&&e.texStorage2D(3553,P,vt,Dt[0].width,Dt[0].height);for(let W=0,tt=Dt.length;W<tt;W++)_t=Dt[W],Nt?e.texSubImage2D(3553,W,0,0,_t.width,_t.height,st,mt,_t.data):e.texImage2D(3553,W,vt,_t.width,_t.height,0,st,mt,_t.data);x.generateMipmaps=!1}else Nt?(Ft&&e.texStorage2D(3553,P,vt,N.width,N.height),e.texSubImage2D(3553,0,0,0,N.width,N.height,st,mt,N.data)):e.texImage2D(3553,0,vt,N.width,N.height,0,st,mt,N.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&Ft&&e.texStorage3D(35866,P,vt,Dt[0].width,Dt[0].height,N.depth);for(let W=0,tt=Dt.length;W<tt;W++)_t=Dt[W],x.format!==ze?st!==null?Nt?e.compressedTexSubImage3D(35866,W,0,0,0,_t.width,_t.height,N.depth,st,_t.data,0,0):e.compressedTexImage3D(35866,W,vt,_t.width,_t.height,N.depth,0,_t.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage3D(35866,W,0,0,0,_t.width,_t.height,N.depth,st,mt,_t.data):e.texImage3D(35866,W,vt,_t.width,_t.height,N.depth,0,st,mt,_t.data)}else{Nt&&Ft&&e.texStorage2D(3553,P,vt,Dt[0].width,Dt[0].height);for(let W=0,tt=Dt.length;W<tt;W++)_t=Dt[W],x.format!==ze?st!==null?Nt?e.compressedTexSubImage2D(3553,W,0,0,_t.width,_t.height,st,_t.data):e.compressedTexImage2D(3553,W,vt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?e.texSubImage2D(3553,W,0,0,_t.width,_t.height,st,mt,_t.data):e.texImage2D(3553,W,vt,_t.width,_t.height,0,st,mt,_t.data)}else if(x.isDataArrayTexture)Nt?(Ft&&e.texStorage3D(35866,P,vt,N.width,N.height,N.depth),e.texSubImage3D(35866,0,0,0,0,N.width,N.height,N.depth,st,mt,N.data)):e.texImage3D(35866,0,vt,N.width,N.height,N.depth,0,st,mt,N.data);else if(x.isData3DTexture)Nt?(Ft&&e.texStorage3D(32879,P,vt,N.width,N.height,N.depth),e.texSubImage3D(32879,0,0,0,0,N.width,N.height,N.depth,st,mt,N.data)):e.texImage3D(32879,0,vt,N.width,N.height,N.depth,0,st,mt,N.data);else if(x.isFramebufferTexture){if(Ft)if(Nt)e.texStorage2D(3553,P,vt,N.width,N.height);else{let W=N.width,tt=N.height;for(let ht=0;ht<P;ht++)e.texImage2D(3553,ht,vt,W,tt,0,st,mt,null),W>>=1,tt>>=1}}else if(Dt.length>0&&ut){Nt&&Ft&&e.texStorage2D(3553,P,vt,Dt[0].width,Dt[0].height);for(let W=0,tt=Dt.length;W<tt;W++)_t=Dt[W],Nt?e.texSubImage2D(3553,W,0,0,st,mt,_t):e.texImage2D(3553,W,vt,st,mt,_t);x.generateMipmaps=!1}else Nt?(Ft&&e.texStorage2D(3553,P,vt,N.width,N.height),e.texSubImage2D(3553,0,0,0,st,mt,N)):e.texImage2D(3553,0,vt,st,mt,N);C(x,ut)&&D(et),pt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function dt(T,x,k){if(x.image.length!==6)return;const et=ct(T,x),nt=x.source;e.bindTexture(34067,T.__webglTexture,33984+k);const ot=n.get(nt);if(nt.version!==ot.__version||et===!0){e.activeTexture(33984+k),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const pt=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,N=[];for(let W=0;W<6;W++)!pt&&!A?N[W]=v(x.image[W],!1,!0,c):N[W]=A?x.image[W].image:x.image[W],N[W]=Xt(x,N[W]);const ut=N[0],st=_(ut)||o,mt=s.convert(x.format,x.encoding),vt=s.convert(x.type),_t=g(x.internalFormat,mt,vt,x.encoding),Dt=o&&x.isVideoTexture!==!0,Nt=ot.__version===void 0||et===!0;let Ft=w(x,ut,st);at(34067,x,st);let P;if(pt){Dt&&Nt&&e.texStorage2D(34067,Ft,_t,ut.width,ut.height);for(let W=0;W<6;W++){P=N[W].mipmaps;for(let tt=0;tt<P.length;tt++){const ht=P[tt];x.format!==ze?mt!==null?Dt?e.compressedTexSubImage2D(34069+W,tt,0,0,ht.width,ht.height,mt,ht.data):e.compressedTexImage2D(34069+W,tt,_t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+W,tt,0,0,ht.width,ht.height,mt,vt,ht.data):e.texImage2D(34069+W,tt,_t,ht.width,ht.height,0,mt,vt,ht.data)}}}else{P=x.mipmaps,Dt&&Nt&&(P.length>0&&Ft++,e.texStorage2D(34067,Ft,_t,N[0].width,N[0].height));for(let W=0;W<6;W++)if(A){Dt?e.texSubImage2D(34069+W,0,0,0,N[W].width,N[W].height,mt,vt,N[W].data):e.texImage2D(34069+W,0,_t,N[W].width,N[W].height,0,mt,vt,N[W].data);for(let tt=0;tt<P.length;tt++){const ft=P[tt].image[W].image;Dt?e.texSubImage2D(34069+W,tt+1,0,0,ft.width,ft.height,mt,vt,ft.data):e.texImage2D(34069+W,tt+1,_t,ft.width,ft.height,0,mt,vt,ft.data)}}else{Dt?e.texSubImage2D(34069+W,0,0,0,mt,vt,N[W]):e.texImage2D(34069+W,0,_t,mt,vt,N[W]);for(let tt=0;tt<P.length;tt++){const ht=P[tt];Dt?e.texSubImage2D(34069+W,tt+1,0,0,mt,vt,ht.image[W]):e.texImage2D(34069+W,tt+1,_t,mt,vt,ht.image[W])}}}C(x,st)&&D(34067),ot.__version=nt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function xt(T,x,k,et,nt){const ot=s.convert(k.format,k.encoding),pt=s.convert(k.type),A=g(k.internalFormat,ot,pt,k.encoding);n.get(x).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,A,x.width,x.height,x.depth,0,ot,pt,null):e.texImage2D(nt,0,A,x.width,x.height,0,ot,pt,null)),e.bindFramebuffer(36160,T),Ut(x)?h.framebufferTexture2DMultisampleEXT(36160,et,nt,n.get(k).__webglTexture,0,zt(x)):(nt===3553||nt>=34069&&nt<=34074)&&r.framebufferTexture2D(36160,et,nt,n.get(k).__webglTexture,0),e.bindFramebuffer(36160,null)}function yt(T,x,k){if(r.bindRenderbuffer(36161,T),x.depthBuffer&&!x.stencilBuffer){let et=33189;if(k||Ut(x)){const nt=x.depthTexture;nt&&nt.isDepthTexture&&(nt.type===kn?et=36012:nt.type===Bn&&(et=33190));const ot=zt(x);Ut(x)?h.renderbufferStorageMultisampleEXT(36161,ot,et,x.width,x.height):r.renderbufferStorageMultisample(36161,ot,et,x.width,x.height)}else r.renderbufferStorage(36161,et,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(x.depthBuffer&&x.stencilBuffer){const et=zt(x);k&&Ut(x)===!1?r.renderbufferStorageMultisample(36161,et,35056,x.width,x.height):Ut(x)?h.renderbufferStorageMultisampleEXT(36161,et,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const et=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let nt=0;nt<et.length;nt++){const ot=et[nt],pt=s.convert(ot.format,ot.encoding),A=s.convert(ot.type),N=g(ot.internalFormat,pt,A,ot.encoding),ut=zt(x);k&&Ut(x)===!1?r.renderbufferStorageMultisample(36161,ut,N,x.width,x.height):Ut(x)?h.renderbufferStorageMultisampleEXT(36161,ut,N,x.width,x.height):r.renderbufferStorage(36161,N,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function Mt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const et=n.get(x.depthTexture).__webglTexture,nt=zt(x);if(x.depthTexture.format===Hn)Ut(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,nt):r.framebufferTexture2D(36160,36096,3553,et,0);else if(x.depthTexture.format===Di)Ut(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,nt):r.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function Lt(T){const x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Mt(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,x.__webglFramebuffer[et]),x.__webglDepthbuffer[et]=r.createRenderbuffer(),yt(x.__webglDepthbuffer[et],T,!1)}else e.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),yt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function qt(T,x,k){const et=n.get(T);x!==void 0&&xt(et.__webglFramebuffer,T,T.texture,36064,3553),k!==void 0&&Lt(T)}function ne(T){const x=T.texture,k=n.get(T),et=n.get(x);T.addEventListener("dispose",X),T.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=x.version,a.memory.textures++);const nt=T.isWebGLCubeRenderTarget===!0,ot=T.isWebGLMultipleRenderTargets===!0,pt=_(T)||o;if(nt){k.__webglFramebuffer=[];for(let A=0;A<6;A++)k.__webglFramebuffer[A]=r.createFramebuffer()}else{if(k.__webglFramebuffer=r.createFramebuffer(),ot)if(i.drawBuffers){const A=T.texture;for(let N=0,ut=A.length;N<ut;N++){const st=n.get(A[N]);st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Ut(T)===!1){const A=ot?x:[x];k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let N=0;N<A.length;N++){const ut=A[N];k.__webglColorRenderbuffer[N]=r.createRenderbuffer(),r.bindRenderbuffer(36161,k.__webglColorRenderbuffer[N]);const st=s.convert(ut.format,ut.encoding),mt=s.convert(ut.type),vt=g(ut.internalFormat,st,mt,ut.encoding,T.isXRRenderTarget===!0),_t=zt(T);r.renderbufferStorageMultisample(36161,_t,vt,T.width,T.height),r.framebufferRenderbuffer(36160,36064+N,36161,k.__webglColorRenderbuffer[N])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),yt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,et.__webglTexture),at(34067,x,pt);for(let A=0;A<6;A++)xt(k.__webglFramebuffer[A],T,x,36064,34069+A);C(x,pt)&&D(34067),e.unbindTexture()}else if(ot){const A=T.texture;for(let N=0,ut=A.length;N<ut;N++){const st=A[N],mt=n.get(st);e.bindTexture(3553,mt.__webglTexture),at(3553,st,pt),xt(k.__webglFramebuffer,T,st,36064+N,3553),C(st,pt)&&D(3553)}e.unbindTexture()}else{let A=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?A=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(A,et.__webglTexture),at(A,x,pt),xt(k.__webglFramebuffer,T,x,36064,A),C(x,pt)&&D(A),e.unbindTexture()}T.depthBuffer&&Lt(T)}function Gt(T){const x=_(T)||o,k=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let et=0,nt=k.length;et<nt;et++){const ot=k[et];if(C(ot,x)){const pt=T.isWebGLCubeRenderTarget?34067:3553,A=n.get(ot).__webglTexture;e.bindTexture(pt,A),D(pt),e.unbindTexture()}}}function Ht(T){if(o&&T.samples>0&&Ut(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],k=T.width,et=T.height;let nt=16384;const ot=[],pt=T.stencilBuffer?33306:36096,A=n.get(T),N=T.isWebGLMultipleRenderTargets===!0;if(N)for(let ut=0;ut<x.length;ut++)e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ut,36161,null),e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ut,3553,null,0);e.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,A.__webglFramebuffer);for(let ut=0;ut<x.length;ut++){ot.push(36064+ut),T.depthBuffer&&ot.push(pt);const st=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(st===!1&&(T.depthBuffer&&(nt|=256),T.stencilBuffer&&(nt|=1024)),N&&r.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ut]),st===!0&&(r.invalidateFramebuffer(36008,[pt]),r.invalidateFramebuffer(36009,[pt])),N){const mt=n.get(x[ut]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,mt,0)}r.blitFramebuffer(0,0,k,et,0,0,k,et,nt,9728),m&&r.invalidateFramebuffer(36008,ot)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),N)for(let ut=0;ut<x.length;ut++){e.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ut,36161,A.__webglColorRenderbuffer[ut]);const st=n.get(x[ut]).__webglTexture;e.bindFramebuffer(36160,A.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ut,3553,st,0)}e.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function zt(T){return Math.min(p,T.samples)}function Ut(T){const x=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Wt(T){const x=a.render.frame;b.get(T)!==x&&(b.set(T,x),T.update())}function Xt(T,x){const k=T.encoding,et=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===mo||k!==qn&&(k===Vt?o===!1?t.has("EXT_sRGB")===!0&&et===ze?(T.format=mo,T.minFilter=Ce,T.generateMipmaps=!1):x=sc.sRGBToLinear(x):(et!==ze||nt!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),x}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=K,this.setTexture2DArray=gt,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=qt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Ut}function wg(r,t,e){const n=e.isWebGL2;function i(s,a=null){let o;if(s===$n)return 5121;if(s===ah)return 32819;if(s===lh)return 32820;if(s===rh)return 5120;if(s===sh)return 5122;if(s===nc)return 5123;if(s===oh)return 5124;if(s===Bn)return 5125;if(s===kn)return 5126;if(s===sr)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ch)return 6406;if(s===ze)return 6408;if(s===uh)return 6409;if(s===hh)return 6410;if(s===Hn)return 6402;if(s===Di)return 34041;if(s===mo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===dh)return 6403;if(s===fh)return 36244;if(s===ph)return 33319;if(s===mh)return 33320;if(s===gh)return 36249;if(s===vs||s===xs||s===bs||s===ys)if(a===Vt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oa||s===aa||s===la||s===ca)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===aa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===la)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ca)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_h)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ua||s===ha)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ua)return a===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ha)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===da||s===fa||s===pa||s===ma||s===ga||s===_a||s===va||s===xa||s===ba||s===ya||s===Sa||s===Ma||s===Ea||s===wa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===da)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fa)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pa)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ma)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ga)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===_a)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===va)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xa)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ba)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ya)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sa)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ma)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ea)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wa)return a===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ss)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ss)return a===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===vh||s===Ta||s===Aa||s===Ca)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ss)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ta)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ca)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ti?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Tg extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ur extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ag={type:"move"};class js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const f of t.hand.values()){const d=e.getJointPose(f,n),y=this._getHandJoint(c,f);d!==null&&(y.matrix.fromArray(d.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=d.radius),y.visible=d!==null}const u=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=u.position.distanceTo(p.position),m=.02,b=.005;c.inputState.pinching&&h>m+b?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-b&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ag)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ur;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Cg extends Me{constructor(t,e,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Hn,u!==Hn&&u!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hn&&(n=Bn),n===void 0&&u===Di&&(n=Ti),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:he,this.minFilter=l!==void 0?l:he,this.flipY=!1,this.generateMipmaps=!1}}class Lg extends Qn{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,p=null,h=null,m=null,b=null;const f=e.getContextAttributes();let d=null,y=null;const S=[],v=[],_=new Set,M=new Map,C=new Le;C.layers.enable(1),C.viewport=new ie;const D=new Le;D.layers.enable(2),D.viewport=new ie;const g=[C,D],w=new Tg;w.layers.enable(1),w.layers.enable(2);let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=S[B];return J===void 0&&(J=new js,S[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=S[B];return J===void 0&&(J=new js,S[B]=J),J.getGripSpace()},this.getHand=function(B){let J=S[B];return J===void 0&&(J=new js,S[B]=J),J.getHandSpace()};function X(B){const J=v.indexOf(B.inputSource);if(J===-1)return;const it=S[J];it!==void 0&&it.dispatchEvent({type:B.type,data:B.inputSource})}function F(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",R);for(let B=0;B<S.length;B++){const J=v[B];J!==null&&(v[B]=null,S[B].disconnect(J))}L=null,V=null,t.setRenderTarget(d),m=null,h=null,p=null,i=null,y=null,gt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p},this.getFrame=function(){return b},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",F),i.addEventListener("inputsourceschange",R),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:m}),y=new jn(m.framebufferWidth,m.framebufferHeight,{format:ze,type:$n,encoding:t.outputEncoding,stencilBuffer:f.stencil})}else{let J=null,it=null,I=null;f.depth&&(I=f.stencil?35056:33190,J=f.stencil?Di:Hn,it=f.stencil?Ti:Bn);const at={colorFormat:32856,depthFormat:I,scaleFactor:s};p=new XRWebGLBinding(i,e),h=p.createProjectionLayer(at),i.updateRenderState({layers:[h]}),y=new jn(h.textureWidth,h.textureHeight,{format:ze,type:$n,depthTexture:new Cg(h.textureWidth,h.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const ct=t.properties.get(y);ct.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),gt.setContext(i),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(B){for(let J=0;J<B.removed.length;J++){const it=B.removed[J],I=v.indexOf(it);I>=0&&(v[I]=null,S[I].disconnect(it))}for(let J=0;J<B.added.length;J++){const it=B.added[J];let I=v.indexOf(it);if(I===-1){for(let ct=0;ct<S.length;ct++)if(ct>=v.length){v.push(it),I=ct;break}else if(v[ct]===null){v[ct]=it,I=ct;break}if(I===-1)break}const at=S[I];at&&at.connect(it)}}const G=new U,j=new U;function Z(B,J,it){G.setFromMatrixPosition(J.matrixWorld),j.setFromMatrixPosition(it.matrixWorld);const I=G.distanceTo(j),at=J.projectionMatrix.elements,ct=it.projectionMatrix.elements,lt=at[14]/(at[10]-1),dt=at[14]/(at[10]+1),xt=(at[9]+1)/at[5],yt=(at[9]-1)/at[5],Mt=(at[8]-1)/at[0],Lt=(ct[8]+1)/ct[0],qt=lt*Mt,ne=lt*Lt,Gt=I/(-Mt+Lt),Ht=Gt*-Mt;J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(Ht),B.translateZ(Gt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const zt=lt+Gt,Ut=dt+Gt,Wt=qt-Ht,Xt=ne+(I-Ht),T=xt*dt/Ut*zt,x=yt*dt/Ut*zt;B.projectionMatrix.makePerspective(Wt,Xt,T,x,zt,Ut)}function $(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;w.near=D.near=C.near=B.near,w.far=D.far=C.far=B.far,(L!==w.near||V!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,V=w.far);const J=B.parent,it=w.cameras;$(w,J);for(let at=0;at<it.length;at++)$(it[at],J);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),B.matrix.copy(w.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const I=B.children;for(let at=0,ct=I.length;at<ct;at++)I[at].updateMatrixWorld(!0);it.length===2?Z(w,C,D):w.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.getPlanes=function(){return _};let Q=null;function K(B,J){if(u=J.getViewerPose(c||a),b=J,u!==null){const it=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let I=!1;it.length!==w.cameras.length&&(w.cameras.length=0,I=!0);for(let at=0;at<it.length;at++){const ct=it[at];let lt=null;if(m!==null)lt=m.getViewport(ct);else{const xt=p.getViewSubImage(h,ct);lt=xt.viewport,at===0&&(t.setRenderTargetTextures(y,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(y))}let dt=g[at];dt===void 0&&(dt=new Le,dt.layers.enable(at),dt.viewport=new ie,g[at]=dt),dt.matrix.fromArray(ct.transform.matrix),dt.projectionMatrix.fromArray(ct.projectionMatrix),dt.viewport.set(lt.x,lt.y,lt.width,lt.height),at===0&&w.matrix.copy(dt.matrix),I===!0&&w.cameras.push(dt)}}for(let it=0;it<S.length;it++){const I=v[it],at=S[it];I!==null&&at!==void 0&&at.update(I,J,c||a)}if(Q&&Q(B,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let it=null;for(const I of _)J.detectedPlanes.has(I)||(it===null&&(it=[]),it.push(I));if(it!==null)for(const I of it)_.delete(I),M.delete(I),n.dispatchEvent({type:"planeremoved",data:I});for(const I of J.detectedPlanes)if(!_.has(I))_.add(I),M.set(I,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:I});else{const at=M.get(I);I.lastChangedTime>at&&(M.set(I,I.lastChangedTime),n.dispatchEvent({type:"planechanged",data:I}))}}b=null}const gt=new gc;gt.setAnimationLoop(K),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}function Dg(r,t){function e(f,d){d.color.getRGB(f.fogColor.value,dc(r)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function n(f,d,y,S,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?i(f,d):d.isMeshToonMaterial?(i(f,d),u(f,d)):d.isMeshPhongMaterial?(i(f,d),c(f,d)):d.isMeshStandardMaterial?(i(f,d),p(f,d),d.isMeshPhysicalMaterial&&h(f,d,v)):d.isMeshMatcapMaterial?(i(f,d),m(f,d)):d.isMeshDepthMaterial?i(f,d):d.isMeshDistanceMaterial?(i(f,d),b(f,d)):d.isMeshNormalMaterial?i(f,d):d.isLineBasicMaterial?(s(f,d),d.isLineDashedMaterial&&a(f,d)):d.isPointsMaterial?o(f,d,y,S):d.isSpriteMaterial?l(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function i(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.bumpMap&&(f.bumpMap.value=d.bumpMap,f.bumpScale.value=d.bumpScale,d.side===Se&&(f.bumpScale.value*=-1)),d.displacementMap&&(f.displacementMap.value=d.displacementMap,f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap),d.normalMap&&(f.normalMap.value=d.normalMap,f.normalScale.value.copy(d.normalScale),d.side===Se&&f.normalScale.value.negate()),d.specularMap&&(f.specularMap.value=d.specularMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(f.envMap.value=y,f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const _=r.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*_}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity);let S;d.map?S=d.map:d.specularMap?S=d.specularMap:d.displacementMap?S=d.displacementMap:d.normalMap?S=d.normalMap:d.bumpMap?S=d.bumpMap:d.roughnessMap?S=d.roughnessMap:d.metalnessMap?S=d.metalnessMap:d.alphaMap?S=d.alphaMap:d.emissiveMap?S=d.emissiveMap:d.clearcoatMap?S=d.clearcoatMap:d.clearcoatNormalMap?S=d.clearcoatNormalMap:d.clearcoatRoughnessMap?S=d.clearcoatRoughnessMap:d.iridescenceMap?S=d.iridescenceMap:d.iridescenceThicknessMap?S=d.iridescenceThicknessMap:d.specularIntensityMap?S=d.specularIntensityMap:d.specularColorMap?S=d.specularColorMap:d.transmissionMap?S=d.transmissionMap:d.thicknessMap?S=d.thicknessMap:d.sheenColorMap?S=d.sheenColorMap:d.sheenRoughnessMap&&(S=d.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),f.uvTransform.value.copy(S.matrix));let v;d.aoMap?v=d.aoMap:d.lightMap&&(v=d.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uv2Transform.value.copy(v.matrix))}function s(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity}function a(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function o(f,d,y,S){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*y,f.scale.value=S*.5,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let v;d.map?v=d.map:d.alphaMap&&(v=d.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function l(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let y;d.map?y=d.map:d.alphaMap&&(y=d.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),f.uvTransform.value.copy(y.matrix))}function c(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function u(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.roughness.value=d.roughness,f.metalness.value=d.metalness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap),t.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function h(f,d,y){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),f.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===Se&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap)}function m(f,d){d.matcap&&(f.matcap.value=d.matcap)}function b(f,d){f.referencePosition.value.copy(d.referencePosition),f.nearDistance.value=d.nearDistance,f.farDistance.value=d.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Pg(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(35375):0;function l(S,v){const _=v.program;n.uniformBlockBinding(S,_)}function c(S,v){let _=i[S.id];_===void 0&&(b(S),_=u(S),i[S.id]=_,S.addEventListener("dispose",d));const M=v.program;n.updateUBOMapping(S,M);const C=t.render.frame;s[S.id]!==C&&(h(S),s[S.id]=C)}function u(S){const v=p();S.__bindingPointIndex=v;const _=r.createBuffer(),M=S.__size,C=S.usage;return r.bindBuffer(35345,_),r.bufferData(35345,M,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,v,_),_}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=i[S.id],_=S.uniforms,M=S.__cache;r.bindBuffer(35345,v);for(let C=0,D=_.length;C<D;C++){const g=_[C];if(m(g,C,M)===!0){const w=g.__offset,L=Array.isArray(g.value)?g.value:[g.value];let V=0;for(let X=0;X<L.length;X++){const F=L[X],R=f(F);typeof F=="number"?(g.__data[0]=F,r.bufferSubData(35345,w+V,g.__data)):F.isMatrix3?(g.__data[0]=F.elements[0],g.__data[1]=F.elements[1],g.__data[2]=F.elements[2],g.__data[3]=F.elements[0],g.__data[4]=F.elements[3],g.__data[5]=F.elements[4],g.__data[6]=F.elements[5],g.__data[7]=F.elements[0],g.__data[8]=F.elements[6],g.__data[9]=F.elements[7],g.__data[10]=F.elements[8],g.__data[11]=F.elements[0]):(F.toArray(g.__data,V),V+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,w,g.__data)}}r.bindBuffer(35345,null)}function m(S,v,_){const M=S.value;if(_[v]===void 0){if(typeof M=="number")_[v]=M;else{const C=Array.isArray(M)?M:[M],D=[];for(let g=0;g<C.length;g++)D.push(C[g].clone());_[v]=D}return!0}else if(typeof M=="number"){if(_[v]!==M)return _[v]=M,!0}else{const C=Array.isArray(_[v])?_[v]:[_[v]],D=Array.isArray(M)?M:[M];for(let g=0;g<C.length;g++){const w=C[g];if(w.equals(D[g])===!1)return w.copy(D[g]),!0}}return!1}function b(S){const v=S.uniforms;let _=0;const M=16;let C=0;for(let D=0,g=v.length;D<g;D++){const w=v[D],L={boundary:0,storage:0},V=Array.isArray(w.value)?w.value:[w.value];for(let X=0,F=V.length;X<F;X++){const R=V[X],G=f(R);L.boundary+=G.boundary,L.storage+=G.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=_,D>0){C=_%M;const X=M-C;C!==0&&X-L.boundary<0&&(_+=M-C,w.__offset=_)}_+=L.storage}return C=_%M,C>0&&(_+=M-C),S.__size=_,S.__cache={},this}function f(S){const v={boundary:0,storage:0};return typeof S=="number"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function d(S){const v=S.target;v.removeEventListener("dispose",d);const _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function y(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:y}}function Rg(){const r=Yr("canvas");return r.style.display="block",r}function Do(r={}){this.isWebGLRenderer=!0;const t=r.canvas!==void 0?r.canvas:Rg(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let p=null,h=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.useLegacyLights=!0,this.toneMapping=ln,this.toneMappingExposure=1;const f=this;let d=!1,y=0,S=0,v=null,_=-1,M=null;const C=new ie,D=new ie;let g=null,w=t.width,L=t.height,V=1,X=null,F=null;const R=new ie(0,0,w,L),G=new ie(0,0,w,L);let j=!1;const Z=new mc;let $=!1,Q=!1,K=null;const gt=new re,B=new U,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return v===null?V:1}let I=e;function at(E,z){for(let H=0;H<E.length;H++){const O=E[H],q=t.getContext(O,z);if(q!==null)return q}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",_t,!1),I===null){const z=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&z.shift(),I=at(z,E),I===null)throw at(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ct,lt,dt,xt,yt,Mt,Lt,qt,ne,Gt,Ht,zt,Ut,Wt,Xt,T,x,k,et,nt,ot,pt,A,N;function ut(){ct=new Hp(I),lt=new Fp(I,ct,r),ct.init(lt),pt=new wg(I,ct,lt),dt=new Mg(I,ct,lt),xt=new qp,yt=new cg,Mt=new Eg(I,ct,dt,yt,lt,pt,xt),Lt=new zp(f),qt=new Gp(f),ne=new Qh(I,lt),A=new Np(I,ct,ne,lt),Gt=new Wp(I,ne,xt,A),Ht=new Kp(I,Gt,ne,xt),et=new Yp(I,lt,Mt),T=new Up(yt),zt=new lg(f,Lt,qt,ct,lt,A,T),Ut=new Dg(f,yt),Wt=new hg,Xt=new _g(ct,lt),k=new Ip(f,Lt,qt,dt,Ht,u,a),x=new Sg(f,Ht,lt),N=new Pg(I,xt,lt,dt),nt=new Op(I,ct,xt,lt),ot=new $p(I,ct,xt,lt),xt.programs=zt.programs,f.capabilities=lt,f.extensions=ct,f.properties=yt,f.renderLists=Wt,f.shadowMap=x,f.state=dt,f.info=xt}ut();const st=new Lg(f,I);this.xr=st,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(w,L,!1))},this.getSize=function(E){return E.set(w,L)},this.setSize=function(E,z,H=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,L=z,t.width=Math.floor(E*V),t.height=Math.floor(z*V),H===!0&&(t.style.width=E+"px",t.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(w*V,L*V).floor()},this.setDrawingBufferSize=function(E,z,H){w=E,L=z,V=H,t.width=Math.floor(E*H),t.height=Math.floor(z*H),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(R)},this.setViewport=function(E,z,H,O){E.isVector4?R.set(E.x,E.y,E.z,E.w):R.set(E,z,H,O),dt.viewport(C.copy(R).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,z,H,O){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,z,H,O),dt.scissor(D.copy(G).multiplyScalar(V).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){dt.setScissorTest(j=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){F=E},this.getClearColor=function(E){return E.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(E=!0,z=!0,H=!0){let O=0;E&&(O|=16384),z&&(O|=256),H&&(O|=1024),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",_t,!1),Wt.dispose(),Xt.dispose(),yt.dispose(),Lt.dispose(),qt.dispose(),Ht.dispose(),A.dispose(),N.dispose(),zt.dispose(),st.dispose(),st.removeEventListener("sessionstart",tt),st.removeEventListener("sessionend",ht),K&&(K.dispose(),K=null),ft.stop()};function mt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const E=xt.autoReset,z=x.enabled,H=x.autoUpdate,O=x.needsUpdate,q=x.type;ut(),xt.autoReset=E,x.enabled=z,x.autoUpdate=H,x.needsUpdate=O,x.type=q}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const z=E.target;z.removeEventListener("dispose",Dt),Nt(z)}function Nt(E){Ft(E),yt.remove(E)}function Ft(E){const z=yt.get(E).programs;z!==void 0&&(z.forEach(function(H){zt.releaseProgram(H)}),E.isShaderMaterial&&zt.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,H,O,q,bt){z===null&&(z=J);const St=q.isMesh&&q.matrixWorld.determinant()<0,Tt=Eu(E,z,H,O,q);dt.setMaterial(O,St);let Ct=H.index,Ot=1;O.wireframe===!0&&(Ct=Gt.getWireframeAttribute(H),Ot=2);const Pt=H.drawRange,Rt=H.attributes.position;let jt=Pt.start*Ot,_e=(Pt.start+Pt.count)*Ot;bt!==null&&(jt=Math.max(jt,bt.start*Ot),_e=Math.min(_e,(bt.start+bt.count)*Ot)),Ct!==null?(jt=Math.max(jt,0),_e=Math.min(_e,Ct.count)):Rt!=null&&(jt=Math.max(jt,0),_e=Math.min(_e,Rt.count));const Je=_e-jt;if(Je<0||Je===1/0)return;A.setup(q,O,Tt,H,Ct);let Dn,Yt=nt;if(Ct!==null&&(Dn=ne.get(Ct),Yt=ot,Yt.setIndex(Dn)),q.isMesh)O.wireframe===!0?(dt.setLineWidth(O.wireframeLinewidth*it()),Yt.setMode(1)):Yt.setMode(4);else if(q.isLine){let It=O.linewidth;It===void 0&&(It=1),dt.setLineWidth(It*it()),q.isLineSegments?Yt.setMode(1):q.isLineLoop?Yt.setMode(2):Yt.setMode(3)}else q.isPoints?Yt.setMode(0):q.isSprite&&Yt.setMode(4);if(q.isInstancedMesh)Yt.renderInstances(jt,Je,q.count);else if(H.isInstancedBufferGeometry){const It=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,fs=Math.min(H.instanceCount,It);Yt.renderInstances(jt,Je,fs)}else Yt.render(jt,Je)},this.compile=function(E,z){function H(O,q,bt){O.transparent===!0&&O.side===xn&&O.forceSinglePass===!1?(O.side=Se,O.needsUpdate=!0,Te(O,q,bt),O.side=Sn,O.needsUpdate=!0,Te(O,q,bt),O.side=xn):Te(O,q,bt)}h=Xt.get(E),h.init(),b.push(h),E.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(h.pushLight(O),O.castShadow&&h.pushShadow(O))}),h.setupLights(f.useLegacyLights),E.traverse(function(O){const q=O.material;if(q)if(Array.isArray(q))for(let bt=0;bt<q.length;bt++){const St=q[bt];H(St,E,O)}else H(q,E,O)}),b.pop(),h=null};let P=null;function W(E){P&&P(E)}function tt(){ft.stop()}function ht(){ft.start()}const ft=new gc;ft.setAnimationLoop(W),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(E){P=E,st.setAnimationLoop(E),E===null?ft.stop():ft.start()},st.addEventListener("sessionstart",tt),st.addEventListener("sessionend",ht),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),E.isScene===!0&&E.onBeforeRender(f,E,z,v),h=Xt.get(E,b.length),h.init(),b.push(h),gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(gt),Q=this.localClippingEnabled,$=T.init(this.clippingPlanes,Q),p=Wt.get(E,m.length),p.init(),m.push(p),kt(E,z,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(X,F),$===!0&&T.beginShadows();const H=h.state.shadowsArray;if(x.render(H,E,z),$===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(p,E),h.setupLights(f.useLegacyLights),z.isArrayCamera){const O=z.cameras;for(let q=0,bt=O.length;q<bt;q++){const St=O[q];Qt(p,E,St,St.viewport)}}else Qt(p,E,z);v!==null&&(Mt.updateMultisampleRenderTarget(v),Mt.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(f,E,z),A.resetDefaultState(),_=-1,M=null,b.pop(),b.length>0?h=b[b.length-1]:h=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function kt(E,z,H,O){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){O&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const St=Ht.update(E),Tt=E.material;Tt.visible&&p.push(E,St,Tt,H,B.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==xt.render.frame&&(E.skeleton.update(),E.skeleton.frame=xt.render.frame),!E.frustumCulled||Z.intersectsObject(E))){O&&B.setFromMatrixPosition(E.matrixWorld).applyMatrix4(gt);const St=Ht.update(E),Tt=E.material;if(Array.isArray(Tt)){const Ct=St.groups;for(let Ot=0,Pt=Ct.length;Ot<Pt;Ot++){const Rt=Ct[Ot],jt=Tt[Rt.materialIndex];jt&&jt.visible&&p.push(E,St,jt,H,B.z,Rt)}}else Tt.visible&&p.push(E,St,Tt,H,B.z,null)}}const bt=E.children;for(let St=0,Tt=bt.length;St<Tt;St++)kt(bt[St],z,H,O)}function Qt(E,z,H,O){const q=E.opaque,bt=E.transmissive,St=E.transparent;h.setupLightsView(H),$===!0&&T.setGlobalState(f.clippingPlanes,H),bt.length>0&&ae(q,z,H),O&&dt.viewport(C.copy(O)),q.length>0&&Ve(q,z,H),bt.length>0&&Ve(bt,z,H),St.length>0&&Ve(St,z,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function ae(E,z,H){const O=lt.isWebGL2;K===null&&(K=new jn(1024,1024,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?sr:$n,minFilter:rr,samples:O&&s===!0?4:0}));const q=f.getRenderTarget();f.setRenderTarget(K),f.clear();const bt=f.toneMapping;f.toneMapping=ln,Ve(E,z,H),f.toneMapping=bt,Mt.updateMultisampleRenderTarget(K),Mt.updateRenderTargetMipmap(K),f.setRenderTarget(q)}function Ve(E,z,H){const O=z.isScene===!0?z.overrideMaterial:null;for(let q=0,bt=E.length;q<bt;q++){const St=E[q],Tt=St.object,Ct=St.geometry,Ot=O===null?St.material:O,Pt=St.group;Tt.layers.test(H.layers)&&$t(Tt,z,H,Ct,Ot,Pt)}}function $t(E,z,H,O,q,bt){E.onBeforeRender(f,z,H,O,q,bt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(f,z,H,O,E,bt),q.transparent===!0&&q.side===xn&&q.forceSinglePass===!1?(q.side=Se,q.needsUpdate=!0,f.renderBufferDirect(H,z,O,q,E,bt),q.side=Sn,q.needsUpdate=!0,f.renderBufferDirect(H,z,O,q,E,bt),q.side=xn):f.renderBufferDirect(H,z,O,q,E,bt),E.onAfterRender(f,z,H,O,q,bt)}function Te(E,z,H){z.isScene!==!0&&(z=J);const O=yt.get(E),q=h.state.lights,bt=h.state.shadowsArray,St=q.state.version,Tt=zt.getParameters(E,q.state,bt,z,H),Ct=zt.getProgramCacheKey(Tt);let Ot=O.programs;O.environment=E.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(E.isMeshStandardMaterial?qt:Lt).get(E.envMap||O.environment),Ot===void 0&&(E.addEventListener("dispose",Dt),Ot=new Map,O.programs=Ot);let Pt=Ot.get(Ct);if(Pt!==void 0){if(O.currentProgram===Pt&&O.lightsStateVersion===St)return Ge(E,Tt),Pt}else Tt.uniforms=zt.getUniforms(E),E.onBuild(H,Tt,f),E.onBeforeCompile(Tt,f),Pt=zt.acquireProgram(Tt,Ct),Ot.set(Ct,Pt),O.uniforms=Tt.uniforms;const Rt=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=T.uniform),Ge(E,Tt),O.needsLights=Tu(E),O.lightsStateVersion=St,O.needsLights&&(Rt.ambientLightColor.value=q.state.ambient,Rt.lightProbe.value=q.state.probe,Rt.directionalLights.value=q.state.directional,Rt.directionalLightShadows.value=q.state.directionalShadow,Rt.spotLights.value=q.state.spot,Rt.spotLightShadows.value=q.state.spotShadow,Rt.rectAreaLights.value=q.state.rectArea,Rt.ltc_1.value=q.state.rectAreaLTC1,Rt.ltc_2.value=q.state.rectAreaLTC2,Rt.pointLights.value=q.state.point,Rt.pointLightShadows.value=q.state.pointShadow,Rt.hemisphereLights.value=q.state.hemi,Rt.directionalShadowMap.value=q.state.directionalShadowMap,Rt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Rt.spotShadowMap.value=q.state.spotShadowMap,Rt.spotLightMatrix.value=q.state.spotLightMatrix,Rt.spotLightMap.value=q.state.spotLightMap,Rt.pointShadowMap.value=q.state.pointShadowMap,Rt.pointShadowMatrix.value=q.state.pointShadowMatrix);const jt=Pt.getUniforms(),_e=$r.seqWithValue(jt.seq,Rt);return O.currentProgram=Pt,O.uniformsList=_e,Pt}function Ge(E,z){const H=yt.get(E);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function Eu(E,z,H,O,q){z.isScene!==!0&&(z=J),Mt.resetTextureUnits();const bt=z.fog,St=O.isMeshStandardMaterial?z.environment:null,Tt=v===null?f.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:qn,Ct=(O.isMeshStandardMaterial?qt:Lt).get(O.envMap||St),Ot=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Pt=!!O.normalMap&&!!H.attributes.tangent,Rt=!!H.morphAttributes.position,jt=!!H.morphAttributes.normal,_e=!!H.morphAttributes.color,Je=O.toneMapped?f.toneMapping:ln,Dn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Yt=Dn!==void 0?Dn.length:0,It=yt.get(O),fs=h.state.lights;if($===!0&&(Q===!0||E!==M)){const ve=E===M&&O.id===_;T.setState(O,E,ve)}let te=!1;O.version===It.__version?(It.needsLights&&It.lightsStateVersion!==fs.state.version||It.outputEncoding!==Tt||q.isInstancedMesh&&It.instancing===!1||!q.isInstancedMesh&&It.instancing===!0||q.isSkinnedMesh&&It.skinning===!1||!q.isSkinnedMesh&&It.skinning===!0||It.envMap!==Ct||O.fog===!0&&It.fog!==bt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==T.numPlanes||It.numIntersection!==T.numIntersection)||It.vertexAlphas!==Ot||It.vertexTangents!==Pt||It.morphTargets!==Rt||It.morphNormals!==jt||It.morphColors!==_e||It.toneMapping!==Je||lt.isWebGL2===!0&&It.morphTargetsCount!==Yt)&&(te=!0):(te=!0,It.__version=O.version);let Pn=It.currentProgram;te===!0&&(Pn=Te(O,z,q));let Zo=!1,Wi=!1,ps=!1;const le=Pn.getUniforms(),Rn=It.uniforms;if(dt.useProgram(Pn.program)&&(Zo=!0,Wi=!0,ps=!0),O.id!==_&&(_=O.id,Wi=!0),Zo||M!==E){if(le.setValue(I,"projectionMatrix",E.projectionMatrix),lt.logarithmicDepthBuffer&&le.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),M!==E&&(M=E,Wi=!0,ps=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const ve=le.map.cameraPosition;ve!==void 0&&ve.setValue(I,B.setFromMatrixPosition(E.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&le.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||q.isSkinnedMesh)&&le.setValue(I,"viewMatrix",E.matrixWorldInverse)}if(q.isSkinnedMesh){le.setOptional(I,q,"bindMatrix"),le.setOptional(I,q,"bindMatrixInverse");const ve=q.skeleton;ve&&(lt.floatVertexTextures?(ve.boneTexture===null&&ve.computeBoneTexture(),le.setValue(I,"boneTexture",ve.boneTexture,Mt),le.setValue(I,"boneTextureSize",ve.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ms=H.morphAttributes;if((ms.position!==void 0||ms.normal!==void 0||ms.color!==void 0&&lt.isWebGL2===!0)&&et.update(q,H,Pn),(Wi||It.receiveShadow!==q.receiveShadow)&&(It.receiveShadow=q.receiveShadow,le.setValue(I,"receiveShadow",q.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Rn.envMap.value=Ct,Rn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),Wi&&(le.setValue(I,"toneMappingExposure",f.toneMappingExposure),It.needsLights&&wu(Rn,ps),bt&&O.fog===!0&&Ut.refreshFogUniforms(Rn,bt),Ut.refreshMaterialUniforms(Rn,O,V,L,K),$r.upload(I,It.uniformsList,Rn,Mt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&($r.upload(I,It.uniformsList,Rn,Mt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&le.setValue(I,"center",q.center),le.setValue(I,"modelViewMatrix",q.modelViewMatrix),le.setValue(I,"normalMatrix",q.normalMatrix),le.setValue(I,"modelMatrix",q.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ve=O.uniformsGroups;for(let gs=0,Au=ve.length;gs<Au;gs++)if(lt.isWebGL2){const Jo=ve[gs];N.update(Jo,Pn),N.bind(Jo,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function wu(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Tu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,z,H){yt.get(E.texture).__webglTexture=z,yt.get(E.depthTexture).__webglTexture=H;const O=yt.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){const H=yt.get(E);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,H=0){v=E,y=z,S=H;let O=!0,q=null,bt=!1,St=!1;if(E){const Ct=yt.get(E);Ct.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(36160,null),O=!1):Ct.__webglFramebuffer===void 0?Mt.setupRenderTarget(E):Ct.__hasExternalTextures&&Mt.rebindTextures(E,yt.get(E.texture).__webglTexture,yt.get(E.depthTexture).__webglTexture);const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(St=!0);const Pt=yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=Pt[z],bt=!0):lt.isWebGL2&&E.samples>0&&Mt.useMultisampledRTT(E)===!1?q=yt.get(E).__webglMultisampledFramebuffer:q=Pt,C.copy(E.viewport),D.copy(E.scissor),g=E.scissorTest}else C.copy(R).multiplyScalar(V).floor(),D.copy(G).multiplyScalar(V).floor(),g=j;if(dt.bindFramebuffer(36160,q)&&lt.drawBuffers&&O&&dt.drawBuffers(E,q),dt.viewport(C),dt.scissor(D),dt.setScissorTest(g),bt){const Ct=yt.get(E.texture);I.framebufferTexture2D(36160,36064,34069+z,Ct.__webglTexture,H)}else if(St){const Ct=yt.get(E.texture),Ot=z||0;I.framebufferTextureLayer(36160,36064,Ct.__webglTexture,H||0,Ot)}_=-1},this.readRenderTargetPixels=function(E,z,H,O,q,bt,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Tt=Tt[St]),Tt){dt.bindFramebuffer(36160,Tt);try{const Ct=E.texture,Ot=Ct.format,Pt=Ct.type;if(Ot!==ze&&pt.convert(Ot)!==I.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=Pt===sr&&(ct.has("EXT_color_buffer_half_float")||lt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(Pt!==$n&&pt.convert(Pt)!==I.getParameter(35738)&&!(Pt===kn&&(lt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-O&&H>=0&&H<=E.height-q&&I.readPixels(z,H,O,q,pt.convert(Ot),pt.convert(Pt),bt)}finally{const Ct=v!==null?yt.get(v).__webglFramebuffer:null;dt.bindFramebuffer(36160,Ct)}}},this.copyFramebufferToTexture=function(E,z,H=0){const O=Math.pow(2,-H),q=Math.floor(z.image.width*O),bt=Math.floor(z.image.height*O);Mt.setTexture2D(z,0),I.copyTexSubImage2D(3553,H,0,0,E.x,E.y,q,bt),dt.unbindTexture()},this.copyTextureToTexture=function(E,z,H,O=0){const q=z.image.width,bt=z.image.height,St=pt.convert(H.format),Tt=pt.convert(H.type);Mt.setTexture2D(H,0),I.pixelStorei(37440,H.flipY),I.pixelStorei(37441,H.premultiplyAlpha),I.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?I.texSubImage2D(3553,O,E.x,E.y,q,bt,St,Tt,z.image.data):z.isCompressedTexture?I.compressedTexSubImage2D(3553,O,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,St,z.mipmaps[0].data):I.texSubImage2D(3553,O,E.x,E.y,St,Tt,z.image),O===0&&H.generateMipmaps&&I.generateMipmap(3553),dt.unbindTexture()},this.copyTextureToTexture3D=function(E,z,H,O,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const bt=E.max.x-E.min.x+1,St=E.max.y-E.min.y+1,Tt=E.max.z-E.min.z+1,Ct=pt.convert(O.format),Ot=pt.convert(O.type);let Pt;if(O.isData3DTexture)Mt.setTexture3D(O,0),Pt=32879;else if(O.isDataArrayTexture)Mt.setTexture2DArray(O,0),Pt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(37440,O.flipY),I.pixelStorei(37441,O.premultiplyAlpha),I.pixelStorei(3317,O.unpackAlignment);const Rt=I.getParameter(3314),jt=I.getParameter(32878),_e=I.getParameter(3316),Je=I.getParameter(3315),Dn=I.getParameter(32877),Yt=H.isCompressedTexture?H.mipmaps[0]:H.image;I.pixelStorei(3314,Yt.width),I.pixelStorei(32878,Yt.height),I.pixelStorei(3316,E.min.x),I.pixelStorei(3315,E.min.y),I.pixelStorei(32877,E.min.z),H.isDataTexture||H.isData3DTexture?I.texSubImage3D(Pt,q,z.x,z.y,z.z,bt,St,Tt,Ct,Ot,Yt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(Pt,q,z.x,z.y,z.z,bt,St,Tt,Ct,Yt.data)):I.texSubImage3D(Pt,q,z.x,z.y,z.z,bt,St,Tt,Ct,Ot,Yt),I.pixelStorei(3314,Rt),I.pixelStorei(32878,jt),I.pixelStorei(3316,_e),I.pixelStorei(3315,Je),I.pixelStorei(32877,Dn),q===0&&O.generateMipmaps&&I.generateMipmap(Pt),dt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Mt.setTextureCube(E,0):E.isData3DTexture?Mt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Mt.setTexture2DArray(E,0):Mt.setTexture2D(E,0),dt.unbindTexture()},this.resetState=function(){y=0,S=0,v=null,dt.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Do.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class Ig extends Do{}Ig.prototype.isWebGL1Renderer=!0;class Ng extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Po extends Tn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new je(s,3)),this.setAttribute("normal",new je(s.slice(),3)),this.setAttribute("uv",new je(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const v=new U,_=new U,M=new U;for(let C=0;C<e.length;C+=3)m(e[C+0],v),m(e[C+1],_),m(e[C+2],M),l(v,_,M,S)}function l(S,v,_,M){const C=M+1,D=[];for(let g=0;g<=C;g++){D[g]=[];const w=S.clone().lerp(_,g/C),L=v.clone().lerp(_,g/C),V=C-g;for(let X=0;X<=V;X++)X===0&&g===C?D[g][X]=w:D[g][X]=w.clone().lerp(L,X/V)}for(let g=0;g<C;g++)for(let w=0;w<2*(C-g)-1;w++){const L=Math.floor(w/2);w%2===0?(h(D[g][L+1]),h(D[g+1][L]),h(D[g][L])):(h(D[g][L+1]),h(D[g+1][L+1]),h(D[g+1][L]))}}function c(S){const v=new U;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(S),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function u(){const S=new U;for(let v=0;v<s.length;v+=3){S.x=s[v+0],S.y=s[v+1],S.z=s[v+2];const _=d(S)/2/Math.PI+.5,M=y(S)/Math.PI+.5;a.push(_,1-M)}b(),p()}function p(){for(let S=0;S<a.length;S+=6){const v=a[S+0],_=a[S+2],M=a[S+4],C=Math.max(v,_,M),D=Math.min(v,_,M);C>.9&&D<.1&&(v<.2&&(a[S+0]+=1),_<.2&&(a[S+2]+=1),M<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function m(S,v){const _=S*3;v.x=t[_+0],v.y=t[_+1],v.z=t[_+2]}function b(){const S=new U,v=new U,_=new U,M=new U,C=new At,D=new At,g=new At;for(let w=0,L=0;w<s.length;w+=9,L+=6){S.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),C.set(a[L+0],a[L+1]),D.set(a[L+2],a[L+3]),g.set(a[L+4],a[L+5]),M.copy(S).add(v).add(_).divideScalar(3);const V=d(M);f(C,L+0,S,V),f(D,L+2,v,V),f(g,L+4,_,V)}}function f(S,v,_,M){M<0&&S.x===1&&(a[v]=S.x-1),_.x===0&&_.z===0&&(a[v]=M/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function y(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Po(t.vertices,t.indices,t.radius,t.details)}}class Ro extends Po{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ro(t.radius,t.detail)}}class Og extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Fg{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new U)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.282095),e.addScaledVector(a[1],.488603*i),e.addScaledVector(a[2],.488603*s),e.addScaledVector(a[3],.488603*n),e.addScaledVector(a[4],1.092548*(n*i)),e.addScaledVector(a[5],1.092548*(i*s)),e.addScaledVector(a[6],.315392*(3*s*s-1)),e.addScaledVector(a[7],1.092548*(n*s)),e.addScaledVector(a[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,a=this.coefficients;return e.copy(a[0]).multiplyScalar(.886227),e.addScaledVector(a[1],2*.511664*i),e.addScaledVector(a[2],2*.511664*s),e.addScaledVector(a[3],2*.511664*n),e.addScaledVector(a[4],2*.429043*n*i),e.addScaledVector(a[5],2*.429043*i*s),e.addScaledVector(a[6],.743125*s*s-.247708),e.addScaledVector(a[7],2*.429043*n*s),e.addScaledVector(a[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}class Ug extends Og{constructor(t=new Fg,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}class zg extends Ug{constructor(t,e=1){super(void 0,e),this.isAmbientLightProbe=!0;const n=new Bt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}class dl{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);const fl={type:"change"},Ys={type:"start"},pl={type:"end"};class Bg extends Qn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ni.ROTATE,MIDDLE:ni.DOLLY,RIGHT:ni.PAN},this.touches={ONE:ii.ROTATE,TWO:ii.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Xt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Xt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(fl),n.update(),s=i.NONE},this.update=function(){const A=new U,N=new Xn().setFromUnitVectors(t.up,new U(0,1,0)),ut=N.clone().invert(),st=new U,mt=new Xn,vt=2*Math.PI;return function(){const Dt=n.object.position;A.copy(Dt).sub(n.target),A.applyQuaternion(N),o.setFromVector3(A),n.autoRotate&&s===i.NONE&&w(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Nt=n.minAzimuthAngle,Ft=n.maxAzimuthAngle;return isFinite(Nt)&&isFinite(Ft)&&(Nt<-Math.PI?Nt+=vt:Nt>Math.PI&&(Nt-=vt),Ft<-Math.PI?Ft+=vt:Ft>Math.PI&&(Ft-=vt),Nt<=Ft?o.theta=Math.max(Nt,Math.min(Ft,o.theta)):o.theta=o.theta>(Nt+Ft)/2?Math.max(Nt,o.theta):Math.min(Ft,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(o),A.applyQuaternion(ut),Dt.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,p||st.distanceToSquared(n.object.position)>a||8*(1-mt.dot(n.object.quaternion))>a?(n.dispatchEvent(fl),st.copy(n.object.position),mt.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",k),n.domElement.removeEventListener("pointerdown",qt),n.domElement.removeEventListener("pointercancel",Ht),n.domElement.removeEventListener("wheel",Wt),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",Gt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Xt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new dl,l=new dl;let c=1;const u=new U;let p=!1;const h=new At,m=new At,b=new At,f=new At,d=new At,y=new At,S=new At,v=new At,_=new At,M=[],C={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function g(){return Math.pow(.95,n.zoomSpeed)}function w(A){l.theta-=A}function L(A){l.phi-=A}const V=function(){const A=new U;return function(ut,st){A.setFromMatrixColumn(st,0),A.multiplyScalar(-ut),u.add(A)}}(),X=function(){const A=new U;return function(ut,st){n.screenSpacePanning===!0?A.setFromMatrixColumn(st,1):(A.setFromMatrixColumn(st,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(ut),u.add(A)}}(),F=function(){const A=new U;return function(ut,st){const mt=n.domElement;if(n.object.isPerspectiveCamera){const vt=n.object.position;A.copy(vt).sub(n.target);let _t=A.length();_t*=Math.tan(n.object.fov/2*Math.PI/180),V(2*ut*_t/mt.clientHeight,n.object.matrix),X(2*st*_t/mt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(V(ut*(n.object.right-n.object.left)/n.object.zoom/mt.clientWidth,n.object.matrix),X(st*(n.object.top-n.object.bottom)/n.object.zoom/mt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(A){h.set(A.clientX,A.clientY)}function Z(A){S.set(A.clientX,A.clientY)}function $(A){f.set(A.clientX,A.clientY)}function Q(A){m.set(A.clientX,A.clientY),b.subVectors(m,h).multiplyScalar(n.rotateSpeed);const N=n.domElement;w(2*Math.PI*b.x/N.clientHeight),L(2*Math.PI*b.y/N.clientHeight),h.copy(m),n.update()}function K(A){v.set(A.clientX,A.clientY),_.subVectors(v,S),_.y>0?R(g()):_.y<0&&G(g()),S.copy(v),n.update()}function gt(A){d.set(A.clientX,A.clientY),y.subVectors(d,f).multiplyScalar(n.panSpeed),F(y.x,y.y),f.copy(d),n.update()}function B(A){A.deltaY<0?G(g()):A.deltaY>0&&R(g()),n.update()}function J(A){let N=!1;switch(A.code){case n.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),N=!0;break;case n.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),N=!0;break;case n.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),N=!0;break;case n.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),N=!0;break}N&&(A.preventDefault(),n.update())}function it(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const A=.5*(M[0].pageX+M[1].pageX),N=.5*(M[0].pageY+M[1].pageY);h.set(A,N)}}function I(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const A=.5*(M[0].pageX+M[1].pageX),N=.5*(M[0].pageY+M[1].pageY);f.set(A,N)}}function at(){const A=M[0].pageX-M[1].pageX,N=M[0].pageY-M[1].pageY,ut=Math.sqrt(A*A+N*N);S.set(0,ut)}function ct(){n.enableZoom&&at(),n.enablePan&&I()}function lt(){n.enableZoom&&at(),n.enableRotate&&it()}function dt(A){if(M.length==1)m.set(A.pageX,A.pageY);else{const ut=pt(A),st=.5*(A.pageX+ut.x),mt=.5*(A.pageY+ut.y);m.set(st,mt)}b.subVectors(m,h).multiplyScalar(n.rotateSpeed);const N=n.domElement;w(2*Math.PI*b.x/N.clientHeight),L(2*Math.PI*b.y/N.clientHeight),h.copy(m)}function xt(A){if(M.length===1)d.set(A.pageX,A.pageY);else{const N=pt(A),ut=.5*(A.pageX+N.x),st=.5*(A.pageY+N.y);d.set(ut,st)}y.subVectors(d,f).multiplyScalar(n.panSpeed),F(y.x,y.y),f.copy(d)}function yt(A){const N=pt(A),ut=A.pageX-N.x,st=A.pageY-N.y,mt=Math.sqrt(ut*ut+st*st);v.set(0,mt),_.set(0,Math.pow(v.y/S.y,n.zoomSpeed)),R(_.y),S.copy(v)}function Mt(A){n.enableZoom&&yt(A),n.enablePan&&xt(A)}function Lt(A){n.enableZoom&&yt(A),n.enableRotate&&dt(A)}function qt(A){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",ne),n.domElement.addEventListener("pointerup",Gt)),et(A),A.pointerType==="touch"?T(A):zt(A))}function ne(A){n.enabled!==!1&&(A.pointerType==="touch"?x(A):Ut(A))}function Gt(A){nt(A),M.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",Gt)),n.dispatchEvent(pl),s=i.NONE}function Ht(A){nt(A)}function zt(A){let N;switch(A.button){case 0:N=n.mouseButtons.LEFT;break;case 1:N=n.mouseButtons.MIDDLE;break;case 2:N=n.mouseButtons.RIGHT;break;default:N=-1}switch(N){case ni.DOLLY:if(n.enableZoom===!1)return;Z(A),s=i.DOLLY;break;case ni.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;$(A),s=i.PAN}else{if(n.enableRotate===!1)return;j(A),s=i.ROTATE}break;case ni.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;j(A),s=i.ROTATE}else{if(n.enablePan===!1)return;$(A),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ys)}function Ut(A){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Q(A);break;case i.DOLLY:if(n.enableZoom===!1)return;K(A);break;case i.PAN:if(n.enablePan===!1)return;gt(A);break}}function Wt(A){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(A.preventDefault(),n.dispatchEvent(Ys),B(A),n.dispatchEvent(pl))}function Xt(A){n.enabled===!1||n.enablePan===!1||J(A)}function T(A){switch(ot(A),M.length){case 1:switch(n.touches.ONE){case ii.ROTATE:if(n.enableRotate===!1)return;it(),s=i.TOUCH_ROTATE;break;case ii.PAN:if(n.enablePan===!1)return;I(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ii.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ct(),s=i.TOUCH_DOLLY_PAN;break;case ii.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;lt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ys)}function x(A){switch(ot(A),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;dt(A),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;xt(A),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Mt(A),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Lt(A),n.update();break;default:s=i.NONE}}function k(A){n.enabled!==!1&&A.preventDefault()}function et(A){M.push(A)}function nt(A){delete C[A.pointerId];for(let N=0;N<M.length;N++)if(M[N].pointerId==A.pointerId){M.splice(N,1);return}}function ot(A){let N=C[A.pointerId];N===void 0&&(N=new At,C[A.pointerId]=N),N.set(A.pageX,A.pageY)}function pt(A){const N=A.pointerId===M[0].pointerId?M[1]:M[0];return C[N.pointerId]}n.domElement.addEventListener("contextmenu",k),n.domElement.addEventListener("pointerdown",qt),n.domElement.addEventListener("pointercancel",Ht),n.domElement.addEventListener("wheel",Wt,{passive:!1}),this.update()}}var fe="top",Ee="bottom",we="right",pe="left",rs="auto",ki=[fe,Ee,we,pe],Kn="start",Ri="end",yc="clippingParents",Io="viewport",bi="popper",Sc="reference",_o=ki.reduce(function(r,t){return r.concat([t+"-"+Kn,t+"-"+Ri])},[]),No=[].concat(ki,[rs]).reduce(function(r,t){return r.concat([t,t+"-"+Kn,t+"-"+Ri])},[]),Mc="beforeRead",Ec="read",wc="afterRead",Tc="beforeMain",Ac="main",Cc="afterMain",Lc="beforeWrite",Dc="write",Pc="afterWrite",Rc=[Mc,Ec,wc,Tc,Ac,Cc,Lc,Dc,Pc];function Ze(r){return r?(r.nodeName||"").toLowerCase():null}function Re(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var t=r.ownerDocument;return t&&t.defaultView||window}return r}function Zn(r){var t=Re(r).Element;return r instanceof t||r instanceof Element}function De(r){var t=Re(r).HTMLElement;return r instanceof t||r instanceof HTMLElement}function Oo(r){if(typeof ShadowRoot>"u")return!1;var t=Re(r).ShadowRoot;return r instanceof t||r instanceof ShadowRoot}function kg(r){var t=r.state;Object.keys(t.elements).forEach(function(e){var n=t.styles[e]||{},i=t.attributes[e]||{},s=t.elements[e];!De(s)||!Ze(s)||(Object.assign(s.style,n),Object.keys(i).forEach(function(a){var o=i[a];o===!1?s.removeAttribute(a):s.setAttribute(a,o===!0?"":o)}))})}function Vg(r){var t=r.state,e={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,e.popper),t.styles=e,t.elements.arrow&&Object.assign(t.elements.arrow.style,e.arrow),function(){Object.keys(t.elements).forEach(function(n){var i=t.elements[n],s=t.attributes[n]||{},a=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:e[n]),o=a.reduce(function(l,c){return l[c]="",l},{});!De(i)||!Ze(i)||(Object.assign(i.style,o),Object.keys(s).forEach(function(l){i.removeAttribute(l)}))})}}const Fo={name:"applyStyles",enabled:!0,phase:"write",fn:kg,effect:Vg,requires:["computeStyles"]};function Ye(r){return r.split("-")[0]}var Wn=Math.max,Kr=Math.min,Ii=Math.round;function vo(){var r=navigator.userAgentData;return r!=null&&r.brands?r.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Ic(){return!/^((?!chrome|android).)*safari/i.test(vo())}function Ni(r,t,e){t===void 0&&(t=!1),e===void 0&&(e=!1);var n=r.getBoundingClientRect(),i=1,s=1;t&&De(r)&&(i=r.offsetWidth>0&&Ii(n.width)/r.offsetWidth||1,s=r.offsetHeight>0&&Ii(n.height)/r.offsetHeight||1);var a=Zn(r)?Re(r):window,o=a.visualViewport,l=!Ic()&&e,c=(n.left+(l&&o?o.offsetLeft:0))/i,u=(n.top+(l&&o?o.offsetTop:0))/s,p=n.width/i,h=n.height/s;return{width:p,height:h,top:u,right:c+p,bottom:u+h,left:c,x:c,y:u}}function Uo(r){var t=Ni(r),e=r.offsetWidth,n=r.offsetHeight;return Math.abs(t.width-e)<=1&&(e=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:r.offsetLeft,y:r.offsetTop,width:e,height:n}}function Nc(r,t){var e=t.getRootNode&&t.getRootNode();if(r.contains(t))return!0;if(e&&Oo(e)){var n=t;do{if(n&&r.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function dn(r){return Re(r).getComputedStyle(r)}function Gg(r){return["table","td","th"].indexOf(Ze(r))>=0}function An(r){return((Zn(r)?r.ownerDocument:r.document)||window.document).documentElement}function ss(r){return Ze(r)==="html"?r:r.assignedSlot||r.parentNode||(Oo(r)?r.host:null)||An(r)}function ml(r){return!De(r)||dn(r).position==="fixed"?null:r.offsetParent}function Hg(r){var t=/firefox/i.test(vo()),e=/Trident/i.test(vo());if(e&&De(r)){var n=dn(r);if(n.position==="fixed")return null}var i=ss(r);for(Oo(i)&&(i=i.host);De(i)&&["html","body"].indexOf(Ze(i))<0;){var s=dn(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||t&&s.willChange==="filter"||t&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function hr(r){for(var t=Re(r),e=ml(r);e&&Gg(e)&&dn(e).position==="static";)e=ml(e);return e&&(Ze(e)==="html"||Ze(e)==="body"&&dn(e).position==="static")?t:e||Hg(r)||t}function zo(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function nr(r,t,e){return Wn(r,Kr(t,e))}function Wg(r,t,e){var n=nr(r,t,e);return n>e?e:n}function Oc(){return{top:0,right:0,bottom:0,left:0}}function Fc(r){return Object.assign({},Oc(),r)}function Uc(r,t){return t.reduce(function(e,n){return e[n]=r,e},{})}var $g=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,Fc(typeof t!="number"?t:Uc(t,ki))};function qg(r){var t,e=r.state,n=r.name,i=r.options,s=e.elements.arrow,a=e.modifiersData.popperOffsets,o=Ye(e.placement),l=zo(o),c=[pe,we].indexOf(o)>=0,u=c?"height":"width";if(!(!s||!a)){var p=$g(i.padding,e),h=Uo(s),m=l==="y"?fe:pe,b=l==="y"?Ee:we,f=e.rects.reference[u]+e.rects.reference[l]-a[l]-e.rects.popper[u],d=a[l]-e.rects.reference[l],y=hr(s),S=y?l==="y"?y.clientHeight||0:y.clientWidth||0:0,v=f/2-d/2,_=p[m],M=S-h[u]-p[b],C=S/2-h[u]/2+v,D=nr(_,C,M),g=l;e.modifiersData[n]=(t={},t[g]=D,t.centerOffset=D-C,t)}}function Xg(r){var t=r.state,e=r.options,n=e.element,i=n===void 0?"[data-popper-arrow]":n;i!=null&&(typeof i=="string"&&(i=t.elements.popper.querySelector(i),!i)||Nc(t.elements.popper,i)&&(t.elements.arrow=i))}const zc={name:"arrow",enabled:!0,phase:"main",fn:qg,effect:Xg,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Oi(r){return r.split("-")[1]}var jg={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Yg(r){var t=r.x,e=r.y,n=window,i=n.devicePixelRatio||1;return{x:Ii(t*i)/i||0,y:Ii(e*i)/i||0}}function gl(r){var t,e=r.popper,n=r.popperRect,i=r.placement,s=r.variation,a=r.offsets,o=r.position,l=r.gpuAcceleration,c=r.adaptive,u=r.roundOffsets,p=r.isFixed,h=a.x,m=h===void 0?0:h,b=a.y,f=b===void 0?0:b,d=typeof u=="function"?u({x:m,y:f}):{x:m,y:f};m=d.x,f=d.y;var y=a.hasOwnProperty("x"),S=a.hasOwnProperty("y"),v=pe,_=fe,M=window;if(c){var C=hr(e),D="clientHeight",g="clientWidth";if(C===Re(e)&&(C=An(e),dn(C).position!=="static"&&o==="absolute"&&(D="scrollHeight",g="scrollWidth")),C=C,i===fe||(i===pe||i===we)&&s===Ri){_=Ee;var w=p&&C===M&&M.visualViewport?M.visualViewport.height:C[D];f-=w-n.height,f*=l?1:-1}if(i===pe||(i===fe||i===Ee)&&s===Ri){v=we;var L=p&&C===M&&M.visualViewport?M.visualViewport.width:C[g];m-=L-n.width,m*=l?1:-1}}var V=Object.assign({position:o},c&&jg),X=u===!0?Yg({x:m,y:f}):{x:m,y:f};if(m=X.x,f=X.y,l){var F;return Object.assign({},V,(F={},F[_]=S?"0":"",F[v]=y?"0":"",F.transform=(M.devicePixelRatio||1)<=1?"translate("+m+"px, "+f+"px)":"translate3d("+m+"px, "+f+"px, 0)",F))}return Object.assign({},V,(t={},t[_]=S?f+"px":"",t[v]=y?m+"px":"",t.transform="",t))}function Kg(r){var t=r.state,e=r.options,n=e.gpuAcceleration,i=n===void 0?!0:n,s=e.adaptive,a=s===void 0?!0:s,o=e.roundOffsets,l=o===void 0?!0:o,c={placement:Ye(t.placement),variation:Oi(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,gl(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,gl(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Bo={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Kg,data:{}};var zr={passive:!0};function Zg(r){var t=r.state,e=r.instance,n=r.options,i=n.scroll,s=i===void 0?!0:i,a=n.resize,o=a===void 0?!0:a,l=Re(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&c.forEach(function(u){u.addEventListener("scroll",e.update,zr)}),o&&l.addEventListener("resize",e.update,zr),function(){s&&c.forEach(function(u){u.removeEventListener("scroll",e.update,zr)}),o&&l.removeEventListener("resize",e.update,zr)}}const ko={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Zg,data:{}};var Jg={left:"right",right:"left",bottom:"top",top:"bottom"};function qr(r){return r.replace(/left|right|bottom|top/g,function(t){return Jg[t]})}var Qg={start:"end",end:"start"};function _l(r){return r.replace(/start|end/g,function(t){return Qg[t]})}function Vo(r){var t=Re(r),e=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:e,scrollTop:n}}function Go(r){return Ni(An(r)).left+Vo(r).scrollLeft}function t_(r,t){var e=Re(r),n=An(r),i=e.visualViewport,s=n.clientWidth,a=n.clientHeight,o=0,l=0;if(i){s=i.width,a=i.height;var c=Ic();(c||!c&&t==="fixed")&&(o=i.offsetLeft,l=i.offsetTop)}return{width:s,height:a,x:o+Go(r),y:l}}function e_(r){var t,e=An(r),n=Vo(r),i=(t=r.ownerDocument)==null?void 0:t.body,s=Wn(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=Wn(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),o=-n.scrollLeft+Go(r),l=-n.scrollTop;return dn(i||e).direction==="rtl"&&(o+=Wn(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:a,x:o,y:l}}function Ho(r){var t=dn(r),e=t.overflow,n=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+n)}function Bc(r){return["html","body","#document"].indexOf(Ze(r))>=0?r.ownerDocument.body:De(r)&&Ho(r)?r:Bc(ss(r))}function ir(r,t){var e;t===void 0&&(t=[]);var n=Bc(r),i=n===((e=r.ownerDocument)==null?void 0:e.body),s=Re(n),a=i?[s].concat(s.visualViewport||[],Ho(n)?n:[]):n,o=t.concat(a);return i?o:o.concat(ir(ss(a)))}function xo(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function n_(r,t){var e=Ni(r,!1,t==="fixed");return e.top=e.top+r.clientTop,e.left=e.left+r.clientLeft,e.bottom=e.top+r.clientHeight,e.right=e.left+r.clientWidth,e.width=r.clientWidth,e.height=r.clientHeight,e.x=e.left,e.y=e.top,e}function vl(r,t,e){return t===Io?xo(t_(r,e)):Zn(t)?n_(t,e):xo(e_(An(r)))}function i_(r){var t=ir(ss(r)),e=["absolute","fixed"].indexOf(dn(r).position)>=0,n=e&&De(r)?hr(r):r;return Zn(n)?t.filter(function(i){return Zn(i)&&Nc(i,n)&&Ze(i)!=="body"}):[]}function r_(r,t,e,n){var i=t==="clippingParents"?i_(r):[].concat(t),s=[].concat(i,[e]),a=s[0],o=s.reduce(function(l,c){var u=vl(r,c,n);return l.top=Wn(u.top,l.top),l.right=Kr(u.right,l.right),l.bottom=Kr(u.bottom,l.bottom),l.left=Wn(u.left,l.left),l},vl(r,a,n));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function kc(r){var t=r.reference,e=r.element,n=r.placement,i=n?Ye(n):null,s=n?Oi(n):null,a=t.x+t.width/2-e.width/2,o=t.y+t.height/2-e.height/2,l;switch(i){case fe:l={x:a,y:t.y-e.height};break;case Ee:l={x:a,y:t.y+t.height};break;case we:l={x:t.x+t.width,y:o};break;case pe:l={x:t.x-e.width,y:o};break;default:l={x:t.x,y:t.y}}var c=i?zo(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(s){case Kn:l[c]=l[c]-(t[u]/2-e[u]/2);break;case Ri:l[c]=l[c]+(t[u]/2-e[u]/2);break}}return l}function Fi(r,t){t===void 0&&(t={});var e=t,n=e.placement,i=n===void 0?r.placement:n,s=e.strategy,a=s===void 0?r.strategy:s,o=e.boundary,l=o===void 0?yc:o,c=e.rootBoundary,u=c===void 0?Io:c,p=e.elementContext,h=p===void 0?bi:p,m=e.altBoundary,b=m===void 0?!1:m,f=e.padding,d=f===void 0?0:f,y=Fc(typeof d!="number"?d:Uc(d,ki)),S=h===bi?Sc:bi,v=r.rects.popper,_=r.elements[b?S:h],M=r_(Zn(_)?_:_.contextElement||An(r.elements.popper),l,u,a),C=Ni(r.elements.reference),D=kc({reference:C,element:v,strategy:"absolute",placement:i}),g=xo(Object.assign({},v,D)),w=h===bi?g:C,L={top:M.top-w.top+y.top,bottom:w.bottom-M.bottom+y.bottom,left:M.left-w.left+y.left,right:w.right-M.right+y.right},V=r.modifiersData.offset;if(h===bi&&V){var X=V[i];Object.keys(L).forEach(function(F){var R=[we,Ee].indexOf(F)>=0?1:-1,G=[fe,Ee].indexOf(F)>=0?"y":"x";L[F]+=X[G]*R})}return L}function s_(r,t){t===void 0&&(t={});var e=t,n=e.placement,i=e.boundary,s=e.rootBoundary,a=e.padding,o=e.flipVariations,l=e.allowedAutoPlacements,c=l===void 0?No:l,u=Oi(n),p=u?o?_o:_o.filter(function(b){return Oi(b)===u}):ki,h=p.filter(function(b){return c.indexOf(b)>=0});h.length===0&&(h=p);var m=h.reduce(function(b,f){return b[f]=Fi(r,{placement:f,boundary:i,rootBoundary:s,padding:a})[Ye(f)],b},{});return Object.keys(m).sort(function(b,f){return m[b]-m[f]})}function o_(r){if(Ye(r)===rs)return[];var t=qr(r);return[_l(r),t,_l(t)]}function a_(r){var t=r.state,e=r.options,n=r.name;if(!t.modifiersData[n]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,a=e.altAxis,o=a===void 0?!0:a,l=e.fallbackPlacements,c=e.padding,u=e.boundary,p=e.rootBoundary,h=e.altBoundary,m=e.flipVariations,b=m===void 0?!0:m,f=e.allowedAutoPlacements,d=t.options.placement,y=Ye(d),S=y===d,v=l||(S||!b?[qr(d)]:o_(d)),_=[d].concat(v).reduce(function(it,I){return it.concat(Ye(I)===rs?s_(t,{placement:I,boundary:u,rootBoundary:p,padding:c,flipVariations:b,allowedAutoPlacements:f}):I)},[]),M=t.rects.reference,C=t.rects.popper,D=new Map,g=!0,w=_[0],L=0;L<_.length;L++){var V=_[L],X=Ye(V),F=Oi(V)===Kn,R=[fe,Ee].indexOf(X)>=0,G=R?"width":"height",j=Fi(t,{placement:V,boundary:u,rootBoundary:p,altBoundary:h,padding:c}),Z=R?F?we:pe:F?Ee:fe;M[G]>C[G]&&(Z=qr(Z));var $=qr(Z),Q=[];if(s&&Q.push(j[X]<=0),o&&Q.push(j[Z]<=0,j[$]<=0),Q.every(function(it){return it})){w=V,g=!1;break}D.set(V,Q)}if(g)for(var K=b?3:1,gt=function(I){var at=_.find(function(ct){var lt=D.get(ct);if(lt)return lt.slice(0,I).every(function(dt){return dt})});if(at)return w=at,"break"},B=K;B>0;B--){var J=gt(B);if(J==="break")break}t.placement!==w&&(t.modifiersData[n]._skip=!0,t.placement=w,t.reset=!0)}}const Vc={name:"flip",enabled:!0,phase:"main",fn:a_,requiresIfExists:["offset"],data:{_skip:!1}};function xl(r,t,e){return e===void 0&&(e={x:0,y:0}),{top:r.top-t.height-e.y,right:r.right-t.width+e.x,bottom:r.bottom-t.height+e.y,left:r.left-t.width-e.x}}function bl(r){return[fe,we,Ee,pe].some(function(t){return r[t]>=0})}function l_(r){var t=r.state,e=r.name,n=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,a=Fi(t,{elementContext:"reference"}),o=Fi(t,{altBoundary:!0}),l=xl(a,n),c=xl(o,i,s),u=bl(l),p=bl(c);t.modifiersData[e]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}const Gc={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:l_};function c_(r,t,e){var n=Ye(r),i=[pe,fe].indexOf(n)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},t,{placement:r})):e,a=s[0],o=s[1];return a=a||0,o=(o||0)*i,[pe,we].indexOf(n)>=0?{x:o,y:a}:{x:a,y:o}}function u_(r){var t=r.state,e=r.options,n=r.name,i=e.offset,s=i===void 0?[0,0]:i,a=No.reduce(function(u,p){return u[p]=c_(p,t.rects,s),u},{}),o=a[t.placement],l=o.x,c=o.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}const Hc={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:u_};function h_(r){var t=r.state,e=r.name;t.modifiersData[e]=kc({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Wo={name:"popperOffsets",enabled:!0,phase:"read",fn:h_,data:{}};function d_(r){return r==="x"?"y":"x"}function f_(r){var t=r.state,e=r.options,n=r.name,i=e.mainAxis,s=i===void 0?!0:i,a=e.altAxis,o=a===void 0?!1:a,l=e.boundary,c=e.rootBoundary,u=e.altBoundary,p=e.padding,h=e.tether,m=h===void 0?!0:h,b=e.tetherOffset,f=b===void 0?0:b,d=Fi(t,{boundary:l,rootBoundary:c,padding:p,altBoundary:u}),y=Ye(t.placement),S=Oi(t.placement),v=!S,_=zo(y),M=d_(_),C=t.modifiersData.popperOffsets,D=t.rects.reference,g=t.rects.popper,w=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,L=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),V=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,X={x:0,y:0};if(C){if(s){var F,R=_==="y"?fe:pe,G=_==="y"?Ee:we,j=_==="y"?"height":"width",Z=C[_],$=Z+d[R],Q=Z-d[G],K=m?-g[j]/2:0,gt=S===Kn?D[j]:g[j],B=S===Kn?-g[j]:-D[j],J=t.elements.arrow,it=m&&J?Uo(J):{width:0,height:0},I=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Oc(),at=I[R],ct=I[G],lt=nr(0,D[j],it[j]),dt=v?D[j]/2-K-lt-at-L.mainAxis:gt-lt-at-L.mainAxis,xt=v?-D[j]/2+K+lt+ct+L.mainAxis:B+lt+ct+L.mainAxis,yt=t.elements.arrow&&hr(t.elements.arrow),Mt=yt?_==="y"?yt.clientTop||0:yt.clientLeft||0:0,Lt=(F=V==null?void 0:V[_])!=null?F:0,qt=Z+dt-Lt-Mt,ne=Z+xt-Lt,Gt=nr(m?Kr($,qt):$,Z,m?Wn(Q,ne):Q);C[_]=Gt,X[_]=Gt-Z}if(o){var Ht,zt=_==="x"?fe:pe,Ut=_==="x"?Ee:we,Wt=C[M],Xt=M==="y"?"height":"width",T=Wt+d[zt],x=Wt-d[Ut],k=[fe,pe].indexOf(y)!==-1,et=(Ht=V==null?void 0:V[M])!=null?Ht:0,nt=k?T:Wt-D[Xt]-g[Xt]-et+L.altAxis,ot=k?Wt+D[Xt]+g[Xt]-et-L.altAxis:x,pt=m&&k?Wg(nt,Wt,ot):nr(m?nt:T,Wt,m?ot:x);C[M]=pt,X[M]=pt-Wt}t.modifiersData[n]=X}}const Wc={name:"preventOverflow",enabled:!0,phase:"main",fn:f_,requiresIfExists:["offset"]};function p_(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function m_(r){return r===Re(r)||!De(r)?Vo(r):p_(r)}function g_(r){var t=r.getBoundingClientRect(),e=Ii(t.width)/r.offsetWidth||1,n=Ii(t.height)/r.offsetHeight||1;return e!==1||n!==1}function __(r,t,e){e===void 0&&(e=!1);var n=De(t),i=De(t)&&g_(t),s=An(t),a=Ni(r,i,e),o={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!e)&&((Ze(t)!=="body"||Ho(s))&&(o=m_(t)),De(t)?(l=Ni(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):s&&(l.x=Go(s))),{x:a.left+o.scrollLeft-l.x,y:a.top+o.scrollTop-l.y,width:a.width,height:a.height}}function v_(r){var t=new Map,e=new Set,n=[];r.forEach(function(s){t.set(s.name,s)});function i(s){e.add(s.name);var a=[].concat(s.requires||[],s.requiresIfExists||[]);a.forEach(function(o){if(!e.has(o)){var l=t.get(o);l&&i(l)}}),n.push(s)}return r.forEach(function(s){e.has(s.name)||i(s)}),n}function x_(r){var t=v_(r);return Rc.reduce(function(e,n){return e.concat(t.filter(function(i){return i.phase===n}))},[])}function b_(r){var t;return function(){return t||(t=new Promise(function(e){Promise.resolve().then(function(){t=void 0,e(r())})})),t}}function y_(r){var t=r.reduce(function(e,n){var i=e[n.name];return e[n.name]=i?Object.assign({},i,n,{options:Object.assign({},i.options,n.options),data:Object.assign({},i.data,n.data)}):n,e},{});return Object.keys(t).map(function(e){return t[e]})}var yl={placement:"bottom",modifiers:[],strategy:"absolute"};function Sl(){for(var r=arguments.length,t=new Array(r),e=0;e<r;e++)t[e]=arguments[e];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function os(r){r===void 0&&(r={});var t=r,e=t.defaultModifiers,n=e===void 0?[]:e,i=t.defaultOptions,s=i===void 0?yl:i;return function(o,l,c){c===void 0&&(c=s);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},yl,s),modifiersData:{},elements:{reference:o,popper:l},attributes:{},styles:{}},p=[],h=!1,m={state:u,setOptions:function(y){var S=typeof y=="function"?y(u.options):y;f(),u.options=Object.assign({},s,u.options,S),u.scrollParents={reference:Zn(o)?ir(o):o.contextElement?ir(o.contextElement):[],popper:ir(l)};var v=x_(y_([].concat(n,u.options.modifiers)));return u.orderedModifiers=v.filter(function(_){return _.enabled}),b(),m.update()},forceUpdate:function(){if(!h){var y=u.elements,S=y.reference,v=y.popper;if(Sl(S,v)){u.rects={reference:__(S,hr(v),u.options.strategy==="fixed"),popper:Uo(v)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(L){return u.modifiersData[L.name]=Object.assign({},L.data)});for(var _=0;_<u.orderedModifiers.length;_++){if(u.reset===!0){u.reset=!1,_=-1;continue}var M=u.orderedModifiers[_],C=M.fn,D=M.options,g=D===void 0?{}:D,w=M.name;typeof C=="function"&&(u=C({state:u,options:g,name:w,instance:m})||u)}}}},update:b_(function(){return new Promise(function(d){m.forceUpdate(),d(u)})}),destroy:function(){f(),h=!0}};if(!Sl(o,l))return m;m.setOptions(c).then(function(d){!h&&c.onFirstUpdate&&c.onFirstUpdate(d)});function b(){u.orderedModifiers.forEach(function(d){var y=d.name,S=d.options,v=S===void 0?{}:S,_=d.effect;if(typeof _=="function"){var M=_({state:u,name:y,instance:m,options:v}),C=function(){};p.push(M||C)}})}function f(){p.forEach(function(d){return d()}),p=[]}return m}}var S_=os(),M_=[ko,Wo,Bo,Fo],E_=os({defaultModifiers:M_}),w_=[ko,Wo,Bo,Fo,Hc,Vc,Wc,zc,Gc],$o=os({defaultModifiers:w_});const $c=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Cc,afterRead:wc,afterWrite:Pc,applyStyles:Fo,arrow:zc,auto:rs,basePlacements:ki,beforeMain:Tc,beforeRead:Mc,beforeWrite:Lc,bottom:Ee,clippingParents:yc,computeStyles:Bo,createPopper:$o,createPopperBase:S_,createPopperLite:E_,detectOverflow:Fi,end:Ri,eventListeners:ko,flip:Vc,hide:Gc,left:pe,main:Ac,modifierPhases:Rc,offset:Hc,placements:No,popper:bi,popperGenerator:os,popperOffsets:Wo,preventOverflow:Wc,read:Ec,reference:Sc,right:we,start:Kn,top:fe,variationPlacements:_o,viewport:Io,write:Dc},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const T_=1e6,A_=1e3,bo="transitionend",C_=r=>r==null?`${r}`:Object.prototype.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase(),L_=r=>{do r+=Math.floor(Math.random()*T_);while(document.getElementById(r));return r},qc=r=>{let t=r.getAttribute("data-bs-target");if(!t||t==="#"){let e=r.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return t},Xc=r=>{const t=qc(r);return t&&document.querySelector(t)?t:null},cn=r=>{const t=qc(r);return t?document.querySelector(t):null},D_=r=>{if(!r)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(r);const n=Number.parseFloat(t),i=Number.parseFloat(e);return!n&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*A_)},jc=r=>{r.dispatchEvent(new Event(bo))},un=r=>!r||typeof r!="object"?!1:(typeof r.jquery<"u"&&(r=r[0]),typeof r.nodeType<"u"),Mn=r=>un(r)?r.jquery?r[0]:r:typeof r=="string"&&r.length>0?document.querySelector(r):null,Vi=r=>{if(!un(r)||r.getClientRects().length===0)return!1;const t=getComputedStyle(r).getPropertyValue("visibility")==="visible",e=r.closest("details:not([open])");if(!e)return t;if(e!==r){const n=r.closest("summary");if(n&&n.parentNode!==e||n===null)return!1}return t},En=r=>!r||r.nodeType!==Node.ELEMENT_NODE||r.classList.contains("disabled")?!0:typeof r.disabled<"u"?r.disabled:r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false",Yc=r=>{if(!document.documentElement.attachShadow)return null;if(typeof r.getRootNode=="function"){const t=r.getRootNode();return t instanceof ShadowRoot?t:null}return r instanceof ShadowRoot?r:r.parentNode?Yc(r.parentNode):null},Zr=()=>{},dr=r=>{r.offsetHeight},Kc=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Ks=[],P_=r=>{document.readyState==="loading"?(Ks.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of Ks)t()}),Ks.push(r)):r()},Pe=()=>document.documentElement.dir==="rtl",Ie=r=>{P_(()=>{const t=Kc();if(t){const e=r.NAME,n=t.fn[e];t.fn[e]=r.jQueryInterface,t.fn[e].Constructor=r,t.fn[e].noConflict=()=>(t.fn[e]=n,r.jQueryInterface)}})},on=r=>{typeof r=="function"&&r()},Zc=(r,t,e=!0)=>{if(!e){on(r);return}const n=5,i=D_(t)+n;let s=!1;const a=({target:o})=>{o===t&&(s=!0,t.removeEventListener(bo,a),on(r))};t.addEventListener(bo,a),setTimeout(()=>{s||jc(t)},i)},qo=(r,t,e,n)=>{const i=r.length;let s=r.indexOf(t);return s===-1?!e&&n?r[i-1]:r[0]:(s+=e?1:-1,n&&(s=(s+i)%i),r[Math.max(0,Math.min(s,i-1))])},R_=/[^.]*(?=\..*)\.|.*/,I_=/\..*/,N_=/::\d+$/,Zs={};let Ml=1;const Jc={mouseenter:"mouseover",mouseleave:"mouseout"},O_=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Qc(r,t){return t&&`${t}::${Ml++}`||r.uidEvent||Ml++}function tu(r){const t=Qc(r);return r.uidEvent=t,Zs[t]=Zs[t]||{},Zs[t]}function F_(r,t){return function e(n){return Xo(n,{delegateTarget:r}),e.oneOff&&Y.off(r,n.type,t),t.apply(r,[n])}}function U_(r,t,e){return function n(i){const s=r.querySelectorAll(t);for(let{target:a}=i;a&&a!==this;a=a.parentNode)for(const o of s)if(o===a)return Xo(i,{delegateTarget:a}),n.oneOff&&Y.off(r,i.type,t,e),e.apply(a,[i])}}function eu(r,t,e=null){return Object.values(r).find(n=>n.callable===t&&n.delegationSelector===e)}function nu(r,t,e){const n=typeof t=="string",i=n?e:t||e;let s=iu(r);return O_.has(s)||(s=r),[n,i,s]}function El(r,t,e,n,i){if(typeof t!="string"||!r)return;let[s,a,o]=nu(t,e,n);t in Jc&&(a=(b=>function(f){if(!f.relatedTarget||f.relatedTarget!==f.delegateTarget&&!f.delegateTarget.contains(f.relatedTarget))return b.call(this,f)})(a));const l=tu(r),c=l[o]||(l[o]={}),u=eu(c,a,s?e:null);if(u){u.oneOff=u.oneOff&&i;return}const p=Qc(a,t.replace(R_,"")),h=s?U_(r,e,a):F_(r,a);h.delegationSelector=s?e:null,h.callable=a,h.oneOff=i,h.uidEvent=p,c[p]=h,r.addEventListener(o,h,s)}function yo(r,t,e,n,i){const s=eu(t[e],n,i);s&&(r.removeEventListener(e,s,Boolean(i)),delete t[e][s.uidEvent])}function z_(r,t,e,n){const i=t[e]||{};for(const s of Object.keys(i))if(s.includes(n)){const a=i[s];yo(r,t,e,a.callable,a.delegationSelector)}}function iu(r){return r=r.replace(I_,""),Jc[r]||r}const Y={on(r,t,e,n){El(r,t,e,n,!1)},one(r,t,e,n){El(r,t,e,n,!0)},off(r,t,e,n){if(typeof t!="string"||!r)return;const[i,s,a]=nu(t,e,n),o=a!==t,l=tu(r),c=l[a]||{},u=t.startsWith(".");if(typeof s<"u"){if(!Object.keys(c).length)return;yo(r,l,a,s,i?e:null);return}if(u)for(const p of Object.keys(l))z_(r,l,p,t.slice(1));for(const p of Object.keys(c)){const h=p.replace(N_,"");if(!o||t.includes(h)){const m=c[p];yo(r,l,a,m.callable,m.delegationSelector)}}},trigger(r,t,e){if(typeof t!="string"||!r)return null;const n=Kc(),i=iu(t),s=t!==i;let a=null,o=!0,l=!0,c=!1;s&&n&&(a=n.Event(t,e),n(r).trigger(a),o=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),c=a.isDefaultPrevented());let u=new Event(t,{bubbles:o,cancelable:!0});return u=Xo(u,e),c&&u.preventDefault(),l&&r.dispatchEvent(u),u.defaultPrevented&&a&&a.preventDefault(),u}};function Xo(r,t){for(const[e,n]of Object.entries(t||{}))try{r[e]=n}catch{Object.defineProperty(r,e,{configurable:!0,get(){return n}})}return r}const vn=new Map,Js={set(r,t,e){vn.has(r)||vn.set(r,new Map);const n=vn.get(r);if(!n.has(t)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,e)},get(r,t){return vn.has(r)&&vn.get(r).get(t)||null},remove(r,t){if(!vn.has(r))return;const e=vn.get(r);e.delete(t),e.size===0&&vn.delete(r)}};function wl(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function Qs(r){return r.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const hn={setDataAttribute(r,t,e){r.setAttribute(`data-bs-${Qs(t)}`,e)},removeDataAttribute(r,t){r.removeAttribute(`data-bs-${Qs(t)}`)},getDataAttributes(r){if(!r)return{};const t={},e=Object.keys(r.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of e){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=wl(r.dataset[n])}return t},getDataAttribute(r,t){return wl(r.getAttribute(`data-bs-${Qs(t)}`))}};class fr{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=un(e)?hn.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...un(e)?hn.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const n of Object.keys(e)){const i=e[n],s=t[n],a=un(s)?"element":C_(s);if(!new RegExp(i).test(a))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${i}".`)}}}const B_="5.2.3";class Be extends fr{constructor(t,e){super(),t=Mn(t),t&&(this._element=t,this._config=this._getConfig(e),Js.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Js.remove(this._element,this.constructor.DATA_KEY),Y.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){Zc(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return Js.get(Mn(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return B_}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const as=(r,t="hide")=>{const e=`click.dismiss${r.EVENT_KEY}`,n=r.NAME;Y.on(document,e,`[data-bs-dismiss="${n}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),En(this))return;const s=cn(this)||this.closest(`.${n}`);r.getOrCreateInstance(s)[t]()})},k_="alert",V_="bs.alert",ru=`.${V_}`,G_=`close${ru}`,H_=`closed${ru}`,W_="fade",$_="show";class ls extends Be{static get NAME(){return k_}close(){if(Y.trigger(this._element,G_).defaultPrevented)return;this._element.classList.remove($_);const e=this._element.classList.contains(W_);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),Y.trigger(this._element,H_),this.dispose()}static jQueryInterface(t){return this.each(function(){const e=ls.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}as(ls,"close");Ie(ls);const q_="button",X_="bs.button",j_=`.${X_}`,Y_=".data-api",K_="active",Tl='[data-bs-toggle="button"]',Z_=`click${j_}${Y_}`;class cs extends Be{static get NAME(){return q_}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(K_))}static jQueryInterface(t){return this.each(function(){const e=cs.getOrCreateInstance(this);t==="toggle"&&e[t]()})}}Y.on(document,Z_,Tl,r=>{r.preventDefault();const t=r.target.closest(Tl);cs.getOrCreateInstance(t).toggle()});Ie(cs);const Et={find(r,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,r))},findOne(r,t=document.documentElement){return Element.prototype.querySelector.call(t,r)},children(r,t){return[].concat(...r.children).filter(e=>e.matches(t))},parents(r,t){const e=[];let n=r.parentNode.closest(t);for(;n;)e.push(n),n=n.parentNode.closest(t);return e},prev(r,t){let e=r.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(r,t){let e=r.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(r){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,r).filter(e=>!En(e)&&Vi(e))}},J_="swipe",Gi=".bs.swipe",Q_=`touchstart${Gi}`,tv=`touchmove${Gi}`,ev=`touchend${Gi}`,nv=`pointerdown${Gi}`,iv=`pointerup${Gi}`,rv="touch",sv="pen",ov="pointer-event",av=40,lv={endCallback:null,leftCallback:null,rightCallback:null},cv={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Jr extends fr{constructor(t,e){super(),this._element=t,!(!t||!Jr.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return lv}static get DefaultType(){return cv}static get NAME(){return J_}dispose(){Y.off(this._element,Gi)}_start(t){if(!this._supportPointerEvents){this._deltaX=t.touches[0].clientX;return}this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX)}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),on(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=av)return;const e=t/this._deltaX;this._deltaX=0,e&&on(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Y.on(this._element,nv,t=>this._start(t)),Y.on(this._element,iv,t=>this._end(t)),this._element.classList.add(ov)):(Y.on(this._element,Q_,t=>this._start(t)),Y.on(this._element,tv,t=>this._move(t)),Y.on(this._element,ev,t=>this._end(t)))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&(t.pointerType===sv||t.pointerType===rv)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const uv="carousel",hv="bs.carousel",Cn=`.${hv}`,su=".data-api",dv="ArrowLeft",fv="ArrowRight",pv=500,Ji="next",_i="prev",yi="left",Xr="right",mv=`slide${Cn}`,to=`slid${Cn}`,gv=`keydown${Cn}`,_v=`mouseenter${Cn}`,vv=`mouseleave${Cn}`,xv=`dragstart${Cn}`,bv=`load${Cn}${su}`,yv=`click${Cn}${su}`,ou="carousel",Br="active",Sv="slide",Mv="carousel-item-end",Ev="carousel-item-start",wv="carousel-item-next",Tv="carousel-item-prev",au=".active",lu=".carousel-item",Av=au+lu,Cv=".carousel-item img",Lv=".carousel-indicators",Dv="[data-bs-slide], [data-bs-slide-to]",Pv='[data-bs-ride="carousel"]',Rv={[dv]:Xr,[fv]:yi},Iv={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Nv={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class pr extends Be{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=Et.findOne(Lv,this._element),this._addEventListeners(),this._config.ride===ou&&this.cycle()}static get Default(){return Iv}static get DefaultType(){return Nv}static get NAME(){return uv}next(){this._slide(Ji)}nextWhenVisible(){!document.hidden&&Vi(this._element)&&this.next()}prev(){this._slide(_i)}pause(){this._isSliding&&jc(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){Y.one(this._element,to,()=>this.cycle());return}this.cycle()}}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding){Y.one(this._element,to,()=>this.to(t));return}const n=this._getItemIndex(this._getActive());if(n===t)return;const i=t>n?Ji:_i;this._slide(i,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&Y.on(this._element,gv,t=>this._keydown(t)),this._config.pause==="hover"&&(Y.on(this._element,_v,()=>this.pause()),Y.on(this._element,vv,()=>this._maybeEnableCycle())),this._config.touch&&Jr.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const n of Et.find(Cv,this._element))Y.on(n,xv,i=>i.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(yi)),rightCallback:()=>this._slide(this._directionToOrder(Xr)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),pv+this._config.interval))}};this._swipeHelper=new Jr(this._element,e)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Rv[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=Et.findOne(au,this._indicatorsElement);e.classList.remove(Br),e.removeAttribute("aria-current");const n=Et.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);n&&(n.classList.add(Br),n.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const n=this._getActive(),i=t===Ji,s=e||qo(this._getItems(),n,i,this._config.wrap);if(s===n)return;const a=this._getItemIndex(s),o=m=>Y.trigger(this._element,m,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(n),to:a});if(o(mv).defaultPrevented||!n||!s)return;const c=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(a),this._activeElement=s;const u=i?Ev:Mv,p=i?wv:Tv;s.classList.add(p),dr(s),n.classList.add(u),s.classList.add(u);const h=()=>{s.classList.remove(u,p),s.classList.add(Br),n.classList.remove(Br,p,u),this._isSliding=!1,o(to)};this._queueCallback(h,n,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(Sv)}_getActive(){return Et.findOne(Av,this._element)}_getItems(){return Et.find(lu,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return Pe()?t===yi?_i:Ji:t===yi?Ji:_i}_orderToDirection(t){return Pe()?t===_i?yi:Xr:t===_i?Xr:yi}static jQueryInterface(t){return this.each(function(){const e=pr.getOrCreateInstance(this,t);if(typeof t=="number"){e.to(t);return}if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Y.on(document,yv,Dv,function(r){const t=cn(this);if(!t||!t.classList.contains(ou))return;r.preventDefault();const e=pr.getOrCreateInstance(t),n=this.getAttribute("data-bs-slide-to");if(n){e.to(n),e._maybeEnableCycle();return}if(hn.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});Y.on(window,bv,()=>{const r=Et.find(Pv);for(const t of r)pr.getOrCreateInstance(t)});Ie(pr);const Ov="collapse",Fv="bs.collapse",mr=`.${Fv}`,Uv=".data-api",zv=`show${mr}`,Bv=`shown${mr}`,kv=`hide${mr}`,Vv=`hidden${mr}`,Gv=`click${mr}${Uv}`,eo="show",Ei="collapse",kr="collapsing",Hv="collapsed",Wv=`:scope .${Ei} .${Ei}`,$v="collapse-horizontal",qv="width",Xv="height",jv=".collapse.show, .collapse.collapsing",So='[data-bs-toggle="collapse"]',Yv={parent:null,toggle:!0},Kv={parent:"(null|element)",toggle:"boolean"};class ar extends Be{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const n=Et.find(So);for(const i of n){const s=Xc(i),a=Et.find(s).filter(o=>o===this._element);s!==null&&a.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Yv}static get DefaultType(){return Kv}static get NAME(){return Ov}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(jv).filter(o=>o!==this._element).map(o=>ar.getOrCreateInstance(o,{toggle:!1}))),t.length&&t[0]._isTransitioning||Y.trigger(this._element,zv).defaultPrevented)return;for(const o of t)o.hide();const n=this._getDimension();this._element.classList.remove(Ei),this._element.classList.add(kr),this._element.style[n]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(kr),this._element.classList.add(Ei,eo),this._element.style[n]="",Y.trigger(this._element,Bv)},a=`scroll${n[0].toUpperCase()+n.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[n]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown()||Y.trigger(this._element,kv).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,dr(this._element),this._element.classList.add(kr),this._element.classList.remove(Ei,eo);for(const i of this._triggerArray){const s=cn(i);s&&!this._isShown(s)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const n=()=>{this._isTransitioning=!1,this._element.classList.remove(kr),this._element.classList.add(Ei),Y.trigger(this._element,Vv)};this._element.style[e]="",this._queueCallback(n,this._element,!0)}_isShown(t=this._element){return t.classList.contains(eo)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=Mn(t.parent),t}_getDimension(){return this._element.classList.contains($v)?qv:Xv}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(So);for(const e of t){const n=cn(e);n&&this._addAriaAndCollapsedClass([e],this._isShown(n))}}_getFirstLevelChildren(t){const e=Et.find(Wv,this._config.parent);return Et.find(t,this._config.parent).filter(n=>!e.includes(n))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const n of t)n.classList.toggle(Hv,!e),n.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return typeof t=="string"&&/show|hide/.test(t)&&(e.toggle=!1),this.each(function(){const n=ar.getOrCreateInstance(this,e);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t]()}})}}Y.on(document,Gv,So,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();const t=Xc(this),e=Et.find(t);for(const n of e)ar.getOrCreateInstance(n,{toggle:!1}).toggle()});Ie(ar);const Al="dropdown",Zv="bs.dropdown",ti=`.${Zv}`,jo=".data-api",Jv="Escape",Cl="Tab",Qv="ArrowUp",Ll="ArrowDown",t0=2,e0=`hide${ti}`,n0=`hidden${ti}`,i0=`show${ti}`,r0=`shown${ti}`,cu=`click${ti}${jo}`,uu=`keydown${ti}${jo}`,s0=`keyup${ti}${jo}`,Si="show",o0="dropup",a0="dropend",l0="dropstart",c0="dropup-center",u0="dropdown-center",Vn='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',h0=`${Vn}.${Si}`,jr=".dropdown-menu",d0=".navbar",f0=".navbar-nav",p0=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",m0=Pe()?"top-end":"top-start",g0=Pe()?"top-start":"top-end",_0=Pe()?"bottom-end":"bottom-start",v0=Pe()?"bottom-start":"bottom-end",x0=Pe()?"left-start":"right-start",b0=Pe()?"right-start":"left-start",y0="top",S0="bottom",M0={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},E0={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ke extends Be{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=Et.next(this._element,jr)[0]||Et.prev(this._element,jr)[0]||Et.findOne(jr,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return M0}static get DefaultType(){return E0}static get NAME(){return Al}toggle(){return this._isShown()?this.hide():this.show()}show(){if(En(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!Y.trigger(this._element,i0,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(f0))for(const n of[].concat(...document.body.children))Y.on(n,"mouseover",Zr);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Si),this._element.classList.add(Si),Y.trigger(this._element,r0,t)}}hide(){if(En(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!Y.trigger(this._element,e0,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const n of[].concat(...document.body.children))Y.off(n,"mouseover",Zr);this._popper&&this._popper.destroy(),this._menu.classList.remove(Si),this._element.classList.remove(Si),this._element.setAttribute("aria-expanded","false"),hn.removeDataAttribute(this._menu,"popper"),Y.trigger(this._element,n0,t)}}_getConfig(t){if(t=super._getConfig(t),typeof t.reference=="object"&&!un(t.reference)&&typeof t.reference.getBoundingClientRect!="function")throw new TypeError(`${Al.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(typeof $c>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;this._config.reference==="parent"?t=this._parent:un(this._config.reference)?t=Mn(this._config.reference):typeof this._config.reference=="object"&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=$o(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Si)}_getPlacement(){const t=this._parent;if(t.classList.contains(a0))return x0;if(t.classList.contains(l0))return b0;if(t.classList.contains(c0))return y0;if(t.classList.contains(u0))return S0;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return t.classList.contains(o0)?e?g0:m0:e?v0:_0}_detectNavbar(){return this._element.closest(d0)!==null}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(hn.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...typeof this._config.popperConfig=="function"?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:t,target:e}){const n=Et.find(p0,this._menu).filter(i=>Vi(i));n.length&&qo(n,e,t===Ll,!n.includes(e)).focus()}static jQueryInterface(t){return this.each(function(){const e=Ke.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}static clearMenus(t){if(t.button===t0||t.type==="keyup"&&t.key!==Cl)return;const e=Et.find(h0);for(const n of e){const i=Ke.getInstance(n);if(!i||i._config.autoClose===!1)continue;const s=t.composedPath(),a=s.includes(i._menu);if(s.includes(i._element)||i._config.autoClose==="inside"&&!a||i._config.autoClose==="outside"&&a||i._menu.contains(t.target)&&(t.type==="keyup"&&t.key===Cl||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:i._element};t.type==="click"&&(o.clickEvent=t),i._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),n=t.key===Jv,i=[Qv,Ll].includes(t.key);if(!i&&!n||e&&!n)return;t.preventDefault();const s=this.matches(Vn)?this:Et.prev(this,Vn)[0]||Et.next(this,Vn)[0]||Et.findOne(Vn,t.delegateTarget.parentNode),a=Ke.getOrCreateInstance(s);if(i){t.stopPropagation(),a.show(),a._selectMenuItem(t);return}a._isShown()&&(t.stopPropagation(),a.hide(),s.focus())}}Y.on(document,uu,Vn,Ke.dataApiKeydownHandler);Y.on(document,uu,jr,Ke.dataApiKeydownHandler);Y.on(document,cu,Ke.clearMenus);Y.on(document,s0,Ke.clearMenus);Y.on(document,cu,Vn,function(r){r.preventDefault(),Ke.getOrCreateInstance(this).toggle()});Ie(Ke);const Dl=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Pl=".sticky-top",Vr="padding-right",Rl="margin-right";class Mo{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Vr,e=>e+t),this._setElementAttributes(Dl,Vr,e=>e+t),this._setElementAttributes(Pl,Rl,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Vr),this._resetElementAttributes(Dl,Vr),this._resetElementAttributes(Pl,Rl)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),s=a=>{if(a!==this._element&&window.innerWidth>a.clientWidth+i)return;this._saveInitialAttribute(a,e);const o=window.getComputedStyle(a).getPropertyValue(e);a.style.setProperty(e,`${n(Number.parseFloat(o))}px`)};this._applyManipulationCallback(t,s)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&hn.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=i=>{const s=hn.getDataAttribute(i,e);if(s===null){i.style.removeProperty(e);return}hn.removeDataAttribute(i,e),i.style.setProperty(e,s)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(un(t)){e(t);return}for(const n of Et.find(t,this._element))e(n)}}const hu="backdrop",w0="fade",Il="show",Nl=`mousedown.bs.${hu}`,T0={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},A0={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class du extends fr{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return T0}static get DefaultType(){return A0}static get NAME(){return hu}show(t){if(!this._config.isVisible){on(t);return}this._append();const e=this._getElement();this._config.isAnimated&&dr(e),e.classList.add(Il),this._emulateAnimation(()=>{on(t)})}hide(t){if(!this._config.isVisible){on(t);return}this._getElement().classList.remove(Il),this._emulateAnimation(()=>{this.dispose(),on(t)})}dispose(){this._isAppended&&(Y.off(this._element,Nl),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(w0),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=Mn(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),Y.on(t,Nl,()=>{on(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){Zc(t,this._getElement(),this._config.isAnimated)}}const C0="focustrap",L0="bs.focustrap",Qr=`.${L0}`,D0=`focusin${Qr}`,P0=`keydown.tab${Qr}`,R0="Tab",I0="forward",Ol="backward",N0={autofocus:!0,trapElement:null},O0={autofocus:"boolean",trapElement:"element"};class fu extends fr{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return N0}static get DefaultType(){return O0}static get NAME(){return C0}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Y.off(document,Qr),Y.on(document,D0,t=>this._handleFocusin(t)),Y.on(document,P0,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,Y.off(document,Qr))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=Et.focusableChildren(e);n.length===0?e.focus():this._lastTabNavDirection===Ol?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===R0&&(this._lastTabNavDirection=t.shiftKey?Ol:I0)}}const F0="modal",U0="bs.modal",ke=`.${U0}`,z0=".data-api",B0="Escape",k0=`hide${ke}`,V0=`hidePrevented${ke}`,pu=`hidden${ke}`,mu=`show${ke}`,G0=`shown${ke}`,H0=`resize${ke}`,W0=`click.dismiss${ke}`,$0=`mousedown.dismiss${ke}`,q0=`keydown.dismiss${ke}`,X0=`click${ke}${z0}`,Fl="modal-open",j0="fade",Ul="show",no="modal-static",Y0=".modal.show",K0=".modal-dialog",Z0=".modal-body",J0='[data-bs-toggle="modal"]',Q0={backdrop:!0,focus:!0,keyboard:!0},tx={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Ui extends Be{constructor(t,e){super(t,e),this._dialog=Et.findOne(K0,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Mo,this._addEventListeners()}static get Default(){return Q0}static get DefaultType(){return tx}static get NAME(){return F0}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||Y.trigger(this._element,mu,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Fl),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||Y.trigger(this._element,k0).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ul),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])Y.off(t,ke);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new du({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new fu({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=Et.findOne(Z0,this._dialog);e&&(e.scrollTop=0),dr(this._element),this._element.classList.add(Ul);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Y.trigger(this._element,G0,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){Y.on(this._element,q0,t=>{if(t.key===B0){if(this._config.keyboard){t.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),Y.on(window,H0,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),Y.on(this._element,$0,t=>{Y.one(this._element,W0,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Fl),this._resetAdjustments(),this._scrollBar.reset(),Y.trigger(this._element,pu)})}_isAnimated(){return this._element.classList.contains(j0)}_triggerBackdropTransition(){if(Y.trigger(this._element,V0).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(no)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(no),this._queueCallback(()=>{this._element.classList.remove(no),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const i=Pe()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!n&&t){const i=Pe()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const n=Ui.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](e)}})}}Y.on(document,X0,J0,function(r){const t=cn(this);["A","AREA"].includes(this.tagName)&&r.preventDefault(),Y.one(t,mu,i=>{i.defaultPrevented||Y.one(t,pu,()=>{Vi(this)&&this.focus()})});const e=Et.findOne(Y0);e&&Ui.getInstance(e).hide(),Ui.getOrCreateInstance(t).toggle(this)});as(Ui);Ie(Ui);const ex="offcanvas",nx="bs.offcanvas",fn=`.${nx}`,gu=".data-api",ix=`load${fn}${gu}`,rx="Escape",zl="show",Bl="showing",kl="hiding",sx="offcanvas-backdrop",_u=".offcanvas.show",ox=`show${fn}`,ax=`shown${fn}`,lx=`hide${fn}`,Vl=`hidePrevented${fn}`,vu=`hidden${fn}`,cx=`resize${fn}`,ux=`click${fn}${gu}`,hx=`keydown.dismiss${fn}`,dx='[data-bs-toggle="offcanvas"]',fx={backdrop:!0,keyboard:!0,scroll:!1},px={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class wn extends Be{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return fx}static get DefaultType(){return px}static get NAME(){return ex}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||Y.trigger(this._element,ox,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Mo().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Bl);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(zl),this._element.classList.remove(Bl),Y.trigger(this._element,ax,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||Y.trigger(this._element,lx).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(kl),this._backdrop.hide();const e=()=>{this._element.classList.remove(zl,kl),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Mo().reset(),Y.trigger(this._element,vu)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){Y.trigger(this._element,Vl);return}this.hide()},e=Boolean(this._config.backdrop);return new du({className:sx,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new fu({trapElement:this._element})}_addEventListeners(){Y.on(this._element,hx,t=>{if(t.key===rx){if(!this._config.keyboard){Y.trigger(this._element,Vl);return}this.hide()}})}static jQueryInterface(t){return this.each(function(){const e=wn.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}Y.on(document,ux,dx,function(r){const t=cn(this);if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),En(this))return;Y.one(t,vu,()=>{Vi(this)&&this.focus()});const e=Et.findOne(_u);e&&e!==t&&wn.getInstance(e).hide(),wn.getOrCreateInstance(t).toggle(this)});Y.on(window,ix,()=>{for(const r of Et.find(_u))wn.getOrCreateInstance(r).show()});Y.on(window,cx,()=>{for(const r of Et.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(r).position!=="fixed"&&wn.getOrCreateInstance(r).hide()});as(wn);Ie(wn);const mx=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),gx=/^aria-[\w-]*$/i,_x=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,vx=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,xx=(r,t)=>{const e=r.nodeName.toLowerCase();return t.includes(e)?mx.has(e)?Boolean(_x.test(r.nodeValue)||vx.test(r.nodeValue)):!0:t.filter(n=>n instanceof RegExp).some(n=>n.test(e))},xu={"*":["class","dir","id","lang","role",gx],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function bx(r,t,e){if(!r.length)return r;if(e&&typeof e=="function")return e(r);const i=new window.DOMParser().parseFromString(r,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(const a of s){const o=a.nodeName.toLowerCase();if(!Object.keys(t).includes(o)){a.remove();continue}const l=[].concat(...a.attributes),c=[].concat(t["*"]||[],t[o]||[]);for(const u of l)xx(u,c)||a.removeAttribute(u.nodeName)}return i.body.innerHTML}const yx="TemplateFactory",Sx={allowList:xu,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Mx={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Ex={entry:"(string|element|function|null)",selector:"(string|element)"};class wx extends fr{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Sx}static get DefaultType(){return Mx}static get NAME(){return yx}getContent(){return Object.values(this._config.content).map(t=>this._resolvePossibleFunction(t)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[i,s]of Object.entries(this._config.content))this._setContent(t,s,i);const e=t.children[0],n=this._resolvePossibleFunction(this._config.extraClass);return n&&e.classList.add(...n.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,n]of Object.entries(t))super._typeCheckConfig({selector:e,entry:n},Ex)}_setContent(t,e,n){const i=Et.findOne(n,t);if(i){if(e=this._resolvePossibleFunction(e),!e){i.remove();return}if(un(e)){this._putElementInTemplate(Mn(e),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(e);return}i.textContent=e}}_maybeSanitize(t){return this._config.sanitize?bx(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return typeof t=="function"?t(this):t}_putElementInTemplate(t,e){if(this._config.html){e.innerHTML="",e.append(t);return}e.textContent=t.textContent}}const Tx="tooltip",Ax=new Set(["sanitize","allowList","sanitizeFn"]),io="fade",Cx="modal",Gr="show",Lx=".tooltip-inner",Gl=`.${Cx}`,Hl="hide.bs.modal",Qi="hover",ro="focus",Dx="click",Px="manual",Rx="hide",Ix="hidden",Nx="show",Ox="shown",Fx="inserted",Ux="click",zx="focusin",Bx="focusout",kx="mouseenter",Vx="mouseleave",Gx={AUTO:"auto",TOP:"top",RIGHT:Pe()?"left":"right",BOTTOM:"bottom",LEFT:Pe()?"right":"left"},Hx={allowList:xu,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,0],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Wx={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Hi extends Be{constructor(t,e){if(typeof $c>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Hx}static get DefaultType(){return Wx}static get NAME(){return Tx}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),Y.off(this._element.closest(Gl),Hl,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const t=Y.trigger(this._element,this.constructor.eventName(Nx)),n=(Yc(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!n)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:s}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(s.append(i),Y.trigger(this._element,this.constructor.eventName(Fx))),this._popper=this._createPopper(i),i.classList.add(Gr),"ontouchstart"in document.documentElement)for(const o of[].concat(...document.body.children))Y.on(o,"mouseover",Zr);const a=()=>{Y.trigger(this._element,this.constructor.eventName(Ox)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(a,this.tip,this._isAnimated())}hide(){if(!this._isShown()||Y.trigger(this._element,this.constructor.eventName(Rx)).defaultPrevented)return;if(this._getTipElement().classList.remove(Gr),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))Y.off(i,"mouseover",Zr);this._activeTrigger[Dx]=!1,this._activeTrigger[ro]=!1,this._activeTrigger[Qi]=!1,this._isHovered=null;const n=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),Y.trigger(this._element,this.constructor.eventName(Ix)))};this._queueCallback(n,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(io,Gr),e.classList.add(`bs-${this.constructor.NAME}-auto`);const n=L_(this.constructor.NAME).toString();return e.setAttribute("id",n),this._isAnimated()&&e.classList.add(io),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new wx({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Lx]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(io)}_isShown(){return this.tip&&this.tip.classList.contains(Gr)}_createPopper(t){const e=typeof this._config.placement=="function"?this._config.placement.call(this,t,this._element):this._config.placement,n=Gx[e.toUpperCase()];return $o(this._element,t,this._getPopperConfig(n))}_getOffset(){const{offset:t}=this._config;return typeof t=="string"?t.split(",").map(e=>Number.parseInt(e,10)):typeof t=="function"?e=>t(e,this._element):t}_resolvePossibleFunction(t){return typeof t=="function"?t.call(this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:n=>{this._getTipElement().setAttribute("data-popper-placement",n.state.placement)}}]};return{...e,...typeof this._config.popperConfig=="function"?this._config.popperConfig(e):this._config.popperConfig}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if(e==="click")Y.on(this._element,this.constructor.eventName(Ux),this._config.selector,n=>{this._initializeOnDelegatedTarget(n).toggle()});else if(e!==Px){const n=e===Qi?this.constructor.eventName(kx):this.constructor.eventName(zx),i=e===Qi?this.constructor.eventName(Vx):this.constructor.eventName(Bx);Y.on(this._element,n,this._config.selector,s=>{const a=this._initializeOnDelegatedTarget(s);a._activeTrigger[s.type==="focusin"?ro:Qi]=!0,a._enter()}),Y.on(this._element,i,this._config.selector,s=>{const a=this._initializeOnDelegatedTarget(s);a._activeTrigger[s.type==="focusout"?ro:Qi]=a._element.contains(s.relatedTarget),a._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},Y.on(this._element.closest(Gl),Hl,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=hn.getDataAttributes(this._element);for(const n of Object.keys(e))Ax.has(n)&&delete e[n];return t={...e,...typeof t=="object"&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=t.container===!1?document.body:Mn(t.container),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each(function(){const e=Hi.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Ie(Hi);const $x="popover",qx=".popover-header",Xx=".popover-body",jx={...Hi.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Yx={...Hi.DefaultType,content:"(null|string|element|function)"};class Yo extends Hi{static get Default(){return jx}static get DefaultType(){return Yx}static get NAME(){return $x}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[qx]:this._getTitle(),[Xx]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each(function(){const e=Yo.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Ie(Yo);const Kx="scrollspy",Zx="bs.scrollspy",Ko=`.${Zx}`,Jx=".data-api",Qx=`activate${Ko}`,Wl=`click${Ko}`,tb=`load${Ko}${Jx}`,eb="dropdown-item",vi="active",nb='[data-bs-spy="scroll"]',so="[href]",ib=".nav, .list-group",$l=".nav-link",rb=".nav-item",sb=".list-group-item",ob=`${$l}, ${rb} > ${$l}, ${sb}`,ab=".dropdown",lb=".dropdown-toggle",cb={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},ub={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class us extends Be{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return cb}static get DefaultType(){return ub}static get NAME(){return Kx}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=Mn(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,typeof t.threshold=="string"&&(t.threshold=t.threshold.split(",").map(e=>Number.parseFloat(e))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(Y.off(this._config.target,Wl),Y.on(this._config.target,Wl,so,t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const n=this._rootElement||window,i=e.offsetTop-this._element.offsetTop;if(n.scrollTo){n.scrollTo({top:i,behavior:"smooth"});return}n.scrollTop=i}}))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),t)}_observerCallback(t){const e=a=>this._targetLinks.get(`#${a.target.id}`),n=a=>{this._previousScrollData.visibleEntryTop=a.target.offsetTop,this._process(e(a))},i=(this._rootElement||document.documentElement).scrollTop,s=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const a of t){if(!a.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(a));continue}const o=a.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&o){if(n(a),!i)return;continue}!s&&!o&&n(a)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=Et.find(so,this._config.target);for(const e of t){if(!e.hash||En(e))continue;const n=Et.findOne(e.hash,this._element);Vi(n)&&(this._targetLinks.set(e.hash,e),this._observableSections.set(e.hash,n))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(vi),this._activateParents(t),Y.trigger(this._element,Qx,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains(eb)){Et.findOne(lb,t.closest(ab)).classList.add(vi);return}for(const e of Et.parents(t,ib))for(const n of Et.prev(e,ob))n.classList.add(vi)}_clearActiveClass(t){t.classList.remove(vi);const e=Et.find(`${so}.${vi}`,t);for(const n of e)n.classList.remove(vi)}static jQueryInterface(t){return this.each(function(){const e=us.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Y.on(window,tb,()=>{for(const r of Et.find(nb))us.getOrCreateInstance(r)});Ie(us);const hb="tab",db="bs.tab",ei=`.${db}`,fb=`hide${ei}`,pb=`hidden${ei}`,mb=`show${ei}`,gb=`shown${ei}`,_b=`click${ei}`,vb=`keydown${ei}`,xb=`load${ei}`,bb="ArrowLeft",ql="ArrowRight",yb="ArrowUp",Xl="ArrowDown",Gn="active",jl="fade",oo="show",Sb="dropdown",Mb=".dropdown-toggle",Eb=".dropdown-menu",ao=":not(.dropdown-toggle)",wb='.list-group, .nav, [role="tablist"]',Tb=".nav-item, .list-group-item",Ab=`.nav-link${ao}, .list-group-item${ao}, [role="tab"]${ao}`,bu='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',lo=`${Ab}, ${bu}`,Cb=`.${Gn}[data-bs-toggle="tab"], .${Gn}[data-bs-toggle="pill"], .${Gn}[data-bs-toggle="list"]`;class zi extends Be{constructor(t){super(t),this._parent=this._element.closest(wb),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Y.on(this._element,vb,e=>this._keydown(e)))}static get NAME(){return hb}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),n=e?Y.trigger(e,fb,{relatedTarget:t}):null;Y.trigger(t,mb,{relatedTarget:e}).defaultPrevented||n&&n.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){if(!t)return;t.classList.add(Gn),this._activate(cn(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.add(oo);return}t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),Y.trigger(t,gb,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(jl))}_deactivate(t,e){if(!t)return;t.classList.remove(Gn),t.blur(),this._deactivate(cn(t));const n=()=>{if(t.getAttribute("role")!=="tab"){t.classList.remove(oo);return}t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),Y.trigger(t,pb,{relatedTarget:e})};this._queueCallback(n,t,t.classList.contains(jl))}_keydown(t){if(![bb,ql,yb,Xl].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=[ql,Xl].includes(t.key),n=qo(this._getChildren().filter(i=>!En(i)),t.target,e,!0);n&&(n.focus({preventScroll:!0}),zi.getOrCreateInstance(n).show())}_getChildren(){return Et.find(lo,this._parent)}_getActiveElem(){return this._getChildren().find(t=>this._elemIsActive(t))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const n of e)this._setInitialAttributesOnChild(n)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),n=this._getOuterElement(t);t.setAttribute("aria-selected",e),n!==t&&this._setAttributeIfNotExists(n,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=cn(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`#${t.id}`))}_toggleDropDown(t,e){const n=this._getOuterElement(t);if(!n.classList.contains(Sb))return;const i=(s,a)=>{const o=Et.findOne(s,n);o&&o.classList.toggle(a,e)};i(Mb,Gn),i(Eb,oo),n.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,n){t.hasAttribute(e)||t.setAttribute(e,n)}_elemIsActive(t){return t.classList.contains(Gn)}_getInnerElement(t){return t.matches(lo)?t:Et.findOne(lo,t)}_getOuterElement(t){return t.closest(Tb)||t}static jQueryInterface(t){return this.each(function(){const e=zi.getOrCreateInstance(this);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t]()}})}}Y.on(document,_b,bu,function(r){["A","AREA"].includes(this.tagName)&&r.preventDefault(),!En(this)&&zi.getOrCreateInstance(this).show()});Y.on(window,xb,()=>{for(const r of Et.find(Cb))zi.getOrCreateInstance(r)});Ie(zi);const Lb="toast",Db="bs.toast",Ln=`.${Db}`,Pb=`mouseover${Ln}`,Rb=`mouseout${Ln}`,Ib=`focusin${Ln}`,Nb=`focusout${Ln}`,Ob=`hide${Ln}`,Fb=`hidden${Ln}`,Ub=`show${Ln}`,zb=`shown${Ln}`,Bb="fade",Yl="hide",Hr="show",Wr="showing",kb={animation:"boolean",autohide:"boolean",delay:"number"},Vb={animation:!0,autohide:!0,delay:5e3};class hs extends Be{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Vb}static get DefaultType(){return kb}static get NAME(){return Lb}show(){if(Y.trigger(this._element,Ub).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Bb);const e=()=>{this._element.classList.remove(Wr),Y.trigger(this._element,zb),this._maybeScheduleHide()};this._element.classList.remove(Yl),dr(this._element),this._element.classList.add(Hr,Wr),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||Y.trigger(this._element,Ob).defaultPrevented)return;const e=()=>{this._element.classList.add(Yl),this._element.classList.remove(Wr,Hr),Y.trigger(this._element,Fb)};this._element.classList.add(Wr),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Hr),super.dispose()}isShown(){return this._element.classList.contains(Hr)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){Y.on(this._element,Pb,t=>this._onInteraction(t,!0)),Y.on(this._element,Rb,t=>this._onInteraction(t,!1)),Y.on(this._element,Ib,t=>this._onInteraction(t,!0)),Y.on(this._element,Nb,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=hs.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}as(hs);Ie(hs);const gr=new Ng,Gb=new Ro(3,5),Hb=new Ao({color:"#A9FC7C",wireframe:!0}),Eo=new an(Gb,Hb);gr.add(Eo);const qe={width:window.innerWidth,height:window.innerHeight},yu=new zg(4210752,5);yu.position.set(0,10,10);gr.add(yu);const Jn=new Le(45,qe.width/qe.height);Jn.position.z=10;gr.add(Jn);const Su=document.querySelector(".webgl"),_r=new Do({canvas:Su,alpha:!0});_r.setPixelRatio(2);_r.setSize(qe.width,qe.height);_r.render(gr,Jn);const ds=new Bg(Jn,Su);ds.enableDamping=!0;ds.enablePan=!1;ds.enableZoom=!1;window.addEventListener("resize",()=>{qe.width=window.innerWidth,qe.height=window.innerHeight,Jn.updateProjectionMatrix(),Jn.aspect=qe.width/qe.height,_r.setSize(qe.width,qe.height)});const Mu=()=>{ds.update(),Eo.rotation.x+=.001,Eo.rotation.y+=.001,_r.render(gr,Jn),window.requestAnimationFrame(Mu)};Mu();var Wb=document.querySelector(".right-direction"),$b=document.querySelector(".left-direction");window.addEventListener("scroll",function(){Wb.style.transform="translateX("+window.pageYOffset+"px)",$b.style.transform="translateX(-"+window.pageYOffset+"px)"});const qb=document.querySelector(".thanks-text"),Xb={},jb=new IntersectionObserver(function(r,t){r.forEach(e=>{e.isIntersecting&&(console.log(e),e.target.classList.add("add"),t.unobserve(e.target))})},Xb);jb.observe(qb);const Kl=["Let's start a project together","Lass uns gemeinsam ein Project starten","Comencemos un proyecto juntos","Commençons un projet ensemble","Начнем проект вместе","让我们一起开始一个项目"];function Yb(){let r=1;setInterval(function(){const t=Kl[r],e=document.getElementById("loop");e.style.opacity=0,setTimeout(function(){e.innerHTML=t,e.style.opacity=1},500),r=(r+1)%Kl.length},2e3)}Yb();
