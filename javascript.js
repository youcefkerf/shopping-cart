
const shop = document.getElementById('shopping-cart');
const element = document.createElement('div');
shop.append(element)

function additem () {
    const shopping = document.querySelector('#item-list');
    const insideshopping = shopping.querySelector ('.items');
    const cart = document.querySelector('#shopping-cart div');
    const divcart = 'element';
    element.append(insideshopping);

    const button = element.querySelector('button');
    button.remove();

    const button2 = document.createElement('button');
    button2.innerHTML = "Remove";
    button2.onclick = removeItem;
    element.append(button2);
    function removeItem() {
        element.remove();
}
}
