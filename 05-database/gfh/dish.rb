# for activerecord to map to table dishes
class Dish < ActiveRecord::Base
  belongs_to :dish_type
end