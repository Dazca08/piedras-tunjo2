(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{FLV1:function(e,o,r){"use strict";r.r(o);var n=r("ofXK"),i=r("PSD3"),u=r.n(i),c=r("fXoL"),a=r("3Pt+"),t=r("Tapi"),l=r("tyNb"),d=r("4r22");function b(e,o){1&e&&(c.Xb(0,"p"),c.uc(1,"Ningun Avatar seleccionado"),c.Wb())}function s(e,o){1&e&&(c.Xb(0,"p"),c.uc(1,"Avatar 1 seleccionado"),c.Wb())}function g(e,o){1&e&&(c.Xb(0,"p"),c.uc(1,"Avatar 2 seleccionado"),c.Wb())}function m(e,o){1&e&&(c.Xb(0,"p"),c.uc(1,"Avatar 3 seleccionado"),c.Wb())}function p(e,o){1&e&&(c.Xb(0,"p"),c.uc(1,"Avatar 4 seleccionado"),c.Wb())}const f=function(e){return{"is-invalid":e}};let h=(()=>{class e{constructor(e,o,r,n){this.formBuilder=e,this.servi=o,this.Router=r,this.route=n,this.usuario={Nombre:"",Apellido:"",TipoDocumento:"",NumeroDocumento:"",LugarExpedicion:"",CorreoElectronico:"",Clave:"",Icono_url:"",VerificacionCuenta:"",EstadoCuenta:"",RolId:"",Imagen_documento:""}}ngOnInit(){this.id=this.route.snapshot.params.id,this.servi.getu("/"+this.id).subscribe(e=>{this.usuario=e})}guardar({value:e}){""==this.usuario.Nombre||""==this.usuario.Apellido||""==this.usuario.TipoDocumento||""==this.usuario.NumeroDocumento||""==this.usuario.LugarExpedicion||""==this.usuario.CorreoElectronico||""==this.usuario.Clave||""==this.usuario.RolId||""==this.usuario.VerificacionCuenta||""==this.usuario.EstadoCuenta?(console.log(this.usuario.Nombre),u.a.fire("Por favor llene todos los campos!","Usuario no  Editado!","error")):""==this.usuario.Icono_url?u.a.fire("Por favor seleccione un icono para el usuario!","Usuario no  Editado!","error"):u.a.fire({title:"Esta seguro?",text:"Desea guardar los cambios?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, guardar!"}).then(o=>{o.value&&(u.a.fire("Guardado!","El usuario ha sido Actualizado ","success"),e.Id=this.id,this.servi.update(e,this.id))})}}return e.\u0275fac=function(o){return new(o||e)(c.Sb(a.b),c.Sb(t.a),c.Sb(l.b),c.Sb(l.a))},e.\u0275cmp=c.Mb({type:e,selectors:[["app-editar-u"]],decls:126,vars:46,consts:[["id","main-header",1,"py-2","bg-info","text-white"],[1,"container"],[1,"row"],[1,"col-md-6"],[3,"ngSubmit"],["usuarioForm","ngForm"],["id","actions",1,"py-4","mb-4","bg-light"],[1,"col-md-3"],["routerLink","/usuarios",1,"btn","btn-dark","text-white","btn-block"],["type","submit",1,"btn","btn-success","btn-block"],["id","details"],[1,"col-md-6","mx-auto"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-group"],["for","nombre"],["type","text","name","nombre","required","","minlength","2",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["nombre","ngModel"],[1,"invalid-feedback",3,"hidden"],["for","apellido"],["type","text","name","apellido","required","","minlength","2",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["apellido","ngModel"],["for","tipoDocumento"],["name","tipoDocumento",1,"form-control",3,"ngModel","ngModelChange"],["tipoDocumento","ngModel"],["selected",""],["for","numeroDocumento"],["type","text","name","numeroDocumento","required","","minlength","10",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["numeroDocumento","ngModel"],["for","lugarExpedicion"],["type","text","name","lugarExpedicion","required","","minlength","1",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["lugarExpedicion","ngModel"],["for","correoElectronico"],["type","email","name","correoElectronico","pattern","^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$","required","","minlength","4",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["correoElectronico","ngModel"],["for","clave"],["type","text","name","clave","required","","minlength","8",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["clave","ngModel"],[3,"avatarSelected"],[4,"ngIf"],["type","hidden","name","icono_url",3,"ngModel","ngModelChange"],["for","VerificacionCuenta"],["name","VerificacionCuenta",1,"form-control",3,"ngModel","ngModelChange"],["VerificacionCuenta","ngModel"],["for"," EstadoCuenta"],["name","EstadoCuenta",1,"form-control",3,"ngModel","ngModelChange"],["EstadoCuenta","ngModel"],["for","RolId"],["name","RolId",1,"form-control",3,"ngModel","ngModelChange"],["RolId","ngModel"]],template:function(e,o){if(1&e){const e=c.Yb();c.Xb(0,"header",0),c.Xb(1,"div",1),c.Xb(2,"div",2),c.Xb(3,"div",3),c.Xb(4,"h1"),c.uc(5," Editar Usuario "),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(6,"form",4,5),c.fc("ngSubmit",(function(){c.qc(e);const r=c.pc(7);return o.guardar(r)})),c.Xb(8,"section",6),c.Xb(9,"div",1),c.Xb(10,"div",2),c.Xb(11,"div",7),c.Xb(12,"a",8),c.uc(13," Regresar al Inicio "),c.Wb(),c.Wb(),c.Xb(14,"div",7),c.Xb(15,"button",9),c.uc(16," Guardar cambios "),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Xb(17,"section",10),c.Xb(18,"div",1),c.Xb(19,"div",2),c.Xb(20,"div",11),c.Xb(21,"div",12),c.Xb(22,"div",13),c.Xb(23,"h4"),c.uc(24,"En este formulario puede cambiar los datos segun el usuario seleccionado "),c.Wb(),c.Wb(),c.Xb(25,"div",14),c.Xb(26,"div",15),c.Xb(27,"label",16),c.uc(28,"Escriba el Nombre del usuario"),c.Wb(),c.Xb(29,"input",17,18),c.fc("ngModelChange",(function(e){return o.usuario.Nombre=e})),c.Wb(),c.Xb(31,"div",19),c.uc(32," Nombre requerido "),c.Wb(),c.Xb(33,"div",19),c.uc(34," Debe contener al menos 2 caracteres "),c.Wb(),c.Wb(),c.Xb(35,"div",15),c.Xb(36,"label",20),c.uc(37,"Escriba el apellido del usuario"),c.Wb(),c.Xb(38,"input",21,22),c.fc("ngModelChange",(function(e){return o.usuario.Apellido=e})),c.Wb(),c.Xb(40,"div",19),c.uc(41," apellido requerido "),c.Wb(),c.Xb(42,"div",19),c.uc(43," Debe contener al menos 2 caracteres "),c.Wb(),c.Wb(),c.Xb(44,"div",15),c.Xb(45,"label",23),c.uc(46,"seleccione el tipo de documento del usuario"),c.Wb(),c.Xb(47,"select",24,25),c.fc("ngModelChange",(function(e){return o.usuario.TipoDocumento=e})),c.Xb(49,"option",26),c.uc(50,"CC"),c.Wb(),c.Xb(51,"option"),c.uc(52,"CE"),c.Wb(),c.Xb(53,"option"),c.uc(54,"TI"),c.Wb(),c.Wb(),c.Wb(),c.Xb(55,"div",15),c.Xb(56,"label",27),c.uc(57,"Escriba el numero de documento del usuario"),c.Wb(),c.Xb(58,"input",28,29),c.fc("ngModelChange",(function(e){return o.usuario.NumeroDocumento=e})),c.Wb(),c.Xb(60,"div",19),c.uc(61," numero de documento requerido "),c.Wb(),c.Xb(62,"div",19),c.uc(63," Debe contener al menos 10 caracteres "),c.Wb(),c.Wb(),c.Xb(64,"div",15),c.Xb(65,"label",30),c.uc(66,"Escriba el lugar de Expedicion del documento"),c.Wb(),c.Xb(67,"input",31,32),c.fc("ngModelChange",(function(e){return o.usuario.LugarExpedicion=e})),c.Wb(),c.Xb(69,"div",19),c.uc(70," lugar de expedicion requerido "),c.Wb(),c.Xb(71,"div",19),c.uc(72," Debe contener al menos 2 caracteres "),c.Wb(),c.Wb(),c.Xb(73,"div",15),c.Xb(74,"label",33),c.uc(75,"Escriba el correo electronico del usuario"),c.Wb(),c.Xb(76,"input",34,35),c.fc("ngModelChange",(function(e){return o.usuario.CorreoElectronico=e})),c.Wb(),c.Xb(78,"div",19),c.uc(79," correo electronico requerido "),c.Wb(),c.Xb(80,"div",19),c.uc(81," Debe contener al menos 4 caracteres "),c.Wb(),c.Wb(),c.Xb(82,"div",15),c.Xb(83,"label",36),c.uc(84,"Digite la clave para el usuario"),c.Wb(),c.Xb(85,"input",37,38),c.fc("ngModelChange",(function(e){return o.usuario.Clave=e})),c.Wb(),c.Xb(87,"div",19),c.uc(88," clave requerida "),c.Wb(),c.Xb(89,"div",19),c.uc(90," Debe contener al menos 8 caracteres "),c.Wb(),c.Wb(),c.Xb(91,"div",15),c.Xb(92,"app-avatar-selector",39),c.fc("avatarSelected",(function(e){return o.usuario.Icono_url=e})),c.Wb(),c.tc(93,b,2,0,"p",40),c.tc(94,s,2,0,"p",40),c.tc(95,g,2,0,"p",40),c.tc(96,m,2,0,"p",40),c.tc(97,p,2,0,"p",40),c.Xb(98,"input",41),c.fc("ngModelChange",(function(e){return o.usuario.Icono_url=e})),c.Wb(),c.Wb(),c.Xb(99,"div",15),c.Xb(100,"label",42),c.uc(101," seleccione la verificacion en la Cuenta del usuario"),c.Wb(),c.Xb(102,"select",43,44),c.fc("ngModelChange",(function(e){return o.usuario.VerificacionCuenta=e})),c.Xb(104,"option",26),c.uc(105,"true"),c.Wb(),c.Xb(106,"option"),c.uc(107,"false"),c.Wb(),c.Wb(),c.Wb(),c.Xb(108,"div",15),c.Xb(109,"label",45),c.uc(110,"seleccione el estado de cuenta"),c.Wb(),c.Xb(111,"select",46,47),c.fc("ngModelChange",(function(e){return o.usuario.EstadoCuenta=e})),c.Xb(113,"option",26),c.uc(114,"true"),c.Wb(),c.Xb(115,"option"),c.uc(116,"false"),c.Wb(),c.Wb(),c.Wb(),c.Xb(117,"div",15),c.Xb(118,"label",48),c.uc(119,"Seleccione el rol Id del ususario , teniendo en cuenta que 2 es usuario comun y 3 empleado"),c.Wb(),c.Xb(120,"select",49,50),c.fc("ngModelChange",(function(e){return o.usuario.RolId=e})),c.Xb(122,"option",26),c.uc(123,"2"),c.Wb(),c.Xb(124,"option"),c.uc(125,"3"),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb(),c.Wb()}if(2&e){const e=c.pc(30),r=c.pc(39),n=c.pc(59),i=c.pc(68),u=c.pc(77),a=c.pc(86);c.Hb(29),c.kc("ngModel",o.usuario.Nombre)("ngClass",c.nc(34,f,e.errors&&e.touched)),c.Hb(2),c.kc("hidden",!(null!=e.errors&&e.errors.required)),c.Hb(2),c.kc("hidden",!(null!=e.errors&&e.errors.minlength)),c.Hb(5),c.kc("ngModel",o.usuario.Apellido)("ngClass",c.nc(36,f,r.errors&&r.touched)),c.Hb(2),c.kc("hidden",!(null!=r.errors&&r.errors.required)),c.Hb(2),c.kc("hidden",!(null!=r.errors&&r.errors.minlength)),c.Hb(5),c.kc("ngModel",o.usuario.TipoDocumento),c.Hb(11),c.kc("ngModel",o.usuario.NumeroDocumento)("ngClass",c.nc(38,f,n.errors&&n.touched)),c.Hb(2),c.kc("hidden",!(null!=n.errors&&n.errors.required)),c.Hb(2),c.kc("hidden",!(null!=n.errors&&n.errors.minlength)),c.Hb(5),c.kc("ngModel",o.usuario.LugarExpedicion)("ngClass",c.nc(40,f,i.errors&&i.touched)),c.Hb(2),c.kc("hidden",!(null!=i.errors&&i.errors.required)),c.Hb(2),c.kc("hidden",!(null!=i.errors&&i.errors.minlength)),c.Hb(5),c.kc("ngModel",o.usuario.CorreoElectronico)("ngClass",c.nc(42,f,u.errors&&u.touched)),c.Hb(2),c.kc("hidden",!(null!=u.errors&&u.errors.required)),c.Hb(2),c.kc("hidden",!(null!=u.errors&&u.errors.minlength)),c.Hb(5),c.kc("ngModel",o.usuario.Clave)("ngClass",c.nc(44,f,a.errors&&a.touched)),c.Hb(2),c.kc("hidden",!(null!=a.errors&&a.errors.required)),c.Hb(2),c.kc("hidden",!(null!=a.errors&&a.errors.minlength)),c.Hb(4),c.kc("ngIf",""==o.usuario.Icono_url),c.Hb(1),c.kc("ngIf","av-1.png"==o.usuario.Icono_url),c.Hb(1),c.kc("ngIf","av-2.png"==o.usuario.Icono_url),c.Hb(1),c.kc("ngIf","av-3.png"==o.usuario.Icono_url),c.Hb(1),c.kc("ngIf","av-4.png"==o.usuario.Icono_url),c.Hb(1),c.kc("ngModel",o.usuario.Icono_url),c.Hb(4),c.kc("ngModel",o.usuario.VerificacionCuenta),c.Hb(9),c.kc("ngModel",o.usuario.EstadoCuenta),c.Hb(9),c.kc("ngModel",o.usuario.RolId)}},directives:[a.s,a.h,a.i,l.c,a.a,a.o,a.f,a.g,a.j,n.i,a.p,a.k,a.r,a.m,d.a,n.k],styles:[""]}),e})();var X=r("iTUp"),W=r("j1ZV");r.d(o,"EditarUModule",(function(){return v}));let v=(()=>{class e{}return e.\u0275mod=c.Qb({type:e}),e.\u0275inj=c.Pb({factory:function(o){return new(o||e)},imports:[[n.b,a.e,W.a,X.a,l.d.forChild([{path:"",component:h}])]]}),e})()}}]);