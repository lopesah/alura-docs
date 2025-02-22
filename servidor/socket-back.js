import "dotenv/config";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosLogin from "./registrarEventos/login.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

import io from "./servidor.js";

io.use(autorizarUsuario);

io.on("connection", (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosLogin(socket, io);
  registrarEventosDocumento(socket, io);
  registrarEventosCadastro(socket, io);
});