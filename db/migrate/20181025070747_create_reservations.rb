class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string :name
      t.integer :date
      t.integer :time
      t.string :menu

      t.timestamps
    end
  end
end
