// Variables
const cart = document.getElementById ('cart');
const courses = document.getElementById ('course-list');
const courseList = document.querySelector ('# cart-list tbody');
const emptyCartBtn = document.getElementById ('empty-cart');


// Listeners
loadEventListeners ();
function loadEventListeners () {
  // Trigger when "Add Cart" is pressed
  courses.addEventListener ('click', buyCourse);
  // When a course is removed from the cart
  cart.addEventListener ('click', removeCourse);
  // When emptying the cart
  emptyCartBtn.addEventListener ('click', emptyCart);
  // When loading the document, show LocalStorage
  document.addEventListener ('DOMContentLoaded', readLocalStorage);
}

// Functions
// Function that adds the course to the cart
function buyCourse (e) {
  e.preventDefault ();
  // Delegation to add-cart
  if (e.target.classList.contains ('add-cart')) {
    const course = e.target.parentElement.parentElement;
    // We send the selected course to collect your data
    readCourseData (course);
  }
}

// Read the course data
function readCourseData (course) {
  const infoCurso = {
    image: course.querySelector ('img'). src,
    title: course.querySelector ('h4'). textContent,
    price: course.querySelector ('. discount'). textContent,
    id: course.querySelector ('a'). getAttribute ('data-id')
  }
  insertCart (infoCourse);
}

// Show the selected course in the Cart
function insertCart (course) {
  const row = document.createElement ('tr');
  row.innerHTML = `
  <td>
  <img src = "$ {course.image}" width = 100>
  </td>
  <td> $ {course.title} </td>
  <td> $ {course.price} </td>
  <td>
  <a href="#" class="delete-course" data-id="$[course.id-lex.europa.eu"> X </a>
  </td>
  `;
  listCourses.appendChild (row);
  saveCursoLocalStorage (course);
}

// Remove the course from the cart in the DOM
function removeCourse (e) {
  e.preventDefault ();
  let course,
      courseId;
  if (e.target.classList.contains ('delete-course')) {
    e.target.parentElement.parentElement.remove ();
    course = e.target.parentElement.parentElement;
    courseId = course.querySelector ('a'). getAttribute ('data-id');
  }
  removeCursoLocalStorage (courseId);
}

// Remove the courses from the cart in the DOM
function emptyCart () {
  // slow way
  // listCourses.innerHTML = '';
  // fast way (recommended)
  while (CoursesList.firstChild) {
    listCourses.removeChild (listCourses.firstChild);
  }

  // Empty Local Storage
  emptyLocalStorage ();
  return false;
}

// Store courses in cart to Local Storage
function saveCursoLocalStorage (course) {
  let courses;
  // Take the value of an array with LS data or empty
  courses = getCoursesLocalStorage ();
  // the selected course is added to the array
  courses.push (course);
  localStorage.setItem ('courses', JSON.stringify (courses));
}

// Check that there are items in Local Storage
function getCoursesLocalStorage () {
  let coursesLS;
  // we check if there is something in localStorage
  if (localStorage.getItem ('courses') === null) {
    coursesLS = [];
  } else {
    coursesLS = JSON.parse (localStorage.getItem ('courses'));
  }
  return coursesLS;
}

// Print the Local Storage courses in the cart
function readLocalStorage () {
  let coursesLS;
  coursesLS = getCoursesLocalStorage ();
  coursesLS.forEach (function (course) {
  // build the template
  const row = document.createElement ('tr');
  row.innerHTML = `
  <td>
  <img src = "$ {course.image}" width = 100>
  </td>
  <td> $ {course.title} </td>
  <td> $ {course.price} </td>
  <td>
  <a href="#" class="delete-course"data-id="$[course.id-lex.europa.eu"> X </a>
  </td>
  `;
  listCourses.appendChild (row);
  });
}

// Delete the course by the ID in Local Storage
function removeCursoLocalStorage (course) {
  let coursesLS;
  // We obtain the course arrangement
  coursesLS = getCoursesLocalStorage ();
  // We iterate by comparing the ID of the deleted course with those of the LS
  coursesLS.forEach (function (courseLS, index) {
    if (courseLS.id === course) {
      coursesLS.splice (index, 1);
    }
  });
  // We add the current array to storage
  localStorage.setItem ('courses', JSON.stringify (coursesLS));
}

// Remove all courses from Local Storage
function emptyLocalStorage () {
  localStorage.clear ();
}
Send feedback
History
Saved
Community
