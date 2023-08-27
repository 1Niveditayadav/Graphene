const navbar = [
    { name: 'Home', id: 'home'},
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
{ name: 'Product 1', id: 'p1'},
{ name: 'Product 2', id: 'p2' },
{ name: 'Product 3', id: 'p3'},
{ name: 'Product 4', id: 'p4' },
] },
{ name: 'Contact Us', id: 'contact'},
];

const navbarContainer = document.querySelector(".navbar");

for (const item of navbar) {
if (item.child) {
const dropdown = document.createElement("div");
dropdown.classList.add("dropdown");

const dropbtn = document.createElement("button");
dropbtn.classList.add("dropbtn");
dropbtn.textContent = item.name;

const dropdownContent = document.createElement("div");
dropdownContent.classList.add("dropdown-content");

for (const childItem of item.child) {
  const childLink = document.createElement("a");
  childLink.textContent = childItem.name;
  childLink.href = `#${childItem.id}`;
  dropdownContent.appendChild(childLink);
}

dropdown.appendChild(dropbtn);
dropdown.appendChild(dropdownContent);
navbarContainer.appendChild(dropdown);
} else {
const link = document.createElement("a");
link.textContent = item.name;
link.href = `#${item.id}`;
navbarContainer.appendChild(link);
}
}


