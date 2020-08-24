import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ConteudoHomeComponent } from './conteudo-home/conteudo-home.component';
import { ConteudoPricingComponent } from './conteudo-pricing/conteudo-pricing.component';
import { ConteudoFormsComponent } from './conteudo-forms/conteudo-forms.component';
import { ConteudoCardsComponent } from './conteudo-cards/conteudo-cards.component';
import { ConteudoBlocksComponent } from './conteudo-blocks/conteudo-blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    FooterMainComponent,
    SidebarComponent,
    ConteudoHomeComponent,
    ConteudoPricingComponent,
    ConteudoFormsComponent,
    ConteudoCardsComponent,
    ConteudoBlocksComponent,
  ],
  imports: [
    BrowserModule
    ConteudoHomeComponent,
    ConteudoPricingComponent,
    ConteudoFormsComponent,
    ConteudoCardsComponent,
    ConteudoBlocksComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
