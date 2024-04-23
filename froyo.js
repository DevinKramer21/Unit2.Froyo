function countFlavors() {
    const userInput = document.getElementById("flavorInput").value;
    const flavors = userInput.split(",").map(flavor => flavor.trim());
  
    const flavorCount = {};
    flavors.forEach(flavor => {
      flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    });
  
    displayFlavorCount(flavorCount);
  }
  
  function displayFlavorCount(flavorCount) {
    const flavorCountContainer = document.getElementById("flavorCount");
    flavorCountContainer.innerHTML = "";
  
    const heading = document.createElement("h2");
    heading.textContent = "Flavor Counts";
    flavorCountContainer.appendChild(heading);
  
    const list = document.createElement("ul");
    for (const [flavor, count] of Object.entries(flavorCount)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${flavor}: ${count}`;
      list.appendChild(listItem);
    }
    flavorCountContainer.appendChild(list);
  }
  