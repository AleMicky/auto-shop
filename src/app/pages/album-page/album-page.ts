import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCard } from "../../shared/album-card/album-card";

type Car = {
  name: string;
  brand: string;
  year: number;
  price: number;
  imageUrl: string;
  specs: string[];   // ej: ["Automático", "Híbrido", "300 HP"]
  badge?: string;    // ej: "Nuevo", "Oferta"
};


@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [CommonModule, AlbumCard],
  templateUrl: './album-page.html',
  styleUrl: './album-page.css'
})
export class AlbumPage {
  
  currentYear = new Date().getFullYear();

  cars: Car[] = [
    {
      name: 'Mustang GT',
      brand: 'Ford',
      year: 2024,
      price: 55990,
      imageUrl: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
      specs: ['V8 5.0L', 'Manual/AT', '450 HP'],
      badge: 'Nuevo'
    },
    {
      name: 'Model 3 Long Range',
      brand: 'Tesla',
      year: 2025,
      price: 46990,
      imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
      specs: ['Eléctrico', 'AWD', '620 km']
    },
    {
      name: 'Civic Sport',
      brand: 'Honda',
      year: 2023,
      price: 27990,
      imageUrl: 'https://images.unsplash.com/photo-1549921296-3b4a72d8b1cf?q=80&w=1600&auto=format&fit=crop',
      specs: ['Turbo', 'CVT', '180 HP'],
      badge: 'Oferta'
    }
  ];

  segments = ['Todos', 'Sedán', 'SUV', 'Deportivo', 'Eléctrico'];
  activeSeg = 'Todos';
}
