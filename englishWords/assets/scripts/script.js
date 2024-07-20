let body = document.querySelector('.body');
let addButton = document.querySelector('.addButton');
let newEnglishWord = document.querySelector('.newEnglishWord');
let newTranscriptionWord = document.querySelector('.newTranscriptionWord');
let newRussianWord = document.querySelector('.newRussianWord');
let newTagWord = document.querySelector('.newTagWord');

addButton.addEventListener('click', function(){
    let newEnglishWordInput = newEnglishWord.value;
    let newTranscriptionWordInput = newTranscriptionWord.value;
    let newRussianWordInput  = newRussianWord.value;
    let newTagWordInput = newTagWord.value;
    let objectForNewWords = {
        english: newEnglishWordInput,
        transcription: newTranscriptionWordInput,
        russian: newRussianWordInput,
        tags: newTagWordInput
    }
    if(objectForNewWords.english || objectForNewWords.transcription   ){

    }
    createNewWord(objectForNewWords);
});


function makeRequest(){

    return fetch('http://itgirlschool.justmakeit.ru/api/words', {
    }).then((res) => res.json())
    .then((data) =>{
    console.log(data);
data.forEach(i => {
   
    createTablesheet(i)
})
    }) 
}
makeRequest()

function createNewWord(object){
    console.log(object);
    return fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
    headers: { 'Content-Type' : 'application/json' },
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify(object)
 })
 
}

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
    let tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = a.tags;
    wrapper.appendChild(tag);

    
    let editButton = document.createElement('button');
    editButton.classList.add('edit');
    wrapper.appendChild(editButton);
    let editButtonImage = document.createElement('img');
    editButtonImage.classList.add('write');
    editButtonImage.src = 'assets/images/zapis.png';
   editButtonImage.alt = 'Edit';
   editButton.appendChild(editButtonImage);
   editButton.classList.add(`editButton-${id}`);

   editButton.addEventListener('click', function(){
    let wordsInput = document.createElement('input');
    wrapper.appendChild(wordsInput);
    wordsInput.value = a.english;
    
    let trancriptionInput = document.createElement('input');
    wrapper.appendChild(trancriptionInput);
    trancriptionInput.value = a.transcription;

    let russianWordInput = document.createElement('input');
    wrapper.appendChild(russianWordInput);
    russianWordInput.value = a.russian;

    let saveButton = document.createElement('button');
    wrapper.appendChild(saveButton);
    saveButton.textContent = 'Сохранить';

    saveButton.addEventListener('click', function(){
        words = words.innerHTML;
        transcription =  transcription.innerHTML;
         translate = translate.innerHTML;
        let firstInputValue = wordsInput.value;
        let secondInputValue = trancriptionInput.value;
        let thirdInputValue = russianWordInput.value;
        let objectForInputs = {
         english: firstInputValue,
         transcription: secondInputValue,
         tags: 'tag',
         russian: thirdInputValue,
         id: id
        }
        
        saveWord(objectForInputs);
        wordsInput.remove();
        trancriptionInput.remove();        
        russianWordInput.remove();
        saveButton.remove();
    })


   })

    let deleteButton = document.createElement('button');
    deleteButton.classList.add('remove');
    wrapper.appendChild(deleteButton);
    let deleteButtonImage = document.createElement('img');
    deleteButtonImage.src = 'assets/images/1696523403_gas-kvas-com-p-kartinki-bak-5.png';
    deleteButtonImage.classList.add('trash');
    deleteButton.appendChild(deleteButtonImage);
    deleteButton.addEventListener('click', function(){
        deleteWord(id);
     })
    
}  


function deleteWord (id) {
    return fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
        method: 'POST',
    }).then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })
   
}

function saveWord(object) {
console.log(object);
    return fetch(`http://itgirlschool.justmakeit.ru/api/words/${object.id}/update`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(object),
    }).then((res) => res.json())
    .then((data) =>{
        console.log(data);
    })
}


let number = '1';
number = parseInt(number);

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




