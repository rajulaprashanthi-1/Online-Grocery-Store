/* =========================================================
   ADMIN LOGIN
========================================================= */

function openAdminLogin(){

document.getElementById(
"adminLoginOverlay"
).style.display="flex";

}

function closeAdminLogin(){

document.getElementById(
"adminLoginOverlay"
).style.display="none";

}

function adminLogin(){

const email=
document.getElementById("adminEmail")
.value.trim().toLowerCase();

const password=
document.getElementById("adminPassword").value;

if(
email==="admin@freshcart.com"&&
password==="admin123"
){

closeAdminLogin();

document.getElementById(
"userPage"
).style.display="none";

document.getElementById(
"mainHeader"
).style.display="none";

document.getElementById(
"adminPage"
).style.display="block";

renderAdminTab("dashboard");

}else{

alert("Invalid admin credentials");

}

}

function adminLogout(){

document.getElementById(
"adminPage"
).style.display="none";

document.getElementById(
"userPage"
).style.display="block";

document.getElementById(
"mainHeader"
).style.display="block";

}


/* =========================================================
   ADMIN TABS
========================================================= */

function showAdminTab(tab,button){

document.querySelectorAll(
".admin-nav button"
).forEach(
b=>b.classList.remove("active")
);

if(button)
button.classList.add("active");

renderAdminTab(tab);

}

function renderAdminTab(tab){

if(tab==="dashboard")
renderDashboard();

if(tab==="products")
renderAdminProducts();

if(tab==="users")
renderAdminUsers();

if(tab==="orders")
renderAdminOrders();

}


/* =========================================================
   ADMIN DASHBOARD
========================================================= */

function renderDashboard(){

const revenue=
orders.reduce(
(sum,o)=>sum+Number(o.total||0),0
);

document.getElementById(
"adminContent"
).innerHTML=`

<div class="stats">

<div class="stat">
Products
<b>${products.length}</b>
</div>

<div class="stat">
Users
<b>${users.length}</b>
</div>

<div class="stat">
Orders
<b>${orders.length}</b>
</div>

<div class="stat">
Revenue
<b>₹${revenue}</b>
</div>

</div>

<div class="admin-box">

<h2>FreshCart Admin Dashboard</h2>

<p style="margin-top:10px;color:#777">
Manage products, users and customer orders.
</p>

</div>

`;

}


/* =========================================================
   ADMIN PRODUCTS
========================================================= */

function renderAdminProducts(){

document.getElementById(
"adminContent"
).innerHTML=`

<div class="admin-box">

<button
class="primary"
onclick="openProductModal()">

➕ Add Product

</button>

<br><br>

<table class="admin-table">

<tr>

<th>ID</th>
<th>Product</th>
<th>Category</th>
<th>Unit</th>
<th>Price</th>
<th>Action</th>

</tr>

${products.slice(-100).map(p=>`

<tr>

<td>${p.id}</td>
<td>${p.name}</td>
<td>${p.category}</td>
<td>${p.unit}</td>
<td>₹${p.price}</td>

<td>

<button
class="delete"
onclick="deleteProduct(${p.id})">

Delete

</button>

</td>

</tr>

`).join("")}

</table>

</div>

`;

}


/* =========================================================
   ADMIN USERS
========================================================= */

function renderAdminUsers(){

document.getElementById(
"adminContent"
).innerHTML=`

<div class="admin-box">

<h2>👥 Registered Users</h2>

<br>

<table class="admin-table">

<tr>

<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>

</tr>

${
users.length
?
users.map(u=>`

<tr>

<td>${u.id}</td>
<td>${u.name}</td>
<td>${u.email}</td>
<td>${u.phone||"-"}</td>

</tr>

`).join("")
:

`

<tr>

<td colspan="4">

No registered users.

</td>

</tr>

`
}

</table>

</div>

`;

}


/* =========================================================
   ADMIN ORDERS
========================================================= */

function renderAdminOrders(){

document.getElementById(
"adminContent"
).innerHTML=`

<div class="admin-box">

<h2>📦 Manage Orders</h2>

<br>

<table class="admin-table">

<tr>

<th>Order ID</th>
<th>Customer</th>
<th>Total</th>
<th>Payment</th>
<th>Date</th>
<th>Status</th>

</tr>

${
orders.length
?
orders.map(o=>`

<tr>

<td>${o.id}</td>
<td>${o.customer}</td>
<td>₹${o.total}</td>
<td>${o.payment}</td>
<td>${o.date}</td>

<td>

<select
onchange="
updateOrderStatus(
'${o.id}',
this.value
)">

<option ${o.status==="Placed"?"selected":""}>
Placed
</option>

<option ${o.status==="Packed"?"selected":""}>
Packed
</option>

<option ${o.status==="Out for Delivery"?"selected":""}>
Out for Delivery
</option>

<option ${o.status==="Delivered"?"selected":""}>
Delivered
</option>

<option ${o.status==="Cancelled"?"selected":""}>
Cancelled
</option>

</select>

</td>

</tr>

`).join("")

:

`

<tr>

<td colspan="6">

No orders yet.

</td>

</tr>

`
}

</table>

</div>

`;

}

function updateOrderStatus(id,status){

const order=
orders.find(o=>o.id===id);

if(order){

order.status=status;

save("freshcartOrders",orders);

alert("Order status updated ✅");

}

}


/* =========================================================
   ADD PRODUCT
========================================================= */

function openProductModal(){

document.getElementById(
"productModal"
).style.display="flex";

}

function closeProductModal(){

document.getElementById(
"productModal"
).style.display="none";

}

function addProduct(){

const name=
document.getElementById("newName")
.value.trim();

const category=
document.getElementById("newCategory")
.value.trim()||"Other";

const price=
Number(
document.getElementById("newPrice").value
);

const unit=
document.getElementById("newUnit")
.value.trim()||"1 piece";

const image=
document.getElementById("newImage")
.value.trim();

if(!name||!price){

alert("Enter product name and price");

return;

}

const newProduct={

id:Date.now(),

name,

category,

unit,

price,

oldPrice:Math.round(price*1.2),

image:image||getInitialImage({name})

};

products.push(newProduct);

adminProducts.push(newProduct);

save("freshcartProducts",products);

save("freshcartAdminProducts",adminProducts);

closeProductModal();

renderAdminProducts();

displayProducts();

if(!image){

fetchRealProductImage(
name,
category
).then(url=>{

newProduct.image=url;

save("freshcartProducts",products);

save(
"freshcartAdminProducts",
adminProducts
);

displayProducts();

});

}

alert("Product added successfully ✅");

}

function deleteProduct(id){

if(!confirm("Delete this product?"))
return;

products=
products.filter(p=>p.id!==id);

adminProducts=
adminProducts.filter(p=>p.id!==id);

save("freshcartProducts",products);

save(
"freshcartAdminProducts",
adminProducts
);

renderAdminProducts();

displayProducts();

}