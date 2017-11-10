import * as socketIO from 'socket.io';
import { Server } from 'http';


export class AvailableIoService {
        cantidad: SocketIO.Namespace;

    init(server: Server) {
        let io = socketIO(server);
        this.cantidad = io.of("socket/cantidad");
        this.cantidad.on("connection", (socket) => {
            socket.on("subscribe", (id) => {
                socket.join(id);
            });
            socket.on("unsubscribe", (id) => {
                socket.leave(id);
            });
        });
    }

    changeAvailable(id: string, cantidad: number,
        available: boolean) {

        this.cantidad.to(id)
            .emit("available",
            { cantidad: cantidad, disponible: available });
    }

}

export const availbleIO = new AvailableIoService();