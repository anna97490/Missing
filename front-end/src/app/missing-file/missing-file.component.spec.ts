import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingFileComponent } from './missing-file.component';

describe('MissingFileComponent', () => {
  let component: MissingFileComponent;
  let fixture: ComponentFixture<MissingFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissingFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
