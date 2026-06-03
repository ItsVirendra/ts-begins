// contains functions that work with users


function addUser() {
    // add user

}


function getUserByEmail(emailInput: string) {
    // let searchFound = false;
    let userDetails: { name?: string; id?: string; role?:string; active?:boolean } = {};
    if (users_list.length > 0) {
        for (let i = 0; i < users_list.length; i++) {
            if (users_list[i].email == emailInput) {
                console.log("Found the email in the Users list");
                // searchFound = true;
                userDetails.name = users_list[i].name;
                userDetails.role = users_list[i].role;
                userDetails.active = users_list[i].active;
                userDetails.id = users_list[i].id;
            }
        }
    }
    return userDetails;
}

function disaplyUsers() {
    // this is total user count
    console.log(users_list.length);
    // display users one by one
}