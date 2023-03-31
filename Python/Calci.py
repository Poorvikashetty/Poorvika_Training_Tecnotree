# Function to add two numbers
#Calculator: Build a simple calculator that allows users to perform basic arithmetic operations like addition, subtraction, multiplication, and division. You can use Python's input() function to take user input and print() function to display the result.
def add(x, y):
    return x + y

# Function to subtract two numbers
def subtract(x, y):
    return x - y

# Function to multiply two numbers
def multiply(x, y):
    return x * y

# Function to divide two numbers
def divide(x, y):
    return x / y

# Main program loop
while True:
    # Display menu options
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")

    # Get user choice
    choice = input("Enter choice (1/2/3/4): ")

    # Get user inputs
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))

    # Perform selected operation
    if choice == '1':
        result = add(num1, num2)
    elif choice == '2':
        result = subtract(num1, num2)
    elif choice == '3':
        result = multiply(num1, num2)
    elif choice == '4':
        result = divide(num1, num2)
    else:
        print("Invalid choice!")
        continue

    # Print result
    print(f"Result: {result}\n")
