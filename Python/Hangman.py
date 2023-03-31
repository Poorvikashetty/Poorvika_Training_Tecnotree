#Hangman Game: Develop a text-based game where the user must guess a secret word by guessing one letter at a time. You can use a predefined list of words and randomly select one of them using Python's random module.
import random

# Define a list of words to choose from
word_list = word_list = ["puzzle", "jazz", "jogging", "juice", "quilt", "flamingo", "ostrich"]

# Choose a random word from the list
word = random.choice(word_list)

# Define the maximum number of guesses
max_guesses = 6

# Initialize the list of guessed letters to empty
guessed_letters = []

# Define a function to update the guessed letters and print the current state of the word
def update_word():
    # Iterate over the letters in the word
    for letter in word:
        if letter in guessed_letters:
            # If the letter has been guessed, print it
            print(letter, end=' ')
        else:
            # If the letter has not been guessed, print a dash
            print('_', end=' ')
    print()

# Print the initial state of the word
update_word()

# Loop until the user either guesses the word or runs out of guesses
while True:
    # Ask the user to guess a letter
    guess = input("Guess a letter: ")

    # Check if the guess is in the word
    if guess in word:
        print("Correct!")
        guessed_letters.append(guess)
    else:
        print("Incorrect!")
        max_guesses -= 1

    # Print the current state of the word and the number of remaining guesses
    update_word()
    print(f"{max_guesses} guesses remaining")

    # Check if the user has won or lost
    if set(guessed_letters) == set(word):
        print("Congratulations, you guessed the word!")
        break
    elif max_guesses == 0:
        print("Sorry, you ran out of guesses.")
        break
