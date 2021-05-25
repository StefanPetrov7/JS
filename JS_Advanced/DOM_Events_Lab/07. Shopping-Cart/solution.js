function solve() {     // TODO last part of the task !!!!

   document.querySelector('.shopping-cart').addEventListener('click', onClickAdd);
   document.querySelector('.checkout').addEventListener('click', onClickCheckOut)
   const textArea = document.querySelector('textarea');

   let sum = 0
   let products = [];


   function onClickAdd(ev) {
      if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
         const product = ev.target.parentNode.parentNode;
         const name = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);
         const text = `Added ${name} for ${price.toFixed(2)} to the cart.\n`
         sum += price;
         products.push(name);
         textArea.textContent += text;
      }
   }

   function onClickCheckOut(ev) {
      textArea.textContent += `You bought ${products.join(', ')} for ${sum}.`;
      products = [];
      sum = 0;
   }
}