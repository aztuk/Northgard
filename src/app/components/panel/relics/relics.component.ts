import { RELICS } from './../../../services/readonly.data';
import { Component, OnInit } from '@angular/core';
import { ClanService } from 'src/app/services/clan.service';
import { DragDropService } from 'src/app/services/drag-drop.service';
import { eOrderType, iOrder } from 'src/app/interface/interfaces';

@Component({
  selector: 'por-relics',
  templateUrl: './relics.component.html',
  styleUrls: ['./relics.component.scss']
})
export class RelicsComponent implements OnInit {

  relics = RELICS;
  selectedClan!: string;

  constructor(private clanService: ClanService, private dragService: DragDropService) {
    this.clanService.clan$.subscribe(v => this.selectedClan = v);
   }

  ngOnInit(): void {
  }

  getRelics() {
    return this.relics.filter((r) => (r.restrictedTo.length === 0) || (r.restrictedTo.includes(this.selectedClan)));
  }

  onDragStart($event: DragEvent, building: any) {
    const order:iOrder = {
      type: eOrderType.RELIC,
      data: building
    }
    this.dragService.draggedData = order;
  }

}
