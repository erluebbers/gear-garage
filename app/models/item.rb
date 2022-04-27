class Item < ApplicationRecord
  belongs_to :user
  has_many :packlists
  has_many :trips, through: :packlists

  validates :condition, numericality: { in: 1..5 }
end
