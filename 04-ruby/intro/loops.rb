puts "this is bottle number 1"
puts "this is bottle number 2"
puts "this is bottle number 3"


number = 0

while number < 5
  
  puts "this is bottle " + number.to_s
  number = number + 1
  # number += 1

end

number = 0

until number > 5
  puts "this is bottle #{number}" # intepolation
  number += 1
end


while !bank_account.empty?
  puts 'party on'
end

until bank_account.empty?
  puts 'party on'
end


3.times do
  puts "beetlejuice"
end

dumplings_devoured = 0

begin
  puts "eat dumpling"
  dumplings_devoured += 1
end while dumplings_devoured < 50


1.upto(3) do
  puts 'beetlejuice'
end

3.downto(0) do
  puts 'beetlejuice'
end
