class TripSerializer < ActiveModel::Serializer
  attributes :id, :year, :trip_description, :title
  belongs_to :user
  has_many :packlists
  has_many :items, through: :packlists
end