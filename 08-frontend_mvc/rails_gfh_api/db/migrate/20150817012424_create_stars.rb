class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.references :dish, index: true

      t.timestamps null: false
    end
    add_foreign_key :stars, :dishes
  end
end
