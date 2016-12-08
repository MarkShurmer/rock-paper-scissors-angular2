import {Injectable} from '@angular/core';
import {Piece} from "../models/piece";
import Timeouts = webdriver.Timeouts;

@Injectable()
export class GameService {
    private _isPlayerMove: boolean;
    private _playerScore: number;
    private _computerScore: number;
    private _computerMove: Piece;
    private _playerMove: Piece;

    constructor() {
        this._playerScore = 0;
        this._computerScore = 0;
        this._isPlayerMove = true;
    }

    playPiece(piece: Piece) {
        this._isPlayerMove = false;
        this._playerMove = piece;
        this.moveComputer();
        this.scoreUp();

        setTimeout(() => {
            this._isPlayerMove = true;
        }, 1000);

    }

    isPlayerMove() {
        return this._isPlayerMove;
    }

    getScore() {
        return { player: this._playerScore, computer: this._computerScore};
    }

    getPlayerMove() {
        return this._playerMove;
    }

    getComputerMove() {
        return this._computerMove;
    }

    private moveComputer() {
        let move = Math.floor(Math.random() * 3);
        this._computerMove = new Piece(move);
    }

    private scoreUp() {

        if (this._playerMove.isItMatching(this._computerMove)) {
            this._computerScore++;
        } else {
            this._playerScore++;
        }
    }
}
