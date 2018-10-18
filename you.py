def wordsin():
    word = input("What word are you looking at? ").lower()
    for i in f:
        if len(i) >= 3 and i in word and i != word:
            print("You can't spell " + word + " without " + i)
        else:
            pass


def scrabble():
    letters = input("what letters do you have? ").replace(' ', '').replace(',', '')
    while True:
        type = input("Can letters be used more that once? ").lower()
        if type == "yes" or type == "no":
            break
    for x in f:
        useable = letters
        Testing = True
        for y in x:
            if y not in useable:
                Testing = False
                break
            if type == "no":
                useable = useable.replace(y, '', 1)
        if Testing and len(x) > 1:
            print(x)


f = open("words_alpha.txt").read().lower().split("\n")
scrabble()
