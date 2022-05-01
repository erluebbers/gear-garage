class Item < ApplicationRecord
  belongs_to :user
  has_many :packlists
  has_many :trips, through: :packlists

  validates :condition, presence: true, numericality: { in: 1..5 }
  validates :name, presence: true
  validates :description, presence: true
end
