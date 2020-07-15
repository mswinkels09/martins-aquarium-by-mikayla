export const TipList = () => {
    const contentElement = document.querySelector(".content--right")
    const tips = useTip()

    contentElement.innerHTML += `
    <article class="tipList">
        All tips go here!
    </article>`
}