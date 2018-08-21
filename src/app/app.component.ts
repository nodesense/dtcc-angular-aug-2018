import {Component} from '@angular/core';

import { Address } from './models/address';

// meta data
@Component({
    selector: 'app-root', // component name
    templateUrl: 'app.component.html', // view
    styleUrls: [
        'app.component.css'
    ]
})
export class AppComponent {
    // model
    appTitle = 'Product App NG 6';

    pageLikes = 0;

    officeAddress: Address = {
        city: 'Chennai',
        country: 'IN'
    };

    increment() {
        this.pageLikes++;
    }

    greeting() {
        alert('Welcome');
    }
    
}
