class Message < ActiveRecord::Base
  validates :name, :email, :subject, :message, presence: true
  validates :website, format: { with: /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/i, 
                                message: "url is not valid.", 
                                allow_blank: true}
  validates :email, format: { with: /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i,
                              message: "address is not formatted properly"}

end
