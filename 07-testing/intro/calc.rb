class Calculator

  def self.multiply(list)

    if list.empty?
      return 0
    else
      return list.reduce(:*)
    end
    # product = 1

    # list.each do |elem|
    #   product *= elem
    # end

    # return product
  end

end





