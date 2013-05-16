# gogaruco.com 2013

This is the source branch for the 2013 edition of the official [GoGaRuCo](http://gogaruco.com/) website.

## Viewing the site on your computer

```
git clone https://github.com/gogaruco/gogaruco.github.com
cd gogaruco.github.com
git co 2013
cd . # Set's correct Ruby version and gemset if you have RVM installed
gem install bundler --no-ri --no-rdoc
bundle
bundle exec middleman server
```

Now browse to [http://localhost:4567](http://localhost:4567)

## Making changes

1. Get everybody else's most recent changes.

    bundle exec middleman server
    
2. Make your edits in the `source` folder

3. View your changes in a browser

        bundle exec middleman server

    Now browse to [http://localhost:4567](http://localhost:4567)

4. Don't forget to commit & push when you're done!

        git commit -m 'Make everything better'
        git push origin 2013

## Publishing changes

1. Rebuild the static HTML/CSS

        bundle exec middleman build --clean

    This generates static HTML and CSS into the `build` directory. IMPORTANT: Don't 
    hand edit these files, these edits will get blown away the next the site is rebuilt.
  
2. Deploy the changes in `build` to the live site
    
        bundle exec middleman deploy --clean
  
      Eventually, this will publish what's in `build` to the live website by 
      automatically comitting to the `master` branch. For now it will attempt 
      to publish to the `gh-pages` branch of your `staging` remote. Abhi has set 
      his up to point at the git repo for [http://hiremaga.github.io/gogaruco-staging/](http//hiremaga.github.io/gogaruco-staging/).
      
      If Abhi has made you a collaborator on his staging repo you can also do the same thing:
      
        git remote add -f staging https://github.com/hiremaga/gogaruco-staging
        bundle exec middleman deploy --clean
      
      Browse to [http://hiremaga.github.io/gogaruco-staging](http://hiremaga.github.io/gogaruco-staging) to view the published website.
