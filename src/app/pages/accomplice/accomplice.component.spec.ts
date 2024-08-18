import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccompliceComponent } from './accomplice.component';

describe('AccompliceComponent', () => {
  let component: AccompliceComponent;
  let fixture: ComponentFixture<AccompliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccompliceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccompliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
