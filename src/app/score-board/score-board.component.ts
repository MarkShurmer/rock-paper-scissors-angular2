import {Component, OnInit} from '@angular/core';
import {GameService} from "../game-service/game.service";

@Component({
    selector: 'rps-score-board',
    templateUrl: './score-board.component.html',
    styleUrls: ['score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

    constructor(private gameService: GameService) {
    }

    ngOnInit() {
    }

    getScore() {
        return this.gameService.getScore();
    }

    resetScores() {
        this.gameService.resetScores();
    }
}
