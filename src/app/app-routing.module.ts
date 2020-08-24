import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteudoHomeComponent } from './conteudo-home/conteudo-home.component';
import { ConteudoPricingComponent } from './conteudo-cards/conteudo-cards.component';
import { ConteudoFormsComponent } from './conteudo-pricing/conteudo-pricing.component';
import { ConteudoCardsComponent } from './conteudo-blocks/conteudo-blocks.component';
import { ConteudoBlocksComponent} from './conteudo-forms/conteudo-forms.component';


export const routes: Routes = [
    {
        path: '/home',
        component:  ConteudoHomeComponent
    },
    {
        path: '/cards',
        component: ConteudoCardsComponent
    },
    {
        path: '/pricing',
        component: ConteudoPricingComponent
    },
    {
        path: '/blocks',
        component: ConteudoBlocksComponent
    },
    {
        path: '/form',
        component: ConteudoFormsComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

