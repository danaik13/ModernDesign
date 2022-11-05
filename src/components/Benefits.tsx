import { Container } from 'react-bootstrap';
import { benefits } from '../constants';
import { Benefit } from '../types';

const Benefits = () =>  (
  <section >
    <Container>
      <div className="d-flex flex-wrap flex-md-row flex-column mt-4">
        {benefits.map((benefit: Benefit) => (
          <div key={benefit.id} className="d-flex flex-1 m-2 justify-content-start align-items-center">
            <h3 className="text-white mb-0">
              {benefit.value}
            </h3>
            <p className="text-gradient ms-3 mb-0">
              {benefit.title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
)

export default Benefits;