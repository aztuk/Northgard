import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'por-lore-item',
  templateUrl: './lore-item.component.html',
  styleUrls: ['./lore-item.component.scss']
})
export class LoreItemComponent implements OnInit {
  @Input() lore: any;

  constructor() { }

  ngOnInit(): void {
  }

}
