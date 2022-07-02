import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  data = {
    navigation: {
      signUp: '/signup',
      signIn: '/signin',
      home: '/home',
    },
    socials: {
      facebook: 'https://www.facebook.com/',
      linkedin: 'https://www.linkedin.com/',
      github: 'https://github.com/',
    },
    platform: {
      aboutUs: '/aboutus',
      contactUs: '/contactus',
      testimonials: '/testimonials',
    },
  };
  constructor() {}

  ngOnInit(): void {}
}
