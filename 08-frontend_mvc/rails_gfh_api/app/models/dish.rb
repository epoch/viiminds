class Dish < ActiveRecord::Base
  has_many :stars

  def star_count
    stars.count
  end

end
