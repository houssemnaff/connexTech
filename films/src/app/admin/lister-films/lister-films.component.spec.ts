import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerFilmsComponent } from './lister-films.component';

describe('ListerFilmsComponent', () => {
  let component: ListerFilmsComponent;
  let fixture: ComponentFixture<ListerFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListerFilmsComponent]
    });
    fixture = TestBed.createComponent(ListerFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
