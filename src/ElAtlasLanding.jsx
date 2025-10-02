import { useState } from "react";
import logo from "./assets/logo.png";

// ——— Contacto & redes ———
const PHONE_CALL = "34951455043";          // 951 455 043 (formato intl sin +)
const WHATSAPP_NUMBER = "34647371605";     // WhatsApp pedidos
const INSTAGRAM_URL = "https://instagram.com/_elatlas";

// Mensaje pre-relleno para WhatsApp
const WA_MSG = encodeURIComponent(
  "Hola, quiero hacer un pedido.\n\n" +
  "Nombre:\n" +
  "Teléfono:\n" +
  "¿Entrega a domicilio o Recoger?:\n" +
  "Dirección (si es domicilio):\n" +
  "Pedido:\n"
);
const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MSG}`;

// Dirección y textos
const ADDRESS = "Calle Eduardo Aguilera Romero n°14";
const DELIVERY_WINDOW = "19:30 – 23:45";
const OPEN_TEXT = "Martes a Domingo 18:00 – 01:45 (Lunes cerrado)";

export default function ElAtlasLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ——————————————————— CARTA ———————————————————
  const categorias = [
    // HAMBURGUESAS
    {
      nombre: "Hamburguesas",
      headers: ["Normal", "Menú"],
      items: [
        { nombre: "Atlas King", desc: "Carne de ternera, lechuga, tomate, cebolla, queso", precios: ["5,50 €", "7,50 €"] },
        { nombre: "León Doble", desc: "Doble ternera, doble queso, lechuga, tomate y cebolla", precios: ["7,50 €", "9,50 €"] },
        { nombre: "León Fit", desc: "Pollo, lechuga, tomate, cebolla, queso", precios: ["5,50 €", "7,50 €"] },
        { nombre: "Crispy King", desc: "Pollo crujiente, lechuga, tomate, cebolla, queso", precios: ["6,00 €", "8,00 €"] },
        { nombre: "Épica Huevo", desc: "Ternera, lechuga, tomate, cebolla, huevo, queso", precios: ["6,50 €", "8,50 €"] },
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
        { nombre: "Shawarma El Atlas", desc: "Shawarma, tomate, lechuga, cebolla, huevo, salsa yogur y queso", precios: ["7,00 €", "9,00 €"] },
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
        { nombre: "Plato Combinado Mixto X2", desc: "Elige 2: Shawarma, Filete de Pollo, Pinchito Pollo, Pinchito Ternera, Pinchito Hígado", precio: "9,50 €" },
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

  // Helpers de render
  function Precios({ item, headers }) {
    if (headers && item.precios) {
      return (
        <div className="grid grid-cols-2 gap-5 min-w-[140px] text-right">
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
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(https://images.unsplash.com/photo-1600566753190-17f0baa2c768?q=80&w=1800&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 bg-neutral-950/75 backdrop-blur border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="El Atlas" className="w-8 h-8 rounded" />
            <span className="font-semibold">El Atlas</span>
          </a>
          <button
            className="md:hidden text-sm px-3 py-1 border border-neutral-700 rounded"
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            Menú
          </button>
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li><a href="#menu" className="hover:underline">Menú</a></li>
            <li><a href="#horario" className="hover:underline">Horario</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            <li><a href="#ubicacion" className="hover:underline">Ubicación</a></li>
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        {mobileMenuOpen && (
          <ul className="md:hidden px-4 pb-3 space-y-2 text-sm">
            <li><a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menú</a></li>
            <li><a href="#horario" onClick={() => setMobileMenuOpen(false)}>Horario</a></li>
            <li><a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a></li>
            <li><a href="#ubicacion" onClick={() => setMobileMenuOpen(false)}>Ubicación</a></li>
            <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        )}
      </nav>

      {/* HERO (como tu captura) */}
      <section className="max-w-6xl mx-auto px-4 pt-10 md:pt-14 pb-6">
        <div className="grid md:grid-cols-[1fr,420px] gap-6 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Sabor que ruge <span className="text-red-500">El Atlas</span>
            </h2>
            <p className="mt-3 text-neutral-200 max-w-xl">
              Hamburguesas, tacos, alitas, pizzas, bocadillos, camperos, shawarma y ensaladas.
              ¡Pide para llevar o ven a vernos!
            </p>
            <div className="mt-4 flex gap-3 flex-wrap">
              <a
                href={`tel:+${PHONE_CALL}`}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-semibold"
              >
                Llamar: 951 455 043
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-4 text-sm text-neutral-300">📍 {ADDRESS}</p>
          </div>

          {/* Tarjeta con 3 fotos (opcional), simples placeholders */}
          <div className="hidden md:flex gap-3">
            <div className="flex-1 rounded-xl overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
                alt="Hamburguesas"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-xl overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
                alt="Alitas"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 rounded-xl overflow-hidden border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop"
                alt="Pizza"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

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

        {/* HORARIO */}
        <section id="horario" className="mt-10 rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5">
          <h3 className="text-2xl font-bold mb-3">Horario</h3>
          <p className="text-neutral-200">🕒 {OPEN_TEXT}</p>
          <p className="text-neutral-200 mt-1">🛵 Reparto a domicilio: {DELIVERY_WINDOW}</p>
        </section>

        {/* CONTACTO & UBICACIÓN */}
        <section id="contacto" className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Tarjeta de contacto */}
          <div className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6">
            <h3 className="text-2xl font-bold mb-3">Contacto</h3>
            <ul className="space-y-2 text-neutral-200">
              <li>📞 <span className="text-neutral-400">Llamadas:</span> <a className="underline" href={`tel:+${PHONE_CALL}`}>951 455 043</a></li>
              <li>💬 <span className="text-neutral-400">WhatsApp pedidos:</span> <a className="underline" href={WA_URL} target="_blank" rel="noreferrer">647 371 605</a></li>
              <li>📸 <span className="text-neutral-400">Instagram:</span> <a className="underline" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@_elatlas</a></li>
              <li>📍 <span className="text-neutral-400">Dirección:</span> {ADDRESS}</li>
            </ul>
            <div className="mt-4 flex gap-3 flex-wrap">
              <a href={`tel:+${PHONE_CALL}`} className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 font-semibold">Llamar</a>
              <a href={WA_URL} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200">WhatsApp</a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 hover:bg-neutral-700">Instagram</a>
            </div>
          </div>

          {/* Mapa */}
          <div id="ubicacion" className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl">
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
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-800 mt-10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="El Atlas Logo" className="w-10 h-10 rounded" />
            <p>© {new Date().getFullYear()} El Atlas • Todos los derechos reservados</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#menu" className="underline">Menú</a>
            <a href="#horario" className="underline">Horario</a>
            <a href="#contacto" className="underline">Contacto</a>
            <a href="#ubicacion" className="underline">Ubicación</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="underline">Instagram</a>
            <a href={WA_URL} target="_blank" rel="noreferrer" className="underline">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
