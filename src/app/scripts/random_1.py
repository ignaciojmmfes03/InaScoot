from flask import Flask, render_template, request, jsonify
import random

app = Flask(__name__)

# Datos simulados de jugadores
nombres = ["Mark Evans", "Axel Blaze", "Jude Sharp", "Jack Wallside", "Nathan Swift", "Kevin Dragonfly",
           "Steve Grim", "Timmy Sanders", "Maxwell Carson", "Bobby Shearer", "Jim Wraith", "William Glass"]
posiciones = ["Portero", "Defensa", "Mediocampista", "Delantero"]
equipos = ["Raimon", "Royal Academy", "Zeus", "Kirkwood", "Alius Academy", "Orion Foundation"]

def generar_jugadores():
    jugadores = []
    for id in range(1, 101):
        jugador = {
            "id": id,
            "nombre": random.choice(nombres),
            "posicion": random.choice(posiciones),
            "equipo": random.choice(equipos)
        }
        jugadores.append(jugador)
    return jugadores

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        jugadores = generar_jugadores()
        return jsonify(jugadores)  # Devuelve los jugadores como JSON
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
