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
                    <img src="smiley-glasses.png" alt="Smiley with glasses" style="display: block; margin: 20px auto; width: 300px;">
                    <div style="text-align: center; margin-top: 20px;">
                        <button id="nova-poruka" style="
                            width: fit-content; 
                            display: block; 
                            margin: auto; 
                            padding: 10px 20px; 
                            font-size: 1rem; 
                            cursor: pointer; 
                            background-color: #004080; 
                            color: white; 
                            border: none; 
                            border-radius: 5px; 
                            transition: background-color 0.3s;">
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
                            <label for="ime">Vaše ime i prezime:</label>
                            <input type="text" id="ime" name="ime" required>

                            <label for="email">Vaš e-mail:</label>
                            <input type="email" id="email" name="email" required>

                            <label for="poruka">Poruka:</label>
                            <textarea id="poruka" name="poruka" rows="5" required></textarea>

                            <button type="submit">Pošalji</button>
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
