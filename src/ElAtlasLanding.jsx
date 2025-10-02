import { useState } from "react";

export default function ElAtlasLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <span>{item.precios[0]}</span>
          <span>{item.precios[1]}</span>
        </div>
      );
    }
    return <span>{item.precio || ""}</span>;
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 text-white">
      {/* Cabecera */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold">El Atlas</h1>
        <p className="opacity-80">Hamburguesas · Tacos · Pizzas · Bocadillos · Camperos · Shawarma · Ensaladas</p>
        <p className="mt-2 text-lg">📞 Llamadas: <a href="tel:+34951455043" className="underline">951 455 043</a></p>
        <p className="mt-1 text-lg">💬 WhatsApp pedidos: <a href="https://wa.me/34647371605" className="underline">647 371 605</a></p>
        <p className="mt-3">📍 Calle Eduardo Aguilera Romero n°14</p>
        <p className="mt-1">🕒 Horario: Martes a Domingo 18:00 – 01:45 (Lunes cerrado)</p>
        <p className="mt-1">🛵 Reparto a domicilio: 19:30 – 23:45</p>
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
