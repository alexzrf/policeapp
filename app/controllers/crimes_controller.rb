class CrimesController < ApplicationController
  
  def index
    
  end

def stats
    url = "http://data.police.uk/api/crimes-street/all-crime?lat=#{params[:lat]}&lng=#{params[:lng]}"
    #render :json => File.read('spec/examples/street_crime.json')
    render :json => HTTParty.get(url)
  end
  end
