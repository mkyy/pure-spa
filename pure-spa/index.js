import home from './src/home/index.js';
import about from './src/about/index.js';
import contact from './src/contact/index.js';

const main = document.querySelector('.root');

const init = () =>{
    window.addEventListener("hashchange", () =>{
        main.innerHTML = "";
        switch(window.location.hash){
            case "":
                main.appendChild(home());
                break;
            case "#about":
                main.appendChild(about());
                break;
            case "#contact":
                main.appendChild(contact());
                break;
            default:
                main.appendChild(home());
                break;
        }
    
    })
    
}

window.addEventListener('load', () =>{
    main.appendChild(home());
    init();

})