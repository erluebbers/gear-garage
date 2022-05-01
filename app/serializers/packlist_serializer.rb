class PacklistSerializer < ActiveModel::Serializer
  attributes :id, :trip_id, :item_id
  belongs_to :trip
  belongs_to :user
  belongs_to :item
end
