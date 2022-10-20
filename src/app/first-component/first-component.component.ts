import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  demotext: any;
  // arry=[];
  constructor() { }


  ngOnInit(): void {
  }

  onclick(){
    localStorage.setItem('dataSource', this.demotext);
  }

}
