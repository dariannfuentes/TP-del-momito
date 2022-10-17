import { Component, OnInit } from '@angular/core';

export interface Tile {
  id: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  tiles: Tile[] = [
    {id:"demo1",text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {id:"demo2",text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {id:"demo3",text: 'Three', cols: 1, rows: 3, color: 'lightpink'},
    {id:"demo4",text: 'Four', cols: 2, rows: 3, color: '#DDBDF1'},
    {id:"demo5",text: 'Five', cols: 4, rows: 1, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
