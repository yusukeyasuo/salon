class RemoveDitailsFromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :datetime, :integer
  end
end
