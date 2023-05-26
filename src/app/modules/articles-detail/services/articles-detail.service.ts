import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DetailArticleService {

    constructor(private http: HttpClient){}

	getArticles(): Observable<any>{
        return this.http.get('./assets/articlesCarousel.json');
    }
}
