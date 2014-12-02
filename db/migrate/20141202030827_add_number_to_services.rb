class AddNumberToServices < ActiveRecord::Migration
  def change
    add_column :services, :number, :integer
  end
end
