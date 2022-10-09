import { Link } from 'react-router-dom'
import cardImg from './InfoPageImgs/Cards.png'

export default function InfoPage() {
  return (

    <article className='info-page'>
      <h1>How to use <span className='info-imp'>Blackjack Counter</span></h1>
      <div className='info-content'>
        <div>
          <p className='info-content-1'>Unlike other similar Blackjack "strategy" websites this page only <span className='info-imp'>keeps track of the card count</span> that usually gives you a small <span className='info-imp'>advantage</span> against the "House".
            As soon as you start playing , every card being displayed on the table <span className='info-imp'>must be clicked</span> so that the correct count is being shown to the user.
            When the table has a <span className='info-imp'>negative count</span> the chances of you <span className='info-imp'>losing the hand</span> and the <span className='info-imp'>House gaining an advantage on you</span> increase notably.
            Same thing applies <span className='info-imp'>if your count is close to 0</span> (+ or - 1). In this case the best thing one can do is <span className='info-imp'>decrease the betting ammount to its minimum value</span> for as long as the count stays in between those values.
            At some point the count is likely to be <span className='info-imp'>over +2</span>. This is the time for you to <span className='info-imp'>start betting more than minimum</span> cause this is when the balances between you and the House start to change; <span className='info-imp'>the yoke starts leaning towards your side</span> .
            Nonetheless , it is up to <span className='info-imp'>YOU</span> how high the next bet will be and how you manage the edge you gain aginst the Croupier in this "battle".</p>
          <p className='info-content-2'>So, in the end this website is a <span className='info-imp'>tool</span> for all Blackjack strategists and enjoyers out there and it works really well <span className='info-imp'>complemantory</span> with other strategy sites.
            Strategy will tell you what tactics to follow when specific cards are on the table and <span className='info-imp'>Blackjack Counter will help you decide how high the bet will be</span>. 
            <br></br>Don't forget to play <span className='responsibly'>responsibly</span> and <span className='fun'>HAVE FUN!</span></p>
        </div>
        <img src={cardImg} alt="playing-cards" className='info-cards' />
      </div>
      <p className='p-link'>
        <Link to="/" className='link'>Home</Link>
      </p>
    </article>
  )
}