import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent {
  typeImport: string = '';
  nameFile: string = 'No se ha seleccionado ningún archivo';
  file:any = null; 
  dbImage: any = null;
  postResponse: any = null;
  successResponse: string = null;
  image: any = null;
  constructor(    
    private router: Router,
    private httpClient: HttpClient
  ) {}
  redirectTo(uri: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }
  redirectToHeuristics() {
    this.redirectTo('/heuristics-list');
  }
  manageImage(event) {
    this.file = event.target.files[0];
    this.nameFile = this.file.name;
    this.imageUploadAction();
    this.viewImage();
  }

  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.file, this.file.name);


    this.httpClient.post('http://localhost:4200/upload/image/', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    }

  viewImage() {
    this.httpClient.get('http://localhost:4200/get/image/info/' + this.image)
      .subscribe(
        res => {
          this.postResponse = res;
          this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        }
      );
  }
}
