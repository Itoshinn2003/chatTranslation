class Api::FollowsController < ApplicationController

    def create
        @follow = Follow.new(follow: params[:id], follower: params[:opponentId])
        if @follow.save
            render json: { message: "success" }, status: :created
        else
            render json: { errors: @follow.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def delete

    end
end
