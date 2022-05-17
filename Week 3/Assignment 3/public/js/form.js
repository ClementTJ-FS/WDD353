//Age dropdown options
const ageDD = document.querySelector("#age");
for (let i = 1; i < 120; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.text = i;
  ageDD.appendChild(opt);
}

//regexs
const textRegex = /^[a-z]+$/i;
const addRegex = /^[a-z0-9\s,.'-]{3,}$/i;
const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

//validation

