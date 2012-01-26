class SessionsController < ApplicationController
  def home
    #redirect_to admin_projects_path and return if logged_in?
  end
  
  def new
    #render login page
  end

  def create
    user = login(params[:username], params[:password], params[:remember])
      if user
        redirect_to admin_dashboard_path, notice: "Login successful"
      else
        flash.now.alert = "Login Failed! Please check your username and password."
        render action: "new"
      end
    
  end

  def destroy
    logout
    redirect_to root_url, notice: "Logged out"
  end

end
