import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  template: `<p>
  even-{{number}}</p>`,
  styleUrls: ['./odd.component.css'],
})
export class OddComponent implements OnInit {
  @Input() number;

  constructor() {}

  ngOnInit() {}
}
