class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string "name"
      t.string "description"
      t.integer "condition"
      t.integer "user_id"

      t.timestamps
    end
  end
end
