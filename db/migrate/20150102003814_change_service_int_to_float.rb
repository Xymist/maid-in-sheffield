class ChangeServiceIntToFloat < ActiveRecord::Migration
  def change
      change_column :services, :number,  :float
  end
end
