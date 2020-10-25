const axios = require("axios");
const assert = require("assert")

function validateGet(url){
    return axios.get(url)
        .then(res => {
            assert(res.status == 200);
            console.log(`get ${url}: get request valid`)
        })
        .catch(err => console.log(`get ${url}: expected 200, got ${err}`))
}

function validatePost(url, post){
    return axios.post(url, post)
        .then(res => {
            assert(res.status == 201);
            console.log(`post ${url}: post request valid`)
        })
        .catch(err => console.log(`post ${url}: expected 201, got ${err}`))
}

function validatePut(url, post){
    return axios.put(url, post)
        .then(res => {
            assert(res.status == 200);
            console.log(`put ${url}: put request valid`)
        })
        .catch(err => console.log(`put ${url}: expected 200, got ${err}`))
}

function validateDelete(url){
    return axios.delete(url)
        .then(res => {
            assert(res.status == 200);
            console.log(`put ${url}: delete request valid`)
        })
        .catch(err => console.log(`put ${url}: expected 200, got ${err}`))
}

function validateNeg(url){
    return axios.get(url)
        .then(res => console.log(`get ${url}: expected 404, got ${res}`))
        .catch(err => {
            assert(err.response.status == 404);
            console.log(`get ${url}: negative test return 404 as expected`)
        })
}

//  1a
validateGet("https://jsonplaceholder.typicode.com/posts")
validateGet("https://jsonplaceholder.typicode.com/posts/1")

validatePost("https://jsonplaceholder.typicode.com/posts", {
    userID: 1,
    id: 1,
    title: "title",
    body: "body"
})

validatePut("https://jsonplaceholder.typicode.com/posts/1", {
    userID: 1,
    id: 1,
    title: "title",
    body: "body"
})

validateDelete("https://jsonplaceholder.typicode.com/posts/1")

// 1b
validateNeg("https://jsonplaceholder.typicode.com/posts/idontexist")