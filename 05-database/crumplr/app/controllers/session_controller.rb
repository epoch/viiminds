class SessionController < ApplicationController

  def new
  end

  def create
    # params[:email] params[:password]

    # find the user with the email passed in
    # user = User.where(email: params[:email]).first
    user = User.find_by(email: params[:email])

    if user && user.authenticate(params[:password])
      # win - login user
      session[:user_id] = user.id
      redirect_to '/posts'
    else
      # fail life
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end

end