class Project < ActiveRecord::Base
  has_many :photos, dependent: :destroy
  accepts_nested_attributes_for :photos, :allow_destroy => true
  
  acts_as_taggable_on :tags
  
  validates :title, :description, presence: true
  validates :title, uniqueness: true
  
  def to_param
     "#{id}-#{title.gsub(/[^a-z0-9]+/i, '-')}"
  end
  
end
