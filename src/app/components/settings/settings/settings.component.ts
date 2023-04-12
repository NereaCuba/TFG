import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  _visible: boolean = false;
  _selectedPalette: number = 0;
  @Output() isClosed = new EventEmitter<boolean>();
  @Output() paletteSelecteed = new EventEmitter<boolean>();

  constructor() {}

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
  sendIsClosed() {
    this.isClosed.emit(true);
  }
  sendPaletteSelected(event) {
    this.paletteSelecteed.emit(event);
  }
}
