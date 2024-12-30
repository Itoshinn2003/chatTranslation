class Api::UsersController < ApplicationController

    def create
        name = params[:name]
        user_id = params[:user_id]
        password = params[:password]
        language = params[:language]
        @user = User.new(name: name, user_id: user_id, password: password, language: language)
        if @user.save
            render json: { user: @user }, status: :created
        else
            p @user.errors.full_messages
            render json: { error: @user.errors.full_messages }, status: :unprocessable_entity
        end
    end

end
