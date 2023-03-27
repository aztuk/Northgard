import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'por-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  selectedTab: string = 'buildings';

  constructor() { }

  ngOnInit(): void {
  }

}
