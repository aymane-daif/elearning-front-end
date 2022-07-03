import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalLineComponent } from './terminal-line.component';

describe('TerminalLineComponent', () => {
  let component: TerminalLineComponent;
  let fixture: ComponentFixture<TerminalLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
