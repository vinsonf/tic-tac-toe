import { Component, Input, OnInit } from '@angular/core';
import { GameLogicService } from 'src/app/services/game-logic.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() public position = 0;

  constructor(public gameService: GameLogicService) { }

  ngOnInit(): void {
  }

  nextTurn() {
    this.gameService.nextTurn(this.position);

  }

}
