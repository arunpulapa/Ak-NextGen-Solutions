import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestandmainComponent } from './testandmain.component';

describe('TestandmainComponent', () => {
  let component: TestandmainComponent;
  let fixture: ComponentFixture<TestandmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestandmainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestandmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
