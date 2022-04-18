import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessEntry } from '../model/models';

@Injectable({
  providedIn: 'root',
})
export class BusinessEntryService {
  constructor(private http: HttpClient) {}

  getBusinessEntryById(id: string): Observable<BusinessEntry> {
    return this.http.get<BusinessEntry>('http://localhost:8080/business/' + id);
  }
}
