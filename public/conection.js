const socket = io();

function emit_data() {
  socket.emit("primer_conexion", { name: "Alejandro", edad: 32 });
}
let selectors = document.querySelectorAll(".emit_data");
selectors.forEach((s) => s.addEventListener("click", emit_data));
//socket.on("contador", (data) => console.log(data));
socket.on("contador", (data) => console.log(data));

socket.on("contador", (data) => {
  const contadorSpan = document.getElementById("contador");
  contadorSpan.innerText = data.contador;
});
