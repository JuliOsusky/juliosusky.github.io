const layout = document.querySelector(".layout");


const personPanel = document.getElementById("person-panel");
const worksPanel = document.getElementById("works-panel");
const detailsPanel = document.getElementById("details-panel");

const detailsContent = document.getElementById("details-content");


// ----------------------------
// Layout switching
// ----------------------------


function openDetails() {

    layout.classList.add("details-active");

}


function openPerson() {

    layout.classList.remove("details-active");

}



// Startzustand

openPerson();


// Klick auf Person

personPanel.addEventListener("click", () => {

    openPerson();

});


// Klick auf Details

detailsPanel.addEventListener("click", () => {

    openDetails();

});

// Klick auf Works

worksPanel.addEventListener("click", () => {

    openDetails();

});


// ----------------------------
// Load blog/content
// ----------------------------


const links = document.querySelectorAll(".load-content");


links.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();


        const file = link.dataset.file;


        fetch(file)

        .then(response => response.text())

        .then(html => {

            detailsContent.innerHTML = html;

            openDetails();

        })


        .catch(() => {

            detailsContent.innerHTML = `
                <h2>Error</h2>
                <p>Content could not be loaded.</p>
            `;

        });

    });

});
