import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  constructor() {}

  generateRandomId(): number {
    return Math.floor(Math.random() * 100);
  }

  // TO DO: implement logic to not overwrite an existent id
  checkIdExists(list: [], id: number): boolean {
    return true;
  }
}
