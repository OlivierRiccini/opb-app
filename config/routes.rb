Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "pages#index"
  get 'dashboard', to: "users#show"
  resources :projects do
    resources :images
  end
  resources :agencies, only: [ :edit, :update, :destroy ]
  resources :messages
end
