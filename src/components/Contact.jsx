import FramerWrapper from './FramerWrapper'

export default function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FramerWrapper>
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Contactanos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Como te ayudamos?
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Utiliza los siguientes medios de contacto para cualquier consulta sobre nuestros
              servicios de cadeteria, pagos, compras o delivery.
            </p>
          </div>
        </FramerWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <FramerWrapper delay={0}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Telefono / WhatsApp</h3>
              <a href="tel:+543764898906" className="text-gray-600 hover:text-secondary transition-colors text-lg">
                3764 89-8906
              </a>
            </div>
          </FramerWrapper>

          <FramerWrapper delay={0.1}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Ubicacion</h3>
              <p className="text-gray-600">Villa Sarita, Posadas, Misiones</p>
            </div>
          </FramerWrapper>

          <FramerWrapper delay={0.2}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 mx-auto mb-5 bg-secondary/10 rounded-2xl flex items-center justify-center">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Horario</h3>
              <p className="text-gray-600">Lunes a Lunes<br />08:00 a 00:00 hs</p>
            </div>
          </FramerWrapper>
        </div>

        <FramerWrapper delay={0.3}>
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Ubicacion RM Mandados - Villa Sarita, Posadas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14169.252!2d-55.9!3d-27.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be1b0d0c0001%3A0x1234567890abcdef!2sVilla%20Sarita%2C%20Posadas%2C%20Misiones!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FramerWrapper>
      </div>
    </section>
  )
}
