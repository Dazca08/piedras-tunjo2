(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{WNvd:function(c,i,t){"use strict";t.r(i);var a=t("ofXK"),o=t("tyNb"),n=t("mrSG"),e=t("fXoL"),r=t("zbXe"),s=t("yR31"),b=t("HpFY");function d(c,i){if(1&c&&(e.ac(0,"div",6),e.ac(1,"div",7),e.ac(2,"b",8),e.Dc(3),e.Zb(),e.Zb(),e.ac(4,"div",9),e.ac(5,"div",10),e.ac(6,"div",11),e.ac(7,"div",12),e.ac(8,"b",8),e.Dc(9,"Descripci\xf3n"),e.Zb(),e.ac(10,"p"),e.Dc(11),e.Zb(),e.Zb(),e.Zb(),e.ac(12,"div",11),e.Wb(13,"app-carousel-images",13),e.lc(14,"imgUrlToArray"),e.Zb(),e.Zb(),e.Zb(),e.Zb()),2&c){const c=e.kc(2);e.Jb(3),e.Ec(c.noticia.titulo),e.Jb(8),e.Fc(" ",c.noticia.descripcion," "),e.Jb(2),e.rc("imagenes",e.mc(14,3,c.noticia.imagenesUrl))}}function l(c,i){if(1&c&&(e.ac(0,"div",2),e.ac(1,"button",3),e.Wb(2,"i",4),e.Zb(),e.Bc(3,d,15,5,"div",5),e.Zb()),2&c){const c=e.kc();e.Jb(3),e.rc("ngIf",c.noticia)}}let p=(()=>{class c{constructor(c,i){this.route=c,this.noticiaService=i,this.noticia=void 0}ngOnInit(){this.obtenerNoticia()}obtenerNoticia(){return Object(n.a)(this,void 0,void 0,(function*(){const c=this.route.snapshot.paramMap.get("id");this.noticia=yield this.noticiaService.getNoticia(Number(c))}))}}return c.\u0275fac=function(i){return new(i||c)(e.Vb(o.a),e.Vb(r.a))},c.\u0275cmp=e.Pb({type:c,selectors:[["app-detalle"]],decls:2,vars:1,consts:[[1,"row","justify-content-center","mt-2"],["class","col-md-8 col-sm-12",4,"ngIf"],[1,"col-md-8","col-sm-12"],["routerLink","/noticias",1,"btn","btm-sm","btn-primary"],[1,"fas","fa-arrow-left"],["class","card shadow",4,"ngIf"],[1,"card","shadow"],[1,"card-header","text-center"],[1,"text-muted"],[1,"card-body"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"form-group"],["tipo","noticia",3,"imagenes"]],template:function(c,i){1&c&&(e.ac(0,"div",0),e.Bc(1,l,4,1,"div",1),e.Zb()),2&c&&(e.Jb(1),e.rc("ngIf",i.noticia))},directives:[a.m,o.c,s.a],pipes:[b.a],styles:[""]}),c})();var u=t("j1ZV"),m=t("iTUp");t.d(i,"DetalleModule",(function(){return f}));let f=(()=>{class c{}return c.\u0275mod=e.Tb({type:c}),c.\u0275inj=e.Sb({factory:function(i){return new(i||c)},imports:[[a.b,u.a,m.a,o.e.forChild([{path:"",component:p}])]]}),c})()}}]);