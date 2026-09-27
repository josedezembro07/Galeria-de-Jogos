import { Component, signal } from '@angular/core';
import {CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Galeria } from './galeria/galeria';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, Galeria],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
