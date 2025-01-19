class CreateFollows < ActiveRecord::Migration[7.1]
  def change
    create_table :follows do |t|
      t.bigint :follow, null: false
      t.bigint :follower, null: false

      t.timestamps
    end
    add_foreign_key :follows, :users, column: :follow
    add_foreign_key :follows, :users, column: :follower
  end
end
