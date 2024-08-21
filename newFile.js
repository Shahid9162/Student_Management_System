const getStudentNameBtn = document.querySelector(".get_studentName_data");
getStudentNameBtn.addEventListener("click", () => {
  document.querySelector(".searchRollNumber").value = ""; //clearing ipfield of rollNumber
  const searchInput = document
    .querySelector(".searchStudentName")
    .value.toLowerCase();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  const jsonData = localStorage.getItem("data");
  if (!jsonData) {
    resultsContainer.textContent = "No data found in local storage.";
    return;
  }

  const data = JSON.parse(jsonData);
  const filteredData = data.filter((item) =>
    item.studentName.toLowerCase().includes(searchInput)
  );

  if (filteredData.length === 0) {
    resultsContainer.textContent = "No matching items found.";
    return;
  }

  filteredData.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const studentNameDiv = document.createElement("div");
    studentNameDiv.setAttribute("class", "studentDetails");
    studentNameDiv.innerHTML = `<p>${item.studentName} (${item.rollNumber})</p>`;
    itemDiv.appendChild(studentNameDiv);

    const subjectsDiv = document.createElement("div");
    subjectsDiv.classList.add("attributes");
    const ul = document.createElement("ul");
    item.subjects.forEach((attribute) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${attribute.name}</p> <p class="attribute_type">${attribute.marks}</p>`;
      ul.appendChild(li);
    });
    subjectsDiv.appendChild(ul);
    itemDiv.appendChild(subjectsDiv);
    resultsContainer.appendChild(itemDiv);
  });
});
const getAttributeDataBtn = document.querySelector(".get_rollNumber_data");
getAttributeDataBtn.addEventListener("click", () => {
  document.querySelector(".searchStudentName").value = ""; //clearing ipfield of studentName
  const searchInput = document
    .querySelector(".searchRollNumber")
    .value.toLowerCase();
  const resultsContainer = document.getElementById("resultsContainer");
  resultsContainer.innerHTML = "";

  const jsonData = localStorage.getItem("data");
  if (!jsonData) {
    resultsContainer.textContent = "No data found in local storage.";
    return;
  }

  const data = JSON.parse(jsonData);
  const filteredData = data.filter((item) =>
    item.rollNumber.toLowerCase().includes(searchInput)
  );

  if (filteredData.length === 0) {
    resultsContainer.textContent = "No matching items found.";
    return;
  }

  filteredData.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const studentNameDiv = document.createElement("div");
    studentNameDiv.setAttribute("class", "studentDetails");
    studentNameDiv.innerHTML = `<p>${item.rollNumber} (${item.studentName})</p>`;
    itemDiv.appendChild(studentNameDiv);

    const subjectsDiv = document.createElement("div");
    subjectsDiv.classList.add("attributes");
    const ul = document.createElement("ul");
    item.subjects.forEach((attribute) => {
      const li = document.createElement("li");
      li.innerHTML = `<p>${attribute.name}</p> <p>${attribute.marks}</p>`;
      ul.appendChild(li);
    });
    subjectsDiv.appendChild(ul);
    itemDiv.appendChild(subjectsDiv);
    resultsContainer.appendChild(itemDiv);
  });
});
