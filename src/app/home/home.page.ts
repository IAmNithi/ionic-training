import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  // value declaration
  input1: number;
  input2: number;
  result: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  /* user Defined Function */
  printValue(){
    this.result = 0;
    this.result = this.input1 + this.input1;
  }

}
