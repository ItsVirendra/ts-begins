// contains functions that work with users


function addUser(){
// add user
console.log(users_list.length);
}


function getUserByEmail(){

    // how to take an input here?

const sample_email = "test.viru@gmail.com";
let searchFound = false;
for (let i=0; i< users_list.length;i++){
    if (users_list[i].email == sample_email){
        console.log("Found the email in the Users list");
        searchFound = true;
    }

    if (!searchFound){
        console.log("No email found.");
    }

}

}