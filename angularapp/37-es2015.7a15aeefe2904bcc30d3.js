(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{Qj6N:function(e,n,t){"use strict";t.r(n);var r=t("ofXK"),i=t("PSD3"),a=t.n(i),c=t("fXoL"),o=t("4SiG"),s=t("3Pt+"),d=t("oOf3");let u=(()=>{class e{transform(e,n){if(""===n||n.length<3)return e;const t=[];for(const r of e)r.nombre.toLowerCase().indexOf(n.toLowerCase())>-1&&t.push(r);return console.log(t),t}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=c.Ub({name:"filtern",type:e,pure:!0}),e})();function b(e,n){1&e&&(c.ac(0,"div"),c.Wb(1,"hr"),c.ac(2,"div"),c.ac(3,"h6"),c.Dc(4,"Lo sentimos en este momento no existen Preguntas frecuentes "),c.Zb(),c.Zb(),c.Zb())}function g(e,n){if(1&e){const e=c.bc();c.ac(0,"div",19),c.ac(1,"div",20),c.ac(2,"div",21),c.ac(3,"h5"),c.Wb(4,"i",22),c.Dc(5),c.Zb(),c.Zb(),c.ac(6,"div",23),c.ac(7,"form",24,25),c.ic("ngSubmit",(function(){c.yc(e);const n=c.xc(8);return c.kc(2).guardar(n)})),c.ac(9,"p",26),c.Wb(10,"i",27),c.Dc(11," Pregunta "),c.Zb(),c.ac(12,"textarea",28),c.ic("ngModelChange",(function(t){return c.yc(e),n.$implicit.nombre=t})),c.Zb(),c.ac(13,"input",29,30),c.ic("ngModelChange",(function(t){return c.yc(e),n.$implicit.nombre=t})),c.Zb(),c.Wb(15,"hr"),c.ac(16,"p",26),c.Wb(17,"i",27),c.Dc(18," Descripcion "),c.Zb(),c.ac(19,"textarea",31),c.ic("ngModelChange",(function(t){return c.yc(e),n.$implicit.descripcion=t})),c.Zb(),c.Wb(20,"br"),c.ac(21,"input",32,33),c.ic("ngModelChange",(function(t){return c.yc(e),n.$implicit.descripcion=t})),c.Zb(),c.ac(23,"input",34,35),c.ic("ngModelChange",(function(t){return c.yc(e),n.$implicit.id=t})),c.Zb(),c.Wb(25,"br"),c.ac(26,"div",2),c.ac(27,"div",36),c.ac(28,"div",4),c.ac(29,"form",37),c.ic("submit",(function(){c.yc(e);const t=n.$implicit;return c.kc(2).eliminar(t.id)})),c.ac(30,"button",38),c.Wb(31,"i",39),c.Dc(32," Eliminar "),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.ac(33,"div",36),c.ac(34,"div",4),c.ac(35,"button",40),c.Wb(36,"i",41),c.Dc(37," Editar "),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb()}if(2&e){const e=n.$implicit;c.Jb(5),c.Fc(" Pregunta: ",e.nombre,""),c.Jb(7),c.rc("ngModel",e.nombre),c.Jb(1),c.rc("ngModel",e.nombre),c.Jb(6),c.rc("ngModel",e.descripcion),c.Jb(2),c.rc("ngModel",e.descripcion),c.Jb(2),c.rc("ngModel",e.id)}}const l=function(e){return{itemsPerPage:3,currentPage:e}};function p(e,n){if(1&e){const e=c.bc();c.ac(0,"div"),c.ac(1,"section",13),c.ac(2,"div",1),c.ac(3,"div",14),c.ac(4,"div",15),c.Bc(5,g,38,6,"div",16),c.lc(6,"paginate"),c.lc(7,"filtern"),c.Zb(),c.ac(8,"div",17),c.ac(9,"pagination-controls",18),c.ic("pageChange",(function(n){return c.yc(e),c.kc().PageActual=n})),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb()}if(2&e){const e=c.kc();c.Jb(5),c.rc("ngForOf",c.nc(6,1,c.nc(7,4,e.preguntas,e.filterPregunta),c.uc(7,l,e.PageActual)))}}let f=(()=>{class e{constructor(e){this.servi=e,this.pregunta={nombre:"",descripcion:""},this.PageActual=1,this.filterPregunta="",this.i=0}ObtenerPreguntas(){this.servi.ObtenerJson().subscribe(e=>{this.preguntas=e},e=>{console.log(JSON.stringify(e))})}ngOnInit(){this.ObtenerPreguntas()}eliminar(e){a.a.fire({title:"Esta seguro?",text:"Al eliminar una pregunta no se podra recuperar!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, Borrar!"}).then(n=>{n.value&&(a.a.fire("Borrado!","La pregunta ha sido eliminado.","success"),this.servi.Eliminar(e),this.refrescar())})}refrescar(){this.ObtenerPreguntas(),this.ObtenerPreguntas(),this.ngOnInit()}guardar({value:e}){""==e.nombre||""==e.descripcion?a.a.fire("Por favor llene todos los campos!","pregunta no editada!","error"):e.nombre.length<5||e.descripcion.length<10?a.a.fire("la pregunta debe tener al menos 5 caracteres y la descripcion al menos 10!","pregunta no editada!","error"):a.a.fire({title:"Esta seguro?",text:"Desea editar esta pregunta?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, guardar!"}).then(n=>{n.value&&this.comparacion(e)})}comparacion(e){var n="no existe";this.servi.ObtenerJson().subscribe(t=>{for(this.preguntastemp=t,this.i=0;this.i<this.preguntastemp.length;this.i++)e.id!=this.preguntastemp[this.i].id&&e.descripcion.toLowerCase()==this.preguntastemp[this.i].descripcion.toLowerCase()?n="existe":e.id!=this.preguntastemp[this.i].id&&e.nombre.toLowerCase()==this.preguntastemp[this.i].nombre.toLowerCase()&&(n="existe p");"existe"==n?(a.a.fire("La descripcion  ya existe para otra pregunta","Pregunta no agregada","error"),this.refrescar()):"existe p"==n?(a.a.fire("La pregunta  ya existe ","Pregunta no agregada","error"),this.refrescar()):(a.a.fire("Guardado!","La pregunta ha sido editada ","success"),this.servi.update(e,e.id))})}}return e.\u0275fac=function(n){return new(n||e)(c.Vb(o.a))},e.\u0275cmp=c.Pb({type:e,selectors:[["app-inicio-p"]],decls:26,vars:4,consts:[["id","main-header",1,"py-2","bg-info","text-white"],[1,"container"],[1,"row"],[1,"col-md-4"],["align","center"],[1,"form-group"],["type","text","name","filterPregunta","placeholder","Buscar pregunta por nombre....",1,"form-control",3,"ngModel","ngModelChange"],[1,"fas","fa-list-ol"],[1,"display-4"],[1,"col-md-3"],["href","preguntas-frecuentes/agregar","role","button",1,"btn","btn-info"],[1,"fas","fa-plus"],[4,"ngIf"],["id","pqrs"],[1,"col-md-12"],[1,"row","row-cols-1","row-cols-md-3"],["class","col mb-4",4,"ngFor","ngForOf"],[1,"text-center"],[3,"pageChange"],[1,"col","mb-4"],[1,"card","h-100"],[1,"card-header"],[1,"fa","fa-question-circle"],[1,"car-body","container"],[3,"ngSubmit"],["preguntaForm","ngForm"],[1,"card-text"],[1,"fa","fa-pencil-alt"],["name","nombre","rows","2","cols","38",3,"ngModel","ngModelChange"],["type","hidden","name","nombre",1,"form-control",2,"width","285",3,"ngModel","ngModelChange"],["nombre","ngModel"],["name","descripcion","rows","4","cols","38",3,"ngModel","ngModelChange"],["type","hidden","name","descripcion",1,"form-control",3,"ngModel","ngModelChange"],["descripcion","ngModel"],["type","hidden","name","id",1,"form-control",3,"ngModel","ngModelChange"],["id","ngModel"],[1,"col-md-6"],[3,"submit"],["type","submit",1,"btn","btn-danger","btn-block",2,"width","130"],[1,"fas","fa-trash"],["type","submit",1,"btn","btn-primary","btn-block",2,"width","130"],[1,"fas","fa-edit"]],template:function(e,n){1&e&&(c.ac(0,"header",0),c.ac(1,"div",1),c.ac(2,"div",2),c.ac(3,"div",3),c.ac(4,"div",4),c.ac(5,"h1"),c.Dc(6," Preguntas Frecuentes "),c.Zb(),c.ac(7,"div",5),c.ac(8,"input",6),c.ic("ngModelChange",(function(e){return n.filterPregunta=e})),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.ac(9,"div",3),c.ac(10,"div",4),c.ac(11,"h3"),c.Wb(12,"i",7),c.Dc(13," Total preguntas frecuentes"),c.Zb(),c.ac(14,"h4",8),c.Dc(15),c.Zb(),c.Zb(),c.Zb(),c.ac(16,"div",9),c.ac(17,"div",4),c.Wb(18,"br"),c.ac(19,"a",10),c.ac(20,"h4"),c.Wb(21,"i",11),c.Dc(22," Nueva pregunta frecuente"),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Zb(),c.Wb(23,"br"),c.Bc(24,b,5,0,"div",12),c.Bc(25,p,10,9,"div",12)),2&e&&(c.Jb(8),c.rc("ngModel",n.filterPregunta),c.Jb(7),c.Fc(" ",null==n.preguntas?null:n.preguntas.length," "),c.Jb(9),c.rc("ngIf",0==n.preguntas.length),c.Jb(1),c.rc("ngIf",0!=n.preguntas.length))},directives:[s.a,s.g,s.j,r.m,r.l,d.c,s.s,s.h,s.i],pipes:[d.b,u],styles:[""]}),e})();var h=t("iTUp"),m=t("tyNb");t.d(n,"InicioPModule",(function(){return Z}));let Z=(()=>{class e{}return e.\u0275mod=c.Tb({type:e}),e.\u0275inj=c.Sb({factory:function(n){return new(n||e)},imports:[[r.b,s.e,d.a,h.a,m.e.forChild([{path:"",component:f}])]]}),e})()}}]);