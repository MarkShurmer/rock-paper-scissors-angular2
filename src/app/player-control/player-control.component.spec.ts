/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {PlayerControlComponent} from './player-control.component';
import {GameService} from "../game-service/game.service";
import {PlayingPieceComponent} from "../playing-piece/playing-piece.component";
import {Piece} from "../models/piece";
import {PieceType} from "../models/pieceType";
import {Observable} from "rxjs";
import {ComputerMover} from '../game-service/computer-mover';

let isPlayerMove = true;

class MockGameService {
    playPiece(piece: Piece): void {
    }

    isPlayerMove() {
        return isPlayerMove;
    }
}

describe('PlayerControlComponent', () => {
    let component: PlayerControlComponent;
    let fixture: ComponentFixture<PlayerControlComponent>;
    let mockService: MockGameService;

    beforeEach(async(() => {
        mockService = new MockGameService();
        TestBed.configureTestingModule({
            declarations: [PlayerControlComponent, PlayingPieceComponent],
            providers: [{provide: GameService, useValue: mockService}, ComputerMover]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call service from isPlayerMove', () => {
        spyOn(mockService, 'isPlayerMove');
        component.isPlayerMove();

        expect(mockService.isPlayerMove).toHaveBeenCalled();
    });

    it('should call service from play', () => {
        spyOn(mockService, 'playPiece');
        let piece = new Piece(PieceType.scissors);
        component.play(piece);

        expect(mockService.playPiece).toHaveBeenCalled();
    });
});
