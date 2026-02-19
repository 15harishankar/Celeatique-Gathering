document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var eventType = document.getElementById("eventType").value;
    var date = document.getElementById("date").value;
    var details = document.getElementById("details").value.trim();

    if (name === "" || phone === "" || eventType === "" || date === "" || details === "") {
        alert("Please fill all fields properly.");
        return;
    }

    var managerNumber = "917010536689"; // Replace with your WhatsApp number

    var message = `New Event Enquiry:
Name: ${name}
Phone: ${phone}
Event Type: ${eventType}
Event Date: ${date}
Details: ${details}`;

    var whatsappURL = `https://wa.me/${917010536689}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    alert("Redirecting to WhatsApp to send enquiry!");
    document.getElementById("enquiryForm").reset();
});
document.getElementById("enquiryForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var eventType = document.getElementById("eventType").value;
    var date = document.getElementById("date").value;
    var details = document.getElementById("details").value.trim();

    if (name === "" || phone === "" || eventType === "" || date === "" || details === "") {
        alert("Please fill all fields properly.");
        return;
    }

    var managerNumber = "917010536689";  // ✅ Your WhatsApp number

    var message = 
`🎉 *New Event Enquiry* 🎉

👤 Name: ${name}
📞 Client Phone: ${phone}
📅 Event Type: ${eventType}
🗓 Event Date: ${date}
📝 Details: ${details}`;

    var whatsappURL = "https://wa.me/" + managerNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    document.getElementById("enquiryForm").reset();
});
