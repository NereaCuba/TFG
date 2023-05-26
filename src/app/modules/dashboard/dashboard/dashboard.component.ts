import { Component } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';
import AOS from "aos";
import { fireStoreService } from 'app/shared/services/fireStore.service';
import { SelectItem } from 'primeng/api';
import { EvaluateService } from 'app/modules/evaluate/services/evaluate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  allUsers: any = [];
  currentUser: any = [];
  sortOptions: SelectItem[];
  sortKey:any;
  sortOrder: number;
  scoreAll:any = [];
  numAproved: number = 0;
  constHeuristicsTitles: any = [
    'Título',
    'Leyenda',
    'Ejes',
    'Pie',
    'Abreviaturas',
    'Fuente de datos',
    'Versión impresa',
    'Alternativa textual',
    'Descripción larga',
    'Colores seguros',
    'Contraste',
    'Legibilidad',
    'Calidad de la imagen',
    'Redimensionado',
    'Sin obstáculos en la visualización',
    'Foco visible',
    'Navegación independiente del dispositivo',
    'Personalización'
  ];
  headers: any[] = ['Heuristica', 'Seleccion', 'Peso', 'Nota'];
  layout: string = 'list';
  constLinkertBrief: any = ['No cumplimiento', 'Cumplimiento bajo','Cumplimiento aceptable', 'Cumplimiento alto', 'Cumplimiento excelente']
  constLikert: any = ['NA - No aplica', 'NP - No es problema', '0 - No cumplimiento', '1 - Cumplimiento bajo', '2 - Cumplimiento aceptable', '3 - Cumplimiento alto', '4 - Cumplimiento excelente'];
  constWeightHeuristics: any = [1,1,1,1,1,1,1,1,3,3,3,2,3,2,3,1,3,2,];
  sortField: string;
  loading:boolean = true;
  loaded:boolean = false;
  constructor(
    private router: Router,
    public authService: AuthService,
    public fireStoreSvc: fireStoreService,
    private route: ActivatedRoute,
    private evaluateService: EvaluateService
    ) {
    AOS.init();
  }
  async ngOnInit() {
    this.loading = true;
    this.loaded = false;
    this.sortOptions = [
      { label: 'Fecha ascendente', value: '!fechaCreacion' },
      { label: 'Fecha descendente', value: 'fechaCreacion' }
    ];
    var userInformationSession  = JSON.parse(localStorage.getItem('user'));
    this.authService.userInfo =  await this.authService.getUserData(userInformationSession.email);
    if(this.authService.userInfo && this.authService.userInfo.charts) {
      this.numAproved = this.authService.userInfo.charts.filter((result) => parseInt(this.getPunctuation(result.formValue)) >= 8).length;
    }
    
    this.loading = false;
    this.loaded = true;
  }
  onSortChange(event) {
      let value = event.value;    
      if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
      } else {
          this.sortOrder = 1;
          this.sortField = value;
      }
      console.log(this.sortOrder);
      
  }
  getCurrentDate(currentDate) {
    var dateFormat = new Date(currentDate.seconds * 1000 + currentDate.nanoseconds/1000000);    
    return dateFormat.toISOString().split('T')[0];
  }
  getScore(punctuation) {
    return punctuation == 10 ? 4 : Math.floor(punctuation/2);
  }
  getScoreInt(punctuation) {
    return punctuation == 10 ? 5 : Math.floor(punctuation/2)+1;
  }
  getPunctuation(form) {
    var summatoryCurrentAsignation = 0;
    var summatoryTotalAsignation = 0;
    form.forEach((value, index) => {
      if (value.optionLinkert != 0 && value.optionLinkert != 1) {
        var currentAssignation = (value.optionLinkert - 2) *  this.constWeightHeuristics[index];
        var maxAssignation = 4 * this.constWeightHeuristics[index];
        summatoryCurrentAsignation += currentAssignation;
        summatoryTotalAsignation += maxAssignation;
        
        this.scoreAll.push(((currentAssignation * 10)/maxAssignation).toFixed(2));
      } else {
        this.scoreAll.push(value.optionLinkert != 0 ? 'NP' : 'NA');
      }
    });
    return ((summatoryCurrentAsignation * 10)/summatoryTotalAsignation).toFixed(2);
  }
  redirectTo(uri: string, additionalInfo?: any) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri], {queryParams: {chartID: additionalInfo}}));
  }
  evaluateShow(value?: any) {
    this.redirectTo('/evaluate-detail', value);
  }
  downloadResults(form) {
    var globalResults = [];
    var summatoryCurrentAsignation = 0;
    var summatoryTotalAsignation = 0;
    form.forEach((value, index) => {
      if (value.optionLinkert != 0 && value.optionLinkert != 1) {
        var currentAssignation = (value.optionLinkert - 2) *  this.constWeightHeuristics[index];
        var maxAssignation = 4 * this.constWeightHeuristics[index];
        summatoryCurrentAsignation += currentAssignation;
        summatoryTotalAsignation += maxAssignation;
        
        this.scoreAll.push(((currentAssignation * 10)/maxAssignation).toFixed(2));
      } else {
        this.scoreAll.push(value.optionLinkert != 0 ? 'NP' : 'NA');
      }
      globalResults.push({
        heuristica: 'H' + (index+1) + ' - ' + this.constHeuristicsTitles[index],
        seleccion: this.constLikert[value.optionLinkert],
        peso: this.constWeightHeuristics[index],
        nota: this.scoreAll.at(index)
      })
    });
    var totalResult = ((summatoryCurrentAsignation * 10)/summatoryTotalAsignation).toFixed(2);
    globalResults.push({
      heuristica: "NOTA GLOBAL",
      nota: totalResult
    });
    this.evaluateService.csvDownload(this.headers, globalResults);
  }
  deleteElement(email, product) {
    this.fireStoreSvc.deleteUserChart(email, product);
    this.ngOnInit();
  }
}
