const test= document.getElementById('test');

test.setAttribute('align', 'right');

test.setAttribute('style', 'color: purple; background: red');

function changeCard(){
    const card_num = document.getElementById('card_num').value;
    const card_color = document.getElementById('card_color').value;
    const card_bg = document.getElementById('card_bg').value;

    const id = `card_${card_num}`;

    document.getElementById(id).setAttribute('style', `color: ${card_color}; background: ${card_bg}`)

    console.log(card_num, card_color, card_bg)
}

git config --global user.email "you@example.com"
git config --global user.name "Your Name"