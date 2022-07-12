import { CutePetService } from './../services/cute-pet.service';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CutePetModel } from '../models/cute-pet.model';

@Component({
  selector: 'lib-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css'],
})
export class PetListComponent implements OnInit {
  petAvailable$!: Observable<CutePetModel[]>;
  petPendent$!: Observable<CutePetModel[]>;
  petSold$!: Observable<CutePetModel[]>;
  error$ = new Subject<boolean>();

  constructor(public cutePetService: CutePetService) {}

  ngOnInit(): void {
    this.onRefresh();
  }

  getPets(): void {
    this.petAvailable$ = this.getPetsByStatus('available');
    this.petPendent$ = this.getPetsByStatus('pending');
    this.petSold$ = this.getPetsByStatus('sold');
  }

  getPetsByStatus(status: string): Observable<CutePetModel[]> {
    return this.cutePetService.getPetsByStatus(status).pipe(
      catchError((error) => {
        console.error(error);
        this.error$.next(true);
        return EMPTY;
      })
    );
  }

  onRefresh(): void {
    this.getPets();
  }
}
