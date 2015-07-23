require 'pry'
require_relative 'person'

File.open('database.txt', 'a+') do |file|

  print "Input person and save to a file (y/n)"
  response = gets.chomp.downcase

  while response == 'y'

    print "Enter name, age, gender: "
    # response = gets.chomp
    file.puts(gets.chomp)

    print "Input person and save to a file (y/n)"
    response = gets.chomp.downcase
  end

end

people = []

File.open('database.txt', 'r') do |file|

  file.each do |line|
    data = line.split(',')
    person = Person.new(data[0], data[1], data[2])
    people << person
  end

end

binding.pry