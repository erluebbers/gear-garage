class Packlist < ApplicationRecord
  belongs_to :trip
  belongs_to :user
  belongs_to :item

end
