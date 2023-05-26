import { AuthService } from 'app/shared/services/auth.service';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'app/app.component';
@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
  blueBackground:string = "./assets/Fondo_bueno_azul.png";
  grayBackground:string = "./assets/Fondo_bueno_gris.png";
  purpleBackground:string = "./assets/Fondo_bueno_violeta.png";
  image: string = this.blueBackground;
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
  ngOnInit() { }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri]));
  }
}