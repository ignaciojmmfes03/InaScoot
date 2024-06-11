import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  jugadores: any[] = [];
  filteredJugadores: any[] = [];
  searchTerm: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.fetchJugadores();
  }

  // Método para obtener la lista de jugadores desde la API
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

  // Método para filtrar los jugadores según el término de búsqueda
  filterJugadores() {
    const term = this.searchTerm.toLowerCase();
    this.filteredJugadores = this.jugadores.filter(jugador =>
      jugador.nombre?.toLowerCase().includes(term) ||
      jugador.posicion?.toLowerCase().includes(term) ||
      jugador.afinidad?.toLowerCase().includes(term) ||
      jugador.equipo?.toLowerCase().includes(term) ||
      jugador.supertecnica?.toLowerCase().includes(term)
    );

    // Si no se encuentran jugadores, se muestra un mensaje de error y se oculta el fondo
    if (this.filteredJugadores.length === 0) {
      this.errorMessage = 'No se encontraron jugadores';
      document.body.classList.add('no-results');
    } else {
      this.errorMessage = '';
      document.body.classList.remove('no-results');
    }
  }
}
