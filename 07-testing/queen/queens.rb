class Queens

  def initialize(positions = {})
    @white = positions[:white] || [0,3]
    @black = positions[:black] || [7,3]

    if @white[0] == @black[0]
      raise ArgumentError
    end
  end

  def white
    @white
  end

  def black
    @black
  end
end
