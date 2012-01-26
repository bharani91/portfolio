class RenameColumnMessageInMessages < ActiveRecord::Migration
  def up
    rename_column :messages, :messsage, :message
  end

  def down
    rename_column :messages, :message, :messsage
  end
end
