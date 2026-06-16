-- ============================================================
-- Orquesta Supply · Diagnóstico de restaurantes
-- Ejecuta esto en tu proyecto Supabase NUEVO:
-- Dashboard → SQL Editor → New query → pega y corre.
-- ============================================================

create table if not exists public.diagnosticos (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  restaurante text,
  respuestas  jsonb not null
);

-- Seguridad a nivel de fila (RLS)
alter table public.diagnosticos enable row level security;

-- El formulario público SOLO puede insertar (nadie puede leer con la anon key).
create policy "insert_publico"
  on public.diagnosticos
  for insert
  to anon
  with check (true);

-- NOTA SOBRE EL PANEL:
-- Con esta política, la anon key NO puede leer (select), así nadie ve las
-- respuestas de otros con solo conocer el sitio. PERO tu /panel usa la anon key,
-- así que necesitas UNA de estas dos opciones:
--
-- OPCIÓN A (rápida, para arrancar tú solo):
--   Agrega también lectura pública. Cualquiera con la URL del panel vería datos.
--   Úsala solo mientras pruebas. Descomenta:
--
-- create policy "select_publico"
--   on public.diagnosticos for select to anon using (true);
--
-- OPCIÓN B (recomendada cuando lo uses en serio):
--   Deja el panel detrás de Supabase Auth (login) y crea una política
--   que permita SELECT solo a usuarios autenticados:
--
-- create policy "select_autenticado"
--   on public.diagnosticos for select to authenticated using (true);
--
-- (Pídeme el panel con login cuando quieras cerrarlo bien.)
