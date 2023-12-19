import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ nome, senha}) => {
    const usuario = await encontrarUsuario(nome);

    const autenticado = autenticarUsuario(usuario, senha);
    console.log(usuario);

  });
}

export default registrarEventosLogin;