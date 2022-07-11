import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutePetComponent } from './cute-pet.component';

describe(CutePetComponent.name, () => {
  let component: CutePetComponent;
  let fixture: ComponentFixture<CutePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CutePetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CutePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
