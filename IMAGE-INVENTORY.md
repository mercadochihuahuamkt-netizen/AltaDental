# Inventario de imágenes — Alta Dental Especialidades

Fecha: 2026-10-30. Diseño: el original del sitio (último commit, `index.php` + `assets/css` modular).
Las fotografías reales sustituyen **únicamente** a los placeholders SVG que ya existían. Los marcos,
bordes, contornos, sombras, blob animado, rejilla de puntos, tarjetas flotantes y badges se conservan
sin cambios.

Criterio para que ningún recuadro cambie de tamaño: cada foto se exportó con las **mismas dimensiones
intrínsecas del placeholder** al que sustituye (p. ej. 900×1100). Así ocupa exactamente el mismo
espacio que el SVG original; el encuadre se eligió para que el sujeto quede centrado. En los recuadros
que ya usaban `object-fit: cover` (galería, FAQ y foto del doctor) la imagen se adapta al recuadro.

Los 14 originales están renombrados y sin modificar en `_originales/imagenes/` (respaldo, **no se sube**).

## Placeholder → fotografía real

| Sección | Placeholder original | Fotografía real (archivo) | Original de origen | Dimensiones / peso | Alt |
|---|---|---|---|---|---|
| Hero (recuadro con blob, puntos y tarjetas flotantes) | `hero-doctor.svg` 900×1000 | `images/hero/dr-jose-eduardo-ramos-dentista-chihuahua.webp` | `WhatsApp Image … 12.58.48 PM (1).jpeg` | 900×1000, 34 KB | Dr. José Eduardo Ramos, especialista de Alta Dental Especialidades, dentista en Chihuahua |
| Hero – avatar de la tarjeta flotante (46 px circular) | `doctor-1.svg` | `images/hero/dr-jose-eduardo-ramos-avatar.webp` | `WhatsApp Image … 12.58.55 PM (1).jpeg` (rostro) | 138×138, 2 KB | decorativa (`alt=""`, igual que el original) |
| Sobre Nosotros (borde blanco, contorno, badge circular) | `about-clinic.svg` 800×900 | `images/clinica/area-clinica-alta-dental-chihuahua-nosotros.webp` | `WhatsApp Image … 12.58.46 PM.jpeg` | 800×900, 52 KB | Área clínica de Alta Dental Especialidades en Chihuahua con unidades dentales y equipo atendiendo a un paciente |
| Galería 1 (celda grande) | `gallery-1.svg` | `images/servicios/lampara-blanqueamiento-philips-zoom-alta-dental-960.webp` (lightbox: `-1400`) | `… 12.58.55 PM.jpeg` | 960×640 / 1400×933 | Lámpara de blanqueamiento dental Philips Zoom durante un tratamiento |
| Galería 2 | `gallery-2.svg` | `images/servicios/escaner-intraoral-digital-alta-dental-galeria.webp` (lightbox: `-1200`) | `… 12.58.51 PM.jpeg` | 800×640 / 1200×1600 | Dr. José Eduardo Ramos con el escáner intraoral digital |
| Galería 3 | `gallery-3.svg` | `images/equipo/dr-jose-eduardo-ramos-consultorio-alta-dental-galeria.webp` (lightbox: `-1200`) | `… 12.58.47 PM (1).jpeg` | 800×640 / 1200×1600 | Dr. José Eduardo Ramos con uniforme clínico en su consultorio |
| Galería 4 | `gallery-4.svg` | `images/equipo/dr-jose-eduardo-ramos-consulta-alta-dental-480.webp` (lightbox: `-1200`) | `… 12.58.52 PM.jpeg` | 480×320 / 1200×800 | Dr. José Eduardo Ramos en su escritorio de consulta |
| Galería 5 | `gallery-5.svg` | `images/galeria/atencion-dental-cercana-alta-dental-800.webp` (lightbox: `-1200`) | `… 12.58.52 PM (2).jpeg` | 800×533 / 1200×800 | Mano de paciente y mano con guante dental |
| Galería 6 (celda grande) | `gallery-6.svg` | `images/servicios/blanqueamiento-dental-philips-zoom-chihuahua-800.webp` (lightbox: `-1200`) | `… 12.58.52 PM (1).jpeg` | 800×533 / 1200×800 | Paciente durante un blanqueamiento dental con Philips Zoom |
| Galería 7 | `gallery-7.svg` | `images/equipo/dr-jose-eduardo-ramos-retrato-estudio-negro-galeria.webp` (lightbox: `-1068`) | `… 12.58.47 PM (2).jpeg` | 800×640 / 1068×1600 | Retrato del Dr. José Eduardo Ramos con uniforme negro |
| Galería 8 | `gallery-8.svg` | `images/equipo/dr-jose-eduardo-ramos-retrato-estudio-beige-galeria.webp` (lightbox: `-1068`) | `… 12.58.48 PM.jpeg` | 800×640 / 1068×1600 | Retrato del Dr. José Eduardo Ramos con uniforme beige |
| Agenda tu cita (recuadro con sombra) | `appointment-side.svg` 900×1100 | `images/clinica/recepcion-alta-dental-chihuahua-cita.webp` | `… 12.58.47 PM.jpeg` | 900×1100, 56 KB | Recepción y sala de espera de Alta Dental Especialidades en Chihuahua |
| Preguntas frecuentes (recuadro con sombra) | `faq-side.svg` 900×1100 | `images/galeria/procedimiento-dental-pieza-de-mano-faq.webp` | `… 12.58.53 PM (1).jpeg` | 900×1100, 27 KB | Procedimiento dental: pieza de mano de alta velocidad |
| Especialista (tarjeta) | ya era foto real: `dr_eduardo_ramos.png` (1080×1080, 1.3 MB) | `assets/images/doctors/dr-jose-eduardo-ramos.webp` | misma imagen | 740×740, 44 KB (mismo encuadre, con transparencia) | Dr. José Eduardo Ramos, especialista en Endodoncia de Alta Dental Especialidades |
| Open Graph (no visible) | — | `images/social/og-alta-dental-especialidades-chihuahua.jpg` | `… 12.58.52 PM.jpeg` | 1200×630, 66 KB | — |

En la galería, las miniaturas de retratos (`-galeria.webp`) están encuadradas en el rostro para que el
`object-fit: cover` de la celda no corte la cabeza; al abrir el lightbox se ve la foto completa.

## Páginas de servicio

Los marcos de las páginas de servicio son los mismos de la home, así que las fotos se recortaron a sus
proporciones: `-hero` 900×1000 (hero), `-marco` 800×900 (bloque con borde y contorno), `-vertical`
900×1100 (recuadro del FAQ). Todas están en `images/servicios/`, y las imágenes Open Graph (1200×630)
en `images/social/og-*.jpg`. Cada página carga solo sus tres fotos.

| Servicio | Hero | Marco "¿Cuándo se recomienda?" | Recuadro FAQ |
|---|---|---|---|
| Limpieza Dental | área clínica | pieza de mano | recepción |
| Blanqueamiento Dental | lámpara Philips Zoom | paciente con Philips Zoom | recepción |
| Ortodoncia | escáner intraoral | doctor en consulta | área clínica |
| Ortodoncia Infantil | doctor en consulta | área clínica | recepción |
| Endodoncia | Dr. Ramos (retrato verde, endodoncista) | pieza de mano | Dr. Ramos (uniforme guinda) |
| Periodoncia | área clínica | doctor en consulta | pieza de mano |
| Prótesis Dentales | escáner intraoral | doctor en consulta | recepción |
| Implantes Dentales | escáner intraoral | área clínica | pieza de mano |
| Coronas Dentales | escáner intraoral | pieza de mano | doctor en consulta |
| Puentes Dentales | doctor en consulta | escáner intraoral | área clínica |
| Cirugía Maxilofacial | área clínica | pieza de mano | recepción |

No hay fotografías de ortodoncia, implantes, prótesis ni cirugía como tales, así que no se renombró
ninguna foto con el nombre de esos servicios: se usan fotos reales de la clínica con `alt` que describe
lo que realmente muestran. Las únicas fotos que corresponden a un servicio concreto ya tenían su nombre
(`blanqueamiento-…`, `lampara-blanqueamiento-philips-zoom-…`, `…-endodoncista-…`).

## No utilizada en el sitio

| Original | Respaldo | Motivo |
|---|---|---|
| `WhatsApp Image … 12.58.53 PM.jpeg` | `_originales/imagenes/tarjeta-presentacion-dr-jose-eduardo-ramos.jpg` | Tarjeta de presentación: muestra un WhatsApp distinto ((614) 462 6142), un correo personal y cédulas. Publicarla contradice los datos de contacto del sitio. |

## Marca

- `assets/images/branding/logo-icon.png`: misma imagen original, reducida de 512×512 (132 KB) a 120×120 (14 KB). Se muestra a 40×40, así que se ve idéntica.
- `favicon.ico`, `assets/icons/*`, `apple-touch-icon.png`: generados del logotipo oficial.
- `images/marca/logo-alta-dental-especialidades.png`: solo para el `logo` del Schema (no visible).
- Los SVG placeholder sustituidos y el logo de 1600×1600 se retiraron de la carpeta publicable; siguen en el historial de git y en `_originales/`.
