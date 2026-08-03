const links = document.querySelectorAll(".load-content");

const details = document.getElementById("details-content");

links.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const file = link.dataset.file;

        fetch(file)

            .then(response => response.text())

            .then(html => {

                details.innerHTML = html;

            })

            .catch(() => {

                details.innerHTML = `
                    <h2>Error</h2>
                    <p>Could not load the requested content.</p>
                `;

            });

    });

});
