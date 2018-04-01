class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :from_email_address
      t.string :from_tel
      t.string :subject
      t.text :message

      t.timestamps
    end
  end
end
