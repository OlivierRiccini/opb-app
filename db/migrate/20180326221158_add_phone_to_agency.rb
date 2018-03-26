class AddPhoneToAgency < ActiveRecord::Migration[5.1]
  def change
    add_column :agencies, :phone, :string
  end
end
