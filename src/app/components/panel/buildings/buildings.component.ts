import { DragDropService } from './../../../services/drag-drop.service';
import { eOrderType, iOrder } from './../../../interface/interfaces';
import { ClanService } from './../../../services/clan.service';
import { BUILDINGS, eBuildingCategory } from './../../../services/readonly.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'por-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  buildings = BUILDINGS;
  selectedClan!: string;

  constructor(private clanService: ClanService, private dragService: DragDropService) {
    this.clanService.clan$.subscribe(v => this.selectedClan = v);
   }

  ngOnInit(): void {
  }

  getCivilianBuildings() {
    return BUILDINGS.filter((b) => b.category === eBuildingCategory.CIVILIAN && !b.restrictedClans.includes(this.selectedClan));
  }
  getMilitaryBuildings() {
    return BUILDINGS.filter((b) => b.category === eBuildingCategory.MILITARY && !b.restrictedClans.includes(this.selectedClan));
  }
  getSpecialBuildings() {
    return BUILDINGS.filter((b) => b.category === eBuildingCategory.SPECIAL && !b.restrictedClans.includes(this.selectedClan));
  }

  onDragStart($event: DragEvent, building: any) {
    const order:iOrder = {
      type: eOrderType.BUILDING,
      data: building
    }
    this.dragService.draggedData = order;
  }

}
