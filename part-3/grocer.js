let cartItems = []

// Cart count
const cartCount = document.getElementById('cart-item-count')
function updateCartCount() {
  cartCount.innerText = `(${cartItems.length})`
}

// Cart total
const modalCartTotal = document.getElementById('modal-cart-total')
function updateCartTotal() {
  const cartTotal = cartItems.reduce((sum, cartItem) => {
    return sum + cartItem.price
  }, 0)
  modalCartTotal.innerText = `Total $${cartTotal}`
}

// Add to Cart
const addToCartBtns = document.getElementsByClassName('add-to-cart')

for (let i = 0; i < addToCartBtns.length; i++) {
  let addToCartBtn = addToCartBtns[i]
  addToCartBtn.onclick = function() {
    const itemPrice = addToCartBtn.previousElementSibling
    const itemName = itemPrice.previousElementSibling
    cartItems.push({
      name: itemName.innerText,
      price: Number(itemPrice.innerText.substring(1))
    })
    updateCartCount()
    updateCartTotal()
  }
}

// Clear Cart
const clearCartBtn = document.getElementById('clear-cart')

clearCartBtn.onclick = function() {
  cartItems = []
  updateCartCount()
  updateCartTotal()
  updateModalCartItems()
}

// Modal
const modal = document.getElementById('cart-modal')
const modalCartItems = document.getElementById('modal-cart-items')
const openModalBtn = document.getElementById("cart-button")
const closeModalX = document.getElementsByClassName("modal-close")[0]

function updateModalCartItems() {
  if (cartItems.length === 0) {
    modalCartItems.innerHTML = `
    <p>Aren't you hungry? Add some items to your cart. Nom nom nom...</p>`
  } else {
    modalCartItems.innerHTML = `<ul>`
    cartItems.forEach((cartItem) => {
      modalCartItems.innerHTML += `
      <li class="item flex flex-row-between">
      <span class="item-name">${cartItem.name}</span>
      <span class="item-price">$${cartItem.price}</span>
      </li>
      `
    })
    modalCartItems.innerHTML += `</ul>`
  }
}

openModalBtn.onclick = function() {
  modal.style.display = "block"
  updateModalCartItems()
}

closeModalX.onclick = function() {
  modal.style.display = "none"
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
