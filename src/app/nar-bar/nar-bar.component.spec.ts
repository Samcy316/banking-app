import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarBarComponent } from './nar-bar.component';

describe('NarBarComponent', () => {
  let component: NarBarComponent;
  let fixture: ComponentFixture<NarBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NarBarComponent]
    });
    fixture = TestBed.createComponent(NarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
