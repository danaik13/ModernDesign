import { quotes } from '../../../assets/icons';
import classes from './FeedbackCard.module.scss';

interface PropsFeedbackCard {
  content: string;
  name: string;
  title: string;
  img: string;
  index: number;
}

const FeedbackCard = ({ content, name, title, img, index }: PropsFeedbackCard) => (
  <div className={`${classes.card} d-flex justify-content-between flex-wrap flex-colomn p-5 mt-md-0 ${index !== 0 ? "mt-5" : ""}`}>
    <img src={quotes} alt="double_quotes" width={42} height={27}/>
    <p className="text-white my-5">
      {content}
    </p>
    <div className="d-flex flex-row align-items-center">
      <img src={img} alt={name} width={48} height={48} />
      <div className="ms-4">
        <h4 className="text-white mb-1">
          {name}
        </h4>
        <p className="mb-0">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;