import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {


  demotext: any ='';
  constructor() { }

  ngOnInit(): void {
    this.demotext = localStorage.getItem("dataSource");
    console.log(this.demotext);
  }


 
}
