import { Component, OnInit } from '@angular/core';
import { Router,} from '@angular/router';
import { ServiciopromService } from 'src/app/services/servicioprom.service';
import { prom } from 'src/app/pages/promociones/promocion.model';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import {  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editarprom',
  templateUrl: './editarprom.component.html',
  styleUrls: ['./editarprom.component.css']
})
export class EditarpromComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private servi: ServiciopromService,
    Router: Router,
    private route: ActivatedRoute,
    private router: Router) { }
    promo: prom[];  
        
    editarprom: prom ={
    
     Nombre: "",
     Descripcion: "",
     Precio: "",    
    }
  id:string;

  ngOnInit(): void {

   }


guardar({value, valid}: {value: prom , valid: boolean}){
   
 
   
  }
 
   

  


}
