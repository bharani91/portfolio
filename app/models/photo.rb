class Photo < ActiveRecord::Base
  has_attached_file :image,
    :style => { :small => "230x375#", :large => "800x600#" },
    :storage => :s3,
    :bucket => 'bharani_portfolio',
    :s3_credentials => {
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET']
    }
       
  belongs_to :project
  
  validates_attachment_presence :image                    
  validates_attachment_size :image, :less_than=> 400.kilobyte
  
end
