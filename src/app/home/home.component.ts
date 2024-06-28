import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user:any = {
    firstName : "Charles-Haris",
    lastName : "BOUASSE BU KOMBILE",
    tel :"059 944 7496",
    address : "Bohey Taxi Rank",
    dateOfBirth : "14 May 1998",
  }


}
