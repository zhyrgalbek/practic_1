import Cards from "../Cards/Cards";
import './Block.css';

function Block(props) {
    let users = props.users;
    return (
        <div className='block'>
            <h2 className='block-title'>Online Users 875/ 2,452</h2>
            <div className='CardLayout'>
                {
                    users.map(elem=>{
                       return <Cards user={elem} key={elem.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Block;