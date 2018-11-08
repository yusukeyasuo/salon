Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :reservations
  post "reserved", to: "reserved#add"
  root "reservations#index"
end
