import { arrowUp } from '../../../assets/icons';
import classes from './GetStarted.module.scss';

const GetStarted = () => (
    <div className={`${classes['wrapper-blue-gradient']} d-flex justify-content-center align-items-start`}>
      <div className={`${classes.wrapper} d-flex justify-content-center align-items-center flex-column w-100 h-100 rounded-circle`}>
        <div className="d-flex justify-content-center align-items-center flex-row">
          <p className="mb-0">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrow-up" width={23} height={23} className="object-contain" />
        </div>
        <p className="mb-0">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
  
  export default GetStarted;
  