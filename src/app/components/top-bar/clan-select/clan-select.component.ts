import { Subscription } from 'rxjs';
import { ClanService } from '../../../services/clan.service';
import { eClans } from '../../../services/readonly.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'por-clan-select',
  templateUrl: './clan-select.component.html',
  styleUrls: ['./clan-select.component.scss']
})
export class ClanSelectComponent implements OnInit {

  clans = eClans;
  openList: boolean = false;
  selectedClan!: string;
  selectedClanSubscription!: Subscription;

  constructor(private clanService: ClanService) { 
    
    this.selectedClanSubscription = this.clanService.clan$.subscribe(v => this.selectedClan = v);
  }

  ngOnInit(): void {
  }

  selectClan(clan: string) {
    this.clanService.clan = clan;
    this.openList = false;
  }

}
