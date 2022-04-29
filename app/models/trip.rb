class Trip < ApplicationRecord
  belongs_to :user
  has_many :packlists
  has_many :items, through: :packlists

  validates :title, presence: true
  validates :trip_description, presence: true
  validates :year, presence: true
  validates :year, numericality: { only_integer: true }
end
