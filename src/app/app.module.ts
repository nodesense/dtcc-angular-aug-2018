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
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

// angular 4.3 onwards, Ajax calls
import {HttpClientModule} from '@angular/common/http';

// Configure url path to component mapping
import {RouterModule, Routes} from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';
import { SortPipe } from './pipes/sort.pipe';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    {
        path: '', // localhost:4200
        component: HomeComponent
    },
    {
        // when we visit localhost:4200/about
            // Angular creates AboutComponent instance
            // while leaving about page
            // Angular shall remove the component
            //    1. HTML view (DOM)
            //    2. Instance
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: '**', // end of config
        component: NotFoundComponent
    }
];

// meta data
@NgModule({
    imports: [
        // reference to other modules
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes), // apply routes to angular
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
        AboutComponent,
        ContactComponent,
        NotFoundComponent,
        ProductListComponent,
        SortPipe, 

        // all your components
    ],

    bootstrap: [
       AppComponent
    ],
    providers: [
        ProductService
    ]
})
export class AppModule {

}
