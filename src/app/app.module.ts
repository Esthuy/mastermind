import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './component/game/game.component';
import { PlayerChoiceComponent } from './component/game/player-choice/player-choice.component';
import { OldCombinationComponent } from './component/game/old-combination/old-combination.component';
import { SolutionComponent } from './component/game/solution/solution.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    PlayerChoiceComponent,
    OldCombinationComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
