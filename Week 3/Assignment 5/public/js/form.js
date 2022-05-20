//Age dropdown options
const ageDD = document.querySelector("#age");
for (let i = 1; i < 120; i++) {
  let opt = document.createElement("option");
  opt.value = i;
  opt.text = i;
  ageDD.appendChild(opt);
}




