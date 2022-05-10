import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OktatoComponent } from './oktato.component';

describe('OktatoComponent', () => {
  let component: OktatoComponent;
  let fixture: ComponentFixture<OktatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OktatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OktatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
