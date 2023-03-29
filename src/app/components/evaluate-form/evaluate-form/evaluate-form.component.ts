import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeuristicBasicInfo } from 'app/models/general.interfaces';
import { DetailHeuristicsService } from 'app/modules/heuristic-detail/services/heuristic-detail.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'evaluate-form',
  templateUrl: './evaluate-form.component.html',
  styleUrls: ['./evaluate-form.component.scss']
})
export class EvaluateFormComponent implements OnInit {
  _idHeuristic!: string;
  _srcImg!: string;
  _valueProgressBar!: number;
  name = new FormControl('');
  backButtonBoolean: boolean = false;
  optionLinkert: number = 0;
  _heuristic: HeuristicBasicInfo = {} as HeuristicBasicInfo;
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() backItemEmit = new EventEmitter<string>();

  showExamples: boolean = false;
  constructor(
    private heuristicsService: DetailHeuristicsService
  ) {}

  @Input()
  get idHeuristic(): string {
    return this._idHeuristic;
  }
  set idHeuristic(value: string) {
    this._idHeuristic = value;
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
    console.log('INIT EVALUATE FORM')
    this.heuristicsService.getHeuristics().subscribe((res:any) => {
      var _listHeuristics = res;
      this._heuristic = _listHeuristics!.heuristic_abstract!.find(heuristic => heuristic.id === this._idHeuristic)!;
      this.optionLinkert = 0;
    });
  }
  hideExamples() {
    this.showExamples = !this.showExamples;
  }
  backButton() {
    this.backButtonBoolean = true;
  }
}
