function $(element) {
    return document.querySelector(element);
}

let btnElement = $('.menu');
let modalElement = $('.modall');

btnElement.onclick = function() {
    modalElement.style.display = "block";
}
window.onclick = function(event) {
    if (event.target == modalElement) {
        modalElement.style.display = "none";
    }
    else if (event.target == groupModal) {
        groupModal.style.display = "none";
    }
    else if (event.target == channelModal) {
        channelModal.style.display = "none"
    }
    else if (event.target == contactsModal) {
        contactsModal.style.display = "none"
    }else if (event.target == imageModal) {
        imageModal.style.display = "none"
    }
}

let grModalOpen = $('.group');
let chanModalOpen = $('.channel');
let contactsModalOpen = $('.contactes');
let callsModalOpen = $('.calls');
let settingsModalOpen = $('.settings');
let nightModalOpen = $('.night');

let groupModal = $('.group-modal');
let channelModal = $('.channel-modal');
let contactsModal = $('.contacts-modal');
let callsModal = $('.modal-calls');
let settingsModal = $('.modal-settings');
let btn = $('#btn');
let channelBtn = $('#btnChannel');
let contactBtn = $('#contact-btn');
let bodyElement = $('#body');

grModalOpen.onclick = function() {
    groupModal.style.display = "flex"
    modalElement.style.display = "none"
}
btn.onclick = function() {
    groupModal.style.display = "none"
}

chanModalOpen.onclick = function() {
    channelModal.style.display = "flex"
    modalElement.style.display = "none"
}
channelBtn.onclick = function() {
    channelModal.style.display = "none"
}
contactsModalOpen.onclick = function() {
    contactsModal.style.display = "flex"
    modalElement.style.display = "none"
}
contactBtn.onclick = function() {
    contactsModal.style.display = "none"
}


let contBox1 = $('.contact-box1');
let openContBox1 = $('.firth');
let screenText = $('.text');

openContBox1.onclick = function() {
    contBox1.style.display = "flex"
    screenText.style.display = "none"
    contBox2.style.display = "none"
    contBox3.style.display = "none"
    contBox4.style.display = "none"
    contBox5.style.display = "none"
}


let formElementSend = $('.massage-write');
let inputElementSend = $('.write-massage');
let ulElement = $('.box1-massages-list');

let formElementSend2 = $('.massage-write2')
let inputElementSend2 = $('.write-massage2');
let ulElement2 = $('.box2-massages-list');

let formElementSend3 = $('.massage-write3');
let inputElementSend3 = $('.write-massage3');
let ulElement3 = $('.box3-massages-list');

let formElementSend4 = $('.massage-write4');
let inputElementSend4 = $('.write-massage4');
let ulElement4 = $('.box4-massages-list');

let formElementSend5 = $('.massage-write5');
let inputElementSend5 = $('.write-massage5');
let ulElement5 = $('.box5-massages-list');

let sendElement = $('.send-btn');
let sendElement2 = $('.send-btn2');
let sendElement3 = $('.send-btn3');
let sendElement4 = $('.send-btn4');
let sendElement5 = $('.send-btn5');


formElementSend.onsubmit = function(event){
    event.preventDefault();
    if(inputElementSend.value){
        let liElement = document.createElement('li');
        liElement.classList.add('send');
        let imgElement = document.createElement('img');
        imgElement.src = "./img/rassm4.jpg";
        imgElement.classList.add('user-massage-img');
        let pElement = document.createElement('p');
        pElement.classList.add('massage-value');
        pElement.textContent = inputElementSend.value;
        liElement.appendChild(imgElement);
        liElement.appendChild(pElement);
        ulElement.appendChild(liElement);
        inputElementSend.value = ""
    }else{
        alert('Jonatish Habari yozilmadi.!') 
    }
}


inputElementSend.addEventListener('keyup', function (event){
    let keyword = event.target.value
    if(keyword.length >= 1){
        sendElement.style.display = "block" 
    }else {
        sendElement.style.display = "none" 
    } 
})

let contBox2 = $('.contact-box2');
let contBox3 = $('.contact-box3');
let contBox4 = $('.contact-box4');
let contBox5 = $('.contact-box5');

let openContBox2 = $('.second');
let openContBox3 = $('.thirth');
let openContBox4 = $('.fourth');
let openContBox5 = $('.fifth');

openContBox2.onclick = function() {
    contBox2.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox3.style.display = "none"
    contBox4.style.display = "none"
    contBox5.style.display = "none"
}

formElementSend2.onsubmit = function(event){
    event.preventDefault();
    if(inputElementSend2.value){
        let liElement2 = document.createElement('li');
        liElement2.classList.add('send2');
        let imgElement2 = document.createElement('img');
        imgElement2.src = "./img/rassm4.jpg";
        imgElement2.classList.add('user-massage-img');
        let pElement2 = document.createElement('p');
        pElement2.classList.add('massage-value2');
        pElement2.textContent = inputElementSend2.value;
        liElement2.appendChild(imgElement2);
        liElement2.appendChild(pElement2);
        ulElement2.appendChild(liElement2);
        inputElementSend2.value = ""
    }else{
        alert('errortrrrrrrrrrr') 
    }
}
inputElementSend2.addEventListener('keyup', function (event){
    let keyword = event.target.value
    if(keyword.length >= 1){
        sendElement2.style.display = "block" 
    }else {
        sendElement2.style.display = "none" 
    } 
})
openContBox3.onclick = function() {
    contBox3.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox2.style.display = "none"
    contBox4.style.display = "none"
    contBox5.style.display = "none"
}

formElementSend3.onsubmit = function(event){
    event.preventDefault();
    if(inputElementSend3.value){
        let liElement3 = document.createElement('li');
        liElement3.classList.add('send3');
        let imgElement3 = document.createElement('img');
        imgElement3.src = "./img/rassm4.jpg";
        imgElement3.classList.add('user-massage-img3');
        let pElement3 = document.createElement('p');
        pElement3.classList.add('massage-value3');
        pElement3.textContent = inputElementSend3.value;
        liElement3.appendChild(imgElement3);
        liElement3.appendChild(pElement3);
        ulElement3.appendChild(liElement3);
        inputElementSend3.value = ""
    }else{
        alert('errortrrrrrrrrrr') 
    }
}


inputElementSend3.addEventListener('keyup', function (event){
    let keyword = event.target.value
    if(keyword.length >= 1){
        sendElement3.style.display = "block" 
    }else {
        sendElement3.style.display = "none" 
    } 
})
openContBox4.onclick = function() {
    contBox4.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox3.style.display = "none"
    contBox2.style.display = "none"
    contBox5.style.display = "none"
}
formElementSend4.onsubmit = function(event){
    event.preventDefault();
    if(inputElementSend4.value){
        let liElement4 = document.createElement('li');
        liElement4.classList.add('send4');
        let imgElement4 = document.createElement('img');
        imgElement4.src = "./img/rassm4.jpg";
        imgElement4.classList.add('user-massage-img4');
        let pElement4 = document.createElement('p');
        pElement4.classList.add('massage-value4');
        pElement4.textContent = inputElementSend4.value;
        liElement4.appendChild(imgElement4);
        liElement4.appendChild(pElement4);
        ulElement4.appendChild(liElement4);
        inputElementSend4.value = ""
    }else{
        alert('errortrrrrrrrrrr') 
    }
}


inputElementSend4.addEventListener('keyup', function (event){
    let keyword = event.target.value
    if(keyword.length >= 1){
        sendElement4.style.display = "block" 
    }else {
        sendElement4.style.display = "none" 
    } 
})
openContBox5.onclick = function() {
    contBox5.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox3.style.display = "none"
    contBox4.style.display = "none"
    contBox2.style.display = "none"
}
formElementSend5.onsubmit = function(event){
    event.preventDefault();
    if(inputElementSend5.value){
        let liElement5 = document.createElement('li');
        liElement5.classList.add('send5');
        let imgElement5 = document.createElement('img');
        imgElement5.src = "./img/rassm4.jpg";
        imgElement5.classList.add('user-massage-img5');
        let pElement5 = document.createElement('p');
        pElement5.classList.add('massage-value5');
        pElement5.textContent = inputElementSend5.value;
        liElement5.appendChild(imgElement5);
        liElement5.appendChild(pElement5);
        ulElement5.appendChild(liElement5);
        inputElementSend5.value = ""
    }else{
        alert('errortrrrrrrrrrr') 
    }
}


inputElementSend5.addEventListener('keyup', function (event){
    let keyword = event.target.value
    if(keyword.length >= 1){
        sendElement5.style.display = "block" 
    }else {
        sendElement5.style.display = "none" 
    } 
})

let chatElement = $('.chat');
let contactElement = $('.contacts');
let closeChat1 = $('.close-chat1');
let closeChat2 = $('.close-chat2');
let closeChat3 = $('.close-chat3');
let closeChat4 = $('.close-chat4');
let closeChat5 = $('.close-chat5');
let imageModalOpen = $('.user-img-wrap');
let imageModal = $('.image-modal');

imageModalOpen.onclick = function() {
    imageModal.style.display = "flex"
    modalElement.style.display = "none"
}

var x = window.matchMedia("(max-width: 500px)")
openContBox4.onclick = function() {
    contBox4.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox3.style.display = "none"
    contBox2.style.display = "none"
    contBox5.style.display = "none"
    if (x.matches) {
        contactElement.style.display = "none"
        chatElement.style.display = "flex" 
        closeChat.style.display = "block"
    }
}
openContBox1.onclick = function() {
    contBox1.style.display = "flex"
    screenText.style.display = "none"
    contBox4.style.display = "none"
    contBox3.style.display = "none"
    contBox2.style.display = "none"
    contBox5.style.display = "none"
    if (x.matches) {
        contactElement.style.display = "none"
        chatElement.style.display = "flex" 
        closeChat.style.display = "block"
    }
}
openContBox2.onclick = function() {
    contBox2.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox3.style.display = "none"
    contBox4.style.display = "none"
    contBox5.style.display = "none"
    if (x.matches) {
        contactElement.style.display = "none"
        chatElement.style.display = "flex" 
        closeChat.style.display = "block"
    }
}
openContBox3.onclick = function() {
    contBox3.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox4.style.display = "none"
    contBox2.style.display = "none"
    contBox5.style.display = "none"
    if (x.matches) {
        contactElement.style.display = "none"
        chatElement.style.display = "flex" 
        closeChat.style.display = "block"
    }
}
openContBox5.onclick = function() {
    contBox5.style.display = "flex"
    screenText.style.display = "none"
    contBox1.style.display = "none"
    contBox3.style.display = "none"
    contBox2.style.display = "none"
    contBox4.style.display = "none"
    if (x.matches) {
        contactElement.style.display = "none"
        chatElement.style.display = "flex" 
    }
}
closeChat1.onclick = function() {
    chatElement.style.display = "none" 
    contactElement.style.display = "block"
}
closeChat2.onclick = function() {
    chatElement.style.display = "none" 
    contactElement.style.display = "block"
}
closeChat3.onclick = function() {
    chatElement.style.display = "none" 
    contactElement.style.display = "block"
}
closeChat4.onclick = function() {
    chatElement.style.display = "none" 
    contactElement.style.display = "block"
}
closeChat5.onclick = function() {
    chatElement.style.display = "none" 
    contactElement.style.display = "block"
}

// function z(x) {
//     if (x.matches) {
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  
  var x = window.matchMedia("(max-width: 500px)")
//   z(x) // Call listener function at run time
//   x.addListener(z) // Attach listener function on state changes


  