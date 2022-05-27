"use strict"

const socket = io();

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendbutton = document.querySelector(".send-button");

sendbutton.addEventListener("click", () => {
    const param = {
        name : nickname.value,
        msg : chatInput.value
        
    }

    socket.emit('chatting', param)

})



socket.on('chatting', (data) => {
    console.log(data)
})
console.log(socket)