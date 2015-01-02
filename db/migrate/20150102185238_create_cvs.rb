class CreateCvs < ActiveRecord::Migration
    def change
        if ActiveRecord::Base.connection.table_exists? 'cvs'
            add_column :cvs, :cv_uid, :string
            add_column :cvs, :name, :string
        else
            create_table :cvs do |t|
                t.string :cv_uid
                t.string :name

                t.timestamps
            end
        end
    end
end