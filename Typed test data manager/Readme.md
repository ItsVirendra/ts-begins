# Title
Create a small TypeScript utility that manages test users for automation tests.

# Task Requirements

### Build a simple in-memory “Test User Manager”.

You must support:

1. Create a Type for User

	Each user should contain:

		id
		name
		email
		role
		active

	Example roles:

		admin
		tester
		viewer

	Use proper TypeScript typing.

2. Create an Array to Store Users

	Start with at least 3 sample users.

3. Create These Functions
	- addUser(user)
	- Adds a new user
	- Prevent duplicate email
	- getUserByEmail(email)
	- Returns matching user
	- Return undefined if not found
	- getActiveUsers()
	- Returns only active users
	- deactivateUser(email)
	- Marks user as inactive

4. Console Output

	At the bottom of the file:

	Add one user
	Deactivate one user

	Print:
		all users
		active users
		searched user

	Use meaningful console logs.