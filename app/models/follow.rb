class Follow < ApplicationRecord
  belongs_to :user, class_name: 'User', foreign_key: 'follow'
  # belongs_to :user, class_name: 'User', foreign_key: 'follower'

  # belongs_toしてもuserメソッドnilになる
end
