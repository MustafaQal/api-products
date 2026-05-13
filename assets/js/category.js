const params = new URLSearchParams(location.search);
const getName = params.get("name");

document.querySelector(".categoryTitle").textContent = getName;

const returnCategoryName = async () => {
    const response = await axios.get(
        `https://dummyjson.com/products/category/${getName}`
    );

    return response.data.products;
};

const displayList = async () => {
    const listCategory = await returnCategoryName();

    const productsList = listCategory.map((product) => {
        return `
            <div
                onclick="goToProduct(${product.id})"
                class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
                <div class="h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
                    <img
                        class="max-w-full max-h-full object-contain group-hover:scale-105 transition"
                        src="${product.thumbnail}"
                        alt="${product.title}"
                    />
                </div>

                <div class="p-5">
                    <h3 class="font-semibold text-lg text-gray-800 mb-2">
                        ${product.title}
                    </h3>

                    <div class="flex justify-between">
                        <span class="text-blue-600 font-bold">
                            $${product.price}
                        </span>

                        <span class="text-yellow-500">
                            ⭐ ${product.rating}
                        </span>
                    </div>
                </div>
            </div>
        `;
    }).join("");

    document.querySelector(".productList").innerHTML =
        productsList;
};

displayList();

//Mustafa: This section is for displaying details based on the ID, Note that I  updated the div above using the onclick event
const goToProduct = (id) => {
    location.href = `singleproduct.html?id=${id}`;
};