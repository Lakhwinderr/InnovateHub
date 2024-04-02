const addFolderForm = document.getElementById("addFolderForm");

const handleDropDown = () => {
  addFolderForm.style.display = "block";
};
addFolderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  var folderName = document.getElementById("name").value;

  const folder = document.createElement("div");
  folder.classList.add("folder");
  folder.style.position = "relative";
  folder.innerHTML = `<div><h5><i class="fa-solid fa-folder" style="margin-right: 5px"></i>${folderName}<i class="fa-solid fa-caret-down" style="position: absolute; right: 0; margin-right: 5px;"></i></h5></div>
    <div id = "addSub" class="subFolder" onclick="addNewSubFolder(this)">
        <h5><i class="fa-regular fa-square-plus" style="margin-right: 5px;"></i>Add new sub</h5>
    </div>`;
  console.log(folder);
  const folders = document.querySelector(".folders");
  folders.appendChild(folder);
  addFolderForm.reset();
  addFolderForm.style.display = "none";
});

const addNewSubFolder = (ele) => {
  console.log(ele);

  const addSubFolderForm = document.getElementById("addSubFolderForm");
  addSubFolderForm.style.display = "block";
  addSubFolderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    var folderName = document.getElementById("subfoldername").value;
    const subFolder = document.createElement("div");
    subFolder.classList.add("subFolder");
    subFolder.innerHTML = `<h5>${folderName}</h5>`;
    console.log(subFolder);
    ele.parentElement.insertBefore(subFolder, ele);
    addSubFolderForm.reset();
    addSubFolderForm.style.display = "none";
  });
};

//open the addBrandForm

const addBrandButton = document.getElementById("addBrand");
const brandForm = document.getElementById("addTableForm");

const addBrandClick = () => {
  brandForm.style.display = "block";
};

brandForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const table = document.getElementById("table");
  console.log(table);
  // console.log(e.target[0].value)
  // console.log(e.target[1].value)
  // console.log(e.target[2].value)
  // console.log(e.target[3].value)
  // console.log(e.target[4].value)
  // console.log(e.target[5].value)

  const tableRow = ` <tr onclick="handleBrandClick(this)">
    <td class="brand">
      <div style="display: flex; align-items: center;">

        <input type="checkbox" id="brand" name="brand" checked  style="margin: 0 5px; display: none;" />
        <label for="brand">${e.target[0].value}</label>
      </div>
    </td>
    <td class="description">${e.target[1].value}</td>
    <td class="members">${e.target[2].value}</td>
    <td class="categories">
        <div class="tag">${e.target[3].value}</div>
    </td>
    <td>
        <div class="tag">${e.target[4].value}</div>
    </td>
    <td><div class="time">${e.target[5].value}</div></td>
</tr>`;

  table.childNodes[1].innerHTML += tableRow;
  brandForm.reset();
  brandForm.style.display = "none";
});

//count the selected brands



handleBrandClick = (ele) => {
  ele.style.backgroundColor = ele.style.backgroundColor === "" ? "#dddddd" : "";
  const check = ele.childNodes[1].childNodes[1].childNodes[1];
  check.style.display = check.style.display === "none" ? "block" : "none";
  ele.classList.toggle("countIt")
  let brandCount = document.querySelectorAll(".countIt").length;
  //update the brandcount in the below footer
  const count = document.getElementById("brandCount");
    count.innerText = `${brandCount}`
};


//adding colors to tags
function getRandomBrightColors(numColors, opacity) {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const red = Math.floor(Math.random() * 200) + 55; // Random value between 55 and 255
    const green = Math.floor(Math.random() * 200) + 55; // Random value between 55 and 255
    const blue = Math.floor(Math.random() * 200) + 55; // Random value between 55 and 255
    const color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    colors.push(color);
  }
  return colors;
}
 

function getRandomColor() {
  const numColors = 5;
  const opacity = 0.3; // Adjust opacity value as needed
  const colors = getRandomBrightColors(numColors, opacity);
//   console.log(colors);

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const tags = document.querySelectorAll(".tag");

tags.forEach((tag) => {
//   console.log(tag);
  tag.style.backgroundColor = getRandomColor();
  //adding hashes to the tags
  tag.innerText = `#${tag.innerText}`
});



const teams = document.querySelector(".teams").children;

for (const team of teams) {
   team.addEventListener("mouseenter", ()=>{
    team.style.backgroundColor = getRandomColor()
   })
   team.addEventListener("mouseleave", ()=>{
    team.style.backgroundColor = "";
   })
}

const buttons = document.querySelectorAll(".button")

for(const button of buttons){
    button.addEventListener("mouseenter", ()=>{
        button.style.backgroundColor = getRandomColor()
       })
       button.addEventListener("mouseleave", ()=>{
        button.style.backgroundColor = "";
       })
}

const footers = document.querySelector(".footer").children;

for(const footer of footers){
    footer.addEventListener("mouseenter", ()=>{
        footer.style.backgroundColor = getRandomColor()
       })
       footer.addEventListener("mouseleave", ()=>{
        footer.style.backgroundColor = "";
       })
}

const memberPics = document.querySelector('.memberPics').children

for(let i = 0; i < memberPics.length; i++){
    const left = (i/memberPics.length) * 100;

    memberPics[i].style.left = `${left}%`;
}

