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
  –°allToAction, 
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
        <–°allToAction />
    </main> 
    <Footer />
  </div>
)

export default App;