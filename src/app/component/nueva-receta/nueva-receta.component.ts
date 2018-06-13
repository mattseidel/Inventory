import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { RecetaService } from '../../../../recetApp/src/app/services/receta.service';
import { RecetaInterface } from '../../models/receta';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.component.html',
  styleUrls: ['./nueva-receta.component.scss'],
  providers:[RecetaService]
})
export class NuevaRecetaComponent implements OnInit {

  receta:RecetaInterface={
    id:'',
    titulo:'',
    descripcion:'',
    preparacion:'',
    ingredientes:'',
    temporada:'',
    fechaPublicacion:'',
    userId:'',
    userNombre:''
  }

  constructor(
    private authService:AuthService,
    private recetaService:RecetaService,
    private router:Router,

  ) { }

  ngOnInit() {
  }

  onSaveReceta({value}: {value:RecetaInterface}){
    value.fechaPublicacion=(new Date()).getTime();
    this.authService.getAuth().subscribe( user =>{
      value.userId = user.uid;
      value.userNombre = user.displayName;
      this.recetaService.addNewReceta(value);
    })
    this.router.navigate(['/']);
  }

  onBack(){
    this.router.navigate(['..']);
  }
}
