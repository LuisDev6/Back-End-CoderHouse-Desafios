class Usuario {
    constructor(nombre, apellido, libros = [], mascotas = []) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }

    getFullName() {
        return console.log(
            `
            Nombre del usuario: ${this.nombre} ${this.apellido}
            `);

    }
    addMascotas(mascota) {
        this.mascotas.push(mascota);

    }
    countMascotas() {
        return console.log(
            `
            Cantidad de Mascotas: ${this.mascotas.length}
            `);

    }
    addBook(nombre, autor) {
        let nuevoLibro = {
            nombre,
            autor,
        };
        this.libros.push(nuevoLibro);
    }
    getBookNames() {

        let librosUsuario = this.libros.map(libro => libro.nombre);
        console.log(
            `
            Libros del Usuario: `)
            console.log(librosUsuario)    




    }

}

const usuario = new Usuario(
    "Luis",
    "Amaison",
    [
        {
            nombre:"El alquimista",
            autor:"Paulo Cohelo"
        },
        {
            nombre:"Una cita en el piso 32",
            autor: "Gisela Gilges"
        }
    ],
    ["Dana", "Chicho"]
)

usuario.getFullName();
usuario.countMascotas();
usuario.getBookNames();