import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-recommendations.component.html',
  styleUrl: './daily-recommendations.component.css'
})
export class DailyRecommendationsComponent implements OnInit {

  getProfileData: any; slideIndex: any; mamithaBtn: boolean = false; kiaraBtn: boolean = false; deepBtn: boolean = false;
  aliaBtn: boolean = true; noRecommendation: boolean = false;
  constructor(public router: Router) { }

  ngOnInit() {
    let recData = {
      Alia: {
        name: "Devi",
        age: '29 Yrs',
        height: '5 ft 6 in',
        cas: 'Poosam',
        occupation: 'Engineer',
        address: "No 18, Murugan street, Vadapalani, Tamil Nadu, India"
      },
      Mamitha: {
        name: "Nandhini",
        age: '27 Yrs',
        height: '5 ft 3 in',
        cas: 'Nair',
        occupation: 'Software Engineer',
        address: "No 1, Pillaiyar street, Adyar, Tamil Nadu, India"
      },
      kiara: {
        name: "Medhu",
        age: '29 Yrs',
        height: '6 ft 1 in',
        cas: 'Poosam',
        occupation: 'Teacher',
        address: "No 30, Sarath colony, Mathur, Tamil Nadu, India"
      },
      Deep: {
        name: "Heshma",
        age: '28 Yrs',
        height: '6 ft 2 in',
        cas: 'Niarx',
        occupation: 'Pilot',
        address: "No 5, defence colony, Vandalur, Tamil Nadu, India"
      }
    };

    localStorage.setItem("Priyanka", JSON.stringify(recData));
    let parseData: any = localStorage.getItem('Priyanka');
    this.getProfileData = JSON.parse(parseData);
  }
  goBack() {
    this.router.navigate(['']);
  }

  crossIcon(event: any) {
    alert("Not Interested");
    this.slideShow(event);
  }

  greenTick(event: any) {
    alert("Interested");
    console.log(event);
    this.slideShow(event);
    // this.slideIndex = event;
  }

  shortList(event: any) {
    alert("Shortlisted");
    this.slideShow(event);
  }

  slideShow(event: any) {
    switch (event) {
      case 'Alia': this.aliaBtn = false; this.mamithaBtn = true; this.kiaraBtn = false; this.deepBtn = false;
        break;
      case 'Mamitha': this.aliaBtn = false; this.mamithaBtn = false; this.kiaraBtn = true; this.deepBtn = false;
        break;
      case 'Kiara': this.aliaBtn = false; this.mamithaBtn = false; this.kiaraBtn = false; this.deepBtn = true;
        break;
      case 'Deep': this.noRecommendation = true; this.deepBtn = false;
        break;
    }
  }


}
