import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { PlayingPieceComponent } from './playing-piece/playing-piece.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { PlayerControlComponent } from './player-control/player-control.component';
import { ResultComponent } from './result/result.component';
import {GameService} from './game-service/game.service';
import {ComputerMover} from './game-service/computer-mover';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    PlayingPieceComponent,
    ScoreBoardComponent,
    PlayerControlComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GameService, ComputerMover],
  bootstrap: [AppComponent]
})
export class AppModule { }
