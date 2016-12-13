/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {GameService} from './game.service';
import {PieceType} from "../models/pieceType";
import {Piece} from "../models/piece";
import {ComputerMover} from './computer-mover';

let computerMove: PieceType;

class MockComputerMover extends ComputerMover {
    selectPiece() {
        return computerMove;
    }
}

describe('Service: Game', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [GameService, {provide: ComputerMover, useClass: MockComputerMover}]
        });
    });

    it('should be created', inject([GameService], (service: GameService) => {
        expect(service).toBeTruthy();
    }));

    it('should set scores to zero', inject([GameService], (service: GameService) => {
        expect(service.getScore().player).toBe(0);
        expect(service.getScore().computer).toBe(0);
    }));

    it('getScore() should get zeroes at start', inject([GameService], (service: GameService) => {
        expect(service.getScore().player).toBe(0);
        expect(service.getScore().computer).toBe(0);
    }));

    it('getScore() should get count after playing paper + rock', inject([GameService, ComputerMover],
        (service: GameService, mockMover: MockComputerMover) => {
            computerMove = PieceType.rock;
            service.resetScores();
            service.playPiece(new Piece(PieceType.paper));

            expect(service.getScore().player).toBe(1);
            expect(service.getScore().computer).toBe(0);
        }));

    it('getScore() should get count after playing scissors + rock', inject([GameService, ComputerMover],
        (service: GameService, mockMover: MockComputerMover) => {
            computerMove = PieceType.rock;
            service.resetScores();
            service.playPiece(new Piece(PieceType.scissors));

            expect(service.getScore().player).toBe(0);
            expect(service.getScore().computer).toBe(1);
        }));

    it('getScore() should get count after playing same', inject([GameService, ComputerMover],
        (service: GameService, mockMover: MockComputerMover) => {
            computerMove = PieceType.rock;
            service.playPiece(new Piece(PieceType.rock));

            expect(service.getScore().player).toBe(0);
            expect(service.getScore().computer).toBe(0);
        }));

    it('getPlayerMove() should get nothing when no move', inject([GameService], (service: GameService) => {
        expect(service.getPlayerMove()).toBeUndefined();
    }));

    it('getPlayerMove() should get move just played', inject([GameService], (service: GameService) => {
        service.playPiece(new Piece(PieceType.scissors));
        let result = service.getPlayerMove();
        expect(result).toEqual(jasmine.any(Piece));
        expect(result.pieceType).toBe(PieceType.scissors);
    }));

    it('getPlayerMove() should get last move played', inject([GameService], (service: GameService) => {
        service.playPiece(new Piece(PieceType.scissors));
        service.playPiece(new Piece(PieceType.rock));
        let result = service.getPlayerMove();
        expect(result).toEqual(jasmine.any(Piece));
        expect(result.pieceType).toBe(PieceType.rock);
    }));

    it('getComputerMove() should get last move played by computer', inject([GameService], (service: GameService) => {
        service.playPiece(new Piece(PieceType.rock));
        let result = service.getComputerMove();
        expect(result).toEqual(jasmine.any(Piece));
        expect(result.pieceType).toBeDefined();
    }));

});
