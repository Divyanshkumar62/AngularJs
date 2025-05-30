import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event2Component } from './event2.component';

describe('Event2Component', () => {
  let component: Event2Component;
  let fixture: ComponentFixture<Event2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Event2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Event2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
