/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingPieceComponent } from './playing-piece.component';
import {PieceType} from "../models/pieceType";
import {Piece} from "../models/piece";

describe('PlayingPieceComponent', () => {
  let component: PlayingPieceComponent;
  let fixture: ComponentFixture<PlayingPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingPieceComponent);
    component = fixture.componentInstance;
    component.piece = new Piece(PieceType.paper);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return empty if piece null', () => {
    component.piece = null;
    expect(component.getPlayingPiece()).toBe('');
  });

  it('should return url if paper', () => {
    expect(component.getPlayingPiece()).toBe('/assets/paper.png');
  });

  it('should return url if changed to rock', () => {
    expect(component.getPlayingPiece()).toBe('/assets/paper.png');
    component.piece = new Piece(PieceType.rock);
    expect(component.getPlayingPiece()).toBe('/assets/rock.png');
  });

});
