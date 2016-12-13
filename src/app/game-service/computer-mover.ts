import {Injectable} from '@angular/core';
import {PieceType} from '../models/pieceType';

@Injectable()
export class ComputerMover {
    selectPiece(): PieceType {
        return <PieceType>(Math.floor(Math.random() * 3));
    }
}
