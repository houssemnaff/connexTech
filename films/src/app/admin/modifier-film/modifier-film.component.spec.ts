import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFilmComponent } from './modifier-film.component';

describe('ModifierFilmComponent', () => {
  let component: ModifierFilmComponent;
  let fixture: ComponentFixture<ModifierFilmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierFilmComponent]
    });
    fixture = TestBed.createComponent(ModifierFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
