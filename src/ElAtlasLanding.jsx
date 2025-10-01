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
    {
      nombre: "Hamburguesas",
      items: [
        { nombre: "Clásica El Atlas", desc: "Ternera, cheddar, lechuga, tomate, salsa de la casa", precio: "" },
        { nombre: "BBQ León", desc: "Doble carne, bacon, cebolla crujiente, bbq", precio: "" },
      ],
    },
    {
      nombre: "Tacos",
      items: [
        { nombre: "Taco Pastor", desc: "Cerdo adobado, piña, cebolla, cilantro", precio: "" },
        { nombre: "Taco Pollo", desc: "Pollo marinado, pico de gallo, crema", precio: "" },
      ],
    },
    {
      nombre: "Alitas",
      items: [
        { nombre: "Alitas BBQ", desc: "Salsa bbq de la casa", precio: "" },
        { nombre: "Alitas Picantes", desc: "Salsa hot con toque de miel", precio: "" },
      ],
    },
    {
      nombre: "Pizzas",
      items: [
        { nombre: "Margarita", desc: "Salsa, mozzarella, albahaca", precio: "" },
        { nombre: "Pepperoni", desc: "Mozzarella y pepperoni", precio: "" },
      ],
    },
    {
      nombre: "Bocadillos",
      items: [
        { nombre: "Lomo Queso", desc: "Lomo, queso fundido, alioli", precio: "" },
        { nombre: "Vegetal", desc: "Atún, lechuga, tomate, huevo", precio: "" },
      ],
    },
    {
      nombre: "Camperos",
      items: [
        { nombre: "Campero Pollo", desc: "Pollo, lechuga, tomate, mayonesa", precio: "" },
      ],
    },
    {
      nombre: "Shawarma",
      items: [
        { nombre: "Shawarma Mixto", desc: "Ternera y pollo, salsas al gusto", precio: "" },
      ],
    },
    {
      nombre: "Ensaladas",
      items: [
        { nombre: "César", desc: "Lechuga, pollo, parmesano, crutones, salsa césar", precio: "" },
      ],
    },
    {
      nombre: "Menús",
      items: [
        { nombre: "Menú Burger", desc: "Burger + patatas + bebida", precio: "" },
      ],
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
