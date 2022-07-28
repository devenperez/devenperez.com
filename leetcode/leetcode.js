var themes = {
    0: ["#404040", "#757575", "#666699", true],
    1: ["#fffaf1", "#ecd9ba", "#666699", false]
};

function theme_change() {
    var currentType = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--current-theme"));
    var nextThemeIndex = (currentType + 1) % Object.keys(themes).length

    // Change theme colors
    document.documentElement.style.setProperty("--current-theme", nextThemeIndex);
    document.documentElement.style.setProperty("--primary-color", themes[nextThemeIndex][0]);
    document.documentElement.style.setProperty("--secondary-color", themes[nextThemeIndex][1]);
    document.documentElement.style.setProperty("--accent-color", themes[nextThemeIndex][2]);

    // Flip black and white images
    console.log(themes[nextThemeIndex][3] ? "filter: invert(100%);" : "")
    document.getElementsByClassName("bw-img").style.setProperty("filter", themes[nextThemeIndex][3] ? "invert(100%)" : "none")
}