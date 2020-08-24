import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoFormsComponent } from './conteudo-forms.component';

describe('ConteudoFormsComponent', () => {
  let component: ConteudoFormsComponent;
  let fixture: ComponentFixture<ConteudoFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
