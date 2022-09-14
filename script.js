// Attach functions to buttons
const addChildBtn = document.querySelector("#add-child")

addChildBtn.addEventListener("click", addChild)


const redWeddingBtn = document.querySelector("#red-wedding")

redWeddingBtn.addEventListener("click", redWedding)


// The addChild function creates new div & appends it to the starks div


function addChild() {
  const addChildDiv = document.createElement("div")
  
  addChildDiv.textContent = "Hi,"

  starks.appendChild(addChildDiv)
}


// The redWedding function removes ALL stark children (loop)

const starks = document.querySelector(".starks")

function redWedding() {
  while(starks.children.length > 0) {
    starks.children[0].remove();
  }
  console.log("Power Off.");
}
console.dir(starks)