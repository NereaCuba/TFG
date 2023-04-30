import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EvaluateService } from 'app/modules/evaluate/services/evaluate.service';
import { AuthService } from 'app/shared/services/auth.service';
import { fireStoreService } from 'app/shared/services/fireStore.service';

@Component({
  selector: 'app-evaluate-detail',
  templateUrl: './evaluate-detail.component.html',
  styleUrls: ['./evaluate-detail.component.scss']
})
export class EvaluateDetailComponent {
  formValue: any = [];
  oldFormValue: any = [];
  constLikertValues: any = ['NA', 'NP', '0', '1', '2', '3', '4']
  constLikert: any = ['NA - No aplica', 'NP - No es problema', '0 - No cumplimiento', '1 - Cumplimiento bajo', '2 - Cumplimiento aceptable', '3 - Cumplimiento alto', '4 - Cumplimiento excelente'];
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
  typeImport: string = 'imgUpload';
  nameFile: string = 'No se ha seleccionado ningún archivo';
  file:any = null;
  inputValue: any = '';
  isIFrame:boolean = false;
  imgURL: any = null;
  URLLink: string = '';
  image: any = null;
  @ViewChild('pdfResults')
  pdfResults!: ElementRef;
  dataSource: Object = {};
  constWeightHeuristics: any = [1,1,1,1,1,1,1,1,3,3,3,2,3,2,3,1,3,2,];
  scoreAll:any = [];
  totalResult: any = 0;
  globalResults: any = [];
  headers: any[] = ['Heuristica', 'Seleccion', 'Peso', 'Nota'];
  constructor(    
    private router: Router,
    public authService: AuthService,
    private evaluateService: EvaluateService,
    private route: ActivatedRoute,
    public fireStoreSvc: fireStoreService){}
  async ngOnInit() {
    if(this.authService.isLoggedIn) {
      try {
        var userInformationSession  = JSON.parse(localStorage.getItem('user'));
        var userInformation = await this.authService.getUserData(userInformationSession.email);
        let value = parseInt(this.route.snapshot.queryParams['chartID']);
        console.log(value);
        
        var info = userInformation.charts[value];
        
        this.formValue = info.formValue;
        await this.calculatePonderation();
        this.URLLink = info.image;
        console.log(this.URLLink);
        
        this.getImageFromURL();
        
      } catch (error) {
        console.log('Error while parsing user information. Error: ' + error);
        
      }
    }
  }
  redirectToEvaluate() {
    this.redirectTo('/evaluate')
   }
   getImageFromURL(){
    var commonFormats = ['svg', 'jpeg', 'jpg', 'pjp', 'png', 'pjpeg', 'ico', 'cur', 'gif', 'apng'];
    try {
      var listFormatImg = this.URLLink.split('.');
      var formatImg = listFormatImg[listFormatImg.length-1];
      if(commonFormats.includes(formatImg.toLowerCase())) {
        this.imgURL = this.URLLink;
      } else {
        this.imgURL = this.URLLink;
        this.isIFrame = true;
      }
    } catch(e) {
      this.isIFrame = false;
    }
  }
   downloadResults() {
     this.evaluateService.csvDownload(this.headers, this.globalResults);
   }
   calculatePonderation() {
     var summatoryCurrentAsignation = 0;
     var summatoryTotalAsignation = 0;
     this.formValue.forEach((value, index) => {
       if (value.optionLinkert != 0 && value.optionLinkert != 1) {
         var currentAssignation = (value.optionLinkert - 2) *  this.constWeightHeuristics[index];
         var maxAssignation = 4 * this.constWeightHeuristics[index];
         summatoryCurrentAsignation += currentAssignation;
         summatoryTotalAsignation += maxAssignation;
         
         this.scoreAll.push(((currentAssignation * 10)/maxAssignation).toFixed(2));
       } else {
         this.scoreAll.push(value.optionLinkert != 0 ? 'NP' : 'NA');
       }
       this.globalResults.push({
         heuristica: 'H' + (index+1) + ' - ' + this.constHeuristicsTitles[index],
         seleccion: this.constLikert[value.optionLinkert],
         peso: this.constWeightHeuristics[index],
         nota: this.scoreAll.at(index)
       })
     });
 
     this.totalResult = ((summatoryCurrentAsignation * 10)/summatoryTotalAsignation).toFixed(2);
     this.globalResults.push({
       heuristica: "NOTA GLOBAL",
       nota: this.totalResult
     });
     const dataSource = {
       chart: {
         caption: "Puntuación global del gráfico",
         subcaption: "Valor ponderado en base 10",
         lowerLimit: "0",
         upperLimit: "10",
         showGaugeBorder: "1",
         gaugeBorderThickness: "2",
         theme: "fusion"
       },
       colorRange: {
         color: [
           {
             minValue: "0",
             maxValue: "2",
             code: "#fb7272",
             borderColor: "#00000",
             borderAlpha: "100"
           },
           {
             minValue: "2",
             maxValue: "4",
             code: "#ffb453",
             borderColor: "#00000",
             borderAlpha: "100"
           },
           {
             minValue: "4",
             maxValue: "6",
             code: "#fff559",
             borderColor: "#00000",
             borderAlpha: "100"
           },
           {
             minValue: "6",
             maxValue: "8",
             code: "#b6fb62",
             borderColor: "#00000",
             borderAlpha: "100"
           },
           {
             minValue: "8",
             maxValue: "10",
             code: "#7beaa6",
             borderColor: "#00000",
             borderAlpha: "100"
           }
         ]
       },
       dials: {
         dial: [
           {
             value: this.totalResult.toString()
           }
         ]
       }
     }
     this.dataSource = dataSource;
   }
   redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: false}).then(() =>
    this.router.navigate([uri]));
  }
}
