#To-Do List App: Create a command-line application that allows users to create, read, update, and delete to-do list items. You can use Python's built-in input() function to take user input and store data in a text file or a database.
# Define an empty dictionary to store the to-do list items
todo_list = {}

# Define a function to add a new item to the to-do list
def add_item():
    item = input("Enter the task to be completed: ")
    todo_list[item] = False
    print("Item added.")

# Define a function to display the current to-do list
def display_list():
    print("To-Do List:")
    for item, status in todo_list.items():
        if status:
            print("[x] " + item)
        else:
            print("[ ] " + item)

# Define a function to mark an item as completed
def mark_completed():
    item = input("Enter task to mark as completed: ")
    if item in todo_list:
        todo_list[item] = True
        print("Item marked as completed.")
    else:
        print("Item not found.")

# Define a function to delete an item from the to-do list
def delete_item():
    item = input("Enter task to delete: ")
    if item in todo_list:
        del todo_list[item]
        print("task deleted.")
    else:
        print("task not found.")

# Define a function to display the menu and handle user input
def main():
    while True:
        print("\nMenu:")
        print("1. Add a new task")
        print("2. Display the to-do list")
        print("3. Mark task as completed")
        print("4. Delete task")
        print("5. Quit")
        choice = input("Enter your choice: ")
        if choice == "1":
            add_item()
        elif choice == "2":
            display_list()
        elif choice == "3":
            mark_completed()
        elif choice == "4":
            delete_item()
        elif choice == "5":
            print("Goodbye!")
            break
        else:
            print("Invalid choice.")

# Run the main function
main()
