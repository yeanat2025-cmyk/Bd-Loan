// ১. Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyCzv08ydHYvUue_sgEjDoT221ocAedXYfM",
    authDomain: "myproject-9f21b.firebaseapp.com",
    projectId: "myproject-9f21b",
    storageBucket: "myproject-9f21b.appspot.com",
    messagingSenderId: "670760388595",
    appId: "1:670760388595:web:a88159aa1ef33a4da37486"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// ২. ইউজার ডাটা চেক এবং ডিসপ্লে
auth.onAuthStateChanged((user) => {
    if (user) {
        db.collection("users").doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                document.getElementById("displayUserName").innerText = data.nickname || "User";
                document.getElementById("displayUID").innerText = "ID: " + (data.uid_number || "------");
                if(data.photo) {
                    document.getElementById("userProfilePic").src = data.photo;
                }
            }
        });
    } else {
        // লগইন না থাকলে, আপনি চাইলে redirect করতে পারেন
        // window.location.href = "login.html";
    }
});

// ৩. বটম ন্যাভ এবং প্রোফাইল চেক
function go(page) {
    window.location.href = page;
}

function profileCheck() {
    go("profile.html");
}

// ৪. স্মার্ট স্লাইডার
let slides = [
    "assets/slider/slide1.png",
    "assets/slider/slide2.png",
    "assets/slider/slide3.png",
    "assets/slider/slide4.png",
    "assets/slider/slide5.png",
    "assets/slider/slide6.png"
];

let index = 0;
const sliderImg = document.getElementById("sliderImg");

setInterval(() => {
    if(sliderImg){
        index = (index + 1) % slides.length;
        sliderImg.src = slides[index];
        updateDots(index);
    }
}, 4000);

// ৫. ডটস আপডেট করার ফাংশন
const dots = document.querySelectorAll(".slider-dots .dot");
function updateDots(activeIndex){
    dots.forEach((dot,i)=>{
        dot.classList.toggle("active", i===activeIndex);
    });
}

// ৬. ডট ক্লিক ইভেন্ট
dots.forEach((dot,i)=>{
    dot.addEventListener("click", () => {
        index = i;
        sliderImg.src = slides[index];
        updateDots(index);
    });
});