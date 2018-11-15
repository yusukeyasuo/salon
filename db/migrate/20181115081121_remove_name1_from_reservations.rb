class RemoveName1FromReservations < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :name1, :string
  end
end
