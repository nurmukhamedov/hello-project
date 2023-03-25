import { Link } from 'react-router-dom';

import './Card.scss';
const Card = (props) => {


    const { data, img, title, summary, id } = props;

    return (
        <div className="card">
            <img src={img} alt="" className="card__images" />
            <div className="card__text">
                <p className="card__text--date">
                    {data}
                </p>
                <h3 className="card__text--h3">{title}</h3>
                <p className="card__text--p">{summary}</p>
                <Link to={`news/${id}`}>
                    Read More
                </Link>

            </div>
        </div >
    )
}

export default Card