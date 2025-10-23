const projects = [
    {
        img: "jacqu11",
        id: "jacquard",
        title: "JACQUARD",
        date: "28.01.2022",
        category: "ARTWORK",
        description: "COLLECTION OF SQUARES MADE OF JACQUARD KNITS IN SUPIMA® COTTON, USING ELECTRICALLY DRIVEN CIRCULAR KNITTING MACHINES.",
        software:"PHOTOSHOP/ENEAS",
        images: [
            "/img/jacquard/naviglio.webp",
            "/img/jacquard/hand with earth.webp",
            "/img/jacquard/il tondo.webp",
            "/img/jacquard/the angel.webp"
        ],
        text: "",
        link: "",
        texts:"",
        textss:"",
    },
    {
        img: "jacqgiac",
        id: "jacquardwithgiacomo",
        title: "JACQUARD IN COLLABORATION WITH GIACOMO GENTILCORE",
        date: "28.01.2022",
        category: "ARTWORK",
        description: "COLLECTION OF SUPIMA® COTTON JACQUARD KNITTED <BR> PAINTINGS BASED ON OIL PAINTINGS BY GIACOMO GENTILCORE. <BR> GRAPHICALLY ELABORATED WITH PHOTOSHOP AND PRODUCED <BR> WITH ELECTRONIC CIRCULAR MACHINES.",
        software:"HANDS/PHOTOSHOP/ENEAS",
        images: [
            "/img/jacquard/collaborazione giacomo gentilcore.webp",
            "/img/jacquard/la venere jacquard.webp",
            "/img/jacquard/rotas jacquard.webp",
            "/img/jacquard/creature from puddle jacquard.webp"
        ],
        text: "ALL PAINTINGS ARE ON SALE AND CAN BE PURCHASED <br> ON ",
        link: "https://giacomogentilcore.eu/collezione-jacquard",
        texts:"GIACOMO GENTILCORE'S",
        textss:" WEBSITE.",
    },

    
    // Aggiungi altri progetti qui
];

function loadProjectDetails(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const projectDetailsContainer = document.getElementById("project-details");
    projectDetailsContainer.innerHTML = `
        <div id="${project.img}" class="container-fluid mgtr">
            <div class="row">
                <div class="col-md-12">
                </div>
            </div>
        </div>

        <hr class="hrnm">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="cnttt">
                        <p class="dicitura">${project.date}</p>
                        <p class="dicitura">${project.category}</p>
                    </div>
                    <div class="cnttt">
                        <p class="title">${project.title}</p>
                        <img class="arrow-d" src="/img/arrow-d.svg" alt="">
                    </div>
                    <p class="dicitura2">(DESC)</p>
                    <p class="paragraph">${project.description}</p>
                    <br>
                    <p class="paragraph">${project.text}<a href="${project.link}" id="linkjk" target="”_blank”">${project.texts}</a>${project.textss}</p> 
                    <p class="dicitura"><br>(SOFTWARE)</p>
                    <p class="dicitura2">${project.software}S</p>
                </div>
            </div>
        </div>

        ${project.images.map((image, index) => `
            <div class="container-fluid">
                <div class="d-flex flex-row justify-content-center">
                    <div class="col-md-12 wddd">
                        <hr class="hrnm">
                        <p class="dicitura">0${index + 1}</p>
                        <img class="wd" src="${image}" alt="">
                    </div>
                </div>
            </div>
        `).join('')}
    `;
}

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    if (projectId) {
        loadProjectDetails(projectId);
    }
});
