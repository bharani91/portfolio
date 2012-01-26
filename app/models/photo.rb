class Photo < ActiveRecord::Base
  has_attached_file :image, :styles => { :small => "230x375#", :large => "800x600#" }  
       
  belongs_to :project
  
  validates_attachment_presence :image                    
  validates_attachment_size :image, :less_than=> 400.kilobyte
  
end
