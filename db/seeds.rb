# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

[
  { id: 1, menu: 'cut' },
  { id: 2, menu: 'perm' },
  { id: 3, menu: 'color' }
].each do |menu|
  unless Menu.find_by(id: menu[:id])
  Menu.create(menu)
  end
end

[
  { details: "カット", price: 3000, menu_id: 1 },
  { details: "前髪カット", price: 500, menu_id: 1 },
  { details: "キッズカット", price: 2000, menu_id: 1 },
  { details: "ポイントパーマ", price: 1500, menu_id: 2 },
  { details: "パーマ", price: 4000, menu_id: 2 },
  { details: "縮毛強制", price: 6000, menu_id: 2 },
  { details: "カラー", price: 5000, menu_id: 3 },
  { details: "ポイントカラー", price: 2000, menu_id: 3 },
  { details: "メッシュ", price: 5000, menu_id: 3 }
].each do |menu_content|
  unless MenuContent.find_by(menu_id: menu_content[:menu_id], details: menu_content[:details])
    MenuContent.create(menu_content)
  end
end
