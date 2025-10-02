import { useState } from "react";
import logo from "./assets/logo.png";

export default function ElAtlasLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const horario = [
    { dia: "Lunes", horas: "Cerrado" },
    { dia: "Martes", horas: "18:00 – 01:45" },
    { dia: "Miércoles", horas: "18:00 – 01:45" },
    { dia: "Jueves", horas: "18:00 – 01:45" },
    { dia: "Viernes", horas: "18:00 – 01:45" },
    { dia: "Sábado", horas: "18:00 – 01:45" },
    { dia: "Domingo", horas: "18:00 – 01:45" },
    { dia: "Domicilio", horas: "19:30 – 00:00" },
  ];

  const categorias = [
    {
      nombre: "Hamburguesas",
      encabezados: ["Normal", "Menú"],
      items: [
        { nombre: "Atlas King", precios: ["5,50 €", "7,50 €"] },
        { nombre: "León Doble", precios: ["7,50 €", "9,50 €"] },
        { nombre: "León Fit", precios: ["5,50 €", "7,50 €"] },
        { nombre: "Crispy King", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Épica Huevo", precios: ["6,50 €", "8,50 €"] },
      ],
    },
    {
      nombre: "Camperos",
      encabezados: ["Normal", "Menú"],
      items: [
        { nombre: "Pollo", precios: ["5,50 €", "7,50 €"] },
        { nombre: "El Atlas", precios: ["6,50 €", "8,50 €"] },
        { nombre: "Shawarma", precios: ["6,50 €", "8,50 €"] },
        { nombre: "Pinchito de Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Jamón Halal", precios: ["5,50 €", "7,50 €"] },
        { nombre: "Shawarma El Atlas", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Atún", precios: ["5,00 €", "7,00 €"] },
      ],
    },
    {
      nombre: "Bocadillos",
      encabezados: ["Normal", "Menú"],
      items: [
        { nombre: "Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Carne de Ternera", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Pinchito de Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Pinchito de Ternera", precios: ["7,50 €", "9,50 €"] },
        { nombre: "Hígado de Ternera", precios: ["7,50 €", "9,50 €"] },
        { nombre: "Vegetal", precios: ["5,00 €", "7,00 €"] },
        { nombre: "Del Mar", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Atún", precios: ["5,00 €", "7,00 €"] },
      ],
    },
    {
      nombre: "Shawarma",
      encabezados: ["Normal", "Menú"],
      items: [
        { nombre: "Rollo Ternera", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Rollo Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Pita Ternera", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Pita Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Rollo Mixto", precios: ["7,50 €", "9,50 €"] },
        { nombre: "Pita Mixto", precios: ["7,50 €", "9,50 €"] },
        { nombre: "Falafel Rollo o Pita", precios: ["5,50 €", "7,50 €"] },
        { nombre: "Lahmacun", precios: ["7,50 €", "9,50 €"] },
      ],
    },
    {
      nombre: "Ensaladas",
      encabezados: ["Precio"],
      items: [
        { nombre: "Mediterránea", precios: ["6,00 €"] },
        { nombre: "El Atlas", precios: ["7,50 €"] },
        { nombre: "Shawarma", precios: ["8,00 €"] },
        { nombre: "Frutos del mar", precios: ["8,00 €"] },
        { nombre: "César", precios: ["7,50 €"] },
      ],
    },
    {
      nombre: "Platos Combinados",
      encabezados: ["Precio"],
      items: [
        { nombre: "Plato Shawarma", precios: ["9,00 €"] },
        { nombre: "Plato de Filete de Pollo", precios: ["8,50 €"] },
        { nombre: "Kapsalon Shawarma", precios: ["8,00 €"] },
        { nombre: "Plato Combinado Mixto x2", precios: ["9,50 €"] },
        { nombre: "Plato Pinchito Pollo", precios: ["8,50 €"] },
        { nombre: "Plato Pinchito Ternera", precios: ["9,50 €"] },
        { nombre: "Plato Pinchito Hígado", precios: ["9,00 €"] },
      ],
    },
    {
      nombre: "Tacos",
      encabezados: ["Normal", "Menú"],
      items: [
        { nombre: "Taco de Pollo", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Taco de Nuggets", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Taco de Lagrimita", precios: ["8,00 €", "10,00 €"] },
        { nombre: "Taco de Carne Picada", precios: ["8,00 €", "10,00 €"] },
        { nombre: "Taco de Shawarma", precios: ["8,50 €", "10,50 €"] },
        { nombre: "Taco Mixto", precios: ["8,50 €", "10,50 €"] },
      ],
    },
    {
      nombre: "Pizzas",
      encabezados: ["Normal", "Familiar"],
      items: [
        { nombre: "Atún", precios: ["7,00 €", "11,00 €"] },
        { nombre: "4 Quesos", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Salmón", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Caprichosa", precios: ["7,50 €", "11,50 €"] },
        { nombre: "Barbacoa", precios: ["8,00 €", "12,00 €"] },
        { nombre: "Campera", precios: ["8,50 €", "12,50 €"] },
        { nombre: "Boloñesa", precios: ["7,50 €", "11,50 €"] },
        { nombre: "Hawai", precios: ["7,00 €", "11,00 €"] },
        { nombre: "El Atlas", precios: ["8,50 €", "12,50 €"] },
        { nombre: "Carbonara", precios: ["8,50 €", "12,00 €"] },
        { nombre: "Marinera", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Margarita", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Fungi", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Vegetal", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Calzone", precios: ["8,50 €", "12,50 €"] },
        { nombre: "Prosciutto", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Peperoni", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Napolitana", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Shawarma", precios: ["8,00 €", "12,00 €"] },
        { nombre: "Pan de Ajo", precios: ["6,00 €", "-"] },
      ],
    },
    {
      nombre: "Complementos y Bebidas",
      encabezados: ["Precio"],
      items: [
        { nombre: "Alitas de Pollo x4", precios: ["4,00 €"] },
        { nombre: "Nuggets de Pollo x5", precios: ["3,00 €"] },
        { nombre: "Lagrimitas de Pollo x4", precios: ["4,00 €"] },
        { nombre: "Falafel x3", precios: ["2,50 €"] },
        { nombre: "Patatas", precios: ["2,50 €"] },
        { nombre: "Patatas gratinadas", precios: ["3,50 €"] },
        { nombre: "Salsas", precios: ["0,50 €"] },
        { nombre: "Refrescos", precios: ["1,50 €"] },
        { nombre: "Agua", precios: ["1,00 €"] },
        { nombre: "Refrescos energéticos", precios: ["2,50 €"] },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* ENCABEZADO */}
      <header className="bg-black/40 backdrop-blur border-b border-white/10 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="El Atlas logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-white font-semibold text-lg">El Atlas</span>
          </a>
          <nav className="hidden md:flex gap-6 text-white/80">
            <a href="#menu" className="hover:text-white">Menú</a>
            <a href="#horario" className="hover:text-white">Horario</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
            <a href="https://www.instagram.com/_elatlas" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-red-500">Sabor que ruge El Atlas</h1>
        <p className="mt-4 text-lg text-white/80">
          Hamburguesas, tacos, alitas, pizzas, bocadillos, camperos, shawarma y ensaladas.
          ¡Pide para llevar o ven a vernos!
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a href="tel:951455043" className="bg-red-600 text-white px-4 py-2 rounded">Llamar: 951 455 043</a>
          <a
            href={`https://wa.me/0034647371605?text=${encodeURIComponent(
              `¡Hola El Atlas! Quiero hacer un pedido.\n\nNombre:\nDirección (o indicar "recogida en local"):\nPedido:`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            WhatsApp
          </a>
        </div>
        <p className="mt-2 text-sm text-white/70">Calle Eduardo Aguilera Romero nº14</p>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Menú</h2>
        <div className="grid gap-8">
          {categorias.map((cat, i) => (
            <div key={i} className="bg-black/40 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">{cat.nombre}</h3>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-white/70">
                    <th className="py-1">Producto</th>
                    {cat.encabezados.map((enc, j) => (
                      <th key={j} className="py-1">{enc}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cat.items.map((item, k) => (
                    <tr key={k} className="border-t border-white/10">
                      <td className="py-2">{item.nombre}</td>
                      {item.precios.map((precio, l) => (
                        <td key={l} className="py-2">{precio}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* HORARIO */}
      <section id="horario" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Horario</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {horario.map((h, i) => (
            <div key={i} className="bg-black/40 border border-white/10 rounded-lg p-4">
              <p className="font-semibold">{h.dia}</p>
              <p className="text-white/70">{h.horas}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="El Atlas logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-white/90 font-semibold">El Atlas</span>
          </div>
          <div className="text-center text-sm text-white/70">
            Calle Eduardo Aguilera Romero nº14 · Servicio domicilio: 19:30–00:00
          </div>
          <div className="flex justify-end">
            <a
              href="https://www.instagram.com/_elatlas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline"
            >
              Instagram @_elatlas
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
