import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalHeaderComponent } from './components/terminal-header/terminal-header.component';
import { TerminalBodyComponent } from './components/terminal-body/terminal-body.component';
import { TerminalComponent } from './components/terminal/terminal.component';
import { MatIconModule } from '@angular/material/icon';
import { TerminalLineComponent } from './components/terminal-line/terminal-line.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TerminalHeaderComponent,
    TerminalBodyComponent,
    TerminalComponent,
    TerminalLineComponent,
  ],
  imports: [CommonModule, FormsModule, MatIconModule],
  exports: [TerminalComponent],
})
export class TerminalModule {}
