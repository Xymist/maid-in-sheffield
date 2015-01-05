class CvsController < ApplicationController
    def index
        @cvs = Cv.all
    end

    def new
        @cv = Cv.new
    end

    def create
        @cv = Cv.new(cv_params)
        if @cv.save
            flash[:success] = 'CV saved!'
            redirect_to edit_user_registration_path
        else
            render 'new'
        end
    end

    private

    def cv_params
        params.require(:cv).permit(:cv, :name)
    end
end
