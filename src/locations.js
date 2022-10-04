const locations = [
    // {
    //     name: "51st North Taproom",
    //     address: '704 51st Ave. N., Nashville, Tennessee 37209',
    //     website: "https://www.51northtaproom.com/",
    //     logo: "../logos/51.png",
    //     logoAlt: "51st N Taproom logo",
    //     location: {
    //         lat: 36.1559,
    //         lng: -86.8483
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "yes"
    // },

    {
        name: "Bringle's Smoking Oasis",
        address: '4901 Centennial Blvd., Nashville, Tennessee 37209',
        website: "https://www.bringlessmokingoasis.com/",
        logo: "../logos/Bringles.png",
        logoAlt: "Bringles logo",
        location: {
            lat: 36.1624,
            lng: -86.8470
        },
        special: '$2.00 off draft beers',
        dogFriendly: "yes",
        patio: "yes"
    },

    // {
    //     name: "Czann's Brewing Company",
    //     address: '4909 Indiana Ave., Nashville, Tennessee 37209',
    //     website: "http://www.czanns.com/",
    //     logo: "../logos/Czanns_Logo.jpeg",
    //     logoAlt: "Czanns logo",
    //     location: {
    //         lat: 36.1564,
    //         lng: -86.8472
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "yes"
    // },

    // {
    //     name: "El Paseo Cantina",
    //     website: "https://www.elpaseonashville.com/" ,
    //     logo: "../logos/Paseo.png",
    //     logoAlt: "El Paseo logo",
    //     address: '905 51st Ave. N., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.1580,
    //         lng: -86.8493
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "yes",
    //     patio: "yes"
    // },

    {
        name: "Fat Bottom Brewery",
        website: "https://fatbottombrewing.com/",
        logo: "../logos/Fat_Bottom_Logo.png",
        logoAlt: "Fat Bottom Brewing logo",
        address: '800 44th Ave. N., Nashville, Tennessee 37209',
        location: {
            lat: 36.1572,
            lng: -86.83932
        },
        special: 'Half-price draft beers',
        dogFriendly: "yes",
        patio: "yes"
    },

    // {
    //     name: "Frothy Monkey",
    //     website: "https://frothymonkey.com/nations/",
    //     logo: "../logos/Frothy.png",
    //     logoAlt: "Frothy Monkey logo",
    //     address: '1400 51st Ave. N., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.16256,
    //         lng: -86.84895
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "yes"
    // },

    {
        name: "Harding House",
        website: "http://www.hardinghousebrew.com/",
        logo: "../logos/HH.png",
        logoAlt: "Harding House logo",
        address: '904 51st Ave. N., Nashville, Tennessee 37209',
        location: {
            lat: 36.1580,
            lng: -86.8485
        },
        special: '$4.00 pints',
        dogFriendly: "yes",
        patio: "yes"
    },

    // {
    //     name: "Maru",
    //     website: "https://www.maru-nashville.com/",
    //     logo: "../logos/Maru.png",
    //     logoAlt: "Maru logo",
    //     address: '5511 Centennial Blvd., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.1661,
    //         lng: -86.8557
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "yes"
    // },

    // {
    //     name: "Midnight Oil",
    //     website: "https://www.midnightoilnash.com/",
    //     logo: "../logos/Midnight.png",
    //     logoAlt: "Midnight Oil logo",
    //     address: '71310 51st Ave. N., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.1618,
    //         lng: -86.8487
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "yes"
    // },

    // {
    //     name: "Nations Bar and Grill",
    //     website: "http://www.nationsbarandgrill.com/",
    //     logo: "../logos/The_Nations_Bar_Grill_Final_Logo.png",
    //     logoAlt: "Nations Bar and Grill logo",
    //     address: '705 51st Ave. N., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.1558,
    //         lng: -86.8491
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "yes",
    //     patio: "yes"
    // },

    // {
    //     name: "Nicky's Coal Fired",
    //     website: "https://www.nickysnashville.com/",
    //     logo: "../logos/Nicky.png",
    //     logoAlt: "Nickys logo",
    //     address: '5026 Centennial Blvd., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.16245,
    //         lng: -86.84871
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "yes"
    // },

    // {
    //     name: "Pennington Distilliing Co.",
    //     website: "https://penningtondistillingco.com/",
    //     logo: "../logos/Penn.png",
    //     logoAlt: "Pennington logo",
    //     address: '900 44th Ave. N., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.1585,
    //         lng: -86.8396
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "no"
    // },

    // {
    //     name: "Red Bicycle",
    //     website: "https://redbicyclecoffee.com/" ,
    //     logo: "../logos/RB.png",
    //     logoAlt: "Red Bicycle logo",
    //     address: '712 51st Ave. N., Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.1565,
    //         lng: -86.8486
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "yes"
    // },

    {
        name: "Southern Grist Brewing Company",
        website: "https://www.southerngristbrewing.com/",
        logo: "../logos/southern_grist.jpg" ,
        logoAlt: "Southern Grist logo",
        address: '5012 Centennial Blvd., Nashville, Tennessee 37209',
        location: {
            lat: 36.1626,
            lng: -86.8480
        },
        special: 'Add special here',
        dogFriendly: "yes",
        patio: "yes"
    },

    {
        name: "The Silo Market",
        website: "https://www.thesilomarket.com/",
        logo: "../logos/silo_market.png",
        logoAlt: "The Silo Market logo",
        address: "5500 Centennial Blvd Suite A, Nashville, TN 37209",
        location: {
            lat: 36.1655,
            lng: -86.8542
        },
        special: "$2.00 off draft beers"
    }

    // {
    //     name: "The Centennial",
    //     website: "https://www.facebook.com/centennial5115/",
    //     logo: "../logos/Centennial.png",
    //     logoAlt: "Centennial logo",
    //     address: '5115 Centennial Blvd, Nashville, Tennessee 37209',
    //     location: {
    //         lat: 36.1628,
    //         lng: -86.8501
    //     },
    //     special: 'Add special here',
    //     dogFriendly: "no",
    //     patio: "no"
    // },
]

export default locations;