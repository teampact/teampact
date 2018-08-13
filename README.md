# Teampact

Teampact is social platform for coworking spaces that helps residents to socialize and find new collaborations. 

## Development

Tech stack: Ruby 2.5, Ruby on Rails 5.2, PostgreSQL 10, Node 10  

Prepare development environment:

    make prepare # install dependencies
    bundle exec rake db:create
    bundle exec rake db:migrate
    gem install foreman
    
Run development services:
    
    make dev

Open [http://localhost:3200/](http://localhost:3200/) in your browser.
