import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsReceitasComponent } from './cds-receitas.component';

describe('CdsReceitasComponent', () => {
  let component: CdsReceitasComponent;
  let fixture: ComponentFixture<CdsReceitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsReceitasComponent]
    });
    fixture = TestBed.createComponent(CdsReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
