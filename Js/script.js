const topImages = [
    "Images/a.jpeg",
    "Images/g.jpeg",
    "Images/b.jpeg",
    "Images/c.jpeg",
    "Images/d.jpeg",
    "Images/e.jpeg",
    "Images/f.jpeg",
    "Images/r.jpeg",
    "Images/s.jpeg",
    "Images/t.jpeg"
];

const leftImages = [
    "Images/s-a.jpeg",
    "Images/s-b.jpeg",
    "Images/s-c.jpeg",
    "Images/s-d.jpeg"
];

const btmRImages = [
    "Images/p-a.jpeg"
];

const btmLImages = [
    "Images/n-a.jpeg"
];


const picsTopLeftImages = [
    "Images/class1.jpeg",
    "Images/class2.jpeg",
    "Images/class3.jpeg"
];

const picsBottomRightImages = [
    "Images/g1.jpeg"
];

const picsBottomLeftImages = [
    "Images/li1.jpeg",
    "Images/li2.jpeg",
    "Images/li3.jpeg"
];

function createSlider(selector, images) {

    const slide = document.querySelector(selector);

    if (!slide) {
        console.log(`${selector} not found.`);
        return;
    }

    let index = 0;
    let interval = null;

    slide.style.backgroundImage = `url(${images[0]})`;
    slide.style.backgroundSize = "cover";
    slide.style.backgroundPosition = "center";
    slide.style.opacity = "1";
    slide.style.transition = "opacity 0.4s ease";

    slide.addEventListener("mouseenter", function () {

        if (interval) return;

        interval = setInterval(function () {

            slide.style.opacity = "0";

            setTimeout(function () {

                index = (index + 1) % images.length;

                slide.style.backgroundImage = `url(${images[index]})`;
                slide.style.opacity = "1";

            }, 400);

        }, 2000);

    });

    slide.addEventListener("mouseleave", function () {

        clearInterval(interval);
        interval = null;

    });

}


createSlider(".slides-top", topImages);
createSlider(".slides-left", leftImages);
createSlider(".btm-r", btmRImages);
createSlider(".btm-l", btmLImages);

createSlider(".pics-topl", picsTopLeftImages);
createSlider(".pics-bottomr", picsBottomRightImages);
createSlider(".pics-bottoml", picsBottomLeftImages);