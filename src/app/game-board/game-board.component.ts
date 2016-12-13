import {Component, OnInit, HostBinding} from '@angular/core';

@Component({
  selector: 'rps-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  //@HostBinding('class') hostClass = 'game-board';

  constructor() { }

  ngOnInit() {
  }

}
