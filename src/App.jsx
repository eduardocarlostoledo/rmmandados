import { HelmetProvider, Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Values from './components/Values'
import WorkWithUs from './components/WorkWithUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>RM Mandados - Cadeteria y Delivery en Posadas, Misiones</title>
        <meta name="description" content="RM Mandados: cadeteria, pagos de servicios, compras y delivery en Posadas, Misiones. Rapidos, confiables y disponibles de lunes a lunes de 08:00 a 00:00." />
        <meta name="keywords" content="mandados, cadeteria, delivery, posadas, misiones, pagos de servicios, compras, cadete" />
        <meta property="og:title" content="RM Mandados - Cadeteria y Delivery en Posadas" />
        <meta property="og:description" content="Hacemos tus mandados. Cadeteria, pagos de servicios, compras y delivery en Posadas, Misiones." />
        <meta property="og:image" content="/img/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rmmandados.com" />
      </Helmet>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Values />
        <WorkWithUs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </HelmetProvider>
  )
}

export default App
