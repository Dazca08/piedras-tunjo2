(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{SJOR:function(c,t,i){"use strict";i.r(t);var e=i("ofXK"),n=i("fXoL"),o=i("tyNb"),r=i("IQXR"),a=i("oOf3");function b(c,t){if(1&c&&(n.ac(0,"div",15),n.ac(1,"div",16),n.ac(2,"div",17),n.ac(3,"h4"),n.Cc(4," Tipo"),n.Zb(),n.Zb(),n.ac(5,"div",18),n.ac(6,"p"),n.ac(7,"b"),n.Cc(8),n.Zb(),n.Wb(9,"br"),n.ac(10,"b"),n.Cc(11),n.Zb(),n.Wb(12,"br"),n.ac(13,"b"),n.Cc(14),n.Zb(),n.Zb(),n.ac(15,"div",9),n.ac(16,"div",3),n.ac(17,"a",19),n.Cc(18,"Editar"),n.Zb(),n.Zb(),n.Zb(),n.Zb(),n.Zb(),n.Zb()),2&c){const c=t.$implicit;n.Jb(8),n.Ec(" ",c.Nombre," "),n.Jb(3),n.Ec(" $",c.Precio," "),n.Jb(3),n.Ec(" ",c.Descripcion," "),n.Jb(3),n.tc("routerLink","/tickets/editar/",c.Id,"")}}let s=(()=>{class c{constructor(c,t){this.router=c,this.ServicioTicket=t,this.ticketes={Id:"",Nombre:"",Precio:"",Descripcion:""},this.PageActual=1}ngOnInit(){this.ObtenerTickets()}ObtenerTickets(){this.ServicioTicket.ObtenerTicket().subscribe(c=>{this.tickets=c,console.log("Informacion ya tiene resultado"),console.log(this.tickets.length)},c=>{console.log(JSON.stringify(c))})}inhabilitar(c){console.log(c);var t=this.ServicioTicket.Habilitar(c,2);this.ObtenerTickets(),t&&(this.ObtenerTickets(),this.ngOnInit())}}return c.\u0275fac=function(t){return new(t||c)(n.Vb(o.b),n.Vb(r.a))},c.\u0275cmp=n.Pb({type:c,selectors:[["app-inicio"]],decls:23,vars:1,consts:[["id","main-header",1,"py-2","bg-info","text-white"],[1,"container"],[1,"row"],[1,"col-md-6"],["align","center"],[1,"boton_linea"],["routerLink","/tickets/agregar","role","button",1,"btn","btn-success","btn-block"],[1,"fas","fa-plus"],["id","Ticketes",1,"bg-transparent"],[1,"row","center"],[1,"col-md-12"],[1,"row","row-cols-1","row-cols-md-3"],["class","col-md-4 col-sm-6 col-xs-12",4,"ngFor","ngForOf"],[1,"text-center"],[3,"pageChange"],[1,"col-md-4","col-sm-6","col-xs-12"],[1,"card","h-100"],[1,"card-header","text-center"],[1,"car-body","container","text-center"],[1,"btn","btn-info","btn-block",3,"routerLink"]],template:function(c,t){1&c&&(n.ac(0,"header",0),n.ac(1,"div",1),n.ac(2,"div",2),n.ac(3,"div",3),n.ac(4,"div",4),n.ac(5,"h1"),n.Cc(6," Gestion De Tipos de Ticket "),n.Zb(),n.Zb(),n.Zb(),n.Zb(),n.Zb(),n.ac(7,"div",5),n.ac(8,"div",5),n.ac(9,"a",6),n.Wb(10,"i",7),n.Cc(11," Agregar"),n.Zb(),n.Zb(),n.Zb(),n.Zb(),n.ac(12,"section",8),n.Wb(13,"br"),n.ac(14,"div",1),n.ac(15,"div",9),n.Wb(16,"br"),n.ac(17,"div",10),n.ac(18,"div",11),n.Bc(19,b,19,4,"div",12),n.Zb(),n.Wb(20,"br"),n.ac(21,"div",13),n.ac(22,"pagination-controls",14),n.ic("pageChange",(function(c){return t.PageActual=c})),n.Zb(),n.Zb(),n.Zb(),n.Zb(),n.Zb(),n.Zb()),2&c&&(n.Jb(19),n.rc("ngForOf",t.tickets))},directives:[o.d,e.l,a.c],styles:[".boton_linea[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;text-align:center;padding-left:18px}"]}),c})();i.d(t,"InicioModule",(function(){return l}));let l=(()=>{class c{}return c.\u0275mod=n.Tb({type:c}),c.\u0275inj=n.Sb({factory:function(t){return new(t||c)},imports:[[e.b,a.a,o.e.forChild([{path:"",component:s}])]]}),c})()}}]);