import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldCombinationComponent } from './old-combination.component';

describe('OldCombinationComponent', () => {
  let component: OldCombinationComponent;
  let fixture: ComponentFixture<OldCombinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldCombinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldCombinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
