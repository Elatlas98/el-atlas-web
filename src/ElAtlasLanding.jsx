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
  // ─────────────────── HAMBURGUESAS ───────────────────
  {
    nombre: "Hamburguesas",
    items: [
      { nombre: "Atlas King", precio: "5,50 €", precioMenu: "7,50 €", descripcion: "Carne de Ternera, lechuga, tomate, cebolla, queso" },
      { nombre: "León Doble", precio: "7,50 €", precioMenu: "9,50 €", descripcion: "Doble Ternera, doble queso, lechuga, tomate y cebolla" },
      { nombre: "León Fit", precio: "5,50 €", precioMenu: "7,50 €", descripcion: "Carne de Pollo, lechuga, tomate, cebolla, queso" },
      { nombre: "Crispy King", precio: "6,00 €", precioMenu: "8,00 €", descripcion: "Pollo crujiente, lechuga, tomate, cebolla, queso" },
      { nombre: "Epica Huevo", precio: "6,50 €", precioMenu: "8,50 €", descripcion: "Carne de Ternera, lechuga, tomate, cebolla, huevo, queso" },
    ]
  },

  // ─────────────────── CAMPEROS ───────────────────
  {
    nombre: "Camperos",
    items: [
      { nombre: "Pollo", precio: "5,50 €", precioMenu: "7,50 €", descripcion: "Filete de pollo, tomate, lechuga, queso, cebolla, mayonesa" },
      { nombre: "El Atlas", precio: "6,50 €", precioMenu: "8,50 €", descripcion: "Pollo, tomate, lechuga, queso, huevo, cebolla, mayonesa" },
      { nombre: "Shawarma", precio: "6,50 €", precioMenu: "8,50 €", descripcion: "Shawarma, tomate, lechuga, cebolla, salsa de yogur" },
      { nombre: "Pinchito de Pollo", precio: "6,00 €", precioMenu: "8,00 €", descripcion: "Pinchito de pollo, lechuga, tomate, cebolla, queso" },
      { nombre: "Jamón Halal", precio: "5,50 €", precioMenu: "7,50 €", descripcion: "Jamón halal, lechuga, tomate, cebolla, queso, mayonesa" },
      { nombre: "Shawarma El Atlas", precio: "7,00 €", precioMenu: "9,00 €", descripcion: "Shawarma, tomate, lechuga, cebolla, huevo, salsa de yogur y queso" },
      { nombre: "Atún", precio: "5,00 €", precioMenu: "7,00 €", descripcion: "Atún, lechuga, tomate, mayonesa" },
    ]
  },

  // ─────────────────── BOCADILLOS ───────────────────
  {
    nombre: "Bocadillos",
    items: [
      { nombre: "Pollo", precio: "6,00 €", precioMenu: "8,00 €" },
      { nombre: "Carne de Ternera", precio: "7,00 €", precioMenu: "9,00 €" },
      { nombre: "Pinchito de Pollo", precio: "6,00 €", precioMenu: "8,00 €" },
      { nombre: "Pinchito de Ternera", precio: "7,00 €", precioMenu: "9,50 €" },
      { nombre: "Hígado de Ternera", precio: "7,00 €", precioMenu: "9,50 €" },
      { nombre: "Vegetal", precio: "5,00 €", precioMenu: "7,00 €" },
      { nombre: "Del Mar", precio: "7,00 €", precioMenu: "9,00 €" },
      { nombre: "Atún", precio: "5,00 €", precioMenu: "7,00 €" },
    ]
  },

  // ─────────────────── SHAWARMA ───────────────────
  {
    nombre: "Shawarma",
    items: [
      { nombre: "Rollo Ternera", precio: "7,00 €", precioMenu: "9,00 €" },
      { nombre: "Rollo Pollo", precio: "6,00 €", precioMenu: "8,00 €" },
      { nombre: "Pita Ternera", precio: "7,00 €", precioMenu: "9,00 €" },
      { nombre: "Pita Pollo", precio: "6,00 €", precioMenu: "8,00 €" },
      { nombre: "Rollo Mixto", precio: "7,50 €", precioMenu: "9,50 €" },
      { nombre: "Pita Mixto", precio: "7,50 €", precioMenu: "9,50 €" },
      { nombre: "Falafel (Rollo o Pita)", precio: "5,50 €", precioMenu: "7,50 €" },
      { nombre: "Lahmacun", precio: "7,50 €", precioMenu: "9,50 €" },
    ]
  },

  // ─────────────────── TACOS ───────────────────
  {
    nombre: "Tacos",
    items: [
      { nombre: "Taco de Pollo", precio: "7,00 €", precioMenu: "9,00 €" },
      { nombre: "Taco de Nuggets", precio: "7,00 €", precioMenu: "9,00 €" },
      { nombre: "Taco de Lagrimita", precio: "8,50 €", precioMenu: "10,00 €" },
      { nombre: "Taco de Carne Picada", precio: "8,00 €", precioMenu: "10,00 €" },
      { nombre: "Taco de Shawarma", precio: "8,00 €", precioMenu: "10,00 €" },
      { nombre: "Taco Mixto (pollo y carne picada)", precio: "8,50 €", precioMenu: "10,50 €" },
      { nombre: "Gratinado (+0,50 €)", precio: "+0,50 €" },
    ]
  },

  // ─────────────────── PIZZAS ───────────────────
  {
    nombre: "Pizzas (Normal / Familiar)",
    items: [
      { nombre: "Atún", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Atún, tomate, mozzarella y cebolla" },
      { nombre: "4 Quesos", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Mozzarella, roquefort, gouda, parmesano" },
      { nombre: "Salmón", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, lonchas de salmón" },
      { nombre: "Caprichosa", precioNormal: "7,50 €", precioFamiliar: "11,50 €", descripcion: "Tomate, mozzarella, champiñones, jamón halal, huevo" },
      { nombre: "Barbacoa", precioNormal: "8,00 €", precioFamiliar: "12,00 €", descripcion: "Tomate, mozzarella, carne picada, jamón halal, salsa barbacoa" },
      { nombre: "Campera", precioNormal: "8,50 €", precioFamiliar: "12,50 €", descripcion: "Tomate, mozzarella, carne picada, cebolla, huevo, pimiento rojo" },
      { nombre: "Boloñesa", precioNormal: "7,50 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, carne picada" },
      { nombre: "Hawai", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, piña, jamón halal" },
      { nombre: "El Atlas", precioNormal: "8,50 €", precioFamiliar: "12,50 €", descripcion: "Tomate, mozzarella, carne de shawarma, champiñones, cebolla" },
      { nombre: "Carbonara", precioNormal: "8,50 €", precioFamiliar: "12,50 €", descripcion: "Nata, mozzarella, bacon" },
      { nombre: "Marinera", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, frutos del mar" },
      { nombre: "Margarita", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate y mozzarella" },
      { nombre: "Fungi", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, champiñones" },
      { nombre: "Vegetal", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, champiñones, pimientos, cebolla, aceitunas" },
      { nombre: "Calzone", precioNormal: "8,50 €", precioFamiliar: "—", descripcion: "Tomate, mozzarella, carne de shawarma, champiñones, pimiento" },
      { nombre: "Prosciutto", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, jamón halal" },
      { nombre: "Peperoni", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, peperoni" },
      { nombre: "Napolitana", precioNormal: "7,00 €", precioFamiliar: "11,00 €", descripcion: "Tomate, mozzarella, anchoas, alcaparras, aceitunas" },
      { nombre: "Shawarma", precioNormal: "8,00 €", precioFamiliar: "12,00 €", descripcion: "Tomate, mozzarella, carne de shawarma" },
      { nombre: "Pan de Ajo", precioNormal: "6,00 €", precioFamiliar: "—", descripcion: "Tomate, queso, ajo" },
      { nombre: "Ingredientes Extra", precioNormal: "+1,00 €", precioFamiliar: "+1,00 €" },
    ]
  },

  // ─────────────────── ENSALADAS ───────────────────
  {
    nombre: "Ensaladas",
    items: [
      { nombre: "Mediterranea", precio: "6,00 €", descripcion: "Lechuga, tomate, cebolla, aceituna, atún, remolacha y espárragos" },
      { nombre: "El Atlas", precio: "7,50 €", descripcion: "Lechuga, tomate, zanahoria, aceituna, mozzarella, maíz y jamón halal" },
      { nombre: "Shawarma", precio: "8,00 €", descripcion: "Shawarma, lechuga, cebolla, zanahoria, maíz, salsa de yogur" },
      { nombre: "Frutos del mar", precio: "8,00 €", descripcion: "Lechuga, gambas, bocas de mar, tomate, maíz, salsa rosa" },
      { nombre: "César", precio: "7,50 €", descripcion: "Lechuga, tomate, queso parmesano, picatoste, pollo a la plancha o lagrimitas, salsa césar" },
    ]
  },

  // ─────────────────── PLATOS COMBINADOS ───────────────────
  {
    nombre: "Platos Combinados",
    items: [
      { nombre: "Plato Shawarma", precio: "9,00 €" },
      { nombre: "Plato de Filete de Pollo", precio: "8,50 €" },
      { nombre: "Kapsalon Shawarma", precio: "8,00 €" },
      {
        nombre: "Plato Combinado Mixto X2",
        precio: "9,50 €",
        descripcion: "Elige 2: Shawarma, Filete de Pollo, Pinchito Pollo, Pinchito Ternera o Pinchito Hígado",
        opcionesMix: ["Shawarma", "Filete de Pollo", "Pinchito Pollo", "Pinchito Ternera", "Pinchito Hígado"],
        maxSeleccion: 2
      },
      { nombre: "Plato Pinchito Pollo", precio: "8,50 €" },
      { nombre: "Plato Pinchito Ternera", precio: "9,50 €" },
      { nombre: "Plato Pinchito Hígado", precio: "9,00 €" },
    ]
  },

  // ─────────────────── COMPLEMENTOS Y BEBIDAS ───────────────────
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
            {categorias.map((cat) => (
              <div key={cat.nombre} className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5 shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold">{cat.nombre}</h3>
                  <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                </div>
                <ul className="space-y-3">
                  {cat.items.map((it) => (
                    <li key={it.nombre} className="grid grid-cols-[1fr_auto] gap-3">
                      <div>
                        <p className="font-medium">{it.nombre}</p>
                        <p className="text-sm text-neutral-400">{it.desc}</p>
                      </div>
                      <span className="text-neutral-400 tabular-nums">{it.precio || "—"}</span>
                    </li>
                  ))}
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
