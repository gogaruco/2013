# gogaruco.com 2013

This is the source branch for the 2013 edition of the official [GoGaRuCo](http://gogaruco.com/) website.

## Viewing the site on your computer

```
git clone https://github.com/gogaruco/gogaruco.github.com
cd gogaruco.github.com
git co 2013
cd . # Sets correct Ruby version and gemset if you have RVM installed
gem install bundler --no-ri --no-rdoc
bundle
bundle exec middleman server
```

Now browse to [http://localhost:4567](http://localhost:4567)

## Making changes

1. Make your edits in the `source` folder

2. Review your changes in a browser

      bundle exec middleman server
  
  	Now browse to [http://localhost:4567](http://localhost:4567)

3. Rebuild the static HTML/CSS

    	bundle exec middleman build --clean

  	This generates static HTML and CSS in the `build` directory. IMPORTANT: Don't edit files in the `build` directory, its contents are blown away when the site is rebuilt.
  
4. Publish the changes in `build` to the live site
    
    	bundle exec middleman deploy --clean
  
  	Eventually, this will publish what's in `build` to the live website by automatically comitting to the `master` branch. For now it will attempt to publish to the `gh-pages` branch of your `staging` remote. I've set mine up to point to the git repo for [http://hiremaga.github.io/gogaruco-staging/](http://hiremaga.github.io/gogaruco-staging/).
