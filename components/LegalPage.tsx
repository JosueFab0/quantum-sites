"use client";

import { useState } from "react";

type LegalTab = "terminos" | "privacidad" | "cookies";

const sections: { id: LegalTab; label: string }[] = [
  { id: "terminos", label: "Términos y Condiciones" },
  { id: "privacidad", label: "Política de Privacidad" },
  { id: "cookies", label: "Política de Cookies" },
];

const lastUpdated = "25 de junio de 2026";

// ── TÉRMINOS Y CONDICIONES ────────────────────────────────────────────────────
function Terminos() {
  return (
    <div className="legal-body">
      <p className="legal-meta">Última actualización: {lastUpdated}</p>

      <p>
        Los presentes Términos y Condiciones regulan la relación contractual entre{" "}
        <strong>Quantum Sites</strong> (en adelante, "la Agencia", "nosotros") y el cliente
        (en adelante, "el Cliente") que contrata cualquiera de sus servicios de diseño,
        desarrollo web y servicios digitales relacionados, operados desde la República de
        Costa Rica.
      </p>
      <p>
        Al contratar los servicios de la Agencia, el Cliente declara haber leído, comprendido
        y aceptado íntegramente estas condiciones.
      </p>

      <h2>1. Definiciones</h2>
      <ul>
        <li><strong>Agencia:</strong> Quantum Sites, con correo de contacto quantum.sites.cr@gmail.com.</li>
        <li><strong>Cliente:</strong> Persona física o jurídica que contrata los servicios de la Agencia.</li>
        <li><strong>Proyecto:</strong> El trabajo de diseño y/o desarrollo web acordado entre ambas partes.</li>
        <li><strong>Entregable:</strong> Cualquier archivo, diseño, código fuente o producto digital generado durante el Proyecto.</li>
        <li><strong>Ronda de revisiones:</strong> Ciclo formal de retroalimentación del Cliente sobre los Entregables.</li>
      </ul>

      <h2>2. Servicios</h2>
      <p>La Agencia ofrece los siguientes servicios:</p>
      <ul>
        <li>Diseño y desarrollo de landing pages y sitios web corporativos.</li>
        <li>Rediseño visual de sitios web existentes.</li>
        <li>Desarrollo de tiendas en línea básicas.</li>
        <li>Sistemas web personalizados (autenticación, bases de datos, paneles administrativos).</li>
        <li>Asesoría en estrategia digital y posicionamiento básico (SEO).</li>
      </ul>
      <p>
        El alcance específico, los tiempos y el precio de cada Proyecto se establecen en una
        propuesta o cotización enviada al Cliente antes del inicio del trabajo. Dicha propuesta
        forma parte integrante de estos Términos.
      </p>

      <h2>3. Formación del Contrato</h2>
      <p>
        El contrato se perfecciona cuando el Cliente aprueba la propuesta o cotización enviada
        por la Agencia mediante correo electrónico, mensaje de WhatsApp u otro medio escrito, y
        realiza el pago del anticipo acordado. No se iniciará ningún trabajo sin confirmación
        escrita y pago inicial recibido.
      </p>

      <h2>4. Precios, Pagos y Facturación</h2>
      <p>
        Todos los precios publicados en el sitio web son estimaciones orientativas. El precio
        definitivo se establece en la cotización personalizada de cada Proyecto.
      </p>
      <ul>
        <li>
          <strong>Anticipo:</strong> Se requerirá un anticipo del 50% del valor total del Proyecto
          para iniciar los trabajos, salvo acuerdo distinto por escrito.
        </li>
        <li>
          <strong>Pago final:</strong> El 50% restante deberá abonarse antes de la entrega final
          del Proyecto y/o la publicación del sitio web.
        </li>
        <li>
          Los precios se expresan en dólares estadounidenses (USD) salvo indicación contraria.
        </li>
        <li>
          Los pagos se realizarán por los medios acordados (transferencia SINPE, depósito bancario,
          PayPal u otro). El comprobante de pago deberá ser enviado por el Cliente.
        </li>
        <li>
          La Agencia se reserva el derecho de suspender o cancelar el Proyecto ante mora de más de
          10 días hábiles en cualquier pago acordado.
        </li>
        <li>
          Los anticipos no son reembolsables si el Cliente desiste del Proyecto una vez iniciado
          el trabajo.
        </li>
      </ul>

      <h2>5. Plazos de Entrega</h2>
      <p>
        Los plazos de entrega son estimaciones acordadas en la propuesta. La Agencia hará lo
        posible por cumplirlos, pero no garantiza fechas exactas ante:
      </p>
      <ul>
        <li>Demoras en la entrega de contenido, imágenes o información por parte del Cliente.</li>
        <li>Cambios de alcance solicitados durante el desarrollo.</li>
        <li>Circunstancias de fuerza mayor.</li>
      </ul>
      <p>
        Si el Cliente no entrega los materiales necesarios en un plazo de 15 días hábiles desde
        la solicitud, la Agencia podrá pausar el Proyecto sin responsabilidad.
      </p>

      <h2>6. Revisiones y Cambios de Alcance</h2>
      <p>
        Cada Proyecto incluye el número de rondas de revisión especificado en la propuesta
        (generalmente dos rondas). Revisiones adicionales o cambios de alcance se cotizarán
        y facturarán por separado.
      </p>
      <p>
        Se entiende por "revisión" la retroalimentación sobre el diseño o funcionalidad existente.
        Un cambio de alcance incluye nuevas funcionalidades, secciones adicionales o
        modificaciones sustanciales al concepto original aprobado.
      </p>

      <h2>7. Propiedad Intelectual</h2>
      <p>
        Una vez recibido el pago total del Proyecto, la Agencia cede al Cliente los derechos
        de uso sobre los Entregables finales (código fuente, diseños). Esta cesión es no
        exclusiva y está limitada al uso del sitio web del Cliente.
      </p>
      <ul>
        <li>
          La Agencia conserva el derecho de incluir el Proyecto en su portafolio y materiales
          de marketing, salvo indicación expresa y escrita del Cliente en contrario.
        </li>
        <li>
          Las herramientas, librerías de código abierto, fuentes tipográficas y activos de
          terceros utilizados se rigen por sus respectivas licencias, que son responsabilidad
          del Cliente conocer y cumplir.
        </li>
        <li>
          El Cliente es responsable de contar con los derechos de uso de todo el contenido que
          proporcione (textos, imágenes, logos, videos).
        </li>
      </ul>

      <h2>8. Obligaciones del Cliente</h2>
      <ul>
        <li>Proporcionar toda la información, contenido y materiales necesarios de forma oportuna.</li>
        <li>Designar a un representante con capacidad de toma de decisiones para el Proyecto.</li>
        <li>Revisar y aprobar (o rechazar con comentarios específicos) los Entregables en un plazo de 7 días hábiles.</li>
        <li>Garantizar que el contenido entregado no infringe derechos de terceros ni contiene material ilegal.</li>
        <li>Realizar los pagos en los plazos acordados.</li>
      </ul>

      <h2>9. Dominio y Hospedaje</h2>
      <p>
        La Agencia puede orientar al Cliente en la adquisición de dominio y hospedaje, pero
        estos servicios se contratan directamente con terceros proveedores. La Agencia no asume
        responsabilidad por interrupciones, pérdida de datos o problemas derivados del
        proveedor de hospedaje.
      </p>
      <p>
        Se recomienda al Cliente renovar oportunamente su dominio y plan de hospedaje para
        evitar la caída del sitio web.
      </p>

      <h2>10. Garantía y Soporte Post-Entrega</h2>
      <p>
        La Agencia garantiza la corrección de errores funcionales (bugs) detectados dentro de
        los 30 días naturales posteriores a la entrega final del Proyecto, sin costo adicional,
        siempre que dichos errores sean imputables al trabajo de la Agencia.
      </p>
      <p>
        Esta garantía no cubre modificaciones de contenido, cambios de diseño, actualizaciones
        de plataforma ni errores generados por terceros. El soporte continuado más allá de
        este período deberá contratarse por separado.
      </p>

      <h2>11. Limitación de Responsabilidad</h2>
      <p>
        La Agencia no será responsable por daños indirectos, pérdidas de negocio, lucro cesante
        ni daños consecuentes derivados del uso o imposibilidad de uso del sitio web desarrollado.
        La responsabilidad máxima de la Agencia en cualquier reclamación no superará el importe
        total pagado por el Cliente para el Proyecto específico en cuestión.
      </p>

      <h2>12. Terminación del Contrato</h2>
      <p>
        Cualquiera de las partes podrá dar por terminado el contrato mediante comunicación
        escrita con al menos 5 días hábiles de anticipación. En caso de terminación:
      </p>
      <ul>
        <li>El Cliente pagará el trabajo efectivamente realizado hasta la fecha de terminación, según el avance proporcional del Proyecto.</li>
        <li>Los anticipos no son reembolsables si el trabajo ya fue iniciado.</li>
        <li>La Agencia entregará los Entregables completados hasta ese momento.</li>
      </ul>

      <h2>13. Fuerza Mayor</h2>
      <p>
        Ninguna de las partes será responsable por retrasos o incumplimientos causados por
        eventos fuera de su control razonable, incluyendo desastres naturales, fallos de
        infraestructura de internet, actos gubernamentales u otras circunstancias de fuerza mayor.
      </p>

      <h2>14. Ley Aplicable y Jurisdicción</h2>
      <p>
        El presente contrato se rige por las leyes de la República de Costa Rica, incluyendo
        el Código de Comercio, la Ley de Firma Electrónica (Ley 9048) y demás normativa
        aplicable. Cualquier controversia se someterá a la jurisdicción de los tribunales
        competentes de San José, Costa Rica.
      </p>

      <h2>15. Modificaciones</h2>
      <p>
        La Agencia se reserva el derecho de modificar estos Términos en cualquier momento.
        Los cambios entrarán en vigor desde su publicación en el sitio web. Para proyectos en
        curso se aplicará la versión vigente al momento de la firma del contrato.
      </p>

      <h2>16. Contacto</h2>
      <p>
        Para consultas sobre estos Términos: <strong>quantum.sites.cr@gmail.com</strong>
      </p>
    </div>
  );
}

// ── POLÍTICA DE PRIVACIDAD ────────────────────────────────────────────────────
function Privacidad() {
  return (
    <div className="legal-body">
      <p className="legal-meta">Última actualización: {lastUpdated}</p>
      <p>
        La presente Política de Privacidad describe cómo <strong>Quantum Sites</strong>{" "}
        (en adelante, "la Agencia", "nosotros", "nuestro") recopila, utiliza, almacena y
        protege sus datos personales, de conformidad con la{" "}
        <strong>Ley N.° 8968 de Protección de la Persona frente al Tratamiento de sus Datos
        Personales</strong> y su Reglamento, vigentes en la República de Costa Rica, así como
        con las regulaciones aplicables del Reglamento General de Protección de Datos (GDPR)
        de la Unión Europea en lo que resulte procedente.
      </p>

      <h2>1. Responsable del Tratamiento</h2>
      <ul>
        <li><strong>Nombre:</strong> Quantum Sites</li>
        <li><strong>País:</strong> Costa Rica</li>
        <li><strong>Correo electrónico:</strong> quantum.sites.cr@gmail.com</li>
        <li><strong>Instagram:</strong> @quantum.sites.cr</li>
      </ul>

      <h2>2. Datos Personales que Recopilamos</h2>
      <p>Podemos recopilar las siguientes categorías de datos personales:</p>

      <h3>2.1 Datos proporcionados directamente por usted</h3>
      <ul>
        <li>Nombre completo</li>
        <li>Dirección de correo electrónico</li>
        <li>Número de teléfono o WhatsApp</li>
        <li>Nombre y descripción de su negocio o empresa</li>
        <li>Información contenida en mensajes o formularios de contacto</li>
      </ul>

      <h3>2.2 Datos recopilados automáticamente</h3>
      <ul>
        <li>Dirección IP (de forma anonimizada)</li>
        <li>Tipo de dispositivo y navegador</li>
        <li>Páginas visitadas y tiempo de permanencia (mediante Vercel Analytics)</li>
        <li>País o región de acceso</li>
      </ul>

      <p>
        <strong>No recopilamos</strong> datos sensibles como datos de salud, orientación sexual,
        origen étnico, creencias religiosas ni información financiera bancaria.
      </p>

      <h2>3. Finalidades del Tratamiento</h2>
      <p>Sus datos personales se utilizan para:</p>
      <ul>
        <li>Responder a sus consultas y solicitudes de cotización.</li>
        <li>Ejecutar el contrato de prestación de servicios y gestionar el Proyecto.</li>
        <li>Enviar comunicaciones relacionadas con el Proyecto en curso.</li>
        <li>Emitir facturas y gestionar cobros.</li>
        <li>Mejorar nuestros servicios mediante análisis estadístico agregado y anonimizado.</li>
        <li>Cumplir con obligaciones legales y contables aplicables.</li>
      </ul>
      <p>
        <strong>No utilizamos</strong> sus datos para envío de publicidad no solicitada
        (spam) ni los compartimos con terceros para fines comerciales ajenos a la prestación
        del servicio contratado.
      </p>

      <h2>4. Base Jurídica del Tratamiento</h2>
      <ul>
        <li><strong>Consentimiento:</strong> Cuando usted nos contacta voluntariamente a través del formulario o por WhatsApp/email.</li>
        <li><strong>Ejecución contractual:</strong> Cuando es necesario para prestar el servicio contratado.</li>
        <li><strong>Obligación legal:</strong> Para cumplir con requisitos fiscales y legales de Costa Rica.</li>
        <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios mediante análisis anonimizado del uso del sitio.</li>
      </ul>

      <h2>5. Conservación de los Datos</h2>
      <ul>
        <li>Datos de contacto y consultas: 2 años desde el último contacto.</li>
        <li>Datos contractuales y de facturación: 5 años desde la finalización del contrato, conforme a la normativa fiscal costarricense.</li>
        <li>Datos de analítica web: 13 meses en forma anonimizada.</li>
      </ul>
      <p>
        Transcurridos estos plazos, los datos serán eliminados de forma segura o anonimizados
        de manera irreversible.
      </p>

      <h2>6. Compartición con Terceros</h2>
      <p>Sus datos podrán ser accedidos por los siguientes terceros, únicamente en la medida necesaria:</p>
      <ul>
        <li><strong>Resend Inc.:</strong> Plataforma de envío de emails transaccionales (datos mínimos: nombre y email del remitente).</li>
        <li><strong>Vercel Inc.:</strong> Proveedor de hospedaje y analítica web (datos anonimizados de navegación).</li>
        <li><strong>Meta Platforms (Instagram):</strong> Si usted nos contacta mediante Instagram, aplican los términos de dicha plataforma.</li>
        <li><strong>Autoridades competentes:</strong> Cuando sea requerido por ley o resolución judicial.</li>
      </ul>
      <p>
        Todos los proveedores utilizados cuentan con sus propias políticas de privacidad y se
        comprometen a tratar los datos conforme a la normativa aplicable.
      </p>

      <h2>7. Transferencias Internacionales de Datos</h2>
      <p>
        Los proveedores de tecnología (Vercel, Resend) pueden procesar datos en servidores
        ubicados en Estados Unidos u otros países. Estas transferencias se realizan con las
        garantías contractuales y técnicas adecuadas (cláusulas contractuales tipo, certificaciones
        de privacidad) según la normativa de protección de datos aplicable.
      </p>

      <h2>8. Sus Derechos (Ley 8968)</h2>
      <p>
        De conformidad con la Ley N.° 8968 y su Reglamento, usted tiene derecho a:
      </p>
      <ul>
        <li><strong>Acceso:</strong> Solicitar información sobre los datos personales que poseemos sobre usted.</li>
        <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
        <li><strong>Supresión ("derecho al olvido"):</strong> Solicitar la eliminación de sus datos, salvo cuando exista obligación legal de conservarlos.</li>
        <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para determinadas finalidades.</li>
        <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado y de uso común.</li>
        <li><strong>Limitación del tratamiento:</strong> Solicitar que suspendamos temporalmente el uso de sus datos.</li>
        <li><strong>Revocación del consentimiento:</strong> Retirar su consentimiento en cualquier momento, sin que ello afecte la licitud del tratamiento previo.</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, envíe su solicitud a{" "}
        <strong>quantum.sites.cr@gmail.com</strong> indicando su nombre, derecho que ejerce y
        motivo. Responderemos en un plazo máximo de <strong>10 días hábiles</strong>.
      </p>
      <p>
        Si considera que el tratamiento de sus datos infringe la normativa, puede presentar
        una reclamación ante la{" "}
        <strong>Agencia de Protección de Datos de los Habitantes (PRODHAB)</strong>:{" "}
        <strong>www.prodhab.go.cr</strong>.
      </p>

      <h2>9. Seguridad de los Datos</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger sus datos personales
        frente a accesos no autorizados, pérdida, alteración o divulgación, incluyendo:
      </p>
      <ul>
        <li>Transmisión cifrada mediante HTTPS/TLS en todo el sitio.</li>
        <li>Acceso restringido a datos personales al personal estrictamente necesario.</li>
        <li>Headers de seguridad HTTP (CSP, HSTS, X-Frame-Options).</li>
        <li>Variables de entorno para proteger credenciales y datos sensibles del código fuente.</li>
      </ul>
      <p>
        No obstante, ningún sistema es completamente infalible. En caso de brecha de seguridad
        que afecte sus datos, le notificaremos conforme a lo exigido por la normativa aplicable.
      </p>

      <h2>10. Menores de Edad</h2>
      <p>
        Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos
        conscientemente datos de menores. Si usted es padre, madre o tutor y cree que su
        hijo/a nos ha proporcionado datos personales, contáctenos para proceder a su eliminación.
      </p>

      <h2>11. Modificaciones a esta Política</h2>
      <p>
        Podemos actualizar esta Política periódicamente. La versión vigente siempre estará
        disponible en este sitio web con la fecha de última actualización. Cambios sustanciales
        serán comunicados a los clientes activos por correo electrónico.
      </p>

      <h2>12. Contacto para Asuntos de Privacidad</h2>
      <p>
        Para cualquier consulta sobre privacidad o protección de datos:{" "}
        <strong>quantum.sites.cr@gmail.com</strong>
      </p>
    </div>
  );
}

// ── POLÍTICA DE COOKIES ───────────────────────────────────────────────────────
function Cookies() {
  return (
    <div className="legal-body">
      <p className="legal-meta">Última actualización: {lastUpdated}</p>
      <p>
        La presente Política de Cookies explica qué son las cookies, qué tipos utilizamos en{" "}
        <strong>quantumsites.cr</strong> y cómo puede gestionarlas.
      </p>

      <h2>1. ¿Qué son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que un sitio web almacena en su dispositivo
        cuando lo visita. Se utilizan ampliamente para que los sitios funcionen correctamente,
        mejorar la experiencia del usuario y proporcionar información analítica a los operadores
        del sitio.
      </p>

      <h2>2. Cookies que Utilizamos</h2>

      <h3>2.1 Cookies Estrictamente Necesarias</h3>
      <p>
        Son esenciales para el funcionamiento básico del sitio. Sin ellas, el sitio no puede
        funcionar correctamente. No requieren su consentimiento.
      </p>
      <table className="legal-table">
        <thead>
          <tr><th>Nombre</th><th>Proveedor</th><th>Finalidad</th><th>Duración</th></tr>
        </thead>
        <tbody>
          <tr><td>__Host-next-auth.csrf-token</td><td>Next.js</td><td>Seguridad CSRF</td><td>Sesión</td></tr>
          <tr><td>va-*</td><td>Vercel</td><td>Identificador anónimo de sesión de analítica</td><td>1 año</td></tr>
        </tbody>
      </table>

      <h3>2.2 Cookies Analíticas</h3>
      <p>
        Usamos <strong>Vercel Analytics</strong> para comprender cómo los visitantes interactúan
        con el sitio. Los datos recopilados son agregados y anonimizados — no permiten identificar
        a personas individuales.
      </p>
      <table className="legal-table">
        <thead>
          <tr><th>Nombre</th><th>Proveedor</th><th>Finalidad</th><th>Duración</th></tr>
        </thead>
        <tbody>
          <tr><td>va_id</td><td>Vercel Analytics</td><td>Análisis anónimo de visitas y comportamiento</td><td>13 meses</td></tr>
        </tbody>
      </table>

      <h3>2.3 Cookies de Terceros</h3>
      <p>
        Al hacer clic en los botones de Instagram o WhatsApp, usted será redirigido a plataformas
        de terceros (Meta Platforms, WhatsApp Inc.) que tienen sus propias políticas de cookies
        y privacidad. No controlamos dichas cookies.
      </p>

      <h2>3. Cookies que NO Utilizamos</h2>
      <p>
        <strong>Quantum Sites no utiliza</strong> cookies de publicidad, cookies de seguimiento
        entre sitios (cross-site tracking), píxeles de rastreo ni ningún mecanismo de
        identificación persistente con fines comerciales o publicitarios.
      </p>

      <h2>4. Gestión y Control de Cookies</h2>
      <p>Puede controlar y eliminar las cookies de las siguientes formas:</p>

      <h3>4.1 Desde su navegador</h3>
      <ul>
        <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
        <li><strong>Firefox:</strong> Preferencias → Privacidad y seguridad → Cookies y datos del sitio.</li>
        <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos del sitio web.</li>
        <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio.</li>
      </ul>

      <h3>4.2 Opt-out de Vercel Analytics</h3>
      <p>
        Vercel Analytics respeta la preferencia del navegador{" "}
        <code>Do Not Track (DNT)</code>. Si activa esta opción en su navegador, no se
        registrarán datos de analítica de su visita.
      </p>

      <h2>5. Consecuencias de Desactivar las Cookies</h2>
      <p>
        Deshabilitar las cookies estrictamente necesarias puede impedir el correcto
        funcionamiento del formulario de contacto y otras funcionalidades del sitio.
        Las cookies analíticas son opcionales y su desactivación no afecta su experiencia.
      </p>

      <h2>6. Consentimiento</h2>
      <p>
        Al continuar navegando por este sitio web, usted consiente el uso de las cookies
        descritas en esta política. Puede retirar su consentimiento en cualquier momento
        eliminando las cookies almacenadas desde la configuración de su navegador.
      </p>

      <h2>7. Actualizaciones</h2>
      <p>
        Esta Política de Cookies puede actualizarse para reflejar cambios en las tecnologías
        que utilizamos. Le recomendamos revisarla periódicamente.
      </p>

      <h2>8. Contacto</h2>
      <p>
        Consultas sobre cookies: <strong>quantum.sites.cr@gmail.com</strong>
      </p>
    </div>
  );
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function LegalPage() {
  const [active, setActive] = useState<LegalTab>("terminos");

  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#2b2b2b]/40">
          Aviso Legal
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] md:text-6xl">
          Documentos legales
        </h1>
        <p className="mt-4 max-w-xl text-[#2b2b2b]/55">
          Quantum Sites opera desde Costa Rica y se rige por la legislación costarricense.
          Estos documentos describen tus derechos y los nuestros.
        </p>
      </div>

      {/* Internal tab selector */}
      <div className="mb-10 flex flex-wrap gap-2 border-b border-[#2b2b2b]/10 pb-0">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`relative pb-4 text-sm font-medium transition-colors ${
              active === s.id
                ? "text-[#2b2b2b]"
                : "text-[#2b2b2b]/40 hover:text-[#2b2b2b]/70"
            }`}
          >
            {s.label}
            {active === s.id && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-[#2b2b2b]" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div key={active} className="tab-content">
        {active === "terminos" && <Terminos />}
        {active === "privacidad" && <Privacidad />}
        {active === "cookies" && <Cookies />}
      </div>
    </section>
  );
}
