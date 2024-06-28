import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Platform';

  user:any = {
    firstName : "Charles-Haris",
    lastName : "BOUASSE BU KOMBILE",
    tel :"059 944 7496",
    address : "Bohey Taxi Rank",
    dateOfBirth : "14 May 1998",
  }
}
