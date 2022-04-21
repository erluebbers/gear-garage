class Item < ApplicationRecord
  belongs_to :user

  validates :condition, numericality: { in: 1..5 }
end
