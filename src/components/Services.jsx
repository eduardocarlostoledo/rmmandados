import FramerWrapper from './FramerWrapper'

const services = [
  {
    icon: '/img/reshot-icon-delivery-on-bike-qkn7rgdu6p.svg',
    title: 'Mandados Generales',
    description: 'Desde tramites personales hasta la entrega de productos, nos encargamos de todo.',
  },
  {
    icon: '/img/reshot-icon-order-delivery-pr96zlv7ay.svg',
    title: 'Pagos de Servicios',
    description: 'Nos ocupamos de que tus cuentas esten al dia sin que tengas que salir de casa.',
  },
  {
    icon: '/img/reshot-icon-delivery-protection-ks4zr2n9y7.svg',
    title: 'Compras en Tiendas',
    description: 'Necesitas algo del supermercado o de una tienda local? Lo compramos por ti.',
  },
  {
    icon: '/img/reshot-icon-cash-on-delivery-mu97e26y8f.svg',
    title: 'Delivery',
    description: 'Recibe lo que quieras, donde quieras, en el menor tiempo posible.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FramerWrapper>
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Nuestros Servicios</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Que hacemos por vos
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
              Soluciones rapidas y confiables para simplificar tu dia a dia en Posadas.
            </p>
          </div>
        </FramerWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FramerWrapper key={service.title} delay={index * 0.1}>
              <div className="group bg-light rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-2xl flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <img src={service.icon} alt={service.title} className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            </FramerWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
