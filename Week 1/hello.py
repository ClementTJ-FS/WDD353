import sys

#output
print("Hello World");

#input
name = input("What is your name?");
print("Your name is " +name);

#output to file
textfile = open("pythonOut.txt", "w");
textfile.write("Last updated by " + name);
textfile.close();

#read from file
textFileR = open("pythonOut.txt", "r");
print(textFileR.read());
textFileR.close();