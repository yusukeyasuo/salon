class ReservationsController < ApplicationController
  def index
    @menus = Menu.all() 
    @cut = MenuContent.where(menu_id: 1)
    @perm = MenuContent.where(menu_id: 2)
    @color = MenuContent.where(menu_id: 3)
    @reservation = Reservation.select("start_time")
    @mon = params[:month]
  end

  def create
    @month = params[:month]
    @day = params[:day] 
    @time = params[:time]
    @menu = MenuContent.all()
    @reservations = Reservation.new
  end

  def add
    params[:reservation][:menu] = params[:reservation][:menu].join(",")
    #render plain: params[:reservation].inspect
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
      params.require(:reservation).permit(:name, :menu, :start_time, :end_time, :name_kana, :tel)
    end

end
