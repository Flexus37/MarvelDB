import './randomChar.scss'
import thor from '../../resources/img/thor.jpg'
import mjolnir from '../../resources/img/mjolnir.png'

const RandomChar = () => {
    return (
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={thor} alt="" />
                <div className="randomchar__info">

                    <h1 className="randomchar__name">thor</h1>
                    <p className="randomchar__desc">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>

                    <div className="randomchar__btns">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="#" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>

                </div>
            </div>

            <div className="randomchar__static">

            </div>
        </div>
    );
}

export default RandomChar;