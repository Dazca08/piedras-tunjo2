(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6pye":function(i,t,e){"use strict";e.r(t);var c=e("ofXK"),r=e("mrSG"),a=e("3Pt+"),o=e("fXoL"),n=e("zbXe"),s=e("lA0O"),l=e("tyNb"),d=e("SZog");function b(i,t){1&i&&(o.ac(0,"span"),o.Dc(1," El titulo es requerido "),o.Zb())}function u(i,t){1&i&&(o.ac(0,"span"),o.Dc(1," La descripcion es requerida "),o.Zb())}let f=(()=>{class i{constructor(i,t,e,c){this.fb=i,this.noticiasService=t,this.imagesService=e,this.router=c,this.files=[]}ngOnInit(){this.formNoticia=this.fb.group({titulo:["",a.q.required],descripcion:["",a.q.required]})}onSubmit(){return Object(r.a)(this,void 0,void 0,(function*(){const i=yield this.imagesService.uploadMultipleImages(this.files,"noticia");if(""!==i){const t=Object.assign(Object.assign({},this.formNoticia.value),{calificacion:0,estado:1,imagenesUrl:i});(yield this.noticiasService.agregarNoticia(t))&&this.router.navigateByUrl("/noticias")}}))}onChangeFile(i){this.files=i}getValidationClass(i){const t=this.formNoticia.get(i);return t.untouched&&t.pristine?{}:{"is-valid":t.valid,"is-invalid":t.invalid}}get titulo(){return this.formNoticia.get("titulo")}get descripcion(){return this.formNoticia.get("descripcion")}}return i.\u0275fac=function(t){return new(t||i)(o.Vb(a.b),o.Vb(n.a),o.Vb(s.a),o.Vb(l.b))},i.\u0275cmp=o.Pb({type:i,selectors:[["app-agregar"]],decls:33,vars:6,consts:[[1,"row","justify-content-center","mt-2"],[1,"col-md-8","col-sm-12"],["routerLink","/noticias",1,"btn","btm-sm","btn-primary"],[1,"fas","fa-arrow-left"],[3,"formGroup","ngSubmit"],[1,"card","shadow"],[1,"card-header","text-center"],[1,"text-muted"],[1,"card-body"],[1,"row"],[1,"col-md-6","col-sm-12"],[1,"form-group"],["type","text","formControlName","titulo",1,"form-control",3,"ngClass"],[1,"valid-feedback"],[1,"invalid-feedback"],[4,"ngIf"],["type","text","formControlName","descripcion",1,"form-control",3,"ngClass"],[3,"changeFiles"],[1,"card-footer","text-center"],["type","submit",1,"btn","btn-success",3,"disabled"]],template:function(i,t){1&i&&(o.ac(0,"div",0),o.ac(1,"div",1),o.ac(2,"button",2),o.Wb(3,"i",3),o.Zb(),o.ac(4,"form",4),o.ic("ngSubmit",(function(){return t.onSubmit()})),o.ac(5,"div",5),o.ac(6,"div",6),o.ac(7,"b",7),o.Dc(8,"NUEVA NOTICIA"),o.Zb(),o.Zb(),o.ac(9,"div",8),o.ac(10,"div",9),o.ac(11,"div",10),o.ac(12,"div",11),o.ac(13,"b",7),o.Dc(14,"Titulo"),o.Zb(),o.Wb(15,"input",12),o.ac(16,"div",13),o.Dc(17,"Ok!"),o.Zb(),o.ac(18,"div",14),o.Bc(19,b,2,0,"span",15),o.Zb(),o.Zb(),o.ac(20,"div",11),o.ac(21,"b",7),o.Dc(22,"Descripci\xf3n"),o.Zb(),o.Wb(23,"input",16),o.ac(24,"div",13),o.Dc(25,"Ok!"),o.Zb(),o.ac(26,"div",14),o.Bc(27,u,2,0,"span",15),o.Zb(),o.Zb(),o.Zb(),o.ac(28,"div",10),o.ac(29,"app-images-upload",17),o.ic("changeFiles",(function(i){return t.onChangeFile(i)})),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.ac(30,"div",18),o.ac(31,"button",19),o.Dc(32,"Guardar"),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb()),2&i&&(o.Jb(4),o.rc("formGroup",t.formNoticia),o.Jb(11),o.rc("ngClass",t.getValidationClass("titulo")),o.Jb(4),o.rc("ngIf",null==t.titulo.errors?null:t.titulo.errors.required),o.Jb(4),o.rc("ngClass",t.getValidationClass("descripcion")),o.Jb(4),o.rc("ngIf",null==t.descripcion.errors?null:t.descripcion.errors.required),o.Jb(4),o.rc("disabled",t.formNoticia.invalid||0===t.files.length))},directives:[l.c,a.s,a.h,a.d,a.a,a.g,a.c,c.k,c.m,d.a],styles:[""]}),i})();var p=e("j1ZV");e.d(t,"AgregarModule",(function(){return m}));let m=(()=>{class i{}return i.\u0275mod=o.Tb({type:i}),i.\u0275inj=o.Sb({factory:function(t){return new(t||i)},imports:[[c.b,p.a,a.e,a.n,l.e.forChild([{path:"",component:f}])]]}),i})()}}]);