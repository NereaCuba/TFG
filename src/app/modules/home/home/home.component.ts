import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit() {
  }
  evaluateButton(): void {
    this.redirectTo('/evaluate', "");
  }
  goToAbout(): void {
    this.redirectTo('/about', "");
  }
  redirectTo(uri: string, additionalInfo?: any) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri], {queryParams: {title: additionalInfo}}));
  }
}
