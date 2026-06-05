// contains functions that work with users


function addUser(emailId: string, name: string, role: string): boolean {
    if (!getUserByEmail(emailId)) {
        const current_length: number = users_list.length;
        const user_details: User = {
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


function getUserByEmail(emailInput: string): User | undefined {
    for (let i: number = 0; i < users_list.length; i++) {
        if (users_list[i].email === emailInput) {
            return users_list[i];
        }
    }
    return undefined;
}

function getActiveUsers(): User[] {
    let active_users: User[] = [];
    for (let i = 0; i < users_list.length; i++) {
        if (users_list[i].active) {
            active_users.push(users_list[i]);
        }
    }
    return active_users;
}


function updateUser(email: string, role: string, name: string): boolean {
    for (let i: number = 0; i < users_list.length; i++) {
        if (users_list[i].email === email) {
            users_list[i].name = name;
            users_list[i].role = role;
            return true;
        }
    }
    return false;
}


function removeUser(email: string): boolean {
    for (let i: number = 0; i < users_list.length; i++) {
        if (users_list[i].email === email) {
            users_list.splice(i, 1);
            return true;
        }
    }
    return false;
}