import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDComponent } from './name-d.component';

describe('NameDComponent', () => {
  let component: NameDComponent;
  let fixture: ComponentFixture<NameDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameDComponent]
    });
    fixture = TestBed.createComponent(NameDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
