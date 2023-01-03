import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  template: `<p>
  Odd-{{number}}</p>`,
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  @Input() number;

  constructor() {}

  ngOnInit() {}
}
