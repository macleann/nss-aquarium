import { getQuotes } from './QuotesDatabase.js'

export const QuoteList = () => {
    const quotes = getQuotes()

    let quoteHTMLString = 
    `<section class="quoteSection">
        <h3>Quotes from Martin</h3>
        <section class="quoteList">
            <section class="quoteListLeft">
                <ul>`

    for (let i = 0; i < 4; i++) {
        quoteHTMLString += 
                    `<li>${quotes[i].quote}</li>`
    }

    quoteHTMLString += 
                `</ul>
            </section>
            <section class="quoteListRight">
                <ul>`

    for (let j = 4; j < quotes.length; j++) {
        quoteHTMLString +=
                    `<li>${quotes[j].quote}</li>`
    }

    quoteHTMLString +=
                `</ul>
            </section>
        </section>
    </section>`
    
    return quoteHTMLString
}