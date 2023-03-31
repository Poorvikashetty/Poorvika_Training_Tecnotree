#Demo Example of file handling in Python that demonstrates how to open a file, read its contents, and write to it:

# Opening a file
#file = open('demo1.txt', 'r')

# Reading from a file
#content = file.read()
#print(content)

# Closing a file
#file.close()

# Writing to a file
with open('demo2.txt', 'a') as file:
    file.write('\nThis is a new line added to the file.')

# Reading from a file again
with open('demo2.txt', 'r') as file:
    content = file.read()
    print(content)
