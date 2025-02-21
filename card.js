const divWrapper = document.createElement("div");
divWrapper.classList.add("cardDivWrapper");
const avatarImage = document.createElement("img");
avatarImage.src = "./img/profile-pic.png";
avatarImage.classList.add("cardAvatarImage");
const title = document.createElement("h3");
title.textContent = "Jessica Randall";
title.classList.add("cardTextContent");
const subTitle = document.createElement("h5");
subTitle.textContent = "London, United Kingdom";
subTitle.classList.add("cardSubTitle");
const text = document.createElement("p");
text.textContent = "Front-end developer and avid reader.";
text.classList.add("cardText");
const list = document.createElement("ul");
list.classList.add("cardList");

let links = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];

for (let i = 0; i < 5; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = links[i];
  a.classList.add("cardLink");
  li.classList.add("cardItem");
  li.appendChild(a);
  list.appendChild(li);
}

divWrapper.append(avatarImage, title, subTitle, text, list);
document.body.appendChild(divWrapper);
