const article_id = new URL(window.location.href).searchParams.get("id");

function getArticle(article_id) {
    db.collection('articles').doc(article_id).get().then(res => {
        let article = {
            id: res.id,
            ...res.data()
        }
        console.log(article)
        drawArticle(article);
   })
}
getArticle(article_id)


function drawArticle(article){
    const article_titile = document.createElement('h1');
    const article_text = document.createElement('div');
    const article_likes = document.createElement('div');

    article_titile.classList.add('text-center');
    article_titile.innerText = article.title;

    article_text.innerHTML = article.article;

    article_likes.id = "like-btn";
    article_likes.classList.add("d-flex");
    article_likes.classList.add("justyfy-content-end");
    article_likes.classList.add("align-items-center");
    article_likes.innerHTML = 
    `
    <svg id="like-svg" viewBox="0 0 24 24" style="pointer-events: none; fill display: block; width: 20px; height: 20px;"><g class="style-scope yt-icon"><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z" class="style-scope yt-icon"></path></g></svg> <span id="likes_num">${article.likes}</span>
    `


    document.getElementById('article').appendChild(article_titile);
    document.getElementById('article').appendChild(article_text);
    document.getElementById('article').appendChild(article_likes);

    const likeBtn = document.getElementById('like-btn');
    console.log(likeBtn);
    likeBtn.addEventListener('click', function() {
        const svg = document.getElementById('like-svg');
        
        const isActive = Array.from(svg.classList).includes("isActive");

        if(isActive == false){
            svg.classList.add('isActive');
            console.log(article.id);
            db.collection('articles').doc(article.id).update({
                likes: article.likes+1
            })
            .then( ()=> {
                document.getElementById('likes_num').innerText = article.likes+1;
            })
        }
        if(isActive == true){
            svg.classList.remove('isActive');
        }

        console.log(isActive);

    })
}
console.log(article_id);

function addlike() {
    console.log('like');
}



const user = JSON.parse( localStorage.getItem('user') );




document.getElementById('user_comment_name').innerText = 
`Leve a comment as: <b>${user.lastName} ${user.name}</b>`;

console.log(user);

function saveComment(){
    const text = document.getElementById('comment_text').value;

    if(text == null || text == ""){
        alert("YESSSSSSSSSSSSSSSSSSSSSSS!!!!!!!!!!!!!!!!!!!!!!!!");
        return;
    }
    const comment = {
        author: `${user.name} ${user.lastName}`,
        article_id,
        text
    }

    db.collection('comments').add(comment).then( res => {
        alert("you are niggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        document.getElementById('comment_text').value = "";
    });

    console.log(comment);
    console.log('click');

    
}
function getAllComments(){
    db.collection('comments')
    .where('article_id', '==', article_id)
    .get()
    .then( res => {
        res.forEach(doc => {
            drawComment(doc.data());
        })
    } )
}

function drawComment(comment){
    const old_comments = document.getElementById('old_comments');

    const comment_box = document.createElement('div');
    comment_box.classList.add('comment');
    comment_box.classList.add ('my-3');

    const h5 = document.createElement('h5');
    h5.innerText = comment.author;

    const p = document.createElement('p');
    p.innerText = comment.text;

    comment_box.appendChild(h5);
    comment_box.appendChild(p);

    old_comments.appendChild(comment_box);
}

getAllComments();

/*
?id=8225sG3qPJx9JxKGS8Vr
*/