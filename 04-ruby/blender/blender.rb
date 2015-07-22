


class Blender

  def initialize
    @off = true 
  end

  def turn_on
    @off = false
  end

  def turn_off
    @off = true
  end

  def toggle
    @off = !@off
  end

  def blend(ingredients)
    if @off 
      "blurps"
    else   
      ingredients.keys.join.gsub(' ','').split('').shuffle.join
    end    
  end

end