import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jogo } from '../jogo.model';


@Component({
  imports: [CommonModule],
  selector: 'app-jogo-card',
  styleUrl: './jogo-card.css',
  templateUrl: './jogo-card.html',
})
export class JogoCard {
  @Input() jogo!: Jogo;
}
