



<!DOCTYPE html>
<html lang="en" class=" is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-92708af6226921bfe9823b6a92b8e3311112cd9af8a9222c89398167cf9108d5.css" integrity="sha256-knCK9iJpIb/pgjtqkrjjMRESzZr4qSIsiTmBZ8+RCNU=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-21f8759fbb61e32add47042d2c73f9650a65b4cc6d9c01ccada4d44d61c2de55.css" integrity="sha256-Ifh1n7th4yrdRwQtLHP5ZQpltMxtnAHMraTUTWHC3lU=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>rainbow/rainbow.js at master · ccampbell/rainbow</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/259316?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="ccampbell/rainbow" name="twitter:title" /><meta content="rainbow - Simple syntax highlighting library written in javascript" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/259316?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="ccampbell/rainbow" property="og:title" /><meta content="https://github.com/ccampbell/rainbow" property="og:url" /><meta content="rainbow - Simple syntax highlighting library written in javascript" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTQ0Mzg2OTk1OjFjYWI4ZjYyNmVjZGVmNjc5OTVmM2IyNDAwZTM0NDAyN2M1MjUwZjgzNDIxZGIxMmEwZGRlZDU1OTY5OGIyMDA=--d33d62afd9912693948cf152274c21c5a7e76a90">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="CBD779E2:1D96:311192B:586CEF65" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="CBD779E2:1D96:311192B:586CEF65" name="octolytics-dimension-request_id" /><meta content="7032875" name="octolytics-actor-id" /><meta content="edwindvinas" name="octolytics-actor-login" /><meta content="252a8220c94feb9cd7b72a380208d49a9cdb80b53cd8d2d9cdcfdbddbdee0e0a" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="edwindvinas">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="MTdjNDE0YzNhZDU2ZDg2MTY4M2NkZjU2OGRmZTY5YmNhMWQ4NzM0MGM4OGQ4YmQ4ZmUzMDNlNWNlMDliNGQ1M3x7InJlbW90ZV9hZGRyZXNzIjoiMjAzLjIxNS4xMjEuMjI2IiwicmVxdWVzdF9pZCI6IkNCRDc3OUUyOjFEOTY6MzExMTkyQjo1ODZDRUY2NSIsInRpbWVzdGFtcCI6MTQ4MzUzNDE5MCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="7d94ff5237ae8056a798ff0ca85386fb3035c3d0">

    <meta http-equiv="x-pjax-version" content="252625938b3668c0d4945eaa339e2696">
    

      
  <meta name="description" content="rainbow - Simple syntax highlighting library written in javascript">
  <meta name="go-import" content="github.com/ccampbell/rainbow git https://github.com/ccampbell/rainbow.git">

  <meta content="259316" name="octolytics-dimension-user_id" /><meta content="ccampbell" name="octolytics-dimension-user_login" /><meta content="3829352" name="octolytics-dimension-repository_id" /><meta content="ccampbell/rainbow" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="3829352" name="octolytics-dimension-repository_network_root_id" /><meta content="ccampbell/rainbow" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ccampbell/rainbow/commits/master.atom" rel="alternate" title="Recent Commits to rainbow:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/ccampbell/rainbow/blob/master/dist/rainbow.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ccampbell/rainbow/search" class="js-site-search-form" data-scoped-search-url="/ccampbell/rainbow/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:7032875" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="ccampbell/rainbow">This repository</span>
  </div>
    <a class="dropdown-item" href="/ccampbell/rainbow/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/edwindvinas"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@edwindvinas" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/7032875?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">edwindvinas</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/edwindvinas" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/edwindvinas?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="45hvgF5DAQWDKXQm1HRyN1rlRKNHce7nQSIv7Edbt+DC1OHN5PawfAKU5YEkU5yaLmm+HBP6O1yzSiGa931ZGQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ZKZOphamPMNsWylVhmiFQq5hLfhGHH3UPAXrt0CKat9H16pX7BZi/KnGWEhNMeAbA8wd2Y1dfUfamAXJYPmvfg==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="3829352" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/ccampbell/rainbow/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/ccampbell/rainbow/watchers"
            aria-label="46 users are watching this repository">
            46
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ccampbell/rainbow/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="oC58LgjYB0r5TFPjF7Bl3IyzbOPRmoz5cppSNX/2JJJrL76iEzzmKJF6P4AbUTw2yKiO4Oit0YYKUhVdgoPOcg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar ccampbell/rainbow"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/ccampbell/rainbow/stargazers"
           aria-label="2630 users starred this repository">
          2,630
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ccampbell/rainbow/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="NyVaA1A43kluYOuQR/96oELkVWd0+llSf14JVB5RrD1PfT3bmsRxIcPLgg5gdAlq720gvvX2LTQTtYhb0OUY+g==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star ccampbell/rainbow"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/ccampbell/rainbow/stargazers"
           aria-label="2630 users starred this repository">
          2,630
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ccampbell/rainbow/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="qYUFgbXp4NaGNcP2K6CfeGDjKDYvaacxZ7471UkBe/BGQ03yR0sC+ivxefO3M4l0XPcDDocMzRM9cfTRHRZTmQ==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of ccampbell/rainbow to your account"
                aria-label="Fork your own copy of ccampbell/rainbow to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/ccampbell/rainbow/network" class="social-count"
       aria-label="302 users forked this repository">
      302
    </a>
  </li>
</ul>

    <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/ccampbell" class="url fn" rel="author">ccampbell</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/ccampbell/rainbow" data-pjax="#js-repo-pjax-container">rainbow</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/ccampbell/rainbow" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ccampbell/rainbow" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/ccampbell/rainbow/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ccampbell/rainbow/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">34</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/ccampbell/rainbow/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /ccampbell/rainbow/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">17</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/ccampbell/rainbow/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ccampbell/rainbow/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/ccampbell/rainbow/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /ccampbell/rainbow/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/ccampbell/rainbow/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /ccampbell/rainbow/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/ccampbell/rainbow/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /ccampbell/rainbow/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/ccampbell/rainbow/blob/1337dd2720653ba71be911ed9e507210ef971b70/dist/rainbow.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:475a27a0d625b1cc721c3e17847b6a81 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/ccampbell/rainbow/blob/es6/dist/rainbow.js"
               data-name="es6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                es6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ccampbell/rainbow/blob/master/dist/rainbow.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/2.1.2/dist/rainbow.js"
              data-name="2.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.2">
                2.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/2.1.1/dist/rainbow.js"
              data-name="2.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.1">
                2.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/2.1.0/dist/rainbow.js"
              data-name="2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.0">
                2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/2.0.0/dist/rainbow.js"
              data-name="2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.0.0">
                2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.2.0/dist/rainbow.js"
              data-name="1.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.2.0">
                1.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.9/dist/rainbow.js"
              data-name="1.1.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.9">
                1.1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.8/dist/rainbow.js"
              data-name="1.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.8">
                1.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.7/dist/rainbow.js"
              data-name="1.1.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.7">
                1.1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.6/dist/rainbow.js"
              data-name="1.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.6">
                1.1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.5/dist/rainbow.js"
              data-name="1.1.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.5">
                1.1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.4/dist/rainbow.js"
              data-name="1.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.4">
                1.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.3/dist/rainbow.js"
              data-name="1.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.3">
                1.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1.2/dist/rainbow.js"
              data-name="1.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1.2">
                1.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ccampbell/rainbow/tree/1.1/dist/rainbow.js"
              data-name="1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="1.1">
                1.1
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/ccampbell/rainbow/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/ccampbell/rainbow"><span>rainbow</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/ccampbell/rainbow/tree/master/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">rainbow.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/ccampbell/rainbow/contributors/master/dist/rainbow.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/ccampbell/rainbow/raw/master/dist/rainbow.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/ccampbell/rainbow/blame/master/dist/rainbow.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/ccampbell/rainbow/commits/master/dist/rainbow.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/ccampbell/rainbow?branch=master&amp;filepath=dist%2Frainbow.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ccampbell/rainbow/edit/master/dist/rainbow.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kcZNcvkOCOksVqDOoSLTbNmbKP6t9wZyjWR7QLsMCOWPvfeBuQ0ELCN1Le7QbxO0TcsHjXqI6JSBHpvrH014dA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/ccampbell/rainbow/delete/master/dist/rainbow.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="O6pL9ZAvDh/+3TZv8JFvVVWHEdjqXZaIGgWqKtulee9bzEVlsrGPlvj9uGh7SWV6OKsSDfdY4rYsOIMvKRQOKQ==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      1029 lines (889 sloc)
      <span class="file-info-divider"></span>
    97 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span> (<span class="pl-c1">global</span>, <span class="pl-smi">factory</span>) {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">typeof</span> <span class="pl-c1">exports</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> <span class="pl-en">factory</span>() <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">typeof</span> define <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">define</span>.<span class="pl-smi">amd</span> <span class="pl-k">?</span> <span class="pl-en">define</span>(factory) <span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">    (<span class="pl-c1">global</span>.<span class="pl-smi">Rainbow</span> <span class="pl-k">=</span> <span class="pl-en">factory</span>());</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">}(<span class="pl-c1">this</span>, <span class="pl-k">function</span> () { <span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">isNode$1</span>() {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/*</span> globals module <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">typeof</span> <span class="pl-c1">module</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">isWorker$1</span>() {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">typeof</span> <span class="pl-c1">document</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> self <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Browser Only - Gets the language for this block of code</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Element}</span> <span class="pl-smi">block</span></span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{string|null}</span></span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">getLanguageForBlock</span>(<span class="pl-smi">block</span>) {</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> If this doesn&#39;t have a language but the parent does then use that.</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> This means if for example you have: &lt;pre data-language=&quot;php&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> with a bunch of &lt;code&gt; blocks inside then you do not have</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> to specify the language for each block.</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> language <span class="pl-k">=</span> <span class="pl-smi">block</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-language<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-smi">block</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-language<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> This adds support for specifying language via a CSS class.</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> You can use the Google Code Prettify style: &lt;pre class=&quot;lang-php&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> or the HTML5 style: &lt;pre&gt;&lt;code class=&quot;language-php&quot;&gt;</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>language) {</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> pattern <span class="pl-k">=</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-k">\b</span>lang(?:uage)<span class="pl-k">?</span>-(<span class="pl-c1">\w</span><span class="pl-k">+</span>)<span class="pl-pds">/</span></span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> match <span class="pl-k">=</span> <span class="pl-smi">block</span>.<span class="pl-c1">className</span>.<span class="pl-c1">match</span>(pattern) <span class="pl-k">||</span> <span class="pl-smi">block</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">className</span>.<span class="pl-c1">match</span>(pattern);</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (match) {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">                language <span class="pl-k">=</span> match[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (language) {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">language</span>.<span class="pl-c1">toLowerCase</span>();</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Determines if two different matches have complete overlap with each other</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">start1</span>   start position of existing match</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">end1</span>     end position of existing match</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">start2</span>   start position of new match</span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">end2</span>     end position of new match</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{boolean}</span></span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">hasCompleteOverlap</span>(<span class="pl-smi">start1</span>, <span class="pl-smi">end1</span>, <span class="pl-smi">start2</span>, <span class="pl-smi">end2</span>) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> If the starting and end positions are exactly the same</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> then the first one should stay and this one should be ignored.</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (start2 <span class="pl-k">===</span> start1 <span class="pl-k">&amp;&amp;</span> end2 <span class="pl-k">===</span> end1) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> start2 <span class="pl-k">&lt;=</span> start1 <span class="pl-k">&amp;&amp;</span> end2 <span class="pl-k">&gt;=</span> end1;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Encodes &lt; and &gt; as html entities</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">code</span></span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">htmlEntities</span>(<span class="pl-smi">code</span>) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">code</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&lt;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;lt;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&gt;<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;gt;<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>&amp;(?!<span class="pl-c1">[<span class="pl-c1">\w</span><span class="pl-cce">\#</span>]</span><span class="pl-k">+</span>;)<span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span>&amp;amp;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Finds out the position of group match for a regular expression</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@see</span> http://stackoverflow.com/questions/1985594/how-to-find-index-of-groups-in-match</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">match</span></span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">groupNumber</span></span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{number}</span></span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">indexOfGroup</span>(<span class="pl-smi">match</span>, <span class="pl-smi">groupNumber</span>) {</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> index <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">1</span>; i <span class="pl-k">&lt;</span> groupNumber; <span class="pl-k">++</span>i) {</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (match[i]) {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">                index <span class="pl-k">+=</span> match[i].<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> index;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Determines if a new match intersects with an existing one</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">start1</span>    start position of existing match</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">end1</span>      end position of existing match</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">start2</span>    start position of new match</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">end2</span>      end position of new match</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{boolean}</span></span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">intersects</span>(<span class="pl-smi">start1</span>, <span class="pl-smi">end1</span>, <span class="pl-smi">start2</span>, <span class="pl-smi">end2</span>) {</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (start2 <span class="pl-k">&gt;=</span> start1 <span class="pl-k">&amp;&amp;</span> start2 <span class="pl-k">&lt;</span> end1) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> end2 <span class="pl-k">&gt;</span> start1 <span class="pl-k">&amp;&amp;</span> end2 <span class="pl-k">&lt;</span> end1;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Sorts an objects keys by index descending</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">object</span></span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{Array}</span></span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">keys</span>(<span class="pl-smi">object</span>) {</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> locations <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> location <span class="pl-k">in</span> object) {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">object</span>.<span class="pl-en">hasOwnProperty</span>(location)) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">locations</span>.<span class="pl-c1">push</span>(location);</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> numeric descending</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">locations</span>.<span class="pl-c1">sort</span>(<span class="pl-k">function</span> (<span class="pl-smi">a</span>, <span class="pl-smi">b</span>) { <span class="pl-k">return</span> b <span class="pl-k">-</span> a; });</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Substring replace call to replace part of a string at a certain position</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">position</span>         the position where the replacement</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *                                  should happen</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">replace</span>          the text we want to replace</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">replaceWith</span>      the text we want to replace it with</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">code</span>             the code we are doing the replacing in</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">replaceAtPosition</span>(<span class="pl-smi">position</span>, <span class="pl-smi">replace</span>, <span class="pl-smi">replaceWith</span>, <span class="pl-smi">code</span>) {</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> subString <span class="pl-k">=</span> <span class="pl-smi">code</span>.<span class="pl-c1">substr</span>(position);</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">code</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, position) <span class="pl-k">+</span> <span class="pl-smi">subString</span>.<span class="pl-c1">replace</span>(replace, replaceWith);</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Creates a usable web worker from an anonymous function</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * mostly borrowed from https://github.com/zevero/worker-create</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">fn</span></span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Prism}</span> <span class="pl-smi">Prism</span></span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{Worker}</span></span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">createWorker</span>(<span class="pl-smi">fn</span>, <span class="pl-smi">Prism</span>) {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-en">isNode$1</span>()) {</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">/*</span> globals global, require, __filename <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">global</span>.<span class="pl-smi">Worker</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>webworker-threads<span class="pl-pds">&#39;</span></span>).<span class="pl-smi">Worker</span>;</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Worker</span>(<span class="pl-c1">__filename</span>);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> prismFunction <span class="pl-k">=</span> <span class="pl-smi">Prism</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> code <span class="pl-k">=</span> <span class="pl-smi">keys</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">        code <span class="pl-k">+=</span> <span class="pl-smi">htmlEntities</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">        code <span class="pl-k">+=</span> <span class="pl-smi">hasCompleteOverlap</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">        code <span class="pl-k">+=</span> <span class="pl-smi">intersects</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">        code <span class="pl-k">+=</span> <span class="pl-smi">replaceAtPosition</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">        code <span class="pl-k">+=</span> <span class="pl-smi">indexOfGroup</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">        code <span class="pl-k">+=</span> prismFunction;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> This is an awful hack, but something to do with how uglify renames stuff</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> and rollup means that the variable the worker.js is using to reference</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Prism will not be the same one available in this context</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> prismName <span class="pl-k">=</span> <span class="pl-smi">prismFunction</span>.<span class="pl-c1">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>function (<span class="pl-c1">\w</span><span class="pl-k">+?</span>)<span class="pl-cce">\(</span><span class="pl-pds">/</span></span>)[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> str <span class="pl-k">=</span> <span class="pl-smi">fn</span>.<span class="pl-c1">toString</span>();</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">        str <span class="pl-k">=</span> <span class="pl-smi">str</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>=new <span class="pl-c1">\w</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>, (<span class="pl-s"><span class="pl-pds">&quot;</span>= new <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> prismName));</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> fullString <span class="pl-k">=</span> code <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\t</span>this.onmessage =<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> str;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> blob <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Blob</span>([fullString], { type<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>text/javascript<span class="pl-pds">&#39;</span></span> });</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Worker</span>((<span class="pl-c1">window</span>.<span class="pl-c1">URL</span> <span class="pl-k">||</span> <span class="pl-c1">window</span>.<span class="pl-smi">webkitURL</span>).<span class="pl-en">createObjectURL</span>(blob));</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Prism is a class used to highlight individual blocks of code</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@class</span></span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-en">Prism</span> <span class="pl-k">=</span> <span class="pl-k">function</span> <span class="pl-en">Prism</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Object of replacements to process at the end of the processing</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@type</span> <span class="pl-en">{Object}</span></span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> replacements <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Language associated with this Prism object</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@type</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> currentLanguage;</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Object of start and end positions of blocks to be replaced</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@type</span> <span class="pl-en">{Object}</span></span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> replacementPositions <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Determines if the match passed in falls inside of an existing match.</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * This prevents a regex pattern from matching inside of another pattern</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * that matches a larger amount of code.</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * For example this prevents a keyword from matching `function` if there</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * is already a match for `function (.*)`.</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">startstart</span> position of new match</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">end</span>  end position of new match</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{boolean}</span></span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_matchIsInsideOtherMatch</span>(<span class="pl-smi">start</span>, <span class="pl-smi">end</span>) {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> key <span class="pl-k">in</span> replacementPositions) {</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">                key <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(key, <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> If this block completely overlaps with another block</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> then we should remove the other block and return `false`.</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-en">hasCompleteOverlap</span>(key, replacementPositions[key], start, end)) {</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">delete</span> replacementPositions[key];</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">delete</span> replacements[key];</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-en">intersects</span>(key, replacementPositions[key], start, end)) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Takes a string of code and wraps it in a span tag based on the name</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">name</span>    name of the pattern (ie keyword.regex)</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">code</span>    block of code to wrap</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">globalClass</span> class to apply to every span</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_wrapCodeInSpan</span>(<span class="pl-smi">name</span>, <span class="pl-smi">code</span>) {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> className <span class="pl-k">=</span> <span class="pl-smi">name</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span><span class="pl-pds">/</span>g</span>, <span class="pl-s"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> globalClass <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">globalClass</span>;</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (globalClass) {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">                className <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> globalClass;</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> (<span class="pl-s"><span class="pl-pds">&quot;</span>&lt;span class=<span class="pl-cce">\&quot;</span><span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> className <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\&quot;</span>&gt;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> code <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&lt;/span&gt;<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Process replacements in the string of code to actually update</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * the markup</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">code</span>     the code to process replacements in</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_processReplacements</span>(<span class="pl-smi">code</span>) {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> positions <span class="pl-k">=</span> <span class="pl-en">keys</span>(replacements);</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, list <span class="pl-k">=</span> positions; i <span class="pl-k">&lt;</span> <span class="pl-smi">list</span>.<span class="pl-c1">length</span>; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> position <span class="pl-k">=</span> list[i];</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> replacement <span class="pl-k">=</span> replacements[position];</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">                code <span class="pl-k">=</span> <span class="pl-en">replaceAtPosition</span>(position, <span class="pl-smi">replacement</span>.<span class="pl-smi">replace</span>, <span class="pl-smi">replacement</span>.<span class="pl-smi">with</span>, code);</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> code;</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * It is so we can create a new regex object for each call to</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * _processPattern to avoid state carrying over when running exec</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * multiple times.</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * The global flag should not be carried over because we are simulating</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * it by processing the regex in a loop so we only care about the first</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * match in each string. This also seems to improve performance quite a</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * bit.</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{RegExp}</span> <span class="pl-smi">regex</span></span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_cloneRegex</span>(<span class="pl-smi">regex</span>) {</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> flags <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">regex</span>.<span class="pl-c1">ignoreCase</span>) {</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">                flags <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>i<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">regex</span>.<span class="pl-c1">multiline</span>) {</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">                flags <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>m<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-smi">regex</span>.<span class="pl-c1">source</span>, flags);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Matches a regex pattern against a block of code, finds all matches</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * that should be processed, and stores the positions of where they</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * should be replaced within the string.</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * This is where pretty much all the work is done but it should not</span></td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * be called directly.</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{Object}</span> <span class="pl-smi">pattern</span></span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">code</span></span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">offset</span></span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{mixed}</span></span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_processPattern</span>(<span class="pl-smi">pattern</span>, <span class="pl-smi">code</span>, <span class="pl-smi">offset</span>) {</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> ( offset <span class="pl-k">===</span> <span class="pl-k">void</span> <span class="pl-c1">0</span> ) offset <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> regex <span class="pl-k">=</span> <span class="pl-smi">pattern</span>.<span class="pl-smi">pattern</span>;</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>regex) {</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Since we are simulating global regex matching we need to also</span></td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> make sure to stop after one match if the pattern is not global</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> shouldStop <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-smi">regex</span>.<span class="pl-smi">global</span>;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">            regex <span class="pl-k">=</span> <span class="pl-en">_cloneRegex</span>(regex);</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> match <span class="pl-k">=</span> <span class="pl-smi">regex</span>.<span class="pl-c1">exec</span>(code);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span>match) {</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Treat match 0 the same way as name</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">pattern</span>.<span class="pl-c1">name</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">pattern</span>.<span class="pl-smi">matches</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">pattern</span>.<span class="pl-smi">matches</span>[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">pattern</span>.<span class="pl-c1">name</span> <span class="pl-k">=</span> <span class="pl-smi">pattern</span>.<span class="pl-smi">matches</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">delete</span> <span class="pl-smi">pattern</span>.<span class="pl-smi">matches</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> replacement <span class="pl-k">=</span> match[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> startPos <span class="pl-k">=</span> <span class="pl-smi">match</span>.<span class="pl-c1">index</span> <span class="pl-k">+</span> offset;</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> endPos <span class="pl-k">=</span> match[<span class="pl-c1">0</span>].<span class="pl-c1">length</span> <span class="pl-k">+</span> startPos;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> In some cases when the regex matches a group such as \s* it is</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> possible for there to be a match, but have the start position</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> equal the end position. In those cases we should be able to stop</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> matching. Otherwise this can lead to an infinite loop.</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (startPos <span class="pl-k">===</span> endPos) {</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> If this is not a child match and it falls inside of another</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> match that already happened we should skip it and continue</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> processing.</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-en">_matchIsInsideOtherMatch</span>(startPos, endPos)) {</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">                    remaining<span class="pl-k">:</span> <span class="pl-smi">code</span>.<span class="pl-c1">substr</span>(endPos <span class="pl-k">-</span> offset),</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">                    offset<span class="pl-k">:</span> endPos</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             * Callback for when a match was successfully processed</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             *</span></td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">repl</span></span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> <span class="pl-en">onMatchSuccess</span>(<span class="pl-smi">repl</span>) {</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> If this match has a name then wrap it in a span tag</span></td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-smi">pattern</span>.<span class="pl-c1">name</span>) {</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">                    repl <span class="pl-k">=</span> <span class="pl-en">_wrapCodeInSpan</span>(<span class="pl-smi">pattern</span>.<span class="pl-c1">name</span>, repl);</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> For debugging</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> console.log(&#39;Replace &#39; + match[0] + &#39; with &#39; + replacement + &#39; at position &#39; + startPos + &#39; to &#39; + endPos);</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> Store what needs to be replaced with what at this position</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">                replacements[startPos] <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>replace<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> match[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">                    <span class="pl-s"><span class="pl-pds">&#39;</span>with<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> repl</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> Store the range of this match so we can use it for</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> comparisons with other matches later.</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">                replacementPositions[startPos] <span class="pl-k">=</span> endPos;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (shouldStop) {</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">                    remaining<span class="pl-k">:</span> <span class="pl-smi">code</span>.<span class="pl-c1">substr</span>(endPos <span class="pl-k">-</span> offset),</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">                    offset<span class="pl-k">:</span> endPos</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             * Helper function for processing a sub group</span></td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             *</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             * <span class="pl-k">@param</span> <span class="pl-en">{number}</span> <span class="pl-smi">groupKey</span>  index of group</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line"><span class="pl-c">             <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">function</span> <span class="pl-en">_processGroup</span>(<span class="pl-smi">groupKey</span>) {</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> block <span class="pl-k">=</span> match[groupKey];</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> If there is no match here then move on</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>block) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> group <span class="pl-k">=</span> <span class="pl-smi">pattern</span>.<span class="pl-smi">matches</span>[groupKey];</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> language <span class="pl-k">=</span> <span class="pl-smi">group</span>.<span class="pl-c1">language</span>;</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * Process group is what group we should use to actually process</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * this match group.</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * For example if the subgroup pattern looks like this:</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * 2: {</span></td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * &#39;name&#39;: &#39;keyword&#39;,</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * &#39;pattern&#39;: /true/g</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * }</span></td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * then we use that as is, but if it looks like this:</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * 2: {</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * &#39;name&#39;: &#39;keyword&#39;,</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * &#39;matches&#39;: {</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *      &#39;name&#39;: &#39;special&#39;,</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *      &#39;pattern&#39;: /whatever/g</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *  }</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * }</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * we treat the &#39;matches&#39; part as the pattern and keep</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * the name around to wrap it with later</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> groupToProcess <span class="pl-k">=</span> <span class="pl-smi">group</span>.<span class="pl-c1">name</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">group</span>.<span class="pl-smi">matches</span> <span class="pl-k">?</span> <span class="pl-smi">group</span>.<span class="pl-smi">matches</span> <span class="pl-k">:</span> group;</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * Takes the code block matched at this group, replaces it</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * with the highlighted block, and optionally wraps it with</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * a span with a name</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 *</span></td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">passedBlock</span></span></td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">replaceBlock</span></span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 * <span class="pl-k">@param</span> <span class="pl-en">{string|null}</span> <span class="pl-smi">matchName</span></span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                 <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> <span class="pl-en">_getReplacement</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">passedBlock</span>, <span class="pl-smi">replaceBlock</span>, <span class="pl-smi">matchName</span>) {</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code blob-code-inner js-file-line">                    replacement <span class="pl-k">=</span> <span class="pl-en">replaceAtPosition</span>(<span class="pl-en">indexOfGroup</span>(match, groupKey), passedBlock, matchName <span class="pl-k">?</span> <span class="pl-en">_wrapCodeInSpan</span>(matchName, replaceBlock) <span class="pl-k">:</span> replaceBlock, replacement);</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> If this is a string then this match is directly mapped</span></td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> to selector so all we have to do is wrap it in a span</span></td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> and continue.</span></td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">typeof</span> group <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">_getReplacement</span>(block, block, group);</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> localCode;</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> prism <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Prism</span>(options);</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> If this is a sublanguage go and process the block using</span></td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> that language</span></td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (language) {</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code blob-code-inner js-file-line">                    localCode <span class="pl-k">=</span> <span class="pl-smi">prism</span>.<span class="pl-en">refract</span>(block, language);</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code blob-code-inner js-file-line">                    <span class="pl-en">_getReplacement</span>(block, localCode);</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> The process group can be a single pattern or an array of</span></td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> patterns. `_processCodeWithPatterns` always expects an array</span></td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> so we convert it here.</span></td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code blob-code-inner js-file-line">                localCode <span class="pl-k">=</span> <span class="pl-smi">prism</span>.<span class="pl-en">refract</span>(block, currentLanguage, <span class="pl-smi">groupToProcess</span>.<span class="pl-c1">length</span> <span class="pl-k">?</span> groupToProcess <span class="pl-k">:</span> [groupToProcess]);</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">_getReplacement</span>(block, localCode, <span class="pl-smi">group</span>.<span class="pl-smi">matches</span> <span class="pl-k">?</span> <span class="pl-smi">group</span>.<span class="pl-c1">name</span> <span class="pl-k">:</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> If this pattern has sub matches for different groups in the regex</span></td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> then we should process them one at a time by running them through</span></td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> the _processGroup function to generate the new replacement.</span></td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> We use the `keys` function to run through them backwards because</span></td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> the match position of earlier matches will not change depending</span></td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> on what gets replaced in later matches.</span></td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> groupKeys <span class="pl-k">=</span> <span class="pl-en">keys</span>(<span class="pl-smi">pattern</span>.<span class="pl-smi">matches</span>);</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, list <span class="pl-k">=</span> groupKeys; i <span class="pl-k">&lt;</span> <span class="pl-smi">list</span>.<span class="pl-c1">length</span>; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> groupKey <span class="pl-k">=</span> list[i];</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">_processGroup</span>(groupKey);</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Finally, call `onMatchSuccess` with the replacement</span></td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-en">onMatchSuccess</span>(replacement);</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Processes a block of code using specified patterns</span></td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">code</span></span></td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{Array}</span> <span class="pl-smi">patterns</span></span></td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_processCodeWithPatterns</span>(<span class="pl-smi">code</span>, <span class="pl-smi">patterns</span>) {</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, list <span class="pl-k">=</span> patterns; i <span class="pl-k">&lt;</span> <span class="pl-smi">list</span>.<span class="pl-c1">length</span>; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> pattern <span class="pl-k">=</span> list[i];</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-en">_processPattern</span>(pattern, code);</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">while</span> (result) {</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code blob-code-inner js-file-line">                    result <span class="pl-k">=</span> <span class="pl-en">_processPattern</span>(pattern, <span class="pl-smi">result</span>.<span class="pl-smi">remaining</span>, <span class="pl-smi">result</span>.<span class="pl-smi">offset</span>);</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> We are done processing the patterns so we should actually replace</span></td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> what needs to be replaced in the code.</span></td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-en">_processReplacements</span>(code);</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Returns a list of regex patterns for this language</span></td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">language</span></span></td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{Array}</span></span></td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">getPatternsForLanguage</span>(<span class="pl-smi">language</span>) {</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> patterns <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">patterns</span>[language] <span class="pl-k">||</span> [];</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">while</span> (<span class="pl-smi">options</span>.<span class="pl-smi">inheritenceMap</span>[language]) {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code blob-code-inner js-file-line">                language <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-smi">inheritenceMap</span>[language];</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code blob-code-inner js-file-line">                patterns <span class="pl-k">=</span> <span class="pl-smi">patterns</span>.<span class="pl-c1">concat</span>(<span class="pl-smi">options</span>.<span class="pl-smi">patterns</span>[language] <span class="pl-k">||</span> []);</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> patterns;</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * Takes a string of code and highlights it according to the language</span></td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * specified</span></td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         *</span></td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">code</span></span></td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">language</span></span></td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@param</span> <span class="pl-en">{object}</span> <span class="pl-smi">patterns</span> optionally specify a list of patterns</span></td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         * <span class="pl-k">@return</span> <span class="pl-en">{string}</span></span></td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code blob-code-inner js-file-line"><span class="pl-c">         <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_highlightBlockForLanguage</span>(<span class="pl-smi">code</span>, <span class="pl-smi">language</span>, <span class="pl-smi">patterns</span>) {</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code blob-code-inner js-file-line">            currentLanguage <span class="pl-k">=</span> language;</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code blob-code-inner js-file-line">            patterns <span class="pl-k">=</span> patterns <span class="pl-k">||</span> <span class="pl-en">getPatternsForLanguage</span>(language);</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-en">_processCodeWithPatterns</span>(<span class="pl-en">htmlEntities</span>(code), patterns);</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">this</span>.<span class="pl-smi">refract</span> <span class="pl-k">=</span> _highlightBlockForLanguage;</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">rainbowWorker</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> message <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-c1">data</span>;</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> prism <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Prism</span>(<span class="pl-smi">message</span>.<span class="pl-c1">options</span>);</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> result <span class="pl-k">=</span> <span class="pl-smi">prism</span>.<span class="pl-en">refract</span>(<span class="pl-smi">message</span>.<span class="pl-c1">code</span>, <span class="pl-smi">message</span>.<span class="pl-c1">lang</span>);</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_reply</span>() {</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-c1">postMessage</span>({</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code blob-code-inner js-file-line">                id<span class="pl-k">:</span> <span class="pl-smi">message</span>.<span class="pl-c1">id</span>,</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code blob-code-inner js-file-line">                lang<span class="pl-k">:</span> <span class="pl-smi">message</span>.<span class="pl-c1">lang</span>,</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code blob-code-inner js-file-line">                result<span class="pl-k">:</span> result</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> I realized down the road I might look at this and wonder what is going on</span></td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> so probably it is not a bad idea to leave a comment.</span></td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> This is needed because right now the node library for simulating web</span></td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> workers “webworker-threads” will keep the worker open and it causes</span></td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> scripts running from the command line to hang unless the worker is</span></td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> explicitly closed.</span></td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> This means for node we will spawn a new thread for every asynchronous</span></td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> block we are highlighting, but in the browser we will keep a single</span></td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> worker open for all requests.</span></td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">message</span>.<span class="pl-smi">isNode</span>) {</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">_reply</span>();</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">self</span>.<span class="pl-c1">close</span>();</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">_reply</span>();</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-smi">message</span>.<span class="pl-c1">options</span>.<span class="pl-smi">delay</span> <span class="pl-k">*</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * An array of the language patterns specified for each language</span></td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@type</span> <span class="pl-en">{Object}</span></span></td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> patterns <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * An object of languages mapping to what language they should inherit from</span></td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@type</span> <span class="pl-en">{Object}</span></span></td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> inheritenceMap <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * A mapping of language aliases</span></td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@type</span> <span class="pl-en">{Object}</span></span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> aliases <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Representation of the actual rainbow object</span></td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@type</span> <span class="pl-en">{Object}</span></span></td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> Rainbow <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Callback to fire after each block is highlighted</span></td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@type</span> <span class="pl-en">{null|Function}</span></span></td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> onHighlightCallback;</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> isNode <span class="pl-k">=</span> <span class="pl-en">isNode$1</span>();</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> isWorker <span class="pl-k">=</span> <span class="pl-en">isWorker$1</span>();</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> cachedWorker <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_getWorker</span>() {</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (isNode <span class="pl-k">||</span> cachedWorker <span class="pl-k">===</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code blob-code-inner js-file-line">            cachedWorker <span class="pl-k">=</span> <span class="pl-en">createWorker</span>(rainbowWorker, Prism);</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> cachedWorker;</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Helper for matching up callbacks directly with the</span></td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * post message requests to a web worker.</span></td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{object}</span> <span class="pl-smi">message</span>      data to send to web worker</span></td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">callback</span>   callback function for worker to reply to</span></td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_messageWorker</span>(<span class="pl-smi">message</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> worker <span class="pl-k">=</span> <span class="pl-en">_getWorker</span>();</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">_listen</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">e</span>.<span class="pl-c1">data</span>.<span class="pl-c1">id</span> <span class="pl-k">===</span> <span class="pl-smi">message</span>.<span class="pl-c1">id</span>) {</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">callback</span>(<span class="pl-smi">e</span>.<span class="pl-c1">data</span>);</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">worker</span>.<span class="pl-c1">removeEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>message<span class="pl-pds">&#39;</span></span>, _listen);</td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">worker</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>message<span class="pl-pds">&#39;</span></span>, _listen);</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">worker</span>.<span class="pl-c1">postMessage</span>(message);</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Browser Only - Handles response from web worker, updates DOM with</span></td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * resulting code, and fires callback</span></td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Element}</span> <span class="pl-smi">element</span></span></td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{object}</span> <span class="pl-smi">waitingOn</span></span></td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">callback</span></span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_generateHandler</span>(<span class="pl-smi">element</span>, <span class="pl-smi">waitingOn</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-k">function</span> <span class="pl-en">_handleResponseFromWorker</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">element</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-smi">data</span>.<span class="pl-smi">result</span>;</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">element</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>loading<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">element</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">tagName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>PRE<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">element</span>.<span class="pl-c1">parentNode</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>loading<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> element.addEventListener(&#39;animationend&#39;, (e) =&gt; {</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>     if (e.animationName === &#39;fade-in&#39;) {</span></td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>         setTimeout(() =&gt; {</span></td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>             element.classList.remove(&#39;decrease-delay&#39;);</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>         }, 1000);</span></td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>     }</span></td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> });</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (onHighlightCallback) {</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">onHighlightCallback</span>(element, <span class="pl-smi">data</span>.<span class="pl-c1">lang</span>);</td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">--</span><span class="pl-smi">waitingOn</span>.<span class="pl-smi">c</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">callback</span>();</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Gets options needed to pass into Prism</span></td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{object}</span> <span class="pl-smi">options</span></span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{object}</span></span></td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_getPrismOptions</span>(<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code blob-code-inner js-file-line">            patterns<span class="pl-k">:</span> patterns,</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code blob-code-inner js-file-line">            inheritenceMap<span class="pl-k">:</span> inheritenceMap,</td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code blob-code-inner js-file-line">            aliases<span class="pl-k">:</span> aliases,</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code blob-code-inner js-file-line">            globalClass<span class="pl-k">:</span> <span class="pl-smi">options</span>.<span class="pl-smi">globalClass</span>,</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code blob-code-inner js-file-line">            delay<span class="pl-k">:</span> <span class="pl-k">!</span><span class="pl-c1">isNaN</span>(<span class="pl-smi">options</span>.<span class="pl-smi">delay</span>) <span class="pl-k">?</span> <span class="pl-smi">options</span>.<span class="pl-smi">delay</span> <span class="pl-k">:</span> <span class="pl-c1">0</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Gets data to send to webworker</span></td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span>  <span class="pl-en">{string}</span> <span class="pl-smi">code</span></span></td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span>  <span class="pl-en">{string}</span> <span class="pl-smi">lang</span></span></td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{object}</span></span></td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_getWorkerData</span>(<span class="pl-smi">code</span>, <span class="pl-smi">lang</span>) {</td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> options <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> lang <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>object<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code blob-code-inner js-file-line">            options <span class="pl-k">=</span> lang;</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code blob-code-inner js-file-line">            lang <span class="pl-k">=</span> <span class="pl-smi">options</span>.<span class="pl-c1">language</span>;</td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code blob-code-inner js-file-line">        lang <span class="pl-k">=</span> aliases[lang] <span class="pl-k">||</span> lang;</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> workerData <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code blob-code-inner js-file-line">            id<span class="pl-k">:</span> <span class="pl-c1">String</span>.<span class="pl-c1">fromCharCode</span>(<span class="pl-c1">65</span> <span class="pl-k">+</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-c1">26</span>)) <span class="pl-k">+</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>(),</td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code blob-code-inner js-file-line">            code<span class="pl-k">:</span> code,</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code blob-code-inner js-file-line">            lang<span class="pl-k">:</span> lang,</td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code blob-code-inner js-file-line">            options<span class="pl-k">:</span> <span class="pl-en">_getPrismOptions</span>(options),</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code blob-code-inner js-file-line">            isNode<span class="pl-k">:</span> isNode</td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> workerData;</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Browser Only - Sends messages to web worker to highlight elements passed</span></td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * in</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Array}</span> <span class="pl-smi">codeBlocks</span></span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">callback</span></span></td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_highlightCodeBlocks</span>(<span class="pl-smi">codeBlocks</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> waitingOn <span class="pl-k">=</span> { c<span class="pl-k">:</span> <span class="pl-c1">0</span> };</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, list <span class="pl-k">=</span> codeBlocks; i <span class="pl-k">&lt;</span> <span class="pl-smi">list</span>.<span class="pl-c1">length</span>; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> block <span class="pl-k">=</span> list[i];</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> language <span class="pl-k">=</span> <span class="pl-en">getLanguageForBlock</span>(block);</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">block</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">contains</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rainbow<span class="pl-pds">&#39;</span></span>) <span class="pl-k">||</span> <span class="pl-k">!</span>language) {</td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> This cancels the pending animation to fade the code in on load</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> since we want to delay doing this until it is actually</span></td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> highlighted</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">block</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>loading<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">block</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>rainbow<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> We need to make sure to also add the loading class to the pre tag</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> because that is how we will know to show a preloader</span></td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">block</span>.<span class="pl-c1">parentNode</span>.<span class="pl-c1">tagName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>PRE<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">block</span>.<span class="pl-c1">parentNode</span>.<span class="pl-smi">classList</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>loading<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> globalClass <span class="pl-k">=</span> <span class="pl-smi">block</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-global-class<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> delay <span class="pl-k">=</span> <span class="pl-c1">parseInt</span>(<span class="pl-smi">block</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-delay<span class="pl-pds">&#39;</span></span>), <span class="pl-c1">10</span>);</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">++</span><span class="pl-smi">waitingOn</span>.<span class="pl-smi">c</span>;</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">_messageWorker</span>(<span class="pl-en">_getWorkerData</span>(<span class="pl-smi">block</span>.<span class="pl-smi">innerHTML</span>, { language<span class="pl-k">:</span> language, globalClass<span class="pl-k">:</span> globalClass, delay<span class="pl-k">:</span> delay }), <span class="pl-en">_generateHandler</span>(block, waitingOn, callback));</td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-smi">waitingOn</span>.<span class="pl-smi">c</span> <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">callback</span>();</td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_addPreloader</span>(<span class="pl-smi">preBlock</span>) {</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> preloader <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">preloader</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>preloader<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-c1">7</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">preloader</span>.<span class="pl-c1">appendChild</span>(<span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>div<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">preBlock</span>.<span class="pl-c1">appendChild</span>(preloader);</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Browser Only - Start highlighting all the code blocks</span></td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Element}</span> <span class="pl-smi">node</span>       HTMLElement to search within</span></td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">callback</span></span></td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">_highlight</span>(<span class="pl-smi">node</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code blob-code-inner js-file-line">        callback <span class="pl-k">=</span> callback <span class="pl-k">||</span> <span class="pl-k">function</span>() {};</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> The first argument can be an Event or a DOM Element.</span></td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> I was originally checking instanceof Event but that made it break</span></td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> when using mootools.</span></td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> @see https://github.com/ccampbell/rainbow/issues/32</span></td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code blob-code-inner js-file-line">        node <span class="pl-k">=</span> node <span class="pl-k">&amp;&amp;</span> <span class="pl-k">typeof</span> <span class="pl-smi">node</span>.<span class="pl-smi">getElementsByTagName</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span> <span class="pl-k">?</span> node <span class="pl-k">:</span> <span class="pl-c1">document</span>;</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> preBlocks <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>pre<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> codeBlocks <span class="pl-k">=</span> <span class="pl-smi">node</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> finalPreBlocks <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> finalCodeBlocks <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> First loop through all pre blocks to find which ones to highlight</span></td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>, list <span class="pl-k">=</span> preBlocks; i <span class="pl-k">&lt;</span> <span class="pl-smi">list</span>.<span class="pl-c1">length</span>; i <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> preBlock <span class="pl-k">=</span> list[i];</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">_addPreloader</span>(preBlock);</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> Strip whitespace around code tags when they are inside of a pre</span></td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> tag.  This makes the themes look better because you can&#39;t</span></td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> accidentally add extra linebreaks at the start and end.</span></td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> When the pre tag contains a code tag then strip any extra</span></td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> whitespace.</span></td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> For example:</span></td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> &lt;pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span>      &lt;code&gt;var foo = true;&lt;/code&gt;</span></td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> &lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> will become:</span></td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> &lt;pre&gt;&lt;code&gt;var foo = true;&lt;/code&gt;&lt;/pre&gt;</span></td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> If you want to preserve whitespace you can use a pre tag on</span></td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> its own without a code tag inside of it.</span></td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">preBlock</span>.<span class="pl-c1">getElementsByTagName</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>code<span class="pl-pds">&#39;</span></span>).<span class="pl-c1">length</span>) {</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> This fixes a race condition when Rainbow.color is called before</span></td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> the previous color call has finished.</span></td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">preBlock</span>.<span class="pl-c1">getAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-trimmed<span class="pl-pds">&#39;</span></span>)) {</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">preBlock</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>data-trimmed<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">preBlock</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> <span class="pl-smi">preBlock</span>.<span class="pl-smi">innerHTML</span>.<span class="pl-en">trim</span>();</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code blob-code-inner js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">continue</span>;</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> If the pre block has no code blocks then we are going to want to</span></td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code blob-code-inner js-file-line">            <span class="pl-c"><span class="pl-c">//</span> process it directly.</span></td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">finalPreBlocks</span>.<span class="pl-c1">push</span>(preBlock);</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> @see http://stackoverflow.com/questions/2735067/how-to-convert-a-dom-node-list-to-an-array-in-javascript</span></td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> We are going to process all &lt;code&gt; blocks</span></td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i$1 <span class="pl-k">=</span> <span class="pl-c1">0</span>, list$1 <span class="pl-k">=</span> codeBlocks; i$1 <span class="pl-k">&lt;</span> <span class="pl-smi">list$1</span>.<span class="pl-c1">length</span>; i$1 <span class="pl-k">+=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> codeBlock <span class="pl-k">=</span> list$1[i$1];</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">finalCodeBlocks</span>.<span class="pl-c1">push</span>(codeBlock);</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">_highlightCodeBlocks</span>(<span class="pl-smi">finalCodeBlocks</span>.<span class="pl-c1">concat</span>(finalPreBlocks), callback);</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Callback to let you do stuff in your app after a piece of code has</span></td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * been highlighted</span></td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{Function}</span> <span class="pl-smi">callback</span></span></td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">onHighlight</span>(<span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code blob-code-inner js-file-line">        onHighlightCallback <span class="pl-k">=</span> callback;</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Extends the language pattern matches</span></td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">language</span>            name of language</span></td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{object}</span> <span class="pl-smi">languagePatterns</span>    object of patterns to add on</span></td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string|undefined}</span> <span class="pl-smi">inherits</span>  optional language that this language</span></td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *                                     should inherit rules from</span></td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">extend</span>(<span class="pl-smi">language</span>, <span class="pl-smi">languagePatterns</span>, <span class="pl-smi">inherits</span>) {</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> If we extend a language again we shouldn&#39;t need to specify the</span></td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> inheritence for it. For example, if you are adding special highlighting</span></td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> for a javascript function that is not in the base javascript rules, you</span></td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> should be able to do</span></td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Rainbow.extend(&#39;javascript&#39;, [ … ]);</span></td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Without specifying a language it should inherit (generic in this case)</span></td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">!</span>inheritenceMap[language]) {</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code blob-code-inner js-file-line">            inheritenceMap[language] <span class="pl-k">=</span> inherits;</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code blob-code-inner js-file-line">        patterns[language] <span class="pl-k">=</span> <span class="pl-smi">languagePatterns</span>.<span class="pl-c1">concat</span>(patterns[language] <span class="pl-k">||</span> []);</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">remove</span>(<span class="pl-smi">language</span>) {</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> inheritenceMap[language];</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> patterns[language];</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Starts the magic rainbow</span></td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">color</span>() {</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> args <span class="pl-k">=</span> [], len <span class="pl-k">=</span> <span class="pl-c1">arguments</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">while</span> ( len<span class="pl-k">--</span> ) args[ len ] <span class="pl-k">=</span> <span class="pl-c1">arguments</span>[ len ];</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> If you want to straight up highlight a string you can pass the</span></td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> string of code, the language, and a callback function.</span></td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Example:</span></td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Rainbow.color(code, language, function(highlightedCode, language) {</span></td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>     // this code block is now highlighted</span></td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> });</span></td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> args[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>string<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> workerData <span class="pl-k">=</span> <span class="pl-en">_getWorkerData</span>(args[<span class="pl-c1">0</span>], args[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">_messageWorker</span>(workerData, (<span class="pl-k">function</span>(<span class="pl-smi">cb</span>) {</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">return</span> <span class="pl-k">function</span>(<span class="pl-smi">data</span>) {</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (cb) {</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code blob-code-inner js-file-line">                        <span class="pl-en">cb</span>(<span class="pl-smi">data</span>.<span class="pl-smi">result</span>, <span class="pl-smi">data</span>.<span class="pl-c1">lang</span>);</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code blob-code-inner js-file-line">                    }</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code blob-code-inner js-file-line">                };</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code blob-code-inner js-file-line">            }(args[<span class="pl-c1">2</span>])));</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> If you pass a callback function then we rerun the color function</span></td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> on all the code and call the callback function on complete.</span></td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Example:</span></td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Rainbow.color(function() {</span></td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>     console.log(&#39;All matching tags on the page are now highlighted&#39;);</span></td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> });</span></td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> args[<span class="pl-c1">0</span>] <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">_highlight</span>(<span class="pl-c1">0</span>, args[<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Otherwise we use whatever node you passed in with an optional</span></td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> callback function as the second parameter.</span></td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Example:</span></td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> var preElement = document.createElement(&#39;pre&#39;);</span></td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> var codeElement = document.createElement(&#39;code&#39;);</span></td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> codeElement.setAttribute(&#39;data-language&#39;, &#39;javascript&#39;);</span></td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> codeElement.innerHTML = &#39;// Here is some JavaScript&#39;;</span></td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> preElement.appendChild(codeElement);</span></td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Rainbow.color(preElement, function() {</span></td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span>     // New element is now highlighted</span></td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> });</span></td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span></span></td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> If you don&#39;t pass an element it will default to `document`</span></td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">_highlight</span>(args[<span class="pl-c1">0</span>], args[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Method to add an alias for an existing language.</span></td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * For example if you want to have &quot;coffee&quot; map to &quot;coffeescript&quot;</span></td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@see</span> https://github.com/ccampbell/rainbow/issues/154</span></td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">alias</span></span></td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@param</span> <span class="pl-en">{string}</span> <span class="pl-smi">originalLanguage</span></span></td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> <span class="pl-en">{void}</span></span></td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">function</span> <span class="pl-en">addAlias</span>(<span class="pl-smi">alias</span>, <span class="pl-smi">originalLanguage</span>) {</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code blob-code-inner js-file-line">        aliases[alias] <span class="pl-k">=</span> originalLanguage;</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">/**</span></span></td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * public methods</span></td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code blob-code-inner js-file-line">    Rainbow <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code blob-code-inner js-file-line">        extend<span class="pl-k">:</span> extend,</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code blob-code-inner js-file-line">        remove<span class="pl-k">:</span> remove,</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code blob-code-inner js-file-line">        onHighlight<span class="pl-k">:</span> onHighlight,</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code blob-code-inner js-file-line">        addAlias<span class="pl-k">:</span> addAlias,</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code blob-code-inner js-file-line">        color<span class="pl-k">:</span> color</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (isNode) {</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Rainbow</span>.<span class="pl-en">colorSync</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">code</span>, <span class="pl-smi">lang</span>) {</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> workerData <span class="pl-k">=</span> <span class="pl-en">_getWorkerData</span>(code, lang);</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> prism <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Prism</span>(<span class="pl-smi">workerData</span>.<span class="pl-c1">options</span>);</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">return</span> <span class="pl-smi">prism</span>.<span class="pl-en">refract</span>(<span class="pl-smi">workerData</span>.<span class="pl-c1">code</span>, <span class="pl-smi">workerData</span>.<span class="pl-c1">lang</span>);</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code blob-code-inner js-file-line">        };</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> In the browser hook it up to color on page load</span></td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">!</span>isNode <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>isWorker) {</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">document</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>DOMContentLoaded<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span> (<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-smi">Rainbow</span>.<span class="pl-c1">defer</span>) {</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code blob-code-inner js-file-line">                <span class="pl-smi">Rainbow</span>.<span class="pl-c1">color</span>(<span class="pl-c1">event</span>);</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c1">false</span>);</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> From a node worker, handle the postMessage requests to it</span></td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (isWorker) {</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">self</span>.<span class="pl-smi">onmessage</span> <span class="pl-k">=</span> rainbowWorker;</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L1023" class="blob-num js-line-number" data-line-number="1023"></td>
        <td id="LC1023" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1024" class="blob-num js-line-number" data-line-number="1024"></td>
        <td id="LC1024" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> Rainbow$1 <span class="pl-k">=</span> Rainbow;</td>
      </tr>
      <tr>
        <td id="L1025" class="blob-num js-line-number" data-line-number="1025"></td>
        <td id="LC1025" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1026" class="blob-num js-line-number" data-line-number="1026"></td>
        <td id="LC1026" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> Rainbow$1;</td>
      </tr>
      <tr>
        <td id="L1027" class="blob-num js-line-number" data-line-number="1027"></td>
        <td id="LC1027" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1028" class="blob-num js-line-number" data-line-number="1028"></td>
        <td id="LC1028" class="blob-code blob-code-inner js-file-line">}));</td>
      </tr>
      <tr>
        <td id="L1029" class="blob-num js-line-number" data-line-number="1029"></td>
        <td id="LC1029" class="blob-code blob-code-inner js-file-line">//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uL3NyYy91dGlsLmpzIiwiLi4vc3JjL3ByaXNtLmpzIiwiLi4vc3JjL3dvcmtlci5qcyIsIi4uL3NyYy9yYWluYm93LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZSgpIHtcbiAgICAvKiBnbG9iYWxzIG1vZHVsZSAqL1xuICAgIHJldHVybiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09ICdvYmplY3QnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXb3JrZXIoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIEJyb3dzZXIgT25seSAtIEdldHMgdGhlIGxhbmd1YWdlIGZvciB0aGlzIGJsb2NrIG9mIGNvZGVcbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGJsb2NrXG4gKiBAcmV0dXJuIHtzdHJpbmd8bnVsbH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExhbmd1YWdlRm9yQmxvY2soYmxvY2spIHtcblxuICAgIC8vIElmIHRoaXMgZG9lc24ndCBoYXZlIGEgbGFuZ3VhZ2UgYnV0IHRoZSBwYXJlbnQgZG9lcyB0aGVuIHVzZSB0aGF0LlxuICAgIC8vXG4gICAgLy8gVGhpcyBtZWFucyBpZiBmb3IgZXhhbXBsZSB5b3UgaGF2ZTogPHByZSBkYXRhLWxhbmd1YWdlPVwicGhwXCI+XG4gICAgLy8gd2l0aCBhIGJ1bmNoIG9mIDxjb2RlPiBibG9ja3MgaW5zaWRlIHRoZW4geW91IGRvIG5vdCBoYXZlXG4gICAgLy8gdG8gc3BlY2lmeSB0aGUgbGFuZ3VhZ2UgZm9yIGVhY2ggYmxvY2suXG4gICAgbGV0IGxhbmd1YWdlID0gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWxhbmd1YWdlJykgfHwgYmxvY2sucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuZ3VhZ2UnKTtcblxuICAgIC8vIFRoaXMgYWRkcyBzdXBwb3J0IGZvciBzcGVjaWZ5aW5nIGxhbmd1YWdlIHZpYSBhIENTUyBjbGFzcy5cbiAgICAvL1xuICAgIC8vIFlvdSBjYW4gdXNlIHRoZSBHb29nbGUgQ29kZSBQcmV0dGlmeSBzdHlsZTogPHByZSBjbGFzcz1cImxhbmctcGhwXCI+XG4gICAgLy8gb3IgdGhlIEhUTUw1IHN0eWxlOiA8cHJlPjxjb2RlIGNsYXNzPVwibGFuZ3VhZ2UtcGhwXCI+XG4gICAgaWYgKCFsYW5ndWFnZSkge1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gL1xcYmxhbmcoPzp1YWdlKT8tKFxcdyspLztcbiAgICAgICAgY29uc3QgbWF0Y2ggPSBibG9jay5jbGFzc05hbWUubWF0Y2gocGF0dGVybikgfHwgYmxvY2sucGFyZW50Tm9kZS5jbGFzc05hbWUubWF0Y2gocGF0dGVybik7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBsYW5ndWFnZSA9IG1hdGNoWzFdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxhbmd1YWdlKSB7XG4gICAgICAgIHJldHVybiBsYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgdHdvIGRpZmZlcmVudCBtYXRjaGVzIGhhdmUgY29tcGxldGUgb3ZlcmxhcCB3aXRoIGVhY2ggb3RoZXJcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQxICAgc3RhcnQgcG9zaXRpb24gb2YgZXhpc3RpbmcgbWF0Y2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQxICAgICBlbmQgcG9zaXRpb24gb2YgZXhpc3RpbmcgbWF0Y2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydDIgICBzdGFydCBwb3NpdGlvbiBvZiBuZXcgbWF0Y2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQyICAgICBlbmQgcG9zaXRpb24gb2YgbmV3IG1hdGNoXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ29tcGxldGVPdmVybGFwKHN0YXJ0MSwgZW5kMSwgc3RhcnQyLCBlbmQyKSB7XG5cbiAgICAvLyBJZiB0aGUgc3RhcnRpbmcgYW5kIGVuZCBwb3NpdGlvbnMgYXJlIGV4YWN0bHkgdGhlIHNhbWVcbiAgICAvLyB0aGVuIHRoZSBmaXJzdCBvbmUgc2hvdWxkIHN0YXkgYW5kIHRoaXMgb25lIHNob3VsZCBiZSBpZ25vcmVkLlxuICAgIGlmIChzdGFydDIgPT09IHN0YXJ0MSAmJiBlbmQyID09PSBlbmQxKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhcnQyIDw9IHN0YXJ0MSAmJiBlbmQyID49IGVuZDE7XG59XG5cbi8qKlxuICogRW5jb2RlcyA8IGFuZCA+IGFzIGh0bWwgZW50aXRpZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gaHRtbEVudGl0aWVzKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpLnJlcGxhY2UoLyYoPyFbXFx3XFwjXSs7KS9nLCAnJmFtcDsnKTtcbn1cblxuLyoqXG4gKiBGaW5kcyBvdXQgdGhlIHBvc2l0aW9uIG9mIGdyb3VwIG1hdGNoIGZvciBhIHJlZ3VsYXIgZXhwcmVzc2lvblxuICpcbiAqIEBzZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTg1NTk0L2hvdy10by1maW5kLWluZGV4LW9mLWdyb3Vwcy1pbi1tYXRjaFxuICogQHBhcmFtIHtPYmplY3R9IG1hdGNoXG4gKiBAcGFyYW0ge251bWJlcn0gZ3JvdXBOdW1iZXJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2ZHcm91cChtYXRjaCwgZ3JvdXBOdW1iZXIpIHtcbiAgICBsZXQgaW5kZXggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBncm91cE51bWJlcjsgKytpKSB7XG4gICAgICAgIGlmIChtYXRjaFtpXSkge1xuICAgICAgICAgICAgaW5kZXggKz0gbWF0Y2hbaV0ubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYSBuZXcgbWF0Y2ggaW50ZXJzZWN0cyB3aXRoIGFuIGV4aXN0aW5nIG9uZVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydDEgICAgc3RhcnQgcG9zaXRpb24gb2YgZXhpc3RpbmcgbWF0Y2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQxICAgICAgZW5kIHBvc2l0aW9uIG9mIGV4aXN0aW5nIG1hdGNoXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQyICAgIHN0YXJ0IHBvc2l0aW9uIG9mIG5ldyBtYXRjaFxuICogQHBhcmFtIHtudW1iZXJ9IGVuZDIgICAgICBlbmQgcG9zaXRpb24gb2YgbmV3IG1hdGNoXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0cyhzdGFydDEsIGVuZDEsIHN0YXJ0MiwgZW5kMikge1xuICAgIGlmIChzdGFydDIgPj0gc3RhcnQxICYmIHN0YXJ0MiA8IGVuZDEpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZDIgPiBzdGFydDEgJiYgZW5kMiA8IGVuZDE7XG59XG5cbi8qKlxuICogU29ydHMgYW4gb2JqZWN0cyBrZXlzIGJ5IGluZGV4IGRlc2NlbmRpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgY29uc3QgbG9jYXRpb25zID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGxvY2F0aW9uIGluIG9iamVjdCkge1xuICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGxvY2F0aW9uKSkge1xuICAgICAgICAgICAgbG9jYXRpb25zLnB1c2gobG9jYXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbnVtZXJpYyBkZXNjZW5kaW5nXG4gICAgcmV0dXJuIGxvY2F0aW9ucy5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG59XG5cbi8qKlxuICogU3Vic3RyaW5nIHJlcGxhY2UgY2FsbCB0byByZXBsYWNlIHBhcnQgb2YgYSBzdHJpbmcgYXQgYSBjZXJ0YWluIHBvc2l0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uICAgICAgICAgdGhlIHBvc2l0aW9uIHdoZXJlIHRoZSByZXBsYWNlbWVudFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkIGhhcHBlblxuICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2UgICAgICAgICAgdGhlIHRleHQgd2Ugd2FudCB0byByZXBsYWNlXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZVdpdGggICAgICB0aGUgdGV4dCB3ZSB3YW50IHRvIHJlcGxhY2UgaXQgd2l0aFxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgICAgICAgICAgICAgdGhlIGNvZGUgd2UgYXJlIGRvaW5nIHRoZSByZXBsYWNpbmcgaW5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VBdFBvc2l0aW9uKHBvc2l0aW9uLCByZXBsYWNlLCByZXBsYWNlV2l0aCwgY29kZSkge1xuICAgIGNvbnN0IHN1YlN0cmluZyA9IGNvZGUuc3Vic3RyKHBvc2l0aW9uKTtcbiAgICByZXR1cm4gY29kZS5zdWJzdHIoMCwgcG9zaXRpb24pICsgc3ViU3RyaW5nLnJlcGxhY2UocmVwbGFjZSwgcmVwbGFjZVdpdGgpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSB1c2FibGUgd2ViIHdvcmtlciBmcm9tIGFuIGFub255bW91cyBmdW5jdGlvblxuICpcbiAqIG1vc3RseSBib3Jyb3dlZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXZlcm8vd29ya2VyLWNyZWF0ZVxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0ge1ByaXNtfSBQcmlzbVxuICogQHJldHVybiB7V29ya2VyfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29ya2VyKGZuLCBQcmlzbSkge1xuICAgIGlmIChpc05vZGUoKSkge1xuICAgICAgICAvKiBnbG9iYWxzIGdsb2JhbCwgcmVxdWlyZSwgX19maWxlbmFtZSAqL1xuICAgICAgICBnbG9iYWwuV29ya2VyID0gcmVxdWlyZSgnd2Vid29ya2VyLXRocmVhZHMnKS5Xb3JrZXI7XG4gICAgICAgIHJldHVybiBuZXcgV29ya2VyKF9fZmlsZW5hbWUpO1xuICAgIH1cblxuICAgIGNvbnN0IHByaXNtRnVuY3Rpb24gPSBQcmlzbS50b1N0cmluZygpO1xuXG4gICAgbGV0IGNvZGUgPSBrZXlzLnRvU3RyaW5nKCk7XG4gICAgY29kZSArPSBodG1sRW50aXRpZXMudG9TdHJpbmcoKTtcbiAgICBjb2RlICs9IGhhc0NvbXBsZXRlT3ZlcmxhcC50b1N0cmluZygpO1xuICAgIGNvZGUgKz0gaW50ZXJzZWN0cy50b1N0cmluZygpO1xuICAgIGNvZGUgKz0gcmVwbGFjZUF0UG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICBjb2RlICs9IGluZGV4T2ZHcm91cC50b1N0cmluZygpO1xuICAgIGNvZGUgKz0gcHJpc21GdW5jdGlvbjtcblxuICAgIC8vIFRoaXMgaXMgYW4gYXdmdWwgaGFjaywgYnV0IHNvbWV0aGluZyB0byBkbyB3aXRoIGhvdyB1Z2xpZnkgcmVuYW1lcyBzdHVmZlxuICAgIC8vIGFuZCByb2xsdXAgbWVhbnMgdGhhdCB0aGUgdmFyaWFibGUgdGhlIHdvcmtlci5qcyBpcyB1c2luZyB0byByZWZlcmVuY2VcbiAgICAvLyBQcmlzbSB3aWxsIG5vdCBiZSB0aGUgc2FtZSBvbmUgYXZhaWxhYmxlIGluIHRoaXMgY29udGV4dFxuICAgIGNvbnN0IHByaXNtTmFtZSA9IHByaXNtRnVuY3Rpb24ubWF0Y2goL2Z1bmN0aW9uIChcXHcrPylcXCgvKVsxXTtcbiAgICBsZXQgc3RyID0gZm4udG9TdHJpbmcoKTtcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvPW5ldyBcXHcrLywgYD0gbmV3ICR7cHJpc21OYW1lfWApO1xuXG4gICAgY29uc3QgZnVsbFN0cmluZyA9IGAke2NvZGV9XFx0dGhpcy5vbm1lc3NhZ2UgPSR7c3RyfWA7XG5cbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2Z1bGxTdHJpbmddLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pO1xuICAgIHJldHVybiBuZXcgV29ya2VyKCh3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwpLmNyZWF0ZU9iamVjdFVSTChibG9iKSk7XG59XG4iLCJpbXBvcnQgeyByZXBsYWNlQXRQb3NpdGlvbiwgaW5kZXhPZkdyb3VwLCBrZXlzLCBodG1sRW50aXRpZXMsIGhhc0NvbXBsZXRlT3ZlcmxhcCwgaW50ZXJzZWN0cyB9IGZyb20gJy4vdXRpbCc7XG5cbi8qKlxuICogUHJpc20gaXMgYSBjbGFzcyB1c2VkIHRvIGhpZ2hsaWdodCBpbmRpdmlkdWFsIGJsb2NrcyBvZiBjb2RlXG4gKlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIFByaXNtIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPYmplY3Qgb2YgcmVwbGFjZW1lbnRzIHRvIHByb2Nlc3MgYXQgdGhlIGVuZCBvZiB0aGUgcHJvY2Vzc2luZ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExhbmd1YWdlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIFByaXNtIG9iamVjdFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0IGN1cnJlbnRMYW5ndWFnZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogT2JqZWN0IG9mIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb25zIG9mIGJsb2NrcyB0byBiZSByZXBsYWNlZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRQb3NpdGlvbnMgPSB7fTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgbWF0Y2ggcGFzc2VkIGluIGZhbGxzIGluc2lkZSBvZiBhbiBleGlzdGluZyBtYXRjaC5cbiAgICAgICAgICogVGhpcyBwcmV2ZW50cyBhIHJlZ2V4IHBhdHRlcm4gZnJvbSBtYXRjaGluZyBpbnNpZGUgb2YgYW5vdGhlciBwYXR0ZXJuXG4gICAgICAgICAqIHRoYXQgbWF0Y2hlcyBhIGxhcmdlciBhbW91bnQgb2YgY29kZS5cbiAgICAgICAgICpcbiAgICAgICAgICogRm9yIGV4YW1wbGUgdGhpcyBwcmV2ZW50cyBhIGtleXdvcmQgZnJvbSBtYXRjaGluZyBgZnVuY3Rpb25gIGlmIHRoZXJlXG4gICAgICAgICAqIGlzIGFscmVhZHkgYSBtYXRjaCBmb3IgYGZ1bmN0aW9uICguKilgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgICAgc3RhcnQgcG9zaXRpb24gb2YgbmV3IG1hdGNoXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgICAgICBlbmQgcG9zaXRpb24gb2YgbmV3IG1hdGNoXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfbWF0Y2hJc0luc2lkZU90aGVyTWF0Y2goc3RhcnQsIGVuZCkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHJlcGxhY2VtZW50UG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gcGFyc2VJbnQoa2V5LCAxMCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGJsb2NrIGNvbXBsZXRlbHkgb3ZlcmxhcHMgd2l0aCBhbm90aGVyIGJsb2NrXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBzaG91bGQgcmVtb3ZlIHRoZSBvdGhlciBibG9jayBhbmQgcmV0dXJuIGBmYWxzZWAuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NvbXBsZXRlT3ZlcmxhcChrZXksIHJlcGxhY2VtZW50UG9zaXRpb25zW2tleV0sIHN0YXJ0LCBlbmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXBsYWNlbWVudFBvc2l0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVwbGFjZW1lbnRzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdHMoa2V5LCByZXBsYWNlbWVudFBvc2l0aW9uc1trZXldLCBzdGFydCwgZW5kKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYWtlcyBhIHN0cmluZyBvZiBjb2RlIGFuZCB3cmFwcyBpdCBpbiBhIHNwYW4gdGFnIGJhc2VkIG9uIHRoZSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lICAgICAgICBuYW1lIG9mIHRoZSBwYXR0ZXJuIChpZSBrZXl3b3JkLnJlZ2V4KVxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAgICAgICAgYmxvY2sgb2YgY29kZSB0byB3cmFwXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBnbG9iYWxDbGFzcyBjbGFzcyB0byBhcHBseSB0byBldmVyeSBzcGFuXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF93cmFwQ29kZUluU3BhbihuYW1lLCBjb2RlKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gbmFtZS5yZXBsYWNlKC9cXC4vZywgJyAnKTtcblxuICAgICAgICAgICAgY29uc3QgZ2xvYmFsQ2xhc3MgPSBvcHRpb25zLmdsb2JhbENsYXNzO1xuICAgICAgICAgICAgaWYgKGdsb2JhbENsYXNzKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lICs9IGAgJHtnbG9iYWxDbGFzc31gO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtjb2RlfTwvc3Bhbj5gO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2Nlc3MgcmVwbGFjZW1lbnRzIGluIHRoZSBzdHJpbmcgb2YgY29kZSB0byBhY3R1YWxseSB1cGRhdGVcbiAgICAgICAgICogdGhlIG1hcmt1cFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZSAgICAgICAgIHRoZSBjb2RlIHRvIHByb2Nlc3MgcmVwbGFjZW1lbnRzIGluXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9wcm9jZXNzUmVwbGFjZW1lbnRzKGNvZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGtleXMocmVwbGFjZW1lbnRzKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgcG9zaXRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudHNbcG9zaXRpb25dO1xuICAgICAgICAgICAgICAgIGNvZGUgPSByZXBsYWNlQXRQb3NpdGlvbihwb3NpdGlvbiwgcmVwbGFjZW1lbnQucmVwbGFjZSwgcmVwbGFjZW1lbnQud2l0aCwgY29kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdCBpcyBzbyB3ZSBjYW4gY3JlYXRlIGEgbmV3IHJlZ2V4IG9iamVjdCBmb3IgZWFjaCBjYWxsIHRvXG4gICAgICAgICAqIF9wcm9jZXNzUGF0dGVybiB0byBhdm9pZCBzdGF0ZSBjYXJyeWluZyBvdmVyIHdoZW4gcnVubmluZyBleGVjXG4gICAgICAgICAqIG11bHRpcGxlIHRpbWVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBUaGUgZ2xvYmFsIGZsYWcgc2hvdWxkIG5vdCBiZSBjYXJyaWVkIG92ZXIgYmVjYXVzZSB3ZSBhcmUgc2ltdWxhdGluZ1xuICAgICAgICAgKiBpdCBieSBwcm9jZXNzaW5nIHRoZSByZWdleCBpbiBhIGxvb3Agc28gd2Ugb25seSBjYXJlIGFib3V0IHRoZSBmaXJzdFxuICAgICAgICAgKiBtYXRjaCBpbiBlYWNoIHN0cmluZy4gVGhpcyBhbHNvIHNlZW1zIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UgcXVpdGUgYVxuICAgICAgICAgKiBiaXQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7UmVnRXhwfSByZWdleFxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfY2xvbmVSZWdleChyZWdleCkge1xuICAgICAgICAgICAgbGV0IGZsYWdzID0gJyc7XG5cbiAgICAgICAgICAgIGlmIChyZWdleC5pZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ2knO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVnZXgubXVsdGlsaW5lKSB7XG4gICAgICAgICAgICAgICAgZmxhZ3MgKz0gJ20nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleC5zb3VyY2UsIGZsYWdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXRjaGVzIGEgcmVnZXggcGF0dGVybiBhZ2FpbnN0IGEgYmxvY2sgb2YgY29kZSwgZmluZHMgYWxsIG1hdGNoZXNcbiAgICAgICAgICogdGhhdCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhbmQgc3RvcmVzIHRoZSBwb3NpdGlvbnMgb2Ygd2hlcmUgdGhleVxuICAgICAgICAgKiBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aGluIHRoZSBzdHJpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIFRoaXMgaXMgd2hlcmUgcHJldHR5IG11Y2ggYWxsIHRoZSB3b3JrIGlzIGRvbmUgYnV0IGl0IHNob3VsZCBub3RcbiAgICAgICAgICogYmUgY2FsbGVkIGRpcmVjdGx5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gcGF0dGVyblxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29kZVxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0XG4gICAgICAgICAqIEByZXR1cm4ge21peGVkfVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Byb2Nlc3NQYXR0ZXJuKHBhdHRlcm4sIGNvZGUsIG9mZnNldCA9IDApIHtcbiAgICAgICAgICAgIGxldCByZWdleCA9IHBhdHRlcm4ucGF0dGVybjtcbiAgICAgICAgICAgIGlmICghcmVnZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNpbmNlIHdlIGFyZSBzaW11bGF0aW5nIGdsb2JhbCByZWdleCBtYXRjaGluZyB3ZSBuZWVkIHRvIGFsc29cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0byBzdG9wIGFmdGVyIG9uZSBtYXRjaCBpZiB0aGUgcGF0dGVybiBpcyBub3QgZ2xvYmFsXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTdG9wID0gIXJlZ2V4Lmdsb2JhbDtcblxuICAgICAgICAgICAgcmVnZXggPSBfY2xvbmVSZWdleChyZWdleCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWMoY29kZSk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUcmVhdCBtYXRjaCAwIHRoZSBzYW1lIHdheSBhcyBuYW1lXG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4ubmFtZSAmJiBwYXR0ZXJuLm1hdGNoZXMgJiYgdHlwZW9mIHBhdHRlcm4ubWF0Y2hlc1swXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuLm5hbWUgPSBwYXR0ZXJuLm1hdGNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBhdHRlcm4ubWF0Y2hlc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlcGxhY2VtZW50ID0gbWF0Y2hbMF07XG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IG1hdGNoLmluZGV4ICsgb2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZW5kUG9zID0gbWF0Y2hbMF0ubGVuZ3RoICsgc3RhcnRQb3M7XG5cbiAgICAgICAgICAgIC8vIEluIHNvbWUgY2FzZXMgd2hlbiB0aGUgcmVnZXggbWF0Y2hlcyBhIGdyb3VwIHN1Y2ggYXMgXFxzKiBpdCBpc1xuICAgICAgICAgICAgLy8gcG9zc2libGUgZm9yIHRoZXJlIHRvIGJlIGEgbWF0Y2gsIGJ1dCBoYXZlIHRoZSBzdGFydCBwb3NpdGlvblxuICAgICAgICAgICAgLy8gZXF1YWwgdGhlIGVuZCBwb3NpdGlvbi4gSW4gdGhvc2UgY2FzZXMgd2Ugc2hvdWxkIGJlIGFibGUgdG8gc3RvcFxuICAgICAgICAgICAgLy8gbWF0Y2hpbmcuIE90aGVyd2lzZSB0aGlzIGNhbiBsZWFkIHRvIGFuIGluZmluaXRlIGxvb3AuXG4gICAgICAgICAgICBpZiAoc3RhcnRQb3MgPT09IGVuZFBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgYSBjaGlsZCBtYXRjaCBhbmQgaXQgZmFsbHMgaW5zaWRlIG9mIGFub3RoZXJcbiAgICAgICAgICAgIC8vIG1hdGNoIHRoYXQgYWxyZWFkeSBoYXBwZW5lZCB3ZSBzaG91bGQgc2tpcCBpdCBhbmQgY29udGludWVcbiAgICAgICAgICAgIC8vIHByb2Nlc3NpbmcuXG4gICAgICAgICAgICBpZiAoX21hdGNoSXNJbnNpZGVPdGhlck1hdGNoKHN0YXJ0UG9zLCBlbmRQb3MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtYWluaW5nOiBjb2RlLnN1YnN0cihlbmRQb3MgLSBvZmZzZXQpLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IGVuZFBvc1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2FsbGJhY2sgZm9yIHdoZW4gYSBtYXRjaCB3YXMgc3VjY2Vzc2Z1bGx5IHByb2Nlc3NlZFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBsXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBvbk1hdGNoU3VjY2VzcyhyZXBsKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIG1hdGNoIGhhcyBhIG5hbWUgdGhlbiB3cmFwIGl0IGluIGEgc3BhbiB0YWdcbiAgICAgICAgICAgICAgICBpZiAocGF0dGVybi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcGwgPSBfd3JhcENvZGVJblNwYW4ocGF0dGVybi5uYW1lLCByZXBsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgZGVidWdnaW5nXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1JlcGxhY2UgJyArIG1hdGNoWzBdICsgJyB3aXRoICcgKyByZXBsYWNlbWVudCArICcgYXQgcG9zaXRpb24gJyArIHN0YXJ0UG9zICsgJyB0byAnICsgZW5kUG9zKTtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHdoYXQgbmVlZHMgdG8gYmUgcmVwbGFjZWQgd2l0aCB3aGF0IGF0IHRoaXMgcG9zaXRpb25cbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudHNbc3RhcnRQb3NdID0ge1xuICAgICAgICAgICAgICAgICAgICAncmVwbGFjZSc6IG1hdGNoWzBdLFxuICAgICAgICAgICAgICAgICAgICAnd2l0aCc6IHJlcGxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHJhbmdlIG9mIHRoaXMgbWF0Y2ggc28gd2UgY2FuIHVzZSBpdCBmb3JcbiAgICAgICAgICAgICAgICAvLyBjb21wYXJpc29ucyB3aXRoIG90aGVyIG1hdGNoZXMgbGF0ZXIuXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRQb3NpdGlvbnNbc3RhcnRQb3NdID0gZW5kUG9zO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFN0b3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbWFpbmluZzogY29kZS5zdWJzdHIoZW5kUG9zIC0gb2Zmc2V0KSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiBlbmRQb3NcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEhlbHBlciBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBhIHN1YiBncm91cFxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBncm91cEtleSAgICAgIGluZGV4IG9mIGdyb3VwXG4gICAgICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBfcHJvY2Vzc0dyb3VwKGdyb3VwS2V5KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBtYXRjaFtncm91cEtleV07XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBubyBtYXRjaCBoZXJlIHRoZW4gbW92ZSBvblxuICAgICAgICAgICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gcGF0dGVybi5tYXRjaGVzW2dyb3VwS2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGdyb3VwLmxhbmd1YWdlO1xuXG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogUHJvY2VzcyBncm91cCBpcyB3aGF0IGdyb3VwIHdlIHNob3VsZCB1c2UgdG8gYWN0dWFsbHkgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAqIHRoaXMgbWF0Y2ggZ3JvdXAuXG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiBGb3IgZXhhbXBsZSBpZiB0aGUgc3ViZ3JvdXAgcGF0dGVybiBsb29rcyBsaWtlIHRoaXM6XG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiAyOiB7XG4gICAgICAgICAgICAgICAgICogICAgICduYW1lJzogJ2tleXdvcmQnLFxuICAgICAgICAgICAgICAgICAqICAgICAncGF0dGVybic6IC90cnVlL2dcbiAgICAgICAgICAgICAgICAgKiB9XG4gICAgICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAgICAgKiB0aGVuIHdlIHVzZSB0aGF0IGFzIGlzLCBidXQgaWYgaXQgbG9va3MgbGlrZSB0aGlzOlxuICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICogMjoge1xuICAgICAgICAgICAgICAgICAqICAgICAnbmFtZSc6ICdrZXl3b3JkJyxcbiAgICAgICAgICAgICAgICAgKiAgICAgJ21hdGNoZXMnOiB7XG4gICAgICAgICAgICAgICAgICogICAgICAgICAgJ25hbWUnOiAnc3BlY2lhbCcsXG4gICAgICAgICAgICAgICAgICogICAgICAgICAgJ3BhdHRlcm4nOiAvd2hhdGV2ZXIvZ1xuICAgICAgICAgICAgICAgICAqICAgICAgfVxuICAgICAgICAgICAgICAgICAqIH1cbiAgICAgICAgICAgICAgICAgKlxuICAgICAgICAgICAgICAgICAqIHdlIHRyZWF0IHRoZSAnbWF0Y2hlcycgcGFydCBhcyB0aGUgcGF0dGVybiBhbmQga2VlcFxuICAgICAgICAgICAgICAgICAqIHRoZSBuYW1lIGFyb3VuZCB0byB3cmFwIGl0IHdpdGggbGF0ZXJcbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cFRvUHJvY2VzcyA9IGdyb3VwLm5hbWUgJiYgZ3JvdXAubWF0Y2hlcyA/IGdyb3VwLm1hdGNoZXMgOiBncm91cDtcblxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIFRha2VzIHRoZSBjb2RlIGJsb2NrIG1hdGNoZWQgYXQgdGhpcyBncm91cCwgcmVwbGFjZXMgaXRcbiAgICAgICAgICAgICAgICAgKiB3aXRoIHRoZSBoaWdobGlnaHRlZCBibG9jaywgYW5kIG9wdGlvbmFsbHkgd3JhcHMgaXQgd2l0aFxuICAgICAgICAgICAgICAgICAqIGEgc3BhbiB3aXRoIGEgbmFtZVxuICAgICAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHBhc3NlZEJsb2NrXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VCbG9ja1xuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bGx9IG1hdGNoTmFtZVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNvbnN0IF9nZXRSZXBsYWNlbWVudCA9IGZ1bmN0aW9uKHBhc3NlZEJsb2NrLCByZXBsYWNlQmxvY2ssIG1hdGNoTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudCA9IHJlcGxhY2VBdFBvc2l0aW9uKGluZGV4T2ZHcm91cChtYXRjaCwgZ3JvdXBLZXkpLCBwYXNzZWRCbG9jaywgbWF0Y2hOYW1lID8gX3dyYXBDb2RlSW5TcGFuKG1hdGNoTmFtZSwgcmVwbGFjZUJsb2NrKSA6IHJlcGxhY2VCbG9jaywgcmVwbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBzdHJpbmcgdGhlbiB0aGlzIG1hdGNoIGlzIGRpcmVjdGx5IG1hcHBlZFxuICAgICAgICAgICAgICAgIC8vIHRvIHNlbGVjdG9yIHNvIGFsbCB3ZSBoYXZlIHRvIGRvIGlzIHdyYXAgaXQgaW4gYSBzcGFuXG4gICAgICAgICAgICAgICAgLy8gYW5kIGNvbnRpbnVlLlxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZ3JvdXAgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIF9nZXRSZXBsYWNlbWVudChibG9jaywgYmxvY2ssIGdyb3VwKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBsb2NhbENvZGU7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJpc20gPSBuZXcgUHJpc20ob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgc3VibGFuZ3VhZ2UgZ28gYW5kIHByb2Nlc3MgdGhlIGJsb2NrIHVzaW5nXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBsYW5ndWFnZVxuICAgICAgICAgICAgICAgIGlmIChsYW5ndWFnZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbENvZGUgPSBwcmlzbS5yZWZyYWN0KGJsb2NrLCBsYW5ndWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIF9nZXRSZXBsYWNlbWVudChibG9jaywgbG9jYWxDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRoZSBwcm9jZXNzIGdyb3VwIGNhbiBiZSBhIHNpbmdsZSBwYXR0ZXJuIG9yIGFuIGFycmF5IG9mXG4gICAgICAgICAgICAgICAgLy8gcGF0dGVybnMuIGBfcHJvY2Vzc0NvZGVXaXRoUGF0dGVybnNgIGFsd2F5cyBleHBlY3RzIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgLy8gc28gd2UgY29udmVydCBpdCBoZXJlLlxuICAgICAgICAgICAgICAgIGxvY2FsQ29kZSA9IHByaXNtLnJlZnJhY3QoYmxvY2ssIGN1cnJlbnRMYW5ndWFnZSwgZ3JvdXBUb1Byb2Nlc3MubGVuZ3RoID8gZ3JvdXBUb1Byb2Nlc3MgOiBbZ3JvdXBUb1Byb2Nlc3NdKTtcbiAgICAgICAgICAgICAgICBfZ2V0UmVwbGFjZW1lbnQoYmxvY2ssIGxvY2FsQ29kZSwgZ3JvdXAubWF0Y2hlcyA/IGdyb3VwLm5hbWUgOiAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBwYXR0ZXJuIGhhcyBzdWIgbWF0Y2hlcyBmb3IgZGlmZmVyZW50IGdyb3VwcyBpbiB0aGUgcmVnZXhcbiAgICAgICAgICAgIC8vIHRoZW4gd2Ugc2hvdWxkIHByb2Nlc3MgdGhlbSBvbmUgYXQgYSB0aW1lIGJ5IHJ1bm5pbmcgdGhlbSB0aHJvdWdoXG4gICAgICAgICAgICAvLyB0aGUgX3Byb2Nlc3NHcm91cCBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgbmV3IHJlcGxhY2VtZW50LlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFdlIHVzZSB0aGUgYGtleXNgIGZ1bmN0aW9uIHRvIHJ1biB0aHJvdWdoIHRoZW0gYmFja3dhcmRzIGJlY2F1c2VcbiAgICAgICAgICAgIC8vIHRoZSBtYXRjaCBwb3NpdGlvbiBvZiBlYXJsaWVyIG1hdGNoZXMgd2lsbCBub3QgY2hhbmdlIGRlcGVuZGluZ1xuICAgICAgICAgICAgLy8gb24gd2hhdCBnZXRzIHJlcGxhY2VkIGluIGxhdGVyIG1hdGNoZXMuXG4gICAgICAgICAgICBjb25zdCBncm91cEtleXMgPSBrZXlzKHBhdHRlcm4ubWF0Y2hlcyk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwS2V5IG9mIGdyb3VwS2V5cykge1xuICAgICAgICAgICAgICAgIF9wcm9jZXNzR3JvdXAoZ3JvdXBLZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaW5hbGx5LCBjYWxsIGBvbk1hdGNoU3VjY2Vzc2Agd2l0aCB0aGUgcmVwbGFjZW1lbnRcbiAgICAgICAgICAgIHJldHVybiBvbk1hdGNoU3VjY2VzcyhyZXBsYWNlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvY2Vzc2VzIGEgYmxvY2sgb2YgY29kZSB1c2luZyBzcGVjaWZpZWQgcGF0dGVybnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gcGF0dGVybnNcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Byb2Nlc3NDb2RlV2l0aFBhdHRlcm5zKGNvZGUsIHBhdHRlcm5zKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhdHRlcm4gb2YgcGF0dGVybnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gX3Byb2Nlc3NQYXR0ZXJuKHBhdHRlcm4sIGNvZGUpO1xuICAgICAgICAgICAgICAgIHdoaWxlIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gX3Byb2Nlc3NQYXR0ZXJuKHBhdHRlcm4sIHJlc3VsdC5yZW1haW5pbmcsIHJlc3VsdC5vZmZzZXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV2UgYXJlIGRvbmUgcHJvY2Vzc2luZyB0aGUgcGF0dGVybnMgc28gd2Ugc2hvdWxkIGFjdHVhbGx5IHJlcGxhY2VcbiAgICAgICAgICAgIC8vIHdoYXQgbmVlZHMgdG8gYmUgcmVwbGFjZWQgaW4gdGhlIGNvZGUuXG4gICAgICAgICAgICByZXR1cm4gX3Byb2Nlc3NSZXBsYWNlbWVudHMoY29kZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogUmV0dXJucyBhIGxpc3Qgb2YgcmVnZXggcGF0dGVybnMgZm9yIHRoaXMgbGFuZ3VhZ2VcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0UGF0dGVybnNGb3JMYW5ndWFnZShsYW5ndWFnZSkge1xuICAgICAgICAgICAgbGV0IHBhdHRlcm5zID0gb3B0aW9ucy5wYXR0ZXJuc1tsYW5ndWFnZV0gfHwgW107XG4gICAgICAgICAgICB3aGlsZSAob3B0aW9ucy5pbmhlcml0ZW5jZU1hcFtsYW5ndWFnZV0pIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZSA9IG9wdGlvbnMuaW5oZXJpdGVuY2VNYXBbbGFuZ3VhZ2VdO1xuICAgICAgICAgICAgICAgIHBhdHRlcm5zID0gcGF0dGVybnMuY29uY2F0KG9wdGlvbnMucGF0dGVybnNbbGFuZ3VhZ2VdIHx8IFtdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhdHRlcm5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRha2VzIGEgc3RyaW5nIG9mIGNvZGUgYW5kIGhpZ2hsaWdodHMgaXQgYWNjb3JkaW5nIHRvIHRoZSBsYW5ndWFnZVxuICAgICAgICAgKiBzcGVjaWZpZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvZGVcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmd1YWdlXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXR0ZXJucyBvcHRpb25hbGx5IHNwZWNpZnkgYSBsaXN0IG9mIHBhdHRlcm5zXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9oaWdobGlnaHRCbG9ja0Zvckxhbmd1YWdlKGNvZGUsIGxhbmd1YWdlLCBwYXR0ZXJucykge1xuICAgICAgICAgICAgY3VycmVudExhbmd1YWdlID0gbGFuZ3VhZ2U7XG4gICAgICAgICAgICBwYXR0ZXJucyA9IHBhdHRlcm5zIHx8IGdldFBhdHRlcm5zRm9yTGFuZ3VhZ2UobGFuZ3VhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIF9wcm9jZXNzQ29kZVdpdGhQYXR0ZXJucyhodG1sRW50aXRpZXMoY29kZSksIHBhdHRlcm5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVmcmFjdCA9IF9oaWdobGlnaHRCbG9ja0Zvckxhbmd1YWdlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpc207XG4iLCJpbXBvcnQgUHJpc20gZnJvbSAnLi9wcmlzbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhaW5ib3dXb3JrZXIoZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlLmRhdGE7XG5cbiAgICBjb25zdCBwcmlzbSA9IG5ldyBQcmlzbShtZXNzYWdlLm9wdGlvbnMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHByaXNtLnJlZnJhY3QobWVzc2FnZS5jb2RlLCBtZXNzYWdlLmxhbmcpO1xuXG4gICAgZnVuY3Rpb24gX3JlcGx5KCkge1xuICAgICAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGlkOiBtZXNzYWdlLmlkLFxuICAgICAgICAgICAgbGFuZzogbWVzc2FnZS5sYW5nLFxuICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEkgcmVhbGl6ZWQgZG93biB0aGUgcm9hZCBJIG1pZ2h0IGxvb2sgYXQgdGhpcyBhbmQgd29uZGVyIHdoYXQgaXMgZ29pbmcgb25cbiAgICAvLyBzbyBwcm9iYWJseSBpdCBpcyBub3QgYSBiYWQgaWRlYSB0byBsZWF2ZSBhIGNvbW1lbnQuXG4gICAgLy9cbiAgICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHJpZ2h0IG5vdyB0aGUgbm9kZSBsaWJyYXJ5IGZvciBzaW11bGF0aW5nIHdlYlxuICAgIC8vIHdvcmtlcnMg4oCcd2Vid29ya2VyLXRocmVhZHPigJ0gd2lsbCBrZWVwIHRoZSB3b3JrZXIgb3BlbiBhbmQgaXQgY2F1c2VzXG4gICAgLy8gc2NyaXB0cyBydW5uaW5nIGZyb20gdGhlIGNvbW1hbmQgbGluZSB0byBoYW5nIHVubGVzcyB0aGUgd29ya2VyIGlzXG4gICAgLy8gZXhwbGljaXRseSBjbG9zZWQuXG4gICAgLy9cbiAgICAvLyBUaGlzIG1lYW5zIGZvciBub2RlIHdlIHdpbGwgc3Bhd24gYSBuZXcgdGhyZWFkIGZvciBldmVyeSBhc3luY2hyb25vdXNcbiAgICAvLyBibG9jayB3ZSBhcmUgaGlnaGxpZ2h0aW5nLCBidXQgaW4gdGhlIGJyb3dzZXIgd2Ugd2lsbCBrZWVwIGEgc2luZ2xlXG4gICAgLy8gd29ya2VyIG9wZW4gZm9yIGFsbCByZXF1ZXN0cy5cbiAgICBpZiAobWVzc2FnZS5pc05vZGUpIHtcbiAgICAgICAgX3JlcGx5KCk7XG4gICAgICAgIHNlbGYuY2xvc2UoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBfcmVwbHkoKTtcbiAgICB9LCBtZXNzYWdlLm9wdGlvbnMuZGVsYXkgKiAxMDAwKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTItMjAxNiBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIFJhaW5ib3cgaXMgYSBzaW1wbGUgY29kZSBzeW50YXggaGlnaGxpZ2h0ZXJcbiAqXG4gKiBAc2VlIHJhaW5ib3djby5kZVxuICovXG5pbXBvcnQgUHJpc20gZnJvbSAnLi9wcmlzbSc7XG5pbXBvcnQgeyBpc05vZGUgYXMgdXRpbElzTm9kZSwgaXNXb3JrZXIgYXMgdXRpbElzV29ya2VyLCBjcmVhdGVXb3JrZXIsIGdldExhbmd1YWdlRm9yQmxvY2sgfSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHJhaW5ib3dXb3JrZXIgZnJvbSAnLi93b3JrZXInO1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIHRoZSBsYW5ndWFnZSBwYXR0ZXJucyBzcGVjaWZpZWQgZm9yIGVhY2ggbGFuZ3VhZ2VcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBwYXR0ZXJucyA9IHt9O1xuXG4vKipcbiAqIEFuIG9iamVjdCBvZiBsYW5ndWFnZXMgbWFwcGluZyB0byB3aGF0IGxhbmd1YWdlIHRoZXkgc2hvdWxkIGluaGVyaXQgZnJvbVxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmNvbnN0IGluaGVyaXRlbmNlTWFwID0ge307XG5cbi8qKlxuICogQSBtYXBwaW5nIG9mIGxhbmd1YWdlIGFsaWFzZXNcbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5jb25zdCBhbGlhc2VzID0ge307XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgdGhlIGFjdHVhbCByYWluYm93IG9iamVjdFxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmxldCBSYWluYm93ID0ge307XG5cbi8qKlxuICogQ2FsbGJhY2sgdG8gZmlyZSBhZnRlciBlYWNoIGJsb2NrIGlzIGhpZ2hsaWdodGVkXG4gKlxuICogQHR5cGUge251bGx8RnVuY3Rpb259XG4gKi9cbmxldCBvbkhpZ2hsaWdodENhbGxiYWNrO1xuXG5jb25zdCBpc05vZGUgPSB1dGlsSXNOb2RlKCk7XG5jb25zdCBpc1dvcmtlciA9IHV0aWxJc1dvcmtlcigpO1xuXG5sZXQgY2FjaGVkV29ya2VyID0gbnVsbDtcbmZ1bmN0aW9uIF9nZXRXb3JrZXIoKSB7XG4gICAgaWYgKGlzTm9kZSB8fCBjYWNoZWRXb3JrZXIgPT09IG51bGwpIHtcbiAgICAgICAgY2FjaGVkV29ya2VyID0gY3JlYXRlV29ya2VyKHJhaW5ib3dXb3JrZXIsIFByaXNtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVkV29ya2VyO1xufVxuXG4vKipcbiAqIEhlbHBlciBmb3IgbWF0Y2hpbmcgdXAgY2FsbGJhY2tzIGRpcmVjdGx5IHdpdGggdGhlXG4gKiBwb3N0IG1lc3NhZ2UgcmVxdWVzdHMgdG8gYSB3ZWIgd29ya2VyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBtZXNzYWdlICAgICAgZGF0YSB0byBzZW5kIHRvIHdlYiB3b3JrZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICAgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHdvcmtlciB0byByZXBseSB0b1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gX21lc3NhZ2VXb3JrZXIobWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB3b3JrZXIgPSBfZ2V0V29ya2VyKCk7XG5cbiAgICBmdW5jdGlvbiBfbGlzdGVuKGUpIHtcbiAgICAgICAgaWYgKGUuZGF0YS5pZCA9PT0gbWVzc2FnZS5pZCkge1xuICAgICAgICAgICAgY2FsbGJhY2soZS5kYXRhKTtcbiAgICAgICAgICAgIHdvcmtlci5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgX2xpc3Rlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIF9saXN0ZW4pO1xuICAgIHdvcmtlci5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBCcm93c2VyIE9ubHkgLSBIYW5kbGVzIHJlc3BvbnNlIGZyb20gd2ViIHdvcmtlciwgdXBkYXRlcyBET00gd2l0aFxuICogcmVzdWx0aW5nIGNvZGUsIGFuZCBmaXJlcyBjYWxsYmFja1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IHdhaXRpbmdPblxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIF9nZW5lcmF0ZUhhbmRsZXIoZWxlbWVudCwgd2FpdGluZ09uLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBmdW5jdGlvbiBfaGFuZGxlUmVzcG9uc2VGcm9tV29ya2VyKGRhdGEpIHtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBkYXRhLnJlc3VsdDtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZS50YWdOYW1lID09PSAnUFJFJykge1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKGUpID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChlLmFuaW1hdGlvbk5hbWUgPT09ICdmYWRlLWluJykge1xuICAgICAgICAvLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RlY3JlYXNlLWRlbGF5Jyk7XG4gICAgICAgIC8vICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIGlmIChvbkhpZ2hsaWdodENhbGxiYWNrKSB7XG4gICAgICAgICAgICBvbkhpZ2hsaWdodENhbGxiYWNrKGVsZW1lbnQsIGRhdGEubGFuZyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoLS13YWl0aW5nT24uYyA9PT0gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICogR2V0cyBvcHRpb25zIG5lZWRlZCB0byBwYXNzIGludG8gUHJpc21cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5mdW5jdGlvbiBfZ2V0UHJpc21PcHRpb25zKG9wdGlvbnMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYXR0ZXJucyxcbiAgICAgICAgaW5oZXJpdGVuY2VNYXAsXG4gICAgICAgIGFsaWFzZXMsXG4gICAgICAgIGdsb2JhbENsYXNzOiBvcHRpb25zLmdsb2JhbENsYXNzLFxuICAgICAgICBkZWxheTogIWlzTmFOKG9wdGlvbnMuZGVsYXkpID8gb3B0aW9ucy5kZWxheSA6IDBcbiAgICB9O1xufVxuXG4vKipcbiAqIEdldHMgZGF0YSB0byBzZW5kIHRvIHdlYndvcmtlclxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gY29kZVxuICogQHBhcmFtICB7c3RyaW5nfSBsYW5nXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9nZXRXb3JrZXJEYXRhKGNvZGUsIGxhbmcpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHt9O1xuICAgIGlmICh0eXBlb2YgbGFuZyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IGxhbmc7XG4gICAgICAgIGxhbmcgPSBvcHRpb25zLmxhbmd1YWdlO1xuICAgIH1cblxuICAgIGxhbmcgPSBhbGlhc2VzW2xhbmddIHx8IGxhbmc7XG5cbiAgICBjb25zdCB3b3JrZXJEYXRhID0ge1xuICAgICAgICBpZDogU3RyaW5nLmZyb21DaGFyQ29kZSg2NSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KSkgKyBEYXRlLm5vdygpLFxuICAgICAgICBjb2RlLFxuICAgICAgICBsYW5nLFxuICAgICAgICBvcHRpb25zOiBfZ2V0UHJpc21PcHRpb25zKG9wdGlvbnMpLFxuICAgICAgICBpc05vZGVcbiAgICB9O1xuXG4gICAgcmV0dXJuIHdvcmtlckRhdGE7XG59XG5cbi8qKlxuICogQnJvd3NlciBPbmx5IC0gU2VuZHMgbWVzc2FnZXMgdG8gd2ViIHdvcmtlciB0byBoaWdobGlnaHQgZWxlbWVudHMgcGFzc2VkXG4gKiBpblxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGNvZGVCbG9ja3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBfaGlnaGxpZ2h0Q29kZUJsb2Nrcyhjb2RlQmxvY2tzLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHdhaXRpbmdPbiA9IHsgYzogMCB9O1xuICAgIGZvciAoY29uc3QgYmxvY2sgb2YgY29kZUJsb2Nrcykge1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IGdldExhbmd1YWdlRm9yQmxvY2soYmxvY2spO1xuICAgICAgICBpZiAoYmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdyYWluYm93JykgfHwgIWxhbmd1YWdlKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoaXMgY2FuY2VscyB0aGUgcGVuZGluZyBhbmltYXRpb24gdG8gZmFkZSB0aGUgY29kZSBpbiBvbiBsb2FkXG4gICAgICAgIC8vIHNpbmNlIHdlIHdhbnQgdG8gZGVsYXkgZG9pbmcgdGhpcyB1bnRpbCBpdCBpcyBhY3R1YWxseVxuICAgICAgICAvLyBoaWdobGlnaHRlZFxuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKCdsb2FkaW5nJyk7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ3JhaW5ib3cnKTtcblxuICAgICAgICAvLyBXZSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBhbHNvIGFkZCB0aGUgbG9hZGluZyBjbGFzcyB0byB0aGUgcHJlIHRhZ1xuICAgICAgICAvLyBiZWNhdXNlIHRoYXQgaXMgaG93IHdlIHdpbGwga25vdyB0byBzaG93IGEgcHJlbG9hZGVyXG4gICAgICAgIGlmIChibG9jay5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdQUkUnKSB7XG4gICAgICAgICAgICBibG9jay5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2xvYWRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdsb2JhbENsYXNzID0gYmxvY2suZ2V0QXR0cmlidXRlKCdkYXRhLWdsb2JhbC1jbGFzcycpO1xuICAgICAgICBjb25zdCBkZWxheSA9IHBhcnNlSW50KGJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1kZWxheScpLCAxMCk7XG5cbiAgICAgICAgKyt3YWl0aW5nT24uYztcbiAgICAgICAgX21lc3NhZ2VXb3JrZXIoX2dldFdvcmtlckRhdGEoYmxvY2suaW5uZXJIVE1MLCB7IGxhbmd1YWdlLCBnbG9iYWxDbGFzcywgZGVsYXkgfSksIF9nZW5lcmF0ZUhhbmRsZXIoYmxvY2ssIHdhaXRpbmdPbiwgY2FsbGJhY2spKTtcbiAgICB9XG5cbiAgICBpZiAod2FpdGluZ09uLmMgPT09IDApIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9hZGRQcmVsb2FkZXIocHJlQmxvY2spIHtcbiAgICBjb25zdCBwcmVsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcmVsb2FkZXIuY2xhc3NOYW1lID0gJ3ByZWxvYWRlcic7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgcHJlbG9hZGVyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICB9XG4gICAgcHJlQmxvY2suYXBwZW5kQ2hpbGQocHJlbG9hZGVyKTtcbn1cblxuLyoqXG4gKiBCcm93c2VyIE9ubHkgLSBTdGFydCBoaWdobGlnaHRpbmcgYWxsIHRoZSBjb2RlIGJsb2Nrc1xuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gbm9kZSAgICAgICBIVE1MRWxlbWVudCB0byBzZWFyY2ggd2l0aGluXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gX2hpZ2hsaWdodChub2RlLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcblxuICAgIC8vIFRoZSBmaXJzdCBhcmd1bWVudCBjYW4gYmUgYW4gRXZlbnQgb3IgYSBET00gRWxlbWVudC5cbiAgICAvL1xuICAgIC8vIEkgd2FzIG9yaWdpbmFsbHkgY2hlY2tpbmcgaW5zdGFuY2VvZiBFdmVudCBidXQgdGhhdCBtYWRlIGl0IGJyZWFrXG4gICAgLy8gd2hlbiB1c2luZyBtb290b29scy5cbiAgICAvL1xuICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2NjYW1wYmVsbC9yYWluYm93L2lzc3Vlcy8zMlxuICAgIG5vZGUgPSBub2RlICYmIHR5cGVvZiBub2RlLmdldEVsZW1lbnRzQnlUYWdOYW1lID09PSAnZnVuY3Rpb24nID8gbm9kZSA6IGRvY3VtZW50O1xuXG4gICAgY29uc3QgcHJlQmxvY2tzID0gbm9kZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgncHJlJyk7XG4gICAgY29uc3QgY29kZUJsb2NrcyA9IG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKTtcbiAgICBjb25zdCBmaW5hbFByZUJsb2NrcyA9IFtdO1xuICAgIGNvbnN0IGZpbmFsQ29kZUJsb2NrcyA9IFtdO1xuXG4gICAgLy8gRmlyc3QgbG9vcCB0aHJvdWdoIGFsbCBwcmUgYmxvY2tzIHRvIGZpbmQgd2hpY2ggb25lcyB0byBoaWdobGlnaHRcbiAgICBmb3IgKGNvbnN0IHByZUJsb2NrIG9mIHByZUJsb2Nrcykge1xuICAgICAgICBfYWRkUHJlbG9hZGVyKHByZUJsb2NrKTtcblxuICAgICAgICAvLyBTdHJpcCB3aGl0ZXNwYWNlIGFyb3VuZCBjb2RlIHRhZ3Mgd2hlbiB0aGV5IGFyZSBpbnNpZGUgb2YgYSBwcmVcbiAgICAgICAgLy8gdGFnLiAgVGhpcyBtYWtlcyB0aGUgdGhlbWVzIGxvb2sgYmV0dGVyIGJlY2F1c2UgeW91IGNhbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBhZGQgZXh0cmEgbGluZWJyZWFrcyBhdCB0aGUgc3RhcnQgYW5kIGVuZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gV2hlbiB0aGUgcHJlIHRhZyBjb250YWlucyBhIGNvZGUgdGFnIHRoZW4gc3RyaXAgYW55IGV4dHJhXG4gICAgICAgIC8vIHdoaXRlc3BhY2UuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIEZvciBleGFtcGxlOlxuICAgICAgICAvL1xuICAgICAgICAvLyA8cHJlPlxuICAgICAgICAvLyAgICAgIDxjb2RlPnZhciBmb28gPSB0cnVlOzwvY29kZT5cbiAgICAgICAgLy8gPC9wcmU+XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHdpbGwgYmVjb21lOlxuICAgICAgICAvL1xuICAgICAgICAvLyA8cHJlPjxjb2RlPnZhciBmb28gPSB0cnVlOzwvY29kZT48L3ByZT5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gSWYgeW91IHdhbnQgdG8gcHJlc2VydmUgd2hpdGVzcGFjZSB5b3UgY2FuIHVzZSBhIHByZSB0YWcgb25cbiAgICAgICAgLy8gaXRzIG93biB3aXRob3V0IGEgY29kZSB0YWcgaW5zaWRlIG9mIGl0LlxuICAgICAgICBpZiAocHJlQmxvY2suZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKS5sZW5ndGgpIHtcblxuICAgICAgICAgICAgLy8gVGhpcyBmaXhlcyBhIHJhY2UgY29uZGl0aW9uIHdoZW4gUmFpbmJvdy5jb2xvciBpcyBjYWxsZWQgYmVmb3JlXG4gICAgICAgICAgICAvLyB0aGUgcHJldmlvdXMgY29sb3IgY2FsbCBoYXMgZmluaXNoZWQuXG4gICAgICAgICAgICBpZiAoIXByZUJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS10cmltbWVkJykpIHtcbiAgICAgICAgICAgICAgICBwcmVCbG9jay5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHJpbW1lZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHByZUJsb2NrLmlubmVySFRNTCA9IHByZUJsb2NrLmlubmVySFRNTC50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRoZSBwcmUgYmxvY2sgaGFzIG5vIGNvZGUgYmxvY2tzIHRoZW4gd2UgYXJlIGdvaW5nIHRvIHdhbnQgdG9cbiAgICAgICAgLy8gcHJvY2VzcyBpdCBkaXJlY3RseS5cbiAgICAgICAgZmluYWxQcmVCbG9ja3MucHVzaChwcmVCbG9jayk7XG4gICAgfVxuXG4gICAgLy8gQHNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3MzUwNjcvaG93LXRvLWNvbnZlcnQtYS1kb20tbm9kZS1saXN0LXRvLWFuLWFycmF5LWluLWphdmFzY3JpcHRcbiAgICAvLyBXZSBhcmUgZ29pbmcgdG8gcHJvY2VzcyBhbGwgPGNvZGU+IGJsb2Nrc1xuICAgIGZvciAoY29uc3QgY29kZUJsb2NrIG9mIGNvZGVCbG9ja3MpIHtcbiAgICAgICAgZmluYWxDb2RlQmxvY2tzLnB1c2goY29kZUJsb2NrKTtcbiAgICB9XG5cbiAgICBfaGlnaGxpZ2h0Q29kZUJsb2NrcyhmaW5hbENvZGVCbG9ja3MuY29uY2F0KGZpbmFsUHJlQmxvY2tzKSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIENhbGxiYWNrIHRvIGxldCB5b3UgZG8gc3R1ZmYgaW4geW91ciBhcHAgYWZ0ZXIgYSBwaWVjZSBvZiBjb2RlIGhhc1xuICogYmVlbiBoaWdobGlnaHRlZFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBvbkhpZ2hsaWdodChjYWxsYmFjaykge1xuICAgIG9uSGlnaGxpZ2h0Q2FsbGJhY2sgPSBjYWxsYmFjaztcbn1cblxuLyoqXG4gKiBFeHRlbmRzIHRoZSBsYW5ndWFnZSBwYXR0ZXJuIG1hdGNoZXNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2UgICAgICAgICAgICBuYW1lIG9mIGxhbmd1YWdlXG4gKiBAcGFyYW0ge29iamVjdH0gbGFuZ3VhZ2VQYXR0ZXJucyAgICBvYmplY3Qgb2YgcGF0dGVybnMgdG8gYWRkIG9uXG4gKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGluaGVyaXRzICBvcHRpb25hbCBsYW5ndWFnZSB0aGF0IHRoaXMgbGFuZ3VhZ2VcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZCBpbmhlcml0IHJ1bGVzIGZyb21cbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGxhbmd1YWdlLCBsYW5ndWFnZVBhdHRlcm5zLCBpbmhlcml0cykge1xuXG4gICAgLy8gSWYgd2UgZXh0ZW5kIGEgbGFuZ3VhZ2UgYWdhaW4gd2Ugc2hvdWxkbid0IG5lZWQgdG8gc3BlY2lmeSB0aGVcbiAgICAvLyBpbmhlcml0ZW5jZSBmb3IgaXQuIEZvciBleGFtcGxlLCBpZiB5b3UgYXJlIGFkZGluZyBzcGVjaWFsIGhpZ2hsaWdodGluZ1xuICAgIC8vIGZvciBhIGphdmFzY3JpcHQgZnVuY3Rpb24gdGhhdCBpcyBub3QgaW4gdGhlIGJhc2UgamF2YXNjcmlwdCBydWxlcywgeW91XG4gICAgLy8gc2hvdWxkIGJlIGFibGUgdG8gZG9cbiAgICAvL1xuICAgIC8vIFJhaW5ib3cuZXh0ZW5kKCdqYXZhc2NyaXB0JywgWyDigKYgXSk7XG4gICAgLy9cbiAgICAvLyBXaXRob3V0IHNwZWNpZnlpbmcgYSBsYW5ndWFnZSBpdCBzaG91bGQgaW5oZXJpdCAoZ2VuZXJpYyBpbiB0aGlzIGNhc2UpXG4gICAgaWYgKCFpbmhlcml0ZW5jZU1hcFtsYW5ndWFnZV0pIHtcbiAgICAgICAgaW5oZXJpdGVuY2VNYXBbbGFuZ3VhZ2VdID0gaW5oZXJpdHM7XG4gICAgfVxuXG4gICAgcGF0dGVybnNbbGFuZ3VhZ2VdID0gbGFuZ3VhZ2VQYXR0ZXJucy5jb25jYXQocGF0dGVybnNbbGFuZ3VhZ2VdIHx8IFtdKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGxhbmd1YWdlKSB7XG4gICAgZGVsZXRlIGluaGVyaXRlbmNlTWFwW2xhbmd1YWdlXTtcbiAgICBkZWxldGUgcGF0dGVybnNbbGFuZ3VhZ2VdO1xufVxuXG4vKipcbiAqIFN0YXJ0cyB0aGUgbWFnaWMgcmFpbmJvd1xuICpcbiAqIEByZXR1cm4ge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNvbG9yKC4uLmFyZ3MpIHtcblxuICAgIC8vIElmIHlvdSB3YW50IHRvIHN0cmFpZ2h0IHVwIGhpZ2hsaWdodCBhIHN0cmluZyB5b3UgY2FuIHBhc3MgdGhlXG4gICAgLy8gc3RyaW5nIG9mIGNvZGUsIHRoZSBsYW5ndWFnZSwgYW5kIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgLy9cbiAgICAvLyBFeGFtcGxlOlxuICAgIC8vXG4gICAgLy8gUmFpbmJvdy5jb2xvcihjb2RlLCBsYW5ndWFnZSwgZnVuY3Rpb24oaGlnaGxpZ2h0ZWRDb2RlLCBsYW5ndWFnZSkge1xuICAgIC8vICAgICAvLyB0aGlzIGNvZGUgYmxvY2sgaXMgbm93IGhpZ2hsaWdodGVkXG4gICAgLy8gfSk7XG4gICAgaWYgKHR5cGVvZiBhcmdzWzBdID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCB3b3JrZXJEYXRhID0gX2dldFdvcmtlckRhdGEoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIF9tZXNzYWdlV29ya2VyKHdvcmtlckRhdGEsIChmdW5jdGlvbihjYikge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoZGF0YS5yZXN1bHQsIGRhdGEubGFuZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfShhcmdzWzJdKSkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgeW91IHBhc3MgYSBjYWxsYmFjayBmdW5jdGlvbiB0aGVuIHdlIHJlcnVuIHRoZSBjb2xvciBmdW5jdGlvblxuICAgIC8vIG9uIGFsbCB0aGUgY29kZSBhbmQgY2FsbCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb24gY29tcGxldGUuXG4gICAgLy9cbiAgICAvLyBFeGFtcGxlOlxuICAgIC8vXG4gICAgLy8gUmFpbmJvdy5jb2xvcihmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0FsbCBtYXRjaGluZyB0YWdzIG9uIHRoZSBwYWdlIGFyZSBub3cgaGlnaGxpZ2h0ZWQnKTtcbiAgICAvLyB9KTtcbiAgICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX2hpZ2hsaWdodCgwLCBhcmdzWzBdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIE90aGVyd2lzZSB3ZSB1c2Ugd2hhdGV2ZXIgbm9kZSB5b3UgcGFzc2VkIGluIHdpdGggYW4gb3B0aW9uYWxcbiAgICAvLyBjYWxsYmFjayBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIHBhcmFtZXRlci5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGU6XG4gICAgLy9cbiAgICAvLyB2YXIgcHJlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICAgIC8vIHZhciBjb2RlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvZGUnKTtcbiAgICAvLyBjb2RlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbGFuZ3VhZ2UnLCAnamF2YXNjcmlwdCcpO1xuICAgIC8vIGNvZGVFbGVtZW50LmlubmVySFRNTCA9ICcvLyBIZXJlIGlzIHNvbWUgSmF2YVNjcmlwdCc7XG4gICAgLy8gcHJlRWxlbWVudC5hcHBlbmRDaGlsZChjb2RlRWxlbWVudCk7XG4gICAgLy8gUmFpbmJvdy5jb2xvcihwcmVFbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgLy8gTmV3IGVsZW1lbnQgaXMgbm93IGhpZ2hsaWdodGVkXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBJZiB5b3UgZG9uJ3QgcGFzcyBhbiBlbGVtZW50IGl0IHdpbGwgZGVmYXVsdCB0byBgZG9jdW1lbnRgXG4gICAgX2hpZ2hsaWdodChhcmdzWzBdLCBhcmdzWzFdKTtcbn1cblxuLyoqXG4gKiBNZXRob2QgdG8gYWRkIGFuIGFsaWFzIGZvciBhbiBleGlzdGluZyBsYW5ndWFnZS5cbiAqXG4gKiBGb3IgZXhhbXBsZSBpZiB5b3Ugd2FudCB0byBoYXZlIFwiY29mZmVlXCIgbWFwIHRvIFwiY29mZmVlc2NyaXB0XCJcbiAqXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jY2FtcGJlbGwvcmFpbmJvdy9pc3N1ZXMvMTU0XG4gKiBAcGFyYW0ge3N0cmluZ30gYWxpYXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcmlnaW5hbExhbmd1YWdlXG4gKiBAcmV0dXJuIHt2b2lkfVxuICovXG5mdW5jdGlvbiBhZGRBbGlhcyhhbGlhcywgb3JpZ2luYWxMYW5ndWFnZSkge1xuICAgIGFsaWFzZXNbYWxpYXNdID0gb3JpZ2luYWxMYW5ndWFnZTtcbn1cblxuLyoqXG4gKiBwdWJsaWMgbWV0aG9kc1xuICovXG5SYWluYm93ID0ge1xuICAgIGV4dGVuZCxcbiAgICByZW1vdmUsXG4gICAgb25IaWdobGlnaHQsXG4gICAgYWRkQWxpYXMsXG4gICAgY29sb3Jcbn07XG5cbmlmIChpc05vZGUpIHtcbiAgICBSYWluYm93LmNvbG9yU3luYyA9IGZ1bmN0aW9uKGNvZGUsIGxhbmcpIHtcbiAgICAgICAgY29uc3Qgd29ya2VyRGF0YSA9IF9nZXRXb3JrZXJEYXRhKGNvZGUsIGxhbmcpO1xuICAgICAgICBjb25zdCBwcmlzbSA9IG5ldyBQcmlzbSh3b3JrZXJEYXRhLm9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gcHJpc20ucmVmcmFjdCh3b3JrZXJEYXRhLmNvZGUsIHdvcmtlckRhdGEubGFuZyk7XG4gICAgfTtcbn1cblxuLy8gSW4gdGhlIGJyb3dzZXIgaG9vayBpdCB1cCB0byBjb2xvciBvbiBwYWdlIGxvYWRcbmlmICghaXNOb2RlICYmICFpc1dvcmtlcikge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKCFSYWluYm93LmRlZmVyKSB7XG4gICAgICAgICAgICBSYWluYm93LmNvbG9yKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbn1cblxuLy8gRnJvbSBhIG5vZGUgd29ya2VyLCBoYW5kbGUgdGhlIHBvc3RNZXNzYWdlIHJlcXVlc3RzIHRvIGl0XG5pZiAoaXNXb3JrZXIpIHtcbiAgICBzZWxmLm9ubWVzc2FnZSA9IHJhaW5ib3dXb3JrZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJhaW5ib3c7XG4iXSwibmFtZXMiOlsiaXNOb2RlIiwiaXNXb3JrZXIiLCJsZXQiLCJjb25zdCIsInV0aWxJc05vZGUiLCJ1dGlsSXNXb3JrZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNPLFNBQVNBLFFBQU0sR0FBRzs7UUFFckIsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQztLQUM5RTs7QUFFRCxBQUFPLElBQUEsU0FBU0MsVUFBUSxHQUFHO1FBQ3ZCLE9BQU8sT0FBTyxRQUFRLEtBQUssV0FBVyxJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsQ0FBQztLQUN6RTs7Ozs7Ozs7QUFRRCxBQUFPLElBQUEsU0FBUyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUU7Ozs7Ozs7UUFPdkNDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7OztRQU1yRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1hDLElBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDO1lBQ3hDQSxJQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7O1lBRTFGLElBQUksS0FBSyxFQUFFO2dCQUNQLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdkI7U0FDSjs7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNWLE9BQU8sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2pDOztRQUVELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7Ozs7O0FBV0QsQUFBTyxJQUFBLFNBQVMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7O1FBSTNELElBQUksTUFBTSxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1lBQ3BDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCOztRQUVELE9BQU8sTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDO0tBQzNDOzs7Ozs7OztBQVFELEFBQU8sSUFBQSxTQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUU7UUFDL0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM5Rjs7Ozs7Ozs7OztBQVVELEFBQU8sSUFBQSxTQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFO1FBQzdDRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7O1FBRWQsS0FBS0EsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1YsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDNUI7U0FDSjs7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNoQjs7Ozs7Ozs7Ozs7QUFXRCxBQUFPLElBQUEsU0FBUyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1FBQ25ELElBQUksTUFBTSxJQUFJLE1BQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7O1FBRUQsT0FBTyxJQUFJLEdBQUcsTUFBTSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7S0FDdkM7Ozs7Ozs7O0FBUUQsQUFBTyxJQUFBLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN6QkMsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDOztRQUVyQixLQUFLQSxJQUFNLFFBQVEsSUFBSSxNQUFNLEVBQUU7WUFDM0IsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNqQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7OztRQUdELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFBLENBQUMsQ0FBQztLQUMxQzs7Ozs7Ozs7Ozs7O0FBWUQsQUFBTyxJQUFBLFNBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFO1FBQ3BFQSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDN0U7Ozs7Ozs7Ozs7O0FBV0QsQUFBTyxJQUFBLFNBQVMsWUFBWSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7UUFDcEMsSUFBSUgsUUFBTSxFQUFFLEVBQUU7O1lBRVYsTUFBTSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDcEQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqQzs7UUFFREcsSUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUV2Q0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNCLElBQUksSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLElBQUksSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxJQUFJLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JDLElBQUksSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEMsSUFBSSxJQUFJLGFBQWEsQ0FBQzs7Ozs7UUFLdEJDLElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5REQsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFBLFFBQU8sR0FBRSxTQUFTLENBQUUsQ0FBQyxDQUFDOztRQUVwREMsSUFBTSxVQUFVLEdBQUcsSUFBTyx1QkFBbUIsR0FBRSxHQUFHLENBQUc7O1FBRXJEQSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDN0U7Ozs7Ozs7QUNoTEQsSUFBQSxJQUFNLEtBQUssR0FBQyxjQUNHLENBQUMsT0FBTyxFQUFFOzs7Ozs7UUFNckIsSUFBVSxZQUFZLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O1FBTzVCLElBQVEsZUFBZSxDQUFDOzs7Ozs7O1FBT3hCLElBQVUsb0JBQW9CLEdBQUcsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7OztRQWNwQyxTQUFhLHdCQUF3QixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7WUFDOUMsS0FBU0QsSUFBSSxHQUFHLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3RDLEdBQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDOzs7O2dCQUk1QixJQUFRLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUU7b0JBQ3BFLE9BQVcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JDLE9BQVcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUM1Qjs7Z0JBRUwsSUFBUSxVQUFVLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDNUQsT0FBVyxJQUFJLENBQUM7aUJBQ2Y7YUFDSjs7WUFFTCxPQUFXLEtBQUssQ0FBQztTQUNoQjs7Ozs7Ozs7OztRQVVMLFNBQWEsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7WUFDckMsSUFBUSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7O1lBRTdDLElBQVUsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFDNUMsSUFBUSxXQUFXLEVBQUU7Z0JBQ2pCLFNBQWEsSUFBSSxHQUFFLEdBQUUsV0FBVyxDQUFHO2FBQ2xDOztZQUVMLE9BQVcsQ0FBQSxnQkFBYyxHQUFFLFNBQVMsUUFBRyxHQUFFLElBQUksWUFBUSxDQUFDLENBQUM7U0FDdEQ7Ozs7Ozs7OztRQVNMLFNBQWEsb0JBQW9CLENBQUMsSUFBSSxFQUFFO1lBQ3BDLElBQVUsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6QyxLQUF1QixrQkFBSSxTQUFTLHlCQUFBLEVBQUU7Z0JBQ2xDLElBRFcsUUFBUTs7Z0JBQ2ZDLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsSUFBUSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDbkY7WUFDTCxPQUFXLElBQUksQ0FBQztTQUNmOzs7Ozs7Ozs7Ozs7Ozs7UUFlTCxTQUFhLFdBQVcsQ0FBQyxLQUFLLEVBQUU7WUFDNUIsSUFBUSxLQUFLLEdBQUcsRUFBRSxDQUFDOztZQUVuQixJQUFRLEtBQUssQ0FBQyxVQUFVLEVBQUU7Z0JBQ3RCLEtBQVMsSUFBSSxHQUFHLENBQUM7YUFDaEI7O1lBRUwsSUFBUSxLQUFLLENBQUMsU0FBUyxFQUFFO2dCQUNyQixLQUFTLElBQUksR0FBRyxDQUFDO2FBQ2hCOztZQUVMLE9BQVcsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQzs7Ozs7Ozs7Ozs7Ozs7O1FBZUwsU0FBYSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFVLEVBQUU7MkNBQU4sR0FBRyxDQUFDOztZQUNsRCxJQUFRLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ2hDLElBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osT0FBVyxLQUFLLENBQUM7YUFDaEI7Ozs7WUFJTCxJQUFVLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O1lBRXJDLEtBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBVSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxJQUFRLENBQUMsS0FBSyxFQUFFO2dCQUNaLE9BQVcsS0FBSyxDQUFDO2FBQ2hCOzs7WUFHTCxJQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hGLE9BQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsT0FBVyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzdCOztZQUVMLElBQVEsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0JBLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO1lBQzFDLElBQVUsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDOzs7Ozs7WUFNOUMsSUFBUSxRQUFRLEtBQUssTUFBTSxFQUFFO2dCQUN6QixPQUFXLEtBQUssQ0FBQzthQUNoQjs7Ozs7WUFLTCxJQUFRLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDaEQsT0FBVztvQkFDUCxTQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO29CQUMzQyxNQUFVLEVBQUUsTUFBTTtpQkFDakIsQ0FBQzthQUNMOzs7Ozs7OztZQVFMLFNBQWEsY0FBYyxDQUFDLElBQUksRUFBRTs7O2dCQUc5QixJQUFRLE9BQU8sQ0FBQyxJQUFJLEVBQUU7b0JBQ2xCLElBQVEsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDOUM7Ozs7OztnQkFNTCxZQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUN6QixTQUFhLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsTUFBVSxFQUFFLElBQUk7aUJBQ2YsQ0FBQzs7OztnQkFJTixvQkFBd0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7O2dCQUU1QyxJQUFRLFVBQVUsRUFBRTtvQkFDaEIsT0FBVyxLQUFLLENBQUM7aUJBQ2hCOztnQkFFTCxPQUFXO29CQUNQLFNBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQzNDLE1BQVUsRUFBRSxNQUFNO2lCQUNqQixDQUFDO2FBQ0w7Ozs7Ozs7O1lBUUwsU0FBYSxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUNqQyxJQUFVLEtBQUssR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7OztnQkFHbEMsSUFBUSxDQUFDLEtBQUssRUFBRTtvQkFDWixPQUFXO2lCQUNWOztnQkFFTCxJQUFVLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxJQUFVLFFBQVEsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkEwQnBDLElBQVUsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Z0JBVy9FLElBQVUsZUFBZSxHQUFHLFNBQVMsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7b0JBQ3ZFLFdBQWUsR0FBRyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsR0FBRyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7b0JBQ2xLLE9BQVc7aUJBQ1YsQ0FBQzs7Ozs7Z0JBS04sSUFBUSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7b0JBQy9CLGVBQW1CLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDekMsT0FBVztpQkFDVjs7Z0JBRUwsSUFBUSxTQUFTLENBQUM7Z0JBQ2xCLElBQVUsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7O2dCQUlyQyxJQUFRLFFBQVEsRUFBRTtvQkFDZCxTQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQy9DLGVBQW1CLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUN0QyxPQUFXO2lCQUNWOzs7OztnQkFLTCxTQUFhLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsY0FBYyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDakgsZUFBbUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQzthQUNyRTs7Ozs7Ozs7O1lBU0wsSUFBVSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QyxLQUF1QixrQkFBSSxTQUFTLHlCQUFBLEVBQUU7Z0JBQ2xDLElBRFcsUUFBUTs7Z0JBQ2YsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNCOzs7WUFHTCxPQUFXLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN0Qzs7Ozs7Ozs7O1FBU0wsU0FBYSx3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQ2xELEtBQXNCLGtCQUFJLFFBQVEseUJBQUEsRUFBRTtnQkFDaEMsSUFEVyxPQUFPOztnQkFDZEQsSUFBSSxNQUFNLEdBQUcsZUFBZSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDaEQsT0FBVyxNQUFNLEVBQUU7b0JBQ2YsTUFBVSxHQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3RFO2FBQ0o7Ozs7WUFJTCxPQUFXLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDOzs7Ozs7OztRQVFMLFNBQWEsc0JBQXNCLENBQUMsUUFBUSxFQUFFO1lBQzFDLElBQVEsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3BELE9BQVcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDekMsUUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELFFBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7YUFDaEU7O1lBRUwsT0FBVyxRQUFRLENBQUM7U0FDbkI7Ozs7Ozs7Ozs7O1FBV0wsU0FBYSwwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRTtZQUM5RCxlQUFtQixHQUFHLFFBQVEsQ0FBQztZQUMvQixRQUFZLEdBQUcsUUFBUSxJQUFJLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVELE9BQVcsd0JBQXdCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFOztRQUVMLElBQVEsQ0FBQyxPQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFDbEQsSUFBQSxDQUFLLENBQUEsQUFHTDs7SUNoWGUsU0FBUyxhQUFhLENBQUMsQ0FBQyxFQUFFO1FBQ3JDQyxJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDOztRQUV2QkEsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDQSxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUV6RCxTQUFTLE1BQU0sR0FBRztZQUNkLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ2IsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO2dCQUNkLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtnQkFDbEIsUUFBQSxNQUFNO2FBQ1QsQ0FBQyxDQUFDO1NBQ047Ozs7Ozs7Ozs7Ozs7UUFhRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDaEIsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDYixPQUFPO1NBQ1Y7O1FBRUQsVUFBVSxDQUFDLFlBQUc7WUFDVixNQUFNLEVBQUUsQ0FBQztTQUNaLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDcEM7Ozs7Ozs7QUNSREEsSUFBQUEsSUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0FBT3BCQSxJQUFBQSxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7QUFPMUJBLElBQUFBLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQzs7Ozs7OztBQU9uQkQsSUFBQUEsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0FBT2pCQSxJQUFBQSxJQUFJLG1CQUFtQixDQUFDOztBQUV4QkMsSUFBQUEsSUFBTSxNQUFNLEdBQUdDLFFBQVUsRUFBRSxDQUFDO0FBQzVCRCxJQUFBQSxJQUFNLFFBQVEsR0FBR0UsVUFBWSxFQUFFLENBQUM7O0FBRWhDSCxJQUFBQSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDeEIsSUFBQSxTQUFTLFVBQVUsR0FBRztRQUNsQixJQUFJLE1BQU0sSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ2pDLFlBQVksR0FBRyxZQUFZLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ3JEOztRQUVELE9BQU8sWUFBWSxDQUFDO0tBQ3ZCOzs7Ozs7Ozs7O0FBVUQsSUFBQSxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1FBQ3ZDQyxJQUFNLE1BQU0sR0FBRyxVQUFVLEVBQUUsQ0FBQzs7UUFFNUIsU0FBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQzthQUNsRDtTQUNKOztRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMvQjs7Ozs7Ozs7Ozs7QUFXRCxJQUFBLFNBQVMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7UUFDcEQsT0FBTyxTQUFTLHlCQUF5QixDQUFDLElBQUksRUFBRTtZQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDaEMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7O1lBRXBDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUN0QyxPQUFPLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbEQ7Ozs7Ozs7Ozs7WUFVRCxJQUFJLG1CQUFtQixFQUFFO2dCQUNyQixtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDOztZQUVELElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDckIsUUFBUSxFQUFFLENBQUM7YUFDZDtTQUNKLENBQUM7S0FDTDs7Ozs7Ozs7QUFRRCxJQUFBLFNBQVMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE9BQU87WUFDSCxVQUFBLFFBQVE7WUFDUixnQkFBQSxjQUFjO1lBQ2QsU0FBQSxPQUFPO1lBQ1AsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDO1NBQ25ELENBQUM7S0FDTDs7Ozs7Ozs7O0FBU0QsSUFBQSxTQUFTLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO1FBQ2hDRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNmLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1NBQzNCOztRQUVELElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDOztRQUU3QkMsSUFBTSxVQUFVLEdBQUc7WUFDZixFQUFFLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3pFLE1BQUEsSUFBSTtZQUNKLE1BQUEsSUFBSTtZQUNKLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7WUFDbEMsUUFBQSxNQUFNO1NBQ1QsQ0FBQzs7UUFFRixPQUFPLFVBQVUsQ0FBQztLQUNyQjs7Ozs7Ozs7OztBQVVELElBQUEsU0FBUyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFO1FBQ2hEQSxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQixLQUFnQixrQkFBSSxVQUFVLHlCQUFBLEVBQUU7WUFBM0JBLElBQU0sS0FBSzs7WUFDWkEsSUFBTSxRQUFRLEdBQUcsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEQsU0FBUzthQUNaOzs7OztZQUtELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7O1lBSS9CLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEtBQUssS0FBSyxFQUFFO2dCQUNwQyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDN0M7O1lBRURBLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUM1REEsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7O1lBRTdELEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNkLGNBQWMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLFVBQUEsUUFBUSxFQUFFLGFBQUEsV0FBVyxFQUFFLE9BQUEsS0FBSyxFQUFFLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDbkk7O1FBRUQsSUFBSSxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsQ0FBQztTQUNkO0tBQ0o7O0FBRUQsSUFBQSxTQUFTLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFDN0JBLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDbEMsS0FBS0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ25DOzs7Ozs7Ozs7QUFTRCxJQUFBLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUU7UUFDaEMsUUFBUSxHQUFHLFFBQVEsSUFBSSxXQUFXLEVBQUUsQ0FBQzs7Ozs7Ozs7UUFRckMsSUFBSSxHQUFHLElBQUksSUFBSSxPQUFPLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxVQUFVLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQzs7UUFFakZDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuREEsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JEQSxJQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDMUJBLElBQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQzs7O1FBRzNCLEtBQW1CLGtCQUFJLFNBQVMseUJBQUEsRUFBRTtZQUE3QkEsSUFBTSxRQUFROztZQUNmLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBcUJ4QixJQUFJLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUU7Ozs7Z0JBSTlDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUN4QyxRQUFRLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDNUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNsRDtnQkFDRCxTQUFTO2FBQ1o7Ozs7WUFJRCxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pDOzs7O1FBSUQsS0FBb0Isc0JBQUksVUFBVSwrQkFBQSxFQUFFO1lBQS9CQSxJQUFNLFNBQVM7O1lBQ2hCLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkM7O1FBRUQsb0JBQW9CLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMxRTs7Ozs7Ozs7O0FBU0QsSUFBQSxTQUFTLFdBQVcsQ0FBQyxRQUFRLEVBQUU7UUFDM0IsbUJBQW1CLEdBQUcsUUFBUSxDQUFDO0tBQ2xDOzs7Ozs7Ozs7O0FBVUQsSUFBQSxTQUFTLE1BQU0sQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFOzs7Ozs7Ozs7O1FBVWxELElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUN2Qzs7UUFFRCxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUMxRTs7QUFFRCxJQUFBLFNBQVMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUN0QixPQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUM3Qjs7Ozs7OztBQU9ELElBQUEsU0FBUyxLQUFLLEdBQVU7Ozs7Ozs7Ozs7Ozs7UUFVcEIsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLEVBQUU7WUFDN0JBLElBQU0sVUFBVSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLFNBQVMsSUFBSSxFQUFFO29CQUNsQixJQUFJLEVBQUUsRUFBRTt3QkFDSixFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlCO2lCQUNKLENBQUM7YUFDTCxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLE9BQU87U0FDVjs7Ozs7Ozs7OztRQVVELElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxFQUFFO1lBQy9CLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsT0FBTztTQUNWOzs7Ozs7Ozs7Ozs7Ozs7OztRQWlCRCxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2hDOzs7Ozs7Ozs7Ozs7QUFZRCxJQUFBLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRTtRQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsZ0JBQWdCLENBQUM7S0FDckM7Ozs7O0FBS0QsSUFBQSxPQUFPLEdBQUc7UUFDTixRQUFBLE1BQU07UUFDTixRQUFBLE1BQU07UUFDTixhQUFBLFdBQVc7UUFDWCxVQUFBLFFBQVE7UUFDUixPQUFBLEtBQUs7S0FDUixDQUFDOztBQUVGLElBQUEsSUFBSSxNQUFNLEVBQUU7UUFDUixPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxFQUFFLElBQUksRUFBRTtZQUNyQ0EsSUFBTSxVQUFVLEdBQUcsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5Q0EsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxRCxDQUFDO0tBQ0w7OztBQUdELElBQUEsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUN0QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxLQUFLLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7U0FDSixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2I7OztBQUdELElBQUEsSUFBSSxRQUFRLEVBQUU7UUFDVixJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztLQUNsQzs7QUFFRCxvQkFBZSxPQUFPLENBQUM7Ozs7In0=</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.16801s from github-fe-1e914f7.cp1-iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-ms83xOg2RIrlBasYYhooeAygj1P5S82HGgqZUu4KXEw=" src="https://assets-cdn.github.com/assets/frameworks-9acf37c4e836448ae505ab18621a28780ca08f53f94bcd871a0a9952ee0a5c4c.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-893KVKT0M/XPB28IGpVQELYWUb4oFs59Yd4HY67WTM8=" src="https://assets-cdn.github.com/assets/github-f3ddca54a4f433f5cf076f081a955010b61651be2816ce7d61de0763aed64ccf.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

