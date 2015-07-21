if 2 + 2 == 5
  puts 'the world has gone mad'
end


if ((2 * 2) == 5)
  puts 'the world has gone mad'
else
  puts 'nothing new here, back to work'
end

person = 'matty'

if person != 'wally'
  puts "where's wally"
end

puts "where's wally" unless person == 'wally'
puts "where's wally" if person != 'wally'

# switch / case

grade = 'B'

case grade
when "A", "B"
  puts "well done, you massive nerd"
when "C"
  puts "pick it up"
else
  puts "too bad"
end

if grade == 'A' || grade == 'B'
  puts 'well done, you massive nerd'
elsif grade == 'C'
  puts 'pick it up'
else
  puts 'too bad'
end


