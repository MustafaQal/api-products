
//Mustafa: Get Categories List

const getCategories = async () => {
    const response = await axios.get('https://dummyjson.com/products/category-list');
    //console.log(response);
    // const data = response.data;
    //console.log(data);
    return response.data;
}
getCategories();

const displayCategories = async () => {
    const categoriesGet = await getCategories();

    const categories = categoriesGet.map((category) => {
        return `
            <div
                onclick="goToCategory('${category}')"
                class="group bg-white border border-gray-100 shadow-sm rounded-2xl p-6 text-center
                       hover:shadow-xl hover:-translate-y-2 hover:border-blue-200
                       transition-all duration-300 cursor-pointer"
            >
                <h3 class="font-semibold text-lg capitalize text-gray-800 group-hover:text-blue-600 transition">
                    ${category.replaceAll("-", " ")}
                </h3>
            </div>
        `;
    }).join("");

    document.querySelector(".categoryList").innerHTML = categories;
};

displayCategories();

const goToCategory = (category) => {
    window.location.href = `category.html?name=${category}`;
};

// Mustafa: Get Products List



const getProducts = async () => {

    const response = await axios.get(`https://dummyjson.com/products?limit=10`);
    //console.log(response);
    console.log(response.data.products);
    return response.data.products;

}

getProducts();

const displayProducts = async () => {
    const data = await getProducts();

    const products = data.map((product) => {
        return `
             <!-- Mustafa's Creations hhh -->
                <!--
                <div class="bg-white shadow card">
                    <h3 class="" >${product.title} </h3>
                    <span class="price"> Rate ${product.price} </span>
                    <span class="rating"> Rate ${product.rating} </span>
                    <div class="thumbnail"> 
                        <img src="${product.thumbnail}"/>
                    </div>
                </div>
                -->
            <!--Asked AI some help to improve the card design :) hhhhhh-->

        <div onclick="goToProduct(${product.id})" class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">                <div class=" h-52 bg-gray-100">
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

    document.querySelector(".productList").innerHTML = products;

}

displayProducts();

//Mustafa: This section is for displaying details based on the ID, Note that I  updated the div above using the onclick event
//copy it to category,js as well
const goToProduct = (id) => {
    location.href = `singleproduct.html?id=${id}`;
};