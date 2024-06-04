import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jugadores: any[] = [];
  filteredJugadores: any[] = [];
  searchTerm: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchJugadores();
  }

  fetchJugadores() {
    this.http.get<any[]>('http://127.0.0.1:5000/jugadores').subscribe({
      next: data => {
        this.jugadores = data;
        this.filteredJugadores = data;
      },
      error: error => {
        this.errorMessage = 'No se pudieron cargar los datos. Inténtalo de nuevo más tarde.';
      }
    });
  }

  filterJugadores() {
    const term = this.searchTerm.toLowerCase();
    this.filteredJugadores = this.jugadores.filter(jugador =>
      jugador.nombre?.toLowerCase().includes(term) ||
      jugador.posicion?.toLowerCase().includes(term) ||
      jugador.afinidad?.toLowerCase().includes(term) ||
      jugador.equipo?.toLowerCase().includes(term) ||
      jugador.supertecnica?.toLowerCase().includes(term)
    );
    if (this.filteredJugadores.length === 0) {
      this.errorMessage = 'No se encontraron jugadores';
    } else {
      this.errorMessage = '';
    }
  }
}
