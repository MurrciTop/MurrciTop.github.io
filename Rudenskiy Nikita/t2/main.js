const spiner = document.getElementById('spiner');
const list = document.getElementById('list');
const articles = [];

db.collection("articles").get().then( function(res) {

    spiner.style.display = "none";

    res.forEach( function(doc, index) {
        const article = doc.data();
        articles.push(article);
        drawArticle(article, index);
    });

    console.log(articles);
    
});


function drawArticle(data, index) {
    const article = document.createElement('article');

    const title = document.createElement('h2');
    const text = document.createElement('div');
    const autor = document.createElement('a');

    title.innerHTML = data.title;
    title.id = `article_${index}`;
    text.innerHTML = data.article;
    autor.innerHTML = "Original";
    autor.href = data.autor;

    article.appendChild(title);
    article.appendChild(text);
    article.appendChild(autor);

    list.appendChild(article);
}

    function drawMenu(data) {
        //створити тег а
        //додати назву як текст в а 
        //додати href як текст в а (href = "#id"), де id - id статті
        //додати тег а в menu
    }