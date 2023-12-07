function openOuverture () {
    document.querySelector(".ouverture").style.display="block";
    document.querySelector(".ouverture").style.animation="ouverture 500ms"
    setTimeout(() => {
        document.querySelector("main").style.display="none";
        document.querySelector("footer").style.display="none";
    }, 500);

    
}

function closeOuverture () {
    document.querySelector(".ouverture").style.animation="fermeture 500ms"
    setTimeout(() => {
        document.querySelector(".ouverture").style.display="none";
    }, 500);
    document.querySelector("main").style.display="block";
    document.querySelector("footer").style.display="block";
}



