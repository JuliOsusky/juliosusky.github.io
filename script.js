const layout = document.querySelector(".layout");

const personPanel = document.getElementById("person-panel");
const worksPanel = document.getElementById("works-panel");
const detailsPanel = document.getElementById("details-panel");

const detailsContent = document.getElementById("details-content");


// ----------------------------
// Layout switching
// ----------------------------

function openPerson() {

    layout.classList.remove("details-active");

}


function openDetails() {

    layout.classList.add("details-active");

}


// Default state

openPerson();


// Person click

personPanel.addEventListener("click", () => {

    openPerson();

});


// Works click -> open Details

worksPanel.addEventListener("click", () => {

    openDetails();

});


// Details click

detailsPanel.addEventListener("click", () => {

    openDetails();

});


// ----------------------------
// Load content into Details
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
