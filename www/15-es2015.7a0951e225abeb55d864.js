(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/tIr":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=u("R7Hv");class o{constructor(l,n,u){this.dataProvider=l,this.router=n,this.route=u}ngOnInit(){this.dataProvider.getLocalData().subscribe(l=>{const n=this.route.snapshot.paramMap.get("itemId"),u=Number(n);for(const t of l)if(t.itemid===u){this.item=t;break}})}onModelChange(l){console.log(l)}}class i{}var r=u("pMnS"),b=u("oBZk"),a=u("ZZ/e"),s=u("SVse"),c=u("s7LF"),h=(u("mrSG"),function(){function l(){this.size="default",this.rateChange=new t.m}return l.prototype.onClick=function(l){this.rate=l,this.rateChange.emit(this.rate),this._onChange(this.rate)},l.prototype.writeValue=function(l){void 0!==l&&(this.rate=l)},l.prototype.registerOnChange=function(l){this._onChange=l},l.prototype.registerOnTouched=function(l){},l.prototype.setDisabledState=function(l){this.readonly=l},l}()),d=t.pb({encapsulation:0,styles:["ion-buttons[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n      }\n\n      [ion-button][disabled][_ngcontent-%COMP%] {\n        opacity: 1;\n      }\n\n      ion-icon[_ngcontent-%COMP%] {\n        color: gray;\n      }\n\n      ion-icon.filled[_ngcontent-%COMP%] {\n        color: orange;\n      }"],data:{}});function g(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,3,"ion-button",[["fill","clear"]],null,[[null,"click"],[null,"mouseover"],[null,"mouseleave"]],(function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=!1!==e.onClick(l.context.index+1)&&t),"mouseover"===n&&(t=!1!==(e.hoverRate=l.context.index+1)&&t),"mouseleave"===n&&(t=!1!==(e.hoverRate=0)&&t),t}),b.B,b.c)),t.qb(1,49152,null,0,a.i,[t.h,t.k,t.x],{disabled:[0,"disabled"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),t.rb(2,0,null,0,1,"ion-icon",[["name","star"],["slot","icon-only"]],[[2,"filled",null]],null,null,b.M,b.n)),t.qb(3,49152,null,0,a.A,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.readonly,"clear",u.size),l(n,3,0,"star")}),(function(l,n){var u=n.component;l(n,2,0,n.context.index+1<=u.hoverRate||!u.hoverRate&&n.context.index+1<=u.rate)}))}function f(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,4,"ion-buttons",[],null,null,null,b.C,b.d)),t.qb(1,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,2,null,g)),t.qb(3,278528,null,0,s.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Eb(4,5)],(function(l,n){var u=l(n,4,0,1,2,3,4,5);l(n,3,0,u)}),null)}var p=u("iInd"),m=t.pb({encapsulation:0,styles:[[""]],data:{}});function k(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,60,"ion-card",[],null,null,null,b.H,b.e)),t.qb(1,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,10,"ion-card-header",[],null,null,null,b.E,b.g)),t.qb(3,49152,null,0,a.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,8,"ion-item",[],null,null,null,b.N,b.o)),t.qb(5,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,6,"ion-label",[],null,null,null,b.O,b.p)),t.qb(7,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,4,"ion-card-title",[],null,null,null,b.G,b.i)),t.qb(9,49152,null,0,a.o,[t.h,t.k,t.x],null,null),(l()(),t.rb(10,0,null,0,2,"h1",[],null,null,null,null,null)),(l()(),t.rb(11,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(12,null,["",""])),(l()(),t.rb(13,0,null,0,5,"ion-item",[],null,null,null,b.N,b.o)),t.qb(14,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(15,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.rb(16,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["T\xe9cnicas utilizadas:"])),(l()(),t.Ib(18,null,[" ",""])),(l()(),t.rb(19,0,null,0,5,"ion-item",[],null,null,null,b.N,b.o)),t.qb(20,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(21,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.rb(22,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Modelo de implementa\xe7\xe3o:"])),(l()(),t.Ib(24,null,[" ",""])),(l()(),t.rb(25,0,null,0,5,"ion-item",[],null,null,null,b.N,b.o)),t.qb(26,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(27,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.rb(28,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Gestor:"])),(l()(),t.Ib(30,null,[" ",""])),(l()(),t.rb(31,0,null,0,5,"ion-item",[],null,null,null,b.N,b.o)),t.qb(32,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(33,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.rb(34,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Tipo de falha tratada:"])),(l()(),t.Ib(36,null,[" ",""])),(l()(),t.rb(37,0,null,0,5,"ion-item",[],null,null,null,b.N,b.o)),t.qb(38,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(39,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.rb(40,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Vantagens:"])),(l()(),t.Ib(42,null,[" ",""])),(l()(),t.rb(43,0,null,0,5,"ion-item",[],null,null,null,b.N,b.o)),t.qb(44,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(45,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.rb(46,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Desvantagens:"])),(l()(),t.Ib(48,null,[" ",""])),(l()(),t.rb(49,0,null,0,11,"ion-item",[],null,null,null,b.N,b.o)),t.qb(50,49152,null,0,a.F,[t.h,t.k,t.x],null,null),(l()(),t.rb(51,0,null,0,3,"ion-label",[],null,null,null,b.O,b.p)),t.qb(52,49152,null,0,a.L,[t.h,t.k,t.x],null,null),(l()(),t.rb(53,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Avalie"])),(l()(),t.rb(55,0,null,0,5,"rating",[["reandonly","false"],["size","default"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],(function(l,n,u){var t=!0,e=l.component;return"ngModelChange"===n&&(t=!1!==(e.rate=u)&&t),"ngModelChange"===n&&(t=!1!==e.onModelChange(u)&&t),t}),f,d)),t.qb(56,49152,null,0,h,[],{size:[0,"size"]},null),t.Fb(1024,null,c.b,(function(l){return[l]}),[h]),t.qb(58,671744,null,0,c.e,[[8,null],[8,null],[8,null],[6,c.b]],{model:[0,"model"]},{update:"ngModelChange"}),t.Fb(2048,null,c.c,null,[c.e]),t.qb(60,16384,null,0,c.d,[[4,c.c]],null,null)],(function(l,n){var u=n.component;l(n,56,0,"default"),l(n,58,0,u.rate)}),(function(l,n){var u=n.component;l(n,12,0,u.item.nome),l(n,18,0,u.item.tecnicas),l(n,24,0,u.item.modelo),l(n,30,0,u.item.gestor),l(n,36,0,u.item.tipo),l(n,42,0,u.item.vantagem),l(n,48,0,u.item.desvantagem),l(n,55,0,t.Db(n,60).ngClassUntouched,t.Db(n,60).ngClassTouched,t.Db(n,60).ngClassPristine,t.Db(n,60).ngClassDirty,t.Db(n,60).ngClassValid,t.Db(n,60).ngClassInvalid,t.Db(n,60).ngClassPending)}))}function x(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,11,"ion-header",[],null,null,null,b.L,b.m)),t.qb(1,49152,null,0,a.z,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,9,"ion-toolbar",[],null,null,null,b.X,b.y)),t.qb(3,49152,null,0,a.Ab,[t.h,t.k,t.x],null,null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.C,b.d)),t.qb(5,49152,null,0,a.j,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Db(l,8).onClick(u)&&e),e}),b.A,b.b)),t.qb(7,49152,null,0,a.e,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"]},null),t.qb(8,16384,null,0,a.f,[[2,a.gb],a.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.rb(9,0,null,0,2,"ion-title",[],null,null,null,b.W,b.x)),t.qb(10,49152,null,0,a.yb,[t.h,t.k,t.x],null,null),(l()(),t.Ib(-1,0,["Detalhes"])),(l()(),t.rb(12,0,null,null,17,"ion-content",[["class","ion-padding"]],null,null,null,b.J,b.k)),t.qb(13,49152,null,0,a.s,[t.h,t.k,t.x],null,null),(l()(),t.rb(14,0,null,0,15,"ion-list",[],null,null,null,b.P,b.q)),t.qb(15,49152,null,0,a.M,[t.h,t.k,t.x],null,null),(l()(),t.rb(16,0,null,0,13,"ion-grid",[],null,null,null,b.K,b.l)),t.qb(17,49152,null,0,a.y,[t.h,t.k,t.x],null,null),(l()(),t.rb(18,0,null,0,11,"ion-row",[["class","ion-align-items-center"]],null,null,null,b.T,b.u)),t.qb(19,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.rb(20,0,null,0,9,"ion-col",[],null,null,null,b.I,b.j)),t.qb(21,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.rb(22,0,null,0,7,"ion-grid",[],null,null,null,b.K,b.l)),t.qb(23,49152,null,0,a.y,[t.h,t.k,t.x],null,null),(l()(),t.rb(24,0,null,0,5,"ion-row",[["class","ion-align-items-center"]],null,null,null,b.T,b.u)),t.qb(25,49152,null,0,a.hb,[t.h,t.k,t.x],null,null),(l()(),t.rb(26,0,null,0,3,"ion-col",[],null,null,null,b.I,b.j)),t.qb(27,49152,null,0,a.r,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,k)),t.qb(29,16384,null,0,s.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,7,0,u.defaultHref),l(n,8,0,u.defaultHref),l(n,29,0,u.item)}),null)}function q(l){return t.Jb(0,[(l()(),t.rb(0,0,null,null,1,"app-detalhes",[],null,null,null,x,m)),t.qb(1,114688,null,0,o,[e.a,p.m,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=t.nb("app-detalhes",o,q,{},{},[]),C=function(){return function(){}}();u.d(n,"DetalhesPageModuleNgFactory",(function(){return I}));var I=t.ob(i,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[r.a,v]],[3,t.j],t.v]),t.Bb(4608,s.k,s.j,[t.s,[2,s.q]]),t.Bb(4608,c.g,c.g,[]),t.Bb(4608,a.a,a.a,[t.x,t.g]),t.Bb(4608,a.Eb,a.Eb,[a.a,t.j,t.p]),t.Bb(4608,a.Hb,a.Hb,[a.a,t.j,t.p]),t.Bb(1073742336,s.b,s.b,[]),t.Bb(1073742336,c.f,c.f,[]),t.Bb(1073742336,c.a,c.a,[]),t.Bb(1073742336,a.Cb,a.Cb,[]),t.Bb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),t.Bb(1073742336,C,C,[]),t.Bb(1073742336,i,i,[]),t.Bb(1024,p.k,(function(){return[[{path:"",component:o}]]}),[])])}))},R7Hv:function(l,n,u){"use strict";u.d(n,"a",(function(){return o}));var t=u("8Y7J"),e=u("IheW");let o=(()=>{class l{constructor(l){this.http=l}getCsvData(){return this.http.get("assets/userdata_5_10.csv")}getLocalData(){return this.http.get("assets/data.json")}getRecommendation(l,n){return this.flask="http://127.0.0.1:5000/predictions/"+n+"/"+l,this.http.get(this.flask)}}return l.ngInjectableDef=t.Mb({factory:function(){return new l(t.Nb(e.c))},token:l,providedIn:"root"}),l})()}}]);