// Get the reservation form from the page.
const bookingForm = document.getElementById("bookingForm");
const reservationCard = document.querySelector(".reservation-form-card");

if (bookingForm) {
    // Run this code when the user submits the form.
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get the selected time, table type, and extra requests.
        const time = document.getElementById("time");
        const table = document.querySelector('input[name="table"]:checked');
        const extras = document.querySelectorAll('input[name="extras"]:checked');
        let extraText = "None";
        let extraList = "";

        // Join all checked extra requests into one text value.
        for (let i = 0; i < extras.length; i++) {
            if (i > 0) {
                extraList += ", ";
            }

            extraList += extras[i].parentElement.textContent.trim();
        }
        
        if (extraList !== "") {
            extraText = extraList;
        }

        // Show "None" if the special request box is left empty.
        const special = document.getElementById("special").value.trim();
        let specialText = "None";

        if (special !== "") {
            specialText = special;
        }

        // Store all submitted values in an array for the table.
        const reservationDetails = [
            ["Full Name", document.getElementById("name").value],
            ["Phone Number", document.getElementById("phone").value],
            ["Email Address", document.getElementById("email").value],
            ["Number of Guests", document.getElementById("guests").value],
            ["Parking Spaces", document.getElementById("parking").value],
            ["Preferred Date", document.getElementById("date").value],
            ["Preferred Time", time.options[time.selectedIndex].text],
            ["Table Type", table.parentElement.textContent.trim()],
            ["Extra Requests", extraText],
            ["Special Requests", specialText]
        ];

        let tableRows = "";

        // Build one table row for each form field and value.
        for (let i = 0; i < reservationDetails.length; i++) {
            tableRows +=
                "<tr>" +
                "<td>" + reservationDetails[i][0] + "</td>" +
                "<td>" + reservationDetails[i][1] + "</td>" +
                "</tr>";
        }

        // Show the summary table inside the existing reservation page.
        reservationCard.innerHTML = `
            <h2 class="reservation-summary-title">Reservation Summary</h2>
            <table class="reservation-summary-table">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
            <div class="form-buttons">
                <button type="button" id="backToFormButton">Back to Reservation Form</button>
            </div>
        `;

        // Return to the original reservation form view.
        document.getElementById("backToFormButton").addEventListener("click", function () {
            window.location.reload();
        });
    });
}
