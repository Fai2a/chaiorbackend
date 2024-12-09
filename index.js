require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData={
    "login": "Fai2a",
    "id": 117386453,
    "node_id": "U_kgDOBv8s1Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/117386453?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Fai2a",
    "html_url": "https://github.com/Fai2a",
    "followers_url": "https://api.github.com/users/Fai2a/followers",
    "following_url": "https://api.github.com/users/Fai2a/following{/other_user}",
    "gists_url": "https://api.github.com/users/Fai2a/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Fai2a/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Fai2a/subscriptions",
    "organizations_url": "https://api.github.com/users/Fai2a/orgs",
    "repos_url": "https://api.github.com/users/Fai2a/repos",
    "events_url": "https://api.github.com/users/Fai2a/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Fai2a/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Faiqa Rafiq",
    "company": null,
    "blog": "",
    "location": "Punjab, Faisalabad",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 36,
    "public_gists": 0,
    "followers": 3,
    "following": 8,
    "created_at": "2022-11-03T17:32:49Z",
    "updated_at": "2024-12-06T18:14:28Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('<h1>This is the Twitter route!</h1>');
  });

app.get('/login',(req,res)=>{
    res.send("<h1>This is a login page</h1>")
})  

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/github',(req,res)=>{
  res.json(githubData)
})