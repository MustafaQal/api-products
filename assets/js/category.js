
const params = new URLSearchParams(location.search);
//console.log(location.search); //?name=womens-dresses
const getName = params.get("name");
console.log(getName); //womens-bags

//Mustafa: right corner
document.querySelector(".categoryTitle").textContent = getName;

const returnCategoryName = async () => {
    const response = await axios.get(`https://dummyjson.com/products/category/${getName}`);
    //console.log(response.data);
    console.log(response.data.products);
    return response.data.products;

}

returnCategoryName();

const displayList = async () => {
    const listCategory = await returnCategoryName();

    const productsList = listCategory.map((product) => {
        return ` 
            <!-- Mustafa Copy the same code from displayProducts hhhhhh :) -->
             <!-- Mustafa's Creations hhh -->
            
                <div class="bg-white shadow card">
                    <h3 class="" >${product.title} </h3>
                    <span class="price"> Rate ${product.price} </span>
                    <span class="rating"> Rate ${product.rating} </span>
                    <div class="thumbnail"> 
                        <img src="${product.thumbnail}"/>
                    </div>
                </div>
            `

    }).join("");
    document.querySelector(".productList").innerHTML = productsList;

}

displayList();
