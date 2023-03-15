import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DetailHeuristicsService {

    constructor(private http: HttpClient){}

	getHeuristics(): Observable<any>{
        return this.http.get('./../../../../assets/heuristicsList.json');
    }
}
