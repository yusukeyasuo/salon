class ReservationsController < ApplicationController
  def index
    @menus = Menu.all() 
    @cut = MenuContent.where(menu_id: 1)
    @perm = MenuContent.where(menu_id: 2)
    @color = MenuContent.where(menu_id: 3)
  end

  def create
    @month = params[:month]
    @day = params[:day] 
    @time = params[:time]
    @menu = MenuContent.all()
  end
end
