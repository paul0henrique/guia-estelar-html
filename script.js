// Testes relacionados à manipulação da DOM

const author = document.getElementById('author')

author.textContent = "Paulo"

console.log(document.getElementsByClassName('insta'))

const instaName = document.getElementById('instaName')

instaName.innerText = "paulo.code"

console.log(document.getElementsByTagName('h2'))

const element = document.querySelector("h1")

element.innerHTML = "Paulo <small> Code <small>"

const input = document.querySelector('input')

input.value = "Digite uma entrada"

input.setAttribute('id', 'input')

const inputID = document.querySelector('#input')

console.log('input', inputID)

input.removeAttribute('id')

console.log('input', inputID)

console.log(document.querySelectorAll("h1"))