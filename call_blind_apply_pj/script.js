let form = document.querySelector("#userForm");

let username = document.querySelector("#name");
let roll = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const UserManager = {
  Users: [],

  init: function () {
    form.addEventListener("submit", this.formSubmit.bind(this));
    this.removeUsers(); // 👈 init ke time hi call karna hoga
  },

  formSubmit: function (e) {
    e.preventDefault();
    this.addUsers();
  },

  addUsers: function () {
    this.Users.push({
      username: username.value,
      roll: roll.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
    this.renderUi();
  },

  renderUi: function () {
    document.querySelector(".userc").innerHTML = "";
    this.Users.forEach((user, index) => {
      let card = document.createElement("div");
      card.classList.add("small-card");
      card.dataset.index = index; // 👈 index store

      card.style.background = "#1e1e1e";
      card.style.padding = "20px";
      card.style.borderRadius = "12px";
      card.style.width = "220px";
      card.style.textAlign = "center";
      card.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)";

      let img = document.createElement("img");
      img.src = user.photo;
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.borderRadius = "50%";
      img.style.marginBottom = "10px";

      let name = document.createElement("h3");
      name.textContent = user.username;

      let role = document.createElement("p");
      role.textContent = user.roll;

      let bio = document.createElement("p");
      bio.textContent = user.bio;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(role);
      card.appendChild(bio);

      document.querySelector(".userc").appendChild(card);
    });
  },

  removeUsers: function () {
    // 👇 parent container pe event delegation
    document.querySelector(".userc").addEventListener("click", (e) => {
     let card = e.target.closest(".small-card");
     if(card){
      let idx = card.dataset.index;
      console.log("clicked user" , this.Users[idx].username);
      this.Users.splice(idx , 1);
      this.renderUi();
     }
  
    });
  },
};

UserManager.init();
