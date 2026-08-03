const layout = document.querySelector(".layout");

const personPanel = document.getElementById("person-panel");
const worksPanel = document.getElementById("works-panel");
const detailsPanel = document.getElementById("details-panel");

const detailsContent = document.getElementById("details-content");


// ----------------------------
// Panel states
// ----------------------------

function showPerson() {

    layout.classList.remove("details-active");

}


function showDetails() {

    layout.classList.add("details-active");

}


// Start

showPerson();


// Panel clicks

personPanel.addEventListener("click", () => {

    showPerson();

});


worksPanel.addEventListener("click", () => {

    showDetails();

});


detailsPanel.addEventListener("click", () => {

    showDetails();

});



// ----------------------------
// Load internal content
// ----------------------------

function loadContent(file) {


    fetch(file)

        .then(response => {

            if (!response.ok) {

                throw new Error("Content not found");

            }

            return response.text();

        })


        .then(html => {

            detailsContent.innerHTML = html;

            showDetails();

        })


        .catch(error => {

            detailsContent.innerHTML = `
                <h2>Error</h2>
                <p>${error.message}</p>
            `;

        });

}



// All internal content links

const contentLinks = document.querySelectorAll(".load-content");


contentLinks.forEach(link => {


    link.addEventListener("click", event => {


        event.preventDefault();


        const file = link.dataset.file;


        loadContent(file);


    });


});
