import {FishList} from "./fish/FishList.js"
import {useTip} from "./tips/TipDataProvider.js"

const allTheTips = useTip()

for (const tip of allTheTips) {
    console.log(tip)
}

FishList()
