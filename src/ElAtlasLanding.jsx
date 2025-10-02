import React, { useMemo } from "react";

// ===== CONFIGURACIÓN BÁSICA =====
const TEL_LLAMAR = "951455043";
const TEL_WHATSAPP = "34647371605"; // internacional sin 00
const IG_HANDLE = "_elatlas";
const DIRECCION = "Calle Eduardo Aguilera Romero nº14";

// Texto inicial del WhatsApp
const WA_MSG = encodeURIComponent(
  `Hola El Atlas 👋\n\nMe gustaría hacer un pedido.\n\nNombre:\nDirección (o indíqueme si es para recoger):\n\nPedido:\n- `
);

// ====== DATOS DEL MENÚ (según tu carta) ======
const hamburguesas = [
  { n: "Atlas King", normal: 5.5, menu: 7.5 },
  { n: "León Doble", normal: 7.5, menu: 9.5 },
  { n: "León Fit", normal: 5.5, menu: 7.5 },
  { n: "Crispy King", normal: 6.0, menu: 8.0 },
  { n: "Epica Huevo", normal: 6.5, menu: 8.5 },
];

const campero = [
  { n: "Pollo", normal: 5.5, menu: 7.5 },
  { n: "El Atlas", normal: 6.5, menu: 8.5 },
  { n: "Shawarma", normal: 6.5, menu: 8.5 },
  { n: "Pinchito de Pollo", normal: 6.0, menu: 8.0 },
  { n: "Jamón Halal", normal: 5.5, menu: 7.5 },
  { n: "Shawarma El Atlas", normal: 7.0, menu: 9.0 },
  { n: "Atún", normal: 5.0, menu: 7.0 },
];

const bocadillos = [
  { n: "Pollo", normal: 6.0, menu: 8.0 },
  { n: "Carne de Ternera", normal: 7.0, menu: 9.0 },
  { n: "Pinchito de Pollo", normal: 6.0, menu: 8.0 },
  { n: "Pinchito de Ternera", normal: 7.0, menu: 9.5 },
  { n: "Hígado de Ternera", normal: 7.0, menu: 9.5 },
  { n: "Vegetal", normal: 5.0, menu: 7.0 },
  { n: "Del Mar", normal: 7.0, menu: 9.0 },
  { n: "Atún", normal: 5.0, menu: 7.0 },
];

const shawarma = [
  { n: "Rollo Ternera", normal: 7.0, menu: 9.0 },
  { n: "Rollo Pollo", normal: 6.0, menu: 8.0 },
  { n: "Pita Ternera", normal: 7.0, menu: 9.0 },
  { n: "Pita Pollo", normal: 6.0, menu: 8.0 },
  { n: "Rollo Mixto", normal: 7.5, menu: 9.5 },
  { n: "Pita Mixto", normal: 7.5, menu: 9.5 },
  { n: "Falafel Rollo o Pita", normal: 5.5, menu: 7.5 },
  { n: "Lahmacun", normal: 7.5, menu: 9.5 },
];

const tacos = [
  { n: "Taco de Pollo", normal: 7.0, menu: 9.0 },
  { n: "Taco de Nuggets", normal: 7.0, menu: 9.0 },
  { n: "Taco de Lagrimita", normal: 8.0, menu: 10.0 },
  { n: "Taco de Carne Picada", normal: 8.0, menu: 10.0 },
  { n: "Taco de Shawarma", normal: 8.0, menu: 10.0 },
  { n: "Taco Mixto (pollo y carne picada)", normal: 8.5, menu: 10.5 },
  { n: "Gratinado", extra: 0.5 }, // extra
];

const ensaladas = [
  { n: "Mediterranea", normal: 6.0 },
  { n: "El Atlas", normal: 7.5 },
  { n: "Shawarma", normal: 8.0 },
  { n: "Frutos del mar", normal: 8.0 },
  { n: "Cesar", normal: 7.5 },
];

const combinados = [
  { n: "Plato Shawarma", normal: 9.0 },
  { n: "Plato de Filete de Pollo", normal: 8.5 },
  { n: "Kapsalon Shawarma", normal: 8.0 },
  {
    n: "Plato Combinado Mixto X2",
    normal: 9.5,
    sub: "Elige 2: Shawarma, Filete de Pollo, Pinchito Pollo, Pinchito Ternera, Pinchito Hígado.",
  },
  { n: "Plato Pinchito Pollo", normal: 8.5 },
  { n: "Plato Pinchito Ternera", normal: 9.5 },
  { n: "Plato Pinchito Hígado", normal: 9.0 },
];

const complementos = [
  { n: "Alitas de Pollo (x4)", normal: 4.0 },
  { n: "Nuggets de Pollo (x5)", normal: 3.0 },
  { n: "Lagrimitas de Pollo (x4)", normal: 4.0 },
  { n: "Falafel (x3)", normal: 2.5 },
  { n: "Patatas", normal: 2.0 },
  { n: "Patatas Gratinadas", normal: 3.5 },
  { n: "Salsas", normal: 0.5 },
  { n: "Refrescos", normal: 1.5 },
  { n: "Agua", normal: 1.0 },
  { n: "Refrescos Energéticos", normal: 2.5 },
];

// PIZZAS (normal/familiar)
const pizzas = [
  ["Atún", 7.0, 11.0],
  ["4 Quesos", 7.0, 11.0],
  ["Salmón", 7.0, 11.0],
  ["Caprichosa", 7.5, 11.5],
  ["Barbacoa", 8.0, 12.0],
  ["Campera", 8.5, 12.5],
  ["Boloñesa", 7.5, 11.0],
  ["Hawai", 7.0, 11.0],
  ["El Atlas", 8.5, 12.5],
  ["Carbonara", 8.5, 12.0],
  ["Marinera", 7.0, 11.0],
  ["Margarita", 7.0, 11.0],
  ["Fungi", 7.0, 11.0],
  ["Vegetal", 7.0, 11.0],
  ["Calzone", 8.5, 12.0],
  ["Prosciutto", 7.0, 11.0],
  ["Peperoni", 7.0, 11.0],
  ["Napolitana", 7.0, 11.0],
  ["Shawarma", 8.0, 12.0],
  ["Pan de Ajo", 6.0, null],
];

const pizzaExtra = { n: "Ingredientes Extra", extra: 1.0 };

// ===== COMPONENTES =====
const Section = ({ title, children }) => (
  <section style={{ margin: "28px 0" }}>
    <h2 style={{ margin: "0 0 12px 0", fontSize: 26 }}>{title}</h2>
    <div
      style={{
        borderRadius: 12,
        border: "1px solid #333",
        padding: 16,
        background: "#161616",
      }}
    >
      {children}
    </div>
  </section>
);

const RowNM = ({ name, normal, menu, extra, sub }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 12,
      padding: "8px 0",
      borderBottom: "1px dashed #2a2a2a",
    }}
  >
    <div>
      <strong>{name}</strong>
      {sub ? (
        <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>{sub}</div>
      ) : null}
    </div>
    <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
      {typeof extra === "number" ? (
        <span>+ {extra.toFixed(2)} €</span>
      ) : menu != null ? (
        <>
          <span style={{ marginRight: 12 }}>Normal: {normal.toFixed(2)} €</span>
          <span>Menú: {menu.toFixed(2)} €</span>
        </>
      ) : (
        <span>{normal?.toFixed(2)} €</span>
      )}
    </div>
  </div>
);

const PizzasTable = ({ data }) => (
  <div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 12,
        fontSize: 14,
        opacity: 0.9,
        marginBottom: 8,
      }}
    >
      <div>Pizza</div>
      <div>Normal</div>
      <div>Familiar</div>
    </div>
    {data.map(([n, pn, pf], i) => (
      <div
        key={n + i}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto",
          gap: 12,
          padding: "8px 0",
          borderBottom: "1px dashed #2a2a2a",
        }}
      >
        <div>{n}</div>
        <div>{pn != null ? `${pn.toFixed(2)} €` : "-"}</div>
        <div>{pf != null ? `${pf.toFixed(2)} €` : "-"}</div>
      </div>
    ))}
  </div>
);

// ===== VISTA PRINCIPAL =====
export default function ElAtlasLanding() {
  const whatsappHref = useMemo(
    () => `https://wa.me/${TEL_WHATSAPP}?text=${WA_MSG}`,
    []
  );

  const topBar = {
    background: "#0f0f0f",
    borderBottom: "1px solid #222",
    position: "sticky",
    top: 0,
    zIndex: 50,
  };

  const card = {
    background: "#141414",
    border: "1px solid #2a2a2a",
    borderRadius: 16,
    padding: 16,
  };

  return (
    <div style={{ color: "#eee", background: "#0b0b0b", minHeight: "100vh" }}>
      {/* Header */}
      <header style={topBar}>
        <div
          style={{
            margin: "0 auto",
            maxWidth: 1080,
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <img
            src="./assets/logo.png"
            alt="El Atlas"
            style={{ width: 40, height: 40, borderRadius: 8, objectFit: "cover" }}
          />
          <div style={{ fontWeight: 700, fontSize: 18 }}>El Atlas</div>
          <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
            <a
              href={`tel:${TEL_LLAMAR}`}
              style={{
                ...card,
                padding: "8px 12px",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Llamar: {TEL_LLAMAR}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              style={{
                ...card,
                padding: "8px 12px",
                textDecoration: "none",
                color: "#0f0",
                borderColor: "#204020",
              }}
            >
              WhatsApp pedidos
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div style={{ margin: "0 auto", maxWidth: 1080, padding: "24px 16px" }}>
        <div
          style={{
            ...card,
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <img
            src="./assets/logo.png"
            alt="Logo El Atlas"
            style={{ width: 64, height: 64, borderRadius: 12, objectFit: "cover" }}
          />
          <div style={{ lineHeight: 1.2 }}>
            <h1 style={{ margin: 0, fontSize: 32 }}>
              Sabor que ruge <span style={{ color: "#ff4d4f" }}>El Atlas</span>
            </h1>
            <div style={{ opacity: 0.9 }}>
              Hamburguesas, tacos, alitas, pizzas, bocadillos, camperos, shawarma y
              ensaladas. ¡Pide por WhatsApp o ven a vernos!
            </div>
            <div style={{ marginTop: 8, opacity: 0.9 }}>{DIRECCION}</div>
          </div>
        </div>

        {/* Menú */}
        <Section title="Hamburguesas">
          {hamburguesas.map((x) => (
            <RowNM key={x.n} name={x.n} normal={x.normal} menu={x.menu} />
          ))}
        </Section>

        <Section title="Camperos">
          {campero.map((x) => (
            <RowNM key={x.n} name={x.n} normal={x.normal} menu={x.menu} />
          ))}
        </Section>

        <Section title="Bocadillos">
          {bocadillos.map((x) => (
            <RowNM key={x.n} name={x.n} normal={x.normal} menu={x.menu} />
          ))}
        </Section>

        <Section title="Shawarma">
          {shawarma.map((x) => (
            <RowNM key={x.n} name={x.n} normal={x.normal} menu={x.menu} />
          ))}
        </Section>

        <Section title="Tacos">
          {tacos.map((x) => (
            <RowNM
              key={x.n}
              name={x.n}
              normal={x.normal}
              menu={x.menu}
              extra={x.extra}
            />
          ))}
        </Section>

        <Section title="Pizzas (Normal / Familiar)">
          <PizzasTable data={pizzas} />
          <div style={{ marginTop: 8 }}>
            <RowNM name={pizzaExtra.n} extra={pizzaExtra.extra} />
          </div>
        </Section>

        <Section title="Ensaladas">
          {ensaladas.map((x) => (
            <RowNM key={x.n} name={x.n} normal={x.normal} />
          ))}
        </Section>

        <Section title="Platos Combinados">
          {combinados.map((x) => (
            <RowNM
              key={x.n}
              name={x.n}
              normal={x.normal}
              sub={x.sub ? x.sub : undefined}
            />
          ))}
        </Section>

        <Section title="Complementos y Bebidas">
          {complementos.map((x) => (
            <RowNM key={x.n} name={x.n} normal={x.normal} />
          ))}
        </Section>

        {/* Horario (según lo que definimos) */}
        <Section title="Horario">
          <div>Lunes a Domingo: 18:00 — 01:30</div>
          <div>Reparto a domicilio: 19:30 — 23:45</div>
          <div style={{ opacity: 0.8 }}>Mañanas: 13:00 — 16:00 (Excepto miércoles)</div>
        </Section>

        {/* Contacto */}
        <Section title="Contacto & Pedidos">
          <div style={{ display: "grid", gap: 8 }}>
            <div>
              <strong>Teléfono</strong>:{" "}
              <a href={`tel:${TEL_LLAMAR}`} style={{ color: "#fff" }}>
                {TEL_LLAMAR}
              </a>
            </div>
            <div>
              <strong>WhatsApp</strong>:{" "}
              <a href={whatsappHref} target="_blank" rel="noreferrer" style={{ color: "#0f0" }}>
                Pedir por WhatsApp
              </a>
            </div>
            <div>
              <strong>Instagram</strong>:{" "}
              <a
                href={`https://instagram.com/${IG_HANDLE}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#fff" }}
              >
                @{IG_HANDLE}
              </a>
            </div>
            <div>
              <strong>Dirección</strong>: {DIRECCION}
            </div>
          </div>
        </Section>

        {/* Footer */}
        <div style={{ textAlign: "center", opacity: 0.7, padding: "24px 0" }}>
          © {new Date().getFullYear()} El Atlas — Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}
