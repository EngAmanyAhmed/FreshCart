import{a as I}from"./chunk-6VFBEB2S.js";import{c as F,d as k}from"./chunk-CYLSCFYX.js";import"./chunk-D5JVNGYT.js";import{Cb as l,Db as w,Eb as d,Jb as y,Ka as v,Oa as r,Pb as T,Qb as E,_ as g,ba as C,eb as _,kb as p,la as f,lb as m,ma as u,mb as o,nb as c,ob as h,rb as x,tb as S,ub as b}from"./chunk-WI4R3LZG.js";var $=(t,e)=>e._id;function D(t,e){if(t&1){let n=x();o(0,"div",3)(1,"div",6),S("click",function(){let i=f(n).$implicit,s=b();return u(s.getSpecificCategories(i._id))}),h(2,"img",7),o(3,"h2",8),l(4),c()()()}if(t&2){let n=e.$implicit;r(2),_("src",n.image,v)("alt",n.name),r(2),d(" ",n.name," ")}}function M(t,e){if(t&1&&(o(0,"div",5)(1,"h3",9),l(2),c()()),t&2){let n=e.$implicit;r(2),w(n.name)}}var U=(()=>{let e=class e{constructor(){this._CategoriService=g(I),this.allCatagories=[],this.specificCategori=[]}getSpecificCategories(a){this.cleanSpecific=this._CategoriService.getSpecificCategori(a).subscribe({next:i=>{console.log(i),this.specificCategori=i.data}})}ngOnInit(){this.cleanCategor=this._CategoriService.getCategori().subscribe({next:a=>{console.log(a),this.allCatagories=a.data}})}ngOnDestroy(){this.cleanCategor?.unsubscribe(),this.cleanSpecific?.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["app-categories"]],standalone:!0,features:[y],decls:10,vars:3,consts:[[1,"container"],[1,"text-main","text-center","my-3"],[1,"row"],[1,"col-md-4"],[1,"row","g-3"],[1,"col-md-4","p-3","product"],[1,"product","my-2",3,"click"],["height","300px",1,"w-100",3,"src","alt"],[1,"h5","text-main","p-4","text-center","text-capitalize"],[1,"text-main"]],template:function(i,s){i&1&&(o(0,"section",0)(1,"h2",1),l(2),T(3,"translate"),c(),o(4,"div",2),p(5,D,5,3,"div",3,$),c(),o(7,"div",4),p(8,M,3,1,"div",5,$),c()()),i&2&&(r(2),d(" ",E(3,1,"Categories.pupler Categories:")," "),r(3),m(s.allCatagories),r(3),m(s.specificCategori))},dependencies:[k,F]});let t=e;return t})();export{U as CategoriesComponent};
