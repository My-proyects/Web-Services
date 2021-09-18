import { NgModule } from "@angular/core";
import { SharedModule } from "../core/shared/shared.module";
import { PublicRoutingModule } from "./public-routing.module";


import { MainComponent } from "./main/main.component";
import { NoticiasComponent } from "./noticias/noticias.component";
import { CovidComponent } from "./covid/covid.component";

@NgModule({
    imports: [
        PublicRoutingModule,
        SharedModule,
    ],
    declarations: [
      MainComponent,
      NoticiasComponent,
      CovidComponent
    ],
    exports: [
        MainComponent
    ],
    providers:[]
})

export class PublicModule{
    constructor(){}
}
