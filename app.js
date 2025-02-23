const divWrapper = document.createElement("div");
divWrapper.classList.add("card");
const image = document.createElement("img");
image.src = "./img/blogimage.svg";
image.width = "336";
image.height = "200";
image.classList.add("card__image");
const boldText = document.createElement("a");
boldText.textContent = "Learning";
boldText.href = "./card.html";
boldText.classList.add("link");
const text = document.createElement("p");
text.textContent = "Published 21 Dec 2023";
text.classList.add("data");
const titleText = document.createElement("h1");
titleText.textContent = "HTML & CSS foundations";
titleText.classList.add("title");
const subText = document.createElement("p");
subText.textContent =
  "These languages are the backbone of every website, defining structure, content, and presentation.";
subText.classList.add("subtitle");
const avatarContainer = document.createElement("div");
avatarContainer.classList.add("avatarContainer");
const AvatarImage = document.createElement("img");
AvatarImage.classList.add("avatar__img");
AvatarImage.src = "./img/greg.png";
const textImage = document.createElement("h4");
textImage.textContent = "Greg Hooper";
textImage.classList.add("text__image");
avatarContainer.append(AvatarImage, textImage);
divWrapper.append(image, boldText, text, titleText, subText, avatarContainer);
document.body.append(divWrapper);
