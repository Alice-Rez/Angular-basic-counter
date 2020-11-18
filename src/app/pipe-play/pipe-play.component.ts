import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-play',
  templateUrl: './pipe-play.component.html',
  styleUrls: ['./pipe-play.component.css']
})
export class PipePlayComponent implements OnInit {

  date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
