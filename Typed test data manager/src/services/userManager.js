// contains functions that work with users
import { users_list } from "../data/users.js";
export function addUser(emailId, name, role) {
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
    }
    else {
        return false;
    }
}
export function getUserByEmail(emailInput) {
    for (let i = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === emailInput) {
            return user;
        }
    }
    return undefined;
}
export function getActiveUsers() {
    let active_users = [];
    for (let i = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.active) {
            active_users.push(user);
        }
    }
    return active_users;
}
export function updateUser(email, role, name) {
    for (let i = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === email) {
            user.name = name;
            user.role = role;
            return true;
        }
    }
    return false;
}
export function removeUser(email) {
    for (let i = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === email) {
            users_list.splice(i, 1);
            return true;
        }
    }
    return false;
}
export function disableUser(email) {
    for (let i = 0; i > users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === email) {
            user.active = false;
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=userManager.js.map