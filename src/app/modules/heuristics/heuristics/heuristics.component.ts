import { Component, OnInit } from '@angular/core';
import { HeuristicBasicInfo, HeuristicsResponse } from 'app/models/general.interfaces';
import { HeuristicsService } from '../services/heuristics.service';
import { ActivatedRoute, Router } from '@angular/router';
import AOS from "aos";

@Component({
  selector: 'app-heuristics',
  templateUrl: './heuristics.component.html',
  styleUrls: ['./heuristics.component.scss']
})
export class HeuristicsComponent implements OnInit {
  _listHeuristics: HeuristicBasicInfo[] = [];
  _listHeuristicsStatics: HeuristicBasicInfo[] = [];
  data: string = '';
  totalRecords: number = 0;
  loading:boolean = true;
  loaded:boolean = false;
  first3: number = 0;
  rows3: number = 6;
  constructor (
    private heuristicsService: HeuristicsService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.loading = true;
    this.loaded = false;
    this.heuristicsService.getHeuristics().subscribe((res: HeuristicsResponse) => {
      this._listHeuristics = res.heuristic_abstract!;
      this._listHeuristicsStatics = res.heuristic_abstract!;
      this.loading = false;
      this.loaded = true;
      this.totalRecords = this._listHeuristics.length;
      AOS.init();
    })
  }
  removeAccents(value) {
    return value
        .replace(/á/g, 'a')            
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u');
  }
    filterByName() { 
    this.first3 = 0;
    this.rows3 = 6;     
    this._listHeuristics = this._listHeuristicsStatics.filter((element:any) => {
      if(this.removeAccents(element.name!.toLowerCase()).indexOf(this.removeAccents(this.data.toLowerCase())) > -1) {
        return element;
      }
    });
    this.totalRecords = this._listHeuristics.length;
  }
  redirectTo(uri: string, additionalInfo?: any) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri], {queryParams: {heuristicID: additionalInfo}}));
  }
  heuristicInformationShow(value?: any) {
    this.redirectTo('/heuristic-detail', value?.id);
  }
  onPageChange3(event) {
    document.getElementsByClassName('wrapper')[0].scrollTo(0,0);    
    this.first3 = event.first;
    this.rows3 = event.rows;
}

}
