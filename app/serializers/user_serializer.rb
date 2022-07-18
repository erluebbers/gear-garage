class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :residence, :trips, :items
  has_many :items
  has_many :trips
  has_many :packlists
end
