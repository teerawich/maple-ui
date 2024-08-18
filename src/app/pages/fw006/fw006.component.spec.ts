import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fw006Component } from './fw006.component';

describe('Fw006Component', () => {
  let component: Fw006Component;
  let fixture: ComponentFixture<Fw006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fw006Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fw006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
