import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TantargyComponent } from './tantargy.component';

describe('TantargyComponent', () => {
  let component: TantargyComponent;
  let fixture: ComponentFixture<TantargyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TantargyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TantargyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
