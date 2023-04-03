import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeuristicBasicInfo } from 'app/models/general.interfaces';
import { DetailHeuristicsService } from 'app/modules/heuristic-detail/services/heuristic-detail.service';
import { Output, EventEmitter } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ShowMoreImageComponent } from 'app/components/show-more-image/show-more-image.component';

@Component({
  selector: 'evaluate-form',
  templateUrl: './evaluate-form.component.html',
  styleUrls: ['./evaluate-form.component.scss']
})
export class EvaluateFormComponent implements OnInit {
  _idHeuristic!: string;
  _srcImg!: string;
  _valueProgressBar!: number;
  nextValue: number = 2;
  lastValue: number = 1;
  _currentValue!: any;
  name = new FormControl('');
  backButtonBoolean: boolean = false;
  modalRef: MdbModalRef<ShowMoreImageComponent> | null = null;
  optionLinkert: any = null;
  _heuristic: HeuristicBasicInfo = {} as HeuristicBasicInfo;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() backItemEmit = new EventEmitter<string>();

  showExamples: boolean = false;
  constructor(
    private heuristicsService: DetailHeuristicsService,
    private modalService: MdbModalService
  ) {}

  @Input()
  get idHeuristic(): string {
    return this._idHeuristic;
  }
  set idHeuristic(value: string) {
    this._idHeuristic = value;
  }
  @Input()
  get currentValue(): any {
    return this._currentValue;
  }
  set currentValue(value: any) {
    this._currentValue = value;
  }
  @Input()
  get valueProgressBar(): number {
    return this._valueProgressBar;
  }
  set valueProgressBar(value: number) {
    this._valueProgressBar = value;
  }

  @Input()
  get srcImg(): string {
    return this._srcImg;
  }
  set srcImg(value: string) {
    this._srcImg = value;
  }
  templateForm(value: any) {
    if(this.backButtonBoolean) {
      this.newItemEvent.emit(null);
    } else {
      this.newItemEvent.emit(value)
    }
    this.ngOnInit();
  }
  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    this.heuristicsService.getHeuristics().subscribe((res:any) => {
      var _listHeuristics = res;
      this._heuristic = _listHeuristics!.heuristic_abstract!.find((heuristic, index) => {
        if(heuristic.id === this._idHeuristic){
          this.nextValue = index+2;
          this.lastValue = index;
          this.optionLinkert = this._currentValue.length > 0 && this._currentValue.at(this.lastValue) && this._currentValue.at(this.lastValue).optionLinkert ? Number(this._currentValue.at(this.lastValue).optionLinkert) : null;

          return heuristic;
        }
      });
    });
    this.backButtonBoolean = false;
  }
  hideExamples() {
    this.showExamples = !this.showExamples;
  }
  backButton() {
    this.backButtonBoolean = true;
  }
  openModal() {
    this.modalRef = this.modalService.open(ShowMoreImageComponent);
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }
}
