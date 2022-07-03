import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-oauth-icons',
  templateUrl: './oauth-icons.component.html',
  styleUrls: ['./oauth-icons.component.css'],
})
export class OauthIconsComponent implements OnInit {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'google',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/google.svg')
    );
    iconRegistry.addSvgIcon(
      'facebook',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/facebook.svg')
    );
    iconRegistry.addSvgIcon(
      'github',
      sanitizer.bypassSecurityTrustResourceUrl('../../../assets/github.svg')
    );
  }

  ngOnInit(): void {}
}
