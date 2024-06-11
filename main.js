// Navbar
let navButton = document.querySelector('#navButton');
navButton.addEventListener('click', navButtonClick);

let countClick = 0;

function navButtonClick() {
    countClick += 1;

    if(countClick%2 == 0){
        navButton.style.animation = '0.2s navButtonAnim linear 0s';
        let navIcons = document.querySelector('#navIcons');
        navIcons.style.display = 'block';
    }
    else{
        let navIcons = document.querySelector('#navIcons');
        navIcons.style.display = 'none';
        navButton.style.animation = 'none';
    }
}
