class StarsController < ApplicationController


  def create
    star = Star.new
    star.dish_id = params[:dish_id]
    if star.save
      render json: { star_count: star.dish.star_count }.to_json
    else
      render json: { message: 'cannot save'}.to_json
    end
  end

end