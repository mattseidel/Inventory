import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RecetaInterface } from '../../models/receta';
import { RecetaService } from '../../../../recetApp/src/app/services/receta.service';
import 'rxjs/observable'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  providers: [RecetaService]
})
export class DetallesComponent implements OnInit {

  idReceta: string;
  idUsuarioLogado: string;
  isOwner: boolean = false;

  receta: RecetaInterface = {
    id: '',
    titulo: '',
    preparacion: '',
    ingredientes: '',
    temporada: '',
    fechaPublicacion: '',
    userId: '',
    userNombre: '',
    descripcion: '',
  };
  constructor(
    private router: Router,
    private recetaService: RecetaService,
    private afAuth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onCoprobarUserLogin();
    this.getDetallesReceta();
  }

  onCoprobarUserLogin() {
    this.afAuth.getAuth().subscribe(user => {
      if (user) {
        this.idUsuarioLogado = user.uid;
      }
    })
  }

  getDetallesReceta() {
    this.idReceta = this.route.snapshot.params['id'];
    this.recetaService.getOneReceta(this.idReceta).subscribe(receta => this.receta = receta)
  }


  onDelete() {
    if (confirm('¿Está seguro que desea eliminar la receta?')) {
      this.recetaService.deleteReceta(this.receta);
      this.router.navigate(['/']);
    }
  }
}
