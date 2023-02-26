import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { SettingsComponent } from './components/settings/settings/settings.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tfg';
  items: MenuItem[] = [];
  modalRef: MdbModalRef<SettingsComponent> | null = null;

    constructor(private modalService: MdbModalService) {}

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
            routerLink: 'evaluate'
        }
      ];
    }
    openModal() {
      this.modalRef = this.modalService.open(SettingsComponent);
      this.modalRef.onClose.subscribe((message: any) => {
        console.log(message);
      });
    }
}
