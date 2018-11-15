class AddNameKanaToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :name_kana, :string
  end
end
