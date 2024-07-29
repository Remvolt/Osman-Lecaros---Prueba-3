function ShowSideBar() {
    document.getElementById('ContainerMobile').style.display = "block";
    document.getElementById('ShowSidebar').style.display = "none";
    document.getElementById('HideSidebar').style.display = "block";
}

function HideSideBar() {
    document.getElementById('ContainerMobile').style.display = "none";
    document.getElementById('HideSidebar').style.display = "none";
    document.getElementById('ShowSidebar').style.display = "block";
}