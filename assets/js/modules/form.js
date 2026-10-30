const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_NUMBER = '526141972298';

function validateField(field) {
  const input = field.querySelector('input, select, textarea');
  const errorEl = field.querySelector('.field-error');
  if (!input) return true;

  let message = '';
  const value = input.value.trim();

  if (input.required && !value) {
    message = 'Este campo es obligatorio.';
  } else if (input.type === 'email' && value && !EMAIL_RE.test(value)) {
    message = 'Ingresa un correo válido.';
  } else if (input.type === 'tel' && value && value.replace(/\D/g, '').length < 7) {
    message = 'Ingresa un teléfono válido.';
  } else if (input.type === 'date' && value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(value) < today) {
      message = 'Elige una fecha a partir de hoy.';
    }
  }

  field.classList.toggle('has-error', Boolean(message));
  if (errorEl) errorEl.textContent = message;
  return !message;
}

function initAppointmentForm() {
  const form = document.querySelector('#appointment-form');
  if (!form) return;

  const status = form.querySelector('.form-status');
  const fields = Array.from(form.querySelectorAll('.form-field'));

  fields.forEach((field) => {
    const input = field.querySelector('input, select, textarea');
    input?.addEventListener('blur', () => validateField(field));
    input?.addEventListener('input', () => {
      if (field.classList.contains('has-error')) validateField(field);
    });
  });

  // El sitio no tiene backend propio para procesar el formulario. En vez de simular
  // un envío que nunca llega a ningún servidor, los datos capturados se convierten en
  // un mensaje de WhatsApp real dirigido al número oficial de Alta Dental Especialidades.
  function buildWhatsappMessage(data) {
    const lines = [
      'Hola, quiero agendar una cita en Alta Dental Especialidades.',
      `Nombre: ${data.nombre}`,
      `Teléfono: ${data.telefono}`,
      `Correo: ${data.correo}`,
      `Servicio: ${data.servicio}`,
      `Fecha deseada: ${data.fecha}`,
    ];
    if (data.hora) lines.push(`Hora preferida: ${data.hora}`);
    if (data.mensaje) lines.push(`Mensaje: ${data.mensaje}`);
    return lines.join('\n');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isValid = fields.map(validateField).every(Boolean);

    if (!isValid) {
      status.textContent = 'Por favor corrige los campos marcados.';
      status.className = 'form-status is-error';
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());
    const whatsappNumber = form.dataset.whatsapp || WHATSAPP_NUMBER;
    const message = buildWhatsappMessage(data);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    status.textContent = 'Te estamos redirigiendo a WhatsApp para confirmar tu cita con Alta Dental Especialidades.';
    status.className = 'form-status is-success';
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    form.reset();
  });
}
