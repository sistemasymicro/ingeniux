// ===============================
// SCROLL SUAVE DEL MENÚ
// ===============================

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });

    });

});

// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

const elementos = document.querySelectorAll(".card, .materias div, .pasos div");

const mostrar = () => {

    elementos.forEach(el => {

        const posicion = el.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if(posicion < pantalla - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

};

elementos.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="all .6s ease";

});

window.addEventListener("scroll",mostrar);
mostrar();

// ===============================
// BOTÓN VOLVER ARRIBA
// ===============================

const boton = document.createElement("button");

boton.innerHTML="↑";

boton.id="topBtn";

document.body.appendChild(boton);

boton.style.position="fixed";
boton.style.right="25px";
boton.style.bottom="25px";
boton.style.width="50px";
boton.style.height="50px";
boton.style.border="none";
boton.style.borderRadius="50%";
boton.style.background="#1565c0";
boton.style.color="#fff";
boton.style.fontSize="22px";
boton.style.cursor="pointer";
boton.style.display="none";
boton.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
boton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// ===============================
// EFECTO HOVER EN TARJETAS
// ===============================

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});