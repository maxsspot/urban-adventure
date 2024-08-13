// Opens Navigation
function openNav () {
    document.getElementById ("navColumn").style.left = "0px";
    document.getElementById ("overlay").style.opacity="0.5";
    document.getElementById ("overlay").style.pointerEvents="all";
}

// Closes Navigation
function closeNav () {
    document.getElementById ("navColumn").style.left = "-260px";
    document.getElementById ("overlay").style.opacity="0.0";
    document.getElementById ("overlay").style.pointerEvents="none";
}
