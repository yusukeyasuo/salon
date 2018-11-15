class RemoveTellFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :tel, :integer
  end
end
