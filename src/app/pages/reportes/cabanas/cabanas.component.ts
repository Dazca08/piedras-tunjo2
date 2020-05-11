import { Component, OnInit } from '@angular/core';
import { ReservaCabana } from '../../../interfaces/reserva-cabana.interface';
import { ReservaCabanasService } from 'src/app/services/reserva-cabanas.service';
import * as jsPDF from "jspdf";
import Swal from 'sweetalert2';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-cabanas',
  templateUrl: './cabanas.component.html',
  styleUrls: ['./cabanas.component.css']
})
export class CabanasComponent implements OnInit {

  reservaCabanas: ReservaCabana[];
  cabana:ReservaCabana ={
    
    ValorTotal:0,
  }
  verGrafica = false;
  selectedMonth = new Date().getMonth() + 1;
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  constructor(
    private reservaCabService: ReservaCabanasService
  ) { }

  ngOnInit(): void {
    this.prepare();
  }

  async prepare() {
    this.reservaCabanas = await this.reservaCabService.getReservasCabanas();
  }
 /* async generarpdf(){
    
    setTimeout(() => { this.CreatePdf(this.cabana) }, 2000);

    //console.log(this.reservaCabanas);
  }*/

       public CreatePdf(parametro){
       console.log(this.reservaCabanas)
       const Toast = Swal.mixin({
       toast: true,
       position: 'top-end',
       showConfirmButton: false,
       timer: 3000,
       timerProgressBar: true,
       onOpen: (toast) => {
       toast.addEventListener('mouseenter', Swal.stopTimer)
       toast.addEventListener('mouseleave', Swal.resumeTimer)
     }
   })
   
   Toast.fire({
     icon: 'success',
     title: 'Descargando Reporte'
   })
    
   
       const doc =new jsPDF();
       doc.text("Reporte Cabañas",55,10)
      
        doc.text("Nombre  : "+this.cabana.UCabana,70, 120);
        doc.text("Valor Total : "+this.cabana.ValorTotal ,70, 130);
        doc.text("Fecha : "+this.cabana.FechaReserva ,70,140);
        doc.save("Reporte")
    
  
   
     }

     generarPdf(){
      const pdf = new jsPDF()
      pdf.text(85, 10, "Reporte Cabañas");
      autoTable(pdf, { html:  '#tablac' })
      pdf.save('Reporte_Cabañas.pdf')

     }















  
}
