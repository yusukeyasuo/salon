class AddTellToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :tel, :string
  end
end
