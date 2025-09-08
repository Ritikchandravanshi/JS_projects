const users = [

  {
    name: "krish kapoor",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=774&q=80",
    bio: "bookworm 📚 | vintage soul 🎞"
  },
  {
    name: "gourav patel",
    pic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=774&q=80",
    bio: "code. coffee. repeat. 👨‍💻☕"
  },
  {
    name: "anaya verma",
    pic: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?auto=format&fit=crop&w=774&q=80",
    bio: "main character energy 🎬 | coffee > everything ✨"
  },
  {
    name: "kabir singh",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=774&q=80",
    bio: "wanderlust 🌍 | living for the playlist 🎧"
  },
  {
    name: "riya joshi",
    pic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=774&q=80",
    bio: "chaotic good 💫 | midnight snacker 🌙"
  },
  {
    name: "arjun mehta",
    pic: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=774&q=80",
    bio: "silent chaos in a loud world 🌌 | not for everyone"
  },
  {
    name: "isha oberoi",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=774&q=80",
    bio: "walking through dreams in doc martens ☁🖤 | late night thinker"
  },
  {
    name: "neel khanna",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=774&q=80",
    bio: "too glam to give a damn 💅 | filter free soul"
  },
  {
    name: "tara malik",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=774&q=80",
    bio: "spreading kindness like confetti 🎉"
  },
  {
    name: "devansh rai",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=774&q=80",
    bio: "gym rat 🏋️‍♂️ | protein powered"
  },
  {
    name: "saanvi deshmukh",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=774&q=80",
    bio: "sunflower soul 🌻 | ocean heart 🌊"
  }
];

let wrapper = document.querySelector(".wrapper")

function showUsers(arr){
     arr.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    
  
    const img = document.createElement("img");
    img.src = user.pic;
    img.classList.add("bg-img");
    img.alt = "Background";

    const blurLayer = document.createElement("div");
    blurLayer.style.backgroundImage = `url(${user.pic})`;
    blurLayer.classList.add("blurred-layer");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.textContent = user.name;

    const para = document.createElement("p");
    para.textContent = user.bio;
    
    content.appendChild(title);
    content.appendChild(para);

    card.appendChild(img);
    card.appendChild(blurLayer);
    card.appendChild(content);
   
    
    wrapper.appendChild(card);
}
  );
}

showUsers(users);

let inp = document.querySelector(".search-box")

inp.addEventListener("input" , ()=>{

  let newUser = users.filter((user) =>{
    return user.name.startsWith(inp.value);
  })

wrapper.innerHTML = "";
  showUsers(newUser);
})