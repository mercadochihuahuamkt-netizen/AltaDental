# Estrategia SEO — Alta Dental Especialidades

> Objetivo realista: dejar el sitio técnicamente preparado para **competir** por las primeras posiciones
> locales en Chihuahua. El ranking final depende también de factores externos al código: Google
> Business Profile, reseñas, autoridad del dominio, enlaces y publicación constante de contenido.
> Ningún sitio puede garantizar el "número 1".

---

## 0. Datos por confirmar antes de publicar (importante)

| Dato | Situación | Acción |
|---|---|---|
| **Dominio** | No existe en el proyecto. Se usa el marcador `https://www.altadental.example` (TLD reservado que nunca resuelve). | Buscar y reemplazar `https://www.altadental.example` por el dominio real en `index.html`, `robots.txt` y `sitemap.xml`. Ver STATIC-DEPLOY.md §4. |
| **WhatsApp** | El proyecto documenta **(614) 197 2298**, que es el número usado en todo el sitio. La tarjeta de presentación (foto) muestra *WhatsApp (614) 462 6142* y *Urgencias (614) 197 2298*. | Confirmar con la clínica cuál es el WhatsApp de citas. Si cambia, reemplazar `526141972298` y `(614) 197 2298` en `index.html` (y en el JSON-LD). |
| **Dirección / edificio** | El proyecto dice "Plaza del Sol". La tarjeta y Google Maps muestran el edificio como **Sierra Alta Medical City** (C. Sierra de la Campana 3701). | Usar exactamente la misma forma de dirección en el sitio, Google Business Profile, Facebook e Instagram. Considerar agregar "Sierra Alta Medical City" si así aparece en Google. |
| **Horario** | No existe información oficial. El sitio dice "Consulta disponibilidad por WhatsApp o teléfono" y el Schema no incluye `openingHours`. | Cuando se confirme, agregarlo en Contacto y como `openingHoursSpecification` en el JSON-LD. |
| **Cédulas profesionales** | Aparecen en la tarjeta (foto), pero no en los documentos del proyecto. | No se publicaron. Si la clínica las confirma por escrito, mostrarlas en la sección Especialista refuerza la confianza (E-E-A-T). |
| **Correo** | La tarjeta muestra un correo personal; el proyecto indica que no existe correo oficial. | No se publicó. |
| **Aviso de privacidad** | No existe. | Recomendado (LFPDPPP): aunque el formulario no guarda datos, el sitio invita a compartir datos personales y de salud por WhatsApp. Redactarlo con asesoría y enlazarlo en el footer. |

---

## 1. Keywords

**Keyword principal**
- `dentista en Chihuahua` (y su variante `dentista Chihuahua`)

**Secundarias**
- `clínica dental en Chihuahua`
- `especialistas dentales Chihuahua`
- `endodoncia Chihuahua` / `endodoncista en Chihuahua` / `tratamiento de conducto Chihuahua`
- `blanqueamiento dental Chihuahua` / `blanqueamiento Philips Zoom Chihuahua`
- `ortodoncia Chihuahua` / `ortodoncia infantil Chihuahua`
- `implantes dentales Chihuahua`
- `limpieza dental Chihuahua`
- `periodoncia Chihuahua`
- `coronas dentales Chihuahua` / `puentes dentales Chihuahua` / `prótesis dentales Chihuahua`
- `cirugía maxilofacial Chihuahua`

**Marca y navegacionales**
- `Alta Dental Especialidades`, `Alta Dental Chihuahua`, `Dr. José Eduardo Ramos`, `dentista Plaza del Sol Chihuahua`

**Búsquedas locales objetivo** (incluyen el patrón "cerca de mí", que Google resuelve con Business Profile + señales del sitio)
- `dentista cerca de mí`, `endodoncista cerca de mí`, `urgencias dentales Chihuahua`, `dentista Sierra de la Campana`

Todas surgen de los servicios reales documentados en `docs/CLINIC.md`. No se trabajaron especialidades no ofrecidas.

## 2. Intención de búsqueda y dónde se atiende

El contenido visible es el original del sitio; no se reescribió. El SEO se trabajó con metadatos,
datos estructurados, `alt`, sitemap y rendimiento.

| Intención | Ejemplo | Sección que responde |
|---|---|---|
| Local transaccional | dentista en Chihuahua, clínica dental Chihuahua | `<title>`, description, Sobre Nosotros ("…atención dental moderna y humana en Chihuahua"), footer con dirección, Schema `Dentist` |
| Servicio específico | endodoncia Chihuahua, blanqueamiento Philips Zoom | `#servicios` (H3 por servicio), `#doctores` (Endodoncia) |
| Confianza | quién es el doctor, cómo es la clínica | `#doctores`, `#galeria` y fotos reales con `alt` descriptivo |
| Informativa | ¿duele la ortodoncia?, ¿cuánto dura una limpieza? | `#preguntas-frecuentes` (+ `FAQPage`) |
| Contacto | dirección, teléfono | topbar, `#cita`, footer (`#contacto`) |
| Precio | cuánto cuesta | `#tratamientos` → WhatsApp (no se inventaron precios) |

## 3. Implementación realizada (sin cambiar el contenido visible)

**SEO técnico**
- `lang="es-MX"`, `charset`, `viewport`, `meta robots` (`index, follow, max-image-preview:large`).
- `title` (50 caracteres): *Dentista en Chihuahua | Alta Dental Especialidades*.
- `meta description` única con servicios reales.
- `canonical` absoluto, Open Graph con imagen real 1200×630, Twitter Card `summary_large_image`.
- `favicon.ico`, PNG 96, `apple-touch-icon`, `site.webmanifest`, `theme-color`.
- `robots.txt` y `sitemap.xml` (con extensión de imágenes).
- Una sola URL indexable (one-page), sin contenido duplicado.
- Estructura de encabezados original: un H1 ("Cuidamos Tu Sonrisa Con Excelencia") y un H2 por sección.

**Datos estructurados (JSON-LD, un solo `@graph`)**
- `Dentist`: nombre, URL, logo, imágenes, teléfono, dirección postal, `hasMap`, `areaServed`, `contactPoint` (WhatsApp), `sameAs` (Facebook, Instagram, TikTok) y `hasOfferCatalog` con los 11 servicios visibles.
- `Person`: Dr. José Eduardo Ramos, especialista en Endodoncia (como aparece en la tarjeta del sitio).
- `WebSite`, `WebPage` y `FAQPage` con las 4 preguntas visibles (texto idéntico al de la página).
- **No** se agregó `AggregateRating`, `Review`, `geo`, `openingHours` ni `priceRange`: no hay datos reales.

Validar después de publicar con: <https://search.google.com/test/rich-results> y <https://validator.schema.org/>.

**Imágenes y rendimiento**
- Placeholders sustituidos por fotos reales en WebP con `alt` descriptivo (ciudad y servicio cuando corresponde), `width`/`height` y `loading="lazy"` fuera del primer pantallazo.
- Foto del hero con `preload` + `fetchpriority="high"` (LCP).
- Foto del especialista: de 1.3 MB (PNG) a 44 KB (WebP, mismo encuadre). Icono del logo: de 132 KB a 14 KB.
- JS: los mismos módulos originales, cargados con `defer` como scripts clásicos (funcionan también abriendo el archivo directamente). Se eliminó la llamada a `api/citas.php`, que ya no existe.

**Oportunidad de contenido (requiere autorización, no aplicada):** el H1 y los H2 originales no mencionan
"Chihuahua" ni "dentista". Agregar la ciudad a un encabezado (p. ej. en el eyebrow o el subtítulo del
hero) reforzaría el SEO local, pero cambiaría el texto visible, así que queda a decisión de la clínica.

## 4. Páginas individuales por servicio (implementado)

Se creó una página por cada uno de los 11 servicios reales, con el mismo diseño del sitio:

| Servicio | URL | Keyword principal |
|---|---|---|
| Limpieza Dental | `/servicios/limpieza-dental-chihuahua/` | limpieza dental en Chihuahua |
| Blanqueamiento Dental | `/servicios/blanqueamiento-dental-chihuahua/` | blanqueamiento dental Chihuahua / Philips Zoom |
| Ortodoncia | `/servicios/ortodoncia-chihuahua/` | ortodoncia en Chihuahua |
| Ortodoncia Infantil | `/servicios/ortodoncia-infantil-chihuahua/` | ortodoncia infantil Chihuahua |
| Endodoncia | `/servicios/endodoncia-chihuahua/` | endodoncia / tratamiento de conducto Chihuahua |
| Periodoncia | `/servicios/periodoncia-chihuahua/` | periodoncia / tratamiento de encías Chihuahua |
| Prótesis Dentales | `/servicios/protesis-dentales-chihuahua/` | prótesis dentales Chihuahua |
| Implantes Dentales | `/servicios/implantes-dentales-chihuahua/` | implantes dentales Chihuahua |
| Coronas Dentales | `/servicios/coronas-dentales-chihuahua/` | coronas dentales Chihuahua |
| Puentes Dentales | `/servicios/puentes-dentales-chihuahua/` | puentes dentales Chihuahua |
| Cirugía Maxilofacial | `/servicios/cirugia-maxilofacial-chihuahua/` | cirugía maxilofacial Chihuahua |

Cada página tiene: title, description y H1 únicos; canonical; Open Graph y Twitter con foto real
1200×630; breadcrumb visible; JSON-LD con `Service`, `WebPage`, `BreadcrumbList`, `FAQPage` y
`Dentist` (sin ratings). Las preguntas del `FAQPage` coinciden exactamente con las visibles.

**Criterios de contenido:** se partió del resumen real de cada servicio y se amplió con información
dental general y prudente (qué es, beneficios, cuándo se recomienda, cómo se realiza, FAQ). No se
publicaron precios, promociones, tiempos exactos no documentados, resultados garantizados, testimonios
ni certificaciones. Solo Endodoncia menciona al Dr. José Eduardo Ramos, porque es la especialidad que
el sitio le atribuye; el resto habla de "Alta Dental Especialidades".

**Enlazado interno:** botón "Ver servicio" en las 11 tarjetas de la home; cada página enlaza a 3
servicios relacionados, a la home, a la sección de cita (`/#cita`) y a WhatsApp con mensaje
precargado del servicio; el footer de las páginas de servicio enlaza a 6 servicios.

**Siguiente paso (requiere a la clínica):** enriquecer cada página con información propia —protocolos,
equipos, fotos específicas del tratamiento y casos reales con autorización—. Es lo que más diferencia
una página de servicio frente a la competencia.

## 5. Google Business Profile (externo — el factor más importante para "dentista cerca de mí")

1. Reclamar/verificar el perfil de **Alta Dental Especialidades**.
2. **NAP idéntico** al sitio:
   - Nombre: `Alta Dental Especialidades` (sin agregar keywords al nombre: viola las directrices).
   - Dirección: `Sierra de la Campana 3701, Plaza del Sol, Consultorio 411, C.P. 31207, Chihuahua, Chih.`
   - Teléfono: `(614) 689 3737 Ext. 1411` (y WhatsApp como canal de chat si aplica).
3. Categoría principal: **Dentista**. Secundarias que correspondan a servicios reales: *Endodoncista*, *Clínica dental*, *Ortodoncista*, *Periodoncista*, *Servicio de blanqueamiento dental*, *Cirujano maxilofacial* (solo si hay especialistas que lo realicen).
4. Horario real, incluidos días festivos.
5. Fotos: fachada/edificio, recepción, consultorios, equipo (Philips Zoom, escáner), equipo humano. Subir periódicamente.
6. Servicios: los 11 del sitio, con la misma redacción.
7. Enlace al sitio (con UTM, p. ej. `?utm_source=google&utm_medium=organic&utm_campaign=gbp`) y botón de cita apuntando a `#cita`.
8. Publicaciones mensuales (novedades, consejos, blanqueamiento).
9. Preguntas y respuestas: cargar las mismas FAQ del sitio.
10. **Reseñas**: pedirlas a cada paciente satisfecho (enlace corto o QR en recepción), responder todas —positivas y negativas— con respeto y sin datos clínicos del paciente. No comprar ni incentivar reseñas.

Mantener el mismo NAP en Facebook, Instagram, TikTok, Doctoralia/directorios médicos y Sección Amarilla.

## 6. Google Search Console

1. Publicar el sitio con el dominio definitivo y HTTPS.
2. En <https://search.google.com/search-console> agregar una propiedad de **dominio** (verificación por registro DNS TXT en el proveedor del dominio — recomendado) o de **prefijo de URL** (meta tag o archivo HTML).
   - Si se usa meta tag: pegar `<meta name="google-site-verification" content="…">` dentro de `<head>` de `index.html`. **No hay token todavía; no se inventó ninguno.**
3. Enviar `https://DOMINIO/sitemap.xml` en *Sitemaps*.
4. *Inspección de URL* → solicitar indexación de la home.
5. Revisar a las 2–4 semanas: *Rendimiento* (consultas reales), *Experiencia* (Core Web Vitals) y *Mejoras* (FAQ).

Hacer lo mismo en Bing Webmaster Tools (permite importar desde Search Console).

## 7. Backlinks y autoridad local

- Directorios médicos y locales con NAP idéntico (Doctoralia, Google, Bing Places, Apple Business Connect, Sección Amarilla).
- Perfil de Sierra Alta Medical City / Plaza del Sol si tienen directorio de consultorios.
- Asociaciones o colegios profesionales del especialista, universidades (UACH/UAdeC) si publican egresados.
- Colaboraciones locales (escuelas para ortodoncia infantil, empresas para convenios).
- Evitar compra de enlaces y granjas de directorios.

## 8. Analítica (pendiente de IDs reales)

No había IDs de GA4, GTM ni Meta Pixel en el proyecto; no se inventaron.

1. Crear un contenedor de **Google Tag Manager** y pegar sus dos fragmentos en `index.html`:
   el `<script>` en el comentario marcado `ANALÍTICA` dentro de `<head>`, y el `<noscript>` justo después de `<body>`.
2. Dentro de GTM configurar **GA4** y **Meta Pixel** (plantilla de la galería).
3. Conversiones recomendadas, con activadores de GTM y sin tocar el código del sitio:
   - *Clic en WhatsApp*: activador "Clic – Solo enlaces" con `Click URL` que contiene `wa.me`.
   - *Clic en teléfono*: `Click URL` que empieza con `tel:`.
   - *Solicitud de cita*: activador "Envío de formulario" con `Form ID` = `appointment-form`.
4. Marcarlas como conversiones en GA4 y como eventos `Contact`/`Lead` en Meta.
5. Al instalar analítica, mostrar un aviso de cookies y actualizar el aviso de privacidad.

## 9. Contenido futuro

- Páginas de servicio de la §4.
- Blog (solo con publicación constante, 1–2 artículos/mes escritos o revisados por el especialista): "¿Cuándo necesito una endodoncia?", "Blanqueamiento Philips Zoom: qué esperar", "Ortodoncia en niños: a qué edad", "Qué hacer ante una urgencia dental".
- Testimonios **reales** con autorización escrita del paciente (y, si se desea, `Review` en Schema solo para reseñas propias del sitio, nunca copiadas de Google).
- Fotos de fachada/acceso para ayudar a llegar.
- Video corto de presentación del doctor (reutilizable en TikTok/Instagram).

## 10. Mantenimiento

- Actualizar `<lastmod>` en `sitemap.xml` cada vez que cambie el contenido.
- Revisar Search Console mensualmente.
- Mantener el NAP idéntico si cambia cualquier dato de contacto (buscar el número en todo `index.html`, incluido el JSON-LD).
