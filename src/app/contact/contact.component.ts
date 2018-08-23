import { Component, 
        OnInit, 
        OnDestroy
      } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  counter = 0;
  timer: any;

  constructor() { 
    console.log('Contact Component created');
  }

  // called after first render
  // view ready/component loaded
  ngOnInit() {
    this.timer = setInterval( () => {
      this.counter++;
      console.log('counter ', this.counter);
    }, 3000);
  }

  // called when component getting destroyed
  // Garbage collector
  ngOnDestroy() {
    console.log('Contact onDestroy');
    clearInterval(this.timer);
  }

}
