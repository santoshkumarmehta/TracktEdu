import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rightsidenav',
  templateUrl: './rightsidenav.component.html',
  styleUrls: ['./rightsidenav.component.css']
})
export class RightsidenavComponent implements OnInit {
time:any = "4:30PM";
name:String ="Name:sfds";
msgHeading:String = "Message Heading";

  constructor() { }

  ngOnInit() {
  }

}
