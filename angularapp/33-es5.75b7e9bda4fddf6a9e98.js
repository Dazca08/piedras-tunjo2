function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,r,n){return r&&_defineProperties(e.prototype,r),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"20lM":function(e,r,n){"use strict";n.r(r);var i,o=n("ofXK"),t=n("PSD3"),a=n.n(t),c=n("fXoL"),b=n("3Pt+"),u=n("4SiG"),d=n("tyNb"),s=["preguntaForm"],l=function(e){return{"is-invalid":e}},g=((i=function(){function e(r,n,i){_classCallCheck(this,e),this.formBuilder=r,this.servi=n,this.pregunta={nombre:"",descripcion:""}}return _createClass(e,[{key:"agregar",value:function(e){var r=e.value;""==this.pregunta.nombre||""==this.pregunta.descripcion?a.a.fire("Por favor llene todos los campos!","Pregunta no  Agregada!","error"):(this.servi.insertar(r),this.preguntaForm.reset(),a.a.fire("Pregunta agregada con exito!","Prregunta agregada!","success"))}},{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)(c.Sb(b.b),c.Sb(u.a),c.Sb(d.b))},i.\u0275cmp=c.Mb({type:i,selectors:[["app-agregar-p"]],viewQuery:function(e,r){var n;1&e&&c.yc(s,!0),2&e&&c.oc(n=c.gc())&&(r.preguntaForm=n.first)},decls:43,vars:12,consts:[["id","main-header",1,"py-2","bg-info","text-white"],[1,"container"],[1,"row"],[1,"col-md-6"],["id","actions",1,"py-4","mb-4","bg-light"],[1,"col-md-3"],["routerLink","/preguntas-frecuentes",1,"btn","btn-dark","text-white","btn-block"],[1,"col-md-6","mx-auto"],[1,"card"],[1,"card-header"],[3,"ngSubmit"],["preguntaForm","ngForm"],[1,"modal-body"],[1,"form-group"],["for","nombre"],["type","text","name","nombre","required","","minlength","2",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["nombre","ngModel"],[1,"invalid-feedback",3,"hidden"],["for","apellido"],["type","text","name","descripcion","required","","minlength","10",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["descripcion","ngModel"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",2,"width","700px"]],template:function(e,r){if(1&e){var n=c.Yb();c.Xb(0,"header",0),c.Xb(1,"div",1),c.Xb(2,"div",2),c.Xb(3,"div",3),c.Xb(4,"h1"),c.uc(5," Agregar Pregunta "),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(6,"section",4),c.Xb(7,"div",1),c.Xb(8,"div",2),c.Xb(9,"div",5),c.Xb(10,"a",6),c.uc(11," Regresar al Inicio "),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(12,"div",1),c.Xb(13,"div",2),c.Xb(14,"div",7),c.Xb(15,"div",8),c.Xb(16,"div",9),c.Xb(17,"h4"),c.uc(18,"En este formulario podra agregar una nueva pregunta"),c.Wb(),c.Wb(),c.Xb(19,"form",10,11),c.fc("ngSubmit",(function(){c.qc(n);var e=c.pc(20);return r.agregar(e)})),c.Xb(21,"div",12),c.Xb(22,"div",13),c.Xb(23,"label",14),c.uc(24,"Nombre de la pregunta"),c.Wb(),c.Xb(25,"input",15,16),c.fc("ngModelChange",(function(e){return r.pregunta.nombre=e})),c.Wb(),c.Xb(27,"div",17),c.uc(28," Nombre requerido "),c.Wb(),c.Xb(29,"div",17),c.uc(30," Debe contener al menos 2 caracteres "),c.Wb(),c.Wb(),c.Xb(31,"div",13),c.Xb(32,"label",18),c.uc(33,"Descripcion de la pregunta"),c.Wb(),c.Xb(34,"input",19,20),c.fc("ngModelChange",(function(e){return r.pregunta.descripcion=e})),c.Wb(),c.Xb(36,"div",17),c.uc(37," Descripcion requerida "),c.Wb(),c.Xb(38,"div",17),c.uc(39," Debe contener al menos 10 caracteres "),c.Wb(),c.Wb(),c.Wb(),c.Xb(40,"div",21),c.Xb(41,"button",22),c.uc(42,"Agregar "),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb()}if(2&e){var i=c.pc(26),o=c.pc(35);c.Hb(25),c.kc("ngModel",r.pregunta.nombre)("ngClass",c.nc(8,l,i.errors&&i.touched)),c.Hb(2),c.kc("hidden",!(null!=i.errors&&i.errors.required)),c.Hb(2),c.kc("hidden",!(null!=i.errors&&i.errors.minlength)),c.Hb(5),c.kc("ngModel",r.pregunta.descripcion)("ngClass",c.nc(10,l,o.errors&&o.touched)),c.Hb(2),c.kc("hidden",!(null!=o.errors&&o.errors.required)),c.Hb(2),c.kc("hidden",!(null!=o.errors&&o.errors.minlength))}},directives:[d.c,b.s,b.h,b.i,b.a,b.o,b.f,b.g,b.j,o.i],styles:[""]}),i),p=n("iTUp");n.d(r,"AgregarPModule",(function(){return m}));var f,m=((f=function e(){_classCallCheck(this,e)}).\u0275mod=c.Qb({type:f}),f.\u0275inj=c.Pb({factory:function(e){return new(e||f)},imports:[[o.b,b.e,p.a,d.d.forChild([{path:"",component:g}])]]}),f)}}]);