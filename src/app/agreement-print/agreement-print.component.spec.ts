import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementPrintComponent } from './agreement-print.component';

describe('AgreementPrintComponent', () => {
  let component: AgreementPrintComponent;
  let fixture: ComponentFixture<AgreementPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
