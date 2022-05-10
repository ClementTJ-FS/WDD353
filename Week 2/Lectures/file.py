# # File Operations with Python

# # Python is object oriented and you don't need to declare variables or define types before using them.
# a = "Joe";
# b = 1;
# print(a); # print is used to output the information on the screen.
# # Python is written very similar to JavaScript, try converting a simple function.

# # function myFunction(){
# #   alert("test");
# # }
# def myFunction():
#   print("Test")

# # Python lists are also written just like JavaScript
# myList = [1,"Apples"]
# print(myList[0])
# #prints out 1,"Apples"
# for x in mylist:
#   print(x)

# # This is what Python conditionals look like
# name = "John"
# if name in ["John", "Rick"]:
#   print("Your name is either John or Rick.")

# # Little bit of OOP with Python
# class Dog:
#   def __init__(self): #this is a constructor
#     age=24
#   def getAge(self): #this is a method
#     return self.age
# myDog = Dog()
# print(myDog.getAge())

# # You can get into the python command line by typing
# # >>python
# # and then start writing code. Exit the command line by

# exit()
# # or create a file with the extension "myfile.py". Get this file executing by typing

# # >>python myfile.py

import sys;

# #input
name = input("What is your name? ");
# #output
# print(name + str(3));

# write
fileObj = open("file.txt", "w");
fileObj.write("Hello from "+name);
fileObj.close();

#read
f = open("file.txt");
print(f.read());
f.close();


