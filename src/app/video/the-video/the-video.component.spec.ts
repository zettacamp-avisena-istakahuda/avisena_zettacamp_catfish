import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVideoComponent } from './the-video.component';

describe('TheVideoComponent', () => {
  let component: TheVideoComponent;
  let fixture: ComponentFixture<TheVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
