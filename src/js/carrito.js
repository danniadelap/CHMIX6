class carrito{
comprarProducto(e){
    e.preventDefault();
    if(e.target.classList.contains('añadirOutfit')){
        const producto =e.target.parentElement.parentElement;
        this.leerDatosProducto(producto);
    }

}
}

const carro = new carrito();
const carrito = document.getElementById('');
const listaCarrito =document.querySelector('#lista-carrito tbody')

function cargarEventos(){
    productos.addEventListener('click',(e)=>{carro.comprarProducto(e)});
}



function updateSubtotal(product) {

    console.log('Calculating subtotal, yey!');
    const price = product.querySelector(`.pu span`).innerHTML;
    
    const quantity = product.querySelector(`.qty input`).value;
    
    const subtotal = product.querySelector(`.subtot span`)
    
    const total = parseFloat(price).toFixed(2) * parseFloat(quantity)
    
    subtotal.innerHTML = total;
    console.log(total)
    return total
    }
    
      // ITERATION 2
    
    function calculateAll(product) {
      const elementProduct = document.getElementsByClassName(`product`)
      //console.log(elementProduct)
  
      let totalTotal = 0;
  
    //    for (const elem of elementProduct){
    //      console.log(elem)
    //      totalTotal = totalTotal + updateSubtotal(elem) 
    //  } 
    //  for(let i = 0 ; i<= elementProduct.length ; i++){
  
    //    totalTotal = totalTotal + updateSubtotal(elementProduct[i])
    // }
     const products = document.querySelectorAll('.product');
  
     products.forEach(function(product) {
      totalTotal += updateSubtotal(product);
   });
  
      // ITERATION 3
      let grandTotal = document.querySelector(`#total-value span`).innerHTML;
      
      const collection = document.querySelectorAll(`.product`);
    
      let totalArr = Array.from(collection)
    
      totalArr = totalArr.reduce(function (acc,product) { 
        return acc += updateSubtotal(product)}, 0);
      console.log(totalArr);
  
      grandTotal = Number(totalArr).toFixed(2);
      //console.log(grandTotal);
      return grandTotal;
  
      
      }
      
      
    
    // ITERATION 4
  
  
    function removeProduct(event) {
   
     const target = event.currentTarget;
      console.log('The target in remove is:', target.parentNode.parentNode);       
      
      target.parentNode.parentNode.remove();
      calculateAll();
    }
    
    // ITERATION 5
    
    function createProduct() {
      const mainProductsTable = document.querySelector(`tbody`);
      const newProductName = document.querySelector(`input[placeholder= "Product Name"]`);
      const newProductPrice = document.querySelector(`input[placeholder="Product Price"]`);
    
      //console.log({mainProductsTable, newProductName, newProductPrice});
    
      const newProductItem = document.createElement(`tr`);
      newProductItem.innerHTML = `
      <tr class="product">
              <td class="name">
                <span>${newProductName.value}</span>
              </td>
              <td class="pu">$<span>${newProductPrice.value}</span></td>
              <td class="qty">
                <input type="number" value="0" min="0" placeholder="Quantity" />
              </td>
              <td class="subtot">$<span>0</span></td>
              <td class="action">
                <button class="btn btn-delete">Delete</button>
              </td>
            </tr>
      `;
      newProductItem.classList.add('product');
      mainProductsTable.appendChild(newProductItem);
    
      newProductItem.querySelector(`.btn-remove`).addEventListener(`click`, removeProduct);
    }
    
    window.addEventListener('load', () => {
  
      const calculatePricesBtn = document.getElementById('calc');
  
      calculatePricesBtn.addEventListener('click', calculateAll);
    
      const removeButton = document.querySelectorAll(`.btn-delete`);
      
      removeButton.forEach(button => {
        
        button.addEventListener(`click`, removeProduct)
      });
    
      const createButton = document.getElementById(`create`);
      createButton.addEventListener(`click`, createProduct);
    });