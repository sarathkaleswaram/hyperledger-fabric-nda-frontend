import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNDAComponent } from './add-nda.component';

describe('AddNDAComponent', () => {
  let component: AddNDAComponent;
  let fixture: ComponentFixture<AddNDAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNDAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNDAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
