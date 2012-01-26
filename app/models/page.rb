class Page < ActiveRecord::Base
  validates :title, :content, presence: true
  validates :title, uniqueness: true
  acts_as_taggable_on :tags
  def to_param
      "#{id}-#{title.gsub(/[^a-z0-9]+/i, '-')}"
  end
   
end
