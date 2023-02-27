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
  constructor (private heuristicsService: HeuristicsService) {}

  ngOnInit() {
    this.heuristicsService.getHeuristics().subscribe((res: HeuristicsResponse) => {
    this._listHeuristics = res.heuristic_abstract!;
    console.log(res);

    })
  }
}
