import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  //Assignment 1
  username = "";

  //Assignment 2
  showSecret = false;
  log = [];
  logAdd = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
    this.logAdd.push(new Date());
  }
  onToggleDetailsIndex(){
    this.logAdd.push(new Date());
  }

  constructor() { }

  ngOnInit(): void {
  }

}
