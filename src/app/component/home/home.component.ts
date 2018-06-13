import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { RecetaInterface } from '../../models/receta';
import 'rxjs/observable'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recetas: RecetaInterface[]

  constructor(
    private recetaService: RecetaService,

  ) { }

  ngOnInit() {
    this.AllRecetas();
  }

  AllRecetas() {
    this.recetaService.getAllReceta().subscribe(recetas => this.recetas = recetas);
    
  }

}
