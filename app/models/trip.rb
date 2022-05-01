class Trip < ApplicationRecord
  belongs_to :user
  has_many :packlists
  has_many :items, through: :packlists

  validates :title, presence: true, length: { minimum: 5 }
  validates :trip_description, presence: true, length: { minimum: 5 }
  validates :year, presence: true, numericality: { only_integer: true }

end
