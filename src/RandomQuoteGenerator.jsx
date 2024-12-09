import React, { useState } from 'react'
import quotes from './quote'

const RandomQuoteGenerator = () => {

    const [quote, setQuote] = useState(quotes[0])

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random()*quotes.length)
        setQuote(quotes[randomIndex])
    }
  return (
    <>
    <div className='quote-container text-center'>
        <div className='quote-box'>
            <p className='quote-text'>{quote.quote}</p>
            <p className='quote-write'>{quote.writer}</p>
        </div>
        <button className='btn btn-primary mt-4' onClick={getRandomQuote}>Nouvelle citation</button>
    </div>
    <h1></h1>
    </>
  )
}

export default RandomQuoteGenerator