class Photo < ActiveRecord::Base
  has_attached_file :image
       
  belongs_to :project
  
  validates_attachment_presence :image                    
  validates_attachment_size :image, :less_than=> 400.kilobyte
  
end
