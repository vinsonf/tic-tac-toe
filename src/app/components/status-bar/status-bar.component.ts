import { Component, OnInit } from '@angular/core';
import { GameLogicService } from 'src/app/services/game-logic.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {

  constructor(
    public gameService: GameLogicService
  ) { }

  ngOnInit(): void {
  }

}
