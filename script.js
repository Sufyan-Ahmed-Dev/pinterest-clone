var arr = [
    {name:"puppy", img:"https://images.unsplash.com/photo-1629740067905-bd3f515aa739?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGRvZ3N8ZW58MHx8MHx8fDA%3D"},
    {name: "white T-Shirt" , img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Yellow T-Shirt" , img:"https://images.unsplash.com/photo-1541732536868-4932d21a963d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Black Dog" , img:"https://images.unsplash.com/photo-1631472608304-bd2c665949fc?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "White Dog" , img:"https://images.unsplash.com/photo-1540411003967-af56b79be677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGRvZ3N8ZW58MHx8MHx8fDA%3D"},
    {name: "Small Dog" , img:"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]
function ShowImages(){
    var clutter="";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.img}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })
    document.querySelector(".container").innerHTML = clutter
}

function SearchFunc(){
    var input = document.querySelector("#searchinput")
    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block"
    })

    input.addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none"
    })

    input.addEventListener("input" , function(){
        console.log(input.value)
        let filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        console.log(filteredArray)
        var clutter = ""
        filteredArray.forEach(function(obj){
            clutter +=`<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`

        })
        document.querySelector(".searchdata").style.display = "block"
        document.querySelector(".searchdata").innerHTML = clutter
    })

   
}



SearchFunc()
ShowImages()
