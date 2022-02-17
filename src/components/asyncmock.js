export const products = [
    {
        id: 1,
        name: 'Crash Bandicoot',
        version: 'Out of time',
        price: 35,
        img: "https://image.api.playstation.com/vulcan/img/rnd/202111/1918/psoOkDbYuMdr1RsJo6TpU6bg.png",
        category: 'Adventure',
        description: 'Crash Bandicoot 4: Its About Time is a 3D platforming video game published by Activision and developed by Toys for Bob. It is the fourth mainline title in the Crash Bandicoot series. It was first released on October 2nd, 2020 for the PlayStation 4, and Xbox One. And then in March 12th, 2021 for the PlayStation 5, Xbox Series X/S, Nintendo Switch, and on March 26th, 2021 for PC.', 
        plataforms: ['PS4', 'Xbox One', 'PS5', 'Xbox Series X/S', 'Nintendo Switch', 'PC'],
        publisher: 'Activision',
        mode: ['Single-player', 'Local: Multiplayer'],
    },
    {
        id: 2,
        name: 'Uncharted',
        version: 'The lost legacy',
        price: 22,
        img: "http://i.imgur.com/5I3RXH2.jpg",
        category: 'Action',
        description: 'It is a standalone expansion to Uncharted 4: A Thiefs End. Players control Chloe Frazer, who seeks the Tusk of Ganesh in the Western Ghats mountain ranges of India, with the help of ex-mercenary Nadine Ross, and prevent a ruthless warlord and his army of insurgents from igniting a civil war in the country.',
        plataforms: ['PS4', 'Microsoft Windows', 'PS5'],
        publisher: 'Sony Computer Entertainment',
        mode: ['Single-player', 'Local: Multiplayer'],
    },
    {
        id: 3,
        name: 'The last of us',
        version: '',
        price: 35,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWLl2KDY2BO65S2rTpGZmAG9giDAQzbV1idq6KsVy4tmKCgNTtNpN4cGqQdjFimj67DOk&usqp=CAU",
        category: 'Horror',
        description: 'Set in the post-apocalyptic United States, the game tells the story of survivors Joel and Ellie as they work together to survive their westward journey across what remains of the country to find a possible cure for the modern fungal plague that has nearly decimated the entire human race.',
        plataforms: ['PS3', 'PS4', 'PS5'],
        publisher: 'Sony Computer Entertainment',
        mode: ['Single-player'],
    },
    {   id: 4,
        name: 'Horizon',
        version: 'Zero dawn',
        price: 17,
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/05/horizon-zero-dawn-2335537.jpg?itok=8LKPWWbp",
        category: 'Adventure',
        description: 'Is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past. The player uses ranged weapons, a spear, and stealth to combat mechanical creatures and other enemy forces. A skill tree provides the player with new abilities and bonuses. The player can explore the open world to discover locations and take on side quests. It was released for the PlayStation 4 in 2017 and Microsoft Windows in 2020.',
        plataforms: ['PS4', 'PS5', 'Microsoft Windows'],
        publisher: 'Sony Computer Entertainment',
        mode: ['Single-player'],
    },
    {   id: 5,
        name: 'God of war',
        version: 'Ragnarok',
        price: 15,
        img: "https://sm.ign.com/ign_latam/photo/default/god-of-war-ragnarok-1637352770106_2vz1.jpg",
        category: 'Adventure',
        description: 'God of War (also known as God of War IV) is the sequel to God of War III as well as a continuation of the canon God of War chronology. God of War is the eighth installment in the franchise overall.',
        plataforms: ['PS4', 'PS5', 'Microsoft Windows'],
        publisher: 'Sony Computer Entertainment',
        mode: ['Single-player'],
    },
    {   id: 6,
        name: 'Tomb Rider',
        version: 'Rise of the Tomb Raider',
        price: 35,
        img: "https://image.api.playstation.com/cdn/UP0082/CUSA05794_00/HzYMHoXoANNfVJ5BlxcTJ8bpCHCW3j8j.png",
        category: 'Action',
        description: 'Its story follows Lara Croft as she ventures into Siberia in search of the legendary city of Kitezh while battling the paramilitary organization Trinity, which intends to uncover the citys promise of immortality.',
        plataforms: ['Xbox One', 'Xbox 360', 'PC', 'PS4', 'macOS', 'Google Stadia' ],
        publisher: 'Microsoft Studios',
        mode: ['Single-player'],
    },

];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    })
}

export const getProductItem = (id) => {
    return new Promise((resolve) => {
        const prod = products.find(p => p.id === parseInt(id))
        setTimeout(() => {
            resolve(prod)
        }, 1000)
    })
}