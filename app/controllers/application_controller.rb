class ApplicationController < ActionController::Base
  protect_from_forgery
  
  def not_authenticated
     redirect_to login_url, notice: "Please login to access your account."
   end
end
