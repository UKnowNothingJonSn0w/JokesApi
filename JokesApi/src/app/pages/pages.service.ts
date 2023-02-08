import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PagesService {

    constructor(private http: HttpClient) {
    }


    LoadJokes(): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/jokes`).pipe(
            map(response => {
                return response;
            })
        )
    };

    LoadCategories(): Observable<any> {
        return this.http.get<any>(`http://localhost:3000/categories`).pipe(
            map(response => {
                return response;
            })
        )
    };

    AddJoke(json_data: any): Observable<any> {
        return this.http.post<any>(`http://localhost:3000/jokes`, json_data).pipe(
          map(response => {
            return response;
          })
        )
      };

}
