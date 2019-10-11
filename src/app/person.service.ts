import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPerson } from './person';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  constructor(private http : HttpClient) { }

  private x : string = "/assets/JSONData/persons.json";

  getData () : Observable <IPerson[]>
  {
    return this.http.get<IPerson[]>(this.x).pipe(catchError(this.showError));
  }

  showError (errorResponse : HttpErrorResponse) {
    if(errorResponse.error instanceof ErrorEvent) {
      console.log('client side error', errorResponse.error.message);
    }
    else {
      console.log('Server side error', errorResponse.error.message);
    }
    return throwError('Please try again later, we are working to solve this issues.')
  }
}
