/* =========================================================
   VERSION
========================================================= */

const VERSION="freshcart-one-card-quantity-dropdown-v1";


/* =========================================================
   CATEGORIES
========================================================= */

const categories=[
"All",
"Fruits",
"Vegetables",
"Dairy & Eggs",
"Bakery",
"Snacks",
"Beverages",
"Rice, Atta & Grains",
"Dal & Pulses",
"Masala & Spices",
"Oil, Ghee & Condiments",
"Instant & Ready Food",
"Dry Fruits & Nuts",
"Ice Cream & Frozen",
"Personal Care",
"Beauty & Cosmetics",
"Household Cleaning",
"Home & Kitchen",
"Pooja Needs",
"Baby Care",
"Pet Supplies",
"Stationery",
"Electronics",
"Party & Gifting",
"Other"
];


/* =========================================================
   PRODUCT CATALOG
========================================================= */

const catalog={

"Fruits":[
"Apple","Banana","Orange","Mango","Grapes",
"Watermelon","Papaya","Pomegranate","Guava",
"Pineapple","Kiwi","Strawberry","Blueberry",
"Peach","Pear","Chikoo","Dragon Fruit",
"Muskmelon","Coconut","Lemon"
],

"Vegetables":[
"Tomato","Potato","Onion","Carrot","Cabbage",
"Cauliflower","Broccoli","Spinach","Capsicum",
"Green Chilli","Beetroot","Radish","Brinjal",
"Lady Finger","Cucumber","Peas","Corn","Ginger",
"Garlic","Mushroom"
],

"Dairy & Eggs":[
"Milk","Curd","Paneer","Cheese","Butter","Ghee",
"Cream","Buttermilk","Flavoured Milk","Eggs",
"Greek Yogurt","Lassi","Milkshake"
],

"Bakery":[
"Bread","Brown Bread","Multigrain Bread",
"Croissant","Bun","Burger Buns","Pizza Base",
"Cake","Cupcake","Donut","Muffin","Rusk",
"Cookies","Garlic Bread"
],

"Snacks":[
"Potato Chips","Nachos","Popcorn","Bhujia",
"Mixture","Namkeen","Peanuts","Samosa",
"Kachori","Energy Bar","Protein Bar","Chocolates",
"Wafers","Biscuits","Cream Biscuits","Salted Crackers"
],

"Beverages":[
"Mineral Water","Coconut Water","Orange Juice",
"Apple Juice","Mango Juice","Lime Juice",
"Soft Drink","Cola","Soda","Energy Drink",
"Green Tea","Tea","Coffee","Hot Chocolate"
],

"Rice, Atta & Grains":[
"Basmati Rice","Sona Masoori Rice","Brown Rice",
"Idli Rice","Poha","Dalia","Wheat Flour","Atta",
"Maida","Besan","Ragi Flour","Jowar Flour",
"Bajra Flour","Oats","Quinoa","Corn Flour",
"Rice Flour","Semolina"
],

"Dal & Pulses":[
"Toor Dal","Moong Dal","Masoor Dal","Chana Dal",
"Urad Dal","Rajma","Kabuli Chana","Black Chana",
"Green Moong","White Peas","Soya Chunks"
],

"Masala & Spices":[
"Turmeric Powder","Red Chilli Powder",
"Coriander Powder","Garam Masala","Cumin",
"Black Pepper","Cardamom","Cloves","Cinnamon",
"Bay Leaf","Mustard Seeds","Fennel Seeds",
"Chaat Masala","Kitchen King Masala",
"Biryani Masala","Sambar Powder","Rasam Powder",
"Ginger Garlic Paste"
],

"Oil, Ghee & Condiments":[
"Sunflower Oil","Groundnut Oil","Mustard Oil",
"Olive Oil","Coconut Oil","Ghee","Vinegar",
"Soy Sauce","Tomato Ketchup","Mayonnaise",
"Chilli Sauce","Green Chutney","Peanut Butter",
"Jam","Honey"
],

"Instant & Ready Food":[
"Instant Noodles","Cup Noodles","Pasta",
"Macaroni","Soup","Ready Poha","Ready Upma",
"Frozen Paratha","Frozen Samosa","Frozen Fries",
"Pizza","Instant Oats"
],

"Dry Fruits & Nuts":[
"Almonds","Cashews","Walnuts","Pistachios",
"Raisins","Dates","Anjeer","Apricots",
"Mixed Nuts","Chia Seeds","Flax Seeds",
"Sunflower Seeds","Pumpkin Seeds"
],

"Ice Cream & Frozen":[
"Vanilla Ice Cream","Chocolate Ice Cream",
"Strawberry Ice Cream","Butterscotch Ice Cream",
"Mango Ice Cream","Kulfi","Ice Cream Cone",
"Frozen Peas","Frozen Corn",
"Frozen Mixed Vegetables","Frozen Nuggets",
"Frozen Fries"
],

"Personal Care":[
"Shampoo","Conditioner","Hair Oil","Body Wash",
"Soap","Face Wash","Toothpaste","Toothbrush",
"Mouthwash","Deodorant","Perfume","Handwash",
"Hand Sanitizer","Tissue","Wet Wipes",
"Sanitary Pads","Razors","Shaving Cream",
"Body Lotion","Sunscreen"
],

"Beauty & Cosmetics":[
"Lipstick","Lip Balm","Foundation","Compact Powder",
"Concealer","Eyeliner","Mascara","Kajal",
"Nail Polish","Makeup Remover","Face Serum",
"Moisturizer","Face Cream","Face Mask",
"Blush","Highlighter","Makeup Brush",
"Hair Serum","Hair Gel","Hair Color"
],

"Household Cleaning":[
"Dishwash Liquid","Dishwash Bar","Laundry Detergent",
"Fabric Softener","Floor Cleaner","Toilet Cleaner",
"Glass Cleaner","Kitchen Cleaner","Bleach",
"Disinfectant","Phenyl","Scrub Pad","Sponge",
"Garbage Bags","Mop","Broom","Dustpan",
"Cleaning Brush","Air Freshener"
],

"Home & Kitchen":[
"Storage Container","Water Bottle","Lunch Box",
"Kitchen Knife","Peeler","Chopping Board",
"Plate","Bowl","Glass","Cup","Mug",
"Spoon","Fork","Tongs","Strainer",
"Pressure Cooker","Frying Pan","Kadai",
"Tea Strainer","Kitchen Towels"
],

"Pooja Needs":[
"Incense Sticks","Camphor","Cotton Wicks",
"Diya","Pooja Oil","Pooja Thali","Kumkum",
"Turmeric","Sandalwood Powder","Flowers",
"Matchbox","Pooja Cloth","Ghee Diya",
"Brass Diya","Pooja Samagri"
],

"Baby Care":[
"Baby Diapers","Baby Wipes","Baby Shampoo",
"Baby Soap","Baby Lotion","Baby Powder",
"Baby Oil","Baby Cream","Baby Food",
"Baby Bottle","Baby Toothbrush","Baby Rash Cream",
"Baby Towel","Baby Bib","Baby Nail Clipper"
],

"Pet Supplies":[
"Dog Food","Cat Food","Pet Treats","Dog Biscuits",
"Cat Treats","Pet Shampoo","Pet Soap",
"Pet Bowl","Pet Leash","Pet Collar",
"Cat Litter","Pet Toys","Dog Chew",
"Bird Food","Fish Food"
],

"Stationery":[
"Notebook","A4 Sheets","Pen","Pencil","Eraser",
"Sharpener","Marker","Highlighter","Sketch Pens",
"Glue","Tape","Scissors","Ruler",
"Stapler","Staples","Calculator","File Folder",
"Sticky Notes","Diary","Drawing Book"
],

"Electronics":[
"USB Cable","Charger","Power Bank","Earphones",
"Headphones","Bluetooth Speaker","USB Drive",
"Memory Card","Mouse","Keyboard","HDMI Cable",
"LED Bulb","Extension Board","Power Strip",
"Smart Watch","Phone Stand","Laptop Stand",
"Mobile Holder","Battery","Adapter"
],

"Party & Gifting":[
"Birthday Balloons","Party Caps","Party Plates",
"Party Cups","Birthday Candles","Gift Wrap",
"Gift Bag","Greeting Card","Ribbon",
"Confetti","Decoration Lights","Banners",
"Paper Flowers","Party Masks","Return Gift Bags"
],

"Other":[
"Umbrella","Torch","Lighter","Batteries",
"Keychain","Sewing Kit","Safety Pins",
"Clothes Hangers","Door Mat","Mosquito Repellent",
"Notebook Stand","Travel Pouch","Shopping Bag",
"Reusable Bag","Water Bottle"
]

};


/* =========================================================
   PACK SIZES
========================================================= */

const packSizes={

"Fruits":["250 g","500 g","1 kg"],
"Vegetables":["500 g","1 kg","2 kg"],
"Dairy & Eggs":["250 ml","500 ml","1 L"],
"Bakery":["1 piece","2 pieces","4 pieces"],
"Snacks":["50 g","100 g","200 g"],
"Beverages":["250 ml","500 ml","1 L"],
"Rice, Atta & Grains":["500 g","1 kg","5 kg"],
"Dal & Pulses":["500 g","1 kg","2 kg"],
"Masala & Spices":["50 g","100 g","200 g"],
"Oil, Ghee & Condiments":["500 ml","1 L","2 L"],
"Instant & Ready Food":["1 pack","2 packs","4 packs"],
"Dry Fruits & Nuts":["100 g","250 g","500 g"],
"Ice Cream & Frozen":["500 ml","1 L","2 L"],
"Personal Care":["1 piece","2 pieces","3 pieces"],
"Beauty & Cosmetics":["1 piece","2 pieces","3 pieces"],
"Household Cleaning":["500 ml","1 L","2 L"],
"Home & Kitchen":["1 piece","2 pieces","4 pieces"],
"Pooja Needs":["1 pack","2 packs","5 packs"],
"Baby Care":["1 piece","2 pieces","3 pieces"],
"Pet Supplies":["500 g","1 kg","2 kg"],
"Stationery":["1 piece","2 pieces","5 pieces"],
"Electronics":["1 piece","2 pieces","3 pieces"],
"Party & Gifting":["1 piece","5 pieces","10 pieces"],
"Other":["1 piece","2 pieces","5 pieces"]

};


/* =========================================================
   PRICE RANGES
========================================================= */

const priceRanges={

"Fruits":[40,180],
"Vegetables":[20,150],
"Dairy & Eggs":[30,250],
"Bakery":[30,300],
"Snacks":[20,250],
"Beverages":[20,180],
"Rice, Atta & Grains":[40,500],
"Dal & Pulses":[50,300],
"Masala & Spices":[20,180],
"Oil, Ghee & Condiments":[60,500],
"Instant & Ready Food":[30,250],
"Dry Fruits & Nuts":[80,700],
"Ice Cream & Frozen":[80,500],
"Personal Care":[40,500],
"Beauty & Cosmetics":[50,800],
"Household Cleaning":[40,500],
"Home & Kitchen":[30,1000],
"Pooja Needs":[20,300],
"Baby Care":[50,800],
"Pet Supplies":[60,700],
"Stationery":[10,300],
"Electronics":[50,2000],
"Party & Gifting":[20,500],
"Other":[20,500]

};


/* =========================================================
   IMAGE SYSTEM
========================================================= */

let imageCache=JSON.parse(
localStorage.getItem("freshcartImageCache")||"{}"
);

const imageFallback=
"data:image/svg+xml;charset=UTF-8,"+
encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg"
width="700" height="500">
<rect width="100%" height="100%" fill="#eeeeee"/>
<text x="50%" y="50%"
dominant-baseline="middle"
text-anchor="middle"
font-family="Arial"
font-size="24"
fill="#777">
Loading Product...
</text>
</svg>
`);

function cleanImageQuery(name,category){

let extra="product";

if(category==="Fruits")extra="fruit";
else if(category==="Vegetables")extra="vegetable";
else if(category==="Dairy & Eggs"||
category==="Bakery"||
category==="Snacks")extra="food";
else if(category==="Beverages")extra="drink";
else if(category==="Masala & Spices")extra="spice";
else if(category==="Personal Care"||
category==="Beauty & Cosmetics")extra="cosmetic";
else if(category==="Household Cleaning")extra="cleaning product";
else if(category==="Home & Kitchen")extra="kitchen product";
else if(category==="Pooja Needs")extra="pooja";
else if(category==="Baby Care")extra="baby product";
else if(category==="Pet Supplies")extra="pet product";
else if(category==="Stationery")extra="stationery";
else if(category==="Electronics")extra="electronic product";
else if(category==="Party & Gifting")extra="party";

return `${name} ${extra}`;

}

async function fetchRealProductImage(name,category){

const key=name.trim().toLowerCase();

if(imageCache[key])
return imageCache[key];

try{

const query=cleanImageQuery(name,category);

const url=
"https://commons.wikimedia.org/w/api.php"+
"?action=query"+
"&generator=search"+
"&gsrnamespace=6"+
"&gsrsearch="+encodeURIComponent(query)+
"&gsrlimit=8"+
"&prop=imageinfo"+
"&iiprop=url|mime"+
"&iiurlwidth=700"+
"&format=json"+
"&formatversion=2"+
"&origin=*";

const response=await fetch(url);
const data=await response.json();

const pages=data.query?.pages||[];

const candidates=pages
.filter(p=>p.imageinfo&&p.imageinfo[0]&&p.imageinfo[0].thumburl)
.map(p=>{

const title=(p.title||"")
.replace("File:","")
.replace(/\.[^/.]+$/,"")
.toLowerCase();

const words=name.toLowerCase()
.split(/\s+/)
.filter(Boolean);

let score=0;

words.forEach(word=>{
if(title.includes(word))score+=10;
});

if(title.includes(name.toLowerCase()))
score+=30;

return{
url:p.imageinfo[0].thumburl,
score
};

})
.sort((a,b)=>b.score-a.score);

if(candidates.length){

const chosen=candidates[0].url;

imageCache[key]=chosen;

localStorage.setItem(
"freshcartImageCache",
JSON.stringify(imageCache)
);

return chosen;

}

}catch(error){

console.log("Image error:",name,error);

}

return imageFallback;

}

function getInitialImage(product){

const key=product.name.trim().toLowerCase();

return imageCache[key]||imageFallback;

}

async function loadRealImages(list){

const unique={};

list.forEach(p=>{
if(!unique[p.name])unique[p.name]=p;
});

const items=Object.values(unique);

const batchSize=8;

for(let i=0;i<items.length;i+=batchSize){

const batch=items.slice(i,i+batchSize);

await Promise.all(
batch.map(async p=>{

const image=
await fetchRealProductImage(
p.name,
p.category
);

document
.querySelectorAll(
`[data-product-name="${CSS.escape(p.name)}"]`
)
.forEach(img=>{
img.src=image;
});

})
);

}

}


/* =========================================================
   CREATE ONE PRODUCT PER QUANTITY OPTION
   BUT DISPLAY ONLY ONE CARD
========================================================= */

let products=[];
let productId=1;

Object.entries(catalog).forEach(
([category,list])=>{

const packs=
packSizes[category]||["1 piece"];

const range=
priceRanges[category]||[20,300];

list.forEach(name=>{

packs.forEach((unit,packIndex)=>{

const base=
Math.floor(
Math.random()*
(range[1]-range[0]+1)
)+range[0];

const price=
Math.max(
10,
Math.round(
base*(1+packIndex*.55)
)
);

products.push({

id:productId++,
name:name,
category:category,
unit:unit,
price:price,
oldPrice:Math.round(price*1.2),
image:getInitialImage({name:name})

});

});

});

});


/* =========================================================
   STORAGE
========================================================= */

function save(key,value){
localStorage.setItem(key,JSON.stringify(value));
}

let users=JSON.parse(
localStorage.getItem("freshcartUsers")||"[]"
);

let cart=JSON.parse(
localStorage.getItem("freshcartCart")||"[]"
);

let orders=JSON.parse(
localStorage.getItem("freshcartOrders")||"[]"
);

let adminProducts=JSON.parse(
localStorage.getItem("freshcartAdminProducts")||"[]"
);

if(localStorage.getItem("freshcartVersion")!==VERSION){

localStorage.removeItem("freshcartProducts");
localStorage.setItem("freshcartVersion",VERSION);

}

const savedProducts=
JSON.parse(
localStorage.getItem("freshcartProducts")||"null"
);

if(savedProducts)
products=savedProducts;
else
save("freshcartProducts",products);


/* =========================================================
   CATEGORIES
========================================================= */

let currentCategory="All";

function renderCategories(){

const bar=document.getElementById("categoryBar");

if(!bar)return;

bar.innerHTML=
categories.map(c=>`

<button
class="${c===currentCategory?"active":""}"
onclick='selectCategory(${JSON.stringify(c)})'>

${c}

</button>

`).join("");

}

function selectCategory(category){

currentCategory=category;

renderCategories();

displayProducts();

}

renderCategories();


/* =========================================================
   DISPLAY PRODUCTS - ONE CARD PER PRODUCT
========================================================= */

function displayProducts(){

const container=
document.getElementById("products");

if(!container)return;

const search=
document.getElementById("searchInput")
.value.trim().toLowerCase();

let list=products.filter(p=>

(
currentCategory==="All"||
p.category===currentCategory
)

&&

(
!search||
p.name.toLowerCase().includes(search)||
p.category.toLowerCase().includes(search)
)

);

/*
   GROUP BY PRODUCT NAME

   Apple 250 g
   Apple 500 g
   Apple 1 kg

   = ONE APPLE CARD
*/

const grouped={};

list.forEach(p=>{

if(!grouped[p.name])
grouped[p.name]=[];

grouped[p.name].push(p);

});

const groups=Object.values(grouped);

document.getElementById("resultCount")
.textContent=`${groups.length} products`;

if(!groups.length){

container.innerHTML=
`<div class="empty">No products found.</div>`;

return;

}

container.innerHTML=
groups.map(group=>{

const first=group[0];

const selectId=
"qty_"+first.id;

return `

<div class="card">

<div class="pic">

<img
src="${first.image}"
alt="${first.name}"
data-product-name="${first.name.replace(/"/g,"&quot;")}"
loading="lazy"
onerror="this.onerror=null;this.src=imageFallback;">

</div>

<div class="cat">

${first.category}

</div>

<h3>

${first.name}

</h3>

<select
class="unitSelect"
id="${selectId}"
onchange="updateSelectedPrice('${selectId}')">

${group.map((p,index)=>`

<option
value="${p.id}"
data-price="${p.price}"
data-old="${p.oldPrice}"
${index===0?"selected":""}>

${p.unit}

</option>

`).join("")}

</select>

<div>

<span
class="price"
id="price_${selectId}">

₹${first.price}

</span>

<span
class="old"
id="old_${selectId}">

₹${first.oldPrice}

</span>

</div>

<div class="card-actions">

<button
class="add"
onclick="addSelectedProduct('${selectId}')">

Add

</button>

<button
class="buy"
onclick="buySelectedProduct('${selectId}')">

Buy Now

</button>

</div>

</div>

`;

}).join("");

loadRealImages(list);

}


/* =========================================================
   UPDATE PRICE
========================================================= */

function updateSelectedPrice(selectId){

const select=
document.getElementById(selectId);

const option=
select.options[select.selectedIndex];

const price=option.dataset.price;
const old=option.dataset.old;

document.getElementById(
"price_"+selectId
).textContent="₹"+price;

document.getElementById(
"old_"+selectId
).textContent="₹"+old;

}


/* =========================================================
   ADD SELECTED PRODUCT
========================================================= */

function addSelectedProduct(selectId){

const select=
document.getElementById(selectId);

const id=Number(select.value);

addToCart(id);

}


/* =========================================================
   BUY SELECTED PRODUCT
========================================================= */

function buySelectedProduct(selectId){

const select=
document.getElementById(selectId);

const id=Number(select.value);

buyNow(id);

}


/* =========================================================
   SEARCH
========================================================= */

function searchProducts(){

displayProducts();

}


/* =========================================================
   SCROLL
========================================================= */

function scrollProducts(){

document.getElementById(
"productsSection"
).scrollIntoView({
behavior:"smooth"
});

}


/* =========================================================
   CART
========================================================= */

function addToCart(id){

const product=
products.find(p=>p.id===id);

if(!product)return;

const existing=
cart.find(i=>i.id===id);

if(existing)
existing.qty++;
else
cart.push({...product,qty:1});

save("freshcartCart",cart);

updateCartCount();

alert(
`${product.name} (${product.unit}) added to cart 🛒`
);

}

function updateCartCount(){

const count=document.getElementById("count");

if(!count)return;

count.textContent=
cart.reduce(
(sum,item)=>sum+item.qty,0
);

}

function openCart(){

renderCart();

document.getElementById(
"cartOverlay"
).style.display="flex";

}

function closeCart(){

document.getElementById(
"cartOverlay"
).style.display="none";

}

function renderCart(){

const box=
document.getElementById("cartItems");

if(!box)return;

if(!cart.length){

box.innerHTML=
`<div class="empty">
Your cart is empty 🛒
</div>`;

document.getElementById(
"cartTotal"
).textContent="0";

return;

}

box.innerHTML=
cart.map(item=>`

<div class="cart-item">

<img
src="${item.image||imageFallback}"
onerror="this.onerror=null;this.src=imageFallback;">

<div class="cart-info">

<b>${item.name}</b>

<div style="color:#777;font-size:13px">

${item.unit}

</div>

<div>

₹${item.price}

</div>

<div class="qty">

<button onclick="changeQty(${item.id},-1)">
−
</button>

${item.qty}

<button onclick="changeQty(${item.id},1)">
+
</button>

</div>

</div>

<b>

₹${item.price*item.qty}

</b>

</div>

`).join("");

const total=
cart.reduce(
(sum,item)=>
sum+item.price*item.qty,0
);

document.getElementById(
"cartTotal"
).textContent=total;

}

function changeQty(id,change){

const item=
cart.find(i=>i.id===id);

if(!item)return;

item.qty+=change;

if(item.qty<=0){

cart=cart.filter(
x=>x.id!==id
);

}

save("freshcartCart",cart);

updateCartCount();
renderCart();

}

function buyNow(id){

const product=
products.find(p=>p.id===id);

if(!product)return;

cart=[
{...product,qty:1}
];

save("freshcartCart",cart);

updateCartCount();

checkout();

}