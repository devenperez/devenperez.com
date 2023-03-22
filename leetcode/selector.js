activeId = "selector-1"

function setActive(id) {
    if (id == activeId) { return; }

    document.getElementById(id).classList.add("active");
    document.getElementById(activeId).classList.remove("active");
    activeId = id;

}