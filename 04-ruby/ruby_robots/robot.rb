

class Robot

  def initialize
    @intructions = 0
    @name = "#{prefix}#{suffix}"
  end

  def reset
    @intructions += 1
    @name = "#{prefix}#{suffix}"    
  end

  def instruction_count
    @intructions
  end

  def name
    @intructions += 1
    @name
    # mic
    #(rand(90 - 65) + 65).chr
    # hugh
    #('A'..'Z').to_a[rand(26)]
     # return keyword is optional
  end

  def prefix
    ('AA'..'ZZ').to_a.sample
  end

  def suffix
    ('000'..'999').to_a.sample
  end




end