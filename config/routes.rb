Rails.application.routes.draw do
   
  devise_for :admins, controllers: { sessions: 'admins/sessions'}
  devise_for :users, controllers: { sessions: 'users/sessions', :registrations => 'users/registrations' }

  devise_scope :user do
      get 'sign_in', to: 'users/sessions#new'
      get 'join_us', to: 'users/registrations#new'
  end

  resources :homes
  resources :services
  resources :users
  resources :admins
  resources :cvs, only: [:new, :create, :index]

  root 'site#index'
  
  get 'contact', to: 'contact#new'
  post 'contact', to: 'contact#create'

  get '/upload_cv' => 'cvs#new'
  get '/about_us' => 'site#about_us'
  get '/booking_form' => 'site#booking_form'
  post '/booking_form' => 'site#booking_form'
  get '/client_login' => 'site#client_login'
  get '/faq' => 'site#faq'
  get '/price_grid' => 'site#price_grid'
  get '/privacy_policy' => 'site#privacy_policy'
  get '/student_pack' => 'site#student_pack'
  get '/testimonials' => 'site#testimonials'
  get '/tos' => 'site#tos'
  get '/gift_cards' => 'site#gift_cards'
  get '/prices' => 'site#prices'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
