class AddTelToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :tel, :integer
  end
end
