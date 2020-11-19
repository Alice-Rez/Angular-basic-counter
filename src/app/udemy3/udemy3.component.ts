import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy3',
  templateUrl: './udemy3.component.html',
  styleUrls: ['./udemy3.component.css']
})
export class Udemy3Component implements OnInit {
  display= false;
  clicks=[];
  counter=1;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    if(this.display===true){
      this.display=false;
    } else {
      this.display=true;
    }
    this.clicks.push(this.counter)
    this.counter++;
    console.log(this.clicks)
  }

  getColor(value:number){
    return value>=5?"white":"black";
  }
}
