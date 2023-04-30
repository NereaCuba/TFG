import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { AuthService } from 'app/shared/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  blueBackground:string = "./../../../../assets/Fondo_bueno_azul.png";
  grayBackground:string = "./../../../../assets/Fondo_bueno_gris.png";
  purpleBackground:string = "./../../../../assets/Fondo_bueno_violeta.png";
  image: string = this.blueBackground;
  loading:boolean = true;
  loaded:boolean = false;
  constructor(
    private router: Router,
    public authService: AuthService,
    @Inject(DOCUMENT) private document: Document
  ) {
    if(this.document.documentElement.classList.contains(AppComponent.VIOLET_THEME)) {
      this.image = this.purpleBackground;
    } else if (this.document.documentElement.classList.contains(AppComponent.GRAY_THEME)) {
      this.image = this.grayBackground;
    } else {
      this.image = this.blueBackground;
    }
   }
  ngOnInit() {
    this.loading = false;
    this.loaded = true;
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri]));
  }
  logInWithGoogle() {
    this.loading = true;
    this.loaded = false;
    this.authService.GoogleAuth().then(result   => {
      this.loading = false;
      this.loaded = true;
    });
  }
}
