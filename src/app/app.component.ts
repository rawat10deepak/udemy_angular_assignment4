import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onIntervalFired(event) {
    event % 2 === 0
      ? this.evenNumbers.push(event)
      : this.oddNumbers.push(event);
  }
}
