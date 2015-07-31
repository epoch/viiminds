class PostsController < ApplicationController

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find params[:id]
  end

  def new
    @post = Post.new
  end

  def create
    @posts = Post.new
    @posts.title = params[:title]
    @posts.save
    redirect_to '/'
  end

  def edit
    @post = Post.find params[:id]
  end

  def update
    @post = Post.find params[:id]
    @post.title = params[:title]
    @post.save
    redirect_to '/posts'
  end

  def destroy
    @post = Post.find params[:id]
    @post.destroy
    redirect_to '/posts'
  end

end