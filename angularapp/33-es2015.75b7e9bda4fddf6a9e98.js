(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"20lM":function(e,r,n){"use strict";n.r(r);var o=n("ofXK"),t=n("PSD3"),i=n.n(t),b=n("fXoL"),a=n("3Pt+"),c=n("4SiG"),d=n("tyNb");const s=["preguntaForm"],u=function(e){return{"is-invalid":e}};let g=(()=>{class e{constructor(e,r,n){this.formBuilder=e,this.servi=r,this.pregunta={nombre:"",descripcion:""}}agregar({value:e}){""==this.pregunta.nombre||""==this.pregunta.descripcion?i.a.fire("Por favor llene todos los campos!","Pregunta no  Agregada!","error"):(this.servi.insertar(e),this.preguntaForm.reset(),i.a.fire("Pregunta agregada con exito!","Prregunta agregada!","success"))}ngOnInit(){}}return e.\u0275fac=function(r){return new(r||e)(b.Sb(a.b),b.Sb(c.a),b.Sb(d.b))},e.\u0275cmp=b.Mb({type:e,selectors:[["app-agregar-p"]],viewQuery:function(e,r){var n;1&e&&b.yc(s,!0),2&e&&b.oc(n=b.gc())&&(r.preguntaForm=n.first)},decls:43,vars:12,consts:[["id","main-header",1,"py-2","bg-info","text-white"],[1,"container"],[1,"row"],[1,"col-md-6"],["id","actions",1,"py-4","mb-4","bg-light"],[1,"col-md-3"],["routerLink","/preguntas-frecuentes",1,"btn","btn-dark","text-white","btn-block"],[1,"col-md-6","mx-auto"],[1,"card"],[1,"card-header"],[3,"ngSubmit"],["preguntaForm","ngForm"],[1,"modal-body"],[1,"form-group"],["for","nombre"],["type","text","name","nombre","required","","minlength","2",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["nombre","ngModel"],[1,"invalid-feedback",3,"hidden"],["for","apellido"],["type","text","name","descripcion","required","","minlength","10",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["descripcion","ngModel"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",2,"width","700px"]],template:function(e,r){if(1&e){const e=b.Yb();b.Xb(0,"header",0),b.Xb(1,"div",1),b.Xb(2,"div",2),b.Xb(3,"div",3),b.Xb(4,"h1"),b.uc(5," Agregar Pregunta "),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(6,"section",4),b.Xb(7,"div",1),b.Xb(8,"div",2),b.Xb(9,"div",5),b.Xb(10,"a",6),b.uc(11," Regresar al Inicio "),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Xb(12,"div",1),b.Xb(13,"div",2),b.Xb(14,"div",7),b.Xb(15,"div",8),b.Xb(16,"div",9),b.Xb(17,"h4"),b.uc(18,"En este formulario podra agregar una nueva pregunta"),b.Wb(),b.Wb(),b.Xb(19,"form",10,11),b.fc("ngSubmit",(function(){b.qc(e);const n=b.pc(20);return r.agregar(n)})),b.Xb(21,"div",12),b.Xb(22,"div",13),b.Xb(23,"label",14),b.uc(24,"Nombre de la pregunta"),b.Wb(),b.Xb(25,"input",15,16),b.fc("ngModelChange",(function(e){return r.pregunta.nombre=e})),b.Wb(),b.Xb(27,"div",17),b.uc(28," Nombre requerido "),b.Wb(),b.Xb(29,"div",17),b.uc(30," Debe contener al menos 2 caracteres "),b.Wb(),b.Wb(),b.Xb(31,"div",13),b.Xb(32,"label",18),b.uc(33,"Descripcion de la pregunta"),b.Wb(),b.Xb(34,"input",19,20),b.fc("ngModelChange",(function(e){return r.pregunta.descripcion=e})),b.Wb(),b.Xb(36,"div",17),b.uc(37," Descripcion requerida "),b.Wb(),b.Xb(38,"div",17),b.uc(39," Debe contener al menos 10 caracteres "),b.Wb(),b.Wb(),b.Wb(),b.Xb(40,"div",21),b.Xb(41,"button",22),b.uc(42,"Agregar "),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb(),b.Wb()}if(2&e){const e=b.pc(26),n=b.pc(35);b.Hb(25),b.kc("ngModel",r.pregunta.nombre)("ngClass",b.nc(8,u,e.errors&&e.touched)),b.Hb(2),b.kc("hidden",!(null!=e.errors&&e.errors.required)),b.Hb(2),b.kc("hidden",!(null!=e.errors&&e.errors.minlength)),b.Hb(5),b.kc("ngModel",r.pregunta.descripcion)("ngClass",b.nc(10,u,n.errors&&n.touched)),b.Hb(2),b.kc("hidden",!(null!=n.errors&&n.errors.required)),b.Hb(2),b.kc("hidden",!(null!=n.errors&&n.errors.minlength))}},directives:[d.c,a.s,a.h,a.i,a.a,a.o,a.f,a.g,a.j,o.i],styles:[""]}),e})();var l=n("iTUp");n.d(r,"AgregarPModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=b.Qb({type:e}),e.\u0275inj=b.Pb({factory:function(r){return new(r||e)},imports:[[o.b,a.e,l.a,d.d.forChild([{path:"",component:g}])]]}),e})()}}]);