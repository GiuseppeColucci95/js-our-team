//select the dom elements
const sectionEl = document.querySelector('#cards .row');
console.log(sectionEl);
const formEl = document.getElementById('add_member');
console.log(formEl);

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];


//cicle for searching for each element of the array 
for (let i = 0; i < teamMembers.length; i++) {
  thisMember = teamMembers[i];

  //create HTML markup using a function and save it in a variable
  const markup = getMarkup(thisMember);

  //add markup to the html
  sectionEl.innerHTML += markup;
}


formEl.addEventListener('submit', (e) => {

  //prevent refresh of the page
  e.preventDefault();

  //get all the node elements
  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const email = document.getElementById('email').value;
  let img = document.getElementById('image').value;

  //if img field is empty set a default
  if (img === '') {
    img = "./assets/img/male1.png";
  }

  //create an object with the new data with ES6 style
  const member = createObject(name, role, email, img);

  //ask and get markup to add it in the page
  const markup = getMarkup(member);

  //add markup to the html
  sectionEl.innerHTML += markup;

  //clear values in the form
  formEl.reset();
});



//FUNCTIONS

/**
 * Function that return a dynamic markup to create a card, from a given object
 * @param {object} object 
 * @returns {string} markup
 */
function getMarkup(object) {

  const markup = `      
      <div class="col-4">
        <div class="card">
          <div class="row g-0 bg-black">
            <div class="col-4">
              <img src="${object.img}" class="img-fluid" alt="Card title">
            </div>
            <div class="col-8 px-4 d-flex align-items-center">
              <div>
                <h5 class="text-white fw-semibold fs-3">${object.name.toUpperCase()}</h5>
                <p class="text-white fs-5 my-3">${object.role}</p>
                <p class="text-info fs-5 my-0">${object.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;

  return markup;
}

/**
 * Function that returns an object starting from given values
 * @param {string} name 
 * @param {string} role 
 * @param {string} email 
 * @param {string} img 
 * @returns {object}
 */
function createObject(name, role, email, img) {

  const member = {
    name,
    role,
    email,
    img
  }

  return member;
}