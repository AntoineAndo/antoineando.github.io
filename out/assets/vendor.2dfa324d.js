var Pu=Object.defineProperty;var Vo=Object.getOwnPropertySymbols;var Du=Object.prototype.hasOwnProperty,Iu=Object.prototype.propertyIsEnumerable;var Ho=(a,e,t)=>e in a?Pu(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,Wo=(a,e)=>{for(var t in e||(e={}))Du.call(e,t)&&Ho(a,t,e[t]);if(Vo)for(var t of Vo(e))Iu.call(e,t)&&Ho(a,t,e[t]);return a};/**
 * @license
 * Copyright 2010-2021 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xo="133",Fu=0,qo=1,Uu=2,Yo=1,Bu=2,Ji=3,Qi=0,ht=1,Bn=2,jo=1,xn=0,Ki=1,Zo=2,Jo=3,Qo=4,Nu=5,Kn=100,ku=101,Ou=102,Ko=103,$o=104,zu=200,Gu=201,Vu=202,Hu=203,el=204,tl=205,Wu=206,Xu=207,qu=208,Yu=209,ju=210,Zu=0,Ju=1,Qu=2,ea=3,Ku=4,$u=5,eh=6,th=7,Or=0,nh=1,ih=2,Nn=0,rh=1,sh=2,ah=3,oh=4,lh=5,nl=300,zr=301,Gr=302,ta=303,na=304,Vr=306,ia=307,ra=1e3,kt=1001,sa=1002,ft=1003,il=1004,rl=1005,Dt=1006,ch=1007,Hr=1008,yn=1009,uh=1010,hh=1011,Wr=1012,dh=1013,Xr=1014,_n=1015,$n=1016,fh=1017,ph=1018,mh=1019,$i=1020,gh=1021,ei=1022,Mt=1023,vh=1024,xh=1025,yh=Mt,ti=1026,er=1027,_h=1028,bh=1029,Mh=1030,wh=1031,Sh=1032,Th=1033,sl=33776,al=33777,ol=33778,ll=33779,cl=35840,ul=35841,hl=35842,dl=35843,Eh=36196,fl=37492,pl=37496,Ah=37808,Lh=37809,Ch=37810,Rh=37811,Ph=37812,Dh=37813,Ih=37814,Fh=37815,Uh=37816,Bh=37817,Nh=37818,kh=37819,Oh=37820,zh=37821,Gh=36492,Vh=37840,Hh=37841,Wh=37842,Xh=37843,qh=37844,Yh=37845,jh=37846,Zh=37847,Jh=37848,Qh=37849,Kh=37850,$h=37851,ed=37852,td=37853,nd=2200,id=2201,rd=2202,qr=2300,Yr=2301,aa=2302,ni=2400,ii=2401,jr=2402,oa=2500,ml=2501,sd=0,wt=3e3,kn=3001,la=3007,ca=3002,ad=3003,gl=3004,vl=3005,xl=3006,od=3200,yl=3201,ri=0,ld=1,ua=7680,cd=519,tr=35044,Zr=35048,_l="300 es";class On{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const n=r.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}}const ha=Math.PI/180,da=180/Math.PI,gt=[];for(let a=0;a<256;a++)gt[a]=(a<16?"0":"")+a.toString(16);const ud=typeof crypto!="undefined"&&"randomUUID"in crypto;function $t(){if(ud)return crypto.randomUUID().toUpperCase();const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gt[a&255]+gt[a>>8&255]+gt[a>>16&255]+gt[a>>24&255]+"-"+gt[e&255]+gt[e>>8&255]+"-"+gt[e>>16&15|64]+gt[e>>24&255]+"-"+gt[t&63|128]+gt[t>>8&255]+"-"+gt[t>>16&255]+gt[t>>24&255]+gt[r&255]+gt[r>>8&255]+gt[r>>16&255]+gt[r>>24&255]).toUpperCase()}function Ot(a,e,t){return Math.max(e,Math.min(t,a))}function hd(a,e){return(a%e+e)%e}function fa(a,e,t){return(1-t)*a+t*e}function bl(a){return(a&a-1)==0&&a!==0}function dd(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}class le{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,s=this.y-e.y;return this.x=i*r-s*n+e.x,this.y=i*n+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}le.prototype.isVector2=!0;class pt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,n,i,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=t,u[4]=i,u[5]=l,u[6]=r,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],u=r[4],d=r[7],h=r[2],f=r[5],g=r[8],v=n[0],y=n[3],m=n[6],p=n[1],b=n[4],x=n[7],M=n[2],S=n[5],_=n[8];return i[0]=s*v+o*p+l*M,i[3]=s*y+o*b+l*S,i[6]=s*m+o*x+l*_,i[1]=c*v+u*p+d*M,i[4]=c*y+u*b+d*S,i[7]=c*m+u*x+d*_,i[2]=h*v+f*p+g*M,i[5]=h*y+f*b+g*S,i[8]=h*m+f*x+g*_,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-r*i*u+r*o*l+n*i*c-n*s*l}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,h=o*l-u*i,f=c*i-s*l,g=t*d+r*h+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(n*c-u*r)*v,e[2]=(o*r-n*s)*v,e[3]=h*v,e[4]=(u*t-n*l)*v,e[5]=(n*i-o*t)*v,e[6]=f*v,e[7]=(r*l-c*t)*v,e[8]=(s*t-r*i)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,s,o){const l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){const r=this.elements;return r[0]*=e,r[3]*=e,r[6]*=e,r[1]*=t,r[4]*=t,r[7]*=t,this}rotate(e){const t=Math.cos(e),r=Math.sin(e),n=this.elements,i=n[0],s=n[3],o=n[6],l=n[1],c=n[4],u=n[7];return n[0]=t*i+r*l,n[3]=t*s+r*c,n[6]=t*o+r*u,n[1]=-r*i+t*l,n[4]=-r*s+t*c,n[7]=-r*o+t*u,this}translate(e,t){const r=this.elements;return r[0]+=e*r[2],r[3]+=e*r[5],r[6]+=e*r[8],r[1]+=t*r[2],r[4]+=t*r[5],r[7]+=t*r[8],this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}pt.prototype.isMatrix3=!0;function Ml(a){if(a.length===0)return-1/0;let e=a[0];for(let t=1,r=a.length;t<r;++t)a[t]>e&&(e=a[t]);return e}function Jr(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}let si;class ai{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=Jr("canvas")),si.width=e.width,si.height=e.height;const r=si.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}}let fd=0;class vt extends On{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,r=kt,n=kt,i=Dt,s=Hr,o=Mt,l=yn,c=1,u=wt){super();Object.defineProperty(this,"id",{value:fd++}),this.uuid=$t(),this.name="",this.image=e,this.mipmaps=[],this.mapping=t,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const n=this.image;if(n.uuid===void 0&&(n.uuid=$t()),!t&&e.images[n.uuid]===void 0){let i;if(Array.isArray(n)){i=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?i.push(pa(n[s].image)):i.push(pa(n[s]))}else i=pa(n);e.images[n.uuid]={uuid:n.uuid,url:i}}r.image=n.uuid}return t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ra:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case sa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ra:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case sa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&this.version++}}vt.DEFAULT_IMAGE=void 0;vt.DEFAULT_MAPPING=nl;vt.prototype.isTexture=!0;function pa(a){return typeof HTMLImageElement!="undefined"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&a instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&a instanceof ImageBitmap?ai.getDataURL(a):a.data?{data:Array.prototype.slice.call(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}class He{constructor(e=0,t=0,r=0,n=1){this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*n+s[12]*i,this.y=s[1]*t+s[5]*r+s[9]*n+s[13]*i,this.z=s[2]*t+s[6]*r+s[10]*n+s[14]*i,this.w=s[3]*t+s[7]*r+s[11]*n+s[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i;const s=.01,o=.1,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],v=l[2],y=l[6],m=l[10];if(Math.abs(u-h)<s&&Math.abs(d-v)<s&&Math.abs(g-y)<s){if(Math.abs(u+h)<o&&Math.abs(d+v)<o&&Math.abs(g+y)<o&&Math.abs(c+f+m-3)<o)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(f+1)/2,M=(m+1)/2,S=(u+h)/4,_=(d+v)/4,E=(g+y)/4;return b>x&&b>M?b<s?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(b),n=S/r,i=_/r):x>M?x<s?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(x),r=S/n,i=E/n):M<s?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(M),r=_/i,n=E/i),this.set(r,n,i,t),this}let p=Math.sqrt((y-g)*(y-g)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(p)<.001&&(p=1),this.x=(y-g)/p,this.y=(d-v)/p,this.z=(h-u)/p,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}He.prototype.isVector4=!0;class en extends On{constructor(e,t,r={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new He(0,0,e,t),this.scissorTest=!1,this.viewport=new He(0,0,e,t),this.texture=new vt(void 0,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:Dt,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Wo({},this.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}en.prototype.isWebGLRenderTarget=!0;class pd extends en{constructor(e,t,r){super(e,t);const n=this.texture;this.texture=[];for(let i=0;i<r;i++)this.texture[i]=n.clone()}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.texture.length;n<i;n++)this.texture[n].image.width=e,this.texture[n].image.height=t,this.texture[n].image.depth=r;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,r=e.texture.length;t<r;t++)this.texture[t]=e.texture[t].clone();return this}}pd.prototype.isWebGLMultipleRenderTargets=!0;class wl extends en{constructor(e,t,r){super(e,t,r);this.samples=4}copy(e){return super.copy.call(this,e),this.samples=e.samples,this}}wl.prototype.isWebGLMultisampleRenderTarget=!0;class It{constructor(e=0,t=0,r=0,n=1){this._x=e,this._y=t,this._z=r,this._w=n}static slerp(e,t,r,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),r.slerpQuaternions(e,t,n)}static slerpFlat(e,t,r,n,i,s,o){let l=r[n+0],c=r[n+1],u=r[n+2],d=r[n+3];const h=i[s+0],f=i[s+1],g=i[s+2],v=i[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==h||c!==f||u!==g){let y=1-o;const m=l*h+c*f+u*g+d*v,p=m>=0?1:-1,b=1-m*m;if(b>Number.EPSILON){const M=Math.sqrt(b),S=Math.atan2(M,m*p);y=Math.sin(y*S)/M,o=Math.sin(o*S)/M}const x=o*p;if(l=l*y+h*x,c=c*y+f*x,u=u*y+g*x,d=d*y+v*x,y===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,n,i,s){const o=r[n],l=r[n+1],c=r[n+2],u=r[n+3],d=i[s],h=i[s+1],f=i[s+2],g=i[s+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const r=e._x,n=e._y,i=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(n/2),d=o(i/2),h=l(r/2),f=l(n/2),g=l(i/2);switch(s){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],n=t[4],i=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=r+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(i-c)*f,this._z=(s-n)*f}else if(r>o&&r>d){const f=2*Math.sqrt(1+r-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(n+s)/f,this._z=(i+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-r-d);this._w=(i-c)/f,this._x=(n+s)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-r-o);this._w=(s-n)/f,this._x=(i+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,n=e._y,i=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+s*o+n*c-i*l,this._y=n*u+s*l+i*o-r*c,this._z=i*u+s*c+r*l-n*o,this._w=s*u-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,n=this._y,i=this._z,s=this._w;let o=s*e._w+r*e._x+n*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=n,this._z=i,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*r+t*this._x,this._y=f*n+t*this._y,this._z=f*i+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=s*d+this._w*h,this._x=r*d+this._x*h,this._y=n*d+this._y*h,this._z=i*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),n=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(n),r*Math.sin(i),r*Math.cos(i),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}It.prototype.isQuaternion=!0;class R{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,n=this.z,i=e.elements,s=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*s,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*s,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,n=this.z,i=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*n-o*r,u=l*r+o*t-i*n,d=l*n+i*r-s*t,h=-i*t-s*r-o*n;return this.x=c*l+h*-i+u*-o-d*-s,this.y=u*l+h*-s+d*-i-c*-o,this.z=d*l+h*-o+c*-s-u*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,n=e.y,i=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*s-r*l,this.z=r*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ma.copy(this).projectOnVector(e),this.sub(ma)}reflect(e){return this.sub(ma.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Ot(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,r){return r!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}R.prototype.isVector3=!0;const ma=new R,Sl=new It;class Ht{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,r=1/0,n=1/0,i=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],d=e[l+1],h=e[l+2];u<t&&(t=u),d<r&&(r=d),h<n&&(n=h),u>i&&(i=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,r,n),this.max.set(i,s,o),this}setFromBufferAttribute(e){let t=1/0,r=1/0,n=1/0,i=-1/0,s=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),d=e.getY(l),h=e.getZ(l);u<t&&(t=u),d<r&&(r=d),h<n&&(n=h),u>i&&(i=u),d>s&&(s=d),h>o&&(o=h)}return this.min.set(t,r,n),this.max.set(i,s,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);const t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),ga.copy(t.boundingBox),ga.applyMatrix4(e.matrixWorld),this.union(ga));const r=e.children;for(let n=0,i=r.length;n<i;n++)this.expandByObject(r[n]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,nr),nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Qr.subVectors(this.max,ir),oi.subVectors(e.a,ir),li.subVectors(e.b,ir),ci.subVectors(e.c,ir),bn.subVectors(li,oi),Mn.subVectors(ci,li),zn.subVectors(oi,ci);let t=[0,-bn.z,bn.y,0,-Mn.z,Mn.y,0,-zn.z,zn.y,bn.z,0,-bn.x,Mn.z,0,-Mn.x,zn.z,0,-zn.x,-bn.y,bn.x,0,-Mn.y,Mn.x,0,-zn.y,zn.x,0];return!va(t,oi,li,ci,Qr)||(t=[1,0,0,0,1,0,0,0,1],!va(t,oi,li,ci,Qr))?!1:(Kr.crossVectors(bn,Mn),t=[Kr.x,Kr.y,Kr.z],va(t,oi,li,ci,Qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return nr.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(nr).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}Ht.prototype.isBox3=!0;const cn=[new R,new R,new R,new R,new R,new R,new R,new R],nr=new R,ga=new Ht,oi=new R,li=new R,ci=new R,bn=new R,Mn=new R,zn=new R,ir=new R,Qr=new R,Kr=new R,Gn=new R;function va(a,e,t,r,n){for(let i=0,s=a.length-3;i<=s;i+=3){Gn.fromArray(a,i);const o=n.x*Math.abs(Gn.x)+n.y*Math.abs(Gn.y)+n.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=r.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const md=new Ht,Tl=new R,xa=new R,ya=new R;class Vn{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):md.setFromPoints(e).getCenter(r);let n=0;for(let i=0,s=e.length;i<s;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.add(ya.multiplyScalar(n/r)),this.radius+=n}return this}union(e){return xa.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Tl.copy(e.center).add(xa)),this.expandByPoint(Tl.copy(e.center).sub(xa)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new R,_a=new R,$r=new R,wn=new R,ba=new R,es=new R,Ma=new R;class Hn{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(r).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){_a.copy(e).add(t).multiplyScalar(.5),$r.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(_a);const i=e.distanceTo(t)*.5,s=-this.direction.dot($r),o=wn.dot(this.direction),l=-wn.dot($r),c=wn.lengthSq(),u=Math.abs(1-s*s);let d,h,f,g;if(u>0)if(d=s*l-o,h=s*o-l,g=i*u,d>=0)if(h>=-g)if(h<=g){const v=1/u;d*=v,h*=v,f=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=i,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h=-i,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-s*i+o)),h=d>0?-i:Math.min(Math.max(-i,-l),i),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-i,-l),i),f=h*(h+2*l)+c):(d=Math.max(0,-(s*i+o)),h=d>0?i:Math.min(Math.max(-i,-l),i),f=-d*d+h*(h+2*l)+c);else h=s>0?-i:i,d=Math.max(0,-(s*h+o)),f=-d*d+h*(h+2*l)+c;return r&&r.copy(this.direction).multiplyScalar(d).add(this.origin),n&&n.copy($r).multiplyScalar(h).add(_a),f}intersectSphere(e,t){un.subVectors(e.center,this.origin);const r=un.dot(this.direction),n=un.dot(un)-r*r,i=e.radius*e.radius;if(n>i)return null;const s=Math.sqrt(i-n),o=r-s,l=r+s;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(r=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(r=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),u>=0?(i=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),r>s||i>n||((i>r||r!==r)&&(r=i),(s<n||n!==n)&&(n=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,r,n,i){ba.subVectors(t,e),es.subVectors(r,e),Ma.crossVectors(ba,es);let s=this.direction.dot(Ma),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(es.crossVectors(wn,es));if(l<0)return null;const c=o*this.direction.dot(ba.cross(wn));if(c<0||l+c>s)return null;const u=-o*wn.dot(Ma);return u<0?null:this.at(u/s,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,r,n,i,s,o,l,c,u,d,h,f,g,v,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=g,m[11]=v,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,n=1/ui.setFromMatrixColumn(e,0).length(),i=1/ui.setFromMatrixColumn(e,1).length(),s=1/ui.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,r=e.x,n=e.y,i=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),u=Math.cos(i),d=Math.sin(i);if(e.order==="XYZ"){const h=s*u,f=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h+v*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=f*o-g,t[6]=v+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,v=c*d;t[0]=h-v*o,t[4]=-s*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*u,t[9]=v-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,f=s*d,g=o*u,v=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,f=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=g*d+f,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-v*d}else if(e.order==="XZY"){const h=s*l,f=s*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=s*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gd,e,vd)}lookAt(e,t,r){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Sn.crossVectors(r,zt),Sn.lengthSq()===0&&(Math.abs(r.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Sn.crossVectors(r,zt)),Sn.normalize(),ts.crossVectors(zt,Sn),n[0]=Sn.x,n[4]=ts.x,n[8]=zt.x,n[1]=Sn.y,n[5]=ts.y,n[9]=zt.y,n[2]=Sn.z,n[6]=ts.z,n[10]=zt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,n=t.elements,i=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],u=r[1],d=r[5],h=r[9],f=r[13],g=r[2],v=r[6],y=r[10],m=r[14],p=r[3],b=r[7],x=r[11],M=r[15],S=n[0],_=n[4],E=n[8],B=n[12],F=n[1],L=n[5],D=n[9],C=n[13],I=n[2],N=n[6],U=n[10],k=n[14],Q=n[3],ae=n[7],ve=n[11],Z=n[15];return i[0]=s*S+o*F+l*I+c*Q,i[4]=s*_+o*L+l*N+c*ae,i[8]=s*E+o*D+l*U+c*ve,i[12]=s*B+o*C+l*k+c*Z,i[1]=u*S+d*F+h*I+f*Q,i[5]=u*_+d*L+h*N+f*ae,i[9]=u*E+d*D+h*U+f*ve,i[13]=u*B+d*C+h*k+f*Z,i[2]=g*S+v*F+y*I+m*Q,i[6]=g*_+v*L+y*N+m*ae,i[10]=g*E+v*D+y*U+m*ve,i[14]=g*B+v*C+y*k+m*Z,i[3]=p*S+b*F+x*I+M*Q,i[7]=p*_+b*L+x*N+M*ae,i[11]=p*E+b*D+x*U+M*ve,i[15]=p*B+b*C+x*k+M*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],v=e[7],y=e[11],m=e[15];return g*(+i*l*d-n*c*d-i*o*h+r*c*h+n*o*f-r*l*f)+v*(+t*l*f-t*c*h+i*s*h-n*s*f+n*c*u-i*l*u)+y*(+t*c*d-t*o*f-i*s*d+r*s*f+i*o*u-r*c*u)+m*(-n*o*u-t*l*d+t*o*h+n*s*d-r*s*h+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],v=e[13],y=e[14],m=e[15],p=d*y*c-v*h*c+v*l*f-o*y*f-d*l*m+o*h*m,b=g*h*c-u*y*c-g*l*f+s*y*f+u*l*m-s*h*m,x=u*v*c-g*d*c+g*o*f-s*v*f-u*o*m+s*d*m,M=g*d*l-u*v*l-g*o*h+s*v*h+u*o*y-s*d*y,S=t*p+r*b+n*x+i*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/S;return e[0]=p*_,e[1]=(v*h*i-d*y*i-v*n*f+r*y*f+d*n*m-r*h*m)*_,e[2]=(o*y*i-v*l*i+v*n*c-r*y*c-o*n*m+r*l*m)*_,e[3]=(d*l*i-o*h*i-d*n*c+r*h*c+o*n*f-r*l*f)*_,e[4]=b*_,e[5]=(u*y*i-g*h*i+g*n*f-t*y*f-u*n*m+t*h*m)*_,e[6]=(g*l*i-s*y*i-g*n*c+t*y*c+s*n*m-t*l*m)*_,e[7]=(s*h*i-u*l*i+u*n*c-t*h*c-s*n*f+t*l*f)*_,e[8]=x*_,e[9]=(g*d*i-u*v*i-g*r*f+t*v*f+u*r*m-t*d*m)*_,e[10]=(s*v*i-g*o*i+g*r*c-t*v*c-s*r*m+t*o*m)*_,e[11]=(u*o*i-s*d*i-u*r*c+t*d*c+s*r*f-t*o*f)*_,e[12]=M*_,e[13]=(u*v*n-g*d*n+g*r*h-t*v*h-u*r*y+t*d*y)*_,e[14]=(g*o*n-s*v*n-g*r*l+t*v*l+s*r*y-t*o*y)*_,e[15]=(s*d*n-u*o*n+u*r*l-t*d*l-s*r*h+t*o*h)*_,this}scale(e){const t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),n=Math.sin(t),i=1-r,s=e.x,o=e.y,l=e.z,c=i*s,u=i*o;return this.set(c*s+r,c*o-n*l,c*l+n*o,0,c*o+n*l,u*o+r,u*l-n*s,0,c*l-n*o,u*l+n*s,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,s){return this.set(1,r,i,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){const n=this.elements,i=t._x,s=t._y,o=t._z,l=t._w,c=i+i,u=s+s,d=o+o,h=i*c,f=i*u,g=i*d,v=s*u,y=s*d,m=o*d,p=l*c,b=l*u,x=l*d,M=r.x,S=r.y,_=r.z;return n[0]=(1-(v+m))*M,n[1]=(f+x)*M,n[2]=(g-b)*M,n[3]=0,n[4]=(f-x)*S,n[5]=(1-(h+m))*S,n[6]=(y+p)*S,n[7]=0,n[8]=(g+b)*_,n[9]=(y-p)*_,n[10]=(1-(h+v))*_,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){const n=this.elements;let i=ui.set(n[0],n[1],n[2]).length();const s=ui.set(n[4],n[5],n[6]).length(),o=ui.set(n[8],n[9],n[10]).length();this.determinant()<0&&(i=-i),e.x=n[12],e.y=n[13],e.z=n[14],jt.copy(this);const c=1/i,u=1/s,d=1/o;return jt.elements[0]*=c,jt.elements[1]*=c,jt.elements[2]*=c,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=d,jt.elements[9]*=d,jt.elements[10]*=d,t.setFromRotationMatrix(jt),r.x=i,r.y=s,r.z=o,this}makePerspective(e,t,r,n,i,s){s===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*i/(t-e),c=2*i/(r-n),u=(t+e)/(t-e),d=(r+n)/(r-n),h=-(s+i)/(s-i),f=-2*s*i/(s-i);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,r,n,i,s){const o=this.elements,l=1/(t-e),c=1/(r-n),u=1/(s-i),d=(t+e)*l,h=(r+n)*c,f=(s+i)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}Ce.prototype.isMatrix4=!0;const ui=new R,jt=new Ce,gd=new R(0,0,0),vd=new R(1,1,1),Sn=new R,ts=new R,zt=new R,El=new Ce,Al=new It;class hi{constructor(e=0,t=0,r=0,n=hi.DefaultOrder){this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],u=n[9],d=n[2],h=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-s,i)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new R(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}hi.prototype.isEuler=!0;hi.DefaultOrder="XYZ";hi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ll{constructor(){this.mask=1|0}set(e){this.mask=1<<e|0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=4294967295|0}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}}let xd=0;const Cl=new R,di=new It,hn=new Ce,ns=new R,rr=new R,yd=new R,_d=new It,Rl=new R(1,0,0),Pl=new R(0,1,0),Dl=new R(0,0,1),bd={type:"added"},Il={type:"removed"};class ze extends On{constructor(){super();Object.defineProperty(this,"id",{value:xd++}),this.uuid=$t(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DefaultUp.clone();const e=new R,t=new hi,r=new It,n=new R(1,1,1);function i(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ce},normalMatrix:{value:new pt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=ze.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.multiply(di),this}rotateOnWorldAxis(e,t){return di.setFromAxisAngle(e,t),this.quaternion.premultiply(di),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Dl,e)}translateOnAxis(e,t){return Cl.copy(e).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Dl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ns.copy(e):ns.set(e,t,r);const n=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(rr,ns,this.up):hn.lookAt(ns,rr,this.up),this.quaternion.setFromRotationMatrix(hn),n&&(hn.extractRotation(n.matrixWorld),di.setFromRotationMatrix(hn),this.quaternion.premultiply(di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Il)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Il)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},r.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];i(e.shapes,d)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),h=s(e.skeletons),f=s(e.animations);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),h.length>0&&(r.skeletons=h),f.length>0&&(r.animations=f)}return r.object=n,r;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const n=e.children[r];this.add(n.clone())}return this}}ze.DefaultUp=new R(0,1,0);ze.DefaultMatrixAutoUpdate=!0;ze.prototype.isObject3D=!0;const Zt=new R,dn=new R,wa=new R,fn=new R,fi=new R,pi=new R,Fl=new R,Sa=new R,Ta=new R,Ea=new R;class lt{constructor(e=new R,t=new R,r=new R){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Zt.subVectors(e,t),n.cross(Zt);const i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){Zt.subVectors(n,t),dn.subVectors(r,t),wa.subVectors(e,t);const s=Zt.dot(Zt),o=Zt.dot(dn),l=Zt.dot(wa),c=dn.dot(dn),u=dn.dot(wa),d=s*c-o*o;if(d===0)return i.set(-2,-1,-1);const h=1/d,f=(c*l-o*u)*h,g=(s*u-o*l)*h;return i.set(1-f-g,g,f)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,r,n,i,s,o,l){return this.getBarycoord(e,t,r,n,fn),l.set(0,0),l.addScaledVector(i,fn.x),l.addScaledVector(s,fn.y),l.addScaledVector(o,fn.z),l}static isFrontFacing(e,t,r,n){return Zt.subVectors(r,t),dn.subVectors(e,t),Zt.cross(dn).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Zt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return lt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,n,i){return lt.getUV(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,n=this.b,i=this.c;let s,o;fi.subVectors(n,r),pi.subVectors(i,r),Sa.subVectors(e,r);const l=fi.dot(Sa),c=pi.dot(Sa);if(l<=0&&c<=0)return t.copy(r);Ta.subVectors(e,n);const u=fi.dot(Ta),d=pi.dot(Ta);if(u>=0&&d<=u)return t.copy(n);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(r).addScaledVector(fi,s);Ea.subVectors(e,i);const f=fi.dot(Ea),g=pi.dot(Ea);if(g>=0&&f<=g)return t.copy(i);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(pi,o);const y=u*g-f*d;if(y<=0&&d-u>=0&&f-g>=0)return Fl.subVectors(i,n),o=(d-u)/(d-u+(f-g)),t.copy(n).addScaledVector(Fl,o);const m=1/(y+v+h);return s=v*m,o=h*m,t.copy(r).addScaledVector(fi,s).addScaledVector(pi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Md=0;class St extends On{constructor(){super();Object.defineProperty(this,"id",{value:Md++}),this.uuid=$t(),this.name="",this.type="Material",this.fog=!0,this.blending=Ki,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.format=Mt,this.transparent=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===jo;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenTint&&this.sheenTint.isColor&&(r.sheenTint=this.sheenTint.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularTint&&this.specularTint.isColor&&(r.specularTint=this.specularTint.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularTintMap&&this.specularTintMap.isTexture&&(r.specularTintMap=this.specularTintMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationTint!==void 0&&(r.attenuationTint=this.attenuationTint.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(r.blending=this.blending),this.side!==Qi&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.format!==Mt&&(r.format=this.format),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData);function n(i){const s=[];for(const o in i){const l=i[o];delete l.metadata,s.push(l)}return s}if(t){const i=n(e.textures),s=n(e.images);i.length>0&&(r.textures=i),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}St.prototype.isMaterial=!0;const Ul={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jt={h:0,s:0,l:0},is={h:0,s:0,l:0};function Aa(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function La(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ca(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}class Se{constructor(e,t,r){return t===void 0&&r===void 0?this.set(e):this.setRGB(e,t,r)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,r){return this.r=e,this.g=t,this.b=r,this}setHSL(e,t,r){if(e=hd(e,1),t=Ot(t,0,1),r=Ot(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,i=2*r-n;this.r=Aa(i,n,e+1/3),this.g=Aa(i,n,e),this.b=Aa(i,n,e-1/3)}return this}setStyle(e){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const i=r[1],s=r[2];switch(i){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,t(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,t(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const o=parseFloat(n[1])/360,l=parseInt(n[2],10)/100,c=parseInt(n[3],10)/100;return t(n[4]),this.setHSL(o,l,c)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],i=n.length;if(i===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,this;if(i===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=Ul[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copyGammaToLinear(e,t=2){return this.r=Math.pow(e.r,t),this.g=Math.pow(e.g,t),this.b=Math.pow(e.b,t),this}copyLinearToGamma(e,t=2){const r=t>0?1/t:1;return this.r=Math.pow(e.r,r),this.g=Math.pow(e.g,r),this.b=Math.pow(e.b,r),this}convertGammaToLinear(e){return this.copyGammaToLinear(this,e),this}convertLinearToGamma(e){return this.copyLinearToGamma(this,e),this}copySRGBToLinear(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}copyLinearToSRGB(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,r=this.g,n=this.b,i=Math.max(t,r,n),s=Math.min(t,r,n);let o,l;const c=(s+i)/2;if(s===i)o=0,l=0;else{const u=i-s;switch(l=c<=.5?u/(i+s):u/(2-i-s),i){case t:o=(r-n)/u+(r<n?6:0);break;case r:o=(n-t)/u+2;break;case n:o=(t-r)/u+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,r){return this.getHSL(Jt),Jt.h+=e,Jt.s+=t,Jt.l+=r,this.setHSL(Jt.h,Jt.s,Jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Jt),e.getHSL(is);const r=fa(Jt.h,is.h,t),n=fa(Jt.s,is.s,t),i=fa(Jt.l,is.l,t);return this.setHSL(r,n,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Se.NAMES=Ul;Se.prototype.isColor=!0;Se.prototype.r=1;Se.prototype.g=1;Se.prototype.b=1;class rs extends St{constructor(e){super();this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}rs.prototype.isMeshBasicMaterial=!0;const je=new R,ss=new le;class dt{constructor(e,t,r){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r===!0,this.usage=tr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let s=e[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),s=new Se),t[r++]=s.r,t[r++]=s.g,t[r++]=s.b}return this}copyVector2sArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let s=e[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),s=new le),t[r++]=s.x,t[r++]=s.y}return this}copyVector3sArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let s=e[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),s=new R),t[r++]=s.x,t[r++]=s.y,t[r++]=s.z}return this}copyVector4sArray(e){const t=this.array;let r=0;for(let n=0,i=e.length;n<i;n++){let s=e[n];s===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),s=new He),t[r++]=s.x,t[r++]=s.y,t[r++]=s.z,t[r++]=s.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)je.x=this.getX(t),je.y=this.getY(t),je.z=this.getZ(t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}dt.prototype.isBufferAttribute=!0;class Bl extends dt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Nl extends dt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class wd extends dt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}wd.prototype.isFloat16BufferAttribute=!0;class st extends dt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Sd=0;const Wt=new Ce,Ra=new ze,mi=new R,Gt=new Ht,sr=new Ht,mt=new R;class Ke extends On{constructor(){super();Object.defineProperty(this,"id",{value:Sd++}),this.uuid=$t(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ml(e)>65535?Nl:Bl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const i=new pt().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,r){return Wt.makeTranslation(e,t,r),this.applyMatrix4(Wt),this}scale(e,t,r){return Wt.makeScale(e,t,r),this.applyMatrix4(Wt),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(e){const t=[];for(let r=0,n=e.length;r<n;r++){const i=e[r];t.push(i.x,i.y,i.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){const i=t[r];Gt.setFromBufferAttribute(i),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const r=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Gt.min,sr.min),Gt.expandByPoint(mt),mt.addVectors(Gt.max,sr.max),Gt.expandByPoint(mt)):(Gt.expandByPoint(sr.min),Gt.expandByPoint(sr.max))}Gt.getCenter(r);let n=0;for(let i=0,s=e.count;i<s;i++)mt.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(mt));if(t)for(let i=0,s=t.length;i<s;i++){const o=t[i],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)mt.fromBufferAttribute(o,c),l&&(mi.fromBufferAttribute(e,c),mt.add(mi)),n=Math.max(n,r.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,n=t.position.array,i=t.normal.array,s=t.uv.array,o=n.length/3;t.tangent===void 0&&this.setAttribute("tangent",new dt(new Float32Array(4*o),4));const l=t.tangent.array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new R,u[F]=new R;const d=new R,h=new R,f=new R,g=new le,v=new le,y=new le,m=new R,p=new R;function b(F,L,D){d.fromArray(n,F*3),h.fromArray(n,L*3),f.fromArray(n,D*3),g.fromArray(s,F*2),v.fromArray(s,L*2),y.fromArray(s,D*2),h.sub(d),f.sub(d),v.sub(g),y.sub(g);const C=1/(v.x*y.y-y.x*v.y);!isFinite(C)||(m.copy(h).multiplyScalar(y.y).addScaledVector(f,-v.y).multiplyScalar(C),p.copy(f).multiplyScalar(v.x).addScaledVector(h,-y.x).multiplyScalar(C),c[F].add(m),c[L].add(m),c[D].add(m),u[F].add(p),u[L].add(p),u[D].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:r.length}]);for(let F=0,L=x.length;F<L;++F){const D=x[F],C=D.start,I=D.count;for(let N=C,U=C+I;N<U;N+=3)b(r[N+0],r[N+1],r[N+2])}const M=new R,S=new R,_=new R,E=new R;function B(F){_.fromArray(i,F*3),E.copy(_);const L=c[F];M.copy(L),M.sub(_.multiplyScalar(_.dot(L))).normalize(),S.crossVectors(E,L);const C=S.dot(u[F])<0?-1:1;l[F*4]=M.x,l[F*4+1]=M.y,l[F*4+2]=M.z,l[F*4+3]=C}for(let F=0,L=x.length;F<L;++F){const D=x[F],C=D.start,I=D.count;for(let N=C,U=C+I;N<U;N+=3)B(r[N+0]),B(r[N+1]),B(r[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new dt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,f=r.count;h<f;h++)r.setXYZ(h,0,0,0);const n=new R,i=new R,s=new R,o=new R,l=new R,c=new R,u=new R,d=new R;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),y=e.getX(h+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,v),s.fromBufferAttribute(t,y),u.subVectors(s,i),d.subVectors(n,i),u.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,y),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(y,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)n.fromBufferAttribute(t,h+0),i.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,i),d.subVectors(n,i),u.cross(d),r.setXYZ(h+0,u.x,u.y,u.z),r.setXYZ(h+1,u.x,u.y,u.z),r.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const r=this.attributes;for(const n in r){if(e.attributes[n]===void 0)continue;const s=r[n].array,o=e.attributes[n],l=o.array,c=o.itemSize*t,u=Math.min(l.length,s.length-c);for(let d=0,h=c;d<u;d++,h++)s[h]=l[d]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,y=l.length;v<y;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)h[g++]=c[f++]}return new dt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ke,r=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,r);t.setAttribute(o,c)}const i=this.morphAttributes;for(const o in i){const l=[],c=i[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,r);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let i=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(n[l]=u,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const n=e.attributes;for(const c in n){const u=n[c];this.setAttribute(c,u.clone(t))}const i=e.morphAttributes;for(const c in i){const u=[],d=i[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Ke.prototype.isBufferGeometry=!0;const kl=new Ce,gi=new Hn,Pa=new Vn,Tn=new R,En=new R,An=new R,Da=new R,Ia=new R,Fa=new R,as=new R,os=new R,ls=new R,cs=new le,us=new le,hs=new le,Ua=new R,ds=new R;class xt extends ze{constructor(e=new Ke,t=new rs){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const r=this.geometry,n=this.material,i=this.matrixWorld;if(n===void 0||(r.boundingSphere===null&&r.computeBoundingSphere(),Pa.copy(r.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)===!1)||(kl.copy(i).invert(),gi.copy(e.ray).applyMatrix4(kl),r.boundingBox!==null&&gi.intersectsBox(r.boundingBox)===!1))return;let s;if(r.isBufferGeometry){const o=r.index,l=r.attributes.position,c=r.morphAttributes.position,u=r.morphTargetsRelative,d=r.attributes.uv,h=r.attributes.uv2,f=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(n))for(let v=0,y=f.length;v<y;v++){const m=f[v],p=n[m.materialIndex],b=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,S=x;M<S;M+=3){const _=o.getX(M),E=o.getX(M+1),B=o.getX(M+2);s=fs(this,p,e,gi,l,c,u,d,h,_,E,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(o.count,g.start+g.count);for(let m=v,p=y;m<p;m+=3){const b=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);s=fs(this,n,e,gi,l,c,u,d,h,b,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(n))for(let v=0,y=f.length;v<y;v++){const m=f[v],p=n[m.materialIndex],b=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=b,S=x;M<S;M+=3){const _=M,E=M+1,B=M+2;s=fs(this,p,e,gi,l,c,u,d,h,_,E,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,g.start),y=Math.min(l.count,g.start+g.count);for(let m=v,p=y;m<p;m+=3){const b=m,x=m+1,M=m+2;s=fs(this,n,e,gi,l,c,u,d,h,b,x,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}else r.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}xt.prototype.isMesh=!0;function Td(a,e,t,r,n,i,s,o){let l;if(e.side===ht?l=r.intersectTriangle(s,i,n,!0,o):l=r.intersectTriangle(n,i,s,e.side!==Bn,o),l===null)return null;ds.copy(o),ds.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(ds);return c<t.near||c>t.far?null:{distance:c,point:ds.clone(),object:a}}function fs(a,e,t,r,n,i,s,o,l,c,u,d){Tn.fromBufferAttribute(n,c),En.fromBufferAttribute(n,u),An.fromBufferAttribute(n,d);const h=a.morphTargetInfluences;if(i&&h){as.set(0,0,0),os.set(0,0,0),ls.set(0,0,0);for(let g=0,v=i.length;g<v;g++){const y=h[g],m=i[g];y!==0&&(Da.fromBufferAttribute(m,c),Ia.fromBufferAttribute(m,u),Fa.fromBufferAttribute(m,d),s?(as.addScaledVector(Da,y),os.addScaledVector(Ia,y),ls.addScaledVector(Fa,y)):(as.addScaledVector(Da.sub(Tn),y),os.addScaledVector(Ia.sub(En),y),ls.addScaledVector(Fa.sub(An),y)))}Tn.add(as),En.add(os),An.add(ls)}a.isSkinnedMesh&&(a.boneTransform(c,Tn),a.boneTransform(u,En),a.boneTransform(d,An));const f=Td(a,e,t,r,Tn,En,An,Ua);if(f){o&&(cs.fromBufferAttribute(o,c),us.fromBufferAttribute(o,u),hs.fromBufferAttribute(o,d),f.uv=lt.getUV(Ua,Tn,En,An,cs,us,hs,new le)),l&&(cs.fromBufferAttribute(l,c),us.fromBufferAttribute(l,u),hs.fromBufferAttribute(l,d),f.uv2=lt.getUV(Ua,Tn,En,An,cs,us,hs,new le));const g={a:c,b:u,c:d,normal:new R,materialIndex:0};lt.getNormal(Tn,En,An,g.normal),f.face=g}return f}class ar extends Ke{constructor(e=1,t=1,r=1,n=1,i=1,s=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:s};const o=this;n=Math.floor(n),i=Math.floor(i),s=Math.floor(s);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,r,t,e,s,i,0),g("z","y","x",1,-1,r,t,-e,s,i,1),g("x","z","y",1,1,e,r,t,n,s,2),g("x","z","y",1,-1,e,r,-t,n,s,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(d,2));function g(v,y,m,p,b,x,M,S,_,E,B){const F=x/_,L=M/E,D=x/2,C=M/2,I=S/2,N=_+1,U=E+1;let k=0,Q=0;const ae=new R;for(let ve=0;ve<U;ve++){const Z=ve*L-C;for(let fe=0;fe<N;fe++){const X=fe*F-D;ae[v]=X*p,ae[y]=Z*b,ae[m]=I,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[y]=0,ae[m]=S>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(fe/_),d.push(1-ve/E),k+=1}}for(let ve=0;ve<E;ve++)for(let Z=0;Z<_;Z++){const fe=h+Z+N*ve,X=h+Z+N*(ve+1),$=h+(Z+1)+N*(ve+1),xe=h+(Z+1)+N*ve;l.push(fe,X,xe),l.push(X,$,xe),Q+=6}o.addGroup(f,Q,B),f+=Q,h+=k}}static fromJSON(e){return new ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vi(a){const e={};for(const t in a){e[t]={};for(const r in a[t]){const n=a[t][r];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][r]=n.clone():Array.isArray(n)?e[t][r]=n.slice():e[t][r]=n}}return e}function Tt(a){const e={};for(let t=0;t<a.length;t++){const r=vi(a[t]);for(const n in r)e[n]=r[n]}return e}const Ol={clone:vi,merge:Tt};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends St{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Ed,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vi(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const s=this.uniforms[n].value;s&&s.isTexture?t.uniforms[n]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[n]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[n]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[n]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[n]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[n]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[n]={type:"m4",value:s.toArray()}:t.uniforms[n]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const r={};for(const n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}Wn.prototype.isShaderMaterial=!0;class Ba extends ze{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ba.prototype.isCamera=!0;class Ft extends Ba{constructor(e=50,t=1,r=.1,n=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,n,i,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;i+=s.offsetX*n/l,t-=s.offsetY*r/c,n*=s.width/l,r*=s.height/c}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Ft.prototype.isPerspectiveCamera=!0;const xi=90,yi=1;class Na extends ze{constructor(e,t,r){super();if(this.type="CubeCamera",r.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=r;const n=new Ft(xi,yi,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new R(1,0,0)),this.add(n);const i=new Ft(xi,yi,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(-1,0,0)),this.add(i);const s=new Ft(xi,yi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new R(0,1,0)),this.add(s);const o=new Ft(xi,yi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new R(0,-1,0)),this.add(o);const l=new Ft(xi,yi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new Ft(xi,yi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget,[n,i,s,o,l,c]=this.children,u=e.xr.enabled,d=e.getRenderTarget();e.xr.enabled=!1;const h=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,n),e.setRenderTarget(r,1),e.render(t,i),e.setRenderTarget(r,2),e.render(t,s),e.setRenderTarget(r,3),e.render(t,o),e.setRenderTarget(r,4),e.render(t,l),r.texture.generateMipmaps=h,e.setRenderTarget(r,5),e.render(t,c),e.setRenderTarget(d),e.xr.enabled=u}}class ps extends vt{constructor(e,t,r,n,i,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:zr;super(e,t,r,n,i,s,o,l,c,u);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}ps.prototype.isCubeTexture=!0;class zl extends en{constructor(e,t,r){Number.isInteger(t)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),t=r);super(e,e,t);t=t||{},this.texture=new ps(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Mt,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ar(5,5,5),i=new Wn({name:"CubemapFromEquirect",uniforms:vi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ht,blending:xn});i.uniforms.tEquirect.value=t;const s=new xt(n,i),o=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Dt),new Na(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,n){const i=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,n);e.setRenderTarget(i)}}zl.prototype.isWebGLCubeRenderTarget=!0;const ka=new R,Ld=new R,Cd=new pt;class pn{constructor(e=new R(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const n=ka.subVectors(r,t).cross(Ld.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const r=e.delta(ka),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(r).multiplyScalar(i).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Cd.getNormalMatrix(e),n=this.coplanarPoint(ka).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}pn.prototype.isPlane=!0;const _i=new Vn,ms=new R;class gs{constructor(e=new pn,t=new pn,r=new pn,n=new pn,i=new pn,s=new pn){this.planes=[e,t,r,n,i,s]}set(e,t,r,n,i,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e){const t=this.planes,r=e.elements,n=r[0],i=r[1],s=r[2],o=r[3],l=r[4],c=r[5],u=r[6],d=r[7],h=r[8],f=r[9],g=r[10],v=r[11],y=r[12],m=r[13],p=r[14],b=r[15];return t[0].setComponents(o-n,d-l,v-h,b-y).normalize(),t[1].setComponents(o+n,d+l,v+h,b+y).normalize(),t[2].setComponents(o+i,d+c,v+f,b+m).normalize(),t[3].setComponents(o-i,d-c,v-f,b-m).normalize(),t[4].setComponents(o-s,d-u,v-g,b-p).normalize(),t[5].setComponents(o+s,d+u,v+g,b+p).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const n=t[r];if(ms.x=n.normal.x>0?e.max.x:e.min.x,ms.y=n.normal.y>0?e.max.y:e.min.y,ms.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Gl(){let a=null,e=!1,t=null,r=null;function n(i,s){t(i,s),r=a.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(r=a.requestAnimationFrame(n),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){a=i}}}function Rd(a,e){const t=e.isWebGL2,r=new WeakMap;function n(c,u){const d=c.array,h=c.usage,f=a.createBuffer();a.bindBuffer(u,f),a.bufferData(u,d,h),c.onUploadCallback();let g=5126;return d instanceof Float32Array?g=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c.isFloat16BufferAttribute?t?g=5131:console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."):g=5123:d instanceof Int16Array?g=5122:d instanceof Uint32Array?g=5125:d instanceof Int32Array?g=5124:d instanceof Int8Array?g=5120:(d instanceof Uint8Array||d instanceof Uint8ClampedArray)&&(g=5121),{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function i(c,u,d){const h=u.array,f=u.updateRange;a.bindBuffer(d,c),f.count===-1?a.bufferSubData(d,0,h):(t?a.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):a.bufferSubData(d,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),r.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=r.get(c);u&&(a.deleteBuffer(u.buffer),r.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=r.get(c);(!h||h.version<c.version)&&r.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=r.get(c);d===void 0?r.set(c,n(c,u)):d.version<c.version&&(i(d.buffer,c,u),d.version=c.version)}return{get:s,remove:o,update:l}}class bi extends Ke{constructor(e=1,t=1,r=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};const i=e/2,s=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],v=[],y=[];for(let m=0;m<u;m++){const p=m*h-s;for(let b=0;b<c;b++){const x=b*d-i;g.push(x,-p,0),v.push(0,0,1),y.push(b/o),y.push(1-m/l)}}for(let m=0;m<l;m++)for(let p=0;p<o;p++){const b=p+c*m,x=p+c*(m+1),M=p+1+c*(m+1),S=p+1+c*m;f.push(b,x,S),f.push(x,M,S)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(y,2))}static fromJSON(e){return new bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ud=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd="vec3 transformed = vec3( position );",kd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
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
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenTint, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenTint * ( D * V );
}
#endif`,zd=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Zd=`#define PI 3.141592653589793
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
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
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
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
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
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 );
		vec2 f = fract( uv );
		uv += 0.5 - f;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		vec3 tl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x += texelSize;
		vec3 tr = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.y += texelSize;
		vec3 br = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		uv.x -= texelSize;
		vec3 bl = envMapTexelToLinear( texture2D( envMap, uv ) ).rgb;
		vec3 tm = mix( tl, tr, f.x );
		vec3 bm = mix( bl, br, f.x );
		return mix( tm, bm, f.y );
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
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
#endif`,Qd=`vec3 transformedNormal = objectNormal;
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
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$d=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value ) {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,sf=`#ifdef USE_ENVMAP
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
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,of=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,uf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,mf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,xf=`uniform bool receiveShadow;
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
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
#endif`,yf=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
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
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,_f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Mf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Sf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularTintFactor = specularTint;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARTINTMAP
			specularTintFactor *= specularTintMapTexelToLinear( texture2D( specularTintMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularTintFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularTintFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_SHEEN
	material.sheenTint = sheenTint;
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
#endif`,Tf=`struct PhysicalMaterial {
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
	#ifdef USE_SHEEN
		vec3 sheenTint;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
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
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
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
		reflectedLight.directSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenTint, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
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
}`,Ef=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
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
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,If=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,zf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
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
#endif`,Vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
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
vec3 geometryNormal = normal;`,Hf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
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
#endif`,jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Jf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Qf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sp=`#ifdef USE_SHADOWMAP
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
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
#endif`,ap=`#ifdef USE_SHADOWMAP
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
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
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
#endif`,op=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,lp=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
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
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
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
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dp=`#ifdef USE_SKINNING
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
#endif`,fp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vp=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationTint, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationTint;
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
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
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
#endif`,yp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,_p=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,wp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Rp=`#include <common>
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
}`,Pp=`#if DEPTH_PACKING == 3200
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
}`,Dp=`#define DISTANCE
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
}`,Ip=`#define DISTANCE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bp=`uniform float scale;
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
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 diffuse;
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
}`,kp=`#include <common>
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
}`,Op=`uniform vec3 diffuse;
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
#include <cube_uv_reflection_fragment>
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
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
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
}`,zp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
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
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
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
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
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
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define MATCAP
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
}`,Hp=`#define MATCAP
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
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,qp=`#define PHONG
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
}`,Yp=`#define PHONG
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
#include <cube_uv_reflection_fragment>
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
}`,jp=`#define STANDARD
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
}`,Zp=`#define STANDARD
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
	uniform vec3 specularTint;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARTINTMAP
		uniform sampler2D specularTintMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenTint;
	uniform float sheenRoughness;
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
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - clearcoat * Fcc ) + clearcoatSpecular * clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define TOON
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
}`,Qp=`#define TOON
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
}`,Kp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,$p=`uniform vec3 diffuse;
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
}`,em=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nm=`uniform float rotation;
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
}`,im=`uniform vec3 diffuse;
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
}`,Ue={alphamap_fragment:Pd,alphamap_pars_fragment:Dd,alphatest_fragment:Id,alphatest_pars_fragment:Fd,aomap_fragment:Ud,aomap_pars_fragment:Bd,begin_vertex:Nd,beginnormal_vertex:kd,bsdfs:Od,bumpmap_pars_fragment:zd,clipping_planes_fragment:Gd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Hd,clipping_planes_vertex:Wd,color_fragment:Xd,color_pars_fragment:qd,color_pars_vertex:Yd,color_vertex:jd,common:Zd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Qd,displacementmap_pars_vertex:Kd,displacementmap_vertex:$d,emissivemap_fragment:ef,emissivemap_pars_fragment:tf,encodings_fragment:nf,encodings_pars_fragment:rf,envmap_fragment:sf,envmap_common_pars_fragment:af,envmap_pars_fragment:of,envmap_pars_vertex:lf,envmap_physical_pars_fragment:yf,envmap_vertex:cf,fog_vertex:uf,fog_pars_vertex:hf,fog_fragment:df,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_vertex:vf,lights_pars_begin:xf,lights_toon_fragment:_f,lights_toon_pars_fragment:bf,lights_phong_fragment:Mf,lights_phong_pars_fragment:wf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Tf,lights_fragment_begin:Ef,lights_fragment_maps:Af,lights_fragment_end:Lf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Df,map_fragment:If,map_pars_fragment:Ff,map_particle_fragment:Uf,map_particle_pars_fragment:Bf,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:kf,morphnormal_vertex:Of,morphtarget_pars_vertex:zf,morphtarget_vertex:Gf,normal_fragment_begin:Vf,normal_fragment_maps:Hf,normal_pars_fragment:Wf,normal_pars_vertex:Xf,normal_vertex:qf,normalmap_pars_fragment:Yf,clearcoat_normal_fragment_begin:jf,clearcoat_normal_fragment_maps:Zf,clearcoat_pars_fragment:Jf,output_fragment:Qf,packing:Kf,premultiplied_alpha_fragment:$f,project_vertex:ep,dithering_fragment:tp,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:rp,shadowmap_pars_fragment:sp,shadowmap_pars_vertex:ap,shadowmap_vertex:op,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:up,skinning_vertex:hp,skinnormal_vertex:dp,specularmap_fragment:fp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:vp,transmission_pars_fragment:xp,uv_pars_fragment:yp,uv_pars_vertex:_p,uv_vertex:bp,uv2_pars_fragment:Mp,uv2_pars_vertex:wp,uv2_vertex:Sp,worldpos_vertex:Tp,background_vert:Ep,background_frag:Ap,cube_vert:Lp,cube_frag:Cp,depth_vert:Rp,depth_frag:Pp,distanceRGBA_vert:Dp,distanceRGBA_frag:Ip,equirect_vert:Fp,equirect_frag:Up,linedashed_vert:Bp,linedashed_frag:Np,meshbasic_vert:kp,meshbasic_frag:Op,meshlambert_vert:zp,meshlambert_frag:Gp,meshmatcap_vert:Vp,meshmatcap_frag:Hp,meshnormal_vert:Wp,meshnormal_frag:Xp,meshphong_vert:qp,meshphong_frag:Yp,meshphysical_vert:jp,meshphysical_frag:Zp,meshtoon_vert:Jp,meshtoon_frag:Qp,points_vert:Kp,points_frag:$p,shadow_vert:em,shadow_frag:tm,sprite_vert:nm,sprite_frag:im},_e={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pt},uv2Transform:{value:new pt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pt}}},tn={basic:{uniforms:Tt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Tt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.fog,_e.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Tt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Tt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Tt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Tt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Tt([_e.points,_e.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Tt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Tt([_e.common,_e.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Tt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Tt([_e.sprite,_e.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},cube:{uniforms:Tt([_e.envmap,{opacity:{value:1}}]),vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Tt([_e.common,_e.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Tt([_e.lights,_e.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};tn.physical={uniforms:Tt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new le(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenTint:{value:new Se(0)},sheenRoughness:{value:0},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationTint:{value:new Se(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularTint:{value:new Se(1,1,1)},specularTintMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};function rm(a,e,t,r,n){const i=new Se(0);let s=0,o,l,c=null,u=0,d=null;function h(g,v){let y=!1,m=v.isScene===!0?v.background:null;m&&m.isTexture&&(m=e.get(m));const p=a.xr,b=p.getSession&&p.getSession();b&&b.environmentBlendMode==="additive"&&(m=null),m===null?f(i,s):m&&m.isColor&&(f(m,1),y=!0),(a.autoClear||y)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Vr)?(l===void 0&&(l=new xt(new ar(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:vi(tn.cube.uniforms),vertexShader:tn.cube.vertexShader,fragmentShader:tn.cube.fragmentShader,side:ht,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(x,M,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(c!==m||u!==m.version||d!==a.toneMapping)&&(l.material.needsUpdate=!0,c=m,u=m.version,d=a.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(o===void 0&&(o=new xt(new bi(2,2),new Wn({name:"BackgroundMaterial",uniforms:vi(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(o)),o.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),o.material.uniforms.uvTransform.value.copy(m.matrix),(c!==m||u!==m.version||d!==a.toneMapping)&&(o.material.needsUpdate=!0,c=m,u=m.version,d=a.toneMapping),g.unshift(o,o.geometry,o.material,0,0,null))}function f(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,n)}return{getClearColor:function(){return i},setClearColor:function(g,v=1){i.set(g),s=v,f(i,s)},getClearAlpha:function(){return s},setClearAlpha:function(g){s=g,f(i,s)},render:h}}function sm(a,e,t,r){const n=a.getParameter(34921),i=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||i!==null,o={},l=v(null);let c=l;function u(C,I,N,U,k){let Q=!1;if(s){const ae=g(U,N,I);c!==ae&&(c=ae,h(c.object)),Q=y(U,k),Q&&m(U,k)}else{const ae=I.wireframe===!0;(c.geometry!==U.id||c.program!==N.id||c.wireframe!==ae)&&(c.geometry=U.id,c.program=N.id,c.wireframe=ae,Q=!0)}C.isInstancedMesh===!0&&(Q=!0),k!==null&&t.update(k,34963),Q&&(_(C,I,N,U),k!==null&&a.bindBuffer(34963,t.get(k).buffer))}function d(){return r.isWebGL2?a.createVertexArray():i.createVertexArrayOES()}function h(C){return r.isWebGL2?a.bindVertexArray(C):i.bindVertexArrayOES(C)}function f(C){return r.isWebGL2?a.deleteVertexArray(C):i.deleteVertexArrayOES(C)}function g(C,I,N){const U=N.wireframe===!0;let k=o[C.id];k===void 0&&(k={},o[C.id]=k);let Q=k[I.id];Q===void 0&&(Q={},k[I.id]=Q);let ae=Q[U];return ae===void 0&&(ae=v(d()),Q[U]=ae),ae}function v(C){const I=[],N=[],U=[];for(let k=0;k<n;k++)I[k]=0,N[k]=0,U[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:U,object:C,attributes:{},index:null}}function y(C,I){const N=c.attributes,U=C.attributes;let k=0;for(const Q in U){const ae=N[Q],ve=U[Q];if(ae===void 0||ae.attribute!==ve||ae.data!==ve.data)return!0;k++}return c.attributesNum!==k||c.index!==I}function m(C,I){const N={},U=C.attributes;let k=0;for(const Q in U){const ae=U[Q],ve={};ve.attribute=ae,ae.data&&(ve.data=ae.data),N[Q]=ve,k++}c.attributes=N,c.attributesNum=k,c.index=I}function p(){const C=c.newAttributes;for(let I=0,N=C.length;I<N;I++)C[I]=0}function b(C){x(C,0)}function x(C,I){const N=c.newAttributes,U=c.enabledAttributes,k=c.attributeDivisors;N[C]=1,U[C]===0&&(a.enableVertexAttribArray(C),U[C]=1),k[C]!==I&&((r.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,I),k[C]=I)}function M(){const C=c.newAttributes,I=c.enabledAttributes;for(let N=0,U=I.length;N<U;N++)I[N]!==C[N]&&(a.disableVertexAttribArray(N),I[N]=0)}function S(C,I,N,U,k,Q){r.isWebGL2===!0&&(N===5124||N===5125)?a.vertexAttribIPointer(C,I,N,k,Q):a.vertexAttribPointer(C,I,N,U,k,Q)}function _(C,I,N,U){if(r.isWebGL2===!1&&(C.isInstancedMesh||U.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;p();const k=U.attributes,Q=N.getAttributes(),ae=I.defaultAttributeValues;for(const ve in Q){const Z=Q[ve];if(Z.location>=0){let fe=k[ve];if(fe===void 0&&(ve==="instanceMatrix"&&C.instanceMatrix&&(fe=C.instanceMatrix),ve==="instanceColor"&&C.instanceColor&&(fe=C.instanceColor)),fe!==void 0){const X=fe.normalized,$=fe.itemSize,xe=t.get(fe);if(xe===void 0)continue;const G=xe.buffer,ce=xe.type,ye=xe.bytesPerElement;if(fe.isInterleavedBufferAttribute){const pe=fe.data,ue=pe.stride,me=fe.offset;if(pe&&pe.isInstancedInterleavedBuffer){for(let j=0;j<Z.locationSize;j++)x(Z.location+j,pe.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let j=0;j<Z.locationSize;j++)b(Z.location+j);a.bindBuffer(34962,G);for(let j=0;j<Z.locationSize;j++)S(Z.location+j,$/Z.locationSize,ce,X,ue*ye,(me+$/Z.locationSize*j)*ye)}else{if(fe.isInstancedBufferAttribute){for(let pe=0;pe<Z.locationSize;pe++)x(Z.location+pe,fe.meshPerAttribute);C.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let pe=0;pe<Z.locationSize;pe++)b(Z.location+pe);a.bindBuffer(34962,G);for(let pe=0;pe<Z.locationSize;pe++)S(Z.location+pe,$/Z.locationSize,ce,X,$*ye,$/Z.locationSize*pe*ye)}}else if(ae!==void 0){const X=ae[ve];if(X!==void 0)switch(X.length){case 2:a.vertexAttrib2fv(Z.location,X);break;case 3:a.vertexAttrib3fv(Z.location,X);break;case 4:a.vertexAttrib4fv(Z.location,X);break;default:a.vertexAttrib1fv(Z.location,X)}}}}M()}function E(){L();for(const C in o){const I=o[C];for(const N in I){const U=I[N];for(const k in U)f(U[k].object),delete U[k];delete I[N]}delete o[C]}}function B(C){if(o[C.id]===void 0)return;const I=o[C.id];for(const N in I){const U=I[N];for(const k in U)f(U[k].object),delete U[k];delete I[N]}delete o[C.id]}function F(C){for(const I in o){const N=o[I];if(N[C.id]===void 0)continue;const U=N[C.id];for(const k in U)f(U[k].object),delete U[k];delete N[C.id]}}function L(){D(),c!==l&&(c=l,h(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:L,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:p,enableAttribute:b,disableUnusedAttributes:M}}function am(a,e,t,r){const n=r.isWebGL2;let i;function s(c){i=c}function o(c,u){a.drawArrays(i,c,u),t.update(u,i,1)}function l(c,u,d){if(d===0)return;let h,f;if(n)h=a,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](i,c,u,d),t.update(u,i,d)}this.setMode=s,this.render=o,this.renderInstances=l}function om(a,e,t){let r;function n(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=a.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function i(_){if(_==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";_="mediump"}return _==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext!="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&a instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=i(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),h=a.getParameter(35660),f=a.getParameter(3379),g=a.getParameter(34076),v=a.getParameter(34921),y=a.getParameter(36347),m=a.getParameter(36348),p=a.getParameter(36349),b=h>0,x=s||e.has("OES_texture_float"),M=b&&x,S=s?a.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:i,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:y,maxVaryings:m,maxFragmentUniforms:p,vertexTextures:b,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:S}}function lm(a){const e=this;let t=null,r=0,n=!1,i=!1;const s=new pn,o=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,f){const g=d.length!==0||h||r!==0||n;return n=h,t=u(d,f,0),r=d.length,g},this.beginShadows=function(){i=!0,u(null)},this.endShadows=function(){i=!1,c()},this.setState=function(d,h,f){const g=d.clippingPlanes,v=d.clipIntersection,y=d.clipShadows,m=a.get(d);if(!n||g===null||g.length===0||i&&!y)i?u(null):c();else{const p=i?0:r,b=p*4;let x=m.clippingState||null;l.value=x,x=u(g,h,b,f);for(let M=0;M!==b;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,h,f,g){const v=d!==null?d.length:0;let y=null;if(v!==0){if(y=l.value,g!==!0||y===null){const m=f+v*4,p=h.matrixWorldInverse;o.getNormalMatrix(p),(y===null||y.length<m)&&(y=new Float32Array(m));for(let b=0,x=f;b!==v;++b,x+=4)s.copy(d[b]).applyMatrix4(p,o),s.normal.toArray(y,x),y[x+3]=s.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,y}}function cm(a){let e=new WeakMap;function t(s,o){return o===ta?s.mapping=zr:o===na&&(s.mapping=Gr),s}function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===ta||o===na)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=a.getRenderTarget(),u=new zl(l.height/2);return u.fromEquirectangularTexture(a,s),e.set(s,u),a.setRenderTarget(c),s.addEventListener("dispose",n),t(u.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:r,dispose:i}}class Oa extends Ba{constructor(e=-1,t=1,r=1,n=-1,i=.1,s=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let i=r-e,s=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,s=i+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(i,s,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}Oa.prototype.isOrthographicCamera=!0;class vs extends Wn{constructor(e){super(e);this.type="RawShaderMaterial"}}vs.prototype.isRawShaderMaterial=!0;const Mi=4,Ln=8,nn=Math.pow(2,Ln),Vl=[.125,.215,.35,.446,.526,.582],Hl=Ln-Mi+1+Vl.length,wi=20,Cn={[wt]:0,[kn]:1,[ca]:2,[gl]:3,[vl]:4,[xl]:5,[la]:6},za=new Oa,{_lodPlanes:or,_sizeLods:Wl,_sigmas:xs}=dm(),Xl=new Se;let Ga=null;const Xn=(1+Math.sqrt(5))/2,Si=1/Xn,ql=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Xn,Si),new R(0,Xn,-Si),new R(Si,0,Xn),new R(-Si,0,Xn),new R(Xn,Si,0),new R(-Xn,Si,0)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=fm(wi),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Ga=this._renderer.getRenderTarget();const i=this._allocateTargets();return this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Zl(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=jl(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<or.length;e++)or[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Ga),e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e){Ga=this._renderer.getRenderTarget();const t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){const t={magFilter:ft,minFilter:ft,generateMipmaps:!1,type:yn,format:yh,encoding:hm(e)?e.encoding:ca,depthBuffer:!1},r=Yl(t);return r.depthBuffer=!e,this._pingPongRenderTarget=Yl(t),r}_compileMaterial(e){const t=new xt(or[0],e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,r,n){const i=90,s=1,o=new Ft(i,s,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.outputEncoding,f=u.toneMapping;u.getClearColor(Xl),u.toneMapping=Nn,u.outputEncoding=wt,u.autoClear=!1;const g=new rs({name:"PMREM.Background",side:ht,depthWrite:!1,depthTest:!1}),v=new xt(new ar,g);let y=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,y=!0):(g.color.copy(Xl),y=!0);for(let p=0;p<6;p++){const b=p%3;b==0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b==1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p])),ys(n,b*nn,p>2?nn:0,nn,nn),u.setRenderTarget(n),y&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.outputEncoding=h,u.autoClear=d,e.background=m}_setEncoding(e,t){this._renderer.capabilities.isWebGL2===!0&&t.format===Mt&&t.type===yn&&t.encoding===kn?e.value=Cn[wt]:e.value=Cn[t.encoding]}_textureToCubeUV(e,t){const r=this._renderer;e.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=Zl()):this._equirectShader==null&&(this._equirectShader=jl());const n=e.isCubeTexture?this._cubemapShader:this._equirectShader,i=new xt(or[0],n),s=n.uniforms;s.envMap.value=e,e.isCubeTexture||s.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(s.inputEncoding,e),this._setEncoding(s.outputEncoding,t.texture),ys(t,0,0,3*nn,2*nn),r.setRenderTarget(t),r.render(i,za)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let n=1;n<Hl;n++){const i=Math.sqrt(xs[n]*xs[n]-xs[n-1]*xs[n-1]),s=ql[(n-1)%ql.length];this._blur(e,n-1,n,i,s)}t.autoClear=r}_blur(e,t,r,n,i){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,n,"latitudinal",i),this._halfBlur(s,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new xt(or[n],c),h=c.uniforms,f=Wl[r]-1,g=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*wi-1),v=i/g,y=isFinite(i)?1+Math.floor(u*v):wi;y>wi&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${wi}`);const m=[];let p=0;for(let S=0;S<wi;++S){const _=S/v,E=Math.exp(-_*_/2);m.push(E),S==0?p+=E:S<y&&(p+=2*E)}for(let S=0;S<m.length;S++)m[S]=m[S]/p;h.envMap.value=e.texture,h.samples.value=y,h.weights.value=m,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o),h.dTheta.value=g,h.mipInt.value=Ln-r,this._setEncoding(h.inputEncoding,e.texture),this._setEncoding(h.outputEncoding,e.texture);const b=Wl[n],x=3*Math.max(0,nn-2*b),M=(n===0?0:2*nn)+2*b*(n>Ln-Mi?n-Ln+Mi:0);ys(t,x,M,3*b,2*b),l.setRenderTarget(t),l.render(d,za)}}function hm(a){return a===void 0||a.type!==yn?!1:a.encoding===wt||a.encoding===kn||a.encoding===la}function dm(){const a=[],e=[],t=[];let r=Ln;for(let n=0;n<Hl;n++){const i=Math.pow(2,r);e.push(i);let s=1/i;n>Ln-Mi?s=Vl[n-Ln+Mi-1]:n==0&&(s=0),t.push(s);const o=1/(i-1),l=-o/2,c=1+o/2,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=2,v=1,y=new Float32Array(f*h*d),m=new Float32Array(g*h*d),p=new Float32Array(v*h*d);for(let x=0;x<d;x++){const M=x%3*2/3-1,S=x>2?0:-1,_=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];y.set(_,f*h*x),m.set(u,g*h*x);const E=[x,x,x,x,x,x];p.set(E,v*h*x)}const b=new Ke;b.setAttribute("position",new dt(y,f)),b.setAttribute("uv",new dt(m,g)),b.setAttribute("faceIndex",new dt(p,v)),a.push(b),r>Mi&&r--}return{_lodPlanes:a,_sizeLods:e,_sigmas:t}}function Yl(a){const e=new en(3*nn,3*nn,a);return e.texture.mapping=Vr,e.texture.name="PMREM.cubeUv",e.scissorTest=!0,e}function ys(a,e,t,r,n){a.viewport.set(e,t,r,n),a.scissor.set(e,t,r,n)}function fm(a){const e=new Float32Array(a),t=new R(0,1,0);return new vs({name:"SphericalGaussianBlur",defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:t},inputEncoding:{value:Cn[wt]},outputEncoding:{value:Cn[wt]}},vertexShader:Va(),fragmentShader:`

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

			${Ha()}

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

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function jl(){const a=new le(1,1);return new vs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:Cn[wt]},outputEncoding:{value:Cn[wt]}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform vec2 texelSize;

			${Ha()}

			#include <common>

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				vec2 f = fract( uv / texelSize - 0.5 );
				uv -= f * texelSize;
				vec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x += texelSize.x;
				vec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.y += texelSize.y;
				vec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;
				uv.x -= texelSize.x;
				vec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;

				vec3 tm = mix( tl, tr, f.x );
				vec3 bm = mix( bl, br, f.x );
				gl_FragColor.rgb = mix( tm, bm, f.y );

				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Zl(){return new vs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:Cn[wt]},outputEncoding:{value:Cn[wt]}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			${Ha()}

			void main() {

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) ).rgb;
				gl_FragColor = linearToOutputTexel( gl_FragColor );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
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
	`}function Ha(){return`

		uniform int inputEncoding;
		uniform int outputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else if ( inputEncoding == 1 ) {

				return sRGBToLinear( value );

			} else if ( inputEncoding == 2 ) {

				return RGBEToLinear( value );

			} else if ( inputEncoding == 3 ) {

				return RGBMToLinear( value, 7.0 );

			} else if ( inputEncoding == 4 ) {

				return RGBMToLinear( value, 16.0 );

			} else if ( inputEncoding == 5 ) {

				return RGBDToLinear( value, 256.0 );

			} else {

				return GammaToLinear( value, 2.2 );

			}

		}

		vec4 linearToOutputTexel( vec4 value ) {

			if ( outputEncoding == 0 ) {

				return value;

			} else if ( outputEncoding == 1 ) {

				return LinearTosRGB( value );

			} else if ( outputEncoding == 2 ) {

				return LinearToRGBE( value );

			} else if ( outputEncoding == 3 ) {

				return LinearToRGBM( value, 7.0 );

			} else if ( outputEncoding == 4 ) {

				return LinearToRGBM( value, 16.0 );

			} else if ( outputEncoding == 5 ) {

				return LinearToRGBD( value, 256.0 );

			} else {

				return LinearToGamma( value, 2.2 );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function pm(a){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping,c=l===ta||l===na,u=l===zr||l===Gr;if(c||u){if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&n(d)){const h=a.getRenderTarget();t===null&&(t=new um(a));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),a.setRenderTarget(h),o.addEventListener("dispose",i),f.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function i(o){const l=o.target;l.removeEventListener("dispose",i);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function mm(a){const e={};function t(r){if(e[r]!==void 0)return e[r];let n;switch(r){case"WEBGL_depth_texture":n=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=a.getExtension(r)}return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float")},get:function(r){const n=t(r);return n===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),n}}}function gm(a,e,t,r){const n={},i=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",s),delete n[h.id];const f=i.get(h);f&&(e.remove(f),i.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return n[h.id]===!0||(h.addEventListener("dispose",s),n[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],34962);const f=d.morphAttributes;for(const g in f){const v=f[g];for(let y=0,m=v.length;y<m;y++)e.update(v[y],34962)}}function c(d){const h=[],f=d.index,g=d.attributes.position;let v=0;if(f!==null){const p=f.array;v=f.version;for(let b=0,x=p.length;b<x;b+=3){const M=p[b+0],S=p[b+1],_=p[b+2];h.push(M,S,S,_,_,M)}}else{const p=g.array;v=g.version;for(let b=0,x=p.length/3-1;b<x;b+=3){const M=b+0,S=b+1,_=b+2;h.push(M,S,S,_,_,M)}}const y=new(Ml(h)>65535?Nl:Bl)(h,1);y.version=v;const m=i.get(d);m&&e.remove(m),i.set(d,y)}function u(d){const h=i.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return i.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function vm(a,e,t,r){const n=r.isWebGL2;let i;function s(h){i=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,f){a.drawElements(i,f,o,h*l),t.update(f,i,1)}function d(h,f,g){if(g===0)return;let v,y;if(n)v=a,y="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](i,f,o,h*l,g),t.update(f,i,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=d}function xm(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,s,o){switch(t.calls++,s){case 4:t.triangles+=o*(i/3);break;case 1:t.lines+=o*(i/2);break;case 3:t.lines+=o*(i-1);break;case 2:t.lines+=o*i;break;case 0:t.points+=o*i;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}class Wa extends vt{constructor(e=null,t=1,r=1,n=1){super(null);this.image={data:e,width:t,height:r,depth:n},this.magFilter=ft,this.minFilter=ft,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Wa.prototype.isDataTexture2DArray=!0;function ym(a,e){return a[0]-e[0]}function _m(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Jl(a,e){let t=1;const r=e.isInterleavedBufferAttribute?e.data.array:e.array;r instanceof Int8Array?t=127:r instanceof Int16Array?t=32767:r instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",r),a.divideScalar(t)}function bm(a,e,t){const r={},n=new Float32Array(8),i=new WeakMap,s=new R,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position.length;let v=i.get(u);if(v===void 0||v.count!==g){v!==void 0&&v.texture.dispose();const p=u.morphAttributes.normal!==void 0,b=u.morphAttributes.position,x=u.morphAttributes.normal||[],M=u.attributes.position.count,S=p===!0?2:1;let _=M*S,E=1;_>e.maxTextureSize&&(E=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const B=new Float32Array(_*E*4*g),F=new Wa(B,_,E,g);F.format=Mt,F.type=_n;const L=S*4;for(let D=0;D<g;D++){const C=b[D],I=x[D],N=_*E*4*D;for(let U=0;U<C.count;U++){s.fromBufferAttribute(C,U),C.normalized===!0&&Jl(s,C);const k=U*L;B[N+k+0]=s.x,B[N+k+1]=s.y,B[N+k+2]=s.z,B[N+k+3]=0,p===!0&&(s.fromBufferAttribute(I,U),I.normalized===!0&&Jl(s,I),B[N+k+4]=s.x,B[N+k+5]=s.y,B[N+k+6]=s.z,B[N+k+7]=0)}}v={count:g,texture:F,size:new le(_,E)},i.set(u,v)}let y=0;for(let p=0;p<f.length;p++)y+=f[p];const m=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",m),h.getUniforms().setValue(a,"morphTargetInfluences",f),h.getUniforms().setValue(a,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}else{const g=f===void 0?0:f.length;let v=r[u.id];if(v===void 0||v.length!==g){v=[];for(let x=0;x<g;x++)v[x]=[x,0];r[u.id]=v}for(let x=0;x<g;x++){const M=v[x];M[0]=x,M[1]=f[x]}v.sort(_m);for(let x=0;x<8;x++)x<g&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(ym);const y=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let x=0;x<8;x++){const M=o[x],S=M[0],_=M[1];S!==Number.MAX_SAFE_INTEGER&&_?(y&&u.getAttribute("morphTarget"+x)!==y[S]&&u.setAttribute("morphTarget"+x,y[S]),m&&u.getAttribute("morphNormal"+x)!==m[S]&&u.setAttribute("morphNormal"+x,m[S]),n[x]=_,p+=_):(y&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),n[x]=0)}const b=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",n)}}return{update:l}}function Mm(a,e,t,r){let n=new WeakMap;function i(l){const c=r.render.frame,u=l.geometry,d=e.get(l,u);return n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:i,dispose:s}}class Ql extends vt{constructor(e=null,t=1,r=1,n=1){super(null);this.image={data:e,width:t,height:r,depth:n},this.magFilter=ft,this.minFilter=ft,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Ql.prototype.isDataTexture3D=!0;const Kl=new vt,wm=new Wa,Sm=new Ql,$l=new ps,ec=[],tc=[],nc=new Float32Array(16),ic=new Float32Array(9),rc=new Float32Array(4);function Ti(a,e,t){const r=a[0];if(r<=0||r>0)return a;const n=e*t;let i=ec[n];if(i===void 0&&(i=new Float32Array(n),ec[n]=i),e!==0){r.toArray(i,0);for(let s=1,o=0;s!==e;++s)o+=t,a[s].toArray(i,o)}return i}function Ct(a,e){if(a.length!==e.length)return!1;for(let t=0,r=a.length;t<r;t++)if(a[t]!==e[t])return!1;return!0}function Et(a,e){for(let t=0,r=e.length;t<r;t++)a[t]=e[t]}function sc(a,e){let t=tc[e];t===void 0&&(t=new Int32Array(e),tc[e]=t);for(let r=0;r!==e;++r)t[r]=a.allocateTextureUnit();return t}function Tm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Em(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;a.uniform2fv(this.addr,e),Et(t,e)}}function Am(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;a.uniform3fv(this.addr,e),Et(t,e)}}function Lm(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;a.uniform4fv(this.addr,e),Et(t,e)}}function Cm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,r))return;rc.set(r),a.uniformMatrix2fv(this.addr,!1,rc),Et(t,r)}}function Rm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,r))return;ic.set(r),a.uniformMatrix3fv(this.addr,!1,ic),Et(t,r)}}function Pm(a,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(Ct(t,r))return;nc.set(r),a.uniformMatrix4fv(this.addr,!1,nc),Et(t,r)}}function Dm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Im(a,e){const t=this.cache;Ct(t,e)||(a.uniform2iv(this.addr,e),Et(t,e))}function Fm(a,e){const t=this.cache;Ct(t,e)||(a.uniform3iv(this.addr,e),Et(t,e))}function Um(a,e){const t=this.cache;Ct(t,e)||(a.uniform4iv(this.addr,e),Et(t,e))}function Bm(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Nm(a,e){const t=this.cache;Ct(t,e)||(a.uniform2uiv(this.addr,e),Et(t,e))}function km(a,e){const t=this.cache;Ct(t,e)||(a.uniform3uiv(this.addr,e),Et(t,e))}function Om(a,e){const t=this.cache;Ct(t,e)||(a.uniform4uiv(this.addr,e),Et(t,e))}function zm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.safeSetTexture2D(e||Kl,n)}function Gm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Sm,n)}function Vm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.safeSetTextureCube(e||$l,n)}function Hm(a,e,t){const r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(a.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||wm,n)}function Wm(a){switch(a){case 5126:return Tm;case 35664:return Em;case 35665:return Am;case 35666:return Lm;case 35674:return Cm;case 35675:return Rm;case 35676:return Pm;case 5124:case 35670:return Dm;case 35667:case 35671:return Im;case 35668:case 35672:return Fm;case 35669:case 35673:return Um;case 5125:return Bm;case 36294:return Nm;case 36295:return km;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Gm;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Hm}}function Xm(a,e){a.uniform1fv(this.addr,e)}function qm(a,e){const t=Ti(e,this.size,2);a.uniform2fv(this.addr,t)}function Ym(a,e){const t=Ti(e,this.size,3);a.uniform3fv(this.addr,t)}function jm(a,e){const t=Ti(e,this.size,4);a.uniform4fv(this.addr,t)}function Zm(a,e){const t=Ti(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Jm(a,e){const t=Ti(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Qm(a,e){const t=Ti(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Km(a,e){a.uniform1iv(this.addr,e)}function $m(a,e){a.uniform2iv(this.addr,e)}function eg(a,e){a.uniform3iv(this.addr,e)}function tg(a,e){a.uniform4iv(this.addr,e)}function ng(a,e){a.uniform1uiv(this.addr,e)}function ig(a,e){a.uniform2uiv(this.addr,e)}function rg(a,e){a.uniform3uiv(this.addr,e)}function sg(a,e){a.uniform4uiv(this.addr,e)}function ag(a,e,t){const r=e.length,n=sc(t,r);a.uniform1iv(this.addr,n);for(let i=0;i!==r;++i)t.safeSetTexture2D(e[i]||Kl,n[i])}function og(a,e,t){const r=e.length,n=sc(t,r);a.uniform1iv(this.addr,n);for(let i=0;i!==r;++i)t.safeSetTextureCube(e[i]||$l,n[i])}function lg(a){switch(a){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return jm;case 35674:return Zm;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return Km;case 35667:case 35671:return $m;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return rg;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35680:case 36300:case 36308:case 36293:return og}}function cg(a,e,t){this.id=a,this.addr=t,this.cache=[],this.setValue=Wm(e.type)}function ac(a,e,t){this.id=a,this.addr=t,this.cache=[],this.size=e.size,this.setValue=lg(e.type)}ac.prototype.updateCache=function(a){const e=this.cache;a instanceof Float32Array&&e.length!==a.length&&(this.cache=new Float32Array(a.length)),Et(e,a)};function oc(a){this.id=a,this.seq=[],this.map={}}oc.prototype.setValue=function(a,e,t){const r=this.seq;for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.setValue(a,e[s.id],t)}};const Xa=/(\w+)(\])?(\[|\.)?/g;function lc(a,e){a.seq.push(e),a.map[e.id]=e}function ug(a,e,t){const r=a.name,n=r.length;for(Xa.lastIndex=0;;){const i=Xa.exec(r),s=Xa.lastIndex;let o=i[1];const l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){lc(t,c===void 0?new cg(o,a,e):new ac(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new oc(o),lc(t,d)),t=d}}}function Rn(a,e){this.seq=[],this.map={};const t=a.getProgramParameter(e,35718);for(let r=0;r<t;++r){const n=a.getActiveUniform(e,r),i=a.getUniformLocation(e,n.name);ug(n,i,this)}}Rn.prototype.setValue=function(a,e,t,r){const n=this.map[e];n!==void 0&&n.setValue(a,t,r)};Rn.prototype.setOptional=function(a,e,t){const r=e[t];r!==void 0&&this.setValue(a,t,r)};Rn.upload=function(a,e,t,r){for(let n=0,i=e.length;n!==i;++n){const s=e[n],o=t[s.id];o.needsUpdate!==!1&&s.setValue(a,o.value,r)}};Rn.seqWithValue=function(a,e){const t=[];for(let r=0,n=a.length;r!==n;++r){const i=a[r];i.id in e&&t.push(i)}return t};function cc(a,e,t){const r=a.createShader(e);return a.shaderSource(r,t),a.compileShader(r),r}let hg=0;function dg(a){const e=a.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function uc(a){switch(a){case wt:return["Linear","( value )"];case kn:return["sRGB","( value )"];case ca:return["RGBE","( value )"];case gl:return["RGBM","( value, 7.0 )"];case vl:return["RGBM","( value, 16.0 )"];case xl:return["RGBD","( value, 256.0 )"];case la:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case ad:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function hc(a,e,t){const r=a.getShaderParameter(e,35713),n=a.getShaderInfoLog(e).trim();return r&&n===""?"":t.toUpperCase()+`

`+n+`

`+dg(a.getShaderSource(e))}function Ei(a,e){const t=uc(e);return"vec4 "+a+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"}function fg(a,e){const t=uc(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function pg(a,e){let t;switch(e){case rh:t="Linear";break;case sh:t="Reinhard";break;case ah:t="OptimizedCineon";break;case oh:t="ACESFilmic";break;case lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mg(a){return[a.extensionDerivatives||a.envMapCubeUV||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function gg(a){const e=[];for(const t in a){const r=a[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function vg(a,e){const t={},r=a.getProgramParameter(e,35721);for(let n=0;n<r;n++){const i=a.getActiveAttrib(e,n),s=i.name;let o=1;i.type===35674&&(o=2),i.type===35675&&(o=3),i.type===35676&&(o=4),t[s]={type:i.type,location:a.getAttribLocation(e,s),locationSize:o}}return t}function lr(a){return a!==""}function dc(a,e){return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fc(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(a){return a.replace(xg,yg)}function yg(a,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return qa(t)}const _g=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pc(a){return a.replace(bg,mc).replace(_g,Mg)}function Mg(a,e,t,r){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),mc(a,e,t,r)}function mc(a,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function gc(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wg(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Yo?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Sg(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case zr:case Gr:e="ENVMAP_TYPE_CUBE";break;case Vr:case ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Tg(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Gr:case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function Eg(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Or:e="ENVMAP_BLENDING_MULTIPLY";break;case nh:e="ENVMAP_BLENDING_MIX";break;case ih:e="ENVMAP_BLENDING_ADD";break}return e}function Ag(a,e,t,r){const n=a.getContext(),i=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=wg(t),c=Sg(t),u=Tg(t),d=Eg(t),h=a.gammaFactor>0?a.gammaFactor:1,f=t.isWebGL2?"":mg(t),g=gg(i),v=n.createProgram();let y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[g].filter(lr).join(`
`),y.length>0&&(y+=`
`),m=[f,g].filter(lr).join(`
`),m.length>0&&(m+=`
`)):(y=[gc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+h,"#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargets&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),m=[f,gc(t),"#define SHADER_NAME "+t.shaderName,g,"#define GAMMA_FACTOR "+h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularTintMap?"#define USE_SPECULARTINTMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(t.extensionShaderTextureLOD||t.envMap)&&t.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Nn?pg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.format===ei?"#define OPAQUE":"",Ue.encodings_pars_fragment,t.map?Ei("mapTexelToLinear",t.mapEncoding):"",t.matcap?Ei("matcapTexelToLinear",t.matcapEncoding):"",t.envMap?Ei("envMapTexelToLinear",t.envMapEncoding):"",t.emissiveMap?Ei("emissiveMapTexelToLinear",t.emissiveMapEncoding):"",t.specularTintMap?Ei("specularTintMapTexelToLinear",t.specularTintMapEncoding):"",t.lightMap?Ei("lightMapTexelToLinear",t.lightMapEncoding):"",fg("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),s=qa(s),s=dc(s,t),s=fc(s,t),o=qa(o),o=dc(o,t),o=fc(o,t),s=pc(s),o=pc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===_l?"":"out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const b=p+y+s,x=p+m+o,M=cc(n,35633,b),S=cc(n,35632,x);if(n.attachShader(v,M),n.attachShader(v,S),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v),a.debug.checkShaderErrors){const B=n.getProgramInfoLog(v).trim(),F=n.getShaderInfoLog(M).trim(),L=n.getShaderInfoLog(S).trim();let D=!0,C=!0;if(n.getProgramParameter(v,35714)===!1){D=!1;const I=hc(n,M,"vertex"),N=hc(n,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,35715)+`

Program Info Log: `+B+`
`+I+`
`+N)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||L==="")&&(C=!1);C&&(this.diagnostics={runnable:D,programLog:B,vertexShader:{log:F,prefix:y},fragmentShader:{log:L,prefix:m}})}n.deleteShader(M),n.deleteShader(S);let _;this.getUniforms=function(){return _===void 0&&(_=new Rn(n,v)),_};let E;return this.getAttributes=function(){return E===void 0&&(E=vg(n,v)),E},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=hg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=S,this}function Lg(a,e,t,r,n,i,s){const o=[],l=n.isWebGL2,c=n.logarithmicDepthBuffer,u=n.floatVertexTextures,d=n.maxVertexUniforms,h=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},v=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","instancingColor","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoat","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","specularIntensityMap","specularTintMap","specularTintMapEncoding","roughnessMap","metalnessMap","gradientMap","alphaMap","alphaTest","combine","vertexColors","vertexAlphas","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","morphTargetsCount","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","format","sheen","transmission","transmissionMap","thicknessMap"];function y(_){const B=_.skeleton.bones;if(u)return 1024;{const L=Math.floor((d-20)/4),D=Math.min(L,B.length);return D<B.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+B.length+" bones. This GPU supports "+D+"."),0):D}}function m(_){let E;return _&&_.isTexture?E=_.encoding:_&&_.isWebGLRenderTarget?(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),E=_.texture.encoding):E=wt,l&&_&&_.isTexture&&_.format===Mt&&_.type===yn&&_.encoding===kn&&(E=wt),E}function p(_,E,B,F,L){const D=F.fog,C=_.isMeshStandardMaterial?F.environment:null,I=(_.isMeshStandardMaterial?t:e).get(_.envMap||C),N=g[_.type],U=L.isSkinnedMesh?y(L):0;_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let k,Q;if(N){const X=tn[N];k=X.vertexShader,Q=X.fragmentShader}else k=_.vertexShader,Q=_.fragmentShader;const ae=a.getRenderTarget(),ve=_.alphaTest>0,Z=_.clearcoat>0;return{isWebGL2:l,shaderID:N,shaderName:_.type,vertexShader:k,fragmentShader:Q,defines:_.defines,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,instancing:L.isInstancedMesh===!0,instancingColor:L.isInstancedMesh===!0&&L.instanceColor!==null,supportsVertexTextures:h,outputEncoding:ae!==null?m(ae.texture):a.outputEncoding,map:!!_.map,mapEncoding:m(_.map),matcap:!!_.matcap,matcapEncoding:m(_.matcap),envMap:!!I,envMapMode:I&&I.mapping,envMapEncoding:m(I),envMapCubeUV:!!I&&(I.mapping===Vr||I.mapping===ia),lightMap:!!_.lightMap,lightMapEncoding:m(_.lightMap),aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,emissiveMapEncoding:m(_.emissiveMap),bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===ld,tangentSpaceNormalMap:_.normalMapType===ri,clearcoat:Z,clearcoatMap:Z&&!!_.clearcoatMap,clearcoatRoughnessMap:Z&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:Z&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularTintMap:!!_.specularTintMap,specularTintMapEncoding:m(_.specularTintMap),alphaMap:!!_.alphaMap,alphaTest:ve,gradientMap:!!_.gradientMap,sheen:_.sheen>0,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!L.geometry&&!!L.geometry.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.geometry&&!!L.geometry.attributes.color&&L.geometry.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularTintMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularTintMap)&&!!_.displacementMap,fog:!!D,useFog:_.fog,fogExp2:D&&D.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:c,skinning:L.isSkinnedMesh===!0&&U>0,maxBones:U,useVertexTexture:u,morphTargets:!!L.geometry&&!!L.geometry.morphAttributes.position,morphNormals:!!L.geometry&&!!L.geometry.morphAttributes.normal,morphTargetsCount:!!L.geometry&&!!L.geometry.morphAttributes.position?L.geometry.morphAttributes.position.length:0,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,format:_.format,dithering:_.dithering,shadowMapEnabled:a.shadowMap.enabled&&B.length>0,shadowMapType:a.shadowMap.type,toneMapping:_.toneMapped?a.toneMapping:Nn,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bn,flipSided:_.side===ht,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:l||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||r.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function b(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.fragmentShader),E.push(_.vertexShader)),_.defines!==void 0)for(const B in _.defines)E.push(B),E.push(_.defines[B]);if(_.isRawShaderMaterial===!1){for(let B=0;B<v.length;B++)E.push(_[v[B]]);E.push(a.outputEncoding),E.push(a.gammaFactor)}return E.push(_.customProgramCacheKey),E.join()}function x(_){const E=g[_.type];let B;if(E){const F=tn[E];B=Ol.clone(F.uniforms)}else B=_.uniforms;return B}function M(_,E){let B;for(let F=0,L=o.length;F<L;F++){const D=o[F];if(D.cacheKey===E){B=D,++B.usedTimes;break}}return B===void 0&&(B=new Ag(a,E,_,i),o.push(B)),B}function S(_){if(--_.usedTimes==0){const E=o.indexOf(_);o[E]=o[o.length-1],o.pop(),_.destroy()}}return{getParameters:p,getProgramCacheKey:b,getUniforms:x,acquireProgram:M,releaseProgram:S,programs:o}}function Cg(){let a=new WeakMap;function e(i){let s=a.get(i);return s===void 0&&(s={},a.set(i,s)),s}function t(i){a.delete(i)}function r(i,s,o){a.get(i)[s]=o}function n(){a=new WeakMap}return{get:e,remove:t,update:r,dispose:n}}function Rg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.program!==e.program?a.program.id-e.program.id:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function vc(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function xc(a){const e=[];let t=0;const r=[],n=[],i=[],s={id:-1};function o(){t=0,r.length=0,n.length=0,i.length=0}function l(f,g,v,y,m,p){let b=e[t];const x=a.get(v);return b===void 0?(b={id:f.id,object:f,geometry:g,material:v,program:x.program||s,groupOrder:y,renderOrder:f.renderOrder,z:m,group:p},e[t]=b):(b.id=f.id,b.object=f,b.geometry=g,b.material=v,b.program=x.program||s,b.groupOrder=y,b.renderOrder=f.renderOrder,b.z=m,b.group=p),t++,b}function c(f,g,v,y,m,p){const b=l(f,g,v,y,m,p);v.transmission>0?n.push(b):v.transparent===!0?i.push(b):r.push(b)}function u(f,g,v,y,m,p){const b=l(f,g,v,y,m,p);v.transmission>0?n.unshift(b):v.transparent===!0?i.unshift(b):r.unshift(b)}function d(f,g){r.length>1&&r.sort(f||Rg),n.length>1&&n.sort(g||vc),i.length>1&&i.sort(g||vc)}function h(){for(let f=t,g=e.length;f<g;f++){const v=e[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.program=null,v.group=null}}return{opaque:r,transmissive:n,transparent:i,init:o,push:c,unshift:u,finish:h,sort:d}}function Pg(a){let e=new WeakMap;function t(n,i){let s;return e.has(n)===!1?(s=new xc(a),e.set(n,[s])):i>=e.get(n).length?(s=new xc(a),e.get(n).push(s)):s=e.get(n)[i],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function Dg(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Se};break;case"SpotLight":t={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return a[e.id]=t,t}}}function Ig(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Fg=0;function Ug(a,e){return(e.castShadow?1:0)-(a.castShadow?1:0)}function Bg(a,e){const t=new Dg,r=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)n.probe.push(new R);const i=new R,s=new Ce,o=new Ce;function l(u,d){let h=0,f=0,g=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let v=0,y=0,m=0,p=0,b=0,x=0,M=0,S=0;u.sort(Ug);const _=d!==!0?Math.PI:1;for(let B=0,F=u.length;B<F;B++){const L=u[B],D=L.color,C=L.intensity,I=L.distance,N=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*C*_,f+=D.g*C*_,g+=D.b*C*_;else if(L.isLightProbe)for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],C);else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*_),L.castShadow){const k=L.shadow,Q=r.get(L);Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.directionalShadow[v]=Q,n.directionalShadowMap[v]=N,n.directionalShadowMatrix[v]=L.shadow.matrix,x++}n.directional[v]=U,v++}else if(L.isSpotLight){const U=t.get(L);if(U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(D).multiplyScalar(C*_),U.distance=I,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,L.castShadow){const k=L.shadow,Q=r.get(L);Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,n.spotShadow[m]=Q,n.spotShadowMap[m]=N,n.spotShadowMatrix[m]=L.shadow.matrix,S++}n.spot[m]=U,m++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(D).multiplyScalar(C),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=U,p++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity*_),U.distance=L.distance,U.decay=L.decay,L.castShadow){const k=L.shadow,Q=r.get(L);Q.shadowBias=k.bias,Q.shadowNormalBias=k.normalBias,Q.shadowRadius=k.radius,Q.shadowMapSize=k.mapSize,Q.shadowCameraNear=k.camera.near,Q.shadowCameraFar=k.camera.far,n.pointShadow[y]=Q,n.pointShadowMap[y]=N,n.pointShadowMatrix[y]=L.shadow.matrix,M++}n.point[y]=U,y++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(C*_),U.groundColor.copy(L.groundColor).multiplyScalar(C*_),n.hemi[b]=U,b++}}p>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=g;const E=n.hash;(E.directionalLength!==v||E.pointLength!==y||E.spotLength!==m||E.rectAreaLength!==p||E.hemiLength!==b||E.numDirectionalShadows!==x||E.numPointShadows!==M||E.numSpotShadows!==S)&&(n.directional.length=v,n.spot.length=m,n.rectArea.length=p,n.point.length=y,n.hemi.length=b,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotShadowMatrix.length=S,E.directionalLength=v,E.pointLength=y,E.spotLength=m,E.rectAreaLength=p,E.hemiLength=b,E.numDirectionalShadows=x,E.numPointShadows=M,E.numSpotShadows=S,n.version=Fg++)}function c(u,d){let h=0,f=0,g=0,v=0,y=0;const m=d.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const x=u[p];if(x.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(x.isSpotLight){const M=n.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const M=n.rectArea[v];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const M=n.hemi[y];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(m),M.direction.normalize(),y++}}}return{setup:l,setupView:c,state:n}}function yc(a,e){const t=new Bg(a,e),r=[],n=[];function i(){r.length=0,n.length=0}function s(d){r.push(d)}function o(d){n.push(d)}function l(d){t.setup(r,d)}function c(d){t.setupView(r,d)}return{init:i,state:{lightsArray:r,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function Ng(a,e){let t=new WeakMap;function r(i,s=0){let o;return t.has(i)===!1?(o=new yc(a,e),t.set(i,[o])):s>=t.get(i).length?(o=new yc(a,e),t.get(i).push(o)):o=t.get(i)[s],o}function n(){t=new WeakMap}return{get:r,dispose:n}}class Ya extends St{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}Ya.prototype.isMeshDepthMaterial=!0;class ja extends St{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}ja.prototype.isMeshDistanceMaterial=!0;const kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
uniform float samples;
#include <packing>
void main() {
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
}`;function _c(a,e,t){let r=new gs;const n=new le,i=new le,s=new He,o=new Ya({depthPacking:yl}),l=new ja,c={},u=t.maxTextureSize,d={0:ht,1:Qi,2:Bn},h=new Wn({uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4},samples:{value:8}},vertexShader:kg,fragmentShader:Og}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xt(g,h),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo,this.render=function(x,M,S){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||x.length===0)return;const _=a.getRenderTarget(),E=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),F=a.state;F.setBlending(xn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let L=0,D=x.length;L<D;L++){const C=x[L],I=C.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",C,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;n.copy(I.mapSize);const N=I.getFrameExtents();if(n.multiply(N),i.copy(I.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(i.x=Math.floor(u/N.x),n.x=i.x*N.x,I.mapSize.x=i.x),n.y>u&&(i.y=Math.floor(u/N.y),n.y=i.y*N.y,I.mapSize.y=i.y)),I.map===null&&!I.isPointLightShadow&&this.type===Ji){const k={minFilter:Dt,magFilter:Dt,format:Mt};I.map=new en(n.x,n.y,k),I.map.texture.name=C.name+".shadowMap",I.mapPass=new en(n.x,n.y,k),I.camera.updateProjectionMatrix()}if(I.map===null){const k={minFilter:ft,magFilter:ft,format:Mt};I.map=new en(n.x,n.y,k),I.map.texture.name=C.name+".shadowMap",I.camera.updateProjectionMatrix()}a.setRenderTarget(I.map),a.clear();const U=I.getViewportCount();for(let k=0;k<U;k++){const Q=I.getViewport(k);s.set(i.x*Q.x,i.y*Q.y,i.x*Q.z,i.y*Q.w),F.viewport(s),I.updateMatrices(C,k),r=I.getFrustum(),b(M,S,I.camera,C,this.type)}!I.isPointLightShadow&&this.type===Ji&&m(I,S),I.needsUpdate=!1}y.needsUpdate=!1,a.setRenderTarget(_,E,B)};function m(x,M){const S=e.update(v);h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,h.uniforms.samples.value=x.blurSamples,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(M,null,S,h,v,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,f.uniforms.samples.value=x.blurSamples,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(M,null,S,f,v,null)}function p(x,M,S,_,E,B,F){let L=null;const D=_.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(D!==void 0?L=D:L=_.isPointLight===!0?l:o,a.localClippingEnabled&&S.clipShadows===!0&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0){const C=L.uuid,I=S.uuid;let N=c[C];N===void 0&&(N={},c[C]=N);let U=N[I];U===void 0&&(U=L.clone(),N[I]=U),L=U}return L.visible=S.visible,L.wireframe=S.wireframe,F===Ji?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:d[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(_.matrixWorld),L.nearDistance=E,L.farDistance=B),L}function b(x,M,S,_,E){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&E===Ji)&&(!x.frustumCulled||r.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,x.matrixWorld);const L=e.update(x),D=x.material;if(Array.isArray(D)){const C=L.groups;for(let I=0,N=C.length;I<N;I++){const U=C[I],k=D[U.materialIndex];if(k&&k.visible){const Q=p(x,L,k,_,S.near,S.far,E);a.renderBufferDirect(S,null,L,Q,x,U)}}}else if(D.visible){const C=p(x,L,D,_,S.near,S.far,E);a.renderBufferDirect(S,null,L,C,x,null)}}const F=x.children;for(let L=0,D=F.length;L<D;L++)b(F[L],M,S,_,E)}}function zg(a,e,t){const r=t.isWebGL2;function n(){let P=!1;const J=new He;let q=null;const oe=new He(0,0,0,0);return{setMask:function(ge){q!==ge&&!P&&(a.colorMask(ge,ge,ge,ge),q=ge)},setLocked:function(ge){P=ge},setClear:function(ge,Te,De,Me,Pe){Pe===!0&&(ge*=Me,Te*=Me,De*=Me),J.set(ge,Te,De,Me),oe.equals(J)===!1&&(a.clearColor(ge,Te,De,Me),oe.copy(J))},reset:function(){P=!1,q=null,oe.set(-1,0,0,0)}}}function i(){let P=!1,J=null,q=null,oe=null;return{setTest:function(ge){ge?$(2929):xe(2929)},setMask:function(ge){J!==ge&&!P&&(a.depthMask(ge),J=ge)},setFunc:function(ge){if(q!==ge){if(ge)switch(ge){case Zu:a.depthFunc(512);break;case Ju:a.depthFunc(519);break;case Qu:a.depthFunc(513);break;case ea:a.depthFunc(515);break;case Ku:a.depthFunc(514);break;case $u:a.depthFunc(518);break;case eh:a.depthFunc(516);break;case th:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);q=ge}},setLocked:function(ge){P=ge},setClear:function(ge){oe!==ge&&(a.clearDepth(ge),oe=ge)},reset:function(){P=!1,J=null,q=null,oe=null}}}function s(){let P=!1,J=null,q=null,oe=null,ge=null,Te=null,De=null,Me=null,Pe=null;return{setTest:function(Ee){P||(Ee?$(2960):xe(2960))},setMask:function(Ee){J!==Ee&&!P&&(a.stencilMask(Ee),J=Ee)},setFunc:function(Ee,ke,rt){(q!==Ee||oe!==ke||ge!==rt)&&(a.stencilFunc(Ee,ke,rt),q=Ee,oe=ke,ge=rt)},setOp:function(Ee,ke,rt){(Te!==Ee||De!==ke||Me!==rt)&&(a.stencilOp(Ee,ke,rt),Te=Ee,De=ke,Me=rt)},setLocked:function(Ee){P=Ee},setClear:function(Ee){Pe!==Ee&&(a.clearStencil(Ee),Pe=Ee)},reset:function(){P=!1,J=null,q=null,oe=null,ge=null,Te=null,De=null,Me=null,Pe=null}}}const o=new n,l=new i,c=new s;let u={},d=null,h={},f=null,g=!1,v=null,y=null,m=null,p=null,b=null,x=null,M=null,S=!1,_=null,E=null,B=null,F=null,L=null;const D=a.getParameter(35661);let C=!1,I=0;const N=a.getParameter(7938);N.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(N)[1]),C=I>=1):N.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),C=I>=2);let U=null,k={};const Q=a.getParameter(3088),ae=a.getParameter(2978),ve=new He().fromArray(Q),Z=new He().fromArray(ae);function fe(P,J,q){const oe=new Uint8Array(4),ge=a.createTexture();a.bindTexture(P,ge),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let Te=0;Te<q;Te++)a.texImage2D(J+Te,0,6408,1,1,0,6408,5121,oe);return ge}const X={};X[3553]=fe(3553,3553,1),X[34067]=fe(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),$(2929),l.setFunc(ea),te(!1),re(qo),$(2884),me(xn);function $(P){u[P]!==!0&&(a.enable(P),u[P]=!0)}function xe(P){u[P]!==!1&&(a.disable(P),u[P]=!1)}function G(P){P!==d&&(a.bindFramebuffer(36160,P),d=P)}function ce(P,J){return J===null&&d!==null&&(J=d),h[P]!==J?(a.bindFramebuffer(P,J),h[P]=J,r&&(P===36009&&(h[36160]=J),P===36160&&(h[36009]=J)),!0):!1}function ye(P){return f!==P?(a.useProgram(P),f=P,!0):!1}const pe={[Kn]:32774,[ku]:32778,[Ou]:32779};if(r)pe[Ko]=32775,pe[$o]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(pe[Ko]=P.MIN_EXT,pe[$o]=P.MAX_EXT)}const ue={[zu]:0,[Gu]:1,[Vu]:768,[el]:770,[ju]:776,[qu]:774,[Wu]:772,[Hu]:769,[tl]:771,[Yu]:775,[Xu]:773};function me(P,J,q,oe,ge,Te,De,Me){if(P===xn){g===!0&&(xe(3042),g=!1);return}if(g===!1&&($(3042),g=!0),P!==Nu){if(P!==v||Me!==S){if((y!==Kn||b!==Kn)&&(a.blendEquation(32774),y=Kn,b=Kn),Me)switch(P){case Ki:a.blendFuncSeparate(1,771,1,771);break;case Zo:a.blendFunc(1,1);break;case Jo:a.blendFuncSeparate(0,0,769,771);break;case Qo:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ki:a.blendFuncSeparate(770,771,1,771);break;case Zo:a.blendFunc(770,1);break;case Jo:a.blendFunc(0,769);break;case Qo:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,p=null,x=null,M=null,v=P,S=Me}return}ge=ge||J,Te=Te||q,De=De||oe,(J!==y||ge!==b)&&(a.blendEquationSeparate(pe[J],pe[ge]),y=J,b=ge),(q!==m||oe!==p||Te!==x||De!==M)&&(a.blendFuncSeparate(ue[q],ue[oe],ue[Te],ue[De]),m=q,p=oe,x=Te,M=De),v=P,S=null}function j(P,J){P.side===Bn?xe(2884):$(2884);let q=P.side===ht;J&&(q=!q),te(q),P.blending===Ki&&P.transparent===!1?me(xn):me(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const oe=P.stencilWrite;c.setTest(oe),oe&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),he(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?$(32926):xe(32926)}function te(P){_!==P&&(P?a.frontFace(2304):a.frontFace(2305),_=P)}function re(P){P!==Fu?($(2884),P!==E&&(P===qo?a.cullFace(1029):P===Uu?a.cullFace(1028):a.cullFace(1032))):xe(2884),E=P}function be(P){P!==B&&(C&&a.lineWidth(P),B=P)}function he(P,J,q){P?($(32823),(F!==J||L!==q)&&(a.polygonOffset(J,q),F=J,L=q)):xe(32823)}function A(P){P?$(3089):xe(3089)}function w(P){P===void 0&&(P=33984+D-1),U!==P&&(a.activeTexture(P),U=P)}function V(P,J){U===null&&w();let q=k[U];q===void 0&&(q={type:void 0,texture:void 0},k[U]=q),(q.type!==P||q.texture!==J)&&(a.bindTexture(P,J||X[P]),q.type=P,q.texture=J)}function Y(){const P=k[U];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function O(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function se(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ee(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(P){ve.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),ve.copy(P))}function ie(P){Z.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),Z.copy(P))}function de(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),r===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},U=null,k={},d=null,h={},f=null,g=!1,v=null,y=null,m=null,p=null,b=null,x=null,M=null,S=!1,_=null,E=null,B=null,F=null,L=null,ve.set(0,0,a.canvas.width,a.canvas.height),Z.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:$,disable:xe,bindFramebuffer:ce,bindXRFramebuffer:G,useProgram:ye,setBlending:me,setMaterial:j,setFlipSided:te,setCullFace:re,setLineWidth:be,setPolygonOffset:he,setScissorTest:A,activeTexture:w,bindTexture:V,unbindTexture:Y,compressedTexImage2D:O,texImage2D:se,texImage3D:ee,scissor:ne,viewport:ie,reset:de}}function Gg(a,e,t,r,n,i,s){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,u=n.maxTextureSize,d=n.maxSamples,h=new WeakMap;let f,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return g?new OffscreenCanvas(A,w):Jr("canvas")}function y(A,w,V,Y){let O=1;if((A.width>Y||A.height>Y)&&(O=Y/Math.max(A.width,A.height)),O<1||w===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){const se=w?dd:Math.floor,ee=se(O*A.width),ne=se(O*A.height);f===void 0&&(f=v(ee,ne));const ie=V?v(ee,ne):f;return ie.width=ee,ie.height=ne,ie.getContext("2d").drawImage(A,0,0,ee,ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ee+"x"+ne+")."),ie}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return bl(A.width)&&bl(A.height)}function p(A){return o?!1:A.wrapS!==kt||A.wrapT!==kt||A.minFilter!==ft&&A.minFilter!==Dt}function b(A,w){return A.generateMipmaps&&w&&A.minFilter!==ft&&A.minFilter!==Dt}function x(A,w,V,Y,O=1){a.generateMipmap(A);const se=r.get(w);se.__maxMipLevel=Math.log2(Math.max(V,Y,O))}function M(A,w,V,Y){if(o===!1)return w;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let O=w;return w===6403&&(V===5126&&(O=33326),V===5131&&(O=33325),V===5121&&(O=33321)),w===6407&&(V===5126&&(O=34837),V===5131&&(O=34843),V===5121&&(O=32849)),w===6408&&(V===5126&&(O=34836),V===5131&&(O=34842),V===5121&&(O=Y===kn?35907:32856)),(O===33325||O===33326||O===34842||O===34836)&&e.get("EXT_color_buffer_float"),O}function S(A){return A===ft||A===il||A===rl?9728:9729}function _(A){const w=A.target;w.removeEventListener("dispose",_),B(w),w.isVideoTexture&&h.delete(w),s.memory.textures--}function E(A){const w=A.target;w.removeEventListener("dispose",E),F(w)}function B(A){const w=r.get(A);w.__webglInit!==void 0&&(a.deleteTexture(w.__webglTexture),r.remove(A))}function F(A){const w=A.texture,V=r.get(A),Y=r.get(w);if(!!A){if(Y.__webglTexture!==void 0&&(a.deleteTexture(Y.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let O=0;O<6;O++)a.deleteFramebuffer(V.__webglFramebuffer[O]),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[O]);else a.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer&&a.deleteRenderbuffer(V.__webglColorRenderbuffer),V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer);if(A.isWebGLMultipleRenderTargets)for(let O=0,se=w.length;O<se;O++){const ee=r.get(w[O]);ee.__webglTexture&&(a.deleteTexture(ee.__webglTexture),s.memory.textures--),r.remove(w[O])}r.remove(w),r.remove(A)}}let L=0;function D(){L=0}function C(){const A=L;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),L+=1,A}function I(A,w){const V=r.get(A);if(A.isVideoTexture&&j(A),A.version>0&&V.__version!==A.version){const Y=A.image;if(Y===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(V,A,w);return}}t.activeTexture(33984+w),t.bindTexture(3553,V.__webglTexture)}function N(A,w){const V=r.get(A);if(A.version>0&&V.__version!==A.version){fe(V,A,w);return}t.activeTexture(33984+w),t.bindTexture(35866,V.__webglTexture)}function U(A,w){const V=r.get(A);if(A.version>0&&V.__version!==A.version){fe(V,A,w);return}t.activeTexture(33984+w),t.bindTexture(32879,V.__webglTexture)}function k(A,w){const V=r.get(A);if(A.version>0&&V.__version!==A.version){X(V,A,w);return}t.activeTexture(33984+w),t.bindTexture(34067,V.__webglTexture)}const Q={[ra]:10497,[kt]:33071,[sa]:33648},ae={[ft]:9728,[il]:9984,[rl]:9986,[Dt]:9729,[ch]:9985,[Hr]:9987};function ve(A,w,V){if(V?(a.texParameteri(A,10242,Q[w.wrapS]),a.texParameteri(A,10243,Q[w.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,Q[w.wrapR]),a.texParameteri(A,10240,ae[w.magFilter]),a.texParameteri(A,10241,ae[w.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(w.wrapS!==kt||w.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,S(w.magFilter)),a.texParameteri(A,10241,S(w.minFilter)),w.minFilter!==ft&&w.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(w.type===_n&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===$n&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||r.get(w).__currentAnisotropy)&&(a.texParameterf(A,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy)}}function Z(A,w){A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",_),A.__webglTexture=a.createTexture(),s.memory.textures++)}function fe(A,w,V){let Y=3553;w.isDataTexture2DArray&&(Y=35866),w.isDataTexture3D&&(Y=32879),Z(A,w),t.activeTexture(33984+V),t.bindTexture(Y,A.__webglTexture),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const O=p(w)&&m(w.image)===!1,se=y(w.image,O,!1,u),ee=m(se)||o,ne=i.convert(w.format);let ie=i.convert(w.type),de=M(w.internalFormat,ne,ie,w.encoding);ve(Y,w,ee);let P;const J=w.mipmaps;if(w.isDepthTexture)de=6402,o?w.type===_n?de=36012:w.type===Xr?de=33190:w.type===$i?de=35056:de=33189:w.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ti&&de===6402&&w.type!==Wr&&w.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Wr,ie=i.convert(w.type)),w.format===er&&de===6402&&(de=34041,w.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=$i,ie=i.convert(w.type))),t.texImage2D(3553,0,de,se.width,se.height,0,ne,ie,null);else if(w.isDataTexture)if(J.length>0&&ee){for(let q=0,oe=J.length;q<oe;q++)P=J[q],t.texImage2D(3553,q,de,P.width,P.height,0,ne,ie,P.data);w.generateMipmaps=!1,A.__maxMipLevel=J.length-1}else t.texImage2D(3553,0,de,se.width,se.height,0,ne,ie,se.data),A.__maxMipLevel=0;else if(w.isCompressedTexture){for(let q=0,oe=J.length;q<oe;q++)P=J[q],w.format!==Mt&&w.format!==ei?ne!==null?t.compressedTexImage2D(3553,q,de,P.width,P.height,0,P.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):t.texImage2D(3553,q,de,P.width,P.height,0,ne,ie,P.data);A.__maxMipLevel=J.length-1}else if(w.isDataTexture2DArray)t.texImage3D(35866,0,de,se.width,se.height,se.depth,0,ne,ie,se.data),A.__maxMipLevel=0;else if(w.isDataTexture3D)t.texImage3D(32879,0,de,se.width,se.height,se.depth,0,ne,ie,se.data),A.__maxMipLevel=0;else if(J.length>0&&ee){for(let q=0,oe=J.length;q<oe;q++)P=J[q],t.texImage2D(3553,q,de,ne,ie,P);w.generateMipmaps=!1,A.__maxMipLevel=J.length-1}else t.texImage2D(3553,0,de,ne,ie,se),A.__maxMipLevel=0;b(w,ee)&&x(Y,w,se.width,se.height),A.__version=w.version,w.onUpdate&&w.onUpdate(w)}function X(A,w,V){if(w.image.length!==6)return;Z(A,w),t.activeTexture(33984+V),t.bindTexture(34067,A.__webglTexture),a.pixelStorei(37440,w.flipY),a.pixelStorei(37441,w.premultiplyAlpha),a.pixelStorei(3317,w.unpackAlignment),a.pixelStorei(37443,0);const Y=w&&(w.isCompressedTexture||w.image[0].isCompressedTexture),O=w.image[0]&&w.image[0].isDataTexture,se=[];for(let q=0;q<6;q++)!Y&&!O?se[q]=y(w.image[q],!1,!0,c):se[q]=O?w.image[q].image:w.image[q];const ee=se[0],ne=m(ee)||o,ie=i.convert(w.format),de=i.convert(w.type),P=M(w.internalFormat,ie,de,w.encoding);ve(34067,w,ne);let J;if(Y){for(let q=0;q<6;q++){J=se[q].mipmaps;for(let oe=0;oe<J.length;oe++){const ge=J[oe];w.format!==Mt&&w.format!==ei?ie!==null?t.compressedTexImage2D(34069+q,oe,P,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):t.texImage2D(34069+q,oe,P,ge.width,ge.height,0,ie,de,ge.data)}}A.__maxMipLevel=J.length-1}else{J=w.mipmaps;for(let q=0;q<6;q++)if(O){t.texImage2D(34069+q,0,P,se[q].width,se[q].height,0,ie,de,se[q].data);for(let oe=0;oe<J.length;oe++){const Te=J[oe].image[q].image;t.texImage2D(34069+q,oe+1,P,Te.width,Te.height,0,ie,de,Te.data)}}else{t.texImage2D(34069+q,0,P,ie,de,se[q]);for(let oe=0;oe<J.length;oe++){const ge=J[oe];t.texImage2D(34069+q,oe+1,P,ie,de,ge.image[q])}}A.__maxMipLevel=J.length}b(w,ne)&&x(34067,w,ee.width,ee.height),A.__version=w.version,w.onUpdate&&w.onUpdate(w)}function $(A,w,V,Y,O){const se=i.convert(V.format),ee=i.convert(V.type),ne=M(V.internalFormat,se,ee,V.encoding);O===32879||O===35866?t.texImage3D(O,0,ne,w.width,w.height,w.depth,0,se,ee,null):t.texImage2D(O,0,ne,w.width,w.height,0,se,ee,null),t.bindFramebuffer(36160,A),a.framebufferTexture2D(36160,Y,O,r.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function xe(A,w,V){if(a.bindRenderbuffer(36161,A),w.depthBuffer&&!w.stencilBuffer){let Y=33189;if(V){const O=w.depthTexture;O&&O.isDepthTexture&&(O.type===_n?Y=36012:O.type===Xr&&(Y=33190));const se=me(w);a.renderbufferStorageMultisample(36161,se,Y,w.width,w.height)}else a.renderbufferStorage(36161,Y,w.width,w.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(w.depthBuffer&&w.stencilBuffer){if(V){const Y=me(w);a.renderbufferStorageMultisample(36161,Y,35056,w.width,w.height)}else a.renderbufferStorage(36161,34041,w.width,w.height);a.framebufferRenderbuffer(36160,33306,36161,A)}else{const Y=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,O=i.convert(Y.format),se=i.convert(Y.type),ee=M(Y.internalFormat,O,se,Y.encoding);if(V){const ne=me(w);a.renderbufferStorageMultisample(36161,ne,ee,w.width,w.height)}else a.renderbufferStorage(36161,ee,w.width,w.height)}a.bindRenderbuffer(36161,null)}function G(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),I(w.depthTexture,0);const Y=r.get(w.depthTexture).__webglTexture;if(w.depthTexture.format===ti)a.framebufferTexture2D(36160,36096,3553,Y,0);else if(w.depthTexture.format===er)a.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function ce(A){const w=r.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture){if(V)throw new Error("target.depthTexture not supported in Cube render targets");G(w.__webglFramebuffer,A)}else if(V){w.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,w.__webglFramebuffer[Y]),w.__webglDepthbuffer[Y]=a.createRenderbuffer(),xe(w.__webglDepthbuffer[Y],A,!1)}else t.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=a.createRenderbuffer(),xe(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function ye(A){const w=A.texture,V=r.get(A),Y=r.get(w);A.addEventListener("dispose",E),A.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture=a.createTexture(),Y.__version=w.version,s.memory.textures++);const O=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,ee=A.isWebGLMultisampleRenderTarget===!0,ne=w.isDataTexture3D||w.isDataTexture2DArray,ie=m(A)||o;if(o&&w.format===ei&&(w.type===_n||w.type===$n)&&(w.format=Mt,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.")),O){V.__webglFramebuffer=[];for(let de=0;de<6;de++)V.__webglFramebuffer[de]=a.createFramebuffer()}else if(V.__webglFramebuffer=a.createFramebuffer(),se)if(n.drawBuffers){const de=A.texture;for(let P=0,J=de.length;P<J;P++){const q=r.get(de[P]);q.__webglTexture===void 0&&(q.__webglTexture=a.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(ee)if(o){V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=a.createRenderbuffer(),a.bindRenderbuffer(36161,V.__webglColorRenderbuffer);const de=i.convert(w.format),P=i.convert(w.type),J=M(w.internalFormat,de,P,w.encoding),q=me(A);a.renderbufferStorageMultisample(36161,q,J,A.width,A.height),t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064,36161,V.__webglColorRenderbuffer),a.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),xe(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");if(O){t.bindTexture(34067,Y.__webglTexture),ve(34067,w,ie);for(let de=0;de<6;de++)$(V.__webglFramebuffer[de],A,w,36064,34069+de);b(w,ie)&&x(34067,w,A.width,A.height),t.unbindTexture()}else if(se){const de=A.texture;for(let P=0,J=de.length;P<J;P++){const q=de[P],oe=r.get(q);t.bindTexture(3553,oe.__webglTexture),ve(3553,q,ie),$(V.__webglFramebuffer,A,q,36064+P,3553),b(q,ie)&&x(3553,q,A.width,A.height)}t.unbindTexture()}else{let de=3553;ne&&(o?de=w.isDataTexture3D?32879:35866:console.warn("THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.")),t.bindTexture(de,Y.__webglTexture),ve(de,w,ie),$(V.__webglFramebuffer,A,w,36064,de),b(w,ie)&&x(de,w,A.width,A.height,A.depth),t.unbindTexture()}A.depthBuffer&&ce(A)}function pe(A){const w=m(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Y=0,O=V.length;Y<O;Y++){const se=V[Y];if(b(se,w)){const ee=A.isWebGLCubeRenderTarget?34067:3553,ne=r.get(se).__webglTexture;t.bindTexture(ee,ne),x(ee,se,A.width,A.height),t.unbindTexture()}}}function ue(A){if(A.isWebGLMultisampleRenderTarget)if(o){const w=A.width,V=A.height;let Y=16384;A.depthBuffer&&(Y|=256),A.stencilBuffer&&(Y|=1024);const O=r.get(A);t.bindFramebuffer(36008,O.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,O.__webglFramebuffer),a.blitFramebuffer(0,0,w,V,0,0,w,V,Y,9728),t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,O.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function me(A){return o&&A.isWebGLMultisampleRenderTarget?Math.min(d,A.samples):0}function j(A){const w=s.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}let te=!1,re=!1;function be(A,w){A&&A.isWebGLRenderTarget&&(te===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),te=!0),A=A.texture),I(A,w)}function he(A,w){A&&A.isWebGLCubeRenderTarget&&(re===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),re=!0),A=A.texture),k(A,w)}this.allocateTextureUnit=C,this.resetTextureUnits=D,this.setTexture2D=I,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=k,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ue,this.safeSetTexture2D=be,this.safeSetTextureCube=he}function Vg(a,e,t){const r=t.isWebGL2;function n(i){let s;if(i===yn)return 5121;if(i===fh)return 32819;if(i===ph)return 32820;if(i===mh)return 33635;if(i===uh)return 5120;if(i===hh)return 5122;if(i===Wr)return 5123;if(i===dh)return 5124;if(i===Xr)return 5125;if(i===_n)return 5126;if(i===$n)return r?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===gh)return 6406;if(i===ei)return 6407;if(i===Mt)return 6408;if(i===vh)return 6409;if(i===xh)return 6410;if(i===ti)return 6402;if(i===er)return 34041;if(i===_h)return 6403;if(i===bh)return 36244;if(i===Mh)return 33319;if(i===wh)return 33320;if(i===Sh)return 36248;if(i===Th)return 36249;if(i===sl||i===al||i===ol||i===ll)if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cl||i===ul||i===hl||i===dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eh)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if((i===fl||i===pl)&&(s=e.get("WEBGL_compressed_texture_etc"),s!==null)){if(i===fl)return s.COMPRESSED_RGB8_ETC2;if(i===pl)return s.COMPRESSED_RGBA8_ETC2_EAC}if(i===Ah||i===Lh||i===Ch||i===Rh||i===Ph||i===Dh||i===Ih||i===Fh||i===Uh||i===Bh||i===Nh||i===kh||i===Oh||i===zh||i===Vh||i===Hh||i===Wh||i===Xh||i===qh||i===Yh||i===jh||i===Zh||i===Jh||i===Qh||i===Kh||i===$h||i===ed||i===td)return s=e.get("WEBGL_compressed_texture_astc"),s!==null?i:null;if(i===Gh)return s=e.get("EXT_texture_compression_bptc"),s!==null?i:null;if(i===$i)return r?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:n}}class bc extends Ft{constructor(e=[]){super();this.cameras=e}}bc.prototype.isArrayCamera=!0;class cr extends ze{constructor(){super();this.type="Group"}}cr.prototype.isGroup=!0;const Hg={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(n=t.getPose(e.targetRaySpace,r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hg))),c&&e.hand){s=!0;for(const v of e.hand.values()){const y=t.getJointPose(v,r);if(c.joints[v.jointName]===void 0){const p=new cr;p.matrixAutoUpdate=!1,p.visible=!1,c.joints[v.jointName]=p,c.add(p)}const m=c.joints[v.jointName];y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=y.radius),m.visible=y!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=s!==null),this}}class Wg extends On{constructor(e,t){super();const r=this,n=e.state;let i=null,s=1,o=null,l="local-floor",c=null,u=null,d=null,h=null,f=null,g=!1,v=null,y=null,m=null,p=null,b=null,x=null;const M=[],S=new Map,_=new Ft;_.layers.enable(1),_.viewport=new He;const E=new Ft;E.layers.enable(2),E.viewport=new He;const B=[_,E],F=new bc;F.layers.enable(1),F.layers.enable(2);let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=M[X];return $===void 0&&($=new Za,M[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=M[X];return $===void 0&&($=new Za,M[X]=$),$.getGripSpace()},this.getHand=function(X){let $=M[X];return $===void 0&&($=new Za,M[X]=$),$.getHandSpace()};function C(X){const $=S.get(X.inputSource);$&&$.dispatchEvent({type:X.type,data:X.inputSource})}function I(){S.forEach(function(X,$){X.disconnect($)}),S.clear(),L=null,D=null,n.bindXRFramebuffer(null),e.setRenderTarget(e.getRenderTarget()),d&&t.deleteFramebuffer(d),v&&t.deleteFramebuffer(v),y&&t.deleteRenderbuffer(y),m&&t.deleteRenderbuffer(m),d=null,v=null,y=null,m=null,f=null,h=null,u=null,i=null,fe.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",I),i.addEventListener("inputsourceschange",N);const $=t.getContextAttributes();if($.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0){const xe={antialias:$.antialias,alpha:$.alpha,depth:$.depth,stencil:$.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({baseLayer:f})}else if(t instanceof WebGLRenderingContext){const xe={antialias:!0,alpha:$.alpha,depth:$.depth,stencil:$.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,xe),i.updateRenderState({layers:[f]})}else{g=$.antialias;let xe=null;$.depth&&(x=256,$.stencil&&(x|=1024),b=$.stencil?33306:36096,xe=$.stencil?35056:33190);const G={colorFormat:$.alpha?32856:32849,depthFormat:xe,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(G),d=t.createFramebuffer(),i.updateRenderState({layers:[h]}),g&&(v=t.createFramebuffer(),y=t.createRenderbuffer(),t.bindRenderbuffer(36161,y),t.renderbufferStorageMultisample(36161,4,32856,h.textureWidth,h.textureHeight),n.bindFramebuffer(36160,v),t.framebufferRenderbuffer(36160,36064,36161,y),t.bindRenderbuffer(36161,null),xe!==null&&(m=t.createRenderbuffer(),t.bindRenderbuffer(36161,m),t.renderbufferStorageMultisample(36161,4,xe,h.textureWidth,h.textureHeight),t.framebufferRenderbuffer(36160,b,36161,m),t.bindRenderbuffer(36161,null)),n.bindFramebuffer(36160,null))}o=await i.requestReferenceSpace(l),fe.setContext(i),fe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}};function N(X){const $=i.inputSources;for(let xe=0;xe<M.length;xe++)S.set($[xe],M[xe]);for(let xe=0;xe<X.removed.length;xe++){const G=X.removed[xe],ce=S.get(G);ce&&(ce.dispatchEvent({type:"disconnected",data:G}),S.delete(G))}for(let xe=0;xe<X.added.length;xe++){const G=X.added[xe],ce=S.get(G);ce&&ce.dispatchEvent({type:"connected",data:G})}}const U=new R,k=new R;function Q(X,$,xe){U.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(xe.matrixWorld);const G=U.distanceTo(k),ce=$.projectionMatrix.elements,ye=xe.projectionMatrix.elements,pe=ce[14]/(ce[10]-1),ue=ce[14]/(ce[10]+1),me=(ce[9]+1)/ce[5],j=(ce[9]-1)/ce[5],te=(ce[8]-1)/ce[0],re=(ye[8]+1)/ye[0],be=pe*te,he=pe*re,A=G/(-te+re),w=A*-te;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(w),X.translateZ(A),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const V=pe+A,Y=ue+A,O=be-w,se=he+(G-w),ee=me*ue/Y*V,ne=j*ue/Y*V;X.projectionMatrix.makePerspective(O,se,ee,ne,V,Y)}function ae(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;F.near=E.near=_.near=X.near,F.far=E.far=_.far=X.far,(L!==F.near||D!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,D=F.far);const $=X.parent,xe=F.cameras;ae(F,$);for(let ce=0;ce<xe.length;ce++)ae(xe[ce],$);F.matrixWorld.decompose(F.position,F.quaternion,F.scale),X.position.copy(F.position),X.quaternion.copy(F.quaternion),X.scale.copy(F.scale),X.matrix.copy(F.matrix),X.matrixWorld.copy(F.matrixWorld);const G=X.children;for(let ce=0,ye=G.length;ce<ye;ce++)G[ce].updateMatrixWorld(!0);xe.length===2?Q(F,_,E):F.projectionMatrix.copy(_.projectionMatrix)},this.getCamera=function(){return F},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(X){h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let ve=null;function Z(X,$){if(c=$.getViewerPose(o),p=$,c!==null){const G=c.views;f!==null&&n.bindXRFramebuffer(f.framebuffer);let ce=!1;G.length!==F.cameras.length&&(F.cameras.length=0,ce=!0);for(let ye=0;ye<G.length;ye++){const pe=G[ye];let ue=null;if(f!==null)ue=f.getViewport(pe);else{const j=u.getViewSubImage(h,pe);n.bindXRFramebuffer(d),j.depthStencilTexture!==void 0&&t.framebufferTexture2D(36160,b,3553,j.depthStencilTexture,0),t.framebufferTexture2D(36160,36064,3553,j.colorTexture,0),ue=j.viewport}const me=B[ye];me.matrix.fromArray(pe.transform.matrix),me.projectionMatrix.fromArray(pe.projectionMatrix),me.viewport.set(ue.x,ue.y,ue.width,ue.height),ye===0&&F.matrix.copy(me.matrix),ce===!0&&F.cameras.push(me)}g&&(n.bindXRFramebuffer(v),x!==null&&t.clear(x))}const xe=i.inputSources;for(let G=0;G<M.length;G++){const ce=M[G],ye=xe[G];ce.update(ye,$,o)}if(ve&&ve(X,$),g){const G=h.textureWidth,ce=h.textureHeight;n.bindFramebuffer(36008,v),n.bindFramebuffer(36009,d),t.invalidateFramebuffer(36008,[b]),t.invalidateFramebuffer(36009,[b]),t.blitFramebuffer(0,0,G,ce,0,0,G,ce,16384,9728),t.invalidateFramebuffer(36008,[36064]),n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),n.bindFramebuffer(36160,v)}p=null}const fe=new Gl;fe.setAnimationLoop(Z),this.setAnimationLoop=function(X){ve=X},this.dispose=function(){}}}function Xg(a){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function t(m,p,b,x,M){p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),l(m,p)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),p.isMeshPhysicalMaterial?h(m,p,M):d(m,p)):p.isMeshMatcapMaterial?(r(m,p),f(m,p)):p.isMeshDepthMaterial?(r(m,p),g(m,p)):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?(r(m,p),y(m,p)):p.isLineBasicMaterial?(n(m,p),p.isLineDashedMaterial&&i(m,p)):p.isPointsMaterial?s(m,p,b,x):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=a.get(p).envMap;if(b){m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio;const S=a.get(b).__maxMipLevel;S!==void 0&&(m.maxMipLevel.value=S)}p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularTintMap?x=p.specularTintMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap&&(x=p.thicknessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix));let M;p.aoMap?M=p.aoMap:p.lightMap&&(M=p.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uv2Transform.value.copy(M.matrix))}function n(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function i(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function s(m,p,b,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=x*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M;p.map?M=p.map:p.alphaMap&&(M=p.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b;p.map?b=p.map:p.alphaMap&&(b=p.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix))}function l(m,p){p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),a.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){d(m,p),m.ior.value=p.ior,p.sheen>0&&(m.sheenTint.value.copy(p.sheenTint).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===ht&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationTint.value.copy(p.attenuationTint)),m.specularIntensity.value=p.specularIntensity,m.specularTint.value.copy(p.specularTint),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularTintMap&&(m.specularTintMap.value=p.specularTintMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function g(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}function v(m,p){p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}function y(m,p){p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function qg(){const a=Jr("canvas");return a.style.display="block",a}function qe(a={}){const e=a.canvas!==void 0?a.canvas:qg(),t=a.context!==void 0?a.context:null,r=a.alpha!==void 0?a.alpha:!1,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,l=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,c=a.powerPreference!==void 0?a.powerPreference:"default",u=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let d=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=wt,this.physicallyCorrectLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const v=this;let y=!1,m=0,p=0,b=null,x=-1,M=null;const S=new He,_=new He;let E=null,B=e.width,F=e.height,L=1,D=null,C=null;const I=new He(0,0,B,F),N=new He(0,0,B,F);let U=!1;const k=[],Q=new gs;let ae=!1,ve=!1,Z=null;const fe=new Ce,X=new R,$={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return b===null?L:1}let G=t;function ce(T,z){for(let H=0;H<T.length;H++){const W=T[H],K=e.getContext(W,z);if(K!==null)return K}return null}try{const T={alpha:r,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if(e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",Me,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&z.shift(),G=ce(z,T),G===null)throw ce(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,pe,ue,me,j,te,re,be,he,A,w,V,Y,O,se,ee,ne,ie,de,P,J,q,oe;function ge(){ye=new mm(G),pe=new om(G,ye,a),ye.init(pe),q=new Vg(G,ye,pe),ue=new zg(G,ye,pe),k[0]=1029,me=new xm(G),j=new Cg,te=new Gg(G,ye,ue,j,pe,q,me),re=new cm(v),be=new pm(v),he=new Rd(G,pe),oe=new sm(G,ye,he,pe),A=new gm(G,he,me,oe),w=new Mm(G,A,he,me),de=new bm(G,pe,te),ee=new lm(j),V=new Lg(v,re,be,ye,pe,oe,ee),Y=new Xg(j),O=new Pg(j),se=new Ng(ye,pe),ie=new rm(v,re,ue,w,o),ne=new _c(v,w,pe),P=new am(G,ye,me,pe),J=new vm(G,ye,me,pe),me.programs=V.programs,v.capabilities=pe,v.extensions=ye,v.properties=j,v.renderLists=O,v.shadowMap=ne,v.state=ue,v.info=me}ge();const Te=new Wg(v,G);this.xr=Te,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(B,F,!1))},this.getSize=function(T){return T.set(B,F)},this.setSize=function(T,z,H){if(Te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,F=z,e.width=Math.floor(T*L),e.height=Math.floor(z*L),H!==!1&&(e.style.width=T+"px",e.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(B*L,F*L).floor()},this.setDrawingBufferSize=function(T,z,H){B=T,F=z,L=H,e.width=Math.floor(T*H),e.height=Math.floor(z*H),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,z,H,W){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,z,H,W),ue.viewport(S.copy(I).multiplyScalar(L).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,z,H,W){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,z,H,W),ue.scissor(_.copy(N).multiplyScalar(L).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){ue.setScissorTest(U=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){C=T},this.getClearColor=function(T){return T.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(T,z,H){let W=0;(T===void 0||T)&&(W|=16384),(z===void 0||z)&&(W|=256),(H===void 0||H)&&(W|=1024),G.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",Me,!1),O.dispose(),se.dispose(),j.dispose(),re.dispose(),be.dispose(),w.dispose(),oe.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",mn),Te.removeEventListener("sessionend",ot),Z&&(Z.dispose(),Z=null),Vt.stop()};function De(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=me.autoReset,z=ne.enabled,H=ne.autoUpdate,W=ne.needsUpdate,K=ne.type;ge(),me.autoReset=T,ne.enabled=z,ne.autoUpdate=H,ne.needsUpdate=W,ne.type=K}function Pe(T){const z=T.target;z.removeEventListener("dispose",Pe),Ee(z)}function Ee(T){ke(T),j.remove(T)}function ke(T){const z=j.get(T).programs;z!==void 0&&z.forEach(function(H){V.releaseProgram(H)})}function rt(T,z){T.render(function(H){v.renderBufferImmediate(H,z)})}this.renderBufferImmediate=function(T,z){oe.initAttributes();const H=j.get(T);T.hasPositions&&!H.position&&(H.position=G.createBuffer()),T.hasNormals&&!H.normal&&(H.normal=G.createBuffer()),T.hasUvs&&!H.uv&&(H.uv=G.createBuffer()),T.hasColors&&!H.color&&(H.color=G.createBuffer());const W=z.getAttributes();T.hasPositions&&(G.bindBuffer(34962,H.position),G.bufferData(34962,T.positionArray,35048),oe.enableAttribute(W.position.location),G.vertexAttribPointer(W.position.location,3,5126,!1,0,0)),T.hasNormals&&(G.bindBuffer(34962,H.normal),G.bufferData(34962,T.normalArray,35048),oe.enableAttribute(W.normal.location),G.vertexAttribPointer(W.normal.location,3,5126,!1,0,0)),T.hasUvs&&(G.bindBuffer(34962,H.uv),G.bufferData(34962,T.uvArray,35048),oe.enableAttribute(W.uv.location),G.vertexAttribPointer(W.uv.location,2,5126,!1,0,0)),T.hasColors&&(G.bindBuffer(34962,H.color),G.bufferData(34962,T.colorArray,35048),oe.enableAttribute(W.color.location),G.vertexAttribPointer(W.color.location,3,5126,!1,0,0)),oe.disableUnusedAttributes(),G.drawArrays(4,0,T.count),T.count=0},this.renderBufferDirect=function(T,z,H,W,K,Re){z===null&&(z=$);const Le=K.isMesh&&K.matrixWorld.determinant()<0,Ae=At(T,z,H,W,K);ue.setMaterial(W,Le);let Fe=H.index;const Oe=H.attributes.position;if(Fe===null){if(Oe===void 0||Oe.count===0)return}else if(Fe.count===0)return;let Ie=1;W.wireframe===!0&&(Fe=A.getWireframeAttribute(H),Ie=2),oe.setup(K,W,Ae,H,Fe);let Be,$e=P;Fe!==null&&(Be=he.get(Fe),$e=J,$e.setIndex(Be));const Kt=Fe!==null?Fe.count:Oe.count,Ne=H.drawRange.start*Ie,an=H.drawRange.count*Ie,Ve=Re!==null?Re.start*Ie:0,we=Re!==null?Re.count*Ie:1/0,Ut=Math.max(Ne,Ve),on=Math.min(Kt,Ne+an,Ve+we)-1,Bt=Math.max(0,on-Ut+1);if(Bt!==0){if(K.isMesh)W.wireframe===!0?(ue.setLineWidth(W.wireframeLinewidth*xe()),$e.setMode(1)):$e.setMode(4);else if(K.isLine){let Qe=W.linewidth;Qe===void 0&&(Qe=1),ue.setLineWidth(Qe*xe()),K.isLineSegments?$e.setMode(1):K.isLineLoop?$e.setMode(2):$e.setMode(3)}else K.isPoints?$e.setMode(0):K.isSprite&&$e.setMode(4);if(K.isInstancedMesh)$e.renderInstances(Ut,Bt,K.count);else if(H.isInstancedBufferGeometry){const Qe=Math.min(H.instanceCount,H._maxInstanceCount);$e.renderInstances(Ut,Bt,Qe)}else $e.render(Ut,Bt)}},this.compile=function(T,z){h=se.get(T),h.init(),g.push(h),T.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights(v.physicallyCorrectLights),T.traverse(function(H){const W=H.material;if(W)if(Array.isArray(W))for(let K=0;K<W.length;K++){const Re=W[K];ct(Re,T,H)}else ct(W,T,H)}),g.pop(),h=null};let Ye=null;function Ze(T){Ye&&Ye(T)}function mn(){Vt.stop()}function ot(){Vt.start()}const Vt=new Gl;Vt.setAnimationLoop(Ze),typeof window!="undefined"&&Vt.setContext(window),this.setAnimationLoop=function(T){Ye=T,Te.setAnimationLoop(T),T===null?Vt.stop():Vt.start()},Te.addEventListener("sessionstart",mn),Te.addEventListener("sessionend",ot),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.autoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(z),z=Te.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,z,b),h=se.get(T,g.length),h.init(),g.push(h),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(fe),ve=this.localClippingEnabled,ae=ee.init(this.clippingPlanes,ve,z),d=O.get(T,f.length),d.init(),f.push(d),Je(T,z,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(D,C),ae===!0&&ee.beginShadows();const H=h.state.shadowsArray;if(ne.render(H,T,z),ae===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(d,T),h.setupLights(v.physicallyCorrectLights),z.isArrayCamera){const W=z.cameras;for(let K=0,Re=W.length;K<Re;K++){const Le=W[K];Ge(d,T,Le,Le.viewport)}}else Ge(d,T,z);b!==null&&(te.updateMultisampleRenderTarget(b),te.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(v,T,z),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1),oe.resetDefaultState(),x=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function Je(T,z,H,W){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){W&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Le=w.update(T),Ae=T.material;Ae.visible&&d.push(T,Le,Ae,H,X.z,null)}}else if(T.isImmediateRenderObject)W&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe),d.push(T,null,T.material,H,X.z,null);else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==me.render.frame&&(T.skeleton.update(),T.skeleton.frame=me.render.frame),!T.frustumCulled||Q.intersectsObject(T))){W&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const Le=w.update(T),Ae=T.material;if(Array.isArray(Ae)){const Fe=Le.groups;for(let Oe=0,Ie=Fe.length;Oe<Ie;Oe++){const Be=Fe[Oe],$e=Ae[Be.materialIndex];$e&&$e.visible&&d.push(T,Le,$e,H,X.z,Be)}}else Ae.visible&&d.push(T,Le,Ae,H,X.z,null)}}const Re=T.children;for(let Le=0,Ae=Re.length;Le<Ae;Le++)Je(Re[Le],z,H,W)}function Ge(T,z,H,W){const K=T.opaque,Re=T.transmissive,Le=T.transparent;h.setupLightsView(H),Re.length>0&&nt(K,z,H),W&&ue.viewport(S.copy(W)),K.length>0&&it(K,z,H),Re.length>0&&it(Re,z,H),Le.length>0&&it(Le,z,H)}function nt(T,z,H){if(Z===null){const Le=s===!0&&pe.isWebGL2===!0?wl:en;Z=new Le(1024,1024,{generateMipmaps:!0,type:q.convert($n)!==null?$n:yn,minFilter:Hr,magFilter:ft,wrapS:kt,wrapT:kt})}const W=v.getRenderTarget();v.setRenderTarget(Z),v.clear();const K=v.toneMapping;v.toneMapping=Nn,it(T,z,H),v.toneMapping=K,te.updateMultisampleRenderTarget(Z),te.updateRenderTargetMipmap(Z),v.setRenderTarget(W)}function it(T,z,H){const W=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Re=T.length;K<Re;K++){const Le=T[K],Ae=Le.object,Fe=Le.geometry,Oe=W===null?Le.material:W,Ie=Le.group;Ae.layers.test(H.layers)&&Xe(Ae,z,H,Fe,Oe,Ie)}}function Xe(T,z,H,W,K,Re){if(T.onBeforeRender(v,z,H,W,K,Re),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(v,z,H,W,T,Re),T.isImmediateRenderObject){const Le=At(H,z,W,K,T);ue.setMaterial(K),oe.reset(),rt(T,Le)}else K.transparent===!0&&K.side===Bn?(K.side=ht,K.needsUpdate=!0,v.renderBufferDirect(H,z,W,K,T,Re),K.side=Qi,K.needsUpdate=!0,v.renderBufferDirect(H,z,W,K,T,Re),K.side=Bn):v.renderBufferDirect(H,z,W,K,T,Re);T.onAfterRender(v,z,H,W,K,Re)}function ct(T,z,H){z.isScene!==!0&&(z=$);const W=j.get(T),K=h.state.lights,Re=h.state.shadowsArray,Le=K.state.version,Ae=V.getParameters(T,K.state,Re,z,H),Fe=V.getProgramCacheKey(Ae);let Oe=W.programs;W.environment=T.isMeshStandardMaterial?z.environment:null,W.fog=z.fog,W.envMap=(T.isMeshStandardMaterial?be:re).get(T.envMap||W.environment),Oe===void 0&&(T.addEventListener("dispose",Pe),Oe=new Map,W.programs=Oe);let Ie=Oe.get(Fe);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===Le)return Rt(T,Ae),Ie}else Ae.uniforms=V.getUniforms(T),T.onBuild(Ae,v),T.onBeforeCompile(Ae,v),Ie=V.acquireProgram(Ae,Fe),Oe.set(Fe,Ie),W.uniforms=Ae.uniforms;const Be=W.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ee.uniform),Rt(T,Ae),W.needsLights=Lt(T),W.lightsStateVersion=Le,W.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotShadowMatrix.value=K.state.spotShadowMatrix,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix);const $e=Ie.getUniforms(),Kt=Rn.seqWithValue($e.seq,Be);return W.currentProgram=Ie,W.uniformsList=Kt,Ie}function Rt(T,z){const H=j.get(T);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents}function At(T,z,H,W,K){z.isScene!==!0&&(z=$),te.resetTextureUnits();const Re=z.fog,Le=W.isMeshStandardMaterial?z.environment:null,Ae=b===null?v.outputEncoding:b.texture.encoding,Fe=(W.isMeshStandardMaterial?be:re).get(W.envMap||Le),Oe=W.vertexColors===!0&&!!H&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!W.normalMap&&!!H&&!!H.attributes.tangent,Be=!!H&&!!H.morphAttributes.position,$e=!!H&&!!H.morphAttributes.normal,Kt=!!H&&!!H.morphAttributes.position?H.morphAttributes.position.length:0,Ne=j.get(W),an=h.state.lights;if(ae===!0&&(ve===!0||T!==M)){const _t=T===M&&W.id===x;ee.setState(W,T,_t)}let Ve=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==an.state.version||Ne.outputEncoding!==Ae||K.isInstancedMesh&&Ne.instancing===!1||!K.isInstancedMesh&&Ne.instancing===!0||K.isSkinnedMesh&&Ne.skinning===!1||!K.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Fe||W.fog&&Ne.fog!==Re||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ee.numPlanes||Ne.numIntersection!==ee.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==Ie||Ne.morphTargets!==Be||Ne.morphNormals!==$e||pe.isWebGL2===!0&&Ne.morphTargetsCount!==Kt)&&(Ve=!0):(Ve=!0,Ne.__version=W.version);let we=Ne.currentProgram;Ve===!0&&(we=ct(W,z,K));let Ut=!1,on=!1,Bt=!1;const Qe=we.getUniforms(),ln=Ne.uniforms;if(ue.useProgram(we.program)&&(Ut=!0,on=!0,Bt=!0),W.id!==x&&(x=W.id,on=!0),Ut||M!==T){if(Qe.setValue(G,"projectionMatrix",T.projectionMatrix),pe.logarithmicDepthBuffer&&Qe.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,on=!0,Bt=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const _t=Qe.map.cameraPosition;_t!==void 0&&_t.setValue(G,X.setFromMatrixPosition(T.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Qe.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||K.isSkinnedMesh)&&Qe.setValue(G,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){Qe.setOptional(G,K,"bindMatrix"),Qe.setOptional(G,K,"bindMatrixInverse");const _t=K.skeleton;_t&&(pe.floatVertexTextures?(_t.boneTexture===null&&_t.computeBoneTexture(),Qe.setValue(G,"boneTexture",_t.boneTexture,te),Qe.setValue(G,"boneTextureSize",_t.boneTextureSize)):Qe.setOptional(G,_t,"boneMatrices"))}return!!H&&(H.morphAttributes.position!==void 0||H.morphAttributes.normal!==void 0)&&de.update(K,H,W,we),(on||Ne.receiveShadow!==K.receiveShadow)&&(Ne.receiveShadow=K.receiveShadow,Qe.setValue(G,"receiveShadow",K.receiveShadow)),on&&(Qe.setValue(G,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&ut(ln,Bt),Re&&W.fog&&Y.refreshFogUniforms(ln,Re),Y.refreshMaterialUniforms(ln,W,L,F,Z),Rn.upload(G,Ne.uniformsList,ln,te)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Rn.upload(G,Ne.uniformsList,ln,te),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Qe.setValue(G,"center",K.center),Qe.setValue(G,"modelViewMatrix",K.modelViewMatrix),Qe.setValue(G,"normalMatrix",K.normalMatrix),Qe.setValue(G,"modelMatrix",K.matrixWorld),we}function ut(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Lt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return b},this.setRenderTarget=function(T,z=0,H=0){b=T,m=z,p=H,T&&j.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T);let W=null,K=!1,Re=!1;if(T){const Ae=T.texture;(Ae.isDataTexture3D||Ae.isDataTexture2DArray)&&(Re=!0);const Fe=j.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(W=Fe[z],K=!0):T.isWebGLMultisampleRenderTarget?W=j.get(T).__webglMultisampledFramebuffer:W=Fe,S.copy(T.viewport),_.copy(T.scissor),E=T.scissorTest}else S.copy(I).multiplyScalar(L).floor(),_.copy(N).multiplyScalar(L).floor(),E=U;if(ue.bindFramebuffer(36160,W)&&pe.drawBuffers){let Ae=!1;if(T)if(T.isWebGLMultipleRenderTargets){const Fe=T.texture;if(k.length!==Fe.length||k[0]!==36064){for(let Oe=0,Ie=Fe.length;Oe<Ie;Oe++)k[Oe]=36064+Oe;k.length=Fe.length,Ae=!0}}else(k.length!==1||k[0]!==36064)&&(k[0]=36064,k.length=1,Ae=!0);else(k.length!==1||k[0]!==1029)&&(k[0]=1029,k.length=1,Ae=!0);Ae&&(pe.isWebGL2?G.drawBuffers(k):ye.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}if(ue.viewport(S),ue.scissor(_),ue.setScissorTest(E),K){const Ae=j.get(T.texture);G.framebufferTexture2D(36160,36064,34069+z,Ae.__webglTexture,H)}else if(Re){const Ae=j.get(T.texture),Fe=z||0;G.framebufferTextureLayer(36160,36064,Ae.__webglTexture,H||0,Fe)}x=-1},this.readRenderTargetPixels=function(T,z,H,W,K,Re,Le){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=j.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ae=Ae[Le]),Ae){ue.bindFramebuffer(36160,Ae);try{const Fe=T.texture,Oe=Fe.format,Ie=Fe.type;if(Oe!==Mt&&q.convert(Oe)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Ie===$n&&(ye.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ie!==yn&&q.convert(Ie)!==G.getParameter(35738)&&!(Ie===_n&&(pe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G.checkFramebufferStatus(36160)===36053?z>=0&&z<=T.width-W&&H>=0&&H<=T.height-K&&G.readPixels(z,H,W,K,q.convert(Oe),q.convert(Ie),Re):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Fe=b!==null?j.get(b).__webglFramebuffer:null;ue.bindFramebuffer(36160,Fe)}}},this.copyFramebufferToTexture=function(T,z,H=0){const W=Math.pow(2,-H),K=Math.floor(z.image.width*W),Re=Math.floor(z.image.height*W);let Le=q.convert(z.format);pe.isWebGL2&&(Le===6407&&(Le=32849),Le===6408&&(Le=32856)),te.setTexture2D(z,0),G.copyTexImage2D(3553,H,Le,T.x,T.y,K,Re,0),ue.unbindTexture()},this.copyTextureToTexture=function(T,z,H,W=0){const K=z.image.width,Re=z.image.height,Le=q.convert(H.format),Ae=q.convert(H.type);te.setTexture2D(H,0),G.pixelStorei(37440,H.flipY),G.pixelStorei(37441,H.premultiplyAlpha),G.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,W,T.x,T.y,K,Re,Le,Ae,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,W,T.x,T.y,z.mipmaps[0].width,z.mipmaps[0].height,Le,z.mipmaps[0].data):G.texSubImage2D(3553,W,T.x,T.y,Le,Ae,z.image),W===0&&H.generateMipmaps&&G.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,z,H,W,K=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=T.max.x-T.min.x+1,Le=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Fe=q.convert(W.format),Oe=q.convert(W.type);let Ie;if(W.isDataTexture3D)te.setTexture3D(W,0),Ie=32879;else if(W.isDataTexture2DArray)te.setTexture2DArray(W,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment);const Be=G.getParameter(3314),$e=G.getParameter(32878),Kt=G.getParameter(3316),Ne=G.getParameter(3315),an=G.getParameter(32877),Ve=H.isCompressedTexture?H.mipmaps[0]:H.image;G.pixelStorei(3314,Ve.width),G.pixelStorei(32878,Ve.height),G.pixelStorei(3316,T.min.x),G.pixelStorei(3315,T.min.y),G.pixelStorei(32877,T.min.z),H.isDataTexture||H.isDataTexture3D?G.texSubImage3D(Ie,K,z.x,z.y,z.z,Re,Le,Ae,Fe,Oe,Ve.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ie,K,z.x,z.y,z.z,Re,Le,Ae,Fe,Ve.data)):G.texSubImage3D(Ie,K,z.x,z.y,z.z,Re,Le,Ae,Fe,Oe,Ve),G.pixelStorei(3314,Be),G.pixelStorei(32878,$e),G.pixelStorei(3316,Kt),G.pixelStorei(3315,Ne),G.pixelStorei(32877,an),K===0&&W.generateMipmaps&&G.generateMipmap(Ie),ue.unbindTexture()},this.initTexture=function(T){te.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){m=0,p=0,b=null,ue.reset(),oe.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Yg extends qe{}Yg.prototype.isWebGL1Renderer=!0;class Mc extends ze{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}Mc.prototype.isScene=!0;class ur{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=$t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,i=this.stride;n<i;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}ur.prototype.isInterleavedBuffer=!0;const at=new R;class hr{constructor(e,t,r,n=!1){this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)at.x=this.getX(t),at.y=this.getY(t),at.z=this.getZ(t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=n,this.data.array[e+3]=i,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return new dt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const n=r*this.data.stride+this.offset;for(let i=0;i<this.itemSize;i++)t.push(this.data.array[n+i])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}hr.prototype.isInterleavedBufferAttribute=!0;class wc extends St{constructor(e){super();this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}wc.prototype.isSpriteMaterial=!0;let Ai;const dr=new R,Li=new R,Ci=new R,Ri=new le,fr=new le,Sc=new Ce,_s=new R,pr=new R,bs=new R,Tc=new le,Ja=new le,Ec=new le;class jg extends ze{constructor(e){super();if(this.type="Sprite",Ai===void 0){Ai=new Ke;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new ur(t,5);Ai.setIndex([0,1,2,0,2,3]),Ai.setAttribute("position",new hr(r,3,0,!1)),Ai.setAttribute("uv",new hr(r,2,3,!1))}this.geometry=Ai,this.material=e!==void 0?e:new wc,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),Sc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ci.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Ci.z);const r=this.material.rotation;let n,i;r!==0&&(i=Math.cos(r),n=Math.sin(r));const s=this.center;Ms(_s.set(-.5,-.5,0),Ci,s,Li,n,i),Ms(pr.set(.5,-.5,0),Ci,s,Li,n,i),Ms(bs.set(.5,.5,0),Ci,s,Li,n,i),Tc.set(0,0),Ja.set(1,0),Ec.set(1,1);let o=e.ray.intersectTriangle(_s,pr,bs,!1,dr);if(o===null&&(Ms(pr.set(-.5,.5,0),Ci,s,Li,n,i),Ja.set(0,1),o=e.ray.intersectTriangle(_s,bs,pr,!1,dr),o===null))return;const l=e.ray.origin.distanceTo(dr);l<e.near||l>e.far||t.push({distance:l,point:dr.clone(),uv:lt.getUV(dr,_s,pr,bs,Tc,Ja,Ec,new le),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}jg.prototype.isSprite=!0;function Ms(a,e,t,r,n,i){Ri.subVectors(a,t).addScalar(.5).multiply(r),n!==void 0?(fr.x=i*Ri.x-n*Ri.y,fr.y=n*Ri.x+i*Ri.y):fr.copy(Ri),a.copy(e),a.x+=fr.x,a.y+=fr.y,a.applyMatrix4(Sc)}const Ac=new R,Lc=new He,Cc=new He,Zg=new R,Rc=new Ce;class Pc extends xt{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new He,t=this.geometry.attributes.skinWeight;for(let r=0,n=t.count;r<n;r++){e.x=t.getX(r),e.y=t.getY(r),e.z=t.getZ(r),e.w=t.getW(r);const i=1/e.manhattanLength();i!==1/0?e.multiplyScalar(i):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const r=this.skeleton,n=this.geometry;Lc.fromBufferAttribute(n.attributes.skinIndex,e),Cc.fromBufferAttribute(n.attributes.skinWeight,e),Ac.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let i=0;i<4;i++){const s=Cc.getComponent(i);if(s!==0){const o=Lc.getComponent(i);Rc.multiplyMatrices(r.bones[o].matrixWorld,r.boneInverses[o]),t.addScaledVector(Zg.copy(Ac).applyMatrix4(Rc),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}Pc.prototype.isSkinnedMesh=!0;class Jg extends ze{constructor(){super();this.type="Bone"}}Jg.prototype.isBone=!0;class Dc extends vt{constructor(e=null,t=1,r=1,n,i,s,o,l,c=ft,u=ft,d,h){super(null,s,o,l,c,u,n,i,d,h);this.image={data:e,width:t,height:r},this.magFilter=c,this.minFilter=u,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}}Dc.prototype.isDataTexture=!0;class ws extends dt{constructor(e,t,r,n=1){typeof r=="number"&&(n=r,r=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,r);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}ws.prototype.isInstancedBufferAttribute=!0;const Ic=new Ce,Fc=new Ce,Ss=[],mr=new xt;class Qg extends xt{constructor(e,t,r){super(e,t);this.instanceMatrix=new ws(new Float32Array(r*16),16),this.instanceColor=null,this.count=r,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const r=this.matrixWorld,n=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0)for(let i=0;i<n;i++){this.getMatrixAt(i,Ic),Fc.multiplyMatrices(r,Ic),mr.matrixWorld=Fc,mr.raycast(e,Ss);for(let s=0,o=Ss.length;s<o;s++){const l=Ss[s];l.instanceId=i,l.object=this,t.push(l)}Ss.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Qg.prototype.isInstancedMesh=!0;class gr extends St{constructor(e){super();this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}gr.prototype.isLineBasicMaterial=!0;const Uc=new R,Bc=new R,Nc=new Ce,Qa=new Hn,Ts=new Vn;class Ka extends ze{constructor(e=new Ke,t=new gr){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[0];for(let n=1,i=t.count;n<i;n++)Uc.fromBufferAttribute(t,n-1),Bc.fromBufferAttribute(t,n),r[n]=r[n-1],r[n]+=Uc.distanceTo(Bc);e.setAttribute("lineDistance",new st(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ts.copy(r.boundingSphere),Ts.applyMatrix4(n),Ts.radius+=i,e.ray.intersectsSphere(Ts)===!1)return;Nc.copy(n).invert(),Qa.copy(e.ray).applyMatrix4(Nc);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,u=new R,d=new R,h=new R,f=this.isLineSegments?2:1;if(r.isBufferGeometry){const g=r.index,y=r.attributes.position;if(g!==null){const m=Math.max(0,s.start),p=Math.min(g.count,s.start+s.count);for(let b=m,x=p-1;b<x;b+=f){const M=g.getX(b),S=g.getX(b+1);if(c.fromBufferAttribute(y,M),u.fromBufferAttribute(y,S),Qa.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(h);E<e.near||E>e.far||t.push({distance:E,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,s.start),p=Math.min(y.count,s.start+s.count);for(let b=m,x=p-1;b<x;b+=f){if(c.fromBufferAttribute(y,b),u.fromBufferAttribute(y,b+1),Qa.distanceSqToSegment(c,u,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else r.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ka.prototype.isLine=!0;const kc=new R,Oc=new R;class $a extends Ka{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,r=[];for(let n=0,i=t.count;n<i;n+=2)kc.fromBufferAttribute(t,n),Oc.fromBufferAttribute(t,n+1),r[n]=n===0?0:r[n-1],r[n+1]=r[n]+kc.distanceTo(Oc);e.setAttribute("lineDistance",new st(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}$a.prototype.isLineSegments=!0;class Kg extends Ka{constructor(e,t){super(e,t);this.type="LineLoop"}}Kg.prototype.isLineLoop=!0;class zc extends St{constructor(e){super();this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}zc.prototype.isPointsMaterial=!0;const Gc=new Ce,eo=new Hn,Es=new Vn,As=new R;class $g extends ze{constructor(e=new Ke,t=new zc){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Es.copy(r.boundingSphere),Es.applyMatrix4(n),Es.radius+=i,e.ray.intersectsSphere(Es)===!1)return;Gc.copy(n).invert(),eo.copy(e.ray).applyMatrix4(Gc);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(r.isBufferGeometry){const c=r.index,d=r.attributes.position;if(c!==null){const h=Math.max(0,s.start),f=Math.min(c.count,s.start+s.count);for(let g=h,v=f;g<v;g++){const y=c.getX(g);As.fromBufferAttribute(d,y),Vc(As,y,l,n,e,t,this)}}else{const h=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let g=h,v=f;g<v;g++)As.fromBufferAttribute(d,g),Vc(As,g,l,n,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,r=Object.keys(t);if(r.length>0){const n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){const o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}$g.prototype.isPoints=!0;function Vc(a,e,t,r,n,i,s){const o=eo.distanceSqToPoint(a);if(o<t){const l=new R;eo.closestPointToPoint(a,l),l.applyMatrix4(r);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;i.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class ev extends vt{constructor(e,t,r,n,i,s,o,l,c){super(e,t,r,n,i,s,o,l,c);this.format=o!==void 0?o:ei,this.minFilter=s!==void 0?s:Dt,this.magFilter=i!==void 0?i:Dt,this.generateMipmaps=!1;const u=this;function d(){u.needsUpdate=!0,e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}ev.prototype.isVideoTexture=!0;class tv extends vt{constructor(e,t,r,n,i,s,o,l,c,u,d,h){super(null,s,o,l,c,u,n,i,d,h);this.image={width:t,height:r},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}tv.prototype.isCompressedTexture=!0;class nv extends vt{constructor(e,t,r,n,i,s,o,l,c){super(e,t,r,n,i,s,o,l,c);this.needsUpdate=!0}}nv.prototype.isCanvasTexture=!0;class iv extends vt{constructor(e,t,r,n,i,s,o,l,c,u){if(u=u!==void 0?u:ti,u!==ti&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===ti&&(r=Wr),r===void 0&&u===er&&(r=$i);super(null,n,i,s,o,l,u,r,c);this.image={width:e,height:t},this.magFilter=o!==void 0?o:ft,this.minFilter=l!==void 0?l:ft,this.flipY=!1,this.generateMipmaps=!1}}iv.prototype.isDepthTexture=!0;class to extends Ke{constructor(e=[],t=[],r=1,n=0){super();this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:n};const i=[],s=[];o(n),c(r),u(),this.setAttribute("position",new st(i,3)),this.setAttribute("normal",new st(i.slice(),3)),this.setAttribute("uv",new st(s,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(p){const b=new R,x=new R,M=new R;for(let S=0;S<t.length;S+=3)f(t[S+0],b),f(t[S+1],x),f(t[S+2],M),l(b,x,M,p)}function l(p,b,x,M){const S=M+1,_=[];for(let E=0;E<=S;E++){_[E]=[];const B=p.clone().lerp(x,E/S),F=b.clone().lerp(x,E/S),L=S-E;for(let D=0;D<=L;D++)D===0&&E===S?_[E][D]=B:_[E][D]=B.clone().lerp(F,D/L)}for(let E=0;E<S;E++)for(let B=0;B<2*(S-E)-1;B++){const F=Math.floor(B/2);B%2==0?(h(_[E][F+1]),h(_[E+1][F]),h(_[E][F])):(h(_[E][F+1]),h(_[E+1][F+1]),h(_[E+1][F]))}}function c(p){const b=new R;for(let x=0;x<i.length;x+=3)b.x=i[x+0],b.y=i[x+1],b.z=i[x+2],b.normalize().multiplyScalar(p),i[x+0]=b.x,i[x+1]=b.y,i[x+2]=b.z}function u(){const p=new R;for(let b=0;b<i.length;b+=3){p.x=i[b+0],p.y=i[b+1],p.z=i[b+2];const x=y(p)/2/Math.PI+.5,M=m(p)/Math.PI+.5;s.push(x,1-M)}g(),d()}function d(){for(let p=0;p<s.length;p+=6){const b=s[p+0],x=s[p+2],M=s[p+4],S=Math.max(b,x,M),_=Math.min(b,x,M);S>.9&&_<.1&&(b<.2&&(s[p+0]+=1),x<.2&&(s[p+2]+=1),M<.2&&(s[p+4]+=1))}}function h(p){i.push(p.x,p.y,p.z)}function f(p,b){const x=p*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const p=new R,b=new R,x=new R,M=new R,S=new le,_=new le,E=new le;for(let B=0,F=0;B<i.length;B+=9,F+=6){p.set(i[B+0],i[B+1],i[B+2]),b.set(i[B+3],i[B+4],i[B+5]),x.set(i[B+6],i[B+7],i[B+8]),S.set(s[F+0],s[F+1]),_.set(s[F+2],s[F+3]),E.set(s[F+4],s[F+5]),M.copy(p).add(b).add(x).divideScalar(3);const L=y(M);v(S,F+0,p,L),v(_,F+2,b,L),v(E,F+4,x,L)}}function v(p,b,x,M){M<0&&p.x===1&&(s[b]=p.x-1),x.x===0&&x.z===0&&(s[b]=M/2/Math.PI+.5)}function y(p){return Math.atan2(p.z,-p.x)}function m(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}static fromJSON(e){return new to(e.vertices,e.indices,e.radius,e.details)}}new R;new R;new R;new lt;class Xt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,n=this.getPoint(0),i=0;t.push(0);for(let s=1;s<=e;s++)r=this.getPoint(s/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let n=0;const i=r.length;let s;t?s=t:s=e*r[i-1];let o=0,l=i-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=r[n]-s,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,r[n]===s)return n/(i-1);const u=r[n],h=r[n+1]-u,f=(s-u)/h;return(n+f)/(i-1)}getTangent(e,t){const r=1e-4;let n=e-r,i=e+r;n<0&&(n=0),i>1&&(i=1);const s=this.getPoint(n),o=this.getPoint(i),l=t||(s.isVector2?new le:new R);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new R,n=[],i=[],s=[],o=new R,l=new Ce;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new R)}i[0]=new R,s[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(n[0].x),d=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=c&&(c=u,r.set(1,0,0)),d<=c&&(c=d,r.set(0,1,0)),h<=c&&r.set(0,0,1),o.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],o),s[0].crossVectors(n[0],i[0]);for(let f=1;f<=e;f++){if(i[f]=i[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ot(n[f-1].dot(n[f]),-1,1));i[f].applyMatrix4(l.makeRotationAxis(o,g))}s[f].crossVectors(n[f],i[f])}if(t===!0){let f=Math.acos(Ot(i[0].dot(i[e]),-1,1));f/=e,n[0].dot(o.crossVectors(i[0],i[e]))>0&&(f=-f);for(let g=1;g<=e;g++)i[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),s[g].crossVectors(n[g],i[g])}return{tangents:n,normals:i,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ls extends Xt{constructor(e=0,t=0,r=1,n=1,i=0,s=Math.PI*2,o=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const r=t||new le,n=Math.PI*2;let i=this.aEndAngle-this.aStartAngle;const s=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(s?i=0:i=n),this.aClockwise===!0&&!s&&(i===n?i=-n:i=i-n);const o=this.aStartAngle+e*i;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return r.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Ls.prototype.isEllipseCurve=!0;class Hc extends Ls{constructor(e,t,r,n,i,s){super(e,t,r,r,n,i,s);this.type="ArcCurve"}}Hc.prototype.isArcCurve=!0;function no(){let a=0,e=0,t=0,r=0;function n(i,s,o,l){a=i,e=o,t=-3*i+3*s-2*o-l,r=2*i-2*s+o+l}return{initCatmullRom:function(i,s,o,l,c){n(s,o,c*(o-i),c*(l-s))},initNonuniformCatmullRom:function(i,s,o,l,c,u,d){let h=(s-i)/c-(o-i)/(c+u)+(o-s)/u,f=(o-s)/u-(l-s)/(u+d)+(l-o)/d;h*=u,f*=u,n(s,o,h,f)},calc:function(i){const s=i*i,o=s*i;return a+e*i+t*s+r*o}}}const Cs=new R,io=new no,ro=new no,so=new no;class Wc extends Xt{constructor(e=[],t=!1,r="centripetal",n=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new R){const r=t,n=this.points,i=n.length,s=(i-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:l===0&&o===i-1&&(o=i-2,l=1);let c,u;this.closed||o>0?c=n[(o-1)%i]:(Cs.subVectors(n[0],n[1]).add(n[0]),c=Cs);const d=n[o%i],h=n[(o+1)%i];if(this.closed||o+2<i?u=n[(o+2)%i]:(Cs.subVectors(n[i-1],n[i-2]).add(n[i-1]),u=Cs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),g<1e-4&&(g=v),y<1e-4&&(y=v),io.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,v,y),ro.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,v,y),so.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,v,y)}else this.curveType==="catmullrom"&&(io.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),ro.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),so.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return r.set(io.calc(l),ro.calc(l),so.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Wc.prototype.isCatmullRomCurve3=!0;function Xc(a,e,t,r,n){const i=(r-e)*.5,s=(n-t)*.5,o=a*a,l=a*o;return(2*t-2*r+i+s)*l+(-3*t+3*r-2*i-s)*o+i*a+t}function rv(a,e){const t=1-a;return t*t*e}function sv(a,e){return 2*(1-a)*a*e}function av(a,e){return a*a*e}function vr(a,e,t,r){return rv(a,e)+sv(a,t)+av(a,r)}function ov(a,e){const t=1-a;return t*t*t*e}function lv(a,e){const t=1-a;return 3*t*t*a*e}function cv(a,e){return 3*(1-a)*a*a*e}function uv(a,e){return a*a*a*e}function xr(a,e,t,r,n){return ov(a,e)+lv(a,t)+cv(a,r)+uv(a,n)}class ao extends Xt{constructor(e=new le,t=new le,r=new le,n=new le){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new le){const r=t,n=this.v0,i=this.v1,s=this.v2,o=this.v3;return r.set(xr(e,n.x,i.x,s.x,o.x),xr(e,n.y,i.y,s.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ao.prototype.isCubicBezierCurve=!0;class qc extends Xt{constructor(e=new R,t=new R,r=new R,n=new R){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new R){const r=t,n=this.v0,i=this.v1,s=this.v2,o=this.v3;return r.set(xr(e,n.x,i.x,s.x,o.x),xr(e,n.y,i.y,s.y,o.y),xr(e,n.z,i.z,s.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}qc.prototype.isCubicBezierCurve3=!0;class Rs extends Xt{constructor(e=new le,t=new le){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const r=t||new le;return r.copy(this.v2).sub(this.v1).normalize(),r}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Rs.prototype.isLineCurve=!0;class hv extends Xt{constructor(e=new R,t=new R){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new R){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oo extends Xt{constructor(e=new le,t=new le,r=new le){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new le){const r=t,n=this.v0,i=this.v1,s=this.v2;return r.set(vr(e,n.x,i.x,s.x),vr(e,n.y,i.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}oo.prototype.isQuadraticBezierCurve=!0;class Yc extends Xt{constructor(e=new R,t=new R,r=new R){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new R){const r=t,n=this.v0,i=this.v1,s=this.v2;return r.set(vr(e,n.x,i.x,s.x),vr(e,n.y,i.y,s.y),vr(e,n.z,i.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Yc.prototype.isQuadraticBezierCurve3=!0;class lo extends Xt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new le){const r=t,n=this.points,i=(n.length-1)*e,s=Math.floor(i),o=i-s,l=n[s===0?s:s-1],c=n[s],u=n[s>n.length-2?n.length-1:s+1],d=n[s>n.length-3?n.length-1:s+2];return r.set(Xc(o,l.x,c.x,u.x,d.x),Xc(o,l.y,c.y,u.y,d.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const n=e.points[t];this.points.push(new le().fromArray(n))}return this}}lo.prototype.isSplineCurve=!0;var jc=Object.freeze({__proto__:null,ArcCurve:Hc,CatmullRomCurve3:Wc,CubicBezierCurve:ao,CubicBezierCurve3:qc,EllipseCurve:Ls,LineCurve:Rs,LineCurve3:hv,QuadraticBezierCurve:oo,QuadraticBezierCurve3:Yc,SplineCurve:lo});class dv extends Xt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Rs(t,e))}getPoint(e,t){const r=e*this.getLength(),n=this.getCurveLengths();let i=0;for(;i<n.length;){if(n[i]>=r){const s=n[i]-r,o=this.curves[i],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}i++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,n=this.curves.length;r<n;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let n=0,i=this.curves;n<i.length;n++){const s=i[n],o=s&&s.isEllipseCurve?e*2:s&&(s.isLineCurve||s.isLineCurve3)?1:s&&s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const n=e.curves[t];this.curves.push(new jc[n.type]().fromJSON(n))}return this}}class co extends dv{constructor(e){super();this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Rs(this.currentPoint.clone(),new le(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,n){const i=new oo(this.currentPoint.clone(),new le(e,t),new le(r,n));return this.curves.push(i),this.currentPoint.set(r,n),this}bezierCurveTo(e,t,r,n,i,s){const o=new ao(this.currentPoint.clone(),new le(e,t),new le(r,n),new le(i,s));return this.curves.push(o),this.currentPoint.set(i,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new lo(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,n,i,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,r,n,i,s),this}absarc(e,t,r,n,i,s){return this.absellipse(e,t,r,r,n,i,s),this}ellipse(e,t,r,n,i,s,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,r,n,i,s,o,l),this}absellipse(e,t,r,n,i,s,o,l){const c=new Ls(e,t,r,n,i,s,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class yr extends co{constructor(e){super(e);this.uuid=$t(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,n=this.holes.length;r<n;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const n=e.holes[t];this.holes.push(new co().fromJSON(n))}return this}}const fv={triangulate:function(a,e,t=2){const r=e&&e.length,n=r?e[0]*t:a.length;let i=Zc(a,0,n,t,!0);const s=[];if(!i||i.next===i.prev)return s;let o,l,c,u,d,h,f;if(r&&(i=xv(a,e,i,t)),a.length>80*t){o=c=a[0],l=u=a[1];for(let g=t;g<n;g+=t)d=a[g],h=a[g+1],d<o&&(o=d),h<l&&(l=h),d>c&&(c=d),h>u&&(u=h);f=Math.max(c-o,u-l),f=f!==0?1/f:0}return _r(i,s,t,o,l,f),s}};function Zc(a,e,t,r,n){let i,s;if(n===Cv(a,e,t,r)>0)for(i=e;i<t;i+=r)s=Kc(i,a[i],a[i+1],s);else for(i=t-r;i>=e;i-=r)s=Kc(i,a[i],a[i+1],s);return s&&Ps(s,s.next)&&(Mr(s),s=s.next),s}function Pn(a,e){if(!a)return a;e||(e=a);let t=a,r;do if(r=!1,!t.steiner&&(Ps(t,t.next)||tt(t.prev,t,t.next)===0)){if(Mr(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function _r(a,e,t,r,n,i,s){if(!a)return;!s&&i&&wv(a,r,n,i);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,i?mv(a,r,n,i):pv(a)){e.push(l.i/t),e.push(a.i/t),e.push(c.i/t),Mr(a),a=c.next,o=c.next;continue}if(a=c,a===o){s?s===1?(a=gv(Pn(a),e,t),_r(a,e,t,r,n,i,2)):s===2&&vv(a,e,t,r,n,i):_r(Pn(a),e,t,r,n,i,1);break}}}function pv(a){const e=a.prev,t=a,r=a.next;if(tt(e,t,r)>=0)return!1;let n=a.next.next;for(;n!==a.prev;){if(Pi(e.x,e.y,t.x,t.y,r.x,r.y,n.x,n.y)&&tt(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function mv(a,e,t,r){const n=a.prev,i=a,s=a.next;if(tt(n,i,s)>=0)return!1;const o=n.x<i.x?n.x<s.x?n.x:s.x:i.x<s.x?i.x:s.x,l=n.y<i.y?n.y<s.y?n.y:s.y:i.y<s.y?i.y:s.y,c=n.x>i.x?n.x>s.x?n.x:s.x:i.x>s.x?i.x:s.x,u=n.y>i.y?n.y>s.y?n.y:s.y:i.y>s.y?i.y:s.y,d=uo(o,l,e,t,r),h=uo(c,u,e,t,r);let f=a.prevZ,g=a.nextZ;for(;f&&f.z>=d&&g&&g.z<=h;){if(f!==a.prev&&f!==a.next&&Pi(n.x,n.y,i.x,i.y,s.x,s.y,f.x,f.y)&&tt(f.prev,f,f.next)>=0||(f=f.prevZ,g!==a.prev&&g!==a.next&&Pi(n.x,n.y,i.x,i.y,s.x,s.y,g.x,g.y)&&tt(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=d;){if(f!==a.prev&&f!==a.next&&Pi(n.x,n.y,i.x,i.y,s.x,s.y,f.x,f.y)&&tt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=h;){if(g!==a.prev&&g!==a.next&&Pi(n.x,n.y,i.x,i.y,s.x,s.y,g.x,g.y)&&tt(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function gv(a,e,t){let r=a;do{const n=r.prev,i=r.next.next;!Ps(n,i)&&Jc(n,r,r.next,i)&&br(n,i)&&br(i,n)&&(e.push(n.i/t),e.push(r.i/t),e.push(i.i/t),Mr(r),Mr(r.next),r=a=i),r=r.next}while(r!==a);return Pn(r)}function vv(a,e,t,r,n,i){let s=a;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Ev(s,o)){let l=Qc(s,o);s=Pn(s,s.next),l=Pn(l,l.next),_r(s,e,t,r,n,i),_r(l,e,t,r,n,i);return}o=o.next}s=s.next}while(s!==a)}function xv(a,e,t,r){const n=[];let i,s,o,l,c;for(i=0,s=e.length;i<s;i++)o=e[i]*r,l=i<s-1?e[i+1]*r:a.length,c=Zc(a,o,l,r,!1),c===c.next&&(c.steiner=!0),n.push(Tv(c));for(n.sort(yv),i=0;i<n.length;i++)_v(n[i],t),t=Pn(t,t.next);return t}function yv(a,e){return a.x-e.x}function _v(a,e){if(e=bv(a,e),e){const t=Qc(e,a);Pn(e,e.next),Pn(t,t.next)}}function bv(a,e){let t=e;const r=a.x,n=a.y;let i=-1/0,s;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const h=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=r&&h>i){if(i=h,h===r){if(n===t.y)return t;if(n===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(r===i)return s;const o=s,l=s.x,c=s.y;let u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Pi(n<c?r:i,n,l,c,n<c?i:r,n,t.x,t.y)&&(d=Math.abs(n-t.y)/(r-t.x),br(t,a)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&Mv(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function Mv(a,e){return tt(a.prev,a,e.prev)<0&&tt(e.next,a,a.next)<0}function wv(a,e,t,r){let n=a;do n.z===null&&(n.z=uo(n.x,n.y,e,t,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==a);n.prevZ.nextZ=null,n.prevZ=null,Sv(n)}function Sv(a){let e,t,r,n,i,s,o,l,c=1;do{for(t=a,a=null,i=null,s=0;t;){for(s++,r=t,o=0,e=0;e<c&&(o++,r=r.nextZ,!!r);e++);for(l=c;o>0||l>0&&r;)o!==0&&(l===0||!r||t.z<=r.z)?(n=t,t=t.nextZ,o--):(n=r,r=r.nextZ,l--),i?i.nextZ=n:a=n,n.prevZ=i,i=n;t=r}i.nextZ=null,c*=2}while(s>1);return a}function uo(a,e,t,r,n){return a=32767*(a-t)*n,e=32767*(e-r)*n,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,a|e<<1}function Tv(a){let e=a,t=a;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==a);return t}function Pi(a,e,t,r,n,i,s,o){return(n-s)*(e-o)-(a-s)*(i-o)>=0&&(a-s)*(r-o)-(t-s)*(e-o)>=0&&(t-s)*(i-o)-(n-s)*(r-o)>=0}function Ev(a,e){return a.next.i!==e.i&&a.prev.i!==e.i&&!Av(a,e)&&(br(a,e)&&br(e,a)&&Lv(a,e)&&(tt(a.prev,a,e.prev)||tt(a,e.prev,e))||Ps(a,e)&&tt(a.prev,a,a.next)>0&&tt(e.prev,e,e.next)>0)}function tt(a,e,t){return(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)}function Ps(a,e){return a.x===e.x&&a.y===e.y}function Jc(a,e,t,r){const n=Is(tt(a,e,t)),i=Is(tt(a,e,r)),s=Is(tt(t,r,a)),o=Is(tt(t,r,e));return!!(n!==i&&s!==o||n===0&&Ds(a,t,e)||i===0&&Ds(a,r,e)||s===0&&Ds(t,a,r)||o===0&&Ds(t,e,r))}function Ds(a,e,t){return e.x<=Math.max(a.x,t.x)&&e.x>=Math.min(a.x,t.x)&&e.y<=Math.max(a.y,t.y)&&e.y>=Math.min(a.y,t.y)}function Is(a){return a>0?1:a<0?-1:0}function Av(a,e){let t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&Jc(t,t.next,a,e))return!0;t=t.next}while(t!==a);return!1}function br(a,e){return tt(a.prev,a,a.next)<0?tt(a,e,a.next)>=0&&tt(a,a.prev,e)>=0:tt(a,e,a.prev)<0||tt(a,a.next,e)<0}function Lv(a,e){let t=a,r=!1;const n=(a.x+e.x)/2,i=(a.y+e.y)/2;do t.y>i!=t.next.y>i&&t.next.y!==t.y&&n<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==a);return r}function Qc(a,e){const t=new ho(a.i,a.x,a.y),r=new ho(e.i,e.x,e.y),n=a.next,i=e.prev;return a.next=e,e.prev=a,t.next=n,n.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function Kc(a,e,t,r){const n=new ho(a,e,t);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Mr(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function ho(a,e,t){this.i=a,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Cv(a,e,t,r){let n=0;for(let i=e,s=t-r;i<t;i+=r)n+=(a[s]-a[i])*(a[i+1]+a[s+1]),s=i;return n}class Dn{static area(e){const t=e.length;let r=0;for(let n=t-1,i=0;i<t;n=i++)r+=e[n].x*e[i].y-e[i].x*e[n].y;return r*.5}static isClockWise(e){return Dn.area(e)<0}static triangulateShape(e,t){const r=[],n=[],i=[];$c(e),eu(r,e);let s=e.length;t.forEach($c);for(let l=0;l<t.length;l++)n.push(s),s+=t[l].length,eu(r,t[l]);const o=fv.triangulate(r,n);for(let l=0;l<o.length;l+=3)i.push(o.slice(l,l+3));return i}}function $c(a){const e=a.length;e>2&&a[e-1].equals(a[0])&&a.pop()}function eu(a,e){for(let t=0;t<e.length;t++)a.push(e[t].x),a.push(e[t].y)}class Di extends Ke{constructor(e=new yr([new le(.5,.5),new le(-.5,.5),new le(-.5,-.5),new le(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const r=this,n=[],i=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new st(n,3)),this.setAttribute("uv",new st(i,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1;let d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,y=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,p=t.UVGenerator!==void 0?t.UVGenerator:Rv;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),d=t.amount);let b,x=!1,M,S,_,E;m&&(b=m.getSpacedPoints(u),x=!0,h=!1,M=m.computeFrenetFrames(u,!1),S=new R,_=new R,E=new R),h||(y=0,f=0,g=0,v=0);const B=o.extractPoints(c);let F=B.shape;const L=B.holes;if(!Dn.isClockWise(F)){F=F.reverse();for(let j=0,te=L.length;j<te;j++){const re=L[j];Dn.isClockWise(re)&&(L[j]=re.reverse())}}const C=Dn.triangulateShape(F,L),I=F;for(let j=0,te=L.length;j<te;j++){const re=L[j];F=F.concat(re)}function N(j,te,re){return te||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().multiplyScalar(re).add(j)}const U=F.length,k=C.length;function Q(j,te,re){let be,he,A;const w=j.x-te.x,V=j.y-te.y,Y=re.x-j.x,O=re.y-j.y,se=w*w+V*V,ee=w*O-V*Y;if(Math.abs(ee)>Number.EPSILON){const ne=Math.sqrt(se),ie=Math.sqrt(Y*Y+O*O),de=te.x-V/ne,P=te.y+w/ne,J=re.x-O/ie,q=re.y+Y/ie,oe=((J-de)*O-(q-P)*Y)/(w*O-V*Y);be=de+w*oe-j.x,he=P+V*oe-j.y;const ge=be*be+he*he;if(ge<=2)return new le(be,he);A=Math.sqrt(ge/2)}else{let ne=!1;w>Number.EPSILON?Y>Number.EPSILON&&(ne=!0):w<-Number.EPSILON?Y<-Number.EPSILON&&(ne=!0):Math.sign(V)===Math.sign(O)&&(ne=!0),ne?(be=-V,he=w,A=Math.sqrt(se)):(be=w,he=V,A=Math.sqrt(se/2))}return new le(be/A,he/A)}const ae=[];for(let j=0,te=I.length,re=te-1,be=j+1;j<te;j++,re++,be++)re===te&&(re=0),be===te&&(be=0),ae[j]=Q(I[j],I[re],I[be]);const ve=[];let Z,fe=ae.concat();for(let j=0,te=L.length;j<te;j++){const re=L[j];Z=[];for(let be=0,he=re.length,A=he-1,w=be+1;be<he;be++,A++,w++)A===he&&(A=0),w===he&&(w=0),Z[be]=Q(re[be],re[A],re[w]);ve.push(Z),fe=fe.concat(Z)}for(let j=0;j<y;j++){const te=j/y,re=f*Math.cos(te*Math.PI/2),be=g*Math.sin(te*Math.PI/2)+v;for(let he=0,A=I.length;he<A;he++){const w=N(I[he],ae[he],be);ce(w.x,w.y,-re)}for(let he=0,A=L.length;he<A;he++){const w=L[he];Z=ve[he];for(let V=0,Y=w.length;V<Y;V++){const O=N(w[V],Z[V],be);ce(O.x,O.y,-re)}}}const X=g+v;for(let j=0;j<U;j++){const te=h?N(F[j],fe[j],X):F[j];x?(_.copy(M.normals[0]).multiplyScalar(te.x),S.copy(M.binormals[0]).multiplyScalar(te.y),E.copy(b[0]).add(_).add(S),ce(E.x,E.y,E.z)):ce(te.x,te.y,0)}for(let j=1;j<=u;j++)for(let te=0;te<U;te++){const re=h?N(F[te],fe[te],X):F[te];x?(_.copy(M.normals[j]).multiplyScalar(re.x),S.copy(M.binormals[j]).multiplyScalar(re.y),E.copy(b[j]).add(_).add(S),ce(E.x,E.y,E.z)):ce(re.x,re.y,d/u*j)}for(let j=y-1;j>=0;j--){const te=j/y,re=f*Math.cos(te*Math.PI/2),be=g*Math.sin(te*Math.PI/2)+v;for(let he=0,A=I.length;he<A;he++){const w=N(I[he],ae[he],be);ce(w.x,w.y,d+re)}for(let he=0,A=L.length;he<A;he++){const w=L[he];Z=ve[he];for(let V=0,Y=w.length;V<Y;V++){const O=N(w[V],Z[V],be);x?ce(O.x,O.y+b[u-1].y,b[u-1].x+re):ce(O.x,O.y,d+re)}}}$(),xe();function $(){const j=n.length/3;if(h){let te=0,re=U*te;for(let be=0;be<k;be++){const he=C[be];ye(he[2]+re,he[1]+re,he[0]+re)}te=u+y*2,re=U*te;for(let be=0;be<k;be++){const he=C[be];ye(he[0]+re,he[1]+re,he[2]+re)}}else{for(let te=0;te<k;te++){const re=C[te];ye(re[2],re[1],re[0])}for(let te=0;te<k;te++){const re=C[te];ye(re[0]+U*u,re[1]+U*u,re[2]+U*u)}}r.addGroup(j,n.length/3-j,0)}function xe(){const j=n.length/3;let te=0;G(I,te),te+=I.length;for(let re=0,be=L.length;re<be;re++){const he=L[re];G(he,te),te+=he.length}r.addGroup(j,n.length/3-j,1)}function G(j,te){let re=j.length;for(;--re>=0;){const be=re;let he=re-1;he<0&&(he=j.length-1);for(let A=0,w=u+y*2;A<w;A++){const V=U*A,Y=U*(A+1),O=te+be+V,se=te+he+V,ee=te+he+Y,ne=te+be+Y;pe(O,se,ee,ne)}}}function ce(j,te,re){l.push(j),l.push(te),l.push(re)}function ye(j,te,re){ue(j),ue(te),ue(re);const be=n.length/3,he=p.generateTopUV(r,n,be-3,be-2,be-1);me(he[0]),me(he[1]),me(he[2])}function pe(j,te,re,be){ue(j),ue(te),ue(be),ue(te),ue(re),ue(be);const he=n.length/3,A=p.generateSideWallUV(r,n,he-6,he-3,he-2,he-1);me(A[0]),me(A[1]),me(A[3]),me(A[1]),me(A[2]),me(A[3])}function ue(j){n.push(l[j*3+0]),n.push(l[j*3+1]),n.push(l[j*3+2])}function me(j){i.push(j.x),i.push(j.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,r=this.parameters.options;return Pv(t,r,e)}static fromJSON(e,t){const r=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];r.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new jc[n.type]().fromJSON(n)),new Di(r,e.options)}}const Rv={generateTopUV:function(a,e,t,r,n){const i=e[t*3],s=e[t*3+1],o=e[r*3],l=e[r*3+1],c=e[n*3],u=e[n*3+1];return[new le(i,s),new le(o,l),new le(c,u)]},generateSideWallUV:function(a,e,t,r,n,i){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[r*3],u=e[r*3+1],d=e[r*3+2],h=e[n*3],f=e[n*3+1],g=e[n*3+2],v=e[i*3],y=e[i*3+1],m=e[i*3+2];return Math.abs(o-u)<Math.abs(s-c)?[new le(s,1-l),new le(c,1-d),new le(h,1-g),new le(v,1-m)]:[new le(o,1-l),new le(u,1-d),new le(f,1-g),new le(y,1-m)]}};function Pv(a,e,t){if(t.shapes=[],Array.isArray(a))for(let r=0,n=a.length;r<n;r++){const i=a[r];t.shapes.push(i.uuid)}else t.shapes.push(a.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class tu extends to{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,n=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],i=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,i,e,t);this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tu(e.radius,e.detail)}}class fo extends Ke{constructor(e=new yr([new le(0,.5),new le(-.5,-.5),new le(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],n=[],i=[],s=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new st(n,3)),this.setAttribute("normal",new st(i,3)),this.setAttribute("uv",new st(s,2));function c(u){const d=n.length/3,h=u.extractPoints(t);let f=h.shape;const g=h.holes;Dn.isClockWise(f)===!1&&(f=f.reverse());for(let y=0,m=g.length;y<m;y++){const p=g[y];Dn.isClockWise(p)===!0&&(g[y]=p.reverse())}const v=Dn.triangulateShape(f,g);for(let y=0,m=g.length;y<m;y++){const p=g[y];f=f.concat(p)}for(let y=0,m=f.length;y<m;y++){const p=f[y];n.push(p.x,p.y,0),i.push(0,0,1),s.push(p.x,p.y)}for(let y=0,m=v.length;y<m;y++){const p=v[y],b=p[0]+d,x=p[1]+d,M=p[2]+d;r.push(b,x,M),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Dv(t,e)}static fromJSON(e,t){const r=[];for(let n=0,i=e.shapes.length;n<i;n++){const s=t[e.shapes[n]];r.push(s)}return new fo(r,e.curveSegments)}}function Dv(a,e){if(e.shapes=[],Array.isArray(a))for(let t=0,r=a.length;t<r;t++){const n=a[t];e.shapes.push(n.uuid)}else e.shapes.push(a.uuid);return e}class Iv extends St{constructor(e){super();this.type="ShadowMaterial",this.color=new Se(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Iv.prototype.isShadowMaterial=!0;class nu extends St{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ri,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}nu.prototype.isMeshStandardMaterial=!0;class Fv extends nu{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenTint=new Se(0),this.sheenRoughness=1,this.transmissionMap=null,this.thickness=.01,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationTint=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularTint=new Se(1,1,1),this.specularTintMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenTint.copy(e.sheenTint),this.sheenRoughness=e.sheenRoughness,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationTint.copy(e.attenuationTint),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularTint.copy(e.specularTint),this.specularTintMap=e.specularTintMap,this}}Fv.prototype.isMeshPhysicalMaterial=!0;class Uv extends St{constructor(e){super();this.type="MeshPhongMaterial",this.color=new Se(16777215),this.specular=new Se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ri,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Uv.prototype.isMeshPhongMaterial=!0;class Bv extends St{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ri,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Bv.prototype.isMeshToonMaterial=!0;class Nv extends St{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ri,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Nv.prototype.isMeshNormalMaterial=!0;class kv extends St{constructor(e){super();this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Or,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}kv.prototype.isMeshLambertMaterial=!0;class Ov extends St{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Se(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ri,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Ov.prototype.isMeshMatcapMaterial=!0;class zv extends gr{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}zv.prototype.isLineDashedMaterial=!0;const et={arraySlice:function(a,e,t){return et.isTypedArray(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)},convertArray:function(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function e(n,i){return a[n]-a[i]}const t=a.length,r=new Array(t);for(let n=0;n!==t;++n)r[n]=n;return r.sort(e),r},sortedArray:function(a,e,t){const r=a.length,n=new a.constructor(r);for(let i=0,s=0;s!==r;++i){const o=t[i]*e;for(let l=0;l!==e;++l)n[s++]=a[o+l]}return n},flattenJSON:function(a,e,t,r){let n=1,i=a[0];for(;i!==void 0&&i[r]===void 0;)i=a[n++];if(i===void 0)return;let s=i[r];if(s!==void 0)if(Array.isArray(s))do s=i[r],s!==void 0&&(e.push(i.time),t.push.apply(t,s)),i=a[n++];while(i!==void 0);else if(s.toArray!==void 0)do s=i[r],s!==void 0&&(e.push(i.time),s.toArray(t,t.length)),i=a[n++];while(i!==void 0);else do s=i[r],s!==void 0&&(e.push(i.time),t.push(s)),i=a[n++];while(i!==void 0)},subclip:function(a,e,t,r,n=30){const i=a.clone();i.name=e;const s=[];for(let l=0;l<i.tracks.length;++l){const c=i.tracks[l],u=c.getValueSize(),d=[],h=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*n;if(!(g<t||g>=r)){d.push(c.times[f]);for(let v=0;v<u;++v)h.push(c.values[f*u+v])}}d.length!==0&&(c.times=et.convertArray(d,c.times.constructor),c.values=et.convertArray(h,c.values.constructor),s.push(c))}i.tracks=s;let o=1/0;for(let l=0;l<i.tracks.length;++l)o>i.tracks[l].times[0]&&(o=i.tracks[l].times[0]);for(let l=0;l<i.tracks.length;++l)i.tracks[l].shift(-1*o);return i.resetDuration(),i},makeClipAdditive:function(a,e=0,t=a,r=30){r<=0&&(r=30);const n=t.tracks.length,i=e/r;for(let s=0;s<n;++s){const o=t.tracks[s],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=a.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const d=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=d/3);let h=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=f/3);const g=o.times.length-1;let v;if(i<=o.times[0]){const m=u,p=d-u;v=et.arraySlice(o.values,m,p)}else if(i>=o.times[g]){const m=g*d+u,p=m+d-u;v=et.arraySlice(o.values,m,p)}else{const m=o.createInterpolant(),p=u,b=d-u;m.evaluate(i),v=et.arraySlice(m.resultBuffer,p,b)}l==="quaternion"&&new It().fromArray(v).normalize().conjugate().toArray(v);const y=c.times.length;for(let m=0;m<y;++m){const p=m*f+h;if(l==="quaternion")It.multiplyQuaternionsFlat(c.values,p,v,0,c.values,p);else{const b=f-h*2;for(let x=0;x<b;++x)c.values[p+x]-=v[x]}}}return a.blendMode=ml,a}};class In{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,n=t[r],i=t[r-1];e:{t:{let s;n:{i:if(!(e<n)){for(let o=r+2;;){if(n===void 0){if(e<i)break i;return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,e,i)}if(r===o)break;if(i=n,n=t[++r],e<n)break t}s=t.length;break n}if(!(e>=i)){const o=t[1];e<o&&(r=2,i=o);for(let l=r-2;;){if(i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(r===l)break;if(n=i,i=t[--r-1],e>=i)break t}s=r,r=0;break n}break e}for(;r<s;){const o=r+s>>>1;e<t[o]?s=o:r=o+1}if(n=t[r],i=t[r-1],i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(n===void 0)return r=t.length,this._cachedIndex=r,this.afterEnd_(r-1,i,e)}this._cachedIndex=r,this.intervalChanged_(r,i,n)}return this.interpolate_(r,i,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=e*n;for(let s=0;s!==n;++s)t[s]=r[i+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}In.prototype.beforeStart_=In.prototype.copySampleValue_;In.prototype.afterEnd_=In.prototype.copySampleValue_;class Gv extends In{constructor(e,t,r,n){super(e,t,r,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ni,endingEnd:ni}}intervalChanged_(e,t,r){const n=this.parameterPositions;let i=e-2,s=e+1,o=n[i],l=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case ii:i=e,o=2*t-r;break;case jr:i=n.length-2,o=t+n[i]-n[i+1];break;default:i=e,o=r}if(l===void 0)switch(this.getSettings_().endingEnd){case ii:s=e,l=2*r-t;break;case jr:s=1,l=r+n[1]-n[0];break;default:s=e-1,l=t}const c=(r-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-r),this._offsetPrev=i*u,this._offsetNext=s*u}interpolate_(e,t,r,n){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(r-t)/(n-t),v=g*g,y=v*g,m=-h*y+2*h*v-h*g,p=(1+h)*y+(-1.5-2*h)*v+(-.5+h)*g+1,b=(-1-f)*y+(1.5+f)*v+.5*g,x=f*y-f*v;for(let M=0;M!==o;++M)i[M]=m*s[u+M]+p*s[c+M]+b*s[l+M]+x*s[d+M];return i}}class iu extends In{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(r-t)/(n-t),d=1-u;for(let h=0;h!==o;++h)i[h]=s[c+h]*d+s[l+h]*u;return i}}class Vv extends In{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class rn{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=et.convertArray(t,this.TimeBufferType),this.values=et.convertArray(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:et.convertArray(e.times,Array),values:et.convertArray(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new Vv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qr:t=this.InterpolantFactoryMethodDiscrete;break;case Yr:t=this.InterpolantFactoryMethodLinear;break;case aa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qr;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e}return this}trim(e,t){const r=this.times,n=r.length;let i=0,s=n-1;for(;i!==n&&r[i]<e;)++i;for(;s!==-1&&r[s]>t;)--s;if(++s,i!==0||s!==n){i>=s&&(s=Math.max(s,1),i=s-1);const o=this.getValueSize();this.times=et.arraySlice(r,i,s),this.values=et.arraySlice(this.values,i*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,n=this.values,i=r.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==i;o++){const l=r[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(n!==void 0&&et.isTypedArray(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=et.arraySlice(this.times),t=et.arraySlice(this.values),r=this.getValueSize(),n=this.getInterpolation()===aa,i=e.length-1;let s=1;for(let o=1;o<i;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(n)l=!0;else{const d=o*r,h=d-r,f=d+r;for(let g=0;g!==r;++g){const v=t[d+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const d=o*r,h=s*r;for(let f=0;f!==r;++f)t[h+f]=t[d+f]}++s}}if(i>0){e[s]=e[i];for(let o=i*r,l=s*r,c=0;c!==r;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=et.arraySlice(e,0,s),this.values=et.arraySlice(t,0,s*r)):(this.times=e,this.values=t),this}clone(){const e=et.arraySlice(this.times,0),t=et.arraySlice(this.values,0),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=Yr;class Ii extends rn{}Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=qr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class ru extends rn{}ru.prototype.ValueTypeName="color";class Fs extends rn{}Fs.prototype.ValueTypeName="number";class Hv extends In{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){const i=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(r-t)/(n-t);let c=e*o;for(let u=c+o;c!==u;c+=4)It.slerpFlat(i,0,s,c-o,s,c,l);return i}}class wr extends rn{InterpolantFactoryMethodLinear(e){return new Hv(this.times,this.values,this.getValueSize(),e)}}wr.prototype.ValueTypeName="quaternion";wr.prototype.DefaultInterpolation=Yr;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Fi extends rn{}Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=qr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends rn{}Us.prototype.ValueTypeName="vector";class su{constructor(e,t=-1,r,n=oa){this.name=e,this.tracks=r,this.duration=t,this.blendMode=n,this.uuid=$t(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,n=1/(e.fps||1);for(let s=0,o=r.length;s!==o;++s)t.push(Xv(r[s]).scale(n));const i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){const t=[],r=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let i=0,s=r.length;i!==s;++i)t.push(rn.toJSON(r[i]));return n}static CreateFromMorphTargetSequence(e,t,r,n){const i=t.length,s=[];for(let o=0;o<i;o++){let l=[],c=[];l.push((o+i-1)%i,o,(o+1)%i),c.push(0,1,0);const u=et.getKeyframeOrder(l);l=et.sortedArray(l,1,u),c=et.sortedArray(c,1,u),!n&&l[0]===0&&(l.push(i),c.push(c[0])),s.push(new Fs(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/r))}return new this(e,-1,s)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const n=e;r=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<r.length;n++)if(r[n].name===t)return r[n];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const n={},i=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(i);if(u&&u.length>1){const d=u[1];let h=n[d];h||(n[d]=h=[]),h.push(c)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,r));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(d,h,f,g,v){if(f.length!==0){const y=[],m=[];et.flattenJSON(f,y,m,g),y.length!==0&&v.push(new d(h,y,m))}},n=[],i=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const h=c[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)f[h[g].morphTargets[v]]=-1;for(const v in f){const y=[],m=[];for(let p=0;p!==h[g].morphTargets.length;++p){const b=h[g];y.push(b.time),m.push(b.morphTarget===v?1:0)}n.push(new Fs(".morphTargetInfluence["+v+"]",y,m))}l=f.length*(s||1)}else{const f=".bones["+t[d].name+"]";r(Us,f+".position",h,"pos",n),r(wr,f+".quaternion",h,"rot",n),r(Us,f+".scale",h,"scl",n)}}return n.length===0?null:new this(i,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,n=e.length;r!==n;++r){const i=this.tracks[r];t=Math.max(t,i.times[i.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wv(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Fs;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return ru;case"quaternion":return wr;case"bool":case"boolean":return Ii;case"string":return Fi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Xv(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wv(a.type);if(a.times===void 0){const t=[],r=[];et.flattenJSON(a.keys,t,r,"value"),a.times=t,a.values=r}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const Ui={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class qv{constructor(e,t,r){const n=this;let i=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,i===!1&&n.onStart!==void 0&&n.onStart(u,s,o),i=!0},this.itemEnd=function(u){s++,n.onProgress!==void 0&&n.onProgress(u,s,o),s===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const Yv=new qv;class Fn{constructor(e){this.manager=e!==void 0?e:Yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Qt={};class jv extends Fn{constructor(e){super(e)}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Ui.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;if(Qt[e]!==void 0){Qt[e].push({onLoad:t,onProgress:r,onError:n});return}const o=/^data:(.*?)(;base64)?,(.*)$/,l=e.match(o);let c;if(l){const u=l[1],d=!!l[2];let h=l[3];h=decodeURIComponent(h),d&&(h=atob(h));try{let f;const g=(this.responseType||"").toLowerCase();switch(g){case"arraybuffer":case"blob":const v=new Uint8Array(h.length);for(let m=0;m<h.length;m++)v[m]=h.charCodeAt(m);g==="blob"?f=new Blob([v.buffer],{type:u}):f=v.buffer;break;case"document":f=new DOMParser().parseFromString(h,u);break;case"json":f=JSON.parse(h);break;default:f=h;break}setTimeout(function(){t&&t(f),i.manager.itemEnd(e)},0)}catch(f){setTimeout(function(){n&&n(f),i.manager.itemError(e),i.manager.itemEnd(e)},0)}}else{Qt[e]=[],Qt[e].push({onLoad:t,onProgress:r,onError:n}),c=new XMLHttpRequest,c.open("GET",e,!0),c.addEventListener("load",function(u){const d=this.response,h=Qt[e];if(delete Qt[e],this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),Ui.add(e,d);for(let f=0,g=h.length;f<g;f++){const v=h[f];v.onLoad&&v.onLoad(d)}i.manager.itemEnd(e)}else{for(let f=0,g=h.length;f<g;f++){const v=h[f];v.onError&&v.onError(u)}i.manager.itemError(e),i.manager.itemEnd(e)}},!1),c.addEventListener("progress",function(u){const d=Qt[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onProgress&&g.onProgress(u)}},!1),c.addEventListener("error",function(u){const d=Qt[e];delete Qt[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onError&&g.onError(u)}i.manager.itemError(e),i.manager.itemEnd(e)},!1),c.addEventListener("abort",function(u){const d=Qt[e];delete Qt[e];for(let h=0,f=d.length;h<f;h++){const g=d[h];g.onError&&g.onError(u)}i.manager.itemError(e),i.manager.itemEnd(e)},!1),this.responseType!==void 0&&(c.responseType=this.responseType),this.withCredentials!==void 0&&(c.withCredentials=this.withCredentials),c.overrideMimeType&&c.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const u in this.requestHeader)c.setRequestHeader(u,this.requestHeader[u]);c.send(null)}return i.manager.itemStart(e),c}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class au extends Fn{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Ui.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o=Jr("img");function l(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),Ui.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(u){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1),n&&n(u),i.manager.itemError(e),i.manager.itemEnd(e)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.substr(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}}class Zv extends Fn{constructor(e){super(e)}load(e,t,r,n){const i=new ps,s=new au(this.manager);s.setCrossOrigin(this.crossOrigin),s.setPath(this.path);let o=0;function l(c){s.load(e[c],function(u){i.images[c]=u,o++,o===6&&(i.needsUpdate=!0,t&&t(i))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return i}}class Jv extends Fn{constructor(e){super(e)}load(e,t,r,n){const i=new vt,s=new au(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},r,n),i}}class sn extends ze{constructor(e,t=1){super();this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}sn.prototype.isLight=!0;class Qv extends sn{constructor(e,t,r){super(e,r);this.type="HemisphereLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.groundColor=new Se(t)}copy(e){return sn.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Qv.prototype.isHemisphereLight=!0;const ou=new Ce,lu=new R,cu=new R;class po{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new He(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),ou.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ou),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(t.projectionMatrix),r.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class uu extends po{constructor(){super(new Ft(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,r=da*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(r!==t.fov||n!==t.aspect||i!==t.far)&&(t.fov=r,t.aspect=n,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}uu.prototype.isSpotLightShadow=!0;class Kv extends sn{constructor(e,t,r=0,n=Math.PI/3,i=0,s=1){super(e,t);this.type="SpotLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.distance=r,this.angle=n,this.penumbra=i,this.decay=s,this.shadow=new uu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Kv.prototype.isSpotLight=!0;const hu=new Ce,Sr=new R,mo=new R;class du extends po{constructor(){super(new Ft(90,1,.5,500));this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new He(2,1,1,1),new He(0,1,1,1),new He(3,1,1,1),new He(1,1,1,1),new He(3,0,1,1),new He(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),r.position.copy(Sr),mo.copy(r.position),mo.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(mo),r.updateMatrixWorld(),n.makeTranslation(-Sr.x,-Sr.y,-Sr.z),hu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}}du.prototype.isPointLightShadow=!0;class $v extends sn{constructor(e,t,r=0,n=1){super(e,t);this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new du}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}$v.prototype.isPointLight=!0;class fu extends po{constructor(){super(new Oa(-5,5,5,-5,.5,500))}}fu.prototype.isDirectionalLightShadow=!0;class e0 extends sn{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(ze.DefaultUp),this.updateMatrix(),this.target=new ze,this.shadow=new fu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}e0.prototype.isDirectionalLight=!0;class t0 extends sn{constructor(e,t){super(e,t);this.type="AmbientLight"}}t0.prototype.isAmbientLight=!0;class n0 extends sn{constructor(e,t,r=10,n=10){super(e,t);this.type="RectAreaLight",this.width=r,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}n0.prototype.isRectAreaLight=!0;class pu{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const r=e.x,n=e.y,i=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.282095),t.addScaledVector(s[1],.488603*n),t.addScaledVector(s[2],.488603*i),t.addScaledVector(s[3],.488603*r),t.addScaledVector(s[4],1.092548*(r*n)),t.addScaledVector(s[5],1.092548*(n*i)),t.addScaledVector(s[6],.315392*(3*i*i-1)),t.addScaledVector(s[7],1.092548*(r*i)),t.addScaledVector(s[8],.546274*(r*r-n*n)),t}getIrradianceAt(e,t){const r=e.x,n=e.y,i=e.z,s=this.coefficients;return t.copy(s[0]).multiplyScalar(.886227),t.addScaledVector(s[1],2*.511664*n),t.addScaledVector(s[2],2*.511664*i),t.addScaledVector(s[3],2*.511664*r),t.addScaledVector(s[4],2*.429043*r*n),t.addScaledVector(s[5],2*.429043*n*i),t.addScaledVector(s[6],.743125*i*i-.247708),t.addScaledVector(s[7],2*.429043*r*i),t.addScaledVector(s[8],.429043*(r*r-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let r=0;r<9;r++)this.coefficients[r].addScaledVector(e.coefficients[r],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let r=0;r<9;r++)this.coefficients[r].lerp(e.coefficients[r],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const r=this.coefficients;for(let n=0;n<9;n++)r[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const r=this.coefficients;for(let n=0;n<9;n++)r[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const r=e.x,n=e.y,i=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*i,t[3]=.488603*r,t[4]=1.092548*r*n,t[5]=1.092548*n*i,t[6]=.315392*(3*i*i-1),t[7]=1.092548*r*i,t[8]=.546274*(r*r-n*n)}}pu.prototype.isSphericalHarmonics3=!0;class go extends sn{constructor(e=new pu,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}go.prototype.isLightProbe=!0;class i0{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let r=0,n=e.length;r<n;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.substr(0,t+1)}}class mu extends Ke{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}mu.prototype.isInstancedBufferGeometry=!0;class r0 extends Fn{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,s=Ui.get(e);if(s!==void 0)return i.manager.itemStart(e),setTimeout(function(){t&&t(s),i.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(i.options,{colorSpaceConversion:"none"}))}).then(function(l){Ui.add(e,l),t&&t(l),i.manager.itemEnd(e)}).catch(function(l){n&&n(l),i.manager.itemError(e),i.manager.itemEnd(e)}),i.manager.itemStart(e)}}r0.prototype.isImageBitmapLoader=!0;let Bs;const s0={getContext:function(){return Bs===void 0&&(Bs=new(window.AudioContext||window.webkitAudioContext)),Bs},setContext:function(a){Bs=a}};class a0 extends Fn{constructor(e){super(e)}load(e,t,r,n){const i=this,s=new jv(this.manager);s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(o){try{const l=o.slice(0);s0.getContext().decodeAudioData(l,function(u){t(u)})}catch(l){n?n(l):console.error(l),i.manager.itemError(e)}},r,n)}}class o0 extends go{constructor(e,t,r=1){super(void 0,r);const n=new Se().set(e),i=new Se().set(t),s=new R(n.r,n.g,n.b),o=new R(i.r,i.g,i.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(s).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(s).sub(o).multiplyScalar(c)}}o0.prototype.isHemisphereLightProbe=!0;class l0 extends go{constructor(e,t=1){super(void 0,t);const r=new Se().set(e);this.sh.coefficients[0].set(r.r,r.g,r.b).multiplyScalar(2*Math.sqrt(Math.PI))}}l0.prototype.isAmbientLightProbe=!0;class c0 extends ze{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class u0{constructor(e,t,r){this.binding=e,this.valueSize=r;let n,i,s;switch(t){case"quaternion":n=this._slerp,i=this._slerpAdditive,s=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(r*6),this._workIndex=5;break;case"string":case"bool":n=this._select,i=this._select,s=this._setAdditiveIdentityOther,this.buffer=new Array(r*5);break;default:n=this._lerp,i=this._lerpAdditive,s=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(r*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=i,this._setIdentity=s,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const r=this.buffer,n=this.valueSize,i=e*n+n;let s=this.cumulativeWeight;if(s===0){for(let o=0;o!==n;++o)r[i+o]=r[o];s=t}else{s+=t;const o=t/s;this._mixBufferRegion(r,i,0,o,n)}this.cumulativeWeight=s}accumulateAdditive(e){const t=this.buffer,r=this.valueSize,n=r*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,r),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,r=this.buffer,n=e*t+t,i=this.cumulativeWeight,s=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){const l=t*this._origIndex;this._mixBufferRegion(r,n,l,1-i,t)}s>0&&this._mixBufferRegionAdditive(r,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(r[l]!==r[l+t]){o.setValue(r,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,r=this.valueSize,n=r*this._origIndex;e.getValue(t,n);for(let i=r,s=n;i!==s;++i)t[i]=t[n+i%r];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let r=e;r<t;r++)this.buffer[r]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let r=0;r<this.valueSize;r++)this.buffer[t+r]=this.buffer[e+r]}_select(e,t,r,n,i){if(n>=.5)for(let s=0;s!==i;++s)e[t+s]=e[r+s]}_slerp(e,t,r,n){It.slerpFlat(e,t,e,t,e,r,n)}_slerpAdditive(e,t,r,n,i){const s=this._workIndex*i;It.multiplyQuaternionsFlat(e,s,e,t,e,r),It.slerpFlat(e,t,e,t,e,s,n)}_lerp(e,t,r,n,i){const s=1-n;for(let o=0;o!==i;++o){const l=t+o;e[l]=e[l]*s+e[r+o]*n}}_lerpAdditive(e,t,r,n,i){for(let s=0;s!==i;++s){const o=t+s;e[o]=e[o]+e[r+s]*n}}}const vo="\\[\\]\\.:\\/",h0=new RegExp("["+vo+"]","g"),xo="[^"+vo+"]",d0="[^"+vo.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",xo),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xo),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xo),v0=new RegExp("^"+f0+p0+m0+g0+"$"),x0=["material","materials","bones"];class y0{constructor(e,t,r){const n=r||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=r.length;n!==i;++n)r[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class We{constructor(e,t,r){this.path=t,this.parsedPath=r||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,r):new We(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(h0,"")}static parseTrackName(e){const t=v0.exec(e);if(!t)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const i=r.nodeName.substring(n+1);x0.indexOf(i)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=i)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(!t||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(i){for(let s=0;s<i.length;s++){const o=i[s];if(o.name===t||o.uuid===t)return o;const l=r(o.children);if(l)return l}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)e[t++]=r[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,n=t.propertyName;let i=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(r){let c=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[n];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=i}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=y0;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _0{constructor(e,t,r=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=r,this.blendMode=n;const i=t.tracks,s=i.length,o=new Array(s),l={endingStart:ni,endingEnd:ni};for(let c=0;c!==s;++c){const u=i[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(s),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=id,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,r){if(e.fadeOut(t),this.fadeIn(t),r){const n=this._clip.duration,i=e._clip.duration,s=i/n,o=n/i;e.warp(1,s,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,r){return e.crossFadeFrom(this,t,r)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,r){const n=this._mixer,i=n.time,s=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=i,l[1]=i+r,c[0]=e/s,c[1]=t/s,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,r,n){if(!this.enabled){this._updateWeight(e);return}const i=this._startTime;if(i!==null){const l=(e-i)*r;if(l<0||r===0)return;this._startTime=null,t=r*l}t*=this._updateTimeScale(e);const s=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ml:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(s),c[u].accumulateAdditive(o);break;case oa:default:for(let u=0,d=l.length;u!==d;++u)l[u].evaluate(s),c[u].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const r=this._weightInterpolant;if(r!==null){const n=r.evaluate(e)[0];t*=n,e>r.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const r=this._timeScaleInterpolant;r!==null&&(t*=r.evaluate(e)[0],e>r.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,r=this.loop;let n=this.time+e,i=this._loopCount;const s=r===rd;if(e===0)return i===-1?n:s&&(i&1)==1?t-n:n;if(r===nd){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,s)):this._setEndings(this.repetitions===0,!0,s)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,i+=Math.abs(o);const l=this.repetitions-i;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,s)}else this._setEndings(!1,!1,s);this._loopCount=i,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(s&&(i&1)==1)return t-n}return n}_setEndings(e,t,r){const n=this._interpolantSettings;r?(n.endingStart=ii,n.endingEnd=ii):(e?n.endingStart=this.zeroSlopeAtStart?ii:ni:n.endingStart=jr,t?n.endingEnd=this.zeroSlopeAtEnd?ii:ni:n.endingEnd=jr)}_scheduleFading(e,t,r){const n=this._mixer,i=n.time;let s=this._weightInterpolant;s===null&&(s=n._lendControlInterpolant(),this._weightInterpolant=s);const o=s.parameterPositions,l=s.sampleValues;return o[0]=i,l[0]=t,o[1]=i+e,l[1]=r,this}}class b0 extends On{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const r=e._localRoot||this._root,n=e._clip.tracks,i=n.length,s=e._propertyBindings,o=e._interpolants,l=r.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let d=0;d!==i;++d){const h=n[d],f=h.name;let g=u[f];if(g!==void 0)s[d]=g;else{if(g=s[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[d].binding.parsedPath;g=new u0(We.create(r,f,v),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),s[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const r=(e._localRoot||this._root).uuid,n=e._clip.uuid,i=this._actionsByClip[n];this._bindAction(e,i&&i.knownActions[0]),this._addInactiveAction(e,n,r)}const t=e._propertyBindings;for(let r=0,n=t.length;r!==n;++r){const i=t[r];i.useCount++==0&&(this._lendBinding(i),i.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let r=0,n=t.length;r!==n;++r){const i=t[r];--i.useCount==0&&(i.restoreOriginalState(),this._takeBackBinding(i))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,r){const n=this._actions,i=this._actionsByClip;let s=i[t];if(s===void 0)s={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=s;else{const o=s.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),s.actionByRoot[r]=e}_removeInactiveAction(e){const t=this._actions,r=t[t.length-1],n=e._cacheIndex;r._cacheIndex=n,t[n]=r,t.pop(),e._cacheIndex=null;const i=e._clip.uuid,s=this._actionsByClip,o=s[i],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const d=o.actionByRoot,h=(e._localRoot||this._root).uuid;delete d[h],l.length===0&&delete s[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let r=0,n=t.length;r!==n;++r){const i=t[r];--i.referenceCount==0&&this._removeInactiveBinding(i)}}_lendAction(e){const t=this._actions,r=e._cacheIndex,n=this._nActiveActions++,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_takeBackAction(e){const t=this._actions,r=e._cacheIndex,n=--this._nActiveActions,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_addInactiveBinding(e,t,r){const n=this._bindingsByRootAndName,i=this._bindings;let s=n[t];s===void 0&&(s={},n[t]=s),s[r]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){const t=this._bindings,r=e.binding,n=r.rootNode.uuid,i=r.path,s=this._bindingsByRootAndName,o=s[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[i],Object.keys(o).length===0&&delete s[n]}_lendBinding(e){const t=this._bindings,r=e._cacheIndex,n=this._nActiveBindings++,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_takeBackBinding(e){const t=this._bindings,r=e._cacheIndex,n=--this._nActiveBindings,i=t[n];e._cacheIndex=n,t[n]=e,i._cacheIndex=r,t[r]=i}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let r=e[t];return r===void 0&&(r=new iu(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),r.__cacheIndex=t,e[t]=r),r}_takeBackControlInterpolant(e){const t=this._controlInterpolants,r=e.__cacheIndex,n=--this._nActiveControlInterpolants,i=t[n];e.__cacheIndex=n,t[n]=e,i.__cacheIndex=r,t[r]=i}clipAction(e,t,r){const n=t||this._root,i=n.uuid;let s=typeof e=="string"?su.findByName(n,e):e;const o=s!==null?s.uuid:e,l=this._actionsByClip[o];let c=null;if(r===void 0&&(s!==null?r=s.blendMode:r=oa),l!==void 0){const d=l.actionByRoot[i];if(d!==void 0&&d.blendMode===r)return d;c=l.knownActions[0],s===null&&(s=c._clip)}if(s===null)return null;const u=new _0(this,s,t,r);return this._bindAction(u,c),this._addInactiveAction(u,o,i),u}existingAction(e,t){const r=t||this._root,n=r.uuid,i=typeof e=="string"?su.findByName(r,e):e,s=i?i.uuid:e,o=this._actionsByClip[s];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let r=t-1;r>=0;--r)e[r].stop();return this}update(e){e*=this.timeScale;const t=this._actions,r=this._nActiveActions,n=this.time+=e,i=Math.sign(e),s=this._accuIndex^=1;for(let c=0;c!==r;++c)t[c]._update(n,e,i,s);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(s);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,r=e.uuid,n=this._actionsByClip,i=n[r];if(i!==void 0){const s=i.knownActions;for(let o=0,l=s.length;o!==l;++o){const c=s[o];this._deactivateAction(c);const u=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=u,t[u]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[r]}}uncacheRoot(e){const t=e.uuid,r=this._actionsByClip;for(const s in r){const o=r[s].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,i=n[t];if(i!==void 0)for(const s in i){const o=i[s];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const r=this.existingAction(e,t);r!==null&&(this._deactivateAction(r),this._removeInactiveAction(r))}}b0.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class M0 extends ur{constructor(e,t,r=1){super(e,t);this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}M0.prototype.isInstancedInterleavedBuffer=!0;class lx{constructor(e,t,r=0,n=1/0){this.ray=new Hn(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t&&t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t&&t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return yo(e,this,r,t),r.sort(gu),r}intersectObjects(e,t=!0,r=[]){for(let n=0,i=e.length;n<i;n++)yo(e[n],this,r,t);return r.sort(gu),r}}function gu(a,e){return a.distance-e.distance}function yo(a,e,t,r){if(a.layers.test(e.layers)&&a.raycast(e,t),r===!0){const n=a.children;for(let i=0,s=n.length;i<s;i++)yo(n[i],e,t,!0)}}class w0 extends ze{constructor(e){super();this.material=e,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}}w0.prototype.isImmediateRenderObject=!0;const Un=new R,Ns=new Ce,_o=new Ce;class S0 extends $a{constructor(e){const t=vu(e),r=new Ke,n=[],i=[],s=new Se(0,0,1),o=new Se(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),i.push(s.r,s.g,s.b),i.push(o.r,o.g,o.b))}r.setAttribute("position",new st(n,3)),r.setAttribute("color",new st(i,3));const l=new gr({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(r,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,r=this.geometry,n=r.getAttribute("position");_o.copy(this.root.matrixWorld).invert();for(let i=0,s=0;i<t.length;i++){const o=t[i];o.parent&&o.parent.isBone&&(Ns.multiplyMatrices(_o,o.matrixWorld),Un.setFromMatrixPosition(Ns),n.setXYZ(s,Un.x,Un.y,Un.z),Ns.multiplyMatrices(_o,o.parent.matrixWorld),Un.setFromMatrixPosition(Ns),n.setXYZ(s+1,Un.x,Un.y,Un.z),s+=2)}r.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function vu(a){const e=[];a&&a.isBone&&e.push(a);for(let t=0;t<a.children.length;t++)e.push.apply(e,vu(a.children[t]));return e}class T0 extends $a{constructor(e=10,t=10,r=4473924,n=8947848){r=new Se(r),n=new Se(n);const i=t/2,s=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,g=-o;h<=t;h++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const v=h===i?r:n;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new Ke;u.setAttribute("position",new st(l,3)),u.setAttribute("color",new st(c,3));const d=new gr({vertexColors:!0,toneMapped:!1});super(u,d);this.type="GridHelper"}}const E0=new Float32Array(1);new Int32Array(E0.buffer);Xt.create=function(a,e){return console.log("THREE.Curve.create() has been deprecated"),a.prototype=Object.create(Xt.prototype),a.prototype.constructor=a,a.prototype.getPoint=e,a};co.prototype.fromPoints=function(a){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(a)};T0.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};S0.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Fn.prototype.extractUrlBase=function(a){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),i0.extractUrlBase(a)};Fn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Ht.prototype.center=function(a){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(a)};Ht.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ht.prototype.isIntersectionBox=function(a){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)};Ht.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)};Ht.prototype.size=function(a){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(a)};Vn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};gs.prototype.setFromMatrix=function(a){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(a)};pt.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)};pt.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)};pt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};pt.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)};pt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};pt.prototype.getInverse=function(a){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()};Ce.prototype.extractPosition=function(a){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(a)};Ce.prototype.flattenToArrayOffset=function(a,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,e)};Ce.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)};Ce.prototype.setRotationFromQuaternion=function(a){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(a)};Ce.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ce.prototype.multiplyVector3=function(a){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Ce.prototype.multiplyVector4=function(a){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Ce.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ce.prototype.rotateAxis=function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),a.transformDirection(this)};Ce.prototype.crossVector=function(a){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Ce.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ce.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ce.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ce.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ce.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ce.prototype.applyToBufferAttribute=function(a){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)};Ce.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ce.prototype.makeFrustum=function(a,e,t,r,n,i){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(a,e,r,t,n,i)};Ce.prototype.getInverse=function(a){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(a).invert()};pn.prototype.isIntersectionLine=function(a){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(a)};It.prototype.multiplyVector3=function(a){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),a.applyQuaternion(this)};It.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Hn.prototype.isIntersectionBox=function(a){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)};Hn.prototype.isIntersectionPlane=function(a){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(a)};Hn.prototype.isIntersectionSphere=function(a){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)};lt.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};lt.prototype.barycoordFromPoint=function(a,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(a,e)};lt.prototype.midpoint=function(a){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(a)};lt.prototypenormal=function(a){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(a)};lt.prototype.plane=function(a){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(a)};lt.barycoordFromPoint=function(a,e,t,r,n){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),lt.getBarycoord(a,e,t,r,n)};lt.normal=function(a,e,t,r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),lt.getNormal(a,e,t,r)};yr.prototype.extractAllPoints=function(a){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(a)};yr.prototype.extrude=function(a){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Di(this,a)};yr.prototype.makeGeometry=function(a){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new fo(this,a)};le.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)};le.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)};le.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};R.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};R.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};R.prototype.getPositionFromMatrix=function(a){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(a)};R.prototype.getScaleFromMatrix=function(a){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(a)};R.prototype.getColumnFromMatrix=function(a,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,a)};R.prototype.applyProjection=function(a){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(a)};R.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)};R.prototype.distanceToManhattan=function(a){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)};R.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};He.prototype.fromAttribute=function(a,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,e,t)};He.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ze.prototype.getChildByName=function(a){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(a)};ze.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ze.prototype.translate=function(a,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,a)};ze.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ze.prototype.applyMatrix=function(a){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)};Object.defineProperties(ze.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});xt.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(xt.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),sd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Pc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Ft.prototype.setLens=function(a,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(a)};Object.defineProperties(sn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=a}}});Object.defineProperties(dt.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Zr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Zr)}}});dt.prototype.setDynamic=function(a){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Zr:tr),this};dt.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},dt.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Ke.prototype.addIndex=function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(a)};Ke.prototype.addAttribute=function(a,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new dt(arguments[1],arguments[2]))):a==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(a,e)};Ke.prototype.addDrawCall=function(a,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(a,e)};Ke.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Ke.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Ke.prototype.removeAttribute=function(a){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(a)};Ke.prototype.applyMatrix=function(a){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)};Object.defineProperties(Ke.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});ur.prototype.setDynamic=function(a){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?Zr:tr),this};ur.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Di.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Di.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Di.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Mc.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(St.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Se}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=a===jo}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=a}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Wn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=a}}});qe.prototype.clearTarget=function(a,e,t,r){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(a),this.clear(e,t,r)};qe.prototype.animate=function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(a)};qe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};qe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};qe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};qe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};qe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};qe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};qe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};qe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};qe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};qe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};qe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};qe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};qe.prototype.enableScissorTest=function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(a)};qe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};qe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};qe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};qe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};qe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};qe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};qe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};qe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};qe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};qe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(qe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=a===!0?kn:wt}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(_c.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(en.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=a}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=a}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=a}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=a}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=a}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=a}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=a}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=a}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=a}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=a}}});c0.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new a0().load(a,function(r){e.setBuffer(r)}),this};Na.prototype.updateCubeMap=function(a,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(a,e)};Na.prototype.clear=function(a,e,t,r){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(a,e,t,r)};ai.crossOrigin=void 0;ai.loadTexture=function(a,e,t,r){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const n=new Jv;n.setCrossOrigin(this.crossOrigin);const i=n.load(a,t,void 0,r);return e&&(i.mapping=e),i};ai.loadTextureCube=function(a,e,t,r){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const n=new Zv;n.setCrossOrigin(this.crossOrigin);const i=n.load(a,t,void 0,r);return e&&(i.mapping=e),i};ai.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ai.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xo);function bo(){var a=0,e=[],t,r=0,n=0;function i(m,p){var b=bo();function x(){var M=a>0?m:p;if(v(M))try{var S=M(t);S===b&&g();var _=h(S);_?_.call(S,b.resolve,b.reject):b.resolve(S)}catch(E){b.reject(E)}else b[a>0?"resolve":"reject"](t)}return e.push(x),a&&c(),b}var s=f(function(m){n||l(1,m)}),o=f(function(m){n||l(-1,m)});function l(m,p){n++;var b=0;try{p===y&&g();var x=m>0&&h(p);x?x.call(p,f(function(M){b++,l(1,M)}),f(function(M){b++,l(-1,M)})):(a=m,t=p,c())}catch(M){!a&&!b&&l(-1,M)}}function c(){r||(setTimeout(u,0),r=1)}function u(){var m=e;r=0,e=[],m.forEach(d)}function d(m){m()}function h(m){var p=m&&(v(m)||typeof m=="object")&&m.then;return v(p)&&p}function f(m){var p=0;return function(){for(var b=[],x=arguments.length;x--;)b[x]=arguments[x];p++||m.apply(this,b)}}function g(){throw new TypeError("Chaining cycle detected")}var v=function(m){return typeof m=="function"},y={then:i,resolve:s,reject:o};return y}function xu(){var a,e,t=new Promise(function(r,n){a=r,e=n});return{then:t.then.bind(t),resolve:a,reject:e}}bo.all=xu.all=function(a){var e=0,t=[],r=Bi();return a.length===0?r.resolve([]):a.forEach(function(n,i){var s=Bi();s.resolve(n),s.then(function(o){e++,t[i]=o,e===a.length&&r.resolve(t)},r.reject)}),r};var Bi=typeof Promise=="function"?xu:bo;function A0(){var a=Object.create(null);function e(n,i){var s=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var u=n.getTransferables;if(u===void 0&&(u=null),!a[s])try{l=l.map(function(h){return h&&h.isWorkerModule&&(e(h,function(f){if(f instanceof Error)throw f}),h=a[h.id].value),h}),c=r("<"+o+">.init",c),u&&(u=r("<"+o+">.getTransferables",u));var d=null;typeof c=="function"?d=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),a[s]={id:s,value:d,getTransferables:u},i(d)}catch(h){h&&h.noLog||console.error(h),i(h)}}function t(n,i){var s,o=n.id,l=n.args;(!a[o]||typeof a[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(s=a[o]).value.apply(s,l);c&&typeof c.then=="function"?c.then(u,function(d){return i(d instanceof Error?d:new Error(""+d))}):u(c)}catch(d){i(d)}function u(d){try{var h=a[o].getTransferables&&a[o].getTransferables(d);(!h||!Array.isArray(h)||!h.length)&&(h=void 0),i(d,h)}catch(f){console.error(f),i(f)}}}function r(n,i){var s=void 0;self.troikaDefine=function(l){return s=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,s}self.addEventListener("message",function(n){var i=n.data,s=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,u){c instanceof Error?postMessage({messageId:s,success:!1,error:c.message}):postMessage({messageId:s,success:!0,result:c},u||void 0)})}catch(c){postMessage({messageId:s,success:!1,error:c.stack})}})}function L0(a){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=a.dependencies,r=a.init;t=Array.isArray(t)?t.map(function(i){return i&&i._getInitResult?i._getInitResult():i}):[];var n=Bi.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var yu=function(){var a=!1;if(typeof window!="undefined"&&typeof window.document!="undefined")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),a=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return yu=function(){return a},a},C0=0,R0=0,Mo=!1,Tr=Object.create(null),Er=Object.create(null),wo=Object.create(null);function Ni(a){if((!a||typeof a.init!="function")&&!Mo)throw new Error("requires `options.init` function");var e=a.dependencies,t=a.init,r=a.getTransferables,n=a.workerId;if(!yu())return L0(a);n==null&&(n="#default");var i="workerModule"+ ++C0,s=a.name||i,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(Mo=!0,c=Ni({workerId:n,name:"<"+s+"> function dependency: "+c.name,init:`function(){return (
`+ks(c)+`
)}`}),Mo=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],u=arguments.length;u--;)c[u]=arguments[u];if(!o){o=_u(n,"registerModule",l.workerModuleData);var d=function(){o=null,Er[n].delete(d)};(Er[n]||(Er[n]=new Set)).add(d)}return o.then(function(h){var f=h.isCallable;if(f)return _u(n,"callModule",{id:i,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:i,name:s,dependencies:e,init:ks(t),getTransferables:r&&ks(r)},l}function P0(a){Er[a]&&Er[a].forEach(function(e){e()}),Tr[a]&&(Tr[a].terminate(),delete Tr[a])}function ks(a){var e=a.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function D0(a){var e=Tr[a];if(!e){var t=ks(A0);e=Tr[a]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+a.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,s=wo[i];if(!s)throw new Error("WorkerModule response with empty or unknown messageId");delete wo[i],s(n)}}return e}function _u(a,e,t){var r=Bi(),n=++R0;return wo[n]=function(i){i.success?r.resolve(i.result):r.reject(new Error("Error in worker "+e+" call: "+i.error))},D0(a).postMessage({messageId:n,action:e,data:t}),r}var I0=Ni({name:"Thenable",dependencies:[Bi],init:function(a){return a}});function F0(){var a=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(w,V){r[w]=1<<V+1,n[r[w]]=w}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,s=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,u=null;function d(){if(!u){u=new Map;var w=function(Y){if(t.hasOwnProperty(Y)){var O=0;t[Y].split(",").forEach(function(se){var ee=se.split("+"),ne=ee[0],ie=ee[1];ne=parseInt(ne,36),ie=ie?parseInt(ie,36):0,u.set(O+=ne,r[Y]);for(var de=0;de<ie;de++)u.set(++O,r[Y])})}};for(var V in t)w(V)}}function h(w){return d(),u.get(w.codePointAt(0))||r.L}function f(w){return n[h(w)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(w,V){var Y=36,O=0,se=new Map,ee=V&&new Map,ne;return w.split(",").forEach(function ie(de){if(de.indexOf("+")!==-1)for(var P=+de;P--;)ie(ne);else{ne=de;var J=de.split(">"),q=J[0],oe=J[1];q=String.fromCodePoint(O+=parseInt(q,Y)),oe=String.fromCodePoint(O+=parseInt(oe,Y)),se.set(q,oe),V&&ee.set(oe,q)}}),{map:se,reverseMap:ee}}var y,m,p;function b(){if(!y){var w=v(g.pairs,!0),V=w.map,Y=w.reverseMap;y=V,m=Y,p=v(g.canonical,!1).map}}function x(w){return b(),y.get(w)||null}function M(w){return b(),m.get(w)||null}function S(w){return b(),p.get(w)||null}var _=r.L,E=r.R,B=r.EN,F=r.ES,L=r.ET,D=r.AN,C=r.CS,I=r.B,N=r.S,U=r.ON,k=r.BN,Q=r.NSM,ae=r.AL,ve=r.LRO,Z=r.RLO,fe=r.LRE,X=r.RLE,$=r.PDF,xe=r.LRI,G=r.RLI,ce=r.FSI,ye=r.PDI;function pe(w,V){for(var Y=125,O=new Uint32Array(w.length),se=0;se<w.length;se++)O[se]=h(w[se]);var ee=new Map;function ne(bt,Yt){var Pt=O[bt];O[bt]=Yt,ee.set(Pt,ee.get(Pt)-1),Pt&o&&ee.set(o,ee.get(o)-1),ee.set(Yt,(ee.get(Yt)||0)+1),Yt&o&&ee.set(o,(ee.get(o)||0)+1)}for(var ie=new Uint8Array(w.length),de=new Map,P=[],J=null,q=0;q<w.length;q++)J||P.push(J={start:q,end:w.length-1,level:V==="rtl"?1:V==="ltr"?0:zo(q,!1)}),O[q]&I&&(J.end=q,J=null);for(var oe=X|fe|Z|ve|i|ye|$|I,ge=function(bt){return bt+(bt&1?1:2)},Te=function(bt){return bt+(bt&1?2:1)},De=0;De<P.length;De++){J=P[De];var Me=[{_level:J.level,_override:0,_isolate:0}],Pe=void 0,Ee=0,ke=0,rt=0;ee.clear();for(var Ye=J.start;Ye<=J.end;Ye++){var Ze=O[Ye];if(Pe=Me[Me.length-1],ee.set(Ze,(ee.get(Ze)||0)+1),Ze&o&&ee.set(o,(ee.get(o)||0)+1),Ze&oe)if(Ze&(X|fe)){ie[Ye]=Pe._level;var mn=(Ze===X?Te:ge)(Pe._level);mn<=Y&&!Ee&&!ke?Me.push({_level:mn,_override:0,_isolate:0}):Ee||ke++}else if(Ze&(Z|ve)){ie[Ye]=Pe._level;var ot=(Ze===Z?Te:ge)(Pe._level);ot<=Y&&!Ee&&!ke?Me.push({_level:ot,_override:Ze&Z?E:_,_isolate:0}):Ee||ke++}else if(Ze&i){Ze&ce&&(Ze=zo(Ye+1,!0)===1?G:xe),ie[Ye]=Pe._level,Pe._override&&ne(Ye,Pe._override);var Vt=(Ze===G?Te:ge)(Pe._level);Vt<=Y&&Ee===0&&ke===0?(rt++,Me.push({_level:Vt,_override:0,_isolate:1,_isolInitIndex:Ye})):Ee++}else if(Ze&ye){if(Ee>0)Ee--;else if(rt>0){for(ke=0;!Me[Me.length-1]._isolate;)Me.pop();var Je=Me[Me.length-1]._isolInitIndex;Je!=null&&(de.set(Je,Ye),de.set(Ye,Je)),Me.pop(),rt--}Pe=Me[Me.length-1],ie[Ye]=Pe._level,Pe._override&&ne(Ye,Pe._override)}else Ze&$?(Ee===0&&(ke>0?ke--:!Pe._isolate&&Me.length>1&&(Me.pop(),Pe=Me[Me.length-1])),ie[Ye]=Pe._level):Ze&I&&(ie[Ye]=J.level);else ie[Ye]=Pe._level,Pe._override&&Ze!==k&&ne(Ye,Pe._override)}for(var Ge=[],nt=null,it=J.start;it<=J.end;it++){var Xe=O[it];if(!(Xe&l)){var ct=ie[it],Rt=Xe&i,At=Xe===ye;nt&&ct===nt._level?(nt._end=it,nt._endsWithIsolInit=Rt):Ge.push(nt={_start:it,_end:it,_level:ct,_startsWithPDI:At,_endsWithIsolInit:Rt})}}for(var ut=[],Lt=0;Lt<Ge.length;Lt++){var T=Ge[Lt];if(!T._startsWithPDI||T._startsWithPDI&&!de.has(T._start)){for(var z=[nt=T],H=void 0;nt&&nt._endsWithIsolInit&&(H=de.get(nt._end))!=null;)for(var W=Lt+1;W<Ge.length;W++)if(Ge[W]._start===H){z.push(nt=Ge[W]);break}for(var K=[],Re=0;Re<z.length;Re++)for(var Le=z[Re],Ae=Le._start;Ae<=Le._end;Ae++)K.push(Ae);for(var Fe=ie[K[0]],Oe=J.level,Ie=K[0]-1;Ie>=0;Ie--)if(!(O[Ie]&l)){Oe=ie[Ie];break}var Be=K[K.length-1],$e=ie[Be],Kt=J.level;if(!(O[Be]&i)){for(var Ne=Be+1;Ne<=J.end;Ne++)if(!(O[Ne]&l)){Kt=ie[Ne];break}}ut.push({_seqIndices:K,_sosType:Math.max(Oe,Fe)%2?E:_,_eosType:Math.max(Kt,$e)%2?E:_})}}for(var an=0;an<ut.length;an++){var Ve=ut[an],we=Ve._seqIndices,Ut=Ve._sosType,on=Ve._eosType;if(ee.get(Q))for(var Bt=0;Bt<we.length;Bt++){var Qe=we[Bt];if(O[Qe]&Q){for(var ln=Ut,_t=Bt-1;_t>=0;_t--)if(!(O[we[_t]]&l)){ln=O[we[_t]];break}ne(Qe,ln&(i|ye)?U:ln)}}if(ee.get(B))for(var Ar=0;Ar<we.length;Ar++){var Eo=we[Ar];if(O[Eo]&B)for(var Lr=Ar-1;Lr>=-1;Lr--){var Ao=Lr===-1?Ut:O[we[Lr]];if(Ao&s){Ao===ae&&ne(Eo,D);break}}}if(ee.get(ae))for(var zs=0;zs<we.length;zs++){var Lo=we[zs];O[Lo]&ae&&ne(Lo,E)}if(ee.get(F)||ee.get(C))for(var Oi=1;Oi<we.length-1;Oi++){var Gs=we[Oi];if(O[Gs]&(F|C)){for(var jn=0,Vs=0,Hs=Oi-1;Hs>=0&&(jn=O[we[Hs]],!!(jn&l));Hs--);for(var Ws=Oi+1;Ws<we.length&&(Vs=O[we[Ws]],!!(Vs&l));Ws++);jn===Vs&&(O[Gs]===F?jn===B:jn&(B|D))&&ne(Gs,jn)}}if(ee.get(B))for(var zi=0;zi<we.length;zi++){var Lu=we[zi];if(O[Lu]&B){for(var Cr=zi-1;Cr>=0&&O[we[Cr]]&(L|l);Cr--)ne(we[Cr],B);for(var Rr=zi+1;Rr<we.length&&O[we[Rr]]&(L|l);Rr++)ne(we[Rr],B)}}if(ee.get(L)||ee.get(F)||ee.get(C))for(var Gi=0;Gi<we.length;Gi++){var Co=we[Gi];if(O[Co]&(L|F|C)){ne(Co,U);for(var Pr=Gi-1;Pr>=0&&O[we[Pr]]&l;Pr--)ne(we[Pr],U);for(var Dr=Gi+1;Dr<we.length&&O[we[Dr]]&l;Dr++)ne(we[Dr],U)}}if(ee.get(B))for(var Xs=0,Ro=Ut;Xs<we.length;Xs++){var Po=we[Xs],qs=O[Po];qs&B?Ro===_&&ne(Po,_):qs&s&&(Ro=qs)}if(ee.get(o)){var Vi=E|B|D,Do=Vi|_,Ir=[];{for(var Zn=[],Jn=0;Jn<we.length;Jn++)if(O[we[Jn]]&o){var Hi=w[we[Jn]],Io=void 0;if(x(Hi)!==null)if(Zn.length<63)Zn.push({char:Hi,seqIndex:Jn});else break;else if((Io=M(Hi))!==null)for(var Wi=Zn.length-1;Wi>=0;Wi--){var Ys=Zn[Wi].char;if(Ys===Io||Ys===M(S(Hi))||x(S(Ys))===Hi){Ir.push([Zn[Wi].seqIndex,Jn]),Zn.length=Wi;break}}}Ir.sort(function(bt,Yt){return bt[0]-Yt[0]})}for(var js=0;js<Ir.length;js++){for(var Fo=Ir[js],Xi=Fo[0],Fr=Fo[1],Uo=!1,qt=0,Zs=Xi+1;Zs<Fr;Zs++){var Js=we[Zs];if(O[Js]&Do){Uo=!0;var Bo=O[Js]&Vi?E:_;if(Bo===Qn(Js)){qt=Bo;break}}}if(Uo&&!qt){qt=Ut;for(var Qs=Xi-1;Qs>=0;Qs--){var Ur=we[Qs];if(O[Ur]&Do){var No=O[Ur]&Vi?E:_;No!==Qn(Ur)?qt=No:qt=Qn(Ur);break}}}if(qt){if(O[we[Xi]]=O[we[Fr]]=qt,qt!==Qn(we[Xi])){for(var qi=Xi+1;qi<we.length;qi++)if(!(O[we[qi]]&l)){h(w[we[qi]])&Q&&(O[we[qi]]=qt);break}}if(qt!==Qn(we[Fr])){for(var Yi=Fr+1;Yi<we.length;Yi++)if(!(O[we[Yi]]&l)){h(w[we[Yi]])&Q&&(O[we[Yi]]=qt);break}}}}for(var gn=0;gn<we.length;gn++)if(O[we[gn]]&o){for(var ko=gn,Ks=gn,$s=Ut,ji=gn-1;ji>=0;ji--)if(O[we[ji]]&l)ko=ji;else{$s=O[we[ji]]&Vi?E:_;break}for(var Oo=on,Zi=gn+1;Zi<we.length;Zi++)if(O[we[Zi]]&(o|l))Ks=Zi;else{Oo=O[we[Zi]]&Vi?E:_;break}for(var Br=ko;Br<=Ks;Br++)O[we[Br]]=$s===Oo?$s:Qn(we[Br]);gn=Ks}}}for(var Nt=J.start;Nt<=J.end;Nt++){var Cu=ie[Nt],Nr=O[Nt];if(Cu&1?Nr&(_|B|D)&&ie[Nt]++:Nr&E?ie[Nt]++:Nr&(D|B)&&(ie[Nt]+=2),Nr&l&&(ie[Nt]=Nt===0?J.level:ie[Nt-1]),Nt===J.end||h(w[Nt])&(N|I))for(var kr=Nt;kr>=0&&h(w[kr])&c;kr--)ie[kr]=J.level}}return{levels:ie,paragraphs:P};function zo(bt,Yt){for(var Pt=bt;Pt<w.length;Pt++){var vn=O[Pt];if(vn&(E|ae))return 1;if(vn&(I|_)||Yt&&vn===ye)return 0;if(vn&i){var Go=Ru(Pt);Pt=Go===-1?w.length:Go}}return 0}function Ru(bt){for(var Yt=1,Pt=bt+1;Pt<w.length;Pt++){var vn=O[Pt];if(vn&I)break;if(vn&ye){if(--Yt==0)return Pt}else vn&i&&Yt++}return-1}function Qn(bt){return ie[bt]&1?E:_}}var ue="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",me;function j(){if(!me){var w=v(ue,!0),V=w.map,Y=w.reverseMap;Y.forEach(function(O,se){V.set(se,O)}),me=V}}function te(w){return j(),me.get(w)||null}function re(w,V,Y,O){var se=w.length;Y=Math.max(0,Y==null?0:+Y),O=Math.min(se-1,O==null?se-1:+O);for(var ee=new Map,ne=Y;ne<=O;ne++)if(V[ne]&1){var ie=te(w[ne]);ie!==null&&ee.set(ne,ie)}return ee}function be(w,V,Y,O){var se=w.length;Y=Math.max(0,Y==null?0:+Y),O=Math.min(se-1,O==null?se-1:+O);var ee=[];return V.paragraphs.forEach(function(ne){var ie=Math.max(Y,ne.start),de=Math.min(O,ne.end);if(ie<de){for(var P=V.levels.slice(ie,de+1),J=de;J>=ie&&h(w[J])&c;J--)P[J]=ne.level;for(var q=ne.level,oe=1/0,ge=0;ge<P.length;ge++){var Te=P[ge];Te>q&&(q=Te),Te<oe&&(oe=Te|1)}for(var De=q;De>=oe;De--)for(var Me=0;Me<P.length;Me++)if(P[Me]>=De){for(var Pe=Me;Me+1<P.length&&P[Me+1]>=De;)Me++;Me>Pe&&ee.push([Pe+Y,Me+Y])}}}),ee}function he(w,V,Y,O){var se=A(w,V,Y,O),ee=[].concat(w);return se.forEach(function(ne,ie){ee[ie]=(V.levels[ne]&1?te(w[ne]):null)||w[ne]}),ee.join("")}function A(w,V,Y,O){for(var se=be(w,V,Y,O),ee=[],ne=0;ne<w.length;ne++)ee[ne]=ne;return se.forEach(function(ie){for(var de=ie[0],P=ie[1],J=ee.slice(de,P+1),q=J.length;q--;)ee[P-q]=J[q]}),ee}return e.closingToOpeningBracket=M,e.getBidiCharType=h,e.getBidiCharTypeName=f,e.getCanonicalBracket=S,e.getEmbeddingLevels=pe,e.getMirroredCharacter=te,e.getMirroredCharactersMap=re,e.getReorderSegments=be,e.getReorderedIndices=A,e.getReorderedString=he,e.openingToClosingBracket=x,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return a}const bu=/\bvoid\s+main\s*\(\s*\)\s*{/g;function So(a){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=Ue[n];return i?So(i):r}return a.replace(e,t)}const yt=[];for(let a=0;a<256;a++)yt[a]=(a<16?"0":"")+a.toString(16);function U0(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yt[a&255]+yt[a>>8&255]+yt[a>>16&255]+yt[a>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toUpperCase()}const qn=Object.assign||function(){let a=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)r.hasOwnProperty(n)&&(a[n]=r[n])}return a},B0=Date.now(),Mu=new WeakMap,wu=new Map;let N0=1e10;function To(a,e){const t=G0(e);let r=Mu.get(a);if(r||Mu.set(a,r=Object.create(null)),r[t])return new r[t];const n=`_onBeforeCompile${t}`,i=function(c){a.onBeforeCompile.call(this,c);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let d=wu[u];if(!d){const h=k0(c,e,t);d=wu[u]=h}c.vertexShader=d.vertexShader,c.fragmentShader=d.fragmentShader,qn(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-B0}}),this[n]&&this[n](c)},s=function(){return o(e.chained?a:a.clone())},o=function(c){const u=Object.create(c,l);return Object.defineProperty(u,"baseMaterial",{value:a}),Object.defineProperty(u,"id",{value:N0++}),u.uuid=U0(),u.uniforms=qn({},c.uniforms,e.uniforms),u.defines=qn({},c.defines,e.defines),u.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",u.extensions=qn({},c.extensions,e.extensions),u._listeners=void 0,u},l={constructor:{value:s},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return a.copy.call(this,c),!a.isShaderMaterial&&!a.isDerivedMaterial&&(qn(this.extensions,c.extensions),qn(this.defines,c.defines),qn(this.uniforms,Ol.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new a.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=To(a.isDerivedMaterial?a.getDepthMaterial():new Ya({depthPacking:yl}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=To(a.isDerivedMaterial?a.getDistanceMaterial():new ja,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:u}=this;c&&c.dispose(),u&&u.dispose(),a.dispose.call(this)}}};return r[t]=s,new s}function k0({vertexShader:a,fragmentShader:e},t,r){let{vertexDefs:n,vertexMainIntro:i,vertexMainOutro:s,vertexTransform:o,fragmentDefs:l,fragmentMainIntro:c,fragmentMainOutro:u,fragmentColorTransform:d,customRewriter:h,timeUniform:f}=t;if(n=n||"",i=i||"",s=s||"",l=l||"",c=c||"",u=u||"",(o||h)&&(a=So(a)),(d||h)&&(e=e.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),e=So(e)),h){let g=h({vertexShader:a,fragmentShader:e});a=g.vertexShader,e=g.fragmentShader}if(d){let g=[];e=e.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,v=>(g.push(v),"")),u=`${d}
${g.join(`
`)}
${u}`}if(f){const g=`
uniform float ${f};
`;n=g+n,l=g+l}return o&&(a=`vec3 troika_position_${r};
vec3 troika_normal_${r};
vec2 troika_uv_${r};
${a}
`,n=`${n}
void troikaVertexTransform${r}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${o}
}
`,i=`
troika_position_${r} = vec3(position);
troika_normal_${r} = vec3(normal);
troika_uv_${r} = vec2(uv);
troikaVertexTransform${r}(troika_position_${r}, troika_normal_${r}, troika_uv_${r});
${i}
`,a=a.replace(/\b(position|normal|uv)\b/g,(g,v,y,m)=>/\battribute\s+vec[23]\s+$/.test(m.substr(0,y))?v:`troika_${v}_${r}`)),a=Su(a,r,n,i,s),e=Su(e,r,l,c,u),{vertexShader:a,fragmentShader:e}}function Su(a,e,t,r,n){return(r||n||t)&&(a=a.replace(bu,`
${t}
void troikaOrigMain${e}() {`),a+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),a}function O0(a,e){return a==="uniforms"?void 0:typeof e=="function"?e.toString():e}let z0=0;const Tu=new Map;function G0(a){const e=JSON.stringify(a,O0);let t=Tu.get(e);return t==null&&Tu.set(e,t=++z0),t}function V0(a){const e=16;function t(s,o,l,c,u,d,h){const f=1-h;return{x:f*f*s+2*f*h*l+h*h*u,y:f*f*o+2*f*h*c+h*h*d}}function r(s,o,l,c,u,d,h,f,g){const v=1-g;return{x:v*v*v*s+3*v*v*g*l+3*v*g*g*u+g*g*g*h,y:v*v*v*o+3*v*v*g*c+3*v*g*g*d+g*g*g*f}}function n(){return(self.performance||Date).now()}function i(s,o,l,c,u,d=1){const h=n(),f=new Uint8Array(s*o),g=c[2]-c[0],v=c[3]-c[1],y=a(c),m=/([MLQCZ])([^MLQCZ]*)/g;let p,b,x,M,S;for(;p=m.exec(l);){const _=p[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(E=>parseFloat(E));switch(p[1]){case"M":M=b=_[0],S=x=_[1];break;case"L":(_[0]!==M||_[1]!==S)&&y.addLineSegment(M,S,M=_[0],S=_[1]);break;case"Q":{let E={x:M,y:S};for(let B=1;B<e;B++){let F=t(M,S,_[0],_[1],_[2],_[3],B/(e-1));y.addLineSegment(E.x,E.y,F.x,F.y),E=F}M=_[2],S=_[3];break}case"C":{let E={x:M,y:S};for(let B=1;B<e;B++){let F=r(M,S,_[0],_[1],_[2],_[3],_[4],_[5],B/(e-1));y.addLineSegment(E.x,E.y,F.x,F.y),E=F}M=_[4],S=_[5];break}case"Z":(M!==b||S!==x)&&y.addLineSegment(M,S,b,x);break}}for(let _=0;_<s;_++)for(let E=0;E<o;E++){const B=y.findNearestSignedDistance(c[0]+g*(_+.5)/s,c[1]+v*(E+.5)/o,u);let F=Math.pow(1-Math.abs(B)/u,d)/2;B<0&&(F=1-F),F=Math.max(0,Math.min(255,Math.round(F*255))),f[E*s+_]=F}return{textureData:f,timing:n()-h}}return i}function H0(a,e,t){const{defaultFontURL:r}=t,n=Object.create(null),i=1/0,s=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,o=/[\s\-\u007C\u00AD\u2010\u2012-\u2014\u2027\u2056\u2E17\u2E40]/;function l(y,m){function p(){const b=x=>{console.error(`Failure loading font ${y}${y===r?"":"; trying fallback"}`,x),y!==r&&(y=r,p())};try{const x=new XMLHttpRequest;x.open("get",y,!0),x.responseType="arraybuffer",x.onload=function(){if(x.status>=400)b(new Error(x.statusText));else if(x.status>0)try{const M=a(x.response);m(M)}catch(M){b(M)}},x.onerror=b,x.send()}catch(x){b(x)}}p()}function c(y,m){y||(y=r);let p=n[y];p?p.pending?p.pending.push(m):m(p):(n[y]={pending:[m]},l(y,b=>{let x=n[y].pending;n[y]=b,x.forEach(M=>M(b))}))}function u({text:y="",font:m=r,sdfGlyphSize:p=64,fontSize:b=1,letterSpacing:x=0,lineHeight:M="normal",maxWidth:S=i,direction:_,textAlign:E="left",textIndent:B=0,whiteSpace:F="normal",overflowWrap:L="normal",anchorX:D=0,anchorY:C=0,includeCaretPositions:I=!1,chunkedBoundsSize:N=8192,colorRanges:U=null},k,Q=!1){const ae=f(),ve={fontLoad:0,typesetting:0};y.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),y=y.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),b=+b,x=+x,S=+S,M=M||"normal",B=+B,c(m,Z=>{const fe=isFinite(S);let X=null,$=null,xe=null,G=null,ce=null,ye=null,pe=null,ue=0,me=0,j=F!=="nowrap";const{ascender:te,descender:re,unitsPerEm:be}=Z;ve.fontLoad=f()-ae;const he=f(),A=b/be;M==="normal"&&(M=(te-re)/be),M=M*b;const w=(M-(te-re)*A)/2,V=-(te*A+w),Y=Math.min(M,(te-re)*A),O=(te+re)/2*A-Y/2;let se=B,ee=new g;const ne=[ee];Z.forEachGlyph(y,b,x,(P,J,q)=>{const oe=y.charAt(q),ge=P.advanceWidth*A,Te=ee.count;let De;if("isEmpty"in P||(P.isWhitespace=!!oe&&/\s/.test(oe),P.canBreakAfter=!!oe&&o.test(oe),P.isEmpty=P.xMin===P.xMax||P.yMin===P.yMax||s.test(oe)),!P.isWhitespace&&!P.isEmpty&&me++,j&&fe&&!P.isWhitespace&&J+ge+se>S&&Te){if(ee.glyphAt(Te-1).glyphObj.canBreakAfter)De=new g,se=-J;else for(let Pe=Te;Pe--;)if(Pe===0&&L==="break-word"){De=new g,se=-J;break}else if(ee.glyphAt(Pe).glyphObj.canBreakAfter){De=ee.splitAt(Pe+1);const Ee=De.glyphAt(0).x;se-=Ee;for(let ke=De.count;ke--;)De.glyphAt(ke).x-=Ee;break}De&&(ee.isSoftWrapped=!0,ee=De,ne.push(ee),ue=S)}let Me=ee.glyphAt(ee.count);Me.glyphObj=P,Me.x=J+se,Me.width=ge,Me.charIndex=q,oe===`
`&&(ee=new g,ne.push(ee),se=-(J+ge+x*b)+B)}),ne.forEach(P=>{for(let J=P.count;J--;){let{glyphObj:q,x:oe,width:ge}=P.glyphAt(J);if(!q.isWhitespace){P.width=oe+ge,P.width>ue&&(ue=P.width);return}}});let ie=0,de=0;if(D&&(typeof D=="number"?ie=-D:typeof D=="string"&&(ie=-ue*(D==="left"?0:D==="center"?.5:D==="right"?1:h(D)))),C){if(typeof C=="number")de=-C;else if(typeof C=="string"){let P=ne.length*M;de=C==="top"?0:C==="top-baseline"?-V:C==="middle"?P/2:C==="bottom"?P:C==="bottom-baseline"?P-w+re*A:h(C)*P}}if(!Q){const P=e.getEmbeddingLevels(y,_);X=new Uint16Array(me),$=new Float32Array(me*2),xe={},ye=[i,i,-i,-i],pe=[];let J=V;I&&(ce=new Float32Array(y.length*3)),U&&(G=new Uint8Array(me*3));let q=0,oe=-1,ge=-1,Te,De;ne.forEach((Me,Pe)=>{let{count:Ee,width:ke}=Me;if(Ee>0){let rt=0;for(let Je=Ee;Je--&&Me.glyphAt(Je).glyphObj.isWhitespace;)rt++;let Ye=0,Ze=0;if(E==="center")Ye=(ue-ke)/2;else if(E==="right")Ye=ue-ke;else if(E==="justify"&&Me.isSoftWrapped){let Je=0;for(let Ge=Ee-rt;Ge--;)Me.glyphAt(Ge).glyphObj.isWhitespace&&Je++;Ze=(ue-ke)/Je}if(Ze||Ye){let Je=0;for(let Ge=0;Ge<Ee;Ge++){let nt=Me.glyphAt(Ge);const it=nt.glyphObj;nt.x+=Ye+Je,Ze!==0&&it.isWhitespace&&Ge<Ee-rt&&(Je+=Ze,nt.width+=Ze)}}const mn=e.getReorderSegments(y,P,Me.glyphAt(0).charIndex,Me.glyphAt(Me.count-1).charIndex);for(let Je=0;Je<mn.length;Je++){const[Ge,nt]=mn[Je];let it=1/0,Xe=-1/0;for(let ct=0;ct<Ee;ct++)if(Me.glyphAt(ct).charIndex>=Ge){let Rt=ct,At=ct;for(;At<Ee;At++){let ut=Me.glyphAt(At);if(ut.charIndex>nt)break;At<Ee-rt&&(it=Math.min(it,ut.x),Xe=Math.max(Xe,ut.x+ut.width))}for(let ut=Rt;ut<At;ut++){const Lt=Me.glyphAt(ut);Lt.x=Xe-(Lt.x+Lt.width-it)}break}}let ot;const Vt=Je=>ot=Je;for(let Je=0;Je<Ee;Je++){let Ge=Me.glyphAt(Je);ot=Ge.glyphObj;const nt=ot.index,it=P.levels[Ge.charIndex]&1;if(it){const Xe=e.getMirroredCharacter(y[Ge.charIndex]);Xe&&Z.forEachGlyph(Xe,0,0,Vt)}if(I){const{charIndex:Xe}=Ge,ct=Ge.x+ie,Rt=Ge.x+Ge.width+ie;for(ce[Xe*3]=it?Rt:ct,ce[Xe*3+1]=it?ct:Rt,ce[Xe*3+2]=J+O+de;Xe-oe>1;)ce[(oe+1)*3]=ce[oe*3],ce[(oe+1)*3+1]=ce[oe*3+1],ce[(oe+1)*3+2]=ce[oe*3+2],oe++;oe=Xe}if(U){const{charIndex:Xe}=Ge;for(;Xe>ge;)ge++,U.hasOwnProperty(ge)&&(De=U[ge])}if(!ot.isWhitespace&&!ot.isEmpty){const Xe=q++;xe[nt]||(xe[nt]={path:ot.path,pathBounds:[ot.xMin,ot.yMin,ot.xMax,ot.yMax]});const ct=Ge.x+ie,Rt=J+de;$[Xe*2]=ct,$[Xe*2+1]=Rt;const At=ct+ot.xMin*A,ut=Rt+ot.yMin*A,Lt=ct+ot.xMax*A,T=Rt+ot.yMax*A;At<ye[0]&&(ye[0]=At),ut<ye[1]&&(ye[1]=ut),Lt>ye[2]&&(ye[2]=Lt),T>ye[3]&&(ye[3]=T),Xe%N==0&&(Te={start:Xe,end:Xe,rect:[i,i,-i,-i]},pe.push(Te)),Te.end++;const z=Te.rect;if(At<z[0]&&(z[0]=At),ut<z[1]&&(z[1]=ut),Lt>z[2]&&(z[2]=Lt),T>z[3]&&(z[3]=T),X[Xe]=nt,U){const H=Xe*3;G[H]=De>>16&255,G[H+1]=De>>8&255,G[H+2]=De&255}}}}J-=M})}ve.typesetting=f()-he,k({glyphIds:X,glyphPositions:$,glyphData:xe,caretPositions:ce,caretHeight:Y,glyphColors:G,chunkedBounds:pe,fontSize:b,unitsPerEm:be,ascender:te*A,descender:re*A,lineHeight:M,topBaseline:V,blockBounds:[ie,de-ne.length*M,ie+ue,de],visibleBounds:ye,timings:ve})})}function d(y,m){u(y,p=>{const[b,x,M,S]=p.blockBounds;m({width:M-b,height:S-x})},{metricsOnly:!0})}function h(y){let m=y.match(/^([\d.]+)%$/),p=m?parseFloat(m[1]):NaN;return isNaN(p)?0:p/100}function f(){return(self.performance||Date).now()}function g(){this.data=[]}const v=["glyphObj","x","width","charIndex"];return g.prototype={width:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/v.length)},glyphAt(y){let m=g.flyweight;return m.data=this.data,m.index=y,m},splitAt(y){let m=new g;return m.data=this.data.splice(y*v.length),m}},g.flyweight=v.reduce((y,m,p,b)=>(Object.defineProperty(y,m,{get(){return this.data[this.index*v.length+p]},set(x){this.data[this.index*v.length+p]=x}}),y),{data:null,index:0}),{typeset:u,measure:d,loadFont:c}}function W0(a){let e=!1;const t=[];function r(){e&&(t.sort(function(l,c){return l.maxX-c.maxX}),e=!1)}function n(l,c,u,d){const h={x0:l,y0:c,x1:u,y1:d,minX:Math.min(l,u),minY:Math.min(c,d),maxX:Math.max(l,u),maxY:Math.max(c,d)};t.push(h),e=!0}function i(l,c){r();let u=1/0,d=1/0;for(let h=t.length;h--;){const f=t[h];if(f.maxX+d<=l)break;if(l+d>f.minX&&c-d<f.maxY&&c+d>f.minY){const g=o(l,c,f.x0,f.y0,f.x1,f.y1);g<u&&(u=g,d=Math.sqrt(u))}}return s(l,c)&&(d=-d),d}function s(l,c){r();let u=!1;for(let d=t.length;d--;){const h=t[d];if(h.maxX<=l)break;h.minY<c&&h.maxY>c&&h.y0>c!=h.y1>c&&l<(h.x1-h.x0)*(c-h.y0)/(h.y1-h.y0)+h.x0&&(u=!u)}return u}function o(l,c,u,d,h,f){const g=h-u,v=f-d,y=g*g+v*v,m=y?Math.max(0,Math.min(1,((l-u)*g+(c-d)*v)/y)):0,p=l-(u+m*g),b=c-(d+m*v);return p*p+b*b}return{addLineSegment:n,findNearestSignedDistance:i}}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function X0(){return typeof window=="undefined"&&(self.window=self),function(a){var e={parse:function(n){var i=e._bin,s=new Uint8Array(n);if(i.readASCII(s,0,4)=="ttcf"){var o=4;i.readUshort(s,o),o+=2,i.readUshort(s,o),o+=2;var l=i.readUint(s,o);o+=4;for(var c=[],u=0;u<l;u++){var d=i.readUint(s,o);o+=4,c.push(e._readFont(s,d))}return c}return[e._readFont(s,0)]},_readFont:function(n,i){var s=e._bin,o=i;s.readFixed(n,i),i+=4;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GPOS","GSUB","SVG "],u={_data:n,_offset:o},d={},h=0;h<l;h++){var f=s.readASCII(n,i,4);i+=4,s.readUint(n,i),i+=4;var g=s.readUint(n,i);i+=4;var v=s.readUint(n,i);i+=4,d[f]={offset:g,length:v}}for(h=0;h<c.length;h++){var y=c[h];d[y]&&(u[y.trim()]=e[y.trim()].parse(n,d[y].offset,d[y].length,u))}return u},_tabOffset:function(n,i,s){for(var o=e._bin,l=o.readUshort(n,s+4),c=s+12,u=0;u<l;u++){var d=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var h=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,d==i)return h}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,s){for(var o="",l=0;l<s;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,s){for(var o="",l=0;l<s;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window!="undefined"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,s){var o=e._bin._tdec;return o&&i==0&&s==n.length?o.decode(n):e._bin.readASCII(n,i,s)},readBytes:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,s){for(var o=[],l=0;l<s;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,s,o,l){var c=e._bin,u={},d=i;c.readFixed(n,i),i+=4;var h=c.readUshort(n,i);i+=2;var f=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,u.scriptList=e._lctf.readScriptList(n,d+h),u.featureList=e._lctf.readFeatureList(n,d+f),u.lookupList=e._lctf.readLookupList(n,d+g,l),u},e._lctf.readLookupList=function(n,i,s){var o=e._bin,l=i,c=[],u=o.readUshort(n,i);i+=2;for(var d=0;d<u;d++){var h=o.readUshort(n,i);i+=2;var f=e._lctf.readLookupTable(n,l+h,s);c.push(f)}return c},e._lctf.readLookupTable=function(n,i,s){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var u=o.readUshort(n,i);i+=2;for(var d=c.ltype,h=0;h<u;h++){var f=o.readUshort(n,i);i+=2;var g=s(n,d,l+f,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,s=0;s<32;s++)(n>>>s&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var s=e._bin,o=[],l=s.readUshort(n,i);if(i+=2,l==1){var c=s.readUshort(n,i);i+=2;var u=s.readUshort(n,i);i+=2;for(var d=0;d<u;d++)o.push(c+d),o.push(c+d),o.push(s.readUshort(n,i)),i+=2}if(l==2){var h=s.readUshort(n,i);for(i+=2,d=0;d<h;d++)o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2,o.push(s.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var s=0;s<n.length;s+=3){var o=n[s],l=n[s+1];if(n[s+2],o<=i&&i<=l)return s}return-1},e._lctf.readCoverage=function(n,i){var s=e._bin,o={};o.fmt=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=s.readUshorts(n,i,l)),o.fmt==2&&(o.tab=s.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var s=n.tab;if(n.fmt==1)return s.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(s,i);if(o!=-1)return s[o+2]+(i-s[o])}return-1},e._lctf.readFeatureList=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2;var f=e._lctf.readFeatureTable(n,o+h);f.tag=d.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var u=s.readUshort(n,i);i+=2,l.tab=[];for(var d=0;d<u;d++)l.tab.push(s.readUshort(n,i+2*d));return l},e._lctf.readScriptList=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readASCII(n,i,4);i+=4;var h=s.readUshort(n,i);i+=2,l[d.trim()]=e._lctf.readScriptTable(n,o+h)}return l},e._lctf.readScriptTable=function(n,i){var s=e._bin,o=i,l={},c=s.readUshort(n,i);i+=2,l.default=e._lctf.readLangSysTable(n,o+c);var u=s.readUshort(n,i);i+=2;for(var d=0;d<u;d++){var h=s.readASCII(n,i,4);i+=4;var f=s.readUshort(n,i);i+=2,l[h.trim()]=e._lctf.readLangSysTable(n,o+f)}return l},e._lctf.readLangSysTable=function(n,i){var s=e._bin,o={};s.readUshort(n,i),i+=2,o.reqFeature=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);return i+=2,o.features=s.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,s){var o=e._bin;(n=new Uint8Array(n.buffer,i,s))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],u=0;u<l.length-1;u++)c.push(o.readASCII(n,i+l[u],l[u+1]-l[u]));i+=l[l.length-1];var d=[];i=e.CFF.readIndex(n,i,d);var h=[];for(u=0;u<d.length-1;u++)h.push(e.CFF.readDict(n,i+d[u],i+d[u+1]));i+=d[d.length-1];var f=h[0],g=[];i=e.CFF.readIndex(n,i,g);var v=[];for(u=0;u<g.length-1;u++)v.push(o.readASCII(n,i+g[u],g[u+1]-g[u]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,f),f.CharStrings){i=f.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var y=[];for(u=0;u<g.length-1;u++)y.push(o.readBytes(n,i+g[u],g[u+1]-g[u]));f.CharStrings=y}if(f.ROS){i=f.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),f.FDArray=[],u=0;u<m.length-1;u++){var p=e.CFF.readDict(n,i+m[u],i+m[u+1]);e.CFF._readFDict(n,p,v),f.FDArray.push(p)}i+=m[m.length-1],i=f.FDSelect,f.FDSelect=[];var b=n[i];if(i++,b!=3)throw b;var x=o.readUshort(n,i);for(i+=2,u=0;u<x+1;u++)f.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(n,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(n,f.charset,f.CharStrings.length)),e.CFF._readFDict(n,f,v),f},e.CFF._readFDict=function(n,i,s){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=s[i[l]-426+35])},e.CFF.readSubrs=function(n,i,s){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,u=l.length;c=u<1240?107:u<33900?1131:32768,s.Bias=c,s.Subrs=[];for(var d=0;d<l.length-1;d++)s.Subrs.push(o.readBytes(n,i+l[d],l[d+1]-l[d]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var s=0;s<n.charset.length;s++)if(n.charset[s]==i)return s;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,s){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var u=0;u<c;u++)o.push(n[i+u]);return o},e.CFF.readCharset=function(n,i,s){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var u=0;u<s;u++){var d=o.readUshort(n,i);i+=2,l.push(d)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<s;){d=o.readUshort(n,i),i+=2;var h=0;for(c==1?(h=n[i],i++):(h=o.readUshort(n,i),i+=2),u=0;u<=h;u++)l.push(d),d++}}return l},e.CFF.readIndex=function(n,i,s){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var u=0;u<l;u++)s.push(n[i+u]);else if(c==2)for(u=0;u<l;u++)s.push(o.readUshort(n,i+2*u));else if(c==3)for(u=0;u<l;u++)s.push(16777215&o.readUint(n,i+3*u-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,s){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,d=null,h=null;l<=20&&(d=l,u=1),l==12&&(d=100*l+c,u=2),21<=l&&l<=27&&(d=l,u=1),l==28&&(h=o.readShort(n,i+1),u=3),29<=l&&l<=31&&(d=l,u=1),32<=l&&l<=246&&(h=l-139,u=1),247<=l&&l<=250&&(h=256*(l-247)+c+108,u=2),251<=l&&l<=254&&(h=256*-(l-251)-c-108,u=2),l==255&&(h=o.readInt(n,i+1)/65535,u=5),s.val=h!=null?h:"o"+d,s.size=u},e.CFF.readCharString=function(n,i,s){for(var o=i+s,l=e._bin,c=[];i<o;){var u=n[i],d=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,f=null,g=null;u<=20&&(f=u,h=1),u==12&&(f=100*u+d,h=2),u!=19&&u!=20||(f=u,h=2),21<=u&&u<=27&&(f=u,h=1),u==28&&(g=l.readShort(n,i+1),h=3),29<=u&&u<=31&&(f=u,h=1),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+d+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-d-108,h=2),u==255&&(g=l.readInt(n,i+1)/65535,h=5),c.push(g!=null?g:"o"+f),i+=h}return c},e.CFF.readDict=function(n,i,s){for(var o=e._bin,l={},c=[];i<s;){var u=n[i],d=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,f=null,g=null;if(u==28&&(g=o.readShort(n,i+1),h=3),u==29&&(g=o.readInt(n,i+1),h=5),32<=u&&u<=246&&(g=u-139,h=1),247<=u&&u<=250&&(g=256*(u-247)+d+108,h=2),251<=u&&u<=254&&(g=256*-(u-251)-d-108,h=2),u==255)throw g=o.readInt(n,i+1)/65535,h=5,"unknown number";if(u==30){var v=[];for(h=1;;){var y=n[i+h];h++;var m=y>>4,p=15&y;if(m!=15&&v.push(m),p!=15&&v.push(p),p==15)break}for(var b="",x=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],M=0;M<v.length;M++)b+=x[v[M]];g=parseFloat(b)}u<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][u],h=1,u==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][d],h=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(g),i+=h}return l},e.cmap={},e.cmap.parse=function(n,i,s){n=new Uint8Array(n.buffer,i,s),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var u=[];l.tables=[];for(var d=0;d<c;d++){var h=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var v="p"+h+"e"+f,y=u.indexOf(g);if(y==-1){var m;y=l.tables.length,u.push(g);var p=o.readUshort(n,g);p==0?m=e.cmap.parse0(n,g):p==4?m=e.cmap.parse4(n,g):p==6?m=e.cmap.parse6(n,g):p==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+p,h,f,g),l.tables.push(m)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=y}return l},e.cmap.parse0=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var s=e._bin,o=i,l={};l.format=s.readUshort(n,i),i+=2;var c=s.readUshort(n,i);i+=2,s.readUshort(n,i),i+=2;var u=s.readUshort(n,i);i+=2;var d=u/2;l.searchRange=s.readUshort(n,i),i+=2,l.entrySelector=s.readUshort(n,i),i+=2,l.rangeShift=s.readUshort(n,i),i+=2,l.endCount=s.readUshorts(n,i,d),i+=2*d,i+=2,l.startCount=s.readUshorts(n,i,d),i+=2*d,l.idDelta=[];for(var h=0;h<d;h++)l.idDelta.push(s.readShort(n,i)),i+=2;for(l.idRangeOffset=s.readUshorts(n,i,d),i+=2*d,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(s.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,s.readUshort(n,i),i+=2,o.firstCode=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(s.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var s=e._bin,o={};o.format=s.readUshort(n,i),i+=2,i+=2,s.readUint(n,i),i+=4,s.readUint(n,i),i+=4;var l=s.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var u=i+12*c,d=s.readUint(n,u+0),h=s.readUint(n,u+4),f=s.readUint(n,u+8);o.groups.push([d,h,f])}return o},e.glyf={},e.glyf.parse=function(n,i,s,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var s=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=s.readShort(o,l),l+=2,c.xMin=s.readShort(o,l),l+=2,c.yMin=s.readShort(o,l),l+=2,c.xMax=s.readShort(o,l),l+=2,c.yMax=s.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var u=0;u<c.noc;u++)c.endPts.push(s.readUshort(o,l)),l+=2;var d=s.readUshort(o,l);if(l+=2,o.length-l<d)return null;c.instructions=s.readBytes(o,l,d),l+=d;var h=c.endPts[c.noc-1]+1;for(c.flags=[],u=0;u<h;u++){var f=o[l];if(l++,c.flags.push(f),(8&f)!=0){var g=o[l];l++;for(var v=0;v<g;v++)c.flags.push(f),u++}}for(c.xs=[],u=0;u<h;u++){var y=(2&c.flags[u])!=0,m=(16&c.flags[u])!=0;y?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(s.readShort(o,l)),l+=2)}for(c.ys=[],u=0;u<h;u++)y=(4&c.flags[u])!=0,m=(32&c.flags[u])!=0,y?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(s.readShort(o,l)),l+=2);var p=0,b=0;for(u=0;u<h;u++)p+=c.xs[u],b+=c.ys[u],c.xs[u]=p,c.ys[u]=b}else{var x;c.parts=[];do{x=s.readUshort(o,l),l+=2;var M={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(M),M.glyphIndex=s.readUshort(o,l),l+=2,1&x){var S=s.readShort(o,l);l+=2;var _=s.readShort(o,l);l+=2}else S=s.readInt8(o,l),l++,_=s.readInt8(o,l),l++;2&x?(M.m.tx=S,M.m.ty=_):(M.p1=S,M.p2=_),8&x?(M.m.a=M.m.d=s.readF2dot14(o,l),l+=2):64&x?(M.m.a=s.readF2dot14(o,l),l+=2,M.m.d=s.readF2dot14(o,l),l+=2):128&x&&(M.m.a=s.readF2dot14(o,l),l+=2,M.m.b=s.readF2dot14(o,l),l+=2,M.m.c=s.readF2dot14(o,l),l+=2,M.m.d=s.readF2dot14(o,l),l+=2)}while(32&x);if(256&x){var E=s.readUshort(o,l);for(l+=2,c.instr=[],u=0;u<E;u++)c.instr.push(o[l]),l++}}return c},e.GPOS={},e.GPOS.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i==1||i==2||i==3||i==7||i==8&&u.fmt<=2){var d=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,d+c)}if(i==1&&u.fmt==1){var h=l.readUshort(n,s);s+=2;var f=e._lctf.numOfOnes(h);h!=0&&(u.pos=e.GPOS.readValueRecord(n,s,h))}else if(i==2&&u.fmt>=1&&u.fmt<=2){h=l.readUshort(n,s),s+=2;var g=l.readUshort(n,s);s+=2,f=e._lctf.numOfOnes(h);var v=e._lctf.numOfOnes(g);if(u.fmt==1){u.pairsets=[];var y=l.readUshort(n,s);s+=2;for(var m=0;m<y;m++){var p=c+l.readUshort(n,s);s+=2;var b=l.readUshort(n,p);p+=2;for(var x=[],M=0;M<b;M++){var S=l.readUshort(n,p);p+=2,h!=0&&(D=e.GPOS.readValueRecord(n,p,h),p+=2*f),g!=0&&(C=e.GPOS.readValueRecord(n,p,g),p+=2*v),x.push({gid2:S,val1:D,val2:C})}u.pairsets.push(x)}}if(u.fmt==2){var _=l.readUshort(n,s);s+=2;var E=l.readUshort(n,s);s+=2;var B=l.readUshort(n,s);s+=2;var F=l.readUshort(n,s);for(s+=2,u.classDef1=e._lctf.readClassDef(n,c+_),u.classDef2=e._lctf.readClassDef(n,c+E),u.matrix=[],m=0;m<B;m++){var L=[];for(M=0;M<F;M++){var D=null,C=null;h!=0&&(D=e.GPOS.readValueRecord(n,s,h),s+=2*f),g!=0&&(C=e.GPOS.readValueRecord(n,s,g),s+=2*v),L.push({val1:D,val2:C})}u.matrix.push(L)}}}else{if(i==9&&u.fmt==1){var I=l.readUshort(n,s);s+=2;var N=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=I;else if(o.ltype!=I)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+N)}console.debug("unsupported GPOS table LookupType",i,"format",u.fmt)}return u},e.GPOS.readValueRecord=function(n,i,s){var o=e._bin,l=[];return l.push(1&s?o.readShort(n,i):0),i+=1&s?2:0,l.push(2&s?o.readShort(n,i):0),i+=2&s?2:0,l.push(4&s?o.readShort(n,i):0),i+=4&s?2:0,l.push(8&s?o.readShort(n,i):0),i+=8&s?2:0,l},e.GSUB={},e.GSUB.parse=function(n,i,s,o){return e._lctf.parse(n,i,s,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,s,o){var l=e._bin,c=s,u={};if(u.fmt=l.readUshort(n,s),s+=2,i!=1&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==4||i==5&&u.fmt<=2||i==6&&u.fmt<=2){var d=l.readUshort(n,s);s+=2,u.coverage=e._lctf.readCoverage(n,c+d)}if(i==1&&u.fmt>=1&&u.fmt<=2){if(u.fmt==1)u.delta=l.readShort(n,s),s+=2;else if(u.fmt==2){var h=l.readUshort(n,s);s+=2,u.newg=l.readUshorts(n,s,h),s+=2*u.newg.length}}else if(i==4){u.vals=[],h=l.readUshort(n,s),s+=2;for(var f=0;f<h;f++){var g=l.readUshort(n,s);s+=2,u.vals.push(e.GSUB.readLigatureSet(n,c+g))}}else if(i==5&&u.fmt==2){if(u.fmt==2){var v=l.readUshort(n,s);s+=2,u.cDef=e._lctf.readClassDef(n,c+v),u.scset=[];var y=l.readUshort(n,s);for(s+=2,f=0;f<y;f++){var m=l.readUshort(n,s);s+=2,u.scset.push(m==0?null:e.GSUB.readSubClassSet(n,c+m))}}}else if(i==6&&u.fmt==3){if(u.fmt==3){for(f=0;f<3;f++){h=l.readUshort(n,s),s+=2;for(var p=[],b=0;b<h;b++)p.push(e._lctf.readCoverage(n,c+l.readUshort(n,s+2*b)));s+=2*h,f==0&&(u.backCvg=p),f==1&&(u.inptCvg=p),f==2&&(u.ahedCvg=p)}h=l.readUshort(n,s),s+=2,u.lookupRec=e.GSUB.readSubstLookupRecords(n,s,h)}}else{if(i==7&&u.fmt==1){var x=l.readUshort(n,s);s+=2;var M=l.readUint(n,s);if(s+=4,o.ltype==9)o.ltype=x;else if(o.ltype!=x)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+M)}console.debug("unsupported GSUB table LookupType",i,"format",u.fmt)}return u},e.GSUB.readSubClassSet=function(n,i){var s=e._bin.readUshort,o=i,l=[],c=s(n,i);i+=2;for(var u=0;u<c;u++){var d=s(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+d))}return l},e.GSUB.readSubClassRule=function(n,i){var s=e._bin.readUshort,o={},l=s(n,i),c=s(n,i+=2);i+=2,o.input=[];for(var u=0;u<l-1;u++)o.input.push(s(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,s){for(var o=e._bin.readUshort,l=[],c=0;c<s;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+d))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var s=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var u=s.readUshort(n,i);i+=2,c==1&&u--,o[l[c]]=s.readUshorts(n,i,u),i+=2*o[l[c]].length}return u=s.readUshort(n,i),i+=2,o.subst=s.readUshorts(n,i,2*u),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var s=e._bin,o=i,l=[],c=s.readUshort(n,i);i+=2;for(var u=0;u<c;u++){var d=s.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+d))}return l},e.GSUB.readLigature=function(n,i){var s=e._bin,o={chain:[]};o.nglyph=s.readUshort(n,i),i+=2;var l=s.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(s.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,s){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,s,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},u=0,d=0,h=0;h<o.maxp.numGlyphs;h++)h<o.hhea.numberOfHMetrics&&(u=l.readUshort(n,i),i+=2,d=l.readShort(n,i),i+=2),c.aWidth.push(u),c.lsBearing.push(d);return c},e.kern={},e.kern.parse=function(n,i,s,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,s,o);var u=l.readUshort(n,i);i+=2;for(var d={glyph1:[],rval:[]},h=0;h<u;h++){i+=2,s=l.readUshort(n,i),i+=2;var f=l.readUshort(n,i);i+=2;var g=f>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,d)}return d},e.kern.parseV1=function(n,i,s,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var u={glyph1:[],rval:[]},d=0;d<c;d++){l.readUint(n,i),i+=4;var h=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var f=h>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;i=e.kern.readFormat0(n,i,u)}return u},e.kern.readFormat0=function(n,i,s){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var u=0;u<c;u++){var d=o.readUshort(n,i);i+=2;var h=o.readUshort(n,i);i+=2;var f=o.readShort(n,i);i+=2,d!=l&&(s.glyph1.push(d),s.rval.push({glyph2:[],vals:[]}));var g=s.rval[s.rval.length-1];g.glyph2.push(h),g.vals.push(f),l=d}return i},e.loca={},e.loca.parse=function(n,i,s,o){var l=e._bin,c=[],u=o.head.indexToLocFormat,d=o.maxp.numGlyphs+1;if(u==0)for(var h=0;h<d;h++)c.push(l.readUshort(n,i+(h<<1))<<1);if(u==1)for(h=0;h<d;h++)c.push(l.readUint(n,i+(h<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,s){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,s){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var u,d=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],h=i+=2,f=0;f<c;f++){var g=o.readUshort(n,i);i+=2;var v=o.readUshort(n,i);i+=2;var y=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var b=o.readUshort(n,i);i+=2;var x,M=d[m],S=h+12*c+b;if(g==0)x=o.readUnicode(n,S,p/2);else if(g==3&&v==0)x=o.readUnicode(n,S,p/2);else if(v==0)x=o.readASCII(n,S,p);else if(v==1)x=o.readUnicode(n,S,p/2);else if(v==3)x=o.readUnicode(n,S,p/2);else{if(g!=1)throw"unknown encoding "+v+", platformID: "+g;x=o.readASCII(n,S,p),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var _="p"+g+","+y.toString(16);l[_]==null&&(l[_]={}),l[_][M!==void 0?M:m]=x,l[_]._lang=y}for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==1033)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==0)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==3084)return l[E];for(var E in l)if(l[E].postScriptName!=null)return l[E];for(var E in l){u=E;break}return console.debug("returning name table with languageID "+l[u]._lang),l[u]},e["OS/2"]={},e["OS/2"].parse=function(n,i,s){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,s){var o=e._bin;return s.xAvgCharWidth=o.readShort(n,i),i+=2,s.usWeightClass=o.readUshort(n,i),i+=2,s.usWidthClass=o.readUshort(n,i),i+=2,s.fsType=o.readUshort(n,i),i+=2,s.ySubscriptXSize=o.readShort(n,i),i+=2,s.ySubscriptYSize=o.readShort(n,i),i+=2,s.ySubscriptXOffset=o.readShort(n,i),i+=2,s.ySubscriptYOffset=o.readShort(n,i),i+=2,s.ySuperscriptXSize=o.readShort(n,i),i+=2,s.ySuperscriptYSize=o.readShort(n,i),i+=2,s.ySuperscriptXOffset=o.readShort(n,i),i+=2,s.ySuperscriptYOffset=o.readShort(n,i),i+=2,s.yStrikeoutSize=o.readShort(n,i),i+=2,s.yStrikeoutPosition=o.readShort(n,i),i+=2,s.sFamilyClass=o.readShort(n,i),i+=2,s.panose=o.readBytes(n,i,10),i+=10,s.ulUnicodeRange1=o.readUint(n,i),i+=4,s.ulUnicodeRange2=o.readUint(n,i),i+=4,s.ulUnicodeRange3=o.readUint(n,i),i+=4,s.ulUnicodeRange4=o.readUint(n,i),i+=4,s.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,s.fsSelection=o.readUshort(n,i),i+=2,s.usFirstCharIndex=o.readUshort(n,i),i+=2,s.usLastCharIndex=o.readUshort(n,i),i+=2,s.sTypoAscender=o.readShort(n,i),i+=2,s.sTypoDescender=o.readShort(n,i),i+=2,s.sTypoLineGap=o.readShort(n,i),i+=2,s.usWinAscent=o.readUshort(n,i),i+=2,s.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,s){var o=e._bin;return i=e["OS/2"].version0(n,i,s),s.ulCodePageRange1=o.readUint(n,i),i+=4,s.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,s){var o=e._bin;return i=e["OS/2"].version1(n,i,s),s.sxHeight=o.readShort(n,i),i+=2,s.sCapHeight=o.readShort(n,i),i+=2,s.usDefault=o.readUshort(n,i),i+=2,s.usBreak=o.readUshort(n,i),i+=2,s.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,s){var o=e._bin;return i=e["OS/2"].version2(n,i,s),s.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,s.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,s){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var s=n.cmap,o=-1;if(s.p0e4!=null?o=s.p0e4:s.p3e1!=null?o=s.p3e1:s.p1e0!=null?o=s.p1e0:s.p0e3!=null&&(o=s.p0e3),o==-1)throw"no familiar platform and encoding!";var l=s.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,u=0;u<l.endCount.length;u++)if(i<=l.endCount[u]){c=u;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(u=0;u<l.groups.length;u++){var d=l.groups[u];if(d[0]<=i&&i<=d[1])return d[2]+(i-d[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var s={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?s:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,u=n.CFF.Private;if(c.ROS){for(var d=0;c.FDSelect[d+2]<=i;)d+=2;u=c.FDArray[c.FDSelect[d+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,u,s)}else n.glyf&&e.U._drawGlyf(i,n,s);return s},e.U._drawGlyf=function(n,i,s){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,s):e.U._compoGlyph(o,i,s))},e.U._simpleGlyph=function(n,i){for(var s=0;s<n.noc;s++){for(var o=s==0?0:n.endPts[s-1]+1,l=n.endPts[s],c=o;c<=l;c++){var u=c==o?l:c-1,d=c==l?o:c+1,h=1&n.flags[c],f=1&n.flags[u],g=1&n.flags[d],v=n.xs[c],y=n.ys[c];if(c==o)if(h){if(!f){e.U.P.moveTo(i,v,y);continue}e.U.P.moveTo(i,n.xs[u],n.ys[u])}else f?e.U.P.moveTo(i,n.xs[u],n.ys[u]):e.U.P.moveTo(i,(n.xs[u]+v)/2,(n.ys[u]+y)/2);h?f&&e.U.P.lineTo(i,v,y):g?e.U.P.qcurveTo(i,v,y,n.xs[d],n.ys[d]):e.U.P.qcurveTo(i,v,y,(v+n.xs[d])/2,(y+n.ys[d])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,s){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var u=c.m,d=0;d<l.crds.length;d+=2){var h=l.crds[d],f=l.crds[d+1];s.crds.push(h*u.a+f*u.b+u.tx),s.crds.push(h*u.c+f*u.d+u.ty)}for(d=0;d<l.cmds.length;d++)s.cmds.push(l.cmds[d])}},e.U._getGlyphClass=function(n,i){var s=e._lctf.getInterval(i,n);return s==-1?0:i[s+2]},e.U.getPairAdjustment=function(n,i,s){var o=0;if(n.GPOS)for(var l=n.GPOS,c=l.lookupList,u=l.featureList,d=[],h=0;h<u.length;h++){var f=u[h];if(f.tag=="kern"){for(var g=0;g<f.tab.length;g++)if(!d[f.tab[g]]){d[f.tab[g]]=!0;for(var v=c[f.tab[g]],y=0;y<v.tabs.length;y++)if(v.tabs[y]!=null){var m,p=v.tabs[y];if((!p.coverage||(m=e._lctf.coverageIndex(p.coverage,i))!=-1)&&v.ltype!=1){if(v.ltype==2){var b;if(p.fmt==1){var x=p.pairsets[m];for(h=0;h<x.length;h++)x[h].gid2==s&&(b=x[h])}else if(p.fmt==2){var M=e.U._getGlyphClass(i,p.classDef1),S=e.U._getGlyphClass(s,p.classDef2);b=p.matrix[M][S]}b&&b.val1&&b.val1[2]&&(o+=b.val1[2]),b&&b.val2&&b.val2[0]&&(o+=b.val2[0])}}}}}}if(n.kern){var _=n.kern.glyph1.indexOf(i);if(_!=-1){var E=n.kern.rval[_].glyph2.indexOf(s);E!=-1&&(o+=n.kern.rval[_].vals[E])}}return o},e.U._applySubs=function(n,i,s,o){for(var l=n.length-i-1,c=0;c<s.tabs.length;c++)if(s.tabs[c]!=null){var u,d=s.tabs[c];if(!d.coverage||(u=e._lctf.coverageIndex(d.coverage,n[i]))!=-1){if(s.ltype==1)n[i],d.fmt==1?n[i]=n[i]+d.delta:n[i]=d.newg[u];else if(s.ltype==4)for(var h=d.vals[u],f=0;f<h.length;f++){var g=h[f],v=g.chain.length;if(!(v>l)){for(var y=!0,m=0,p=0;p<v;p++){for(;n[i+m+(1+p)]==-1;)m++;g.chain[p]!=n[i+m+(1+p)]&&(y=!1)}if(y){for(n[i]=g.nglyph,p=0;p<v+m;p++)n[i+p+1]=-1;break}}}else if(s.ltype==5&&d.fmt==2)for(var b=e._lctf.getInterval(d.cDef,n[i]),x=d.cDef[b+2],M=d.scset[x],S=0;S<M.length;S++){var _=M[S],E=_.input;if(!(E.length>l)){for(y=!0,p=0;p<E.length;p++){var B=e._lctf.getInterval(d.cDef,n[i+1+p]);if(b==-1&&d.cDef[B+2]!=E[p]){y=!1;break}}if(y){var F=_.substLookupRecords;for(f=0;f<F.length;f+=2)F[f],F[f+1]}}}else if(s.ltype==6&&d.fmt==3){if(!e.U._glsCovered(n,d.backCvg,i-d.backCvg.length)||!e.U._glsCovered(n,d.inptCvg,i)||!e.U._glsCovered(n,d.ahedCvg,i+d.inptCvg.length))continue;var L=d.lookupRec;for(S=0;S<L.length;S+=2){b=L[S];var D=o[L[S+1]];e.U._applySubs(n,i+b,D,o)}}}}},e.U._glsCovered=function(n,i,s){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[s+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,s){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var u=i[c];if(u!=-1){for(var d=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,h=e.U.glyphToPath(n,u),f=0;f<h.crds.length;f+=2)o.crds.push(h.crds[f]+l),o.crds.push(h.crds[f+1]);for(s&&o.cmds.push(s),f=0;f<h.cmds.length;f++)o.cmds.push(h.cmds[f]);s&&o.cmds.push("X"),l+=n.hmtx.aWidth[u],c<i.length-1&&(l+=e.U.getPairAdjustment(n,u,d))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,s){n.cmds.push("M"),n.crds.push(i,s)},e.U.P.lineTo=function(n,i,s){n.cmds.push("L"),n.crds.push(i,s)},e.U.P.curveTo=function(n,i,s,o,l,c,u){n.cmds.push("C"),n.crds.push(i,s,o,l,c,u)},e.U.P.qcurveTo=function(n,i,s,o,l){n.cmds.push("Q"),n.crds.push(i,s,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,s,o,l){for(var c=i.stack,u=i.nStems,d=i.haveWidth,h=i.width,f=i.open,g=0,v=i.x,y=i.y,m=0,p=0,b=0,x=0,M=0,S=0,_=0,E=0,B=0,F=0,L={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,L);var D=L.val;if(g+=L.size,D=="o1"||D=="o18")c.length%2!=0&&!d&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,d=!0;else if(D=="o3"||D=="o23")c.length%2!=0&&!d&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,d=!0;else if(D=="o4")c.length>1&&!d&&(h=c.shift()+o.nominalWidthX,d=!0),f&&e.U.P.closePath(l),y+=c.pop(),e.U.P.moveTo(l,v,y),f=!0;else if(D=="o5")for(;c.length>0;)v+=c.shift(),y+=c.shift(),e.U.P.lineTo(l,v,y);else if(D=="o6"||D=="o7")for(var C=c.length,I=D=="o6",N=0;N<C;N++){var U=c.shift();I?v+=U:y+=U,I=!I,e.U.P.lineTo(l,v,y)}else if(D=="o8"||D=="o24"){C=c.length;for(var k=0;k+6<=C;)m=v+c.shift(),p=y+c.shift(),b=m+c.shift(),x=p+c.shift(),v=b+c.shift(),y=x+c.shift(),e.U.P.curveTo(l,m,p,b,x,v,y),k+=6;D=="o24"&&(v+=c.shift(),y+=c.shift(),e.U.P.lineTo(l,v,y))}else{if(D=="o11")break;if(D=="o1234"||D=="o1235"||D=="o1236"||D=="o1237")D=="o1234"&&(p=y,b=(m=v+c.shift())+c.shift(),F=x=p+c.shift(),S=x,E=y,v=(_=(M=(B=b+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,p,b,x,B,F),e.U.P.curveTo(l,M,S,_,E,v,y)),D=="o1235"&&(m=v+c.shift(),p=y+c.shift(),b=m+c.shift(),x=p+c.shift(),B=b+c.shift(),F=x+c.shift(),M=B+c.shift(),S=F+c.shift(),_=M+c.shift(),E=S+c.shift(),v=_+c.shift(),y=E+c.shift(),c.shift(),e.U.P.curveTo(l,m,p,b,x,B,F),e.U.P.curveTo(l,M,S,_,E,v,y)),D=="o1236"&&(m=v+c.shift(),p=y+c.shift(),b=m+c.shift(),F=x=p+c.shift(),S=x,_=(M=(B=b+c.shift())+c.shift())+c.shift(),E=S+c.shift(),v=_+c.shift(),e.U.P.curveTo(l,m,p,b,x,B,F),e.U.P.curveTo(l,M,S,_,E,v,y)),D=="o1237"&&(m=v+c.shift(),p=y+c.shift(),b=m+c.shift(),x=p+c.shift(),B=b+c.shift(),F=x+c.shift(),M=B+c.shift(),S=F+c.shift(),_=M+c.shift(),E=S+c.shift(),Math.abs(_-v)>Math.abs(E-y)?v=_+c.shift():y=E+c.shift(),e.U.P.curveTo(l,m,p,b,x,B,F),e.U.P.curveTo(l,M,S,_,E,v,y));else if(D=="o14"){if(c.length>0&&!d&&(h=c.shift()+s.nominalWidthX,d=!0),c.length==4){var Q=c.shift(),ae=c.shift(),ve=c.shift(),Z=c.shift(),fe=e.CFF.glyphBySE(s,ve),X=e.CFF.glyphBySE(s,Z);e.U._drawCFF(s.CharStrings[fe],i,s,o,l),i.x=Q,i.y=ae,e.U._drawCFF(s.CharStrings[X],i,s,o,l)}f&&(e.U.P.closePath(l),f=!1)}else if(D=="o19"||D=="o20")c.length%2!=0&&!d&&(h=c.shift()+o.nominalWidthX),u+=c.length>>1,c.length=0,d=!0,g+=u+7>>3;else if(D=="o21")c.length>2&&!d&&(h=c.shift()+o.nominalWidthX,d=!0),y+=c.pop(),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,y),f=!0;else if(D=="o22")c.length>1&&!d&&(h=c.shift()+o.nominalWidthX,d=!0),v+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,v,y),f=!0;else if(D=="o25"){for(;c.length>6;)v+=c.shift(),y+=c.shift(),e.U.P.lineTo(l,v,y);m=v+c.shift(),p=y+c.shift(),b=m+c.shift(),x=p+c.shift(),v=b+c.shift(),y=x+c.shift(),e.U.P.curveTo(l,m,p,b,x,v,y)}else if(D=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)m=v,p=y+c.shift(),v=b=m+c.shift(),y=(x=p+c.shift())+c.shift(),e.U.P.curveTo(l,m,p,b,x,v,y);else if(D=="o27")for(c.length%2&&(y+=c.shift());c.length>0;)p=y,b=(m=v+c.shift())+c.shift(),x=p+c.shift(),v=b+c.shift(),y=x,e.U.P.curveTo(l,m,p,b,x,v,y);else if(D=="o10"||D=="o29"){var $=D=="o10"?o:s;if(c.length==0)console.debug("error: empty stack");else{var xe=c.pop(),G=$.Subrs[xe+$.Bias];i.x=v,i.y=y,i.nStems=u,i.haveWidth=d,i.width=h,i.open=f,e.U._drawCFF(G,i,s,o,l),v=i.x,y=i.y,u=i.nStems,d=i.haveWidth,h=i.width,f=i.open}}else if(D=="o30"||D=="o31"){var ce=c.length,ye=(k=0,D=="o31");for(k+=ce-(C=-3&ce);k<C;)ye?(p=y,b=(m=v+c.shift())+c.shift(),y=(x=p+c.shift())+c.shift(),C-k==5?(v=b+c.shift(),k++):v=b,ye=!1):(m=v,p=y+c.shift(),b=m+c.shift(),x=p+c.shift(),v=b+c.shift(),C-k==5?(y=x+c.shift(),k++):y=x,ye=!0),e.U.P.curveTo(l,m,p,b,x,v,y),k+=4}else{if((D+"").charAt(0)=="o")throw console.debug("Unknown operation: "+D,n),D;c.push(D)}}}i.x=v,i.y=y,i.nStems=u,i.haveWidth=d,i.width=h,i.open=f};var t=e,r={Typr:t};return a.Typr=t,a.default=r,Object.defineProperty(a,"__esModule",{value:!0}),a}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function q0(){return function(a){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),s=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(D,C){for(var I=new t(31),N=0;N<31;++N)I[N]=C+=1<<D[N-1];var U=new r(I[30]);for(N=1;N<30;++N)for(var k=I[N];k<I[N+1];++k)U[k]=k-I[N]<<5|N;return[I,U]},l=o(n,2),c=l[0],u=l[1];c[28]=258,u[258]=28;for(var d=o(i,0)[0],h=new t(32768),f=0;f<32768;++f){var g=(43690&f)>>>1|(21845&f)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,h[f]=((65280&g)>>>8|(255&g)<<8)>>>1}var v=function(D,C,I){for(var N=D.length,U=0,k=new t(C);U<N;++U)++k[D[U]-1];var Q,ae=new t(C);for(U=0;U<C;++U)ae[U]=ae[U-1]+k[U-1]<<1;if(I){Q=new t(1<<C);var ve=15-C;for(U=0;U<N;++U)if(D[U])for(var Z=U<<4|D[U],fe=C-D[U],X=ae[D[U]-1]++<<fe,$=X|(1<<fe)-1;X<=$;++X)Q[h[X]>>>ve]=Z}else for(Q=new t(N),U=0;U<N;++U)D[U]&&(Q[U]=h[ae[D[U]-1]++]>>>15-D[U]);return Q},y=new e(288);for(f=0;f<144;++f)y[f]=8;for(f=144;f<256;++f)y[f]=9;for(f=256;f<280;++f)y[f]=7;for(f=280;f<288;++f)y[f]=8;var m=new e(32);for(f=0;f<32;++f)m[f]=5;var p=v(y,9,1),b=v(m,5,1),x=function(D){for(var C=D[0],I=1;I<D.length;++I)D[I]>C&&(C=D[I]);return C},M=function(D,C,I){var N=C/8|0;return(D[N]|D[N+1]<<8)>>(7&C)&I},S=function(D,C){var I=C/8|0;return(D[I]|D[I+1]<<8|D[I+2]<<16)>>(7&C)},_=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(D,C,I){var N=new Error(C||_[D]);if(N.code=D,Error.captureStackTrace&&Error.captureStackTrace(N,E),!I)throw N;return N},B=function(D,C,I){var N=D.length;if(!N||I&&!I.l&&N<5)return C||new e(0);var U=!C||I,k=!I||I.i;I||(I={}),C||(C=new e(3*N));var Q,ae=function(Pe){var Ee=C.length;if(Pe>Ee){var ke=new e(Math.max(2*Ee,Pe));ke.set(C),C=ke}},ve=I.f||0,Z=I.p||0,fe=I.b||0,X=I.l,$=I.d,xe=I.m,G=I.n,ce=8*N;do{if(!X){I.f=ve=M(D,Z,1);var ye=M(D,Z+1,3);if(Z+=3,!ye){var pe=D[(Y=((Q=Z)/8|0)+(7&Q&&1)+4)-4]|D[Y-3]<<8,ue=Y+pe;if(ue>N){k&&E(0);break}U&&ae(fe+pe),C.set(D.subarray(Y,ue),fe),I.b=fe+=pe,I.p=Z=8*ue;continue}if(ye==1)X=p,$=b,xe=9,G=5;else if(ye==2){var me=M(D,Z,31)+257,j=M(D,Z+10,15)+4,te=me+M(D,Z+5,31)+1;Z+=14;for(var re=new e(te),be=new e(19),he=0;he<j;++he)be[s[he]]=M(D,Z+3*he,7);Z+=3*j;var A=x(be),w=(1<<A)-1,V=v(be,A,1);for(he=0;he<te;){var Y,O=V[M(D,Z,w)];if(Z+=15&O,(Y=O>>>4)<16)re[he++]=Y;else{var se=0,ee=0;for(Y==16?(ee=3+M(D,Z,3),Z+=2,se=re[he-1]):Y==17?(ee=3+M(D,Z,7),Z+=3):Y==18&&(ee=11+M(D,Z,127),Z+=7);ee--;)re[he++]=se}}var ne=re.subarray(0,me),ie=re.subarray(me);xe=x(ne),G=x(ie),X=v(ne,xe,1),$=v(ie,G,1)}else E(1);if(Z>ce){k&&E(0);break}}U&&ae(fe+131072);for(var de=(1<<xe)-1,P=(1<<G)-1,J=Z;;J=Z){var q=(se=X[S(D,Z)&de])>>>4;if((Z+=15&se)>ce){k&&E(0);break}if(se||E(2),q<256)C[fe++]=q;else{if(q==256){J=Z,X=null;break}var oe=q-254;if(q>264){var ge=n[he=q-257];oe=M(D,Z,(1<<ge)-1)+c[he],Z+=ge}var Te=$[S(D,Z)&P],De=Te>>>4;if(Te||E(3),Z+=15&Te,ie=d[De],De>3&&(ge=i[De],ie+=S(D,Z)&(1<<ge)-1,Z+=ge),Z>ce){k&&E(0);break}U&&ae(fe+131072);for(var Me=fe+oe;fe<Me;fe+=4)C[fe]=C[fe-ie],C[fe+1]=C[fe+1-ie],C[fe+2]=C[fe+2-ie],C[fe+3]=C[fe+3-ie];fe=Me}}I.l=X,I.p=J,I.b=fe,X&&(ve=1,I.m=xe,I.d=$,I.n=G)}while(!ve);return fe==C.length?C:function(Pe,Ee,ke){(Ee==null||Ee<0)&&(Ee=0),(ke==null||ke>Pe.length)&&(ke=Pe.length);var rt=new(Pe instanceof t?t:Pe instanceof r?r:e)(ke-Ee);return rt.set(Pe.subarray(Ee,ke)),rt}(C,0,fe)},F=new e(0),L=typeof TextDecoder!="undefined"&&new TextDecoder;try{L.decode(F,{stream:!0})}catch{}return a.convert_streams=function(D){var C=new DataView(D),I=0;function N(){var me=C.getUint16(I);return I+=2,me}function U(){var me=C.getUint32(I);return I+=4,me}function k(me){pe.setUint16(ue,me),ue+=2}function Q(me){pe.setUint32(ue,me),ue+=4}for(var ae={signature:U(),flavor:U(),length:U(),numTables:N(),reserved:N(),totalSfntSize:U(),majorVersion:N(),minorVersion:N(),metaOffset:U(),metaLength:U(),metaOrigLength:U(),privOffset:U(),privLength:U()},ve=0;Math.pow(2,ve)<=ae.numTables;)ve++;ve--;for(var Z=16*Math.pow(2,ve),fe=16*ae.numTables-Z,X=12,$=[],xe=0;xe<ae.numTables;xe++)$.push({tag:U(),offset:U(),compLength:U(),origLength:U(),origChecksum:U()}),X+=16;var G,ce=new Uint8Array(12+16*$.length+$.reduce(function(me,j){return me+j.origLength+4},0)),ye=ce.buffer,pe=new DataView(ye),ue=0;return Q(ae.flavor),k(ae.numTables),k(Z),k(ve),k(fe),$.forEach(function(me){Q(me.tag),Q(me.origChecksum),Q(X),Q(me.origLength),me.outOffset=X,(X+=me.origLength)%4!=0&&(X+=4-X%4)}),$.forEach(function(me){var j,te=D.slice(me.offset,me.offset+me.compLength);if(me.compLength!=me.origLength){var re=new Uint8Array(me.origLength);j=new Uint8Array(te,2),B(j,re)}else re=new Uint8Array(te);ce.set(re,me.outOffset);var be=0;(X=me.outOffset+me.origLength)%4!=0&&(be=4-X%4),ce.set(new Uint8Array(be).buffer,me.outOffset+me.origLength),G=X+be}),ye.slice(0,G)},Object.defineProperty(a,"__esModule",{value:!0}),a}({}).convert_streams}function Y0(a,e){const t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,s=4,o=8,l=16,c=32;let u;function d(x){if(!u){const M={R:i,L:n,D:s,C:l,U:c,T:o};u=new Map;for(let S in r){let _=0;r[S].split(",").forEach(E=>{let[B,F]=E.split("+");B=parseInt(B,36),F=F?parseInt(F,36):0,u.set(_+=B,M[S]);for(let L=F;L--;)u.set(++_,M[S])})}}return u.get(x)||c}const h=1,f=2,g=3,v=4,y=[null,"isol","init","fina","medi"];function m(x){const M=new Uint8Array(x.length);let S=c,_=h,E=-1;for(let B=0;B<x.length;B++){const F=x.codePointAt(B);let L=d(F)|0,D=h;L&o||(S&(n|s|l)?L&(i|s|l)?(D=g,(_===h||_===g)&&M[E]++):L&(n|c)&&(_===f||_===v)&&M[E]--:S&(i|c)&&(_===f||_===v)&&M[E]--,_=M[B]=D,S=L,E=B,F>65535&&B++)}return M}function p(x,M){const S=[];for(let E=0;E<M.length;E++){const B=M.codePointAt(E);B>65535&&E++,S.push(a.U.codeToGlyph(x,B))}const _=x.GSUB;if(_){const{lookupList:E,featureList:B}=_;let F;const L=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws)$/,D=[];B.forEach(C=>{if(L.test(C.tag))for(let I=0;I<C.tab.length;I++){if(D[C.tab[I]])continue;D[C.tab[I]]=!0;const N=E[C.tab[I]],U=/^(isol|init|fina|medi)$/.test(C.tag);U&&!F&&(F=m(M));for(let k=0;k<S.length;k++)(!F||!U||y[F[k]]===C.tag)&&a.U._applySubs(S,k,N,E)}})}return S}function b(x){const M=Object.create(null),S={unitsPerEm:x.head.unitsPerEm,ascender:x.hhea.ascender,descender:x.hhea.descender,forEachGlyph(_,E,B,F){let L=0;const D=1/S.unitsPerEm*E,C=p(x,_);let I=0,N=-1;return C.forEach((U,k)=>{if(U!==-1){let Q=M[U];if(!Q){const{cmds:ae,crds:ve}=a.U.glyphToPath(x,U);let Z="",fe=0;for(let ce=0,ye=ae.length;ce<ye;ce++){const pe=t[ae[ce]];Z+=ae[ce];for(let ue=1;ue<=pe;ue++)Z+=(ue>1?",":"")+ve[fe++]}let X,$,xe,G;if(ve.length){X=$=1/0,xe=G=-1/0;for(let ce=0,ye=ve.length;ce<ye;ce+=2){let pe=ve[ce],ue=ve[ce+1];pe<X&&(X=pe),ue<$&&($=ue),pe>xe&&(xe=pe),ue>G&&(G=ue)}}else X=xe=$=G=0;Q=M[U]={index:U,advanceWidth:x.hmtx.aWidth[U],xMin:X,yMin:$,xMax:xe,yMax:G,path:Z,pathCommandCount:ae.length}}N!==-1&&(L+=a.U.getPairAdjustment(x,N,U)*D),F.call(null,Q,L,I),Q.advanceWidth&&(L+=Q.advanceWidth*D),B&&(L+=B*E),N=U}I+=_.codePointAt(I)>65535?2:1}),L}};return S}return function(M){const S=new Uint8Array(M,0,4),_=a._bin.readASCII(S,0,4);if(_==="wOFF")M=e(M);else if(_==="wOF2")throw new Error("woff2 fonts not supported");return b(a.parse(M)[0])}}const j0=Ni({name:"Typr Font Parser",dependencies:[X0,q0,Y0],init(a,e,t){const r=a(),n=e();return t(r,n)}}),Yn={defaultFontURL:"https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxM.woff",sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},Z0=new Se;function ki(){return(self.performance||Date).now()}const Eu=Object.create(null);function Au(a,e){a=J0({},a);const t=ki();if(a.font=Q0(a.font||Yn.defaultFontURL),a.text=""+a.text,a.sdfGlyphSize=a.sdfGlyphSize||Yn.sdfGlyphSize,a.colorRanges!=null){let l={};for(let c in a.colorRanges)if(a.colorRanges.hasOwnProperty(c)){let u=a.colorRanges[c];typeof u!="number"&&(u=Z0.set(u).getHex()),l[c]=u}a.colorRanges=l}Object.freeze(a);const{textureWidth:r,sdfExponent:n}=Yn,{sdfGlyphSize:i}=a;let s=`${a.font}@${i}`,o=Eu[s];o||(o=Eu[s]={count:0,glyphs:new Map,sdfTexture:new Dc(new Uint8Array(i*r*4),r,i,Mt,void 0,void 0,void 0,void 0,Dt,Dt)},o.sdfTexture.font=a.font),ex(a).then(l=>{const{glyphIds:c,glyphPositions:u,fontSize:d,unitsPerEm:h,timings:f}=l,g=[],v=new Float32Array(c.length*4),y=d/h;let m=0,p=0;const b=ki();c.forEach((M,S)=>{let _=o.glyphs.get(M);if(!_){const{path:L,pathBounds:D}=l.glyphData[M],C=Math.max(D[2]-D[0],D[3]-D[1])/i*(Yn.sdfMargin*i+.5),I=o.count++,N=[D[0]-C,D[1]-C,D[2]+C,D[3]+C];o.glyphs.set(M,_={path:L,atlasIndex:I,sdfViewBox:N}),g.push(_)}const{sdfViewBox:E}=_,B=u[p++],F=u[p++];v[m++]=B+E[0]*y,v[m++]=F+E[1]*y,v[m++]=B+E[2]*y,v[m++]=F+E[3]*y,c[S]=_.atlasIndex}),f.quads=(f.quads||0)+(ki()-b);const x=ki();f.sdf={},Bi.all(g.map(({path:M,atlasIndex:S,sdfViewBox:_})=>{const E=Math.max(_[2]-_[0],_[3]-_[1]);return $0(i,i,M,_,E,Yn.sdfExponent).then(({textureData:B,timing:F})=>(f.sdf[S]=F,{atlasIndex:S,textureData:B,timing:F}))})).then(M=>{M.length&&(M.forEach(({atlasIndex:S,textureData:_,timing:E})=>{const B=o.sdfTexture.image;for(;B.data.length<(S+1)*i*i;){const C=new Uint8Array(B.data.length*2);C.set(B.data),B.data=C,B.height*=2}const F=Math.floor(S/4),L=B.width/i,D=Math.floor(F/L)*B.width*i*4+F%L*i*4+S%4;for(let C=0;C<i;C++){const I=C*i,N=D+C*B.width*4;for(let U=0;U<i;U++)B.data[N+U*4]=_[I+U]}}),o.sdfTexture.needsUpdate=!0),f.sdfTotal=ki()-x,f.total=ki()-t,e(Object.freeze({parameters:a,sdfTexture:o.sdfTexture,sdfGlyphSize:i,sdfExponent:n,glyphBounds:v,glyphAtlasIndices:c,glyphColors:l.glyphColors,caretPositions:l.caretPositions,caretHeight:l.caretHeight,chunkedBounds:l.chunkedBounds,ascender:l.ascender,descender:l.descender,lineHeight:l.lineHeight,topBaseline:l.topBaseline,blockBounds:l.blockBounds,visibleBounds:l.visibleBounds,timings:l.timings,get totalBounds(){return console.log("totalBounds deprecated, use blockBounds instead"),l.blockBounds},get totalBlockSize(){console.log("totalBlockSize deprecated, use blockBounds instead");const[S,_,E,B]=l.blockBounds;return[E-S,B-_]}}))})})}function cx({font:a,characters:e,sdfGlyphSize:t},r){let n=Array.isArray(e)?e.join(`
`):""+e;Au({font:a,sdfGlyphSize:t,text:n},r)}function J0(a,e){for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t]);return a}let Os;function Q0(a){return Os||(Os=typeof document=="undefined"?{}:document.createElement("a")),Os.href=a,Os.href}const K0=Ni({name:"Typesetter",dependencies:[Yn,j0,H0,F0],init(a,e,t,r){const{defaultFontURL:n}=a;return t(e,r(),{defaultFontURL:n})}}),$0=function(){const a=4,e=2e3,t={};let r=0;return function(...n){const i="TroikaTextSDFGenerator_"+r++%a;let s=t[i];return s||(s=t[i]={workerModule:Ni({name:i,workerId:i,dependencies:[Yn,W0,V0],init(o,l,c){const{sdfExponent:u,sdfMargin:d}=o;return c(l,{sdfExponent:u,sdfMargin:d})},getTransferables(o){return[o.textureData.buffer]}}),requests:0,idleTimer:null}),s.requests++,clearTimeout(s.idleTimer),s.workerModule(...n).then(o=>(--s.requests==0&&(s.idleTimer=setTimeout(()=>{P0(i)},e)),o))}}(),ex=Ni({name:"Typesetter",dependencies:[K0,I0],init(a,e){return function(t){const r=new e;return a.typeset(t,r.resolve),r}},getTransferables(a){const e=[a.glyphPositions.buffer,a.glyphIds.buffer];return a.caretPositions&&e.push(a.caretPositions.buffer),e}}),tx=(()=>{const a={};function e(l){let c=a[l];return c||(c=a[l]=new bi(1,1,l,l).translate(.5,.5,0)),c}new R;const t="aTroikaGlyphBounds",r="aTroikaGlyphIndex",n="aTroikaGlyphColor";class i extends mu{constructor(){super();this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Vn,this.boundingBox=new Ht}computeBoundingSphere(){}computeBoundingBox(){}set detail(c){if(c!==this._detail){this._detail=c,(typeof c!="number"||c<1)&&(c=1);let u=e(c);["position","normal","uv"].forEach(d=>{this.attributes[d]=u.attributes[d].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(c){c!==this._curveRadius&&(this._curveRadius=c,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(c,u,d,h,f){s(this,t,c,4),s(this,r,u,1),s(this,n,f,3),this._blockBounds=d,this._chunkedBounds=h,o(this,u.length),this._updateBounds()}_updateBounds(){const c=this._blockBounds;if(c){const{curveRadius:u,boundingBox:d}=this;if(u){const{PI:h,floor:f,min:g,max:v,sin:y,cos:m}=Math,p=h/2,b=h*2,x=Math.abs(u),M=c[0]/x,S=c[2]/x,_=f((M+p)/b)!==f((S+p)/b)?-x:g(y(M)*x,y(S)*x),E=f((M-p)/b)!==f((S-p)/b)?x:v(y(M)*x,y(S)*x),B=f((M+h)/b)!==f((S+h)/b)?x*2:v(x-m(M)*x,x-m(S)*x);d.min.set(_,c[1],u<0?-B:0),d.max.set(E,c[3],u<0?0:B)}else d.min.set(c[0],c[1],0),d.max.set(c[2],c[3],0);d.getBoundingSphere(this.boundingSphere)}}applyClipRect(c){let u=this.getAttribute(r).count,d=this._chunkedBounds;if(d)for(let h=d.length;h--;){u=d[h].end;let f=d[h].rect;if(f[1]<c.w&&f[3]>c.y&&f[0]<c.z&&f[2]>c.x)break}o(this,u)}}i.prototype.setAttribute||(i.prototype.setAttribute=function(l,c){return this.attributes[l]=c,this});function s(l,c,u,d){const h=l.getAttribute(c);u?h&&h.array.length===u.length?(h.array.set(u),h.needsUpdate=!0):(l.setAttribute(c,new ws(u,d)),delete l._maxInstanceCount,l.dispose()):h&&l.deleteAttribute(c)}function o(l,c){l[l.hasOwnProperty("instanceCount")?"instanceCount":"maxInstancedCount"]=c}return i})(),nx=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,ix=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,rx=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of encoding in SDFGenerator.js
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,sx=`
float aaDist = troikaGetAADist();
float distance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(distance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  distance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function ax(a){const e=To(a,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new le},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new He(0,0,0,0)},uTroikaClipRect:{value:new He(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new le},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Se},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new pt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:nx,vertexTransform:ix,fragmentDefs:rx,fragmentColorTransform:sx,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(bu,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const ux=(()=>{const a=new rs({color:16777215,side:Bn,transparent:!0}),e=8421504,t=new Ce,r=new R,n=new R,i=[],s=new R,o="+x+y";function l(m){return Array.isArray(m)?m[0]:m}let c=()=>{const m=new xt(new bi(1,1),a);return c=()=>m,m},u=()=>{const m=new xt(new bi(1,1,32,1),a);return u=()=>m,m};const d={type:"syncstart"},h={type:"synccomplete"},f=["font","fontSize","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],g=f.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class v extends xt{constructor(){const p=new tx;super(p,null);this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.fontSize=.1,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=e,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=o,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.debugSDF=!1}sync(p){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(p):(this._isSyncing=!0,this.dispatchEvent(d),Au({text:this.text,font:this.font,fontSize:this.fontSize||.1,letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize},b=>{this._isSyncing=!1,this._textRenderInfo=b,this.geometry.updateGlyphs(b.glyphBounds,b.glyphAtlasIndices,b.blockBounds,b.chunkedBounds,b.glyphColors);const x=this._queuedSyncs;x&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{x.forEach(M=>M&&M())})),this.dispatchEvent(h),p&&p()})))}onBeforeRender(p,b,x,M,S,_){this.sync(),S.isTroikaTextMaterial&&this._prepareForRender(S)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}get material(){let p=this._derivedMaterial;const b=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=a.clone());if((!p||p.baseMaterial!==b)&&(p=this._derivedMaterial=ax(b),b.addEventListener("dispose",function x(){b.removeEventListener("dispose",x),p.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let x=p._outlineMtl;return x||(x=p._outlineMtl=Object.create(p,{id:{value:p.id+.1}}),x.isTextOutlineMaterial=!0,x.depthWrite=!1,x.map=null,p.addEventListener("dispose",function M(){p.removeEventListener("dispose",M),x.dispose()})),[x,p]}else return p}set material(p){p&&p.isTroikaTextMaterial?(this._derivedMaterial=p,this._baseMaterial=p.baseMaterial):this._baseMaterial=p}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(p){this.geometry.detail=p}get curveRadius(){return this.geometry.curveRadius}set curveRadius(p){this.geometry.curveRadius=p}get customDepthMaterial(){return l(this.material).getDepthMaterial()}get customDistanceMaterial(){return l(this.material).getDistanceMaterial()}_prepareForRender(p){const b=p.isTextOutlineMaterial,x=p.uniforms,M=this.textRenderInfo;if(M){const{sdfTexture:E,blockBounds:B}=M;x.uTroikaSDFTexture.value=E,x.uTroikaSDFTextureSize.value.set(E.image.width,E.image.height),x.uTroikaSDFGlyphSize.value=M.sdfGlyphSize,x.uTroikaSDFExponent.value=M.sdfExponent,x.uTroikaTotalBounds.value.fromArray(B),x.uTroikaUseGlyphColors.value=!b&&!!M.glyphColors;let F=0,L=0,D=0,C,I,N,U=0,k=0;if(b){let{outlineWidth:ae,outlineOffsetX:ve,outlineOffsetY:Z,outlineBlur:fe,outlineOpacity:X}=this;F=this._parsePercent(ae)||0,L=Math.max(0,this._parsePercent(fe)||0),C=X,U=this._parsePercent(ve)||0,k=this._parsePercent(Z)||0}else D=Math.max(0,this._parsePercent(this.strokeWidth)||0),D&&(N=this.strokeColor,x.uTroikaStrokeColor.value.set(N==null?e:N),I=this.strokeOpacity,I==null&&(I=1)),C=this.fillOpacity;x.uTroikaDistanceOffset.value=F,x.uTroikaPositionOffset.value.set(U,k),x.uTroikaBlurRadius.value=L,x.uTroikaStrokeWidth.value=D,x.uTroikaStrokeOpacity.value=I,x.uTroikaFillOpacity.value=C==null?1:C,x.uTroikaCurveRadius.value=this.curveRadius||0;let Q=this.clipRect;if(Q&&Array.isArray(Q)&&Q.length===4)x.uTroikaClipRect.value.fromArray(Q);else{const ae=(this.fontSize||.1)*100;x.uTroikaClipRect.value.set(B[0]-ae,B[1]-ae,B[2]+ae,B[3]+ae)}this.geometry.applyClipRect(x.uTroikaClipRect.value)}x.uTroikaSDFDebug.value=!!this.debugSDF,p.polygonOffset=!!this.depthOffset,p.polygonOffsetFactor=p.polygonOffsetUnits=this.depthOffset||0;const S=b?this.outlineColor||0:this.color;if(S==null)delete p.color;else{const E=p.hasOwnProperty("color")?p.color:p.color=new Se;(S!==E._input||typeof S=="object")&&E.set(E._input=S)}let _=this.orientation||o;if(_!==p._orientation){let E=x.uTroikaOrient.value;_=_.replace(/[^-+xyz]/g,"");let B=_!==o&&_.match(/^([-+])([xyz])([-+])([xyz])$/);if(B){let[,F,L,D,C]=B;r.set(0,0,0)[L]=F==="-"?1:-1,n.set(0,0,0)[C]=D==="-"?-1:1,t.lookAt(s,r.cross(n),n),E.setFromMatrix4(t)}else E.identity();p._orientation=_}}_parsePercent(p){if(typeof p=="string"){let b=p.match(/^(-?[\d.]+)%$/),x=b?parseFloat(b[1]):NaN;p=(isNaN(x)?0:x/100)*this.fontSize}return p}localPositionToTextCoords(p,b=new le){b.copy(p);const x=this.curveRadius;return x&&(b.x=Math.atan2(p.x,Math.abs(x)-Math.abs(p.z))*Math.abs(x)),b}worldPositionToTextCoords(p,b=new le){return r.copy(p),this.localPositionToTextCoords(this.worldToLocal(r),b)}raycast(p,b){const{textRenderInfo:x,curveRadius:M}=this;if(x){const S=x.blockBounds,_=M?u():c(),E=_.geometry,{position:B,uv:F}=E.attributes;for(let L=0;L<F.count;L++){let D=S[0]+F.getX(L)*(S[2]-S[0]);const C=S[1]+F.getY(L)*(S[3]-S[1]);let I=0;M&&(I=M-Math.cos(D/M)*M,D=Math.sin(D/M)*M),B.setXYZ(L,D,C,I)}E.boundingSphere=this.geometry.boundingSphere,E.boundingBox=this.geometry.boundingBox,_.matrixWorld=this.matrixWorld,_.material.side=this.material.side,i.length=0,_.raycast(p,i);for(let L=0;L<i.length;L++)i[L].object=this,b.push(i[L])}}copy(p){const b=this.geometry;return super.copy(p),this.geometry=b,g.forEach(x=>{this[x]=p[x]}),this}clone(){return new this.constructor().copy(this)}}f.forEach(m=>{const p="_private_"+m;Object.defineProperty(v.prototype,m,{get(){return this[p]},set(b){b!==this[p]&&(this[p]=b,this._needsSync=!0)}})});let y=!1;return Object.defineProperty(v.prototype,"anchor",{get(){return this._deprecated_anchor},set(m){this._deprecated_anchor=m,y||(console.warn("TextMesh: `anchor` has been deprecated; use `anchorX` and `anchorY` instead."),y=!0),Array.isArray(m)?(this.anchorX=`${(+m[0]||0)*100}%`,this.anchorY=`${(+m[1]||0)*100}%`):this.anchorX=this.anchorY=0}}),v})();export{e0 as D,tu as I,nu as M,Ft as P,lx as R,Mc as S,ux as T,qe as W,Jv as a,vt as b,xt as c,cx as p};
