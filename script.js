const btn=document.querySelector('#btn');
const jokes=document.querySelector('#jokes');

const url= 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?type=single';

const getjoke=()=>{
    jokes.classList.remove('fade');
    fetch(url)
.then(response=>{
    return response.json();
}).then(data=>{
    jokes.textContent=`${data.joke}`;
    jokes.classList.add('fade');
}).catch(err=>{
    console.log('error');
})
}

btn.addEventListener('click' ,getjoke);

    getjoke();
     


