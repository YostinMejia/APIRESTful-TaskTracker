type TareaType = {
    id?: string,
    titulo: string,
    descripcion: string,
    fechaInicializacion: Date,
    fechaFinalizacion: Date
}

export class Tarea {
    constructor(
        public titulo: string,
        public descripcion: string,
        public fechaInicializacion: Date,
        public fechaFinalizacion: Date,
        public id?: string,

    ) {
        if (!this.titulo || !this.descripcion || !this.fechaInicializacion || !this.fechaFinalizacion) {
            throw new Error("Todos los campos de la tarea son obligatorios")
        }

        if (this.fechaInicializacion > this.fechaFinalizacion) {
            throw new Error("La fecha de creación no puede ser mayor a la fecha de finalización")
        }
    }

    static JSONAEntity(json: TareaType): Tarea {
        return new Tarea(
            json.titulo,
            json.descripcion,
            json.fechaInicializacion ? new Date(json.fechaInicializacion) : new Date(), // si no se paso fecha de inicialización se toma la fecha actual
            json.fechaFinalizacion,
            json.id
        )
    }
}