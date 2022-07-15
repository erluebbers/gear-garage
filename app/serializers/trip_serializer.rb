class TripSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :trip_description, :user_id
  belongs_to :user
  has_many :packlists
  has_many :items, through: :packlists
end
