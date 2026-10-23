function addItem(){
    //selecting the <ul> element by its id
   const list =document.getElementById("item-list");
   //create new li element
   const newItem = document.createElement("li");
   newItem.textContent= "new Item";
   list.appendChild(newItem);
   document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("add-item").addEventListener("click", addItem)
   })
}