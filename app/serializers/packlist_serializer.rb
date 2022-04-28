class PacklistSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :trip
  belongs_to :user
  belongs_to :item
end
