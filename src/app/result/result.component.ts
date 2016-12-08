import { Component, OnInit } from '@angular/core';
import {GameService} from "../game-service/game.service";

@Component({
  selector: 'rps-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  getPlayerMove() {
    return this.gameService.getPlayerMove();
  }

  getComputerMove() {
    return this.gameService.getComputerMove();
  }
}
