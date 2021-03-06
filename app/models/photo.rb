class Photo < ActiveRecord::Base
  has_attached_file :image,
    :styles => { :small => "230x375#" },
    :storage => :s3,
    :bucket => 'bharani_portfolio',
    :s3_credentials => {
      :access_key_id => ENV['S3_KEY'],
      :secret_access_key => ENV['S3_SECRET']
    },
    :path => ":id/:style/:filename"
       
  belongs_to :project
  
  validates_attachment_presence :image                    
  validates_attachment_size :image, :less_than=> 400.kilobyte
  
end
