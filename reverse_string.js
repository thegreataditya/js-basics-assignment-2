let input = "Aditya Tiwari";

function reverse_string(str){
    let reversed_str = "";
    for(let i=str.lingth-1;i>=0;i--){
        reversed_str += str[i];
    }

    str = reversed_str;
    console.log(str);
}

setTimeout(reverse_string, 2000);