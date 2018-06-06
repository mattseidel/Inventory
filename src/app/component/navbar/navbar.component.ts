import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public userName: string;
  public usarEmail: string;
  public userPicture: String;
  public userId: string;
  public isLogin: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.onComprobarUserLoged();
  }

  onComprobarUserLoged() {
    this.auth.getAuth().subscribe(auth =>{
      if(auth){
        this.isLogin=true; 
        this.usarEmail=auth.email;
        this.userName=auth.displayName;
        this.userPicture=auth.photoURL;
        this.userId=auth.uid;
      }else{
        this.isLogin=false;
      }
    })
  }

  onLogout() {
    this.auth.logout();
  }
}
