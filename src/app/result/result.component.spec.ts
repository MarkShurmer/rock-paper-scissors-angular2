/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

import {ResultComponent} from './result.component';
import {PlayingPieceComponent} from "../playing-piece/playing-piece.component";
import {GameService} from "../game-service/game.service";
import {Piece} from "../models/piece";
import {PieceType} from "../models/pieceType";
import {ComputerMover} from '../game-service/computer-mover';


class MockGameService {
    getPlayerMove(): Piece {
        return new Piece(PieceType.rock);
    }

    getComputerMove(): Piece {
        return new Piece(PieceType.paper);
    }
}

describe('ResultComponent', () => {
    let component: ResultComponent;
    let fixture: ComponentFixture<ResultComponent>;
    let mockService: MockGameService;

    beforeEach(async(() => {
        mockService = new MockGameService();
        TestBed.configureTestingModule({
            declarations: [ResultComponent, PlayingPieceComponent],
            providers: [{provide: GameService, useValue: mockService}, ComputerMover]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should get rock when asking for player move', () => {
        expect(component.getPlayerMove()).toEqual(jasmine.any(Piece));
        expect(component.getPlayerMove().pieceType).toBe(PieceType.rock);
    });

    it('should get paper when asking for player move', () => {
        expect(component.getComputerMove()).toEqual(jasmine.any(Piece));
        expect(component.getComputerMove().pieceType).toBe(PieceType.paper);
    });
});
