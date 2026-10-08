/* =========================================================
   LOGIN / REGISTER
========================================================= */

let currentUser=
JSON.parse(
localStorage.getItem(
"freshcartCurrentUser"
)||"null"
);

function openLogin(){

document.getElementById(
"loginOverlay"
).style.display="flex";

}

function closeLogin(){

document.getElementById(
"loginOverlay"
).style.display="none";

}

function switchRegister(){

document.getElementById(
"loginForm"
).style.display="none";

document.getElementById(
"registerForm"
).style.display="block";

document.getElementById(
"authTitle"
).textContent="Create Account";

}

function switchLogin(){

document.getElementById(
"loginForm"
).style.display="block";

document.getElementById(
"registerForm"
).style.display="none";

document.getElementById(
"authTitle"
).textContent="Login";

}

function register(){

const name=
document.getElementById("regName")
.value.trim();

const email=
document.getElementById("regEmail")
.value.trim().toLowerCase();

const password=
document.getElementById("regPassword").value;

const phone=
document.getElementById("regPhone").value.trim();

if(!name||!email||!password){

alert("Please fill all required fields.");

return;

}

if(users.some(u=>u.email===email)){

alert("Email already registered.");

return;

}

const user={

id:Date.now(),
name,
email,
password,
phone

};

users.push(user);

save("freshcartUsers",users);

currentUser=user;

save(
"freshcartCurrentUser",
currentUser
);

alert("Account created successfully 🎉");

closeLogin();

}

function login(){

const email=
document.getElementById("loginEmail")
.value.trim().toLowerCase();

const password=
document.getElementById("loginPassword").value;

let user=
users.find(
u=>
u.email===email&&
u.password===password
);

if(
!user&&
email==="user@freshcart.com"&&
password==="user123"
){

user={

id:1,
name:"Demo User",
email:"user@freshcart.com",
password:"user123",
phone:""

};

}

if(!user){

alert("Invalid email or password.");

return;

}

currentUser=user;

save(
"freshcartCurrentUser",
currentUser
);

alert(`Welcome ${user.name} 👋`);

closeLogin();

}

function showOrders(){

if(!currentUser){

alert("Please login to view orders.");

openLogin();

return;

}

const mine=
orders.filter(
o=>
o.customerEmail===
currentUser.email
);

if(!mine.length){

alert("No orders yet.");

return;

}

alert(
mine.map(
o=>
`Order ${o.id} — ₹${o.total} — ${o.status}`
).join("\n")
);

}


/* =========================================================
   CHECKOUT
========================================================= */

function checkout(){

if(!cart.length){

alert("Your cart is empty.");

return;

}

if(!currentUser){

alert("Please login before checkout.");

openLogin();

return;

}

const total=
cart.reduce(
(sum,item)=>
sum+item.price*item.qty,0
);

document.getElementById(
"checkoutTotal"
).textContent=total;

document.getElementById(
"checkoutOverlay"
).style.display="flex";

}

function closeCheckout(){

document.getElementById(
"checkoutOverlay"
).style.display="none";

}

function placeOrder(){

const address=
document.getElementById("address")
.value.trim();

const phone=
document.getElementById("phone")
.value.trim();

const payment=
document.getElementById("payment").value;

if(!address||!phone){

alert("Please enter address and phone.");

return;

}

const total=
cart.reduce(
(sum,item)=>
sum+item.price*item.qty,0
);

const order={

id:"FC"+Date.now(),

customer:currentUser.name,

customerEmail:currentUser.email,

items:[...cart],

total,

address,

phone,

payment,

date:new Date().toLocaleString(),

status:"Placed"

};

orders.push(order);

save("freshcartOrders",orders);

cart=[];

save("freshcartCart",cart);

updateCartCount();

closeCheckout();

closeCart();

alert(
`Order placed successfully 🎉

Order ID: ${order.id}`
);

}