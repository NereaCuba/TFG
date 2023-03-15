import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Chart, registerables } from 'chart.js';
import { HeuristicsResponse } from 'app/models/general.interfaces';
Chart.register(...registerables);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  contentInformation: any = {};
  contentInformationSecond: any = {};

  constructor(private aboutService: AboutService) {}
  chart:any = {};

  ngOnInit() {
    this.aboutService.getContext().subscribe((res: any) => {
      this.contentInformation =  res;
      this.contentInformation = this.contentInformation.introduction;
      this.contentInformationSecond = res.continuation;
      });
    this.chart = new Chart('myChart', {
      type: "line",
      data: {
          labels: ['Ene-13', 'Feb-13', 'Mar-13', 'Abr-13', 'May-13', 'Jun-13', 'Jul-13', 'Ago-13', 'Sep-13', 'Oct-13', 'Nov-13', 'Dic-13', 'Ene-14', 'Feb-14', 'Mar-14', 'Abr-14', 'May-14', 'Jun-14', 'Jul-14', 'Ago-14', 'Sep-14', 'Oct-14', 'Nov-14', 'Dic-14', 'Ene-15', 'Feb-15', 'Mar-15', 'Abr-15', 'May-15', 'Jun-15', 'Jul-15', 'Ago-15', 'Sep-15', 'Oct-15', 'Nov-15', 'Dic-15'],
          datasets: [{
              label: "Visitas al sitio web entre 2013 y 2015",
              data: [17589,24156,27165,29541,32146,24563,14743,16230,15636,19999,31545,18354,22895,26746,32565,31050,35241,26124,16923,17028,22712,27351,26558,16607,18729,23027,26966,25407,28548,25197,19885,18207,28065,32033,30104,18817],
          }]
      }
    });    
  }
}
