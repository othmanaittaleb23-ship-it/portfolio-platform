import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechIconComponent } from './tech-icon.component';

describe('TechIcon', () => {
  let component: TechIconComponent;
  let fixture: ComponentFixture<TechIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechIconComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
