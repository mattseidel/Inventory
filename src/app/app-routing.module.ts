import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { NuevaRecetaComponent } from './component/nueva-receta/nueva-receta.component';
import { AboutComponent } from './component/about/about.component';
import { DetallesComponent } from './component/detalles/detalles.component';
import { EditComponent } from './component/edit/edit.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NuevaRecetaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'details/:id',
    component: DetallesComponent,
    canActivate:[AuthGuard]    
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate:[AuthGuard]   
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate:[AuthGuard]    
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
