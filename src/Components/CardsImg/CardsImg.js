import './CardsImg.css';

export const CardsImg = (props) => {
    const style={
        background: props.background
    }
    return (
        <div className='Cards-img' style={style}>
            <div className='ramka'>
                <img src={props.img.profilePic} />
            </div>
        </div>
    )
}