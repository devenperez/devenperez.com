activeId = 0

function setActive(id) {
    if (id == activeId) { return; }

    document.getElementById(`selector-${id}`).classList.add("active");
    document.getElementById(`selector-${activeId}`).classList.remove("active");
    activeId = id;

    clearDisplayedProblems();
    displayByLang(id);

}