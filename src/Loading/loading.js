import React from 'react';
import './loading.css';

// window.addEventListener("load", function () {
//     const loader = document.querySelector(".loader");
//     loader.className += " hidden"; 
// });

export default function LoadingPage()
{
    var sentences = ['Franck est un bon formateur', 'Marc est un bon vivant', "Raphaël adore l'infographie", "William essaie de faire des loading page", "Sion habite trop loin"]

return (
    <>
    <div className="loader">
    
        <h2 id="title">{sentences[Math.floor(Math.random() * sentences.length)]}</h2>
    </div>
    
    </>
)
}