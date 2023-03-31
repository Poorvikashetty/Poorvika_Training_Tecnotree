#Tic-Tac-Toe Game: Develop a simple two-player game of Tic-Tac-Toe using Python. You can use a 2D list or a dictionary to represent the game board and allow players to take turns making moves.
def print_board(board):
    print(board['top-left'] + '|' + board['top-center'] + '|' + board['top-right'])
    print('-+-+-')
    print(board['middle-left'] + '|' + board['middle-center'] + '|' + board['middle-right'])
    print('-+-+-')
    print(board['bottom-left'] + '|' + board['bottom-center'] + '|' + board['bottom-right'])

def check_win(board):
    # Check for horizontal wins
    if board['top-left'] == board['top-center'] == board['top-right'] != ' ':
        return True
    elif board['middle-left'] == board['middle-center'] == board['middle-right'] != ' ':
        return True
    elif board['bottom-left'] == board['bottom-center'] == board['bottom-right'] != ' ':
        return True

    # Check for vertical wins
    elif board['top-left'] == board['middle-left'] == board['bottom-left'] != ' ':
        return True
    elif board['top-center'] == board['middle-center'] == board['bottom-center'] != ' ':
        return True
    elif board['top-right'] == board['middle-right'] == board['bottom-right'] != ' ':
        return True

    # Check for diagonal wins
    elif board['top-left'] == board['middle-center'] == board['bottom-right'] != ' ':
        return True
    elif board['top-right'] == board['middle-center'] == board['bottom-left'] != ' ':
        return True

    # No win
    else:
        return False

def get_move(player, board):
    valid_moves = ['top-left', 'top-center', 'top-right', 'middle-left', 'middle-center', 'middle-right', 'bottom-left', 'bottom-center', 'bottom-right']
    move = input(f"{player}'s turn:\nEnter the position (top/middle/bottom)-(left/center/right): ")
    while move not in valid_moves or board[move] != ' ':
        print('Invalid move. Please try again.')
        move = input(f"{player}'s turn:\nEnter the position (top/middle/bottom)-(left/center/right): ")
    return move

def main():
    board = {'top-left': ' ', 'top-center': ' ', 'top-right': ' ',
             'middle-left': ' ', 'middle-center': ' ', 'middle-right': ' ',
             'bottom-left': ' ', 'bottom-center': ' ', 'bottom-right': ' '}
    print_board(board)
    player1 = 'X'
    player2 = 'O'
    current_player = player1
    game_over = False
    while not game_over:
        move = get_move(current_player, board)
        board[move] = current_player
        print_board(board)
        if check_win(board):
            print(f'{current_player} wins!')
            game_over = True
        elif all(value != ' ' for value in board.values()):
            print('Tie!')
            game_over = True
        else:
            # Switch to the other player for the next turn
            if current_player == player1:
                current_player = player2
            else:
                current_player = player1

if __name__ == '__main__':
    main()
