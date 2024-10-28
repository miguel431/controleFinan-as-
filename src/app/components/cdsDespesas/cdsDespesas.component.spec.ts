import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdsDespesasComponent } from './cds-despesas.component';

describe('CdsDespesasComponent', () => {
  let component: CdsDespesasComponent;
  let fixture: ComponentFixture<CdsDespesasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdsDespesasComponent]
    });
    fixture = TestBed.createComponent(CdsDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
