class Trip < ApplicationRecord
  belongs_to :user
  has_many :packlists
  has_many :items, through: :packlists
end
