class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow: params[:id], follower: params[:opponentId])
        if @follow.save
            render json: { message: "success" }, status: :created
        else
            render json: { errors: @follow.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @follow = Follow.find_by(follow: params[:id], follower: params[:opponentId])
        @follow.destroy
        render json: { message: "success" }, status: :ok
    end
end
