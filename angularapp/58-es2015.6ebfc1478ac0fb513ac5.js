(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{Qf2i:function(e,c,t){"use strict";t.r(c);var n=t("ofXK"),r=t("tyNb"),o=t("mrSG"),i=t("fXoL"),s=t("on2l"),a=t("Ojrs");function b(e,c){1&e&&(i.ac(0,"div",3),i.ac(1,"b",4),i.Cc(2,"No hay usuarios pendientes de revisi\xf3n"),i.Zb(),i.Zb())}function u(e,c){if(1&e&&(i.ac(0,"div",7),i.ac(1,"div",8),i.ac(2,"div",9),i.ac(3,"b",4),i.Cc(4,"N. documento:\xa0\xa0"),i.Zb(),i.Cc(5),i.Zb(),i.ac(6,"div",10),i.ac(7,"div",11),i.Wb(8,"img",12),i.lc(9,"imgServer"),i.Zb(),i.ac(10,"table",13),i.ac(11,"tr"),i.ac(12,"td"),i.ac(13,"b",4),i.Cc(14,"Nombre"),i.Zb(),i.Zb(),i.ac(15,"td"),i.Cc(16),i.Zb(),i.Zb(),i.ac(17,"tr"),i.ac(18,"td"),i.ac(19,"b",4),i.Cc(20,"Correo"),i.Zb(),i.Zb(),i.ac(21,"td"),i.Cc(22),i.lc(23,"slice"),i.Zb(),i.Zb(),i.Zb(),i.Zb(),i.ac(24,"div",14),i.ac(25,"button",15),i.Cc(26,"Verificar"),i.Zb(),i.Zb(),i.Zb(),i.Zb()),2&e){const e=c.$implicit;i.Jb(5),i.Ec(" ",e.NumeroDocumento," "),i.Jb(3),i.rc("src",i.nc(9,8,e.Icono_url,"avatar"),i.zc)("alt",e.NumeroDocumento),i.Jb(8),i.Fc("",e.Nombre," ",e.Apellido,""),i.Jb(6),i.Fc(" ",i.oc(23,11,e.CorreoElectronico,0,22)," ",e.CorreoElectronico.length>22?"...":""," "),i.Jb(3),i.tc("routerLink","/usuarios-pendientes/verificar/",e.Id,"")}}function d(e,c){if(1&e&&(i.ac(0,"div",5),i.Bc(1,u,27,15,"div",6),i.Zb()),2&e){const e=i.kc();i.Jb(1),i.rc("ngForOf",e.usuariosPendientes)}}let l=(()=>{class e{constructor(e){this.usuarioService=e}ngOnInit(){this.obtenerUsuarios()}obtenerUsuarios(){return Object(o.a)(this,void 0,void 0,(function*(){this.usuariosPendientes=yield this.usuarioService.getUsuarioPendientes()}))}}return e.\u0275fac=function(c){return new(c||e)(i.Vb(s.a))},e.\u0275cmp=i.Pb({type:e,selectors:[["app-usuarios-pendientes"]],decls:5,vars:2,consts:[[1,"text-muted","text-center","d-block"],["class","container",4,"ngIf"],["class","row justify-content-center mb-3",4,"ngIf"],[1,"container"],[1,"text-muted"],[1,"row","justify-content-center","mb-3"],["class","col-md-4 col-sm-6 col-xs-10 mb-3",4,"ngFor","ngForOf"],[1,"col-md-4","col-sm-6","col-xs-10","mb-3"],[1,"card","shadow"],[1,"card-header","text-center"],[1,"card-body"],[1,"container","text-center","mb-3"],["width","80px","height","80px",3,"src","alt"],[1,"table","table-sm"],[1,"card-footer","text-center"],[1,"btn","btn-sm","btn-primary",3,"routerLink"]],template:function(e,c){1&e&&(i.ac(0,"b",0),i.Cc(1,"USUARIOS PENDIENTES DE REVISI\xd3N"),i.Zb(),i.Wb(2,"hr"),i.Bc(3,b,3,0,"div",1),i.Bc(4,d,2,1,"div",2)),2&e&&(i.Jb(3),i.rc("ngIf",c.usuariosPendientes&&0===c.usuariosPendientes.length),i.Jb(1),i.rc("ngIf",c.usuariosPendientes))},directives:[n.m,n.l,r.c],pipes:[a.a,n.q],styles:[""]}),e})();var m=t("j1ZV"),f=t("iTUp");t.d(c,"InicioModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=i.Tb({type:e}),e.\u0275inj=i.Sb({factory:function(c){return new(c||e)},imports:[[n.b,m.a,f.a,r.e.forChild([{path:"",component:l}])]]}),e})()}}]);