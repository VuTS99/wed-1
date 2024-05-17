const btn = document.querySelectorAll("button")
// console.log();
btn.forEach(function(button,index){
    
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        // var productImg = product.querySelector("img").src
        var productName = product.querySelector("h2").innerText
        console.log(productPrice,productImg,productName)
        var productPrice = product.querySelector("span").innerText
        addcart(productPrice,productImg,productName)
        
    })





})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt="">'+productName+'</td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xoá</td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
}