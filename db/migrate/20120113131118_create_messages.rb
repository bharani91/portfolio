class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :name
      t.string :email
      t.string :website
      t.string :subject
      t.text :messsage

      t.timestamps
    end
  end
end
