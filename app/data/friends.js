//array that holds all of the "friends" that have taken the survey
//initialize starting with "dummy" data

var friendList = [
    {
        name: "Kermit the Frog",
        photo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg",
        scores: [
            4,
            5,
            5,
            5,
            4,
            4,
            4,
            4,
            3,
            3
        ]
    },
    {
        name: "Oscar the Grouch",
        photo: "https://pbs.twimg.com/profile_images/2678877977/617fd5d2ee2151b992e5617d9c834e8b_400x400.jpeg",
        scores: [1, 1, 5, 4, 1, 1, 1, 5, 1, 1]
    },
    {
        name: "Big Bird",
        photo: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-ses-big-bird.jpg",
        scores: [4, 3, 1, 2, 4, 3, 3, 1, 3, 5]
    },
    {
        name: "Elmo",
        photo: "https://pbs.twimg.com/profile_images/716986458406424576/8AOacOOQ_400x400.jpg",
        scores: [3, 3, 1, 2, 4, 3, 3, 1, 3, 3]
    }
]

module.exports = friendList;