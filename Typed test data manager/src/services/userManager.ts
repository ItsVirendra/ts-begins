// contains functions that work with users


function addUser(emailId: string, name: string, role: string) {
    if (!getUserByEmail(emailId)) {
        const current_length = users_list.length;
        const user_details = {
            name: name,
            email: emailId,
            role: role,
            id: current_length + 1,
            active: true
        };
        users_list.push(user_details);
        return true;
    } else {
        return false;
    }

}


function getUserByEmail(emailInput: string) {
    for (let i = 0; i < users_list.length; i++) {
        if (users_list[i].email === emailInput) {
            return users_list[i];
        }
    }
    return undefined;
}

function getActiveUsers(){
    let active_users = [];
    for (let i=0;i<users_list.length;i++){
        if(users_list[i].active){
            active_users.push(users_list[i]);
        }
    }
    return active_users;
}


function updateUser(email: string, role:string, name:string){
    let userFound = false;
    for(let i=0;i<users_list.length;i++){
        if (users_list[i].email === email){
            users_list[i].name = name;
            users_list[i].role = role;
            userFound = true;
        }
    }
    return userFound;
}

function disaplyUsers() {
    // this is total user count
    console.log(users_list.length);
    // display users one by one
}