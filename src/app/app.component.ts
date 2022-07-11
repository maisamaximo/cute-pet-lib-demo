import { Component } from '@angular/core';
import { CutePetModel, CutePetService } from 'cute-pet';
import { Observable } from 'rxjs';
@Component({
  selector: 'pet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cute-pet-store-demo';

  petList$!: Observable<CutePetModel[]>;

  constructor(private petService: CutePetService) {
    this.petList$ = this.petService.getPetsByStatus('pending');
  }
}
