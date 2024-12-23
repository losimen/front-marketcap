import type { Socket } from "socket.io-client"
import { io } from "socket.io-client"

class SocketIOService {
  socket: Socket
  constructor() {
    this.socket = io(import.meta.env.VUE_APP_SOCKET_ENDPOINT || "http://localhost:3000/" )
  }
}

export const socket = new SocketIOService().socket
