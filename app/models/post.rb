class Post < ApplicationRecord
  belongs_to :user

  validates :text, presence: true, length: { maximum: 200 }
end
