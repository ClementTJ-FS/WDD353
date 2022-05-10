class Grader
  # constructor, sets values on run
  def initialize()
    puts "Enter Student Name: "
    @student = gets
    puts "Enter Assignment: "
    @assignment = gets
    @grade = getGrade()
  end

  # function to output data
  def outputGrade
    return "\nStudent Name: "+ @student +"Assignment: "+ @assignment +"Grade: "+@grade
  end

  #function to get the score, validate and convert to letter. 
  def getGrade
    puts "Enter Score: "
    #gets score as float, if not float, sets to false.
    score = Float(gets) rescue false

    #loop for valid input, if not false, or between 0 and 100
    while !score or score > 100 or score < 0 do
      puts "Please only enter a number between 0 and 100."
      puts "Enter Score: "
      score = Float(gets) rescue false
    end

    # convert to letter
    letterGrade = "A"
    if score < 60
      letterGrade = "F"
    elsif score < 70
      letterGrade = "D"
    elsif score < 80
      letterGrade = "C"
    elsif score < 90
      letterGrade = "B"
    end
    return letterGrade
  end
end

#instantiate, call output function
g = Grader.new
print(g.outputGrade())






