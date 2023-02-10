import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMissingFileComponent } from './list-missing-file.component';

describe('ListMissingFileComponent', () => {
  let component: ListMissingFileComponent;
  let fixture: ComponentFixture<ListMissingFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMissingFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMissingFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
