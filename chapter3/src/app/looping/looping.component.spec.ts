import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopingComponent } from './looping.component';

describe('LoopingComponent', () => {
  let component: LoopingComponent;
  let fixture: ComponentFixture<LoopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
