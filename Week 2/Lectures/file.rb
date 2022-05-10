# File Operations with Ruby


# Ruby is extremely similar in syntax compare to JavaScript. Don't forget tough Ruby is a server-side language, meaning that it doesn't run on the browser like JavaScript. It runs on the server. You do not have specify a variable type.

# a = "Joe";
# b = 1.5;
# puts a; //print or puts is used to output the information on the screen.
# Try converting a simple function.
# function myFunction(){
#   alert("test");
# }
# def myFunction()
#   print("Test")
# end #ending tags are required in Ruby.
# Ruby lists are also written just like JavaScript

# myList = [1,"Apples"]
# puts myList[0]
# #prints out 1
# for i in myList do
#   puts i
# end
# This is what Ruby conditionals look like

# x = 5
# if x > 2
#   puts "x is greater than 2"
# elsif x <= 2 and x!=0
#   puts "x is 1"
# else
#   puts "Don't know"
# end
# Little bit of OOP with Ruby

# class Dog
#   def initialize()
#     @age=24 #@this is an instance variable
# end
# def getAge
#     return @age
# end
# end
# myDog = Dog.new
# print(myDog.getAge())
# Let's parse a file with Ruby and add some logic to make it useful. You can get into the Ruby command line by typing

# >>irb
# and then start writing code. Exit the command line by

# exit()
# or create a file with the extension "myfile.rb". Get this file executing by typing

# >>ruby myfile.rb

# read each line
# f = File.readlines("file.txt")

#read whole file , split at space
# f = File.read("file.txt").split(" ")

#read each line, output to console
# f.each{|line| puts line}

#write to file
# File.write("file2.txt", "Hey there.")

#get input from console
puts "What's your name? ";
name = gets

puts "What is your age? ";
age = gets

puts "Hey "+ name + " your age is "+age