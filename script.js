const layout = document.querySelector(".layout");

const panels = {

    person: document.getElementById("person-panel"),
    works: document.getElementById("works-panel"),
    details: document.getElementById("details-panel")

};

const detailsContent = document.getElementById("details-content");


// ----------------------------
// Active Panel
// ----------------------------

function activatePanel(panel) {

    layout.classList.remove(
        "person-active",
        "works-active",
        "details-active"
    );

    Object.values(panels).forEach(p =>
        p.classList.remove("active")
    );

    layout.classList.add(panel + "-active");

    panels[panel].classList.add("active");

}


// default

activatePanel("works");


// click on panels

panels.person.addEventListener("click", () => {

    activatePanel("person");

});

panels.works.addEventListener("click", () => {

    activatePanel("works");

});

panels.details.addEventListener("click", () => {

    activatePanel("details");

});


// ----------------------------
// Load content into Details
// ----------------------------

const links = document.querySelectorAll(".load-content");

links.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        activatePanel("details");

        fetch(link.dataset.file)

            .then(response => response.text())

            .then(html => {

                detailsContent.innerHTML = html;

            })

            .catch(() => {

                detailsContent.innerHTML = `
                    <h2>Error</h2>
                    <p>Could not load content.</p>
                `;

            });

    });

});
