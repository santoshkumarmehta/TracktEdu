import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  countries=['India','Sri Lanka','Brazil','Bangladesh','UAE','USA','Canada','Canbara'];
  constructor() { }

  ngOnInit() {
  }
  frmControl = new FormControl();
  
}
