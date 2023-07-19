class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const productos = [
    new Producto("Alfajores", 250),
    new Producto("Caramelos", 10),
    new Producto("Gomitas", 100),
    new Producto("Chocolates", 150),
    new Producto("Bebidas energéticas", 400),
    new Producto("Agua", 120),
    new Producto("Gaseosas", 280),
    new Producto("Jugos", 170),
    new Producto("Marlboro", 500),
    new Producto("Camel", 600),
    new Producto("Chesterfield", 300),
    new Producto("Lucky Strike", 450)
  ];
  
  function calculoMonto(productoIndex, cantidad) {
    const producto = productos[productoIndex];
    if (producto) {
      return producto.precio * cantidad;
    } else {
      alert("Opción no válida");
      return 0;
    }
  }
  
  function mostrarOpciones(opciones) {
    return Number(prompt(`Bienvenido a Kioskito De Maní! Presione lo que necesite para continuar\n${opciones.map((o, index) => `${index + 1}. ${o}`).join("\n")}`));
  }
  
  function mostrarProductos(tipoProductos) {
    const opcionesProductos = tipoProductos.map((producto) => producto.nombre);
    let productoSeleccionado = mostrarOpciones(opcionesProductos);
  
    if (productoSeleccionado < 1 || productoSeleccionado > opcionesProductos.length) {
      alert("El número que seleccionó no está dentro de las opciones. Por favor, inténtelo nuevamente.");
      return null;
    } else {
      return productoSeleccionado - 1;
    }
  }
  
  let opcionSeleccionada = mostrarOpciones([
    "Comprar golosinas",
    "Comprar bebidas",
    "Comprar cigarrillos",
    "Cargar SUBE"
  ]);
  
  if (opcionSeleccionada === 1) {
    const tipoGolosinas = productos.slice(0, 4);
    let golosinaSeleccionada = mostrarProductos(tipoGolosinas);
  
    if (golosinaSeleccionada !== null) {
      let cantidad = Number(prompt("Seleccione la cantidad que desee"));
      let monto = calculoMonto(golosinaSeleccionada, cantidad);
      alert("El monto a pagar es de: $" + monto);
    }
  
  } else if (opcionSeleccionada === 2) {
    const tipoBebidas = productos.slice(4, 8);
    let bebidaSeleccionada = mostrarProductos(tipoBebidas);
  
    if (bebidaSeleccionada !== null) {
      let cantidad = Number(prompt("Seleccione la cantidad que desee"));
      let monto = calculoMonto(bebidaSeleccionada + 4, cantidad);
      alert("El monto a pagar es de: $" + monto);
    }
  
  } else if (opcionSeleccionada === 3) {
    const tipoCigarrillos = productos.slice(8);
    let cigarrilloSeleccionado = mostrarProductos(tipoCigarrillos);
  
    if (cigarrilloSeleccionado !== null) {
      let cantidad = Number(prompt("Seleccione la cantidad que desee"));
      let monto = calculoMonto(cigarrilloSeleccionado + 8, cantidad);
      alert("El monto a pagar es de: $" + monto);
    }
  
  } else if (opcionSeleccionada === 4) {
    let montoCargaSUBE = Number(prompt("Ingrese el monto que desea cargar a la SUBE:"));
    alert("El monto a pagar es de: $" + montoCargaSUBE);
  }
  
  
  function mostrarMetodosPago() {
    const metodosPago = ["Efectivo", "Mercado Pago", "Crédito/Débito"];
  
    const container = document.getElementById("metodo-pago-container");
  
    metodosPago.forEach((metodo, index) => {
      const button = document.createElement("button");
      button.textContent = metodo;
      button.addEventListener("click", () => {
        if (index === 0) {
          alert("Págale al vendedor. ¡Muchas gracias por su compra!");
        } else if (index === 1) {
          alert("Pídale al vendedor el QR. ¡Muchas gracias por su compra!");
        } else if (index === 2) {
          alert("Pásele la tarjeta al vendedor. ¡Muchas gracias por su compra!");
        } else {
          alert("Opción no válida");
        }
      });
  
      container.appendChild(button);
    });
  }
  
  mostrarMetodosPago();
  