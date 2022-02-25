import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './component/game/game.component';
import { PlayerChoiceComponent } from './component/game/player-choice/player-choice.component';
import { OldCombinationComponent } from './component/game/old-combination/old-combination.component';
import { SolutionComponent } from './component/game/solution/solution.component';
import { ConfigurationComponent } from './component/game/configuration/configuration.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerChoiceComponent,
    OldCombinationComponent,
    SolutionComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
