import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsListesComponent } from './formations-listes.component';

describe('FormationsListesComponent', () => {
  let component: FormationsListesComponent;
  let fixture: ComponentFixture<FormationsListesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationsListesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationsListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
