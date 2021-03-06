class DishesController < ApplicationController

  def index
    dishes = Dish.all
    render json: dishes, methods: :star_count, status: 200
  end

  def create
    dish = Dish.new(dish_params)
    if dish.save
      render json: dish.to_json, status: 201
    else
      render json: { message: 'not ok'}.to_json, status: 422
    end
  end

  # making dish_params a private method is a good pattern
  private 

  def dish_params
    params.require(:dish).permit(:name, :image_url)
  end

end