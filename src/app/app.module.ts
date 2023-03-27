import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './page/main/main.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TimelineComponent } from './components/timeline/timeline.component';
import { MonthComponent } from './components/timeline/month/month.component';
import { PanelComponent } from './components/panel/panel.component';
import { BuildingsComponent } from './components/panel/buildings/buildings.component';
import { BuildingItemComponent } from './components/panel/buildings/building-item/building-item.component';
import { ClanSelectComponent } from './components/top-bar/clan-select/clan-select.component';
import { DroppedComponentComponent } from './components/timeline/dropped-component/dropped-component.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { RelicsComponent } from './components/panel/relics/relics.component';
import { RelicItemComponent } from './components/panel/relics/relic-item/relic-item.component';
import { LoreComponent } from './components/panel/lore/lore.component';
import { LoreItemComponent } from './components/panel/lore/lore-item/lore-item.component';
import { SpecialComponent } from './components/panel/special/special.component';
import { SpecialItemComponent } from './components/panel/special/special-item/special-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TooltipDirective,
    TimelineComponent,
    MonthComponent,
    PanelComponent,
    BuildingsComponent,
    BuildingItemComponent,
    ClanSelectComponent,
    DroppedComponentComponent,
    TopBarComponent,
    RelicsComponent,
    RelicItemComponent,
    LoreComponent,
    LoreItemComponent,
    SpecialComponent,
    SpecialItemComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
