class User < ApplicationRecord
  has_secure_password
  has_many :items
  has_many :trips
  has_many :packlists

  validates :username, presence: true, uniqueness: true
  
end
