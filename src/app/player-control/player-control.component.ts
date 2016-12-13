import {Component, OnInit} from '@angular/core';
import {Piece} from "../models/piece";
import {PieceType} from "../models/pieceType";

@Component({
    selector: 'rps-player-control',
    templateUrl: './player-control.component.html',
    styleUrls: ['./player-control.component.css']
})
export class PlayerControlComponent implements OnInit {
    rock: Piece;
    paper: Piece;
    scissors: Piece;

    constructor() {
        this.rock = new Piece(PieceType.rock);
        this.paper = new Piece(PieceType.paper);
        this.scissors = new Piece(PieceType.scissors);
    }

    ngOnInit() {
    }

}
