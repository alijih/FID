import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOpenedComponent } from './new-opened.component';

describe('NewOpenedComponent', () => {
  let component: NewOpenedComponent;
  let fixture: ComponentFixture<NewOpenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOpenedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOpenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
