import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMoreImageComponent } from './show-more-image.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [ShowMoreImageComponent],
  exports: [ShowMoreImageComponent],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule
  ]
})
export class ShowMoreImageModule { }
