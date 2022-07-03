import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthIconsComponent } from './oauth-icons.component';

describe('OauthIconsComponent', () => {
  let component: OauthIconsComponent;
  let fixture: ComponentFixture<OauthIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OauthIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OauthIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
