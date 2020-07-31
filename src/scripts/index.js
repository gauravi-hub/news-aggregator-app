const url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=6c06fada08cd458ab4cc9445c9a6242c";



$(document).ready(async function news(){
  let response = await fetch(url);
  let data = await response.json();
  //debugger;
  let news = '';
  data.articles.forEach(article=> {
    // put your loop code over here 
        news+= `
                    <li class="article">
                       <img class="article-img" src="${article.urlToImage}"/>
                       <h2 class="article-title">${article.title}</h2>
                       <p class="article-description">${article.description}</p>
                       <span class="article-author">${article.author}</span>
                       <a class="article-link" href="${article.url}" target="_blank"></a>
                    </li>
                `;
      });
      
            document.getElementById("news-articles").innerHTML=news;
        })
       
    

$(document).ready(function(){ 
    $('#search').keypress(()=>{
      let searchField = $("#search").val();
      const url1 = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6c06fada08cd458ab4cc9445c9a6242c";
      
      if(searchField !== ""){
        $.ajax({
          url: url1,
          method: "GET",
          dataType: "json",
          
            success: function(news){
            let output1 = "";
            let articles = news.articles;
            
            for(var art in articles){
              output1 +=`
                <li class="article">
                   <img class="article-img" src="${art.urlToImage}"/>
                   <h2 class="article-title">${art.title}</h2>
                   <p class="article-description">${art.description}</p>
                   <span class="article-author">${art.author}</span>
                   <a class="article-link" href="${art.url}" target="_blank"></a>
                </li>`;
            }
      console.log(output1);
            if(output1 !== ""){
              document.getElementById("news-articles").innerHTML=output1;  
            }
            else{
        news_articles.innerHTML='<li class="not-found">No article was found based on the search.</li>';

                } 
          }   
        }); 
      }
   
    });
});