const range = document.getElementById("range"),
  tooltip = document.getElementById("tooltip"),
  setValue = () => {
    const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 16 - newValue * 0.32;
    tooltip.innerHTML = `<span>${range.value}</span>`;
    console.log("range", range.value);
    tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
    document.documentElement.style.setProperty(
      "--range-progress",
      `calc(${newValue}% + (${newPosition}px))`
    );
  };

document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);

const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// rr

function calc() {
  var x = document.getElementById("amnt").value;
  if (range.value != 0) {
    let totalreach = x / range.value;
    totalreachs.innerHTML = Math.round(totalreach);

    let totalCov = (totalreach / 100) * 10;
    totalcon.innerHTML = Math.round(totalCov);
  } else {
    totalreachs.innerHTML = 0;
  }
}

// sidenav

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;
      this.classList.toggle("active");

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);
        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
});
// DOMContentLoaded  end




// for changing imgs on text
function changeImage(index,imgchanger){
  document.getElementById('slider').src = imgchanger;
  if(index == 1 ){
    document.getElementById('firstImgcont').classList.remove('inactive');
    document.getElementById('firstImgcont').classList.add('active');

    document.getElementById('secondImgcont').classList.remove('active');
    document.getElementById('secondImgcont').classList.add('inactive');
    
    document.getElementById('thirdImgcont').classList.remove('active');
    document.getElementById('thirdImgcont').classList.add('inactive');

    document.getElementById('fourthImgcont').classList.remove('active');
    document.getElementById('fourthImgcont').classList.add('inactive');
  }
  else if(index == 2){
    document.getElementById('secondImgcont').classList.remove('inactive');
    document.getElementById('secondImgcont').classList.add('active');

    document.getElementById('firstImgcont').classList.remove('active');
    document.getElementById('firstImgcont').classList.add('inactive');
    
    document.getElementById('thirdImgcont').classList.remove('active');
    document.getElementById('thirdImgcont').classList.add('inactive');

    document.getElementById('fourthImgcont').classList.remove('active');
    document.getElementById('fourthImgcont').classList.add('inactive');
  }
  else if(index == 3){
    document.getElementById('thirdImgcont').classList.remove('inactive');
    document.getElementById('thirdImgcont').classList.add('active');

    document.getElementById('firstImgcont').classList.remove('active');
    document.getElementById('firstImgcont').classList.add('inactive');
    
    document.getElementById('secondImgcont').classList.remove('active');
    document.getElementById('secondImgcont').classList.add('inactive');

    document.getElementById('fourthImgcont').classList.remove('active');
    document.getElementById('fourthImgcont').classList.add('inactive');
  }
  else if(index == 4){
    document.getElementById('fourthImgcont').classList.remove('inactive');
    document.getElementById('fourthImgcont').classList.add('active');

    document.getElementById('firstImgcont').classList.remove('active');
    document.getElementById('firstImgcont').classList.add('inactive');
    
    document.getElementById('secondImgcont').classList.remove('active');
    document.getElementById('secondImgcont').classList.add('inactive');

    document.getElementById('thirdImgcont').classList.remove('active');
    document.getElementById('thirdImgcont').classList.add('inactive');
  }
 
}
