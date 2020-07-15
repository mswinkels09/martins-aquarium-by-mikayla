const quoteCollection =[
    {
        text: "Just keep swimming!",
        author: "Dory"
    },
    {
        text: "You don't have to live at the top of the reef to be a somebody.",
        author: "Shark Tale"
    },
    {
        text: "When something is too hard, there is always another way.",
        author: "Charlie"
    }
]

export const useQuote = () => {
    return quoteCollection.slice()
}