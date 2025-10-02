import { useState } from "react";

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
  // ───────────── HAMBURGUESAS ─────────────
  {
    nombre: "Hamburguesas",
    headers: ["Normal", "Menú"],
    items: [
      { nombre: "Atlas King", desc: "Carne de ternera, lechuga, tomate, cebolla, queso", precios: ["5,50 €", "7,50 €"] },
      { nombre: "León Doble", desc: "Doble ternera, doble queso, lechuga, tomate, cebolla", precios: ["7,50 €", "9,50 €"] },
      { nombre: "León Fit", desc: "Carne de pollo, lechuga, tomate, cebolla, queso", precios: ["5,50 €", "7,50 €"] },
      { nombre: "Crispy King", desc: "Pollo crujiente, lechuga, tomate, cebolla, queso", precios: ["6,00 €", "8,00 €"] },
      { nombre: "Épica Huevo", desc: "Carne de ternera, lechuga, tomate, cebolla, huevo, queso", precios: ["6,50 €", "8,50 €"] },
    ]
  },

  // ───────────── CAMPEROS ─────────────
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
    ]
  },

  // ───────────── BOCADILLOS ─────────────
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
    ]
  },

  // ───────────── SHAWARMA ─────────────
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
    ]
  },

  // ───────────── TACOS ─────────────
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
    ]
  },

  // ───────────── PIZZAS ─────────────
  {
    nombre: "Pizzas",
    headers: ["Normal", "Familiar"],
    items: [
      { nombre: "Atún", desc: "Atún, tomate, mozzarella y cebolla", precios: ["7,00 €", "11,00 €"] },
      { nombre: "4 Quesos", desc: "Tomate, mozzarella, roquefort, gouda, parmesano", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Salmón", desc: "Tomate, mozzarella, lonchas de salmón", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Caprichosa", desc: "Tomate, mozzarella, champiñones, jamón halal, huevo", precios: ["7,50 €", "11,50 €"] },
      { nombre: "Barbacoa", desc: "Tomate, mozzarella, carne picada, jamón halal, salsa barbacoa", precios: ["8,00 €", "12,00 €"] },
      { nombre: "Campera", desc: "Tomate, mozzarella, carne picada, cebolla, huevo, pimiento rojo", precios: ["8,50 €", "12,50 €"] },
      { nombre: "Boloñesa", desc: "Tomate, mozzarella, carne picada", precios: ["7,50 €", "11,00 €"] },
      { nombre: "Hawai", desc: "Tomate, mozzarella, piña, jamón halal", precios: ["7,00 €", "11,00 €"] },
      { nombre: "El Atlas", desc: "Tomate, mozzarella, carne de shawarma, champiñones, cebolla", precios: ["8,50 €", "12,50 €"] },
      { nombre: "Carbonara", desc: "Nata, mozzarella, bacon", precios: ["8,50 €", "12,50 €"] },
      { nombre: "Marinera", desc: "Tomate, mozzarella, frutos del mar", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Margarita", desc: "Tomate, mozzarella", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Fungi", desc: "Tomate, mozzarella, champiñones", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Vegetal", desc: "Tomate, mozzarella, champiñones, pimientos, cebolla, aceitunas", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Calzone", desc: "Tomate, mozzarella, carne de shawarma, champiñones, pimiento", precios: ["8,50 €", "—"] },
      { nombre: "Prosciutto", desc: "Tomate, mozzarella, jamón halal", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Peperoni", desc: "Tomate, mozzarella, peperoni", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Napolitana", desc: "Tomate, mozzarella, anchoas, alcaparras, aceitunas", precios: ["7,00 €", "11,00 €"] },
      { nombre: "Shawarma", desc: "Tomate, mozzarella, carne de shawarma", precios: ["8,00 €", "12,00 €"] },
      { nombre: "Pan de Ajo", desc: "Tomate, queso, ajo", precios: ["6,00 €", "—"] },
      { nombre: "Ingredientes Extra", precios: ["+1,00 €", "+1,00 €"] },
    ]
  },

  // ───────────── ENSALADAS ─────────────
  {
    nombre: "Ensaladas",
    items: [
      { nombre: "Mediterranea", desc: "Lechuga, tomate, cebolla, aceituna, atún, remolacha y espárragos", precio: "6,00 €" },
      { nombre: "El Atlas", desc: "Lechuga, tomate, zanahoria, aceituna, mozzarella, maíz y jamón halal", precio: "7,50 €" },
      { nombre: "Shawarma", desc: "Shawarma, lechuga, cebolla, zanahoria, maíz, salsa de yogur", precio: "8,00 €" },
      { nombre: "Frutos del mar", desc: "Lechuga, gambas, bocas de mar, tomate, maíz, salsa rosa", precio: "8,00 €" },
      { nombre: "Cesar", desc: "Lechuga, tomate, queso parmesano, picatoste, pollo a la plancha o lagrimitas, salsa césar", precio: "7,50 €" },
    ]
  },

  // ───────────── PLATOS COMBINADOS ─────────────
  {
    nombre: "Platos Combinados",
    items: [
      { nombre: "Plato Shawarma", precio: "9,00 €" },
      { nombre: "Plato de Filete de Pollo", precio: "8,50 €" },
      { nombre: "Kapsalon Shawarma", precio: "8,00 €" },
      {
        nombre: "Plato Combinado Mixto X2",
        desc: "Elige 2: Pinchito (Hígado, Ternera o Pollo) • o Shawarma • o Filete de Pollo",
        precio: "9,50 €"
      },
      { nombre: "Plato Pinchito Pollo", precio: "8,50 €" },
      { nombre: "Plato Pinchito Ternera", precio: "9,50 €" },
      { nombre: "Plato Pinchito Hígado", precio: "9,00 €" },
    ]
  },

  // ───────────── COMPLEMENTOS Y BEBIDAS ─────────────
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
    ]
  },
];
  return (
    <div className="min-h-screen w-full text-white bg-neutral-950">
      <div
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(https://images.unsplash.com/photo-1600566753190-17f0baa2c768?q=80&w=1800&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <header className="sticky top-0 z-20 backdrop-blur bg-black/50 border-b border-red-600/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <span className="grid place-items-center h-10 w-10 rounded-xl bg-red-700/90 shadow-lg shadow-red-900/40">
              <span className="text-2xl">🦁</span>
            </span>
            <div className="leading-tight">
              <p className="font-extrabold text-xl tracking-tight">El Atlas</p>
              <p className="text-xs text-neutral-300">Comida rápida</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-red-400">Menú</a>
            <a href="#horario" className="hover:text-red-400">Horario</a>
            <a href="#contacto" className="hover:text-red-400">Contacto</a>
            <a href="#ubicacion" className="hover:text-red-400">Ubicación</a>
            <a
              href="https://instagram.com/_elatlas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white text-black font-medium hover:bg-neutral-200"
            >
              <span>Instagram</span>
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-neutral-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-neutral-800 bg-black/70">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
              <a href="#menu" onClick={() => setMobileMenuOpen(false)}>Menú</a>
              <a href="#horario" onClick={() => setMobileMenuOpen(false)}>Horario</a>
              <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
              <a href="#ubicacion" onClick={() => setMobileMenuOpen(false)}>Ubicación</a>
              <a href="https://instagram.com/_elatlas" target="_blank" rel="noreferrer" className="underline">Instagram</a>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Sabor que ruge <span className="text-red-500">El Atlas</span>
            </h1>
            <p className="mt-4 text-neutral-200 max-w-prose">
              Hamburguesas, tacos, alitas, pizzas, bocadillos, camperos, shawarma y ensaladas. ¡Pide para llevar o ven a vernos!
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+34951455043"
                className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 font-semibold"
              >
                Llamar: 951 455 043
              </a>
              <a
                href="https://wa.me/34951455043"
                className="px-5 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200"
                target="_blank" rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
            <p className="mt-3 text-sm text-neutral-300">Calle Eduardo Aguilera Romero n°14</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-2xl aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop" alt="Hamburguesa" />
            <img className="rounded-2xl aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" alt="Tacos" />
            <img className="rounded-2xl aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1604908554007-1255d594b16f?q=80&w=1200&auto=format&fit=crop" alt="Alitas" />
            <img className="rounded-2xl aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1548365328-9f547fb0953f?q=80&w=1200&auto=format&fit=crop" alt="Pizza" />
          </div>
        </div>
      </section>

      <section id="menu" className="border-t border-neutral-800 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">Menú</h2>
              <p className="text-neutral-300 mt-1">Precios a completar. Fotos de referencia.</p>
            </div>
            <a href="#contacto" className="hidden md:inline-flex px-4 py-2 rounded-xl border border-red-600 text-red-400 hover:bg-red-600 hover:text-white">Hacer pedido</a>
          </div>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            function Precios({ item, headers }) {
  // Si la categoría tiene dos columnas (Normal/Menú o Normal/Familiar)
  if (headers && item.precios) {
    return (
      <div className="flex items-center gap-3">
        <span className="tabular-nums">{item.precios[0]}</span>
        <span className="opacity-60">·</span>
        <span className="tabular-nums">{item.precios[1]}</span>
      </div>
    );
  }
  // Si es precio único
  return <span className="tabular-nums">{item.precio || ""}</span>;
}

// Dentro del map de categorías:
{categorias.map(cat => (
  <section key={cat.nombre} className="card">
    <div className="flex items-baseline justify-between mb-2">
      <h3 className="text-xl font-semibold">{cat.nombre}</h3>
      {cat.headers && (
        <div className="text-sm opacity-70 flex gap-6">
          <span>{cat.headers[0]}</span>
          <span>{cat.headers[1]}</span>
        </div>
      )}
    </div>

    <ul className="space-y-2">
      {cat.items.map(it => (
        <li key={it.nombre} className="flex justify-between gap-4">
          <div>
            <div className="font-medium">{it.nombre}</div>
            {it.desc && <div className="text-sm opacity-70">{it.desc}</div>}
          </div>
          <Precios item={it} headers={cat.headers} />
        </li>
      ))}
    </ul>
  </section>
}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="horario" className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">Horario</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {horario.map((h) => (
              <div key={h.dia} className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5">
                <p className="font-semibold">{h.dia}</p>
                <p className="text-neutral-300">{h.horas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="border-t border-neutral-800 bg-black/50">
        <div className="max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Contacto & Pedidos</h2>
            <ul className="mt-6 space-y-3 text-neutral-200">
              <li>
                <span className="text-neutral-400">Teléfono: </span>
                <a className="underline" href="tel:+34951455043">951 455 043</a>
              </li>
              <li>
                <span className="text-neutral-400">WhatsApp: </span>
                <a className="underline" href="https://wa.me/34" target="_blank" rel="noreferrer">Enviar mensaje</a>
              </li>
              <li>
                <span className="text-neutral-400">Instagram: </span>
                <a className="underline" href="https://instagram.com/_elatlas" target="_blank" rel="noreferrer">@_elatlas</a>
              </li>
              <li>
                <span className="text-neutral-400">Dirección: </span>
                Calle Eduardo Aguilera Romero n°14
              </li>
            </ul>
            <p className="mt-6 text-sm text-neutral-400 max-w-prose">
              *Nota:* Podemos activar pedidos online más adelante (globo/stripe) y añadir un formulario simple si lo necesitas.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl" id="ubicacion">
            <iframe
              title="Ubicación El Atlas"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent("Calle Eduardo Aguilera Romero 14")}&output=embed`}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} El Atlas • Todos los derechos reservados</p>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="underline">Inicio</a>
            <a href="#menu" className="underline">Menú</a>
            <a href="#contacto" className="underline">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
