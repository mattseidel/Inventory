import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { NuevaRecetaComponent } from './component/nueva-receta/nueva-receta.component';
import { AdminComponent } from './component/admin/admin.component';
import { AboutComponent } from './component/about/about.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DetallesComponent } from './component/detalles/detalles.component';
import { EditComponent } from './component/edit/edit.component';
import { LoginComponent } from './component/login/login.component';

import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { RecetaService } from './services/receta.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NuevaRecetaComponent,
    AdminComponent,
    AboutComponent,
    NotFoundComponent,
    DetallesComponent,
    EditComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService,
    AuthGuard,
    RecetaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
