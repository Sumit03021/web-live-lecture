const selectElement = document.getElementById('mySelect');
const formContainer = document.getElementById('filter-form-container1');

selectElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;

  //hidden input field in form section
  if (document.getElementById('selectedValue')) {
    document.getElementById('selectedValue').value = selectedValue;
  } else {
    const hiddenInput = document.createElement('input');
    hiddenInput.type = 'hidden';
    hiddenInput.id = 'selectedValue';
    hiddenInput.name = 'selectedValue';
    formContainer.insertBefore(hiddenInput, formContainer.firstChild);
    hiddenInput.value = selectedValue;
  }
  if (selectedValue === 'Office-Furniture') {
    formContainer.innerHTML = `
        <div class="filter1">
          <h5 class="filter-heading1">Category</h5>
          <div class="lower-filter1">
          <input type="checkbox" name="category" id="cat" value="chair">
          <label for="cat">Office Chairs</label>
          </div>
          <div class="lower-filter1">
          <input type="checkbox" name="category" id="cat" value="desks">
          <label for="cat">Desks</label>
          </div>
          <div class="lower-filter1">
          <input type="checkbox" name="category" id="cat" value="stools">
          <label for="cat">Stools</label>
          </div>
          <div class="lower-filter1">
          <input type="checkbox" name="category" id="cat" value="executive chair">
          <label for="cat">Executive Chairs</label>
          </div>
          <div class="lower-filter1">
          <input type="checkbox" name="category" id="cat" value="storage units">
          <label for="cat">Storage Units</label>
          </div>
          <div class="lower-filter1">
          <input type="checkbox" name="category" id="cat" value="workstation">
          <label for="cat">Workstations</label>
          </div>
        </div>

        <div class="filter1">
         <h5 class="filter-heading1">Collections</h5>
         <div class="lower-filter1">
         <input type="checkbox" id="coll" name="myCollection" value="Tiramoli">
         <label for="coll">Tiramoli</label>
         </div>
         <div class="lower-filter1">
         <input type="checkbox" id="coll" name="myCollection" value="Anthony">
         <label for="coll">Anthony</label>
         </div>
         <div class="lower-filter1">
         <input type="checkbox" id="coll" name="myCollection" value="Tiramolla">
         <label for="coll">Tiramolla</label>
         </div>
        </div>
        
        <div class="filter1">
         <h5 class="filter-heading1">Price</h5>
         <div class="lower-filter1">
         <input type="checkbox" name="high" id="price">
         <label for="price">High to Low</label>
         </div>
         <div class="lower-filter1">
         <input type="checkbox" name="low" id="price">
         <label for="price">Low to High</label>
         </div>
        </div>    

        <div class="filter1">
         <button class="btn1 edit-btn1" type="submit">Apply Filter</button>
        </div>
            
        `;
  } else if (selectedValue === 'Hotel-Furniture') {
    formContainer.innerHTML = `
    <div class="filter1">
    <h5 class="filter-heading1">Category</h5>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Bedrooms">
    <label for="cat">Bedrooms</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Monoblock Kitchen">
    <label for="cat">Monoblock Kitchen</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="wardrobes">
    <label for="cat">Wardrobes</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="desks">
    <label for="cat">Desks</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="sofas">
    <label for="cat">Sofa</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="headboards">
    <label for="cat">Headboards</label>
    </div>
  </div>

  <div class="filter1">
   <h5 class="filter-heading1">Collections</h5>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Tiramoli">
   <label for="coll">Tiramoli</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Sameer">
   <label for="coll">Sameer</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Saif">
   <label for="coll">Saif</label>
   </div>
  </div>
  
  <div class="filter1">
   <h5 class="filter-heading1">Price</h5>
   <div class="lower-filter1">
   <input type="checkbox" name="high" id="price">
   <label for="price">High to Low</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" name="low" id="price">
   <label for="price">Low to High</label>
   </div>
  </div>    
    
  <div class="filter1">
   <button class="btn1 edit-btn1" type="submit">Apply Filter</button>
  </div>
        `;
  } else if (selectedValue === 'Restaurant-Furniture') {
    formContainer.innerHTML = `
    <div class="filter1">
    <h5 class="filter-heading1">Category</h5>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="chair">
    <label for="cat">Chairs</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="tables">
    <label for="cat">Tables</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Booths">
    <label for="cat">Booths</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="canteen tables">
    <label for="cat">Canteen Tables</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="storage units">
    <label for="cat">Storage Units</label>
    </div>
  </div>

  <div class="filter1">
   <h5 class="filter-heading1">Collections</h5>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Saif">
   <label for="coll">Saif</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Anthony">
   <label for="coll">Anthony</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Tiramolla">
   <label for="coll">Tiramolla</label>
   </div>
  </div>
  
  <div class="filter1">
   <h5 class="filter-heading1">Price</h5>
   <div class="lower-filter1">
   <input type="checkbox" name="high" id="price">
   <label for="price">High to Low</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" name="low" id="price">
   <label for="price">Low to High</label>
   </div>
  </div>    
    
  <div class="filter1">
   <button class="btn1 edit-btn1" type="submit">Apply Filter</button>
  </div>
        `;
  } else if (selectedValue === 'Shop-Furniture') {
    formContainer.innerHTML = `
    <div class="filter1">
    <h5 class="filter-heading1">Category</h5>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="furnishing">
    <label for="cat">Furnishing</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="hairdresser chair">
    <label for="cat">Hairdresser Chairs</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Display units">
    <label for="cat">Display Units</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Display Cases">
    <label for="cat">Display Cases</label>
    </div>
  </div>

  <div class="filter1">
   <h5 class="filter-heading1">Collections</h5>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Manish">
   <label for="coll">Manish</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Ayesha">
   <label for="coll">Ayesha</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Ayush">
   <label for="coll">Ayush</label>
   </div>
  </div>
  
  <div class="filter1">
   <h5 class="filter-heading1">Price</h5>
   <div class="lower-filter1">
   <input type="checkbox" name="high" id="price">
   <label for="price">High to Low</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" name="low" id="price">
   <label for="price">Low to High</label>
   </div>
  </div>    
    
  <div class="filter1">
   <button class="btn1 edit-btn1" type="submit">Apply Filter</button>
  </div>
          `
  } else if (selectedValue === 'Kitchen-Furniture') {
    formContainer.innerHTML = `
    <div class="filter1">
    <h5 class="filter-heading1">Category</h5>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Mini kitchen">
    <label for="cat">Mini Kitchen</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="kitchen">
    <label for="cat">Kitchen</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Free standing unit">
    <label for="cat">Free Standing Units</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="worktops">
    <label for="cat">Worktops</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Cookers">
    <label for="cat">Cookers</label>
    </div>
  </div>

  <div class="filter1">
   <h5 class="filter-heading1">Collections</h5>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Tiramoli">
   <label for="coll">Tiramoli</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Ayush">
   <label for="coll">Ayush</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Sameer">
   <label for="coll">Sameer</label>
   </div>
  </div>
  
  <div class="filter1">
   <h5 class="filter-heading1">Price</h5>
   <div class="lower-filter1">
   <input type="checkbox" name="high" id="price">
   <label for="price">High to Low</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" name="low" id="price">
   <label for="price">Low to High</label>
   </div>
  </div>    
    
  <div class="filter1">
   <button class="btn1 edit-btn1" type="submit">Apply Filter</button>
  </div>
          `
  } else if (selectedValue === 'Kids-Furniture') {
    formContainer.innerHTML = `
    <div class="filter1">
    <h5 class="filter-heading1">Category</h5>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Bedrooms">
    <label for="cat">Bedrooms</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="sofas and armchair">
    <label for="cat">Sofas & Armchair</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="tables and chairs">
    <label for="cat">Tables & Chairs</label>
    </div>
  </div>

  <div class="filter1">
   <h5 class="filter-heading1">Collections</h5>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Saif">
   <label for="coll">Saif</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Anthony">
   <label for="coll">Anthony</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Tiramolla">
   <label for="coll">Tiramolla</label>
   </div>
  </div>
  
  <div class="filter1">
   <h5 class="filter-heading1">Price</h5>
   <div class="lower-filter1">
   <input type="checkbox" name="high" id="price">
   <label for="price">High to Low</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" name="low" id="price">
   <label for="price">Low to High</label>
   </div>
  </div>    
    
  <div class="filter1">
   <button class="btn1 edit-btn1" type="submit">Apply Filter</button>
  </div>
       `
  } else if (selectedValue === 'Outdoor-Furniture') {
    formContainer.innerHTML = `
    <div class="filter1">
    <h5 class="filter-heading1">Category</h5>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="armchair">
    <label for="cat">Armchairs</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="sofa">
    <label for="cat">Sofa</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="tables">
    <label for="cat">Tables</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="benches">
    <label for="cat">Benches</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="Daybeds">
    <label for="cat">Daybeds</label>
    </div>
    <div class="lower-filter1">
    <input type="checkbox" name="category" id="cat" value="low lounge chair">
    <label for="cat">Low Lounge Chairs</label>
    </div>
  </div>

  <div class="filter1">
   <h5 class="filter-heading1">Collections</h5>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Ayush">
   <label for="coll">Ayush</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Manish">
   <label for="coll">Manish</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" id="coll" name="myCollection" value="Sameer">
   <label for="coll">Sameer</label>
   </div>
  </div>
  
  <div class="filter1">
   <h5 class="filter-heading1">Price</h5>
   <div class="lower-filter1">
   <input type="checkbox" name="high" id="price">
   <label for="price">High to Low</label>
   </div>
   <div class="lower-filter1">
   <input type="checkbox" name="low" id="price">
   <label for="price">Low to High</label>
   </div>
  </div>    
    
  <div class="filter1">
   <button class="btn1 edit-btn1" type="submit">Apply Filter</button>
  </div>
  `
  }
  formContainer.style.display = 'block';
});
