import {NgModule} from '@angular/core';

import {BrowserModule} 
            from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartModule } from './cart/cart.module';
import { FileSizePipe } from './pipes/file-size.pipe';
import { HighlightDirective } from './directives/highlight.directive';


// meta data
@NgModule({
    imports: [
        // reference to other modules
        BrowserModule,
        CartModule
    ],

    declarations: [
        // all the components, directives, pipes
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        FileSizePipe,
        HighlightDirective, 

        // all your components
    ],

    bootstrap: [
       AppComponent
    ]
})
export class AppModule {

}
