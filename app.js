"use strict"
const contatosContainer = document.getElementById('contact-list')

// DECLARANDO FUNÇÕES
const getContactList = async function(numeroUsuario){
    // SOLUÇÃO TEMPORÁRIA enquanto eu não corrigir o CORS da API
    const endPoint = `https://api.allorigins.win/raw?url=${encodeURIComponent(
        'https://bend-05-api-whatsapp-2.onrender.com/v1/whatsapp/contatos/11987876567'
      )}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    console.log(data)
    return data;
}

const carregarListaDeContatos = function(){
    const contatos = getContactList(11987876567) ;
    contatos.array.forEach(element => {
        carregarContato()
    });

   
}

const carregarContato = function(contato){
    // Declarando Grupos
    const contact = document.createElement('div');
        contact.classList.add('contact', 'hoverable', 'clickable');
    const contactChatDetails = document.createElement('div');
        contactChatDetails.classList.add('chat-details');
    const contactHeader = document.createElement('div');
        contactHeader.classList.add('contact-header');
    const lastMessage = document.createElement('div');
        lastMessage.classList.add('last-message');

    // Declarando Itens
    const contatoFoto = document.createElement('img');
        contatoFoto.classList.add('profile-photo');
    const contatoUsername = document.createElement('h3');
        contatoUsername.classList.add('username');
    const contatoLastUpdate = document.createElement('span');
        contatoLastUpdate.classList.add('last-update');
    const receivedIcon = document.createElement('img');
        receivedIcon.classList.add('message-status');
    const messagePreview = document.createElement('span');
        messagePreview.classList.add('message-preview');

    //Dados da requisição
    contatoFoto.src = `./img/profilePics/${contato.image}`
}

// Executando funções
carregarListaDeContatos();
