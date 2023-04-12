import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tfg';
  items: MenuItem[] = [];
  modalRef: MdbModalRef<SettingsComponent> | null = null;
  visible: boolean = false;
  paletteSelected: number = 0;
    constructor(
      private modalService: MdbModalService,
      private router: Router
      ) {}

    ngOnInit(): void {
      this.items = [
        {
            icon: 'pi pi-chart-bar',
            routerLink: 'home-page'
        },
        {
            label: 'Home',
            routerLink: 'home-page'
        },
        {
            label: 'Heurísticas',
            routerLink: 'heuristics-list'
        },
        {
            label: 'Artículos',
            routerLink: 'articles-list'
        },
        {
            label: 'Evalua',
            command: () => this.goToEvaluate(),
            skipLocationChange: true,
        }
      ];
    }
    openModal() {
      this.visible = true;
    }
    closeModal() {
      this.visible = false;
    }
    goToEvaluate() {
      event.preventDefault();

      this.router.navigateByUrl('/', {skipLocationChange: false})
        .then(() => this.router.navigate(['/evaluate']));
    }
    setPalete(value) {
      console.log(value)
      this.paletteSelected = value;
    }
}
