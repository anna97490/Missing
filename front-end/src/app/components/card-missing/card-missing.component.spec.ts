import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMissingComponent } from './card-missing.component';

describe('CardMissingComponent', () => {
  let component: CardMissingComponent;
  let fixture: ComponentFixture<CardMissingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMissingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMissingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
