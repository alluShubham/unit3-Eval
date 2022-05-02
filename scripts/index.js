// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML =navbar();

import sidebar from "../components/sidebar.js";

document.querySelector("#sidebar").innerHTML =sidebar();

import { getData ,append } from "./fetch.js";





let serachR = (ele) =>{
    if(ele.key ==="Enter"){
        let value = document.querySelector("#search_input").value;
        console.log(value);
        

        let container =document.querySelector("#results");
        container.innerHTML =null;

        getData(value).then ((data) =>{
            let newsDat=data.articles;

            localStorage.setItem("newssearch",JSON.stringify(newDatas));
            window.location.href="search.html"
            
        })
    }
}



document.querySelector("#search_input").addEventListener("keydown",serachR);


let getData1 = async () =>{
    try{
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`)

        let data =res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

let append1 =(data,container) =>{
    data.map(function(ele){
        let news =document.createElement("div");
        news.setAttribute("class","news");

        let image =document.createElement("img");
        image.src=ele.urlToImage;

        let post =document.createElement("h3");
        post.textContent =ele.title;

        let des =document.createElement("p");
        des.textContent =ele.description;

        let div1 =document.createElement("div");
        div1.setAttribute("id","bot1")
        div1.append(post,des)

        news.append(image,div1);

        // let container =document.querySelector("#results");

        container.append(news)
    })
}

let container =document.querySelector("#results");
container.innerHTML =null;

getData1().then ((data) =>{
    console.log(data.articles);
    append1(data.articles,container)
})