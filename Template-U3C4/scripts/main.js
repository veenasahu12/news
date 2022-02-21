async function apiCall(url) {
   //add api call logic here
try{
    let res = await fetch(url);

    let data = await res.json();
    return data;
}catch(error){
    console.log("error:",error);
}
}


function appendArticles(articles, main) {

    //add append logic here
    articles.map((elem) => {
        let card = document.createElement("div");
        card.setAttribute("class","card");

        let description = document.createElement("p");
        description.innerHTML = elem.description;
        description.setAttribute("class","desc");

        let title = document.createElement("p");
        title.innerHTML = elem.title;
        title.setAttribute("class","title");

        let img = document.createElement("img");
        img.src = elem.urlToImage;
        img.setAttribute("class","img");

        card.append(description,title,img);
        card.onclick = () => {
            console.log("elem:",elem)
            localStorage.setItem("article",JSON.stringify(elem));
            window.location.href ="news.html";
        };
        main.append(card)
    });

}

export { apiCall, appendArticles };