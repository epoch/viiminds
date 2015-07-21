require 'pry'

# new syntax JSON
song1 = {
  title: 'Hello',
  artist: 'Lionel Richie',
  released: 1983
}


# original hash syntax of ruby
song2 = {
  :title => "Nothing's gonna change my love for you",
  :artist => 'Glen Medeiros',
  :released => 1986
}

song3 = {
  'title' => 'a whole new world',
  'artist' => 'disney',
  'released' => 1992
}

classics = [song1, song2, song3]

binding.pry


song4 = {
  0 => 'hello',
  1 => 'world',
  2 => 'yay'
}

song4[0]