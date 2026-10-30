# Despliegue estático — Alta Dental Especialidades

El sitio es **100 % estático**: HTML5, CSS3, JavaScript vanilla e imágenes. No necesita PHP, base de
datos, Node ni ningún proceso de compilación. Funciona en cualquier hosting estático (HostGator/cPanel,
Netlify, Cloudflare Pages, GitHub Pages, Vercel, S3…) o abriendo `index.html` con doble clic.

## 1. Estructura

```
AltaDental/
├── index.html               ← página principal (one-page)
├── servicios/               ← 11 páginas de servicio: servicios/<slug>/index.html
├── robots.txt
├── sitemap.xml
├── site.webmanifest
├── favicon.ico
├── apple-touch-icon.png
├── assets/
│   ├── css/main.css         ← importa base/, components/ y sections/ (diseño original)
│   ├── js/main.js + js/modules/*.js   ← scripts originales, cargados con defer
│   ├── images/branding/     ← icono del logo (header y footer)
│   ├── images/doctors/      ← foto del especialista
│   └── icons/               ← favicon 96, iconos 192/512 del manifiesto
├── images/                  ← fotografías reales que sustituyen a los placeholders
│   ├── hero/  clinica/  galeria/  servicios/  equipo/
│   ├── marca/               ← logo para Schema
│   └── social/              ← imagen Open Graph 1200×630
│
├── _originales/             ← NO SUBIR: fotos originales renombradas + inventario.json
├── _herramientas/           ← NO SUBIR: generar-servicios.py (genera servicios/ y sitemap.xml)
├── docs/                    ← NO SUBIR: datos fuente de la clínica (CLINIC, CONTENT, SOCIALS)
├── CLAUDE.md                ← NO SUBIR
├── SEO-STRATEGY.md          ← NO SUBIR
├── IMAGE-INVENTORY.md       ← NO SUBIR
└── STATIC-DEPLOY.md         ← NO SUBIR
```

## 2. Probar localmente

Nota: las páginas de servicio usan URLs limpias (`servicios/endodoncia-chihuahua/`). En un hosting o
con el servidor de la opción B se abren solas; abriendo archivos con doble clic, el navegador muestra la
carpeta en vez de la página, así que para revisarlas usa la opción B.

Opción A — doble clic en `index.html` (todo funciona: menú, acordeón, galería, formulario → WhatsApp).
Las fuentes de Google y los iconos de Font Awesome (CDN) necesitan conexión a internet.

Opción B — servidor estático simple (recomendado, se comporta igual que el hosting):

```bash
cd C:\Users\Proyectos\AltaDental
python -m http.server 8080
```

Abrir <http://127.0.0.1:8080/>. Alternativas: `npx serve .` o la extensión *Live Server* de VS Code.

## 3. Qué subir al hosting

Sube **solo** esto a la raíz pública (`public_html/` en cPanel):

```
index.html  robots.txt  sitemap.xml  site.webmanifest  favicon.ico  apple-touch-icon.png
assets/     images/     servicios/
```

No subas `_originales/`, `_herramientas/`, `docs/`, `.git/` ni los archivos `.md`.

## 4. Dominio (paso obligatorio antes de publicar)

El proyecto no tenía dominio. Se usó el marcador **`https://www.altadental.example`** en:

- `index.html` (canonical, Open Graph, Twitter, JSON-LD)
- `robots.txt` (línea `Sitemap:`)
- `sitemap.xml`
- `_herramientas/generar-servicios.py` (constante `DOMINIO`; luego vuelve a ejecutarlo)

Haz **buscar y reemplazar** de `https://www.altadental.example` por el dominio real, p. ej.
`https://www.tudominio.com.mx` (con `https`, con o sin `www` según elijas — y redirige la otra variante
a esa). Comprobación rápida: no debe quedar ninguna aparición de `altadental.example`.

Además:
- Activa HTTPS (AutoSSL gratuito en cPanel).
- Fuerza la redirección `http → https` y unifica `www`/sin `www` (en cPanel: *Dominios → Forzar HTTPS*;
  o con `.htaccess` en Apache).

## 5. Después de publicar

1. Abrir el sitio en el móvil y probar: menú, botón de WhatsApp, formulario de cita, teléfono, enlace "Cómo llegar" del footer, galería y preguntas frecuentes.
2. Probar la vista previa al compartir: <https://developers.facebook.com/tools/debug/> (Facebook/WhatsApp)
   y <https://www.linkedin.com/post-inspector/>.
3. Validar datos estructurados: <https://search.google.com/test/rich-results>.
4. Medir rendimiento: <https://pagespeed.web.dev/>.
5. Conectar Search Console y enviar el sitemap (SEO-STRATEGY.md §6).
6. Instalar analítica cuando existan los IDs (SEO-STRATEGY.md §8).

## 6. Actualizaciones futuras

| Cambio | Dónde |
|---|---|
| Teléfono / WhatsApp | `index.html`: busca `526141972298`, `(614) 197 2298`, `526146893737` y `(614) 689 3737`. Incluye el bloque JSON-LD del `<head>`. |
| Textos de una sección | `index.html`, cada sección está marcada con un comentario `<!-- ============ NOMBRE ============ -->`. |
| Preguntas frecuentes | Cambia el `accordion-item` visible **y** la entrada equivalente del `FAQPage` en el JSON-LD (deben coincidir). |
| Colores, tipografía, espaciado | Variables en `assets/css/base/variables.css` (diseño original). |
| Cambiar una foto | Expórtala en WebP con las **mismas dimensiones** que la foto actual de ese recuadro (ver `IMAGE-INVENTORY.md`), así el diseño no cambia de tamaño. Nombre en minúsculas con guiones, `alt` descriptivo y `width`/`height` iguales a la imagen. |
| Horario (cuando exista) | Sección Contacto + `openingHoursSpecification` en el JSON-LD. |
| Contenido de un servicio | Edita sus datos en `_herramientas/generar-servicios.py` y ejecuta `python _herramientas/generar-servicios.py`. Regenera las 11 páginas y `sitemap.xml`. No edites a mano `servicios/*/index.html` (se sobrescribe). |
| Header/footer de las páginas de servicio | Están en la plantilla del mismo script; si cambias el de `index.html`, replica el cambio ahí y vuelve a generar. |
| Cualquier cambio de contenido | Actualiza `LASTMOD` en el script (y `<lastmod>` en `sitemap.xml`). |

## 7. Qué se retiró de este proyecto

El backend anterior (CMS en PHP, panel `/admin`, API, instalador, MySQL, sistema clínico de pacientes,
agenda, odontograma, presupuestos, pagos, documentos clínicos y scripts de respaldo) **ya no forma parte
de este proyecto**. Se movió íntegro —incluido el trabajo que no tenía commit— a:

```
C:\Users\Proyectos\AltaDental-respaldo-backend-2026-10-30\
```

Ese respaldo contiene datos sensibles (un documento clínico en `storage/` y, en `DEPLOY.md`, la
contraseña inicial del administrador en texto plano). Guárdalo en un lugar privado; nunca lo subas a un
hosting público.
