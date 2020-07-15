import {useLocation} from `./LocationDataProvider.js`

const allLocations = useLocation()

for (const location of allLocations) {
    console.log(location)
}