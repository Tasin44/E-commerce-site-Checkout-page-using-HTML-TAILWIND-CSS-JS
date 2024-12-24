
const countryStates = {
    US: ["California", "Texas", "Florida", "New York", "Illinois"],
    BD: ["Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet"],
    CA: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
    IN: ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Kerala"],
    PK: ["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad"],
    UK: ["England", "Scotland", "Wales", "Northern Ireland"],
    CN: ["Beijing", "Shanghai", "Guangdong", "Zhejiang", "Sichuan"],
    NL: ["North Holland", "South Holland", "Utrecht", "Gelderland", "Flevoland"],
  };

  function changeStates() {
    const countrySelect = document.getElementById("country");
    const stateSelect = document.getElementById("state");

    stateSelect.innerHTML = '<option value="" disabled selected>Choose...</option>';

    const selectedCountry = countrySelect.value;

    if (countryStates[selectedCountry]) {
      countryStates[selectedCountry].forEach((state) => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
      });
    }
  }


  //Product description of each product which will be initailly hidde, 
  //after clicking the plus icon it'll appear
  function toggleDescription(product) {
    const briefDescription = document.getElementById(`brief-description-${product}`);
    const detailedDescription = document.getElementById(`detailed-description-${product}`);
    const icon = document.getElementById(`toggle-icon-${product}`);
    const image = document.getElementById(`image-${product}`);
    // Toggle the visibility of the detailed description
    if (detailedDescription.style.display === "none") {
      detailedDescription.style.display = "block"; // Show detailed description
      image.style.display = "block"; // Show image
      icon.classList.remove('fa-plus');
      icon.classList.add('fa-minus'); // Change icon to minus
    } else {
      detailedDescription.style.display = "none"; // Hide detailed description
      image.style.display = "none"; // Hide image
      icon.classList.remove('fa-minus');
      icon.classList.add('fa-plus'); // Change icon back to plus
    }
  }
  


//After applying promo code, total amount will be reduced
  function applyPromoCode() {
    // Get the promo code entered by the user
    const promoCode = document.getElementById('promo').value.trim();
    
    // Valid promo code
    const validPromoCode = "BONUS";
    const discount = 5; // Amount to be discounted
    
    // Get the total amount element and the discount element
    const totalAmountElement = document.getElementById('total-amount');
    const promoDiscountElement = document.getElementById('promo-discount');
    
    let currentTotal = 25; // Default total amount
    
    // If the promo code entered is valid, apply the discount
    if (promoCode === validPromoCode) {
      const newTotal = currentTotal - discount; // Apply the discount
      totalAmountElement.textContent = `$${newTotal.toFixed(2)}`; // Update total
      promoDiscountElement.textContent = `-$${discount}`; // Show the promo discount
    } else {
      alert('Invalid promo code');
    }
    
    // Clear the input field after applying promo
    document.getElementById('promo').value = '';
  }



//Cart initially hidden, after clicking the "click to checkout" button, 
//cart will be visible 

  function toggleCartVisibility() {
    // Get the cart section element by its ID
    const cartSection = document.getElementById('cart-section');
    const movement= document.getElementById('move');

    movement.classList.toggle('md:grid-cols-2')
    // console.log(movement);
    // Toggle the 'hidden' class to show or hide the cart
    cartSection.classList.toggle('hidden');
  }