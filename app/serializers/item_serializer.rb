class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :condition
  belongs_to :user
end
