FROM ruby:2.2.4
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev postgresql-client nodejs
ENV RAILS_ROOT /var/www/maid-in-sheffield
RUN mkdir -p $RAILS_ROOT/tmp/pids
WORKDIR $RAILS_ROOT
COPY Gemfile Gemfile
COPY Gemfile.lock Gemfile.lock
RUN gem install bundler
RUN bundle install
COPY . .

CMD rake assets:precompile && bundle exec unicorn -c config/containers/unicorn.rb -E production
