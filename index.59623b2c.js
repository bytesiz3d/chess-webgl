function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=i.parcelRequire60a1;null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},i.parcelRequire60a1=s),s.register("lYidB",(function(t,i){var r,a;e(t.exports,"register",(()=>a),(e=>a=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var s={};a=function(e){for(var t=Object.keys(e),i=0;i<t.length;i++)s[t[i]]=e[t[i]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("lYidB").register(JSON.parse('{"fk6R8":"index.59623b2c.js","bxDSp":"board-white.afa74973.png","fk2Wh":"board-black.7ca8e89e.png","e3rII":"chess-pieces.de908b13.png","38Img":"dot.7f3be977.png","fyaqV":"outline.f9ed6cbb.png"}'));var n;n=new URL(s("lYidB").resolve("bxDSp"),import.meta.url).toString();var o;o=new URL(s("lYidB").resolve("fk2Wh"),import.meta.url).toString();var h;h=new URL(s("lYidB").resolve("e3rII"),import.meta.url).toString();var l;l=new URL(s("lYidB").resolve("38Img"),import.meta.url).toString();var c;c=new URL(s("lYidB").resolve("fyaqV"),import.meta.url).toString();class d{static async compile(e,t,i){const r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(alert(`An error occurred compiling the shaders: ${e.getShaderInfoLog(r)}`),e.deleteShader(r),null)}static async create_program(e,t){const i=await d.compile(e,e.VERTEX_SHADER,t.vertex),r=await d.compile(e,e.FRAGMENT_SHADER,t.fragment),a=e.createProgram();return e.attachShader(a,i),e.attachShader(a,r),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)?a:(alert(`Unable to initialize the shader program: ${e.getProgramInfoLog(a)}`),null)}}s.register("84Fbv",(function(e,t){e.exports="#version 300 es\n#define GLSLIFY 1\nlayout(location=0) in vec2 position;\nlayout(location=1) in vec2 texture_uv;\n\nuniform mat4 model;\nuniform mat4 view;\nuniform mat4 projection;\n\nout vec2 texture_uvs;\n\nvoid main() {\n  texture_uvs = texture_uv;\n\n  vec4 pos = vec4(position, 0.0f, 1.0f);\n  gl_Position = projection * view * model * pos;\n}"})),s.register("4mkTP",(function(e,t){e.exports="#version 300 es\nprecision highp float;\n#define GLSLIFY 1\n\nin vec2 texture_uvs;\nuniform sampler2D texture_sampler;\n\nuniform float time;\nout vec4 color;\n\nvoid main() {\n  color = texture(texture_sampler, texture_uvs);\n}"}));const u={texture:{vertex:s("84Fbv"),fragment:s("4mkTP")}};class g{constructor(e,t){this.gl=e,this.vao=e.createVertexArray(),e.bindVertexArray(this.vao);const i={location:e.getAttribLocation(t,"position"),buffer:e.createBuffer(),data:new Float32Array([-.5,-.5,.5,-.5,.5,.5,-.5,.5])};e.bindBuffer(e.ARRAY_BUFFER,i.buffer),e.bufferData(e.ARRAY_BUFFER,i.data,e.STATIC_DRAW),e.enableVertexAttribArray(i.location),e.vertexAttribPointer(i.location,2,e.FLOAT,!1,0,0);const r={location:e.getAttribLocation(t,"texture_uv"),buffer:e.createBuffer(),data:new Uint32Array([0,1,1,1,1,0,0,0])};e.bindBuffer(e.ARRAY_BUFFER,r.buffer),e.bufferData(e.ARRAY_BUFFER,r.data,e.STATIC_DRAW),e.enableVertexAttribArray(r.location),e.vertexAttribPointer(r.location,2,e.UNSIGNED_INT,!1,0,0);const a={buffer:e.createBuffer(),data:new Int32Array([0,1,2,2,3,0])};e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,a.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,a.data,e.STATIC_DRAW),this.count=a.data.length,this.type=e.UNSIGNED_INT}draw(){this.gl.bindVertexArray(this.vao),this.gl.drawElements(this.gl.TRIANGLES,this.count,this.type,0)}}class f{static uploadTextureImage(e,t){const i=document.createElement("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d"),a=t.element;r.drawImage(a,t.x,t.y,t.width,t.height,0,0,t.width,t.height),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t.width,t.height,0,e.RGBA,e.UNSIGNED_BYTE,i)}constructor(e,t){this.gl=e,this.texture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.texture),t?f.uploadTextureImage(e,t):e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,255,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)}bind(e,t){this.gl.activeTexture(this.gl.TEXTURE0+e),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture),this.gl.uniform1i(t,e)}}class m{static scale(e,t=m.identity){const i=t.map((t=>e*t));return i[3]=i[7]=i[11]=0,i[15]=1,i}static orthographic(e){let{left:t,right:i,top:r,bottom:a,near:s,far:n}=e;return new Float32Array([2/(i-t),0,0,(t+i)/(t-i),0,2/(r-a),0,(a+r)/(a-r),0,0,2/(s-n),(s+n)/(s-n),0,0,0,1])}static translate(e,t=m.identity){let i=t;return i[3]=e.x,i[7]=e.y,i}static rotate(e,t=3){let i=Math.cos(e),r=Math.sin(e);switch(t){case 0:return new Float32Array([1,0,0,0,0,i,-r,0,0,r,r,0,0,0,0,1]);case 1:return new Float32Array([i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1]);case 2:return new Float32Array([i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1]);default:return this.identity}}}var p,b,w,_,k,v;m.identity=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]),(b=p||(p={}))[b.White=0]="White",b[b.Black=1]="Black",(_=w||(w={}))[_.King=0]="King",_[_.Queen=1]="Queen",_[_.Bishop=2]="Bishop",_[_.Knight=3]="Knight",_[_.Rook=4]="Rook",_[_.Pawn=5]="Pawn",_[_.COUNT=6]="COUNT",(v=k||(k={}))[v.blank=0]="blank",v[v.dot=1]="dot",v[v.outline=2]="outline";class E{get i(){return E.coordinatesToIndex(this.file,this.rank)}constructor(e=""){""==e&&(e="a1"),this.fromString(e)}static coordinatesToString(e,t){let i="a".charCodeAt(0)+e,r=1+t;return`${String.fromCharCode(i)}${r}`}static stringToIndex(e){let t=e[0].charCodeAt(0)-"a".charCodeAt(0),i=e[1].charCodeAt(0)-"1".charCodeAt(0);return E.coordinatesToIndex(t,i)}static coordinatesToIndex(e,t){return 8*e+t}fromCoordinates(e,t){this.file=e,this.rank=t}fromString(e){this.file=e[0].charCodeAt(0)-"a".charCodeAt(0),this.rank=e[1].charCodeAt(0)-"1".charCodeAt(0)}toString(){return E.coordinatesToString(this.file,this.rank)}compare(e){return!!e&&(this.file==e.file&&this.rank==e.rank)}coincideLaterally(e){let t=!1;return t=t||this.file==e.file,t=t||this.rank==e.rank,t}static mainDiagonal(e){return e.rank-e.file}static secDiagonal(e){return e.rank+e.file}coincideDiagonally(e){let t=!1;return t=t||E.mainDiagonal(this)==E.mainDiagonal(e),t=t||E.secDiagonal(this)==E.secDiagonal(e),t}}class A{constructor(e,t,i){this.square=new E(e),this.color=t,this.type=i}isPseudoLegal(e){switch(this.type){case w.King:return this.processKing(e);case w.Queen:return this.processQueen(e);case w.Knight:return this.processKnight(e);case w.Bishop:return this.processBishop(e);case w.Rook:return this.processRook(e);case w.Pawn:return this.processPawn(e)}return!1}processKing(e){const t=e=>Math.abs(this.square.file-e.file);return!((e=>Math.abs(this.square.rank-e.rank))(e)>1)&&(t(e)<=1||(this.color==p.White&&0==this.square.rank&&2==t(e)||this.color==p.Black&&7==this.square.rank&&2==t(e)))}processQueen(e){return this.square.coincideDiagonally(e)||this.square.coincideLaterally(e)}processKnight(e){const t=[1,2,2,1,-1,-2,-2,-1],i=[2,1,-1,-2,-2,-1,1,2];let r=!1;for(let a=0;a<t.length;a++)if(r=e.rank-this.square.rank==t[a],r=r&&e.file-this.square.file==i[a],r)return!0;return!1}processBishop(e){return this.square.coincideDiagonally(e)}processRook(e){return this.square.coincideLaterally(e)}processPawn(e){let t=this.color==p.White?1:-1,i=this.color==p.White?1:6;let r=!1;return r=r||(e=>this.square.rank==i&&e.rank==i+2*t)(e)&&!(e=>1==Math.abs(e.file-this.square.file))(e),r=r||(e=>e.rank-this.square.rank==t)(e),r&&(e=>Math.abs(e.file-this.square.file)<=1)(e)}toString(){return`[${this.square}] ${p[this.color]} ${w[this.type]}`}}class x{findSquare(e,t){const i=x.getMinimumDimension();let r=Math.floor(8*t/i);r=this.turn==p.White?7-r:r;let a=Math.floor(8*e/i);a=this.turn==p.Black?7-a:a;const s=new E;return s.fromCoordinates(a,r),s}prepareSquare(e,t=null){let i={x:-4*x.SQUARE_SIZE,y:-4*x.SQUARE_SIZE};t?(i.x+=t.x,i.y+=t.y,i.y=-i.y):(i.x+=x.SQUARE_SIZE*(e.file+.5),i.y+=x.SQUARE_SIZE*(e.rank+.5),this.turn==p.Black&&(i.y=-i.y,i.x=-i.x));let r=m.scale(x.SQUARE_SIZE);return r=m.translate(i,r),r}drawBoard(e){this.matrices.model=m.scale(x.BOARD_SIZE),this.textures.board[this.turn].bind(0,this.uniforms.texture_sampler),this.gl.uniformMatrix4fv(this.uniforms.model,!0,this.matrices.model),this.square.draw(),e.forEach((e=>{switch(this.matrices.model=this.prepareSquare(e),e.augment){case k.dot:this.textures.dot.bind(0,this.uniforms.texture_sampler);break;case k.outline:this.textures.outline.bind(0,this.uniforms.texture_sampler);break;default:return}this.gl.uniformMatrix4fv(this.uniforms.model,!0,this.matrices.model),this.square.draw()}))}drawPiece(e,t){let i=this.held_piece&&e==this.held_piece?this.held_at:null;const r={file:t.file,rank:t.rank,augment:null};let a=this.prepareSquare(r,i);this.textures.pieces[e.color][e.type].bind(0,this.uniforms.texture_sampler),this.matrices.model=a,this.gl.uniformMatrix4fv(this.uniforms.model,!0,this.matrices.model),this.square.draw()}render(){this.dt=Date.now()-this.last_update,this.last_update=Date.now(),this.time_elapsed+=this.dt/1e3,this.gl.uniform1f(this.uniforms.time,this.time_elapsed),this.gl.clearColor(0,0,0,1),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.drawBoard(this.augments);for(let e of this.board)e&&this.held_piece!=e&&this.drawPiece(e,e.square);this.held_piece&&this.drawPiece(this.held_piece,this.held_piece.square),window.requestAnimationFrame((()=>this.render()))}async loadTextures(){const e=await x.loadImage(t(n)),i=await x.loadImage(t(o)),r=await x.loadImage(t(h)),a=await x.loadImage(t(l)),s=await x.loadImage(t(c));let d=[new Array(w.COUNT),new Array(w.COUNT)];const u=x.BOARD_SIZE/8;for(let e=0;e<2;e++)for(let t=0;t<w.COUNT;t++)d[e][t]={element:r,x:t*u,y:e*u,width:u,height:u};this.textures={board:[new f(this.gl,{element:e,x:0,y:0,width:e.width,height:e.height}),new f(this.gl,{element:i,x:0,y:0,width:i.width,height:i.height})],pieces:[d[p.White].map((e=>new f(this.gl,e))),d[p.Black].map((e=>new f(this.gl,e)))],dot:new f(this.gl,{element:a,x:0,y:0,width:a.width,height:a.height}),outline:new f(this.gl,{element:s,x:0,y:0,width:s.width,height:s.height})}}async init(){if(this.shader_program=await d.create_program(this.gl,u.texture),!this.shader_program)throw new Error("Failed to create shader program");this.gl.useProgram(this.shader_program),this.uniforms={projection:this.gl.getUniformLocation(this.shader_program,"projection"),texture_sampler:this.gl.getUniformLocation(this.shader_program,"texture_sampler"),model:this.gl.getUniformLocation(this.shader_program,"model"),view:this.gl.getUniformLocation(this.shader_program,"view"),time:this.gl.getUniformLocation(this.shader_program,"time")},this.matrices={model:m.identity,view:m.identity,projection:m.orthographic({left:-x.BOARD_SIZE/2,right:x.BOARD_SIZE/2,top:x.BOARD_SIZE/2,bottom:-x.BOARD_SIZE/2,near:0,far:1})},this.gl.uniformMatrix4fv(this.uniforms.model,!0,this.matrices.model),this.gl.uniformMatrix4fv(this.uniforms.view,!0,this.matrices.view),this.gl.uniformMatrix4fv(this.uniforms.projection,!0,this.matrices.projection),this.square=new g(this.gl,this.shader_program),await this.loadTextures()}resize(){const e=x.getMinimumDimension();this.gl.viewport(0,0,e,e),this.canvas.width=e,this.canvas.height=e}startRendering(){window.requestAnimationFrame((()=>this.render()))}static async loadImage(e){return new Promise(((t,i)=>{const r=new Image;r.src=e,r.onload=()=>t(r),r.onerror=()=>i(new Error("Failed to load image"))}))}static getMinimumDimension(){let e=window.innerWidth>0?window.innerWidth:screen.width,t=window.innerHeight>0?window.innerHeight:screen.height;return e*=.8,t*=.8,Math.min(e,t,x.BOARD_SIZE)}constructor(e,t){const i=e.getContext("webgl2",{preserveDrawingBuffer:!0,alpha:!0,antialias:!0,depth:!0,powerPreference:"high-performance",premultipliedAlpha:!1,stencil:!0});if(!i)return null;i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),i.enable(i.BLEND),this.gl=i,this.canvas=e,this.dt=this.time_elapsed=this.last_update=0,this.augments=[],this.board=t,this.resize()}}x.BOARD_SIZE=640,x.SQUARE_SIZE=80;const R=E.stringToIndex;var y,S;(S=y||(y={}))[S.a1=R("a1")]="a1",S[S.a2=R("a2")]="a2",S[S.a3=R("a3")]="a3",S[S.a4=R("a4")]="a4",S[S.a5=R("a5")]="a5",S[S.a6=R("a6")]="a6",S[S.a7=R("a7")]="a7",S[S.a8=R("a8")]="a8",S[S.b1=R("b1")]="b1",S[S.b2=R("b2")]="b2",S[S.b3=R("b3")]="b3",S[S.b4=R("b4")]="b4",S[S.b5=R("b5")]="b5",S[S.b6=R("b6")]="b6",S[S.b7=R("b7")]="b7",S[S.b8=R("b8")]="b8",S[S.c1=R("c1")]="c1",S[S.c2=R("c2")]="c2",S[S.c3=R("c3")]="c3",S[S.c4=R("c4")]="c4",S[S.c5=R("c5")]="c5",S[S.c6=R("c6")]="c6",S[S.c7=R("c7")]="c7",S[S.c8=R("c8")]="c8",S[S.d1=R("d1")]="d1",S[S.d2=R("d2")]="d2",S[S.d3=R("d3")]="d3",S[S.d4=R("d4")]="d4",S[S.d5=R("d5")]="d5",S[S.d6=R("d6")]="d6",S[S.d7=R("d7")]="d7",S[S.d8=R("d8")]="d8",S[S.e1=R("e1")]="e1",S[S.e2=R("e2")]="e2",S[S.e3=R("e3")]="e3",S[S.e4=R("e4")]="e4",S[S.e5=R("e5")]="e5",S[S.e6=R("e6")]="e6",S[S.e7=R("e7")]="e7",S[S.e8=R("e8")]="e8",S[S.f1=R("f1")]="f1",S[S.f2=R("f2")]="f2",S[S.f3=R("f3")]="f3",S[S.f4=R("f4")]="f4",S[S.f5=R("f5")]="f5",S[S.f6=R("f6")]="f6",S[S.f7=R("f7")]="f7",S[S.f8=R("f8")]="f8",S[S.g1=R("g1")]="g1",S[S.g2=R("g2")]="g2",S[S.g3=R("g3")]="g3",S[S.g4=R("g4")]="g4",S[S.g5=R("g5")]="g5",S[S.g6=R("g6")]="g6",S[S.g7=R("g7")]="g7",S[S.g8=R("g8")]="g8",S[S.h1=R("h1")]="h1",S[S.h2=R("h2")]="h2",S[S.h3=R("h3")]="h3",S[S.h4=R("h4")]="h4",S[S.h5=R("h5")]="h5",S[S.h6=R("h6")]="h6",S[S.h7=R("h7")]="h7",S[S.h8=R("h8")]="h8";var T,B,I=y;(B=T||(T={}))[B.main=0]="main",B[B.auxiliary=1]="auxiliary",B[B.secondary=2]="secondary",B[B.fourth=3]="fourth",B[B.fifth=4]="fifth";class P{constructor(){const e=document.querySelector("#main");this.canvas=e.querySelector("#glCanvas"),this.board=new Array(64),this.renderer=new x(this.canvas,this.board),this.just_advanced=null,this.king_has_moved=[!1,!1],this.pieces=[new Array(w.COUNT),new Array(w.COUNT)]}get king(){return this.pieces[this.renderer.turn][w.King][0]}getMoveDirection(e,t){let i=t.file-e.file;i/=0!=i?Math.abs(i):1;let r=t.rank-e.rank;return r/=0!=r?Math.abs(r):1,{file:i,rank:r}}getMoveMagnitude(e,t){let i=t.file-e.file,r=t.rank-e.rank;return{file:Math.abs(i),rank:Math.abs(r)}}getBlockingPiece(e,t,i){let r,a;const s=E.coordinatesToIndex;for(r=e.file+i.file,a=e.rank+i.rank;r!=t.file||a!=t.rank;r+=i.file,a+=i.rank)if(this.board[s(r,a)])return this.board[s(r,a)];return this.board[s(r,a)]}getRookInDirection(e,t){const[i,r]=this.pieces[e.color][w.Rook],{file:a}=this.getMoveDirection(e.square,r.square),{file:s}=this.getMoveDirection(e.square,t);return a==s?r:i}getAllLegalMoves(e){const t=[];for(let i=0;i<8;i++)for(let r=0;r<8;r++){const a=new E;a.fromCoordinates(i,r),a.compare(e.square)||e.isPseudoLegal(a)&&this.isStrictlyLegal(e,a)&&t.push(a)}return t}isBlocked(e,t,i){if(!e)return null;let r=this.getMoveDirection(t,i);switch(e.type){case w.Queen:return this.getBlockingPiece(t,i,r);case w.Rook:return r.file*r.rank==0?this.getBlockingPiece(t,i,r):null;case w.Bishop:return r.file*r.rank!=0?this.getBlockingPiece(t,i,r):null;default:return this.board[i.i]}}isLegalCastle(e,t){if(e.type!=w.King)return!0;if(this.getMoveMagnitude(e.square,t).file<2)return!0;if(this.king_has_moved[e.color])return!1;const i=this.getRookInDirection(e,t),r=this.isBlocked(i,i.square,e.square);return r&&r==e}isLegalPawnCapture(e,t){if(e.type!=w.Pawn)return!0;const i=this.board[t.i],r=this.getMoveDirection(e.square,t);if(i&&0==r.file)return!1;if(!i&&0==r.file)return!0;if(!i&&0!=r.file){const e=this.board[E.coordinatesToIndex(t.file,t.rank-r.rank)];return!!e&&e.square.compare(this.just_advanced)}return!!i}isInCheck(e){const t=this.pieces[1-this.renderer.turn];if(e&&e.isPseudoLegal(this.king.square)&&this.isStrictlyLegal(e,this.king.square))return!0;for(let i of t)if(i)for(let t of i)if(t&&t!=e&&t.isPseudoLegal(this.king.square)&&this.isStrictlyLegal(t,this.king.square))return!0;return!1}putsKingInCheck(e,t){const i=e.square,r=this.movePiece(e,t),a=this.isInCheck();return this.movePiece(e,i),r&&this.movePiece(r,t),a}isStrictlyLegal(e,t){const i=this.board[t.i];return(!i||i.color!=e.color)&&(this.isBlocked(e,e.square,t)==i&&(!!this.isLegalCastle(e,t)&&(!!this.isLegalPawnCapture(e,t)&&!this.putsKingInCheck(e,t))))}makeCastleMove(e,t){if(this.getMoveMagnitude(e.square,t).file<2)return;const i=this.getRookInDirection(e,t),r=this.getMoveDirection(e.square,t);let a=new E;a.fromCoordinates(e.square.file+r.file,e.square.rank),this.movePiece(i,a)}takeEnPeasant(e,t){const i=this.getMoveDirection(e.square,t);if(0==i.file)return;const r=this.renderer.turn==p.White&&5==t.rank,a=this.renderer.turn==p.Black&&1==t.rank;if(r||a){const e=E.coordinatesToIndex(t.file,t.rank-i.rank),r=this.board[e];r&&r.square.compare(this.just_advanced)&&(this.board[e]=null)}}makeMoveIfLegal(e,t){e&&!t.compare(e.square)&&this.legal.find((e=>t.compare(e)))&&(e.type==w.King&&(this.makeCastleMove(e,t),this.king_has_moved[this.renderer.turn]=!0),e.type==w.Pawn?(this.takeEnPeasant(e,t),this.just_advanced=t):this.just_advanced=null,this.movePiece(e,t),setTimeout((()=>this.verifyCheck(e)),225))}verifyCheck(e){this.renderer.turn=1-this.renderer.turn;const t=this.pieces[this.renderer.turn];if(this.isInCheck(e)){if(!t.some((e=>e.some((e=>this.getAllLegalMoves(e).length>0))))){const e=new Event("checkmate");document.dispatchEvent(e)}}}pickupPiece(e){const t=this.renderer.findSquare(e.offsetX,e.offsetY),i=this.board[t.i];if(i&&i.color==this.renderer.turn){if(this.legal=this.getAllLegalMoves(i),0==this.legal.length)return;this.renderer.augments=this.legal.map((e=>({file:e.file,rank:e.rank,augment:this.board[e.i]?k.outline:k.dot}))),this.renderer.held_piece=i,this.renderer.held_at.x=e.offsetX,this.renderer.held_at.y=e.offsetY}}movePiece(e,t){if(e.square){const t=e.square.i;this.board[t]=null}const i=this.board[t.i];return this.board[t.i]=e,e.square=t,i}dropPiece(){this.renderer.augments=[],this.legal=[],this.renderer.held_piece=void 0}placePieces(){const e=E.coordinatesToIndex;this.board[I.e1]=new A("e1",p.White,w.King),this.board[I.d1]=new A("d1",p.White,w.Queen),this.board[I.e8]=new A("e8",p.Black,w.King),this.board[I.d8]=new A("d8",p.Black,w.Queen),this.board[I.h1]=new A("h1",p.White,w.Rook),this.board[I.a1]=new A("a1",p.White,w.Rook),this.board[I.h8]=new A("h8",p.Black,w.Rook),this.board[I.a8]=new A("a8",p.Black,w.Rook),this.board[I.g1]=new A("g1",p.White,w.Knight),this.board[I.b1]=new A("b1",p.White,w.Knight),this.board[I.g8]=new A("g8",p.Black,w.Knight),this.board[I.b8]=new A("b8",p.Black,w.Knight),this.board[I.c1]=new A("c1",p.White,w.Bishop),this.board[I.f1]=new A("f1",p.White,w.Bishop),this.board[I.c8]=new A("c8",p.Black,w.Bishop),this.board[I.f8]=new A("f8",p.Black,w.Bishop),this.pieces[p.White][w.Pawn]=[],this.pieces[p.Black][w.Pawn]=[];for(let t=0;t<8;t++){let i=E.coordinatesToString(t,1);this.board[e(t,1)]=new A(i,p.White,w.Pawn),this.pieces[p.White][w.Pawn].push(this.board[e(t,1)]),i=E.coordinatesToString(t,6),this.board[e(t,6)]=new A(i,p.Black,w.Pawn),this.pieces[p.Black][w.Pawn].push(this.board[e(t,6)])}this.pieces[p.White][w.Queen]=[this.board[I.d1]],this.pieces[p.Black][w.Queen]=[this.board[I.d8]],this.pieces[p.White][w.King]=[this.board[I.e1]],this.pieces[p.Black][w.King]=[this.board[I.e8]],this.pieces[p.White][w.Rook]=[this.board[I.a1],this.board[I.h1]],this.pieces[p.Black][w.Rook]=[this.board[I.a8],this.board[I.h8]],this.pieces[p.White][w.Bishop]=[this.board[I.c1],this.board[I.f1]],this.pieces[p.Black][w.Bishop]=[this.board[I.c8],this.board[I.f8]],this.pieces[p.White][w.Knight]=[this.board[I.b1],this.board[I.g1]],this.pieces[p.Black][w.Knight]=[this.board[I.b8],this.board[I.g8]]}setEventHandlers(){this.renderer.held_piece=void 0,this.renderer.held_at={x:0,y:0},this.canvas.oncontextmenu=e=>e.preventDefault(),this.canvas.onmousedown=e=>{switch(e.button){case T.main:this.pickupPiece(e);break;case T.secondary:this.dropPiece()}},this.canvas.onmousemove=e=>{this.renderer.held_piece&&(this.renderer.held_at.x=e.offsetX,this.renderer.held_at.y=e.offsetY)},this.canvas.onmouseout=e=>{this.dropPiece()},this.canvas.onmouseup=e=>{const t=this.renderer.held_piece;if(!t)return;const i=this.renderer.findSquare(e.offsetX,e.offsetY);this.makeMoveIfLegal(t,i),this.dropPiece()},window.onresize=()=>this.renderer.resize(),document.addEventListener("checkmate",(()=>{alert("Checkmate!")}))}async init(){this.placePieces(),this.setEventHandlers(),await this.renderer.init(),this.renderer.turn=p.White,this.renderer.startRendering()}}window.onload=()=>{(new P).init();const e=document.getElementById("notes-list");["Move pieces holding left-click.","To cancel, drop pieces outside the board, or using right-click.","NEW: You'll now be alerted of checkmate!"].forEach((t=>{const i=document.createElement("li");i.innerText=t,e.appendChild(i)}))};
//# sourceMappingURL=index.59623b2c.js.map