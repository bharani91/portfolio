class User < ActiveRecord::Base
  authenticates_with_sorcery!
  
  validates :username, :email, :password, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { in: 6..20 }
  validates_confirmation_of :password
end
