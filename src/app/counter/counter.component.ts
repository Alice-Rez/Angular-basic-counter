import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  min:number=0;
  max:number=10;

  //why two-way binding does not work when I had value number and not string? Because of types?
  counterValue:number=0;

  changeCounter(value:number){
    this.counterValue = this.counterValue+value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
