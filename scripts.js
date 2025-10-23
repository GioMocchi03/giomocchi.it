//gsap animation TO
gsap.to("#gio", { y: 310, duration: 2, delay: 1.9, ease: Power3.easeOut }); //duration
gsap.to("#mocchi", { x: 675, duration: 1.8, delay: 1.9, ease: Power3.easeOut }); //ritardo + ease gsap
gsap.to("#gioimg", { x: -120, duration: 1.8, opacity: 1, delay: 1.9, ease: Power3.easeOut }); //ritardo + ease gsap
gsap.to("#gioimg2", { x: -225, duration: 1.8, opacity: 1, delay: 1.9, ease: Power3.easeOut }); //ritardo + ease gsap

//definisco effetto iniziale con il FROM; Da CSS devo definire lo stato finale
gsap.from("#logo", {scale: 0.1, duration: 1.8,opacity: 0, delay: 2.1, ease: Power3.easeOut});
gsap.from("#logom", {scale: 0.1, duration: 1.8,opacity: 0, delay: 2.1, ease: Power3.easeOut});
/*
quando aggiungo quest'effetto sulla hero, al caricamento la pagina
si posiziona sulla hero che è stata ridimensionata con gsap a 0.7 perdendo
il valore originale che invece deve raggiungere alla fine dell'animazione
*/

let tl = gsap.timeline({ease: Power3.easeOut}); //definisco timeline in gsap

//stagger anima tutti gli elementi del contenitore con un ritardo uno dall'altro
tl
.from("li", {opacity: 0, y:-30, delay: 0.5,duration: 0.5, stagger: 0.3})