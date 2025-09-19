function goToNext() {
    // Ab home se direct training page pe le jayega
    window.location.href = "traning.html";  
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let score = 0;
            const answers = {
                q1: "Very confident",
                q2: "Yes",
                q3: "Always",
                q4: "Yes",
                q5: "Yes",
                q6: "Never",
                q7: "Yes, for all",
                q8: "Rarely",
                q9: "Yes",
                q10: "Always",
                q11: "Yes",
                q12: "Interactive games",
                q13: "30–60 minutes",
                q14: "Personal experience",
                q15: "Yes"
            };
            for (let key in answers) {
                const selected = document.querySelector(`input[name="${key}"]:checked`);
                if (selected && selected.value === answers[key]) {
                    score++;
                }
            }

            sessionStorage.setItem("surveyScore", score);
            window.location.href = "score.html";
        });
    }
    const scoreElement = document.querySelector(".score strong");
    if (scoreElement) {
        const finalScore = sessionStorage.getItem("surveyScore") || 0;
        scoreElement.textContent = `${finalScore} / 15`;
    }
});

