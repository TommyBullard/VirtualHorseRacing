import random

def playerNames(numOfPlayers):
    playerNameArray = []
    for i in range(1, numOfPlayers + 1):
        playerName = input(f"Enter the name of player {i}: ")
        playerNameArray.append(playerName)

def winner(numOfPlayers):
    #Function to generate the winner
    ranNum = random.randint(1, numOfPlayers)
    return ranNum

def how_many():
    #Function to ask the user how many players are playing:
    numOfPlayers = int(input("How many players are playing? "))
    return numOfPlayers

numOfPlayers = how_many()
listOfNames = playerNames(numOfPlayers)
raceWinner = print(winner(numOfPlayers))

for i in range(1, len(listOfNames)):
    print(f"Player {i} is {listOfNames[i-1]}")