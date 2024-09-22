var darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
// Toggle Skills Section
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
toggleSkillsButton.addEventListener("click", function () {
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
});
// Download Resume as PDF
var downloadPdfButton = document.getElementById("downloadPdf");
downloadPdfButton.addEventListener("click", function () {
    var element = document.querySelector(".resume");
    var opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    //html2pdf().from(element).set(opt).save();
});
// Generate Shareable Link
var generateLinkButton = document.createElement("button");
generateLinkButton.innerText = "Copy Shareable Link";
generateLinkButton.className = "toggle-btn";
document.body.appendChild(generateLinkButton);
// Handle Shareable Link Generation
generateLinkButton.addEventListener("click", function () {
    var username = "safeer"; // Change this dynamically to the logged-in username
    var uniqueURL = "".concat(window.location.origin, "/").concat(username, "/resume");
    // Display the generated unique URL
    alert("Shareable link generated: ".concat(uniqueURL));
    // Copy the unique URL to the clipboard
    navigator.clipboard.writeText(uniqueURL).then(function () {
        alert("Shareable link copied to clipboard!");
    }).catch(function (err) {
        console.error("Could not copy text: ", err);
    });
});
function html2pdf() {
    throw new Error("Function not implemented.");
}
