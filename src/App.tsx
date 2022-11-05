import {
  Header, 
  Banner, 
  Benefits, 
  Features, 
  Billing, 
  CardDeal, 
  Testimonials, 
  Feedback, 
  Clients, 
  СallToAction, 
  Footer 
} from './components';

const App = () => (
  <div className="d-flex flex-column overflow-hidden min-vh-100">
    <Header />
     <main>
        <Banner />
        <Benefits />
        <Features />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Feedback /> 
        <Clients />
        <СallToAction />
    </main> 
    <Footer />
  </div>
)

export default App;