import {Component, OnInit } from '@angular/core';
import {Piece} from "../models/piece";
import {PieceType} from "../models/pieceType";
import {GameService} from "../game-service/game.service";

@Component({
    selector: 'rps-player-control',
    templateUrl: './player-control.component.html',
    styleUrls: ['./player-control.component.scss']
})
export class PlayerControlComponent implements OnInit {
    playPieces: Array<Piece>;

    constructor(private gameService: GameService) {
        // we set up our list of pieces
        this.playPieces = [new Piece(PieceType.rock),
            new Piece(PieceType.paper),
            new Piece(PieceType.scissors)];
    }

    ngOnInit() {
    }

    play(piece: Piece) {
        this.gameService.playPiece(piece);
    }

    isPlayerMove() {
        return this.gameService.isPlayerMove();
    }
}
