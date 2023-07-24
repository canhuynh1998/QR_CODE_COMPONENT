  // Function to create the description element as an HTML string
  const createDescriptionHTML = (description, backgroundColor) => `
    <div style="display:flex; 
                flex-direction:row; 
                color:${description.color};
                border-color:${description.color};
                background-color:${backgroundColor};
                margin-top:15px;
                justify-content:space-between;
                padding: 10px 25px;
                border-radius:10px;">
      
      <span style="font-size:18px; font-weight:700"><img src="${description.icon}" />${description.category}</span>
      <span>${description.score}/100</span>
    </div>`;

  // Wait for the DOM to be fully loaded before running the script
  document.addEventListener("DOMContentLoaded", () => {
    // Fetch the data and create description elements
    const descriptionTab = document.querySelector(".description");
    if (!descriptionTab) {
      console.error("Element with class 'description' not found in the DOM.");
      return; // Exit the function if the element is not found
    }

    fetch('./results-summary-component-main/data.json')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((attribute, index) => {
          let background = "hsl(0, 0%, 100%)";
          if (index >= 2) {
            background = "hsl(221, 100%, 96%)";
          }
          const newDescriptionHTML = createDescriptionHTML(attribute, background);
          descriptionTab.innerHTML += newDescriptionHTML;
          console.log(newDescriptionHTML);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });