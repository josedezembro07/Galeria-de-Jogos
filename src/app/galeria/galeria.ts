import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Jogo } from '../jogo.model';
import { JogoCard } from '../jogo-card/jogo-card';


@Component({
  imports: [CommonModule, FormsModule, JogoCard],
  selector: 'app-galeria',
  styleUrl: './galeria.css',
  templateUrl: './galeria.html',
})
export class Galeria {
  termoBusca: string = '';

  jogos: Jogo[] = [
    { id: 1, titulo: 'Counter-Strike 2', genero: 'FPS', nota: 9.2, instalado: true, imagemCapa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOjvNFv2TwTxLoTtwifVJG9d8hamf9-1gqK9QWnKSp-w&s=10' },
    { id: 2, titulo: 'Valorant', genero: 'FPS Tático', nota: 8.8, instalado: false, imagemCapa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEd1E8OenIuL7qwp2_5-k3b8theQCOJPAtgO6oIlR9HA&s=10' },
    { id: 3, titulo: 'League of Legends', genero: 'MOBA', nota: 6.5, instalado: true, imagemCapa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-pYTVX6Cb9ARelfhodeQsWC2fvJRXvUoHJut-G75vA&s=10' },
    { id: 4, titulo: 'FC 26', genero: 'Esporte', nota: 8.9, instalado: false, imagemCapa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBbKO6t-XFfSPPZTIzujZ9hwg1SIluHXeT2s8AT6C7Q&s=10' },
    { id: 5, titulo: 'Fortnite', genero: 'Battle Royale', nota: 8.0, instalado: false, imagemCapa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT342uOELfF57Nz_KjjulvuqPSExfjZyRyg5e1lRUntVQ&s=10' }
  ];

  get jogosFiltrados(): Jogo[] {
  return this.jogos.filter(jogo =>
    jogo.titulo.toLowerCase().includes(this.termoBusca.toLowerCase())
  );
}
}
