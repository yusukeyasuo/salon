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
    @reservations = Reservation.new
  end

  def add
    #render plain: params[:reservation][:name1].inspect
    params[:reservation][:menu] = params[:reservation][:menu].join(",")
    @reservations = Reservation.new(strong_params)
    if @reservations.save
      redirect_to reservations_path
    else
      #render：viewを明示的に指定
      render "index"
    end
  end

  private
    def strong_params
      #いらないかも？
      params.require(:reservation).permit(:name, :name1, :tel, :menu, :datetime)
    end

end
