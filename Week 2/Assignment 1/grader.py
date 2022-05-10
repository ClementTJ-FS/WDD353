class Grader:
  #constructor, sets variable based on input
  def __init__(self): 
    self.student = input("Enter Student Name: ")
    self.assignment = input("Enter Assignment: ")
    self.grade = self.getGrade()

  #function to get the grade, validate, and convert to letter.
  def getGrade(self):
    #loop to get correct input
    while True:
      try: 
        grade = float(input("Enter Score: "))
      except ValueError:
        #not a number, loop again
        print("Please only enter a number score.")
        continue
      if grade < 0 or grade > 100:
        #number out of bounds, loop again
        print("Please only enter a score between 0 and 100")
        continue
      else:
        #input correct, exit loop
        break
    
    #letter grade var
    letterGrade = "A"

    #sets lettergrade based on score.
    if grade < 60:
      letterGrade = "F"
    elif grade < 70:
      letterGrade = "D"
    elif grade < 80:
      letterGrade = "C"
    elif grade < 90:
      letterGrade = "B"

    return letterGrade

  #function to output result.
  def outputGrade(self):
      print("\n- Student Name: " + self.student + "\n- Assignment: " + self.assignment + "\n- Grade: " + self.grade) 

#create object
grader1 = Grader()
#output 
grader1.outputGrade()