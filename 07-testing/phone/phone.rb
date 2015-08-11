class Phone

  def initialize(num)
    @num = clean(num)
  end

  def number
    @num
  end

  def clean(num)
    num.gsub(/[\(\)\s-\.]/, '')
  end

end