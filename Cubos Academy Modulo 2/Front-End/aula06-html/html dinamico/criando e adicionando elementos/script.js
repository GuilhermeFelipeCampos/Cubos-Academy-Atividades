const root = document.querySelector('body')

fetch('http://jsonplaceholder.typicode.com/users').then((resposta) => {
    const promiseBody = resposta.json();
    promiseBody.then((body) => {
        body.forEach((user) => {

            const div = document.createElement('div');
            div.classList.add('user');


            const name = document.createElement('h1');
            name.textContent = user.name;

            const username = document.createElement('p');
            username.textContent = user.username;

            const email = document.createElement('p');
            email.textContent = user.email;

            div.append(name, username, email);

            root.append(div);
        });
    });
});