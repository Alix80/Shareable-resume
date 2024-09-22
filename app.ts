const darkModeToggle = document.getElementById("dark-mode-toggle") as HTMLButtonElement;
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Toggle Skills Section
const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;
toggleSkillsButton.addEventListener("click", () => {
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
});

// Download Resume as PDF
const downloadPdfButton = document.getElementById("downloadPdf") as HTMLButtonElement;
downloadPdfButton.addEventListener("click", () => {
    const element = document.querySelector(".resume") as HTMLElement;
    const opt = {
        margin: 0.5,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    //html2pdf().from(element).set(opt).save();
});

// Generate Shareable Link
const generateLinkButton = document.createElement("button");
generateLinkButton.innerText = "Copy Shareable Link";
generateLinkButton.className = "toggle-btn";
document.body.appendChild(generateLinkButton);

// Handle Shareable Link Generation
generateLinkButton.addEventListener("click", () => {
    const username = "safeer"; // Change this dynamically to the logged-in username
    const uniqueURL = `${window.location.origin}/${username}/resume`;

    // Display the generated unique URL
    alert(`Shareable link generated: ${uniqueURL}`);

    // Copy the unique URL to the clipboard
    navigator.clipboard.writeText(uniqueURL).then(() => {
        alert("Shareable link copied to clipboard!");
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
});
function html2pdf() {
    throw new Error("Function not implemented.");
}

