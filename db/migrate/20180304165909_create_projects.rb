class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :type_1
      t.string :type_2
      t.text :description
      t.string :state

      t.timestamps
    end
  end
end
