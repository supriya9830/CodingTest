import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecommendationsComponent } from './daily-recommendations.component';

describe('DailyRecommendationsComponent', () => {
  let component: DailyRecommendationsComponent;
  let fixture: ComponentFixture<DailyRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyRecommendationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DailyRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
