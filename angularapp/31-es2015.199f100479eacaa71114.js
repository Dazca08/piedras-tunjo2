(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{HPko:function(t,a,o){"use strict";o.r(a);var e=o("ofXK"),n=o("mrSG"),i=o("4ZJM"),c=o("AytR"),r=o("fXoL"),s=o("gB2c"),p=o("tyNb");let m=(()=>{class t{constructor(t){this.pictogramaService=t}ngOnInit(){}ngAfterViewInit(){i.accessToken=c.a.mapboxToken,this.mapa=new i.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-74.3451602,4.8154681],zoom:15}),this.mapa.on("load",()=>{this.loadPictogramas()}),this.mapa.on("click",t=>Object(n.a)(this,void 0,void 0,(function*(){})))}loadPictogramas(){return Object(n.a)(this,void 0,void 0,(function*(){(yield this.pictogramaService.getPictogramas()).forEach(t=>{const a=new i.Popup({offset:25}).setText(t.Nombre);(new i.Marker).setLngLat([t.Longitud,t.Latitud]).setPopup(a).addTo(this.mapa)})}))}}return t.\u0275fac=function(a){return new(a||t)(r.Vb(s.a))},t.\u0275cmp=r.Pb({type:t,selectors:[["app-mapa-picto"]],decls:4,vars:0,consts:[[1,"container"],["routerLink","/pictogramas",1,"btn","btn-primary"],[1,"fas","fa-arrow-left"],["id","map"]],template:function(t,a){1&t&&(r.ac(0,"div",0),r.ac(1,"button",1),r.Wb(2,"i",2),r.Zb(),r.Zb(),r.Wb(3,"div",3))},directives:[p.c],styles:["#map[_ngcontent-%COMP%]{width:100%;height:480px}"]}),t})();o.d(a,"MapaPictoModule",(function(){return d}));let d=(()=>{class t{}return t.\u0275mod=r.Tb({type:t}),t.\u0275inj=r.Sb({factory:function(a){return new(a||t)},imports:[[e.b,p.e.forChild([{path:"",component:m}])]]}),t})()}}]);