  # Diagnóstico de Restaurante — Orquesta Supply

App de diagnóstico para clientes de consultoría. El cliente llena un formulario
(6 áreas de negocio: ventas, costos, insumos, mano de obra, merma/operación,
marketing) y las respuestas caen en Supabase. Tú las revisas en `/panel`.

## Puesta en marcha (≈15 min)

### 1. Crear el proyecto Supabase nuevo
1. Entra a https://supabase.com → **New project**.
2. Nómbralo p. ej. `orquesta-diagnosticos`. Guarda la contraseña de la BD.
3. Cuando termine de aprovisionar, ve a **SQL Editor** → **New query**.
4. Pega y ejecuta el contenido de `supabase_setup.sql`.
5. Para PROBAR tú solo el panel ya, descomenta la política `select_publico`
   del SQL y vuelve a correr esa línea. (Ciérrala con login cuando vaya en serio.)

### 2. Obtener las llaves
En Supabase: **Project Settings → API**. Copia:
- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Correr local (opcional, para probar)
```bash
npm install
cp .env.local.example .env.local   # y pon tus dos valores
npm run dev
```
Abre http://localhost:3000 → formulario en `/diagnostico`, panel en `/panel`.

### 4. Subir a GitHub y desplegar en Vercel
```bash
git init && git add . && git commit -m "Diagnóstico Orquesta Supply"
# crea el repo en GitHub y haz push
```
1. En https://vercel.com → **Add New → Project** → importa el repo.
2. En **Environment Variables** agrega las dos:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. **Deploy**. Vercel te da una URL tipo `https://orquesta-diagnosticos.vercel.app`.

### 5. Compartir con tu amigo
Mándale por WhatsApp el enlace del **formulario**:
```
https://TU-DOMINIO.vercel.app/diagnostico
```
Tú revisas todo en:
```
https://TU-DOMINIO.vercel.app/panel
```

## Editar las preguntas
Todo vive en `lib/questions.js`. Agrega, quita o cambia preguntas ahí y el
formulario y el panel se actualizan solos. Tipos: `text`, `area`, `choice`
(con `opts`).

## Pendientes recomendados
- **Cerrar el panel con login** (Supabase Auth) antes de usarlo con varios
  clientes. Hoy queda abierto por la política `select_publico`.
- Dominio propio de Orquesta Supply en Vercel (Settings → Domains).
