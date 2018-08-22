import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  highlight: boolean;
  show: boolean = true;

  homeLikes: number = 100;

  constructor() { 
    console.log('Home component created')
  }

  ngOnInit() {
    //this.highlight = "";
  }

}
