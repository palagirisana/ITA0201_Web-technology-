function generateBill(){

let product=document.getElementById("product");

let productName=product.options[product.selectedIndex].text;

let price=Number(product.value);

let quantity=Number(document.getElementById("quantity").value);

let subtotal=price*quantity;

let discount=0;

if(subtotal>=1000){
discount=subtotal*0.10;
}

let amount=subtotal-discount;

let tax=amount*0.05;

let total=amount+tax;

document.getElementById("bill").innerHTML=

"<h3>Billing Details</h3>"+

"Product : "+productName+"<br>"+

"Price : ₹"+price+"<br>"+

"Quantity : "+quantity+"<br>"+

"Subtotal : ₹"+subtotal.toFixed(2)+"<br>"+

"Discount (10%) : ₹"+discount.toFixed(2)+"<br>"+

"Tax (5%) : ₹"+tax.toFixed(2)+"<br>"+

"<b>Total Amount : ₹"+total.toFixed(2)+"</b>";

}