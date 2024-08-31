/* Use Strict */


const date = new Date().getFullYear();

const menu = document.querySelector('.menu-links')
    const icon = document.querySelector('.hamburger-icon')

    const cp = document.querySelector('.cp');
    const cpt = document.createTextNode(` ${date}`);

    cp.append(cpt);
    
const toggleMenu = () => {


    icon.classList.toggle("open")
    menu.classList.toggle("open")
    

}



icon.addEventListener('onclick',toggleMenu());
menu.addEventListener('onclick',toggleMenu());

