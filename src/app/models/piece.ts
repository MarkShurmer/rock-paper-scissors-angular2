import {PieceType} from "./pieceType";

export class Piece {
    pieceType: PieceType;

    constructor(pieceType: PieceType) {
        this.pieceType = pieceType;
    }
}
