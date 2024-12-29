class Api::UsersController < ApplicationController

    def create
        # @user = User.new(params)
        name = params[:name]
        user_id = params[:user_id]
        password = params[:password]
        language = params[:language]
        @user = User.new(name: name, user_id: user_id, password: password, language: language)
        @user.save
        p "UUUSERRR#{@user}"
        render json: {
            a: "a"
        }
    end

end
