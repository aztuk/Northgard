import { ACTIONS } from './../../../services/readonly.data';
import { Component, OnInit } from '@angular/core';
import { eOrderType, iOrder } from 'src/app/interface/interfaces';
import { ClanService } from 'src/app/services/clan.service';
import { DragDropService } from 'src/app/services/drag-drop.service';

@Component({
  selector: 'por-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent implements OnInit {

  actions = ACTIONS;
  selectedClan!: string;

  constructor(private clanService: ClanService, private dragService: DragDropService) {
    this.clanService.clan$.subscribe(v => this.selectedClan = v);
   }

  ngOnInit(): void {
  }

  onDragStart($event: DragEvent, building: any) {
    const order:iOrder = {
      type: eOrderType.SPECIAL,
      data: building
    }
    this.dragService.draggedData = order;
  }

}
