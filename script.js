const headerElement = document.querySelector("header");
const videoElement = document.querySelector("video");
const optionBtnsElement = document.getElementById("options");
const mainmenuBtnsElement = document.getElementById("main menu");
const startBtn = document.getElementById("startBtn");
const howToPlayBtn = document.getElementById("howToPlayBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const jeepBtn = document.getElementById("jeepBtn");
const boatBtn = document.getElementById("boatBtn");
const vs15Btn = document.getElementById("vs15Btn");
const vs20Btn = document.getElementById("vs20Btn");
const autoAtt = document.createAttribute("autoplay");
const footerElement = document.querySelector("footer");

let state = 0;

videoElement.addEventListener("ended", function () {
  switch (state) {
    case 0:
      jeepBtn.innerHTML = "Jeep Tour";
      boatBtn.innerHTML = "Boat Tour";
      vs15Btn.innerHTML = "Virtual Safari 1.5";
      vs20Btn.innerHTML = "Virtual Safari 2.0";
      mainmenuBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 1:
      leftBtn.innerHTML = "Left Restaurant";
      rightBtn.innerHTML = "Right Restaurant";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 2:
      showVideo(4);
      openFullscreen();
      state++;
      break;
    case 3:
      leftBtn.innerHTML = "Around the Mountain";
      rightBtn.innerHTML = "Through the Cave";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 4:
      showVideo(7);
      openFullscreen();
      state++;
      break;
    case 5:
      leftBtn.innerHTML = "Left Cave";
      rightBtn.innerHTML = "Right Cave";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 6:
      showVideo(10);
      openFullscreen();
      state=13;
      break;
    case 7:
      videoElement.style.display = "none";
      startBtn.innerHTML = "Journey Again?";
      startBtn.style.display = "block";
      howToPlayBtn.style.display = "block";
      footerElement.style.display = "flex";
      closeFullscreen();
      break;
    case 8:
      leftBtn.innerHTML = "Left Side";
      rightBtn.innerHTML = "Right Side";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 9:
      leftBtn.innerHTML = "Pick Left";
      rightBtn.innerHTML = "Pick Right";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 10:
      showVideo(16);
      openFullscreen();
      state++;
      break;
    case 11:
      leftBtn.innerHTML = "Go Left";
      rightBtn.innerHTML = "Go Right";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 12:
      showVideo(19);
      openFullscreen();
      state=14;
      break;
    case 13:
      showVideo((Math.floor(Math.random() * 10) % 3) + 20);
      openFullscreen();
      state=7;
      break;
    case 14:
      showVideo((Math.floor(Math.random() * 10) % 3) + 23);
      openFullscreen();
      state=7;
      break;
    case 15:
      leftBtn.innerHTML = "Left Side";
      rightBtn.innerHTML = "Right Side";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 16:
      showVideo(29);
      openFullscreen();
      state++;
      break;
    case 17:
      leftBtn.innerHTML = "Go Left";
      rightBtn.innerHTML = "Go Right";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 18:
      showVideo(32);
      openFullscreen();
      state++;
      break;
    case 19:
      leftBtn.innerHTML = "Move Forward";
      rightBtn.innerHTML = "Move Forward (?)";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 20:
      showVideo(35);
      openFullscreen();
      state++;
      break;
    case 21:
      showVideo((Math.floor(Math.random() * 10) % 3) + 36);
      openFullscreen();
      state=7;
      break;
    case 22:
      leftBtn.innerHTML = "Left Side";
      rightBtn.innerHTML = "Right Side";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 23:
      showVideo(42);
      openFullscreen();
      state++;
      break;
    case 24:
      leftBtn.innerHTML = "Left Side";
      rightBtn.innerHTML = "Right Side";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 25:
      showVideo(45);
      openFullscreen();
      state++;
      break;
    case 26:
      leftBtn.innerHTML = "Left Side";
      rightBtn.innerHTML = "Right Side";
      optionBtnsElement.style.display = "flex";
      closeFullscreen();
      break;
    case 27:
      showVideo((Math.floor(Math.random() * 10) & 1) + 48);
      openFullscreen();
      state=7;
      break;       
    default:
      alert("ERROR: How did you get here? ");
      break;
  }
});

vs15Btn.addEventListener("click", function () {
   hideButtons();
   showVideo(26);
   openFullscreen();
   state = 15;
});

vs20Btn.addEventListener("click", function () {
   hideButtons();
   showVideo(39);
   openFullscreen();
   state = 22;
});

jeepBtn.addEventListener("click", function () {
   hideButtons();
   showVideo(1);
   openFullscreen();
   state = 1;
});

boatBtn.addEventListener("click", function () {
   hideButtons();
   showVideo(11);
   openFullscreen();
   state = 8;
});

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";
  howToPlayBtn.style.display = "none";
  videoElement.setAttributeNode(autoAtt);
  videoElement.style.display = "block";
  videoElement.src = "./Videos/Virtual_Safari_Intro.mp4";
  footerElement.style.display = "none";
  openFullscreen();
  state = 0;
});

leftBtn.addEventListener("click", function () {
  switch (state) {
    case 0:
      hideButtons();
      showVideo(1);
      openFullscreen();
      state++;
      break;
    case 1:
      hideButtons();
      showVideo(2);
      openFullscreen();
      state++;
      break;
    case 3:
      hideButtons();
      showVideo(5);
      openFullscreen();
      state++;
      break;
    case 5:
      hideButtons();
      showVideo(8);
      openFullscreen();
      state++;
      break;
    case 8:
      hideButtons();
      showVideo(12);
      openFullscreen();
      state++;
      break;
    case 9:
      hideButtons();
      showVideo(14);
      openFullscreen();
      state++;
      break;
    case 11:
      hideButtons();
      showVideo(17);
      openFullscreen();
      state++;
      break;
    case 15:
      hideButtons();
      showVideo(27);
      openFullscreen();
      state++;
      break;
    case 17:
      hideButtons();
      showVideo(30);
      openFullscreen();
      state++;
      break;
    case 19:
      hideButtons();
      showVideo(33);
      openFullscreen();
      state++;
      break;
    case 22:
      hideButtons();
      showVideo(40);
      openFullscreen();
      state++;
      break;
    case 24:
      hideButtons();
      showVideo(43);
      openFullscreen();
      state++;
      break; 
    case 26:
      hideButtons();
      showVideo(46);
      openFullscreen();
      state++;
      break;     
    default:
      alert("ERROR: Now how did you get here?");
  }
});

rightBtn.addEventListener("click", function () {
  switch (state) {
    case 0:
      hideButtons();
      showVideo(11);
      openFullscreen();
      state=8;
      break;
    case 1:
      hideButtons();
      showVideo(3);
      openFullscreen();
      state++;
      break;
    case 3:
      hideButtons();
      showVideo(6);
      openFullscreen();
      state++;
      break;
    case 5:
      hideButtons();
      showVideo(9);
      openFullscreen();
      state++;
      break;
    case 8:
      hideButtons();
      showVideo(13);
      openFullscreen();
      state++;
      break;
    case 9:
      hideButtons();
      showVideo(15);
      openFullscreen();
      state++;
      break;
    case 11:
      hideButtons();
      showVideo(18);
      openFullscreen();
      state++;
      break;
    case 15:
      hideButtons();
      showVideo(28);
      openFullscreen();
      state++;
      break;
    case 17:
      hideButtons();
      showVideo(31);
      openFullscreen();
      state++;
      break;
    case 19:
      hideButtons();
      showVideo(34);
      openFullscreen();
      state++;
      break;
    case 22:
      hideButtons();
      showVideo(41);
      openFullscreen();
      state++;
      break;
    case 24:
      hideButtons();
      showVideo(44);
      openFullscreen();
      state++;
      break;
    case 26:
      hideButtons();
      showVideo(47);
      openFullscreen();
      state++;
      break;
    default:
      alert("ERROR: Now how did you get here?");
  }
});

// Video Sources Array 50 total files, 49 last index
const videoList = [
  "./Videos/Virtual_Safari_Intro.mp4",
  "./Videos/Jeep_Intro.mp4",
  "./Videos/Jeep_Food_Left.mp4",
  "./Videos/Jeep_Food_Right.mp4",
  "./Videos/Jeep_Stampede.mp4",
  "./Videos/Jeep_Stampede_Left.mp4",
  "./Videos/Jeep_Stampede_Right.mp4",
  "./Videos/Jeep_Cave.mp4",
  "./Videos/Jeep_Cave_Left.mp4",
  "./Videos/Jeep_Cave_Right.mp4",
  "./Videos/Jeep_End.mp4",
  "./Videos/Boat_Intro.mp4",
  "./Videos/Boat_Left_1.mp4",
  "./Videos/Boat_Right_1.mp4",
  "./Videos/Boat_Left_2.mp4",
  "./Videos/Boat_Right_2.mp4",
  "./Videos/Boat_Crocodile.mp4",
  "./Videos/Boat_Left_3.mp4",
  "./Videos/Boat_Right_3.mp4",
  "./Videos/Boat_End.mp4",
  "./Videos/Jeep_Pictures_1.mp4",
  "./Videos/Jeep_Pictures_2.mp4",
  "./Videos/Jeep_Pictures_3.mp4",
  "./Videos/Boat_Pictures_1.mp4",
  "./Videos/Boat_Pictures_2.mp4",
  "./Videos/Boat_Pictures_3.mp4",
  "./Videos/Safari_1.5_Intro.mp4",
  "./Videos/Safari_1.5_Left_1.mp4",
  "./Videos/Safari_1.5_Right_1.mp4",
  "./Videos/Safari_1.5_Fake_Train.mp4",
  "./Videos/Safari_1.5_Left_2.mp4",
  "./Videos/Safari_1.5_Right_2.mp4",
  "./Videos/Safari_1.5_Real_Train.mp4",
  "./Videos/Safari_1.5_Left_3.mp4",
  "./Videos/Safari_1.5_Right_3.mp4",
  "./Videos/Safari_1.5_Ending.mp4",
  "./Videos/Safari_1.5_Pictures_1.mp4",
  "./Videos/Safari_1.5_Pictures_2.mp4",
  "./Videos/Safari_1.5_Pictures_3.mp4",
  "./Videos/Safari_2.0_Intro.mp4",
  "./Videos/Safari_2.0_Left_1.mp4",
  "./Videos/Safari_2.0_Right_1.mp4",
  "./Videos/Safari_2.0_Elephant_Jokes.mp4",
  "./Videos/Safari_2.0_Left_2.mp4",
  "./Videos/Safari_2.0_Right_2.mp4",
  "./Videos/Safari_2.0_Bridge.mp4",
  "./Videos/Safari_2.0_Left_3.mp4",
  "./Videos/Safari_2.0_Right_3.mp4",
  "./Videos/Safari_2.0_Pictures_1.mp4",
  "./Videos/Safari_2.0_Pictures_2.mp4",
];

// Helper Functions
function showVideo(videoIndex) {
  videoElement.src = videoList[videoIndex];
}

function hideButtons() {
  optionBtnsElement.style.display = "none";
  mainmenuBtnsElement.style.display = "none";
}

function openFullscreen() {
  if (videoElement.requestFullscreen) {
    videoElement.requestFullscreen();
  } else if (videoElement.mozRequestFullScreen) {
    /* Firefox */
    videoElement.mozRequestFullScreen();
  } else if (videoElement.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    videoElement.webkitRequestFullscreen();
  } else if (videoElement.msRequestFullscreen) {
    /* IE/Edge */
    videoElement.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (videoElement.exitFullscreen) {
    videoElement.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    /* Firefox */
    document.mozCancelFullScreen();
  } else if (videoElement.webkitExitFullscreen) {
    /* Chrome, Safari and Opera */
    videoElement.webkitExitFullscreen();
  } else if (videoElement.msExitFullscreen) {
    /* IE/Edge */
    videoElement.msExitFullscreen();
  }
}

// Description Slideshow Script

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
