import { Component, Input } from '@angular/core';

@Component({
  selector: 'titles-inline',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent {
  image_source!: string;
  _title!: string;
  _article!: boolean;
  _comesFromList!: boolean;
  @Input()
  get image(): string {
    return this.image_source;
  }
  set image(value: string) {
    this.image_source = value;
  }
  @Input()
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
  @Input()
  get article(): boolean {
    return this._article;
  }
  set article(value: boolean) {
    this._article = value;
  }
  @Input()
  get comesFromList(): boolean {
    return this._comesFromList;
  }
  set comesFromList(value: boolean) {
    this._comesFromList = value;
  }
  constructor() {}

}
