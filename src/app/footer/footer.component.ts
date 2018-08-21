import { Component, OnInit,
         Input
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // Input - property binding

  // meta data for attribute
  @Input()
  company: string;

  @Input()
  year: number;

  @Input()
  address: any;

  constructor() { }

  ngOnInit() {
     
  }

}
