
export default function Card(props) {

    return <div onClick={event => props.handleClick(props.value)} className="card">
        <img src={props.image} alt={props.name} className='card-img' />
    </div>
}