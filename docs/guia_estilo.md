## 🎨 Mini Guía de Estilo (UI/UX)

Esta sección define las decisiones de diseño para el proyecto, sirviendo como insumo para el prototipado en Figma (Etapa 2).

### 1. Análisis de Interfaz de Referencia
* **Web evaluada:** [Ejemplo: Página oficial de Pokedex.com o Wikidex]
* **Qué funciona (UX/UI):** El uso de colores sólidos y representativos para identificar rápidamente los tipos de Pokémon. Las imágenes grandes facilitan el reconocimiento visual inmediato.
* **Qué no funciona:** En algunas wikis, la sobrecarga de tablas y estadísticas de combate en la primera vista satura la pantalla, dificultando la lectura en dispositivos móviles.

### 2. Paleta de Colores y Roles
Se definieron los siguientes colores, verificando el contraste de los textos sobre los fondos utilizando herramientas de accesibilidad (WebAIM/Lighthouse).
* **Primario (Rojo Pokédex):** `#ef5350` — Rol: Encabezados (Header) y elementos de marca.
* **Secundario / Acento:** `#ffcb05` — Rol: Efectos *hover* en enlaces para indicar interactividad.
* **Fondo Principal:** `#f4f5f7` — Rol: Color base para descansar la vista en el cuerpo de la página.
* **Superficies (Tarjetas):** `#ffffff` — Rol: Contenedor para destacar a cada Pokémon individualmente.
* **Texto Principal:** `#2c3e50` / `#333333` — Rol: Títulos y cuerpo de texto (alto contraste sobre fondos claros).

### 3. Tipografía y Escala
Se seleccionó la familia tipográfica sin serifas **'Segoe UI', Tahoma, sans-serif** para garantizar una lectura limpia y moderna en pantallas digitales.
* **H1 (Título de Página):** 2rem (Negrita) — Uso: "Pokédex Virtual".
* **H2 (Subtítulos de Sección):** 1.5rem (Seminegrita) — Uso: Mensajes de bienvenida y divisiones.
* **H3 (Nombres de Entidades):** 1.17rem (Negrita) — Uso: Nombre de cada Pokémon en su tarjeta.
* **Cuerpo (Body / P):** 1rem (Regular) — Uso: Párrafos descriptivos.
* **Textos secundarios (Tipos):** 0.9rem (Regular) — Uso: Etiquetas de tipos (ej. Planta/Veneno) en color gris (`#7f8c8d`).

### 4. Jerarquía Visual (Vista Clave: Tarjeta de Pokémon)
En la cuadrícula de la Pokédex, el ojo del usuario es guiado intencionalmente en el siguiente orden de lectura:
1. **Primer nivel de atención:** La **imagen** del Pokémon (ubicada al centro, con un tamaño predominante de 120x120px).
2. **Segundo nivel de atención:** El **número y nombre** del Pokémon (etiqueta H3, con un color oscuro que contrasta con la tarjeta blanca).
3. **Tercer nivel de atención:** Los **tipos** del Pokémon (texto más pequeño y en color gris tenue, sirviendo como información complementaria).
