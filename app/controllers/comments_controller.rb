class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.js {
          render :create
        }
        format.html {
          redirect_to crimes_index_path
        }
      end
    else
      render :js => 'alert("Comment must be at least 1 character")', :status => :forbidden
    end
  end
  def destroy
      @comment = Comment.find(params[:id])
    if @comment.present?
      @comment.destroy
    end
    redirect_to root_url
end 

  private
  def comment_params
    params.require(:comment).permit(:content)
  end
end
