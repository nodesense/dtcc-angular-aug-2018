import {NgModule} from '@angular/core';

import {BrowserModule} 
            from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


// meta data
@NgModule({
    imports: [
        // reference to other modules
        BrowserModule
    ],

    declarations: [
        // all the components, directives, pipes
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent, 

        // all your components
    ],

    bootstrap: [
       AppComponent
    ]
})
export class AppModule {

}
