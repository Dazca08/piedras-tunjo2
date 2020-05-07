import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule , FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicioTicketService } from 'src/app/services/servicio-ticket.service';
import { element } from 'protractor';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  
  id:string;
  tickets:Ticket[];  
  tick: Ticket = undefined;
  ticketes: Ticket ={  	   
    Id:'',
    Nombre:'',
    Precio:'',
    Descripcion:''
  }
  @ViewChild("editarticketForm") editarticketForm:FormGroup;

  constructor(private router: Router, 
    private ServicioTicket:ServicioTicketService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*this.id = this.route.snapshot.params['id'];
    this.ServicioTicket.obtenertipo(this.id).subscribe(resultado =>{
    this.ticketes=resultado;
    });*/
    this.buildForm();
  }
  async buildForm() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticketes.Id=id;
    console.log(this.ticketes.Id);
    this.ServicioTicket.obtenertipo(Number(id))
                        .then(ticket => {
                          
                          this.ticketes = ticket;
                         
                        });
                
  }

  actualizar({value, valid}: {value:Ticket, valid: boolean}){
    console.log(this.ticketes.Id);
    if(this.ticketes.Nombre == "" || this.ticketes.Descripcion == "" || this.ticketes.Precio < "0"){
      console.log('Debe llenar todos los campos')
      Swal.fire(
        'Debe llenar todos los campos',
        'Fallo en edicion de tipo de ticket!',
        'error'
      )
    }else{
        Swal.fire({
          title: '¿Esta seguro?',
          text: "¿Desea guardar los cambios?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Guardar!'
        }).then((result) => {
          value.Id = this.id;
          var actualizado=  this.ServicioTicket.actualizar(value,this.ticketes.Id);       
          if (actualizado) {
            this.router.navigateByUrl('/tickets');
          }  
          if (result.value) {
            Swal.fire(
              'Guardado!',
              'El tipo ha sido Actualizado',
              'success'
            )          
            this.ngOnInit();
          }
        })
    }
  }




}
