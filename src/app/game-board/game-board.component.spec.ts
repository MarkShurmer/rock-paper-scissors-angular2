import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardComponent } from './game-board.component';
import {PlayerControlComponent} from "../player-control/player-control.component";
import {ScoreBoardComponent} from "../score-board/score-board.component";
import {ResultComponent} from "../result/result.component";
import {PlayingPieceComponent} from "../playing-piece/playing-piece.component";
import {GameService} from "../game-service/game.service";
import {ComputerMover} from '../game-service/computer-mover';

describe('GameBoardComponent', () => {
  let component: GameBoardComponent;
  let fixture: ComponentFixture<GameBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBoardComponent, PlayerControlComponent, ScoreBoardComponent, ResultComponent, PlayingPieceComponent ],
      providers: [GameService, ComputerMover]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
