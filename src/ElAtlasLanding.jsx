import logo from "./assets/logo.png";import { useState } from "react";

export default function ElAtlasLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ——————————————————— CARTA COMPLETA ———————————————————
  const categorias = [
    // HAMBURGUESAS
    {
      nombre: "Hamburguesas",
      headers: ["Normal", "Menú"],
      items: [
        { nombre: "Atlas King", desc: "Carne de ternera, lechuga, tomate, cebolla, queso", precios: ["5,50 €", "7,50 €"] },
        { nombre: "León Doble", desc: "Doble ternera, doble queso, lechuga, tomate, cebolla", precios: ["7,50 €", "9,50 €"] },
        { nombre: "León Fit", desc: "Carne de pollo, lechuga, tomate, cebolla, queso", precios: ["5,50 €", "7,50 €"] },
        { nombre: "Crispy King", desc: "Pollo crujiente, lechuga, tomate, cebolla, queso", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Épica Huevo", desc: "Carne de ternera, lechuga, tomate, cebolla, huevo, queso", precios: ["6,50 €", "8,50 €"] },
      ],
    },
    // CAMPEROS
    {
      nombre: "Camperos",
      headers: ["Normal", "Menú"],
      items: [
        { nombre: "Pollo", desc: "Filete de pollo, tomate, lechuga, queso, cebolla, mayonesa", precios: ["5,50 €", "7,50 €"] },
        { nombre: "El Atlas", desc: "Pollo, tomate, lechuga, queso, huevo, cebolla, mayonesa", precios: ["6,50 €", "8,50 €"] },
        { nombre: "Shawarma", desc: "Shawarma, tomate, lechuga, cebolla, salsa de yogur", precios: ["6,50 €", "8,50 €"] },
        { nombre: "Pinchito de Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Jamón Halal", precios: ["5,50 €", "7,50 €"] },
        { nombre: "Shawarma El Atlas", desc: "Shawarma, tomate, lechuga, cebolla, huevo, salsa de yogur y queso", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Atún", desc: "Atún, lechuga, tomate, mayonesa", precios: ["5,00 €", "7,00 €"] },
      ],
    },
    // BOCADILLOS
    {
      nombre: "Bocadillos",
      headers: ["Normal", "Menú"],
      items: [
        { nombre: "Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Carne de Ternera", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Pinchito de Pollo", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Pinchito de Ternera", precios: ["7,00 €", "9,50 €"] },
        { nombre: "Hígado de Ternera", precios: ["7,00 €", "9,50 €"] },
        { nombre: "Vegetal", precios: ["5,00 €", "7,00 €"] },
        { nombre: "Del Mar", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Atún", precios: ["5,00 €", "7,00 €"] },
      ],
    },
    // SHAWARMA
    {
      nombre: "Shawarma",
      headers: ["Normal", "Menú"],
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
    // TACOS
    {
      nombre: "Tacos",
      headers: ["Normal", "Menú"],
      items: [
        { nombre: "Taco de Pollo", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Taco de Nuggets", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Taco de Lagrimita", precios: ["8,50 €", "10,00 €"] },
        { nombre: "Taco de Carne Picada", precios: ["8,00 €", "10,00 €"] },
        { nombre: "Taco de Shawarma", precios: ["8,00 €", "10,00 €"] },
        { nombre: "Taco Mixto (pollo y carne picada)", precios: ["8,50 €", "10,50 €"] },
        { nombre: "Gratinado", desc: "(+0,50 €)", precios: ["+0,50 €", ""] },
      ],
    },
    // PIZZAS
    {
      nombre: "Pizzas",
      headers: ["Normal", "Familiar"],
      items: [
        { nombre: "Atún", precios: ["7,00 €", "11,00 €"] },
        { nombre: "4 Quesos", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Salmón", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Caprichosa", precios: ["7,50 €", "11,50 €"] },
        { nombre: "Barbacoa", precios: ["8,00 €", "12,00 €"] },
        { nombre: "Campera", precios: ["8,50 €", "12,50 €"] },
        { nombre: "Boloñesa", precios: ["7,50 €", "11,00 €"] },
        { nombre: "Hawai", precios: ["7,00 €", "11,00 €"] },
        { nombre: "El Atlas", precios: ["8,50 €", "12,50 €"] },
        { nombre: "Carbonara", precios: ["8,50 €", "12,50 €"] },
        { nombre: "Marinera", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Margarita", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Fungi", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Vegetal", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Calzone", precios: ["8,50 €", "—"] },
        { nombre: "Prosciutto", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Peperoni", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Napolitana", precios: ["7,00 €", "11,00 €"] },
        { nombre: "Shawarma", precios: ["8,00 €", "12,00 €"] },
        { nombre: "Pan de Ajo", precios: ["6,00 €", "—"] },
        { nombre: "Ingredientes Extra", precios: ["+1,00 €", "+1,00 €"] },
      ],
    },
    // ENSALADAS
    {
      nombre: "Ensaladas",
      items: [
        { nombre: "Mediterranea", precio: "6,00 €" },
        { nombre: "El Atlas", precio: "7,50 €" },
        { nombre: "Shawarma", precio: "8,00 €" },
        { nombre: "Frutos del mar", precio: "8,00 €" },
        { nombre: "Cesar", precio: "7,50 €" },
      ],
    },
    // PLATOS COMBINADOS
    {
      nombre: "Platos Combinados",
      items: [
        { nombre: "Plato Shawarma", precio: "9,00 €" },
        { nombre: "Plato de Filete de Pollo", precio: "8,50 €" },
        { nombre: "Kapsalon Shawarma", precio: "8,00 €" },
        { nombre: "Plato Combinado Mixto X2", precio: "9,50 €" },
        { nombre: "Plato Pinchito Pollo", precio: "8,50 €" },
        { nombre: "Plato Pinchito Ternera", precio: "9,50 €" },
        { nombre: "Plato Pinchito Hígado", precio: "9,00 €" },
      ],
    },
    // COMPLEMENTOS
    {
      nombre: "Complementos y Bebidas",
      items: [
        { nombre: "Alitas de Pollo (x4)", precio: "4,00 €" },
        { nombre: "Nuggets de Pollo (x5)", precio: "3,00 €" },
        { nombre: "Lagrimitas de Pollo (x4)", precio: "4,00 €" },
        { nombre: "Falafel (x3)", precio: "2,50 €" },
        { nombre: "Patatas", precio: "2,00 €" },
        { nombre: "Patatas Gratinadas", precio: "3,50 €" },
        { nombre: "Salsas", precio: "0,50 €" },
        { nombre: "Refrescos", precio: "1,50 €" },
        { nombre: "Agua", precio: "1,00 €" },
        { nombre: "Refrescos Energéticos", precio: "2,50 €" },
      ],
    },
  ];

  function Precios({ item, headers }) {
    if (headers && item.precios) {
      return (
        <div style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "1.25rem", minWidth: 140, textAlign: "right" }}>
          <span className="tabular-nums">{item.precios[0]}</span>
          <span className="tabular-nums">{item.precios[1]}</span>
        </div>
      );
    }
    return <span className="tabular-nums">{item.precio || ""}</span>;
  }

  return (
    <div className="min-h-screen w-full text-white bg-neutral-950">
      {/* Fondo tenue */}
      <div className="fixed inset-0 -z-10 opacity-20" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(https://images.unsplash.com/photo-1600566753190-17f0baa2c768?q=80&w=1800&auto=format&fit=crop)",
        backgroundSize: "cover", backgroundPosition: "center"
      }} />

      {/* Cabecera compacta */}
      <header className="mb-8 text-center pt-8">
        <h1 className="text-3xl font-bold">El Atlas</h1>
        <p className="opacity-80">Hamburguesas · Tacos · Pizzas · Bocadillos · Camperos · Shawarma · Ensaladas</p>
        <p className="mt-2 text-lg">📞 Llamadas: <a href="tel:+34951455043" className="underline">951 455 043</a></p>
        <p className="mt-1 text-lg">💬 WhatsApp pedidos: <a href="https://wa.me/34647371605" className="underline">647 371 605</a></p>
        <p className="mt-3">📍 Calle Eduardo Aguilera Romero n°14</p>
        <p className="mt-1">🕒 Horario: Martes a Domingo 18:00 – 01:45 (Lunes cerrado)</p>
        <p className="mt-1">🛵 Reparto a domicilio: 19:30 – 23:45</p>
      </header>

      {/* MENÚ */}
      <main className="max-w-6xl mx-auto px-4 pb-6">
        <section id="menu" className="space-y-8">
          {categorias.map((cat) => (
            <article key={cat.nombre} className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5 shadow-lg">
              <div className="flex items-baseline justify-between mb-3 gap-4">
                <h3 className="text-2xl font-bold">{cat.nombre}</h3>
                {cat.headers && (
                  <div className="grid grid-cols-2 gap-5 min-w-[140px] text-right text-sm text-neutral-400">
                    <span>{cat.headers[0]}</span>
                    <span>{cat.headers[1]}</span>
                  </div>
                )}
              </div>
              <ul className="divide-y divide-neutral-800/70">
                {cat.items.map((it) => (
                  <li key={it.nombre} className="py-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium">{it.nombre}</p>
                      {it.desc && <p className="text-sm text-neutral-400">{it.desc}</p>}
                    </div>
                    <Precios item={it} headers={cat.headers} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        {/* CONTACTO & MAPA */}
        <section id="contacto" className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Tarjeta de contacto */}
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6">
            <h3 className="text-2xl font-bold mb-3">Contacto</h3>
            <ul className="space-y-2 text-neutral-200">
              <li>📞 <span className="text-neutral-400">Llamadas:</span> <a className="underline" href="tel:+34951455043">951 455 043</a></li>
              <li>💬 <span className="text-neutral-400">WhatsApp pedidos:</span> <a className="underline" href="https://wa.me/34647371605" target="_blank" rel="noreferrer">647 371 605</a></li>
              <li>📍 <span className="text-neutral-400">Dirección:</span> Calle Eduardo Aguilera Romero n°14</li>
              <li>🕒 <span className="text-neutral-400">Horario:</span> Mar–Dom 18:00–01:45 (Lunes cerrado)</li>
              <li>🛵 <span className="text-neutral-400">Reparto:</span> 19:30–23:45</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="tel:+34951455043" className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-semibold">Llamar</a>
              <a href="https://wa.me/34647371605?text=Hola,%20quiero%20hacer%20un%20pedido%20en%20El%20Atlas" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200">WhatsApp</a>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
            <iframe
              title="Ubicación El Atlas"
              width="100%"
              height="320"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent("Calle Eduardo Aguilera Romero 14")}&output=embed`}
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} El Atlas • Todos los derechos reservados</p>
          <div className="flex items-center gap-4">
            <a href="#menu" className="underline">Menú</a>
            <a href="#contacto" className="underline">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
