import { CardsImg } from "../CardsImg/CardsImg";
import './Cards.css';

function Cards(props) {
    return (
        <div className='Cards'>
            <CardsImg img={props.user} background={props.user.wallpaper} />
            <h3 className='Cards-name'>{props.user.username}</h3>
            <div className='Cards-about'>
                about
            </div>
            <div className='Cards-text'>
                {props.user.userInfo}
            </div>
            <div className='Cards-emails'>
                <span className="emails">Web: <a href="htts://aaff/fefe/fefe">htts://aaff/fefe/fefe</a></span>
                <span className="emails">Twitter: <a href="htts://aaff/fefe/fefe">htts://aaff/fefe/fefe</a> </span>
            </div>
        </div>
    )
}

export default Cards;