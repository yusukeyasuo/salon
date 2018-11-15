class AddDetailsToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :name1, :string
    add_column :reservations, :tel, :integer
    add_column :reservations, :datetime, :integer
  end
end
