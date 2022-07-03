import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { commands, supportedCommands } from '../../commands';

@Component({
  selector: 'app-terminal-body',
  templateUrl: './terminal-body.component.html',
  styleUrls: ['./terminal-body.component.css'],
})
export class TerminalBodyComponent implements OnInit {
  @ViewChild('cursor') input: ElementRef<HTMLInputElement> | undefined;

  outputCommand: string = '';
  userCommand = '';
  history: any = [];
  visibleHistory: any = [];
  counter: number = 0;
  isNewCommand: boolean = false;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.input?.nativeElement.focus();
  }

  showNextCommand(event: any) {
    if (this.counter > 0) {
      this.counter--;
    }
    this.isNewCommand = false;

    if (this.counter === 0) {
      this.userCommand = '';
    } else {
      this.userCommand = this.history[this.history.length - this.counter].key;
    }
  }

  showPreviousCommand(event: any) {
    let pointer = this.history.length - 1;
    if (this.history.length - this.counter >= 0) {
      this.counter++;
    }
    if (this.isNewCommand) {
      this.counter = 1;
    }
    pointer = this.history.length - this.counter;
    if (pointer === -1) {
      this.userCommand = '';
    } else {
      this.userCommand = this.history[pointer].key;
    }
    this.isNewCommand = false;
  }

  submitUserCommand(userCommand: string) {
    this.userCommand = userCommand.toLowerCase().trim();

    if (supportedCommands.includes(this.userCommand)) {
      //supported command
      this.outputCommand =
        commands.find((command) => command.key === this.userCommand)?.value ||
        '';
      if (this.userCommand === 'date') {
        this.outputCommand += new Date().toLocaleString();
      }
      if (this.userCommand === 'clear') {
        this.visibleHistory = [];
      }
    } else {
      // not a supported command
      this.outputCommand =
        '"' +
        this.userCommand +
        '"' +
        commands.find((command) => command.key === 'not-supported')?.value;
    }
    // add command{key, value} to history
    this.history = [
      ...this.history,
      {
        key: this.userCommand,
        outputCommand: this.outputCommand,
      },
    ];

    this.visibleHistory = [
      ...this.visibleHistory,
      {
        key: this.userCommand,
        outputCommand: this.outputCommand,
      },
    ];

    this.isNewCommand = true;
    //clear user command
    this.userCommand = '';
  }
}
