const navbarItems = `
    <div class="title">
        <div class="header">
            <h3>Alex Williams</h3>
            <h2>Portfolio Website</h2>
        </div>
        <div class="topnav">
            <a href="index.html" class="nav" id="nav1">About</a>
            <div class="dropdown">
                <button class="dropbtn">Released Games</button>
                <div class="dropdown-content">
                    <a href="DuckLife9.html" class="drp" id="nav2">Duck Life 9 (Wix-Games - Unity)</a>
                </div>
            </div>
             <div class="dropdown">
                <button class="dropbtn">Game Jams</button>
                <div class="dropdown-content">
                    <a href="Wanderer.html" class="drp" id="nav3">Wander (Unity)</a>
                    <a href="CubeMayhem.html" class="drp" id="nav4">Cube Mayhem (UE4)</a>
                    <a href="ForgetfulInsomnia.html" class="drp" id="nav5">Forgetful Insomnia (Unity)</a>
                    <a href="LastLineLives.html" class="drp" id="nav6">Last Line Lives (UE4)</a>
                </div>
            </div>
            <a href="animationShowreel.html"  class="nav" id="nav7">Animation Showreel</a>
            <a href="photoshop.html" class="nav" id="nav8"> Photoshop</a>
             <div class="dropdown">
                <button class="dropbtn">Experimental / Tutorial Projects</button>
                <div class="dropdown-content">
                    <a href="UnrealWorkshop.html" class="drp" id="nav9">Unreal Workshop</a>
                    <a href="Pinball.html" class="drp" id="nav10">Pinball</a>
                </div>
            </div>
        </div>
    </div>  
    `
const navbarContainer = document.getElementById("navbar-container");

if (navbarContainer) {
    navbarContainer.innerHTML = navbarItems;
}


const navItems = document.querySelectorAll(".nav");
const navItems2 = document.querySelectorAll(".drp");
const allNavItems = [...navItems, ...navItems2];

for (let i = 0; i < allNavItems.length; i++) {
    allNavItems[i].addEventListener("click", function () {
        Array.from(allNavItems, navItem => {
            removeCurrent(navItem);
        });

        setCurrent(allNavItems[i]);

        sessionStorage.setItem("current", allNavItems[i].id);
    });
}

const currentItem = document.getElementById(sessionStorage.getItem("current"));

if (currentItem == null) {
    setCurrent(document.getElementById("nav1"));
} else {
    setCurrent(currentItem);
}

function setCurrent(currentItem) {
    if (!currentItem) return;
    currentItem.classList.add("current");
    currentItem.classList.add("disableClick");
}

function removeCurrent(currentItem) {
    currentItem.classList.remove("current");
    currentItem.classList.remove("disableClick");
}
