# Recetario 🍲

TP final del Curso Inicial de Front-End de la UTN (Módulo 3, React). Elegí la opción B: una app que consume una API pública, y fui por las recetas usando [TheMealDB](https://www.themealdb.com/api.php).

La idea es simple: entrás, ves un montón de recetas de distintos países, buscás la que te pinte y la abrís para ver los ingredientes y cómo se hace.

## Qué tiene

- Las recetas se muestran en cards con la foto, el nombre, la categoría, de dónde es y las etiquetas.
- Buscador que va filtrando mientras escribís. Ojo que la API está en inglés, así que tenés que buscar cosas como `chicken`, `pasta` o `cake`.
- Si tocás "Ver receta" te lleva al detalle, con los ingredientes y sus medidas, los pasos y el link al video de YouTube (si tiene).
- Paginado de a 8 recetas.
- Mientras carga aparecen unas cards "fantasma", y si algo falla (por ejemplo, se cae internet) te avisa en vez de quedar en blanco.
- Página 404 por si entrás a una dirección que no existe.
- Algunas animaciones para que no quede tan duro.
- Se adapta al celu: en pantallas chicas las cards pasan a dos columnas y los botones son más grandes para tocarlos con el dedo.

## Con qué está hecho

- React (`useState`, `useEffect` y props)
- React Router, para las rutas y el layout con `<Outlet />`
- Vite
- CSS Modules
- `fetch` para pedirle los datos a la API

## Cómo está organizado

```
src/
├── components/   # Navbar, Footer, Layout, las cards, el buscador, el paginado, etc.
├── pages/        # Home, MealDetail (detalle) y NotFound (404)
├── services/     # mealApi.js, donde están las llamadas a la API
├── App.jsx       # las rutas
└── main.jsx      # donde arranca todo
```

## Cómo correrlo

Necesitás tener [Node.js](https://nodejs.org/) instalado (la versión 20 o una más nueva).

1. Clonás el repo:

   ```bash
   git clone https://github.com/Tinchisop/TP.FINAL-FRONTEND.git
   cd TP.FINAL-FRONTEND
   ```

2. Instalás las dependencias:

   ```bash
   npm install
   ```

3. Lo levantás:

   ```bash
   npm run dev
   ```

4. Abrís en el navegador la dirección que te tira la consola (normalmente es `http://localhost:5173`).

Si querés armar la versión para producción:

```bash
npm run build
npm run preview
```
