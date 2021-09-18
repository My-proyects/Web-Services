import { NgModule } from "@angular/core";
import {HttpClientModule} from '@angular/common/http';

import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
    imports: [
        HttpClientModule,
        RouterModule,
        FormsModule,
        CommonModule
    ],
    declarations: [
        NotFoundComponent,
        NavBarComponent,
        FooterComponent,
        HeaderComponent
        //NotFoundComponent
    ],
    exports: [
        HttpClientModule,
        RouterModule,
        NotFoundComponent,
        NavBarComponent,
        FooterComponent,
        HeaderComponent,
        FormsModule,
        CommonModule
        //NotFoundComponent
    ],
    providers:[]
})

export class SharedModule{
    constructor(){}
}