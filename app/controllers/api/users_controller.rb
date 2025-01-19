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

    def current_user
        current_user = User.select(:user_id, :name, :language, :sentence).find(params[:id])
        render json: { current_user: current_user }, status: :created
    end

    def update
        current_user = User.find(params[:id]) 
        current_user.update(name: params[:name], sentence: params[:sentence])
        render json: { current_user: current_user }
    end

    def show
        user = User.includes(:posts).find(params[:id])
        p "ユーザ#{user.name}"
        p user.attributes 
        render json: { user: user.as_json(
            only: %i[id user_id name  sentence],
            include: { posts: { only: %i[created_at text] }}
        ) }
    end

end
