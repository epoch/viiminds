require 'pry'

fish1 = {
  name: 'fishy fish',
  health: 100,
  speed: 5
}

shark = {
  name: 'sharky shark',
  health: 5000,
  speed: 20
}

ocean_world = []
ocean_world << fish1 << shark

def move_fish(fish)
  # move the fish
end

def move_shark(shark)
  # more shark
end

def move_octupus(octupus)
end

class Fish

  # constructor method()
  def initialize(name, health, speed)
    @name = name # instance variable
    @health = health
    @speed = speed
  end

  def sleep
    puts "sleeping"
  end

  def change_name(new_name)
    @name = new_name
  end

end

# fish2 = Fish.new # creating a new fish object

binding.pry