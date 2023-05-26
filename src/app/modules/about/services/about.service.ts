import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AboutService {

    constructor(private http: HttpClient){}

	getContext(): Observable<any>{
        return this.http.get('./assets/introduction.json');
    }
}
