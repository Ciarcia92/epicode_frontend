/* first page date exercise */

const hour = new Date().getHours();
const greetingParagraph = document.getElementById('greetings');
if(hour >= 0 && hour <= 14) {
    greetingParagraph.innerHTML = 'Buongiorno';
} else if(hour > 14 && hour <= 20) {
    greetingParagraph.innerHTML = 'Buon pomeriggio';
} else {
    greetingParagraph.innerHTML = 'Buona notte';
}
