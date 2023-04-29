import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeuristicBasicInfo } from 'app/models/general.interfaces';
import { DetailHeuristicsService } from 'app/modules/heuristic-detail/services/heuristic-detail.service';
import { Output, EventEmitter } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ShowMoreImageComponent } from 'app/components/show-more-image/show-more-image.component';
import { Router } from '@angular/router';

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
  _comesFromBrief: boolean = false;
  _isIFrame: boolean = false;
  name = new FormControl('');
  backButtonBoolean: boolean = false;
  modalRef: MdbModalRef<ShowMoreImageComponent> | null = null;
  optionLinkert: any = null;
  _heuristic: HeuristicBasicInfo = {} as HeuristicBasicInfo;
  @Output() newItemEvent = new EventEmitter<any>();
  @Output() backItemEmit = new EventEmitter<any>();
  visible: boolean = false;
  loading:boolean = true;
  loaded:boolean = false;
  showExamples: boolean = false;
  constructor(
    private heuristicsService: DetailHeuristicsService,
    private modalService: MdbModalService,
    private router: Router
  ) {}
  showDialog() {
    if (this._heuristic.example_images.length > 0) {
      this.visible = true;
    }
  }
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
  get comesFromBrief(): boolean {
    return this._comesFromBrief;
  }
  set comesFromBrief(value: boolean) {
    this._comesFromBrief = value;
  }
  @Input()
  get isIFrame(): boolean {
    return this._isIFrame;
  }
  set isIFrame(value: boolean) {
    this._isIFrame = value;
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
      if(this._heuristic.id === 'H1') {
        this.redirectToEvaluate()
      }
      this.newItemEvent.emit(null);
      this.loading = true;
      this.loaded = false;
      this.ngOnInit();
    } else if(this.comesFromBrief) {
      var response = {
        optionLinkert: this.optionLinkert
      }
      this.newItemEvent.emit(response)
    } else {
      var response = {
        optionLinkert: this.optionLinkert
      }
      this.newItemEvent.emit(response)
      this.loading = true;
      this.loaded = false;
      this.ngOnInit();
    }
  }
  async ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    try {
      var _listHeuristics = await this.heuristicsService.getHeuristics().toPromise();
      this._heuristic = _listHeuristics.heuristic_abstract!.find((heuristic, index) => {
          if(heuristic.id === this._idHeuristic){
            this.nextValue = index+2;
            this.lastValue = index;
            this.optionLinkert = this._currentValue.length > 0 && this._currentValue.at(this.lastValue) && this._currentValue.at(this.lastValue).optionLinkert ? Number(this._currentValue.at(this.lastValue).optionLinkert) : null;
  
            return heuristic;
          }
      });
      this.backButtonBoolean = false;
    } catch (e) {
      console.log(e);
    }
    this.loaded = true;
    this.loading = false;
  }
  hideExamples() {
    this.showExamples = !this.showExamples;
  }
  backButton() {
    this.backButtonBoolean = true;
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri]));
  }
  redirectToEvaluate() {
    this.redirectTo('/evaluate')
   }
   checkIfDisabled(value) {
    return this._heuristic.forbidden_list.includes(value);
   }
}
