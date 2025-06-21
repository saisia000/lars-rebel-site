
// ===== Mobile Navigation Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.nav-links.mobile');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }
});

// ===== Placeholder Functions =====
function showSignup() {
    alert("Signup modal coming soon!");
}
function showAIAssistant() {
    alert("AI Assistant launching shortly!");
}
function showResearchSummaries() {
    alert("Research summaries will be available here.");
}
function showQADatabase() {
    alert("Q&A Database access will open in future updates.");
}
