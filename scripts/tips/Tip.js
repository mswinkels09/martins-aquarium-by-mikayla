export const TipAsHTML = (tipObj) => {
    return `
        <aside class="tipList">
            <h2 class="tipListHeader">Yay Tips!</h2>
            <section class="tip">
                <div class="tip__text">${tipObj.text}</div>
            </section>
        </aside>`
}

