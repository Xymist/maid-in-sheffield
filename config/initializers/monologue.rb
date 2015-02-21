Monologue.config do |config|
    config.site_name = "Maid In Sheffield"
    config.site_subtitle = "Finest Home Cleaning in Sheffield"
    config.site_url = "https://maidinsheffield.co.uk"

    config.meta_description = "The Blog of Sheffield's Premier Cleaning Company"
    config.meta_keyword = "home cleaning, cleaning, sheffield, yorkshire, maid"

    config.admin_force_ssl = false
    config.posts_per_page = 10

    config.disqus_shortname = "my_disqus_shortname"

    # LOCALE
    config.twitter_locale = "en"
    config.facebook_like_locale = "en_US"
    config.google_plusone_locale = "en"

    config.layout               = "layouts/monologue/application"

    config.sidebar = ["latest_posts", "latest_tweets", "categories", "tag_cloud"]


    #SOCIAL
    config.twitter_username = "myhandle"
    config.facebook_url = "https://www.facebook.com/myhandle"
    config.facebook_logo = 'logo.png'
    config.google_plus_account_url = "https://plus.google.com/u/1/.../posts"
    config.linkedin_url = "http://www.linkedin.com/in/myhandle"
    config.github_username = "myhandle"
    config.show_rss_icon = true

end