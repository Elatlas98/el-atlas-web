import { useState } from "react";
import logo from "./assets/logo.png";

// Contacto & redes
const PHONE_CALL = "34951455043";          // 951 455 043 en formato internacional sin +
const WHATSAPP_NUMBER = "34647371605";     // WhatsApp pedidos (0034 647 371 605)
const INSTAGRAM_URL = "https://www.instagram.com/_elatlas";

// Dirección y horarios
const ADDRESS = "Calle Eduardo Aguilera Romero n°14";
const OPEN_TEXT = "Martes a Domingo 18:00 – 01:45 (Lunes cerrado)";
const DELIVERY_WINDOW = "19:30 – 23:45";

// Mensaje pre-relleno para WhatsApp
const WA_MSG = encodeURIComponent(
  "¡Hola El Atlas! Quiero hacer un pedido.\n\n" +
  "Nombre:\n" +
  "Teléfono:\n" +
  "¿Domicilio o Recoger en local?:\n" +
  "Dirección (si es domicilio):\n" +
  "Pedido:\n"
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`;

export default function ElAtlasLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Carta completa
  const categorias = [
    // HAMBURGUESAS
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
    // CAMPEROS
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
    // BOCADILLOS
    {
      nombre: "Bocadillos",
      encabezados: ["Normal", "Menú"],
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
    // TACOS
    {
      nombre: "Tacos",
      encabezados: ["Normal", "Menú"],
      items: [
        { nombre: "Taco de Pollo", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Taco de Nuggets", precios: ["7,00 €", "9,00 €"] },
        { nombre: "Taco de Lagrimita", precios: ["8,50 €", "10,00 €"] },
        { nombre: "Taco de Carne Picada", precios: ["8,00 €", "10,00 €"] },
        { nombre: "Taco de Shawarma", precios: ["8,00 €", "10,00 €"] },
        { nombre: "Taco Mixto (pollo y carne picada)", precios: ["8,50 €", "10,50 €"] },
        { nombre: "Gratinado (+0,50 €)", precios: ["+0,50 €", ""] },
      ],
    },
    // PIZZAS (Normal / Familiar)
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
    // ENSALADAS (precio único)
    {
      nombre: "Ensaladas",
      encabezados: ["Precio"],
      items: [
        { nombre: "Mediterranea", precios: ["6,00 €"] },
        { nombre: "El Atlas", precios: ["7,50 €"] },
        { nombre: "Shawarma", precios: ["8,00 €"] },
        { nombre: "Frutos del mar", precios: ["8,00 €"] },
        { nombre: "Cesar", precios: ["7,50 €"] },
      ],
    },
    // PLATOS COMBINADOS (precio único)
    {
      nombre: "Platos Combinados",
      encabezados: ["Precio"],
      items: [
        { nombre: "Plato Shawarma", precios: ["9,00 €"] },
        { nombre: "Plato de Filete de Pollo", precios: ["8,50 €"] },
        { nombre: "Kapsalon Shawarma", precios: ["8,00 €"] },
        {
          nombre: "Plato Combinado Mixto X2",
          precios: ["9,50 €"],
        },
        { nombre: "Plato Pinchito Pollo", precios: ["8,50 €"] },
        { nombre: "Plato Pinchito Ternera", precios: ["9,50 €"] },
        { nombre: "Plato Pinchito Hígado", precios: ["9,00 €"] },
      ],
    },
    // COMPLEMENTOS Y BEBIDAS (precio único)
    {
      nombre: "Complementos y Bebidas",
      encabezados: ["Precio"],
      items: [
        { nombre: "Alitas de Pollo (x4)", precios: ["4,00 €"] },
        { nombre: "Nuggets de Pollo (x5)", precios: ["3,00 €"] },
        { nombre: "Lagrimitas de Pollo (x4)", precios: ["4,00 €"] },
        { nombre: "Falafel (x3)", precios: ["2,50 €"] },
        { nombre: "Patatas", precios: ["2,00 €"] },
        { nombre: "Patatas Gratinadas", precios: ["3,50 €"] },
        { nombre: "Salsas", precios: ["0,50 €"] },
        { nombre: "Refrescos", precios: ["1,50 €"] },
        { nombre: "Agua", precios: ["1,00 €"] },
        { nombre: "Refrescos Energéticos", precios: ["2,50 €"] },
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* NAVBAR */}
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
            <a href="#ubicacion" className="hover:text-white">Ubicación</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
          </nav>
          <button
            className="md:hidden text-sm px-3 py-1 border border-white/20 rounded"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            Menú
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-3 space-y-2 text-sm">
            <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menú</a><br />
            <a href="#horario" onClick={() => setMobileMenuOpen(false)}>Horario</a><br />
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a><br />
            <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)}>Ubicación</a><br />
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        )}
      </header>

      {/* HERO (como te gustaba) */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Sabor que ruge <span className="text-red-500">El Atlas</span>
        </h1>
        <p className="mt-4 text-lg text-white/80">
          Hamburguesas, tacos, alitas, pizzas, bocadillos, camperos, shawarma y ensaladas.
          ¡Pide para llevar o ven a vernos!
        </p>
        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          <a href={`tel:+${PHONE_CALL}`} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Llamar: 951 455 043
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded hover:bg-neutral-200"
          >
            WhatsApp (pedido)
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 border border-white/15 px-4 py-2 rounded hover:bg-neutral-700"
          >
            Instagram @_elatlas
          </a>
        </div>
        <p className="mt-3 text-sm text-white/70">📍 {ADDRESS}</p>
      </section>

      {/* MENÚ */}
      <section id="menu" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-4">
        <h2 className="text-2xl font-bold mb-6">Menú</h2>
        <div className="grid gap-8">
          {categorias.map((cat, i) => (
            <div key={i} className="bg-black/40 border border-white/10 rounded-xl p-6">
              <div className="flex items-baseline justify-between mb-3 gap-4">
                <h3 className="text-xl font-semibold">{cat.nombre}</h3>
                {cat.encabezados && (
                  <div className="grid grid-cols-2 gap-5 min-w-[140px] text-right text-sm text-white/70">
                    {cat.encabezados.map((e, idx) => <span key={idx}>{e}</span>)}
                  </div>
                )}
              </div>
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
      <section id="horario" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold mb-4">Horario</h2>
        <p className="text-white/85">🕒 {OPEN_TEXT}</p>
        <p className="text-white/85">🛵 Reparto a domicilio: {DELIVERY_WINDOW}</p>
      </section>

      {/* CONTACTO + MAPA */}
      <section id="contacto" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-12 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
          <h3 className="text-2xl font-bold mb-3">Contacto</h3>
          <ul className="space-y-2 text-white/90">
            <li>📞 <span className="text-white/60">Llamadas:</span> <a className="underline" href={`tel:+${PHONE_CALL}`}>951 455 043</a></li>
            <li>💬 <span className="text-white/60">WhatsApp pedidos:</span> <a className="underline" href={WA_URL} target="_blank" rel="noreferrer">647 371 605</a></li>
            <li>📸 <span className="text-white/60">Instagram:</span> <a className="underline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@_elatlas</a></li>
            <li>📍 <span className="text-white/60">Dirección:</span> {ADDRESS}</li>
          </ul>
          <div className="mt-4 flex gap-3 flex-wrap">
            <a href={`tel:+${PHONE_CALL}`} className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 font-semibold">Llamar</a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-white text-black font-semibold hover:bg-neutral-200">WhatsApp</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="px-4 py-2 rounded bg-neutral-800 border border-white/15 hover:bg-neutral-700">Instagram</a>
          </div>
          <div className="mt-4 p-3 rounded-xl border border-amber-500/30 bg-amber-400/10 text-amber-200">
            Cuando hagas un pedido por WhatsApp, por favor indica <b>Nombre</b>, <b>Teléfono</b>, <b>Dirección</b> (si es domicilio) o <b>Recoger en local</b>, y tu <b>Pedido</b>.
          </div>
        </div>

        <div id="ubicacion" className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <iframe
            title="Ubicación El Atlas"
            width="100%"
            height="320"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-4 border-top border-white/10 bg-black/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid gap-6 sm:grid-cols-3 items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="El Atlas logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-white/90 font-semibold">El Atlas</span>
          </div>
          <div className="text-center text-sm text-white/70">
            {ADDRESS} · Reparto: {DELIVERY_WINDOW}
          </div>
          <div className="flex justify-end">
            <a
              href={INSTAGRAM_URL}
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
