(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{bNXj:function(o,e,r){"use strict";r.r(e);var n=r("ofXK"),a=r("PSD3"),i=r.n(a),c=r("fXoL"),u=r("3Pt+"),t=r("Tapi"),l=r("tyNb"),b=r("4r22");const d=["usuarioForm"];function s(o,e){1&o&&(c.Yb(0,"p"),c.zc(1,"Ningun Avatar seleccionado"),c.Xb())}function g(o,e){1&o&&(c.Yb(0,"p"),c.zc(1,"Avatar 1 seleccionado"),c.Xb())}function m(o,e){1&o&&(c.Yb(0,"p"),c.zc(1,"Avatar 2 seleccionado"),c.Xb())}function p(o,e){1&o&&(c.Yb(0,"p"),c.zc(1,"Avatar 3 seleccionado"),c.Xb())}function v(o,e){1&o&&(c.Yb(0,"p"),c.zc(1,"Avatar 4 seleccionado"),c.Xb())}function X(o,e){if(1&o&&(c.Yb(0,"option",91),c.zc(1),c.Xb()),2&o){const o=e.$implicit;c.nc("value",o.id),c.Hb(1),c.Ac(o.nombre)}}const Y=function(o){return{"is-invalid":o}};let h=(()=>{class o{constructor(o,e,r,n){this.formBuilder=o,this.servi=e,this.Router=r,this.route=n,this.usuario={Nombre:"",Apellido:"",TipoDocumento:"",NumeroDocumento:"",LugarExpedicion:"",CorreoElectronico:"",Clave:"",Icono_url:"",VerificacionCuenta:"",EstadoCuenta:"",RolId:"",Imagen_documento:""},this.rol={id:"",nombre:""}}ngOnInit(){this.servi.ObtenerRoles().subscribe(o=>{this.roles=o})}agregar({value:o}){console.log(this.usuario.CorreoElectronico),""==this.usuario.Nombre||""==this.usuario.Apellido||""==this.usuario.TipoDocumento||""==this.usuario.NumeroDocumento||""==this.usuario.LugarExpedicion||""==this.usuario.CorreoElectronico||""==this.usuario.Clave||""==this.usuario.RolId||""==this.usuario.VerificacionCuenta||""==this.usuario.EstadoCuenta?(console.log(this.usuario.Nombre),i.a.fire("Por favor llene todos los campos!","Usuario no  Agregado!","error")):""==this.usuario.Icono_url?i.a.fire("Por favor seleccione un icono para el usuario!","Usuario no  Agregado!","error"):(console.log(o),this.servi.insertar(o),this.refrescar())}refrescar(){this.usuario.Nombre="",this.usuario.Apellido="",this.usuario.TipoDocumento="",this.usuario.NumeroDocumento="",this.usuario.LugarExpedicion="",this.usuario.CorreoElectronico="",this.usuario.Icono_url="",this.usuario.VerificacionCuenta="",this.usuario.EstadoCuenta="",this.usuario.RolId=""}}return o.\u0275fac=function(e){return new(e||o)(c.Tb(u.b),c.Tb(t.a),c.Tb(l.b),c.Tb(l.a))},o.\u0275cmp=c.Nb({type:o,selectors:[["app-agregar-u"]],viewQuery:function(o,e){var r;1&o&&c.Dc(d,!0),2&o&&c.sc(r=c.hc())&&(e.usuarioForm=r.first)},decls:184,vars:47,consts:[[1,"container"],[1,"row",2,"padding-right","15%","padding-left","15%"],[1,"col-md-8"],[1,"col-md-4"],["routerLink","/usuarios",1,"btn","btn-dark","btn-block"],[1,"col-md-12",2,"padding-top","5%"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"ngSubmit"],["usuarioForm","ngForm"],[1,"form-row"],[1,"form-group","col-md-6"],["for","nombre"],["type","text","name","nombre","required","","minlength","2",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["nombre","ngModel"],[1,"invalid-feedback",3,"hidden"],["for","apellido"],["type","text","name","apellido","required","","minlength","2",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["apellido","ngModel"],[1,"form-gruop","col-md-3"],["for","tipoDocumento"],["name","tipoDocumento",1,"form-control",3,"ngModel","ngModelChange"],["tipoDocumento","ngModel"],["selected",""],[1,"form-gruop","col-md-5"],["for","numeroDocumento"],["type","text","name","numeroDocumento","required","","minlength","10",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["numeroDocumento","ngModel"],[1,"form-gruop","col-md-4"],["for","lugarExpedicion"],["name","lugarExpedicion",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["lugarExpedicion","ngModel"],["value","","selected",""],["value","Amazonas"],["value","Antioquia"],["value","Arauca"],["value","Atlantico"],["value","Bolivar"],["value","Boyaca"],["value","Caldas"],["value","Caqueta"],["value","Casanare"],["value","Cauca"],["value","Cesar"],["value","Choco"],["value","Cordona"],["value","Facatativa"],["value","Bogota"],["value","Guania"],["value","Guaviare"],["value","Huila"],["value","Guajira"],["value","Magdalena"],["value","Meta"],["value","Nari\xf1o"],["value","NorteSantander"],["value","Putumayo"],["value","Quindio"],["value","Risaralda"],["value","SanAndres"],["value","Santander"],["value","Sucre"],["value","ValleCauca"],["value","Vaupes"],["value","Vichada"],[1,"form-gruop","col-md-6"],["for","correoElectronico"],["type","email","name","correoElectronico","pattern","^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$","required","","minlength","4",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["correoElectronico","ngModel"],["for","clave"],["type","text","name","clave","required","","minlength","8",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["clave","ngModel"],[1,"form-group","col-md-12"],[3,"avatarSelected"],[4,"ngIf"],["type","hidden","name","icono_url",3,"ngModel","ngModelChange"],["for","VerificacionCuenta"],["name","VerificacionCuenta",1,"form-control",3,"ngModel","ngModelChange"],["VerificacionCuenta","ngModel"],["value","true","selected",""],["value","false"],["for"," EstadoCuenta"],["name","EstadoCuenta",1,"form-control",3,"ngModel","ngModelChange"],["EstadoCuenta","ngModel"],["for","RolId"],["name","RolId",1,"form-control",3,"ngModel","ngModelChange"],["RolId","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-12"],["type","submit",1,"btn","btn-success","btn-block"],[3,"value"]],template:function(o,e){if(1&o){const o=c.Zb();c.Yb(0,"section"),c.Yb(1,"div",0),c.Yb(2,"div",1),c.Yb(3,"div",2),c.Yb(4,"h4"),c.zc(5,"Agregar Usuario"),c.Xb(),c.Xb(),c.Yb(6,"div",3),c.Yb(7,"a",4),c.zc(8,"Regresar al Inicio"),c.Xb(),c.Xb(),c.Yb(9,"div",5),c.Yb(10,"div",6),c.Yb(11,"div",7),c.Yb(12,"h5"),c.zc(13,"Por favor diligencie este formulario para crear un usuario."),c.Xb(),c.Xb(),c.Yb(14,"div",8),c.Yb(15,"form",9,10),c.gc("ngSubmit",(function(){c.uc(o);const r=c.tc(16);return e.agregar(r)})),c.Yb(17,"div",11),c.Yb(18,"div",12),c.Yb(19,"label",13),c.zc(20,"Nombre del usuario"),c.Xb(),c.Yb(21,"input",14,15),c.gc("ngModelChange",(function(o){return e.usuario.Nombre=o})),c.Xb(),c.Yb(23,"div",16),c.zc(24,"Nombre requerido"),c.Xb(),c.Yb(25,"div",16),c.zc(26,"Debe contener al menos 2 caracteres"),c.Xb(),c.Xb(),c.Yb(27,"div",12),c.Yb(28,"label",17),c.zc(29,"Apellido del usuario"),c.Xb(),c.Yb(30,"input",18,19),c.gc("ngModelChange",(function(o){return e.usuario.Apellido=o})),c.Xb(),c.Yb(32,"div",16),c.zc(33,"Apellido requerido"),c.Xb(),c.Yb(34,"div",16),c.zc(35,"Debe contener al menos 2 caracteres"),c.Xb(),c.Xb(),c.Yb(36,"div",20),c.Yb(37,"label",21),c.zc(38,"Tipo de documento"),c.Xb(),c.Yb(39,"select",22,23),c.gc("ngModelChange",(function(o){return e.usuario.TipoDocumento=o})),c.Yb(41,"option",24),c.zc(42,"CC"),c.Xb(),c.Yb(43,"option"),c.zc(44,"CE"),c.Xb(),c.Yb(45,"option"),c.zc(46,"TI"),c.Xb(),c.Xb(),c.Xb(),c.Yb(47,"div",25),c.Yb(48,"label",26),c.zc(49,"Numero de documento"),c.Xb(),c.Yb(50,"input",27,28),c.gc("ngModelChange",(function(o){return e.usuario.NumeroDocumento=o})),c.Xb(),c.Yb(52,"div",16),c.zc(53,"Numero de documento requerido"),c.Xb(),c.Yb(54,"div",16),c.zc(55,"Debe contener al menos 10 caracteres"),c.Xb(),c.Xb(),c.Yb(56,"div",29),c.Yb(57,"label",30),c.zc(58,"Lugar de expedici\xf3n"),c.Xb(),c.Yb(59,"select",31,32),c.gc("ngModelChange",(function(o){return e.usuario.LugarExpedicion=o})),c.Yb(61,"option",33),c.zc(62,"Seleccionar"),c.Xb(),c.Yb(63,"option",34),c.zc(64,"Amazonas, Leticia"),c.Xb(),c.Yb(65,"option",35),c.zc(66,"Antioquia, Medell\xedn"),c.Xb(),c.Yb(67,"option",36),c.zc(68,"Arauca, Arauca"),c.Xb(),c.Yb(69,"option",37),c.zc(70,"Atl\xe1ntico, Barranquilla"),c.Xb(),c.Yb(71,"option",38),c.zc(72,"Bol\xedvar, Cartagena de Indias"),c.Xb(),c.Yb(73,"option",39),c.zc(74,"Boyac\xe1, Tunja"),c.Xb(),c.Yb(75,"option",40),c.zc(76,"Caldas, Manizales"),c.Xb(),c.Yb(77,"option",41),c.zc(78,"Caquet\xe1, Florencia"),c.Xb(),c.Yb(79,"option",42),c.zc(80,"Casanare, Yopal"),c.Xb(),c.Yb(81,"option",43),c.zc(82,"Cauca, Popay\xe1n"),c.Xb(),c.Yb(83,"option",44),c.zc(84,"Cesar, Valledupar"),c.Xb(),c.Yb(85,"option",45),c.zc(86,"Choc\xf3, Quibd\xf3"),c.Xb(),c.Yb(87,"option",46),c.zc(88,"C\xf3rdoba, Monter\xeda"),c.Xb(),c.Yb(89,"option",47),c.zc(90,"Cundinamarca, Facatativa"),c.Xb(),c.Yb(91,"option",48),c.zc(92,"Cundinamarca, Bogot\xe1"),c.Xb(),c.Yb(93,"option",49),c.zc(94,"Guain\xeda, In\xedrida"),c.Xb(),c.Yb(95,"option",50),c.zc(96,"Guaviare, San Jos\xe9 del Guaviare"),c.Xb(),c.Yb(97,"option",51),c.zc(98,"Huila, Neiva"),c.Xb(),c.Yb(99,"option",52),c.zc(100,"La Guajira, Riohacha"),c.Xb(),c.Yb(101,"option",53),c.zc(102,"Magdalena, Santa Marta"),c.Xb(),c.Yb(103,"option",54),c.zc(104,"Meta, Villavicencio"),c.Xb(),c.Yb(105,"option",55),c.zc(106,"Nari\xf1o, Pasto"),c.Xb(),c.Yb(107,"option",56),c.zc(108,"Norte de Santander, San Jos\xe9 de C\xfacuta"),c.Xb(),c.Yb(109,"option",57),c.zc(110,"Putumayo, Mocoa"),c.Xb(),c.Yb(111,"option",58),c.zc(112,"Quind\xedo, Armenia"),c.Xb(),c.Yb(113,"option",59),c.zc(114,"Risaralda, Pereira"),c.Xb(),c.Yb(115,"option",60),c.zc(116,"San Andr\xe9s y Providencia, San Andr\xe9s"),c.Xb(),c.Yb(117,"option",61),c.zc(118,"Santander, Bucaramanga"),c.Xb(),c.Yb(119,"option",62),c.zc(120,"Sucre, Sincelejo"),c.Xb(),c.Yb(121,"option",63),c.zc(122,"Valle del Cauca, Caoption"),c.Xb(),c.Yb(123,"option",64),c.zc(124,"Vaup\xe9s, Mit\xfa"),c.Xb(),c.Yb(125,"option",65),c.zc(126,"Vichada, Puerto Carre\xf1o"),c.Xb(),c.Xb(),c.Yb(127,"div",16),c.zc(128,"Lugar de expedici\xf3n requerido"),c.Xb(),c.Yb(129,"div",16),c.zc(130,"Debe contener al menos 2 caracteres"),c.Xb(),c.Xb(),c.Yb(131,"div",66),c.Yb(132,"label",67),c.zc(133,"Escriba el correo electronico del usuario"),c.Xb(),c.Yb(134,"input",68,69),c.gc("ngModelChange",(function(o){return e.usuario.CorreoElectronico=o})),c.Xb(),c.Yb(136,"div",16),c.zc(137,"Correo electronico requerido"),c.Xb(),c.Yb(138,"div",16),c.zc(139,"Debe contener al menos 4 caracteres"),c.Xb(),c.Xb(),c.Yb(140,"div",66),c.Yb(141,"label",70),c.zc(142,"Contrase\xf1a del usuario"),c.Xb(),c.Yb(143,"input",71,72),c.gc("ngModelChange",(function(o){return e.usuario.Clave=o})),c.Xb(),c.Yb(145,"div",16),c.zc(146,"Clave requerida"),c.Xb(),c.Yb(147,"div",16),c.zc(148,"Debe contener al menos 8 caracteres"),c.Xb(),c.Xb(),c.Yb(149,"div",73),c.Yb(150,"app-avatar-selector",74),c.gc("avatarSelected",(function(o){return e.usuario.Icono_url=o})),c.Xb(),c.xc(151,s,2,0,"p",75),c.xc(152,g,2,0,"p",75),c.xc(153,m,2,0,"p",75),c.xc(154,p,2,0,"p",75),c.xc(155,v,2,0,"p",75),c.Yb(156,"input",76),c.gc("ngModelChange",(function(o){return e.usuario.Icono_url=o})),c.Xb(),c.Xb(),c.Yb(157,"div",12),c.Yb(158,"label",77),c.zc(159,"Verificacion en la Cuenta del usuario"),c.Xb(),c.Yb(160,"select",78,79),c.gc("ngModelChange",(function(o){return e.usuario.VerificacionCuenta=o})),c.Yb(162,"option",80),c.zc(163,"Activado"),c.Xb(),c.Yb(164,"option",81),c.zc(165,"Desactivado"),c.Xb(),c.Xb(),c.Xb(),c.Yb(166,"div",12),c.Yb(167,"label",82),c.zc(168,"Estado de cuenta"),c.Xb(),c.Yb(169,"select",83,84),c.gc("ngModelChange",(function(o){return e.usuario.EstadoCuenta=o})),c.Yb(171,"option",80),c.zc(172,"Activado"),c.Xb(),c.Yb(173,"option",81),c.zc(174,"Desactivado"),c.Xb(),c.Xb(),c.Xb(),c.Yb(175,"div",73),c.Yb(176,"label",85),c.zc(177,"Seleccione el rol del ususario"),c.Xb(),c.Yb(178,"select",86,87),c.gc("ngModelChange",(function(o){return e.usuario.RolId=o})),c.xc(180,X,2,2,"option",88),c.Xb(),c.Xb(),c.Yb(181,"div",89),c.Yb(182,"button",90),c.zc(183,"Agregar Usuario"),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb(),c.Xb()}if(2&o){const o=c.tc(22),r=c.tc(31),n=c.tc(51),a=c.tc(60),i=c.tc(135),u=c.tc(144);c.Hb(21),c.mc("ngModel",e.usuario.Nombre)("ngClass",c.qc(35,Y,o.errors&&o.touched)),c.Hb(2),c.mc("hidden",!(null!=o.errors&&o.errors.required)),c.Hb(2),c.mc("hidden",!(null!=o.errors&&o.errors.minlength)),c.Hb(5),c.mc("ngModel",e.usuario.Apellido)("ngClass",c.qc(37,Y,r.errors&&r.touched)),c.Hb(2),c.mc("hidden",!(null!=r.errors&&r.errors.required)),c.Hb(2),c.mc("hidden",!(null!=r.errors&&r.errors.minlength)),c.Hb(5),c.mc("ngModel",e.usuario.TipoDocumento),c.Hb(11),c.mc("ngModel",e.usuario.NumeroDocumento)("ngClass",c.qc(39,Y,n.errors&&n.touched)),c.Hb(2),c.mc("hidden",!(null!=n.errors&&n.errors.required)),c.Hb(2),c.mc("hidden",!(null!=n.errors&&n.errors.minlength)),c.Hb(5),c.mc("ngModel",e.usuario.LugarExpedicion)("ngClass",c.qc(41,Y,a.errors&&a.touched)),c.Hb(68),c.mc("hidden",!(null!=a.errors&&a.errors.required)),c.Hb(2),c.mc("hidden",!(null!=a.errors&&a.errors.minlength)),c.Hb(5),c.mc("ngModel",e.usuario.CorreoElectronico)("ngClass",c.qc(43,Y,i.errors&&i.touched)),c.Hb(2),c.mc("hidden",!(null!=i.errors&&i.errors.required)),c.Hb(2),c.mc("hidden",!(null!=i.errors&&i.errors.minlength)),c.Hb(5),c.mc("ngModel",e.usuario.Clave)("ngClass",c.qc(45,Y,u.errors&&u.touched)),c.Hb(2),c.mc("hidden",!(null!=u.errors&&u.errors.required)),c.Hb(2),c.mc("hidden",!(null!=u.errors&&u.errors.minlength)),c.Hb(4),c.mc("ngIf",""==e.usuario.Icono_url),c.Hb(1),c.mc("ngIf","av-1.png"==e.usuario.Icono_url),c.Hb(1),c.mc("ngIf","av-2.png"==e.usuario.Icono_url),c.Hb(1),c.mc("ngIf","av-3.png"==e.usuario.Icono_url),c.Hb(1),c.mc("ngIf","av-4.png"==e.usuario.Icono_url),c.Hb(1),c.mc("ngModel",e.usuario.Icono_url),c.Hb(4),c.mc("ngModel",e.usuario.VerificacionCuenta),c.Hb(9),c.mc("ngModel",e.usuario.EstadoCuenta),c.Hb(9),c.mc("ngModel",e.usuario.RolId),c.Hb(2),c.mc("ngForOf",e.roles)}},directives:[l.d,u.s,u.h,u.i,u.a,u.o,u.f,u.g,u.j,n.i,u.p,u.k,u.r,u.m,b.a,n.k,n.j],styles:[""]}),o})();var f=r("iTUp"),C=r("j1ZV");r.d(e,"AgregarUModule",(function(){return z}));let z=(()=>{class o{}return o.\u0275mod=c.Rb({type:o}),o.\u0275inj=c.Qb({factory:function(e){return new(e||o)},imports:[[n.b,u.e,C.a,f.a,l.e.forChild([{path:"",component:h}])]]}),o})()}}]);