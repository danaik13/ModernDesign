import { Container } from 'react-bootstrap';
import { clients } from '../constants';
import { Client } from '../types';
import { Element } from 'react-scroll';

const Clients = () =>  (
  <section>
    <Element name="clients">
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <div className="d-flex flex-wrap flex-row justify-content-center align-items-center w-100">
            {clients.map((client: Client) => (
              <div key={client.id} className="d-flex flex-1 justify-content-center align-items-center w-100 m-4">
                <img src={client.logo} alt="client_logo" width={192}/>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Element>
  </section>
)

export default Clients;