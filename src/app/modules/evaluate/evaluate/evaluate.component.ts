import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
  image: any = null;
  @ViewChild('pdfResults')
  pdfResults!: ElementRef;
  startEvaluation: boolean = false;
  showResultsBrief: boolean = false;
  showTotalResults: boolean = false;
  showResults: boolean =  false;
  showIntroduction: boolean = true;
  totalResult: any = 0;
  _idValueHeuristics: any = 0;
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

  constructor(
    private router: Router
  ) {}
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
  manageImage(event) {
    this.file = event.target.files[0];
    this.nameFile = this.file.name;
    var reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
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
      this.showTotalResults = false;
      this.showIntroduction = true;
    }
  }

  pushInfoForm(event) {
    if(event) {
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
    } else {
      this.backButton();
    }
  }
  redirectToEvaluate() {
   this.redirectTo('/evaluate')
  }
  downloadResults() {
    let DATA: any = document.getElementById('pdfResults');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
  calculatePonderation() {
    var summatoryCurrentAsignation = 0;
    var summatoryTotalAsignation = 0;
    this.formValue.forEach((value, index) => {
      console.log(value.optionLinkert);

      if (value.optionLinkert != 0 && value.optionLinkert != 1) {
        var currentAssignation = (value.optionLinkert - 2) *  this.constWeightHeuristics[index];
        var maxAssignation = 6 * this.constWeightHeuristics[index];
        summatoryCurrentAsignation += currentAssignation;
        summatoryTotalAsignation += maxAssignation;

        this.scoreAll.push(((currentAssignation * 10)/maxAssignation).toFixed(2));
      } else {
        this.scoreAll.push(value.optionLinkert != 0 ? 'NP' : 'NA');
      }
    });

    this.totalResult = ((summatoryCurrentAsignation * 10)/summatoryTotalAsignation).toFixed(2);
  }

  deleteImage() {
    this.imgURL = null;
    this.nameFile = 'No se ha seleccionado ningún archivo';
    this.inputValue = ''
  }
  goToResults() {
    console.log(this.formValue);
  }

}
