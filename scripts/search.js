// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import navbar from "../components/navbar.js";

document.querySelector("#navbar").innerHTML =navbar();

import { getData ,append } from "./fetch.js";


let value = document.querySelector("#search_input").value;
        console.log(value);

        let container =document.querySelector("#results");
        container.innerHTML =null;

        getData(value).then ((data) =>{
            console.log(data.articles);
            append(data.articles,container);
        });



// let value;



// let serachR = (ele) =>{
//     if(ele.key ==="Enter"){
//         let value = document.querySelector("#search_input").value;
//         // console.log(value);
//         // window.location.href="search.html"

//         // let container =document.querySelector("#results");
//         // container.innerHTML =null;

//         // getData(value).then ((data) =>{
//         //     console.log(data.articles);
//         //     append(data.articles,container)
//         // })
//     }
// }



// document.querySelector("#search_input").addEventListener("keydown",serachR);
// function ship(){
//     let value = document.querySelector("#search_input").value;
//     // document.querySelector("#search_input").addEventListener("input",serachR);
//     return value;
//     console.log(value);
// }

// ship()

// // export default ship;
