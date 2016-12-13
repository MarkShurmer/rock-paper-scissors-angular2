import {Injectable} from '@angular/core';
import {Piece} from "../models/piece";
import {PieceType} from '../models/pieceType';
import {ResultEntry} from '../models/result-entry';
import {ResultType} from '../models/result-type';
import {ComputerMover} from './computer-mover';

@Injectable()
export class GameService {
    private _isPlayerMove: boolean;
    private _playerScore: number;
    private _computerScore: number;
    private _computerMove: Piece;
    private _playerMove: Piece;
    private _resultTable: Array<ResultEntry>;

    constructor(private computerMover: ComputerMover) {
        this._playerScore = 0;
        this._computerScore = 0;
        this._isPlayerMove = true;
        this.buildResultTable();
    }

    playPiece(piece: Piece) {
        this._isPlayerMove = false;
        this._playerMove = piece;
        this.moveComputer();
        this.scoreUp();

        // need to delay end of move to give animation a chance
        setTimeout(() => {
            this._isPlayerMove = true;
        }, 1000);

    }

    isPlayerMove() {
        return this._isPlayerMove;
    }

    getScore() {
        return {player: this._playerScore, computer: this._computerScore};
    }

    getPlayerMove() {
        return this._playerMove;
    }

    getComputerMove() {
        return this._computerMove;
    }

    resetScores() {
        this._playerScore = 0;
        this._computerScore = 0;
    }

    private moveComputer() {
        let move = this.computerMover.selectPiece();
        this._computerMove = new Piece(move);
    }

    private buildResultTable() {
        this._resultTable = [];
        // add all permutations
        this._resultTable.push({player: PieceType.paper, computer: PieceType.paper, result: ResultType.Draw});
        this._resultTable.push({player: PieceType.paper, computer: PieceType.rock, result: ResultType.PlayerWin});
        this._resultTable.push({player: PieceType.paper, computer: PieceType.scissors, result: ResultType.ComputerWin});
        this._resultTable.push({player: PieceType.rock, computer: PieceType.rock, result: ResultType.Draw});
        this._resultTable.push({player: PieceType.rock, computer: PieceType.paper, result: ResultType.ComputerWin});
        this._resultTable.push({player: PieceType.rock, computer: PieceType.scissors, result: ResultType.PlayerWin});
        this._resultTable.push({player: PieceType.scissors, computer: PieceType.scissors, result: ResultType.Draw});
        this._resultTable.push({player: PieceType.scissors, computer: PieceType.rock, result: ResultType.ComputerWin});
        this._resultTable.push({player: PieceType.scissors, computer: PieceType.paper, result: ResultType.PlayerWin});
    }

    private scoreUp() {

        let foundMove = this._resultTable.find(p => p.player === this._playerMove.pieceType
                                                && p.computer === this._computerMove.pieceType);

        // should find it, but dbl check
        if (foundMove !== undefined) {
            console.log('######' + JSON.stringify(foundMove));
            switch (foundMove.result) {
                case ResultType.ComputerWin:
                    this._computerScore++;
                    break;
                case ResultType.PlayerWin:
                    this._playerScore++;
                    break;
                default:
                    break; // draw so dont change scores
            }
        }

    }
}
