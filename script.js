const mainWrapperDiv = document.querySelector(".main_wrapper_container");
const addNewStudentButton = document.querySelector(".add_item_button");
addNewStudentButton.addEventListener("click", () => {
  const itemsContentWrapperDiv = document.createElement("div");
  setAttributes(itemsContentWrapperDiv, {
    class: "items_content_wrapper_container",
  });

  const individualItemDiv = document.createElement("div");
  setAttributes(individualItemDiv, {
    class: "item_wrapper_container",
  });

  const studentNameDiv = document.createElement("div");
  setAttributes(studentNameDiv, { class: "studentName_container" });
  const studentNameInputTag = document.createElement("input");
  setAttributes(studentNameInputTag, {
    type: "text",
    placeholder: "Enter Student Name",
    class: "studentName",
  });

  studentNameDiv.append(studentNameInputTag);
  /********************************************* */

  const studentRollNumberDiv = document.createElement("div");
  setAttributes(studentRollNumberDiv, {
    class: "student_rollNumber_container",
  });
  const studentRollNumberInputTag = document.createElement("input");
  setAttributes(studentRollNumberInputTag, {
    type: "text",
    placeholder: "Enter Student Roll Number",
    class: "student_rollNumber",
  });

  studentRollNumberDiv.append(studentRollNumberInputTag);
  /****************************************/

  const addSubjectWrapperDiv = document.createElement("div");
  setAttributes(addSubjectWrapperDiv, {
    class: "add_subject_wrapper_container",
  });
  const addSubjectButton = document.createElement("button");
  setAttributes(addSubjectButton, {
    type: "button",
    class: "add_subject_btn",
  });
  addSubjectButton.textContent = "Add Subject";

  addSubjectWrapperDiv.append(addSubjectButton);

  addSubjectButton.addEventListener("click", () => {
    const subjectDiv = document.createElement("div");
    setAttributes(subjectDiv, { class: "subject_container" });
    const subjectMarksInputElement = document.createElement("input");
    setAttributes(subjectMarksInputElement, {
      type: "number",
      placeholder: "Enter Marks",
      class: "subjectMarks",
    });
    const subjectSelectTag = document.createElement("select");
    setAttributes(subjectSelectTag, { class: "subjectName" });
    const defaultOption = document.createElement("option");
    setAttributes(defaultOption, { value: "None" });
    defaultOption.textContent = "Select Subject:";
    const mathsOption = document.createElement("option");
    setAttributes(mathsOption, { value: "Maths" });
    mathsOption.textContent = "Maths";
    const englishOption = document.createElement("option");
    setAttributes(englishOption, { value: "English" });
    englishOption.textContent = "English";
    const hindiOption = document.createElement("option");
    setAttributes(hindiOption, { value: "Hindi" });
    hindiOption.textContent = "Hindi";
    const physicsOption = document.createElement("option");
    setAttributes(physicsOption, { value: "Physics" });
    physicsOption.textContent = "Physics";
    const chemistryOption = document.createElement("option");
    setAttributes(chemistryOption, { value: "Chemistry" });
    chemistryOption.textContent = "Chemistry";
    const scienceOption = document.createElement("option");
    setAttributes(scienceOption, { value: "Science" });
    scienceOption.textContent = "Science";
    const removeSubjectButton = document.createElement("button");
    setAttributes(removeSubjectButton, {
      type: "button",
      class: "remove_subject_btn",
    });
    removeSubjectButton.textContent = "Remove Subject";

    subjectSelectTag.append(defaultOption);
    subjectSelectTag.append(mathsOption);
    subjectSelectTag.append(englishOption);
    subjectSelectTag.append(hindiOption);
    subjectSelectTag.append(physicsOption);
    subjectSelectTag.append(chemistryOption);
    subjectSelectTag.append(scienceOption);
    subjectDiv.append(subjectMarksInputElement);
    subjectDiv.append(subjectSelectTag);
    subjectDiv.append(removeSubjectButton);
    addSubjectWrapperDiv.append(subjectDiv);

    removeSubjectButton.addEventListener("click", () => {
      subjectDiv.remove();
    });
    /**********************************************/
  });
  /**********************************************/

  const removeStudentWrapperDiv = document.createElement("div");
  setAttributes(removeStudentWrapperDiv, {
    class: "remove_student_wrapper_container",
  });
  const removeStudentButton = document.createElement("button");
  setAttributes(removeStudentButton, {
    type: "button",
    class: "remove_student_button",
  });
  removeStudentButton.textContent = "Remove Student";

  removeStudentWrapperDiv.append(removeStudentButton);

  removeStudentButton.addEventListener("click", () => {
    itemsContentWrapperDiv.remove();
  });
  /********************************************/

  individualItemDiv.append(studentNameDiv);
  individualItemDiv.append(studentRollNumberDiv);
  individualItemDiv.append(addSubjectWrapperDiv);
  individualItemDiv.append(removeStudentWrapperDiv);
  /*********************************************/

  itemsContentWrapperDiv.append(individualItemDiv);
  /********************************************/

  mainWrapperDiv.append(itemsContentWrapperDiv);
  /********************************************/
});

const setAttributes = (el, attrs) => {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};

const submitButton = document.querySelector(".submit_button");
submitButton.addEventListener("click", () => {
  const data = [];

  document
    .querySelectorAll(".items_content_wrapper_container")
    .forEach((itemWrapper) => {
      const item = {};

      const studentName = itemWrapper.querySelector(".studentName").value;
      item.studentName = studentName;

      const studentRollNumber = itemWrapper.querySelector(
        ".student_rollNumber"
      ).value;
      item.rollNumber = studentRollNumber;

      item.subjects = [];

      itemWrapper
        .querySelectorAll(".subject_container")
        .forEach((attributeWrapper) => {
          const attribute = {};
          attribute.marks =
            attributeWrapper.querySelector(".subjectMarks").value;
          attribute.name = attributeWrapper.querySelector(".subjectName").value;
          item.subjects.push(attribute);
        });

      data.push(item);
    });

  const jsonData = JSON.stringify(data, null, 3);
  localStorage.setItem("data", jsonData);
  console.log(jsonData);
});
