//bandas
let nombres = ['acid', 'morbid', 'thunder', 'red', 'blue', 'green', 'morbid', 'lone', 'dark', 'black'];

let nombre = ['parrot', 'priest', 'beast', 'doom', 'cheetah', 'pussycat', 'rider', 'shadow']

function banda(nombre, nombres) {
    let nombre1 = nombres[Math.floor(Math.random() * nombres.length)];
    let nombre2 = nombre[Math.floor(Math.random() * nombre.length)];

    let nombreBanda = nombre1 + ' ' + nombre2;

    return nombreBanda
};

console.log(banda(nombre, nombres));

//emojis

let emociones = ['feliz', 'triste', 'enojado', 'cansado', 'sorprendido'];

var emojis = ['😁', '😔','😡','🥱','😲'];

let emocionElegida = 'asustado';

let selectorEmoji = string => {
    if (emociones.includes(string) == true){
        let emocionesIndex = emociones.indexOf(string);
        console.log(emojis[emocionesIndex]);
    }else{
        console.log('Disculpa, no puedo encontrar esa emoción')
    }
};

console.log(selectorEmoji(emocionElegida));


//historias

let comienzo = ['erase una vez', 'habia una vez', 'esta es la historia de'];

let personajes = ['un loro astronauta', 'un oficinista timido', 'el maestro del disfraz', '"la tortuga asesina"']

let final = ['que se murió', 'quien combatía el crimen de noche', 'con ametralladoras en los dientes', 'asiduo guerrero del mal', 'el terror de las mareas']

function historia(a, b, c) {
    let inicio = comienzo[Math.floor(Math.random() * comienzo.length)];
    let nudo = personajes[Math.floor(Math.random() * personajes.length)];
    let desenlace = final[Math.floor(Math.random() * final.length)];

    let historia = inicio + ' ' + nudo + ' ' + desenlace;

    return historia
};

console.log(historia(comienzo, personajes, final));

//viaje musical

function viajeMusical() {
    let año = 1990;

    let setentas = ['I will survive - Gloria Gaynor', 'Libre - Nino Bravo', 'Stayin Alive - Bee Gees'];

    let ochentas = ['Take on me - A-ha', 'With or Without You - U2', 'Super Trouper - ABBA'];

    let noventas = ['Everybody - Backstreet Boys', 'Bitter Sweet Symphony', 'La flaca - jarabe de palo'];

    if (año >= 1970 && año <= 1979) {
        return setentas;
    } else if (año >= 1980 && año <= 1989) {
        return ochentas;
    } else if (año >= 1990 && año <= 1999) {
        return noventas;
    } else {
        return 'Aún no tenemos información disponible de esa época ¡Visítanos más adelante para tenerla!'
    }

};

console.log(viajeMusical());

//recetas

function recetaFuturista() {
    let ingredientes = ['huevos de lagarto', 'gelatina de hipopótamo', 'espuma de carne', 'queso de rata', 'jugo de piedras', 'polvo de ameba', 'carne de sirena'];

    let ingredientes2 = ['grasa de pulpo', 'seso de pato', 'patas de cangrejo', 'extracto de pulga', 'harina de palta', 'cola de Jygglypuff', 'hojas de palma', 'nieve negra', 'camarones espaciales'];

    let acompañamiento = ['ensalada de ojos', 'pure de rabano', 'aleta de tiburon', 'papas fritas']

    let tecnicasAvanzadas = ['la impresora 3D', 'cocina molecular', 'el centrifugador cuantico', 'el generador de protones'];

    let pasosReceta = [
        'Mezclar ' + ingredientes[Math.floor(Math.random() * ingredientes.length)] + ' con ' + ingredientes2[Math.floor(Math.random() * ingredientes2.length)] + '.',
        'Aplicar ' + tecnicasAvanzadas[Math.floor(Math.random() * tecnicasAvanzadas.length)] + ' para emulsionar el platillo',
        'Decorar con ' + ingredientes[Math.floor(Math.random() * ingredientes.length)] + ' y ' + ingredientes2[Math.floor(Math.random() * ingredientes2.length)] + '.',
        'Servir con un poco de ' + acompañamiento[Math.floor(Math.random() * acompañamiento.length)] + '. ¡Buen Provecho!'
    ];

    let receta = 'Receta Culinaria Futurista:\n';
    pasosReceta.forEach(function (paso, index) {
        receta += (index + 1) + '. ' + paso + '\n';
    });

    return receta;
}

console.log(recetaFuturista());


//planetas


function planeta() {
    let nombre = ['Borsalania', 'Kumadori67', 'Mamadera-25', 'Alpha-46', 'Mozilland', 'Salamalecunia', 'MeQuedéSinIdeas-12'];

    let caracteristica = ['Planeta 90% de agua', 'Mares de oro liquido', 'El centro del planeta está congelado', 'Montañas de goma', 'Con cielos eternamente nublados'];

    let colores = ['Rojo', 'Verde', 'Acquamarine', 'Magenta', 'Azul', 'Verde con motas amarillas', 'Niquel'];

    let nombreRnd = nombre[Math.floor(Math.random() * nombre.length)];

    let caracteristicaRnd = caracteristica[Math.floor(Math.random() * caracteristica.length)];

    let colorRnd = colores[Math.floor(Math.random() * colores.length)]
 
    return{
         nombre: nombreRnd,
         caracteristica: caracteristicaRnd,
         color: colorRnd
     };
 
}

let nombrePlaneta = planeta();
console.log(nombrePlaneta);
