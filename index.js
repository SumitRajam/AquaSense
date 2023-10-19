function scrollToSection() {
    const scrollTarget = document.getElementById('scrollTarget');
    scrollTarget.scrollIntoView({ behavior: 'smooth' });
}
function stopMarquee() {
    document.querySelector('marquee').stop();
}
function startMarquee() {
    document.querySelector('marquee').start();
}
function Raise() {
        location.href = "Complaint.html";
}