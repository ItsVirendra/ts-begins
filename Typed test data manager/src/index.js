// run the application
import { addUser, getActiveUsers, getUserByEmail, updateUser, disableUser } from "./services/userManager.js";
const activeUsersList = getActiveUsers();
console.log("List of Active Users:");
if (activeUsersList && activeUsersList.length > 0) {
    for (let i = 0; i < activeUsersList.length; i++) {
        const users = activeUsersList[i];
        console.log(users && "\n " + users.name);
    }
}
console.log("Add User:");
const result = addUser("thetest@gmail.com", "sean paul", "guest");
if (result) {
    console.log("User added successfully.");
}
else {
    console.log("Failed to add user.");
}
console.log("Find User");
const findUser = getUserByEmail("viru.test@gmail.com");
if (findUser) {
    console.log("Found user:");
    console.log("ID - " + findUser.id + ", User Name - " + findUser.name + ", Role - " + findUser.role);
}
else {
    console.log("No user found related to viru.test@gmail.com");
}
const updateResult = updateUser("thetest@gmail.com", "user", "sean paul");
if (updateResult) {
    console.log("User updated successfully");
}
else {
    console.log("Failed to update the user.");
}
if (disableUser("thetest@gmail.com")) {
    console.log("User disabled successfully.");
}
else {
    console.log("Failed to disable the user.");
}
//# sourceMappingURL=index.js.map