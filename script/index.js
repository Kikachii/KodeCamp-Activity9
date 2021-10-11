let shoes = [
    {
        name: "Louis John",
        shoe_image: 'onne1',
        tag: 'Price',
        price: 25000,
    },
    {
        name: "Warren Jones",
        shoe_image: 'onne2',
        tag: 'Price',
        price: 20000,
    },
    {
        name: "Onne Beauty",
        shoe_image: 'alysa7',
        tag: 'Price',
        price: 25000,
    },
    {
        name: "Khayat Eddin",
        shoe_image: 'alysa8',
        tag: 'Price',
        price: 15000,
    },
    {
        name: "Jackson Slyvester",
        shoe_image: 'onne5',
        tag: 'Price',
        price: 20000,
    },
    {
        name: "Louis John",
        shoe_image: 'onne6',
        tag: 'Price',
        price: 15000,
    },
    {
        name: "Devon Smith",
        shoe_image: 'onne7',
        tag: 'Price',
        price: 25000,
    },
    {
        name: "Daria Ruudi",
        shoe_image: 'alysa1',
        tag: 'Price',
        price: 10000,
    },
    {
        name: "Louis John",
        shoe_image: 'alysa2',
        tag: 'Price',
        price: 20000,
    },
    {
        name: "Alysa Hudley",
        shoe_image: 'alysa3',
        tag: 'Price',
        price: 25000,
    },
    {
        name: "Louis John",
        shoe_image: 'alysa6',
        tag: 'Price',
        price: 25000,
    },

    {
        name: "Nicole Style",
        shoe_image: 'alysa5',
        tag: 'Price',
        price: 15000,
    }
]


let shoeSection = document.getElementById('shoe-wrap');
let html = "";
shoes.forEach(e => {
    html += `
    <div class="shoe-card p-5">
                <div class="shoe-image">
                    <img src="./images/${e.shoe_image}.jpg" alt="" width="200px">
                </div>
                <div class="shoe-info">
                    <h1>${e.name}</h1>
                    <h3>${e.tag}: N${e.price}</h3>
                    <button class="btn btn-secondary">View Details</button>
                    <button class="btn btn-info">Make Order</button>
                </div>
            </div>
    `


    console.log(e)

    shoeSection.innerHTML = html
})