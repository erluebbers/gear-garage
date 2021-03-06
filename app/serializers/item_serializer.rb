class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :condition, :trips
  belongs_to :user
  has_many :packlists
  has_many :trips, through: :packlists
end
