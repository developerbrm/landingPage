//Intersection observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      const { delay, animname, animtiming } = entry.target.dataset;
      entry.target.style.animation = `${animname} ${
        animtiming || 2
      }s cubic-bezier(0,.8,.38,1.03) ${delay || 0}s forwards`;
    } else {
      entry.target.style.animation = `none`;
    }
  });
});

const elements = document.querySelectorAll(`[data-animname]`);
elements.forEach((element) => {
  observer.observe(element);
});

//set the url for the images
const imageSet1 = document.querySelectorAll("#subs .slider img");
const imageSet2 = document.querySelectorAll("#review .review img");

const setUrl = (images, keyword, height = 800, width = 800) => {
  let [h, w] = [height, width];
  images.forEach((image) => {
    image.src = `https://source.unsplash.com/random/${h++}x${w++}/?${keyword}`;
  });
};

setUrl(imageSet1, `fitness`);
setUrl(imageSet2, `person`, 100, 100);
