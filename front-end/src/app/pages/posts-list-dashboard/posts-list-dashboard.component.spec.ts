import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListDashboardComponent } from './posts-list-dashboard.component';

describe('PostsListDashboardComponent', () => {
  let component: PostsListDashboardComponent;
  let fixture: ComponentFixture<PostsListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
