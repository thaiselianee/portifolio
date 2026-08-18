const estudos = document.querySelector("#Estudos");

const observer = new IntersectionObserver(function(entries) {

    if (entries[0].isIntersecting) {

        estudos.classList.add("mostrar");

        observer.unobserve(estudos);
    }

}, {
    threshold: 0.3
});

observer.observe(estudos);