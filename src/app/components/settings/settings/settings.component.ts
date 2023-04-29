import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  _visible: boolean = false;
  _selectedPalette: number = 0;
  activeIndex: number = 0;
  items: MenuItem[] = [
    {
        label: 'Aa',
        style: '',
        command: (event: any) => this.IsIncresing(this.activeIndex)    
      },
    {
        label: 'Aa',
        styleClass: 'size1Parahgraph',
        command: (event: any) => this.IsIncresing(this.activeIndex)
    },
    {
        label: 'Aa',
        styleClass: 'size2Parahgraph',
        command: (event: any) => this.IsIncresing(this.activeIndex)    
      },
    {
        label: 'Aa',
        styleClass: 'size3Parahgraph',
        command: (event: any) => this.IsIncresing(this.activeIndex)   
      }
];
  @Output() isClosed = new EventEmitter<boolean>();
  @Output() paletteSelecteed = new EventEmitter<boolean>();
  @Output() sizeSelected = new EventEmitter<number>();

  constructor(    
    private router: Router,
    ) {}

  @Input()
  get visible(): boolean {
    return this._visible;
  }
  set visible(value: boolean) {
    this._visible = value;
  }
  @Input()
  get selectedPalette(): number {
    return this._selectedPalette;
  }
  set selectedPalette(value: number) {
    this._selectedPalette = value;
  }
  onActiveIndexChange(event) {
    this.activeIndex = event;
  }
  sendIsClosed() {
    this.isClosed.emit(true);
  }
  sendPaletteSelected(event) {
    this.paletteSelecteed.emit(event);
  }
  IsIncresing(value) {
    this.sizeSelected.emit(value);
  }
}
