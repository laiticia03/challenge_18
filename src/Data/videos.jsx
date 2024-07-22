const videos = [
    {
      id: 1,
      title: 'Amazing Dance',
      url: 'https://www.example.com/video1.mp4',
      user: 'User1',
      likes: 0,
      comments: [
        { id: 1, user: 'User2', text: 'Great dance!' },
      ],
    },
    {
      id: 2,
      title: 'Funny Skit',
      url: 'https://www.example.com/video2.mp4',
      user: 'User2',
      likes: 0,
      comments: [
        { id: 2, user: 'User1', text: 'Hilarious!' },
      ],
    },
    // Add more videos as needed
  ];
  
  export default videos;