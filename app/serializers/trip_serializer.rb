class TripSerializer < ActiveModel::Serializer
  attributes :id, :year, :trip_description, :user_id
  belongs_to :user
  has_many :packlists
  has_many :items, through: :packlists
end
