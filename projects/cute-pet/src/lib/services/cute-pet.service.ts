import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CutePetModel } from '../models/cute-pet.model';
import { Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CutePetService {
  private readonly apiURL = 'https://petstore3.swagger.io/api/v3/pet';

  constructor(private http: HttpClient) {}

  getPetsByStatus(status: string): Observable<CutePetModel[]> {
    return this.http.get<CutePetModel[]>(
      `${this.apiURL}/findByStatus?status=${status}`
    );
  }

  getPetById(id: number): Observable<CutePetModel> {
    return this.http.get<CutePetModel>(`${this.apiURL}/${id}`);
  }

  deletePet(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`, {
      headers: new HttpHeaders().set('api_key', ''),
    });
  }

  editPet(pet: CutePetModel): Observable<any> {
    return this.http.put<any>(this.apiURL, pet);
  }

  createPet(pet: CutePetModel): Observable<CutePetModel> {
    return this.http.post<any>(this.apiURL, pet).pipe(take(1));
  }
}
