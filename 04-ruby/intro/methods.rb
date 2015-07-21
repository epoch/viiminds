

def defuse_bomb
  puts 'remove cover'
  puts 'first cut the red wire'
  puts 'then cut the blue wire'
end

defuse_bomb

area = 3 * 4

area = 10 * 4

def area(length, width)
  return length * width
end

puts(area 10, 4)


def do_something(time_left, length, width)
  if time_left > 60
    puts 'remove the cover'
    puts 'first cut the red wire'
    puts 'then cut the blue wire'
  else
    puts 'run'
  end

  return 'game over'

  length * width # never happen
end

do_something(12, 3, 4)


def h1(body)
  return "<h1>#{body}</h1>"
end


puts(h1("methods are awesome"))
puts h1 "methods are awesome"
