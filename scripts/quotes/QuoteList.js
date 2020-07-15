import {useQuote} from "./QuoteDataProvider.js"
import {QuoteAsHTML} from "./Quote.js"


export const QuoteList = () => {

    const contentElement = document.querySelector(".quotes")
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for (const quoteObj of quotes) {
       quoteHTMLRepresentations += QuoteAsHTML(quoteObj) 
    }

    contentElement.innerHTML += `
    <article>
        ${quoteHTMLRepresentations}
    </article>`
}