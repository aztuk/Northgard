import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'por-relic-item',
  templateUrl: './relic-item.component.html',
  styleUrls: ['./relic-item.component.scss']
})
export class RelicItemComponent implements OnInit {
  @Input() relic: any;

  constructor() { }

  ngOnInit(): void {
  }

}
