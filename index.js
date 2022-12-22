document.querySelector(".jsFilter").addEventListener("click", function () {
    document.querySelector(".filter-menu").classList.toggle("active");
  });
//   grid view
document.querySelector(".grid").addEventListener("click", function () {
document.querySelector(".list").classList.remove("active");
document.querySelector(".grid").classList.add("active");
document.querySelector(".products-area-wrapper").classList.add("gridView");
document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});
// list view
document.querySelector(".list").addEventListener("click", function () {
document.querySelector(".list").classList.add("active");
document.querySelector(".grid").classList.remove("active");
document.querySelector(".products-area-wrapper").classList.remove("gridView");
document.querySelector(".products-area-wrapper").classList.add("tableView");
});
// dark mode switch
var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
modeSwitch.classList.toggle('active');
});

/* Sidebar start here */   
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let navList = document.querySelector(".nav-list");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  navList.classList.toggle("scroll");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search icon
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the icons class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the icons class
 }
}

/* Sidebar end here */   

/* Tab Start Here */ 
function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
/* Tab End Here */ 