(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{o5AU:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),o=u("oBZk"),r=u("ZZ/e"),a=u("iInd"),b=u("SVse"),s=u("s7LF"),c=u("R7Hv"),h=u("LvDl"),d=u.n(h);class g{constructor(l,n,u){this.dataService=l,this.router=n,this.route=u}ngOnInit(){this.userId=this.route.snapshot.paramMap.get("userId")}ionViewDidEnter(){this.dataService.getLocalData().subscribe(l=>{this.allItems=l,this.items=this.allItems})}filterTags(l){const n=l.target.value;n&&""!==n.trim()?(this.items=d.a.values(this.allItems),this.items=this.items.filter(l=>l.nome.toLowerCase().indexOf(n.toLowerCase())>-1||l.tecnicas.toLowerCase().indexOf(n.toLowerCase())>-1||l.tipo.toLowerCase().indexOf(n.toLowerCase())>-1||l.problema.toLowerCase().indexOf(n.toLowerCase())>-1||l.gestor.toLowerCase().indexOf(n.toLowerCase())>-1||l.modelo.toLowerCase().indexOf(n.toLowerCase())>-1)):this.items=this.allItems}}var p=e.pb({encapsulation:0,styles:[[""]],data:{}});function m(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,29,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Db(l,2).onClick()&&t),"click"===n&&(t=!1!==e.Db(l,3).onClick(u)&&t),t}),o.H,o.e)),e.qb(1,49152,null,0,r.k,[e.h,e.k,e.x],null,null),e.qb(2,16384,null,0,a.n,[a.m,a.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.qb(3,737280,null,0,r.Ib,[b.g,r.Fb,e.k,a.m,[2,a.n]],null,null),(l()(),e.rb(4,0,null,0,9,"ion-card-header",[],null,null,null,o.E,o.g)),e.qb(5,49152,null,0,r.m,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,7,"ion-item",[],null,null,null,o.N,o.o)),e.qb(7,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.rb(8,0,null,0,5,"ion-label",[],null,null,null,o.O,o.p)),e.qb(9,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.rb(10,0,null,0,3,"ion-card-title",[],null,null,null,o.G,o.i)),e.qb(11,49152,null,0,r.o,[e.h,e.k,e.x],null,null),(l()(),e.rb(12,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Ib(13,null,["",""])),(l()(),e.rb(14,0,null,0,6,"ion-card-content",[],null,null,null,o.D,o.f)),e.qb(15,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(16,0,null,0,1,"ion-icon",[["name","arrow-round-forward"]],null,null,null,o.M,o.n)),e.qb(17,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(18,0,null,0,2,"ion-label",[],null,null,null,o.O,o.p)),e.qb(19,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Ib(20,0,["T\xe9cnica utilizada: ",""])),(l()(),e.rb(21,0,null,0,8,"ion-card-content",[],null,null,null,o.D,o.f)),e.qb(22,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.rb(23,0,null,0,6,"ion-card-subtitle",[],null,null,null,o.F,o.h)),e.qb(24,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(l()(),e.rb(25,0,null,0,1,"ion-icon",[["name","pricetag"]],null,null,null,o.M,o.n)),e.qb(26,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.rb(27,0,null,0,2,"ion-label",[],null,null,null,o.O,o.p)),e.qb(28,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Ib(29,0,["Tipo: ",""]))],(function(l,n){l(n,2,0,e.vb(2,"/detalhes/",n.component.userId,"/",n.context.$implicit.itemid,"")),l(n,3,0),l(n,17,0,"arrow-round-forward"),l(n,26,0,"pricetag")}),(function(l,n){l(n,13,0,n.context.$implicit.nome),l(n,20,0,n.context.$implicit.tecnicas),l(n,29,0,n.context.$implicit.tipo)}))}function k(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,10,"ion-header",[],null,null,null,o.L,o.m)),e.qb(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.X,o.y)),e.qb(3,49152,null,0,r.Ab,[e.h,e.k,e.x],null,null),(l()(),e.rb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.C,o.d)),e.qb(5,49152,null,0,r.j,[e.h,e.k,e.x],null,null),(l()(),e.rb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.Q,o.s)),e.qb(7,49152,null,0,r.P,[e.h,e.k,e.x],null,null),(l()(),e.rb(8,0,null,0,2,"ion-title",[],null,null,null,o.W,o.x)),e.qb(9,49152,null,0,r.yb,[e.h,e.k,e.x],null,null),(l()(),e.Ib(-1,0,[" T\xe9cnicas de Toler\xe2ncia a Falhas "])),(l()(),e.rb(11,0,null,null,8,"ion-toolbar",[],null,null,null,o.X,o.y)),e.qb(12,49152,null,0,r.Ab,[e.h,e.k,e.x],null,null),(l()(),e.rb(13,0,null,0,6,"ion-searchbar",[["animated",""],["clearInput",""],["placeholder","Digite as tags que deseja procurar..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Db(l,14)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Db(l,14)._handleInputEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(i.queryText=u)&&t),"ionInput"===n&&(t=!1!==i.filterTags(u)&&t),t}),o.U,o.v)),e.qb(14,16384,null,0,r.Jb,[e.k],null,null),e.Fb(1024,null,s.b,(function(l){return[l]}),[r.Jb]),e.qb(16,671744,null,0,s.e,[[8,null],[8,null],[8,null],[6,s.b]],{model:[0,"model"]},{update:"ngModelChange"}),e.Fb(2048,null,s.c,null,[s.e]),e.qb(18,16384,null,0,s.d,[[4,s.c]],null,null),e.qb(19,49152,null,0,r.ib,[e.h,e.k,e.x],{animated:[0,"animated"],placeholder:[1,"placeholder"]},null),(l()(),e.rb(20,0,null,null,17,"ion-content",[],null,null,null,o.J,o.k)),e.qb(21,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.rb(22,0,null,0,15,"ion-list",[],null,null,null,o.P,o.q)),e.qb(23,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.rb(24,0,null,0,13,"ion-grid",[],null,null,null,o.K,o.l)),e.qb(25,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(l()(),e.rb(26,0,null,0,11,"ion-row",[["class","ion-align-items-center"]],null,null,null,o.T,o.u)),e.qb(27,49152,null,0,r.hb,[e.h,e.k,e.x],null,null),(l()(),e.rb(28,0,null,0,9,"ion-col",[],null,null,null,o.I,o.j)),e.qb(29,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.rb(30,0,null,0,7,"ion-grid",[],null,null,null,o.K,o.l)),e.qb(31,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(l()(),e.rb(32,0,null,0,5,"ion-row",[["class","ion-align-items-center"]],null,null,null,o.T,o.u)),e.qb(33,49152,null,0,r.hb,[e.h,e.k,e.x],null,null),(l()(),e.rb(34,0,null,0,3,"ion-col",[],null,null,null,o.I,o.j)),e.qb(35,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.gb(16777216,null,0,1,null,m)),e.qb(37,278528,null,0,b.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,16,0,u.queryText),l(n,19,0,"","Digite as tags que deseja procurar..."),l(n,37,0,u.items)}),(function(l,n){l(n,13,0,e.Db(n,18).ngClassUntouched,e.Db(n,18).ngClassTouched,e.Db(n,18).ngClassPristine,e.Db(n,18).ngClassDirty,e.Db(n,18).ngClassValid,e.Db(n,18).ngClassInvalid,e.Db(n,18).ngClassPending)}))}function q(l){return e.Jb(0,[(l()(),e.rb(0,0,null,null,1,"app-list",[],null,null,null,k,p)),e.qb(1,114688,null,0,g,[c.a,a.m,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=e.nb("app-list",g,q,{},{},[]);u.d(n,"ListPageModuleNgFactory",(function(){return f}));var f=e.ob(t,[],(function(l){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[i.a,x]],[3,e.j],e.v]),e.Bb(4608,b.k,b.j,[e.s,[2,b.q]]),e.Bb(4608,s.g,s.g,[]),e.Bb(4608,r.a,r.a,[e.x,e.g]),e.Bb(4608,r.Eb,r.Eb,[r.a,e.j,e.p]),e.Bb(4608,r.Hb,r.Hb,[r.a,e.j,e.p]),e.Bb(1073742336,b.b,b.b,[]),e.Bb(1073742336,s.f,s.f,[]),e.Bb(1073742336,s.a,s.a,[]),e.Bb(1073742336,r.Cb,r.Cb,[]),e.Bb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),e.Bb(1073742336,t,t,[]),e.Bb(1024,a.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);