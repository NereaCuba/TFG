import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeuristicBasicInfo, HeuristicsResponse } from 'app/models/general.interfaces';
import { DetailHeuristicsService } from '../services/heuristic-detail.service';

@Component({
  selector: 'detail-heuristics',
  templateUrl: './heuristic-detail.component.html',
  styleUrls: ['./heuristic-detail.component.scss']
})
export class DetailHeuristicsComponent implements OnInit {
  _listHeuristics: HeuristicsResponse = {};
  _heuristic: HeuristicBasicInfo = {} as HeuristicBasicInfo;
  _listHeuristicsRedirects: any[] = [];
  constructor (
    private heuristicsService: DetailHeuristicsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  async ngOnInit() {
    let value = this.route.snapshot.queryParams['heuristicID'];
    let heuristicValue1 = '';
    let heuristicValue2 = '';
    let heuristicValue3 = '';

    if(value === 'H18'){
      heuristicValue1 = 'H15';
      heuristicValue2 = 'H16';
      heuristicValue3 = 'H17';
    } else if(value === 'H1' || value === 'H2') {
      var minValue = parseInt(value.split('H')[1]);
      heuristicValue1 = 'H' + (minValue + 1);
      heuristicValue2 = 'H' + (minValue + 2);
      heuristicValue3 = 'H' + (minValue + 3);
    } else {
      var minValue = parseInt(value.split('H')[1]);
      heuristicValue1 = 'H' + (minValue - 1);
      heuristicValue2 = 'H' + (minValue + 1);
      heuristicValue3 = 'H' + (minValue + 2);
    }
    this._listHeuristics = await this.heuristicsService.getHeuristics().toPromise();
    this._heuristic = this._listHeuristics!.heuristic_abstract!.find(heuristic => heuristic.id === value)!;
    console.log(heuristicValue1, heuristicValue2, heuristicValue3);
    
    this._listHeuristicsRedirects = this._listHeuristics!.heuristic_abstract!.filter(heuristic => heuristic.id === heuristicValue1 || heuristic.id === heuristicValue2 || heuristic.id === heuristicValue3);
    console.log(this._listHeuristicsRedirects);
    
  }
  redirectTo(uri: string, additionalInfo?: any) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri], {queryParams: {heuristicID: additionalInfo}}));
  }
  heuristicInformationShow(value?: any) {
    this.redirectTo('/heuristic-detail', value?.id);
  }
}
