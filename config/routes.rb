Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "pages#index"
  resources :projects
  get 'home', to: "pages#home"
  get 'dashboard', to: "users#show"
end
