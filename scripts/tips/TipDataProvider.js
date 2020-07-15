const tipCollection = [
    {
        text: "Skip your bait."
    },
    {
        text: "Keep hooks sharp."
    },
    {
        text: "Always check water content and PH."
    },
    {
        text: "Choose an Appropriately Sized Tank."
    },
    {
        text: "Know Your Fish."
    },
    {
        text: "Cycle Your Tank."
    },
    {
        text: "Perform Regular Water Changes."
    }
]

export const useTip = () => {
    return tipCollection.slice()
}