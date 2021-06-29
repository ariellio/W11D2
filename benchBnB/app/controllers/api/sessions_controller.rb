class Api::SessionsController < ApplicationController
    def create
    end

    def destroy
        if logged_out
            render {}
        else
            render 'no current user'
        end
    end
end