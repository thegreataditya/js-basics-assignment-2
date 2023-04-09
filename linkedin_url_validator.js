const profile_link = /https\:\/{2}www\.linkedin\.com\/in\/[\w-]{1,29}[\w\d]$/;
let regex = new RegExp(profile_link, "gm");
let input = "https://www.linkedin.com/in/AdityaTiwari01";

let validate = (inp) => {
  if (inp.match(regex)) {
    console.log("The entered url is a valid LinkedIn profile link");
  } else {
    console.log("The entered url is not a valid LinkedIn profile link");
  }
};

validate(input);