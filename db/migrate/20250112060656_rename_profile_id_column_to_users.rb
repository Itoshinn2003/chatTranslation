class RenameProfileIdColumnToUsers < ActiveRecord::Migration[7.1]
  def change
    rename_column :users, :profile_id, :user_id
  end
end
