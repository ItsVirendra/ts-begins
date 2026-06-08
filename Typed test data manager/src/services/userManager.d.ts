import type { User } from "../types/user.types.js";
export declare function addUser(emailId: string, name: string, role: string): boolean;
export declare function getUserByEmail(emailInput: string): User | undefined;
export declare function getActiveUsers(): User[];
export declare function updateUser(email: string, role: string, name: string): boolean;
export declare function removeUser(email: string): boolean;
export declare function disableUser(email: string): boolean;
//# sourceMappingURL=userManager.d.ts.map