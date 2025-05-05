function increaseScore(team) {
    const scoreElement = document.getElementById(`score${team}`);
    let score = parseInt(scoreElement.textContent);
    scoreElement.textContent = score + 1;
}

function decreaseScore(team) {
    const scoreElement = document.getElementById(`score${team}`);
    let score = parseInt(scoreElement.textContent);
    if (score <= 0) {
        alert("Skor 0'dan küçük olamaz!");
        return;
    }
    scoreElement.textContent = score - 1;
}

function setTeamName(team) {
    const newName = prompt("Yeni takım ismini giriniz:");
    if (newName !== null && newName.trim() !== "") {
        document.getElementById(`teamName${team}`).textContent = newName;
    }
}

function setScore(team) {
    const newScore = prompt("Yeni skoru giriniz:");
    if (newScore === null) return;
    
    const score = parseInt(newScore);
    if (isNaN(score)) {
        alert("Lütfen geçerli bir sayı giriniz!");
        return;
    }
    if (score < 0) {
        alert("Skor 0'dan küçük olamaz!");
        return;
    }
    document.getElementById(`score${team}`).textContent = score;
}

function resetScores() {
    document.getElementById('teamNameA').textContent = 'Takım A';
    document.getElementById('teamNameB').textContent = 'Takım B';
    document.getElementById('scoreA').textContent = '0';
    document.getElementById('scoreB').textContent = '0';
}
