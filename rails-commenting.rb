# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The class BlogPostsController is where the controller methods are stored. Its primary purpose is to store the logic for controller actions, which are called in the routes file. Given that all of the below methods use instance variables instead of regular variables, the intent for the methods would likely be to both interact with the database and also render information on web pages. If they were regular variables, you would probably only use them for backend development.
class BlogPostsController < ApplicationController
  def index
    # ---2) Below is logic for the index method. With this logic, you would be able to display all instances of BlogPost, presumably on a website. 
    @posts = BlogPost.all
  end

  def show
    # ---3) Below is logic for the show method. You could use this logic to display specific instances based on the given id params. This would be displayed on a separate page.
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is a method for new. It would be used to create a form (on a separate web URL), which the user could fill out for creating a specific instance. This method would require a create action in order to actually create a new post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Below is logic for the create method. Using data stored in a new webpage, it would interact with the database to create a new blog post instance. If the user has correctly filled out the form and there are no issues, the user will be redirected to the home page. If not, the user will remain on the new form page.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) This is a method for edit. Like new, it would be used to create a form (again on a separate URL), which would be used to edit an existing instance. This information would be held for the update method to use.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Below is logic for the update method. The purpose of it would be to take information from the edit form, and perform an edit action on the existing instance. If the user correctly filled out this info, they would be redirected to the blog post instance. If not, they would remain on the edit form page.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) This code would redirect the user to the blog post itself, in the event that the destroy method was not successful in deleting the instance.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) The private keyword will encapsulate the method blog_post_params within the class BlogPostsController, preventing logic outside of the class from calling it directly.
  private
  def blog_post_params
    # ---10) params.require().permit() will restrict the user to only interacting with the specified model and columns.
    params.require(:blog_post).permit(:title, :content)
  end
end
