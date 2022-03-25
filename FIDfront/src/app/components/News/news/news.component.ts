import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  noticias:any=[];
  new_opened:any;
  element_noti_abierta:any;
  porcentaje_scroll:any;
  clase_all:any;
  barra_progreso_scroll:any;
 
 
   constructor() { }
 
   ngOnInit(): void {
     this.clase_all=document.querySelector('.all')
     this.element_noti_abierta=document.querySelector('.noti-abierta')
     this.barra_progreso_scroll=document.querySelector('.barra_progreso_scroll')
     this.crearnoticias(36);
     window.addEventListener('scroll',()=>{
       let altura;
       if(this.clase_all.offsetHeight){altura=this.clase_all.offsetHeight;}
            else if(this.clase_all.style.pixelHeight){altura=this.clase_all.style.pixelHeight;}
       this.porcentaje_scroll=100*this.GetScrollPositions()/(altura -window.innerHeight)
       this.barra_progreso_scroll.style.width=this.porcentaje_scroll+"%"
     })
 
   }
 
 
 crearnoticias(cantidad:any){
   for(let i=1;i<=cantidad;i++){
         let noticia={
           id:i,
           titulo:"TITULO DE NOTICIA: "+i,
           descripcion:"BREVE DESCRIPCION DE LA NOTICIA "+i+".",
           imagen:"https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg"
           }
         this.noticias.push(noticia)
     }
   }
 
  mostrar_new_opened(){
    this.element_noti_abierta.style.display="block"
    this.element_noti_abierta.classList.add('mostrando')
    let altura_scroll=this.GetScrollPositions()+100   //ASIGNO LA ALTURA ACTUAL DEL SCROLL + 50PX
    this.element_noti_abierta.style.top=altura_scroll+"px";
 }
  ocultar_new_opened(){
   this.element_noti_abierta.classList.remove('mostrando')
   this.element_noti_abierta.style.display="none"
 }
 
 
 
 
 GetZoomFactor () {
   var factor = 1;
   if (document.body.getBoundingClientRect) {
           // rect is only in physical pixel size in IE before version 8 
       var rect = document.body.getBoundingClientRect ();
       var physicalW = rect.right - rect.left;
       var logicalW = document.body.offsetWidth;
 
           // the zoom level is always an integer percent value
       factor = Math.round ((physicalW / logicalW) * 100) / 100;
   }
   return factor;
 }
 
 GetScrollPositions () {
   if ('pageXOffset' in window) {  // all browsers, except IE before version 9
       var scrollLeft =  window.pageXOffset;
       var scrollTop = window.pageYOffset;
   }
   else {      // Internet Explorer before version 9
       var zoomFactor = this.GetZoomFactor ();
       var scrollLeft = Math.round (document.documentElement.scrollLeft / zoomFactor);
       var scrollTop = Math.round (document.documentElement.scrollTop / zoomFactor);
   }
   // console.log("X= "+ scrollLeft + "px"," y en Y= "+ scrollTop + "px")    MUESTRO DONDE ESTA EL SCROLL EN X E Y
   return scrollTop;
 }
 
 
 
 //ALTURA DE UN ELEMENTO DE HTML SOPORTADA EN TODOS LOS NAVEGADORES
 // if(obj.offsetHeight)          {divHeight=obj.offsetHeight;}
 // else if(obj.style.pixelHeight){divHeight=obj.style.pixelHeight;}
 
 
 }
 