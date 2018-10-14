class SalonsController < ApplicationController
  def index
    @menus = Menu.all() 
    @cut = MenuContent.where(menu_id: 1)
    @perm = MenuContent.where(menu_id: 2)
    @color = MenuContent.where(menu_id: 3)
  end
end
