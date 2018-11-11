# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Menu.create(id: 1, menu: "cut")
Menu.create(id: 2, menu: "perm")
Menu.create(id: 3, menu: "color")
MenuContent.create(details: "カット", price: 3000, menu_id: 1)
MenuContent.create(details: "前髪カット", price: 500, menu_id: 1)
MenuContent.create(details: "キッズカット", price: 2000, menu_id: 1)
MenuContent.create(details: "ポイントパーマ", price: 1500, menu_id: 2)
MenuContent.create(details: "パーマ", price: 4000, menu_id: 2)
MenuContent.create(details: "縮毛強制", price: 6000, menu_id: 2)
MenuContent.create(details: "カラー", price: 5000, menu_id: 3)
MenuContent.create(details: "ポイントカラー", price: 2000, menu_id: 3)
MenuContent.create(details: "メッシュ", price: 5000, menu_id: 3)
