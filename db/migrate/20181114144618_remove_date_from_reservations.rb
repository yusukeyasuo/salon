class RemoveDateFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :date, :integer
    remove_column :reservations, :time, :integer
  end
end
