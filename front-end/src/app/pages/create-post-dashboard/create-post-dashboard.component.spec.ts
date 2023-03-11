import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostDashboardComponent } from './create-post-dashboard.component';

describe('CreatePostDashboardComponent', () => {
  let component: CreatePostDashboardComponent;
  let fixture: ComponentFixture<CreatePostDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePostDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePostDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
