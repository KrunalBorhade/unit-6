var det = document.querySelector("#movies").value

async function searchMovie(){
    
    try{

   
        let movie = document.getElementById("query").value;
 
   let res = await fetch(`https://www.omdbapi.com/?apikey=7b33398d&s=${movie}`)
   let data = await res.json()
   console.log("data :",data)
      
   return data.Search

    }
    catch(err){
        console.log("err: ",err)
    }

}


async function main(){

    let data =await searchMovie();
    if(data===undefined){

        return 
    }
    appendData(data)
    
}

let movies_div = document.getElementById("movies")

function appendData(movies){
     movies_div.innerHTML = ""
    movies.forEach(function(el){
        let p = document.createElement("p")
        p.innerHTML = el.Title
        movies_div.append(p);
})

}
let timerId; 

function debounce(func, delay){

    if(timerId){
        clearTimeout(timerId);
    }
    

   timerId = setTimeout(function (){
        func();
    },1000)
}




