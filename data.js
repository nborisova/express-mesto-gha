// GET /users

[

  {
    "name":"Hack5",
    "about":"Codding5",
    "avatar":"...",
    "_id":"a854d8253e843c9237e4f39b",
    "cohort":"cohort-66",
  }
]

// GET  users/me

{
  "data": {
      "_id": "64d94cf136ce0c001a422730",
      "email": "gggg@eee.ru"
  }
}

// PATCH users/me

{
  "name": "Nb",
  "about": "Bn",
  "avatar": "https://w.forfun.com/fetch/67/670c730feed54dd678392a720f37c492.jpeg?w=2500",
  "_id": "1079afe8e393529515d09890",
  "cohort": "cohort-66"
}

// PATCH users/me/avatar

{
  "name": "test",
  "about": "test",
  "avatar": "https://w.forfun.com/fetch/67/670c730feed54dd678392a720f37c492.jpeg?w=2500",
  "_id": "1079afe8e393529515d09890",
  "cohort": "cohort-66"
}

// POST /cards

{
  "likes": [],
  "_id": "64d94e0438b6eb0418bcbb02",
  "name": "Milan",
  "link": "https://w.forfun.com/fetch/67/670c730feed54dd678392a720f37c492.jpeg?w=2500",
  "owner": {
      "name": "Nb",
      "about": "Bn",
      "avatar": "https://w.forfun.com/fetch/67/670c730feed54dd678392a720f37c492.jpeg?w=2500",
      "_id": "1079afe8e393529515d09890",
      "cohort": "cohort-66"
  },
  "createdAt": "2023-08-13T21:41:24.670Z"
}

// GET /cards

[
  {
      "likes": [
          {
              "name": "OmegaCSacпл",
              "about": "WatchSCacs",
              "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
              "_id": "e9770ec0528dde082527ef10",
              "cohort": "cohort-66"
          }
      ],
      "_id": "64d7ffc075d73903dc916b39",
      "name": "owl",
      "link": "https://s1.1zoom.ru/big7/471/Owls_Birds_Glance_537043_2485x1920.jpg",
      "owner": {
          "name": "OmegaCSacпл",
          "about": "WatchSCacs",
          "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
          "_id": "e9770ec0528dde082527ef10",
          "cohort": "cohort-66"
      },
      "createdAt": "2023-08-12T21:55:12.808Z"
  }
]

// GET /cards/:cardId

{
  "likes": [
      {
          "name": "OmegaCSacпл",
          "about": "WatchSCacs",
          "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
          "_id": "e9770ec0528dde082527ef10",
          "cohort": "cohort-66"
      }
  ],
  "_id": "64d7ffc075d73903dc916b39",
  "name": "owl",
  "link": "https://s1.1zoom.ru/big7/471/Owls_Birds_Glance_537043_2485x1920.jpg",
  "owner": {
      "name": "OmegaCSacпл",
      "about": "WatchSCacs",
      "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
      "_id": "e9770ec0528dde082527ef10",
      "cohort": "cohort-66"
  },
  "createdAt": "2023-08-12T21:55:12.808Z"
}

// DELETE /cards/:cardId

{
  "message": "Пост удалён"
}

// PUT /cards/:cardId/likes

{
  "likes": [
      {
          "name": "OmegaCSacпл",
          "about": "WatchSCacs",
          "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
          "_id": "e9770ec0528dde082527ef10",
          "cohort": "cohort-66"
      },
      {
          "name": "Nb",
          "about": "Bn",
          "avatar": "https://w.forfun.com/fetch/67/670c730feed54dd678392a720f37c492.jpeg?w=2500",
          "_id": "1079afe8e393529515d09890",
          "cohort": "cohort-66"
      }
  ],
  "_id": "64d7ffc075d73903dc916b39",
  "name": "owl",
  "link": "https://s1.1zoom.ru/big7/471/Owls_Birds_Glance_537043_2485x1920.jpg",
  "owner": {
      "name": "OmegaCSacпл",
      "about": "WatchSCacs",
      "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
      "_id": "e9770ec0528dde082527ef10",
      "cohort": "cohort-66"
  },
  "createdAt": "2023-08-12T21:55:12.808Z"
}

// DELETE /cards/:cardId/likes

{
  "likes": [
      {
          "name": "OmegaCSacпл",
          "about": "WatchSCacs",
          "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
          "_id": "e9770ec0528dde082527ef10",
          "cohort": "cohort-66"
      }
  ],
  "_id": "64d7ffc075d73903dc916b39",
  "name": "owl",
  "link": "https://s1.1zoom.ru/big7/471/Owls_Birds_Glance_537043_2485x1920.jpg",
  "owner": {
      "name": "OmegaCSacпл",
      "about": "WatchSCacs",
      "avatar": "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80",
      "_id": "e9770ec0528dde082527ef10",
      "cohort": "cohort-66"
  },
  "createdAt": "2023-08-12T21:55:12.808Z"
}
