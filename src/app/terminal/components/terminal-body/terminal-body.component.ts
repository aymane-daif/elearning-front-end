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
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
    this.input?.nativeElement.focus();
  }

  submitUserCommand(userCommand: string) {
    this.userCommand = userCommand.toLowerCase().trim();

    if (supportedCommands.includes(this.userCommand)) {
      this.outputCommand =
        commands.find((command) => command.key === this.userCommand)?.value ||
        '';
      if (this.userCommand === 'date') {
        this.outputCommand += new Date().toLocaleString();
      }
    } else {
      this.outputCommand =
        '"' +
        this.userCommand +
        '"' +
        commands.find((command) => command.key === 'not-supported')?.value;
    }
    this.history = [
      ...this.history,
      {
        key: this.userCommand,
        outputCommand: this.outputCommand,
      },
    ];
    this.userCommand = '';
  }
}
