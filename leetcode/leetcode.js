var themes = {
    0: ["#404040", "#757575", "#8181C1", "#ffffff", true],
    1: ["#fffaf1", "#ecd9ba", "#666699", "#000000", false]
};

function theme_change() {
    var currentType = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--current-theme"));
    var nextThemeIndex = (currentType + 1) % Object.keys(themes).length;

    // Change theme colors
    document.documentElement.style.setProperty("--current-theme", nextThemeIndex);
    document.documentElement.style.setProperty("--primary-color", themes[nextThemeIndex][0]);
    document.documentElement.style.setProperty("--secondary-color", themes[nextThemeIndex][1]);
    document.documentElement.style.setProperty("--accent-color", themes[nextThemeIndex][2]);
    document.documentElement.style.setProperty("--text-color", themes[nextThemeIndex][3]);

    // Flip black and white images
    let invertables = document.getElementsByClassName("invertable");
    for (let i = 0; i < invertables.length; i++) {
        invertables[i].classList.toggle("inverted");
    }
}