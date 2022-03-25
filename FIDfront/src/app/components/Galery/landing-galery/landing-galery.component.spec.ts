import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingGaleryComponent } from './landing-galery.component';

describe('LandingGaleryComponent', () => {
  let component: LandingGaleryComponent;
  let fixture: ComponentFixture<LandingGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
