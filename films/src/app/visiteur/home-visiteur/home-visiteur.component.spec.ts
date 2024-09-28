import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVisiteurComponent } from './home-visiteur.component';

describe('HomeVisiteurComponent', () => {
  let component: HomeVisiteurComponent;
  let fixture: ComponentFixture<HomeVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeVisiteurComponent]
    });
    fixture = TestBed.createComponent(HomeVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
