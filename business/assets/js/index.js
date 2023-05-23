// scrolling s
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// scrolling e

// testimontial s

const reviews = [
  {
    id: 1,
    desc: "Refr let’s our customers give us a shout-out from the table which has led to increase in our order volume. We are very pleased with this genuine form of marketing for our restaurant.",
    storeName: "SEEFAH",
    resturant:"Restaurant owner",
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fsh_owner.png?alt=media&token=da60e23b-694e-49aa-8def-b193b7f6ccc0",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fsheefash.png?alt=media&token=25b110f4-bcd8-45b6-9b3e-e31486d5a9bd",
  },
  {
    id: 2,
    desc: "Refr has proven to be a great launchpad that has helped us grow awareness of our brand & build our online presence.",
    storeName: "Hanisha",
    resturant:"Salon owner",
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2FRectangle%2010543.png?alt=media&token=87622785-6186-4845-b29c-a33726238704",
    banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fnailstorybanner.png?alt=media&token=44e91377-1157-4465-a68a-54f6e437581c",
  },
  {
    id: 3,
    desc: "We are quite happy to list our brand on the Refr marketplace. Customers can easily pay with RefrCash, which let’s more people buy from us. They help with the cataloguing as well, so it’s been a smooth ride.",
    storeName: "Aditya",
    resturant:"Owner",
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2FwrapcartLogo.png?alt=media&token=d6875079-0fa5-446d-abd5-68a633d7f55d",
    banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fwrapcartbanner.png?alt=media&token=03870319-ee0d-4098-86be-12b78bc9db67",
  },
];

const desc = document.getElementById("desc");
const storename = document.getElementById("storename");
const resturant = document.getElementById("resturant");
const logo = document.getElementById("logo");
const banner = document.getElementById("banner");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load inital item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  desc.textContent = item.desc;
  storename.textContent = item.storeName;
  resturant.textContent = item.resturant;
  logo.src = item.logo;
  banner.src = item.banner;
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  desc.textContent = item.desc;
  storename.textContent = item.storeName;
  resturant.textContent = item.resturant;
  logo.src = item.logo;
  banner.src = item.banner;
}

// show next person
  // document.getElementById("desc").classList.toggle("textColorChange");


nextBtn.addEventListener("click", function (e) {
  setTimeout(() => {   
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
  
    showPerson(currentItem);
  }, 1000);
});

// show prev person

prevBtn.addEventListener("click", function () {
  setTimeout(() => {
    
    currentItem--;
  
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
  
    showPerson(currentItem);
  }, 1000);
});

// testimontial e

//

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
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

