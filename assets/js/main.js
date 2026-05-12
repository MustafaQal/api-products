
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
    console.log(categoriesGet);
    const categories = categoriesGet.map((category) => {
        return `
            <div class="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition hover:-translate-y-2 cursor-pointer">
                <h2 class="font-semibold capitalize text-lg"> ${category} </h2>
            </div>
        `
    }).join("");

    document.querySelector(".categoryList").innerHTML = categories;

}
displayCategories();



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
                <div class="bg-white shadow">
                    <h3 class="" >${product.title} </h3>
                    <span class="price"> Rate ${product.price} </span>
                    <span class="rating"> Rate ${product.rating} </span>
                    <div class="thumbnail"> 
                        <img src="${product.thumbnail}"/>
                    </div>
                </div>
                -->
            <!--Asked some help with UI/UX :) hhhhhh-->

            <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div class=" h-48 overflow-hidden bg-gray-100">
                    <img 
                        src="${product.thumbnail}" 
                        alt="${product.title}"
                        class="w-full h-full object-cover group-hover:scale-105 transition"
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

