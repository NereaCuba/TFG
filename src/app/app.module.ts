import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbModalService } from 'mdb-angular-ui-kit/modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogModule } from 'primeng/dialog';
import { SettingsModule } from './components/settings/settings.module';
import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    NgbModule,
    DialogModule,
    SettingsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'tfgheuristics'),
    AngularFireModule, // Only required for database features
    AngularFireModule, // Only required for auth features,
    AngularFireModule // Only required for storage features
  ],
  providers: [
    MdbModalService,
    Title,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
