import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { eventNames } from 'process';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent implements OnInit {
  getName: any; slideNext = 1; getProfile: any;
  slideImage = [
    { img: 'assets/Nazi.png' },
    { img: 'assets/Nazi1.jpg' },
    { img: 'assets/Nazi2.jpg' },
    { img: 'assets/Nazi3.jpg' },
    { img: 'assets/Nazi4.jpg' },
  ];

  constructor(private router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    this.getName = this.route.snapshot.params['data'];
    console.log(this.getName);
    let parseData: any = localStorage.getItem('ProfileData');
    this.getProfile = JSON.parse(parseData);
    // this.showImage(this.slideNext);
  }
  goBack() {
    this.router.navigate(['']);
  }
  showNext(event: any) {
    if (event > this.slideImage.length) { this.slideImage.unshift() }
    if (event < this.slideImage.length) {
      this.slideImage.findIndex(event + 1);
    }
  }
  // showNext(event: any) {
  //   this.showImage(this.slideNext += event)
  // }
  // showImage(event: any) {
  //   var getImage = document.getElementsByClassName("imageSlide");
  //   if (event > getImage.length) {
  //     this.slideNext = 1;
  //   }
  //   if (event < 1) { this.slideNext = getImage.length };
  //   // for (let i = 0; i < getImage.length; i++) {
  //   //   getImage[i].style.display = "none";
  //   //   getImage[i].
  //   // }
  //   // getImage[this.slideNext - 1].style.display = "block";

  // }

}
