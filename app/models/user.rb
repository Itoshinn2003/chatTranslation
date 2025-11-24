class User < ApplicationRecord

    has_many :posts
    has_many :follows, class_name: 'Follow', foreign_key: 'follow'
    validates :name, presence: true
    validates :user_id, presence: true, uniqueness: true, length: { maximum: 20 }
    validates :password, presence: true, length: { minimum: 8, maximum: 20 }, format: { with: /\A[a-zA-Z0-9]+\z/ }
    validates :language, presence: true
end
