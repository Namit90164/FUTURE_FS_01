function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
    event.preventDefault();
    alert("Message Sent Successfully ✅");
}