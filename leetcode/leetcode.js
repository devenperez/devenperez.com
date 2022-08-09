var problemJson;
var problemsShown = 0;
var problemsLoaded = 0;

fetch("https://api-git.devenperez.com/data/problems_solved.json")
.then((response) => response.json())
.then((data) =>  {
    problemJson = data;
    problemsLoaded = problemJson.solvedProblems.problems.length
    document.getElementById("solution-timestamp").innerText += ` ${new Date(data.timeGathered).toDateString()}`
    changeTotal("easy", problemJson.solvedProblems.solvedTotals.easy)
    changeTotal("medium", problemJson.solvedProblems.solvedTotals.medium)
    changeTotal("hard", problemJson.solvedProblems.solvedTotals.hard)
    printProblems(Math.min(10, problemsLoaded));
});

function printProblems(numToLoad = -1) {
    var maxLoadable = problemsLoaded - problemsShown

    if(numToLoad == -1) numToLoad = maxLoadable

    for(var i = 0; i < Math.min(numToLoad, maxLoadable); i++) {
        var prob = problemJson.solvedProblems.problems[problemsShown]
        problemsShown++;
        var themeType = (problemsShown % 2 == 0) ? "Light" : "Dark";
        var oddOrEven = (problemsShown % 2 == 0) ? "even" : "odd";
        document.getElementById("all-solutions").innerHTML += `<!-- Section ${problemsShown}: ${themeType} Theme --><div class="solution-section ${oddOrEven}-segment"><span class="solution-info"><h1>${prob.number}. ${prob.name} (${prob.difficulty})</h1><br><h3>${prob.scores.time} ms</h3><h3>${prob.scores.memory} MB</h3></span><span class="solution-button-panel"><img src="images/code.png" class="invertable inverted"></h2></span></div>`;
    }
}

/*
<!-- Section 1: Dark Theme -->
<div class="solution-section odd-segment">
    <span class="solution-info">
        <h1>1. Some problem name (Easy)</h1>
        <br>
        <h3>0.0 ms</h3>
        <h3>0.0 MB</h3>
    </span>
    <span class="solution-button-panel">
        <img src="images/code.png" class="invertable inverted"></h2>
    </span>
</div>
*/

async function changeTotal(dif, amount) {
    var delayTime = 1500 / amount;
    var currentShowing = 0;

    while (currentShowing < amount) {
        document.getElementById(`${dif}-problem-count`).innerText = ++currentShowing;
        await new Promise(resolve => setTimeout(resolve, delayTime));
    }
}