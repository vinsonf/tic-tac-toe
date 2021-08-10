import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  currentPlayer = 1;

  values: string[] = ['', '', '', '', '', '', '', '', ''];

  constructor() { }


  nextTurn(position: number) {
    if (this.values[position]) {
      return;
    }

    this.values[position] =  this.currentPlayer === 1 ? 'X' : 'O';
    this.testWin();

    this.currentPlayer++;
    if (this.currentPlayer > 2) {
      this.currentPlayer = 1;
    }
  }

  testWin() {

    this.testRow(0, 1, 2);
    this.testRow(0, 3, 6);
    this.testRow(0, 4, 8);

    this.testRow(1, 4, 7);

    this.testRow(2, 5, 8);
    this.testRow(2, 4, 6);

    this.testRow(3, 4, 5);
    this.testRow(6, 7,8)



  }

  testRow(one: number, two: number, three: number) {
    if (this.values[one] && this.values[two] && this.values[three]) {

      if (this.values[one] === this.values[two] && this.values[two] === this.values[three]) {
        alert ('winner is ' + this.currentPlayer);
        this.values = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = 1;
      }
    }
  }

}
