import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";


import { MainComponent } from "./main/main.component";
import { NoticiasComponent } from "./noticias/noticias.component";
import { CovidComponent } from "./covid/covid.component";
import { JuegoComponent } from './juego/juego.component';

@NgModule({
    imports: [
        PublicRoutingModule,
        SharedModule,
    ],
    declarations: [
      MainComponent,
      NoticiasComponent,
      CovidComponent,
      JuegoComponent
    ],
    exports: [
        MainComponent
    ],
    providers:[]
})

export class PublicModule{
    constructor(){}
}
