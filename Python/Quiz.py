#Quiz Game: Build a quiz game that allows users to answer multiple-choice questions and keeps track of their score. You can use a predefined set of questions and answers and store them in a text file or a database.
import random

# Define a list of questions and answers
questions = [
    {
        "question": "What does the acronym HTML stand for?",
        "answers": ["Hyper Text Markup Language", "High Traffic Management Language", "Heavy Text Management Language", "Hyperloop Transportation Management Language"],
        "correct_answer": "Hyper Text Markup Language"
    },
    {
        "question": "What does the acronym CSS stand for?",
        "answers": ["Cascading Style Sheets", "Content Style Sheets", "Code Style Sheets", "Control Style Sheets"],
        "correct_answer": "Cascading Style Sheets"
    },
    {
        "question": "What does the acronym API stand for?",
        "answers": ["Application Programming Interface", "Application Process Integration", "Application Platform Interface", "Application Performance Index"],
        "correct_answer": "Application Programming Interface"
    },
    {
        "question": "What is the name of the programming language used to create the iOS mobile operating system?",
        "answers": ["Swift", "Java", "Python", "Objective-C"],
        "correct_answer": "Objective-C"
    },
    {
        "question": "What is the name of the programming language used to create the Android mobile operating system?",
        "answers": ["Java", "Swift", "Python", "Objective-C"],
        "correct_answer": "Java"
    }
]

# Define a function to ask a random question from the list
def ask_question():
    # Choose a random question from the list
    question = random.choice(questions)

    # Print the question
    print(question["question"])
    
    # Print the possible answers
    for i, answer in enumerate(question["answers"]):
        print(f"{i+1}. {answer}")
    
    # Ask the user to enter their answer
    user_answer = input("Enter your answer (1-4): ")

    # Check if the user's answer is correct
    if question["answers"][int(user_answer)-1] == question["correct_answer"]:
        print("Correct!")
        return 1
    else:
        print("Incorrect.")
        return 0

# Define the main function to run the quiz game
def main():
    # Initialize the score to zero
    score = 0
    
    # Ask 5 questions and update the score
    for i in range(5):
        print(f"Question {i+1}:")
        score += ask_question()
        print()

    # Print the final score
    print(f"You got {score} out of 5 questions correct.")

# Call the main function to start the quiz game
if __name__ == "__main__":
    main()
