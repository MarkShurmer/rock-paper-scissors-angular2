/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GameBoardComponent} from "./game-board/game-board.component";
import {ScoreBoardComponent} from "./score-board/score-board.component";
import {PlayingPieceComponent} from "./playing-piece/playing-piece.component";
import {ResultComponent} from "./result/result.component";
import {PlayerControlComponent} from "./player-control/player-control.component";
import {GameService} from "./game-service/game.service";
import {ComputerMover} from './game-service/computer-mover';

describe('App: RockPaperScissors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        GameBoardComponent,
        PlayingPieceComponent,
        ScoreBoardComponent,
        PlayerControlComponent,
        ResultComponent
      ],
      providers: [GameService, ComputerMover]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Rock Paper Scissors`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Rock Paper Scissors');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Rock Paper Scissors');
  }));
});
