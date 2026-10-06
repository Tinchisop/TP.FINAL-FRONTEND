# 🍲 Recetario — Trabajo Práctico Final (Opción B)

Aplicación web hecha con **React + Vite** que consume la API pública [TheMealDB](https://www.themealdb.com/api.php) para buscar y mostrar recetas de comida de todo el mundo.

Curso Inicial Front-End — Módulo 3: Desarrollo con React.js — UTN.

## Funcionalidades

- **Listado en cards**: cada receta muestra imagen, nombre, categoría, origen y etiquetas.
- **Búsqueda en tiempo real**: filtra las recetas mientras se escribe (los nombres están en inglés, ej: `chicken`, `pasta`, `cake`).
- **Detalle de receta** (`/receta/:id`): ingredientes con sus medidas, preparación y link al video.
- **Paginado**: 8 recetas por página.
- **Manejo de carga y errores** en las llamadas a la API.
- **Página 404** personalizada para rutas que no existen.

## Tecnologías

- React (`useState`, `useEffect`, props)
- React Router DOM (Layout con `<Outlet />` y rutas dinámicas)
- Vite
- CSS Modules
- `fetch` para consumir la API

## Estructura

```
src/
├── components/   # Layout, Navbar, Footer, MealCard, MealList, SearchBar, Pagination, StatusMessage
├── pages/        # Home, MealDetail, NotFound
├── services/     # mealApi.js (llamadas a TheMealDB)
├── App.jsx       # Rutas de la aplicación
└── main.jsx      # Punto de entrada
```

## Cómo ejecutar el proyecto localmente

Requisitos: tener instalado [Node.js](https://nodejs.org/) (versión 20 o superior).

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Tinchisop/TP.FINAL-FRONTEND.git
   cd TP.FINAL-FRONTEND
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir en el navegador la dirección que aparece en la consola (por defecto `http://localhost:5173`).

Para generar la versión de producción:

```bash
npm run build
npm run preview
```
