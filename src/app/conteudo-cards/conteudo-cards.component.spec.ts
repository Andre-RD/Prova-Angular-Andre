import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoCardsComponent } from './conteudo-cards.component';

describe('ConteudoCardsComponent', () => {
  let component: ConteudoCardsComponent;
  let fixture: ComponentFixture<ConteudoCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConteudoCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
