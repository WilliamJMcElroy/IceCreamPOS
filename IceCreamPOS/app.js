// input data

const iceCream = [{
    name: 'Cookie Dough',
    price: 3.50,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 3,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 4,
    quantity: 0
},
{
    name: 'Rocky Road',
    price: 3.33,
    quantity: 0
},
{
    name: 'Pistachio',
    price: 4.04,
    quantity: 0
},
{
    name: 'Birthday Cake',
    price: 3.66,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    price: 3,
    quantity: 0
},
{
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0
},
{
    name: 'Dipped Cone',
    price: 5,
    quantity: 0
}]


const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]


// Global-scoped variables
let cartEl = document.getElementById('cart')
let totalEl = document.getElementById('total')

// Ice Cream button functionality
function buyVanilla() {
    let vanilla = iceCream.find(flavor => flavor.name == 'Vanilla')
    vanilla.quantity++
    console.log('buying Vanilla', vanilla)
    drawIntoCart()
}

function buyCookieDough() {
    let CookieDough = iceCream.find(flavor => flavor.name == 'Cookie Dough')
    CookieDough.quantity++
    console.log('buying Cookie Dough', CookieDough)
    drawIntoCart()
}

function buyStrawberry() {
    let Strawberry = iceCream.find(flavor => flavor.name == 'Strawberry')
    Strawberry.quantity++
    console.log('buying Strawberry', Strawberry)
    drawIntoCart()
}

function buyRockyRoad() {
    let RockyRoad = iceCream.find(flavor => flavor.name == 'Rocky Road')
    RockyRoad.quantity++
    console.log('buying Rocky Road', RockyRoad)
    drawIntoCart()
}

function buyPistachio() {
    let Pistachio = iceCream.find(flavor => flavor.name == 'Pistachio')
    Pistachio.quantity++
    console.log('buying Pistachio', Pistachio)
    drawIntoCart()
}

function buyBirthdayCake() {
    let BirthdayCake = iceCream.find(flavor => flavor.name == 'Birthday Cake')
    BirthdayCake.quantity++
    console.log('buying Birthday Cake', BirthdayCake)
    drawIntoCart()
}

// Vessel button functionality
function buyVessel(vesselName) {
    let foundVessel = vessels.find(vessel => vessel.name == vesselName)
    foundVessel.quantity++
    console.log('buying vessel', foundVessel)
}

// draw, price calculations


function drawIntoCart() {
    let template = ''
    iceCream.forEach(flavor => {
        if (flavor.quantity > 0) {
            template += `   <div class="d-flex justify-content-around p-1 fs-3">
                <span>${flavor.name} x ${flavor.quantity}</span>
                    <span>$${flavor.price}</span>
                    <span>$${flavor.price * flavor.quantity}
                    <button class="btn text-danger fs-2" title="Remove Item" onclick="removeIC('${flavor.name}')"></button>
                </div>`
        }
    })
    cartEl.innerHTML = template
    drawTotalPrice()
}

function buyIC(flavorName) {
    let foundflavor = iceCream.find(flavor => flavor.name == flavorName)
    foundflavor.quantity++
    console.log('buying sandwich', foundflavor)
    drawIntoCart()
}

function removeIC(flavorName) {

    let foundflavor = iceCream.find(flavor => flavor.name == flavorName)
    foundflavor.quantity--
    console.log('removing', foundflavor)
    drawIntoCart()
}

function drawTotalPrice() {
    let total = 0
    iceCream.forEach(flavor => {
        if (flavor.quantity > 0) {
            total += (flavor.quantity * flavor.price)
        }
    })
    console.log(total, 'total')
    totalEl.innerText = total.toString()
}