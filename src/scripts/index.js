/*
const proxyUrl="https://cors-anywhere.herokuapp.com/"
const qInTitle="";
const from="";
const apiKey="";
const url=`${proxyUrl}https://newsapi.org/v2/everything?qInTitle=${qInTitle}&from=${from}languag=en&apiKey=${apiKey}`;
const request = new Request(url);
fetch(request)
.then(response=>response.json())
.then((news)=>{
    console.log(news);
})
.catch(error=>{
    console.log(error);
});
*/  
const apikey="6c06fada08cd458ab4cc9445c9a6242c";
var article_area=document.getElementById("news-articles");
function getNews(news){
    let output="";
    if(news.totalResults>0){
        news.articles.forEach(ind=>{
            output+=    
        `<section class="container">
        <li class="article"><a class="article-link" href="${ind.url}" target="_blank">
        <div class="img_area">
        <img src="${ind.urlToImage}" class="article-img" alt="${ind.title}"></img>
        </div>
        <h2 class="article-title">${ind.title}</h2>
        <p class="article-description">${ind.description || "Description not available "}</p><br>
        <span class="article-author">-${ind.author? ind.author:"Anon"}</span><br>
        </a>
        </li>
        </section>
        `;

        });
        article_area.innerHTML=output;
    }
    else{
        article_area.innerHTML='<li class="not found">No article was found based on the sarch.</li>'
    }
};


async function retreive(searchValueText=""){
    article_area.innerHTML='<p class="load">News are loading....</p>';

    if(searchValueText!=""){
       url=`https://newsapi.org/v2/everything?q=${searchValueText}&apiKey=${apikey}`;
        //url=`http://newsapi.org/v2/everything?q=${searchValueText}&from=2020-06-29&sortBy=publishedAt&apiKey=${apikey}`;
        //url=`https://newsapi.org/v2/everything?q=${searchValueText}&apikey=${apikey}`;

    }
    else{
        //url=`https://newsapi.org/v2/top-headlines?country=in&apikey=${apikey}`;
        url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;
        //url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=`
    }

    const response=await fetch(url);
    const result=await response.json();
    getNews(result);


}


async function searchValue(event)
{
    if(event.which===13|| event.keyCode===13 || event.key==="Enter")
    {
        console.log(event);
        console.log(event.which);
        console.log(event.key);
        console.log(event.keyCode);

        retreive(event.target.value);

        console.log(event.target.value);


    }
};


function start(){
    console.log("start function calld in onload")

    document.getElementById("search").addEventListener('keypress',searchValue);
    retreive();
}









//http://newsapi.org/v2/everything?q=bitcoin&from=2020-06-29&sortBy=publishedAt&apiKey=6c06fada08cd458ab4cc9445c9a6242c