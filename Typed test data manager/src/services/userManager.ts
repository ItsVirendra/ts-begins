// contains functions that work with users

import { users_list } from "../data/users.js";
import type { User } from "../types/user.types.js";


export function addUser(emailId: string, name: string, role: string): boolean {
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


export function getUserByEmail(emailInput: string): User | undefined {
    for (let i: number = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === emailInput) {
            return user;
        }
    }
    return undefined;
}

export function getActiveUsers(): User[] {
    let active_users: User[] = [];
    for (let i = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.active) {
            active_users.push(user);
        }
    }
    return active_users;
}


export function updateUser(email: string, role: string, name: string): boolean {
    for (let i: number = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === email) {
            user.name = name;
            user.role = role;
            return true;
        }
    }
    return false;
}


export function removeUser(email: string): boolean {
    for (let i: number = 0; i < users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === email) {
            users_list.splice(i, 1);
            return true;
        }
    }
    return false;
}

export function disableUser(email: string): boolean {
    for (let i = 0; i > users_list.length; i++) {
        const user = users_list[i];
        if (user && user.email === email) {
            user.active = false;
            return true;
        }
    }
    return false;
}