from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
app.config["DEBUG"] = True
CORS(app)

jugadores = {
    "Hiroto Carson": {
        "nombre": "Hiroto Carson",
        "posicion": "Delantero",
        "afinidad": "Fuego",
        "obtencion": "bolas con fichas amarillas en el Centro de Liocott",
        "equipo": "Hiro Squad",
        "supertecnicas": ["Espejismo de Balón, Remate dragón, Gravitación, Cañón de meteoritos"],
        "imagen_url": "https://inazumaelevenseries.com/wp-content/uploads/2019/03/8-3.png"
    },
    "Anna Swift": {
        "nombre": "Anna Swift",
        "posicion": "Delantera",
        "afinidad": "Tierra",
        "obtencion": "bolas con fichas amarillas en el Barrio de tiendas",
        "equipo": "Hiro Squad",
        "supertecnicas": ["Olor embriagador, Lecho de Rosas, Cañón de meteoritos, La Tierra"],
        "imagen_url": "https://img.wattpad.com/story_parts/990864450/images/164d86a8c1d99d9a481855719385.png"
    },
    
    "Alexis Mach": {
        "nombre": "Alexis Mach",
        "posicion": "Delantero",
        "afinidad": "Aire",
        "obtencion": "Por contactos (IE3), Sede de la Asociación de fútbol, en el Sur de Tokio, derrotar en tres pachangas (1º Meter un gol, 2º Meter dos goles, 3º No dejarse meter un gol)",
        "equipo": "Hiro Squad",
        "supertecnicas": ["Rapidez+, Zigzag chispeante, Súper relámpago, Gran Lobo"],
        "imagen_url": "https://pbs.twimg.com/profile_images/1744122201807142912/lpRtcdGV_400x400.jpg"
    },
    "Amundsen Scott Amundsen": {
        "nombre": "Amundsen Scott Amundsen",
        "posicion": "Delantero",
        "afinidad": "Aire",
        "obtencion": "pachanga en el Centro de Liocott",
        "equipo": "Los Rockandgoles",
        "supertecnicas": ["Ataque cóndor, Paisaje helado, Tornado inverso, Balón iceberg"],
        "imagen_url": "https://i.redd.it/rating-every-ie-characters-day-11-kevin-dragonfly-someoka-v0-sk5s5f8xlvfb1.png?width=398&format=png&auto=webp&s=c8a830d61c7e0f9b69f4484215ee2f4e6dd5a391"
    },
    "Bolt Leighton Bolt": {
        "nombre": "Bolt Leighton Bolt",
        "posicion": "Defensa",
        "afinidad": "Aire",
        "obtencion": "Contactos",
        "equipo": "Amos de los Elementos",
        "supertecnicas": ["Cabezazo megatón, Ultratécnica, Superelástico, Sorteo de balón"],
        "imagen_url": "https://pm1.aminoapps.com/6307/666d39b6cdcd89cd6fbfc3d660674aeb1f3e926d_00.jpg"
    },
    "Ee Earl Bird": {
        "nombre": "Ee Earl Bird",
        "posicion": "Portero",
        "afinidad": "Bosque",
        "obtencion": "pachanga en el Centro de Liocott",
        "equipo": "Los Rockandgoles",
        "supertecnicas": ["Despeje de fuego, Barrido defensivo, Gravedad, Bloqueo doble"],
        "imagen_url": "https://pm1.aminoapps.com/7662/cab6f9f2675466d882c3fdf401b4dace343feeber1-647-359v2_uhq.jpg"
    },
    "Fanfair Pomponius Fanfair": {
        "nombre": "Fanfair Pomponius Fanfair",
        "posicion": "Centrocampista",
        "afinidad": "Bosque",
        "obtencion": "bolas con ficha azul en el Barrio de tiendas",
        "equipo": "Los Gacelas",
        "supertecnicas": ["Balón rodante, Armadillo circense, Tornado venenoso, Patín aéreo"],
        "imagen_url": "https://www.nautiljon.com/images/jeuxvideo_persos/00/86/kabeyama_heigoro_5368.webp"
    },
    "Firefoot Blazer Firefoot": {
        "nombre": "Firefoot Blazer Firefoot",
        "posicion": "Portero",
        "afinidad": "Fuego",
        "obtencion": "bolas con fichas rojas",
        "equipo": "Amos de los Elementos",
        "supertecnicas": ["Carga elemental, Lanzallamas, Cortafuegos, Combustión"],
        "imagen_url": "https://pm1.aminoapps.com/6285/f44523bc476f107b19e10ed75b28a6e7ec10a4f9_hq.jpg"
    },
    "Gleeson Dextra Gleeson": {
        "nombre": "Gleeson Dextra Gleeson",
        "posicion": "Delantera",
        "afinidad": "Bosque",
        "obtencion": "bolas con ficha amarilla de la Zona de tiendas del Área japonesa",
        "equipo": "Los Devoratofu",
        "supertecnicas": ["Remate dragón, Giro bobina, Jaula de piedra, Cometa"],
        "imagen_url": "https://tiermaker.com/images/template_images/2022/15194786/inazuma-eleven-todos-los-jugadores-del-raimon-original-go-or-15194786/2289cdbf77fa2b5f0e5b59b3b98878d98910d46c79be856d94e580cfbe34abd2rittw.png"
    },
    "Jarret May Jarret": {
        "nombre": "Jarret May Jarret",
        "posicion": "Delantera",
        "afinidad": "Bosque",
        "obtencion": "bolas con la ficha azul en el centro de Liocott",
        "equipo": "Los Rockandgoles",
        "supertecnicas": ["Psicorremate, Espejismo de balón, Bola de fango, Fénix oscuro"],
        "imagen_url": "https://pm1.aminoapps.com/6344/618651a00826d90482116e97394e1d8d36bd7527_hq.jpg"
    },
    "Mann T. T. Mann": {
        "nombre": "Mann T. T. Mann",
        "posicion": "Centrocampista",
        "afinidad": "Fuego",
        "obtencion": "bolas con ficha roja de la Zona de tiendas del Área japonesa",
        "equipo": "Los Devoratofu",
        "supertecnicas": ["Ignición, Remate combinado, Paipay gigante, Dúo magma"],
        "imagen_url": "https://pm1.aminoapps.com/6704/5df949db95ccfda8de31e4497499be2bfa073314_hq.jpg"
    },
    "Pentam Ian Bick": {
        "nombre": "Pentam Ian Bick",
        "posicion": "Defensa",
        "afinidad": "Aire",
        "obtencion": "pachanga",
        "equipo": "Enemigos del peine",
        "supertecnicas": ["Equilibrismo, Hojarasca, Niebla venenosa , Espejismo"],
        "imagen_url": "https://tiermaker.com/images/template_images/2022/15400895/jugadores-inazuma-eleven-1-2-y-3-megalocke-15400895/calvo-canon.png"
    },
    "Slinka Chauncey Slinka": {
        "nombre": "Slinka Chauncey Slinka",
        "posicion": "Centrocampista",
        "afinidad": "Bosque",
        "obtencion": "Contactos",
        "equipo": "Amos de los Elementos",
        "supertecnicas": ["Bombazo, Lluvia de meteoros, Mejor garantía, Cañón de meteoritos"],
        "imagen_url": "https://pm1.aminoapps.com/6745/755aecfe7bdef98b333fd72cac8391b17a4d6dbbv2_00.jpg"
    },
    "Steady Eddy Steady": {
        "nombre": "Steady Eddy Steady",
        "posicion": "Delantero",
        "afinidad": "Montaña",
        "obtencion": "Contactos",
        "equipo": "Banda del Rey Mono",
        "supertecnicas": ["Corte volcánico, Llamarada atómica, Neo tiro galáctico, Cortafuegos"],
        "imagen_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5y3v3OXS-H2UQtyMRyd662ErlMnNXMlonlRsg91fIIeejnJkkqdOgdv5GzRUm6OaR6sQ&usqp=CAU"
    },
    "Vinyl Gram Vineela": {
        "nombre": "Vinyl Gram Vineela",
        "posicion": "Centrocampista",
        "afinidad": "Bosque",
        "obtencion": "pachanga",
        "equipo": "Los Devoratofu",
        "supertecnicas": ["Remate serpiente, Regate topo, Disparo cósmico, Engaño yoyó"],
        "imagen_url": "https://i.pinimg.com/736x/34/f5/c4/34f5c4b6f54feb329f007beb42a3726c.jpg"
    },
    "Weath Gustav Wheathervane": {
        "nombre": "Weath Gustav Wheathervane",
        "posicion": "Defensa",
        "afinidad": "Aire",
        "obtencion": "bolas con fichas azules del Área de Costail",
        "equipo": "Amos de los Elementos",
        "supertecnicas": ["Carga elemental, Ciclón doble, Entrada tormenta, Danza del viento"],
        "imagen_url": "https://i.pinimg.com/564x/8e/ec/aa/8eecaaa6772e088220d04a0fe9954c38.jpg"
    },
    "Windrush Zip Windrush": {
        "nombre": "Windrush Zip Windrush",
        "posicion": "Delantero",
        "afinidad": "Aire",
        "obtencion": "contactos",
        "equipo": "Los Rascabalones",
        "supertecnicas": ["Golpes de luz, Superelástico, Espada de Odín, Muralla infinita"],
        "imagen_url": "https://i.pinimg.com/564x/a8/27/23/a82723c9da4bad015cf1b1211022d3e8.jpg"
    },
    "Agnethe Presari": {
        "nombre": "Agnethe Presari",
        "posicion": "Defensa",
        "afinidad": "Bosque",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
        "equipo": "Utópicos",
        "supertecnicas": ["La niebla, Ritmo agresivo, Femme fatale, Ilusión deslumbrante"],
        "imagen_url": "https://i.pinimg.com/564x/63/46/18/6346183b285f2891d0304fd0bdcb7143.jpg" 
    },
    "Endura Vigil": {
        "nombre": "Endura Vigil",
        "posicion": "Delantera",
        "afinidad": "Montaña",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
        "equipo": "Psicotácticos",
        "supertecnicas": ["Técnica +10, Trayectoria perfecta, Salto incandescente, PT +30"],
        "imagen_url": "https://i.pinimg.com/564x/af/56/db/af56db873e1511ad377e6102c38a83e7.jpg"
    },
    "Gezun Dight": {
        "nombre": "Gezun Dight",
        "posicion": "Delantero",
        "afinidad": "Aire",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
        "equipo": "Utópicos",
        "supertecnicas": ["Tiro sónico, Ventisca eterna, Casanova, Ruptura relámpago"],
        "imagen_url": "https://i.pinimg.com/564x/26/60/5b/26605bcdeacf741941cce0790fba8640.jpg"  
    },
    "Rei Nurtur": {
        "nombre": "Rei Nurtur",
        "posicion": "Portera",
        "afinidad": "Fuego",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Hijos del Paraíso' en la Sala de entrenamiento",
        "equipo": "Utópicos",
        "supertecnicas": ["Corte de arena, Polen devastador, Femme fatale, Manos liberadas"],
        "imagen_url": "https://i.pinimg.com/564x/92/78/4d/92784dc7bc8849e98a998be5678b2629.jpg"  
    },
    "Masaichi Motoyoshi": {
        "nombre": "Masaichi Motoyoshi",
        "posicion": "Delantero",
        "afinidad": "Aire",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Clan Tasuke' en los Campos de arroz",
        "equipo": "Pequeños Matones",
        "supertecnicas": ["Tiro vendaval, Gran tifón, Entrada huracán, Rapidez +10"],
        "imagen_url": "https://i.pinimg.com/564x/77/48/50/774850dea9a6571fcb4f14c2143e4f3d.jpg"  
    },
    "Ori Gami": {
        "nombre": "Ori Gami",
        "posicion": "Defensa",
        "afinidad": "Montaña",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Clan Tasuke' en los Campos de arroz",
        "equipo": "Reinas del Patadón",
        "supertecnicas": ["Confusión, Fortaleza nocturna, Regate topo, Muralla de las montañas"],
        "imagen_url": "https://i.pinimg.com/564x/fd/dc/a5/fddca5c4e27da5327940fdf3385e020a.jpg"  
    },
    "Sayo Nakamise": {
        "nombre": "Sayo Nakamise",
        "posicion": "Defensa",
        "afinidad": "Aire",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Peregrinos ficticios' en la Gruta de la Pena de Camelot (Exclusiva de la versión Trueno)",
        "equipo": "Reinas del Patadón",
        "supertecnicas": ["Robo fantástico, Remolino acuático, Ataque de la ballena, Gran torbellino"],
        "imagen_url": "https://i.pinimg.com/564x/83/2b/ab/832bab990c3e8cfa2a9735d57d3fe086.jpg"  
    },
    "Souta Hayari": {
        "nombre": "Souta Hayari",
        "posicion": "Centrocampista",
        "afinidad": "Fuego",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Clan Tasuke' en los Campos de arroz",
        "equipo": "Pequeños Matones",
        "supertecnicas": ["Rodillazos atómicos, Piroquinesis, Fuego+, Salto explosivo"],
        "imagen_url": "https://i.pinimg.com/564x/81/99/ef/8199ef6bb6ee508bc405f746c81f67c4.jpg"  
    },
    "Choen Ryo": {
        "nombre": "Choen Ryo",
        "posicion": "Delantero",
        "afinidad": "Montaña",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Club Terroso' en la Sala del ejército",
        "equipo": "Pendencieros",
        "supertecnicas": ["Remate del tigre, Tornado de fuego, Torbellino de fuego, Dragón ascendente"],
        "imagen_url": "https://i.pinimg.com/564x/ba/c5/ac/bac5ac0a09fecf9a092e5a4ba6717b2b.jpg"  
    },
    "Genko Ka": {
        "nombre": "Genko Ka",
        "posicion": "Delantero",
        "afinidad": "Aire",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Club Terroso' en la Sala del ejército",
        "equipo": "Pendencieros",
        "supertecnicas": ["Tiro sónico, Piroquinesis, Piscinazo, Torbellino de fuego"],
        "imagen_url": "https://i.pinimg.com/564x/78/a5/3a/78a53a897104977d9a2714036166c68b.jpg"  
    },
    "Mei Gongzhu": {
        "nombre": "Mei Gongzhu",
        "posicion": "Centrocampista",
        "afinidad": "Fuego",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Arcillosos' en la Fortaleza de Zughe (Puerta)",
        "equipo": "Ases Exóticos",
        "supertecnicas": ["Ritmo agresivo, Barreno de fuego, Femme fatale, Tormenta solar"],
        "imagen_url": "https://i.pinimg.com/564x/78/c9/fc/78c9fc634a9025ef1a4ec7fbf69b70b5.jpg"  
    },
    "Eddie Burroughs": {
        "nombre": "Eddie Burroughs",
        "posicion": "Delantero",
        "afinidad": "Bosque",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Zagales Espaciales' en el Edificio principal PB del Instituto Raimon (exclusivo de descarga)",
        "equipo": "Reino desunido",
        "supertecnicas": ["Bomba saltarina, Presa fractal, Espejismo de balón, Mordisco de vampiro"],
        "imagen_url": "https://i.pinimg.com/564x/0f/6e/96/0f6e96a316d5e8290fabc8a2169b32a9.jpg"  
    },
    "Hilda Brunner": {
        "nombre": "Hilda Brunner",
        "posicion": "Delantera",
        "afinidad": "Bosque",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Gremio Aventurero' en el Castillo de Arturo (Patio)",
        "equipo": "Viaje Fantástico",
        "supertecnicas": ["Bosque+, Tiro vendaval, Espada de Odín, Disparo doble"],
        "imagen_url": "https://i.pinimg.com/564x/75/f9/83/75f983893878bff8b458bb4a14e94fad.jpg"  
    },
    "Neville Foodcake": {
        "nombre": "Neville Foodcake",
        "posicion": "Centrocampista",
        "afinidad": "Montaña",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Gremio Aventurero' en el Castillo de Arturo (Patio)",
        "equipo": "Bestias de Carga",
        "supertecnicas": ["Brisa deslizante, Tiro balista, Casanova, Espada real"],
        "imagen_url": "https://i.pinimg.com/564x/04/16/26/041626f4b3459e9bebead01b3dfca0b2.jpg"  
    },
    "Eartha Toughlove": {
        "nombre": "Eartha Toughlove",
        "posicion": "Portera",
        "afinidad": "Montaña",
        "obtencion": "Fichaje por pachanga. Comunidad 'Club del paseíto' en el Parque",
        "equipo": "Bellas y Bestia",
        "supertecnicas": ["Femme fatale, Captura excelente, Tormenta de pétalos, Escudo de fuerza"],
        "imagen_url": "https://i.pinimg.com/564x/e0/53/54/e053547502885caa4cc9ceeed03fd431.jpg",
    },
    "Neva Kevinne": {
        "nombre": "Neva Kevinne",
        "posicion": "Defensa",
        "afinidad": "Bosque",
        "obtencion": "Fichaje por fichatrón → Comunidad 'Descarrilados' en la Estación Inazuma",
        "equipo": "Élite Trueno",
        "supertecnicas": ["Refuerzos, Recobro, Círculo de hielo, Paisaje helado"],
        "imagen_url": "https://i.pinimg.com/564x/38/d6/70/38d6701eb264bdc138f844cf42fb1982.jpg"  
    },
}


@app.route('/jugadores', methods=['GET'])
def get_todos_los_jugadores():
    query = request.args.get('query', '').lower()
    if query:
        resultados = [
            jugador for jugador in jugadores.values() 
            if query in jugador['nombre'].lower() 
            or query in jugador['posicion'].lower() 
            or query in jugador['afinidad'].lower()
            or query in jugador['equipo'].lower()
            or any(query in tecnica.lower() for tecnica in jugador['supertecnicas'])
        ]
        return jsonify(resultados)
    return jsonify(list(jugadores.values()))

if __name__ == '__main__':
    app.run(debug=True)