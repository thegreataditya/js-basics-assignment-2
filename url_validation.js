let input = "https://google.com";
const url_structure = /https\:\/{2}www\.linkedin\.com\/in\/[\w-]{1,29}[\w\d]$/;
const flags = "gm";
const regex = new RegExp(url_structure, flags);

let validate = (input) => {
  if (input.match(regex)) {
    console.log("URL is correct");
  } else {
    console.log("URL is incorrect");
  }
};

validate(input);