import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { MessageService } from 'primeng/api';
import { EvaluateService } from '../services/evaluate.service';
@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent {
  typeImport: string = 'imgUpload';
  nameFile: string = 'No se ha seleccionado ningún archivo';
  file:any = null;
  inputValue: any = '';
  imgURL: any = null;
  URLLink: string = '';
  image: any = null;
  @ViewChild('pdfResults')
  pdfResults!: ElementRef;
  startEvaluation: boolean = false;
  showResultsBrief: boolean = false;
  showResults: boolean =  false;
  showIntroduction: boolean = true;
  isComingFromBrief: boolean = false;
  isIFrame:boolean = false;
  totalResult: any = 0;
  _idValueHeuristics: any = 0;
  _okImageInput: boolean = true;
  _loadedImageInput: boolean = false;
  _idValueProgressBar: any = this.calculateProgress(this._idValueHeuristics);
  _idHeuristic: string = 'H' + (this._idValueHeuristics + 1).toString();
  formValue: any = [];
  oldFormValue: any = [];
  constLikert: any = ['No aplica', 'No es problema', 'No cumplimiento', 'Cumplimiento muy bajo', 'Cumplimiento bajo', 'Cumplimiento aceptable', 'Cumplimiento alto', 'Cumplimiento muy alto', 'Cumplimiento excelente'];
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
  constWeightHeuristics: any = [1,1,1,1,1,1,1,1,3,3,3,2,3,2,3,1,3,2,];
  scoreAll:any = [];
  globalResults: any = [];
  headers: any[] = ['Heuristica', 'Nota', 'Seleccion', 'Peso'];
  constructor(
    private router: Router,
    private messageService: MessageService,
    private evaluateService: EvaluateService,
  ) {}

  ngOnInit() {
    this.startEvaluation = false;
    this.showResultsBrief = false;
    this.showResults =  false;
    this.showIntroduction = true;
    this.isComingFromBrief = false;
    this._loadedImageInput = false;
    this._okImageInput = true;
    this.URLLink = '';
    this.typeImport = 'imgUpload';
    this.nameFile = 'No se ha seleccionado ningún archivo';
    this.file = null;
    this.inputValue = '';
    this.imgURL = null;
    this.image = null;
    this.totalResult = 0;
    this._idValueHeuristics = 0;
    this._idValueProgressBar = this.calculateProgress(this._idValueHeuristics);
    this._idHeuristic = 'H' + (this._idValueHeuristics + 1).toString();
    this.formValue = [];
    this.oldFormValue = [];
  }
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }
  calculateProgress(currentIndex) {
    return currentIndex * 5.56;
  }
  redirectToHeuristics() {
    this.redirectTo('/heuristics-list');
  }
  changeTypeInput(event) {    
    this.isIFrame = false;
    if(this.typeImport === 'imgUpload'){
      this.URLLink = '';
    } else {
      this.nameFile = 'No se ha seleccionado ningún archivo';
      this.file = null;
      this.inputValue = '';
      this.imgURL = null;
      this.image = null;
      this._okImageInput = true;
      this._loadedImageInput = false;
    }
  }
  manageImage(event) {
    this._okImageInput = true;
    try {
      this.file = event.target.files[0];
      this.nameFile = this.file.name;
      var reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
      this._loadedImageInput = true;
    } catch(e) {
      this._okImageInput = false;
    }
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
      console.log(e);
    }
  }
  startEvaluationMethod() {
    this.startEvaluation = true;
    this.showIntroduction = false;
  }
  backButton() {
    if (this.formValue.length > 0) {
      this._idValueHeuristics -= 1;
      this.formValue.pop();
      this._idHeuristic = 'H' + (this._idValueHeuristics + 1).toString();
      this. _idValueProgressBar = this.calculateProgress(this._idValueHeuristics);
    } else {
      this.startEvaluation = false;
      this.showResultsBrief = false;
      this.showIntroduction = true;
    }
  }

  pushInfoForm(event) {
    if(event) {
      if(this.isComingFromBrief) {
        this.isComingFromBrief = false;
        this.formValue.splice(this._idValueHeuristics, 1, event);
        this.startEvaluation = false;
        this.showResultsBrief = true;
        this.oldFormValue = [...this.formValue];
      } else {
        this.isComingFromBrief = false;
        if(this._idValueHeuristics === 17) {
          this.startEvaluation = false;
          this.showResultsBrief = true;
          this.formValue.push(event);
          this.calculatePonderation();
        } else {
          this.formValue.push(event);
          this._idValueHeuristics += 1;
          this._idHeuristic = 'H' + (this._idValueHeuristics + 1).toString();
          this. _idValueProgressBar = this.calculateProgress(this._idValueHeuristics);
          this.oldFormValue = [...this.formValue];
        }
      }
    } else {
      this.backButton();
    }
  }
  goToAnswer(position) {
    this.startEvaluation = true;
    this.showResultsBrief = false;
    this.isComingFromBrief = true;
    this._idValueHeuristics = position;
    this._idHeuristic = 'H' + (this._idValueHeuristics + 1).toString();
    this. _idValueProgressBar = this.calculateProgress(this._idValueHeuristics);
  }
  redirectToEvaluate() {
   this.redirectTo('/evaluate')
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
        var maxAssignation = 6 * this.constWeightHeuristics[index];
        summatoryCurrentAsignation += currentAssignation;
        summatoryTotalAsignation += maxAssignation;
        
        this.scoreAll.push(((currentAssignation * 10)/maxAssignation).toFixed(2));
      } else {
        this.scoreAll.push(value.optionLinkert != 0 ? 'NP' : 'NA');
      }
      this.globalResults.push({
        heuristica: 'H' + (index+1) + ' - ' + this.constHeuristicsTitles[index],
        nota: this.scoreAll.at(index),
        seleccion: this.constLikert[value.optionLinkert],
        peso: this.constWeightHeuristics[index]
      })
    });

    this.totalResult = ((summatoryCurrentAsignation * 10)/summatoryTotalAsignation).toFixed(2);
  }

  deleteImage() {
    this.imgURL = null;
    this.nameFile = 'No se ha seleccionado ningún archivo';
    this.inputValue = ''
  }
  goToResults() {
    var isValidForm = true;
    this.formValue.forEach(function(element) {
      if (!element || !element.optionLinkert) {
        isValidForm = false;
      }
    })
    if(!isValidForm) {
      this.messageService.add({severity: 'error', summary:'Error', detail: 'Aun quedan heurísticas por responder'});
    } else {
      this.startEvaluation = false;
      this.showResultsBrief = false;
      this.showResults =  true;
      this.showIntroduction = false;
    }
  }

}
