import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrayerQuizComponent } from './prayer-quiz.component';

describe('PrayerQuizComponent', () => {
  let component: PrayerQuizComponent;
  let fixture: ComponentFixture<PrayerQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrayerQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrayerQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
