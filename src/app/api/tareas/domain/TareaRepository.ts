import { Tarea } from "./TareaEntity";

export interface ITareaRepository {
    crearTarea(tarea: Tarea): Promise<Tarea>
    buscarPorId(id: string): Promise<Tarea>
    obtenerTodas(): Promise<Tarea[]>
    // actualizarTareaPorId(tarea: Tarea): Promise<Tarea>
    eliminarTareaPorId(id: string): Promise<Tarea>
}