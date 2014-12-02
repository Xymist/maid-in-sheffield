class CreateServices < ActiveRecord::Migration
  def change
    create_table :services do |t|
      t.string :name
      t.string :bronze
      t.string :silver
      t.string :gold

      t.timestamps
    end
  end
end
