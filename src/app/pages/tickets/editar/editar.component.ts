import { Component, OnInit, ViewChild } from '@angular/core';
import { Ticket } from 'src/app/interfaces/ticket.interface';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
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

  ticket: Ticket = {
    Id: '',
    Nombre: '',
    Precio: '',
    Descripcion: ''
  };

  constructor(private router: Router,
    private ServicioTicket: ServicioTicketService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buildForm();
  }

  async buildForm() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ticket.Id = id;
    // console.log(this.ticketes.Id);
    this.ServicioTicket.obtenertipo(Number(id))
                        .then(ticket => {
                          this.ticket = ticket;
                        });
  }

  actualizar(form1: NgForm) {
    // console.log(this.ticket);
    Swal.fire({
      title: '¿Esta seguro?',
      text: '¿Desea guardar los cambios?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Guardar!'
    }).then(async (result) => {
      if (result.value) {
        const actualizado = await this.ServicioTicket.actualizar(this.ticket);
        if (actualizado) {
          Swal.fire(
            'Guardado!',
            'El tipo ha sido Actualizado',
            'success'
          );
          this.router.navigateByUrl('/tickets');
        }
      }
    });
  }
}
