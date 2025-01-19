class Api::PostsController < ApplicationController

    def index
        unless params[:id].nil?
            @posts = Post.includes(:user).where(user_id: params[:id]).order(id: "DESC")
        else 
            @posts = Post.includes(:user).order(id: "DESC")
        end
        render json: { posts: @posts.as_json(
            only: %i[created_at text],
            include: { user: { only: %i[id name user_id] }}
        ) }
    end

    def create
        @post = Post.new(text: params[:postData], user_id: params[:id])

        if @post.save
            render json: { message: "success" }, status: :created
        else 
            render json: { error: @post.errors.full_messages }, status: :unprocessable_entity
        end
    end

    
    def self_post
        self_posts = Post.includes(:user).where(user_id: params[:id]).order(id: "DESC")
        render json: { posts: self_posts.as_json(include: [:user]) }
    end
    
end
