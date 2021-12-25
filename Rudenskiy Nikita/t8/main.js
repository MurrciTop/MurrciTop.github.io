class Order{
    constructor(produkt_name, product_price, user_email, count, delivery, sumbitted = false, save = false){

 
    this.produkt_name   = produkt_name;
    this.product_price  = product_price;
    this.user_email     = user_email;
    this.count          = count;
    this.delivery       = delivery;
    this.sumbitted      = sumbitted;

    this.total          = this.getTotalPrice();
    this.delivery_price = this.getDeliveryPrice();

    if(save){
        this.saveOrder();
    }
 }

    getDeliveryPrice(){
        switch( this.delivery){
            case "Новапошта":
                return 70;
            case "Укр пошта":
                return 60;
            case "Кур'єр":
                return 80;
            default:
                return 70;
        }
    }

    getTotalPrice(){
        return this.product_price*this.count + this.getDeliveryPrice();
    }

    saveOrder(){
        let new_order = {
            produkt_name    : this.produkt_name,
            product_price   : this.product_price,
            user_email      : this.user_email,
            count           : this.count,
            delivery        : this.delivery,
            sumbitted       : this.sumbitted,
            total           : this.total,
            delivery_price  : this.delivery_price
        }  
        db.collection("orders").add(new_order).then( () => alert("Order added!"));
    }
}

function makeOrder(){
    const order = new Order(
        document.getElementById("product_name").value,
        document.getElementById("product_price").value,
        document.getElementById("user_email").value,
        document.getElementById("count").value,
        document.getElementById("delivery").value,
        false,
        true
    );

console.log(order);
console.log(order.getDeliveryPrice());
console.log(order.getTotalPrice());
}

class Admin{
    static approveOrder(id){
        db.collection("orders").doc(id).update({
            sumbitted:true
        })
    }   
    static dissApproveOrder(id){
        db.collection("orders").doc(id).update({
            sumbitted:false
        })
        }
    static deletOrder(id){
        db.collection("orders").doc(id).delet().then(
            () => alert("Order deleted!!!")
        )
    }
}

Admin.approveOrder("......");

function getOrders(){
    db.collection("orders").get().then(
        res => {
            res.forEach(element => {
                console.log(element.id, element.data());
            })
        }
    )

}
    
Admin.sayHello();

console.log( Admin.test );