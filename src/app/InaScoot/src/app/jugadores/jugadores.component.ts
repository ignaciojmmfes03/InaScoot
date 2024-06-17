import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

    errorMessage: string = '';

    jugadores: jugador []= [
    {nombre: "Hiroto Carson",
    posicion: "Delantero",
    afinidad: "Fuego",
    obtencion: "bolas con fichas amarillas en el Centro de Liocott",
    equipo: "Hiro Squad",
    supertecnicas: ["Espejismo de Balón, Remate dragón, Gravitación, Cañón de meteoritos"],
    imagenurl: "https://inazumaelevenseries.com/wp-content/uploads/2019/03/8-3.png"},
    {nombre: "Anna Swift",
      posicion: "Delantera",
      afinidad: "Tierra",
      obtencion: "bolas con fichas amarillas en el Barrio de tiendas",
      equipo: "Hiro Squad",
      supertecnicas: ["Olor embriagador, Lecho de Rosas, Cañón de meteoritos, La Tierra"],
      imagenurl: "https://img.wattpad.com/story_parts/990864450/images/164d86a8c1d99d9a481855719385.png"
  },
  {
    nombre: "Alexis Mach",
    posicion: "Delantero",
    afinidad: "Aire",
    obtencion: "Por contactos (IE3), Sede de la Asociación de fútbol, en el Sur de Tokio, derrotar en tres pachangas (1º Meter un gol, 2º Meter dos goles, 3º No dejarse meter un gol)",
    equipo: "Hiro Squad",
    supertecnicas: ["Rapidez+, Zigzag chispeante, Súper relámpago, Gran Lobo"],
    imagenurl: "https://pbs.twimg.com/profile_images/1744122201807142912/lpRtcdGV_400x400.jpg"
},
{
  nombre: "Amundsen Scott Amundsen",
  posicion: "Delantero",
  afinidad: "Aire",
  obtencion: "pachanga en el Centro de Liocott",
  equipo: "Los Rockandgoles",
  supertecnicas: ["Ataque cóndor, Paisaje helado, Tornado inverso, Balón iceberg"],
  imagenurl: "https://i.redd.it/rating-every-ie-characters-day-11-kevin-dragonfly-someoka-v0-sk5s5f8xlvfb1.png?width=398&format=png&auto=webp&s=c8a830d61c7e0f9b69f4484215ee2f4e6dd5a391"
},
{
  nombre: "Bolt Leighton Bolt",
  posicion: "Defensa",
  afinidad: "Aire",
  obtencion: "Contactos",
  equipo: "Amos de los Elementos",
  supertecnicas: ["Cabezazo megatón, Ultratécnica, Superelástico, Sorteo de balón"],
  imagenurl: "https://pm1.aminoapps.com/6307/666d39b6cdcd89cd6fbfc3d660674aeb1f3e926d_00.jpg"
},
{
  nombre: "Ee Earl Bird",
  posicion: "Portero",
  afinidad: "Bosque",
  obtencion: "pachanga en el Centro de Liocott",
   equipo: "Los Rockandgoles",
  supertecnicas: ["Despeje de fuego, Barrido defensivo, Gravedad, Bloqueo doble"],
  imagenurl: "https://pm1.aminoapps.com/7662/cab6f9f2675466d882c3fdf401b4dace343feeber1-647-359v2_uhq.jpg"
},
{
  nombre: "Fanfair Pomponius Fanfair",
  posicion: "Centrocampista",
  afinidad: "Bosque",
  obtencion: "bolas con ficha azul en el Barrio de tiendas",
  equipo: "Los Gacelas",
  supertecnicas: ["Balón rodante, Armadillo circense, Tornado venenoso, Patín aéreo"],
  imagenurl: "https://www.nautiljon.com/images/jeuxvideo_persos/00/86/kabeyama_heigoro_5368.webp"
},
{
  nombre: "Firefoot Blazer Firefoot",
  posicion: "Portero",
  afinidad: "Fuego",
  obtencion: "bolas con fichas rojas",
  equipo: "Amos de los Elementos",
  supertecnicas: ["Carga elemental, Lanzallamas, Cortafuegos, Combustión"],
  imagenurl: "https://pm1.aminoapps.com/6285/f44523bc476f107b19e10ed75b28a6e7ec10a4f9_hq.jpg"
},
{
  nombre: "Gleeson Dextra Gleeson",
  posicion: "Delantera",
  afinidad: "Bosque",
  obtencion: "bolas con ficha amarilla de la Zona de tiendas del Área japonesa",
  equipo: "Los Devoratofu",
  supertecnicas: ["Remate dragón, Giro bobina, Jaula de piedra, Cometa"],
  imagenurl: "https://tiermaker.com/images/template_images/2022/15194786/inazuma-eleven-todos-los-jugadores-del-raimon-original-go-or-15194786/2289cdbf77fa2b5f0e5b59b3b98878d98910d46c79be856d94e580cfbe34abd2rittw.png"
},
{
  nombre: "Jarret May Jarret",
  posicion: "Delantera",
  afinidad: "Bosque",
  obtencion: "bolas con la ficha azul en el centro de Liocott",
  equipo: "Los Rockandgoles",
  supertecnicas: ["Psicorremate, Espejismo de balón, Bola de fango, Fénix oscuro"],
  imagenurl: "https://pm1.aminoapps.com/6344/618651a00826d90482116e97394e1d8d36bd7527_hq.jpg"
},
{
  nombre: "Mann T. T. Mann",
  posicion: "Centrocampista",
  afinidad: "Fuego",
  obtencion: "bolas con ficha roja de la Zona de tiendas del Área japonesa",
  equipo: "Los Devoratofu",
  supertecnicas: ["Ignición, Remate combinado, Paipay gigante, Dúo magma"],
  imagenurl: "https://pm1.aminoapps.com/6704/5df949db95ccfda8de31e4497499be2bfa073314_hq.jpg"
},
{
  nombre: "Pentam Ian Bick",
  posicion: "Defensa",
  afinidad: "Aire",
  obtencion: "pachanga",
  equipo: "Enemigos del peine",
  supertecnicas: ["Equilibrismo, Hojarasca, Niebla venenosa , Espejismo"],
  imagenurl: "https://tiermaker.com/images/template_images/2022/15400895/jugadores-inazuma-eleven-1-2-y-3-megalocke-15400895/calvo-canon.png"
},
{
  nombre: "Slinka Chauncey Slinka",
  posicion: "Centrocampista",
  afinidad: "Bosque",
  obtencion: "Contactos",
  equipo: "Amos de los Elementos",
  supertecnicas: ["Bombazo, Lluvia de meteoros, Mejor garantía, Cañón de meteoritos"],
  imagenurl: "https://pm1.aminoapps.com/6745/755aecfe7bdef98b333fd72cac8391b17a4d6dbbv2_00.jpg"
},
{
  nombre: "Steady Eddy Steady",
  posicion: "Delantero",
  afinidad: "Montaña",
  obtencion: "Contactos",
  equipo: "Banda del Rey Mono",
  supertecnicas: ["Corte volcánico, Llamarada atómica, Neo tiro galáctico, Cortafuegos"],
  imagenurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y3v3OXS-H2UQtyMRyd662ErlMnNXMlonlRsg91fIIeejnJkkqdOgdv5GzRUm6OaR6sQ&usqp=CAU"
},
{
  nombre: "Vinyl Gram Vineela",
  posicion: "Centrocampista",
  afinidad: "Bosque",
  obtencion: "pachanga",
  equipo: "Los Devoratofu",
  supertecnicas: ["Remate serpiente, Regate topo, Disparo cósmico, Engaño yoyó"],
  imagenurl: "https://i.pinimg.com/736x/34/f5/c4/34f5c4b6f54feb329f007beb42a3726c.jpg"
},
{
  nombre: "Weath Gustav Wheathervane",
  posicion: "Defensa",
  afinidad: "Aire",
  obtencion: "bolas con fichas azules del Área de Costail",
  equipo: "Amos de los Elementos",
  supertecnicas: ["Carga elemental, Ciclón doble, Entrada tormenta, Danza del viento"],
  imagenurl: "https://i.pinimg.com/564x/8e/ec/aa/8eecaaa6772e088220d04a0fe9954c38.jpg"
},
{
  nombre: "Windrush Zip Windrush",
  posicion: "Delantero",
  afinidad: "Aire",
  obtencion: "contactos",
  equipo: "Los Rascabalones",
  supertecnicas: ["Golpes de luz, Superelástico, Espada de Odín, Muralla infinita"],
  imagenurl: "https://i.pinimg.com/564x/a8/27/23/a82723c9da4bad015cf1b1211022d3e8.jpg"
},
{
  nombre: "Agnethe Presari",
  posicion: "Defensa",
  afinidad: "Bosque",
  obtencion: "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
  equipo: "Utópicos",
  supertecnicas: ["La niebla, Ritmo agresivo, Femme fatale, Ilusión deslumbrante"],
  imagenurl: "https://i.pinimg.com/564x/63/46/18/6346183b285f2891d0304fd0bdcb7143.jpg"
},
{
  nombre: "Endura Vigil",
  posicion: "Delantera",
  afinidad: "Montaña",
  obtencion: "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
  equipo: "Psicotácticos",
  supertecnicas: ["Técnica +10, Trayectoria perfecta, Salto incandescente, PT +30"],
  imagenurl: "https://i.pinimg.com/564x/af/56/db/af56db873e1511ad377e6102c38a83e7.jpg"
},
{
  nombre: "Gezun Dight",
  posicion: "Delantero",
  afinidad: "Aire",
  obtencion: "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
  equipo: "Utópicos",
  supertecnicas: ["Tiro sónico, Ventisca eterna, Casanova, Ruptura relámpago"],
  imagenurl: "https://i.pinimg.com/564x/26/60/5b/26605bcdeacf741941cce0790fba8640.jpg"
},
{
  nombre: "Rei Nurtur",
  posicion: "Portera",
  afinidad: "Fuego",
  obtencion: "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
  equipo: "Utópicos",
  supertecnicas: ["Corte de arena, Polen devastador, Femme fatale, Manos liberadas"],
  imagenurl: "https://i.pinimg.com/564x/92/78/4d/92784dc7bc8849e98a998be5678b2629.jpg"
},
{
  nombre: "Masaichi Motoyoshi",
  posicion: "Delantero",
  afinidad: "Aire",
  obtencion: "Fichaje por fichatrón → Comunidad 'Clan Tasuke' en los Campos de arroz",
  equipo: "Pequeños Matones",
  supertecnicas: ["Tiro vendaval, Gran tifón, Entrada huracán, Rapidez +10"],
  imagenurl: "https://i.pinimg.com/564x/77/48/50/774850dea9a6571fcb4f14c2143e4f3d.jpg"
},
{
  nombre: "Ori Gami",
 posicion: "Defensa",
  afinidad: "Montaña",
  obtencion: "Fichaje por fichatrón → Comunidad 'Clan Tasuke' en los Campos de arroz",
  equipo: "Reinas del Patadón",
  supertecnicas: ["Confusión, Fortaleza nocturna, Regate topo, Muralla de las montañas"],
  imagenurl: "https://i.pinimg.com/564x/fd/dc/a5/fddca5c4e27da5327940fdf3385e020a.jpg"
},
{
  nombre: "Sayo Nakamise",
  posicion: "Defensa",
  afinidad: "Aire",
  obtencion: "Fichaje por fichatrón → Comunidad 'Peregrinos ficticios' en la Gruta de la Pena de Camelot (Exclusiva de la versión Trueno)",
  equipo: "Reinas del Patadón",
  supertecnicas: ["Robo fantástico, Remolino acuático, Ataque de la ballena, Gran torbellino"],
  imagenurl: "https://i.pinimg.com/564x/83/2b/ab/832bab990c3e8cfa2a9735d57d3fe086.jpg"
},
{
  nombre: "Souta Hayari",
  posicion: "Centrocampista",
  afinidad: "Fuego",
  obtencion: "Fichaje por fichatrón → Comunidad 'Clan Tasuke' en los Campos de arroz",
  equipo: "Pequeños Matones",
  supertecnicas: ["Rodillazos atómicos, Piroquinesis, Fuego+, Salto explosivo"],
  imagenurl: "https://i.pinimg.com/564x/81/99/ef/8199ef6bb6ee508bc405f746c81f67c4.jpg"
},
{
  nombre: "Choen Ryo",
  posicion: "Delantero",
  afinidad: "Montaña",
  obtencion: "Fichaje por fichatrón → Comunidad 'Club Terroso' en la Sala del ejército",
  equipo: "Pendencieros",
  supertecnicas: ["Remate del tigre, Tornado de fuego, Torbellino de fuego, Dragón ascendente"],
  imagenurl: "https://i.pinimg.com/564x/ba/c5/ac/bac5ac0a09fecf9a092e5a4ba6717b2b.jpg"
},
{
  nombre: "Genko Ka",
  posicion: "Delantero",
  afinidad: "Aire",
  obtencion: "Fichaje por fichatrón → Comunidad 'Club Terroso' en la Sala del ejército",
  equipo: "Pendencieros",
  supertecnicas: ["Tiro sónico, Piroquinesis, Piscinazo, Torbellino de fuego"],
  imagenurl: "https://i.pinimg.com/564x/78/a5/3a/78a53a897104977d9a2714036166c68b.jpg"
},
{
  nombre: "Mei Gongzhu",
  posicion: "Centrocampista",
  afinidad: "Fuego",
  obtencion: "Fichaje por fichatrón → Comunidad 'Arcillosos' en la Fortaleza de Zughe (Puerta)",
  equipo: "Ases Exóticos",
  supertecnicas: ["Ritmo agresivo, Barreno de fuego, Femme fatale, Tormenta solar"],
  imagenurl: "https://i.pinimg.com/564x/78/c9/fc/78c9fc634a9025ef1a4ec7fbf69b70b5.jpg"
},
{
  nombre: "Eddie Burroughs",
  posicion: "Delantero",
  afinidad: "Bosque",
  obtencion: "Fichaje por fichatrón → Comunidad 'Zagales Espaciales' en el Edificio principal PB del Instituto Raimon (exclusivo de descarga)",
  equipo: "Reino desunido",
  supertecnicas: ["Bomba saltarina, Presa fractal, Espejismo de balón, Mordisco de vampiro"],
  imagenurl: "https://i.pinimg.com/564x/0f/6e/96/0f6e96a316d5e8290fabc8a2169b32a9.jpg"
},
{
  nombre: "Hilda Brunner",
  posicion: "Delantera",
  afinidad: "Bosque",
  obtencion: "Fichaje por fichatrón → Comunidad 'Gremio Aventurero' en el Castillo de Arturo (Patio)",
  equipo: "Viaje Fantástico",
  supertecnicas: ["Bosque+, Tiro vendaval, Espada de Odín, Disparo doble"],
  imagenurl: "https://i.pinimg.com/564x/75/f9/83/75f983893878bff8b458bb4a14e94fad.jpg"
},
{
  nombre: "Neville Foodcake",
  posicion: "Centrocampista",
  afinidad: "Montaña",
  obtencion: "Fichaje por fichatrón → Comunidad 'Gremio Aventurero' en el Castillo de Arturo (Patio)",
  equipo: "Bestias de Carga",
  supertecnicas: ["Brisa deslizante, Tiro balista, Casanova, Espada real"],
  imagenurl: "https://i.pinimg.com/564x/04/16/26/041626f4b3459e9bebead01b3dfca0b2.jpg"
},
{
  nombre: "Eartha Toughlove",
  posicion: "Portera",
  afinidad: "Montaña",
  obtencion: "Fichaje por pachanga. Comunidad 'Club del paseíto' en el Parque",
  equipo: "Bellas y Bestia",
  supertecnicas: ["Femme fatale, Captura excelente, Tormenta de pétalos, Escudo de fuerza"],
  imagenurl: "https://i.pinimg.com/564x/e0/53/54/e053547502885caa4cc9ceeed03fd431.jpg",
},
{
  nombre: "Neva Kevinne",
  posicion: "Defensa",
  afinidad: "Bosque",
  obtencion: "Fichaje por fichatrón → Comunidad 'Descarrilados' en la Estación Inazuma",
  equipo: "Élite Trueno",
  supertecnicas: ["Refuerzos, Recobro, Círculo de hielo, Paisaje helado"],
  imagenurl: "https://i.pinimg.com/564x/38/d6/70/38d6701eb264bdc138f844cf42fb1982.jpg"
},
]
filteredJugadores: any[] = this.jugadores;
ngOnInit() {
  this.fetchJugadores(); // Llamada al método para obtener los jugadores
 }
searchTerm: any;
fetchJugadores(){
this.filterJugadores;
}
filterJugadores() {
  const term = this.searchTerm.toLowerCase(); // Convertir el término de búsqueda a minúsculas
  // Filtrar los jugadores según el término de búsqueda
  this.filteredJugadores = this.jugadores.filter(jugador =>
    jugador.nombre?.toLowerCase().includes(term) ||
    jugador.posicion?.toLowerCase().includes(term) ||
    jugador.afinidad?.toLowerCase().includes(term) ||
    jugador.equipo?.toLowerCase().includes(term) ||
    jugador.supertecnicas?.toString().toLowerCase().includes(term)
  );
  // Verificar si no se encontraron jugadores
  if (this.filteredJugadores.length == 0) {
    this.errorMessage = 'No se encontraron jugadores'; // Mostrar mensaje de error
  } else {
    this.errorMessage = ''; // Limpiar el mensaje de error
  }
}}
interface jugador{
  nombre: String;
  posicion: String;
  afinidad: String;
  obtencion: String;
  equipo: String;
  supertecnicas: String[];
  imagenurl: String;
}
