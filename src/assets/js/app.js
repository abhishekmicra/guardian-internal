// Flag to determine if nav_manu_btn was clicked
var navMenuClicked = false;

// Navbar
$(window).scroll(function () {
  var scrollLifex = $(window).scrollTop();
  if (scrollLifex >= 10) {
    $(".navbar__wrapper").addClass("active");
  } else {
    // Only remove the active class if nav_manu_btn was not clicked
    if (!navMenuClicked) {
      $(".navbar__wrapper").removeClass("active");
    }
  }
});

// Sidebar
$(document).ready(function () {
  $(".nav_manu_btn").click(function () {
    $(".nav_list_close").toggleClass("nav_list_open");
    navMenuClicked = !navMenuClicked;

    if (navMenuClicked) {
      $(".navbar__wrapper").addClass("active");
    } else {
      var scrollLifex = $(window).scrollTop();
      if (scrollLifex < 10) {
        $(".navbar__wrapper").removeClass("active");
      }
    }
  });

  // Close dropdown when clicking outside
  $(document).click(function (event) {
    var target = $(event.target);
    if (
      !target.closest(".nav_list_m_wrapper").length &&
      !target.closest(".nav_manu_btn").length
    ) {
      if ($(".nav_list_m_wrapper").hasClass("nav_list_open")) {
        $(".nav_list_m_wrapper").removeClass("nav_list_open");
        navMenuClicked = false;
        var scrollLifex = $(window).scrollTop();
        if (scrollLifex < 10) {
          $(".navbar__wrapper").removeClass("active");
        }
      }
    }
  });
});

// blur background
$(document).ready(function () {
  let openDropdowns = 0;

  $(".nav_dropdown_link").on("show.bs.dropdown", function () {
    openDropdowns++;
    $(".blur_background").addClass("show_blury");
  });

  $(".nav_dropdown_link").on("hide.bs.dropdown", function () {
    openDropdowns--;
    if (openDropdowns === 0) {
      $(".blur_background").removeClass("show_blury");
    }
  });
});

// active link color 
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav_link_a");
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active_nav");
    }
  });

  dropdownLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link
        .closest(".dropdown")
        .querySelector(".nav_dropdown_link")
        .classList.add("active_nav");
    }
  });
});

// // Humbuger Open
// let humbugerBg = document.getElementById("navBg");
// function openHumbuger() {
//     humbugerBg.classList.toggle("bgColor");
// }

// // // Side NavBar Function
// function openNav() {
//   document.getElementById("sideNavBar").style.right = "0";
//   document.getElementById("back__drop").style.display = "block";
// }
// function closeNav() {
//   // document.getElementById("sideNavBar").style.right = "-390px";
//   document.getElementById("sideNavBar").style.right = "-100%";
//   document.getElementById("back__drop").style.display = "none";
// }

// const form = document.getElementById("applicationForm");

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     event.stopPropagation();

//     const firstName = document.getElementById("firstName");
//     const lastName = document.getElementById("lastName");
//     const emailAddress = document.getElementById("emailAddress");
//     const phoneNumber = document.getElementById("phoneNumber");
//     const country = document.getElementById("country");
//     const resume = document.getElementById("resume");
//     const selectInputs = document.querySelectorAll("select");

//     if (firstName) firstName.classList.remove("is-invalid");
//     if (lastName) lastName.classList.remove("is-invalid");
//     if (phoneNumber) phoneNumber.classList.remove("is-invalid");
//     if (emailAddress) emailAddress.classList.remove("is-invalid");
//     if (country) country.classList.remove("is-invalid");
//     if (resume) resume.classList.remove("is-invalid");

//     let isValid = true;
//     var onlyCharactersRegex = /^[A-Za-z]+$/;

//     // Validate First Name
//     if (!onlyCharactersRegex.test(firstName.value.trim())) {
//         firstName.classList.add("is-invalid");
//         isValid = false;
//     }

//     // Validate Last Name
//     if (!onlyCharactersRegex.test(lastName.value.trim())) {
//         lastName.classList.add("is-invalid");
//         isValid = false;
//     }

//     // Validate Country
//     selectInputs.forEach(function (selectInput) {
//         if (selectInput.value === "") {
//             isValid = false;
//             selectInput.classList.add("is-invalid");
//         } else {
//             selectInput.classList.remove("is-invalid");
//         }
//     });

//     // Validation Email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailAddress.value)) {
//         emailAddress.classList.add("is-invalid");
//         isValid = false;
//     }

//     // Validation Phone
//     if (phoneNumber && phoneNumber.value.trim() === "") {
//         document.getElementById("phone").classList.add("is-invalid");
//         phoneNumber.classList.add("is-invalid");
//         isValid = false;
//     } else if (phoneNumber && !/^\d{10}$/.test(phoneNumber.value)) {
//         document.getElementById("phone").classList.add("is-invalid");
//         phoneNumber.classList.add("is-invalid");
//         isValid = false;
//     }

//     // Validation File Upload
//     if (resume && !resume.files.length) {
//         document.getElementById("file").classList.add("is-invalid");
//         resume.classList.add("is-invalid");
//         isValid = false;
//     }

//     if (isValid) {
//         console.log("Form is valid. Submitting...");
//         form.reset();
//         const fileInput = document.getElementById('resume');
//         fileInput.files = null;
//         const fileLabel = document.getElementById('fileAttached');
//         fileLabel.textContent = 'Attach file < 5MB';
//         resume.classList.remove("is-invalid");
//     }

//     return false;
// });

// counter--------------------------------------------{
var a = 0;
$(window).scroll(function () {
  var oTop = $("#counter__wrap").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".counter__").each(function () {
      var $this = $(this),
        countTo = parseFloat($this.attr("data-number")); // Ensure countTo is a float

      $({
        countNum: parseFloat($this.text()), // Ensure starting number is a float
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: "swing",
          step: function () {
            // Check if the target number has a decimal part
            let formattedNum;
            if (countTo % 1 !== 0) {
              formattedNum = this.countNum.toFixed(1);
            } else {
              formattedNum = Math.ceil(this.countNum);
            }

            // Add commas only if the number is 10,000 or greater
            if (formattedNum >= 10000) {
              formattedNum = Number(formattedNum).toLocaleString("en");
            }

            $this.text(formattedNum);
          },
          complete: function () {
            // Check if the target number has a decimal part
            let formattedNum;
            if (countTo % 1 !== 0) {
              formattedNum = this.countNum.toFixed(1);
            } else {
              formattedNum = Math.ceil(this.countNum);
            }

            // Add commas only if the number is 10,000 or greater
            if (formattedNum >= 10000) {
              formattedNum = Number(formattedNum).toLocaleString("en");
            }

            $this.text(formattedNum);
            //alert('finished');
          },
        }
      );
    });
    a = 1;
  }
});
// counter--------------------------------------------}
