// Dodavanje jednostavne interakcije za navigaciju
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", event => {
        const href = link.getAttribute("href");
        
        // Provjera je li link sidro na istoj stranici (počinje s '#')
        if (href.startsWith("#")) {
            event.preventDefault();
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // Ako nije sidro (npr. vodi na drugu stranicu), dopusti default ponašanje
            return;
        }
    });
});

// Dodavanje funkcionalnosti za prikaz poruke zahvale nakon slanja forme
document.addEventListener("DOMContentLoaded", () => {
    const formSection = document.getElementById("forma");

    // Funkcija za inicijalizaciju forme
    function initializeForm() {
        const form = document.getElementById("kontakt-forma");

        if (form) {
            form.addEventListener("submit", event => {
                event.preventDefault(); // Sprječava standardno slanje forme

                // Zamijeni sadržaj forme porukom zahvale i gumbom
                formSection.innerHTML = `
                    <h2 style="text-align: left;">Pošaljite poruku</h2>
                    <p style="text-align: center; font-size: 1.5em; font-weight: bold; color: green;">
                        Hvala na ukazanom povjerenju, javit ćemo Vam se u najkraćem roku!
                    </p>
                    <div style="text-align: center; margin-top: 20px;">
                        <button id="nova-poruka" style="padding: 10px 20px; font-size: 1em; cursor: pointer;">
                            Pošalji novu poruku
                        </button>
                    </div>
                `;

                // Ponovno dodaj funkcionalnost za vraćanje forme
                const novaPorukaButton = document.getElementById("nova-poruka");
                novaPorukaButton.addEventListener("click", () => {
                    formSection.innerHTML = `
                        <h2 style="text-align: left;">Pošaljite poruku</h2>
                        <form id="kontakt-forma">
                            <label for="ime">Vaše ime:</label><br>
                            <input type="text" id="ime" name="ime" required><br><br>

                            <label for="email">Vaš e-mail:</label><br>
                            <input type="email" id="email" name="email" required><br><br>

                            <label for="poruka">Poruka:</label><br>
                            <textarea id="poruka" name="poruka" rows="5" required></textarea><br><br>

                            <button type="submit" style="padding: 10px 20px; font-size: 1em; cursor: pointer;">Pošalji</button>
                        </form>
                    `;

                    // Ponovno inicijaliziraj formu
                    initializeForm();
                });
            });
        }
    }

    // Inicijaliziraj formu prilikom učitavanja stranice
    initializeForm();
});
