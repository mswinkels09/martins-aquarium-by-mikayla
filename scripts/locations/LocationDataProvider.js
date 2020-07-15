const locationCollection = [
    {
        image: "https://www.azocleantech.com/images/news/ImageForNews_26806_1575299634378640.jpg",
        name: "Coral Reef",
        description: "A coral reef is an underwater ecosystem characterized by reef-building corals. Reefs are formed of colonies of coral polyps held together by calcium carbonate. Most coral reefs are built from stony corals, whose polyps cluster in groups.",
    },
    {
        image: "https://www.forestsuites.com/i/SITE_170315_17005325_XP7M1/content/CMS_190423_14211154_BLG15/8B33DF5E-061E-9638-323576857F129289.JPG",
        name: "Lake Tahoe",
        description: "Lake Tahoe is a large freshwater lake in the Sierra Nevada Mountains, straddling the border of California and Nevada. It’s known for its beaches and ski resorts. On the southwest shore, Emerald Bay State Park contains the 1929 Nordic-style mansion Vikingsholm. Along the lake’s northeast side, Lake Tahoe Nevada State Park includes Sand Harbor Beach and Spooner Lake, a gateway to the long-distance Tahoe Rim Trail.",
    },
    {
        image: "https://www.planetware.com/wpimages/2019/12/hawaii-in-pictures-beautiful-places-to-photograph-hanauma-bay-oahu.jpg",
        name: "Hawaii",
        description: "Hawaii's diverse natural scenery, warm tropical climate, abundance of public beaches, oceanic surroundings, and active volcanoes make it a popular destination for tourists, surfers, biologists, and volcanologists. Because of its central location in the Pacific and 19th-century labor migration, Hawaii's culture is strongly influenced by North American and East Asian cultures, in addition to its indigenous Hawaiian culture.",
    }
]

export const useLocation = () => {
    return locationCollection.slice()
}