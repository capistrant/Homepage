# Homepage
My basic personal webpage.

I wanted an excuse to do some basic static webpage design/development, and this
seemeed like a logical project since I don't already have a personal page.

Page is currently live at: [ljcapistrant.com](https://ljcapistrant.com)

# Running locally

Simple setup to develop and view static pages locally. I'm using an Alpine
httpd2 Docker image with a bind mount to the root of site in order to
allow dynamic reflection of edits in the browser. I'm sure there is a
better way to accomplish what I am going for, but this seemed like a low
resistance path to getting what I need for now.

After executing the following commands, you should be able to view inex.html by
navigating to localhost:8080 in the browser.

```
## I'm assuming that you're running these commands from the repository root ##
docker build -t mysite:latest .
docker run --rm --mount type=bind,source="$(pwd)"/root,target=/usr/local/apache2/htdocs --name mySite -p 8080:80 -dit mysite:latest

## When you want to stop the container ##
docker stop mySite
```

# Misc

* Favicon background color: `#0096ff`
* Source for fadeing text on homepage: http://jsfiddle.net/jfriend00/n4mKw/
* Bootstrap 4.1 docs: https://getbootstrap.com/docs/4.1/getting-started/introduction/
