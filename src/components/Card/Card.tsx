import styles from './Card.module.css';
import img from '../../assets/097fbdbabc0ee9f3a8783847b8e9e409.jpg'
import iconMessages from '../../assets/icons/messages.svg'
import iconUsers from '../../assets/icons/profile-2user.svg'

function Card({ pinned = false }) {
  if (pinned) return <div className={ `${ styles.card } ${ styles.pinned } d-col-3 m-col-6` }>
    <div className={ `${ styles.mainImage } d-col-12` }>
      <img src={ img } alt="a"/>
    </div>
    <div className={ `newsPreview d-col-12` }>
      <div className="details">
        <span className="category">catName</span>
        <div className="counters">
          <span className="comments"><img src={ iconMessages } alt="icon"></img> 7</span>
          <span className="views"><img src={ iconUsers } alt="icon"></img> 500</span>
        </div>
      </div>
      <h3>News Main Title</h3>
      <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
    </div>
  </div>

  return (
      <div className="flex-grid">
        <div className={ `${ styles.card } d-col-12 m-col-12` }>
          <div className={ `${ styles.mainImage } d-col-3 m-col-6` }>
            <img src={ img } alt="a"/>
          </div>
          <div className={ `newsPreview d-col-9 m-col-6` }>
            <div className="details">
              <span className="category">catName</span>
              <div className="counters">
                <span className="comments"><img src={ iconMessages } alt="icon"></img> 7</span>
                <span className="views"><img src={ iconUsers } alt="icon"></img> 500</span>
              </div>
            </div>
            <h3>News Main Title</h3>
            <div className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          </div>
        </div>
      </div>
  );
}

export default Card;