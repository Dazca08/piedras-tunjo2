(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{iZJW:function(c,i,t){"use strict";t.r(i);var e=t("ofXK"),o=t("fXoL"),n=t("tyNb"),b=t("IQXR"),a=t("oOf3");function r(c,i){if(1&c){const c=o.bc();o.ac(0,"div",14),o.ac(1,"div",15),o.ac(2,"div",16),o.ac(3,"h4"),o.Dc(4," Tipo"),o.Zb(),o.Zb(),o.ac(5,"div",17),o.ac(6,"p"),o.ac(7,"b"),o.Dc(8),o.Zb(),o.Wb(9,"br"),o.ac(10,"b"),o.Dc(11),o.Zb(),o.Wb(12,"br"),o.ac(13,"b"),o.Dc(14),o.Zb(),o.Zb(),o.ac(15,"div",8),o.ac(16,"div",3),o.ac(17,"form",18),o.ic("submit",(function(){o.yc(c);const t=i.$implicit;return o.kc().habilitar(t.Id)})),o.ac(18,"button",19),o.Dc(19," Habilitar "),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb()}if(2&c){const c=i.$implicit;o.Jb(8),o.Fc(" ",c.Nombre," "),o.Jb(3),o.Fc(" $",c.Precio," "),o.Jb(3),o.Fc(" ",c.Descripcion," ")}}let s=(()=>{class c{constructor(c,i){this.router=c,this.ServicioTicket=i,this.ticketes={Id:"",Nombre:"",Precio:"",Descripcion:""},this.PageActual=1,this.ObtenerTicketsRemovidos()}ngOnInit(){this.ObtenerTicketsRemovidos()}ObtenerTicketsRemovidos(){this.ServicioTicket.ObtenerTicketRemovidos().subscribe(c=>{this.tickets=c,console.log("Informacion ya tiene resultado"),console.log(this.tickets.length)},c=>{console.log(JSON.stringify(c))})}habilitar(c){console.log(c),this.ServicioTicket.Habilitar(c,1)}}return c.\u0275fac=function(i){return new(i||c)(o.Vb(n.b),o.Vb(b.a))},c.\u0275cmp=o.Pb({type:c,selectors:[["app-removidos"]],decls:22,vars:1,consts:[["id","main-header",1,"py-2","bg-info","text-white"],[1,"container"],[1,"row"],[1,"col-md-6"],[1,"boton_linea"],["routerLink","/tickets","role","button",1,"btn","btn-success","btn-block"],[1,"fa","fa-arrow-left"],["id","Removidos",1,"bg-transparent"],[1,"row","center"],[1,"col-md-12"],[1,"row","row-cols-1","row-cols-md-3"],["class","col-md-4 col-sm-6 col-xs-12",4,"ngFor","ngForOf"],[1,"text-center"],[3,"pageChange"],[1,"col-md-4","col-sm-6","col-xs-12"],[1,"card","h-100"],[1,"card-header","text-center"],[1,"car-body","container","text-center"],[3,"submit"],["type","submit",1,"btn","btn-danger","btn-block"]],template:function(c,i){1&c&&(o.ac(0,"header",0),o.ac(1,"div",1),o.ac(2,"div",2),o.ac(3,"div",3),o.ac(4,"div"),o.ac(5,"h1"),o.Dc(6," Gestion De Tipos de Tickets Removidos "),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.ac(7,"div",4),o.ac(8,"div",4),o.ac(9,"a",5),o.Wb(10,"i",6),o.Dc(11," Regresar"),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.ac(12,"section",7),o.Wb(13,"br"),o.ac(14,"div",1),o.ac(15,"div",8),o.Wb(16,"br"),o.ac(17,"div",9),o.ac(18,"div",10),o.Bc(19,r,20,3,"div",11),o.Zb(),o.ac(20,"div",12),o.ac(21,"pagination-controls",13),o.ic("pageChange",(function(c){return i.PageActual=c})),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb(),o.Zb()),2&c&&(o.Jb(19),o.rc("ngForOf",i.tickets))},directives:[n.d,e.l,a.c],styles:[".boton_linea[_ngcontent-%COMP%]{display:-webkit-inline-box;display:inline-flex;text-align:center;padding-left:18px}"]}),c})();t.d(i,"RemovidosModule",(function(){return d}));let d=(()=>{class c{}return c.\u0275mod=o.Tb({type:c}),c.\u0275inj=o.Sb({factory:function(i){return new(i||c)},imports:[[e.b,a.a,n.e.forChild([{path:"",component:s}])]]}),c})()}}]);