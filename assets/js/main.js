    
//Mustafa: Get Categories List

const getCategories = async ()=> {
    const response = await axios.get('https://dummyjson.com/products/category-list');
    //console.log(response);
   // const data = response.data;
   //console.log(data);
   return response.data;
}
getCategories();
    

const displayCategories = async ()=>{
    
    const categoriesGet = await getCategories();
    console.log(categoriesGet);
    const categories = categoriesGet.map((category)=>{
        return `
            <div class="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition hover:-translate-y-2 cursor-pointer">
                <h2 class="font-semibold capitalize text-lg"> ${category} </h2>
            </div>
        `
    }).join("");

    document.querySelector(".categoryList").innerHTML = categories;

}
displayCategories();

