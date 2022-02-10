export const products = [
    {
        id: 1,
        name: 'Crash Bandicoot',
        version: 'Out of time',
        price: 35,
        img: "https://image.api.playstation.com/vulcan/img/rnd/202111/1918/psoOkDbYuMdr1RsJo6TpU6bg.png",
        category: 'Adventure',
    },
    {
        id: 2,
        name: 'Uncharted',
        version: 'The lost legacy',
        price: 22,
        img: "http://i.imgur.com/5I3RXH2.jpg",
        category: 'Action',
    },
    {
        id: 3,
        name: 'The last of us',
        version: '',
        price: 35,
        img: "https://m.media-amazon.com/images/I/71-hlREKk6L._AC_SY741_.jpg",
        category: 'Action',
    },
    {   id: 4,
        name: 'Horizon',
        version: 'Zero dawn',
        price: 17,
        img: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/05/horizon-zero-dawn-2335537.jpg?itok=8LKPWWbp",
        category: 'Adventure',
    },
    {   id: 5,
        name: 'God of war',
        version: 'Ragnarok',
        price: 15,
        img: "https://sm.ign.com/ign_latam/photo/default/god-of-war-ragnarok-1637352770106_2vz1.jpg",
        category: 'Adventure',
    },
    {   id: 6,
        name: 'Tomb Rider',
        version: 'Rise of the Tomb Raider',
        price: 35,
        img: "https://image.api.playstation.com/cdn/UP0082/CUSA05794_00/HzYMHoXoANNfVJ5BlxcTJ8bpCHCW3j8j.png",
        category: 'Action',
    },

];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}