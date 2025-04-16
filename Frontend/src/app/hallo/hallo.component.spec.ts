import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloComponent } from './hallo.component';

describe('HalloComponent', () => {
  let component: HalloComponent;
  let fixture: ComponentFixture<HalloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
