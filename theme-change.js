var themes = {
    0: ["#404040", "#757575", "#8181C1", "#ffffff", true],
    1: ["#333333", "#643173", "#7d5ba6", "#ffffff", true]
};

function theme_change() {
    var currentTheme = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--current-theme"));
    var nextThemeIndex = (currentTheme + 1) % Object.keys(themes).length;

    // Change theme colors
    document.documentElement.style.setProperty("--current-theme", nextThemeIndex);
    document.documentElement.style.setProperty("--primary-color", themes[nextThemeIndex][0]);
    document.documentElement.style.setProperty("--secondary-color", themes[nextThemeIndex][1]);
    document.documentElement.style.setProperty("--accent-color", themes[nextThemeIndex][2]);
    document.documentElement.style.setProperty("--text-color", themes[nextThemeIndex][3]);

    // Flip black and white images
    if (themes[currentTheme][4] != themes[nextThemeIndex][4]) {
        let invertables = document.getElementsByClassName("invertable");
        for (let i = 0; i < invertables.length; i++) {
            invertables[i].classList.toggle("inverted");
        }
    }
}