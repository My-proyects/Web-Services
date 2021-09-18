import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CovidComponent } from "./covid/covid.component";
import { JuegoComponent } from "./juego/juego.component";
import { MainComponent } from "./main/main.component";
import { NoticiasComponent } from "./noticias/noticias.component";


const routes: Routes = [
  {path: '', component: MainComponent, children: // aqui se applica leazy load
    [
        {path: '', redirectTo: 'noticia', pathMatch: 'full'},
        {path: 'noticia', component: NoticiasComponent},
        {path: 'covid', component: CovidComponent},
        {path: 'juego', component: JuegoComponent}
    ]
  },
];

@NgModule({ 
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})

export class PublicRoutingModule{}
