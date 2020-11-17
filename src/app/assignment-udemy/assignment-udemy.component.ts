import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-udemy',
  templateUrl: './assignment-udemy.component.html',
  styleUrls: ['./assignment-udemy.component.css']
})
export class AssignmentUdemyComponent implements OnInit {
  userName:string="";

  resetUserName(){
    this.userName="";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
