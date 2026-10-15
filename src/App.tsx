import { Audience } from './components/Audience'
import { Compare } from './components/Compare'
import { DocsComposition } from './components/DocsComposition'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LeadForm } from './components/LeadForm'
import { OrderSteps } from './components/OrderSteps'
import { Process } from './components/Process'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <DocsComposition />
        <Compare />
        <Audience />
        <OrderSteps />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  )
}

export default App
