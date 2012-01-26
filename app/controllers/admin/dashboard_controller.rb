class Admin::DashboardController < ApplicationController
  before_filter :require_login
  layout "admin"
  
  def index
    @projects = Project.order("created_at DESC").limit(5).paginate(page: params[:products_page], per_page: 1)
    @messages = Message.order("created_at DESC").limit(5).paginate(page: params[:messages_page], per_page: 1)
    @blog_posts = Page.where(:blog_post => true).order("created_at DESC").limit(10).paginate(page: params[:blog_page], per_page:1)
  
    @projects_count = Project.all.count
    @messages_count = Message.all.count
    @posts_count = Page.where(:blog_post => true).count
  end

end
