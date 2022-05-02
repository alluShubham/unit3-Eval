// https://masai-mock-api.herokuapp.com/news/top-headlines?country=in

// https://masai-mock-api.herokuapp.com/news?q=

let getData = async (value) =>{
    try{
        let res = await fetch (`https://masai-mock-api.herokuapp.com/news?q=${value}`)

        let data =res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

let append =(data,container) =>{
    data.map(function(ele){
        let news =document.createElement("div");
        news.setAttribute("class","news");

        let image =document.createElement("img");
        image.src=ele.urlToImage;

        let post =document.createElement("h3");
        post.textContent =ele.title;

        let des =document.createElement("p");
        des.textContent =ele.description;

        news.append(image,post,des);

        container.append(news)
    })
}

export {getData,append}