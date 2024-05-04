let body = document.querySelector('.body');
console.log(body);

function makeRequest(){

    return fetch('http://itgirlschool.justmakeit.ru/api/words', {
    }).then((res) => res.json())
    .then((data) =>{
 
data.forEach(i => {
   
    createTablesheet(i)
})
    }) 
}


makeRequest()





function createTablesheet(a){
    let id = a.id;
    let card = document.createElement('div');
    card.classList.add('card');
    body.appendChild(card);
    let container = document.createElement('div');
    container.classList.add('container');
    card.appendChild(container);
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    container.appendChild(wrapper);
    let words = document.createElement('div');
    words.classList.add('words');
    wrapper.appendChild(words);
    words.textContent = a.english;
    let transcription = document.createElement('div');
    transcription.classList.add('trancription');
    transcription.textContent = a.transcription;
    wrapper.appendChild(transcription);
    let translate = document.createElement('div');
    translate.classList.add('translate');
    translate.textContent = a.russian;
    wrapper.appendChild(translate);
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('remove');
    container.appendChild(deleteButton);
    let deleteButtonImage = document.createElement('img');
    deleteButtonImage.src = 'assets/images/1696523403_gas-kvas-com-p-kartinki-bak-5.png';
    deleteButtonImage.classList.add('trash');
    deleteButton.appendChild(deleteButtonImage);
    deleteButton.addEventListener('click', function(){
        deleteWord(id);

    })

}  

setInterval(function(){
   
    makeRequest()
}, 5000)

function deleteWord (id) {
    return fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: 'POST',
    }).then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })
   
}

let number = '1';
number = parseInt(number);
console.log(typeof number);

Number(number);

parseFloat('3.14')

function convertToNumber(a){
a = parseInt(a);
console.log(typeof a);
if(!isNaN(a)){
    return a
} else {
    return 'Please, provide a valid number'
}


}

console.log(convertToNumber('Hello'));


