import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor (
    private heuristicsService: DetailHeuristicsService,
    private route: ActivatedRoute
    ) {}

  async ngOnInit() {
    let value = this.route.snapshot.queryParams['heuristicID'];
    this._listHeuristics = await this.heuristicsService.getHeuristics().toPromise();
    this._heuristic = this._listHeuristics!.heuristic_abstract!.find(heuristic => heuristic.id === value)!;
  }
}
