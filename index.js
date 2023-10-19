url = "http://10.53.6.179:80"

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

// async function notifications() {
//     const response = await fetch(`${url}/notifications`)
//     const notifications = await response.json()
//     return notifications.response
// }

// console.log(notifications())

fetch(`${url}/notifications`)
.then((response) => response.json())
.then((data) => console.log(data.response))