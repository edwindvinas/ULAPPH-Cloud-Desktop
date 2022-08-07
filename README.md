**ULAPPH Cloud Desktop** is an open-source webtop or web-based desktop written in Golang which can be installed in your local laptop, cloud server, docker container, Kubernetes, serverless like Cloud Run or even Android via Termux! It is an AI-powered and full-featured frontend and backend architecture aimed to provide users with rich experience to increase productivity and provide common user experience.

![ULAPPH Cloud Desktop](https://storage.googleapis.com/ulapph-demo.appspot.com/public/ULAPPH%20-%20Barbecue%20Version.PNG "ULAPPH Architecture")

Too Long; Dont Read (TL;DR)
----------------
- Watch the latest demo video here https://www.youtube.com/embed/VL-9y36O4Lg
- ULAPPH was developed using Go or Golang programming language and JS/HTML/CSS codes
- ULAPPH could run inside Docker Desktop, Android Termux, Linux machine, Windows 10 machine or in Google Appegine Standard, Google Cloud Run or Kubernetes
- The goal of this system is to provide a Windows-like or MacOS-like desktop interface while providing productivity tools and integrations

Versions
--------------
ULAPPH versioning is based on famous Filipino dishes.
https://en.wikipedia.org/wiki/List_of_Philippine_dishes

- Version 2019: "Adobo" - Appengine version
- Version 2020: "Afridata" - Dockerized, Platform-agnostic version with AI using IBM Watson
```
                            - Artificial Intelligence (AI) NLP from IBM Watson
                            - Custom IBM Watson Orchestrator
```
- Version 2021: *Version not released due to COVID-19 Pandemic*
- Version 2022: "Barbecue" - Added more AI use cases and improved productivity features:
```
                            - Default & Custom Search Engines
                            - Multiple desktop support
                            - Programmable Javascript startup
                            - Chat with AI...
                            - Desktop News Reader
                            - Sticky Notes Per Desktop
```
- Version 2022-2: "Bopis" - Upcoming version with planned features:
```
                            - TBD
```

Watch Demo Videos in Youtube!
-----------
https://www.youtube.com/channel/UCfmBlIM8pbOs3Vaq1lTZ22Q

Features
--------------
**ULAPPH Cloud Desktop** is a web application with backend that runs anywhere and with frontend that runs in any browser such as Chrome, Opera and Firefox! But, it works perfectly with Chrome! 
- It has built-in Javascript windowing system which displays contents in **Windows** inside desktops.  
- It can be configured to contain **unlimited number of desktops** so you can organize your work, your personal, business and any information such as desktop for your cats cctv images or a desktop for your documents.
- - It can be programmed to run **Javascript startup file** so you can automate things!
- It can automatically generate contents into **slides**, **articles**, and **media** including support for MP3, MP4, OGG, OGV, etc.
- It saves data in the cloud which means it is safe & available **anytime & anywhere**. 
- It works in laptops, desktops, Android/IOS devices as long as they have **Chrome, Opera or Firefox browsers**
- No installation required except the X-Frame-Ignore extension and Cross Origin **extension** neeed for Chrome browsers.
- No third party software or apps needed to be installed.
- It works anywhere in Google Cloud Platform specifically AppEngine standard, Cloud Run and Google Kubernetes Engine. Given that, it should work on all cloud platforms as well since it supports Docker containers!
- Tested to work in my Android device using Android Termux! Should also work in any smartphone w/ Termux!
 
ULAPPH Architecture
----------------

![ULAPPH Architecture](https://storage.googleapis.com/ulapph-demo.appspot.com/public/ULAPPH%20Cloud%20Desktop%20System%20-%20Barbecue%20-%202022-01-15.png "ULAPPH Architecture")

Installation Dependencies for AI Support
------------------
The installation of ULAPPH requires or may need the dependencies such as IBM Watson AI workspaces, configuration files, data folder (for local install), shell installer script, and custom Otto javascript codes for serving the conversational chatbots. Yes, the install is quite complicated as it looks but once you have everything setup in your machine, installation is as easy as executing one shell script since it automates a lot of things.
``
drwxr-xr-x 1 edwin.d.vinas 1049089     0 Apr 26 00:23 ULAPPH-Cloud-Desktop/
drwxr-xr-x 1 edwin.d.vinas 1049089     0 Apr  4 20:11 ULAPPH-Cloud-Desktop-AI/
drwxr-xr-x 1 edwin.d.vinas 1049089     0 Apr  4 20:11 ULAPPH-Cloud-Desktop-Configs/
drwxr-xr-x 1 edwin.d.vinas 1049089     0 Apr 18 22:30 ULAPPH-Cloud-Desktop-Data/
drwxr-xr-x 1 edwin.d.vinas 1049089     0 Apr 19 23:46 ULAPPH-Cloud-Desktop-Shell-Installer/
drwxr-xr-x 1 edwin.d.vinas 1049089     0 Apr 21 18:05 ULAPPH-Cloud-Desktop-Watson/
``


Platforms Supported
------------------
- Windows 10 laptop (tested and it worked!)
- Android using Termux (tested and it worked!)
- Google Appengine Standard (tested and it worked!)
- Google Cloud Run (tested and it worked!)
- Google Kubernetes Engine (tested and it worked!)
- AWS Cloud (pending testing)
- Microsoft Azure (pending testing)
- IBM Bluemix (pending testing)
- Alibaba Cloud (pending testing)

ULAPPH is built from opensources!
----------------
- Edwin D. Vinas (Golang/JS/HTML/CSS)
- Christine T. Cunanan (UI/Testing/ContentManagement)
- (In memory of) Rammel D. Vinas (CorelDraw/Photoshop/Graphics)
- Our seven indoor Khao Manee Cats and a lot of outdoor homeless/adopted cats!
- Google Search, Wikipedia, StackOverflow, Reddit, W3Schools and all resources with code samples!
- Alessio Atzeni -- Developer of Mac OSX desktop UI (http://www.alessioatzeni.com/mac-osx-lion-css3/)
- ed_g2s of Sourceforge -- Developer of Javascript Windowing system used (http://jswm.sourceforge.net)
- And all the developers of other free/opensource libraries integrated with ULAPPH (see **Golang Libraries** section below)

Sample Uses of ULAPPH
----------------
### www.ulapph.com
- https://www.ulapph.com
    - A private demo website of ULAPPH Cloud Desktop. Latest code is always deployed here.
    - Running in Google Cloud's AppEngine standard environment with Go 1.13 runtime
    - Integrated with Google Cloud's IAP proxy & Google Oauth as part of authentication
    - Contains working version of Artificial Intelligence (AI) Natural Language Processing (NLP) using IBM Watson
    - Access to the site is limited to the admin only

### demo.ulapph.com - TBD
- https://demo.ulapph.com
    - A free publicly accessible demo website of ULAPPH Cloud Desktop. Latest code may not be always deployed here.
    - Access to the site may not be always available due to free quota account only.

### Virtual Agent - TBD
- https://va.ulapph.com
    - Inside each ULAPPH installation is a virtual agent or a group of chatbots which can be programmed using IBM Watson Assistant and Javascript codes residing in Google Cloud Storage
    - It uses custom chatbot orchestrator which makes it possible to develop business logic and different use cases

### ULAPPH News Stream Channel
- https://www.youtube.com/channel/UCKgcONV17i0yRW4t3ogla2w/videos
    - A news stream automatically generated from ULAPPH Cloud Desktop.
    - If you have no time to browse different news channels, you can let ULAPPH read the news for you!


Installation & Troubleshooting
----------------
Please see README below for the detailed installation and troubleshooting guide.
- https://github.com/edwindvinas/ULAPPH-Cloud-Desktop/blob/master/README_INSTALLATION.md

Change History
----------------
- EDV - 1/15/2022 - Created change history; updated README
- EDV - 2/1/2022 - Created README for installation

Golang Libraries
----------------
```
    import (
        "net"
        "html/template"
        "net/http"
        "path"
        "path/filepath"
        "encoding/base64"
        "encoding/json"
        "net/url"
        "math/rand"
        "regexp"
        "unicode"
        "unicode/utf8"
        "time"
        "bytes"
        "fmt"
        "strings"
        "strconv"
        "bufio"
        "io/ioutil"
        "io"
        "log"
        "errors"
        "cloud.google.com/go/datastore"
        mailjet "github.com/mailjet/mailjet-apiv3-go"
        "google.golang.org/appengine/search"
        "google.golang.org/appengine/runtime"
        "cloud.google.com/go/storage"
        "github.com/edwindvinas/user_agent"
        "github.com/edwindvinas/go-humanize"
        "github.com/edwindvinas/html"
        "google.golang.org/api/googleapi/transport"
        "flag"
        "google.golang.org/api/youtube/v3"
        "golang.org/x/net/context"
        "crypto/aes"
        "crypto/cipher"
        crand "crypto/rand"
        "mime/multipart"
        "github.com/edwindvinas/html2text"
        "github.com/edwindvinas/percent"
        "github.com/edwindvinas/jsonq"
        "sort"
        "github.com/edwindvinas/firego.v1"
        "golang.org/x/oauth2/google"
        "crypto/rsa"
        "github.com/edwindvinas/jwt-go"
        "github.com/edwindvinas/goquery"
        "github.com/edwindvinas/sentences.v1/english"
        "golang.org/x/oauth2"
        "github.com/google/go-github/github"
        "github.com/edwindvinas/bleve"
        "github.com/edwindvinas/sprig"
        "encoding/binary"
        "os"
        "github.com/edwindvinas/sillyname-go"
        "github.com/edwindvinas/otto"
        "github.com/edwindvinas/xlsx"
        "reflect"
        "github.com/edwindvinas/nlp"
        "github.com/edwindvinas/goml/text"
        "github.com/edwindvinas/perceptive"
        "image"
        "github.com/edwindvinas/prose.v2"
        "github.com/edwindvinas/closestmatch"
        "github.com/edwindvinas/xurls"
        "cloud.google.com/go/compute/metadata"
        "github.com/satori/go.uuid"
        "github.com/patrickmn/go-cache"
        cloudtasks "cloud.google.com/go/cloudtasks/apiv2"
        taskspb "google.golang.org/genproto/googleapis/cloud/tasks/v2"
        "github.com/IBM/go-sdk-core/core"
        "github.com/watson-developer-cloud/go-sdk/assistantv2"
        "github.com/edwindvinas/openweathermap"
        "github.com/edwindvinas/ytdl"
        "google.golang.org/api/iterator"
        "github.com/tdewolff/minify/v2"
        "github.com/tdewolff/minify/v2/css"
        mhtml "github.com/tdewolff/minify/v2/html"
        "github.com/tdewolff/minify/v2/js"
        mjson "github.com/tdewolff/minify/v2/json"
        "github.com/tdewolff/minify/v2/svg"
        "github.com/tdewolff/minify/v2/xml"
        "github.com/boltdb/bolt"
        "github.com/go-redis/redis/v7"
    )
```