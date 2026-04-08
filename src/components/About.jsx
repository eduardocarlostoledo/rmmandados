import FramerWrapper from './FramerWrapper'

export default function About() {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FramerWrapper direction="left">
            <div className="relative">
              <img
                src="/img/movil-moto-rapido-paquete.png"
                alt="RM Mandados delivery rapido"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-2xl shadow-lg hidden sm:block">
                <p className="text-3xl font-extrabold">24/7</p>
                <p className="text-sm font-medium">Lunes a Lunes</p>
              </div>
            </div>
          </FramerWrapper>

          <FramerWrapper direction="right">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Quienes Somos</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary leading-tight">
                Tu aliado en mandados y delivery en Posadas
              </h2>
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                En RM Mandados nos especializamos en facilitar tu vida. Somos una empresa de
                cadeteria y mandados ubicada en Posadas, Misiones, Argentina, dedicada a
                realizar tus diligencias de manera rapida, confiable y eficiente.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Nuestra mision es ser el nexo que conecta tus necesidades diarias con soluciones
                practicas, ofreciendote mas tiempo para lo que realmente importa.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <img src="/img/reshot-icon-scooter-delivery-uc2x3qsbp4.svg" alt="" className="w-10 h-10 mb-3" />
                  <h4 className="font-bold text-primary">Mision</h4>
                  <p className="text-sm text-gray-500 mt-1">Brindar soluciones rapidas y confiables para satisfacer las necesidades de nuestros clientes.</p>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <img src="/img/reshot-icon-tracking-delivery-ta5z9nd7q2.svg" alt="" className="w-10 h-10 mb-3" />
                  <h4 className="font-bold text-primary">Vision</h4>
                  <p className="text-sm text-gray-500 mt-1">Ser la empresa lider en mandados y servicios de delivery en Posadas y la region.</p>
                </div>
              </div>
            </div>
          </FramerWrapper>
        </div>
      </div>
    </section>
  )
}
