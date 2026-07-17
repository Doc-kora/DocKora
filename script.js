console.log("DocKora يعمل بنجاح");
const search = document.getElementById("search");

search.addEventListener("keyup", function(){

let value = search.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.includes(value)){
card.style.display="block";
}else{
card.style.display="none";
}

});

});
function openMenu(){
document.getElementById("sideMenu").style.width="250px";
}

function closeMenu(){
document.getElementById("sideMenu").style.width="0";
}
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
themeBtn.innerHTML="☀️";
}else{
themeBtn.innerHTML="🌙";
}

}
const API_KEY = "80d0fa9f0dd1424258dc812c0041c5f9";

fetch("https://v3.football.api-sports.io/fixtures?live=all", {
    method: "GET",
    headers: {
        "x-apisports-key": API_KEY
    }
})
.then(response => response.json())
.then(data => {

    const container = document.getElementById("matches-container");

    if (!container) return;

    container.innerHTML = "";

    if (data.response.length === 0) {
        container.innerHTML = "<p>لا توجد مباريات مباشرة الآن.</p>";
        return;
    }

    data.response.forEach(match => {

        container.innerHTML += `
            <div class="match-card">
                <h3>${match.teams.home.name} 🆚 ${match.teams.away.name}</h3>

                <div class="score">
                    ${match.goals.home ?? 0} - ${match.goals.away ?? 0}
                </div>

                <div class="time">
                    ${match.fixture.status.long}
                </div>
            </div>
        `;

    });

})
.catch(error => console.error(error));