import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitlesComponent } from './titles/titles.component';



@NgModule({
  declarations: [
    TitlesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [TitlesComponent]
})
export class TitleModule {}
