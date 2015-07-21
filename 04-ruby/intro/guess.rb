require 'pry'


# guessing game

# guess my age haha

age = 62 # number

binding.pry

puts "guess my age"
user_guess = gets.chomp.to_i # inputs are strings

binding.pry

while user_guess != age

  puts 'guess again'
  user_guess = gets.chomp.to_i

end

puts 'wow how did you know'