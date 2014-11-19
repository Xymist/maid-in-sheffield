class CreateHomes < ActiveRecord::Migration
  def change
    create_table :homes do |t|
      t.string :size
      t.integer :bronze_price
      t.integer :silver_price
      t.integer :gold_price

      t.timestamps
    end
  end
end
