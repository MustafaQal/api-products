const params = new URLSearchParams(location.search);
const productId = params.get("id");

console.log(productId);
const getProductbyID = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${productId}`);
    //console.log(response.data);
    return response.data;
};

getProductbyID();

const displaySingleProduct = async () => {
    const product = await getProductbyID();
    //Mustafa: The Right Corner 
    document.querySelector(".productTitle").textContent = product.title;
    console.log(product);
    // const productID = product.map((ProID) => {
    //     return `
    //             <div>
    //             <h3> ${ProID.title} </h3>
    //             </div>
    //     `;
    // }).join("");
    document.querySelector(".productDetails").innerHTML = `
    <!--Mustafa draft design-->
    <div>
            <h2 class="font-bold text-center">${product.title}</h2>
            <img src="${product.thumbnail}" class=""/>
            <p class=""> ${product.description}</p>
            <p class="">$${product.price}</p>
            <p class="">${product.rating}</p>
            <p class=""> Stock: ${product.stock}</p>
            <h3> ${product.availabilityStatus} </h3>
            <p class="">Brand: ${product.brand}</p>
        </div>
    `;   
};

displaySingleProduct();