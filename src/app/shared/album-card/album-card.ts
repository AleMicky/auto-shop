import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-card.html',
  styleUrl: './album-card.css'
})
export class AlbumCard {
  @Input() text = 'Default card text';
  @Input() imageUrl: string | null = null;  // si quieres imagen real
  @Input() time = '9 mins';
}
