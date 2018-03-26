class AddEmaiToAgency < ActiveRecord::Migration[5.1]
  def change
    add_column :agencies, :email, :string
  end
end
