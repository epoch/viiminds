json.array!(@dishes) do |dish|
  json.extract! dish, :id, :title, :image_url
  json.url dish_url(dish, format: :json)
end
