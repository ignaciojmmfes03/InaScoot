import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent implements OnInit {
  jugadores: any[] = [];
  filteredJugadores: any[] = [];
  searchTerm: string = '';
  errorMessage: string = '';


  constructor(private http: HttpClient) {}

  // Método ngOnInit que se ejecuta al inicializar el componente
  ngOnInit() {
    this.fetchJugadores(); // Llamada al método para obtener los jugadores
  }

  // Método para obtener los jugadores desde el servidor
  fetchJugadores() {
    // Realización de una solicitud HTTP GET al servidor
    this.http.get<any[]>('http://164.92.233.177:5000/jugadores').subscribe({
      next: data => { // Callback que se ejecuta en caso de éxito
        this.jugadores = data; // Asignar los datos obtenidos al arreglo jugadores
        this.filteredJugadores = data; // Inicializar el arreglo de jugadores filtrados con todos los jugadores
      },
      error: error => { // Callback que se ejecuta en caso de error
        this.errorMessage = 'No se pudieron cargar los datos. Inténtalo de nuevo más tarde.'; // Mostrar mensaje de error
      }
    });
  }

  // Método para filtrar los jugadores según el término de búsqueda
  filterJugadores() {
    const term = this.searchTerm.toLowerCase(); // Convertir el término de búsqueda a minúsculas
    // Filtrar los jugadores según el término de búsqueda
    this.filteredJugadores = this.jugadores.filter(jugador =>
      jugador.nombre?.toLowerCase().includes(term) ||
      jugador.posicion?.toLowerCase().includes(term) ||
      jugador.afinidad?.toLowerCase().includes(term) ||
      jugador.equipo?.toLowerCase().includes(term) ||
      jugador.supertecnica?.toLowerCase().includes(term)
    );
    // Verificar si no se encontraron jugadores
    if (this.filteredJugadores.length === 0) {
      this.errorMessage = 'No se encontraron jugadores'; // Mostrar mensaje de error
    } else {
      this.errorMessage = ''; // Limpiar el mensaje de error
    }
  }
}
