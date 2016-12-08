import {Component, OnInit, Input} from '@angular/core';
import {PieceType} from "../models/pieceType";
import {Piece} from "../models/piece";
import {isUndefined} from "util";
import {isNull} from "util";

@Component({
    selector: 'rps-playing-piece',
    templateUrl: './playing-piece.component.html',
    styleUrls: ['playing-piece.component.scss']
})
export class PlayingPieceComponent implements OnInit {
    @Input() piece: Piece;

    constructor() {
    }

    ngOnInit() {
    }

    getPlayingPiece() {
        // get asset name
        if(isUndefined(this.piece) || isNull(this.piece)) {
            return "";
        } else {
            return `/assets/${PieceType[this.piece.pieceType]}.png`;
        }
    }
}
