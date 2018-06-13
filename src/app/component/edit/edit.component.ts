import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RecetaService } from '../../../../recetApp/src/app/services/receta.service';
import 'rxjs/observable'
import { RecetaInterface } from '../../models/receta';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers:[RecetaService]
})
export class EditComponent implements OnInit {

  idReceta: string;
  receta: RecetaInterface = {
    id: '',
    titulo: '',
    descripcion: '',
    preparacion: '',
    ingredientes: '',
    temporada: '',
    fechaPublicacion: '',
    userId: '',
    userNombre: ''
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService
  ) { }


  onBack() {
    this.router.navigate(['..']);
  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaService.getOneReceta(this.idReceta).subscribe(recetas => this.receta = recetas)
  }

  onEditReceta({ value }: { value: RecetaInterface }) {
    value.id = this.idReceta;
    this.recetaService.updateReceta(value);
    this.router.navigate(['/details/' + this.idReceta])
  }
}
