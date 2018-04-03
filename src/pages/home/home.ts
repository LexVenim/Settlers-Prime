import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  platforms : any = [
    {name: "desktop", color: "dark", text: "Website"},
    {name: "logo-chrome", color: "danger", text: "Chrome Extension"},
    {name: "logo-android", color: "secondary", text: "Android"}
  ]

  features : any = [
    {name: "Adventure guides", guest: true},
    {name: "Battle and Colony Simulators", guest: true},
    {name: "Questbook", guest: true},
    {name: "Trade Prices", guest: true},
    {name: "Economy Planner"},
    {name: "Guilds and Messaging"},
    {name: "Island Planning"},
    {name: "Notifications"},
    {name: "Specialists and Skils"}
  ]

  constructor(public navCtrl: NavController) {

  }

}
