class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string "title"
      t.string "trip_description"
      t.integer "user_id"
      t.integer "year"
      t.timestamps
    end
  end
end
