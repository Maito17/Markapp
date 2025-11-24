# - Página Web

Autor: Jontahan davalos (Grupo 67)

Descripción
- Proyecto de ejemplo que incluye un backend Express (API REST) y un frontend en Vue 3 + Vite.
- Funcionalidades implementadas: listado de productos, creación/edición/eliminación básica de productos (in-memory), categorías, y un proxy en el dev-server para facilitar llamadas al backend.

Requisitos
- Node.js (versión 16+ recomendada)

Estructura relevante
- `backend/` - servidor Express (escucha en `http://localhost:3000`).
- `frontend/` - aplicación Vue 3 + Vite (dev server en `http://localhost:5173`).
- `scripts/test-proxy.js` - script de prueba que POSTea un producto a través del proxy de Vite y luego obtiene la lista de productos.

Cómo ejecutar (desarrollo)

1) Arrancar el backend (desde la raíz del proyecto):
```bat
cd /d "C:\Users\jd153\OneDrive\Escritorio\pagina web"
node backend\server.js
```

2) Arrancar el frontend (recomiendo CMD en Windows si PowerShell bloquea `npm.ps1`):
```bat
cd /d "C:\Users\jd153\OneDrive\Escritorio\pagina web\frontend"
npm run dev
```
Si `npm` falla por la política de ejecución de PowerShell, puedes ejecutar Vite directamente:
```bat
node node_modules\vite\bin\vite.js
```

3) Abrir la aplicación en el navegador:
- Local: `http://localhost:5173/`
- LAN (si quieres acceder desde otra máquina en tu red): `http://<tu-ip>:5173/` (ej. `http://192.168.0.100:5173/`)
- Formulario nuevo producto: `http://localhost:5173/product/new`

Prueba del proxy (automática)
- Ejecuta desde la raíz del proyecto:
```bat
cd /d "C:\Users\jd153\OneDrive\Escritorio\pagina web"
node scripts\test-proxy.js
```
- El script intentará POSTear un producto a `http://localhost:5173/api/products` (Vite lo proxeará a `http://localhost:3000/api/products`) y luego hará un GET para confirmar la creación.

Notas técnicas y decisiones
- Para que la app funcione tanto por `localhost` como por la IP de LAN, en desarrollo se configuró `frontend/vite.config.js` con `server.host = '0.0.0.0'` y `server.proxy['/api'] -> 'http://localhost:3000'`.
- El backend guarda los productos en memoria. Si necesitas persistencia entre reinicios, podemos migrar a SQLite o a un pequeño archivo JSON.

Comprobaciones realizadas
- Corregí un SFC inválido en `frontend/src/views/ProductFromView.vue` para que Vite no muestre errores de compilación.
- Probé el flujo creando un producto usando `scripts/test-proxy.js` — el POST devolvió `201` y el GET devolvió el nuevo producto en la lista.

Siguientes pasos recomendados
- Probar la UI en el navegador creando un producto desde el formulario y revisar la consola del navegador para corregir posibles errores JS.
- Generar un `README` final con capturas (si se requiere) y preparar la entrega del PDF.

Contacto
- Si quieres, continuo y pruebo crear un producto desde la UI y reviso la consola por errores.
# Entrega - Actividad (pagina web)

Pasos para ejecutar la solución mínima implementada en esta carpeta.

## Backend (Express)

1. Abrir PowerShell en `pagina web/backend`.
2. Instalar dependencias (si no están instaladas):

```powershell
npm install
```

3. Iniciar el servidor:

```powershell
npm start
```

El servidor quedará escuchando en `http://localhost:3000` y expone:

- `GET /api/products` → lista de productos (JSON)
- `POST /api/products` → crear producto (body JSON: `name`, `price`, `description`)
- `DELETE /api/products/:id` → borrar producto

## Siguientes pasos (frontend)

- Implementar componente `ProductCard.vue` que consuma `GET /api/products`.
- Crear una pequeña vista que permita listar productos y añadir nuevos mediante el endpoint `POST`.
Si quieres, implemento el frontend ahora mismo (Vue) y lo conecto con este backend.

## Frontend (entrega mínima incluida)

He añadido un frontend estático en `frontend/public/index.html` que usa Vue 3 vía CDN (sin build) y se conecta a `http://localhost:3000/api/products`.

Para usarlo:

1. Asegúrate de tener el backend ejecutándose en `pagina web/backend` (PowerShell):

```powershell
cd "C:\Users\jd153\OneDrive\Escritorio\pagina web\backend"
npm install
npm start
```

2. Abrir el archivo `frontend/public/index.html` en el navegador (doble clic) o servirlo desde la carpeta `frontend/public` con un servidor estático (recomendado):

```powershell
cd "C:\Users\jd153\OneDrive\Escritorio\pagina web\frontend\public"
npx serve .
```

3. La página mostrará la lista de productos, permitirá agregar y borrar elementos.

Si quieres, convierto esto a un proyecto Vue con Vite/CLI, o integro el componente en `frontend/src/components/ProductCard.vue` usando el flujo de build. Dime cómo prefieres proceder.
