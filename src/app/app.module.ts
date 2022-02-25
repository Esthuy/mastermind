import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlayerChoiceComponent } from './main/player-choice/player-choice.component';
import { OldCombinationComponent } from './main/old-combination/old-combination.component';
import { SolutionComponent } from './main/solution/solution.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
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
