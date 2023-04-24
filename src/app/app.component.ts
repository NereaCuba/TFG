import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { SettingsComponent } from './components/settings/settings/settings.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {DOCUMENT} from '@angular/common';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Evaluación de un gráfico estadístico';
  items: MenuItem[] = [];
  modalRef: MdbModalRef<SettingsComponent> | null = null;
  visible: boolean = false;
  paletteSelected: number = 0;
  public static readonly DEFAULT_THEME = 'default-theme';
  public static readonly GRAY_THEME = 'gray-theme';
  public static readonly VIOLET_THEME = 'violet-theme';

  public theme: string;
    constructor(
      private modalService: MdbModalService,
      private router: Router,
      private titleService: Title,
      private activatedRoute: ActivatedRoute,
      @Inject(DOCUMENT) private document: Document
      ) {
        this.theme = this.document.documentElement.classList.contains(AppComponent.GRAY_THEME) ? AppComponent.GRAY_THEME : this.document.documentElement.classList.contains(AppComponent.VIOLET_THEME) ?  AppComponent.VIOLET_THEME : AppComponent.DEFAULT_THEME;
      }
    setDocTitle(title: string) {
        this.titleService.setTitle(title);
     }
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
      const appTitle = this.titleService.getTitle();
      this.router.events.pipe(filter(event => event instanceof NavigationEnd), map(() => {
            const child = this.activatedRoute.firstChild;
            if (child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            }
            return appTitle;
          })
        ).subscribe((ttl: string) => {
          this.titleService.setTitle(ttl);
        });
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
      this.paletteSelected = value;
      if(value === 1) {
        this.selectGrayTheme();
      } else if(value === 2) {
        this.selectVioletTheme();
      } else {
        this.selectDefaultTheme();
      }
      this.ngOnInit();
    }
  
    public selectGrayTheme(): void {
      if(this.document.documentElement.classList.contains(AppComponent.VIOLET_THEME)) {
        this.document.documentElement.classList.remove(AppComponent.VIOLET_THEME);
      } else {
        this.document.documentElement.classList.remove(AppComponent.DEFAULT_THEME);
      }
      this.document.documentElement.classList.add(AppComponent.GRAY_THEME);
      this.theme = AppComponent.GRAY_THEME;
    }
  
    public selectVioletTheme(): void {
      if(this.document.documentElement.classList.contains(AppComponent.GRAY_THEME)) {
        this.document.documentElement.classList.remove(AppComponent.GRAY_THEME);
      } else {
        this.document.documentElement.classList.remove(AppComponent.DEFAULT_THEME);
      }
      this.document.documentElement.classList.add(AppComponent.VIOLET_THEME);
      this.theme = AppComponent.VIOLET_THEME;
    }

    public selectDefaultTheme(): void {
      if(this.document.documentElement.classList.contains(AppComponent.GRAY_THEME)) {
        this.document.documentElement.classList.remove(AppComponent.GRAY_THEME);
      } else {
        this.document.documentElement.classList.remove(AppComponent.VIOLET_THEME);
      }
      this.document.documentElement.classList.add(AppComponent.DEFAULT_THEME);
      this.theme = AppComponent.DEFAULT_THEME;
    }
}
