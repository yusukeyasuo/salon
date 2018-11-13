Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :reservations
  post "reservations_add", to: "reservations#add"
  root "reservations#index"
end
