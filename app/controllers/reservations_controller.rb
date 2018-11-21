# frozen_string_literal: true

class ReservationsController < ApplicationController
  def index
    @menus = Menu.all
    @cut = MenuContent.where(menu_id: 1)
    @perm = MenuContent.where(menu_id: 2)
    @color = MenuContent.where(menu_id: 3)
    @mon = params[:month]
    @day = params[:day]
    #予約済み時間
    reserved_time = []
    #予約時間
    reservation_time_default = [
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30"
    ]
    if @mon && @day
      #検索する年月日
      search_date = Time.new.year.to_s + "-" + @mon.to_s + "-" + @day.to_s
      #search_dateを元にその年月日の予約を取り出す
      @reservation = Reservation.select('start_time').where(start_time: search_date.in_time_zone.all_day)
      #予約済みの時間を取り出す
      @reservation.each do |r|
      reserved_time << r.start_time.hour.to_s + ":" + r.start_time.min.to_s
      end
      #予約済み時間を引く
      reservation_time = reservation_time_default - reserved_time
      render :json => {time: reservation_time}
    end
  end

  def create
    @month = params[:month]
    @day = params[:day]
    @time = params[:time]
    @menu = MenuContent.all
    @reservations = Reservation.new
  end

  def add
    params[:reservation][:menu] = params[:reservation][:menu].join(',')
    # render plain: params[:reservation].inspect
    @reservations = Reservation.new(strong_params)
    if @reservations.save
      redirect_to reservations_path
    else
      # render：viewを明示的に指定
      render 'index'
    end
  end

  private

  def strong_params
    params.require(:reservation).permit(:name, :menu, :start_time, :end_time, :name_kana, :tel)
  end
end
