import { useState } from "react";

export default function ElAtlasLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ─────────────────────────────────────────────────────────────────────────────
  // CARTA COMPLETA (precios exactos de tu carta)
  // ─────────────────────────────────────────────────────────────────────────────
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
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
          precio: "9,50 €",
        },
        { nombre: "Plato Pinchito Pollo", precio: "8,50 €" },
        { nombre: "Plato Pinchito Ternera", precio: "9,50 €" },
        { nombre: "Plato Pinchito Hígado", precio: "9,00 €" },
      ],
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
      ],
    },
  ];

  // ─────────────────────────────────────────────────────────────────────────────
  // COMPONENTES DE RENDER
  // ─────────────────────────────────────────────────────────────────────────────
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
    <main className="max-w-5xl mx-auto px-4 py-8 text-white">
      {/* Cabecera simple */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">El Atlas</h1>
        <p className="opacity-80">Hamburguesas, tacos, pizzas, bocadillos, camperos, shawarma y ensaladas.</p>
      </header>

      {/* MENÚ */}
      <section id="menu" className="space-y-8">
        {categorias.map((cat) => (
          <article key={cat.nombre} className="bg-[#151515] border border-[#2a2a2a] rounded-xl p-5">
            <div className="flex items-baseline justify-between mb-3 gap-4">
              <h3 className="text-xl font-semibold">{cat.nombre}</h3>
              {cat.headers && (
                <div className="text-sm opacity-75" style={{ display: "grid", gridTemplateColumns: "auto auto", gap: "1.25rem", minWidth: 140, textAlign: "right" }}>
                  <span>{cat.headers[0]}</span>
                  <span>{cat.headers[1]}</span>
                </div>
              )}
            </div>

            <ul className="space-y-3">
              {cat.items.map((it) => (
                <li key={it.nombre} className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium">{it.nombre}</div>
                    {it.desc && <div className="text-sm opacity-70">{it.desc}</div>}
                  </div>
                  <Precios item={it} headers={cat.headers} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
