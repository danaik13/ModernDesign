import { Container } from 'react-bootstrap';
import { feedbacks } from '../constants';
import { IFeedback }  from '../types';
import FeedbackCard from './UI/FeedbackCard/FeedbackCard';

const Feedback = () =>  (
  <section>
    <Container>
      <div className="position-relative">
        <div className="position-absolute w-60 h-60 -end-50 rounded-full blue_gradient" />
        <div className="d-flex justify-content-between flex-wrap flex-lg-row flex-column">
          {feedbacks.map((feedback: IFeedback, index: number) => (
            <FeedbackCard key={feedback.id} {...feedback} index={index} />
        ))}
        </div>
      </div>
    </Container>
  </section>
)
  
  
  export default Feedback;