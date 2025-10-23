// js/project-category.js
const projects = [
    {
        id: "draw1",
        date: "2019",
        category: "DRAW",
        title: "CENTRO STUDI CASNATI",
        instrument: "(SOFTWARE)",
        software: "MY HANDS",
        link: "casnati.html"
    },
    {
        id: "draw2",
        date: "02.03.2022",
        category: "DRAW",
        title: "MOHOLE",
        instrument: "(SOFTWARE)",
        software: "MY HANDS",
        link: "mohole.html"
    },
    {
        id: "jacqu1",
        date: "01.06.2024",
        category: "ARTWORK",
        title: "JACQUARD",
        instrument: "(SOFTWARE)",
        software: "PHOTOSHOP/ENEAS",
        link: "jacquard.html"
    },
    {
        id: "jacqu2",
        date: "01.06.2024",
        category: "ARTWORK",
        title: "JACQUARD IN COLLABORATION WITH GIACOMO GENTILCORE",
        instrument: "(SOFTWARE)",
        software: "HANDS/PHOTOSHOP/ENEAS",
        link: "jacquardwithgiacomo.html"
    },
    {
        id: "font1",
        date: "31.05.2022",
        category: "FONT",
        title: "ONELINE",
        instrument: "(SOFTWARE)",
        software: "ILLUSTRATOR/INDESIGN",
        link: "oneline.html"
    },
    {
        id: "identity1",
        date: "03.04.2022",
        category: "IDENTITY",
        title: "YOUNG LIONS",
        instrument: "(SOFTWARE)",
        software: "PHOTOSHOP/ILLUSTRATOR/FIGMA/BLENDER",
        link: "giovanileoni.htm"
    },
    {
        id: "illu1",
        date: "2018-2022",
        category: "ILLUSTRATION",
        title: "PERSONAL",
        instrument: "(SOFTWARE)",
        software: "ILLUSTRATOR",
        link: "illuspersonale.html"
    },
    {
        id: "illu2",
        date: "2020-2021",
        category: "ILLUSTRATION",
        title: "ICONE",
        instrument: "(SOFTWARE)",
        software: "ILLUSTRATOR",
        link: "illusicone.html"
    },
    {
        id: "lay1",
        date: "07.02.2022",
        category: "LAYOUT",
        title: "THE MASTER OF PHOTOGRAPHY",
        instrument: "(SOFTWARE)",
        software: "PHOTOSHOP/ILLUSTRATOR/INDESIGN",
        link: "masterofph.html"
    },
    {
        id: "logo1",
        date: "2021/2022",
        category: "LOGO",
        title: "PERSONAL",
        instrument: "(SOFTWARE)",
        software: "ILLUSTRATOR/PHOTOSHOP/BLENDER",
        link: "logopersonale.html"
    },
    {
        id: "photo1",
        date: "2021/2022",
        category: "PHOTOGRAPHY",
        title: "PERSONAL",
        instrument: "(CAMERA/LENS)",
        software: "CANON EOS 33/CANON ULTRASONIC 50MM F-1.4",
        link: "primorullino.html"
    },
    {
        id: "poster1",
        date: "20.04.2022",
        category: "POSTER",
        title: "CONTEMPORARY POSTERS",
        instrument: "(SOFTWARE)",
        software: "ILLUSTRATOR/PHOTOSHOP/<br>INDESIGN</p>",
        link: "manifesti.html"
    },
    {
        id: "print4all",
        date: "22.04.2022",
        category: "POSTER",
        title: "HP PRINT4ALL",
        instrument: "(SOFTWARE)",
        software: "ILLUSTRATOR/PHOTOSHOP/<br>INDESIGN</p>",
        link: "print4all.html"
    },
    {
        id: "post1",
        date: "2018-2020",
        category: "POST-PRODUCTION",
        title: "PERSONALE",
        instrument: "(SOFTWARE)",
        software: "PHOTOSHOP",
        link: "postprodpersonale.html"
    },
    {
        id: "post2",
        date: "2020-2021",
        category: "POST-PRODUCTION",
        title: "PLATE",
        instrument: "(SOFTWARE)",
        software: "PHOTOSHOP/ILLUSTRATOR",
        link: "postprodpiatti.html"
    },
    // Aggiungi altri progetti qui
];

function generateProjects(category) {
    const splideList = $(".splide__list");
    const filteredProjects = projects.filter(project => project.category === category);
    filteredProjects.forEach(project => {
        const slide = `
            <li class="splide__slide">
                <div id="${project.id}" class="container-fluid">
                    <div id="wdth" class="row">
                        <div class="col-12 d-flex align-items-center p-0">
                            <div id="bgwk">
                                <div id="cntt">
                                    <p class="dicitura">${project.date}</p>
                                    <p class="dicitura">${project.category}</p>
                                </div>
                                <p class="subtitle2">${project.title}</p>
                                <p class="dicitura">${project.instrument}</p>
                                <p class="dicitura2">${project.software}</p>
                                <a href="${project.link}"><button class="btnn"><img class="arrow-2" src="/img/arrow-l.png" alt="">EXPLORE MORE</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        `;
        splideList.append(slide);
    });
}

$(document).ready(function() {
    const category = "DRAW"; // Cambia la categoria in base alla pagina
    generateProjects(category);
});
