class CreateMenuContents < ActiveRecord::Migration[5.2]
  def change
    create_table :menu_contents do |t|
      t.string :details
      t.integer :price
      t.references :menu, foreign_key: true

      t.timestamps
    end
  end
end
