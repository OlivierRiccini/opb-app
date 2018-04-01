class AddStateToMessage < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :state, :boolean, :default => false
  end
end
