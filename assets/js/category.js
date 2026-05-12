
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
<div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300  group">
                <div class=" h-52 bg-gray-100">
                    <img class="max-w-full max-h-full object-contain group-hover:scale-105 transition"
                        src="${product.thumbnail}" 
                        alt="${product.title}"
                    />
                </div>

                <div class="p-5">
                    <h3 class="font-semibold text-lg text-gray-800 mb-2"> ${product.title} </h3>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-blue-600 font-bold text-lg">$${product.price}</span>
                        <span class="text-yellow-500 text-sm font-medium">⭐ ${product.rating} </span>
                    </div>
                </div>
            </div>
            `

    }).join("");
    document.querySelector(".productList").innerHTML = productsList;

}

displayList();
