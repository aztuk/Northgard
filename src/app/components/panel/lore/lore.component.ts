import { LORES } from './../../../services/readonly.data';
import { Component, OnInit } from '@angular/core';
import { eOrderType, iOrder } from 'src/app/interface/interfaces';
import { ClanService } from 'src/app/services/clan.service';
import { DragDropService } from 'src/app/services/drag-drop.service';
import { RELICS } from 'src/app/services/readonly.data';

@Component({
  selector: 'por-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.scss']
})
export class LoreComponent implements OnInit {
  
  lore = LORES;
  selectedClan!: string;

  constructor(private clanService: ClanService, private dragService: DragDropService) {
    this.clanService.clan$.subscribe(v => this.selectedClan = v);
   }

  ngOnInit(): void {
  }

  getLores() {
    return this.lore.filter((r) => (r.restrictedTo.length === 0) || (r.restrictedTo.includes(this.selectedClan)));
  }

  onDragStart($event: DragEvent, building: any) {
    const order:iOrder = {
      type: eOrderType.LORE,
      data: building
    }
    this.dragService.draggedData = order;
  }

}
