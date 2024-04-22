import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../app.routes';
import { DailyRecommendationsComponent } from '../daily-recommendations/daily-recommendations.component';
import { ProfileDetailsComponent } from '../profile-details/profile-details.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterModule, DailyRecommendationsComponent, ProfileDetailsComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  getProfile: any; Age = ''; Address: string = ''; profileArray = [];

  constructor(public router: Router) { }

  ngOnInit() {
    let profileData = {
      Nazriya: {
        name: "Priyanka",
        age: '27 Yrs',
        height: '5 ft 2 in',
        cas: 'Nair',
        occupation: 'Doctor',
        address: "Pl No 24, Ganesan street, Ambattur, Tamil Nadu"
      },
      Priya: {
        name: "Yuvarani",
        age: '28 Yrs',
        height: '6 ft 1 in',
        cas: 'Poosam',
        occupation: 'Engineer',
        address: "No 1, Govindhan street, Salem, Tamil Nadu"
      },
      keerthy: {
        name: "Sangeetha",
        age: '27 Yrs',
        height: '5 ft 5 in',
        cas: 'Poosam',
        occupation: 'Lawyer',
        address: "No 64, Thiruveethi street, Padi, Tamil Nadu"
      },
      trisha: {
        name: "Divya",
        age: '29 Yrs',
        height: '5 ft 9 in',
        cas: 'Poosam',
        occupation: 'MBBS',
        address: "No 34/2, Sarath colony, Gunidy, Tamil Nadu"
      },
      ivana: {
        name: "Revathy",
        age: '28 Yrs',
        height: '5 ft 2 in',
        cas: 'Poosam',
        occupation: 'Teacher',
        address: "No 16, Fifth colony, Adyar, Tamil Nadu"
      },
      rash: {
        name: "Padma",
        age: '30 Yrs',
        height: '6 ft 1 in',
        cas: 'Poosam',
        occupation: 'Engineer',
        address: "No 32, Gandhi Street, Iyanavaram, Tamil Nadu"
      },
      sneha: {
        name: "Viji",
        age: '34 Yrs',
        height: '5 ft 9 in',
        cas: 'Nair',
        occupation: 'Dentist',
        address: "No 4, First Mohan Street, Avadi, Tamil Nadu"
      },
      kriti: {
        name: "Pooja",
        age: '30 Yrs',
        height: '5 ft 4 in',
        cas: 'Poosam',
        occupation: 'Dancer',
        address: "No 18, Sivan koil street, CBE, Tamil Nadu"
      }
    };
    localStorage.setItem("ProfileData", JSON.stringify(profileData));
    let parseData: any = localStorage.getItem('ProfileData');
    this.getProfile = JSON.parse(parseData);
    console.log(this.getProfile.Nazriya.name);
  }

  profileBrief(event: any) {
    this.router.navigate(['profileDetails', { data: event},{ skipLocationChange: true }]);
  }

  dailyRecommendations() {
    this.router.navigate(['dailyRecommendations']);
  }

}
