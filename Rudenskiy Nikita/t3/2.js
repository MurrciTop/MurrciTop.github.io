console.log(`t3`);

function saveArticle() {
    const article = {
        title: document.getElementById('title').value,
        autor: document.getElementById('autor').value,
        article: document.getElementById('article').value
    };

    if(
        article.title.length == 0 ||
        article.autor.length == 0 ||
        article.article.length == 0 
     ) { alert('Помилка!!!!!!!!!!!!!!!!!'); return }

     db.collection("articles").add(article).then( function() {
         getAllArticles();
     })

console.log(article);
}

const articles = [];

function getAllArticles() {
    db.collection("articles").get().then( function(res) {
        res.forEach( function(doc) {
        const article = doc.data();
        articles.push(article);
    });

    alert(`Article added. ${articles.length} - articles saved.`)
    })
}