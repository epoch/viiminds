

class Scrabble

  # 2 types of methods !!!!
  # instacne methods
  # class methods

  def self.lookup(letter)  
    hash = {
      'a' => 1,
      'b' => 3,
      'c' => 3
    }
    hash[letter]
  end

  def self.score(word)
  end

end


# s = Scrabble.new

# s.lookup('a')

# Scrabble.new.score('cabbage')
Scrabble.score('cabbage')