(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"6pye":function(i,t,e){"use strict";e.r(t);var c=e("ofXK"),r=e("mrSG"),o=e("3Pt+"),a=e("fXoL"),n=e("zbXe"),s=e("lA0O"),l=e("tyNb"),d=e("SZog");function b(i,t){1&i&&(a.ac(0,"span"),a.Cc(1," El titulo es requerido "),a.Zb())}function u(i,t){1&i&&(a.ac(0,"span"),a.Cc(1," La descripcion es requerida "),a.Zb())}let f=(()=>{class i{constructor(i,t,e,c){this.fb=i,this.noticiasService=t,this.imagesService=e,this.router=c,this.files=[]}ngOnInit(){this.formNoticia=this.fb.group({titulo:["",o.p.required],descripcion:["",o.p.required]})}onSubmit(){return Object(r.a)(this,void 0,void 0,(function*(){const i=yield this.imagesService.uploadMultipleImages(this.files,"noticia");if(console.log(i),""!==i){const t=Object.assign(Object.assign({},this.formNoticia.value),{calificacion:0,estado:1,imagenesUrl:i});console.log(i),(yield this.noticiasService.agregarNoticia(t))&&this.router.navigateByUrl("/noticias")}}))}onChangeFile(i){this.files=i}getValidationClass(i){const t=this.formNoticia.get(i);return t.untouched&&t.pristine?{}:{"is-valid":t.valid,"is-invalid":t.invalid}}get titulo(){return this.formNoticia.get("titulo")}get descripcion(){return this.formNoticia.get("descripcion")}}return i.\u0275fac=function(t){return new(t||i)(a.Vb(o.b),a.Vb(n.a),a.Vb(s.a),a.Vb(l.b))},i.\u0275cmp=a.Pb({type:i,selectors:[["app-agregar"]],decls:33,vars:6,consts:[[1,"row","justify-content-center","mt-2"],[1,"col-md-8","col-sm-12"],["routerLink","/noticias",1,"btn","btm-sm","btn-primary"],[1,"fas","fa-arrow-left"],[3,"formGroup","ngSubmit"],[1,"card","shadow"],[1,"card-header","text-center"],[1,"text-muted"],[1,"card-body"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"form-group"],["type","text","formControlName","titulo",1,"form-control",3,"ngClass"],[1,"valid-feedback"],[1,"invalid-feedback"],[4,"ngIf"],["formControlName","descripcion",1,"form-control",3,"ngClass"],[3,"changeFiles"],[1,"card-footer","text-center"],["type","submit",1,"btn","btn-success",3,"disabled"]],template:function(i,t){1&i&&(a.ac(0,"div",0),a.ac(1,"div",1),a.ac(2,"button",2),a.Wb(3,"i",3),a.Zb(),a.ac(4,"form",4),a.ic("ngSubmit",(function(){return t.onSubmit()})),a.ac(5,"div",5),a.ac(6,"div",6),a.ac(7,"b",7),a.Cc(8,"NUEVA NOTICIA"),a.Zb(),a.Zb(),a.ac(9,"div",8),a.ac(10,"div",9),a.ac(11,"div",10),a.ac(12,"div",11),a.ac(13,"b",7),a.Cc(14,"Titulo"),a.Zb(),a.Wb(15,"input",12),a.ac(16,"div",13),a.Cc(17,"Ok!"),a.Zb(),a.ac(18,"div",14),a.Bc(19,b,2,0,"span",15),a.Zb(),a.Zb(),a.ac(20,"div",11),a.ac(21,"b",7),a.Cc(22,"Descripci\xf3n"),a.Zb(),a.Wb(23,"textarea",16),a.ac(24,"div",13),a.Cc(25,"Ok!"),a.Zb(),a.ac(26,"div",14),a.Bc(27,u,2,0,"span",15),a.Zb(),a.Zb(),a.Zb(),a.ac(28,"div",10),a.ac(29,"app-images-upload",17),a.ic("changeFiles",(function(i){return t.onChangeFile(i)})),a.Zb(),a.Zb(),a.Zb(),a.Zb(),a.ac(30,"div",18),a.ac(31,"button",19),a.Cc(32,"Guardar"),a.Zb(),a.Zb(),a.Zb(),a.Zb(),a.Zb(),a.Zb()),2&i&&(a.Jb(4),a.rc("formGroup",t.formNoticia),a.Jb(11),a.rc("ngClass",t.getValidationClass("titulo")),a.Jb(4),a.rc("ngIf",null==t.titulo.errors?null:t.titulo.errors.required),a.Jb(4),a.rc("ngClass",t.getValidationClass("descripcion")),a.Jb(4),a.rc("ngIf",null==t.descripcion.errors?null:t.descripcion.errors.required),a.Jb(4),a.rc("disabled",t.formNoticia.invalid||0===t.files.length))},directives:[l.c,o.r,o.h,o.d,o.a,o.g,o.c,c.k,c.m,d.a],styles:[""]}),i})();var m=e("j1ZV");e.d(t,"AgregarModule",(function(){return p}));let p=(()=>{class i{}return i.\u0275mod=a.Tb({type:i}),i.\u0275inj=a.Sb({factory:function(t){return new(t||i)},imports:[[c.b,m.a,o.e,o.m,l.e.forChild([{path:"",component:f}])]]}),i})()}}]);