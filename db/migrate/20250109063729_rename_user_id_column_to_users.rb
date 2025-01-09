class RenameUserIdColumnToUsers < ActiveRecord::Migration[7.1]
  def change
    rename_column :users, :user_id, :profile_id
  end
end
