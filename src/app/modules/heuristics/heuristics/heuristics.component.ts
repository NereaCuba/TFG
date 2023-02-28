import { Component, OnInit } from '@angular/core';
import { HeuristicBasicInfo, HeuristicsResponse } from 'app/models/general.interfaces';
import { HeuristicsService } from '../services/heuristics.service';

@Component({
  selector: 'app-heuristics',
  templateUrl: './heuristics.component.html',
  styleUrls: ['./heuristics.component.scss']
})
export class HeuristicsComponent implements OnInit {
  _listHeuristics: HeuristicBasicInfo[] = [];
  _listHeuristicsStatics: HeuristicBasicInfo[] = [];
  data: string = '';
  totalRecords: number = 3;
  constructor (private heuristicsService: HeuristicsService) {}

  ngOnInit() {
    this.heuristicsService.getHeuristics().subscribe((res: HeuristicsResponse) => {
    this._listHeuristics = res.heuristic_abstract!;
    this._listHeuristicsStatics = res.heuristic_abstract!;
    })
  }
    filterByName() {
    this._listHeuristics = this._listHeuristicsStatics.filter((element:any) => {
      if(element.name!.toLowerCase().indexOf(this.data.toLowerCase()) > -1) {
        return element;
      }
    });
  }
}
