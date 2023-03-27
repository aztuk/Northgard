import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'por-special-item',
  templateUrl: './special-item.component.html',
  styleUrls: ['./special-item.component.scss']
})
export class SpecialItemComponent implements OnInit {

  @Input() action!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
