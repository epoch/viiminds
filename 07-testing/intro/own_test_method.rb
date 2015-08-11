# take an array as argument
# multiply the numbers in the array
# return the integer product of nums

# if Calculator.multiply([2,3,4]) == 24
#   puts "this method works"
# else
#   puts "method failed"
# end


# our viiminds testing framework

def test(msg, expected, actual)
  if expected == actual
    puts "pass!! #{msg}"
  else
    puts "fail!! #{msg}"
  end
end

test "product of 2,3,4 is 24", 24, Calculator.multiply([2,3,4])
test "product of 0,5 should be 0", 0, Calculator.multiply([0,5])
test "pass in empty array should return 0", 0, Calculator.multiply([])

