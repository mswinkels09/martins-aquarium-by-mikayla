export const QuoteAsHTML = (quoteObj) => {
    return `<section class="quote">
                <div class="quote__text">${quoteObj.text}</div>
                <div class="quote__author"><em>${quoteObj.author}</em></div>
                
            </section>`
}