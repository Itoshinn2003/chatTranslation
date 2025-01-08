class Api::PostsController < ApplicationController

    def index

    end

    def self_post
        current_user = User.select(:id, :user_id, :name).find(params[:id])
        render json: { current_user: current_user, self_posts: current_user.posts.select(:created_at, :text) }
    end
end
