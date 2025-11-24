class Api::SessionsController < ApplicationController
    def create 
        user_id = params[:user_id]
        password = params[:password]
        @user = User.find_by(user_id: user_id, password: password)
        unless @user.nil?
            render json: { user: @user }, status: :created
        else
            render json: { error: 'Invalid user ID or password' }, status: :unauthorized
        end
    end
end
