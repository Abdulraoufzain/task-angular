import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackOverFlowComponent } from './stack-over-flow.component';

describe('StackOverFlowComponent', () => {
  let component: StackOverFlowComponent;
  let fixture: ComponentFixture<StackOverFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackOverFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StackOverFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
