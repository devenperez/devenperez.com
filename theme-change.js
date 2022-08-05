const themes = [
    {
        "primary-color": "#404040",
        "secondary-color": "#757575",
        "accent-color": "#8181C1",
        "text-color": "#ffffff",
        "is-inverted": true
    },
    {
        "primary-color": "#333333",
        "secondary-color": "#643173",
        "accent-color": "#7d5ba6",
        "text-color": "#ffffff",
        "is-inverted": true
    }
];

function theme_change() {
    var currentTheme = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--current-theme"));
    var nextThemeIndex = (currentTheme + 1) % Object.keys(themes).length;

    // Change theme colors
    document.documentElement.style.setProperty("--current-theme", nextThemeIndex);
    document.documentElement.style.setProperty("--primary-color", themes[nextThemeIndex]["primary-color"]);
    document.documentElement.style.setProperty("--secondary-color", themes[nextThemeIndex]["secondary-color"]);
    document.documentElement.style.setProperty("--accent-color", themes[nextThemeIndex]["accent-color"]);
    document.documentElement.style.setProperty("--text-color", themes[nextThemeIndex]["text-color"]);

    // Flip black and white images
    if (themes[currentTheme]["is-inverted"] != themes[nextThemeIndex]["is-inverted"]) {
        let invertables = document.getElementsByClassName("invertable");
        for (let i = 0; i < invertables.length; i++) {
            invertables[i].classList.toggle("inverted");
        }
    }
}