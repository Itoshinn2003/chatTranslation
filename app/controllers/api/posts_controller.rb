class Api::PostsController < ApplicationController

    def index

    end

    def create
        @post = Post.new(text: params[:postData], user_id: params[:id])

        unless @post.save
            p @post.errors.full_messages
            render json: { error: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def self_post
        current_user = User.select(:id, :user_id, :name).find(params[:id])
        render json: { current_user: current_user, self_posts: current_user.posts.select(:created_at, :text).order(id: "DESC") }
    end

    
end
