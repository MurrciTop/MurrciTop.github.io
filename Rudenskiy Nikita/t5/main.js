const users_table = document.getElementById('users_table');

const firstName = document.getElementById('name');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const age = document.getElementById('age');

db.collection("users").get().then(function(res) {
    let num = 0;
    res.forEach( function(doc) {
        const user = doc.data();
        user.id = doc.id;

        console.log(user);

        num++;
        drawUser(user, num)
    });
    const del_buttons = document.getElementsByClassName('btn-del');
    const del_buttons_arr = Array.from(del_buttons);
    del_buttons_arr.forEach( function(btn){
        btn.addEventListener('click', function(){
            console.log('delet');
            const tr = btn.parentElement.parentElement;
            db.collection("users").doc(tr.id).delete().then( function(){
                console.log("Document deleted!")
                document.getElementById(tr.id).remove();
            })
        })
    })

    const edit_buttons = document.getElementsByClassName('btn-edit');
    const edit_buttons_arr = Array.from(edit_buttons);

    edit_buttons_arr.forEach( function(btn){
        btn.addEventListener('click', function(){
            console.log('edit ', btn);
            const tr = btn.parentElement.parentElement;

            const columns = tr.getElementsByTagName("td");

            firstName.value = columns[1].innerText;
            lastName.value = columns[2].innerText;
            email.value = columns[3].innerText;
            age.value = columns[4].innerText;

            var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
                keyboard: false
              })

              myModal.show();

              user_id = tr.id;

            console.log(columns);
        })
    })

});

function drawUser(user, num) {
    const row = document.createElement('tr');

    const index = document.createElement('td')
    index.innerText = num;
    row.appendChild(index);

    const name = document.createElement('td');
    name.innerText = user.name;
    row.appendChild(name)

    const lastName = document.createElement('td');
    lastName.innerText = user.lastName;
    row.appendChild(lastName)

    const email = document.createElement('td');
    email.innerText = user.email;
    row.appendChild(email)

    const age = document.createElement('td');
    age.innerText = user.age;
    row.appendChild(age)

    const edit = document.createElement('button');
    edit.classList.add('btn');
    edit.classList.add('btn-sm');
    edit.classList.add('btn-primary');
    edit.classList.add('btn-edit');
    edit.innerText = "Edit";

    const del = document.createElement('button');
    del.classList.add('btn');
    del.classList.add('btn-sm');
    del.classList.add('btn-danger')
    del.classList.add('btn-del');
    del.innerText = "Delete";

    const edit_td = document.createElement('td');
    edit_td.appendChild(edit);
    row.appendChild(edit_td);

    const del_td = document.createElement('td');
    del_td.appendChild(del);
    row.appendChild(del_td);

    row.id = user.id;
    users_table.appendChild(row);
}

function saveChanges() {
    console.log('save');

    const user = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        age: age.value
    }

    db.collection("users").doc(user_id).update(user).then( function(){
        // дії після оновлення
        console.log("Document is updated!")
    });

    const row = document.getElementsById(user_id);
    const columns = row.getElementsByTagName("td");

    console.log(row);
    console.log(columns);
    console.log(user);
            
    columns[1].innerText = name.value
    columns[2].innerText = lastName.value
    columns[3].innerText = email.value
    columns[4].innerText = age.value

            myModal.hide();
}