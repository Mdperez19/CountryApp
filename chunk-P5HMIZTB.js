import{A as w,B as M,C as H,D as C,E as D,F as G,G as J,K,M as Q,N as W,O as V,R as S,S as X,U as Y,a as L,b as U,c as N,d as k,e as q,f as O,g as I,h as A,i as u,j as _,k as B,l as m,m as f,n as g,o as d,p as r,q as i,r as c,s as x,t as P,u as R,v as a,w as T,x as l,y as z,z as F}from"./chunk-2OTPDNVB.js";var h=(()=>{let e=class e{constructor(o){this.http=o,this.apiURL="https://restcountries.com/v3.1"}getCountriesRequest(o){return this.http.get(o).pipe(N(t=>(console.log("Error: ",t),L([]))),k(2e3))}searchCountryByAlphaCode(o){return this.http.get(`${this.apiURL}/alpha/${o}`).pipe(U(t=>t.length>0?t[0]:null),N(t=>L(null)))}searchCapital(o){let t=`${this.apiURL}/capital/${o}`;return this.getCountriesRequest(t)}searchCountry(o){let t=`${this.apiURL}/name/${o}`;return this.getCountriesRequest(t)}searchRegion(o){let t=`${this.apiURL}/region/${o}`;return this.getCountriesRequest(t)}};e.\u0275fac=function(t){return new(t||e)(A(J))},e.\u0275prov=O({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function me(n,e){n&1&&(r(0,"div",2),a(1," No hay registros que mostrar "),i())}var se=n=>["/countries/by",n];function ce(n,e){if(n&1&&(r(0,"tr")(1,"td"),a(2),i(),r(3,"td"),a(4),i(),r(5,"td"),c(6,"img",5),i(),r(7,"td"),a(8),i(),r(9,"td"),a(10),i(),r(11,"td"),a(12),F(13,"number"),i(),r(14,"td")(15,"a",6),a(16,"Info"),i()()()),n&2){let s=e.$implicit,o=e.index;m(2),T(o+1),m(2),l(" ",s.flag," "),m(2),d("src",s.flags.svg,B)("alt",s.name.common),m(2),l(" ",s.name.common," "),m(2),l(" ",s.capital," "),m(2),l(" ",w(13,8,s.population)," "),m(3),d("routerLink",z(10,se,s.cca3))}}function le(n,e){if(n&1&&(r(0,"table",3)(1,"thead")(2,"th"),a(3,"#"),i(),r(4,"th"),a(5,"Bandera"),i(),r(6,"th"),a(7,"Icon"),i(),r(8,"th"),a(9,"Nombre"),i(),r(10,"th"),a(11,"Capital"),i(),r(12,"th"),a(13,"Poblaci\xF3n"),i(),c(14,"th"),i(),r(15,"tbody"),g(16,ce,17,12,"tr",4),i()()),n&2){let s=P();m(16),d("ngForOf",s.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(t,p){if(t&1&&g(0,me,2,0,"div",0)(1,le,17,1,"ng-template",null,1,M),t&2){let v=R(2);d("ngIf",p.countries.length===0)("ngIfElse",v)}},dependencies:[H,C,W,D],styles:["img[_ngcontent-%COMP%]{width:35px}"]});let n=e;return n})();function pe(n,e){n&1&&c(0,"shared-loading-spinner")}var te=(()=>{let e=class e{constructor(o){this.countriesService=o,this.countries=[],this.isLoading=!1}searchByCapital(o){this.isLoading=!0,this.countriesService.searchCapital(o).subscribe(t=>{this.countries=t,this.isLoading=!1})}};e.\u0275fac=function(t){return new(t||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["app-by-capital-page"]],decls:12,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[4,"ngIf"],[3,"countries"]],template:function(t,p){t&1&&(r(0,"h2"),a(1,"Por Capital"),i(),c(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(b){return p.searchByCapital(b)}),i()()(),c(6,"hr"),r(7,"div",0)(8,"div",1),c(9,"hr"),g(10,pe,1,0,"shared-loading-spinner",3),c(11,"countries-table",4),i()()),t&2&&(m(10),d("ngIf",p.isLoading),m(),d("countries",p.countries))},dependencies:[C,S,X,E]});let n=e;return n})();var ie=(()=>{let e=class e{constructor(o){this.countriesService=o,this.countries=[]}searchByCountry(o){this.countriesService.searchCountry(o).subscribe(t=>{this.countries=t})}};e.\u0275fac=function(t){return new(t||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["app-by-country-page"]],decls:11,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"onValue"],[3,"countries"]],template:function(t,p){t&1&&(r(0,"h2"),a(1,"Por Pa\xEDs"),i(),c(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(b){return p.searchByCountry(b)}),i()()(),c(6,"hr"),r(7,"div",0)(8,"div",1),c(9,"hr")(10,"countries-table",3),i()()),t&2&&(m(10),d("countries",p.countries))},dependencies:[S,E]});let n=e;return n})();var ne=(()=>{let e=class e{constructor(o){this.countriesService=o,this.countries=[]}searchByRegion(o){this.countriesService.searchRegion(o).subscribe(t=>{this.countries=t})}};e.\u0275fac=function(t){return new(t||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["app-by-region-page"]],decls:11,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por regi\xF3n",3,"onValue"],[3,"countries"]],template:function(t,p){t&1&&(r(0,"h2"),a(1,"Por Regi\xF3n"),i(),c(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(b){return p.searchByRegion(b)}),i()()(),c(6,"hr"),r(7,"div",0)(8,"div",1),c(9,"hr")(10,"countries-table",3),i()()),t&2&&(m(10),d("countries",p.countries))},dependencies:[S,E]});let n=e;return n})();function de(n,e){n&1&&(r(0,"div",2),a(1,"Espere por favor"),i())}function ue(n,e){if(n&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"P\xE1is: "),r(5,"strong"),a(6),i()()()(),r(7,"div",3)(8,"div",5)(9,"h3"),a(10,"Bandera"),i(),c(11,"img",6),i(),r(12,"div",7)(13,"h3"),a(14,"Informaci\xF3n"),i(),r(15,"ul",8)(16,"li",9)(17,"strong"),a(18,"Poblaci\xF3n:"),i(),a(19),F(20,"number"),i(),r(21,"li",9)(22,"strong"),a(23,"C\xF3digo:"),i(),a(24),i()()(),r(25,"div",10)(26,"div",7)(27,"h3"),a(28,"Traducciones"),i(),r(29,"div",11)(30,"span",12),a(31),i(),r(32,"span",12),a(33),i(),r(34,"span",12),a(35),i(),r(36,"span",12),a(37),i(),r(38,"span",12),a(39),i(),r(40,"span",12),a(41),i(),r(42,"span",12),a(43),i(),r(44,"span",12),a(45),i(),r(46,"span",12),a(47),i(),r(48,"span",12),a(49),i()()()()()()),n&2){let s=P();m(6),T(s.country.name.common),m(5),d("alt",s.country.name.common)("src",s.country.flags.svg,B),m(8),l(" ",w(20,15,s.country.population)," "),m(5),l(" ",s.country.cca3," "),m(7),l(" ",s.country.translations.ara.common," "),m(2),l(" ",s.country.translations.bre.common," "),m(2),l(" ",s.country.translations.ces.common," "),m(2),l(" ",s.country.translations.cym.common," "),m(2),l(" ",s.country.translations.deu.common," "),m(2),l(" ",s.country.translations.est.common," "),m(2),l(" ",s.country.translations.fin.common," "),m(2),l(" ",s.country.translations.ita.common," "),m(2),l(" ",s.country.translations.kor.common," "),m(2),l(" ",s.country.translations.per.common," ")}}var re=(()=>{let e=class e{constructor(o,t,p){this.activatedRoute=o,this.countriesService=t,this.router=p}ngOnInit(){this.activatedRoute.params.pipe(q(({id:o})=>this.countriesService.searchCountryByAlphaCode(o))).subscribe(o=>o?this.country=o:this.router.navigateByUrl("/"))}};e.\u0275fac=function(t){return new(t||e)(f(K),f(h),f(Q))},e.\u0275cmp=u({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"alt","src"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,p){if(t&1&&g(0,de,2,0,"ng-template",null,0,M)(2,ue,50,17,"div",1),t&2){let v=R(1);m(2),d("ngIf",p.country)("ngIfElse",v)}},dependencies:[C,D]});let n=e;return n})();var fe=[{path:"by-capital",component:te},{path:"by-country",component:ie},{path:"by-region",component:ne},{path:"by/:id",component:re},{path:"**",redirectTo:"by-capital"}],oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[V.forChild(fe),V]});let n=e;return n})();var Oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=_({type:e}),e.\u0275inj=I({imports:[G,oe,Y]});let n=e;return n})();export{Oe as CountriesModule};
