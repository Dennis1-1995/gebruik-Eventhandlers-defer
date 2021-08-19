// Opdracht 1:

const alertButton = document.querySelector('#mybutton');

alertButton.addEventListener('click', () => {
    alert('Button clicked');
});

// ===> Manier 2:
// alertButton.onclick = () => {
//     alert('Button clicked');
// };


// Opdracht 2:

const colorButton = document.querySelector('#colorbutton');
const bodyBackground = document.querySelector('body');

colorButton.addEventListener('click', () => {
    bodyBackground.classList.add('red-background');
});

// ===> Manier 2:
// colorButton.onclick = () => {
//     bodyBackground.classList.add('red-background');
// }

// Opdracht 3:

colorButton.addEventListener('click', () => {
    bodyBackground.classList.toggle('red-background');
});

