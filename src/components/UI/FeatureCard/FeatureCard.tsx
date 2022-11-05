import classes from'./FeatureCard.module.scss';

interface PropsFeatureCard {
  icon: string;
  title: string;
  content: string;
  index: number;
}

const FeatureCard = ({ icon, title, content, index }: PropsFeatureCard) => (
  <div className={`d-flex ${classes.card} ${index !== 0 ? 'mt-4': ''}`}>
    <div className={`${classes.icon} d-flex justify-content-center align-items-center`}>
      <img src={icon} alt={title} width={32} height={32}/>
    </div>
    <div className="ms-3 flex-1">
      <h4 className="mb-2">
        {title}
      </h4>
      <p className="mb-0">
        {content}
      </p>
    </div>
  </div>
);

export default FeatureCard;