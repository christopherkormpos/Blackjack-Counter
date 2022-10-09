import React from 'react'
import Card from './Card'
import data from '../data.js'


export default function Main(){
const [count, setCount] = React.useState(0)

const handleClick = value =>{
    setCount(prevCount => prevCount + value)
    
}
const restartCount = value =>{
    setCount(prevCount => 0)
    
}

    const cards = () => {
        const row1 = data.slice(0,5)
        const row2 = data.slice(5,10)
        const row3 = data.slice(10,13)
        return (
        <div>
            <div className='row'>
                {
                    row1.map( card =>
                    <Card 
                        handleClick = {handleClick}
                        key = {card.id}
                        image = {card.imageSrc}
                        value = {card.value}
                        name = {card.name}
                    />)
                }
            </div>
            <div className='row'>
                {
                    row2.map( card =>
                    <Card 
                        handleClick = {handleClick}
                        key = {card.id}
                        image = {card.imageSrc}
                        value = {card.value}
                        name = {card.name}
                    />)
                }
            </div>
            <div className='row'>
                {
                    row3.map( card =>
                    <Card 
                        handleClick = {handleClick}
                        key = {card.id}
                        image = {card.imageSrc}
                        value = {card.value}
                        name = {card.name}
                    />)
                }
            </div>
        </div> )
    }

    return <div className='main'>
        <h3>Select the current cards being played on the table</h3>
        <div className='card-component'>
        {cards()}
        </div>
        <section>
        <h1>Current count is : {count}</h1>
        <div></div>
        <button onClick={restartCount} className='restart-button'>Restart Count</button>
        </section>
    </div>
}